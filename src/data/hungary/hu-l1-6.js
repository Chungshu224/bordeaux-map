/**
 * HU L1-6 托卡伊深度探索：Aszú 制度、貴腐條件與干型革命
 * （L1 層級：聚焦「制度如何運作」；個別頂級酒莊與年份分析見 L2-1、L2-2）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '托卡伊深度探索',
    subtitle: '世界最偉大甜酒的誕生：Aszú 制度與干型革命',
    icon: '🍯',
    background: 'linear-gradient(135deg, #d4a017 0%, #8b6914 100%)'
  },
  {
    component: 'HungaryRegionMapSlide',
    title: 'Tokaj 產區地理全貌',
    componentProps: {
      mapRegion: 'Tokaj',
      description: '托卡伊 UNESCO 世界遺產葡萄酒區域，橫跨 27 個村莊，Bodrog 與 Tisza 河谷的秋季晨霧是貴腐菌生長的天然溫床'
    }
  },
  {
    title: '貴腐的奇蹟：Botrytis Cinerea 的魔法',
    highlights: [
      { id: 1, icon: '🦠', title: '什麼是貴腐菌？', content: 'Botrytis Cinerea 真菌以穿透葡萄皮，讓水分蒸發、糖分濃縮，若在正確條件下是「高貴的腐爛（Noble Rot）」' },
      { id: 2, icon: '🌫️', title: '托卡伊的完美條件', content: '秋季 Bodrog 和 Tisza 河谷的晨霧提供濕氣讓菌絲生長，暖乾午後蒸發水分防止腐爛' },
      { id: 3, icon: '⚗️', title: '化學變化', content: '水分蒸發後，糖度可達 450-800 g/L（一般葡萄僅 200-250 g/L），甘油、酸度、香氣複合物同步濃縮' },
      { id: 4, icon: '✋', title: 'Aszú 手工採收', content: '只能手工逐粒採收已被貴腐菌感染的葡萄漿果（Aszú Berries），耗時費力，成本極高' }
    ],
    content: `<div class="botrytis-detail">
      <p class="lead-text">貴腐（Noble Rot）是自然界的奇蹟——通常會腐爛葡萄的 Botrytis Cinerea 真菌，在托卡伊特殊的氣候條件下成為釀造傳奇甜酒的秘密武器。</p>
      <div class="botrytis-process">
        <h4>🔬 貴腐菌的作用過程</h4>
        <div class="process-steps">
          <div class="step">
            <span class="step-num">1</span>
            <div><strong>晨霧濕氣（8-10 月）</strong>：Bodrog 和 Tisza 河谷的晨霧附著在葡萄表面，菌絲穿透薄薄的 Furmint 果皮</div>
          </div>
          <div class="step">
            <span class="step-num">2</span>
            <div><strong>午後暖燥</strong>：陽光蒸發水分，葡萄「皺縮」，糖分、酸度、甘油大幅濃縮</div>
          </div>
          <div class="step">
            <span class="step-num">3</span>
            <div><strong>Aszú 果漿形成</strong>：完全感染的葡萄漿果變成深棕色、類似葡萄乾的「Aszú Berry」</div>
          </div>
          <div class="step">
            <span class="step-num">4</span>
            <div><strong>多次手工採收</strong>：採收工人 3-7 次進入葡萄園（稱為「Válogatás」逐粒篩選），只採最成熟的 Aszú 果漿</div>
          </div>
        </div>
      </div>
      <div class="comparison-box">
        <h4>🆚 普通葡萄 vs. Aszú 果漿</h4>
        <div class="compare-two">
          <div><strong>普通葡萄：</strong><ul><li>糖度 200-250 g/L</li><li>果汁豐富</li><li>色澤透明金黃</li></ul></div>
          <div><strong>Aszú 果漿：</strong><ul><li>糖度 450-800 g/L</li><li>幾乎無汁（半乾果）</li><li>色澤深棕，外觀皺縮</li></ul></div>
        </div>
      </div>
      <div class="note-box">
        <p>⚠️ 貴腐菌若在潮濕悶熱、缺乏乾燥期的環境下生長，會變成無法利用的「灰腐（Grey Rot）」——晨霧與暖乾午後的交替節律，正是托卡伊風土無可取代之處。</p>
      </div>
    </div>`
  },
  {
    title: 'Aszú 果漿如何變成酒：釀造流程解析',
    highlights: [
      { id: 1, icon: '🍇', title: '基酒（Base Wine）', content: '用同年份健康採收的 Furmint／Hárslevelű 葡萄正常發酵而成的干型或半干白酒，作為 Aszú 果漿的「溶劑」' },
      { id: 2, icon: '⏳', title: '浸泡工序', content: 'Aszú 果漿與基酒（或發酵中的新酒）混合浸泡，傳統上需 12-60 小時，讓糖分與香氣物質充分釋出' },
      { id: 3, icon: '🍷', title: '壓榨與發酵', content: '浸泡後壓榨取汁，繼續發酵；因糖分極高，發酵常會因酒精濃度上升自然停止，留下大量殘糖' },
      { id: 4, icon: '🏚️', title: '陳年環境', content: '托卡伊酒窖多鑿於火山凝灰岩中，恆溫恆濕、覆滿黑色酒窖黴菌（Cladosporium cellare），是天然的陳年聖地' }
    ],
    content: `<div class="brewing-process">
      <p>Aszú 果漿本身不是酒，而是釀酒的「原料」——理解它如何轉化為成品酒，是掌握托卡伊制度的關鍵一步。</p>
      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-badge">1</div>
          <div><strong>採收與分揀</strong>：Aszú 果漿與健康葡萄分開採收，Aszú 果漿另外收集</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">2</div>
          <div><strong>製作基酒</strong>：健康葡萄正常發酵，成為干型或半干基酒</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">3</div>
          <div><strong>浸泡（Áztatás）</strong>：Aszú 果漿加入基酒或新酒中浸泡 12-60 小時</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">4</div>
          <div><strong>壓榨與續發酵</strong>：取汁後繼續緩慢發酵，糖分限制酵母活性</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">5</div>
          <div><strong>橡木桶陳年</strong>：於火山岩酒窖中的匈牙利橡木桶（Gönc 桶，容量約 136 公升）陳年至少 18 個月</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">6</div>
          <div><strong>瓶中熟成</strong>：裝瓶後再陳年，總計上市前陳年時間常達 30 個月以上</div>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Aszú 分級制度：從 Puttonyos 到殘糖標示',
    highlights: [
      { id: 1, icon: '🪣', title: 'Puttonyos 是什麼？', content: '「Puttonyos」原指背在背上採收 Aszú 果漿的傳統木桶，傳統上代表每個 Gönc 基酒桶（136 公升）中加入的 Aszú 果漿桶數' },
      { id: 2, icon: '📊', title: '傳統甜度分級', content: '傳統上以 3-6 Puttonyos 標示甜度，換算殘糖量約為 3P=60、4P=90、5P=120、6P=150 g/L 起' },
      { id: 3, icon: '🔄', title: '2013 年法規改革', content: '新規定不再以 Puttonyos 桶數為法律標準，改以殘糖量直接定義：任何標示「Tokaji Aszú」的酒款，殘糖須達 120 g/L 以上（等同舊制 5 Puttonyos 門檻）' },
      { id: 4, icon: '🏷️', title: '3、4 Puttonyos 走入歷史', content: '改革後，3 Puttonyos 與 4 Puttonyos 兩個舊等級已不再存在——所有合格的 Aszú 起跳即等同舊制 5 Puttonyos 的濃度，酒莊仍可自願在酒標上加註 5 或 6 Puttonyos 字樣' }
    ],
    content: `<div class="puttonyos-detail">
      <p>Puttonyos 系統是托卡伊葡萄酒界最著名的品質分級標誌，但 2013 年的法規改革大幅簡化了它的法律地位——理解「舊制」與「新制」的差異，是讀懂酒標的關鍵。</p>
      <div class="puttonyos-scale">
        <h4>🪣 傳統 Puttonyos 甜度對照（歷史參考）</h4>
        <div class="scale-visual">
          <div class="scale-item p3"><span class="pnum">3 Puttonyos</span><span class="residual">殘糖 60-90 g/L</span><span class="style">2013 年後已取消</span></div>
          <div class="scale-item p4"><span class="pnum">4 Puttonyos</span><span class="residual">殘糖 90-120 g/L</span><span class="style">2013 年後已取消</span></div>
          <div class="scale-item p5"><span class="pnum">5 Puttonyos</span><span class="residual">殘糖 120-150 g/L</span><span class="style">= 新制 Aszú 最低標準</span></div>
          <div class="scale-item p6"><span class="pnum">6 Puttonyos</span><span class="residual">殘糖 150+ g/L</span><span class="style">最濃郁等級，可自願標示</span></div>
        </div>
      </div>
      <div class="note-box">
        <h4>📜 為什麼要改革？</h4>
        <p>2013 年新規的目標有二：一是把「Tokaji Aszú」這個名稱鞏固為托卡伊甜酒中最高規格的類別，避免消費者被過多細分等級混淆；二是收緊產區法規，讓「Aszú」三個字本身就代表一定的品質門檻。實務上，多數頂級酒莊出品的 Aszú 早已達到舊制 5-6 Puttonyos 的濃度，因此改革對其影響不大，但讓入門消費者更容易理解酒標。</p>
      </div>
      <div class="eszencia-box">
        <h4>💎 Eszencia：托卡伊的終極精華</h4>
        <p>Eszencia 是僅用純 Aszú 漿果自身重量所壓出的極稀少果汁，糖度高達 450-800 g/L（對比：蜂蜜約 800 g/L）。因糖分極高，酵母幾乎無法完成發酵，成品酒精度可能只有 2-5%。一般需要陳年 3-5 年以上才能裝瓶，是世界上最稀少也最昂貴的葡萄酒之一。</p>
      </div>
    </div>`
  },
  {
    title: '干型 Furmint：21 世紀的新托卡伊',
    highlights: [
      { id: 1, icon: '🔄', title: '甜酒到干酒的轉型', content: '1990 年代後，一批釀酒師開始探索 Furmint 的干型潛力，挑戰「托卡伊只有甜酒」的刻板印象' },
      { id: 2, icon: '🏆', title: '國際認可', content: '頂級干型 Furmint 如今在 Wine Spectator、Decanter 等媒體獲得高分評價，年份佳釀常被拿來與白布根地相提並論' },
      { id: 3, icon: '🍾', title: '比較白布根地', content: '許多人形容頂級干型 Furmint 類似高品質的白布根地：高酸、礦物感、奶油質地、極長陳年潛力' },
      { id: 4, icon: '📈', title: '出口市場主力', content: '干型 Furmint 在英國、德國、美國市場迅速成長，成為匈牙利葡萄酒出口的最重要大使' }
    ],
    content: `<div class="dry-furmint">
      <p>如果說 Tokaji Aszú 是匈牙利的傳統驕傲，那麼干型 Furmint 就是匈牙利葡萄酒的現代希望。越來越多的世界頂級侍酒師和評論家認為：干型 Furmint 是世界上被低估最嚴重的白酒品種之一。</p>
      <div class="dry-furmint-characteristics">
        <h4>🍷 干型 Furmint 的風格演化</h4>
        <div class="style-stages">
          <div class="stage">
            <h5>年輕款（1-3 年）</h5>
            <ul><li>萊姆、青蘋果、白桃</li><li>明顯礦石和燧石感</li><li>高酸度，活潑清新</li><li>適合搭配魚類和海鮮</li></ul>
          </div>
          <div class="stage">
            <h5>熟成款（5-10 年）</h5>
            <ul><li>蜂蜜、蜂蠟、成熟杏桃</li><li>烤榛子、奶油、煙燻</li><li>礦物感更複雜深邃</li><li>媲美頂級白布根地</li></ul>
          </div>
          <div class="stage">
            <h5>老酒（15+ 年）</h5>
            <ul><li>棕色香料、薑餅、橙皮</li><li>極複雜的礦物氧化感</li><li>驚人的陳年表現</li><li>頂級年份可保存 30+ 年</li></ul>
          </div>
        </div>
      </div>
      <div class="producers-box">
        <h4>🏰 干型 Furmint 常見生產者（詳細酒莊解析見 L2-1）</h4>
        <div class="producer-list">
          <span>Patricius Winery</span>
          <span>Tokaj Nobilis</span>
          <span>Holdvölgy Estate</span>
          <span>Oremus（Vega Sicilia）</span>
          <span>Sauska</span>
          <span>Áts Károly</span>
        </div>
      </div>
    </div>`
  },
  {
    title: '1737 年：比波爾多早了 118 年的分級制度',
    highlights: [
      { id: 1, icon: '📜', title: '世界第一個官方分級', content: '1737 年，哈布斯堡皇帝查理六世頒令將托卡伊葡萄園正式分為三個等級（First Class、Second Class、Third Class）' },
      { id: 2, icon: '⏳', title: '早於波爾多 118 年', content: '波爾多的官方 1855 年分級（Médoc Classification）在 1855 年建立，比托卡伊晚了 118 年' },
      { id: 3, icon: '🔒', title: '1737 年同時限制進入', content: '同年法令禁止外地葡萄酒進入托卡伊產區銷售，形同創立了世界最早的 AOC 制度' },
      { id: 4, icon: '👑', title: '皇室御用', content: '哈布斯堡、沙皇俄國、法國宮廷都是托卡伊的忠實粉絲，路易十四稱之為「酒中之王」' }
    ],
    content: `<div class="history-detail">
      <p>托卡伊的葡萄酒歷史充滿皇室光輝。在歐洲葡萄酒分級制度的歷史上，托卡伊比任何著名產區都更早建立了正式的品質分級體系。</p>
      <div class="timeline-block">
        <h4>📅 托卡伊葡萄酒歷史時間線</h4>
        <div class="timeline">
          <div class="event"><span class="year">1630s</span><span class="desc">Máté Szepsy Laczkó 首次有記載地釀造貴腐 Aszú 甜酒</span></div>
          <div class="event"><span class="year">1703</span><span class="desc">Rákóczi 家族送 Tokaji Aszú 給法國宮廷，路易十四稱之為「酒中之王，王者之酒」</span></div>
          <div class="event"><span class="year">1737</span><span class="desc">查理六世頒布法令：世界第一個官方葡萄園分級制度</span></div>
          <div class="event"><span class="year">1855</span><span class="desc">波爾多 Médoc 分級制度建立（比托卡伊晚 118 年）</span></div>
          <div class="event"><span class="year">1989</span><span class="desc">匈牙利開放市場，外國資本進入（AXA、Vega Sicilia 等）</span></div>
          <div class="event"><span class="year">2002</span><span class="desc">托卡伊葡萄酒文化景觀列入 UNESCO 世界文化遺產</span></div>
          <div class="event"><span class="year">2013</span><span class="desc">新法規上路：Aszú 以殘糖量（≥120 g/L）定義，Puttonyos 桶數不再是法律標準</span></div>
        </div>
      </div>
      <div class="note-box">
        <p>📌 想深入了解各名莊的風格差異與代表酒款，或是想學會判讀年份特徵（例如 2017、2009 這些傳奇年份為何特別），這些主題會在 Level 2 的「托卡伊頂級酒莊解析」與「托卡伊年份差異」兩堂課中完整展開。</p>
      </div>
    </div>`
  },
  {
    component: 'TokajiAszuLevelsSlide',
    title: '👑 Tokaji 貴腐甜酒分級互動詳解',
    description: '點選 3 / 5 / 6 Puttonyos 與 Eszencia，查看殘糖規範、釀造、風味、餐搭與代表酒莊'
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: '托卡伊的「晨霧＋暖乾午後」氣候組合對貴腐菌有什麼關鍵作用？',
            options: ['A. 晨霧殺菌，暖乾防止菌絲過度生長', 'B. 晨霧提供濕氣讓菌絲穿透葡萄皮，暖乾午後蒸發水分讓糖分濃縮，避免爛葡萄', 'C. 晨霧增加葡萄的光合作用，提高糖分含量', 'D. 暖乾午後是貴腐菌生長的主要時間，晨霧只是副作用'],
            correct: 1,
            explanation: '這個氣候組合是托卡伊貴腐酒釀造的核心：①晨霧（濕氣）讓 Botrytis Cinerea 的菌絲能穿透 Furmint 的薄果皮（太乾燥則菌絲無法生長）；②暖乾午後（晴天）蒸發葡萄內的水分，防止葡萄整顆爛掉（否則就變成「灰腐（Grey Rot）」，不能用於釀酒）。這個「交替濕乾」的節律是形成高品質 Aszú 果漿的必要條件。'
          },
          {
            type: 'single',
            question: '2013 年托卡伊法規改革後，「Tokaji Aszú」酒標的殘糖量最低要求是多少？',
            options: ['A. 60 g/L（舊制 3 Puttonyos 標準）', 'B. 90 g/L（舊制 4 Puttonyos 標準）', 'C. 120 g/L（等同舊制 5 Puttonyos 標準）', 'D. 150 g/L（舊制 6 Puttonyos 標準）'],
            correct: 2,
            explanation: '2013 年起，任何標示「Tokaji Aszú」的酒款，法定殘糖量須達 120 g/L 以上——這正好等同於舊制 5 Puttonyos 的門檻。這項改革同時讓舊制的 3 Puttonyos（60 g/L）與 4 Puttonyos（90 g/L）兩個較低等級走入歷史，酒莊仍可自願在酒標加註 5 或 6 Puttonyos 字樣供消費者參考，但法律上不再強制以桶數計算。'
          },
          {
            type: 'single',
            question: '干型（Dry）Furmint 和 Tokaji Aszú 的主要差異是什麼？',
            options: ['A. 干型 Furmint 使用不同的品種，Aszú 才是純 Furmint', 'B. 干型 Furmint 完全發酵所有糖分成酒精，沒有明顯殘糖；Aszú 利用貴腐果漿濃縮糖分，保有高殘糖（120+ g/L）', 'C. 干型 Furmint 必須在法國橡木桶中陳年，Aszú 使用匈牙利橡木', 'D. 干型 Furmint 只在非 Tokaj 產區生產'],
            correct: 1,
            explanation: '最核心的差異在於釀造方式和殘糖量：干型 Furmint 使用正常成熟的 Furmint 葡萄，讓酵母完全發酵，殘糖通常低於 4 g/L（干型標準）；而 Tokaji Aszú 使用已被貴腐菌感染的高糖 Aszú 果漿，發酵被中途停止或受高糖限制，殘糖高達 120-800 g/L。兩者的香氣特徵也截然不同：干型偏礦物/果酸，Aszú 偏蜂蜜/果乾/橙皮蜜餞。'
          },
          {
            type: 'single',
            question: '1737 年托卡伊的官方葡萄園分級制度比波爾多 1855 年分級早了多少年？',
            options: ['A. 58 年', 'B. 118 年', 'C. 178 年', 'D. 218 年'],
            correct: 1,
            explanation: '1855 - 1737 = 118 年。托卡伊在 1737 年由神聖羅馬帝國皇帝查理六世（Karl VI）頒布法令，建立了世界上最早的官方葡萄園品質分級制度（三個等級）並同時限制外地葡萄酒進入，形同現代 AOC 制度的雛形。波爾多著名的 1855 年梅多克分級（Grand Cru Classé）比托卡伊晚了整整 118 年，因此匈牙利人對此非常自豪。'
          }
        ]
      }
    }
  }
]
