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

# ── slides.6.content  (Left Bank vs Right Bank blending styles) ───────────────
slide6_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#D32F2F);padding:9px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🏛️ Left Bank: The Power Aesthetic of CS Dominance</div><div style="font-size:0.68rem;opacity:0.85;">Médoc · Graves</div></div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.75;">Gravel soils with excellent drainage; the pursuit of structure, power, and exceptional aging potential.
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:7px;">
                <div style="background:#FFEBEE;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">CS Ratio</div><div style="font-weight:700;color:#B71C1C;">50–80%</div></div>
                <div style="background:#FFF3E0;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">Drinking Window</div><div style="font-weight:700;color:#E65100;">10–20 yrs</div></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">Style</div><div style="font-weight:700;color:#2E7D32;">Structured</div></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">Tannins</div><div style="font-weight:700;color:#1565C0;">Firm</div></div>
              </div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:7px;">Representative châteaux: Latour · Mouton · Lynch-Bages</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">⛪ Right Bank: The Sensory Aesthetic of Merlot Dominance</div><div style="font-size:0.68rem;opacity:0.85;">St-Émilion · Pomerol</div></div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.75;">Clay and limestone soils retaining moisture; the pursuit of lushness, generosity, and earlier accessibility.
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:7px;">
                <div style="background:#E3F2FD;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">Merlot Ratio</div><div style="font-weight:700;color:#1565C0;">60–90%</div></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">Drinking Window</div><div style="font-weight:700;color:#2E7D32;">5–15 yrs</div></div>
                <div style="background:#FFF3E0;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">Style</div><div style="font-weight:700;color:#E65100;">Approachable</div></div>
                <div style="background:#FCE4EC;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">Tannins</div><div style="font-weight:700;color:#880E4F;">Velvety</div></div>
              </div>
              <div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">Representative châteaux: Pétrus · Cheval Blanc · Ausone</div>
            </div>
          </div>
        </div>
        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:9px 13px;">
          <div style="font-weight:700;color:#333;font-size:0.78rem;margin-bottom:7px;">🔍 The Key Differences Between the Two Banks</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;font-size:0.69rem;">
            <div style="background:#FFEBEE;border-radius:7px;padding:6px 8px;text-align:center;">
              <div style="font-weight:700;color:#B71C1C;margin-bottom:3px;">Soil</div>
              <div style="color:#555;line-height:1.5;">Left: Gravel<br>Right: Clay/Limestone</div>
            </div>
            <div style="background:#E3F2FD;border-radius:7px;padding:6px 8px;text-align:center;">
              <div style="font-weight:700;color:#1565C0;margin-bottom:3px;">Lead Variety</div>
              <div style="color:#555;line-height:1.5;">Left: CS 50–80%<br>Right: Merlot 60–90%</div>
            </div>
            <div style="background:#E8F5E9;border-radius:7px;padding:6px 8px;text-align:center;">
              <div style="font-weight:700;color:#2E7D32;margin-bottom:3px;">Style</div>
              <div style="color:#555;line-height:1.5;">Left: Power & Structure<br>Right: Lush & Accessible</div>
            </div>
            <div style="background:#FFF8E1;border-radius:7px;padding:6px 8px;text-align:center;">
              <div style="font-weight:700;color:#F57F17;margin-bottom:3px;">Aging</div>
              <div style="color:#555;line-height:1.5;">Left: 15–50+ yrs<br>Right: 8–30 yrs</div>
            </div>
          </div>
        </div>
      </div>
    """

# ── slides.7.content  (variety roles in detail) ──────────────────────────────
slide7_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏛️ CS — The Architect</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Like the steel frame of a building, Cabernet Sauvignon provides the solid structural foundation of the wine. Its high tannin content and deep colour confer powerful aging potential and the ability to develop complex tertiary aromas over decades.<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:7px;">Core contribution: Structure · Tannins · Aging potential · Blackcurrant flavours</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🍇 Merlot — The Harmoniser</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Merlot acts as a gentle harmoniser: its round texture and generous fruit soften Cabernet Sauvignon's hard edges while filling the mid-palate gaps, making the blend more accessible from an earlier stage.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">Core contribution: Roundness · Fruit richness · Early accessibility · Plum flavours</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#6A1B9A);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌸 Cabernet Franc — The Perfumer</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Cabernet Franc is the blend's perfumer, adding floral and spicy top notes — violet, pencil shavings, red berry — while contributing lively acidity to prevent the blend from feeling heavy or flat.<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">Core contribution: Elegance · Floral aroma · Acidity · Spice</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌿 Petit Verdot — The Seasoning</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Used sparingly (1–5%), Petit Verdot acts like a potent seasoning: adding ink-dark colour depth, concentrated violet aromas and firm tannins that enhance structure and longevity. Only used in warm years when it ripens fully.<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">Core contribution: Colour depth · Violet · Structure · Only in top vintages</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🍁 Malbec — The Texture Softener</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Rarely used in Bordeaux today (0–3%), Malbec contributes deep colour, plummy fruit and velvety texture. Once widespread in Bordeaux, it has largely migrated to Argentina where it now reigns as the flagship grape.<div style="background:#ECEFF1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#37474F;margin-top:7px;">Core contribution: Colour depth · Plum texture · Now more prominent in Mendoza</div></div>
          </div>
          <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border-radius:10px;border:1px solid #FFD54F;padding:9px 12px;display:flex;flex-direction:column;justify-content:center;">
            <div style="font-weight:700;color:#F57F17;font-size:0.78rem;margin-bottom:6px;">💡 The Five-Variety Orchestra</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.75;">
              Each variety has its irreplaceable role: CS lays the foundation, Merlot adds flesh, CF sprinkles perfume, PV sharpens the colour and adds depth, and Malbec provides a velvety finish. A masterful winemaker knows how to conduct them together — creating harmony that transcends any soloist.
            </div>
          </div>
        </div>
      </div>
    """

