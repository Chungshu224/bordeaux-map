<template>
  <div class="admin-dashboard">
    <!-- Header -->
    <header class="admin-header">
      <div class="admin-brand">
        <span class="brand-icon">🍷</span>
        <span class="brand-name">Wine Academy 後台管理</span>
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
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>
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
            <div class="price-row">
              <span class="price-label">初階</span>
              <span class="price-value">NT$ {{ c.price_basic.toLocaleString() }}</span>
              <span class="price-label ml">進階</span>
              <span class="price-value">NT$ {{ c.price_premium.toLocaleString() }}</span>
            </div>
            <div class="course-actions">
              <button class="btn-sm" @click="editCourse(c)">編輯價格</button>
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

    </main>

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

    <!-- 課程價格編輯彈窗 -->
    <div v-if="editingCourse" class="modal-overlay" @click.self="editingCourse = null">
      <div class="modal">
        <div class="modal-header">
          <h3>編輯課程：{{ editingCourse.name_zh }}</h3>
          <button @click="editingCourse = null">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>初階價格 (NT$)</label>
            <input v-model.number="editingCourse.price_basic" type="number" min="0" class="field-input" />
          </div>
          <div class="form-group">
            <label>進階價格 (NT$)</label>
            <input v-model.number="editingCourse.price_premium" type="number" min="0" class="field-input" />
          </div>
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
import { ref, computed, onMounted, watch } from 'vue'
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
]
const activeTab = ref('overview')

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
const courses      = ref([])
const editingCourse = ref(null)
const savingCourse  = ref(false)

async function loadCourses() {
  const { data } = await supabase.from('courses').select('*').order('id')
  courses.value = data ?? []
}

function editCourse(c) {
  editingCourse.value = { ...c }
}

async function saveCourse() {
  if (!editingCourse.value) return
  savingCourse.value = true
  try {
    await supabase.from('courses')
      .update({
        price_basic:   editingCourse.value.price_basic,
        price_premium: editingCourse.value.price_premium,
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
  // 安全檢查：非 admin 跳回首頁
  if (!authActions.isAdmin()) {
    router.replace('/')
    return
  }
  await Promise.all([loadStats(), loadStudents(), loadCourses(), loadRevenue()])
})

// 切換 tab 時自動載入
watch(activeTab, (tab) => {
  if (tab === 'progress'     && progressList.value.length === 0)     loadProgress(true)
  if (tab === 'achievements' && achievementsList.value.length === 0) loadAchievements()
})

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
  return { bordeaux: '波爾多', bourgogne: '布根地', italy: '義大利' }[id] ?? id
}
function courseFlag(id) {
  return { bordeaux: '🇫🇷', bourgogne: '🇫🇷', italy: '🇮🇹' }[id] ?? '🍷'
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
</style>
