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

# ── slides.8.content  (21st-century golden decade 2000–2010) ─────────────────
slide8_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          The 2000s were a watershed in Bordeaux's modern history, giving birth to <strong>2009</strong> and <strong>2010</strong> — jointly dubbed the "Gemini Legends" — as well as 2005, whose potential is waiting to be rediscovered.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">

          <!-- 2000 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#5D4037,#8D6E63);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2000</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">Solid Vintage at the Millennium</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 91 Left / 90 Right · Dry, mild September</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>Excellent Cabernet ripeness, ripe tannins, firm structure</li>
                <li>Merlot somewhat austere; Right Bank weaker than Left</li>
                <li>Drinking window has arrived — no need to wait</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Léoville Las Cases, Lynch-Bages</span>
                <span style="background:#E8F5E9;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#2E7D32;">💰 Affordable, great for current drinking</span>
              </div>
            </div>
          </div>

          <!-- 2005 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2005</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">An Underrated Great Vintage</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 95 Left / 94 Right · Hot dry summer, ideal September</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>Cabernet perfectly ripe, powerful yet silky tannins, monumental structure</li>
                <li>Rich Right Bank Merlot, stunning Cabernet Franc</li>
                <li>Will peak after 2030; exceptional aging potential</li>
                <li>Overshadowed by 2009/2010 → relatively accessible prices</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Latour (100pts), Cheval Blanc, Haut-Brion</span>
                <span style="background:#E3F2FD;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#1565C0;">💡 Top long-term investment, undervalued</span>
              </div>
            </div>
          </div>

          <!-- 2009 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);border:1.5px solid #FFD700;">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2009</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">A Milestone in Modern Bordeaux 🏆</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;">Parker 98 Left / 99 Right · Record-breaking heat in July</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>Full-bodied, intensely fruity (alcohol 14–14.5%)</li>
                <li>Silky tannins, monumental yet approachable structure</li>
                <li>Pomerol reaches legendary status; delicious when young</li>
                <li>30–50 years aging potential; pinnacle of the modern style</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Pétrus, Ausone, Margaux, Palmer</span>
                <span style="background:#FFF8E1;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#F57F17;">⚠️ Some critics: too concentrated, lacks freshness</span>
              </div>
            </div>
          </div>

          <!-- 2010 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);border:1.5px solid #90CAF9;">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2010</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">The Return of Classicism 🏆</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;">Parker 97 Left / 95 Right · Cool September preserving acidity</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>More structure, brisk acidity, high flavor complexity</li>
                <li>Left Bank outperforms Right Bank (Cabernet's acidity advantage)</li>
                <li>Aging potential may surpass 2009; still needs time</li>
                <li>Many sommeliers regard 2010 as the "greater" vintage</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Latour, Léoville Las Cases, Montrose</span>
                <span style="background:#E8F5E9;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#2E7D32;">💰 Long-term value may exceed 2009</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    """

# ── slides.9.content  (outstanding vintages of the 2010s) ────────────────────
slide9_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          The 2010s saw 2016 emerge as a new milestone vintage, while 2015 and 2019 also delivered impressive results. 2018 is often overlooked, sandwiched between two giants — making it the insider's secret weapon.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">

          <!-- 2015 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#AD1457,#E91E63);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2015</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">Warm Classic Vintage</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 94 Left / 93 Right · Dry summer, September rain</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>Pure, rich fruit; ripe, supple tannins</li>
                <li>Entering drinking window from 2025; opens earlier than 09/10</li>
                <li>Style bridges the power of 2009 and elegance of 2010</li>
                <li>Higher yields, relatively accessible prices</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FCE4EC;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#AD1457;">🍷 Margaux, Palmer, Rauzan-Ségla</span>
              </div>
            </div>
          </div>

          <!-- 2016 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);border:1.5px solid #FFD700;">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2016</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">A New Milestone 🏆</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;">Parker 96 Left / 95 Right · Critical September rain</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>Left Bank Cabernet reached ideal ripeness; fine-grained tannins</li>
                <li>Brisk acidity, exceptional aging potential</li>
                <li>Currently closed; true character emerges 2028–2035</li>
                <li>Sweet whites also outstanding</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#EDE7F6;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#4527A0;">🍷 Pauillac First Growths, Léoville Barton</span>
                <span style="background:#E8F5E9;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#2E7D32;">💰 High long-term holding value</span>
              </div>
            </div>
          </div>

          <!-- 2018 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2018</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">An Underrated Gem 💎</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 95 Left / 93 Right · Warm and dry but not extreme</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>Overlooked by the market, squeezed between 2016 and 2019</li>
                <li>Left Bank quality is actually excellent</li>
                <li>Elegant, balanced style; medium-term cellaring 10–25 years</li>
                <li>Price does not reflect quality → exceptional value for money</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#E0F2F1;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#00695C;">💡 The insider's secret weapon</span>
              </div>
            </div>
          </div>

          <!-- 2019 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2019</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">A Modern Classic Vintage</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 96 Left / 94 Right · Hot dry, perfect September</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>Rich fruit, ripe tannins, full-bodied</li>
                <li>Style close to 2009, but with brighter acidity</li>
                <li>Showing charm already when young, yet has long-term aging potential</li>
                <li>Left Bank outperforms Right Bank; St-Estèphe especially strong</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FBE9E7;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#BF360C;">🍷 St-Estèphe and Pauillac strong performers</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    """

# ── slides.10.content  (2020s new chapter) ───────────────────────────────────
slide10_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 14px;line-height:1.65;">
          The 2020s opened with the dual challenges of the pandemic and extreme climate. 2020 delivered quietly impressive quality, while 2022 wrote a controversial chapter with record-breaking heat.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">

          <!-- 2020 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1565C0,#0288D1);padding:9px 13px;display:flex;align-items:center;gap:9px;">
              <div style="background:rgba(255,255,255,0.22);border-radius:6px;padding:3px 10px;font-weight:900;font-size:1rem;color:#fff;">2020</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">A Pandemic-Year Surprise</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Parker 94 Left / 95 Right · Dry, balanced harvest</div>
              </div>
            </div>
            <div style="padding:10px 13px 12px;">
              <ul style="margin:0 0 9px;padding-left:14px;font-size:0.74rem;color:#444;line-height:1.75;">
                <li><strong>Right Bank outperforms Left Bank</strong> (a rare reversal)</li>
                <li>Merlot and Cabernet Franc in perfect balance</li>
                <li>Elegant, refined style; ideal for medium-term cellaring (10–20 years)</li>
                <li>Pandemic depressed en primeur prices → excellent value</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#E3F2FD;border-radius:6px;padding:3px 9px;font-size:0.68rem;color:#1565C0;">🏆 Pomerol &amp; Saint-Émilion double stars</span>
                <span style="background:#E8F5E9;border-radius:6px;padding:3px 9px;font-size:0.68rem;color:#2E7D32;">💰 Good for drinking and short-term investment</span>
              </div>
            </div>
          </div>

          <!-- 2022 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6F00);padding:9px 13px;display:flex;align-items:center;gap:9px;">
              <div style="background:rgba(255,255,255,0.22);border-radius:6px;padding:3px 10px;font-weight:900;font-size:1rem;color:#fff;">2022</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">The Test of Extreme Climate ⚠️</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Parker 90–93 (est.) · 40°C+ in July, 3 weeks early harvest</div>
              </div>
            </div>
            <div style="padding:10px 13px 12px;">
              <ul style="margin:0 0 9px;padding-left:14px;font-size:0.74rem;color:#444;line-height:1.75;">
                <li>High alcohol (mostly &gt;14.5%), extremely concentrated fruit</li>
                <li>Old vines and top terroirs showed resilience</li>
                <li>Controversial: some praise the concentration, others criticize overripeness</li>
                <li>A microcosm of climate change's challenge to Bordeaux</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:6px;padding:3px 9px;font-size:0.68rem;color:#E65100;">🔬 Long-term aging potential remains to be seen</span>
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:10px;padding:10px 14px;">
          <div style="font-weight:700;color:#E65100;font-size:0.79rem;margin-bottom:6px;">📊 Recent Vintage Quick Reference</div>
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:0.7rem;">
              <thead>
                <tr style="background:#F57F17;">
                  <th style="color:#fff;padding:5px 8px;text-align:left;border-radius:4px 0 0 0;">Vintage</th>
                  <th style="color:#fff;padding:5px 8px;text-align:center;">Parker L/R</th>
                  <th style="color:#fff;padding:5px 8px;text-align:center;">Style</th>
                  <th style="color:#fff;padding:5px 8px;text-align:left;border-radius:0 4px 0 0;">Highlights</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background:#fff;"><td style="padding:4px 8px;font-weight:700;">2005</td><td style="padding:4px 8px;text-align:center;">95 / 94</td><td style="padding:4px 8px;text-align:center;">Grand &amp; durable</td><td style="padding:4px 8px;">An underrated masterpiece; peaks 2030+</td></tr>
                <tr style="background:#FFFDE7;"><td style="padding:4px 8px;font-weight:700;color:#E65100;">2009 🏆</td><td style="padding:4px 8px;text-align:center;">98 / 99</td><td style="padding:4px 8px;text-align:center;">Rich &amp; opulent</td><td style="padding:4px 8px;">Pinnacle of the modern style</td></tr>
                <tr style="background:#fff;"><td style="padding:4px 8px;font-weight:700;color:#1B5E20;">2010 🏆</td><td style="padding:4px 8px;text-align:center;">97 / 95</td><td style="padding:4px 8px;text-align:center;">Elegant &amp; balanced</td><td style="padding:4px 8px;">Sommeliers' favorite</td></tr>
                <tr style="background:#FFFDE7;"><td style="padding:4px 8px;font-weight:700;color:#4527A0;">2016 🏆</td><td style="padding:4px 8px;text-align:center;">96 / 95</td><td style="padding:4px 8px;text-align:center;">Refined &amp; ageable</td><td style="padding:4px 8px;">Blossoms after 2028–2035</td></tr>
                <tr style="background:#fff;"><td style="padding:4px 8px;font-weight:700;">2018 💎</td><td style="padding:4px 8px;text-align:center;">95 / 93</td><td style="padding:4px 8px;text-align:center;">Elegant &amp; balanced</td><td style="padding:4px 8px;">Best value, often overlooked</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    """

patch_file('l3-12.json', {
    'slides.8.content':  slide8_content,
    'slides.9.content':  slide9_content,
    'slides.10.content': slide10_content,
})

print('Done.')
