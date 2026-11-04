# 全球氣泡酒專論：事實查證報告

> 查證日期：2026-11-03。分支：`feat/sparkling-fact-check`（從 `feat/sparkling-course-framework` 切出，未合併）。
> 方法：以 WebSearch／WebFetch 查證，優先官方來源；多數官方站無法直接取得，許多項目只找到二手整理（標示「二手」），這類結論只能當線索，**不建議直接寫進課程或測驗**，須再對照官方 PDF。數字皆標年份；來源有出入者並列，不擅自選邊。
> 引用內容皆為改寫，未貼原文。

## 摘要

| 狀態 | 項數 | 說明 |
|---|---|---|
| ✅已確認 | 約 28（含第八節補查 6 項） | 含官方或可信二手來源互相吻合者 |
| ⚠需修正 | 4 | 其中 1 項已寫入 `regions.js`；其餘 3 項因來源為二手或屬「補充」而非「錯誤」，只在此標示 |
| ❓未能查證 | 約 27（第八節補查後） | 多為壓力、EU 甜度邊界、歷史年代、各 Crémant 細節、德國層級細則等 |

**已寫入程式的修正（僅 1 處）**：`regions.js` Lambrusco 備註由「乾型到半甜」改為「乾型到甜型」。
**框架文件 `SPARKLING_COURSE_FRAMEWORK.md`**：沒有查到明確錯誤，未修改（⚠ 標記保留）。

**重要提醒（教學上易錯）**
1. EU 法規甜度用語為 dry／medium dry／sweet；Extra Dry（12–17 g/L）比 Sec（17–32 g/L）更乾。
2. Corpinnat 脫離 Cava 的年份與成員數來源互相矛盾，不宜進測驗。
3. Cava Reserva 最低陳年：18 個月與 15 個月兩種說法並存（官方網頁與報導不一致），不宜進測驗。
4. WSET D4 官方範圍清單（2019 版）沒有列出 Cap Classique、Corpinnat、Sekt Austria 等名稱，勿自行補成官方範圍。

## 一、通則與 Level 1

| 原文說法 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| sp-l1-2：甜度級別與 g/L 邊界 | 英國保留版 EU 2019/33 附件 III A：Extra Dry 12–17、Dry 17–32、Medium Dry 32–50、Sweet >50 g/L。Brut Nature／Extra Brut／Brut（<12）與 3 g/L 容許誤差未取得 | ❓部分未能查證 | legislation.gov.uk/eur/2019/33/annex/III/part/A（英國保留版，年份未標） |
| sp-l1-2：傳統法瓶內壓力約 5–6 atm | Franciacorta 官方稱一般 5–6 atm；其他產區未查。EU 最低壓力（3 bar、3.5 bar）與 frizzante 1–2.5 bar 未取得官方來源 | ❓未能查證（5–6 僅有 Franciacorta 一例） | franciacorta.wine（年份未標）；Prosecco 壓力見下表（二手） |
| sp-l1-2：EU 對 quality sparkling 最低陳年 9 個月 | 僅二手引述 | ❓未能查證 | winewithseth.com（二手） |
| sp-l1-1：Merret 1662、Dom Pérignon 神話、Limoux 1531、Clicquot 轉瓶 | 本次未取得來源 | ❓未能查證 | — |
| sp-l1-3：基酒酒精約 10–11% | 未取得來源 | ❓未能查證 | — |
| sp-l1-5：Asti 法為一次發酵中止 | Martinotti（槽式）單次發酵中止；另有 Asti Metodo Classico 款（二手） | ✅（二手） | winefolly；winewithseth |

## 二、法國（sp-l2-1、2-2、2-3）

