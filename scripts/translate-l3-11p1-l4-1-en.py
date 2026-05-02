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

# ── l3-11-part1.json ─────────────────────────────────────────────────────────
patch_file('l3-11-part1.json', {
  "slides.0.title": "Course Introduction - Part One",
  "slides.0.content": r"""
      <div class="intro-content">
        <p class="intro-lead">
          Bordeaux wine is not only an art of winemaking but also a crystallization of history. From Roman-era viticulture in Burdigala (the ancient name for Bordeaux), through meticulous brewing in medieval monasteries, to the trade boom brought by 12th-century English rule, and the historic moment of the 1855 classification system—every historical turning point has profoundly shaped the Bordeaux we know today.
        </p>

        <p class="intro-context">
          Part One of this course will take you on a journey through time to deeply understand the historical development of Bordeaux's wine industry. From how the Romans brought viticulture to Bordeaux, to how the British market drove industry prosperity, to how the 1855 classification system shaped today's classified château system—this history is not merely the past, but the key to understanding Bordeaux's current standing.
        </p>

        <h3 class="section-title">Course Learning Objectives</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📚 Understand the History of Bordeaux's Wine Industry</h4>
            <p>Comprehensively grasp the historical evolution and key turning points from Roman times, the Middle Ages, and English rule to the modern era</p>
          </div>

          <div class="point-item">
            <h4>🏆 In-Depth Understanding of the 1855 Classification System</h4>
            <p>Learn the historical background, selection criteria, five-tier classification, and the profound industry impact over 150 years</p>
          </div>

          <div class="point-item">
            <h4>🇬🇧 Grasp the Decisive Role of the British Market</h4>
            <p>Understand how Britain played a decisive influence in the trade, quality standards, and market position of Bordeaux wines</p>
          </div>

          <div class="point-item">
            <h4>⚖️ Analyze the Impact of Major Historical Events</h4>
            <p>Explore how phylloxera, world wars, and economic crises reshaped the industry, and the industry's response strategies</p>
          </div>
        </div>

        <p class="intro-conclusion">
          After completing this section, you will fully understand the historical depth of Bordeaux's wine industry and how the classification system shaped today's market structure.
        </p>

        <h3 class="section-title">Preview of Part Two: Cultural Heritage and Modern Influence</h3>

        <div class="learning-points part2-preview">
          <div class="point-item">
            <h4>🇫🇷 Chapter One: The Core Values of French Wine Culture</h4>
            <p>Deeply explore the cultural significance of "Art de Vivre" (French art of living) and the Terroir philosophy, and how Bordeaux has become an important symbol of France's cultural soft power</p>
          </div>

          <div class="point-item">
            <h4>🌍 Chapter Two: Bordeaux's Modern Cultural Standing</h4>
            <p>Analyze Bordeaux's role as a global wine culture leader in exporting quality standards, influencing international education systems, and its active role in global cultural diplomacy</p>
          </div>

          <div class="point-item">
            <h4>⚡ Chapter Three: Modern Challenges and Cultural Heritage</h4>
            <p>Evaluate the dual impact of technological development and generational differences on traditional culture; explore strategies for digital preservation of knowledge, safeguarding core values, and balancing cultural innovation</p>
          </div>
        </div>

        <div class="course-info">
          <p><strong>Estimated Study Time:</strong> Part One: 30 min / Part Two: 35 min</p>
          <p><strong>Difficulty Level:</strong> Advanced Professional</p>
        </div>
      </div>
    """,
  "slides.1.title": "Chapter One",
  "slides.1.subtitle": "Ancient Origins and Medieval Development",
  "slides.2.title": "Chapter One: Ancient Origins and Medieval Development",
  "slides.2.subtitle": "From Roman Conquest to the Monastic Era",
  "slides.2.content": r"""
      <h3 style="display:none;">🏛️ The Roman Foundation</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⏳ Key Historical Timeline</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:2px solid #f97316;border-radius:12px;padding:14px;">
              <div style="font-size:20px;font-weight:800;color:#c2410c;margin-bottom:4px;letter-spacing:-0.5px;">📅 56 BC</div>
              <div style="font-size:12px;font-weight:700;color:#7c2d12;margin-bottom:8px;">Caesar's Conquest of Gaul</div>
              <div style="font-size:11px;color:#9a3412;line-height:1.7;">
                <div>• Burdigala (ancient name for Bordeaux) became an important Roman city</div>
                <div>• Introduced advanced viticulture and vineyard management techniques</div>
                <div>• Established the first organized vineyards</div>
                <div>• Laid the institutional foundation for Bordeaux as a wine region</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:2px solid #3b82f6;border-radius:12px;padding:14px;">
              <div style="font-size:20px;font-weight:800;color:#1d4ed8;margin-bottom:4px;letter-spacing:-0.5px;">📅 1st–4th Century AD</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;margin-bottom:8px;">Industry Emergence and Expansion</div>
              <div style="font-size:11px;color:#1d4ed8;line-height:1.7;">
                <div>• Introduced Italian grape varieties and winemaking techniques</div>
                <div>• Established a complete wine trade network</div>
                <div>• Bordeaux wines exported throughout the Roman Empire</div>
                <div>• Consolidated Bordeaux's status as a wine region</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍇 Three Major Technical Legacies Left by Rome</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:12px;text-align:center;">
              <div style="font-size:24px;margin-bottom:5px;">🌱</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:6px;">Cultivation Techniques</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;text-align:left;">
                <div>• Vineyard planning and management</div>
                <div>• Soil improvement and drainage systems</div>
                <div>• Variety selection and cultivation</div>
                <div>• Harvest timing assessment standards</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:12px;text-align:center;">
              <div style="font-size:24px;margin-bottom:5px;">🍶</div>
              <div style="font-size:12px;font-weight:700;color:#78350f;margin-bottom:6px;">Winemaking Craft</div>
              <div style="font-size:10.5px;color:#92400e;line-height:1.7;text-align:left;">
                <div>• Fermentation vessel manufacturing techniques</div>
                <div>• Wine clarification and filtration methods</div>
                <div>• Basic concepts of storage and aging</div>
                <div>• Preliminary quality control standards</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:12px;text-align:center;">
              <div style="font-size:24px;margin-bottom:5px;">🚢</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;margin-bottom:6px;">Trade System</div>
              <div style="font-size:10.5px;color:#7e22ce;line-height:1.7;text-align:left;">
                <div>• Established Mediterranean trade routes</div>
                <div>• Wine packaging and transportation technology</div>
                <div>• Quality evaluation and pricing mechanisms</div>
                <div>• Cultivated a professional merchant class</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <h3 style="display:none;">⛪ The Medieval Monastic Era</h3>
      <h4 style="display:none;">8th–12th Century: The Rise of Monasteries</h4>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:10px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⛪ Monasteries as Guardians of the Wine Industry</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:14px;">
              <div style="font-size:13px;font-weight:700;color:#e0e7ff;margin-bottom:10px;">📿 Religious Driving Forces</div>
              <div style="display:flex;flex-direction:column;gap:7px;">
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">Eucharist Demand</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">Catholic Mass required large quantities of wine, making religious ceremonies a stable source of demand</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">Monastic Economy</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">Wine became an important source of income for monasteries, driving continued investment</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">Pilgrimage Trade</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">The St. James pilgrimage route drove a surge in wine demand along the way</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">Religious Protection</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">The Church's standing shielded vineyards from the destruction of war and plunder</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#052e16,#14532d);border-radius:12px;padding:14px;">
              <div style="font-size:13px;font-weight:700;color:#bbf7d0;margin-bottom:10px;">🔬 Technical Innovations</div>
              <div style="display:flex;flex-direction:column;gap:7px;">
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">Variety Improvement</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">Monks selectively bred grape varieties better suited to Bordeaux's climate</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">Winemaking Techniques</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">Developed more precise fermentation control and aging techniques</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">Quality Control</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">Established rigorous quality standards and inspection systems</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">Record Keeping</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">Detailed records of weather, harvests, and quality as precious historical data</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">💡 Why Were Monasteries So Successful in Protecting the Wine Industry?</div>
          <div style="font-size:10.5px;color:#78350f;line-height:1.7;">Monasteries combined <strong>stable labor</strong> (monks), <strong>abundant land resources</strong> (Church estates), and <strong>a long-term perspective</strong> (unaffected by dynastic changes). This combination made them the most effective guardians and innovators of the wine industry in the Middle Ages.</div>
        </div>

      </div>
      <h4 style="display:none;">12th–15th Century: Technical Maturity and Commercialization</h4>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⚙️ Dual Track of Feudalism and Commercialization</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#be123c;margin-bottom:8px;">🏰 Development Under Feudalism</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#9f1239;margin-bottom:2px;">Lordly Privileges</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;">Nobles controlled the best terroir parcels, shaping an elite vineyard landscape</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#9f1239;margin-bottom:2px;">Labor Security</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;">The serf system provided a stable workforce for vineyard cultivation</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#9f1239;margin-bottom:2px;">Technical Transmission</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;">The apprenticeship system ensured precise generational transmission of winemaking techniques</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#14532d;margin-bottom:8px;">📈 Accelerated Commercialization</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">Market Expansion</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">Wine trade extended across Europe, establishing a broad market network</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">Early Quality Grading</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">Wines began to be classified by origin and quality; the concept of branding began to form</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">Price Differentiation</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">Premium wines commanded higher prices, driving quality competition</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏆 Three Major Medieval Achievements</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:11px;">
              <div style="font-size:20px;margin-bottom:5px;">🍇</div>
              <div style="font-size:11.5px;font-weight:700;color:#1e3a8a;margin-bottom:5px;">Grape Variety Development</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.7;">
                <div>• Selected varieties suited to Bordeaux's climate</div>
                <div>• Experimented with blending different varieties</div>
                <div>• Established scientific methods for variety selection</div>
                <div>• Preserved precious genetic resources of grape varieties</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:11px;">
              <div style="font-size:20px;margin-bottom:5px;">🏭</div>
              <div style="font-size:11.5px;font-weight:700;color:#7c2d12;margin-bottom:5px;">Winemaking Technology Advances</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.7;">
                <div>• Precise fermentation control methods</div>
                <div>• Improved storage and aging techniques</div>
                <div>• Developed clarification and filtration processes</div>
                <div>• Established standard quality inspection procedures</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:11px;">
              <div style="font-size:20px;margin-bottom:5px;">📚</div>
              <div style="font-size:11.5px;font-weight:700;color:#581c87;margin-bottom:5px;">Knowledge System Established</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.7;">
                <div>• Compiled the first winemaking manuals</div>
                <div>• Established winemaking calendars and operational guides</div>
                <div>• Recorded extensive climate and harvest data</div>
                <div>• Formed the theoretical foundations of wine culture</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.2.highlights.0.title": "Roman Foundation",
  "slides.2.highlights.0.content": "The Roman conquest laid the technical and trade foundations for Bordeaux's wine industry, establishing an industrial framework that endures to this day",
  "slides.2.highlights.1.title": "Monastic Innovation",
  "slides.2.highlights.1.content": "Medieval monasteries not only preserved winemaking techniques but also drove important advances in variety improvement and quality enhancement",
  "slides.3.title": "Knowledge Check: Ancient Origins and Medieval Development",
  "slides.4.title": "Chapter Two",
  "slides.4.subtitle": "The Golden Age of English Rule",
  "slides.5.title": "Chapter Two: The Golden Age of English Rule",
  "slides.5.subtitle": "Trade Prosperity Opened by an Anglo-French Union",
  "slides.5.content": r"""
      <h3 style="display:none;">👑 The Union of Aquitaine</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:14px;margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#e0e7ff;margin-bottom:4px;">📅 1152 — The Marriage That Changed Bordeaux's Destiny</div>
          <div style="font-size:10.5px;color:#a5b4fc;margin-bottom:10px;">English rule lasted 300 years (1152–1453), laying the foundations for the internationalization of Bordeaux's wine industry</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:rgba(255,255,255,0.12);border-radius:10px;padding:12px;">
              <div style="font-size:24px;text-align:center;margin-bottom:5px;">👸</div>
              <div style="font-size:12px;font-weight:700;color:#c7d2fe;text-align:center;margin-bottom:7px;">Eleanor of Aquitaine</div>
              <div style="font-size:10px;color:#a5b4fc;line-height:1.7;">
                <div>• Heiress to the Duchy of Aquitaine</div>
                <div>• Controlled vast territories including Bordeaux</div>
                <div>• Former wife of French King Louis VII</div>
                <div>• The most influential woman of the Middle Ages</div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.12);border-radius:10px;padding:12px;">
              <div style="font-size:24px;text-align:center;margin-bottom:5px;">🤴</div>
              <div style="font-size:12px;font-weight:700;color:#c7d2fe;text-align:center;margin-bottom:7px;">Henry of Anjou (later King Henry II of England)</div>
              <div style="font-size:10px;color:#a5b4fc;line-height:1.7;">
                <div>• Count of Anjou and Duke of Normandy</div>
                <div>• Gained the Duchy of Aquitaine through marriage</div>
                <div>• Built the Angevin Empire spanning England and France</div>
                <div>• Ushered in the English era for Bordeaux</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🌍 Three Layers of Far-Reaching Impact from the Union</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:12px;">
              <div style="font-size:20px;text-align:center;margin-bottom:5px;">🗺️</div>
              <div style="font-size:12px;font-weight:700;color:#be123c;text-align:center;margin-bottom:7px;">Political Impact</div>
              <div style="font-size:10px;color:#9f1239;line-height:1.7;">
                <div>• Bordeaux became English territory</div>
                <div>• Established a stable political environment</div>
                <div>• Protected trade from disruption</div>
                <div>• Created conditions for commercial development</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:12px;">
              <div style="font-size:20px;text-align:center;margin-bottom:5px;">💼</div>
              <div style="font-size:12px;font-weight:700;color:#78350f;text-align:center;margin-bottom:7px;">Economic Impact</div>
              <div style="font-size:10px;color:#92400e;line-height:1.7;">
                <div>• Direct access to the British market</div>
                <div>• Established special trading privileges</div>
                <div>• Attracted British merchant investment</div>
                <div>• Created a stable source of income</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:12px;">
              <div style="font-size:20px;text-align:center;margin-bottom:5px;">🍷</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:7px;">Wine Industry Impact</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.7;">
                <div>• Britain became the largest market</div>
                <div>• Aristocratic demand drove quality</div>
                <div>• Established a trade institutional framework</div>
                <div>• Cemented a relationship that endures today</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <h3 style="display:none;">🚢 Medieval Wine Trade</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚢 Anglo-Bordeaux Wine Trade System</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border:1px solid #0284c7;border-radius:12px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#0c4a6e;margin-bottom:8px;">🗺️ Trade Routes</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#0369a1;margin-bottom:2px;">Garonne River Transport</div>
                  <div style="font-size:10px;color:#0284c7;line-height:1.5;">Bordeaux's port became a distribution hub; inland vineyards transported wine to port by river, equipped with specialized wine-transport vessels</div>
                </div>
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#0369a1;margin-bottom:2px;">Transatlantic Wine Fleet</div>
                  <div style="font-size:10px;color:#0284c7;line-height:1.5;">Annual autumn fleets sailed directly to London and Bristol; insurance systems established to manage maritime risks</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:8px;">🏛️ Trade Privilege Protections</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">British Market Privileges</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">Enjoyed lower tariffs, priority market access, exemption from trade embargoes, and preferential procurement by the British royal household</div>
                </div>
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">Producer Protections</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">Bordeaux local monopoly, restrictions on outside wine sales, quality standards legally protected—the origins of appellation labeling</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">📊 Economic Achievements at the 13th-Century Trade Peak</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#581c87;margin-bottom:8px;">📈 Trade Volume Data</div>
              <div style="display:flex;flex-direction:column;gap:5px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="background:#a855f7;color:white;border-radius:6px;padding:4px 7px;font-size:11px;font-weight:700;white-space:nowrap;">Annual Exports</div>
                  <div style="font-size:10.5px;color:#7e22ce;">Approx. <strong>1 million gallons</strong>, representing 80% of total production</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="background:#a855f7;color:white;border-radius:6px;padding:4px 7px;font-size:11px;font-weight:700;white-space:nowrap;">Revenue Share</div>
                  <div style="font-size:10.5px;color:#7e22ce;">Over <strong>60%</strong> of Bordeaux's total revenue</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="background:#a855f7;color:white;border-radius:6px;padding:4px 7px;font-size:11px;font-weight:700;white-space:nowrap;">Employment</div>
                  <div style="font-size:10.5px;color:#7e22ce;">Created <strong>thousands</strong> of direct jobs</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#7c2d12;margin-bottom:8px;">🏛️ Socio-Cultural Impact</div>
              <div style="display:flex;flex-direction:column;gap:5px;">
                <div style="background:rgba(255,255,255,0.6);border-radius:6px;padding:6px;">
                  <div style="font-size:10.5px;font-weight:700;color:#7c2d12;margin-bottom:2px;">🌆 Urban Development</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.4;">Bordeaux rose to become a major commercial city, constructing magnificent commercial buildings and attracting merchants from around the world to settle</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:6px;padding:6px;">
                  <div style="font-size:10.5px;font-weight:700;color:#7c2d12;margin-bottom:2px;">👥 Social Class</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.4;">Gave rise to a wealthy wine merchant class, promoted the formation of the middle class, and elevated the social status of winemakers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <h3 style="display:none;">⚔️ The Impact of the Hundred Years' War</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⚔️ Two-Phase Impact of the Hundred Years' War (1337–1453)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:2px solid #f97316;border-radius:12px;padding:12px;">
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:6px;">📅 1337–1380: First Phase</div>
              <div style="font-size:10.5px;color:#9a3412;line-height:1.8;">
                <div>⚠️ Trade routes threatened by war</div>
                <div>⚠️ Vineyards damaged by conflict</div>
                <div>⚠️ Severe labor shortages</div>
                <div style="margin-top:4px;background:rgba(249,115,22,0.1);border-radius:5px;padding:5px;font-size:10px;color:#7c2d12;">✅ British market demand remained strong, sustaining the industry</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:2px solid #f43f5e;border-radius:12px;padding:12px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:6px;">📅 1415–1453: Final Phase</div>
              <div style="font-size:10.5px;color:#9f1239;line-height:1.8;">
                <div>⚠️ France gradually reclaimed its territory</div>
                <div>⚠️ English rule became increasingly precarious</div>
                <div>⚠️ Wine trade volumes sharply declined</div>
                <div style="margin-top:4px;background:rgba(244,63,94,0.1);border-radius:5px;padding:5px;font-size:10px;color:#be123c;font-weight:700;">🏁 1453: Bordeaux returned to French sovereignty</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">💡 Turning Crisis into Opportunity: Bordeaux's Response Strategies</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#14532d;margin-bottom:8px;">🌍 Market Diversification</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.8;">
                <div>• Opened new markets in Holland, Germany, and Northern Europe</div>
                <div>• Reduced dependence on the single British market</div>
                <div>• Developed domestic French consumer markets</div>
                <div>• Explored more trading partnerships</div>
                <div style="margin-top:6px;background:rgba(34,197,94,0.12);border-radius:6px;padding:5px;font-size:10px;color:#14532d;font-weight:600;">→ This transformation laid the groundwork for today's global sales model</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#1e3a8a;margin-bottom:8px;">⬆️ Quality Enhancement Strategy</div>
              <div style="font-size:10.5px;color:#1d4ed8;line-height:1.8;">
                <div>• Focus on producing high-quality wines</div>
                <div>• Established stricter quality standards</div>
                <div>• Developed distinctive Bordeaux winemaking techniques</div>
                <div>• Strengthened the regional brand image</div>
                <div style="margin-top:6px;background:rgba(59,130,246,0.12);border-radius:6px;padding:5px;font-size:10px;color:#1e3a8a;font-weight:600;">→ Laid the groundwork for the 1855 classification system</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.5.highlights.0.title": "Anglo-French Union",
  "slides.5.highlights.0.content": "The 1152 marriage launched 300 years of English rule over Bordeaux, establishing a strong trade relationship",
  "slides.5.highlights.1.title": "Trade Prosperity",
  "slides.5.highlights.1.content": "Anglo-Bordeaux wine trade created one of the most successful international commercial models of the Middle Ages",
  "slides.5.highlights.2.title": "War as Turning Point",
  "slides.5.highlights.2.content": "While the Hundred Years' War ended English rule, it prompted Bordeaux to develop a diversified market strategy",
  "slides.6.title": "Knowledge Check: The Golden Age of English Rule",
  "slides.7.title": "Chapter Three",
  "slides.7.subtitle": "The Birth of the 1855 Classification System",
  "slides.8.title": "Chapter Three: The Birth of the 1855 Classification System",
  "slides.8.subtitle": "A Historic Selection That Changed Bordeaux's Destiny",
  "slides.8.content": r"""
      <div class="chapter-content">

        <h3>🌍 The Context of the Paris World's Fair</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>In 1855, Napoleon III commissioned the Bordeaux Chamber of Commerce to establish an official wine classification for the Paris World's Fair, and a historic decision that would change the wine world was born.</p>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🏛️</span><h4>Historical Context</h4></div>
              <ul>
                <li>France competed to rebuild international prestige after the Industrial Revolution</li>
                <li>Napoleon III actively promoted France's modern image</li>
                <li>Ongoing economic and cultural competition between England and France</li>
                <li>Wine became the core symbol for showcasing French superiority</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📋</span><h4>Demands of the World's Fair</h4></div>
              <ul>
                <li>Needed clear exhibit tier divisions for international visitors to understand</li>
                <li>Showcased the highest quality and diverse levels of French wines</li>
                <li>Established trustworthy, persuasive objective selection criteria</li>
                <li>Secured a long-term international market position for French wines</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🍷</span><h4>Bordeaux's Advantages</h4></div>
              <ul>
                <li>Already France's most internationally renowned wine region</li>
                <li>Long cherished by British, Dutch, and other European aristocracy</li>
                <li>Wine merchant guilds held complete centuries-old price and transaction records</li>
                <li>The Bordeaux Chamber of Commerce was promptly entrusted with the official task</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>⚖️ The Classification Process</h3>
        <div class="section-classification">
          <div class="subsection-block">
            <h4>Three Major Selection Criteria</h4>
            <div class="info-cards-grid three-col">
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">💰</span><h4>Market Price</h4></div>
                <p>Long-term price trends over the past 50–100 years, vintage-to-vintage stability, and actual transaction records in export markets such as Britain and the Netherlands.</p>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🏆</span><h4>Historical Reputation</h4></div>
                <p>Collection preferences of French and European aristocracy, professional evaluations by wine merchant guilds, and brand recognition in major international markets.</p>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🍇</span><h4>Quality Consistency</h4></div>
                <p>Stable quality performance across vintages, winemaking technical level, and the wine's aging potential and complete expression of the region's terroir.</p>
              </div>
            </div>
          </div>

          <div class="subsection-block">
            <h4>Classification Results: 61 Classified Châteaux</h4>
            <div class="info-cards-grid two-col">
              <div class="info-card">
                <div class="card-header"><span class="card-icon">📊</span><h4>Distribution Across Five Tiers</h4></div>
                <ul>
                  <li><strong>First Growths (Premiers Crus):</strong> 4 châteaux</li>
                  <li><strong>Second Growths (Deuxièmes Crus):</strong> 14 châteaux</li>
                  <li><strong>Third Growths (Troisièmes Crus):</strong> 14 châteaux</li>
                  <li><strong>Fourth Growths (Quatrièmes Crus):</strong> 10 châteaux</li>
                  <li><strong>Fifth Growths (Cinquièmes Crus):</strong> 18 châteaux</li>
                  <li><strong>Regional Distribution:</strong> 59 in Médoc + 1 in Graves</li>
                </ul>
              </div>
              <div class="info-card">
                <div class="card-header"><span class="card-icon">👑</span><h4>The Four First Growths</h4></div>
                <ul>
                  <li><strong>Château Lafite Rothschild</strong> (Pauillac) — First choice of European royal collections</li>
                  <li><strong>Château Latour</strong> (Pauillac) — Most revered in the British market</li>
                  <li><strong>Château Margaux</strong> (Margaux) — Designated wine of the French court</li>
                  <li><strong>Château Haut-Brion</strong> (Graves) — The only non-Médoc château, President Jefferson's favorite</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>🌟 Historical Significance and Legacy of the Classification System</h3>
        <div class="section-impact">
          <div class="key-point-banner">
            <p>Almost unchanged in 170 years, the 1855 classification remains the world's most important wine quality indicator and is the most influential agricultural product classification system in history.</p>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">✅</span><h4>Positive Impact</h4></div>
              <ul>
                <li>Established the highest benchmark for wine quality in the world</li>
                <li>Confirmed Bordeaux's status as a top global wine region</li>
                <li>Became a key symbol of France's cultural soft power</li>
                <li>Inspired the entire industry to continuously improve techniques and quality</li>
                <li>Advanced the professionalization and standardization of the wine industry</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">⚠️</span><h4>Challenges and Controversies</h4></div>
              <ul>
                <li>Static evaluations cannot reflect real modern quality changes</li>
                <li>May limit market recognition of excellent emerging châteaux</li>
                <li>Historical reputation sometimes overrides actual quality</li>
                <li>The system has seen virtually no adjustment in 170 years, lacking flexibility</li>
                <li>Some châteaux maintain high prices on reputation alone while quality declines</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🔄</span><h4>The Only Upgrade on Record</h4></div>
              <ul>
                <li>In 1973, Mouton Rothschild was elevated from Second to First Growth</li>
                <li>Decades of diplomatic negotiations and political efforts</li>
                <li>Formally approved and promulgated by the French Minister of Agriculture</li>
                <li>Led personally by Baron Philippe de Rothschild</li>
                <li>Confirms the extreme stability of the 1855 classification system</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    """,
  "slides.8.highlights.0.title": "World's Fair Opportunity",
  "slides.8.highlights.0.content": "The 1855 Paris World's Fair provided the historic opportunity for establishing Bordeaux's classification system",
  "slides.8.highlights.1.title": "Scientific Selection",
  "slides.8.highlights.1.content": "Selection criteria based on market price, historical reputation, and quality consistency remain relevant as references today",
  "slides.8.highlights.2.title": "Far-Reaching Influence",
  "slides.8.highlights.2.content": "The classification system not only transformed Bordeaux but also influenced wine evaluation systems around the world",
  "slides.9.title": "Knowledge Check: The Birth of the 1855 Classification System",
  "slides.10.title": "Course Summary: The Wisdom of Historical Heritage",
  "slides.10.content": r"""
      <div class="summary-content">

        <div class="key-point-banner">
          <p>Bordeaux's greatness is no accident. It is a historic achievement built layer by layer through Roman foundations, monastic refinement, British market catalysis, and the shaping of the 1855 classification system.</p>
        </div>

        <h3>📚 Part One: Four Major Historical Insights</h3>
        <div class="info-cards-grid two-col">
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🏛️</span><h4>The Importance of Technical Inheritance</h4></div>
            <p>From Roman times to the monastic era, the generational accumulation and transmission of techniques is the deepest foundation of Bordeaux's wine industry development</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🤝</span><h4>The Value of International Cooperation</h4></div>
            <p>The period of English rule demonstrated the decisive role of international market cooperation in driving industry prosperity; trade networks drove a quality revolution</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">📏</span><h4>The Power of Standardization</h4></div>
            <p>The 1855 classification system proved that establishing a standardized assessment system in the agricultural sector can create market value that stands firm for 170 years</p>
            </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🔄</span><h4>The Ability to Adapt to Change</h4></div>
            <p>Every historical crisis—phylloxera, world wars, economic depression—gave rise to greater resilience and innovative responses within the industry</p>
          </div>
        </div>

        <h3>🔗 Connecting History to the Modern Era</h3>
        <div class="key-point-banner">
          <p>Bordeaux's history is not merely a record of the past, but the key to understanding Bordeaux today. Every choice made at each historical turning point has shaped the premier wine region landscape we see now. Continue to Part Two to explore cultural heritage and modern challenges.</p>
        </div>

      </div>
    """,
  "slides.10.highlights.0.title": "Historical Wisdom",
  "slides.10.highlights.0.content": "Technical inheritance, international cooperation, standardization, and adaptability are the four pillars of Bordeaux's success",
  "slides.10.highlights.1.title": "Modern Relevance",
  "slides.10.highlights.1.content": "Historical experience provides an important reference framework for understanding modern Bordeaux and looking toward the future",
  "slides.11.title": "Part One Quiz: Historical Development and the Classification System",
  "slides.12.title": "Chapter Four",
  "slides.12.subtitle": "The Core Values of French Wine Culture",
  "slides.13.title": "Chapter Five",
  "slides.13.subtitle": "Bordeaux's Modern Cultural Standing",
  "slides.14.title": "Chapter Six",
  "slides.14.subtitle": "Modern Challenges and Cultural Heritage",
})

