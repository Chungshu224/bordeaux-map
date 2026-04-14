<template>
  <!-- 浮動按鈕 -->
  <button class="glossary-fab" @click="open = true" title="三語名詞辭典">
    📖
    <span class="fab-label">辭典</span>
  </button>

  <!-- 覆蓋層 + 面板 -->
  <Teleport to="body">
    <Transition name="glossary-fade">
      <div v-if="open" class="glossary-overlay" @click.self="open = false">
        <div class="glossary-panel">

          <!-- Header -->
          <div class="gp-header">
            <div class="gp-title">
              <span class="gp-icon">📖</span>
              <span>葡萄酒三語辭典</span>
              <span class="gp-langs">中文 · English · Français</span>
            </div>
            <button class="gp-close" @click="open = false">✕</button>
          </div>

          <!-- Search -->
          <div class="gp-search-wrap">
            <input
              ref="searchInput"
              v-model.trim="query"
              class="gp-search"
              type="search"
              placeholder="搜尋中文、英文或法文名詞…"
              autocomplete="off"
              @keydown.escape="open = false"
            />
            <span v-if="query" class="gp-clear" @click="query = ''">✕</span>
          </div>

          <!-- Category filter -->
          <div class="gp-cats">
            <button
              v-for="cat in categories"
              :key="cat.key"
              class="gp-cat-btn"
              :class="{ active: activeCategory === cat.key }"
              @click="activeCategory = cat.key"
            >{{ cat.label }}</button>
          </div>

          <!-- Results -->
          <div class="gp-body" ref="bodyEl">
            <div v-if="loading" class="gp-state">載入中…</div>
            <div v-else-if="displayItems.length === 0" class="gp-state gp-empty">
              <span>找不到「{{ query }}」的相關名詞</span>
            </div>
            <template v-else>
              <div
                v-for="item in displayItems"
                :key="item.id"
                class="gp-item"
              >
                <div class="gp-terms">
                  <span class="term-zh" v-html="hl(item.zh)"></span>
                  <span class="term-sep">·</span>
                  <span class="term-en" v-html="hl(item.en)"></span>
                  <template v-if="item.fr">
                    <span class="term-sep">·</span>
                    <span class="term-fr" v-html="hl(item.fr)"></span>
                  </template>
                  <span :class="['cat-badge', `cat-${item.category}`]">{{ catLabel(item.category) }}</span>
                </div>
                <div class="gp-def">{{ item.definition }}</div>
              </div>
            </template>

            <!-- Load more -->
            <div v-if="hasMore" class="gp-more-wrap">
              <button class="gp-more-btn" @click="limit += 20">顯示更多</button>
            </div>
          </div>

          <!-- Footer hint -->
          <div class="gp-footer">
            共 {{ totalCount }} 筆 · 管理員可在後台新增詞條
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

// ── State ──────────────────────────────────────────────────
const open          = ref(false)
const query         = ref('')
const activeCategory = ref('all')
const loading       = ref(false)
const allItems      = ref([])
const limit         = ref(20)
const searchInput   = ref(null)
const bodyEl        = ref(null)

// ── Categories ─────────────────────────────────────────────
const categories = [
  { key: 'all',          label: '全部' },
  { key: 'grape',        label: '🍇 品種' },
  { key: 'region',       label: '🗺️ 產區' },
  { key: 'winemaking',   label: '🍾 釀造' },
  { key: 'tasting',      label: '👃 品飲' },
  { key: 'appellation',  label: '📜 法規' },
  { key: 'general',      label: '📌 一般' },
]

function catLabel(key) {
  return {
    grape: '品種', region: '產區', winemaking: '釀造',
    tasting: '品飲', appellation: '法規', general: '一般'
  }[key] || key
}

// ── Load all entries from Supabase ─────────────────────────
async function loadGlossary() {
  if (allItems.value.length > 0) return  // 已載入過
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('wine_glossary')
      .select('id, zh, en, fr, definition, category')
      .order('zh')
    if (error) throw error
    allItems.value = data ?? []
  } catch (err) {
    console.warn('[WineGlossary] load error', err)
  } finally {
    loading.value = false
  }
}

// ── Filter ─────────────────────────────────────────────────
const filtered = computed(() => {
  let list = allItems.value
  if (activeCategory.value !== 'all') {
    list = list.filter(i => i.category === activeCategory.value)
  }
  const q = query.value.toLowerCase()
  if (!q) return list
  return list.filter(i =>
    i.zh.toLowerCase().includes(q) ||
    i.en.toLowerCase().includes(q) ||
    (i.fr || '').toLowerCase().includes(q) ||
    i.definition.toLowerCase().includes(q)
  )
})

const totalCount   = computed(() => filtered.value.length)
const displayItems = computed(() => filtered.value.slice(0, limit.value))
const hasMore      = computed(() => filtered.value.length > limit.value)

// ── Highlight matched text ─────────────────────────────────
function hl(text) {
  const q = query.value.trim()
  if (!q || !text) return escHtml(text || '')
  try {
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    return escHtml(text).replace(re, m => `<mark class="hl">${m}</mark>`)
  } catch { return escHtml(text) }
}
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

// ── Watchers ───────────────────────────────────────────────
watch(open, async (val) => {
  if (val) {
    await loadGlossary()
    await nextTick()
    searchInput.value?.focus()
  }
})

