/**
 * inject-quiz-slides.mjs
 * 為 Italy Level 1 的 11 個課程 JSON 插入 quiz slides（知識檢測）
 * 同時重寫 L1M4L2.json 為綜合評量，並建立 quiz-bank.json
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = join(__dirname, '..', 'public', 'italy', 'courses', 'level1')

function filePath(name) {
  return join(BASE, name)
}

// ─── Quiz questions for each lesson ───────────────────────────────────────────

const QUIZ_MAP = {

  L1M1L1: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: '義大利共有幾個行政區都生產葡萄酒？',
        options: ['A. 16 個', 'B. 18 個', 'C. 20 個', 'D. 22 個'],
        correct: 2,
        explanation: '義大利全國 20 個行政州均生產葡萄酒，是全球最多樣化的產酒國家，每個州都有其代表性產區。'
      },
      {
        type: 'single',
        question: '義大利本土葡萄品種超過多少種？',
        options: ['A. 100 種', 'B. 200 種', 'C. 350 種', 'D. 500 種'],
        correct: 2,
        explanation: '義大利擁有超過 350 個原生品種，遠多於其他產酒國，品種多樣性舉世無雙，為全球葡萄酒寶庫。'
      },
      {
        type: 'multiple',
        question: '以下哪些是義大利北部的重要產酒州？（多選）',
        options: ['A. Piemonte', 'B. Veneto', 'C. Sicily', 'D. Lombardy'],
        correct: [0, 1, 3],
        explanation: 'Piemonte、Veneto 和 Lombardy 均位於義大利北部。Sicily 是南部島嶼，屬南部產區，以 Nero d\'Avola 和 Etna 聞名。'
      },
      {
        type: 'single',
        question: '義大利葡萄酒分級的最高等級是哪個？',
        options: ['A. DOC', 'B. IGT', 'C. DOCG', 'D. Vino da Tavola'],
        correct: 2,
        explanation: 'DOCG（Denominazione di Origine Controllata e Garantita）是最高等級，除法定產區外還有品質官方保證，目前超過 77 個 DOCG。'
      },
      {
        type: 'multiple',
        question: '以下哪些正確說明了義大利葡萄酒的全球地位？（多選）',
        options: ['A. 世界葡萄酒出口量第一', 'B. 超過 350 個原生葡萄品種', 'C. 只有北部才能產出好酒', 'D. 擁有超過 4000 年釀酒歷史'],
        correct: [0, 1, 3],
        explanation: '義大利是全球出口量第一的葡萄酒國家，有超過 350 個原生品種和悠久的釀酒歷史。南部的 Sicily 等地同樣有出色的葡萄酒。'
      }
    ]
  },

  L1M1L2: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: 'DOCG 中的字母「G」代表什麼意思？',
        options: ['A. Geografica', 'B. Garantita（保証）', 'C. Grande', 'D. Genuina'],
        correct: 1,
        explanation: 'DOCG 中的 G 代表 Garantita（保証），表示除了法定產區之外，還有品質上的官方保證，是義大利最嚴格的葡萄酒等級。'
      },
      {
        type: 'multiple',
        question: '超級托斯卡納（Super Tuscan）最初為 IGT 等級的原因包括哪些？（多選）',
        options: ['A. 使用了 Cabernet Sauvignon 等非法定品種', 'B. 釀酒師刻意降低等級賣便宜', 'C. 當時法規不允許非傳統品種出現在 DOC 酒中', 'D. IGT 的市場認知度比 DOC 更高'],
        correct: [0, 2],
        explanation: '80 年代釀酒師想用 Cabernet Sauvignon 等品種釀酒，但 DOC 法規限制只能用傳統品種，所以只能標示為 IGT。後來 Sassicaia 品質卓越，自成一個 DOC。'
      },
      {
        type: 'single',
        question: '義大利目前大約有多少個 DOCG？',
        options: ['A. 約 30 個', 'B. 約 50 個', 'C. 超過 77 個', 'D. 超過 150 個'],
        correct: 2,
        explanation: '義大利目前有超過 77 個 DOCG 產區，主要集中在 Piemonte（18 個）、Tuscany 和 Veneto 等核心地區，持續成長中。'
      },
      {
        type: 'single',
        question: '哪個等級讓釀酒師有最大的品種和釀造方式創作自由？',
        options: ['A. DOCG', 'B. DOC', 'C. IGT', 'D. Vino da Tavola'],
        correct: 2,
        explanation: 'IGT（Indicazione Geografica Tipica）是四個等級中限制最少的，允許使用各種品種和釀造工藝，許多創新頂級酒款如 Super Tuscan 選擇 IGT 標示。'
      },
      {
        type: 'multiple',
        question: '義大利葡萄酒酒標上必須標示哪些法定資訊？（多選）',
        options: ['A. 酒莊/生產者名稱', 'B. 產區等級（DOCG/DOC/IGT）', 'C. 年份（Vintage）', 'D. 建議零售價格'],
        correct: [0, 1, 2],
        explanation: '酒標上必須標示生產者、產區等級和年份，這些是識別一款義大利酒的基本資訊。售價不屬於酒標的法定標示項目，由市場決定。'
      }
    ]
  },

  L1M1L3: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: '貫穿義大利半島全境的主要山脈是？',
        options: ['A. 阿爾卑斯山', 'B. 亞平寧山脈', 'C. 多洛米底山', 'D. 比利牛斯山'],
        correct: 1,
        explanation: '亞平寧山脈（Apennines）從北到南貫穿整個義大利半島，像脊骨一樣影響全國的氣候和排水條件，是義大利最重要的地理特徵。'
      },
      {
        type: 'multiple',
        question: '以下哪些自然因素影響義大利葡萄酒的地區風格差異？（多選）',
        options: ['A. 緯度（南北溫度差）', 'B. 海拔高度', 'C. 酒莊的品牌知名度', 'D. 土壤類型'],
        correct: [0, 1, 3],
        explanation: '緯度決定基礎氣溫；海拔每升高 100 公尺降溫約 0.6°C；土壤影響葡萄的礦物感和酸度。品牌知名度是市場因素，不影響自然風土條件。'
      },
      {
        type: 'single',
        question: 'Etna 火山土壤對當地葡萄酒最主要的貢獻是？',
        options: ['A. 大量水分供給', 'B. 降低環境氣溫', 'C. 賦予獨特礦物感和火山岩風味', 'D. 增加日照時間'],
        correct: 2,
        explanation: 'Etna 的火山土富含礦物質，賦予 Nerello Mascalese 等葡萄酒獨特的礦物感和火山岩風味，是當地葡萄酒區別於其他產區的核心特徵。'
      },
      {
        type: 'single',
        question: '義大利北部大陸性氣候最典型的特徵是？',
        options: ['A. 全年高溫乾燥', 'B. 四季分明，夏熱冬冷，典型有秋霧（Nebbia）', 'C. 年雨量極少，接近沙漠氣候', 'D. 受熱帶氣流主導'],
        correct: 1,
        explanation: '北部大陸性氣候四季分明，夏熱冬冷。秋霧（Nebbia）是皮埃蒙特典型的氣候特徵，Nebbiolo 品種名字即源自於此，有助於緩慢成熟和風味複雜度。'
      },
      {
        type: 'multiple',
        question: '以下哪些是義大利重要的優質土壤類型？（多選）',
        options: ['A. 石灰岩土（Calcareous）', 'B. 火山土（Volcanic）', 'C. 永凍土（Permafrost）', 'D. 黏土（Clay）'],
        correct: [0, 1, 3],
        explanation: '義大利土壤多樣：石灰岩（Barolo、Chianti）提供排水和礦物感；火山土（Etna）賦予獨特礦物風味；黏土（Chianti、Umbria）保水性好使葡萄飽滿。義大利無永凍土。'
      }
    ]
  },

  L1M2L1: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: '皮埃蒙特的「Nebbia」是什麼，和葡萄酒有什麼關係？',
        options: ['A. 一種高酸葡萄品種', 'B. 秋天的霧，Nebbiolo 品種名稱的由來', 'C. 一種特殊土壤類型', 'D. 阿爾卑斯山的冷風'],
        correct: 1,
        explanation: 'Nebbia 意為「霧」，是皮埃蒙特秋季特有的氣候。Nebbiolo 品種的名字直接源自 Nebbia，秋霧幫助葡萄緩慢成熟，增加複雜度和濃縮度。'
      },
      {
        type: 'multiple',
        question: 'Barolo 和 Barbaresco 的共同特徵有哪些？（多選）',
        options: ['A. 均以 Nebbiolo 品種釀造', 'B. 均為 DOCG 等級', 'C. 均產自皮埃蒙特', 'D. 均為甜型酒款'],
        correct: [0, 1, 2],
        explanation: 'Barolo 和 Barbaresco 都是用 Nebbiolo 釀造的 DOCG 頂級紅酒，均產自皮埃蒙特。兩者都是干型酒，非甜酒。'
      },
      {
        type: 'single',
        question: 'Barolo 和 Barbaresco 在風格上最大的差異是？',
        options: ['A. Barolo 使用白葡萄，Barbaresco 使用紅葡萄', 'B. Barolo 強勁需長期陳年；Barbaresco 優雅可早飲', 'C. Barbaresco 酒精度比 Barolo 高很多', 'D. 兩者幾乎完全相同，無差異'],
        correct: 1,
        explanation: 'Barolo 被稱為「葡萄酒之王」，風格雄渾，法規要求最少陳年 3 年；Barbaresco 是「葡萄酒女王」，較優雅細膩，最少陳年 2 年，相對可早開瓶。'
      },
      {
        type: 'single',
        question: 'Moscato d\'Asti DOCG 的主要特點是？',
        options: ['A. 干型高酒精紅酒', 'B. 微甜低酒精微氣泡白酒（約 5.5% ABV）', 'C. 完全發酵、無糖干型白酒', 'D. 橘酒（Skin-contact）'],
        correct: 1,
        explanation: 'Moscato d\'Asti 是 Frizzante（微氣泡）甜白酒，以 Moscato Bianco 釀造，酒精度約 5%，帶桃子、杏子和蜂蜜香氣，適合飯後甜點搭配。'
      },
      {
        type: 'multiple',
        question: '以下哪些是皮埃蒙特的核心紅葡萄品種？（多選）',
        options: ['A. Nebbiolo', 'B. Barbera', 'C. Dolcetto', 'D. Sangiovese'],
        correct: [0, 1, 2],
        explanation: 'Nebbiolo（王者）、Barbera（日常高酸）和 Dolcetto（易飲）是皮埃蒙特三大紅葡萄品種。Sangiovese 主要種植在托斯卡納，皮埃蒙特罕見。'
      }
    ]
  },

  L1M2L2: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: '黑公雞（Gallo Nero）標誌是哪個產區的象徵？',
        options: ['A. Brunello di Montalcino', 'B. Barolo', 'C. Chianti Classico', 'D. Vino Nobile di Montepulciano'],
        correct: 2,
        explanation: '黑公雞是 Chianti Classico DOCG 的官方標誌，代表 Florence 和 Siena 之間的核心產區，品質高於普通 Chianti，必須 100% Sangiovese。'
      },
      {
        type: 'single',
        question: 'Brunello di Montalcino DOCG 的最短陳年要求是幾年？',
        options: ['A. 2 年', 'B. 3 年', 'C. 5 年', 'D. 7 年'],
        correct: 2,
        explanation: 'Brunello di Montalcino 要求至少陳年 5 年（其中 2 年橡木桶），Riserva 版本更需 6 年，是義大利陳年規定最嚴格的酒款之一。'
      },
      {
        type: 'multiple',
        question: '超級托斯卡納（Super Tuscan）的主要特點包括哪些？（多選）',
        options: ['A. 使用 Cabernet Sauvignon 或 Merlot 等非傳統品種', 'B. 最初被分類為 IGT 等級', 'C. 誕生於 1970-80 年代的創新嘗試', 'D. 法規規定必須使用 100% Sangiovese'],
        correct: [0, 1, 2],
        explanation: '超級托斯卡納是釀酒師突破法規的創新：使用國際品種，一開始只能標 IGT，但品質卓越。Sassicaia 後來升格為 DOC，成為義大利最具代表性的頂級酒。'
      },
      {
        type: 'single',
        question: 'Sangiovese 在義大利葡萄種植上的地位是？',
        options: ['A. 僅限托斯卡納種植', 'B. 義大利種植面積最廣的紅葡萄品種', 'C. 新引進的國際品種', 'D. 主要用於白酒'],
        correct: 1,
        explanation: 'Sangiovese 是義大利種植面積最大的紅葡萄品種，除了托斯卡納外，也分布在 Umbria（Sagrantino di Montefalco 旁）、Marche、Emilia 等多個中部地區。'
      },
      {
        type: 'multiple',
        question: '以下哪些是托斯卡納的 DOCG 紅酒？（多選）',
        options: ['A. Brunello di Montalcino', 'B. Chianti Classico', 'C. Barolo', 'D. Vino Nobile di Montepulciano'],
        correct: [0, 1, 3],
        explanation: 'Brunello di Montalcino、Chianti Classico 和 Vino Nobile di Montepulciano 都是托斯卡納的 DOCG 紅酒。Barolo 是皮埃蒙特的 DOCG，與托斯卡納無關。'
      }
    ]
  },

  L1M2L3: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Amarone della Valpolicella 採用的特殊工藝是？',
        options: ['A. 橡木桶中二次發酵', 'B. 風乾葡萄釀造（Appassimento）', 'C. 加入白蘭地加強酒精', 'D. 冷凍濃縮葡萄汁'],
        correct: 1,
        explanation: 'Appassimento 工藝將 Corvina 等葡萄在竹架上風乾 3-4 個月，失去約 30% 水分後再釀造，濃縮糖分和風味，造就濃郁的高酒精（約 15-17%）Amarone。'
      },
      {
        type: 'single',
        question: 'Prosecco 的核心葡萄品種是？',
        options: ['A. Pinot Grigio', 'B. Glera', 'C. Garganega', 'D. Chardonnay'],
        correct: 1,
        explanation: 'Prosecco 主要使用 Glera 品種（至少 85%），生長於 Veneto 和 Friuli。採用 Charmat 法（大罐二次發酵），風格清爽果香，是全球銷量最大的氣泡酒之一。'
      },
      {
        type: 'multiple',
        question: '關於 Prosecco，以下哪些描述是正確的？（多選）',
        options: ['A. 採用 Charmat 法（大罐二次發酵）', 'B. 主要來自 Veneto 和 Friuli 地區', 'C. 和香檳一樣採用傳統法（瓶中二次發酵）', 'D. 主要品種是 Glera'],
        correct: [0, 1, 3],
        explanation: 'Prosecco 採用 Charmat 法在大型鋼槽中進行二次發酵，成本比香檳傳統法低，風格清爽果香。主要來自 Veneto 的 Conegliano-Valdobbiadene 等地區。'
      },
      {
        type: 'single',
        question: 'Soave DOC 的核心葡萄品種是？',
        options: ['A. Pinot Grigio', 'B. Trebbiano', 'C. Garganega', 'D. Chardonnay'],
        correct: 2,
        explanation: 'Soave DOC 核心品種是 Garganega（至少 70%），帶有杏仁花香和蜂蜜風味，是威尼托最著名的白葡萄品種，在 Soave Classico 中尤為出色。'
      },
      {
        type: 'multiple',
        question: 'Valpolicella 產區有哪些不同等級的酒款？（多選）',
        options: ['A. Amarone della Valpolicella DOCG（全風乾）', 'B. Ripasso（半 Appassimento 風格）', 'C. Barolo（全 Nebbiolo）', 'D. Valpolicella DOC（普通輕盈款）'],
        correct: [0, 1, 3],
        explanation: 'Valpolicella 有三個層次：普通 Valpolicella（輕盈易飲）→ Ripasso（用 Amarone 酒渣二次浸泡，半濃郁）→ Amarone（全風乾，最濃郁）。Barolo 屬皮埃蒙特。'
      }
    ]
  },

  L1M2L4: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Etna 產區被稱為「義大利的布根地」的主要原因是？',
        options: ['A. 也種植 Pinot Noir', 'B. 強調不同山坡地塊（Contrada）差異，細膩優雅風土', 'C. 氣候和布根地相同', 'D. 酒價和布根地相當'],
        correct: 1,
        explanation: 'Etna 因獨特火山土壤、高海拔（600-1000m）和強調 Contrada（地塊）差異的哲學，用 Nerello Mascalese 釀出細膩優雅的紅酒，因此得到「義大利布根地」美名。'
      },
      {
        type: 'single',
        question: 'Nero d\'Avola 葡萄酒的風格特徵是？',
        options: ['A. 清淡低酒精，果香輕盈', 'B. 高單寧高酸，類似 Barolo', 'C. 濃郁豐沛，帶成熟黑果和巧克力', 'D. 甜美低酸，適合年輕即飲'],
        correct: 2,
        explanation: 'Nero d\'Avola 在西西里炎熱氣候下充分成熟，釀出顏色深、口感豐沛的紅酒，帶有成熟黑莓、黑棗、巧克力和肉桂等香料味，是西西里最代表性的品種。'
      },
      {
        type: 'multiple',
        question: '以下哪些是西西里著名的原生白葡萄品種？（多選）',
        options: ['A. Grillo', 'B. Catarratto', 'C. Sangiovese', 'D. Carricante'],
        correct: [0, 1, 3],
        explanation: 'Grillo（常用於 Marsala 和干型白酒）、Catarratto（西西里種植最廣）和 Carricante（Etna 白酒）都是西西里原生白葡萄。Sangiovese 是托斯卡納紅葡萄。'
      },
      {
        type: 'single',
        question: 'Marsala 是什麼類型的酒？',
        options: ['A. 干型紅酒', 'B. 自然甜白酒', 'C. 加烈酒（Fortified Wine）', 'D. 微氣泡酒'],
        correct: 2,
        explanation: 'Marsala 是西西里著名的加烈酒，在發酵過程中加入中性烈酒以提升酒精度（約 17-20%），由英國商人 John Woodhouse 於 18 世紀發明，為海運設計。'
      },
      {
        type: 'multiple',
        question: '關於 Etna DOC，以下哪些是正確的？（多選）',
        options: ['A. 位於活火山的坡地', 'B. 主要紅葡萄品種是 Nerello Mascalese', 'C. 近年在國際上受到高度關注', 'D. 所有酒款都是甜型'],
        correct: [0, 1, 2],
        explanation: 'Etna DOC 位於西西里 Etna 活火山斜坡，以 Nerello Mascalese 釀造細膩紅酒，近年被 Wine Spectator、Decanter 等媒體高度評價。Etna 主要釀造干型酒，非甜酒產區。'
      }
    ]
  },

  L1M2L5: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Franciacorta 為何被稱為「義大利的香檳」？',
        options: ['A. 產自靠近法國的地區', 'B. 使用 Pinot Nero/Chardonnay，採傳統法（瓶中二次發酵）', 'C. 是義大利最昂貴的葡萄酒', 'D. 使用 Champagne 這個名稱'],
        correct: 1,
        explanation: 'Franciacorta 使用 Pinot Nero、Chardonnay 等品種，採用 Metodo Classico（傳統法）在瓶中二次發酵，陳年要求嚴格，是義大利最接近香檳工藝的高品質氣泡酒。'
      },
      {
        type: 'multiple',
        question: 'Franciacorta DOCG 的陳年規定包括哪些？（多選）',
        options: ['A. Non Vintage 至少 18 個月瓶陳', 'B. Vintage 至少 30 個月瓶陳', 'C. Non Vintage 只需 6 個月', 'D. Riserva 需要至少 60 個月'],
        correct: [0, 1, 3],
        explanation: 'Franciacorta 陳年規定嚴格：Non Vintage ≥ 18 個月、Vintage ≥ 30 個月、Riserva ≥ 60 個月，遠超 Cava、Prosecco 等其他氣泡酒，確保最高品質。'
      },
      {
        type: 'single',
        question: 'Valtellina 產區的葡萄酒用什麼品種，當地稱它為什麼？',
        options: ['A. Sangiovese，當地稱 Prugnolo', 'B. Nebbiolo，當地稱 Chiavennasca', 'C. Barbera，當地稱 Bonarda', 'D. Montepulciano，當地稱 Cordisco'],
        correct: 1,
        explanation: 'Valtellina 以 Nebbiolo 為核心品種，當地稱為 Chiavennasca。種植在阿爾卑斯山陡峭梯田，海拔帶來涼爽微氣候，釀出比 Barolo 更輕盈細膩的風格。'
      },
      {
        type: 'single',
        question: 'Sforzato di Valtellina DOCG 的特別之處是？',
        options: ['A. 普通 Nebbiolo 干型酒', 'B. 採用風乾工藝，酒精度至少 14%', 'C. 義大利最甜的氣泡酒', 'D. 用 Chardonnay 釀的白酒'],
        correct: 1,
        explanation: 'Sforzato（Sfursat）採用類似 Amarone 的 Appassimento 風乾工藝，葡萄風乾後釀造，酒精度至少達 14%，口感濃郁複雜，是 Valtellina 的頂級紅酒代表。'
      },
      {
        type: 'multiple',
        question: '以下哪些是倫巴第（Lombardy）的重要葡萄酒產區？（多選）',
        options: ['A. Franciacorta', 'B. Valtellina', 'C. Lugana', 'D. Barolo'],
        correct: [0, 1, 2],
        explanation: 'Franciacorta（傳統法氣泡）、Valtellina（山地 Nebbiolo）和 Lugana（加爾達湖畔的 Trebbiano di Lugana 白酒）都在 Lombardy 境內。Barolo 在 Piemonte。'
      }
    ]
  },

  L1M3L1: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: '以下哪個描述最準確地說明了 Nebbiolo 的特性？',
        options: ['A. 低單寧低酸，果香豐沛，適合年輕飲用', 'B. 高酸高單寧但酒色偏淺寶石紅，邊緣帶磚橙色', 'C. 高酸高單寧，酒色極深如墨，不透光', 'D. 低單寧高酸，清爽易飲'],
        correct: 1,
        explanation: 'Nebbiolo 矛盾之處在於：高酸高單寧（很有力道），但酒色卻偏淺寶石紅，隨陳年出現磚橙色邊緣。年輕時單寧極澀，需長期陳年才能軟化到最佳狀態。'
      },
      {
        type: 'multiple',
        question: '關於 Sangiovese，以下哪些描述是正確的？（多選）',
        options: ['A. 義大利種植面積最廣的紅葡萄品種', 'B. 高酸中高單寧的特性', 'C. 代表酒款：Chianti 和 Brunello di Montalcino', 'D. 主要種植在皮埃蒙特'],
        correct: [0, 1, 2],
        explanation: 'Sangiovese 是義大利種植最廣的紅葡萄，以高酸、中高單寧著稱，是 Chianti、Brunello di Montalcino 等酒款的核心品種。它主要種植在中部義大利，皮埃蒙特罕見。'
      },
      {
        type: 'single',
        question: 'Barbera 在義大利葡萄酒中的地位是？',
        options: ['A. 高端陳年型，需十年以上才最佳', 'B. 高酸低單寧的日常佳釀，物超所值', 'C. 最濃郁的品種，適合釀加烈酒', 'D. 主要用於釀造氣泡酒'],
        correct: 1,
        explanation: 'Barbera 以高酸、低單寧著稱，果味豐沛（黑莓、黑李），年輕即飲，是皮埃蒙特日常餐酒主力，個性活潑，性價比在義大利品種中數一數二。'
      },
      {
        type: 'single',
        question: 'Montepulciano d\'Abruzzo（酒名）和 Vino Nobile di Montepulciano（酒名）的關鍵差異是？',
        options: ['A. 兩者完全相同，只是名稱不同', 'B. 前者是 Abruzzo 州的 Montepulciano 品種；後者是托斯卡納地名 Montepulciano，品種是 Sangiovese', 'C. 前者在托斯卡納；後者在 Abruzzo', 'D. 兩者品種和產地都一樣'],
        correct: 1,
        explanation: '典型的名稱陷阱！Montepulciano d\'Abruzzo 是來自 Abruzzo 的 Montepulciano 品種紅酒；Vino Nobile di Montepulciano 是托斯卡納小鎮 Montepulciano 的酒，核心品種是 Sangiovese（當地稱 Prugnolo Gentile）。'
      },
      {
        type: 'multiple',
        question: '關於 Nero d\'Avola，以下哪些描述是正確的？（多選）',
        options: ['A. 主要產自西西里', 'B. 濃郁豐沛，帶有成熟黑果和巧克力', 'C. 是義大利北部的代表品種', 'D. 在地中海炎熱氣候下表現出色'],
        correct: [0, 1, 3],
        explanation: 'Nero d\'Avola 是西西里島最著名的紅葡萄品種，在炎熱的地中海型氣候中充分成熟，釀出濃郁豐沛的紅酒，帶有成熟黑莓、黑棗和可可風味。它是南部吃不是北部的代表品種。'
      }
    ]
  },

  L1M3L2: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: '哪個義大利白葡萄品種是全球出口最多、最受國際消費者歡迎的？',
        options: ['A. Trebbiano', 'B. Garganega', 'C. Pinot Grigio', 'D. Verdicchio'],
        correct: 2,
        explanation: 'Pinot Grigio 是義大利出口最多的白葡萄品種，北部（尤其 Friuli）的清爽版本風格討喜，暢銷美國、英國等市場，是義大利白酒的國際形象代表。'
      },
      {
        type: 'multiple',
        question: '以下關於 Trebbiano（Ugni Blanc）的描述哪些是正確的？（多選）',
        options: ['A. 義大利種植面積最大的白葡萄品種之一', 'B. 風格清淡，多用於調配', 'C. 法國名稱是 Ugni Blanc，用於干邑基酒', 'D. 釀出的酒通常極為濃郁複雜'],
        correct: [0, 1, 2],
        explanation: 'Trebbiano 是義大利最廣植的白葡萄，本身風味清淡，多用於調配。在法國稱為 Ugni Blanc，是 Cognac（干邑）的核心基酒品種。通常不以濃郁複雜著稱。'
      },
      {
        type: 'single',
        question: 'Verdicchio 最著名的產區在哪個州？',
        options: ['A. Veneto', 'B. Tuscany', 'C. Marche', 'D. Piemonte'],
        correct: 2,
        explanation: 'Verdicchio 是 Marche 州的代表性白葡萄，以 Verdicchio dei Castelli di Jesi DOC 最為著名，酒體清脆，帶有草本和杏仁苦味的收尾，是義大利中部最有特色的白酒之一。'
      },
      {
        type: 'single',
        question: 'Garganega 是哪個著名白酒的核心品種？',
        options: ['A. Pinot Grigio delle Venezie', 'B. Soave DOC', 'C. Trebbiano d\'Abruzzo', 'D. Vermentino di Sardegna'],
        correct: 1,
        explanation: 'Garganega 是 Veneto 的 Soave DOC 核心品種（法規要求至少 70%），帶有白花、杏仁和蜂蜜香氣，Soave Classico 版本尤為優秀，可媲美頂級白布根地。'
      },
      {
        type: 'multiple',
        question: '關於 Vermentino，以下哪些是正確的？（多選）',
        options: ['A. 主要產自 Sardinia 和 Liguria', 'B. 帶有海風礦物感和清爽草本味', 'C. 非常適合搭配海鮮', 'D. 和 Nebbiolo 並稱皮埃蒙特代表品種'],
        correct: [0, 1, 2],
        explanation: 'Vermentino 是 Sardinia（Vermentino di Gallura DOCG）和 Liguria 的特色白葡萄，靠海種植帶有礦鹽感，是搭配海鮮的絕佳選擇。它與皮埃蒙特無關。'
      }
    ]
  },

  L1M4L1: {
    type: 'quiz',
    title: '🧠 知識檢測',
    questions: [
      {
        type: 'single',
        question: '「What grows together, goes together」這句配餐哲學的核心意思是？',
        options: ['A. 貴的酒搭配貴的食材', 'B. 當地的酒與當地的食物歷經百年共同演化，是最佳搭配', 'C. 氣候相同的地區食物和酒最配', 'D. 白酒永遠比紅酒更適合食物'],
        correct: 1,
        explanation: '這句話強調地域性配對：當地葡萄酒和當地料理在數百年間共同發展，天然契合。Chianti 配番茄醬義大利麵、Soave 配威尼托海鮮，都是典型例子。'
      },
      {
        type: 'multiple',
        question: '以下哪些是正確的義式配餐原則？（多選）',
        options: ['A. 番茄醬義大利麵適合搭配高酸紅酒如 Sangiovese', 'B. Carbonara（奶油培根）適合搭配白酒', 'C. 重型藍紋起司如 Gorgonzola 配甜酒', 'D. 所有義大利菜都應配白酒'],
        correct: [0, 1, 2],
        explanation: '高酸 Sangiovese 能對抗番茄醬的酸度；Carbonara 的奶油適合爽口白酒；Gorgonzola 的鹹味需要甜酒平衡（如 Moscato d\'Asti）。並非所有義大利菜都配白酒，紅肉料理配紅酒更佳。'
      },
      {
        type: 'single',
        question: '搭配 Pizza Margherita（番茄莫扎瑞拉）最經典的選擇是？',
        options: ['A. Barolo', 'B. Chianti', 'C. Prosecco', 'D. Brunello di Montalcino'],
        correct: 1,
        explanation: 'Pizza Margherita 的番茄醬帶有酸度，Chianti 的 Sangiovese 高酸度正好呼應番茄的酸，再加上 Chianti 果香平衡莫扎瑞拉的奶味，是義大利最經典的配對。'
      },
      {
        type: 'single',
        question: 'Gorgonzola（義大利藍紋起司）最傳統的配酒是？',
        options: ['A. 干型 Chianti 紅酒', 'B. Moscato d\'Asti（甜白酒）', 'C. 高單寧 Barolo', 'D. Brut Prosecco'],
        correct: 1,
        explanation: '藍紋起司的濃郁鹹味和複雜風味需要甜酒的甜度來平衡，Moscato d\'Asti 的清甜和果香與 Gorgonzola 的鹹香形成絕妙的對比搭配，是義大利的經典組合。'
      },
      {
        type: 'multiple',
        question: '以下義大利麵與葡萄酒的搭配，哪些是正確的？（多選）',
        options: ['A. Puttanesca（橄欖番茄鯷魚麵）配 Nero d\'Avola', 'B. Cacio e Pepe（起司黑胡椒麵）配 Pecorino 白酒或 Trebbiano', 'C. Carbonara（奶油培根麵）配 Barolo 重型紅酒', 'D. 海鮮義大利麵配 Soave 或 Vermentino'],
        correct: [0, 1, 3],
        explanation: 'Puttanesca 的地中海濃郁風味配南部 Nero d\'Avola；Cacio e Pepe 的中性風味配 Pecorino 或 Trebbiano 白酒；海鮮麵配清爽白酒最搭。Carbonara 適合配白酒或輕紅，Barolo 過於強勁會壓過奶油味。'
      }
    ]
  }
}

// ─── 重寫 L1M4L2.json 為綜合評量 ─────────────────────────────────────────────

const L1M4L2_CONTENT = {
  lessonId: 'L1M4L2',
  title: 'Level 1 綜合評量',
  slides: [
    {
      type: 'title',
      title: '📋 Level 1 綜合評量',
      subtitle: '義大利葡萄酒 Level 1 · 入門完整測驗'
    },
    {
      type: 'list',
      title: '🎯 Level 1 重點回顧',
      points: [
        '🍷 義大利是全球出口量第一的葡萄酒國，擁有 350+ 原生品種',
        '📊 分級制度：DOCG（最高）> DOC > IGT > Vino da Tavola',
        '🏔️ 亞平寧山脈貫穿全境，三大氣候帶：大陸性 / 地中海 / 熱地中海',
        '🗺️ 北部（Piemonte, Veneto, Lombardy）：高品質紅酒與氣泡酒',
        '🗺️ 中部（Tuscany, Marche）：Sangiovese 主導',
        '🗺️ 南部 + 島嶼（Sicily, Sardinia）：濃郁本土品種',
        '👑 Nebbiolo → Barolo DOCG（之王）+ Barbaresco DOCG（之后）',
        '🌹 Sangiovese → Chianti Classico、Brunello di Montalcino',
        '💪 Barbera：高酸低單寧，日常佳釀，皮埃蒙特主力',
        '🌊 Veneto 三寶：Amarone（Appassimento）/ Soave / Prosecco（Glera）',
        '🌋 Sicily：Nero d\'Avola + Nerello Mascalese（Etna）',
        '🥂 Franciacorta DOCG：傳統法氣泡，義大利的香檳',
        '⛰️ Valtellina：山地梯田 Nebbiolo（Chiavennasca）',
        '🍇 五大紅品種：Nebbiolo / Sangiovese / Barbera / Montepulciano / Nero d\'Avola',
        '🤍 五大白品種：Pinot Grigio / Trebbiano / Garganega / Verdicchio / Vermentino',
        '🍽️ 地域性配對原則：What grows together, goes together',
        '🍕 番茄醬 → 高酸 Sangiovese；奶油醬 → 白酒',
        '🧀 藍紋起司 Gorgonzola → 甜型 Moscato d\'Asti',
        '📜 Marsala = 西西里加烈酒；Sforzato = Valtellina 風乾 Nebbiolo',
        '🎓 恭喜完成 Level 1！準備好進入 Level 2 了嗎？'
      ]
    }
  ]
}

// ─── quiz-bank.json（30 題，供綜合評量隨機抽 20 題）─────────────────────────

const QUIZ_BANK = {
  level: 'level1',
  title: 'Level 1 義大利葡萄酒入門 — 題庫',
  questions: [
    // 基礎概念（5 題）
    {
      type: 'single',
      question: '義大利本土葡萄品種超過多少種？',
      options: ['A. 100 種', 'B. 200 種', 'C. 350 種', 'D. 500 種'],
      correct: 2,
      explanation: '義大利擁有超過 350 個原生品種，是全球品種多樣性最高的葡萄酒國家。'
    },
    {
      type: 'single',
      question: '義大利葡萄酒最高等級是？',
      options: ['A. DOC', 'B. IGT', 'C. DOCG', 'D. Vino da Tavola'],
      correct: 2,
      explanation: 'DOCG（Denominazione di Origine Controllata e Garantita）是義大利最高等級，有官方品質保證。'
    },
    {
      type: 'single',
      question: 'DOCG 的字母「G」代表？',
      options: ['A. Geografica', 'B. Garantita', 'C. Grande', 'D. Genuina'],
      correct: 1,
      explanation: 'G = Garantita（保証），表示政府對品質的官方背書，是 DOCG 有別於 DOC 的核心意義。'
    },
    {
      type: 'multiple',
      question: '以下哪些是義大利北部的產酒州？（多選）',
      options: ['A. Piemonte', 'B. Veneto', 'C. Sicily', 'D. Lombardy'],
      correct: [0, 1, 3],
      explanation: 'Piemonte、Veneto 和 Lombardy 都在義大利北部。Sicily 是南部島嶼，是義大利最大的產酒島。'
    },
    {
      type: 'single',
      question: '超級托斯卡納（Super Tuscan）最初被分類為哪個等級？',
      options: ['A. DOCG', 'B. DOC', 'C. IGT', 'D. Vino da Tavola'],
      correct: 2,
      explanation: '超級托斯卡納使用非義大利法定品種（如 Cabernet Sauvignon），突破了當時的 DOC 法規，因此只能標示為 IGT，但品質卻頂尖。'
    },
    // 地理氣候（4 題）
    {
      type: 'single',
      question: '貫穿義大利半島全境的山脈是？',
      options: ['A. 阿爾卑斯山', 'B. 亞平寧山脈', 'C. 多洛米底山', 'D. 庇里牛斯山'],
      correct: 1,
      explanation: '亞平寧山脈從北到南貫穿義大利全境，影響各地的氣候、坡向和排水，是義大利最重要的地理特徵。'
    },
    {
      type: 'single',
      question: 'Etna 火山土壤對當地葡萄酒最大的貢獻是？',
      options: ['A. 大量水分', 'B. 降低氣溫', 'C. 賦予礦物感和火山岩風味', 'D. 增加日照'],
      correct: 2,
      explanation: 'Etna 的玄武岩火山土富含礦物質，賦予 Nerello Mascalese 等品種獨特的礦物感，是當地風土的核心魅力。'
    },
    {
      type: 'multiple',
      question: '以下哪些因素影響義大利各地葡萄酒的風格差異？（多選）',
      options: ['A. 緯度（南北溫差）', 'B. 海拔高度', 'C. 酒莊品牌形象', 'D. 土壤類型'],
      correct: [0, 1, 3],
      explanation: '緯度、海拔和土壤是影響風土的核心自然因素。品牌形象是市場行銷因素，不影響葡萄酒本質上的風格形成。'
    },
    {
      type: 'single',
      question: '秋霧（Nebbia）是哪個產區的標誌性氣候特徵？',
      options: ['A. Sicily', 'B. Piemonte', 'C. Veneto', 'D. Campania'],
      correct: 1,
      explanation: '秋霧是皮埃蒙特典型的秋季氣候，Nebbiolo 品種的名稱即源自 Nebbia（霧），有助於葡萄緩慢成熟、增加複雜度。'
    },
    // 皮埃蒙特（3 題）
    {
      type: 'single',
      question: 'Barolo 和 Barbaresco 最大的風格差異是？',
      options: ['A. Barolo 用白葡萄，Barbaresco 用紅葡萄', 'B. Barolo 強勁需長年陳年；Barbaresco 優雅可早飲', 'C. Barbaresco 酒精度遠高於 Barolo', 'D. 兩者風格完全相同'],
      correct: 1,
      explanation: 'Barolo 是「葡萄酒之王」，雄渾需 3 年以上陳年；Barbaresco 是「葡萄酒女王」，優雅細膩，2 年陳年後即可飲用。'
    },
    {
      type: 'single',
      question: 'Moscato d\'Asti DOCG 的酒精度約為多少？',
      options: ['A. 3%', 'B. 5.5%', 'C. 12%', 'D. 15%'],
      correct: 1,
      explanation: 'Moscato d\'Asti 是低酒精（約 5-5.5% ABV）的微甜氣泡白酒，帶有桃子和蜂蜜香，与Barolo同為皮埃蒙特的 DOCG 代表，風格截然不同。'
    },
    {
      type: 'multiple',
      question: '皮埃蒙特的三大核心紅葡萄品種是？（多選）',
      options: ['A. Nebbiolo', 'B. Barbera', 'C. Dolcetto', 'D. Sangiovese'],
      correct: [0, 1, 2],
      explanation: 'Nebbiolo（頂級）、Barbera（高酸日常）和 Dolcetto（易飲低酸）是皮埃蒙特的三大紅葡萄。Sangiovese 是托斯卡納品種，皮埃蒙特罕見。'
    },
    // 托斯卡納（3 題）
    {
      type: 'single',
      question: '黑公雞（Gallo Nero）標誌屬於哪個產區？',
      options: ['A. Brunello di Montalcino', 'B. Chianti Classico', 'C. Barolo', 'D. Vino Nobile di Montepulciano'],
      correct: 1,
      explanation: '黑公雞是 Chianti Classico DOCG 的官方標誌，象徵 Florence 和 Siena 之間核心產區的高品質，必須使用至少 80% Sangiovese。'
    },
    {
      type: 'single',
      question: 'Brunello di Montalcino 的最短法定陳年期是？',
      options: ['A. 2 年', 'B. 3 年', 'C. 5 年', 'D. 10 年'],
      correct: 2,
      explanation: 'Brunello di Montalcino 法定陳年至少 5 年（Riserva 為 6 年），是義大利陳年要求最嚴格的 DOCG 之一，確保了頂級的複雜度和陳年潛力。'
    },
    {
      type: 'multiple',
      question: '以下哪些是托斯卡納的 DOCG 紅酒？（多選）',
      options: ['A. Brunello di Montalcino', 'B. Chianti Classico', 'C. Barolo', 'D. Vino Nobile di Montepulciano'],
      correct: [0, 1, 3],
      explanation: 'Brunello、Chianti Classico 和 Vino Nobile 都是托斯卡納 DOCG。Barolo 在 Piemonte，以 Nebbiolo 釀造，和托斯卡納無關。'
    },
    // 威尼托（3 題）
    {
      type: 'single',
      question: 'Amarone della Valpolicella 的釀造工藝特點是？',
      options: ['A. 橡木桶二次發酵', 'B. 風乾葡萄（Appassimento）', 'C. 加入烈酒加強', 'D. 冷凍濃縮'],
      correct: 1,
      explanation: 'Appassimento：將葡萄置於竹架上風乾 3-4 個月，水分蒸發約 30%，糖分濃縮後才壓榨釀造，造就 Amarone 高酒精（15-17%）和濃郁複雜的特色。'
    },
    {
      type: 'single',
      question: 'Prosecco 採用哪種製作方式？',
      options: ['A. 傳統法（瓶中二次發酵）', 'B. Charmat 法（大罐二次發酵）', 'C. 添加 CO2 法', 'D. 單次發酵保留殘糖'],
      correct: 1,
      explanation: 'Prosecco 採用 Charmat 法（Metodo Martinotti）在大型鋼槽中二次發酵，成本比傳統法低，風格清爽果香，適合日常飲用。'
    },
    {
      type: 'single',
      question: 'Soave DOC 的核心品種是？',
      options: ['A. Pinot Grigio', 'B. Trebbiano', 'C. Garganega', 'D. Chardonnay'],
      correct: 2,
      explanation: 'Garganega（至少 70%）是 Soave 的靈魂品種，帶白花、杏仁和蜂蜜香氣，Soave Classico 是 Veneto 最傑出的白酒之一。'
    },
    // 西西里 & 倫巴第（3 題）
    {
      type: 'single',
      question: 'Etna DOC 被稱為「義大利的布根地」的原因是？',
      options: ['A. 種植 Pinot Noir', 'B. 強調 Contrada 地塊差異，細膩優雅的火山風土', 'C. 位置在北方', 'D. 酒價昂貴'],
      correct: 1,
      explanation: 'Etna 強調不同火山坡地（Contrada）的細微差異，以 Nerello Mascalese 釀出優雅細膩的風格，這種地塊哲學和布根地的 Climat 概念相近。'
    },
    {
      type: 'single',
      question: 'Franciacorta DOCG 和 Prosecco 最大的製作方式差異是？',
      options: ['A. 品種不同', 'B. Franciacorta 用傳統法（瓶中發酵）；Prosecco 用 Charmat 法（大罐發酵）', 'C. Prosecco 陳年更長', 'D. 兩者製作方式完全相同'],
      correct: 1,
      explanation: 'Franciacorta 採用 Metodo Classico（傳統法）在瓶中二次發酵，最少陳年 18 個月，比 Prosecco 的 Charmat 法工藝更繁複，也因此更接近香檳的風格層次。'
    },
    {
      type: 'single',
      question: 'Valtellina 的 Nebbiolo 當地稱為？',
      options: ['A. Prugnolo', 'B. Chiavennasca', 'C. Spanna', 'D. Picotener'],
      correct: 1,
      explanation: 'Valtellina 的 Nebbiolo 當地稱為 Chiavennasca，種植在高聳的阿爾卑斯山梯田，風格比 Barolo 更輕盈，帶有優雅的山林氣息。'
    },
    // 葡萄品種（4 題）
    {
      type: 'multiple',
      question: '以下哪些是義大利五大紅葡萄品種？（多選）',
      options: ['A. Nebbiolo', 'B. Sangiovese', 'C. Pinot Grigio', 'D. Barbera'],
      correct: [0, 1, 3],
      explanation: '義大利五大紅葡萄品種：Nebbiolo、Sangiovese、Barbera、Montepulciano、Nero d\'Avola。Pinot Grigio 是白葡萄品種，並非紅葡萄。'
    },
    {
      type: 'single',
      question: '義大利哪個白葡萄品種同時也是 Cognac 干邑的基酒品種？',
      options: ['A. Garganega', 'B. Vermentino', 'C. Trebbiano（Ugni Blanc）', 'D. Pinot Grigio'],
      correct: 2,
      explanation: 'Trebbiano 在法國稱為 Ugni Blanc，是 Cognac 干邑的核心原料品種，風格清淡，高酸，適合蒸餾。在義大利主要用於調配和日常白酒。'
    },
    {
      type: 'single',
      question: 'Marche 州最著名的白葡萄品種是？',
      options: ['A. Garganega', 'B. Verdicchio', 'C. Vermentino', 'D. Trebbiano'],
      correct: 1,
      explanation: 'Verdicchio 是 Marche 州的代表性白葡萄，Verdicchio dei Castelli di Jesi DOC 最為著名，清脆酸度搭配杏仁苦味的收尾是其標誌性特徵。'
    },
    {
      type: 'single',
      question: 'Nebbiolo 的酒色特徵是？',
      options: ['A. 極深如墨，幾乎不透光', 'B. 偏淺寶石紅，隨陳年出現磚橙色邊緣', 'C. 粉紅色調', 'D. 黃色調，類似白酒'],
      correct: 1,
      explanation: 'Nebbiolo 的矛盾在於高單寧、高酸，卻酒色偏淺，呈寶石紅帶石榴石色，陳年後邊緣出現磚橙色調，和酒的單寧強度形成有趣的對比。'
    },
    // 餐酒搭配（3 題）
    {
      type: 'single',
      question: '搭配番茄醬義大利麵最適合的品種特性是？',
      options: ['A. 低酸高甜', 'B. 高酸（和番茄酸度呼應）', 'C. 帶有橡木桶奶香', 'D. 高酒精'],
      correct: 1,
      explanation: '番茄醬本身酸度高，搭配高酸的葡萄酒（如 Sangiovese 的 Chianti）能讓酸度呼應，避免酒因為食物的酸而顯得平淡，這是高酸配高酸的重要原理。'
    },
    {
      type: 'single',
      question: 'Gorgonzola 藍紋起司最佳配酒是？',
      options: ['A. Barolo 頂級紅酒', 'B. Moscato d\'Asti 甜白酒', 'C. Dry Prosecco', 'D. Pinot Grigio'],
      correct: 1,
      explanation: '藍紋起司鹹味和複雜度，配甜酒產生「對比效果」，甜味平衡鹹鮮，Moscato d\'Asti 的甜度和果香與 Gorgonzola 的鹹香是義大利的傳統美食配對。'
    },
    {
      type: 'multiple',
      question: '以下海鮮料理應該搭配哪些酒款？（多選）',
      options: ['A. 海鮮義大利麵配 Soave（Garganega）', 'B. 蛤蜊麵配 Vermentino', 'C. 烤海鮮配 Barolo', 'D. 生蠔配 Prosecco Brut'],
      correct: [0, 1, 3],
      explanation: 'Soave 和 Vermentino 清爽礦感正適合海鮮；Prosecco Brut 氣泡和酸度清潔口腔，搭配生蠔極佳。Barolo 的高單寧會與海鮮的碘鮮味碰撞，形成金屬苦味，配對失敗。'
    },
    // 綜合（2 題）
    {
      type: 'multiple',
      question: '關於義大利葡萄酒的以下說法，哪些是正確的？（多選）',
      options: ['A. 義大利是全球葡萄酒出口量第一的國家', 'B. 所有 20 個行政州都生產葡萄酒', 'C. Piemonte 有超過 18 個 DOCG', 'D. 義大利葡萄酒不受歐盟法規管轄'],
      correct: [0, 1, 2],
      explanation: '義大利確實是全球出口量第一，全國 20 個州都產酒，Piemonte 更有多達 18 個 DOCG 產區。義大利身為歐盟成員國，葡萄酒法規完全符合歐盟農業和地理標誌規範。'
    },
    {
      type: 'single',
      question: 'Marsala 是哪種類型的酒，主要產自哪裡？',
      options: ['A. 干型紅酒，產自 Piemonte', 'B. 加烈酒，產自 Sicily', 'C. 氣泡酒，產自 Veneto', 'D. 甜型白酒，產自 Tuscany'],
      correct: 1,
      explanation: 'Marsala 是西西里（Sicily）著名的加烈酒，在發酵中加入烈酒提升至約 17-20% ABV，由英國商人 John Woodhouse 於 18 世紀發明，設計用於長途海運。'
    }
  ]
}

// ─── 執行修改 ─────────────────────────────────────────────────────────────────

let successCount = 0
let errorCount = 0

// 修改 11 個課程 JSON：在最後一個 slide 前插入 quiz slide
for (const [lessonId, quizSlide] of Object.entries(QUIZ_MAP)) {
  const fp = filePath(`${lessonId}.json`)
  try {
    const data = JSON.parse(readFileSync(fp, 'utf-8'))
    const slides = data.slides || []

    // 移除已存在的 quiz slide（避免重複）
    const filtered = slides.filter(s => s.type !== 'quiz')

    // 在最後一個 slide 前插入（最後一個通常是重點總結/課程目標）
    const insertAt = filtered.length > 1 ? filtered.length - 1 : filtered.length
    filtered.splice(insertAt, 0, quizSlide)
    data.slides = filtered

    writeFileSync(fp, JSON.stringify(data, null, 2), 'utf-8')
    console.log(`✅ ${lessonId}: quiz slide 已插入（位置 ${insertAt}）`)
    successCount++
  } catch (e) {
    console.error(`❌ ${lessonId}: ${e.message}`)
    errorCount++
  }
}

// 重寫 L1M4L2.json
try {
  writeFileSync(filePath('L1M4L2.json'), JSON.stringify(L1M4L2_CONTENT, null, 2), 'utf-8')
  console.log('✅ L1M4L2.json: 已重寫為綜合評量')
  successCount++
} catch (e) {
  console.error(`❌ L1M4L2.json: ${e.message}`)
  errorCount++
}

// 建立 quiz-bank.json
try {
  writeFileSync(filePath('quiz-bank.json'), JSON.stringify(QUIZ_BANK, null, 2), 'utf-8')
  console.log(`✅ quiz-bank.json: 已建立（${QUIZ_BANK.questions.length} 題）`)
  successCount++
} catch (e) {
  console.error(`❌ quiz-bank.json: ${e.message}`)
  errorCount++
}

console.log(`\n📊 完成：${successCount} 成功，${errorCount} 失敗`)
