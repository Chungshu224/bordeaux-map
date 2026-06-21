<template>
  <div class="presentation-lesson">
    <!-- 載入狀態 -->
    <div v-if="isLoading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>{{ $t('common.lesson.loadingContent') }}</p>
    </div>

    <!-- 錯誤狀態 -->
    <div v-else-if="loadError" class="error-state">
      <div class="error-icon">⚠️</div>
      <h3>{{ $t('common.lesson.loadFailed') }}</h3>
      <p>{{ loadError }}</p>
      <button @click="retryLoad" class="retry-btn">{{ $t('common.lesson.reload') }}</button>
    </div>

    <!-- 主要內容 -->
    <div v-else class="lesson-content">
      <!-- 簡報幻燈片 -->
  <div class="slide-container" :class="{ 'with-map': currentSlideData && currentSlideData.hasMap }">
        <transition name="slide" mode="out-in">
          <div :key="currentSlide" class="slide">
            <!-- 內容幻燈片 -->
            <div v-if="currentSlideData" class="content-slide">
              <!-- 課程完成摘要投影片 -->
              <template v-if="currentSlideData.type === 'summary'">
                <div class="pl-summary-host">
                  <SummarySlide :slide="currentSlideData" />
                  <button class="pl-complete-btn" @click="emit('lessonComplete')">
                    ✓ {{ $t('common.actions.finish') }}
                  </button>
                </div>
              </template>
              <!-- 一頁式封面投影片 -->
              <template v-else-if="currentSlideData.type === 'cover'">
                <div class="pl-cover-host">
                  <CoverSlide :slide="currentSlideData" />
                </div>
              </template>
              <template v-else>
              <!-- 章節導覽（依 chapter-divider 自動生成） -->
              <div v-if="chapterItems.length" class="chapter-nav">
                <button
                  v-for="(ch, i) in chapterItems"
                  :key="ch.index"
                  class="chapter-chip"
                  :class="{ active: ch.index === activeChapterIndex }"
                  @click="goToSlide(ch.index)"
                  :title="$t('common.lesson.jumpTo', { label: ch.label })"
                >
                  <span v-if="ch.icon" class="icon">{{ ch.icon }}</span>
                  <span class="label">{{ ch.label }}</span>
                </button>
              </div>

              <h2 v-if="!currentSlideData.component && currentSlideData.layout !== 'split'" class="slide-heading">{{ enhanceText(currentSlideData.title) }}</h2>

              <!-- 重點標記 -->
              <div
                v-if="currentSlideData.highlights && currentSlideData.layout !== 'split'"
                class="highlights-section"
                :style="currentSlideData.highlightDelayStep ? {'--highlight-delay-step': currentSlideData.highlightDelayStep} : null"
              >
                <div 
                  v-for="highlight in currentSlideData.highlights" 
                  :key="highlight.id"
                  class="highlight-card"
                >
                  <div class="highlight-icon">{{ highlight.icon }}</div>
                  <div class="highlight-content">
                    <h4>{{ enhanceText(highlight.title) }}</h4>
                    <p>{{ enhanceText(highlight.content) }}</p>
                  </div>
                </div>
              </div>

              <!-- 自訂投影片元件（若指定 component） -->
              <div v-if="currentSlideData.component && slideComponentMap[currentSlideData.component]" class="custom-slide-host">
                <component
                  :is="slideComponentMap[currentSlideData.component]"
                  :key="`slide-component-${currentSlide}-${currentSlideData.component}`"
                  :title="enhanceText(currentSlideData.title)"
                  :content="enhanceText(currentSlideData.content)"
                  :highlights="currentSlideData.highlights"
                  v-bind="currentSlideData.componentProps || {}"
                  @complete="onComponentQuizComplete"
                  @openFullMap="(info) => emit('openRegionMap', info)"
                />
                <!-- Presenter notes for component slides -->
                <div v-if="currentSlideData.presenterNotes && currentSlideData.presenterNotes.length" class="main-content">
                  <div class="notes">
                    <div class="row" v-for="(n, i) in currentSlideData.presenterNotes" :key="'pnote-c-' + i">{{ n }}</div>
                  </div>
                </div>
              </div>

              <!-- ★ 全幅左右分欄佈局（layout: 'split'） -->
              <div v-else-if="currentSlideData.layout === 'split'" class="slide-split-layout">
                <!-- 左欄：標題 + 重點 + 內容 -->
                <div class="split-left-col">
                  <h2 class="slide-heading">{{ enhanceText(currentSlideData.title) }}</h2>
                  <div
                    v-if="currentSlideData.highlights"
                    class="highlights-section"
                    :style="currentSlideData.highlightDelayStep ? {'--highlight-delay-step': currentSlideData.highlightDelayStep} : null"
                  >
                    <div
                      v-for="highlight in currentSlideData.highlights"
                      :key="highlight.id"
                      class="highlight-card"
                    >
                      <div class="highlight-icon">{{ highlight.icon }}</div>
                      <div class="highlight-content">
                        <h4>{{ enhanceText(highlight.title) }}</h4>
                        <p>{{ enhanceText(highlight.content) }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="main-content">
                    <div v-html="enhanceText(currentSlideData.content)"></div>
                    <div v-if="currentSlideData.presenterNotes && currentSlideData.presenterNotes.length" class="notes">
                      <div class="row" v-for="(n, i) in currentSlideData.presenterNotes" :key="'pnote-sp-' + i">{{ n }}</div>
                    </div>
                  </div>
                </div>
                <!-- 右欄：地圖 -->
                <div v-if="currentSlideData.hasMap" class="split-right-col">
                  <PresentationMap
                    :key="`map-${currentSlide}`"
                    :focus-type="currentSlideData.mapFocus || 'france-overview'"
                    :show-bordeaux="currentSlideData.showBordeaux !== false"
                    :on-map-ready="currentSlideData.onMapReady || null"
                    :geojson-path="currentSlideData.geojsonPath || ''"
                    :geojson-paths="currentSlideData.geojsonPaths || []"
                    :map-config="currentSlideData.mapConfig || null"
                  />
                </div>
              </div>

              <!-- 一般內容與地圖布局（無 component 時） -->
              <div v-else-if="currentSlideData.content || currentSlideData.hasMap || (currentSlideData.blocks && currentSlideData.blocks.length)" class="content-with-map">
                <!-- 左側：主要內容 -->
                <div v-if="currentSlideData.content || (currentSlideData.blocks && currentSlideData.blocks.length)" class="main-content" :class="{ 'with-map': currentSlideData.hasMap }">
                  <!-- 標準化區塊渲染（若提供 blocks） -->
                  <SlideBlocks 
                    v-if="currentSlideData.blocks && currentSlideData.blocks.length"
                    :blocks="currentSlideData.blocks" 
                  />
                  <!-- 簡易圖表（若提供 chartData） -->
                  <ChartMini
                    v-if="currentSlideData.chartData"
                    :data="currentSlideData.chartData"
                    :type="currentSlideData.chartType || 'line'"
                    class="chart-host"
                  />
                  <div ref="contentHtml" v-html="enhanceText(currentSlideData.content)"></div>
                  <!-- Presenter notes for standard slides -->
                  <div v-if="currentSlideData.presenterNotes && currentSlideData.presenterNotes.length" class="notes">
                    <div class="row" v-for="(n, i) in currentSlideData.presenterNotes" :key="'pnote-s-' + i">{{ n }}</div>
                  </div>
                </div>

                <!-- 右側：地圖顯示 -->
                <div v-if="currentSlideData.hasMap" class="map-section">
                  <PresentationMap 
                    :key="`map-${currentSlide}`"
                    :focus-type="currentSlideData.mapFocus || 'france-overview'"
                    :show-bordeaux="currentSlideData.showBordeaux !== false"
                    :on-map-ready="currentSlideData.onMapReady || null"
                    :geojson-path="currentSlideData.geojsonPath || ''"
                    :geojson-paths="currentSlideData.geojsonPaths || []"
                    :map-config="currentSlideData.mapConfig || null"
                  />
                </div>
              </div>

              <!-- 測驗區塊 -->
              <div v-if="currentSlideData.quiz" class="quiz-section">
                <h3 class="quiz-title">💡 {{ t('common.quiz.slideCheck') }}</h3>
                <img 
                  v-if="currentSlideData.quiz.image" 
                  :src="currentSlideData.quiz.image" 
                  alt="quiz image" 
                  class="quiz-image"
                />
                <p class="quiz-question">{{ enhanceText(currentSlideData.quiz.question) }}</p>
                <div class="quiz-options">
                  <button 
                    v-for="(option, index) in quizOptionsShuffled"
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="getQuizOptionClass(index)"
                    :disabled="quizAnswered"
                  >
                    {{ enhanceText(getQuizOptionText(option)) }}
                  </button>
                </div>
                <div v-if="quizAnswered" class="quiz-feedback">
                  <p :class="['feedback-text', quizCorrect ? 'correct' : 'incorrect']">
                    {{ quizCorrect ? t('common.quiz.correct') : t('common.quiz.tryAgain') }}
                  </p>
                  <p class="quiz-explanation">{{ enhanceText(quizFeedbackExplanation) }}</p>
                </div>
              </div>
              </template>
            </div>
          </div>
        </transition>
      </div>

      <!-- 導航控制（點點指示器可保留或日後再加回，此處先移除以減少干擾） -->

      <!-- 學習進度指示器 -->
      <LessonProgressIndicator
        v-if="lessonContent && lessonContent.length > 0"
        :lessonId="lessonId"
        :currentSlide="currentSlide"
        :totalSlides="totalSlides - 1"
        :showTimer="false"
        class="lesson-progress-bar"
      />


    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import html2pdf from 'html2pdf.js'
import PresentationMap from './PresentationMap.vue'
import SlideFranceBordeaux from './slides/SlideFranceBordeaux.vue'
import SlideRiversSystem from './slides/SlideRiversSystem.vue'
import SlideLeftRightBanks from './slides/SlideLeftRightBanks.vue'
import SlideRiversAndBanks from './slides/SlideRiversAndBanks.vue'
import SlideBlocks from './SlideBlocks.vue'
import { enhanceText as enhanceTextUtil } from '../utils/textEnhancers.js'
import ChartMini from './ChartMini.vue'
import AromaWheel from './AromaWheel.vue'
import StyleSpectrum from './StyleSpectrum.vue'
import ServiceABCompare from './ServiceABCompare.vue'
import ImageQuizSeries from './ImageQuizSeries.vue'
import MedocInteractiveMap from './maps/MedocInteractiveMap.vue'
import FirstGrowthsMap from './maps/FirstGrowthsMap.vue'
import LessonProgressIndicator from './LessonProgressIndicator.vue'
import QuizSlide from './italy/course/slides/QuizSlide.vue'
import LoireRegionMapSlide from './loire/course/slides/LoireRegionMapSlide.vue'
import LoireSubRegionsSlide from './loire/course/slides/LoireSubRegionsSlide.vue'
import LoireGrapeProfileSlide from './loire/course/slides/LoireGrapeProfileSlide.vue'
import LoireSweetnessSpectrumSlide from './loire/course/slides/LoireSweetnessSpectrumSlide.vue'
import LoireAOCCompareSlide from './loire/course/slides/LoireAOCCompareSlide.vue'
import LoireSweetWineMethodSlide from './loire/course/slides/LoireSweetWineMethodSlide.vue'
import SancerrePouillyDuelSlide from './loire/course/slides/SancerrePouillyDuelSlide.vue'
import LoireCremantMethodsSlide from './loire/course/slides/LoireCremantMethodsSlide.vue'
import HungaryRegionMapSlide from './hungary/slides/HungaryRegionMapSlide.vue'
import TokajiAszuLevelsSlide from './hungary/slides/TokajiAszuLevelsSlide.vue'
import HungaryGrapeProfileSlide from './hungary/slides/HungaryGrapeProfileSlide.vue'
import NapaSonomaCompareSlide from './california/slides/NapaSonomaCompareSlide.vue'
import AVAHierarchySlide from './california/slides/AVAHierarchySlide.vue'
import CaliforniaRegionMapSlide from './california/slides/CaliforniaRegionMapSlide.vue'
import SummarySlide from './shared/slides/SummarySlide.vue'
import CoverSlide from './shared/slides/CoverSlide.vue'
// 改用 lessonContentLoader 的單例載入器,避免間接層帶來的潛在等待問題
import { loadLessonContent as coreLoadLessonContent } from '../data/lessonContentLoader.js'
// 導入進度追蹤系統
import { progressActions } from '../stores/progressTracker.js'

const props = defineProps({
  lessonId: {
    type: String,
    required: true
  },
  lessonTitle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['lessonComplete', 'nextLesson', 'openRegionMap'])

const { t, locale } = useI18n()

// 響應式數據
const currentSlide = ref(0)
const showMap = ref(false)
const quizAnswered = ref(false)
const selectedAnswer = ref(null)
const quizCorrect = ref(false)
// 為單頁測驗加入選項隨機顯示，但保持正確答案對應
const quizOptionsShuffled = ref([])
const quizCorrectIndexShuffled = ref(null)
const showCompletionCard = ref(true)
const isLoading = ref(false)
const loadError = ref(null)
const lessonContent = ref([])
const finalQuizBank = ref([])

function pickRandom(arr, n) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, n)
}

async function loadQuizBank() {
  try {
    const lang = locale.value === 'en' ? '-en' : ''
    const res = await fetch(`/data/bordeaux-l1-quiz-bank${lang}.json`)
    if (!res.ok) return
    const data = await res.json()
    finalQuizBank.value = data.questions || []
  } catch (_) { /* 靜默失敗 */ }
}
// 內容區參考，用於掛載互動按鈕（例如：下載空白 PDF）
const contentHtml = ref(null)

function attachContentActions() {
  const root = contentHtml.value
  if (!root) return
  // 下載空白 PDF
  const nodes = root.querySelectorAll('[data-download-blank-pdf]')
  nodes.forEach(node => {
    // 移除舊監聽：以 clone 方式重置
    const fresh = node.cloneNode(true)
    node.replaceWith(fresh)
    fresh.addEventListener('click', () => generateBlankTastingPdf(root))
  })

  // 響應式媒體與懶載入
  try {
    const imgs = root.querySelectorAll('img')
    imgs.forEach(img => {
      img.loading = img.loading || 'lazy'
      img.decoding = img.decoding || 'async'
      img.style.maxWidth = img.style.maxWidth || '100%'
      img.style.height = img.style.height || 'auto'
    })
    const videos = root.querySelectorAll('video')
    videos.forEach(v => {
      v.preload = v.preload || 'metadata'
      v.style.maxWidth = v.style.maxWidth || '100%'
      v.style.height = v.style.height || 'auto'
      if (!v.hasAttribute('controls')) v.setAttribute('controls', '')
    })
    const iframes = root.querySelectorAll('iframe')
    iframes.forEach(f => {
      f.style.maxWidth = f.style.maxWidth || '100%'
    })
  } catch (e) {
    // no-op
  }
}

function generateBlankTastingPdf(root) {
  try {
    const card = root.querySelector('.tasting-record-card')
    if (!card) return
    const clone = card.cloneNode(true)
    // 移除下載按鈕（避免出現在 PDF 中）
    clone.querySelectorAll('[data-download-blank-pdf]').forEach(el => {
      const wrapper = el.closest('div') || el
      wrapper.remove()
    })
    // 清空輸入
    clone.querySelectorAll('input').forEach(el => {
      if (el.type === 'checkbox' || el.type === 'radio') el.checked = false
      else { el.value = ''; el.setAttribute('value', '') }
    })
    clone.querySelectorAll('textarea').forEach(el => { el.value = ''; el.textContent = '' })
    // 必須附加到 DOM，html2canvas 才能正確計算樣式
    clone.style.cssText = 'position:absolute;left:-9999px;top:0;width:800px;'
    document.body.appendChild(clone)
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'tasting-record-blank.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }
    html2pdf().set(opt).from(clone).save()
      .then(() => { document.body.removeChild(clone) })
      .catch(err => { document.body.removeChild(clone); console.warn('PDF 產生失敗', err) })
  } catch (err) {
    console.warn('PDF 產生失敗', err)
  }
}

