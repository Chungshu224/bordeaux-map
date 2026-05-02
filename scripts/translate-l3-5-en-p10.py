import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.56.content — post-processing innovation intro
data["slides.56.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          The post-processing stage after fermentation is equally important. Modern technologies such as membrane filtration, reverse osmosis and freeze concentration provide winemakers with more options, but how to apply these technologies while preserving terroir character remains an art.
        </p>

        <p class="intro-context">
          Post-processing technology is a double-edged sword. Membrane filtration can improve stability and preserve flavour, but while reverse osmosis concentration can boost concentration it may alter authentic terroir expression. 60% of Bordeaux châteaux use membrane filtration, but only 30% occasionally use RO, and 5% experiment with freeze concentration. Technology selection is not only a scientific decision but involves winemaking philosophy, regulatory constraints and ethical boundaries.
        </p>

        <h3 class="section-title">Key Learning Points of This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 Membrane Filtration Technology Family</h4>
            <p>Cross-flow, UF, MF, NF principles and applications, reducing wine loss 1–2% and chemical agent dependence</p>
          </div>

          <div class="point-item">
            <h4>🔄 Controversy of Reverse Osmosis Concentration</h4>
            <p>RO technology at 30–80 bar, +2% vol regulatory limit, "altering composition ratios" terroir authenticity debate</p>
          </div>

          <div class="point-item">
            <h4>❄️ Advantages and Challenges of Freeze Concentration</h4>
            <p>Low-temperature physical separation for high aroma retention, high energy consumption €0.30–0.80/L, wine loss 10–25%</p>
          </div>

          <div class="point-item">
            <h4>📊 Quality Impact of Different Technologies</h4>
            <p>Membrane filtration positive stabilising, RO concentration boost but aroma loss risk, freeze high retention but extreme cost</p>
          </div>

          <div class="point-item">
            <h4>⚖️ Regulatory Limits and Ethical Boundaries</h4>
            <p>EU and AOC regulations, "technology tool vs terroir expression" philosophical debate — where to draw the line</p>
          </div>
        </div>

        <p class="intro-conclusion">
          After completing this chapter, you will be able to view traditional and modern technology choices in a balanced way, understand why some technologies are widely accepted while others remain controversial, and how to find the balance between technological progress and terroir respect.
        </p>
      </div>
    """

# slides.58.content — post-processing comprehensive assessment (3-column card grid)
data["slides.58.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Investment / Energy / Wine Loss / Quality Impact — the selection logic of Bordeaux post-processing technology</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:11px;margin-bottom:11px;">
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🧬 Membrane Filtration</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.71rem;">Clarification/Protein Stabilisation/Microbial Control</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="font-size:0.72rem;color:#333;line-height:1.85;">
                <div style="margin-bottom:3px;">Investment: <strong>€200–800K</strong></div>
                <div style="margin-bottom:3px;">Cost: <strong>€0.05–0.15/L</strong></div>
                <div style="margin-bottom:3px;">Speed: <strong>1–5 KL/h</strong></div>
                <div style="margin-bottom:5px;">Wine loss: <span style="background:#C8E6C9;border-radius:4px;padding:1px 5px;color:#1B5E20;font-weight:600;">1–2%</span></div>
                <div style="background:#E3F2FD;border-radius:5px;padding:5px 8px;font-size:0.71rem;color:#1565C0;line-height:1.65;">✅ Positive: stability + preserve flavour<br>Bordeaux adoption <strong>60%</strong></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🔄 RO Reverse Osmosis</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.71rem;">Concentration/Alcohol Adjustment</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="font-size:0.72rem;color:#333;line-height:1.85;">
                <div style="margin-bottom:3px;">Investment: <strong>€300–600K</strong></div>
                <div style="margin-bottom:3px;">Cost: <strong>€0.20–0.50/L</strong></div>
                <div style="margin-bottom:3px;">Speed: <strong>0.5–2 KL/h</strong></div>
                <div style="margin-bottom:5px;">Wine loss: <span style="background:#FFE0B2;border-radius:4px;padding:1px 5px;color:#E65100;font-weight:600;">5–15%</span></div>
                <div style="background:#FFF3E0;border-radius:5px;padding:5px 8px;font-size:0.71rem;color:#E65100;line-height:1.65;">⚠️ Regulatory +2% vol limit<br>Bordeaux adoption <strong>30% occasional</strong></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">❄️ Freeze Concentration</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.71rem;">Sweet Wine/Alcohol Fine Adjustment</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="font-size:0.72rem;color:#333;line-height:1.85;">
                <div style="margin-bottom:3px;">Investment: <strong>€300K–1M</strong></div>
                <div style="margin-bottom:3px;">Cost: <strong>€0.30–0.80/L</strong></div>
                <div style="margin-bottom:3px;">Speed: <strong>0.2–1 KL/h</strong></div>
                <div style="margin-bottom:5px;">Wine loss: <span style="background:#FFCDD2;border-radius:4px;padding:1px 5px;color:#B71C1C;font-weight:600;">10–25%</span></div>
                <div style="background:#E0F2F1;border-radius:5px;padding:5px 8px;font-size:0.71rem;color:#00695C;line-height:1.65;">✅ Highest aroma retention<br>Bordeaux adoption <strong>5% experimental</strong></div>
              </div>
            </div>
          </div>
        </div>
        <div style="background:#E8F5E9;border-radius:8px;padding:9px 14px;border-left:4px solid #2E7D32;">
          <div style="font-size:0.76rem;color:#1B5E20;line-height:1.7;">💡 Strategic recommendation: membrane filtration is the most widely applicable and safe choice; RO is a cautious tool for special vintages; freeze concentration currently remains frontier experimentation.</div>
        </div>
      </div>
    """

# slides.61.content — Part 3B completion slide
data["slides.61.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4A148C,#6A1B9A);border-radius:12px;padding:13px 18px;margin-bottom:12px;text-align:center;">
          <div style="font-size:1.8rem;margin-bottom:5px;">🔬</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;">Part 3B Complete!</div>
          <div style="color:rgba(255,255,255,0.9);font-size:0.78rem;margin-top:4px;">Congratulations on completing the modern winemaking technology module! From sorting to post-processing, you have mastered the data-driven winemaking decision framework.</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">▶️ Next Steps</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">→ Review ROI and style impact of each technology</div>
                <div style="margin-bottom:4px;">→ Build your own data metrics dashboard</div>
                <div>→ Plan next year's investment roadmap</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">✅ Learning Achievements</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">☑️ Mastering core sorting and fermentation control technology</div>
                <div style="margin-bottom:4px;">☑️ Evaluating membrane/concentration/freeze technology boundaries</div>
                <div style="margin-bottom:4px;">☑️ Building technology adoption decision framework</div>
                <div>☑️ Balancing terroir and technology principles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 56, 58, 61 content.")
