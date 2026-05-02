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

patches = {
  "slides.0.title": "Course Introduction",
  "slides.0.content": r"""
      <div class="intro-content">
        <p class="intro-lead">
          Food and wine pairing is one of the most fascinating arts in wine culture. When Bordeaux tannins meet the richness of a steak, when a botrytised sweet wine accompanies the luxuriousness of foie gras, when the complex aromas of an aged vintage intertwine with the robust flavours of game — a perfect pairing elevates both food and wine, creating a 1+1>2 experience.
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-10/01%20波爾多餐酒搭配指南.svg" alt="Bordeaux wine food pairing guide: best food combinations for left bank reds, right bank reds, whites and sweet wines" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <p class="intro-context">
          This course will take you deep into the science of food pairing — how tannins soften proteins, how acidity balances fat, how sweetness counters spice. From traditional pairings of Bordeaux red wine with classic French cuisine, to innovative experiments pairing with Chinese, Japanese and Thai food, we will systematically learn the logic and techniques of pairing and master the principles of designing a professional multi-course wine menu.
        </p>

        <h3 class="section-title">Learning Objectives</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 Master the Science of Pairing</h4>
            <p>Understand how tannins, acidity, sweetness, body and aromas interact chemically and sensorially with food</p>
          </div>

          <div class="point-item">
            <h4>🥩 Learn Classic Pairing Logic</h4>
            <p>Master the principles and practical techniques of pairing Bordeaux red wines with beef, lamb and game</p>
          </div>

          <div class="point-item">
            <h4>🦞 Understand White Wine & Sweet Wine Pairings</h4>
            <p>Learn the perfect combinations of Bordeaux whites with seafood, and sweet wines with foie gras and cheese</p>
          </div>

          <div class="point-item">
            <h4>🍜 Explore Innovative Asian Food Pairings</h4>
            <p>Break from tradition and discover harmonious pairing possibilities between Bordeaux wines and Chinese, Japanese and Thai cuisine</p>
          </div>

          <div class="point-item">
            <h4>📋 Master Wine Menu Design</h4>
            <p>Learn the principles of designing multi-course wine menus, including sequencing and wine selection techniques</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Upon completing this course, you will be able to confidently design perfect food and wine pairings for any occasion, showcasing the full charm of Bordeaux wines.
        </p>

        <div class="course-info">
          <p><strong>Estimated study time:</strong> 35 minutes</p>
          <p><strong>Difficulty level:</strong> Advanced Professional</p>
        </div>
      </div>
    """,
  "slides.1.title": "The Science of Food Pairing",
  "slides.1.subtitle": "Understanding Taste and Chemical Interactions",
  "slides.2.title": "Why Does Pairing Matter?",
  "slides.2.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍽️ Two Core Strategies</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:2px solid #3b82f6;border-radius:12px;padding:14px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🤝</div>
              <div style="font-size:13px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:8px;">Complement</div>
              <div style="font-size:11px;color:#1d4ed8;line-height:1.7;">
                <div>• Similar flavours reinforce each other</div>
                <div>• E.g.: Foie gras + Sauternes</div>
                <div>• E.g.: Oysters + Sauvignon Blanc</div>
                <div style="margin-top:6px;background:#dbeafe;border-radius:6px;padding:5px;font-size:10px;color:#1e40af;font-weight:600;">🔑 Same style food and wine — flavours multiply</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:2px solid #a855f7;border-radius:12px;padding:14px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">⚖️</div>
              <div style="font-size:13px;font-weight:700;color:#581c87;text-align:center;margin-bottom:8px;">Contrast</div>
              <div style="font-size:11px;color:#7e22ce;line-height:1.7;">
                <div>• Opposing qualities balance each other</div>
                <div>• E.g.: Fatty food + high-acidity wine</div>
                <div>• E.g.: Spicy dish + off-dry white wine</div>
                <div style="margin-top:6px;background:#fae8ff;border-radius:6px;padding:5px;font-size:10px;color:#6b21a8;font-weight:600;">🔑 Opposite qualities in food and wine — mutual balance</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🧬 The Multisensory Science Behind Pairing</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">👅</div>
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:5px;">Taste</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.6;">Sweet · Sour · Bitter · Salty · Umami<br>Five basic taste interactions</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">👃</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:5px;">Smell</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">Resonance of aroma molecules<br>Fruit · Floral · Earthy · Spice</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🖐️</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:5px;">Touch</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.6;">Texture · Temperature · Mouthfeel<br>Silky · Crispy · Heavy</div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.3.title": "The Role of Tannins in Pairing",
  "slides.3.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🧪 The Chemical Reaction Between Tannins and Proteins</div>
          <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:12px;padding:14px;margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:12px;justify-content:center;margin-bottom:10px;">
              <div style="text-align:center;">
                <div style="font-size:28px;">🍷</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;margin-top:3px;">Tannin</div>
                <div style="font-size:10px;color:#9f1239;">Polyphenol compounds<br>create astringency</div>
              </div>
              <div style="font-size:24px;color:#f43f5e;font-weight:700;">+</div>
              <div style="text-align:center;">
                <div style="font-size:28px;">🥩</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;margin-top:3px;">Protein & Fat</div>
                <div style="font-size:10px;color:#9f1239;">Natural components<br>in red meat</div>
              </div>
              <div style="font-size:24px;color:#f43f5e;font-weight:700;">→</div>
              <div style="text-align:center;">
                <div style="font-size:28px;">✨</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;margin-top:3px;">Perfect Balance</div>
                <div style="font-size:10px;color:#9f1239;">Astringency softens<br>Fattiness cut through</div>
              </div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:9px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:5px;">✅ Good Pairings (High Protein)</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;">
                <div>🥩 Beef steak, lamb chop — <strong>made for each other</strong></div>
                <div>🍖 Braised beef, roast leg of lamb</div>
                <div>🧀 Aged hard cheese</div>
                <div>🦌 Game (venison, wild boar)</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:9px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:5px;">❌ Avoid Pairing (Low Protein)</div>
              <div style="font-size:10.5px;color:#9f1239;line-height:1.7;">
                <div>🐟 Fish — creates metallic, bitter taste</div>
                <div>🦑 Seafood — amplifies unpleasant flavours</div>
                <div>🥗 Light salad — both food and wine suffer</div>
                <div>🍰 Dessert — astringency becomes more prominent</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:12px;">
          <div style="font-size:12px;font-weight:700;color:#92400e;margin-bottom:6px;">💡 Case Study: Why is Pauillac with Steak Such a Classic?</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:8px;padding:8px;">
              <div style="font-size:16px;">🍷</div>
              <div style="font-size:10.5px;font-weight:700;color:#78350f;margin:3px 0;">Pauillac Red Wine</div>
              <div style="font-size:10px;color:#92400e;">Abundant tannins<br>Powerful structure<br>Cab. Sauvignon dominant</div>
            </div>
            <div style="text-align:center;display:flex;align-items:center;justify-content:center;font-size:20px;">⚡</div>
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:8px;padding:8px;">
              <div style="font-size:16px;">🥩</div>
              <div style="font-size:10.5px;font-weight:700;color:#78350f;margin:3px 0;">Beef Steak</div>
              <div style="font-size:10px;color:#92400e;">Rich in protein<br>Marbled fat<br>Savoury juices</div>
            </div>
          </div>
          <div style="margin-top:8px;font-size:10.5px;color:#78350f;text-align:center;background:rgba(255,255,255,0.5);border-radius:6px;padding:6px;">
            Protein tames tannins → astringency disappears | Tannins cut fat → fresh clean finish | Result: 1+1 &gt; 2 flavour experience
          </div>
        </div>

      </div>
    """,
  "slides.4.title": "The Role of Acidity in Pairing",
  "slides.4.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍋 Four Key Functions of Acidity in Pairing</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🧹</div>
              <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">Cut Fat</div>
              <div style="font-size:10px;color:#78350f;line-height:1.5;">Fried food · fatty meat · cream sauce<br>High acidity refreshes the palate</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🦪</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:5px;">Enhance Umami</div>
              <div style="font-size:10px;color:#166534;line-height:1.5;">Seafood · oysters · white fish<br>Acidity amplifies umami</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">⚖️</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:5px;">Balance Sweetness</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">Sweet dishes need higher acidity<br>otherwise the wine tastes flat</div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">✨</div>
              <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:5px;">Amplify Flavour</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.5;">Adds layers to food<br>makes each bite more lively</div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:2px solid #16a34a;border-radius:12px;padding:14px;">
          <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:10px;">🍾 The Acidity Advantage of Bordeaux Whites — Pessac-Léognan</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div>
              <div style="font-size:11px;font-weight:700;color:#166534;margin-bottom:5px;">🍇 White Wine Character</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;">
                <div>• Sauvignon Blanc dominant</div>
                <div>• Bright, crisp acidity</div>
                <div>• Citrus · herbal · mineral aromas</div>
                <div>• Medium body, refreshing</div>
              </div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#166534;margin-bottom:5px;">🍽️ Best Pairings</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;">
                <div>🦪 Oysters → acidity enhances oceanic freshness</div>
                <div>🐟 White fish · sole</div>
                <div>🧀 Goat cheese (Chèvre)</div>
                <div>🥗 Light salad · lemon-based dishes</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.5.title": "The Role of Sweetness in Pairing",
  "slides.5.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:2px solid #a855f7;border-radius:12px;padding:14px;margin-bottom:14px;text-align:center;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏆 The Golden Rule of Pairing</div>
          <div style="display:flex;align-items:center;justify-content:center;gap:12px;">
            <div style="text-align:center;">
              <div style="font-size:32px;">🍾</div>
              <div style="font-size:13px;font-weight:800;color:#581c87;margin-top:4px;">Wine Sweetness</div>
            </div>
            <div style="font-size:36px;font-weight:900;color:#a855f7;">≥</div>
            <div style="text-align:center;">
              <div style="font-size:32px;">🍽️</div>
              <div style="font-size:13px;font-weight:800;color:#581c87;margin-top:4px;">Food Sweetness</div>
            </div>
          </div>
          <div style="margin-top:10px;font-size:11px;color:#7e22ce;background:rgba(255,255,255,0.5);border-radius:8px;padding:6px;">
            If the wine is less sweet than the food → the wine tastes sour, lacks fruit, and disappoints
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍯 Four Pairing Scenarios for Sauternes Sweet Wine</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🥩</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:3px;">Foie Gras</div>
                  <div style="font-size:10px;color:#78350f;line-height:1.5;">Rich fat ↔ sweetness cuts fat<br>sweetness balanced by fat → the most perfect bidirectional complement</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🧀</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:3px;">Blue Cheese (Roquefort)</div>
                  <div style="font-size:10px;color:#166534;line-height:1.5;">Intense saltiness ↔ sweetness softens salt<br>Mould complexity ↔ botrytis aromas echo</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🌶️</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:3px;">Spicy Dishes (Thai Curry)</div>
                  <div style="font-size:10px;color:#9f1239;line-height:1.5;">Heat stimulus ↔ sweetness soothes spice<br>Chilled sweet white wine → creates interesting contrast</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🍰</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:3px;">Fruit Desserts (Tart · Soufflé)</div>
                  <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">High sweetness → needs Sauternes level<br>otherwise the wine tastes sour and dessert overpowers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.6.title": "Body and Texture in Pairing",
  "slides.6.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⚖️ Matching Wine Body Weight</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
                <div style="text-align:center;">
                  <div style="font-size:22px;">🥂</div>
                  <div style="font-size:10px;font-weight:700;color:#14532d;margin-top:2px;">Light Body</div>
                </div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#166534;margin-bottom:3px;">Bordeaux AOC · Entre-Deux-Mers</div>
                  <div style="font-size:10px;color:#166534;line-height:1.5;">🥗 Salad &nbsp; 🐟 White fish &nbsp; 🦪 Oysters<br>Light dishes · vegetarian · light bites</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
                <div style="text-align:center;">
                  <div style="font-size:22px;">🍷</div>
                  <div style="font-size:10px;font-weight:700;color:#7c2d12;margin-top:2px;">Medium Body</div>
                </div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#9a3412;margin-bottom:3px;">Haut-Médoc · Saint-Émilion Village</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.5;">🍗 Roast chicken &nbsp; 🥩 Pork &nbsp; 🍄 Wild mushroom<br>Medium dishes · duck · veal</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
                <div style="text-align:center;">
                  <div style="font-size:22px;">🍾</div>
                  <div style="font-size:10px;font-weight:700;color:#be123c;margin-top:2px;">Full Body</div>
                </div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:3px;">Pauillac 1st Growth · Pétrus</div>
                  <div style="font-size:10px;color:#9f1239;line-height:1.5;">🥩 Steak &nbsp; 🦌 Game &nbsp; 🐂 Bone marrow<br>Rich dishes · aged hard cheese</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🎨 Harmonious Texture Pairings</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:9px;padding:10px;">
                <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:4px;">🥩 Silky · Delicate Texture</div>
                <div style="font-size:10.5px;color:#7e22ce;line-height:1.5;">Foie Gras → <strong>Sauternes</strong> luscious sweet white<br>Wagyu A5 → <strong>Pomerol / Margaux</strong> velvety tannins<br>Filet mignon → <strong>Margaux</strong> elegant, silky</div>
              </div>
              <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:9px;padding:10px;">
                <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:4px;">🍳 Crispy · Light Texture</div>
                <div style="font-size:10.5px;color:#78350f;line-height:1.5;">Fried food (tempura · fries) → <strong>sparkling wine</strong> refreshing bubbles<br>Crispy roast chicken → <strong>medium-body red</strong><br>Pan-seared sea bass → <strong>Graves white</strong> acidity cuts fat</div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:10px;">
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:4px;">🌊 Smooth · Rich Texture</div>
                <div style="font-size:10.5px;color:#1d4ed8;line-height:1.5;">Butter lobster → <strong>Haut-Brion Blanc</strong> full-bodied white<br>Braised beef cheek → <strong>aged St-Émilion</strong><br>Creamy pasta → <strong>oak-aged white wine</strong></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    """,
  "slides.7.title": "Knowledge Check: The Science of Pairing",
  "slides.8.title": "Classic Pairings for Bordeaux Red Wines",
  "slides.8.subtitle": "The Perfect Union of Red Wine and Red Meat",
  "slides.9.title": "The Perfect Steak Pairing",
  "slides.9.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🥩 Four Steak Cuts × Best Wine Matches</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:2px solid #f43f5e;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:4px;">Sirloin Steak</div>
              <div style="font-size:10px;color:#9f1239;margin-bottom:6px;">Strip Steak</div>
              <div style="font-size:10px;color:#be123c;line-height:1.6;margin-bottom:6px;">Firm texture · moderate marbling · chargrilled aroma</div>
              <div style="background:#be123c;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Pichon Baron<br><span style="font-weight:400;font-size:9px;">Pauillac</span></div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:2px solid #a855f7;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:4px;">Filet Mignon</div>
              <div style="font-size:10px;color:#7e22ce;margin-bottom:6px;">Filet Mignon</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.6;margin-bottom:6px;">Supremely tender · low fat · soft texture</div>
              <div style="background:#7e22ce;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Château Margaux<br><span style="font-weight:400;font-size:9px;">Silky tannins · floral</span></div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:2px solid #f97316;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">Ribeye Steak</div>
              <div style="font-size:10px;color:#9a3412;margin-bottom:6px;">Ribeye</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.6;margin-bottom:6px;">Rich marbling · intense flavour · luscious mouthfeel</div>
              <div style="background:#c2410c;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Château Latour<br><span style="font-weight:400;font-size:9px;">Dense tannins · complex layers</span></div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:2px solid #22c55e;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">T-Bone Steak</div>
              <div style="font-size:10px;color:#166534;margin-bottom:6px;">T-Bone</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;margin-bottom:6px;">Combines filet + sirloin · power and elegance</div>
              <div style="background:#15803d;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Lynch-Bages<br><span style="font-weight:400;font-size:9px;">Fruit and structure balanced</span></div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:12px;padding:12px;">
          <div style="font-size:12px;font-weight:700;color:#92400e;margin-bottom:8px;">🔥 How Cooking Method Influences Wine Choice</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
            <div style="font-size:10.5px;color:#78350f;line-height:1.7;">
              <div>🪵 <strong>Chargrilled</strong> → heavily toasted oak-aged wines (smoky echo)</div>
              <div>🍷 <strong>Red wine sauce</strong> → same or similar style wine</div>
            </div>
            <div style="font-size:10.5px;color:#78350f;line-height:1.7;">
              <div>🌶️ <strong>Pepper sauce</strong> → fruit-forward, balanced spice</div>
              <div>🩸 <strong>Rare</strong> — young wine ｜ <strong>Well done</strong> — aged wine</div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.10.title": "The Art of Pairing with Lamb",
  "slides.10.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:12px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🐑 Three Classic Lamb and Wine Pairings</div>
          <div style="display:flex;flex-direction:column;gap:8px;">

            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:12px;padding:12px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
              <div style="text-align:center;min-width:60px;">
                <div style="font-size:26px;">🍖</div>
                <div style="font-size:9.5px;font-weight:700;color:#7e22ce;margin-top:3px;">Pan-seared Lamb Chop</div>
                <div style="font-size:9px;color:#a855f7;">with rosemary</div>
              </div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#581c87;margin-bottom:4px;">🍷 Château Pétrus (Pomerol)</div>
                <div style="font-size:10.5px;color:#7e22ce;line-height:1.6;">Merlot's plush fruit <strong>envelops</strong> the gaminess of lamb; the rosemary's herbal note resonates with Pomerol's minerality. Velvety texture dances in harmony with the delicacy of the lamb chop.</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:12px;padding:12px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
              <div style="text-align:center;min-width:60px;">
                <div style="font-size:26px;">🍗</div>
                <div style="font-size:9.5px;font-weight:700;color:#7c2d12;margin-top:3px;">Roast Leg of Lamb</div>
                <div style="font-size:9px;color:#c2410c;">with garlic</div>
              </div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🍷 Château Cheval Blanc (St-Émilion)</div>
                <div style="font-size:10.5px;color:#9a3412;line-height:1.6;">The distinctive Cabernet Franc proportion (40%) brings herbal and violet notes that resonate beautifully with garlic and lamb.</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
              <div style="text-align:center;min-width:60px;">
                <div style="font-size:26px;">🥘</div>
                <div style="font-size:9.5px;font-weight:700;color:#14532d;margin-top:3px;">Braised Lamb</div>
                <div style="font-size:9px;color:#166534;">with red wine sauce</div>
              </div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:4px;">🍷 Château Canon (St-Émilion)</div>
                <div style="font-size:10.5px;color:#166534;line-height:1.6;">Slow-braised lamb is tender and rich; Canon's limestone terroir minerality and ageing potential pair perfectly.</div>
              </div>
            </div>

          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">🗺️ Deep Cultural and Regional Roots</div>
          <div style="font-size:10.5px;color:#78350f;line-height:1.7;">The southwest of France (including Bordeaux) has traditionally been lamb country (e.g., <strong>Pauillac lamb</strong>); the pairing of Bordeaux red wine with lamb stems from centuries of food culture. Right Bank Merlot-dominant wines are an ideal choice for transforming the gaminess of lamb.</div>
        </div>

      </div>
    """,
  "slides.11.title": "Game and Aged Wines",
  "slides.11.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:12px;margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#e0e7ff;margin-bottom:8px;">⏳ Why Does Game Need Aged Bordeaux?</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
            <div style="background:rgba(255,255,255,0.1);border-radius:9px;padding:9px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🫠</div>
              <div style="font-size:10.5px;font-weight:700;color:#c7d2fe;margin-bottom:3px;">Softened Tannins</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;">After 10–20 years<br>astringency disappears<br>like velvet</div>
            </div>
            <div style="background:rgba(255,255,255,0.1);border-radius:9px;padding:9px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🌲</div>
              <div style="font-size:10.5px;font-weight:700;color:#c7d2fe;margin-bottom:3px;">Tertiary Aromas</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;">Leather · cigar box<br>Truffle · forest floor<br>Earthy notes</div>
            </div>
            <div style="background:rgba(255,255,255,0.1);border-radius:9px;padding:9px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🍄</div>
              <div style="font-size:10.5px;font-weight:700;color:#c7d2fe;margin-bottom:3px;">Terroir Echo</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;">Game's earthy notes<br>resonate perfectly<br>with aged wine's woodland aromas</div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🦌 Three Classic Game Pairings</div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <div style="background:linear-gradient(90deg,#fffbeb,#fef3c7);border-left:4px solid #d97706;border-radius:0 10px 10px 0;padding:10px;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start;">
                <div style="font-size:22px;">🦌</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#78350f;">Roast Venison with Red Wine Sauce and Blackberries</div>
                  <div style="font-size:10px;color:#92400e;margin-top:3px;">Château Pichon Longueville Comtesse de Lalande, aged 15 years</div>
                  <div style="font-size:10px;color:#78350f;line-height:1.5;margin-top:2px;">Firm venison, sweet-tart blackberries, rich red wine sauce → requires the complexity and softened tannins that come with age</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:4px solid #16a34a;border-radius:0 10px 10px 0;padding:10px;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start;">
                <div style="font-size:22px;">🦆</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;">Braised Wild Duck with Orange Sauce</div>
                  <div style="font-size:10px;color:#166534;margin-top:3px;">Château Ducru-Beaucaillou (Saint-Julien), aged 10 years</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;margin-top:2px;">Duck fat, sweet-sour orange sauce, chewy meat → Saint-Julien's balanced style is a perfect fit</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fff1f2,#ffe4e6);border-left:4px solid #e11d48;border-radius:0 10px 10px 0;padding:10px;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start;">
                <div style="font-size:22px;">🐗</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#be123c;">Wild Boar Ragù Pasta</div>
                  <div style="font-size:10px;color:#9f1239;margin-top:3px;">Château Montrose (St-Estèphe)</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;margin-top:2px;">Bold wild boar flavour → needs St-Estèphe's power and earthy mineral character to hold up</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.12.title": "Knowledge Check: Classic Red Wine Pairings",
  "slides.13.title": "Bordeaux White Wine & Sweet Wine Pairings",
  "slides.13.subtitle": "Elegant Choices from Seafood to Dessert",
  "slides.14.title": "Dry White Wine and Seafood",
  "slides.14.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🦪 The Perfect Match for Oysters — High Acidity × Minerality</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:12px;padding:12px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <div style="font-size:24px;">🦪</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#1e3a8a;">Gillardeau No. 3 Oysters</div>
                  <div style="font-size:9.5px;color:#1d4ed8;">Deep-sea sweetness · oceanic minerality</div>
                </div>
              </div>
              <div style="background:#2563eb;color:white;border-radius:8px;padding:6px;text-align:center;">
                <div style="font-size:10.5px;font-weight:700;">Château Smith Haut Lafitte Blanc</div>
                <div style="font-size:9px;opacity:0.9;margin-top:2px;">Lemon acidity · grapefruit · minerality</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <div style="font-size:24px;">🌊</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;">Marennes-Oléron Oysters</div>
                  <div style="font-size:9.5px;color:#166534;">Subtle hazelnut · delicate texture</div>
                </div>
              </div>
              <div style="background:#15803d;color:white;border-radius:8px;padding:6px;text-align:center;">
                <div style="font-size:10.5px;font-weight:700;">Domaine de Chevalier Blanc</div>
                <div style="font-size:9px;opacity:0.9;margin-top:2px;">Sémillon proportion · nutty notes echo</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🐟 White Fish & Seafood Pairing Guide</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
            <div style="background:linear-gradient(90deg,#f0f9ff,#e0f2fe);border-left:3px solid #0284c7;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#0c4a6e;">🐠 Grilled Sea Bass</div>
              <div style="font-size:10px;color:#075985;margin-top:3px;">Château Carbonnieux Blanc — fresh acidity, herbal notes</div>
            </div>
            <div style="background:linear-gradient(90deg,#fff7ed,#ffedd5);border-left:3px solid #ea580c;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#7c2d12;">🦞 Butter Lobster</div>
              <div style="font-size:10px;color:#9a3412;margin-top:3px;">Château Haut-Brion Blanc — full body, oak influence</div>
            </div>
            <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:3px solid #16a34a;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#14532d;">🐡 Steamed Sole</div>
              <div style="font-size:10px;color:#166534;margin-top:3px;">Château Couhins-Lurton — delicate minerality</div>
            </div>
            <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:3px solid #9333ea;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#581c87;">🐚 Scallops</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:3px;">Clos Floridène Blanc — balance of fruit and minerality</div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.15.title": "The Sweet Art of Sauternes",
  "slides.15.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:2px solid #d97706;border-radius:12px;padding:14px;margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">👑 Foie Gras × Sauternes — A Match Made in Heaven</div>
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;margin-bottom:10px;">
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:10px;padding:10px;">
              <div style="font-size:32px;">🥩</div>
              <div style="font-size:11px;font-weight:700;color:#78350f;margin-top:4px;">Foie Gras</div>
              <div style="font-size:10px;color:#92400e;margin-top:3px;">Luxuriously fatty<br>Delicate texture</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:28px;">💑</div>
            </div>
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:10px;padding:10px;">
              <div style="font-size:32px;">🍾</div>
              <div style="font-size:11px;font-weight:700;color:#78350f;margin-top:4px;">Sauternes</div>
              <div style="font-size:10px;color:#92400e;margin-top:3px;">Honey · dried apricot<br>Botrytis complexity</div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
            <div style="background:rgba(255,255,255,0.5);border-radius:7px;padding:6px;text-align:center;font-size:10px;color:#78350f;"><strong>Sweetness</strong><br>cuts fat</div>
            <div style="background:rgba(255,255,255,0.5);border-radius:7px;padding:6px;text-align:center;font-size:10px;color:#78350f;"><strong>Acidity</strong><br>keeps it fresh</div>
            <div style="background:rgba(255,255,255,0.5);border-radius:7px;padding:6px;text-align:center;font-size:10px;color:#78350f;"><strong>Botrytis complexity</strong><br>elevates layers</div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍯 Four Classic Pairing Guides</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#e0e7ff;margin-bottom:4px;">🧀 Roquefort Blue Cheese</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;margin-bottom:5px;">Intense saltiness × sweetness softens; mould complexity × botrytis aromas echo</div>
              <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:4px;font-size:9.5px;color:#c7d2fe;font-weight:600;text-align:center;">Château d'Yquem</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🍎 French Apple Tart</div>
              <div style="font-size:9.5px;color:#9a3412;line-height:1.5;margin-bottom:5px;">Caramelised apple sweetness × honey and toasted almond flavours echo perfectly</div>
              <div style="background:#c2410c;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Château Rieussec</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🍰 Fruit Tart with Ice Cream</div>
              <div style="font-size:9.5px;color:#166534;line-height:1.5;margin-bottom:5px;">Fruit sweetness and tartness × tropical fruit and honey notes resonate harmoniously</div>
              <div style="background:#15803d;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Château Suduiraut</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:4px;">🌶️ Spicy Asian Cuisine</div>
              <div style="font-size:9.5px;color:#9f1239;line-height:1.5;margin-bottom:5px;">Sweetness soothes the heat, creating an East-meets-West flavour contrast</div>
              <div style="background:#be123c;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Château de Fargues</div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.16.title": "Knowledge Check: White Wine and Sweet Wine Pairings",
  "slides.17.title": "Innovative Pairings with Asian Cuisine",
  "slides.17.subtitle": "A Cross-Cultural Flavour Journey",
  "slides.18.title": "Bordeaux Wines with Chinese Food",
  "slides.18.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#be123c;margin-bottom:6px;">⚡ The Challenges of Pairing Wine with Chinese Food</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
            <div style="font-size:10px;color:#9f1239;line-height:1.6;"><div>• Soy sauce and doubanjiang may clash with tannins</div><div>• High-heat stir-frying calls for fruit-forward wines</div></div>
            <div style="font-size:10px;color:#9f1239;line-height:1.6;"><div>• Sweet-sour balance needs both acidity and fruit</div><div>• Spicy dishes require low-tannin, chilled wines</div></div>
          </div>
        </div>

        <div style="font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🥢 Five Chinese Dish and Wine Pairings</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div style="background:linear-gradient(90deg,#fff1f2,#fff5f5);border-left:4px solid #dc2626;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🦆</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#7f1d1d;">Peking Duck</div>
              <div style="font-size:10px;color:#991b1b;margin-top:2px;">Right Bank Merlot-dominant (Pomerol village) — plush fruit envelops the duck fat; sweet sauce harmonises with fruit</div>
            </div>
            <div style="font-size:10px;color:#dc2626;font-weight:700;white-space:nowrap;">12–14°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#fff7ed,#fffbeb);border-left:4px solid #d97706;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🥩</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#78350f;">Red-Braised Pork (Hong Shao Rou)</div>
              <div style="font-size:10px;color:#92400e;margin-top:2px;">St-Émilion Grand Cru — limestone minerality echoes soy sauce sweetness; aged notes resonate with soy character</div>
            </div>
            <div style="font-size:10px;color:#d97706;font-weight:700;white-space:nowrap;">16–18°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#f0fdf4,#f7fee7);border-left:4px solid #16a34a;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🐟</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#14532d;">Steamed Fish</div>
              <div style="font-size:10px;color:#166534;margin-top:2px;">Entre-Deux-Mers dry white — delicate fish flesh and spring onion-ginger aroma call for a light, high-acidity white</div>
            </div>
            <div style="font-size:10px;color:#16a34a;font-weight:700;white-space:nowrap;">10–12°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#fdf4ff,#faf5ff);border-left:4px solid #9333ea;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🌶️</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#581c87;">Kung Pao Chicken</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:2px;">Young Bordeaux AOC red (chilled) — spicy, sweet-sour, salty-savoury; fruit-forward, low tannins</div>
            </div>
            <div style="font-size:10px;color:#9333ea;font-weight:700;white-space:nowrap;">12–14°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#eff6ff,#f0f9ff);border-left:4px solid #2563eb;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🦞</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;">Spicy Crayfish</div>
              <div style="font-size:10px;color:#1d4ed8;margin-top:2px;">Graves dry white <strong>or</strong> Sauternes sweet white — dry white's minerality or sweet white's sweetness balances the spice</div>
            </div>
            <div style="font-size:10px;color:#2563eb;font-weight:700;white-space:nowrap;">8–12°C</div>
          </div>
        </div>

      </div>
    """,
  "slides.19.title": "Bordeaux Wines with Japanese Cuisine",
  "slides.19.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#e0e7ff;margin-bottom:5px;">🎌 Core Principles for Pairing with Japanese Food</div>
          <div style="font-size:10.5px;color:#a5b4fc;line-height:1.7;">Emphasis on <strong style="color:#c7d2fe;">natural ingredient flavours</strong> · light seasoning · umami. Choose wines with <strong style="color:#c7d2fe;">strong minerality, restrained oak, light to medium body</strong> to honour the refined aesthetic of Japanese cuisine.</div>
        </div>

        <div style="font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍱 Five Japanese Dish and Wine Pairings</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div style="background:linear-gradient(90deg,#f0f9ff,#eff6ff);border-left:4px solid #0284c7;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🐟</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#0c4a6e;">Sashimi</div>
              <div style="font-size:10px;color:#075985;margin-top:2px;line-height:1.5;">Pessac-Léognan white or Entre-Deux-Mers — high acidity and minerality, resonates with wasabi heat; <strong>avoid heavy oak</strong></div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#f0fdf4,#f7fee7);border-left:4px solid #16a34a;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🍣</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#14532d;">Nigiri Sushi</div>
              <div style="font-size:10px;color:#166534;margin-top:2px;line-height:1.5;">Château Couhins-Lurton Blanc — sushi rice has subtle sweetness, fish has umami; bright acidity and fresh fruit</div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#fffbeb,#fefce8);border-left:4px solid #ca8a04;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🍤</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#78350f;">Tempura</div>
              <div style="font-size:10px;color:#92400e;margin-top:2px;line-height:1.5;">Sparkling wine or light white wine — crispy fried texture; bubbles or high acidity cleanse the palate</div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#fff1f2,#fff5f5);border-left:4px solid #dc2626;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🍗</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#7f1d1d;">Teriyaki Chicken</div>
              <div style="font-size:10px;color:#991b1b;margin-top:2px;line-height:1.5;">Young Bordeaux AOC red — teriyaki's sweet-salty glaze harmonises with fruit; <strong>avoid high tannins</strong></div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#fdf4ff,#faf5ff);border-left:4px solid #9333ea;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🥩</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#581c87;">Wagyu Beef</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:2px;line-height:1.5;">Pomerol or Margaux — supreme marbling melts in the mouth; Merlot's roundness or Margaux's velvety texture pairs perfectly</div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.20.title": "Bordeaux Wines with Thai Cuisine",
  "slides.20.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#7f1d1d,#991b1b);border-radius:10px;padding:10px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#fecaca;margin-bottom:5px;">🌶️ Wine Strategy for Thai Food</div>
          <div style="font-size:10.5px;color:#fca5a5;line-height:1.7;">Sour · spicy · sweet · salty · umami all together → choose wines that are <strong style="color:white;">fruit-forward, low in tannins, off-dry or semi-sweet</strong>, served <strong style="color:white;">well chilled</strong>. High-tannin reds clash with chilli, producing bitterness.</div>
        </div>

        <div style="margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🥢 Four Thai Dish and Wine Pairings</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🥗</div>
              <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:3px;">Green Papaya Salad (Som Tam)</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.5;margin-bottom:5px;">Sour-spicy · fish sauce saltiness · crunchy peanuts</div>
              <div style="background:#7e22ce;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Sauternes chilled to 8°C</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🍛</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:3px;">Green Curry Chicken</div>
              <div style="font-size:10px;color:#166534;line-height:1.5;margin-bottom:5px;">Coconut milk · chilli · lemongrass richness</div>
              <div style="background:#15803d;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Off-dry white or Sauternes</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🍜</div>
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:3px;">Pad Thai</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.5;margin-bottom:5px;">Sweet-sour sauce · peanuts · dried shrimp</div>
              <div style="background:#c2410c;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Young fruit-forward red (chilled)</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🐟</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:3px;">Steamed Lemon Fish</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.5;margin-bottom:5px;">Lemon acidity · delicate, refreshing fish</div>
              <div style="background:#1d4ed8;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Entre-Deux-Mers White</div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:6px;">🏆 Golden Rules for Pairing with Thai Food</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
            <div style="font-size:10px;color:#78350f;line-height:1.7;">
              <div>❌ Avoid high-tannin reds (clash with chilli)</div>
              <div>✅ Choose fruit-forward with bright acidity</div>
            </div>
            <div style="font-size:10px;color:#78350f;line-height:1.7;">
              <div>✅ Sweet white wine is your weapon against heat</div>
              <div>🌡️ Serve well chilled (below 12°C)</div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.21.title": "Knowledge Check: Innovative Asian Pairings",
  "slides.22.title": "Designing a Professional Wine Menu",
  "slides.22.subtitle": "The Art of Multi-Course Food and Wine Pairing",
  "slides.23.title": "Principles of Multi-Course Pairing",
  "slides.23.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚀 A Progressive Flavour Journey — Five Core Rules</div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <div style="background:linear-gradient(90deg,#eff6ff,#dbeafe);border-left:4px solid #3b82f6;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#3b82f6;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">1</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#1e3a8a;">Light to Heavy</div>
                <div style="font-size:10.5px;color:#1d4ed8;margin-top:2px;">Aperitif with light-body → main course with full-body; build progressively without fatigue</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:4px solid #a855f7;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#a855f7;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">2</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#581c87;">Dry to Sweet</div>
                <div style="font-size:10.5px;color:#7e22ce;margin-top:2px;">Save sweet wines for the end (before dessert); otherwise subsequent wines will taste flat and uninspiring</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:4px solid #22c55e;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#22c55e;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">3</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#14532d;">Simple to Complex</div>
                <div style="font-size:10.5px;color:#166534;margin-top:2px;">Open with young, easy-drinking wines; save complex aged wines as the finale — layers unfold with purpose</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fffbeb,#fef3c7);border-left:4px solid #f59e0b;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#f59e0b;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">4</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#78350f;">White to Red</div>
                <div style="font-size:10.5px;color:#92400e;margin-top:2px;">White wine (seafood · starters) opens; red wine (meat · main course) takes centre stage</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fff1f2,#ffe4e6);border-left:4px solid #f43f5e;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#f43f5e;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">5</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#be123c;">Increasing Alcohol</div>
                <div style="font-size:10.5px;color:#9f1239;margin-top:2px;">Prevents later wines from seeming thin; ensures each wine shows its best</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#e0e7ff;margin-bottom:5px;">⚖️ The Art of Balance and Contrast</div>
          <div style="font-size:10.5px;color:#a5b4fc;line-height:1.7;">A whole menu needs <strong style="color:white;">balance</strong> (avoiding flavour monotony) and <strong style="color:white;">contrast</strong> (creating surprise). Consider variety in colour, texture, temperature and flavour so that each course makes you anticipate the next.</div>
        </div>

      </div>
    """,
  "slides.24.title": "Classic French Seven-Course Menu Example",
  "slides.24.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">📋 Complete Seven-Course Food and Wine Pairing</div>
        <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px;">

          <div style="background:linear-gradient(90deg,#f0f9ff,#e0f2fe);border-left:4px solid #0284c7;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#0284c7;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">Course 1</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#0c4a6e;">Smoked Salmon with Capers, Onion and Lemon</div>
              <div style="font-size:9.5px;color:#0369a1;">Entre-Deux-Mers — crisp acidity stimulates the appetite</div>
            </div>
            <div style="font-size:9px;color:#0284c7;text-align:right;">50ml<br>8–10°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:4px solid #16a34a;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#16a34a;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">Course 2</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#14532d;">Oyster Platter (3 Varieties)</div>
              <div style="font-size:9.5px;color:#166534;">Château Smith Haut Lafitte Blanc — minerality echoes the ocean</div>
            </div>
            <div style="font-size:9px;color:#16a34a;text-align:right;">100ml<br>10–12°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fffbeb,#fef3c7);border-left:4px solid #d97706;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#d97706;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">Course 3</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#78350f;">Seared Foie Gras with Fig and Brioche</div>
              <div style="font-size:9.5px;color:#92400e;">Château d'Yquem (half bottle) — sweetness cuts fat · botrytis echoes</div>
            </div>
            <div style="font-size:9px;color:#d97706;text-align:right;">75ml<br>10–12°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:4px solid #9333ea;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#9333ea;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">Course 4</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#581c87;">Butter Lobster with Black Truffle</div>
              <div style="font-size:9.5px;color:#7e22ce;">Château Haut-Brion Blanc — top white's depth matches the dish</div>
            </div>
            <div style="font-size:9px;color:#9333ea;text-align:right;">100ml<br>12–14°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fff7ed,#ffedd5);border-left:4px solid #ea580c;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#ea580c;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">Course 5</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#7c2d12;">Roast Squab with Wild Mushrooms</div>
              <div style="font-size:9.5px;color:#9a3412;">Château Palmer (Margaux) — elegant transition into the red wine phase</div>
            </div>
            <div style="font-size:9px;color:#ea580c;text-align:right;">120ml<br>16–18°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fff1f2,#ffe4e6);border-left:4px solid #dc2626;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#dc2626;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">Course 6</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#7f1d1d;">Charolais Steak with Bone Marrow and Red Wine Sauce ⭐ Star Dish</div>
              <div style="font-size:9.5px;color:#991b1b;">Château Latour, aged 10 years — powerful tannins · complexity (decant 2 hours ahead)</div>
            </div>
            <div style="font-size:9px;color:#dc2626;text-align:right;">150ml<br>17–18°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:4px solid #7c3aed;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#7c3aed;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">Course 7</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#4c1d95;">Raspberry Soufflé with Vanilla Ice Cream</div>
              <div style="font-size:9.5px;color:#6d28d9;">Continue with Château d'Yquem — complexity resonates with raspberry fruit</div>
            </div>
            <div style="font-size:9px;color:#7c3aed;text-align:right;">50ml</div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:9px;padding:9px;">
          <div style="font-size:10.5px;font-weight:700;color:#78350f;margin-bottom:4px;">💡 Menu Design Notes</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:10px;color:#92400e;line-height:1.6;">
            <div>• Total wine: 500–700 ml per person (approx. one bottle)</div>
            <div>• Pacing: 15–20 minutes between each course</div>
            <div>• Budget allocation: 40% main course · 30% Yquem</div>
            <div>• Seasonal adjustment: lighter in summer · richer in winter</div>
          </div>
        </div>

      </div>
    """,
  "slides.25.title": "Modern Creative Menu Example",
  "slides.25.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🌍 Five-Course Innovative East-Meets-West Menu</div>
        <div style="display:flex;flex-direction:column;gap:7px;">

          <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#3b82f6;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">Course 1</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;">Japanese Sashimi × Spanish Jamón Ibérico Platter</div>
              <div style="font-size:10px;color:#1d4ed8;margin-top:3px;">🍾 <strong>Pessac-Léognan White</strong> — minerality matches both seafood and the saltiness of ham</div>
              <div style="font-size:9.5px;color:#2563eb;margin-top:2px;font-style:italic;">East and West ingredients fused — one wine bridges two culinary cultures</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#f97316;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">Course 2</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#7c2d12;">Thai Lemongrass Lobster Bisque</div>
              <div style="font-size:10px;color:#9a3412;margin-top:3px;">🍾 <strong>Sauternes (chilled)</strong> — sweetness balances lemongrass and chilli; fruit harmonises with coconut milk</div>
              <div style="font-size:9.5px;color:#c2410c;margin-top:2px;font-style:italic;">Sweet white wine in an unexpected role — turning heat into harmony</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#f43f5e;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">Course 3</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#be123c;">Peking Duck × Mexican Salsa</div>
              <div style="font-size:10px;color:#9f1239;margin-top:3px;">🍾 <strong>Pomerol Village (chilled)</strong> — Merlot's fruit envelops duck fat; the salsa's spicy acidity is neutralised</div>
              <div style="font-size:9.5px;color:#dc2626;margin-top:2px;font-style:italic;">Eastern tradition + Latin vitality = Merlot's harmonious embrace</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#a855f7;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">Course 4</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#581c87;">Wagyu Beef × Korean Kimchi</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:3px;">🍾 <strong>Château Cheval Blanc</strong> — wagyu marbling pairs with silky texture; kimchi's fermented notes resonate with aged complexity</div>
              <div style="font-size:9.5px;color:#9333ea;margin-top:2px;font-style:italic;">Premium ingredient + fermentation tradition = a perfect match of complexity</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#22c55e;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">Course 5</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#14532d;">Matcha Tiramisu</div>
              <div style="font-size:10px;color:#166534;margin-top:3px;">🍾 <strong>Château Climens (Barsac)</strong> — honey and matcha's bittersweet create an intriguing contrast</div>
              <div style="font-size:9.5px;color:#15803d;margin-top:2px;font-style:italic;">Western dessert + Eastern bitterness = perfect tension between sweet and bitter</div>
            </div>
          </div>

        </div>

      </div>
    """,
  "slides.26.title": "Knowledge Check: Wine Menu Design",
  "slides.27.title": "The Wisdom and Practice of Pairing",
  "slides.27.subtitle": "From Principles to Art",
  "slides.28.title": "Core Philosophy of Food and Wine Pairing",
  "slides.28.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🎯 Five Core Pairing Principles</div>
          <div style="display:flex;flex-direction:column;gap:6px;">

            <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">🔬</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#e0e7ff;">1. Understand the Science</div>
                <div style="font-size:10px;color:#a5b4fc;margin-top:2px;">Tannins soften proteins • Acidity cuts fat • Sweetness counters spice • Body matches food weight</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">🗺️</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#7c2d12;">2. Respect Regional Tradition</div>
                <div style="font-size:10px;color:#9a3412;margin-top:2px;">Bordeaux red with red meat • white with seafood • Sauternes with foie gras — centuries of accumulated culinary wisdom</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">✨</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#14532d;">3. Consider the Total Experience</div>
                <div style="font-size:10px;color:#166534;margin-top:2px;">Not just taste, but also setting · atmosphere · season · occasion — pairing is the art of creating complete memories</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">💡</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#1e3a8a;">4. Be Bold and Explore</div>
                <div style="font-size:10px;color:#1d4ed8;margin-top:2px;">The joy of cross-cultural pairings — Thai food with Sauternes · Wagyu with Cheval Blanc; the beauty of breaking conventions</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">❤️</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#581c87;">5. Listen to Personal Preference</div>
                <div style="font-size:10px;color:#7e22ce;margin-top:2px;">There is no single correct pairing — the combination that delights you is the best pairing. Rules are a starting point, not a destination.</div>
              </div>
            </div>

          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">📚 Practical Methods for Ongoing Learning</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px;color:#78350f;line-height:1.7;">
            <div>
              <div>🍽️ Regularly host pairing experiment dinners</div>
              <div>📝 Record the successes and failures of each pairing</div>
            </div>
            <div>
              <div>📖 Read sommelier pairing recommendations</div>
              <div>🔓 Keep an open mind and try new combinations</div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.29.title": "Course Complete",
  "slides.29.description": "Congratulations on mastering the scientific principles and practical techniques of Bordeaux wine and food pairing! From the chemistry of tannins and acidity, to classic red meat pairings, to innovative explorations with Asian cuisine, you now have the ability to design professional wine menus.",
  "slides.29.reflection.title": "Course Reflection",
}

patch_file('l3-10.json', patches)
print('Done.')
