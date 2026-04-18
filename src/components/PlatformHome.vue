<template>
  <div class="platform-home">

    <!-- ═══ 頂部導覽列 ═══════════════════════════════════════════════════════ -->
    <nav class="top-nav">
      <div class="nav-inner">
        <div class="nav-logo" @click="scrollToTop">
          <span class="logo-icon">🍷</span>
          <div>
            <div class="logo-title">Wine Academy</div>
            <div class="logo-sub">葡萄酒學院</div>
          </div>
        </div>
        <div class="nav-actions">
          <template v-if="authUser">
            <span class="nav-greeting">{{ displayName }}</span>
            <router-link v-if="isAdmin" to="/admin" class="btn-nav admin-nav-btn">⚙️ 管理頁面</router-link>
            <router-link to="/bordeaux" class="btn-nav primary">進入課程</router-link>
            <router-link to="/dashboard" class="btn-nav">我的訂單</router-link>
            <button class="btn-nav ghost" @click="handleLogout">登出</button>
          </template>
          <template v-else>
            <router-link to="/login"    class="btn-nav">登入</router-link>
            <router-link to="/register" class="btn-nav primary">免費開始</router-link>
          </template>
        </div>
      </div>
    </nav>

    <!-- ═══ Hero ════════════════════════════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-tag">🌍 世界三大頂級產區・全中文深度教學</div>
        <h1 class="hero-title">用知識<span class="accent">品味</span>每一口</h1>
        <p class="hero-desc">
          系統化學習波爾多、布根地、義大利頂級葡萄酒<br>
          互動地圖・AI練習題・品飲筆記，一個平台全搞定
        </p>
        <!-- 已登入：顯示課程入口 -->
        <div v-if="authUser" class="hero-cta logged-in-cta">
          <div class="course-entry-title">歡迎回來，{{ displayName }}！選擇課程繼續學習：</div>
          <div class="course-entry-btns">
            <button class="cta-course bordeaux-btn" @click="router.push('/bordeaux')">
              🏰 波爾多課程
            </button>
            <template v-if="isAdmin">
              <button class="cta-course bourgogne-btn" @click="router.push('/bourgogne')">
                🍇 布根地課程
              </button>
              <button class="cta-course italy-btn" @click="router.push('/italy')">
                🇮🇹 義大利課程
              </button>
            </template>
            <button class="cta-course spain-btn" @click="router.push('/spain')">
              🇪🇸 西班牙課程
            </button>
            <button class="cta-course germany-btn" @click="router.push('/germany')">
              🇩🇪 德國課程
            </button>
            <button class="cta-course portugal-btn" @click="router.push('/portugal')">
              🇵🇹 葡萄牙課程
            </button>
          </div>
        </div>
        <!-- 未登入：原本的 CTA -->
        <div v-else class="hero-cta">
          <button class="cta-primary" @click="handleStartFree">
            🚀 免費開始學習
          </button>
          <button class="cta-secondary" @click="scrollToCourses">
            查看所有課程 ↓
          </button>
        </div>
        <div class="hero-stats">
          <div class="stat-item"><span class="stat-num">4</span><span class="stat-label">學習等級</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">100+</span><span class="stat-label">互動練習題</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">5</span><span class="stat-label">世界產區</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">$150</span><span class="stat-label">完整課程起/月</span></div>
        </div>
      </div>
    </section>

    <!-- ═══ 課程區塊 ══════════════════════════════════════════════════════════ -->
    <section class="courses-section" ref="coursesRef">
      <div class="section-inner">
        <div class="section-header">
          <h2>選擇您的課程</h2>
          <p>專業課程設計，結合互動地圖、測驗與品飲工具</p>
        </div>

        <div class="courses-grid">

          <!-- ── Bordeaux ── -->
          <div class="course-card bordeaux">
            <div :class="['card-status', courseStatuses.bordeaux ? 'available' : 'planning']">
              {{ courseStatuses.bordeaux ? '✅ 現已開放' : '📅 課程規劃中' }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🏰</div>
              <div class="card-region">France · Bordeaux</div>
              <h3 class="card-title">波爾多葡萄酒</h3>
              <p class="card-desc">全方位波爾多產區學習：左岸右岸AOC分級、五大酒莊、年份氣候分析，以及互動式地圖深度探索</p>
              <button class="course-detail-btn" @click="openCourseDetail('bordeaux')">📋 課程說明</button>
            </div>

            <div class="course-includes">
              <div class="include-item" v-for="f in bordeauxIncludes" :key="f">
                <span class="ii-dot">✦</span>{{ f }}
              </div>
            </div>

            <template v-if="courseStatuses.bordeaux">
              <!-- 計費週期切換 -->
              <div class="billing-toggle">
                <button :class="['bt-btn', billingPeriod === 'monthly' ? 'active' : '']" @click="billingPeriod = 'monthly'">月繳</button>
                <button :class="['bt-btn', billingPeriod === 'yearly' ? 'active' : '']" @click="billingPeriod = 'yearly'">年繳 <span class="bt-save">最高省 49%</span></button>
              </div>

              <div class="tier-grid">
                <!-- 免費 -->
                <div class="tier-card free">
                  <div class="tier-name">免費體驗</div>
                  <div class="tier-price">NT$ 0</div>
                  <div class="tier-tagline">適合初次探索、先嘗再買</div>
                  <ul class="tier-list">
                    <li class="ok">Level 1 入門（12 堂課完整開放）</li>
                    <li class="ok">57 個 AOC 法定產區互動地圖</li>
                    <li class="ok">左右岸基礎地理認識</li>
                    <li class="no">Level 2–4 進階課程（32 堂）</li>
                    <li class="no">互動練習中心（4 種遊戲）</li>
                  </ul>
                  <button class="tier-btn free-btn" @click="handleFreeTier">立即開始</button>
                </div>
                <!-- 初階 -->
                <div class="tier-card basic popular">
                  <div class="popular-tag">最受歡迎</div>
                  <div class="tier-name">完整課程</div>
                  <div class="tier-price">
                    <template v-if="billingPeriod === 'monthly'">NT$ {{ pricing.basic.monthly.toLocaleString() }} <span class="price-unit">/ 月</span></template>
                    <template v-else>NT$ {{ pricing.basic.yearly.toLocaleString() }} <span class="price-unit">/ 年</span></template>
                  </div>
                  <div class="price-note" v-if="billingPeriod === 'yearly'">相當於 NT${{ Math.round(pricing.basic.yearly / 12) }}/月，年省 NT${{ (pricing.basic.monthly * 12 - pricing.basic.yearly).toLocaleString() }}</div>
                  <div class="tier-tagline">適合命名考生、入門御酒師</div>
                  <ul class="tier-list">
                    <li class="ok">全 4 階段 · 44 堂完整課程</li>
                    <li class="ok">4 種互動練習（配對、排列、地圖、快答）</li>
                    <li class="ok">57 個 AOC 法定產區完整地圖袖</li>
                    <li class="ok">左右岸 · 五大次產區深度解析</li>
                    <li class="no">地質 / 氣候進階圖層</li>
                    <li class="no">品飲筆記本</li>
                  </ul>
                  <button class="tier-btn basic-btn" @click="handlePurchase('bordeaux','basic')">立即訂閱</button>
                </div>
                <!-- 頂級 -->
                <div class="tier-card premium">
                  <div class="tier-name">頂級方案</div>
                  <div class="tier-price">
                    <template v-if="billingPeriod === 'monthly'">NT$ {{ pricing.premium.monthly.toLocaleString() }} <span class="price-unit">/ 月</span></template>
                    <template v-else>NT$ {{ pricing.premium.yearly.toLocaleString() }} <span class="price-unit">/ 年</span></template>
                  </div>
                  <div class="price-note" v-if="billingPeriod === 'yearly'">相當於 NT${{ Math.round(pricing.premium.yearly / 12) }}/月，年省 NT${{ (pricing.premium.monthly * 12 - pricing.premium.yearly).toLocaleString() }}</div>
                  <div class="tier-tagline">適合從業人員、收藏投資人士</div>
                  <ul class="tier-list">
                    <li class="ok">包含完整課程全部內容</li>
                    <li class="ok">地質岩層 · 氣候熱力圖 2 大進階圖層</li>
                    <li class="ok">酒莊精確位置標記（第一 – 五級分級）</li>
                    <li class="ok">品飲筆記本（無限則記錄）</li>
                    <li class="ok">成就系統 · 學習進度全面追蹤</li>
                  </ul>
                  <button class="tier-btn premium-btn" @click="handlePurchase('bordeaux','premium')">立即訂閱</button>
                </div>
              </div>
            </template>
            <div v-else class="planning-body">
              <p>此課程目前暫停開放，敬請期待！</p>
              <button class="tier-btn free-btn" @click="handleFreeTier">先體驗 Level 1 免費</button>
            </div>
          </div>

          <!-- ── Bourgogne ── -->
          <div class="course-card bourgogne">
            <div :class="['card-status', courseStatuses.bourgogne ? 'active' : 'planning']">
              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.bourgogne ? '✅ 開放中' : '📅 課程規劃中' }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🍇</div>
              <div class="card-region">France · Bourgogne</div>
              <h3 class="card-title">布根地葡萄酒</h3>
              <p class="card-desc">從 Grand Cru 到 Village 級，深入了解 Côte de Nuits、Côte de Beaune，以及 Pinot Noir 與 Chardonnay 的世界（預計2027開放）</p>
            </div>
            <!-- 課程深度預覽 -->
            <div class="course-preview-strip">
              <div class="cp-stat">
                <span class="cp-num">4</span>
                <span class="cp-label">階段課程<br>L1 – L4</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">33</span>
                <span class="cp-label">Grand Cru<br>產區地圖</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">2</span>
                <span class="cp-label">地質·氣候<br>進階圖層</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">60<span class="cp-plus">+</span></span>
                <span class="cp-label">Pinot Noir<br>產區課</span>
              </div>
            </div>
            <div class="course-preview-features">
              <span class="cpf-item">✔ 144+ Premier Cru 一級園地圖</span>
              <span class="cpf-item">✔ 山坡 · 土壤層次分析</span>
              <span class="cpf-item">✔ 氣候影響與年份差異解讀</span>
            </div>
            <div class="card-actions">
              <button v-if="courseStatuses.bourgogne || isAdmin" class="card-cta bourgogne-cta" @click="router.push('/bourgogne')">📖 進入課程 →</button>
              <span v-else class="planning-cta">開發中，敬請期待</span>
            </div>
          </div>

          <!-- ── Italy ── -->
          <div class="course-card italy">
            <div :class="['card-status', courseStatuses.italy ? 'active' : 'planning']">
              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.italy ? '✅ 開放中' : '📅 課程規劃中' }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇮🇹</div>
              <div class="card-region">Italy</div>
              <h3 class="card-title">義大利葡萄酒</h3>
              <p class="card-desc">探索 Barolo、Brunello、Amarone 等世界頂級義大利葡萄酒，20 個 DOC/DOCG 產區完整解析（預計2027開放）</p>
            </div>
            <!-- 課程深度預覽 -->
            <div class="course-preview-strip italy-strip">
              <div class="cp-stat">
                <span class="cp-num">3</span>
                <span class="cp-label">階段課程<br>L1 – L3</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">66</span>
                <span class="cp-label">堂課內容<br>完整課程</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">20</span>
                <span class="cp-label">大產區<br>DOC/DOCG</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">425</span>
                <span class="cp-label">產區地圖<br></span>
              </div>
            </div>
            <div class="course-preview-features italy-features">
              <span class="cpf-item italy-tag">✔ Barolo / Barbaresco 酒區精確邊界</span>
              <span class="cpf-item italy-tag">✔ Nebbiolo / Sangiovese 品種比較</span>
              <span class="cpf-item italy-tag">✔ DOC → DOCG 分級演變課</span>
            </div>
            <div class="card-actions">
              <button v-if="courseStatuses.italy || isAdmin" class="card-cta italy-cta" @click="router.push('/italy')">📖 進入課程 →</button>
              <span v-else class="planning-cta">開發中，敬請期待</span>
            </div>
          </div>

          <!-- ── Spain ── -->
          <div class="course-card spain">
            <div :class="['card-status', courseStatuses.spain ? 'active' : 'planning']">
              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.spain ? '✅ 開放中' : '📅 課程規劃中' }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇪🇸</div>
              <div class="card-region">Spain · España</div>
              <h3 class="card-title">西班牙葡萄酒</h3>
              <p class="card-desc">探索 Rioja、Ribera del Duero、Rías Baixas 等頂級產區，DO／DOCa／VP 分級完整解析，互動衛星地圖帶你走遍 96 個法定產區</p>
            </div>
            <!-- 課程深度預覽 -->
            <div class="course-preview-strip spain-strip">
              <div class="cp-stat">
                <span class="cp-num">4</span>
                <span class="cp-label">階段課程<br>L1 – L4</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">96</span>
                <span class="cp-label">法定產區<br>DO 地圖</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">6</span>
                <span class="cp-label">種互動<br>練習遊戲</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">62</span>
                <span class="cp-label">產區地圖<br></span>
              </div>
            </div>
            <div class="course-preview-features spain-features">
              <span class="cpf-item spain-tag">✔ 96 個 DO 衛星地圖完整標記</span>
              <span class="cpf-item spain-tag">✔ Tempranillo / Garnacha 深度解析</span>
              <span class="cpf-item spain-tag">✔ Sherry / Cava 特殊酒型專課</span>
            </div>
            <div class="card-actions">
              <button v-if="courseStatuses.spain || isAdmin" class="card-cta spain-cta" @click="router.push('/spain')">📖 進入課程 →</button>
              <span v-else class="planning-cta">開發中，敬請期待</span>
            </div>
          </div>

          <!-- ── Germany ── -->
          <div class="course-card germany">
            <div :class="['card-status', courseStatuses.germany ? 'active' : 'planning']">
              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.germany ? '✅ 開放中' : '📅 課程規劃中' }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇩🇪</div>
              <div class="card-region">Germany · Deutschland</div>
              <h3 class="card-title">德國葡萄酒</h3>
              <p class="card-desc">深入探索 13 個 Anbaugebiete，從 Mosel 的陡峭板岩到 Rheingau 的優雅 Riesling，葡萄園衛星地圖帶你走遍德國頂級 Weinberg</p>
            </div>
            <div class="course-preview-strip germany-strip">
              <div class="cp-stat">
                <span class="cp-num">13</span>
                <span class="cp-label">法定產區<br>Anbaugebiet</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Riesling</span>
                <span class="cp-label">核心品種<br></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">QmP</span>
                <span class="cp-label">分級系統<br>探索</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">衛星</span>
                <span class="cp-label">葡萄園<br>地圖</span>
              </div>
            </div>
            <div class="course-preview-features germany-features">
              <span class="cpf-item germany-tag">✔ 13 個 Anbaugebiete 衛星地圖</span>
              <span class="cpf-item germany-tag">✔ Mosel 陡坡 Riesling 深度解析</span>
              <span class="cpf-item germany-tag">✔ Kabinett → TBA 甜度分級</span>
            </div>
            <div class="card-actions">
              <button v-if="courseStatuses.germany || isAdmin" class="card-cta germany-cta" @click="router.push('/germany')">🗺 探索地圖 →</button>
              <span v-else class="planning-cta">開發中，敬請期待</span>
            </div>
          </div>

          <!-- ── Portugal ── -->
          <div class="course-card portugal">
            <div :class="['card-status', courseStatuses.portugal ? 'active' : 'planning']">
              {{ isAdmin ? '🔓 管理員開放' : courseStatuses.portugal ? '✅ 開放中' : '📅 課程規劃中' }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇵🇹</div>
              <div class="card-region">Portugal · Vinho</div>
              <h3 class="card-title">葡萄牙葡萄酒</h3>
              <p class="card-desc">探索 31 個 DOC 法定產區，從北部的 Vinho Verde 清爽綠酒到南部的 Alentejo 濃郁紅酒，互動衛星地圖帶你認識波特酒的故鄉</p>
            </div>
            <div class="course-preview-strip portugal-strip">
              <div class="cp-stat">
                <span class="cp-num">31</span>
                <span class="cp-label">DOC 法定<br>產區</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Porto</span>
                <span class="cp-label">波特酒<br>核心</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Touriga</span>
                <span class="cp-label">代表品種<br>探索</span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">衛星</span>
                <span class="cp-label">互動<br>地圖</span>
              </div>
            </div>
            <div class="course-preview-features portugal-features">
              <span class="cpf-item portugal-tag">✔ 全葡 31 個 DOC 互動地圖</span>
              <span class="cpf-item portugal-tag">✔ Douro 梯田波特酒產區深度解析</span>
              <span class="cpf-item portugal-tag">✔ Madeira 島嶼加強酒探索</span>
            </div>
            <div class="card-actions">
              <button v-if="courseStatuses.portugal || isAdmin" class="card-cta portugal-cta" @click="router.push('/portugal')">🗺 探索地圖 →</button>
              <span v-else class="planning-cta">開發中，敬請期待</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 特色區塊 ══════════════════════════════════════════════════════════ -->
    <section class="features-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>為什麼選擇 Wine Academy？</h2>
        </div>
        <div class="features-grid">
          <div class="feature-item" v-for="f in features" :key="f.title">
            <div class="fi-icon">{{ f.icon }}</div>
            <h4>{{ f.title }}</h4>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ FAQ ══════════════════════════════════════════════════════════════ -->
    <section class="faq-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>常見問題</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, i) in faqs" :key="i" @click="toggleFaq(i)">
            <div class="faq-q">
              <span>{{ faq.q }}</span>
              <span class="faq-arrow" :class="{ open: openFaq === i }">▾</span>
            </div>
            <div class="faq-a" v-show="openFaq === i">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 論壇預覽 ═══════════════════════════════════════════════════════════ -->
    <section class="forum-preview-section">
      <div class="section-inner">
        <div class="section-heading">
          <span class="sh-eyebrow">COMMUNITY</span>
          <h2>💬 學員討論區</h2>
          <p>與其他學員分享品酒心得，互相解惑、共同進步</p>
        </div>

        <div v-if="forumLoading" class="fp-loading">載入中…</div>
        <div v-else-if="recentPosts.length" class="fp-list">
          <div
            v-for="post in recentPosts"
            :key="post.id"
            class="fp-card"
            @click="router.push(`/forum/${post.id}`)"
          >
            <div class="fp-card-title">{{ post.title }}</div>
            <div class="fp-card-meta">
              <span>{{ post.display_name }}</span>
              <span>💬 {{ post.reply_count }}</span>
            </div>
          </div>
        </div>

        <div class="fp-actions">
          <button class="fp-btn outline" @click="authUser ? router.push('/forum') : router.push({ path: '/login', query: { redirect: '/forum' } })">查看討論區 →</button>
          <button v-if="authUser" class="fp-btn primary" @click="router.push('/forum')">＋ 發起討論</button>
          <button v-else class="fp-btn primary" @click="router.push({ path: '/login', query: { redirect: '/forum' } })">登入後參與討論</button>
        </div>
      </div>
    </section>

    <!-- ═══ Footer ═══════════════════════════════════════════════════════════ -->
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-logo">
          <span>🍷</span>
          <div>
            <div class="fl-title">Wine Academy 葡萄酒學院</div>
            <div class="fl-copy">© 2026 葡萄酒學院 · 保留所有權利</div>
          </div>
        </div>
        <div class="footer-links">
          <router-link to="/login">登入</router-link>
          <router-link to="/register">註冊</router-link>
          <a href="mailto:support@wineacademy.tw">聯絡我們</a>
        </div>
      </div>
    </footer>

    <!-- ═══ 付款跳轉 Overlay ══════════════════════════════════════════════════ -->
    <div class="checkout-overlay" v-if="checkoutLoading">
      <div class="checkout-box">
        <div class="co-spinner"></div>
        <p>正在連線到付款頁面…</p>
      </div>
    </div>

    <!-- ═══ 課程說明 Modal ══════════════════════════════════════════════════ -->
    <div class="cm-backdrop" v-if="showCourseModal" @click.self="showCourseModal = false">
      <div class="cm-modal">
        <button class="cm-close" @click="showCourseModal = false">✕</button>

        <template v-if="activeCourseDetail === 'bordeaux'">

        <!-- 標題 -->
        <div class="cm-header">
          <div class="cm-icon">🏰</div>
          <h2 class="cm-title">波爾多葡萄酒完整課程說明</h2>
          <p class="cm-sub">從入門到大師，全方位掌握波爾多葡萄酒知識</p>
        </div>

        <!-- 課程總覽 -->
        <div class="cm-section">
          <h3 class="cm-sec-title">📚 課程內容總覽</h3>
          <div class="cm-levels-grid">
            <div class="cm-level">
              <div class="cm-lv-badge">Level 1</div>
              <div class="cm-lv-name">基礎入門</div>
              <ul class="cm-lv-list">
                <li>葡萄酒世界地理</li>
                <li>波爾多產區介紹</li>
                <li>主要葡萄品種</li>
                <li>基礎釀造流程</li>
                <li>波爾多分級制度</li>
              </ul>
            </div>
            <div class="cm-level">
              <div class="cm-lv-badge lv2">Level 2</div>
              <div class="cm-lv-name">進階學習</div>
              <ul class="cm-lv-list">
                <li>左岸產區深度剖析</li>
                <li>美多克六大村莊</li>
                <li>格拉夫與貝沙克</li>
                <li>土壤與風土關係</li>
                <li>年份差異解析</li>
              </ul>
            </div>
            <div class="cm-level">
              <div class="cm-lv-badge lv3">Level 3</div>
              <div class="cm-lv-name">深度探索</div>
              <ul class="cm-lv-list">
                <li>右岸聖愛美濃與波美侯</li>
                <li>知名酒莊歷史故事</li>
                <li>地質科學深入分析</li>
                <li>氣候與年份評分</li>
                <li>甜白酒索甸與巴薩克</li>
              </ul>
            </div>
            <div class="cm-level">
              <div class="cm-lv-badge lv4">Level 4</div>
              <div class="cm-lv-name">大師課程</div>
              <ul class="cm-lv-list">
                <li>頂級酒莊品飲評析</li>
                <li>波爾多投資與收藏</li>
                <li>餐酒搭配專業指南</li>
                <li>期酒制度 En Primeur</li>
                <li>侍酒師考試準備</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 互動工具 -->
        <div class="cm-section">
          <h3 class="cm-sec-title">🛠️ 學習工具</h3>
          <div class="cm-tools-grid">
            <div class="cm-tool"><span class="ct-icon">🗺️</span><span class="ct-name">互動地圖</span><span class="ct-desc">Mapbox 互動式產區地圖，地質、氣候圖層</span></div>
            <div class="cm-tool"><span class="ct-icon">🎮</span><span class="ct-name">互動練習</span><span class="ct-desc">4 種遊戲：產區競答、左右岸識別、年份排序、葡萄土壤配對</span></div>
            <div class="cm-tool"><span class="ct-icon">🏆</span><span class="ct-name">成就系統</span><span class="ct-desc">解鎖徽章、累積積分、追蹤學習進度</span></div>
            <div class="cm-tool"><span class="ct-icon">📔</span><span class="ct-name">品飲筆記</span><span class="ct-desc">記錄品飲心得，結合年份氣候資料輔助分析</span></div>
            <div class="cm-tool"><span class="ct-icon">💬</span><span class="ct-name">學員論壇</span><span class="ct-desc">與其他學員交流心得、分享品飲體驗</span></div>
            <div class="cm-tool"><span class="ct-icon">📊</span><span class="ct-name">學習追蹤</span><span class="ct-desc">正確率、學習時長、各單元詳細進度記錄</span></div>
          </div>
        </div>

        <!-- 方案比較 -->
        <div class="cm-section">
          <h3 class="cm-sec-title">💎 方案比較</h3>
          <div class="cm-compare-table">
            <div class="cm-compare-header">
              <div class="cc-col feature-col">功能</div>
              <div class="cc-col free-col">免費體驗<br><span class="cc-price">NT$ 0</span></div>
              <div class="cc-col basic-col popular-col">完整課程 ⭐<br><span class="cc-price">NT$ {{ pricing.basic.monthly }}/月</span></div>
              <div class="cc-col premium-col">頂級方案<br><span class="cc-price">NT$ {{ pricing.premium.monthly }}/月</span></div>
            </div>
            <div v-for="row in compareRows" :key="row.feature" class="cm-compare-row">
              <div class="cc-col feature-col">{{ row.feature }}</div>
              <div class="cc-col free-col"><span :class="row.free ? 'cc-yes' : 'cc-no'">{{ row.free ? '✓' : '✗' }}</span><span v-if="row.freeNote" class="cc-note">{{ row.freeNote }}</span></div>
              <div class="cc-col basic-col"><span :class="row.basic ? 'cc-yes' : 'cc-no'">{{ row.basic ? '✓' : '✗' }}</span><span v-if="row.basicNote" class="cc-note">{{ row.basicNote }}</span></div>
              <div class="cc-col premium-col"><span :class="row.premium ? 'cc-yes' : 'cc-no'">{{ row.premium ? '✓' : '✗' }}</span><span v-if="row.premiumNote" class="cc-note">{{ row.premiumNote }}</span></div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cm-cta">
          <button class="cm-btn free" @click="showCourseModal = false; handleFreeTier()">免費開始體驗</button>
          <button class="cm-btn basic" @click="showCourseModal = false; handlePurchase('bordeaux','basic')">訂閱完整課程 NT$290/月</button>
          <button class="cm-btn premium" @click="showCourseModal = false; handlePurchase('bordeaux','premium')">頂級方案 NT$590/月</button>
        </div>
        </template>

        <template v-else-if="activePrelaunchDetail">
          <div class="cm-header">
            <div class="cm-icon">{{ activePrelaunchDetail.icon }}</div>
            <h2 class="cm-title">{{ activePrelaunchDetail.title }}</h2>
            <p class="cm-sub">{{ activePrelaunchDetail.subtitle }}</p>
            <div class="cm-badge-preview">⏳ 預計 2027 開放</div>
          </div>

          <div class="cm-alert">
            以下為依據目前開發進度整理的預先參考版本，正式課程以最終上線內容為準。
          </div>

          <div class="cm-section">
            <h3 class="cm-sec-title">🧭 目前開發進度</h3>
            <div class="cm-tools-grid">
              <div class="cm-tool" v-for="item in activePrelaunchDetail.devStatus" :key="item.title">
                <span class="ct-icon">{{ item.icon }}</span>
                <span class="ct-name">{{ item.title }}</span>
                <span class="ct-desc">{{ item.desc }}</span>
              </div>
            </div>
          </div>

          <div class="cm-section">
            <h3 class="cm-sec-title">📚 預計課程架構</h3>
            <div class="cm-preview-grid">
              <div class="cm-preview-card" v-for="lv in activePrelaunchDetail.roadmap" :key="lv.level">
                <div class="cm-lv-badge">{{ lv.level }}</div>
                <div class="cm-lv-name">{{ lv.name }}</div>
                <div class="cm-preview-meta">{{ lv.meta }}</div>
                <ul class="cm-lv-list">
                  <li v-for="point in lv.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="cm-section">
            <h3 class="cm-sec-title">🛠️ 預計開放功能</h3>
            <div class="cm-pill-list">
              <span class="cm-pill" v-for="f in activePrelaunchDetail.features" :key="f">{{ f }}</span>
            </div>
          </div>

          <div class="cm-cta">
            <button class="cm-btn basic" @click="showCourseModal = false; handleNotify(activeCourseDetail)">🔔 搶先通知我</button>
            <button class="cm-btn free" @click="showCourseModal = false">稍後再看</button>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
import { authState, authActions } from '../stores/authStore.js'
import { initiateCheckout } from '../lib/purchaseService.js'
import { fetchRecentPosts } from '../lib/forumService.js'

const router = useRouter()

// ─── Auth ─────────────────────────────────────────────────────────────────────
const authUser    = computed(() => authState.user)
const authLoading = computed(() => authState.loading)
const isAdmin     = computed(() => {
  if (authState.loading) return false
  return authActions.isAdmin()
})
const displayName = computed(() => authActions.getDisplayName() || '學員')

const handleLogout = async () => {
  await authActions.signOut()
  // 留在首頁
}

// ─── Scroll ───────────────────────────────────────────────────────────────────
const coursesRef = ref(null)
const scrollToCourses = () => coursesRef.value?.scrollIntoView({ behavior: 'smooth' })
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// ─── 免費開始 ─────────────────────────────────────────────────────────────────
const handleStartFree = () => {
  if (authUser.value) {
    router.push('/bordeaux')
  } else {
    router.push('/register')
  }
}

// ─── 免費 Tier（需登入）───────────────────────────────────────────────────────
const handleFreeTier = () => {
  if (authUser.value) {
    router.push('/bordeaux')
  } else {
    router.push({ path: '/register', query: { plan: 'free' } })
  }
}

// ─── 課程狀態 + 訂閱定價（從 DB 讀取）────────────────────────────────
const pricing = ref({
  basic:   { monthly: 290,  yearly: 1800 },
  premium: { monthly: 590,  yearly: 3600 }
})
// 各課程上架狀態（預設偡 active=true 防止関你加載先閃爍）
const courseStatuses = ref({ bordeaux: true, bourgogne: false, italy: false, spain: true, germany: true, portugal: true })

async function loadCourseData() {
  try {
    const { data } = await supabase
      .from('courses')
      .select('id,active,price_basic_monthly,price_basic_yearly,price_premium_monthly,price_premium_yearly')
    if (data) {
      data.forEach(c => {
        courseStatuses.value[c.id] = c.active
        if (c.id === 'bordeaux') {
          pricing.value = {
            basic:   { monthly: c.price_basic_monthly   ?? 290,  yearly: c.price_basic_yearly   ?? 1800 },
            premium: { monthly: c.price_premium_monthly ?? 590,  yearly: c.price_premium_yearly ?? 3600 }
          }
        }
      })
    }
  } catch { /* 使用預設定價 */ }
}

// ─── 訂閱流程 ──────────────────────────────────────────────────────────────────────────
const billingPeriod   = ref('monthly')
const checkoutLoading = ref(false)

const handlePurchase = async (courseId, tier) => {
  if (!authUser.value) {
    router.push({ path: '/register', query: { courseId, tier } })
    return
  }
  checkoutLoading.value = true
  try {
    const { sessionUrl } = await initiateCheckout({
      courseId,
      tier,
      billingPeriod: billingPeriod.value,
      userId:    authUser.value.id,
      userEmail: authUser.value.email
    })
    window.location.href = sessionUrl
  } catch (err) {
    checkoutLoading.value = false
    alert(`付款初始化失敗：${err.message || '請稍後再試'}`)
  }
}

const handleNotify = (courseId) => {
  const courseNames = { bourgogne: '勃根地', italy: '義大利' }
  const name = courseNames[courseId] || courseId
  if (authUser.value) {
    alert(`已記錄您的興趣！${name}課程上線時我們會通知您。`)
  } else {
    router.push({ path: '/register', query: { notify: courseId } })
  }
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

// ─── 課程說明 Modal ──────────────────────────────────────────────────────────
const showCourseModal = ref(false)
const activeCourseDetail = ref('bordeaux')

const openCourseDetail = (courseId = 'bordeaux') => {
  activeCourseDetail.value = courseId
  showCourseModal.value = true
}

const prelaunchCourseDetails = {
  bourgogne: {
    icon: '🍇',
    title: '布根地葡萄酒課程預先參考',
    subtitle: '依照現有開發資料整理的先行版課程說明',
    devStatus: [
      { icon: '✅', title: '課程框架', desc: 'Level 1–4 架構與課程模組資料已建立（levels.json）。' },
      { icon: '✅', title: '探索地圖', desc: '主要產區地圖、AOC 邊界、地質與氣候圖層功能已整合。' },
      { icon: '✅', title: '互動功能', desc: '練習中心與品飲筆記頁已接入布根地頁面流程。' }
    ],
    roadmap: [
      { level: 'Level 1', name: '基礎入門', meta: '8 模組｜6-8 小時', points: ['地理與風土基礎', '品種與分級制度', '金丘產區入門'] },
      { level: 'Level 2', name: '中級進階', meta: '8 模組｜8-10 小時', points: ['夜丘與伯恩丘對照', '特級園與一級園', '風格差異品鑑'] },
      { level: 'Level 3', name: '高級專業', meta: '15 模組｜12-15 小時', points: ['風土深度解析', '市場與投資分析', '頂級酒莊案例'] },
      { level: 'Level 4', name: '專家認證', meta: '8 模組｜20+ 小時', points: ['專業評估框架', '商業與顧問實務', '整合型認證任務'] }
    ],
    features: ['互動地圖探索', '地質圖層', '氣候熱力圖', 'AOC/產區導覽', '互動練習中心', '品飲筆記系統']
  },
  italy: {
    icon: '🇮🇹',
    title: '義大利葡萄酒課程預先參考',
    subtitle: '依照現有開發資料整理的先行版課程說明',
    devStatus: [
      { icon: '✅', title: '課程框架', desc: 'Level 1–3 共 61 課架構已完成，課程 JSON 已建立。' },
      { icon: '✅', title: '探索地圖', desc: '18 大產區選擇、AOC 邊界、等高線與氣候熱力顯示已建置。' },
      { icon: '🛠️', title: '持續優化中', desc: '依最新開發持續調整互動體驗與內容編排。' }
    ],
    roadmap: [
      { level: 'Level 1', name: '入門基礎', meta: '12 課｜3-4 小時', points: ['分級制度與地理氣候', '五大必學產區', '基礎品種與餐酒搭配'] },
      { level: 'Level 2', name: '進階全覽', meta: '23 課｜6-8 小時', points: ['北中南義產區深度', '品種研究進階', '投資收藏與市場'] },
      { level: 'Level 3', name: '專家訓練', meta: '26 課｜10-12 小時', points: ['稀有品種與小產區', '盲品與酒標判讀', '產業趨勢與侍酒實務'] }
    ],
    features: ['互動地圖探索', '氣候熱力圖', '等高線圖層', 'AOC 產區查詢', '課程簡報學習', '學習進度追蹤']
  }
}

const activePrelaunchDetail = computed(() => prelaunchCourseDetails[activeCourseDetail.value] || null)

const compareRows = [
  { feature: 'Level 1 基礎入門', free: true, basic: true, premium: true },
  { feature: 'Level 2 進階學習', free: false, basic: true, premium: true },
  { feature: 'Level 3 深度探索', free: false, basic: true, premium: true },
  { feature: 'Level 4 大師課程', free: false, basic: true, premium: true },
  { feature: '基本地圖瀏覽', free: true, basic: true, premium: true },
  { feature: '全產區地圖探索', free: false, basic: true, premium: true },
  { feature: '地質圖層', free: false, basic: false, premium: true },
  { feature: '氣候熱力圖層', free: false, basic: false, premium: true },
  { feature: '知名酒莊地圖標記', free: false, basic: false, premium: true },
  { feature: '互動練習（4種遊戲）', free: false, basic: true, premium: true },
  { feature: '成就系統', free: true, basic: true, premium: true },
  { feature: '學習進度追蹤', free: true, basic: true, premium: true },
  { feature: '品飲筆記本', free: false, basic: false, premium: true },
  { feature: '學員論壇', free: true, basic: true, premium: true },
]

// ─── 靜態資料 ─────────────────────────────────────────────────────────────────
const bordeauxIncludes = [
  '4個學習等級・80+ 課程單元',
  '互動式 Mapbox 地圖（AOC全覆蓋）',
  '100+ 練習題・成就解鎖系統',
  '地質、氣候、年份深度分析'
]

const features = [
  { icon: '🗺️', title: '互動地圖學習', desc: '業界唯一結合 Mapbox 的產區地圖，可探索AOC分布、地質土壤、氣候熱力圖' },
  { icon: '🎮', title: '遊戲化練習', desc: '4種互動遊戲：產區競答、左右岸識別、年份溫度排序、葡萄與土壤配對' },
  { icon: '📊', title: '深度學習追蹤', desc: '記錄正確率、學習時長、各單元進度，並以成就徽章激勵學習動機' },
  { icon: '📔', title: '品飲筆記本', desc: '隨時記錄品飲心得，可參考歷史年份氣候資料輔助分析' },
  { icon: '🔬', title: '科學化內容', desc: '深入地質、氣候科學，用數據理解為何同一產區不同地塊有截然不同的風格' },
  { icon: '📱', title: '全裝置適配', desc: '桌機、平板、手機皆可流暢使用，隨時隨地學習不中斷' }
]

const faqs = [
  { q: '課程等級如何解鎖？', a: 'Level 1 開放所有學員直接進入。Level 2、3、4 需依序完成前一等級的「綜合評量」（每等級最後一課）才能解鎖，確保您真正掌握前項知識再進階。' },
  { q: '可以跳過等級直接學進階課程嗎？', a: '本平台採循序解鎖制，需依序完成綜合評量才能解鎖下一等級。' },
  { q: '訂閱後如何取消？', a: '可以隨時在「我的訂單」頁面點擊「管理訂閱」，前往 Stripe 客戶入口取消。取消後於當期計費週期結束前仍可繼續使用課程。' },
  { q: '月繳與年繳有什麼差別？', a: `月繳方案每月自動扣款，彈性較高；年繳方案完整課程年省 NT$${(pricing.value.basic.monthly * 12 - pricing.value.basic.yearly).toLocaleString()}，頂級方案年省 NT$${(pricing.value.premium.monthly * 12 - pricing.value.premium.yearly).toLocaleString()}。` },
  { q: '我不會品酒，可以學嗎？', a: '當然！Level 1 從最基礎的葡萄酒知識開始，循序游進，完全不需要任何先備知識。' },
  { q: '訂閱方案可以升級嗎？', a: '可以！隨時可從「完整課程」升級為「頂級方案」，只需重新訂閱頂級方案即可。' },
  { q: '支援哪些付款方式？', a: '透過 Stripe 安全付款，支援 Visa、MasterCard、JCB 等主要信用卡，加密處理。' },
  { q: '有退款政策嗎？', a: '訂閱後 7 天內如需退款，請聯絡 support@wineacademy.tw，我們將全額退款。' }
]

// ─── 論壇預覽 ─────────────────────────────────────────────────────────────────
const recentPosts  = ref([])
const forumLoading = ref(false)

onMounted(async () => {
  loadCourseData()
  forumLoading.value = true
  try {
    recentPosts.value = await fetchRecentPosts(5)
  } catch (e) {
    console.error('forum preview error', e)
  } finally {
    forumLoading.value = false
  }
})
</script>

<style scoped>
/* ─── 論壇預覽 ──────────────────────────────────────────────────────────── */
.forum-preview-section { background: #0a0306; padding: 80px 20px; }
.fp-loading { text-align: center; color: #7a6a5a; padding: 20px; font-size: 0.9rem; }
.fp-list { display: flex; flex-direction: column; gap: 10px; max-width: 720px; margin: 0 auto 28px; }
.fp-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(212,175,55,0.12);
  border-radius: 10px;
  padding: 14px 18px;
  cursor: pointer;
  transition: border-color .2s, background .2s;
}
.fp-card:hover { border-color: rgba(212,175,55,0.35); background: rgba(255,255,255,0.07); }
.fp-card-title { font-size: 0.95rem; color: #e8dcc8; margin-bottom: 6px; font-weight: 600; }
.fp-card-meta { display: flex; justify-content: space-between; font-size: 0.78rem; color: #7a6a5a; }
.fp-actions { display: flex; justify-content: center; gap: 12px; margin-top: 10px; }
.fp-btn {
  padding: 10px 24px; border-radius: 24px; font-size: 0.88rem;
  font-weight: 600; cursor: pointer; transition: all .2s;
}
.fp-btn.outline { background: transparent; border: 1.5px solid rgba(212,175,55,0.5); color: #d4af37; }
.fp-btn.outline:hover { background: rgba(212,175,55,0.1); }
.fp-btn.primary { background: #722f37; color: #fff; border: 1.5px solid #722f37; }
.fp-btn.primary:hover { background: #9b3a45; }

/* ─── 計費週期切換 ────────────────────────────────────────────────────────── */
.billing-toggle { display:flex; justify-content:center; gap:8px; margin-bottom:20px; }
.bt-btn { padding:8px 20px; border-radius:20px; border:1px solid rgba(255,255,255,0.2); background:transparent; color:#c8bba8; cursor:pointer; font-size:0.88rem; transition:all .2s; }
.bt-btn.active { background:#722f37; border-color:#722f37; color:#fff; }
.bt-save { display:inline-block; margin-left:6px; background:#2a7a3b; color:#fff; font-size:0.72rem; padding:2px 7px; border-radius:10px; }
.price-note { font-size:0.78rem; color:#8cb87a; margin-top:4px; }
.price-unit { font-size:0.9rem; color:#a89060; }

/* ─── 基礎 ─────────────────────────────────────────────────────────────────── */
.platform-home {
  min-height: 100vh;
  font-family: 'Segoe UI', 'PingFang TC', 'Noto Sans TC', sans-serif;
  background: #0e0406;
  color: #f5f0e8;
}

/* ─── 導覽列 ──────────────────────────────────────────────────────────────── */
.top-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(14, 4, 6, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.logo-icon { font-size: 1.6rem; }
.logo-title { color: #d4af37; font-size: 1rem; font-weight: 700; line-height: 1.2; }
.logo-sub { color: #a89060; font-size: 0.7rem; }
.nav-actions { display: flex; align-items: center; gap: 10px; }
.nav-greeting { color: #d4af37; font-size: 0.85rem; margin-right: 4px; }
.btn-nav {
  padding: 7px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.25);
  background: transparent;
  color: #e8dcc8;
  font-size: 0.82rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all .2s;
}
.btn-nav:hover { border-color: #d4af37; color: #d4af37; }
.btn-nav.primary { background: #722f37; border-color: #722f37; color: #fff; }
.btn-nav.primary:hover { background: #8b3a43; }
.btn-nav.ghost { background: transparent; border-color: rgba(255,255,255,0.15); color: #9a8878; }
.btn-nav.admin-nav-btn { background: transparent; border-color: #c9a84c; color: #c9a84c; }
.btn-nav.admin-nav-btn:hover { background: #c9a84c; color: #1a0a00; }

/* ─── Hero ────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #1a0409 0%, #2d0a11 40%, #0e0406 100%);
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 60%, rgba(114,47,55,0.3) 0%, transparent 70%);
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  padding: 0 24px;
}
.hero-tag {
  display: inline-block;
  background: rgba(212,175,55,0.15);
  border: 1px solid rgba(212,175,55,0.4);
  color: #d4af37;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}
.hero-title {
  font-size: clamp(2.4rem, 6vw, 3.8rem);
  font-weight: 800;
  margin: 0 0 20px;
  line-height: 1.15;
  color: #f5f0e8;
}
.hero-title .accent { color: #d4af37; }
.hero-desc {
  font-size: 1.1rem;
  color: #c0a888;
  line-height: 1.7;
  margin-bottom: 36px;
}
.hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
.cta-primary {
  padding: 14px 32px;
  background: linear-gradient(135deg, #722f37, #9b3a45);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(114,47,55,0.5);
  transition: transform .2s, box-shadow .2s;
}
.cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(114,47,55,0.6); }
.cta-secondary {
  padding: 14px 28px;
  background: transparent;
  border: 1.5px solid rgba(212,175,55,0.5);
  border-radius: 30px;
  color: #d4af37;
  font-size: 1rem;
  cursor: pointer;
  transition: all .2s;
}
.cta-secondary:hover { background: rgba(212,175,55,0.08); }
/* 已登入課程入口 */
.logged-in-cta { flex-direction: column; align-items: center; }
.course-entry-title { color: #d4af37; font-size: 1rem; margin-bottom: 16px; }
.course-entry-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.cta-course {
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
  border: none;
}
.bordeaux-btn {
  background: linear-gradient(135deg, #722f37, #9b3a45);
  color: #fff;
  box-shadow: 0 4px 20px rgba(114,47,55,0.5);
}
.bordeaux-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(114,47,55,0.6); }
.bourgogne-btn {
  background: linear-gradient(135deg, #4a1e5e, #6b2d8b);
  color: #fff;
  box-shadow: 0 4px 20px rgba(74,30,94,0.5);
}
.bourgogne-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(74,30,94,0.6); }
.italy-btn {
  background: linear-gradient(135deg, #7a2020, #a33030);
  color: #fff;
  box-shadow: 0 4px 20px rgba(122,32,32,0.5);
}
.italy-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(122,32,32,0.6); }
.spain-btn {
  background: linear-gradient(135deg, #c0392b, #e74c3c);
  color: #fff;
  box-shadow: 0 4px 20px rgba(192,57,43,0.5);
}
.spain-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(192,57,43,0.65); }
.spain-cta {
  background: linear-gradient(135deg, #c0392b, #e74c3c) !important;
}
.germany-btn {
  background: linear-gradient(135deg, #2c3e50, #3d5a80);
  color: #fff;
  box-shadow: 0 4px 20px rgba(44,62,80,0.5);
}
.germany-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(44,62,80,0.65); }
.hero-stats { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }
.stat-item { text-align: center; padding: 0 12px; }
.stat-num { display: block; font-size: 2rem; font-weight: 800; color: #d4af37; line-height: 1; }
.stat-label { font-size: 0.75rem; color: #9a8878; margin-top: 4px; }
.stat-div { width: 1px; height: 36px; background: rgba(255,255,255,0.15); }

/* ─── Sections ────────────────────────────────────────────────────────────── */
.section-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section-header { text-align: center; margin-bottom: 48px; }
.section-header h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); color: #f5f0e8; margin: 0 0 12px; }
.section-header p { color: #9a8878; font-size: 1rem; }

/* ─── 課程區 ──────────────────────────────────────────────────────────────── */
.courses-section { padding: 80px 0; background: #120508; }
.courses-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 24px;
  align-items: start;
}
@media (max-width: 1200px) { .courses-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 1024px) { .courses-grid { grid-template-columns: 1fr; max-width: 580px; margin: 0 auto; } }

/* ─── 課程卡片 ────────────────────────────────────────────────────────────── */
.course-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 28px;
  position: relative;
  overflow: hidden;
}
.course-card.bordeaux { border-color: rgba(212,175,55,0.3); background: rgba(212,175,55,0.04); }
.course-card.bourgogne { border-color: rgba(107,45,139,0.4); background: rgba(107,45,139,0.05); }
.course-card.spain { border-color: rgba(192,57,43,0.4); background: rgba(192,57,43,0.05); }
/* 課程深度預覽 strip */
.course-preview-strip {
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(107,45,139,0.12);
  border: 1px solid rgba(107,45,139,0.25);
  border-radius: 10px;
  padding: 14px 16px;
  margin: 14px 0 10px;
  gap: 4px;
}
.cp-stat { display: flex; flex-direction: column; align-items: center; gap: 3px; flex: 1; }
.cp-num { font-size: 1.5rem; font-weight: 800; color: #c89ee0; line-height: 1; }
.cp-plus { font-size: 0.9rem; font-weight: 700; }
.cp-label { font-size: 0.62rem; color: #9a7ab0; text-align: center; line-height: 1.35; }
.cp-divider { width: 1px; height: 32px; background: rgba(107,45,139,0.3); flex-shrink: 0; }
.course-preview-features {
  display: flex; flex-wrap: wrap; gap: 6px;
  margin-bottom: 4px;
}
.cpf-item {
  font-size: 0.68rem; color: #9a7ab0;
  background: rgba(107,45,139,0.08);
  border: 1px solid rgba(107,45,139,0.2);
  border-radius: 20px;
  padding: 3px 10px;
}
/* Italy strip */
.italy-strip { background: rgba(192,57,43,0.08); border-color: rgba(192,57,43,0.2); }
.italy-strip .cp-num { color: #e07060; }
.italy-strip .cp-label { color: #a07060; }
.italy-strip .cp-divider { background: rgba(192,57,43,0.25); }
.italy-features .italy-tag { color: #b05040; background: rgba(192,57,43,0.07); border-color: rgba(192,57,43,0.18); }
/* Spain strip */
.spain-strip { background: rgba(192,57,43,0.08); border-color: rgba(192,57,43,0.25); }
.spain-strip .cp-num { color: #e85c3a; }
.spain-strip .cp-label { color: #a06050; }
.spain-strip .cp-divider { background: rgba(192,57,43,0.28); }
.spain-features .spain-tag { color: #c0402a; background: rgba(192,57,43,0.07); border-color: rgba(192,57,43,0.2); }
/* Germany card */
.germany-strip { background: rgba(44,62,80,0.08); border-color: rgba(44,62,80,0.25); }
.germany-strip .cp-num { color: #2c3e50; font-size: 0.9rem; }
.germany-strip .cp-label { color: #4a6072; }
.germany-strip .cp-divider { background: rgba(44,62,80,0.28); }
.germany-features .germany-tag { color: #2c3e50; background: rgba(44,62,80,0.07); border-color: rgba(44,62,80,0.2); }
.germany-cta { background: linear-gradient(135deg, #2c3e50, #3d5a80) !important; }
/* Portugal card */
.portugal-strip { background: rgba(139,0,0,0.08); border-color: rgba(139,0,0,0.25); }
.portugal-strip .cp-num { color: #8B0000; font-size: 0.9rem; }
.portugal-strip .cp-label { color: #7a3a3a; }
.portugal-strip .cp-divider { background: rgba(139,0,0,0.28); }
.portugal-features .portugal-tag { color: #8B0000; background: rgba(139,0,0,0.07); border-color: rgba(139,0,0,0.2); }
.portugal-cta { background: linear-gradient(135deg, #8B0000, #b22222) !important; }
.portugal-btn {
  background: linear-gradient(135deg, #8B0000, #b22222);
  color: #fff;
  box-shadow: 0 4px 20px rgba(139,0,0,0.5);
}
.portugal-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(139,0,0,0.65); }
/* tier tagline */
.tier-tagline {
  font-size: 0.68rem; color: #7a6060;
  margin: 2px 0 10px;
  font-style: italic;
}
.card-actions { display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
.card-cta {
  flex: 1;
  padding: 12px 20px;
  background: linear-gradient(135deg, #4a1e5e, #6b2d8b);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity .2s, transform .2s;
}
.card-cta:hover { opacity: .85; transform: translateY(-1px); }
.card-info-btn {
  padding: 12px 16px;
  background: rgba(255,255,255,0.06);
  color: #9a8878;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  font-size: 0.88rem;
  cursor: pointer;
  transition: background .2s;
}
.card-info-btn:hover { background: rgba(255,255,255,0.12); }
.card-status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 600;
  margin-bottom: 20px;
}
.card-status.available { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
.card-status.active { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
.card-status.soon { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.3); }
.card-status.planning { background: rgba(107,114,128,0.15); color: #9ca3af; border: 1px solid rgba(107,114,128,0.3); }
.planning-body { text-align: center; padding: 24px 16px; color: #9a8878; font-size: 0.9rem; line-height: 1.6; }
.planning-body p { margin: 0 0 16px; }
.planning-cta { color: #6b7280; font-size: 0.85rem; font-style: italic; }
.card-hero { margin-bottom: 20px; }
.card-icon { font-size: 2.4rem; margin-bottom: 8px; }
.card-region { color: #9a8878; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px; }
.card-title { font-size: 1.5rem; font-weight: 700; color: #f5f0e8; margin: 0 0 10px; }
.card-desc { color: #9a8878; font-size: 0.88rem; line-height: 1.6; }
.course-includes { margin-bottom: 24px; padding: 14px; background: rgba(0,0,0,0.2); border-radius: 10px; }
.include-item { font-size: 0.8rem; color: #c0a888; margin-bottom: 5px; display: flex; align-items: flex-start; gap: 6px; }
.ii-dot { color: #d4af37; font-size: 0.6rem; margin-top: 3px; flex-shrink: 0; }

/* ─── Tier Grid ───────────────────────────────────────────────────────────── */
.tier-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 640px) { .tier-grid { grid-template-columns: 1fr; } }

.tier-card {
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.tier-card.popular { border-color: #d4af37; background: rgba(212,175,55,0.06); }
.popular-tag {
  background: #d4af37;
  color: #0e0406;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: inline-block;
}
.tier-name { font-size: 0.82rem; font-weight: 600; color: #e8dcc8; margin-bottom: 6px; }
.tier-price { font-size: 1.3rem; font-weight: 800; color: #d4af37; margin-bottom: 12px; }
.tier-list { list-style: none; padding: 0; margin: 0 0 16px; flex: 1; }
.tier-list li { font-size: 0.72rem; padding: 3px 0; display: flex; align-items: flex-start; gap: 5px; }
.tier-list li.ok { color: #a0c878; }
.tier-list li.ok::before { content: '✓'; color: #4ade80; font-weight: 700; }
.tier-list li.no { color: #5a4a4a; }
.tier-list li.no::before { content: '✗'; color: #5a4a4a; }
.tier-btn {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity .2s;
  margin-top: auto;
}
.tier-btn:hover { opacity: .85; }
.free-btn { background: rgba(255,255,255,0.1); color: #e8dcc8; border: 1px solid rgba(255,255,255,0.2); }
.basic-btn { background: linear-gradient(135deg, #722f37, #9b3a45); color: #fff; }
.premium-btn { background: linear-gradient(135deg, #4a2c6e, #6b3fa0); color: #e8d5ff; }

/* ─── Coming Soon ─────────────────────────────────────────────────────────── */
.coming-soon { opacity: 0.7; }
.coming-soon-overlay {
  margin-top: 24px;
  background: rgba(0,0,0,0.4);
  border: 1px dashed rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 32px 20px;
  text-align: center;
}
.cs-icon { font-size: 2rem; margin-bottom: 8px; }
.cs-title { color: #e8dcc8; font-weight: 600; margin-bottom: 4px; }
.cs-desc { color: #7a6858; font-size: 0.82rem; margin-bottom: 16px; }
.cs-notify {
  background: rgba(212,175,55,0.12);
  border: 1px solid rgba(212,175,55,0.3);
  color: #d4af37;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all .2s;
}
.cs-notify:hover { background: rgba(212,175,55,0.2); }

/* ─── Features ────────────────────────────────────────────────────────────── */
.features-section { padding: 80px 0; background: #0e0406; }
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .features-grid { grid-template-columns: 1fr; } }
.feature-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 24px;
}
.fi-icon { font-size: 2rem; margin-bottom: 12px; }
.feature-item h4 { color: #f5f0e8; font-size: 1rem; margin: 0 0 8px; }
.feature-item p { color: #7a6858; font-size: 0.85rem; line-height: 1.6; margin: 0; }

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */
.faq-section { padding: 80px 0; background: #120508; }
.faq-list { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
.faq-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 16px 20px;
  cursor: pointer;
  transition: border-color .2s;
}
.faq-item:hover { border-color: rgba(212,175,55,0.3); }
.faq-q { display: flex; justify-content: space-between; align-items: center; color: #e8dcc8; font-size: 0.92rem; }
.faq-arrow { color: #7a6858; transition: transform .25s; }
.faq-arrow.open { transform: rotate(180deg); }
.faq-a { color: #9a8878; font-size: 0.85rem; line-height: 1.7; margin-top: 10px; }

/* ─── Footer ──────────────────────────────────────────────────────────────── */
.site-footer { background: #080204; border-top: 1px solid rgba(255,255,255,0.07); padding: 36px 0; }
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-logo { display: flex; align-items: center; gap: 10px; font-size: 1.4rem; }
.fl-title { color: #9a8878; font-size: 0.85rem; font-weight: 600; }
.fl-copy { color: #4a3a3a; font-size: 0.72rem; }
.footer-links { display: flex; gap: 20px; }
.footer-links a { color: #6a5858; font-size: 0.82rem; text-decoration: none; transition: color .2s; }
.footer-links a:hover { color: #d4af37; }

/* ─── Checkout Overlay ────────────────────────────────────────────────────── */
.checkout-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkout-box {
  background: #1a0409;
  border: 1px solid rgba(212,175,55,0.3);
  border-radius: 16px;
  padding: 48px;
  text-align: center;
  color: #e8dcc8;
}
.co-spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(212,175,55,0.2);
  border-top-color: #d4af37;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin: 0 auto 20px;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── 課程說明按鈕 ──────────────────────────────────────────── */
.course-detail-btn {
  margin-top: 12px;
  padding: 8px 20px;
  background: rgba(212,175,55,0.12);
  border: 1.5px solid rgba(212,175,55,0.4);
  border-radius: 20px;
  color: #d4af37;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.course-detail-btn:hover { background: rgba(212,175,55,0.22); transform: translateY(-1px); }

/* ── 課程說明 Modal ──────────────────────────────────────────── */
.cm-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  z-index: 9000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 16px;
  overflow-y: auto;
}
.cm-modal {
  position: relative;
  background: #fff;
  border-radius: 20px;
  max-width: 860px;
  width: 100%;
  padding: 40px;
  color: #1a1a1a;
  box-shadow: 0 24px 80px rgba(0,0,0,0.4);
}
.cm-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #888;
  line-height: 1;
}
.cm-close:hover { color: #333; }
.cm-header { text-align: center; margin-bottom: 32px; }
.cm-icon { font-size: 3rem; margin-bottom: 8px; }
.cm-title { font-size: 1.6rem; font-weight: 800; color: #2c1810; margin: 0 0 8px; }
.cm-sub { color: #6b5a45; font-size: 0.95rem; margin: 0; }
.cm-section { margin-bottom: 32px; }
.cm-sec-title { font-size: 1.05rem; font-weight: 700; color: #722f37; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 2px solid #f0e8d8; }

/* 四個等級卡片 */
.cm-levels-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.cm-level { background: #faf7f2; border-radius: 12px; padding: 16px; border: 1px solid #e8e0d4; }
.cm-lv-badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 700; background: #722f37; color: #fff; margin-bottom: 6px; }
.cm-lv-badge.lv2 { background: #3b5998; }
.cm-lv-badge.lv3 { background: #1a6b3c; }
.cm-lv-badge.lv4 { background: #7c4f00; }
.cm-lv-name { font-weight: 700; font-size: 0.9rem; color: #2c1810; margin-bottom: 8px; }
.cm-lv-list { margin: 0; padding-left: 14px; font-size: 0.8rem; color: #5a4a3a; line-height: 1.8; }

/* 學習工具格 */
.cm-tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.cm-tool { display: flex; flex-direction: column; background: #faf7f2; border-radius: 10px; padding: 14px; border: 1px solid #e8e0d4; gap: 4px; }
.ct-icon { font-size: 1.5rem; }
.ct-name { font-weight: 700; font-size: 0.88rem; color: #2c1810; }
.ct-desc { font-size: 0.78rem; color: #7a6a5a; line-height: 1.5; }

/* 比較表 */
.cm-compare-table { border-radius: 12px; overflow: hidden; border: 1px solid #e8e0d4; }
.cm-compare-header { display: grid; grid-template-columns: 2fr 1fr 1.2fr 1.2fr; background: #2c1810; color: #fff; }
.cm-compare-row { display: grid; grid-template-columns: 2fr 1fr 1.2fr 1.2fr; border-bottom: 1px solid #f0e8d8; }
.cm-compare-row:last-child { border-bottom: none; }
.cm-compare-row:nth-child(even) { background: #faf7f2; }
.cc-col { padding: 10px 14px; font-size: 0.82rem; display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
.cm-compare-header .cc-col { font-weight: 700; font-size: 0.8rem; flex-direction: column; align-items: center; text-align: center; padding: 14px 8px; }
.popular-col { background: rgba(212,175,55,0.25) !important; }
.cc-price { font-size: 0.72rem; opacity: 0.85; font-weight: 400; margin-top: 2px; }
.feature-col { font-weight: 500; color: #3c2a1a; }
.cc-yes { color: #1a6b3c; font-weight: 700; font-size: 1rem; }
.cc-no  { color: #c0392b; font-size: 1rem; }
.cc-note { font-size: 0.72rem; color: #8a7a6a; }

/* CTA */
.cm-cta { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 8px; padding-top: 24px; border-top: 2px solid #f0e8d8; }
.cm-btn { padding: 12px 24px; border-radius: 24px; font-size: 0.9rem; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; }
.cm-btn.free { background: #f0f0f0; color: #555; }
.cm-btn.free:hover { background: #e0e0e0; }
.cm-btn.basic { background: linear-gradient(135deg, #722f37, #9b4d57); color: #fff; }
.cm-btn.basic:hover { opacity: 0.9; transform: translateY(-1px); }
.cm-btn.premium { background: linear-gradient(135deg, #7c4f00, #d4af37); color: #fff; }
.cm-btn.premium:hover { opacity: 0.9; transform: translateY(-1px); }

.cm-badge-preview {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 180, 0, 0.15);
  color: #9c5f00;
  font-weight: 700;
  font-size: 0.82rem;
}
.cm-alert {
  background: #fff7eb;
  border: 1px solid #f2d39a;
  color: #7d5a21;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 0.84rem;
  line-height: 1.5;
  margin-bottom: 20px;
}
.cm-preview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.cm-preview-card {
  background: #faf7f2;
  border: 1px solid #e8e0d4;
  border-radius: 12px;
  padding: 14px;
}
.cm-preview-meta {
  font-size: 0.78rem;
  color: #7a6a5a;
  margin-bottom: 6px;
}
.cm-pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.cm-pill {
  background: #f7efe2;
  border: 1px solid #e3d4b9;
  color: #5a4630;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 700px) {
  .cm-modal { padding: 24px 16px; }
  .cm-levels-grid { grid-template-columns: repeat(2, 1fr); }
  .cm-tools-grid { grid-template-columns: repeat(2, 1fr); }
  .cm-preview-grid { grid-template-columns: 1fr; }
  .cm-compare-header, .cm-compare-row { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
  .cc-col { font-size: 0.72rem; padding: 8px 6px; }
}
</style>
