const fs = require('fs');

const ja = {};

// ── Non-content keys ──────────────────────────────────────
ja['slides.0.title'] = 'コース紹介：なぜ微小区画を研究するのか？';
ja['slides.1.title'] = '学習目標';
ja['slides.2.title'] = '第1章';
ja['slides.2.subtitle'] = '微地形と水文学';
ja['slides.3.title'] = '第1章：微地形と水文学';
ja['slides.3.subtitle'] = '傾斜・向き・冷気流・排水';
ja['slides.3.highlights.0.title'] = '高解像度地形';
ja['slides.3.highlights.1.title'] = '冷気流経路';
ja['slides.3.highlights.2.title'] = 'ケーススタディ結果';
ja['slides.4.title'] = '第2章';
ja['slides.4.subtitle'] = '土壌プロファイルと台木';
ja['slides.5.title'] = '第2章：土壌プロファイルと台木';
ja['slides.5.subtitle'] = '土壌層位・通気性・根域戦略';
ja['slides.5.highlights.0.title'] = 'プロファイル診断';
ja['slides.5.highlights.1.title'] = '台木選択ツリー';
ja['slides.5.highlights.2.title'] = 'ケース検証';
ja['slides.6.title'] = '第3章';
ja['slides.6.subtitle'] = '水分ストレスモデリング';
ja['slides.7.title'] = '第3章：水分ストレスモデリングと収穫窓';
ja['slides.7.subtitle'] = '水ポテンシャル測定・気孔コンダクタンス・総合成熟度指標';
ja['slides.7.highlights.0.title'] = '測定マトリクス';
ja['slides.7.highlights.1.title'] = 'モデル選択肢';
ja['slides.7.highlights.2.title'] = '収穫窓';
ja['slides.8.title'] = '第4章';
ja['slides.8.subtitle'] = '区画別醸造戦略';
ja['slides.9.title'] = '第4章：区画別醸造とアッサンブラージュ戦略';
ja['slides.9.subtitle'] = '収穫バッチからブレンディング決定まで';
ja['slides.9.highlights.0.title'] = 'バッチ収穫';
ja['slides.9.highlights.1.title'] = '微小発酵設計';
ja['slides.9.highlights.2.title'] = 'ブレンドマトリクス';
ja['slides.10.title'] = 'コース総括：区画から決定へ';
ja['slides.11.title'] = 'クイック確認テスト';

// ── Highlights content (short) ────────────────────────────
ja['slides.3.highlights.0.content'] = 'DEM（デジタル標高モデル）/ LiDAR（光検出測距）/ UAV（無人航空機）を統合し、0.1〜0.5 haスケールで微小区画を分析。';
ja['slides.3.highlights.1.content'] = 'CFD（数値流体力学）またはスモークトレーサー野外試験で夜間冷気移動をマッピングし、防風機・排水設置を最適化。';
ja['slides.3.highlights.2.content'] = '北向き低地を排水＋防風機で改善：霜害損失を25%から5%に低減。';
ja['slides.5.highlights.0.content'] = '土壌ボーリング＋ラボデータで土壌制約マップを作成。';
ja['slides.5.highlights.1.content'] = '3ステップスクリーニング：耐ストレス性→活性→植付密度で最適台木を選択。';
ja['slides.5.highlights.2.content'] = '高石灰土壌に110R植え替え後、収量が安定しアントシアニンが18%増加。';
ja['slides.7.highlights.0.content'] = '水ポテンシャル・気孔コンダクタンス・土壌水分・樹液流量を統合しモデル化。';
ja['slides.7.highlights.1.content'] = '3つの水分予測経路：バケットモデル・FAO-56・機械学習。';
ja['slides.7.highlights.2.content'] = '品質×リスク×リソースで収穫バッチとスケジュールを決定。';
ja['slides.9.highlights.0.content'] = '成熟リズムに合わせて2〜3回の収穫を計画し、複雑性を保持。';
ja['slides.9.highlights.1.content'] = '区画特性に合わせて容器・酵母・マセラシオン戦略を選択。';
ja['slides.9.highlights.2.content'] = '長所と制限をマッピングしてバランスのとれた配合比率を見つける。';

// ── slides.0.content ─────────────────────────────────────
ja['slides.0.content'] = `
      <div class="intro-content">
        <h3>🎯 広域産地から小区画へ：精密管理の必要性</h3>
        <p class="intro-lead">
          レベル3では、ボルドー各産地のテロワール特性を学びました。しかし同一シャトー内でも、<strong>傾斜の1〜2度の差、土壌深度の20cmの違い、排水のわずかな差</strong>だけで、区画ごとにブドウの品質が大きく異なる場合があります。
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-1/01 Advanced-Terroir-Micro-Plot-Analysis.svg" alt="高度テロワール微小区画精密分析 — 4次元と土壌プロファイル作業" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
        
        <div class="comparison-box">
          <div class="before">
            <h4>❌ 従来型一括管理</h4>
            <ul>
              <li>畑全体に均一な施肥・灌漑</li>
              <li>同日に全ブドウを収穫</li>
              <li>区画区別なし・合同発酵</li>
              <li>結果：品質のばらつき、個性の希薄化</li>
            </ul>
          </div>
          <div class="after">
            <h4>✅ 微小区画精密管理</h4>
            <ul>
              <li>各区画特性に応じた管理調整</li>
              <li>各区画の最適成熟度に合わせた段階的収穫</li>
              <li>区画別醸造と精密アッサンブラージュ</li>
              <li>結果：品質向上、個性的なスタイル確立</li>
            </ul>
          </div>
        </div>

        <h3>📚 このコースの学習パス</h3>
        <p>このコースでは<strong>4つのレベル</strong>にわたって微小区画分析能力を構築します：</p>
        <ol class="learning-path">
          <li><strong>地形を読む</strong>：地形データ（傾斜・排水・霜リスク）で重要な差異を識別する方法を学ぶ</li>
          <li><strong>土壌を読む</strong>：土壌プロファイルで根域成長条件を評価する</li>
          <li><strong>水を読む</strong>：水分ストレスモデルを構築し最適収穫時期を予測する</li>
          <li><strong>醸造を読む</strong>：区画別醸造とアッサンブラージュ戦略を策定する</li>
        </ol>

        <div class="key-insight">
          <h4>💡 核心的な思想</h4>
          <p>微小区画管理の目的は単純な問題を複雑にすることではなく、<strong>「適地適法」</strong>——すべての区画がその最大限のポテンシャルを発揮し、最終的に精密なアッサンブラージュによって単一区画を超えるワインを生み出すことです。</p>
        </div>

        <h3>⚠️ 学習のヒント</h3>
        <ul class="tips">
          <li>このコースでは多くの技術用語（LiDAR・DEM・TWIなど）が登場します。<strong>略語を暗記する必要はありません</strong>；概念の理解が重要です。</li>
          <li>各章には実際のケーススタディがあります；<strong>ケースを先に読んでから理論に戻る</strong>ことをお勧めします。</li>
          <li>このコースをブドウ園の「精密健康診断」として捉えてください：地形＝骨格、土壌＝栄養、水＝循環。</li>
        </ul>
      </div>`;

