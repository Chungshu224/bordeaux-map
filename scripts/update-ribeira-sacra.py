"""更新 spain-appellations.json 與 lessonSlides.js 中 Ribeira Sacra 的資料"""
import json, re

# ── 1. spain-appellations.json ──────────────────────────────────────────────
with open('public/spain/spain-appellations.json', encoding='utf-8') as f:
    data = json.load(f)

for a in data:
    if a.get('zonName') == 'Ribeira Sacra':
        a['grapes'] = [
            'Mencía', 'Brancellao', 'Merenzao', 'Caiño', 'Sousón', 'Tempranillo',
            'Godello', 'Treixadura', 'Albariño', 'Doña Blanca', 'Loureira', 'Torrontés',
        ]
        a['subzones'] = ['Amandi（最知名）', 'Chantada', 'Ribeiras do Miño', 'Ribeiras do Sil', 'Quiroga-Bibei']
        a['climate'] = {
            'minoValley': {'avgTempC': 14, 'annualRainfallMm': 900},
            'silValley':  {'avgTempC': 13, 'annualRainfallMm': 700},
        }
        a['elevation'] = '400–500m'
        a['soilType']  = '花崗岩、板岩、石灰岩'
        a['history']   = '古羅馬時期就有釀酒紀錄；Amandi 的加料葡萄酒加七鰓鰻曾專供皇帝餐桌'
        a['description'] = (
            'Miño 與 Sil 河谷陡峭梯田，葡萄園海拔 400–500m，土壤混合花崗岩、板岩與石灰岩。'
            'Mencía 紅酒展現覆盆子、花香與鉛筆芯礦石感；Godello 白酒同樣出色。'
            '釀酒史可追溯至古羅馬時期，Amandi 子產區的加料葡萄酒曾供應皇帝餐桌。'
            ' Miño 河谷均溫 14°C、雨量 900mm；Sil 河谷均溫 13°C、雨量 700mm。'
        )
        print('✅ spain-appellations.json: Ribeira Sacra 已更新')
        break

with open('public/spain/spain-appellations.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# ── 2. lessonSlides.js ───────────────────────────────────────────────────────
with open('src/components/spain/data/lessonSlides.js', encoding='utf-8') as f:
    src = f.read()

# 2a. 封面 bullet
src = src.replace(
    "{ icon: '⬛', label: 'Ribeira Sacra', text: '陡峭花崗岩板岩梯田，Mencía 紅酒和 Godello 白酒並列' },",
    "{ icon: '⬛', label: 'Ribeira Sacra', text: 'Miño/Sil 河谷陡峭梯田，海拔 400–500m，Mencía 紅酒、Godello 白酒，古羅馬釀酒史' },",
)

# 2b. compare item
old_compare = """      {
        icon: '⬛',
        label: 'Ribeira Sacra DO',
        desc: '「神聖河岸」，陡峭梯田沿 Miño 和 Sil 河谷。板岩＋花崗岩。Mencía 展現輕盈花香；Godello 白酒同樣精彩。手工採收不可避免，成本高。',
        color: '#2c3e50',
      },"""
new_compare = """      {
        icon: '⬛',
        label: 'Ribeira Sacra DO',
        desc: '「神聖河岸」，梯田沿 Miño（均溫 14°C、雨量 900mm）與 Sil（均溫 13°C、雨量 700mm）河谷分布。海拔 400–500m，土壤混合花崗岩、板岩、石灰岩。五子產區以 Amandi 最知名（古羅馬曾供應皇帝餐桌）。Mencía 展現覆盆子、花香、鉛筆芯礦石感；Godello 白酒精彩並存。手工採收成本高。',
        color: '#2c3e50',
      },"""
src = src.replace(old_compare, new_compare)

# 2c. 在 Godello content slide 之前插入 Ribeira Sacra 專屬 content slide
old_godello = """  {
    type: 'content',
    icon: '🍇',
    title: 'Godello：加利西亞的白酒寶石',"""
new_ribeira_slide = """  {
    type: 'content',
    icon: '⬛',
    title: 'Ribeira Sacra：陡峭梯田、古羅馬與 Mencía',
    html: `
      <h4>🌄 壯觀地形與風土</h4>
      <ul>
        <li>葡萄園沿 <strong>Miño 與 Sil 河谷的陡峭山谷與峽谷</strong>生長，景色如畫，被譽為西班牙最美葡萄園</li>
        <li>海拔 <strong>400–500m</strong>，土壤混合花崗岩、板岩與石灰岩</li>
        <li>兩大氣候微區：<strong>Miño 河谷</strong>（均溫 14°C、年雨量 900mm，較溫潤）；<strong>Sil 河谷</strong>（均溫 13°C、年雨量 700mm，較乾燥）</li>
      </ul>
      <h4>🏛️ 古羅馬歷史與 Amandi</h4>
      <ul>
        <li>釀酒史可追溯至<strong>古羅馬時期</strong>；傳說 Amandi 子產區的加料葡萄酒（Spiced Wines）加七鰓鰻曾專供皇帝餐桌</li>
        <li>五個子產區：<strong>Amandi</strong>（最知名）、Chantada、Ribeiras do Miño、Ribeiras do Sil、Quiroga-Bibei</li>
      </ul>
      <h4>🍇 葡萄品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Mencía</strong>（主導）</li>
            <li>Brancellao、Merenzao</li>
            <li>Caiño、Sousón、Tempranillo</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li>Godello、Treixadura</li>
            <li>Albariño、Doña Blanca</li>
            <li>Loureira、Torrontés</li>
          </ul>
        </div>
      </div>
      <p style="margin-top:10px">Mencía 輕盈細膩，帶覆盆子、紫羅蘭花香與鉛筆芯礦石感，被譽為「<strong>西北版 Pinot Noir</strong>」；陡峭地形全靠手工採收。</p>
    \`,
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Godello：加利西亞的白酒寶石',"""
src = src.replace(old_godello, new_ribeira_slide)

# 2d. 更新 summary keyPoints Ribeira Sacra 那行
src = src.replace(
    "'Ribeira Sacra：陡峭梯田，Mencía 紅酒 + Godello 白酒都精彩',",
    "'Ribeira Sacra：Miño/Sil 河谷梯田，400–500m，古羅馬釀酒史；Amandi 最知名；Mencía（紅）+ Godello（白）',",
)

with open('src/components/spain/data/lessonSlides.js', 'w', encoding='utf-8') as f:
    f.write(src)
print('✅ lessonSlides.js: S2M2L2 Ribeira Sacra 已更新（compare + 新 content slide + cover + summary）')
