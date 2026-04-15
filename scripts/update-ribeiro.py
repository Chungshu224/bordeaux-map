"""更新 Ribeiro DO 的 spain-appellations.json 與 lessonSlides.js 資料"""
import json

# ── 1. spain-appellations.json ──────────────────────────────────────
with open('public/spain/spain-appellations.json', encoding='utf-8') as f:
    data = json.load(f)

for a in data:
    if a.get('zonName') == 'Ribeiro':
        a['nameTranslation'] = '萊貝羅'
        a['location'] = '加利西亞，Ribadavia（奧倫塞省）'
        a['history'] = '1932 年正式確立 DO，是加利西亞歷史最悠久的命名產區；目前正歷經以原生品種為主軸的復興'
        a['grapes'] = [
            'Treixadura', 'Albariño', 'Godello', 'Torrontés', 'Loureira',
            'Caiño Longo', 'Caiño Tinto', 'Caiño Bravo',
            'Ferrón', 'Sousón', 'Brancellao', 'Mencía',
        ]
        a['climate'] = {
            'summerMaxC': 40,
            'winterMinC': -3,
            'annualRainfallMm': 900,
            'annualSunshineHours': 2250,
        }
        a['elevation'] = '100–350m'
        a['soilType'] = '花崗岩砂質土（70%）、片岩（20%）、沉積土（10%）'
        a['vineyardHa'] = 2350
        a['marqueeVariety'] = 'Treixadura（被譽為「萊貝羅葡萄園的瑰寶」，精緻滑順，花香、果香與香脂氣息）'
        a['blendingStyle'] = '大多數酒款以 Treixadura 為主體與其他原生品種混釀，酒精 12–13.5%'
        a['industry'] = 'colleteiros 小型獨立生產者堅持自家種植傳統釀造；大型合作社與精品酒莊均大量現代化投資'
        a['styles'] = ['白酒', '紅酒']
        a['description'] = (
            '1932 年設立 DO 的加利西亞最古老命名產區，位於 Ribadavia，海拔 100–350m，2,350 公頃葡萄園。'
            '花崗岩砂質土壤（70%）賦予清新礦感；夏季最高 40°C、冬季最低 -3°C，年雨 900mm，年日照 2,250 小時。'
            'Treixadura 為旗艦白品種（優雅花香、香脂、多層次），通常混釀 Albariño、Godello 等原生品種。'
            '紅酒則以多種 Caiño 品種與 Sousón 為特色。'
            '擁有眾多 colleteiros（小型獨立生產者），近年正歷經原生品種復興。'
        )
        print('✅ spain-appellations.json: Ribeiro 已更新')
        break

