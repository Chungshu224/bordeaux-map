// ItalyGeoClimateMapSlide 的三語內容（依目前語系選用）
const LAYER_META = {
  geo: { icon: '🏔️', color: '#2e6b3e', zoneIcons: { north: ['🏔️', '#4CAF50'], center: ['🌿', '#8BC34A'], south: ['☀️', '#FF9800'], islands: ['🏝️', '#F44336'] } },
  climate: { icon: '🌡️', color: '#1565C0', zoneIcons: { north: ['❄️', '#42a5f5'], center: ['🌤️', '#66BB6A'], south: ['🌞', '#FFA726'], islands: ['🔥', '#EF5350'] } },
  soil: { icon: '🌱', color: '#6D4C41', zoneIcons: { north: ['🪨', '#8D6E63'], center: ['🏺', '#A1887F'], south: ['🌋', '#BCAAA4'], islands: ['⚫', '#D7CCC8'] } }
}

function build (lang) {
  return {
    ui: lang.ui,
    zones: lang.zones,
    layers: ['geo', 'climate', 'soil'].map(key => {
      const m = LAYER_META[key]
      const l = lang.layers[key]
      const zones = {}
      for (const z of ['north', 'center', 'south', 'islands']) {
        zones[z] = { icon: m.zoneIcons[z][0], color: m.zoneIcons[z][1], ...l.zones[z] }
      }
      return { key, icon: m.icon, color: m.color, label: l.label, desc: l.desc, zones }
    })
  }
}

