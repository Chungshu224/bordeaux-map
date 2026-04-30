<template>
  <div class="ssi-page">
    <!-- ── 頁首 ──────────────────────────────────────────────────── -->
    <div class="ssi-hero">
      <div class="ssi-hero-inner">
        <button class="back-btn" @click="$router.back()">← {{ $t('common.actions.back') }}</button>
        <h1>🎛️ 互動特化 Slide 全覽</h1>
        <p class="hero-sub">所有產區課程中的深度互動幻燈片一覽，可依產區或主題篩選</p>
        <div class="hero-stats">
          <div class="hstat"><span class="hstat-n">{{ allSlides.length }}</span><span class="hstat-l">總 Slide 數</span></div>
          <div class="hstat"><span class="hstat-n">{{ regions.length }}</span><span class="hstat-l">產區</span></div>
          <div class="hstat"><span class="hstat-n">{{ enhancedCount }}</span><span class="hstat-l">D 階段強化</span></div>
          <div class="hstat"><span class="hstat-n">{{ categories.length }}</span><span class="hstat-l">主題分類</span></div>
        </div>
      </div>
    </div>

    <!-- ── 篩選列 ──────────────────────────────────────────────────── -->
    <div class="filter-bar" :class="{ sticky: isFilterSticky }" ref="filterBarRef">
      <div class="filter-bar-inner">
        <!-- 產區篩選 -->
        <div class="filter-group">
          <span class="filter-label">產區</span>
          <div class="filter-chips">
            <button
              v-for="r in ['全部', ...regionKeys]"
              :key="r"
              class="chip"
              :class="{ active: activeRegion === r }"
              @click="activeRegion = r; activeCat = '全部'"
            >
              <span v-if="r !== '全部'">{{ regionMeta[r]?.flag }}</span>
              {{ r === '全部' ? '全部' : regionMeta[r]?.name }}
              <span class="chip-count">{{ regionCount(r) }}</span>
            </button>
          </div>
        </div>
        <!-- 主題篩選 -->
        <div class="filter-group">
          <span class="filter-label">主題</span>
          <div class="filter-chips">
            <button
              v-for="c in ['全部', ...categories]"
              :key="c"
              class="chip chip-cat"
              :class="{ active: activeCat === c }"
              @click="activeCat = c"
            >
              <span v-if="c !== '全部'">{{ catMeta[c]?.icon }}</span>
              {{ c === '全部' ? '全部' : catMeta[c]?.label }}
            </button>
            <button
              class="chip chip-enhanced"
              :class="{ active: showEnhancedOnly }"
              @click="showEnhancedOnly = !showEnhancedOnly"
            >⚡ D 階段強化</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 搜尋 ──────────────────────────────────────────────────── -->
    <div class="search-row">
      <input
        v-model="searchQuery"
        class="search-input"
        type="text"
        placeholder="🔍 搜尋 Slide 名稱或描述…"
      />
      <span class="result-count">顯示 {{ filteredSlides.length }} / {{ allSlides.length }} 個 Slide</span>
    </div>

    <!-- ── 空狀態 ──────────────────────────────────────────────────── -->
    <div v-if="filteredSlides.length === 0" class="empty-state">
      <div class="es-icon">🔍</div>
      <p>沒有符合條件的 Slide，請嘗試其他篩選條件</p>
      <button class="reset-btn" @click="resetFilters">重設篩選</button>
    </div>

    <!-- ── Slide 卡片網格 ──────────────────────────────────────────── -->
    <div class="slides-grid" v-else>
      <div
        v-for="s in filteredSlides"
        :key="s.type + s.region"
        class="slide-card"
        :style="{ '--rc': regionMeta[s.region]?.color }"
      >
        <!-- 卡頭 -->
        <div class="card-head">
          <div class="card-region-badge">
            <span class="badge-flag">{{ regionMeta[s.region]?.flag }}</span>
            <span class="badge-name">{{ regionMeta[s.region]?.name }}</span>
          </div>
          <div class="card-badges">
            <span v-if="s.isEnhanced" class="badge-enhanced">⚡ D 強化</span>
            <span class="badge-cat" :style="{ background: catMeta[s.category]?.bg }">
              {{ catMeta[s.category]?.icon }} {{ catMeta[s.category]?.label }}
            </span>
          </div>
        </div>
        <!-- 卡身 -->
        <div class="card-body">
          <h3 class="card-title">{{ s.title }}</h3>
          <p class="card-desc">{{ s.desc }}</p>
          <div class="card-meta">
            <span class="meta-type">type: <code>{{ s.type }}</code></span>
            <span class="meta-lesson">📍 {{ s.lesson }}</span>
          </div>
        </div>
        <!-- 卡尾 -->
        <div class="card-foot">
          <router-link :to="s.route" class="goto-btn">前往課程 →</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ── 產區元數據 ─────────────────────────────────────────────────────────────
