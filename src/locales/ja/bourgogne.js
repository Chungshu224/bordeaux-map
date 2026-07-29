/**
 * ブルゴーニュコース翻訳（日本語）
 * - selector: LevelSelector ホームページ文字
 * - levels:   Level 1–4 タイトルと説明
 */
export default {
  selector: {
    breadcrumbCountry: 'フランス・ブルゴーニュ',
    tagline: 'ブルゴーニュ・Climats・1,247 のテロワール区画',
    title: 'ブルゴーニュワイン',
    subtitle: 'Bourgogne · Pinot Noir · Chardonnay · Climats',
    description: 'コート・ドール中心部からシャブリ、マコネ、ボジョレーまで——Climats テロワールシステムを通じて世界最複雑なワインのパズルを解き明かす。',
    levelTrackTitle: 'コースレベルを選択',
    levelTrackSubtitle: '4 段階——基礎入門から Climats エキスパート認定まで。',
    heroStats: {
      aocs: 'AOCs',
      climats: 'Climats',
      stages: 'レベル',
    },
    progress: {
      start: 'ブルゴーニュ Climats の旅を始めよう',
      complete: '🎉 全ブルゴーニュコース修了',
      done: '{done} / 4 ステージ完了',
      currentStage: '現在のステージ：{name}',
      restart: '再探索する',
      continueLevel: 'Level {n} を続ける',
      startLevel: 'Level {n} を始める',
    },
    quickNav: {
      mapDesc: 'Climats テロワールマップ',
      progressDesc: '{pct}% 完了・{done}/4 ステージ',
    },
    unlockHint: {
      level2: 'ステージ 1 を 100% 完了後に解放',
      level3: 'ステージ 2 で 85% 以上達成後に解放',
      level4: 'ステージ 3 で 85% 以上達成後に解放',
    },
  },

  layout: {
    chapterOverview: 'チャプター一覧',
    chapterDrawer: 'チャプターナビ',
    chapterToggle: '≡ チャプター',
    completedLabel: '{done}/{total} レッスン完了',
    motivation: '🎯 あと {n} レッスンでこのステージ完了！',
    moduleDone: '完了',
    tagDone: '完了',
    tagStart: '開始 ▶',
    progressTitle: '全体進捗',    courseIntro: 'コース導入',
    introFallback: 'このレッスンでは{title}の各方面を深く探究し、確実な知識基盤を構築します。',
    finalExam: '📋 総合評価',
    regionMap: '産地マップ',
    slidePage: 'ページ {n} / {total}',  },

  modulesL1: {
    'm1': { title: 'ブルゴーニュへの入門', duration: '50分' },
    'm2': { title: 'テロワールとブドウ品種', duration: '40分' },
    'm3': { title: 'コート・ド・ニュイ探索', duration: '57分' },
    'm4': { title: 'コート・ド・ボーヌ探索', duration: '52分' },
    'm5': { title: 'シャブリの深掘り', duration: '50分' },
    'm6': { title: 'ボジョレー入門', duration: '45分' },
    'm7': { title: 'コート・シャロネーズとマコネ', duration: '40分' },
    'm8': { title: 'ヴィンテージと名門ドメーヌ', duration: '45分' },
    'm9': { title: 'L1 総合評価', duration: '25分' },
  },

  modulesL2: {
    'm1': { title: 'コート・ド・ニュイ産地深掘り解析', duration: '90分' },
    'm2': { title: 'コート・ド・ボーヌ白ワインの聖地', duration: '85分' },
    'm3': { title: 'テロワールと土壌科学', duration: '70分' },
    'm4': { title: 'グラン・クリュ完全ガイド', duration: '100分' },
    'm5': { title: 'プルミエ・クリュ精選分析', duration: '80分' },
    'm6': { title: '気候とヴィンテージの読み解き', duration: '60分' },
    'm7': { title: '上級テイスティング技術', duration: '75分' },
    'm8': { title: 'ドメーヌと醸造家', duration: '65分' },
    'm9': { title: 'L2 総合評価', duration: '30分' },
  },

  modulesL3: {
    'm1': { title: 'トップテロワール深掘り解析', duration: '100分' },
    'm2': { title: '名門ドメーヌ研究', duration: '110分' },
    'm3': { title: '気候とヴィンテージの専門分析', duration: '90分' },
    'm4': { title: '土壌地質科学', duration: '85分' },
    'm5': { title: '醸造技術の上級編', duration: '95分' },
    'm6': { title: 'グラン・クリュ区画比較', duration: '105分' },
    'm7': { title: '市場投資分析', duration: '80分' },
    'm8': { title: 'コレクションとストレージの専門知識', duration: '70分' },
    'm9': { title: '専門ブラインドテイスティング訓練', duration: '100分' },
    'm10': { title: 'フードペアリングの芸術', duration: '75分' },
    'm11': { title: 'ビオディナミ農法研究', duration: '85分' },
    'm12': { title: '気候変動と未来', duration: '80分' },
    'm13': { title: 'オークションと取引実務', duration: '70分' },
    'm14': { title: '専門テイスティングレポート執筆', duration: '75分' },
    'm15': { title: '総合ケーススタディ', duration: '90分' },
    'm16': { title: 'L3 総合評価', duration: '35分' },
  },

  modulesL4: {
    'm1': { title: 'ブルゴーニュの歴史と文化的遺産', duration: '90分', description: 'ローマ時代から現代まで、ブルゴーニュワイン千年の歴史と文化的影響を探求する。' },
    'm2': { title: '世界トップ・ピノ・ノワール比較研究', duration: '105分', description: 'ブルゴーニュ vs ニュージーランド vs オレゴン vs ドイツ — スタイル分析とブラインドテイスティング訓練。' },
    'm3': { title: 'ソムリエ専門技術訓練', duration: '120分', description: 'プロのワインサービス、フードペアリング設計、ワインリスト構築、セラー管理実務。' },
    'm4': { title: 'ワイン教育と指導法', duration: '95分', description: '指導法設計、カリキュラム計画、テイスティングイベント主催、認定試験準備技術。' },
    'm5': { title: 'ビジネスケースと市場戦略', duration: '110分', description: 'ワイン商ビジネスモデル、ブランド戦略、価格分析、消費者心理学。' },
    'm6': { title: '国際貿易・輸出入実務', duration: '85分', description: '輸入手続き、関税法規、物流管理、国際ワインフェア参加戦略。' },
    'm7': { title: 'ワイナリー経営と起業管理', duration: '100分', description: '財務計画、ブランド構築、持続可能認定、人事管理。' },
    'm8': { title: '専門論文と総合評価', duration: '125分', description: '論文執筆、総合ブラインドテイスティング、口頭試問シミュレーション、最終評価準備。' },
    'm9': { title: 'L4 総合評価', duration: '35分', description: 'Level 4 全内容をカバーする最終試験。80点以上でブルゴーニュ・マスター課程修了。' },
  },

  levels: {
    1: {
      title: '基礎入門',
      subtitle: 'Level 1',
      description: 'ブルゴーニュワインの基礎：地理環境、主要品種、産地格付制度を習得する。',
      tags: ['地理とテロワール', '主要品種', 'コート・ドールの特徴', 'テイスティング基礎'],
    },
    2: {
      title: '中級進階',
      subtitle: 'Level 2',
      description: '5 大産地の特性と代表的なワインを深く知り、テイスティング分析スキルを習得する。',
      tags: ['コート・ド・ニュイ & コート・ド・ボーヌ', 'グラン・クリュ & プルミエ・クリュ', '村名クラスのスタイル差', 'テイスティングとコレクション'],
    },
    3: {
      title: '高級専業',
      subtitle: 'Level 3',
      description: 'トップテロワールの差異と著名ドメーヌ、ヴィンテージ気候、マーケットトレンドを深く理解する。',
      tags: ['テロワール深掘り', '土壌科学研究', '最高醸造技術', '市場・投資分析'],
    },
    4: {
      title: '専家認証',
      subtitle: 'Level 4',
      description: 'プロレベルの分析とビジネス評価能力を養成し、ブルゴーニュワイン専門コンサルタントを目指す。',
      tags: ['学術論文研究', 'ビジネスケース分析', '業界トレンド分析', '国際市場戦略'],
    },
  },
}
