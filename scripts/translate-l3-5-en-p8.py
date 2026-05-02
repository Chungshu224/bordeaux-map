import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.41.content — oak barrel science overall review
data["slides.41.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Ultimate goal: serve appellation/variety expression, not overwhelm — oak barrel is a tool, not the protagonist</div>
        <div style="background:linear-gradient(135deg,#3E2723,#4E342E);border-radius:10px;padding:10px 14px;margin-bottom:12px;">
          <div style="color:rgba(255,255,255,0.85);font-size:0.73rem;margin-bottom:6px;">6-Step Integration Sequence</div>
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;text-align:center;">🌳<br>Species<br>Selection</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;text-align:center;">🗺️<br>Region<br>Pairing</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;text-align:center;">🌬️<br>Air-<br>Drying</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;text-align:center;">🔥<br>Toast<br>Level</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;text-align:center;">📊<br>New Barrel<br>Strategy</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;text-align:center;">⏳<br>Time<br>Curve</div>
          </div>
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:#4E342E;margin-bottom:8px;">Decision Architecture</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:9px;">
          <div style="background:#EFEBE9;border-radius:8px;padding:9px 10px;">
            <div style="font-size:0.75rem;font-weight:700;color:#4E342E;margin-bottom:4px;">① Target Style</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.7;">
              <div>· Variety character</div>
              <div>· Appellation personality</div>
              <div>· Market positioning</div>
            </div>
          </div>
          <div style="background:#FFF3E0;border-radius:8px;padding:9px 10px;">
            <div style="font-size:0.75rem;font-weight:700;color:#E65100;margin-bottom:4px;">② Fruit Concentration</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.7;">Assess whether raw material can support new barrel ratio (insufficient concentration → oak overwhelms fruit)</div>
          </div>
          <div style="background:#E8F5E9;border-radius:8px;padding:9px 10px;">
            <div style="font-size:0.75rem;font-weight:700;color:#1B5E20;margin-bottom:4px;">③ Ageing Needs</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.7;">
              <div>· New barrel ratio</div>
              <div>· Toast intensity</div>
              <div>· Region pairing</div>
            </div>
          </div>
          <div style="background:#E3F2FD;border-radius:8px;padding:9px 10px;">
            <div style="font-size:0.75rem;font-weight:700;color:#1565C0;margin-bottom:4px;">④ Iterative Tracking</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.7;">Sensory + chemical data feedback loop validation</div>
          </div>
        </div>
      </div>
    """

# slides.42.content — Part 3A completion slide
data["slides.42.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:12px;padding:13px 18px;margin-bottom:12px;text-align:center;">
          <div style="font-size:1.8rem;margin-bottom:5px;">🪵</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;">Part 3A Complete!</div>
          <div style="color:rgba(255,255,255,0.9);font-size:0.78rem;margin-top:4px;">Congratulations on completing the oak barrel science module! From species to toasting, you have mastered the barrel code that shapes wine style.</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">▶️ Next Steps</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">→ Proceed to Part 3B: Modern Winemaking Technology</div>
                <div style="margin-bottom:4px;">→ Review different region vs toast combination differences</div>
                <div>→ Build your own barrel management record sheet</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">✅ Learning Achievements</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">☑️ Understanding species/region differences</div>
                <div style="margin-bottom:4px;">☑️ Mastering air-drying/toasting science</div>
                <div style="margin-bottom:4px;">☑️ Evaluating new barrel strategy risk-reward</div>
                <div style="margin-bottom:4px;">☑️ Getting acquainted with top cooperage craft</div>
                <div>☑️ Building decision and evaluation framework</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """

# slides.45.content — learning objectives modern winemaking technology (3+2 grid)
data["slides.45.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🔍</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Modern Sorting Technology</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Master optical sorting, X-Ray and AI model principles and limitations; understand efficiency and precision leap from manual to AI.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌡️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Precision Fermentation Control</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Understand temperature control ±0.1°C, oxygen management, automated stirring/pump-over systems; learn PID predictive control science.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍷</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Post-Processing Technology Innovation</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Evaluate membrane filtration, reverse osmosis and freeze concentration technology quality impact, regulatory limits and usage boundaries.</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">📈</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Data Analysis Applications</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Explore how real-time monitoring transforms into risk prediction and optimised decisions; learn best practices of data-driven winemaking.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">⚖️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Balancing Tradition and Innovation</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Understand how technology tools serve terroir expression; recognise philosophical debate and industry consensus boundaries of different technologies.</div>
          </div>
        </div>
      </div>
    """

# slides.47.content — modern sorting technology intro
data["slides.47.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          Raw material quality is the first critical checkpoint determining wine quality. Modern sorting technology has evolved from traditional hand selection to optical sorting, X-ray detection, even AI image recognition, greatly improving screening efficiency and precision.
        </p>

        <p class="intro-context">
          One poor-quality grape can ruin a whole barrel of wine. Traditional hand sorting is thorough but slow (100 kg/person/hour) and prone to fatigue. Modern optical sorting can handle 3–8 tonnes/hour with 95–97% accuracy, allowing top châteaux to greatly improve efficiency while maintaining quality control. Investment is high (€200K–1.5M), but the contribution to quality improvement is immeasurable.
        </p>

        <h3 class="section-title">Topics Explored in This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🔍 Optical Sorting Principles and Advantages</h4>
            <p>Multi-spectral analysis + high-speed camera, 3–8 t/h — understanding how optical sorting achieves 95–97% accuracy</p>
          </div>

          <div class="point-item">
            <h4>⚙️ X-Ray Internal Defect Detection</h4>
            <p>97–99% accuracy, suitable for top-grade selection — precise identification of internal defects invisible to optical methods</p>
          </div>

          <div class="point-item">
            <h4>🧠 AI Deep Learning Applications</h4>
            <p>Continuously optimises sorting standards, builds plot/vintage fingerprint database — how machine learning improves over time</p>
          </div>

          <div class="point-item">
            <h4>📊 ROI Analysis</h4>
            <p>Capital expenditure €0 to €1.5M — understanding cost-benefit decision logic at different production scales</p>
          </div>

          <div class="point-item">
            <h4>🏆 Château Margaux Upgrade Case Study</h4>
            <p>+300% processing efficiency — how systematic technology deployment transforms raw material quality control</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Learning these technologies, you will understand how modern châteaux ensure raw material consistency while using technology to improve efficiency without losing precision quality control. This is a model example of perfect combination of traditional craft and modern technology.
        </p>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 41, 42, 45, 47 content.")
