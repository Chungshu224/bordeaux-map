// Loire Valley Course — English
export default {
  selector: {
    breadcrumb: 'France · Loire Valley',
    tagline: 'Loire Valley · Garden of France · Five Sub-Regions',
    title: 'Loire Valley Wines',
    subtitle: 'Loire Valley · Sancerre · Vouvray · Muscadet · Chinon',
    description: 'From the iodine-tinged Muscadet of Nantes, through Anjou\'s Chenin Blanc and Touraine\'s sparkling wines, to the twin stars of Sancerre and Pouilly-Fumé in the Central Vineyards—master France\'s most diverse wine valley.',
    stats: {
      subregions: 'Sub-regions',
      aoc: 'AOC Appellations',
      varieties: 'Key Varieties'
    },
    levelTrackTitle: 'Choose Your Stage',
    levelTrackSubtitle: '4 stages journeying west to east through the Loire Valley sub-regions.',
    unlockHint: 'Unlocked after completing Level {prev}',
    progress: {
      start: 'Begin Your Loire Valley Journey',
      complete: '🎉 All Loire Valley AOCs Explored!',
      inProgress: '{done} / {total} lessons completed',
      currentStage: 'Current stage: {title}',
      continue: 'Continue Level {n}',
      begin: 'Start Level {n}',
      restart: 'Start Over'
    }
  },
  layout: {
    lockHint: 'Complete Level {prev} final exam to unlock',
    chapterToggle: '≡ Chapters',
    sidebarTitle: 'Chapter Overview',
    drawerTitle: 'Chapter Navigation',
    lessonsComplete: '{done}/{total} lessons complete',
    motivation: '🎯 {remaining} more lessons to complete this stage!',
    tagDone: 'Done',
    tagStart: 'Start ▶',
    minutes: 'min'
  },
  levels: {
    1: {
      title: 'Level 1 — Atlantic Gateway',
      region: 'Nantais',
      description: 'Atlantic gateway—iodine sea breeze and mineral tension. The kingdom of Muscadet, sur lie technique, and the art of seafood pairing.'
    },
    2: {
      title: 'Level 2 — Limestone Châteaux',
      region: 'AnjouSaumur + Touraine (Red)',
      description: 'Tuffeau limestone and a transitional climate—exploring Cabernet Franc\'s diverse expressions, from Anjou rosé to Chinon and the panorama of Touraine reds.'
    },
    3: {
      title: 'Level 3 — Chenin & Flint',
      region: 'AnjouSaumur (White) + Touraine (White) + Centre',
      description: 'The full craft spectrum of Chenin Blanc from bone-dry to lusciously sweet, plus the Sauvignon Blanc twin stars of Sancerre and Pouilly-Fumé on their distinctive flint soils.'
    },
    4: {
      title: 'Level 4 — Professional Mastery',
      region: 'MassifCentral + Cross-Region',
      description: 'Volcanic terroir gems of Auvergne, combined with interactive map practice, climate change analysis, vertical tasting, and high-end food pairing design.'
    }
  },
  modules: {
    LO1M1: 'Loire Valley Overview & Nantais Geography',
    LO1M2: 'In-Depth Muscadet',
    LO1M3: 'Tasting Practice & Level 1 Exam',
    LO2M1: 'Anjou-Saumur Reds',
    LO2M2: 'Touraine Cabernet Franc Kingdom',
    LO2M3: 'Tasting Practice & Level 2 Exam',
    LO3M1: 'Anjou Chenin Blanc Craftsmanship',
    LO3M2: 'Touraine Whites Panorama',
    LO3M3: 'Central Vineyards Flint Duo',
    LO4M1: 'MassifCentral Volcanic Gems',
    LO4M2: 'Advanced Techniques & Strategy',
    LO4M3: 'Professional Practice & Master Exam'
  },
  lessons: {
    'lo-l1-1': { title: 'Loire Valley Overview', duration: 15 },
    'lo-l1-2': { title: 'Loire Valley Geography & Climate', duration: 18 },
    'lo-l1-3': { title: 'Pays Nantais: Sub-Region Overview', duration: 20 },
    'lo-l1-4': { title: 'The Muscadet Family—Four AOC Comparison', duration: 18 },
    'lo-l1-5': { title: 'Schist Soils & Maritime Climate Sensory Training', duration: 20 },
    'lo-l1-6': { title: 'Muscadet × Oysters—High-Acid Food Pairing', duration: 18 },
    'lo-l1-7': { title: 'Level 1 Final Exam', duration: 25 },
    'lo-l2-1': { title: 'Tuffeau Geology & Transitional Climate', duration: 15 },
    'lo-l2-2': { title: 'Anjou Red Trio & Saumur', duration: 20 },
    'lo-l2-3': { title: 'Anjou Rosé Spectrum & Haut-Poitou', duration: 18 },
    'lo-l2-4': { title: 'Chinon—The Soul of Cabernet Franc', duration: 22 },
    'lo-l2-5': { title: 'Touraine Reds Panorama', duration: 18 },
    'lo-l2-6': { title: 'Touraine Tributary Reds', duration: 18 },
    'lo-l2-7': { title: 'Steel vs. Oak Cabernet Franc Tasting', duration: 20 },
    'lo-l2-8': { title: 'Chinon × Rillettes Food Pairing', duration: 22 },
    'lo-l2-9': { title: 'Level 2 Final Exam', duration: 20 },
    'lo-l3-1': { title: 'Chenin Blanc Introduction—Anjou Dry Whites & Saumur', duration: 16 },
    'lo-l3-2': { title: 'Savennières Trilogy', duration: 20 },
    'lo-l3-3': { title: 'Layon Sweet Wine Pyramid', duration: 22 },
    'lo-l3-4': { title: 'Grand Cru Sweet Wines—Quarts de Chaume & Bonnezeaux', duration: 22 },
    'lo-l3-5': { title: 'Crémant de Loire & Saumur Sparkling', duration: 18 },
    'lo-l3-6': { title: 'Vouvray—Dry to Botrytis Full Spectrum', duration: 20 },
    'lo-l3-7': { title: 'Touraine White Four Corners', duration: 18 },
    'lo-l3-8': { title: 'Loir River Whites', duration: 18 },
    'lo-l3-9': { title: 'Central Vineyards Duo—Sancerre & Pouilly-Fumé', duration: 22 },
    'lo-l3-10': { title: 'Central Vineyards Hidden Gems', duration: 20 },
    'lo-l3-11': { title: 'Vouvray Sweet White × Cheese; Sancerre × Goat Cheese', duration: 22 },
    'lo-l3-12': { title: 'Level 3 Final Exam', duration: 20 },
    'lo-l4-1': { title: 'Côtes d\'Auvergne—Volcanic Terroir Gems', duration: 20 },
    'lo-l4-2': { title: 'Interactive Map Practice—GeoJSON Visualization', duration: 25 },
    'lo-l4-3': { title: 'Climate Change—Harvest Timing & Alcohol Analysis', duration: 22 },
    'lo-l4-4': { title: 'Vertical Tasting—Reading Aging Potential', duration: 25 },
    'lo-l4-5': { title: 'Blind Tasting Diagnosis—Soil Differences', duration: 25 },
    'lo-l4-6': { title: 'Fine Dining Design + Asian Pairing', duration: 28 },
    'lo-l4-7': { title: 'Level 4 Master Exam', duration: 30 }
  }
}
