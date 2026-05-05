const fs = require('fs');
const ja = {};

// ── Non-content keys ──────────────────────────────────────
ja['slides.0.title'] = '学習目標';
ja['slides.1.subtitle'] = '木材の起源';
ja['slides.1.title'] = '第1章';
ja['slides.2.highlights.0.title'] = '産地の違い';
ja['slides.2.highlights.1.title'] = '乾燥トレーサビリティ';
ja['slides.2.highlights.2.title'] = '供給リスク';
ja['slides.2.title'] = '第1章：木材科学と産地設計';
ja['slides.3.subtitle'] = 'チャー処理';
ja['slides.3.title'] = '第2章';
ja['slides.4.highlights.0.title'] = '熱分解層';
ja['slides.4.highlights.1.title'] = '温度曲線モニタリング';
ja['slides.4.highlights.2.title'] = 'インタラクティブ設定';
ja['slides.4.title'] = '第2章：チャー曲線と表面プロファイリング';
ja['slides.5.subtitle'] = '容器素材';
ja['slides.5.title'] = '第3章';
ja['slides.6.highlights.0.title'] = '酸素透過率リファレンス';
ja['slides.6.highlights.1.title'] = '熱慣性の優位性';
ja['slides.6.highlights.2.title'] = '容器連鎖';
ja['slides.6.title'] = '第3章：容器素材と微量酸素添加管理';
ja['slides.7.subtitle'] = '樽管理';
ja['slides.7.title'] = '第4章';
ja['slides.8.highlights.0.title'] = '樽齢KPI';
ja['slides.8.highlights.1.title'] = '3段階衛生管理';
ja['slides.8.highlights.2.title'] = '寿命延長戦略';
ja['slides.8.title'] = '第4章：樽齢管理と衛生管理';
ja['slides.9.subtitle'] = '戦略';
ja['slides.9.title'] = '第5章';
ja['slides.10.highlights.0.title'] = '投資マトリクス';
ja['slides.10.highlights.1.title'] = 'シナリオ設定';
ja['slides.10.highlights.2.title'] = 'パフォーマンスダッシュボード';
ja['slides.10.title'] = '第5章：複数容器の相乗効果と投資意思決定';
ja['slides.11.title'] = 'コースまとめ';
ja['slides.12.title'] = '課後クイズ';

// ── Quiz keys ─────────────────────────────────────────────
ja['slides.12.questions.0.question'] = '樽の寿命を延長してアロマベースラインをリセットするために最も適切なプロセスはどれか？';
ja['slides.12.questions.0.options.0'] = '熱湯ですすいですぐに使用する';
ja['slides.12.questions.0.options.1'] = '樽内削り（シェービング）とチャー処理の組み合わせ';
ja['slides.12.questions.0.options.2'] = 'SO₂濃度を50 mg/Lに上げる';
ja['slides.12.questions.0.explanation'] = '削りとチャー処理を組み合わせることで古い板目層を除去し、木のアロマを再活性化できる——これが標準的な樽延命法である。';
ja['slides.12.questions.1.question'] = 'コンクリートエッグタンクの主な利点はどれか？';
ja['slides.12.questions.1.options.0'] = '最も高い微量酸素添加量を提供する';
ja['slides.12.questions.1.options.1'] = '高い熱慣性による自然対流の促進';
ja['slides.12.questions.1.options.2'] = '完全にメンテナンス不要で最もコストが低い';
ja['slides.12.questions.1.explanation'] = 'コンクリートの高い熱慣性は発酵温度を安定させ、自然対流を生み出して均一な酵母懸濁を促進する。';
ja['slides.12.questions.2.question'] = 'チャー処理中に苦味を引き起こす局所的な焦げを防ぐには？';
ja['slides.12.questions.2.options.0'] = '260°Cまで加熱を加速する';
ja['slides.12.questions.2.options.1'] = 'パルス炎を使用し板目内部温度を監視する';
ja['slides.12.questions.2.options.2'] = 'チャー時間を30秒に短縮する';
ja['slides.12.questions.2.explanation'] = 'パルス炎と板目コア温度の監視を組み合わせることで、木材全体の均一な熱分解を維持し局所炭化を防ぐ。';
ja['slides.12.questions.3.question'] = 'オーク木材の仕入れ品質を評価する際、通気とアロマ放出の一貫性を最もよく反映する指標はどれか？';
ja['slides.12.questions.3.options.0'] = '年輪密度（本/cm）';
ja['slides.12.questions.3.options.1'] = '板目の物理的寸法';
ja['slides.12.questions.3.options.2'] = 'ワイナリー現在の在庫数';
ja['slides.12.questions.3.explanation'] = '年輪密度は気孔構造とアロマ化合物（ラクトン・バニリンなど）の放出速度を直接決定する。';
ja['slides.12.questions.4.question'] = '複数容器戦略のTCO（総所有コスト）を計算する際に最も見過ごされやすいコストはどれか？';
ja['slides.12.questions.4.options.0'] = '新樽の購入費';
ja['slides.12.questions.4.options.1'] = 'コンクリートタンクの清掃用水消費と定期メンテナンス';
ja['slides.12.questions.4.options.2'] = 'ステンレスタンクの購入価格';
ja['slides.12.questions.4.explanation'] = 'コンクリートタンクは低メンテナンスに見えるが大量の水と専門的な清掃手順が必要；長期TCOでは見落とされやすい。';

