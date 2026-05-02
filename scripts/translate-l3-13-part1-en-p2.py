import json, sys

path = r"c:\Users\Chungshu\Desktop\教學網站製作20260220\Bordeaux Wine Learning\src\locales\en\lessons\bordeaux\l3-13-part1.json"

with open(path, encoding="utf-8") as f:
    data = json.load(f)

# ── slides.0.content ─────────────────────────────────────────────────────────
data["slides.0.content"] = """
      <div class="intro-content">
        <p class="intro-lead">
          The Bordeaux wine industry stands at the forefront of a technological revolution. Satellite remote sensing monitors every inch of the vineyard, drone and sensor networks provide real-time plant health data, big data analytics optimise every winemaking decision, and artificial intelligence predicts a wine's ageing potential. These innovative technologies are redefining the future of traditional agriculture and winemaking.
        </p>

        <p class="intro-context">
          Part One of this course takes a deep dive into precision agriculture technologies, data analytics applications, and the use of artificial intelligence in winemaking. From Château Latour's GPS soil maps to Château Margaux's machine-learning harvest predictions, from intelligent stainless-steel tanks to automated bottling lines, we reveal how these innovations enhance efficiency, sustainability, and quality consistency while preserving traditional standards.
        </p>

        <h3 class="section-title">Course Learning Objectives</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🛰️ Master Precision Agriculture Technologies</h4>
            <p>Learn how satellite remote sensing, drone surveillance, soil sensors, and smart irrigation are applied in vineyard management</p>
          </div>

          <div class="point-item">
            <h4>📊 Understand Big Data Analytics Applications</h4>
            <p>Discover how climate data, soil analysis, and ripeness indicators are used to optimise harvest timing and winemaking decisions</p>
          </div>

          <div class="point-item">
            <h4>🤖 Learn AI Applications in Winemaking</h4>
            <p>Understand how artificial intelligence optimises blending decisions, predicts ageing potential, controls fermentation, and supports quality control</p>
          </div>

          <div class="point-item">
            <h4>⚖️ Evaluate the Balance Between Technology and Tradition</h4>
            <p>Analyse the impact of technological innovation on traditional winemaking culture, and explore how to find the right balance between innovation and heritage</p>
          </div>
        </div>

        <p class="intro-conclusion">
          After completing this section, you will have a comprehensive understanding of how modern technology empowers the Bordeaux wine industry and how innovation and tradition can coexist harmoniously.
        </p>

        <div class="course-info">
          <p><strong>Estimated Study Time:</strong> 35 minutes</p>
          <p><strong>Difficulty Level:</strong> Advanced Professional</p>
        </div>
      </div>
    """

# ── slides.2.content ─────────────────────────────────────────────────────────
data["slides.2.content"] = """<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#0a3d5c,#1a7a5e);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    🛰️ Satellite Remote Sensing × Multispectral Analysis | Monitoring every vine's health from space
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
    <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-top:3px solid #0284c7;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#0284c7;font-size:0.9em;margin-bottom:8px">📊 NDVI Vegetation Index Monitoring</div>
      <table style="width:100%;border-collapse:collapse;font-size:0.82em;margin-bottom:8px">
        <tr><th style="background:#0284c7;color:#fff;padding:4px 8px;text-align:left">Plant Status</th><th style="background:#0284c7;color:#fff;padding:4px 8px;text-align:center">NDVI</th><th style="background:#0284c7;color:#fff;padding:4px 8px;text-align:right">Alert</th></tr>
        <tr style="background:#f0fdf4"><td style="padding:3px 8px;font-weight:600;color:#15803d">✅ Healthy</td><td style="padding:3px 8px;text-align:center;font-weight:700">0.6–0.9</td><td style="padding:3px 8px;text-align:right;color:#6b7280">—</td></tr>
        <tr style="background:#fef9c3"><td style="padding:3px 8px;font-weight:600;color:#b45309">⚠️ Caution</td><td style="padding:3px 8px;text-align:center;font-weight:700">0.2–0.5</td><td style="padding:3px 8px;text-align:right;color:#dc2626;font-weight:700">2–3 weeks early</td></tr>
      </table>
      <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:7px;font-size:0.82em">
        <strong style="color:#0369a1">📌 Château Margaux 2024:</strong><br>NDVI 0.78 → 0.65 (↓17%) → emergency irrigation<br><strong style="color:#dc2626">ROI 44:1</strong>, loss avoided €42,320
      </div>
    </div>
    <div style="background:#fff7ed;border:1px solid #fed7aa;border-top:3px solid #ea580c;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#ea580c;font-size:0.9em;margin-bottom:8px">🌡️ Thermal Infrared × Water Management</div>
      <div style="font-size:0.83em;color:#374151;line-height:1.65;margin-bottom:8px">
        <strong>Principle:</strong> adequate water → transpiration cooling → lower leaf temp; water stress → stomata close → leaf temp rises<br>
        <strong>Application:</strong> real-time detection of vineyard-wide water stress distribution, guiding precision irrigation
      </div>
      <div style="background:#fff;border:1px solid #fed7aa;border-radius:4px;padding:7px;font-size:0.82em">
        <strong style="color:#ea580c">📌 Pessac-Léognan case:</strong><br>Water saving <strong style="color:#16a34a">36%</strong> | Quality <strong style="color:#2563eb">+3 pts</strong> | Revenue <strong style="color:#16a34a">€200,000</strong><br>
        <strong style="color:#7c3aed">ROI 42×</strong>
      </div>
    </div>
  </div>
  <div style="background:#f5f3ff;border:1px solid #c4b5fd;border-radius:8px;padding:10px">
    <div style="font-weight:700;color:#7c3aed;font-size:0.9em;margin-bottom:6px">🗺️ Spatial Variability Analysis × Precision Zonal Harvest (Pauillac case)</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;font-size:0.83em">
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-size:1.4em;font-weight:700;color:#7c3aed">5</div><div style="color:#6b7280">Precision zones</div></div>
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-weight:700;color:#16a34a">+2–3 pts</div><div style="color:#6b7280">Quality gain</div></div>
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-weight:700;color:#dc2626">€780K</div><div style="color:#6b7280">Additional annual revenue</div></div>
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-weight:700;color:#0284c7">Grand Vin first</div><div style="color:#6b7280">strict selection</div></div>
    </div>
  </div>
</div>
    """

