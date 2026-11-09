# 突尼西亞葡萄酒課程框架（精簡版）

路由 `/tunisia`，資料在 `src/data/tunisia/`，介面翻譯在 `src/locales/tunisiaUi/`。目前僅管理員可見。

## 1. 定位

精簡課程，共 2 階段 10 課，架構與摩洛哥課程相同。沒有找到 WSET D3 或 CMS 把突尼西亞列入範圍的證據，所以重點放在能直接查證的官方法源：2001 年部令列出的 AOC 設立部令、1999 年第 99-57 號法，以及 WIPO 里斯本登記。

## 2. 結構

### Level 1 認識突尼西亞（5 課）
- `tn-l1-1` 地理與風土
- `tn-l1-2` 從迦太基到國營體系
- `tn-l1-3` 品種與風格
- `tn-l1-4` 產業結構與市場
- `tn-l1-5` 綜合複習與評量

### Level 2 產區與法規（5 課）
- `tn-l2-1` 法規架構
- `tn-l2-2` 七個 AOC 與設立年代
- `tn-l2-3` 產區範圍：登記冊怎麼寫
- `tn-l2-4` 酒標與國際保護
- `tn-l2-5` 總複習與評量（含簡答）

### 互動內容
- 地圖：7 個 AOC、4 個登記範圍內的地名與 2 個參考地點。全部是依登記描述與城鎮位置估計的示意點，不是官方邊界。Grand Cru Mornag 與 Coteaux d'Utique 沒有國際登記，位置只依名稱估計。
- 遊戲：產區速答、法規快答、知識閃問（由課程題庫產生）。
- 沒有做：品飲筆記、成就、詞彙表。

## 3. 查證狀態（查證日 2026-11-09）

### 官方原文（已讀全文）
| 文件 | 來源 | 內容 |
|---|---|---|
| 1999 年 6 月 28 日第 99-57 號法（JORT 1999-07-06） | [FAOLEX tun18566](https://faolex.fao.org/docs/pdf/tun18566.pdf) | 第 2 條定義、第 5 條部令劃定、第 10 條規格書、第 13–14 條公告與 6 個月異議期、第 16 條保護、第 36 條規費、第 37 條廢止 1957 年命令但保留施行文件 |
| 2001 年 2 月 27 日農業部長部令（區域名稱） | [FAOLEX tun24489](https://faolex.fao.org/docs/pdf/tun24489.pdf) | 前言列出第 75-10 號法、第 58-223 號命令、1975 年葡萄酒區部令與 1958–1989 年各 AOC 部令及修訂日期；第 1–3 條 |
| WIPO 里斯本登記 589–595 號（1974-07-09） | [Lisbon Express](https://lisbon-express.wipo.int/) API 查詢「Tunisia」 | 各登記的產品、範圍描述與法律依據；伊朗 2007 年拒絕、瑞士 2024 年確認保護 |
| WIPO 里斯本通知第 8 號（1973-08-03） | [WIPO Lex](https://www.wipo.int/wipolex/en/treaties/notifications/details/treaty_lisbon_8) | 1973-07-31 交存加入書（斯德哥爾摩文本）；通知沒有寫生效日，課文也不寫 |
| WIPO 新聞：突尼西亞加入日內瓦文本 | [WIPO 2023](https://www.wipo.int/en/web/lisbon-system/w/news/2023/news_0003) | 2023-04-06 交存、2023-07-06 生效 |

課文沿用 PDF 裡的拼法：Tazerka、Schuiggui（今多拼作 Chouigui）。登記上的省份是 1974 年的行政區（例如「Tunis 南省」），課文已註明。

### 學術與二手資料（課文已標示或以概略方式呈現）
- 保護國時期：Nessim Znaien，〈À la santé des colonies !〉，收於《Le modèle culinaire français》（PUFR，2021），[OpenEdition](https://books.openedition.org/pufr/30147)。1905／1936 年根瘤蚜、1932 年 180 萬百升、1934–36 年拔除 15%、1947 年 Muscat de Tunisie、1948 年 vin supérieur de Tunisie、1947 年 60 萬百升中 2.5 萬百升獲分級。
- 迦太基、Mago、羅馬、品種清單、2000 年代初的色別比例：《牛津葡萄酒指南》第三版（英文維基轉引）。
- 面積、產量、UCCV 占比、出口比例與市場、人均消費、合資酒廠、約七成 AOC 與兩成 premier cru：《Jeune Afrique》2008、2010 年報導（法文與英文維基轉引）。數字年代久、彼此不一致，課文只講量級，測驗只問「數字為何不一致」與定性問題。
- 各產區的土壤、雨量、Thibar 由白衣神父會建立、Kélibia 為不甜蜜思嘉：法文維基，無引註。課文標為二手資料，不出題。

### 未查實，不出題
- **各 AOC 部令的全文。** 網路上找不到，所以課程不教各產區的法定品種、產量、酒精度，也不寫 AOC Mornag（1989）、Grand Cru Mornag（1977）與 Coteaux d'Utique（1980）的範圍。
- **Kélibia 的兩份部令如何分工。** 1958 年部令已包含「Kélibia」「Muscat de Kélibia」「Vin Muscat de Kélibia」三個名稱，1976 年又有一份「Kélibia」AOC 部令；兩者關係不明。
- **「premier cru」的法律依據。** 可能和 1975 年葡萄酒區部令有關，但沒有讀到原文。
- **2001 年之後是否有新的葡萄酒 AOC 或依第 99-57 號法重訂的規格書。**
- **最新的面積與產量統計。** 沒有找到 ONAGRI 或 OIV 的近年官方數字。
- **1927 年 Office du vin 與獨立後國家機構的關係。** 資料說法不一（1927 年設立、約 1970 年設立），課文只說「國家機構掌握銷售」。

## 4. 上線前待辦

- 到 Supabase SQL 編輯器執行 `20261118000000_add_tunisia_course.sql`。不要用 `supabase db push`。
- 內容沒有經過葡萄酒專家審閱；英文與日文也是由同一流程翻譯。
- 公開時確認價格，執行遷移檔文末的 UPDATE，並移除 `ADMIN_ONLY_COURSES` 的 `tunisia` 與路由的 `requiresAdmin`。
- 若取得各 AOC 部令原文，補上法定品種與範圍，並更新地圖、`gameData.js` 與本文件。
