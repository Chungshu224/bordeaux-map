<template>
  <div class="platform-home">

    <!-- ═══ 頂部導覽列 ═══════════════════════════════════════════════════════ -->
    <nav class="top-nav">
      <div class="nav-inner">
        <div class="nav-logo" @click="scrollToTop">
          <img src="/logo.png" class="logo-icon-img" alt="侍酒師的筆記本" />
          <div>
            <div class="logo-title">{{ $t('home.nav.brand') }}</div>
            <div class="logo-sub">{{ $t('home.nav.brandSub') }}</div>
          </div>
        </div>

        <!-- 桌面導覽 -->
        <div class="nav-actions nav-desktop">
          <template v-if="authUser">
            <span class="nav-greeting">{{ displayName }}</span>
            <router-link v-if="isAdmin" to="/admin" class="btn-nav admin-nav-btn">{{ $t('home.nav.adminLink') }}</router-link>
            <router-link to="/bordeaux" class="btn-nav primary">{{ $t('home.nav.enterCourse') }}</router-link>
            <router-link to="/dashboard" class="btn-nav">{{ $t('home.nav.myOrders') }}</router-link>
            <button class="btn-nav ghost" @click="handleLogout">{{ $t('home.nav.logout') }}</button>
          </template>
          <template v-else>
            <router-link to="/login"    class="btn-nav">{{ $t('home.nav.login') }}</router-link>
            <router-link to="/register" class="btn-nav primary">{{ $t('home.nav.startFree') }}</router-link>
          </template>
        </div>

        <!-- 手機導覽 -->
        <div class="nav-mobile">
          <template v-if="authUser">
            <router-link to="/bordeaux" class="btn-nav primary btn-mobile-cta">{{ $t('home.nav.courseMobile') }}</router-link>
            <button class="nav-hamburger" @click="showMobileMenu = !showMobileMenu" :class="{ active: showMobileMenu }">
              <span></span><span></span><span></span>
            </button>
          </template>
          <template v-else>
            <router-link to="/login" class="btn-nav btn-mobile-login">{{ $t('home.nav.login') }}</router-link>
            <router-link to="/register" class="btn-nav primary btn-mobile-cta">{{ $t('home.nav.startFree') }}</router-link>
          </template>
        </div>
      </div>

    </nav>

    <!-- 手機下拉選單（移至 nav 外避免 sticky 定位問題） -->
    <transition name="nmd">
      <div v-if="showMobileMenu" class="nav-mobile-dropdown" @click="showMobileMenu = false">
        <div class="nmd-inner" @click.stop>
          <div v-if="authUser" class="nmd-user">👤 {{ displayName }}</div>
          <router-link v-if="isAdmin" to="/admin" class="nmd-item" @click="showMobileMenu = false">{{ $t('home.nav.adminLink') }}</router-link>
          <router-link to="/bordeaux" class="nmd-item nmd-primary" @click="showMobileMenu = false">{{ $t('home.nav.enterCourseMobile') }}</router-link>
          <router-link to="/dashboard" class="nmd-item" @click="showMobileMenu = false">{{ $t('home.nav.myOrdersMobile') }}</router-link>
          <button class="nmd-item nmd-logout" @click="showMobileMenu = false; handleLogout()">{{ $t('home.nav.logoutMobile') }}</button>
        </div>
      </div>
    </transition>

    <!-- ═══ 公告 Banner ════════════════════════════════════════════════════ -->
    <transition name="ann-fade">
      <div
        v-if="activeBanner"
        :class="['ann-banner', 'ann-banner--' + activeBanner.type]"
      >
        <span class="ann-banner-icon">{{ annTypeIcon(activeBanner.type) }}</span>
        <div class="ann-banner-text">
          <strong v-if="activeBanner.title" class="ann-banner-title">{{ activeBanner.title }}</strong>
          <span class="ann-banner-content">{{ activeBanner.content }}</span>
        </div>
        <button class="ann-banner-close" @click="dismissBanner(activeBanner.id)" :aria-label="$t('home.ann.closeLabel')">✕</button>
      </div>
    </transition>

    <!-- ═══ 公告 Modal ══════════════════════════════════════════════════════ -->
    <transition name="ann-fade">
      <div v-if="activeModal" class="ann-modal-overlay" @click.self="dismissBanner(activeModal.id)">
        <div :class="['ann-modal', 'ann-modal--' + activeModal.type]">
          <div class="ann-modal-header">
            <span class="ann-modal-icon">{{ annTypeIcon(activeModal.type) }}</span>
            <h3 class="ann-modal-title">{{ activeModal.title }}</h3>
            <button class="ann-modal-close" @click="dismissBanner(activeModal.id)">✕</button>
          </div>
          <div class="ann-modal-body">{{ activeModal.content }}</div>
          <div class="ann-modal-footer">
            <label class="ann-no-today">
              <input type="checkbox" v-model="noTodayCheck" />
              {{ $t('home.ann.noToday') }}
            </label>
            <button class="ann-modal-ok" @click="dismissModal">{{ $t('home.ann.ok') }}</button>
          </div>
        </div>
      </div>
    </transition>

    <!-- ═══ Hero ════════════════════════════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-tag">🌍 {{ $t('home.hero.tag', { count: visibleCourseCount }) }}</div>
        <h1 class="hero-title">{{ $t('home.hero.title1') }}<span class="accent">{{ $t('home.hero.titleAccent') }}</span>{{ $t('home.hero.title2') }}</h1>
        <p class="hero-desc">
          {{ $t('home.hero.desc') }}<br>
          {{ $t('home.hero.descSub') }}
        </p>
        <!-- 已登入：顯示課程入口 -->
        <div v-if="authUser" class="hero-cta logged-in-cta">
          <div class="course-entry-title">{{ $t('home.hero.welcomeBack', { name: displayName }) }}</div>
          <div class="course-entry-groups">
            <div v-for="group in visibleCoursesByGroup" :key="group.label" class="ceg-row">
              <span class="ceg-label">{{ group.label }}</span>
              <button
                v-for="course in group.courses"
                :key="course.id"
                :class="['cta-course', course.id + '-btn']"
                @click="router.push(course.route)"
              >{{ course.label }}</button>
            </div>
          </div>
        </div>
        <!-- 未登入：增強版 CTA -->
        <div v-else class="hero-cta guest-cta">
          <div class="region-badges">
            <span v-for="course in visibleCourses" :key="course.id" class="rb">{{ course.label }}</span>
          </div>
          <div class="cta-btns">
            <button class="cta-primary" @click="handleStartFree">
              {{ $t('home.hero.ctaStartFree') }}
            </button>
            <button class="cta-secondary" @click="goToPricing">
              {{ $t('home.hero.ctaViewPlans') }}
            </button>
            <button class="cta-tertiary" @click="scrollToCourses">
              {{ $t('home.hero.ctaViewAll') }}
            </button>
          </div>
          <p class="cta-trust">{{ $t('home.hero.trust') }}</p>
        </div>
        <div class="hero-stats">
          <div class="stat-item"><span class="stat-num">{{ visibleCourseCount }}</span><span class="stat-label">{{ $t('home.hero.stats.regions') }}</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">4</span><span class="stat-label">{{ $t('home.hero.stats.levels') }}</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">200+</span><span class="stat-label">{{ $t('home.hero.stats.exercises') }}</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">NT$290</span><span class="stat-label">{{ $t('home.hero.stats.priceFrom') }}</span></div>
        </div>
      </div>
    </section>

    <!-- ═══ 課程區塊 ══════════════════════════════════════════════════════════ -->
    <section class="courses-section" ref="coursesRef">
      <div class="section-inner">
        <div class="section-header">
          <h2>{{ $t('home.courses.sectionTitle') }}</h2>
          <p>{{ $t('home.courses.sectionDesc') }}</p>
        </div>

      <!-- ── 法國 France ── -->
      <div class="region-group">
        <div class="region-group-header">
          <span class="rg-icon">🇫🇷</span>
          <span class="rg-name">{{ $t('home.courses.groups.france') }}</span>
          <span class="rg-en">France</span>
        </div>
        <div class="courses-grid">

          <!-- ── Bordeaux ── -->
          <div v-if="courseShowHome['bordeaux'] || isAdmin" class="course-card bordeaux">
            <div :class="['card-status', courseStatuses.bordeaux ? 'available' : 'planning']">
              {{ courseStatuses.bordeaux ? $t('home.courses.bordeaux.statusActive') : $t('home.courses.bordeaux.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🏰</div>
              <div class="card-region">France · Bordeaux</div>
              <h3 class="card-title">{{ $t('home.courses.bordeaux.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.bordeaux.desc') }}</p>
            </div>
            <!-- 課程深度預覽 -->
            <div class="course-preview-strip">
              <div class="cp-stat">
                <span class="cp-num">4</span>
                <span class="cp-label" v-html="$t('home.courses.bordeaux.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">80<span class="cp-plus">+</span></span>
                <span class="cp-label" v-html="$t('home.courses.bordeaux.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">2</span>
                <span class="cp-label" v-html="$t('home.courses.bordeaux.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">100<span class="cp-plus">+</span></span>
                <span class="cp-label" v-html="$t('home.courses.bordeaux.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features">
              <span class="cpf-item">{{ $t('home.courses.bordeaux.f1') }}</span>
              <span class="cpf-item">{{ $t('home.courses.bordeaux.f2') }}</span>
              <span class="cpf-item">{{ $t('home.courses.bordeaux.f3') }}</span>
            </div>

            <div class="card-pricing-cta">
              <div class="cpc-hint">{{ $t('home.courses.bordeaux.priceHint') }}</div>
              <div class="cpc-actions">
                <button class="cpc-btn-free" @click="handleFreeTier">{{ $t('home.courses.bordeaux.startFreeBtn') }}</button>
                <button class="cpc-btn-plan" @click="goToPricing">{{ $t('home.courses.bordeaux.viewPlansBtn') }} →</button>
              </div>
            </div>
          </div>

          <!-- ── Bourgogne ── -->
          <div v-if="courseShowHome['bourgogne'] || isAdmin" class="course-card bourgogne">
            <div :class="['card-status', courseStatuses.bourgogne ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.bourgogne ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🍇</div>
              <div class="card-region">France · Bourgogne</div>
              <h3 class="card-title">{{ $t('home.courses.bourgogne.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.bourgogne.desc') }}</p>
            </div>
            <!-- 課程深度預覽 -->
            <div class="course-preview-strip">
              <div class="cp-stat">
                <span class="cp-num">4</span>
                <span class="cp-label" v-html="$t('home.courses.bourgogne.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">33</span>
                <span class="cp-label" v-html="$t('home.courses.bourgogne.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">2</span>
                <span class="cp-label" v-html="$t('home.courses.bourgogne.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">60<span class="cp-plus">+</span></span>
                <span class="cp-label" v-html="$t('home.courses.bourgogne.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features">
              <span class="cpf-item">✔ {{ $t('home.courses.bourgogne.f1') }}</span>
              <span class="cpf-item">✔ {{ $t('home.courses.bourgogne.f2') }}</span>
              <span class="cpf-item">✔ {{ $t('home.courses.bourgogne.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.bourgogne" class="btn-enter-course" @click="router.push('/bourgogne')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

          <!-- ── Loire ── -->
          <div v-if="courseShowHome['loire'] || isAdmin" class="course-card loire">
            <div :class="['card-status', courseStatuses.loire ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.loire ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🌿</div>
              <div class="card-region">France · Loire Valley</div>
              <h3 class="card-title">{{ $t('home.courses.loire.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.loire.desc') }}</p>
            </div>
            <div class="course-preview-strip loire-strip">
              <div class="cp-stat">
                <span class="cp-num">13</span>
                <span class="cp-label" v-html="$t('home.courses.loire.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">800</span>
                <span class="cp-label" v-html="$t('home.courses.loire.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">SB</span>
                <span class="cp-label" v-html="$t('home.courses.loire.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">3+</span>
                <span class="cp-label" v-html="$t('home.courses.loire.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features loire-features">
              <span class="cpf-item loire-tag">✔ {{ $t('home.courses.loire.f1') }}</span>
              <span class="cpf-item loire-tag">✔ {{ $t('home.courses.loire.f2') }}</span>
              <span class="cpf-item loire-tag">✔ {{ $t('home.courses.loire.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.loire" class="btn-enter-course" @click="router.push('/loire')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>
          </div>

        </div><!-- /courses-grid 法國 -->
      </div><!-- /region-group 法國 -->

      <!-- ── 舊世界 Old World ── -->
      <div class="region-group">
        <div class="region-group-header">
          <span class="rg-icon">🏛️</span>
          <span class="rg-name">{{ $t('home.courses.groups.oldWorld') }}</span>
          <span class="rg-en">Old World</span>
        </div>
        <div class="courses-grid">

          <!-- ── Italy ── -->
          <div v-if="courseShowHome['italy'] || isAdmin" class="course-card italy">
            <div :class="['card-status', courseStatuses.italy ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.italy ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇮🇹</div>
              <div class="card-region">Italy</div>
              <h3 class="card-title">{{ $t('home.courses.italy.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.italy.desc') }}</p>
            </div>
            <!-- 課程深度預覽 -->
            <div class="course-preview-strip italy-strip">
              <div class="cp-stat">
                <span class="cp-num">3</span>
                <span class="cp-label" v-html="$t('home.courses.italy.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">66</span>
                <span class="cp-label" v-html="$t('home.courses.italy.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">20</span>
                <span class="cp-label" v-html="$t('home.courses.italy.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">425</span>
                <span class="cp-label" v-html="$t('home.courses.italy.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features italy-features">
              <span class="cpf-item italy-tag">✔ {{ $t('home.courses.italy.f1') }}</span>
              <span class="cpf-item italy-tag">✔ {{ $t('home.courses.italy.f2') }}</span>
              <span class="cpf-item italy-tag">✔ {{ $t('home.courses.italy.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.italy" class="btn-enter-course" @click="router.push('/italy')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

          <!-- ── Spain ── -->
          <div v-if="courseShowHome['spain'] || isAdmin" class="course-card spain">
            <div :class="['card-status', courseStatuses.spain ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.spain ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇪🇸</div>
              <div class="card-region">Spain · España</div>
              <h3 class="card-title">{{ $t('home.courses.spain.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.spain.desc') }}</p>
            </div>
            <!-- 課程深度預覽 -->
            <div class="course-preview-strip spain-strip">
              <div class="cp-stat">
                <span class="cp-num">4</span>
                <span class="cp-label" v-html="$t('home.courses.spain.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">96</span>
                <span class="cp-label" v-html="$t('home.courses.spain.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">6</span>
                <span class="cp-label" v-html="$t('home.courses.spain.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">62</span>
                <span class="cp-label" v-html="$t('home.courses.spain.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features spain-features">
              <span class="cpf-item spain-tag">✔ {{ $t('home.courses.spain.f1') }}</span>
              <span class="cpf-item spain-tag">✔ {{ $t('home.courses.spain.f2') }}</span>
              <span class="cpf-item spain-tag">✔ {{ $t('home.courses.spain.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.spain" class="btn-enter-course" @click="router.push('/spain')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

          <!-- ── Germany ── -->
          <div v-if="courseShowHome['germany'] || isAdmin" class="course-card germany">
            <div :class="['card-status', courseStatuses.germany ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.germany ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇩🇪</div>
              <div class="card-region">Germany · Deutschland</div>
              <h3 class="card-title">{{ $t('home.courses.germany.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.germany.desc') }}</p>
            </div>
            <div class="course-preview-strip germany-strip">
              <div class="cp-stat">
                <span class="cp-num">13</span>
                <span class="cp-label" v-html="$t('home.courses.germany.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Riesling</span>
                <span class="cp-label" v-html="$t('home.courses.germany.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">QmP</span>
                <span class="cp-label" v-html="$t('home.courses.germany.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">{{ $t('home.courses.common.satellite') }}</span>
                <span class="cp-label" v-html="$t('home.courses.germany.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features germany-features">
              <span class="cpf-item germany-tag">✔ {{ $t('home.courses.germany.f1') }}</span>
              <span class="cpf-item germany-tag">✔ {{ $t('home.courses.germany.f2') }}</span>
              <span class="cpf-item germany-tag">✔ {{ $t('home.courses.germany.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.germany" class="btn-enter-course" @click="router.push('/germany')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

          <!-- ── Portugal ── -->
          <div v-if="courseShowHome['portugal'] || isAdmin" class="course-card portugal">
            <div :class="['card-status', courseStatuses.portugal ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.portugal ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇵🇹</div>
              <div class="card-region">Portugal · Vinho</div>
              <h3 class="card-title">{{ $t('home.courses.portugal.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.portugal.desc') }}</p>
            </div>
            <div class="course-preview-strip portugal-strip">
              <div class="cp-stat">
                <span class="cp-num">31</span>
                <span class="cp-label" v-html="$t('home.courses.portugal.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Porto</span>
                <span class="cp-label" v-html="$t('home.courses.portugal.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Touriga</span>
                <span class="cp-label" v-html="$t('home.courses.portugal.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">{{ $t('home.courses.common.satellite') }}</span>
                <span class="cp-label" v-html="$t('home.courses.portugal.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features portugal-features">
              <span class="cpf-item portugal-tag">✔ {{ $t('home.courses.portugal.f1') }}</span>
              <span class="cpf-item portugal-tag">✔ {{ $t('home.courses.portugal.f2') }}</span>
              <span class="cpf-item portugal-tag">✔ {{ $t('home.courses.portugal.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.portugal" class="btn-enter-course" @click="router.push('/portugal')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

          <!-- ── Hungary ── -->
          <div v-if="courseShowHome['hungary'] || isAdmin" class="course-card hungary">
            <div :class="['card-status', courseStatuses.hungary ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.hungary ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🇭🇺</div>
              <div class="card-region">Hungary · Magyarország</div>
              <h3 class="card-title">{{ $t('home.courses.hungary.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.hungary.desc') }}</p>
            </div>
            <div class="course-preview-strip hungary-strip">
              <div class="cp-stat">
                <span class="cp-num">22</span>
                <span class="cp-label" v-html="$t('home.courses.hungary.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Tokaji</span>
                <span class="cp-label" v-html="$t('home.courses.hungary.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">5</span>
                <span class="cp-label" v-html="$t('home.courses.hungary.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Furmint</span>
                <span class="cp-label" v-html="$t('home.courses.hungary.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features hungary-features">
              <span class="cpf-item hungary-tag">✔ {{ $t('home.courses.hungary.f1') }}</span>
              <span class="cpf-item hungary-tag">✔ {{ $t('home.courses.hungary.f2') }}</span>
              <span class="cpf-item hungary-tag">✔ {{ $t('home.courses.hungary.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.hungary" class="btn-enter-course" @click="router.push('/hungary')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>
          </div>

        </div><!-- /courses-grid 舊世界 -->
      </div><!-- /region-group 舊世界 -->

      <!-- ── 新世界 New World ── -->
      <div class="region-group">
        <div class="region-group-header">
          <span class="rg-icon">🌏</span>
          <span class="rg-name">{{ $t('home.courses.groups.newWorld') }}</span>
          <span class="rg-en">New World</span>
        </div>
        <div class="courses-grid">

          <!-- ── Australia ── -->
          <div v-if="courseShowHome['australia'] || isAdmin" class="course-card australia">
            <div :class="['card-status', courseStatuses.australia ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.australia ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🦘</div>
              <div class="card-region">Australia · Down Under</div>
              <h3 class="card-title">{{ $t('home.courses.australia.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.australia.desc') }}</p>
            </div>
            <div class="course-preview-strip australia-strip">
              <div class="cp-stat">
                <span class="cp-num">65+</span>
                <span class="cp-label" v-html="$t('home.courses.australia.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">6</span>
                <span class="cp-label" v-html="$t('home.courses.australia.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Shiraz</span>
                <span class="cp-label" v-html="$t('home.courses.australia.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">100+</span>
                <span class="cp-label" v-html="$t('home.courses.australia.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features australia-features">
              <span class="cpf-item australia-tag">✔ {{ $t('home.courses.australia.f1') }}</span>
              <span class="cpf-item australia-tag">✔ {{ $t('home.courses.australia.f2') }}</span>
              <span class="cpf-item australia-tag">✔ {{ $t('home.courses.australia.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.australia" class="btn-enter-course" @click="router.push('/australia')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.explore') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

          <!-- ── New Zealand ── -->
          <div v-if="courseShowHome['newzealand'] || isAdmin" class="course-card newzealand">
            <div :class="['card-status', courseStatuses.newzealand ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.newzealand ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🥝</div>
              <div class="card-region">New Zealand · Clean & Green</div>
              <h3 class="card-title">{{ $t('home.courses.newzealand.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.newzealand.desc') }}</p>
            </div>
            <div class="course-preview-strip newzealand-strip">
              <div class="cp-stat">
                <span class="cp-num">17</span>
                <span class="cp-label" v-html="$t('home.courses.newzealand.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">2</span>
                <span class="cp-label" v-html="$t('home.courses.newzealand.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">SB</span>
                <span class="cp-label" v-html="$t('home.courses.newzealand.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">3+</span>
                <span class="cp-label" v-html="$t('home.courses.newzealand.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features newzealand-features">
              <span class="cpf-item newzealand-tag">✔ {{ $t('home.courses.newzealand.f1') }}</span>
              <span class="cpf-item newzealand-tag">✔ {{ $t('home.courses.newzealand.f2') }}</span>
              <span class="cpf-item newzealand-tag">✔ {{ $t('home.courses.newzealand.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.newzealand" class="btn-enter-course" @click="router.push('/newzealand')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

          <!-- ── California ── -->
          <div v-if="courseShowHome['california'] || isAdmin" class="course-card california">
            <div :class="['card-status', courseStatuses.california ? 'active' : 'planning']">
              {{ isAdmin ? $t('home.courses.common.statusAdmin') : courseStatuses.california ? $t('home.courses.common.statusActive') : $t('home.courses.common.statusPlanning') }}
            </div>
            <div class="card-hero">
              <div class="card-icon">🍷</div>
              <div class="card-region">United States · California</div>
              <h3 class="card-title">{{ $t('home.courses.california.title') }}</h3>
              <p class="card-desc">{{ $t('home.courses.california.desc') }}</p>
            </div>
            <div class="course-preview-strip california-strip">
              <div class="cp-stat">
                <span class="cp-num">154+</span>
                <span class="cp-label" v-html="$t('home.courses.california.s1label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">8</span>
                <span class="cp-label" v-html="$t('home.courses.california.s2label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">Cab</span>
                <span class="cp-label" v-html="$t('home.courses.california.s3label')"></span>
              </div>
              <div class="cp-divider"></div>
              <div class="cp-stat">
                <span class="cp-num">2+</span>
                <span class="cp-label" v-html="$t('home.courses.california.s4label')"></span>
              </div>
            </div>
            <div class="course-preview-features california-features">
              <span class="cpf-item california-tag">✔ {{ $t('home.courses.california.f1') }}</span>
              <span class="cpf-item california-tag">✔ {{ $t('home.courses.california.f2') }}</span>
              <span class="cpf-item california-tag">✔ {{ $t('home.courses.california.f3') }}</span>
            </div>
            <div class="card-enter-cta">
              <button v-if="courseStatuses.california" class="btn-enter-course" @click="router.push('/california/course')">{{ isAdmin ? $t('home.courses.common.enterAdmin') : $t('home.courses.common.enter') }} →</button>
              <span v-else class="planning-cta">{{ $t('home.courses.common.comingSoon') }}</span>
            </div>

          </div>

        </div><!-- /courses-grid 新世界 -->
      </div><!-- /region-group 新世界 -->

      </div><!-- /section-inner -->
    </section>

    <!-- ═══ 特色區塊 ══════════════════════════════════════════════════════════ -->
    <section class="features-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>{{ $t('home.features.sectionTitle') }}</h2>
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
          <h2>{{ $t('home.faq.sectionTitle') }}</h2>
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
          <span class="sh-eyebrow">{{ $t('home.forum.eyebrow') }}</span>
          <h2>{{ $t('home.forum.title') }}</h2>
          <p>{{ $t('home.forum.desc') }}</p>
        </div>

        <div v-if="forumLoading" class="fp-loading">{{ $t('home.forum.loading') }}</div>
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
          <button class="fp-btn outline" @click="authUser ? router.push('/forum') : router.push({ path: '/login', query: { redirect: '/forum' } })">{{ $t('home.forum.viewForum') }} →</button>
          <button v-if="authUser" class="fp-btn primary" @click="router.push('/forum')">{{ $t('home.forum.newPost') }}</button>
          <button v-else class="fp-btn primary" @click="router.push({ path: '/login', query: { redirect: '/forum' } })">{{ $t('home.forum.loginToJoin') }}</button>
        </div>
      </div>
    </section>

    <!-- ═══ Footer ═══════════════════════════════════════════════════════════ -->
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-logo">
          <span>🍷</span>
          <div>
            <div class="fl-title">{{ $t('home.footer.brand') }}</div>
            <div class="fl-copy">{{ $t('home.footer.copy') }}</div>
          </div>
        </div>
        <div class="footer-links">
          <router-link to="/login">{{ $t('home.footer.login') }}</router-link>
          <router-link to="/register">{{ $t('home.footer.register') }}</router-link>
          <a href="mailto:chungshu224@gmail.com">{{ $t('home.footer.contact') }}</a>
        </div>
      </div>
    </footer>

    <!-- ═══ 付款跳轉 Overlay ══════════════════════════════════════════════════ -->
    <div class="checkout-overlay" v-if="checkoutLoading">
      <div class="checkout-box">
        <div class="co-spinner"></div>
        <p>{{ $t('home.checkout.loading') }}</p>
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
          <h2 class="cm-title">{{ $t('home.modal.bordeaux.title') }}</h2>
          <p class="cm-sub">{{ $t('home.modal.bordeaux.sub') }}</p>
        </div>

        <!-- 課程總覽 -->
        <div class="cm-section">
          <h3 class="cm-sec-title">{{ $t('home.modal.bordeaux.overviewTitle') }}</h3>
          <div class="cm-levels-grid">
            <div class="cm-level">
              <div class="cm-lv-badge">{{ $t('home.modal.bordeaux.levels.l1.badge') }}</div>
              <div class="cm-lv-name">{{ $t('home.modal.bordeaux.levels.l1.name') }}</div>
              <ul class="cm-lv-list">
                <li v-for="item in $t('home.modal.bordeaux.levels.l1.items')" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="cm-level">
              <div class="cm-lv-badge lv2">{{ $t('home.modal.bordeaux.levels.l2.badge') }}</div>
              <div class="cm-lv-name">{{ $t('home.modal.bordeaux.levels.l2.name') }}</div>
              <ul class="cm-lv-list">
                <li v-for="item in $t('home.modal.bordeaux.levels.l2.items')" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="cm-level">
              <div class="cm-lv-badge lv3">{{ $t('home.modal.bordeaux.levels.l3.badge') }}</div>
              <div class="cm-lv-name">{{ $t('home.modal.bordeaux.levels.l3.name') }}</div>
              <ul class="cm-lv-list">
                <li v-for="item in $t('home.modal.bordeaux.levels.l3.items')" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="cm-level">
              <div class="cm-lv-badge lv4">{{ $t('home.modal.bordeaux.levels.l4.badge') }}</div>
              <div class="cm-lv-name">{{ $t('home.modal.bordeaux.levels.l4.name') }}</div>
              <ul class="cm-lv-list">
                <li v-for="item in $t('home.modal.bordeaux.levels.l4.items')" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 互動工具 -->
        <div class="cm-section">
          <h3 class="cm-sec-title">{{ $t('home.modal.bordeaux.toolsTitle') }}</h3>
          <div class="cm-tools-grid">
            <div class="cm-tool" v-for="tool in $t('home.modal.bordeaux.tools')" :key="tool.name">
              <span class="ct-icon">{{ tool.icon }}</span>
              <span class="ct-name">{{ tool.name }}</span>
              <span class="ct-desc">{{ tool.desc }}</span>
            </div>
          </div>
        </div>

        <!-- 方案比較 -->
        <div class="cm-section">
          <h3 class="cm-sec-title">{{ $t('home.modal.bordeaux.compareTitle') }}</h3>
          <div class="cm-compare-table">
            <div class="cm-compare-header">
              <div class="cc-col feature-col">{{ $t('home.modal.bordeaux.compareFeature') }}</div>
              <div class="cc-col free-col" v-html="$t('home.modal.bordeaux.compareFree', { price: 0 })"></div>
              <div class="cc-col basic-col popular-col" v-html="$t('home.modal.bordeaux.compareBasic', { price: pricing.basic.monthly })"></div>
              <div class="cc-col premium-col" v-html="$t('home.modal.bordeaux.comparePremium', { price: pricing.premium.monthly })"></div>
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
          <button class="cm-btn free" @click="showCourseModal = false; handleFreeTier()">{{ $t('home.modal.bordeaux.btnFree') }}</button>
          <button class="cm-btn basic" @click="showCourseModal = false; handlePurchase('bordeaux','basic')">{{ $t('home.modal.bordeaux.btnBasicPrice', { price: pricing.basic.monthly }) }}</button>
          <button class="cm-btn premium" @click="showCourseModal = false; handlePurchase('bordeaux','premium')">{{ $t('home.modal.bordeaux.btnPremiumPrice', { price: pricing.premium.monthly }) }}</button>
        </div>
        </template>

        <template v-else-if="activePrelaunchDetail">
          <div class="cm-header">
            <div class="cm-icon">{{ activePrelaunchDetail.icon }}</div>
            <h2 class="cm-title">{{ activePrelaunchDetail.title }}</h2>
            <p class="cm-sub">{{ activePrelaunchDetail.subtitle }}</p>
            <div class="cm-badge-preview">{{ $t('home.modal.prelaunch.coming') }}</div>
          </div>

          <div class="cm-alert">
            {{ $t('home.modal.prelaunch.alert') }}
          </div>

          <div class="cm-section">
            <h3 class="cm-sec-title">{{ $t('home.modal.prelaunch.devProgressTitle') }}</h3>
            <div class="cm-tools-grid">
              <div class="cm-tool" v-for="item in activePrelaunchDetail.devStatus" :key="item.title">
                <span class="ct-icon">{{ item.icon }}</span>
                <span class="ct-name">{{ item.title }}</span>
                <span class="ct-desc">{{ item.desc }}</span>
              </div>
            </div>
          </div>

          <div class="cm-section">
            <h3 class="cm-sec-title">{{ $t('home.modal.prelaunch.roadmapTitle') }}</h3>
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
            <h3 class="cm-sec-title">{{ $t('home.modal.prelaunch.featuresTitle') }}</h3>
            <div class="cm-pill-list">
              <span class="cm-pill" v-for="f in activePrelaunchDetail.features" :key="f">{{ f }}</span>
            </div>
          </div>

          <div class="cm-cta">
            <button class="cm-btn basic" @click="showCourseModal = false; handleNotify(activeCourseDetail)">{{ $t('home.modal.prelaunch.notifyBtn') }}</button>
            <button class="cm-btn free" @click="showCourseModal = false">{{ $t('home.modal.prelaunch.laterBtn') }}</button>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { supabase } from '../lib/supabaseClient.js'
import { authState, authActions } from '../stores/authStore.js'
import { initiateCheckout, submitEcpayForm } from '../lib/purchaseService.js'
import { fetchRecentPosts } from '../lib/forumService.js'

const router = useRouter()
const { t, tm } = useI18n()

// ─── Auth ─────────────────────────────────────────────────────────────────────
const authUser    = computed(() => authState.user)
const authLoading = computed(() => authState.loading)
const isAdmin     = computed(() => {
  if (authState.loading) return false
  return authActions.isAdmin()
})
const displayName = computed(() => authActions.getDisplayName() || t('home.hero.studentFallback'))

const handleLogout = async () => {
  await authActions.signOut()
  // 留在首頁
}

// ─── Scroll ───────────────────────────────────────────────────────────────────
const coursesRef = ref(null)
const scrollToCourses = () => coursesRef.value?.scrollIntoView({ behavior: 'smooth' })
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const goToPricing = () => router.push('/pricing')

// ─── 手機選單 ─────────────────────────────────────────────────────────────────
const showMobileMenu = ref(false)

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

// ─── 課程設定清單（順序即為顯示順序）──────────────────────────────────
const courseConfig = computed(() => [
  { id: 'bordeaux',   label: t('home.courses.labels.bordeaux'), route: '/bordeaux',          group: 'france'   },
  { id: 'bourgogne',  label: t('home.courses.labels.bourgogne'), route: '/bourgogne',         group: 'france'   },
  { id: 'loire',      label: t('home.courses.labels.loire'), route: '/loire',             group: 'france'   },
  { id: 'italy',      label: t('home.courses.labels.italy'), route: '/italy',            group: 'europe'   },
  { id: 'spain',      label: t('home.courses.labels.spain'), route: '/spain',            group: 'europe'   },
  { id: 'germany',    label: t('home.courses.labels.germany'), route: '/germany',          group: 'europe'   },
  { id: 'portugal',   label: t('home.courses.labels.portugal'), route: '/portugal',         group: 'europe'   },
  { id: 'hungary',    label: t('home.courses.labels.hungary'), route: '/hungary',          group: 'europe'   },
  { id: 'australia',  label: t('home.courses.labels.australia'), route: '/australia',         group: 'newworld' },
  { id: 'newzealand', label: t('home.courses.labels.newzealand'), route: '/newzealand',        group: 'newworld' },
  { id: 'california', label: t('home.courses.labels.california'), route: '/california/course', group: 'newworld' },
])

// ─── 課程狀態 + 訂閱定價（從 DB 讀取）────────────────────────────────
const pricing = ref({
  basic:   { monthly: 290,  yearly: 1800 },
  premium: { monthly: 590,  yearly: 3600 }
})
// 各課程上架狀態（預設 active=true 防止加載前閃爍）
const courseStatuses = ref({ bordeaux: true, bourgogne: false, italy: false, spain: true, germany: true, portugal: true, australia: true, newzealand: true, loire: true, california: true, hungary: false })
// 各課程首頁顯示狀態（保守預設：只有波爾多，其餘等 DB 載入後決定）
const courseShowHome = ref({ bordeaux: true, bourgogne: false, italy: false, spain: false, germany: false, portugal: false, australia: false, newzealand: false, loire: false, california: false, hungary: false })

async function loadCourseData() {
  try {
    const { data } = await supabase
      .from('courses')
      .select('id,active,show_on_home,price_basic_monthly,price_basic_yearly,price_premium_monthly,price_premium_yearly')
    if (data) {
      data.forEach(c => {
        courseStatuses.value[c.id] = c.active
        courseShowHome.value[c.id] = c.show_on_home !== false
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

// ─── 首頁動態課程 computed ─────────────────────────────────────────────────────────
// 已上架顯示的課程（管理員可看全部）
const visibleCourses = computed(() =>
  courseConfig.value.filter(c => courseShowHome.value[c.id] || isAdmin.value)
)
// 實際上架數量（不含管理員 override，用於顯示數字）
const visibleCourseCount = computed(() =>
  courseConfig.value.filter(c => courseShowHome.value[c.id]).length
)
// 依地區分組的已上架課程
const visibleCoursesByGroup = computed(() => {
  const groupDefs = [
    { key: 'france',   label: t('home.courses.groupLabels.france') },
    { key: 'europe',   label: t('home.courses.groupLabels.europe') },
    { key: 'newworld', label: t('home.courses.groupLabels.newworld') },
  ]
  return groupDefs
    .map(g => ({ label: g.label, courses: visibleCourses.value.filter(c => c.group === g.key) }))
    .filter(g => g.courses.length > 0)
})

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
    const { formHtml } = await initiateCheckout({
      courseId,
      tier,
      billingPeriod: billingPeriod.value,
    })
    submitEcpayForm(formHtml)
  } catch (err) {
    checkoutLoading.value = false
    alert(`付款初始化失敗：${err.message || '請稍後再試'}`)
  }
}

const handleNotify = (courseId) => {
  const detail = prelaunchCourseDetails.value[courseId]
  const name = detail?.title || courseId
  if (authUser.value) {
    alert(`${name} — ${t('home.modal.prelaunch.notifyBtn')}`)
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

const prelaunchCourseDetails = computed(() => ({
  bourgogne: t('home.modal.prelaunchCourses.bourgogne'),
  italy:     t('home.modal.prelaunchCourses.italy'),
}))

const activePrelaunchDetail = computed(() => prelaunchCourseDetails.value[activeCourseDetail.value] || null)

const compareRows = computed(() => tm('home.modal.bordeaux.compareRows'))

// ─── 靜態資料（locale-aware） ──────────────────────────────────────────────────
const features = computed(() => tm('home.features.items'))

const faqs = computed(() => tm('home.faq.items'))

// ─── 公告 ─────────────────────────────────────────────────────────────────────
const allAnnouncements = ref([])

const DISMISSED_KEY = 'dismissed_announcements'
const NO_TODAY_KEY  = 'ann_no_today'

function getDismissed() {
  try { return JSON.parse(localStorage.getItem(DISMISSED_KEY) || '[]') } catch { return [] }
}
function saveDismissed(ids) {
  localStorage.setItem(DISMISSED_KEY, JSON.stringify(ids))
}

// 取得「今日不再顯示」清單
function getNoToday() {
  try {
    const raw = JSON.parse(localStorage.getItem(NO_TODAY_KEY) || '{}')
    const today = new Date().toDateString()
    // 清除非今日的紀錄
    if (raw.date !== today) return []
    return raw.ids || []
  } catch { return [] }
}
function saveNoToday(id) {
  const today = new Date().toDateString()
  const cur = getNoToday()
  if (!cur.includes(id)) {
    localStorage.setItem(NO_TODAY_KEY, JSON.stringify({ date: today, ids: [...cur, id] }))
  }
}

// 依使用者層級過濾
function annMatchesTier(ann) {
  if (ann.target_tier === 'all') return true
  const userTier = authState.profile?.tier ?? 'free'
  return ann.target_tier === userTier
}

const visibleAnnouncements = computed(() => {
  const dismissed = getDismissed()
  const noToday   = getNoToday()
  return allAnnouncements.value.filter(a =>
    !dismissed.includes(a.id) &&
    !noToday.includes(a.id) &&
    annMatchesTier(a)
  )
})

const activeBanner = computed(() =>
  visibleAnnouncements.value.find(a => a.display_mode === 'banner') ?? null
)
const activeModal = computed(() =>
  visibleAnnouncements.value.find(a => a.display_mode === 'modal') ?? null
)

const noTodayCheck = ref(false)

function dismissBanner(id) {
  const dismissed = getDismissed()
  if (!dismissed.includes(id)) {
    saveDismissed([...dismissed, id])
  }
  // 強制更新視圖
  allAnnouncements.value = [...allAnnouncements.value]
}

function dismissModal() {
  if (!activeModal.value) return
  const id = activeModal.value.id
  if (noTodayCheck.value) {
    saveNoToday(id)
  } else {
    const dismissed = getDismissed()
    if (!dismissed.includes(id)) saveDismissed([...dismissed, id])
  }
  noTodayCheck.value = false
  allAnnouncements.value = [...allAnnouncements.value]
}

function annTypeIcon(type) {
  return { info: 'ℹ️', warning: '⚠️', promo: '🎉', maintenance: '🔧' }[type] ?? 'ℹ️'
}

async function loadAnnouncements() {
  try {
    const { supabase } = await import('../lib/supabaseClient.js')
    const { data } = await supabase
      .from('announcements')
      .select('id, title, content, type, display_mode, target_tier, priority')
      .eq('is_active', true)
      .lte('starts_at', new Date().toISOString())
      .or('ends_at.is.null,ends_at.gt.' + new Date().toISOString())
      .order('priority', { ascending: false })
    allAnnouncements.value = data ?? []
  } catch (e) {
    console.warn('announcements load error', e)
  }
}

// ─── 論壇預覽 ─────────────────────────────────────────────────────────────────
const recentPosts  = ref([])
const forumLoading = ref(false)

onMounted(async () => {
  loadCourseData()
  loadAnnouncements()
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

/* ─── 公告 Banner ──────────────────────────────────────────────────────────── */
.ann-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 0.88rem;
  line-height: 1.5;
}
.ann-banner--info        { background: #1a3a5c; color: #a8d0f5; }
.ann-banner--warning     { background: #4a2e00; color: #ffd580; }
.ann-banner--promo       { background: #1a3a25; color: #8cde9e; }
.ann-banner--maintenance { background: #2e1a40; color: #c8a8f5; }
.ann-banner-icon  { font-size: 1.1rem; flex-shrink: 0; }
.ann-banner-text  { flex: 1; }
.ann-banner-title { margin-right: 8px; }
.ann-banner-content { opacity: 0.9; }
.ann-banner-close {
  background: transparent;
  border: none;
  color: inherit;
  opacity: 0.6;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 4px 8px;
  flex-shrink: 0;
  transition: opacity .2s;
}
.ann-banner-close:hover { opacity: 1; }

/* ─── 公告 Modal ───────────────────────────────────────────────────────────── */
.ann-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}
.ann-modal {
  background: #1a0f14;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0,0,0,.6);
  overflow: hidden;
}
.ann-modal--info        { border-top: 4px solid #2980b9; }
.ann-modal--warning     { border-top: 4px solid #e67e22; }
.ann-modal--promo       { border-top: 4px solid #27ae60; }
.ann-modal--maintenance { border-top: 4px solid #8e44ad; }
.ann-modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 14px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.ann-modal-icon  { font-size: 1.3rem; }
.ann-modal-title { flex: 1; font-size: 1.05rem; font-weight: 700; color: #f5f0e8; margin: 0; }
.ann-modal-close {
  background: transparent; border: none; color: #aaa;
  cursor: pointer; font-size: 1rem; padding: 4px 8px;
  transition: color .2s;
}
.ann-modal-close:hover { color: #fff; }
.ann-modal-body { padding: 16px 20px; color: #c8bba8; font-size: 0.9rem; line-height: 1.7; }
.ann-modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 18px;
  border-top: 1px solid rgba(255,255,255,.06);
}
.ann-no-today {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.82rem; color: #7a6a5a; cursor: pointer;
}
.ann-no-today input { accent-color: #8b1a2b; }
.ann-modal-ok {
  padding: 8px 22px; border-radius: 20px;
  background: #722f37; border: none; color: #fff;
  font-size: 0.88rem; font-weight: 600; cursor: pointer;
  transition: background .2s;
}
.ann-modal-ok:hover { background: #9b3a45; }

/* ─── 公告動畫 ────────────────────────────────────────────────────────────── */
.ann-fade-enter-active, .ann-fade-leave-active { transition: opacity .3s, transform .3s; }
.ann-fade-enter-from  { opacity: 0; transform: translateY(-6px); }
.ann-fade-leave-to    { opacity: 0; transform: translateY(-6px); }

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
.logo-icon-img { width: 36px; height: 36px; object-fit: contain; border-radius: 50%; flex-shrink: 0; }
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

/* ─── 導覽列 RWD ─────────────────────────────────────────────────────────── */
/* 手機版預設隱藏桌面導覽，顯示手機導覽 */
.nav-desktop { display: flex; }
.nav-mobile  { display: none; align-items: center; gap: 8px; }

/* 漢堡按鈕 */
.nav-hamburger {
  width: 36px; height: 36px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 5px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  transition: border-color .2s;
  flex-shrink: 0;
}
.nav-hamburger span {
  display: block;
  width: 18px; height: 2px;
  background: #e8dcc8;
  border-radius: 2px;
  transition: all .25s;
  transform-origin: center;
}
.nav-hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger.active span:nth-child(2) { opacity: 0; }
.nav-hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.nav-hamburger:hover { border-color: #d4af37; }

.btn-mobile-cta { padding: 7px 14px; font-size: 0.82rem; }
.btn-mobile-login { padding: 7px 12px; font-size: 0.82rem; }

/* 手機下拉選單 — fixed 定位于手機 nav 正下方 */
.nav-mobile-dropdown {
  position: fixed;
  top: 52px; /* 手機 nav 高度 */
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(10, 3, 5, 0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
}
.nmd-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.nmd-user {
  color: #d4af37;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 12px 6px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  margin-bottom: 4px;
}
.nmd-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  font-size: 0.88rem;
  color: #e8dcc8;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background .15s;
}
.nmd-item:hover, .nmd-item:active { background: rgba(255,255,255,0.06); color: #d4af37; }
.nmd-item.nmd-primary { color: #fff; font-weight: 600; }
.nmd-item.nmd-logout { color: #9a8878; }
/* 下拉動畫 */
.nmd-enter-active, .nmd-leave-active { transition: opacity .18s, transform .18s; }
.nmd-enter-from, .nmd-leave-to { opacity: 0; transform: translateY(-6px); }

@media (max-width: 640px) {
  .nav-desktop { display: none; }
  .nav-mobile  { display: flex; }
  .nav-inner { height: 52px; padding: 0 68px 0 14px; }
  .logo-icon { font-size: 1.3rem; }
  .logo-icon-img { width: 28px; height: 28px; }
  .logo-title { font-size: 0.88rem; }
  .logo-sub { display: none; }
}

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
.cta-tertiary {
  padding: 14px 28px;
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15);
  border-radius: 30px;
  color: #9a8878;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all .2s;
}
.cta-tertiary:hover { border-color: rgba(255,255,255,0.3); color: #c0b098; }
/* 未登入 Guest CTA */
.guest-cta { flex-direction: column; align-items: center; gap: 0; }
.region-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 28px; }
.rb {
  padding: 6px 14px;
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.25);
  border-radius: 20px;
  font-size: 0.82rem;
  color: #d4af37;
  transition: background .2s;
}
.cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 16px; }
.cta-trust { font-size: 0.78rem; color: #6a5848; margin: 0; letter-spacing: 0.3px; }
/* 已登入課程入口 */
.logged-in-cta { flex-direction: column; align-items: center; gap: 0; }
.course-entry-title { color: #d4af37; font-size: 1rem; margin-bottom: 20px; }
.course-entry-groups { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 680px; }
.ceg-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; }
.ceg-label { font-size: 0.75rem; color: #9a8878; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 4px 10px; white-space: nowrap; }
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
.courses-section { padding: 72px 0; background: #120508; }

/* ─── 產區分組 ────────────────────────────────────────────────────────────── */
.region-group { margin-bottom: 44px; }
.region-group:last-child { margin-bottom: 0; }
.region-group-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.rg-icon { font-size: 1.4rem; line-height: 1; }
.rg-name { font-size: 1.15rem; font-weight: 700; color: #fff; letter-spacing: 0.06em; }
.rg-en   { font-size: 0.85rem; color: #9a8878; font-style: italic; }

.courses-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: start;
}
@media (max-width: 1280px) { .courses-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 960px)  { .courses-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px)  { .courses-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; } }

/* ─── 課程卡片 ────────────────────────────────────────────────────────────── */
.course-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 22px;
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
/* Australia card */
.australia-strip { background: rgba(0,39,78,0.07); border-color: rgba(0,39,78,0.2); }
.australia-strip .cp-num { color: #00274e; font-size: 0.9rem; }
.australia-strip .cp-label { color: #2c4a6e; }
.australia-strip .cp-divider { background: rgba(0,39,78,0.25); }
.australia-features .australia-tag { color: #00274e; background: rgba(0,39,78,0.06); border-color: rgba(0,39,78,0.18); }
.australia-cta { background: linear-gradient(135deg, #00274e, #1a4a8a) !important; }
.australia-btn {
  background: linear-gradient(135deg, #00274e, #c8a951);
  color: #fff;
  box-shadow: 0 4px 20px rgba(0,39,78,0.45);
}
.australia-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,39,78,0.6); }
/* New Zealand card */
.newzealand-strip { background: rgba(0,100,0,0.07); border-color: rgba(0,100,0,0.2); }
.newzealand-strip .cp-num { color: #006400; font-size: 0.9rem; }
.newzealand-strip .cp-label { color: #2a6a2a; }
.newzealand-strip .cp-divider { background: rgba(0,100,0,0.25); }
.newzealand-features .newzealand-tag { color: #006400; background: rgba(0,100,0,0.06); border-color: rgba(0,100,0,0.18); }
.newzealand-cta { background: linear-gradient(135deg, #006400, #004d00) !important; }
/* California card */
.california-strip { background: rgba(139,26,26,0.07); border-color: rgba(139,26,26,0.2); }
.california-strip .cp-num { color: #8B1A1A; font-size: 0.9rem; }
.california-strip .cp-label { color: #6b1414; }
.california-strip .cp-divider { background: rgba(139,26,26,0.25); }
.california-features .california-tag { color: #8B1A1A; background: rgba(139,26,26,0.06); border-color: rgba(139,26,26,0.18); }
.california-cta { background: linear-gradient(135deg, #8B1A1A, #5c0f0f) !important; }
.california-map-cta { background: linear-gradient(135deg, #c9a84c, #9e7a2e) !important; }
/* Loire */
.loire-strip { background: rgba(30,90,50,0.07); border-color: rgba(30,90,50,0.2); }
.loire-strip .cp-num { color: #1e5a32; font-size: 0.9rem; }
.loire-strip .cp-label { color: #1e5a32; }
.loire-strip .cp-divider { background: rgba(30,90,50,0.25); }
.loire-features .loire-tag { color: #1e5a32; background: rgba(30,90,50,0.06); border-color: rgba(30,90,50,0.18); }
.loire-btn {
  background: linear-gradient(135deg, #1e5a32 0%, #2d7a4a 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(30,90,50,0.4);
}
.loire-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(30,90,50,0.6); }
/* Hungary card */
.hungary-strip { background: rgba(206,41,57,0.07); border-color: rgba(206,41,57,0.22); }
.hungary-strip .cp-num { color: #ce2939; font-size: 0.9rem; }
.hungary-strip .cp-label { color: #8a1c28; }
.hungary-strip .cp-divider { background: rgba(206,41,57,0.25); }
.hungary-features .hungary-tag { color: #ce2939; background: rgba(206,41,57,0.06); border-color: rgba(206,41,57,0.18); }
.newzealand-btn {
  background: linear-gradient(135deg, #006400, #4caf50);
  color: #fff;
  box-shadow: 0 4px 20px rgba(0,100,0,0.45);
}
.newzealand-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,100,0,0.6); }
.california-btn {
  background: linear-gradient(135deg, #7B1A1A, #e74c3c);
  color: #fff;
  box-shadow: 0 4px 20px rgba(123,26,26,0.45);
}
.california-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(231,76,60,0.6); }
.hungary-btn {
  background: linear-gradient(135deg, #2e7d32, #1b5e20);
  color: #fff;
  box-shadow: 0 4px 20px rgba(46,125,50,0.45);
}
.hungary-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(46,125,50,0.65); }
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
/* ── Bordeaux card pricing CTA ──────────────────────────────────────── */
.card-pricing-cta { padding: 20px 0 8px; }
.cpc-hint { font-size: 0.78rem; color: #8a7860; line-height: 1.6; margin-bottom: 14px; text-align: center; }
.cpc-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.cpc-btn-free {
  padding: 11px 24px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.07);
  color: #d0c8b8;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
}
.cpc-btn-free:hover { background: rgba(255,255,255,0.13); }
.cpc-btn-plan {
  padding: 11px 24px;
  border-radius: 22px;
  border: 1.5px solid rgba(212,175,55,0.5);
  background: linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.05));
  color: #d4af37;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all .2s;
}
.cpc-btn-plan:hover { background: rgba(212,175,55,0.18); transform: translateY(-1px); }
.planning-cta { color: #6b7280; font-size: 0.85rem; font-style: italic; }
.card-enter-cta { margin-top: 16px; display: flex; justify-content: flex-end; }
.btn-enter-course {
  padding: 9px 22px;
  border-radius: 20px;
  border: 1.5px solid rgba(212,175,55,0.55);
  background: linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.06));
  color: #d4af37;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}
.btn-enter-course:hover { background: rgba(212,175,55,0.22); transform: translateY(-1px); box-shadow: 0 4px 14px rgba(212,175,55,0.18); }
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
