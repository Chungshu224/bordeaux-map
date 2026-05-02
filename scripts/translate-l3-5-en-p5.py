import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.21.content — Sauternes science intro
data["slides.21.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          The sweet white wines of Sauternes and Barsac represent the pinnacle of winemaking. The creation of this "liquid gold" depends on the miraculous transformation by noble rot, unique microclimate conditions, and the extreme patience and skill of the winemaker.
        </p>

        <p class="intro-context">
          Unlike ordinary wines, Sauternes production is full of risk and challenge. From waiting for botrytis infection to multiple selective harvests, from the extremely slow fermentation to years of barrel ageing, every stage requires the winemaker's professional judgement and persistence. Costs are 10–20× ordinary dry white, but in return comes legendary wine capable of ageing for a century.
        </p>

        <h3 class="section-title">In-Depth Analysis of This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🍄 Biological Mechanism of Noble Rot</h4>
            <p>Understand how Botrytis cinerea transforms grapes, master the key differences between noble rot and grey mould, and the required environmental conditions</p>
          </div>

          <div class="point-item">
            <h4>🌫️ Unique Microclimate Conditions</h4>
            <p>Recognise the unique fog environment of Sauternes, understand how the confluence of the Garonne and Ciron rivers creates ideal conditions</p>
          </div>

          <div class="point-item">
            <h4>🍇 Strategy and Challenges of Selective Harvesting</h4>
            <p>Learn why 6–10 (or more) harvests are needed, understand how to assess optimal botrytis level, grasp economic and technical considerations</p>
          </div>

          <div class="point-item">
            <h4>⚗️ Technical Challenges of High-Sugar Fermentation</h4>
            <p>Master the management of extremely slow fermentation (4–8 months), understand the impact of high osmotic pressure on yeast, learn how to balance sweetness and alcohol level</p>
          </div>

          <div class="point-item">
            <h4>👑 Château d'Yquem Ultimate Quality Model</h4>
            <p>Analyse the winemaking decisions of the world's finest sweet wine, understand the "quality over quantity" philosophy, explore investment value and market positioning</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Studying this chapter, you will understand why Sauternes can remain vibrant after a century of ageing, and why this "liquid gold" is so precious. This is not merely wine but an artwork co-created by the winemaker and nature.
        </p>
      </div>
    """

# slides.23.content — Château d'Yquem case study
data["slides.23.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">Core Challenge</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">How to consistently produce top sweet whites with 50–100 year ageing potential under high-risk climate and extreme costs?</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🛠 Key Practices + Cost Thinking</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· Multiple (6–8+) selective harvests ensure botrytis uniformity</div>
              <div style="margin-bottom:3px;">· All-new barrels long maturation + no MLF to retain acid tension</div>
              <div style="margin-bottom:3px;">· Strict batch <strong>sensory + chemical dual screening</strong></div>
              <div style="margin-bottom:3px;">· No production in poor vintages (e.g. 2012 no grand vin)</div>
              <div style="margin-bottom:8px;">· Second label (dry white) flexibly absorbs batches not meeting grand vin standard</div>
              <div style="background:#FFF3E0;border-radius:5px;padding:5px 9px;font-size:0.71rem;color:#E65100;line-height:1.75;">
                <div style="font-weight:700;margin-bottom:2px;">💰 Cost Structure</div>
                <div>· Yield only ~⅓ of AOC limit (≈9 hL/ha vs 25 hL/ha)</div>
                <div>· Approx. 1 glass of wine per vine</div>
                <div>· Long-term brand capital &gt; short-term cash flow</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🏆 Quality Outcomes + Market Position</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· Sensory: <strong>rich layers + elongated acid backbone + silky viscosity</strong></div>
              <div style="margin-bottom:3px;">· Ageing: 50–100 years (great vintages &gt;150 years still vibrant)</div>
              <div style="margin-bottom:8px;">· Current vintages €300–400, great vintages €500–800, historic vintages auction €10K+</div>
              <div style="background:#F3E5F5;border-radius:5px;padding:5px 9px;font-size:0.71rem;color:#6A1B9A;line-height:1.75;">
                <div style="font-weight:700;margin-bottom:2px;">🍯 Flavour Signature</div>
                <div>Honey · apricot · mango · candied citrus · caramel</div>
                <div>Saffron · spices · beeswax notes</div>
                <div style="margin-top:3px;color:#555;">Acidity support makes sweet without cloying, lingering finish</div>
              </div>
            </div>
          </div>
        </div>
        <div style="font-size:0.75rem;font-weight:700;color:#555;margin-bottom:6px;">💡 Key Learnings</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:#FFF9C4;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#F57F17;line-height:1.65;"><strong>Moat Thinking</strong><br><span style="color:#555;">Extreme standards + rejection rate is core guarantee of brand capital</span></div>
          <div style="background:#FFF3E0;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#E65100;line-height:1.65;"><strong>New Barrel Prerequisite</strong><br><span style="color:#555;">High new barrel ratio requires sufficient raw material concentration to support, otherwise counterproductive</span></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#2E7D32;line-height:1.65;"><strong>Quality over Quantity</strong><br><span style="color:#555;">Not producing in poor vintage years yields far greater long-term brand returns than short-term cash flow loss</span></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#1565C0;line-height:1.65;"><strong>Human-Machine Collaboration</strong><br><span style="color:#555;">Optical sorting technology assists rather than replaces guided manual judgement</span></div>
        </div>
      </div>
    """

# slides.26.content — Part 2 completion slide
data["slides.26.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);border-radius:12px;padding:13px 18px;margin-bottom:12px;text-align:center;">
          <div style="font-size:1.8rem;margin-bottom:5px;">🍯</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;">Part 2 Complete!</div>
          <div style="color:rgba(255,255,255,0.9);font-size:0.78rem;margin-top:4px;">Congratulations on completing the advanced module on sweet wine production and noble rot science! From botrytis formation to sugar-acid balance management, you have mastered the core code of Sauternes.</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">▶️ Next Steps</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">→ Proceed to Part 3A: Oak Barrel Science Fundamentals</div>
                <div style="margin-bottom:4px;">→ Review botrytis formation conditions and harvest strategy differences</div>
                <div style="margin-bottom:4px;">→ Vertical tasting to observe ageing evolution</div>
                <div>→ Compare Tokaji / TBA and Sauternes styles</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">✅ Learning Achievements</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">☑️ Understanding botrytis vs grey mould environmental differentiation mechanism</div>
                <div style="margin-bottom:4px;">☑️ Mastering high-sugar long fermentation management challenges and strategies</div>
                <div style="margin-bottom:4px;">☑️ Evaluating Sauternes economics and risk model</div>
                <div>☑️ Analysing Château d'Yquem quality decision matrix</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """

# slides.29.content — learning objectives for oak (3+2 grid)
data["slides.29.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌳</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Oak Biology Fundamentals</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Understand the relationship between species, growth rings, tissue structure and aroma release; compare European oak vs American oak characteristics.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🔥</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Air-Drying and Toasting Craft</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Master the influence path of drying time and toasting temperature on compound transformation; understand the science of pyrolysis, Maillard reaction and caramelisation.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🧪</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Compound Extraction Kinetics</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Analyse release rates and sequence of vanillin, lactones and eugenol key molecules; understand the pattern of fastest extraction in the first 6–12 months.</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">📊</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">New/Used Barrel Strategy Evaluation</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Learn how to configure new barrel ratio, manage batch differences; grasp decision logic and risk-reward of top château barrel ageing strategies.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🏭</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Top Cooperage Craft</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Know Taransaud, Seguin Moreau cooperages; understand material selection, drying cycles and custom toasting programme craft heritage.</div>
          </div>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 21, 23, 26, 29 content.")
