#!/usr/bin/env python3
"""
Update l4-2.json locale files to add the new Chapter 3 (還原/氧化風險管理)
and renumber existing slides 5-8 → 7-10.
"""
import json
from pathlib import Path

BASE = Path('src/locales')

# ── New slides 5 & 6 content (zh-TW) ─────────────────────────────
ZH_NEW = {
    "slides.5.title": "第3章",
    "slides.5.subtitle": "風險管理",
    "slides.6.title": "還原/氧化風險根因分析與預防",
    "slides.6.content": """
        <div class="chapter-intro">
          <h3>🔰 概念入門：「防患未然」的成本遠低於「亡羊補牢」</h3>
          <div class="prevention-philosophy">
            <p>還原（H₂S/硫醇）與氧化是葡萄酒品質的兩大隱患。與其在問題發生後矯正，不如建立系統性預防流程：</p>
            <ul>
              <li>事後銅處理成本：每桶 €50–200；預防成本：€5–20（差距10倍）</li>
              <li>早期氧化不可逆；還原矯正可能留下痕跡</li>
              <li><strong>結論：預防的ROI遠高於矯正</strong></li>
            </ul>
          </div>
        </div>

        <h3>還原風險根因分析</h3>
        <table class="data-table">
          <thead>
            <tr><th>根本原因</th><th>機制</th><th>高風險窗口</th><th>預防措施</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>YAN不足</strong></td><td>酵母氮源耗盡後轉向含硫胺基酸，釋出H₂S</td><td>發酵中後期（糖度50–0 g/L）</td><td>發酵前及1/3進度補充DAP + 有機氮至目標YAN</td></tr>
            <tr><td><strong>封閉發酵</strong></td><td>CO₂積聚，酵母處於極度還原狀態</td><td>發酵高峰期</td><td>每日短暫曝氣（白酒）或打泵（紅酒）</td></tr>
            <tr><td><strong>酒泥長期接觸</strong></td><td>死亡酵母分解釋出含硫化合物</td><td>陳年期過度酒泥培育</td><td>定期攪拌或適時撈渣；監測揮發硫化物</td></tr>
          </tbody>
        </table>
        <h3>氧化風險根因分析</h3>
        <table class="data-table">
          <thead>
            <tr><th>根本原因</th><th>機制</th><th>高風險窗口</th><th>預防措施</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>游離SO₂不足</strong></td><td>SO₂是一線抗氧化防線；過低時酚類直接氧化</td><td>全程，尤其裝瓶前</td><td>依pH調整目標游離SO₂（pH 3.2→25 mg/L，pH 3.5→40 mg/L）</td></tr>
            <tr><td><strong>金屬催化（Fe/Cu）</strong></td><td>Fe²⁺/Cu²⁺加速酚類氧化（Fenton反應）</td><td>操作過程（泵送、接觸金屬設備）</td><td>使用食品級不鏽鋼；必要時添加植酸鰲合</td></tr>
            <tr><td><strong>高DO輸入</strong></td><td>裝填、泵送、過濾引入溶氧直接氧化香氣</td><td>每個操作節點</td><td>惰性氣體覆蓋；DO即時監測</td></tr>
          </tbody>
        </table>
        <h3>預防SOP：各階段管理要點</h3>
        <table class="data-table">
          <thead>
            <tr><th>生產階段</th><th>還原風險預防</th><th>氧化風險預防</th><th>監測指標</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>發酵前</strong></td><td>預測目標YAN；選擇低硫化物酵母菌株</td><td>早期SO₂添加；低溫汁液澄清</td><td>YAN、DO、pH</td></tr>
            <tr><td><strong>發酵中</strong></td><td>每次補氮監測YAN；1/3進度補充有機氮</td><td>適度DO補充（0.5–1.0 mg/L）支持酵母</td><td>YAN、DO、酵母活力</td></tr>
            <tr><td><strong>陳年/轉罐</strong></td><td>定期攪拌防DMS積聚；監測硫醇</td><td>DO &lt;0.5 mg/L；每2–4周確認游離SO₂</td><td>DO、游離SO₂、ORP</td></tr>
            <tr><td><strong>裝瓶</strong></td><td>感官確認無H₂S/硫醇</td><td>白酒 &lt;0.1 mg/L，紅酒 &lt;0.2 mg/L</td><td>DO（線上監測）、總SO₂</td></tr>
          </tbody>
        </table>
        <h3>應急決策：問題發生後的優先處置</h3>
        <p><strong>偵測到還原（H₂S）</strong>：1. 評估嚴重程度 → 2. 中度以上：CuSO₄處理 0.1–0.3 mg/L → 3. 過濾去除 → 4. 感官+化學分析驗證 → 5. 根因排查與下批次預防。</p>
        <p><strong>偵測到氧化跡象</strong>：1. 量測ORP（&gt;350 mV需立即處理）+ 游離SO₂ → 2. 緊急補充SO₂至目標水平 → 3. 輕度氧化可望恢復；嚴重氧化評估降級/蒸餾。</p>
        <h3>案例研究：系統性預防還原風險</h3>
        <p class="subhead">背景</p>
        <p>2022年份高酯Sauvignon Blanc，前一年份曾出現輕微火柴盒味，本年份決定實施系統性預防。</p>
        <p class="subhead">預防策略</p>
        <ul>
          <li>採收前分析YAN（實測95 mg N/L，目標180 mg N/L）；規劃補充量。</li>
          <li>發酵前添加25 mg/L有機氮（Fermaid-O）；接種量0.35×10⁶ cells/mL。</li>
          <li>發酵1/3再補充20 mg/L有機氮；短暫充氧至DO 0.7 mg/L。</li>
          <li>全程每48小時監測H₂S前驅物。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>全程未偵測到H₂S；總酯類比上年份高28%；預防成本較前一年銅處理矯正費用減少75%。</p>
      """,
    "slides.6.highlights.0.title": "根因分析",
    "slides.6.highlights.0.content": "還原與氧化的深層成因、前驅物與敏感窗口。",
    "slides.6.highlights.1.title": "預防SOP",
    "slides.6.highlights.1.content": "發酵、陳年、轉罐、裝瓶各階段的預防標準作業程序。",
    "slides.6.highlights.2.title": "應急決策樹",
    "slides.6.highlights.2.content": "問題發生後的快速診斷流程、優先矯正順序與驗證指標。",
}

