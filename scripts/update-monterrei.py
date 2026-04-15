"""更新 Monterrei DO 的 spain-appellations.json 與 lessonSlides.js 資料"""
import json

# ── 1. spain-appellations.json ──────────────────────────────────────
with open('public/spain/spain-appellations.json', encoding='utf-8') as f:
    data = json.load(f)

for a in data:
    if a.get('zonName') == 'Monterrei':
        a['nameTranslation'] = '蒙特雷（國王之山 King\'s Mountain）'
        a['location'] = '加利西亞南部，Verín（奧倫塞省），鄰近葡萄牙邊境'
        a['landmark'] = '山頂堡壘俯瞰南北兩側葡萄園，鄰近通往馬德里的道路'
        a['history'] = '1970 年代獲臨時 DO 地位；1996 年正式確立 DO'
        a['grapes'] = [
            'Doña Blanca', 'Godello', 'Treixadura',
            'Mencía', 'Bastardo',
        ]
        a['climate'] = {
            'summerMaxC': 37,
            'winterMinC': -5,
            'annualRainfallMm': 700,
            'annualSunshineHours': 2200,
        }
        a['elevation'] = '400–500m'
        a['soilType'] = '花崗岩、板岩、黏土'
        a['vineyardHa'] = 491
        a['grading'] = 'Monterrei Superior：≥85% 推薦原生品種'
        a['trend'] = '清新白酒與年輕 Mencía 紅酒為主；新投資進入小型家族酒莊與合作社；仍有大量散裝銷售，原生品種開發處於早期階段，潛力巨大'
        a['description'] = (
            '1996 年正式 DO，加利西亞最南端、最靠近葡萄牙的產區，位於 Verín，海拔 400–500m，491 公頃葡萄園。'
            '氣候介於大西洋與大陸性之間：夏最高 37°C、冬最低 -5°C，年雨 700mm，年日照 2,200 小時。'
            '土壤含花崗岩、板岩與黏土。白酒：Doña Blanca（主）、Godello、Treixadura；紅酒：Mencía、Bastardo。'
            '設有 Monterrei Superior 標籤（≥85% 推薦原生品種）。'
            '正處於原生品種緩慢復甦階段，領先酒莊已展現巨大潛力。'
        )
        print('✅ spain-appellations.json: Monterrei 已更新')
        break

