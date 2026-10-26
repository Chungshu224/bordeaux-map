/**
 * CH-L2-1 AOC 法規與 Échelle des Crus
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "AOC 法規與 Échelle des Crus",
    subtitle: "從 INAO 產品規格讀懂香檳",
    icon: "📜",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "AOC 規格的骨架",
    highlights: [
      { id: 1, icon: "📜", title: "法源與版本", content: "AOC「Champagne」最初由 1936 年 6 月 29 日的命令確認；現行產品規格（cahier des charges）由 2024 年 1 月 25 日令核定、2024 年 1 月 28 日公告" },
      { id: 2, icon: "🍾", title: "產品類型", content: "AOC 只保留給白或粉紅的氣泡酒，而且只能在玻璃瓶內二次發酵；靜態酒屬另外兩個 AOC（Coteaux Champenois、Rosé des Riceys）" },
      { id: 3, icon: "🍇", title: "允許品種", content: "2024 年版列出 7 種主要品種：Arbane、Chardonnay、Meunier、Petit Meslier、Pinot Blanc、Pinot Gris、Pinot Noir；另有試種品種 Voltis（Chardonnay Rosé 為後續核准，見 Level 1）" },
      { id: 4, icon: "📏", title: "比例規則", content: "園區：主要品種須 ≥ 95%、Voltis ≤ 5%；單一調配：主要品種 ≥ 90%、Voltis ≤ 10%，而且不能只用 Voltis" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">本課所有數字以 INAO 產品規格為最高優先，其次 Comité Champagne，最後才是第三方資料。</p></div>"
  },
  {
    title: "葡萄園與收成的硬性規定",
    highlights: [
      { id: 1, icon: "📐", title: "密度與修剪", content: "行距 ≤ 2.00 公尺、株距 0.70–1.50 公尺、兩者相加 ≤ 3.00 公尺；每平方公尺 ≤ 18 個 yeux francs（正常芽眼）；修剪限 Chablis、Cordon de Royat、Vallée de la Marne（僅限 Meunier）與 Guyot 等制式" },
      { id: 2, icon: "🚫", title: "禁止事項", content: "禁止灌溉；行間禁用芽前除草劑；田間通道（tournières）須長年草覆，行間 11 月 30 日至 1 月 31 日須有植被" },
      { id: 3, icon: "✋", title: "整串採收", content: "規格禁止任何無法採收整串葡萄的方式，並要求整串運送、整串入壓榨機，因此機械採收事實上不可行；採收起始日依法令公告，截止日由省長令決定" },
      { id: 4, icon: "🍬", title: "成熟度與酒精", content: "葡萄糖度不得低於 143 g/L 果汁；基酒天然酒精度至少 9%；加糖提高酒精後，氣泡化後總酒精度上限 13%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">規定的方向很一致：整串、輕壓、保留高酸，為氣泡酒打底。</p></div>"
  },
  {
    title: "產量上限、儲備與壓榨限額",
    highlights: [
      { id: 1, icon: "📈", title: "兩層產量邏輯", content: "規格設結構性天花板：基準產量 12,400 公斤/公頃、產量上限（rendement butoir）15,500 公斤/公頃；每年實際可上市的「商業產量」由 Comité Champagne 於夏季決定（2025 年 9,000、2026 年 8,800 公斤/公頃，僅作年度示例）" },
      { id: 2, icon: "🏺", title: "儲備上限", content: "設有儲備制度時，每位業者可保留的基酒上限為 10,000 公斤葡萄/公頃（生產面積）；為充實儲備而多收的產量須個別申請、證明品質管控，且不得超過 15,500；儲備酒不能標示年份" },
      { id: 3, icon: "⚖️", title: "壓榨限額", content: "每 160 公斤葡萄最多取 102 公升果汁，所以一壓（1 marc）4,000 公斤最多 2,550 公升；Comité 說明為 cuvée 2,050 公升 + taille 500 公升；超出者視同 rebêche，須送去蒸餾" },
      { id: 4, icon: "⏳", title: "最短陳年", content: "NV：自裝瓶（tirage）起至少 15 個月才可上市；Vintage：至少 36 個月；除渣不得早於裝瓶後 12 個月（細節見 ch-l2-6）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">產量是雙層設計：規格決定天花板，產業每年用商業產量調節供給。</p></div>"
  },
  {
    title: "Échelle des Crus：以村莊為單位的分級",
    highlights: [
      { id: 1, icon: "🏘️", title: "分級單位是村莊", content: "香檳不分級葡萄園，而是以村莊（commune，稱為 cru）為單位；產區共有 319 個 cru（Comité Champagne 關鍵數字）" },
      { id: 2, icon: "📊", title: "價格量表的由來", content: "1911 年出現首份量表、1919 年勞資雙方正式議定、1952 年命令確定級距：Grand Cru ＝ 100%，Premier Cru ＝ 90–99%，其餘村莊 80–89%；百分比是該村葡萄可拿到的基準葡萄價比例（1911 年是否公開，來源說法不一）" },
      { id: 3, icon: "⏹️", title: "量表退場", content: "固定葡萄價格於 2004 年因歐盟競爭法而停止（Taittinger、WineWithSeth）；Comité Champagne 的 FAQ 則寫 INAO 於 2010 年廢除量表。兩個年份並列、不進測驗；既有村莊依「在地、誠信、持續的慣例」保留 Grand／Premier Cru 稱呼" },
      { id: 4, icon: "🔢", title: "現行名單與 42／44 之謎", content: "INAO 2024 規格：17 村可標 Grand Cru（也可標 Premier Cru），另 42 村只能標 Premier Cru，全在 Marne 省。舊資料常寫 44 個 Premier Cru（17／44／258 ＝ 319）；差 2 很可能是舊表把 Chouilly 的黑葡萄與 Tours-sur-Marne 的白葡萄另列為 Premier Cru（本課推測）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">42 與 44 的差異、2004 與 2010 的年份差異，都屬來源出入：課內並列說明，不進測驗。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "依 INAO 規格，NV 與 Vintage 香檳自裝瓶起、上市前的最短陳年分別是？",
            options: ["A. 12 個月／24 個月","B. 15 個月／36 個月","C. 18 個月／48 個月","D. 9 個月／18 個月"],
            correct: 1,
            explanation: "規格：NV 至少 15 個月、Vintage 至少 36 個月，皆自裝瓶（tirage）日起算。"
          },
          {
            type: 'single',
            question: "INAO 規格中，可使用「Grand Cru」稱呼的村莊共有幾個？",
            options: ["A. 9 個","B. 42 個","C. 17 個","D. 319 個"],
            correct: 2,
            explanation: "17 個（漢斯山 9、馬恩河谷 2、白丘 6）；42 個是另外只能標 Premier Cru 的村莊，319 是全部 cru 村莊數。"
          },
          {
            type: 'single',
            question: "一次壓榨（1 marc）4,000 公斤葡萄，依規格（每 160 公斤最多 102 公升）最多可取多少果汁？",
            options: ["A. 2,550 公升","B. 4,000 公升","C. 1,600 公升","D. 3,200 公升"],
            correct: 0,
            explanation: "4,000 ÷ 160 × 102 ＝ 2,550 公升，Comité Champagne 說明為 cuvée 2,050 + taille 500。"
          }
        ]
      }
    }
  }
]
