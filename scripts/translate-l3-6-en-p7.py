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

# ── slides.33.content  (professional blending tasting) ───────────────────────
slide33_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👁️ Visual Assessment</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Tilt the glass 45° against a white background. Observe colour depth (CS deep purple vs Merlot ruby), tonal harmony, clarity, and brilliance (a pale water rim signals aging potential), then predict the direction of future colour development.<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">Assess 30–60 sec · Key: tonal harmony · depth consistency</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👃 Aroma Analysis</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Three-stage approach: top notes (gently smell — CS blackcurrant / Merlot plum / CF violet) → middle notes (swirl, then note oak vanilla / smoke) → finish (assess the empty glass for persistence). In a fine blend, aromas integrate harmoniously.<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">Assess 2–3 min · Key: layered complexity · harmonious integration</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👅 Palate Assessment</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Three-stage tasting: entry — burst of fruit; mid-palate — balance of acidity, tannins, and alcohol; finish — length (&gt;60 seconds in outstanding blends). A perfect blend feels seamlessly unified; you sense the whole, not the individual varieties.<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:7px;">Assess 1–2 min · Key: balance · integration · length</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">👁️</div>
            <div style="font-weight:700;font-size:0.78rem;">Visual</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">30–60s</div>
            <div style="font-size:0.65rem;opacity:0.85;">Colour harmony</div>
          </div>
          <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">👃</div>
            <div style="font-weight:700;font-size:0.78rem;">Aroma</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">2–3min</div>
            <div style="font-size:0.65rem;opacity:0.85;">Layered complexity</div>
          </div>
          <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">👅</div>
            <div style="font-weight:700;font-size:0.78rem;">Palate</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">1–2min</div>
            <div style="font-size:0.65rem;opacity:0.85;">Structure &amp; balance</div>
          </div>
          <div style="background:linear-gradient(135deg,#E65100,#FF6D00);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">⏱️</div>
            <div style="font-weight:700;font-size:0.78rem;">Total</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">4–6min</div>
            <div style="font-size:0.65rem;opacity:0.85;">Full tasting sequence</div>
          </div>
        </div>
      </div>
    """

# ── slides.34.content  (three practice exercises) ────────────────────────────
slide34_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🎓 Beginner: Variety Identification</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">First taste each variety individually to learn its character: CS (blackcurrant / high tannins), Merlot (plum / supple), CF (violet / high acidity). Then try simple blends and identify the contribution of each variety.<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">Success target: correct identification rate &gt; 80%</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">📊 Intermediate: Ratio Judgement</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Learn three fundamental blend types: CS-dominant (&gt;65%, pronounced structure), Merlot-dominant (&gt;60%, fruit-forward), and balanced (CS 50–60%). Complete blind-tasting exercises to estimate the proportion of each variety.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">Success target: ratio estimation error &lt; 15%</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💡 Advanced: Improvement Suggestions</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Scenario exercises: tannins too firm (CS 80%) → suggest raising Merlot to 25–30%; insufficient fruit (CF 20%+) → suggest raising Merlot to 20–30%. Propose 3 or more workable solutions for each case.<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">Success target: propose 3+ solutions with clear reasoning</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🎓</div>
            <div style="font-weight:700;font-size:0.78rem;">Beginner</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">&gt;80%</div>
            <div style="font-size:0.65rem;opacity:0.85;">Identification accuracy</div>
          </div>
          <div style="background:linear-gradient(135deg,#1565C0,#1976D2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">📊</div>
            <div style="font-weight:700;font-size:0.78rem;">Intermediate</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">&lt;15%</div>
            <div style="font-size:0.65rem;opacity:0.85;">Ratio error margin</div>
          </div>
          <div style="background:linear-gradient(135deg,#E65100,#FF6D00);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">💡</div>
            <div style="font-weight:700;font-size:0.78rem;">Advanced</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">3+</div>
            <div style="font-size:0.65rem;opacity:0.85;">Solutions proposed</div>
          </div>
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">⏱️</div>
            <div style="font-weight:700;font-size:0.78rem;">Practice cycle</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">6–12m</div>
            <div style="font-size:0.65rem;opacity:0.85;">To reach advanced level</div>
          </div>
        </div>
      </div>
    """

