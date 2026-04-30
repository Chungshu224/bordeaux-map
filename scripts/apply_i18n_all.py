#!/usr/bin/env python3
"""Apply full i18n replacements to PlatformHome.vue – all sections."""

FILE = 'src/components/PlatformHome.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # ─── region group headers ───────────────────────────────────────────────
    (
        '          <span class="rg-name">法國</span>\n          <span class="rg-en">France</span>',
        "          <span class=\"rg-name\">{{ $t('home.courses.groups.france') }}</span>\n          <span class=\"rg-en\">France</span>"
    ),
    (
        '          <span class="rg-name">舊世界</span>\n          <span class="rg-en">Old World</span>',
        "          <span class=\"rg-name\">{{ $t('home.courses.groups.oldWorld') }}</span>\n          <span class=\"rg-en\">Old World</span>"
    ),
    (
        '          <span class="rg-name">新世界</span>\n          <span class="rg-en">New World</span>',
        "          <span class=\"rg-name\">{{ $t('home.courses.groups.newWorld') }}</span>\n          <span class=\"rg-en\">New World</span>"
    ),

    # ─── Bordeaux card ───────────────────────────────────────────────────────
    (
        "              {{ courseStatuses.bordeaux ? '✅ 現已開放' : '📅 課程規劃中' }}",
        "              {{ courseStatuses.bordeaux ? $t('home.courses.bordeaux.statusActive') : $t('home.courses.bordeaux.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">波爾多葡萄酒</h3>\n              <p class="card-desc">全方位波爾多產區學習：左岸右岸AOC分級、五大酒莊、年份氣候分析，以及互動式地圖深度探索</p>\n              <button class="course-detail-btn" @click="openCourseDetail(\'bordeaux\')">📋 課程說明</button>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.bordeaux.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.bordeaux.desc') }}</p>\n              <button class=\"course-detail-btn\" @click=\"openCourseDetail('bordeaux')\">{{ $t('home.courses.bordeaux.courseDetailBtn') }}</button>"
    ),
    (
        '              <div class="cpc-hint">完整課程 NT$290/月起・免費體驗 Level 1・全通行證 NT$590/月解鎖 8 大產區</div>\n              <div class="cpc-actions">\n                <button class="cpc-btn-free" @click="handleFreeTier">免費開始</button>\n                <button class="cpc-btn-plan" @click="goToPricing">查看訂閱方案 →</button>',
        "              <div class=\"cpc-hint\">{{ $t('home.courses.bordeaux.priceHint') }}</div>\n              <div class=\"cpc-actions\">\n                <button class=\"cpc-btn-free\" @click=\"handleFreeTier\">{{ $t('home.courses.bordeaux.startFreeBtn') }}</button>\n                <button class=\"cpc-btn-plan\" @click=\"goToPricing\">{{ $t('home.courses.bordeaux.viewPlansBtn') }} →</button>"
    ),

    # ─── Bourgogne card ───────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.bourgogne ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.bourgogne ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">布根地葡萄酒</h3>\n              <p class="card-desc">從 Grand Cru 到 Village 級，深入了解 Côte de Nuits、Côte de Beaune，以及 Pinot Noir 與 Chardonnay 的世界（預計2027開放）</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.bourgogne.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.bourgogne.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">階段課程<br>L1 – L4</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">33</span>\n                <span class="cp-label">Grand Cru<br>產區地圖</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">2</span>\n                <span class="cp-label">地質·氣候<br>進階圖層</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">60<span class="cp-plus">+</span></span>\n                <span class="cp-label">Pinot Noir<br>產區課</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.bourgogne.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">33</span>\n                <span class="cp-label" v-html="$t(\'home.courses.bourgogne.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">2</span>\n                <span class="cp-label" v-html="$t(\'home.courses.bourgogne.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">60<span class="cp-plus">+</span></span>\n                <span class="cp-label" v-html="$t(\'home.courses.bourgogne.s4label\')">'
    ),
    (
        '              <span class="cpf-item">✔ 144+ Premier Cru 一級園地圖</span>\n              <span class="cpf-item">✔ 山坡 · 土壤層次分析</span>\n              <span class="cpf-item">✔ 氣候影響與年份差異解讀</span>',
        "              <span class=\"cpf-item\">✔ {{ $t('home.courses.bourgogne.f1') }}</span>\n              <span class=\"cpf-item\">✔ {{ $t('home.courses.bourgogne.f2') }}</span>\n              <span class=\"cpf-item\">✔ {{ $t('home.courses.bourgogne.f3') }}</span>"
    ),
    (
        '              <button v-if="courseStatuses.bourgogne" class="btn-enter-course" @click="router.push(\'/bourgogne\')">{{ isAdmin ? \'管理員進入\' : \'進入課程\' }} →</button>\n              <span v-else class="planning-cta">📅 即將開放</span>',
        "              <button v-if=\"courseStatuses.bourgogne\" class=\"btn-enter-course\" @click=\"router.push('/bourgogne')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Loire card ───────────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.loire ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.loire ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">羅亞爾河谷葡萄酒</h3>\n              <p class="card-desc">法國最長的葡萄酒產區，從大西洋 Muscadet 到礦石 Sancerre，800 公里的葡萄酒王國，涵蓋氣泡酒、白酒、紅酒到甜酒的完整風格版圖</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.loire.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.loire.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">主要<br>產區</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">800</span>\n                <span class="cp-label">公里<br>河流</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">SB</span>\n                <span class="cp-label">旗艦<br>品種</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">3+</span>\n                <span class="cp-label">課程<br>等級</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.loire.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">800</span>\n                <span class="cp-label" v-html="$t(\'home.courses.loire.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">SB</span>\n                <span class="cp-label" v-html="$t(\'home.courses.loire.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">3+</span>\n                <span class="cp-label" v-html="$t(\'home.courses.loire.s4label\')">'
    ),
    (
        '              <span class="cpf-item loire-tag">✔ 13 產區互動衛星地圖</span>\n              <span class="cpf-item loire-tag">✔ Sancerre / Pouilly-Fumé 礦石白酒</span>\n              <span class="cpf-item loire-tag">✔ Vouvray / Chinon 貴腐甜酒與紅酒</span>',
        "              <span class=\"cpf-item loire-tag\">✔ {{ $t('home.courses.loire.f1') }}</span>\n              <span class=\"cpf-item loire-tag\">✔ {{ $t('home.courses.loire.f2') }}</span>\n              <span class=\"cpf-item loire-tag\">✔ {{ $t('home.courses.loire.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.loire\" class=\"btn-enter-course\" @click=\"router.push('/loire')\">{{ isAdmin ? '管理員進入' : '進入課程' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.loire\" class=\"btn-enter-course\" @click=\"router.push('/loire')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Italy card ───────────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.italy ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.italy ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">義大利葡萄酒</h3>\n              <p class="card-desc">探索 Barolo、Brunello、Amarone 等世界頂級義大利葡萄酒，20 個 DOC/DOCG 產區完整解析（預計2027開放）</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.italy.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.italy.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">階段課程<br>L1 – L3</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">66</span>\n                <span class="cp-label">堂課內容<br>完整課程</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">20</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.italy.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">66</span>\n                <span class="cp-label" v-html="$t(\'home.courses.italy.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">20</span>'
    ),
    (
        '                <span class="cp-label">大產區<br>DOC/DOCG</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">425</span>\n                <span class="cp-label">產區地圖<br></span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.italy.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">425</span>\n                <span class="cp-label" v-html="$t(\'home.courses.italy.s4label\')">'
    ),
    (
        '              <span class="cpf-item italy-tag">✔ Barolo / Barbaresco 酒區精確邊界</span>\n              <span class="cpf-item italy-tag">✔ Nebbiolo / Sangiovese 品種比較</span>\n              <span class="cpf-item italy-tag">✔ DOC → DOCG 分級演變課</span>',
        "              <span class=\"cpf-item italy-tag\">✔ {{ $t('home.courses.italy.f1') }}</span>\n              <span class=\"cpf-item italy-tag\">✔ {{ $t('home.courses.italy.f2') }}</span>\n              <span class=\"cpf-item italy-tag\">✔ {{ $t('home.courses.italy.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.italy\" class=\"btn-enter-course\" @click=\"router.push('/italy')\">{{ isAdmin ? '管理員進入' : '進入課程' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.italy\" class=\"btn-enter-course\" @click=\"router.push('/italy')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Spain card ───────────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.spain ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.spain ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">西班牙葡萄酒</h3>\n              <p class="card-desc">探索 Rioja、Ribera del Duero、Rías Baixas 等頂級產區，DO／DOCa／VP 分級完整解析，互動衛星地圖帶你走遍 96 個法定產區</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.spain.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.spain.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">法定產區<br>DO 地圖</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">6</span>\n                <span class="cp-label">種互動<br>練習遊戲</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">62</span>\n                <span class="cp-label">產區地圖<br></span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.spain.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">6</span>\n                <span class="cp-label" v-html="$t(\'home.courses.spain.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">62</span>\n                <span class="cp-label" v-html="$t(\'home.courses.spain.s4label\')">'
    ),
    (
        '              <span class="cpf-item spain-tag">✔ 96 個 DO 衛星地圖完整標記</span>\n              <span class="cpf-item spain-tag">✔ Tempranillo / Garnacha 深度解析</span>\n              <span class="cpf-item spain-tag">✔ Sherry / Cava 特殊酒型專課</span>',
        "              <span class=\"cpf-item spain-tag\">✔ {{ $t('home.courses.spain.f1') }}</span>\n              <span class=\"cpf-item spain-tag\">✔ {{ $t('home.courses.spain.f2') }}</span>\n              <span class=\"cpf-item spain-tag\">✔ {{ $t('home.courses.spain.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.spain\" class=\"btn-enter-course\" @click=\"router.push('/spain')\">{{ isAdmin ? '管理員進入' : '進入探索' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.spain\" class=\"btn-enter-course\" @click=\"router.push('/spain')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Germany card ─────────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.germany ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.germany ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">德國葡萄酒</h3>\n              <p class="card-desc">深入探索 13 個 Anbaugebiete，從 Mosel 的陡峭板岩到 Rheingau 的優雅 Riesling，葡萄園衛星地圖帶你走遍德國頂級 Weinberg</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.germany.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.germany.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">法定產區<br>Anbaugebiet</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Riesling</span>\n                <span class="cp-label">核心品種<br></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">QmP</span>\n                <span class="cp-label">分級系統<br>探索</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">衛星</span>\n                <span class="cp-label">葡萄園<br>地圖</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.germany.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Riesling</span>\n                <span class="cp-label" v-html="$t(\'home.courses.germany.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">QmP</span>\n                <span class="cp-label" v-html="$t(\'home.courses.germany.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">衛星</span>\n                <span class="cp-label" v-html="$t(\'home.courses.germany.s4label\')">'
    ),
    (
        '              <span class="cpf-item germany-tag">✔ 13 個 Anbaugebiete 衛星地圖</span>\n              <span class="cpf-item germany-tag">✔ Mosel 陡坡 Riesling 深度解析</span>\n              <span class="cpf-item germany-tag">✔ Kabinett → TBA 甜度分級</span>',
        "              <span class=\"cpf-item germany-tag\">✔ {{ $t('home.courses.germany.f1') }}</span>\n              <span class=\"cpf-item germany-tag\">✔ {{ $t('home.courses.germany.f2') }}</span>\n              <span class=\"cpf-item germany-tag\">✔ {{ $t('home.courses.germany.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.germany\" class=\"btn-enter-course\" @click=\"router.push('/germany')\">{{ isAdmin ? '管理員進入' : '進入探索' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.germany\" class=\"btn-enter-course\" @click=\"router.push('/germany')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Portugal card ────────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.portugal ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.portugal ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">葡萄牙葡萄酒</h3>\n              <p class="card-desc">探索 31 個 DOC 法定產區，從北部的 Vinho Verde 清爽綠酒到南部的 Alentejo 濃郁紅酒，互動衛星地圖帶你認識波特酒的故鄉</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.portugal.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.portugal.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">DOC 法定<br>產區</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Porto</span>\n                <span class="cp-label">波特酒<br>核心</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Touriga</span>\n                <span class="cp-label">代表品種<br>探索</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">衛星</span>\n                <span class="cp-label">互動<br>地圖</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.portugal.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Porto</span>\n                <span class="cp-label" v-html="$t(\'home.courses.portugal.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Touriga</span>\n                <span class="cp-label" v-html="$t(\'home.courses.portugal.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">衛星</span>\n                <span class="cp-label" v-html="$t(\'home.courses.portugal.s4label\')">'
    ),
    (
        '              <span class="cpf-item portugal-tag">✔ 全葡 31 個 DOC 互動地圖</span>\n              <span class="cpf-item portugal-tag">✔ Douro 梯田波特酒產區深度解析</span>\n              <span class="cpf-item portugal-tag">✔ Madeira 島嶼加強酒探索</span>',
        "              <span class=\"cpf-item portugal-tag\">✔ {{ $t('home.courses.portugal.f1') }}</span>\n              <span class=\"cpf-item portugal-tag\">✔ {{ $t('home.courses.portugal.f2') }}</span>\n              <span class=\"cpf-item portugal-tag\">✔ {{ $t('home.courses.portugal.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.portugal\" class=\"btn-enter-course\" @click=\"router.push('/portugal')\">{{ isAdmin ? '管理員進入' : '進入探索' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.portugal\" class=\"btn-enter-course\" @click=\"router.push('/portugal')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Hungary card ─────────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.hungary ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.hungary ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">匈牙利葡萄酒</h3>\n              <p class="card-desc">探索 Tokaji Aszú 貴腐酒的傳奇故鄉，從 22 個法定產區到 Furmint 旗艦品種，深入解析匈牙利五級甜度系統與舊世界釀酒文化</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.hungary.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.hungary.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">法定<br>產區</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Tokaji</span>\n                <span class="cp-label">頂級<br>甜酒</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">5</span>\n                <span class="cp-label">甜度<br>等級</span>\n              </div>\n              <div class="cp-divider"></div>',
        '                <span class="cp-label" v-html="$t(\'home.courses.hungary.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Tokaji</span>\n                <span class="cp-label" v-html="$t(\'home.courses.hungary.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">5</span>\n                <span class="cp-label" v-html="$t(\'home.courses.hungary.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>'
    ),
    (
        '                <span class="cp-num">Furmint</span>\n                <span class="cp-label">旗艦<br>品種</span>',
        '                <span class="cp-num">Furmint</span>\n                <span class="cp-label" v-html="$t(\'home.courses.hungary.s4label\')">'
    ),
    (
        '              <span class="cpf-item hungary-tag">✔ 22 法定產區互動衛星地圖</span>\n              <span class="cpf-item hungary-tag">✔ Tokaji Aszú 貴腐甜酒完整解析</span>\n              <span class="cpf-item hungary-tag">✔ Eger 公牛血紅酒與 Furmint 品種</span>',
        "              <span class=\"cpf-item hungary-tag\">✔ {{ $t('home.courses.hungary.f1') }}</span>\n              <span class=\"cpf-item hungary-tag\">✔ {{ $t('home.courses.hungary.f2') }}</span>\n              <span class=\"cpf-item hungary-tag\">✔ {{ $t('home.courses.hungary.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.hungary\" class=\"btn-enter-course\" @click=\"router.push('/hungary')\">{{ isAdmin ? '管理員進入' : '進入探索' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.hungary\" class=\"btn-enter-course\" @click=\"router.push('/hungary')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Australia card ───────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.australia ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.australia ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">澳洲葡萄酒</h3>\n              <p class="card-desc">探索 65+ GI 產區，從炎熱的 Barossa Valley 百年老藤到涼爽的 Tasmania 氣泡酒聖地，互動衛星地圖帶你認識新世界葡萄酒巨人</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.australia.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.australia.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">GI<br>產區</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">6</span>\n                <span class="cp-label">產酒<br>州</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Shiraz</span>\n                <span class="cp-label">旗艦<br>品種</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">100+</span>\n                <span class="cp-label">年<br>老藤</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.australia.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">6</span>\n                <span class="cp-label" v-html="$t(\'home.courses.australia.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Shiraz</span>\n                <span class="cp-label" v-html="$t(\'home.courses.australia.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">100+</span>\n                <span class="cp-label" v-html="$t(\'home.courses.australia.s4label\')">'
    ),
    (
        '              <span class="cpf-item australia-tag">✔ 六州 65+ 產區互動衛星地圖</span>\n              <span class="cpf-item australia-tag">✔ Barossa 老藤 Shiraz 深度解析</span>\n              <span class="cpf-item australia-tag">✔ Tasmania 頂級氣泡酒與 Pinot Noir</span>',
        "              <span class=\"cpf-item australia-tag\">✔ {{ $t('home.courses.australia.f1') }}</span>\n              <span class=\"cpf-item australia-tag\">✔ {{ $t('home.courses.australia.f2') }}</span>\n              <span class=\"cpf-item australia-tag\">✔ {{ $t('home.courses.australia.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.australia\" class=\"btn-enter-course\" @click=\"router.push('/australia')\">{{ isAdmin ? '管理員進入' : '進入探索' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.australia\" class=\"btn-enter-course\" @click=\"router.push('/australia')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── New Zealand card ─────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.newzealand ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.newzealand ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">紐西蘭葡萄酒</h3>\n              <p class="card-desc">從 Marlborough 的 Sauvignon Blanc 到 Central Otago 的 Pinot Noir，探索南北兩島 17 個產區，互動衛星地圖帶你深入了解純淨大地的葡萄酒</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.newzealand.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.newzealand.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">葡萄酒<br>產區</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">2</span>\n                <span class="cp-label">主要<br>島嶼</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">SB</span>\n                <span class="cp-label">旗艦<br>品種</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">3+</span>\n                <span class="cp-label">課程<br>等級</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.newzealand.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">2</span>\n                <span class="cp-label" v-html="$t(\'home.courses.newzealand.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">SB</span>\n                <span class="cp-label" v-html="$t(\'home.courses.newzealand.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">3+</span>\n                <span class="cp-label" v-html="$t(\'home.courses.newzealand.s4label\')">'
    ),
    (
        '              <span class="cpf-item newzealand-tag">✔ 17 產區互動衛星地圖</span>\n              <span class="cpf-item newzealand-tag">✔ Marlborough SB 品種深度解析</span>\n              <span class="cpf-item newzealand-tag">✔ Central Otago Pinot Noir 產區</span>',
        "              <span class=\"cpf-item newzealand-tag\">✔ {{ $t('home.courses.newzealand.f1') }}</span>\n              <span class=\"cpf-item newzealand-tag\">✔ {{ $t('home.courses.newzealand.f2') }}</span>\n              <span class=\"cpf-item newzealand-tag\">✔ {{ $t('home.courses.newzealand.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.newzealand\" class=\"btn-enter-course\" @click=\"router.push('/newzealand')\">{{ isAdmin ? '管理員進入' : '進入課程' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.newzealand\" class=\"btn-enter-course\" @click=\"router.push('/newzealand')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── California card ──────────────────────────────────────────────────────
    (
        "              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.california ? '✅ 開放中' : '📅 課程規劃中' }}",
        "              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.california ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}"
    ),
    (
        '              <h3 class="card-title">加州葡萄酒</h3>\n              <p class="card-desc">從 Napa Valley 的頂級 Cabernet Sauvignon 到 Sonoma 的精緻 Pinot Noir，探索 154+ AVA 產區，深入了解巴黎品酒會震驚世界的葡萄酒大國</p>',
        "              <h3 class=\"card-title\">{{ $t('home.courses.california.title') }}</h3>\n              <p class=\"card-desc\">{{ $t('home.courses.california.desc') }}</p>"
    ),
    (
        '                <span class="cp-label">AVA<br>產區</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">8</span>\n                <span class="cp-label">課程<br>章節</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Cab</span>\n                <span class="cp-label">旗艦<br>品種</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">2+</span>\n                <span class="cp-label">課程<br>等級</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.california.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">8</span>\n                <span class="cp-label" v-html="$t(\'home.courses.california.s2label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">Cab</span>\n                <span class="cp-label" v-html="$t(\'home.courses.california.s3label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">2+</span>\n                <span class="cp-label" v-html="$t(\'home.courses.california.s4label\')">'
    ),
    (
        '              <span class="cpf-item california-tag">✔ 154+ AVA 互動衛星地圖</span>\n              <span class="cpf-item california-tag">✔ Napa Valley 16 子產區深度解析</span>\n              <span class="cpf-item california-tag">✔ 1976 巴黎品酒會歷史</span>',
        "              <span class=\"cpf-item california-tag\">✔ {{ $t('home.courses.california.f1') }}</span>\n              <span class=\"cpf-item california-tag\">✔ {{ $t('home.courses.california.f2') }}</span>\n              <span class=\"cpf-item california-tag\">✔ {{ $t('home.courses.california.f3') }}</span>"
    ),
    (
        "              <button v-if=\"courseStatuses.california\" class=\"btn-enter-course\" @click=\"router.push('/california/course')\">{{ isAdmin ? '管理員進入' : '進入課程' }} →</button>\n              <span v-else class=\"planning-cta\">📅 即將開放</span>",
        "              <button v-if=\"courseStatuses.california\" class=\"btn-enter-course\" @click=\"router.push('/california/course')\">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>\n              <span v-else class=\"planning-cta\">{{ $t('home.courses.common.comingSoon') }}</span>"
    ),

    # ─── Spain s1label (階段課程 - only spain uses different key) ──────────────
    (
        '                <span class="cp-label">階段課程<br>L1 – L4</span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">96</span>',
        '                <span class="cp-label" v-html="$t(\'home.courses.spain.s1label\')"></span>\n              </div>\n              <div class="cp-divider"></div>\n              <div class="cp-stat">\n                <span class="cp-num">96</span>'
    ),

    # ─── Features section title ────────────────────────────────────────────────
    (
        '          <h2>為什麼選擇侍酒師的筆記本？</h2>',
        "          <h2>{{ $t('home.features.sectionTitle') }}</h2>"
    ),

    # ─── FAQ section title ────────────────────────────────────────────────────
    (
        '          <h2>常見問題</h2>',
        "          <h2>{{ $t('home.faq.sectionTitle') }}</h2>"
    ),

    # ─── Forum section ────────────────────────────────────────────────────────
    (
        '          <span class="sh-eyebrow">COMMUNITY</span>\n          <h2>💬 學員討論區</h2>\n          <p>與其他學員分享品酒心得，互相解惑、共同進步</p>',
        "          <span class=\"sh-eyebrow\">{{ $t('home.forum.eyebrow') }}</span>\n          <h2>{{ $t('home.forum.title') }}</h2>\n          <p>{{ $t('home.forum.desc') }}</p>"
    ),
    (
        '        <div v-if="forumLoading" class="fp-loading">載入中…</div>',
        "        <div v-if=\"forumLoading\" class=\"fp-loading\">{{ $t('home.forum.loading') }}</div>"
    ),
    (
        "          <button class=\"fp-btn outline\" @click=\"authUser ? router.push('/forum') : router.push({ path: '/login', query: { redirect: '/forum' } })\">查看討論區 →</button>\n          <button v-if=\"authUser\" class=\"fp-btn primary\" @click=\"router.push('/forum')\">＋ 發起討論</button>\n          <button v-else class=\"fp-btn primary\" @click=\"router.push({ path: '/login', query: { redirect: '/forum' } })\">登入後參與討論</button>",
        "          <button class=\"fp-btn outline\" @click=\"authUser ? router.push('/forum') : router.push({ path: '/login', query: { redirect: '/forum' } })\">{{ $t('home.forum.viewForum') }} →</button>\n          <button v-if=\"authUser\" class=\"fp-btn primary\" @click=\"router.push('/forum')\">{{ $t('home.forum.newPost') }}</button>\n          <button v-else class=\"fp-btn primary\" @click=\"router.push({ path: '/login', query: { redirect: '/forum' } })\">{{ $t('home.forum.loginToJoin') }}</button>"
    ),

    # ─── Footer ───────────────────────────────────────────────────────────────
    (
        '            <div class="fl-title">侍酒師的筆記本</div>\n            <div class="fl-copy">© 2026 侍酒師的筆記本 · 保留所有權利</div>',
        "            <div class=\"fl-title\">{{ $t('home.footer.brand') }}</div>\n            <div class=\"fl-copy\">{{ $t('home.footer.copy') }}</div>"
    ),
    (
        "          <router-link to=\"/login\">登入</router-link>\n          <router-link to=\"/register\">註冊</router-link>\n          <a href=\"mailto:support@sommeliersnotebook.tw\">聯絡我們</a>",
        "          <router-link to=\"/login\">{{ $t('home.footer.login') }}</router-link>\n          <router-link to=\"/register\">{{ $t('home.footer.register') }}</router-link>\n          <a href=\"mailto:support@sommeliersnotebook.tw\">{{ $t('home.footer.contact') }}</a>"
    ),

    # ─── Checkout overlay ─────────────────────────────────────────────────────
    (
        '        <p>正在連線到付款頁面…</p>',
        "        <p>{{ $t('home.checkout.loading') }}</p>"
    ),

    # ─── Course modal bordeaux ────────────────────────────────────────────────
    (
        '          <h2 class="cm-title">波爾多葡萄酒完整課程說明</h2>\n          <p class="cm-sub">從入門到大師，全方位掌握波爾多葡萄酒知識</p>',
        "          <h2 class=\"cm-title\">{{ $t('home.modal.bordeaux.title') }}</h2>\n          <p class=\"cm-sub\">{{ $t('home.modal.bordeaux.sub') }}</p>"
    ),
    (
        '          <h3 class="cm-sec-title">📚 課程內容總覽</h3>',
        "          <h3 class=\"cm-sec-title\">{{ $t('home.modal.bordeaux.overviewTitle') }}</h3>"
    ),
    (
        '          <h3 class="cm-sec-title">🛠️ 學習工具</h3>',
        "          <h3 class=\"cm-sec-title\">{{ $t('home.modal.bordeaux.toolsTitle') }}</h3>"
    ),
    (
        '          <h3 class="cm-sec-title">💎 方案比較</h3>',
        "          <h3 class=\"cm-sec-title\">{{ $t('home.modal.bordeaux.compareTitle') }}</h3>"
    ),
    (
        '              <div class="cc-col feature-col">功能</div>\n              <div class="cc-col free-col">免費體驗<br><span class="cc-price">NT$ 0</span></div>\n              <div class="cc-col basic-col popular-col">完整課程 ⭐<br><span class="cc-price">NT$ {{ pricing.basic.monthly }}/月</span></div>\n              <div class="cc-col premium-col">頂級方案<br><span class="cc-price">NT$ {{ pricing.premium.monthly }}/月</span></div>',
        "              <div class=\"cc-col feature-col\">{{ $t('home.modal.bordeaux.compareFeature') }}</div>\n              <div class=\"cc-col free-col\" v-html=\"$t('home.modal.bordeaux.compareFree', { price: 0 })\"></div>\n              <div class=\"cc-col basic-col popular-col\" v-html=\"$t('home.modal.bordeaux.compareBasic', { price: pricing.basic.monthly })\"></div>\n              <div class=\"cc-col premium-col\" v-html=\"$t('home.modal.bordeaux.comparePremium', { price: pricing.premium.monthly })\"></div>"
    ),
    (
        '          <button class="cm-btn free" @click="showCourseModal = false; handleFreeTier()">免費開始體驗</button>\n          <button class="cm-btn basic" @click="showCourseModal = false; handlePurchase(\'bordeaux\',\'basic\')">訂閱完整課程 NT$290/月</button>\n          <button class="cm-btn premium" @click="showCourseModal = false; handlePurchase(\'bordeaux\',\'premium\')">頂級方案 NT$590/月</button>',
        "          <button class=\"cm-btn free\" @click=\"showCourseModal = false; handleFreeTier()\">{{ $t('home.modal.bordeaux.btnFree') }}</button>\n          <button class=\"cm-btn basic\" @click=\"showCourseModal = false; handlePurchase('bordeaux','basic')\">{{ $t('home.modal.bordeaux.btnBasicPrice', { price: pricing.basic.monthly }) }}</button>\n          <button class=\"cm-btn premium\" @click=\"showCourseModal = false; handlePurchase('bordeaux','premium')\">{{ $t('home.modal.bordeaux.btnPremiumPrice', { price: pricing.premium.monthly }) }}</button>"
    ),

    # ─── Prelaunch modal ──────────────────────────────────────────────────────
    (
        '            <div class="cm-badge-preview">⏳ 預計 2027 開放</div>',
        "            <div class=\"cm-badge-preview\">{{ $t('home.modal.prelaunch.coming') }}</div>"
    ),
    (
        '          <div class="cm-alert">\n            以下為依據目前開發進度整理的預先參考版本，正式課程以最終上線內容為準。\n          </div>',
        "          <div class=\"cm-alert\">\n            {{ $t('home.modal.prelaunch.alert') }}\n          </div>"
    ),
    (
        '            <h3 class="cm-sec-title">🧭 目前開發進度</h3>',
        "            <h3 class=\"cm-sec-title\">{{ $t('home.modal.prelaunch.devProgressTitle') }}</h3>"
    ),
    (
        '            <h3 class="cm-sec-title">📚 預計課程架構</h3>',
        "            <h3 class=\"cm-sec-title\">{{ $t('home.modal.prelaunch.roadmapTitle') }}</h3>"
    ),
    (
        '            <h3 class="cm-sec-title">🛠️ 預計開放功能</h3>',
        "            <h3 class=\"cm-sec-title\">{{ $t('home.modal.prelaunch.featuresTitle') }}</h3>"
    ),
    (
        "            <button class=\"cm-btn basic\" @click=\"showCourseModal = false; handleNotify(activeCourseDetail)\">🔔 搶先通知我</button>\n            <button class=\"cm-btn free\" @click=\"showCourseModal = false\">稍後再看</button>",
        "            <button class=\"cm-btn basic\" @click=\"showCourseModal = false; handleNotify(activeCourseDetail)\">{{ $t('home.modal.prelaunch.notifyBtn') }}</button>\n            <button class=\"cm-btn free\" @click=\"showCourseModal = false\">{{ $t('home.modal.prelaunch.laterBtn') }}</button>"
    ),

    # ─── Bordeaux modal level content (use locale data) ───────────────────────
    (
        '              <div class="cm-lv-badge">Level 1</div>\n              <div class="cm-lv-name">基礎入門</div>\n              <ul class="cm-lv-list">\n                <li>葡萄酒世界地理</li>\n                <li>波爾多產區介紹</li>\n                <li>主要葡萄品種</li>\n                <li>基礎釀造流程</li>\n                <li>波爾多分級制度</li>\n              </ul>',
        "              <div class=\"cm-lv-badge\">{{ $t('home.modal.bordeaux.levels.l1.badge') }}</div>\n              <div class=\"cm-lv-name\">{{ $t('home.modal.bordeaux.levels.l1.name') }}</div>\n              <ul class=\"cm-lv-list\">\n                <li v-for=\"item in $t('home.modal.bordeaux.levels.l1.items')\" :key=\"item\">{{ item }}</li>\n              </ul>"
    ),
    (
        '              <div class="cm-lv-badge lv2">Level 2</div>\n              <div class="cm-lv-name">進階學習</div>\n              <ul class="cm-lv-list">\n                <li>左岸產區深度剖析</li>\n                <li>美多克六大村莊</li>\n                <li>格拉夫與貝沙克</li>\n                <li>土壤與風土關係</li>\n                <li>年份差異解析</li>\n              </ul>',
        "              <div class=\"cm-lv-badge lv2\">{{ $t('home.modal.bordeaux.levels.l2.badge') }}</div>\n              <div class=\"cm-lv-name\">{{ $t('home.modal.bordeaux.levels.l2.name') }}</div>\n              <ul class=\"cm-lv-list\">\n                <li v-for=\"item in $t('home.modal.bordeaux.levels.l2.items')\" :key=\"item\">{{ item }}</li>\n              </ul>"
    ),
    (
        '              <div class="cm-lv-badge lv3">Level 3</div>\n              <div class="cm-lv-name">深度探索</div>\n              <ul class="cm-lv-list">\n                <li>右岸聖愛美濃與波美侯</li>\n                <li>知名酒莊歷史故事</li>\n                <li>地質科學深入分析</li>\n                <li>氣候與年份評分</li>\n                <li>甜白酒索甸與巴薩克</li>\n              </ul>',
        "              <div class=\"cm-lv-badge lv3\">{{ $t('home.modal.bordeaux.levels.l3.badge') }}</div>\n              <div class=\"cm-lv-name\">{{ $t('home.modal.bordeaux.levels.l3.name') }}</div>\n              <ul class=\"cm-lv-list\">\n                <li v-for=\"item in $t('home.modal.bordeaux.levels.l3.items')\" :key=\"item\">{{ item }}</li>\n              </ul>"
    ),
    (
        '              <div class="cm-lv-badge lv4">Level 4</div>\n              <div class="cm-lv-name">大師課程</div>\n              <ul class="cm-lv-list">\n                <li>頂級酒莊品飲評析</li>\n                <li>波爾多投資與收藏</li>\n                <li>餐酒搭配專業指南</li>\n                <li>期酒制度 En Primeur</li>\n                <li>侍酒師考試準備</li>\n              </ul>',
        "              <div class=\"cm-lv-badge lv4\">{{ $t('home.modal.bordeaux.levels.l4.badge') }}</div>\n              <div class=\"cm-lv-name\">{{ $t('home.modal.bordeaux.levels.l4.name') }}</div>\n              <ul class=\"cm-lv-list\">\n                <li v-for=\"item in $t('home.modal.bordeaux.levels.l4.items')\" :key=\"item\">{{ item }}</li>\n              </ul>"
    ),
    # Tools in bordeaux modal
    (
        '            <div class="cm-tool"><span class="ct-icon">🗺️</span><span class="ct-name">互動地圖</span><span class="ct-desc">Mapbox 互動式產區地圖，地質、氣候圖層</span></div>\n            <div class="cm-tool"><span class="ct-icon">🎮</span><span class="ct-name">互動練習</span><span class="ct-desc">4 種遊戲：產區競答、左右岸識別、年份排序、葡萄土壤配對</span></div>\n            <div class="cm-tool"><span class="ct-icon">🏆</span><span class="ct-name">成就系統</span><span class="ct-desc">解鎖徽章、累積積分、追蹤學習進度</span></div>\n            <div class="cm-tool"><span class="ct-icon">📔</span><span class="ct-name">品飲筆記</span><span class="ct-desc">記錄品飲心得，結合年份氣候資料輔助分析</span></div>\n            <div class="cm-tool"><span class="ct-icon">💬</span><span class="ct-name">學員論壇</span><span class="ct-desc">與其他學員交流心得、分享品飲體驗</span></div>\n            <div class="cm-tool"><span class="ct-icon">📊</span><span class="ct-name">學習追蹤</span><span class="ct-desc">正確率、學習時長、各單元詳細進度記錄</span></div>',
        "            <div class=\"cm-tool\" v-for=\"tool in $t('home.modal.bordeaux.tools')\" :key=\"tool.name\">\n              <span class=\"ct-icon\">{{ tool.icon }}</span>\n              <span class=\"ct-name\">{{ tool.name }}</span>\n              <span class=\"ct-desc\">{{ tool.desc }}</span>\n            </div>"
    ),
]

ok = 0
fail = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'❌ MISS: {repr(old[:60])}')
        fail += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\nDone: {ok} replaced, {fail} missed.')
