# 烏拉圭葡萄酒課程框架（精簡版）

路由 `/uruguay`，資料在 `src/data/uruguay/`，介面翻譯在 `src/locales/uruguayUi/`。目前僅管理員可見。

## 1. 定位

精簡課程，共 2 階段 10 課，架構與突尼西亞課程相同。烏拉圭沒有 AOC／DOC 式的分級，所以第二階段的重點放在能直接查證的法律與命令：INAVI 的設立與權限、VCP 的標準與酒標規則、地理標示的條文，以及 INAVI 網站介紹的葡萄酒區域。

## 2. 結構

### Level 1 認識烏拉圭（5 課）
- `uy-l1-1` 平地、河口與大西洋：地理與氣候
- `uy-l1-2` 從移民先驅到國家飲料
- `uy-l1-3` 品種與風格
- `uy-l1-4` 產業結構與市場
- `uy-l1-5` Level 1 綜合複習

### Level 2 法規與產區（5 課）
- `uy-l2-1` 法規架構
- `uy-l2-2` VCP 與酒標
- `uy-l2-3` 地理標示：酒標上的地名
- `uy-l2-4` 葡萄酒區域
- `uy-l2-5` 總複習與綜合評量（含簡答）

### 互動內容
- 地圖：17 個省、6 個省內地名、1 個參考地點（Concordia）。烏拉圭的區域沒有法定界線，所以以省份示意點呈現，依 INAVI 網站的區域上色。Lavalleja 在 INAVI 頁面上同時屬於 Central 與 Centro-Este，地圖放在 Central，分區題不出 Lavalleja。
- 遊戲：區域速答、法規快答、知識閃問（由課程題庫產生）。
- 沒有做：品飲筆記、成就、詞彙表。

## 3. 查證狀態（查證日 2026-11-09）