// ── slides.3.content ─────────────────────────────────────
ja['slides.3.content'] = `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念紹介：なぜ地形がそれほど重要なのか？</h3>
          <p class="analogy">
            ブドウ園を一つの顔と想像してみてください；<strong>地形は顔の輪郭と特徴のようなもの</strong>です：
          </p>
          <ul class="simple-list">
            <li>🏔️ <strong>傾斜</strong>：鼻筋の高さのようなもの——水の流れ方と日光の角度を決める</li>
            <li>🧭 <strong>向き</strong>：顔がどの方向を向いているか——日照時間に影響する</li>
            <li>❄️ <strong>窪地</strong>：目の窪みのようなもの——冷気が溜まりやすく、霜害を引き起こしやすい</li>
            <li>💧 <strong>排水</strong>：肌の毛穴のようなもの——水分がスムーズに排出されるかを決める</li>
          </ul>
          <div class="example-box">
            <h4>📖 比較例</h4>
            <table class="comparison-table">
              <tr>
                <th>地形条件</th>
                <th>ブドウ成長状態</th>
                <th>管理上の課題</th>
              </tr>
              <tr>
                <td>南向き・傾斜8%</td>
                <td>✅ 日照十分・早熟・高糖度</td>
                <td>⚠️ 熱ストレスと干ばつに注意</td>
              </tr>
              <tr>
                <td>北向き平坦低地</td>
                <td>❌ 日照不足・晩熟・過湿</td>
                <td>⚠️ 春霜・秋のボトリティス</td>
              </tr>
            </table>
          </div>
        </div>

        <h3>地形スキャンとデータソース</h3>
        <div class="term-explanation">
          <p><strong>技術用語解説</strong>（暗記不要；概念を理解してください）：</p>
          <ul>
            <li><strong>LiDAR</strong>（光検出測距）：レーザーで地形をスキャンし、GPSより精度が高い；樹木の下の実際の地面も見通せる</li>
            <li><strong>DEM</strong>（デジタル標高モデル）：地形を3Dコンピューターモデルに変換したもの。Googleアースのようだが、より詳細</li>
            <li><strong>UAV</strong>（無人航空機）：空中からブドウ園を撮影するドローン</li>
          </ul>
        </div>
        <p>これらのツールと過去の収量マップを組み合わせることで、大規模なブドウ園を<strong>0.1〜0.5ヘクタール</strong>（バスケットボールコート1〜5面程度）の微小区画に分割できます。</p>
        <ul>
          <li><strong>地形指標</strong>：
            <ul class="nested-list">
              <li><strong>傾斜</strong>：勾配（0〜15%が一般的；>15%は急すぎる）</li>
              <li><strong>向き</strong>：斜面がどの方向を向いているか（南向きが最良；北向きは涼しい）</li>
              <li><strong>曲率</strong>：地形が凸（尾根、良好な排水）か凹（谷、過湿になりやすい）か</li>
              <li><strong>TWI（地形湿潤指数）</strong>：簡単に言えば「この区画はどれだけ過湿になりやすいか？」高い値ほど湿潤</li>
            </ul>
          </li>
          <li><strong>歴史データ</strong>と重ね合わせる：過去に霜害が発生した場所は？水が溜まる場所は？露が特に多い場所は？これらの「問題ゾーン」をマークする</li>
        </ul>
        <div class="visual-aid">
          <p>💡 <strong>記憶のヒント</strong>：これらの指標をブドウ園の「健康チェックリスト」として捉えてください</p>
          <ul class="checklist">
            <li>✓ 傾斜と向き＝「骨格」をチェック（構造）</li>
            <li>✓ 曲率＝「体型」をチェック（凸/凹）</li>
            <li>✓ TWI＝「代謝」をチェック（排水）</li>
            <li>✓ 歴史データ＝「病歴」をチェック（過去の問題）</li>
          </ul>
        </div>
        <h3>傾斜×向きリスクマトリクス</h3>
        <div class="table-intro">
          <p>この表は：<strong>異なる地形の組み合わせでどんな問題が発生するか、どう対処するか</strong>を示しています</p>
          <p class="reading-tip">📖 読み方：自分の区画の条件（傾斜＋向き）を見つけて主要リスクと管理方法を確認</p>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>傾斜</th><th>向き</th><th>熱蓄積</th><th>リスク</th><th>推奨管理</th></tr>
          </thead>
          <tbody>
            <tr><td>&lt;5%</td><td>北/東</td><td>平均以下</td><td>春霜・過湿</td><td>防風機＋防霜ネット、排水改善</td></tr>
            <tr><td>5〜12%</td><td>南/西</td><td>中程度</td><td>熱スパイク</td><td>樹冠遮光、灌漑管理</td></tr>
            <tr><td>&gt;12%</td><td>南西</td><td>高</td><td>干ばつ</td><td>保水マルチ、葉面積削減を控える</td></tr>
          </tbody>
        </table>
        <h3>冷気流と霜害シミュレーション</h3>
        <div class="concept-simplification">
          <p class="analogy">
            <strong>日常的なたとえ</strong>：冷気は水のように低い方へ流れます。バスタブを満たす場面を想像してください——水は排水口に向かって流れます；同様に、夜間の冷気は斜面を「流れ」下って低い場所に集まります。
          </p>
          <ul class="key-points">
            <li>🌡️ 冷気は暖気より<strong>重く</strong>、下方向に沈む</li>
            <li>⛰️ 障害物（土手・建物）に出会うと<strong>溜まる</strong></li>
            <li>❄️ 溜まった冷気スポットはより寒く、<strong>霜害を受けやすい</strong></li>
          </ul>
        </div>
        <p>専門ツール：CFD（数値流体力学）または簡略化モデルを使って冷気経路をシミュレーションし、冷気が「溜まりやすい」危険地帯を特定します。</p>
        <p class="subhead">クイック点検チェックリスト</p>
        <ul>
          <li>地形の低地と排水路に障害物がないか確認する。</li>
          <li>農道や土手が冷気の排出を妨げていないか確認する。</li>
          <li>防風機のカバー範囲と冷気溜まりの面積を比較する。</li>
        </ul>
        <h3>地表・地下排水</h3>
        <p>貫入抵抗、土壌電気伝導度（ECa）、深部ボーリングデータを分析して透水層と不透水層の境界を特定する。</p>
        <p class="subhead">排水ソリューションの組み合わせ</p>
        <ul>
          <li>傾斜排水路＋排水パイプ：表面過湿を解消。</li>
          <li>縦型深井戸：硬盤を突き破り水を排出。</li>
          <li>カバークロップ：透水性を高め土壌圧密を低減。</li>
        </ul>
        <h3>ケーススタディ：北向き微小区画の霜害管理</h3>
        <p class="subhead">背景</p>
        <p>3.2 haの北向き低地で、2021〜2022年に晩霜による損失が25%発生。</p>
        <p class="subhead">対策</p>
        <ul>
          <li>阻害していた土手を除去し、2本の排水路を掘削して冷気を排出。</li>
          <li>低エネルギー防風機2台を設置、カバー面積80%。</li>
          <li>ダブルバッド剪定に切り替えてバックアップ芽を確保。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>翌年、霜害損失が5%に低下し、酸度と収量が長期平均に回復。</p>
      </div>`;

