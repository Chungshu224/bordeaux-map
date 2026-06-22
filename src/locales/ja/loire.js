// ロワール渓谷コース — 日本語
export default {
  selector: {
    breadcrumb: 'フランス・ロワール渓谷',
    tagline: 'ロワール渓谷・フランスの庭・五大サブリージョン',
    title: 'ロワール渓谷ワイン',
    subtitle: 'Loire Valley · Sancerre · Vouvray · Muscadet · Chinon',
    description: 'ナントのヨード香漂うミュスカデから、アンジュのシュナン・ブランとトゥーレーヌのスパークリング、そして中央産地サンセール双璧まで——フランス最多様なワイン渓谷を制覇。',
    stats: {
      subregions: 'サブリージョン',
      aoc: 'AOC 原産地呼称',
      varieties: '主要品種'
    },
    levelTrackTitle: 'コースステージを選択',
    levelTrackSubtitle: '4ステージで西から東へロワール渓谷各産地を旅する。',
    unlockHint: 'Level {prev} 完了後に解放',
    progress: {
      start: 'ロワール渓谷の旅を始める',
      complete: '🎉 ロワール渓谷のすべてのAOCを制覇！',
      inProgress: '{done} / {total} レッスン修了',
      currentStage: '現在のステージ：{title}',
      continue: 'Level {n} を続ける',
      begin: 'Level {n} を始める',
      restart: '最初からやり直す'
    }
  },
  layout: {
    lockHint: 'Level {prev} 総合評価合格で解放',
    chapterToggle: '≡ チャプター',
    sidebarTitle: 'チャプター一覧',
    drawerTitle: 'チャプターナビ',
    lessonsComplete: '{done}/{total} レッスン修了',
    motivation: '🎯 あと {remaining} レッスンでこのステージ完了！',
    tagDone: '完了',
    tagStart: '開始 ▶',
    minutes: '分'
  },
  levels: {
    1: {
      title: 'Level 1 — 大西洋の爽やかさ',
      region: 'ナンテ',
      description: '大西洋の玄関口——ヨード香る海風と鉱物的張力。ミュスカデ王国、シュール・リー技法と魚介料理とのペアリング術。'
    },
    2: {
      title: 'Level 2 — 石灰岩のシャトー',
      region: 'アンジュー・ソミュール + トゥーレーヌ（赤）',
      description: 'トゥフォー凝灰岩と気候の移行帯——カベルネ・フランの多様な表現、アンジューのロゼからシノンまで、トゥーレーヌ赤ワイン全景。'
    },
    3: {
      title: 'Level 3 — シュナン・ブランと燧石',
      region: 'アンジュー・ソミュール（白）+ トゥーレーヌ（白）+ セントル',
      description: '辛口から極甘口まで、シュナン・ブランの醸造技術全スペクトル。さらに燧石土壌のサンセールとプイィ・フュメのソーヴィニョン・ブラン双璧。'
    },
    4: {
      title: 'Level 4 — プロフェッショナル実務',
      region: 'マシフ・サントラル + 産地横断',
      description: 'オーヴェルニュの火山性土壌精品ワイン、インタラクティブマップ実践、気候変動分析、垂直テイスティング、高級料理とのペアリング設計。'
    }
  },
  modules: {
    LO1M1: 'ロワール渓谷概観とナンテの地理',
    LO1M2: 'ミュスカデ深掘り',
    LO1M3: 'テイスティング実習と Level 1 評価',
    LO2M1: 'アンジュー・ソミュール赤ワイン群',
    LO2M2: 'トゥーレーヌ カベルネ・フラン王国',
    LO2M3: 'テイスティング実習と Level 2 評価',
    LO3M1: 'アンジュー シュナン・ブランの技法',
    LO3M2: 'トゥーレーヌ白ワイン全景',
    LO3M3: '中央産地 燧石の双璧',
    LO4M1: 'マシフ・サントラル 火山性精品',
    LO4M2: '高度な技術と戦略',
    LO4M3: 'プロフェッショナル実務とマスター評価'
  },
  lessons: {
    'lo-l1-1': { title: 'ロワール渓谷概観', duration: 15 },
    'lo-l1-2': { title: 'ロワール渓谷の地理と気候', duration: 18 },
    'lo-l1-3': { title: 'ペイ・ナンテ産地概論', duration: 20 },
    'lo-l1-4': { title: 'ミュスカデファミリー——4 AOC 比較', duration: 18 },
    'lo-l1-5': { title: '片岩土壌と海洋性気候 感覚トレーニング', duration: 20 },
    'lo-l1-6': { title: 'ミュスカデ × カキ・貝類——高酸度フードペアリング', duration: 18 },
    'lo-l1-7': { title: 'Level 1 総合評価', duration: 25 },
    'lo-l2-1': { title: 'トゥフォーの地質と気候移行帯', duration: 15 },
    'lo-l2-2': { title: 'アンジュー赤の三兄弟とソミュール', duration: 20 },
    'lo-l2-3': { title: 'アンジュー ロゼのスペクトルとオー・ポワトゥー', duration: 18 },
    'lo-l2-4': { title: 'シノン——カベルネ・フランの故郷', duration: 22 },
    'lo-l2-5': { title: 'トゥーレーヌ赤ワイン産地全景', duration: 18 },
    'lo-l2-6': { title: 'トゥーレーヌ支流の赤ワイン', duration: 18 },
    'lo-l2-7': { title: 'ステンレスタンク vs 木樽 カベルネ・フラン テイスティング', duration: 20 },
    'lo-l2-8': { title: 'シノン × リエット フードペアリング', duration: 22 },
    'lo-l2-9': { title: 'Level 2 総合評価', duration: 20 },
    'lo-l3-1': { title: 'シュナン・ブラン入門——アンジュー辛口白とソミュール', duration: 16 },
    'lo-l3-2': { title: 'サヴニエール三部作', duration: 20 },
    'lo-l3-3': { title: 'レイヨン川 貴腐甘口ワインのピラミッド', duration: 22 },
    'lo-l3-4': { title: 'グランクリュ甘口——カール・ド・ショームとボンヌゾー', duration: 22 },
    'lo-l3-5': { title: 'クレマン・ド・ロワールとソミュール スパークリング', duration: 18 },
    'lo-l3-6': { title: 'ヴーヴレイ——辛口から貴腐まで全スペクトル', duration: 20 },
    'lo-l3-7': { title: 'トゥーレーヌ白ワイン四隅', duration: 18 },
    'lo-l3-8': { title: 'ロワール川支流の白ワイン', duration: 18 },
    'lo-l3-9': { title: '中央産地の双璧——サンセール & プイィ・フュメ', duration: 22 },
    'lo-l3-10': { title: '中央産地の隠れた銘品', duration: 20 },
    'lo-l3-11': { title: 'ヴーヴレイ甘口 × チーズ；サンセール × ヤギのチーズ', duration: 22 },
    'lo-l3-12': { title: 'Level 3 総合評価', duration: 20 },
    'lo-l4-1': { title: 'コート・ドーヴェルニュ——火山性土壌の精品', duration: 20 },
    'lo-l4-2': { title: 'インタラクティブマップ実践——GeoJSON ビジュアライゼーション', duration: 25 },
    'lo-l4-3': { title: '気候変動——収穫時期とアルコール度数の分析', duration: 22 },
    'lo-l4-4': { title: '垂直テイスティング——熟成ポテンシャルの読み解き', duration: 25 },
    'lo-l4-5': { title: 'ブラインドテイスティング診断——土壌の違い', duration: 25 },
    'lo-l4-6': { title: '高級料理設計 + アジア料理ペアリング', duration: 28 },
    'lo-l4-7': { title: 'Level 4 マスター評価', duration: 30 }
  }
}
