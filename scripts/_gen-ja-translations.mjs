/**
 * Generate Japanese translations for all California lessons
 * Run: node scripts/_gen-ja-translations.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'src/locales/ja/lessons/california')
fs.mkdirSync(OUT_DIR, { recursive: true })

const lessons = {

// ─── L1-1 ────────────────────────────────────────────────────────────────────
'ca-l1-1': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'なぜカリフォルニアワインなのか？',
  'slides.1.highlights.0.title': 'パリス審判の伝説',
  'slides.1.highlights.0.content': '1976年、ナパのカベルネ・ソーヴィニヨンとシャルドネがブラインドテイスティングでフランスの名酒を破り、世界を驚かせました',
  'slides.1.highlights.1.title': '米国ワインの85%',
  'slides.1.highlights.1.content': 'カリフォルニアは年間8億本以上を生産し、140カ国に輸出する米国ワイン産業の中核です',
  'slides.2.title': 'カリフォルニアワインの歴史',
  'slides.3.title': 'パリス審判：1976年の革命',
  'slides.4.title': 'AVAシステム：カリフォルニアのアペラシオン',
  'slides.5.title': 'カリフォルニア六大産地の概要',
  'slides.6.title': 'カリフォルニアワインのテロワール',
},

// ─── L1-2 ────────────────────────────────────────────────────────────────────
'ca-l1-2': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'カリフォルニア地理の3大要因',
  'slides.2.title': 'ノースコースト産地群',
  'slides.4.title': 'セントラルコースト産地群',
  'slides.5.title': 'その他の産地群',
  'slides.7.title': '産地比較一覧',
},

// ─── L1-3 ────────────────────────────────────────────────────────────────────
'ca-l1-3': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'ナパヴァレー概要：小さな奇跡',
  'slides.3.title': 'ナパヴァレーの南北気候グラデーション',
  'slides.4.title': 'ナパヴァレーの16のサブAVA',
  'slides.5.title': 'ナパヴァレーの伝説的ワイナリー',
  'slides.6.title': 'ナパ・カベルネ・ソーヴィニヨン テイスティングガイド',
},

// ─── L1-4 ────────────────────────────────────────────────────────────────────
'ca-l1-4': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'ソノマ郡概要',
  'slides.3.title': 'ロシアン・リバー・ヴァレー — ピノの聖地',
  'slides.4.title': 'ドライ・クリーク・ヴァレー & アレクサンダー・ヴァレー',
  'slides.5.title': 'その他の重要サブAVA',
},

// ─── L1-5 ────────────────────────────────────────────────────────────────────
'ca-l1-5': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'リヴァーモア・ヴァレー — カリフォルニア・シャルドネの揺りかご',
  'slides.2.title': 'パソ・ロブレス — ローヌ品種の新世界聖地',
  'slides.3.title': 'サンタ・バーバラ郡 — 映画「サイドウェイ」のワイン王国',
  'slides.4.title': 'サンタ・クルーズ・マウンテンズ & モントレー郡',
},

// ─── L1-6 ────────────────────────────────────────────────────────────────────
'ca-l1-6': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'メンドシーノ郡 — オーガニック農業の先駆者',
  'slides.2.title': 'レイク郡 — 火山と高標高の奇跡',
  'slides.3.title': 'シエラ・フットヒルズ — ゴールドラッシュ時代の古樹伝説',
  'slides.4.title': 'ロダイ & セントラル・ヴァレー、南カリフォルニア、北カリフォルニア',
},

// ─── L1-7 ────────────────────────────────────────────────────────────────────
'ca-l1-7': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'カベルネ・ソーヴィニヨン — カリフォルニア赤ワインの王',
  'slides.2.title': 'シャルドネ — カリフォルニア白ワインの女王',
  'slides.3.title': 'ピノ・ノワール & ジンファンデル',
  'slides.4.title': 'その他の重要品種',
},

// ─── L1-8 ────────────────────────────────────────────────────────────────────
'ca-l1-8': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'カリフォルニアワインのテイスティング技術',
  'slides.2.title': 'カリフォルニアワインのフードペアリングガイド',
  'slides.3.title': 'レベル1 総復習',
},

// ─── L2-1 ────────────────────────────────────────────────────────────────────
'ca-l2-1': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'カリフォルニア海流：天然エアコンシステム',
  'slides.2.title': '日較差：カリフォルニアの酸味の秘密',
  'slides.3.title': 'カリフォルニアの土壌多様性',
  'slides.4.title': 'ウィンクラー熱積算スケール',
},

// ─── L2-2 ────────────────────────────────────────────────────────────────────
'ca-l2-2': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'ナパヴァレー：世界最小・最高級のワインヴァレー',
  'slides.3.title': 'ナパヴァレー：南から北への16サブAVA',
  'slides.4.title': 'ナパの伝説的ワイナリー',
  'slides.5.title': 'ソノマ郡：多様性の王国',
},

// ─── L2-3 ────────────────────────────────────────────────────────────────────
'ca-l2-3': {
  'slides.0.title': 'コース紹介',
  'slides.2.title': 'サンタ・バーバラ郡：横断谷の奇跡',
  'slides.3.title': 'サンタ・バーバラの主要AVA',
  'slides.4.title': '「サイドウェイ」効果：映画がワイン産業を変えた',
  'slides.5.title': 'パソ・ロブレス：石灰岩王国とローヌ品種',
},

// ─── L2-4 ────────────────────────────────────────────────────────────────────
'ca-l2-4': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'オーク樽：カリフォルニアワインスタイルの形成者',
  'slides.2.title': 'マロラクティック発酵と酸化熟成',
  'slides.3.title': 'カリフォルニア伝統法スパークリングワイン',
  'slides.4.title': 'カリフォルニアのローヌ品種：ローヌ・レンジャーズの物語',
},

// ─── L3-1 ────────────────────────────────────────────────────────────────────
'ca-l3-1': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': '斜面 vs 平地：テロワールの根本的な違い',
  'slides.2.title': 'ナパ山地AVA深掘り分析',
  'slides.3.title': 'ヴィンヤードの向き（アスペクト）が生み出す微気候効果',
},

// ─── L3-2 ────────────────────────────────────────────────────────────────────
'ca-l3-2': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'カリフォルニアの三大サステナビリティ認証',
  'slides.2.title': '気候変動：カリフォルニアワインの最大の課題',
  'slides.3.title': '高度な醸造技術：全房発酵とナチュラルワイン',
},

// ─── L3-3 ────────────────────────────────────────────────────────────────────
'ca-l3-3': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': '1976年パリス審判：世界を変えたブラインドテイスティング',
  'slides.2.title': 'カルト・ワイン文化：カリフォルニアのカルトワイン伝説',
  'slides.3.title': 'カリフォルニアヴィンテージ分析：気候、スコア、熟成ポテンシャル',
},

// ─── L3-4 ────────────────────────────────────────────────────────────────────
'ca-l3-4': {
  'slides.0.title': 'コース紹介',
  'slides.1.title': 'ファーム・トゥ・テーブル：カリフォルニア食文化の革命',
  'slides.2.title': '産地別フードペアリング・マトリックス',
  'slides.3.title': 'プロのテイスティングノート：カリフォルニアワインの体系的評価',
},

}

let total = 0
for (const [id, data] of Object.entries(lessons)) {
  const srcPath = path.join(ROOT, `src/locales/zh-TW/lessons/california/${id}.json`)
  const src = fs.existsSync(srcPath) ? JSON.parse(fs.readFileSync(srcPath, 'utf8')) : {}
  const merged = { ...src, ...data }
  fs.writeFileSync(path.join(OUT_DIR, `${id}.json`), JSON.stringify(merged, null, 2) + '\n')
  console.log(`✅ ${id}: ${Object.keys(merged).length} keys (${Object.keys(data).length} JA translated)`)
  total += Object.keys(data).length
}
console.log(`\n🎉 Done! ${Object.keys(lessons).length} files written, ${total} keys translated.`)