// ── Highlights content (short) ────────────────────────────
ja['slides.2.highlights.0.content'] = 'フランス産・アメリカ産・東ヨーロッパ産オークは木目と抽出リズムが大きく異なる。';
ja['slides.2.highlights.1.content'] = '水分含有量と微生物モニタリングがその後のアロマ純粋性を決定する。';
ja['slides.2.highlights.2.content'] = '価格・認証・物流は長期契約管理に組み込む必要がある。';
ja['slides.4.highlights.0.content'] = 'ヘミセルロース→リグニン→脂肪酸が順番に異なるアロマを放出する。';
ja['slides.4.highlights.1.content'] = '熱電対と赤外線で板目コアと表面の温度差を記録する。';
ja['slides.4.highlights.2.content'] = '軽度・中度・重度チャーの指標でアロマと構造をリアルタイム比較する。';
ja['slides.6.highlights.0.content'] = '各容器の酸素供給能力をmg/L・月で定義する。';
ja['slides.6.highlights.1.content'] = 'コンクリートとアンフォラは温度変動を平滑化できる。';
ja['slides.6.highlights.2.content'] = '複数容器を段階的熟成で連鎖させ、アロマと構造を調整する。';
ja['slides.8.highlights.0.content'] = 'バニリン・タンニン・官能評価が樽齢カテゴリーを共同で決定する。';
ja['slides.8.highlights.1.content'] = '熱水→酸化剤→乾燥モニタリングで微生物発生源をブロックする。';
ja['slides.8.highlights.2.content'] = '削りとチャー処理の再施行・UV/オゾン処理で使用寿命を延長できる。';
ja['slides.10.highlights.0.content'] = 'CapEx/OpEx/耐用年数を一目で確認し資本計画を支援する。';
ja['slides.10.highlights.1.content'] = '3つの容器シナリオがクラシック・ハイブリッド・革新ラインをカバーする。';
ja['slides.10.highlights.2.content'] = '官能・財務・サステナビリティの3次元KPIトラッキング。';

// ── slides.2.content ─────────────────────────────────────
ja['slides.2.content'] = `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念紹介：木材は食材のようなもの——産地が風味を決める</h3>
            
            <div class="analogy-box">
              <h4>🍚 日常のたとえ：オーク材 ＝ 米の品種</h4>
              <p>オーク材の選択は米の品種を選ぶようなものです：</p>
              <ul>
                <li><strong>フランスオーク</strong> ＝ 魚沼産コシヒカリ（繊細・低速抽出・高価・最高級料理向け）</li>
                <li><strong>アメリカンオーク</strong> ＝ タイジャスミン米（香り豊か・高速抽出・コスパ良・炒め物向け）</li>
                <li><strong>東ヨーロッパオーク</strong> ＝ 国産汎用米（万能・バランス良・優れたコスパ）</li>
              </ul>
              <p class="insight">コシヒカリを炒め物に使わないように、アメリカンオークで繊細なピノ・ノワールを熟成させるべきではありません。<strong>素材をスタイル目標に合わせること。</strong></p>
            </div>

            <div class="term-explanation">
              <h4>🔑 専門用語をわかりやすく</h4>
              <table class="term-table">
                <tr>
                  <td><strong>木目（グレイン）</strong></td>
                  <td>＝ 木材の「繊維の粗さ」。細木目 → 遅い抽出（細かい砂でコーヒーをろ過するように）；粗木目 → 速い抽出（粗いメッシュでお茶をろ過するように）</td>
                </tr>
                <tr>
                  <td><strong>抽出動態</strong></td>
                  <td>＝ 木材がワインにアロマを放出するスピード。速い ＝ 3ヶ月で効果的；遅い ＝ 12ヶ月で飽和</td>
                </tr>
                <tr>
                  <td><strong>天然乾燥</strong></td>
                  <td>＝ 木材を屋外に2〜3年放置する（生ハムの熟成のように）；微生物が苦味成分を分解</td>
                </tr>
                <tr>
                  <td><strong>ラクトン</strong></td>
                  <td>＝ ヤシ・バターのアロマ分子、アメリカンオークに豊富（バーボン樽がヤシのニュアンスを持つ理由）</td>
                </tr>
              </table>
            </div>

            <div class="reading-guide">
              <h4>📖 以下の樹種比較表の読み方</h4>
              <ol>
                <li><strong>ステップ1</strong>：ワインスタイルを確認（繊細/豊か？花のニュアンス/キャラメル？）</li>
                <li><strong>ステップ2</strong>：対応する樹種を探す（フランス ＝ 繊細・花；アメリカン ＝ 豊か・キャラメル）</li>
                <li><strong>ステップ3</strong>：抽出動態を確認（早出荷 → 速抽出を選ぶ；長期熟成 → 遅抽出を選ぶ）</li>
                <li><strong>ステップ4</strong>：予算を確認（フランスオークは2〜3倍高価）</li>
              </ol>
              <p class="tip">💡 <strong>記憶のコツ</strong>：フランスオーク ＝ 緻密な職人技・高価；アメリカンオーク ＝ 速い・豊か・手頃</p>
            </div>
          </div>

          <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-3/01 French-American-Oak-Comparison.svg" alt="フランスオーク vs アメリカンオーク：素材・風味寄与・チャーレベル・ボルドー使用戦略の総合比較" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
          <h3>オーク樹種と木目</h3>
          <table class="data-table">
            <thead>
              <tr><th>樹種</th><th>木目</th><th>抽出動態</th><th>感覚的特徴</th><th>主な用途</th></tr>
            </thead>
            <tbody>
              <tr><td>フランスオーク（Quercus robur）</td><td>細目</td><td>遅い</td><td>バニラ・花・洗練されたタンニン</td><td>最高級赤ワイン・シャンパーニュベースワイン</td></tr>
              <tr><td>アメリカンオーク（Quercus alba）</td><td>粗〜中</td><td>速い</td><td>ヤシ・キャラメル・幅広いタンニン</td><td>テンプラニーリョ・バーボン樽移し</td></tr>
              <tr><td>ハンガリー/東ヨーロッパオーク</td><td>中細目</td><td>中程度</td><td>スパイス・ハチミツ・バランスのとれたタンニン</td><td>コスパ重視の長期熟成</td></tr>
              <tr><td>栗（Castanea sativa）</td><td>粗目</td><td>速い</td><td>キャラメル・酸化的個性</td><td>伝統的甘口ワイン・シェリースタイル</td></tr>
            </tbody>
          </table>
          <h3>乾燥とコンディショニング戦略</h3>
          <p>天然乾燥24〜36ヶ月で可溶性タンニンが分解されラクトンが増加する；窯乾燥はプロセスを加速するが蒸気コンディショニングで刺激を避ける必要がある。</p>
          <p class="subhead">主要パラメータ</p>
          <ul>
            <li>目標水分含有量：天然乾燥12〜16%、混合乾燥は精密に10%まで可能。</li>
            <li>微生物モニタリング：<em>Aureobasidium</em>属はバニリン前駆体を促進；黒カビ汚染は避けること。</li>
            <li>トレーサビリティ：産地→製材→乾燥バッチをRFIDまたはブロックチェーンで記録しQC管理。</li>
          </ul>
          <h3>抽出動態とタイムライン</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>期間（ヶ月）</th><th>主要化合物</th><th>影響</th><th>監視推奨</th></tr>
            </thead>
            <tbody>
              <tr><td>0〜3</td><td>エチルラクタート・バニリン前駆体</td><td>初期アロマ急増</td><td>月次官能＋GC-MSトラッキング</td></tr>
              <tr><td>3〜9</td><td>ラクトン・フラン化合物</td><td>チャーアロマが安定</td><td>L* a* b*色とタンニン指数を測定</td></tr>
              <tr><td>9〜18</td><td>色素酸・フェノール重合</td><td>構造的統合</td><td>タンニン/グルカン比とDO管理</td></tr>
            </tbody>
          </table>
          <h3>供給チェーンリスクレーダー</h3>
          <p>木材の需給は気候と森林政策に影響される；リスクレーダーで価格変動・納期遅延・認証要件を評価する。</p>
          <ul>
            <li>価格変動：フランスオークは2022〜2024年に平均+18%；3〜5年フレーム契約の締結を推奨。</li>
            <li>認証：FSC/PEFCオンライン検証；未認証素材は不可。</li>
            <li>物流：板目vs組み立て済み樽の輸送——炭素排出と損失を考慮。</li>
          </ul>
        </div>`;

