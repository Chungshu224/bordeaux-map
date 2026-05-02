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

# ── slides.13.content  (chemical changes during aging) ───────────────────────
slide13_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          As wine ages in bottle, tiny amounts of oxygen slowly permeate through the cork, triggering a series of <strong>irreversible chemical reactions</strong> that transform color, aroma, and texture. Understanding these reactions allows precise prediction of aging potential and the optimal drinking window.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#880E4F,#C2185B);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🔗</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">Tannin Polymerization</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Tannin Polymerisation</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">5–15 years</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                Tannin molecules bond together to form long-chain polymers; as molecular weight increases, they precipitate as <strong>sediment</strong>. The larger the molecules, the smoother the mouthfeel — the wine evolves from youthful astringency to velvety texture.
              </p>
              <div style="background:#FCE4EC;border-radius:5px;padding:4px 8px;font-size:0.7rem;color:#880E4F;">📌 Astringent → Supple → Silky</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🎨</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">Anthocyanin Evolution</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Anthocyanin Evolution</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">10–30 years</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                Anthocyanins bind with tannins, with color and fruit evolving together:
              </p>
              <div style="display:flex;gap:4px;flex-wrap:wrap;font-size:0.67rem;">
                <span style="background:#7B1FA2;color:#fff;border-radius:12px;padding:2px 7px;">Purple-red</span>
                <span style="color:#aaa;">→</span>
                <span style="background:#C62828;color:#fff;border-radius:12px;padding:2px 7px;">Ruby red</span>
                <span style="color:#aaa;">→</span>
                <span style="background:#BF360C;color:#fff;border-radius:12px;padding:2px 7px;">Brick red</span>
                <span style="color:#aaa;">→</span>
                <span style="background:#795548;color:#fff;border-radius:12px;padding:2px 7px;">Orange-brown</span>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌸</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">Esterification</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Esterification</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">Noticeable after 20 years</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                Alcohol and acids undergo esterification, producing complex fruity ester aromas: fresh fruit gradually transforms into dried fruit, jam, brandy, and other concentrated flavors.
              </p>
              <div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.7rem;color:#E65100;">📌 Fresh blackberry → Blackberry jam → Dried plum → Condiment</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🍄</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">Development of Tertiary Aromas</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Tertiary Aromas</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">15–30 years+</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                In a low-oxygen environment, "tertiary" aromas form: leather, cigar box, truffle, forest floor, soy sauce — the most captivating complex flavors of great aged wines.
              </p>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.7rem;color:#1B5E20;">📌 Truffle, leather, forest floor are hallmarks of age</div>
            </div>
          </div>

        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.8rem;margin-bottom:8px;">⏱️ The Three Stages of Aging</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(180deg,#FFEBEE,#fff);border:1px solid #FFCDD2;border-radius:8px;padding:8px 10px;">
              <div style="font-size:0.76rem;font-weight:700;color:#C62828;margin-bottom:4px;">🌱 Youth (0–5 years)</div>
              <div style="font-size:0.7rem;color:#555;line-height:1.65;">
                Fruit-forward, tight tannins, brisk acidity, evident oak
                <div style="margin-top:4px;background:#FFEBEE;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#C62828;">Top wines often closed and hard to enjoy</div>
              </div>
            </div>
            <div style="background:linear-gradient(180deg,#E8F5E9,#fff);border:1.5px solid #4CAF50;border-radius:8px;padding:8px 10px;">
              <div style="font-size:0.76rem;font-weight:700;color:#2E7D32;margin-bottom:4px;">🌟 Drinking Window (5–25 years)</div>
              <div style="font-size:0.7rem;color:#555;line-height:1.65;">
                Tannins soften, fruit balanced with aged aromas, complexity at its peak
                <div style="margin-top:4px;background:#E8F5E9;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#2E7D32;">Best drinking window ✨</div>
              </div>
            </div>
            <div style="background:linear-gradient(180deg,#F3E5F5,#fff);border:1px solid #CE93D8;border-radius:8px;padding:8px 10px;">
              <div style="font-size:0.76rem;font-weight:700;color:#6A1B9A;margin-bottom:4px;">🍂 Decline (25+ years)</div>
              <div style="font-size:0.7rem;color:#555;line-height:1.65;">
                Fruit fades, tertiary aromas dominate, lighter body, color browning
                <div style="margin-top:4px;background:#F3E5F5;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#6A1B9A;">Assess carefully whether past peak</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """

# ── slides.14.content  (aging potential by classification) ───────────────────
slide14_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          A Bordeaux wine's aging potential is closely tied to its <strong>region, classification, and vintage</strong>. <strong>Not all Bordeaux is suitable for long-term cellaring</strong> — from the "buy and drink" regional AOC to the "wait 50 years" First Growth, the gap can exceed tenfold.
        </p>

        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#FFD700;font-weight:900;font-size:0.82rem;">👑 First Growths</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">First Growth</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">Peak: 20–50 years</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ <strong>Minimum 10–15 years</strong> before opening; great vintages need 20 years</div>
                  <div>🍷 Latour 2010 (2035–2070), Margaux 2009 (2030–2065)</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#C62828;">Best vintages: 2009 · 2010 · 2016</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">🥈 Classified Growths</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">2ème–5ème Cru</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">Peak: 10–30 years</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ Entering drinking window <strong>after 5–10 years</strong>; can be enjoyed earlier</div>
                  <div>🍷 Lynch-Bages 2016 (2026–2046), Palmer 2015 (2025–2045)</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#1565C0;">Applicable for any good vintage</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#2E7D32,#43A047);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">🏅 Cru Bourgeois</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">Cru Bourgeois</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">Peak: 5–15 years</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ Drinkable <strong>after 2–5 years</strong>; flexible timing</div>
                  <div>🍷 Most Médoc wines bearing the CB designation</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#2E7D32;">Best value-for-money aging choice</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#546E7A,#607D8B);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">🍾 Village / Regional AOC</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">Bordeaux / Médoc AOC</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">Peak: 1–5 years</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ <strong>Drink upon release</strong>; not recommended for long storage</div>
                  <div>🍷 Everyday Bordeaux AOC and Médoc AOC wines</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#546E7A;">Buy to drink, not to store</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#880E4F,#AD1457);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">⛪ Right Bank St-Ém / Pomerol</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">Merlot-dominated</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">Matures 3–5 years earlier than Left Bank</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ Merlot-dominated; tannins soften faster, <strong>enters drinking window earlier</strong></div>
                  <div>🍷 Pétrus 2009 (2025–2055) vs. Latour 2009 (2030–2065)</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#880E4F;">Same vintage, Left Bank needs 5–10 more years</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:9px;padding:9px 13px;font-size:0.73rem;color:#555;line-height:1.7;">
          💡 <strong>Core Principle: </strong>Aging potential = tannin structure + acidity + extract concentration. All three in balance creates longevity. <strong>High alcohol ≠ high aging potential</strong> — wines from hot years like 2003 and 2022 often age less well than balanced vintages.
        </div>

      </div>
    """

