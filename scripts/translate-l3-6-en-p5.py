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

# ── slides.18.content  (professional blending process) ───────────────────────
slide18_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 1</div>
              <div style="font-weight:700;font-size:0.78rem;">Preparation</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· Temperature 16–18°C</div>
              <div style="margin-bottom:3px;">· Standard tasting glasses</div>
              <div style="margin-bottom:3px;">· Spittoon and water</div>
              <div style="margin-bottom:6px;">· Good lighting conditions</div>
              <div style="background:#FFF3E0;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#E65100;">Environmental consistency is critical</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 2</div>
              <div style="font-weight:700;font-size:0.78rem;">Single-Variety Assessment</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· Taste each variety separately</div>
              <div style="margin-bottom:3px;">· Record individual characteristics</div>
              <div style="margin-bottom:3px;">· Evaluate acidity / tannins / body</div>
              <div style="margin-bottom:6px;">· Assess the potential of each component</div>
              <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#1565C0;">Detailed notes aid decision-making</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 3</div>
              <div style="font-weight:700;font-size:0.78rem;">Trial Blending</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· Start with 50 ml samples</div>
              <div style="margin-bottom:3px;">· Adjust ratios incrementally</div>
              <div style="margin-bottom:3px;">· Change only one variable at a time</div>
              <div style="margin-bottom:6px;">· Record results for every trial</div>
              <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#1B5E20;">Small-sample trials save cost</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 4</div>
              <div style="font-weight:700;font-size:0.78rem;">Optimisation</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· Select the best combination</div>
              <div style="margin-bottom:3px;">· Scale up trial to 200–500 ml</div>
              <div style="margin-bottom:3px;">· Invite peer professional tasters</div>
              <div style="margin-bottom:6px;">· Consider long-term aging potential</div>
              <div style="background:#EDE7F6;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#4527A0;">Panel tasting reduces personal bias</div>
            </div>
          </div>
        </div>
      </div>
    """

# ── slides.19.content  (virtual blending laboratory) ─────────────────────────
slide19_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <!-- Task banner -->
        <div style="background:linear-gradient(135deg,#1A237E,#283593);border-radius:10px;padding:9px 14px;color:#fff;margin-bottom:10px;display:flex;align-items:center;gap:12px;">
          <div style="font-size:1.6rem;">🧪</div>
          <div>
            <div style="font-weight:700;font-size:0.82rem;margin-bottom:2px;">Winemaker Challenge — 2020 Vintage Pauillac Red Blend</div>
            <div style="font-size:0.72rem;opacity:0.88;">Using the three grape varieties below, create a classic Bordeaux blend that reflects Pauillac's terroir character and is capable of aging 10–15 years</div>
          </div>
        </div>

        <!-- Three available variety cards -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">

          <!-- CS -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:7px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🍇 Cabernet Sauvignon</div>
              <div style="font-size:0.67rem;opacity:0.88;margin-top:1px;">Suggested amount: 50–80%</div>
            </div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 6px;">
                <span style="color:#B71C1C;font-weight:600;">Colour</span><span>Deep purple-red</span>
                <span style="color:#B71C1C;font-weight:600;">Aroma</span><span>Blackcurrant · Cedar · Graphite</span>
                <span style="color:#B71C1C;font-weight:600;">Palate</span><span>Full body · High tannins · Powerful structure</span>
                <span style="color:#B71C1C;font-weight:600;">Finish</span><span>Long · Pronounced minerality</span>
              </div>
              <div style="background:#FFEBEE;border-radius:5px;padding:3px 7px;font-size:0.67rem;color:#B71C1C;margin-top:6px;">Backbone · Aging potential · Typicity</div>
            </div>
          </div>

          <!-- Merlot -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:7px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🍇 Merlot</div>
              <div style="font-size:0.67rem;opacity:0.88;margin-top:1px;">Suggested amount: 15–40%</div>
            </div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 6px;">
                <span style="color:#1565C0;font-weight:600;">Colour</span><span>Deep ruby</span>
                <span style="color:#1565C0;font-weight:600;">Aroma</span><span>Plum · Black cherry · Vanilla</span>
                <span style="color:#1565C0;font-weight:600;">Palate</span><span>Medium body · Supple tannins · Fruit-forward</span>
                <span style="color:#1565C0;font-weight:600;">Finish</span><span>Medium length · Round</span>
              </div>
              <div style="background:#E3F2FD;border-radius:5px;padding:3px 7px;font-size:0.67rem;color:#1565C0;margin-top:6px;">Roundness · Fruit · Early accessibility</div>
            </div>
          </div>

          <!-- CF -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);">
            <div style="background:linear-gradient(135deg,#4527A0,#6A1B9A);padding:7px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🍇 Cabernet Franc</div>
              <div style="font-size:0.67rem;opacity:0.88;margin-top:1px;">Suggested amount: 5–25%</div>
            </div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 6px;">
                <span style="color:#4527A0;font-weight:600;">Colour</span><span>Medium-deep red</span>
                <span style="color:#4527A0;font-weight:600;">Aroma</span><span>Violet · Mint · Spice</span>
                <span style="color:#4527A0;font-weight:600;">Palate</span><span>Medium body · Elegant tannins · Fresh acidity</span>
                <span style="color:#4527A0;font-weight:600;">Finish</span><span>Medium length · Floral</span>
              </div>
              <div style="background:#EDE7F6;border-radius:5px;padding:3px 7px;font-size:0.67rem;color:#4527A0;margin-top:6px;">Elegance · Aromatic complexity · Freshness</div>
            </div>
          </div>

        </div>

        <!-- Target style + reference ratio -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:7px 11px;color:#fff;font-weight:700;font-size:0.78rem;">🎯 Target Style — Classic Pauillac</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.75;">
              <div style="display:flex;flex-direction:column;gap:3px;">
                <div>✅ Powerful structure without harshness</div>
                <div>✅ Rich fruit with layered complexity</div>
                <div>✅ Suitable for 10–15 years of aging</div>
                <div>✅ Reflects the typicity of Pauillac AOC</div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:7px 11px;color:#fff;font-weight:700;font-size:0.78rem;">💡 Reference Blend (adjust by vintage)</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;">
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="color:#B71C1C;font-weight:600;min-width:60px;">CS</span>
                  <div style="flex:1;background:#FFEBEE;border-radius:3px;height:10px;overflow:hidden;">
                    <div style="width:70%;height:100%;background:#B71C1C;border-radius:3px;"></div>
                  </div>
                  <span style="color:#B71C1C;font-weight:700;min-width:30px;text-align:right;">70%</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="color:#1565C0;font-weight:600;min-width:60px;">Merlot</span>
                  <div style="flex:1;background:#E3F2FD;border-radius:3px;height:10px;overflow:hidden;">
                    <div style="width:22%;height:100%;background:#1565C0;border-radius:3px;"></div>
                  </div>
                  <span style="color:#1565C0;font-weight:700;min-width:30px;text-align:right;">22%</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="color:#4527A0;font-weight:600;min-width:60px;">CF</span>
                  <div style="flex:1;background:#EDE7F6;border-radius:3px;height:10px;overflow:hidden;">
                    <div style="width:8%;height:100%;background:#4527A0;border-radius:3px;"></div>
                  </div>
                  <span style="color:#4527A0;font-weight:700;min-width:30px;text-align:right;">8%</span>
                </div>
              </div>
              <div style="margin-top:6px;font-size:0.67rem;color:#777;">Warm years (e.g. 2020): consider CF ↑10%, CS ↓5%</div>
            </div>
          </div>

        </div>
      </div>
    """

