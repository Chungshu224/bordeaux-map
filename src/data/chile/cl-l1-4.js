/**
 * CL-L1-4 法規與標籤
 * 事實來源：Wine With Seth（Chile、Chilean DO system）、Wikipedia（Carménère）、SAG（Catastro Vitícola Nacional 2023 Informe ejecutivo）、Wine With Seth 引用的 Decreto 464（1995）。數字一律標註年份；來源有出入者（Costa／Entre Cordilleras／Andes 的年份、葡萄根瘤蚜年份、Carmenère 面積、DO 層級名稱）課內標明、不進測驗，並須對照 SAG 法規原文。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規與標籤",
    subtitle: "DO 層級與 Costa／Entre Cordilleras／Andes",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "DO 制度的框架",
    highlights: [
      { id: 1, icon: "📜", title: "Decreto 464", content: "1995 年 5 月 26 日公布，由農牧局（SAG）管理，建立智利的原產地命名（DO）框架（Wine With Seth）" },
      { id: 2, icon: "🗺️", title: "主要 DO 河谷", content: "Copiapó、Huasco、Elqui、Limarí、Choapa、Aconcagua、Casablanca、San Antonio（含 Leyda）、Maipo、Cachapoal、Colchagua、Curicó、Maule、Itata、Bío-Bío、Malleco" },
      { id: 3, icon: "⚠️", title: "層級名稱待對照", content: "正式層級（Región → Subregión → Zona → Área）的用語課內暫不出題，須對照 SAG 法規原文" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">智利的 DO 以河谷為單位，由農牧局依政令管理。</p></div>"
  },
  {
    title: "標籤上的比例",
    highlights: [
      { id: 1, icon: "🏷️", title: "75% 規則", content: "標示產地、品種或年份，各須至少 75% 符合；最多 25% 可來自其他（Wine With Seth）" },
      { id: 2, icon: "🌐", title: "2011 年的修訂", content: "Wine With Seth 稱 2011 年修訂「refined」標示規定，但未說明是否改變比例，因此以 SAG 原文為準" },
      { id: 3, icon: "🥇", title: "品質用語", content: "Wine With Seth：Superior → Reserva（酒精 +0.5°，橡木可選）→ Reserva Especial（+0.5°，須用橡木）→ Reserva Privada（+1°，橡木可選）→ Gran Reserva（+1°，須用橡木）；是酒精與橡木規定，而非最低陳年時間" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比例與品質用語各來源不盡相同，考試前請以 SAG 法規原文為準。</p></div>"
  },
  {
    title: "Costa、Entre Cordilleras、Andes",
    highlights: [
      { id: 1, icon: "🌊", title: "Costa", content: "受太平洋影響的沿海地點" },
      { id: 2, icon: "🏞️", title: "Entre Cordilleras", content: "位於安地斯與海岸山脈之間的中央谷地（中央窪地）" },
      { id: 3, icon: "🏔️", title: "Andes", content: "安地斯山麓地帶；這三個詞要求至少 85%（容量）來自符合條件的地區（Wine With Seth）；來源對其年份有 1995 與 2011 兩種說法，故不出題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這三個詞是由西向東的橫向分區，與由北向南的河谷並行使用。</p></div>"
  },
  {
    title: "Diploma 深度：DO 制度的設計邏輯",
    highlights: [
      { id: 1, icon: "🧩", title: "75% 規則與大品牌", content: "標示產地、品種、年份只需 75% 符合，讓大型酒廠能跨河谷、跨年份調配，穩定量大價低的品牌風格。代價是標籤資訊較寬鬆，與歐盟多數 85% 的門檻相比，對消費者的保證較弱" },
      { id: 2, icon: "🗺️", title: "南北河谷的盲點", content: "DO 以由北到南的河谷劃分，但智利最大的氣候差異其實是由西向東：靠海受 Humboldt 寒流降溫，安地斯側有高度與日夜溫差，中間的谷地最熱。同一個河谷內，海邊與山邊的酒可能差異比相鄰河谷更大" },
      { id: 3, icon: "➕", title: "Costa、Entre Cordilleras、Andes 的用意", content: "這三個橫向用語是疊加在原有 DO 上的選擇性標示（須 85% 來自該區），用來補足南北制度看不到的東西向差異；它們與河谷名稱可同時出現在標籤上" },
      { id: 4, icon: "🔗", title: "論述角度：制度反映產業結構", content: "寬鬆的 75% 規則服務出口導向的大集團；橫向用語則服務追求風土表達的精品生產者。兩者並存，正好說明智利產業「量販」與「精品」兩條路線" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">讀智利酒標：先看河谷（南北），再看 Costa／Andes（東西），兩者合起來才是風土。</p></div>"
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
            question: "智利 DO 制度的管理單位是？",
            options: ["A. SAG","B. INV","C. TTB","D. INAO"],
            correct: 0,
            explanation: "農牧局 SAG。"
          },
          {
            type: 'single',
            question: "Decreto 464 是哪一年公布的？",
            options: ["A. 1851","B. 1995","C. 2011","D. 2023"],
            correct: 1,
            explanation: "1995 年 5 月 26 日。"
          },
          {
            type: 'single',
            question: "「Entre Cordilleras」指的是？",
            options: ["A. 安地斯與海岸山脈之間的中央谷地","B. 太平洋沿岸","C. 安地斯山麓","D. Atacama 沙漠"],
            correct: 0,
            explanation: "Costa 是沿海、Andes 是山麓。"
          },
          {
            type: 'single',
            question: "Reserva 以上的智利品質用語主要在規定什麼？",
            options: ["A. 酒精度與橡木使用","B. 最低陳年月數","C. 葡萄園海拔","D. 樹齡"],
            correct: 0,
            explanation: "是酒精與橡木規定，不是陳年時間（Wine With Seth）。"
          }
        ]
      }
    }
  }
]
