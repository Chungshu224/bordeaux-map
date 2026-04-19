/**
 * 葡萄牙葡萄酒課程資料
 * 四個難易等級：入門 → 進階 → 專業 → 大師
 */

export const courseLevels = {

  // ─────────────────────────────────────────────────────────────
  //  Level 1 — 入門  🌱
  // ─────────────────────────────────────────────────────────────
  level1: {
    id: 'level1',
    title: 'Level 1 - 葡萄牙葡萄酒入門',
    subtitle: '建立基礎認知，掌握地理、氣候與分級制度',
    duration: '約 2–3 小時',
    difficulty: '入門',
    icon: '🌱',
    color: '#006600',
    gradient: 'linear-gradient(135deg, #006600, #1a9b1a)',
    totalLessons: 14,
    modules: [
      {
        id: 'P1M1',
        title: '第一章：葡萄牙葡萄酒版圖',
        lessons: [
          { id: 'P1M1L1', title: '為什麼學葡萄牙葡萄酒？概覽與特色' },
          { id: 'P1M1L2', title: '14 大產區地理分布：從北到南' },
          { id: 'P1M1L3', title: '三大氣候帶：大西洋・大陸・地中海' },
          { id: 'P1M1L4', title: '土壤類型：花崗岩・片岩・石灰岩・砂土' },
        ],
      },
      {
        id: 'P1M2',
        title: '第二章：分級制度全解析',
        lessons: [
          { id: 'P1M2L1', title: 'DOC/DOP・IGP・Vinho Regional — 法定分級架構' },
          { id: 'P1M2L2', title: '酒標解讀：如何看懂一瓶葡萄牙酒' },
        ],
      },
      {
        id: 'P1M3',
        title: '第三章：核心葡萄品種',
        lessons: [
          { id: 'P1M3L1', title: '五大紅品種：Touriga Nacional・Touriga Franca・Tinta Roriz・Trincadeira・Baga' },
          { id: 'P1M3L2', title: '五大白品種：Alvarinho・Arinto・Encruzado・Fernão Pires・Loureiro' },
          { id: 'P1M3L3', title: '品種 × 產區對應地圖' },
        ],
      },
      {
        id: 'P1M4',
        title: '第四章：三大核心產區快覽',
        lessons: [
          { id: 'P1M4L1', title: 'Douro & Porto — 世界遺產的梯田葡萄園' },
          { id: 'P1M4L2', title: 'Vinho Verde — 最大 DOC 的清新綠酒' },
          { id: 'P1M4L3', title: 'Alentejo — 葡萄牙南部的陽光大地' },
        ],
      },
      {
        id: 'P1M5',
        title: '第五章：Level 1 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'P1FinalExam', title: 'Level 1 綜合評量', isFinalExam: true },
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
    subtitle: '從波特酒到馬德拉，全面掌握葡萄牙各大產區',
    duration: '約 4–5 小時',
    difficulty: '進階',
    icon: '🍷',
    color: '#8B0000',
    gradient: 'linear-gradient(135deg, #8B0000, #c0392b)',
    totalLessons: 22,
    prerequisites: ['完成 Level 1'],
    modules: [
      {
        id: 'P2M1',
        title: '第一章：北部與中北部產區',
        lessons: [
          { id: 'P2M1L1', title: 'Douro 深度解析：三大子產區與頂級紅酒' },
          { id: 'P2M1L2', title: 'Porto 波特酒：Tawny・Ruby・LBV・Vintage' },
          { id: 'P2M1L3', title: 'Vinho Verde 深度：Alvarinho 與 9 個子產區' },
          { id: 'P2M1L4', title: 'Trás-os-Montes：東北偏遠山區的古老風土' },
        ],
      },
      {
        id: 'P2M2',
        title: '第二章：中部山地產區',
        lessons: [
          { id: 'P2M2L1', title: 'Dão：花崗岩土壤與優雅 Touriga Nacional' },
          { id: 'P2M2L2', title: 'Bairrada：高酸 Baga 紅酒與葡萄牙氣泡酒' },
          { id: 'P2M2L3', title: 'Terras da Beira / Beira Interior：山地極端氣候' },
          { id: 'P2M2L4', title: 'Terras de Cister：Távora-Varosa 高海拔氣泡酒' },
        ],
      },
      {
        id: 'P2M3',
        title: '第三章：里斯本周邊與泰加斯河谷',
        lessons: [
          { id: 'P2M3L1', title: 'Lisboa：九大子產區的多元風格' },
          { id: 'P2M3L2', title: 'Bucelas・Colares・Carcavelos：里斯本三寶' },
          { id: 'P2M3L3', title: 'Tejo：泰加斯河谷的豐沛葡萄園' },
        ],
      },
      {
        id: 'P2M4',
        title: '第四章：南部與半島產區',
        lessons: [
          { id: 'P2M4L1', title: 'Alentejo 深度：八大子產區與土壤多樣性' },
          { id: 'P2M4L2', title: 'Península de Setúbal：Moscatel 甜酒傳奇' },
          { id: 'P2M4L3', title: 'Algarve：葡萄牙最南端四大 DOC' },
        ],
      },
      {
        id: 'P2M5',
        title: '第五章：島嶼產區',
        lessons: [
          { id: 'P2M5L1', title: 'Madeira 馬德拉：從 Sercial 到 Malvasia 的氧化奇蹟' },
          { id: 'P2M5L2', title: 'Açores 亞速爾：火山玄武岩與全球最特殊的葡萄酒' },
        ],
      },
      {
        id: 'P2M6',
        title: '第六章：Level 2 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'P2FinalExam', title: 'Level 2 綜合評量', isFinalExam: true },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Level 3 — 專業  🏆
  // ─────────────────────────────────────────────────────────────
  level3: {
    id: 'level3',
    title: 'Level 3 - 加強酒與特殊風格深探',
    subtitle: '波特酒釀造、馬德拉氧化工藝、葡萄牙氣泡酒',
    duration: '約 4–5 小時',
    difficulty: '專業',
    icon: '🏆',
    color: '#1a6b9b',
    gradient: 'linear-gradient(135deg, #1a6b9b, #2980b9)',
    totalLessons: 15,
    prerequisites: ['完成 Level 1', '完成 Level 2'],
    modules: [
      {
        id: 'P3M1',
        title: '第一章：波特酒深度解析',
        lessons: [
          { id: 'P3M1L1', title: '波特酒釀造工藝：加烈時機與 Lagar 踩皮' },
          { id: 'P3M1L2', title: 'Ruby 系列：Ruby・LBV・Vintage・Single Quinta' },
          { id: 'P3M1L3', title: 'Tawny 系列：10/20/30/40 年與 Colheita' },
          { id: 'P3M1L4', title: '波特酒與佳餚：甜點・起司・巧克力配對' },
        ],
      },
      {
        id: 'P3M2',
        title: '第二章：馬德拉酒工藝',
        lessons: [
          { id: 'P3M2L1', title: '馬德拉的 Estufagem 加熱氧化工藝' },
          { id: 'P3M2L2', title: '四大品種風格：Sercial（極干）→ Malvasia（極甜）' },
          { id: 'P3M2L3', title: '馬德拉陳年：百年老酒的秘密' },
        ],
      },
      {
        id: 'P3M3',
        title: '第三章：葡萄牙氣泡酒與其他特殊酒款',
        lessons: [
          { id: 'P3M3L1', title: 'Espumante：Bairrada・Vinho Verde 氣泡酒' },
          { id: 'P3M3L2', title: 'Moscatel de Setúbal 與葡萄牙甜酒世界' },
          { id: 'P3M3L3', title: 'Vinho Verde 中的微氣泡：Pétillant 風格' },
        ],
      },
      {
        id: 'P3M4',
        title: '第四章：風土與橡木桶',
        lessons: [
          { id: 'P3M4L1', title: '花崗岩 vs. 片岩 vs. 石灰岩：風土影響分析' },
          { id: 'P3M4L2', title: '葡萄牙橡木桶：Balseiro 大桶傳統與法國桶現代派' },
          { id: 'P3M4L3', title: '老藤葡萄酒：Colares Ramisco 與 Douro 百年老藤' },
        ],
      },
      {
        id: 'P3M5',
        title: '第五章：Level 3 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'P3FinalExam', title: 'Level 3 綜合評量', isFinalExam: true },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Level 4 — 大師  👑  (即將推出)
  // ─────────────────────────────────────────────────────────────
  level4: {
    id: 'level4',
    title: 'Level 4 - 大師品鑑與垂直年份',
    subtitle: '盲品技術、年份解析、市場與投資視角',
    duration: '約 5–6 小時',
    difficulty: '大師',
    icon: '👑',
    color: '#B8860B',
    gradient: 'linear-gradient(135deg, #B8860B, #DAA520)',
    totalLessons: 12,
    prerequisites: ['完成 Level 1', '完成 Level 2', '完成 Level 3'],
    status: 'coming',
    modules: [
      {
        id: 'P4M1',
        title: '第一章：葡萄牙頂級酒款品鑑',
        lessons: [
          { id: 'P4M1L1', title: 'Barca Velha・Quinta do Crasto・Niepoort：頂級酒莊解析' },
          { id: 'P4M1L2', title: '盲品葡萄牙紅酒：Touriga Nacional vs. Syrah vs. Baga' },
          { id: 'P4M1L3', title: '頂級波特酒垂直品鑑：Vintage Port 年份解析' },
        ],
      },
      {
        id: 'P4M2',
        title: '第二章：年份與氣候變遷',
        lessons: [
          { id: 'P4M2L1', title: '杜羅河谷年份評分指南：2000–2023' },
          { id: 'P4M2L2', title: '氣候變遷對葡萄牙葡萄酒的影響' },
          { id: 'P4M2L3', title: '有機、生物動力與自然酒運動' },
        ],
      },
      {
        id: 'P4M3',
        title: '第三章：餐酒搭配與市場',
        lessons: [
          { id: 'P4M3L1', title: '葡萄牙菜與葡萄酒：Bacalhau・烤乳豬・蛋撻' },
          { id: 'P4M3L2', title: '葡萄牙葡萄酒的全球市場與出口趨勢' },
          { id: 'P4M3L3', title: '收藏與投資：波特酒與馬德拉的陳年潛力' },
        ],
      },
      {
        id: 'P4M4',
        title: '第四章：Level 4 大師評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'P4FinalExam', title: 'Level 4 大師評量', isFinalExam: true },
        ],
      },
    ],
  },
}

// ─── 進度儲存工具（localStorage）────────────────────────────────
const STORAGE_PREFIX = 'portugal_course_progress_'

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
  const examCount = 1
  const total = allLessons.length - examCount
  if (total <= 0) return 0
  const completed = prog.completedLessons.filter(id => !id.includes('FinalExam')).length
  return Math.min(100, Math.round((completed / total) * 100))
}
