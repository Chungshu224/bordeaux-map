/**
 * California 課程相關翻譯
 * - selector: CaliforniaLevelSelector 首頁文字
 * - layout:   CaliforniaCourseLayout 課程列表頁文字
 * - levels:   Level 1/2/3 標題與描述
 * - modules:  各 Level 的模組清單
 * - lessons:  每課的 title / description
 */
export default {
  selector: {
    breadcrumbCountry: '新世界・北美',
    tagline: '加州葡萄酒・1976 巴黎評判・154 AVA',
    title: '加州葡萄酒',
    subtitle: 'California Wine · Napa · Sonoma · Cult Wine',
    description: '從 1976 巴黎評判改寫歷史，到 Napa 膜拜酒、Sonoma Pinot、Zinfandel 與自然酒運動——掌握新世界葡萄酒的創新典範。',
    levelTrackTitle: '選擇課程階段',
    levelTrackSubtitle: '3 階段、從入門到 CCSW 永續認證的專業實務。',
    heroStats: {
      ava: 'AVA',
      regions: '地理區域',
      paris: '巴黎評判',
    },
    progress: {
      start: '開始你的加州葡萄酒之旅',
      complete: '🎉 已完成全部課程',
      progressText: '已完成 {done} / {total} 課',
      currentStage: '當前階段：Level {n}',
      continueLevel: '繼續 Level {n}',
      startLevel: '開始 Level {n}',
      restart: '重新學習',
    },
    quickNav: {
      notebookTitle: '品飲筆記',
      notebookDesc: '記錄品飲體驗',
      progressDesc: '{pct}% 完成・{done} 課',
    },
    unlockHint: {
      level2: '完成 Level 1 後解鎖',
      level3: '完成 Level 2 後解鎖',
    },
  },

  layout: {
    chapterOverview: '章節總覽',
    chapterDrawer: '章節導航',
    chapterToggle: '≡ 章節',
    progressTitle: '整體進度',
    levelLockedTooltip: '需完成 Level {n} 綜合評量才能解鎖',
    levelTooltip: 'Level {n}',
    completedLabel: '{done}/{total} 課程完成',
    motivation: '🎯 再完成 {n} 課即可完成此階段！',
    moduleCount: '{done}/{total} 完成',
    minutes: '{n} 分鐘',
    tagDone: '完成',
    tagStart: '開始 ▶',
  },

  levels: {
    1: {
      title: 'Level 1 — 加州入門：陽光與多樣性',
      description: '建立對加州葡萄酒的基礎認知，掌握核心品種、五大地理區域與 AVA 系統，以及基本釀造工藝與餐酒搭配。',
      shortTitle: '加州入門',
      shortSubtitle: '陽光與多樣性',
      shortDesc: '1976 巴黎評判、六大產區群、8 大主要品種、餐酒搭配與 AVA 制度。',
      tags: ['巴黎評判', '六大產區群', '8 大品種', '餐酒搭配', 'AVA'],
    },
    2: {
      title: 'Level 2 — 風土深度遊：霧氣、海洋與山脈',
      description: '深入探討太平洋氣候、多元土壤如何塑造不同 AVA 特色，精細剖析納帕、索諾瑪、聖巴巴拉與帕索等核心產區。',
      shortTitle: '加州進階',
      shortSubtitle: '膜拜酒與年份',
      shortDesc: 'Napa 膜拜酒、1990–2020 年份、Rhône Rangers 與自然酒運動。',
      tags: ['Napa 膜拜酒', '年份品鑑', 'Rhône Rangers', '自然酒'],
    },
    3: {
      title: 'Level 3 — 專業實務：永續、技術與未來',
      description: '具備專業選酒能力與宏觀產業視野：微氣候大師課、永續認證、巴黎審判傳奇到 Cult Wine,以及加州高級料理配餐實務。',
      shortTitle: '專業實務',
      shortSubtitle: '永續與餐配',
      shortDesc: '微氣候大師課、CCSW 永續認證、Cult Wine 與高級料理配餐。',
      tags: ['微氣候', 'CCSW', 'Cult Wine', '高級配餐'],
    },
  },

  modules: {
    CA1M1: '1.1 認識加州葡萄酒：歷史與全球地位',
    CA1M2: '1.2 加州產區地理與氣候',
    CA1M3: '1.3 Napa Valley 深度探索',
    CA1M4: '1.4 Sonoma County 深度探索',
    CA2M1: '2.1 土壤與氣候：海洋的影響',
    CA2M2: '2.2 北海岸：Napa & Sonoma 深度剖析',
    CA2M3: '2.3 中海岸：Santa Barbara & Paso Robles',
    CA2M4: '2.4 釀造工藝與品種融合',
    CA3M1: '3.1 地圖繪製與微氣候大師課',
    CA3M2: '3.2 高階釀造與永續發展',
    CA3M3: '3.3 商業實務與市場策略',
    CA3M4: '3.4 地酒配地菜:加州高級料理實務',
  },

  lessons: {
    'ca-l1-1': {
      title: '認識加州葡萄酒：歷史、地位與巴黎評判',
      description: '從 1769 年傳教士種下第一株葡萄,到 1976 年震驚世界的巴黎評判——加州如何成為全球第四大葡萄酒產地,以及 AVA 制度介紹',
    },
    'ca-l1-2': {
      title: '加州葡萄酒產區地理與氣候',
      description: '太平洋寒流、海岸山脈、晝夜溫差——六大產區群（North Coast、Central Coast、Sierra Foothills、Inland Valleys、Southern CA、Far North CA）的地理特徵與氣候個性',
    },
    'ca-l1-3': {
      title: 'Napa Valley：16 個子 AVA 的 Cabernet 帝國',
      description: '從 Carneros 到 Calistoga 的南北風土差異,16 個子 AVA 的個性解析,以及 Opus One、Screaming Eagle 等傳奇酒莊',
    },
    'ca-l1-4': {
      title: 'Sonoma County：19 個 AVA 的多元王國',
      description: 'Russian River Valley 的 Pinot Noir、Dry Creek Valley 的 Zinfandel、Alexander Valley 的 Cabernet,以及 99% 可持續農業認證的環保故事',
    },
    'ca-l2-1': {
      title: '土壤與氣候：太平洋迷霧的力量',
      description: '太平洋迷霧（The Fog）如何調節氣溫讓 Napa 與 Sonoma 降溫,沖積平原 vs 火山岩土壤對葡萄風味的塑造',
    },
    'ca-l2-2': {
      title: 'Napa Valley 16 個次產區 & Sonoma 多樣性',
      description: '從 Rutherford Dust 到 Stags Leap District,Napa 16 個子 AVA 全解析；Sonoma 19 個 AVA 的品種版圖：Russian River Pinot、Dry Creek Zinfandel',
    },
    'ca-l2-3': {
      title: 'Santa Barbara 橫向山谷 & Paso Robles 石灰岩',
      description: '聖巴巴拉獨特的橫向山谷讓涼爽海風直入,Santa Rita Hills 的 Pinot 傳奇；帕索羅布爾斯石灰岩地質與 Rhône 品種的完美結合',
    },
    'ca-l2-4': {
      title: '橡木桶藝術、氣泡酒工藝與隆河品種',
      description: '法國桶 vs 美國桶的風味差異,加州傳統法氣泡酒（Méthode Champenoise）工藝,以及 Syrah、Grenache、Sangiovese 在加州的詮釋',
    },
    'ca-l3-1': {
      title: '微氣候大師課：山坡、谷地與 AVA 精細分析',
      description: '研究 Hillside vs Valley Floor 的風味落差；互動地圖分析 Howell Mountain、Russian River Valley 等特定 AVA 的風土特徵',
    },
    'ca-l3-2': {
      title: '高階釀造技術與加州永續認證',
      description: '加州可持續葡萄種植聯盟（CCSW）規範詳解；自然酒運動在加州的興起、有機與生物動力法（Biodynamic）實踐案例',
    },
    'ca-l3-3': {
      title: '巴黎審判傳奇、Cult Wine 與年份評估',
      description: '1976 年巴黎審判如何改寫葡萄酒歷史；Screaming Eagle、Harlan Estate 等膜拜酒市場解析；乾旱、山火與氣候變遷對年份品質的影響',
    },
    'ca-l3-4': {
      title: '跨產區加州配餐實務與對比品飲',
      description: '設計一份跨越 Napa、Sonoma、Santa Barbara、Paso Robles 的加州配餐清單（Pairing Menu）,包含不同風格的對比品飲設計',
    },
  },
}