// ── slides.4.content ─────────────────────────────────────
ja['slides.4.content'] = `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念紹介：樽のチャー処理 ＝ パンを焼く科学</h3>
            
            <div class="analogy-box">
              <h4>🍞 日常のたとえ：チャー曲線はパンの焼き色コントロール</h4>
              <p>パンをトーストするイメージで：</p>
              <ul>
                <li><strong>120〜160°C</strong> ＝ パンがちょうど金色に（バターアロマ・ヤシ）</li>
                <li><strong>180〜210°C</strong> ＝ パンがカラメル化（キャラメルアロマ・トースト感）</li>
                <li><strong>220〜240°C</strong> ＝ パンの縁が焦げる（スモーキーアロマだが苦味に注意）</li>
              </ul>
              <p class="insight">トースト職人の技は「<strong>燃やさずにアロマ層を豊かにするための温度曲線の精密コントロール</strong>」。チャー過剰 ＝ 苦味；チャー不足 ＝ アロマなし。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 専門用語をわかりやすく</h4>
              <table class="term-table">
                <tr>
                  <td><strong>熱分解（パイロリシス）</strong></td>
                  <td>＝ 高温が木材の大分子を小さなアロマ分子に「分解する」。肉を焼くとタンパク質が分解して焦げた香りが生まれるのと同じ</td>
                </tr>
                <tr>
                  <td><strong>ヘミセルロース</strong></td>
                  <td>＝ 木材の「砂糖倉庫」、加熱するとキャラメルとトフィーのアロマになる</td>
                </tr>
                <tr>
                  <td><strong>リグニン</strong></td>
                  <td>＝ 木材の「骨格」、高温クラッキングでバニリン（バニラ）とオイゲノール（クローブ）を生成</td>
                </tr>
                <tr>
                  <td><strong>脂肪酸</strong></td>
                  <td>＝ 木材の「脂肪」、エチルラクタート（ヤシのアロマ）とバターのアロマになる</td>
                </tr>
                <tr>
                  <td><strong>PAH（多環芳香族炭化水素）</strong></td>
                  <td>＝ 過剰炭化で生成する発がん物質（焼きすぎた肉のベンゾピレンのように）；厳格な時間管理が必要</td>
                </tr>
              </table>
            </div>

            <div class="toast-formula">
              <h4>🔥 チャーの公式：温度×時間 ＝ アロマプロファイル</h4>
              <p><strong>ライトチャー</strong>（低温・長時間）→ 花のニュアンス・バター・繊細<br>
              <strong>ミディアムチャー</strong>（中温・適切なタイミング）→ バニラ・キャラメル・バランス<br>
              <strong>ヘビーチャー</strong>（高温・短時間）→ スモーキー・カカオ・構造的</p>
              <p class="tip">💡 <strong>記憶のコツ</strong>：ライト ＝ 花のニュアンス、ミディアム ＝ バニラ、ヘビー ＝ スモーキー（コーヒー豆の焙煎のように）</p>
            </div>

            <div class="reading-guide">
              <h4>📖 インタラクティブチャープロファイル表の使い方</h4>
              <ol>
                <li>チャーレベルを選択（ライト / ミディアム / ヘビー）</li>
                <li>対応するアロマ指標を確認（バニリン・ラクトンなどの値）</li>
                <li>「推奨新樽比率」を参照してブレンド判断に活用</li>
                <li><strong>ポイント</strong>：数字を暗記するのではなく、「ライトチャーは白ワインに、ヘビーチャーは赤ワインに」というロジックを理解する</li>
              </ol>
            </div>
          </div>

          <h3>熱分解メカニズム</h3>
          <p>ヘミセルロースは150〜200°Cでキャラメルとフラン化合物を放出；リグニンは200〜240°Cでバニリンとオイゲノールを生成；脂肪酸は120〜180°Cでヤシのエチルラクタートを生成。</p>
          <table class="data-table compact">
            <thead>
              <tr><th>温度範囲</th><th>主要変換</th><th>感覚的影響</th><th>リスク</th></tr>
            </thead>
            <tbody>
              <tr><td>120〜160°C</td><td>水分蒸発・脂肪酸クラッキング</td><td>ヤシ・バター</td><td>過剰乾燥 → 板目ひび割れ</td></tr>
              <tr><td>180〜210°C</td><td>ヘミセルロースのカラメル化</td><td>キャラメル・トースト感</td><td>局所炭化 → 苦味</td></tr>
              <tr><td>220〜240°C</td><td>リグニンクラッキング</td><td>スモーク・バニラ・スパイス</td><td>PAH → 時間管理が必要</td></tr>
            </tbody>
          </table>
          <h3>チャー曲線コントロール</h3>
          <p>熱電対または赤外線温度計で板目コアと表面の温度差を記録；加熱速度を3〜5°C/分にロックし高温フェーズでパルス炎を使用して局所炭化を避ける。</p>
          <h3>表面プロファイリングオプション</h3>
          <ul>
            <li>蒸気コンディショニング：チャー前5〜8分スチームで抽出曲線を遅らせることができる。</li>
            <li>赤外線強化：板目内部に2〜3分集中し、色を増やさずにバニリンを増加させる。</li>
            <li>内部削り＋チャー再処理：樽の寿命を延長しアロマベースラインをリセット。</li>
          </ul>
          <h3>インタラクティブチャープロファイル表</h3>
          <div class="toast-profile-widget" style="--highlight-color:#f97316;">
            <input type="radio" id="toast-light" name="toast-profile-l43" class="opt-light" checked>
            <input type="radio" id="toast-medium" name="toast-profile-l43" class="opt-medium">
            <input type="radio" id="toast-heavy" name="toast-profile-l43" class="opt-heavy">
            <div class="selectors">
              <label for="toast-light">ライトチャー</label>
              <label for="toast-medium">ミディアムチャー</label>
              <label for="toast-heavy">ヘビーチャー</label>
            </div>
            <div class="panels">
              <div class="panel" data-profile="light">
                <table class="data-table compact">
                  <thead>
                    <tr><th>指標</th><th>データ</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>バニリン</td><td>45〜55 mg/L・サンプルワイン</td></tr>
                    <tr><td>ラクトン</td><td>120 μg/L</td></tr>
                    <tr><td>タンニン放出</td><td>低</td></tr>
                    <tr><td>推奨新樽比率</td><td>15〜25%</td></tr>
                  </tbody>
                </table>
                <p class="note">繊細な白ワインやフルーツを保持したい赤ワインに適する；新樽比率15〜25%。</p>
              </div>
              <div class="panel" data-profile="medium">
                <table class="data-table compact">
                  <thead>
                    <tr><th>指標</th><th>データ</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>バニリン</td><td>65〜75 mg/L</td></tr>
                    <tr><td>オイゲノール</td><td>8〜10 mg/L</td></tr>
                    <tr><td>エチルラクタート</td><td>バランス</td></tr>
                    <tr><td>推奨新樽比率</td><td>30〜40%</td></tr>
                  </tbody>
                </table>
                <p class="note">クラシックなバランス設定；カベルネ・メルローに適す；微量酸素添加能力とアロマのバランス。</p>
              </div>
              <div class="panel" data-profile="heavy">
                <table class="data-table compact">
                  <thead>
                    <tr><th>指標</th><th>データ</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>グアイアコール</td><td>12〜15 mg/L</td></tr>
                    <tr><td>スモーキー感</td><td>高い</td></tr>
                    <tr><td>タンニン放出</td><td>中〜高</td></tr>
                    <tr><td>推奨新樽比率</td><td>40〜60%</td></tr>
                  </tbody>
                </table>
                <p class="note">スモーク・カカオ・構造を付与；豊かな長期熟成スタイルに適す；揮発性フェノールのコントロールが必要。</p>
              </div>
            </div>
          </div>
          <h3>品質管理KPI</h3>
          <ul>
            <li>IRスペクトルまたはNIR迅速検出でチャースペクトルの一貫性（±5%）を確認。</li>
            <li>樽内温度プローブログを記録し、バッチ番号で追跡。</li>
            <li>官能スコアリング：青臭み/木臭み・刺激的な苦味・煙臭などの欠陥にリアルタイムアラートを設定。</li>
          </ul>
        </div>`;

