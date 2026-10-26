# 隆河課程公開檢查表（階段 F）

> 本檔只整理「公開時要做什麼」，**沒有任何一項已被套用**。所有 migration 都未執行、課程仍是 `active=false`、`show_on_home=false`，前端僅管理員可見。

## 1. 待套用的 migration 與順序

依檔名時間戳（Supabase 預設就是依此順序）依序套用：

| 順序 | 檔案 | 內容 | 備註 |
|---|---|---|---|
| 0（前置） | `20261023000000_add_greece_tasting_types.sql`、`20261023000100_add_greece_course.sql`、`20261023000200_add_greece_glossary.sql` | 希臘的三個 migration | 若希臘尚未套用，**必須先於隆河套用**。隆河的兩個 CHECK 重建檔是以希臘清單為基礎再加 `rh_*`／`rhone`；若希臘 migration 在隆河之後才套用，會把 CHECK 重設回不含隆河的清單，隆河筆記與詞彙就會被拒絕。 |
| 1 | `20261025000000_add_rhone_course.sql` | `courses` 新增 `rhone`（`active=false`、`show_on_home=false`），暫定價格 1200／2400，月 290／590，年 1800／3600（沿用希臘） | 價格請自行確認後再改（見下方第 3 節）。以 `ON CONFLICT (id) DO UPDATE` 寫入，可重複執行。 |
| 2 | `20261026000000_add_rhone_tasting_types.sql` | `tasting_notes.wine_type` CHECK 加入 `rh_north_red`、`rh_south_red`、`rh_white`、`rh_rose`、`rh_sweet`、`rh_sparkling`、`rh_other` | 未套用前，隆河品飲筆記儲存會被 CHECK 拒絕。 |
| 3 | `20261026000100_add_rhone_glossary.sql` | `wine_glossary.region` CHECK 加入 `rhone`＋17 筆詞條（第三語用既有 `fr` 欄，不新增欄位） | 詞條中文用字（希哈、教皇新堡，其餘沿用原名）若有慣用譯名，套用前直接改檔。`ON CONFLICT (region, zh) DO NOTHING`，可重複執行。 |

建議先在 staging／分支資料庫試跑，確認 1→3 無錯誤後再上正式環境。

## 2. 公開時的前端／資料動作（皆待你決定時機）

1. `src/components/PlatformHome.vue`：`ADMIN_ONLY_COURSES = ['greece', 'rhone']` 移除 `'rhone'`（若希臘仍未公開則只保留 `'greece'`）。
2. `src/router/index.js`：`/rhone` 路由 meta 的 `requiresAdmin: true` 移除（階段 F 新加的防護：避免非管理員直接輸入網址進入；希臘路由沒有這個防護，未改動）。
3. 資料庫：`UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'rhone';`（同樣寫在第 1 號 migration 檔末的註解）。`active=false` 時購買／訂閱不開放，`show_on_home=false` 時首頁不顯示。
4. 價格：在 `courses` 表直接調整 `price_basic`／`price_premium` 與四個月／年價欄位（或改 migration 後再套用）。
5. 首頁卡片目前標示「管理員」狀態與進入按鈕文字（`home.courses.common.statusAdmin`／`enterAdmin`）；公開後建議改用一般的 `statusActive`／`enter` 文案，參考其他課程卡片的寫法。
6. 氣候圖層資料檔 `public/data/rhone-climate.json` 尚未產生（Open-Meteo 當時額度用完）：`NODE_USE_ENV_PROXY=1 node scripts/build-rhone-climate.mjs`（可加 `--merge` 接續）後提交。未產生時圖層顯示「無資料」，不影響其他功能。
7. 地圖需要 `VITE_MAPBOX_TOKEN`（與其他課程相同）。

## 3. 公開前建議再人工確認

- 價格與訂閱方案。
- 未解事實（見 `RHONE_COURSE_FRAMEWORK.md` 第 14 節）：已確保未進測驗，但課內有標示「概略」「草案」的段落，Inter Rhône 或 INAO 規格轉正後可再更新。
- 以管理員帳號實際點過一輪（地圖有 Mapbox token 時、品飲筆記儲存〔需先套用第 2 號 migration〕、成就、遊戲、en／ja 切換）。

## 4. 自動檢查腳本

```
node scripts/check-rhone-final.mjs     # 21 課空殼、en/ja 逐鍵覆蓋、en 殘留中文、rhoneUi 字典對 gt() 覆蓋
node scripts/check-rhone-runtime.mjs   # 以 en／ja 實際產生遊戲題目（約 3,150 題）檢查殘留中文，並掃描互動資料字面量
```
