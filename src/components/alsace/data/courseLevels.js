/**
 * 阿爾薩斯葡萄酒課程資料
 * 四個難易等級：入門 → 進階 → 專業 → 大師
 */

export const courseLevels = {

  // ─────────────────────────────────────────────────────────────
  //  Level 1 — 入門  🌱
  // ─────────────────────────────────────────────────────────────
  level1: {
    id: 'level1',
    title: 'Level 1 - 阿爾薩斯葡萄酒入門',
    subtitle: '建立基礎認知，掌握風土與品種',
    duration: '約 2–3 小時',
    difficulty: '入門',
    icon: '🌱',
    color: '#2d6a4f',
    gradient: 'linear-gradient(135deg, #2d6a4f, #52b788)',
    totalLessons: 16,
    modules: [
      {
        id: 'AL1M1',
        title: '第一章：阿爾薩斯產區概覽',
        lessons: [
          { id: 'AL1M1L1', title: '為什麼學阿爾薩斯葡萄酒？產區概覽與特色' },
          { id: 'AL1M1L2', title: '地理位置與行政區劃：Bas-Rhin 與 Haut-Rhin' },
          { id: 'AL1M1L3', title: '歷史：從羅馬時代到 1945 年的現代化之路' },
          { id: 'AL1M1L4', title: '氣候：10 個氣候帶與逆溫層現象' },
        ],
      },
      {
        id: 'AL1M2',
        title: '第二章：風土基礎',
        lessons: [
          { id: 'AL1M2L1', title: '三大地形：孚日山麓・丘陵・萊茵平原' },
          { id: 'AL1M2L2', title: '土壤大觀：石灰岩・板岩・花崗岩・黏土' },
          { id: 'AL1M2L3', title: '為什麼阿爾薩斯幾乎只產白酒？' },
        ],
      },
      {
        id: 'AL1M3',
        title: '第三章：核心葡萄品種',
        lessons: [
          { id: 'AL1M3L1', title: 'Riesling — 阿爾薩斯之王' },
          { id: 'AL1M3L2', title: 'Gewurztraminer — 玫瑰荔枝的華麗' },
          { id: 'AL1M3L3', title: 'Pinot Gris 與 Muscat：豐腴與奔放' },
          { id: 'AL1M3L4', title: 'Pinot Blanc・Sylvaner・Pinot Noir 與其他品種' },
        ],
      },
      {
        id: 'AL1M4',
        title: '第四章：AOC 分級制度',
        lessons: [
          { id: 'AL1M4L1', title: 'AOC 三層架構：Alsace／地理標示／Grand Cru' },
          { id: 'AL1M4L2', title: '酒標規則與品種標示：85% 規則詳解' },
          { id: 'AL1M4L3', title: '產量與釀造規定' },
          { id: 'AL1M4L4', title: 'VT 與 SGN 貴腐甜酒入門' },
        ],
      },
      {
        id: 'AL1EXAM',
        title: '第五章：Level 1 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'AL1FinalExam', title: 'Level 1 綜合評量', isFinalExam: true },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Level 2 — 進階  🏔️
  // ─────────────────────────────────────────────────────────────
  level2: {
    id: 'level2',
    title: 'Level 2 - Grand Cru 深度探索',
    subtitle: '51 個特級園的地質分類與風格解析',
    duration: '約 4–5 小時',
    difficulty: '進階',
    icon: '🏔️',
    color: '#1b4332',
    gradient: 'linear-gradient(135deg, #1b4332, #2d6a4f)',
    totalLessons: 16,
    prerequisites: ['完成 Level 1'],
    modules: [
      {
        id: 'AL2M1',
        title: '第一章：Grand Cru 制度總論',
        lessons: [
          { id: 'AL2M1L1', title: 'Grand Cru 分級簡史（1975–2007）與規範總則' },
          { id: 'AL2M1L2', title: 'Claude Sittler 地質分類：十大地質族群' },
        ],
      },
      {
        id: 'AL2M2',
        title: '第二章：片岩・火山岩與砂岩',
        lessons: [
          { id: 'AL2M2L1', title: 'Kastelberg — 片岩上的 Riesling' },
          { id: 'AL2M2L2', title: 'Rangen 與 Muenchberg — 火山沉積岩兩傑' },
          { id: 'AL2M2L3', title: 'Wiebelsberg・Kessler・Kitterlé — 孚日砂岩三傑' },
        ],
      },
      {
        id: 'AL2M3',
        title: '第三章：花崗岩產區',
        lessons: [
          { id: 'AL2M3L1', title: '花崗岩產區導論：Schlossberg・Sommerberg・Wineck-Schlossberg' },
          { id: 'AL2M3L2', title: 'Frankstein・Brand・Winzenberg 及其他花崗岩 Cru' },
        ],
      },
      {
        id: 'AL2M4',
        title: '第四章：石灰岩與灰砂岩',
        lessons: [
          { id: 'AL2M4L1', title: '石灰岩四傑：Bruderthal・Rosacker・Steinert・Steinklotz' },
          { id: 'AL2M4L2', title: '灰砂岩三傑：Geisberg・Pfingstberg・Zinnkoepfle' },
        ],
      },
      {
        id: 'AL2M5',
        title: '第五章：泥灰岩系（最大地質族群）',
        lessons: [
          { id: 'AL2M5L1', title: '泥灰砂岩七傑：Furstentum・Kirchberg de Ribeauvillé 等' },
          { id: 'AL2M5L2', title: '泥灰石灰砂岩：Altenberg de Bergheim 混釀特例' },
          { id: 'AL2M5L3', title: '泥灰石灰岩群（上）：Eichberg・Goldert・Hengst' },
          { id: 'AL2M5L4', title: '泥灰石灰岩群（下）與黏土泥灰岩：Schoenenbourg・Kanzlerberg' },
        ],
      },
      {
        id: 'AL2M6',
        title: '第六章：特殊產區與知名 Clos',
        lessons: [
          { id: 'AL2M6L1', title: 'Cléebourg 飛地與 Klevener de Heiligenstein' },
          { id: 'AL2M6L2', title: '阿爾薩斯知名 Clos 巡禮' },
        ],
      },
      {
        id: 'AL2EXAM',
        title: '第七章：Level 2 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'AL2FinalExam', title: 'Level 2 綜合評量', isFinalExam: true },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Level 3 — 專業  🍾
  // ─────────────────────────────────────────────────────────────
  level3: {
    id: 'level3',
    title: 'Level 3 - 釀造工藝與特殊酒款',
    subtitle: '從葡萄園到 Crémant、貴腐甜酒與蒸餾酒',
    duration: '約 3–4 小時',
    difficulty: '專業',
    icon: '🍾',
    color: '#c9a227',
    gradient: 'linear-gradient(135deg, #8a6d1f, #c9a227)',
    totalLessons: 11,
    prerequisites: ['完成 Level 1', '完成 Level 2'],
    modules: [
      {
        id: 'AL3M1',
        title: '第一章：葡萄園栽培實務',
        lessons: [
          { id: 'AL3M1L1', title: '年度栽培週期與 Guyot 修剪' },
          { id: 'AL3M1L2', title: '病蟲害防治與永續栽培' },
        ],
      },
      {
        id: 'AL3M2',
        title: '第二章：Crémant d\'Alsace',
        lessons: [
          { id: 'AL3M2L1', title: '傳統法氣泡酒工藝' },
          { id: 'AL3M2L2', title: 'Crémant 品種特性與市場地位' },
        ],
      },
      {
        id: 'AL3M3',
        title: '第三章：VT 與 SGN 貴腐甜酒',
        lessons: [
          { id: 'AL3M3L1', title: '貴腐與晚摘：VT 與 SGN 的嚴格規範' },
          { id: 'AL3M3L2', title: '四大品種的貴腐甜酒風格' },
        ],
      },
      {
        id: 'AL3M4',
        title: '第四章：調配酒藝術',
        lessons: [
          { id: 'AL3M4L1', title: 'Edelzwicker vs Gentil：兩種調配哲學' },
          { id: 'AL3M4L2', title: 'Altenberg de Bergheim 與 Kaefferkopf 混釀 Grand Cru' },
        ],
      },
      {
        id: 'AL3M5',
        title: '第五章：蒸餾酒與其他特產',
        lessons: [
          { id: 'AL3M5L1', title: 'Marc d\'Alsace Gewurztraminer' },
          { id: 'AL3M5L2', title: 'Mirabelle de Lorraine 洛林蜜李白蘭地' },
        ],
      },
      {
        id: 'AL3EXAM',
        title: '第六章：Level 3 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'AL3FinalExam', title: 'Level 3 綜合評量', isFinalExam: true },
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
    subtitle: '比較品飲・餐酒搭配・系統化盲飲',
    duration: '約 2–3 小時',
    difficulty: '大師',
    icon: '👑',
    color: '#40241a',
    gradient: 'linear-gradient(135deg, #40241a, #7c4a2d)',
    totalLessons: 7,
    prerequisites: ['完成 Level 1', '完成 Level 2', '完成 Level 3'],
    modules: [
      {
        id: 'AL4M2',
        title: '第一章：比較品飲',
        lessons: [
          { id: 'AL4M2L1', title: 'Alsace vs 德國萊茵／摩塞爾比較品飲' },
          { id: 'AL4M2L2', title: '傳統 vs 現代風格：乾型化浪潮' },
        ],
      },
      {
        id: 'AL4M3',
        title: '第二章：餐酒搭配與文化',
        lessons: [
          { id: 'AL4M3L1', title: '阿爾薩斯美食與餐酒搭配全圖' },
          { id: 'AL4M3L2', title: '觀光路線與葡萄酒文化' },
        ],
      },
      {
        id: 'AL4M4',
        title: '第三章：系統化品飲',
        lessons: [
          { id: 'AL4M4L1', title: 'WSET SAT 架構品飲阿爾薩斯白酒' },
          { id: 'AL4M4L2', title: '盲飲判讀：品種與產區線索' },
        ],
      },
      {
        id: 'AL4EXAM',
        title: '第四章：Level 4 大師評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'AL4FinalExam', title: 'Level 4 大師評量', isFinalExam: true },
        ],
      },
    ],
  },
}

// ─── 進度儲存工具（localStorage）────────────────────────────────
const STORAGE_PREFIX = 'alsace_course_progress_'

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

// 總課程數（供選單頁動態計算，避免像早期課程一樣出現硬編碼數字失準的問題）
export function getTotalLessonCount() {
  return Object.values(courseLevels)
    .flatMap(l => l.modules.flatMap(m => m.lessons))
    .length
}
