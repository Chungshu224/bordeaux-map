/**
 * CH-L3-5 產業、市場與貿易
 * 事實來源：Comité Champagne 新聞稿（2024 年出貨：271.4 百萬瓶，2025 年出貨回顧，2026-01-17）、Vinetur（2026-02，引 Comité 與產業人士：營收）、The Real Review（2025-08，庫存與結構）、Journal du Luxe（商業產量）、The Drinks Business（2025-10，Heidsieck & Co. Monopole）、Decanter（EPI、永續）、Pernod Ricard 出售 Mumm 的 2025 年媒體報導。出貨量、營收、庫存與集團結構每年變動，課內標年份，不進測驗。
 * 來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "產業、市場與貿易",
    subtitle: "出貨量、庫存、集團與供需機制",
    icon: "📈",
    background: "linear-gradient(135deg, #A8801C 0%, #6B500F 100%)"
  },
  {
    title: "出貨量與營收：三年下滑",
    highlights: [
      {
        id: 1,
        icon: "📦",
        title: "2023 → 2024 → 2025 的出貨",
        content: "2023 年約 2.99 億瓶（依 2024 年 −9.2% 反推）；2024 年 2.714 億瓶，較 2023 年 −9.2%；2025 年約 2.66 億瓶，較 2024 年小幅下滑約 2%（Comité Champagne、Vinetur）。每年數字會修正，本課一律標年份"
      },
      {
        id: 2,
        icon: "🌍",
        title: "國內與出口",
        content: "2024 年：法國 1.182 億瓶（−7.2%）、出口 1.532 億瓶（−10.8%），出口占 56.4%。2025 年：法國約 1.14 億瓶、出口約 1.52 億瓶，出口約占 57%（本課自行計算）；2025 年的降幅有超過八成來自法國內需（Vinetur）。結論：出口占過半，但近年壓力主要來自法國"
      },
      {
        id: 3,
        icon: "💶",
        title: "營收",
        content: "Vinetur 引述的產業數字：2022 年約 63 億歐元（高點）、2023 年約 62 億、2024 年約 58 億，2025 年暫定約 57 億歐元（−1.7%）。官方網頁本次未取得 2025 全年營收，故為暫定的二手數字。量下滑而值僅小幅下滑，代表平均價格上升或結構往高價位移"
      },
      {
        id: 4,
        icon: "❓",
        title: "為什麼會下滑？",
        content: "Vinetur 彙整的原因：美國加徵關稅前的提前出貨使經銷商庫存過多、法國國內消費疲弱與政治不確定、通膨與地緣緊張壓抑慶祝性消費、歐元走強使英鎊、美元、日圓買家更貴。這些是產業人士的解釋，不是單一因果；英國、日本、加拿大 2025 年進口仍成長"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">年份提醒：Comité Champagne 的 Key Figures 有 2023、2024、2025 三個版本，本頁數字皆標年份，考試以「方向」為主：量連三年降、出口過半、近年壓力偏法國。</p></div>"
  },
  {
    title: "庫存、儲備與商業產量",
    highlights: [
      {
        id: 1,
        icon: "🏚️",
        title: "酒窖裡的庫存",
        content: "The Real Review（2025）：酒廠持有庫存在 2024 年 7 月底約 15.23 億瓶（不含儲備酒），超過五年的銷量；酒廠目標約 3.5 年，CIVC 寫 3.8 年。其他資料常寫「約四年」。差異來自定義（是否含儲備、用哪年銷量），本課標註出入、不進測驗"
      },
      {
        id: 2,
        icon: "🏺",
        title: "儲備酒是額外的緩衝",
        content: "The Real Review 估算儲備酒另可增加約 2.57 億瓶（2024 年 7 月），並寫儲備上限「通常 8,000 公斤/公頃」，與 INAO 規格的 10,000 公斤/公頃不同（Level 2 已標出入，以規格為準）。重點：庫存＋儲備讓香檳能撐過連續歉收，也讓過剩壓力更大"
      },
      {
        id: 3,
        icon: "📉",
        title: "商業產量逐年下調",
        content: "2023 年 11,400、2024 年 10,000、2025 年 9,000 公斤/公頃（Journal du Luxe；2025 年約相當 2.55 億瓶，The Real Review）；Comité 的理由是配合市場需求、保護價值、避免價格下行壓力，並指出經濟與地緣不穩、消費行為更不穩定（Comité Champagne，Journal du Luxe）。這是供給管理，不是品質決定"
      },
      {
        id: 4,
        icon: "🔄",
        title: "多收的去哪裡？",
        content: "產量超出商業產量的部分可依規定進入儲備；The Real Review 估計 2025 年實際採收約 13,000–14,000 公斤/公頃，超出 9,000 的部分可存入儲備。換言之，商業產量限制的是「當年可上市量」，不是「葡萄能種多少」（規格天花板仍是 12,400／15,500，Level 2）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">三個機制要連起來講：商業產量（當年）→ 儲備（跨年）→ 庫存（成品）。MW 題常問它們如何一起穩住價格。</p></div>"
  },
  {
    title: "集團結構與生產者格局",
    highlights: [
      {
        id: 1,
        icon: "🏢",
        title: "大集團：LVMH 與 Pernod Ricard",
        content: "LVMH 的 Moët Hennessy 擁有六個香檳品牌（含 Moët & Chandon、Veuve Clicquot、Dom Pérignon、Ruinart、Krug、Mercier）。Pernod Ricard 擁有 G.H. Mumm 與 Perrier-Jouët；2025 年 2 月起有媒體報導其評估出售 Mumm（報導階段，未成定論，不進測驗）"
      },
      {
        id: 2,
        icon: "🤝",
        title: "中型集團與近年併購",
        content: "Piper-Heidsieck 與 Charles Heidsieck：2015 年由 Rémy Cointreau 售予 EPI（Decanter）。Lanson-BCC：2025 年 10 月宣布以 5,000 萬歐元取得 Heidsieck & Co. Monopole 全部股份，2026 年 1 月 1 日起生效，另計酒窖年份庫存；該牌 2024 年出貨 2.7 百萬瓶（IWSR，約五分之四出口）（The Drinks Business）。這個交易取代了先前由 Compagnie Vranken 收購的安排。賣方該來源未明示，故本課不寫"
      },
      {
        id: 3,
        icon: "📊",
        title: "市占結構（單一來源，標明）",
        content: "The Real Review（2025）：種植者擁有 88% 的園區；種植者收成的葡萄約 66% 賣給大型酒廠（且比例上升）；最大 100 家酒廠占銷量逾三分之二、出口 85%；最大六個集團占 2024 年營業額 75%；LVMH 約占銷量 18%、金額 22%；種植者自有品牌合計銷量 18%、金額 15%。注意：Decanter（2023）寫 Moët Hennessy 約占全球香檳金額約 30%，與 22% 不同——來源與口徑有出入，不進測驗"
      },
      {
        id: 4,
        icon: "⚖️",
        title: "種植者與酒廠的結構性矛盾",
        content: "種植者按公斤賣葡萄，傾向要高產量；酒廠賣酒，擔心過剩壓低價格（Academie du Vin，Level 2）。Comité Champagne 由 SGV 與 UMC 共同組成，就是把這個矛盾制度化。葡萄價格（每公斤）由產業協商，本次未取得可查證的最新數字，故不寫"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">公司與人名事實只寫能在來源找到的：沒有查證到的賣方、持股比例、人事，本課一律不寫。</p></div>"
  },
  {
    title: "MW 論述素材：產量上限與品牌",
    highlights: [
      {
        id: 1,
        icon: "🎯",
        title: "命題：供給管理有效嗎？",
        content: "正面：限制商業產量與儲備讓價格與品牌價值穩定，營收降幅小於出貨降幅（2025：量約 −2%、值約 −1.7%；2024：量 −9.2%、值約 −6.5%，後者為本課由 58 與 62 億推算）。反面：庫存仍高、種植者收入受限、消費者面對漲價的價格彈性風險"
      },
      {
        id: 2,
        icon: "🏷️",
        title: "品牌 vs 風土",
        content: "大集團把香檳當作品牌與奢侈品管理（高單價、全球通路）；種植者品牌以村莊與年份表達風土。香檳的特殊之處在於同時有「強品牌」與「強地名」：地名由 AOC 保護，品牌由企業經營，兩者互相放大"
      },
      {
        id: 3,
        icon: "🧮",
        title: "價格與價值的指標",
        content: "可用的論證指標：出貨量與營收的對照、出口占比、國內與出口分佈、庫存與銷量比、商業產量與實際收成之差、價格段分佈。引用時請寫年份與來源，並說明口徑（是否含儲備、是否為暫定）"
      },
      {
        id: 4,
        icon: "⚠️",
        title: "風險與外部衝擊",
        content: "關稅與匯率（美國提前出貨造成經銷商庫存、強歐元）、法國內需疲弱、氣候造成的收成波動、消費者世代轉變與低酒精趨勢；每一項都應連回「供給調節是否仍足夠」。2026 年預期僅有小幅成長（Vinetur 引述產業人士），本課不預測"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這一頁是「素材庫」：ch-l3-6 會示範如何把這些素材組成一篇有立場的論述。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "每年的「商業產量」（可上市產量）由誰決定？",
            options: [
              "A. 歐盟委員會",
              "B. 各酒廠自行決定",
              "C. Comité Champagne（每年夏季）",
              "D. 國際葡萄與葡萄酒組織（OIV）"
            ],
            correct: 2,
            explanation: "Comité Champagne 由 SGV 與 UMC 組成，每年夏季決定商業產量；規格另有基準 12,400、上限 15,500 的天花板（Level 2）。"
          },
          {
            type: "single",
            question: "在 2024 與 2025 年的 Comité 數據中，下列哪一項描述正確？",
            options: [
              "A. 出口量超過一半（約 56–57%）",
              "B. 法國內需占一半以上",
              "C. 出口量不到三成",
              "D. 出貨量逐年上升"
            ],
            correct: 0,
            explanation: "2024 年出口占 56.4%，2025 年約 57%；數字會逐年更新，記得「出口過半」這個結構即可。"
          },
          {
            type: "single",
            question: "Comité Champagne 在需求下滑時下調商業產量，最主要的邏輯是？",
            options: [
              "A. 提升酒的品質等級",
              "B. 減少種植面積",
              "C. 禁止出口",
              "D. 讓供給貼近需求、保護價值並避免價格下行壓力"
            ],
            correct: 3,
            explanation: "這是供給管理，不是品質決定；多收的部分可依規則進入儲備（Level 2、本課）。"
          }
        ]
      }
    }
  }
]
