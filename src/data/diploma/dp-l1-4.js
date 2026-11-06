/**
 * DP-L1-4 白酒與粉紅酒的釀造
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "白酒與粉紅酒的釀造",
    subtitle: "保護果香，還是追求質地？每一步都是選擇",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "從葡萄到果汁",
    highlights: [
      { id: 1, icon: "✋", title: "手採與機械採收", content: "手採可選果、保留整串（整串壓榨、傳統法氣泡酒必要）；機械採收快速、便宜，可在夜間低溫作業，但會破損果粒" },
      { id: 2, icon: "🫧", title: "浸皮與整串壓榨", content: "壓榨前短暫浸皮可增加香氣與質地（芳香品種常用），但也增加酚類與苦味；整串壓榨汁液乾淨、酚類少，適合細緻風格" },
      { id: 3, icon: "🧊", title: "澄清（débourbage）", content: "發酵前讓果汁靜置沉澱，去除固體；澄清越徹底，酒越乾淨、果香越純，但保留少量固體可增加複雜度與酵母營養" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">白酒的關鍵是控制氧氣與酚類：越想保留果香，越要低溫、快速、少接觸。</p></div>"
  },
  {
    title: "發酵、乳酸發酵與熟成",
    highlights: [
      { id: 1, icon: "🌡️", title: "發酵溫度與酵母", content: "白酒常在約 12–22°C 發酵：低溫保留酯類與果香，較高溫帶來更多質地；人工培養酵母穩定可控，野生酵母可能增加複雜度但風險較高" },
      { id: 2, icon: "🧈", title: "乳酸發酵（MLF）", content: "乳酸菌把尖銳的蘋果酸轉為柔和的乳酸，降低酸度、增加圓潤感，並可能產生奶油味（diacetyl）。高酸的涼爽產區常做，保留清新的芳香白酒多半阻止" },
      { id: 3, icon: "🛢️", title: "橡木與酒渣", content: "橡木桶發酵或熟成帶來香草、烘烤與微氧化的質地；酒渣攪拌（bâtonnage）增加奶油、麵包香與圓潤口感。不鏽鋼則保留純淨果香" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一個 Chardonnay，可以靠 MLF、橡木與酒渣做出從清爽到濃厚的完整光譜。</p></div>"
  },
  {
    title: "粉紅酒的四種做法",
    highlights: [
      { id: 1, icon: "🍑", title: "直接壓榨", content: "紅葡萄直接壓榨，接觸果皮時間極短，顏色最淺、最細緻，是普羅旺斯風格的代表" },
      { id: 2, icon: "⏱️", title: "短時間浸皮", content: "果汁與果皮浸泡數小時到一兩天後分離，顏色與風味較深（例：Tavel、Bandol 的部分酒款）" },
      { id: 3, icon: "🩸", title: "放血法（saignée）", content: "從紅酒發酵槽放出部分汁液釀成粉紅酒，同時濃縮剩下的紅酒；粉紅酒是副產品，風格較深、較有酒體" },
      { id: 4, icon: "🥂", title: "紅白調配", content: "把紅酒加入白酒。歐盟原則上不允許以此釀造靜態粉紅酒，香檳粉紅是最常見的例外" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">粉紅酒的顏色是釀造選擇的結果，不是品質的保證。</p></div>"
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
            question: "乳酸發酵（MLF）主要改變了什麼？",
            options: ["A. 把糖轉為酒精","B. 增加單寧","C. 去除色素","D. 把蘋果酸轉為乳酸，降低酸度"],
            correct: 3,
            explanation: "MLF 也可能帶來 diacetyl 的奶油香。"
          },
          {
            type: 'single',
            question: "想保留芳香白酒的清新果香，通常會怎麼做？",
            options: ["A. 高溫發酵並做 MLF","B. 低溫發酵、阻止 MLF、不鏽鋼","C. 長時間新橡木桶熟成","D. 延長浸皮數週"],
            correct: 1,
            explanation: "低溫與少接觸保留酯類與一級果香。"
          },
          {
            type: 'single',
            question: "哪一種粉紅酒做法顏色通常最淺？",
            options: ["A. 長時間浸皮","B. 直接壓榨","C. 放血法","D. 短時間浸皮"],
            correct: 1,
            explanation: "直接壓榨的果皮接觸最短。"
          },
          {
            type: 'single',
            question: "歐盟以紅白調配釀造粉紅酒，最常見的例外是？",
            options: ["A. Côtes de Provence","B. Rioja Rosado","C. Tavel","D. 香檳粉紅"],
            correct: 3,
            explanation: "靜態粉紅酒原則上不允許調配。"
          }
        ]
      }
    }
  }
]
