<template>
  <div class="ag-root">

    <!-- 頂部工具列 -->
    <div class="ag-toolbar">
      <!-- 瀏覽模式切換 -->
      <div class="ag-view-toggle">
        <button
          :class="['ag-view-btn', { active: viewMode === 'region' }]"
          @click="viewMode = 'region'; page = 1"
        >{{ $t('common.admin.glossary.viewMode.region') }}</button>
        <button
          :class="['ag-view-btn', { active: viewMode === 'category' }]"
          @click="viewMode = 'category'"
        >{{ $t('common.admin.glossary.viewMode.category') }}</button>
      </div>

      <!-- 產區篩選（僅「依產區」模式） -->
      <div v-if="viewMode === 'region'" class="ag-filter-group">
        <button
          v-for="r in regionOptions"
          :key="r.key"
          :class="['ag-region-btn', { active: filterRegion === r.key && !isSearching, dimmed: isSearching }]"
          @click="filterRegion = r.key; page = 1; searchQ = ''"
        >{{ r.icon }} {{ r.label }}</button>
      </div>

      <!-- 類別篩選 -->
      <select v-model="filterCategory" class="ag-select" @change="page = 1">
        <option value="">{{ $t('common.admin.glossary.filterAllCats') }}</option>
        <option v-for="c in categoryOptions" :key="c.key" :value="c.key">{{ c.label }}</option>
      </select>

      <!-- 搜尋（跨全部產區） -->
      <div class="ag-search-wrap">
        <input
          v-model.trim="searchQ"
          class="ag-search"
          type="search"
          :placeholder="$t('common.admin.glossary.searchPlaceholder')"
          @input="page = 1"
        />
        <span v-if="isSearching" class="ag-search-hint">{{ $t('common.admin.glossary.searchingAllRegions') }}</span>
      </div>

      <!-- 新增按鈕 -->
      <button class="ag-btn-add" @click="openForm(null)">{{ $t('common.admin.glossary.addEntry') }}</button>
    </div>

    <!-- 批次工具列（選取後出現） -->
    <div v-if="selectedIds.size > 0 || batchRunning" class="ag-batch-bar">
      <span class="ag-batch-info">{{ $t('common.admin.glossary.batch.selected', { n: selectedIds.size }) }}</span>
      <button class="ag-btn-link" @click="clearSelection" :disabled="batchRunning">{{ $t('common.admin.glossary.batch.clearSelection') }}</button>
      <button v-if="!batchRunning" class="ag-btn-ai" :disabled="selectedIds.size === 0" @click="runBatchTranslate">
        {{ $t('common.admin.glossary.batch.translateBtn') }}
      </button>
      <button v-else class="ag-btn-cancel" @click="batchCancelRequested = true">{{ $t('common.admin.glossary.batch.cancel') }}</button>

      <!-- 進度條 -->
      <div v-if="batchRunning" class="ag-progress-wrap">
        <div class="ag-progress-track">
          <div class="ag-progress-bar" :style="{ width: batchProgressPct + '%' }"></div>
        </div>
        <span class="ag-progress-text">{{ $t('common.admin.glossary.batch.progress', { current: batchProgress.current, total: batchProgress.total, term: batchProgress.term || '…' }) }}</span>
      </div>
      <span v-else-if="batchSummary" :class="['ag-batch-summary', { 'is-error': batchSummary.startsWith('!') }]">{{ batchSummary.replace(/^!/, '') }}</span>
    </div>

    <!-- 表格：依產區模式 -->
    <template v-if="viewMode === 'region'">
      <div v-if="loading" class="ag-state">{{ $t('common.actions.loading') }}</div>
      <div v-else-if="pageItems.length === 0" class="ag-state ag-empty">{{ $t('common.admin.glossary.noResults') }}</div>
      <div v-else class="ag-table-wrap">
        <table class="ag-table">
          <thead>
            <tr>
              <th class="ag-check-col">
                <input
                  type="checkbox"
                  :checked="isAllOnPageSelected"
                  :indeterminate.prop="isPartialPageSelected"
                  @change="togglePageSelection($event.target.checked)"
                  :title="$t('common.admin.glossary.batch.selectAll')"
                />
              </th>
              <th>{{ $t('common.admin.glossary.th.region') }}</th>
              <th>{{ $t('common.admin.glossary.th.zh') }}</th>
              <th>{{ $t('common.admin.glossary.th.en') }}</th>
              <th>{{ $t('common.admin.glossary.th.lang3') }}</th>
              <th>{{ $t('common.admin.glossary.th.category') }}</th>
              <th class="ag-def-col">{{ $t('common.admin.glossary.th.definition') }}</th>
              <th>{{ $t('common.admin.glossary.th.actions') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in pageItems" :key="item.id" :class="{ 'is-selected': selectedIds.has(item.id) }">
              <td class="ag-check-col">
                <input
                  type="checkbox"
                  :checked="selectedIds.has(item.id)"
                  @change="toggleSelection(item.id, $event.target.checked)"
                />
              </td>
              <td><span :class="['region-badge', `region-${item.region}`]">{{ regionLabel(item.region) }}</span></td>
              <td class="fw-bold">{{ item.zh }}</td>
              <td class="text-it">{{ item.en }}</td>
              <td class="text-it text-muted">{{ itemLang3(item) || '—' }}</td>
              <td><span :class="['cat-badge', `cat-${item.category}`]">{{ catLabel(item.category) }}</span></td>
              <td class="ag-def-col text-sm text-muted">{{ item.definition.slice(0, 60) }}{{ item.definition.length > 60 ? '…' : '' }}</td>
              <td class="ag-actions">
                <button class="ag-btn-edit" @click="openForm(item)" :title="$t('common.admin.glossary.btn.edit')">✏️</button>
                <button class="ag-btn-del" @click="confirmDelete(item)" :title="$t('common.admin.glossary.btn.delete')">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 分頁 -->
      <div v-if="totalPages > 1" class="ag-pagination">
        <button :disabled="page <= 1" @click="page--">◀</button>
        <span>{{ $t('common.admin.glossary.pagination', { page, total: totalPages, count: filtered.length }) }}</span>
        <button :disabled="page >= totalPages" @click="page++">▶</button>
      </div>
      <div v-else-if="!loading" class="ag-count">{{ $t('common.admin.glossary.countOnly', { count: filtered.length }) }}</div>
    </template>

    <!-- 索引：依類別模式（跨全部產區） -->
    <template v-else>
      <div v-if="loading" class="ag-state">{{ $t('common.actions.loading') }}</div>
      <div v-else-if="groupedByCategory.length === 0" class="ag-state ag-empty">{{ $t('common.admin.glossary.noResults') }}</div>
      <div v-else class="ag-index">
        <div v-for="g in groupedByCategory" :key="g.key" class="ag-index-group">
          <button type="button" class="ag-index-header" @click="toggleGroupCollapse(g.key)">
            <span class="ag-index-header-label">{{ g.label }}</span>
            <span class="ag-index-header-count">{{ g.items.length }}</span>
            <span class="ag-index-caret">{{ collapsedGroups.has(g.key) ? '▸' : '▾' }}</span>
          </button>
          <ul v-show="!collapsedGroups.has(g.key)" class="ag-index-list">
            <li v-for="item in g.items" :key="item.id" class="ag-index-item">
              <span :class="['region-badge', `region-${item.region}`]">{{ regionLabel(item.region) }}</span>
              <span class="ag-index-zh">{{ item.zh }}</span>
              <span class="ag-index-en text-it text-muted">{{ item.en }}</span>
              <span v-if="itemLang3(item)" class="ag-index-lang3 text-it text-muted">{{ itemLang3(item) }}</span>
              <span class="ag-index-def text-sm text-muted">{{ item.definition.slice(0, 60) }}{{ item.definition.length > 60 ? '…' : '' }}</span>
              <span class="ag-index-actions">
                <button class="ag-btn-edit" @click="openForm(item)" :title="$t('common.admin.glossary.btn.edit')">✏️</button>
                <button class="ag-btn-del" @click="confirmDelete(item)" :title="$t('common.admin.glossary.btn.delete')">🗑️</button>
              </span>
            </li>
          </ul>
        </div>
        <div class="ag-count">{{ $t('common.admin.glossary.indexCount', { count: filtered.length, groups: groupedByCategory.length }) }}</div>
      </div>
    </template>

    <!-- ── 新增/編輯 Modal ── -->
    <Teleport to="body">
      <Transition name="ag-fade">
        <div v-if="showForm" class="ag-overlay" @click.self="showForm = false">
          <div class="ag-modal">
            <div class="ag-modal-header">
              <h3>{{ editId ? $t('common.admin.glossary.modal.editTitle') : $t('common.admin.glossary.modal.addTitle') }}</h3>
              <button @click="showForm = false" :aria-label="$t('common.actions.close')">✕</button>
            </div>
            <div class="ag-modal-body">

              <div class="ag-row2">
                <!-- 產區 -->
                <div class="ag-field">
                  <label>{{ $t('common.admin.glossary.field.region') }}</label>
                  <select v-model="form.region" class="ag-input">
                    <option v-for="r in regionOptions" :key="r.key" :value="r.key">{{ r.icon }} {{ r.label }}</option>
                  </select>
                </div>
                <!-- 類別 -->
                <div class="ag-field">
                  <label>{{ $t('common.admin.glossary.field.category') }}</label>
                  <select v-model="form.category" class="ag-input">
                    <option v-for="c in categoryOptions" :key="c.key" :value="c.key">{{ c.label }}</option>
                  </select>
                </div>
              </div>

              <div class="ag-row3">
                <!-- 中文 -->
                <div class="ag-field">
                  <label>{{ $t('common.admin.glossary.field.zh') }}</label>
                  <input v-model.trim="form.zh" class="ag-input" type="text" :placeholder="$t('common.admin.glossary.field.zhPlaceholder')" />
                </div>
                <!-- 英文 -->
                <div class="ag-field">
                  <label>{{ $t('common.admin.glossary.field.en') }}</label>
                  <input v-model.trim="form.en" class="ag-input" type="text" :placeholder="$t('common.admin.glossary.field.enPlaceholder')" />
                </div>
                <!-- 第三語：依產區動態選擇欄位 -->
                <div class="ag-field" v-if="currentLang3().lang3">
                  <label>{{ currentLang3().lang3Label }}</label>
                  <input
                    v-model.trim="form[currentLang3().lang3]"
                    class="ag-input"
                    type="text"
                    :placeholder="$t('common.admin.glossary.field.lang3Placeholder', { label: currentLang3().lang3Label })"
                  />
                </div>
                <div class="ag-field" v-else>
                  <label>{{ $t('common.admin.glossary.field.lang3') }}</label>
                  <input class="ag-input" type="text" disabled :placeholder="$t('common.admin.glossary.field.lang3Disabled')" />
                </div>
              </div>

              <!-- 說明 -->
              <div class="ag-field">
                <label>{{ $t('common.admin.glossary.field.definition') }}</label>
                <textarea
                  v-model.trim="form.definition"
                  class="ag-input ag-textarea"
                  rows="4"
                  :placeholder="$t('common.admin.glossary.field.definitionPlaceholder')"
                ></textarea>
              </div>

              <!-- AI 自動翻譯 -->
              <div class="ag-ai-row">
                <button
                  type="button"
                  class="ag-btn-ai"
                  @click="runAiTranslate"
                  :disabled="aiTranslating"
                  :title="$t('common.admin.glossary.ai.hint')"
                >
                  {{ aiTranslating ? $t('common.admin.glossary.ai.translating') : $t('common.admin.glossary.ai.button') }}
                </button>
                <span v-if="aiMessage" :class="['ag-ai-msg', { 'is-error': aiIsError }]">{{ aiMessage }}</span>
              </div>

              <!-- 錯誤提示 -->
              <p v-if="formError" class="ag-error">{{ formError }}</p>

            </div>
            <div class="ag-modal-footer">
              <button class="ag-btn-primary" @click="saveForm" :disabled="saving">
                {{ saving ? $t('common.admin.glossary.modal.saving') : (editId ? $t('common.admin.glossary.modal.update') : $t('common.admin.glossary.modal.create')) }}
              </button>
              <button class="ag-btn-ghost" @click="showForm = false">{{ $t('common.actions.cancel') }}</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ── 刪除確認 Modal ── -->
    <Teleport to="body">
      <Transition name="ag-fade">
        <div v-if="deleteTarget" class="ag-overlay" @click.self="deleteTarget = null">
          <div class="ag-modal ag-modal-sm">
            <div class="ag-modal-header">
              <h3>{{ $t('common.admin.glossary.modal.deleteTitle') }}</h3>
              <button @click="deleteTarget = null" :aria-label="$t('common.actions.close')">✕</button>
            </div>
            <div class="ag-modal-body">
              <p v-html="$t('common.admin.glossary.modal.deleteConfirm', { zh: `<strong>${escapeHtml(deleteTarget.zh)}</strong>` })"></p>
            </div>
            <div class="ag-modal-footer">
              <button class="ag-btn-danger" @click="doDelete" :disabled="saving">
                {{ saving ? $t('common.admin.glossary.modal.deleting') : $t('common.admin.glossary.modal.confirmDelete') }}
              </button>
              <button class="ag-btn-ghost" @click="deleteTarget = null">{{ $t('common.actions.cancel') }}</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '../lib/supabaseClient.js'

const { t } = useI18n()

function escapeHtml(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

// ── 設定常數 ─────────────────────────────────────────────────
const regionOptions = [
  { key: 'bordeaux',   label: '波爾多',   icon: '🍷', lang3: 'fr', lang3Label: 'Français' },
  { key: 'bourgogne',  label: '布根地',   icon: '🍇', lang3: 'fr', lang3Label: 'Français' },
  { key: 'italy',      label: '義大利',   icon: '🍾', lang3: 'it', lang3Label: 'Italiano' },
  { key: 'spain',      label: '西班牙',   icon: '🇪🇸', lang3: 'es', lang3Label: 'Español' },
  { key: 'portugal',   label: '葡萄牙',   icon: '🇵🇹', lang3: 'pt', lang3Label: 'Português' },
  { key: 'germany',    label: '德國',       icon: '🇩🇪', lang3: 'de', lang3Label: 'Deutsch' },
  { key: 'hungary',    label: '匈牙利',   icon: '🇭🇺', lang3: 'hu', lang3Label: 'Magyar' },
  { key: 'loire',      label: '羅亞爾河', icon: '🏰', lang3: 'fr', lang3Label: 'Français' },
  { key: 'california', label: '加州',       icon: '🌉', lang3: '',   lang3Label: '' },
  { key: 'australia',  label: '澳洲',       icon: '🦘', lang3: '',   lang3Label: '' },
  { key: 'newzealand', label: '紐西蘭',   icon: '🥝', lang3: '',   lang3Label: '' },
]

const categoryOptions = [
  { key: 'grape',       label: '🍇 品種' },
  { key: 'region',      label: '🗺️ 產區' },
  { key: 'winemaking',  label: '🍾 釀造' },
  { key: 'tasting',     label: '👃 品飲' },
  { key: 'appellation', label: '📜 法規' },
  { key: 'general',     label: '📌 一般' },
]

function regionLabel(key) {
  const r = regionOptions.find(x => x.key === key)
  return r ? r.label : key
}
function currentLang3() {
  return regionOptions.find(r => r.key === form.value.region) || { lang3: '', lang3Label: '' }
}
function itemLang3(item) {
  const r = regionOptions.find(x => x.key === item.region)
  if (!r || !r.lang3) return ''
  return item[r.lang3] || ''
}
function catLabel(key) {
  return { grape:'品種', region:'產區', winemaking:'釀造', tasting:'品飲', appellation:'法規', general:'一般' }[key] || key
}

// ── 資料狀態 ─────────────────────────────────────────────────
const loading   = ref(false)
const allItems  = ref([])

async function loadAll() {
  loading.value = true
  const { data, error } = await supabase
    .from('wine_glossary')
    .select('id, region, zh, en, fr, it, es, pt, de, hu, definition, category')
    .order('region')
    .order('zh')
  if (!error) allItems.value = data ?? []
  loading.value = false
}

onMounted(loadAll)

// ── 篩選狀態 ─────────────────────────────────────────────────
const filterRegion   = ref('bordeaux')
const filterCategory = ref('')
const searchQ        = ref('')
const page           = ref(1)
const PAGE_SIZE      = 20

// 瀏覽模式：'region' 依產區分頁瀏覽／'category' 依類別索引（跨全部產區）
const viewMode = ref('region')

const isSearching  = computed(() => searchQ.value.length > 0)
const useAllRegions = computed(() => isSearching.value || viewMode.value === 'category')

const filtered = computed(() => {
  let list = useAllRegions.value
    ? allItems.value
    : allItems.value.filter(i => i.region === filterRegion.value)
  if (filterCategory.value) list = list.filter(i => i.category === filterCategory.value)
  const q = searchQ.value.toLowerCase()
  if (q) list = list.filter(i =>
    i.zh.toLowerCase().includes(q) ||
    i.en.toLowerCase().includes(q) ||
    (i.fr || '').toLowerCase().includes(q) ||
    (i.it || '').toLowerCase().includes(q) ||
    (i.es || '').toLowerCase().includes(q) ||
    (i.pt || '').toLowerCase().includes(q) ||
    (i.de || '').toLowerCase().includes(q) ||
    (i.hu || '').toLowerCase().includes(q) ||
    i.definition.toLowerCase().includes(q)
  )
  return list
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / PAGE_SIZE)))
const pageItems  = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return filtered.value.slice(start, start + PAGE_SIZE)
})

