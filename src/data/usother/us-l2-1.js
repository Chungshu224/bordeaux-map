/**
 * US-L2-1 Oregon I：Willamette Valley
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Oregon I：Willamette Valley",
    subtitle: "概覽與子 AVA",
    icon: "🌲",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "母 AVA 與氣候",
    highlights: [
      { id: 1, icon: "🧭", title: "範圍", content: "西有 Coast Range、東有 Cascades、北至 Columbia River、南至 Calapooya Mountains；母 AVA 於 1983 年底由 ATF 核准（部分資料寫 1984 年）" },
      { id: 2, icon: "🌧️", title: "氣候", content: "緯度約北緯 45 度；年降雨量約 40 英寸，集中在 10 月至 5 月；夏季午後多在 75 至 85°F" },
      { id: 3, icon: "💨", title: "Van Duzer Corridor", content: "Coast Range 上的缺口，讓太平洋海風在夏季午後與傍晚吹入，使山谷降溫" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Willamette Valley 是被山脈包圍的涼爽濕潤山谷，Van Duzer 缺口提供夏季的海風。</p></div>"
  },
  {
    title: "十一個子 AVA",
    highlights: [
      { id: 1, icon: "🔢", title: "2022 年共 11 個", content: "依核准順序：Dundee Hills 與 Yamhill-Carlton District（2004）、McMinnville 與 Ribbon Ridge（2005）、Chehalem Mountains 與 Eola-Amity Hills（2006 前後）、Van Duzer Corridor（2018 或 2019）、Tualatin Hills 與 Laurelwood District（2020）、Lower Long Tom（2021）、Mount Pisgah, Polk County（2022）" },
      { id: 2, icon: "⛰️", title: "海拔範圍", content: "Yamhill-Carlton、McMinnville、Tualatin Hills 的葡萄園限於海拔 200 至 1,000 英尺" },
      { id: 3, icon: "🌦️", title: "雨影", content: "Yamhill-Carlton 位於約 3,500 英尺 Coast Range 的雨影中" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">不要死背年份；先記住「2004–2006 年的原始六個」與「2018 年之後的新增」兩批。</p></div>"
  },
  {
    title: "年份變異",
    highlights: [
      { id: 1, icon: "❄️", title: "冷年", content: "2010 年被描述為 Oregon 30 年來最涼的一季；2011 年是有紀錄以來最晚最冷的一季" },
      { id: 2, icon: "🔥", title: "熱年", content: "2014 年高溫且收成大，10 月 1 日前採收完畢；2015 年被描述為 Oregon 最熱的一年" },
      { id: 3, icon: "🍷", title: "風格影響", content: "冷年偏高酸、低酒精度；熱年果味更成熟、酒精度接近 14%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Willamette 的年份差異大，是 D3 盲品與論述中討論「年份」的好例子。</p></div>"
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
            question: "在 Coast Range 上讓太平洋海風進入山谷的缺口是？",
            options: ["A. Van Duzer Corridor","B. Columbia Gorge","C. Wallowa Gap","D. Snake Gap"],
            correct: 0,
            explanation: "Van Duzer Corridor。"
          },
          {
            type: 'single',
            question: "Willamette Valley 的子 AVA 到 2022 年共有幾個？",
            options: ["A. 6","B. 9","C. 11","D. 15"],
            correct: 2,
            explanation: "11 個。"
          },
          {
            type: 'single',
            question: "Laurelwood District 與 Tualatin Hills 核准於哪一年？",
            options: ["A. 2004","B. 2010","C. 2020","D. 2022"],
            correct: 2,
            explanation: "2020 年。"
          },
          {
            type: 'single',
            question: "Yamhill-Carlton、McMinnville、Tualatin Hills 的葡萄園海拔範圍是？",
            options: ["A. 0–200 英尺","B. 200–1,000 英尺","C. 1,000–2,000 英尺","D. 不限"],
            correct: 1,
            explanation: "200 至 1,000 英尺。"
          }
        ]
      }
    }
  }
]
