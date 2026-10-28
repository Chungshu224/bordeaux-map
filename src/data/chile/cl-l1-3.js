/**
 * CL-L1-3 葡萄品種
 * 事實來源：Wine With Seth（Chile、Chilean DO system）、Wikipedia（Carménère）、SAG（Catastro Vitícola Nacional 2023 Informe ejecutivo）、Wine With Seth 引用的 Decreto 464（1995）。數字一律標註年份；來源有出入者（Costa／Entre Cordilleras／Andes 的年份、葡萄根瘤蚜年份、Carmenère 面積、DO 層級名稱）課內標明、不進測驗，並須對照 SAG 法規原文。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄品種",
    subtitle: "Cabernet Sauvignon、Carmenère、Merlot、País、Carignan、Sauvignon Blanc、Chardonnay 與 Pinot Noir",
    icon: "🍇",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "紅葡萄：Cabernet 與 Carmenère",
    highlights: [
      { id: 1, icon: "🔴", title: "Cabernet Sauvignon", content: "最大宗的紅葡萄，超過 40,000 公頃（Wine With Seth，未標年份）" },
      { id: 2, icon: "🟣", title: "Carmenère", content: "約 10,800 公頃，占全球 Carmenère 種植的 95% 以上（Wine With Seth，未標年份；Wikipedia 的 2009 年數字為 8,800 公頃以上）" },
      { id: 3, icon: "🍷", title: "風格", content: "Carmenère 單寧比 Cabernet Sauvignon 柔和、中等酒體；太早採收會有明顯青椒味，太晚採收則偏果醬感（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cabernet Sauvignon 是面積最大的紅葡萄，Carmenère 是智利最有辨識度的代表。</p></div>"
  },
  {
    title: "其他紅葡萄與傳統品種",
    highlights: [
      { id: 1, icon: "🌱", title: "País", content: "殖民時期傳入的 Mission 葡萄，是智利最古老的品種；近年老藤受到重視" },
      { id: 2, icon: "📊", title: "四個大品種", content: "2023 年 SAG 統計：Cabernet Sauvignon、Sauvignon Blanc、País 與 Merlot 合計占釀酒葡萄面積的 56%" },
      { id: 3, icon: "🧬", title: "Carignan 與其他", content: "Carignan 老藤與乾燥栽培的故事會在 Level 2 與 Level 3 說明" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">智利的品種結構既有國際品種，也有 País 與 Carignan 等傳統品種。</p></div>"
  },
  {
    title: "白葡萄與冷涼品種",
    highlights: [
      { id: 1, icon: "⚪", title: "Sauvignon Blanc", content: "智利最大宗的白葡萄（Wine With Seth）" },
      { id: 2, icon: "🥂", title: "Chardonnay", content: "另一個主要白葡萄，沿海涼區表現尤其受重視" },
      { id: 3, icon: "🌫️", title: "Pinot Noir", content: "受益於寒流與海風的沿海產區，產區細節於 Level 2 說明" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">白葡萄與 Pinot Noir 的成功，多半來自寒流與海風影響的沿海涼區。</p></div>"
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
            question: "智利面積最大的紅葡萄是？",
            options: ["A. Cabernet Sauvignon","B. Merlot","C. Syrah","D. Pinot Noir"],
            correct: 0,
            explanation: "超過 40,000 公頃（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Carmenère 占全球種植面積的比例大約？",
            options: ["A. 10%","B. 30%","C. 60%","D. 95% 以上"],
            correct: 3,
            explanation: "超過 95%。"
          },
          {
            type: 'single',
            question: "2023 年 SAG 統計中，四個大品種合計占多少？",
            options: ["A. 26%","B. 36%","C. 56%","D. 86%"],
            correct: 2,
            explanation: "56%。"
          },
          {
            type: 'single',
            question: "智利最大宗的白葡萄是？",
            options: ["A. Sauvignon Blanc","B. Torrontés","C. Riesling","D. Gewürztraminer"],
            correct: 0,
            explanation: "Sauvignon Blanc。"
          }
        ]
      }
    }
  }
]
