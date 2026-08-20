/**
 * 德國葡萄酒課程結構
 */
import { authState } from '../../../stores/authStore.js'

// 依帳號 id 區分 localStorage key，避免同一瀏覽器不同帳號互相看到彼此的課程進度
function progressKey(levelKey) {
  const userId = authState.user?.id
  return userId ? `germany-${levelKey}-progress:${userId}` : null
}

export const courseLevels = {
  level1: {
    id: 'level1',
    title: 'Level 1 - 德國葡萄酒入門',
    subtitle: '分級制度、13 大產區概覽、核心品種 Riesling',
    duration: '3-4 小時',
    difficulty: '入門',
    icon: '🌱',
    color: '#4CAF50',
    totalLessons: 11,
    modules: [
      {
        id: 'G1M1',
        title: '第一章：德國葡萄酒概論',
        lessons: [
          { id: 'G1M1L1', title: '德國葡萄酒的世界地位' },
          { id: 'G1M1L2', title: '德國葡萄酒分級制度 QbA & Prädikat' },
          { id: 'G1M1L3', title: '13 個 Anbaugebiete 地理概覽', mapRegion: 'mosel' }
        ]
      },
      {
        id: 'G1M2',
        title: '第二章：核心品種認識',
        lessons: [
          { id: 'G1M2L1', title: 'Riesling — 德國之王' },
          { id: 'G1M2L2', title: '其他重要白葡萄品種' },
          { id: 'G1M2L3', title: '德國紅葡萄品種' }
        ]
      },
      {
        id: 'G1M3',
        title: '第三章：德國酒標解讀',
        lessons: [
          { id: 'G1M3L1', title: '如何閱讀德國酒標' },
          { id: 'G1M3L2', title: 'Prädikat 甜度等級詳解' },
          { id: 'G1M3L3', title: 'VDP 頂級酒莊聯盟簡介' }
        ]
      },
      {
        id: 'G1M4',
        title: '第四章：Level 1 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'G1M4L1', title: '德式餐酒搭配入門' },
          { id: 'G1FinalExam', title: 'Level 1 綜合評量', isFinalExam: true }
        ]
      }
    ]
  },

  level2: {
    id: 'level2',
    title: 'Level 2 - 產區深度探索',
    subtitle: '深入 13 個 Anbaugebiete，掌握風土與品種特色',
    duration: '6-8 小時',
    difficulty: '進階',
    icon: '🍷',
    color: '#3F51B5',
    totalLessons: 17,
    modules: [
      {
        id: 'G2M1',
        title: '第一章：萊茵系列精華產區',
        lessons: [
          { id: 'G2M1L1', title: 'Mosel — 陡峭板岩的傳奇', mapRegion: 'mosel' },
          { id: 'G2M1L2', title: 'Rheingau — 優雅 Riesling 的標竿', mapRegion: 'rheingau' },
          { id: 'G2M1L3', title: 'Rheinhessen — 最大最多元的產區', mapRegion: 'rheinhessen' },
          { id: 'G2M1L4', title: 'Nahe — 礦物感的隱藏寶藏', mapRegion: 'nahe' }
        ]
      },
      {
        id: 'G2M2',
        title: '第二章：南德主要產區',
        lessons: [
          { id: 'G2M2L1', title: 'Pfalz — 溫暖豐潤的南境', mapRegion: 'pfalz' },
          { id: 'G2M2L2', title: 'Baden — 最接近地中海的德國', mapRegion: 'baden' },
          { id: 'G2M2L3', title: 'Württemberg — Trollinger 紅酒之鄉', mapRegion: 'wuerttemberg' },
          { id: 'G2M2L4', title: 'Franken — Bocksbeutel 的故鄉', mapRegion: 'franken' }
        ]
      },
      {
        id: 'G2M3',
        title: '第三章：北德與東德產區',
        lessons: [
          { id: 'G2M3L1', title: 'Ahr — 德國紅酒聖地', mapRegion: 'ahr' },
          { id: 'G2M3L2', title: 'Mittelrhein — 城堡峽谷的珍釀', mapRegion: 'mittelrhein' },
          { id: 'G2M3L3', title: 'Hessische Bergstrasse — 德國最早春天', mapRegion: 'hessische' },
          { id: 'G2M3L4', title: 'Saale-Unstrut & Sachsen — 東德新生', mapRegion: 'sachsen' }
        ]
      },
      {
        id: 'G2M4',
        title: '第四章：特殊酒款深度解析',
        lessons: [
          { id: 'G2M4L1', title: 'Eiswein 與 TBA — 甜酒巔峰' },
          { id: 'G2M4L2', title: 'Sekt — 德國氣泡酒' },
          { id: 'G2M4L3', title: '年份與收藏策略' }
        ]
      },
      {
        id: 'G2M5',
        title: '第五章：Level 2 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'G2FinalExam', title: 'Level 2 綜合評量', isFinalExam: true }
        ]
      }
    ]
  },

  level3: {
    id: 'level3',
    title: 'Level 3 - 品飲鑑賞',
    subtitle: 'VDP 分級、盲品技巧、頂級葡萄園、餐酒搭配精要',
    duration: '4-6 小時',
    difficulty: '專家',
    icon: '🏆',
    color: '#9C27B0',
    totalLessons: 9,
    prerequisites: ['完成 Level 1', '完成 Level 2'],
    modules: [
      {
        id: 'G3M1',
        title: '第一章：VDP 頂級酒莊體系',
        lessons: [
          { id: 'G3M1L1', title: 'VDP 聯盟與四級分類詳解' },
          { id: 'G3M1L2', title: 'Großes Gewächs — 德國頂級單一葡萄園' },
          { id: 'G3M1L3', title: '知名酒莊名單與風格解析' }
        ]
      },
      {
        id: 'G3M2',
        title: '第二章：盲品與感官訓練',
        lessons: [
          { id: 'G3M2L1', title: 'Riesling 年份與熟成特徵' },
          { id: 'G3M2L2', title: 'Riesling vs Mosel vs Rheingau 盲品分辨' },
          { id: 'G3M2L3', title: '德國頂級年份解析 1971–2021' }
        ]
      },
      {
        id: 'G3M3',
        title: '第三章：德酒餐搭與文化',
        lessons: [
          { id: 'G3M3L1', title: '德國料理與葡萄酒完美搭配' },
          { id: 'G3M3L2', title: 'Riesling 的亞洲料理伙伴' }
        ]
      },
      {
        id: 'G3M4',
        title: '第四章：Level 3 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'G3FinalExam', title: 'Level 3 綜合評量', isFinalExam: true }
        ]
      }
    ]
  }
}

// ── Progress helpers ──────────────────────────────────────────────────
export function getUserProgress(levelKey) {
  const key = progressKey(levelKey)
  const saved = key ? localStorage.getItem(key) : null
  return saved ? JSON.parse(saved) : { completedLessons: [] }
}

export function saveProgress(levelKey, lessonId) {
  const key = progressKey(levelKey)
  if (!key) return
  const progress = getUserProgress(levelKey)
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
    localStorage.setItem(key, JSON.stringify(progress))
  }
}

export function getLevelProgressPct(levelKey) {
  const level = courseLevels[levelKey]
  if (!level) return 0
  const progress = getUserProgress(levelKey)
  const total = level.totalLessons
  const done = progress.completedLessons.length
  return total > 0 ? Math.round((done / total) * 100) : 0
}