watch(currentSlide, async () => { await nextTick(); attachContentActions() })
onMounted(() => { attachContentActions() })

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeReg(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// 自訂投影片元件映射
const slideComponentMap = {
  SlideFranceBordeaux,
  SlideRiversSystem,
  SlideLeftRightBanks,
  SlideRiversAndBanks,
  AromaWheel,
  StyleSpectrum,
  ServiceABCompare,
  ImageQuizSeries,
  MedocInteractiveMap,
  FirstGrowthsMap,
  QuizSlide,
  LoireRegionMapSlide,
  LoireSubRegionsSlide,
  LoireGrapeProfileSlide,
  LoireSweetnessSpectrumSlide,
  LoireAOCCompareSlide,
  LoireSweetWineMethodSlide,
  SancerrePouillyDuelSlide,
  LoireCremantMethodsSlide,
  HungaryRegionMapSlide,
  TokajiAszuLevelsSlide,
  HungaryGrapeProfileSlide,
  CaliforniaRegionMapSlide,
  NapaSonomaCompareSlide,
  AVAHierarchySlide
}

// 將內容中的 AOC 名稱標準化並附上英文原文（避免重複標註，具備一定的容錯與等幣性）
function annotateAOC(html) {
  if (!html || typeof html !== 'string') return html

  let result = html

  // 1) 先做同義詞正規化（目前僅針對「波美侯」）
  // 將常見異體「波美洛」統一為「波美侯」
  result = result.replace(/波美洛/g, '波美侯')

  // 2) 定義常見波爾多 AOC 對應（中文含 AOC → 英文 AOC）
  // 注意：為了避免誤標，現階段僅針對「含有 AOC」的中文詞條進行附註
  const mappings = [
    { zh: '波爾多 AOC', en: 'Bordeaux AOC' },
    { zh: '波爾多上級 AOC', en: 'Bordeaux Supérieur AOC' },
    { zh: '梅多克 AOC', en: 'Médoc AOC' },
    { zh: '上梅多克 AOC', en: 'Haut‑Médoc AOC' },
    { zh: '里斯特拉克‑梅多克 AOC', en: 'Listrac‑Médoc AOC' },
    { zh: '里斯特拉克-梅多克 AOC', en: 'Listrac‑Médoc AOC' },
    { zh: '穆利‑梅多克 AOC', en: 'Moulis‑en‑Médoc AOC' },
    { zh: '穆利-梅多克 AOC', en: 'Moulis‑en‑Médoc AOC' },
    { zh: '瑪歌 AOC', en: 'Margaux AOC' },
    { zh: '波雅克 AOC', en: 'Pauillac AOC' },
    { zh: '聖朱利安 AOC', en: 'Saint‑Julien AOC' },
    { zh: '聖埃斯泰夫 AOC', en: 'Saint‑Estèphe AOC' },
    { zh: '聖埃米利永 AOC', en: 'Saint‑Émilion AOC' },
    { zh: '聖艾美濃 AOC', en: 'Saint‑Émilion AOC' },
    { zh: '聖艾美隆 AOC', en: 'Saint‑Émilion AOC' },
    { zh: '聖埃米利永特級園 AOC', en: 'Saint‑Émilion Grand Cru AOC' },
    { zh: '聖埃美隆特級園 AOC', en: 'Saint‑Émilion Grand Cru AOC' },
    { zh: '波美侯 AOC', en: 'Pomerol AOC' },
    { zh: '拉朗德‑波美侯 AOC', en: 'Lalande‑de‑Pomerol AOC' },
    { zh: '拉朗德-波美侯 AOC', en: 'Lalande‑de‑Pomerol AOC' },
    { zh: '弗龍薩克 AOC', en: 'Fronsac AOC' },
    { zh: '佳能‑弗龍薩克 AOC', en: 'Canon‑Fronsac AOC' },
    { zh: '佳能-弗龍薩克 AOC', en: 'Canon‑Fronsac AOC' },
    { zh: '格拉夫 AOC', en: 'Graves AOC' },
    { zh: '佩薩克‑雷奧良 AOC', en: 'Pessac‑Léognan AOC' },
    { zh: '佩薩克-雷奧良 AOC', en: 'Pessac‑Léognan AOC' },
    { zh: '蘇玳 AOC', en: 'Sauternes AOC' },
    { zh: '巴薩克 AOC', en: 'Barsac AOC' },
    { zh: '兩海之間 AOC', en: 'Entre‑Deux‑Mers AOC' },
    { zh: '布爾丘 AOC', en: 'Côtes de Bourg AOC' },
    { zh: '布拉伊‑波爾多丘 AOC', en: 'Blaye Côtes de Bordeaux AOC' },
    { zh: '布拉伊-波爾多丘 AOC', en: 'Blaye Côtes de Bordeaux AOC' },
    { zh: '卡斯蒂永‑波爾多丘 AOC', en: 'Castillon Côtes de Bordeaux AOC' },
    { zh: '卡斯蒂永-波爾多丘 AOC', en: 'Castillon Côtes de Bordeaux AOC' },
    { zh: '弗朗克‑波爾多丘 AOC', en: 'Francs Côtes de Bordeaux AOC' },
    { zh: '弗朗克-波爾多丘 AOC', en: 'Francs Côtes de Bordeaux AOC' }
  ]

  // 候選正則工具
  const escapeReg = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  for (const { zh, en } of mappings) {
    // 避免已經有括號英文的重覆註記：若中文詞條後面緊跟括號（中/半形）則視為已處理
  const pattern = new RegExp(`${escapeReg(zh)}(?!\\s*[（(])`, 'g')
    result = result.replace(pattern, `${zh}（${en}）`)
  }

  return result
}

// 品種名稱正規化：將舊譯名統一為台灣常用譯名，保留英文不變
function normalizeVarieties(text) {
  if (!text || typeof text !== 'string') return text
  return text
    .replace(/長相思/g, '白蘇維濃')
    .replace(/白蘇維翁/g, '白蘇維濃')
    .replace(/赤霞珠/g, '卡本內蘇維濃')
    .replace(/品麗珠/g, '卡本內弗朗')
}

// 統一輸出管線：先做品種正規化，再做 AOC 標註
function enhanceText(text) { return enhanceTextUtil(text) }

// 課程數據映射 - 僅包含元數據
const lessonDataMap = {
  // L1 基礎課程
  'l1-1': {
    title: '認識波爾多地理位置',
    subtitle: '了解波爾多產區的地理環境與位置特色',
    duration: '8分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握波爾多在法國的地理位置',
      '理解三河匯流的獨特地理環境',
      '認識左岸與右岸的劃分概念',
      '了解主要產區的分佈與特色'
    ]
  },
  // L3-5 釀造工藝與技術創新（合併版 Part1+2+3A+3B）
  'l3-5': {
    title: '釀造工藝與技術創新',
    subtitle: '紅白工藝・貴腐甜酒・橡木桶科學・現代技術',
    duration: '60分鐘',
    difficulty: 'Level 3',
    objectives: [
      '掌握紅酒與白酒的核心釀造流程與關鍵控制點',
      '理解貴腐甜酒的高糖長發酵與分批採收策略',
      '建立橡木桶選材、風乾、烘烤與微氧化的系統觀',
      '熟悉現代分選、精密溫控、發酵監控與後處理技術',
      '能評估科技導入對風格、品質與成本的影響'
    ]
  },
  // L3-11 波爾多葡萄酒產業史與文化（六章合併版）
  'l3-11': {
    title: '波爾多葡萄酒產業史與文化',
    subtitle: '歷史發展・分級制度・文化傳承',
    duration: '65分鐘',
    difficulty: 'Level 3',
    objectives: [
      '了解波爾多葡萄酒業的歷史發展脈絡',
      '掌握1855年分級制度的背景與意義',
      '理解波爾多葡萄酒的文化內涵與國際影響',
      '分析傳統與現代的文化互動與傳承機制'
    ]
  },
  // Level 4 - 專家認證（示範課）
  'l4-1': {
    title: '高階風土與微地塊分析',
    subtitle: '微地形・土壤剖面・根砧策略・水分壓力',
    duration: '60分鐘',
    difficulty: 'Level 4',
    objectives: [
      '解讀微地形/水文與葡萄樹生理的關係',
      '建立土壤剖面與根系策略的評估方法',
      '運用水分壓力曲線與成熟多指標建立採收視窗',
      '制定微地塊分離釀造與後續調配策略'
    ]
  },
  'l4-2': {
    title: '進階釀造科學與品質工程',
    subtitle: '代謝・氧管理・穩定化・低酒精技術',
    duration: '60分鐘',
    difficulty: 'Level 4',
    objectives: [
      '掌握關鍵發酵變數與副產物管理',
      '設計氧管理策略避免還原/氧化問題',
      '評估穩定化與低酒精技術的風格影響'
    ]
  },
  'l4-3': {
    title: '橡木與容器科學 2.0',
    subtitle: '木材化學・微氧化・容器熱慣性',
    duration: '55分鐘',
    difficulty: 'Level 4',
    objectives: [
      '解讀烘烤產物對香氣結構的貢獻',
      '比較不同容器之微氧化與熱慣性',
      '制定容器組合與陳年策略'
    ]
  },
  'l4-4': {
    title: '成本結構、資本開支與投報',
    subtitle: '盈虧平衡・敏感度分析・品質最適化',
    duration: '65分鐘',
    difficulty: 'Level 4',
    objectives: [
      '建立產品單位成本與盈虧平衡模型',
      '進行價格/產量/成本的敏感度分析',
      '評估品質投資的邊際效益'
    ]
  },
  'l4-5': {
    title: '品牌策略與國際市場',
    subtitle: '定位・價格・分銷/直客・文化差異',
    duration: '55分鐘',
    difficulty: 'Level 4',
    objectives: [
      '設計品牌架構與價格階梯',
      '規劃國際分銷與直客併行策略',
      '評估主要市場的文化差異'
    ]
  },
  'l4-6': {
    title: '法規與原產地保護',
    subtitle: 'AOC/EU・標示規範・永續認證',
    duration: '50分鐘',
    difficulty: 'Level 4',
    objectives: [
      '理解AOC與歐盟標示規範',
      '比較不同永續體系的要求與邊界',
      '評估法規對創新技術的限制'
    ]
  },
  'l4-7': {
    title: '風險管理與保險',
    subtitle: '風險矩陣・保險/對沖・BCP',
    duration: '55分鐘',
    difficulty: 'Level 4',
    objectives: [
      '建立風險矩陣與機率/衝擊評分',
      '選擇適切的保險與金融對沖工具',
      '制定營運持續計畫(BCP)'
    ]
  },
  'l4-8': {
    title: '永續與碳盤查',
    subtitle: 'GHG・LCA・包材/物流・減碳路線圖',
    duration: '60分鐘',
    difficulty: 'Level 4',
    objectives: [
      '計算範疇1/2/3的碳排',
      '比較包材與運輸對碳足跡的影響',
      '制定減碳措施與投資回收期'
    ]
  },
  'l4-9': {
    title: '感官科學與盲品框架（專家級）',
    subtitle: '校準・缺陷庫・典型性矩陣',
    duration: '70分鐘',
    difficulty: 'Level 4',
    objectives: [
      '建立盲品評分與校準流程',
      '擴充感官缺陷庫與矯正方案',
      '運用典型性矩陣進行產區判讀'
    ]
  },
  'l4-10': {
    title: '資料科學與 AI 在酒業',
    subtitle: '需求預測・異常偵測・建模・動態定價',
    duration: '65分鐘',
    difficulty: 'Level 4',
    objectives: [
      '理解資料科學流程與資料治理',
      '應用機器學習於預測與偵測',
      '評估 AI 對營運與品質的影響'
    ]
  },
  'l4-11': {
    title: 'En Primeur 與葡萄酒投資',
    subtitle: '期酒機制・定價模型・二級市場',
    duration: '60分鐘',
    difficulty: 'Level 4',
    objectives: [
      '理解期酒機制與歷史演變',
      '建立定價與風險評估模型',
      '分析二級市場與投資組合'
    ]
  },
  'l4-12': {
    title: '綜合專題與口頭答辯',
    subtitle: '企業案例・策略報告・ROI 與答辯',
    duration: '90分鐘',
    difficulty: 'Level 4',
    objectives: [
      '整合風土/釀造/市場/財務的決策能力',
      '撰寫結構化研究報告與圖表',
      '完成口頭簡報與答辯'
    ]
  },
  'l4-13': {
    title: '組織領導與家族酒莊治理',
    subtitle: '三環模型・接班傳承・所有權保護・名莊治理案例',
    duration: '65分鐘',
    difficulty: 'Level 4',
    objectives: [
      '掌握家族企業三環模型與治理架構設計',
      '運用 SAS/SCI/GFV 與 Pacte Dutreil 保護所有權',
      '制定系統化的接班計畫與代際傳承路徑',
      '分析 Mouton、Latour、Angélus 等名莊的治理演化'
    ]
  },
  'l1-2': {
    title: '波爾多氣候與環境基礎',
    subtitle: '探索影響波爾多葡萄酒品質的自然環境因素',
    duration: '10分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握波爾多溫帶海洋性氣候特徵',
      '理解河流系統對氣候的調節作用',
      '認識四季變化對葡萄生長的影響',
      '了解環境因素如何影響葡萄酒品質'
    ]
  },
  'l1-3': {
    title: '主要葡萄品種介紹',
    subtitle: '認識波爾多的經典葡萄品種與風味特色',
    duration: '12分鐘',
    difficulty: 'Level 1',
    objectives: [
      '識別紅葡萄品種：Cabernet Sauvignon、Merlot、Cabernet Franc',
      '了解白葡萄品種：Sauvignon Blanc、Sémillon',
      '學習各品種的風味特徵與種植特性',
      '理解品種在波爾多混釀中的作用'
    ]
  },
  'l1-4': {
    title: '左岸與右岸初探',
    subtitle: '探索波爾多兩岸的地理、土壤與風格差異',
    duration: '15分鐘',
    difficulty: 'Level 1',
    objectives: [
      '識別左岸與右岸的地理位置',
      '了解兩岸主要葡萄品種差異',
      '認識土壤類型的基本概念',
      '理解兩岸酒款風格的不同特色'
    ]
  },
  'l1-5': {
    title: '波爾多酒款類型概覽',
    subtitle: '認識紅酒、白酒、甜酒的多樣世界',
    duration: '14分鐘',
    difficulty: 'Level 1',
    objectives: [
      '區分紅酒、白酒、甜酒的基本特徵',
      '了解各類型酒款的釀造工藝差異',
      '認識酒標上的重要資訊',
      '掌握基本的品鑑與選酒知識'
    ]
  },
  'l1-6': {
    title: 'AOC系統入門',
    subtitle: '理解法國葡萄酒法規與品質保證體系',
    duration: '12分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握AOC分級制度的基本概念',
      '了解波爾多AOC層級結構',
      '學習如何閱讀酒標上的AOC資訊',
      '理解AOC對品質控制的意義'
    ]
  },
  'l1-7': {
    title: '品酒基礎技巧',
    subtitle: '掌握專業品酒的基本方法與技巧',
    duration: '18分鐘',
    difficulty: 'Level 1',
    objectives: [
      '學習正確的品酒步驟：觀色、聞香、品味',
      '掌握品酒詞彙與風味描述方法',
      '了解品酒環境與工具的重要性',
      '培養基本的感官分析能力'
    ]
  },
  'l1-8': {
    title: 'Level 1 總結與評估',
    subtitle: '回顧學習成果並進行綜合測驗',
    duration: '20分鐘',
    difficulty: 'Level 1',
    objectives: [
      '總結Level 1所有核心知識點',
      '通過綜合測驗評估學習成效',
      '識別需要強化的知識領域',
      '準備進入Level 2中級課程'
    ]
  },
  
  // L2 中級課程
  'l2-1': {
    title: 'Médoc產區深度探索',
    subtitle: '左岸四大村莊的風土差異與釀酒哲學',
    duration: '35分鐘',
    difficulty: 'Level 2',
    objectives: [
      '深入了解Médoc半島的地理與土壤構成',
      '掌握1855分級制度的歷史背景與現代意義',
      '學習Médoc產區的釀酒工藝與技術演進',
      '理解不同子產區的風土特色與酒款風格'
    ]
  },
  'l2-2': {
    title: 'Margaux - 優雅的香水之鄉',
    subtitle: '最優雅產區的獨特魅力與代表酒莊',
    duration: '30分鐘',
    difficulty: 'Level 2',
    objectives: [
      '探索Margaux產區的獨特砂質土壤特性',
      '深入了解Château Margaux等頂級酒莊',
      '掌握Margaux酒款的優雅風格特徵',
      '學習品鑑Margaux酒款的專業技巧'
    ]
  },
  'l2-3': {
    title: 'Pauillac - 王者風範的產區',
    subtitle: '三大一級酒莊的故鄉與其釀酒傳奇',
    duration: '35分鐘',
    difficulty: 'Level 2',
    objectives: [
      '深入了解Pauillac產區的地理與氣候特色',
      '學習Lafite、Latour、Mouton三大酒莊歷史',
      '掌握Pauillac酒款的強勁風格特徵',
      '理解頂級波爾多酒款的投資與收藏價值'
    ]
  },
  'l2-4': {
    title: 'Saint-Julien - 平衡的典範',
    subtitle: '最均衡產區的風格特色與名莊解析',
    duration: '32分鐘',
    difficulty: 'Level 2',
    objectives: [
      '探索Saint-Julien產區的獨特位置優勢',
      '深入了解Léoville家族酒莊的傳承',
      '掌握Saint-Julien酒款的平衡風格',
      '學習評估酒款平衡性的專業標準'
    ]
  },
  'l2-5': {
    title: 'Saint-Estèphe - 北地之珠',
    subtitle: '風格最獨特產區的現代化轉型',
    duration: '34分鐘',
    difficulty: 'Level 2',
    objectives: [
      '了解Saint-Estèphe產區的北部地理特色',
      '學習黏土土壤對酒款風格的影響',
      '探索傳統與現代釀酒技術的結合',
      '掌握Saint-Estèphe酒款的深邃風格特徵'
    ]
  },
  'l2-6': {
    title: 'Pomerol - 稀世珍寶',
    subtitle: '波爾多最小最精品的頂級產區',
    duration: '32分鐘',
    difficulty: 'Level 2',
    objectives: [
      '探索Pomerol產區的獨特地理環境',
      '深入了解Petrus等傳奇酒莊',
      '掌握Merlot在Pomerol的卓越表現',
      '學習頂級Pomerol酒款的品鑑與收藏'
    ]
  },
  'l2-7': {
    title: '聖愛美濃深度探索',
    subtitle: '右岸明珠的風土傳奇與現代榮光',
    duration: '38分鐘',
    difficulty: 'Level 2',
    objectives: [
      '深入了解Saint-Émilion的地理與歷史背景',
      '掌握Saint-Émilion分級制度與其演變',
      '學習石灰岩高原與沙質平原的土壤差異',
      '探索Saint-Émilion在現代市場的品牌價值與收藏投資潛力'
    ]
  },
  'l2-8': {
    title: 'Libournais衛星產區',
    subtitle: '性價比優秀的右岸周邊產區探索',
    duration: '35分鐘',
    difficulty: 'Level 2',
    objectives: [
      '探索Libournais地區的地理位置與衛星產區分布',
      '深入了解Saint-Émilion和Pomerol的衛星產區特色',
      '掌握衛星產區的性價比優勢與投資價值',
      '學習識別優質衛星產區酒款的選購技巧'
    ]
  },
  'l2-9': {
    title: 'Level 2 綜合評量',
    subtitle: '波爾多產區進階知識掌握度評估',
    duration: '30分鐘',
    difficulty: 'Level 2',
    objectives: [
      '系統回顧左右岸主要產區特色',
      '掌握產區間的風土差異與風格對比',
      '理解各產區代表性酒莊的特點',
      '通過綜合評量，驗證進階L3的準備度'
    ]
  },
  'l2-10': {
    title: '蘇玳與巴薩克：貴腐甜酒傳奇',
    subtitle: '微氣候奇蹟・貴腐菌科學・d\'Yquem 至高傳奇',
    duration: '40分鐘',
    difficulty: 'Level 2',
    objectives: [
      '理解西隆河霧氣與加倫河創造的獨特貴腐微氣候',
      '掌握 Botrytis cinerea 貴腐菌的脫水濃縮作用機制',
      '認識賽美容、白蘇維濃、蜜思卡黛三品種的分工角色',
      '了解1855年蘇玳分級與 Château d\'Yquem 的至高地位',
      '比較法國蘇玳、德國TBA、匈牙利托卡伊三大貴腐產區'
    ]
  }
  ,
  // L3 綜合課程（地理・風土・氣候）
  'l3-gtc': {
    title: '波爾多：地理、風土與氣候的交響曲',
    subtitle: '整合地理、土壤與氣候三大要素，建立完整的風土概念',
    duration: '50分鐘',
    difficulty: 'Level 3',
    objectives: [
      '全面理解波爾多地理結構與河流系統',
      '掌握左右岸土壤差異及其對風格的影響',
      '分析海洋性氣候、微氣候與極端天氣的影響'
    ]
  },
  // L3-4 葡萄園管理與有機農法（補上 metadata 使標題頁顯示學習目標）
  'l3-4': {
    title: '葡萄園管理與有機農法',
    subtitle: '全年週期・有機 vs 生物動力 vs 永續體系',
    duration: '55分鐘',
    difficulty: 'Level 3',
    objectives: [
      '掌握波爾多葡萄園全年管理週期的關鍵工作與決策點',
      '理解有機、生物動力、永續三大體系的核心原理與差異',
      '學習病蟲害綜合防治 (IPM) 與精準農業應用',
      '認識主要認證（AB / Demeter / HVE）的重點與門檻',
      '評估可持續實踐對品質、成本與市場定位的影響',
      '分析氣候變化下葡萄園管理的新挑戰與調適策略'
    ]
  }
}

