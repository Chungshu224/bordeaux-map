"""更新 Bierzo DO 的 spain-appellations.json 與 lessonSlides.js 資料"""
import json, re

# ── 1. spain-appellations.json ──────────────────────────────────────
with open('public/spain/spain-appellations.json', encoding='utf-8') as f:
    data = json.load(f)

for a in data:
    if a.get('zonName') == 'Bierzo':
        a['location'] = '卡斯提亞-萊昂自治區萊昂省西北部；北鄰阿斯圖里亞斯，西接加利西亞（奧倫塞、盧戈省）'
        a['grapes'] = ['Mencía', 'Garnacha Tintorera', 'Godello', 'Doña Blanca', 'Palomino', 'Malvasía']
        a['climate'] = {
            'type': '半濕潤氣候',
            'summerAvgC': 20.8,
            'winterAvgC': 5.7,
            'annualRainfallMm': 652,
            'note': '數據來源：Cacabelos 站；大西洋濕潤空氣從加利西亞流入，調節大陸型極端氣候',
        }
        a['elevation'] = '450–1,000m'
        a['areaHa'] = 2982.04
        a['soilType'] = '高海拔：石英岩、板岩、花崗岩、石灰岩；低海拔：黏土、卵石、沖積物'
        a['tagline'] = 'Bierzo, the land of Mencía（Mencía 佔產量約 75%）'
        a['servingAging'] = {
            'Mencía': '13–16°C，醒酒 1 小時，優質款陳年 10 年以上表現出色',
            'Godello': '7–13°C，無需醒酒，陳年 3–5 年',
        }
        a['description'] = (
            '萊昂省西北部碗形盆地，海拔 450–1,000m，葡萄園面積 2,982 公頃。'
            '官方口號「Bierzo, the land of Mencía」——Mencía 佔產量約 75%，'
            '以酸櫻桃、石榴、甘草與碎石礦物感著稱，應飲溫 13–16°C，陳年 10 年以上仍出色。'
            'Godello 白酒帶柚子、檸檬皮、榲桲與煙燻礦石，應飲溫 7–13°C。'
            '半濕潤氣候（夏 20.8°C、冬 5.7°C、年雨 652mm），大西洋氣流調節大陸型極端。'
        )
        print('✅ spain-appellations.json: Bierzo 已更新')
        break

