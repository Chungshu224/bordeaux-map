// 羅亞爾河谷課程 — 繁體中文
export default {
  selector: {
    breadcrumb: '法國・羅亞爾河',
    tagline: '羅亞爾河谷・法國花園・五大子產區',
    title: '羅亞爾河谷葡萄酒',
    subtitle: 'Loire Valley · Sancerre · Vouvray · Muscadet · Chinon',
    description: '從南特碘香 Muscadet、安茹白詩南、都漢氣泡，到中央產區的桑塞爾雙雄——掌握法國最多元的葡萄酒河谷。',
    stats: {
      subregions: '子產區',
      aoc: 'AOC 法定產區',
      varieties: '主要品種'
    },
    levelTrackTitle: '選擇課程階段',
    levelTrackSubtitle: '4 階段、由西向東遊歷羅亞爾河谷各子產區。',
    unlockHint: '完成 Level {prev} 後解鎖',
    progress: {
      start: '開始你的羅亞爾河谷之旅',
      complete: '🎉 已遊歷羅亞爾河谷全部 AOC',
      inProgress: '已完成 {done} / {total} 課',
      currentStage: '當前階段：{title}',
      continue: '繼續 Level {n}',
      begin: '開始 Level {n}',
      restart: '重新學習'
    }
  },
  layout: {
    lockHint: '需完成 Level {prev} 綜合評量才能解鎖',
    chapterToggle: '≡ 章節',
    sidebarTitle: '章節總覽',
    drawerTitle: '章節導航',
    lessonsComplete: '{done}/{total} 課程完成',
    motivation: '🎯 再完成 {remaining} 課即可完成此階段！',
    tagDone: '完成',
    tagStart: '開始 ▶',
    minutes: '分鐘'
  },
  levels: {
    1: {
      title: 'Level 1 — 入門清新',
      region: 'Nantais',
      description: '大西洋門戶，碘香海風與礦物張力——Muscadet 王國、sur lie 技術與海鮮佐餐藝術'
    },
    2: {
      title: 'Level 2 — 石灰岩城堡',
      region: 'AnjouSaumur + Touraine（紅）',
      description: 'Tuffeau 凝灰岩氣候過渡帶——品麗珠的多元表現，從安茹粉紅到希農，都漢紅酒全景'
    },
    3: {
      title: 'Level 3 — 白詩南燧石',
      region: 'AnjouSaumur（白）+ Touraine（白）+ Centre',
      description: '白詩南從干型到極甜的工藝全光譜，加上燧石土壤的桑塞爾與普依的 Sauvignon Blanc 雙雄'
    },
    4: {
      title: 'Level 4 — 專業實務',
      region: 'MassifCentral + 跨產區',
      description: '奧弗涅火山土壤精品，結合互動地圖實戰、氣候變遷分析、垂直品飲與高端餐飲設計'
    }
  },
  modules: {
    LO1M1: '羅亞爾河谷總覽與南特地理',
    LO1M2: 'Muscadet 深度探索',
    LO1M3: '品飲實習與 Level 1 評量',
    LO2M1: '安茹索米爾紅酒群',
    LO2M2: '都漢 Cabernet Franc 王國',
    LO2M3: '品飲實習與 Level 2 評量',
    LO3M1: '安茹白詩南工藝',
    LO3M2: '都漢白酒全景',
    LO3M3: '中央產區燧石雙雄',
    LO4M1: 'MassifCentral 火山精品',
    LO4M2: '進階技術與策略',
    LO4M3: '專業實務與大師評量'
  },
  lessons: {
    'lo-l1-1': { title: '羅亞爾河谷總覽', duration: 15 },
    'lo-l1-2': { title: '羅亞爾河谷地理環境與氣候', duration: 18 },
    'lo-l1-3': { title: 'Pays Nantais 產區概論', duration: 20 },
    'lo-l1-4': { title: 'Muscadet 家族全解——四大 AOC 比較', duration: 18 },
    'lo-l1-5': { title: '片岩土壤與海洋性氣候感官訓練', duration: 20 },
    'lo-l1-6': { title: 'Muscadet × 生蠔貝類——高酸度餐搭', duration: 18 },
    'lo-l1-7': { title: 'Level 1 綜合評量', duration: 25 },
    'lo-l2-1': { title: 'Tuffeau 地質與氣候過渡帶', duration: 15 },
    'lo-l2-2': { title: '安茹紅酒三兄弟與索米爾', duration: 20 },
    'lo-l2-3': { title: '安茹粉紅光譜與上普瓦圖', duration: 18 },
    'lo-l2-4': { title: '希農——品麗珠的靈魂故鄉', duration: 22 },
    'lo-l2-5': { title: '都漢紅酒產區全景', duration: 18 },
    'lo-l2-6': { title: '都漢支流紅酒', duration: 18 },
    'lo-l2-7': { title: '鋼桶 vs 木桶品麗珠品飲訓練', duration: 20 },
    'lo-l2-8': { title: 'Chinon × Rillettes 餐酒配對', duration: 22 },
    'lo-l2-9': { title: 'Level 2 綜合評量', duration: 20 },
    'lo-l3-1': { title: '白詩南工藝入門——安茹干白與索米爾白酒', duration: 16 },
    'lo-l3-2': { title: '薩弗尼耶爾三部曲', duration: 20 },
    'lo-l3-3': { title: '萊揚河貴腐甜酒金字塔', duration: 22 },
    'lo-l3-4': { title: '頂級甜酒——邵姆與波澤奧', duration: 22 },
    'lo-l3-5': { title: '羅亞爾克雷芒與索米爾氣泡', duration: 18 },
    'lo-l3-6': { title: '伏弗雷——干到貴腐全光譜', duration: 20 },
    'lo-l3-7': { title: '都漢白酒四角', duration: 18 },
    'lo-l3-8': { title: 'Loir 河白酒', duration: 18 },
    'lo-l3-9': { title: '中央產區雙雄——桑塞爾 & 普依', duration: 22 },
    'lo-l3-10': { title: '中央產區隱藏版精品', duration: 20 },
    'lo-l3-11': { title: 'Vouvray 甜白 × 起司；Sancerre × 山羊起司', duration: 22 },
    'lo-l3-12': { title: 'Level 3 綜合評量', duration: 20 },
    'lo-l4-1': { title: '奧弗涅丘——火山土壤精品', duration: 20 },
    'lo-l4-2': { title: '互動地圖實戰——GeoJSON 視覺化', duration: 25 },
    'lo-l4-3': { title: '氣候變遷——採收期與酒精濃度分析', duration: 22 },
    'lo-l4-4': { title: '垂直品飲——陳年潛力判讀', duration: 25 },
    'lo-l4-5': { title: '盲飲診斷——土質差異', duration: 25 },
    'lo-l4-6': { title: '高端餐飲設計 + 亞洲料理配對', duration: 28 },
    'lo-l4-7': { title: 'Level 4 大師評量', duration: 30 }
  }
}