// 計算屬性
const lessonData = computed(() => {
  // 先用靜態映射，若有定義直接回傳
  const mapped = lessonDataMap[props.lessonId]
  if (mapped) return mapped

  // 若無映射，嘗試從已載入的投影片封面萃取標題做為臨時中繼資料
  const cover = (lessonContent.value || []).find(s => s?.type === 'cover')
  if (cover) {
    // 依 lessonId 判斷大致等級以顯示難度標籤
    let difficulty = ''
    if (props.lessonId?.startsWith('l1-')) difficulty = 'Level 1'
    else if (props.lessonId?.startsWith('l2-')) difficulty = 'Level 2'
    else if (props.lessonId?.startsWith('l3')) difficulty = 'Level 3'

    return {
      title: cover.title || '課程封面',
      subtitle: cover.subtitle || '',
      duration: '—',
      difficulty,
      objectives: []
    }
  }

  // 最後的保底，不再回退到 L1-1，避免顯示錯誤的地理入門標題
  return {
    title: '課程',
    subtitle: '',
    duration: '—',
    difficulty: '',
    objectives: []
  }
})

// 通用轉義（最小化處理，保持原樣顯示）
function esc(str) {
  return (str ?? '').toString()
}

// 通用：確保傳入為陣列
const toList = (arr) => Array.isArray(arr) ? arr : []