# ── slides.36.content  (core summary 2×2 grid) ───────────────────────────────
slide36_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🎯 Fundamental Principles</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">Blending creates complexity beyond any single variety's reach (1+1+1&gt;3). CS provides the skeleton; Merlot the flesh; CF adds elegance. Ratios are not merely technical decisions — they reflect the winemaker's aesthetic philosophy. Every 1% adjustment can shift the style.<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:6px;">Blending = Art + Science + Philosophy</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 Practical Techniques</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">Follow a systematic tasting protocol (4–6 min per sample) — never rush to conclusions. Small-sample trials (100–200 ml) are cost-efficient and quickly verifiable. A panel of 5–10 tasters ensures objectivity. Fifty to 100 mini-tastings build the foundation for a final blending decision.<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:6px;">Tasting + Experimentation + Collaboration = Successful blend</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌡️ Decision Factors</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">Warm vintages: ↑ CF for freshness; cool vintages: ↑ Merlot for roundness (flexible ±10–15% adjustment). Consumer preference is driving a move toward earlier accessibility. Modern tools — spectral analysis, AI assistance, micro-oxygenation — make decisions more precise.<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:6px;">Climate + Market + Technology = Dynamic blending</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🚀 Emerging Trends</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">Old World and New World are learning from each other — the Old World modernising, the New World refining — and the boundaries are blurring. Sustainability concerns are influencing variety selection. The market is shifting from standardised to personalised and differentiated styles, giving winemakers greater freedom to express individuality.<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:6px;">Convergence + Sustainability + Identity = New-era blending</div></div>
          </div>
        </div>
      </div>
    """

# ── slides.37.content  (advanced learning pathways) ──────────────────────────
slide37_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏭 Practical Advancement</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Visit estates to observe the blending process (3–6 months); enrol in WSET/CMS workshops; purchase single-variety wines and conduct your own blending experiments; systematically build a tasting-notes database.<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">Timeline: 6–12 months · Investment: €2K–10K</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">📚 Academic Deepening</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Study wine chemistry (phenolics / anthocyanins / aromatic molecules); compare global blending philosophies; follow the latest technological developments; conduct in-depth analysis of landmark cases such as Opus One and Sassicaia.<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">Timeline: 1–2 years · Target: MW / DipWSET qualification</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💼 Commercial Application</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">Research market preference differences (Asia: soft and approachable / Europe–America: structured); learn to balance cost control with quality; master blending story-driven marketing; analyse the younger generation's growing demand for early-drinking wines.<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">Applications: estate · trade · scoring · education</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🏭</div>
            <div style="font-weight:700;font-size:0.78rem;">Practical stage</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">6–12m</div>
            <div style="font-size:0.65rem;opacity:0.85;">Workshops + placement</div>
          </div>
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">📚</div>
            <div style="font-weight:700;font-size:0.78rem;">Academic stage</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">1–2y</div>
            <div style="font-size:0.65rem;opacity:0.85;">MW / DipWSET</div>
          </div>
          <div style="background:linear-gradient(135deg,#E65100,#FF6D00);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">💼</div>
            <div style="font-weight:700;font-size:0.78rem;">Commercial</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">Ongoing</div>
            <div style="font-size:0.65rem;opacity:0.85;">Market · cost · marketing</div>
          </div>
          <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🎓</div>
            <div style="font-weight:700;font-size:0.78rem;">Lifelong learning</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">∞</div>
            <div style="font-size:0.65rem;opacity:0.85;">Exploring the art of blending</div>
          </div>
        </div>
      </div>
    """

patch_file('l3-6.json', {
    'slides.33.content': slide33_content,
    'slides.34.content': slide34_content,
    'slides.36.content': slide36_content,
    'slides.37.content': slide37_content,
})

print('Done.')
