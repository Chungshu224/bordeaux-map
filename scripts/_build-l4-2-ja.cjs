const fs = require('fs');

const ja = {};

// ── Non-content keys ──────────────────────────────────────
ja['slides.0.objectives.0.text'] = '発酵の主要変数と副産物管理をマスターする';
ja['slides.0.objectives.1.text'] = '還元/酸化問題を防ぐ酸素管理戦略を設計する';
ja['slides.0.objectives.2.text'] = '還元/酸化リスク予防SOPと緊急意思決定プロトコルを確立する';
ja['slides.0.objectives.3.text'] = '安定化技術と低アルコール技術がワインスタイルに与える影響を評価する';
ja['slides.0.title'] = '学習目標';
ja['slides.1.subtitle'] = '代謝';
ja['slides.1.title'] = '第1章';
ja['slides.2.highlights.0.title'] = '変数→風味';
ja['slides.2.highlights.1.title'] = '戦略マトリクス';
ja['slides.2.highlights.2.title'] = '2つのケーススタディ';
ja['slides.2.title'] = '酵母代謝と副産物';
ja['slides.3.subtitle'] = '酸素管理';
ja['slides.3.title'] = '第2章';
ja['slides.4.highlights.0.title'] = 'デュアル指標モニタリング';
ja['slides.4.highlights.1.title'] = 'リスク分岐';
ja['slides.4.highlights.2.title'] = '修正ケーススタディ';
ja['slides.4.title'] = '酸素管理：還元と酸化';
ja['slides.5.subtitle'] = 'リスク管理';
ja['slides.5.title'] = '第3章';
ja['slides.6.highlights.0.title'] = '根本原因分析';
ja['slides.6.highlights.1.title'] = '予防SOP';
ja['slides.6.highlights.2.title'] = '緊急意思決定ツリー';
ja['slides.6.title'] = '還元/酸化リスク：根本原因分析と予防';
ja['slides.7.subtitle'] = '技術';
ja['slides.7.title'] = '第4章';
ja['slides.8.highlights.0.title'] = '方法比較';
ja['slides.8.highlights.1.title'] = '法規制とスタイル';
ja['slides.8.highlights.2.title'] = '経済性';
ja['slides.8.title'] = '安定化技術と低アルコール技術';
ja['slides.9.title'] = 'まとめ';
ja['slides.10.title'] = 'クイック確認テスト';

// ── Quiz keys ─────────────────────────────────────────────
ja['slides.10.questions.0.question'] = 'エステルを高め発酵スタック（行き詰まり）を防ぐために、最も適切な戦略の組み合わせはどれか？';
ja['slides.10.questions.0.options.0'] = '高接種、20°C、高酸素';
ja['slides.10.questions.0.options.1'] = '低接種、12〜14°C、初期微量酸素添加';
ja['slides.10.questions.0.options.2'] = '中接種、10°C、無酸素';
ja['slides.10.questions.0.explanation'] = '低温での低接種はエステル形成を促進し、初期微量酸素添加は健全な発酵をサポートする。';
ja['slides.10.questions.1.question'] = '白ワインの瓶詰めラインで最適な溶存酸素（DO）目標範囲はどれか？';
ja['slides.10.questions.1.options.0'] = '<0.1 mg/L';
ja['slides.10.questions.1.options.1'] = '0.5〜1.0 mg/L';
ja['slides.10.questions.1.options.2'] = '>1.5 mg/L';
ja['slides.10.questions.1.explanation'] = '白ワインは酸素に非常に敏感であり、瓶詰め段階での推奨DOは<0.1 mg/L。';
ja['slides.10.questions.2.question'] = '白ワインに硫黄臭（H₂S）が発生した場合、最初に調査すべき根本原因はどれか？';
ja['slides.10.questions.2.options.0'] = '遊離SO₂の過剰';
ja['slides.10.questions.2.options.1'] = 'YAN不足または発酵中の嫌気性条件';
ja['slides.10.questions.2.options.2'] = '瓶詰め時のDO過剰';
ja['slides.10.questions.2.explanation'] = '還元性オフフレーバーの最も一般的な根本原因は、酵母への窒素（YAN）不足、または嫌気性条件である。';
ja['slides.10.questions.3.question'] = '初期投資は高いが連続処理が可能でエネルギー節約できる安定化技術はどれか？';
ja['slides.10.questions.3.options.0'] = '冷却安定化';
ja['slides.10.questions.3.options.1'] = 'シーディング結晶化';
ja['slides.10.questions.3.options.2'] = '電気透析';
ja['slides.10.questions.3.explanation'] = '電気透析は連続処理とエネルギー消費の低減という利点があるが、初期投資が高い。';

