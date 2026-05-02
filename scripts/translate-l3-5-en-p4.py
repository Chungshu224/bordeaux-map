import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.16.content — three principles of traditional winemaking (3-column grid)
data["slides.16.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:12px 14px;">
              <div style="color:#fff;font-size:1.5rem;margin-bottom:4px;">🌿</div>
              <div style="color:#fff;font-weight:700;font-size:0.90rem;">Minimal Intervention</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Minimal Intervention</div>
            </div>
            <div style="padding:11px 14px 13px;">
              <div style="font-size:0.79rem;color:#333;line-height:1.85;margin-bottom:8px;">Minimise human intervention, preserve authentic expression of grapes and terroir.</div>
              <div style="background:#E8F5E9;border-radius:5px;padding:5px 9px;font-size:0.74rem;color:#1B5E20;line-height:1.65;">Avoid over-processing causing aroma degradation and stylistic homogenisation.</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#7B1FA2,#9C27B0);padding:12px 14px;">
              <div style="color:#fff;font-size:1.5rem;margin-bottom:4px;">💎</div>
              <div style="color:#fff;font-weight:700;font-size:0.90rem;">Quality First</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Quality First</div>
            </div>
            <div style="padding:11px 14px 13px;">
              <div style="font-size:0.79rem;color:#333;line-height:1.85;margin-bottom:8px;">Rather go without than compromise; strictly select every grape, maintain high quality standards.</div>
              <div style="background:#F3E5F5;border-radius:5px;padding:5px 9px;font-size:0.74rem;color:#7B1FA2;line-height:1.65;">Rejection rate can reach 10–30%; quality is the only standard for flagship wines.</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:12px 14px;">
              <div style="color:#fff;font-size:1.5rem;margin-bottom:4px;">⏳</div>
              <div style="color:#fff;font-weight:700;font-size:0.90rem;">Technique Heritage</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Technique Heritage</div>
            </div>
            <div style="padding:11px 14px 13px;">
              <div style="font-size:0.79rem;color:#333;line-height:1.85;margin-bottom:8px;">Follow empirically validated methods, approach change with caution, let time complete integration.</div>
              <div style="background:#EFEBE9;border-radius:5px;padding:5px 9px;font-size:0.74rem;color:#4E342E;line-height:1.65;">Technique is centuries of crystallised wisdom, not to be lightly discarded.</div>
            </div>
          </div>
        </div>
      </div>
    """

# slides.17.content — traditional clarification and processing methods (2×2 grid)
data["slides.17.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:12px;">
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0288D1);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">⏬ Natural Settling (Gravity Clarification)</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">Use gravity to allow impurities to naturally settle, requires patiently resting <strong>24–48 hours</strong>. No chemical agents needed, preserves the wine's natural character.</div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#006064,#00838F);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🔄 Manual Racking (Racking)</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">Carefully transfer clear wine to new containers, <strong>avoiding disturbing the sediment at the bottom</strong>. Usually every 3–4 months, promotes micro-oxygenation and purification.</div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4A148C,#6A1B9A);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🥚 Protein Fining (egg white / fish glue)</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">Use natural fining agents to remove harsh tannins and suspended matter, <strong>traditional and effective</strong>. Classified growths typically use 2–6 egg whites per barrel.</div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌿 Retaining Stems (optional)</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">In mature vintages retain <strong>5–15% of stems</strong> to add structure and freshness, but must ensure maturity to avoid green/harsh notes.</div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#263238,#37474F);border-radius:8px;padding:9px 14px;">
          <div style="color:#fff;font-size:0.78rem;line-height:1.7;">📌 Traditional methods emphasise stability and integration, slower but more restrained style · Modern technology can supplement, but the core remains respect for raw materials and time</div>
        </div>
      </div>
    """

# slides.18.content — birth of liquid gold (Sauternes overview)
data["slides.18.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Sauternes produces the world's most complex, most expensive, longest-ageing sweet whites — dependent on a special fungus and centuries of winemaking wisdom</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#5D4037,#6D4C41);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">🍄</span>
              <div style="color:#fff;font-weight:700;font-size:0.83rem;">The Noble Rot Miracle</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.8;">
              Under specific conditions, <em>Botrytis cinerea</em> penetrates grape skin without destroying the fruit, promotes water evaporation, <strong>concentrates sugars, acidity and flavour compounds</strong>, and produces unique aromatic molecules. The same fungus without drying conditions becomes destructive grey mould.
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">🌫️</span>
              <div style="color:#fff;font-weight:700;font-size:0.83rem;">Unique Microclimate</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.8;">
              At the confluence of the Garonne and Ciron rivers — the cold Ciron water creates <strong>morning mist</strong> in autumn (providing humidity for noble rot), afternoon sunlight disperses fog (preventing grey mould outbreak). This "morning wet → afternoon dry" microclimate is <strong>extremely rare globally</strong>.
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">⏳</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Long High-Risk Harvest</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.8;">
              <div style="margin-bottom:2px;">· Harvest period 6–10 weeks</div>
              <div style="margin-bottom:2px;">· 6–8 selective harvests (sometimes 10+)</div>
              <div style="margin-bottom:2px;">· Each time picking only optimally botrytised grapes</div>
              <div>· Extremely low yield: approx. 1 glass of wine per vine</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">⚗️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Extremely Slow Fermentation</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.8;">
              High sugar (300–450 g/L) creates high osmotic pressure, fermentation may last <strong>months</strong>. Alcohol rises to 13–14% then stops, leaving 120–150 g/L residual sugar. Cost is <strong>10–20× that of regular dry white</strong>.
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">💰</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Sky-High Price and Longevity</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.8;">
              Top Sauternes (d'Yquem) priced at <strong>€300–1,000/375ml</strong>, still vibrant after decades to a century. Not just wine — consumable art and investment object.
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);border-radius:8px;padding:9px 14px;">
          <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-bottom:5px;">📚 Focus Topics of This Course Part 2</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🍄<br>Botrytis<br>Biology</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🍇<br>Selective Harvest<br>Strategy</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">⚗️<br>High-Sugar<br>Fermentation</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🪵<br>Oak Barrel<br>Role</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🏆<br>d'Yquem<br>Case Analysis</div>
          </div>
        </div>
      </div>
    """

# slides.19.content — learning objectives for sweet wine (3+2 grid)
data["slides.19.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#F9A825);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍄</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Botrytis Biological Mechanism</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Master how Botrytis cinerea transforms grapes, recognise key differences between noble rot and grey mould, and required environmental conditions.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍇</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Selective Harvest Strategy</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Understand why 6–8 harvests are needed, how to assess optimal botrytis level, grasp economic and technical considerations of multiple harvests.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">⚗️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Challenges of High-Sugar Fermentation</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Learn physiological limitations of yeast in high-sugar environments, fermentation arrest issues, and how to balance sweetness and alcohol level.</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">💰</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Economics of Sweet Wine Production</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Analyse cost structure, risk factors, pricing strategy; understand why top Sauternes can cost €300+/375ml.</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🏆</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">Appreciating Top Sauternes</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">Learn to evaluate complexity, sweet-acid balance, ageing potential of sweet wines; analyse Château d'Yquem's quality decision matrix.</div>
          </div>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 16, 17, 18, 19 content.")
