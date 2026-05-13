<template>
  <div class="admin-dashboard">
    <!-- Header -->
    <header class="admin-header">
      <div class="admin-brand">
        <span class="brand-icon">🍷</span>
        <span class="brand-name">侍酒師的筆記本 後台管理</span>
      </div>
      <div class="admin-user-info">
        <span class="admin-badge">管理員</span>
        <span class="admin-email">{{ userEmail }}</span>
        <button class="btn-outline-sm" @click="goToCourses">切換至課程</button>
        <button class="btn-ghost-sm" @click="handleLogout">登出</button>
      </div>
    </header>

    <!-- Tab 導覽 -->
    <nav class="admin-tabs">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }, { 'tab-extra': i >= 4 }]"
        @click="activeTab = tab.id"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>

      <!-- 更多選單（手機版） -->
      <div class="more-menu-wrap" ref="moreRef">
        <button
          class="tab-btn more-toggle-btn"
          :class="{ active: tabs.slice(4).some(t => t.id === activeTab) }"
          @click="showMoreMenu = !showMoreMenu"
        >
          <span class="tab-icon">{{ tabs.slice(4).find(t => t.id === activeTab)?.icon ?? '⋯' }}</span>
          {{ tabs.slice(4).find(t => t.id === activeTab)?.label ?? '更多' }}
          <span class="more-chevron" :class="{ open: showMoreMenu }">▾</span>
        </button>
        <div v-if="showMoreMenu" class="more-dropdown">
          <button
            v-for="tab in tabs.slice(4)"
            :key="tab.id"
            :class="['more-item', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id; showMoreMenu = false"
          >
            <span class="tab-icon">{{ tab.icon }}</span>
            {{ tab.label }}
          </button>
        </div>
      </div>
    </nav>

    <!-- 主內容區 -->
    <main class="admin-content">

      <!-- ── 總覽儀表板 ── -->
      <section v-if="activeTab === 'overview'" class="tab-panel">
        <h2 class="section-title">總覽</h2>

        <div v-if="statsLoading" class="loading-state">載入中…</div>
        <template v-else>
          <!-- KPI 卡片 -->
          <div class="kpi-grid">
            <div class="kpi-card">
              <div class="kpi-value">{{ stats.totalStudents }}</div>
              <div class="kpi-label">總學員數</div>
            </div>
            <div class="kpi-card kpi-green">
              <div class="kpi-value">{{ stats.activeSubscriptions }}</div>
              <div class="kpi-label">有效訂閱</div>
            </div>
            <div class="kpi-card kpi-orange">
              <div class="kpi-value">NT$ {{ stats.monthlyRevenue.toLocaleString() }}</div>
              <div class="kpi-label">本月營收</div>
            </div>
            <div class="kpi-card kpi-red">
              <div class="kpi-value">{{ stats.expiring30d }}</div>
              <div class="kpi-label">30天內到期</div>
            </div>
          </div>

          <!-- 訂閱層級分佈 -->
          <div class="chart-section">
            <h3>訂閱層級分佈</h3>
            <div class="tier-bars">
              <div v-for="t in stats.tierBreakdown" :key="t.tier" class="tier-bar-row">
                <span class="tier-label">{{ tierLabel(t.tier) }}</span>
                <div class="bar-track">
                  <div
                    class="bar-fill"
                    :style="{ width: barWidth(t.count, stats.totalStudents) + '%', background: tierColor(t.tier) }"
                  ></div>
                </div>
                <span class="tier-count">{{ t.count }} 人</span>
              </div>
            </div>
          </div>
        </template>
      </section>

      <!-- ── 學員管理 ── -->
      <section v-if="activeTab === 'students'" class="tab-panel">
        <div class="section-header">
          <h2 class="section-title">學員管理</h2>
          <div class="section-actions">
            <input
              v-model="studentSearch"
              type="search"
              class="search-input"
              placeholder="搜尋 Email 或姓名…"
            />
          </div>
        </div>

        <div v-if="studentsLoading" class="loading-state">載入中…</div>
        <div v-else class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>角色</th>
                <th>訂閱方案</th>
                <th>到期日</th>
                <th>消費總額</th>
                <th>註冊日</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="s in filteredStudents" :key="s.user_id">
                <td>{{ s.email }}</td>
                <td><span :class="['role-tag', s.role]">{{ s.role === 'admin' ? '管理員' : '學員' }}</span></td>
                <td><span :class="['tier-tag', s.tier]">{{ tierLabel(s.tier) }}</span></td>
                <td class="date-cell">{{ formatDate(s.subscription_exp) }}</td>
                <td class="amount-cell">NT$ {{ (s.total_spent || 0).toLocaleString() }}</td>
                <td class="date-cell">{{ formatDate(s.created_at) }}</td>
                <td>
                  <button class="btn-xs" @click="viewStudent(s)">詳情</button>
                </td>
              </tr>
            </tbody>
          </table>
          <p v-if="filteredStudents.length === 0" class="empty-state">找不到符合條件的學員</p>
        </div>
      </section>

      <!-- ── 課程管理 ── -->
      <section v-if="activeTab === 'courses'" class="tab-panel">
        <h2 class="section-title">課程管理</h2>
        <div class="courses-grid">
          <div v-for="c in courses" :key="c.id" class="course-card">
            <div class="course-flag">{{ courseFlag(c.id) }}</div>
            <h3>{{ c.name_zh }}</h3>
            <p class="course-desc">{{ c.description }}</p>
            <!-- 訂閱定價表格 -->
            <table class="price-table">
              <thead>
                <tr>
                  <th></th>
                  <th>月費</th>
                  <th>年費</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pt-tier basic">完整課程</td>
                  <td>NT$ {{ (c.price_basic_monthly ?? c.price_basic ?? 290).toLocaleString() }}</td>
                  <td>NT$ {{ (c.price_basic_yearly ?? 1800).toLocaleString() }}</td>
                </tr>
                <tr>
                  <td class="pt-tier premium">頂級方案</td>
                  <td>NT$ {{ (c.price_premium_monthly ?? c.price_premium ?? 590).toLocaleString() }}</td>
                  <td>NT$ {{ (c.price_premium_yearly ?? 3600).toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
            <div class="course-actions">
              <button class="btn-sm" @click="editCourse(c)">編輯價格</button>
              <button
                :class="['btn-sm', c.active ? 'btn-deactivate' : 'btn-activate']"
                :disabled="togglingCourse === c.id"
                @click="toggleCourseActive(c)">
                {{ togglingCourse === c.id ? '處理中…' : c.active ? '下架' : '上架' }}
              </button>
              <button
                :class="['btn-sm', c.show_on_home !== false ? 'btn-show-on' : 'btn-show-off']"
                :disabled="togglingShowHome === c.id"
                @click="toggleCourseShowHome(c)">
                {{ togglingShowHome === c.id ? '處理中…' : c.show_on_home !== false ? '🏠 首頁顯示' : '🚫 首頁隱藏' }}
              </button>
              <span :class="['status-dot', c.active ? 'on' : 'off']">
                {{ c.active ? '上架中' : '已下架' }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 營收報表 ── -->
      <section v-if="activeTab === 'revenue'" class="tab-panel">
        <div class="section-header">
          <h2 class="section-title">營收報表</h2>
          <select v-model="revenueMonths" class="filter-select" @change="loadRevenue">
            <option :value="3">近 3 個月</option>
            <option :value="6">近 6 個月</option>
            <option :value="12">近 12 個月</option>
          </select>
        </div>

        <div v-if="revenueLoading" class="loading-state">計算中…</div>
        <div v-else>
          <!-- 月份彙總 -->
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>月份</th>
                  <th>課程</th>
                  <th>訂單數</th>
                  <th>營收 (NT$)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in revenueRows" :key="r.month + r.course_id">
                  <td>{{ r.month }}</td>
                  <td>{{ courseLabel(r.course_id) }}</td>
                  <td>{{ r.orders }}</td>
                  <td class="amount-cell">{{ Number(r.revenue_twd).toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 總計 -->
          <div class="revenue-total">
            <span>期間總營收：</span>
            <strong>NT$ {{ revenueTotal.toLocaleString() }}</strong>
          </div>
        </div>
      </section>

      <!-- ── 學習進度 ── -->
      <section v-if="activeTab === 'progress'" class="tab-panel">
        <div class="section-header">
          <h2 class="section-title">📈 學習進度</h2>
        </div>
        <div v-if="progressLoading" class="loading-state">載入中…</div>
        <div v-else class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>完成等級</th>
                <th>測驗正確率</th>
                <th>累計學習時間</th>
                <th>最後活躍</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in progressList" :key="p.user_id">
                <td>{{ p.email }}</td>
                <td>
                  <span v-if="p.completed_levels?.length" class="level-tags">
                    <span v-for="l in p.completed_levels" :key="l" class="level-tag">Lv{{ l }}</span>
                  </span>
                  <span v-else class="date-cell">—</span>
                </td>
                <td class="center-cell">{{ p.quiz_accuracy_overall ? p.quiz_accuracy_overall + '%' : '—' }}</td>
                <td class="center-cell">{{ formatStudyTime(p.total_study_seconds) }}</td>
                <td class="date-cell">{{ formatDate(p.last_active_at) }}</td>
              </tr>
            </tbody>
          </table>
          <p v-if="progressList.length === 0" class="empty-state">尚無學習進度資料</p>
        </div>
      </section>

      <!-- ── 成就紀錄 ── -->
      <section v-if="activeTab === 'achievements'" class="tab-panel">
        <div class="section-header">
          <h2 class="section-title">🏆 成就紀錄</h2>
        </div>
        <div v-if="achievementsLoading" class="loading-state">載入中…</div>
        <div v-else class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>解鎖數量</th>
                <th>累積點數</th>
                <th>已解鎖成就</th>
                <th>更新時間</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in achievementsList" :key="a.user_id">
                <td>{{ a.email }}</td>
                <td class="center-cell"><strong>{{ a.unlocked_count }}</strong></td>
                <td class="center-cell amount-cell">{{ a.total_points }}</td>
                <td class="unlocked-ids">
                  <span v-for="id in (a.unlocked_ids || []).slice(0, 5)" :key="id" class="ach-chip">{{ id }}</span>
                  <span v-if="(a.unlocked_ids?.length || 0) > 5" class="ach-more">+{{ a.unlocked_ids.length - 5 }}</span>
                </td>
                <td class="date-cell">{{ formatDate(a.updated_at) }}</td>
              </tr>
            </tbody>
          </table>
          <p v-if="achievementsList.length === 0" class="empty-state">尚無成就紀錄（學員登入後觸發成就才會同步）</p>
        </div>
      </section>

      <!-- ── 辭典管理 ── -->
      <section v-if="activeTab === 'glossary'" class="tab-panel">
        <div class="section-header">
          <h2 class="section-title">📖 葡萄酒辭典管理</h2>
        </div>
        <AdminGlossary />
      </section>

      <!-- ── 公告管理 ── -->
      <section v-if="activeTab === 'announcements'" class="tab-panel">
        <div class="section-header">
          <h2 class="section-title">📢 公告管理</h2>
          <button class="btn-primary" @click="openNewAnnouncement">＋ 新增公告</button>
        </div>

        <div v-if="annLoading" class="loading-state">載入中…</div>
        <div v-else>
          <div v-if="announcements.length === 0" class="empty-state">目前沒有任何公告</div>
          <div v-else class="ann-list">
            <div v-for="ann in announcements" :key="ann.id" class="ann-row">
              <div class="ann-row-main">
                <div class="ann-row-top">
                  <span :class="['ann-type-tag', ann.type]">{{ annTypeLabel(ann.type) }}</span>
                  <span :class="['ann-mode-tag', ann.display_mode]">{{ annModeLabel(ann.display_mode) }}</span>
                  <span :class="['ann-tier-tag', ann.target_tier]">{{ annTierLabel(ann.target_tier) }}</span>
                  <span :class="['ann-status', ann.is_active ? 'on' : 'off']">{{ ann.is_active ? '● 進行中' : '○ 已停用' }}</span>
                </div>
                <div class="ann-title">{{ ann.title }}</div>
                <div class="ann-content-preview">{{ ann.content }}</div>
                <div class="ann-meta">
                  <span>開始：{{ formatDate(ann.starts_at) }}</span>
                  <span>結束：{{ ann.ends_at ? formatDate(ann.ends_at) : '永不過期' }}</span>
                  <span>優先級：{{ ann.priority }}</span>
                </div>
              </div>
              <div class="ann-row-actions">
                <button class="btn-xs" @click="editAnnouncement(ann)">編輯</button>
                <button
                  :class="['btn-xs', ann.is_active ? 'btn-deactivate' : 'btn-activate']"
                  :disabled="togglingAnn === ann.id"
                  @click="toggleAnn(ann)"
                >{{ togglingAnn === ann.id ? '…' : ann.is_active ? '停用' : '啟用' }}</button>
                <button class="btn-xs btn-danger" @click="deleteAnn(ann)">刪除</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 優惠碼管理 ── -->
      <section v-if="activeTab === 'coupons'" class="tab-panel">
        <div class="section-header">
          <h2 class="section-title">🎟️ 優惠碼管理</h2>
          <button class="btn-primary" @click="openNewCoupon">＋ 新增優惠碼</button>
        </div>

        <!-- KPI -->
        <div class="kpi-grid" style="margin-bottom:24px">
          <div class="kpi-card">
            <div class="kpi-value">{{ couponList.length }}</div>
            <div class="kpi-label">優惠碼總數</div>
          </div>
          <div class="kpi-card kpi-green">
            <div class="kpi-value">{{ couponList.filter(c => c.active).length }}</div>
            <div class="kpi-label">有效中</div>
          </div>
          <div class="kpi-card kpi-orange">
            <div class="kpi-value">{{ couponList.reduce((s,c) => s + (c.used_count||0), 0) }}</div>
            <div class="kpi-label">累計使用次數</div>
          </div>
          <div class="kpi-card" style="border-top-color:#8e44ad">
            <div class="kpi-value">{{ affiliateCoupons.length }}</div>
            <div class="kpi-label">合作夥伴碼</div>
          </div>
        </div>

        <div v-if="couponLoading" class="loading-state">載入中…</div>
        <div v-else>
          <div v-if="couponList.length === 0" class="empty-state">尚無優惠碼，點擊「新增優惠碼」建立第一個</div>
          <div v-else class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>優惠碼</th>
                  <th>類型</th>
                  <th>效果</th>
                  <th>合作夥伴</th>
                  <th>使用 / 上限</th>
                  <th>到期日</th>
                  <th>狀態</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="c in couponList" :key="c.code">
                  <td><code class="code-tag">{{ c.code }}</code></td>
                  <td>{{ couponTypeLabel(c.type) }}</td>
                  <td>
                    <span v-if="c.type === 'free_trial'">免費 {{ c.trial_days || 30 }} 天</span>
                    <span v-else-if="c.discount_pct > 0">折扣 {{ c.discount_pct }}%</span>
                    <span v-else>—</span>
                  </td>
                  <td>
                    <span v-if="c.referrer_name" class="tag-pill tag-purple">{{ c.referrer_name }}</span>
                    <span v-else class="text-muted">—</span>
                  </td>
                  <td>{{ c.used_count || 0 }}<span v-if="c.max_uses" class="text-muted"> / {{ c.max_uses }}</span></td>
                  <td class="date-cell">
                    <span v-if="c.valid_until">{{ formatDate(c.valid_until) }}</span>
                    <span v-else class="text-muted">永久</span>
                  </td>
                  <td>
                    <span :class="['status-pill', c.active ? 'status-on' : 'status-off']">
                      {{ c.active ? '有效' : '停用' }}
                    </span>
                  </td>
                  <td>
                    <div class="row-actions">
                      <button class="btn-xs" @click="editCouponItem(c)">編輯</button>
                      <button
                        :class="['btn-xs', c.active ? 'btn-deactivate' : 'btn-activate']"
                        :disabled="togglingCoupon === c.code"
                        @click="toggleCoupon(c)"
                      >{{ togglingCoupon === c.code ? '…' : c.active ? '停用' : '啟用' }}</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 合作夥伴分紅試算 -->
          <div v-if="affiliateCoupons.length > 0" class="referral-section">
            <h3 class="section-subtitle">💸 合作夥伴分紅試算</h3>
            <p class="referral-note">以下為應計分紅金額試算（以月費 NT$249 × 使用次數 × 分紅% 計算），請依實際合約條款調整</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>合作單位</th>
                  <th>優惠碼</th>
                  <th>分紅%</th>
                  <th>使用次數</th>
                  <th>估計應付分紅</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="a in affiliateCoupons" :key="a.code">
                  <td>{{ a.referrer_name }}</td>
                  <td><code class="code-tag">{{ a.code }}</code></td>
                  <td>{{ a.commission_pct }}%</td>
                  <td>{{ a.used_count || 0 }}</td>
                  <td class="amount-cell">NT$ {{ Math.round((a.used_count || 0) * 249 * (a.commission_pct / 100)).toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
    <div v-if="editingAnn" class="modal-overlay" @click.self="editingAnn = null">
      <div class="modal modal-wide">
        <div class="modal-header">
          <h3>{{ editingAnn.id ? '編輯公告' : '新增公告' }}</h3>
          <button @click="editingAnn = null">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>標題 <span class="req">*</span></label>
            <input v-model="editingAnn.title" type="text" class="field-input" placeholder="公告標題" />
          </div>
          <div class="form-group">
            <label>內容 <span class="req">*</span></label>
            <textarea v-model="editingAnn.content" class="field-textarea" rows="4" placeholder="公告內文…" />
          </div>
          <div class="form-row-3">
            <div class="form-group">
              <label>類型</label>
              <select v-model="editingAnn.type" class="field-select">
                <option value="info">資訊</option>
                <option value="warning">警示</option>
                <option value="promo">促銷</option>
                <option value="maintenance">維護</option>
              </select>
            </div>
            <div class="form-group">
              <label>顯示模式</label>
              <select v-model="editingAnn.display_mode" class="field-select">
                <option value="banner">橫幅 Banner</option>
                <option value="modal">彈窗 Modal</option>
                <option value="ticker">跑馬燈 Ticker</option>
              </select>
            </div>
            <div class="form-group">
              <label>對象</label>
              <select v-model="editingAnn.target_tier" class="field-select">
                <option value="all">所有人</option>
                <option value="free">免費學員</option>
                <option value="basic">初階訂閱</option>
                <option value="premium">進階訂閱</option>
              </select>
            </div>
          </div>
          <div class="form-row-3">
            <div class="form-group">
              <label>開始時間</label>
              <input v-model="editingAnn.starts_at" type="datetime-local" class="field-input" />
            </div>
            <div class="form-group">
              <label>結束時間（空白 = 永不過期）</label>
              <input v-model="editingAnn.ends_at" type="datetime-local" class="field-input" />
            </div>
            <div class="form-group">
              <label>優先級（數字越大越前面）</label>
              <input v-model.number="editingAnn.priority" type="number" class="field-input" min="0" />
            </div>
          </div>
          <div class="form-group form-check">
            <label class="check-label">
              <input type="checkbox" v-model="editingAnn.is_active" />
              立即啟用
            </label>
          </div>
          <div class="modal-actions">
            <button class="btn-primary" @click="saveAnn" :disabled="savingAnn">
              {{ savingAnn ? '儲存中…' : '儲存' }}
            </button>
            <button class="btn-ghost" @click="editingAnn = null">取消</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 學員詳情彈窗 -->
    <div v-if="selectedStudent" class="modal-overlay" @click.self="selectedStudent = null">
      <div class="modal modal-student">
        <div class="modal-header">
          <h3>學員詳情</h3>
          <button @click="selectedStudent = null">✕</button>
        </div>
        <div class="modal-body">
          <p><strong>Email：</strong>{{ selectedStudent.email }}</p>
          <p><strong>角色：</strong>{{ selectedStudent.role }}</p>
          <p><strong>方案：</strong>{{ tierLabel(selectedStudent.tier) }}</p>
          <p><strong>到期日：</strong>{{ formatDate(selectedStudent.subscription_exp) }}</p>
          <p><strong>消費：</strong>NT$ {{ (selectedStudent.total_spent || 0).toLocaleString() }}</p>

          <!-- 管理者備註 -->
          <div class="notes-section">
            <label class="notes-label">📝 管理者備註</label>
            <div v-if="notesLoading" class="notes-loading">載入中…</div>
            <textarea
              v-else
              v-model="notesText"
              class="notes-textarea"
              placeholder="輸入備註（僅管理員可見）…"
              rows="4"
            ></textarea>
            <div class="notes-actions">
              <button class="btn-primary" @click="saveNotes" :disabled="savingNotes">
                {{ savingNotes ? '儲存中…' : '儲存備註' }}
              </button>
              <span v-if="notesSaved" class="notes-saved-msg">✓ 已儲存</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 優惠碼編輯彈窗 -->
    <div v-if="editingCoupon" class="modal-overlay" @click.self="editingCoupon = null">
      <div class="modal modal-wide">
        <div class="modal-header">
          <h3>{{ editingCoupon._isNew ? '新增優惠碼' : `編輯：${editingCoupon.code}` }}</h3>
          <button @click="editingCoupon = null">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-row-2">
            <div class="form-group">
              <label>優惠碼 <span class="req">*</span></label>
              <input v-model="editingCoupon.code" :disabled="!editingCoupon._isNew" type="text" class="field-input" placeholder="EXAMPLE2026" style="text-transform:uppercase" maxlength="30" />
            </div>
            <div class="form-group">
              <label>類型 <span class="req">*</span></label>
              <select v-model="editingCoupon.type" class="field-select">
                <option value="free_trial">免費試用（free_trial）</option>
                <option value="discount">折扣碼（discount）</option>
                <option value="affiliate">合作夥伴（affiliate）</option>
              </select>
            </div>
          </div>
          <div class="form-row-2">
            <div class="form-group">
              <label>免費天數（free_trial 用）</label>
              <input v-model.number="editingCoupon.trial_days" type="number" min="0" max="365" class="field-input" placeholder="30" />
            </div>
            <div class="form-group">
              <label>折扣百分比（0~100，discount 用）</label>
              <input v-model.number="editingCoupon.discount_pct" type="number" min="0" max="100" class="field-input" placeholder="0" />
            </div>
          </div>
          <div class="form-row-2">
            <div class="form-group">
              <label>合作夥伴 ID</label>
              <input v-model="editingCoupon.referrer_id" type="text" class="field-input" placeholder="PARTNER_TCW" />
            </div>
            <div class="form-group">
              <label>合作夥伴顯示名稱</label>
              <input v-model="editingCoupon.referrer_name" type="text" class="field-input" placeholder="台灣侍酒師公會" />
            </div>
          </div>
          <div class="form-row-2">
            <div class="form-group">
              <label>分紅百分比（%，affiliate 用）</label>
              <input v-model.number="editingCoupon.commission_pct" type="number" min="0" max="100" step="0.5" class="field-input" placeholder="0" />
            </div>
            <div class="form-group">
              <label>最大使用次數（空白 = 無限）</label>
              <input v-model.number="editingCoupon.max_uses" type="number" min="1" class="field-input" placeholder="無限制" />
            </div>
          </div>
          <div class="form-row-2">
            <div class="form-group">
              <label>生效時間（空白 = 立即）</label>
              <input v-model="editingCoupon.valid_from" type="datetime-local" class="field-input" />
            </div>
            <div class="form-group">
              <label>到期時間（空白 = 永久）</label>
              <input v-model="editingCoupon.valid_until" type="datetime-local" class="field-input" />
            </div>
          </div>
          <div class="form-group">
            <label>備註（內部用，使用者不可見）</label>
            <input v-model="editingCoupon.note" type="text" class="field-input" placeholder="內部備註…" />
          </div>
          <div class="form-group form-check">
            <label class="check-label">
              <input type="checkbox" v-model="editingCoupon.active" />
              立即啟用
            </label>
          </div>
          <div class="modal-actions">
            <button class="btn-primary" @click="saveCoupon" :disabled="savingCoupon">
              {{ savingCoupon ? '儲存中…' : '儲存' }}
            </button>
            <button class="btn-ghost" @click="editingCoupon = null">取消</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 課程價格編輯彈窗 -->
    <div v-if="editingCourse" class="modal-overlay" @click.self="editingCourse = null">
      <div class="modal modal-wide">
        <div class="modal-header">
          <h3>編輯定價：{{ editingCourse.name_zh }}</h3>
          <button @click="editingCourse = null">✕</button>
        </div>
        <div class="modal-body">
          <div class="price-edit-grid">
            <div class="peg-section">
              <div class="peg-title basic">完整課程（Basic）</div>
              <div class="form-group">
                <label>月費 (NT$)</label>
                <input v-model.number="editingCourse.price_basic_monthly" type="number" min="0" class="field-input" />
              </div>
              <div class="form-group">
                <label>年費 (NT$)</label>
                <input v-model.number="editingCourse.price_basic_yearly" type="number" min="0" class="field-input" />
              </div>
            </div>
            <div class="peg-section">
              <div class="peg-title premium">頂級方案（Premium）</div>
              <div class="form-group">
                <label>月費 (NT$)</label>
                <input v-model.number="editingCourse.price_premium_monthly" type="number" min="0" class="field-input" />
              </div>
              <div class="form-group">
                <label>年費 (NT$)</label>
                <input v-model.number="editingCourse.price_premium_yearly" type="number" min="0" class="field-input" />
              </div>
            </div>
          </div>
          <!-- 年繳小計 -->
          <div class="peg-note">ℹ️ 年繳等同月費 × 12 時各當 {{ Math.round((editingCourse.price_basic_monthly || 0) * 12 / 100) * 100 }} / {{ Math.round((editingCourse.price_premium_monthly || 0) * 12 / 100) * 100 }}，年費可小於此以鼓勵年繳</div>
          <div class="modal-actions">
            <button class="btn-primary" @click="saveCourse" :disabled="savingCourse">
              {{ savingCourse ? '儲存中…' : '儲存' }}
            </button>
            <button class="btn-ghost" @click="editingCourse = null">取消</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
import { authActions, authState } from '../stores/authStore.js'
import AdminGlossary from './AdminGlossary.vue'

const router = useRouter()

// ── Tab 設定 ────────────────────────────────────────────────
const tabs = [
  { id: 'overview',      label: '總覽',     icon: '📊' },
  { id: 'students',      label: '學員管理', icon: '👥' },
  { id: 'courses',       label: '課程管理', icon: '📚' },
  { id: 'revenue',       label: '營收報表', icon: '💰' },
  { id: 'progress',      label: '學習進度', icon: '📈' },
  { id: 'achievements',  label: '成就紀錄', icon: '🏆' },
  { id: 'glossary',      label: '辭典管理', icon: '📖' },
  { id: 'announcements', label: '公告管理', icon: '📢' },
  { id: 'coupons',       label: '優惠碼',   icon: '🎟️' },
]
const activeTab = ref('overview')

// ── 更多選單 (手機版) ────────────────────────────────────────
const showMoreMenu = ref(false)
const moreRef = ref(null)

function handleClickOutside(e) {
  if (moreRef.value && !moreRef.value.contains(e.target)) {
    showMoreMenu.value = false
  }
}
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// ── 基本資訊 ────────────────────────────────────────────────
const userEmail = computed(() => authActions.getEmail())

// ── 總覽 stats ──────────────────────────────────────────────
const statsLoading = ref(true)
const stats = ref({
  totalStudents:      0,
  activeSubscriptions: 0,
  monthlyRevenue:     0,
  expiring30d:        0,
  tierBreakdown:      [],
})

async function loadStats() {
  statsLoading.value = true
  try {
    // 訂閱活躍度
    const { data: subData } = await supabase.rpc('admin_subscription_stats')
    if (subData) {
      stats.value.activeSubscriptions = subData.reduce((s, r) => s + Number(r.active_count), 0)
      stats.value.expiring30d         = subData.reduce((s, r) => s + Number(r.expiring_30d), 0)
    }

    // 月營收
    const { data: revData } = await supabase.rpc('admin_monthly_revenue', { p_months: 1 })
    if (revData) {
      stats.value.monthlyRevenue = revData.reduce((s, r) => s + Number(r.revenue_twd), 0)
    }

    // 學員 tier 分佈
    const { data: students } = await supabase.rpc('admin_get_students')
    if (students) {
      stats.value.totalStudents = students.length
      const tierMap = {}
      students.forEach(s => {
        tierMap[s.tier] = (tierMap[s.tier] || 0) + 1
      })
      stats.value.tierBreakdown = Object.entries(tierMap).map(([tier, count]) => ({ tier, count }))
    }
  } finally {
    statsLoading.value = false
  }
}

// ── 學員管理 ────────────────────────────────────────────────
const studentsLoading = ref(false)
const studentsList    = ref([])
const studentSearch   = ref('')
const selectedStudent = ref(null)

// 管理者備註
const notesText    = ref('')
const notesLoading = ref(false)
const savingNotes  = ref(false)
const notesSaved   = ref(false)

const filteredStudents = computed(() => {
  const q = studentSearch.value.toLowerCase()
  if (!q) return studentsList.value
  return studentsList.value.filter(s =>
    s.email?.toLowerCase().includes(q)
  )
})

async function loadStudents() {
  studentsLoading.value = true
  try {
    const { data } = await supabase.rpc('admin_get_students')
    studentsList.value = data ?? []
  } finally {
    studentsLoading.value = false
  }
}

async function viewStudent(s) {
  selectedStudent.value = s
  notesText.value = ''
  notesSaved.value = false
  notesLoading.value = true
  try {
    const { data } = await supabase.rpc('admin_get_notes', { p_user_id: s.user_id })
    notesText.value = data ?? ''
  } finally {
    notesLoading.value = false
  }
}

async function saveNotes() {
  if (!selectedStudent.value) return
  savingNotes.value = true
  notesSaved.value = false
  try {
    await supabase.rpc('admin_save_notes', {
      p_user_id: selectedStudent.value.user_id,
      p_notes:   notesText.value,
    })
    notesSaved.value = true
    setTimeout(() => { notesSaved.value = false }, 2500)
  } finally {
    savingNotes.value = false
  }
}

// ── 課程管理 ────────────────────────────────────────────────
const courses          = ref([])
const editingCourse    = ref(null)
const savingCourse     = ref(false)
const togglingCourse   = ref(null)
const togglingShowHome = ref(null)

async function loadCourses() {
  const { data } = await supabase.from('courses').select('*').order('id')
  courses.value = data ?? []
}

function editCourse(c) {
  editingCourse.value = { ...c }
}

async function toggleCourseActive(c) {
  togglingCourse.value = c.id
  try {
    await supabase.from('courses').update({ active: !c.active }).eq('id', c.id)
    await loadCourses()
  } finally {
    togglingCourse.value = null
  }
}

async function toggleCourseShowHome(c) {
  togglingShowHome.value = c.id
  try {
    const newVal = c.show_on_home !== false ? false : true
    const { error } = await supabase.from('courses').update({ show_on_home: newVal }).eq('id', c.id)
    if (error) throw error
    await loadCourses()
  } catch (err) {
    console.error('更新首頁顯示失敗：', err)
    alert('更新首頁顯示失敗：' + (err.message || JSON.stringify(err)))
  } finally {
    togglingShowHome.value = null
  }
}

async function saveCourse() {
  if (!editingCourse.value) return
  savingCourse.value = true
  try {
    await supabase.from('courses')
      .update({
        price_basic_monthly:   editingCourse.value.price_basic_monthly,
        price_basic_yearly:    editingCourse.value.price_basic_yearly,
        price_premium_monthly: editingCourse.value.price_premium_monthly,
        price_premium_yearly:  editingCourse.value.price_premium_yearly,
      })
      .eq('id', editingCourse.value.id)
    await loadCourses()
    editingCourse.value = null
  } finally {
    savingCourse.value = false
  }
}

// ── 營收報表 ────────────────────────────────────────────────
const revenueLoading = ref(false)
const revenueRows    = ref([])
const revenueMonths  = ref(6)

const revenueTotal = computed(() =>
  revenueRows.value.reduce((s, r) => s + Number(r.revenue_twd), 0)
)

async function loadRevenue() {
  revenueLoading.value = true
  try {
    const { data } = await supabase.rpc('admin_monthly_revenue', { p_months: revenueMonths.value })
    revenueRows.value = data ?? []
  } finally {
    revenueLoading.value = false
  }
}

// ── 學習進度 ────────────────────────────────────────────────
const progressLoading  = ref(false)
const progressList     = ref([])

async function loadProgress() {
  progressLoading.value = true
  try {
    const { data } = await supabase.rpc('admin_get_progress_summary')
    progressList.value = data ?? []
  } finally {
    progressLoading.value = false
  }
}

// ── 成就紀錄 ────────────────────────────────────────────────
const achievementsLoading = ref(false)
const achievementsList    = ref([])

async function loadAchievements() {
  achievementsLoading.value = true
  try {
    const { data } = await supabase.rpc('admin_get_achievements_summary')
    achievementsList.value = data ?? []
  } finally {
    achievementsLoading.value = false
  }
}

// ── 初始化 ──────────────────────────────────────────────────
onMounted(async () => {
  document.addEventListener('click', handleClickOutside)
  // 安全檢查：非 admin 跳回首頁
  if (!authActions.isAdmin()) {
    router.replace('/')
    return
  }
  await Promise.all([loadStats(), loadStudents(), loadCourses(), loadRevenue()])
})

// 切換 tab 時自動載入
watch(activeTab, (tab) => {
  if (tab === 'progress'       && progressList.value.length === 0)       loadProgress(true)
  if (tab === 'achievements'   && achievementsList.value.length === 0)   loadAchievements()
  if (tab === 'announcements'  && announcements.value.length === 0)      loadAnnouncements()
  if (tab === 'coupons'        && couponList.value.length === 0)          loadCoupons()
})

// ── 公告管理 ────────────────────────────────────────────────
const annLoading    = ref(false)
const announcements = ref([])
const editingAnn    = ref(null)
const savingAnn     = ref(false)
const togglingAnn   = ref(null)

async function loadAnnouncements() {
  annLoading.value = true
  try {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('priority', { ascending: false })
      .order('created_at', { ascending: false })
    if (error) throw error
    announcements.value = data ?? []
  } finally {
    annLoading.value = false
  }
}

function openNewAnnouncement() {
  const now = new Date()
  const pad  = n => String(n).padStart(2, '0')
  const localIso = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`
  editingAnn.value = {
    id: null,
    title: '',
    content: '',
    type: 'info',
    display_mode: 'banner',
    target_tier: 'all',
    is_active: true,
    starts_at: localIso,
    ends_at: '',
    priority: 0,
  }
}

function editAnnouncement(ann) {
  const toLocal = (iso) => {
    if (!iso) return ''
    const d = new Date(iso)
    const pad = n => String(n).padStart(2, '0')
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
  }
  editingAnn.value = {
    ...ann,
    starts_at: toLocal(ann.starts_at),
    ends_at:   toLocal(ann.ends_at),
  }
}

async function saveAnn() {
  const a = editingAnn.value
  if (!a.title.trim() || !a.content.trim()) {
    alert('請填寫標題與內容')
    return
  }
  savingAnn.value = true
  try {
    const payload = {
      title:        a.title.trim(),
      content:      a.content.trim(),
      type:         a.type,
      display_mode: a.display_mode,
      target_tier:  a.target_tier,
      is_active:    a.is_active,
      starts_at:    a.starts_at || new Date().toISOString(),
      ends_at:      a.ends_at   || null,
      priority:     a.priority  ?? 0,
    }
    if (a.id) {
      const { error } = await supabase.from('announcements').update(payload).eq('id', a.id)
      if (error) throw error
    } else {
      const { error } = await supabase.from('announcements').insert(payload)
      if (error) throw error
    }
    editingAnn.value = null
    await loadAnnouncements()
  } catch (err) {
    alert('儲存失敗：' + (err.message || JSON.stringify(err)))
  } finally {
    savingAnn.value = false
  }
}

async function toggleAnn(ann) {
  togglingAnn.value = ann.id
  try {
    const { error } = await supabase
      .from('announcements')
      .update({ is_active: !ann.is_active })
      .eq('id', ann.id)
    if (error) throw error
    await loadAnnouncements()
  } finally {
    togglingAnn.value = null
  }
}

async function deleteAnn(ann) {
  if (!confirm(`確定要刪除「${ann.title}」？此操作無法復原。`)) return
  try {
    const { error } = await supabase.from('announcements').delete().eq('id', ann.id)
    if (error) throw error
    await loadAnnouncements()
  } catch (err) {
    alert('刪除失敗：' + (err.message || JSON.stringify(err)))
  }
}

function annTypeLabel(t) {
  return { info: '資訊', warning: '警示', promo: '促銷', maintenance: '維護' }[t] ?? t
}

// ── 優惠碼管理 ────────────────────────────────────────────────
const couponLoading  = ref(false)
const couponList     = ref([])
const editingCoupon  = ref(null)
const savingCoupon   = ref(false)
const togglingCoupon = ref(null)

const affiliateCoupons = computed(() =>
  couponList.value.filter(c => c.referrer_id && Number(c.commission_pct) > 0)
)

async function loadCoupons() {
  couponLoading.value = true
  try {
    const { data, error } = await supabase
      .from('coupon_codes')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    couponList.value = data ?? []
  } finally {
    couponLoading.value = false
  }
}

function openNewCoupon() {
  editingCoupon.value = {
    _isNew:         true,
    code:           '',
    type:           'free_trial',
    trial_days:     30,
    discount_pct:   0,
    referrer_id:    '',
    referrer_name:  '',
    commission_pct: 0,
    max_uses:       null,
    valid_from:     '',
    valid_until:    '',
    active:         true,
    note:           '',
  }
}

function editCouponItem(c) {
  const toLocal = (iso) => {
    if (!iso) return ''
    const d   = new Date(iso)
    const pad = n => String(n).padStart(2, '0')
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
  }
  editingCoupon.value = {
    ...c,
    _isNew:      false,
    valid_from:  toLocal(c.valid_from),
    valid_until: toLocal(c.valid_until),
  }
}

async function saveCoupon() {
  const c = editingCoupon.value
  if (!c.code?.trim()) { alert('請輸入優惠碼'); return }
  if (!c.type)         { alert('請選擇類型');   return }
  savingCoupon.value = true
  try {
    const payload = {
      type:           c.type,
      trial_days:     c.trial_days     || 0,
      discount_pct:   c.discount_pct   || 0,
      referrer_id:    c.referrer_id    || null,
      referrer_name:  c.referrer_name  || null,
      commission_pct: c.commission_pct || 0,
      max_uses:       c.max_uses       || null,
      valid_from:     c.valid_from     || null,
      valid_until:    c.valid_until    || null,
      active:         c.active,
      note:           c.note           || null,
    }
    if (c._isNew) {
      payload.code = c.code.trim().toUpperCase()
      const { error } = await supabase.from('coupon_codes').insert(payload)
      if (error) throw error
    } else {
      const { error } = await supabase.from('coupon_codes').update(payload).eq('code', c.code)
      if (error) throw error
    }
    editingCoupon.value = null
    await loadCoupons()
  } catch (err) {
    alert('儲存失敗：' + (err.message || JSON.stringify(err)))
  } finally {
    savingCoupon.value = false
  }
}

async function toggleCoupon(c) {
  togglingCoupon.value = c.code
  try {
    const { error } = await supabase
      .from('coupon_codes')
      .update({ active: !c.active })
      .eq('code', c.code)
    if (error) throw error
    await loadCoupons()
  } finally {
    togglingCoupon.value = null
  }
}

function couponTypeLabel(t) {
  return { free_trial: '免費試用', discount: '折扣碼', affiliate: '合作夥伴' }[t] ?? t
}
function annModeLabel(m) {
  return { banner: 'Banner', modal: 'Modal', ticker: 'Ticker' }[m] ?? m
}
function annTierLabel(t) {
  return { all: '所有人', free: '免費', basic: '初階', premium: '進階' }[t] ?? t
}

// ── 導覽 ────────────────────────────────────────────────────
function goToCourses() {
  router.push('/')
}

async function handleLogout() {
  await authActions.signOut()
  router.push('/')
}

// ── 工具函式 ────────────────────────────────────────────────
function tierLabel(tier) {
  return { free: '免費', basic: '初階', premium: '進階', admin: '管理員' }[tier] ?? tier
}
function tierColor(tier) {
  return { free: '#aaa', basic: '#2980b9', premium: '#8e44ad' }[tier] ?? '#999'
}
function courseLabel(id) {
  return { bordeaux: '波爾多', bourgogne: '布根地', italy: '義大利', spain: '西班牙', germany: '德國', portugal: '葡萄牙', australia: '澳洲', newzealand: '紐西蘭', loire: '羅亞爾河', california: '加州' }[id] ?? id
}
function courseFlag(id) {
  return { bordeaux: '🇫🇷', bourgogne: '🇫🇷', italy: '🇮🇹', spain: '🇪🇸', germany: '🇩🇪', portugal: '🇵🇹', australia: '🇦🇺', newzealand: '🇳🇿', loire: '🇫🇷', california: '🇺🇸' }[id] ?? '🍷'
}
function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' })
}
function barWidth(count, total) {
  if (!total) return 0
  return Math.round((count / total) * 100)
}
function badgeTypeLabel(type) {
  return { badge: '徽章', certificate: '證書', milestone: '里程碑' }[type] ?? type
}
function formatStudyTime(sec) {
  if (!sec) return '—'
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  if (h > 0) return `${h} 小時 ${m} 分`
  if (m > 0) return `${m} 分鐘`
  return `${sec} 秒`
}
</script>

<style scoped>
/* ── 整體佈局 ── */
.admin-dashboard {
  min-height: 100vh;
  background: #f4f1ec;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

/* ── Header ── */
.admin-header {
  background: linear-gradient(135deg, #6b1220, #8b1a2b);
  padding: 14px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.admin-brand { display: flex; align-items: center; gap: 10px; }
.brand-icon  { font-size: 1.4rem; }
.brand-name  { color: #fff; font-weight: 700; font-size: 1.1rem; }
.admin-user-info { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.admin-badge  { background: #e74c3c; color: #fff; padding: 2px 10px; border-radius: 12px; font-size: .75rem; font-weight: 700; letter-spacing: .5px; }
.admin-email  { color: rgba(255,255,255,.8); font-size: .85rem; }
.btn-outline-sm { padding: 5px 14px; border: 1px solid rgba(255,255,255,.6); border-radius: 6px; background: transparent; color: #fff; font-size: .8rem; cursor: pointer; transition: background .2s; }
.btn-outline-sm:hover { background: rgba(255,255,255,.15); }
.btn-ghost-sm   { padding: 5px 14px; border: none; background: transparent; color: rgba(255,255,255,.7); font-size: .8rem; cursor: pointer; }
.btn-ghost-sm:hover { color: #fff; }

/* ── Tabs ── */
.admin-tabs {
  background: #fff;
  border-bottom: 2px solid #e9e3da;
  display: flex;
  gap: 0;
  padding: 0 24px;
  overflow-x: auto;
}
.tab-btn {
  padding: 14px 22px;
  border: none;
  background: transparent;
  color: #777;
  font-size: .9rem;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: all .2s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
}
.tab-btn:hover  { color: #8b1a2b; }
.tab-btn.active { color: #8b1a2b; border-bottom-color: #8b1a2b; font-weight: 600; }
.tab-icon { font-size: 1rem; }

/* 更多選單（預設隱藏，手機版顯示） */
.more-menu-wrap { display: none; position: relative; }

@media (max-width: 640px) {
  /* Header 手機版 */
  .admin-header { padding: 10px 14px; gap: 8px; }
  .brand-name { font-size: .9rem; }
  .admin-email { display: none; }
  .admin-user-info { gap: 6px; }
  .btn-outline-sm, .btn-ghost-sm { padding: 4px 10px; font-size: .75rem; }

  /* Tab 列手機版：只顯示 icon，文字隱藏 */
  .admin-tabs { padding: 0; justify-content: stretch; overflow: visible; }
  .tab-btn {
    padding: 10px 0;
    font-size: 0;        /* 隱藏文字 */
    gap: 0;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .tab-btn .tab-icon { font-size: 1.25rem; display: block; }
  .tab-extra { display: none !important; }
  .more-menu-wrap { display: flex; flex: 1; }
  .more-toggle-btn {
    white-space: nowrap;
    flex: 1;
    font-size: 0;
    padding: 10px 0;
    justify-content: center;
  }
  .more-toggle-btn .tab-icon { font-size: 1.25rem; display: block; }
  .more-chevron { display: none; }
  .more-chevron {
    font-size: 0.7rem; margin-left: 3px; display: inline-block;
    transition: transform .2s;
  }
  .more-chevron.open { transform: rotate(180deg); }
  .more-dropdown {
    position: absolute;
    top: calc(100% + 2px);
    right: 0;
    background: #fff;
    border: 1px solid #e9e3da;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0,0,0,.12);
    z-index: 200;
    min-width: 160px;
    overflow: hidden;
  }
  .more-item {
    display: flex; align-items: center; gap: 8px;
    width: 100%; padding: 13px 16px;
    border: none; background: transparent;
    color: #555; font-size: .9rem;
    cursor: pointer; text-align: left;
    transition: background .15s;
    white-space: nowrap;
  }
  .more-item:hover { background: #f5f0eb; color: #8b1a2b; }
  .more-item.active { color: #8b1a2b; font-weight: 700; background: #fdf5f5; }
}

/* ── 主內容 ── */
.admin-content { padding: 28px 32px; max-width: 1200px; margin: 0 auto; }
.tab-panel {}
.section-title { font-size: 1.3rem; font-weight: 700; color: #6b1220; margin: 0 0 20px; }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
.section-actions { display: flex; gap: 10px; }

/* ── KPI 卡片 ── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}
.kpi-card {
  background: #fff;
  border-radius: 12px;
  padding: 22px 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,.06);
  border-top: 4px solid #8b1a2b;
}
.kpi-card.kpi-green  { border-top-color: #27ae60; }
.kpi-card.kpi-orange { border-top-color: #e67e22; }
.kpi-card.kpi-red    { border-top-color: #e74c3c; }
.kpi-value { font-size: 1.8rem; font-weight: 800; color: #222; margin-bottom: 4px; }
.kpi-label { font-size: .82rem; color: #888; font-weight: 500; }

/* ── Tier 長條 ── */
.chart-section { background: #fff; border-radius: 12px; padding: 20px 24px; box-shadow: 0 2px 10px rgba(0,0,0,.06); }
.chart-section h3 { font-size: 1rem; font-weight: 700; margin: 0 0 16px; color: #444; }
.tier-bars { display: flex; flex-direction: column; gap: 10px; }
.tier-bar-row { display: flex; align-items: center; gap: 12px; }
.tier-label { width: 48px; font-size: .82rem; color: #666; text-align: right; }
.bar-track { flex: 1; background: #eee; border-radius: 99px; height: 12px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 99px; transition: width .6s ease; }
.tier-count { width: 48px; font-size: .82rem; color: #888; }

/* ── 表格 ── */
.table-wrapper { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,.06); }
.data-table th { background: #6b1220; color: #fff; padding: 11px 14px; text-align: left; font-size: .82rem; font-weight: 600; white-space: nowrap; }
.data-table td { padding: 10px 14px; border-bottom: 1px solid #f2ede7; font-size: .85rem; }
.data-table tr:last-child td { border-bottom: none; }
.data-table tr:hover td { background: #fdf8f4; }
.date-cell { color: #888; white-space: nowrap; }
.amount-cell { font-weight: 600; color: #27ae60; }

/* ── 標籤 ── */
.role-tag, .tier-tag {
  display: inline-block; padding: 2px 10px; border-radius: 10px; font-size: .75rem; font-weight: 600;
}
.role-tag.admin   { background: #f9e8ea; color: #8b1a2b; }
.role-tag.student { background: #e8f4fd; color: #2980b9; }
.tier-tag.free    { background: #f0f0f0; color: #777; }
.tier-tag.basic   { background: #e8f4fd; color: #2980b9; }
.tier-tag.premium { background: #f3e5f5; color: #8e44ad; }

/* ── 課程卡片 ── */
.courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.course-card { background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,.06); }
.course-flag { font-size: 2.2rem; margin-bottom: 8px; }
.course-card h3 { font-size: 1rem; margin: 0 0 6px; }
.course-desc { font-size: .8rem; color: #888; margin: 0 0 14px; line-height: 1.5; }
.price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
.price-label { font-size: .75rem; color: #999; }
.price-value { font-size: .9rem; font-weight: 600; color: #333; }
/* 訂閱定價表格 */
.price-table { width: 100%; border-collapse: collapse; margin: 10px 0 14px; font-size: .82rem; }
.price-table th { text-align: center; color: #aaa; font-weight: 600; padding: 3px 6px; border-bottom: 1px solid #eee; }
.price-table td { text-align: center; padding: 4px 6px; color: #333; }
.price-table th:first-child, .price-table td:first-child { text-align: left; }
.pt-tier { font-weight: 700; font-size: .75rem; }
.pt-tier.basic { color: #2e7d32; }
.pt-tier.premium { color: #7b241c; }
/* 編輯彈窗寬版 */
.modal-wide { max-width: 540px !important; }
.price-edit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 10px; }
.peg-section { display: flex; flex-direction: column; gap: 8px; }
.peg-title { font-size: .8rem; font-weight: 700; padding: 4px 8px; border-radius: 6px; text-align: center; margin-bottom: 4px; }
.peg-title.basic { background: #e8f5e9; color: #2e7d32; }
.peg-title.premium { background: #fce4ec; color: #7b241c; }
.peg-note { font-size: .75rem; color: #aaa; margin-bottom: 12px; background: #f8f8f8; padding: 6px 10px; border-radius: 6px; }
.ml { margin-left: 8px; }
.course-actions { display: flex; align-items: center; gap: 10px; }
.status-dot { font-size: .78rem; padding: 2px 10px; border-radius: 10px; font-weight: 600; }
.status-dot.on  { background: #e8f8f0; color: #27ae60; }
.status-dot.off { background: #fdeaea; color: #e74c3c; }

/* ── 搜尋 ── */
.search-input {
  padding: 8px 14px; border: 1px solid #ddd; border-radius: 8px; font-size: .85rem;
  outline: none; transition: border-color .2s; width: 240px;
}
.search-input:focus { border-color: #8b1a2b; }

/* ── 按鈕 ── */
.btn-sm, .btn-xs, .btn-primary, .btn-ghost {
  padding: 7px 16px; border-radius: 7px; border: none; font-size: .82rem;
  cursor: pointer; font-weight: 600; transition: all .2s;
}
.btn-sm { background: #8b1a2b; color: #fff; }
.btn-sm:hover { background: #6b1220; }
.btn-activate { background: #166534 !important; }
.btn-activate:hover { background: #14532d !important; }
.btn-deactivate { background: #92400e !important; }
.btn-deactivate:hover { background: #78350f !important; }
.btn-show-on  { background: #0369a1 !important; }
.btn-show-on:hover  { background: #075985 !important; }
.btn-show-off { background: #6b7280 !important; }
.btn-show-off:hover { background: #4b5563 !important; }
.btn-xs { background: #f0ebe5; color: #555; padding: 4px 12px; font-size: .78rem; }
.btn-xs:hover { background: #e3dad0; }
.btn-primary { background: #8b1a2b; color: #fff; }
.btn-primary:hover { background: #6b1220; }
.btn-primary:disabled { opacity: .5; cursor: default; }
.btn-ghost { background: transparent; color: #777; border: 1px solid #ddd; }
.btn-ghost:hover { background: #f5f5f5; }

/* ── 彈窗 ── */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal { background: #fff; border-radius: 14px; width: 100%; max-width: 480px; box-shadow: 0 8px 32px rgba(0,0,0,.18); }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px; border-bottom: 1px solid #eee; }
.modal-header h3 { margin: 0; font-size: 1rem; color: #333; }
.modal-header button { background: none; border: none; font-size: 1.1rem; cursor: pointer; color: #888; }
.modal-body { padding: 20px 24px; }
.modal-body p { margin: 0 0 10px; font-size: .9rem; }
.modal-body p:last-child { margin-bottom: 0; }
.modal-actions { display: flex; gap: 10px; margin-top: 20px; }

/* ── 表單 ── */
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: .82rem; color: #555; margin-bottom: 5px; font-weight: 600; }
.field-input { width: 100%; padding: 9px 14px; border: 1px solid #ddd; border-radius: 7px; font-size: .9rem; outline: none; box-sizing: border-box; }
.field-input:focus { border-color: #8b1a2b; }

/* ── 其他 ── */
.loading-state { text-align: center; padding: 40px; color: #aaa; font-size: .9rem; }
.empty-state   { text-align: center; padding: 20px; color: #aaa; font-size: .85rem; }
.filter-select { padding: 7px 12px; border: 1px solid #ddd; border-radius: 7px; font-size: .85rem; outline: none; }
.revenue-total { text-align: right; padding: 16px; font-size: 1rem; color: #333; }
.revenue-total strong { color: #27ae60; font-size: 1.2rem; }

/* ── 管理者備註 ── */
.modal-student { max-width: 520px; }
.notes-section { margin-top: 18px; border-top: 1px solid #eee; padding-top: 16px; }
.notes-label { display: block; font-size: .82rem; color: #555; font-weight: 600; margin-bottom: 8px; }
.notes-textarea {
  width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px;
  font-size: .88rem; font-family: inherit; resize: vertical; outline: none;
  transition: border-color .2s; box-sizing: border-box; color: #333; line-height: 1.6;
}
.notes-textarea:focus { border-color: #8b1a2b; }
.notes-loading { font-size: .85rem; color: #aaa; padding: 10px 0; }
.notes-actions { display: flex; align-items: center; gap: 12px; margin-top: 10px; }
.notes-saved-msg { font-size: .82rem; color: #27ae60; font-weight: 600; }

/* ── 學習進度 / 成就紀錄 ── */
.mono-cell   { font-family: monospace; font-size: .8rem; color: #555; }
.center-cell { text-align: center; color: #444; }
.course-tag  { display: inline-block; padding: 2px 8px; border-radius: 8px; font-size: .75rem; font-weight: 600; background: #f0ebe5; color: #6b1220; }
.badge-tag   { display: inline-block; padding: 2px 10px; border-radius: 10px; font-size: .75rem; font-weight: 600; }
.level-tags  { display: flex; gap: 4px; flex-wrap: wrap; }
.level-tag   { display: inline-block; padding: 1px 8px; border-radius: 8px; font-size: .75rem; font-weight: 700; background: #e8f4fd; color: #2980b9; }
.unlocked-ids { display: flex; gap: 4px; flex-wrap: wrap; max-width: 320px; }
.ach-chip    { display: inline-block; padding: 1px 7px; border-radius: 6px; font-size: .72rem; background: #f3e5f5; color: #7b1fa2; white-space: nowrap; }
.ach-more    { font-size: .75rem; color: #999; align-self: center; }
.badge-tag.badge       { background: #fff3e0; color: #e67e22; }
.badge-tag.certificate { background: #e8f8f0; color: #27ae60; }
.badge-tag.milestone   { background: #f3e5f5; color: #8e44ad; }

/* ── 分頁 ── */
.pagination { display: flex; align-items: center; justify-content: center; gap: 14px; padding: 16px 0 4px; }
.pg-btn {
  padding: 6px 18px; border: 1px solid #ddd; border-radius: 7px; background: #fff;
  color: #555; font-size: .85rem; cursor: pointer; transition: all .2s;
}
.pg-btn:hover:not(:disabled) { border-color: #8b1a2b; color: #8b1a2b; }
.pg-btn:disabled { opacity: .4; cursor: default; }
.pg-info { font-size: .85rem; color: #777; }

/* ── 公告管理 ── */
.ann-list { display: flex; flex-direction: column; gap: 12px; }
.ann-row {
  background: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.ann-row-main { flex: 1; min-width: 0; }
.ann-row-top  { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
.ann-title    { font-weight: 700; font-size: .95rem; color: #222; margin-bottom: 4px; }
.ann-content-preview {
  font-size: .82rem; color: #666; line-height: 1.5;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 600px;
}
.ann-meta { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 8px; font-size: .76rem; color: #999; }
.ann-row-actions { display: flex; gap: 6px; align-items: center; flex-shrink: 0; }

/* 公告標籤 */
.ann-type-tag, .ann-mode-tag, .ann-tier-tag, .ann-status {
  display: inline-block; padding: 2px 9px; border-radius: 9px; font-size: .73rem; font-weight: 600;
}
.ann-type-tag.info        { background: #e8f4fd; color: #2980b9; }
.ann-type-tag.warning     { background: #fff3e0; color: #e67e22; }
.ann-type-tag.promo       { background: #e8f8f0; color: #27ae60; }
.ann-type-tag.maintenance { background: #f3e5f5; color: #8e44ad; }
.ann-mode-tag.banner      { background: #fdf5f5; color: #8b1a2b; }
.ann-mode-tag.modal       { background: #f0f0f0; color: #555; }
.ann-mode-tag.ticker      { background: #fffde7; color: #f57f17; }
.ann-tier-tag.all         { background: #f0f0f0; color: #666; }
.ann-tier-tag.free        { background: #f0f0f0; color: #777; }
.ann-tier-tag.basic       { background: #e8f4fd; color: #2980b9; }
.ann-tier-tag.premium     { background: #f3e5f5; color: #8e44ad; }
.ann-status.on  { color: #27ae60; font-weight: 700; }
.ann-status.off { color: #bbb; }

/* 公告表單 */
.form-row-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; }
.form-check  { display: flex; align-items: center; }
.check-label { display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: .88rem; color: #444; }
.check-label input[type="checkbox"] { width: 16px; height: 16px; cursor: pointer; accent-color: #8b1a2b; }
.field-textarea { width: 100%; border: 1px solid #ddd; border-radius: 8px; padding: 9px 12px; font-size: .88rem; resize: vertical; font-family: inherit; }
.field-textarea:focus { outline: none; border-color: #8b1a2b; }
.field-select { width: 100%; border: 1px solid #ddd; border-radius: 8px; padding: 9px 12px; font-size: .88rem; background: #fff; }
.field-select:focus { outline: none; border-color: #8b1a2b; }
.req { color: #e74c3c; }
.btn-danger { background: #fde8e8 !important; color: #c0392b !important; }
.btn-danger:hover { background: #f5c6c6 !important; }

/* ── 優惠碼管理 ── */
.table-wrap { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; font-size: .85rem; }
.data-table th { text-align: left; padding: 10px 14px; background: #f9f5f0; color: #6b1220; font-weight: 700; font-size: .78rem; border-bottom: 2px solid #e9e3da; white-space: nowrap; }
.data-table td { padding: 10px 14px; border-bottom: 1px solid #f0ece6; color: #444; vertical-align: middle; }
.data-table tr:hover td { background: #fdfaf6; }
.code-tag { background: #f0ebe5; border: 1px solid #e0d8d0; border-radius: 5px; padding: 2px 8px; font-size: .82rem; color: #5a3020; letter-spacing: .5px; }
.tag-pill  { display: inline-block; padding: 2px 10px; border-radius: 10px; font-size: .75rem; font-weight: 600; }
.tag-purple { background: #f3e5f5; color: #8e44ad; }
.status-pill { display: inline-block; padding: 3px 10px; border-radius: 10px; font-size: .75rem; font-weight: 700; }
.status-on  { background: #e8f8f0; color: #27ae60; }
.status-off { background: #f0f0f0; color: #aaa; }
.text-muted { color: #bbb; }
.row-actions { display: flex; gap: 6px; }
.amount-cell { font-weight: 700; color: #27ae60; }
.section-subtitle { font-size: 1.05rem; font-weight: 700; color: #6b1220; margin: 28px 0 8px; }
.referral-section { margin-top: 32px; }
.referral-note { font-size: .82rem; color: #888; margin-bottom: 14px; }
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
@media (max-width: 600px) { .form-row-2 { grid-template-columns: 1fr; } }
</style>