// ── Highlights content (short) ────────────────────────────
ja['slides.2.highlights.0.content'] = '発酵変数（接種量・温度・YAN・溶存酸素）がエステル・高級アルコール・硫黄副産物プロファイルを決定する。';
ja['slides.2.highlights.1.content'] = 'スタイル目標別の戦略マトリクス：高エステル白 / 構造的赤 / クリーン精密スタイル各々の接種・温度・酸素・窒素の組み合わせ。';
ja['slides.2.highlights.2.content'] = '高エステル白の発酵設計ケースとスタックリスク防止のための赤ワイン通気ケース。';
ja['slides.4.highlights.0.content'] = 'チェックポイントごとのDO（mg/L）と酸化還元電位（ORP, mV）を監視；白と赤の目標値が異なる。';
ja['slides.4.highlights.1.content'] = '還元（YAN不足・密閉発酵・オリ接触過剰）と酸化（DO過剰・金属触媒・SO₂不足）の2つのリスクブランチ。';
ja['slides.4.highlights.2.content'] = '白ワインの還元修正（銅処理）と赤ワインの早期酸化（不活性ガス・低酸素充填）の2つの対処事例。';
ja['slides.6.highlights.0.content'] = '還元と酸化の根本原因：発酵前・発酵中・熟成・瓶詰め各段階のメカニズムとリスク窓。';
ja['slides.6.highlights.1.content'] = '製造段階ごとの予防アクション：発酵前→発酵→熟成/ラッキング→瓶詰め各ステップの予防措置。';
ja['slides.6.highlights.2.content'] = '問題発生時の優先アクション：還元検出（CuSO₄処理フロー）と酸化兆候（緊急SO₂補充フロー）。';
ja['slides.8.highlights.0.content'] = '酒石酸安定化4手法（冷却安定化・シーディング・CMC・電気透析）の原理・長所・制限を比較。';
ja['slides.8.highlights.1.content'] = '低アルコール技術：逆浸透・真空蒸留・スピニングコーンカラム；ABVラベリングと糖分調整要件。';
ja['slides.8.highlights.2.content'] = '安定化手法の資本費（CapEx）・運営費（OpEx）・スタイル整合性・推奨シナリオを比較する。';

// ── slides.2.content ─────────────────────────────────────
ja['slides.2.content'] = `
        <div class="chapter-intro">
          <h3>🔰 概念紹介：酵母はどのように働くのか？</h3>
          <p class="factory-analogy">
            <strong>工場のたとえ</strong>：酵母を小型化学工場と考えてください：
          </p>
          <ul class="factory-process">
            <li>🍇 <strong>原料</strong>：グルコース（糖）</li>
            <li>⚙️ <strong>生産ライン</strong>：解糖（糖を分解）</li>
            <li>🍷 <strong>主製品</strong>：エタノール（アルコール）＋CO₂（二酸化炭素）</li>
            <li>🌸 <strong>副産物</strong>：エステル（花・果物のアロマ）、高級アルコール（複雑性）、硫黄化合物（潜在的なオフフレーバー）</li>
          </ul>
          
          <div class="key-insight">
            <h4>💡 核心的な概念</h4>
            <p>醸造家の仕事は単に「酵母に糖をアルコールに変えさせる」ことではなく、<strong>副産物を精密にコントロールする</strong>ことです：</p>
            <ul>
              <li>✓ 花のニュアンスが欲しい？→ 低温発酵；エステルをより多く生成</li>
              <li>✓ 安定性が欲しい？→ 高接種率；サプライズを避ける</li>
              <li>✗ 腐卵臭がする？→ 窒素不足；硫化水素の生成</li>
            </ul>
          </div>
        </div>

        <h3>主要経路：解糖とエステル形成</h3>
        <div class="process-simplified">
          <p><strong>📖 技術用語の平易な解説：</strong></p>
          <ul class="term-explanation">
            <li><strong>解糖</strong>：グルコースをより小さな分子に「分解する」プロセス</li>
            <li><strong>ピルビン酸</strong>：解糖の中間産物——工場の「半製品」のようなもの</li>
            <li><strong>アセトアルデヒド</strong>：アルコールの「前駆体」；さらに処理するとエタノールになる</li>
            <li><strong>エステル</strong>：花や果実のような香りのアロマ分子</li>
            <li><strong>高級アルコール</strong>：複雑性の源だが、多すぎると溶剤のような個性を与える</li>
          </ul>
          <p class="simple-formula">簡略化した式：<strong>グルコース → ピルビン酸 → エタノール＋アロマ化合物</strong></p>
        </div>
        <p>グルコースは解糖を経てピルビン酸となり、アセトアルデヒドを介してエタノールに還元される；アセチルCoAと高級アルコールはアセチルトランスフェラーゼの作用でエステルを形成する。</p>
        
        <h3>発酵変数の影響</h3>
        <div class="variables-intro">
          <p>🎛️ <strong>4つの主要制御レバー</strong>（これらを調整するとワインの風味が変わる）：</p>
          <ol class="control-knobs">
            <li><strong>接種率</strong>：どれだけの酵母「ワーカー」を添加するか</li>
            <li><strong>温度</strong>：工場の温度設定</li>
            <li><strong>窒素源（YAN）</strong>：酵母の「食べ物」（糖以外）</li>
            <li><strong>溶存酸素</strong>：工場の「換気」</li>
          </ol>
        </div>
        <p>接種率・発酵温度・窒素源・溶存酸素/酸化還元電位・撹拌頻度が副産物プロファイルを決定する。</p>
        <h3>参照表：条件×風味傾向</h3>
        <div class="table-guide">
          <p>📊 <strong>この表の読み方：</strong></p>
          <ul class="reading-tips">
            <li>調整したい変数（例：温度）を見つける</li>
            <li>低/中/高の選択肢とその効果を確認する</li>
            <li>右端の列が「何が起こるか」を教えてくれる</li>
            <li>💡 数字を暗記するのではなく、<strong>トレンド</strong>を理解することが重要：低温→アロマを保持；高温→よりリッチなボディ</li>
          </ul>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>変数</th><th>低</th><th>中</th><th>高</th><th>風味傾向/リスク</th></tr>
          </thead>
          <tbody>
            <tr><td>接種率（10^6 cells/mL）</td><td>0.3</td><td>0.6</td><td>1.2</td><td>低接種→エステル増加だが発酵スタックリスク↑；高接種→安定発酵だが複雑性↓</td></tr>
            <tr><td>発酵温度（°C）</td><td>12</td><td>16</td><td>20</td><td>低温はエステルを保持し硫黄リスク↑；高温は高級アルコールとベンジルアルコールを増加</td></tr>
            <tr><td>YAN（mg N/L）</td><td>120</td><td>200</td><td>300</td><td>低すぎるとH₂S↑；高すぎると高級アルコール↑、エステルバランスが変化</td></tr>
            <tr><td>初期溶存酸素（mg/L）</td><td>0.5</td><td>1.0</td><td>1.5</td><td>適度なO₂→エステルのバランスと健全な発酵；過剰→酸化前駆物質↑</td></tr>
          </tbody>
        </table>
        <h3>コントロール戦略マトリクス</h3>
        <table class="data-table">
          <thead>
            <tr><th>目標スタイル</th><th>接種率</th><th>温度</th><th>酸素戦略</th><th>窒素源</th></tr>
          </thead>
          <tbody>
            <tr><td>高エステル白（フレッシュ）</td><td>低</td><td>低</td><td>初期微量酸素添加</td><td>中</td></tr>
            <tr><td>構造的赤（重層的）</td><td>中</td><td>中〜高</td><td>2段階早期微量酸素添加</td><td>中〜高</td></tr>
            <tr><td>クリーン&amp;精密</td><td>中〜高</td><td>中</td><td>厳格な低酸素管理</td><td>中</td></tr>
          </tbody>
        </table>
        <h3>ケーススタディ：高エステル白の発酵設計</h3>
        <p class="subhead">問題</p>
        <p>前のヴィンテージはアロマが平坦で還元ノートが上昇していた。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>接種率0.4×10^6 cells/mL；温度管理12〜14°C。</li>
          <li>初期DO 0.8 mg/L；YANを180 mg/L（DAP＋有機窒素）に調整。</li>
          <li>エステルを保持するため過剰な撹拌を避けた。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>総エステル↑20〜30%、還元指標低下；より洗練されたパレート。</p>
        <h3>ケーススタディ：赤ワインの還元リスク防止</h3>
        <p class="subhead">問題</p>
        <p>密閉発酵によりH₂Sと揮発性硫黄化合物が上昇した。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>発酵前半に段階的な通気（1トンあたり2×5〜10秒）。</li>
          <li>YAN 230 mg/L；温度24〜26°C。</li>
          <li>オリ管理とラッキング頻度の調整。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>H₂Sリスクが大幅に減少；果実個性とパレートの統合が改善。</p>`;

