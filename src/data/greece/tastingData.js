/**
 * 希臘品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261023000000_add_greece_tasting_types.sql 的 CHECK 清單。
 */

export const WINE_TYPES = [
  { id: 'gr_white',     emoji: '🥂', short: '乾白',       color: '#B8902A' },
  { id: 'gr_red',       emoji: '🍷', short: '紅酒',       color: '#8B1A1A' },
  { id: 'gr_rose',      emoji: '🌸', short: '粉紅',       color: '#D45E8C' },
  { id: 'gr_sparkling', emoji: '🫧', short: '氣泡',       color: '#3b8bd6' },
  { id: 'gr_sweet',     emoji: '🍯', short: '甜酒',       color: '#C07F00' },
  { id: 'gr_fortified', emoji: '🍇', short: '強化酒',     color: '#6A4C93' },
  { id: 'gr_retsina',   emoji: '🌲', short: 'Retsina',    color: '#2E7D32' },
  { id: 'gr_other',     emoji: '🍾', short: '其他',       color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// PDO 名稱（33 個）＋ 常見 PGI，供產區欄位的自動完成
export const APPELLATIONS = [
  'Naoussa', 'Amyndeo', 'Goumenissa', 'Slopes of Meliton',
  'Rapsani', 'Messenikola', 'Anchialos', 'Zitsa',
  'Nemea', 'Mantineia', 'Patras', 'Muscat of Patras', 'Muscat of Rio Patras',
  'Mavrodaphne of Patras', 'Monemvasia-Malvasia',
  'Mavrodaphne of Cephalonia', 'Robola of Cephalonia', 'Muscat of Cephalonia',
  'Samos', 'Paros', 'Malvasia Paros', 'Santorini', 'Rhodes', 'Muscat of Rhodes',
  'Lemnos', 'Muscat of Lemnos',
  'Peza', 'Archanes', 'Dafnes', 'Sitia', 'Malvasia Sitia', 'Candia', 'Malvasia Candia',
  'PGI Crete', 'PGI Attica', 'PGI Macedonia', 'PGI Thrace', 'PGI Peloponnese',
  'PGI Aegean Sea', 'PGI Imathia', 'PGI Halkidiki', 'PGI Epanomi', 'PGI Cyclades'
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
  { id: 'brick',     label: '磚紅',     color: '#CB4154' },
  { id: 'tawny',     label: '茶褐',     color: '#A0522D' }
]
const ROSE_COLORS = [
  { id: 'pale-pink', label: '淡粉',   color: '#FAC4CC' },
  { id: 'salmon',    label: '鮭魚粉', color: '#FA8072' },
  { id: 'coral',     label: '珊瑚粉', color: '#F06080' }
]

export const COLORS_BY_TYPE = {
  gr_white: WHITE_COLORS,
  gr_red: RED_COLORS,
  gr_rose: ROSE_COLORS,
  gr_sparkling: WHITE_COLORS.slice(0, 4),
  gr_sweet: [...WHITE_COLORS.slice(3), { id: 'bronze', label: '古銅', color: '#CD7F32' }, { id: 'mahogany', label: '桃花心木', color: '#C04000' }],
  gr_fortified: [...RED_COLORS.slice(1)],
  gr_retsina: WHITE_COLORS.slice(0, 5),
  gr_other: [...WHITE_COLORS.slice(1, 4), ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  gr_white: ['Assyrtiko', 'Moschofilero', 'Malagousia', 'Roditis', 'Savatiano', 'Vidiano', 'Vilana', 'Robola', 'Athiri', 'Aidani', 'Debina', 'Monemvasia'],
  gr_red: ['Xinomavro', 'Agiorgitiko', 'Limnio', 'Mavrotragano', 'Kotsifali', 'Mandilaria', 'Liatiko', 'Mavro Messenikola', 'Cabernet Sauvignon', 'Syrah'],
  gr_rose: ['Agiorgitiko', 'Xinomavro', 'Limnio', 'Moschofilero'],
  gr_sparkling: ['Xinomavro', 'Moschofilero', 'Assyrtiko', 'Debina'],
  gr_sweet: ['Assyrtiko（Vinsanto）', 'Muscat Blanc à Petits Grains', 'Muscat of Alexandria', 'Monemvasia', 'Limnio'],
  gr_fortified: ['Mavrodaphne', 'Black Corinthian'],
  gr_retsina: ['Savatiano', 'Roditis', 'Assyrtiko'],
  gr_other: []
}

const WHITE_AROMAS = ['檸檬', '青蘋果', '葡萄柚', '萊姆', '白桃', '杏桃', '芒果', '洋槐花', '茉莉', '玫瑰花瓣', '礦物', '燧石', '海水鹹感', '百里香', '蜂蜜', '烤土司', '橡木', '榛果']
const RED_AROMAS = ['覆盆子', '草莓', '紅櫻桃', '酸櫻桃', '黑李', '黑醋栗', '番茄乾', '玫瑰', '紫羅蘭', '皮革', '大地氣息', '菸草', '胡椒', '乾燥香草', '甘草', '香草', '烤土司', '橡木']

export const AROMAS_BY_TYPE = {
  gr_white: WHITE_AROMAS,
  gr_red: RED_AROMAS,
  gr_rose: ['草莓', '覆盆子', '紅櫻桃', '西瓜', '石榴', '玫瑰花瓣', '柑橘皮', '葡萄柚', '香草'],
  gr_sparkling: ['青蘋果', '檸檬', '白花', '玫瑰花瓣', '草莓', '麵包', '酵母', '礦物'],
  gr_sweet: ['蜂蜜', '杏桃乾', '無花果乾', '葡萄乾', '糖漬柑橘', '橙花', '麝香葡萄', '焦糖', '咖啡', '可可', '烤堅果', '香料', '礦物'],
  gr_fortified: ['黑櫻桃', '黑李', '葡萄乾', '無花果乾', '焦糖', '咖啡', '可可', '巧克力', '烤堅果', '香料', '香草', '橡木'],
  gr_retsina: ['松脂', '松針', '檸檬', '青蘋果', '百里香', '草本', '礦物', '苦杏仁'],
  gr_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  gr_white: ['高酸清脆', '礦物鮮明', '鹹感', '花香馥郁', '油脂圓潤', '酒渣質地', '橡木柔化', '悠長尾韻', '精準純粹'],
  gr_red: ['單寧緊緻', '單寧細膩', '高酸鮮活', '果味飽滿', '辛香料感', '大地氣息', '陳年潛力', '均衡優雅'],
  gr_rose: ['清爽乾型', '豐沛果香', '活潑清脆', '淡雅細緻', '鮮美多汁'],
  gr_sparkling: ['細緻氣泡', '清爽乾型', '酵母質地', '高酸活潑', '悠長尾韻'],
  gr_sweet: ['甜潤濃郁', '高酸平衡', '氧化陳年風味', '果乾豐厚', '香料豐富', '油脂圓潤', '悠長尾韻'],
  gr_fortified: ['甜潤濃郁', '烈酒感', '果乾豐厚', '咖啡可可', '桶陳複雜', '悠長尾韻'],
  gr_retsina: ['樹脂鮮明', '清爽', '微苦', '草本感', '適合佐餐'],
  gr_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  gr_white: STRUCT_DRY_WHITE,
  gr_red: STRUCT_RED,
  gr_rose: STRUCT_DRY_WHITE,
  gr_sparkling: STRUCT_DRY_WHITE,
  gr_sweet: STRUCT_SWEET,
  gr_fortified: STRUCT_SWEET,
  gr_retsina: STRUCT_DRY_WHITE,
  gr_other: STRUCT_RED
}
