import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.31.content — oak barrel science intro (complex with embedded 3+2 card grid)
data["slides.31.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          Oak barrels are dynamic chemical and biological reactors — chemical extraction, slow micro-oxygenation, and lees interaction: three layers of mechanism shaping wine style.
        </p>

        <p class="intro-context">
          A quality oak barrel's influence comes from three dimensions: chemical extraction (vanillin, lactones, eugenol, oak tannins), slow micro-oxygenation (promoting anthocyanin stability and tannin polymerisation), and interaction with lees (enhancing texture and complexity). Understanding these scientific principles is key to evaluating wine quality and style.
        </p>

        <h3 class="section-title">Key Learning Points of This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌳 Differences in Oak Species</h4>
            <p>European oak (Quercus robur / sessilis) vs American oak (Quercus alba) — grain tightness determines extraction rate and aroma profile</p>
          </div>

          <div class="point-item">
            <h4>🇫🇷 French Region Characteristics</h4>
            <p>Tronçais / Allier / Limousin / Vosges / Nevers — density, tannin and vanillin differences, precise matching to wine objectives</p>
          </div>

          <div class="point-item">
            <h4>🔬 Chemical Composition Analysis</h4>
            <p>Vanillin / lactones / eugenol / furfural — how different compounds are released and their impact on aroma and structure</p>
          </div>

          <div class="point-item">
            <h4>📊 Extraction Kinetics</h4>
            <p>First 6–12 months extraction fastest, followed by gradual deceleration — understanding time curve to optimise ageing strategy</p>
          </div>

          <div class="point-item">
            <h4>⚖️ New/Used Barrel Strategy</h4>
            <p>How to configure new barrel ratio; decision logic and risk-reward for top château barrel ageing strategies</p>
          </div>
        </div>
      </div>
    """

# slides.32.content — European vs American oak comparison
data["slides.32.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Core classification: European Oak vs American Oak — grain tightness determines extraction rate and aroma profile</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:12px;">
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:10px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">🇪🇺 European Oak</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Quercus robur / sessilis</div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1B5E20;"><strong>Structure:</strong> tight growth rings, small vessels</div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1B5E20;"><strong>Extraction:</strong> slow release, elegant and gradual</div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1B5E20;"><strong>Aroma:</strong> refined spice, mineral</div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1B5E20;"><strong>Tannin:</strong> strong structure, good antioxidant capacity</div>
              </div>
              <div style="background:#F1F8E9;border-radius:6px;padding:5px 9px;font-size:0.73rem;color:#33691E;text-align:center;">Vanillin 1–5 mg/L ｜ Lactones 1–3 mg/L</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">🇺🇸 American Oak</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Quercus alba</div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E3F2FD;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1565C0;"><strong>Structure:</strong> loose growth rings, larger vessels</div>
                <div style="background:#E3F2FD;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1565C0;"><strong>Extraction:</strong> fast, intense one-off impact</div>
                <div style="background:#E3F2FD;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1565C0;"><strong>Aroma:</strong> vanilla, coconut, pronounced sweetness</div>
                <div style="background:#E3F2FD;border-radius:5px;padding:4px 7px;font-size:0.7rem;color:#1565C0;"><strong>Tannin:</strong> lower, smoother mouthfeel</div>
              </div>
              <div style="background:#E3F2FD;border-radius:6px;padding:5px 9px;font-size:0.73rem;color:#0D47A1;text-align:center;">Vanillin 5–15 mg/L ｜ Lactones 3–10 mg/L</div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 14px;font-weight:700;font-size:0.82rem;color:#fff;">🔬 Anatomical Differences and Impact</div>
            <div style="padding:9px 14px 11px;font-size:0.75rem;color:#333;line-height:1.8;">Vessel size / growth ring tightness / density → determines extraction rate and micro-oxygenation rhythm. Tight (Tronçais) = elegant gradual; Loose (Limousin) = intense rapid.</div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 14px;font-weight:700;font-size:0.82rem;color:#fff;">💡 Winemaking Impact</div>
            <div style="padding:9px 14px 11px;font-size:0.75rem;color:#333;line-height:1.8;">Tight grain = <strong>slow release</strong>; loose grain = <strong>fast release + stronger one-off impact</strong>. Bordeaux top red wines primarily use European oak, pursuing refined gradual flavour integration.</div>
          </div>
        </div>
      </div>
    """

# slides.33.content — French oak region comparison table
data["slides.33.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Density / Tannin / Aroma / Style Suitability — top châteaux precisely select region to match wine objective</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.72rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#4E342E,#6D4C41);">
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:left;border-radius:6px 0 0 0;">Region</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Density</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Tannin Intensity</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Vanillin</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Extraction Speed</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Style</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Suitable For</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;border-radius:0 6px 0 0;">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#EFEBE9;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Vosges</td>
                <td style="padding:7px 10px;text-align:center;">Extremely High ★★★★★</td>
                <td style="padding:7px 10px;text-align:center;">High ★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Medium ★★★</td>
                <td style="padding:7px 10px;text-align:center;">Slow ★★</td>
                <td style="padding:7px 10px;text-align:center;">Refined Spice</td>
                <td style="padding:7px 10px;text-align:center;">Premium Red</td>
                <td style="padding:7px 10px;text-align:center;">€€€€</td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Allier</td>
                <td style="padding:7px 10px;text-align:center;">High ★★★★</td>
                <td style="padding:7px 10px;text-align:center;">High ★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Medium-High ★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Medium ★★★</td>
                <td style="padding:7px 10px;text-align:center;">Balanced Elegant</td>
                <td style="padding:7px 10px;text-align:center;">High-End Red/White</td>
                <td style="padding:7px 10px;text-align:center;">€€€</td>
              </tr>
              <tr style="background:#EFEBE9;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Tronçais</td>
                <td style="padding:7px 10px;text-align:center;"><strong>Highest ★★★★★★</strong></td>
                <td style="padding:7px 10px;text-align:center;">Refined High ★★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Low ★★</td>
                <td style="padding:7px 10px;text-align:center;"><strong>Extremely Slow ★</strong></td>
                <td style="padding:7px 10px;text-align:center;">Extreme Elegance</td>
                <td style="padding:7px 10px;text-align:center;">Ultra Premium</td>
                <td style="padding:7px 10px;text-align:center;">€€€€€€</td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Limousin</td>
                <td style="padding:7px 10px;text-align:center;">Medium ★★★</td>
                <td style="padding:7px 10px;text-align:center;">Extremely High ★★★★★★</td>
                <td style="padding:7px 10px;text-align:center;">High ★★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Fast ★★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Bold Direct</td>
                <td style="padding:7px 10px;text-align:center;">Spirits/Structural</td>
                <td style="padding:7px 10px;text-align:center;">€€</td>
              </tr>
              <tr style="background:#EFEBE9;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Nevers</td>
                <td style="padding:7px 10px;text-align:center;">High ★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Medium-High ★★★★</td>
                <td style="padding:7px 10px;text-align:center;">Medium ★★★</td>
                <td style="padding:7px 10px;text-align:center;">Medium ★★★</td>
                <td style="padding:7px 10px;text-align:center;">Round Balanced</td>
                <td style="padding:7px 10px;text-align:center;">Mid-Range Wine</td>
                <td style="padding:7px 10px;text-align:center;">€€€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#FFF3E0;border-radius:8px;padding:8px 13px;margin-top:10px;font-size:0.74rem;color:#E65100;line-height:1.7;">
          💡 Tronçais is called the "Champagne of oak" — extremely fine dense growth rings create extremely slow extraction, the most elegant choice and most expensive investment.
        </div>
      </div>
    """

# slides.35.content — oak barrel manufacturing intro (complex with 3+2 card grid)
data["slides.35.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          Creating a top oak barrel requires years — from selection and air-drying to toasting, every stage is an investment in flavour.
        </p>

        <p class="intro-context">
          Cooperage is not only technique but also art. From selecting 150–200 year-old oaks, to 24–60 months of natural air-drying, then precisely controlled toasting, every stage affects the final flavour expression. This is why top new oak barrels can cost €800–1,200, and their influence can last 3–5 years.
        </p>

        <h3 class="section-title">In-Depth Content of This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌬️ Natural Air-Drying: Time and Chemical Changes</h4>
            <p>24–60 months of natural drying softens tannins, releases aroma precursors — cannot be replaced by kiln drying</p>
          </div>

          <div class="point-item">
            <h4>🔥 Toasting Science and Temperature Control</h4>
            <p>160–220°C pyrolysis, Maillard reaction and caramelisation — multi-layer reactions building the flavour profile</p>
          </div>

          <div class="point-item">
            <h4>🎯 Flavour Characteristics of Toast Levels</h4>
            <p>Light: fresh coconut → Medium: vanilla/nuts → Medium-Plus: caramel/coffee → Heavy: coffee/smoke</p>
          </div>

          <div class="point-item">
            <h4>🏭 Custom Services of Top Cooperages</h4>
            <p>Taransaud / Seguin Moreau — material selection, drying cycles and custom toasting programme craft heritage</p>
          </div>

          <div class="point-item">
            <h4>💰 Oak Barrel Quality Assessment</h4>
            <p>Top new barrels €800–1,200, influence lasting 3–5 years; understand cost-benefit logic and ROI thinking</p>
          </div>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 31, 32, 33, 35 content.")