| 原文說法 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| 香檳面積、cru 數 | 34,200 ha、319 cru、種植戶約 16,200（管理約 90% 葡萄園）、maisons 370、合作社 130（資料年 2023）。「319」成立 | ✅ | Comité Champagne Key Figures 2024-05 版（champagne.education） |
| 香檳品種比例 | Pinot Noir 38%、Chardonnay 31%（2025 版 32%）、Meunier 31%（2025 版 30%）、其餘四種稀有品種合計約 0.3%（二手引 Comité）。來源間有出入，維持不進測驗 | ✅（二手，需標年份） | winewithseth（二手） |
| 四大產區 | Montagne de Reims、Vallée de la Marne、Côte des Blancs、Côte des Bar（Côte des Bar 含 64 村，2022）；Côte de Sézanne 未查 | ✅（Sézanne ❓） | Comité Champagne；pleinchamp |
| 17 Grand Cru／42 Premier Cru | 17 Grand Cru 二手確認；Premier Cru 42 未能查證 | ✅／❓ | 二手 |
| 香檳最低陳年 NV 15 個月（酒渣 12）、Vintage 36 個月 | 僅二手確認 NV 15 個月、Vintage 3 年；酒渣 12／36 個月未能查證 | ❓ | 二手 |
| 香檳壓榨 4,000 kg→2,550 L（2,050＋500） | 未能查證 | ❓ | — |
| 香檳產量上限 | 商業可售產量由 Comité 逐年訂：2023 為 11,400；2024 為 10,000；2025 為 9,000 kg/ha。EU 上限 15,500 kg/ha。hl/ha 未查 | ✅（標年份） | pleinchamp.com（2025 報導） |
| Crémant d'Alsace 品種 | 主要品種 Auxerrois、Chardonnay、Pinot Blanc、Pinot Gris、Pinot Noir、Riesling（rosé 僅 Pinot Noir）；酒渣至少 9 個月；手採；100 L 汁／150 kg 葡萄；2025 為修訂草案，仍可能再改 | ✅（草案版本） | INAO 規格草案 cn250612（2025） |
| Crémant de Bourgogne | Pinot Noir＋Chardonnay 合計至少 30%；Gamay 上限 20%；另可用 Aligoté、Melon、Sacy；酒渣 9 個月＋再 3 個月才可上市（二手） | ✅（二手） | winewithseth（二手） |
| Crémant de Loire | 規格列出白品種 Chenin、Chardonnay、Orbois；紅品種 Cabernet Franc 等；自 tirage 起至少 12 個月；最大產量 74 hl/ha。**未見 Chenin 為法定核心或最低比例**；Saumur 陳年規定未取得 | ⚠措辭待確認（未改程式） | eAmbrosia 規格（webgate.ec.europa.eu/eambrosia-api/api/v1/attachments/11131，年份未標） |
| Limoux | Crémant de Limoux：Chardonnay 40–70%、Chenin 20–40%、Mauzac 至多 20%、Pinot Noir 至多 10%，酒渣至少 12 個月；Blanquette de Limoux：Mauzac ≥90%。官方 INAO 規格未讀成 | ✅（二手）。regions.js 漏 Pinot Noir（Crémant 最多 10%），屬補充 | winewithseth（二手） |
| Blanquette Méthode Ancestrale（100% Mauzac） | 未能查證 | ❓ | — |
| Clairette de Die | Méthode Dioise Ancestrale：Muscat à petits grains ≥75%，餘多為 Clairette；殘糖至少 35 g/L；雙重裝瓶。Crémant de Die 為傳統法。「Clairette de Die Brut 為傳統法」未獲佐證 | ✅（二手）；`methods` 僅列 ancestral 不完整（Crémant de Die 屬傳統法），屬補充 | wineanorak.com 2023-04（二手） |
| Vouvray／Montlouis、Jura、Bordeaux、Savoie、Languedoc 各 Crémant | 未能查證 | ❓ | — |
| Crémant 共同 dosage 上限 | 未能查證 | ❓ | — |

## 三、西班牙（sp-l2-4）

