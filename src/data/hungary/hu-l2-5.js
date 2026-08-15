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
      <p class="lead-text">盲品匈牙利葡萄酒是一項需要「建立新資料庫」的挑戰——大部分的品飲線索框架都是針對法國、義大利葡萄酒設計的。要識別 Furmint 和 Kékfrankos，你需要一套專屬的系統。專業盲品分為兩套並行的方法：WSET 的「系統性品飲法（SAT）」著重客觀描述與品質判斷；侍酒師大師公會（CMS）的「演繹式品飲法」則著重從觀察一路推理到品種、產區與年份。本課將兩者結合，建立匈牙利葡萄酒專屬的推理路徑。</p>
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
      { id: 3, icon: '🍋', title: '香氣第二層（旋杯後）', content: '更多柑橘類（萊姆皮、葡萄柚）、白桃、薑、微微蜂蠟；若有橡木熟成則出現香草和烘烤堅果，但需與 Chardonnay 的奶油、榛果調性區分' },
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
        <div class="expert-note">
          <h4>🧭 三個關鍵分辨點</h4>
          <ul>
            <li><strong>Furmint vs. Riesling：</strong>Riesling 常帶「汽油味」（TDN，陳年後出現）與板岩礦石的冷冽感；Furmint 的礦石感更接近煙燻凝灰岩，帶橙皮與蜂蠟而非汽油</li>
            <li><strong>Furmint vs. Chardonnay：</strong>Chardonnay 若經 MLF（乳酸發酵）會有奶油、榛果的圓潤感；Furmint 極少做 MLF，酸度更尖銳、線條更緊繃</li>
            <li><strong>Furmint vs. Sauvignon Blanc：</strong>Sauvignon Blanc 有青草、番茄葉、燧石感；Furmint 沒有草本調性，白花與柑橘皮更主導</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Kékfrankos 紅酒與 Bikavér 的盲品策略',
    highlights: [
      { id: 1, icon: '🎨', title: '顏色線索', content: '中等偏深的紫紅色（比 Pinot Noir 深，比 Syrah 淺）；邊緣可能帶石榴紅；年輕時色澤鮮豔，老年後轉為磚紅邊緣' },
      { id: 2, icon: '🌶️', title: '最重要香氣線索：黑胡椒', content: 'Kékfrankos 最典型特徵是強烈的黑胡椒香（來自 rotundone 化合物，比 Syrah 更尖銳），結合黑醋栗和礦石感；常有微微青草和紫羅蘭' },
      { id: 3, icon: '⚡', title: '口感結構', content: '高酸度（接近 Pinot Noir 或 Sangiovese 水準）；中等單寧（比 Cabernet Sauvignon 少，但比 Pinot Noir 多）；中等酒體；回韻中等偏長' },
      { id: 4, icon: '🏷️', title: '產區線索', content: '若黑胡椒極強 + 礦石感 = 埃格爾；若黑胡椒 + 成熟黑果 + 橡木感 = 索普朗（Sopron，靠近奧地利）；輕盈版可能來自北匈牙利' }
    ],
    content: `<div class="kekfrankos-profile">
      <div class="comparison-grid">
        <h4>🆚 Kékfrankos vs. 其他中歐紅酒品種對比</h4>
        <table class="compare-table">
          <thead><tr><th>特徵</th><th>Kékfrankos</th><th>Zweigelt</th><th>Pinot Noir</th><th>Syrah（冷涼型）</th></tr></thead>
          <tbody>
            <tr><td>酸度</td><td>高 ⭐⭐⭐⭐</td><td>中高 ⭐⭐⭐</td><td>高 ⭐⭐⭐⭐</td><td>中 ⭐⭐⭐</td></tr>
            <tr><td>單寧</td><td>中 ⭐⭐⭐</td><td>低中 ⭐⭐</td><td>低 ⭐⭐</td><td>中高 ⭐⭐⭐⭐</td></tr>
            <tr><td>黑胡椒感</td><td>極強 ⭐⭐⭐⭐⭐</td><td>弱 ⭐</td><td>無</td><td>強 ⭐⭐⭐⭐</td></tr>
            <tr><td>色澤深度</td><td>中深</td><td>淺中</td><td>淺</td><td>深</td></tr>
            <tr><td>主要果香</td><td>黑櫻桃、黑醋栗</td><td>紅櫻桃、覆盆莓</td><td>紅櫻桃、草莓</td><td>黑莓、藍莓</td></tr>
          </tbody>
        </table>
        <div class="expert-note">
          <h4>🧭 進階提醒：Kékfrankos 與 Blaufränkisch 其實是同一品種</h4>
          <p>Kékfrankos（匈牙利）與 Blaufränkisch（奧地利，尤其 Mittelburgenland、Leithaberg）在遺傳上是完全相同的品種，因此純粹從感官上很難用「品種特徵」區分兩國酒款。真正有效的線索反而是<strong>風格慣例</strong>：奧地利版本常見更精緻的法國新桶運用與更透明的果味；匈牙利版本（尤其埃格爾）常有更粗獷、更強勁的黑胡椒與礦石感，且較少使用高比例新桶。遇到這種「品種相同、產區不同」的情境，應把重點從「這是什麼品種」轉移到「這是哪一種風格傳統」。</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '盲品一杯具有極高酸度、煙燻礦石感和白花香氣的中等酒體白酒，最可能是哪個品種？',
      options: ['Chardonnay（布根地）', 'Furmint（托卡伊）', 'Riesling（摩澤爾）', 'Sauvignon Blanc（盧瓦爾）'],
      correct: 1,
      explanation: 'Furmint 的辨識組合：(1) 極高酸度（比 Riesling 更有衝擊感）；(2) 火山礦石感（而非 Riesling 的板岩礦石或 Sauvignon Blanc 的燧石感）；(3) 白花而非草本；(4) 微微蜂蠟感。Chardonnay 酸度較低，Riesling 有汽油香但礦石感類型不同。'
    }
  },

  {
    title: '演繹式品飲邏輯樹：從線索到結論',
    highlights: [
      { id: 1, icon: '🔬', title: '演繹式 vs. 系統性品飲', content: 'WSET SAT 著重「客觀描述＋品質判斷」；CMS 演繹式品飲著重「從觀察逐步推理到品種／產區／年份」，兩者順序相同（外觀→香氣→口感→結論）但目的不同' },
      { id: 2, icon: '🍄', title: '貴腐線索判讀', content: '蜂蜜＋番紅花＋橙皮醬＋核桃油 = 貴腐菌（Botrytis Cinerea）活躍；若只有單純果乾香而無番紅花與蜂蠟感，可能是風乾甜酒而非貴腐甜酒' },
      { id: 3, icon: '🛢️', title: '橡木線索判讀', content: '香草＋椰子＋甜煙燻 = 美國新桶；烘烤堅果＋雪松＋較不甜的香料 = 法國舊桶；完全無橡木調性 = 不鏽鋼或大型舊木桶，常見於基本款 Furmint 與 Olaszrizling' },
      { id: 4, icon: '🧂', title: '單寧與酸度的組合判讀', content: '高酸＋中單寧＋黑胡椒 = Kékfrankos；高酸＋低單寧＋玫瑰水香 = Kadarka；高酸＋高單寧＋多層次黑果 = Cabernet Franc（維拉尼）或 Bikavér Superior 混釀' }
    ],
    content: `<div class="deductive-framework">
      <p class="lead-text">演繹式品飲不是憑直覺猜測，而是把每一個感官線索當成邏輯推理的「證據」，逐步縮小可能範圍，最終指向具體的品種與產區。以下是匈牙利葡萄酒專屬的推理路徑：</p>
      <div class="logic-tree">
        <h4>🌳 匈牙利葡萄酒推理路徑</h4>
        <div class="logic-branch">
          <div class="logic-condition">若香氣出現<strong>蜂蜜＋番紅花＋橙皮醬</strong> + 口感<strong>高酸＋高殘糖</strong></div>
          <div class="logic-arrow">→</div>
          <div class="logic-result">Tokaji Aszú（幾乎確定）。若同時有明顯核桃油與較低酸度，需考慮是否為老年份或較低等級果漿</div>
        </div>
        <div class="logic-branch">
          <div class="logic-condition">若外觀<strong>淺中金黃</strong> + 香氣<strong>白花＋青蘋果＋煙燻礦石</strong> + 口感<strong>極高酸、無甜感</strong></div>
          <div class="logic-arrow">→</div>
          <div class="logic-result">干型 Furmint（托卡伊或索姆羅）。若礦石感更偏白堊土而非火山岩，需考慮是否為法國夏布利等對照組</div>
        </div>
        <div class="logic-branch">
          <div class="logic-condition">若外觀<strong>中深紫紅</strong> + 香氣<strong>黑胡椒為主導</strong> + 口感<strong>高酸、中單寧</strong></div>
          <div class="logic-arrow">→</div>
          <div class="logic-result">Kékfrankos。若香氣有明顯多層次（黑莓＋香料＋雪松）且結構更複雜，考慮是否為 Bikavér（多品種混釀）而非單一品種裝瓶</div>
        </div>
        <div class="logic-branch">
          <div class="logic-condition">若香氣<strong>玫瑰水＋乾草莓＋薑</strong> + 口感<strong>低單寧、中酸</strong></div>
          <div class="logic-arrow">→</div>
          <div class="logic-result">Kadarka（極可能來自 Szekszárd 或作為 Bikavér 混釀中的香氣貢獻者）</div>
        </div>
        <div class="logic-branch">
          <div class="logic-condition">若香氣<strong>黑醋栗＋紫羅蘭＋鉛筆芯</strong> + 口感<strong>高單寧、高酸、酒體飽滿</strong></div>
          <div class="logic-arrow">→</div>
          <div class="logic-result">Cabernet Franc（維拉尼），需與羅亞爾河或波爾多右岸的同品種對照排除</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Aszú 與貴腐甜酒的辨識陷阱',
    highlights: [
      { id: 1, icon: '🍯', title: 'Tokaji Aszú 的獨特香氣印記', content: '蜂蜜＋番紅花＋橙皮醬＋核桃油＋淡淡的煙燻礦石，且因 Furmint 高酸支撐，甜度不顯膩口——這種「酸甜張力」是最強的辨識線索' },
      { id: 2, icon: '🇫🇷', title: '與索甸（Sauternes）的差異', content: '索甸以 Sémillon 為主，質地更油滑厚重，香氣偏杏桃、蜂蠟、烤堅果，酸度較 Aszú 更低；Aszú 的酸度衝擊感明顯更強，甜而不膩' },
      { id: 3, icon: '🇩🇪', title: '與德國 TBA 的差異', content: '德國 Trockenbeerenauslese 常用 Riesling，帶有更明顯的汽油與礦物冷冽感；Aszú 則是溫暖的蜂蜜、香料調性，冷涼感較弱' },
      { id: 4, icon: '🇮🇹', title: '與義大利 Passito 的差異', content: '義大利風乾甜酒（如 Vin Santo、Recioto）多半沒有貴腐菌參與，果乾味更直接（無花果、葡萄乾），缺乏 Aszú 特有的番紅花與核桃油層次' }
    ],
    content: `<div class="aszu-diagnostics">
      <div class="pitfall-grid">
        <h4>⚠️ 常見誤判陷阱</h4>
        <div class="pitfall-item">
          <strong>陷阱一：以甜度判斷等級</strong>
          <p>Aszú 的高酸度會讓舌頭低估實際殘糖量，容易誤判為較低等級；應同時評估質地的濃稠度與香氣濃縮度來判斷真實甜度</p>
        </div>
        <div class="pitfall-item">
          <strong>陷阱二：忽略核桃油調性</strong>
          <p>核桃油＋淡煙燻是 Aszú 陳年後的重要指標，若只憑蜂蜜與杏桃很容易與索甸混淆；核桃油調性在索甸中較少見</p>
        </div>
        <div class="pitfall-item">
          <strong>陷阱三：混淆貴腐與風乾</strong>
          <p>貴腐甜酒有番紅花與蜂蠟的複雜層次；風乾甜酒（如 Passito）香氣更線性、直接偏果乾味，缺乏貴腐菌代謝產生的香料感</p>
        </div>
      </div>
      <div class="vocab-box">
        <h4>📝 專業品飲詞彙庫（進階）</h4>
        <p>質地（texture）：黏稠度（viscosity）、油滑感（unctuousness）、收斂感（astringency）；香氣化合物：rotundone（黑胡椒）、TDN（汽油味）、酯類（esters，果香來源）、貴腐菌代謝物（甘油與葡萄糖苷賦予的蜂蜜／番紅花感）；結構詞彙：張力（tension）、骨架（backbone）、線條（line）、餘韻長度（persistence）</p>
      </div>
    </div>`,
    quiz: {
      question: '盲品一款甜酒，發現蜂蜜、番紅花、橙皮醬與核桃油的組合，同時酸度明顯高於預期的甜膩感，這款酒最可能是？',
      options: ['法國索甸（Sauternes）', '匈牙利 Tokaji Aszú', '德國 Trockenbeerenauslese', '義大利 Vin Santo'],
      correct: 1,
      explanation: '番紅花與核桃油是 Tokaji Aszú 極具辨識度的香氣印記，索甸較少出現番紅花調性且質地更油滑；德國 TBA 常帶汽油與礦物冷冽感；Vin Santo 屬風乾甜酒，通常沒有貴腐菌參與，缺乏這種複雜的香料層次。同時 Aszú 的高酸度會讓甜度感覺被「切割」而不顯膩口，這也是重要判讀線索。'
    }
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 進階品飲知識檢測',
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: '在演繹式品飲中，Kékfrankos 最關鍵的香氣辨識線索是什麼化合物帶來的？',
            options: ['A. TDN，帶來汽油味', 'B. Rotundone，帶來黑胡椒感', 'C. 乙酸乙酯，帶來指甲油味', 'D. 雙乙醯，帶來奶油味'],
            correct: 1,
            explanation: 'Rotundone 是賦予 Kékfrankos（以及 Syrah、Grüner Veltliner 等品種）強烈黑胡椒香氣的關鍵化合物，是盲品時最重要的辨識線索之一。TDN 是 Riesling 陳年後汽油味的來源，與 Kékfrankos 無關。'
          },
          {
            type: 'single',
            question: '為什麼「品種相同、產區不同」的 Kékfrankos 與奧地利 Blaufränkisch 純粹靠品種感官特徵很難區分？',
            options: ['A. 因為兩者其實是完全不同的品種', 'B. 因為兩者遺傳上是同一品種，差異主要來自風格傳統而非品種本身', 'C. 因為奧地利禁止種植這個品種', 'D. 因為匈牙利版本一定經過橡木桶陳年'],
            correct: 1,
            explanation: 'Kékfrankos 與 Blaufränkisch 是同一品種在匈牙利與奧地利的不同稱呼，兩地風格差異主要來自釀造與橡木桶使用習慣，而非品種本身的感官差異，因此盲品時應把判斷重心轉向「風格傳統」而非單純品種鑑定。'
          },
          {
            type: 'single',
            question: 'Furmint 與經過 MLF（乳酸發酵）的 Chardonnay 相比，最主要的口感差異是什麼？',
            options: ['A. Furmint 的酸度更尖銳緊繃，較少出現 MLF 帶來的奶油圓潤感', 'B. Furmint 的酒精濃度一定遠低於 Chardonnay', 'C. Furmint 一定比 Chardonnay 甜', 'D. Chardonnay 的礦石感一定比 Furmint 強烈'],
            correct: 0,
            explanation: 'Furmint 極少進行 MLF，因此保留了尖銳緊繃的天然高酸；經 MLF 的 Chardonnay 則會產生雙乙醯帶來的奶油、榛果圓潤感，兩者口感結構明顯不同，是盲品時的重要區分點。'
          },
          {
            type: 'single',
            question: '關於 WSET 系統性品飲法（SAT）與 CMS 演繹式品飲法的關係，下列敘述何者正確？',
            options: ['A. 兩者完全互斥，不能同時使用', 'B. 兩者共用外觀→香氣→口感→結論的順序，但 SAT 重描述與品質判斷，演繹式重推理到品種／產區', 'C. 演繹式品飲法只適用於白酒', 'D. SAT 不包含香氣分析步驟'],
            correct: 1,
            explanation: 'SAT 與演繹式品飲法在架構上高度互補：兩者都遵循外觀、香氣、口感、結論的順序，差別在於 SAT 著重客觀描述與品質評估，而演繹式品飲法更進一步用觀察到的線索推理出具體的品種、產區甚至年份。'
          }
        ]
      }
    }
  }
]
