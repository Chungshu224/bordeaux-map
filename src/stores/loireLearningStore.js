// 羅亞爾河谷葡萄酒學習系統狀態管理
import { reactive, computed } from 'vue'

// 羅亞爾學習進度狀態
export const loireLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 7 },
    level2: { completed: 0, total: 9 },
    level3: { completed: 0, total: 12 },
    level4: { completed: 0, total: 7 }
  },
  achievements: []
})

// 羅亞爾學習等級配置——4 大主題關卡
export const loireLearningLevels = {

  // ── Level 1：南特入門——清新之風（PayNantes 7 AOCs）───────────────────
  level1: {
    title: 'Level 1 — 入門清新',
    titleFr: 'Le Vignoble Nantais',
    emoji: '🌊',
    region: 'Nantais',
    mapGroup: 'PayNantes',
    description: '大西洋門戶，碘香海風與礦物張力——Muscadet 王國、sur lie 技術與海鮮佐餐藝術',
    color: '#1a6b8a',
    accentColor: '#e0f5f0',
    keyGrapes: 'Melon de Bourgogne · Folle Blanche',
    keyAOC: ['Muscadet', 'Muscadet-Sèvre-et-Maine', 'Muscadet-Côtes-de-Grandlieu', 'Gros Plant du Pays Nantais'],
    modules: [
      { id: 'LO1M1', title: '羅亞爾河谷總覽與南特地理', lessonIds: ['lo-l1-1', 'lo-l1-2'] },
      { id: 'LO1M2', title: 'Muscadet 深度探索', lessonIds: ['lo-l1-3', 'lo-l1-4'] },
      { id: 'LO1M3', title: '品飲實習與 Level 1 評量', lessonIds: ['lo-l1-5', 'lo-l1-6', 'lo-l1-7'] }
    ],
    lessons: [
      {
        id: 'lo-l1-1',
        title: '羅亞爾河谷總覽與南特區地理',
        description: '法國最長葡萄酒產區800公里的全貌，UNESCO遺產，以及南特區作為大西洋門戶的獨特定位',
        duration: 15
      },
      {
        id: 'lo-l1-2',
        title: 'Muscadet 家族全解——四大 AOC 比較',
        description: '系統比較 Muscadet、Muscadet-Sèvre-et-Maine、Muscadet-Côtes-de-Grandlieu、Muscadet-Coteaux-de-la-Loire 四大 AOC 的土壤、分布與風格差異',
        duration: 18
      },
      {
        id: 'lo-l1-3',
        title: 'Sur Lie 陳釀工藝與礦石風味',
        description: '深入理解 sur lie 帶酒泥陳釀技術：酵母自溶對酒體、氣泡感與礦物張力的影響，以及 Clisson、Gorges、Le Pallet 地塊分級',
        duration: 20
      },
      {
        id: 'lo-l1-4',
        title: '南特其他產區——大植、昂塞尼、旺代',
        description: 'Gros-Plant-du-Pays-Nantais（Folle Blanche）的銳利酸度、Coteaux-d\'Ancenis（Malvoisie）、Fiefs-Vendéens 的多元風格',
        duration: 18
      },
      {
        id: 'lo-l1-5',
        title: '片岩土壤與海洋性氣候感官訓練',
        description: '在南特區的片岩與辉绿岩土壤背景下，訓練辨識 Muscadet 特有的碘鹹、青蘋果、酵母麵包等香氣特徵',
        duration: 20
      },
      {
        id: 'lo-l1-6',
        title: 'Muscadet × 生蠔貝類——高酸度餐搭',
        description: '探索 Muscadet sur lie 與生蠔、貽貝、海鮮的經典搭配原理，以及為何高酸度白酒是海鮮餐搭的黃金組合',
        duration: 18
      },
      {
        id: 'lo-l1-7',
        title: 'Level 1 綜合評量',
        description: '整合南特產區全部知識，完成 Level 1 測驗取得認證，涵蓋 7 個 AOC（PayNantes 全區）',
        duration: 25
      }
    ]
  },

  // ── Level 2：石灰岩城堡——紅酒與粉紅進階（19 AOCs）────────────────
  level2: {
    title: 'Level 2 — 石灰岩城堡',
    titleFr: 'Tuffeau & Cabernet Franc',
    emoji: '🏰',
    region: 'AnjouSaumur + Touraine（紅）',
    mapGroup: 'AnjouSaumur',
    description: 'Tuffeau 凝灰岩氣候過渡帶——品麗珠的多元表現，從安茹粉紅到希農，都漢紅酒全景',
    color: '#8b5e3c',
    accentColor: '#fdecd8',
    keyGrapes: 'Cabernet Franc · Cabernet Sauvignon · Gamay · Côt',
    keyAOC: ['Saumur-Champigny', 'Chinon', 'Bourgueil', 'Anjou-Villages', 'Anjou-Brissac'],
    modules: [
      { id: 'LO2M1', title: '安茹索米爾紅酒群', lessonIds: ['lo-l2-1', 'lo-l2-2', 'lo-l2-3'] },
      { id: 'LO2M2', title: '都漢 Cabernet Franc 王國', lessonIds: ['lo-l2-4', 'lo-l2-5', 'lo-l2-6'] },
      { id: 'LO2M3', title: '品飲實習與 Level 2 評量', lessonIds: ['lo-l2-7', 'lo-l2-8', 'lo-l2-9'] }
    ],
    lessons: [
      {
        id: 'lo-l2-1',
        title: 'Tuffeau 地質與氣候過渡帶',
        description: '安茹-索米爾的凝灰岩地質奇觀：洞窟酒窖、半大陸性氣候過渡，以及片岩與石灰岩土壤轉換的葡萄酒風味影響',
        duration: 15,
        locked: true
      },
      {
        id: 'lo-l2-2',
        title: '安茹紅酒三兄弟與索米爾',
        description: '深探 Anjou（紅）、Anjou-Villages、Anjou-Brissac、Saumur（紅）、Saumur-Champigny 五個 AOC：品麗珠在凝灰岩上的輕盈表現',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l2-3',
        title: '安茹粉紅光譜與上普瓦圖',
        description: 'Cabernet-d\'Anjou、Rosé-d\'Anjou、Rosé-de-Loire 的甜度與風格差異，以及 Haut-Poitou 高原白酒概覽',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l2-4',
        title: '希農——品麗珠的靈魂故鄉',
        description: 'Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil 三大 AOC 的土壤比較：礫石台地的輕盈、凝灰石坡地的結構感',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l2-5',
        title: '都漢紅酒產區全景',
        description: 'Touraine（紅/粉紅）、Touraine-Amboise（紅）、Touraine-Noble-Joué 的地理位置、混釀規定與風格特色',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l2-6',
        title: '都漢支流紅酒',
        description: 'Coteaux-du-Loir（紅）、Coteaux-du-Vendômois（紅/粉紅）、Orléans（紅）、Orléans-Cléry 的 Pineau d\'Aunis 辛香特色',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l2-7',
        title: '鋼桶 vs 木桶品麗珠品飲訓練',
        description: '以 Chinon 和 Bourgueil 為例，學習辨識不鏽鋼桶與橡木桶陳釀對品麗珠香氣結構的影響，以及最佳侍酒溫度',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l2-8',
        title: 'Chinon × Rillettes 餐酒配對',
        description: '經典都漢鄉村料理 Rillettes 與 Chinon 的搭配原理；Level 2 知識地圖總複習',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l2-9',
        title: 'Level 2 綜合評量',
        description: '整合 Level 2 全部知識，完成測驗取得認證，涵蓋 19 個紅/粉紅 AOC',
        duration: 20,
        locked: true
      }
    ]
  },

  // ── Level 3：白詩南燧石——精湛工藝（32 AOCs）──────────────────────
  level3: {
    title: 'Level 3 — 白詩南燧石',
    titleFr: 'Chenin Blanc & Silex',
    emoji: '🍯',
    region: 'AnjouSaumur（白）+ Touraine（白）+ Centre',
    mapGroup: 'Centre',
    description: '白詩南從干型到極甜的工藝全光譜，加上燧石土壤的桑塞爾與普依的 Sauvignon Blanc 雙雄',
    color: '#c19a28',
    accentColor: '#fdf6e0',
    keyGrapes: 'Chenin Blanc · Sauvignon Blanc · Romorantin',
    keyAOC: ['Savennières', 'Quarts-de-Chaume', 'Vouvray', 'Sancerre', 'Pouilly-Fumé'],
    modules: [
      { id: 'LO3M1', title: '安茹白詩南工藝', lessonIds: ['lo-l3-1', 'lo-l3-2', 'lo-l3-3', 'lo-l3-4', 'lo-l3-5'] },
      { id: 'LO3M2', title: '都漢白酒全景', lessonIds: ['lo-l3-6', 'lo-l3-7', 'lo-l3-8'] },
      { id: 'LO3M3', title: '中央產區燧石雙雄', lessonIds: ['lo-l3-9', 'lo-l3-10', 'lo-l3-11', 'lo-l3-12'] }
    ],
    lessons: [
      {
        id: 'lo-l3-1',
        title: '白詩南工藝入門——安茹干白與索米爾白酒',
        description: 'Anjou（白）、Anjou-Coteaux-de-la-Loire、Saumur（白）、Coteaux-de-Saumur：白詩南在片岩與凝灰岩上的干型表現',
        duration: 16,
        locked: true
      },
      {
        id: 'lo-l3-2',
        title: '薩弗尼耶爾三部曲',
        description: 'Savennières、Savennières-Roche-aux-Moines、Coulée-de-Serrant（Monopole）：片岩陡坡上的礦物干白極致，以及 Nicolas Joly 的自然動力農法哲學',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l3-3',
        title: '萊揚河貴腐甜酒金字塔',
        description: 'Coteaux-du-Layon、Coteaux-du-Layon-premier-cru-Chaume、Coteaux-de-l\'Aubance：貴腐菌（Botrytis）與逐粒採收的甜酒工藝',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l3-4',
        title: '頂級甜酒——邵姆與波澤奧',
        description: 'Quarts-de-Chaume（Grand Cru）、Bonnezeaux：羅亞爾最頂級甜白的風土條件、陳年潛力，以及與波爾多貴腐酒的比較',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l3-5',
        title: '羅亞爾克雷芒與索米爾氣泡',
        description: 'Crémant-de-Loire、Saumur（氣泡）：傳統方法氣泡酒的釀造工藝、白詩南為基礎的複雜度，以及與香檳的比較',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l3-6',
        title: '伏弗雷——干到貴腐全光譜',
        description: 'Vouvray、Montlouis-sur-Loire：同一品種在凝灰岩地下酒窖熟成的 sec/demi-sec/moelleux/liquoreux 全光譜，以及 Huet、Foreau 等名家',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l3-7',
        title: '都漢白酒四角',
        description: 'Cheverny、Cour-Cheverny（全球唯一 Romorantin 單品種 AOC）、Valençay、Touraine-Amboise（白）、Touraine-Azay-le-Rideau：多元品種與風格',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l3-8',
        title: 'Loir 河白酒',
        description: 'Jasnières、Coteaux-du-Loir（白）、Coteaux-du-Vendômois（白）、Orléans（白）、Touraine（白）：羅亞爾支流的稀世白酒',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l3-9',
        title: '中央產區雙雄——桑塞爾 & 普依',
        description: 'Sancerre、Pouilly-Fumé、Pouilly-sur-Loire：燧石、石灰岩、Kimmeridgian 三種土壤的風味差異，以及 Sauvignon Blanc 的全球標竿地位',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l3-10',
        title: '中央產區隱藏版精品',
        description: 'Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant、Saint-Pourçain：六個性價比極高的衛星 AOC',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l3-11',
        title: 'Vouvray 甜白 × 起司；Sancerre × 山羊起司',
        description: '白詩南甜白酒與洗皮起司的搭配原理、Sancerre 與新鮮山羊起司的本地配對傳統；Muscadet × 生蠔的大西洋交響',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l3-12',
        title: 'Level 3 綜合評量',
        description: '整合 Level 3 全部知識，完成測驗取得認證，涵蓋 32 個白酒/氣泡 AOC',
        duration: 20,
        locked: true
      }
    ]
  },

  // ── Level 4：專業實務——視覺化與策略實戰（MassifCentral 5 AOCs + 跨產區）
  level4: {
    title: 'Level 4 — 專業實務',
    titleFr: 'Expertise & Stratégie',
    emoji: '🔬',
    region: 'MassifCentral + 跨產區',
    mapGroup: 'MassifCentral',
    description: '奧弗涅火山土壤精品，結合互動地圖實戰、氣候變遷分析、垂直品飲與高端餐飲設計',
    color: '#2c3e50',
    accentColor: '#e8edf2',
    keyGrapes: 'Gamay · Pinot Noir · Chardonnay',
    keyAOC: ['Côtes-d\'Auvergne', 'Côtes-d\'Auvergne-Corent', 'Côtes-d\'Auvergne-Chateaugay'],
    modules: [
      { id: 'LO4M1', title: 'MassifCentral 火山精品', lessonIds: ['lo-l4-1'] },
      { id: 'LO4M2', title: '進階技術與策略', lessonIds: ['lo-l4-2', 'lo-l4-3', 'lo-l4-4', 'lo-l4-5'] },
      { id: 'LO4M3', title: '專業實務與大師評量', lessonIds: ['lo-l4-6', 'lo-l4-7'] }
    ],
    lessons: [
      {
        id: 'lo-l4-1',
        title: '奧弗涅丘——火山土壤精品',
        description: 'Côtes-d\'Auvergne、Côtes-d\'Auvergne-Boudes、Côtes-d\'Auvergne-Chateaugay、Côtes-d\'Auvergne-Corent、Côtes-d\'Auvergne-Madargues：火山岩上的 Gamay 與 Pinot Noir',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l4-2',
        title: '互動地圖實戰——GeoJSON 視覺化',
        description: '運用互動地圖工具，系統整合 58 個 AOC 的地理分布、土壤類型與氣候梯度，建立空間認知記憶框架',
        duration: 25,
        locked: true
      },
      {
        id: 'lo-l4-3',
        title: '氣候變遷——採收期與酒精濃度分析',
        description: '分析羅亞爾近 30 年採收期提前趨勢、酒精濃度上升數據，以及生產者的應對策略（更高海拔、晚採品種、橡木桶使用）',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l4-4',
        title: '垂直品飲——陳年潛力判讀',
        description: 'Savennières、Chinon、Vouvray 三款酒的垂直品飲實戰：學習解讀不同年份下酒款的演化軌跡與陳年潛力評估',
        duration: 25,
        locked: true
      },
      {
        id: 'lo-l4-5',
        title: '盲飲診斷——土質差異',
        description: '訓練盲飲辨識 Sancerre 三種土壤（燧石/石灰岩/Kimmeridgian）、Chinon 礫石 vs 凝灰石的差異，建立系統性土壤感官記憶',
        duration: 25,
        locked: true
      },
      {
        id: 'lo-l4-6',
        title: '高端餐飲設計 + 亞洲料理配對',
        description: '設計羅亞爾河谷主題餐酒配對菜單；探索台灣、日本、廣東料理 × 羅亞爾葡萄酒的創意配對',
        duration: 28,
        locked: true
      },
      {
        id: 'lo-l4-7',
        title: 'Level 4 大師評量',
        description: '跨越 L1–L4 全部 58 AOC 的大師認證評量（7 道綜合題），通過後獲得 Loire Wine Master 認證',
        duration: 30,
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
