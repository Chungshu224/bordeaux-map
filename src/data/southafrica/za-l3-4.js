/**
 * ZA-L3-4 甜酒與加烈酒
 * 事實來源：Wine With Seth（Cap Classique、Constantia、Swartland、Walker Bay、Olifants River、Paarl、WO Label Declarations）、Wine Anorak（Cap Classique 2023）、Cheers／WineMag（甜酒）、Wine Wisdom（IPW／BWI）、The Drinks Business（2018 乾旱、2024 出口）、Farmers Weekly（2007 轉型憲章）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "甜酒與加烈酒",
    subtitle: "Vin de Constance、Muscadel、Jerepigo、Cape Port",
    icon: "🍯",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "甜酒的分類",
    highlights: [
      { id: 1, icon: "🍯", title: "Natural Sweet", content: "殘糖超過 20 g/L，甜度來自品種與成熟度而非貴腐；例：Klein Constantia 的 Vin de Constance" },
      { id: 2, icon: "🍇", title: "Noble Late Harvest", content: "殘糖超過 50 g/L（常見 100–150 g/L，有時達 200 g/L），受貴腐菌影響；例：Nederburg Edelkeur" },
      { id: 3, icon: "🌾", title: "Straw wine", content: "殘糖超過 30 g/L，採收後在稻草墊上風乾；例：以 Chenin Blanc 釀成的 Mullineux、De Trafford" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">以上門檻取自業界媒體整理，正式條文請查 Liquor Products Act 的規章。</p></div>"
  },
  {
    title: "Vin de Constance",
    highlights: [
      { id: 1, icon: "📜", title: "歷史", content: "Constantia 的甜酒在 19 世紀聞名；根瘤芽蟲與黴病終結了歷史時代；1980 年 Duggie Jooste 在 Klein Constantia 發起復興" },
      { id: 2, icon: "🍷", title: "現代版", content: "Klein Constantia 現代版首個年份 1986、1990 年上市；以 Muscat de Frontignan 釀成，無貴腐的風乾葡萄甜酒；有些年份採收者要分多達七次進園挑選" },
      { id: 3, icon: "🍾", title: "其他後代", content: "Grand Constance（Groot Constantia，2003）與 1769（Buitenverwachting，2007）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Vin de Constance 是 Natural Sweet，不是貴腐酒；這是常見的混淆點。</p></div>"
  },
  {
    title: "加烈酒",
    highlights: [
      { id: 1, icon: "🍊", title: "Muscadel", content: "加烈，須由 Muscat 品種釀成：白 Muscadel 用 Muscat d'Alexandrie（Hanepoot）或 Muscat Blanc à Petits Grains，紅 Muscadel 用 Muscat de Frontignan；發酵中途加入葡萄烈酒，酒精度 15–22%" },
      { id: 2, icon: "🧃", title: "Jerepigo", content: "不經發酵：葡萄汁加入烈酒（通常為白蘭地）" },
      { id: 3, icon: "🍷", title: "Cape Port 風格", content: "以 Calitzdorp 為中心，使用 Touriga Nacional 等葡萄牙品種；2012 年起須用 Cape Vintage、Cape Tawny 等名稱" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Muscadel 與 Jerepigo 都是加烈，但 Muscadel 是發酵途中停止，Jerepigo 完全未發酵。</p></div>"
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
            question: "Vin de Constance 屬於哪一類甜酒？",
            options: ["A. Natural Sweet","B. Noble Late Harvest","C. Jerepigo","D. 冰酒"],
            correct: 0,
            explanation: "Natural Sweet（無貴腐，來自 Muscat 風乾）。"
          },
          {
            type: 'single',
            question: "Jerepigo 的特徵是？",
            options: ["A. 完全發酵後加烈","B. 葡萄汁加烈酒，不經發酵","C. 貴腐葡萄","D. 傳統法氣泡"],
            correct: 1,
            explanation: "未經發酵。"
          },
          {
            type: 'single',
            question: "Klein Constantia 現代版 Vin de Constance 的首個年份是？",
            options: ["A. 1659","B. 1816","C. 1986","D. 2003"],
            correct: 2,
            explanation: "1986 年（1990 年上市）。"
          },
          {
            type: 'single',
            question: "2012 年起，Calitzdorp 的 Port 風格酒應如何稱呼？",
            options: ["A. Port","B. Cape Vintage／Cape Tawny 等","C. Madeira","D. Sherry"],
            correct: 1,
            explanation: "須用 Cape 前綴。"
          }
        ]
      }
    }
  }
]
