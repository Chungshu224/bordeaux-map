// 羅亞爾河谷葡萄酒學習系統狀態管理
import { reactive, computed } from 'vue'

// 羅亞爾學習進度狀態
export const loireLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 5 },
    level2: { completed: 0, total: 6 },
    level3: { completed: 0, total: 6 },
    level4: { completed: 0, total: 4 },
    level5: { completed: 0, total: 3 }
  },
  achievements: []
})

// 羅亞爾學習等級配置（對應官網五大子產區 vinsdeloire.fr）
export const loireLearningLevels = {

  // ── Level 1：南特產區（Le Nantais）──────────────────────────────────
  level1: {
    title: 'Level 1 — 南特產區',
    titleFr: 'Le Vignoble Nantais',
    emoji: '🌊',
    region: 'Nantais',
    mapGroup: 'PayNantes',
    description: '大西洋門戶，碘香海風與礦物張力——Muscadet 王國、sur lie 技術與海鮮佐餐藝術',
    color: '#1a6b5a',
    accentColor: '#e0f5f0',
    keyGrapes: 'Melon de Bourgogne · Folle Blanche',
    keyAOC: ['Muscadet Sèvre-et-Maine', 'Muscadet Côtes de Grandlieu', 'Gros Plant du Pays Nantais', 'Coteaux d\'Ancenis'],
    modules: [
      { id: 'LO1M1', title: '南特地理與海洋性氣候', lessonIds: ['lo-l1-1', 'lo-l1-2'] },
      { id: 'LO1M2', title: 'Muscadet 深度探索', lessonIds: ['lo-l1-3', 'lo-l1-4'] },
      { id: 'LO1M3', title: '品飲與 Level 1 評量', lessonIds: ['lo-l1-5'] }
    ],
    lessons: [
      {
        id: 'lo-l1-1',
        title: '認識南特產區 — 大西洋門戶',
        description: '探索法國最西邊的葡萄酒產區：地理位置、歷史沿革、17 個 AOC/DGC/IGP 完整版圖，以及為何說「南特是羅亞爾河谷最具海洋個性的產區」',
        duration: 15
      },
      {
        id: 'lo-l1-2',
        title: 'Melon de Bourgogne — sur lie 的靈魂技術',
        description: '深入認識 Muscadet 的靈魂品種 Melon de Bourgogne：起源於勃根地、移植南特的歷史，以及影響酒款風格的 sur lie 帶酒泥陳釀技術詳解',
        duration: 16
      },
      {
        id: 'lo-l1-3',
        title: 'Muscadet 四大 AOC — 地塊、土壤與分級',
        description: '系統比較 Muscadet Sèvre-et-Maine、Muscadet Côtes de Grandlieu、Muscadet Coteaux de la Loire 三大地理 AOC，以及地塊分級（Clisson、Gorges、Le Pallet 等）的意義與特色',
        duration: 20
      },
      {
        id: 'lo-l1-4',
        title: 'Folle Blanche、Gros Plant 與南特其他 AOC',
        description: '認識 Gros Plant du Pays Nantais（Folle Blanche 單品種）的銳利酸度，以及 Coteaux d\'Ancenis（Malvoisie 甜酒）和 Fiefs Vendéens 的多元風格',
        duration: 18
      },
      {
        id: 'lo-l1-5',
        title: 'Level 1 品飲實習與綜合評量',
        description: '掌握南特產區品飲技巧，學習 Muscadet 與海鮮的經典搭配法則，完成 Level 1 知識測驗取得認證',
        duration: 25
      }
    ]
  },

  // ── Level 2：安茹-索米爾（Anjou-Saumur）─────────────────────────────
  level2: {
    title: 'Level 2 — 安茹-索米爾',
    titleFr: 'L\'Anjou-Saumur',
    emoji: '🏰',
    region: 'AnjouSaumur',
    mapGroup: 'AnjouSaumur',
    description: 'Chenin Blanc 的王國——從礦物干型到貴腐甜酒金字塔，再到索米爾凝灰岩上的 Cabernet Franc 與 Crémant',
    color: '#8b2c2c',
    accentColor: '#fdeaea',
    keyGrapes: 'Chenin Blanc · Cabernet Franc · Cabernet Sauvignon',
    keyAOC: ['Savennières', 'Coteaux du Layon', 'Quarts de Chaume Grand Cru', 'Saumur-Champigny', 'Crémant de Loire'],
    modules: [
      { id: 'LO2M1', title: 'Chenin Blanc 干型與 Savennières', lessonIds: ['lo-l2-1', 'lo-l2-2'] },
      { id: 'LO2M2', title: '甜酒金字塔與起泡酒', lessonIds: ['lo-l2-3', 'lo-l2-4'] },
      { id: 'LO2M3', title: '索米爾紅酒與 Level 2 評量', lessonIds: ['lo-l2-5', 'lo-l2-6'] }
    ],
    lessons: [
      {
        id: 'lo-l2-1',
        title: '安茹產區概論 — Chenin Blanc 的故鄉',
        description: '認識安茹-索米爾的地理全貌：23 個 AOC、片岩與石灰岩的土壤過渡，以及 Chenin Blanc 在此展現的多元風格（干型、半甜、甜酒、氣泡）',
        duration: 16,
        locked: true
      },
      {
        id: 'lo-l2-2',
        title: 'Savennières — 片岩上的極致 Chenin Blanc',
        description: '深探安茹最偉大的干型白酒：Savennières 片岩土壤的礦物張力、Coulée de Serrant 單一園 Monopole 的傳奇、Roche aux Moines 的風土精髓',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l2-3',
        title: '安茹甜酒金字塔 — 從 Coteaux du Layon 到 Grand Cru',
        description: '完整解析羅亞爾甜酒分級：Coteaux du Layon 基礎甜酒、Chaume Premier Cru、Bonnezeaux、Quarts de Chaume Grand Cru 的差異，以及貴腐菌（Botrytis）對 Chenin Blanc 的影響',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l2-4',
        title: 'Crémant de Loire — 羅亞爾氣泡酒的藝術',
        description: '認識以傳統方法釀製的 Crémant de Loire：Chenin Blanc、Cabernet Franc、Chardonnay 的多品種混釀，與香檳的異同，以及在安茹-索米爾的重要性',
        duration: 16,
        locked: true
      },
      {
        id: 'lo-l2-5',
        title: 'Saumur-Champigny — 凝灰岩上的 Cabernet Franc',
        description: '探索索米爾的白堊凝灰岩（tuffeau）地下洞窟，以及 Saumur-Champigny 如何將 Cabernet Franc 演繹成絲般輕盈、帶有紅果香的精緻紅酒',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l2-6',
        title: 'Level 2 品飲與綜合評量',
        description: '整合安茹-索米爾全產區知識，練習辨識 Chenin Blanc 干型/甜型/氣泡，完成 Level 2 進階測驗取得認證',
        duration: 28,
        locked: true
      }
    ]
  },

  // ── Level 3：都漢（La Touraine）──────────────────────────────────────
  level3: {
    title: 'Level 3 — 都漢',
    titleFr: 'La Touraine',
    emoji: '🦁',
    region: 'Touraine',
    mapGroup: 'Touraine',
    description: '法國花園中的葡萄酒帝國——17 個 AOC、Cabernet Franc 王者雙城（Chinon & Bourgueil），以及 Vouvray 的百變 Chenin Blanc',
    color: '#c19a28',
    accentColor: '#fdf6e0',
    keyGrapes: 'Cabernet Franc · Chenin Blanc · Gamay · Côt',
    keyAOC: ['Chinon', 'Bourgueil', 'Vouvray', 'Montlouis-sur-Loire', 'Cour-Cheverny'],
    modules: [
      { id: 'LO3M1', title: 'Cabernet Franc 紅酒三傑', lessonIds: ['lo-l3-1', 'lo-l3-2'] },
      { id: 'LO3M2', title: 'Chenin Blanc 白酒雙城', lessonIds: ['lo-l3-3', 'lo-l3-4'] },
      { id: 'LO3M3', title: '特色 AOC 與 Level 3 評量', lessonIds: ['lo-l3-5', 'lo-l3-6'] }
    ],
    lessons: [
      {
        id: 'lo-l3-1',
        title: '都漢概論 — 法國花園的葡萄酒版圖',
        description: '俯瞰都漢的葡萄酒全景：Loire 河中游的地理位置、半大陸性氣候、凝灰岩與礫石土壤，以及 17 個 AOC 的空間分布',
        duration: 15,
        locked: true
      },
      {
        id: 'lo-l3-2',
        title: 'Chinon、Bourgueil 與 Saint-Nicolas-de-Bourgueil',
        description: '深入解析 Cabernet Franc 三大產區的風土差異：Chinon 的凝灰石與礫石坡地、Bourgueil 的砂礫台地、Saint-Nicolas-de-Bourgueil 的砂質輕盈風格，以及年份對這三者的不同影響',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l3-3',
        title: 'Vouvray — 從氣泡到甜酒的 Chenin Blanc 百變風格',
        description: '認識 Vouvray 複雜的風格光譜：brut 到 moelleux 的甜度分級、地下凝灰岩酒窖對陳年的影響，以及 Huet、Foreau 等頂級生產者的哲學',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l3-4',
        title: 'Montlouis-sur-Loire 與都漢基礎 AOC',
        description: 'Montlouis 與 Vouvray 的異同比較、都漢大 AOC 的白酒/紅酒/氣泡酒規定，以及 Touraine-Amboise、Touraine-Noble-Joué 等村莊級 AOC',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l3-5',
        title: 'Cour-Cheverny、Valençay 與都漢特色產區',
        description: '探索都漢最獨特的 AOC：全球唯一 Romorantin 單品種 AOC（Cour-Cheverny）、Valençay 的多元混釀，以及 Orléans、Orléans-Cléry 等北部 AOC',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l3-6',
        title: 'Level 3 品飲與綜合評量',
        description: '整合都漢產區知識，練習盲飲辨別 Cabernet Franc 各地塊風格與 Chenin Blanc 的甜度光譜，完成 Level 3 測驗取得認證',
        duration: 28,
        locked: true
      }
    ]
  },

  // ── Level 4：中央羅亞爾（Centre-Loire）──────────────────────────────
  level4: {
    title: 'Level 4 — 中央羅亞爾',
    titleFr: 'Le Centre-Loire',
    emoji: '🌿',
    region: 'Centre',
    mapGroup: 'Centre',
    description: 'Sauvignon Blanc 的聖地——燧石、石灰岩與白堊黏土三種土壤鑄就 Sancerre 與 Pouilly-Fumé 的全球頂尖白酒',
    color: '#2c6e8a',
    accentColor: '#e0f0f8',
    keyGrapes: 'Sauvignon Blanc · Pinot Noir · Pinot Gris',
    keyAOC: ['Sancerre', 'Pouilly-Fumé', 'Menetou-Salon', 'Quincy', 'Reuilly'],
    modules: [
      { id: 'LO4M1', title: 'Sancerre 與 Pouilly-Fumé', lessonIds: ['lo-l4-1', 'lo-l4-2'] },
      { id: 'LO4M2', title: '衛星產區與 Level 4 評量', lessonIds: ['lo-l4-3', 'lo-l4-4'] }
    ],
    lessons: [
      {
        id: 'lo-l4-1',
        title: 'Sancerre — 燧石、石灰岩與 Kimmeridgian 黏土',
        description: '深探桑塞爾三種土壤的風味差異：燧石（silex）的煙燻礦物感、石灰岩（calcaires à belemnites）的清爽活潑、Kimmeridgian 黏土的飽滿圓潤；以及 Pinot Noir 紅酒的精緻優雅',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l4-2',
        title: 'Pouilly-Fumé vs Sancerre — 同源異流的 Sauvignon Blanc',
        description: '比較隔河相對的兩大產區：Pouilly-Fumé 的 silex 燧石土壤與槍管金屬礦物感、Pouilly-sur-Loire 的 Chasselas 珍稀白酒，以及 Henri Bourgeois、Didier Dagueneau 等頂級酒莊',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l4-3',
        title: 'Menetou-Salon、Quincy 與 Reuilly',
        description: '探索中央羅亞爾衛星產區：Menetou-Salon 的金莫里石灰岩（與 Sancerre 同土壤）、Quincy 的砂礫清爽白酒（法國最古老 AOC 之一）、Reuilly 的 Pinot Gris 獨特粉紅酒',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l4-4',
        title: 'Level 4 品飲與綜合評量',
        description: '練習盲飲辨識桑塞爾三種土壤的 Sauvignon Blanc 風格差異，完成 Level 4 測驗取得認證',
        duration: 25,
        locked: true
      }
    ]
  },

  // ── Level 5：洛瓦爾支流與上普瓦圖（Vallée du Loir & Haut-Poitou）──
  level5: {
    title: 'Level 5 — 支流與周邊小產區',
    titleFr: 'La Vallée du Loir & Le Haut-Poitou',
    emoji: '🌻',
    region: 'ValleeLoirPoitou',
    mapGroup: 'MassifCentral',
    description: '注意：是 Loir（支流），不是 Loire——Pineau d\'Aunis 辛香品種、Jasnières 稀世白酒，以及上普瓦圖的高原風格',
    color: '#7a5c3a',
    accentColor: '#f5f0e8',
    keyGrapes: 'Pineau d\'Aunis · Chenin Blanc · Romorantin · Gamay',
    keyAOC: ['Jasnières', 'Coteaux du Loir', 'Coteaux du Vendômois', 'Haut-Poitou'],
    modules: [
      { id: 'LO5M1', title: 'Loir 支流產區', lessonIds: ['lo-l5-1', 'lo-l5-2'] },
      { id: 'LO5M2', title: '上普瓦圖與大師認證評量', lessonIds: ['lo-l5-3'] }
    ],
    lessons: [
      {
        id: 'lo-l5-1',
        title: 'Jasnières 與 Coteaux du Loir — Loir 河畔的珍稀白酒',
        description: '探索羅亞爾河支流 Loir 河（注意：非 Loire）沿岸的稀世產區：Jasnières 凝灰岩陡坡上的頂級 Chenin Blanc 干白（19世紀曾被評為法國最佳白酒）、Coteaux du Loir 的 Pineau d\'Aunis 紅白酒',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l5-2',
        title: 'Coteaux du Vendômois 與 Pineau d\'Aunis 特色品種',
        description: '認識最具個性的羅亞爾本土紅葡萄 Pineau d\'Aunis：帶有胡椒與野花的辛香特色、旺多姆丘的粉紅酒風格，以及這個稀有品種在羅亞爾支流區的文化意義',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l5-3',
        title: '上普瓦圖與羅亞爾河谷大師認證評量',
        description: '認識上普瓦圖（Haut-Poitou）的高原風格與 Vienne 河影響，完成橫跨五大子產區的羅亞爾河谷大師認證評量，取得最終認證',
        duration: 35,
        locked: true
      }
    ]
  }
}

