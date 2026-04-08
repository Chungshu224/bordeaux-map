// C-1: 酒莊集章挑戰定義
// 每個 challenge 定義一組必須「已品飲(tried)」的酒莊來完成

export const COLLECTION_CHALLENGES = [
  {
    id: 'grand-five',
    title: '波爾多五大傳奇',
    description: '品嚐波爾多最頂級的五大酒莊，體驗傳奇風土',
    icon: '👑',
    color: '#8B0000',
    badge: '傳奇鑑賞家',
    points: 500,
    chateaux: [
      { name: 'Château Lafite Rothschild',  aoc: 'Pauillac_AOC' },
      { name: 'Château Latour',              aoc: 'Pauillac_AOC' },
      { name: 'Château Margaux',             aoc: 'Margaux_AOC' },
      { name: 'Château Haut-Brion',          aoc: 'Pessac-Leognan_AOC' },
      { name: 'Château Mouton Rothschild',   aoc: 'Pauillac_AOC' },
    ],
  },
  {
    id: 'left-bank-villages',
    title: '梅多克四大村莊',
    description: '走遍左岸四個頂級村莊，真正讀懂梅多克',
    icon: '🏰',
    color: '#1565C0',
    badge: '左岸行家',
    points: 200,
    matchByAOC: true,
    aocs: ['Margaux_AOC', 'Pauillac_AOC', 'St-Julien_AOC', 'St-Estephe_AOC'],
  },
  {
    id: 'right-bank-icons',
    title: '右岸精品三傑',
    description: '品嚐 Pétrus、Cheval Blanc、Ausone — 右岸三大傳奇',
    icon: '🍇',
    color: '#6A1B9A',
    badge: '右岸精英',
    points: 300,
    chateaux: [
      { name: 'Château Pétrus',       aoc: 'Pomerol_AOC' },
      { name: 'Château Cheval Blanc',  aoc: 'St-Emilion-Grand-Cru_AOC' },
      { name: 'Château Ausone',        aoc: 'St-Emilion-Grand-Cru_AOC' },
    ],
  },
  {
    id: 'sweet-heaven',
    title: '甜酒天堂',
    description: '從 d\'Yquem 到 Climens，體驗波爾多甜酒的精髓',
    icon: '🍯',
    color: '#E65100',
    badge: '甜酒達人',
    points: 150,
    chateaux: [
      { name: "Château d'Yquem",  aoc: 'Sauternes_AOC' },
      { name: 'Château Rieussec', aoc: 'Sauternes_AOC' },
      { name: 'Château Climens',  aoc: 'Barsac_AOC' },
    ],
  },
  {
    id: 'graves-terroir',
    title: 'Pessac-Léognan 風土探索',
    description: '左岸南端的礫石土壤，孕育最優雅的 Cabernet 與白酒',
    icon: '🦅',
    color: '#2E7D32',
    badge: '風土探索者',
    points: 180,
    chateaux: [
      { name: 'Château Haut-Brion',            aoc: 'Pessac-Leognan_AOC' },
      { name: 'Château La Mission Haut-Brion', aoc: 'Pessac-Leognan_AOC' },
      { name: 'Château Smith Haut Lafitte',     aoc: 'Pessac-Leognan_AOC' },
    ],
  },
  {
    id: 'st-julien-gems',
    title: 'St-Julien 特級酒莊巡禮',
    description: '探索波爾多最「均衡」村莊的頂級酒莊群',
    icon: '⚜️',
    color: '#B8860B',
    badge: 'St-Julien 達人',
    points: 220,
    chateaux: [
      { name: 'Château Léoville Las Cases', aoc: 'St-Julien_AOC' },
      { name: 'Château Léoville Barton',    aoc: 'St-Julien_AOC' },
      { name: 'Château Ducru-Beaucaillou',  aoc: 'St-Julien_AOC' },
    ],
  },
]

