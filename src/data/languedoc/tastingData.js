/**
 * 朗格多克—魯西永品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261102000100_add_languedoc_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 languedocUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'lg_west_red',   emoji: '🍷', short: '西部紅酒（Corbières／Fitou／Minervois 等）',       color: '#8B2A1A' },
  { id: 'lg_carignan',   emoji: '🌳', short: 'Carignan 為主的老藤紅酒（Boutenac／Fitou 等）',     color: '#9B3A24' },
  { id: 'lg_syrah',      emoji: '🫐', short: 'Syrah 主導的涼區紅酒（Pic Saint-Loup／Larzac 等）', color: '#5B1740' },
  { id: 'lg_schist',     emoji: '⛰️', short: '片岩紅酒（Faugères／Saint-Chinian 等）',            color: '#6A2C5E' },
  { id: 'lg_roussillon', emoji: '🌊', short: 'Roussillon 紅酒（Côtes du Roussillon／Collioure 等）', color: '#6B1030' },
  { id: 'lg_white',      emoji: '🍋', short: '白酒（Picpoul de Pinet／La Clape／Roussillon 白等）', color: '#C9A23A' },
  { id: 'lg_rose',       emoji: '🌸', short: '粉紅酒',                                           color: '#D6457A' },
  { id: 'lg_sparkling',  emoji: '🫧', short: 'Limoux 氣泡酒（Blanquette／Crémant／Ancestrale）', color: '#3b8bd6' },
  { id: 'lg_muscat',     emoji: '🍯', short: 'Muscat 甜酒（Frontignan／Rivesaltes 等）',          color: '#B8902A' },
  { id: 'lg_vdn_red',    emoji: '🍇', short: '紅色 VDN（Banyuls／Maury 等）',                     color: '#4A1230' },
  { id: 'lg_rancio',     emoji: '🥃', short: '氧化型 VDN（Rivesaltes Ambré／Tuilé／Hors d\'âge）', color: '#C04000' },
  { id: 'lg_other',      emoji: '🍾', short: '其他',                                             color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 主要產區與地點（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Languedoc', 'Pays d\'Oc IGP', 'Corbières', 'Corbières-Boutenac', 'Fitou', 'Minervois', 'Minervois-La Livinière', 'Cabardès',
  'Limoux', 'Blanquette de Limoux', 'Crémant de Limoux', 'Saint-Chinian', 'Faugères', 'Pézenas',
  'Terrasses du Larzac', 'Pic Saint-Loup', 'La Clape', 'Picpoul de Pinet', 'Muscat de Frontignan',
  'Côtes du Roussillon', 'Côtes du Roussillon-Villages', 'Collioure', 'Côtes Catalanes IGP',
  'Banyuls', 'Banyuls Grand Cru', 'Maury', 'Rivesaltes', 'Muscat de Rivesaltes'
]

const WHITE_COLORS = [
  { id: 'pale-green', label: '淡青綠', color: '#D4EAC8' },
  { id: 'pale-lemon', label: '淡檸檬', color: '#F5EFB2' },
  { id: 'lemon',      label: '檸檬黃', color: '#E8D86A' },
  { id: 'gold',       label: '金黃',   color: '#E8C84A' },
  { id: 'deep-gold',  label: '深金',   color: '#FFB700' },
  { id: 'amber',      label: '琥珀',   color: '#C8860D' }
]
const RED_COLORS = [
  { id: 'pale-ruby', label: '淡寶石紅', color: '#C0485A' },
  { id: 'ruby',      label: '寶石紅',   color: '#9B1221' },
  { id: 'garnet',    label: '石榴紅',   color: '#A5174E' },
  { id: 'deep-red',  label: '深紅',     color: '#8B0020' },
  { id: 'purple',    label: '深紫紅',   color: '#5B1740' },
  { id: 'brick',     label: '磚紅',     color: '#CB4154' },
  { id: 'tawny',     label: '茶褐',     color: '#A0522D' }
]
const ROSE_COLORS = [
  { id: 'pale-pink', label: '淡粉',   color: '#FAC4CC' },
  { id: 'salmon',    label: '鮭魚粉', color: '#FA8072' },
  { id: 'coral',     label: '珊瑚粉', color: '#F06080' },
  { id: 'deep-pink', label: '深粉紅', color: '#D6457A' }
]
const SWEET_COLORS = [...WHITE_COLORS.slice(3), { id: 'bronze', label: '古銅', color: '#CD7F32' }, { id: 'mahogany', label: '桃花心木', color: '#C04000' }]

export const COLORS_BY_TYPE = {
  lg_west_red: RED_COLORS.slice(1, 6),
  lg_carignan: RED_COLORS.slice(0, 5),
  lg_syrah: RED_COLORS.slice(1, 6),
  lg_schist: RED_COLORS.slice(1, 6),
  lg_roussillon: RED_COLORS.slice(1, 6),
  lg_white: WHITE_COLORS,
  lg_rose: ROSE_COLORS,
  lg_sparkling: WHITE_COLORS.slice(0, 4),
  lg_muscat: SWEET_COLORS,
  lg_vdn_red: [...RED_COLORS.slice(1, 7)],
  lg_rancio: [...SWEET_COLORS.slice(2), RED_COLORS[6]],
  lg_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  lg_west_red: ['Carignan', 'Grenache', 'Syrah', 'Mourvèdre', 'Cinsault', '紅酒混調'],
  lg_carignan: ['Carignan', 'Grenache', 'Syrah', '老藤混合'],
  lg_syrah: ['Syrah', 'Grenache', 'Mourvèdre'],
  lg_schist: ['Syrah', 'Grenache', 'Mourvèdre', 'Carignan', 'Cinsault'],
  lg_roussillon: ['Grenache', 'Syrah', 'Mourvèdre', 'Carignan', 'Cinsault'],
  lg_white: ['Piquepoul Blanc', 'Bourboulenc', 'Grenache Blanc', 'Roussanne', 'Marsanne', 'Vermentino', 'Clairette', '白酒混釀'],
  lg_rose: ['Syrah', 'Grenache', 'Cinsault', 'Mourvèdre'],
  lg_sparkling: ['Mauzac', 'Chardonnay', 'Chenin Blanc', 'Pinot Noir'],
  lg_muscat: ['Muscat'],
  lg_vdn_red: ['Grenache'],
  lg_rancio: ['Grenache', 'Macabeu', 'Grenache Blanc', 'Muscat'],
  lg_other: []
}

export const AROMAS_BY_TYPE = {
  lg_west_red: ['黑莓', '黑櫻桃', '黑胡椒', '野地灌木', '乾燥香草', '甘草', '皮革', '礦物'],
  lg_carignan: ['紅櫻桃', '黑莓', '乾燥香草', '胡椒', '大地', '礦物', '香料', '皮革'],
  lg_syrah: ['黑莓', '黑櫻桃', '黑胡椒', '紫羅蘭', '野地灌木', '甘草', '煙燻'],
  lg_schist: ['黑莓', '黑櫻桃', '野地灌木', '黑胡椒', '礦物', '甘草', '煙燻', '香料'],
  lg_roussillon: ['黑莓', '李子', '乾燥香草', '黑胡椒', '甘草', '香料', '礦物', '橡木'],
  lg_white: ['青蘋果', '檸檬', '黃桃', '白花', '茴香', '礦物', '鹹味', '蜂蜜'],
  lg_rose: ['草莓', '覆盆子', '西瓜', '紅櫻桃', '柑橘皮', '花香'],
  lg_sparkling: ['青蘋果', '檸檬', '白花', '梨', '麵包', '酵母', '烤吐司', '礦物'],
  lg_muscat: ['麝香', '荔枝', '橙花', '柑橘皮', '蜂蜜', '杏桃', '花香'],
  lg_vdn_red: ['黑櫻桃', '黑莓', '李子', '可可', '咖啡', '香料', '無花果乾', '核桃'],
  lg_rancio: ['核桃', '焦糖', '咖啡', '無花果乾', '蜂蜜', '橙皮', '菸草', '香料'],
  lg_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  lg_west_red: ['果味飽滿', '單寧緊緻', '辛香料感', '酸度鮮活', '悠長尾韻'],
  lg_carignan: ['酸度鮮活', '單寧細緻', '紅色水果', '礦物鮮明', '悠長尾韻'],
  lg_syrah: ['酸度鮮活', '果味飽滿', '辛香料感', '均衡優雅', '悠長尾韻'],
  lg_schist: ['果味飽滿', '礦物鮮明', '單寧緊緻', '辛香料感', '悠長尾韻'],
  lg_roussillon: ['果味飽滿', '酒體豐厚', '單寧柔滑', '辛香料感', '悠長尾韻'],
  lg_white: ['酸度鮮明', '清爽乾型', '鹹味礦物', '酒體豐厚', '悠長尾韻'],
  lg_rose: ['清爽', '果味飽滿', '易飲', '酸度鮮活'],
  lg_sparkling: ['細緻氣泡', '清爽乾型', '酵母質地', '微甜', '悠長尾韻'],
  lg_muscat: ['香氣濃郁', '甜而不膩', '酸度平衡', '悠長尾韻'],
  lg_vdn_red: ['甜度圓潤', '單寧細緻', '濃郁', '酒精感明顯', '悠長尾韻'],
  lg_rancio: ['氧化風味', '堅果質地', '濃郁', '複雜', '悠長尾韻'],
  lg_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
}

const hints5 = {
  low: ['很低', '低', '中等', '高', '很高'],
  body: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'],
  finish: ['短促', '尚可', '中等', '悠長', '極長'],
  sweet: ['微甜', '中甜', '甜', '很甜', '極甜']
}
const STRUCT_DRY_WHITE = [
  { key: 'tannin',  label: '苦感／酚類', hints: ['無', '極微', '微苦', '明顯', '強烈'] },
  { key: 'acidity', label: '酸度',       hints: hints5.low },
  { key: 'body',    label: '酒體',       hints: hints5.body },
  { key: 'finish',  label: '尾韻',       hints: hints5.finish }
]
const STRUCT_RED = [
  { key: 'tannin',  label: '單寧', hints: hints5.low },
  { key: 'acidity', label: '酸度', hints: hints5.low },
  { key: 'body',    label: '酒體', hints: hints5.body },
  { key: 'finish',  label: '尾韻', hints: hints5.finish }
]
const STRUCT_SWEET = [
  { key: 'tannin',  label: '甜度',   hints: hints5.sweet },
  { key: 'acidity', label: '酸度',   hints: hints5.low },
  { key: 'body',    label: '濃郁度', hints: hints5.body },
  { key: 'finish',  label: '尾韻',   hints: hints5.finish }
]

export const STRUCTURE_BY_TYPE = {
  lg_west_red: STRUCT_RED,
  lg_carignan: STRUCT_RED,
  lg_syrah: STRUCT_RED,
  lg_schist: STRUCT_RED,
  lg_roussillon: STRUCT_RED,
  lg_white: STRUCT_DRY_WHITE,
  lg_rose: STRUCT_DRY_WHITE,
  lg_sparkling: STRUCT_DRY_WHITE,
  lg_muscat: STRUCT_SWEET,
  lg_vdn_red: STRUCT_SWEET,
  lg_rancio: STRUCT_SWEET,
  lg_other: STRUCT_RED
}