# ── l4-1.json ─────────────────────────────────────────────────────────────────
patch_file('l4-1.json', {
  "slides.0.title": "Course Introduction: Why Study Micro-Plots?",
  "slides.0.content": r"""
      <div class="intro-content">
        <h3>🎯 From Large Appellations to Small Plots: The Necessity of Precision Management</h3>
        <p class="intro-lead">
          In Level 3, we learned about the terroir characteristics of different Bordeaux appellations. But even within a single estate, different plots may differ significantly in grape quality simply because of <strong>a 1–2 degree difference in slope, a 20 cm difference in soil depth, or slight differences in drainage</strong>.
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-1/01%20高階風土微地塊精準分析.svg" alt="Advanced Terroir Micro-Plot Precision Analysis — Four Dimensions and Soil Profile Operations" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
        
        <div class="comparison-box">
          <div class="before">
            <h4>❌ Traditional Broad Management</h4>
            <ul>
              <li>Uniform fertilization and irrigation across the entire vineyard</li>
              <li>Harvesting all grapes on the same day</li>
              <li>Combined fermentation with no differentiation between plots</li>
              <li>Result: Inconsistent quality, blurred character</li>
            </ul>
          </div>
          <div class="after">
            <h4>✅ Micro-Plot Precision Management</h4>
            <ul>
              <li>Adjusting management according to each plot's characteristics</li>
              <li>Staged harvests at optimal ripeness for each plot</li>
              <li>Separate vinification with precise blending</li>
              <li>Result: Improved quality, distinctive style</li>
            </ul>
          </div>
        </div>

        <h3>📚 Learning Path for This Course</h3>
        <p>This course will guide you through building micro-plot analysis capabilities across <strong>four levels</strong>:</p>
        <ol class="learning-path">
          <li><strong>Read the Terrain</strong>: Learn to identify key differences using topographic data (slope, drainage, frost risk)</li>
          <li><strong>Read the Soil</strong>: Assess root growth conditions through soil profiles</li>
          <li><strong>Read the Water</strong>: Build a water stress model to predict optimal harvest timing</li>
          <li><strong>Read the Winemaking</strong>: Formulate separate vinification and blending strategies</li>
        </ol>

        <div class="key-insight">
          <h4>💡 Core Philosophy</h4>
          <p>The goal of micro-plot management is not to make simple problems complicated, but to be <strong>"site-specific"</strong>—allowing every plot to reach its fullest potential, ultimately blending with precision to produce a wine superior to any single plot alone.</p>
        </div>

        <h3>⚠️ Study Tips</h3>
        <ul class="tips">
          <li>This course introduces many technical terms (such as LiDAR, DEM, TWI, etc.). <strong>You don't need to memorize these abbreviations</strong>; the focus is on understanding the underlying concepts.</li>
          <li>Each chapter features real case studies; it is recommended to <strong>read the case first, then revisit the theory</strong>.</li>
          <li>Think of this course as a "precision health check" for your vineyard: terrain = skeleton, soil = nutrition, water = circulation.</li>
        </ul>
      </div>
    """,
  "slides.1.title": "Learning Objectives",
  "slides.2.title": "Chapter One",
  "slides.2.subtitle": "Micro-Topography and Hydrology",
  "slides.3.title": "Chapter One: Micro-Topography and Hydrology",
  "slides.3.subtitle": "Slope, Aspect, Cold Air Flow, and Drainage",
  "slides.3.content": r"""
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 Concept Introduction: Why Does Terrain Matter So Much?</h3>
          <p class="analogy">
            Imagine the vineyard as a face; <strong>the terrain is like the face's contours and features</strong>:
          </p>
          <ul class="simple-list">
            <li>🏔️ <strong>Slope</strong>: Like the height of the nose bridge—determines where water flows and the angle of sunlight</li>
            <li>🧭 <strong>Aspect</strong>: Like which direction the face points—affects how long sunlight is received</li>
            <li>❄️ <strong>Hollows</strong>: Like the eye sockets—prone to pooling cold air, causing frost damage</li>
            <li>💧 <strong>Drainage</strong>: Like the skin's pores—determines whether moisture drains smoothly</li>
          </ul>
          <div class="example-box">
            <h4>📖 Comparative Examples</h4>
            <table class="comparison-table">
              <tr>
                <th>Terrain Condition</th>
                <th>Vine Growth Status</th>
                <th>Management Challenge</th>
              </tr>
              <tr>
                <td>South-facing, 8% slope</td>
                <td>✅ Full sun, early ripening, high sugar</td>
                <td>⚠️ Watch for heat stress and drought</td>
              </tr>
              <tr>
                <td>North-facing flat hollow</td>
                <td>❌ Low light, late ripening, waterlogging</td>
                <td>⚠️ Spring frost, autumn botrytis</td>
              </tr>
            </table>
          </div>
        </div>

        <h3>Terrain Scanning and Data Sources</h3>
        <div class="term-explanation">
          <p><strong>Technical Term Explanations</strong> (no need to memorize; understand the concept):</p>
          <ul>
            <li><strong>LiDAR</strong> (Light Detection and Ranging): Uses laser to scan terrain, more precise than GPS; can see the real ground beneath tree cover</li>
            <li><strong>DEM</strong> (Digital Elevation Model): Converts terrain into a 3D computer model, like Google Earth but more detailed</li>
            <li><strong>UAV</strong> (Unmanned Aerial Vehicle): Drone used to photograph vineyards from the air</li>
          </ul>
        </div>
        <p>Combining these tools with historical yield maps allows us to divide large vineyards into micro-plots of <strong>0.1–0.5 hectares</strong> (roughly 1–5 basketball courts in size).</p>
        <ul>
          <li><strong>Terrain Indicators</strong>:
            <ul class="nested-list">
              <li><strong>Slope</strong>: Gradient (0–15% is common; >15% is too steep)</li>
              <li><strong>Aspect</strong>: Which direction the slope faces (south-facing is best; north-facing is cooler)</li>
              <li><strong>Curvature</strong>: Whether the terrain is convex (ridgeline, good drainage) or concave (valley, prone to waterlogging)</li>
              <li><strong>TWI (Topographic Wetness Index)</strong>: Simply put, "how prone is this plot to waterlogging?" Higher values mean wetter</li>
            </ul>
          </li>
          <li>Overlay with <strong>historical data</strong>: Where have past frost events occurred? Where does water pool? Where is dew especially heavy? Mark these "problem zones"</li>
        </ul>
        <div class="visual-aid">
          <p>💡 <strong>Memory Tip</strong>: Think of these indicators as a vineyard "health checklist"</p>
          <ul class="checklist">
            <li>✓ Slope and aspect = check the "skeleton" (structure)</li>
            <li>✓ Curvature = check the "body shape" (convex/concave)</li>
            <li>✓ TWI = check "metabolism" (drainage)</li>
            <li>✓ Historical data = check "medical history" (past problems)</li>
          </ul>
        </div>
        <h3>Slope × Aspect Risk Matrix</h3>
        <div class="table-intro">
          <p>This table shows you: <strong>what problems arise from different terrain combinations, and how to address them</strong></p>
          <p class="reading-tip">📖 How to read: Find your plot's conditions (slope + aspect) to identify the main risks and management approaches</p>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>Slope</th><th>Aspect</th><th>Heat Accumulation</th><th>Risk</th><th>Recommended Management</th></tr>
          </thead>
          <tbody>
            <tr><td>&lt;5%</td><td>N/E</td><td>Below average</td><td>Spring frost, moisture</td><td>Wind machines + netting, improve drainage</td></tr>
            <tr><td>5–12%</td><td>S/W</td><td>Moderate</td><td>Heat spikes</td><td>Canopy shading, irrigation management</td></tr>
            <tr><td>&gt;12%</td><td>SW</td><td>High</td><td>Drought</td><td>Moisture-retaining mulch, reduce leaf removal</td></tr>
          </tbody>
        </table>
        <h3>Cold Air Flow and Frost Simulation</h3>
        <div class="concept-simplification">
          <p class="analogy">
            <strong>Everyday analogy</strong>: Cold air flows downhill like water. Imagine filling a bathtub—water flows toward the drain; similarly, cold air at night "flows" downslope to lower areas.
          </p>
          <ul class="key-points">
            <li>🌡️ Cold air is <strong>heavier</strong> than warm air and sinks downward</li>
            <li>⛰️ It <strong>accumulates</strong> when it encounters obstacles (embankments, buildings)</li>
            <li>❄️ Accumulated cold spots are colder and more prone to <strong>frost damage</strong></li>
          </ul>
        </div>
        <p>Professional tools: Use CFD (Computational Fluid Dynamics) or simplified models to simulate cold air pathways and identify hazard zones where cold tends to "pool."</p>
        <p class="subhead">Quick Inspection Checklist</p>
        <ul>
          <li>Check that terrain lows and drainage channels are free of obstructions.</li>
          <li>Check whether farm roads or embankments block cold air drainage.</li>
          <li>Compare wind machine coverage area versus cold air pool area.</li>
        </ul>
        <h3>Surface and Subsurface Drainage</h3>
        <p>Analyze penetration resistance, soil apparent electrical conductivity (ECa), and deep borehole data to identify boundaries between permeable and impermeable layers.</p>
        <p class="subhead">Drainage Solution Combinations</p>
        <ul>
          <li>Slope channels + drainage pipes: Address surface waterlogging.</li>
          <li>Vertical deep wells: Break through hard layers to channel water.</li>
          <li>Cover crops: Increase permeability and reduce soil compaction.</li>
        </ul>
        <h3>Case Study: Frost Management in a North-Facing Micro-Plot</h3>
        <p class="subhead">Background</p>
        <p>A 3.2 ha north-facing hollow with 25% late-frost losses in 2021–2022.</p>
        <p class="subhead">Action</p>
        <ul>
          <li>Removed blocking embankments and excavated 2 drainage channels to route cold air out.</li>
          <li>Installed 2 low-energy wind machines covering 80% of the area.</li>
          <li>Switched to double-bud pruning to retain backup buds.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>The following year, frost damage losses dropped to 5%, and acidity and yield returned to long-term averages.</p>
      </div>
    """,
  "slides.3.highlights.0.title": "High-Resolution Terrain",
  "slides.3.highlights.0.content": "Integrating DEM (Digital Elevation Model) / LiDAR (Light Detection and Ranging) / UAV (Unmanned Aerial Vehicle) to analyze micro-plots at a 0.1–0.5 ha scale.",
  "slides.3.highlights.1.title": "Cold Air Pathways",
  "slides.3.highlights.1.content": "CFD (Computational Fluid Dynamics) or smoke-source field tests map nocturnal cold air movement to guide wind machine and drainage placement.",
  "slides.3.highlights.2.title": "Case Study Results",
  "slides.3.highlights.2.content": "North-facing hollow improved via drainage + wind machines: frost damage reduced from 25% to 5%.",
  "slides.4.title": "Chapter Two",
  "slides.4.subtitle": "Soil Profile and Rootstocks",
  "slides.5.title": "Chapter Two: Soil Profile and Rootstocks",
  "slides.5.subtitle": "Soil Horizons, Aeration, and Root System Strategy",
  "slides.5.content": r"""
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 Concept Introduction: Why Study Soil Profiles?</h3>
          <p class="analogy">
            <strong>Imagine the soil as an apartment building</strong>:
          </p>
          <ul class="apartment-analogy">
            <li>🏢 <strong>Topsoil</strong> (0–30 cm): Ground floor lobby, most active, highest organic matter</li>
            <li>🏢 <strong>Subsoil</strong> (30–60 cm): Second floor, main root zone</li>
            <li>🏢 <strong>Substratum</strong> (below 60 cm): Basement, mineral source, may have a "hardpan" blocking roots</li>
          </ul>
          <p>How deep grapevine roots can grow and how many nutrients and water they can absorb depends on how well-structured this "soil building" is.</p>
          
          <div class="why-it-matters">
            <h4>❓ Why do some parts of a vineyard grow well while others don't?</h4>
            <p>The answer is often found in the <strong>30–100 cm soil layer beneath the surface</strong>:</p>
            <ul>
              <li>✅ Good soil profile: Loose and aerated, well-drained, roots can reach 2 meters deep</li>
              <li>❌ Poor soil profile: Hardpan at 30 cm, waterlogging—roots can only struggle in the topsoil</li>
            </ul>
          </div>
        </div>

        <h3>Soil Coring Procedure</h3>
        <p class="practical-note">💼 <strong>Practical Operation</strong>: Use a soil drill to bore one hole per 1–1.5 hectares (about 2 football fields), to a depth of 1–2 meters, and extract a soil core for observation.</p>
        <p>At least 1 profile per 1–1.5 ha; record horizon thickness, texture, gravel/stone content, and rust/lime infiltration.</p>
        <p class="subhead">Profile Recording Format</p>
        <div class="term-decoder">
          <p>📝 <strong>Technical Term Decoder</strong> (plain language in parentheses):</p>
          <ul>
            <li><strong>Horizons</strong>:
              <ul class="nested-list">
                <li><strong>A horizon</strong> (topsoil): Uppermost layer, dark, rich in organic matter</li>
                <li><strong>Bt horizon</strong> (subsoil): Middle layer, clay accumulation, main root depth</li>
                <li><strong>C horizon</strong> (substratum): Lower layer, close to parent material</li>
                <li><strong>R horizon</strong> (bedrock): Hard rock layer, roots cannot penetrate</li>
              </ul>
            </li>
            <li><strong>Texture</strong> (how the soil feels): Sandy = coarse, silty = smooth, clayey = sticky</li>
            <li><strong>Structure</strong> (how soil particles aggregate): Granular is best (loose); platy is worst (compact)</li>
            <li><strong>Hardpan</strong> (compacted layer): A layer as dense as concrete that roots cannot penetrate</li>
          </ul>
        </div>
        <h3>Physical and Chemical Diagnostics</h3>
        <div class="table-guide">
          <p>This table is a <strong>soil health checklist</strong> telling you for each indicator: how to measure it, what the standard is, and what to do if it's out of range.</p>
          <p class="tip">💡 The key is not to memorize the numbers but to understand <strong>"what problem does this indicator reflect?"</strong></p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>Indicator</th><th>Method</th><th>Critical Value</th><th>Management Decision</th></tr>
          </thead>
          <tbody>
            <tr><td>Bulk density</td><td>Undisturbed soil core</td><td>&gt;1.55 g/cm³</td><td>Deep tillage + cover crops</td></tr>
            <tr><td>Saturated hydraulic conductivity</td><td>Permeameter</td><td>&lt;10 mm/hr</td><td>Drainage pipes / sand amendment</td></tr>
            <tr><td>CEC (Cation Exchange Capacity)</td><td>Laboratory</td><td>&lt;8 meq/100g</td><td>Add organic matter, adjust fertilization</td></tr>
            <tr><td>Active lime</td><td>Bernard method</td><td>&gt;10%</td><td>Select lime-tolerant rootstock, foliar iron supplement</td></tr>
          </tbody>
        </table>
        <h3>Rootstock Selection Decision Tree</h3>
        <div class="decision-guide">
          <p class="analogy">🌱 <strong>Analogy</strong>: Choosing a rootstock is like choosing a car engine—you select based on road conditions (soil) and purpose (yield goals).</p>
          <p>Based on soil constraints and growth objectives, use <strong>three questions</strong> to select the best rootstock:</p>
        </div>
        <p class="subhead">Three-Step Decision Process</p>
        <div class="step-by-step">
          <div class="step">
            <h4>Step 1: What problems does the soil have?</h4>
            <ul>
              <li>🪨 High lime? (pH &gt; 8, whitish soil) → Choose lime-tolerant rootstock</li>
              <li>🏜️ Prone to drought? (too-fast drainage, summer water deficit) → Choose drought-tolerant rootstock</li>
              <li>💧 Prone to waterlogging? (poor drainage, muddy in spring) → Choose wet-tolerant rootstock</li>
              <li>🐛 Nematode disease? → Choose nematode-resistant rootstock</li>
            </ul>
          </div>
          <div class="step">
            <h4>Step 2: How vigorous do you want the vines?</h4>
            <ul>
              <li><strong>Vigorous rootstock</strong>: Large, high-yielding vines, but quality may decline</li>
              <li><strong>Moderate rootstock</strong>: Balances yield and quality</li>
              <li><strong>Low-vigor rootstock</strong>: Smaller vines, lower yield, but concentrated fruit, high quality</li>
            </ul>
          </div>
          <div class="step">
            <h4>Step 3: Confirm planting plan</h4>
            <p>High-density planting (e.g., 5,000 vines/ha) → use low-vigor rootstock to avoid overcrowding<br>
            Low-density planting (e.g., 3,000 vines/ha) → can use moderate rootstock to ensure yield</p>
          </div>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>Rootstock</th><th>Stress Tolerance</th><th>Vigor</th><th>Suitable Conditions</th></tr>
          </thead>
          <tbody>
            <tr><td>3309C</td><td>Moderate lime, good drainage</td><td>Low-moderate</td><td>High density, pursuing aromatic finesse</td></tr>
            <tr><td>101-14</td><td>Wet-tolerant, low lime</td><td>Low</td><td>Cool regions, late-ripening varieties</td></tr>
            <tr><td>SO4</td><td>Moderate lime, medium nematode tolerance</td><td>Moderate</td><td>Balanced yield, medium soils</td></tr>
            <tr><td>110R</td><td>High drought, lime-tolerant</td><td>High</td><td>Dry gravelly slopes, yield maintenance needed</td></tr>
          </tbody>
        </table>
        <h3>Case Study: Replanting a High-Lime Plateau</h3>
        <p class="subhead">Background</p>
        <p>Active lime at 14%, CEC 6 meq; original rootstock 420A showed iron deficiency and yield instability.</p>
        <p class="subhead">Strategy</p>
        <ul>
          <li>Replanted with 110R + microbial inoculation to promote iron uptake.</li>
          <li>Inter-row legume cover crop to increase organic matter.</li>
          <li>Established zoned drip irrigation adjusted by soil moisture sensors.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>From the third year, yield stabilized at 6.5 t/ha, and total anthocyanins increased by 18%.</p>
      </div>
    """,
  "slides.5.highlights.0.title": "Profile Diagnostics",
  "slides.5.highlights.0.content": "Soil coring + lab data build a soil constraint map.",
  "slides.5.highlights.1.title": "Rootstock Decision Tree",
  "slides.5.highlights.1.content": "Three-step screening: stress tolerance → vigor → planting density to select the optimal rootstock.",
  "slides.5.highlights.2.title": "Case Validation",
  "slides.5.highlights.2.content": "After replanting with 110R on high-lime soil, yield stabilized and anthocyanins increased by 18%.",
  "slides.6.title": "Chapter Three",
  "slides.6.subtitle": "Water Stress Modeling",
  "slides.7.title": "Chapter Three: Water Stress Modeling and Harvest Windows",
  "slides.7.subtitle": "Water Potential Measurement, Stomatal Conductance, and Integrated Maturity Indicators",
  "slides.7.content": r"""
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 Concept Introduction: What Is Water Stress?</h3>
          <p class="analogy">
            <strong>Everyday analogy</strong>: Think of the grapevine as the body's circulatory system:
          </p>
          <ul class="body-analogy">
            <li>💧 <strong>Soil moisture</strong> = Blood reserve</li>
            <li>🫀 <strong>Leaf water potential</strong> = Blood pressure (too low = poor circulation)</li>
            <li>😮 <strong>Stomatal conductance</strong> = Breathing status (under stress, the vine "holds its breath")</li>
            <li>🩺 <strong>Water stress monitoring</strong> = Regular blood pressure checks to prevent stroke (drought crisis)</li>
          </ul>
          
          <div class="why-monitor">
            <h4>❓ Why monitor water stress?</h4>
            <p>Moderate water stress (like moderate exercise) can <strong>improve grape quality</strong>:</p>
            <ul>
              <li>✅ Mild stress (−0.4 to −0.6 MPa): Concentrated fruit, focused flavor, finer tannins</li>
              <li>⚠️ Moderate stress (−0.6 to −0.9 MPa): Growth slows, needs monitoring</li>
              <li>❌ Severe stress (&lt;−0.9 MPa): Vine damage, loss of aromatics, urgent irrigation needed</li>
            </ul>
            <p class="key-insight">💡 <strong>Key</strong>: Find the balance between "moderate stress" and "excessive stress"</p>
          </div>
        </div>

        <h3>Measurement Matrix</h3>
        <div class="table-intro">
          <p>This table lists <strong>4 monitoring tools</strong>, like a doctor using different instruments to examine the body:</p>
          <ul class="tool-list">
            <li>🩺 Pressure chamber = blood pressure gauge</li>
            <li>🫁 Porometer = lung capacity test</li>
            <li>💉 Soil sensors = blood test (checking reserves)</li>
            <li>🩸 Sap flow meter = measuring blood flow speed</li>
          </ul>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>Indicator</th><th>Tool</th><th>Frequency</th><th>Target Range</th><th>Alert</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-dawn leaf water potential</td><td>Pressure chamber</td><td>Weekly</td><td>−0.4 to −0.6 MPa</td><td>&lt;−0.7 MPa: trigger supplemental irrigation</td></tr>
            <tr><td>Midday stomatal conductance</td><td>Porometer</td><td>Twice weekly</td><td>80–120 mmol/m²s</td><td>&lt;60: leaf water stress rising</td></tr>
            <tr><td>Soil water content</td><td>TDR or FDR</td><td>Daily</td><td>60–70% of field capacity</td><td>&lt;50%: plant water potential may drop sharply</td></tr>
            <tr><td>Sap flow rate</td><td>Sap-flow sensor</td><td>Continuous</td><td>Baseline ±15%</td><td>Anomaly: check for blockage or drought</td></tr>
          </tbody>
        </table>
        <h3>Water Stress Modeling Workflow</h3>
        <p class="subhead">Data Integration</p>
        <ul>
          <li>Integrate water potential, soil moisture, weather forecasts, and ET₀ model.</li>
          <li>Build daily water balance (irrigation + rainfall − evapotranspiration).</li>
        </ul>
        <p class="subhead">Model Options</p>
        <ul>
          <li>Simplified Bucket Model: uses field capacity as the upper limit.</li>
          <li>FAO-56 single crop coefficient with Kc(Phenology) input.</li>
          <li>Machine learning: XGBoost to predict water potential trends 48 hours ahead.</li>
        </ul>
        <h3>Multi-Indicator Maturity Radar Chart</h3>
        <div class="concept-explanation">
          <p class="analogy">🎯 <strong>What is a radar chart?</strong></p>
          <p>Think of maturity as an exam with multiple subjects:</p>
          <ul class="exam-subjects">
            <li>🍯 <strong>Sugar (Brix)</strong>: Sweetness exam (15–20°Brix is the standard)</li>
            <li>🍋 <strong>Acidity</strong>: Freshness exam (6–7 g/L is the standard)</li>
            <li>🍷 <strong>pH</strong>: Balance exam (3.3–3.5 is the standard)</li>
            <li>💜 <strong>Anthocyanins</strong>: Color exam (determines wine depth)</li>
            <li>🍇 <strong>Seed browning</strong>: Whether seeds have turned brown (100% = mature)</li>
            <li>🌺 <strong>Aroma precursors</strong>: Future aromatic potential</li>
          </ul>
          <p>Each indicator is converted into a <strong>0–5 score</strong> and plotted on a radar chart, making it easy to see which criteria pass and which don't at a glance.</p>
        </div>
        <p>Collect Brix, titratable acidity, pH, anthocyanins, seed browning index, and aroma precursors; standardize to a 0–5 score.</p>
        <p class="subhead">Application</p>
        <ul>
          <li>Identify the maturity pace difference between micro-plots (earliest vs. latest can differ by 7–10 days).</li>
          <li>Determine whether selective harvesting or delayed blending is needed.</li>
        </ul>
        <h3>Harvest Window Decision Board</h3>
        <div class="decision-framework">
          <p>📋 <strong>Three Key Factors for Harvest Decisions</strong>: Like the three things to consider before a trip</p>
          <ol class="decision-factors">
            <li><strong>🎯 Quality</strong> (Are the grapes ready?) → Check the maturity radar chart; have targets been met?</li>
            <li><strong>⛈️ Risk</strong> (Is the weather good?) → Will it rain in the next 48 hours? Is there frost risk?</li>
            <li><strong>👥 Resources</strong> (Can you handle the harvest?) → Are workers, tanks, and presses sufficient?</li>
          </ol>
        </div>
        <p>Establish 3-tier thresholds: quality (maturity radar), risk (rain/frost), resources (labor/tanks/press).</p>
        <p class="subhead">Decision Reference Table</p>
        <div class="decision-table">
          <table>
            <tr><th>Quality Status</th><th>Risk Level</th><th>→ Recommended Action</th></tr>
            <tr><td>✅ On target</td><td>✅ Low risk</td><td>→ Continue monitoring, wait for optimal moment</td></tr>
            <tr><td>✅ On target</td><td>⚠️ High risk</td><td>→ <strong>Harvest within 48 hours</strong></td></tr>
            <tr><td>⚠️ Not ready</td><td>⚠️ High risk</td><td>→ Harvest only best plots; protect the rest</td></tr>
          </table>
        </div>
        <h3>Water Scenario and Trend Mini-Tool</h3>
        <div class="water-trend-widget" style="--highlight-color:#0ea5e9;">
          <input type="radio" id="wt-base" name="water-scenario-l41" class="opt-base" checked>
          <input type="radio" id="wt-drought" name="water-scenario-l41" class="opt-drought">
          <input type="radio" id="wt-irrigation" name="water-scenario-l41" class="opt-irrigation">
          <div class="control-row">
            <label for="wt-base">Baseline Year</label>
            <label for="wt-drought">Hot-Drought Scenario</label>
            <label for="wt-irrigation">Nocturnal Supplemental Irrigation</label>
          </div>
          <div class="panels">
            <div class="chart" data-scenario="base">
              <svg viewBox="0 0 260 90" role="img" aria-label="Baseline year water potential trend">
                <polyline points="0,50 40,48 80,52 120,47 160,49 200,46 240,48 260,47" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
            <div class="chart" data-scenario="drought">
              <svg viewBox="0 0 260 90" role="img" aria-label="Hot-drought scenario water potential trend">
                <polyline points="0,50 40,55 80,62 120,70 160,78 200,82 240,86 260,88" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
            <div class="chart" data-scenario="irrigation">
              <svg viewBox="0 0 260 90" role="img" aria-label="Nocturnal irrigation water potential trend">
                <polyline points="0,50 40,53 80,58 120,62 160,59 200,55 240,57 260,54" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
          </div>
          <div class="metrics">
            <div class="metric" data-scenario="base">
              <span class="label">Avg. Pre-dawn Leaf Water Potential</span>
              <span class="value">−0.55 MPa</span>
            </div>
            <div class="metric" data-scenario="base">
              <span class="label">Irrigation Demand</span>
              <span class="value">None</span>
            </div>
            <div class="metric" data-scenario="drought">
              <span class="label">Minimum Water Potential</span>
              <span class="value">−1.05 MPa</span>
            </div>
            <div class="metric" data-scenario="drought">
              <span class="label">Recommended Action</span>
              <span class="value">Drip irrigation + mulching within 48 hrs</span>
            </div>
            <div class="metric" data-scenario="irrigation">
              <span class="label">Nocturnal Drip Amount</span>
              <span class="value">4 mm/day</span>
            </div>
            <div class="metric" data-scenario="irrigation">
              <span class="label">Estimated Water Potential Recovery</span>
              <span class="value">−0.65 MPa</span>
            </div>
          </div>
          <div class="notes">
            <p>Blue line = water potential trend; gray line = management threshold (−0.6 MPa). Switch scenarios to discuss response decisions.</p>
          </div>
        </div>
        <h3>Case Study: 2023 Hot-Drought Year Management</h3>
        <p class="subhead">Insight</p>
        <p>XGBoost predicted water potential would drop to −1.0 MPa in 4 days; aroma indicators were still improving.</p>
        <p class="subhead">Decision</p>
        <ul>
          <li>Harvested gravel-slope Cabernet first (ripens faster).</li>
          <li>Retained clay plots with nocturnal drip irrigation, delayed harvest by 5 days.</li>
        </ul>
        <p class="subhead">Outcome</p>
        <p>Maintained a 0.25% Brix differential and optimized phenolic indicators, avoiding high-temperature aroma loss.</p>
      </div>
    """,
  "slides.7.highlights.0.title": "Measurement Matrix",
  "slides.7.highlights.0.content": "Water potential, conductance, soil moisture, and sap flow integrated for modeling.",
  "slides.7.highlights.1.title": "Model Options",
  "slides.7.highlights.1.content": "Three water prediction pathways: Bucket, FAO-56, and machine learning.",
  "slides.7.highlights.2.title": "Harvest Window",
  "slides.7.highlights.2.content": "Quality × Risk × Resources determines harvest batches and scheduling.",
  "slides.8.title": "Chapter Four",
  "slides.8.subtitle": "Plot-Separated Vinification Strategy",
  "slides.9.title": "Chapter Four: Plot-Separated Vinification and Blending Strategy",
  "slides.9.subtitle": "From Harvest Batches to Blending Decisions",
  "slides.9.content": r"""
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 Concept Introduction: Why Vinify Separately?</h3>
          <p class="analogy">
            <strong>Music analogy</strong>: Think of micro-plot winemaking as assembling a symphony orchestra:
          </p>
          <ul class="orchestra-analogy">
            <li>🎻 <strong>Gravel-slope plot</strong> = Violin section (delicate, bright, backbone)</li>
            <li>🎺 <strong>Clay plateau plot</strong> = Brass section (rich, powerful, structure)</li>
            <li>🎼 <strong>River terrace plot</strong> = Woodwind section (aromatic, elegant, layered)</li>
          </ul>
          <p>If you mix all the instruments and record them together at the same time, it's hard to adjust each section's volume and effect. But if you <strong>record them separately</strong>, the final mix allows precise control:</p>
          <ul class="benefits-list">
            <li>✓ Violins too weak? Turn up the volume</li>
            <li>✓ Brass too loud? Reduce the proportion</li>
            <li>✓ Want a special version? Recombine in different ratios</li>
          </ul>
          <p class="key-insight">💡 <strong>Core philosophy</strong>: Separate vinification preserves the character of each plot; through blending, we create a wine more complex and balanced than any single plot alone.</p>
        </div>

        <h3>Batch Harvest and Tank Planning</h3>
        <div class="practical-guide">
          <p>📅 <strong>Practical question</strong>: How do you decide which plots to harvest separately?</p>
          <p>Answer: Look at <strong>maturity differences</strong> and <strong>style objectives</strong></p>
        </div>
        <p>Determine whether to harvest in batches based on plot maturity and target style.</p>
        <p class="subhead">Scheduling Principles</p>
        <ul>
          <li>Plots with synchronized maturity: Combine into one tank to reduce operational complexity.</li>
          <li>Plots with offset maturity: Use 2–3 harvest passes to preserve acidity and aromatic layering.</li>
        </ul>
        <h3>Micro-Fermentation Settings</h3>
        <table class="data-table compact">
          <thead>
            <tr><th>Plot</th><th>Fermentation Vessel</th><th>Yeast/Culture</th><th>Maceration Strategy</th><th>Monitoring Indicators</th></tr>
          </thead>
          <tbody>
            <tr><td>Gravel slope A</td><td>3.5 hL open-top barrel</td><td>Indigenous yeast</td><td>Cold soak 4 days + gentle pigeage</td><td>Anthocyanins, temperature</td></tr>
            <tr><td>Clay plateau B</td><td>Stainless steel conical tank</td><td>Selected yeast D254</td><td>Short maceration + micro-oxygenation</td><td>Reduction indicators, YAN</td></tr>
            <tr><td>River terrace C</td><td>Egg-shaped concrete vessel</td><td>Co-fermentation with small amount of white skin</td><td>Continuous suspension</td><td>Mid-palate weight, lactic acid bacteria</td></tr>
          </tbody>
        </table>
        <h3>Sensory and Chemical Tracking</h3>
        <p>Build batch sensory cards and chemical indicator templates.</p>
        <p class="subhead">Core Fields</p>
        <ul>
          <li>Sensory: Aroma type, palate structure, finish.</li>
          <li>Chemical: Alcohol, phenolics, color density, volatile acidity.</li>
          <li>Economic: Cost/batch, barrel age, estimated blending ratio.</li>
        </ul>
        <h3>Blending Matrix and Decision-Making</h3>
        <table class="data-table">
          <thead>
            <tr><th>Batch</th><th>Style Profile</th><th>Strengths</th><th>Limitations</th><th>Blending Recommendation</th></tr>
          </thead>
          <tbody>
            <tr><td>Gravel slope A</td><td>Backbone</td><td>Fine tannins, mineral</td><td>Initially closed</td><td>Primary component 50–60%</td></tr>
            <tr><td>Clay plateau B</td><td>Structure</td><td>Full body, dark fruit</td><td>Reduction risk</td><td>20–30%, needs micro-oxygenation</td></tr>
            <tr><td>River terrace C</td><td>Aromatic lift</td><td>Red fruit, floral</td><td>Higher acidity</td><td>10–20%, to adjust acidity</td></tr>
          </tbody>
        </table>
        <h3>Blending Strategy Simulator</h3>
        <div class="blend-widget">
          <input type="radio" id="blend-classic" name="blend-strategy-l41" class="opt-classic" checked>
          <input type="radio" id="blend-aromatic" name="blend-strategy-l41" class="opt-aromatic">
          <input type="radio" id="blend-reserve" name="blend-strategy-l41" class="opt-reserve">
          <div class="tabs">
            <label for="blend-classic">Classic Balance</label>
            <label for="blend-aromatic">Aroma-Focused</label>
            <label for="blend-reserve">Grand Reserve</label>
          </div>
          <div class="scenarios">
            <div class="scenario" data-scenario="classic">
              <table class="data-table compact">
                <thead>
                  <tr><th>Batch</th><th>Ratio</th><th>Contribution</th></tr>
                </thead>
                <tbody>
                  <tr><td>Gravel slope A</td><td>60%</td><td>Backbone and mineral</td></tr>
                  <tr><td>Clay plateau B</td><td>25%</td><td>Body weight and dark fruit</td></tr>
                  <tr><td>River terrace C</td><td>15%</td><td>Red fruit and floral lift</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">Est. Alcohol</span><span class="value">13.4%</span></div>
                <div class="metric"><span class="label">Structure Index</span><span class="value">7.8 / 10</span></div>
                <div class="metric"><span class="label">Barrel Rec.</span><span class="value">40% new oak</span></div>
              </div>
              <p class="note">Ideal for maintaining the estate's classic style; balanced backbone and aromatics; aging potential 10–12 years.</p>
            </div>
            <div class="scenario" data-scenario="aromatic">
              <table class="data-table compact">
                <thead>
                  <tr><th>Batch</th><th>Ratio</th><th>Contribution</th></tr>
                </thead>
                <tbody>
                  <tr><td>Gravel slope A</td><td>50%</td><td>Structure and mineral base</td></tr>
                  <tr><td>Clay plateau B</td><td>15%</td><td>Soft texture</td></tr>
                  <tr><td>River terrace C</td><td>35%</td><td>Red fruit, floral, and acidity</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">Est. Alcohol</span><span class="value">13.0%</span></div>
                <div class="metric"><span class="label">Aroma Index</span><span class="value">8.5 / 10</span></div>
                <div class="metric"><span class="label">Bottling Timeline</span><span class="value">Within 18 months</span></div>
              </div>
              <p class="note">Highlights aromatics and early drinkability; suitable as a limited special edition or food pairing wine.</p>
            </div>
            <div class="scenario" data-scenario="reserve">
              <table class="data-table compact">
                <thead>
                  <tr><th>Batch</th><th>Ratio</th><th>Contribution</th></tr>
                </thead>
                <tbody>
                  <tr><td>Gravel slope A</td><td>75%</td><td>Deep tannins and mineral</td></tr>
                  <tr><td>Clay plateau B</td><td>20%</td><td>Framework and ripe fruit sweetness</td></tr>
                  <tr><td>River terrace C</td><td>5%</td><td>Acidity and aromatic brightness</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">Est. Alcohol</span><span class="value">13.8%</span></div>
                <div class="metric"><span class="label">Aging Potential</span><span class="value">15+ years</span></div>
                <div class="metric"><span class="label">Barrel Rec.</span><span class="value">60% new oak + large barrel</span></div>
              </div>
              <p class="note">Ideal for flagship reserve or grand cru-style bottling; requires careful new oak management and reduction risk control.</p>
            </div>
          </div>
        </div>
        <h3>Case Study: Three-Plot Blending Process</h3>
        <p class="subhead">Steps</p>
        <ol>
          <li>Initial screening: Eliminate batches with volatile acidity &gt;0.7 g/L.</li>
          <li>Aroma combination: Gravel A : River terrace C = 70:30 as base.</li>
          <li>Structure reinforcement: Clay B added at 20% with barrel age adjusted.</li>
        </ol>
        <p class="subhead">Outcome</p>
        <p>The final blend scored 92 points in blind tasting, preserving the distinctiveness of the three plots while achieving overall balance.</p>
      </div>
    """,
  "slides.9.highlights.0.title": "Batch Harvesting",
  "slides.9.highlights.0.content": "Plan 2–3 harvests according to maturity rhythm to preserve layering.",
  "slides.9.highlights.1.title": "Micro-Fermentation Design",
  "slides.9.highlights.1.content": "Match vessel, yeast, and maceration strategy to plot characteristics.",
  "slides.9.highlights.2.title": "Blending Matrix",
  "slides.9.highlights.2.content": "Map strengths/limitations to find the balanced ratio.",
  "slides.10.title": "Course Summary: From Plot to Decision",
  "slides.10.content": r"""
      <div class="summary-content">
        <h3>🎯 Review of Four Core Capabilities</h3>
        <div class="skills-review">
          <div class="skill-block">
            <h4>1️⃣ Read the Terrain: Identify Differences</h4>
            <ul>
              <li>Use LiDAR/DEM to map the terrain</li>
              <li>Identify slope, aspect, and cold air pooling zones</li>
              <li>Mark high-risk areas (frost, waterlogging)</li>
            </ul>
            <p class="key-output">✓ Output: Micro-plot boundary map (0.1–0.5 ha scale)</p>
          </div>
          
          <div class="skill-block">
            <h4>2️⃣ Read the Soil: Assess Potential</h4>
            <ul>
              <li>Drill soil profiles (1–2 m depth)</li>
              <li>Test physical and chemical indicators (density, CEC, lime)</li>
              <li>Select matched rootstocks (lime-tolerant, drought-tolerant, vigor)</li>
            </ul>
            <p class="key-output">✓ Output: Soil constraint map + rootstock selection plan</p>
          </div>
          
          <div class="skill-block">
            <h4>3️⃣ Read the Water: Nail the Timing</h4>
            <ul>
              <li>Monitor leaf water potential, stomatal conductance, soil moisture</li>
              <li>Build water stress model (machine learning)</li>
              <li>Integrate maturity radar chart to calculate harvest windows</li>
            </ul>
            <p class="key-output">✓ Output: Staged harvest schedule + irrigation management</p>
          </div>
          
          <div class="skill-block">
            <h4>4️⃣ Read the Winemaking: Precise Blending</h4>
            <ul>
              <li>Plot-separated fermentation (different vessels/yeasts)</li>
              <li>Track sensory and chemical indicators</li>
              <li>Build blending matrix (strengths/limitations/ratios)</li>
            </ul>
            <p class="key-output">✓ Output: Final blend proposal + style positioning</p>
          </div>
        </div>

        <h3>💭 From Theory to Practice: Systems Thinking</h3>
        <p>Micro-plot management is not an isolated technique but a <strong>closed-loop system</strong>:</p>
        <div class="system-flow">
          <div class="flow-step">
            <span class="step-number">①</span>
            <p><strong>Data Collection</strong><br>Terrain scanning, soil testing, water monitoring</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">②</span>
            <p><strong>Plot Clustering</strong><br>Group plots into management units by similarity</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">③</span>
            <p><strong>Differentiated Management</strong><br>Site-specific irrigation, pruning, and harvesting</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">④</span>
            <p><strong>Separate Vinification</strong><br>Preserve the character of each plot</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">⑤</span>
            <p><strong>Precise Blending</strong><br>Combine into the desired style</p>
          </div>
        </div>

        <h3>🌟 Key Insights</h3>
        <div class="key-insights">
          <div class="insight">
            <h4>⚖️ Differences Are Resources, Not Problems</h4>
            <p>The microclimatic and soil differences within a vineyard are not flaws to be eliminated, but a <strong>flavor palette</strong> to be harnessed. Gravel gives you backbone, clay gives you flesh, river terrace gives you aromatics—the key is how to combine them.</p>
          </div>
          
          <div class="insight">
            <h4>📊 Data Serves Decisions, Not Display</h4>
            <p>LiDAR, water potential, and machine learning sound impressive, but the ultimate question is: <strong>What decisions do these data help me make?</strong> Terrain maps → decide wind machine placement; water potential data → decide irrigation timing; maturity radar → decide harvest batches.</p>
          </div>
          
          <div class="insight">
            <h4>🤝 Cross-Departmental Collaboration Determines Success</h4>
            <p>Micro-plot management requires: viticulture team providing data, winemaker designing fermentation strategies, blender integrating flavors, and commercial team positioning the market. No single link can operate independently.</p>
          </div>
        </div>

        <h3>📚 Recommended Further Learning</h3>
        <ul class="further-learning">
          <li><strong>Technical Deepening</strong>: Learn GIS software (QGIS), statistical modeling (R/Python), sensor data analysis</li>
          <li><strong>Site Visits</strong>: Visit estates practicing micro-plot management (Château Latour, Palmer, etc.)</li>
          <li><strong>Further Reading</strong>: <em>Precision Viticulture</em>, <em>Understanding Wine Chemistry</em></li>
          <li><strong>Advanced Certifications</strong>: WSET Level 4, French Agronomic Engineering programs</li>
        </ul>

        <div class="final-message">
          <p>🎓 <strong>A Final Word</strong></p>
          <p>Micro-plot management has been the most important quality revolution at Bordeaux's top estates over the past 20 years. It is not merely a technical upgrade, but a <strong>philosophical shift</strong>: from "uniform standardization" to "respecting difference," from "average quality" to "excellent layering."</p>
          <p>Having mastered this systematic framework, you now possess <strong>Level 4 expert-level</strong> analytical capability—congratulations on completing this challenging course!</p>
        </div>
      </div>
    """,
  "slides.11.title": "Quick Quiz",
})

print('\nDone.')
