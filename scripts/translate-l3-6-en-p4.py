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

# ── slides.11.content  (evolution of blending ratios) ────────────────────────
slide11_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57F17);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">📈 Historical Trend Analysis</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Over the past 50 years, blending ratios across Bordeaux have changed significantly. Climate change has made Cabernet Sauvignon easier to ripen, while market demand for earlier accessibility has driven an increase in Merlot proportions.<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">1970s vs 2020s: Merlot ratios broadly up 5–15%</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 The Impact of Technology</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Modern winemaking techniques such as optical sorting and micro-oxygenation allow winemakers to control each variety's expression far more precisely, opening up greater creative freedom in the blending process.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">Precision winemaking: modern technology makes blending more scientific</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌍 Market-Driven Adjustments</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Younger consumers prefer wines with richer fruit and softer tannins, prompting many estates to increase Merlot plantings or adopt gentler extraction methods to deliver earlier-drinking pleasure.<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">Consumer trend: shifting from age-required to early-accessible</div></div>
          </div>
        </div>
      </div>
    """

# ── slides.14.content  (blending decision timeline) ──────────────────────────
slide14_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.78rem;">⏱️ Phase One</div>
              <div style="font-size:0.68rem;opacity:0.85;">1 month post-harvest · Initial Assessment</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Evaluate the quality potential of each variety, analyse each plot's character, and establish the basic blending direction. At this stage, keep an open mind and avoid drawing conclusions prematurely.<div style="background:#FFF3E0;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#E65100;margin-top:6px;">🎯 Identify the lead variety and rough ratio framework (e.g. CS 65–75%)</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.78rem;">🔬 Phase Two</div>
              <div style="font-size:0.68rem;opacity:0.85;">3–6 months post-harvest · Precision Blending</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Taste through 50–100 individual barrels, carry out 5–10 small-scale trial blends, and evaluate each combination for balance, complexity, and aging potential.<div style="background:#E3F2FD;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1565C0;margin-top:6px;">🎯 Confirm final blending ratios (precise to 1%)</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.78rem;">✨ Phase Three</div>
              <div style="font-size:0.68rem;opacity:0.85;">12–18 months post-harvest · Refinement</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Evaluate the blend's integration and aging development before bottling; make minor adjustments (1–3%) based on tasting feedback. Confirm quality consistency between the grand vin and second wine.<div style="background:#E8F5E9;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1B5E20;margin-top:6px;">🎯 Final confirmation for bottling; decide grand vin / second wine split</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
          <div style="background:#FFF3E0;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">📅</div><div style="font-weight:700;color:#E65100;font-size:0.8rem;">12–18 months</div><div style="color:#555;margin-top:2px;">Decision cycle</div><div style="font-size:0.64rem;color:#777;">Harvest to bottling</div></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">🍷</div><div style="font-weight:700;color:#1565C0;font-size:0.8rem;">50–100</div><div style="color:#555;margin-top:2px;">Barrel tastings</div><div style="font-size:0.64rem;color:#777;">Barrel-by-barrel</div></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">🧪</div><div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">5–10 sets</div><div style="color:#555;margin-top:2px;">Trial blends</div><div style="font-size:0.64rem;color:#777;">Ratio testing</div></div>
          <div style="background:#F3E5F5;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">👥</div><div style="font-weight:700;color:#6A1B9A;font-size:0.8rem;">3–8 people</div><div style="color:#555;margin-top:2px;">Team size</div><div style="font-size:0.64rem;color:#777;">Panel tasting</div></div>
        </div>
      </div>
    """

# ── slides.15.content  (Michel Rolland interview) ────────────────────────────
slide15_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#37474F,#546E7A);border-radius:8px;padding:8px 14px;margin-bottom:9px;">
          <div style="color:rgba(255,255,255,0.8);font-size:0.7rem;">International wine consultant · advises over 100 châteaux worldwide</div>
          <div style="color:#fff;font-weight:700;font-size:0.8rem;margin-top:2px;">Michel Rolland's blending philosophy — including Pétrus, Le Pin, Angelus and other top estates</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:7px 11px;color:#fff;font-weight:700;font-size:0.75rem;">Q1 · What is the most important principle?</div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.75;"><em style="color:#555;">"Balance is at the core of everything. But I don't mean a mathematical balance — I mean harmony on the palate. Every vintage, every plot has its own personality, and my job is to make them sing the most beautiful chord together. In a great blended wine, you should not be able to distinguish which is the Cabernet and which is the Merlot — what you should experience is a perfectly integrated whole."</em><div style="background:#FFEBEE;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#B71C1C;margin-top:6px;">🎵 Pursue palate harmony, not mathematical ratios</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:7px 11px;color:#fff;font-weight:700;font-size:0.75rem;">Q2 · How does vintage variation affect blending?</div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.75;"><em style="color:#555;">"In a warm year, I increase the proportion of Cabernet Franc to maintain freshness and acidity; in a cool year, I may add more Merlot to supply roundness and fruit. The key is to understand the character of each vintage and then use blending to optimise its expression. There is no fixed formula — every vintage is a new challenge and a new opportunity."</em><div style="background:#E3F2FD;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1565C0;margin-top:6px;">🌡️ Flexible strategy: adjust ratios according to the vintage's character</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:7px 11px;color:#fff;font-weight:700;font-size:0.75rem;">Q3 · Advice for young winemakers?</div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.75;"><em style="color:#555;">"First, learn to taste — develop a keen and discerning palate. Taste different wines every day and train yourself to detect subtle differences. Second, understand how each variety actually performs across different soils and vintages. Most importantly, have patience — blending is an art that takes time and accumulated experience."</em><div style="background:#E8F5E9;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1B5E20;margin-top:6px;">📚 Palate training + varietal understanding + patience and experience</div></div>
          </div>
        </div>
      </div>
    """

patch_file('l3-6.json', {
    'slides.11.content': slide11_content,
    'slides.14.content': slide14_content,
    'slides.15.content': slide15_content,
})

print('Done.')
