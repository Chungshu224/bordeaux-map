# 每日課程檢視：布根地（bourgogne）— 2026-11-21

**選課依據**：src/router/index.js 去重後共 36 門課程路由（不含 /admin 等非課程路由），台北時間 2026-11-21 的天數 20777 mod 36 = 5，依字母排序第 6 門（序號 5）為 bourgogne。
**範圍**：public/bourgogne/data/courses 之 levels.json、4 級 modules.json、39 個模組 JSON、4 級三語 quiz-bank；router meta。**未涵蓋**：GeoJSON/地圖、元件版面、migration（僅見 spatial_extend 與 quiz_scores，無販售設定）。無 bourgogne 煙霧測試腳本，未執行建置測試。網路查證僅取得搜尋結果標題，未能開啟全文，故事實項以「未核對」為主。

## 發現清單

| # | 嚴重度 | 位置 | 證據 | 建議 |
|---|---|---|---|---|
| 1 | 中 | advanced-m3、advanced-m12、advanced-m7、master-m7 | 2021 霜害減產數字互相矛盾：30-50%、50-80%、「減甩70%」（且含錯字）、約50%。二手來源：Vitisphere 報導 2021 為 1981 年以來最低產量；Inquirer 早期報導稱「減半」。 | 統一為有出處的單一數字（建議查 BIVB／Agreste 官方產量），題庫 master-m7「約50%」選項也需同步。 |
| 2 | 中 | advanced-m12 vs 題庫 | 採收期提前：「40年提前35天」、題庫「約30天」、master-m7「30年提前2-3週」、L3 題庫 M1「約2週」。 | 統一並標明期間與資料來源（如 BIVB／Météo-France 長期序列）。 |
| 3 | 中 | master-m1 | 「全球首個以葡萄園文化景觀獲得世界遺產的產區」。同為葡萄園文化景觀之世遺在更早已有（如 1999 聖愛美濃、2001 Wachau 等）。2015年7月4日列入、1,247 個 Climats 本身與 UNESCO 相符。 | 刪除「全球首個」說法（題幹與解析皆有）。 |
| 4 | 中 | beginner-m3、intermediate-m1 | 「Vosne-Romanée 8個特級園（含 Flagey-Échezeaux 的2個）」；intermediate-m1 又另列「Flagey-Echézeaux 2個」，造成重複計算（與夜丘總數 24 不合）。Vosne-Romanée 本村為 6 個，加 Flagey 的 Échezeaux、Grands-Échezeaux 為 8。 | 清單改為「Vosne-Romanée 6個＋Flagey-Échezeaux 2個」。 |
| 5 | 中 | adv-m13、adv-m7、master-m5、adv-m10 | 帶年份市場統計無出處或已屬預測：「2026年…亞洲買家佔35%」、「2018年交易額7.5億美元」、「Burgundy 150 指數2000-2024上漲約400%」、「DRC均價2000-2025年漲30倍」、「2023年全球餐廳葡萄酒銷售恢復至疫前80%」。今天為2026-11，2026 的數字不可能是完整統計。 | 標「未核對」或移除；更新至 Liv-ex 最新資料。advanced-m3 的「2024 待評估」年份評價亦需更新。 |
| 6 | 低 | level1 quiz-bank | 正解位置分布嚴重集中：index1 佔 41/72（57%）、index3 僅 2 題。L2：index1 20/31；L4：index1 35/55（64%）。L3 為 155 題，其中 46 題是對錯題且 38 題答案為「正確」（83%）。 | 重新打亂選項順序；對錯題補足「錯誤」答案題。 |
| 7 | 低 | levels.json vs modules.json | levels.json 模組數 8/8/15/8，modules.json 為 9/9/16/9（各級最後的 m9／m16 為單課模組）。 | 確認是否有意；若是請更新 levels.json 與時數。 |
| 8 | 低 | modules.json 與模組檔 | beginner-m2 / advanced-m10、m11、m12 標題與模組檔不同（如「布根地分級制度入門」vs「風土與品種」）；beginner-m3~m8 檔內 moduleId 為 module3…module8，非 beginner-mN。 | 統一課名與 moduleId（先確認程式是否依賴 moduleId，故未修）。 |
| 9 | 低 | zh-TW locales | src/locales/zh-TW/lessons/bourgogne 僅 39 檔，en／ja 各 43 檔（多 beginner-m9、intermediate-m9、master-m9、advanced-m16）。中文原文在 public 下，影響待確認。 | 確認 zh-TW 是否需補檔或走 fallback。 |
| 10 | 低 | beginner-m1 vs 其他 | Romanée-Conti 年產量：5,000-6,000 瓶、約450箱(5,400瓶)、約6,000瓶並存；advanced-m2「每瓶2-5萬美元」無出處。 | 統一為「約數千瓶」並標未核對。 |
| 11 | 低 | advanced-m1、master-m1 | 「2億年演化史」／「2000年演化史」，且侏羅紀年代寫法 1.5 / 1.55 / 1.8-1.4 億年並存。 | 統一為「約 1.5 億年前（晚侏羅紀）」，master-m1 的「2000年」疑為筆誤。 |

## 已修正
- level1/modules.json：beginner-m5 的 lessons 由 3 改為 4（模組檔實際 4 課：已逐項核對，純結構修正）。

## 已查證無誤（有來源或內部可自洽）
- 2015年7月4日 UNESCO 列入、1,247 個 Climats（UNESCO WHC 清單 1425）。
- 33 個特級園＝夏布利1＋夜丘24＋伯恩丘8（加總相符）；約640個一級園、44個村莊級 AOC（與 BIVB 公開分類一致；本次未能開啟全文，屬一般共識）。
- 面積：Romanée-Conti 1.8 ha、La Tâche 6.06 ha、Clos de Vougeot 約50 ha（依一般公開資料）。
- 題庫：三語版（zh/en/ja）題數一致，無重複選項、無答案超出範圍、皆有解析；未發現題幹直接洩漏答案。

## 無法查證
- 全球／大區酒 53% 產量與 27,000 公頃、各項拍賣與指數數字（發現 5、10）；本次搜尋只取得標題，無法開啟全文。
- 地圖／GeoJSON、元件版面與手機寬度、存取規則（課程為公開課程，router 無 requiresAdmin，符合其現況；未檢視方案頁）。
