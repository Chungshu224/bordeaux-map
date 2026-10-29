/**
 * 白蘭地品飲筆記：酒款類型與品飲詞彙。
 * wine_type 的 id 需對應 supabase/migrations/20261104000100_add_brandy_tasting_types.sql 的 CHECK 清單（尚未套用）。
 * 詞彙為品飲描述用語（一般說法），不屬法規事實；每項皆經 brandyUi 字典提供 en／ja。
 */

export const WINE_TYPES = [
  { id: 'bd_cognac',       emoji: '🥃', short: 'Cognac（含 Fine Champagne、各 cru）',               color: '#8A4B14' },
  { id: 'bd_armagnac',     emoji: '🌾', short: 'Armagnac（含 Millésimé、Blanche）',                  color: '#B8442C' },
  { id: 'bd_jerez',        emoji: '🇪🇸', short: '西班牙白蘭地（Brandy de Jerez、Penedès）',          color: '#A5572B' },
  { id: 'bd_pisco',        emoji: '🍇', short: 'Pisco（秘魯、智利）',                                 color: '#6E9A3E' },
  { id: 'bd_grappa',       emoji: '🌿', short: 'Grappa 與果渣蒸餾酒（Marc）',                         color: '#7A8F5A' },
  { id: 'bd_other_brandy', emoji: '🌍', short: '其他葡萄白蘭地（Weinbrand、Metaxa、南非、亞美尼亞等）', color: '#9C6B2E' },
  { id: 'bd_other',        emoji: '🍾', short: '其他',                                                 color: '#6B7280' }
]
export const WINE_TYPE_IDS = WINE_TYPES.map(t => t.id)

// 主要產區與地點（課程提及者），供產地欄位自動完成
export const APPELLATIONS = [
  'Grande Champagne', 'Petite Champagne', 'Fine Champagne', 'Borderies', 'Fins Bois', 'Bons Bois', 'Bois Ordinaires',
  'Bas-Armagnac', 'Armagnac-Ténarèze', 'Haut-Armagnac', 'Blanche d\'Armagnac',
  'Brandy de Jerez', 'Brandy del Penedès', 'Deutscher Weinbrand', 'Metaxa', 'Grappa di Barolo', 'Grappa Friulana',
  'Pisco Peru', 'Pisco Chile', 'South African Brandy', 'Armenian Brandy'
]

const AGED_COLORS = [
  { id: 'white',     label: '無色透明', color: '#F2F2EC' },
  { id: 'pale-gold', label: '淡金',     color: '#EBD58A' },
  { id: 'gold',      label: '金黃',     color: '#E0B84C' },
  { id: 'amber',     label: '琥珀',     color: '#C8860D' },
  { id: 'copper',    label: '銅色',     color: '#B8651F' },
  { id: 'mahogany',  label: '桃花心木', color: '#8B3A12' },
  { id: 'dark-brown',label: '深褐',     color: '#5A2A10' }
]
const CLEAR_COLORS = [AGED_COLORS[0], AGED_COLORS[1]]

export const COLORS_BY_TYPE = {
  bd_cognac: AGED_COLORS.slice(1),
  bd_armagnac: AGED_COLORS,
  bd_jerez: AGED_COLORS.slice(2),
  bd_pisco: CLEAR_COLORS,
  bd_grappa: AGED_COLORS.slice(0, 5),
  bd_other_brandy: AGED_COLORS,
  bd_other: AGED_COLORS
}

export const GRAPES_BY_TYPE = {
  bd_cognac: ['Ugni Blanc', 'Folle Blanche', 'Colombard', 'Montils', 'Folignan'],
  bd_armagnac: ['Ugni Blanc', 'Baco', 'Folle Blanche', 'Colombard'],
  bd_jerez: ['Airén', 'Palomino', 'Parellada', 'Ugni Blanc'],
  bd_pisco: ['Quebranta', 'Mollar', 'Uvina', 'Negra Criolla', 'Italia', 'Moscatel', 'Torontel', 'Albilla'],
  bd_grappa: ['Moscato', 'Nebbiolo', '混合果渣'],
  bd_other_brandy: ['Chenin Blanc', 'Colombar', 'Muscat', 'Ugni Blanc'],
  bd_other: []
}

export const AROMAS_BY_TYPE = {
  bd_cognac: ['白花', '葡萄', '香草', '橡木', '杏桃', '乾果', '香料', '蜂蜜', '堅果', 'Rancio'],
  bd_armagnac: ['李子乾', '香草', '烤橡木', '焦糖', '無花果乾', '核桃', '菸草', '香料', 'Rancio'],
  bd_jerez: ['葡萄乾', '焦糖', '堅果', '香草', '雪莉桶', '香料', '乾果'],
  bd_pisco: ['白花', '葡萄', '柑橘', '荔枝', '香草植物', '礦物'],
  bd_grappa: ['葡萄皮', '白花', '杏仁', '香草植物', '梨', '橡木'],
  bd_other_brandy: ['葡萄乾', '香草', '焦糖', '香料', '花香', '堅果', '橡木'],
  bd_other: ['果香', '花香', '香料', '橡木', '堅果']
}

export const TASTE_TAGS_BY_TYPE = {
  bd_cognac: ['細緻', '圓潤', '酒體飽滿', '悠長尾韻', '酒精感明顯'],
  bd_armagnac: ['濃郁', '酒體飽滿', '酒精感明顯', '複雜', '悠長尾韻'],
  bd_jerez: ['圓潤', '微甜', '酒體飽滿', '悠長尾韻'],
  bd_pisco: ['清爽', '芳香', '酒精感明顯', '乾淨'],
  bd_grappa: ['乾淨', '辛辣', '酒精感明顯', '悠長尾韻'],
  bd_other_brandy: ['圓潤', '微甜', '酒精感明顯', '悠長尾韻'],
  bd_other: ['平衡', '優雅', '複雜', '飽滿']
}

const hints5 = {
  low: ['很低', '低', '中等', '高', '很高'],
  body: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'],
  finish: ['短促', '尚可', '中等', '悠長', '極長'],
  sweet: ['微甜', '中甜', '甜', '很甜', '極甜']
}
// 欄位 key 沿用資料表的 tannin／acidity／body／finish，這裡的標籤改成白蘭地常用的四個構面
const STRUCT_AGED = [
  { key: 'tannin',  label: '橡木感',   hints: hints5.low },
  { key: 'acidity', label: '酒精感',   hints: hints5.low },
  { key: 'body',    label: '酒體',     hints: hints5.body },
  { key: 'finish',  label: '尾韻',     hints: hints5.finish }
]
const STRUCT_CLEAR = [
  { key: 'tannin',  label: '芳香強度', hints: hints5.low },
  { key: 'acidity', label: '酒精感',   hints: hints5.low },
  { key: 'body',    label: '酒體',     hints: hints5.body },
  { key: 'finish',  label: '尾韻',     hints: hints5.finish }
]

export const STRUCTURE_BY_TYPE = {
  bd_cognac: STRUCT_AGED,
  bd_armagnac: STRUCT_AGED,
  bd_jerez: STRUCT_AGED,
  bd_pisco: STRUCT_CLEAR,
  bd_grappa: STRUCT_CLEAR,
  bd_other_brandy: STRUCT_AGED,
  bd_other: STRUCT_AGED
}
