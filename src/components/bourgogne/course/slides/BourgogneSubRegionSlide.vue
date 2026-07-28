<template>
  <div class="bourgogne-subregion-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '布根地六大子產區總覽' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="region-cards">
      <div
        v-for="region in regions"
        :key="region.key"
        class="region-card"
        :class="{ active: activeKey === region.key }"
        :style="{ borderTopColor: region.color, '--region-color': region.color }"
        @click="activeKey = region.key"
      >
        <div class="card-emoji">{{ region.emoji }}</div>
        <h3>{{ region.name }}</h3>
        <p class="card-tagline">{{ region.tagline }}</p>
        <div class="card-tags">
          <span class="tag">{{ region.area }}</span>
          <span class="tag tag-grape">{{ region.signature }}</span>
        </div>
      </div>
    </div>

    <div class="region-detail" :style="{ borderColor: activeRegion.color }">
      <div class="detail-header">
        <h3>{{ activeRegion.emoji }} {{ activeRegion.name }}</h3>
        <span class="climate-badge" :style="{ backgroundColor: activeRegion.color }">
          {{ activeRegion.climate }}
        </span>
      </div>

      <p class="detail-intro">{{ activeRegion.summary }}</p>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>📐 規模與地理</h4>
          <ul>
            <li><strong>面積：</strong>{{ activeRegion.area }}</li>
            <li><strong>位置：</strong>{{ activeRegion.location }}</li>
            <li><strong>主要村莊：</strong>{{ activeRegion.villages }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🪨 風土特色</h4>
          <ul>
            <li><strong>土壤：</strong>{{ activeRegion.soils }}</li>
            <li><strong>氣候：</strong>{{ activeRegion.climateDetail }}</li>
            <li><strong>海拔：</strong>{{ activeRegion.elevation }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🍇 葡萄品種</h4>
          <ul>
            <li><strong>主品種：</strong>{{ activeRegion.signature }}</li>
            <li><strong>其他：</strong>{{ activeRegion.otherGrapes }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🏆 代表 AOC / Cru</h4>
          <ul>
            <li v-for="(aoc, i) in activeRegion.appellations" :key="i">{{ aoc }}</li>
          </ul>
        </div>
        <div class="detail-block full-width">
          <h4>🍷 風格與重點</h4>
          <p>{{ activeRegion.style }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const defaultRegions = [
  {
    key: 'chablis',
    name: 'Chablis ＋ Grand Auxerrois',
    emoji: '🥂',
    color: '#5BA89F',
    tagline: '北方的礦物精靈——純粹 Chardonnay 之外，還有大歐塞瓦的多元品種飛地',
    area: 'Chablis 依分級各異：Petit Chablis 729 ha、Chablis 3,340 ha、Premier Cru 767 ha、Grand Cru 97 ha（合計約 4,900 ha）；大歐塞瓦（Grand Auxerrois）各村鎮零散分布，Irancy 164 ha、Saint-Bris 133 ha 為其中最大者',
    location: '布根地最北端，巴黎南方 180 km；大歐塞瓦環繞 Auxerre 市與 Yonne 河谷，Joigny 的 Côte Saint Jacques 是布根地葡萄園最北端',
    villages: 'Chablis、Chichée、Fyé、Préhy、Beines（Chablis）；Irancy、Saint-Bris-le-Vineux、Vézelay、Chitry、Épineuil、Coulanges-la-Vineuse（大歐塞瓦）',
    climate: '涼爽大陸',
    climateDetail: '霜害風險高，威脅期可持續至五月中旬（「冰霜聖人節」）；重大霜災年份包括 1887、1957、1961 年——1957 年，100 ha 的特級園坡地僅產出 1 公石葡萄酒；常見防霜法為噴灌（讓水結冰包覆葡萄芽以隔絕更低溫）、暖爐、蠟燭與防霜風車',
    elevation: '120–250 m',
    soils: 'Chablis：沉積成因黏土石灰質，年代橫跨上侏儸紀至下白堊紀；一級園與特級園全數座落於中、上啟莫里階（Kimmeridgian）泥灰岩與石灰岩之上，因富含小牡蠣化石 Exogyra virgula 而成為夏布利風土的經典標誌，Petit Chablis 則多在地勢較高的提通階（Tithonien／Barrois）硬質石灰岩高原；大歐塞瓦以侏儸紀黏土石灰質為主，Saint-Bris 則座落於堅硬的波特蘭階（Barrois）石灰岩之上',
    signature: 'Chardonnay（Chablis 100%，當地又稱 Beaunois；大歐塞瓦以黑皮諾與夏多內為主）',
    otherGrapes: 'Saint-Bris：白蘇維濃／灰蘇維濃——布根地唯一非夏多內／黑皮諾／阿里哥蝶的法定產區；Irancy：黑皮諾 + 少量凱撒（César，個性強烈的古老品種）',
    appellations: [
      'Petit Chablis（729 ha）、Chablis（3,340 ha）——皆為村莊級，Chablis 可加註村鎮名',
      'Chablis Premier Cru（767 ha，約 17 個主要一級園：Fourchaume、Montée de Tonnerre、Mont de Milieu、Vaillons、Montmains 等）',
      'Chablis Grand Cru（97 ha，7 個，沿 Serein 河左岸新月形分布：Les Clos 26 ha 最大、Vaudésir、Bougros、Valmur、Blanchots、Preuses、Grenouilles 9.4 ha 最小）',
      '非正式「第八特級園」La Moutonne（2.35 ha，橫跨 Preuses 與 Vaudésir，隸屬 Bichot 酒莊集團）',
      'Irancy（164 ha，僅產紅酒，黑皮諾 + 凱撒，無一級園）',
      'Saint-Bris（133 ha，僅產白酒，布根地唯一蘇維濃法定產區）',
      'Vézelay（僅產白酒）、Bourgogne Épineuil（紅／粉紅）、Bourgogne Chitry、Bourgogne Coulanges-la-Vineuse、Bourgogne Côtes d\'Auxerre、Bourgogne Tonnerre',
      'Joigny：Bourgogne Côte Saint Jacques，布根地葡萄園最北端的產區'
    ],
    style: '骨感乾型、極高酸度、白堊礦物、青蘋果與檸檬皮、燧石煙燻調（俗稱「燧石味 goût de pierre à fusil」）。特級園各具個性：Les Clos 最飽滿深邃、結構最堅實，公認代表性最高；Vaudésir 與 Les Clos 並稱「特級園中的特級園」，酸度靈動細膩；Valmur 結構紮實帶絲滑質地；Grenouilles 圓潤與優雅兼具；Preuses 最柔美易親近；Bougros 豐潤強健、年輕時稍顯粗獷；Blanchots 花香細緻、礦物感強烈。陳年 20+ 年。大歐塞瓦風格則多元：Irancy 紅酒依凱撒比例呈現不同濃淡，黑皮諾主導款年輕（2–3 年）即可飲用；Saint-Bris 白酒帶黑醋栗芽苞、黃楊木等植物香氣與異國果香，是布根地少見的蘇維濃風格。',
    summary: 'Chablis 是布根地最北的飛地，地理上更接近香檳區，不過桶、強調 Kimmeridgian 泥灰岩（以化石 Exogyra virgula 為標誌）的礦物張力，被視為 Chardonnay 純粹度的標竿。大歐塞瓦（Grand Auxerrois）則是環繞 Auxerre 市的多元小產區群，以 Irancy 紅酒與 Saint-Bris 蘇維濃白酒最具代表性，是布根地品種最多元的角落。'
  },
  {
    key: 'cote-de-nuits',
    name: 'Côte de Nuits',
    emoji: '🍒',
    color: '#7B1F2A',
    tagline: '紅酒之王國——Pinot Noir 最深沉表達',
    area: '南北向約 25 km（第戎南方至 Corgoloin 南界），寬度很少超過 800 m，部分地段僅 200–300 m',
    location: '第戎（Dijon）南方，Côte d\'Or 北段；Marsannay 雖行政上歸類於此，地理上其實屬於「第戎丘」（Côte Dijonnaise）',
    villages: 'Marsannay、Fixin、Gevrey-Chambertin、Morey-Saint-Denis、Chambolle-Musigny、Vougeot、Vosne-Romanée、Nuits-Saint-Georges',
    climate: '溫和大陸',
    climateDetail: '春季易霜害；正處於黑皮諾成熟度的北方極限——Gevrey-Chambertin 以北已鮮少產出偉大葡萄酒（Fixin 的 Clos de la Perrière 為少數例外）',
    elevation: '220–350 m',
    soils: '侏儸紀巴柔階（Bajocien）、巴通階（Bathonien）、卡洛夫階（Callovien）三層石灰岩為主，形成多石棕色石灰質土壤；山谷沖積扇讓部分葡萄園（如 Gevrey-Chambertin）得以向平原邊緣延伸',
    signature: 'Pinot Noir（紅酒主導）',
    otherGrapes: '少量 Chardonnay（如 Musigny Blanc、Vougeot Blanc）',
    appellations: [
      '24 個 Grand Cru（占布根地 24/33），除 Corton 外全部紅酒特級園都在此區',
      'Chambertin 系列 8 座集中 Gevrey-Chambertin：Chambertin、Chambertin-Clos de Bèze、Latricières、Chapelle、Charmes／Mazoyères、Griotte、Mazis、Ruchottes',
      'Morey-Saint-Denis：Clos de la Roche、Clos Saint-Denis、Clos des Lambrays、Clos de Tart，以及與 Chambolle 共享的 Bonnes Mares',
      'Chambolle-Musigny：Musigny（夜丘唯一兼產紅白兩色的特級園）；Vougeot：Clos de Vougeot（現逾 85 位莊主共同持有）',
      'Vosne-Romanée／Flagey-Échézeaux：Romanée-Conti、La Tâche、Richebourg、La Romanée（僅 0.85 ha，法國最小法定產區）、Romanée-Saint-Vivant、La Grande Rue、Échézeaux、Grands Échézeaux',
      '146 個 Premier Cru，Village AOC 8 個；特別的是 Nuits-Saint-Georges 本身並無特級園'
    ],
    style: '結構紮實、單寧深沉、紅黑色水果、香料、礦物與森林地表。陳年 20–50 年。世界最頂級 Pinot Noir 集中於此（DRC、Leroy、Rousseau 等）。每個 climat 因坡度、坡向、土壤組成微妙差異而展現截然不同個性——Chambertin 剛柔並濟、Musigny 細膩如絲、Richebourg 狂野強勁、La Tâche 均衡完整。',
    summary: 'Côte de Nuits 是 Pinot Noir 的世界中心。從第戎南方到 Corgoloin 約 25 km 長、寬度常不到 800 m，幾乎所有頂級 Grand Cru 都集中於此。這裡的 Pinot 結構最緊密、陳年潛力最強。'
  },
  {
    key: 'cote-de-beaune',
    name: 'Côte de Beaune',
    emoji: '🌼',
    color: '#D4A574',
    tagline: '白酒帝國——Montrachet 之鄉',
    area: '南北向約 25 km（北起 Ladoix-Serrigny，南至 Maranges）',
    location: '絕大部分位於 Côte d\'Or 省，Maranges 部分則位於 Saône-et-Loire 省；Beaune 市為布根地葡萄酒業核心',
    villages: 'Ladoix-Serrigny、Aloxe-Corton、Beaune、Pommard、Volnay、Meursault、Puligny-Montrachet、Chassagne-Montrachet、Santenay',
    climate: '溫和大陸',
    climateDetail: '比 Côte de Nuits 略暖、地勢較開闊；南端 Santenay、Maranges 一帶泥灰岩比例降低、黑皮諾風格轉趨接近 Côte de Nuits',
    elevation: '200–400 m（各村鎮略有差異，如 Aloxe-Corton 240–330 m、Montrachet 250–270 m）',
    soils: '以石灰岩與泥灰岩為主，地層橫跨侏儸紀上中下三層；Meursault、Montrachet 一級園多座落於巴通階（Bathonien）堅硬石灰岩基盤，Chevalier-Montrachet 上坡則為巴柔階（Bajocien）泥灰岩形成的輕質壤土型石灰岩土',
    signature: 'Chardonnay + Pinot Noir（白紅並重）',
    otherGrapes: 'Aligoté（少量）',
    appellations: [
      '8 個 Grand Cru，全數集中兩處：',
      'Corton／Corton-Charlemagne：橫跨 Ladoix-Serrigny、Pernand-Vergelesses、Aloxe-Corton 三村，唯獨 Corton 可為白酒或紅酒',
      'Montrachet／Chevalier-Montrachet／Bâtard-Montrachet／Bienvenues-Bâtard-Montrachet／Criots-Bâtard-Montrachet：橫跨 Puligny-Montrachet 與 Chassagne-Montrachet 兩村，皆僅產白酒',
      '300+ Premier Cru（如 Beaune 約 42 個、Volnay 與 Chassagne-Montrachet 各約 30 個）',
      'Village AOC 約 20 餘個，含 Ladoix、Pommard、Volnay、Meursault、Saint-Aubin、Santenay 等'
    ],
    style: '白酒：飽滿圓潤、橡木桶協調、烤堅果、白花、奶油與礦物。Meursault 較豐潤；Chassagne 兼具力道與圓潤，售價常低於鄰近的 Puligny、Meursault；Corton-Charlemagne 堪稱世界最偉大白酒之一，力道十足、陳年潛力可媲美紅酒 Corton。紅酒：Pommard 單寧最為厚實、酒體強健；Volnay 是伯恩丘中最細膩優雅的酒款，看似柔美卻暗藏陳年潛力；南端 Santenay、Maranges 結構分明、性價比出色。Montrachet 被視為世界最頂級 Chardonnay 葡萄園。',
    summary: 'Côte de Beaune 比北邊的 Côte de Nuits 更多元——Pinot Noir 在 Pommard、Volnay、Aloxe-Corton 表現精彩，Chardonnay 則在 Meursault、Puligny、Chassagne 與 Montrachet 達到世界顛峰，是布根地白酒的心臟地帶。'
  },
  {
    key: 'cote-chalonnaise',
    name: 'Côte Chalonnaise',
    emoji: '🪙',
    color: '#9C7D5A',
    tagline: '性價比之星——五座村莊 AOP 各自成家',
    area: '南北向約 40 km（Remigny 至 Sercy）、東西寬僅 4–6 km，地形排列較 Côte d\'Or 不規則',
    location: 'Côte de Beaune 南方的延伸，Chalon-sur-Saône 西側；行政上屬 Saône-et-Loire 省',
    villages: 'Bouzeron、Rully、Mercurey、Givry、Montagny',
    climate: '溫和大陸',
    climateDetail: '氣候條件與 Côte d\'Or 相近，但坡面排列不規則、無連續山坡；不如 Mâconnais 山區具結構規律性',
    elevation: '230–320 m',
    soils: '三疊紀與侏儸紀地層為主，多為石灰質或泥灰質、部分帶白雲岩質，原則上排除棕色土與酸性棕色土；西側倚著 Charolais 結晶軸，於 Mont Saint Vincent 呈現明顯穹丘地形；Buxy 北側因花崗岩與砂岩出現明顯地質不連續帶',
    signature: 'Pinot Noir + Chardonnay 並重',
    otherGrapes: 'Aligoté（Bouzeron 為唯一 100% Aligoté 的 Village AOC，前身舊稱「Bourgogne Aligoté-Bouzeron」）',
    appellations: [
      '無 Grand Cru（全區皆無）',
      'AOP Bourgogne Côte Chalonnaise：44 個村鎮自 1990 年起可主張，白／紅／粉紅酒；另有專產粉紅酒的 AOP Bourgogne Clairet Côte Chalonnaise',
      'Bouzeron（無一級園）：僅產白酒，100% Aligoté',
      'Rully（357 ha，白＋紅）：一級園分布於 Rully 與 Chagny 兩村，如 La Renarde、Grésigny、Rabourcé、Clos Saint Jacques',
      'Mercurey（645 ha，2009年資料，白＋紅）：Côte Chalonnaise 的代表性法定產區，一級園眾多，如 Clos des Barraults、Clos Voyens、Clos du Château de Montaigu',
      'Givry（270 ha，2009年資料，白＋紅；紅酒以黑皮諾為主、夏多內混釀比例低於15%）：一級園如 Clos Salomon、Clos de la Baraude、Le Vigron',
      'Montagny（310 ha，2009年資料，僅白酒，100% Chardonnay）：共 49 個一級園，橫跨 Montagny、Buxy、Saint Vallerin、Jully-lès-Buxy 四村'
    ],
    style: '紅酒（主要來自 Mercurey、Givry、Rully）：果香奔放、單寧柔軟，Mercurey 具酒體與厚實中段口感（mâche）、一級園更見細緻、陳年實力佳；Givry 較質樸鄉土；Rully 亦兼產白酒。白酒：Bouzeron 的 Aligoté 帶礦物細緻香氣與豐富果香花香（蘋果、檸檬、洋槐花），通常適合年輕飲用；Rully、Mercurey、Givry 白酒風格較接近 Côte de Beaune，濃郁多汁、花果香豐富；Montagny 僅產白酒，榛果與近似白堊粉筆的礦物調性，加上杏仁、椴花與蜂蜜香氣，酒體飽滿、酸度均衡，適合海鮮與白肉料理，建議飲用溫度 10–11°C，陳年潛力 3–8 年。',
    summary: 'Côte Chalonnaise 是 Côte de Beaune 南方的延伸，但地形遠不如後者規律。五座主要村莊——Bouzeron、Rully、Mercurey、Givry、Montagny——各自擁有獨立的村莊級 AOP 與一級園體系（Bouzeron 除外，無一級園），整體不設 Grand Cru，是以親民價格認識布根地風土的理想入門產區。'
  },
  {
    key: 'maconnais',
    name: 'Mâconnais',
    emoji: '☀️',
    color: '#E8A040',
    tagline: '南方的溫暖白酒——Pouilly-Fuissé 為核心',
    area: '南北向約 50 km、東西寬約 15 km',
    location: '北接 Côte Chalonnaise（以 Sennecey-le-Grand／Tournus 一帶為界）、南至 Romanèche-Thorins 附近與 Beaujolais 交界、Lyon 以北',
    villages: 'Pouilly、Fuissé、Solutré、Vergisson、Vinzelles、Loché、Saint-Véran、Viré、Clessé、Mâcon',
    climate: '溫暖大陸偏地中海過渡',
    climateDetail: '布根地最溫暖區、成熟期較北方產區約提早 10 天；仍受春霜、夏季冰雹與偶發晨霧影響',
    elevation: '200–500 m（Solutré 與 Vergisson 兩座岩石高地海拔最高）',
    soils: '三類為主：石灰岩與泥灰岩（Fuissé、Vergisson 一帶）、黏土質石灰岩、以及當地稱為「belouzes」的粉紅色石灰質風化土（偏鹼性）',
    signature: 'Chardonnay（白酒主導 80%+）',
    otherGrapes: 'Gamay（南部少量，多為 Mâcon Rouge）、少量 Pinot Noir',
    appellations: [
      '無 Grand Cru',
      'Pouilly-Fuissé（2020 升級首批 22 個 Premier Cru）',
      'Pouilly-Vinzelles、Pouilly-Loché（面積小、緊鄰 Pouilly-Fuissé）',
      'Saint-Véran（環繞 Pouilly-Fuissé 南北兩側）',
      'Viré-Clessé（2 個村莊合併命名的獨立法定產區）',
      'Mâcon-Villages（可加註村莊名，如 Mâcon-Lugny、Mâcon-Viré）、Mâcon（地區級）'
    ],
    style: '白酒風格較溫暖飽滿、酒精偏高（13–13.5%）、果香奔放（杏桃、白桃、蜂蜜、金合歡花香），礦物較內斂。Pouilly-Fuissé 頂級酒款（如 Domaine Saumaize-Michelin、Olivier Merlin）可比 Côte de Beaune 中階白酒；Mâcon 等入門款則清爽多果香、適合早飲。',
    summary: 'Mâconnais 是布根地的「南方白酒帶」——氣候溫暖、Chardonnay 表現飽滿溫潤。Pouilly-Fuissé 在 2020 年正式建立 Premier Cru 體系，被視為下一個值得收藏的布根地產區。'
  },
  {
    key: 'beaujolais',
    name: 'Beaujolais',
    emoji: '🍇',
    color: '#8B3A4D',
    tagline: 'Gamay 的故鄉——花崗岩上的紅寶石',
    area: '南北縱距約 55 km、東西橫距約 15 km，橫跨 Rhône 與 Saône-et-Loire 兩省共 96 個村鎮',
    location: '布根地最南端，北起 Saône-et-Loire 省的 Chasselas／Leynes，南至 Rhône 省的 l\'Arbresle；與 Mâconnais 的分界相當模糊、難以明確界定；最高點 Saint-Rigaux 山，海拔 1,012 m',
    villages: 'Morgon、Fleurie、Moulin-à-Vent、Brouilly、Côte-de-Brouilly、Chénas、Chiroubles、Juliénas、Saint-Amour、Régnié',
    climate: '溫和大陸偏地中海',
    climateDetail: '同時受大陸型、海洋型、地中海型三種氣候影響，依季節輪流主導；海拔落差使同年份成熟期可相差 15 天；氣溫可在 -20°C 至 38°C 間劇烈波動',
    elevation: '200–500 m',
    soils: '北部（10 個 Cru 所在）：花崗岩、片麻岩、斑岩、頁岩，風化後形成當地俗稱「gore」的酸性砂質土，貧瘠但排水極佳；南部「金石區」（Pierres dorées）：黏土石灰質與砂岩為主，是 AOP Beaujolais 基礎法定產區所在地',
    signature: 'Gamay（98%）',
    otherGrapes: '輔助品種（僅限混植、比例上限 15%）：阿里哥蝶、夏多內、布根地香瓜；Beaujolais-Villages 另允許少量 Gamay de Bouze／Gamay de Chaudenay',
    appellations: [
      '10 個 Cru（皆僅產紅酒，最晚列級為 1988 年的 Régnié）：Morgon、Fleurie、Moulin-à-Vent、Brouilly、Côte-de-Brouilly、Chénas、Chiroubles、Juliénas、Saint-Amour、Régnié',
      'Brouilly（1,331 ha）為面積最大的 Cru；Chénas（255 ha）最小',
      'Beaujolais-Villages（38 個村莊可加註村名）',
      'Beaujolais 基礎 AOC（紅白粉紅皆可）、Beaujolais Supérieur（範圍相同，僅紅酒，酒精濃度要求 +0.5%）',
      '降級鏈：Cru → Beaujolais-Villages／Supérieur → Beaujolais → Bourgogne',
      'Beaujolais Nouveau／Primeur（僅限紅粉紅）：整串葡萄半二氧化碳浸皮法，5–7 天即可榨汁上市'
    ],
    style: 'Beaujolais Nouveau：果香奔放、輕盈易飲，適合當年飲用。10 個 Cru 各具個性：Moulin-à-Vent 結構最紮實，常被譽為「第一把交椅」，陳年可達十年；Morgon 濃郁強勁，陳年後風味近似黑皮諾；Fleurie、Chiroubles、Régnié 細膩早飲；Côte de Brouilly 為火山質風土，優雅且陳年潛力佳。',
    summary: 'Beaujolais 在行政上常被視為布根地南部、地理上獨立。Gamay 在花崗岩風土上找到完美舞台，10 個 Cru 各具特色。從 1980 年代 Marcel Lapierre 開創自然酒運動後，Morgon 與 Fleurie 重新獲得世界尊敬。'
  }
]

const regions = computed(() => props.slide.regions || defaultRegions)
const activeKey = ref(props.slide.defaultKey || regions.value[0]?.key || 'chablis')
const activeRegion = computed(
  () => regions.value.find((r) => r.key === activeKey.value) || regions.value[0]
)
</script>

<style scoped>
.bourgogne-subregion-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fefaf3 0%, #f5ede0 100%);
  color: #2d1a0f;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #5a3a1a;
  font-weight: 700;
}

.slide-desc {
  color: #7a6048;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
}

.region-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.region-card {
  background: #fff;
  border: 2px solid transparent;
  border-top: 5px solid;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0 2px 6px rgba(90, 58, 26, 0.1);
}

.region-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(90, 58, 26, 0.2);
}

.region-card.active {
  border-color: var(--region-color);
  box-shadow: 0 6px 16px rgba(90, 58, 26, 0.25);
  transform: translateY(-2px);
}

.card-emoji {
  font-size: 1.6rem;
}

.region-card h3 {
  margin: 0;
  color: #5a3a1a;
  font-size: 1.05rem;
}

.card-tagline {
  margin: 0;
  color: #7a6048;
  font-size: 0.82rem;
  line-height: 1.4;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.tag {
  background: #f3e9d8;
  color: #5a3a1a;
  font-size: 0.72rem;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
}

.tag-grape {
  background: var(--region-color);
  color: #fff;
}

.region-detail {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(90, 58, 26, 0.12);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.detail-header h3 {
  margin: 0;
  color: #2d1a0f;
  font-size: 1.3rem;
}

.climate-badge {
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 14px;
  font-size: 0.85rem;
  font-weight: 500;
}

.detail-intro {
  color: #4a3826;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  padding: 0.8rem;
  background: #faf3e8;
  border-radius: 6px;
  border-left: 3px solid #B8860B;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.detail-block.full-width {
  grid-column: 1 / -1;
}

.detail-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.95rem;
  color: #5a3a1a;
}

.detail-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
  line-height: 1.6;
}

.detail-block p {
  margin: 0;
  color: #4a3826;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .bourgogne-subregion-slide {
    padding: 1rem;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