// ── slides.6.content ─────────────────────────────────────
ja['slides.6.content'] = `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念紹介：容器は異なる素材の家のようなもの</h3>
            
            <div class="analogy-box">
              <h4>🏠 日常のたとえ：容器 ＝ ワインの「住居」</h4>
              <p>異なる素材の容器でのワイン熟成は、人が異なる素材の家に住むようなものです：</p>
              <ul>
                <li>🪵 <strong>オーク樽</strong> ＝ 日本の木造古民家（息をする、木のアロマがある、定期メンテナンスが必要、温度が変動する）</li>
                <li>🔩 <strong>ステンレスタンク</strong> ＝ モダンな密閉マンション（気密、一定温度、オフフレーバーなし、掃除が簡単）</li>
                <li>🧱 <strong>コンクリートタンク</strong> ＝ 石造りの城（厚い壁で断熱、わずかな換気、空間対流、冬暖かく夏涼しい）</li>
                <li>🏺 <strong>アンフォラ</strong> ＝ 土焼き窯洞（通気性・涼しい・ミネラル感があるが壊れやすい）</li>
              </ul>
              <p class="insight">異なる素材の「家」はワインの「生活の質」に影響する：オーク樽はアロマを与え、ステンレスは新鮮さを保ち、コンクリートは豊かなパレートを、アンフォラはミネラル感を加える。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 専門用語をわかりやすく</h4>
              <table class="term-table">
                <tr>
                  <td><strong>酸素透過率（mg/L・月）</strong></td>
                  <td>＝ 毎月容器に入る酸素量。家の換気のようなもの（0.05 ＝ 気密；3.0 ＝ 非常によく換気）</td>
                </tr>
                <tr>
                  <td><strong>熱慣性</strong></td>
                  <td>＝ 温度変化への「抵抗力」。高い熱慣性 ＝ 冬暖かく夏涼しい（コンクリート）；低い ＝ 温度が外部環境に追従（ステンレス）</td>
                </tr>
                <tr>
                  <td><strong>微量酸素添加管理</strong></td>
                  <td>＝ ワインに入る酸素量のコントロール。適量 ＝ タンニンを柔らかくする（新鮮な空気を吸うように）；過剰 ＝ 酸化（大気汚染のように）</td>
                </tr>
                <tr>
                  <td><strong>CapEx</strong></td>
                  <td>＝ 設備投資 ＝ 容器を購入するお金（一度の投資）</td>
                </tr>
                <tr>
                  <td><strong>OpEx</strong></td>
                  <td>＝ 運営費 ＝ 年間メンテナンスコスト（継続的な支出）</td>
                </tr>
              </table>
            </div>

            <div class="oxygen-concept">
              <h4>💨 微量酸素添加の3つの状態：</h4>
              <p><strong>✅ 適量</strong>：タンニン軟化・アロマ開放・丸みのあるパレート（よく換気された部屋のように）<br>
              <strong>⚠️ 過剰</strong>：酸化・褐変・新鮮さの喪失（食べ物が空気にさらされて傷むように）<br>
              <strong>❌ 不足</strong>：還元的オフノート（腐卵臭・ゴム臭）（密閉空間の臭いのように）</p>
              <p class="tip">💡 <strong>核心的な洞察</strong>：容器管理の核心は「<strong>酸素バランス</strong>」；異なる容器は異なる酸素リズムを提供する。</p>
            </div>

            <div class="reading-guide">
              <h4>📖 素材比較マトリクスの読み方</h4>
              <ol>
                <li><strong>酸素透過率を確認</strong>：オークのアロマが欲しい → 高酸素（オーク樽）；果実を保持したい → 低酸素（ステンレス）</li>
                <li><strong>熱慣性を確認</strong>：セラー温度が不安定 → 高い熱慣性（コンクリート）；精密温度コントロール → 熱慣性は重要度が低い</li>
                <li><strong>コストを確認</strong>：予算が限られている → ステンレス（高CapExだが低OpEx）；風味の複雑性を追求 → オーク樽（継続的投資が必要）</li>
                <li><strong>スタイル目標を確認</strong>：クラシックボルドー → オーク主体；モダンフレッシュ白ワイン → ステンレス主体</li>
              </ol>
            </div>
          </div>

          <h3>素材比較マトリクス</h3>
          <table class="data-table">
            <thead>
              <tr><th>素材</th><th>酸素透過率（mg/L・月）</th><th>熱慣性</th><th>感覚的影響</th><th>コストとメンテナンス</th></tr>
            </thead>
            <tbody>
              <tr><td>オーク樽 225L</td><td>1.5〜3.0</td><td>中</td><td>アロマ・構造の統合</td><td>高CapEx・メンテナンス必要</td></tr>
              <tr><td>大樽 20hL</td><td>0.3〜0.6</td><td>高</td><td>安定した微量酸素添加・中性アロマ</td><td>専門的な清掃が必要</td></tr>
              <tr><td>ステンレスタンク</td><td>&lt;0.05</td><td>低</td><td>一次アロマを保持</td><td>CIP簡単・中程度の投資</td></tr>
              <tr><td>コンクリートエッグタンク</td><td>0.1〜0.3</td><td>中〜高</td><td>循環対流・豊かなパレート</td><td>表面メンテナンスに専門知識が必要</td></tr>
              <tr><td>アンフォラ/クヴェヴリ</td><td>0.3〜0.8</td><td>中</td><td>ミネラル感・微妙な酸化</td><td>手動メンテナンス・壊れやすい</td></tr>
            </tbody>
          </table>
          <h3>微量酸素添加の測定方法</h3>
          <ul>
            <li>非破壊光ファイバープローブ：溶存酸素（DO）と溶存CO₂を測定。</li>
            <li>微量酸素添加コントロールシステム：0.5〜2.0 mL/L・月の精密酸素投与。</li>
            <li>栓抜きサンプリング：定期的に50 mLをポンプアウトして遊離SO₂を評価 → 酸素負荷を推定。</li>
          </ul>
          <h3>熱慣性と温度コントロール</h3>
          <p>コンクリートとアンフォラは高い熱容量で昼夜の温度差を平滑化；ステンレスは冷却板または外部温度コントロールジャケットが必要。</p>
          <p class="subhead">調整戦略</p>
          <ul>
            <li>高芳香白ワインの場合：初期ステンレス → 中期コンクリート → 短期オーク樽。</li>
            <li>赤ワイン長期熟成：225L新樽+20hL大樽を交互に使用；微量酸素添加1.2 mg/L・月に設定。</li>
          </ul>
          <h3>官能検証の組み合わせ</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>バッチ</th><th>容器連鎖</th><th>主要観察</th><th>決定</th></tr>
            </thead>
            <tbody>
              <tr><td>シャルドネA</td><td>ステンレス発酵 → 新樽6ヶ月 → 大樽6ヶ月</td><td>アロマ層は良好だが構造が堅すぎる</td><td>アンフォラバッチ10%追加で軟化</td></tr>
              <tr><td>カベルネB</td><td>新樽12ヶ月 → 大樽12ヶ月</td><td>安定した微量酸素添加、過剰なタンニンを避ける必要</td><td>10ヶ月目に中性樽への移動を検討</td></tr>
              <tr><td>オレンジワインC</td><td>アンフォラマセラシオン8ヶ月 → コンクリート4ヶ月</td><td>顕著なミネラル感、揮発酸を抑える必要</td><td>熟成後期に温度15°C以下でコントロール</td></tr>
            </tbody>
          </table>
        </div>`;