with open('public/spain/spain-appellations.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# ── 2. lessonSlides.js ───────────────────────────────────────────────
with open('src/components/spain/data/lessonSlides.js', encoding='utf-8') as f:
    src = f.read()

# 2a. 封面 bullet
src = src.replace(
    "{ icon: '🍃', label: 'Ribeiro', text: '加利西亞最古老的產區，Treixadura 和 Godello 白酒複雜度驚人' },",
    "{ icon: '🍃', label: 'Ribeiro（1932 DO）', text: '加利西亞最古老 DO，Treixadura 旗艦品種，colleteiros 傳統小農；花崗岩砂質土壤，夏 40°C/冬 -3°C' },",
)

# 2b. compare card Ribeiro
old_compare = """      {
        icon: '🍃',
        label: 'Ribeiro DO',
        desc: '加利西亞最古老產區。主要品種：白酒 Treixadura（帶花香與豐腴質感）、Godello、Albariño；紅酒 Sousón、Caíño Tinto。風格豐盈多層次。',
        color: '#1e8449',
      },"""
new_compare = """      {
        icon: '🍃',
        label: 'Ribeiro DO（1932 年）',
        desc: '加利西亞最古老 DO，位於 Ribadavia，2,350 公頃，海拔 100–350m。花崗岩砂質土（70%）；夏最高 40°C、冬最低 -3°C、年雨 900mm、年日照 2,250h。白：<strong>Treixadura</strong>（旗艦，優雅花香、果香與香脂）+ Albariño、Godello、Torrontés、Loureira；紅：Caiño Longo、Caiño Tinto、Caiño Bravo、Sousón、Brancellao、Mencía 等。大多以 Treixadura 為主體混釀，酒精 12–13.5%。<em>colleteiros</em> 小型獨立生產者延續傳統釀造文化；近年積極現代化復興。',
        color: '#1e8449',
      },"""
src = src.replace(old_compare, new_compare)

# 2c. 插入 Ribeiro 專屬內容投影片（在 Ribeira Sacra 投影片之前）
ribeiro_slide = """\
  {
    type: 'content',
    icon: '🍃',
    title: 'Ribeiro：加利西亞最古老 DO 的傳統復興',
    html: `
      <h4>🏛️ 歷史與地理背景</h4>
      <ul>
        <li><strong>1932 年</strong>正式確立 DO，是加利西亞歷史最悠久的命名產區</li>
        <li>位於奧倫塞省 <strong>Ribadavia</strong>，葡萄園約 <strong>2,350 公頃</strong>，海拔 100–350m</li>
        <li>目前正歷經復興：憑藉原生品種在國際市場重新嶄露頭角</li>
      </ul>
      <h4>🌤️ 氣候與土壤</h4>
      <ul>
        <li><strong>氣候</strong>：夏最高 40°C、冬最低 -3°C，年雨 900mm，年日照 <strong>2,250 小時</strong></li>
        <li><strong>土壤</strong>：花崗岩砂質土（70%）、片岩（20%）、沉積土（10%）</li>
      </ul>
      <h4>🍇 明星品種：Treixadura</h4>
      <ul>
        <li>被譽為「<strong>萊貝羅葡萄園的瑰寶</strong>」，發芽與成熟較慢，對海拔敏感</li>
        <li><strong>風味</strong>：精緻花香（玫瑰、白花）、桃子、杏桃、淡淡香脂（balsamic）氣息，質地滑順圓潤</li>
        <li>多以 Treixadura 為主體，混釀 Albariño、Godello、Torrontés、Loureira，酒精 <strong>12–13.5%</strong></li>
      </ul>
      <h4>🍷 完整品種列表</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Treixadura</strong>（旗艦）</li>
            <li>Albariño、Godello</li>
            <li>Torrontés、Loureira</li>
          </ul>
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li>Caiño Longo、Caiño Tinto</li>
            <li>Caiño Bravo、Ferrón</li>
            <li>Sousón、Brancellao、Mencía</li>
          </ul>
        </div>
      </div>
      <h4>👨‍🌾 產業特色</h4>
      <ul>
        <li><strong>colleteiros</strong>：眾多小型獨立生產者，堅持以自家種植葡萄進行傳統釀造</li>
        <li>大型合作社與精品酒莊並存，均大量投入現代化與品質提升</li>
      </ul>
    \`,
  },
  {
    type: 'content',
    icon: '⬛',
    title: 'Ribeira Sacra：陡峭梯田、古羅馬與 Mencía',"""

old_ribeira_start = """  {
    type: 'content',
    icon: '⬛',
    title: 'Ribeira Sacra：陡峭梯田、古羅馬與 Mencía',"""

src = src.replace(old_ribeira_start, ribeiro_slide)

# 2d. 擴充 Godello 投影片中的 Treixadura 段落
old_treix = """      <h4>💡 Treixadura（Ribeiro 的寶貝）</h4>
      <p>Ribeiro 的代表白品種，帶有玫瑰花瓣、杏桃和淡淡香草，質地圓潤。通常與 Godello、Albariño 混調，增添複雜度。</p>"""
new_treix = """      <h4>💡 Treixadura（Ribeiro 的旗艦品種）</h4>
      <p>Ribeiro 的代表白品種，被譽為「萊貝羅葡萄園的瑰寶」。精緻花香、桃子、杏桃與淡淡香脂（balsamic）氣息，質地圓潤滑順。通常以 Treixadura 為主體，混釀 Albariño、Godello、Loureira，增添複雜度與平衡感（酒精 12–13.5%）。</p>"""
src = src.replace(old_treix, new_treix)

# 2e. summary keyPoints 更新 Ribeiro 條目
src = src.replace(
    "'Ribeiro：最古老的加利西亞產區，Treixadura 和 Godello 白酒並重',",
    "'Ribeiro（1932 DO）：加利西亞最古老命名產區；Treixadura 旗艦白品種（花香、香脂、混釀為主），colleteiros 傳統小農；花崗岩砂質土（70%），年日照 2,250h',",
)

with open('src/components/spain/data/lessonSlides.js', 'w', encoding='utf-8') as f:
    f.write(src)
print('✅ lessonSlides.js: S2M2L2 Ribeiro 已更新（含新增專屬投影片）')