with open('public/spain/spain-appellations.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# ── 2. lessonSlides.js ───────────────────────────────────────────────
with open('src/components/spain/data/lessonSlides.js', encoding='utf-8') as f:
    src = f.read()

# 2a. 封面 cover points
old_cover_points = """    points: [
      { icon: '⬛', label: '板岩梯田', text: '陡峭花崗岩與板岩斜坡，需全程手工作業' },
      { icon: '🌿', label: 'Mencía', text: '優雅花香・紫羅蘭・鉛筆芯，結構輕盈似 Pinot Noir' },
      { icon: '🗺️', label: '地理', text: '萊昂省西部，受大西洋影響，形成特殊微氣候' },
    ],"""
new_cover_points = """    points: [
      { icon: '⬛', label: '板岩梯田', text: '海拔 450–1,000m，高低海拔土壤各異，全程手工作業' },
      { icon: '🌿', label: 'Mencía 之地', text: '官方口號「Bierzo, the land of Mencía」，佔產量約 75%；酸櫻桃・石榴・碎石礦物感' },
      { icon: '🌡️', label: '半濕潤氣候', text: '夏均 20.8°C、冬均 5.7°C、年雨 652mm，大西洋氣流調節大陸型極端' },
    ],"""
src = src.replace(old_cover_points, new_cover_points)

# 2b. 地理與風土 content slide
old_geo = """    html: `
      <p>Bierzo DO 位於卡斯提亞-萊昂省西部，地處坎塔布連山脈和加利西亞山脈的交匯處，形成一個獨特的碗形盆地。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地形</strong><br/>
          被山脈環抱的碗形盆地，高度變化大（400-1000 公尺）。大西洋濕潤空氣從加利西亞流入，調節了中部大陸型氣候的乾燥極端。這樣的微氣候使 Mencía 的糖分和酸度達到優雅平衡。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>⬛ 板岩土壤（Pizarra）</strong><br/>
          最頂級的單一園（Pagos）種植在陡峭板岩梯田上，單寧、骨架和礦石感極強。老藤（50+ 年）低產，但果實高度濃縮。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌿 Mencía 風味</strong><br/>
          <ul style="margin:4px 0 0;padding-left:18px">
            <li>花香（紫羅蘭、紅玫瑰）</li>
            <li>紅色水果（覆盆子、紅李）</li>
            <li>礦石感（板岩、鉛筆芯）</li>
            <li>高酸、中低單寧、輕盈至中等酒體</li>
            <li>老藤：更深邃的結構，接近 Burgundy Pinot Noir</li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:14px">🏆 代表酒莊</h4>
      <p><strong>Descendientes de J. Palacios</strong>（Álvaro Palacios 的侄子 Ricardo Pérez Palacios 在 Bierzo 的作品）是推動 Bierzo 國際知名度的關鍵推手，旗下 La Faraona 和 Las Lamas 是西班牙最貴的 Mencía。</p>
    `,"""
new_geo = """    html: `
      <p>Bierzo DO 位於卡斯提亞-萊昂省<strong>萊昂省西北部</strong>，北鄰阿斯圖里亞斯，西接加利西亞（奧倫塞、盧戈省），地處坎塔布連與加利西亞山脈交匯的碗形盆地。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候（Cacabelos 數據）</strong><br/>
          半濕潤氣候，夏均 <strong>20.8°C</strong>、冬均 <strong>5.7°C</strong>、年雨量 <strong>652mm</strong>。大西洋濕潤氣流從加利西亞流入，調節大陸型極端，使 Mencía 糖酸達到優雅平衡。
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 海拔與土壤（依高度分層）</strong><br/>
          葡萄園總面積 <strong>2,982 公頃</strong>，海拔 <strong>450–1,000m</strong>，分布於河流梯田、山坡與斜坡。<br/>
          ・<strong>高海拔</strong>：石英岩、板岩、花崗岩、石灰岩——礦石骨架強，頂級 Mencía 發源地<br/>
          ・<strong>低海拔</strong>：黏土、卵石、沖積物——出酒量較大，風格較圓潤
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌿 Mencía 核心風味</strong><br/>
          <ul style="margin:4px 0 0;padding-left:18px">
            <li>酸櫻桃、石榴、黑莓、甘草</li>
            <li>碎石礦物感（板岩鉛筆芯）</li>
            <li>乾型、中至飽滿酒體、中高酸、中等單寧</li>
            <li>老藤深邃結構，接近 Burgundy Pinot Noir</li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:14px">🏆 代表酒莊</h4>
      <p><strong>Descendientes de J. Palacios</strong>（Ricardo Pérez Palacios）是 Bierzo 國際聲譽的關鍵推手，旗下 La Faraona 和 Las Lamas 是西班牙最貴的 Mencía。</p>
    `,"""
src = src.replace(old_geo, new_geo)

# 2c. 在 quiz 之前插入新 content slide（品種+建議）
old_quiz = """  {
    type: 'quiz',
    question: 'Bierzo DO 最著名且種植在板岩梯田上的主要紅品種是什麼？',"""
new_variety_slide = """  {
    type: 'content',
    icon: '🍇',
    title: 'Bierzo 葡萄品種與品飲建議',
    html: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Mencía</strong>（主導，約 75%）</li>
            <li>Garnacha Tintorera</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Godello</strong>（最具潛力）</li>
            <li>Doña Blanca、Palomino、Malvasía</li>
          </ul>
        </div>
      </div>
      <h4>🍷 Mencía 品飲建議</h4>
      <ul>
        <li><strong>風味</strong>：酸櫻桃、石榴、甘草、黑莓 + 破碎碎石礦物感</li>
        <li><strong>酒款</strong>：乾型、中至飽滿酒體、中高酸度與單寧</li>
        <li><strong>飲用溫度</strong>：<strong>13–16°C</strong></li>
        <li><strong>醒酒</strong>：建議醒酒約 1 小時；優質款陳年 <strong>10 年以上</strong>依然出色</li>
      </ul>
      <h4>🍋 Godello 品飲建議</h4>
      <ul>
        <li><strong>風味</strong>：柚子、檸檬皮、榲桲、煙燻礦石</li>
        <li><strong>飲用溫度</strong>：<strong>7–13°C</strong>（冷飲）</li>
        <li><strong>醒酒</strong>：無需醒酒；陳年潛力 <strong>3–5 年</strong></li>
      </ul>
    \`,
  },
  {
    type: 'quiz',
    question: 'Bierzo DO 最著名且種植在板岩梯田上的主要紅品種是什麼？',"""
src = src.replace(old_quiz, new_variety_slide)

# 修正反引號轉義問題
src = src.replace("    `,\n  },\n  {\n    type: 'quiz',\n    question: 'Bierzo DO", "    `,\n  },\n  {\n    type: 'quiz',\n    question: 'Bierzo DO")

# 2d. 更新 summary keyPoints
old_summary = """    keyPoints: [
      '位於萊昂省西部，碗形盆地受大西洋微氣候調節',
      '板岩（Pizarra）梯田是最頂級 Mencía 的風土基礎',
      'Mencía：紫羅蘭花香、紅果、鉛筆礦石感，低單寧優雅',
      'Descendientes de J. Palacios 是推動 Bierzo 國際聲譽的核心推手',
    ],"""
new_summary = """    keyPoints: [
      '萊昂省西北部碗形盆地，北鄰阿斯圖里亞斯，西接加利西亞；半濕潤氣候，夏 20.8°C、年雨 652mm',
      '葡萄園 2,982 公頃，海拔 450–1,000m；高海拔板岩梯田孕育頂級 Mencía',
      '官方口號「Bierzo, the land of Mencía」——酸櫻桃・石榴・碎石礦物感，13–16°C，醒酒 1h，陳年 10 年+',
      'Godello 白酒：柚子・煙燻礦石，7–13°C，陳年 3–5 年；Descendientes de J. Palacios 是旗艦推手',
    ],"""
src = src.replace(old_summary, new_summary)

with open('src/components/spain/data/lessonSlides.js', 'w', encoding='utf-8') as f:
    f.write(src)
print('✅ lessonSlides.js: S2M1L3 Bierzo 已更新')
