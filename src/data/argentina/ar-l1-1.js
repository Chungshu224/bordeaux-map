/**
 * AR-L1-1 認識阿根廷葡萄酒
 * 事實來源：Wikipedia（Argentine wine）、Wine With Seth（Argentina、Argentina altitude spectrum、Torrontés）、Wines of Argentina（How to read a Malbec label；Malbec 種植面積，經 Forbes Argentina 2024-05-15 引用）、Argentina.gob.ar（Vinos con denominación de origen）、Decanter（Argentina wine law focuses on terroir）、La Capital MdP（Bonarda，INV 2022）、Jancis Robinson。數字一律標註年份；來源有出入者（首批葡萄的地點、Catena Adrianna 園的年份、標示比例）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識阿根廷葡萄酒",
    subtitle: "殖民傳入、Malbec 的故事與 1990 年代後的現代化",
    icon: "🇦🇷",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "從殖民時期到鐵路",
    highlights: [
      { id: 1, icon: "⛪", title: "最早的葡萄", content: "神父 Juan Cedrón 被認為於 1556 年種下首批葡萄；各來源對地點說法不一（Santiago del Estero 或 San Juan／Mendoza 一帶）。Mendoza 的種植在 1560 年代初擴大" },
      { id: 2, icon: "🇫🇷", title: "Pouget 與 Malbec", content: "法國農學家 Michel Aimé Pouget 應總督（後來的總統）Domingo Faustino Sarmiento 之邀引入法國插條，包括阿根廷第一批 Malbec；Wine With Seth 記為 1853 年，其他來源未標年份" },
      { id: 3, icon: "🚂", title: "1885 年的鐵路", content: "1885 年 Mendoza 與 Buenos Aires 之間的鐵路完工，讓 Mendoza 的酒得以運往主要消費市場" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">阿根廷的葡萄酒史由殖民時期的教會葡萄園開始，到 19 世紀法國品種與鐵路帶來產業化。</p></div>"
  },
  {
    title: "國內市場到世界舞台",
    highlights: [
      { id: 1, icon: "📉", title: "量大於質的年代", content: "產量在 1977 年達到高峰，當時的重點是數量而非品質；Mendoza 的種植面積在 1980 至 2003 年間從約 254,891 公頃降至約 146,080 公頃" },
      { id: 2, icon: "✈️", title: "1990 年代的轉型", content: "出口開始成長，「飛行釀酒師」帶來產量控制、控溫發酵與新橡木桶；2002 年披索貶值再推動產業與酒莊觀光" },
      { id: 3, icon: "⛰️", title: "Catena 與高海拔 Malbec", content: "Nicolás Catena 在 Tupungato 的 Gualtallary 種下約 1,450–1,500 公尺的 Adrianna 葡萄園（來源記為 1992 或 1994 年），確立了高海拔 Malbec 的方向" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">1990 年代是轉捩點：從大量生產轉向品質與出口，並把目光投向更高的海拔。</p></div>"
  },
  {
    title: "今天的阿根廷",
    highlights: [
      { id: 1, icon: "📊", title: "規模", content: "葡萄園約 22 萬公頃（Wine With Seth，未標年份）；紅酒約占產量的六成" },
      { id: 2, icon: "🌎", title: "主要產省", content: "Mendoza 占全國產量一半以上（各來源寫法為「超過六成」或「三分之二以上」）；其次是 San Juan" },
      { id: 3, icon: "🥃", title: "國飲", content: "葡萄酒於 2010 年被宣布為阿根廷的國民酒（Wikipedia 引用的法律標為 2013 年）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">今天的阿根廷以 Mendoza 為中心，紅酒為主，Malbec 是代表。</p></div>"
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
            question: "誰引入了阿根廷第一批 Malbec 插條？",
            options: ["A. Michel Aimé Pouget","B. Nicolás Catena","C. Juan Cedrón","D. Domingo Sarmiento"],
            correct: 0,
            explanation: "Pouget 應 Sarmiento 之邀引入；Sarmiento 是邀請者而非引入者。"
          },
          {
            type: 'single',
            question: "Mendoza 與 Buenos Aires 之間的鐵路於哪一年完工？",
            options: ["A. 1856","B. 1885","C. 1932","D. 1977"],
            correct: 1,
            explanation: "1885 年。"
          },
          {
            type: 'single',
            question: "1990 年代「飛行釀酒師」帶來的做法不包括？",
            options: ["A. 產量控制","B. 控溫發酵","C. 新橡木桶","D. 禁止灌溉"],
            correct: 3,
            explanation: "阿根廷的葡萄園仰賴灌溉，並未禁止。"
          },
          {
            type: 'single',
            question: "Catena 的 Adrianna 葡萄園位於哪個產區？",
            options: ["A. Gualtallary（Tupungato）","B. Cafayate","C. Luján de Cuyo 的 Agrelo","D. Río Negro"],
            correct: 0,
            explanation: "Tupungato 的 Gualtallary，海拔約 1,450–1,500 公尺。"
          }
        ]
      }
    }
  }
]
