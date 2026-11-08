# 🏔️ 東歐與巴爾幹葡萄酒課程框架（延伸課程）

> 狀態：**框架已依你的決定更新**（範圍＝羅馬尼亞、保加利亞、斯洛維尼亞、克羅埃西亞、摩爾多瓦＋「其他」一課；不含匈牙利；喬治亞拆為獨立課程 → `GEORGIA_COURSE_FRAMEWORK.md`）。
> 尚未寫程式、未建路由。查證見 `EASTERNEUROPE_FACT_CHECK.md`。分支：`feat/easterneurope-framework`（未合併）。
> ⚠ ＝數字或來源有出入，須對官方文件確認後才進題庫。

## 1. 定位與設計原則
- 課程代號 `easterneurope`，名稱「東歐與巴爾幹」；3 階段 21 課；延伸課程（是否在 D3 範圍待使用者以 WSET 規格確認）。
- 國家：斯洛維尼亞、克羅埃西亞、羅馬尼亞、保加利亞、摩爾多瓦；另 1 課帶過捷克、斯洛伐克、塞爾維亞、北馬其頓、黑山、亞美尼亞、烏克蘭。
- 不重複：匈牙利、奧地利、希臘已有獨立課程；喬治亞見另一門。總覽只做連結。
- 命名備註：斯洛維尼亞嚴格說屬中南歐、非巴爾幹核心，但教學上常與克羅埃西亞並列，故沿用；名稱可改。
- 僅供管理員、不販售（`active=false`、`show_on_home=false`、price 0；`NOT_FOR_SALE_IDS` 加入）。

## 2. 課程結構（3 階段 21 課）
### Level 1 - 入門（6 課）
1. 歷史脈絡：古老傳統、共產時期、私有化與入歐盟
2. 地理與氣候：大陸性、黑海、亞得里亞海、喀爾巴阡與巴爾幹山脈
3. 白葡萄品種：Graševina、Malvazija Istarska、Rebula、Fetească Regală／Albă、Misket 系、Dimyat
4. 紅葡萄品種：Plavac Mali、Teran／Refosco、Fetească Neagră、Mavrud、Melnik、Gamza
5. 各國總覽與地圖
6. Level 1 綜合評量

### Level 2 - 逐國產區與法規（8 課）
7. 斯洛維尼亞：三區九分區（Podravje／Posavje／Primorska）
8. 克羅埃西亞 I：大陸區（Slavonija、Podunavlje、Zagorje–Međimurje、Plešivica）
9. 克羅埃西亞 II：沿海區（Istra、Dalmacija；Dingač、Postup）
10. 羅馬尼亞：DOC／IGP、Dealu Mare、Transylvania、Dobrogea、Cotnari
11. 保加利亞：PGI（Thracian Lowlands、Danubian Plain）、本土與國際品種
12. 摩爾多瓦：地理標示區、地下酒窖（Cricova、Mileștii Mici）
13. 其他國家
14. Level 2 綜合評量

### Level 3 - Diploma 精修（7 課）
15. 栽培與釀造深度：舊園、私有化後重植、橡木與現代風格
16. 風土與品種比較：同品種跨國（Graševina／Welschriesling、Gamza／Kadarka）
17. 法規與標籤：歐盟 PDO／PGI（SI、HR、RO、BG）vs 非歐盟（MD 等）
18. 產業、市場與貿易
19. 風格辨識與盲品
20. Diploma 品飲與論述（D3 題型）
21. Level 3 綜合評量

## 3. 查證標記（摘要；細節見查證檔）
| 課 | 重點 | 標記 |
|---|---|---|
| 1–2 | 歷史、氣候概念 | ✅ |
| 3–4 | 品種特徵 | ✅概念／⚠親緣（Gamza＝Kadarka 等） |
| 7 | 三區九分區面積 | ✅（gov.si） |
| 8–9 | Dingač 1961、Postup 1967、分區方式 | ⚠ 三區 vs 四區分法、公頃 |
| 10 | 33 DOC／12 IG、CMD 187／CT 220／CIB 240 g/L | ⚠ 須對 ONVPV |
| 11 | 52 PDO 與兩大 PGI | ⚠ 出口比例勿入題庫 |
| 12–13 | 摩爾多瓦與其他國家 | ❌ 未查證 |

