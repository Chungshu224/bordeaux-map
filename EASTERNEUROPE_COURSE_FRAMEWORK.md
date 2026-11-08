# 🏔️ 東歐與高加索葡萄酒課程框架（WSET Diploma D3 備考導向）

> 狀態：**框架草案，待你確認範圍**（尚未寫程式、未建路由）。查證見 `EASTERNEUROPE_FACT_CHECK.md`。
> 分支：`feat/easterneurope-framework`（未合併）。格式比照 `GREECE_COURSE_FRAMEWORK.md`。
> ⚠ ＝數字或來源有出入，須對官方文件確認後才進題庫。

## 1. 定位與設計原則
- 課程代號 `easterneurope`；3 階段 21 課；以 D3 備考為主，獨立於已有的匈牙利、奧地利、希臘、瑞士課程。
- **核心五國**（你指定）：喬治亞、斯洛維尼亞、克羅埃西亞、羅馬尼亞、保加利亞。
- **建議加入**：摩爾多瓦（與羅馬尼亞相鄰、獨立一課較合理）；「其他」一課帶過捷克、斯洛伐克、塞爾維亞、北馬其頓、亞美尼亞、烏克蘭。
- **不重複**：匈牙利已有獨立課程，僅在總覽以連結帶過，不另寫 Tokaj。
- 命名：喬治亞在地理上屬高加索、斯洛維尼亞／克羅埃西亞偏中南歐，故用「東歐與高加索」，可改。
- 原則：先歷史與共通脈絡（共產時期、私有化、入歐盟），再逐國，最後考試。
- 僅供管理員閱讀、不販售（比照強化酒、希臘：`active=false`、`show_on_home=false`、price 0，`NOT_FOR_SALE_IDS` 加入）。

## 2. 課程結構（3 階段 21 課）
### Level 1 - 東歐與高加索入門（6 課）
1. 歷史脈絡：古老釀酒傳統、共產時期大規模生產、私有化與復興
2. 地理與氣候：大陸性、黑海、亞得里亞海、高加索山脈
3. 白葡萄品種：Rkatsiteli、Fetească Regală／Albă、Graševina、Malvazija Istarska、Rebula、Misket 系、Dimyat
4. 紅葡萄品種：Saperavi、Fetească Neagră、Plavac Mali、Mavrud、Melnik、Teran／Refosco、Gamza
5. 各國總覽與地圖
6. Level 1 綜合評量

### Level 2 - 逐國產區與法規（8 課）
7. 喬治亞 I：八千年歷史、qvevri、UNESCO、皮渣接觸白酒
8. 喬治亞 II：Kakheti、Kartli、Imereti、Racha-Lechkhumi 與 PDO 名稱
9. 斯洛維尼亞：三大區九分區（Podravje／Posavje／Primorska）
10. 克羅埃西亞：大陸與沿海、Istria、Dalmatia（Dingač、Postup）、Slavonia
11. 羅馬尼亞：DOC／IGP、Dealu Mare、Transylvania、Dobrogea、Moldova 丘陵
12. 保加利亞：PGI（Thracian Lowlands、Danubian Plain）、本土品種、國際品種
13. 摩爾多瓦與其他國家
14. Level 2 綜合評量

### Level 3 - Diploma 精修（7 課）
15. 栽培與釀造深度：皮渣接觸／qvevri vs 現代不鏽鋼與橡木、舊園與重新種植
16. 風土與品種比較：同品種不同國家（Graševina／Welschriesling、Kadarka／Gamza）
17. 法規與標籤判讀：歐盟 PDO／PGI（RO、BG、SI、HR）vs 非歐盟（GE、MD）
18. 產業、市場與貿易：散裝／出口依賴、價格定位、品質轉型
19. 風格辨識與盲品：橘酒、qvevri 紅酒、甜酒（Cotnari、Tokaj 以外）
20. Diploma 品飲與論述（D3 題型）
21. Level 3 綜合評量

## 3. 各課重點與查證標記
| 課 | 重點 | 標記 |
|---|---|---|
| 1–2 | 歷史、氣候概念，不帶數字 | ✅ |
| 3–4 | 品種特徵與主產國 | ✅概念／⚠品種親緣（如 Gamza＝Kadarka） |
| 7 | UNESCO 2013、qvevri PGI 2021、OIV 橘酒類別 | ✅（見查證檔） |
| 8 | PDO 總數（30，2025/4）、Kakheti 面積占比 | ⚠數字隨年更新、Tsinandali 比例 15% vs 15–20% |
| 9 | 三區九分區面積 | ✅（政府頁）／⚠ 年份 |
| 10 | Dingač 1961、Postup 1967、三大區 | ✅／⚠ 公頃、PDO 數 |
| 11 | CMD／CT／CIB 糖度（187／220／240 g/L）、33 DOC／12 IG | ⚠ 須對 ONVPV |
| 12 | 52 PDO（只少數實際使用）、兩大 PGI | ⚠ 出口比例「90% 以上」疑為舊資料 |
| 13–14 | 摩爾多瓦（非歐盟）法規 | ⚠ 尚未查證 |
| 15–21 | 以題組整合，不新增事實 | — |

## 4. 考試題型設計（D3）
- 單選／判斷、配對（品種↔國家、產區↔國家）、排序（Romania 甜度分級）、短答（解釋 qvevri 與皮渣接觸的風格影響）、比較論述（Georgia vs Bulgaria 的後共產轉型）、盲品結論。
- 帶數字的題目僅在 ⚠ 解除後出題；先用相對高低取代。

## 5. 互動功能設計
- **地圖**：Mapbox 獨立頁。Romania／Bulgaria／Slovenia／Croatia 可用 Bianchi et al. (2022) 歐盟 PDO 資料集（CC0，希臘課同源）。**喬治亞非歐盟，無此資料，需另找來源（國家葡萄酒署、OSM 或自行描繪）**；摩爾多瓦同理。
- **遊戲**：品種配對、產區速答（沿用共用 `GameHub`）。
- **品飲筆記、成就、詞彙**：詞彙含 qvevri、marani、Kakhetian method、Cviček、Teran、Dealu Mare、Cotnari 等。
- 氣候資料：`scripts/build-easterneurope-climate.mjs`（Open-Meteo，沿用既有流程）。

## 6. 技術落點（比照希臘）
`src/data/easterneurope/ee-l*.js`；`src/components/easterneurope/*`；`easterneuropeLearningStore`；en/ja 翻譯；路由 `/easterneurope`（admin only）；首頁 `CourseWorldMap` 的 `GEO` 加座標（約 [25, 45]，歐洲視圖）。migrations 只準備不套用。

## 7. 實作階段
- A：骨架（路由、入口、21 課表）
- B：Level 1 內容（查證 ✅ 項目）
- C：Level 2 內容（逐國，需先解除 ⚠）
- D：Level 3 與模擬考
- E：地圖＋遊戲＋筆記＋成就＋氣候
- F：migrations、smoke test、收尾

## 8. 待你決定
1. 範圍：核心五國＋摩爾多瓦＋其他一課，是否合適？要不要把匈牙利一併納入？
2. 是否拆成兩門（例如「巴爾幹與黑海」＋「喬治亞專論」）？喬治亞內容量最大，也最獨特。
3. 喬治亞地圖邊界資料來源，是否接受自行描繪？
