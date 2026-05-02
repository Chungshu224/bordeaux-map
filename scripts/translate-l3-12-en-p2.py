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

# ── slides.0.content ──────────────────────────────────────────────────────────
slide0_content = """
      <div class="intro-content">
        <p class="intro-lead">
          Vintage is one of the most important dimensions in evaluating Bordeaux wines. The perfect climate of 2009 created near-perfect ripeness and balance, the classic structure of 2010 showcased Bordeaux's aging potential, and 2016 is hailed as one of the greatest vintages of the century. The quality of the same estate can vary enormously across vintages, with prices differing several-fold.
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-12/01%20波爾多頂級年份品質圖.svg" alt="Bordeaux Top Vintage Quality Chart: 2000–2023 Vintage Scores and Style Characteristics" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <p class="intro-context">
          This course will take you deep into the climate indicators and key timing milestones of vintage assessment, help you master the differences in aging characteristics across regions and varieties, and teach you techniques for judging the drinking window and aging potential. From the polymerization of tannins and phenolics to the evolution of anthocyanins and acidity, we will reveal the chemical secrets of the aging process. We will also explore wine investment strategies, market dynamics, and risk management to help you make informed decisions in collecting and investing.
        </p>

        <h3 class="section-title">Course Learning Objectives</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📊 Master Vintage Assessment Indicators</h4>
            <p>Learn key climate indicators such as temperature, rainfall, and sunshine, as well as critical timing for flowering, veraison, and harvest</p>
          </div>

          <div class="point-item">
            <h4>🍷 Understand Differences in Aging Characteristics</h4>
            <p>Analyze aging curves and drinking window differences for the Left Bank, Right Bank, different varieties, and estate classifications</p>
          </div>

          <div class="point-item">
            <h4>⏳ Learn Drinking Window Assessment Techniques</h4>
            <p>Master how to assess aging potential and the drinking window based on tannin structure, acidity, and fruit concentration</p>
          </div>

          <div class="point-item">
            <h4>🌡️ Master Optimal Storage Conditions</h4>
            <p>Understand how temperature, humidity, light, and vibration affect wine aging, and avoid common storage mistakes</p>
          </div>

          <div class="point-item">
            <h4>💰 Understand Wine Investment Strategies</h4>
            <p>Learn how to evaluate investment value, analyze market dynamics, and manage investment risk and portfolio</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Upon completing this course, you will have comprehensive professional knowledge of vintage analysis and aging assessment, becoming an expert in wine collecting and investing.
        </p>

        <div class="course-info">
          <p><strong>Estimated Study Time: </strong>42 minutes</p>
          <p><strong>Difficulty Level: </strong>Advanced Professional</p>
        </div>
      </div>
    """

