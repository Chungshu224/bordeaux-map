/**
 * inject-bordeaux-quiz.mjs
 * 為波爾多 Level 1 的 l1-1.js ~ l1-7.js 每個 lesson 末尾加入 5 題 quiz slide
 * 並建立 public/data/bordeaux-l1-quiz-bank.json（30 題，供 l1-8 綜合評量用）
 *
 * Bordeaux 特殊架構：課程資料在 src/data/lessons/l1-*.js（JS 模組，非 JSON）
 * 注入策略：在檔案結尾的 `]\nexport default lessonContent` 前插入 quiz slide 物件
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const LESSONS_DIR = join(__dirname, '..', 'src', 'data', 'lessons')
const PUBLIC_DATA = join(__dirname, '..', 'public', 'data')

// ─── Per-lesson quiz slides （5 題/課）─────────────────────────────────────

const LESSON_QUIZZES = {
  'l1-1': {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          { type: 'single', question: '波爾多位於法國的哪個方向？', options: ['A. 東北部', 'B. 西南部', 'C. 中部', 'D. 東南部'], correct: 1, explanation: '波爾多位於法國西南部，北緯44-45度之間，距大西洋約60公里，得天獨厚的地理位置造就了其溫和的海洋性氣候。' },
          { type: 'single', question: '波爾多最重要的河流是哪條？', options: ['A. 塞納河（Seine）', 'B. 吉隆河（Gironde）', 'C. 隆河（Rhône）', 'D. 盧瓦爾河（Loire）'], correct: 1, explanation: '吉隆河（Gironde）河口是波爾多的核心地理特徵，由加龍河和多爾多涅河匯合而成，「左岸」和「右岸」的劃分以此為基準。' },
          { type: 'multiple', question: '以下哪些河流流經波爾多產區？（多選）', options: ['A. 加龍河（Garonne）', 'B. 多爾多涅河（Dordogne）', 'C. 索恩河（Saône）', 'D. 吉隆河（Gironde）'], correct: [0, 1, 3], explanation: '波爾多三大河流系統：加龍河（左岸西側）、多爾多涅河（右岸北側）和兩河匯合形成的吉隆河（Gironde），索恩河位於布根地，不在波爾多。' },
          { type: 'single', question: '左岸（Left Bank）和右岸（Right Bank）以什麼為基準劃分？', options: ['A. 城市波爾多中心', 'B. 吉隆河/加龍河的西東兩側', 'C. 以山脊線為界', 'D. 以高速公路為界'], correct: 1, explanation: '波爾多的「左岸」是指吉隆河/加龍河的西（左）岸，包含梅多克和格拉夫；「右岸」是東（右）岸，包含波美侯和聖愛美濃。面向河流下游，左手邊為左岸。' },
          { type: 'single', question: '波爾多「兩海之間（Entre-Deux-Mers）」指的是什麼？', options: ['A. 同時面向大西洋和地中海', 'B. 加龍河和多爾多涅河之間的三角地帶', 'C. 波爾多城東西兩側的海峽', 'D. 左岸和右岸之間的地帶'], correct: 1, explanation: '「兩海之間」（Entre-Deux-Mers）是加龍河和多爾多涅河之間的三角地帶，字面意思是「兩河之間」（被誤譯為兩海），以清爽的白酒著稱，是波爾多最大的白酒 AOC。' }
        ]
      }
    }
  },

  'l1-2': {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          { type: 'single', question: '波爾多屬於哪種氣候類型？', options: ['A. 地中海氣候', 'B. 大陸性氣候', 'C. 溫帶海洋性氣候', 'D. 熱帶季風氣候'], correct: 2, explanation: '波爾多屬於溫帶海洋性氣候（Temperate Oceanic Climate），受大西洋和暖流調節，冬暖夏涼，全年降水分布均勻，是葡萄成熟的理想環境。' },
          { type: 'single', question: '大西洋對波爾多氣候最主要的影響是什麼？', options: ['A. 帶來強烈乾燥的焚風', 'B. 調節溫度，減少極端天氣', 'C. 增加夏季高溫', 'D. 帶來頻繁的冰雹'], correct: 1, explanation: '大西洋暖流（墨西哥灣流）調節了波爾多的溫度，使其不像同緯度的大陸性氣候那樣冬季嚴寒、夏季酷熱，減少了葡萄生長發育中的極端事件。' },
          { type: 'multiple', question: '波爾多葡萄酒的年份差異最主要受哪些氣候因素影響？（多選）', options: ['A. 夏季的溫度和日照', 'B. 秋季採收前的降雨', 'C. 春霜的早晚', 'D. 暴風雨和冰雹'], correct: [0, 1, 2, 3], explanation: '波爾多年份差異受多重因素影響：夏季熱量積累決定葡萄成熟度；秋雨可能稀釋果汁；春霜損傷嫩芽；冰雹直接破壞葡萄串，四者都對年份品質有深遠影響。' },
          { type: 'single', question: '「印干」（Landes）森林對波爾多的氣候作用是？', options: ['A. 提供額外水分', 'B. 阻擋北風', 'C. 阻擋大西洋的冷濕海風，保護葡萄園', 'D. 增加土壤的礦物質'], correct: 2, explanation: '波爾多西南方的朗德（Landes）松林是天然防風林，阻擋了來自大西洋的冷濕海風，使葡萄園免受大風和過多降雨的影響，形成有利的微氣候。' },
          { type: 'single', question: '波爾多最大的氣候風險之一「貴腐菌（Botrytis）」在哪種條件下是有益的？', options: ['A. 任何有霜的寒冷早晨', 'B. 特定濕潤晨霧後的暖乾午後，形成貴腐甜酒', 'C. 連續大雨後的環境', 'D. 極端炎熱乾燥的夏季'], correct: 1, explanation: '貴腐菌（Noble Rot / Pourriture Noble）在特定條件下是釀製甜酒的寶貴資產：晨霧造就的濕度讓菌絲穿透葡萄皮，但隨後暖乾的天氣讓水分蒸發、糖分濃縮，蘇玳（Sauternes）就是利用此原理釀造的世界頂級甜酒。' }
        ]
      }
    }
  },

  'l1-3': {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          { type: 'single', question: '波爾多左岸最主要的紅葡萄品種是？', options: ['A. Merlot', 'B. Cabernet Franc', 'C. Cabernet Sauvignon', 'D. Petit Verdot'], correct: 2, explanation: 'Cabernet Sauvignon 是波爾多左岸梅多克和格拉夫的主導品種，以高單寧、高酸、深色和長陳年潛力著稱，在礫石排水良好的土壤中表現最佳。' },
          { type: 'single', question: '波爾多右岸最主要的葡萄品種是？', options: ['A. Cabernet Sauvignon', 'B. Merlot', 'C. Petit Verdot', 'D. Malbec'], correct: 1, explanation: 'Merlot 統治右岸（波美侯、聖愛美濃），在黏土和石灰岩土壤上表現卓越，比 Cabernet Sauvignon 更早熟、單寧更柔，口感圓潤豐盈，是世界種植面積最廣的紅葡萄品種之一。' },
          { type: 'multiple', question: '波爾多的主要紅葡萄品種包括哪些？（多選）', options: ['A. Cabernet Sauvignon', 'B. Merlot', 'C. Cabernet Franc', 'D. Syrah'], correct: [0, 1, 2], explanation: 'Cabernet Sauvignon、Merlot 和 Cabernet Franc 都是波爾多允許的紅葡萄品種。Syrah/Shiraz 是隆河谷地的品種，波爾多 AOC 規範中不允許使用。另有少量 Petit Verdot 和 Malbec。' },
          { type: 'single', question: '波爾多主要白葡萄品種包含哪兩種？', options: ['A. Chardonnay 和 Sauvignon Blanc', 'B. Sauvignon Blanc 和 Sémillon', 'C. Riesling 和 Gewürztraminer', 'D. Viognier 和 Roussanne'], correct: 1, explanation: 'Sauvignon Blanc（帶清爽草本香）和 Sémillon（圓潤蠟質感，陳年後發展出複雜度）是波爾多最重要的白葡萄品種，在格拉夫和蘇玳都有頂尖表現，蘇玳更以 Sémillon 的貴腐甜酒聞名。' },
          { type: 'single', question: '為什麼波爾多採用「調配（Blending）」而非單一品種釀酒？', options: ['A. 法規禁止使用單一品種', 'B. 調配可以平衡不同品種的優缺點，提升複雜度和穩定性', 'C. 單一品種在波爾多根本無法成熟', 'D. 這是現代派的新趨勢，傳統上並不如此'], correct: 1, explanation: '波爾多採用多品種調配（所謂「波爾多調配」）是因為：不同品種的成熟時間、酸度、單寧、香氣各不相同，調配可取長補短；也讓酒莊在年份差異較大的情況下仍能維持穩定風格。' }
        ]
      }
    }
  },

  'l1-4': {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          { type: 'single', question: '梅多克（Médoc）位於波爾多的哪一岸？', options: ['A. 右岸', 'B. 左岸', 'C. 兩海之間', 'D. 河中央小島'], correct: 1, explanation: '梅多克是波爾多左岸最著名的產區，沿吉隆河西岸延伸，以礫石土壤和 Cabernet Sauvignon 為主導，1855 年的著名分級制度就是針對梅多克和格拉夫建立的。' },
          { type: 'single', question: '波美侯（Pomerol）和聖愛美濃（Saint-Émilion）在哪一岸？', options: ['A. 左岸', 'B. 右岸', 'C. 兩海之間', 'D. 分屬兩岸'], correct: 1, explanation: '波美侯和聖愛美濃都在右岸，以 Merlot 和 Cabernet Franc 為主導品種，土壤以黏土和石灰岩為主，與左岸礫石的 Cabernet Sauvignon 風格完全不同。右岸是波爾多另一個頂級產地，Petrus 就在波美侯。' },
          { type: 'multiple', question: '以下哪些是左岸的特徵？（多選）', options: ['A. 礫石和砂礫土壤，排水優良', 'B. Cabernet Sauvignon 為主', 'C. 1855 年分級制度覆蓋的主要地區', 'D. Merlot 佔主導地位'], correct: [0, 1, 2], explanation: '左岸（主要是梅多克、格拉夫）的特徵：礫石土壤排水優良 → 適合晚熟的 Cabernet Sauvignon；1855 年分級也主要涵蓋此區。Merlot 是右岸的主導品種，不是左岸。' },
          { type: 'single', question: '為什麼左岸土壤以礫石為主對 Cabernet Sauvignon 有利？', options: ['A. 礫石直接提供葡萄所需的養分', 'B. 礫石反射熱量、排水快，有助晚熟的 Cabernet Sauvignon 成熟', 'C. 礫石防止病蟲害', 'D. 礫石是決定等級的法規標準'], correct: 1, explanation: '礫石土壤的兩大優點：反射熱量讓土壤和空氣溫度升高，且排水迅速避免積水。這正好配合了 Cabernet Sauvignon 晚熟的本性——需要更多積溫和乾燥條件才能完全成熟，礫石地的波爾多正好提供此環境。' },
          { type: 'single', question: '「右岸」為什麼以 Merlot 為主？', options: ['A. 因為 Merlot 比 Cabernet 貴，釀酒師偏好它', 'B. 右岸黏土保水性佳，適合早熟的 Merlot', 'C. 法規規定右岸只能種 Merlot', 'D. 氣候比左岸熱，所以需要更耐熱的品種'], correct: 1, explanation: '右岸（波美侯、聖愛美濃）的土壤以黏土和石灰岩為主，保水性強，溫度比左岸礫石地略低。早熟的 Merlot 和 Cabernet Franc 在此環境中能穩定成熟，與土壤形成完美的風土匹配。' }
        ]
      }
    }
  },

  'l1-5': {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          { type: 'single', question: '蘇玳（Sauternes）以生產哪種類型的葡萄酒著稱？', options: ['A. 干型紅酒', 'B. 起泡酒', 'C. 貴腐甜白酒', 'D. 干型白酒'], correct: 2, explanation: '蘇玳 AOC 以利用貴腐菌（Botrytis Cinerea）釀製的甜白酒聞名，金黃色的 Château d\'Yquem 是世界最偉大的甜酒之一，採用 Sémillon 和 Sauvignon Blanc 調配，甜度高但酸度也十分顯著。' },
          { type: 'multiple', question: '波爾多生產哪些類型的葡萄酒？（多選）', options: ['A. 干型紅酒', 'B. 干型白酒', 'C. 貴腐甜白酒（如蘇玳）', 'D. 起泡酒（Crémant de Bordeaux）'], correct: [0, 1, 2, 3], explanation: '波爾多是一個多元的葡萄酒產區：以干型紅酒最知名；格拉夫、兩海之間產干型白酒；蘇玳和巴薩克產頂級甜酒；也生產相對少量的 Crémant de Bordeaux 起泡酒。' },
          { type: 'single', question: '「副標（Second Wine）」是什麼概念？', options: ['A. 品質次於第一瓶酒的拒絕策略', 'B. 大酒莊用年輕藤蔓或未達正牌標準的葡萄釀製的「二軍酒」', 'C. 只向私人客戶販售的特釀', 'D. 白酒的法定名稱'], correct: 1, explanation: '波爾多頂級酒莊通常釀製「正牌酒（Grand Vin）」和「二軍酒（Second Wine）」：年輕藤蔓、品質稍低地塊的葡萄或品質未達正牌標準的批次，用來釀製二軍酒。如拉菲的二軍是小拉菲（Carruades de Lafite）。' },
          { type: 'single', question: '波爾多干型白酒（Bordeaux Blanc）的風格偏向？', options: ['A. 甜型，高酒精', 'B. 清新草本（Sauvignon 為主）或圓潤複雜（Sémillon 為主）', 'C. 濃郁奶油感，類似布根地', 'D. 高單寧，接近紅酒'], correct: 1, explanation: '波爾多干型白酒根據品種比例有兩種風格：Sauvignon Blanc 比例高的清新草本風；Sémillon 比例高的圓潤蠟感。格拉夫（尤其是 Pessac-Léognan）生產的干型白酒是波爾多最頂尖的白酒。' },
          { type: 'single', question: '波爾多粉紅酒（Bordeaux Rosé）使用什麼品種釀造？', options: ['A. 只用 Merlot', 'B. 只用 Cabernet Sauvignon', 'C. 可用任何波爾多允許的紅葡萄品種', 'D. 混合紅白酒調製'], correct: 2, explanation: '波爾多粉紅酒可以使用所有 AOC 允許的紅葡萄品種（Merlot、Cabernet Sauvignon、Cabernet Franc 等），採用直接壓榨法或短時間浸皮釀造，呈現不同深淺的粉紅色，風格清爽易飲。' }
        ]
      }
    }
  },

  'l1-6': {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          { type: 'single', question: '1855 年分級制度的最高等級是？', options: ['A. 五級酒莊（Cinquièmes Crus）', 'B. 二級酒莊（Deuxièmes Crus）', 'C. 一級酒莊（Premiers Crus）', 'D. 超級一級莊（Super Seconds）'], correct: 2, explanation: '1855 年分級（梅多克和格拉夫）將紅酒莊分為五個等級，一級酒莊（Premiers Crus）是最高等級，原本只有四個（拉菲、拉圖、瑪歌、歐布里翁），1973 年木桐加入，共五個一級莊。' },
          { type: 'multiple', question: '波爾多五大一級酒莊（Premier Grand Cru Classé）包括哪些？（多選）', options: ['A. Château Lafite Rothschild', 'B. Château Mouton Rothschild', 'C. Château Pétrus', 'D. Château Latour'], correct: [0, 1, 3], explanation: '1855 年五大一級莊：Lafite、Margaux、Latour、Haut-Brion（以及 1973 年晉升的 Mouton Rothschild）。Pétrus 是波美侯傳奇但不屬於 1855 年分級體系（波美侯沒有官方分級制度）。' },
          { type: 'single', question: '聖愛美濃（Saint-Émilion）有自己的分級制度，最高等級是？', options: ['A. Premier Grand Cru Classé A', 'B. Grand Cru Classé', 'C. Cru Bourgeois', 'D. Grand Cru Supérieur'], correct: 0, explanation: '聖愛美濃的分級（Saint-Émilion Classification）最高等級是「Premier Grand Cru Classé A」，目前只有 Château Pétrus 所在的波美侯沒有此制度，聖愛美濃的 PGCCA 包括奧松（Ausone）和白馬（Cheval Blanc）等。' },
          { type: 'single', question: '「中級酒（Cru Bourgeois）」是哪個地區的分級？', options: ['A. 右岸聖愛美濃', 'B. 格拉夫（Graves）', 'C. 梅多克（Médoc）', 'D. 蘇玳（Sauternes）'], correct: 2, explanation: 'Cru Bourgeois 是梅多克的非正式分級體系，針對未入選 1855 年正式分級但品質卓越的酒莊。分為 Cru Bourgeois、Cru Bourgeois Supérieur 和 Cru Bourgeois Exceptionnel 三個次等級。' },
          { type: 'single', question: 'AOC（Appellation d\'Origine Contrôlée）制度的最重要功能是什麼？', options: ['A. 規定葡萄酒的最低售價', 'B. 保護特定地理區域的葡萄酒名稱和生產規範', 'C. 認定酒莊的歷史等級', 'D. 核發出口許可'], correct: 1, explanation: 'AOC 制度（現代更新為 AOP）保護特定地理區域的葡萄酒：只有符合該地理範圍內種植、釀造規範（品種、產量上限、釀造方法）的酒才能使用 AOC 名稱，同時防止外地仿冒。' }
        ]
      }
    }
  },

  'l1-7': {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          { type: 'single', question: '品酒時的「觀色」主要評估什麼？', options: ['A. 酒精度', 'B. 酒的顏色深淺、清澈度和色調', 'C. 香氣強度', 'D. 單寧多少'], correct: 1, explanation: '品酒觀色（Visual Assessment）評估：色澤深淺（深紅/淺紅反映品種、年齡、葡萄成熟度）；清澈度（有無渾濁）；石榴紅/寶石紅/磚紅等色調（反映陳年程度）。' },
          { type: 'single', question: '波爾多紅酒在鼻腔最典型的「一級香氣（Primary Aromas）」是？', options: ['A. 橡木桶香：如烤橡木、香草', 'B. 陳年發展：如皮革、泥土', 'C. 葡萄本身的果香：如黑醋栗、李子、藍莓', 'D. 乳酪發酵味'], correct: 2, explanation: '一級香氣（品種香/果香）直接來自葡萄本身：波爾多紅酒（Cab Sauv 主導）的一級香氣以黑色水果為主——黑醋栗（Cassis）、李子、黑莓。橡木和皮革屬於二、三級香氣。' },
          { type: 'multiple', question: '品酒的「口感（Palate）」評估包含哪些要素？（多選）', options: ['A. 酸度（Acidity）', 'B. 單寧（Tannins）', 'C. 酒體（Body）', 'D. 餘韻長度（Finish Length）'], correct: [0, 1, 2, 3], explanation: '完整的口感評估包含：酸度（活躍度/骨幹）、單寧（澀感/結構）、甜度（殘糖）、酒體（輕/中/飽滿）、酒精感、複雜度和餘韻長短。這些要素共同決定了葡萄酒的整體印象和品質評估。' },
          { type: 'single', question: '「盲品（Blind Tasting）」的主要目的是？', options: ['A. 節省成本', 'B. 排除品牌偏見，客觀評估酒的品質', 'C. 訓練記憶力', 'D. 法規要求'], correct: 1, explanation: '盲品是專業品酒師訓練的核心技能：不看酒瓶、不知道品牌，純粹從感官評估來判斷酒的品質、品種、產區和年份。排除心理暗示（如貴酒=好酒）的干擾，訓練客觀的感官判斷。' },
          { type: 'single', question: '波爾多紅酒陳年後最常出現的「三級香氣（Tertiary Aromas）」是？', options: ['A. 新鮮黑醋栗', 'B. 青草和蔬菜', 'C. 皮革、雪松、雪茄盒、土腥', 'D. 牛奶糖和奶油'], correct: 2, explanation: '三級香氣（陳年香气/Bouquet）是波爾多紅酒在瓶中陳年後發展出的複雜香氣：皮革、雪松木、雪茄盒、泥土、松露、動物感、馬鞍皮等，這正是陳年波爾多的迷人之處，也是收藏價值的體現。' }
        ]
      }
    }
  }
}

// ─── quiz-bank.json（30 題，供 l1-8 綜合評量）────────────────────────────

const QUIZ_BANK = {
  level: 'l1',
  title: 'Level 1 波爾多葡萄酒入門 — 題庫',
  questions: [
    // 地理
    { type: 'single', question: '波爾多位於法國的哪個方向？', options: ['A. 東北部', 'B. 西南部', 'C. 中部', 'D. 東南部'], correct: 1, explanation: '波爾多位於法國西南部，北緯44-45度，距大西洋約60公里，得天獨厚的地理帶來溫和海洋性氣候。' },
    { type: 'single', question: '吉隆河是由哪兩條河流匯合而成？', options: ['A. 塞納河和盧瓦爾河', 'B. 加龍河和多爾多涅河', 'C. 隆河和薩翁河', 'D. 萊茵河和摩澤爾河'], correct: 1, explanation: '吉隆河（Gironde）是南部加龍河（Garonne）和北部多爾多涅河（Dordogne）匯合的寬廣河口，是波爾多左右岸的自然分界。' },
    { type: 'single', question: '「兩海之間（Entre-Deux-Mers）」是指哪兩河之間的地區？', options: ['A. 吉隆河和大西洋', 'B. 加龍河和多爾多涅河', 'C. 吉隆河和加龍河', 'D. 多爾多涅河和索恩河'], correct: 1, explanation: '「兩海之間」是加龍河和多爾多涅河夾成的三角地帶，以清爽干型白酒著稱，是波爾多最大的白酒 AOC。' },
    // 氣候
    { type: 'single', question: '波爾多屬於哪種氣候類型？', options: ['A. 地中海氣候', 'B. 溫帶海洋性氣候', 'C. 大陸性氣候', 'D. 半乾旱氣候'], correct: 1, explanation: '受大西洋和暖流影響，波爾多屬溫帶海洋性氣候，冬暖夏涼，全年降水均勻，是葡萄生長的理想環境。' },
    { type: 'single', question: '哪種氣候現象在特定條件下有助蘇玳甜酒的釀製？', options: ['A. 冰雹', 'B. 春霜', 'C. 貴腐菌（Botrytis）', 'D. 暴洪'], correct: 2, explanation: '貴腐菌（Noble Rot）在晨霧後暖乾環境下，穿透葡萄皮使水分蒸發糖分濃縮，是釀製蘇玳頂級甜白酒的關鍵。' },
    // 品種
    { type: 'single', question: '波爾多左岸最主要的紅葡萄品種是？', options: ['A. Merlot', 'B. Cabernet Franc', 'C. Cabernet Sauvignon', 'D. Syrah'], correct: 2, explanation: 'Cabernet Sauvignon 在左岸礫石土壤中表現最佳，以高單寧高酸和長陳年潛力著稱，是梅多克一級莊的核心品種。' },
    { type: 'single', question: '波爾多右岸（波美侯、聖愛美濃）最主要的品種是？', options: ['A. Cabernet Sauvignon', 'B. Merlot', 'C. Pinot Noir', 'D. Grenache'], correct: 1, explanation: 'Merlot 在右岸黏土石灰岩土壤上表現最佳，較早熟、單寧柔軟、口感豐盈，是波美侯 Pétrus 的主導品種。' },
    { type: 'multiple', question: '波爾多允許的主要紅葡萄品種包括？（多選）', options: ['A. Cabernet Sauvignon', 'B. Merlot', 'C. Cabernet Franc', 'D. Petit Verdot'], correct: [0, 1, 2, 3], explanation: '波爾多 AOC 允許的紅葡萄包括：Cabernet Sauvignon、Merlot、Cabernet Franc（三大主角），以及 Petit Verdot、Malbec 和 Carménère（輔助品種）。' },
    { type: 'single', question: '波爾多的頂級白酒品種組合是？', options: ['A. Chardonnay 和 Pinot Gris', 'B. Sauvignon Blanc 和 Sémillon', 'C. Riesling 和 Muscat', 'D. Viognier 和 Marsanne'], correct: 1, explanation: 'Sauvignon Blanc（清新草本）和 Sémillon（圓潤複雜，陳年潛力強）是波爾多干型和甜型白酒的主要品種組合，也是蘇玳甜酒的核心。' },
    // 左右岸差異
    { type: 'multiple', question: '以下哪些是左岸的特徵？（多選）', options: ['A. 礫石土壤，排水優良', 'B. Cabernet Sauvignon 為主導', 'C. 1855 年正式分級主要蓋此區', 'D. 黏土土壤，Merlot 為主'], correct: [0, 1, 2], explanation: '左岸（梅多克、格拉夫）特徵：礫石排水好→適合晚熟 Cab Sauv；1855 年五大一級莊都在此。黏土+Merlot 是右岸的特色。' },
    { type: 'single', question: '為什麼右岸黏土土壤更適合 Merlot？', options: ['A. 黏土含更多礦物質', 'B. 黏土保水性好，適合早熟的 Merlot 穩定成熟', 'C. 法規規定右岸只能種 Merlot', 'D. 黏土防蟲防病'], correct: 1, explanation: '右岸黏土保水性強，溫度比左岸礫石地略低，讓早熟的 Merlot 在不過熟的情況下完美成熟。Merlot 不需要像 Cab Sauv 那麼長的生長季，黏土地恰到好處。' },
    // 酒款類型
    { type: 'single', question: '蘇玳（Sauternes）以什麼類型的酒著稱？', options: ['A. 濃郁干型紅酒', 'B. 頂級起泡酒', 'C. 貴腐甜白酒', 'D. 橡木桶陳年干型白酒'], correct: 2, explanation: '蘇玳以 Botrytis 貴腐甜白酒著稱，Château d\'Yquem 是其巔峰，甜橙蜜、杏桃、薑的香氣，酸甜平衡，可陳年數十年甚至百年。' },
    { type: 'single', question: '「副標酒（Second Wine）」的概念是？', options: ['A. 由副總釀酒師掌管的酒款', 'B. 以年輕藤蔓或未達正牌標準的葡萄釀製的二軍酒', 'C. 只在波爾多境內銷售的酒', 'D. 蘇玳甜酒的法定稱呼'], correct: 1, explanation: '副標/二軍酒是頂級酒莊降低品質標準的方式：未達正牌門檻的批次釀成副標，品質穩定但定價親民。如拉菲正牌對應小拉菲（Carruades de Lafite）。' },
    // 分級制度
    { type: 'single', question: '1855 年分級的一級酒莊原本有幾個（不含 1973 年晉升的）？', options: ['A. 3 個', 'B. 4 個', 'C. 5 個', 'D. 10 個'], correct: 1, explanation: '1855 年最初的一級莊只有四個：Lafite、Latour、Margaux（左岸）和 Haut-Brion（格拉夫），1973 年 Mouton Rothschild 晉升才成為五個。' },
    { type: 'single', question: '聖愛美濃分級制度最高等級是？', options: ['A. Grand Cru Classé', 'B. Premier Grand Cru Classé A', 'C. Grand Vin Classé', 'D. Cru Exceptionnel'], correct: 1, explanation: '聖愛美濃（Saint-Émilion）的最高等級是「Premier Grand Cru Classé A（PGCCA）」，目前有奧松（Ausone）、白馬（Cheval Blanc）、金鐘（Angélus）和帕維（Pavie）等。' },
    { type: 'single', question: '波美侯（Pomerol）的分級制度有何特別？', options: ['A. 使用 1855 年相同體系', 'B. 沒有官方分級制度，靠市場和聲望決定', 'C. 有自己的 Grand Cru Classé', 'D. 由 CIVB 定期修訂'], correct: 1, explanation: '波美侯是波爾多唯一沒有官方分級制度的知名產區，葡萄酒的地位全靠市場聲望決定。Petrus 雖沒有任何官方「一級」頭銜，但其市場地位超越所有正式一級莊。' },
    { type: 'single', question: 'AOC 制度最主要的功能是？', options: ['A. 保護特定地理區域的名稱和生產規範', 'B. 決定最低售價', 'C. 核准酒莊的出口配額', 'D. 監測每年的氣候'], correct: 0, explanation: 'AOC（現為 AOP）是法定地理保護制度，確保「Bordeaux AOC」只能來自波爾多特定地區、特定品種和符合質量的方式生產，保護消費者和生產者雙方利益。' },
    // 品酒
    { type: 'single', question: '品酒三個主要步驟是？', options: ['A. 購買、儲存、飲用', 'B. 觀色 → 聞香 → 品味', 'C. 選酒、醒酒、搭餐', 'D. 辨別品種、年份、產地'], correct: 1, explanation: '標準品酒步驟：觀色（色澤/清澈度/黏稠度）→ 聞香（一級果香/二級發酵香/三級陳年香）→ 品味（酸度/單寧/酒體/餘韻），是系統性評估葡萄酒的基礎方法。' },
    { type: 'single', question: '波爾多陳年老酒最典型的三級香氣（Tertiary Aromas）是？', options: ['A. 新鮮黑醋栗和藍莓', 'B. 青草和蔬菜', 'C. 皮革、雪茄盒、雪松木、松露', 'D. 奶油和香草（橡木桶影響）'], correct: 2, explanation: '三級香氣（陳年香）是波爾多老酒的靈魂：皮革、雪茄盒、雪松、泥土、松露等，這些香氣在瓶中緩慢還原發展，是愛好者為好年份名莊等候 10-20 年的最大動力。' },
    { type: 'multiple', question: '「口感（Palate）」評估包含哪些要素？（多選）', options: ['A. 酸度', 'B. 單寧', 'C. 酒體', 'D. 餘韻'], correct: [0, 1, 2, 3], explanation: '完整口感四要素：酸度（骨架/保鮮）、單寧（結構/澀感）、酒體（輕/中/飽滿）、餘韻（長/中/短，複雜度）——總體構成對葡萄酒品質的完整評估。' },
    // 進階知識
    { type: 'single', question: '波爾多採用多品種調配（Blending）的主要原因是？', options: ['A. 調配能賣更高的價格', 'B. 平衡不同品種的優缺點，提升複雜度和穩定性', 'C. 法規要求至少三個品種', 'D. 單一品種在波爾多無法生長'], correct: 1, explanation: '調配讓不同品種取長補短：Cab Sauv 的高單寧配 Merlot 的豐盈；早熟品種保底，晚熟品種增深度；也讓酒莊在年份不穩定時維持風格一致性。' },
    { type: 'single', question: '波爾多「期酒（En Primeur）」制度是指？', options: ['A. 在採收前就售出的酒', 'B. 在葡萄酒仍在橡木桶中陳年時就預訂購買', 'C. 只向餐廳銷售的特定批次', 'D. 波爾多最便宜的入門款'], correct: 1, explanation: '期酒（En Primeur）是波爾多獨特的交易制度：每年春天在葡萄尚在桶中陳年時開放訂購，通常在採收後約18個月出貨。買家可能以較低價購入好年份，但也承擔品質和市場變動的風險。' },
    { type: 'single', question: '「Château」在波爾多的意思是？', options: ['A. 一定是一個城堡建築', 'B. 一個莊園，擁有自己葡萄園並自行裝瓶的歷史性單位', 'C. 分級制度的最高稱號', 'D. 等同於布根地的 Domaine，僅是品牌'], correct: 1, explanation: '「Château」在波爾多指一個葡萄酒莊園，強調「地方性」：特定地塊、特定建築物（不一定是城堡）、自有葡萄園和自行生產裝瓶。是波爾多葡萄酒品牌認同的核心，現有超過 7000 個 Château。' },
    { type: 'single', question: '梅多克（Médoc）最有名的村莊 AOC 包含哪四個？', options: ['A. Pauillac, Saint-Julien, Margaux, Saint-Estèphe', 'B. Pomerol, Fronsac, Blaye, Bourg', 'C. Sauternes, Barsac, Loupiac, Cadillac', 'D. Pessac-Léognan, Graves, Langon, Cérons'], correct: 0, explanation: '梅多克四大著名 AOC 村莊：Pauillac（三個一級莊——拉菲、拉圖、木桐）、Saint-Julien（左岸最精練）、Margaux（最優雅花香）、Saint-Estèphe（最強單寧）。這四個村莊集中了 1855 年分級的大多數名莊。' },
    { type: 'single', question: '波爾多「格拉夫（Graves）」地區的特別之處是？', options: ['A. 只生產甜酒', 'B. 唯一同時生產頂級紅酒和頂級干型白酒的地區', 'C. 只有右岸風格', 'D. 完全不使用橡木桶'], correct: 1, explanation: '格拉夫（尤其是北部的 Pessac-Léognan）是波爾多唯一同時以頂級干型紅酒和白酒著稱的地區，Château Haut-Brion 是唯一不在梅多克卻入選 1855 一級莊的紅酒莊，而其白酒同樣傳奇。' },
    { type: 'multiple', question: '以下關於 Château Pétrus 的說法哪些正確？（多選）', options: ['A. 位於波美侯（Pomerol），右岸', 'B. 主要使用 Merlot 釀造（>90%）', 'C. 是 1855 年分級的一級莊', 'D. 無官方分級但市場地位超越大多數一級莊'], correct: [0, 1, 3], explanation: 'Pétrus 位於右岸波美侯，以幾乎純 Merlot（高達 95%+）釀造，藍色黏土的特殊土壤給予其無與倫比的濃縮度。波美侯沒有官方分級，Pétrus 憑市場聲望和稀缺性（年產僅 3000 箱左右）成為全球最貴葡萄酒之一。' },
    { type: 'single', question: '波爾多干型紅酒在橡木桶陳年的主要目的是？', options: ['A. 快速去除所有果香', 'B. 軟化單寧、增加複雜度、微量氧化輔助穩定', 'C. 增加甜度', 'D. 只是為了傳統，沒有實際作用'], correct: 1, explanation: '橡木桶陳年通過微量氧化（Micro-oxygenation）有助單寧聚合變得更柔滑；桶材成分（單寧酸、香草醛）賦予香草、烤橡木等香氣；適度蒸發則自然濃縮風味，提升結構和陳年潛力。' },
    { type: 'single', question: '什麼是「醒酒（Decanting）」，對波爾多年輕紅酒的作用是？', options: ['A. 去除葡萄酒中的糖分', 'B. 透過空氣接觸讓封閉的酒香打開，單寧軟化', 'C. 降低酒精度', 'D. 快速加熱葡萄酒至適飲溫度'], correct: 1, explanation: '醒酒是將酒從瓶中倒入醒酒器（Decanter），讓酒接觸空氣：年輕的波爾多通常單寧強、香氣封閉，醒酒 1-2 小時可讓香氣散發更豐富，單寧略微柔化，整體更易飲。老年份紅酒也可用醒酒去除沉澱。' },
    { type: 'single', question: '哪個波爾多子產區主要以 Sauvignon Blanc 為主的清爽白酒知名？', options: ['A. 蘇玳（Sauternes）', 'B. 兩海之間（Entre-Deux-Mers）', 'C. 梅多克（Médoc）', 'D. 波美侯（Pomerol）'], correct: 1, explanation: '兩海之間（Entre-Deux-Mers）是波爾多最大的干型白酒 AOC，以 Sauvignon Blanc 為主（有時調入 Sémillon），風格清爽草本，柑橘和白花香，口感爽脆，適合早飲且性價比高。' },
    { type: 'single', question: '波爾多紅酒的「vintage variation（年份差異）」相對哪個歐洲產區更顯著？', options: ['A. 西班牙南部（高溫穩定）', 'B. 義大利南部（乾旱穩定）', 'C. 布根地也同樣有顯著差異', 'D. 與所有產區都相同'], correct: 2, explanation: '布根地同樣有顯著年份差異，因為同為大陸性/海洋性氣候，氣象不穩定。相比之下，西班牙南部（Rioja 以南）、義大利南部（Puglia、Sicily）因更乾燥和穩定的地中海氣候，年份間差異較小。' }
  ]
}

// ─── 注入腳本主程序 ──────────────────────────────────────────────────────────

let successCount = 0, errorCount = 0

// L1-1 至 L1-7：注入 quiz slide
for (const [lessonId, quizSlide] of Object.entries(LESSON_QUIZZES)) {
  const fp = join(LESSONS_DIR, `${lessonId}.js`)
  try {
    let content = readFileSync(fp, 'utf-8')
    // 移除舊有的 QuizSlide 注入（避免重複）
    content = content.replace(/\s*\/\/ ====== inject-bordeaux-quiz ======[\s\S]*?(?=\s*(?:lessonContent\.push|normalizedLessonContent\.push|export default))/g, '')

    // 序列化 quiz slide
    const quizStr = JSON.stringify(quizSlide, null, 2)
      .split('\n').map(line => '  ' + line).join('\n')

    // 三種結尾格式的注入策略
    const TAIL_ARRAY = /\]\r?\n\r?\nexport default lessonContent/
    const TAIL_PUSH  = /\)\r?\n\r?\nexport default lessonContent/
    const TAIL_NORM  = /(export default normalizedLessonContent)/

    let newContent
    if (TAIL_ARRAY.test(content)) {
      newContent = content.replace(TAIL_ARRAY, `,\n  // ====== inject-bordeaux-quiz ======\n${quizStr}\n]\n\nexport default lessonContent`)
    } else if (TAIL_PUSH.test(content)) {
      newContent = content.replace(TAIL_PUSH, `)\n\nlessonContent.push(\n  // ====== inject-bordeaux-quiz ======\n${quizStr}\n)\n\nexport default lessonContent`)
    } else if (TAIL_NORM.test(content)) {
      newContent = content.replace(TAIL_NORM, `normalizedLessonContent.push(\n  // ====== inject-bordeaux-quiz ======\n${quizStr}\n)\n\nexport default normalizedLessonContent`)
    } else {
      console.error(`\u274c ${lessonId}.js: \u627e\u4e0d\u5230\u53ef\u8b58\u5225\u7684\u7d50\u5c3e\u683c\u5f0f`)
      errorCount++
      continue
    }
    writeFileSync(fp, newContent, 'utf-8')
    console.log(`✅ ${lessonId}.js: quiz slide 已注入`)
    successCount++
  } catch (e) {
    console.error(`❌ ${lessonId}.js: ${e.message}`)
    errorCount++
  }
}

// 建立 quiz-bank.json
try {
  const bankPath = join(PUBLIC_DATA, 'bordeaux-l1-quiz-bank.json')
  writeFileSync(bankPath, JSON.stringify(QUIZ_BANK, null, 2), 'utf-8')
  console.log(`✅ public/data/bordeaux-l1-quiz-bank.json: 建立完成（${QUIZ_BANK.questions.length} 題）`)
  successCount++
} catch (e) {
  console.error(`❌ bordeaux-l1-quiz-bank.json: ${e.message}`)
  errorCount++
}

console.log(`\n📊 完成：${successCount} 成功，${errorCount} 失敗`)