// ── 依類別索引（書本索引概念：類別為主分組，產區為每筆的標籤） ──
const collapsedGroups = ref(new Set())

function toggleGroupCollapse(key) {
  const next = new Set(collapsedGroups.value)
  if (next.has(key)) next.delete(key); else next.add(key)
  collapsedGroups.value = next
}

const groupedByCategory = computed(() => {
  const groups = new Map()
  for (const item of filtered.value) {
    if (!groups.has(item.category)) groups.set(item.category, [])
    groups.get(item.category).push(item)
  }
  return categoryOptions
    .map(c => ({
      key: c.key,
      label: c.label,
      items: (groups.get(c.key) || []).slice().sort((a, b) =>
        a.region.localeCompare(b.region) || a.zh.localeCompare(b.zh)
      ),
    }))
    .filter(g => g.items.length > 0)
})

// ── 表單狀態 ─────────────────────────────────────────────────
const showForm  = ref(false)
const editId    = ref(null)
const saving    = ref(false)
const formError = ref('')

const emptyForm = () => ({
  region: filterRegion.value,
  zh: '', en: '', fr: '', it: '', es: '', pt: '', de: '', hu: '',
  definition: '',
  category: 'grape',
})

const form = ref(emptyForm())

function openForm(item) {
  formError.value = ''
  if (item) {
    editId.value = item.id
    form.value = {
      region:     item.region,
      zh:         item.zh,
      en:         item.en,
      fr:         item.fr || '',
      it:         item.it || '',
      es:         item.es || '',
      pt:         item.pt || '',
      de:         item.de || '',
      hu:         item.hu || '',
      definition: item.definition,
      category:   item.category,
    }
  } else {
    editId.value = null
    form.value = emptyForm()
  }
  showForm.value = true
}