# ── slides.10.content  (five First Growth blend ratios) ──────────────────────
slide10_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">👑 Château Lafite</div>
              <div style="font-size:0.67rem;opacity:0.85;">Pauillac · Elegance School</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Pursues the "perfect balance of elegance and power" — less CS than Latour, more Merlot to soften the structure. Creates silky tannins and mineral character; aging potential 30–50 years.
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:5px;">CS 70% + M 25% + CF 3% + PV 2%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">🎨 Silky tannins · Cedarwood · Lead pencil mineral</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">💪 Château Latour</div>
              <div style="font-size:0.67rem;opacity:0.85;">Pauillac · Power School</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">The highest CS ratio among the First Growths, pursues maximum structure and longevity — the most "muscular" and long-lived First Growth. Great vintages need 20+ years before opening.
              <div style="background:#ECEFF1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#37474F;margin-top:5px;">CS 75–80% + M 15–20% + CF 4% + PV 1%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">💪 Powerful tannins · Deep colour · Iron minerality</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#880E4F,#AD1457);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🌹 Château Margaux</div>
              <div style="font-size:0.67rem;opacity:0.85;">Margaux · Floral School</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">Renowned for its floral aromatics and delicate texture, with the highest CF ratio among the Left Bank First Growths. Pure Cabernet Sauvignon is used for the grand vin only.
              <div style="background:#FCE4EC;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#880E4F;margin-top:5px;">CS 75% + M 20% + CF 5%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">🌹 Floral · Delicate · Feminine elegance</div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🌿 Château Haut-Brion</div>
              <div style="font-size:0.67rem;opacity:0.85;">Pessac-Léognan · Terroir School</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">The most unique blending style among the First Growths — significantly higher Merlot ratio than Médoc peers, reflecting the clay-gravel terroir of Pessac-Léognan. Known for its smoky, tobacco and earthy complexity.
              <div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:5px;">CS 45% + M 37% + CF 18%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">🌿 Earthy · Tobacco · Smoky minerality</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#D32F2F);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🏰 Château Mouton Rothschild</div>
              <div style="font-size:0.67rem;opacity:0.85;">Pauillac · Bold School</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">The highest CS proportion among all First Growths, pursuing extreme concentration and depth. Famous for its expressive cassis, cedar and graphite aromas. Each year's label features an artwork by a world-renowned artist.
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:5px;">CS 80–85% + M 10% + CF 8% + PV 2%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">🎨 Cassis · Graphite · Cedar concentration</div>
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:9px;padding:7px 12px;margin-top:9px;font-size:0.71rem;color:#555;line-height:1.65;">
          💡 <strong>Key Insight: </strong>Five châteaux all in Pauillac or nearby, yet each pursues a radically different style — proof that blending ratios directly shape a château's identity and market positioning.
        </div>
      </div>
    """

patch_file('l3-6.json', {
    'slides.6.content': slide6_content,
    'slides.7.content': slide7_content,
    'slides.10.content': slide10_content,
})

print('Done.')