// ── slides.5.content ─────────────────────────────────────
ja['slides.5.content'] = `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念紹介：なぜ土壌プロファイルを研究するのか？</h3>
          <p class="analogy">
            <strong>土壌をマンションの建物と想像してください</strong>：
          </p>
          <ul class="apartment-analogy">
            <li>🏢 <strong>表土</strong>（0〜30 cm）：1階ロビー、最も活発で有機物が最も多い</li>
            <li>🏢 <strong>下層土</strong>（30〜60 cm）：2階、主な根域</li>
            <li>🏢 <strong>基盤層</strong>（60 cm以下）：地下室、ミネラル源、根を遮断する「硬盤」があることも</li>
          </ul>
          <p>ブドウの根がどれだけ深く成長でき、どれだけ多くの栄養と水を吸収できるかは、この「土壌の建物」がどれだけうまく構造化されているかによります。</p>
          
          <div class="why-it-matters">
            <h4>❓ なぜブドウ園の一部は生育が良く、他の部分は良くないのか？</h4>
            <p>答えはしばしば<strong>地表から30〜100 cmの土壌層</strong>にあります：</p>
            <ul>
              <li>✅ 良好な土壌プロファイル：柔らかく通気性があり水はけが良い、根が2mの深さまで届ける</li>
              <li>❌ 不良な土壌プロファイル：30 cmに硬盤・過湿——根は表土で苦闘するしかない</li>
            </ul>
          </div>
        </div>

        <h3>土壌ボーリング手順</h3>
        <p class="practical-note">💼 <strong>実際の作業</strong>：土壌ドリルを使って1〜1.5ヘクタールごとに1穴（サッカーコート約2面ごと）を掘り、深さ1〜2メートルまで採掘し、観察用の土壌コアを抽出します。</p>
        <p>1〜1.5 haにつき最低1プロファイル；層位の厚さ、テクスチャー、礫・石含有量、さび・石灰浸透を記録。</p>
        <p class="subhead">プロファイル記録フォーマット</p>
        <div class="term-decoder">
          <p>📝 <strong>技術用語デコーダー</strong>（括弧内に平易な解説）：</p>
          <ul>
            <li><strong>層位</strong>：
              <ul class="nested-list">
                <li><strong>A層</strong>（表土）：最上層、暗色、有機物が豊富</li>
                <li><strong>Bt層</strong>（下層土）：中間層、粘土集積、主な根域の深さ</li>
                <li><strong>C層</strong>（基盤層）：下部層、母材に近い</li>
                <li><strong>R層</strong>（岩盤）：硬岩層、根が貫通できない</li>
              </ul>
            </li>
            <li><strong>テクスチャー</strong>（土壌の触感）：砂質＝粗い、シルト質＝滑らか、粘土質＝粘り気がある</li>
            <li><strong>構造</strong>（土粒子の凝集方法）：粒状が最良（ルーズ）；板状が最悪（圧密）</li>
            <li><strong>硬盤</strong>（圧密層）：根が貫通できないコンクリートのような層</li>
          </ul>
        </div>
        <h3>物理的・化学的診断</h3>
        <div class="table-guide">
          <p>この表は<strong>土壌健康チェックリスト</strong>で、各指標について：測定方法・基準値・範囲外の場合の対応策を示しています。</p>
          <p class="tip">💡 重要なのは数字を暗記することではなく、<strong>「この指標は何の問題を反映しているか？」</strong>を理解すること</p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>指標</th><th>方法</th><th>臨界値</th><th>管理上の決定</th></tr>
          </thead>
          <tbody>
            <tr><td>容積重</td><td>不撹乱土壌コア</td><td>&gt;1.55 g/cm³</td><td>深耕＋カバークロップ</td></tr>
            <tr><td>飽和透水係数</td><td>透水計</td><td>&lt;10 mm/時</td><td>排水パイプ / 砂質改良</td></tr>
            <tr><td>CEC（陽イオン交換容量）</td><td>ラボ分析</td><td>&lt;8 meq/100g</td><td>有機物添加、施肥調整</td></tr>
            <tr><td>活性石灰</td><td>ベルナール法</td><td>&gt;10%</td><td>耐石灰性台木選択、葉面鉄散布</td></tr>
          </tbody>
        </table>
        <h3>台木選択ディシジョンツリー</h3>
        <div class="decision-guide">
          <p class="analogy">🌱 <strong>たとえ</strong>：台木選びは車のエンジン選びのようなもの——路面状況（土壌）と目的（収量目標）に合わせて選択します。</p>
          <p>土壌制約と成長目標に基づき、<strong>3つの問い</strong>で最適な台木を選択します：</p>
        </div>
        <p class="subhead">3ステップ決定プロセス</p>
        <div class="step-by-step">
          <div class="step">
            <h4>ステップ1：土壌にどんな問題があるか？</h4>
            <ul>
              <li>🪨 高石灰？（pH &gt; 8、白っぽい土）→ 耐石灰性台木を選ぶ</li>
              <li>🏜️ 干ばつになりやすい？（排水が速すぎる、夏の水不足）→ 耐干ばつ性台木を選ぶ</li>
              <li>💧 過湿になりやすい？（排水不良、春にぬかるむ）→ 湿地耐性台木を選ぶ</li>
              <li>🐛 センチュウ病？→ 線虫抵抗性台木を選ぶ</li>
            </ul>
          </div>
          <div class="step">
            <h4>ステップ2：どの程度の樹勢が必要か？</h4>
            <ul>
              <li><strong>強勢台木</strong>：樹体が大きく収量が多い、ただし品質が低下する可能性</li>
              <li><strong>中程度台木</strong>：収量と品質のバランスが取れる</li>
              <li><strong>弱勢台木</strong>：樹体が小さく収量は低いが、果実が凝縮し品質が高い</li>
            </ul>
          </div>
          <div class="step">
            <h4>ステップ3：植付計画の確認</h4>
            <p>高密度植付（例：5,000本/ha）→ 過密を避けるため弱勢台木を使用<br>
            低密度植付（例：3,000本/ha）→ 収量確保のため中程度台木を使用可</p>
          </div>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>台木</th><th>耐ストレス性</th><th>樹勢</th><th>適する条件</th></tr>
          </thead>
          <tbody>
            <tr><td>3309C</td><td>中石灰耐性・良好排水</td><td>弱〜中</td><td>高密度・アロマの繊細さを追求</td></tr>
            <tr><td>101-14</td><td>湿地耐性・低石灰</td><td>弱</td><td>冷涼地域・晩熟品種</td></tr>
            <tr><td>SO4</td><td>中石灰・中線虫耐性</td><td>中</td><td>収量バランス・中程度土壌</td></tr>
            <tr><td>110R</td><td>高干ばつ・石灰耐性</td><td>強</td><td>乾燥砂利斜面・収量維持が必要な場合</td></tr>
          </tbody>
        </table>
        <h3>ケーススタディ：高石灰台地への植え替え</h3>
        <p class="subhead">背景</p>
        <p>活性石灰14%、CEC 6 meq；元の台木420Aは鉄欠乏と収量不安定を示していた。</p>
        <p class="subhead">戦略</p>
        <ul>
          <li>110R＋微生物接種で植え替えし、鉄吸収を促進。</li>
          <li>畝間に豆科カバークロップを植えて有機物を増加。</li>
          <li>土壌水分センサーで制御したゾーン別点滴灌漑を確立。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>3年目から収量が6.5 t/haで安定し、総アントシアニンが18%増加。</p>
      </div>`;

