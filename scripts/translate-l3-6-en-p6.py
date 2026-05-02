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

# ── slides.25.content  (modern blending technology) ──────────────────────────
slide25_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 Precision Analytical Technology</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Modern laboratories can analyse the chemical composition of each component with great precision — hundreds of compounds including phenolics, pigments, and aromatic molecules. Data shifts blending decisions from pure intuition to data-supported instinct, improving accuracy by 30%.<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">Chemical analysis + sensory evaluation = more precise blending decisions</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💨 The Micro-Oxygenation Revolution</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Precisely controlling oxygen exposure (0.5–2 mg/L/month) and timing softens tannins, stabilises pigments, and promotes the polymerisation of aromatic molecules — helping diverse components integrate into a harmonious whole and shortening the blending-to-bottling cycle.<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">Micro-oxygenation accelerates harmonious integration by 6–12 months</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💻 Digital Management Systems</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Advanced estates use specialist software to record every detail of each blend: variety, plot, fermentation parameters, sensory scores, and final ratios. After years of data accumulation, the system can identify historical patterns and provide a scientific reference for future decisions.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">Big data: 10 years of blending history becomes a decision-support system</div></div>
          </div>
        </div>
      </div>
    """

# ── slides.26.content  (innovative tools at top châteaux) ────────────────────
slide26_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔍 Spectral Analyser</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Near-infrared spectroscopy (NIR) technology analyses the chemical composition of wine within minutes — instantly measuring total phenolics, tannins, and anthocyanins, predicting aging potential, and ensuring batch-to-batch quality consistency.<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">Analysis time: reduced from 2–3 days to 5 minutes</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🖥️ Blending Software Systems</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">AI-assisted blending ratio calculation and simulation instantly models the theoretical outcome of dozens of combinations, integrating historical data and predictive models. Some systems now incorporate machine learning, drawing on 1,000+ blending cases to provide intelligent recommendations.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">65% of mid-to-large estates use software · €2K–10K/year</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👃 Sensory Analysis Room</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">A professional tasting environment designed to ISO 8589 standards, eliminating interference from light, temperature, and ambient odour. Fitted with individual tasting booths, standardised glasses, and a recording system to ensure objective assessment during blending evaluation.<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">20±2°C · Humidity 60–70% · Neutral lighting</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">📈</div>
            <div style="font-weight:700;font-size:0.78rem;">Tech Adoption</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">80–90%</div>
            <div style="font-size:0.65rem;opacity:0.85;">Top estates already using</div>
          </div>
          <div style="background:linear-gradient(135deg,#1565C0,#1976D2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">💰</div>
            <div style="font-weight:700;font-size:0.78rem;">ROI</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">+15–25%</div>
            <div style="font-size:0.65rem;opacity:0.85;">Precision quality improvement</div>
          </div>
          <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">⏱️</div>
            <div style="font-weight:700;font-size:0.78rem;">Efficiency gain</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">−40%</div>
            <div style="font-size:0.65rem;opacity:0.85;">Decision time saved</div>
          </div>
          <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🎯</div>
            <div style="font-weight:700;font-size:0.78rem;">Consistency</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">&lt; 5%</div>
            <div style="font-size:0.65rem;opacity:0.85;">Batch variation rate</div>
          </div>
        </div>
      </div>
    """

# ── slides.29.content  (three global blending philosophies) ──────────────────
slide29_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏛️ Bordeaux: Terroir Guardian</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Strict adherence to traditional variety combinations (CS + Merlot + CF), emphasising pure terroir expression and pursuing elegant balance. Prized for exceptional long-aging potential (20–50 years) and deep respect for AOC regulations.<div style="background:#ECEFF1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#37474F;margin-top:7px;">Terroir expression · Elegant balance · Ultra-long aging · Tradition</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌟 Napa Valley: Fruit Pioneer</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Innovative variety combinations (incorporating Syrah, Malbec, etc.), emphasising concentrated fruit and immediate enjoyment. Prioritises early accessibility (3–10 years), with style driven by market preferences.<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">Rich fruit · Early accessibility · Innovative blends · Market-driven</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 Australia: Technical Pragmatism</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Technology-assisted decision-making (spectral analysis, predictive models), flexible inter-regional blending (South Australia + Barossa), pursuit of consistent quality and batch uniformity, with a cost-effectiveness orientation.<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">Technology-driven · Flexible blending · Consistent quality · Cross-regional</div></div>
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:0.72rem;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
          <thead>
            <tr style="background:#37474F;color:#fff;">
              <th style="padding:5px 10px;text-align:left;width:22%;">Dimension</th>
              <th style="padding:5px 10px;text-align:center;">🏛️ Bordeaux</th>
              <th style="padding:5px 10px;text-align:center;">🌟 Napa Valley</th>
              <th style="padding:5px 10px;text-align:center;">🔬 Australia</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#FFEBEE;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Core value</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">Terroir · Tradition</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">Fruit · Innovation</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">Technology · Efficiency</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Variety rules</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">Strict AOC compliance</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">Freedom to experiment</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">Flexible cross-regional</td>
            </tr>
            <tr style="background:#FFEBEE;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Aging target</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">20–50 years ultra-long</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">3–10 years early drinking</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">Flexible</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Style pursuit</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">Elegant · Refined</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">Powerful · Concentrated</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">Stable · Consistent</td>
            </tr>
            <tr style="background:#FFEBEE;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">Blend flexibility</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">±5% within framework</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">Bold ±20%</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">Market-led</td>
            </tr>
          </tbody>
        </table>
      </div>
    """

# ── slides.30.content  (evolution of blending philosophy) ────────────────────
slide30_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏛️ Old World Modernisation</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Traditional regions such as Bordeaux are absorbing the technological innovations of the New World while preserving their own terroir identity. The adoption of modern equipment has not altered the fundamental blending philosophy — rather, it enables traditional principles to be executed with greater precision.<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:7px;">Technical modernisation + traditional philosophy = an evolved classic style</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌟 New World Refinement</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">New World regions are placing increasing emphasis on terroir expression and blending finesse. From their early fruit-forward styles, they have gradually developed blending philosophies with greater complexity and aging potential.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">Evolving from simple fruit to complex, elegant style</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌐 The Influence of Globalisation</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Demand from international markets and the preferences of leading wine critics are shaping global blending trends — fostering mutual learning and cross-regional exchange, and giving rise to a new standard of "globalised fine wine".<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">Globalisation drives the exchange and fusion of blending philosophies</div></div>
          </div>
        </div>
      </div>
    """

patch_file('l3-6.json', {
    'slides.25.content': slide25_content,
    'slides.26.content': slide26_content,
    'slides.29.content': slide29_content,
    'slides.30.content': slide30_content,
})

print('Done.')