async function saveForm() {
  formError.value = ''
  if (!form.value.zh) { formError.value = t('common.admin.glossary.validate.zhRequired'); return }
  if (!form.value.en) { formError.value = t('common.admin.glossary.validate.enRequired'); return }
  if (!form.value.definition) { formError.value = t('common.admin.glossary.validate.defRequired'); return }

  saving.value = true
  const payload = {
    region:     form.value.region,
    zh:         form.value.zh,
    en:         form.value.en,
    fr:         form.value.fr || '',
    it:         form.value.it || '',
    es:         form.value.es || '',
    pt:         form.value.pt || '',
    de:         form.value.de || '',
    hu:         form.value.hu || '',
    definition: form.value.definition,
    category:   form.value.category,
    updated_at: new Date().toISOString(),
  }

  let error
  if (editId.value) {
    ;({ error } = await supabase.from('wine_glossary').update(payload).eq('id', editId.value))
  } else {
    ;({ error } = await supabase.from('wine_glossary').insert(payload))
  }

  saving.value = false
  if (error) { formError.value = error.message; return }
  showForm.value = false
  await loadAll()
}

// ── 刪除 ─────────────────────────────────────────────────────
const deleteTarget = ref(null)

function confirmDelete(item) {
  deleteTarget.value = item
}