// ── slides.7.content ─────────────────────────────────────
ja['slides.7.content'] = `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念紹介：水分ストレスとは何か？</h3>
          <p class="analogy">
            <strong>日常のたとえ</strong>：ブドウの樹を体の循環系と考えてください：
          </p>
          <ul class="body-analogy">
            <li>💧 <strong>土壌水分</strong>＝血液の貯蔵量</li>
            <li>🫀 <strong>葉の水ポテンシャル</strong>＝血圧（低すぎると循環不良）</li>
            <li>😮 <strong>気孔コンダクタンス</strong>＝呼吸状態（ストレス下では樹が「息を止める」）</li>
            <li>🩺 <strong>水分ストレスモニタリング</strong>＝定期的な血圧測定で脳卒中（干ばつ危機）を防ぐ</li>
          </ul>
          
          <div class="why-monitor">
            <h4>❓ なぜ水分ストレスを監視するのか？</h4>
            <p>適度な水分ストレス（適度な運動のように）は<strong>ブドウの品質を向上</strong>させます：</p>
            <ul>
              <li>✅ 軽度ストレス（−0.4〜−0.6 MPa）：果実が凝縮し、風味が集中し、タンニンが繊細になる</li>
              <li>⚠️ 中程度ストレス（−0.6〜−0.9 MPa）：成長が遅くなり、要監視</li>
              <li>❌ 重度ストレス（&lt;−0.9 MPa）：樹体に損傷、アロマが失われる、緊急灌漑が必要</li>
            </ul>
            <p class="key-insight">💡 <strong>キー</strong>：「適度なストレス」と「過度なストレス」のバランスを見つける</p>
          </div>
        </div>

        <h3>測定マトリクス</h3>
        <div class="table-intro">
          <p>この表は<strong>4つの監視ツール</strong>を示しています。医師が異なる器具で体を診察するように：</p>
          <ul class="tool-list">
            <li>🩺 圧力チャンバー＝血圧計</li>
            <li>🫁 気孔計＝肺活量テスト</li>
            <li>💉 土壌センサー＝血液検査（貯蔵量確認）</li>
            <li>🩸 樹液流量計＝血流速度測定</li>
          </ul>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>指標</th><th>ツール</th><th>頻度</th><th>目標範囲</th><th>アラート</th></tr>
          </thead>
          <tbody>
            <tr><td>夜明け前葉の水ポテンシャル</td><td>圧力チャンバー</td><td>週1回</td><td>−0.4〜−0.6 MPa</td><td>&lt;−0.7 MPa：補充灌漑を実施</td></tr>
            <tr><td>正午の気孔コンダクタンス</td><td>気孔計</td><td>週2回</td><td>80〜120 mmol/m²s</td><td>&lt;60：葉の水ストレスが上昇</td></tr>
            <tr><td>土壌水分含量</td><td>TDRまたはFDR</td><td>毎日</td><td>圃場容水量の60〜70%</td><td>&lt;50%：植物水ポテンシャルが急落する可能性</td></tr>
            <tr><td>樹液流量</td><td>樹液流センサー</td><td>連続</td><td>ベースライン±15%</td><td>異常：詰まりまたは干ばつを確認</td></tr>
          </tbody>
        </table>
        <h3>水分ストレスモデリングワークフロー</h3>
        <p class="subhead">データ統合</p>
        <ul>
          <li>水ポテンシャル・土壌水分・天気予報・ET₀モデルを統合。</li>
          <li>日次水収支（灌漑＋降雨－蒸発散量）を構築。</li>
        </ul>
        <p class="subhead">モデル選択肢</p>
        <ul>
          <li>簡略バケットモデル：圃場容水量を上限として使用。</li>
          <li>FAO-56単一作物係数（Kc(表現型)入力）。</li>
          <li>機械学習：XGBoostで48時間先の水ポテンシャルトレンドを予測。</li>
        </ul>
        <h3>マルチ指標成熟度レーダーチャート</h3>
        <div class="concept-explanation">
          <p class="analogy">🎯 <strong>レーダーチャートとは？</strong></p>
          <p>成熟度を複数科目の試験と考えてください：</p>
          <ul class="exam-subjects">
            <li>🍯 <strong>糖度（Brix）</strong>：甘さの試験（15〜20°Brixが基準）</li>
            <li>🍋 <strong>酸度</strong>：フレッシュさの試験（6〜7 g/Lが基準）</li>
            <li>🍷 <strong>pH</strong>：バランスの試験（3.3〜3.5が基準）</li>
            <li>💜 <strong>アントシアニン</strong>：色の試験（ワインの色の深さを決定）</li>
            <li>🍇 <strong>種の褐変</strong>：種が茶色になったか（100%＝成熟）</li>
            <li>🌺 <strong>アロマ前駆物質</strong>：将来のアロマポテンシャル</li>
          </ul>
          <p>各指標を<strong>0〜5点</strong>に換算してレーダーチャートに描くことで、どの基準が合格でどれが不合格かを一目で確認できます。</p>
        </div>
        <p>Brix・滴定酸度・pH・アントシアニン・種褐変指数・アロマ前駆物質を収集；0〜5点に標準化。</p>
        <p class="subhead">応用</p>
        <ul>
          <li>微小区画間の成熟ペースの差を特定（最も早いものと遅いものは7〜10日の差が生じることも）。</li>
          <li>選択的収穫か遅延ブレンドが必要かを判断。</li>
        </ul>
        <h3>収穫窓決定ボード</h3>
        <div class="decision-framework">
          <p>📋 <strong>収穫決定の3つの重要要素</strong>：旅行前に考慮する3つのことのように</p>
          <ol class="decision-factors">
            <li><strong>🎯 品質</strong>（ブドウは準備できているか？）→ 成熟度レーダーを確認；目標に達しているか？</li>
            <li><strong>⛈️ リスク</strong>（天気は良いか？）→ 次の48時間で雨が降るか？霜のリスクは？</li>
            <li><strong>👥 リソース</strong>（収穫をこなせるか？）→ 人員・タンク・プレスは十分か？</li>
          </ol>
        </div>
        <p>3段階のしきい値を設定：品質（成熟レーダー）・リスク（雨/霜）・リソース（労働力/タンク/プレス）。</p>
        <p class="subhead">決定参照表</p>
        <div class="decision-table">
          <table>
            <tr><th>品質状態</th><th>リスクレベル</th><th>→ 推奨アクション</th></tr>
            <tr><td>✅ 目標達成</td><td>✅ 低リスク</td><td>→ 引き続き監視、最適なタイミングを待つ</td></tr>
            <tr><td>✅ 目標達成</td><td>⚠️ 高リスク</td><td>→ <strong>48時間以内に収穫</strong></td></tr>
            <tr><td>⚠️ 未達成</td><td>⚠️ 高リスク</td><td>→ 最良の区画だけ収穫；残りは保護</td></tr>
          </table>
        </div>
        <h3>水分シナリオとトレンドミニツール</h3>
        <div class="water-trend-widget" style="--highlight-color:#0ea5e9;">
          <input type="radio" id="wt-base" name="water-scenario-l41" class="opt-base" checked>
          <input type="radio" id="wt-drought" name="water-scenario-l41" class="opt-drought">
          <input type="radio" id="wt-irrigation" name="water-scenario-l41" class="opt-irrigation">
          <div class="control-row">
            <label for="wt-base">ベースライン年</label>
            <label for="wt-drought">高温干ばつシナリオ</label>
            <label for="wt-irrigation">夜間補充灌漑</label>
          </div>
          <div class="panels">
            <div class="chart" data-scenario="base">
              <svg viewBox="0 0 260 90" role="img" aria-label="ベースライン年の水ポテンシャルトレンド">
                <polyline points="0,50 40,48 80,52 120,47 160,49 200,46 240,48 260,47" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
            <div class="chart" data-scenario="drought">
              <svg viewBox="0 0 260 90" role="img" aria-label="高温干ばつシナリオの水ポテンシャルトレンド">
                <polyline points="0,50 40,55 80,62 120,70 160,78 200,82 240,86 260,88" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
            <div class="chart" data-scenario="irrigation">
              <svg viewBox="0 0 260 90" role="img" aria-label="夜間灌漑の水ポテンシャルトレンド">
                <polyline points="0,50 40,53 80,58 120,62 160,59 200,55 240,57 260,54" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
          </div>
          <div class="metrics">
            <div class="metric" data-scenario="base">
              <span class="label">平均夜明け前葉の水ポテンシャル</span>
              <span class="value">−0.55 MPa</span>
            </div>
            <div class="metric" data-scenario="base">
              <span class="label">灌漑需要</span>
              <span class="value">なし</span>
            </div>
            <div class="metric" data-scenario="drought">
              <span class="label">最低水ポテンシャル</span>
              <span class="value">−1.05 MPa</span>
            </div>
            <div class="metric" data-scenario="drought">
              <span class="label">推奨アクション</span>
              <span class="value">48時間以内に点滴灌漑＋マルチング</span>
            </div>
            <div class="metric" data-scenario="irrigation">
              <span class="label">夜間点滴量</span>
              <span class="value">4 mm/日</span>
            </div>
            <div class="metric" data-scenario="irrigation">
              <span class="label">水ポテンシャル回復予測</span>
              <span class="value">−0.65 MPa</span>
            </div>
          </div>
          <div class="notes">
            <p>青線＝水ポテンシャルトレンド；灰色線＝管理しきい値（−0.6 MPa）。シナリオを切り替えて対応決定を討論。</p>
          </div>
        </div>
        <h3>ケーススタディ：2023年高温干ばつ年の管理</h3>
        <p class="subhead">インサイト</p>
        <p>XGBoostが4日後に水ポテンシャルが−1.0 MPaに低下すると予測；アロマ指標はまだ改善中。</p>
        <p class="subhead">決定</p>
        <ul>
          <li>砂利斜面のカベルネを先に収穫（より早く熟す）。</li>
          <li>粘土区画は夜間点滴灌漑を維持し、収穫を5日遅らせた。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>Brix差0.25%を維持しフェノール指標を最適化、高温によるアロマ損失を回避。</p>
      </div>`;

