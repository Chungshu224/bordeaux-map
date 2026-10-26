/**
 * 南非品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261029000100_add_southafrica_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 southafricaUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'za_chenin',     emoji: '🍏', short: 'Chenin Blanc',         color: '#C9B23A' },
  { id: 'za_sauvignon',  emoji: '🌿', short: 'Sauvignon Blanc',      color: '#8DB33A' },
  { id: 'za_white',      emoji: '🥂', short: '其他白酒（Chardonnay 等）', color: '#B8902A' },
  { id: 'za_pinotage',   emoji: '🇿🇦', short: 'Pinotage／Cape Blend', color: '#7A1F3D' },
  { id: 'za_bordeaux',   emoji: '🍷', short: 'Cabernet／Merlot 與波爾多式混釀', color: '#6B1030' },
  { id: 'za_rhone',      emoji: '🌶️', short: 'Syrah／南隆河式紅酒',  color: '#8B2A1A' },
  { id: 'za_pinot',      emoji: '🍒', short: 'Pinot Noir 與輕盈紅酒', color: '#C2571A' },
  { id: 'za_sparkling',  emoji: '🫧', short: 'Cap Classique',        color: '#3b8bd6' },
  { id: 'za_sweet',      emoji: '🍯', short: '甜酒（Natural Sweet／NLH／風乾）', color: '#C07F00' },
  { id: 'za_fortified',  emoji: '🥃', short: '加烈酒（Muscadel／Jerepigo／Cape Port）', color: '#8A4B14' },
  { id: 'za_other',      emoji: '🍾', short: '其他（含粉紅酒）',     color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// Region、主要 District／Ward（課程提及者）與 Cap Classique，供產地欄位自動完成
export const APPELLATIONS = [
  'Western Cape', 'Coastal Region', 'Cape South Coast', 'Breede River Valley', 'Klein Karoo', 'Olifants River',
  'Stellenbosch', 'Paarl', 'Franschhoek Valley', 'Swartland', 'Tulbagh', 'Wellington', 'Darling',
  'Cape Town', 'Constantia', 'Durbanville',
  'Walker Bay', 'Hemel-en-Aarde Valley', 'Upper Hemel-en-Aarde Valley', 'Hemel-en-Aarde Ridge', 'Elgin', 'Elim', 'Cape Agulhas',
  'Robertson', 'Worcester', 'Breedekloof', 'Calitzdorp', 'Citrusdal Mountain', 'Cederberg', 'Cap Classique'
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
  za_chenin: WHITE_COLORS.slice(0, 5),
  za_sauvignon: WHITE_COLORS.slice(0, 4),
  za_white: WHITE_COLORS,
  za_pinotage: RED_COLORS.slice(1, 6),
  za_bordeaux: RED_COLORS.slice(1, 6),
  za_rhone: RED_COLORS.slice(1, 6),
  za_pinot: RED_COLORS.slice(0, 4),
  za_sparkling: WHITE_COLORS.slice(0, 4),
  za_sweet: SWEET_COLORS,
  za_fortified: [...RED_COLORS.slice(3), ...SWEET_COLORS],
  za_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  za_chenin: ['Chenin Blanc（Steen）'],
  za_sauvignon: ['Sauvignon Blanc'],
  za_white: ['Chardonnay', 'Semillon', 'Colombard', 'Viognier', 'Grenache Blanc', '白酒混釀'],
  za_pinotage: ['Pinotage', 'Cinsault', 'Cabernet Sauvignon', 'Merlot', 'Syrah', 'Cape Blend'],
  za_bordeaux: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot', 'Malbec', '波爾多式混釀'],
  za_rhone: ['Syrah', 'Grenache', 'Mourvèdre', 'Cinsault', 'Carignan', '南隆河式混釀'],
  za_pinot: ['Pinot Noir', 'Cinsault', 'Gamay'],
  za_sparkling: ['Chardonnay', 'Pinot Noir', 'Pinot Meunier', 'Chenin Blanc'],
  za_sweet: ['Muscat de Frontignan', 'Chenin Blanc', 'Semillon', 'Sauvignon Blanc', 'Hanepoot'],
  za_fortified: ['Muscat d\'Alexandrie（Hanepoot）', 'Muscat de Frontignan', 'Touriga Nacional', 'Tinta Barocca', 'Souzão'],
  za_other: []
}

export const AROMAS_BY_TYPE = {
  za_chenin: ['青蘋果', '黃蘋果', '洋梨', '蜂蜜', '蠟質', '榅桲', '洋槐花', '礦物', '烤堅果', '橡木'],
  za_sauvignon: ['葡萄柚', '醋栗', '無花果葉', '青椒', '百香果', '燧石', '煙燻', '鹽感', '礦物'],
  za_white: ['青蘋果', '檸檬', '黃桃', '奶油', '烤吐司', '杏仁', '蜂蜜', '礦物', '橡木'],
  za_pinotage: ['黑櫻桃', '黑莓', '李子', '煙燻', '烤肉', '香料', '焦糖', '香蕉糖（發酵香）', '皮革'],
  za_bordeaux: ['黑醋栗', '黑莓', '雪松', '薄荷', '鉛筆芯', '甘草', '菸草', '皮革', '橡木', '礦物'],
  za_rhone: ['黑莓', '黑胡椒', '橄欖', '甘草', '煙燻', '乾燥香草（Garrigue）', '黑櫻桃', '礦物'],
  za_pinot: ['紅櫻桃', '覆盆子', '草莓', '紫羅蘭', '森林地表', '香料', '礦物'],
  za_sparkling: ['青蘋果', '檸檬', '白花', '梨', '麵包', '酵母', '烤吐司', '礦物'],
  za_sweet: ['蜂蜜', '杏桃乾', '葡萄乾', '糖漬柑橘', '橙花', '焦糖', '烤堅果', '洋槐花', '礦物'],
  za_fortified: ['葡萄乾', '無花果乾', '焦糖', '烤堅果', '黑巧克力', '咖啡', '橙皮', '香料', '玫瑰'],
  za_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  za_chenin: ['酸度鮮明', '礦物鮮明', '酒體豐厚', '橡木柔化', '清爽乾型', '悠長尾韻'],
  za_sauvignon: ['酸度鮮明', '礦物鮮明', '清爽乾型', '鹽感', '悠長尾韻'],
  za_white: ['清爽乾型', '酒體豐厚', '橡木柔化', '酸度鮮明', '悠長尾韻'],
  za_pinotage: ['果味飽滿', '煙燻感', '單寧緊緻', '辛香料感', '均衡優雅', '悠長尾韻'],
  za_bordeaux: ['單寧緊緻', '酸度鮮活', '陳年潛力', '橡木柔化', '均衡優雅', '悠長尾韻'],
  za_rhone: ['辛香料感', '果味飽滿', '單寧柔和', '大地氣息', '均衡優雅', '悠長尾韻'],
  za_pinot: ['酸度鮮活', '果味飽滿', '單寧柔和', '易飲', '均衡優雅'],
  za_sparkling: ['細緻氣泡', '微甜', '清爽乾型', '酵母質地', '悠長尾韻'],
  za_sweet: ['甜潤濃郁', '高酸平衡', '果乾豐厚', '油脂圓潤', '悠長尾韻'],
  za_fortified: ['甜潤濃郁', '酒精感明顯', '果乾豐厚', '油脂圓潤', '悠長尾韻'],
  za_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  za_chenin: STRUCT_DRY_WHITE,
  za_sauvignon: STRUCT_DRY_WHITE,
  za_white: STRUCT_DRY_WHITE,
  za_pinotage: STRUCT_RED,
  za_bordeaux: STRUCT_RED,
  za_rhone: STRUCT_RED,
  za_pinot: STRUCT_RED,
  za_sparkling: STRUCT_DRY_WHITE,
  za_sweet: STRUCT_SWEET,
  za_fortified: STRUCT_SWEET,
  za_other: STRUCT_RED
}