# ── slides.2.content ──────────────────────────────────────────────────────────
slide2_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;">

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#7B3F00,#C0392B);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.3rem;">🌡️</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">Annual Terroir Variation</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Annual Terroir Variation</div>
              </div>
            </div>
            <div style="padding:10px 14px 14px;">
              <p style="font-size:0.78rem;color:#444;line-height:1.7;margin:0 0 10px;">
                Although Bordeaux enjoys a stable oceanic climate, subtle annual weather variations still profoundly affect grape quality. The combination of <strong>temperature, rainfall, and sunshine</strong> determines grape ripeness, acidity, and tannin structure, which in turn governs wine quality and aging potential.
              </p>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
                <div style="background:#FFF3E0;border-radius:8px;padding:7px 8px;text-align:center;">
                  <div style="font-size:1rem;">🌡️</div>
                  <div style="font-size:0.7rem;color:#E65100;font-weight:600;margin-top:2px;">Temperature</div>
                  <div style="font-size:0.67rem;color:#777;margin-top:1px;">Ripening rate</div>
                </div>
                <div style="background:#E8F5E9;border-radius:8px;padding:7px 8px;text-align:center;">
                  <div style="font-size:1rem;">🌧️</div>
                  <div style="font-size:0.7rem;color:#2E7D32;font-weight:600;margin-top:2px;">Rainfall</div>
                  <div style="font-size:0.67rem;color:#777;margin-top:1px;">Concentration</div>
                </div>
                <div style="background:#FFF9C4;border-radius:8px;padding:7px 8px;text-align:center;">
                  <div style="font-size:1rem;">☀️</div>
                  <div style="font-size:0.7rem;color:#F57F17;font-weight:600;margin-top:2px;">Sunshine</div>
                  <div style="font-size:0.67rem;color:#777;margin-top:1px;">Sugar accumulation</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#0288D1);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.3rem;">📊</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">The Significance of Vintage Ratings</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Vintage Rating &amp; Its Limits</div>
              </div>
            </div>
            <div style="padding:10px 14px 14px;">
              <p style="font-size:0.78rem;color:#444;line-height:1.7;margin:0 0 10px;">
                Vintage ratings (Parker's 100-point scale, Decanter stars) are quick references that synthesize climate, harvest conditions, and wine performance, but professional assessment must be refined to the <strong>level of region and variety</strong>.
              </p>
              <div style="background:#E3F2FD;border-radius:8px;padding:8px 10px;">
                <div style="font-size:0.72rem;color:#1565C0;font-weight:700;margin-bottom:5px;">⚠️ Important Note</div>
                <ul style="margin:0;padding-left:14px;font-size:0.74rem;color:#333;line-height:1.8;">
                  <li>A great Left Bank year <strong>≠</strong> a great Right Bank year</li>
                  <li>A great red wine year <strong>≠</strong> a great sweet white wine year</li>
                  <li>Within the same appellation, different estates can vary greatly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:10px;padding:11px 15px;display:flex;align-items:flex-start;gap:10px;">
          <span style="font-size:1.4rem;flex-shrink:0;">💡</span>
          <div>
            <div style="font-weight:700;color:#E65100;font-size:0.82rem;margin-bottom:3px;">Core Insight</div>
            <div style="font-size:0.78rem;color:#555;line-height:1.65;">
              <strong>A great vintage is not flawless weather, but perfect alignment at critical moments</strong> — frost-free spring, dry flowering period, moderate water stress in late summer, clear skies before harvest; every element is essential.
            </div>
          </div>
        </div>

      </div>
    """

# ── slides.3.content ──────────────────────────────────────────────────────────
slide3_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.78rem;color:#555;margin:0 0 12px;line-height:1.65;">
          Bordeaux's grape-growing cycle runs from <strong>budbreak in March</strong> to <strong>harvest in October</strong>, with each critical stage requiring entirely different climate conditions. The heart of vintage assessment lies in tracking the climate performance during these four periods.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#388E3C,#66BB6A);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌱</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">March–April: Budbreak</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Budbreak</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>Ideal: </strong>mild with no frost (daily average &gt;10°C)</div>
              <div style="margin-bottom:4px;">❌ <strong>Risk: </strong>spring frost damages buds (e.g., the major frost of 2017)</div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#2E7D32;font-weight:600;">📌 Determines base yield</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#F57F17,#FFB300);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌸</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">May–June: Flowering &amp; Fruit Set</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Flowering &amp; Fruit Set</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>Ideal: </strong>warm and dry (20–25°C), no strong winds or storms</div>
              <div style="margin-bottom:4px;">❌ <strong>Risk: </strong>overcast rain → poor fruit set (coulure), uneven berry size (millerandage)</div>
              <div style="background:#FFF8E1;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#E65100;font-weight:600;">📌 Determines yield and berry uniformity</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#C62828,#E53935);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🍇</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">July–August: Véraison</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Véraison</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>Ideal: </strong>hot (25–30°C) + moderate water stress</div>
              <div style="margin-bottom:4px;">❌ <strong>Risk: </strong>extreme heat (&gt;35°C) halts ripening; heavy rain dilutes berries</div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#C62828;font-weight:600;">📌 Determines fruit concentration and flavor complexity</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌾</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">September–October: Ripening &amp; Harvest</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Ripening &amp; Harvest</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>Ideal: </strong>warm and dry, cool nights, no heavy rain</div>
              <div style="margin-bottom:4px;">❌ <strong>Risk: </strong>pre-harvest rain dilutes fruit, botrytis rot; harvesting too early → underripe</div>
              <div style="background:#EDE7F6;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#4527A0;font-weight:600;">📌 Determines final quality, acidity, and tannin ripeness</div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.8rem;margin-bottom:7px;">🏆 The Climate Formula for a Great Vintage</div>
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;font-size:0.74rem;">
            <span style="background:#E8F5E9;color:#2E7D32;border-radius:20px;padding:3px 10px;font-weight:600;">Warm Spring</span>
            <span style="color:#aaa;">→</span>
            <span style="background:#FFF8E1;color:#E65100;border-radius:20px;padding:3px 10px;font-weight:600;">Dry Flowering Period</span>
            <span style="color:#aaa;">→</span>
            <span style="background:#FFEBEE;color:#C62828;border-radius:20px;padding:3px 10px;font-weight:600;">Hot with Stress in July–August</span>
            <span style="color:#aaa;">→</span>
            <span style="background:#EDE7F6;color:#4527A0;border-radius:20px;padding:3px 10px;font-weight:600;">Cool and Dry in September</span>
          </div>
          <div style="margin-top:8px;font-size:0.72rem;color:#666;line-height:1.65;">
            Representative vintages: <strong>2009</strong> (perfect summer heat + ideal September harvest), <strong>2010</strong> (balanced growing season + cool nights preserving acidity), <strong>2016</strong> (dry summer + timely September rain)
          </div>
        </div>

      </div>
    """

# ── slides.4.content ──────────────────────────────────────────────────────────
slide4_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.78rem;color:#555;margin:0 0 12px;line-height:1.65;">
          The <strong>Left Bank</strong> (gravel soils, Cabernet-dominant) and the <strong>Right Bank</strong> (clay-limestone, Merlot-dominant) often show vastly different performances in the same vintage year, due to differences in soil drainage and variety ripening time.
        </p>

        <div style="display:flex;gap:8px;margin-bottom:10px;font-size:0.72rem;">
          <div style="background:#E3F2FD;border-radius:20px;padding:4px 12px;color:#1565C0;font-weight:600;">Left Bank: fast-draining gravel + late-ripening Cabernet</div>
          <div style="background:#FCE4EC;border-radius:20px;padding:4px 12px;color:#880E4F;font-weight:600;">Right Bank: water-retaining clay + early-ripening Merlot</div>
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(90deg,#0288D1,#0097A7);padding:7px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1rem;">🌧️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">High-Rainfall Vintages</div>
              <span style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:12px;padding:2px 8px;font-size:0.69rem;color:#fff;">Typical: 2013</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              <div style="padding:9px 12px;border-right:1px solid #f0f0f0;">
                <div style="font-size:0.7rem;color:#1565C0;font-weight:700;margin-bottom:4px;">🏛️ Left Bank</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">Good gravel drainage, relatively less affected; but Cabernet needs longer ripening, heavily impacted by harvest-time rain, yielding greener tannins</div>
              </div>
              <div style="padding:9px 12px;">
                <div style="font-size:0.7rem;color:#880E4F;font-weight:700;margin-bottom:4px;">⛪ Right Bank</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">Strong clay water retention leads to waterlogging; but <strong>Merlot's early ripening</strong> allows early harvest before rain, preserving quality</div>
              </div>
            </div>
            <div style="background:#E1F5FE;padding:5px 12px;font-size:0.71rem;color:#01579B;">🏆 Result: Right Bank generally outperforms Left Bank (Merlot harvested early, avoiding October rain)</div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(90deg,#E64A19,#FF7043);padding:7px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1rem;">🔥</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Dry, Hot Vintages</div>
              <span style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:12px;padding:2px 8px;font-size:0.69rem;color:#fff;">Typical: 2003</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              <div style="padding:9px 12px;border-right:1px solid #f0f0f0;">
                <div style="font-size:0.7rem;color:#1565C0;font-weight:700;margin-bottom:4px;">🏛️ Left Bank</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">Heavy water stress on gravel, with <strong>clear advantage for old-vine deep root systems</strong>; Cabernet is heat-tolerant, performing more consistently in extreme years</div>
              </div>
              <div style="padding:9px 12px;">
                <div style="font-size:0.7rem;color:#880E4F;font-weight:700;margin-bottom:4px;">⛪ Right Bank</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">Clay retains moisture to support Merlot, but excessive heat leads to overripeness, high alcohol (15%+), and loss of finesse</div>
              </div>
            </div>
            <div style="background:#FBE9E7;padding:5px 12px;font-size:0.71rem;color:#BF360C;">🏆 Result: Left Bank shows better structure; Right Bank Merlot generally overripe</div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(90deg,#2E7D32,#43A047);padding:7px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1rem;">⚖️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Ideally Balanced Vintages</div>
              <span style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:12px;padding:2px 8px;font-size:0.69rem;color:#fff;">2009 / 2010 / 2016</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              <div style="padding:9px 12px;border-right:1px solid #f0f0f0;">
                <div style="font-size:0.7rem;color:#1565C0;font-weight:700;margin-bottom:4px;">🏛️ Left Bank</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">Cabernet fully ripe, silky tannins, powerful structure, with 30–50 years aging potential</div>
              </div>
              <div style="padding:9px 12px;">
                <div style="font-size:0.7rem;color:#880E4F;font-weight:700;margin-bottom:4px;">⛪ Right Bank</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">Merlot perfectly ripe, lush fruit, velvety texture, truly stunning</div>
              </div>
            </div>
            <div style="background:#E8F5E9;padding:5px 12px;font-size:0.71rem;color:#1B5E20;">🏆 Result: Both banks win — a truly legendary vintage</div>
          </div>
        </div>

      </div>
    """

# ── slides.5.content ──────────────────────────────────────────────────────────
slide5_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);margin-bottom:12px;">
          <div style="background:linear-gradient(135deg,#F9A825,#FF8F00);padding:9px 14px;display:flex;align-items:center;gap:8px;">
            <span style="font-size:1.2rem;">🍯</span>
            <div>
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">Perfect Conditions for Botrytis cinerea</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Sauternes &amp; Barsac's Secret Weapon</div>
            </div>
          </div>
          <div style="padding:10px 14px 13px;">
            <p style="font-size:0.77rem;color:#444;line-height:1.7;margin:0 0 10px;">
              Sauternes and Barsac sweet whites rely on Botrytis cinerea to concentrate sugars and develop complex flavors. Botrytis requires very specific climatic conditions — <strong>making great years for sweet whites often different from those for red wines</strong>.
            </p>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
              <div style="background:#FFF8E1;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">🌫️</div>
                <div style="font-size:0.69rem;color:#E65100;font-weight:700;margin-top:3px;">Morning Mist</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">Cold air from the Ciron river<br/>promotes Botrytis growth</div>
              </div>
              <div style="background:#FFF3E0;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">☀️</div>
                <div style="font-size:0.69rem;color:#E65100;font-weight:700;margin-top:3px;">Afternoon Sun</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">Warm and dry<br/>halts fungal spread</div>
              </div>
              <div style="background:#FCE4EC;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">📅</div>
                <div style="font-size:0.69rem;color:#880E4F;font-weight:700;margin-top:3px;">Lasting Several Weeks</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">Repeating morning mist /<br/>afternoon sun cycle, Sep–Nov</div>
              </div>
              <div style="background:#E8F5E9;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">✂️</div>
                <div style="font-size:0.69rem;color:#2E7D32;font-weight:700;margin-top:3px;">Multiple Passes</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">Tries successives<br/>picking only perfect botrytis</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;margin-bottom:11px;">
          <div style="font-weight:700;color:#333;font-size:0.8rem;margin-bottom:8px;">🏅 Great Vintages for Sweet White Wines</div>
          <div style="display:flex;flex-direction:column;gap:5px;">
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#FFD700,#FFC107);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#5D4037;text-align:center;">2001</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">Mediocre red wines, but a legendary vintage for sweet whites — perfect botrytis conditions, Yquem hailed as the wine of the century</div>
            </div>
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#FFD700,#FFC107);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#5D4037;text-align:center;">2009</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">Dual champion for both red and sweet white wines — an extremely rare triple-winner for Left Bank, Right Bank, and sweet whites</div>
            </div>
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#C0C0C0,#9E9E9E);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#fff;text-align:center;">2011</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">Average reds, but excellent sweet whites — ideal autumn morning mist conditions, with the Garonne valley shining</div>
            </div>
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#C0C0C0,#9E9E9E);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#fff;text-align:center;">2015</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">Perfect botrytis following a dry summer, with abundant sugar and refreshing acidity</div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border-left:3px solid #FFC107;border-radius:8px;padding:9px 13px;">
          <div style="font-weight:700;color:#E65100;font-size:0.78rem;margin-bottom:4px;">⚠️ Vintage Risks</div>
          <div style="font-size:0.74rem;color:#555;line-height:1.7;">
            Excessive rain → gray rot instead of botrytis; too dry → botrytis cannot form; timing harvest even slightly off results in missing the optimal state.
            In some years (e.g., <strong>2012</strong>) estates abandon production of their premier sweet wine entirely.
          </div>
        </div>

      </div>
    """

patch_file('l3-12.json', {
    'slides.0.content': slide0_content,
    'slides.2.content': slide2_content,
    'slides.3.content': slide3_content,
    'slides.4.content': slide4_content,
    'slides.5.content': slide5_content,
})

print('Done.')
