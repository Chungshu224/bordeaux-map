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

# ── slides.18.content  (ideal storage conditions) ────────────────────────────
slide18_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          Wine storage requires strict control of six environmental conditions — any deviation can <strong>accelerate aging or permanently damage</strong> the wine. Understanding the mechanism behind each factor is essential to effectively protect your collection.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px;margin-bottom:12px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#E53935);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🌡️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Temperature</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ Ideal: 12–14°C (constant temperature most critical)</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">Acceptable range: 10–16°C</div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#C62828;line-height:1.55;">
                ⚠️ &gt;20°C accelerates aging; every 8°C rise doubles aging rate
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#0277BD,#0288D1);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">💧</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Humidity</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ Ideal: 60–75%</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">Acceptable range: 55–80%</div>
              <div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#01579B;line-height:1.55;">
                ⚠️ &lt;50% dries out corks causing leakage; &gt;80% causes label mold
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FB8C00);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🔅</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Light</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ Ideal: Complete darkness</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">Acceptable: dim indirect light</div>
              <div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#BF360C;line-height:1.55;">
                ⚠️ UV rays cause "light-strike" oxidation; white wines and pale bottles most at risk
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#5E35B1);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">📳</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Vibration</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ Ideal: Complete stillness</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">Acceptable: occasional movement</div>
              <div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#311B92;line-height:1.55;">
                ⚠️ Continuous vibration disturbs aging and accelerates oxidation; keep away from washing machines
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🍾</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Bottle Position</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ Ideal: Horizontal (keeps cork moist)</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">Acceptable: slightly tilted</div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#1B5E20;line-height:1.55;">
                ⚠️ Upright for short periods (&lt;1 year) is acceptable; long-term must be horizontal
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#006064,#00838F);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🌬️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Air Quality</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ Ideal: Odor-free, well-ventilated</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">Acceptable: clean air</div>
              <div style="background:#E0F7FA;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#004D61;line-height:1.55;">
                ⚠️ Corks breathe; paint / chemical odors can permeate through the cork into the wine
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:9px;padding:8px 13px;font-size:0.73rem;color:#555;line-height:1.7;">
          💡 <strong>Memory Aid: </strong>Stable temperature, sufficient humidity, darkness, still and horizontal, odor-free — master these six principles and your wine will age safely.
        </div>

      </div>
    """

# ── slides.19.content  (home storage solutions) ──────────────────────────────
slide19_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          Choose the most suitable storage method based on your budget. <strong>There is no perfect solution, only the most appropriate choice for your current situation</strong> — the key is understanding the limitations of each option and not storing high-value wines beyond its protective capacity.
        </p>

        <div style="display:flex;flex-direction:column;gap:9px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#546E7A,#78909C);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:700;font-size:0.78rem;">💰 Low Budget</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">&lt; NTD 20,000</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">Short-term &lt;2 years</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">Use the coolest, darkest spot in your home (basement, bottom of wardrobe)</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ Low cost</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ Unstable temperature and humidity</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#F5F5F5;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#555;">🧭 Choose the north-facing ground floor</span>
                  <span style="background:#F5F5F5;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#555;">🌡️ Place a hygrometer/thermometer to monitor</span>
                  <span style="background:#F5F5F5;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#555;">📌 Only store wines for near-term drinking</span>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:700;font-size:0.78rem;">💰💰 Mid Budget</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">NTD 20,000–100,000</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">30–100 bottle wine cabinet</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">Purchase a small professional wine cabinet (compressor type)</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ Constant temperature and humidity</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ Electricity costs + limited capacity</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#E3F2FD;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#1565C0;">🔧 Compressor type superior to thermoelectric</span>
                  <span style="background:#E3F2FD;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#1565C0;">🪟 Can apply UV-blocking film to glass</span>
                  <span style="background:#E3F2FD;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#1565C0;">🏷️ EuroCave / Liebherr</span>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#FFD700;font-weight:700;font-size:0.78rem;">💰💰💰 High Budget</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">NTD 100,000+</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">First choice for long-term aging</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">Large wine cabinet or converted dedicated temperature-controlled cellar</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ Perfect storage conditions</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ High cost + takes up space</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#FFEBEE;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#B71C1C;">🏛️ Professional insulation + temperature control system</span>
                  <span style="background:#FFEBEE;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#B71C1C;">📊 Consider zoning (red/white/sweet)</span>
                  <span style="background:#FFEBEE;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#B71C1C;">🔒 Install monitoring and insurance</span>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#4527A0,#6A1B9A);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:700;font-size:0.78rem;">🏢 Alternative</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">Cellar rental service</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">Ideal for investment collections</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">Consign to professional cellars in Bordeaux, Hong Kong, London, etc.</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ Professional management + insurance</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ Monthly fees + inconvenient access</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#EDE7F6;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#4527A0;">📋 Confirm insurance coverage scope</span>
                  <span style="background:#EDE7F6;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#4527A0;">💸 Watch for withdrawal fees and timelines</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    """

# ── slides.20.content  (common storage mistakes) ─────────────────────────────
slide20_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          Many enthusiasts <strong>unknowingly damage their wines every single day</strong>. The following six traps are extremely common in home storage — check against them and take corrective action immediately!
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🍳</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">Storing on Top of Kitchen Cabinets</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                High temperature (hot air rises), frequent vibration (range hood), strong odors
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ Move to a cool, dark location immediately</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#0D47A1,#1565C0);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🧊</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">Long-Term Refrigerator Storage</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                Temperature too low, excessive vibration, insufficient humidity, and food odors
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ Only use for short-term chilling before drinking (1–2 days)</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🌞</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">Balcony / Windowsill</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                Large temperature swings, direct sunlight, UV rays continuously degrade compounds in wine
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ Move to a dark indoor location</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🍾</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">Stored Upright for Years</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                Dried-out corks allow air infiltration; wine oxidizes rapidly and cannot be recovered
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ Must be stored horizontally; tilt if space is limited</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#5E35B1);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🔍</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">Frequent Moving and Checking</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                Repeated vibration disturbs the aging process and accelerates tannin polymerization and oxidation
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ Keep an inventory list noting positions to minimize movement</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">📦</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">Stored Among Household Items</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                Paint, mothballs, cleaning agents, and other odors can permeate through the cork into the wine
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ Designate a dedicated space for all wine storage</div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#FFEBEE,#fff);border:1px solid #FFCDD2;border-radius:9px;padding:8px 13px;margin-top:11px;font-size:0.73rem;color:#555;line-height:1.7;">
          ⚡ <strong>Urgent Self-Check: </strong>Are any of your wines currently suffering from the above? Every day you delay, you are eroding their aging potential.
        </div>

      </div>
    """

patch_file('l3-12.json', {
    'slides.18.content': slide18_content,
    'slides.19.content': slide19_content,
    'slides.20.content': slide20_content,
})

print('Done.')