// ── slides.9.content ─────────────────────────────────────
ja['slides.9.content'] = `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念紹介：なぜ区画ごとに醸造するのか？</h3>
          <p class="analogy">
            <strong>音楽のたとえ</strong>：微小区画醸造をオーケストラの組み立てと考えてください：
          </p>
          <ul class="orchestra-analogy">
            <li>🎻 <strong>砂利斜面区画</strong>＝ヴァイオリンセクション（繊細・明快・骨格）</li>
            <li>🎺 <strong>粘土台地区画</strong>＝金管セクション（豊かで力強く構造的）</li>
            <li>🎼 <strong>川のテラス区画</strong>＝木管セクション（アロマ豊か・エレガント・重層的）</li>
          </ul>
          <p>すべての楽器を同時に同じ場所で録音すると、各セクションの音量と効果を調整することが難しくなります。しかし<strong>別々に録音</strong>すれば、最終的なミックスで精密にコントロールできます：</p>
          <ul class="benefits-list">
            <li>✓ ヴァイオリンが弱すぎる？音量を上げる</li>
            <li>✓ 金管が強すぎる？比率を下げる</li>
            <li>✓ 特別バージョンが欲しい？異なる比率で再結合</li>
          </ul>
          <p class="key-insight">💡 <strong>核心的な哲学</strong>：区画別醸造は各区画の個性を保存する；アッサンブラージュを通じて、単一区画より複雑でバランスの取れたワインを創り出す。</p>
        </div>

        <h3>バッチ収穫とタンク計画</h3>
        <div class="practical-guide">
          <p>📅 <strong>実際的な問い</strong>：どの区画を別々に収穫するかをどう決めるか？</p>
          <p>答え：<strong>成熟度の差</strong>と<strong>スタイル目標</strong>を見る</p>
        </div>
        <p>区画の成熟度と目標スタイルに基づいてバッチ収穫するかを決定。</p>
        <p class="subhead">スケジュール原則</p>
        <ul>
          <li>成熟が同期している区画：1タンクにまとめて作業の複雑さを軽減。</li>
          <li>成熟がずれている区画：2〜3回の収穫パスで酸度とアロマの重層性を保持。</li>
        </ul>
        <h3>微小発酵設定</h3>
        <table class="data-table compact">
          <thead>
            <tr><th>区画</th><th>発酵容器</th><th>酵母/培養</th><th>マセラシオン戦略</th><th>監視指標</th></tr>
          </thead>
          <tbody>
            <tr><td>砂利斜面A</td><td>3.5 hL開放型バレル</td><td>自然酵母</td><td>コールドソーク4日＋穏やかなピジャージュ</td><td>アントシアニン・温度</td></tr>
            <tr><td>粘土台地B</td><td>ステンレス鋼コニカルタンク</td><td>選抜酵母D254</td><td>短マセラシオン＋マイクロオキシジェネーション</td><td>還元指標・YAN</td></tr>
            <tr><td>川のテラスC</td><td>卵型コンクリート容器</td><td>少量白皮との共発酵</td><td>継続的懸濁</td><td>ミッドパレートの重量感・乳酸菌</td></tr>
          </tbody>
        </table>
        <h3>官能・化学的トラッキング</h3>
        <p>バッチごとの官能カードと化学指標テンプレートを構築。</p>
        <p class="subhead">主要フィールド</p>
        <ul>
          <li>官能：アロマタイプ・パレート構造・余韻。</li>
          <li>化学：アルコール・フェノール類・色素密度・揮発酸。</li>
          <li>経済：バッチあたりのコスト・樽熟成・推定ブレンド比率。</li>
        </ul>
        <h3>ブレンドマトリクスと意思決定</h3>
        <table class="data-table">
          <thead>
            <tr><th>バッチ</th><th>スタイルプロファイル</th><th>長所</th><th>制限</th><th>ブレンド推奨</th></tr>
          </thead>
          <tbody>
            <tr><td>砂利斜面A</td><td>骨格</td><td>繊細なタンニン・ミネラル</td><td>当初は閉じている</td><td>主要成分50〜60%</td></tr>
            <tr><td>粘土台地B</td><td>構造</td><td>フルボディ・ダークフルーツ</td><td>還元リスク</td><td>20〜30%、マイクロオキシジェネーション必要</td></tr>
            <tr><td>川のテラスC</td><td>アロマのリフト</td><td>赤果実・花</td><td>高めの酸度</td><td>10〜20%、酸度調整用</td></tr>
          </tbody>
        </table>
        <h3>ブレンド戦略シミュレーター</h3>
        <div class="blend-widget">
          <input type="radio" id="blend-classic" name="blend-strategy-l41" class="opt-classic" checked>
          <input type="radio" id="blend-aromatic" name="blend-strategy-l41" class="opt-aromatic">
          <input type="radio" id="blend-reserve" name="blend-strategy-l41" class="opt-reserve">
          <div class="tabs">
            <label for="blend-classic">クラシックバランス</label>
            <label for="blend-aromatic">アロマ重視</label>
            <label for="blend-reserve">グランドリザーブ</label>
          </div>
          <div class="scenarios">
            <div class="scenario" data-scenario="classic">
              <table class="data-table compact">
                <thead>
                  <tr><th>バッチ</th><th>比率</th><th>貢献</th></tr>
                </thead>
                <tbody>
                  <tr><td>砂利斜面A</td><td>60%</td><td>骨格とミネラル</td></tr>
                  <tr><td>粘土台地B</td><td>25%</td><td>ボディの重量感とダークフルーツ</td></tr>
                  <tr><td>川のテラスC</td><td>15%</td><td>赤果実と花のリフト</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">推定アルコール</span><span class="value">13.4%</span></div>
                <div class="metric"><span class="label">構造指数</span><span class="value">7.8 / 10</span></div>
                <div class="metric"><span class="label">樽推奨</span><span class="value">新樽40%</span></div>
              </div>
              <p class="note">シャトーのクラシックスタイル維持に最適；骨格とアロマのバランスが取れ；熟成ポテンシャル10〜12年。</p>
            </div>
            <div class="scenario" data-scenario="aromatic">
              <table class="data-table compact">
                <thead>
                  <tr><th>バッチ</th><th>比率</th><th>貢献</th></tr>
                </thead>
                <tbody>
                  <tr><td>砂利斜面A</td><td>50%</td><td>構造とミネラルの基盤</td></tr>
                  <tr><td>粘土台地B</td><td>15%</td><td>柔らかいテクスチャー</td></tr>
                  <tr><td>川のテラスC</td><td>35%</td><td>赤果実・花・酸度</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">推定アルコール</span><span class="value">13.0%</span></div>
                <div class="metric"><span class="label">アロマ指数</span><span class="value">8.5 / 10</span></div>
                <div class="metric"><span class="label">瓶詰めタイムライン</span><span class="value">18ヶ月以内</span></div>
              </div>
              <p class="note">アロマと早飲み適性を際立たせる；限定スペシャルエディションや食中酒として適切。</p>
            </div>
            <div class="scenario" data-scenario="reserve">
              <table class="data-table compact">
                <thead>
                  <tr><th>バッチ</th><th>比率</th><th>貢献</th></tr>
                </thead>
                <tbody>
                  <tr><td>砂利斜面A</td><td>75%</td><td>深みのあるタンニンとミネラル</td></tr>
                  <tr><td>粘土台地B</td><td>20%</td><td>骨格と熟した果実の甘み</td></tr>
                  <tr><td>川のテラスC</td><td>5%</td><td>酸度とアロマの輝き</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">推定アルコール</span><span class="value">13.8%</span></div>
                <div class="metric"><span class="label">熟成ポテンシャル</span><span class="value">15年以上</span></div>
                <div class="metric"><span class="label">樽推奨</span><span class="value">新樽60%＋大型樽</span></div>
              </div>
              <p class="note">フラッグシップリザーブまたはグラン・クリュスタイルの瓶詰めに最適；新樽管理と還元リスク制御に注意が必要。</p>
            </div>
          </div>
        </div>
        <h3>ケーススタディ：3区画ブレンディングプロセス</h3>
        <p class="subhead">ステップ</p>
        <ol>
          <li>初期スクリーニング：揮発酸&gt;0.7 g/Lのバッチを除外。</li>
          <li>アロマ組み合わせ：砂利A：川のテラスC＝70:30をベースとして。</li>
          <li>構造補強：粘土Bを20%追加し樽熟成を調整。</li>
        </ol>
        <p class="subhead">結果</p>
        <p>最終ブレンドはブラインドテイスティングで92点を獲得し、3つの区画の個性を保ちながら全体的なバランスを達成。</p>
      </div>`;

