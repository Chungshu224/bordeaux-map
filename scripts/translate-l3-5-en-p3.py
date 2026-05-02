import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.9.content — white wine winemaking overview
data["slides.9.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">Core philosophy: <strong style="color:#1B5E20;">Protection over Extraction</strong> — from crisp dry white to sweet white, each has its unique winemaking logic</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🛡️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Oxidation Protection</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:3px;">· Low phenolics, extremely prone to oxidation/browning</div>
              <div style="margin-bottom:3px;">· Inert gas (N₂/CO₂) protection throughout</div>
              <div style="margin-bottom:3px;">· SO₂ 50–80 mg/L (higher than red wine)</div>
              <div>· Stricter temperature control</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1E88E5);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌡️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Low-Temperature Fermentation</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:3px;">· <strong>Temperature:</strong> 16–20°C (red wine 28–32°C)</div>
              <div style="margin-bottom:3px;">· <strong>Duration:</strong> 2–4 weeks (red wine 7–14 days)</div>
              <div>· <strong>Purpose:</strong> retain volatile fruit aromas</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍇</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Pressing First</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:3px;">· Press then ferment (opposite of red wine)</div>
              <div style="margin-bottom:3px;">· Pressing intensity determines wine style</div>
              <div>· Juice clarity affects final quality</div>
            </div>
          </div>
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:#333;margin-bottom:8px;">Three Main Types of Bordeaux White Wine</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#2E7D32,#43A047);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">🥗 Crisp Dry White</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Entre-Deux-Mers style</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:2px;"><strong>Goal:</strong> fresh, fruity, easy-drinking</div>
              <div style="margin-bottom:2px;">· Stainless steel 15–18°C low-temp fermentation</div>
              <div style="margin-bottom:2px;">· Block MLF · early bottling (12–18 months)</div>
              <div style="margin-bottom:4px;">· Aromatic yeasts</div>
              <div style="background:#E8F5E9;border-radius:4px;padding:3px 8px;font-size:0.7rem;color:#2E7D32;">€5–15/bottle</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">🍾 Complex Dry White</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Pessac-Léognan style</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:2px;"><strong>Goal:</strong> complex, structured, ageable</div>
              <div style="margin-bottom:2px;">· Barrel fermentation (20–50% new oak)</div>
              <div style="margin-bottom:2px;">· MLF in barrel · sur lie 6–12 months</div>
              <div style="margin-bottom:4px;">· Delayed bottling (18–24 months)</div>
              <div style="background:#FFF3E0;border-radius:4px;padding:3px 8px;font-size:0.7rem;color:#E65100;">€25–200+/bottle</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">🍯 Noble Rot Sweet White</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Sauternes style</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:2px;"><strong>Goal:</strong> sweet, complex, ultra-long ageing</div>
              <div style="margin-bottom:2px;">· Botrytis infection · 6–8 selective harvests</div>
              <div style="margin-bottom:2px;">· Barrel fermentation (50–100% new oak)</div>
              <div style="margin-bottom:4px;">· Residual sugar 120–150 g/L</div>
              <div style="background:#FFF9C4;border-radius:4px;padding:3px 8px;font-size:0.7rem;color:#F57F17;">€30–500+/bottle (375ml)</div>
            </div>
          </div>
        </div>
      </div>
    """

# slides.11.content — Château Smith Haut Lafitte white wine case
data["slides.11.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">Core Challenge ｜ Pessac-Léognan</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">How to combine Sauvignon Blanc and Sauvignon Gris to create a Bordeaux white that is both fresh and complex, both modern and classic?</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🥂 Eight-Step Winemaking Process</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.8;">
              <div style="margin-bottom:3px;"><strong style="color:#00695C;">①</strong> Morning harvest + three sortings (20–25% rejection rate)</div>
              <div style="margin-bottom:3px;"><strong style="color:#00796B;">②</strong> Cold skin contact 12h ｜ 8–10°C inert gas protection</div>
              <div style="margin-bottom:3px;"><strong style="color:#00897B;">③</strong> Gentle pressing &lt;0.8 bar｜only first 60% of juice</div>
              <div style="margin-bottom:3px;"><strong style="color:#009688;">④</strong> Static clarification 48h ｜ retain 100–120 NTU</div>
              <div style="margin-bottom:3px;"><strong style="color:#E65100;">⑤</strong> Barrel fermentation (50% new oak) 18–20°C natural yeast</div>
              <div style="margin-bottom:3px;"><strong style="color:#F57F17;">⑥</strong> 100% MLF in barrel (uninoculated, naturally initiated)</div>
              <div style="margin-bottom:3px;"><strong style="color:#6A1B9A;">⑦</strong> Sur lie 10 months ｜ first 3 months stir twice weekly</div>
              <div><strong style="color:#37474F;">⑧</strong> Gentle filtration → bottling (18 months after winemaking)</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🏆 Quality and Market Performance</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E0F2F1;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Alcohol</div>
                  <div style="font-weight:700;color:#00695C;font-size:0.8rem;">13.5%</div>
                </div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Total Acidity (g/L)</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">3.5</div>
                </div>
                <div style="background:#FFF3E0;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Score</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.8rem;">91–94 pts</div>
                </div>
                <div style="background:#E3F2FD;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Price</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.8rem;">€50–70</div>
                </div>
              </div>
              <div style="font-size:0.72rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:3px;">· Pale gold with green reflections, flint mineral character</div>
                <div style="margin-bottom:3px;">· Grapefruit · passion fruit · linden blossom · toasted almond</div>
                <div style="margin-bottom:3px;">· Vibrant acidity + full body + silky texture</div>
                <div>· Ageing potential 15–25 years</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
          <div style="background:#E0F2F1;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#00695C;line-height:1.55;text-align:center;"><strong>Variety Selection</strong><br><span style="color:#555;">Sémillon adds body and ageing potential</span></div>
          <div style="background:#FFF3E0;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#E65100;line-height:1.55;text-align:center;"><strong>In-Barrel Fermentation</strong><br><span style="color:#555;">Texture integration superior to barrel ageing</span></div>
          <div style="background:#F3E5F5;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#6A1B9A;line-height:1.55;text-align:center;"><strong>Sur Lie Ageing</strong><br><span style="color:#555;">Key to complexity and texture</span></div>
          <div style="background:#E8F5E9;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#1B5E20;line-height:1.55;text-align:center;"><strong>50% New Oak</strong><br><span style="color:#555;">Preserving variety and terroir character</span></div>
          <div style="background:#E3F2FD;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#1565C0;line-height:1.55;text-align:center;"><strong>18-Month Cycle</strong><br><span style="color:#555;">Harmonious integration of all elements</span></div>
        </div>
      </div>
    """

