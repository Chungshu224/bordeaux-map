/**
 * 加拿大品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261106000100_add_canada_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 canadaUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'can_ice',      emoji: '🧊', short: '冰酒（Vidal、Riesling、Cabernet Franc 等，VQA Icewine）', color: '#C9A23A' },
  { id: 'can_on_white', emoji: '🍋', short: 'Ontario 白酒（Riesling、Chardonnay 等）',                  color: '#B9B04A' },
  { id: 'can_on_red',   emoji: '🍷', short: 'Ontario 紅酒（Cabernet Franc、Pinot Noir、Gamay 等）',      color: '#7A1F2E' },
  { id: 'can_bc_white', emoji: '🌲', short: 'BC 白酒（Pinot Gris、Chardonnay、Riesling、Ortega 等）',    color: '#8DB36B' },
  { id: 'can_bc_red',   emoji: '🏔️', short: 'BC 紅酒（Merlot、Syrah、Cabernet、Pinot Noir 等）',         color: '#8B2A1A' },
  { id: 'can_sparkling', emoji: '🥂', short: '氣泡酒（傳統法，如 Ontario、Nova Scotia）',                 color: '#D9C27A' },
  { id: 'can_east',     emoji: '🌊', short: '東部酒款（Tidal Bay、Quebec 與 Nova Scotia 的雜交種酒）',    color: '#3E7CB1' },
  { id: 'can_other',    emoji: '🍾', short: '其他',                                                      color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 主要產區與地點（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Niagara Peninsula', 'Niagara Escarpment', 'Niagara-on-the-Lake', 'Beamsville Bench', 'Short Hills Bench', 'Twenty Mile Bench',
  'Vinemount Ridge', 'Lake Erie North Shore', 'South Islands', 'Prince Edward County',
  'Okanagan Valley', 'Golden Mile Bench', 'Naramata Bench', 'Okanagan Falls', 'Skaha Bench', 'Similkameen Valley',
  'Fraser Valley', 'Vancouver Island', 'Cowichan Valley', 'Gulf Islands', 'Thompson Valley', 'Shuswap', 'Lillooet', 'Kootenays',
  'Nova Scotia', 'Tidal Bay', 'Annapolis Valley', 'Gaspereau Valley', 'Québec', 'Vin du Québec PGI'
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
  can_ice: SWEET_COLORS,
  can_on_white: WHITE_COLORS.slice(0, 5),
  can_on_red: RED_COLORS.slice(0, 6),
  can_bc_white: WHITE_COLORS.slice(0, 5),
  can_bc_red: RED_COLORS.slice(1, 7),
  can_sparkling: WHITE_COLORS.slice(0, 5),
  can_east: [...WHITE_COLORS.slice(0, 4), ...RED_COLORS.slice(1, 4)],
  can_other: [...WHITE_COLORS.slice(1, 4), ...ROSE_COLORS, ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  can_ice: ['Vidal', 'Riesling', 'Cabernet Franc', 'Gewürztraminer', 'Chardonnay', 'Cabernet Sauvignon'],
  can_on_white: ['Riesling', 'Chardonnay', 'Sauvignon Blanc', 'Pinot Gris', 'Gewürztraminer', '白酒混釀'],
  can_on_red: ['Cabernet Franc', 'Pinot Noir', 'Gamay Noir', 'Merlot', 'Cabernet Sauvignon', 'Baco Noir', '紅酒混調'],
  can_bc_white: ['Pinot Gris', 'Chardonnay', 'Riesling', 'Gewürztraminer', 'Sauvignon Blanc', 'Ortega', '白酒混釀'],
  can_bc_red: ['Merlot', 'Syrah', 'Cabernet Sauvignon', 'Cabernet Franc', 'Pinot Noir', 'Petit Verdot', '紅酒混調'],
  can_sparkling: ['Chardonnay', 'Pinot Noir', "L'Acadie Blanc", '混調'],
  can_east: ["L'Acadie Blanc", 'Seyval Blanc', 'Vidal', 'Frontenac', 'Maréchal Foch', 'Baco Noir', '混調'],
  can_other: []
}

export const AROMAS_BY_TYPE = {
  can_ice: ['蜂蜜', '杏桃乾', '桃子', '荔枝', '柑橘皮', '蜜餞', '白花', '焦糖'],
  can_on_white: ['檸檬', '青蘋果', '萊姆', '白花', '礦物', '白桃', '蜂蜜', '香草植物'],
  can_on_red: ['紅櫻桃', '覆盆子', '黑醋栗葉', '紫羅蘭', '香料', '礦物', '雪松', '青椒'],
  can_bc_white: ['柑橘', '白桃', '熱帶水果', '白花', '梨', '香草植物', '礦物', '蜂蜜'],
  can_bc_red: ['黑莓', '黑櫻桃', '黑胡椒', '雪松', '皮革', '香料', '甘草', '煙燻'],
  can_sparkling: ['青蘋果', '檸檬', '白花', '酵母', '吐司', '礦物', '梨'],
  can_east: ['青蘋果', '柑橘', '鮮綠水果', '白花', '礦物', '香草植物', '紅色漿果'],
  can_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  can_ice: ['甜而不膩', '酸度平衡', '香氣濃郁', '濃縮', '悠長尾韻'],
  can_on_white: ['酸度鮮明', '清爽乾型', '礦物鮮明', '酒體豐厚', '悠長尾韻'],
  can_on_red: ['果味飽滿', '單寧細緻', '辛香料感', '均衡優雅', '悠長尾韻'],
  can_bc_white: ['酸度鮮明', '果味飽滿', '清爽乾型', '礦物鮮明', '悠長尾韻'],
  can_bc_red: ['單寧緊緻', '酒體豐厚', '辛香料感', '耐久存', '悠長尾韻'],
  can_sparkling: ['氣泡細緻', '酸度鮮活', '清爽乾型', '酵母感', '悠長尾韻'],
  can_east: ['清涼爽脆', '酸度鮮明', '礦物鮮明', '易飲', '悠長尾韻'],
  can_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  can_ice: STRUCT_SWEET,
  can_on_white: STRUCT_DRY_WHITE,
  can_on_red: STRUCT_RED,
  can_bc_white: STRUCT_DRY_WHITE,
  can_bc_red: STRUCT_RED,
  can_sparkling: STRUCT_DRY_WHITE,
  can_east: STRUCT_DRY_WHITE,
  can_other: STRUCT_RED
}