// ── slides.8.content ─────────────────────────────────────
ja['slides.8.content'] = `
        <div class="chapter-content">
          <h3>樽齢評価マトリクス</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>樽齢</th><th>官能指標</th><th>化学指標</th><th>推奨アクション</th></tr>
            </thead>
            <tbody>
              <tr><td>0〜1年</td><td>強い木のアロマ</td><td>バニリン &gt;60 mg/L</td><td>主要バッチに使用；漏れを防ぐ</td></tr>
              <tr><td>2〜3年</td><td>中程度のアロマ</td><td>タンニン放出が安定</td><td>コアバッチを維持；徐々に新樽とブレンド</td></tr>
              <tr><td>4〜5年</td><td>アロマが弱い</td><td>良好なDOコントロール</td><td>中性樽として使用または蒸留/酢製造用に転換</td></tr>
            </tbody>
          </table>
          <h3>衛生手順</h3>
          <ul>
            <li>回転洗浄ヘッド＋60°C熱水で5分間グルカンを除去。</li>
            <li>オゾンまたは過酸化水素の霧化を1〜2分；24時間ガス抜き後に使用。</li>
            <li>乾燥モニタリング：内部湿度&lt;60%；ブレタノマイセス（Brett）の増殖を防ぐ。</li>
          </ul>
          <h3>欠陥予防</h3>
          <p>Brett・乳酸菌・揮発酸・カビの指標マトリクスを確立し、qPCRまたはATP検査と組み合わせる。</p>
          <p class="subhead">アクション閾値</p>
          <ul>
            <li>Brett DNA &gt;10² copy/mL：樽内蒸気＋エタノールリンス。</li>
            <li>揮発酸 &gt;0.7 g/L：衛生管理・温度コントロール・酸素管理を調査。</li>
            <li>SO₂が &lt;10 mg/L に低下：すぐに硫黄補充または不活性容器への移動。</li>
          </ul>
          <h3>資産寿命延長</h3>
          <p>削りとチャー再処理で2〜3年延長可能；外部委託UV/オゾン処理で年間Brett発生率を60%削減可能。</p>
        </div>`;

