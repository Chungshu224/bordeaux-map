# 香檳課程公開檢查表（階段 F）

> 本檔只整理「公開時要做什麼」，**沒有任何一項已被套用**。課程仍是 `active=false`、`show_on_home=false`，前端僅管理員可見（卡片 `v-if="isAdmin"`，路由 `requiresAdmin: true`）。

## 1. 待套用的 migration 與順序

依檔名時間戳（Supabase 依此順序）。隆河已合併進 master，其三個 migration（`20261025000000_add_rhone_course.sql`、`20261026000000_add_rhone_tasting_types.sql`、`20261026000100_add_rhone_glossary.sql`）與希臘三個（`20261023*`）同樣尚未套用的話，**都必須先於香檳套用**。

| 順序 | 檔案 | 內容 |
|---|---|---|
| 0（前置） | 希臘 `20261023000000/100/200`、隆河 `20261025000000`、`20261026000000/100` | 香檳的兩個 CHECK 清單是「希臘＋隆河＋香檳」整份覆蓋，若這些在香檳之後才套用，會把 CHECK 重設成不含香檳的清單，香檳筆記與詞條就會被拒絕 |
| 1 | `20261026000200_add_champagne_course.sql` | `courses` 新增 `champagne`（`active=false`、`show_on_home=false`），暫定價格 1200／2400、月 290／590、年 1800／3600（沿用希臘）；`ON CONFLICT DO UPDATE`，可重複執行。**階段 F 由 `20261025000000` 改號**，因為與隆河的 `20261025000000_add_rhone_course.sql` 版本號相同，Supabase 的 migration 版本會撞號 |
| 2 | `20261027000000_add_champagne_tasting_types.sql` | `tasting_notes.wine_type` CHECK 加入 `ch_nv/ch_vintage/ch_bdb/ch_bdn/ch_rose/ch_prestige/ch_sweet/ch_still/ch_other`（清單含希臘＋隆河） |
| 3 | `20261027000100_add_champagne_glossary.sql` | `wine_glossary.region` CHECK 加入 `champagne`（清單含希臘＋隆河）＋詞條，第三語用既有 `fr` 欄 |

建議先在 staging／分支資料庫試跑 1→3 再上正式環境。未套用第 2 號前，香檳品飲筆記儲存會被 CHECK 拒絕。

## 2. 公開時的前端／資料動作（時機由你決定）

1. `src/components/PlatformHome.vue`：`ADMIN_ONLY_COURSES` 移除 `'champagne'`；首頁卡片的 `v-if="isAdmin"` 改為一般課程卡片寫法（參考其他課程），按鈕文案由 `enterAdmin` 改 `enter`。
2. `src/router/index.js`：`/champagne` 路由 meta 移除 `requiresAdmin: true`。
3. 資料庫：`UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'champagne';`
4. 價格：確認後直接改 `courses` 的 `price_*` 欄位。
5. 地圖需要 `VITE_MAPBOX_TOKEN`。氣候資料 `public/data/champagne-climate.json` 已產生。

## 3. 公開前建議人工確認

- 價格與訂閱方案。
- 以管理員帳號有 Mapbox token 的環境實際點過：地圖（三色、四大產區篩選、搜尋、氣候圖層）、遊戲、品飲筆記儲存（需先套用第 2 號）、成就、en／ja 切換。
- 單一來源的年度數字（出貨、營收、庫存、集團交易）每年會變動，見 `CHAMPAGNE_COURSE_FRAMEWORK.md` 第 14、16 節。

## 4. 自動檢查

```
node scripts/check-champagne-i18n.mjs ch-l1   # 各課 en/ja 逐鍵覆蓋（ch-l2、ch-l3 同）
node scripts/check-champagne-final.mjs        # 21 課完整性、en/ja 覆蓋、champagneUi 字典對 gt() 覆蓋、en 殘留中文、測驗有出入數字掃描
```