// ── slides.10.content ────────────────────────────────────
ja['slides.10.content'] = `
      <div class="summary-content">
        <h3>🎯 4つのコア能力の復習</h3>
        <div class="skills-review">
          <div class="skill-block">
            <h4>1️⃣ 地形を読む：差異を識別する</h4>
            <ul>
              <li>LiDAR/DEMで地形をマッピング</li>
              <li>傾斜・向き・冷気溜まりゾーンを特定</li>
              <li>高リスク区域をマーク（霜・過湿）</li>
            </ul>
            <p class="key-output">✓ 成果物：微小区画境界マップ（0.1〜0.5 haスケール）</p>
          </div>
          
          <div class="skill-block">
            <h4>2️⃣ 土壌を読む：ポテンシャルを評価する</h4>
            <ul>
              <li>土壌プロファイルのボーリング（深さ1〜2 m）</li>
              <li>物理的・化学的指標を測定（容積重・CEC・石灰）</li>
              <li>適合する台木を選択（石灰耐性・干ばつ耐性・樹勢）</li>
            </ul>
            <p class="key-output">✓ 成果物：土壌制約マップ＋台木選択プラン</p>
          </div>
          
          <div class="skill-block">
            <h4>3️⃣ 水を読む：タイミングを掴む</h4>
            <ul>
              <li>葉の水ポテンシャル・気孔コンダクタンス・土壌水分を監視</li>
              <li>水分ストレスモデルを構築（機械学習）</li>
              <li>成熟レーダーチャートを統合して収穫窓を計算</li>
            </ul>
            <p class="key-output">✓ 成果物：段階的収穫スケジュール＋灌漑管理</p>
          </div>
          
          <div class="skill-block">
            <h4>4️⃣ 醸造を読む：精密なアッサンブラージュ</h4>
            <ul>
              <li>区画別発酵（異なる容器・酵母）</li>
              <li>官能的・化学的指標を追跡</li>
              <li>ブレンドマトリクスを構築（長所・制限・比率）</li>
            </ul>
            <p class="key-output">✓ 成果物：最終ブレンド提案＋スタイルポジショニング</p>
          </div>
        </div>

        <h3>💭 理論から実践へ：システム思考</h3>
        <p>微小区画管理は孤立した技術ではなく、<strong>クローズドループシステム</strong>です：</p>
        <div class="system-flow">
          <div class="flow-step">
            <span class="step-number">①</span>
            <p><strong>データ収集</strong><br>地形スキャン・土壌検査・水分監視</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">②</span>
            <p><strong>区画クラスタリング</strong><br>類似性でグループ化して管理単位を作成</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">③</span>
            <p><strong>差別化管理</strong><br>適地適法の灌漑・剪定・収穫</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">④</span>
            <p><strong>区画別醸造</strong><br>各区画の個性を保持</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">⑤</span>
            <p><strong>精密アッサンブラージュ</strong><br>目指すスタイルに組み合わせる</p>
          </div>
        </div>

        <h3>🌟 主要な洞察</h3>
        <div class="key-insights">
          <div class="insight">
            <h4>⚖️ 差異はリソース、問題ではない</h4>
            <p>ブドウ園内の微気候と土壌の差異は取り除くべき欠陥ではなく、活用すべき<strong>風味のパレット</strong>です。砂利は骨格を、粘土は肉感を、川のテラスはアロマを与える——重要なのは、それらをどのように組み合わせるかです。</p>
          </div>
          
          <div class="insight">
            <h4>📊 データは展示ではなく意思決定を支援する</h4>
            <p>LiDAR・水ポテンシャル・機械学習は印象的に聞こえますが、究極の問いは：<strong>これらのデータは私がどんな決定をするのを助けているか？</strong>地形マップ→防風機の設置場所を決定；水ポテンシャルデータ→灌漑タイミングを決定；成熟レーダー→収穫バッチを決定。</p>
          </div>
          
          <div class="insight">
            <h4>🤝 部門横断の連携が成否を決める</h4>
            <p>微小区画管理には：データを提供する栽培チーム、発酵戦略を設計する醸造責任者、風味を統合するブレンダー、市場をポジショニングする営業チームが必要です。単一のリンクは独立して機能できません。</p>
          </div>
        </div>

        <h3>📚 さらなる学習への推奨</h3>
        <ul class="further-learning">
          <li><strong>技術的深化</strong>：GISソフトウェア（QGIS）・統計モデリング（R/Python）・センサーデータ分析を学ぶ</li>
          <li><strong>現地訪問</strong>：微小区画管理を実践しているシャトーを訪問（シャトー・ラトゥール・パルメールなど）</li>
          <li><strong>さらなる読書</strong>：<em>Precision Viticulture</em>・<em>Understanding Wine Chemistry</em></li>
          <li><strong>上位資格</strong>：WSET Level 4・フランス農業工学プログラム</li>
        </ul>

        <div class="final-message">
          <p>🎓 <strong>最後に</strong></p>
          <p>微小区画管理は過去20年間でボルドーのトップシャトーにとって最も重要な品質革命です。それは単なる技術的なアップグレードではなく、<strong>哲学的な転換</strong>です：「均一な標準化」から「差異を尊重すること」へ、「平均的な品質」から「卓越した重層性」へ。</p>
          <p>このシステム的な枠組みを習得したあなたは、<strong>レベル4の専門家レベル</strong>の分析能力を持つようになりました——この挑戦的なコースの修了、おめでとうございます！</p>
        </div>
      </div>`;

fs.writeFileSync('src/locales/ja/lessons/bordeaux/l4-1.json', JSON.stringify(ja, null, 2), 'utf8');
console.log('Keys:', Object.keys(ja).length);
