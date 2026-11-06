# 新課程的資料庫遷移範本

新增一門課程時，複製這裡的三支範本到 `supabase/migrations/`，改好佔位字後再交由管理員在 Supabase SQL 編輯器手動套用。這個資料夾不在 `migrations/` 底下，Supabase CLI 不會執行它。

| 範本 | 複製成 | 要改的地方 |
|---|---|---|
| `01_add_course.sql` | `<時間戳>_add_<course_id>_course.sql` | `{{course_id}}`、名稱、描述、價格 |
| `02_add_tasting_types.sql` | `<時間戳>_add_<course_id>_tasting_types.sql` | 只改 `new_vals` 陣列 |
| `03_add_glossary.sql` | `<時間戳>_add_<course_id>_glossary.sql` | `new_region`、語言欄位、詞條 |

## 為什麼要用這套範本

過去每門課都是「複製上一門課的遷移檔，刪掉 CHECK 限制，再用一份寫死的完整清單重建」。這有兩個問題：

1. **其他分支的課程會被漏掉。** Canada 在 `feat/canada-*` 分支開發，遷移先套用到正式資料庫，但 master 的清單裡沒有它。之後只要重跑任何一支舊寫法的遷移，重建限制就會因為既有的 canada 資料而失敗。
2. **套用順序變得很重要。** 每支遷移都必須包含「之前所有課程」的值，順序一錯就會刪掉別人的值。

範本 2、3 改成先讀取資料庫**目前**的限制值，再加上新值後重建：

- 不會刪掉任何既有值。
- 與其他課程的遷移套用順序無關。
- 重複執行也安全。
- 找不到現有限制時會直接中止，不會用只含新值的限制取代。

## 套用注意事項

- **不要使用 `supabase db push`。** 正式資料庫的遷移紀錄是空的（過去都在 SQL 編輯器手動執行），`db push` 會把所有遷移重跑一遍。
- 套用前可先用唯讀查詢確認現況，例如：

  ```sql
  select conname, pg_get_constraintdef(oid)
  from pg_constraint
  where conname in ('tasting_notes_wine_type_check', 'wine_glossary_region_check');
  ```

- 課程預設 `active = false`、`show_on_home = false`；公開前請確認價格，並同步移除前端的 `ADMIN_ONLY_COURSES` 與路由的 `requiresAdmin`。
