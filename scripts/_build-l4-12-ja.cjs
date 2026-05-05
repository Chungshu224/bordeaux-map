const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/locales/en/lessons/bordeaux/l4-12.json', 'utf8'));

const ja = {};

// Non-content keys
ja['slides.0.title'] = '学習目標';
ja['slides.1.title'] = '第1章';
ja['slides.1.subtitle'] = 'プロセス';
ja['slides.2.title'] = 'プロジェクトプロセスと研究設計';
ja['slides.3.title'] = '第2章';
ja['slides.3.subtitle'] = '発表';
ja['slides.4.title'] = '成果発表とレポート執筆';
ja['slides.5.title'] = '第3章';
ja['slides.5.subtitle'] = '口頭試問';
ja['slides.6.title'] = '口頭試問とプロフェッショナル発表';
ja['slides.7.title'] = 'まとめ';
ja['slides.7.content'] = '<p>実践的な成果物を通じて学習を検証し、実践的な方法論を構築する。</p>';
ja['slides.8.title'] = '総合クイズ';

// slides.2.content - Research Topic Selection
ja['slides.2.content'] = en['slides.2.content']
  .replace('Research Topic Selection', '研究テーマ選択')
  .replace('Three Main Research Directions', '3つの主要研究方向')
  .replace('Corporate Case Study', '企業ケーススタディ')
  .replace('Example: "Market Positioning Strategy and Brand Revitalisation of Bordeaux Cru Bourgeois Château X"', '例：「ボルドー・クリュ・ブルジョワシャトーXの市場ポジショニング戦略とブランド再活性化」')
  .replace('Requirements: On-site interviews, financial data, SWOT (Strengths, Weaknesses, Opportunities, Threats) / 5 Forces analysis', '要件：現地インタビュー、財務データ、SWOT（強み・弱み・機会・脅威）/ ファイブフォース分析')
  .replace('Appellation Strategy Research', '産地戦略研究')
  .replace('Example: "Saint-Émilion Under Climate Change: Grape Variety Adjustment and Sustainable Development"', '例：「気候変動下のサン・テミリオン：品種調整と持続可能な発展」')
  .replace('Requirements: Historical data, policy analysis, stakeholder interviews', '要件：歴史データ、政策分析、ステークホルダーインタビュー')
  .replace('Innovative Technology Assessment', '革新技術評価')
  .replace('Example: "The Impact of Precision Winemaking Technology on Style Consistency in Bordeaux Classed Growths"', '例：「精密醸造技術がボルドー格付けシャトーのスタイル一貫性に与える影響」')
  .replace('Requirements: Experimental data, quality evaluation, cost-benefit analysis', '要件：実験データ、品質評価、費用便益分析')
  .replace('Key Elements of a Corporate Case Study', '企業ケーススタディの主要要素')
  .replace('<li><strong>Research Background</strong>: Estate history, appellation positioning, current brand status</li>', '<li><strong>研究背景</strong>：シャトーの歴史、産地ポジショニング、現在のブランド状況</li>')
  .replace('<li><strong>Problem Definition</strong>: Challenges faced (market shrinkage / intensifying competition / generational succession)</li>', '<li><strong>問題定義</strong>：直面する課題（市場縮小 / 競争激化 / 世代交代）</li>')
  .replace('<li><strong>Data Collection</strong>: Interviews with estate owner/winemaker, financial statements (past 5 years), market research</li>', '<li><strong>データ収集</strong>：オーナー・醸造責任者インタビュー、財務諸表（過去5年）、市場調査</li>')
  .replace('<li><strong>Analytical Framework</strong>: SWOT (Strengths, Weaknesses, Opportunities, Threats – internal strengths/weaknesses), Porter\'s Five Forces (external competition), PESTEL (Political, Economic, Social, Technological, Environmental, Legal – macro environment)</li>', '<li><strong>分析フレームワーク</strong>：SWOT（強み・弱み・機会・脅威）、ポーターのファイブフォース（外部競争）、PESTEL（政治・経済・社会・技術・環境・法律）</li>')
  .replace('<li><strong>Proposed Solutions</strong>: Short-term (1–2 years) and long-term (5–10 years) strategic recommendations</li>', '<li><strong>解決策の提案</strong>：短期（1〜2年）および長期（5〜10年）戦略的提言</li>')
  .replace('<li><strong>Expected Outcomes</strong>: Revenue growth projections, brand value enhancement, market share changes</li>', '<li><strong>期待される成果</strong>：収益成長予測、ブランド価値向上、市場シェア変化</li>')
  .replace('Steps for Appellation Strategy Research', '産地戦略研究のステップ')
  .replace('<li><strong>Historical Context</strong>: Appellation AOC (Appellation d\'Origine Contrôlée) evolution, changes in vineyard area, economic contribution</li>', '<li><strong>歴史的背景</strong>：AOC産地呼称の変遷、ブドウ園面積の変化、経済的貢献</li>')
  .replace('<li><strong>Terroir Analysis</strong>: Climate trends (temperature/rainfall/extreme events), soil adaptability, water resource management</li>', '<li><strong>テロワール分析</strong>：気候トレンド（気温・降雨量・極端気象）、土壌適応性、水資源管理</li>')
  .replace('<li><strong>Industry Structure</strong>: Number of producers, cooperative share, concentration HHI (Herfindahl-Hirschman Index)</li>', '<li><strong>産業構造</strong>：生産者数、協同組合シェア、集中度HHI（ハーフィンダール・ハーシュマン指数）</li>')
  .replace('<li><strong>Policy Environment</strong>: INAO (Institut National de l\'Origine et de la Qualité) regulations, subsidy policies, environmental standards</li>', '<li><strong>政策環境</strong>：INAO規制、補助金政策、環境基準</li>')
  .replace('<li><strong>Stakeholder Interviews</strong>: Producer associations, government officials, wholesalers, retailers</li>', '<li><strong>ステークホルダーインタビュー</strong>：生産者協会、行政担当者、卸売業者、小売業者</li>')
  .replace('<li><strong>Strategic Recommendations</strong>: Variety adjustment (e.g. increasing Petit Verdot), irrigation policy, promotion of sustainability certifications</li>', '<li><strong>戦略的提言</strong>：品種調整（例：プティ・ヴェルドの増加）、灌漑政策、持続可能性認証の推進</li>')
  .replace('Methods for Innovative Technology Assessment', '革新技術評価の方法')
  .replace('<li><strong>Technology Description</strong>: Precision winemaking / optical sorting / micro-oxygenation / ultrasonic ageing, etc.</li>', '<li><strong>技術説明</strong>：精密醸造 / 光学選別 / マイクロオキシジェネーション / 超音波熟成等</li>')
  .replace('<li><strong>Experimental Design</strong>: Control group (traditional method) vs. experimental group (innovative technology), sample size ≥30</li>', '<li><strong>実験設計</strong>：対照群（従来法）vs. 実験群（革新技術）、サンプルサイズ≥30</li>')
  .replace('<li><strong>Quality Evaluation</strong>: Sensory scoring (SAT system – Systematic Approach to Tasting), chemical analysis (phenolics/volatile acidity/colour density)</li>', '<li><strong>品質評価</strong>：官能スコアリング（SATシステム）、化学分析（フェノール類・揮発酸・色素密度）</li>')
  .replace('<li><strong>Style Consistency</strong>: Multi-vintage comparison, coefficient of variation CV (Coefficient of Variation) &lt; 10% preferred</li>', '<li><strong>スタイル一貫性</strong>：複数ヴィンテージ比較、変動係数CV &lt; 10%が望ましい</li>')
  .replace('<li><strong>Cost-Benefit Analysis</strong>: Initial investment, annual operating costs, ROI (Return on Investment) payback period (typically 5–7 years)</li>', '<li><strong>費用便益分析</strong>：初期投資、年間運営コスト、ROI回収期間（通常5〜7年）</li>')
  .replace('<li><strong>Market Acceptance</strong>: Consumer blind tasting, expert review, media coverage analysis</li>', '<li><strong>市場受容性</strong>：消費者ブラインドテイスティング、専門家レビュー、メディア報道分析</li>')
  .replace('Research Methodology', '研究方法論')
  .replace('<strong>Mixed Methods</strong>: Quantitative data + Qualitative interviews', '<strong>混合方法</strong>：定量データ＋定性インタビュー')
  .replace('<strong>Quantitative Methods</strong>:', '<strong>定量的方法</strong>：')
  .replace('Financial Analysis: ROI, gross margin, asset turnover, current ratio', '財務分析：ROI、粗利益率、資産回転率、流動比率')
  .replace('Market Data: Sales trends, price elasticity, market share', '市場データ：販売トレンド、価格弾力性、市場シェア')
  .replace('Statistical Modelling: Regression analysis (price drivers), time series (sales forecasting)', '統計モデリング：回帰分析（価格ドライバー）、時系列（販売予測）')
  .replace('Quality Data: Sensory scores, chemical indicators, vintage ratings', '品質データ：官能スコア、化学指標、ヴィンテージ評価')
  .replace('<strong>Qualitative Methods</strong>:', '<strong>定性的方法</strong>：')
  .replace('Semi-structured Interviews: Prepare 15–20 open-ended questions, record and transcribe', '半構造化インタビュー：15〜20の開放型質問を準備、録音と文字起こし')
  .replace('Focus Groups: Invite 6–8 stakeholders for in-depth discussion', 'フォーカスグループ：6〜8名のステークホルダーを招いた深掘り討論')
  .replace('Case Studies: Benchmarking analysis (select 2–3 comparable estates/appellations)', 'ケーススタディ：ベンチマーク分析（2〜3の比較対象シャトー・産地を選択）')
  .replace('Literature Review: Academic papers, industry reports, policy documents', '文献レビュー：学術論文、業界レポート、政策文書');