// 羅亞爾學習操作
export const loireLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = loireLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    loireLearningState.currentLevel = level
    loireLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    // 搜尋所有 level 的 lessons
    for (const levelData of Object.values(loireLearningLevels)) {
      const lesson = levelData.lessons.find(l => l.id === lessonId)
      if (lesson) {
        loireLearningState.currentLesson = lesson
        return
      }
    }
  },

  // 退出課程
  exitLesson() {
    loireLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!loireLearningState.completedLessons.includes(lessonId)) {
      loireLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 lo-l1-3 → level1, lo-l3-1 → level3）
      const match = lessonId.match(/^lo-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : loireLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (loireLearningState.userProgress[levelKey]) {
        loireLearningState.userProgress[levelKey].completed = Math.min(
          loireLearningState.userProgress[levelKey].completed + 1,
          loireLearningState.userProgress[levelKey].total
        )
      }
    }
  },

  // 啟用測試模式
  enableTestMode() {
    loireLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    loireLearningState.testMode = false
    loireLearningState.completedLessons = []
    Object.keys(loireLearningState.userProgress).forEach(key => {
      loireLearningState.userProgress[key].completed = 0
    })
  }
}

// 計算屬性：整體進度
export const loireLearningProgress = computed(() => {
  const total = Object.values(loireLearningState.userProgress).reduce((s, v) => s + v.total, 0)
  const done = Object.values(loireLearningState.userProgress).reduce((s, v) => s + v.completed, 0)
  return total > 0 ? Math.round(done / total * 100) : 0
})