## 4. 考試題型（D3）
單選、配對（品種↔國家、產區↔國家）、排序、短答、比較論述（共產後轉型）、盲品結論。帶數字題目於 ⚠ 解除後才出。

## 5. 互動地圖與邊界資料（已完成可行性檢查）
| 國家 | 來源 | 筆數 | 備註 |
|---|---|---|---|
| 斯洛維尼亞 | Bianchi et al. (2022)（Figshare，CC0；希臘課同源） | 14 | 含 Teran、Cviček、Bizeljčan 等 |
| 克羅埃西亞 | 同上 | 18 | 含 Dingač、Muškat momjanski；**資料集無 Postup** |
| 羅馬尼亞 | 同上 | 40 | 部分名稱重複（舊／新登記，如 Dealu Mare 4 筆、Panciu 3 筆）→ 建置時須去重 |
| 保加利亞 | 同上 | 52 | 名稱為西里爾字母，須對照拉丁字母 |
| 摩爾多瓦 | OpenStreetMap 行政區（ODbL） | 待定 | 非歐盟，無 PDO 資料集；地理標示區多由 raion 組成，需依法規清單合併 |
- 資料集是 2021 年前的快照，與現行官方名單可能不同，頁面須標示。
- 地圖頁沿用 `regionMap` 共用元件（比照 `GreeceMapPage`）。
- 摩爾多瓦若採 OSM，頁面須標示 © OpenStreetMap contributors（ODbL）。

## 6. 技術落點
`src/data/easterneurope/ee-l*.js`；`src/components/easterneurope/*`；`easterneuropeLearningStore`；en/ja；路由 `/easterneurope`（admin only）；`CourseWorldMap` 的 `GEO` 加座標（約 [24, 45]）；`scripts/build-easterneurope-geojson.py`、`scripts/build-easterneurope-climate.mjs`；migrations 只準備不套用。

## 7. 實作階段
A 骨架 → B Level 1 → C Level 2（先解除 ⚠）→ D Level 3 與模擬考 → E 地圖＋遊戲＋筆記＋成就＋氣候 → F migrations、smoke test。

## 8. 階段 A 完成紀錄（2026-11-09）
骨架已建於 `feat/easterneurope-course`：`/easterneurope`（管理員專屬）、21 課課表、首頁卡片（歐洲分組）、zh-TW／en／ja 文字、`NOT_FOR_SALE_IDS`、migration `20261117000000_add_easterneurope_course.sql`（未套用）、煙霧測試 19 項通過。課文未填；地圖頁待階段 E。

## 9. 階段 B 完成紀錄（2026-11-09）
Level 1 六課課文與測驗已寫入（`src/data/easterneurope/level1Content.js`），評量 8 題、及格 60。只用概念通則與第五輪已核對的官方事實；品種親緣標「依文獻／常見說法」；不寫面積、PDO 總數、糖度 g/L、出口比例。煙霧測試新增 Level 1 項目，全數通過。

## 10. 階段 C 完成紀錄（2026-11-09）
Level 2 八課課文與測驗已寫入（`level2Content.js`），評量 10 題、及格 60。克羅埃西亞改為官方四大區；保加利亞以 Danubian Plain PGI 規格為例。煙霧測試新增 Level 2 項目，全數通過。

## 11. 階段 D 完成紀錄（2026-11-09）
Level 3 七課課文與測驗已寫入（`level3Content.js`），評量 12 題、及格 60。21 課全部有內容；煙霧測試新增 Level 3 項目，全數通過。尚未做：階段 E（地圖、遊戲、筆記、成就）與 F（migration 套用）。