// slides.4.content - Report Structure
ja['slides.4.content'] = en['slides.4.content']
  .replace('Report Structure Standards', 'レポート構造基準')
  .replace('<strong>Diploma Research Report</strong> typical length: <strong>8,000–10,000 words</strong> (excluding appendices)', '<strong>ディプロマ研究レポート</strong>の標準的な分量：<strong>8,000〜10,000ワード</strong>（付録除く）')
  .replace('Complete Structure Checklist', '完全構造チェックリスト')
  .replace('<span><strong>Cover Page</strong>: Title, author, date, word count</span>', '<span><strong>表紙</strong>：タイトル、著者、日付、ワード数</span>')
  .replace('<span><strong>Abstract</strong>: 250–300 words, covering research question/method/key findings/conclusions</span>', '<span><strong>要旨</strong>：250〜300ワード、研究設問・方法・主要発見・結論を網羅</span>')
  .replace('<span><strong>Table of Contents</strong>: Auto-generated, with page numbers and list of figures/tables</span>', '<span><strong>目次</strong>：自動生成、ページ番号と図表一覧付き</span>')
  .replace('<span><strong>Chapter 1: Introduction</strong>: Background, research question, objectives, significance (800–1,000 words)</span>', '<span><strong>第1章：序論</strong>：背景、研究設問、目的、意義（800〜1,000ワード）</span>')
  .replace('<span><strong>Chapter 2: Literature Review</strong>: Theoretical framework, existing research, research gap (1,500–2,000 words)</span>', '<span><strong>第2章：文献レビュー</strong>：理論的枠組み、先行研究、研究ギャップ（1,500〜2,000ワード）</span>')
  .replace('<span><strong>Chapter 3: Research Methodology</strong>: Data sources, analytical tools, sample description (1,000–1,200 words)</span>', '<span><strong>第3章：研究方法論</strong>：データソース、分析ツール、サンプル説明（1,000〜1,200ワード）</span>')
  .replace('<span><strong>Chapter 4: Findings</strong>: Data presentation, chart analysis, key insights (2,500–3,000 words)</span>', '<span><strong>第4章：発見</strong>：データ提示、グラフ分析、主要洞察（2,500〜3,000ワード）</span>')
  .replace('<span><strong>Chapter 5: Discussion</strong>: Interpretation of results, theoretical dialogue, practical implications (1,500–2,000 words)</span>', '<span><strong>第5章：考察</strong>：結果の解釈、理論的対話、実践的含意（1,500〜2,000ワード）</span>')
  .replace('<span><strong>Chapter 6: Conclusions &amp; Recommendations</strong>: Key findings, strategic recommendations, future research directions (800–1,000 words)</span>', '<span><strong>第6章：結論と提言</strong>：主要発見、戦略的提言、今後の研究方向（800〜1,000ワード）</span>')
  .replace('<span><strong>References</strong>: Harvard / APA (American Psychological Association) format, minimum 30–40 references</span>', '<span><strong>参考文献</strong>：ハーバード / APA形式、最低30〜40件</span>')
  .replace('<span><strong>Appendices</strong>: Interview questionnaires, raw data tables, supplementary charts</span>', '<span><strong>付録</strong>：インタビュー調査票、生データ表、補足グラフ</span>')
  .replace('Chart Design Principles', 'グラフデザイン原則')
  .replace('<strong>Visualisation Golden Rule</strong>: At least 1 chart per 1,000 words', '<strong>可視化の黄金律</strong>：1,000ワードにつき少なくとも1つのグラフ')
  .replace('<strong>Line Chart</strong>:', '<strong>折れ線グラフ</strong>：')
  .replace('Use: Time-series data (sales / price / score changes)', '用途：時系列データ（販売量・価格・スコア変化）')
  .replace('Example: "Pauillac Classed Growth Average Price Index, 2010–2024"', '例：「ポイヤック格付けシャトー平均価格指数、2010〜2024年」')
  .replace('Tip: Add confidence intervals (95% CI), annotate key events (e.g. 2012 frost)', 'ヒント：信頼区間（95% CI）を追加、主要イベントに注釈（例：2012年霜害）')
  .replace('<strong>Bar Chart</strong>:', '<strong>棒グラフ</strong>：')
  .replace('Use: Category comparisons (different appellations / vintages / estates)', '用途：カテゴリ比較（異なる産地・ヴィンテージ・シャトー）')
  .replace('Example: "En Primeur Release Prices of the Five First Growths, Vintage 2020"', '例：「2020年ヴィンテージ、5大シャトーのアン・プリムール出荷価格」')
  .replace('Tip: Sort in descending order, colour-code to highlight key estates', 'ヒント：降順ソート、重要シャトーは色分けで強調')
  .replace('<strong>Scatter Plot</strong>:', '<strong>散布図</strong>：')
  .replace('Use: Correlation between two variables (score vs. price / temperature vs. alcohol)', '用途：2変数間の相関（スコアと価格・気温とアルコール）')
  .replace('Example: "Correlation Analysis of Parker Score and Liv-ex Price (R² = 0.82)"', '例：「パーカースコアとLiv-ex価格の相関分析（R² = 0.82）」')
  .replace('Tip: Add regression line, label outliers', 'ヒント：回帰直線を追加、外れ値にラベル付け')
  .replace('<strong>Heatmap</strong>:', '<strong>ヒートマップ</strong>：')
  .replace('Use: Multi-dimensional data matrix (vintage × estate × score)', '用途：多次元データマトリクス（ヴィンテージ×シャトー×スコア）')
  .replace('Example: "Heatmap of Médoc Eight Major Estates Score Performance, 2000–2020"', '例：「メドック8大シャトースコアパフォーマンスのヒートマップ、2000〜2020年」')
  .replace('Tip: Choose an appropriate colour scale (red-yellow-green or single-colour gradient)', 'ヒント：適切なカラースケールを選択（赤・黄・緑または単色グラデーション）')
  .replace('<strong>Box Plot</strong>:', '<strong>箱ひげ図</strong>：')
  .replace('Use: Distribution comparison (price dispersion across different appellations)', '用途：分布比較（異なる産地間の価格分散）')
  .replace('Example: "Price Distribution of Left Bank vs. Right Bank Classed Growths"', '例：「左岸 vs. 右岸格付けシャトーの価格分布」')
  .replace('Tip: Show median, interquartile range, and extreme values', 'ヒント：中央値、四分位範囲、極値を表示')
  .replace('Academic Writing Techniques', '学術的文章作成技術')
  .replace('<strong>Avoid common mistakes</strong>:', '<strong>よくある間違いを避ける</strong>：')
  .replace('❌ <strong>Overly subjective</strong>: "This wine tastes wonderful" → ✅ "The sensory score reached 18/20, displaying a classic Pauillac profile"', '❌ <strong>過度に主観的</strong>：「このワインは素晴らしい味」→ ✅ 「官能スコアは18/20に達し、クラシックなポイヤックのプロファイルを示している」')
  .replace('❌ <strong>Lack of data support</strong>: "Market response was positive" → ✅ "Annual sales growth of 23%, market share rose from 8% to 11%"', '❌ <strong>データの裏付け不足</strong>：「市場の反応は良好だった」→ ✅ 「年間販売成長率23%、市場シェアは8%から11%に上昇」')
  .replace('❌ <strong>Charts without titles</strong>: → ✅ "Figure 3.2: Export Volume Trend of Saint-Émilion Grand Cru, 2015–2024"', '❌ <strong>タイトルのないグラフ</strong>：→ ✅ 「図3.2：サン・テミリオン・グラン・クリュの輸出量トレンド、2015〜2024年」')
  .replace('❌ <strong>Inconsistent citation format</strong>: → ✅ Use Harvard format consistently: "(Johnson, 2022)"', '❌ <strong>引用形式の不統一</strong>：→ ✅ ハーバード形式を一貫使用：「(Johnson, 2022)」')
  .replace('❌ <strong>Overly definitive conclusions</strong>: "This proves X" → ✅ "The data supports hypothesis X (p &lt; 0.05), but further verification is still needed"', '❌ <strong>過度に断定的な結論</strong>：「これはXを証明する」→ ✅ 「データは仮説X（p &lt; 0.05）を支持するが、さらなる検証が必要」')
  .replace('<strong>Consistency of professional terminology</strong>: Establish a Glossary to ensure uniformity throughout the text', '<strong>専門用語の一貫性</strong>：用語集を作成し、本文全体の統一性を確保')
  .replace('En Primeur (not En Premier or Primeur)', 'En Primeur（En PremierやPrimeurは不可）')
  .replace('AOC (Appellation d\'Origine Contrôlée) / AOP (Appellation d\'Origine Protégée) – define the abbreviation when first used', 'AOC / AOP — 初出時に略語を定義')
  .replace('Château (not Chateau; retain accent marks)', 'Château（Chateauは不可；アクサンを保持）')
  .replace('Narrative &amp; Persuasiveness', '語り口と説得力')
  .replace('<strong>Storytelling with data</strong>: Transform dry figures into compelling narratives', '<strong>データによるストーリーテリング</strong>：無味乾燥な数字を魅力的な語りに変換')
  .replace('<em>Example</em>: "The 2015 frost devastated Saint-Émilion, causing yields to plummet by 40%. Yet Château Pavie, through precise vineyard management, kept losses to within 25%, and its 2015 vintage even received a 98-point Parker score, with market prices rising counter-cyclically by 15%. This case highlights the critical importance of <strong>risk management capability</strong> for Bordeaux\'s top estates…"', '<em>例</em>：「2015年の霜害はサン・テミリオンを壊滅させ、収量が40%急落した。しかしシャトー・パヴィは精密なブドウ園管理により損失を25%以内に抑え、2015年ヴィンテージはパーカー98点を獲得、市場価格は逆行して15%上昇した。このケースは、ボルドートップシャトーにとって<strong>リスク管理能力</strong>の決定的重要性を浮き彫りにしている…」')
  .replace('<strong>Logical chain</strong>: Open each paragraph with a "Topic Sentence" and close with a "Transition Sentence"', '<strong>論理的連鎖</strong>：各段落を「トピックセンテンス」で始め「移行文」で締める')
  .replace('<strong>Visual hierarchy</strong>: Use bold, italics, and underlines to emphasise key terms, but avoid overuse', '<strong>視覚的階層</strong>：太字・斜体・下線で重要用語を強調するが、多用は避ける');

