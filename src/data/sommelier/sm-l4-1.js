/**
 * SM-L4-1 CMS 口試快問快答
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "CMS 口試快問快答",
    subtitle: "先給答案，再補一句理由",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "口試的答題方法",
    highlights: [
      { id: 1, icon: "🎯", title: "先答核心", content: "考官時間有限：第一句就說出答案（品種、產區、數字），再補充一兩個佐證；不要從歷史講起" },
      { id: 2, icon: "🧱", title: "答題框架", content: "產區題：位置與氣候 → 主要品種 → 法規重點 → 代表生產者或風格；烈酒題：原料 → 蒸餾 → 熟成 → 法規" },
      { id: 3, icon: "🤔", title: "不確定時", content: "說出你確定的部分並標明不確定之處，比亂猜一個精確數字更好；這也是 MW 與 Diploma 重視的誠實態度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">快、準、完整：口試是在短時間內展示知識的結構。</p></div>"
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
            type: 'short',
            question: "口試題：說出 Scotch 的五個受保護產區，並各舉一個風格特色。",
            points: [
              "Highland：範圍最大、風格多樣",
              "Lowland：常見較輕盈、細緻",
              "Speyside：酒廠最密集、常見果香與雪莉桶風格",
              "Islay：泥煤煙燻",
              "Campbeltown：酒廠少、常帶鹹味與油潤"
            ],
            model: "Highland（範圍最大、風格多樣）、Lowland（常見較輕盈細緻）、Speyside（酒廠最密集、常見果香或雪莉桶風格）、Islay（泥煤煙燻）、Campbeltown（酒廠少、常帶鹹味與油潤）。風格描述是常見傾向，各酒廠差異很大。",
            minPoints: 4
          },
          {
            type: 'short',
            question: "口試題：比較純米大吟釀與本釀造在原料、精米與風格上的差異。",
            points: [
              "純米大吟釀：只用米、麴、水，不加酒精",
              "純米大吟釀：精米步合 50% 以下",
              "本釀造：可加少量釀造酒精、精米步合 70% 以下",
              "風格：大吟釀香氣華麗、多冰飲；本釀造較輕快、可溫熱"
            ],
            model: "純米大吟釀只用米、麴與水，精米步合 50% 以下，香氣華麗、口感細緻，多冰涼飲用。本釀造精米步合 70% 以下，可加入少量釀造酒精讓香氣更清爽、口感更輕快，價格親民，也適合溫熱。加酒精不代表品質較低，而是風格選擇。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "口試題：說明 Bourbon 的主要法規，並解釋全新炭化桶對風格的影響。",
            points: [
              "穀物中玉米至少 51%",
              "全新炭化橡木容器熟成",
              "蒸餾不超過 80%、入桶不超過 62.5%、裝瓶至少 40%",
              "Straight Bourbon 至少 2 年",
              "全新炭化桶 → 濃郁香草、焦糖與甜感，熟成較快"
            ],
            model: "Bourbon 的穀物中玉米至少 51%，必須在全新炭化橡木容器中熟成，蒸餾不超過 80%、入桶不超過 62.5%、裝瓶至少 40%；Straight Bourbon 至少 2 年。全新炭化桶萃取力強，炭化層的焦糖化木糖帶來濃郁的香草、焦糖與甜感，加上 Kentucky 的氣候，熟成比 Scotland 快。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