# ── slides.22.content  (how vintage affects blending) ────────────────────────
slide22_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">☀️ Warm Vintage Strategy</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">In warm years, grapes are highly ripe with abundant sugar, but may lack acidity. Winemakers typically increase the Cabernet Franc proportion to lift freshness, or select fruit from cooler plots to balance the overall style.<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">2003 · 2005 · 2009 · 2010: Classic warm-year challenges</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌧️ Cool Vintage Wisdom</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">In cool years, grapes have high acidity but may lack full ripeness. Winemakers raise the Merlot proportion to add fruit and roundness, while selecting fruit from the warmest plots as the blend's foundation.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">2007 · 2008 · 2013 · 2014: Years that tested blending skill</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">⚖️ Ideal Vintage Balance</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">In climatically ideal vintages, all varieties can reach perfect ripeness. The winemaker's task here is restraint — not to over-intervene, but to let each variety express its finest character and create a harmonious whole.<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">2000 · 2016 · 2019 · 2020: Near-perfect balanced vintages</div></div>
          </div>
        </div>
      </div>
    """

# ── slides.23.content  (2010 vs 2013 case study) ─────────────────────────────
slide23_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:8px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.85rem;">☀️ 2010 — Hot &amp; Dry · Near-Perfect Year</div>
            </div>
            <div style="padding:9px 12px;font-size:0.72rem;color:#333;line-height:1.7;">
              <b>Challenge:</b> Over-ripeness · Low acidity · High alcohol · Powerful tannins<br>
              <b>Strategy:</b> ↑ CF (+5–10%) for freshness · Select cooler plots · Shorter maceration<br>
              <div style="background:#FFF3E0;border-radius:6px;padding:5px 8px;margin-top:6px;font-size:0.7rem;">
                <b>Pichon Baron Case:</b><br>
                Standard: CS 70% + Merlot 25% + CF 5%<br>
                2010: CS 65% + Merlot 23% + <span style="color:#E65100;font-weight:700;">CF 12%</span><br>
                <span style="color:#2E7D32;">→ CF doubled ↑, scored RP 98</span>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.85rem;">🌧️ 2013 — Cool &amp; Rainy · Challenging Year</div>
            </div>
            <div style="padding:9px 12px;font-size:0.72rem;color:#333;line-height:1.7;">
              <b>Challenge:</b> Under-ripeness · Excessive acidity · Thin fruit · Green tannins<br>
              <b>Strategy:</b> ↑ Merlot (+10–15%) for roundness · Strict fruit selection · Extended maceration<br>
              <div style="background:#E3F2FD;border-radius:6px;padding:5px 8px;margin-top:6px;font-size:0.7rem;">
                <b>Lynch-Bages Case:</b><br>
                Standard: CS 73% + Merlot 15% + CF 10% + PV 2%<br>
                2013: CS 60% + <span style="color:#1565C0;font-weight:700;">Merlot 30%</span> + CF 8% + PV 2%<br>
                <span style="color:#2E7D32;">→ Merlot doubled ↑, scored RP 90</span>
              </div>
            </div>
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:0.72rem;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
          <thead>
            <tr style="background:#37474F;color:#fff;">
              <th style="padding:6px 10px;text-align:left;width:26%;">Comparison</th>
              <th style="padding:6px 10px;text-align:center;color:#FFB300;">☀️ 2010</th>
              <th style="padding:6px 10px;text-align:center;color:#90CAF9;">🌧️ 2013</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#FFF8E1;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Climate</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">Hot &amp; dry · Perfect ripeness</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">Cool &amp; wet · Delayed ripeness</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Main challenge</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">Over-ripeness · Low acidity</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">Under-ripeness · High acidity</td>
            </tr>
            <tr style="background:#FFF8E1;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Blending strategy</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">↑ CF (+5–10%) freshness</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">↑ Merlot (+10–15%) roundness</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Resulting style</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">Rich &amp; powerful · Ultra-long aging</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">Elegant &amp; balanced · Earlier drinking</td>
            </tr>
          </tbody>
        </table>
      </div>
    """

patch_file('l3-6.json', {
    'slides.18.content': slide18_content,
    'slides.19.content': slide19_content,
    'slides.22.content': slide22_content,
    'slides.23.content': slide23_content,
})

print('Done.')