# ── slides.3.content ─────────────────────────────────────────────────────────
data["slides.3.content"] = """<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#1e3a5f,#2d6a8f);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    📡 High-Resolution Satellite Monitoring | Sub-metre precision 0.3–0.5 m × Individual vine identification
  </div>
  <div style="display:grid;grid-template-columns:3fr 2fr;gap:10px;margin-bottom:10px">
    <div style="background:#f0f7ff;border:1px solid #93c5fd;border-top:3px solid #2563eb;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#1d4ed8;font-size:0.9em;margin-bottom:8px">🔍 Sub-metre Precision × Individual Vine Identification</div>
      <div style="font-size:0.83em;color:#374151;line-height:1.65;margin-bottom:8px">
        <strong>Source:</strong> Planet / Maxar commercial satellites, resolution <strong>0.3–0.5 m</strong><br>
        <strong>Capability:</strong> identify individual vine health, detect missing vines, analyse canopy structure
      </div>
      <div style="background:#dbeafe;border-radius:6px;padding:8px;font-size:0.82em">
        <div style="font-weight:700;color:#1d4ed8;margin-bottom:4px">📌 Pomerol old-vine management case</div>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:2px 6px;color:#6b7280">Vines identified:</td><td style="padding:2px 6px;font-weight:700">12,850</td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">Missing vines detected:</td><td style="padding:2px 6px;font-weight:700;color:#dc2626">55</td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">Identification accuracy:</td><td style="padding:2px 6px;font-weight:700;color:#16a34a">96%</td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">Inspection time:</td><td style="padding:2px 6px;font-weight:700">6 days → <strong style="color:#dc2626">1.5 days</strong></td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">Labour saving:</td><td style="padding:2px 6px;font-weight:700;color:#16a34a">83%</td></tr>
        </table>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="background:#fff0f3;border:1px solid #fecdd3;border-top:3px solid #e11d48;border-radius:8px;padding:12px;flex:1">
        <div style="font-weight:700;color:#be123c;font-size:0.9em;margin-bottom:6px">🌿 Canopy Structure Analysis</div>
        <div style="font-size:0.82em;color:#374151;line-height:1.65">• Precise measurement of row and vine spacing<br>• Analysis of canopy density and light interception<br>• Planning vine renewal programmes</div>
      </div>
      <div style="background:#f0fdf4;border:1px solid #86efac;border-top:3px solid #16a34a;border-radius:8px;padding:12px;flex:1">
        <div style="font-weight:700;color:#15803d;font-size:0.9em;margin-bottom:6px">⏰ Disease Early Warning Value</div>
        <div style="font-size:0.82em;color:#374151;line-height:1.65">Detected downy mildew <strong>3–5 days</strong> early<br>Loss avoided: <strong style="color:#dc2626">€60,000</strong><br>ROI <strong style="color:#16a34a">12×</strong></div>
      </div>
    </div>
  </div>
  <div style="background:linear-gradient(90deg,#f8fafc,#e0f2fe);border:1px solid #bae6fd;border-radius:8px;padding:9px;text-align:center;font-size:0.84em;color:#0369a1;font-weight:600">
    🎯 Upgraded from "vineyard overview" to "individual vine precision management" — the era of "precision medicine" for vineyard management
  </div>
</div>
    """

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

count = sum(1 for k in ["slides.0.content", "slides.2.content", "slides.3.content"] if k in data)
print(f"Saved l3-13-part1.json ({count} content keys updated)")