async function doDelete() {
  if (!deleteTarget.value) return
  saving.value = true
  const { error } = await supabase.from('wine_glossary').delete().eq('id', deleteTarget.value.id)
  saving.value = false
  deleteTarget.value = null
  if (!error) await loadAll()
}

// ── AI 自動翻譯 ────────────────────────────────────────
const aiTranslating = ref(false)
const aiMessage     = ref('')
const aiIsError     = ref(false)

async function runAiTranslate() {
  aiMessage.value = ''
  aiIsError.value = false

  if (!form.value.zh) {
    aiMessage.value = t('common.admin.glossary.ai.zhRequired')
    aiIsError.value = true
    return
  }

  // 决定要翻譯哪些語言：en + 當前產區的第三語（如果有）
  const targets = ['en']
  const lang3 = currentLang3().lang3
  if (lang3) targets.push(lang3)

  aiTranslating.value = true
  try {
    const { data: sessionData } = await supabase.auth.getSession()
    const accessToken = sessionData?.session?.access_token
    if (!accessToken) throw new Error('未登入')

    const res = await fetch('/api/translate-glossary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        zh: form.value.zh,
        definition: form.value.definition || '',
        region: form.value.region,
        targets,
      }),
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(json?.message || `HTTP ${res.status}`)

    const tr = json.translations || {}
    // 已填寫的欄位不覆蓋，只補空
    if (tr.en && !form.value.en) form.value.en = tr.en
    if (lang3 && tr[lang3] && !form.value[lang3]) form.value[lang3] = tr[lang3]

    aiMessage.value = t('common.admin.glossary.ai.success')
    aiIsError.value = false
  } catch (err) {
    aiMessage.value = t('common.admin.glossary.ai.failed', { msg: err?.message || 'unknown' })
    aiIsError.value = true
  } finally {
    aiTranslating.value = false
  }
}

