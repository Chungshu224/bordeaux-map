// Generate JA locale overlay for L4 master-m1 through m8

const fs = require('fs');
const path = require('path');

const BASE = 'c:/Users/Chungshu/Desktop/教學網站製作20260220/Bordeaux Wine Learning';

const moduleMeta = {
  1: {
    title: "ブルゴーニュの歴史と文化的遺産",
    description: "ブルゴーニュの歴史を学術的に探求する——ローマ時代のブドウ栽培・修道院の管理からヴァロワ公爵・フランス革命による所有権再分配・近代AOCシステム形成まで",
    lessons: [
      "ローマ時代から中世のワイン文明",
      "ブルゴーニュ公爵と黄金時代",
      "フランス革命とブドウ園所有権革命",
      "フィロキセラ危機と再建",
      "AOCシステムの確立と産地定義",
      "近代ブルゴーニュの文化的影響力"
    ]
  },
  2: {
    title: "グローバル・ピノ・ノワール比較研究",
    description: "世界の主要産地のピノ・ノワールをマスターレベルで比較研究する——気候・土壌・文化的背景が表現をいかに形成するかを理解し、産地識別ブラインド能力を養う",
    lessons: [
      "ピノ・ノワールの世界的適応性研究",
      "ブルゴーニュ：ピノ・ノワールの故郷と世界標準",
      "ニュージーランド・セントラル・オタゴ：新世界の星",
      "アメリカ・オレゴン州ウィラメット・ヴァレー：ブルゴーニュ精神の継承",
      "ドイツのシュペートブルグンダー：過小評価された優雅さ",
      "カリフォルニア・ソノマ・コースト：力と優雅さのバランス",
      "ブラインド・テイスティング：グローバル・ピノ識別技術"
    ]
  },
  3: {
    title: "プロのソムリエ技術訓練",
    description: "ソムリエの総合トレーニング——サービス技術・ワインリスト構築・フード＆ワインペアリング・セラー管理・プロ資格取得まで",
    lessons: [
      "プロのワインサービス技術",
      "ブルゴーニュ・ワインのフード＆ワインペアリング",
      "ワインリスト構築戦略",
      "プロのテイスティング用語と表現",
      "セラー管理の実務",
      "ソムリエ認定制度",
      "顧客コミュニケーションと販売技術",
      "特殊状況とクレームへの対応"
    ]
  },
  4: {
    title: "ワイン教育とトレーニング手法",
    description: "ワイン教育の教授法と実践——効果的なコース設計・テイスティング・イベントの主催・プロ資格試験の準備・個人教育ブランドの構築",
    lessons: [
      "ワイン教育の教授法設計",
      "テイスティング・イベントの設計と進行",
      "認定試験準備戦略",
      "オンライン・ワイン教育",
      "企業向けワイン研修",
      "個人教育ブランドの構築"
    ]
  },
  5: {
    title: "ビジネスケースと市場戦略",
    description: "ブルゴーニュ・ワイン業界へのプロのビジネス分析適用——市場動態・ネゴシアン経営モデル・ブランド戦略・価格心理学・デジタルマーケティング",
    lessons: [
      "ブルゴーニュ・ワイン市場分析",
      "ワイン商の経営モデル分析",
      "ブランド戦略とポジショニング",
      "価格戦略と心理学",
      "消費者行動分析",
      "デジタルマーケティングとSNS運営",
      "ビジネスケース分析"
    ]
  },
  6: {
    title: "国際貿易と輸出入実務",
    description: "国際ワイン取引の実践ガイド——輸入手続き・関税・税務計画・物流・コールドチェーン管理・ワイン展示会戦略・先物取引",
    lessons: [
      "ワイン輸入プロセス全解析",
      "関税と税務計画",
      "物流とコールドチェーン管理",
      "国際ワイン展示会戦略",
      "アン・プリムール先物取引"
    ]
  },
  7: {
    title: "ドメーヌ経営と起業管理",
    description: "ワイン農場経営と起業のビジネス基礎——経営モデル・財務計画・ブランド構築・持続可能農業・人材管理・リスク管理",
    lessons: [
      "ワイン農場の経営モデル分析",
      "農場財務計画",
      "ブランド構築とマーケティング",
      "持続可能農業と有機農業認証",
      "人材管理",
      "リスク管理と保険"
    ]
  },
  8: {
    title: "マスター論文と総合評価",
    description: "マスターレベル資格取得の最終準備——論文作成・総合ブラインド・テイスティング・口述試験シミュレーション・ケーススタディ分析・プロネットワーク構築",
    lessons: [
      "専門論文執筆ガイド",
      "総合ブラインド・テイスティング訓練",
      "口述試験シミュレーションと対応技術",
      "ケーススタディ分析",
      "継続的専門能力開発計画",
      "マスターレベルのテイスティングノート執筆",
      "プロフェッショナル・ネットワーク構築",
      "最終総合評価準備"
    ]
  }
};

for (let m = 1; m <= 8; m++) {
  const src = JSON.parse(fs.readFileSync(`${BASE}/public/bourgogne/data/courses/level4/master-m${m}.json`));
  const meta = moduleMeta[m];
  const flat = { title: meta.title, description: meta.description };

  src.lessons.forEach((lesson, i) => {
    flat[`lessons.${i}.title`] = meta.lessons[i] || lesson.title;
    lesson.slides.forEach((slide, j) => {
      if (j === 0 && slide.title) flat[`lessons.${i}.slides.${j}.title`] = meta.lessons[i] || slide.title;
      else if (slide.title) flat[`lessons.${i}.slides.${j}.title`] = slide.title;
      if (slide.subtitle) flat[`lessons.${i}.slides.${j}.subtitle`] = slide.subtitle.replace(/(\d+)分鐘/, '$1分').replace(/Lesson (\d+) - /, 'Lesson $1 - ');
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
      if (Array.isArray(slide.steps)) slide.steps.forEach((s, k) => {
        if (typeof s === 'string') flat[`lessons.${i}.slides.${j}.steps.${k}`] = s;
        else {
          if (s.title) flat[`lessons.${i}.slides.${j}.steps.${k}.title`] = s.title;
          if (s.description) flat[`lessons.${i}.slides.${j}.steps.${k}.description`] = s.description;
        }
      });
      if (Array.isArray(slide.items)) slide.items.forEach((it, k) => {
        if (typeof it === 'string') flat[`lessons.${i}.slides.${j}.items.${k}`] = it;
        else {
          Object.entries(it).forEach(([ek, ev]) => {
            if (typeof ev === 'string') flat[`lessons.${i}.slides.${j}.items.${k}.${ek}`] = ev;
          });
        }
      });
    });
  });

  const outPath = `${BASE}/src/locales/ja/lessons/bourgogne/master-m${m}.json`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(flat, null, 2));
  console.log(`Created JA master-m${m}.json - keys:`, Object.keys(flat).length);
}
