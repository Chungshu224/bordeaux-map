# 🍷 喬治亞葡萄酒專論課程框架（WSET Diploma D3 備考導向）

> 狀態：框架草案；尚未寫程式、未建路由。查證見 `EASTERNEUROPE_FACT_CHECK.md`（喬治亞段）。分支：`feat/easterneurope-framework`（未合併）。
> ⚠ ＝數字或來源有出入，須對官方文件確認後才進題庫。

## 1. 定位
- 課程代號 `georgia`；3 階段 21 課；從「葡萄酒的搖籃」切入，強調 qvevri、皮渣接觸、本土品種多樣性。
- 獨立於「東歐與巴爾幹」課程；僅供管理員、不販售。

## 2. 課程結構（3 階段 21 課）
### Level 1 - 喬治亞入門（6 課）
1. 八千年歷史與酒文化（supra、tamada）
2. 地理、氣候與栽培
3. 白葡萄品種：Rkatsiteli、Mtsvane Kakhuri、Kisi、Khikhvi、Tsolikouri、Tsitska、Krakhuna
4. 紅葡萄品種：Saperavi、Mgaloblishvili、Otskhanuri Sapere、Aladasturi、Dzelshavi
5. 產區總覽與地圖
6. Level 1 綜合評量

### Level 2 - 產區與釀法（8 課）
7. Qvevri 釀造法：構造、埋藏、UNESCO、皮渣接觸
8. 歐式 vs 傳統 vs 現代釀法
9. Kakheti I：Telavi、Gurjaani 與主要 PDO
10. Kakheti II：Tsinandali、Mukuzani、Kindzmarauli 等
11. Kartli 與 Samtskhe-Javakheti
12. Imereti、Racha-Lechkhumi（Khvanchkara）與黑海沿岸
13. 法規與認證：PDO 制度、National Wine Agency
14. Level 2 綜合評量

### Level 3 - Diploma 精修（7 課）
15. 栽培與釀造深度
16. 風土與品種剖析
17. 皮渣接觸白酒（橘酒）與盲品辨識
18. 產業、出口與市場
19. Diploma 品飲與論述
20. 與其他古老產區比較（東歐、地中海）
21. Level 3 綜合評量

## 3. 查證標記
| 課 | 重點 | 標記 |
|---|---|---|
| 7 | UNESCO 2013、qvevri PGI 2021、OIV 皮渣接觸白酒類別 2017 | ⚠ 須對 UNESCO／OIV |
| 9–10 | PDO 總數（30，2025/4）、Tsinandali 的 Kakhuri Mtsvane 上限 15% vs 15–20%、Mukuzani＝100% Saperavi | ⚠ |
| 4 | 品種數 500+、商業約 40 | ⚠ |
| 13 | 受歐盟聯繫協定保護 18 項 | ⚠ |
| 18 | 出口市場結構（俄羅斯依賴） | ❌ 未查證 |

## 4. 邊界資料（描繪方案）
- 來源：OpenStreetMap（ODbL）。可行性已確認：Telavi／Kakheti 行政區為多邊形；Tsinandali 為多邊形；**Mukuzani 只有點位**。
- 方法：依 National Wine Agency 的 PDO 清單，每個 PDO 對應其法定村或市鎮；有多邊形就取用，只有點位的以所屬市鎮多邊形裁切或標為「約略位置」，不假裝是法定邊界。
- 每筆屬性註明 `precision`：`municipality`／`village`／`point`。地圖頁需標示「喬治亞邊界為依 OSM 行政區的近似描繪，非法定範圍；© OpenStreetMap contributors」。
- 若日後取得 National Wine Agency 的官方 GIS 檔，直接取代。
- 建置腳本：`scripts/build-georgia-geojson.py`；Nominatim 限速每秒 1 次、須帶識別用 User-Agent。

## 5. 技術落點
`src/data/georgia/ge-l*.js`；`src/components/georgia/*`；`georgiaLearningStore`；en/ja；路由 `/georgia`（admin only）；`CourseWorldMap` 的 `GEO` 加座標（約 [45.5, 41.9]）；migrations 只準備不套用。

## 6. 實作階段
A 骨架 → B Level 1 → C Level 2（先解除 ⚠）→ D Level 3 → E 地圖＋遊戲＋筆記＋成就＋氣候 → F migrations、smoke test。
