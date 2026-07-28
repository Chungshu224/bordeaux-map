/**
 * enrich-spain-appellations.mjs
 * 為 spain-appellations.json 每個產區加入：
 *   provinces: string[]   — 所在省份（對應 spain-provinces.geojson province/name 欄位）
 *   description: string   — 優化後的中文說明
 *
 * 執行: node scripts/enrich-spain-appellations.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const path = join(root, 'public/spain/spain-appellations.json')
const data = JSON.parse(readFileSync(path, 'utf8'))

// ── 省份對應表 (zonName → provinces[])
// 省份名稱對應 spain-provinces.geojson 的 province/name 欄位
const PROVINCES = {
  'Vino de Rioja':                      ['La Rioja', 'Alava', 'Navarre'],
  'Priorato':                           ['Tarragona'],
  'Ribera del Duero':                   ['Burgos', 'Valladolid', 'Segovia', 'Soria'],
  'Rías Baixas':                        ['Pontevedra', 'Coruna'],
  'Penedés':                            ['Barcelona', 'Tarragona'],
  'Cava':                               ['Barcelona', 'Tarragona', 'Lleida', 'Girona', 'La Rioja', 'Alava', 'Navarre', 'Zaragoza', 'Valence'],
  'Jerez-Xeres-Sherry':                 ['Cadix'],
  'Manzanilla Sanlúcar de Barrameda':   ['Cadix'],
  'Rueda':                              ['Valladolid', 'Segovia', 'Avila'],
  'Toro':                               ['Zamora', 'Valladolid'],
  'Bierzo':                             ['Leon'],
  'Jumilla':                            ['Murcia', 'Albacete'],
  'Vino Navarra':                       ['Navarre'],
  'Somontano':                          ['Huesca'],
  'Valdepeñas':                         ['Ciudad Real'],
  'La Mancha':                          ['Ciudad Real', 'Albacete', 'Cuenca', 'Toledo'],
  'Ribeiro':                            ['Ourense'],
  'Ribeira Sacra':                      ['Lugo', 'Ourense'],
  'Valdeorras':                         ['Ourense'],
  'Monterrei':                          ['Ourense'],
  'Montilla-Moriles':                   ['Cordoba'],
  'Condado de Huelva':                  ['Huelva'],
  'Binissalem':                         ['Baleares'],
  'Alella':                             ['Barcelona'],
  'Montsant':                           ['Tarragona'],
  'Terra Alta':                         ['Tarragona'],
  'Cigales':                            ['Valladolid', 'Palencia'],
  'Arlanza':                            ['Burgos', 'Palencia'],
  'Arribes':                            ['Salamanca', 'Zamora'],
  'Empordá':                            ['Girona'],
  'Bizkaiko Txakolina-Chacolí de Bizkaia': ['Biskaia'],
  'Getariako Txakolina-Chacolí de Getaria': ['Guipuzcoa'],
  'Arabako Txakolina-Chacolí de Álava': ['Alava'],
  'Yecla':                              ['Murcia'],
  'Bullas':                             ['Murcia'],
  'Vinos de Madrid':                    ['Madrid'],
  'Ribera del Guadiana':                ['Badajoz', 'Caceres'],
  'Tacoronte-Acentejo':                 ['Santa Cruz Tenerife'],
  'Lanzarote':                          ['Lanzarote'],
  'Abona':                              ['Santa Cruz Tenerife'],
  'Conca de Barberá':                   ['Tarragona'],
  'Utiel-Requena':                      ['Valence'],
  'Alicante':                           ['Alicante'],
  'Valencia':                           ['Valence', 'Castellon'],
  'Almansa':                            ['Albacete'],
  'Manchuela':                          ['Cuenca', 'Albacete'],
  'Méntrida':                           ['Toledo'],
  'Uclés':                              ['Cuenca'],
  'Ribera del Júcar':                   ['Cuenca'],
  'Pla de Bages':                       ['Barcelona'],
  'Costers del Segre':                  ['Lleida'],
  'Pla i Llevant':                      ['Baleares'],
  'Tierra de León':                     ['Leon', 'Palencia'],
  'Tierra del Vino de Zamora':          ['Zamora', 'Salamanca'],
  'Tarragona':                          ['Tarragona'],
  'Mondéjar':                           ['Guadalajara'],
  'Calatayud':                          ['Zaragoza'],
  'Campo de Borja':                     ['Zaragoza'],
  'Cariñena':                           ['Zaragoza'],
  'Málaga':                             ['Malaga'],
  'Sierras de Málaga':                  ['Malaga'],
  'Cangas':                             ['Asturias'],
  'La Palma':                           ['Santa Cruz Tenerife'],
  'Valle de Güimar':                    ['Santa Cruz Tenerife'],
  'Valle de la Orotava':                ['Santa Cruz Tenerife'],
  'Ycoden-Daute-Isora':                 ['Santa Cruz Tenerife'],
  'Gran Canaria':                       ['Gran Canaria'],
  'La Gomera':                          ['Santa Cruz Tenerife'],
  'El Hierro':                          ['Santa Cruz Tenerife'],
  'Las Islas Canarias':                 ['Santa Cruz Tenerife', 'Gran Canaria', 'Lanzarote', 'Fuerteventura'],
  'Rioja':                              ['La Rioja', 'Alava', 'Navarre'],
  'Navarra':                            ['Navarre'],
  'Priorato, Comunidad de Cataluña':    ['Tarragona'],
  'Penedés, Comunidad de Cataluña':     ['Barcelona', 'Tarragona'],
  'Cataluña':                           ['Barcelona', 'Tarragona', 'Lleida', 'Girona'],
  'Ampurdán-Costa Brava':               ['Girona'],
  'Binissalem-Mallorca':                ['Baleares'],
  'Chacolí de Bizkaia-Bizkaiko Txakolina': ['Biskaia'],
  'Chacolí de Getaria-Getariako Txakolina': ['Guipuzcoa'],
  'Arabako Txakolina-Txakolí de Álava': ['Alava'],
  'VC Cangas':                          ['Asturias'],
  'Granada':                            ['Granada'],
  'VC Lebrija':                         ['Sevilla'],
  'Sierra de Salamanca':                ['Salamanca'],
  'Valtiendas':                         ['Segovia'],
  'Valles de Benavente':                ['Zamora'],
  'Campo de la Guardia':                ['Toledo'],
  'Casa del Blanco':                    ['Ciudad Real'],
  'Pago Florentino':                    ['Ciudad Real'],
  'Pago Arínzano':                      ['Navarre'],
  'Pago Otazu':                         ['Navarre'],
  'Vino de Pago Aylés':                 ['Zaragoza'],
  'Pago de Calzadilla':                 ['Cuenca'],
  'El Terrerazo':                       ['Valence'],
  'Pago Los Balagueses':                ['Valence'],
  'Prado Irache':                       ['Navarre'],
  'Dehesa del Carrizal':                ['Ciudad Real'],
  'Dominio de Valdepusa':               ['Toledo'],
  'Finca Élez':                         ['Albacete'],
  'Guijoso':                            ['Albacete'],
}

// ── 優化描述表 (僅補充或改寫說明較薄的產區)
const DESCRIPTIONS = {
  'Vino de Rioja': '西班牙唯二 DOCa 認證產區，以橡木桶陳年 Tempranillo 聞名。依陳年時間分為 Joven、Crianza、Reserva、Gran Reserva，各有不同風味層次。產區橫跨拉里奧哈、阿拉瓦和納瓦拉，是西班牙最具代表性的紅酒產區。',
  'Priorato': '加泰隆尼亞頂級 DOCa 產區，以獨特的板岩土壤 llicorella 著稱，Garnacha 老藤種植於陡峭山坡，孕育極度濃郁、礦物感強勁的紅酒，被譽為西班牙布根地。',
  'Ribera del Duero': '西班牙最受矚目的紅酒重鎮，海拔 700–1000 公尺的大陸性氣候，以 Tinto Fino（Tempranillo）著稱，頂級酒莊如 Vega Sicilia、Pingus 聞名全球。日夜溫差大，賦予葡萄優異的酸度與結構。',
  'Rías Baixas': '加利西亞旗艦白酒產區，多雨潮濕的大西洋氣候孕育西班牙最優質的 Albariño，散發鮮活的柑橘、桃子花香與清脆礦物感，是全球最受矚目的白酒之一。',
  'Penedés': '巴塞隆納南方多元產區，是卡瓦氣泡酒的發源地。紅白酒均有傑出表現，Torres 家族在此深耕百年；山地副區種植 Riesling、Chardonnay 等國際品種，風味多樣。',
  'Cava': '西班牙傳統氣泡酒，以香檳傳統瓶中二次發酵法釀製，主要使用 Macabeo、Xarel·lo、Parellada 三大原生品種。主產於卡特隆尼亞，現已擴展至多個自治區，是香檳最實惠的替代選項。',
  'Jerez-Xeres-Sherry': '安達盧西亞南端的雪莉酒王國，沿用 Solera 陳年系統，Fino、Manzanilla、Oloroso、Pedro Ximénez 各具特色。特殊白色白堊土 Albariza 是成就複雜風味的關鍵。',
  'Manzanilla Sanlúcar de Barrameda': '雪莉家族中最精緻的成員，產自瓜達爾基維爾河口的海洋涼風中，帶有獨特的鹹海洋礦物感，是最適合搭配鮮海鮮的 Fino 型不甜雪莉。',
  'Rueda': '卡斯提亞高原上的白酒精品產區，Verdejo 是主角，擁有濃郁的杏桃、茴香香氣與爽口酸度，是全西班牙最暢銷的本土白酒之一。',
  'Toro': '薩莫拉省的豪邁紅酒產地，古老的 Tinta de Toro（Tempranillo）老藤生長在沙質貧瘠土壤，產出酒體強勁、顏色深郁的紅酒，陳年潛力出色。',
  'Bierzo': '萊昂省西北角的特殊山谷微氣候，Mencía 葡萄在板岩土壤上展現出罕見的優雅花香與礦物感，被譽為西班牙的 Pinot Noir 風格代表。',
  'Jumilla': '胡米利亞的 Monastrell（Mourvèdre）以耐旱著稱，老藤灌木種植，產出烈日下的深濃紅酒，果醬感濃郁、單寧厚實，性價比極高。',
  'Vino Navarra': '納瓦拉多元風土產區，從北部庇里牛斯山麓到南方乾燥平原，紅白粉紅酒俱全。Garnacha 表現尤其突出，傳統粉紅酒享有盛名。',
  'Somontano': '庇里牛斯山麓的多元產區，融合 Tempranillo、Garnacha 等本土品種與 Cabernet Sauvignon、Merlot 等國際品種，現代酒莊林立，在西班牙酒界以創新聞名。',
  'Valdepeñas': '卡斯提亞-拉曼恰區南端，以 Cencibel（Tempranillo）為主，傳統上以黏土大甕陳年，近年現代化轉型，出產易飲而優質的紅酒，性價比出眾。',
  'La Mancha': '西班牙乃至全球面積最大的 DO 產區，覆蓋廣闊高原。Airén 白葡萄曾佔絕對主導，近年 Tempranillo 大量種植，是物美價廉餐酒的重要來源。',
  'Ribeiro': '加利西亞花崗岩地帶的古老酒鄉，以 Treixadura 白酒為代表，清爽多果香，是奧倫塞的傳統地方飲品。',
  'Ribeira Sacra': '陡峭板岩山坡形成的壯觀梯田葡萄園，Mencía 在此展現最精緻細膩的一面，花香突出，被稱為加利西亞最美麗的酒鄉。',
  'Montilla-Moriles': '科爾多瓦附近以 Pedro Ximénez 老藤著稱，傳統上不添加酒精的自然強化風格是一大特色，濃縮葡萄乾香甜酒聞名，是雪莉 PX 葡萄的主要來源。',
  'Binissalem': '馬約卡島上的產區，以原生品種 Manto Negro 紅酒和 Moll（Prensal）白酒為主，帶有地中海果香與鹹礦物感，是島嶼旅遊的熱門伴手禮。',
  'Empordá': '加泰隆尼亞北端吉隆納省，夾在庇里牛斯山與地中海之間，傳統甜葡萄酒 Garnatxa de l\'Empordà 聞名，近年精品紅白酒表現亦相當出色。',
  'Bizkaiko Txakolina-Chacolí de Bizkaia': '巴斯克海岸的輕盈白酒，以 Hondarrabi Zuri 釀製，微氣泡、高酸低酒精，是配搭 Pintxos 小點的最佳拍檔。',
  'Getariako Txakolina-Chacolí de Getaria': '吉普斯科亞海岸的傳統 Txakoli 產區，海洋性氣候孕育細膩的蘋果、柑橘氣息，從高杯傾注以增加碳酸感是當地傳統。',
  'Arabako Txakolina-Chacolí de Álava': '阿拉瓦省內陸的最小 Txakoli 產區，受大陸性氣候影響，酒體比沿海 Txakoli 稍為豐滿，複雜度更高。',
  'Vinos de Madrid': '馬德里周圍的山地產區，以 Grenache（Garnacha）老藤著稱，阿爾維蘇等副區海拔達 900 公尺，孕育優雅清爽的紅酒。',
  'Ribera del Guadiana': '艾斯特雷馬杜拉省的廣闊產區，以 Tempranillo、Garnacha 和當地原生品種 Alarije 為主，屬傳統農業酒鄉，近年逐漸現代化。',
  'Tacoronte-Acentejo': '特內里費島北部最古老的 DO 產區，以 Listán Negro 紅酒為主，火山土壤 picón 賦予獨特的礦物煙燻感。',
  'Lanzarote': '蘭薩羅特島上獨特的火山景觀，葡萄種植在 *hoyos* 火山灰坑中以防強風，Malvasía 白酒甜潤、帶有杏桃蜂蜜香氣，景色與酒款同樣令人印象深刻。',
  'Calatayud': '薩拉戈薩省的老藤 Garnacha 代表產區，海拔超過 900 公尺，部分老藤樹齡逾百年，釀出西班牙最物超所值的優質 Garnacha 紅酒。',
  'Campo de Borja': '薩拉戈薩省的 Garnacha 大本營，傳統酒合作社仍佔主導。近年精品酒莊崛起，以老藤 Garnacha 釀製濃郁且具陳年潛力的紅酒。',
  'Cariñena': '薩拉戈薩省最古老的 DO 產區，Cariñena 葡萄（Carignan）原產於此，現以 Garnacha 為主，出產濃烈、飽滿且性價比突出的紅酒。',
  'Sierras de Málaga': '馬拉加省山區認證，以 Ronda 為中心，海拔 600–900 公尺，以 Merlot、Syrah、Petit Verdot 等國際品種表現優異，是安達盧西亞最具潛力的靜態餐酒產區。',
  'Cangas': '阿斯圖里亞斯山地的小型 VC 產區，採用本土品種 Carrasquín、Verdejo Negro 等，偏遠地形保留了無可複製的傳統風味。',
}

// ── 套用資料
let added = 0, enriched = 0
const updated = data.map(entry => {
  const provinces = PROVINCES[entry.zonName]
  const desc = DESCRIPTIONS[entry.zonName]
  const out = { ...entry }
  if (provinces) {
    out.provinces = provinces
    added++
  } else {
    out.provinces = out.provinces || []
  }
  if (desc) {
    out.description = desc
    enriched++
  }
  return out
})

writeFileSync(path, JSON.stringify(updated, null, 2), 'utf8')
console.log(`完成：${updated.length} 個產區`)
console.log(`  provinces 已加：${added}`)
console.log(`  description 已更新：${enriched}`)
console.log(`  無省份對應：${updated.filter(x=>!x.provinces?.length).map(x=>x.zonName).join(', ') || '無'}`)
