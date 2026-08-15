/**
 * CA-L3-2 高階釀造技術與加州永續農業認證
 * 加州葡萄酒產業的未來：三大永續認證體系的實質要求、氣候變遷應對與釀酒師技藝的極致
 *
 * 內容查證來源（2026 年 8 月）：
 * - Certified California Sustainable Winegrowing（CSWA）官網 sustainablewinegrowing.org / californiasustainablewine.com — 認證規範、227 項最佳實踐、14 大類別、85% 門檻
 * - Demeter USA 官網 demeter-usa.org — Biodynamic Farm Standard、9 種製劑、10% 生物多樣性用地要求
 * - CCOF.org、UC Organic Agriculture Institute — 有機認證 3 年轉型期規範
 * - SIP Certified（sipcertified.org）、Napa Green 官網 — 兩個平行認證體系的定位差異
 * - UC Davis Wine & Viticulture（wineserver.ucdavis.edu）— 野火煙霧影響研究、Anita Oberholster 團隊
 * - Nature Scientific Reports、AJEV（American Journal of Enology and Viticulture）— Guaiacol / 4-Methylguaiacol 糖苷化機制
 * - ASBMB Today / Knowable Magazine — UC Davis 氣候變遷對葡萄化學影響研究（Megan Bartlett）
 * 註：認證覆蓋率、產業規模等數字若無法交叉驗證精確年份數據，以「約」或質性描述呈現。
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州是全球葡萄酒永續農業的先驅——遍布全州的可持續認證、有機和生物動力法酒莊，以及面對氣候變遷的積極回應，都使加州成為全球葡萄酒產業可持續發展的標竿。但「永續」「有機」「生物動力法」這些標籤背後，究竟各自代表什麼具體規範？本課將拆解每個認證體系的實際要求，並深入野火煙霧、氣候變遷等加州釀酒師正在面對的最前線挑戰。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌱 精確掌握加州三大永續認證體系的具體規範</h4>
            <p>理解 CCSW、CCOF/USDA Organic、Demeter Biodynamic 各自的稽核項目、門檻與第三方驗證機制</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 氣候變遷對加州葡萄酒的量化衝擊</h4>
            <p>掌握採收期提前、酒精度上升的科學數據，以及野火煙霧污染的分子機制</p>
          </div>
          <div class="point-item">
            <h4>🍷 頂級釀酒技術剖析</h4>
            <p>掌握 Whole Cluster Fermentation、Extended Maceration、Natural Wine 等高階技術的原理和風格影響</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '加州三大永續農業認證',
    highlights: [
      { id: 'c1', icon: '♻️', title: 'CCSW 的稽核邏輯', content: 'CCSW 並非「非黑即白」的合格/不合格制度，而是以 1–4 分量表為 227 項最佳實踐評分，要求 85% 以上項目達到 2 分或以上，並強制符合 63 項葡萄園與 43 項酒莊的先決條件。' },
      { id: 'c2', icon: '🌙', title: 'Demeter 的核心哲學', content: '生物動力法不只是「不用化學品」，而是把農場視為一個自我維持的有機體，強制要求至少 10% 土地用於生物多樣性棲地，並使用 9 種特定製劑。' },
      { id: 'c3', icon: '🌿', title: 'CCOF/USDA 的轉型期', content: '土地必須連續 3 年未使用禁用物質，才能取得認證；CCOF 另設「Certified Transitional」過渡標章，供轉型期滿 1 年以上的農場使用。' }
    ],
    content: `<div class="california-sustainability">
      <h3>🌱 加州永續葡萄酒農業三層次——實質規範拆解</h3>
      <p>加州擁有全球最完善的葡萄酒永續農業認證體系。從基礎的綜合可持續管理，到嚴格的有機認證，再到哲學深度最高的生物動力法，三個層次的稽核方式、強制項目和第三方驗證機制都截然不同。</p>
      <div class="cert-pyramid">
        <div class="cert-level biodynamic">
          <div class="cert-badge">🌙 Biodynamic（生物動力法）</div>
          <div class="cert-body">
            <h4>認證機構：Demeter International / Demeter USA</h4>
            <p class="cert-desc">最嚴格、最整體的農業哲學，由奧地利哲學家 Rudolf Steiner 在 1924 年提出。把農場視為一個自我維持的有機整體，依循天文曆法（月相、星座）安排農作和釀酒。Demeter 標準涵蓋國家有機計畫（NOP）的全部要求，再額外疊加更嚴格的規範。</p>
            <div class="cert-requirements">
              <h5>關鍵要求（Demeter Biodynamic Farm Standard）</h5>
              <ul>
                <li>完全禁止化學農藥和合成肥料（滿足有機標準為前提）</li>
                <li>強制使用 9 種 Biodynamic 特定製劑（Preparations 500–508，如 500 號牛糞角、蓍草、洋甘菊等），以field spray 和堆肥菌種形式施用</li>
                <li>至少 <strong>10% 的農場總面積</strong>須劃設為生物多樣性棲地（樹籬、原生植栽、野生動物走廊）</li>
                <li>依照月相曆（Lunar/Biodynamic Calendar）決定種植、採收、裝瓶最佳時機</li>
                <li>對進口肥力（外部堆肥、有機質）有更嚴格限制，強調農場自身建立土壤肥力的閉環系統</li>
                <li>涵蓋動物福利、病蟲害田間自主防治等章節，比單純的「投入品清單」更強調農場整體生態設計</li>
              </ul>
            </div>
            <p class="cert-ca-examples">加州代表：Benziger（Sonoma）、Quintessa（Rutherford）、Robert Sinskey Vineyards（Napa）</p>
          </div>
        </div>
        <div class="cert-level organic">
          <div class="cert-badge">🌿 Certified Organic（USDA 有機認證）</div>
          <div class="cert-body">
            <h4>認證機構：USDA National Organic Program（NOP）、CCOF（California Certified Organic Farmers）</h4>
            <p class="cert-desc">完全禁止合成農藥、除草劑和化學肥料。CCOF 是加州最大、使用最廣泛的認證機構，重點是土壤健康和生態多樣性。</p>
            <div class="cert-requirements">
              <h5>關鍵要求</h5>
              <ul>
                <li><strong>3 年轉型期</strong>：土地須連續 3 年不含禁用物質，才能取得完整有機認證</li>
                <li>CCOF「Certified Transitional」過渡標章：轉型滿 1 年以上即可申請，作為邁向完整認證的階段性認可</li>
                <li>禁止所有合成化學品：農藥、除草劑、殺菌劑</li>
                <li>允許使用天然允許物質清單內的硫磺（防霉）和銅基製劑（防霜黴病）</li>
                <li>「Made with Organic Grapes」（葡萄有機但釀造過程未受完整規範）vs「Organic Wine」（連二氧化硫添加也受嚴格限制，通常不得高於一般酒款）——兩者標示意義不同</li>
                <li>若酒莊本身處理／裝瓶有機葡萄，酒莊設施本身也須取得 NOP 加工端（Handler）認證</li>
              </ul>
            </div>
            <p class="cert-ca-data">CCOF 是加州及美西最大的有機認證機構，服務範圍涵蓋加州多數已認證有機葡萄園</p>
          </div>
        </div>
        <div class="cert-level sustainable">
          <div class="cert-badge">♻️ Certified California Sustainable Winegrowing（CCSW）</div>
          <div class="cert-body">
            <h4>認證機構：California Sustainable Winegrowing Alliance（CSWA）</h4>
            <p class="cert-desc">加州最廣泛的可持續農業認證，2010 年由 CSWA 正式推出。與有機/生物動力法不同，CCSW 不是單純的「禁用清單」制度，而是以量化評分涵蓋葡萄園管理、水資源、土壤健康、生物多樣性、能源效率、員工關係等多維度指標。</p>
            <div class="cert-requirements">
              <h5>關鍵要求</h5>
              <ul>
                <li>依循《California Code of Sustainable Winegrowing》自評手冊，涵蓋 <strong>14 大類別、227 項最佳實踐</strong></li>
                <li>須符合 <strong>63 項葡萄園先決條件</strong>與 <strong>43 項酒莊先決條件</strong>（Prerequisite Practices）</li>
                <li>整體評分須達到「85% 以上項目為 2 分（滿分 4 分量表）或以上」的門檻</li>
                <li>由獨立第三方稽核機構進行實地稽核與紀錄審查</li>
                <li>涵蓋整合式病蟲害管理（IPM）、溫室氣體排放、能源與水資源效率、員工教育福利、社區關係等面向</li>
              </ul>
            </div>
            <p class="cert-desc">CCSW 允許有限度使用某些人工資材（前提是符合 IPM 原則、留有明確決策紀錄），門檻設計上更強調「持續改善」而非單一年度的絕對合格線，因此能涵蓋比有機/生物動力法多得多的葡萄種植面積。</p>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '區域型認證：SIP Certified 與 Napa Green',
    content: `<div class="regional-certs">
      <h3>🏷️ 除了 CCSW，加州還有哪些永續標章？</h3>
      <p>除了全州性的 CCSW，加州部分產區也發展出區域專屬的永續認證，理解它們的定位差異，有助於精準判讀酒標背後的實際意義。</p>
      <div class="rc-grid">
        <div class="rc-card">
          <h4>SIP Certified</h4>
          <p><strong>起源：</strong>發源於中央海岸（Central Coast），現已擴展為跨州的獨立第三方認證體系。</p>
          <p><strong>特色：</strong>以「非協商性」（Non-Negotiable）的硬性標準著稱——涵蓋棲地保育、水資源、能源效率、病蟲害管理、經濟穩定性與人力資源共 10 大面向，強調透明度與避免利益衝突（驗證機構獨立於產業協會之外）。已認證葡萄園面積達數萬英畝規模。</p>
        </div>
        <div class="rc-card">
          <h4>Napa Green</h4>
          <p><strong>起源：</strong>Napa Valley 產區專屬的永續計畫，分為「Napa Green Vineyard」與「Napa Green Winery」兩條認證軌道。</p>
          <p><strong>特色：</strong>Napa Green Vineyard 聚焦氣候行動、再生農業與土壤健康；Napa Green Winery 則稽核酒莊「設施整體」——從生產線、行政辦公室到品飲接待空間的能源使用，是少數把「品飲室」也納入永續稽核範圍的認證體系。</p>
        </div>
      </div>
      <div class="rc-note">
        <p>💡 <strong>侍酒師應知：</strong>這些認證標章之間並非互斥——同一座酒莊可能同時持有 CCSW（全州基礎）+ Napa Green（區域加碼）+ CCOF 有機（葡萄園端）三重認證。看到酒標上的標章時，應理解它代表「哪一個環節」被驗證，而非籠統地視為同一件事。</p>
      </div>
    </div>`
  },

  {
    title: '生物動力法實務：從天文曆到堆肥製劑',
    highlights: [
      { id: 'b1', icon: '📅', title: 'Biodynamic Calendar（生物動力曆）', content: '將每天依月亮通過的星座分類為「根日、葉日、花日、果日」，種植與釀酒時程依此曆法調整，尤其影響裝瓶與品飲活動的排程規劃。' },
      { id: 'b2', icon: '🐄', title: '500 號製劑（Horn Manure）', content: '將牛糞填入牛角中，埋入土中經過一個冬季發酵後取出，稀釋後以特定攪拌手法（Dynamization）噴灑於土壤，用於強化根系與土壤微生物活性。' },
      { id: 'b3', icon: '🌼', title: '502–507 號堆肥製劑', content: '由蓍草、洋甘菊、蕁麻、橡樹皮、蒲公英、纈草等植物依特定方式製成，加入堆肥中作為「順勢療法」式的堆肥活化劑。' }
    ],
    content: `<div class="biodynamic-practice">
      <h3>🌙 生物動力法的實際操作：不只是「不用農藥」</h3>
      <p>許多消費者誤以為生物動力法只是「更嚴格的有機農業」，但其操作邏輯其實建立在一套獨特的農業哲學上。理解實際的製劑與曆法操作，有助於侍酒師向顧客準確解釋這個常被誤解的認證。</p>
      <div class="bd-steps">
        <div class="bd-step">
          <h4>🐄 500 號：牛角堆肥（Horn Manure）</h4>
          <p>將牛糞填入母牛的角中，於秋季埋入土壤，經過一整個冬季的地下發酵後，在春季取出。使用時將少量製劑溶於水中，以特定方式攪拌（正反交替攪動形成漩渦，稱為 Dynamization）約一小時，再噴灑於葡萄園土壤，目的是強化根系發育與土壤微生物活性。</p>
        </div>
        <div class="bd-step">
          <h4>🦌 501 號：石英粉（Horn Silica）</h4>
          <p>將磨細的石英粉填入牛角中，於春夏之際埋入土中發酵，取出後噴灑於葉面，據信有助於提升植株對光合作用的利用效率。</p>
        </div>
        <div class="bd-step">
          <h4>🌼 502–507 號：堆肥活化製劑</h4>
          <p>分別以蓍草（502）、洋甘菊（503）、蕁麻（504）、橡樹皮（505）、蒲公英（506）、纈草（507）等植物依特定方式製成濃縮製劑，加入堆肥中，作用類似順勢療法的活化劑，用於強化堆肥的分解品質與礦物質平衡。</p>
        </div>
        <div class="bd-step">
          <h4>📅 生物動力曆的實務應用</h4>
          <p>Biodynamic Calendar 將每日依月亮通過的黃道星座分類為「根日（Root Day）、葉日（Leaf Day）、花日（Flower Day）、果日（Fruit Day）」。許多生物動力法酒莊會依此曆法安排採收、裝瓶甚至品飲活動的時程——例如避開「根日」進行裝瓶，選擇「果日」進行重要品飲活動，儘管這部分實務的科學實證基礎仍存在爭議，但已是 Demeter 認證農場長期遵循的操作傳統。</p>
        </div>
      </div>
      <div class="bd-debate">
        <h4>⚖️ 業界的科學爭議</h4>
        <p>生物動力法的部分操作（尤其是天文曆法與順勢療法式製劑）缺乏嚴謹的雙盲對照科學實證，因此在葡萄酒學術界存在爭議。然而，即使抱持懷疑立場的釀酒師，也普遍認同生物動力法強制要求的<strong>堆肥自製、生物多樣性棲地、土壤健康監測</strong>等配套措施，確實對葡萄園生態系統有正面效益——這也是許多酒莊即便不完全認同其形上學基礎，仍選擇部分採行生物動力法實務的原因。</p>
      </div>
    </div>`
  },

  {
    title: '氣候變遷：加州葡萄酒產業的最大挑戰',
    content: `<div class="climate-change">
      <h3>🌡️ 氣候變遷與加州葡萄酒的未來</h3>
      <p>加州是全球葡萄酒產業中受氣候變遷影響最直接的地區之一。升溫、乾旱、野火煙霧（Smoke Taint）、海平面上升——這些不只是未來的威脅，而是現在進行式，且已有具體的科學量化數據。</p>
      <div class="stat-grid">
        <div class="stat-box">
          <div class="stat-number">6 天</div>
          <div class="stat-label">UC Davis 研究：氣溫每上升 1°C，採收期平均提前的天數</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">12.5% → 14.5%+</div>
          <div class="stat-label">Napa Cabernet 平均酒精度變化（1990 年代至今，業界普遍觀察趨勢）</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">約 37 億美元</div>
          <div class="stat-label">2020 年野火對美國葡萄酒產業造成的估計損失（加州、奧勒岡合計）</div>
        </div>
      </div>
      <div class="climate-challenges">
        <div class="cc-card">
          <h4>🌡️ 升溫與糖酸失衡（Sugar-Flavor Decoupling）</h4>
          <p>UC Davis 植物生理學家 Megan Bartlett 團隊的研究指出，升溫會打亂葡萄中糖分、酸度與次級代謝物（風味前驅物、單寧）之間原本同步的成熟節奏：</p>
          <ul>
            <li>高溫加速糖分積累（因此酒精度提高），但酚類物質（單寧、花青素）與香氣前驅物的成熟速度未必同步加快——「糖分成熟」領先「風味/酚類成熟」的落差正在擴大</li>
            <li>酒精度普遍提高，部分酒款需要在釀造端以脫醇技術（Dealcoholization，如逆滲透或旋轉錐柱蒸餾）調整最終酒精度</li>
            <li>涼爽品種（Pinot Noir）的適種區域向北移動或向高海拔轉移</li>
          </ul>
        </div>
        <div class="cc-card">
          <h4>💧 乾旱（Drought）</h4>
          <p>加州長期面臨乾旱週期：</p>
          <ul>
            <li>地下水位持續下降，灌溉成本大幅增加</li>
            <li>應對策略：滴灌技術（Drip Irrigation）與土壤濕度感測器結合，精準供水</li>
            <li>抗旱品種與砧木的探索：地中海型品種（Picpoul、Vermentino）與耐旱砧木試種增加</li>
            <li>Cover Crops（覆蓋作物）保留土壤水分並固定氮元素，同時是 CCSW／Napa Green 都會稽核的具體實踐項目</li>
          </ul>
        </div>
        <div class="cc-card highlight">
          <h4>🔥 野火煙霧污染（Smoke Taint）——分子機制</h4>
          <p>加州近年最嚴峻的新問題。2017 年 Napa/Sonoma 大火、2020 年 LNU Lightning Complex 與 Glass Fire 等災難性野火，讓「煙霧污染」成為 UC Davis 葡萄酒化學家 Anita Oberholster 團隊等機構的重點研究課題。</p>
          <ul>
            <li><strong>成因物質：</strong>野火燃燒木質素（Lignin）產生揮發性酚類化合物，主要為 Guaiacol 與 4-Methylguaiacol，此外還有 Syringol、甲酚（Cresols）等，帶來「冷灰燼」「燒烤」的不良氣味</li>
            <li><strong>吸收機制：</strong>這些揮發性酚類透過葡萄果皮吸收後，會迅速與糖分結合形成「糖苷（Glycoconjugates）」，以穩定但無味的形式儲存於果實中——這正是煙霧污染難以在採收前以感官方式判斷的原因</li>
            <li><strong>釋放機制：</strong>發酵過程中，酵母與酵素分解糖苷鍵結，將原本無味的糖苷態酚類水解釋出為游離態揮發性酚，煙燻/燒焦風味才在此刻顯現；瓶陳過程中的酸催化水解也會讓煙燻感隨時間持續增強</li>
            <li><strong>檢測方法：</strong>採收前以氣相層析質譜儀（GC-MS）檢測游離態與糖苷態酚類化合物總量，並可用衛星煙霧擴散影像輔助評估暴露風險</li>
            <li><strong>處理選項：</strong>活性碳過濾（損失部分香氣）、逆滲透與奈米過濾技術（成本高但效果較好）、分子篩、調整發酵萃取強度（降低皮渣接觸時間以減少額外萃取）</li>
            <li><strong>2020 年的產業決定：</strong>許多優質酒莊在野火後選擇不採收葡萄，寧願損失一個年份也不推出品質受損的酒款，反映出加州頂級酒莊對品牌信譽的高度重視</li>
          </ul>
        </div>
        <div class="cc-card">
          <h4>🌱 應對氣候變遷的策略</h4>
          <ul>
            <li><strong>高海拔遷移：</strong>在 Sierra Foothills、Santa Lucia Highlands 等高海拔產區開發新葡萄園，利用逆溫層之上的涼爽帶（見 CA-L3-1）</li>
            <li><strong>北移與跨州佈局：</strong>部分酒莊集團在 Oregon、Washington 等更涼爽州份投資葡萄園作為氣候避險</li>
            <li><strong>品種多樣化：</strong>引進耐熱品種（如 Aglianico、Touriga Nacional）或高酸地中海品種（Albariño、Assyrtiko）進行試驗性種植</li>
            <li><strong>採收時機調整：</strong>夜間採收（Night Harvest）避免日間高溫對葡萄造成氧化與風味流失</li>
            <li><strong>再生農業（Regenerative Agriculture）：</strong>強調碳封存、恢復土壤微生物多樣性、減少或取消翻耕，是 CCSW 與 Napa Green 近年更新標準中被提升權重的項目</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: '進階釀酒技術：Whole Cluster 與自然酒',
    content: `<div class="advanced-winemaking">
      <h3>🍷 加州釀酒師的高階技藝</h3>
      <div class="winemaking-techniques">
        <div class="wt-card">
          <h4>🍇 Whole Cluster Fermentation（整串發酵）</h4>
          <p>傳統上，葡萄在發酵前需要去梗（Destemming）。Whole Cluster 則是保留部分或全部葡萄梗一起發酵，是布根地的傳統做法，也是加州精品 Pinot Noir 的最新趨勢。</p>
          <div class="wt-effects">
            <div class="wt-pro">
              <h5>效果</h5>
              <ul>
                <li>增加複雜的香料感（多種香料、香草莖的風味）</li>
                <li>更高的 pH 值，降低總酸度，帶來更柔和圓潤的質感</li>
                <li>整串發酵產生的 CO₂ 可以保護葡萄酒不氧化</li>
                <li>梗提供額外的單寧結構（但品質較粗糙）</li>
              </ul>
            </div>
            <div class="wt-risk">
              <h5>風險</h5>
              <ul>
                <li>梗必須成熟（Ripe Stems），否則帶來青澀苦感</li>
                <li>技術要求高，不熟練使用反而損害品質</li>
              </ul>
            </div>
          </div>
          <p class="wt-masters">加州代表：Littorai（Sonoma Coast）、Evening Land、Hirsch Vineyards</p>
        </div>
        <div class="wt-card">
          <h4>⏱️ Extended Maceration（延長浸漬）</h4>
          <p>在完成酒精發酵後，讓葡萄酒繼續與葡萄皮、種籽、梗接觸（浸漬）更長時間（2–8 週），以萃取更多單寧和色素。</p>
          <div class="wt-effects">
            <ul>
              <li>更深的顏色和更高的單寧濃度</li>
              <li>在長期陳年後，過度萃取的粗糙單寧會逐漸聚合、軟化</li>
              <li>最終呈現出異常豐富的質感和極高的陳年潛力</li>
              <li>適合：Napa Hillside Cabernet、Sierra Foothills Zinfandel</li>
            </ul>
          </div>
        </div>
        <div class="wt-card">
          <h4>🌿 Natural Wine（自然酒）在加州的崛起</h4>
          <p>2010 年代以來，加州自然酒運動迅速成長，特別是在 Sonoma、Lodi 和 Sierra Foothills 等地區。</p>
          <div class="wt-effects">
            <h5>自然酒的主要特徵</h5>
            <ul>
              <li><strong>野生酵母發酵：</strong>使用葡萄皮上的天然酵母，而非商業培養酵母。帶來更複雜、更有個性但難以預測的風味。</li>
              <li><strong>最少干預：</strong>不過濾、不澄清、最少添加二氧化硫（甚至 Zero SO₂）</li>
              <li><strong>Skin-Contact White（橙酒）：</strong>白葡萄品種進行長時間果皮浸漬，帶來橘黃色澤和豐富的單寧質感，加州版本常用 Ribolla Gialla、Sauvignon Blanc、Chenin Blanc 等品種試驗</li>
              <li><strong>Pét-Nat（Pétillant Naturel，自然氣泡酒）：</strong>在一次發酵完成前裝瓶，讓瓶中殘存的糖分繼續發酵產生 CO₂，通常不除渣（sur lie），酒液略帶渾濁</li>
            </ul>
          </div>
          <p class="wt-masters">代表：Donkey & Goat（Berkeley）、Scholium Project、Ruth Lewandowski</p>
        </div>
        <div class="wt-card">
          <h4>🧊 夜間採收（Night Harvest）</h4>
          <p>在加州炎熱的夏季，清晨 2–6 點採收葡萄，讓葡萄在最低溫時進入釀酒廠。</p>
          <ul>
            <li>降低葡萄的採收溫度（從白天的 35°C 降至 15°C 左右），保留芳香族化合物</li>
            <li>減少氧化，保持果香新鮮度</li>
            <li>使大型機械採收成為可能（機械不受照明限制，且夜間作業降低人力中暑風險）</li>
            <li>現代頂級酒莊的標準操作程序，也與氣候變遷下的高溫挑戰直接相關</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: '認證體系全景對照表',
    content: `<div class="cert-comparison">
      <h3>⚖️ 五大加州葡萄酒永續/有機標章一次看懂</h3>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr><th>認證</th><th>核心焦點</th><th>是否禁用合成農藥</th><th>第三方稽核</th><th>地理範圍</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CCSW</strong></td>
              <td>整體永續管理（水、能源、社區、生物多樣性）</td>
              <td>限制但非全面禁止（IPM 原則下有限使用）</td>
              <td>是（獨立稽核機構）</td>
              <td>加州全州</td>
            </tr>
            <tr>
              <td><strong>CCOF / USDA Organic</strong></td>
              <td>土壤健康、禁用合成化學品</td>
              <td>全面禁止（僅允許天然清單物質）</td>
              <td>是（USDA 認可機構）</td>
              <td>全美（CCOF 為加州最大機構）</td>
            </tr>
            <tr>
              <td><strong>Demeter Biodynamic</strong></td>
              <td>農場整體生態設計 + 天文曆法農作</td>
              <td>全面禁止（涵蓋有機標準並加碼）</td>
              <td>是（Demeter 稽核員）</td>
              <td>全球（USA 為地區分支）</td>
            </tr>
            <tr>
              <td><strong>SIP Certified</strong></td>
              <td>棲地、水、能源、經濟與社會面向並重</td>
              <td>限制但非全面禁止</td>
              <td>是（獨立第三方）</td>
              <td>始於中央海岸，現跨州</td>
            </tr>
            <tr>
              <td><strong>Napa Green</strong></td>
              <td>氣候行動、再生農業、設施整體能效</td>
              <td>限制但非全面禁止</td>
              <td>是（Napa Green 稽核團隊）</td>
              <td>僅限 Napa Valley</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cert-comparison-note">
        <p>💡 <strong>侍酒師考點：</strong>唯一「完全禁止合成農藥」的兩個體系是 <strong>CCOF/USDA Organic</strong> 與 <strong>Demeter Biodynamic</strong>；CCSW、SIP Certified、Napa Green 則是以「整體永續評分」而非單一禁用清單為核心邏輯，允許在 IPM（Integrated Pest Management，整合式病蟲害管理）原則下有限度使用特定資材。這個差異，是分辨「永續」與「有機」酒標意涵的關鍵。</p>
      </div>
    </div>`
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '加州生物動力法（Biodynamic）農業與有機農業的最主要差異是什麼？',
            options: ['A. 生物動力法允許使用少量合成農藥', 'B. 生物動力法依循月相曆安排農作，強制劃設至少 10% 土地作為生物多樣性棲地，並使用特定製劑', 'C. 生物動力法成本更低', 'D. 生物動力法只關注葡萄園，不包括釀造過程'],
            correct: 1,
            explanation: 'Demeter Biodynamic 標準涵蓋 NOP 有機規範的全部要求並再疊加更嚴格條件：依循月相曆安排農作、使用 9 種特定製劑（Preparations 500–508），並強制至少 10% 農場總面積劃設為生物多樣性棲地，把農場視為自我維持的整體有機體。'
          },
          {
            type: 'single',
            question: '關於 CCSW（Certified California Sustainable Winegrowing）的稽核邏輯，以下敘述何者正確？',
            options: ['A. 只要不使用任何化學品即可通過認證', 'B. 以 227 項最佳實踐、14 大類別的量表評分，須符合先決條件並達到 85% 以上項目為 2 分以上的門檻', 'C. 只稽核葡萄園，不涉及酒莊生產設施', 'D. 由加州政府直接發證，無需第三方稽核'],
            correct: 1,
            explanation: 'CCSW 依循《California Code of Sustainable Winegrowing》自評手冊，涵蓋 14 大類別、227 項最佳實踐，須符合 63 項葡萄園與 43 項酒莊先決條件，並整體達到 85% 以上項目為 2 分（滿分 4 分）以上的門檻，由獨立第三方稽核機構驗證。'
          },
          {
            type: 'single',
            question: 'CCOF／USDA 有機認證中，土地須經過幾年的「轉型期」才能取得完整有機認證？',
            options: ['A. 1 年', 'B. 2 年', 'C. 3 年', 'D. 5 年'],
            correct: 2,
            explanation: '土地必須連續 3 年不含禁用的合成化學物質，才能取得完整的 USDA 有機認證。CCOF 另設「Certified Transitional」過渡標章，供轉型滿 1 年以上的農場申請，作為邁向完整認證的階段性認可。'
          },
          {
            type: 'single',
            question: '野火「煙霧污染（Smoke Taint）」為何難以在採收前以感官方式判斷？',
            options: ['A. 野火發生的季節與採收季完全不重疊', 'B. 揮發性酚類化合物在果皮中會迅速與糖分結合形成無味的糖苷，直到發酵中才水解釋出煙燻風味', 'C. 煙霧只影響葡萄外觀，不影響風味', 'D. 現有檢測技術無法偵測任何煙霧化合物'],
            correct: 1,
            explanation: '野火煙霧中的 Guaiacol、4-Methylguaiacol 等揮發性酚類被葡萄皮吸收後，迅速與糖分結合形成穩定但無味的糖苷（Glycoconjugates），因此採收前難以透過氣味或口感察覺。這些糖苷要到發酵過程中被酵母/酵素水解，或瓶陳中經酸催化水解，才會釋出游離態的煙燻/燒焦風味。'
          },
          {
            type: 'single',
            question: 'UC Davis 研究指出，氣溫每上升 1°C，加州葡萄採收期平均會提前多久？',
            options: ['A. 約 1 天', 'B. 約 6 天', 'C. 約 20 天', 'D. 約 2 個月'],
            correct: 1,
            explanation: 'UC Davis 的研究發現，即使只是 1°C 的氣溫上升，也能使採收時間平均提前約 6 天，反映出氣候變遷對葡萄物候期（Phenology）的顯著且可量化的影響。'
          },
          {
            type: 'single',
            question: 'Whole Cluster Fermentation（整串發酵）對加州 Pinot Noir 的主要效果是什麼？',
            options: ['A. 增加酒精度', 'B. 增加複雜的香料感，並帶來更柔和圓潤的整體口感', 'C. 降低葡萄酒的陳年潛力', 'D. 使葡萄酒顏色更深'],
            correct: 1,
            explanation: 'Whole Cluster Fermentation 在葡萄梗完全成熟的前提下，可以增加葡萄酒的香料複雜度（來自梗中的多酚），並通過發酵過程中產生的 CO₂ 提高 pH 值，帶來更圓潤柔和的整體口感。'
          },
          {
            type: 'single',
            question: '以下哪一項是 CCSW、SIP Certified、Napa Green 三者「共同」的稽核邏輯特徵，且與 CCOF/Demeter 有本質區別？',
            options: ['A. 三者都完全禁止使用任何合成農藥', 'B. 三者都以整體量化評分／整合式病蟲害管理原則為核心，允許有限度使用特定資材，而非單一禁用清單', 'C. 三者都只適用於 Napa Valley 產區', 'D. 三者都不需要第三方稽核'],
            correct: 1,
            explanation: 'CCSW、SIP Certified、Napa Green 的核心邏輯是「整體永續評分」搭配整合式病蟲害管理（IPM）原則，允許在有明確紀錄與決策依據的前提下有限度使用特定資材；而 CCOF/USDA Organic 與 Demeter Biodynamic 則是以「禁用清單」為核心，全面禁止合成農藥與化肥。'
          },
          {
            type: 'single',
            question: '加州釀酒師採用「夜間採收（Night Harvest）」的主要技術理由是什麼？',
            options: ['A. 避免白天遊客參觀影響作業', 'B. 降低葡萄採收溫度、減少氧化並保留芳香族化合物，同時降低人力中暑風險', 'C. 夜間葡萄糖分會神奇地增加', 'D. 法規強制規定必須夜間採收'],
            correct: 1,
            explanation: '夜間（清晨 2–6 點）採收可將葡萄溫度從白天的 35°C 左右降至約 15°C，大幅減少氧化並保留芳香族化合物，同時讓大型機械採收作業更有效率、降低人力在高溫下工作的中暑風險，是現代加州頂級酒莊因應氣候變遷高溫挑戰的標準做法。'
          }
        ]
      }
    }
  }
]
