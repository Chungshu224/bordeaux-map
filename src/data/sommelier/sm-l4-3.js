/**
 * SM-L4-3 CMS 綜合模擬
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "CMS 綜合模擬",
    subtitle: "模擬 CMS 的跨類別提問",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "模擬考說明",
    highlights: [
      { id: 1, icon: "⏱️", title: "節奏", content: "選擇題每題約 30 秒，簡答題每題約 3–5 分鐘，模擬口試的速度" },
      { id: 2, icon: "✅", title: "自我評分", content: "簡答題交卷後誠實勾選真正寫到的要點；涵蓋六成以上算通過" },
      { id: 3, icon: "🔁", title: "檢討", content: "沒涵蓋的要點回到對應階段複習；也可以搭配 Diploma 通論的應考訓練一起練習" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">CMS 的難處在廣度：每一類都要能用三句話說清楚。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 CMS 綜合模擬",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "開氣泡酒時瓶身應傾斜約幾度？",
            options: ["A. 90 度","B. 0 度（直立）","C. 180 度","D. 45 度"],
            correct: 3,
            explanation: "瓶口不朝向任何人。"
          },
          {
            type: 'single',
            question: "食物的甜會讓葡萄酒顯得？",
            options: ["A. 更酸、更苦澀","B. 更甜","C. 更柔和","D. 沒有影響"],
            correct: 0,
            explanation: "酒至少要和食物一樣甜。"
          },
          {
            type: 'single',
            question: "Rhum agricole 的原料是？",
            options: ["A. 米","B. 新鮮甘蔗汁","C. 糖蜜","D. 龍舌蘭"],
            correct: 1,
            explanation: "Martinique 自 1996 年有 AOC。"
          },
          {
            type: 'single',
            question: "本釀造的精米步合門檻是？",
            options: ["A. 60% 以下","B. 沒有門檻","C. 70% 以下","D. 50% 以下"],
            correct: 2,
            explanation: "吟釀 60%、大吟釀 50%。"
          },
          {
            type: 'short',
            question: "簡答：一位客人說他的酒「有濕紙板味」。說明你的判斷與處理步驟。",
            points: [
              "判斷：可能是 TCA 軟木塞污染",
              "自己確認酒況（聞香）",
              "不與客人爭論，道歉並更換同款新瓶",
              "若無同款，提供相近價位與風格的替代",
              "記錄並回報，退回供應商"
            ],
            model: "濕紙板味最可能是 TCA 造成的軟木塞污染。先自己聞香確認，但不與客人爭論；道歉後更換同款新瓶，若沒有同款，提供價位與風格相近的替代。最後記錄並回報主管，把有缺陷的酒退回供應商。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "簡答：比較 Tequila 與 Mezcal 的原料、產地與風格。",
            points: [
              "Tequila：只用 Blue Weber agave",
              "Tequila：產於 Jalisco 及另外四州的部分地區",
              "Mezcal：可用多種龍舌蘭，Espadín 最常見，Oaxaca 為主",
              "Mezcal：地坑烘烤 → 煙燻味",
              "Tequila 有 Blanco、Reposado、Añejo、Extra Añejo 等熟成等級"
            ],
            model: "Tequila 只能用藍色龍舌蘭，產於 Jalisco 及另外四州的部分地區，風格較乾淨，依熟成分為 Blanco、Reposado、Añejo 與 Extra Añejo。Mezcal 可用多種龍舌蘭（Espadín 最常見），以 Oaxaca 為主，傳統上在地坑中以木柴與石頭烘烤龍舌蘭心，帶來明顯的煙燻味。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
