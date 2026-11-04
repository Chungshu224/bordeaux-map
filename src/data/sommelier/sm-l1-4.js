/**
 * SM-L1-4 餐酒搭配原則
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "餐酒搭配原則",
    subtitle: "搭配不是背清單，而是理解味覺的交互作用",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "讓酒「變差」的食物元素",
    highlights: [
      { id: 1, icon: "🍰", title: "甜", content: "食物的甜會讓酒顯得更酸、更苦澀、果味與甜度降低；原則是酒至少要和食物一樣甜（例：甜點配甜酒）" },
      { id: 2, icon: "🍄", title: "鮮味（umami）", content: "蘑菇、熟成起司、醬油等鮮味也會讓酒顯得更苦澀、更酸；加一點鹽或酸可以緩和" },
      { id: 3, icon: "🌶️", title: "辣與苦", content: "辣會放大酒精灼熱感與苦澀，適合低酒精、低單寧、帶一點甜味的酒（例：半甜 Riesling 配辣菜）；食物的苦會加強酒的苦" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">甜、鮮、辣、苦會讓酒「變硬」：搭配時選更柔和、更甜或更低酒精的酒。</p></div>"
  },
  {
    title: "讓酒「變好」的元素與經典搭配",
    highlights: [
      { id: 1, icon: "🧂", title: "鹹與酸", content: "食物的鹹與酸會讓酒顯得更柔和、更有果味、酒體更飽滿；食物的酸要搭配酸度足夠的酒，否則酒會顯得平淡" },
      { id: 2, icon: "🥩", title: "油脂與蛋白質", content: "高酸可以切開油膩（例：香檳配炸物）；高單寧紅酒與富含蛋白質和油脂的紅肉相配，單寧與蛋白質結合後口感更柔" },
      { id: 3, icon: "🍷", title: "經典搭配的理由", content: "Sancerre 配山羊起司（酸配酸、鹹）、Sauternes 配藍紋起司（甜配鹹）、Barolo 配牛肉（單寧配蛋白質）。說出「為什麼」比記住組合更重要" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">CMS 服務考試常問「推薦一款酒並說明理由」：用這些原則說出理由。</p></div>"
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
            question: "甜點搭配葡萄酒的基本原則是？",
            options: ["A. 甜度無關","B. 酒至少要和食物一樣甜","C. 選最乾的酒","D. 選單寧最高的酒"],
            correct: 1,
            explanation: "否則酒會顯得酸而苦。"
          },
          {
            type: 'single',
            question: "辣的食物最適合搭配哪種酒？",
            options: ["A. 經新橡木桶的濃厚紅酒","B. 加烈的乾型 Sherry","C. 低酒精、低單寧、略帶甜味","D. 高酒精、高單寧"],
            correct: 2,
            explanation: "辣會放大酒精與苦澀。"
          },
          {
            type: 'single',
            question: "為什麼香檳適合搭配炸物？",
            options: ["A. 香檳很甜","B. 香檳單寧很高","C. 香檳酒精很高","D. 高酸與氣泡切開油膩"],
            correct: 3,
            explanation: "酸與油脂是經典的平衡。"
          },
          {
            type: 'single',
            question: "Sauternes 配藍紋起司屬於哪種原理？",
            options: ["A. 甜配鹹","B. 單寧配蛋白質","C. 酸配酸","D. 辣配甜"],
            correct: 0,
            explanation: "鹹讓甜酒顯得更平衡。"
          }
        ]
      }
    }
  }
]