### 官方原文（已讀全文或條文）
| 文件 | 來源 | 用在 |
|---|---|---|
| 第 283/993 號命令（1993-06-16，VCP） | [IMPO](https://www.impo.com.uy/bases/decretos/283-1993) | VCP 定義（第 1–3 條）、分析標準（第 4 條）、例外（第 5 條）、玻璃瓶與 750 ml（第 6–7 條）、必要標示與 Vino Común（第 8 條）、年份 85%（第 10 條）、品種 85%／兩品種 100%（第 11 條，第 325/997 號命令修訂）、標籤核准（第 12–13 條）、地理標示（第 15–17 條） |
| 第 325/997 號命令（1997-09-03） | [IMPO](https://www.impo.com.uy/bases/decretos/325-1997) | 採納南方共同市場葡萄酒規範（GMC 第 45/96 號決議）；第 3 條修訂第 283/993 號命令第 11 條 |
| 第 18.462 號法（2009-01-08） | [IMPO](https://www.impo.com.uy/bases/leyes/18462-2009) | 葡萄最低價（第 3 條）、諮詢委員會（第 8 條）、INAVI 檢驗與同位素資料庫（第 12 條）、INAVI 權限與稅費調整（第 15 條）、過渡條款 |
| 第 17.011 號法（1998-09-25）第 73–79 條 | [IMPO](https://www.impo.com.uy/bases/leyes/17011-1998) | 地理標示、來源標示、原產地名稱的定義；登記冊；INAVI 為國產葡萄酒主管機關；十年條款。第 73–79 條由第 19.670 號法（2018）修訂 |
| 第 171/014 號命令（2014-06-04） | [IMPO](https://www.impo.com.uy/bases/decretos/171-2014) | 葡萄酒為國家飲料；酒標必須提及 |
| INAVI 沿革頁 | [INAVI](https://www.inavi.com.uy/historia/) | 第 2.856 號法（1903-06-17）為母法；第 15.903 號法 1987-11-10 公布；所在地 Las Piedras；1988 年 1 月運作 |
| INAVI 2025 年葡萄園登記年報 | [INAVI 統計頁](https://www.inavi.com.uy/vinedos/estadisticas/)（PDF 需登入下載，本次可讀） | 5,797.80 ha、1,048 座、676 家、20,413,621 株、87,011,433 kg；各省面積與產量占比；品種面積（Tannat 1,536.15 ha、26.50%；漢堡蜜思嘉〔釀酒〕17.15%） |
| INAVI 區域頁 | [INAVI](https://www.inavi.com.uy/regiones/) | 各區域的省份、氣候與土壤描述；頁面寫「六個區域」但列出七個，Lavalleja 重複 |
| INAVI 品種頁 | [INAVI](https://www.inavi.com.uy/variedades/) | Tannat 來自法國西南、烏拉圭為主要產國；Albariño 等白葡萄的描述 |
| 2024 年文化遺產日官方手冊（教育文化部） | [PDF](https://ie.ort.edu.uy/innovaportal/file/152367/1/guia-patrimonio-2024.pdf) | Harriague（1819–1894，Hasparren，1838 年到 Montevideo，1874 年自 Concordia 引進「Lorda」）、Vidiella（1820–1884，Montroig，Colón，1883 年「uva Vidiella」）、Máximo Tajes 頒獎 |

### 學術資料
- 氣候：Perron、Fourment 等，〈Climate regionalization of Uruguayan viticulture for ecological sustainability〉，GiESCO 2025（Udelar 農學院與 Rennes 2 大學），[IVES](https://ives-openscience.eu/giesco25-81)。1994–2023 年 Huglin 平均 2374±174、HI3/HI4/HI5 占 7/49/44%；CNI 17.2 °C；生長季雨量 751±73 mm（南約 600、北約 900）；Tannat 南北物候差 2–3 週；2023 年（La Niña）HI 2543、HI5 占 80%；2024 年（El Niño）多雨、病害風險。

### 二手資料（課文已標示，不出題或只問定性）
- 出口與釀酒量：媒體轉引 INAVI（americaeconomia、El País／Uruguay XXI）。2025 年約 6,216 萬公升；2024 年瓶裝出口 4,641,450 公升，巴西 54%、美國 14%。測驗只問「最大市場是巴西」。
- Los Cerros de San Juan 1854 年、Lahusen 家族：多個旅遊與葡萄酒網站，不出題。INAVI 只寫「Colonia 有全國最古老的酒廠」，測驗只用這一句。

### 未查實，不出題
- **已登記的地理標示清單。** 沒有找到 INAVI 的官方清單或決議，所以不教 Garzón、Juanicó 等地名是否已登記。
- **第 15.903 號法原文。** 只透過第 18.462 號法與後續命令讀到被改寫的條號；董事會的人數與組成沒有寫進課文。
- **VCP 的允許品種清單**（第 283/993 號命令第 2 條交由 INAVI 訂定）。
- **Merlot 與 Ugni Blanc 的排名。** 年報 PDF 的文字層欄位錯位，兩者約 576.80 ha 與 581.28 ha，對應關係無法確認；課文只說「各約一成」。
- **「uva Vidiella」即 Folle Noire。** 常見說法，但手冊沒有寫，課文不提。
- **Harriague 的死亡日期。** 手冊寫「1894 年 4 月 14 日於巴黎」，和出生日相同，疑有誤；課文只寫年份。

## 4. 上線前待辦

- 到 Supabase SQL 編輯器執行 `20261119000000_add_uruguay_course.sql`。不要用 `supabase db push`。
- 內容沒有經過葡萄酒專家審閱；英文與日文也是由同一流程翻譯。
- 公開時確認價格，執行遷移檔文末的 UPDATE，並移除 `ADMIN_ONLY_COURSES` 的 `uruguay` 與路由的 `requiresAdmin`。
- 若取得 INAVI 的地理標示登記清單，補進 `uy-l2-3`、地圖與 `gameData.js`。