// slides.6.content - Oral Defence
ja['slides.6.content'] = en['slides.6.content']
  .replace('Presentation Structure Design', '発表構成設計')
  .replace('<strong>Time Allocation</strong> (example: 20-minute presentation):', '<strong>時間配分</strong>（例：20分発表の場合）：')
  .replace('Presentation Time Plan', '発表タイムプラン')
  .replace('<span><strong>Opening (2 minutes)</strong>: Self-introduction, research background, core question</span>', '<span><strong>オープニング（2分）</strong>：自己紹介、研究背景、核心的設問</span>')
  .replace('<span><strong>Literature &amp; Methodology (3 minutes)</strong>: Theoretical framework, research design, data sources</span>', '<span><strong>文献・方法論（3分）</strong>：理論的枠組み、研究設計、データソース</span>')
  .replace('<span><strong>Key Findings (8 minutes)</strong>: 3–4 key insights, each with supporting charts</span>', '<span><strong>主要発見（8分）</strong>：3〜4の主要洞察、各々に裏付けグラフ</span>')
  .replace('<span><strong>Discussion &amp; Recommendations (5 minutes)</strong>: Interpretation of results, strategic recommendations, research limitations</span>', '<span><strong>考察と提言（5分）</strong>：結果の解釈、戦略的提言、研究の限界</span>')
  .replace('<span><strong>Closing (2 minutes)</strong>: Summary of contributions, acknowledgements, open Q&amp;A</span>', '<span><strong>クロージング（2分）</strong>：貢献のまとめ、謝辞、質疑応答開始</span>')
  .replace('<strong>Slide Design Principles</strong>:', '<strong>スライドデザイン原則</strong>：')
  .replace('<strong>6×6 Rule</strong>: No more than 6 lines per slide, no more than 6 words per line', '<strong>6×6ルール</strong>：1スライドに6行以内、1行に6ワード以内')
  .replace('<strong>Visual-first</strong>: Charts should account for 60–70%, text only for titles and key terms', '<strong>ビジュアル優先</strong>：グラフが60〜70%を占め、テキストはタイトルと重要用語のみ')
  .replace('<strong>Consistent colour palette</strong>: Primary colour (e.g. Bordeaux wine red) + supporting colours (grey tones/gold)', '<strong>統一カラーパレット</strong>：メインカラー（例：ボルドーワインレッド）＋補助色（グレートーン・ゴールド）')
  .replace('<strong>Font sizes</strong>: Title ≥28pt, body text ≥20pt (legible from the back of the room)', '<strong>フォントサイズ</strong>：タイトル≥28pt、本文≥20pt（後方からも読めるサイズ）')
  .replace('<strong>Total slides</strong>: Approx. 15–20 (for a 20-minute presentation); avoid flipping pages too quickly', '<strong>総スライド数</strong>：約15〜20枚（20分発表の場合）；ページめくりが速すぎないよう注意')
  .replace('Q&amp;A Response Strategies', '質疑応答の対応戦略')
  .replace('<strong>Common question types and response techniques</strong>:', '<strong>よくある質問タイプと対応技術</strong>：')
  .replace('<strong>Methodology Challenges</strong>:', '<strong>方法論への挑戦</strong>：')
  .replace('Question: "Why choose mixed methods rather than purely quantitative?"', '質問：「なぜ純粋な定量研究ではなく混合方法を選んだのか？」')
  .replace('Response: "Quantitative data provides objective trends, but qualitative interviews reveal the <strong>causal mechanisms</strong>. For example, financial data shows a 15% revenue decline, but interviews revealed it was caused by <strong>changes in distribution channels</strong> – something pure numbers cannot capture."', '回答：「定量データは客観的トレンドを示すが、定性インタビューは<strong>因果メカニズム</strong>を明らかにする。例えば財務データは15%の収益減少を示すが、インタビューにより<strong>流通チャネルの変化</strong>が原因であることが判明した——数字だけでは捉えられない事実だ。」')
  .replace('Tip: Cite specific examples and demonstrate the <strong>complementary value</strong> of the methodology', 'ヒント：具体例を引用し、方法論の<strong>相互補完的価値</strong>を示す')
  .replace('<strong>Data Source Challenges</strong>:', '<strong>データソースへの挑戦</strong>：')
  .replace('Question: "Is the sample size sufficient?"', '質問：「サンプルサイズは十分か？」')
  .replace('Response: "I interviewed 12 estate owners and 8 wholesalers. While this doesn\'t match the scale of a large survey, it has achieved <strong>theoretical saturation</strong> for qualitative research. Key themes stopped generating new content after the 8th or 9th interview."', '回答：「12名のシャトーオーナーと8名の卸売業者にインタビューした。大規模調査のスケールには及ばないが、定性研究では<strong>理論的飽和</strong>に達している。主要テーマは8〜9回目のインタビュー以降、新しい内容が出なくなった。」')
  .replace('Tip: Acknowledge limitations but emphasise the <strong>depth advantage of the research</strong>', 'ヒント：限界を認めつつ<strong>研究の深度上の優位性</strong>を強調する')
  .replace('<strong>Over-generalisation of Conclusions</strong>:', '<strong>結論の過度な一般化</strong>：')
  .replace('Question: "Can your findings be generalised to the entire Bordeaux region?"', '質問：「あなたの発見はボルドー地域全体に一般化できるか？」')
  .replace('Response: "My research focuses on Pauillac classed growths, so the conclusions <strong>should not be over-generalised</strong>. However, the mechanisms (e.g. the relationship between brand premium and scores) may apply to other appellations and warrant further verification."', '回答：「本研究はポイヤック格付けシャトーに焦点を当てているため、結論を<strong>過度に一般化すべきではない</strong>。しかし、メカニズム（例：ブランドプレミアムとスコアの関係）は他の産地にも適用できる可能性があり、更なる検証に値する。」')
  .replace('Tip: Respond with humility but highlight the <strong>theoretical contribution</strong>', 'ヒント：謙虚に回答しつつ<strong>理論的貢献</strong>を強調する')
  .replace('<strong>Practical Feasibility</strong>:', '<strong>実践的実現可能性</strong>：')
  .replace('Question: "Would estates actually adopt your recommendations?"', '質問：「シャトーは実際にあなたの提言を採用するか？」')
  .replace('Response: "I have already shared preliminary results with Château X, and they are very interested in the <strong>digital marketing strategy</strong> and plan a pilot in 2025. Of course, implementation needs to account for costs and cultural resistance – I discuss the <strong>change management</strong> pathway in Section 5.3 of my report."', '回答：「すでにシャトーXと予備的結果を共有しており、<strong>デジタルマーケティング戦略</strong>に強い関心を示し、2025年のパイロット実施を計画している。もちろん実装にはコストと文化的抵抗を考慮する必要がある——<strong>変革管理</strong>の経路についてはレポートの5.3節で論じている。」')
  .replace('Tip: Demonstrate interaction with the industry and provide <strong>implementation details</strong>', 'ヒント：業界との連携を示し<strong>実装の詳細</strong>を提供する');

fs.writeFileSync('src/locales/ja/lessons/bordeaux/l4-12.json', JSON.stringify(ja, null, 2), 'utf8');
console.log('Keys:', Object.keys(ja).length);
