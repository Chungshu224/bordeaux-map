# 🥃 全球強化酒（Fortified Wines）專論課程設計（WSET Diploma D5 備考導向）

> 格式比照 `SPARKLING_COURSE_FRAMEWORK.md`。查證見 `FORTIFIED_FACT_CHECK.md`。
> ⚠ ＝帶數字或來源矛盾，須對官方文件確認後才進題庫。

## 1. 定位與設計原則
- 獨立專論，不連結其他產區課程；全球巡禮；以 **D5** 為主、加重考試題型。
- 僅供管理員閱讀，不販售（見 §7）。
- 範圍：Sherry、Port、Madeira、VDN／VdL（法國）、Rutherglen Muscat／Topaque、Marsala 及其他（Málaga、Montilla-Moriles、Setúbal、南非、Commandaria 等）。Marsala 是否在官方範圍未確認，列為「延伸」。
- 原則：先概念（為何強化、何時加烈、氧化 vs 生物陳年），再產區，再考試。

## 2. 課程結構（3 階段 21 課）
### Level 1 - 強化酒原理與釀法（6 課）
1. 什麼是強化酒：定義、歷史、與一般酒差異
2. 加烈時機：發酵前／中／後與甜度（mutage、Port、Sherry）
3. 加烈用酒精與酒精度
4. 陳年方式：生物陳年（flor）vs 氧化 vs 瓶陳
5. Solera 與年份混調
6. 影響風格、品質、價格的關鍵選擇（D5 第 1 章）

### Level 2 - 全球強化酒產區（8 課）
7. Sherry I：產區、土壤、品種（Palomino、PX、Moscatel）
8. Sherry II：Fino／Manzanilla／Amontillado／Palo Cortado／Oloroso／甜型
9. Port I：杜羅河谷、品種、釀造
10. Port II：Ruby 系與 Tawny 系各類別
11. Madeira：品種、estufagem／canteiro、年齡等級
12. VDN：Roussillon（Banyuls、Maury、Rivesaltes）與 Rhône（Beaumes-de-Venise、Rasteau）
13. Rutherglen Muscat／Topaque 與澳洲強化酒
14. 其他：Marsala、Málaga、Montilla-Moriles、Setúbal、Commandaria、南非

### Level 3 - D5 精修與應考（7 課）
15. 風格辨識：盲品線索（顏色、酒精感、氧化／flor 特徵）
16. SAT 強化酒版：甜度、酒精、結論用語
17. 產區比較：同風格不同產區
18. 法規與標示：年齡聲明、類別術語
19. 商業與價格：為什麼貴、為什麼便宜
20. 模擬考 I（短答／選擇）
21. 模擬考 II（比較論述）

## 3. 各課重點與查證標記
| 課 | 重點 | 標記 |
|---|---|---|
| 1–6 | 概念層級（mutage、flor、solera），不帶數字 | ✅ |
| 7–8 | Sherry 三陳年城鎮、Fino Viejo／Manzanilla Pasada 新類別、酒精度與最低陳年數字 | ✅概念／⚠數字 |
| 9–10 | IVDP 標準與特殊類別、LBV、Colheita；Reserve Tawny 與 Vintage 桶陳年限 | ✅概念／⚠6 vs 7 年、2 vs 3 年 |
| 11 | 四高貴品種甜度排序、Tinta Negra 比重；年齡等級界線 | ✅／⚠ |
| 12 | mutage 時點與殘糖、五個 Roussillon AOP | ✅／⚠殘糖與酒精 |
| 13 | 四級排序、Muscat vs Topaque 品種 | ✅／⚠年齡區間、年份 |
| 14 | Marsala 陳年級別（Fine 1／Superiore 2／Riserva 4／Vergine 5／Stravecchio 10） | ✅／⚠Fine 酒精 |
| 15–19 | 以題組整合，不新增事實 | — |

## 4. 考試題型設計（D5 為主）
- 單選／判斷（概念）；排序題（Rutherglen 四級、Marsala 級別、甜度由干到甜）；配對（品種↔風格、產區↔類別）；短答（解釋 flor 為何抑制氧化）；比較論述（Port Tawny vs Madeira 氧化陳年）；盲品結論。
- 帶數字題目僅在 ⚠ 解除後出題；現階段用「排序」「相對高低」取代精確數值。

## 5. 互動功能設計
- **5.1 地圖**：獨立 Mapbox 頁，點位＋邊界（Jerez 三城、Douro DOC、Madeira 島、Roussillon VDN AOP、Rutherglen、Marsala 等），點選顯示風格、品種、氣候。
- **5.2 遊戲**：風格配對、產區定位、類別排序、盲品辨識（沿用 QuizEngine）。
- **5.3 品飲筆記**：強化酒版 SAT（含甜度、酒精感、氧化／flor 特徵）。
- **5.4 成就與詞彙**：詞彙表（flor、solera、mutage、estufagem、rancio…）與成就。

## 6. 技術落點（比照 Sparkling）
`src/data/fortified/{regions,lessons,level1-3Content,content,gameData}.js`；`src/components/fortified/*`；`src/stores/fortified*`；`scripts/build-fortified-geojson.mjs`、`scripts/fortified-smoke-test.mjs`；路由 `/fortified`、`/fortified/map`（requiresAuth＋requiresAdmin）；migrations 只準備不套用。

## 7. 不販售、僅供管理員閱讀
- `courses` 列：active=false、show_on_home=false、price 0。
- PricingPage 的 `NOT_FOR_SALE_IDS` 加入 `fortified`。
- 首頁僅管理員可見入口「🥃 強化酒專論」。

## 8. 實作階段
- A：骨架（路由、入口、課程選單、課表）
- B：Level 1 內容
- C：Level 2 內容與產區資料
- D：Level 3 與模擬考
- E：地圖＋邊界＋氣候；遊戲、筆記、成就
- F：migrations、smoke test、收尾

## 9. 狀態
- [x] 框架（本檔）
- [x] 事實查證第一輪
- [ ] 階段 A–F
