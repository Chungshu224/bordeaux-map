/**
 * 阿根廷品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261031000100_add_chile_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 chileUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'cl_cab_maipo',    emoji: '🍷', short: 'Cabernet Sauvignon（Maipo／Alto Maipo 等）', color: '#5B1740' },
  { id: 'cl_carmenere',    emoji: '🫑', short: 'Carmenère（Peumo／Apalta／Colchagua 等）',   color: '#6A2C5E' },
  { id: 'cl_red',          emoji: '🍇', short: 'Syrah／Merlot／Cabernet Franc 等其他紅酒',    color: '#8B2A1A' },
  { id: 'cl_blend',        emoji: '🥂', short: '波爾多式與多品種紅酒調配',                    color: '#6B1030' },
  { id: 'cl_oldvine',      emoji: '🌳', short: '老藤（País／Cinsault／Carignan，Itata／Maule 等）', color: '#9B3A24' },
  { id: 'cl_pinot',        emoji: '🍒', short: 'Pinot Noir（Casablanca／Leyda／南部等）',     color: '#C2571A' },
  { id: 'cl_sauvblanc',    emoji: '🍋', short: 'Sauvignon Blanc（Casablanca／Leyda 等）',     color: '#B8B02A' },
  { id: 'cl_chard',        emoji: '🥥', short: 'Chardonnay（Limarí／Casablanca 等）',         color: '#C9A23A' },
  { id: 'cl_white',        emoji: '🌼', short: '其他白酒（Moscatel／Riesling 等）',           color: '#B8902A' },
  { id: 'cl_sparkling',    emoji: '🫧', short: '氣泡酒',                                      color: '#3b8bd6' },
  { id: 'cl_rose',         emoji: '🌸', short: '粉紅酒',                                      color: '#D6457A' },
  { id: 'cl_other',        emoji: '🍾', short: '其他（皮斯可、甜酒等）',                      color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 主要產區與地點（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Elqui', 'Limarí', 'Choapa',
  'Aconcagua Valley', 'Casablanca Valley', 'San Antonio', 'Leyda',
  'Maipo Valley', 'Alto Maipo', 'Pirque', 'Buin', 'Puente Alto',
  'Cachapoal Valley', 'Peumo', 'Colchagua Valley', 'Apalta', 'Marchigüe', 'Lolol',
  'Curicó Valley', 'Maule Valley', 'Itata', 'Bío-Bío', 'Malleco'
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
  cl_cab_maipo: RED_COLORS.slice(1, 6),
  cl_carmenere: RED_COLORS.slice(1, 6),
  cl_red: RED_COLORS.slice(0, 6),
  cl_blend: RED_COLORS.slice(1, 6),
  cl_oldvine: RED_COLORS.slice(0, 5),
  cl_pinot: RED_COLORS.slice(0, 4),
  cl_sauvblanc: WHITE_COLORS.slice(0, 4),
  cl_chard: WHITE_COLORS.slice(1, 5),
  cl_white: WHITE_COLORS,
  cl_sparkling: WHITE_COLORS.slice(0, 4),
  cl_rose: ROSE_COLORS,
  cl_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  cl_cab_maipo: ['Cabernet Sauvignon'],
  cl_carmenere: ['Carmenère'],
  cl_red: ['Syrah', 'Merlot', 'Cabernet Franc', 'Petit Verdot', 'Malbec'],
  cl_blend: ['Cabernet Sauvignon', 'Carmenère', 'Merlot', 'Cabernet Franc', 'Syrah', 'Petit Verdot', '紅酒混調'],
  cl_oldvine: ['País', 'Cinsault', 'Carignan', '老藤混合'],
  cl_pinot: ['Pinot Noir'],
  cl_sauvblanc: ['Sauvignon Blanc'],
  cl_chard: ['Chardonnay'],
  cl_white: ['Moscatel de Alejandría', 'Riesling', 'Viognier', 'Sémillon', 'Gewürztraminer', '白酒混釀'],
  cl_sparkling: ['Chardonnay', 'Pinot Noir', 'País', 'Moscatel de Alejandría'],
  cl_rose: ['Syrah', 'Pinot Noir', 'País', 'Cinsault', 'Cabernet Sauvignon'],
  cl_other: []
}

export const AROMAS_BY_TYPE = {
  cl_cab_maipo: ['黑醋栗', '黑莓', '黑櫻桃', '雪松', '薄荷', '甘草', '菸草', '礦物', '橡木'],
  cl_carmenere: ['黑莓', '李子', '墨西哥辣椒', '青椒', '黑胡椒', '烘烤甜椒', '香草', '可可', '橡木'],
  cl_red: ['黑莓', '黑櫻桃', '黑胡椒', '紫羅蘭', '李子', '甘草', '煙燻', '橡木'],
  cl_blend: ['黑醋栗', '黑莓', '雪松', '薄荷', '甘草', '菸草', '皮革', '香料', '橡木'],
  cl_oldvine: ['紅櫻桃', '覆盆子', '蔓越莓', '乾燥香草', '胡椒', '礦物', '大地', '香料'],
  cl_pinot: ['紅櫻桃', '覆盆子', '草莓', '紫羅蘭', '森林地表', '香料', '礦物'],
  cl_sauvblanc: ['葡萄柚', '青蘋果', '檸檬', '百香果', '草本', '青草', '礦物', '鹹味'],
  cl_chard: ['青蘋果', '檸檬', '黃桃', '奶油', '烤吐司', '礦物', '鹹味', '橡木'],
  cl_white: ['麝香', '荔枝', '桃子', '柑橘皮', '花香', '蜂蜜', '礦物'],
  cl_sparkling: ['青蘋果', '檸檬', '白花', '梨', '麵包', '酵母', '烤吐司', '礦物'],
  cl_rose: ['草莓', '覆盆子', '西瓜', '紅櫻桃', '柑橘皮', '花香'],
  cl_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  cl_cab_maipo: ['果味飽滿', '單寧緊緻', '結構分明', '橡木柔化', '陳年潛力', '悠長尾韻'],
  cl_carmenere: ['果味飽滿', '單寧柔滑', '青椒辛香', '橡木柔化', '均衡優雅', '悠長尾韻'],
  cl_red: ['果味飽滿', '單寧緊緻', '辛香料感', '橡木柔化', '易飲', '悠長尾韻'],
  cl_blend: ['單寧緊緻', '酸度鮮活', '陳年潛力', '橡木柔化', '均衡優雅', '悠長尾韻'],
  cl_oldvine: ['酸度鮮活', '輕盈', '單寧細緻', '紅色水果', '礦物鮮明', '易飲'],
  cl_pinot: ['酸度鮮活', '果味飽滿', '單寧柔和', '易飲', '均衡優雅'],
  cl_sauvblanc: ['酸度鮮明', '清爽乾型', '鹹味礦物', '香氣濃郁', '悠長尾韻'],
  cl_chard: ['清爽乾型', '酒體豐厚', '橡木柔化', '酸度鮮明', '悠長尾韻'],
  cl_white: ['香氣濃郁', '清爽乾型', '酸度鮮明', '微苦尾韻', '悠長尾韻'],
  cl_sparkling: ['細緻氣泡', '微甜', '清爽乾型', '酵母質地', '悠長尾韻'],
  cl_rose: ['清爽', '果味飽滿', '易飲', '酸度鮮活'],
  cl_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  cl_cab_maipo: STRUCT_RED,
  cl_carmenere: STRUCT_RED,
  cl_red: STRUCT_RED,
  cl_blend: STRUCT_RED,
  cl_oldvine: STRUCT_RED,
  cl_pinot: STRUCT_RED,
  cl_sauvblanc: STRUCT_DRY_WHITE,
  cl_chard: STRUCT_DRY_WHITE,
  cl_white: STRUCT_DRY_WHITE,
  cl_sparkling: STRUCT_DRY_WHITE,
  cl_rose: STRUCT_DRY_WHITE,
  cl_other: STRUCT_RED
}
