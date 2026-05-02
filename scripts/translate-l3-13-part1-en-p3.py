import json

path = r"c:\Users\Chungshu\Desktop\教學網站製作20260220\Bordeaux Wine Learning\src\locales\en\lessons\bordeaux\l3-13-part1.json"

with open(path, encoding="utf-8") as f:
    data = json.load(f)

# ── slides.4.content ──────────────────────────────────────────────────────────
data["slides.4.content"] = """<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    🚁 Drone Precision Operations System | 2–5 cm Ultra-High Resolution × Emergency Assessment
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px">
    <div style="background:#fff8f0;border:1px solid #fcd34d;border-top:3px solid #f59e0b;border-radius:8px;padding:10px;text-align:center">
      <div style="font-size:1.6em">🚁</div><div style="font-weight:700;color:#b45309;font-size:0.88em">Drone</div>
      <div style="font-size:0.82em;color:#374151;margin-top:4px"><strong>2–5 cm</strong><br>Ultra-high resolution<br>Deploy anytime</div>
    </div>
    <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-top:3px solid #0284c7;border-radius:8px;padding:10px;text-align:center">
      <div style="font-size:1.6em">🛰️</div><div style="font-weight:700;color:#0369a1;font-size:0.88em">Satellite</div>
      <div style="font-size:0.82em;color:#374151;margin-top:4px"><strong>0.5–10 m</strong><br>High-frequency<br>Wide-area coverage</div>
    </div>
    <div style="background:#f5f3ff;border:1px solid #c4b5fd;border-top:3px solid #7c3aed;border-radius:8px;padding:10px;text-align:center">
      <div style="font-size:1.6em">🤖</div><div style="font-weight:700;color:#6d28d9;font-size:0.88em">AI Real-time Analysis</div>
      <div style="font-size:0.82em;color:#374151;margin-top:4px">Auto identification<br>Damage assessment<br>Report generation</div>
    </div>
  </div>
  <div style="background:#fff1f2;border:1px solid #fecdd3;border-radius:8px;padding:12px;margin-bottom:10px">
    <div style="font-weight:700;color:#be123c;font-size:0.9em;margin-bottom:8px">⛈️ Emergency Case: Pauillac Hail Damage Assessment (2024.7.18)</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div style="font-size:0.82em;color:#374151;line-height:1.7">
        <strong>Incident:</strong> 45 ha, hail diameter 1.5–2.5 cm<br>
        <strong>Deployment:</strong> DJI Matrice 300 RTK (within 1 hour)<br>
        <strong>Flight:</strong> 38 min, <strong>1,847</strong> multispectral images<br>
        <strong>Resolution:</strong> 2.5 cm/pixel
      </div>
      <div style="font-size:0.82em;color:#374151;line-height:1.7">
        Damaged: <strong style="color:#dc2626">18.6 ha (41.3%)</strong><br>
        · Light 8.2 | Moderate 7.8 | Severe 2.6 ha<br>
        Assessment error: <strong style="color:#16a34a">±3.2%</strong> (insurer-approved)<br>
        <strong style="color:#7c3aed">Same-day claim €185,000</strong> | ROI <strong>185×</strong>
      </div>
    </div>
  </div>
  <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center">
    <div style="text-align:center;font-size:0.85em;min-width:60px"><div style="font-size:2em">💧</div><div style="font-weight:700;color:#15803d">Precision Spraying</div></div>
    <div style="font-size:0.82em;color:#374151;line-height:1.7">Agrochemical saving <strong style="color:#16a34a">16%</strong> | Control efficacy <strong style="color:#16a34a">+12%</strong> | Protected yield <strong style="color:#dc2626">€195,000</strong></div>
  </div>
</div>
    """

