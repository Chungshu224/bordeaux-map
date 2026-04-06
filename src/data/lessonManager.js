// 課程內容管理系統 - 動態載入模式
// L1課程已經全部分離為獨立模組，L2課程也採用相同架構

export const lessonContentMap = {
  // L1 基礎課程 - 動態載入
  // 'l1-1': 波爾多地理位置與三河匯流
  // 'l1-2': 氣候與環境基礎
  // 'l1-3': 主要葡萄品種基礎
  // 'l1-4': 左岸與右岸的差異
  // 'l1-5': 酒款類型概覽
  // 'l1-6': AOC分級制度入門
  // 'l1-7': 品酒基礎
  // 'l1-8': 總結與評估
  
  // L2 中級課程 - 動態載入
  // 'l2-1': Médoc產區深度探索
  // 'l2-2': Margaux - 優雅的香水之鄉
  // 'l2-3': Pauillac - 王者風範的產區
  // 'l2-4': Saint-Julien - 平衡的典範
  // 'l2-5': Saint-Estèphe - 北地之珠
  // 'l2-6': Pomerol - 稀世珍寶
  // 'l2-7': 聖愛美濃深度探索
  // 'l2-8': Libournais衛星產區
  
  // L3-5 綜合（合併版）
  // 'l3-5': 現代釀酒工藝與技術（Part1+Part2+Part3A+Part3B 整合）
}

// 新版：改用 lessonContentLoader.js 中的顯式映射，避免將整個 lessons 目錄打包為多餘 chunk。
// 若未來要移除此檔，可直接在呼叫端改用 lessonContentLoader.js 的 loadLessonContent。
import { lessonModuleLoaders } from './lessonContentLoader.js'

export async function loadLessonContent(lessonId) {
  const loader = lessonModuleLoaders[lessonId]
  if (!loader) {
    console.warn(`[lessonManager] No mapped loader for ${lessonId}, returning placeholder`)
    return createPlaceholderContent(lessonId)
  }
  try {
    const module = await loader()
    const contentKey = lessonId.replace('-', '') + 'Content'
    const candidates = [
      'default', 'lessonContent', contentKey,
      'l21Content','l22Content','l23Content','l24Content','l25Content','l26Content','l27Content','l28Content','l29Content','l31Content','l32Content','l33Content','l34Content','l35Content','l36Content','l37Content','l38Content','l39Content','l311Content','l311Part1Content','l311Part2Content','l312Content','l313Part1Content','l313Part2Content','l314Content','l3gtcContent'
    ]
    for (const key of candidates) {
      if (module[key]) {
        const data = module[key]
        if (Array.isArray(data) && data.length === 0) {
          console.warn(`[lessonManager] Content array for ${lessonId} is empty, using placeholder`)
          return createPlaceholderContent(lessonId)
        }
        return data
      }
    }
    console.warn(`[lessonManager] No recognized export in module for ${lessonId}, using placeholder`)
    return createPlaceholderContent(lessonId)
  } catch (e) {
    console.error(`[lessonManager] Failed to load ${lessonId}`, e)
    return createPlaceholderContent(lessonId)
  }
}

// 創建佔位內容（當課程內容尚未建立時）
function createPlaceholderContent(lessonId) {
  return [
    {
      type: 'cover',
      title: `課程 ${lessonId.toUpperCase()}`,
      subtitle: '內容開發中',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '📚'
    },
    {
      type: 'content',
      title: '課程內容準備中',
      content: [
        {
          subtitle: '敬請期待',
          text: `${lessonId.toUpperCase()} 課程的詳細內容正在製作中，敬請期待！`
        },
        {
          subtitle: '臨時說明',
          text: '您可以先瀏覽其他已完成的課程，或繼續探索波爾多葡萄酒的學習之旅。'
        }
      ]
    },
    {
      type: 'end',
      title: '課程預覽結束',
      message: '完整課程內容即將推出',
      nextSteps: [
        '返回課程列表選擇其他課程',
        '查看已完成的課程內容',
        '繼續探索波爾多產區'
      ]
    }
  ]
}