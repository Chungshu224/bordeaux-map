// Generate JA locale overlay for advanced-m2 through m15

const fs = require('fs');
const path = require('path');

const BASE = 'c:/Users/Chungshu/Desktop/教學網站製作20260220/Bordeaux Wine Learning';

const moduleMeta = {
  2: {
    title: "名門ドメーヌ研究",
    description: "DRC、ルロワ、ルソーなどブルゴーニュ最高峰のドメーヌの歴史・哲学・醸造哲学を探求する",
    lessons: [
      "ドメーヌ・ド・ラ・ロマネ・コンティ（DRC）",
      "ドメーヌ・ルロワ",
      "ドメーヌ・アルマン・ルソー",
      "ドメーヌ・コシュ・デュリ（白ワインの王）",
      "ドメーヌ・コント・ジョルジュ・ド・ヴォギュエ",
      "新世代の名門：デュジャック、メオ・カミュゼ",
      "醸造哲学の比較とブラインド・テイスティング"
    ]
  },
  3: {
    title: "ヴィンテージ専門分析",
    description: "ブルゴーニュのヴィンテージ評価の技術と科学をマスターする——生育期分析から専門的ヴィンテージ比較、投資判断まで",
    lessons: [
      "ヴィンテージ評価の科学的手法",
      "古典的偉大ヴィンテージの解析（1945–2000）",
      "21世紀のヴィンテージ全解析（2000–2024）",
      "飲み頃窓の予測",
      "ヴィンテージ購入と投資戦略"
    ]
  },
  4: {
    title: "土壌・地質科学",
    description: "ブルゴーニュの土壌組成・地質的起源を科学的に探求し、ペドロジー（土壌科学）がテロワール表現をいかに形成するかを理解する",
    lessons: [
      "ジュラ紀地質時代の解析",
      "シャブリとキメリジアンの奇跡",
      "コート・ド・ニュイとコート・ド・ボーヌの土壌差",
      "微量元素と風味表現",
      "土壌分析と区画選択"
    ]
  },
  5: {
    title: "高度な醸造技術",
    description: "ブルゴーニュの最高のワインを形作る重要な醸造決断を高度に学ぶ——発酵管理からエルバージュ哲学まで",
    lessons: [
      "全房発酵の芸術と科学",
      "樽熟成の学問",
      "澱熟成とバトナージュ技術",
      "マロラクティック発酵と酸度管理",
      "マセレーションと抽出技術",
      "濾過・清澄・瓶詰め"
    ]
  },
  6: {
    title: "グラン・クリュ区画比較",
    description: "ブルゴーニュ最高峰のグラン・クリュ区画を系統的に比較——最高のクリマが何故他より優れているかを理解する",
    lessons: [
      "クロ・ド・ヴージョ：50ヘクタールの多様性",
      "シャンベルタン一族：8兄弟",
      "コルトン：赤白両立のグラン・クリュ",
      "モンラッシェ一族：5兄弟",
      "ミュジニー vs ボンヌ・マール",
      "グラン・クリュ投資価値比較"
    ]
  },
  7: {
    title: "市場・投資分析",
    description: "ブルゴーニュ・ファインワイン市場のプロ分析——価格動態・投資リターン・オークション戦略・需要を動かす力",
    lessons: [
      "ブルゴーニュ・ファインワイン市場概況",
      "オークション市場価格分析",
      "ポートフォリオ戦略",
      "先物市場とアロケーション・システム",
      "リスク管理と出口戦略"
    ]
  },
  8: {
    title: "プロのコレクション・保存",
    description: "真剣なブルゴーニュ・コレクションの構築と管理——セラー設計・最適保存条件・来歴確認・コレクション戦略",
    lessons: [
      "プロのセラー設計原則",
      "保存条件とボトル・コンディション管理",
      "来歴鑑定と偽ワイン検出",
      "コレクション保険とリスク管理"
    ]
  },
  9: {
    title: "プロのブラインド・テイスティング",
    description: "ブルゴーニュのブラインド識別のための系統的方法論——分析的語彙・構造評価・産地ロジックの開発",
    lessons: [
      "系統的ブラインド・テイスティング方法論",
      "村の特徴識別",
      "ヴィンテージ識別技術",
      "生産者スタイル認識",
      "熟成段階の判断",
      "プロのテイスティングノート執筆"
    ]
  },
  10: {
    title: "高度なフード＆ワイン・ペアリング",
    description: "ブルゴーニュ・ワインと料理のペアリングの芸術と科学——フランス料理の古典的ペアリングから現代料理・和食まで",
    lessons: [
      "フード＆ワイン・ペアリングの科学的原理",
      "ブルゴーニュとフランス料理の古典的ペアリング",
      "アジア料理との革新的ペアリング",
      "ミシュラン・レストランのケーススタディ"
    ]
  },
  11: {
    title: "ビオディナミの深層解析",
    description: "ビオディナミ農法の厳密な検討——哲学的起源・科学的メカニズム（またはその欠如）・実際の応用・ワイン品質への影響",
    lessons: [
      "ビオディナミ哲学の基礎",
      "ビオディナミ調合物と実践",
      "月のリズムと宇宙のリズム",
      "DRCとルロワ：詳細ケーススタディ",
      "科学的論争と実証研究"
    ]
  },
  12: {
    title: "気候変動影響研究",
    description: "地球温暖化がブルゴーニュをどう変えているか——早まる収穫と高いアルコール度数から、新たな産地の機会と古典テロワール表現への脅威まで",
    lessons: [
      "ブルゴーニュ気候変動データ分析",
      "収穫期の早期化と熟度の課題",
      "ドメーヌの適応戦略と革新",
      "区画価値の再評価と新機会",
      "2050年のブルゴーニュ予測"
    ]
  },
  13: {
    title: "オークション・取引実務",
    description: "オークションや二次市場でファイン・ブルゴーニュを売買するプロ向けガイド——評価・状態確認・来歴・戦略",
    lessons: [
      "国際オークションハウス紹介",
      "オークションの流れとルール",
      "価格評価と市場分析",
      "入札戦略とリスク管理"
    ]
  },
  14: {
    title: "専門テイスティングノート執筆",
    description: "プロのブルゴーニュ・テイスティングノート執筆の技法——構造的評価・語彙から各種読者向け出版可能なノートまで",
    lessons: [
      "専門テイスティング用語",
      "採点システムの比較",
      "テイスティングノートの構造",
      "実践演習"
    ]
  },
  15: {
    title: "総合ケーススタディ",
    description: "詳細なケーススタディを通じてブルゴーニュ高度知識を総合的に適用——テイスティング縦断・生産者プロフィール・ヴィンテージ比較・投資シナリオ",
    lessons: [
      "ケース1：ドメーヌ訪問の計画",
      "ケース2：コレクション・ポートフォリオの構築",
      "ケース3：レストラン・ワインリストのデザイン",
      "Level 3 総合復習",
      "認定試験の準備"
    ]
  }
};