const zh = {
  ui: {
    title: '義大利地理・氣候・土壤',
    hint: '切換圖層，點選地圖區域查看詳細說明',
    loading: '地圖載入中…',
    regionsTitle: '🍷 代表產區 / 酒款',
    overviewHint: '👈 點選地圖區域或卡片查看詳細資訊',
    noToken: '未設定 Mapbox Token',
    loadFail: '無法載入地圖資料',
    mapError: '地圖錯誤：',
    unknown: '未知'
  },
  zones: { north: '北部 NORD', center: '中部 CENTRO', south: '南部 SUD', islands: '島嶼 ISOLE' },
  layers: {
    geo: {
      label: '地理特徵',
      desc: '阿爾卑斯山脈→波河平原→亞平寧山脈→地中海沿岸的地形之旅',
      zones: {
        north: { title: '北部地理', subtitle: '阿爾卑斯山脈 + 波河平原',
          summary: '北部是義大利地形最多樣的地區：阿爾卑斯山（最高約 4,800m）在北方構成天然屏障，波河平原（Po Valley）是義大利最大的平原與農業重心，丘陵與湖區則是優質葡萄園的所在。',
          points: ['阿爾卑斯山屏障：阻擋北方寒冷氣流南下', '波河平原地勢低平，面積約 46,000 km²', '加爾達、科摩、馬焦雷等大湖調節周邊氣候', '丘陵坡地提供良好的自然排水'],
          regions: ['Piemonte（Langhe 丘陵）', 'Lombardia（加爾達湖區、Franciacorta）', 'Veneto（維洛納丘陵）', 'Trentino-Alto Adige（高山谷地）'] },
        center: { title: '中部地理', subtitle: '亞平寧山脈脊梁 + 丘陵起伏',
          summary: '亞平寧山脈（Apennini）如脊椎縱貫義大利半島，中部是義大利最美麗的丘陵地帶。托斯卡納的起伏丘陵（約 200-600m）是 Sangiovese 的家園——日照充足且排水良好。',
          points: ['亞平寧山脈主脊：義大利半島的地形分水嶺', '丘陵主導，平原稀少', '台伯河（Tevere）與阿諾河（Arno）流經主要產區', '向陽坡地的自然日照優勢'],
          regions: ['Toscana（Chianti 丘陵）', 'Umbria（Orvieto 丘陵）', 'Marche（Verdicchio 丘陵）', 'Lazio（凝灰岩台地）'] },
        south: { title: '南部地理', subtitle: '地中海沿岸 + 火山地形',
          summary: '南部是古希臘殖民地（Magna Graecia）的所在，葡萄種植歷史悠久。地形崎嶇多變，維蘇威火山與 Vulture 死火山是重要地標；普利亞則是義大利產量最大的大區之一。',
          points: ['維蘇威火山（Vesuvio）：活火山，公元 79 年掩埋龐貝城', '普利亞（Puglia）：地勢平緩，以老藤 Primitivo、Negroamaro 著稱', '阿馬爾菲海岸：極為陡峭的梯田葡萄園', 'Basilicata 的 Vulture 死火山：Aglianico 的重要產地'],
          regions: ['Campania（維蘇威與 Irpinia）', 'Puglia（Salento 半島）', 'Basilicata（Vulture）', 'Calabria（Cirò）'] },
        islands: { title: '島嶼地理', subtitle: '西西里島 + 薩丁尼亞島',
          summary: '西西里島是地中海最大島（約 25,700 km²），埃特納火山（約 3,300m）是歐洲最高的活火山，提供獨特的高海拔葡萄園（約 400-1,000m）。薩丁尼亞島地質古老，保留了許多百年老藤。',
          points: ['西西里島：地中海最大島，葡萄種植歷史可追溯數千年', '埃特納火山：在活火山斜坡上種植葡萄，世界最特殊的產區之一', '薩丁尼亞島：以古生代花崗岩為主的古老地質', '潘泰萊里亞島（Pantelleria）：火山岩小島，Passito 甜酒的故鄉'],
          regions: ['Sicilia（Etna 產區）', 'Sardegna（老藤 Cannonau）', 'Pantelleria（Zibibbo 葡萄）'] }
      }
    },
    climate: {
      label: '氣候帶',
      desc: '從阿爾卑斯高山的冷涼到西西里的炎熱乾燥——義大利跨越多種氣候類型',
      zones: {
        north: { title: '大陸性 / 高山氣候', subtitle: '冬冷夏熱，溫差大',
          summary: '北部擁有義大利最複雜的氣候：阿爾卑斯高山氣候、波河平原大陸性氣候與湖泊微氣候並存。大溫差是 Barolo 等頂級陳年紅酒的重要氣候優勢。',
          points: ['冬季山區可低於 -10°C', '夏季平原可達 35°C', '日夜溫差大，有助保留香氣與酸度', '年雨量約 600-1,200mm', '秋霧（nebbia）：Nebbiolo 名稱的由來'],
          regions: ['Barolo 仰賴大溫差', 'Alto Adige 白酒靠高山清涼', 'Prosecco 需溫和秋季'] },
        center: { title: '地中海氣候（偏溫和）', subtitle: '夏季炎熱乾燥，秋冬較多雨',
          summary: '中部是義大利氣候最「平衡」的地帶——夏季炎熱讓 Sangiovese 充分熟成，丘陵海拔與秋季的涼爽則保留酸度，這是 Chianti Classico 與 Brunello di Montalcino 品質的氣候基礎。',
          points: ['夏季炎熱乾燥（30-35°C）', '年雨量約 600-900mm，主要集中在秋冬', '採收期的降雨是年份好壞的關鍵', '秋季涼爽讓 Sangiovese 保留優雅酸度', '丘陵海拔創造豐富的微氣候差異'],
          regions: ['Chianti：Sangiovese 的理想溫度帶', 'Brunello：需要炎夏與漫長秋季', 'Vino Nobile：較高海拔的優雅風格'] },
        south: { title: '炎熱的地中海氣候', subtitle: '夏季炎熱乾旱，陽光充沛',
          summary: '南部夏季漫長而炎熱（可達 40°C），葡萄糖分迅速積累，天然造就高酒精。現代釀酒師透過提早採收、夜間採收或種植高海拔地塊來保留清爽酸度。',
          points: ['夏季最高氣溫可達 40°C', '年雨量約 400-600mm，主要在冬季', '生長季雨量稀少', '海風帶來自然降溫', '夜間採收（vendemmia notturna）保護香氣'],
          regions: ['Primitivo 糖分高（酒精常達 15% 以上）', 'Negroamaro 需謹慎控管熟成', 'Falanghina 靠海風保留酸度'] },
        islands: { title: '極端的地中海氣候', subtitle: '義大利最熱最乾的地區之一',
          summary: '西西里島是義大利氣候最極端的地方之一，夏季極端高溫可達 45°C 以上，日照充沛。但埃特納火山的高海拔葡萄園提供涼爽的例外，是全義大利最令人驚奇的氣候反差。',
          points: ['西西里夏季極端高溫可達 45°C 以上', '日照時數極高', '薩丁尼亞旱季漫長', '埃特納高海拔：夏季較涼爽，日夜溫差大', '海島效應：強風與海洋調節極端氣候'],
          regions: ['Etna Rosso 靠火山海拔降溫', 'Nero d\'Avola 適應炎熱氣候', 'Vermentino di Gallura 受海風調節'] }
      }
    },
    soil: {
      label: '土壤類型',
      desc: '黑色火山熔岩→灰白石灰岩→古老花崗岩——義大利擁有極為多元的土壤類型',
      zones: {
        north: { title: '泥灰岩・石灰岩・砂岩・冰磧土', subtitle: 'Barolo 的靈魂土壤',
          summary: 'Piemonte 的 Barolo 依賴兩種不同地質時期的土壤：Tortonian（較年輕，鈣質泥灰岩，芳香細膩）與 Serravallian（舊稱 Helvetian，較古老，泥灰岩與砂岩，結構強勁）。這兩種土壤的差異造就了 Barolo 不同村莊的風格。',
          points: ['Langhe（Barolo）：Tortonian 泥灰岩 + Serravallian 泥灰岩與砂岩', 'Veneto：火山玄武岩 + 石灰岩（Soave）、冰磧土（Bardolino）', 'Alto Adige：斑岩、白雲石灰岩、片岩', 'Friuli：Ponca（泥灰岩與砂岩互層）帶來獨特礦物感', '冰河遺留的礫石與砂質土'],
          regions: ['Barolo（Tortonian 與 Serravallian）', 'Barbaresco（鈣質泥灰岩）', 'Amarone（石灰岩 + 玄武岩）', 'Soave（火山玄武岩）'] },
        center: { title: 'Galestro・Alberese・凝灰岩', subtitle: '托斯卡納的獨特地質',
          summary: 'Galestro（片狀泥灰岩）是托斯卡納最典型的土壤——呈片狀、易碎、排水極佳，讓 Sangiovese 的根系深扎。Alberese 是堅硬的石灰岩，提供結構與礦物感。兩者的組合是 Chianti Classico 的骨幹。',
          points: ['Galestro（片狀泥灰岩）：易碎、排水極佳，與 Sangiovese 的芳香和優雅相關', 'Alberese（堅硬石灰岩）：給予酒體結構與陳年潛力', '凝灰岩（火山灰岩）：Umbria 與 Lazio 的特色土壤', 'Brunello di Montalcino：土壤多樣，北坡多 galestro，南坡較多砂質與黏土', 'Marche 的石灰岩：Verdicchio 酸度與礦物感的來源之一'],
          regions: ['Chianti Classico（Galestro + Alberese）', 'Brunello（多樣土壤）', 'Vino Nobile（黏土 + 砂質）', 'Verdicchio（石灰岩）'] },
        south: { title: '火山土・石灰岩・紅色黏土', subtitle: '多樣而古老的地質',
          summary: '南部擁有義大利最多樣的土壤。維蘇威與 Irpinia 一帶的火山灰與凝灰岩造就 Campania 的 Aglianico（Taurasi）與白酒；普利亞以紅色石灰質黏土（terra rossa）為主；巴西利卡塔的 Vulture 死火山土壤則孕育 Aglianico del Vulture。',
          points: ['Campania：火山灰 + 凝灰岩（tufo）', 'Puglia：紅色石灰質黏土（terra rossa）+ 石灰岩', 'Basilicata：Vulture 死火山的火山土', 'Calabria：山區多花崗岩與片岩，Cirò 為黏土與泥灰岩', '富含鐵質的紅色土壤：賦予南部紅酒深色與礦物感'],
          regions: ['Taurasi（火山灰）', 'Primitivo di Manduria（紅色黏土）', 'Aglianico del Vulture（火山土）', 'Cirò（黏土與泥灰岩）'] },
        islands: { title: '火山熔岩・花崗岩・片岩', subtitle: '純粹的礦物土壤',
          summary: '西西里島的埃特納火山提供歐洲最特殊的黑色火山土壤，有機質低、排水快，釀出的 Etna Rosso 帶有獨特的煙燻礦物感。薩丁尼亞島的古老花崗岩則是島上老藤 Cannonau（Grenache）的基礎。',
          points: ['Etna：黑色火山砂與熔岩土', '有機質低 + 礦物豐富：葡萄根系深入，風味複雜', '薩丁尼亞島：花崗岩 + 片岩（古生代地質）', 'Pantelleria 島：黑色火山岩（Zibibbo / Muscat of Alexandria）', '部分火山砂質土壤能抵抗根瘤蚜，仍保有未嫁接的老藤'],
          regions: ['Etna Rosso / Bianco（火山土）', 'Cannonau di Sardegna（花崗岩）', 'Zibibbo / Passito di Pantelleria（火山岩）'] }
      }
    }
  }
}

