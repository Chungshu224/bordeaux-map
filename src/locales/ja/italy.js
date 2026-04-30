/**
 * イタリアコース翻訳（日本語）
 */
export default {
  selector: {
    breadcrumbCountry: 'ヨーロッパ・南ヨーロッパ',
    tagline: 'イタリアワイン・20 州・地中海テロワール',
    title: 'イタリアワイン',
    subtitle: 'Italian Wine · DOCG · Nebbiolo · Sangiovese · Sicilia',
    description: 'DOCG 格付制度から南北 20 州、Barolo と Brunello の偉大さ、Etna 火山と Sicilia の新潮流まで——イタリアワインを体系的にマスターしよう。',
    levelTrackTitle: 'コースレベルを選択',
    levelTrackSubtitle: '入門から専門家認定まで、20 産地とイタリアワインの多様性を順番に習得。',
    heroStats: {
      regions: '州',
      docg: 'DOCG 産地',
      varieties: '在来品種',
    },
    progress: {
      start: 'イタリアワインの旅を始めよう',
      complete: '🎉 全コース修了——イタリアワインの達人、おめでとうございます！',
      progressText: '{done} / {total} レッスン完了',
      continueLevel2: 'Level 2 を続ける',
      continueLevel1: 'Level 1 を続ける',
      startBtn: '学習開始',
      currentStageL1: '現在のステージ：Level 1 · 基礎',
      currentStageL2: '現在のステージ：Level 2 · 応用探求',
      currentStageL3: '現在のステージ：Level 3 · 専門家認定',
    },
    quickNav: {
      progressDesc: '{pct}% 完了・{done} レッスン',
    },
    unlockHint: {
      level2: 'Level 1 修了後に解放',
      level3: 'Level 2 修了後に解放',
    },
  },

  layout: {
    chapterOverview: 'チャプター一覧',
    chapterDrawer: 'チャプターナビ',
    chapterToggle: '≡ チャプター',
    completedLabel: '{done}/{total} レッスン完了',
    motivation: '🎯 あと {n} レッスンでこのステージ完了！',
    moduleCount: '{done}/{total} 完了',
    tagDone: '完了',
    tagStart: '開始 ▶',
  },

  levels: {
    1: {
      title: 'Level 1 — イタリアワイン入門',
      subtitle: '基礎知識を身につけ、定番産地を探索',
      shortTitle: 'IT 入門',
      shortSubtitle: '基礎知識',
      description: 'DOCG/DOC/IGT 格付、20 州、主要 5 品種、フードペアリングの基礎を習得。',
      tags: ['DOCG/DOC/IGT', '20 州', '主要 5 品種', 'Sangiovese', 'Italy 101'],
      unlockHint: 'Level 1 修了後に解放',
    },
    2: {
      title: 'Level 2 — イタリアワイン応用',
      subtitle: '全国産地を深掘り、フードペアリングをマスター',
      shortTitle: 'IT 応用',
      shortSubtitle: '産地の深掘り',
      description: '南北の違い、Barolo / Brunello / Etna、Nebbiolo・Aglianico 等の上級品種を探求。',
      tags: ['北イタリア Barolo', 'Toscana Brunello', '南イタリア・島', 'Nebbiolo', 'Etna'],
      unlockHint: 'Level 1 修了後に解放',
    },
    3: {
      title: 'Level 3 — イタリアワイン専門家',
      subtitle: 'マスターレベルの知識・ブラインドテイスティング・業界の深み',
      shortTitle: 'IT エキスパート',
      shortSubtitle: 'ブラインド & サービス',
      description: '体系的なブラインドテイスティング、希少品種、ソムリエ実務、サステナビリティとナチュラルワイン。',
      tags: ['ブラインドテイスティング', '希少品種', 'ソムリエ実務', 'ナチュラルワイン', 'サステナビリティ'],
      unlockHint: 'Level 2 修了後に解放',
    },
  },

  modules: {
    // Level 1
    L1M1: '第 1 章：イタリアワインの基礎',
    L1M2: '第 2 章：必修 5 産地',
    L1M3: '第 3 章：基礎品種入門',
    L1M4: '第 4 章：フードペアリング基礎',
    L1M5: '第 5 章：Level 1 総合テスト',
    // Level 2
    L2M1: '第 1 章：北イタリア産地概観',
    L2M2: '第 2 章：中イタリア深掘り',
    L2M3: '第 3 章：南イタリアと島嶼部',
    L2M4: '第 4 章：上級品種研究',
    L2M5: '第 5 章：投資とコレクション',
    L2M6: '第 6 章：Level 2 総合テスト',
    // Level 3
    L3M1: '第 1 章：希少品種と小産地',
    L3M2: '第 2 章：専門家向けラベル解読',
    L3M3: '第 3 章：ヴィンテージと熟成',
    L3M4: '第 4 章：ブラインドテイスティング訓練',
    L3M5: '第 5 章：業界とマーケット',
    L3M6: '第 6 章：ソムリエ実務',
    L3M7: '第 7 章：フードペアリング実践',
    L3M8: '第 8 章：Level 3 総合テスト',
  },

  lessons: {
    // Level 1 - Module 1
    L1M1L1: 'イタリアワイン概論',
    L1M1L2: 'イタリア格付制度 (DOCG/DOC/IGT)',
    L1M1L3: 'イタリアの地理と気候',
    // Level 1 - Module 2
    L1M2L1: 'Piemonte — イタリアの王',
    L1M2L2: 'Tuscany — クラシックの美',
    L1M2L3: 'Veneto — 水の都',
    L1M2L4: 'Sicily — 火山の島',
    L1M2L5: 'Lombardy — 泡の故郷',
    // Level 1 - Module 3
    L1M3L1: '主要赤ワイン品種 5 種',
    L1M3L2: '主要白ワイン品種 5 種',
    // Level 1 - Module 4 / 5
    L1M4L1: 'イタリア料理とワインの入門',
    L1M4L2: 'Level 1 総合テスト',
    // Level 2 - Module 1
    L2M1L1: 'Trentino-Alto Adige',
    L2M1L2: 'Friuli Venezia Giulia',
    L2M1L3: 'Liguria',
    L2M1L4: 'Emilia-Romagna',
    // Level 2 - Module 2
    L2M2L1: 'Marche',
    L2M2L2: 'Umbria',
    L2M2L3: 'Lazio',
    L2M2L4: 'Abruzzo',
    L2M2L5: 'Molise',
    // Level 2 - Module 3
    L2M3L1: 'Campania',
    L2M3L2: 'Puglia',
    L2M3L3: 'Basilicata',
    L2M3L4: 'Calabria',
    L2M3L5: 'Sardinia',
    // Level 2 - Module 4
    L2M4L1: 'Nebbiolo: 深掘り',
    L2M4L2: 'Sangiovese: 深掘り',
    L2M4L3: '南イタリアの在来品種',
    L2M4L4: '上級白ワイン品種',
    // Level 2 - Module 5
    L2M5L1: 'イタリア高級ワイン投資ガイド',
    L2M5L2: 'ヴィンテージ評価とコレクション戦略',
    L2M5L3: '国際市場とオークション',
    L2FinalExam: 'Level 2 総合テスト',
    // Level 3 - Module 1
    L3M1L1: "Valle d'Aosta",
    L3M1L2: '北イタリアの希少品種',
    L3M1L3: '南イタリアの希少・在来品種',
    L3M1L4: 'Friuli 白ワイン革命',
    // Level 3 - Module 2
    L3M2L1: 'DOCG ラベル詳細解説',
    L3M2L2: 'ヴィンテージと生産者情報',
    L3M2L3: '偽造ラベル識別テクニック',
    L3M2L4: 'IGT スーパートスカーナガイド',
    // Level 3 - Module 3
    L3M3L1: 'イタリアヴィンテージガイド',
    L3M3L2: '熟成条件とセラー管理',
    L3M3L3: '飲み頃の判断',
    L3M3L4: '投資向きヴィンテージ分析',
    // Level 3 - Module 4
    L3M4L1: '体系的なブラインドテイスティング方法論',
    L3M4L2: '品種識別テクニック',
    L3M4L3: '産地テロワール識別',
    L3M4L4: 'ヴィンテージ識別法',
    L3M4L5: 'ブラインドテイスティング実践演習',
    // Level 3 - Module 5
    L3M5L1: 'イタリアワイン業界の構造',
    L3M5L2: '輸出市場分析',
    L3M5L3: 'サステナブル農業とナチュラルワイン',
    L3M5L4: '将来のトレンドと気候変動',
    // Level 3 - Module 6
    L3M6L1: '高度なフードペアリング理論',
    L3M6L2: '古酒のデカンタージュとサービス術',
    L3M6L3: 'ワインリスト作成と在庫管理',
    // Level 3 - Module 7
    L3M7L1: 'ペアリング哲学：南北の違い完全攻略',
    L3M7L2: '特別なワイン：スパークリング・甘口・フォーティファイド',
    L3M7L3: 'ソムリエ実務：温度・開栓・デカンタージュ・サービス',
    L3M7L4: 'フードペアリング実践：コースメニューのワインリスト設計',
    L3FinalExam: 'Level 3 総合テスト',
  },

  games: {
    hub: {
      title: 'イタリアインタラクティブ練習',
      subtitle: 'イタリアワインチャレンジ · 知識をテストしよう',
      stats: {
        played: 'プレイ済みゲーム',
        total: '全ゲーム',
        best: '累計最高スコア',
      },
    },
    region: {
      name: '産地当てクイズ',
      desc: 'DOCG / DOC 名が与えられたら、所属するイタリアの州を素早く選ぼう',
      tags: ['地理', '易 / 難', '10〜15 問'],
    },
    classification: {
      name: '格付け識別クイズ',
      desc: 'このイタリア法定産地は DOCG？DOC？IGT？記憶力を試そう',
      tags: ['格付け制度', 'クイック回答', '10〜20 問'],
    },
    grape: {
      name: '品種 × 産地マッチング',
      desc: 'イタリアのブドウ品種が出題されたら、最も有名な産地や DOCG を素早く選ぼう',
      tags: ['品種', 'マッチング', '易 / 難'],
    },
    vintage: {
      name: 'ヴィンテージ品質ランキング',
      desc: 'イタリアの重要ヴィンテージを最高から最低まで品質順に並べよう（Toscana または Piemonte）',
      tags: ['ヴィンテージ', 'ランキング', '5 ラウンド'],
    },
    desc: {
      name: 'アロマ描写クイズ',
      desc: 'ワインスタイルの描写を読んで、該当するイタリアの有名ワインを当てよう',
      tags: ['テイスティング', '描写', '10〜15 問'],
    },
  },

  manager: {
    toastTitle: 'アチーブメント解放！',
    modalTitle: '🏆 イタリアワイン・アチーブメントシステム',
    points: '+{n} ポイント',
  },
}
