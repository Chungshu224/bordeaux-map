/**
 * BD-L3-1 蒸餾與熟成深度
 * 事實來源：alcademics（Cognac distillation on the lees）、Spirits & Distilling（maturation in the barrel）、WSET Level 2 Spirits 學習指南摘要（maturation in oak）、Difford's Guide（rancio、Cognac）、armagnac.fr（aromas）、The Drinks Business、Just Drinks（Cognac exports、China anti-dumping）、Regulation (EU) 2019/787、Wikipedia、GuildSomm、SA Brandy Foundation
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "蒸餾與熟成深度",
    subtitle: "酒泥、酒心切取，以及橡木桶內的化學變化",
    icon: "🔬",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "蒸餾的變數",
    highlights: [
      { id: 1, icon: "🥣", title: "帶酒泥蒸餾", content: "酒泥是發酵後沉澱的死酵母。帶酒泥蒸餾通常帶來較堅果味、較綿密圓潤、較複雜的酒；過濾後蒸餾則較乾淨。酒泥所含的脂肪酸酯與日後 rancio 的形成有關；但酒泥可能黏在蒸餾器上燒焦而產生異味（alcademics）" },
      { id: 2, icon: "⏱️", title: "時間與濃度", content: "基酒約 9%，第一次蒸餾到約 30%，第二次到約 70 至 72%；每次蒸餾約 12 小時，所以季節內須連續作業（alcademics；與 L1 一樣，精確數字來源略有差異）" },
      { id: 3, icon: "✂️", title: "切取在兩次都做", content: "酒頭與酒尾的切取在第一次與第二次蒸餾之後都會進行；切取點是蒸餾師的風格決定（alcademics）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">不同酒廠對是否帶酒泥的說法互相矛盾，故不列入測驗。</p></div>"
  },
  {
    title: "橡木桶的四個過程",
    highlights: [
      { id: 1, icon: "🧲", title: "萃取與減法", content: "萃取：木質化合物溶入酒中，增加顏色、風味與結構。減法：烘烤／炭化層像活性碳，吸附硫化物等刺激成分（WSET Level 2、Spirits & Distilling）" },
      { id: 2, icon: "🌬️", title: "氧化與蒸發", content: "氧化：微量氧氣透過木桶進入，使酒變柔並形成酯類。蒸發：水和酒精從桶壁逸出，即天使的分享（WSET Level 2）" },
      { id: 3, icon: "🧬", title: "化合物對應風味", content: "木質素分解出 vanillin（香草）、eugenol（丁香）、guaiacol（煙燻酚）；半纖維素烘烤成焦糖化的糖與 furfural；橡木內酯帶椰子與木質味；單寧最初 6 至 12 個月在新桶中溶出最快（Spirits & Distilling）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">熟成不是線性：品質常上升、回落，再升到新的高原。</p></div>"
  },
  {
    title: "橡木種類與氣候",
    highlights: [
      { id: 1, icon: "🌳", title: "美國橡木 vs 歐洲橡木", content: "美國白橡木：內酯與 vanillin 高、單寧較低；歐洲橡木（robur／petraea）：ellagitannin 較高，帶結構與乾果、丁香、香料味（WSET Level 2）。Cognac 用法國橡木；Jerez 用美國橡木" },
      { id: 2, icon: "🆕", title: "新桶與舊桶", content: "新桶萃取最快最強；refill 桶萃取力弱，讓基酒本性顯露（WSET Level 2）。這解釋了 Cognac 先新桶後舊桶的做法" },
      { id: 3, icon: "🌡️", title: "倉庫氣候", content: "乾燥環境水分蒸發較快，酒精度反而上升；潮濕環境酒精先走，度數下降；熱帶地區熟成快得多（WSET Level 2）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 常問「為何同樣的年數在不同產區口感不同」。</p></div>"
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
            question: "帶酒泥蒸餾通常帶來什麼？",
            options: ["A. 較堅果味、綿密、複雜","B. 更乾淨、更中性","C. 更高酒精度","D. 更多顏色"],
            correct: 0,
            explanation: "alcademics。"
          },
          {
            type: 'single',
            question: "橡木烘烤／炭化層的「減法」作用是？",
            options: ["A. 像活性碳吸附硫化物","B. 增加糖度","C. 提高酒精度","D. 加速蒸發"],
            correct: 0,
            explanation: "WSET Level 2。"
          },
          {
            type: 'single',
            question: "Vanillin 帶來什麼風味？",
            options: ["A. 香草","B. 丁香","C. 煙燻","D. 杏仁"],
            correct: 0,
            explanation: "丁香是 eugenol，煙燻是 guaiacol。"
          },
          {
            type: 'single',
            question: "哪種橡木單寧（ellagitannin）較高？",
            options: ["A. 歐洲橡木","B. 美國白橡木","C. 兩者相同","D. 都沒有"],
            correct: 0,
            explanation: "歐洲橡木單寧較高；美國橡木內酯較高。"
          },
          {
            type: 'single',
            question: "乾燥倉庫中酒精度通常如何變化？",
            options: ["A. 上升","B. 下降","C. 不變","D. 先降後升"],
            correct: 0,
            explanation: "水分蒸發較快，度數上升。"
          },
          {
            type: 'single',
            question: "新桶最大的特徵是？",
            options: ["A. 萃取最快最強","B. 幾乎不萃取","C. 只帶來氧化","D. 讓酒變透明"],
            correct: 0,
            explanation: "WSET Level 2。"
          }
        ]
      }
    }
  }
]
