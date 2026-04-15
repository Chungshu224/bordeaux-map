/**
 * 西班牙葡萄酒課程資料
 * 四個難易等級：入門 → 進階 → 專業 → 大師
 */

export const courseLevels = {

  // ─────────────────────────────────────────────────────────────
  //  Level 1 — 入門  🌱
  // ─────────────────────────────────────────────────────────────
  level1: {
    id: 'level1',
    title: 'Level 1 - 西班牙葡萄酒入門',
    subtitle: '建立基礎認知，掌握地理與分級',
    duration: '約 2–3 小時',
    difficulty: '入門',
    icon: '🌱',
    color: '#c0392b',
    gradient: 'linear-gradient(135deg, #c0392b, #e74c3c)',
    totalLessons: 13,
    modules: [
      {
        id: 'S1M1',
        title: '第一章：西班牙葡萄酒版圖',
        lessons: [
          { id: 'S1M1L1', title: '為什麼學西班牙葡萄酒？概覽與特色' },
          { id: 'S1M1L2', title: '17 個自治區地理分布' },
          { id: 'S1M1L3', title: '三大氣候帶：大西洋・地中海・內陸大陸' },
          { id: 'S1M1L4', title: '土壤類型：石灰岩・板岩・砂土・紅土' },
        ],
      },
      {
        id: 'S1M2',
        title: '第二章：分級制度全解析',
        lessons: [
          { id: 'S1M2L1', title: 'DO / DOCa / VP / VC — 法定分級架構' },
          { id: 'S1M2L2', title: '陳年制度：Joven · Crianza · Reserva · Gran Reserva' },
          { id: 'S1M2L3', title: '酒標解讀：如何看懂一瓶西班牙酒' },
        ],
      },
      {
        id: 'S1M3',
        title: '第三章：核心葡萄品種',
        lessons: [
          { id: 'S1M3L1', title: '五大紅品種：Tempranillo · Garnacha · Monastrell · Mencía · Bobal' },
          { id: 'S1M3L2', title: '五大白品種：Albariño · Verdejo · Macabeo · Palomino · Xarel·lo' },
          { id: 'S1M3L3', title: '品種 × 產區對應地圖' },
        ],
      },
      {
        id: 'S1M4',
        title: '第四章：Rioja — 西班牙靈魂產區',
        lessons: [
          { id: 'S1M4L1', title: 'Rioja 地理：三個子產區（Alta · Alavesa · Oriental）' },
          { id: 'S1M4L2', title: 'Rioja 風格：傳統派 vs 現代派' },
        ],
      },
      {
        id: 'S1M5',
        title: '第五章：Level 1 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'S1FinalExam', title: 'Level 1 綜合評量', isFinalExam: true },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Level 2 — 進階  🍷
  // ─────────────────────────────────────────────────────────────
  level2: {
    id: 'level2',
    title: 'Level 2 - 重點產區深度探索',
    subtitle: '從 Sherry 到 Rías Baixas，全面掌握各大產區',
    duration: '約 4–5 小時',
    difficulty: '進階',
    icon: '🍷',
    color: '#8e44ad',
    gradient: 'linear-gradient(135deg, #8e44ad, #9b59b6)',
    totalLessons: 22,
    prerequisites: ['完成 Level 1'],
    modules: [
      {
        id: 'S2M1',
        title: '第一章：北部頂級紅酒產區',
        lessons: [
          { id: 'S2M1L1', title: 'Ribera del Duero — 梅塞塔高原的王者' },
          { id: 'S2M1L2', title: 'Rueda — 卡斯提亞清爽白酒（Verdejo）' },
          { id: 'S2M1L3', title: 'Bierzo — 板岩上的 Mencía 老藤' },
          { id: 'S2M1L4', title: 'Navarra — 玫瑰酒與 Garnacha 的故鄉' },
          { id: 'S2M1L5', title: 'Arlanza DO — 河谷高海拔古老產區（Albillo）' },
          { id: 'S2M1L6', title: 'Arribes DO — 杜羅河峽谷原生品種（Juan García）' },
          { id: 'S2M1L7', title: 'Cigales DO — 粉紅酒傳統與 Garnacha Gris' },
          { id: 'S2M1L8', title: 'Tierra de León DO — 原生品種 Prieto Picudo' },
          { id: 'S2M1L9', title: 'Tierra del Vino de Zamora DO — Malvasía Fina 白酒' },
          { id: 'S2M1L10', title: 'Toro DO — Tinta de Toro 豪邁強勁紅酒' },
          { id: 'S2M1L11', title: 'Sierra de Salamanca VC — UNESCO 生物圈保護區的 Rufete 原生品種' },
          { id: 'S2M1L12', title: 'Valles de Benavente VC — 薩莫拉省北部高原砂質風土' },
          { id: 'S2M1L13', title: 'Valtiendas VC — 杜拉通河白堊高原（海拔 920m）' },
        ],
      },
      {
        id: 'S2M2',
        title: '第二章：加利西亞・巴斯克 — 綠色海岸',
        lessons: [
          { id: 'S2M2L1', title: 'Rías Baixas — Albariño 白酒之都' },
          { id: 'S2M2L2', title: 'Ribeiro · Valdeorras · Ribeira Sacra' },
          { id: 'S2M2L3', title: '大西洋氣候與花崗岩土壤的味道' },
          { id: 'S2M2L4', title: 'Txakoli — 巴斯克微氣泡白酒三大產區' },
        ],
      },
      {
        id: 'S2M3',
        title: '第三章：加泰羅尼亞 — 地中海精華',
        lessons: [
          { id: 'S2M3L1', title: 'Priorat（DOCa）— 板岩 Llicorella 的奇蹟' },
          { id: 'S2M3L2', title: 'Montsant · Terra Alta · Empordà' },
          { id: 'S2M3L3', title: 'Penedès — 現代西班牙白酒革命' },
          { id: 'S2M3L4', title: 'Alella DO — 巴塞隆那海岸的芳香白酒（Pansà Blanca）' },
        ],
      },
      {
        id: 'S2M4',
        title: '第四章：南部強勁產區',
        lessons: [
          { id: 'S2M4L1', title: 'Jerez — Sherry 雪莉酒入門' },
          { id: 'S2M4L2', title: 'Jumilla & Yecla — Monastrell 老藤' },
          { id: 'S2M4L3', title: 'Utiel-Requena — Bobal 的崛起' },
          { id: 'S2M4L4', title: 'Canarias — 火山峳古藤葡萄酒' },
          { id: 'S2M4L5', title: 'Calatayud DO — 阿拉貢 Garnacha 老藤的王者' },
          { id: 'S2M4L6', title: 'Campo de Borja DO — 格納希帝國' },
          { id: 'S2M4L7', title: 'Cariñena DO — 岩石之酒的誕生地（1932 DO）' },
          { id: 'S2M4L8', title: 'Somontano DO — 庇里牛斯山麓的歐陸融合（1984 DO）' },
        ],
      },
      {
        id: 'S2M5',
        title: '第五章：Level 2 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'S2FinalExam', title: 'Level 2 綜合評量', isFinalExam: true },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Level 3 — 專業  🏺
  // ─────────────────────────────────────────────────────────────
  level3: {
    id: 'level3',
    title: 'Level 3 - 釀造工藝與特殊酒款',
    subtitle: '橡木桶哲學・Cava・Sherry 索雷拉・加強甜酒',
    duration: '約 4–5 小時',
    difficulty: '專業',
    icon: '🏺',
    color: '#2980b9',
    gradient: 'linear-gradient(135deg, #2c3e50, #3498db)',
    totalLessons: 17,
    prerequisites: ['完成 Level 1', '完成 Level 2'],
    modules: [
      {
        id: 'S3M1',
        title: '第一章：橡木桶陳年哲學',
        lessons: [
          { id: 'S3M1L1', title: '美國橡木 vs 法國橡木：風味差異全解析' },
          { id: 'S3M1L2', title: '傳統 Rioja vs 現代 Rioja 的論戰' },
          { id: 'S3M1L3', title: '微氧化（MOX）技術與現代釀造' },
          { id: 'S3M1L4', title: '有機・自然鹵・生物動力農法在西班牙' },
        ],
      },
      {
        id: 'S3M2',
        title: '第二章：Cava — 西班牙氣泡酒',
        lessons: [
          { id: 'S3M2L1', title: '傳統法（Método Tradicional）詳解' },
          { id: 'S3M2L2', title: '三大基礎品種：Macabeo · Xarel·lo · Parellada' },
          { id: 'S3M2L3', title: 'Cava 分類：Joven · Reserva · Gran Reserva · de Paraje' },
          { id: 'S3M2L4', title: '新生代氣泡酒：Corpinnat & Clàssic Penedès' },
        ],
      },
      {
        id: 'S3M3',
        title: '第三章：Jerez Sherry 深度解析',
        lessons: [
          { id: 'S3M3L1', title: 'Flor 酵母：生物性熟成的奇蹟' },
          { id: 'S3M3L2', title: '索雷拉（Solera）動態熟成系統' },
          { id: 'S3M3L3', title: '六大 Sherry 風格：Fino · Manzanilla · Amontillado · Oloroso · Palo Cortado · PX' },
          { id: 'S3M3L4', title: 'Sherry 餐酒搭配：從西班牙 Tapas 到甜點' },
        ],
      },
      {
        id: 'S3M4',
        title: '第四章：加強酒與甜型酒',
        lessons: [
          { id: 'S3M4L1', title: 'Montilla-Moriles — PX 的故鄉' },
          { id: 'S3M4L2', title: 'Málaga 甜酒與 Moscatel 風格' },
          { id: 'S3M4L3', title: '加那利群島甜酒與日曬葡萄工藝' },
        ],
      },
      {
        id: 'S3M5',
        title: '第五章：Level 3 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'S3FinalExam', title: 'Level 3 綜合評量', isFinalExam: true },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Level 4 — 大師  👑
  // ─────────────────────────────────────────────────────────────
  level4: {
    id: 'level4',
    title: 'Level 4 - 大師品鑑',
    subtitle: '盲飲技術・年份指南・頂級酒莊・侍酒師實務',
    duration: '約 3–4 小時',
    difficulty: '大師',
    icon: '👑',
    color: '#e67e22',
    gradient: 'linear-gradient(135deg, #f39c12, #e67e22)',
    totalLessons: 14,
    prerequisites: ['完成 Level 1', '完成 Level 2', '完成 Level 3'],
    modules: [
      {
        id: 'S4M1',
        title: '第一章：系統性盲品技術',
        lessons: [
          { id: 'S4M1L1', title: 'WSET 系統化分析法（SAT）：外觀・香氣・口感' },
          { id: 'S4M1L2', title: '西班牙品種特徵識別：紅品種香氣圖譜' },
          { id: 'S4M1L3', title: '白品種與氧化風格識別' },
          { id: 'S4M1L4', title: '產區識別：土壤・氣候・釀造工藝的線索' },
        ],
      },
      {
        id: 'S4M2',
        title: '第二章：年份評鑑指南',
        lessons: [
          { id: 'S4M2L1', title: '2005–2024 主要產區年份評比' },
          { id: 'S4M2L2', title: '氣候變遷對西班牙葡萄酒的深遠影響' },
          { id: 'S4M2L3', title: '最佳適飲期：何時開瓶才完美？' },
        ],
      },
      {
        id: 'S4M3',
        title: '第三章：頂級酒莊解析',
        lessons: [
          { id: 'S4M3L1', title: 'Vega Sicilia & Pingus — Ribera del Duero 傳奇' },
          { id: 'S4M3L2', title: 'Álvaro Palacios & Clos Mogador — Priorat 復興' },
          { id: 'S4M3L3', title: 'Rioja 名莊：Muga · López de Heredia · Marqués de Murrieta' },
          { id: 'S4M3L4', title: 'Galicia 白酒：Pazo de Señoráns · Rectoral de Amandi' },
        ],
      },
      {
        id: 'S4M4',
        title: '第四章：侍酒師實務與收藏',
        lessons: [
          { id: 'S4M4L1', title: '服務溫度・醒酒・侍酒禮儀' },
          { id: 'S4M4L2', title: '西班牙酒收藏投資策略：哪些值得窖藏？' },
        ],
      },
      {
        id: 'S4M5',
        title: '第五章：Level 4 大師評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'S4FinalExam', title: 'Level 4 大師評量', isFinalExam: true },
        ],
      },
    ],
  },
}

// ─── 進度儲存工具（localStorage）────────────────────────────────
const STORAGE_PREFIX = 'spain_course_progress_'

export function getUserProgress(levelKey) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + levelKey)
    if (raw) return JSON.parse(raw)
  } catch {/* ignore */}
  return { completedLessons: [], lastAccessedLesson: null }
}

export function saveProgress(levelKey, lessonId) {
  try {
    const prog = getUserProgress(levelKey)
    if (!prog.completedLessons.includes(lessonId)) {
      prog.completedLessons.push(lessonId)
    }
    prog.lastAccessedLesson = lessonId
    localStorage.setItem(STORAGE_PREFIX + levelKey, JSON.stringify(prog))
  } catch {/* ignore */}
}

export function getLevelProgressPercent(levelKey) {
  const level = courseLevels[levelKey]
  if (!level) return 0
  const prog = getUserProgress(levelKey)
  const allLessons = level.modules.flatMap(m => m.lessons.map(l => l.id))
  const examCount = 1  // final exam 不計入進度百分比
  const total = allLessons.length - examCount
  if (total <= 0) return 0
  const completed = prog.completedLessons.filter(id => !id.includes('FinalExam')).length
  return Math.min(100, Math.round((completed / total) * 100))
}
