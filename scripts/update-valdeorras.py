"""更新 Valdeorras DO 的 spain-appellations.json 與 lessonSlides.js 資料"""
import json

# ── 1. spain-appellations.json ──────────────────────────────────────
with open('public/spain/spain-appellations.json', encoding='utf-8') as f:
    data = json.load(f)

for a in data:
    if a.get('zonName') == 'Valdeorras':
        a['nameTranslation'] = '黃金之谷 (Valley of Gold)'
        a['location'] = '加利西亞東部，Villamartín de Valdeorras；Sil 河塑造的東西向山谷走廊'
        a['grapes'] = [
            'Godello', 'Doña Blanca', 'Loureira', 'Treixadura',
            'Albariño', 'Torrontés', 'Lado',
            'Mencía', 'Merenzao', 'Sousón', 'Albarello',
            'Tempranillo', 'Brancellao', 'Caiño Tinto', 'Espadeiro', 'Ferrón',
        ]
        a['climate'] = {
            'summerMaxC': 40,
            'winterMinC': -8,
            'annualRainfallMm': '850–1,000',
            'annualSunshineHours': 2200,
        }
        a['elevation'] = '300–700m'
        a['soilType'] = '板岩、花崗岩、黏土、含鐵土、石英岩、片岩'
        a['history'] = '名稱意為「黃金之谷」，古羅馬人 2000 年前即對此地有濃厚興趣'
        a['grading'] = 'Valdeorras Castas Nobles：最低 85% 推薦品種'
        a['revival'] = '過去 30 年致力復興原生品種；現代酒莊技術帶動 Godello 白酒崛起'
        a['description'] = (
            '加利西亞東部「黃金之谷」，Sil 河谷東西走廊，海拔 300–700m，'
            '土壤涵蓋板岩、花崗岩、片岩、石英岩等六種類型。'
            '氣候極端：夏季最高達 40°C，冬季最低 -8°C，年雨 850–1,000mm，年日照 2,200 小時。'
            'Godello 白酒（豐滿、複雜）是復興旗手，30 年來致力原生品種復育。'
            '特設 Valdeorras Castas Nobles 等級（≥85% 推薦品種）。'
        )
        print('✅ spain-appellations.json: Valdeorras 已更新')
        break

with open('public/spain/spain-appellations.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# ── 2. lessonSlides.js ───────────────────────────────────────────────
with open('src/components/spain/data/lessonSlides.js', encoding='utf-8') as f:
    src = f.read()

# 2a. 封面 bullet
src = src.replace(
    "{ icon: '🪨', label: 'Valdeorras', text: 'Godello 復興的發源地，板岩土壤帶來礦石張力' },",
    "{ icon: '🪨', label: 'Valdeorras「黃金之谷」', text: 'Godello 復興發源地，夏達 40°C、冬低 -8°C，年日照 2,200h；Castas Nobles 等級' },",
)

# 2b. compare item Valdeorras
old_compare = """      {
        icon: '🪨',
        label: 'Valdeorras DO',
        desc: '位於加利西亞東部山區，板岩土壤，海拔 400-700 公尺。Godello 白酒在此復興，展現礦石感、蜂蜜、白花和豐滿質地。Mencía 也有種植。',
        color: '#8e44ad',
      },"""
new_compare = """      {
        icon: '🪨',
        label: 'Valdeorras DO「黃金之谷」',
        desc: '加利西亞東部 Sil 河谷，海拔 300–700m。氣候極端：夏最高 40°C、冬最低 -8°C、年雨 850–1,000mm、年日照 2,200h。六種土壤（板岩、花崗岩、片岩等）。白：Godello 為核心（豐滿複雜），另有 Doña Blanca、Loureira、Lado 等 7 種；紅：Mencía 為主，另有 8 種。特設 <strong>Castas Nobles 等級</strong>（≥85% 推薦品種）。近 30 年原生品種復育成果顯著。',
        color: '#8e44ad',
      },"""
src = src.replace(old_compare, new_compare)

# 2c. Godello content slide — 加入 Valdeorras 風土數據
old_godello_content = """    html: `
      <p>Godello 是加利西亞最複雜的白葡萄品種，在 1980 年代幾乎瀕臨絕種，但被 Valdeorras 的釀酒師 Horacio Fernández Bóveda 拯救，如今是西班牙增長最快的白酒品種之一。</p>
      <h4>🍷 Godello 風味特徵</h4>
      <ul>
        <li><strong>香氣</strong>：白桃、杏子、蜂蜜、白花（金合歡）、蜂蠟</li>
        <li><strong>口感</strong>：豐滿圓潤、中高酸、帶有油脂感和礦石骨架</li>
        <li><strong>桶陳版本</strong>：增加奶油烤麵包感，複雜度媲美頂級 Burgundy 白酒</li>
      </ul>
      <h4>🌍 全球認可</h4>
      <p>業界常將頂級 Godello 與布根地 Chardonnay 相提並論。</p>
      <h4>💡 Treixadura（Ribeiro 的寶貝）</h4>
      <p>Ribeiro 的代表白品種，帶有玫瑰花瓣、杏桃和淡淡香草，質地圓潤。通常與 Godello、Albariño 混調，增添複雜度。</p>
    `,"""
new_godello_content = """    html: `
      <p>Godello 是加利西亞最複雜的白葡萄品種，在 1980 年代幾乎瀕臨絕種，但被 Valdeorras 的釀酒師 <strong>Horacio Fernández Bóveda</strong> 拯救，如今是西班牙增長最快的白酒品種之一。</p>
      <h4>🪨 Valdeorras 的獨特風土</h4>
      <ul>
        <li><strong>「黃金之谷」</strong>：名稱源自古羅馬人 2,000 年前對此地的濃厚興趣（可能與黃金採礦有關）</li>
        <li><strong>極端氣候</strong>：夏最高 40°C、冬最低 -8°C，年雨 850–1,000mm，年日照 <strong>2,200 小時</strong></li>
        <li><strong>海拔 300–700m</strong>，六種土壤：板岩、花崗岩、黏土、含鐵土、石英岩、片岩</li>
        <li><strong>Castas Nobles 等級</strong>：新設標準，要求至少 85% 推薦品種，代表產區最高品質承諾</li>
      </ul>
      <h4>🍷 Godello 風味特徵</h4>
      <ul>
        <li><strong>香氣</strong>：白桃、杏子、蜂蜜、白花（金合歡）、蜂蠟</li>
        <li><strong>口感</strong>：豐滿圓潤、中高酸、帶有油脂感和礦石骨架</li>
        <li><strong>桶陳版本</strong>：增加奶油烤麵包感，複雜度媲美頂級 Burgundy 白酒</li>
      </ul>
      <h4>💡 Treixadura（Ribeiro 的寶貝）</h4>
      <p>Ribeiro 的代表白品種，帶有玫瑰花瓣、杏桃和淡淡香草，質地圓潤。通常與 Godello、Albariño 混調，增添複雜度。</p>
    `,"""
src = src.replace(old_godello_content, new_godello_content)

# 2d. summary keyPoints
src = src.replace(
    "'Valdeorras：Godello 復興發源地，板岩土壤，礦石張力出色',",
    "'Valdeorras「黃金之谷」：Godello 復興發源地，夏 40°C/冬 -8°C/年日照 2,200h；Castas Nobles 等級（≥85% 推薦品種）',",
)

with open('src/components/spain/data/lessonSlides.js', 'w', encoding='utf-8') as f:
    f.write(src)
print('✅ lessonSlides.js: S2M2L2 Valdeorras 已更新')
