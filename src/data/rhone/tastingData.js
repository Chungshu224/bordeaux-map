/**
 * 隆河品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261026000000_add_rhone_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 rhoneUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'rh_north_red', emoji: '🍷', short: '北隆河紅', color: '#7A2E5C' },
  { id: 'rh_south_red', emoji: '🍇', short: '南隆河紅', color: '#B5502E' },
  { id: 'rh_white',     emoji: '🥂', short: '白酒',     color: '#B8902A' },
  { id: 'rh_rose',      emoji: '🌸', short: '粉紅',     color: '#D45E8C' },
  { id: 'rh_sweet',     emoji: '🍯', short: '甜酒／VDN', color: '#C07F00' },
  { id: 'rh_sparkling', emoji: '🫧', short: '氣泡',     color: '#3b8bd6' },
  { id: 'rh_other',     emoji: '🍾', short: '其他',     color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 18 個 cru ＋ Côtes du Rhône 家族 ＋ 其他 AOC ＋ 21 個可加註的 Villages 地名，供產區欄位的自動完成
export const APPELLATIONS = [
  'Côte-Rôtie', 'Condrieu', 'Château-Grillet', 'Saint-Joseph', 'Hermitage', 'Crozes-Hermitage', 'Cornas', 'Saint-Péray',
  'Châteauneuf-du-Pape', 'Gigondas', 'Vacqueyras', 'Vinsobres', 'Beaumes-de-Venise', 'Rasteau', 'Cairanne', 'Lirac', 'Tavel', 'Laudun',
  'Côtes du Rhône', 'Côtes du Rhône Villages',
  'Côtes du Rhône Villages Chusclan', 'Côtes du Rhône Villages Gadagne', "Côtes du Rhône Villages Massif d'Uchaux",
  'Côtes du Rhône Villages Nyons', 'Côtes du Rhône Villages Plan de Dieu', 'Côtes du Rhône Villages Puyméras',
  'Côtes du Rhône Villages Roaix', 'Côtes du Rhône Villages Rochegude', 'Côtes du Rhône Villages Rousset-les-Vignes',
  'Côtes du Rhône Villages Sablet', 'Côtes du Rhône Villages Saint-Andéol', 'Côtes du Rhône Villages Saint-Gervais',
  'Côtes du Rhône Villages Saint-Maurice', 'Côtes du Rhône Villages Saint-Pantaléon-les-Vignes',
  'Côtes du Rhône Villages Sainte-Cécile', 'Côtes du Rhône Villages Séguret', 'Côtes du Rhône Villages Signargues',
  'Côtes du Rhône Villages Suze-la-Rousse', 'Côtes du Rhône Villages Vaison-la-Romaine',
  'Côtes du Rhône Villages Valréas', 'Côtes du Rhône Villages Visan',
  'Muscat de Beaumes-de-Venise', 'Rasteau VDN', 'Clairette de Die', 'Crémant de Die',
  'Ventoux', 'Luberon', 'Grignan-les-Adhémar', 'Costières de Nîmes'
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

export const COLORS_BY_TYPE = {
  rh_north_red: RED_COLORS.slice(1, 5),
  rh_south_red: [RED_COLORS[0], RED_COLORS[1], RED_COLORS[2], RED_COLORS[3], RED_COLORS[5], RED_COLORS[6]],
  rh_white: WHITE_COLORS,
  rh_rose: ROSE_COLORS,
  rh_sweet: [...WHITE_COLORS.slice(3), { id: 'bronze', label: '古銅', color: '#CD7F32' }, { id: 'mahogany', label: '桃花心木', color: '#C04000' }, RED_COLORS[2], RED_COLORS[6]],
  rh_sparkling: WHITE_COLORS.slice(0, 4),
  rh_other: [...WHITE_COLORS.slice(1, 4), ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  rh_north_red: ['Syrah', 'Viognier（共發酵）', 'Marsanne', 'Roussanne'],
  rh_south_red: ['Grenache', 'Syrah', 'Mourvèdre', 'Cinsault', 'Carignan', 'Counoise', 'Muscardin', 'Vaccarèse'],
  rh_white: ['Viognier', 'Marsanne', 'Roussanne', 'Grenache Blanc', 'Clairette', 'Bourboulenc', 'Picpoul'],
  rh_rose: ['Grenache', 'Cinsault', 'Syrah', 'Mourvèdre'],
  rh_sweet: ['Muscat Blanc à Petits Grains', 'Grenache（VDN）', 'Marsanne（稻草酒）', 'Roussanne（稻草酒）'],
  rh_sparkling: ['Clairette', 'Muscat Blanc à Petits Grains', 'Marsanne', 'Roussanne'],
  rh_other: []
}

const RED_AROMAS_N = ['黑莓', '黑醋栗', '黑胡椒', '橄欖', '培根', '紫羅蘭', '煙燻', '皮革', '甘草', '覆盆子', '大地氣息', '烤土司', '橡木']
const RED_AROMAS_S = ['覆盆子', '草莓', '紅櫻桃', '黑櫻桃', '紅莓果醬', '黑李', '香料', '百里香', '迷迭香', '野生草本', '甘草', '皮革', '菸草', '野味', '大地氣息', '橡木']

export const AROMAS_BY_TYPE = {
  rh_north_red: RED_AROMAS_N,
  rh_south_red: RED_AROMAS_S,
  rh_white: ['杏桃', '白桃', '白花', '洋槐花', '梨', '蜂蜜', '杏仁', '蠟感', '草本茶', '百里香', '檸檬', '青蘋果', '礦物', '橡木', '榛果'],
  rh_rose: ['草莓', '覆盆子', '紅櫻桃', '西瓜', '石榴', '玫瑰花瓣', '柑橘皮', '香草', '草本'],
  rh_sweet: ['蜂蜜', '杏桃乾', '無花果乾', '葡萄乾', '糖漬柑橘', '橙花', '麝香葡萄', '焦糖', '烤堅果', '香料', '礦物'],
  rh_sparkling: ['青蘋果', '檸檬', '白花', '麝香葡萄', '桃', '麵包', '酵母', '礦物'],
  rh_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  rh_north_red: ['單寧緊緻', '單寧細膩', '高酸鮮活', '果味飽滿', '辛香料感', '胡椒感', '大地氣息', '陳年潛力', '均衡優雅'],
  rh_south_red: ['果味飽滿', '酒精感明顯', '辛香料感', '單寧圓潤', '圓潤柔和', '野生草本', '溫暖', '悠長尾韻', '易飲'],
  rh_white: ['油脂圓潤', '酒體豐厚', '低酸圓潤', '酸度鮮明', '花香馥郁', '礦物鮮明', '橡木柔化', '悠長尾韻'],
  rh_rose: ['清爽乾型', '豐沛果香', '活潑清脆', '飽滿', '鮮美多汁'],
  rh_sweet: ['甜潤濃郁', '高酸平衡', '氧化陳年風味', '果乾豐厚', '烈酒感', '油脂圓潤', '悠長尾韻'],
  rh_sparkling: ['細緻氣泡', '微甜', '清爽乾型', '麝香芬芳', '酵母質地', '悠長尾韻'],
  rh_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  rh_north_red: STRUCT_RED,
  rh_south_red: STRUCT_RED,
  rh_white: STRUCT_DRY_WHITE,
  rh_rose: STRUCT_DRY_WHITE,
  rh_sweet: STRUCT_SWEET,
  rh_sparkling: STRUCT_DRY_WHITE,
  rh_other: STRUCT_RED
}