# ── slides.15.content  (how to determine the drinking window) ────────────────
slide15_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          Determining whether a wine has entered its drinking window requires a holistic assessment across <strong>five sensory dimensions</strong>. The same wine can look completely different at various stages of development — mastering these indicators allows precise judgement of when to open a bottle.
        </p>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;overflow:hidden;margin-bottom:13px;">
          <div style="background:linear-gradient(90deg,#37474F,#546E7A);padding:7px 14px;display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;align-items:center;">
            <div style="color:rgba(255,255,255,0.7);font-size:0.68rem;font-weight:700;">Sense</div>
            <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;font-weight:700;text-align:center;">🌱 Youth (0–5 yrs)</div>
            <div style="color:#A5D6A7;font-size:0.68rem;font-weight:700;text-align:center;">🌟 Peak Window (5–25 yrs)</div>
            <div style="color:rgba(255,255,255,0.7);font-size:0.68rem;font-weight:700;text-align:center;">🍂 Decline (25+ yrs)</div>
            <div style="color:rgba(255,255,255,0.7);font-size:0.68rem;font-weight:700;text-align:center;">Tasting Tip</div>
          </div>
          <div style="font-size:0.71rem;">
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#fff;">
              <div style="font-weight:700;color:#333;">🎨 Color</div>
              <div style="color:#666;line-height:1.5;">Deep purple-red, opaque</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">Ruby, brick-red rim, clear</div>
              <div style="color:#999;line-height:1.5;">Orange-brown, highly transparent</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">Tilt glass 45° to observe the rim</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#FAFAFA;">
              <div style="font-weight:700;color:#333;">👃 Nose</div>
              <div style="color:#666;line-height:1.5;">Fresh dark fruit, oak, closed</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">Fruit + cedar, leather, tobacco, truffle</div>
              <div style="color:#999;line-height:1.5;">Forest floor, soy sauce, dried flowers, mushroom</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">Let stand 10 min and observe evolution</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#fff;">
              <div style="font-weight:700;color:#333;">🌰 Tannins</div>
              <div style="color:#666;line-height:1.5;">Tight, astringent, drying in mouth</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">Softened yet structured, silky feel</div>
              <div style="color:#999;line-height:1.5;">Fully integrated, barely perceptible</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">Note the grip after swallowing</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#FAFAFA;">
              <div style="font-weight:700;color:#333;">🍋 Acidity</div>
              <div style="color:#666;line-height:1.5;">Bright, sometimes sharp</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">Balanced, providing fresh vibrancy</div>
              <div style="color:#999;line-height:1.5;">Soft, sometimes listless</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">Watch for stimulation on the sides of the mouth</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;align-items:start;background:#fff;">
              <div style="font-weight:700;color:#333;">⏳ Finish</div>
              <div style="color:#666;line-height:1.5;">Powerful but one-dimensional</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">Long, complex, layered</div>
              <div style="color:#999;line-height:1.5;">Shortening, delicate but losing intensity</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">Time the finish (top wines &gt;60 sec)</div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.79rem;margin-bottom:8px;">💼 Sommelier Practical Tips</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#E8F5E9;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">1</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">Buy at least <strong>2 bottles</strong>: open one early (5 years) to track development, keep the other until peak (15 years) for full complexity</div>
            </div>
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#E3F2FD;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">2</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">Refer to <strong>Wine Advocate and Decanter's predicted drinking windows</strong> as a guide for when to open</div>
            </div>
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#FFF3E0;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">3</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">When in doubt, <strong>open earlier rather than later</strong> — a wine past its peak cannot be recovered; a slightly early opening can be remedied by decanting</div>
            </div>
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#FCE4EC;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">4</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">Aged wines require <strong>longer decanting</strong> (2–4 hours, or even decanting the day before to separate sediment)</div>
            </div>
          </div>
        </div>

      </div>
    """

patch_file('l3-12.json', {
    'slides.13.content': slide13_content,
    'slides.14.content': slide14_content,
    'slides.15.content': slide15_content,
})

print('Done.')