| 原文說法 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| Cava 陳年等級 | Guarda 9、Reserva 18、Gran Reserva 30、Paraje Calificado 36 個月（2020 年報導稱 Reserva 由 15 升 18；Cava 官網品質頁仍寫 15；官方新規 PDF 自相矛盾）。2022-01-01 起新標示。兩說並列，不進測驗 | ✅／⚠來源有出入 | cava.wine 官方 PDF（2021）；bkwine 2020-08；winewithseth |
| Cava 品種 | 白：Macabeo、Xarel·lo、Parellada、Malvasía（Subirat Parent）、Chardonnay；紅：Garnacha、Monastrell、Pinot Noir、Trepat | ✅（二手） | winewithseth |
| Cava 產區（Penedès 與其他） | 四大區：Comtats de Barcelona（逾 95% 產量）、Valle del Ebro、Almendralejo、Requena；非僅 Penedès。其他來源稱約 160 市鎮、約 90% 在 Penedès，出入待確認 | ✅（框架「Penedès 與其他產區」符合；regions.js 名稱「Cava（Penedès）」為代表點，未改） | winewithseth；gourmethunters（二手） |
| Corpinnat 規定 | 18 個月起，每家須有 30 與 60 個月款；有機、100% 手採、至少 1 公頃自有園、其餘長期契約；46 市鎮；2024 年報稱 13 家 | ✅（官方年報） | corpinnat.com 2024 年報（2025-03） |
| Corpinnat 脫離年份與成員數 | 註冊 2017（二手）；脫離 Cava 的年份、歷來成員數（Decanter 稱 9 家退出；另一來源稱增至 21 家）互相矛盾 | ❓來源有出入 | 並列，未選邊 |
| Clàssic Penedès | 至少 15 個月、100% 有機（二手） | ✅（二手） | gourmethunters |
| Cava 傳統法最低壓力、Llebeig、Penedès DO 氣泡細則 | 未能查證 | ❓ | — |

## 四、義大利（sp-l2-5）

| 原文說法 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| Prosecco DOC | 2009-07-17 成立；9 省（Belluno、Gorizia、Padova、Pordenone、Treviso、Trieste、Udine、Venezia、Vicenza）；Glera ≥85% | ✅ | prosecco.wine（2024） |
| Prosecco Rosé | Glera 85–90％／Pinot Nero 10–15%；僅 spumante；槽內至少 60 天；須標年份；義大利 2020-05 核准、歐盟 2020-10 | ✅（二手） | winewithseth |
| Prosecco 槽式發酵與壓力 | frizzante／spumante 至少 30 天；壓力 still <1 atm、frizzante 1–2.5、spumante >3（二手） | ✅（二手） | winewithseth；mwminternational |
| DOCG Conegliano Valdobbiadene | Glera ≥85%；Rive 共 43（12 市鎮＋31 frazioni）、手採、須標年份；Superiore di Cartizze 手採、≥11.5% vol；Sui Lieviti 瓶內 ≥90 天 | ✅ | italianwinecentral |
| Asolo、Col Fondo 地位 | 未能查證 | ❓ | — |
| Asti／Moscato d'Asti | Moscato Bianco 至少 97%（非 100%）；Asti 實際酒精 ≥6%、總 ≥11.5%；Moscato d'Asti 實際 4.5–6.5%、總 ≥11%、壓力 ≤2.5 bar；51 市鎮。Asti 酒精上限與最低壓力各來源不一（3 bar vs 4–5 bar），未能查證 | ✅／❓ | winewithseth（引 disciplinare）；wineandtravelitaly 數字不同，品質存疑 |
| Franciacorta | 品種 Chardonnay、Pinot Nero 為主，Pinot Bianco ≤50%，Erbamat ≤10%（Satèn 不可用）。酒渣：Spumante 18、Rosé 與 Satèn 24、Millesimato 30、Riserva 60 個月。「總 25／30／37 個月」未能查證。Satèn 壓力 <5 atm。regions.js 品種未列 Erbamat，屬補充 | ✅（酒渣月數）／❓（總月數） | italianwinecentral；franciacorta.wine |
| Trentodoc | Chardonnay、Pinot Nero、Pinot Bianco、Meunier；酒渣 NV 15、Millesimato 24、Riserva 36 個月；海拔至 800 m | ✅ | provincia.tn.it 新聞稿 |
| Oltrepò Pavese Metodo Classico | Pinot Nero ≥70%；酒渣 15 個月，Millesimato 24 個月；Cruasé（粉紅，Pinot Nero ≥85%）為 consorzio 商標 | ✅ | italianwinecentral |
| Lambrusco | 八個 DOC（Colli di Parma、Grasparossa di Castelvetro、Sorbara、Salamino di Santa Croce、Reggiano、Colli di Scandiano e Canossa、Modena、Mantovano）；多為槽式；甜度 secco／amabile／dolce。「乾型到半甜」不完整 | ⚠已修正（備註改為乾型到甜型） | Wikipedia（二手，低品質；建議再對照 Consorzio） |