// ── slides.10.content ─────────────────────────────────────
ja['slides.10.content'] = `
        <div class="chapter-content">
          <h3>熟成戦略ブループリント</h3>
          <p>スタイル目標・生産量・設備投資に基づき3〜5年の容器設定ブループリントを確立し、財務・官能KPIと統合する。</p>
          <h3>CapEx vs OpEx 分析</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>容器</th><th>初期投資</th><th>年間償却</th><th>運営費</th><th>一般的な耐用年数</th></tr>
            </thead>
            <tbody>
              <tr><td>225L新樽</td><td>€900〜1,200</td><td>3年</td><td>メンテナンス €40/年</td><td>3〜4年</td></tr>
              <tr><td>大樽20hL</td><td>€8k〜12k</td><td>10年</td><td>メンテナンス €250/年</td><td>15年</td></tr>
              <tr><td>ステンレス50hL</td><td>€15k〜18k</td><td>12年</td><td>清掃 €150/年</td><td>20年以上</td></tr>
              <tr><td>コンクリートエッグタンク</td><td>€10k〜15k</td><td>12年</td><td>表面処理 €200/年</td><td>20年</td></tr>
            </tbody>
          </table>
          <h3>容器設定シナリオシミュレーション</h3>
          <div class="blend-widget container-strategy">
            <input type="radio" id="mix-classic" name="container-mix-l43" class="opt-classic" checked>
            <input type="radio" id="mix-hybrid" name="container-mix-l43" class="opt-aromatic">
            <input type="radio" id="mix-innovation" name="container-mix-l43" class="opt-reserve">
            <div class="tabs">
              <label for="mix-classic">クラシックオーク主体</label>
              <label for="mix-hybrid">複数素材バランス</label>
              <label for="mix-innovation">革新的低酸素</label>
            </div>
            <div class="scenarios">
              <div class="scenario" data-scenario="classic">
                <table class="data-table compact">
                  <thead>
                    <tr><th>容器</th><th>比率</th><th>役割</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>225L新樽</td><td>60%</td><td>アロマと構造</td></tr>
                    <tr><td>大樽20hL</td><td>25%</td><td>安定した微量酸素添加</td></tr>
                    <tr><td>ステンレス</td><td>15%</td><td>果実保持</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">年間平均CapEx</span><span class="value">€140k</span></div>
                  <div class="metric"><span class="label">スタイル</span><span class="value">クラシック・長期熟成</span></div>
                  <div class="metric"><span class="label">リスク</span><span class="value">樽齢管理への高依存</span></div>
                </div>
                <p class="note">ブランドのクラシックスタイルを維持；樽ローテーションと木材トレーサビリティへの投資が必要。フラッグシップラインに適す。</p>
              </div>
              <div class="scenario" data-scenario="aromatic">
                <table class="data-table compact">
                  <thead>
                    <tr><th>容器</th><th>比率</th><th>役割</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>225L新樽</td><td>30%</td><td>構造提供</td></tr>
                    <tr><td>コンクリートエッグタンク</td><td>40%</td><td>パレートと熱安定性</td></tr>
                    <tr><td>アンフォラ</td><td>30%</td><td>アロマの細部</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">年間平均CapEx</span><span class="value">€115k</span></div>
                  <div class="metric"><span class="label">スタイル</span><span class="value">際立つアロマ・シルキーパレート</span></div>
                  <div class="metric"><span class="label">リスク</span><span class="value">アンフォラのメンテナンスコスト</span></div>
                </div>
                <p class="note">プレミアムサブラインまたはリミテッドリリースの拡充に適す；素材の多様性と微量酸素添加の重層性を示す。</p>
              </div>
              <div class="scenario" data-scenario="reserve">
                <table class="data-table compact">
                  <thead>
                    <tr><th>容器</th><th>比率</th><th>役割</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>大樽20hL</td><td>50%</td><td>安定した酸素管理</td></tr>
                    <tr><td>ステンレス</td><td>30%</td><td>低酸素保存</td></tr>
                    <tr><td>不活性フレキシブルバッグ/タンク</td><td>20%</td><td>短期ブレンド</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">年間平均CapEx</span><span class="value">€90k</span></div>
                  <div class="metric"><span class="label">スタイル</span><span class="value">低酸素クリーン・早出荷</span></div>
                  <div class="metric"><span class="label">リスク</span><span class="value">樽の複雑性に欠ける</span></div>
                </div>
                <p class="note">大量生産・早期回転製品ラインに適す；微量酸素添加システムと組み合わせて複雑性を加える。</p>
              </div>
            </div>
          </div>
          <h3>パフォーマンスダッシュボード</h3>
          <ul>
            <li>官能KPI：木由来アロマスコア・パレートの滑らかさ・酸化欠陥率。</li>
            <li>財務KPI：樽資産回転率・収益に占めるCapEx比率・メンテナンスコスト/本。</li>
            <li>サステナビリティ：カーボンフットプリント・素材再利用比率・水消費量。</li>
          </ul>
        </div>`;

