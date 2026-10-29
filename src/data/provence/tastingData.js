/**
 * 普羅旺斯與科西嘉品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261105000100_add_provence_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 provenceUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'pv_rose',          emoji: '🌸', short: '普羅旺斯玫瑰紅（Côtes de Provence、Coteaux d\'Aix、Coteaux Varois 等）', color: '#E58BA3' },
  { id: 'pv_white',         emoji: '🍋', short: '普羅旺斯白酒（Cassis、Côtes de Provence 白、Bellet 等）',               color: '#C9A23A' },
  { id: 'pv_red',           emoji: '🍷', short: '普羅旺斯紅酒（Bandol、Palette、Les Baux 等）',                           color: '#7A1F2E' },
  { id: 'pv_corsica_red',   emoji: '🏝️', short: '科西嘉紅酒與玫瑰紅（Nielluccio、Sciaccarellu）',                         color: '#8B2A1A' },
  { id: 'pv_corsica_white', emoji: '🌿', short: '科西嘉白酒（Vermentino）',                                                color: '#B9B04A' },
  { id: 'pv_muscat',        emoji: '🍯', short: 'Muscat du Cap Corse（天然甜酒）',                                          color: '#B8902A' },
  { id: 'pv_other',         emoji: '🍾', short: '其他',                                                                    color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 主要產區與地點（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Côtes de Provence', 'Côtes de Provence Sainte-Victoire', 'Côtes de Provence Fréjus', 'Côtes de Provence La Londe',
  'Côtes de Provence Pierrefeu', 'Côtes de Provence Notre-Dame des Anges',
  'Coteaux d\'Aix-en-Provence', 'Les Baux-de-Provence', 'Coteaux Varois en Provence',
  'Bandol', 'Cassis', 'Palette', 'Bellet', 'Pierrevert', 'IGP Méditerranée',
  'Patrimonio', 'Coteaux du Cap Corse', 'Muscat du Cap Corse', 'Ajaccio', 'Vin de Corse', 'Vin de Corse Calvi',
  'Vin de Corse Sartène', 'Vin de Corse Figari', 'Vin de Corse Porto-Vecchio', 'IGP Île de Beauté'
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

const ROSE_PALE = [ROSE_COLORS[0], ROSE_COLORS[1], ROSE_COLORS[2]]
const MUSCAT_COLORS = [WHITE_COLORS[3], WHITE_COLORS[4], WHITE_COLORS[5]]

export const COLORS_BY_TYPE = {
  pv_rose: ROSE_COLORS,
  pv_white: WHITE_COLORS.slice(0, 5),
  pv_red: RED_COLORS.slice(1, 6),
  pv_corsica_red: [...ROSE_PALE, ...RED_COLORS.slice(0, 5)],
  pv_corsica_white: WHITE_COLORS.slice(0, 4),
  pv_muscat: MUSCAT_COLORS,
  pv_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  pv_rose: ['Grenache', 'Cinsault', 'Syrah', 'Mourvèdre', 'Tibouren', 'Carignan', 'Rolle（Vermentino）', '玫瑰紅混調'],
  pv_white: ['Rolle（Vermentino）', 'Clairette', 'Ugni Blanc', 'Sémillon', 'Bourboulenc', '白酒混釀'],
  pv_red: ['Mourvèdre', 'Grenache', 'Syrah', 'Cinsault', 'Carignan', 'Cabernet Sauvignon', '紅酒混調'],
  pv_corsica_red: ['Nielluccio', 'Sciaccarellu', 'Grenache', 'Syrah', 'Vermentino', '紅酒混調'],
  pv_corsica_white: ['Vermentino'],
  pv_muscat: ['Muscat à petits grains blancs'],
  pv_other: []
}

export const AROMAS_BY_TYPE = {
  pv_rose: ['紅色漿果', '草莓', '白桃', '柑橘皮', '西瓜', '花香', '香草植物', '礦物'],
  pv_white: ['檸檬', '白花', '青蘋果', '梨', '香草植物', '礦物', '茴香', '蜂蜜'],
  pv_red: ['黑莓', '黑櫻桃', '黑胡椒', '甘草', '皮革', '香料', '普羅旺斯香草', '菸草'],
  pv_corsica_red: ['紅櫻桃', '黑莓', '胡椒', '香料', '香草植物', '皮革', '礦物', '花香'],
  pv_corsica_white: ['柑橘', '白花', '香草植物', '青蘋果', '礦物', '梨', '杏仁'],
  pv_muscat: ['蜂蜜', '橙皮', '杏桃乾', '白花', '荔枝', '堅果'],
  pv_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  pv_rose: ['清爽乾型', '酸度鮮活', '果味飽滿', '礦物鮮明', '易飲', '悠長尾韻'],
  pv_white: ['酸度鮮明', '清爽乾型', '礦物鮮明', '酒體豐厚', '悠長尾韻'],
  pv_red: ['單寧緊緻', '酒體豐厚', '辛香料感', '耐久存', '悠長尾韻'],
  pv_corsica_red: ['果味飽滿', '單寧細緻', '辛香料感', '均衡優雅', '悠長尾韻'],
  pv_corsica_white: ['酸度鮮明', '清爽乾型', '礦物鮮明', '悠長尾韻'],
  pv_muscat: ['香氣濃郁', '甜而不膩', '酸度平衡', '悠長尾韻'],
  pv_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  pv_rose: STRUCT_DRY_WHITE,
  pv_white: STRUCT_DRY_WHITE,
  pv_red: STRUCT_RED,
  pv_corsica_red: STRUCT_RED,
  pv_corsica_white: STRUCT_DRY_WHITE,
  pv_muscat: STRUCT_SWEET,
  pv_other: STRUCT_RED
}