watch(query, () => {
  limit.value = 20
  if (bodyEl.value) bodyEl.value.scrollTop = 0
})

watch(activeCategory, () => {
  limit.value = 20
  if (bodyEl.value) bodyEl.value.scrollTop = 0
})
</script>

<style scoped>
/* ── 浮動按鈕 ── */
.glossary-fab {
  position: fixed;
  bottom: 24px;
  right: 20px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background: rgba(30, 20, 10, 0.85);
  color: #f5e6c8;
  border: 1px solid rgba(201, 168, 76, 0.5);
  border-radius: 14px;
  padding: 10px 12px 8px;
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(0,0,0,0.4);
  transition: transform 0.18s, background 0.18s;
  line-height: 1;
}
.glossary-fab:hover { transform: translateY(-2px); background: rgba(50,35,10,0.92); }
.fab-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 1px; color: #c9a84c; }

/* ── 覆蓋層 ── */
.glossary-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
}

/* ── 面板 ── */
.glossary-panel {
  width: 100%;
  max-width: 600px;
  max-height: 82vh;
  background: #fff;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 -8px 40px rgba(0,0,0,0.25);
}

/* ── Header ── */
.gp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid #f0ebe2;
  flex-shrink: 0;
  background: #faf7f2;
}
.gp-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1rem;
  color: #2c1a0e;
}
.gp-icon { font-size: 1.2rem; }
.gp-langs {
  font-size: 0.72rem;
  color: #9a8677;
  font-weight: 400;
  margin-left: 4px;
}
.gp-close {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #9a8677;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.gp-close:hover { background: #f0ebe2; }

/* ── Search ── */
.gp-search-wrap {
  position: relative;
  padding: 12px 16px 8px;
  flex-shrink: 0;
}
.gp-search {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 36px 10px 14px;
  border: 1.5px solid #e0d5c5;
  border-radius: 10px;
  font-size: 0.95rem;
  background: #faf7f2;
  color: #2c1a0e;
  outline: none;
  transition: border-color 0.2s;
}
.gp-search:focus { border-color: #c9a84c; }
.gp-clear {
  position: absolute;
  right: 26px;
  top: 50%;
  transform: translateY(-50%);
  color: #b0a090;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 4px;
}

/* ── Categories ── */
.gp-cats {
  display: flex;
  gap: 6px;
  padding: 0 16px 10px;
  overflow-x: auto;
  flex-shrink: 0;
  scrollbar-width: none;
}
.gp-cats::-webkit-scrollbar { display: none; }
.gp-cat-btn {
  white-space: nowrap;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1.5px solid #e0d5c5;
  background: #fff;
  font-size: 0.78rem;
  font-weight: 600;
  color: #7a6a5a;
  cursor: pointer;
  transition: all 0.15s;
}
.gp-cat-btn.active, .gp-cat-btn:hover {
  background: #c9a84c;
  border-color: #c9a84c;
  color: #fff;
}

/* ── Body ── */
.gp-body {
  flex: 1;
  overflow-y: auto;
  padding: 6px 16px;
}
.gp-state {
  text-align: center;
  color: #9a8677;
  padding: 40px 0;
  font-size: 0.9rem;
}

/* ── Item ── */
.gp-item {
  padding: 12px 0;
  border-bottom: 1px solid #f5f0e8;
}
.gp-item:last-child { border-bottom: none; }

.gp-terms {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 6px;
  margin-bottom: 5px;
}
.term-zh    { font-weight: 700; color: #2c1a0e; font-size: 0.95rem; }
.term-en    { font-weight: 600; color: #4a3828; font-size: 0.88rem; font-style: italic; }
.term-fr    { font-weight: 600; color: #6b4f3a; font-size: 0.88rem; font-style: italic; }
.term-sep   { color: #c0b0a0; font-size: 0.75rem; }

.cat-badge {
  font-size: 0.67rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 10px;
  margin-left: 4px;
}
.cat-grape        { background: #e8f5e9; color: #2e7d32; }
.cat-region       { background: #e3f2fd; color: #1565c0; }
.cat-winemaking   { background: #fff3e0; color: #e65100; }
.cat-tasting      { background: #f3e5f5; color: #7b1fa2; }
.cat-appellation  { background: #fce4ec; color: #880e4f; }
.cat-general      { background: #f5f5f5; color: #616161; }

.gp-def {
  font-size: 0.82rem;
  color: #5a4a3a;
  line-height: 1.65;
}

/* ── Load more ── */
.gp-more-wrap { text-align: center; padding: 12px 0; }
.gp-more-btn {
  padding: 7px 20px;
  border: 1.5px solid #c9a84c;
  border-radius: 20px;
  background: #fff;
  color: #c9a84c;
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
}
.gp-more-btn:hover { background: #c9a84c; color: #fff; }

/* ── Footer ── */
.gp-footer {
  padding: 8px 20px;
  font-size: 0.72rem;
  color: #b0a090;
  border-top: 1px solid #f0ebe2;
  text-align: center;
  flex-shrink: 0;
}

/* ── 搜尋高亮 ── */
:deep(mark.hl) {
  background: #ffe082;
  color: #2c1a0e;
  border-radius: 2px;
  padding: 0 1px;
}

/* ── Transition ── */
.glossary-fade-enter-active,
.glossary-fade-leave-active { transition: opacity 0.22s; }
.glossary-fade-enter-from,
.glossary-fade-leave-to { opacity: 0; }
</style>
