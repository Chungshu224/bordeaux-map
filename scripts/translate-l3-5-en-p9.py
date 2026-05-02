import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l3-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

# slides.49.content — sorting technology comparison table (6-row table, red header)
data["slides.49.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Speed / Accuracy / Cost / Applicable Scenarios — evolution of grape sorting technology from manual to AI</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.72rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#B71C1C,#C62828);">
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:left;border-radius:6px 0 0 0;">Technology Type</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Speed</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Accuracy</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Capital Expenditure</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;">Applicable Scale</th>
                <th style="padding:8px 10px;color:#fff;font-weight:700;text-align:center;border-radius:0 6px 0 0;">Maturity</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#FFF8E1;">
                <td style="padding:7px 10px;font-weight:700;">👤 Manual</td>
                <td style="padding:7px 10px;text-align:center;">100 kg/h/person</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#FFF176;border-radius:4px;padding:2px 6px;color:#F57F17;font-weight:600;">60–80%</span></td>
                <td style="padding:7px 10px;text-align:center;color:#2E7D32;font-weight:600;">€0</td>
                <td style="padding:7px 10px;text-align:center;">Any scale</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#C8E6C9;border-radius:4px;padding:2px 6px;color:#1B5E20;">Mature</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;">🔀 Vibration+Wind</td>
                <td style="padding:7px 10px;text-align:center;">500 kg/h</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#FFF176;border-radius:4px;padding:2px 6px;color:#F57F17;font-weight:600;">70–85%</span></td>
                <td style="padding:7px 10px;text-align:center;">€20–50K</td>
                <td style="padding:7px 10px;text-align:center;">Medium-large</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#C8E6C9;border-radius:4px;padding:2px 6px;color:#1B5E20;">Mature</span></td>
              </tr>
              <tr style="background:#E8F5E9;">
                <td style="padding:7px 10px;font-weight:700;">💡 Optical</td>
                <td style="padding:7px 10px;text-align:center;"><strong>3–8 t/h</strong></td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#A5D6A7;border-radius:4px;padding:2px 6px;color:#1B5E20;font-weight:700;">95–97%</span></td>
                <td style="padding:7px 10px;text-align:center;">€200–500K</td>
                <td style="padding:7px 10px;text-align:center;">Large</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#C8E6C9;border-radius:4px;padding:2px 6px;color:#1B5E20;">Mature</span></td>
              </tr>
              <tr style="background:#E3F2FD;">
                <td style="padding:7px 10px;font-weight:700;">☢️ X-Ray</td>
                <td style="padding:7px 10px;text-align:center;">1–2 t/h</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#90CAF9;border-radius:4px;padding:2px 6px;color:#1565C0;font-weight:700;">97–99%</span></td>
                <td style="padding:7px 10px;text-align:center;">€500K–1M</td>
                <td style="padding:7px 10px;text-align:center;">Top châteaux</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#FFE0B2;border-radius:4px;padding:2px 6px;color:#E65100;">Emerging</span></td>
              </tr>
              <tr style="background:#E3F2FD;">
                <td style="padding:7px 10px;font-weight:700;">🤖 AI Sorting</td>
                <td style="padding:7px 10px;text-align:center;">2–5 t/h</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#90CAF9;border-radius:4px;padding:2px 6px;color:#1565C0;font-weight:700;">97–99%</span></td>
                <td style="padding:7px 10px;text-align:center;">€300–800K</td>
                <td style="padding:7px 10px;text-align:center;">High-end</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#C8E6C9;border-radius:4px;padding:2px 6px;color:#1B5E20;">Rapidly growing</span></td>
              </tr>
              <tr style="background:#F3E5F5;border:2px solid #7B1FA2;">
                <td style="padding:7px 10px;font-weight:700;color:#7B1FA2;">🔗 Multi-Technology Combination</td>
                <td style="padding:7px 10px;text-align:center;">2–8 t/h</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#6A1B9A;border-radius:4px;padding:2px 6px;color:#fff;font-weight:700;">99%+</span></td>
                <td style="padding:7px 10px;text-align:center;">€500K–1.5M</td>
                <td style="padding:7px 10px;text-align:center;">Flagship estates</td>
                <td style="padding:7px 10px;text-align:center;"><span style="background:#CE93D8;border-radius:4px;padding:2px 6px;color:#4A148C;font-weight:600;">Cutting-edge</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#E3F2FD;border-radius:8px;padding:8px 13px;margin-top:10px;font-size:0.74rem;color:#1565C0;line-height:1.7;">
          💡 Top château trend: Manual + Optical + AI multiple combinations, pushing accuracy to 99%+, every grape is rigorously scrutinised.
        </div>
      </div>
    """

# slides.50.content — Château Margaux sorting upgrade case study
data["slides.50.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">Core Challenge ｜ Château Margaux</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">Balancing traditional refinement + modern efficiency — how to upgrade sorting capacity without sacrificing quality?</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🔍 Four-Layer Sorting Process</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:4px;"><strong style="color:#1565C0;">① Three-layer mechanical pre-sorting</strong><br>Vibrating screen → wind selection → roller screening, quickly remove stems/leaves</div>
              <div style="margin-bottom:4px;"><strong style="color:#1976D2;">② Optical main sorting</strong><br>CCD camera + colour/NIR analysis → precisely eject defective grapes</div>
              <div style="margin-bottom:4px;"><strong style="color:#0288D1;">③ AI model fine-tuning</strong><br>Dynamically optimise sorting parameters based on vintage batch data</div>
              <div><strong style="color:#0097A7;">④ Manual final inspection + batch feedback loop</strong><br>Final quality control, sorting data feeds back to AI for continuous learning</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">📈 Upgrade Results</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:8px;">
                <div style="background:#E8F5E9;border-radius:6px;padding:7px 9px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Processing Efficiency</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.85rem;">+300%</div>
                </div>
                <div style="background:#E8F5E9;border-radius:6px;padding:7px 9px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Defect Detection</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.85rem;">Greatly Improved</div>
                </div>
                <div style="background:#E8F5E9;border-radius:6px;padding:7px 9px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Wine Quality Stability</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.85rem;">Greatly Enhanced</div>
                </div>
                <div style="background:#E8F5E9;border-radius:6px;padding:7px 9px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">Labour Costs</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.85rem;">Significantly Reduced</div>
                </div>
              </div>
              <div style="background:#F1F8E9;border-radius:5px;padding:5px 8px;font-size:0.71rem;color:#33691E;">📌 Each harvest's sorting data feeds back to the AI model, accuracy continuously accumulates and improves across vintages.</div>
            </div>
          </div>
        </div>
        <div style="font-size:0.75rem;font-weight:700;color:#555;margin-bottom:6px;">💡 Key Learnings</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:#E3F2FD;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#1565C0;line-height:1.65;"><strong>Phased Technology Introduction</strong><br><span style="color:#555;">Each stage technology is verified before adding next layer, reduces failure risk</span></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#1B5E20;line-height:1.65;"><strong>Data-Driven</strong><br><span style="color:#555;">Raw material sorting data deepens fermentation strategy, forms closed loop</span></div>
          <div style="background:#F3E5F5;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#6A1B9A;line-height:1.65;"><strong>Human-Machine Collaboration</strong><br><span style="color:#555;">Superior to any single technology path, complementary strengths</span></div>
          <div style="background:#FFF3E0;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#E65100;line-height:1.65;"><strong>Batch Traceability</strong><br><span style="color:#555;">Establishes long-term quality assets rather than one-time improvement</span></div>
        </div>
      </div>
    """

# slides.52.content — precision fermentation control intro
data["slides.52.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          Fermentation is the most critical stage of winemaking. Modern fermentation control technology combines traditional empirical judgement with precision sensors and automation systems, achieving unprecedented stability and reproducibility.
        </p>

        <p class="intro-context">
          A 1°C temperature difference can change aroma retention and extraction efficiency; fermentation stalling can cause an entire barrel to be discarded. Modern systems achieve ±0.1°C precision control through multi-point PT100 sensors, combined with PID predictive models for automatic adjustment, elevating the fermentation process from "art" to "controllable science". This does not replace the winemaker's experience, but allows experience to be precisely executed.
        </p>

        <h3 class="section-title">Core Content of This Chapter</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌡️ Precision Temperature Monitoring System</h4>
            <p>Multi-point PT100 sensors ±0.1°C, jacket and internal cooling coil coordination, predictive curves to avoid temperature peaks</p>
          </div>

          <div class="point-item">
            <h4>📊 Real-Time Fermentation Kinetics Tracking</h4>
            <p>Online densimeter monitors density/sugar changes, precision ±0.001, 48-hour no-drop stall warning</p>
          </div>

          <div class="point-item">
            <h4>🔄 Programmable Automatic Pump-Over System</h4>
            <p>Frequency/intensity/timing window settings, reduce human variation, strengthen reproducibility across batches and vintages</p>
          </div>

          <div class="point-item">
            <h4>🧪 PID Control and Predictive Models</h4>
            <p>Proportional-integral-derivative control for precise adjustment, predictive model to pre-empt fermentation changes before they occur</p>
          </div>

          <div class="point-item">
            <h4>🔄 Rotary Fermentation Tank Innovation</h4>
            <p>Improves skin contact efficiency, shortens maceration cycle, only for high-value batches — cost-benefit considerations</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Mastering these technologies, you will understand how modern châteaux precisely control the fermentation process, improving quality stability while maintaining traditional style. This is best practice in data-driven winemaking.
        </p>
      </div>
    """

# slides.54.content — modern fermentation monitoring system (3-column card grid)
data["slides.54.content"] = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Key parameters → early warning → quality assurance — data-driven fermentation management</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:11px;">
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🌡️ Temperature Monitoring</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Multi-point PT100 sensors</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:4px;margin-bottom:7px;">
                <div style="background:#FFEBEE;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#C62828;"><strong>Frequency:</strong> Continuous real-time</div>
                <div style="background:#FFEBEE;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#C62828;"><strong>Accuracy:</strong> ±0.1°C</div>
                <div style="background:#FFEBEE;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#C62828;" colspan="2"><strong>Warning:</strong> Exceeds threshold ±1°C</div>
              </div>
              <div style="font-size:0.74rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:2px;">⚡ Automatic cooling/heating adjustment</div>
                <div>Affects extraction efficiency and aroma retention</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">⚖️ Density/Sugar</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Online densimeter</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:4px;margin-bottom:7px;">
                <div style="background:#E3F2FD;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#1565C0;"><strong>Frequency:</strong> Real-time or daily</div>
                <div style="background:#E3F2FD;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#1565C0;"><strong>Accuracy:</strong> ±0.001</div>
                <div style="background:#E3F2FD;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#1565C0;" colspan="2"><strong>Warning:</strong> 48h no decrease</div>
              </div>
              <div style="font-size:0.74rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:2px;">⚡ Stall automatic warning</div>
                <div>Determines fermentation progress and endpoint</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🧪 pH Monitoring</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Online electrode sensor</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:4px;margin-bottom:7px;">
                <div style="background:#E8F5E9;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#1B5E20;"><strong>Frequency:</strong> Daily</div>
                <div style="background:#E8F5E9;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#1B5E20;"><strong>Accuracy:</strong> ±0.02</div>
                <div style="background:#E8F5E9;border-radius:4px;padding:4px 6px;font-size:0.69rem;color:#1B5E20;" colspan="2"><strong>Warning:</strong> &gt;4.0 or &lt;3.0</div>
              </div>
              <div style="font-size:0.74rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:2px;">⚡ Acidity adjustment recommendation</div>
                <div>Microbial stability / colour stability / mouthfeel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides 49, 50, 52, 54 content.")
