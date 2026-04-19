/**
 * courseLevels.js  ─  澳洲葡萄酒課程等級定義
 * 仿照 portugal/data/courseLevels.js 架構
 */

export const STORAGE_PREFIX = 'australia_course_progress_'

// ── 課程等級定義 ───────────────────────────────────────────────────────────
export const courseLevels = [
  {
    key:   'level1',
    title: 'Level 1：入門',
    subtitle: '認識澳洲葡萄酒',
    icon:  '🦘',
    color: '#00274e',
    locked: false,
    modules: [
      {
        id: 'M1', title: '澳洲概覽',
        lessons: [
          { id: 'A1M1L1', title: '為什麼學澳洲葡萄酒？',    icon: '🌏' },
          { id: 'A1M1L2', title: '六州葡萄酒地理分布',      icon: '🗺' },
          { id: 'A1M1L3', title: '三大氣候帶與地形影響',    icon: '☁️' },
          { id: 'A1M1L4', title: 'GI 分級制度：Zone / Region / Sub-Region', icon: '📋' },
        ],
      },
      {
        id: 'M2', title: '核心品種',
        lessons: [
          { id: 'A1M2L1', title: '5 大紅葡萄品種',          icon: '🍇' },
          { id: 'A1M2L2', title: '5 大白葡萄品種',          icon: '🍾' },
          { id: 'A1M2L3', title: '品種 × 產區對應',         icon: '🔗' },
        ],
      },
      {
        id: 'M3', title: '南澳大利亞 SA',
        lessons: [
          { id: 'A1M3L1', title: 'Barossa Valley：老藤 Shiraz 聖地', icon: '🌡️' },
          { id: 'A1M3L2', title: 'McLaren Vale 與 Adelaide Hills',   icon: '🌊' },
          { id: 'A1M3L3', title: 'Clare Valley & Eden Valley：Riesling 雙雄', icon: '🍋' },
          { id: 'A1M3L4', title: 'Coonawarra：澳洲最著名 Cabernet', icon: '🪨' },
        ],
      },
      {
        id: 'M4', title: '維多利亞 & NSW',
        lessons: [
          { id: 'A1M4L1', title: 'Yarra Valley & Mornington Peninsula', icon: '🎻' },
          { id: 'A1M4L2', title: 'Heathcote & Rutherglen：獨特風土', icon: '🟤' },
          { id: 'A1M4L3', title: 'Hunter Valley：Semillon 的奇蹟',   icon: '⏳' },
        ],
      },
      {
        id: 'M5', title: '西澳 & 塔斯馬尼亞',
        lessons: [
          { id: 'A1M5L1', title: 'Margaret River：澳洲波爾多', icon: '🏄' },
          { id: 'A1M5L2', title: 'Great Southern & Tasmania', icon: '🧊' },
        ],
      },
      {
        id: 'EXAM', title: '期末測驗',
        lessons: [
          { id: 'A1FinalExam', title: '入門綜合測驗', icon: '🎓', isFinalExam: true },
        ],
      },
    ],
  },
  {
    key:   'level2',
    title: 'Level 2：進階',
    subtitle: '深入各州精品產區',
    icon:  '🍷',
    color: '#8B1A1A',
    locked: false,
    modules: [
      {
        id: 'M1', title: '南澳深度',
        lessons: [
          { id: 'A2M1L1', title: 'Barossa 老藤分級系統',          icon: '🌳' },
          { id: 'A2M1L2', title: 'Eden Valley Riesling 陳年特性',  icon: '⏳' },
          { id: 'A2M1L3', title: 'Clare Valley Sub-Region 解析',  icon: '🔍' },
          { id: 'A2M1L4', title: 'Limestone Coast Zone 全覽',     icon: '🪨' },
        ],
      },
      {
        id: 'M2', title: '維多利亞深度',
        lessons: [
          { id: 'A2M2L1', title: 'Yarra Valley 上下亞拉差異',     icon: '⬆️' },
          { id: 'A2M2L2', title: 'King Valley 義大利品種革命',     icon: '🇮🇹' },
          { id: 'A2M2L3', title: 'Rutherglen Muscat 四個等級',    icon: '🍯' },
          { id: 'A2M2L4', title: 'Grampians Sparkling Shiraz',   icon: '✨' },
        ],
      },
      {
        id: 'M3', title: 'NSW 深度',
        lessons: [
          { id: 'A2M3L1', title: 'Hunter Semillon 年份縱向比較',  icon: '📅' },
          { id: 'A2M3L2', title: 'Canberra District 精品小產區', icon: '🏔️' },
          { id: 'A2M3L3', title: 'Orange & Mudgee 高海拔比較',   icon: '🏔️' },
        ],
      },
      {
        id: 'M4', title: '西澳深度',
        lessons: [
          { id: 'A2M4L1', title: 'Margaret River 子產區解析',    icon: '🗺' },
          { id: 'A2M4L2', title: 'Great Southern 五個 Region',   icon: '5️⃣' },
          { id: 'A2M4L3', title: 'Frankland River Riesling 風格', icon: '🍋' },
        ],
      },
      {
        id: 'M5', title: '塔斯馬尼亞 & QLD',
        lessons: [
          { id: 'A2M5L1', title: 'Tasmania 涼爽氣候優勢',        icon: '❄️' },
          { id: 'A2M5L2', title: 'Tasmania 北 vs 南比較',        icon: '⬆️' },
          { id: 'A2M5L3', title: 'Granite Belt 昆士蘭獨特性',    icon: '🪨' },
        ],
      },
      {
        id: 'M6', title: '澳洲釀酒工藝',
        lessons: [
          { id: 'A2M6L1', title: '螺旋蓋革命與保存技術',         icon: '🔩' },
          { id: 'A2M6L2', title: '橡木桶陳年 vs 不鏽鋼',        icon: '🛢️' },
          { id: 'A2M6L3', title: '澳洲有機與自然酒趨勢',         icon: '🌿' },
        ],
      },
    ],
  },
  {
    key:   'level3',
    title: 'Level 3：專業',
    subtitle: '品飲技巧與年份解析',
    icon:  '🏆',
    color: '#1a6b9b',
    locked: false,
    modules: [
      {
        id: 'M1', title: 'Penfolds 解析',
        lessons: [
          { id: 'A3M1L1', title: 'Bin 系列完整解析',             icon: '📦' },
          { id: 'A3M1L2', title: 'Grange：澳洲最偉大紅酒',      icon: '👑' },
        ],
      },
      {
        id: 'M2', title: '年份指南',
        lessons: [
          { id: 'A3M2L1', title: '澳洲重要年份（2010–2023）',   icon: '📅' },
          { id: 'A3M2L2', title: '氣候變遷對澳洲的影響',        icon: '🌡️' },
        ],
      },
      {
        id: 'M3', title: '系統化品飲',
        lessons: [
          { id: 'A3M3L1', title: 'WSET 架構品飲澳洲酒',         icon: '📝' },
          { id: 'A3M3L2', title: 'Shiraz 風格光譜',             icon: '🌈' },
          { id: 'A3M3L3', title: 'Chardonnay 風格演變',         icon: '🍊' },
        ],
      },
      {
        id: 'M4', title: '餐酒搭配',
        lessons: [
          { id: 'A3M4L1', title: '澳洲飲食文化與葡萄酒',        icon: '🦞' },
          { id: 'A3M4L2', title: '牛羊肉 × 澳洲紅酒',           icon: '🥩' },
        ],
      },
      {
        id: 'EXAM', title: '期末測驗',
        lessons: [
          { id: 'A3FinalExam', title: '專業綜合測驗', icon: '🎓', isFinalExam: true },
        ],
      },
    ],
  },
  {
    key:   'level4',
    title: 'Level 4：大師',
    subtitle: '頂尖酒莊與收藏',
    icon:  '💎',
    color: '#B8860B',
    status: 'coming',
    modules: [],
  },
]

// ── Progress utilities ────────────────────────────────────────────────────
export function getUserProgress(levelKey) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + levelKey)
    return raw ? JSON.parse(raw) : {}
  } catch { return {} }
}

export function saveProgress(levelKey, lessonId) {
  try {
    const prev = getUserProgress(levelKey)
    prev[lessonId] = true
    localStorage.setItem(STORAGE_PREFIX + levelKey, JSON.stringify(prev))
  } catch { /* ignore */ }
}

export function getLevelProgressPercent(levelKey) {
  const level = courseLevels.find(l => l.key === levelKey)
  if (!level) return 0
  const allLessons = level.modules.flatMap(m => m.lessons)
  if (allLessons.length === 0) return 0
  const done = getUserProgress(levelKey)
  const count = allLessons.filter(l => done[l.id]).length
  return Math.round((count / allLessons.length) * 100)
}