const regionMeta = {
  bourgogne:  { name: '布根地',   flag: '🍷', color: '#8B4513', route: '/bourgogne' },
  germany:    { name: '德國',     flag: '🇩🇪', color: '#2c3e50', route: '/germany' },
  italy:      { name: '義大利',   flag: '🇮🇹', color: '#c0392b', route: '/italy' },
  spain:      { name: '西班牙',   flag: '🇪🇸', color: '#d4af37', route: '/spain' },
  portugal:   { name: '葡萄牙',   flag: '🇵🇹', color: '#006600', route: '/portugal' },
  loire:      { name: '羅亞爾河', flag: '🌊', color: '#1a6b8a', route: '/loire/course' },
  australia:  { name: '澳洲',     flag: '🦘', color: '#a0522d', route: '/australia' },
  california: { name: '加州',     flag: '☀️', color: '#c0392b', route: '/california/course' },
  newzealand: { name: '紐西蘭',   flag: '🥝', color: '#155724', route: '/newzealand' },
  hungary:    { name: '匈牙利',   flag: '🇭🇺', color: '#8B0000', route: '/hungary' },
}

// ── 主題元數據 ─────────────────────────────────────────────────────────────
const catMeta = {
  '分級系統': { icon: '🏅', label: '分級系統', bg: '#fff3cd' },
  '品種探索': { icon: '🍇', label: '品種探索', bg: '#d4edda' },
  '產區地理': { icon: '🗺️', label: '產區地理', bg: '#cce5ff' },
  '互動對比': { icon: '⚖️', label: '互動對比', bg: '#f8d7da' },
  '釀造工法': { icon: '🔬', label: '釀造工法', bg: '#e2d9f3' },
  '歷史文化': { icon: '📜', label: '歷史文化', bg: '#d1ecf1' },
}

