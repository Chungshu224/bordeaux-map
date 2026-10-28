/**
 * 美國其他產區品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261030000100_add_usother_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 usotherUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'us_pinot',     emoji: '🍒', short: 'Oregon Pinot Noir',                 color: '#B3202E' },
  { id: 'us_or_white',  emoji: '🥂', short: 'Oregon 白酒（Pinot Gris、Chardonnay 等）', color: '#B8902A' },
  { id: 'us_bordeaux',  emoji: '🍷', short: 'Cabernet／Merlot 與波爾多式混釀（Washington 等）', color: '#6B1030' },
  { id: 'us_syrah',     emoji: '🌶️', short: 'Syrah 與其他紅酒（Walla Walla、Southern Oregon 等）', color: '#6B3FA0' },
  { id: 'us_riesling',  emoji: '🍏', short: 'Riesling（Finger Lakes、Washington）', color: '#C9B23A' },
  { id: 'us_white',     emoji: '🌿', short: '其他白酒（Chardonnay、Viognier 等）', color: '#8DB33A' },
  { id: 'us_east_red',  emoji: '🗽', short: '東岸紅酒（Long Island、Virginia 等）', color: '#2E7DAF' },
  { id: 'us_sparkling', emoji: '🫧', short: '氣泡酒',                              color: '#3b8bd6' },
  { id: 'us_sweet',     emoji: '🍯', short: '甜酒（冰酒、晚摘）',                  color: '#C07F00' },
  { id: 'us_other',     emoji: '🍾', short: '其他（含粉紅酒、雜交種）',            color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 主要 AVA（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Oregon', 'Willamette Valley', 'Dundee Hills', 'Yamhill-Carlton', 'McMinnville', 'Ribbon Ridge', 'Chehalem Mountains',
  'Eola-Amity Hills', 'Van Duzer Corridor', 'Tualatin Hills', 'Laurelwood District', 'Southern Oregon', 'Umpqua Valley', 'Rogue Valley',
  'Applegate Valley', 'Columbia Gorge',
  'Washington', 'Columbia Valley', 'Yakima Valley', 'Red Mountain', 'Walla Walla Valley', 'The Rocks District of Milton-Freewater',
  'Horse Heaven Hills', 'Wahluke Slope', 'Ancient Lakes of Columbia Valley', 'Puget Sound',
  'New York', 'Finger Lakes', 'Seneca Lake', 'Cayuga Lake', 'Long Island', 'North Fork of Long Island', 'The Hamptons, Long Island',
  'Hudson River Region', 'Lake Erie', 'Niagara Escarpment',
  'Snake River Valley', 'Monticello', 'Texas High Plains', 'Texas Hill Country'
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
  us_pinot: RED_COLORS.slice(0, 4),
  us_or_white: WHITE_COLORS.slice(0, 5),
  us_bordeaux: RED_COLORS.slice(1, 6),
  us_syrah: RED_COLORS.slice(1, 6),
  us_riesling: WHITE_COLORS.slice(0, 4),
  us_white: WHITE_COLORS,
  us_east_red: RED_COLORS.slice(0, 5),
  us_sparkling: WHITE_COLORS.slice(0, 4),
  us_sweet: SWEET_COLORS,
  us_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(0, 4)]
}

export const GRAPES_BY_TYPE = {
  us_pinot: ['Pinot Noir'],
  us_or_white: ['Pinot Gris', 'Chardonnay', 'Pinot Blanc', 'Riesling', '白酒混釀'],
  us_bordeaux: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot', 'Malbec', '波爾多式混釀'],
  us_syrah: ['Syrah', 'Tempranillo', 'Grenache', 'Mourvèdre', 'Zinfandel', '南隆河式混釀'],
  us_riesling: ['Riesling'],
  us_white: ['Chardonnay', 'Viognier', 'Sauvignon Blanc', 'Gewürztraminer', 'Madeleine Angevine', '白酒混釀'],
  us_east_red: ['Merlot', 'Cabernet Franc', 'Cabernet Sauvignon', 'Pinot Noir', 'Norton', 'Concord', 'Baco Noir', '波爾多式混釀'],
  us_sparkling: ['Chardonnay', 'Pinot Noir', 'Riesling', 'Pinot Meunier'],
  us_sweet: ['Riesling', 'Vidal Blanc', 'Cabernet Franc', 'Gewürztraminer', 'Pinot Gris'],
  us_other: []
}

export const AROMAS_BY_TYPE = {
  us_pinot: ['紅櫻桃', '覆盆子', '草莓', '紫羅蘭', '玫瑰', '森林地表', '香料', '黑櫻桃', '礦物', '橡木'],
  us_or_white: ['青蘋果', '梨', '白桃', '柑橘', '蜂蜜', '奶油', '杏仁', '礦物', '橡木'],
  us_bordeaux: ['黑醋栗', '黑莓', '雪松', '薄荷', '鉛筆芯', '甘草', '菸草', '皮革', '橡木', '礦物'],
  us_syrah: ['黑莓', '黑胡椒', '橄欖', '甘草', '煙燻', '乾燥香草（Garrigue）', '黑櫻桃', '礦物', '皮革'],
  us_riesling: ['青蘋果', '萊姆', '檸檬', '白桃', '柑橘花', '礦物', '汽油味', '蜂蜜', '杏桃'],
  us_white: ['青蘋果', '檸檬', '黃桃', '杏桃', '白花', '奶油', '烤吐司', '礦物', '橡木'],
  us_east_red: ['紅櫻桃', '黑醋栗', '青椒', '鉛筆芯', '香料', '大地', '皮革', '菸草', '礦物'],
  us_sparkling: ['青蘋果', '檸檬', '白花', '梨', '麵包', '酵母', '烤吐司', '礦物'],
  us_sweet: ['蜂蜜', '杏桃乾', '糖漬柑橘', '桃', '橙花', '焦糖', '洋槐花', '礦物'],
  us_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  us_pinot: ['酸度鮮活', '果味飽滿', '單寧柔和', '均衡優雅', '大地氣息', '悠長尾韻'],
  us_or_white: ['清爽乾型', '酸度鮮明', '酒體豐厚', '橡木柔化', '悠長尾韻'],
  us_bordeaux: ['單寧緊緻', '酸度鮮活', '果味飽滿', '陳年潛力', '橡木柔化', '悠長尾韻'],
  us_syrah: ['辛香料感', '果味飽滿', '單寧柔和', '大地氣息', '均衡優雅', '悠長尾韻'],
  us_riesling: ['酸度鮮明', '礦物鮮明', '清爽乾型', '微甜', '悠長尾韻'],
  us_white: ['清爽乾型', '酒體豐厚', '橡木柔化', '酸度鮮明', '悠長尾韻'],
  us_east_red: ['酸度鮮活', '單寧柔和', '均衡優雅', '大地氣息', '悠長尾韻'],
  us_sparkling: ['細緻氣泡', '微甜', '清爽乾型', '酵母質地', '悠長尾韻'],
  us_sweet: ['甜潤濃郁', '高酸平衡', '果乾豐厚', '油脂圓潤', '悠長尾韻'],
  us_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  us_pinot: STRUCT_RED,
  us_or_white: STRUCT_DRY_WHITE,
  us_bordeaux: STRUCT_RED,
  us_syrah: STRUCT_RED,
  us_riesling: STRUCT_DRY_WHITE,
  us_white: STRUCT_DRY_WHITE,
  us_east_red: STRUCT_RED,
  us_sparkling: STRUCT_DRY_WHITE,
  us_sweet: STRUCT_SWEET,
  us_other: STRUCT_RED
}
