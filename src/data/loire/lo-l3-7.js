/**
 * LO-L3-7 都漢白酒四角
 * AOCs: Cheverny、Cour-Cheverny、Valençay、Touraine-Amboise(白)、Touraine-Azay-le-Rideau
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          都漢（Touraine）以紅酒和 Vouvray 聞名，但它的白酒版圖遠比你想像的更豐富。五個個性鮮明的白酒（和少量粉紅）AOC，從城堡旁的 Cheverny 到只允許一個幾近絕種品種的 Cour-Cheverny，再到古老的 Valençay——都漢白酒四角帶你探索這片城堡之地最被忽略的精彩面向。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌿 認識 Romorantin — 世界最稀有品種之一</h4>
            <p>Cour-Cheverny AOC 是全球唯一允許 Romorantin 品種的 AOC，這個品種幾乎只在 Cour-Cheverny 的 100 公頃土地上存活</p>
          </div>
          <div class="point-item">
            <h4>🏰 掌握 Cheverny 的多品種混調邏輯</h4>
            <p>Sauvignon Blanc + Chardonnay + Chenin 的混調如何在城堡附近的砂礫土上展現獨特個性</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 了解 Valençay 的地理位置和品種特色</h4>
            <p>接近 Berry 的 Valençay 如何連結都漢和中央產區的葡萄酒世界</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Cheverny AOC — 城堡旁的優雅混調白酒',
    highlights: [
      { id: 1, icon: '🏰', title: 'Château de Cheverny', content: 'Cheverny AOC 以著名的 Château de Cheverny（丁丁歷險記中的 Moulinsart 城堡原型）為地標，葡萄園環繞城堡分布' },
      { id: 2, icon: '🍇', title: '混調法規', content: '白酒：Sauvignon Blanc 最少 50% + Chardonnay + Chenin Blanc（少量允許）。這種混調賦予 Cheverny 比純 Sauvignon Blanc 更圓潤的質地' },
      { id: 3, icon: '🪨', title: '砂礫土壤', content: '都漢平原的砂質礫石土，排水極佳，造就清新輕盈、果香純粹的白酒，酸度中等，適合年輕 1–4 年飲用' }
    ],
    content: `
      <div class="cheverny-content">
        <p><strong>Cheverny AOC</strong>（1993 年獲認，包含紅酒、白酒和粉紅）最重要的特色是其白酒的混調邏輯：以 Sauvignon Blanc 主導，但 Chardonnay 的加入（20–40%）帶來橡木發酵的圓潤感和更豐富的酒體，讓它有別於純粹的 Sauvignon Blanc 風格（如 Sancerre）。</p>
        <p>紅酒以 Gamay 和 Pinot Noir 為主（允許少量 Cabernet Franc），風格輕盈，是週間餐酒的絕佳選擇。整體來說，Cheverny 是都漢性價比最高的精品 AOC 之一，均價 €12–20。</p>
        <p><strong>代表酒莊：</strong>Domaine du Salvard（有機農法，Cheverny 最知名精品莊）、Domaine Tesier</p>
      </div>
    `
  },
  {
    title: 'Cour-Cheverny AOC — Romorantin 的最後庇護所',
    content: `
      <div class="cour-cheverny-section">
        <p><strong>Cour-Cheverny AOC</strong> 是一個極其特殊的存在：它是全球唯一允許種植和釀造 <strong>Romorantin</strong> 品種的 AOC，這個品種幾乎已經從法國葡萄酒版圖上消失，唯在 Cour-Cheverny 的 100 公頃土地上頑強存活。</p>
        <div class="romorantin-profile">
          <h4>🌿 Romorantin 品種檔案</h4>
          <div class="profile-grid">
            <div class="profile-item">
              <h5>歷史淵源</h5>
              <p>DNA 研究顯示 Romorantin 是 Pinot 和 Gouais Blanc（一個幾乎滅絕的古老品種）的後代，與 Chardonnay 有親緣關係。名稱來自 Loir-et-Cher 省的小城 Romorantin-Lanthenay，據說法王弗朗索瓦一世於 16 世紀將它引入當地種植。</p>
            </div>
            <div class="profile-item">
              <h5>農業特性</h5>
              <p>晚熟、高酸度、易染病——正是這些「缺點」讓農民在 20 世紀大規模改種其他品種，Romorantin 幾乎只能在 Cour-Cheverny 的特殊砂礫土和微氣候下維持生產。</p>
            </div>
            <div class="profile-item">
              <h5>風格特色</h5>
              <p>極高酸度、低至中等酒體、獨特的蜂蜜 + 燧石礦物 + 金合歡花香。年輕時極為緊閉，有時甚至過於尖銳，但陳年 5–10 年後展現出驚人的複雜度和礦物深度。</p>
            </div>
          </div>
        </div>
        <p>Cour-Cheverny 是法國最難喝懂的 AOC 之一，但也是最值得耐心等待的。如果你能買到一瓶 Domaine du Salvard 或 Domaine des Huards 的 Cour-Cheverny Romorantin，放進酒窖等 8 年再開，那將是一次難忘的體驗。均價 €15–35。</p>
      </div>
    `
  },
  {
    title: 'Valençay & 都漢村莊白酒',
    content: `
      <div class="valencay-section">
        <div class="aoc-overview">
          <div class="aoc-item">
            <h4>🧀 Valençay AOC（2004 年獲認）</h4>
            <p><strong>位置：</strong>Indre 省，Valençay 城堡旁（著名起司的產地！），接近 Berry，是都漢最東南的產區</p>
            <p><strong>白酒品種：</strong>Sauvignon Blanc（主，通常 70–80%）+ Arbois（Menu Pineau，賦予更多草本辛香）</p>
            <p><strong>風格：</strong>清爽、草本、白花，比 Sancerre 更柔和，比 Touraine Sauvignon 更有個性，均價 €10–18</p>
            <p><strong>有趣之處：</strong>Valençay 起司（山羊起司）和 Valençay 白酒都是同一個 AOC 區域的產物，是法國最完美的「一地一食一酒」配對之一</p>
          </div>
          <div class="aoc-item">
            <h4>🏰 Touraine-Amboise Blanc</h4>
            <p><strong>品種：</strong>Chenin Blanc（主），是安博瓦茲城堡旁的白酒版本</p>
            <p><strong>風格：</strong>比 Vouvray 更清爽輕盈，適合年輕飲用，搭配城堡附近的料理（淡水魚、白肉）</p>
          </div>
          <div class="aoc-item">
            <h4>🌸 Touraine-Azay-le-Rideau Blanc</h4>
            <p><strong>品種：</strong>Chenin Blanc（唯一允許），在阿澤-勒-里多城堡旁的 Indre 河小谷地</p>
            <p><strong>風格：</strong>干型或微甜（Demi-Sec），清新的白花和蘋果香，是都漢最浪漫的白酒之一——適合在城堡花園午餐時享用</p>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Cour-Cheverny AOC 的最大特色是什麼？',
        options: [
          '它是都漢最大的白酒 AOC',
          '它是全球唯一允許 Romorantin 品種釀造的 AOC',
          '它必須用 100% Chenin Blanc',
          '它是都漢唯一的 Grand Cru 等級'
        ],
        correctIndex: 1,
        explanation: 'Cour-Cheverny AOC 是全球唯一允許 Romorantin 品種（100%）的法定產區，這個幾近絕種的品種只在 Cour-Cheverny 的約 100 公頃土地上存活，展現出高酸度、燧石礦物感的獨特風格。'
      },
      {
        id: 'q2',
        question: 'Cheverny AOC 白酒的混調特色為何能區別於純粹的 Sauvignon Blanc 風格？',
        options: [
          '因為加入了 Chenin Blanc 的蜂蜜甜感',
          'Chardonnay 的加入（20–40%）帶來橡木發酵的圓潤感和更豐富酒體，讓它比純 Sauvignon Blanc 更圓潤',
          '因為使用了大量新橡木桶陳年',
          '因為混入了 Cabernet Franc，增加複雜度'
        ],
        correctIndex: 1,
        explanation: 'Cheverny 白酒的獨特性在於 Sauvignon Blanc（最少 50%）+ Chardonnay 的混調——Chardonnay 帶來圓潤的酒體和橡木陳年的複雜度，讓 Cheverny 比純 Sauvignon Blanc 風格（如 Sancerre）更有層次和飽滿感。'
      }
    ]
  }
]