// ── 批次 AI 補齊翻譯 ─────────────────────────────────────
const selectedIds          = ref(new Set())
const batchRunning         = ref(false)
const batchCancelRequested = ref(false)
const batchProgress        = ref({ current: 0, total: 0, term: '' })
const batchSummary         = ref('')

const isAllOnPageSelected = computed(() =>
  pageItems.value.length > 0 && pageItems.value.every(i => selectedIds.value.has(i.id))
)
const isPartialPageSelected = computed(() => {
  const sel = pageItems.value.filter(i => selectedIds.value.has(i.id)).length
  return sel > 0 && sel < pageItems.value.length
})
const batchProgressPct = computed(() => {
  const { current, total } = batchProgress.value
  return total > 0 ? Math.round((current / total) * 100) : 0
})

function toggleSelection(id, checked) {
  // Vue 3 reactivity: replace Set instance to trigger updates
  const next = new Set(selectedIds.value)
  if (checked) next.add(id); else next.delete(id)
  selectedIds.value = next
}
function togglePageSelection(checked) {
  const next = new Set(selectedIds.value)
  for (const item of pageItems.value) {
    if (checked) next.add(item.id); else next.delete(item.id)
  }
  selectedIds.value = next
}
function clearSelection() {
  selectedIds.value = new Set()
  batchSummary.value = ''
}

