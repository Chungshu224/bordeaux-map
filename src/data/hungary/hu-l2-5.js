/**
 * HU L2-5 進階品飲技術：盲品匈牙利葡萄酒的思維框架
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '進階品飲技術',
    subtitle: '盲品匈牙利葡萄酒的系統化思維框架',
    icon: '🔍',
    background: 'linear-gradient(135deg, #1a3a5c 0%, #0d1f2d 100%)'
  },

  {
    title: '為何匈牙利葡萄酒難以盲品？',
    highlights: [
      { id: 1, icon: '🗺️', title: '原生品種的陌生感', content: 'Furmint、Kékfrankos、Hárslevelű、Kadarka——這些品種在盲品考試中極少出現，品飲師缺乏肌肉記憶，需建立專屬的感官資料庫' },
      { id: 2, icon: '🌋', title: '獨特的火山礦石感', content: '托卡伊流紋岩、埃格爾凝灰岩、馬特拉安山岩——不同火山土壤在酒中留下的礦石感各有不同，需實際品飲才能建立區分能力' },
      { id: 3, icon: '🍯', title: 'Aszú 的特殊香氣', content: '貴腐甜酒的「蜂蜜＋番紅花＋橙皮醬＋核桃油」香氣組合，全球罕見，但與索甸（Sauternes）、德國 TBA 有明顯差異需要分辨' },
      { id: 4, icon: '⚖️', title: '甜度誤導陷阱', content: '高酸度讓 Aszú 感覺比實際殘糖量更不甜；反之 Furmint 干白的高酸可能誤判為涼爽氣候白酒（如 Riesling）' }
    ],
    content: `<div class="blind-tasting-intro">
      <p class="lead-text">盲品匈牙利葡萄酒是一項需要「建立新資料庫」的挑戰——大部分的品飲線索框架都是針對法國、義大利葡萄酒設計的。要識別 Furmint 和 Kékfrankos，你需要一套專屬的系統。</p>
      <div class="key-clues">
        <h4>🔑 三個快速辨識線索</h4>
        <div class="clue-grid">
          <div class="clue-item">
            <strong>極高酸度</strong>
            <p>→ 可能是 Furmint（干白）或 Kékfrankos（紅）</p>
          </div>
          <div class="clue-item">
            <strong>番紅花 + 橙皮</strong>
            <p>→ 幾乎確定是 Tokaji Aszú</p>
          </div>
          <div class="clue-item">
            <strong>黑胡椒 + 礦石 + 黑醋栗</strong>
            <p>→ 可能是 Kékfrankos（埃格爾）</p>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Furmint 干白：系統化品飲步驟',
    highlights: [
      { id: 1, icon: '🎨', title: '外觀', content: '中等偏深的金黃色（比 Chardonnay 深，比 Gewürztraminer 淺）；優質老酒可呈深琥珀；清澈度高' },
      { id: 2, icon: '🌸', title: '香氣第一層（一次聞）', content: '白花（茉莉、洋槐）、青蘋果、橙皮；可能有煙燻礦石感——這是火山土壤特徵，也是 Furmint 最重要的辨識線索' },
      { id: 3, icon: '🍋', title: '香氣第二層（旋杯後）', content: '更多柑橘類（萊姆皮、葡萄柚）、白桃、薑、微微蜂蠟；若有橡木熟成則出現香草和烘烤堅果' },
      { id: 4, icon: '⚡', title: '口感重點', content: '超高酸度是最大特徵（pH 常低於 3.2）；酒精中高（13–14.5%）；中高的酒體；長達 40–60 秒的回韻；常有明顯的礦石感在舌尖殘留' }
    ],
    content: `<div class="furmint-profile">
      <div class="comparison-grid">
        <h4>🆚 Furmint vs. 其他白酒品種對比</h4>
        <table class="compare-table">
          <thead><tr><th>特徵</th><th>Furmint</th><th>Riesling</th><th>Chardonnay</th></tr></thead>
          <tbody>
            <tr><td>酸度</td><td>極高 ⭐⭐⭐⭐⭐</td><td>高 ⭐⭐⭐⭐</td><td>中 ⭐⭐⭐</td></tr>
            <tr><td>礦石感</td><td>火山岩感 ⭐⭐⭐⭐</td><td>板岩感 ⭐⭐⭐⭐⭐</td><td>低 ⭐</td></tr>
            <tr><td>花香</td><td>白花為主 ⭐⭐⭐</td><td>汽油 + 花 ⭐⭐⭐</td><td>熱帶果 ⭐⭐⭐⭐</td></tr>
            <tr><td>橡木影響</td><td>常無桶或微桶</td><td>通常無桶</td><td>常大量新桶</td></tr>
            <tr><td>陳年潛力</td><td>高（10–20 年）</td><td>極高（20–50 年）</td><td>中（5–15 年）</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: 'Kékfrankos 紅酒與 Bikavér 的盲品策略',
    highlights: [
      { id: 1, icon: '🎨', title: '顏色線索', content: '中等偏深的紫紅色（比 Pinot Noir 深，比 Syrah 淺）；邊緣可能帶石榴紅；年輕時色澤鮮豔，老年後轉為磚紅邊緣' },
      { id: 2, icon: '🌶️', title: '最重要香氣線索：黑胡椒', content: 'Kékfrankos 最典型特徵是强烈的黑胡椒香（比 Syrah 更尖銳），結合黑醋栗和礦石感；常有微微青草和紫羅蘭' },
      { id: 3, icon: '⚡', title: '口感結構', content: '高酸度（接近 Pinot Noir 或 Sangiovese 水準）；中等單寧（比 Cabernet Sauvignon 少）；中等酒體；回韻中等偏長' },
      { id: 4, icon: '🏷️', title: '產區線索', content: '若黑胡椒極強 + 礦石感 = 埃格爾；若黑胡椒 + 成熟黑果 + 橡木感 = 索普朗（Sopron，靠近奧地利）；輕盈版可能來自北匈牙利' }
    ],
    quiz: {
      question: '盲品一杯具有極高酸度、煙燻礦石感和白花香氣的中等酒體白酒，最可能是哪個品種？',
      options: ['Chardonnay（布根地）', 'Furmint（托卡伊）', 'Riesling（摩澤爾）', 'Sauvignon Blanc（盧瓦爾）'],
      answer: 1,
      explanation: 'Furmint 的辨識組合：(1) 極高酸度（比 Riesling 更有衝擊感）；(2) 火山礦石感（而非 Riesling 的板岩礦石或 Sauvignon Blanc 的燧石感）；(3) 白花而非草本；(4) 微微蜂蠟感。Chardonnay 酸度較低，Riesling 有汽油香但礦石感類型不同。'
    }
  }
]