// ── slides.4.content ─────────────────────────────────────
ja['slides.4.content'] = `
        <div class="chapter-intro">
          <h3>🔰 概念紹介：なぜ酸素がそれほど重要なのか？</h3>
          <p class="breathing-analogy">
            <strong>呼吸のたとえ</strong>：ワインは人と同じように「呼吸」する必要がありますが、精密にコントロールしなければなりません：
          </p>
          <ul class="oxygen-balance">
            <li>😌 <strong>適量の酸素</strong>（発酵前半）：適度な運動のように——酵母は健全で、アロマはうまく発達する</li>
            <li>😰 <strong>酸素過剰</strong>（貯蔵中）：過呼吸のように——ワインが酸化し、アロマを失い、褐変する</li>
            <li>😵 <strong>酸素不足</strong>（密閉発酵）：息を止めるように——硫化水素（腐卵臭）を生成する</li>
          </ul>
          
          <div class="why-monitor">
            <h4>⚠️ 2つの主要酸素リスク</h4>
            <table class="risk-table">
              <tr>
                <th>リスクタイプ</th>
                <th>原因</th>
                <th>症状</th>
                <th>予防</th>
              </tr>
              <tr>
                <td><strong>還元</strong></td>
                <td>酸素不足</td>
                <td>🦨 硫化水素・腐卵臭・マッチ臭</td>
                <td>発酵前半に適度な通気</td>
              </tr>
              <tr>
                <td><strong>酸化</strong></td>
                <td>酸素過剰</td>
                <td>🍂 褐変・アロマ喪失・風味が平坦化</td>
                <td>貯蔵とラッキング中の厳格な酸素管理</td>
              </tr>
            </table>
          </div>
          
          <div class="key-concept">
            <h4>💡 主要概念</h4>
            <p><strong>異なる段階で異なる酸素レベルが必要：</strong></p>
            <ul>
              <li>🧫 <strong>発酵前半</strong>：少量の酸素が必要（酵母の健全性のため）</li>
              <li>🍷 <strong>熟成</strong>：赤ワインは微量酸素添加可（タンニンを柔らかくする）；白ワインは完全に酸素から保護する必要あり</li>
              <li>🍾 <strong>瓶詰め</strong>：極低酸素（&lt;0.2 mg/L）；そうしないと瓶の中で酸化が継続する</li>
            </ul>
          </div>
        </div>

        <h3>溶存酸素モニタリングと酸化還元電位</h3>
        <div class="monitoring-intro">
          <p>📏 <strong>技術用語の解説：</strong></p>
          <ul class="term-decoder">
            <li><strong>DO（溶存酸素）</strong>：単位 mg/L；ワインに溶けている酸素量</li>
            <li><strong>酸化還元電位（ORP）</strong>：単位 mV；「酸化圧力指数」のようなもの——値が高いほど酸化傾向が強い</li>
            <li><strong>重要チェックポイント</strong>：ワイン製造中に酸素が最も入り込みやすい瞬間</li>
          </ul>
        </div>
        <p>重要チェックポイント：充填・ポンピング・ラッキング・ろ過・瓶詰め。デュアル指標：DO（mg/L）と酸化還元電位（mV）で監視。</p>
        <h3>参照表：チェックポイント×目標DO</h3>
        <div class="table-reading-guide">
          <p>🎯 <strong>この表の使い方：</strong></p>
          <ul>
            <li>行っている作業（例：「瓶詰めライン」）を見つける</li>
            <li>白ワイン/赤ワインの目標DOを確認する</li>
            <li>溶存酸素計で測定；目標範囲内であることを確認する</li>
            <li>💡 <strong>記憶のヒント</strong>：数字が低いほど安全。白ワインは赤ワインより低い酸素が必要</li>
          </ul>
          <div class="reference-values">
            <p><strong>クイックリファレンス：</strong></p>
            <ul>
              <li>✓ 白ワイン瓶詰め：<strong>&lt; 0.1 mg/L</strong>（低いほど良い）</li>
              <li>✓ 赤ワイン瓶詰め：<strong>&lt; 0.2 mg/L</strong>（やや緩い基準）</li>
              <li>⚠️ 1.0 mg/L以上：酸化リスクに注意</li>
            </ul>
          </div>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>チェックポイント</th><th>白ワイン目標DO</th><th>赤ワイン目標DO</th><th>注記</th></tr>
          </thead>
          <tbody>
            <tr><td>充填前</td><td>&lt;0.2</td><td>&lt;0.5</td><td>不活性ガスパージが必要</td></tr>
            <tr><td>ポンプオーバー/ラッキング</td><td>&lt;0.5</td><td>0.5〜1.0</td><td>赤は色安定のため微量酸素添加</td></tr>
            <tr><td>ろ過後</td><td>&lt;0.3</td><td>&lt;0.5</td><td>フィルター媒体による酸素混入に注意</td></tr>
            <tr><td>瓶詰めライン</td><td>&lt;0.1</td><td>&lt;0.2</td><td>低酸素充填と真空検証</td></tr>
          </tbody>
        </table>
        <h3>インタラクティブデモ：瓶詰めDOコントロール（サンプルデータ）</h3>
        <div class="do-widget">
          <div class="do-title">チェックポイント×DO適合状況</div>
          <div class="do-row">
            <div class="label">充填前（白）</div>
            <div class="controls">
              <label><input type="radio" name="do-n1" class="opt-ok" checked>適合</label>
              <label><input type="radio" name="do-n1" class="opt-high">高い</label>
              <label><input type="radio" name="do-n1" class="opt-low">低い</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">適合</span>
                <span class="badge high">高い</span>
                <span class="badge low">低い</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">ろ過後（白）</div>
            <div class="controls">
              <label><input type="radio" name="do-n2" class="opt-ok" checked>適合</label>
              <label><input type="radio" name="do-n2" class="opt-high">高い</label>
              <label><input type="radio" name="do-n2" class="opt-low">低い</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">適合</span>
                <span class="badge high">高い</span>
                <span class="badge low">低い</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">瓶詰めライン（白）</div>
            <div class="controls">
              <label><input type="radio" name="do-n3" class="opt-ok" checked>適合</label>
              <label><input type="radio" name="do-n3" class="opt-high">高い</label>
              <label><input type="radio" name="do-n3" class="opt-low">低い</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">適合</span>
                <span class="badge high">高い</span>
                <span class="badge low">低い</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">充填前（赤）</div>
            <div class="controls">
              <label><input type="radio" name="do-r1" class="opt-ok">適合</label>
              <label><input type="radio" name="do-r1" class="opt-high" checked>高い</label>
              <label><input type="radio" name="do-r1" class="opt-low">低い</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">適合</span>
                <span class="badge high">高い</span>
                <span class="badge low">低い</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">ポンプオーバー/ラッキング（赤）</div>
            <div class="controls">
              <label><input type="radio" name="do-r2" class="opt-ok" checked>適合</label>
              <label><input type="radio" name="do-r2" class="opt-high">高い</label>
              <label><input type="radio" name="do-r2" class="opt-low">低い</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">適合</span>
                <span class="badge high">高い</span>
                <span class="badge low">低い</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">瓶詰めライン（赤）</div>
            <div class="controls">
              <label><input type="radio" name="do-r3" class="opt-ok">適合</label>
              <label><input type="radio" name="do-r3" class="opt-high">高い</label>
              <label><input type="radio" name="do-r3" class="opt-low" checked>低い</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">適合</span>
                <span class="badge high">高い</span>
                <span class="badge low">低い</span>
              </div>
            </div>
          </div>
          <div class="note">参照範囲：白（充填前&lt;0.2 mg/L；ろ過後&lt;0.3 mg/L；瓶詰め&lt;0.1 mg/L）；赤（充填前&lt;0.5 mg/L；ポンプオーバー0.5〜1.0 mg/L；瓶詰め&lt;0.2 mg/L）。このゲージは説明用のみ。</div>
        </div>
        <h3>リスクツリー：還元と酸化</h3>
        <ul>
          <li>還元：YAN不足・還元的貯蔵・還元的微生物相 → H₂S・メルカプタン。</li>
          <li>酸化：高DO・金属触媒・遊離SO₂不足 → アセトアルデヒド・褐変・アロマ低下。</li>
        </ul>
        <h3>ケーススタディ：白ワインの還元修正</h3>
        <p class="subhead">問題</p>
        <p>瓶詰め前にかすかなマッチ臭が検出された。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>銅処理0.15 mg/L（規制限度内）；完全に混合後、ろ過して除去。</li>
          <li>DOと遊離SO₂を確認；25〜30 mg/Lに調整。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>酸化的副作用を引き起こすことなく硫黄のオフノートを除去。</p>
        <h3>ケーススタディ：赤ワインの早期酸化</h3>
        <p class="subhead">問題</p>
        <p>ラッキング中にDOが1.5 mg/Lを超え、その後果実個性が低下した。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>乱流を減らすためポンプと配管の接続部を最適化。</li>
          <li>重要チェックポイントで不活性ガスブランケット；瓶詰めを低酸素充填に切り替え。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>後続バッチで果実個性の保持と色安定性が改善。</p>`;