for (let m = 2; m <= 15; m++) {
  const src = JSON.parse(fs.readFileSync(`${BASE}/public/bourgogne/data/courses/level3/advanced-m${m}.json`));
  const meta = moduleMeta[m];
  const flat = { title: meta.title, description: meta.description };
  
  src.lessons.forEach((lesson, i) => {
    flat[`lessons.${i}.title`] = meta.lessons[i] || lesson.title;
    lesson.slides.forEach((slide, j) => {
      if (slide.title) {
        let t = slide.title;
        if (j === 0) t = meta.lessons[i] || slide.title; // first slide title = lesson title
        flat[`lessons.${i}.slides.${j}.title`] = t;
      }
      if (slide.subtitle) flat[`lessons.${i}.slides.${j}.subtitle`] = slide.subtitle.replace(/(\d+)分鐘/, '$1分');
      if (slide.description) flat[`lessons.${i}.slides.${j}.description`] = slide.description;
      if (slide.content) flat[`lessons.${i}.slides.${j}.content`] = slide.content;
      if (slide.leftTitle) flat[`lessons.${i}.slides.${j}.leftTitle`] = slide.leftTitle;
      if (slide.rightTitle) flat[`lessons.${i}.slides.${j}.rightTitle`] = slide.rightTitle;
      if (Array.isArray(slide.points)) slide.points.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.points.${k}`] = p; });
      if (Array.isArray(slide.leftPoints)) slide.leftPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.leftPoints.${k}`] = p; });
      if (Array.isArray(slide.rightPoints)) slide.rightPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.rightPoints.${k}`] = p; });
      if (Array.isArray(slide.keyPoints)) slide.keyPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.keyPoints.${k}`] = p; });
      if (Array.isArray(slide.events)) slide.events.forEach((e, k) => {
        if (e.year) flat[`lessons.${i}.slides.${j}.events.${k}.year`] = e.year;
        if (e.title) flat[`lessons.${i}.slides.${j}.events.${k}.title`] = e.title;
        if (e.description) flat[`lessons.${i}.slides.${j}.events.${k}.description`] = e.description;
      });
      if (Array.isArray(slide.questions)) slide.questions.forEach((q, k) => {
        if (q.question) flat[`lessons.${i}.slides.${j}.questions.${k}.question`] = q.question;
        if (Array.isArray(q.options)) q.options.forEach((o, l) => { flat[`lessons.${i}.slides.${j}.questions.${k}.options.${l}`] = o; });
        if (q.explanation) flat[`lessons.${i}.slides.${j}.questions.${k}.explanation`] = q.explanation;
      });
    });
  });
  
  const outPath = `${BASE}/src/locales/ja/lessons/bourgogne/advanced-m${m}.json`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(flat, null, 2));
  console.log(`Created JA advanced-m${m}.json - keys:`, Object.keys(flat).length);
}