# ── New slides 5 & 6 content (en) ─────────────────────────────────
EN_NEW = {
    "slides.5.title": "Chapter 3",
    "slides.5.subtitle": "Risk Management",
    "slides.6.title": "Reduction/Oxidation Risk: Root Cause Analysis & Prevention",
    "slides.6.content": """
        <div class="chapter-intro">
          <h3>🔰 Concept Introduction: Prevention Costs Far Less Than Correction</h3>
          <div class="prevention-philosophy">
            <p>Reduction (H₂S / mercaptans) and oxidation are the two major quality threats. Systemic prevention outperforms reactive correction every time:</p>
            <ul>
              <li>Post-hoc copper treatment cost: €50–200 per tank; prevention cost: €5–20 (10× difference)</li>
              <li>Early oxidation is largely irreversible; reduction correction may leave traces</li>
              <li><strong>Conclusion: The ROI of prevention far exceeds that of correction</strong></li>
            </ul>
          </div>
        </div>

        <h3>Reduction Risk: Root Cause Analysis</h3>
        <table class="data-table">
          <thead>
            <tr><th>Root Cause</th><th>Mechanism</th><th>High-Risk Window</th><th>Prevention</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Insufficient YAN</strong></td><td>Yeast depletes nitrogen, switches to sulphur-containing amino acids, releasing H₂S</td><td>Mid-to-late fermentation (sugar 50–0 g/L)</td><td>Supplement DAP + organic nitrogen before fermentation and at 1/3 depletion to target YAN</td></tr>
            <tr><td><strong>Closed fermentation</strong></td><td>CO₂ accumulation places yeast in extreme reductive state</td><td>Peak fermentation activity</td><td>Daily brief aeration (white) or pump-over (red)</td></tr>
            <tr><td><strong>Extended lees contact</strong></td><td>Dead yeast autolysis releases sulphur compounds</td><td>Excessive lees ageing period</td><td>Regular stirring or timely racking; monitor volatile sulphur compounds</td></tr>
          </tbody>
        </table>
        <h3>Oxidation Risk: Root Cause Analysis</h3>
        <table class="data-table">
          <thead>
            <tr><th>Root Cause</th><th>Mechanism</th><th>High-Risk Window</th><th>Prevention</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Insufficient free SO₂</strong></td><td>SO₂ is the first line of antioxidant defence; when too low, phenolics oxidise directly</td><td>Entire process, especially pre-bottling</td><td>Adjust target free SO₂ by pH (pH 3.2→25 mg/L; pH 3.5→40 mg/L)</td></tr>
            <tr><td><strong>Metal catalysis (Fe/Cu)</strong></td><td>Fe²⁺/Cu²⁺ accelerate phenolic oxidation (Fenton reaction)</td><td>Operations involving metal equipment</td><td>Use food-grade stainless steel; chelate with phytic acid if needed</td></tr>
            <tr><td><strong>High DO ingress</strong></td><td>Oxygen from filling, pumping, or filtration directly oxidises aroma compounds</td><td>Every operational checkpoint</td><td>Inert gas blanketing; continuous DO monitoring</td></tr>
          </tbody>
        </table>
        <h3>Prevention SOP: Key Actions at Each Stage</h3>
        <table class="data-table">
          <thead>
            <tr><th>Production Stage</th><th>Reduction Risk Prevention</th><th>Oxidation Risk Prevention</th><th>Monitoring Indicators</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Pre-fermentation</strong></td><td>Forecast target YAN; select low-sulphide yeast strains</td><td>Early SO₂ addition; low-temperature juice clarification</td><td>YAN, DO, pH</td></tr>
            <tr><td><strong>Fermentation</strong></td><td>Monitor YAN at each addition; supplement organic N at 1/3 depletion</td><td>Moderate DO supplementation (0.5–1.0 mg/L) for yeast health</td><td>YAN, DO, yeast viability</td></tr>
            <tr><td><strong>Ageing / racking</strong></td><td>Regular stirring to prevent DMS accumulation; monitor mercaptans</td><td>DO &lt;0.5 mg/L; confirm free SO₂ every 2–4 weeks</td><td>DO, free SO₂, ORP</td></tr>
            <tr><td><strong>Bottling</strong></td><td>Sensory confirmation: no H₂S or mercaptans</td><td>White &lt;0.1 mg/L; Red &lt;0.2 mg/L</td><td>DO (in-line), total SO₂</td></tr>
          </tbody>
        </table>
        <h3>Emergency Response: Priority Actions When Problems Arise</h3>
        <p><strong>Reduction detected (H₂S)</strong>: 1. Assess severity → 2. Moderate or above: CuSO₄ treatment 0.1–0.3 mg/L → 3. Filter to remove → 4. Verify by sensory + chemical analysis → 5. Root cause investigation and next-batch prevention.</p>
        <p><strong>Oxidation signs detected</strong>: 1. Measure ORP (&gt;350 mV requires immediate action) + free SO₂ → 2. Emergency SO₂ supplementation to target level → 3. Mild oxidation may recover; severe oxidation — evaluate downgrade / distillation.</p>
        <h3>Case Study: Systematic Prevention of Reduction Risk</h3>
        <p class="subhead">Background</p>
        <p>2022 vintage high-ester Sauvignon Blanc; the previous vintage showed mild struck-match notes. A systematic prevention protocol was implemented for this vintage.</p>
        <p class="subhead">Prevention Strategy</p>
        <ul>
          <li>Pre-harvest YAN analysis (measured 95 mg N/L; target 180 mg N/L); planned supplementation schedule.</li>
          <li>Pre-fermentation: 25 mg/L organic nitrogen (Fermaid-O); inoculation rate 0.35 × 10⁶ cells/mL.</li>
          <li>At 1/3 depletion: additional 20 mg/L organic nitrogen; brief oxygenation to DO 0.7 mg/L.</li>
          <li>Full monitoring: H₂S precursors checked every 48 hours throughout fermentation.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>No H₂S detected throughout; total esters 28% higher than previous vintage; prevention cost was 75% less than the prior-year copper treatment and correction costs.</p>
      """,
    "slides.6.highlights.0.title": "Root Cause Analysis",
    "slides.6.highlights.0.content": "In-depth causes, precursors, and sensitive windows for reduction and oxidation.",
    "slides.6.highlights.1.title": "Prevention SOP",
    "slides.6.highlights.1.content": "Standard operating procedures for prevention at each stage: fermentation, ageing, racking, and bottling.",
    "slides.6.highlights.2.title": "Emergency Decision Tree",
    "slides.6.highlights.2.content": "Rapid diagnostic protocol after problem onset, priority correction sequence, and verification indicators.",
}