# ── slides.5.content ──────────────────────────────────────────────────────────
data["slides.5.content"] = """<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#064e3b,#065f46);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    🌡️ IoT Sensor Network (I) | The Vineyard's "24-hour Nervous System"
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
    <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-top:3px solid #0284c7;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#0284c7;font-size:0.9em;margin-bottom:8px">🌤️ Intelligent Weather Monitoring Station (6 Parameters)</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:0.82em;margin-bottom:8px">
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">🌡️ Temperature</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">💧 Humidity</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">🌧️ Rainfall</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">💨 Wind Dir. &amp; Speed</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">☀️ Solar Radiation</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">📊 Barometric Pressure</div>
      </div>
      <div style="background:#dbeafe;border-radius:5px;padding:7px;font-size:0.82em">
        <span style="font-weight:700;color:#1d4ed8">📌 Pomerol Frost Warning:</span><br>
        8.5 ha / 5 weather stations / updated every 5 minutes<br>
        <strong style="color:#dc2626">12-hour</strong> advance frost warning → zero frost damage<br>
        <span style="color:#7c3aed;font-weight:700">ROI 37×</span> (investment €12,500)
      </div>
    </div>
    <div style="background:#f0fdf4;border:1px solid #86efac;border-top:3px solid #16a34a;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#15803d;font-size:0.9em;margin-bottom:8px">🌱 Multi-Layer Soil Moisture Monitoring</div>
      <div style="font-size:0.82em;color:#374151;margin-bottom:8px">
        <strong>Monitoring depths (4 layers):</strong>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:4px">
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">15 cm</div>
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">30 cm</div>
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">45 cm</div>
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">60 cm</div>
        </div>
      </div>
      <div style="background:#dcfce7;border-radius:5px;padding:7px;font-size:0.82em">
        <span style="font-weight:700;color:#15803d">📌 Graves Precision Irrigation:</span><br>
        42 ha / 18 points / <strong>72 sensors</strong><br>LoRaWAN wireless / updated every 15 minutes<br>
        Water saving <strong style="color:#16a34a">36%</strong> | Yield increase <strong style="color:#16a34a">6.3%</strong> | Payback <strong style="color:#dc2626">1.3 months</strong>
      </div>
    </div>
  </div>
  <div style="background:linear-gradient(90deg,#f8fdf9,#dcfce7);border:1px solid #86efac;border-radius:8px;padding:9px;text-align:center;font-size:0.84em;color:#15803d;font-weight:600">
    🧠 Satellite (aerial view) + Drone (close range) + IoT (real-time sensing) → Integrated Sky-Air-Ground Monitoring System
  </div>
</div>
    """

# ── slides.6.content ─ str.replace approach ──────────────────────────────────
v6 = data["slides.6.content"]
v6 = v6.replace("[ZH] ", "").replace("[ZH]", "")
replacements6 = [
    ("📡 物聯網感測器網絡（二）｜邊緣計算 × 智能決策系統",
     "📡 IoT Sensor Network (II) | Edge Computing × Intelligent Decision-Making System"),
    ("⚡ 邊緣計算核心優勢", "⚡ Core Advantages of Edge Computing"),
    (">優勢<", ">Advantage<"),
    (">效果<", ">Effect<"),
    ("⚡ 快速響應", "⚡ Fast Response"),
    ("減90%流量", "90% less traffic"),
    ("📦 節省帶寬", "📦 Bandwidth Saving"),
    ("🔌 離線工作", "🔌 Offline Operation"),
    ("網絡中斷可用", "Works without network"),
    ("🚨 即時告警", "🚨 Instant Alerts"),
    ("超閾即通知", "Triggered at threshold"),
    ("<1秒", "<1 s"),
    ("📌 Saint-Émilion 自動灌溉案例", "📌 Saint-Émilion Automated Irrigation Case"),
    ("28公頃 ／ <strong>48個感測器</strong>（4層×12點）",
     "28 ha / <strong>48 sensors</strong> (4 depths × 12 points)"),
    ("觸發閾值：<strong>含水量 &lt;25%</strong> → 自動灌溉",
     "Trigger threshold: <strong>moisture &lt;25%</strong> → automatic irrigation"),
    ("響應延遲：<strong style=\"color:#dc2626\">僅15秒</strong>（vs 雲端5–10秒）",
     "Response latency: <strong style=\"color:#dc2626\">only 15 s</strong> (vs cloud 5–10 s)"),
    ("投資 <strong>€88,550</strong>｜年收益", "Investment <strong>€88,550</strong> | Annual revenue"),
    ("5年 €950K–€2,850K</span>｜ROI <strong style=\"color:#dc2626\">16倍</strong>",
     "5-year €950K–€2,850K</span> | ROI <strong style=\"color:#dc2626\">16×</strong>"),
    ("🔄 數據流架構", "🔄 Data Flow Architecture"),
    ("<strong>感測器筆端</strong><br><span style=\"color:#6b7280\">24/7採集</span>",
     "<strong>Sensor endpoints</strong><br><span style=\"color:#6b7280\">24/7 collection</span>"),
    ("<strong>邊緣處理</strong><br><span style=\"color:#6b7280\">本地AI決策</span>",
     "<strong>Edge processing</strong><br><span style=\"color:#6b7280\">Local AI decisions</span>"),
    ("<strong>雲端整合</strong><br><span style=\"color:#6b7280\">分析＋預警</span>",
     "<strong>Cloud integration</strong><br><span style=\"color:#6b7280\">Analytics + alerts</span>"),
]
for zh, en in replacements6:
    v6 = v6.replace(zh, en)