// 將課程原始資料正規化為簡報可渲染的統一結構
const normalizeSlide = (s) => {
  if (!s || typeof s !== 'object') return null
  // cover / summary 已有正確結構，直接透傳
  if (s.type === 'cover' || s.type === 'summary') return s
  const type = s.type || 'content'

  // 基礎容器
  const slide = {
    title: s.title || '',
    highlights: undefined,
    content: '', // 使用 HTML 字串
    component: s.component || undefined, // 若來源指定自訂投影片元件，保留供模板渲染
    blocks: undefined, // 標準化可重用區塊（若來源提供）
    hasMap: false,
    mapUrl: undefined,
    quiz: undefined
  }

  const toList = (arr) => Array.isArray(arr) ? arr : []

  // 將 {subtitle, text, details, highlight} 陣列轉為 HTML 區塊
  const sectionsToHTML = (items) => {
    return toList(items).map(item => {
      const subtitle = item.subtitle ? `<h4>${esc(item.subtitle)}</h4>` : ''
      const text = item.text ? `<p>${esc(item.text)}</p>` : ''
      const details = item.details ? `<p class="details">${esc(item.details)}</p>` : ''
      const hl = item.highlight ? `<div class="inline-highlight">${esc(item.highlight)}</div>` : ''
      return `<section class="section">${subtitle}${text}${details}${hl}</section>`
    }).join('')
  }

  switch (type) {
    case 'chapter': {
      // 將章節內容依 <h3> 自動拆分為多頁；若單段過長，則再依 <h4> 拆分
      const html = typeof s.content === 'string' ? s.content : ''
      // 找出所有 <h3> 起點
      const h3Regex = /<h3[^>]*>([\s\S]*?)<\/h3>/gi
      const anchors = []
      let m
      while ((m = h3Regex.exec(html)) !== null) {
        anchors.push({ start: m.index, headingHtml: m[1] })
      }

      // 若沒有 <h3>，則不拆分
      if (!anchors.length) {
        slide.title = s.title || ''
        slide.content = html || ''
        slide.highlights = Array.isArray(s.highlights) ? s.highlights : undefined
        slide.hasMap = !!s.hasMap
        slide.mapUrl = s.mapUrl
        return slide
      }

      // 生成每個段落的範圍
      anchors.forEach((a, i) => {
        a.end = i < anchors.length - 1 ? anchors[i + 1].start : html.length
      })

      const toText = (str) => (str || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

      // 當某段過長時，嘗試再以 <h4> 拆分
      // 只切「結構性 h4」（不在 .card-header 內的 h4），避免卡片標題被誤切
      const splitByH4IfLong = (sectionHtml, baseTitle, headingText) => {
        const MAX_LEN = 1800 // 依內容長度大致估算，可再調整
        if ((sectionHtml || '').length <= MAX_LEN) {
          return [{ title: `${baseTitle} — ${headingText}`, html: sectionHtml }]
        }
        // 記錄所有 .card-header 的範圍，排除其中的 h4 不作為切割點
        const cardHeaderRegions = []
        const chRe = /<div class="card-header">[^]*?<\/div>/g
        let chM
        while ((chM = chRe.exec(sectionHtml)) !== null) {
          cardHeaderRegions.push([chM.index, chM.index + chM[0].length])
        }
        const inCardHeader = (pos) => cardHeaderRegions.some(([s, e]) => pos >= s && pos < e)

        const h4Regex = /<h4[^>]*>([\s\S]*?)<\/h4>/gi
        const subs = []
        let mh4
        while ((mh4 = h4Regex.exec(sectionHtml)) !== null) {
          if (!inCardHeader(mh4.index)) {
            subs.push({ start: mh4.index, subHeadingHtml: mh4[1] })
          }
        }
        if (!subs.length) {
          return [{ title: `${baseTitle} — ${headingText}`, html: sectionHtml }]
        }
        subs.forEach((s, i) => { s.end = i < subs.length - 1 ? subs[i + 1].start : sectionHtml.length })
        const result = []
        // 第一個結構 h4 之前若有內容，保留為獨立頁
        if (subs[0].start > 0) {
          result.push({ title: `${baseTitle} — ${headingText}`, html: sectionHtml.slice(0, subs[0].start) })
        }
        subs.forEach(sub => {
          const subHeadingText = toText(sub.subHeadingHtml)
          const body = sectionHtml.slice(sub.start, sub.end)
          result.push({ title: `${baseTitle} — ${headingText} · ${subHeadingText}`, html: body })
        })
        return result
      }

      const baseTitle = s.title || '章節'
      const pages = anchors.flatMap((a, idx) => {
        const section = html.slice(a.start, a.end)
        const headingText = toText(a.headingHtml)
        return splitByH4IfLong(section, baseTitle, headingText)
      })

      // 組裝為簡報頁，僅第一頁帶 highlights/map
      return pages.map((p, i) => ({
        title: p.title,
        highlights: i === 0 && Array.isArray(s.highlights) ? s.highlights : undefined,
        content: `<div class="chapter-section">${p.html}</div>`,
        hasMap: i === 0 ? !!s.hasMap : false,
        mapUrl: i === 0 ? s.mapUrl : undefined,
        quiz: undefined
      }))
    }
    case 'winemaking-process': {
      // 每個 step 一頁，避免過長
      const steps = toList(s.steps)
      if (!steps.length) {
        slide.title = s.title || '釀造流程'
        slide.content = s.description ? `<p>${esc(s.description)}</p>` : ''
        return slide
      }
      const pages = steps.map((st, idx) => {
        const title = `${s.title || '釀造流程'} — ${esc(st.step || `步驟 ${idx + 1}`)}`
        const blocks = []
        // 添加圖片支持
        if (st.image) {
          blocks.push(`<div class="step-image"><img src="${esc(st.image)}" alt="${esc(st.step || '')}" /></div>`)
        }
        if (st.timing) blocks.push(`<div class="row"><strong>時機：</strong>${esc(st.timing)}</div>`)
        if (Array.isArray(st.keyActions) && st.keyActions.length) {
          blocks.push(`<div class="block"><div class="b-title">關鍵操作：</div><ul>${st.keyActions.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>`)
        }
        if (st.scientificPrinciples) blocks.push(`<div class="row"><strong>原理：</strong>${esc(st.scientificPrinciples)}</div>`)
        if (st.bordeauxPractice) blocks.push(`<div class="row"><strong>波爾多做法：</strong>${esc(st.bordeauxPractice)}</div>`)
        if (st.qualityImpact) blocks.push(`<div class="row"><strong>對品質影響：</strong>${esc(st.qualityImpact)}</div>`)
        if (st.costImplication) blocks.push(`<div class="row"><strong>成本影響：</strong>${esc(st.costImplication)}</div>`)
        return {
          title,
          highlights: undefined,
          content: `<div class="process-step">${blocks.join('')}</div>`,
          hasMap: false,
          mapUrl: undefined,
          quiz: undefined
        }
      })
      return pages
    }
    case 'botrytis-development': {
      // 每個階段一頁
      const stages = toList(s.stages)
      if (!stages.length) {
        slide.title = s.title || '貴腐發展階段'
        slide.content = s.description ? `<p>${esc(s.description)}</p>` : ''
        break
      }
      const pages = stages.map(st => {
        const title = `${s.title || '貴腐發展階段'} — ${esc(st.stage || '')}`
        const rows = []
        if (st.timing) rows.push(`<div class="row"><strong>時間：</strong>${esc(st.timing)}</div>`)
        if (st.appearance) rows.push(`<div class="row"><strong>外觀：</strong>${esc(st.appearance)}</div>`)
        if (st.sugar) rows.push(`<div class="row"><strong>糖分：</strong>${esc(st.sugar)}</div>`)
        if (st.weight) rows.push(`<div class="row"><strong>重量：</strong>${esc(st.weight)}</div>`)
        if (st.harvestDecision) rows.push(`<div class="row"><strong>採收決策：</strong>${esc(st.harvestDecision)}</div>`)
        if (st.quality) rows.push(`<div class="row"><strong>品質：</strong>${esc(st.quality)}</div>`)
        return {
          title,
          content: `<div class="botrytis-stage">${rows.join('')}</div>`,
          hasMap: false
        }
      })
      return pages
    }
    case 'fermentation-monitoring': {
      // 總覽 + 逐參數頁
      const points = toList(s.monitoringPoints)
      const pages = []
      const intro = {
        title: s.title || '發酵監控系統',
        content: `
          ${s.description ? `<p>${esc(s.description)}</p>` : ''}
          ${points.length ? `<div class="block"><div class="b-title">監控項目：</div><ul>${points.map(p => `<li>${esc(p.parameter)}</li>`).join('')}</ul></div>` : ''}
        `
      }
      pages.push(intro)
      points.forEach(p => {
        const rows = []
        if (p.sensors) rows.push(`<div class="row"><strong>感測器：</strong>${esc(p.sensors)}</div>`)
        if (p.frequency) rows.push(`<div class="row"><strong>頻率：</strong>${esc(p.frequency)}</div>`)
        if (p.precision) rows.push(`<div class="row"><strong>精度：</strong>${esc(p.precision)}</div>`)
        if (p.alerts) rows.push(`<div class="row"><strong>警報：</strong>${esc(p.alerts)}</div>`)
        if (p.automation) rows.push(`<div class="row"><strong>自動化：</strong>${esc(p.automation)}</div>`)
        if (p.winemaking_impact) rows.push(`<div class="row"><strong>釀造影響：</strong>${esc(p.winemaking_impact)}</div>`)
        pages.push({
          title: `${s.title || '發酵監控'} — ${esc(p.parameter || '')}`,
          content: `<div class="monitoring-card">${rows.join('')}</div>`
        })
      })
      return pages
    }
    case 'technology-comparison': {
      // 逐技術一頁 + 總覽表
      const techs = toList(s.technologies)
      const titleBase = s.title || '技術比較'
      const pages = techs.map(t => {
        const kv = (label, val) => val ? `<div class="row"><strong>${label}：</strong>${esc(Array.isArray(val) ? val.join('、') : val)}</div>` : ''
        const parts = [
          kv('應用', t.applications),
          kv('投資', t.investment),
          kv('營運成本', t.operating_cost),
          kv('品質影響', t.quality_impact),
          kv('處理速度', t.processing_speed),
          kv('酒液損失', t.wine_loss),
          kv('能耗', t.energy_consumption),
          kv('法規', t.regulatory_status),
          kv('適用規模', t.suitable_scale),
          kv('波爾多採用', t.bordeaux_adoption)
        ]
        return {
          title: `${titleBase} — ${esc(t.technology || '')}`,
          content: `<div class="tech-card">${parts.join('')}</div>`
        }
      })
      if (techs.length) {
        const headers = ['技術', '應用', '投資', '營運成本', '品質影響', '處理速度', '酒液損失', '能耗', '法規', '適用規模', '波爾多採用']
        const rows = techs.map(t => [
          t.technology,
          Array.isArray(t.applications) ? t.applications.join('、') : (t.applications || ''),
          t.investment || '',
          t.operating_cost || '',
          t.quality_impact || '',
          t.processing_speed || '',
          t.wine_loss || '',
          t.energy_consumption || '',
          t.regulatory_status || '',
          t.suitable_scale || '',
          t.bordeaux_adoption || ''
        ])
        pages.push({
          title: `${titleBase} — 總覽表`,
          content: renderGenericTable({ headers, rows })
        })
      }
      return pages
    }
    case 'toasting-science': {
      const stages = toList(s.stages)
      if (!stages.length) {
        slide.title = s.title || '烘烤科學'
        slide.content = s.description ? `<p>${esc(s.description)}</p>` : ''
        break
      }
      const pages = stages.map(st => {
        const rows = []
        if (st.temperature) rows.push(`<div class="row"><strong>溫度：</strong>${esc(st.temperature)}</div>`)
        if (st.timing) rows.push(`<div class="row"><strong>時間：</strong>${esc(st.timing)}</div>`)
        if (st.process) rows.push(`<div class="row"><strong>過程：</strong>${esc(st.process)}</div>`)
        if (Array.isArray(st.chemicalChanges) && st.chemicalChanges.length) {
          rows.push(`<div class="block"><div class="b-title">化學變化：</div><ul>${st.chemicalChanges.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>`)
        }
        if (st.aromas) rows.push(`<div class="row"><strong>香氣：</strong>${esc(st.aromas)}</div>`)
        if (st.compounds) rows.push(`<div class="row"><strong>化合物：</strong>${esc(st.compounds)}</div>`)
        return {
          title: `${s.title || '烘烤科學'} — ${esc(st.process || st.temperature || '')}`,
          content: `<div class="toast-stage">${rows.join('')}</div>`
        }
      })
      return pages
    }
    case 'comparison-matrix': {
      // 產區對比矩陣（卡片式展示）
      slide.title = s.title || '產區對比矩陣'
      const categories = toList(s.categories)
      slide.content = `
        ${s.description ? `<p class="matrix-intro">${esc(s.description)}</p>` : ''}
        <div class="comparison-matrix-grid">
          ${categories.map(cat => {
            const items = toList(cat.items || [])
            return `
              <div class="matrix-card">
                <div class="matrix-card-header">
                  ${cat.icon ? `<span class="matrix-icon">${cat.icon}</span>` : ''}
                  <h4>${esc(cat.name || '')}</h4>
                </div>
                <div class="matrix-card-body">
                  ${items.map(item => {
                    const isHighlight = item.highlight
                    return `
                      <div class="matrix-item${isHighlight ? ' highlight' : ''}">
                        <span class="item-label">${esc(item.label || '')}</span>
                        <span class="item-value">${esc(item.value || '')}</span>
                      </div>
                    `
                  }).join('')}
                </div>
              </div>
            `
          }).join('')}
        </div>
      `
      break
    }
    case 'content-with-quiz': {
      // 內容 + 測驗組合（簡化版）
      slide.title = s.title || '課程內容'
      slide.content = s.content || '<p>課程內容</p>'
      slide.quiz = s.quiz
      break
    }
    case 'comparison-table': {
      // 通用表格：headers + rows
      const headers = Array.isArray(s.headers) ? s.headers : []
      const rows = Array.isArray(s.rows) ? s.rows : []
      slide.title = s.title || '比較表'
      slide.content = renderGenericTable({ headers, rows, description: s.description })
      break
    }
    case 'vineyard-calendar': {
      // 每月 1 張投影片，專注「關鍵任務」
      const months = toList(s.months)
      if (!months.length) {
        slide.title = s.title || '葡萄園管理月曆'
        slide.content = s.description ? `<p>${esc(s.description)}</p>` : ''
        break
      }

      const slides = months.map((m, idx) => {
        const monthLabel = i18nMonthLabel(m?.month || '')
        const title = `${s.title || '葡萄園管理月曆'} — ${monthLabel} 關鍵任務`
        const tasks = Array.isArray(m?.keyTasks) ? m.keyTasks : []
        const notes = ['risks','decision','monitoring','planning','stress','transition','reflection']
          .map(k => m?.[k] ? `<div class="row"><strong>${labelMap(k)}：</strong>${esc(m[k])}</div>` : '')
          .join('')
        return {
          title,
          highlights: undefined,
          content: `
            ${idx === 0 && s.description ? `<p>${esc(s.description)}</p>` : ''}
            <div class="month-meta">
              ${m?.season ? `<span class="tag">${esc(m.season)}</span>` : ''}
              ${m?.phenology ? `<span class="tag">${esc(m.phenology)}</span>` : ''}
              ${m?.temperature ? `<span class="tag">${esc(m.temperature)}</span>` : ''}
            </div>
            ${m?.image ? `<div class="month-image"><img src="${esc(m.image)}" alt="${monthLabel}" style="width: 100%; max-width: 800px; border-radius: 12px; margin: 1rem auto; display: block; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"></div>` : ''}
            <div class="tasks">
              <div class="t-title">關鍵工作</div>
              ${tasks.map(t => renderTask(t)).join('')}
            </div>
            ${notes ? `<div class="notes">${notes}</div>` : ''}
            ${idx === months.length - 1 && toList(s.insights).length ? `<div class="insights"><ul>${toList(s.insights).map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>` : ''}
          `,
          hasMap: false,
          mapUrl: undefined,
          quiz: undefined
        }
      })

      return slides
    }
    case 'sustainable-systems-comparison': {
      // 拆成「每個體系一頁」+「差異對比一頁」
      const systems = toList(s.systems)
      const sysSlides = systems.map(sys => {
        const title = `${s.title || '可持續農業體系'} — ${esc(sys.system || '')}`
        const parts = []
        if (sys.philosophy) parts.push(`<div class="row"><strong>哲學：</strong>${esc(sys.philosophy)}</div>`)
        if (sys.origin) parts.push(`<div class="row"><strong>起源：</strong>${esc(sys.origin)}</div>`)
        const core = sys.corePrinciples || sys.coreProinciples
        if (core) parts.push(listBlock('核心原則', core))
        if (sys.coreAdditions) parts.push(listBlock('核心補充', sys.coreAdditions))
        if (sys.allowedPractices) parts.push(objectOfLists('允許做法', sys.allowedPractices))
        if (sys['禁止使用']) parts.push(listBlock('禁止使用', sys['禁止使用']))
        if (sys.uniquePractices) parts.push(objectOfLists('獨特實踐', sys.uniquePractices))
        if (sys.certification) parts.push(objectOfLists('認證', sys.certification))
        if (sys.challenges) parts.push(objectOfLists('挑戰', sys.challenges))
        if (sys.benefits) parts.push(objectOfLists('效益', sys.benefits))
        if (sys.bordeauxAdoption) parts.push(objectOfScalars('波爾多採用', sys.bordeauxAdoption))
        if (sys.philosophicalDimension) parts.push(`<div class="row"><strong>哲學維度：</strong>${esc(sys.philosophicalDimension)}</div>`) 
        if (sys.controversy) parts.push(`<div class="row"><strong>爭議點：</strong>${esc(sys.controversy)}</div>`)
        if (sys.scientificDebate) parts.push(objectOfScalars('科學辯論', sys.scientificDebate))

        return {
          title,
          highlights: undefined,
          content: `<div class="system-block">${parts.join('')}</div>`,
          hasMap: false,
          mapUrl: undefined,
          quiz: undefined
        }
      })

      const table = s.comparisonTable
      const tableSlide = table ? {
        title: table.title || '體系差異對比',
        highlights: undefined,
        content: renderComparisonTable(table),
        hasMap: false,
        mapUrl: undefined,
        quiz: undefined
      } : null

      return tableSlide ? [...sysSlides, tableSlide] : sysSlides
    }
    case 'extreme-vintages-timeline': {
      slide.title = s.title || '極端年份時間軸'
      const vintages = toList(s.vintages)
      slide.content = `
        ${s.description ? `<p>${esc(s.description)}</p>` : ''}
        <div class="timeline">
          ${vintages.map(v => `
            <div class="timeline-item">
              <div class="year">${esc(v.year || '')}</div>
              <div class="body">
                ${v.type ? `<div class="type">${esc(v.type)}</div>` : ''}
                ${v.event ? `<div class="event">${esc(v.event)}</div>` : ''}
                ${v.date ? `<div class="date">${esc(v.date)}</div>` : ''}
                ${v.temperature ? `<div class="temp">${esc(v.temperature)}</div>` : ''}
                ${v.damage ? `<div class="damage">${esc(v.damage)}</div>` : ''}
                ${v.impact ? `<div class="impact">${esc(v.impact)}</div>` : ''}
                ${v.legacy ? `<div class="legacy">${esc(v.legacy)}</div>` : ''}
                ${v.conditions ? `<div class="conditions">${esc(v.conditions)}</div>` : ''}
                ${v.challenges ? `<div class="challenges">${esc(v.challenges)}</div>` : ''}
                ${v.result ? `<div class="result">${esc(v.result)}</div>` : ''}
                ${v.lesson ? `<div class="lesson">${esc(v.lesson)}</div>` : ''}
                ${v.extreme ? `<div class="extreme">${esc(v.extreme)}</div>` : ''}
                ${v.winner ? `<div class="winner">${esc(v.winner)}</div>` : ''}
                ${v.loser ? `<div class="loser">${esc(v.loser)}</div>` : ''}
                ${v.implication ? `<div class="implication">${esc(v.implication)}</div>` : ''}
                ${v.regionalDiff ? `<div class="regional">${esc(v.regionalDiff)}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
        ${s.conclusion ? `<div class="conclusion">${esc(s.conclusion)}</div>` : ''}
      `
      break
    }
    case 'soil-analysis-framework': {
      slide.title = s.title || '土壤分析框架'
      const levels = toList(s.levels)
      slide.content = `
        ${s.description ? `<p>${esc(s.description)}</p>` : ''}
        <div class="framework-grid">
          ${levels.map(l => `
            <div class="framework-card">
              <h4>${esc(l.level || '')}</h4>
              <div class="row"><strong>時間尺度：</strong>${esc(l.timeScale || '')}</div>
              <div class="row"><strong>重點：</strong>${esc(l.focus || '')}</div>
              ${l.example ? `<div class="row"><strong>例子：</strong>${esc(l.example)}</div>` : ''}
              ${l.tools ? `<div class="row"><strong>工具：</strong>${esc(l.tools)}</div>` : ''}
            </div>
          `).join('')}
        </div>
        ${s.insight ? `<div class="insight">💡 ${esc(s.insight)}</div>` : ''}
      `
      break
    }
    case 'soil-types-detailed': {
      slide.title = s.title || '土壤類型解析'
      const soilTypes = toList(s.soilTypes)
      slide.content = `
        <div class="soil-types">
          ${soilTypes.map(t => `
            <div class="soil-card">
              <div class="head">${t.icon ? `${esc(t.icon)} ` : ''}${esc(t.name || '')} <span class="fr">${esc(t.frenchName || '')}</span></div>
              ${t.distribution ? `<div class="row"><strong>分布：</strong>${esc(t.distribution)}</div>` : ''}
              ${t.geologicalOrigin ? `<div class="row"><strong>地質來源：</strong>${esc(t.geologicalOrigin)}</div>` : ''}
              ${t.composition ? `<div class="row"><strong>成分：</strong>${esc(JSON.stringify(t.composition))}</div>` : ''}
              ${t.physicalProperties ? `<div class="row"><strong>物理：</strong>${esc(JSON.stringify(t.physicalProperties))}</div>` : ''}
              ${t.chemicalProperties ? `<div class="row"><strong>化學：</strong>${esc(JSON.stringify(t.chemicalProperties))}</div>` : ''}
              ${t.bestFor ? `<div class="row"><strong>最佳品種：</strong>${esc(t.bestFor.varieties || '')}；${toList(t.bestFor.reasons).map(esc).join('、')}</div>` : ''}
              ${t.wineCharacteristics ? `<div class="row"><strong>酒款特徵：</strong>${toList(t.wineCharacteristics).map(esc).join('、')}</div>` : ''}
              ${t.topEstates ? `<div class="row"><strong>代表酒莊：</strong>${toList(t.topEstates).map(esc).join('、')}</div>` : ''}
              ${t.specialType ? `<div class="row"><strong>特殊型：</strong>${esc(t.specialType.name || '')} — ${esc(t.specialType.description || '')}</div>` : ''}
              ${t.subTypes ? `<div class="row"><strong>子類型：</strong>${toList(t.subTypes).map(esc).join('、')}</div>` : ''}
              ${t.climateAdaptation ? `<div class="row"><strong>氣候適應：</strong>${esc(t.climateAdaptation)}</div>` : ''}
            </div>
          `).join('')}
        </div>
      `
      break
    }
    case 'soil-distribution-map': {
      slide.title = s.title || '土壤地理分布'
      const regions = toList(s.regions)
      slide.content = `
        ${s.description ? `<p>${esc(s.description)}</p>` : ''}
        ${s.mapImage ? `<div class="distribution-map-image"><img src="${esc(s.mapImage)}" alt="${esc(s.title || '土壤分布圖')}" /></div>` : ''}
        <div class="regions-grid">
          ${regions.map(r => `
            <div class="region">
              <h4>${esc(r.name || '')}</h4>
              ${r.dominantSoil ? `<div><strong>主導土壤：</strong>${esc(r.dominantSoil)}</div>` : ''}
              ${r.subZones ? `<div><strong>子區：</strong>${toList(r.subZones).map(esc).join('、')}</div>` : ''}
              ${r.uniqueness ? `<div><strong>獨特性：</strong>${esc(r.uniqueness)}</div>` : ''}
              ${r.whiteWine ? `<div><strong>白酒：</strong>${esc(r.whiteWine)}</div>` : ''}
              ${r.geologicalFeature ? `<div><strong>地質特徵：</strong>${esc(r.geologicalFeature)}</div>` : ''}
              ${r.varietalFocus ? `<div><strong>品種重點：</strong>${esc(r.varietalFocus)}</div>` : ''}
              ${r.diversity ? `<div><strong>多樣性：</strong>${esc(r.diversity)}</div>` : ''}
              ${r.characteristics ? `<div><strong>特性：</strong>${esc(r.characteristics)}</div>` : ''}
              ${r.focus ? `<div><strong>重點：</strong>${esc(r.focus)}</div>` : ''}
              ${r.uniqueness || r.whiteWine || r.geologicalFeature || r.varietalFocus || r.diversity || r.characteristics || r.focus ? '' : ''}
            </div>
          `).join('')}
        </div>
      `
      break
    }
    case 'soil-grape-wine-matrix': {
      slide.title = s.title || '土壤-品種-風格矩陣'
      const cs = toList(s.correlations)
      const note = s['注意'] || s.note
      // 土壤類型對應的顏色和圖示
      const soilConfig = {
        '礫石': { color: '#8B7355', icon: '🪨', gradient: 'linear-gradient(135deg, #8B7355 0%, #A0826D 100%)' },
        '黏土': { color: '#C19A6B', icon: '🟤', gradient: 'linear-gradient(135deg, #C19A6B 0%, #D4AF83 100%)' },
        '石灰岩': { color: '#E8E8E8', icon: '⚪', gradient: 'linear-gradient(135deg, #D3D3D3 0%, #F0F0F0 100%)' },
        '砂土': { color: '#F4A460', icon: '🟡', gradient: 'linear-gradient(135deg, #F4A460 0%, #FFB84D 100%)' },
        '黏土-石灰岩': { color: '#B8956A', icon: '🟫', gradient: 'linear-gradient(135deg, #B8956A 0%, #CCA876 100%)' }
      }
      const getSoilKey = (soil) => soil.split('（')[0]
      slide.content = `
        ${s.description ? `<p class="matrix-desc">${esc(s.description)}</p>` : ''}
        <div class="soil-matrix-chart">
          ${cs.map(c => {
            const soilKey = getSoilKey(c.soil || '')
            const config = soilConfig[soilKey] || { color: '#999', icon: '⚫', gradient: 'linear-gradient(135deg, #999 0%, #BBB 100%)' }
            return `
            <div class="soil-card" style="border-left: 4px solid ${config.color}">
              <div class="soil-header" style="background: ${config.gradient}">
                <span class="soil-icon">${config.icon}</span>
                <span class="soil-name">${esc(c.soil || '')}</span>
              </div>
              <div class="soil-body">
                <div class="property-row">
                  <div class="prop-item">
                    <span class="prop-icon">💧</span>
                    <div class="prop-content">
                      <div class="prop-label">排水</div>
                      <div class="prop-value">${esc(c.drainageLevel || '')}</div>
                    </div>
                  </div>
                  <div class="prop-item">
                    <span class="prop-icon">🌡️</span>
                    <div class="prop-content">
                      <div class="prop-label">水分壓力</div>
                      <div class="prop-value">${esc(c.waterStress || '')}</div>
                    </div>
                  </div>
                </div>
                <div class="best-variety">
                  <span class="variety-icon">🍇</span>
                  <strong>${esc(c.bestVariety || '')}</strong>
                </div>
                <div class="property-grid">
                  <div class="prop-tag"><span class="tag-icon">🍷</span> ${esc(c.wineBody || '')}</div>
                  <div class="prop-tag"><span class="tag-icon">🧪</span> ${esc(c.tanninProfile || '')}</div>
                  <div class="prop-tag"><span class="tag-icon">🍋</span> ${esc(c.acidity || '')}</div>
                  <div class="prop-tag"><span class="tag-icon">🫐</span> ${esc(c.fruitCharacter || '')}</div>
                </div>
                <div class="aging-bar">
                  <span class="aging-icon">⏳</span>
                  <div class="aging-content">
                    <div class="aging-label">陳年潛力</div>
                    <div class="aging-value">${esc(c.agingPotential || '')}</div>
                  </div>
                </div>
                ${c['典型描述'] ? `<div class="typical-desc"><span class="desc-icon">✨</span>${esc(c['典型描述'])}</div>` : ''}
              </div>
            </div>
          `}).join('')}
        </div>
        ${note ? `<div class="matrix-note">💡 ${esc(note)}</div>` : ''}
      `
      break
    }
    case 'key-takeaways': {
      slide.title = s.title || '重點整理'
      const t = toList(s.takeaways)
      slide.content = `
        <ul class="takeaways">
          ${t.map(i => `<li><strong>${esc(i.point || '')}：</strong>${esc(i.detail || '')}</li>`).join('')}
        </ul>
      `
      break
    }
    case 'reflection-questions': {
      slide.title = s.title || t('common.lesson.reflectionTitle')
      const questions = toList(s.questions)
      slide.content = `
        <div class="reflection-container">
          ${questions.map((q, idx) => `
            <div class="question-card">
              <div class="question-number">${t('common.lesson.questionNumber', { n: idx + 1 })}</div>
              <div class="question-text">${esc(q.question || '')}</div>
              ${q.prompts && q.prompts.length ? `
                <div class="prompts">
                  <div class="prompts-title">${t('common.lesson.thinkingDirection')}</div>
                  <ul>
                    ${q.prompts.map(p => `<li>${esc(p)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `
      break
    }
    case 'course-complete': {
      slide.title = s.title || '課程完成'
      // 支援字串或物件陣列的 achievements 和 nextSteps
      const achievements = Array.isArray(s.achievements) ? s.achievements : (s.achievement ? [s.achievement] : [])
      const nextSteps = Array.isArray(s.nextSteps) ? s.nextSteps : []
      
      // 處理 nextSteps 的結構（可能是字串或物件）
      const renderNextSteps = () => {
        if (!nextSteps.length) return ''
        
        // 檢查是否為新的物件結構
        if (nextSteps[0] && typeof nextSteps[0] === 'object' && nextSteps[0].action) {
          return `
            <div class="next-steps-structured">
              ${nextSteps.map(step => `
                <div class="action-group">
                  <div class="action-header">${esc(step.action)}</div>
                  ${step.items && step.items.length ? `
                    <ul class="action-items">
                      ${step.items.map(item => `<li>${esc(item)}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          `
        }
        
        // 舊的字串陣列格式
        return `<div class="next-steps">${nextSteps.map(ns => `<div class="step">${esc(ns)}</div>`).join('')}</div>`
      }
      
      slide.content = `
        ${s.subtitle ? `<h4 class="complete-subtitle">${esc(s.subtitle)}</h4>` : ''}
        ${s.summary ? `<p class="complete-summary">${esc(s.summary)}</p>` : ''}
        ${s.message ? `<p>${esc(s.message)}</p>` : ''}
        ${achievements.length ? `<div class="achievements-box"><div class="achievements-title">🏅 學習成就</div><ul class="achievements-list">${achievements.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>` : ''}
        ${s.stats ? `<pre class="stats">${esc(JSON.stringify(s.stats, null, 2))}</pre>` : ''}
        ${renderNextSteps()}
        ${s.certificate ? `<div class="certificate">${esc(s.certificate)}</div>` : ''}
        ${s.shareMessage ? `<div class="share">${esc(s.shareMessage)}</div>` : ''}
      `
      break
    }
    case 'intro': {
      slide.title = s.title || t('common.lesson.objectivesTitle')
      let content = `<p>${esc(s.content)}</p>`
      if (s.duration) {
        content += `<div class="meta">⏱ ${esc(s.duration)}</div>`
      }
      // 如果包含學習目標,一併顯示
      if (s.objectives && s.objectives.length > 0) {
        const objs = toList(s.objectives)
        content += `
          <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: #667eea;">📋 ${t('common.lesson.objectivesTitle')}</h3>
          <ul class="objectives">
            ${objs.map(o => {
              if (o && typeof o === 'object') {
                const icon = o.icon ? `${esc(o.icon)} ` : ''
                const text = o.text || o.title || ''
                const desc = o.description ? `：${esc(o.description)}` : ''
                return `<li>${icon}${esc(text)}${desc}</li>`
              }
              return `<li>${esc(o)}</li>`
            }).join('')}
          </ul>
        `
      }
      slide.content = content
      break
    }
    case 'objectives': {
      slide.title = s.title || t('common.lesson.objectivesTitle')
      const objs = toList(s.objectives)
      // 支援物件型目標 {title, description, icon} 或 {text, icon}
      slide.content = `
        <ul class="objectives">
          ${objs.map(o => {
            if (o && typeof o === 'object') {
              const icon = o.icon ? `${esc(o.icon)} ` : ''
              const label = o.text || o.title || ''
              const title = label ? `<strong>${esc(label)}</strong>` : ''
              const desc = o.description ? `：${esc(o.description)}` : ''
              return `<li>${icon}${title}${desc}</li>`
            }
            return `<li>${esc(o)}</li>`
          }).join('')}
        </ul>
      `
      break
    }
    case 'chapter-divider': {
      slide.title = s.title || `第${esc(s.chapter || '')}章`
      // 標記章節資訊供章節導覽列使用
      slide.kind = 'chapter'
      slide.chapter = s.chapter || s.title || ''
      slide.icon = s.icon || ''
      slide.navLabel = s.navLabel || slide.title
      slide._isChapter = true
      // 章節頁也可顯示 highlights、描述與標準化 blocks，避免「看起來空白」
      if (Array.isArray(s.highlights) && s.highlights.length) {
        slide.highlights = s.highlights
      }
      if (Array.isArray(s.blocks) && s.blocks.length) {
        slide.blocks = s.blocks
      }
      const descHtml = s.description ? `<div class="chapter-desc">${esc(s.description)}</div>` : ''
      slide.content = `<div class="chapter">
        ${s.subtitle ? `<div class="subtitle">${esc(s.subtitle)}</div>` : ''}
        ${s.icon ? `<div class="chapter-icon">${esc(s.icon)}</div>` : ''}
        ${descHtml}
      </div>`
      break
    }
    case 'content': {
      slide.title = s.title || ''
      if (Array.isArray(s.content)) {
        slide.content = sectionsToHTML(s.content)
        // 取出具備 highlight 欄位的項目，轉為 highlights 卡片
        const hlItems = s.content.filter(x => x && x.highlight)
        if (hlItems.length) {
          slide.highlights = hlItems.map((x, idx) => ({ id: idx + 1, icon: '✨', title: x.subtitle || '重點', content: x.highlight }))
        }
      } else if (typeof s.content === 'string') {
        slide.content = `<p>${esc(s.content)}</p>`
      }
      // 若來源有 blocks（標準化區塊），保留以供元件渲染
      if (Array.isArray(s.blocks) && s.blocks.length) {
        slide.blocks = s.blocks
      }
      // 直接承接地圖相關屬性（若來源有提供）
      if (s.hasMap) {
        slide.hasMap = true
        if (s.mapFocus) slide.mapFocus = s.mapFocus
        if (s.showBordeaux !== undefined) slide.showBordeaux = s.showBordeaux
        if (typeof s.onMapReady === 'function') slide.onMapReady = s.onMapReady
        if (s.mapConfig) slide.mapConfig = s.mapConfig
      }
      break
    }
    case 'chart': {
      slide.title = s.title || '圖表'
      // 簡化為描述 + 重要觀察
      const insights = toList(s.insights)
      slide.chartData = s.data || null
      slide.chartType = s.chartType || 'line'
      slide.content = `
        ${s.description ? `<p>${esc(s.description)}</p>` : ''}
        ${insights.length ? `<ul class="insights">${insights.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}
      `
      break
    }
    case 'statistics': {
      slide.title = s.title || '關鍵指標'
      const stats = toList(s.stats)
      slide.content = `
        <div class="stats-grid">
          ${stats.map(st => `
            <div class="stat">
              <div class="name">${esc(st.indicator)}</div>
              <div class="values">
                <span class="past">${esc(st.past ?? '')}</span>
                <span class="arrow">→</span>
                <span class="present">${esc(st.present ?? '')}</span>
                <span class="change">${esc(st.change ?? '')}</span>
              </div>
              ${st.impact ? `<div class="impact">影響：${esc(st.impact)}</div>` : ''}
            </div>
          `).join('')}
        </div>
      `
      break
    }
    case 'quiz':
    case 'interactive-quiz': {
      // 支援 questions 陣列 → 拆成多頁
      if (Array.isArray(s.questions) && s.questions.length) {
        return s.questions.map((q, idx) => ({
          title: `${s.title || t('common.quiz.slideCheck')} — ${t('common.quiz.questionNumber', { n: idx + 1 })}`,  
          quiz: {
            image: q.image,
            question: q.question,
            options: toList(q.options),
            correct: q.correct,
            explanation: q.explanation
          }
        }))
      }
      // 單個 quiz（直接有 question, options, correct, explanation 屬性）
      if (s.question) {
        return {
          title: s.title || t('common.quiz.slideCheck'),
          quiz: {
            image: s.image,
            question: s.question,
            options: toList(s.options),
            correct: s.correct,
            explanation: s.explanation
          }
        }
      }
      // 保底：如果既沒有 questions 也沒有 question，設置到 slide 上
      slide.title = s.title || t('common.quiz.slideCheck')
      slide.quiz = {
        question: s.question || '',
        options: toList(s.options),
        correct: s.correct ?? 0,
        explanation: s.explanation || ''
      }
      break
    }
    case 'comparison': {
      slide.title = s.title || '比較'
      const items = toList(s.items)
      const conclusion = s.conclusion ? `<div class="conclusion">${esc(s.conclusion)}</div>` : ''
      slide.content = `
        ${s.subtitle ? `<div class="subtitle">${esc(s.subtitle)}</div>` : ''}
        <div class="comparison">
          ${items.map(it => `
            <div class="comp-item">
              <div class="label">${it.icon ? `${esc(it.icon)} ` : ''}${esc(it.label || '')}</div>
              <ul class="metrics">
                ${toList(it.metrics).map(m => `<li><strong>${esc(m.name)}：</strong>${esc(m.value)}</li>`).join('')}
              </ul>
              ${it.style ? `<div class="style">風格：${esc(it.style)}</div>` : ''}
            </div>
          `).join('')}
        </div>
        ${conclusion}
      `
      break
    }
    case 'impact-matrix': {
      slide.title = s.title || '影響矩陣'
      const vars = toList(s.varieties)
      slide.content = `
        ${s.description ? `<p>${esc(s.description)}</p>` : ''}
        <div class="impact-matrix">
          ${vars.map(v => `
            <div class="variety">
              <h4>${esc(v.name)}</h4>
              <div class="row"><strong>敏感度：</strong>${esc(v.sensitivity || '')}</div>
              <div class="row"><strong>正向：</strong>${toList(v.positives).map(esc).join('、')}</div>
              <div class="row"><strong>負向：</strong>${toList(v.negatives).map(esc).join('、')}</div>
              <div class="row"><strong>調整：</strong>${esc(v.adaptation || '')}</div>
            </div>
          `).join('')}
        </div>
      `
      break
    }
    case 'case-study': {
      slide.title = s.title || '案例研究'
      // 兼容兩種資料形狀：{estate/strategies/...} 與 {winery/region/approach/results/lessons}
      const winery = s.winery || s.estate || ''
      const region = s.region || s.classification || ''
      const strategies = toList(s.strategies)
      const outcomes = toList(s.outcomes)
      const lessons = toList(s.lessons)
      const approach = s.approach ? `<div class="block"><div class="b-title">做法：</div><pre class="pre">${esc(s.approach)}</pre></div>` : ''
      const results = s.results ? `<div class="block"><div class="b-title">成效：</div><pre class="pre">${esc(s.results)}</pre></div>` : ''
      const strategyBlock = strategies.length ? `
        <div class="strategy-list">
          ${strategies.map(st => `
            <div class="strategy">
              <div class="head">${st.icon ? `${esc(st.icon)} ` : ''}${esc(st.category || '')}</div>
              <ul>${toList(st.measures).map(m => `<li>${esc(m)}</li>`).join('')}</ul>
              ${st.results ? `<div class="results">結果：${esc(st.results)}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''
      slide.content = `
        <div class="case-intro">
          <div><strong>酒莊：</strong>${esc(winery)}${region ? `（${esc(region)}）` : ''}</div>
          ${s.challenge ? `<div><strong>挑戰：</strong>${esc(s.challenge)}</div>` : ''}
        </div>
        ${approach}
        ${results}
        ${strategyBlock}
        ${outcomes.length ? `<div class="outcomes"><h4>成果</h4><ul>${outcomes.map(o => `<li>${esc(o)}</li>`).join('')}</ul></div>` : ''}
        ${lessons.length ? `<div class="block"><div class="b-title">關鍵學習：</div><ul>${lessons.map(l => `<li>${esc(l)}</li>`).join('')}</ul></div>` : ''}
        ${s.quote?.text ? `<blockquote>“${esc(s.quote.text)}”<div class="quote-src">— ${esc(s.quote.author || '')} ${esc(s.quote.title || '')}</div></blockquote>` : ''}
      `
      break
    }
    case 'multi-estate-comparison': {
      slide.title = s.title || '酒莊比較'
      const estates = toList(s.estates)
      slide.content = `
        ${s.description ? `<p>${esc(s.description)}</p>` : ''}
        <div class="estates-grid">
          ${estates.map(e => `
            <div class="estate">
              <h4>${esc(e.name)}</h4>
              <div><strong>路徑：</strong>${esc(e.approach || '')}</div>
              <div><strong>關鍵措施：</strong>${toList(e.keyMeasures).map(esc).join('、')}</div>
              <div><strong>哲學：</strong>${esc(e.philosophy || '')}</div>
            </div>
          `).join('')}
        </div>
        ${s.insight ? `<div class="insight">💡 ${esc(s.insight)}</div>` : ''}
      `
      break
    }
    default: {
      // 將未知結構做為文字內容顯示（保底）
      slide.content = s.content ? (typeof s.content === 'string' ? s.content : sectionsToHTML(s.content)) : ''
      if (Array.isArray(s.blocks) && s.blocks.length) {
        slide.blocks = s.blocks
      }
      break
    }
  }

  // ✨ 保留原始投影片的所有其他屬性（如 geojsonPaths、showBordeaux、mapFocus、onMapReady 等）
  // 這些屬性對於地圖元件的正確配置至關重要
  const preservedProps = [
    'geojsonPath', 'geojsonPaths', 'showBordeaux', 'mapFocus', 'mapPosition',
    'onMapReady', 'presenterNotes', 'componentProps', 'highlightDelayStep', 'layout', 'mapConfig'
  ]
  preservedProps.forEach(prop => {
    if (s[prop] !== undefined && slide[prop] === undefined) {
      slide[prop] = s[prop]
    }
  })

  // ✨ 檢查是否有內嵌 quiz，若有則額外產生一張 quiz 投影片
  if (s.quiz && typeof s.quiz === 'object') {
    const quizSlide = {
      title: `${slide.title || t('common.quiz.slideCheck')}`,
      highlights: undefined,
      content: '',
      hasMap: false,
      mapUrl: undefined,
      quiz: {
        image: s.quiz.image,
        question: s.quiz.question || '',
        options: Array.isArray(s.quiz.options) ? s.quiz.options : [],
        correct: s.quiz.correct ?? 0,
        explanation: s.quiz.explanation || ''
      }
    }
    const hasPrimaryContent = (
      (slide.content && String(slide.content).trim().length > 0) ||
      (Array.isArray(slide.blocks) && slide.blocks.length > 0) ||
      !!slide.hasMap
    )
    return hasPrimaryContent ? [slide, quizSlide] : quizSlide
  }

  return slide
}

// 輔助：月份標籤簡化
function i18nMonthLabel(label) {
  if (!label) return ''
  // 嘗試擷取前置數字
  const m = label.match(/^(\d{1,2})月/)
  if (m) return `${m[1]}月`
  return label
}

// 輔助：渲染月卡
function monthCardHTML(m) {
  if (!m) return ''
  const tasks = Array.isArray(m.keyTasks) ? m.keyTasks : []
  return `
    <div class="month-card">
      <div class="month-head">${esc(m.month || '')} <span class="season">${esc(m.season || '')}</span></div>
      ${m.phenology ? `<div class="row"><strong>物候：</strong>${esc(m.phenology)}</div>` : ''}
      ${m.temperature ? `<div class="row"><strong>溫度：</strong>${esc(m.temperature)}</div>` : ''}
      ${tasks.length ? `<div class="tasks"><div class="t-title">關鍵工作</div>${tasks.map(t => renderTask(t)).join('')}</div>` : ''}
      ${m.risks ? `<div class="row"><strong>風險：</strong>${esc(m.risks)}</div>` : ''}
      ${m.decision ? `<div class="row"><strong>決策：</strong>${esc(m.decision)}</div>` : ''}
      ${m.monitoring ? `<div class="row"><strong>監測：</strong>${esc(m.monitoring)}</div>` : ''}
      ${m.planning ? `<div class="row"><strong>規劃：</strong>${esc(m.planning)}</div>` : ''}
      ${m.stress ? `<div class="row"><strong>壓力：</strong>${esc(m.stress)}</div>` : ''}
      ${m.transition ? `<div class="row"><strong>過渡：</strong>${esc(m.transition)}</div>` : ''}
      ${m.reflection ? `<div class="row"><strong>反思：</strong>${esc(m.reflection)}</div>` : ''}
    </div>
  `
}

function renderTask(t) {
  if (!t) return ''
  if (typeof t === 'string') return `<div class="task"><div class="name">${esc(t)}</div></div>`
  const name = t.task || t.name || ''
  const lines = []
  if (t.details) lines.push(`<div class="t-row">${esc(t.details)}</div>`) 
  if (t.importance) lines.push(`<div class="t-row"><em>${esc(t.importance)}</em></div>`)
  if (t.timing) lines.push(`<div class="t-row">時機：${esc(t.timing)}</div>`)
  if (t.techniques) lines.push(`<div class="t-row">技術：${Array.isArray(t.techniques) ? t.techniques.map(esc).join('、') : esc(t.techniques)}</div>`)
  if (t.methods) {
    if (typeof t.methods === 'string') {
      lines.push(`<div class="t-row">方法：${esc(t.methods)}</div>`)
    } else if (t.methods && typeof t.methods === 'object') {
      const kv = Object.entries(t.methods).map(([k, v]) => `${esc(k)}：${esc(typeof v === 'string' ? v : JSON.stringify(v))}`).join('； ')
      lines.push(`<div class="t-row">方法：${kv}</div>`)
    }
  }
  if (t.parameters) lines.push(`<div class="t-row">參數：${Array.isArray(t.parameters) ? t.parameters.map(esc).join('、') : esc(t.parameters)}</div>`)
  if (t.frequency) lines.push(`<div class="t-row">頻率：${esc(t.frequency)}</div>`)
  if (t.focus) lines.push(`<div class="t-row">重點：${esc(t.focus)}</div>`)
  if (t.monitoring) lines.push(`<div class="t-row">監測：${esc(t.monitoring)}</div>`)
  if (t.considerations) lines.push(`<div class="t-row">考量：${toList(t.considerations).map(esc).join('、')}</div>`)
  if (t.judgment) lines.push(`<div class="t-row">判斷：${esc(t.judgment)}</div>`)
  if (t.target) lines.push(`<div class="t-row">目標：${esc(t.target)}</div>`)
  if (t.ideal) lines.push(`<div class="t-row">理想條件：${esc(t.ideal)}</div>`)
  if (t.risks) lines.push(`<div class="t-row">風險：${esc(t.risks)}</div>`)
  if (t.observation) lines.push(`<div class="t-row">觀察：${esc(t.observation)}</div>`)
  if (t.skill) lines.push(`<div class="t-row">技能：${esc(t.skill)}</div>`)
  if (t.sorting) lines.push(`<div class="t-row">分選：${esc(t.sorting)}</div>`)
  if (t.transportation) lines.push(`<div class="t-row">運輸：${esc(t.transportation)}</div>`)
  return `<div class="task"><div class="name">${esc(name)}</div>${lines.join('')}</div>`
}

function labelMap(key) {
  const map = {
    risks: '風險',
    decision: '決策',
    monitoring: '監測',
    planning: '規劃',
    stress: '壓力',
    transition: '過渡',
    reflection: '反思'
  }
  return map[key] || key
}

function listBlock(title, list) {
  const items = Array.isArray(list) ? list : []
  if (!items.length) return ''
  return `<div class="block"><div class="b-title">${esc(title)}：</div><ul>${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`
}

function objectOfLists(title, obj) {
  if (!obj || typeof obj !== 'object') return ''
  const sections = Object.entries(obj).map(([k, v]) => {
    const items = Array.isArray(v) ? v : (v && typeof v === 'object' ? Object.entries(v).map(([kk, vv]) => `${esc(kk)}：${esc(typeof vv === 'string' ? vv : JSON.stringify(vv))}`) : [v])
    return `<div class="sub"><div class="label">${esc(k)}</div><ul>${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`
  }).join('')
  return `<div class="block"><div class="b-title">${esc(title)}：</div>${sections}</div>`
}

function objectOfScalars(title, obj) {
  if (!obj || typeof obj !== 'object') return ''
  const rows = Object.entries(obj).map(([k, v]) => `<div class="row"><strong>${esc(k)}：</strong>${esc(typeof v === 'string' ? v : JSON.stringify(v))}</div>`).join('')
  return `<div class="block"><div class="b-title">${esc(title)}：</div>${rows}</div>`
}

function renderComparisonTable(table) {
  const dims = Array.isArray(table.dimensions) ? table.dimensions : []
  if (!dims.length) return ''
  const headers = ['dimension', 'organic', 'biodynamic', 'sustainable']
  return `
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>有機</th>
            <th>生物動力</th>
            <th>永續</th>
          </tr>
        </thead>
        <tbody>
          ${dims.map(d => `<tr>
            <td>${esc(d.dimension || '')}</td>
            <td>${esc(d.organic || '')}</td>
            <td>${esc(d.biodynamic || '')}</td>
            <td>${esc(d.sustainable || '')}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `
}

// 通用表格渲染（headers: string[]、rows: Array<string[]|any[]>）
function renderGenericTable({ headers = [], rows = [], description = '' }) {
  const thead = headers.length ? `<thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''
  const tbody = Array.isArray(rows) ? `<tbody>${rows.map(r => `<tr>${(Array.isArray(r) ? r : []).map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>` : ''
  return `
    ${description ? `<p class="table-description">${esc(description)}</p>` : ''}
    <div class="comparison-table"><table>${thead}${tbody}</table></div>
  `
}

// ── 封面轉換 helpers ──────────────────────────────────────────────
function extractCoverPoints(html) {
  if (!html) return []
  const matches = html.match(/<h4[^>]*>([\s\S]*?)<\/h4>/gi) || []
  return matches.slice(0, 4).map(h4 => {
    const raw = h4.replace(/<[^>]+>/g, '').trim()
    // 若開頭是 emoji（codePoint > U+2000）且後面有空格，分離成 icon + text
    const spaceIdx = raw.indexOf(' ')
    if (spaceIdx > 0 && (raw.codePointAt(0) || 0) > 0x2000) {
      return { icon: raw.slice(0, spaceIdx), text: raw.slice(spaceIdx + 1) }
    }
    return { icon: '✦', text: raw }
  })
}
function extractIntroSubtitle(html) {
  if (!html) return ''
  const m = html.match(/<p[^>]*class="[^"]*intro-lead[^"]*"[^>]*>([\s\S]*?)<\/p>/i)
  if (!m) return ''
  const text = m[1].replace(/<[^>]+>/g, '').trim()
  const end = text.search(/[。！？]/)
  if (end > 0 && end < 60) return text.slice(0, end + 1)
  return text.slice(0, 55) + (text.length > 55 ? '…' : '')
}
function getCourseGradient(id) {
  if (id?.startsWith('ca-')) return 'linear-gradient(135deg, #7b2d00 0%, #c0392b 100%)'
  if (id?.startsWith('hu-')) return 'linear-gradient(135deg, #5b1fa0 0%, #3a0d7a 100%)'
  if (id?.startsWith('lo-')) return 'linear-gradient(135deg, #1a6e40 0%, #0d4a28 100%)'
  return 'linear-gradient(135deg, #722f37 0%, #4a0e15 100%)' // Bordeaux
}
function getCourseIcon(id) {
  if (id?.startsWith('ca-')) return '🍷'
  if (id?.startsWith('hu-')) return '🍾'
  if (id?.startsWith('lo-')) return '🌊'
  return '🍇'
}

const slides = computed(() => {
  const raw = lessonContent.value || []
  // 將 intro 轉為一頁封面，其餘過濾舊式 title/course-complete/end
  const transformed = raw.map((s, idx) => {
    if (!s) return null
    if (s.type === 'intro') {
      return {
        type: 'cover',
        icon: getCourseIcon(props.lessonId),
        gradient: getCourseGradient(props.lessonId),
        title: props.lessonTitle || '',
        subtitle: extractIntroSubtitle(s.content),
        points: extractCoverPoints(s.content)
      }
    }
    // 已有 cover 但無 points：從下一張 slide 的 highlights 自動補充
    if (s.type === 'cover' && !s.points?.length) {
      const next = raw[idx + 1]
      if (next?.highlights?.length) {
        return {
          ...s,
          points: next.highlights.slice(0, 4).map(h => ({ icon: h.icon || '✦', text: h.title }))
        }
      }
    }
    return s
  })
  const mapped = transformed.filter(s => s?.type !== 'title' && s?.type !== 'course-complete' && s?.type !== 'end').map(normalizeSlide)
  // 支援 normalizeSlide 回傳多張投影片
  const slideArray = mapped.flatMap(x => Array.isArray(x) ? x : [x]).filter(Boolean)
  // 若此課程為綜合評量且題庫已載入，在最後添加隨機測驗
  if (props.lessonId === 'l1-8' && finalQuizBank.value.length > 0) {
    slideArray.push({
      component: 'QuizSlide',
      componentProps: {
        slide: {
          title: `📋 ${t('common.lesson.level1FinalExam')}`,

          isFinalExam: true,
          passScore: 80,
          questions: pickRandom(finalQuizBank.value, Math.min(20, finalQuizBank.value.length))
        }
      }
    })
  }
  // 自動注入重點回顧
  // 若末尾有 QuizSlide component，summary 插在它前面；否則直接推到末尾
  const hasSummary = slideArray.some(s => s?.type === 'summary')
  if (!hasSummary) {
    let insertIdx = slideArray.length
    for (let i = slideArray.length - 1; i >= 0; i--) {
      if (slideArray[i]?.component && /quiz/i.test(slideArray[i].component)) insertIdx = i
      else break
    }
    // 過濾出有意義的標題：排除封面、quiz（含 inline quiz）、重複標題
    const seen = new Set()
    const keyPoints = slideArray.filter(s => {
      if (!s?.title) return false
      if (s?.type === 'cover' || s?.type === 'quiz') return false
      if (s?.quiz) return false   // inline quiz（有 quiz 屬性的投影片）
      if (s?.component && /quiz/i.test(s?.component || '')) return false
      if (s?.component === 'LoireRegionMapSlide') return false
      if (s?.component === 'HungaryRegionMapSlide') return false
      if (seen.has(s.title)) return false
      seen.add(s.title)
      return true
    }).slice(0, 6).map(s => s.title)
    slideArray.splice(insertIdx, 0, { type: 'summary', title: '課程完成！', message: '', keyPoints })
  }
  return slideArray
})

const totalSlides = computed(() => slides.value.length)

const currentSlideData = computed(() => {
  return slides.value[currentSlide.value] || null
})

const currentSlideTitle = computed(() => {
  const slide = currentSlideData.value
  if (!slide) return ''
  // 若此投影片包含測驗（quiz 物件或 component 含 quiz 字樣），顯示「知識檢測」
  if (slide.quiz && typeof slide.quiz === 'object') return t('common.quiz.slideCheck')
  if (slide.component && /quiz/i.test(slide.component)) return t('common.quiz.slideCheck')
  return slide.title || ''
})

// 監看當前投影片內容變化，於 DOM 更新後掛載互動按鈕（例如下載空白 PDF）
watch(() => currentSlideData.value?.content, async () => {
  await nextTick()
  attachContentActions()
})

// 章節導覽資料：從投影片中擷取 chapter-divider
const chapterItems = computed(() => {
  return slides.value
    .map((s, idx) => ({ s, idx }))
    .filter(x => x.s && (x.s._isChapter || x.s.kind === 'chapter'))
    .map(x => ({
      index: x.idx,
      label: x.s.navLabel || x.s.title || `第${x.idx + 1}章`,
      icon: x.s.icon || '',
    }))
})

// 目前所在章節：取當前頁面之前最後一個章節分隔點
const activeChapterIndex = computed(() => {
  let result = -1
  for (let i = 0; i <= currentSlide.value; i++) {
    const s = slides.value[i]
    if (s && (s._isChapter || s.kind === 'chapter')) result = i
  }
  return result
})

const getQuizOptionClass = computed(() => {
  return (index) => {
    if (!quizAnswered.value) return 'quiz-option'
    if (index === selectedAnswer.value) {
      return quizCorrect.value ? 'quiz-option correct' : 'quiz-option incorrect'
    }
    if (index === quizCorrectIndexShuffled.value) {
      return 'quiz-option correct'
    }
    return 'quiz-option'
  }
})

function getQuizOptionText(option) {
  if (typeof option === 'string') return option
  if (option && typeof option === 'object') {
    if (typeof option.text === 'string') return option.text
    if (typeof option.label === 'string') return option.label
  }
  return ''
}

const quizFeedbackExplanation = computed(() => {
  const quiz = currentSlideData.value?.quiz
  if (!quiz) return ''

  const picked = quizOptionsShuffled.value[selectedAnswer.value]
  if (picked && typeof picked === 'object' && typeof picked.explanation === 'string' && picked.explanation.trim()) {
    return picked.explanation
  }

  return typeof quiz.explanation === 'string' ? quiz.explanation : ''
})

// 載入課程內容（加入逾時保護）
const withTimeout = (p, ms = 8000) => {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('載入逾時，請重試')), ms)
    p.then((v) => { clearTimeout(t); resolve(v) }).catch((e) => { clearTimeout(t); reject(e) })
  })
}

const loadLessonContentMethod = async () => {
  if (!props.lessonId) return
  
  isLoading.value = true
  loadError.value = null
  
  try {
    console.log('[PresentationLesson] Loading lesson content for:', props.lessonId)
    const content = await withTimeout(coreLoadLessonContent(props.lessonId), 10000)
    
    if (Array.isArray(content) && content.length > 0) {
      lessonContent.value = content
      console.log('[PresentationLesson] Lesson content loaded:', content.length, 'slides')
    } else {
      // 以柔性 fallback：嘗試提供至少一個提示頁，避免整個視圖空白
      console.warn('[PresentationLesson] Empty or invalid lesson content, using graceful fallback')
      lessonContent.value = [
        { type: 'content', title: '課程暫時無內容', content: '<p>此課程內容尚未準備完成或載入失敗。</p><p>請稍後再試，或點擊下方重新載入。</p>' }
      ]
    }
  } catch (error) {
    console.error('載入課程內容失敗:', error)
    loadError.value = error.message || '載入課程內容時發生錯誤'
  } finally {
    isLoading.value = false
  }
}

// 重新載入方法
const retryLoad = () => {
  loadLessonContentMethod()
}

// 導航方法
const nextSlide = () => {
  // 可到達：0（第一張內容）… totalSlides - 1（最後一張內容）
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
    resetQuiz()
    // 滾動到頂部
    nextTick(() => {
      const container = document.querySelector('.learning-main') || document.querySelector('.slide-container')
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
    resetQuiz()
    // 滾動到頂部
    nextTick(() => {
      const container = document.querySelector('.learning-main') || document.querySelector('.slide-container')
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }
}

const goToSlide = (index) => {
  // slides[] 是從第一張內容頁開始的 0-based；畫面上的 currentSlide=0 為標題頁
  currentSlide.value = (index ?? 0) + 1
  resetQuiz()
  // 滾動到頂部
  nextTick(() => {
    const container = document.querySelector('.learning-main') || document.querySelector('.slide-container')
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })
}

// 地圖控制
const toggleMap = () => {
  showMap.value = !showMap.value
}

// 測驗方法
const selectAnswer = (index) => {
  if (quizAnswered.value) return
  
  selectedAnswer.value = index
  quizAnswered.value = true
  quizCorrect.value = index === quizCorrectIndexShuffled.value
  
  // 記錄測驗答案到進度追蹤系統
  progressActions.recordQuizAnswer(props.lessonId, currentSlide.value, quizCorrect.value)
}

function shuffleQuizForCurrentSlide() {
  const quiz = currentSlideData.value?.quiz
  if (!quiz || !Array.isArray(quiz.options)) {
    quizOptionsShuffled.value = []
    quizCorrectIndexShuffled.value = null
    return
  }
  const options = quiz.options.slice()
  let correctIndex = Number.isInteger(quiz.correct) ? quiz.correct : -1
  if (correctIndex < 0) {
    correctIndex = options.findIndex(opt => opt && typeof opt === 'object' && opt.correct === true)
  }
  const indices = options.map((_, i) => i)
  // Fisher-Yates 洗牌
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  quizOptionsShuffled.value = indices.map(i => options[i])
  quizCorrectIndexShuffled.value = indices.indexOf(correctIndex)
}

const resetQuiz = () => {
  quizAnswered.value = false
  selectedAnswer.value = null
  quizCorrect.value = false
  showMap.value = false
  shuffleQuizForCurrentSlide()
}

// 課程完成控制
const closeCompletionCard = () => {
  showCompletionCard.value = false
}

const restartLesson = () => {
  currentSlide.value = 0
  showCompletionCard.value = true
  resetQuiz()
}

const nextLesson = () => {
  emit('nextLesson')
}

// 處理 component slide（如 ImageQuizSeries）完成事件
const onComponentQuizComplete = ({ passed } = {}) => {
  if (passed) {
    emit('lessonComplete')
  }
}

// 生命週期和響應式處理
watch(() => props.lessonId, (newLessonId) => {
  if (newLessonId) {
    currentSlide.value = 0
    resetQuiz()
    loadLessonContentMethod()
    // 開始新的學習會話
    const lessonTitle = lessonData.value?.title || props.lessonId
    progressActions.startSession(props.lessonId, lessonTitle)
  }
}, { immediate: true })

// 追蹤投影片瀏覽
watch(currentSlide, (newSlide) => {
  if (lessonContent.value && lessonContent.value.length > 0) {
    progressActions.recordSlideView(props.lessonId, newSlide, lessonContent.value.length)
  }
})

onMounted(() => {
  // 進入課程時捲回最上方，確保返回按鈕可見
  window.scrollTo({ top: 0, behavior: 'instant' })
  resetQuiz()
  // 開始學習會話
  const lessonTitle = lessonData.value?.title || props.lessonId
  progressActions.startSession(props.lessonId, lessonTitle)
  // 若為 L1 綜合評量課，預載題庫
  if (props.lessonId === 'l1-8') loadQuizBank()
})

// 組件卸載時結束學習會話
onUnmounted(() => {
  progressActions.endSession()
})

// 暴露給父組件使用的方法和數據
defineExpose({
  currentSlide,
  totalSlides,
  currentSlideTitle,
  nextSlide,
  previousSlide,
  goToSlide
})
</script>

<style>
/* 自訂元件外層保險容器：避免父層高度塌陷導致互動投影片看起來是空白 */
.custom-slide-host {
  min-height: 360px;
  display: block;
  padding: 8px 0;
}
@media (max-width: 640px) {
  .custom-slide-host { min-height: 300px; }
}
</style>

<style scoped>
/* ── 一頁封面投影片（PresentationLesson 內嵌） ── */
.pl-cover-host {
  min-height: 520px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
}

/* ── 課程完成摘要投影片（PresentationLesson 內嵌） ── */
.pl-summary-host {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  min-height: 400px;
  padding: 20px 0;
}
.pl-complete-btn {
  background: linear-gradient(135deg, #4CAF50, #388E3C);
  color: white;
  border: none;
  padding: 14px 48px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}
.pl-complete-btn:hover { opacity: 0.9; transform: translateY(-2px); }

.presentation-lesson {
  position: relative;
}

/* 基礎樣式 */
.presentation-lesson {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: 'Microsoft JhengHei', 'Arial', sans-serif;
}

/* 載入和錯誤狀態 */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background: white;
  color: #333;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.retry-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.retry-btn:hover {
  background: #5a6fd8;
}

/* 課程內容區域 */
.lesson-content {
  width: 100%;
  color: #333;
}

/* 進度指示器 */
.progress-indicator { display: none; }

.slide-counter {
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  margin: 0 2rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
  transition: width 0.5s ease;
}

/* 幻燈片容器 */
.slide-container {
  background: white;
  color: #333;
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-height: 70vh;
  max-width: 1060px;       /* limit width for better focus */
  margin-left: auto;       /* center container */
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

/* 有地圖的投影片：放寬為全寬，讓左右 1:1 版面明顯生效 */
.slide-container.with-map {
  max-width: none;
  width: 100%;
}

.slide {
  min-height: calc(100vh - 200px);
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 標題頁樣式 */
.title-slide {
  text-align: center;
  padding: 2rem 0;
}

.slide-title {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
}

.slide-subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: normal;
}

.slide-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.slide-meta span {
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
}

.objectives-preview {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.objectives-preview h3 {
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.objectives-preview ul {
  list-style: none;
  padding: 0;
}

.objectives-preview li {
  background: white;
  color: #333;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

/* 內容幻燈片樣式 */
.content-slide {
  padding: 1rem 0;
}

.chapter-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 0.5rem;
  justify-content: center;
}

.chapter-chip {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #374151;
  padding: 6px 10px;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.chapter-chip .icon { opacity: 0.9; }

.chapter-chip:hover { background: #eef2ff; border-color: #c7d2fe; }

.chapter-chip.active {
  background: #e0e7ff;
  border-color: #6366f1;
  color: #1f2937;
  font-weight: 700;
}

.slide-heading {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
}

/* 重點標記區域 */
.highlights-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.highlight-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #667eea;
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.highlight-content h4 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.highlight-content p {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* 主要內容區域 */
.main-content {
  margin: 2rem 0;
  line-height: 1.6;
  color: #333;
}

/* 正規化後常用元素樣式（L3-1 支援） */
.main-content .section { margin-bottom: 1rem; }

/* 內容與地圖布局 */
.content-with-map {
  display: flex;
  gap: 1.5rem;
  min-height: 600px;
}

.main-content.with-map {
  flex: 1 1 50%; /* 1:1 比例,左側佔50% */
  min-width: 0;
  overflow-y: auto;
  max-height: calc(100vh - 250px);
  padding-right: 1rem;
}

.map-section {
  flex: 1 1 50% !important; /* 1:1 比例,右側佔50% */
  min-width: 0 !important;
  max-width: none !important; /* 移除最大寬度限制 */
  min-height: 600px !important;
  height: calc(100vh - 250px) !important;
  max-height: 800px !important;
  position: sticky !important;
  top: 20px !important;
  background: #f5f5f5 !important;
  border-radius: 8px !important;
}

/* 響應式布局 */
@media (max-width: 1200px) {
  .content-with-map {
    flex-direction: column-reverse; /* 反轉順序,讓地圖在上方 */
  }
  
  .main-content.with-map {
    max-height: none;
    overflow-y: visible;
    padding-right: 0;
  }
  
  .map-section {
    position: static;
    flex: 0 0 auto;
    min-width: 100%;
    max-width: 100%;
    height: 400px; /* 手機版地圖高度調整 */
    min-height: 400px !important;
    margin-bottom: 1rem; /* 地圖與內容間距 */
  }
}

@media (max-height: 768px) {
  .content-with-map {
    flex-direction: column-reverse; /* 保持地圖在上方 */
    min-height: auto;
  }

  .main-content.with-map {
    max-height: none;
    overflow: visible;
    padding-right: 0;
  }

  .map-section {
    position: static !important;
    flex: 0 0 auto !important;
    min-width: 100% !important;
    max-width: 100% !important;
    height: 360px !important;
    max-height: none !important;
    margin-top: 1rem;
  }

  .quiz-section {
    margin-top: 1.5rem;
  }
}

/* ★ 全幅左右分欄佈局 (layout: 'split') */
.slide-split-layout {
  display: flex;
  gap: 1.5rem;
  min-height: 560px;
  align-items: stretch;
}

.split-left-col {
  flex: 1 1 50%;
  min-width: 0;
  overflow-y: auto;
  max-height: calc(100vh - 190px);
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
}

.split-left-col .slide-heading {
  text-align: left;
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.split-left-col .highlights-section {
  margin: 0.5rem 0 0.75rem;
}

.split-left-col .main-content {
  margin: 0.5rem 0 0;
  flex: 1;
}

/* key-facts / strategic-location 用於 split 佈局內容 */
.split-left-col .key-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
  margin: 0.75rem 0;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 0.75rem 1rem;
}
.split-left-col .fact-item {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
}
.split-left-col .fact-item strong {
  color: #333;
}
.split-left-col .strategic-location {
  margin-top: 0.75rem;
}
.split-left-col .strategic-location h4 {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
}
.split-left-col .strategic-location ul {
  padding-left: 1.2rem;
  margin: 0;
}
.split-left-col .strategic-location li {
  font-size: 0.93rem;
  color: #555;
  margin-bottom: 0.35rem;
  line-height: 1.5;
}
.split-left-col .lead-text {
  font-size: 0.97rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.split-right-col {
  flex: 1 1 50%;
  min-width: 0;
  min-height: 560px;
  height: calc(100vh - 190px);
  max-height: 820px;
  position: sticky;
  top: 20px;
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .slide-split-layout {
    flex-direction: column;
  }
  .split-left-col {
    max-height: none;
    overflow-y: visible;
    padding-right: 0;
  }
  .split-right-col {
    position: static;
    height: 400px;
    min-height: 400px;
    max-height: none;
  }
}

@media (max-height: 768px) {
  .slide-split-layout {
    flex-direction: column;
    min-height: auto;
  }
  .split-left-col {
    max-height: none;
    overflow-y: visible;
  }
  .split-right-col {
    position: static !important;
    height: 360px !important;
    max-height: none !important;
  }
}

.main-content .inline-highlight {
  background: #fff3cd;
  color: #7a5b00;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}
.main-content .insights { padding-left: 1.2rem; }
.main-content .insights li { margin: 0.25rem 0; }
.main-content .chart-placeholder {
  margin-top: 1rem; padding: 0.75rem 1rem;
  background: #f0f4ff; border: 1px dashed #667eea; border-radius: 8px;
}
.main-content .stats-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem; margin-top: 1rem;
}
.main-content .stat { background: #f8f9fa; border-radius: 10px; padding: 0.75rem 1rem; }
.main-content .stat .name { font-weight: 700; margin-bottom: 0.4rem; }
.main-content .stat .values { display: flex; gap: 6px; align-items: baseline; flex-wrap: wrap; }
.main-content .stat .change { color: #c2185b; font-weight: 700; }
.main-content .impact { color: #555; font-size: 0.9rem; margin-top: 0.25rem; }

.main-content .comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.main-content .comp-item { background: #f8f9fa; border-radius: 10px; padding: 1rem; }
.main-content .comp-item .label { font-weight: 700; margin-bottom: 0.5rem; }
.main-content .comp-item .metrics { padding-left: 1rem; }
.main-content .conclusion { margin-top: 1rem; background: #eefaf2; border: 1px solid #c7eed8; padding: 0.75rem 1rem; border-radius: 8px; }

.main-content .impact-matrix { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
.main-content .impact-matrix .variety { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 1rem; }
.main-content .impact-matrix .row { margin-top: 0.25rem; }

.main-content .case-intro { background: #f7f7ff; border-left: 4px solid #667eea; padding: 0.75rem 1rem; border-radius: 8px; }
.main-content .strategy-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-top: 1rem; }
.main-content .strategy { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.75rem 1rem; }
.main-content .strategy .head { font-weight: 700; margin-bottom: 0.5rem; }
.main-content .outcomes { margin-top: 1rem; }
.main-content blockquote { margin: 1rem 0; font-style: italic; background: #fafafa; padding: 0.75rem 1rem; border-left: 4px solid #764ba2; border-radius: 6px; }
.main-content .quote-src { font-size: 0.9rem; color: #666; margin-top: 0.25rem; }

.main-content .estates-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
.main-content .estate { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.75rem 1rem; }
.main-content .insight { margin-top: 1rem; background: #fff8e1; border: 1px solid #ffe082; padding: 0.75rem 1rem; border-radius: 8px; }

.main-content .objectives { padding-left: 1.2rem; }
.main-content .objectives li { margin: 0.3rem 0; }

.main-content .chapter { text-align: center; padding: 1rem; background: #f8f9ff; border-radius: 12px; }
.main-content .chapter .subtitle { color: #666; margin-top: 0.25rem; }

/* Timeline for extreme vintages */
.main-content .timeline { display: grid; gap: 0.75rem; margin-top: 0.75rem; }
.main-content .timeline-item { display: grid; grid-template-columns: 80px 1fr; gap: 0.75rem; background: #fafafa; border: 1px solid #eee; border-radius: 10px; padding: 0.75rem 1rem; }
.main-content .timeline-item .year { font-weight: 800; color: #333; }
.main-content .timeline-item .body > div { margin: 2px 0; }

/* Framework cards */
.main-content .framework-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.75rem; margin-top: 0.75rem; }
.main-content .framework-card { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.75rem 1rem; }
.main-content .framework-card .row { margin-top: 0.25rem; }

/* Soil types detailed */
.main-content .soil-types { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
.main-content .soil-card { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.75rem 1rem; }
.main-content .soil-card .head { font-weight: 800; margin-bottom: 0.5rem; }
.main-content .soil-card .head .fr { color: #666; font-weight: 400; margin-left: 6px; }
.main-content .soil-card .row { margin-top: 0.25rem; }

/* Regions grid */
.main-content .distribution-map-image {
  margin: 1.5rem 0 2rem 0;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.main-content .distribution-map-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.main-content .regions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
.main-content .region { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.75rem 1rem; }

/* Soil-grape-wine matrix - Visual Chart */
.main-content .matrix-desc { text-align: center; margin-bottom: 1.5rem; font-size: 1.05rem; color: #555; }
.main-content .soil-matrix-chart { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.2rem; }
.main-content .soil-card { background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; transition: all 0.3s ease; }
.main-content .soil-card:hover { transform: translateY(-4px); box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
.main-content .soil-header { padding: 1rem; display: flex; align-items: center; gap: 0.75rem; color: #333; }
.main-content .soil-icon { font-size: 1.8rem; }
.main-content .soil-name { font-size: 1.15rem; font-weight: 700; color: #2c3e50; }
.main-content .soil-body { padding: 1rem; }
.main-content .property-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
.main-content .prop-item { display: flex; align-items: flex-start; gap: 0.5rem; background: #f8f9fa; padding: 0.6rem; border-radius: 8px; }
.main-content .prop-icon { font-size: 1.3rem; line-height: 1; }
.main-content .prop-content { flex: 1; }
.main-content .prop-label { font-size: 0.75rem; color: #666; margin-bottom: 0.15rem; }
.main-content .prop-value { font-size: 0.95rem; font-weight: 600; color: #333; }
.main-content .best-variety { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-size: 1.05rem; }
.main-content .variety-icon { font-size: 1.3rem; }
.main-content .property-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1rem; }
.main-content .prop-tag { background: #e8eaf6; color: #5c6bc0; padding: 0.5rem 0.7rem; border-radius: 6px; font-size: 0.85rem; display: flex; align-items: center; gap: 0.3rem; }
.main-content .tag-icon { font-size: 1rem; }
.main-content .aging-bar { background: #fff3e0; border: 1px solid #ffb74d; padding: 0.7rem; border-radius: 8px; display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; }
.main-content .aging-icon { font-size: 1.3rem; }
.main-content .aging-content { flex: 1; }
.main-content .aging-label { font-size: 0.75rem; color: #e65100; margin-bottom: 0.15rem; }
.main-content .aging-value { font-size: 0.95rem; font-weight: 600; color: #e65100; }
.main-content .typical-desc { background: #f3e5f5; border-left: 3px solid #ab47bc; padding: 0.7rem 0.9rem; border-radius: 6px; font-size: 0.9rem; color: #4a148c; line-height: 1.5; display: flex; gap: 0.5rem; }
.main-content .desc-icon { font-size: 1.1rem; flex-shrink: 0; }
.main-content .matrix-note { margin-top: 1rem; color: #555; background: #fff8e1; border: 1px solid #ffe082; padding: 0.75rem 1rem; border-radius: 8px; display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.95rem; line-height: 1.6; }

/* Takeaways */
.main-content .takeaways { 
  padding-left: 1.2rem; 
  list-style: none;
}

.main-content .takeaways li {
  background: #f8f9fa;
  padding: 1.25rem;
  margin: 1rem 0;
  border-radius: 10px;
  border-left: 5px solid #667eea;
  line-height: 1.7;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.main-content .takeaways li strong {
  color: #667eea;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}
.main-content .takeaways li { margin: 0.35rem 0; }

/* Reflection Questions */
.main-content .reflection-container { display: grid; gap: 1.5rem; }
.main-content .question-card { background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%); border: 2px solid #667eea; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1); }
.main-content .question-number { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem; }
.main-content .question-text { font-size: 1.15rem; font-weight: 600; color: #2c3e50; line-height: 1.6; margin-bottom: 1rem; }
.main-content .prompts { background: #f0f4ff; border-left: 4px solid #667eea; padding: 1rem 1.2rem; border-radius: 8px; margin-top: 1rem; }
.main-content .prompts-title { font-weight: 700; color: #667eea; margin-bottom: 0.75rem; font-size: 0.95rem; }
.main-content .prompts ul { margin: 0; padding-left: 1.5rem; }
.main-content .prompts li { color: #4a5568; line-height: 1.7; margin: 0.5rem 0; }

/* Course Complete Enhanced */
.main-content .complete-subtitle { color: #667eea; font-size: 1.3rem; margin-bottom: 1rem; text-align: center; }
.main-content .complete-summary { background: linear-gradient(135deg, #f0f4ff 0%, #e8eaf6 100%); border-left: 4px solid #667eea; padding: 1.2rem; border-radius: 10px; font-size: 1.05rem; line-height: 1.8; color: #2c3e50; margin-bottom: 1.5rem; }
.main-content .achievements-box { background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%); border: 2px solid #ffd700; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; }
.main-content .achievements-title { font-size: 1.2rem; font-weight: 700; color: #d4af37; margin-bottom: 1rem; text-align: center; }
.main-content .achievements-list { list-style: none; padding: 0; margin: 0; }
.main-content .achievements-list li { background: white; border-left: 4px solid #ffd700; padding: 0.8rem 1rem; margin: 0.5rem 0; border-radius: 8px; font-size: 1rem; color: #333; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.main-content .next-steps-structured { display: grid; gap: 1.2rem; margin-top: 1.5rem; }
.main-content .action-group { background: white; border: 2px solid #e8eaf6; border-radius: 12px; padding: 1.2rem; }
.main-content .action-header { font-size: 1.15rem; font-weight: 700; color: #667eea; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
.main-content .action-header::before { content: '→'; font-size: 1.3rem; }
.main-content .action-items { margin: 0; padding-left: 1.8rem; }
.main-content .action-items li { color: #4a5568; line-height: 1.8; margin: 0.6rem 0; position: relative; }
.main-content .action-items li::marker { color: #667eea; font-weight: bold; }

/* Vineyard calendar */
.main-content .calendar-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
.main-content .month-card { background: #fff; border: 1px solid #eee; border-radius: 12px; padding: 0.75rem 1rem; }
.main-content .month-card .month-head { font-weight: 800; margin-bottom: 0.25rem; }
.main-content .month-card .month-head .season { font-weight: 400; color: #666; margin-left: 6px; }
.main-content .month-card .row { margin-top: 0.25rem; }
.main-content .tasks { margin-top: 0.35rem; }
.main-content .t-title { font-weight: 700; margin-bottom: 0.25rem; }
.main-content .task { background: #f9fafb; border: 1px dashed #e5e7eb; border-radius: 8px; padding: 0.5rem 0.6rem; margin-bottom: 0.35rem; }
.main-content .task .name { font-weight: 700; }
.main-content .t-row { font-size: 0.95rem; color: #444; margin-top: 2px; }

/* Sustainable systems */
.main-content .system-block .row { margin: 4px 0; }
.main-content .block { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.6rem 0.8rem; margin-top: 0.5rem; }
.main-content .block .b-title { font-weight: 800; margin-bottom: 0.25rem; }
.main-content .block .sub { margin-top: 0.35rem; }
.main-content .block .sub .label { font-weight: 700; margin-bottom: 0.2rem; }
/* Comparison Matrix (for L2-9) */
.main-content .matrix-intro { text-align: center; font-size: 1.05rem; color: #555; margin-bottom: 1.5rem; }
.main-content .comparison-matrix-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; }
.main-content .matrix-card { background: white; border: 2px solid #e8eaf6; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: all 0.3s ease; }
.main-content .matrix-card:hover { transform: translateY(-4px); box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
.main-content .matrix-card-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem 1.2rem; display: flex; align-items: center; gap: 0.75rem; }
.main-content .matrix-icon { font-size: 1.8rem; }
.main-content .matrix-card-header h4 { margin: 0; font-size: 1.2rem; font-weight: 700; }
.main-content .matrix-card-body { padding: 1rem; }
.main-content .matrix-item { display: flex; justify-content: space-between; align-items: flex-start; padding: 0.7rem 0.8rem; margin: 0.4rem 0; background: #f8f9fa; border-radius: 8px; gap: 1rem; }
.main-content .matrix-item.highlight { background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%); border-left: 4px solid #ffd700; font-weight: 600; }
.main-content .item-label { color: #666; font-size: 0.9rem; flex-shrink: 0; min-width: 80px; }
.main-content .item-value { color: #333; font-size: 0.95rem; text-align: right; flex: 1; }

/* Knowledge Review Cards (for L2-9) */
.main-content .knowledge-review { margin: 1rem 0; }
.main-content .key-points-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem; }
.main-content .point-card { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border: 2px solid #dee2e6; border-radius: 10px; padding: 1rem; }
.main-content .point-card h5 { color: #667eea; margin: 0 0 0.75rem 0; font-size: 1.1rem; }
.main-content .point-card ul { margin: 0; padding-left: 1.3rem; }
.main-content .point-card li { color: #4a5568; line-height: 1.7; margin: 0.5rem 0; }
.main-content .pomerol-highlights, .main-content .saint-emilion-structure { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1rem; }
.main-content .highlight-box, .main-content .structure-section { background: white; border: 2px solid #e8eaf6; border-radius: 10px; padding: 1rem; }
.main-content .highlight-box h5, .main-content .structure-section h5 { color: #667eea; margin: 0 0 0.75rem 0; font-size: 1rem; border-bottom: 2px solid #e8eaf6; padding-bottom: 0.5rem; }
.main-content .quiz-intro { text-align: center; font-style: italic; color: #666; padding: 1rem; background: #f0f4ff; border-radius: 8px; margin-bottom: 1rem; }
.main-content .assessment-intro { background: linear-gradient(135deg, #f0f4ff 0%, #e8eaf6 100%); border: 2px solid #667eea; border-radius: 12px; padding: 1.5rem; margin: 1rem 0; }
.main-content .assessment-intro h4 { color: #667eea; margin-top: 0; }
.main-content .passing-criteria { background: white; border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px; margin-top: 1rem; }
.main-content .passing-criteria h5 { color: #10b981; margin-top: 0; }

.main-content .comparison-table { margin-top: 1rem; overflow-x: auto; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.main-content .comparison-table table { width: 100%; border-collapse: collapse; }
.main-content .comparison-table th { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem 1.2rem; text-align: left; font-weight: 700; font-size: 1.05rem; border: none; }
.main-content .comparison-table th:first-child { border-top-left-radius: 12px; }
.main-content .comparison-table th:last-child { border-top-right-radius: 12px; }
.main-content .comparison-table td { border: 1px solid #e8eaf6; padding: 0.9rem 1.2rem; text-align: left; line-height: 1.6; font-size: 0.95rem; }
.main-content .comparison-table td:first-child { font-weight: 700; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); color: #667eea; }
.main-content .comparison-table tbody tr:hover { background: #f0f4ff; transition: background 0.2s ease; }
.main-content .comparison-table tbody tr:last-child td:first-child { border-bottom-left-radius: 12px; }
.main-content .comparison-table tbody tr:last-child td:last-child { border-bottom-right-radius: 12px; }
.main-content .table-description { text-align: center; font-size: 1.05rem; color: #555; margin-bottom: 1rem; font-style: italic; }

/* Generic table */
.main-content .generic-table { margin-top: 0.75rem; overflow-x: auto; }
.main-content .generic-table table { width: 100%; border-collapse: collapse; }
.main-content .generic-table th, .main-content .generic-table td { border: 1px solid #e0e0e0; padding: 6px 8px; text-align: left; }
.main-content .generic-table thead { background: #f7f7ff; }

/* New blocks for L3-5 types */
.main-content .process-step .row,
.main-content .botrytis-stage .row,
.main-content .monitoring-card .row,
.main-content .tech-card .row,
.main-content .toast-stage .row { margin: 4px 0; }
.main-content .tech-card,
.main-content .monitoring-card,
.main-content .toast-stage,
.main-content .botrytis-stage,
.main-content .process-step { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.6rem 0.8rem; }
.main-content .process-step .step-image { 
  margin: 0 0 1rem 0; 
  text-align: center; 
  border-radius: 8px; 
  overflow: hidden;
}
.main-content .process-step .step-image img { 
  max-width: 100%; 
  height: auto; 
  display: block; 
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.main-content .soil-detail .soil-image { 
  margin: 0 0 1.5rem 0; 
  text-align: center; 
  border-radius: 12px; 
  overflow: hidden;
  background: #f8f9fa;
  padding: 1rem;
}
.main-content .soil-detail .soil-image img { 
  max-width: 100%; 
  height: auto; 
  display: block; 
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.main-content .soil-detail .soil-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
}
.main-content .soil-detail .soil-section {
  margin-bottom: 1.2rem;
}
.main-content .soil-detail .soil-section.highlight {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
}
.main-content .soil-detail .soil-section.special {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
}
.main-content .soil-detail .soil-section.warning {
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f44336;
}
.main-content .pre { white-space: pre-wrap; background: #fafafa; border: 1px dashed #e0e0e0; border-radius: 8px; padding: 0.5rem 0.6rem; }

/* Month meta & notes */
.main-content .month-meta { display: flex; flex-wrap: wrap; gap: 6px; margin: 0.5rem 0 0.75rem; }
.main-content .month-meta .tag { background: #eef2ff; color: #3730a3; border: 1px solid #c7d2fe; padding: 2px 6px; border-radius: 9999px; font-size: 0.85rem; }
.main-content .notes { 
  margin-top: 1rem; 
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 2px solid #0ea5e9; 
  border-radius: 12px; 
  padding: 1rem 1.2rem;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.1);
}
.main-content .notes .row {
  line-height: 1.8;
  color: #0c4a6e;
  font-size: 0.95rem;
}
.main-content .notes .row:first-child {
  font-weight: 700;
  font-size: 1.1rem;
  color: #0369a1;
  margin-bottom: 0.5rem;
}
.main-content .notes .row:empty {
  margin: 0.3rem 0;
}

/* Course complete */
.main-content .badge { margin: 0.5rem 0; display: inline-block; background: #e8f5e9; color: #2e7d32; padding: 0.25rem 0.5rem; border-radius: 6px; font-weight: 700; }
.main-content .stats { background: #f9f9f9; border: 1px solid #eee; padding: 0.5rem; border-radius: 6px; max-height: 200px; overflow: auto; }
.main-content .next-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem; margin-top: 0.5rem; }
.main-content .next-steps .step { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 0.5rem 0.75rem; }
.main-content .certificate { margin-top: 0.5rem; font-weight: 700; }
.main-content .share { margin-top: 0.5rem; color: #666; }

/* 地圖區域 */
.map-section {
  margin: 2rem 0;
}

.map-toggle-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: background 0.3s ease;
}

.map-toggle-btn:hover {
  background: #218838;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.interactive-map {
  width: 100%;
  height: 100%;
  border: none;
}

/* 測驗區域 */
.quiz-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.quiz-title {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.quiz-image {
  display: block;
  max-width: 520px;
  width: 100%;
  height: auto;
  margin: 0 0 12px 0;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.quiz-question {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.quiz-options {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.quiz-option {
  background: white;
  color: #1a1a1a;
  border: 2px solid #e9ecef;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.quiz-option:hover:not(:disabled) {
  border-color: #667eea;
  background: #f0f4ff;
  color: #1a1a1a;
}

.quiz-option.correct {
  background: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.quiz-option.incorrect {
  background: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.quiz-option:disabled {
  cursor: not-allowed;
}

.quiz-feedback {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

.feedback-text {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.feedback-text.correct {
  color: #28a745;
}

.feedback-text.incorrect {
  color: #dc3545;
}

.quiz-explanation {
  color: #666;
  font-style: italic;
  margin: 0;
}

/* 導航控制 */
.navigation-controls { display: none; }

.nav-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  background: #5a6fd8;
  transform: translateY(-1px);
}

.nav-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.slide-indicators { display: none; }

/* 課程完成區域 */
.completion-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.completion-card {
  background: white;
  color: #333;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 500px;
  margin: 2rem;
}

.close-completion-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
}

.close-completion-btn:hover {
  color: #333;
}

.completion-card h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.completion-card p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.completion-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.restart-btn, .next-lesson-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.restart-btn {
  background: #6c757d;
  color: white;
}

.restart-btn:hover {
  background: #5a6268;
}

.next-lesson-btn {
  background: #28a745;
  color: white;
}

.next-lesson-btn:hover {
  background: #218838;
}

/* 過渡動畫 */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* 自定義內容樣式 */
.impact-overview h3 {
  color: #667eea;
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  font-weight: 700;
}

.impact-overview p {
  color: #333;
  line-height: 1.8;
  margin: 1rem 0;
}

.impact-list,
.strategy-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.impact-list li,
.strategy-list li {
  background: #f8f9fa;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  line-height: 1.6;
}

.highlight-box {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 5px solid #ff6b6b;
  margin: 1.5rem 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.highlight-box strong {
  color: #d63031;
  font-size: 1.1rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .presentation-lesson {
    padding: 1rem;
  }
  
  .slide-title {
    font-size: 2rem;
  }
  
  .slide-subtitle {
    font-size: 1.2rem;
  }
  
  .slide-heading {
    font-size: 1.8rem;
  }
  
  .slide-container {
    padding: 2rem 1.5rem;
  }
  
  .highlights-section {
    grid-template-columns: 1fr;
  }
  
  .slide-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navigation-controls {
    padding: 1rem;
  }
  
  .completion-actions {
    flex-direction: column;
  }
}

/* 手機優化 - 精簡版 */
@media (max-width: 640px) {
  .presentation-lesson {
    padding: 0.5rem;
  }
  
  /* 幻燈片容器 */
  .slide-container {
    padding: 1rem 0.75rem;
    border-radius: 12px;
  }
  
  /* 標題頁精簡 */
  .slide-title {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  
  .slide-subtitle {
    font-size: 1rem;
  }
  
  .slide-heading {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .slide-meta {
    flex-direction: row;
    gap: 0.75rem;
    font-size: 0.85rem;
  }
  
  /* 浮動導航按鈕縮小 */
  .floating-nav {
    position: sticky;
    top: 8px;
    gap: 6px;
  }
  
  .floating-nav .nav-btn,
  .nav-btn {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 6px;
  }
  
  /* 章節導航緊湊化 */
  .chapter-nav {
    gap: 4px;
    margin-bottom: 0.75rem;
  }
  
  .chapter-chip {
    padding: 5px 8px;
    font-size: 0.75rem;
  }
  
  .chapter-chip .icon {
    font-size: 0.9em;
  }
  
  /* 目標卡片 */
  .objectives-section {
    margin-top: 1.5rem;
  }
  
  .section-title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
  
  .objective-grid {
    gap: 0.75rem;
  }
  
  .objective-card {
    padding: 0.75rem;
  }
  
  .objective-icon {
    width: 28px;
    height: 28px;
    font-size: 0.85rem;
  }
  
  .objective-text {
    font-size: 0.85rem;
  }
  
  /* 重點區塊 */
  .highlights-section {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .highlight-card {
    padding: 0.75rem;
  }
  
  .highlight-icon {
    font-size: 1.5rem;
  }
  
  .highlight-content h4 {
    font-size: 1rem;
  }
  
  .highlight-content p {
    font-size: 0.85rem;
  }
  
  /* 內容與地圖布局 */
  .content-with-map {
    flex-direction: column;
    gap: 1rem;
  }
  
  .main-content {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .main-content.with-map {
    max-width: 100%;
  }
  
  .map-section {
    min-height: 250px;
    margin-top: 0;
  }
  
  /* 測驗區塊 */
  .quiz-section {
    padding: 1rem;
  }
  
  .quiz-title {
    font-size: 1.2rem;
  }
  
  .quiz-question {
    font-size: 1rem;
  }
  
  .quiz-options button {
    padding: 0.75rem;
    font-size: 0.9rem;
    color: #1a1a1a;
  }
  
  .quiz-feedback {
    padding: 0.75rem;
  }
  
  .feedback-text {
    font-size: 1rem;
  }
  
  .quiz-explanation {
    font-size: 0.85rem;
  }
  
  /* 完成卡片 */
  .completion-card {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .completion-card h3 {
    font-size: 1.5rem;
  }
  
  .completion-card p {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
  
  .completion-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .restart-btn, .next-lesson-btn {
    padding: 0.65rem 1.2rem;
    font-size: 0.9rem;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .slide-title {
    font-size: 1.5rem;
  }
  
  .slide-container {
    padding: 1.5rem 1rem;
  }
  
  .slide-dot {
    width: 8px;
    height: 8px;
  }
  
  .nav-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>

