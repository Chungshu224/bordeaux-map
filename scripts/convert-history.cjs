const fs = require('fs');

// ── California ca-l1-1.js ──
const caPath = 'src/data/california/ca-l1-1.js';
let ca = fs.readFileSync(caPath, 'utf8');

// Locate the slide by finding ca-history and slicing to next slide
const caSlideStart = ca.indexOf('  {\r\n    title: \'加州葡萄酒的歷史\'');
const caSlideEnd   = ca.indexOf('  {\r\n    title: \'巴黎評判：1976年的革命\'');

if (caSlideStart === -1 || caSlideEnd === -1) {
  console.log('❌ California: slide markers not found', caSlideStart, caSlideEnd);
} else {
  const newSlide = [
    '  {',
    '    title: \'加州葡萄酒的歷史\',',
    '    content: `<div class="history-section">',
    '      <p class="history-intro">從西班牙傳教士引入葡萄，到 1976 年巴黎評判震驚世界 ——<span class="intro-highlight">250 年釀酒史重新定義了「新世界葡萄酒」的意義</span></p>',
    '    </div>',
    '    <div class="timeline-container">',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge ancient">1769</div>',
    '        <div class="timeline-content"><strong>🙏 傳教士的葡萄園</strong><p>西班牙方濟各會傳教士 Junípero Serra 神父在聖地牙哥附近種植加州第一批葡萄（Mission 品種），用於宗教彌撒用酒。</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge medieval">1830s</div>',
    '        <div class="timeline-content"><strong>商業釀酒的誕生</strong><p>洛杉磯地區的 Jean-Louis Vignes 開始系統性商業釀酒，從法國引進更優質的葡萄品種。</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge doc">1839</div>',
    '        <div class="timeline-content"><strong>🍇 納帕谷首批葡萄</strong><p>George Yount 在 Napa Valley 種植第一批葡萄，開啟了今日全球最知名葡萄酒產區的歷史篇章。</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge renaissance">1880s</div>',
    '        <div class="timeline-content"><strong>黃金年代與根瘤蚜蟲危機</strong><p>Livermore Valley 的 Wente 和 Concannon 家族開創葡萄酒傳統；同期根瘤蚜蟲病席捲歐美，摧毀大量葡萄園。</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge austria">1919–1933</div>',
    '        <div class="timeline-content"><strong>禁酒令時代（Prohibition）</strong><p>美國禁酒令幾乎摧毀了加州葡萄酒工業。少數酒莊以「教堂用酒」或「家用釀酒」為由倖存，Robert Mondavi 的 Beaulieu Vineyard 即是其中之一。</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge sparkling">1976</div>',
    '        <div class="timeline-content"><strong>🏆 巴黎評判（Judgment of Paris）</strong><p>英國酒商 Steven Spurrier 在巴黎舉辦的盲品大賽中，納帕谷 Stag\'s Leap 的 Cabernet Sauvignon 和 Chateau Montelena 的 Chardonnay 分別擊敗波爾多和勃根地頂級名莊，震驚全球。</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge doc">1981</div>',
    '        <div class="timeline-content"><strong>第一個 AVA 認定</strong><p>Napa Valley 於 1981 年成為美國第二個（加州第一個）正式認定的 AVA，建立了加州葡萄酒的法定產區制度基礎。</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge modern">2000s 至今</div>',
    '        <div class="timeline-content"><strong>永續農業革命</strong><p>加州引領全美可持續葡萄栽培運動。Sonoma County 99% 的葡萄種植面積已取得可持續農業認證，成為全球葡萄酒界的環保典範。</p></div>',
    '      </div>',
    '    </div>',
    '    <div class="stat-grid">',
    '      <div class="stat-box"><div class="stat-number">1769</div><div class="stat-label">首批葡萄種植</div></div>',
    '      <div class="stat-box"><div class="stat-number">1976</div><div class="stat-label">巴黎評判震驚世界</div></div>',
    '      <div class="stat-box"><div class="stat-number">100+</div><div class="stat-label">加州 AVA 法定產區</div></div>',
    '      <div class="stat-box"><div class="stat-number">99%</div><div class="stat-label">Sonoma 永續認證</div></div>',
    '    </div>`',
    '  },',
    '',
    '',
  ].join('\r\n');

  ca = ca.slice(0, caSlideStart) + newSlide + ca.slice(caSlideEnd);
  fs.writeFileSync(caPath, ca, 'utf8');
  console.log('✅ California updated');
}

// ── Hungary hu-l1-1.js ──
const huPath = 'src/data/hungary/hu-l1-1.js';
let hu = fs.readFileSync(huPath, 'utf8');

// Find the content field for the history slide and replace it
const huContentStart = hu.indexOf('    content: `<div class="history-content">');
const huContentEnd   = hu.indexOf('    </div>`', huContentStart);

if (huContentStart === -1 || huContentEnd === -1) {
  console.log('❌ Hungary: content markers not found', huContentStart, huContentEnd);
} else {
  // The closing is '    </div>`' — find the first char after the backtick
  const huAfterEnd = huContentEnd + '    </div>`'.length;

  const newContent = [
    '    content: `<div class="history-section">',
    '      <p class="history-intro">匈牙利葡萄酒最輝煌的時代是 17 至 18 世紀。路易十四品飲 Tokaji Aszú 後宣稱這是「王者之酒，葡萄酒之王」——<span class="intro-highlight">2000 年釀酒史，全球最早建立葡萄園分級制度的國家之一</span></p>',
    '    </div>',
    '    <div class="timeline-container">',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge ancient">1630s</div>',
    '        <div class="timeline-content"><strong>🍯 史上最早貴腐甜酒</strong><p>史上最早記錄的貴腐甜酒釀造，比德國和法國早了數十年</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge medieval">1700s</div>',
    '        <div class="timeline-content"><strong>👑 葡萄園分級制度</strong><p>匈牙利首次建立葡萄園分級制度（1737 年），比波爾多 1855 年分級早 118 年</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge austria">1948</div>',
    '        <div class="timeline-content"><strong>🔴 共產集體農場</strong><p>共產黨推行集體農場，個人酒莊被沒收，以量代質政策破壞品質傳統</p></div>',
    '      </div>',
    '      <div class="timeline-item">',
    '        <div class="timeline-badge modern">1990s</div>',
    '        <div class="timeline-content"><strong>🌟 現代復興</strong><p>私有化後外國資本湧入（如法國 AXA、西班牙 Vega Sicilia），現代化釀酒復興開始</p></div>',
    '      </div>',
    '    </div>',
    '    <div class="stat-grid">',
    '      <div class="stat-box"><div class="stat-number">2000 年+</div><div class="stat-label">釀酒歷史</div></div>',
    '      <div class="stat-box"><div class="stat-number">1737 年</div><div class="stat-label">全球最早葡萄園分級</div></div>',
    '      <div class="stat-box"><div class="stat-number">22</div><div class="stat-label">法定葡萄酒產區</div></div>',
    '      <div class="stat-box"><div class="stat-number">1703 年</div><div class="stat-label">路易十四御用托卡伊</div></div>',
    '    </div>`',
  ].join('\r\n');

  hu = hu.slice(0, huContentStart) + newContent + hu.slice(huAfterEnd);
  fs.writeFileSync(huPath, hu, 'utf8');
  console.log('✅ Hungary updated');
}