data["slides.6.content"] = v6

# ── slides.7.content ─ str.replace approach ──────────────────────────────────
v7 = data["slides.7.content"]
v7 = v7.replace("[ZH] ", "").replace("[ZH]", "")
replacements7 = [
    ("🌐 物聯網 × 全自動化系統整合案例",
     "🌐 IoT × Fully Automated System Integration Cases"),
    ("📌 Haut-Médoc 智能灌溉系統",
     "📌 Haut-Médoc Intelligent Irrigation System"),
    ("<strong>規模：</strong>68公頃 / 12個獨立灌溉區",
     "<strong>Scale:</strong> 68 ha / 12 independent irrigation zones"),
    ("<strong>感測器：</strong>36個土壤水分感測器",
     "<strong>Sensors:</strong> 36 soil moisture sensors"),
    ("<strong>邊緣網關：</strong>12台（AI模型本地決策）",
     "<strong>Edge gateways:</strong> 12 units (local AI model decisions)"),
    ("<strong>決策頻率：</strong><span style=\"color:#dc2626;font-weight:700\">每秒1次</span>",
     "<strong>Decision frequency:</strong> <span style=\"color:#dc2626;font-weight:700\">once per second</span>"),
    ("💧 <strong>&lt;24%</strong> → 自動開啟｜<strong>&gt;32%</strong> → 自動關閉",
     "💧 <strong>&lt;24%</strong> → auto on | <strong>&gt;32%</strong> → auto off"),
    ("節水 <strong style=\"color:#16a34a\">12.4%</strong>｜避免損失 <strong style=\"color:#dc2626\">€25,000</strong>",
     "Water saving <strong style=\"color:#16a34a\">12.4%</strong> | Loss avoided <strong style=\"color:#dc2626\">€25,000</strong>"),
    ("🌍 天–空–地一體化監測",
     "🌍 Sky-Air-Ground Integrated Monitoring"),
    ("🛰️ <strong style=\"color:#0284c7\">衛星</strong> — NDVI 熱紅外廣域監測",
     "🛰️ <strong style=\"color:#0284c7\">Satellite</strong> — NDVI thermal infrared wide-area monitoring"),
    ("🚁 <strong style=\"color:#7c3aed\">無人機</strong> — 高解析度緊急評估",
     "🚁 <strong style=\"color:#7c3aed\">Drone</strong> — high-resolution emergency assessment"),
    ("🌡️ <strong style=\"color:#16a34a\">IoT感測器</strong> — 即時氣象土壤自動決策",
     "🌡️ <strong style=\"color:#16a34a\">IoT Sensors</strong> — real-time weather/soil automated decisions"),
    ("三層整合 → <strong>數據驅動精準農業</strong>",
     "Three-layer integration → <strong>data-driven precision agriculture</strong>"),
    ("從「看天吃飯」到「以數治園」",
     'From "weather-dependent" to "data-managed vineyard"'),
    ("💰 精準農業整體投資回報",
     "💰 Overall Precision Agriculture ROI"),
    ("<div style=\"font-weight:700;color:#0284c7\">衛星遙感</div>",
     "<div style=\"font-weight:700;color:#0284c7\">Satellite Remote Sensing</div>"),
    ("<div style=\"color:#16a34a;font-weight:700\">ROI 42–44倍</div>",
     "<div style=\"color:#16a34a;font-weight:700\">ROI 42–44×</div>"),
    ("<div style=\"font-weight:700;color:#7c3aed\">無人機作業</div>",
     "<div style=\"font-weight:700;color:#7c3aed\">Drone Operations</div>"),
    ("<div style=\"color:#16a34a;font-weight:700\">ROI 185倍</div>",
     "<div style=\"color:#16a34a;font-weight:700\">ROI 185×</div>"),
    ("<div style=\"font-weight:700;color:#15803d\">物聯網系統</div>",
     "<div style=\"font-weight:700;color:#15803d\">IoT Systems</div>"),
    ("<div style=\"color:#16a34a;font-weight:700\">ROI 16–37倍</div>",
     "<div style=\"color:#16a34a;font-weight:700\">ROI 16–37×</div>"),
]
for zh, en in replacements7:
    v7 = v7.replace(zh, en)
data["slides.7.content"] = v7

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

keys = ["slides.4.content", "slides.5.content", "slides.6.content", "slides.7.content"]
print(f"Saved l3-13-part1.json ({len(keys)} content keys updated)")
