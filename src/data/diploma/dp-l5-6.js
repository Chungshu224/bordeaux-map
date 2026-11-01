/**
 * DP-L5-6 綜合模擬考
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "綜合模擬考",
    subtitle: "限時作答，再對照評分要點檢討",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "模擬考說明",
    highlights: [
      { id: 1, icon: "⏱️", title: "建議時間", content: "選擇題每題約 1 分鐘，簡答題每題約 10–15 分鐘；先寫骨架再展開" },
      { id: 2, icon: "✅", title: "自我評分", content: "簡答題交卷後會顯示評分要點，誠實勾選答案中真正寫到的要點；涵蓋六成以上才算通過該題" },
      { id: 3, icon: "🔁", title: "檢討", content: "沒涵蓋的要點，回到對應的 Level 複習；同一題可隔幾天再寫一次，比較進步" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">模擬考的目的不是分數，而是找出還沒串起來的因果鏈。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 綜合模擬考",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "露菌病通常以什麼防治？",
            options: ["A. 灌溉","B. 銅劑","C. 硫磺","D. 嫁接"],
            correct: 1,
            explanation: "硫磺用於白粉病。"
          },
          {
            type: 'single',
            question: "Cava Reserva 的最短酒渣陳年是？",
            options: ["A. 30 個月","B. 36 個月","C. 18 個月","D. 9 個月"],
            correct: 2,
            explanation: "Gran Reserva 30、Paraje Calificado 36。"
          },
          {
            type: 'single',
            question: "Oloroso 加烈到約 17% 以上的結果是？",
            options: ["A. 變成甜酒","B. 開始二次發酵","C. 顏色變淺","D. flor 無法存活，純氧化熟成"],
            correct: 3,
            explanation: "flor 只在約 15% 存活。"
          },
          {
            type: 'single',
            question: "在按瓶課稅的市場，為何低價酒「不划算」？",
            options: ["A. 固定稅與包裝占價格比例高","B. 低價酒酒精較高","C. 低價酒不能出口","D. 低價酒都用天然軟木塞"],
            correct: 0,
            explanation: "酒本身的價值比例很低。"
          },
          {
            type: 'short',
            question: "簡答：解釋 Port 的加烈時機如何決定它的甜度與釀造方式。（建議 150 字內）",
            points: [
              "發酵中途加入約 77% 的葡萄烈酒",
              "高酒精使酵母停止 → 留下殘糖 → 甜型",
              "發酵只有兩三天 → 必須快速、強力萃取",
              "萃取方式：lagar 踩皮或機械踩皮、自動淋汁槽"
            ],
            model: "Port 在發酵途中加入約 77% 的葡萄烈酒，高酒精使酵母停止，未發酵的糖留下來，所以是甜型。因為發酵只進行兩三天，必須在短時間內取得顏色與單寧，傳統上在石槽（lagar）踩皮，現代則用機械踩皮或自動淋汁槽。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "簡答：評估暖化對英格蘭與溫暖產區氣泡酒的不同影響。（建議 200 字內）",
            points: [
              "英格蘭：成熟更穩定、產量波動減少 → 受益",
              "英格蘭的其他條件：白堊、涼爽、香檳酒廠投資、Sussex PDO",
              "溫暖產區：保酸更難 → 提早採收、高海拔、加酸",
              "風險：英格蘭仍有春霜與年份波動",
              "結論：有條件的判斷（受益或受損取決於起點氣候）"
            ],
            model: "暖化讓英格蘭這類邊緣產區成熟更穩定、產量波動減少，加上白堊土壤、香檳酒廠投資與 2022 年的 Sussex PDO，整體受益；但春霜與年份差異仍在。溫暖產區則更難保酸，必須提早採收、往高海拔移動或加酸，成本與風格壓力上升。結論：暖化的影響取決於產區原本的氣候，對邊緣產區是機會，對溫暖產區是挑戰。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