def update_locale(locale_path, new_keys, rename_map):
    """
    Rename existing keys according to rename_map and insert new_keys.
    """
    data = json.loads(locale_path.read_text(encoding='utf-8'))
    
    # Build new dict: rename old keys first
    updated = {}
    for k, v in data.items():
        new_k = rename_map.get(k, k)
        updated[new_k] = v
    
    # Add new keys
    updated.update(new_keys)
    
    # Sort keys for readability
    def sort_key(k):
        parts = k.split('.')
        nums = []
        for p in parts:
            try:
                nums.append((0, int(p)))
            except ValueError:
                nums.append((1, p))
        return nums
    
    sorted_data = {k: updated[k] for k in sorted(updated.keys(), key=sort_key)}
    locale_path.write_text(json.dumps(sorted_data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f"Updated {locale_path}: {len(sorted_data)} keys")
    return sorted_data

# Build rename map: slides.5 → slides.7, slides.6 → slides.8, slides.7 → slides.9, slides.8 → slides.10
rename_map = {}
for key in ["slides.5.title", "slides.5.subtitle",
            "slides.6.title", "slides.6.content",
            "slides.6.highlights.0.title", "slides.6.highlights.0.content",
            "slides.6.highlights.1.title", "slides.6.highlights.1.content",
            "slides.6.highlights.2.title", "slides.6.highlights.2.content",
            "slides.7.title", "slides.7.content",
            "slides.8.title"]:
    # Parse the slide index
    parts = key.split('.')
    idx = int(parts[1])
    new_idx = idx + 2  # shift by 2 (inserting 2 new slides at 5,6)
    rename_map[key] = '.'.join([parts[0], str(new_idx)] + parts[2:])

print("Rename map:")
for old, new in sorted(rename_map.items()):
    print(f"  {old} -> {new}")

# Update zh-TW
zh_path = BASE / 'zh-TW/lessons/bordeaux/l4-2.json'
update_locale(zh_path, ZH_NEW, rename_map)

# Update en (also need to rename + add new keys)
en_path = BASE / 'en/lessons/bordeaux/l4-2.json'

# For en, we also need the existing chapter title updates
EN_EXTRA = {
    # Update the renumbered old chapter 3 title (now chapter 4)
    # slides.7.title was '第3章' → should be '第4章'  
    # but actually in the en locale, old slides.5.title was 'Chapter 3'
    # After rename, it becomes slides.7.title - let's override with correct title
}
update_locale(en_path, EN_NEW, rename_map)

# Fix the old chapter 3 title: after rename, slides.7.title = 'Chapter 3' needs to be 'Chapter 4'
# And slides.5.title (new chapter 3) was already set to 'Chapter 3' in EN_NEW
# slides.7.title in zh-TW: was '第3章' → now needs to be '第4章'

print("\nFixing chapter number in zh-TW slides.7.title...")
zh_data = json.loads(zh_path.read_text(encoding='utf-8'))
zh_data['slides.7.title'] = '第4章'
zh_path.write_text(json.dumps(zh_data, ensure_ascii=False, indent=2), encoding='utf-8')
print(f"  slides.7.title -> '第4章'")

print("\nFixing chapter number in en slides.7.title...")
en_data = json.loads(en_path.read_text(encoding='utf-8'))
en_data['slides.7.title'] = 'Chapter 4'
en_path.write_text(json.dumps(en_data, ensure_ascii=False, indent=2), encoding='utf-8')
print(f"  slides.7.title -> 'Chapter 4'")

print("\nDone!")
