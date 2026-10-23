# 🇬🇷 希臘葡萄酒課程框架（Diploma 備考導向）

> 狀態：頁面、路由、進度、21 課大綱已就緒。**Level 1（6 課）已完成正式內容**（含測驗與 en/ja）；Level 2、3 仍為「封面＋本課重點」框架。
> 分支：`feat/greece-course-framework`（未合併）

## 結構

### Level 1 - 希臘葡萄酒入門（6 課）
建立希臘葡萄酒基礎：歷史、地理氣候、本土品種與六大產區

- **GR1M1 歷史、地理與栽培**
  - `gr-l1-1` 認識希臘葡萄酒（15 分）
  - `gr-l1-2` 地理、氣候與葡萄栽培（16 分）
- **GR1M2 葡萄品種**
  - `gr-l1-3` 主要白葡萄品種（18 分）
  - `gr-l1-4` 主要紅葡萄品種（16 分）
- **GR1M3 產區總覽與評量**
  - `gr-l1-5` 希臘產區總覽（18 分）
  - `gr-l1-6` Level 1 綜合評量（25 分）

### Level 2 - 希臘產區與法規（8 課）
逐區掌握 PDO／PGI 法規、各產區風格與甜酒傳統

- **GR2M1 分級制度**
  - `gr-l2-1` 分級制度：PDO、PGI 與傳統名稱（20 分）
- **GR2M2 北部與伯羅奔尼撒**
  - `gr-l2-2` 馬其頓與色薩利（20 分）
  - `gr-l2-3` 伯羅奔尼撒（20 分）
- **GR2M3 島嶼產區**
  - `gr-l2-4` 聖托里尼與愛琴海島嶼（22 分）
  - `gr-l2-5` 克里特與愛奧尼亞群島（20 分）
- **GR2M4 其餘產區、甜酒與評量**
  - `gr-l2-6` 伊庇魯斯、中希臘、色雷斯與 Retsina（18 分）
  - `gr-l2-7` 甜酒與傳統酒款（18 分）
  - `gr-l2-8` Level 2 綜合評量（30 分）

### Level 3 - 希臘葡萄酒 Diploma 精修（7 課）
以 WSET Diploma 為目標：栽培釀造深度、風土比較、法規判讀、產業與應考技巧

- **GR3M1 栽培與釀造**
  - `gr-l3-1` 葡萄栽培深度（22 分）
  - `gr-l3-2` 釀造與風格（22 分）
- **GR3M2 風土、品種與法規**
  - `gr-l3-3` 風土比較與品種剖析（24 分）
  - `gr-l3-4` 法規深度與標籤判讀（22 分）
- **GR3M3 產業、應考與評量**
  - `gr-l3-5` 產業、市場與貿易（20 分）
  - `gr-l3-6` Diploma 品飲與論述（25 分）
  - `gr-l3-7` Level 3 綜合評量（35 分）

## 已完成的框架項目
- 路由 `/greece`（`COURSE_ACCESS_RULES`：free）、`PlatformHome` 卡片（預設**未上架**，僅 admin 可見）、主題色、en/ja/zh-TW 文案
- `src/components/greece/`：`GreecePage`、`GreeceLevelSelector`（3 階段）、`GreeceLearningSystem`、`GreeceCourseLayout`
- `greeceLearningStore`（進度存 localStorage，並透過 `courseProgressSync` 同步 Supabase，課程代號 `greece`）
- 21 課資料 `src/data/greece/gr-l*.js`＋en/ja 翻譯 `src/locales/{en,ja}/lessons/greece/`
- 共用 `LevelTrack` 新增選用屬性 `maxColumns`（預設 2，不影響其他課程）

## Level 1 內容說明
- 每課 4 張內容投影片＋知識檢測，gr-l1-6 為 8 題綜合評量（及格 60）
- 事實來源：Wines of Greece（33 PDO／114 PGI）、WineWithSeth（約 9.6 萬公頃、300+ 本土品種、品種與土壤細節）、Drive 筆記；PDO 分區以官方地圖為準（4＋4＋7＋3＋8＋7＝33）
- 刻意未寫入：PDO 100%／PGI 比例、Reserve 陳年月數（留待 Level 2 查證；來源間 PGI 比例有 80%／85% 之別，EU 條文為 85%，仍須對官方文件確認）
- 「六大地理區」為教學分法，非官方行政區

## 尚未做（下一階段）
- Level 2、3 正式內容（投影片、測驗、Diploma 論述題）
- 互動地圖＋PDO 邊界資料（33 PDO，需另找公開 GeoJSON）、遊戲、品飲筆記（首頁已顯示「即將推出」）
- 成就系統、詞彙辭典（`WineGlossary`／`AdminGlossary` 尚未加入 greece）
- Supabase `courses` 資料表需新增 `greece` 一列才能在首頁上架
- 實際 vite build 與畫面檢查

## 資料來源（Drive）與待查證事項
- `greece.pdf`（Court of Master Sommeliers, 2018）、`希臘酒.pptx`（2022 筆記）、`greeceregs.pdf`（2011 法規）、`193269_map_GREECE PDO.pdf`（33 PDO 官方地圖）
- ⚠ 以上資料多為 2011–2018，**數字與名單須對照現行官方資料（希臘農業部、eAmbrosia）再寫入正式內容**：
  - PDO 數量（地圖列 33）、PGI 數量（舊資料 58）
  - Reserve／Grand Reserve 陳年月數
  - PDO「100% 本區」與 PGI「至少 85%」的比例要求
  - 名稱拼寫差異（如 Amynteo／Amyndeo）