// ── slides.6.content ─────────────────────────────────────
ja['slides.6.content'] = `
        <div class="chapter-intro">
          <h3>🔰 概念紹介：予防は修正よりはるかに安い</h3>
          <div class="prevention-philosophy">
            <p>還元（H₂S/メルカプタン）と酸化は2大品質脅威です。系統的な予防は事後対応より常に優れています：</p>
            <ul>
              <li>事後銅処理コスト：タンクあたり€50〜200；予防コスト：€5〜20（10倍の差）</li>
              <li>早期酸化はほとんど不可逆；還元修正は痕跡を残す場合がある</li>
              <li><strong>結論：予防のROIは修正を大幅に上回る</strong></li>
            </ul>
          </div>
        </div>

        <h3>還元リスク：根本原因分析</h3>
        <table class="data-table">
          <thead>
            <tr><th>根本原因</th><th>メカニズム</th><th>高リスク窓</th><th>予防</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>YAN不足</strong></td><td>酵母が窒素を使い果たし、含硫アミノ酸に切り替えてH₂Sを放出</td><td>発酵中〜後半（糖50〜0 g/L）</td><td>発酵前と1/3消費時にDAP＋有機窒素を補充しYAN目標値に</td></tr>
            <tr><td><strong>密閉発酵</strong></td><td>CO₂蓄積で酵母が極度の還元状態に</td><td>発酵活性ピーク</td><td>毎日短時間通気（白）またはポンプオーバー（赤）</td></tr>
            <tr><td><strong>オリ接触過剰</strong></td><td>死んだ酵母の自己分解で硫黄化合物を放出</td><td>過剰なシュル・リー熟成期間</td><td>定期的な撹拌または適時ラッキング；揮発性硫黄化合物を監視</td></tr>
          </tbody>
        </table>
        <h3>酸化リスク：根本原因分析</h3>
        <table class="data-table">
          <thead>
            <tr><th>根本原因</th><th>メカニズム</th><th>高リスク窓</th><th>予防</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>遊離SO₂不足</strong></td><td>SO₂は第一の酸化防止防衛線；低すぎるとフェノール類が直接酸化される</td><td>全プロセス、特に瓶詰め前</td><td>pHで目標遊離SO₂を調整（pH 3.2→25 mg/L；pH 3.5→40 mg/L）</td></tr>
            <tr><td><strong>金属触媒（Fe/Cu）</strong></td><td>Fe²⁺/Cu²⁺がフェノール酸化を加速（フェントン反応）</td><td>金属機器を含む作業</td><td>食品グレードステンレス鋼を使用；必要に応じてフィチン酸でキレート</td></tr>
            <tr><td><strong>高DO流入</strong></td><td>充填・ポンピング・ろ過からの酸素がアロマ化合物を直接酸化</td><td>すべての作業チェックポイント</td><td>不活性ガスブランケット；継続的なDO監視</td></tr>
          </tbody>
        </table>
        <h3>予防SOP：各段階での主要アクション</h3>
        <table class="data-table">
          <thead>
            <tr><th>製造段階</th><th>還元リスク予防</th><th>酸化リスク予防</th><th>監視指標</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>発酵前</strong></td><td>目標YANを予測；低硫黄酵母株を選択</td><td>初期SO₂添加；低温ジュース清澄化</td><td>YAN・DO・pH</td></tr>
            <tr><td><strong>発酵</strong></td><td>各添加時にYANを監視；1/3消費時に有機窒素を補充</td><td>酵母健全性のため適度なDO補充（0.5〜1.0 mg/L）</td><td>YAN・DO・酵母生存率</td></tr>
            <tr><td><strong>熟成/ラッキング</strong></td><td>定期的な撹拌でDMS蓄積を防止；メルカプタンを監視</td><td>DO &lt;0.5 mg/L；2〜4週ごとに遊離SO₂を確認</td><td>DO・遊離SO₂・ORP</td></tr>
            <tr><td><strong>瓶詰め</strong></td><td>官能確認：H₂Sやメルカプタンがないこと</td><td>白 &lt;0.1 mg/L；赤 &lt;0.2 mg/L</td><td>DO（インライン）・総SO₂</td></tr>
          </tbody>
        </table>
        <h3>緊急対応：問題発生時の優先アクション</h3>
        <p><strong>還元検出（H₂S）</strong>：1. 重大度を評価 → 2. 中程度以上：CuSO₄処理0.1〜0.3 mg/L → 3. ろ過して除去 → 4. 官能＋化学分析で確認 → 5. 根本原因調査と次バッチの予防。</p>
        <p><strong>酸化兆候検出</strong>：1. ORP（&gt;350 mVは即時対応が必要）＋遊離SO₂を測定 → 2. 緊急SO₂補充を目標レベルまで → 3. 軽度の酸化は回復することも；重度の酸化——格下げ/蒸留を評価。</p>
        <h3>ケーススタディ：還元リスクの系統的予防</h3>
        <p class="subhead">背景</p>
        <p>2022年ヴィンテージ高エステルソーヴィニヨン・ブラン；前ヴィンテージに軽度のマッチ臭。このヴィンテージで系統的な予防プロトコルを実施。</p>
        <p class="subhead">予防戦略</p>
        <ul>
          <li>収穫前YAN分析（測定値95 mg N/L；目標180 mg N/L）；補充スケジュールを計画。</li>
          <li>発酵前：有機窒素25 mg/L（Fermaid-O）；接種率0.35×10⁶ cells/mL。</li>
          <li>1/3消費時：有機窒素20 mg/L追加；DO 0.7 mg/Lまで短時間酸素化。</li>
          <li>完全監視：発酵全体を通じて48時間ごとにH₂S前駆物質を確認。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>全期間H₂S不検出；総エステルが前ヴィンテージより28%高い；予防コストは前年の銅処理・修正コストの75%減。</p>`;