// 計算一筆欄位缺失哪些語言
function missingLangsForItem(item) {
  const r = regionOptions.find(x => x.key === item.region)
  const targets = []
  if (!item.en || !item.en.trim()) targets.push('en')
  if (r && r.lang3 && (!item[r.lang3] || !item[r.lang3].trim())) targets.push(r.lang3)
  return targets
}

async function translateOne(item, targets) {
  const { data: sessionData } = await supabase.auth.getSession()
  const accessToken = sessionData?.session?.access_token
  if (!accessToken) throw new Error('未登入')

  const res = await fetch('/api/translate-glossary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      zh: item.zh,
      definition: item.definition || '',
      region: item.region,
      targets,
    }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json?.message || `HTTP ${res.status}`)
  return json.translations || {}
}

async function runBatchTranslate() {
  if (selectedIds.value.size === 0) return

  // 篩選出需要翻譯的項目
  const candidates = allItems.value
    .filter(i => selectedIds.value.has(i.id))
    .map(i => ({ item: i, missing: missingLangsForItem(i) }))
    .filter(x => x.missing.length > 0)

  if (candidates.length === 0) {
    batchSummary.value = '!' + t('common.admin.glossary.batch.nothingToDo')
    return
  }

  if (!confirm(t('common.admin.glossary.batch.confirmRun', { n: candidates.length }))) return

  batchRunning.value = true
  batchCancelRequested.value = false
  batchSummary.value = ''
  batchProgress.value = { current: 0, total: candidates.length, term: '' }

  let ok = 0, fail = 0, skip = 0

  for (let i = 0; i < candidates.length; i++) {
    if (batchCancelRequested.value) break
    const { item, missing } = candidates[i]
    batchProgress.value = { current: i, total: candidates.length, term: item.zh }

    try {
      const tr = await translateOne(item, missing)
      const update = {}
      for (const code of missing) {
        if (tr[code]) update[code] = tr[code]
      }
      if (Object.keys(update).length === 0) {
        skip++
      } else {
        update.updated_at = new Date().toISOString()
        const { error } = await supabase.from('wine_glossary').update(update).eq('id', item.id)
        if (error) throw new Error(error.message)
        // 本地同步（避免重新 fetch）
        Object.assign(item, update)
        ok++
      }
    } catch (err) {
      console.warn('[batch translate]', item.zh, err)
      fail++
    }

    batchProgress.value = { current: i + 1, total: candidates.length, term: item.zh }
  }

  batchRunning.value = false
  if (batchCancelRequested.value) {
    batchSummary.value = t('common.admin.glossary.batch.cancelled', { n: ok + fail + skip })
  } else {
    batchSummary.value = t('common.admin.glossary.batch.completed', { ok, fail, skip })
  }
  batchCancelRequested.value = false
}
</script>

<style scoped>
/* ── 根容器 ── */
.ag-root { display: flex; flex-direction: column; gap: 16px; }

