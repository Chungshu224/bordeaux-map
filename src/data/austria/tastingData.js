/**
 * 奧地利品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261028000100_add_austria_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 austriaUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'at_gv',        emoji: '🌶️', short: 'Grüner Veltliner', color: '#6E8F3A' },
  { id: 'at_riesling',  emoji: '🍋', short: 'Riesling',         color: '#C2B13A' },
  { id: 'at_white',     emoji: '🥂', short: '其他白酒／混植',   color: '#B8902A' },
  { id: 'at_red_light', emoji: '🍒', short: '輕盈紅（Zweigelt 等）', color: '#B3202E' },
  { id: 'at_red_full',  emoji: '🍷', short: '結構紅（Blaufränkisch 等）', color: '#6B1030' },
  { id: 'at_rose',      emoji: '🌸', short: '粉紅／Schilcher',  color: '#D45E8C' },
  { id: 'at_sweet',     emoji: '🍯', short: '甜酒（Prädikat）', color: '#C07F00' },
  { id: 'at_sparkling', emoji: '🫧', short: 'Sekt',             color: '#3b8bd6' },
  { id: 'at_other',     emoji: '🍾', short: '其他',             color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 18 個 DAC 與主要邦／Sekt，供產區欄位自動完成
export const APPELLATIONS = [
  'Wachau', 'Kremstal', 'Kamptal', 'Traisental', 'Weinviertel', 'Wagram', 'Carnuntum', 'Thermenregion',
  'Wien (Wiener Gemischter Satz)', 'Neusiedlersee', 'Leithaberg', 'Mittelburgenland', 'Eisenberg', 'Rosalia', 'Ruster Ausbruch',
  'Südsteiermark', 'Vulkanland Steiermark', 'Weststeiermark',
  'Niederösterreich', 'Burgenland', 'Steiermark', 'Sekt Austria'
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
  at_gv: WHITE_COLORS.slice(0, 4),
  at_riesling: WHITE_COLORS.slice(0, 4),
  at_white: WHITE_COLORS,
  at_red_light: RED_COLORS.slice(0, 4),
  at_red_full: RED_COLORS.slice(1, 6),
  at_rose: ROSE_COLORS,
  at_sweet: [...WHITE_COLORS.slice(3), { id: 'bronze', label: '古銅', color: '#CD7F32' }, { id: 'mahogany', label: '桃花心木', color: '#C04000' }],
  at_sparkling: WHITE_COLORS.slice(0, 4),
  at_other: [...WHITE_COLORS.slice(1, 4), ...RED_COLORS.slice(1, 4)]
}

export const GRAPES_BY_TYPE = {
  at_gv: ['Grüner Veltliner'],
  at_riesling: ['Riesling'],
  at_white: ['Welschriesling', 'Weissburgunder（Pinot Blanc）', 'Chardonnay（Morillon）', 'Sauvignon Blanc', 'Gelber Muskateller', 'Neuburger', 'Roter Veltliner', 'Gemischter Satz（混植）'],
  at_red_light: ['Zweigelt', 'St. Laurent', 'Blauburger', 'Blauer Portugieser', 'Pinot Noir'],
  at_red_full: ['Blaufränkisch', 'Zweigelt', 'Cabernet Sauvignon', 'Merlot', '紅酒 Cuvée'],
  at_rose: ['Blauer Wildbacher（Schilcher）', 'Zweigelt', 'St. Laurent'],
  at_sweet: ['Welschriesling', 'Traminer', 'Weissburgunder', 'Muskat Ottonel', 'Zweigelt（紅甜酒）'],
  at_sparkling: ['Grüner Veltliner', 'Riesling', 'Welschriesling', 'Weissburgunder', 'Chardonnay', 'Pinot Noir'],
  at_other: []
}

export const AROMAS_BY_TYPE = {
  at_gv: ['白胡椒', '萊姆', '青蘋果', '青豆', '蘆筍', '萵苣', '西洋梨', '香草植物', '礦物', '鹽感'],
  at_riesling: ['檸檬', '青檸', '白桃', '杏桃', '葡萄柚', '白花', '蜂蜜', '礦物', '煤油（陳年）', '燧石'],
  at_white: ['青蘋果', '洋梨', '黃桃', '接骨木花', '黑醋栗葉', '百香果', '杏仁', '蜂蜜', '礦物', '橡木'],
  at_red_light: ['酸櫻桃', '紅櫻桃', '覆盆子', '草莓', '紫羅蘭', '胡椒', '甘草', '香料', '煙燻'],
  at_red_full: ['黑櫻桃', '黑莓', '黑醋栗', '黑胡椒', '香料', '甘草', '皮革', '菸草', '煙燻', '橡木', '礦物'],
  at_rose: ['草莓', '覆盆子', '紅櫻桃', '紅醋栗', '西瓜', '石榴', '柑橘皮', '草本'],
  at_sweet: ['蜂蜜', '杏桃乾', '無花果乾', '葡萄乾', '糖漬柑橘', '橙花', '焦糖', '烤堅果', '洋槐花', '礦物'],
  at_sparkling: ['青蘋果', '檸檬', '白花', '梨', '麵包', '酵母', '烤吐司', '礦物'],
  at_other: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜']
}

export const TASTE_TAGS_BY_TYPE = {
  at_gv: ['胡椒感', '酸度鮮明', '礦物鮮明', '酒體中等', '清爽乾型', '悠長尾韻'],
  at_riesling: ['酸度鮮明', '礦物鮮明', '緊緻', '花香馥郁', '清爽乾型', '悠長尾韻'],
  at_white: ['清爽乾型', '花香馥郁', '酒體豐厚', '橡木柔化', '酸度鮮明', '悠長尾韻'],
  at_red_light: ['酸度鮮活', '果味飽滿', '單寧柔和', '易飲', '辛香料感', '均衡優雅'],
  at_red_full: ['單寧緊緻', '酸度鮮活', '辛香料感', '大地氣息', '陳年潛力', '均衡優雅', '悠長尾韻'],
  at_rose: ['高酸鮮活', '清爽乾型', '豐沛果香', '飽滿', '鮮美多汁'],
  at_sweet: ['甜潤濃郁', '高酸平衡', '果乾豐厚', '油脂圓潤', '悠長尾韻'],
  at_sparkling: ['細緻氣泡', '微甜', '清爽乾型', '酵母質地', '悠長尾韻'],
  at_other: ['平衡', '優雅', '複雜', '清爽', '飽滿']
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
  at_gv: STRUCT_DRY_WHITE,
  at_riesling: STRUCT_DRY_WHITE,
  at_white: STRUCT_DRY_WHITE,
  at_red_light: STRUCT_RED,
  at_red_full: STRUCT_RED,
  at_rose: STRUCT_DRY_WHITE,
  at_sweet: STRUCT_SWEET,
  at_sparkling: STRUCT_DRY_WHITE,
  at_other: STRUCT_RED
}