// ── slides.8.content ─────────────────────────────────────
ja['slides.8.content'] = `
        <div class="chapter-intro">
          <h3>🔰 概念紹介：なぜワインには安定化が必要なのか？</h3>
          <p class="problem-explanation">
            あなたも経験したかもしれません：<strong>ワインボトルを開けると底にキラキラした結晶が見つかる</strong>。これは品質欠陥ではありませんが、消費者はワインが悪くなったと思う可能性があります。
          </p>
          
          <div class="common-issues">
            <h4>🔍 3大安定性問題</h4>
            <table class="issue-table">
              <tr>
                <th>問題</th>
                <th>原因</th>
                <th>見た目</th>
                <th>品質に影響するか？</th>
              </tr>
              <tr>
                <td><strong>酒石酸結晶</strong></td>
                <td>温度低下；酒石酸塩が沈殿</td>
                <td>✨ ボトル底部の小さな結晶</td>
                <td>❌ 無害だが見た目に影響</td>
              </tr>
              <tr>
                <td><strong>タンパク質ヘイズ</strong></td>
                <td>加熱時に白ワインのタンパク質が凝固</td>
                <td>☁️ 曇ったヘイズ</td>
                <td>❌ 無害だが見苦しい</td>
              </tr>
              <tr>
                <td><strong>酸化劣化</strong></td>
                <td>過剰酸素；風味化合物の分解</td>
                <td>🟫 色が茶色になる</td>
                <td>✅ 品質に実際に影響する</td>
              </tr>
            </table>
          </div>
          
          <div class="why-stabilize">
            <h4>💡 安定化の目標</h4>
            <p>ワインを「永久に変化しない」状態にするのではなく：</p>
            <ul class="goals">
              <li>✓ <strong>視覚的欠陥</strong>（結晶・ヘイズ）が販売に影響するのを防ぐ</li>
              <li>✓ <strong>最適な飲み頃期間</strong>を延長する（アロマと色を保持）</li>
              <li>✓ <strong>輸送の安全性</strong>を確保する（温度変化による問題なし）</li>
              <li>✓ ただし<strong>できる限り風味を保持する</strong>（過剰処理を避ける）</li>
            </ul>
          </div>
          
          <div class="method-overview">
            <h4>🛠️ 安定化の「ツールボックス」</h4>
            <p>職人が異なる道具を持つように、醸造家には複数の安定化方法があります：</p>
            <ul class="toolbox">
              <li>🧊 <strong>冷却安定化</strong>：「凍結結晶化」のように——結晶を事前に析出させる</li>
              <li>🌰 <strong>シーディング</strong>：「核」を加えて結晶を素早く成長させ除去する</li>
              <li>🧴 <strong>CMC添加剤</strong>：「結晶防止剤」のように——結晶成長を阻害する</li>
              <li>⚡ <strong>電気透析</strong>：電流を使って過剰なイオンを「引き出す」</li>
            </ul>
          </div>
        </div>

        <h3>酒石酸安定化：方法比較</h3>
        <div class="comparison-intro">
          <p>📊 <strong>安定化方法の選び方？</strong></p>
          <p>3つの要素を考慮：<strong>コスト・時間・風味への影響</strong></p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>方法</th><th>原理</th><th>利点</th><th>制限/風味への影響</th></tr>
          </thead>
          <tbody>
            <tr><td>冷却安定化</td><td>低温結晶化</td><td>信頼性が高く初期投資が低い</td><td>エネルギー消費が高く時間がかかる</td></tr>
            <tr><td>シーディング</td><td>結晶核を加えて析出を加速</td><td>速く制御可能</td><td>良好なろ過が必要；プロセス感度が高い</td></tr>
            <tr><td>CMC/メタ酒石酸</td><td>結晶成長を阻害</td><td>省エネ・冷却不要</td><td>官能リスクは低いが適合性評価が必要</td></tr>
            <tr><td>電気透析</td><td>選択的イオン除去</td><td>高速・連続処理可能</td><td>初期投資が高い；メンテナンスが必要</td></tr>
          </tbody>
        </table>
        <h3>タンパク質安定化と清澄化</h3>
        <p>タンパク質清澄剤の選択（コロイド・PVPP・ベントナイト）はアロマ保持と法規制適合のバランスが必要。</p>
        <h3>低/ノンアルコール技術と法規制</h3>
        <div class="low-alcohol-intro">
          <p>🆕 <strong>なぜ低アルコール/ノンアルコールワインが急に人気になったのか？</strong></p>
          <ul class="market-trend">
            <li>🚗 より厳しい飲酒運転規制</li>
            <li>🏃 高まる健康意識</li>
            <li>🤰 妊婦や非飲酒者もワインを楽しみたい</li>
            <li>📈 市場成長：2020〜2025年で年間20%</li>
          </ul>
          
          <div class="challenge-explanation">
            <h4>⚠️ 技術的課題：「風味を保ちながらアルコールを除去する」方法は？</h4>
            <p>これは難しい！なぜなら：</p>
            <ul>
              <li>アロマ分子はアルコールとともに除去されやすい</li>
              <li>アルコールはパレートに「重量感」を与える；除去するとワインが薄くなる</li>
              <li>糖・酸バランスが乱れる</li>
            </ul>
          </div>
          
          <div class="tech-simplified">
            <h4>🔧 3つの主要技術（平易な説明）</h4>
            <ul class="tech-list">
              <li><strong>逆浸透</strong>：水とアルコールだけを通過させる超フィルターのようなもの</li>
              <li><strong>真空蒸留</strong>：低圧下でアルコールを蒸発させる（高地では水が低温で沸騰しやすいのと同じ原理）</li>
              <li><strong>スピニングコーンカラム</strong>：先にアロマを回収し、アルコールを除去してから戻す（最も複雑だが最良の結果）</li>
            </ul>
          </div>
        </div>
        <p>技術：逆浸透・真空蒸留・スピニングコーンカラム；ABVラベリング・糖分調整・アロマ増強規則への適合が必要。</p>
        <h3>ケーススタディ：0.5% ABVアロマ白ワイン</h3>
        <p class="subhead">プロセス</p>
        <ul>
          <li>スピニングコーンカラムがまずアロマ留出液を回収 → 脱アルコール化 → アロマ留出液を再添加。</li>
          <li>甘さと酸度を微調整；微生物リスク管理。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>良好なアロマ保持；パレート構造は酸度と軽い炭酸で補完。</p>
        <h3>経済性とスタイルのトレードオフ</h3>
        <table class="data-table">
          <thead>
            <tr><th>選択肢</th><th>設備投資（CapEx）</th><th>運営費（OpEx）</th><th>スタイル整合性</th><th>推奨シナリオ</th></tr>
          </thead>
          <tbody>
            <tr><td>冷却安定化</td><td>低</td><td>中</td><td>高</td><td>小〜中規模・伝統的プロセス</td></tr>
            <tr><td>電気透析</td><td>高</td><td>低</td><td>高</td><td>大量生産・連続生産ライン</td></tr>
            <tr><td>スピニングコーン（低アルコール）</td><td>高</td><td>中</td><td>中〜高</td><td>0.0〜0.5% ABV製品ラインの構築</td></tr>
          </tbody>
        </table>`;

