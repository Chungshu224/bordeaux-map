/**
 * DP-L1-5 紅酒釀造、熟成與裝瓶
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "紅酒釀造、熟成與裝瓶",
    subtitle: "萃取多少、熟成多久：紅酒風格的兩個旋鈕",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "萃取",
    highlights: [
      { id: 1, icon: "🍇", title: "去梗與冷浸漬", content: "多數紅酒先去梗；發酵前低溫浸漬數天，可在無酒精環境中萃取顏色與果香、較少單寧" },
      { id: 2, icon: "🔄", title: "踩皮、淋汁與 délestage", content: "發酵時果皮浮成酒帽：踩皮（punch-down）萃取強而溫和，淋汁（pump-over）兼具通氣與降溫，délestage（放汁回淋）則萃取較強、帶來較柔的單寧" },
      { id: 3, icon: "🌡️", title: "溫度與浸皮時間", content: "紅酒常在約 20–32°C 發酵：較高溫萃取較多；發酵後延長浸皮會讓單寧聚合、口感更柔，但時間過長也可能過度萃取" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">萃取的目標是「熟的單寧」，不是「最多的單寧」。</p></div>"
  },
  {
    title: "整串、二氧化碳浸皮與壓榨",
    highlights: [
      { id: 1, icon: "🌿", title: "整串發酵", content: "保留部分或全部果梗：增加香料、草本香與結構，並讓果香更新鮮；但果梗不熟會帶來青澀單寧" },
      { id: 2, icon: "🫧", title: "二氧化碳浸皮", content: "整串葡萄放在充滿二氧化碳的密閉槽中，果粒內部發酵，帶來櫻桃、香蕉、泡泡糖香與低單寧的柔和口感；Beaujolais 是代表，Languedoc 的 Carignan 也常用" },
      { id: 3, icon: "🗜️", title: "自流酒與壓榨酒", content: "發酵後流出的自流酒較細緻；壓榨酒單寧與顏色較重。釀酒師可依年份決定加入多少壓榨酒來調整結構" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述時把技術與風格成對寫：整串 → 香料與新鮮；二氧化碳浸皮 → 果香與柔和。</p></div>"
  },
  {
    title: "熟成、澄清與裝瓶",
    highlights: [
      { id: 1, icon: "🛢️", title: "容器與氧氣", content: "小橡木桶帶來木味與微氧化，新桶影響最大；大木桶、水泥槽、陶甕影響較小、強調果味與產地。法國橡木偏香料與細緻單寧，美國橡木偏香草與椰子" },
      { id: 2, icon: "🧪", title: "澄清與穩定", content: "澄清劑（如蛋白、皂土）去除使酒混濁或苦澀的物質；冷穩定防止酒石酸結晶析出；過濾去除微生物。不澄清、不過濾是風格選擇，代價是穩定性風險" },
      { id: 3, icon: "🍾", title: "二氧化硫與封瓶", content: "二氧化硫具抗氧化與抗菌作用。天然軟木塞允許極少量氧氣、可能有 TCA 軟木塞污染；螺旋蓋密封穩定、保留果香，但可能出現還原味；合成塞介於兩者之間" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">裝瓶前的每一步，都在「穩定」與「個性」之間取捨。</p></div>"
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
            question: "二氧化碳浸皮最典型的風格結果是？",
            options: ["A. 氧化、堅果味","B. 高殘糖","C. 高單寧、需長期陳年","D. 果香濃、低單寧、柔和"],
            correct: 3,
            explanation: "Beaujolais 是代表。"
          },
          {
            type: 'single',
            question: "發酵前冷浸漬的主要目的是？",
            options: ["A. 提高酒精度","B. 促進 MLF","C. 去除酒石酸","D. 在無酒精環境中萃取顏色與果香"],
            correct: 3,
            explanation: "冷浸漬較少萃取單寧。"
          },
          {
            type: 'single',
            question: "冷穩定主要防止什麼？",
            options: ["A. 酒石酸結晶析出","B. 軟木塞污染","C. 氧化","D. 還原味"],
            correct: 0,
            explanation: "冷穩定讓酒石酸氫鉀在裝瓶前析出。"
          },
          {
            type: 'single',
            question: "TCA 污染與哪種封瓶方式最相關？",
            options: ["A. 皇冠蓋","B. 螺旋蓋","C. 天然軟木塞","D. 玻璃塞"],
            correct: 2,
            explanation: "螺旋蓋的風險反而是還原味。"
          }
        ]
      }
    }
  }
]
