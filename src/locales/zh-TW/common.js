/**
 * 通用 UI 文字（按鈕、選單、狀態）
 * 規則：
 * - 此檔為「中文事實來源」，請只在此修改中文。
 * - 對應翻譯檔位於 src/locales/{locale}/common.json
 * - 未來新增 key 時請先加在這裡，再執行 `npm run i18n:translate` 同步其他語言
 */
export default {
  // ── 動作按鈕 ──────────────────────────────────────
  actions: {
    next: '下一頁',
    prev: '上一頁',
    back: '返回',
    close: '關閉',
    save: '儲存',
    cancel: '取消',
    delete: '刪除',
    edit: '編輯',
    add: '新增',
    confirm: '確認',
    search: '搜尋',
    loading: '載入中…',
    submit: '送出',
    finish: '完成課程',
    retry: '重試',
    expand: '展開',
    collapse: '收合',
    loadMore: '顯示更多',
    clear: '清除',
  },

  // ── 通用標籤 ──────────────────────────────────────
  labels: {
    region: '產區',
    category: '類別',
    grape: '品種',
    appellation: '產區法規',
    winemaking: '釀造',
    tasting: '品飲',
    map: '地圖',
    progress: '學習進度',
    achievements: '成就',
    notebook: '品酒筆記',
    glossary: '葡萄酒辭典',
    games: '遊戲',
    quiz: '測驗',
    settings: '設定',
    language: '語言',
  },

  // ── 狀態訊息 ──────────────────────────────────────
  states: {
    empty: '沒有資料',
    error: '發生錯誤',
    success: '成功',
    saved: '已儲存',
    loading: '載入中…',
    noResults: '沒有符合的結果',
  },

  // ── 葡萄酒產區名稱（11 個） ──────────────────────
  regions: {
    bordeaux:   '波爾多',
    bourgogne:  '布根地',
    italy:      '義大利',
    spain:      '西班牙',
    portugal:   '葡萄牙',
    germany:    '德國',
    hungary:    '匈牙利',
    loire:      '羅亞爾河谷',
    california: '加州',
    australia:  '澳洲',
    newzealand: '紐西蘭',
  },

  // ── 辭典專用 ──────────────────────────────────────
  glossary: {
    fabTitle: '三語名詞辭典',
    fabLabel: '辭典',
    titleSuffix: '葡萄酒辭典',
    langsBase: '中文 · English',
    searchPlaceholder: '搜尋中文、英文或 {lang3} 名詞…',
    searchPlaceholderBilingual: '搜尋中文或英文名詞…',
    notFound: '找不到「{q}」的相關名詞',
    totalCount: '共 {n} 筆 · 管理員可在後台新增詞條',
    noData: '尚無此產區的辭典資料',
    cats: {
      all:         '全部',
      grape:       '🍇 品種',
      region:      '🗺️ 產區',
      winemaking:  '🍾 釀造',
      tasting:     '👃 品飲',
      appellation: '📜 法規',
      general:     '📌 一般',
    },
    catShort: {
      grape:       '品種',
      region:      '產區',
      winemaking:  '釀造',
      tasting:     '品飲',
      appellation: '法規',
      general:     '一般',
    },
  },

  // ── 語言名稱（每個語系檔自我命名） ──────────────
  langName: '繁體中文',
}