// ── Slide 資料庫（全部 52 個特化 Slide）──────────────────────────────────
const allSlides = [
  // ──── 布根地 Bourgogne ────────────────────────────────────────────────
  {
    region: 'bourgogne', type: 'grape-profile', isEnhanced: false,
    title: '黑白皮諾品種特性探索',
    desc: '互動比較 Pinot Noir 與 Chardonnay 在布根地的完整表現：土壤、酸度、陳年、經典酒款。',
    category: '品種探索', lesson: 'L1 Module 2', route: '/bourgogne'
  },
  {
    region: 'bourgogne', type: 'subregion-overview', isEnhanced: false,
    title: '布根地五大次產區概覽',
    desc: '從 Chablis 到 Mâconnais，點選任一次產區查看土壤、氣候與代表 AOC。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/bourgogne'
  },
  {
    region: 'bourgogne', type: 'climat-hierarchy', isEnhanced: false,
    title: 'Climat 田塊分級體系',
    desc: '互動金字塔展示 Regional → Village → Premier Cru → Grand Cru 四層分級，並附代表田塊。',
    category: '分級系統', lesson: 'L1 Module 3', route: '/bourgogne'
  },
  {
    region: 'bourgogne', type: 'vintage-comparison', isEnhanced: false,
    title: '布根地年份品質對比',
    desc: '互動年份評分表，橫比紅白酒潛力、氣候事件、最佳飲用窗口。',
    category: '互動對比', lesson: 'L2 Module 1', route: '/bourgogne'
  },
  {
    region: 'bourgogne', type: 'winery', isEnhanced: false,
    title: '知名酒莊深度探索',
    desc: '點選 DRC、Leroy、Coche-Dury 等傳奇酒莊，了解釀酒哲學與代表酒款。',
    category: '歷史文化', lesson: 'L2 Module 2', route: '/bourgogne'
  },
  {
    region: 'bourgogne', type: 'grand-cru-monopole', isEnhanced: true,
    title: 'Grand Cru Monopole 獨占葡萄園',
    desc: 'D 強化 · 互動展示 8 個 Grand Cru Monopole——Romanée-Conti、La Tâche、Moutonne 等，歷史、面積、年產、拍賣天價全覽。',
    category: '歷史文化', lesson: 'L2 Module 2', route: '/bourgogne'
  },
  {
    region: 'bourgogne', type: 'hospices-beaune-auction', isEnhanced: true,
    title: 'Hospices de Beaune 慈善拍賣',
    desc: 'D 強化 · 574 年歷史的葡萄酒慈善拍賣：cuvée 命名規則、歷年天價、Pièce du Président 特殊拍賣互動詳解。',
    category: '歷史文化', lesson: 'L2 Module 3', route: '/bourgogne'
  },

  // ──── 德國 Germany ────────────────────────────────────────────────────
  {
    region: 'germany', type: 'germany-regions-overview', isEnhanced: false,
    title: '德國 13 大產區互動詳解',
    desc: '點選任一 Anbaugebiet，查看土壤、氣候、主要品種與代表酒莊，分三大類別組覽。',
    category: '產區地理', lesson: 'G1 M1 L3', route: '/germany'
  },
  {
    region: 'germany', type: 'riesling-terroir', isEnhanced: false,
    title: 'Riesling 五大風土全景探索',
    desc: '比較 Mosel 藍板岩、Rheingau 多元土壤、Pfalz 玄武岩、Nahe「土壤博物館」、Rheinhessen 紅坡的香氣差異。',
    category: '品種探索', lesson: 'G1 M2 L1', route: '/germany'
  },
  {
    region: 'germany', type: 'qmp-sweetness', isEnhanced: false,
    title: 'QmP 六級甜度階梯互動詳解',
    desc: '點選六層階梯（Kabinett → TBA），查看 Oechsle°、潛在酒精、香氣、配餐與傳奇拍賣價格。',
    category: '分級系統', lesson: 'G1 M3 L2', route: '/germany'
  },
  {
    region: 'germany', type: 'vdp-classification', isEnhanced: false,
    title: 'VDP 四階金字塔互動詳解',
    desc: '互動金字塔展示 Gutswein → Grosse Lage，附 GG（Grosses Gewächs）歷史、規範與代表酒款。',
    category: '分級系統', lesson: 'G1 M3 L3', route: '/germany'
  },
  {
    region: 'germany', type: 'mosel-trio', isEnhanced: true,
    title: 'Mosel 三大河流域對決',
    desc: 'D 強化 · Mittelmosel × Saar × Ruwer：三種板岩顏色、頂級 Grosse Lagen、Egon Müller / J.J. Prüm / Von Schubert 與盲品辨識捷徑。',
    category: '互動對比', lesson: 'G2 M1 L1', route: '/germany'
  },
  {
    region: 'germany', type: 'spatburgunder-regions', isEnhanced: true,
    title: 'Spätburgunder 四大產區風土對決',
    desc: 'D 強化 · Ahr × Baden × Pfalz × Württemberg：風格光譜、Meyer-Näkel vs Bernhard Huber、與勃根地對比、盲品識別。',
    category: '互動對比', lesson: 'G1 M2 L3', route: '/germany'
  },

  // ──── 義大利 Italy ────────────────────────────────────────────────────
  {
    region: 'italy', type: 'italy-regions-overview', isEnhanced: false,
    title: '義大利主要產區全覽',
    desc: '互動地圖點選 20 大區，查看代表品種、DOC/DOCG 數量與主要產區特色。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/italy'
  },
  {
    region: 'italy', type: 'docg-pyramid', isEnhanced: false,
    title: '義大利 DOC/DOCG 分級金字塔',
    desc: 'IGT → DOC → DOCG 三層分級比較，並附 2024 年最新 DOCG 完整列表互動卡。',
    category: '分級系統', lesson: 'L1 Module 2', route: '/italy'
  },
  {
    region: 'italy', type: 'italian-grape-profile', isEnhanced: false,
    title: '義大利重要品種特性探索',
    desc: 'Sangiovese、Nebbiolo、Barolo 等 12 個品種的土壤、酸度、單寧、香氣、陳年潛力互動詳解。',
    category: '品種探索', lesson: 'L1 Module 3', route: '/italy'
  },
  {
    region: 'italy', type: 'appellation-comparison', isEnhanced: false,
    title: '義大利產區 Appellation 對比',
    desc: 'Barolo vs Barbaresco、Chianti vs Brunello、Amarone vs Valpolicella 三大對決互動比較。',
    category: '互動對比', lesson: 'L2 Module 1', route: '/italy'
  },
  {
    region: 'italy', type: 'super-tuscan-evolution', isEnhanced: true,
    title: 'Super Tuscan 發展史互動時間軸',
    desc: 'D 強化 · 1968–2024 年 Super Tuscan 革命史：Sassicaia 起源、Antinori/Gaja 推動、DOC 規則外創新到 IGT 合法化的完整故事。',
    category: '歷史文化', lesson: 'L2 Module 2', route: '/italy'
  },
  {
    region: 'italy', type: 'amarone-appassimento', isEnhanced: true,
    title: 'Amarone Appassimento 凋乾工法互動詳解',
    desc: 'D 強化 · Recioto vs Amarone vs Ripasso 三製程互動比較：棚架凋乾（120 天）、貴腐影響、發酵殘糖、Masi / Allegrini / Dal Forno 傳奇。',
    category: '釀造工法', lesson: 'L2 Module 3', route: '/italy'
  },

  // ──── 西班牙 Spain ────────────────────────────────────────────────────
  {
    region: 'spain', type: 'spain-regions-overview', isEnhanced: false,
    title: '西班牙產區全覽',
    desc: '互動地圖點選 17 大產區，查看氣候、代表品種、DO 數量與典型風格。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/spain'
  },
  {
    region: 'spain', type: 'spain-region-map', isEnhanced: false,
    title: '西班牙主要產區地圖',
    desc: '高原、地中海、大西洋沿岸三大氣候帶與各 DO 地理分佈互動地圖。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/spain'
  },
  {
    region: 'spain', type: 'do-pyramid', isEnhanced: false,
    title: '西班牙 DO/DOCa 分級金字塔',
    desc: '從 Vino de Mesa 到 DOCa 的六層分級體系，附 Rioja 與 Priorat 兩個 DOCa 的特殊規範。',
    category: '分級系統', lesson: 'L1 Module 2', route: '/spain'
  },
  {
    region: 'spain', type: 'spain-grape-profile', isEnhanced: false,
    title: '西班牙重要品種特性',
    desc: 'Tempranillo、Garnacha、Albariño、Verdejo 等 10 個品種的產區、風格與食物配對互動詳解。',
    category: '品種探索', lesson: 'L1 Module 3', route: '/spain'
  },
  {
    region: 'spain', type: 'rioja-aging', isEnhanced: false,
    title: 'Rioja 陳年分級體系',
    desc: 'Joven / Crianza / Reserva / Gran Reserva 四級：橡木桶月數、法規、風格差異與代表酒款互動詳解。',
    category: '分級系統', lesson: 'L2 Module 1', route: '/spain'
  },
  {
    region: 'spain', type: 'sherry-solera', isEnhanced: true,
    title: 'Sherry Solera 索雷拉動態熟成系統',
    desc: 'D 強化 · 互動 3D 可視化：Fino/Amontillado/Oloroso 三類 Solera 的分層結構、換桶邏輯、Flor 酵母影響與 Lustau/Gonzalez Byass 傳奇酒莊。',
    category: '釀造工法', lesson: 'L2 Module 2', route: '/spain'
  },
  {
    region: 'spain', type: 'cava-quality-tiers', isEnhanced: true,
    title: 'Cava 品質等級系統互動詳解',
    desc: 'D 強化 · Cava / Cava Reserva / Gran Reserva / Cava de Paraje Calificado 四層等級、熟成月數、Macabeo/Xarel-lo/Parellada 品種組合與頂級酒莊。',
    category: '分級系統', lesson: 'L2 Module 3', route: '/spain'
  },

  // ──── 葡萄牙 Portugal ──────────────────────────────────────────────────
  {
    region: 'portugal', type: 'portugal-regions-overview', isEnhanced: false,
    title: '葡萄牙產區全覽',
    desc: '從 Minho 到 Algarve，互動點選各大 DOC 查看地理、氣候、代表品種。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/portugal'
  },
  {
    region: 'portugal', type: 'portugal-region-map', isEnhanced: false,
    title: '葡萄牙主要產區地圖',
    desc: '大西洋型、地中海型、大陸型三大氣候帶分佈地圖與 Douro/Alentejo/Vinho Verde 核心定位。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/portugal'
  },
  {
    region: 'portugal', type: 'douro-grapes', isEnhanced: false,
    title: 'Douro 葡萄品種探索',
    desc: 'Touriga Nacional、Touriga Franca、Tinta Roriz 等 5 大 Douro 品種的特性、貢獻與混調比例互動詳解。',
    category: '品種探索', lesson: 'L1 Module 2', route: '/portugal'
  },
  {
    region: 'portugal', type: 'port-styles-pyramid', isEnhanced: false,
    title: '波特酒風格金字塔',
    desc: 'Ruby → Tawny → LBV → Vintage Port 四大系列的釀造、陳年方式與風格差異互動金字塔。',
    category: '分級系統', lesson: 'L1 Module 3', route: '/portugal'
  },
  {
    region: 'portugal', type: 'port-aging-tiers', isEnhanced: false,
    title: '波特酒陳年等級系統',
    desc: 'Tawny 10/20/30/40 年等級：氧化熟成特徵、顏色變化、果乾香氣層次與 Graham\'s / Fonseca 代表酒款。',
    category: '分級系統', lesson: 'L2 Module 1', route: '/portugal'
  },
  {
    region: 'portugal', type: 'madeira-noble-grapes', isEnhanced: true,
    title: 'Madeira 四大貴族葡萄互動探索',
    desc: 'D 強化 · Sercial / Verdelho / Bual / Malmsey 四品種：甜度光譜、酸度、典型香氣、最佳年份（1900s/1920s）、Blandy\'s/Henriques 傳奇。',
    category: '品種探索', lesson: 'L2 Module 2', route: '/portugal'
  },
  {
    region: 'portugal', type: 'vinho-verde-subregions', isEnhanced: true,
    title: 'Vinho Verde 六大次產區互動詳解',
    desc: 'D 強化 · Monção/Melgaço/Lima/Cávado/Ave/Basto × Alvarinho/Loureiro 品種：土壤、降雨量、頂級酒莊（Anselmo Mendes / Quinta de Soalheiro）。',
    category: '產區地理', lesson: 'L2 Module 3', route: '/portugal'
  },

  // ──── 羅亞爾河 Loire ──────────────────────────────────────────────────
  {
    region: 'loire', type: 'loire-region-map', isEnhanced: false,
    title: '羅亞爾河谷四大次產區地圖',
    desc: 'Pays Nantais / Anjou-Saumur / Touraine / Centre 四段地理分佈與各 AOC 位置。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/loire/course'
  },
  {
    region: 'loire', type: 'loire-subregions', isEnhanced: false,
    title: '羅亞爾河谷次產區詳解',
    desc: '互動點選 4 大次產區，查看主要品種、AOC 清單、土壤與代表酒莊。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/loire/course'
  },
  {
    region: 'loire', type: 'loire-grape-profile', isEnhanced: false,
    title: '羅亞爾河重要品種特性',
    desc: 'Muscadet / Chenin Blanc / Cabernet Franc / Sauvignon Blanc 四大品種的產區定位、酸度特徵與食物配對。',
    category: '品種探索', lesson: 'L1 Module 2', route: '/loire/course'
  },
  {
    region: 'loire', type: 'loire-aoc-compare', isEnhanced: false,
    title: '羅亞爾河各 AOC 比較',
    desc: '各主要 AOC（Muscadet / Vouvray / Chinon / Sancerre）的釀造規範、品種允許與典型風格互動對比。',
    category: '互動對比', lesson: 'L1 Module 3', route: '/loire/course'
  },
  {
    region: 'loire', type: 'loire-sweetness-spectrum', isEnhanced: false,
    title: 'Chenin Blanc 甜度光譜',
    desc: 'Vouvray Sec → Demi-Sec → Moelleux → Pétillant 的甜度劃分，Huet / Nicolas Joly 代表酒款。',
    category: '互動對比', lesson: 'L2 Module 1', route: '/loire/course'
  },
  {
    region: 'loire', type: 'loire-sweet-wine-method', isEnhanced: false,
    title: '貴腐甜酒釀造工法',
    desc: '羅亞爾河 Coteaux du Layon / Quarts de Chaume 貴腐菌感染、逐粒採收、糖酸濃縮工法互動詳解。',
    category: '釀造工法', lesson: 'L2 Module 2', route: '/loire/course'
  },
  {
    region: 'loire', type: 'sancerre-pouilly-duel', isEnhanced: true,
    title: 'Sancerre × Pouilly-Fumé 雙雄對決',
    desc: 'D 強化 · 同樣 Sauvignon Blanc，卻因 Kimmeridgian 白堊、燧石、黏土三種土壤而分道揚鑣。Henri Bourgeois / Didier Dagueneau 傳奇。',
    category: '互動對比', lesson: 'L2 Module 3', route: '/loire/course'
  },
  {
    region: 'loire', type: 'cremant-methods', isEnhanced: true,
    title: 'Crémant de Loire 傳統法互動探索',
    desc: 'D 強化 · 傳統法各步驟（Assemblage → Tirage → Prise de Mousse → Dégorgement）可視化動畫，與 Champagne 規範對比，Gratien & Meyer 代表。',
    category: '釀造工法', lesson: 'L3 Module 1', route: '/loire/course'
  },

  // ──── 澳洲 Australia ──────────────────────────────────────────────────
  {
    region: 'australia', type: 'australia-map', isEnhanced: false,
    title: '澳洲主要產區地圖',
    desc: '從 Barossa Valley 到 Margaret River，六大州葡萄酒產區地理分佈互動地圖。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/australia'
  },
  {
    region: 'australia', type: 'australia-gi-system', isEnhanced: false,
    title: '澳洲 GI 分級體系',
    desc: '澳洲 GI（Geographic Indications）從 Zone → Region → Sub-region 三層體系，附 Barossa 特例解說。',
    category: '分級系統', lesson: 'L1 Module 2', route: '/australia'
  },
  {
    region: 'australia', type: 'australia-shiraz-styles', isEnhanced: false,
    title: 'Shiraz 各產區風格對比',
    desc: 'Barossa Valley（濃郁巧克力）× McLaren Vale（地中海香料）× Cool Climate（Heathcote/Mornington）風格光譜互動比較。',
    category: '互動對比', lesson: 'L1 Module 3', route: '/australia'
  },

  // ──── 加州 California ─────────────────────────────────────────────────
  {
    region: 'california', type: 'california-region-map', isEnhanced: false,
    title: '加州主要產區地圖',
    desc: 'Napa / Sonoma / Central Valley / Santa Barbara 四大區塊地圖，附太平洋霧帶影響可視化。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/california/course'
  },
  {
    region: 'california', type: 'ava-hierarchy', isEnhanced: false,
    title: '加州 AVA 分級體系',
    desc: 'AVA（American Viticultural Area）分層體系，Napa 16 個子 AVA 的地圖互動詳解。',
    category: '分級系統', lesson: 'L1 Module 2', route: '/california/course'
  },
  {
    region: 'california', type: 'napa-sonoma-compare', isEnhanced: false,
    title: 'Napa vs Sonoma 互動對比',
    desc: '面積、氣候、品種比重、酒莊數量、價格區間全方位比較；Screaming Eagle vs Williams Selyem 風格PK。',
    category: '互動對比', lesson: 'L1 Module 3', route: '/california/course'
  },

  // ──── 紐西蘭 New Zealand ──────────────────────────────────────────────
  {
    region: 'newzealand', type: 'marlborough-sauvignon', isEnhanced: false,
    title: 'Marlborough Sauvignon Blanc 特色詳解',
    desc: 'Wairau Valley vs Awatere Valley 子產區對比：黃瓜百香果 vs 礦物高酸風格，Cloudy Bay / Dog Point 代表。',
    category: '品種探索', lesson: 'L1 Module 1', route: '/newzealand'
  },
  {
    region: 'newzealand', type: 'central-otago-pinot', isEnhanced: false,
    title: 'Central Otago 黑皮諾風土探索',
    desc: '世界最南黑皮諾產區：大陸型極端氣候、片岩土壤、5 個子區比較（Bannockburn / Gibbston）。',
    category: '品種探索', lesson: 'L1 Module 2', route: '/newzealand'
  },

  // ──── 匈牙利 Hungary ──────────────────────────────────────────────────
  {
    region: 'hungary', type: 'hungary-region-map', isEnhanced: false,
    title: '匈牙利主要產區地圖',
    desc: '22 個葡萄酒產區地圖，Tokaj、Eger、Villány 三大精英產區重點標示。',
    category: '產區地理', lesson: 'L1 Module 1', route: '/hungary'
  },
  {
    region: 'hungary', type: 'hungary-grape-profile', isEnhanced: false,
    title: '匈牙利重要品種特性',
    desc: 'Furmint、Hárslevelű、Kékfrankos、Kadarka 四大品種的土壤適應性、酸度與代表產區互動詳解。',
    category: '品種探索', lesson: 'L1 Module 2', route: '/hungary'
  },
  {
    region: 'hungary', type: 'tokaji-aszu-levels', isEnhanced: false,
    title: 'Tokaji Aszú 甜度等級系統',
    desc: '2–6 Puttonyos 及 Eszencia：每桶 aszú 比例、殘糖法規、陳年要求與皇室歷史互動詳解。',
    category: '分級系統', lesson: 'L1 Module 3', route: '/hungary'
  },
]

