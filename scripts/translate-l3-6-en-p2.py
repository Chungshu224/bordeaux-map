import json, os
BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')

def patch_file(filename, patches):
    path = os.path.join(BASE, filename)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    count = 0
    for k, v in patches.items():
        if k in data:
            data[k] = v
            count += 1
        else:
            print(f'  WARNING: key not found: {k}')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved {filename}  ({count} keys updated)')

# ── slides.0.content  (course intro) ─────────────────────────────────────────
slide0_content = """
      <div class="intro-content">
        <p class="intro-lead">
          The greatness of Bordeaux wine lies not only in its exceptional terroir, but in the masterful art of blending practised by its winemakers. Blending (Assemblage) is the most central skill in Bordeaux — the craft of fusing wines from different varieties and different plots into a perfect whole.
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-6/01%20左右岸調配品種風格對比.svg" alt="Bordeaux Left and Right Bank Blending Variety Style Comparison: Left Bank Cab.S.-dominated vs. Right Bank Merlot-dominated" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <p class="intro-context">
          A top-tier Bordeaux red is typically blended from 3–5 varieties: Cabernet Sauvignon provides structure and aging potential, Merlot contributes suppleness and fruit, and Cabernet Franc adds elegance and complexity. Fine-tuning blend ratios can create dramatically different styles — this is where the winemaker's art and science meet in perfect harmony.
        </p>

        <h3 class="section-title">Learning Objectives</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 Master the classic Bordeaux blending ratios and principles</h4>
            <p>Understand the stylistic differences between Left Bank Cabernet-dominant (60–80%) and Right Bank Merlot-dominant (60–90%) blends, and learn variety role allocation</p>
          </div>

          <div class="point-item">
            <h4>🍇 Understand the unique role of each grape variety</h4>
            <p>Gain an in-depth understanding of how the five main varieties (CS, Merlot, CF, Petit Verdot, Malbec) function and contribute in a blend</p>
          </div>

          <div class="point-item">
            <h4>🎨 Explore the blending philosophy of top winemakers</h4>
            <p>Learn how the winemakers of Château Margaux, Haut-Brion and other great estates make decisions between tradition and innovation</p>
          </div>

          <div class="point-item">
            <h4>📊 Analyse vintage variation and its blending strategy implications</h4>
            <p>Understand how blending strategy should adapt when facing warm versus cool vintages, and the impact of climate change</p>
          </div>

          <div class="point-item">
            <h4>🔬 Grasp the application of modern technology in blending</h4>
            <p>From spectral analysis to AI-assisted blending systems, understand how technology enhances traditional blending artistry</p>
          </div>
        </div>
      </div>
    """

# ── slides.2.content  (why blend?) ────────────────────────────────────────────
slide2_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="text-align:center;font-size:0.75rem;color:#777;margin-bottom:10px;">Three Core Motivations Behind Bordeaux Blending</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🎵 Creating Complexity</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">A single variety can express pure varietal character, but blending creates a complexity and balance that no single variety can achieve alone. Like the harmonious interplay of different instruments in a symphony, each variety plays a unique role.<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">✨ 1 + 1 &gt; 2 — the whole exceeds the sum of its parts</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌧️ Spreading Risk</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Different varieties have different sensitivities to weather at each growth stage. Cabernet Sauvignon ripens later and is more susceptible to autumn rain; Merlot buds earlier but is more heat-resistant. Blending provides natural risk diversification against vintage variation.<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">🌿 In challenging vintages, variety diversification is insurance</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">📊 Ensuring Consistency</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Great châteaux must maintain their signature style across different vintages. By adjusting blending ratios — more Merlot in cool years, more CS in hot years — winemakers preserve the château's fundamental character despite year-to-year variation.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">🏆 Château style consistency is the foundation of brand value</div></div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:9px;padding:8px 13px;margin-top:10px;font-size:0.73rem;color:#555;line-height:1.7;">
          💡 <strong>Bordeaux Blending Philosophy: </strong>Blending is not to conceal deficiencies, but to create a perfection that transcends any single variety. Each adjustment reflects both the winemaker's philosophy and their response to the vintage.
        </div>
      </div>
    """

# ── slides.3.content  (three pillars of Bordeaux blending) ───────────────────
slide3_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">👑 Cabernet Sauvignon</div>
              <div style="font-size:0.68rem;opacity:0.85;">The King of Structure</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Provides the skeleton and power — firm tannins, deep colour, blackcurrant aromas — conferring remarkable aging potential. The soul variety of Left Bank blends.
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
                <div style="background:#FFEBEE;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#B71C1C;"><div>Typical Ratio</div><div style="font-weight:700;">40–70%</div></div>
                <div style="background:#FFF3E0;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#E65100;"><div>Aging Potential</div><div style="font-weight:700;">20–50 yrs</div></div>
              </div>
              <div style="background:#FFEBEE;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#B71C1C;margin-top:4px;">Blackcurrant · Cedar · Lead pencil · Structured tannins</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🍇 Merlot</div>
              <div style="font-size:0.68rem;opacity:0.85;">The Harmoniser</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Brings roundness and approachability — plum, chocolate and early-drinking appeal — softening CS's hard edges. The dominant variety on the Right Bank.
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#1565C0;"><div>Typical Ratio</div><div style="font-weight:700;">10–60%</div></div>
                <div style="background:#E8EAF6;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#3949AB;"><div>Aging Potential</div><div style="font-weight:700;">5–20 yrs</div></div>
              </div>
              <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#1565C0;margin-top:4px;">Plum · Chocolate · Round tannins · Early accessibility</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#6A1B9A);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🌸 Cabernet Franc</div>
              <div style="font-size:0.68rem;opacity:0.85;">The Elegance Enhancer</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Adds elegance and floral notes — violet, pencil shavings, spice — lifting the blend's aromatic complexity and contributing fresh acidity to balance ripeness.
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
                <div style="background:#EDE7F6;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#4527A0;"><div>Typical Ratio</div><div style="font-weight:700;">3–20%</div></div>
                <div style="background:#F3E5F5;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#6A1B9A;"><div>Aging Potential</div><div style="font-weight:700;">10–30 yrs</div></div>
              </div>
              <div style="background:#EDE7F6;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#4527A0;margin-top:4px;">Violet · Pencil shavings · Fresh acidity · Spice</div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🌿 Petit Verdot</div>
              <div style="font-size:0.68rem;opacity:0.85;">The Seasoning Spice</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Used in very small proportions (1–5%), but its contribution is remarkable: deep inky colour, concentrated spice and violet aromas, with firm tannins that add structure and colour intensity. Requires a warm year to ripen fully.
              <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#1B5E20;margin-top:4px;">Ink · Violet · Spice · Used only in good years</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🍁 Malbec</div>
              <div style="font-size:0.68rem;opacity:0.85;">The Texture Softener</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Once widely planted in Bordeaux, now used in tiny amounts (0–3%). Contributes deep colour, plummy fruit and velvety texture. More famous today in Argentina, where it is the flagship variety.
              <div style="background:#ECEFF1;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#37474F;margin-top:4px;">Deep colour · Plum · Velvet texture · Rare in Bordeaux today</div>
            </div>
          </div>
        </div>
      </div>
    """

patch_file('l3-6.json', {
    'slides.0.content': slide0_content,
    'slides.2.content': slide2_content,
    'slides.3.content': slide3_content,
})

print('Done.')
