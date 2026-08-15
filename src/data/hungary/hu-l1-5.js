/**
 * HU L1-5 五大產區群巡禮：從托卡伊到維拉尼的風格之旅
 * （地理與氣候見 L1-2；本課聚焦每個產區群的「代表酒款與個性」）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利產區群巡禮',
    subtitle: '從托卡伊的甜酒到維拉尼的紅酒：一場風格之旅',
    icon: '🗾',
    background: 'linear-gradient(135deg, #2c3e50 0%, #4a1942 100%)'
  },
  {
    component: 'HungaryRegionMapSlide',
    title: '匈牙利 22 個法定產區：巡禮起點',
    componentProps: {
      mapRegion: 'all',
      description: '本課將以「風格之旅」的方式走訪匈牙利各產區群——重點不在地理座標，而在每個地方「喝起來像什麼」。準備好從東北角的托卡伊出發了嗎？'
    }
  },
  {
    title: '第一站：托卡伊——甜酒之王與干白新星',
    highlights: [
      { id: 1, icon: '🍯', title: '身分認同', content: '提到托卡伊，多數人立刻想到 Tokaji Aszú——但今日的托卡伊其實是「雙重身分」：傳奇甜酒 + 崛起中的干型 Furmint' },
      { id: 2, icon: '👑', title: '甜酒的個性', content: 'Aszú 的口感從不是「膩甜」，而是蜂蜜、杏桃、橙皮蜜餞包裹著托卡伊招牌的刀鋒般酸度，甜而不厚' },
      { id: 3, icon: '⛰️', title: '干白的個性', content: '干型 Furmint 走的是完全不同的路線：燧石礦物、青蘋果、白花，年輕時緊繃，陳年後可媲美白布根地' },
      { id: 4, icon: '📚', title: '深度學習', content: '托卡伊的貴腐機制、Puttonyos 分級與歷史，將在下一課（L1-6）完整深入探討' }
    ],
    content: `<div class="region-tour-stop">
      <p class="lead-text">如果匈牙利葡萄酒地圖是一本書，托卡伊永遠是開篇第一章——世界最古老的貴腐甜酒產區，如今也是最令人期待的干白新戰場。</p>
      <div class="tour-taste-card">
        <h4>🍷 一次認識托卡伊的兩種面貌</h4>
        <div class="taste-compare">
          <div class="taste-col sweet">
            <h5>🍯 甜：Tokaji Aszú</h5>
            <p>蜂蜜、杏桃醬、橙皮蜜餞、薑與肉桂的層層堆疊，殘糖高卻因超高酸度而顯得清新，是「甜而不膩」的教科書範例。</p>
          </div>
          <div class="taste-col dry">
            <h5>🌊 干：Furmint Száraz</h5>
            <p>青蘋果、萊姆、白堊礦石，年輕時如刀鋒般銳利，陳年 10 年後轉化出蜂蠟與烤堅果，逐漸展現布根地般的深度。</p>
          </div>
        </div>
      </div>
      <div class="estate-list-box">
        <h4>🏰 值得記住的名字</h4>
        <div class="estate-list">
          <span>Royal Tokaji</span>
          <span>Oremus（Vega Sicilia）</span>
          <span>Disznókő（AXA）</span>
          <span>Patricius</span>
          <span>Sauska</span>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: '第二站：北匈牙利——公牛血的故鄉',
    componentProps: {
      mapRegion: 'Eger',
      description: '埃格爾（Eger）位於 Bükk 山脈腳下，流紋岩凝灰土丘陵賦予紅酒獨特的礦物質感，是 Egri Bikavér（公牛血）的誕生地'
    }
  },
  {
    title: '第二站：北匈牙利——公牛血與親民白酒',
    highlights: [
      { id: 1, icon: '🐂', title: 'Eger 的個性', content: '辛香料感十足的紅酒混釀，紅色漿果、丁香胡椒、菸草，中等酒體卻有結構感，是匈牙利辨識度最高的紅酒風格' },
      { id: 2, icon: '🌾', title: 'Mátra 的個性', content: '匈牙利面積最大的產區，走的是完全不同的路線——大量、親民、清爽的日常白酒，Olaszrizling 與 Muscat 是主力' },
      { id: 3, icon: '🏔️', title: 'Bükk 的個性', content: '三兄弟中最小最涼，高酸清爽的白酒風格，近年以原生品種保育計畫受到關注' },
      { id: 4, icon: '🎭', title: '一區三種表情', content: '同一產區群內，Eger 主打紅酒個性、Mátra 主打日常實惠、Bükk 主打小眾精緻——這正是「產區群」概念的意義' }
    ],
    content: `<div class="region-tour-stop">
      <p>北匈牙利由 Eger、Mátra、Bükk 三個相鄰產區組成，但風格分工明確：如果說 Eger 是這個產區群的「明星」，Mátra 就是「糧倉」，Bükk 則是「實驗室」。</p>
      <div class="sub-regions">
        <div class="sub-region">
          <h4>🐂 埃格爾（Eger）</h4>
          <p>Egri Bikavér 是多品種混釀（至少混合 3 種葡萄，Kékfrankos 通常占比最高），設有 Classicus／Superior／Grand Superior 三級品質認證。白酒方面，礦物感十足的 Egri Leányka 同樣值得留意。</p>
        </div>
        <div class="sub-region">
          <h4>🌾 馬特拉（Mátra）</h4>
          <p>全國面積最大的葡萄酒產區，以量產親民的芳香系白酒（Irsai Olivér、Cserszegi Fűszeres）供應日常市場，近年也開始有精品酒莊嘗試有機農法與單一園表現。</p>
        </div>
        <div class="sub-region">
          <h4>🏔️ 比科（Bükk）</h4>
          <p>海拔最高、氣候最涼，清爽高酸白酒為主，是原生品種保護與實驗性種植的重要基地。</p>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: '第三站：西外多瑙——隱藏的第六塊拼圖',
    componentProps: {
      mapRegion: 'Sopron',
      description: '索普隆（Sopron）緊鄰奧地利邊境，Fertő 湖（Neusiedlersee）調節氣候，石灰岩與片岩土壤孕育了匈牙利最優雅的 Kékfrankos'
    }
  },
  {
    title: '第三站：西外多瑙——常被忽略的第六塊拼圖',
    highlights: [
      { id: 1, icon: '🇦🇹', title: '索普隆（Sopron）', content: '匈牙利歷史最悠久的產區之一，緊鄰奧地利邊境，被稱為「Kékfrankos 之都」，風格優雅、辛香料感明顯，酒莊招牌甚至有德文' },
      { id: 2, icon: '⛪', title: '潘諾恩哈爾馬（Pannonhalma）', content: '西元 996 年創立的本篤會大修道院，擁有歐洲最悠久的釀酒傳統之一，以芬芳的 Olaszrizling、Sauvignon Blanc、Tramini 著稱' },
      { id: 3, icon: '🏭', title: '內斯梅伊（Neszmély）', content: '匈牙利最現代化的白酒生產基地之一，以清爽芳香白酒大量出口英國超市聞名，是許多歐洲人第一次接觸匈牙利葡萄酒的入口' },
      { id: 4, icon: '🍾', title: '埃泰克－布達（Etyek-Buda）', content: '匈牙利氣泡酒（Pezsgő）的心臟地帶，石灰岩土壤與涼爽氣候近似香檳區，1882 年 Törley 在此開創了匈牙利氣泡酒工業' }
    ],
    content: `<div class="region-tour-stop">
      <p class="lead-text">多數關於匈牙利葡萄酒的介紹只談「五大產區群」，但布達佩斯西側與西北邊境其實藏著一整片風格迥異的產區——這裡沒有貴腐甜酒，也沒有波爾多式紅酒，主角是優雅紅酒、氣泡酒與修道院白酒。</p>
      <div class="hidden-regions">
        <div class="hidden-region">
          <h4>🇦🇹 索普隆（Sopron）——Kékfrankos 之都</h4>
          <p>索普隆與奧地利只有一線之隔，Fertő 湖（跨境的 Neusiedlersee）調節溫度，石灰岩與片岩土壤讓 Kékfrankos 占了當地種植面積約三分之二。這裡的風格比 Eger 更輕盈優雅，帶明顯的酸櫻桃與辛香料感，與一河之隔的奧地利 Blaufränkisch 幾乎是同宗兄弟——當地甚至保留了奧地利式的「Buschenschank」（酒農自營小酒館）文化。</p>
        </div>
        <div class="hidden-region">
          <h4>⛪ 潘諾恩哈爾馬（Pannonhalma）——千年修道院酒莊</h4>
          <p>潘諾恩哈爾馬本篤會大修道院創立於西元 996 年，早在 1002 年的建院文獻中就已記載葡萄為什一稅作物，是歐洲最悠久的釀酒傳統之一。二戰後葡萄園一度被充公，直到 2003 年修道院酒莊才重新復興。如今以芬芳的 Olaszrizling、Sauvignon Blanc 和 Tramini（Gewürztraminer）著稱，是「修道院葡萄酒」在匈牙利最鮮活的例子。</p>
        </div>
        <div class="hidden-region">
          <h4>🏭 內斯梅伊（Neszmély）——出口先鋒</h4>
          <p>多瑙河河灣涼爽氣候搭配大規模現代化設備，Neszmély 是匈牙利對外出口量最大的白酒產區之一，主打清爽芳香、平易近人的風格（Irsai Olivér、Cserszegi Fűszeres），許多英國超市貨架上的「匈牙利白酒」都來自這裡。</p>
        </div>
        <div class="hidden-region">
          <h4>🍾 埃泰克－布達（Etyek-Buda）——氣泡酒之心</h4>
          <p>Etyek-Buda 的石灰岩土壤與涼爽氣候是匈牙利境內最接近香檳區風土的地方。1882 年，József Törley 在布達佩斯南郊的 Budafok 開設酒廠，把香檳式釀造技術帶回匈牙利，一戰前匈牙利氣泡酒（Pezsgő）產量一度僅次於法國。2017 年，當地酒莊更成立了「Etyeki Pezsgő」自願性法定產區，要求瓶中陳年至少 24 個月。</p>
        </div>
      </div>
      <div class="note-box">
        <p>📌 這片區域官方上被歸入「Upper Pannon（上潘諾尼亞）」產區群，但因為規模較小，常在簡化的「五大產區群」介紹中被省略——認識它，能讓你的匈牙利葡萄酒地圖更完整。</p>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: '第四站：潘農——匈牙利紅酒首都',
    componentProps: {
      mapRegion: 'Villany',
      description: '維拉尼（Villány）位於匈牙利最南端，年均氣溫全國最高，石灰岩紅色黏土地形孕育了匈牙利最偉大的紅酒'
    }
  },
  {
    title: '第四站：潘農——濃郁紅酒的南方基地',
    highlights: [
      { id: 1, icon: '☀️', title: '最溫暖的產區群', content: '維拉尼年均氣溫約 11.6°C，是匈牙利最溫暖的葡萄酒產區，波爾多品種在此充分成熟' },
      { id: 2, icon: '🏆', title: '維拉尼的個性', content: '黑醋栗、黑李、紫羅蘭、鉛筆芯，單寧絲滑，是「Villányi Franc」認證酒款的招牌風格' },
      { id: 3, icon: '🐂', title: '塞克薩德的個性', content: 'Kadarka 比例更高，帶玫瑰水與東方辛香料的芬芳，風格比 Egri Bikavér 更圓潤柔美' },
      { id: 4, icon: '🏛️', title: '佩奇（Pécs）', content: '匈牙利歷史最悠久的城市之一，羅馬時期已有種植葡萄的紀錄，現代則以親民紅白酒和地區餐酒為主' }
    ],
    content: `<div class="region-tour-stop">
      <p>潘農地區是匈牙利紅酒的心臟地帶，地中海氣候影響明顯，讓波爾多品種（Cabernet Franc、Merlot）能達到世界級成熟度。</p>
      <div class="pannon-regions">
        <div class="pannon-region villany">
          <h4>🏆 維拉尼（Villány）</h4>
          <ul>
            <li>年均氣溫：約 11.6°C（全國最高）</li>
            <li>土壤：石灰岩 + 紅色黏土</li>
            <li>代表品種：Cabernet Franc, Merlot, Cabernet Sauvignon</li>
            <li>頂級酒款：Villányi Franc（官方認證，2014 年建立）</li>
            <li>代表酒莊：Bock, Gere, Malatinszky, Vylyan</li>
          </ul>
        </div>
        <div class="pannon-region szekszard">
          <h4>🍷 塞克薩德（Szekszárd）</h4>
          <ul>
            <li>丘陵黃土地形，保溫性好</li>
            <li>代表品種：Kékfrankos, Kadarka, Cabernet Franc</li>
            <li>頂級酒款：Szekszárdi Bikavér, 濃郁 Kékfrankos</li>
            <li>代表酒莊：Dúzsi, Heimann, Sebestyén</li>
          </ul>
        </div>
      </div>
      <div class="note-box">
        <p>📌 鄰近的托爾納（Tolna）與佩奇（Pécs）也屬於這個產區群，風格上更輕盈日常，是南部溫暖氣候帶的延伸角色。</p>
      </div>
    </div>`
  },
  {
    title: '第五站：巴拉頓與多瑙河——湖光與沙地',
    highlights: [
      { id: 1, icon: '🌊', title: '巴拉頓湖（Balaton）', content: '中歐最大淡水湖，水體調節氣溫，Badacsony 的玄武岩火山土是獨特白酒的搖籃' },
      { id: 2, icon: '🌋', title: 'Badacsony 火山', content: '巴拉頓湖北岸的玄武岩火山丘，Olaszrizling 和 Szürkebarát 的礦物感表現舉世無雙' },
      { id: 3, icon: '🌾', title: '多瑙河平原（Duna）', content: 'Kunság、Hajós-Baja、Csongrád 以廣大的沙質平原為主，以量產親民餐酒著稱' },
      { id: 4, icon: '🧂', title: '沙地的歷史意義', content: '多瑙河平原的沙質土壤在 19 世紀根瘤蚜蟲（Phylloxera）侵害時保護了大部分葡萄樹' }
    ],
    content: `<div class="region-tour-stop">
      <div class="balaton-section">
        <h4>🌊 巴拉頓地區（5 個產區）</h4>
        <div class="balaton-regions">
          <div><strong>Badacsony</strong>：玄武岩火山土，礦物感強，Olaszrizling/Szürkebarát 最佳</div>
          <div><strong>Balatonfüred-Csopak</strong>：石灰岩，清爽高酸，精緻白酒</div>
          <div><strong>Balatonboglár</strong>：湖南岸，較溫暖，可種植波爾多品種</div>
          <div><strong>Balaton-felvidék</strong>：火山土，高海拔，涼爽清新風格</div>
          <div><strong>Somló</strong>（技術上獨立）：孤立火山，Juhfark 稀少名品</div>
        </div>
      </div>
      <div class="duna-section">
        <h4>🌾 多瑙河平原（3 個產區）</h4>
        <p>Kunság、Hajós-Baja 和 Csongrád 組成了匈牙利最大的葡萄種植區（按面積），以廣大的沙質平原為主要地貌，出產匈牙利最大量的日常餐酒。雖然風格不如其他產區精緻，但沙地在 19 世紀根瘤蚜蟲肆虐時期意外抵禦了蟲害，對保存匈牙利葡萄酒業起了關鍵作用。</p>
      </div>
    </div>`
  },
  {
    title: '巡禮總結：六大產區群風格速記卡',
    highlights: [
      { id: 1, icon: '🗺️', title: '風格導向的地圖', content: '與其死記地理座標，不如用「這裡喝起來像什麼」來記憶匈牙利產區——這是侍酒師面對客人提問時最實用的框架' },
      { id: 2, icon: '🍯', title: '甜酒 vs. 干白', content: '托卡伊同時擁有這兩種極端風格，是唯一「雙重身分」的產區群' },
      { id: 3, icon: '🐂', title: '公牛血 vs. 波爾多式紅酒', content: '北匈牙利的辛香混釀與潘農的絲滑波爾多品種，是匈牙利紅酒的兩大流派' },
      { id: 4, icon: '🍾', title: '氣泡酒與修道院酒', content: '西外多瑙常被忽略，卻擁有匈牙利唯一的氣泡酒重鎮與千年修道院酒莊傳統' }
    ],
    content: `<div class="region-tour-stop">
      <div class="summary-map">
        <h4>📊 六大產區群一覽（含常被忽略的西外多瑙）</h4>
        <table class="region-summary">
          <tr><th>產區群</th><th>代表產區</th><th>個性關鍵字</th></tr>
          <tr><td>🍯 托卡伊</td><td>Tokaj</td><td>貴腐甜酒之王 + 干白新星</td></tr>
          <tr><td>🐂 北匈牙利</td><td>Eger, Mátra, Bükk</td><td>公牛血辛香混釀 + 日常白酒</td></tr>
          <tr><td>🇦🇹 西外多瑙</td><td>Sopron, Pannonhalma, Etyek-Buda</td><td>優雅 Kékfrankos + 氣泡酒 + 修道院白酒</td></tr>
          <tr><td>☀️ 潘農</td><td>Villány, Szekszárd</td><td>絲滑波爾多式紅酒</td></tr>
          <tr><td>🌊 巴拉頓</td><td>Badacsony</td><td>玄武岩礦物白酒</td></tr>
          <tr><td>🌾 多瑙河</td><td>Kunság</td><td>沙地日常餐酒</td></tr>
        </table>
      </div>
      <div class="note-box">
        <p>下一課將帶你深入托卡伊的核心秘密——貴腐菌如何運作、Puttonyos 分級到底怎麼算，以及 21 世紀干型 Furmint 革命的來龍去脈。</p>
      </div>
    </div>`
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
            question: '托卡伊產區群為什麼被稱為「雙重身分」的產區？',
            options: ['A. 因為它同時屬於匈牙利和斯洛伐克兩國', 'B. 因為它既是世界頂級貴腐甜酒的故鄉，也是崛起中的干型 Furmint 新戰場', 'C. 因為它同時種植紅葡萄和白葡萄各半', 'D. 因為它有兩個完全不同的官方名稱'],
            correct: 1,
            explanation: '托卡伊最獨特之處在於它同時擁有兩種截然不同的酒款身分：傳統上以 Tokaji Aszú 貴腐甜酒聞名於世（甜而不膩、蜂蜜杏桃香氣），但 21 世紀以來，干型 Furmint 憑藉高酸礦物感和陳年潛力異軍突起，成為國際市場矚目的新星。這種「一區兩極」的風格組合在世界產區中相當罕見。'
          },
          {
            type: 'single',
            question: '索普隆（Sopron）為什麼被稱為「Kékfrankos 之都」？',
            options: ['A. 因為它是匈牙利唯一種植 Kékfrankos 的產區', 'B. 因為 Kékfrankos 佔了當地種植面積約三分之二，且風格與一河之隔的奧地利 Blaufränkisch 一脈相承', 'C. 因為索普隆的酒莊全部由奧地利人經營', 'D. 因為 Kékfrankos 這個品種名字最早源自索普隆'],
            correct: 1,
            explanation: '索普隆緊鄰奧地利邊境，Fertő 湖（跨境的 Neusiedlersee）調節氣候，石灰岩與片岩土壤讓 Kékfrankos 佔了當地種植面積約三分之二。這裡的風格優雅精緻，與奧地利的 Blaufränkisch 幾乎是同宗兄弟，當地甚至保留了奧地利式的「Buschenschank」酒農小酒館文化，因此被稱為「Kékfrankos 之都」。'
          },
          {
            type: 'single',
            question: '埃泰克－布達（Etyek-Buda）在匈牙利葡萄酒版圖中扮演什麼角色？',
            options: ['A. 匈牙利最大的貴腐甜酒產區', 'B. 匈牙利氣泡酒（Pezsgő）的心臟地帶，石灰岩與涼爽氣候近似香檳區', 'C. 匈牙利唯一種植 Cabernet Franc 的產區', 'D. 匈牙利面積最大的日常餐酒供應地'],
            correct: 1,
            explanation: 'Etyek-Buda 的石灰岩土壤與涼爽氣候是匈牙利境內最接近香檳區風土的地方。1882 年 József Törley 在布達佩斯南郊的 Budafok 開設酒廠，帶回香檳式釀造技術，一戰前匈牙利氣泡酒產量一度僅次於法國。2017 年當地酒莊更成立了「Etyeki Pezsgő」自願性法定產區，要求瓶中陳年至少 24 個月。'
          },
          {
            type: 'single',
            question: '維拉尼（Villány）與塞克薩德（Szekszárd）同屬潘農產區群，兩者風格上最大的差異是什麼？',
            options: ['A. 維拉尼只產白酒，塞克薩德只產紅酒', 'B. 維拉尼以絲滑的波爾多式 Cabernet Franc 著稱，塞克薩德則因 Kadarka 比例較高而帶有更多玫瑰與東方辛香料的芬芳', 'C. 維拉尼氣候比塞克薩德涼爽許多', 'D. 塞克薩德不允許使用 Kékfrankos 品種'],
            correct: 1,
            explanation: '維拉尼是全國年均氣溫最高的產區，波爾多品種（尤其 Cabernet Franc）在此充分成熟，展現黑醋栗、紫羅蘭、絲滑單寧的風格，並建立了「Villányi Franc」官方認證。塞克薩德的 Szekszárdi Bikavér 則因保留較高比例的 Kadarka，帶有更明顯的玫瑰水與東方辛香料氣息，整體風格比北方的 Egri Bikavér 更圓潤柔美。'
          }
        ]
      }
    }
  }
]