// ── 計算屬性 ──────────────────────────────────────────────────────────────
const regionKeys = Object.keys(regionMeta)
const categories = Object.keys(catMeta)
const enhancedCount = computed(() => allSlides.filter(s => s.isEnhanced).length)

const activeRegion = ref('全部')
const activeCat = ref('全部')
const showEnhancedOnly = ref(false)
const searchQuery = ref('')

function regionCount(r) {
  if (r === '全部') return allSlides.length
  return allSlides.filter(s => s.region === r).length
}

const filteredSlides = computed(() => {
  return allSlides.filter(s => {
    if (activeRegion.value !== '全部' && s.region !== activeRegion.value) return false
    if (activeCat.value !== '全部' && s.category !== activeCat.value) return false
    if (showEnhancedOnly.value && !s.isEnhanced) return false
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      return s.title.includes(q) || s.desc.includes(q) || s.type.includes(q)
    }
    return true
  })
})

function resetFilters() {
  activeRegion.value = '全部'
  activeCat.value = '全部'
  showEnhancedOnly.value = false
  searchQuery.value = ''
}

// ── 黏性 filter bar ───────────────────────────────────────────────────────
const filterBarRef = ref(null)
const isFilterSticky = ref(false)
let observer = null
onMounted(() => {
  if (filterBarRef.value) {
    observer = new IntersectionObserver(
      ([e]) => { isFilterSticky.value = e.intersectionRatio < 1 },
      { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
    )
    observer.observe(filterBarRef.value)
  }
})
onUnmounted(() => { observer?.disconnect() })
</script>

<style scoped>
.ssi-page {
  min-height: 100vh;
  background: #f8f9fa;
  color: #2c3e50;
  padding-bottom: 60px;
}

/* ── Hero ── */
.ssi-hero {
  background: linear-gradient(135deg, #1a2a4a, #2c3e50);
  color: #fff;
  padding: 28px 20px 32px;
}
.ssi-hero-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.back-btn {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.88rem;
  margin-bottom: 14px;
  transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.22); }
.ssi-hero h1 { margin: 0 0 6px; font-size: 1.9rem; }
.hero-sub { margin: 0 0 20px; opacity: 0.82; font-size: 1rem; }
.hero-stats {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.hstat {
  background: rgba(255,255,255,0.12);
  padding: 10px 18px;
  border-radius: 10px;
  text-align: center;
  min-width: 80px;
}
.hstat-n { display: block; font-size: 1.7rem; font-weight: 800; }
.hstat-l { font-size: 0.78rem; opacity: 0.8; }

/* ── Filter Bar ── */
.filter-bar {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow 0.2s;
}
.filter-bar.sticky { box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
.filter-bar-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.filter-group {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
}
.filter-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #888;
  padding-top: 4px;
  white-space: nowrap;
  min-width: 32px;
}
.filter-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.chip {
  background: #f3f4f6;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.18s;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.chip:hover { background: #e5e7eb; }
.chip.active {
  background: #2c3e50;
  color: #fff;
  border-color: #2c3e50;
}
.chip-count {
  background: rgba(0,0,0,0.12);
  color: inherit;
  border-radius: 10px;
  padding: 1px 7px;
  font-size: 0.74rem;
  font-weight: 700;
}
.chip.active .chip-count { background: rgba(255,255,255,0.22); }
.chip-enhanced {
  border-color: #f59e0b;
  color: #92400e;
}
.chip-enhanced.active {
  background: #f59e0b;
  color: #fff;
  border-color: #f59e0b;
}

/* ── Search Row ── */
.search-row {
  max-width: 1100px;
  margin: 18px auto 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.search-input {
  flex: 1;
  padding: 9px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.92rem;
  outline: none;
  transition: border-color 0.18s;
}
.search-input:focus { border-color: #2c3e50; }
.result-count {
  font-size: 0.82rem;
  color: #888;
  white-space: nowrap;
}

/* ── Empty State ── */
.empty-state {
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
}
.es-icon { font-size: 3rem; margin-bottom: 12px; }
.reset-btn {
  margin-top: 16px;
  background: #2c3e50;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.92rem;
}

/* ── Slide Cards Grid ── */
.slides-grid {
  max-width: 1100px;
  margin: 20px auto 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.slide-card {
  background: #fff;
  border-radius: 12px;
  border-left: 4px solid var(--rc, #2c3e50);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.18s, box-shadow 0.18s;
  overflow: hidden;
}
.slide-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

/* Card Head */
.card-head {
  padding: 10px 14px 6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
  flex-wrap: wrap;
}
.card-region-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #f3f4f6;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--rc, #2c3e50);
}
.badge-flag { font-size: 1rem; }
.card-badges {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.badge-enhanced {
  background: #fef3c7;
  color: #92400e;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.74rem;
  font-weight: 700;
  border: 1px solid #f59e0b;
}
.badge-cat {
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.74rem;
  font-weight: 700;
}

/* Card Body */
.card-body {
  padding: 8px 14px 10px;
  flex: 1;
}
.card-title {
  margin: 0 0 6px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  color: #1a2535;
}
.card-desc {
  margin: 0 0 10px;
  font-size: 0.83rem;
  color: #555;
  line-height: 1.6;
}
.card-meta {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.meta-type {
  font-size: 0.76rem;
  color: #999;
}
.meta-type code {
  background: #f3f4f6;
  padding: 1px 5px;
  border-radius: 4px;
  font-family: monospace;
  color: #555;
}
.meta-lesson {
  font-size: 0.76rem;
  color: #888;
}

/* Card Foot */
.card-foot {
  padding: 10px 14px 12px;
  border-top: 1px solid #f0f0f0;
}
.goto-btn {
  display: inline-block;
  background: var(--rc, #2c3e50);
  color: #fff;
  padding: 7px 16px;
  border-radius: 7px;
  font-size: 0.83rem;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.18s;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}
.goto-btn:hover { opacity: 0.85; }

/* ── RWD ── */
@media (max-width: 900px) {
  .slides-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .ssi-hero h1 { font-size: 1.4rem; }
  .hero-stats { gap: 10px; }
  .hstat { padding: 8px 12px; min-width: 60px; }
  .hstat-n { font-size: 1.3rem; }
  .slides-grid { grid-template-columns: 1fr; }
  .filter-bar-inner { padding: 10px 12px; }
  .search-row { padding: 0 12px; flex-direction: column; align-items: stretch; }
  /* 觸控目標提升 */
  .chip { min-height: 44px; padding: 8px 12px; }
  .chip:active { background: #d1d5db; }
  .chip.active:active { opacity: 0.8; }
  .goto-btn { min-height: 44px; padding: 12px 16px; display: flex; align-items: center; justify-content: center; }
  .goto-btn:active { opacity: 0.75; }
  .search-input { min-height: 44px; padding: 10px 14px; font-size: 1rem; }
  .reset-btn { min-height: 44px; }
}
@media (max-width: 400px) {
  .chip { font-size: 0.76rem; padding: 8px 8px; min-height: 44px; }
  .chip-count { padding: 1px 5px; font-size: 0.7rem; }
  .filter-chips { gap: 4px; }
  .filter-label { font-size: 0.74rem; }
}
</style>
