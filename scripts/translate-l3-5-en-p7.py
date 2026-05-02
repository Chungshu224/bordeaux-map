import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.36.content — air-drying: catalyst of time
data["slides.36.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Air-drying 24–60 months: water evaporation → chemical transformation → aroma precursor release — time is the cost of complexity</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:12px;">
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌬️ Ideal Air-Drying Conditions</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.76rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· Temperature 15–25°C (avoid extremes)</div>
              <div style="margin-bottom:3px;">· Humidity 60–80% RH (microbial action)</div>
              <div style="margin-bottom:3px;">· Ventilation: avoid standing water and rot</div>
              <div style="margin-bottom:3px;">· Avoid direct rain: prevent excessive bitterness leaching</div>
              <div style="margin-bottom:3px;">· Slats spaced + regular turning for uniform drying</div>
              <div>· Top cooperages have outdoor yards spanning several hectares managing tens of thousands of staves</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">⏱️ Natural vs Kiln Drying</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <div style="background:#FFF3E0;border-radius:6px;padding:7px 9px;">
                  <div style="font-size:0.73rem;font-weight:700;color:#E65100;margin-bottom:3px;">⚡ Kiln Dry</div>
                  <div style="font-size:0.7rem;color:#555;line-height:1.7;">
                    <div>2–4 weeks</div>
                    <div>Dehydration only</div>
                    <div>Low cost</div>
                    <div style="color:#B71C1C;">Bitterness unsoftened, aroma precursors not accumulated</div>
                  </div>
                </div>
                <div style="background:#E8F5E9;border-radius:6px;padding:7px 9px;">
                  <div style="font-size:0.73rem;font-weight:700;color:#1B5E20;margin-bottom:3px;">✅ Air Dry</div>
                  <div style="font-size:0.7rem;color:#555;line-height:1.7;">
                    <div>24–60 months</div>
                    <div>Complete chemical maturation</div>
                    <div>Tannin hydrolysis + lactone precursor accumulation + bitterness softening</div>
                    <div style="color:#1B5E20;font-style:italic;">Top cooperages insist on the long natural process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:8px;padding:9px 14px;">
          <div style="color:#fff;font-size:0.76rem;line-height:1.7;">⚠️ <strong>Too short</strong> (&lt;18 months) = harsh green tannins; <strong>too long</strong> (&gt;60 months) = excessive capital tied up, diminishing returns. Golden zone: Bordeaux top cooperage standard <strong>36 months</strong> (Tronçais often 60 months).</div>
        </div>
      </div>
    """

# slides.37.content — toasting: flavour sculpting (4-column grid + advisory note)
data["slides.37.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Pyrolysis / Maillard / caramelisation multi-layer reactions determine aroma profile — four toast levels from fresh coconut to charcoal smoke</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:11px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F9A825,#FBC02D);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">L</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.72rem;">Light Toast</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;">160–180°C / 15–20 min</div>
              <div style="font-size:0.74rem;color:#333;line-height:1.75;">Initial vanillin rise<br>Coconut / fresh fruit aromas<br>Structure fully preserved</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);border:2px solid #2E7D32;">
            <div style="background:linear-gradient(135deg,#2E7D32,#43A047);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">M ⭐</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.72rem;">Medium Toast — mainstream</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;">180–200°C / 25–35 min</div>
              <div style="font-size:0.74rem;color:#333;line-height:1.75;">Vanilla + toasted nuts + light spice<br><strong style="color:#2E7D32;">Bordeaux mainstream choice</strong></div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">M+</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.72rem;">Medium-Plus Toast</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;">200–220°C / 35–45 min</div>
              <div style="font-size:0.74rem;color:#333;line-height:1.75;">Caramel / coffee / spice deepening<br>Suitable for high-concentration wines</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#455A64);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">H</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.72rem;">Heavy Toast</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;">220–250°C / 45–60 min</div>
              <div style="font-size:0.74rem;color:#333;line-height:1.75;">Charcoal / smoke / dark chocolate<br>⚠️ High risk, needs high concentration</div>
            </div>
          </div>
        </div>
        <div style="background:#E8F5E9;border-radius:8px;padding:9px 14px;border-left:4px solid #2E7D32;">
          <div style="font-size:0.76rem;color:#1B5E20;line-height:1.7;">💡 Toast level directly determines "oak intensity" — too light then aromatic integration insufficient; too heavy then variety character masked. Medium Toast (M) is the golden point for Bordeaux red wines.</div>
        </div>
      </div>
    """

# slides.38.content — toasting temperature and time stage chemistry (5-row table)
data["slides.38.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Temperature vs reaction stage vs representative aromas — the flavour transformation journey from light roast to carbonisation</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.71rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#4E342E,#6D4C41);">
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:left;border-radius:6px 0 0 0;">Temperature Range</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Time</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Reaction Stage</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Chemical Changes</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Representative Aromas</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;border-radius:0 6px 0 0;">Key Compounds</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#FFF8E1;">
                <td style="padding:7px 10px;font-weight:700;color:#F57F17;">100–140°C</td>
                <td style="padding:7px 10px;text-align:center;">0–10 min</td>
                <td style="padding:7px 10px;text-align:center;">Dehydration Preheat</td>
                <td style="padding:7px 10px;">Water evaporation, cell wall softening</td>
                <td style="padding:7px 10px;text-align:center;">No significant change</td>
                <td style="padding:7px 10px;text-align:center;">—</td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#F57F17;">140–170°C</td>
                <td style="padding:7px 10px;text-align:center;">10–20 min</td>
                <td style="padding:7px 10px;text-align:center;">Early Maillard</td>
                <td style="padding:7px 10px;">Hemicellulose initial decomposition, precursor conversion</td>
                <td style="padding:7px 10px;text-align:center;">Light baked bread</td>
                <td style="padding:7px 10px;text-align:center;">Vanillin↑ Lactones↑</td>
              </tr>
              <tr style="background:#E8F5E9;border:2px solid #2E7D32;">
                <td style="padding:7px 10px;font-weight:700;color:#1B5E20;">170–200°C ⭐</td>
                <td style="padding:7px 10px;text-align:center;font-weight:700;">20–35 min</td>
                <td style="padding:7px 10px;text-align:center;font-weight:700;color:#1B5E20;">Main Reaction Period</td>
                <td style="padding:7px 10px;">Hemicellulose large-scale cracking, furfural generation, tannin polymerisation</td>
                <td style="padding:7px 10px;text-align:center;">Vanilla almond light caramel</td>
                <td style="padding:7px 10px;text-align:center;font-weight:700;color:#1B5E20;">Furfural↑ Eugenol↑</td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#E65100;">200–230°C</td>
                <td style="padding:7px 10px;text-align:center;">35–50 min</td>
                <td style="padding:7px 10px;text-align:center;">Deep Caramelisation</td>
                <td style="padding:7px 10px;">Lignin cracking, coffee lactones generated</td>
                <td style="padding:7px 10px;text-align:center;">Caramel coffee toasted nuts</td>
                <td style="padding:7px 10px;text-align:center;">Coffee lactones↑ Vanillin peak</td>
              </tr>
              <tr style="background:#EFEBE9;">
                <td style="padding:7px 10px;font-weight:700;color:#37474F;">230–250°C+</td>
                <td style="padding:7px 10px;text-align:center;">50+ min</td>
                <td style="padding:7px 10px;text-align:center;">Carbonisation</td>
                <td style="padding:7px 10px;">Surface carbonisation, vanillin degradation, smoke phenols generated</td>
                <td style="padding:7px 10px;text-align:center;">Smoke charcoal</td>
                <td style="padding:7px 10px;text-align:center;">Smoke phenols↑ Vanillin↓</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#E8F5E9;border-radius:8px;padding:8px 13px;margin-top:10px;font-size:0.74rem;color:#1B5E20;line-height:1.7;border-left:4px solid #2E7D32;">
          ⭐ Medium Toast (170–200°C, 25–35 min) is the golden toasting point for Bordeaux top red wine barrels — vanillin + furfural reach peak values, matching rich fruit.
        </div>
      </div>
    """

# slides.39.content — François Frères two-stage toasting case study
data["slides.39.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">Core Challenge ｜ François Frères Cooperage</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">For DRC / Leroy / d'Yquem and other top estates: provide high-consistency and customised flavour profiles</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 13px;font-weight:700;font-size:0.83rem;color:#fff;">🔥 Two-Stage Toasting Craft</div>
            <div style="padding:9px 13px 11px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:6px;">
                <div style="font-weight:700;color:#B71C1C;margin-bottom:2px;">Stage 1: Slow Toast (deep layer)</div>
                <div>170–180°C × 45–60 min / deep gentle transformation, vanillin + lactones continuously accumulate</div>
              </div>
              <div style="margin-bottom:6px;">
                <div style="font-weight:700;color:#E65100;margin-bottom:2px;">Stage 2: Flash Toast (surface layer)</div>
                <div>220–240°C × 3–5 min / surface caramelisation locks in aroma, sealing deep flavours to prevent volatilisation</div>
              </div>
              <div style="background:#FFEBEE;border-radius:5px;padding:5px 8px;font-size:0.71rem;color:#C62828;">Combined with 36–60 month natural air-drying + micro-batch chemical/sensory data feedback loop</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 13px;font-weight:700;font-size:0.83rem;color:#fff;">📈 Results and Key Learnings</div>
            <div style="padding:9px 13px 11px;">
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-bottom:8px;">
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 6px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Flavour Integration</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.78rem;">+40%</div>
                </div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 6px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Body Balance</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.78rem;">+35%</div>
                </div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 6px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Repurchase Rate</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.78rem;">&gt;90%</div>
                </div>
              </div>
              <div style="font-size:0.72rem;color:#333;line-height:1.8;">
                <div style="margin-bottom:2px;">· Raw material density and drying time determine quality ceiling</div>
                <div style="margin-bottom:2px;">· Two-stage toasting balances deep and surface reactions</div>
                <div style="margin-bottom:2px;">· Custom database improves batch repeatability</div>
                <div style="margin-bottom:2px;">· Time investment (36–60 months) is complexity cost</div>
                <div>· Top partnerships based on long-term mutual trust and iterative optimisation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 36, 37, 38, 39 content.")
