/**
 * 香檳品飲筆記：酒款類型與品飲詞彙（SAT 風格：外觀、香氣、口感、氣泡）。
 * wine_type 的 id 需對應 supabase/migrations/20261027000000_add_champagne_tasting_types.sql 的 CHECK 清單。
 * tasting_notes 的欄位沿用：tannin 欄存「甜度」、acidity 酸度、body 酒體、finish 尾韻；氣泡（mousse）用 taste_tags 記錄。
 */

export const WINE_TYPES = [
  { id: 'ch_nv',       emoji: '🥂', short: 'NV 無年份',        color: '#A8801C' },
  { id: 'ch_vintage',  emoji: '📅', short: 'Vintage 年份',     color: '#8E6B1F' },
  { id: 'ch_bdb',      emoji: '⚪', short: 'Blanc de Blancs',  color: '#C9A24A' },
  { id: 'ch_bdn',      emoji: '⚫', short: 'Blanc de Noirs',   color: '#6B4F1D' },
  { id: 'ch_rose',     emoji: '🌸', short: 'Rosé',             color: '#D45E8C' },
  { id: 'ch_prestige', emoji: '👑', short: 'Prestige Cuvée',   color: '#B8902A' },
  { id: 'ch_sweet',    emoji: '🍯', short: 'Demi-Sec／Doux',   color: '#C07F00' },
  { id: 'ch_still',    emoji: '🍷', short: '靜態酒 Coteaux Champenois', color: '#8B1A1A' },
  { id: 'ch_other',    emoji: '🍾', short: '其他',             color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 產區欄位的自動完成：AOC、子產區、17 個 Grand Cru 與常見 Premier Cru（INAO 規格）
export const APPELLATIONS = [
  'Champagne', 'Champagne Grand Cru', 'Champagne Premier Cru',
  'Montagne de Reims', 'Vallée de la Marne', 'Côte des Blancs', 'Côte des Bar',
  'Ambonnay', 'Beaumont-sur-Vesle', 'Bouzy', 'Louvois', 'Mailly-Champagne', 'Puisieulx', 'Sillery', 'Verzenay', 'Verzy',
  'Aÿ', 'Tours-sur-Marne',
  'Avize', 'Chouilly', 'Cramant', 'Le Mesnil-sur-Oger', 'Oger', 'Oiry',
  'Hautvillers', 'Dizy', 'Cumières', 'Ludes', 'Rilly-la-Montagne', 'Vertus',
  'Coteaux Champenois', 'Rosé des Riceys'
]

const SPARKLING_COLORS = [
  { id: 'pale-lemon', label: '淡檸檬', color: '#F5EFB2' },
  { id: 'lemon',      label: '檸檬黃', color: '#E8D86A' },
  { id: 'gold',       label: '金黃',   color: '#E8C84A' },
  { id: 'deep-gold',  label: '深金',   color: '#FFB700' },
  { id: 'amber',      label: '琥珀',   color: '#C8860D' }
]
const ROSE_COLORS = [
  { id: 'pale-pink', label: '淡粉',   color: '#FAC4CC' },
  { id: 'salmon',    label: '鮭魚粉', color: '#FA8072' },
  { id: 'copper',    label: '銅粉',   color: '#D98A6B' },
  { id: 'coral',     label: '珊瑚粉', color: '#F06080' }
]
const RED_COLORS = [
  { id: 'pale-ruby', label: '淡寶石紅', color: '#C0485A' },
  { id: 'ruby',      label: '寶石紅',   color: '#9B1221' },
  { id: 'garnet',    label: '石榴紅',   color: '#A5174E' }
]

export const COLORS_BY_TYPE = {
  ch_nv: SPARKLING_COLORS,
  ch_vintage: SPARKLING_COLORS,
  ch_bdb: SPARKLING_COLORS.slice(0, 4),
  ch_bdn: SPARKLING_COLORS,
  ch_rose: ROSE_COLORS,
  ch_prestige: SPARKLING_COLORS,
  ch_sweet: SPARKLING_COLORS,
  ch_still: [...SPARKLING_COLORS.slice(0, 3), ...ROSE_COLORS.slice(0, 2), ...RED_COLORS],
  ch_other: SPARKLING_COLORS
}

export const GRAPES_BY_TYPE = {
  ch_nv: ['Pinot Noir', 'Meunier', 'Chardonnay'],
  ch_vintage: ['Pinot Noir', 'Meunier', 'Chardonnay'],
  ch_bdb: ['Chardonnay'],
  ch_bdn: ['Pinot Noir', 'Meunier'],
  ch_rose: ['Pinot Noir', 'Meunier', 'Chardonnay'],
  ch_prestige: ['Pinot Noir', 'Meunier', 'Chardonnay'],
  ch_sweet: ['Pinot Noir', 'Meunier', 'Chardonnay'],
  ch_still: ['Pinot Noir', 'Meunier', 'Chardonnay'],
  ch_other: ['Arbane', 'Petit Meslier', 'Pinot Blanc', 'Pinot Gris']
}

const PRIMARY = ['青蘋果', '檸檬', '葡萄柚', '白桃', '梨', '白花', '洋槐花', '紅色莓果', '櫻桃', '礦物', '白堊', '燧石']
const AUTOLYSIS = ['餅乾', 'brioche', '烤麵包', '杏仁', '奶油', '酵母']
const TERTIARY = ['烤榛果', '蜂蜜', '焦糖', '乾果', '蘑菇', '菸草', '咖啡', '堅果（氧化）']

export const AROMAS_BY_TYPE = {
  ch_nv: [...PRIMARY, ...AUTOLYSIS.slice(0, 4), '烤榛果'],
  ch_vintage: [...PRIMARY, ...AUTOLYSIS, ...TERTIARY.slice(0, 6)],
  ch_bdb: ['青蘋果', '檸檬', '葡萄柚', '梨', '白花', '洋槐花', '礦物', '白堊', '燧石', ...AUTOLYSIS.slice(0, 4), '烤榛果'],
  ch_bdn: ['紅色莓果', '櫻桃', '白桃', '蘋果', '礦物', '餅乾', 'brioche', '烤麵包', '杏仁', '香料'],
  ch_rose: ['草莓', '覆盆子', '紅櫻桃', '紅醋栗', '玫瑰花瓣', '柑橘皮', '礦物', '餅乾', 'brioche'],
  ch_prestige: [...PRIMARY, ...AUTOLYSIS, ...TERTIARY],
  ch_sweet: ['蜂蜜', '杏桃', '糖漬柑橘', '白桃', '烤杏仁', '焦糖', 'brioche', '香料', '礦物'],
  ch_still: ['紅櫻桃', '覆盆子', '草莓', '蘋果', '梨', '白花', '礦物', '白堊', '大地氣息'],
  ch_other: ['果香', '花香', '礦物', '酵母', '堅果']
}

export const TASTE_TAGS_BY_TYPE = {
  ch_nv: ['細緻氣泡', '綿密持久的泡沫', '高酸清脆', '清爽乾型', '酵母質地', '悠長尾韻', '房子風格穩定'],
  ch_vintage: ['細緻氣泡', '綿密持久的泡沫', '酸度緊緻', '酵母質地', '氧化陳年風味', '複雜多層次', '悠長尾韻'],
  ch_bdb: ['細緻氣泡', '礦物鮮明', '高酸清脆', '精準純粹', '酵母質地', '悠長尾韻'],
  ch_bdn: ['飽滿豐厚', '紅色水果', '結構堅實', '細緻氣泡', '酵母質地', '悠長尾韻'],
  ch_rose: ['細緻氣泡', '豐沛果香', '清爽乾型', '鮮美多汁', '悠長尾韻'],
  ch_prestige: ['細緻氣泡', '綿密持久的泡沫', '複雜多層次', '酵母質地', '氧化陳年風味', '陳年潛力', '極長尾韻'],
  ch_sweet: ['甜潤濃郁', '高酸平衡', '細緻氣泡', '香料豐富', '悠長尾韻'],
  ch_still: ['高酸鮮活', '礦物鮮明', '紅色水果', '清爽', '均衡優雅'],
  ch_other: ['平衡', '優雅', '複雜', '清爽']
}

const hints5 = {
  low: ['很低', '低', '中等', '高', '很高'],
  body: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'],
  finish: ['短促', '尚可', '中等', '悠長', '極長'],
  dosage: ['Brut Nature／Extra Brut', 'Brut', 'Extra Dry', 'Sec', 'Demi-Sec 以上'],
  sweet: ['微甜', '中甜', '甜', '很甜', '極甜']
}
const STRUCT_SPARKLING = [
  { key: 'tannin',  label: '甜度',   hints: hints5.dosage },
  { key: 'acidity', label: '酸度',   hints: hints5.low },
  { key: 'body',    label: '酒體',   hints: hints5.body },
  { key: 'finish',  label: '尾韻',   hints: hints5.finish }
]
const STRUCT_SWEET = [
  { key: 'tannin',  label: '甜度',   hints: hints5.sweet },
  { key: 'acidity', label: '酸度',   hints: hints5.low },
  { key: 'body',    label: '酒體',   hints: hints5.body },
  { key: 'finish',  label: '尾韻',   hints: hints5.finish }
]
const STRUCT_STILL = [
  { key: 'tannin',  label: '單寧／苦感', hints: ['無', '極微', '微澀', '明顯', '強烈'] },
  { key: 'acidity', label: '酸度',       hints: hints5.low },
  { key: 'body',    label: '酒體',       hints: hints5.body },
  { key: 'finish',  label: '尾韻',       hints: hints5.finish }
]

export const STRUCTURE_BY_TYPE = {
  ch_nv: STRUCT_SPARKLING,
  ch_vintage: STRUCT_SPARKLING,
  ch_bdb: STRUCT_SPARKLING,
  ch_bdn: STRUCT_SPARKLING,
  ch_rose: STRUCT_SPARKLING,
  ch_prestige: STRUCT_SPARKLING,
  ch_sweet: STRUCT_SWEET,
  ch_still: STRUCT_STILL,
  ch_other: STRUCT_SPARKLING
}
