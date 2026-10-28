/**
 * US-L3-1 葡萄栽培與氣候風險
 * 事實來源：Wikipedia（Snake River Valley AVA、Monticello AVA、Texas High Plains AVA、Washington wine、Oregon wine、New York wine、Virginia wine、Texas wine）、Washington State Wine Commission（Sustainable WA × Salmon-Safe, 2024）、Oregon State University（2020 wildfire smoke）、AWRI（smoke taint）、Cornell LII（Granholm v. Heald, 2005）。數字一律標註年份；來源有出入者（如 Washington 的全美排名）不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄栽培與氣候風險",
    subtitle: "冬季凍害、根系、野火與病害",
    icon: "🌡️",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "冬季凍害與自根葡萄藤",
    highlights: [
      { id: 1, icon: "🥶", title: "東 Washington", content: "大陸性氣候的冬季寒潮曾重創葡萄藤；1996 與 2003 年的嚴重凍害損傷 Merlot，使種植轉向 Cabernet Sauvignon 與 Cabernet Franc" },
      { id: 2, icon: "🌱", title: "自根（own-rooted）", content: "Washington 沙質土壤的根瘤蚜風險低，部分種植者不嫁接，以避開怕凍的嫁接點" },
      { id: 3, icon: "⛄", title: "其他東岸", content: "Finger Lakes 與 Idaho 同屬寒冬產區；Finger Lakes 靠湖效應與積雪緩衝，Idaho 的 Snake River Valley 年降雨僅 10–12 英寸，須灌溉" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">東部與內陸產區的核心風險是冬季；西部沿海則是秋雨。</p></div>"
  },
  {
    title: "2020 野火與煙燻味",
    highlights: [
      { id: 1, icon: "🔥", title: "事件", content: "2020 年 9 月的天氣事件引發超過 100 場大型森林火災，西岸燒毀超過 500 萬英畝" },
      { id: 2, icon: "🧪", title: "化學", content: "煙中的揮發性酚（如 guaiacol、cresols）可被葡萄吸收；也會與糖結合成無煙味的糖苷，發酵時再釋出" },
      { id: 3, icon: "👃", title: "風味", content: "煙燻、焦味、灰燼或藥味；影響因品種與酒款風格而異" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">檢測用揮發性酚與糖苷，再配合小量發酵與感官評估決定採收。</p></div>"
  },
  {
    title: "病害與品種選擇",
    highlights: [
      { id: 1, icon: "🦠", title: "Texas 東南", content: "Pierce's disease 重創葡萄園；Blanc du Bois 與 Black Spanish 等耐病品種被更多種植" },
      { id: 2, icon: "💧", title: "Virginia", content: "夏季炎熱潮濕；Jefferson 約 1807 年的葡萄園因黑腐病與根瘤蚜而失敗" },
      { id: 3, icon: "🌵", title: "Texas High Plains", content: "乾燥低濕使露菌病、Pierce's disease、根瘤蚜與黑腐病少見" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">濕度決定病害：潮濕東岸靠耐病品種，乾燥內陸則病害較少。</p></div>"
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
            question: "1996 與 2003 年的嚴重凍害主要損傷了哪個品種？",
            options: ["A. Merlot","B. Riesling","C. Pinot Noir","D. Syrah"],
            correct: 0,
            explanation: "Merlot 受創後，種植轉向 Cabernet Sauvignon 與 Cabernet Franc。"
          },
          {
            type: 'single',
            question: "Washington 部分葡萄藤不嫁接的原因是？",
            options: ["A. 沙質土壤根瘤蚜風險低，可避開怕凍的嫁接點","B. 法規禁止砧木","C. 為了提高酸度","D. 因為雨量太多"],
            correct: 0,
            explanation: "沙質土壤的根瘤蚜風險低。"
          },
          {
            type: 'single',
            question: "煙燻味（smoke taint）的主要化合物是？",
            options: ["A. 揮發性酚及其糖苷","B. 硫醇","C. 吡嗪","D. 酯類"],
            correct: 0,
            explanation: "揮發性酚，包含糖苷結合形態。"
          },
          {
            type: 'single',
            question: "Pierce's disease 重創哪個產區？",
            options: ["A. Southeast Texas","B. Finger Lakes","C. Willamette Valley","D. Red Mountain"],
            correct: 0,
            explanation: "Southeast Texas。"
          }
        ]
      }
    }
  }
]
