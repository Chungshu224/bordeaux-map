import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.2.content — intro-content div
data["slides.2.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          Red wine winemaking is a complex process transforming grapes into quality red wine. Bordeaux winemaking combines traditional wisdom and modern science; every step profoundly affects the final wine's colour, tannin structure, flavour complexity and ageing potential.
        </p>

        <p class="intro-context">
          From the moment grapes enter the cellar, the winemaker must make a series of critical decisions on destemming, maceration extraction, fermentation control and pressing timing. These decisions affect not only the current vintage's quality but also the wine's ageing potential for decades to come.
        </p>

        <h3 class="section-title">Core Content of This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>• Destemming</h4>
            <p>Understand the mechanical impact on grape integrity; learn to adjust the destemming ratio based on vintage character</p>
          </div>

          <div class="point-item">
            <h4>• Maceration Extraction</h4>
            <p>Master the extraction kinetics of colour, tannin and flavour; learn the application timing of cold maceration, pump-over and punch-down</p>
          </div>

          <div class="point-item">
            <h4>• Alcoholic Fermentation</h4>
            <p>Learn how temperature affects aroma retention and extraction efficiency; understand the impact of yeast selection on wine style</p>
          </div>

          <div class="point-item">
            <h4>• Malolactic Fermentation</h4>
            <p>Understand how MLF softens acidity and stabilises the body, and its application strategies for different wines</p>
          </div>

          <div class="point-item">
            <h4>• Top Château Practices</h4>
            <p>Analyse the winemaking decisions and quality philosophy of Château Latour, Château Margaux and other leading estates</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Mastering this knowledge, you will understand why Bordeaux continues to produce the world's finest red wines, and how winemakers express terroir through precise technical control.
        </p>
      </div>
    """

# slides.3.content — winemaking overview with SVG and process steps
data["slides.3.content"] = """
      <div class="winemaking-overview">
        <p class="lead-text">Bordeaux red wine production is a precisely controlled process requiring the winemaker's professional judgement and technical execution at every step.</p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-5/01%20紅酒釀造完整流程圖.svg" alt="Complete Bordeaux Red Wine Winemaking Process: 8 Steps from Harvest to Bottling" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
        
        <div class="process-steps">
          <div class="step">
            <h4>1️⃣ Harvest & Sorting</h4>
            <ul>
              <li><strong>Timing:</strong> determined by sugar, acidity and phenolic maturity</li>
              <li><strong>Hand vs Machine:</strong> top châteaux mostly hand-harvested to ensure grape integrity</li>
              <li><strong>Sorting:</strong> vibrating table and optical sorter remove unhealthy or unripe grapes</li>
              <li><strong>Bordeaux Standard:</strong> classified growths typically perform 2–3 sortings</li>
            </ul>
          </div>

          <div class="step">
            <h4>2️⃣ Crushing & Destemming</h4>
            <ul>
              <li><strong>Destemming ratio:</strong> usually 100%, some vintages retain 5–10% of stems</li>
              <li><strong>Crushing intensity:</strong> gentle crushing to avoid pressing seeds and preventing bitterness</li>
              <li><strong>SO₂ addition:</strong> 10–30 mg/L to prevent oxidation and contamination</li>
            </ul>
          </div>

          <div class="step">
            <h4>3️⃣ Cold Maceration</h4>
            <ul>
              <li><strong>Temperature:</strong> 8–15°C</li>
              <li><strong>Duration:</strong> 3–7 days</li>
              <li><strong>Purpose:</strong> extract colour and fruit aromas without starting fermentation</li>
              <li><strong>Controversy:</strong> not all châteaux use it; some believe it dilutes terroir character</li>
            </ul>
          </div>

          <div class="step">
            <h4>4️⃣ Alcoholic Fermentation</h4>
            <ul>
              <li><strong>Temperature:</strong> 28–32°C (red wine)</li>
              <li><strong>Duration:</strong> 7–14 days</li>
              <li><strong>Yeast:</strong> natural vs commercial yeast</li>
              <li><strong>Monitored parameters:</strong> density, temperature, residual sugar, volatile acidity</li>
            </ul>
          </div>

          <div class="step">
            <h4>5️⃣ Maceration</h4>
            <ul>
              <li><strong>Total maceration time:</strong> 15–30 days (including fermentation period)</li>
              <li><strong>Techniques:</strong> pump-over, punch-down, rack-and-return, délestage</li>
              <li><strong>Goal:</strong> extract colour, tannin and flavour compounds</li>
            </ul>
          </div>

          <div class="step">
            <h4>6️⃣ Pressing & Blending</h4>
            <ul>
              <li><strong>Free-run wine:</strong> wine released before pressing (highest quality)</li>
              <li><strong>Press wine:</strong> stronger structure, higher tannin</li>
              <li><strong>Preliminary blending:</strong> decide on variety and batch mixing ratios</li>
            </ul>
          </div>

          <div class="step">
            <h4>7️⃣ Malolactic Fermentation</h4>
            <ul>
              <li><strong>Timing:</strong> usually starts naturally after alcoholic fermentation</li>
              <li><strong>Temperature:</strong> 18–22°C</li>
              <li><strong>Duration:</strong> 2–6 weeks</li>
              <li><strong>Effect:</strong> reduces acidity, increases smoothness, brings creamy and nutty aromas</li>
            </ul>
          </div>
        </div>
      </div>
    """

# slides.6.content — maceration technique comparison table
data["slides.6.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">Different maceration techniques and their characteristics and suitable scenarios — Bordeaux winemakers choose flexibly by vintage and objective</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.74rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#7B1FA2,#9C27B0);">
                <th style="color:#fff;padding:7px 10px;text-align:left;font-weight:700;border-right:1px solid rgba(255,255,255,0.2);">Technique</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">Extraction Intensity</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">Oxidation Level</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">Labour Intensity</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">Cost</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">Suitable Varieties</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">Usage Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#F3E5F5;">
                <td style="padding:7px 10px;font-weight:700;color:#7B1FA2;">Pump-Over (Remontage)</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Medium ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Medium ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Low ⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">All varieties</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#7B1FA2;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">90%</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#C62828;">Punch-Down (Pigeage)</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">High ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Low ⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">High ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€–€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Merlot · Cab. Franc</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#C62828;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">30%</span></td>
              </tr>
              <tr style="background:#F3E5F5;">
                <td style="padding:7px 10px;font-weight:700;color:#1565C0;">Rack-and-Return (Délestage)</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Very High ⭐⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">High ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Very High ⭐⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Cabernet Sauvignon</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#1565C0;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">20%</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#37474F;">Rotovinifier</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Extremely High ⭐×6</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Low ⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Very Low ⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€€€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Experimental batches</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#37474F;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">5%</span></td>
              </tr>
              <tr style="background:#F3E5F5;">
                <td style="padding:7px 10px;font-weight:700;color:#2E7D32;">Combined Pump-over + Punch-down</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">High ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Medium ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Medium-High ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">Premium wines</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#2E7D32;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">40%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    """

# slides.7.content — Château Margaux maceration case study
data["slides.7.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">Core Challenge ｜ Margaux</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">How to find balance between Cabernet Sauvignon's powerful structure and Margaux village's characteristic elegance and finesse?</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#C62828,#E53935);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🍷 Four-Stage Maceration Strategy</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:4px;"><strong style="color:#C62828;">① Cold maceration 4–5 days</strong> 10–12°C｜extract anthocyanins and fruit aromas</div>
              <div style="margin-bottom:4px;"><strong style="color:#E65100;">② Alcoholic fermentation 8–10 days</strong> 30–31°C｜pump-over ×3 + punch-down ×1/day</div>
              <div style="margin-bottom:4px;"><strong style="color:#F57F17;">③ Post-fermentation maceration 8–12 days</strong> reduce pump-overs to 1–2 times｜daily tasting assessment</div>
              <div style="margin-bottom:6px;"><strong style="color:#2E7D32;">④ Batch management</strong> 40–50 fermentation batches｜separated by plot/vine age</div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 9px;font-size:0.7rem;color:#B71C1C;">Total maceration time: 20–27 days (adjusted by vintage)</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">📊 Results and Technical Indicators</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E8F5E9;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">Colour Intensity (OD)</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">10–14</div>
                </div>
                <div style="background:#FFF3E0;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">Total Phenolics (mg/L)</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.8rem;">2800–3200</div>
                </div>
                <div style="background:#F3E5F5;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">Tannins (g/L)</div>
                  <div style="font-weight:700;color:#6A1B9A;font-size:0.8rem;">3.0–3.5</div>
                </div>
                <div style="background:#E3F2FD;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">pH</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.8rem;">3.6–3.7</div>
                </div>
              </div>
              <div style="font-size:0.73rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:3px;">· Deep ruby with violet reflections</div>
                <div style="margin-bottom:3px;">· Tannins like silk, powerful yet not coarse</div>
                <div>· Preserving Margaux floral aromas + 30–50 year ageing structure</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
          <div style="background:#FFEBEE;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#B71C1C;line-height:1.65;"><strong>No Universal Formula</strong><br><span style="color:#555;">Must adjust maceration strategy flexibly by vintage, plot and variety</span></div>
          <div style="background:#FFF3E0;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#E65100;line-height:1.65;"><strong>Temperature Precision is Critical</strong><br><span style="color:#555;">±1°C control has a decisive impact on extraction quality</span></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#1565C0;line-height:1.65;"><strong>Sensory > Data</strong><br><span style="color:#555;">Tasting assessment guides winemaking decisions better than lab data</span></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#1B5E20;line-height:1.65;"><strong>Traditional and Modern Complement Each Other</strong><br><span style="color:#555;">Punch-down tradition combined with modern temperature control optimises extraction</span></div>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 2, 3, 6, 7 content.")
