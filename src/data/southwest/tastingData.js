/**
 * 西南產區品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261103000100_add_southwest_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 southwestUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'sw_bergerac_red', emoji: '🍷', short: 'Bordeaux 系紅酒（Bergerac／Pécharmant／Duras 等）',   color: '#8B2A1A' },
  { id: 'sw_cahors',       emoji: '⚫', short: 'Cahors 黑酒（Malbec 為主）',                           color: '#3F1230' },
  { id: 'sw_tannat',       emoji: '🛡️', short: 'Tannat 紅酒（Madiran／Saint-Mont／Tursan／Béarn 等）', color: '#4A1230' },
  { id: 'sw_local_red',    emoji: '🫐', short: '本土品種紅酒（Fronton Négrette／Gaillac／Marcillac／Irouléguy 等）', color: '#7A2C5E' },
  { id: 'sw_dry_white',    emoji: '🍋', short: '乾白酒（Bergerac／Gaillac／Côtes de Gascogne／Jurançon Sec 等）', color: '#C9A23A' },
  { id: 'sw_rose',         emoji: '🌸', short: '粉紅酒',                                               color: '#D6457A' },
  { id: 'sw_sparkling',    emoji: '🫧', short: 'Gaillac 氣泡酒（Méthode Gaillacoise 等）',             color: '#3b8bd6' },
  { id: 'sw_botrytis',     emoji: '🍯', short: '貴腐甜酒（Monbazillac／Saussignac／Rosette 等）',       color: '#B8902A' },
  { id: 'sw_jurancon',     emoji: '🍇', short: '風乾甜白（Jurançon／Pacherenc du Vic-Bilh 甜白）',     color: '#C08A1A' },
  { id: 'sw_armagnac',     emoji: '🥃', short: 'Armagnac 白蘭地',                                      color: '#C04000' },
  { id: 'sw_other',        emoji: '🍾', short: '其他',                                                 color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 主要產區與地點（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Bergerac', 'Côtes de Bergerac', 'Pécharmant', 'Monbazillac', 'Saussignac', 'Montravel', 'Rosette', 'Côtes de Duras',
  'Cahors', 'Marcillac', 'Buzet', 'Côtes du Marmandais', 'Gaillac', 'Gaillac Premières Côtes', 'Fronton',
  'Madiran', 'Pacherenc du Vic-Bilh', 'Saint-Mont', 'Tursan', 'Côtes de Gascogne IGP', 'Bas-Armagnac', 'Ténarèze', 'Haut-Armagnac',
  'Jurançon', 'Jurançon Sec', 'Béarn', 'Irouléguy'
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
  sw_bergerac_red: RED_COLORS.slice(1, 6),
  sw_cahors: [RED_COLORS[3], RED_COLORS[4], RED_COLORS[2]],
  sw_tannat: [RED_COLORS[3], RED_COLORS[4], RED_COLORS[2]],
  sw_local_red: RED_COLORS.slice(0, 5),
  sw_dry_white: WHITE_COLORS,
  sw_rose: ROSE_COLORS,
  sw_sparkling: WHITE_COLORS.slice(0, 4),
  sw_botrytis: SWEET_COLORS,
  sw_jurancon: SWEET_COLORS,
  sw_armagnac: [...SWEET_COLORS.slice(2), RED_COLORS[6]],
  sw_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  sw_bergerac_red: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Malbec', '紅酒混調'],
  sw_cahors: ['Malbec', 'Merlot', 'Tannat'],
  sw_tannat: ['Tannat', 'Cabernet Franc', 'Cabernet Sauvignon', 'Fer Servadou'],
  sw_local_red: ['Négrette', 'Fer Servadou', 'Duras', 'Syrah', 'Gamay', 'Abouriou', 'Cabernet Franc', 'Tannat'],
  sw_dry_white: ['Sauvignon Blanc', 'Sémillon', 'Muscadelle', 'Mauzac', 'Len de l\'El', 'Colombard', 'Ugni Blanc', 'Gros Manseng', 'Petit Courbu', '白酒混釀'],
  sw_rose: ['Cabernet Franc', 'Merlot', 'Négrette', 'Syrah', 'Tannat'],
  sw_sparkling: ['Mauzac', 'Len de l\'El', 'Muscadelle'],
  sw_botrytis: ['Sémillon', 'Sauvignon Blanc', 'Muscadelle', 'Chenin Blanc'],
  sw_jurancon: ['Petit Manseng', 'Gros Manseng', 'Courbu', 'Camaralet de Lasseube', 'Lauzet'],
  sw_armagnac: ['Ugni Blanc', 'Baco', 'Folle Blanche', 'Colombard'],
  sw_other: []
}

export const AROMAS_BY_TYPE = {
  sw_bergerac_red: ['黑醋栗', '黑櫻桃', '紅色漿果', '雪松', '青椒', '菸草', '礦物'],
  sw_cahors: ['李子', '黑莓', '菸草', '黑胡椒', '甘草', '皮革', '紫羅蘭'],
  sw_tannat: ['黑莓', '黑李子', '黑胡椒', '甘草', '菸草', '煙燻', '皮革', '橡木'],
  sw_local_red: ['覆盆子', '紫羅蘭', '甘草', '紅櫻桃', '黑莓', '胡椒', '礦物', '花香'],
  sw_dry_white: ['青蘋果', '檸檬', '葡萄柚', '白花', '蜜桃', '青草', '礦物', '蜂蜜'],
  sw_rose: ['草莓', '覆盆子', '紅櫻桃', '柑橘皮', '花香'],
  sw_sparkling: ['青蘋果', '檸檬', '白花', '梨', '烤吐司', '酵母', '礦物'],
  sw_botrytis: ['蜂蜜', '蜜漬杏桃', '橙皮', '藏紅花', '蜜桃', '堅果', '花香'],
  sw_jurancon: ['芒果', '鳳梨', '百香果', '蜂蜜', '香料', '桂皮', '橙皮', '白花'],
  sw_armagnac: ['李子乾', '香草', '烤橡木', '焦糖', '無花果乾', '核桃', '菸草', '香料'],
  sw_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  sw_bergerac_red: ['果味飽滿', '單寧細緻', '均衡優雅', '悠長尾韻'],
  sw_cahors: ['單寧緊緻', '果味飽滿', '酒體豐厚', '耐久存', '悠長尾韻'],
  sw_tannat: ['單寧強勁', '酒體豐厚', '辛香料感', '耐久存', '悠長尾韻'],
  sw_local_red: ['酸度鮮活', '果味飽滿', '輕盈易飲', '礦物鮮明', '悠長尾韻'],
  sw_dry_white: ['酸度鮮明', '清爽乾型', '礦物鮮明', '酒體豐厚', '悠長尾韻'],
  sw_rose: ['清爽', '果味飽滿', '易飲', '酸度鮮活'],
  sw_sparkling: ['細緻氣泡', '清爽乾型', '微甜', '酵母質地', '悠長尾韻'],
  sw_botrytis: ['香氣濃郁', '甜而不膩', '酸度平衡', '悠長尾韻'],
  sw_jurancon: ['酸度鮮明', '甜而不膩', '熱帶水果感', '香料感', '悠長尾韻'],
  sw_armagnac: ['濃郁', '酒精感明顯', '複雜', '悠長尾韻'],
  sw_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  sw_bergerac_red: STRUCT_RED,
  sw_cahors: STRUCT_RED,
  sw_tannat: STRUCT_RED,
  sw_local_red: STRUCT_RED,
  sw_dry_white: STRUCT_DRY_WHITE,
  sw_rose: STRUCT_DRY_WHITE,
  sw_sparkling: STRUCT_DRY_WHITE,
  sw_botrytis: STRUCT_SWEET,
  sw_jurancon: STRUCT_SWEET,
  sw_armagnac: STRUCT_SWEET,
  sw_other: STRUCT_RED
}