# slides.13.content — winemaking art and science summary
data["slides.13.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:11px;text-align:center;">Every technical decision is built on scientific understanding, but ultimately still requires the winemaker's experience and intuition to guide</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:11px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🍷 Red Wine Core: Extraction Management</div>
            </div>
            <div style="padding:9px 14px 11px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· Cold maceration → alcoholic fermentation → extended maceration three-stage strategy</div>
              <div style="margin-bottom:3px;">· Pump-over, punch-down, rack-and-return technique combinations</div>
              <div style="margin-bottom:3px;">· Decisive impact of temperature control on extraction intensity</div>
              <div>· MLF contribution to smoothness</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🥂 White Wine Core: Protection and Development</div>
            </div>
            <div style="padding:9px 14px 11px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· Oxidation protection throughout the entire winemaking process</div>
              <div style="margin-bottom:3px;">· Low-temperature fermentation (16–20°C) preserving volatile fruit aromas</div>
              <div style="margin-bottom:3px;">· Oak barrel vs stainless steel style difference</div>
              <div>· Sur lie ageing key to complexity</div>
            </div>
          </div>
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:#333;margin-bottom:8px;">Four Principles of Bordeaux Winemaking Philosophy</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-bottom:10px;">
          <div style="background:#E8F5E9;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">🌿</div>
            <div style="font-size:0.76rem;font-weight:700;color:#1B5E20;margin-bottom:3px;">Respect Raw Materials</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">Minimal intervention, let grapes express terroir</div>
          </div>
          <div style="background:#E3F2FD;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">🎯</div>
            <div style="font-size:0.76rem;font-weight:700;color:#1565C0;margin-bottom:3px;">Precise Control</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">Modern technology provides unprecedented precision</div>
          </div>
          <div style="background:#FFF3E0;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">⚖️</div>
            <div style="font-size:0.76rem;font-weight:700;color:#E65100;margin-bottom:3px;">Balance Tradition and Innovation</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">Not blindly chasing trends nor rigidly following old methods</div>
          </div>
          <div style="background:#F3E5F5;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">🗺️</div>
            <div style="font-size:0.76rem;font-weight:700;color:#6A1B9A;margin-bottom:3px;">Terroir Expression</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">Technology serves terroir, not conceals it</div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#37474F,#455A64);border-radius:8px;padding:9px 14px;">
          <div style="color:#fff;font-size:0.76rem;font-weight:700;margin-bottom:5px;">▶ Part 2 Coming Next</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🍯<br>Sauternes<br>Noble Rot Sweet White</div>
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🪵<br>Oak Barrel Ageing<br>Science</div>
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🔬<br>Microbiology<br>Applications</div>
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🚀<br>Modern Winemaking<br>Technology Innovation</div>
          </div>
        </div>
      </div>
    """

# slides.15.content — traditional winemaking philosophy intro
data["slides.15.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          In an era of rapidly evolving modern technology, top Bordeaux châteaux still uphold the core tenets of traditional winemaking philosophy: minimal intervention, quality first, and preservation of technique. These principles are not conservatism but rather wisdom crystallised over centuries of validation.
        </p>

        <h3 class="section-title">Content Explored in This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌿 Minimal Intervention Philosophy</h4>
            <p>Preserving authentic expression of grapes and terroir, avoiding over-manipulation causing stylistic homogenisation</p>
          </div>

          <div class="point-item">
            <h4>✋ Value of Manual Operations</h4>
            <p>Understanding why premium châteaux insist on hand work, and the importance of hand selection and delicate handling</p>
          </div>

          <div class="point-item">
            <h4>🏺 Traditional Processing Techniques</h4>
            <p>Learning natural settling, manual racking, egg white fining and other time-tested methods</p>
          </div>

          <div class="point-item">
            <h4>⚖️ Tradition and Innovation</h4>
            <p>Exploring how to find the optimal balance between respecting tradition and embracing technology</p>
          </div>

          <div class="point-item">
            <h4>⏳ Value of Time</h4>
            <p>Recognising the importance of patience and waiting in winemaking, understanding why one cannot rush</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Understanding these traditional philosophies will help you appreciate why Bordeaux can maintain exceptional quality century after century, and how these principles continue to play a role in modern winemaking.
        </p>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 9, 11, 13, 15 content.")