## 五、德國、奧地利、英國與其他歐洲（sp-l2-6）

| 原文說法 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| Sekt 最低壓力 3.5 bar；Winzersekt | Sekt 3.5 bar、Schaumwein 3 bar；Winzersekt 為酒莊自產、瓶內發酵、酒渣至少 9 個月，但該頁稱 Winzersekt 無獨立法定定義 | ✅（單一來源） | Wines of Germany／DWI（年份未標） |
| Deutscher Sekt／Sekt b.A.／VDP.Sekt 細則、槽式 6 個月、市場規模 | 未能查證 | ❓ | — |
| Sekt Austria 三級 | 2015 提出、2016 立法：Klassik 酒渣至少 9 個月，釀法未規定；Reserve 18 個月、傳統法；Grosse Reserve 30 個月、傳統法、單一村鎮、採收後 3 年才可上市 | ✅（二手） | starwinelist.com（二手） |
| Sekt Austria 產區限制與近年修改 | 未能查證 | ❓ | — |
| 英國 PDO | 氣泡 PDO 僅准六品種（Chardonnay、Pinot Noir、Meunier、Pinot Noir Précoce、Pinot Blanc、Pinot Gris）；海拔上限 220 m；Sussex 氣泡 PDO 於 2022-07-05 註冊、瓶中至少 15 個月；Darnibole 為 Bacchus PDO（非氣泡） | ✅（二手） | winewithseth（二手） |
| 英國面積與氣泡占比 | 2023：4,209 ha；氣泡 76%；Chardonnay 32%、Pinot Noir 27%、Meunier 9% | ✅ | WineGB 2024-07 資料圖（temp.winegb.co.uk） |
| 英國白堊／Kimmeridgian | Downs 白堊有據；Kimmeridgian 未能查證；「PDO English 酒渣 9 個月」未能查證 | ❓ | — |
| Bairrada 氣泡 | Baga、Maria Gomes、Bical、Cercial，另有 Pinot Noir、Chardonnay；傳統法；酒渣至少 9 個月；官方 DOC 細則未取得 | ✅（二手） | glassofbubbly.com（二手） |
| 瑞士、匈牙利 | 未能查證 | ❓ | — |

## 六、新世界（sp-l2-7）

| 原文說法 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| 南非 Cap Classique | 法定瓶內發酵、酒渣至少 9 個月；CCPA 會員自律 12 個月、手採；無法定品種限制，建議 Chardonnay、Pinot Noir、Meunier；1971 年 Simonsig 首支以 Chenin 為基酒 | ✅ | Decanter（約 2021）；capclassique.co.za |
| 塔斯馬尼亞 | 氣泡酒占產量逾 40%；Pinot Noir 43%、Chardonnay 28%（Wine Australia 2024 年份報告）。「澳洲最涼爽之一」該來源未直接支持 | ✅（氣泡基地）／❓（最涼爽之一） | Wine Australia InfoSheet（2024） |
| 起泡 Shiraz 釀法 | Best's Great Western 以傳統法並以老 Muscat liqueur 調整；其他酒廠有槽式／轉移法，僅單一酒莊為證 | ❓（'varies' 合理但證據不足） | bestswines.com（單一酒莊） |
| 紐西蘭 Marlborough | 紐西蘭領先氣泡產區；Méthode Marlborough 協會標準：100% 當地、傳統法、酒渣至少 18 個月；Chardonnay、Pinot Noir、Meunier | ✅（二手） | winewithseth（二手） |
| 加州投資年份（Chandon 1973、Roederer 1982、Mumm Napa 1979、Domaine Carneros 1987） | 未能查證 | ❓ | — |
| 阿根廷 | 槽式法最普遍；Chandon、Cruzat 等做傳統法；Moët & Chandon 1959 於 Mendoza 設首個海外子公司；約 160 家氣泡酒廠 | ✅（「並存」成立） | thedrinksbusiness.com（2019） |
| 巴西 Serra Gaúcha | 傳統法與槽式並存；實際槽式占多數，但無官方比例（需 IBRAVIN）。regions.js 寫「並存」不算錯 | ✅／❓（比例） | winewithseth（二手） |
| 加拿大、智利、美國 Oregon | 未能查證 | ❓ | — |