with open('public/spain/spain-appellations.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# ── 2. lessonSlides.js ───────────────────────────────────────────────
with open('src/components/spain/data/lessonSlides.js', encoding='utf-8') as f:
    src = f.read()

# 2a. 封面 title + subtitle + points
src = src.replace(
    "    title: 'Ribeiro · Valdeorras · Ribeira Sacra',\n    subtitle: 'Level 2 · 加利西亞的三個寶藏產區',",
    "    title: 'Ribeiro · Valdeorras · Ribeira Sacra · Monterrei',\n    subtitle: 'Level 2 · 加利西亞的四個寶藏產區',",
)

src = src.replace(
    "      { icon: '⬛', label: 'Ribeira Sacra', text: 'Miño/Sil 河谷陡峭梯田，海拔 400–500m，Mencía 紅酒、Godello 白酒，古羅馬釀酒史' },\n    ],",
    "      { icon: '⬛', label: 'Ribeira Sacra', text: 'Miño/Sil 河谷陡峭梯田，海拔 400–500m，Mencía 紅酒、Godello 白酒，古羅馬釀酒史' },\n      { icon: '🏰', label: 'Monterrei（國王之山）', text: '1996 DO，加利西亞最南端，鄰近葡萄牙；清新白酒 Doña Blanca/Godello；Monterrei Superior 標籤' },\n    ],",
)

# 2b. 地圖 description 更新
src = src.replace(
    "    description: 'Ribeiro・Valdeorras・Ribeira Sacra — 多樣地形與板岩土壤孕育各具特色的白酒與紅酒。',",
    "    description: 'Ribeiro・Valdeorras・Ribeira Sacra・Monterrei — 多樣地形與花崗岩/板岩土壤孕育各具特色的白酒與紅酒。',",
)

# 2c. compare title + 加入 Monterrei compare item（在 Ribeira Sacra 後）
src = src.replace(
    "    title: '加利西亞三大寶藏產區比較',",
    "    title: '加利西亞四大寶藏產區比較',",
)

old_compare_end = """      {
        icon: '⬛',
        label: 'Ribeira Sacra DO',
        desc: '「神聖河岸」，梯田沿 Miño（均溫 14°C、雨量 900mm）與 Sil（均溫 13°C、雨量 700mm）河谷分布。海拔 400–500m，土壤混合花崗岩、板岩、石灰岩。五子產區以 Amandi 最知名（古羅馬曾供應皇帝餐桌）。Mencía 展現覆盆子、花香、鉛筆芯礦石感；Godello 白酒精彩並存。手工採收成本高。',
        color: '#2c3e50',
      },
    ],
  },"""
new_compare_end = """      {
        icon: '⬛',
        label: 'Ribeira Sacra DO',
        desc: '「神聖河岸」，梯田沿 Miño（均溫 14°C、雨量 900mm）與 Sil（均溫 13°C、雨量 700mm）河谷分布。海拔 400–500m，土壤混合花崗岩、板岩、石灰岩。五子產區以 Amandi 最知名（古羅馬曾供應皇帝餐桌）。Mencía 展現覆盆子、花香、鉛筆芯礦石感；Godello 白酒精彩並存。手工採收成本高。',
        color: '#2c3e50',
      },
      {
        icon: '🏰',
        label: 'Monterrei DO（1996 年）',
        desc: '加利西亞最南端，緊鄰葡萄牙邊境；位於 Verín，海拔 400–500m，491 公頃。氣候偏大陸性：夏最高 37°C、冬最低 -5°C、年雨 700mm（加利西亞最乾）、年日照 2,200h。土壤：花崗岩、板岩、黏土。白：<strong>Doña Blanca</strong>（主）、Godello、Treixadura；紅：Mencía、Bastardo。設有 <strong>Monterrei Superior 標籤</strong>（≥85% 推薦原生品種）。原生品種復甦中，新投資進入小型家族酒莊；潛力巨大但仍有大量散裝銷售。',
        color: '#c0392b',
      },
    ],
  },"""
src = src.replace(old_compare_end, new_compare_end)

# 2d. 在 quiz 之前插入 Monterrei 內容投影片
monterrei_slide = """\
  {
    type: 'content',
    icon: '🏰',
    title: 'Monterrei：加利西亞最南端的「國王之山」',
    html: `
      <h4>🏰 地理與歷史</h4>
      <ul>
        <li>名稱意為「<strong>國王之山（King's Mountain）</strong>」，山頂屹立著俯瞰葡萄園的古老堡壘</li>
        <li>位於加利西亞南端 <strong>Verín</strong>（奧倫塞省），<strong>緊鄰葡萄牙邊境</strong></li>
        <li>1970 年代曾有臨時 DO 地位，<strong>1996 年正式確立 DO</strong></li>
        <li>葡萄園面積 <strong>491 公頃</strong>，海拔 400–500m</li>
      </ul>
      <h4>🌤️ 氣候與土壤</h4>
      <ul>
        <li>氣候偏<strong>大陸性</strong>（與加利西亞其他大西洋型產區不同）：夏最高 37°C、冬最低 -5°C</li>
        <li>年雨 <strong>700mm</strong>（加利西亞最乾燥），年日照 <strong>2,200 小時</strong></li>
        <li>土壤：<strong>花崗岩、板岩、黏土</strong></li>
      </ul>
      <h4>🍇 品種與酒款</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Doña Blanca</strong>（主導；豐腴清新）</li>
            <li>Godello、Treixadura</li>
          </ul>
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Mencía</strong>（主導；年輕果味）</li>
            <li>Bastardo</li>
          </ul>
        </div>
      </div>
      <h4>🏆 Monterrei Superior</h4>
      <p>DO 設立 <strong>Monterrei Superior 標籤</strong>，要求至少 <strong>85% 推薦原生品種</strong>，代表產區最高品質標準。傾向生產清新白酒與年輕 Mencía 紅酒；新資金正流入小型家族酒莊，但原生品種開發仍處早期，部分酒款仍以散裝形式銷售。</p>
    `,
  },
  {
    type: 'quiz',"""

old_quiz_start = """  {
    type: 'quiz',
    question: 'Godello 白葡萄品種主要在哪個加利西亞產區「復興」，並以板岩土壤帶來的礦石感著稱？',"""
src = src.replace(old_quiz_start, monterrei_slide + "\n    question: 'Godello 白葡萄品種主要在哪個加利西亞產區「復興」，並以板岩土壤帶來的礦石感著稱？',")

# 2e. summary 更新
src = src.replace(
    "    message: '加利西亞三寶學習完成！',",
    "    message: '加利西亞四大產區學習完成！',",
)
src = src.replace(
    "      'Ribeira Sacra：Miño/Sil 河谷梯田，400–500m，古羅馬釀酒史；Amandi 最知名；Mencía（紅）+ Godello（白）',\n      'Godello：加利西亞白酒寶石，豐滿礦石，媲美頂級 Burgundy Chardonnay',",
    "      'Ribeira Sacra：Miño/Sil 河谷梯田，400–500m，古羅馬釀酒史；Amandi 最知名；Mencía（紅）+ Godello（白）',\n      'Monterrei（1996 DO）：加利西亞最南端「國王之山」，緊鄰葡萄牙；偏大陸性氣候年雨 700mm；Doña Blanca（白）/ Mencía（紅）；Monterrei Superior 標籤（≥85%）',\n      'Godello：加利西亞白酒寶石，豐滿礦石，媲美頂級 Burgundy Chardonnay',",
)

with open('src/components/spain/data/lessonSlides.js', 'w', encoding='utf-8') as f:
    f.write(src)
print('✅ lessonSlides.js: S2M2L2 Monterrei 已整合（新增投影片、compare、封面、summary）')