const en = {
  ui: {
    title: 'Italy\'s Geography, Climate and Soils',
    hint: 'Switch layers and click an area of the map for details',
    loading: 'Loading map…',
    regionsTitle: '🍷 Key areas / wines',
    overviewHint: '👈 Click a map area or a card for details',
    noToken: 'Mapbox token is not configured',
    loadFail: 'Could not load map data',
    mapError: 'Map error: ',
    unknown: 'unknown'
  },
  zones: { north: 'North NORD', center: 'Centre CENTRO', south: 'South SUD', islands: 'Islands ISOLE' },
  layers: {
    geo: {
      label: 'Geography',
      desc: 'A journey across the land: the Alps → the Po plain → the Apennines → the Mediterranean coast',
      zones: {
        north: { title: 'Northern geography', subtitle: 'The Alps + the Po plain',
          summary: 'The North has Italy\'s most varied landscape: the Alps (up to about 4,800 m) form a natural barrier to the north, the Po Valley is Italy\'s largest plain and agricultural heartland, and the hills and lakes are home to fine vineyards.',
          points: ['The Alpine barrier: blocking cold northern air', 'The Po plain is low and flat, about 46,000 km²', 'Large lakes such as Garda, Como and Maggiore moderate the local climate', 'Hillside slopes provide good natural drainage'],
          regions: ['Piemonte (the Langhe hills)', 'Lombardia (Lake Garda, Franciacorta)', 'Veneto (the Verona hills)', 'Trentino-Alto Adige (Alpine valleys)'] },
        center: { title: 'Central geography', subtitle: 'The Apennine spine + rolling hills',
          summary: 'The Apennines run like a spine down the peninsula, and central Italy is its most beautiful hill country. Tuscany\'s rolling hills (about 200-600 m) are Sangiovese\'s home — sunny and well drained.',
          points: ['The main Apennine ridge: the peninsula\'s watershed', 'Hills dominate; plains are rare', 'The Tiber (Tevere) and Arno flow through key wine areas', 'The natural advantage of sun-facing slopes'],
          regions: ['Toscana (the Chianti hills)', 'Umbria (the Orvieto hills)', 'Marche (the Verdicchio hills)', 'Lazio (tuff plateaux)'] },
        south: { title: 'Southern geography', subtitle: 'Mediterranean coast + volcanic terrain',
          summary: 'The South was the land of the Greek colonies (Magna Graecia), with a long history of vine growing. The terrain is rugged and varied, with Vesuvius and the extinct Vulture volcano as key landmarks; Puglia is one of Italy\'s highest-volume regions.',
          points: ['Vesuvius (Vesuvio): an active volcano that buried Pompeii in AD 79', 'Puglia: gentle terrain, famous for old-vine Primitivo and Negroamaro', 'The Amalfi Coast: extremely steep terraced vineyards', 'The extinct Vulture volcano in Basilicata: a key home of Aglianico'],
          regions: ['Campania (Vesuvius and Irpinia)', 'Puglia (the Salento peninsula)', 'Basilicata (Vulture)', 'Calabria (Cirò)'] },
        islands: { title: 'Island geography', subtitle: 'Sicily + Sardinia',
          summary: 'Sicily is the largest island in the Mediterranean (about 25,700 km²), and Mount Etna (about 3,300 m) is Europe\'s highest active volcano, offering unique high-altitude vineyards (about 400-1,000 m). Sardinia has ancient geology and many century-old vines.',
          points: ['Sicily: the largest Mediterranean island, with thousands of years of vine growing', 'Mount Etna: vines on the slopes of an active volcano, one of the world\'s most unusual wine areas', 'Sardinia: ancient geology dominated by Palaeozoic granite', 'Pantelleria: a small volcanic island, home of Passito'],
          regions: ['Sicilia (Etna)', 'Sardegna (old-vine Cannonau)', 'Pantelleria (Zibibbo)'] }
      }
    },
    climate: {
      label: 'Climate',
      desc: 'From the cool Alps to hot, dry Sicily — Italy spans several climate types',
      zones: {
        north: { title: 'Continental / Alpine climate', subtitle: 'Cold winters, hot summers, wide temperature range',
          summary: 'The North has Italy\'s most complex climate: Alpine, continental (in the Po plain) and lake microclimates side by side. A wide temperature range is a key climatic advantage for great age-worthy reds such as Barolo.',
          points: ['Winters can drop below -10°C in the mountains', 'Summers can reach 35°C on the plain', 'Wide day-night swings help preserve aroma and acidity', 'Annual rainfall about 600-1,200 mm', 'Autumn fog (nebbia): the origin of Nebbiolo\'s name'],
          regions: ['Barolo relies on wide temperature swings', 'Alto Adige whites rely on mountain coolness', 'Prosecco needs a mild autumn'] },
        center: { title: 'Mediterranean climate (milder)', subtitle: 'Hot, dry summers; wetter autumns and winters',
          summary: 'Central Italy has Italy\'s most "balanced" climate — hot summers fully ripen Sangiovese, while hill altitudes and cool autumns preserve acidity: the climatic basis of Chianti Classico and Brunello di Montalcino.',
          points: ['Hot, dry summers (30-35°C)', 'Annual rainfall about 600-900 mm, mainly in autumn and winter', 'Rain at harvest is key to the quality of a vintage', 'Cool autumns let Sangiovese keep elegant acidity', 'Hill altitudes create rich microclimatic variety'],
          regions: ['Chianti: the ideal temperature band for Sangiovese', 'Brunello: needs a hot summer and a long autumn', 'Vino Nobile: an elegant style from higher ground'] },
        south: { title: 'Hot Mediterranean climate', subtitle: 'Hot, dry summers and plenty of sun',
          summary: 'Summers in the South are long and hot (up to 40°C), so grapes build sugar quickly, naturally giving high alcohol. Modern winemakers keep fresh acidity through earlier harvests, night picking or high-altitude sites.',
          points: ['Summer highs can reach 40°C', 'Annual rainfall about 400-600 mm, mainly in winter', 'Little rain during the growing season', 'Sea breezes bring natural cooling', 'Night harvesting (vendemmia notturna) protects aromas'],
          regions: ['Primitivo is high in sugar (often over 15% alcohol)', 'Negroamaro needs careful ripeness control', 'Falanghina keeps acidity thanks to sea breezes'] },
        islands: { title: 'Extreme Mediterranean climate', subtitle: 'Among Italy\'s hottest and driest areas',
          summary: 'Sicily has some of Italy\'s most extreme weather, with summer heat that can exceed 45°C and abundant sunshine. Yet Etna\'s high-altitude vineyards offer a cool exception — the most surprising climatic contrast in Italy.',
          points: ['Sicilian summer extremes can exceed 45°C', 'Very high sunshine hours', 'Sardinia has a long dry season', 'High altitudes on Etna: cooler summers, wide day-night swings', 'The island effect: strong winds and the sea moderate the extremes'],
          regions: ['Etna Rosso is cooled by volcanic altitude', 'Nero d\'Avola is adapted to heat', 'Vermentino di Gallura is moderated by sea breezes'] }
      }
    },
    soil: {
      label: 'Soils',
      desc: 'Black volcanic lava → pale limestone → ancient granite — Italy has an extraordinary variety of soils',
      zones: {
        north: { title: 'Marl, limestone, sandstone, moraine', subtitle: 'The soul of Barolo',
          summary: 'Barolo in Piemonte depends on soils from two geological periods: Tortonian (younger, calcareous marl, aromatic and delicate) and Serravallian (formerly Helvetian; older, marl and sandstone, powerfully structured). The difference between them shapes the styles of Barolo\'s villages.',
          points: ['Langhe (Barolo): Tortonian marl + Serravallian marl and sandstone', 'Veneto: volcanic basalt + limestone (Soave), glacial moraine (Bardolino)', 'Alto Adige: porphyry, dolomitic limestone, schist', 'Friuli: ponca (alternating marl and sandstone) gives a distinctive minerality', 'Glacial gravels and sandy soils'],
          regions: ['Barolo (Tortonian and Serravallian)', 'Barbaresco (calcareous marl)', 'Amarone (limestone + basalt)', 'Soave (volcanic basalt)'] },
        center: { title: 'Galestro, alberese, tuff', subtitle: 'Tuscany\'s distinctive geology',
          summary: 'Galestro (flaky marl) is Tuscany\'s most typical soil — flaky, friable and very free-draining, letting Sangiovese root deeply. Alberese is a hard limestone that gives structure and minerality. Together they form the backbone of Chianti Classico.',
          points: ['Galestro (flaky marl): friable, very free-draining, linked to Sangiovese\'s perfume and elegance', 'Alberese (hard limestone): gives structure and ageing potential', 'Tuff (volcanic ash rock): typical of Umbria and Lazio', 'Brunello di Montalcino: varied soils, more galestro to the north, more sand and clay to the south', 'Marche limestone: one source of Verdicchio\'s acidity and minerality'],
          regions: ['Chianti Classico (galestro + alberese)', 'Brunello (varied soils)', 'Vino Nobile (clay + sand)', 'Verdicchio (limestone)'] },
        south: { title: 'Volcanic soils, limestone, red clay', subtitle: 'Varied and ancient geology',
          summary: 'The South has Italy\'s most varied soils. Volcanic ash and tuff around Vesuvius and Irpinia shape Campania\'s Aglianico (Taurasi) and whites; Puglia is dominated by red calcareous clay (terra rossa); and the soils of the extinct Vulture volcano in Basilicata give Aglianico del Vulture.',
          points: ['Campania: volcanic ash + tuff (tufo)', 'Puglia: red calcareous clay (terra rossa) + limestone', 'Basilicata: volcanic soils of the extinct Vulture', 'Calabria: granite and schist in the mountains; clay and marl at Cirò', 'Iron-rich red soils: giving southern reds deep colour and minerality'],
          regions: ['Taurasi (volcanic ash)', 'Primitivo di Manduria (red clay)', 'Aglianico del Vulture (volcanic soil)', 'Cirò (clay and marl)'] },
        islands: { title: 'Volcanic lava, granite, schist', subtitle: 'Pure mineral soils',
          summary: 'Mount Etna in Sicily offers Europe\'s most unusual black volcanic soils — low in organic matter and fast-draining — giving Etna Rosso its distinctive smoky minerality. Sardinia\'s ancient granite underpins the island\'s old-vine Cannonau (Grenache).',
          points: ['Etna: black volcanic sand and lava soils', 'Low organic matter + rich minerals: deep roots, complex flavours', 'Sardinia: granite + schist (Palaeozoic geology)', 'Pantelleria: black volcanic rock (Zibibbo / Muscat of Alexandria)', 'Some sandy volcanic soils resist phylloxera, so ungrafted old vines survive'],
          regions: ['Etna Rosso / Bianco (volcanic soil)', 'Cannonau di Sardegna (granite)', 'Zibibbo / Passito di Pantelleria (volcanic rock)'] }
      }
    }
  }
}

