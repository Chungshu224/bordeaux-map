/**
 * inject-italy-l3-quiz.mjs
 * 為義大利 L3 所有課程注入知識檢測投影片，並建立綜合評量 JSON 及題庫
 * 注意：L3 有兩種 quiz 欄位格式：
 *   L3M1-L3M2: { answer: int }
 *   L3M3-L3M6: { correctAnswer: int }
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const L3_DIR = path.join(ROOT, 'public/italy/courses/level3')
const MARKER = '// inject-italy-l3-quiz'

// 每課補充 1 題（使既有 4 題 → 5 題）
const EXTRA_QUESTIONS = {
  L3M1L1: { type: 'single', question: 'Erbaluce di Caluso DOCG 的特色是？', options: ['A. 濃郁紅酒', 'B. Piemonte 高海拔白酒，酸度優異且可釀成 Passito', 'C. 以 Moscato 品種釀造', 'D. 無陳年潛力的清淡白酒'], correct: 1, explanation: 'Erbaluce 是 Canavese 高地的白品種，酸度清脆，可乾型飲用也可製成 Passito 甜酒，是 Piemonte 最有個性的稀有白品種之一。' },
  L3M1L2: { type: 'single', question: 'Nosiola 是哪個產區最具代表性的白品種？', options: ['A. Friuli', 'B. Trentino', 'C. Veneto', 'D. Lombardy'], correct: 1, explanation: 'Nosiola 是 Trentino 的原生白品種，以清爽的榛果（noce=榛果）香氣著稱，也是當地傳統 Vin Santo Trentino 的原料。' },
  L3M1L3: { type: 'single', question: 'Negroamaro 品種名稱的字面意義是什麼？', options: ['A. 黑色甜美', 'B. 黑色苦澀（nero + amaro）', 'C. 黑色海洋', 'D. 深色鈴鐺'], correct: 1, explanation: 'Negroamaro 由 nero（黑）+ amaro（苦）組成，反映了品種天然帶有的苦感單寧，是 Puglia Salento 半島最重要的本土紅品種。' },
  L3M1L4: { type: 'single', question: 'Josko Gravner 對橘酒運動的核心貢獻是？', options: ['A. 發明了 appassimento 工法', 'B. 在 Friuli 復興陶甕（anfora）帶皮浸漬白葡萄釀法', 'C. 創立了第一個 DOCG 橘酒規範', 'D. 將 Ribolla Gialla 引進美國'], correct: 1, explanation: 'Gravner 在 1990 年代末訪問喬治亞後，開始使用傳統陶甕（qvevri/anfora）以帶皮浸漬方式釀造 Ribolla Gialla，引領全球橘酒現代復興運動。' },
  L3M2L1: { type: 'single', question: 'Barolo MGA 系統中，「MGA」代表什麼？', options: ['A. Master Grand Appellation', 'B. Menzione Geografica Aggiuntiva（附加地理名稱）', 'C. Massimo Grado Artigianale', 'D. Metodo Geografico Avanzato'], correct: 1, explanation: 'MGA 是 Menzione Geografica Aggiuntiva 的縮寫，允許酒標上標示特定葡萄園名稱，類似布根地的一級/特級園概念。' },
  L3M2L2: { type: 'single', question: '義大利酒標上 "Classico" 的意義是？', options: ['A. 古典配方釀造', 'B. DOC/DOCG 核心歷史產區的葡萄', 'C. 陳年超過 5 年', 'D. 僅以手工採收'], correct: 1, explanation: '"Classico" 標示表示葡萄來自 DOC/DOCG 的核心歷史原產地（如 Soave Classico、Chianti Classico），通常代表更高品質的傳統精華產區。' },
  L3M2L3: { type: 'single', question: '辨識義大利假酒時，哪個標誌最難以偽造？', options: ['A. 標籤上的文字', 'B. 酒瓶形狀', 'C. 政府防偽貼紙（fascetta）的全息圖', 'D. 軟木塞印字'], correct: 2, explanation: '義大利 DOCG 酒瓶頸部的政府防偽貼紙（fascetta）含有序號和全息防偽圖案，是最難偽造的真偽識別標誌。' },
  L3M2L4: { type: 'single', question: 'Sassicaia 如何從 Vino da Tavola 升格取得法定保護地位？', options: ['A. 被列為 Chianti Classico DOCG', 'B. 單獨設立 Bolgheri Sassicaia DOC（義大利唯一單一酒莊 DOC）', 'C. 升格為 IGT 超級托斯卡納', 'D. 申請為歐盟 GI 保護'], correct: 1, explanation: '1994 年，義大利政府為 Sassicaia 單獨設立 Bolgheri Sassicaia DOC，是全義大利唯一以單一酒莊命名的 DOC 產區，確立了其法律地位。' },
  L3M3L1: { type: 'single', question: '評估義大利年份時，「夏季雨量」對哪類品種影響最關鍵？', options: ['A. 早熟白品種（如 Pinot Grigio）', 'B. 晚熟深皮紅品種（如 Nebbiolo、Aglianico）', 'C. 氣泡酒用品種', 'D. 對所有品種影響相同'], correct: 1, explanation: '晚熟品種（Nebbiolo、Aglianico、Sagrantino）採收期在 10-11 月，夏末秋初的雨量直接影響成熟度和健康度，是年份好壞的關鍵變數。' },
  L3M3L2: { type: 'single', question: '理想的義大利精品酒窖儲存溫度是？', options: ['A. 5-8°C', 'B. 12-14°C', 'C. 18-20°C', 'D. 0-3°C'], correct: 1, explanation: '精品酒長期儲存的理想溫度為 12-14°C，配合 70-75% 濕度，避免溫度劇烈波動（比固定低溫更重要）。' },
  L3M3L3: { type: 'single', question: '開窗期（drinking window）中，哪個指標代表適飲峰值？', options: ['A. 顏色最深時', 'B. 單寧最柔化、果味與礦物感達到平衡頂點', 'C. 裝瓶後最短時間', 'D. 酒體最重時'], correct: 1, explanation: '適飲峰值是單寧充分整合、果香轉化為複雜礦物與泥土氣息，同時酸度依然活躍支撐酒體的平衡頂點。' },
  L3M3L4: { type: 'single', question: '哪個年份被公認為 Barolo 近代最偉大的年份之一？', options: ['A. 1992', 'B. 2010', 'C. 2001', 'D. 2015（選其一）'], correct: 1, explanation: '2010 年 Barolo 被廣泛認為是近 20 年最偉大的年份，其結構與複雜性堪比傳奇的 1996、1978 年份。（2015 同樣優秀）' },
  L3M4L1: { type: 'single', question: 'SAT 盲品法中，「T」（味覺）階段最重要的評估項目是？', options: ['A. 顏色深淺', 'B. 酸度、單寧、酒體、餘韻長度', 'C. 香氣複雜度', 'D. 泡沫細膩度'], correct: 1, explanation: 'T（Taste）階段核心評估：酸度強度、單寧質地與量、酒體輕重、果味熟度、餘韻長度。這些數據用於最終驗證品種和產區假設。' },
  L3M4L2: { type: 'single', question: '盲品時，「橙色邊緣＋磚紅色澤＋石榴紅透明感」通常代表什麼？', options: ['A. 年輕濃郁紅酒', 'B. 陳年（>10年）淺皮品種紅酒', 'C. 新世界年輕紅酒', 'D. 粉紅酒'], correct: 1, explanation: '這個顏色組合是陳年淺皮品種（如 Nebbiolo、Pinot Noir）的典型特徵：花青素降解產生磚紅-橙色，透明度隨陳年增加。' },
  L3M4L3: { type: 'single', question: '識別 Piemonte 風土特徵時，哪種香氣是 Langhe 的關鍵識別符號？', options: ['A. 胡椒與煙燻', 'B. 焦油、玫瑰、枯葉（Nebbiolo 三重奏）', 'C. 熱帶水果與巧克力', 'D. 青草與白花'], correct: 1, explanation: 'Nebbiolo 在 Langhe（Barolo/Barbaresco）的風土識別符號是「焦油＋玫瑰（新鮮時）→ 枯葉/蘑菇（陳年時）」三重奏，高酸度和精細單寧作為佐證。' },
  L3M4L4: { type: 'single', question: '義大利酒盲品中，極高酸度＋輕酒體＋礦物感最可能指向哪個產區？', options: ['A. Sicily（Nero d\'Avola）', 'B. Alto Adige 高海拔白酒或 Campania（Fiano/Greco）', 'C. Barolo', 'D. Amarone'], correct: 1, explanation: '極高酸度＋輕酒體＋礦物感的組合在義大利白酒中最典型見於：Alto Adige 高海拔（Riesling/Gewürztraminer）或 Campania（Fiano di Avellino、Greco di Tufo）的火山礦物土壤。' },
  L3M4L5: { type: 'single', question: '系統化盲品錯誤中，最常見的心理偏誤是？', options: ['A. 過度依賴視覺排除年份線索', 'B. 「確認偏誤（Confirmation Bias）」：先入為主假設驗證假設', 'C. 低估香氣揮發速度', 'D. 混淆酒體與酸度'], correct: 1, explanation: '確認偏誤是盲品最危險的心理陷阱：一旦認定品種（如 Nebbiolo），會不自覺地尋找支持證據而忽略矛盾線索。SAT 系統的作用之一就是強迫品鑑者收集所有數據後再下結論。' },
  L3M5L1: { type: 'single', question: '義大利葡萄酒的「合作社（Cantina Cooperativa/Sociale）」模式主要特色是？', options: ['A. 單一莊主控制所有葡萄園', 'B. 多個農戶共享釀酒設施，提供產量穩定與規模效益', 'C. 只生產頂級精品酒', 'D. 全部出口不在本地銷售'], correct: 1, explanation: '合作社模式讓小農戶共享釀酒設備和行銷資源，貢獻義大利超過 50% 的總產量，同時也有部分合作社（如 Trentino 的 Cavit）生產高品質酒款。' },
  L3M5L2: { type: 'single', question: '義大利葡萄酒最大的單一出口目的國是？', options: ['A. 中國', 'B. 美國', 'C. 德國', 'D. 英國'], correct: 1, explanation: '美國是義大利葡萄酒長期最大的出口市場（按金額），對 Prosecco、Pinot Grigio、Chianti 的需求龐大。德國按量可能更高，但美國按金額排名第一。' },
  L3M5L3: { type: 'single', question: '生物動力法（Biodynamic）使用「準備劑 500」是做什麼的？', options: ['A. 預防葡萄病害的殺菌劑', 'B. 以牛角填充牛糞埋入土中發酵後噴灑，活化土壤微生物', 'C. 促進果實快速成熟的荷爾蒙', 'D. 替代二氧化硫的防腐劑'], correct: 1, explanation: '準備劑 500（Preparation 500）是生物動力法的核心：將牛糞裝入牛角埋入土中過冬發酵，春天取出加水動態攪拌後噴灑土壤，據信可活化土壤微生物群落和促進根系深度。' },
  L3M5L4: { type: 'single', question: '氣候變遷對北義高緯度產區（如 Alto Adige）最正面的短期影響是？', options: ['A. 完全破壞葡萄質量', 'B. 葡萄成熟度提升，可種植過去無法成熟的品種', 'C. 降雨增加解決旱害', 'D. 夜間溫度降低改善酸度'], correct: 1, explanation: '對北義高緯度/高海拔產區而言，氣候暖化短期帶來的正面效果是葡萄成熟度改善，甚至可嘗試種植過去氣候過冷而難以成熟的品種（但長期風險仍然存在）。' },
  L3M6L1: { type: 'single', question: '高級義大利餐廳酒單設計的「杯賣酒（BTG）」策略核心考量是？', options: ['A. 只提供最貴的葡萄酒', 'B. 選擇開瓶後穩定性佳、適合搭配多道菜的多功能酒款', 'C. 優先選擇客人不熟悉的稀有品種', 'D. BTG 只適合氣泡酒'], correct: 1, explanation: '杯賣酒需在開瓶後 1-2 天內售完，因此要選擇開瓶後氧化穩定性佳（如帶一定單寧或酸度的酒）、且適合搭配多道菜式的酒款，以最大化銷售率和顧客滿意度。' },
  L3M6L2: { type: 'single', question: '侍酒師建議顧客選酒時，最有效的開場問題是？', options: ['A. 「您的預算是多少？」', 'B. 「今晚準備點什麼菜？這是給特別場合嗎？」', 'C. 「您喜歡哪個波爾多酒莊？」', 'D. 「需要我推薦最貴的紅酒嗎？」'], correct: 1, explanation: '最好的顧問式問題要了解「用餐情境+料理內容」，從而推薦最契合的搭配，而非從預算或品牌偏好出發。這也能建立顧客信任，提升整體用餐體驗。' },
  L3M6L3: { type: 'single', question: '策劃義大利葡萄酒主題品酒會時，最有說服力的敘事主軸是？', options: ['A. 按年份從舊到新排列', 'B. 「垂直（vertical）」或「水平（horizontal）」主題：同酒莊多年份或同產區多品種對比', 'C. 隨機順序以增加驚喜感', 'D. 只選用一個品牌展示'], correct: 1, explanation: '垂直品酒（同莊不同年份）展示年份影響與陳年潛力；水平品酒（同產區同年份不同酒莊）展示風土詮釋差異——兩種都是品酒教育最直覺有效的框架。' }
}

const LESSON_TITLES = {
  L3M1L1: '北義稀有品種知識檢測',
  L3M1L2: '北義特殊品種知識檢測',
  L3M1L3: '南義稀有品種知識檢測',
  L3M1L4: 'Friuli 橘酒革命知識檢測',
  L3M2L1: 'MGA 與 Cru 知識檢測',
  L3M2L2: '酒標解讀進階知識檢測',
  L3M2L3: '假酒識別知識檢測',
  L3M2L4: '超級托斯卡納知識檢測',
  L3M3L1: '義大利年份評估知識檢測',
  L3M3L2: '陳年與窖藏知識檢測',
  L3M3L3: '適飲期判斷知識檢測',
  L3M3L4: '投資年份知識檢測',
  L3M4L1: '盲品方法論知識檢測',
  L3M4L2: '品種辨識知識檢測',
  L3M4L3: '產區風土識別知識檢測',
  L3M4L4: '年份識別知識檢測',
  L3M4L5: '實戰盲品知識檢測',
  L3M5L1: '產業結構知識檢測',
  L3M5L2: '出口市場知識檢測',
  L3M5L3: '自然酒與永續知識檢測',
  L3M5L4: '氣候變遷知識檢測',
  L3M6L1: '進階餐酒搭配知識檢測',
  L3M6L2: '選酒顧問知識檢測',
  L3M6L3: '品酒活動策劃知識檢測'
}

// 轉換 L3 quiz[] → QuizSlide 格式（處理兩種欄位名稱）
function convertL3Quiz (quizArr) {
  return (quizArr || []).map(q => ({
    type: 'single',
    question: q.question,
    options: q.options,
    correct: q.answer !== undefined ? q.answer : (q.correctAnswer !== undefined ? q.correctAnswer : 0),
    explanation: q.explanation || ''
  }))
}

function injectLessonQuiz () {
  let ok = 0, skip = 0
  const files = fs.readdirSync(L3_DIR).filter(f => f.match(/^L3M\dL\d\.json$/)).sort()

  for (const filename of files) {
    const lessonId = filename.replace('.json', '')
    const filepath = path.join(L3_DIR, filename)
    const raw = fs.readFileSync(filepath, 'utf8')

    if (raw.includes(MARKER)) { skip++; continue }

    const data = JSON.parse(raw)
    const baseQuestions = convertL3Quiz(data.quiz || [])
    const extra = EXTRA_QUESTIONS[lessonId] ? [EXTRA_QUESTIONS[lessonId]] : []
    const allQuestions = [...baseQuestions, ...extra]

    const quizSlide = {
      type: 'quiz',
      title: `🧠 ${LESSON_TITLES[lessonId] || '知識檢測'}`,
      _marker: MARKER,
      questions: allQuestions
    }

    data.slides.push(quizSlide)
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8')
    console.log(`✅ ${lessonId} 注入 ${allQuestions.length} 題`)
    ok++
  }

  console.log(`\n注入完成：${ok} 個檔案已更新，${skip} 個已跳過`)
}

function createFinalExamJson () {
  const examPath = path.join(L3_DIR, 'L3FinalExam.json')
  if (fs.existsSync(examPath)) { console.log('⏭️  L3FinalExam.json 已存在'); return }

  const exam = {
    lessonId: 'L3FinalExam',
    title: 'Level 3 綜合評量',
    slides: [
      {
        type: 'title',
        title: '📋 Level 3 綜合評量',
        subtitle: '義大利葡萄酒 Level 3 · 專家完整測驗'
      },
      {
        type: 'list',
        title: '🎯 Level 3 重點回顧',
        points: [
          '🍇 北義稀有品種：Timorasso（Piemonte）、Ruché、Erbaluce、Nosiola（Trentino）',
          '🍊 橘酒革命：Josko Gravner 在 Friuli 以陶甕帶皮浸漬復興古法',
          '🗺️ MGA 系統：Barolo/Barbaresco 的葡萄園分級（Menzione Geografica Aggiuntiva）',
          '🔍 酒標解讀：政府防偽貼紙（fascetta）是 DOCG 最難偽造的識別標誌',
          '👑 Sassicaia：唯一以單一酒莊命名的義大利 DOC（Bolgheri Sassicaia）',
          '📅 年份評估：採收季氣候是決定性因素，晚熟品種受夏末秋雨影響最大',
          '🏠 理想窖藏：12-14°C，70-75% 濕度，避免溫差劇烈波動',
          '👁️ SAT 盲品法：Sight（視覺）→ Aroma（嗅覺）→ Taste（味覺）',
          '🎯 品種辨識：Nebbiolo 特徵碼「焦油＋玫瑰＋枯葉」+ 橙色邊緣',
          '🏭 合作社模式貢獻義大利超過 50% 總產量，規模效益顯著',
          '🌍 美國是義大利葡萄酒最大出口市場（按金額）',
          '🌿 生物動力法準備劑 500：牛角牛糞發酵後噴灑活化土壤',
          '🌡️ 氣候暖化：北義高海拔短期受益（成熟度提升），長期風險仍存',
          '🍽️ 杯賣酒策略：選開瓶後穩定性佳、能搭配多道菜式的酒款'
        ]
      }
    ]
  }

  fs.writeFileSync(examPath, JSON.stringify(exam, null, 2), 'utf8')
  console.log('✅ L3FinalExam.json 建立完成')
}

function createQuizBank () {
  const bankPath = path.join(L3_DIR, 'quiz-bank.json')
  if (fs.existsSync(bankPath)) { console.log('⏭️  quiz-bank.json 已存在'); return }

  const bank = {
    level: 'level3',
    title: 'Level 3 綜合評量題庫',
    questions: [
      // 稀有品種
      { type: 'single', question: 'Timorasso 葡萄在哪個 Piemonte 地區復興最成功？', options: ['A. Langhe', 'B. Colli Tortonesi', 'C. Monferrato', 'D. Roero'], correct: 1, explanation: 'Walter Massa 在 Tortona 丘陵（Colli Tortonesi）帶頭復興 Timorasso 白酒，使其成為 Piemonte 最受矚目的稀有白品種之一。' },
      { type: 'single', question: 'Ribolla Gialla 是哪個大區最重要的原生白品種？', options: ['A. Trentino', 'B. Friuli-Venezia Giulia', 'C. Veneto', 'D. Lombardy'], correct: 1, explanation: 'Ribolla Gialla 是 Friuli 的靈魂品種，在 Collio 和 Colli Orientali 表現最佳，也是橘酒運動最常使用的品種。' },
      { type: 'single', question: 'Valle d\'Aosta 的葡萄種植面積為何極小？', options: ['A. 不適合葡萄生長的氣候', 'B. 阿爾卑斯山地形陡峭，梯田耕作艱難', 'C. 法律限制種植', 'D. 消費者偏好進口酒'], correct: 1, explanation: 'Valle d\'Aosta 是義大利最小的葡萄酒產區，因阿爾卑斯山地形極為陡峭，葡萄種植全靠手工梯田，成本極高，產量因此極為有限。' },
      // 酒標與認證
      { type: 'single', question: 'DOCG 酒標上的粉紅色政府貼紙（fascetta）的主要功能是？', options: ['A. 標示葡萄酒的甜度', 'B. 防偽並確認每瓶酒已通過官方審核', 'C. 標示最佳飲用日期', 'D. 區分有機認證'], correct: 1, explanation: 'Fascetta（政府防偽貼紙）確保每瓶 DOCG 酒都有唯一序號，並驗證已通過官方化學分析和感官審查委員會認可，是偽造最困難的識別標誌。' },
      { type: 'single', question: '酒標上 "Riserva" 的法定涵義是？', options: ['A. 僅表示釀酒師的個人精選', 'B. 達到 DOC/DOCG 規定的最低陳年年限要求（通常比普通款更長）', 'C. 限量版，每批次少於 500 瓶', 'D. 有機認證的保留酒'], correct: 1, explanation: 'Riserva 在 DOC/DOCG 規範中有明確的最低陳年年限要求（如 Barolo Riserva 需 5 年、Brunello Riserva 需 6 年），並非隨意使用的行銷術語。' },
      // 年份與陳年
      { type: 'single', question: '義大利葡萄酒「二次沉澱（bottle sedimentation）」主要是由什麼形成的？', options: ['A. 殘糖結晶', 'B. 酒石酸鹽結晶和單寧-花青素聚合物', 'C. 雜質污染', 'D. 二氧化硫沉澱'], correct: 1, explanation: '陳年紅酒的沉澱物主要是酒石酸鹽結晶和單寧與花青素結合形成的聚合物，是正常的陳年現象，並不影響品質。' },
      { type: 'single', question: '開瓶後的 Barolo 建議最長可醒酒多久？', options: ['A. 15 分鐘', 'B. 老年份 30-60 分鐘，年輕年份可達 2-3 小時', 'C. 不需要醒酒', 'D. 24 小時'], correct: 1, explanation: '年輕 Barolo（<10 年）因單寧緊澀，可醒酒 2-3 小時；老年份（>20 年）更為脆弱，醒酒 30-60 分鐘後需立即飲用，過度氧化會使香氣消散。' },
      // 盲品
      { type: 'single', question: '盲品時，酒液邊緣出現「翠綠色（green rim）」代表什麼？', options: ['A. 酒已變質', 'B. 極年輕的白酒（往往是清新高酸型品種）', 'C. 添加了食用色素', 'D. 過度氧化'], correct: 1, explanation: '白酒邊緣的翠綠色調是年輕度的指標，常見於極年輕的高酸品種（如 Verdicchio、Vermentino、Soave），隨時間會轉為金黃色。' },
      { type: 'single', question: '盲品中聞到「火柴燃燒（struck match / 還原硫）」的氣味，最可能是？', options: ['A. 酒已腐壞', 'B. 還原（reductive）風格釀造，通氣後可消散', 'C. Cork taint（軟木塞污染）', 'D. 揮發性酸（volatile acidity）過高'], correct: 1, explanation: '「火柴燃燒」氣味是二氧化硫還原產生的硫醇類物質，在還原風格釀造（不鏽鋼桶低氧）中常見，通常搖杯通氣後 5-10 分鐘內消散，並非缺陷。' },
      { type: 'multiple', question: '以下哪些是 Brunello di Montalcino 盲品的典型特徵？（多選）', options: ['A. 橙色邊緣（陳年款）', 'B. 極高酸度和細緻單寧', 'C. 焦油、乾燥草本、黑色水果香氣', 'D. 濃郁的新法國橡木香草氣息'], correct: [0, 1, 2], explanation: 'Brunello 的盲品特徵：橙色邊緣（陳年）、Sangiovese 的高酸、細膩單寧，複雜的焦油/草本/黑色水果。法國新橡木桶香草氣不是傳統 Brunello 的特徵（多使用大型舊桶）。' },
      // 產業市場
      { type: 'single', question: 'Prosecco DOC（非 DOCG）最大的爭議點是？', options: ['A. 品質太差，不應受保護', 'B. 產區範圍過大（9 省），稀釋了 Conegliano Valdobbiadene DOCG 的精品形象', 'C. 釀酒方法不符合傳統', 'D. 使用 Chardonnay 而非 Glera'], correct: 1, explanation: 'Prosecco DOC 涵蓋威尼托和弗留利 9 個省份，範圍過大造成品質參差不齊，許多人認為稀釋了頂級 DOCG（Conegliano Valdobbiadene）的形象和市場價值。' },
      { type: 'single', question: '義大利自然酒運動中，「minimal intervention（最低干預）」最核心的釀酒原則是？', options: ['A. 完全不使用任何添加物，包括二氧化硫', 'B. 有機/生物動力農耕，酒窖中減少或不使用二氧化硫等人工添加物', 'C. 僅使用傳統橡木桶陳年', 'D. 只在滿月日採收'], correct: 1, explanation: '自然酒核心：先從農業（有機/生物動力）做起，酒窖中減少添加（尤其二氧化硫），讓酒「自然」呈現風土。但並無官方規範，「完全零添加」是最嚴格的詮釋之一，非所有自然酒都達到。' },
      // 侍酒師
      { type: 'single', question: '侍酒師服務 Barolo 時，正確的準備動作是？', options: ['A. 直接冰鎮至 8°C', 'B. 提前 1-2 小時醒酒，或直立靜置讓沉澱物下沉後換瓶', 'C. 強力搖晃使沉澱物均勻分布', 'D. 加熱至 25°C'], correct: 1, explanation: '頂級 Barolo 建議提前醒酒（年輕款 2-3 小時，老款 30-60 分鐘），老年份有沉澱物時建議先直立靜置 24-48 小時後換瓶濾除沉澱。' },
      { type: 'single', question: '義大利最重要的葡萄酒展覽 Vinitaly 在哪個城市舉辦？', options: ['A. Milan', 'B. Verona', 'C. Rome', 'D. Florence'], correct: 1, explanation: 'Vinitaly 每年 4 月在 Verona 舉辦，是全球最重要的義大利葡萄酒展覽，也是全球三大葡萄酒展之一。' },
      // 多選題
      { type: 'multiple', question: '以下哪些因素是 Barolo 和 Barbaresco 品質差異的關鍵？（多選）', options: ['A. 海拔與坡向', 'B. 土壤組成（石灰土 Tortonian vs Helvetian）', 'C. 葡萄採收年份', 'D. 釀酒師的個人風格（傳統 vs 現代）'], correct: [0, 1, 2, 3], explanation: '海拔最高的 Serralunga（Helvetian 石灰土）較 La Morra（Tortonian 泥灰土）單體結構更強；採收年份影響成熟度；釀酒師風格決定桶型和浸皮時間——這些因素共同塑造了酒款個性。' },
      { type: 'multiple', question: '下列哪些屬於義大利「原生品種復興運動」的代表品種？（多選）', options: ['A. Timorasso', 'B. Cabernet Sauvignon', 'C. Sagrantino', 'D. Nerello Mascalese'], correct: [0, 2, 3], explanation: 'Timorasso（Piemonte）、Sagrantino（Umbria）、Nerello Mascalese（Sicily Etna）都是本土原生品種復興的代表。Cabernet Sauvignon 是國際品種，不在復興運動範疇內。' },
      { type: 'multiple', question: '義大利侍酒師資格考試（AIS）的評分維度包含哪些？（多選）', options: ['A. 視覺（外觀）', 'B. 嗅覺（香氣）', 'C. 味覺（口感）', 'D. 價格評估'], correct: [0, 1, 2], explanation: 'AIS 義大利侍酒師協會的評分系統涵蓋：視覺（顏色、清澈度）、嗅覺（香氣複雜度和質量）、味覺（口感結構和品質），不含價格評估。' },
      // 綜合
      { type: 'single', question: '在世界三大著名葡萄酒雜誌（Wine Spectator、Decanter、Wine Advocate）中，評分最影響 Barolo 二手市場價格的是？', options: ['A. Wine Spectator', 'B. Wine Advocate（尤其 Robert Parker 時代）', 'C. Decanter', 'D. 三者影響力相同'], correct: 1, explanation: 'Robert Parker 的 Wine Advocate 100 分制在 1990-2010 年代對 Barolo 二手市場定價影響力最大，甚至引發釀酒師為迎合其口味轉型為現代派的「Parker Effect」。' },
      { type: 'single', question: '為何義大利葡萄酒專家強調「橫向比較（horizontal tasting）」的教育價值？', options: ['A. 更省錢，只需購買一個年份', 'B. 同年份同產區的對比揭示風土、酒莊與釀酒師哲學的差異', 'C. 便於評估陳年潛力', 'D. 法規規定教育品酒必須橫向比較'], correct: 1, explanation: '橫向品酒（同年份同產區多酒莊）是研究風土詮釋差異的最佳方式：年份影響被控制為相同，因此酒款之間的差異直接反映土壤、海拔、坡向和釀酒師決策的影響。' },
      { type: 'single', question: '義大利葡萄酒文化中「零界小農（Vignaiolio）」代表什麼精神？', options: ['A. 大規模工業化生產', 'B. 親力親為的小農釀酒師，從葡萄種植到裝瓶全程掌控', 'C. 僅負責葡萄種植、外包釀造的農戶', 'D. 合作社的管理職稱'], correct: 1, explanation: 'Vignaiolio（葡萄園農）是義大利的精品酒農精神：不依賴大酒廠，從葡萄園管理到釀酒銷售一手包辦，與法國「Récoltant-Manipulant」（農家酒） 概念相似，是義大利精品酒文化的核心。' },
      { type: 'single', question: '為什麼高品質義大利橘酒有時比一般白酒更能承受橡木桶陳年？', options: ['A. 橘酒法規要求必須橡木桶陳年', 'B. 帶皮浸漬萃取的單寧和酚類物質使橘酒具備類似紅酒的結構，更能整合橡木風味', 'C. 橙色色素與橡木桶產生化學反應', 'D. 橘酒水份含量更低'], correct: 1, explanation: '橘酒因帶皮浸漬萃取了白葡萄皮中的單寧和多酚物質，結構較一般白酒更強，就像紅酒一樣更能整合和承受橡木桶熟化，也因此具備更長的陳年潛力。' },
      { type: 'single', question: '義大利 DOCG 升級審查的決定性條件是？', options: ['A. 獲獎數量', 'B. 生產規定更嚴格、通過官方委員會感官評測和品質一致性驗證', 'C. 出口量超過門檻', 'D. 葡萄園總面積達標'], correct: 1, explanation: 'DOC 升格 DOCG 需要更嚴格的生產規定（更低產量、更長陳年等），並需通過義大利農業部組織的官方感官評測委員會，驗證品質一致性和高辨識度。' },
      { type: 'single', question: '哪個義大利原生品種被稱為「南義的 Pinot Noir」？', options: ['A. Aglianico', 'B. Nerello Mascalese', 'C. Negroamaro', 'D. Primitivo'], correct: 1, explanation: 'Nerello Mascalese（尤其在 Etna 火山土壤）以其輕盈、透明、複雜的特質常被稱為「南義的 Pinot Noir」，在國際市場掀起 Etna 熱潮。' },
      { type: 'single', question: '評估盲品酒的「酒體（body）」主要取決於哪個感官因素？', options: ['A. 顏色深淺', 'B. 口腔中酒精、多醣和甘油帶來的重量感', 'C. 香氣濃郁度', 'D. 餘韻長度'], correct: 1, explanation: '酒體是口腔中感受到的「重量感」，主要來自酒精濃度（最關鍵）、殘糖、甘油和萃取物的綜合感知，與顏色深淺或香氣無直接關係。' },
      { type: 'single', question: '以下哪一項不是義大利葡萄酒有機認證的要求？', options: ['A. 禁止使用合成殺蟲劑', 'B. 禁止使用基因改造品種', 'C. 必須使用生物動力法日曆', 'D. 禁止使用除草劑'], correct: 2, explanation: '有機認證（EU有機標章）要求禁止合成農藥、除草劑和 GMO，但並不要求採用生物動力法的月曆農作系統。生物動力法是有機農業的進階版本，有其獨立的認證（Demeter 等）。' },
      { type: 'multiple', question: '義大利近年「火山葡萄酒（Volcanic Wines）」趨勢的代表產區有哪些？（多選）', options: ['A. Etna DOC（Sicily）', 'B. Aglianico del Vulture（Basilicata）', 'C. Soave Classico（Veneto）', 'D. Campi Flegrei DOC（Campania）'], correct: [0, 1, 3], explanation: 'Etna（西西里火山）、Aglianico del Vulture（Vulture 火山）和 Campi Flegrei（坎帕尼亞火山地帶）都是「火山葡萄酒」趨勢的代表。Soave Classico 主要是玄武岩和石灰岩，非典型火山概念。' }
    ]
  }

  fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8')
  console.log(`✅ quiz-bank.json 建立完成（${bank.questions.length} 題）`)
}

// 執行
console.log('=== 義大利 L3 Quiz 注入開始 ===\n')
injectLessonQuiz()
console.log('')
createFinalExamJson()
createQuizBank()
console.log('\n=== 完成 ===')