## 七、WSET D4

| 原文說法 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| D4＝Sparkling Wines、D5＝Fortified Wines | 單元：D1 Wine Production、D2 Wine Business、D3 Wines of the World、D4 Sparkling Wines、D5 Fortified Wines、D6 Independent Research Assignment | ✅ | wsetglobal.com Level 4 Diploma 頁（Specification 2025, Issue 1.4）；2019 spec（May 2019） |
| D4 範圍（官方公開） | 2019 spec 學習成果：理解生長環境、種植與釀造選擇、產業協會與標示用語，以及主要氣泡酒風格的品質與價格；並能品飲評價氣泡酒。產區／風格清單含澳洲、法國 Champagne／Crémant（Alsace、Bourgogne、Loire）／Saumur／Vouvray、德國 Sekt、義大利 Asti／Franciacorta／Lambrusco／Prosecco／Trentodoc、紐西蘭、南非、智利、阿根廷、西班牙 Cava、英國、美國加州／奧勒岡／華盛頓。釀法：傳統、轉移、槽式、Asti、carbonation、pétillant naturel。**2025 版全文未能取得，清單可能已變**；清單未見 Cap Classique、Corpinnat | ✅（2019 版）／❓（2025 版） | wsetglobal.com/media/7084/wset_l4wines_specification_en_may2019.pdf（2019） |
| 評量形式 | 官方頁面：D4 為閉卷筆試（1.5 小時）＋盲品 3 款氣泡酒。配分、題型、通過率未能查證，**不寫** | ✅／❓ | wsetglobal.com（2025 Issue 1.4） |
| SAT 氣泡酒版本 | 未取得 Level 4 專屬 SAT；Level 3 SAT（May 2022 Issue 2）含 mousse（delicate／creamy／aggressive）、甜度六級（dry 至 luscious）。Level 4 是否相同未能查證 | ❓ | wsetglobal.com/media/11766/wset_l3wines_sat_en_may2022_issue2.pdf |
| WSET 官方甜度 g/L | WSET 文件無 g/L 數值 | ❓ | — |

## 八、第二輪補查（2026-11-03，同日再次執行）

本輪針對先前標「❓」的重點項目補查，優先官方或原始規格。未動程式與框架文件（沒有查到明確錯誤）。