const ja = {
  ui: {
    title: 'イタリアの地理・気候・土壌',
    hint: 'レイヤーを切り替え、地図のエリアをクリックすると詳しい説明が見られます',
    loading: '地図を読み込み中…',
    regionsTitle: '🍷 代表的な産地／ワイン',
    overviewHint: '👈 地図のエリアかカードをクリックすると詳細が見られます',
    noToken: 'Mapboxトークンが設定されていません',
    loadFail: '地図データを読み込めません',
    mapError: '地図エラー：',
    unknown: '不明'
  },
  zones: { north: '北部 NORD', center: '中部 CENTRO', south: '南部 SUD', islands: '島 ISOLE' },
  layers: {
    geo: {
      label: '地理',
      desc: 'アルプス山脈→ポー平原→アペニン山脈→地中海沿岸をめぐる地形の旅',
      zones: {
        north: { title: '北部の地理', subtitle: 'アルプス山脈＋ポー平原',
          summary: '北部はイタリアで最も地形が多様な地域です。アルプス（最高約4,800m）が北の自然の障壁となり、ポー平原はイタリア最大の平野で農業の中心、丘陵と湖のまわりには上質なブドウ畑が広がります。',
          points: ['アルプスの障壁：北からの冷たい空気を遮る', 'ポー平原は低く平坦で、面積約46,000km²', 'ガルダ湖、コモ湖、マッジョーレ湖などの大きな湖が周辺の気候を和らげる', '丘陵の斜面が良好な自然の排水をもたらす'],
          regions: ['Piemonte（ランゲの丘陵）', 'Lombardia（ガルダ湖、フランチャコルタ）', 'Veneto（ヴェローナの丘陵）', 'Trentino-Alto Adige（アルプスの谷）'] },
        center: { title: '中部の地理', subtitle: 'アペニン山脈の背骨＋起伏する丘陵',
          summary: 'アペニン山脈は背骨のようにイタリア半島を縦断し、中部はイタリアで最も美しい丘陵地帯です。トスカーナの起伏する丘陵（約200〜600m）はサンジョヴェーゼの故郷――日照に恵まれ、水はけも良好です。',
          points: ['アペニン山脈の主稜線：半島の分水嶺', '丘陵が主体で平野は少ない', 'テヴェレ川とアルノ川が主要な産地を流れる', '日当たりの良い斜面という自然の利点'],
          regions: ['Toscana（キャンティの丘陵）', 'Umbria（オルヴィエートの丘陵）', 'Marche（ヴェルディッキオの丘陵）', 'Lazio（凝灰岩の台地）'] },
        south: { title: '南部の地理', subtitle: '地中海沿岸＋火山地形',
          summary: '南部は古代ギリシャの植民地（マグナ・グラエキア）があった地域で、ブドウ栽培の長い歴史があります。地形は険しく変化に富み、ヴェスヴィオ山と死火山ヴルトゥレが重要な目印です。プーリアはイタリアで最も生産量の多い州のひとつです。',
          points: ['ヴェスヴィオ山：活火山、紀元79年にポンペイを埋めた', 'プーリア：なだらかな地形で、古樹のプリミティーヴォやネグロアマーロで知られる', 'アマルフィ海岸：非常に急峻な段々畑', 'バジリカータの死火山ヴルトゥレ：アリアニコの重要な産地'],
          regions: ['Campania（ヴェスヴィオとイルピニア）', 'Puglia（サレント半島）', 'Basilicata（ヴルトゥレ）', 'Calabria（チロ）'] },
        islands: { title: '島の地理', subtitle: 'シチリア島＋サルデーニャ島',
          summary: 'シチリア島は地中海最大の島（約25,700km²）で、エトナ山（約3,300m）はヨーロッパで最も高い活火山であり、独特の高標高のブドウ畑（約400〜1,000m）をもたらします。サルデーニャ島は古い地質を持ち、樹齢100年を超える古木が多く残っています。',
          points: ['シチリア島：地中海最大の島、ブドウ栽培の歴史は数千年にさかのぼる', 'エトナ山：活火山の斜面でブドウを栽培する、世界で最も特殊な産地のひとつ', 'サルデーニャ島：古生代の花崗岩が主体の古い地質', 'パンテッレリア島：火山岩の小島、パッシートの故郷'],
          regions: ['Sicilia（エトナ）', 'Sardegna（古木のカンノナウ）', 'Pantelleria（ジビッボ）'] }
      }
    },
    climate: {
      label: '気候帯',
      desc: 'アルプスの冷涼な高地から暑く乾いたシチリアまで――イタリアは多様な気候にまたがる',
      zones: {
        north: { title: '大陸性／高山気候', subtitle: '冬は寒く夏は暑い、寒暖差が大きい',
          summary: '北部はイタリアで最も複雑な気候を持ち、アルプスの高山気候、ポー平原の大陸性気候、湖の微気候が共存しています。大きな寒暖差はバローロなどトップクラスの長期熟成型の赤ワインにとって重要な気候上の強みです。',
          points: ['冬の山間部は-10°Cを下回ることもある', '夏の平野は35°Cに達することもある', '昼夜の寒暖差が大きく、香りと酸を保つのに役立つ', '年間降水量は約600〜1,200mm', '秋霧（nebbia）：ネッビオーロの名前の由来'],
          regions: ['バローロは大きな寒暖差に支えられる', 'アルト・アディジェの白は山の冷涼さに支えられる', 'プロセッコには穏やかな秋が必要'] },
        center: { title: '地中海性気候（穏やか）', subtitle: '夏は暑く乾燥、秋冬は雨が多め',
          summary: '中部はイタリアで最も「バランスのとれた」気候帯です。暑い夏がサンジョヴェーゼを十分に熟させ、丘陵の標高と涼しい秋が酸を保ちます――キャンティ・クラシコとブルネッロ・ディ・モンタルチーノの品質の気候的な基盤です。',
          points: ['夏は暑く乾燥（30〜35°C）', '年間降水量は約600〜900mmで、主に秋冬', '収穫期の雨がヴィンテージの良し悪しの鍵', '涼しい秋がサンジョヴェーゼにエレガントな酸を保たせる', '丘陵の標高が豊かな微気候の違いを生む'],
          regions: ['キャンティ：サンジョヴェーゼに理想的な温度帯', 'ブルネッロ：暑い夏と長い秋が必要', 'ヴィーノ・ノビレ：標高の高い土地のエレガントなスタイル'] },
        south: { title: '暑い地中海性気候', subtitle: '夏は暑く乾燥し、日照が豊か',
          summary: '南部の夏は長く暑く（40°Cに達することも）、ブドウの糖分が急速に蓄積し、自然に高いアルコールになります。現代の醸造家は早摘み、夜間の収穫、高標高の区画での栽培によって爽やかな酸を保っています。',
          points: ['夏の最高気温は40°Cに達することも', '年間降水量は約400〜600mmで、主に冬', '生育期の雨は少ない', '海風が自然の冷却をもたらす', '夜間の収穫（ヴェンデンミア・ノットゥルナ）で香りを守る'],
          regions: ['プリミティーヴォは糖分が高い（アルコールは15%を超えることが多い）', 'ネグロアマーロは成熟の慎重な管理が必要', 'ファランギーナは海風で酸を保つ'] },
        islands: { title: '極端な地中海性気候', subtitle: 'イタリアで最も暑く乾燥した地域のひとつ',
          summary: 'シチリア島はイタリアで最も極端な気候の地域のひとつで、夏の極端な高温は45°Cを超えることもあり、日照も豊かです。しかしエトナ山の高標高のブドウ畑は涼しい例外で、イタリアで最も驚くべき気候のコントラストです。',
          points: ['シチリアの夏の極端な高温は45°Cを超えることも', '日照時間が非常に長い', 'サルデーニャは乾季が長い', 'エトナの高標高：夏は比較的涼しく、昼夜の寒暖差が大きい', '島の効果：強い風と海が極端な気候を和らげる'],
          regions: ['エトナ・ロッソは火山の標高で冷やされる', 'ネロ・ダーヴォラは暑さに適応している', 'ヴェルメンティーノ・ディ・ガッルーラは海風で和らげられる'] }
      }
    },
    soil: {
      label: '土壌のタイプ',
      desc: '黒い火山の溶岩→白っぽい石灰岩→古い花崗岩――イタリアは非常に多様な土壌を持つ',
      zones: {
        north: { title: '泥灰土・石灰岩・砂岩・氷河堆積土', subtitle: 'バローロの魂となる土壌',
          summary: 'ピエモンテのバローロは、2つの異なる地質時代の土壌に支えられています。トルトニアン期（より新しい、石灰質泥灰土、香り高く繊細）とセッラヴァッリアーノ期（旧称ヘルヴェティアン、より古い、泥灰土と砂岩、力強い骨格）。この違いがバローロの村ごとのスタイルを生みます。',
          points: ['ランゲ（バローロ）：トルトニアン期の泥灰土＋セッラヴァッリアーノ期の泥灰土と砂岩', 'ヴェネト：火山性の玄武岩＋石灰岩（ソアーヴェ）、氷河堆積土（バルドリーノ）', 'アルト・アディジェ：斑岩、ドロマイト質石灰岩、片岩', 'フリウリ：ポンカ（泥灰土と砂岩の互層）が独特のミネラル感をもたらす', '氷河が残した礫や砂質の土壌'],
          regions: ['バローロ（トルトニアン期とセッラヴァッリアーノ期）', 'バルバレスコ（石灰質泥灰土）', 'アマローネ（石灰岩＋玄武岩）', 'ソアーヴェ（火山性の玄武岩）'] },
        center: { title: 'ガレストロ・アルベレーゼ・凝灰岩', subtitle: 'トスカーナ独特の地質',
          summary: 'ガレストロ（片状の泥灰土）はトスカーナで最も典型的な土壌で、片状でもろく水はけが非常に良く、サンジョヴェーゼの根を深く伸ばします。アルベレーゼは硬い石灰岩で、骨格とミネラル感を与えます。この2つの組み合わせがキャンティ・クラシコの骨組みです。',
          points: ['ガレストロ（片状の泥灰土）：もろく水はけが非常に良く、サンジョヴェーゼの香りとエレガンスに関わる', 'アルベレーゼ（硬い石灰岩）：骨格と熟成ポテンシャルを与える', '凝灰岩（火山灰の岩）：ウンブリアとラツィオの特徴的な土壌', 'ブルネッロ・ディ・モンタルチーノ：土壌は多様で、北側はガレストロが多く、南側は砂や粘土が多い', 'マルケの石灰岩：ヴェルディッキオの酸とミネラル感の源のひとつ'],
          regions: ['キャンティ・クラシコ（ガレストロ＋アルベレーゼ）', 'ブルネッロ（多様な土壌）', 'ヴィーノ・ノビレ（粘土＋砂質）', 'ヴェルディッキオ（石灰岩）'] },
        south: { title: '火山性土壌・石灰岩・赤い粘土', subtitle: '多様で古い地質',
          summary: '南部はイタリアで最も多様な土壌を持ちます。ヴェスヴィオとイルピニア周辺の火山灰と凝灰岩がカンパーニアのアリアニコ（タウラージ）と白ワインを生み、プーリアは赤い石灰質の粘土（テッラ・ロッサ）が主体、バジリカータの死火山ヴルトゥレの土壌がアリアニコ・デル・ヴルトゥレを育みます。',
          points: ['カンパーニア：火山灰＋凝灰岩（トゥーフォ）', 'プーリア：赤い石灰質の粘土（テッラ・ロッサ）＋石灰岩', 'バジリカータ：死火山ヴルトゥレの火山性土壌', 'カラブリア：山間部は花崗岩と片岩が多く、チロは粘土と泥灰土', '鉄分を含む赤い土壌：南部の赤ワインに濃い色とミネラル感を与える'],
          regions: ['タウラージ（火山灰）', 'プリミティーヴォ・ディ・マンドゥーリア（赤い粘土）', 'アリアニコ・デル・ヴルトゥレ（火山性土壌）', 'チロ（粘土と泥灰土）'] },
        islands: { title: '火山の溶岩・花崗岩・片岩', subtitle: '純粋なミネラルの土壌',
          summary: 'シチリア島のエトナ山はヨーロッパで最も特殊な黒い火山性土壌をもたらします。有機物が少なく水はけが速く、エトナ・ロッソに独特のスモーキーなミネラル感を与えます。サルデーニャ島の古い花崗岩は、島の古木のカンノナウ（グルナッシュ）の基盤です。',
          points: ['エトナ：黒い火山砂と溶岩の土壌', '有機物が少ない＋ミネラルが豊富：根が深く伸び、風味が複雑になる', 'サルデーニャ島：花崗岩＋片岩（古生代の地質）', 'パンテッレリア島：黒い火山岩（ジビッボ／マスカット・オブ・アレキサンドリア）', '一部の火山性の砂質土壌はフィロキセラに強く、接ぎ木されていない古木が残る'],
          regions: ['エトナ・ロッソ／ビアンコ（火山性土壌）', 'カンノナウ・ディ・サルデーニャ（花崗岩）', 'ジビッボ／パッシート・ディ・パンテッレリア（火山岩）'] }
      }
    }
  }
}

export const GEO_CLIMATE_CONTENT = { 'zh-TW': build(zh), en: build(en), ja: build(ja) }