/* ── 頂部工具列 ── */
.ag-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.ag-view-toggle {
  display: flex;
  gap: 2px;
  padding: 3px;
  background: #f5f0e8;
  border-radius: 10px;
}
.ag-view-btn {
  padding: 6px 14px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: #7a6a5a;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.ag-view-btn.active { background: #fff; color: #2c1a0e; box-shadow: 0 1px 3px rgba(0,0,0,0.12); }

.ag-filter-group { display: flex; gap: 6px; flex-wrap: wrap; }
.ag-region-btn {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1.5px solid #ddd;
  background: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.ag-region-btn.active { background: #2c1a0e; color: #f5e6c8; border-color: #2c1a0e; }
.ag-region-btn.dimmed { opacity: 0.5; }

.ag-select, .ag-search {
  padding: 7px 12px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 0.85rem;
  background: #fff;
  outline: none;
}
.ag-search-wrap { display: flex; align-items: center; gap: 8px; }
.ag-search { min-width: 180px; }
.ag-search-hint {
  font-size: 0.75rem;
  font-weight: 700;
  color: #a8872d;
  white-space: nowrap;
}

.ag-btn-add {
  margin-left: auto;
  padding: 7px 18px;
  background: #c9a84c;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
}
.ag-btn-add:hover { background: #a8872d; }

/* ── 表格 ── */
.ag-table-wrap { overflow-x: auto; }
.ag-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.ag-table th {
  background: #faf7f2;
  padding: 10px 12px;
  text-align: left;
  font-size: 0.78rem;
  font-weight: 700;
  color: #7a6a5a;
  border-bottom: 2px solid #e8e0d0;
  white-space: nowrap;
}
.ag-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #f0ebe0;
  vertical-align: middle;
}
.ag-def-col { max-width: 250px; }
.fw-bold  { font-weight: 700; }
.text-it  { font-style: italic; }
.text-muted { color: #9a8677; }
.text-sm  { font-size: 0.78rem; }

.region-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 700;
}
.region-bordeaux   { background: #fef3e2; color: #a04000; }
.region-bourgogne  { background: #f3e5f5; color: #7b1fa2; }
.region-italy      { background: #e8f5e9; color: #2e7d32; }
.region-spain      { background: #fff3e0; color: #c62828; }
.region-portugal   { background: #fce4ec; color: #ad1457; }
.region-germany    { background: #ede7f6; color: #4527a0; }
.region-hungary    { background: #fffde7; color: #ef6c00; }
.region-loire      { background: #e0f7fa; color: #006064; }
.region-california { background: #fff8e1; color: #ef6c00; }
.region-australia  { background: #ffebee; color: #c62828; }
.region-newzealand { background: #e8f5e9; color: #1b5e20; }

.cat-badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 10px;
}
.cat-grape        { background: #e8f5e9; color: #2e7d32; }
.cat-region       { background: #e3f2fd; color: #1565c0; }
.cat-winemaking   { background: #fff3e0; color: #e65100; }
.cat-tasting      { background: #f3e5f5; color: #7b1fa2; }
.cat-appellation  { background: #fce4ec; color: #880e4f; }
.cat-general      { background: #f5f5f5; color: #616161; }

.ag-actions { display: flex; gap: 6px; white-space: nowrap; }
.ag-btn-edit, .ag-btn-del {
  background: none;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.15s;
}
.ag-btn-edit:hover { background: #fff8e1; }
.ag-btn-del:hover  { background: #fce4ec; }

/* ── 分頁 ── */
.ag-pagination {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
  color: #5a4a3a;
}
.ag-pagination button {
  padding: 5px 12px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 0.9rem;
}
.ag-pagination button:disabled { opacity: 0.4; cursor: default; }
.ag-count { font-size: 0.8rem; color: #9a8677; }

/* ── 狀態 ── */
.ag-state { padding: 40px; text-align: center; color: #9a8677; font-size: 0.9rem; }

/* ── 依類別索引 ── */
.ag-index { display: flex; flex-direction: column; gap: 10px; }
.ag-index-group {
  border: 1px solid #f0ebe0;
  border-radius: 10px;
  overflow: hidden;
}
.ag-index-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #faf7f2;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 0.88rem;
  font-weight: 700;
  color: #2c1a0e;
}
.ag-index-header-count {
  background: #e8e0d0;
  color: #7a6a5a;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 1px 8px;
  border-radius: 10px;
}
.ag-index-caret { margin-left: auto; color: #9a8677; }
.ag-index-list { list-style: none; margin: 0; padding: 0; }
.ag-index-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-top: 1px solid #f0ebe0;
  font-size: 0.85rem;
  flex-wrap: wrap;
}
.ag-index-zh { font-weight: 700; }
.ag-index-def { flex: 1 1 200px; min-width: 0; }
.ag-index-actions { display: flex; gap: 6px; margin-left: auto; white-space: nowrap; }

/* ── Modal ── */
.ag-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.ag-modal {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}
.ag-modal-sm { max-width: 420px; }

.ag-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid #f0ebe0;
  flex-shrink: 0;
}
.ag-modal-header h3 { font-size: 1rem; font-weight: 700; margin: 0; }
.ag-modal-header button {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #9a8677;
}

.ag-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ag-modal-footer {
  display: flex;
  gap: 10px;
  padding: 16px 24px;
  border-top: 1px solid #f0ebe0;
  flex-shrink: 0;
}

/* 表單 grid */
.ag-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.ag-row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }

.ag-field { display: flex; flex-direction: column; gap: 5px; }
.ag-field label { font-size: 0.78rem; font-weight: 700; color: #7a6a5a; }
.ag-input {
  padding: 9px 12px;
  border: 1.5px solid #e0d5c5;
  border-radius: 8px;
  font-size: 0.9rem;
  background: #faf7f2;
  color: #2c1a0e;
  outline: none;
  transition: border-color 0.2s;
}
.ag-input:focus { border-color: #c9a84c; }
.ag-textarea { resize: vertical; min-height: 90px; font-family: inherit; line-height: 1.6; }

.ag-error { color: #c62828; font-size: 0.82rem; margin: 0; }

/* ── AI 自動翻譯 ── */
.ag-ai-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.ag-btn-ai {
  padding: 7px 16px;
  background: linear-gradient(135deg, #6a3093, #a044ff);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.1s;
}
.ag-btn-ai:hover:not(:disabled) { opacity: 0.9; }
.ag-btn-ai:active:not(:disabled) { transform: translateY(1px); }
.ag-btn-ai:disabled { opacity: 0.55; cursor: not-allowed; }
.ag-ai-msg { font-size: 0.78rem; color: #2e7d32; }
.ag-ai-msg.is-error { color: #c62828; }

/* ── 批次工具列 ── */
.ag-batch-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: #faf5ff;
  border: 1px solid #e0c8f5;
  border-radius: 10px;
  flex-wrap: wrap;
}
.ag-batch-info {
  font-weight: 700;
  color: #6a3093;
  font-size: 0.85rem;
}
.ag-btn-link {
  background: none;
  border: none;
  color: #6a3093;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
}
.ag-btn-link:disabled { opacity: 0.5; cursor: not-allowed; text-decoration: none; }
.ag-btn-cancel {
  padding: 6px 14px;
  background: #fff;
  border: 1.5px solid #c62828;
  color: #c62828;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
}
.ag-progress-wrap {
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 240px;
}
.ag-progress-track {
  height: 8px;
  background: #ece2f5;
  border-radius: 4px;
  overflow: hidden;
}
.ag-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #6a3093, #a044ff);
  border-radius: 4px;
  transition: width 0.25s ease;
}
.ag-progress-text { font-size: 0.75rem; color: #6a3093; }
.ag-batch-summary { font-size: 0.82rem; color: #2e7d32; font-weight: 600; }
.ag-batch-summary.is-error { color: #c62828; }

/* ── 勾選欄 ── */
.ag-check-col { width: 36px; text-align: center; }
.ag-check-col input[type="checkbox"] { cursor: pointer; transform: scale(1.1); }
.ag-table tr.is-selected { background: #faf5ff; }

.ag-btn-primary {
  padding: 9px 22px;
  background: #c9a84c;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
}
.ag-btn-primary:disabled { opacity: 0.6; cursor: default; }
.ag-btn-primary:not(:disabled):hover { background: #a8872d; }

.ag-btn-danger {
  padding: 9px 22px;
  background: #e53935;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
}
.ag-btn-danger:disabled { opacity: 0.6; cursor: default; }

.ag-btn-ghost {
  padding: 9px 22px;
  background: none;
  color: #7a6a5a;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
}
.ag-btn-ghost:hover { background: #f5f0e8; }

/* ── Transition ── */
.ag-fade-enter-active,
.ag-fade-leave-active { transition: opacity 0.2s; }
.ag-fade-enter-from,
.ag-fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .ag-row2, .ag-row3 { grid-template-columns: 1fr; }
}
</style>