// ── slides.11.content ─────────────────────────────────────
ja['slides.11.content'] = `
        <div class="comprehensive-summary">
          <h3>🎯 コース核心の復習：木材から投資までの完全な意思決定チェーン</h3>
          <div class="five-modules-review">
            <div class="module">
              <h4>1️⃣ 木材科学：産地が個性を決定する</h4>
              <div class="key-points">
                <table class="mini-table">
                  <tr><th>樹種</th><th>核心的特徴</th><th>最適用途</th></tr>
                  <tr><td>フランスオーク</td><td>繊細・遅い抽出・花のニュアンス</td><td>最高級赤ワイン・シャンパーニュ</td></tr>
                  <tr><td>アメリカンオーク</td><td>豊か・速い抽出・ヤシ</td><td>テンプラニーリョ・バーボン樽</td></tr>
                  <tr><td>東ヨーロッパオーク</td><td>万能・バランス良・優れたコスパ</td><td>コスパ重視の長期熟成</td></tr>
                </table>
                <p class="takeaway">💡 <strong>主要な洞察</strong>：木目 ＝ 抽出速度；乾燥 ＝ アロマ純粋性。フランスオークが2〜3倍高価なのは誇大広告ではなく——細木目とコントロール可能な抽出が理由。</p>
              </div>
            </div>
            <div class="module">
              <h4>2️⃣ チャー曲線：温度×時間 ＝ アロマプロファイル</h4>
              <div class="key-points">
                <p><strong>ライトチャー</strong>：バニリン 45〜55 mg/L → 花のニュアンス・バター・繊細 → 繊細な白ワイン<br>
                <strong>ミディアムチャー</strong>：バニリン 65〜75 mg/L → バニラ・キャラメル・バランス → クラシック赤ワイン<br>
                <strong>ヘビーチャー</strong>：グアイアコール 12〜15 mg/L → スモーク・カカオ・構造 → 豊かな長期熟成</p>
                <p class="takeaway">💡 <strong>主要な洞察</strong>：チャー曲線は「アロマエンジニアリング」であり、当てずっぽうではない。熱電対監視＋パルス炎 ＝ 局所炭化の苦味を避ける。</p>
              </div>
            </div>
            <div class="module">
              <h4>3️⃣ 容器素材：ワインの「住居」を選ぶ</h4>
              <div class="key-points">
                <table class="container-summary">
                  <tr><th>容器</th><th>OTR</th><th>スタイル影響</th><th>使用時期</th></tr>
                  <tr><td>225Lオーク樽</td><td>1.5〜3.0</td><td>アロマ＋構造</td><td>最高級ワイン・長期熟成</td></tr>
                  <tr><td>20hL大樽</td><td>0.3〜0.6</td><td>安定した微量酸素添加・中性</td><td>大量生産のバランス</td></tr>
                  <tr><td>ステンレス</td><td>&lt;0.05</td><td>一次アロマを保持</td><td>フレッシュ白ワイン</td></tr>
                  <tr><td>コンクリートエッグタンク</td><td>0.1〜0.3</td><td>豊かなパレート・対流</td><td>プレミアムサブライン</td></tr>
                  <tr><td>アンフォラ</td><td>0.3〜0.8</td><td>ミネラル感・繊細</td><td>リミテッドリリース</td></tr>
                </table>
                <p class="takeaway">💡 <strong>主要な洞察</strong>：酸素透過率が熟成リズムを決定する。オーク樽 ＝ 高速道路、ステンレス ＝ 駐車場、コンクリート ＝ 田舎道。</p>
              </div>
            </div>
            <div class="module">
              <h4>4️⃣ 樽齢管理：寿命のあるトレーナーのように</h4>
              <div class="key-points">
                <ul>
                  <li><strong>0〜1年</strong>：新樽の強い木のアロマ（バニリン &gt;60 mg/L）、フラッグシップワインに適す</li>
                  <li><strong>2〜3年</strong>：中程度のアロマ、コアバッチに使用、徐々に新樽とブレンド</li>
                  <li><strong>4〜5年</strong>：アロマが弱まり、中性樽に転換または他用途へ</li>
                </ul>
                <p><strong>寿命延長戦略</strong>：削り＋チャー再処理 → 2〜3年延長 | UV/オゾン処理 → Brett発生率60%削減</p>
                <p class="takeaway">💡 <strong>主要な洞察</strong>：樽は「壊れるまで使う」のではなく「中性になるまで使う」。5年物の樽はまだ使えるが、もはや木のアロマを提供しない。</p>
              </div>
            </div>
            <div class="module">
              <h4>5️⃣ 投資判断：CapEx vs OpEx vs スタイル目標</h4>
              <div class="key-points">
                <p><strong>クラシックオーク主体</strong>：新樽60%＋大樽25% | 年間平均€140k | 長期熟成スタイル | フラッグシップラインに適す</p>
                <p><strong>複数素材バランス</strong>：新樽30%＋コンクリート40%＋アンフォラ30% | 年間平均€115k | 際立つアロマ | プレミアムサブラインに適す</p>
                <p><strong>革新的低酸素</strong>：大樽50%＋ステンレス30% | 年間平均€90k | 早出荷 | 大量生産に適す</p>
                <p class="takeaway">💡 <strong>主要な洞察</strong>：容器設定は「高い ＝ より良い」ではなく「スタイル志向＋経済的バランス」。スタイルが合わなければ全新樽に€140k費やすのは無駄。</p>
              </div>
            </div>
          </div>

          <h3>🔄 システム思考：容器決定の連鎖反応</h3>
          <div class="system-thinking">
            <p>フランスオークを選ぶ → 細木目 → 遅い抽出 → 18ヶ月熟成が必要 → 高い資本拘束 → 価格設定がコストを反映する必要</p>
            <p class="insight">すべての容器決定は財務・時間・スタイルの連鎖反応を引き起こす。専門家の思考は「<strong>全体像を予見し、下流のボトルネックを避ける</strong>」。</p>
          </div>

          <h3>🌟 3つの重要な洞察</h3>
          <div class="key-insights-final">
            <div class="insight-card">
              <h4>🎻 容器は楽器であり倉庫ではない</h4>
              <p>オーク樽は単なる「ワインを保存する場所」ではなく「スタイルを形成するツール」。バイオリニストが楽器を選ぶように、醸造家はスタイル目標に合った樽を選ばなければならない。<strong>容器の選択 ＝ 楽器のアレンジ、倉庫管理ではない。</strong></p>
            </div>
            <div class="insight-card">
              <h4>💰 投資ロジック：長期ROI &gt; 短期コスト</h4>
              <p>225L新樽€1,000は高く見えるが、3年間でワイン200ケースに使えば、償却コストはケースあたり€15。この€15でセールス価格が€50上がる（スタイル向上により）なら、ROIはプラス。<strong>「樽のコストはいくら」と計算するのではなく、「1本あたりどれだけの価値が加わるか」と計算する。</strong></p>
            </div>
            <div class="insight-card">
              <h4>🧪 データ＋官能評価：両方不可欠</h4>
              <p>酸素透過率・バニリン・熱電対データは「科学的基盤」だが、最終的にはテイスティングによる検証が必要。1.8 mg/L・月の微量酸素添加はピノ・ノワールには完璧かもしれないが、ソーヴィニヨン・ブランには過剰かもしれない。<strong>データが方向を示し、パレートが最終決定を下す。</strong></p>
            </div>
          </div>

          <h3>📚 さらなる学習への推奨</h3>
          <ul class="further-study">
            <li><strong>素材の深掘り</strong>：樽メーカー（フランスのタランソー、アメリカのセガン・モロー）を訪問してチャー曲線の実践を見る</li>
            <li><strong>微量酸素添加実験</strong>：光ファイバーDOプローブで異なる容器の酸素供給リズムを追跡；自分のベースラインデータベースを構築する</li>
            <li><strong>ケーススタディ</strong>：ドメーヌ・ド・ラ・ロマネ・コンティの樽齢戦略、ペンフォールズのアメリカンオーク職人技を研究する</li>
            <li><strong>財務モデリング</strong>：Excelで容器投資モデルを構築する：CapEx＋OpEx＋償却＋スタイルプレミアム ＝ 総ROI</li>
            <li><strong>官能トレーニング</strong>：「同じワイン・異なる樽」の組み合わせをブラインドテイスティング（新樽vs古樽、フランスvsアメリカン、ライトvsヘビーチャー）して樽の風味識別スキルを構築する</li>
          </ul>

          <div class="final-message">
            <h4>🎓 締めくくりの言葉</h4>
            <p>容器科学は「どんな樽を買ってどう使うか」という技術的な問題に見えるが、実際には「<strong>限られたリソースでどうやって理想のスタイルを作るか</strong>」という戦略的な問題です。
            このコースをマスターした後、あなたはできるようになります：</p>
            <ul>
              <li>✅ スタイル目標に基づいて素材の組み合わせを選択する（サプライヤーに鼻を引っ張られなくなる）</li>
              <li>✅ チャー曲線がアロマプロファイルに与える影響を評価する（「ライト・ミディアム・ヘビー」を超える）</li>
              <li>✅ 微量酸素添加管理とコストコントロールのバランスを取る（いつオーク樽に投資しいつステンレスを使うかがわかる）</li>
              <li>✅ 複数容器の相乗効果戦略を確立する（指揮者が楽器の組み合わせを編曲するように）</li>
            </ul>
            <p>これがレベル4の専門家と普通の醸造家の違いです：<strong>あなたは単に「容器を使う」のではなく「容器戦略を設計している」のです。</strong></p>
            <p class="final-quote">「樽は容器ではなく楽器である。」——トップ醸造家たちの共通の信念</p>
          </div>
        </div>`;

fs.writeFileSync('src/locales/ja/lessons/bordeaux/l4-3.json', JSON.stringify(ja, null, 2), 'utf8');
console.log('Keys:', Object.keys(ja).length);
