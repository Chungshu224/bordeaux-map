/**
 * 阿根廷品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261031000100_add_argentina_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 argentinaUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'ar_malbec_mid',   emoji: '🍇', short: 'Malbec（Luján de Cuyo／Maipú 等中海拔）', color: '#5B1740' },
  { id: 'ar_malbec_high',  emoji: '🏔️', short: 'Malbec（Uco Valley 與高海拔）',          color: '#6A2C5E' },
  { id: 'ar_malbec_north', emoji: '🌵', short: 'Malbec（Cafayate／北部高地）',            color: '#7A1F3D' },
  { id: 'ar_red',          emoji: '🍷', short: 'Bonarda／Cabernet／Syrah 等其他紅酒',     color: '#8B2A1A' },
  { id: 'ar_blend',        emoji: '🥂', short: 'Malbec 混調與波爾多式紅酒',               color: '#6B1030' },
  { id: 'ar_pinot',        emoji: '🍒', short: 'Pinot Noir（Patagonia 等）',              color: '#C2571A' },
  { id: 'ar_torrontes',    emoji: '🌹', short: 'Torrontés',                              color: '#C9B23A' },
  { id: 'ar_white',        emoji: '🍋', short: '其他白酒（Chardonnay 等）',               color: '#B8902A' },
  { id: 'ar_sparkling',    emoji: '🫧', short: '氣泡酒',                                  color: '#3b8bd6' },
  { id: 'ar_rose',         emoji: '🌸', short: '粉紅酒',                                  color: '#D6457A' },
  { id: 'ar_other',        emoji: '🍾', short: '其他',                                    color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 省、主要產區與地點（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Mendoza', 'Luján de Cuyo', 'Maipú', 'Agrelo', 'Las Compuertas', 'Vistalba',
  'Uco Valley', 'Tupungato', 'Gualtallary', 'Tunuyán', 'San Carlos', 'Paraje Altamira', 'Los Chacayes', 'San Pablo', 'Vista Flores',
  'San Rafael', 'San Juan', 'Tulum', 'Pedernal', 'Calingasta',
  'Salta', 'Cafayate', 'Calchaquí Valley', 'Cachi', 'Molinos', 'Tucumán', 'Catamarca', 'La Rioja', 'Jujuy',
  'Patagonia', 'Río Negro', 'Neuquén', 'Chubut'
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
  ar_malbec_mid: RED_COLORS.slice(1, 6),
  ar_malbec_high: RED_COLORS.slice(1, 6),
  ar_malbec_north: RED_COLORS.slice(1, 6),
  ar_red: RED_COLORS.slice(0, 6),
  ar_blend: RED_COLORS.slice(1, 6),
  ar_pinot: RED_COLORS.slice(0, 4),
  ar_torrontes: WHITE_COLORS.slice(0, 4),
  ar_white: WHITE_COLORS,
  ar_sparkling: WHITE_COLORS.slice(0, 4),
  ar_rose: ROSE_COLORS,
  ar_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  ar_malbec_mid: ['Malbec'],
  ar_malbec_high: ['Malbec'],
  ar_malbec_north: ['Malbec'],
  ar_red: ['Bonarda', 'Cabernet Sauvignon', 'Cabernet Franc', 'Syrah', 'Tempranillo', 'Merlot'],
  ar_blend: ['Malbec', 'Cabernet Sauvignon', 'Cabernet Franc', 'Merlot', 'Petit Verdot', '紅酒混調'],
  ar_pinot: ['Pinot Noir'],
  ar_torrontes: ['Torrontés Riojano', 'Torrontés Sanjuanino', 'Torrontés Mendocino'],
  ar_white: ['Chardonnay', 'Pedro Giménez', 'Sauvignon Blanc', 'Semillon', 'Viognier', '白酒混釀'],
  ar_sparkling: ['Chardonnay', 'Pinot Noir', 'Malbec', 'Torrontés'],
  ar_rose: ['Malbec', 'Pinot Noir', 'Syrah', 'Bonarda'],
  ar_other: []
}

export const AROMAS_BY_TYPE = {
  ar_malbec_mid: ['黑莓', '李子', '黑櫻桃', '紫羅蘭', '可可', '咖啡', '皮革', '香料', '橡木'],
  ar_malbec_high: ['紫羅蘭', '藍莓', '黑莓', '紅色水果', '粉質礦物', '薄荷', '香料', '橡木', '礦物'],
  ar_malbec_north: ['黑莓', '黑櫻桃', '紫羅蘭', '乾燥香草', '胡椒', '礦物', '香料', '橡木'],
  ar_red: ['黑莓', '黑櫻桃', '黑醋栗', '李子', '黑胡椒', '甘草', '雪松', '煙燻', '橡木'],
  ar_blend: ['黑醋栗', '黑莓', '紫羅蘭', '雪松', '薄荷', '甘草', '菸草', '皮革', '橡木'],
  ar_pinot: ['紅櫻桃', '覆盆子', '草莓', '紫羅蘭', '森林地表', '香料', '礦物'],
  ar_torrontes: ['玫瑰', '天竺葵', '桃子', '荔枝', '柑橘皮', '橙花', '麝香'],
  ar_white: ['青蘋果', '檸檬', '黃桃', '奶油', '烤吐司', '杏仁', '蜂蜜', '礦物', '橡木'],
  ar_sparkling: ['青蘋果', '檸檬', '白花', '梨', '麵包', '酵母', '烤吐司', '礦物'],
  ar_rose: ['草莓', '覆盆子', '西瓜', '紅櫻桃', '柑橘皮', '花香'],
  ar_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  ar_malbec_mid: ['果味飽滿', '單寧柔滑', '酒體飽滿', '橡木柔化', '均衡優雅', '悠長尾韻'],
  ar_malbec_high: ['酸度鮮活', '粉質單寧', '礦物鮮明', '清新', '陳年潛力', '悠長尾韻'],
  ar_malbec_north: ['果味飽滿', '單寧緊緻', '辛香料感', '日夜溫差感', '悠長尾韻'],
  ar_red: ['果味飽滿', '單寧緊緻', '辛香料感', '橡木柔化', '易飲', '悠長尾韻'],
  ar_blend: ['單寧緊緻', '酸度鮮活', '陳年潛力', '橡木柔化', '均衡優雅', '悠長尾韻'],
  ar_pinot: ['酸度鮮活', '果味飽滿', '單寧柔和', '易飲', '均衡優雅'],
  ar_torrontes: ['香氣濃郁', '清爽乾型', '酸度鮮明', '微苦尾韻', '悠長尾韻'],
  ar_white: ['清爽乾型', '酒體豐厚', '橡木柔化', '酸度鮮明', '悠長尾韻'],
  ar_sparkling: ['細緻氣泡', '微甜', '清爽乾型', '酵母質地', '悠長尾韻'],
  ar_rose: ['清爽', '果味飽滿', '易飲', '酸度鮮活'],
  ar_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  ar_malbec_mid: STRUCT_RED,
  ar_malbec_high: STRUCT_RED,
  ar_malbec_north: STRUCT_RED,
  ar_red: STRUCT_RED,
  ar_blend: STRUCT_RED,
  ar_pinot: STRUCT_RED,
  ar_torrontes: STRUCT_DRY_WHITE,
  ar_white: STRUCT_DRY_WHITE,
  ar_sparkling: STRUCT_DRY_WHITE,
  ar_rose: STRUCT_DRY_WHITE,
  ar_other: STRUCT_RED
}
