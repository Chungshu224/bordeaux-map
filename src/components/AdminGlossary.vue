<template>
  <div class="ag-root">

    <!-- 頂部工具列 -->
    <div class="ag-toolbar">
      <!-- 產區篩選 -->
      <div class="ag-filter-group">
        <button
          v-for="r in regionOptions"
          :key="r.key"
          :class="['ag-region-btn', { active: filterRegion === r.key }]"
          @click="filterRegion = r.key; page = 1"
        >{{ r.icon }} {{ r.label }}</button>
      </div>

      <!-- 類別篩選 -->
      <select v-model="filterCategory" class="ag-select" @change="page = 1">
        <option value="">全部類別</option>
        <option v-for="c in categoryOptions" :key="c.key" :value="c.key">{{ c.label }}</option>
      </select>

      <!-- 搜尋 -->
      <input
        v-model.trim="searchQ"
        class="ag-search"
        type="search"
        placeholder="搜尋詞條…"
        @input="page = 1"
      />

      <!-- 新增按鈕 -->
      <button class="ag-btn-add" @click="openForm(null)">＋ 新增詞條</button>
    </div>

    <!-- 表格 -->
    <div v-if="loading" class="ag-state">載入中…</div>
    <div v-else-if="pageItems.length === 0" class="ag-state ag-empty">沒有符合的詞條</div>
    <div v-else class="ag-table-wrap">
      <table class="ag-table">
        <thead>
          <tr>
            <th>產區</th>
            <th>中文</th>
            <th>English</th>
            <th>第三語</th>
            <th>類別</th>
            <th class="ag-def-col">說明</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pageItems" :key="item.id">
            <td><span :class="['region-badge', `region-${item.region}`]">{{ regionLabel(item.region) }}</span></td>
            <td class="fw-bold">{{ item.zh }}</td>
            <td class="text-it">{{ item.en }}</td>
            <td class="text-it text-muted">{{ itemLang3(item) || '—' }}</td>
            <td><span :class="['cat-badge', `cat-${item.category}`]">{{ catLabel(item.category) }}</span></td>
            <td class="ag-def-col text-sm text-muted">{{ item.definition.slice(0, 60) }}{{ item.definition.length > 60 ? '…' : '' }}</td>
            <td class="ag-actions">
              <button class="ag-btn-edit" @click="openForm(item)" title="編輯">✏️</button>
              <button class="ag-btn-del" @click="confirmDelete(item)" title="刪除">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 分頁 -->
    <div v-if="totalPages > 1" class="ag-pagination">
      <button :disabled="page <= 1" @click="page--">◀</button>
      <span>{{ page }} / {{ totalPages }}（共 {{ filtered.length }} 筆）</span>
      <button :disabled="page >= totalPages" @click="page++">▶</button>
    </div>
    <div v-else-if="!loading" class="ag-count">共 {{ filtered.length }} 筆</div>

    <!-- ── 新增/編輯 Modal ── -->
    <Teleport to="body">
      <Transition name="ag-fade">
        <div v-if="showForm" class="ag-overlay" @click.self="showForm = false">
          <div class="ag-modal">
            <div class="ag-modal-header">
              <h3>{{ editId ? '編輯詞條' : '新增詞條' }}</h3>
              <button @click="showForm = false">✕</button>
            </div>
            <div class="ag-modal-body">

              <div class="ag-row2">
                <!-- 產區 -->
                <div class="ag-field">
                  <label>產區</label>
                  <select v-model="form.region" class="ag-input">
                    <option v-for="r in regionOptions" :key="r.key" :value="r.key">{{ r.icon }} {{ r.label }}</option>
                  </select>
                </div>
                <!-- 類別 -->
                <div class="ag-field">
                  <label>類別</label>
                  <select v-model="form.category" class="ag-input">
                    <option v-for="c in categoryOptions" :key="c.key" :value="c.key">{{ c.label }}</option>
                  </select>
                </div>
              </div>

              <div class="ag-row3">
                <!-- 中文 -->
                <div class="ag-field">
                  <label>中文 *</label>
                  <input v-model.trim="form.zh" class="ag-input" type="text" placeholder="例：卡本內蘇維翁" />
                </div>
                <!-- 英文 -->
                <div class="ag-field">
                  <label>English *</label>
                  <input v-model.trim="form.en" class="ag-input" type="text" placeholder="例：Cabernet Sauvignon" />
                </div>
                <!-- 第三語：依產區動態選擇欄位 -->
                <div class="ag-field" v-if="currentLang3().lang3">
                  <label>{{ currentLang3().lang3Label }}</label>
                  <input
                    v-model.trim="form[currentLang3().lang3]"
                    class="ag-input"
                    type="text"
                    :placeholder="`例：${currentLang3().lang3Label} 名稱`"
                  />
                </div>
                <div class="ag-field" v-else>
                  <label>第三語</label>
                  <input class="ag-input" type="text" disabled placeholder="產區無第三語" />
                </div>
              </div>

              <!-- 說明 -->
              <div class="ag-field">
                <label>中文說明 *</label>
                <textarea
                  v-model.trim="form.definition"
                  class="ag-input ag-textarea"
                  rows="4"
                  placeholder="請輸入對此名詞的說明…"
                ></textarea>
              </div>

              <!-- 錯誤提示 -->
              <p v-if="formError" class="ag-error">{{ formError }}</p>

            </div>
            <div class="ag-modal-footer">
              <button class="ag-btn-primary" @click="saveForm" :disabled="saving">
                {{ saving ? '儲存中…' : (editId ? '更新' : '新增') }}
              </button>
              <button class="ag-btn-ghost" @click="showForm = false">取消</button>
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
              <h3>確認刪除</h3>
              <button @click="deleteTarget = null">✕</button>
            </div>
            <div class="ag-modal-body">
              <p>確定要刪除詞條「<strong>{{ deleteTarget.zh }}</strong>」嗎？此操作無法還原。</p>
            </div>
            <div class="ag-modal-footer">
              <button class="ag-btn-danger" @click="doDelete" :disabled="saving">
                {{ saving ? '刪除中…' : '確認刪除' }}
              </button>
              <button class="ag-btn-ghost" @click="deleteTarget = null">取消</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

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

const filtered = computed(() => {
  let list = allItems.value.filter(i => i.region === filterRegion.value)
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
  if (!form.value.zh) { formError.value = '請填寫中文名稱'; return }
  if (!form.value.en) { formError.value = '請填寫英文名稱'; return }
  if (!form.value.definition) { formError.value = '請填寫說明'; return }

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
.ag-filter-group { display: flex; gap: 6px; }
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

.ag-select, .ag-search {
  padding: 7px 12px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 0.85rem;
  background: #fff;
  outline: none;
}
.ag-search { min-width: 180px; }

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