// ── slides.9.content ─────────────────────────────────────
ja['slides.9.content'] = `
      <div class="comprehensive-summary">
        <h3>🎯 コース核心の復習</h3>
        
        <div class="three-pillars-review">
          <div class="pillar">
            <h4>1️⃣ 酵母代謝：醸造の「化学工場」</h4>
            <div class="key-points">
              <p><strong>核心的な式</strong>：グルコース → エタノール＋アロマ副産物</p>
              <ul>
                <li>✓ <strong>低温発酵</strong>（12〜14°C）→ エステルを保持（花・果物のニュアンス）</li>
                <li>✓ <strong>低接種率</strong>→ アロマの複雑性が増すが、リスクも高い</li>
                <li>✓ <strong>適切な窒素源</strong>（YAN 180〜230 mg/L）→ 硫化水素を防ぐ</li>
                <li>✓ <strong>初期微量酸素添加</strong>→ 健全な酵母、スムーズな発酵</li>
              </ul>
              <p class="takeaway">💡 <strong>主要な洞察</strong>：醸造家は単に「酵母が糖をワインに変えるのを待つ」のではなく、温度・酸素・栄養の精密なコントロールを通じて、酵母が望むアロマプロファイルを生成するよう誘導する。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>2️⃣ 酸素管理：ワインの「呼吸リズム」</h4>
            <div class="key-points">
              <p><strong>2大リスク</strong>：過剰酸素 vs. 過剰還元</p>
              <table class="mini-table">
                <tr>
                  <th>段階</th>
                  <th>酸素要件</th>
                  <th>目標DO</th>
                </tr>
                <tr>
                  <td>発酵前半</td>
                  <td>少量のO₂が必要</td>
                  <td>0.5〜1.0 mg/L</td>
                </tr>
                <tr>
                  <td>熟成</td>
                  <td>赤：微量酸素添加 / 白：O₂を排除</td>
                  <td>厳密に監視</td>
                </tr>
                <tr>
                  <td>瓶詰め</td>
                  <td>極低酸素</td>
                  <td>&lt; 0.1〜0.2 mg/L</td>
                </tr>
              </table>
              <p class="takeaway">💡 <strong>主要な洞察</strong>：ワイン品質管理の80%は「酸素管理」にかかっている。瓶詰め時のDO過剰0.5 mg/Lで熟成ポテンシャルが2〜3年低下することがある。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>3️⃣ 安定化：ワインを「より長く良い状態に保つ」</h4>
            <div class="key-points">
              <p><strong>目標</strong>：風味を保持しながら視覚的欠陥を防ぐ</p>
              <ul>
                <li>✓ <strong>酒石酸結晶</strong>→ 冷却安定化 / シーディング / CMC / 電気透析</li>
                <li>✓ <strong>タンパク質ヘイズ</strong>→ 清澄剤 / PVPP</li>
                <li>✓ <strong>酸化防止</strong>→ 厳格なDO管理＋適切なSO₂</li>
              </ul>
              <div class="method-selection">
                <p><strong>方法選択ガイド：</strong></p>
                <ul>
                  <li>小規模シャトー → 冷却安定化（低投資・信頼性高）</li>
                  <li>大量生産 → 電気透析（高投資・省エネ）</li>
                  <li>迅速処理 → シーディング / CMC（短時間）</li>
                </ul>
              </div>
              <p class="takeaway">💡 <strong>主要な洞察</strong>：安定化技術の選択は「コスト・効率・風味への影響」の3次元のバランスが必要。過剰処理は風味を失わせ；不十分な処理は販売に影響する。</p>
            </div>
          </div>
        </div>

        <h3>🔄 システム思考：変数から成果へ</h3>
        <div class="system-thinking">
          <p>高度な醸造は孤立した技術ではなく、連鎖反応です：</p>
          <div class="chain-reaction">
            <div class="step">温度↓</div>
            <div class="arrow">→</div>
            <div class="step">酵母代謝が遅くなる</div>
            <div class="arrow">→</div>
            <div class="step">エステル↑</div>
            <div class="arrow">→</div>
            <div class="step">花・果物のニュアンス↑</div>
            <div class="arrow">→</div>
            <div class="step">ただし発酵時間↑</div>
          </div>
          <p class="insight">すべての調整が連鎖反応を引き起こす。熟練した醸造家はこれらの反応を予測して管理する。</p>
        </div>

        <h3>🌟 3つの重要な洞察</h3>
        <div class="key-insights-final">
          <div class="insight-card">
            <h4>⚖️ バランスが極端を上回る</h4>
            <p>最高のエステルレベルを追求する？それが発酵スタックを引き起こすかもしれない。絶対ゼロ酸素を追求する？それが還元オフノートを引き起こすかもしれない。<strong>品質エンジニアリングの本質は「動的なバランス」</strong>であり、単一指標の極端な追求ではない。</p>
          </div>
          
          <div class="insight-card">
            <h4>📊 データは手段；風味が目標</h4>
            <p>DO・ORP・YAN——これらのデータポイントはツールに過ぎない。最終的な検証は<strong>テイスティング</strong>から来なければならない。官能評価なしのデータ管理は盲目的な数字遊びに過ぎない。</p>
          </div>
          
          <div class="insight-card">
            <h4>🔬 科学が芸術をサポート；芸術が科学を導く</h4>
            <p>醸造は科学であり芸術でもある。科学は「何ができるか」を教えてくれる；芸術は「何をすべきか」を決める。トップの醸造家は科学的ツールを駆使しながら、芸術的直感で決定を下す。</p>
          </div>
        </div>

        <h3>📚 さらなる学習への推奨</h3>
        <ul class="further-study">
          <li><strong>技術的深化</strong>：微生物学と生化学の基礎を学ぶ——「どのように」だけでなく「なぜ」を理解する</li>
          <li><strong>機器の実践</strong>：DO計・pH計・圧力セルなどの監視機器に慣れる</li>
          <li><strong>ケーススタディ</strong>：トップシャトーの技術革新を追う（例：ラフィットの酸素管理システム、ディケムの選択収穫）</li>
          <li><strong>法規制のアップデート</strong>：低アルコール・添加物・ラベリングに関する最新EU/OIV基準を把握する</li>
          <li><strong>官能トレーニング</strong>：還元・酸化・エステルのアロマ特性を識別することを学ぶ；官能判断で技術的決定を検証する</li>
        </ul>

        <div class="final-message">
          <h4>🎓 締めくくりの言葉</h4>
          <p>
            高度な醸造科学は複雑に見えるかもしれませんが、核心的な哲学はシンプルです：<strong>変数を理解し、プロセスを監視し、結果を予測し、戦略を調整する</strong>。
            このエンジニアリング的な思考は醸造だけでなく——レベル4の専門家レベルの能力の特徴です。あなたは今、<strong>系統的なアプローチを使って複雑な問題を解決できる</strong>。
          </p>
          <p>このコースをマスターしたあなたは「どのようにワインを作るか」を知るだけでなく——「なぜそのように作るのか」と「他にどんなアプローチが可能か」を理解しています。それがプロフェッショナルと専門家の違いです。</p>
        </div>
      </div>`;

fs.writeFileSync('src/locales/ja/lessons/bordeaux/l4-2.json', JSON.stringify(ja, null, 2), 'utf8');
console.log('Keys:', Object.keys(ja).length);