| 項目 | 查證結果 | 狀態 | 來源 |
|---|---|---|---|
| 香檳最低陳年 | Comité 官方說明頁：NV 至少 15 個月、Vintage 至少 36 個月。該頁**沒有**分列「酒渣 12 個月」數字；壓榨量（4,000 kg）、壓力、甜度級別該頁均未提及，仍屬未能查證 | ✅（15／36）／❓（酒渣 12、壓榨量） | champagne.education「The Champagne Appellation (AOC)」（無頁面日期，摘要 1936 年敕令之現行規定） |
| EU 氣泡酒甜度邊界 | 英國保留版 2019/33 附件 III A 頁面僅列 Extra dry 12–17、Dry 17–32、Medium dry 32–50、Sweet >50 g/L；Brut Nature／Extra Brut／Brut 與 3 g/L 容許誤差在該頁**不存在**，須查 EU 理事會規章 1308/2013 附件 VII 或 EUR-Lex 版本；端點是否含等號該頁未說明 | ✅（四級）／❓（Brut 系列、容許誤差） | legislation.gov.uk/eur/2019/33/annex/III/part/A（英國保留版，2020-01-31 修訂版） |
| Cava 陳年等級 | Glass of Bubbly 整理：Cava 9、Reserva 18、Gran Reserva 30、Paraje Calificado 36 個月（無日期、未註明法源）。與先前第三節一致；Reserva 18 vs 15 的官方出入仍未由 Consejo Regulador 原文釐清 | ✅（二手）／❓（官方出入） | glassofbubbly.com/cava-classifications；Cava 官方 PDF 搜尋結果列出但本輪未讀成 |
| Crémant de Bourgogne 規格 | INAO 規格（檔名 cn210211，2021 修訂稿，**含刪改痕跡**）：品種為 Gamay、Pinot Gris、Pinot Noir、Aligoté、Chardonnay、Melon、Pinot Blanc、Sacy；Chardonnay＋Pinot Blanc＋Pinot Gris＋Pinot Noir 合計至少 30%；Gamay 上限在該稿由 20% 改為 30%（兩數字並存，須確認生效版本）；酒渣至少 9 個月；上市前自 tirage 起至少 12 個月；瓶內壓力至少 4 bar（20°C）；產量 78／74 hl/ha 等；**未規定 dosage 上限**，僅限 SO₂ ≤150 mg/L。注意：先前表格寫「Pinot Noir＋Chardonnay 合計至少 30%」「Gamay 上限 20%」，與此稿比對需更正為「四個品種合計」並標示 Gamay 上限待確認 | ⚠需修正（報告內先前說法；課程程式與框架未列此細節，故未改） | extranet.inao.gouv.fr/fichier/CDC-CrémantdeBourgogne-PNOcn210211.pdf（2021 稿） |
| Franciacorta 酒渣 | 二手整理與先前結果一致：Spumante 18、Rosé 24、Satèn 24、Millesimato 30、Riserva 60 個月（皆為酒渣）；dosage：Satèn 僅 Brut，Millesimato 至 Extra Dry，Riserva 至 Brut，Spumante／Rosé 可至 Demi-sec。「總月數」該頁未列 | ✅（二手） | italianwinecentral.com/denomination/franciacorta-docg |
| Corpinnat 脫離與成員 | Wine Business International：2019 年初退出 DO Cava（報導內同時出現一月與二月）；協會創始成員 9 家（Gramona、Recaredo、Torelló、Llopart、Nadal、Sabaté i Coca、Mas Candí、Huguet Can Feixes、Júlia Bernet），協會成立於 2015，報導未提後續成員變動。與先前「2024 年報稱 13 家」並列：9 家為創始成員，13 家為 2024 年報數字，兩者**不矛盾**，但「21 家」說法仍未獲佐證 | ✅（創始 9 家、2019 年初）／❓（歷年增減） | wine-business-international.com「Cava's trial separation」（年份未標）；corpinnat.com 2024 年報 |
| Crémant de Bourgogne rosé 頁面 | INAO 該頁僅有歷史年代（1975 年承認 Crémant de Bourgogne），無規格數字 | ❓ | inao.gouv.fr/node/5927 |

教學提醒：Crémant de Bourgogne 規格仍有修訂中的版本，進測驗前務必取得現行生效 cahier des charges。

## 建議後續

1. 以 INAO、eAmbrosia 各 PDO 規格（Crémant 各區、Limoux、Die）補查陳年與品種。
2. 以 EUR-Lex 2019/33 原文補查 Brut Nature／Extra Brut／Brut 邊界與 3 g/L 容許誤差，以及 EU 氣泡酒壓力與最低陳年。
3. 歷史年代（Merret、Dom Pérignon、Limoux、Clicquot）以專書或 Comité 歷史頁補查。
4. 取得 WSET Level 4 Specification 2025 Issue 1.4 全文與 Level 4 SAT。
5. regions.js 可補充（非錯誤，故未改）：Franciacorta 加 Erbamat、Crémant d'Alsace 加 Auxerrois／Chardonnay、Limoux 加 Pinot Noir、Die 補 traditional、Asti 品種標「≥97%」、Tasmania 「最涼爽之一」改為較保守說法。
