<template>
  <div class="presentation-lesson">
    <!-- 載入狀態 -->
    <div v-if="isLoading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>載入課程內容中...</p>
    </div>

    <!-- 錯誤狀態 -->
    <div v-else-if="loadError" class="error-state">
      <div class="error-icon">⚠️</div>
      <h3>載入失敗</h3>
      <p>{{ loadError }}</p>
      <button @click="loadLessonContent" class="retry-btn">重新載入</button>
    </div>

    <!-- 主要內容 -->
    <div v-else class="lesson-content">
      <!-- 課程進度指示器 -->
      <div class="progress-indicator">
        <div class="slide-counter">
          {{ currentSlide + 1 }} / {{ totalSlides }}
        </div>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }"
          ></div>
        </div>
      </div>

      <!-- 簡報幻燈片 -->
      <div class="slide-container">
        <transition name="slide" mode="out-in">
          <div :key="currentSlide" class="slide">
            <!-- 標題頁 -->
            <div v-if="currentSlide === 0" class="title-slide">
              <h1 class="slide-title">{{ lessonData.title }}</h1>
              <h2 class="slide-subtitle">{{ lessonData.subtitle }}</h2>
              <div class="slide-meta">
                <span class="duration">📚 {{ lessonData.duration }}</span>
                <span class="difficulty">⭐ {{ lessonData.difficulty }}</span>
              </div>
              <!-- 首頁不渲染內容（currentSlideData在第0頁為null）-->
              <!-- 可視需要在此加入課程目標或導讀 -->

              <!-- 本課學習目標 -->
              <section v-if="lessonData?.objectives?.length" class="objectives-section">
                <h3 class="section-title">本課學習目標</h3>
                <div class="objective-grid">
                  <div 
                    v-for="(obj, idx) in lessonData.objectives" 
                    :key="idx" 
                    class="objective-card"
                  >
                    <div class="objective-icon" :aria-label="`目標 ${idx+1}`">{{ idx + 1 }}</div>
                    <div class="objective-text">{{ obj }}</div>
                  </div>
                </div>
              </section>

              <!-- 隱藏的互動地圖按鈕 -->
              <div v-if="currentSlideData && currentSlideData.hasMap && !showMap" class="map-toggle">
                <button @click="toggleMap" class="show-map-btn">
                  🗺️ 顯示互動地圖
                </button>
              </div>

              <!-- 可選的互動地圖 -->
              <div v-if="currentSlideData && currentSlideData.hasMap && showMap" class="map-section">
                <div class="map-header">
                  <h4>🗺️ 互動地圖探索</h4>
                  <button @click="toggleMap" class="hide-map-btn" title="隱藏地圖">✕</button>
                </div>
                <div class="map-placeholder">
                  <div class="placeholder-content">
                    <p>🌍 互動地圖功能</p>
                    <p>點擊地圖上的區域探索更多信息</p>
                    <div class="mock-map-controls">
                      <button class="map-btn">🔍 放大</button>
                      <button class="map-btn">🗺️ 圖層</button>
                      <button class="map-btn">📍 標記</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 小測驗 -->
              <div v-if="currentSlideData && currentSlideData.quiz" class="slide-quiz">
                <div class="quiz-header">
                  <h4>💡 快速複習</h4>
                </div>
                <div class="quiz-content">
                  <p class="quiz-question">{{ enhanceText(currentSlideData.quiz.question) }}</p>
                  <div class="quiz-options">
                    <button 
                      v-for="(option, index) in currentSlideData.quiz.options"
                      :key="index"
                      @click="selectQuizAnswer(index)"
                      :class="['quiz-option', getQuizOptionClass(index)]"
                      :disabled="quizAnswered"
                    >
                      {{ enhanceText(option) }}
                    </button>
                  </div>
                  <div v-if="quizAnswered" class="quiz-feedback">
                    <p :class="['feedback-text', quizCorrect ? 'correct' : 'incorrect']">
                      {{ quizCorrect ? '✅ 答對了！' : '❌ 再想想看' }}
                    </p>
                    <p class="quiz-explanation">{{ enhanceText(currentSlideData.quiz.explanation) }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 內容頁（第1頁起） -->
            <div v-else class="content-slide">
              <h2 v-if="currentSlideData?.title" class="slide-title">{{ currentSlideData.title }}</h2>

              <!-- 本頁重點（highlights） -->
              <div 
                v-if="currentSlideData?.highlights && currentSlideData.highlights.length"
                class="highlights-section"
              >
                <div 
                  v-for="item in currentSlideData.highlights" 
                  :key="item.id || item.title"
                  class="highlight-card"
                >
                  <div v-if="item.icon" class="highlight-icon">{{ item.icon }}</div>
                  <div class="highlight-content">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.content }}</p>
                  </div>
                </div>
              </div>

              <!-- 主要內容 -->
              <div class="main-content" v-html="currentSlideData.content"></div>

              <!-- 互動地圖切換 -->
              <div v-if="currentSlideData.hasMap && !showMap" class="map-toggle">
                <button @click="toggleMap" class="show-map-btn">
                  🗺️ 顯示互動地圖
                </button>
              </div>

              <!-- 可選的互動地圖 -->
              <div v-if="currentSlideData.hasMap && showMap" class="map-section">
                <div class="map-header">
                  <h4>🗺️ 互動地圖探索</h4>
                  <button @click="toggleMap" class="hide-map-btn" title="隱藏地圖">✕</button>
                </div>
                <div class="map-placeholder">
                  <div class="placeholder-content">
                    <p>🌍 互動地圖功能</p>
                    <p>點擊地圖上的區域探索更多信息</p>
                    <div class="mock-map-controls">
                      <button class="map-btn">🔍 放大</button>
                      <button class="map-btn">🗺️ 圖層</button>
                      <button class="map-btn">📍 標記</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 小測驗 -->
              <div v-if="currentSlideData.quiz" class="slide-quiz">
                <div class="quiz-header">
                  <h4>💡 快速複習</h4>
                </div>
                <div class="quiz-content">
                  <p class="quiz-question">{{ enhanceText(currentSlideData.quiz.question) }}</p>
                  <div class="quiz-options">
                    <button 
                      v-for="(option, index) in currentSlideData.quiz.options"
                      :key="index"
                      @click="selectQuizAnswer(index)"
                      :class="['quiz-option', getQuizOptionClass(index)]"
                      :disabled="quizAnswered"
                    >
                      {{ enhanceText(option) }}
                    </button>
                  </div>
                  <div v-if="quizAnswered" class="quiz-feedback">
                    <p :class="['feedback-text', quizCorrect ? 'correct' : 'incorrect']">
                      {{ quizCorrect ? '✅ 答對了！' : '❌ 再想想看' }}
                    </p>
                    <p class="quiz-explanation">{{ enhanceText(currentSlideData.quiz.explanation) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </transition>
      <!-- Glossary toggle -->
      <div class="glossary-controls" style="margin-top:8px;text-align:right;">
        <button class="glossary-toggle" @click="showGlossary = !showGlossary">📚 術語辭典</button>
      </div>
      <div v-if="showGlossary" class="glossary-drawer">
        <button class="glossary-close" @click="showGlossary=false" title="關閉">✕</button>
        <h4>術語快速查詢</h4>
        <div class="glossary-item"><span class="term">AOC</span>：法國原產地控制命名，保障產地與工藝的品質系統。</div>
        <div class="glossary-item"><span class="term">Terroir</span>：風土，包含氣候、土壤、地形與人為因素。</div>
        <div class="glossary-item"><span class="term">Left Bank / Right Bank</span>：加龍河/多爾多涅河兩側的主要產區集合。</div>
        <div class="glossary-item"><span class="term">Cabernet Sauvignon</span>：晚熟、高單寧，左岸代表性品種。</div>
        <div class="glossary-item"><span class="term">Merlot</span>：早熟、柔順，右岸代表性品種。</div>
        <div class="glossary-item"><span class="term">Sauternes</span>：蘇玳，貴腐甜白酒代表產區。</div>
      </div>
    </div>
    </div>

    <!-- 導航控制 -->
    <div class="navigation-controls">
      <button 
        @click="previousSlide" 
        :disabled="currentSlide === 0"
        class="nav-btn prev-btn"
      >
        ← 上一頁
      </button>

      <div class="slide-indicators">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          @click="goToSlide(index)"
          :class="['slide-dot', { active: currentSlide === index }]"
        >
        </button>
      </div>

      <button 
        @click="nextSlide" 
        :disabled="currentSlide === totalSlides - 1"
        class="nav-btn next-btn"
      >
        下一頁 →
      </button>
    </div>

    <!-- 課程完成提示 -->
    <div v-if="currentSlide === totalSlides - 1 && showCompletionCard" class="completion-section">
      <div class="completion-card">
        <button @click="closeCompletionCard" class="close-completion-btn" title="關閉">✕</button>
        <h3>🎉 課程完成！</h3>
        <p>你已經完成了 "{{ lessonData.title }}" 的學習</p>
        <div class="completion-actions">
          <button @click="reviewLesson" class="review-btn">📝 複習重點</button>
          <button @click="nextLesson" class="next-lesson-btn">🚀 下一課程</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { LessonContentManager } from '../data/lessonContentLoader.js'
import { enhanceText as enhanceTextUtil } from '../utils/textEnhancers.js'

function enhanceText(text) { return enhanceTextUtil(text) }

const props = defineProps({
  lessonId: String,
})

const emit = defineEmits(['lessonComplete', 'nextLesson'])

// 響應式數據
const currentSlide = ref(0)
const showMap = ref(false)
const quizAnswered = ref(false)
const selectedAnswer = ref(null)
const quizCorrect = ref(false)
const showCompletionCard = ref(true)
const isLoading = ref(false)
const loadError = ref(null)

// 課程內容管理器實例
const contentManager = new LessonContentManager()

// 課程數據映射
const lessonDataMap = {
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
  'l1-2': {
    title: '波爾多氣候與環境基礎',
    subtitle: '探索影響波爾多葡萄酒品質的自然環境因素',
    duration: '10分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握波爾多溫帶海洋性氣候 (Oceanic Climate) 的特徵',
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
      '了解AOC的基本概念與重要性',
      '認識波爾多AOC階層系統',
      '學習酒標上的法規資訊解讀',
      '掌握品質分級與選酒應用'
    ]
  },
  'l1-7': {
    title: '品嚐技巧基礎',
    subtitle: '掌握專業品酒方法與感官訓練',
    duration: '22分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握「望、聞、品」三步驟品酒法',
      '識別葡萄酒的基本風味特徵',
      '學習基礎品酒詞彙與表達方式',
      '培養感官分析與評鑑能力'
    ]
  },
  'l1-8': {
    title: 'Level 1 綜合評量',
    subtitle: '檢驗波爾多葡萄酒基礎知識掌握程度',
    duration: '30分鐘',
    difficulty: 'Level 1 Final',
    objectives: [
      '綜合運用所學的波爾多葡萄酒知識',
      '完成Level 1認證綜合測驗',
      '檢視學習成果與知識整合',
      '為Level 2進階學習做準備'
    ]
  },
  'l2-1': {
    title: 'Médoc產區深度探索',
    subtitle: '深入了解波爾多左岸最負盛名的產區',
    duration: '35分鐘',
    difficulty: 'Level 2',
    objectives: [
      '認識Médoc半島的地理特徵與土壤多樣性',
      '掌握AOC分級體系與1855年分級制度',
      '深入了解四大一級酒莊的位置與特色',
      '學習Médoc釀酒風格與陳年潛力',
      '分析四大村莊的風格差異'
    ]
  },
  'l2-2': {
    title: 'Margaux - 優雅的香水之鄉',
    subtitle: '深入探索"葡萄酒中的香水"的優雅魅力',
    duration: '30分鐘',
    difficulty: 'Level 2',
    objectives: [
      '了解Margaux獨特的砂質砂礫土壤特徵',
      '認識Château Margaux等傳奇酒莊',
      '掌握Margaux優雅精緻的風格特色',
      '學習紫羅蘭等典型香氣識別',
      '探索餐酒搭配的藝術原則'
    ]
  },
  'l2-3': {
    title: 'Pauillac - 王者風範的產區',
    subtitle: '探索擁有三座一級酒莊的Pauillac產區',
    duration: '35分鐘',
    difficulty: 'Level 2',
    objectives: [
      '認識Pauillac產區的地理優勢與風土特色',
      '深入了解Lafite、Latour、Mouton三大一級酒莊',
      '掌握Pauillac強勁複雜的風格特徵',
      '學習Cabernet Sauvignon的卓越表現',
      '理解頂級酒款的陳年潛力與品嚐技巧'
    ]
  },
  'l2-4': {
    title: 'Saint-Julien - 平衡的典範',
    subtitle: '探索Médoc半島最均衡完美的產區',
    duration: '32分鐘',
    difficulty: 'Level 2',
    objectives: [
      '認識Saint-Julien產區的優越地理位置與風土條件',
      '深入了解Ducru-Beaucaillou、Léoville家族等頂級酒莊',
      '掌握Saint-Julien優雅平衡的經典風格',
      '學習Cabernet Sauvignon與Merlot的完美平衡',
      '理解"最一致產區"的品質保證與投資價值'
    ]
  },
  'l2-5': {
    title: 'Saint-Estèphe - 北地之珠',
    subtitle: '探索Médoc最北端的獨特產區與現代轉型',
    duration: '34分鐘',
    difficulty: 'Level 2',
    objectives: [
      '認識Saint-Estèphe產區的地理特色與氣候條件',
      '深入了解Cos d\'Estournel、Montrose等頂級酒莊',
      '掌握Saint-Estèphe傳統厚重到現代優雅的風格演進',
      '學習黏土土壤對Merlot表現的影響',
      '理解現代化釀酒技術對產區風格的改造'
    ]
  },
  'l2-6': {
    title: 'Pomerol - 稀世珍寶',
    subtitle: '探索波爾多最小最精品的頂級產區',
    duration: '32分鐘',
    difficulty: 'Level 2',
    objectives: [
      '深入了解Pomerol作為波爾多最小精品產區的地理特色與獨特邊界',
      '掌握以Pétrus為首的傳奇酒莊陣容，探索頂級莊園的釀酒哲學',
      '分析獨特的黏土與鐵質土壤如何造就Merlot的極致表現',
      '理解Pomerol絲絢優雅的風格特徵與複雜香氣層次',
      '探索全球市場地位、投資價值以及稀缺性對價格的深遠影響'
    ]
  },
  'l2-7': {
    title: 'Saint-Émilion - 古老榮耀',
    subtitle: '探索波爾多右岸最古老最輝煌的產區',
    duration: '36分鐘',
    difficulty: 'Level 2',
    objectives: [
      '認識Saint-Émilion作為世界文化遺產的歷史地位與地理特色',
      '深入了解Cheval Blanc、Ausone等傳奇酒莊與分級制度',
      '掌握多樣化土壤類型對葡萄品種選擇與風格表現的影響',
      '理解高原、坡地、平原三大區域的風土差異與風格特徵',
      '探索Saint-Émilion在現代市場的品牌價值與收藏投資潛力'
    ]
  }
}

// 動態載入課程內容
const lessonContent = ref([])

// 計算屬性
const lessonData = computed(() => {
  return lessonDataMap[props.lessonId] || lessonDataMap['l1-1']
})

const slides = computed(() => {
  return lessonContent.value
})

// 載入課程內容
const loadLessonContent = async () => {
  if (!props.lessonId) return
  
  isLoading.value = true
  loadError.value = null
  
  try {
    const content = await contentManager.loadLesson(props.lessonId)
    lessonContent.value = content
  } catch (error) {
    console.error('載入課程內容失敗:', error)
    loadError.value = error.message
    // 如果動態載入失敗，使用內建的靜態內容作為後備
    loadStaticContent()
  } finally {
    isLoading.value = false
  }
}

// 靜態內容後備方案
const loadStaticContent = () => {
  // 如果動態載入失敗，使用內建的課程列表作為後備
  if (props.lessonId === 'l2-7') {
    lessonContent.value = [
      { type: 'title' },
      {
        title: '世界遺產地位與產區歷史',
        highlights: [
          { id: 1, icon: '🏛️', title: '世界遺產', content: 'Saint-Émilion是UNESCO世界文化遺產產區' },
          { id: 2, icon: '⏳', title: '千年歷史', content: '自羅馬時代即有葡萄栽培傳統' }
        ],
        content: `<p>Saint-Émilion是波爾多最古老的葡萄酒產區之一，1999年被列為UNESCO世界文化遺產...</p>`,
        hasMap: true,
        mapFocus: 'RightBank-SaintEmilion',
        quiz: {
          question: 'Saint-Émilion於哪一年被列為UNESCO世界文化遺產？',
          options: ['1985年', '1999年', '2005年', '2012年'],
          correct: 1,
          explanation: 'Saint-Émilion於1999年被UNESCO列為世界文化遺產。'
        }
      }
    ]
  } else if (props.lessonId === 'loading-fallback') {
    // 為其他課程提供基本結構
    lessonContent.value = [
      { type: 'title' },
      {
        title: '課程內容載入中...',
        highlights: [
          { id: 1, icon: '📚', title: '載入中', content: '正在準備課程內容' }
        ],
        content: '<p>課程內容正在載入中，請稍後...</p>',
        hasMap: false,
        quiz: {
          question: '課程載入測試',
          options: ['選項1', '選項2', '選項3', '選項4'],
          correct: 0,
          explanation: '這是測試內容。'
        }
      }
    ]
  } else if (props.lessonId === 'l2-3') {
    return [
      { type: 'title' },
      {
        title: 'Pauillac產區地理與風土優勢',
        highlights: [
          { id: 1, icon: '👑', title: '王者產區', content: 'Pauillac擁有三座一級酒莊，展現王者風範' },
          { id: 2, icon: '🏔️', title: '砂礫高地', content: '優越的砂礫高地提供完美的排水條件' }
        ],
        content: '<div class="pauillac-terroir"><p class="lead-text">Pauillac是波爾多最具王者風範的產區，擁有三座一級酒莊，代表了波爾多紅酒的最高水準。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Pauillac產區地理概況</h4><div class="geography-overview"><div class="location-details"><div class="location-card strategic"><h5>🎯 戰略地理位置</h5><div class="location-content"><p><strong>核心位置：</strong>位於Médoc半島中心偏南，佔據最優越的風土條件</p><p><strong>產區面積：</strong>約1,200公頃，規模適中但品質卓越</p><p><strong>海拔高度：</strong>5-30米的緩坡地形，排水條件極佳</p><div class="strategic-advantages"><h6>地理優勢</h6><ul><li><strong>河流優勢：</strong>緊鄰Gironde河，享受最佳的氣候調節</li><li><strong>砂礫台地：</strong>深厚的砂礫層提供完美排水</li><li><strong>朝向優勢：</strong>東南朝向獲得充足日照</li><li><strong>風土多樣：</strong>不同地塊的土壤特色明顯</li></ul></div></div></div><div class="location-card premier-estates"><h5>👑 一級酒莊分布</h5><div class="premier-distribution"><div class="estate-location lafite"><h6>Château Lafite Rothschild</h6><p><strong>位置：</strong>產區北部，緊鄰Saint-Estèphe邊界</p><p><strong>地形：</strong>海拔30米的砂礫高地</p><p><strong>特色：</strong>優雅精緻的典型代表</p></div><div class="estate-location latour"><h6>Château Latour</h6><p><strong>位置：</strong>產區東南部，Gironde河畔</p><p><strong>地形：</strong>著名的"Enclos"圍牆葡萄園</p><p><strong>特色：</strong>力量與結構的完美結合</p></div><div class="estate-location mouton"><h6>Château Mouton Rothschild</h6><p><strong>位置：</strong>產區中部，與Lafite相鄰</p><p><strong>地形：</strong>砂礫丘陵的頂部地帶</p><p><strong>特色：</strong>濃郁奔放的現代風格</p></div></div></div><div class="location-card boundaries"><h5>🔲 產區邊界特色</h5><div class="boundary-details"><div class="boundary-north"><h6>北部邊界</h6><p>與Saint-Estèphe接壤，土壤逐漸過渡到黏土</p></div><div class="boundary-south"><h6>南部邊界</h6><p>與Saint-Julien相鄰，風格相互影響</p></div><div class="boundary-east"><h6>東部河岸</h6><p>沿Gironde河岸，享受最佳氣候調節</p></div><div class="boundary-west"><h6>西部內陸</h6><p>向內陸延伸，土壤條件漸變</p></div></div></div></div></div><div class="terroir-section soil-composition"><h4>🪨 Pauillac土壤的卓越性</h4><div class="soil-analysis"><div class="soil-characteristics"><h5>🔬 土壤構成分析</h5><div class="soil-breakdown"><div class="soil-type gunz-gravel"><h6>岡茲砂礫 (Günz Gravel)</h6><div class="soil-details"><p><strong>地質年代：</strong>第四紀冰河期形成的古老砂礫</p><p><strong>組成特徵：</strong>大顆粒石英砂礫，排水極佳</p><p><strong>分布區域：</strong>主要分布在一級酒莊周圍</p><div class="soil-benefits"><h7>土壤優勢</h7><ul><li><strong>深層排水：</strong>2-3米深的砂礫層確保完美排水</li><li><strong>熱儲存：</strong>白天吸熱，夜間緩慢釋放</li><li><strong>礦物質：</strong>豐富的石英提供獨特礦物感</li><li><strong>根系深扎：</strong>促使葡萄根系深入土壤</li></ul></div></div></div><div class="soil-type clay-limestone"><h6>黏土石灰岩基層</h6><div class="soil-details"><p><strong>深層結構：</strong>砂礫層下的黏土石灰岩基岩</p><p><strong>水分調節：</strong>為深層根系提供穩定水源</p><div class="soil-benefits"><h7>基岩作用</h7><ul><li><strong>水分儲備：</strong>乾旱期提供深層水分</li><li><strong>礦物供應：</strong>鈣質和礦物質的來源</li><li><strong>根系錨定：</strong>為老藤提供穩定支撐</li><li><strong>pH調節：</strong>維持土壤酸鹼平衡</li></ul></div></div></div><div class="soil-type iron-oxide"><h6>氧化鐵層 (Crasse de fer)</h6><div class="soil-details"><p><strong>特殊層位：</strong>部分地區存在的鐵質硬盤層</p><p><strong>影響作用：</strong>限制排水，需要人工處理</p><div class="soil-benefits"><h7>管理策略</h7><ul><li><strong>破碎處理：</strong>現代機械破碎鐵盤層</li><li><strong>排水改善：</strong>安裝排水系統</li><li><strong>根系引導：</strong>引導根系穿透硬盤</li><li><strong>土壤改良：</strong>添加有機質改善結構</li></ul></div></div></div></div></div><div class="vineyard-management"><h5>🍇 葡萄園管理實踐</h5><div class="management-practices"><div class="practice density"><h6>種植密度策略</h6><p><strong>密度標準：</strong>每公頃10,000-12,000株</p><p><strong>行距配置：</strong>行距1米，株距0.8-1米</p><p><strong>管理目標：</strong>通過高密度種植增加根系競爭，提高果實品質</p><div class="density-benefits"><ul><li>促進根系深扎尋找養分</li><li>增加果實濃縮度</li><li>提高單寧質量</li><li>增強風土表達</li></ul></div></div><div class="practice rootstock"><h6>砧木選擇原則</h6><p><strong>主要砧木：</strong>101-14、3309C、Riparia Gloire</p><p><strong>選擇標準：</strong>適應砂礫土壤，抗病性強</p><div class="rootstock-characteristics"><div class="rootstock-type resistant"><strong>抗病砧木：</strong>對根瘤蚜和線蟲具有抗性</div><div class="rootstock-type vigorous"><strong>活力控制：</strong>適度控制樹勢，促進果實成熟</div><div class="rootstock-type adaptive"><strong>土壤適應：</strong>在砂礫土中生長良好</div></div></div><div class="practice canopy"><h6>樹冠管理技術</h6><p><strong>修剪方式：</strong>居由 (Guyot) 和高登 (Cordon) 結合</p><p><strong>葉幕管理：</strong>精確控制葉果比例</p><div class="canopy-goals"><ul><li><strong>光照優化：</strong>確保果實充分光照</li><li><strong>通風良好：</strong>預防真菌疾病</li><li><strong>溫度調節：</strong>避免果實過度曝曬</li><li><strong>成熟均勻：</strong>促進果實同步成熟</li></ul></div></div></div></div></div></div><div class="terroir-section climate-excellence"><h4>🌤️ Pauillac的氣候優勢</h4><div class="climate-analysis"><div class="climate-factors"><h5>🌍 宏觀氣候特徵</h5><div class="climate-elements"><div class="element maritime"><h6>海洋性氣候影響</h6><div class="maritime-effects"><p><strong>溫度調節：</strong>Gironde河提供最直接的氣候緩衝</p><ul><li>年均溫度：13.5°C，生長季19-23°C</li><li>溫差控制：日夜溫差8-10°C，有利香氣發展</li><li>霜凍保護：春季霜凍風險極低</li><li>成熟延長：秋季溫和，延長成熟期</li></ul></div></div><div class="element precipitation"><h6>降雨分布模式</h6><div class="precipitation-effects"><p><strong>年降雨量：</strong>850-900mm，分布相對均勻</p><ul><li><strong>春季適量：</strong>促進萌芽和新梢生長</li><li><strong>夏季適中：</strong>7-8月較乾燥，利於濃縮</li><li><strong>採收期：</strong>9-10月降雨適度</li><li><strong>冬季充足：</strong>補充土壤水分儲備</li></ul></div></div><div class="element sunshine"><h6>日照條件分析</h6><div class="sunshine-effects"><p><strong>年日照時數：</strong>2,000-2,100小時</p><ul><li><strong>東南朝向：</strong>獲得充足的上午陽光</li><li><strong>河面反射：</strong>Gironde河面增加光照</li><li><strong>成熟促進：</strong>充足日照確保完全成熟</li><li><strong>香氣發展：</strong>光照條件利於香氣物質形成</li></ul></div></div></div></div><div class="microclimate-variations"><h5>🎯 微氣候差異分析</h5><div class="microclimate-zones"><div class="zone riverside"><h6>河岸地帶微氣候</h6><p><strong>特徵：</strong>直接受Gironde河調節，溫度最穩定</p><div class="microclimate-effects"><ul><li><strong>溫度緩衝：</strong>河水提供強大的溫度調節</li><li><strong>霜凍保護：</strong>水體熱容量大，防霜效果最佳</li><li><strong>濕度調節：</strong>適度濕度，不會過於乾燥</li><li><strong>風向影響：</strong>河風帶來清涼，減少病害</li></ul></div></div><div class="zone plateau"><h6>砂礫高台微氣候</h6><p><strong>特徵：</strong>排水最佳，日間升溫快，夜間降溫明顯</p><div class="microclimate-effects"><ul><li><strong>快速升溫：</strong>砂礫土白天快速吸熱</li><li><strong>夜間放熱：</strong>晚上緩慢釋放熱量</li><li><strong>應力環境：</strong>適度水分應力提高品質</li><li><strong>風土表達：</strong>最能反映Pauillac風土特色</li></ul></div></div><div class="zone transition"><h6>過渡地帶微氣候</h6><p><strong>特徵：</strong>介於河岸和高台之間，條件較為均衡</p><div class="microclimate-effects"><ul><li><strong>平衡條件：</strong>溫度和濕度相對平衡</li><li><strong>穩定性：</strong>氣候條件較為穩定</li><li><strong>多樣性：</strong>為調配提供不同風格的葡萄</li><li><strong>一致性：</strong>年份間變化相對較小</li></ul></div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'LeftBank-Medoc-Pauillac',
        quiz: {
          question: 'Pauillac產區擁有幾座一級酒莊？',
          options: ['1座', '2座', '3座', '4座'], 
          correct: 2,
          explanation: 'Pauillac產區擁有3座一級酒莊：Château Lafite Rothschild、Château Latour和Château Mouton Rothschild，這是所有波爾多產區中一級酒莊數量最多的。'
        }
      },
      {
        title: 'Lafite、Latour、Mouton三大一級酒莊',
        highlights: [
          { id: 1, icon: '🏰', title: '三大傳奇', content: 'Pauillac擁有世界最著名的三座一級酒莊' },
          { id: 2, icon: '💎', title: '各具特色', content: '每座酒莊都有獨特的風格與傳承' }
        ],
        content: '<div class="pauillac-premiers"><p class="lead-text">Pauillac的三座一級酒莊代表了波爾多紅酒的最高成就，每一座都有獨特的歷史、風土和風格特色。</p><div class="premiers-analysis"><div class="premier-section lafite"><h4>🌟 Château Lafite Rothschild - 優雅的典範</h4><div class="chateau-profile"><div class="profile-card history"><h5>🏰 Lafite歷史傳承</h5><div class="history-details"><div class="historical-period medieval"><h6>中世紀起源 (13世紀)</h6><p>最初由Gombaud de Lafite建立，名稱來源於古法語"la hite"，意為"高地"</p></div><div class="historical-period noble-era"><h6>貴族時代 (17-18世紀)</h6><p>塞古爾侯爵(Marquis de Ségur)時期達到巔峰，被稱為"酒王之王"</p></div><div class="historical-period rothschild"><h6>羅斯柴爾德時代 (1868至今)</h6><p>詹姆斯·羅斯柴爾德男爵購入，開啟現代化管理時代</p></div></div></div><div class="profile-card terroir"><h5>🌱 Lafite風土特色</h5><div class="terroir-analysis"><div class="vineyard-composition"><h6>葡萄園構成</h6><p><strong>總面積：</strong>112公頃</p><p><strong>葡萄園：</strong>107公頃</p><p><strong>平均樹齡：</strong>40年</p><p><strong>最老樹齡：</strong>超過80年的老藤</p></div><div class="soil-profile"><h6>土壤特徵</h6><p><strong>表層：</strong>細砂礫，排水極佳</p><p><strong>中層：</strong>粗砂礫混石灰岩碎片</p><p><strong>底層：</strong>第三紀石灰岩基岩</p><p><strong>特色：</strong>北坡地形，微氣候涼爽</p></div><div class="grape-blend"><h6>品種調配</h6><ul><li><strong>Cabernet Sauvignon：</strong>70%</li><li><strong>Merlot：</strong>25%</li><li><strong>Cabernet Franc：</strong>3%</li><li><strong>Petit Verdot：</strong>2%</li></ul></div></div></div><div class="profile-card style"><h5>🎯 Lafite風格特徵</h5><div class="style-characteristics"><div class="aroma-profile"><h6>香氣特色</h6><p><strong>主導香氣：</strong>黑醋栗、雪松、鉛筆芯</p><p><strong>花香調：</strong>紫羅蘭、玫瑰花瓣</p><p><strong>香料調：</strong>肉桂、丁香、煙草</p><p><strong>陳年香氣：</strong>皮革、雪茄盒、松露</p></div><div class="palate-structure"><h6>口感結構</h6><p><strong>酒體：</strong>中等到飽滿，優雅精緻</p><p><strong>單寧：</strong>絲滑細膩，如天鵝絨般</p><p><strong>酸度：</strong>清新平衡，提供骨架</p><p><strong>餘韻：</strong>悠長複雜，持續50-70秒</p></div><div class="aging-character"><h6>陳年特性</h6><p><strong>年輕期：</strong>優雅克制，需要時間發展</p><p><strong>成熟期：</strong>展現完美的平衡與複雜度</p><p><strong>巔峰期：</strong>30-50年的超長陳年潛力</p></div></div></div></div></div><div class="premier-section latour"><h4>⚡ Château Latour - 力量的象徵</h4><div class="chateau-profile"><div class="profile-card history"><h5>🏰 Latour歷史傳承</h5><div class="history-details"><div class="historical-period fortress"><h6>要塞起源 (14世紀)</h6><p>名稱來自古代的防禦塔樓，象徵堅固與力量</p></div><div class="historical-period segur-era"><h6>塞古爾家族 (17-18世紀)</h6><p>與Lafite同屬塞古爾家族，建立了卓越聲譽</p></div><div class="historical-period modern-era"><h6>現代化時期 (19-21世紀)</h6><p>持續的技術創新和品質提升，保持頂級地位</p></div></div></div><div class="profile-card terroir"><h5>🌱 Latour風土特色</h5><div class="terroir-analysis"><div class="enclos-vineyard"><h6>著名的"Enclos"葡萄園</h6><p><strong>核心地塊：</strong>47公頃的圍牆葡萄園</p><p><strong>位置：</strong>緊鄰Gironde河的最佳地段</p><p><strong>土壤：</strong>深厚的砂礫層，排水完美</p><p><strong>樹齡：</strong>平均樹齡60年，部分超過100年</p></div><div class="soil-composition"><h6>土壤構成</h6><p><strong>砂礫含量：</strong>高達75%的砂礫比例</p><p><strong>顆粒大小：</strong>中等到大顆粒砂礫</p><p><strong>基岩：</strong>石灰岩和黏土混合基岩</p><p><strong>厚度：</strong>4-6米深的砂礫層</p></div><div class="grape-composition"><h6>品種組成</h6><ul><li><strong>Cabernet Sauvignon：</strong>78%</li><li><strong>Merlot：</strong>18%</li><li><strong>Cabernet Franc：</strong>3%</li><li><strong>Petit Verdot：</strong>1%</li></ul></div></div></div><div class="profile-card style"><h5>🎯 Latour風格特徵</h5><div class="style-characteristics"><div class="power-elegance"><h6>力量與優雅</h6><p><strong>核心特質：</strong>在力量中展現優雅</p><p><strong>結構感：</strong>強勁的骨架和深度</p><p><strong>濃郁度：</strong>高濃縮度但不厚重</p><p><strong>複雜性：</strong>層次豐富，變化多端</p></div><div class="signature-aromas"><h6>標誌性香氣</h6><p><strong>黑色水果：</strong>黑莓、黑醋栗、李子</p><p><strong>礦物質：</strong>石墨、濕石頭、鼠尾草</p><p><strong>香料調：</strong>黑胡椒、甘草、香草</p><p><strong>陳年發展：</strong>皮革、煙草、雪茄</p></div><div class="legendary-longevity"><h6>傳奇陳年能力</h6><p><strong>年輕期：</strong>強勁有力，需要長期陳年</p><p><strong>發展期：</strong>15-25年逐漸展現複雜度</p><p><strong>巔峰期：</strong>30-60年的極長陳年潛力</p><p><strong>不朽經典：</strong>某些偉大年份可陳年百年</p></div></div></div></div></div><div class="premier-section mouton"><h4>🎨 Château Mouton Rothschild - 藝術的創新</h4><div class="chateau-profile"><div class="profile-card history"><h5>🏰 Mouton歷史傳承</h5><div class="history-details"><div class="historical-period origins"><h6>莊園起源 (18世紀)</h6><p>最初名為"Brane-Mouton"，由Jean-Baptiste de Brane建立</p></div><div class="historical-period rothschild-revolution"><h6>羅斯柴爾德革命 (1853)</h6><p>納撒尼爾·羅斯柴爾德男爵購入，開始品質革命</p></div><div class="historical-period philippe-era"><h6>菲利浦男爵時代 (1922-1988)</h6><p>菲利浦·羅斯柴爾德男爵的創新管理，1973年升級為一級酒莊</p></div><div class="historical-period artistic-legacy"><h6>藝術傳承 (1945至今)</h6><p>每年邀請知名藝術家設計酒標，開創藝術與葡萄酒結合的先河</p></div></div></div><div class="profile-card terroir"><h5>🌱 Mouton風土特色</h5><div class="terroir-analysis"><div class="vineyard-layout"><h6>葡萄園佈局</h6><p><strong>總面積：</strong>84公頃</p><p><strong>種植面積：</strong>84公頃</p><p><strong>地形：</strong>緩坡地形，海拔27米</p><p><strong>朝向：</strong>東南朝向，日照充足</p></div><div class="unique-terroir"><h6>獨特風土</h6><p><strong>土壤特色：</strong>深層砂礫，含鐵量較高</p><p><strong>排水性：</strong>極佳的自然排水系統</p><p><strong>微氣候：</strong>受森林保護，微環境穩定</p><p><strong>老藤比例：</strong>40%以上樹齡超過60年</p></div><div class="varietal-selection"><h6>品種選擇</h6><ul><li><strong>Cabernet Sauvignon：</strong>81%</li><li><strong>Merlot：</strong>15%</li><li><strong>Cabernet Franc：</strong>3%</li><li><strong>Petit Verdot：</strong>1%</li></ul></div></div></div><div class="profile-card innovation"><h5>🎨 創新與藝術</h5><div class="innovation-aspects"><div class="artistic-labels"><h6>藝術酒標傳統</h6><p><strong>開創年份：</strong>1945年開始藝術酒標</p><p><strong>藝術家：</strong>畢卡索、夏卡爾、沃霍爾等大師</p><p><strong>收藏價值：</strong>藝術與酒液的雙重價值</p><p><strong>文化意義：</strong>將藝術帶入葡萄酒世界</p></div><div class="winemaking-innovation"><h6>釀酒創新</h6><p><strong>技術領先：</strong>採用最先進的釀酒設備</p><p><strong>精密控制：</strong>溫控發酵和重力流系統</p><p><strong>品質監控：</strong>全程品質監控系統</p><p><strong>傳統結合：</strong>傳統工藝與現代技術結合</p></div><div class="style-evolution"><h6>風格特色</h6><p><strong>濃郁奔放：</strong>相比Lafite更加濃郁</p><p><strong>現代風格：</strong>展現現代釀酒技術優勢</p><p><strong>國際化：</strong>適應國際口味趨勢</p><p><strong>創新精神：</strong>"我是第一，我是第二，我是Mouton"</p></div></div></div></div></div><div class="premier-section comparison"><h4>⚖️ 三大酒莊風格比較</h4><div class="comparison-analysis"><div class="comparison-matrix"><h5>📊 風格特徵對比</h5><div class="comparison-table"><div class="comparison-row"><div class="comparison-header">特徵</div><div class="comparison-header">Lafite</div><div class="comparison-header">Latour</div><div class="comparison-header">Mouton</div></div><div class="comparison-row"><div class="comparison-cell"><strong>風格定位</strong></div><div class="comparison-cell">優雅精緻</div><div class="comparison-cell">力量威嚴</div><div class="comparison-cell">濃郁奔放</div></div><div class="comparison-row"><div class="comparison-cell"><strong>酒體特色</strong></div><div class="comparison-cell">中等偏飽滿</div><div class="comparison-cell">飽滿厚重</div><div class="comparison-cell">飽滿濃郁</div></div><div class="comparison-row"><div class="comparison-cell"><strong>單寧質感</strong></div><div class="comparison-cell">絲滑柔順</div><div class="comparison-cell">強勁紮實</div><div class="comparison-cell">豐富成熟</div></div><div class="comparison-row"><div class="comparison-cell"><strong>香氣特點</strong></div><div class="comparison-cell">花香雅致</div><div class="comparison-cell">礦物深沉</div><div class="comparison-cell">果香濃郁</div></div><div class="comparison-row"><div class="comparison-cell"><strong>陳年潛力</strong></div><div class="comparison-cell">30-50年</div><div class="comparison-cell">40-60年</div><div class="comparison-cell">25-40年</div></div><div class="comparison-row"><div class="comparison-cell"><strong>適飲期</strong></div><div class="comparison-cell">15-35年</div><div class="comparison-cell">20-40年</div><div class="comparison-cell">10-30年</div></div></div></div><div class="investment-comparison"><h5>💰 投資價值分析</h5><div class="investment-metrics"><div class="metric lafite-value"><h6>Lafite投資特色</h6><p><strong>亞洲市場：</strong>在亞洲市場享有極高聲譽</p><p><strong>價格穩定：</strong>長期價格表現穩定上升</p><p><strong>收藏首選：</strong>收藏家的首選品牌</p><p><strong>文化價值：</strong>深厚的文化底蘊</p></div><div class="metric latour-value"><h6>Latour投資特色</h6><p><strong>品質保證：</strong>品質一致性最高</p><p><strong>陳年王者：</strong>最強的陳年潛力</p><p><strong>專業認可：</strong>專業人士高度認可</p><p><strong>稀缺性：</strong>產量相對較少</p></div><div class="metric mouton-value"><h6>Mouton投資特色</h6><p><strong>藝術價值：</strong>藝術酒標增加收藏價值</p><p><strong>創新形象：</strong>現代化品牌形象</p><p><strong>國際化：</strong>全球市場認知度高</p><p><strong>話題性：</strong>話題性和關注度高</p></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'pauillac-premiers',
        quiz: {
          question: 'Pauillac三大一級酒莊中，哪一座以"力量的象徵"著稱？',
          options: ['Château Lafite Rothschild', 'Château Latour', 'Château Mouton Rothschild', '三座都是'], 
          correct: 1,
          explanation: 'Château Latour以其強勁的結構和力量感著稱，被譽為"力量的象徵"。其著名的"Enclos"葡萄園和超長的陳年潛力（40-60年）體現了其強大的實力。'
        }
      },
      {
        title: 'Pauillac風格特徵與Cabernet Sauvignon表現',
        highlights: [
          { id: 1, icon: '🍇', title: 'CS之王', content: 'Pauillac是Cabernet Sauvignon表現最卓越的產區' },
          { id: 2, icon: '⏳', title: '陳年潛力', content: '世界頂級的長期陳年能力與複雜度發展' }
        ],
        content: '<div class="pauillac-style"><p class="lead-text">Pauillac產區展現了Cabernet Sauvignon的最高水準，其強勁複雜的風格和卓越的陳年潛力代表了波爾多紅酒的巔峰成就。</p><div class="style-analysis"><div class="style-section cabernet-excellence"><h4>🍇 Cabernet Sauvignon的卓越表現</h4><div class="cabernet-analysis"><div class="variety-profile"><h5>🌟 品種特性分析</h5><div class="cabernet-characteristics"><div class="genetic-profile"><h6>遺傳特性</h6><p><strong>起源：</strong>Cabernet Franc × Sauvignon Blanc的天然雜交</p><p><strong>特徵：</strong>小果粒，厚皮，高單寧</p><p><strong>適應性：</strong>完美適應Pauillac的砂礫土壤</p><p><strong>成熟期：</strong>晚熟品種，需要充足熱量</p></div><div class="terroir-adaptation"><h6>風土適應性</h6><div class="adaptation-factors"><div class="soil-match"><strong>土壤匹配：</strong>砂礫土的優異排水性防止根部積水</div><div class="heat-absorption"><strong>熱量吸收：</strong>砂礫白天吸熱，夜間釋放，延長成熟期</div><div class="stress-response"><strong>應力反應：</strong>適度水分應力促進根系深扎</div><div class="mineral-uptake"><strong>礦物吸收：</strong>深層根系吸收豐富礦物質</div></div></div><div class="phenolic-development"><h6>酚類物質發展</h6><p><strong>單寧積累：</strong>厚皮促進高品質單寧形成</p><p><strong>花青素：</strong>豐富的花青素提供深色</p><p><strong>香氣前驅物：</strong>複雜的香氣化合物積累</p><p><strong>成熟指標：</strong>生理成熟與酚類成熟同步</p></div></div></div><div class="regional-expression"><h5>🎯 Pauillac風土表達</h5><div class="terroir-expression"><div class="micro-terroir"><h6>微風土差異</h6><div class="terroir-zones"><div class="zone lafite-style"><strong>Lafite風格區：</strong>北部地區，土壤較細，風格優雅</div><div class="zone latour-style"><strong>Latour風格區：</strong>東南河岸，砂礫厚重，力量強勁</div><div class="zone mouton-style"><strong>Mouton風格區：</strong>中部高地，含鐵較多，風格濃郁</div></div></div><div class="vintage-variation"><h6>年份表現差異</h6><div class="vintage-factors"><div class="hot-years"><strong>炎熱年份：</strong>Cabernet Sauvignon表現卓越，濃郁強勁</div><div class="cool-years"><strong>涼爽年份：</strong>展現更多優雅特質，酸度清新</div><div class="balanced-years"><strong>平衡年份：</strong>力量與優雅的完美結合</div></div></div><div class="aging-development"><h6>陳年發展特性</h6><p><strong>年輕期：</strong>單寧明顯，需要時間柔化</p><p><strong>發展期：</strong>複雜度逐漸展現，層次豐富</p><p><strong>成熟期：</strong>達到完美平衡，展現最高品質</p><p><strong>巔峰期：</strong>偉大年份可陳年50年以上</p></div></div></div></div></div><div class="style-section sensory-profile"><h4>👃 Pauillac感官特徵分析</h4><div class="sensory-analysis"><div class="visual-characteristics"><h5>👁️ 視覺特徵</h5><div class="visual-profile"><div class="color-intensity"><h6>顏色深度</h6><p><strong>年輕期：</strong>深紫黑色，幾乎不透光</p><p><strong>發展期：</strong>深紫紅色，邊緣開始變化</p><p><strong>成熟期：</strong>紅寶石色，透明度增加</p><p><strong>陳年期：</strong>石榴紅色，邊緣呈琥珀色</p></div><div class="clarity-texture"><h6>澄清度與質地</h6><p><strong>澄清度：</strong>年輕時可能有輕微沉澱</p><p><strong>濃稠度：</strong>酒體飽滿，掛杯明顯</p><p><strong>光澤感：</strong>健康的光澤，活力充沛</p><p><strong>沉澱物：</strong>陳年後出現自然沉澱</p></div></div></div><div class="aroma-complexity"><h5>👃 香氣複雜度</h5><div class="aroma-profile"><div class="primary-aromas"><h6>主要果香</h6><div class="fruit-categories"><div class="black-fruits"><strong>黑色水果：</strong>黑醋栗、黑莓、黑櫻桃</div><div class="red-fruits"><strong>紅色水果：</strong>櫻桃、覆盆子（年輕時）</div><div class="fruit-intensity"><strong>果香濃度：</strong>高濃度，純淨集中</div><div class="fruit-evolution"><strong>果香演變：</strong>從新鮮到果乾的轉變</div></div></div><div class="secondary-aromas"><h6>橡木與發酵香氣</h6><div class="oak-influence"><div class="vanilla-spice"><strong>香草香料：</strong>香草、肉桂、丁香</div><div class="toast-smoke"><strong>烘烤煙燻：</strong>烤麵包、咖啡、巧克力</div><div class="wood-integration"><strong>木質整合：</strong>雪松、檀香、松木</div></div></div><div class="tertiary-aromas"><h6>陳年發展香氣</h6><div class="aging-bouquet"><div class="leather-tobacco"><strong>皮革煙草：</strong>皮革、煙草葉、雪茄盒</div><div class="earthy-mineral"><strong>土壤礦物：</strong>濕土、石墨、鐵質</div><div class="game-forest"><strong>野味森林：</strong>野味、松露、腐葉土</div><div class="exotic-spices"><strong>異國香料：</strong>胡椒、甘草、薄荷</div></div></div></div></div><div class="palate-structure"><h5>👄 口感結構分析</h5><div class="structural-elements"><div class="body-weight"><h6>酒體與重量感</h6><p><strong>酒體：</strong>飽滿厚重，密度極高</p><p><strong>重量感：</strong>在口中有明顯重量</p><p><strong>濃縮度：</strong>高濃縮度，層次豐富</p><p><strong>質地：</strong>絲滑中帶有結構感</p></div><div class="tannin-analysis"><h6>單寧結構</h6><div class="tannin-profile"><div class="young-tannins"><strong>年輕期：</strong>強勁明顯，需要時間柔化</div><div class="mature-tannins"><strong>成熟期：</strong>柔化但仍有結構，支撐力強</div><div class="aged-tannins"><strong>陳年期：</strong>完全整合，絲滑順暢</div><div class="tannin-quality"><strong>單寧品質：</strong>高品質，細膩而不粗糙</div></div></div><div class="acidity-balance"><h6>酸度平衡</h6><p><strong>酸度水平：</strong>中等到中高，提供結構</p><p><strong>酸度類型：</strong>清新但不突兀</p><p><strong>平衡作用：</strong>與豐富果味完美平衡</p><p><strong>陳年影響：</strong>維持酒款新鮮感和活力</p></div><div class="finish-persistence"><h6>餘韻持久度</h6><p><strong>長度：</strong>極長，通常60-90秒</p><p><strong>複雜度：</strong>餘韻中層次不斷變化</p><p><strong>印象：</strong>深刻持久的記憶點</p><p><strong>發展：</strong>隨著陳年餘韻更加複雜</p></div></div></div></div></div><div class="style-section aging-mastery"><h4>⏳ 陳年潛力與品嚐指南</h4><div class="aging-analysis"><div class="aging-timeline"><h5>📈 陳年發展時間線</h5><div class="timeline-stages"><div class="stage infant"><h6>幼兒期 (0-2年)</h6><div class="stage-characteristics"><p><strong>特徵：</strong>單寧生硬，果香主導</p><p><strong>建議：</strong>不建議現在飲用</p><p><strong>潛力：</strong>展現基本品質框架</p></div></div><div class="stage adolescent"><h6>青春期 (3-8年)</h6><div class="stage-characteristics"><p><strong>特徵：</strong>單寧開始柔化，複雜度增加</p><p><strong>建議：</strong>可以品嚐，但未達最佳</p><p><strong>發展：</strong>香氣層次開始展現</p></div></div><div class="stage mature"><h6>成熟期 (10-25年)</h6><div class="stage-characteristics"><p><strong>特徵：</strong>達到最佳平衡，複雜度最高</p><p><strong>建議：</strong>最佳飲用期</p><p><strong>表現：</strong>展現完整的風土特色</p></div></div><div class="stage peak"><h6>巔峰期 (25-50年)</h6><div class="stage-characteristics"><p><strong>特徵：</strong>偉大年份的最高表現</p><p><strong>建議：</strong>特殊場合的完美選擇</p><p><strong>價值：</strong>極高的收藏和投資價值</p></div></div></div></div><div class="tasting-guidelines"><h5>🍷 專業品嚐指南</h5><div class="tasting-protocol"><div class="preparation"><h6>品嚐準備</h6><div class="prep-steps"><div class="temperature"><strong>適飲溫度：</strong>18-20°C (年輕), 20-22°C (成熟)</div><div class="decanting"><strong>醒酒時間：</strong>年輕酒2-4小時，成熟酒1-2小時</div><div class="glassware"><strong>酒杯選擇：</strong>大型波爾多杯，杯肚寬大</div><div class="environment"><strong>品嚐環境：</strong>安靜、無異味、光線充足</div></div></div><div class="tasting-sequence"><h6>品嚐順序</h6><div class="sequence-steps"><div class="visual"><strong>視覺觀察：</strong>顏色、透明度、掛杯</div><div class="aroma"><strong>香氣分析：</strong>靜止→輕搖→充分搖杯</div><div class="palate"><strong>口感品評：</strong>入口→中段→結尾</div><div class="evaluation"><strong>整體評價：</strong>平衡性、複雜度、典型性</div></div></div><div class="food-pairing"><h6>餐酒搭配</h6><div class="pairing-suggestions"><div class="red-meat"><strong>紅肉類：</strong>牛排、羊排、野味</div><div class="rich-dishes"><strong>濃郁料理：</strong>燉煮類、醬汁豐富的料理</div><div class="aged-cheese"><strong>陳年乳酪：</strong>硬質乳酪、藍紋乳酪</div><div class="chocolate"><strong>黑巧克力：</strong>高可可含量的黑巧克力</div></div></div></div></div><div class="investment-perspective"><h5>💰 收藏投資價值</h5><div class="investment-analysis"><div class="value-drivers"><h6>價值驅動因素</h6><div class="drivers"><div class="scarcity"><strong>稀缺性：</strong>頂級酒莊產量有限</div><div class="quality"><strong>品質：</strong>持續的高品質表現</div><div class="reputation"><strong>聲譽：</strong>全球認知度和聲望</div><div class="aging-potential"><strong>陳年潛力：</strong>超長的陳年能力</div></div></div><div class="market-performance"><h6>市場表現</h6><p><strong>長期趨勢：</strong>過去20年年均增值8-15%</p><p><strong>抗跌性：</strong>經濟波動中相對穩定</p><p><strong>流通性：</strong>二級市場活躍度高</p><p><strong>國際化：</strong>全球市場需求穩定</p></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: 'Pauillac產區中，Cabernet Sauvignon通常占調配的多少比例？',
          options: ['50-60%', '60-70%', '70-80%', '80-90%'], 
          correct: 2,
          explanation: 'Pauillac產區的Cabernet Sauvignon通常占調配的70-80%，這個高比例確保了Pauillac紅酒的強勁結構和卓越陳年潛力，是該產區風格的核心特徵。'
        }
      }
    ]
  } else if (props.lessonId === 'l2-4') {
    return [
      { type: 'title' },
      {
        title: 'Saint-Julien產區優越地理位置與風土條件',
        highlights: [
          { id: 1, icon: '⚖️', title: '平衡典範', content: 'Saint-Julien以完美平衡的風格聞名於世' },
          { id: 2, icon: '🏆', title: '品質一致', content: '被稱為Médoc最一致的高品質產區' }
        ],
        content: '<div class="saint-julien-terroir"><p class="lead-text">Saint-Julien被譽為Médoc半島最均衡完美的產區，以其卓越的風土條件和一致的高品質表現成為平衡典範。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Saint-Julien產區地理優勢</h4><div class="geography-overview"><div class="location-details"><div class="location-card strategic"><h5>🎯 戰略位置優勢</h5><div class="location-content"><p><strong>黃金地段：</strong>位於Pauillac和Margaux之間，享有兩者的優勢特質</p><p><strong>產區面積：</strong>910公頃，規模適中但品質卓越</p><p><strong>海拔分布：</strong>8-25米的理想高度，排水與日照俱佳</p><div class="strategic-advantages"><h6>地理優勢</h6><ul><li><strong>中心位置：</strong>Médoc半島的地理中心，氣候最穩定</li><li><strong>河岸優勢：</strong>2.5公里Gironde河岸線，氣候調節最佳</li><li><strong>坡向完美：</strong>東南朝向確保充足而溫和的日照</li><li><strong>保護屏障：</strong>周圍森林提供天然風屏障</li></ul></div></div></div><div class="location-card consistency"><h5>📊 一致性的秘密</h5><div class="consistency-factors"><div class="factor uniformity"><h6>風土均質性</h6><p><strong>土壤一致：</strong>全產區土壤類型相對統一</p><p><strong>氣候穩定：</strong>微氣候變化最小的產區</p><p><strong>海拔適中：</strong>高度差異小，條件均衡</p></div><div class="factor quality-control"><h6>品質控制嚴格</h6><p><strong>產量限制：</strong>嚴格的產量控制確保品質</p><p><strong>篩選嚴格：</strong>只有最佳地塊獲得AOC認證</p><p><strong>標準統一：</strong>全產區維持統一高標準</p></div></div></div><div class="location-card boundaries"><h5>🔲 產區邊界特色</h5><div class="boundary-analysis"><div class="north-boundary"><h6>北接Pauillac</h6><p>與Pauillac的Latour莊園相鄰，土壤逐漸過渡到更深厚的砂礫</p></div><div class="south-boundary"><h6>南鄰Margaux</h6><p>與Margaux接壤處，土壤變得更加細膩優雅</p></div><div class="east-boundary"><h6>東臨Gironde河</h6><p>2.5公里河岸線提供最佳的氣候緩衝效應</p></div><div class="west-boundary"><h6>西向內陸</h6><p>逐漸向內陸森林過渡，形成天然保護屏障</p></div></div></div></div></div><div class="terroir-section soil-excellence"><h4>🪨 Saint-Julien土壤的卓越性</h4><div class="soil-analysis"><div class="soil-characteristics"><h5>🔬 土壤構成分析</h5><div class="soil-breakdown"><div class="soil-type optimal-gravel"><h6>最優砂礫土 (主導類型)</h6><div class="soil-details"><p><strong>組成特徵：</strong>中等顆粒砂礫與細砂的理想比例</p><p><strong>分布範圍：</strong>覆蓋產區85%以上的面積</p><p><strong>形成過程：</strong>古代Gironde河多次沖積形成</p><div class="soil-benefits"><h7>土壤優勢</h7><ul><li><strong>完美排水：</strong>砂礫層確保優異排水，無積水風險</li><li><strong>溫度調節：</strong>白天蓄熱，夜間緩慢釋放</li><li><strong>根系發展：</strong>疏鬆結構利於根系深扎</li><li><strong>礦物豐富：</strong>多樣化礦物質提供複雜風味</li></ul></div></div></div><div class="soil-type clay-substrate"><h6>黏土基質層 (深層支撐)</h6><div class="soil-details"><p><strong>深度位置：</strong>砂礫層下1.5-3米的黏土層</p><p><strong>功能作用：</strong>提供水分儲備和礦物質供應</p><div class="soil-benefits"><h7>基質作用</h7><ul><li><strong>水分調節：</strong>乾旱期提供深層水分</li><li><strong>養分供應：</strong>豐富的礦物質和微量元素</li><li><strong>根系錨定：</strong>為老藤提供穩固支撐</li><li><strong>pH緩衝：</strong>維持土壤酸鹼平衡</li></ul></div></div></div><div class="soil-type iron-spots"><h6>鐵質結核 (特色元素)</h6><div class="soil-details"><p><strong>分布特點：</strong>零星分布的鐵質沉積物</p><p><strong>風味影響：</strong>賦予酒款獨特的礦物特徵</p><div class="soil-benefits"><h7>品質提升</h7><ul><li><strong>礦物感：</strong>增加酒款的礦物質複雜度</li><li><strong>結構感：</strong>提供更好的酒體結構</li><li><strong>陳年基礎：</strong>支撐長期陳年發展</li><li><strong>風土表達：</strong>展現獨特的場地特徵</li></ul></div></div></div></div></div><div class="vineyard-management"><h5>🍇 理想的葡萄園管理</h5><div class="management-excellence"><div class="practice optimal-density"><h6>最佳種植密度</h6><p><strong>密度標準：</strong>每公頃9,000-10,000株</p><p><strong>間距配置：</strong>行距1米，株距0.9-1.1米</p><p><strong>管理理念：</strong>追求產量與品質的完美平衡</p><div class="density-advantages"><ul><li>促進適度根系競爭，提高果實品質</li><li>確保充足光照，促進完全成熟</li><li>便於機械化作業，提高效率</li><li>維持理想的葉果比例</li></ul></div></div><div class="practice rootstock-selection"><h6>精選砧木策略</h6><p><strong>主要砧木：</strong>101-14、3309C、SO4</p><p><strong>選擇原則：</strong>適應砂礫土壤，控制樹勢</p><div class="rootstock-benefits"><div class="benefit adaptation"><strong>土壤適應：</strong>在砂礫土中表現優異</div><div class="benefit vigor"><strong>樹勢控制：</strong>適度控制樹勢，促進品質</div><div class="benefit resistance"><strong>抗性強化：</strong>對根瘤蚜和線蟲具抗性</div><div class="benefit longevity"><strong>壽命延長：</strong>支持葡萄藤長期健康生長</div></div></div><div class="practice canopy-optimization"><h6>樹冠管理優化</h6><p><strong>修剪系統：</strong>居由 (Guyot) 單臂或雙臂</p><p><strong>葉幕管理：</strong>精確的除葉和疏果</p><div class="canopy-objectives"><ul><li><strong>光照均勻：</strong>確保果實均勻受光</li><li><strong>通風良好：</strong>預防真菌病害發生</li><li><strong>成熟一致：</strong>促進果實同步成熟</li><li><strong>品質集中：</strong>將樹體能量集中於果實</li></ul></div></div></div></div></div></div><div class="terroir-section climate-perfection"><h4>🌤️ Saint-Julien的完美氣候</h4><div class="climate-analysis"><div class="climate-superiority"><h5>🌍 氣候優越性分析</h5><div class="climate-advantages"><div class="advantage river-moderation"><h6>河流調節效應</h6><div class="moderation-effects"><p><strong>溫度緩衝：</strong>Gironde河提供最穩定的溫度調節</p><ul><li>年均溫度：13.8°C，生長季平均20-24°C</li><li>溫差控制：日夜溫差9-11°C，利於香氣積累</li><li>霜凍保護：春季霜凍風險極低</li><li>成熟延長：秋季溫和延長，成熟度最佳</li></ul></div></div><div class="advantage precipitation-pattern"><h6>理想降雨模式</h6><div class="precipitation-effects"><p><strong>年降雨量：</strong>870mm，分佈最為理想</p><ul><li><strong>春季充足：</strong>3-5月適量雨水促進萌芽</li><li><strong>夏季適中：</strong>6-8月適度乾燥利於濃縮</li><li><strong>採收期：</strong>9-10月晴雨交替，條件完美</li><li><strong>冬季補充：</strong>11-2月充分補充土壤水分</li></ul></div></div><div class="advantage sunshine-hours"><h6>充足日照條件</h6><div class="sunshine-benefits"><p><strong>年日照時數：</strong>2,050小時，光照充足而不過度</p><ul><li><strong>朝向優勢：</strong>東南朝向獲得理想光照角度</li><li><strong>反射增強：</strong>河面反射增加有效光照</li><li><strong>成熟促進：</strong>充足光照確保酚類物質成熟</li><li><strong>品質保證：</strong>光照條件確保每年穩定品質</li></ul></div></div></div></div><div class="microclimate-stability"><h5>🎯 微氣候穩定性</h5><div class="stability-factors"><div class="factor location-buffer"><h6>地理位置緩衝</h6><p><strong>中心優勢：</strong>位於Médoc中心，受極端天氣影響最小</p><div class="buffer-effects"><ul><li><strong>颱風減緩：</strong>內陸位置減少大西洋風暴影響</li><li><strong>溫度穩定：</strong>河流和森林雙重保護</li><li><strong>濕度調節：</strong>適中的相對濕度，病害風險低</li><li><strong>季節平衡：</strong>四季變化溫和，生長期穩定</li></ul></div></div><div class="factor forest-protection"><h6>森林屏障效應</h6><p><strong>保護作用：</strong>西側和北側森林提供天然屏障</p><div class="protection-benefits"><ul><li>減緩強風侵襲，保護葡萄藤和果實</li><li>調節溫濕度，創造穩定微環境</li><li>提供生物多樣性，天敵昆蟲棲息地</li><li>減少土壤侵蝕，維護生態平衡</li></ul></div></div><div class="factor drainage-excellence"><h6>排水系統卓越</h6><p><strong>天然排水：</strong>完美的自然排水系統</p><div class="drainage-advantages"><ul><li>快速排除多餘水分，防止根部問題</li><li>維持土壤結構穩定，促進根系發展</li><li>減少真菌病害，特別是根部疾病</li><li>確保土壤透氣性，支持微生物活動</li></ul></div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'LeftBank-Medoc-Saint-Julien',
        quiz: {
          question: 'Saint-Julien產區被稱為什麼？',
          options: ['香水之鄉', '王者產區', '平衡的典範', '力量象徵'], 
          correct: 2,
          explanation: 'Saint-Julien被譽為"平衡的典範"，因其完美的風土條件、一致的高品質表現，以及在優雅與力量之間的理想平衡而聞名。'
        }
      },
      {
        title: 'Ducru-Beaucaillou、Léoville家族等頂級酒莊',
        highlights: [
          { id: 1, icon: '💎', title: '品質標竿', content: 'Saint-Julien擁有多座品質卓越的頂級酒莊' },
          { id: 2, icon: '👑', title: 'Léoville三雄', content: 'Léoville家族三大酒莊各具特色' }
        ],
        content: '<div class="saint-julien-chateaux"><p class="lead-text">Saint-Julien產區擁有眾多頂級酒莊，其中Ducru-Beaucaillou和Léoville家族三大酒莊代表了該產區的最高成就。</p><div class="chateaux-analysis"><div class="chateau-section ducru"><h4>💎 Château Ducru-Beaucaillou - 優雅的寶石</h4><div class="chateau-profile"><div class="profile-card history"><h5>🏰 Ducru-Beaucaillou歷史傳承</h5><div class="history-timeline"><div class="period origins"><h6>莊園起源 (18世紀)</h6><p>由Ducru家族建立，名稱意為"美麗的石頭"，指葡萄園中的大顆粒砂礫</p></div><div class="period borie-era"><h6>Borie家族時代 (1941至今)</h6><p>Francis Borie收購後開始現代化管理，其後代持續提升品質</p></div><div class="period classification"><h6>1855年分級</h6><p>獲評二級酒莊，但品質常被認為接近一級水準</p></div></div></div><div class="profile-card terroir"><h5>🌱 Ducru風土特色</h5><div class="terroir-details"><div class="vineyard-composition"><h6>葡萄園組成</h6><p><strong>總面積：</strong>75公頃</p><p><strong>種植面積：</strong>75公頃</p><p><strong>平均樹齡：</strong>35年</p><p><strong>最老樹齡：</strong>60年以上的珍貴老藤</p></div><div class="soil-characteristics"><h6>土壤特徵</h6><p><strong>表層土壤：</strong>大顆粒砂礫（"美麗的石頭"）</p><p><strong>中層結構：</strong>細砂與砂礫混合</p><p><strong>基岩層：</strong>石灰岩和黏土基質</p><p><strong>排水性：</strong>極佳的自然排水系統</p></div><div class="grape-varieties"><h6>品種構成</h6><ul><li><strong>Cabernet Sauvignon：</strong>70%</li><li><strong>Merlot：</strong>25%</li><li><strong>Cabernet Franc：</strong>5%</li></ul></div></div></div><div class="profile-card style"><h5>🎯 Ducru風格特徵</h5><div class="style-analysis"><div class="elegance-power"><h6>優雅與力量的平衡</h6><p><strong>核心特質：</strong>Saint-Julien優雅風格的完美代表</p><p><strong>結構特色：</strong>精緻的單寧結構，絲滑而有力</p><p><strong>複雜度：</strong>層次豐富，變化細膩</p></div><div class="signature-character"><h6>標誌性特徵</h6><p><strong>香氣特色：</strong>黑醋栗、紫羅蘭、雪松</p><p><strong>口感特質：</strong>中等到飽滿酒體，平衡完美</p><p><strong>礦物感：</strong>獨特的礦物質表達</p><p><strong>陳年潛力：</strong>25-40年的優秀陳年能力</p></div></div></div></div></div><div class="chateau-section leoville"><h4>👑 Léoville家族三大酒莊</h4><div class="leoville-overview"><div class="family-history"><h5>📚 Léoville家族歷史</h5><div class="historical-background"><p><strong>原始莊園：</strong>17世紀由Jean de Pontet建立的大型莊園</p><p><strong>分割歷史：</strong>法國大革命後分割為三個獨立酒莊</p><p><strong>共同特色：</strong>都位於Saint-Julien最佳風土地段</p><p><strong>品質傳承：</strong>三個酒莊都維持頂級品質水準</p></div></div></div><div class="leoville-estates"><div class="estate leoville-las-cases"><h5>🌟 Château Léoville Las Cases - "超級二級"</h5><div class="estate-profile"><div class="profile-section terroir"><h6>風土優勢</h6><p><strong>位置：</strong>緊鄰Latour，享有最佳風土</p><p><strong>面積：</strong>98公頃，Saint-Julien最大莊園之一</p><p><strong>土壤：</strong>深厚砂礫層，排水完美</p><p><strong>朝向：</strong>東南朝向，日照充足</p></div><div class="profile-section style"><h6>風格特色</h6><p><strong>力量感：</strong>三個Léoville中最有力量</p><p><strong>結構：</strong>強勁的單寧結構，需要長期陳年</p><p><strong>複雜度：</strong>極高的複雜度和深度</p><p><strong>聲譽：</strong>被稱為"超級二級酒莊"</p></div><div class="profile-section composition"><h6>品種組成</h6><ul><li><strong>Cabernet Sauvignon：</strong>65%</li><li><strong>Merlot：</strong>19%</li><li><strong>Cabernet Franc：</strong>13%</li><li><strong>Petit Verdot：</strong>3%</li></ul></div></div></div><div class="estate leoville-poyferre"><h5>🌸 Château Léoville Poyferré - 優雅平衡</h5><div class="estate-profile"><div class="profile-section character"><h6>莊園特色</h6><p><strong>管理哲學：</strong>追求優雅與複雜度的平衡</p><p><strong>面積：</strong>80公頃，位置優越</p><p><strong>風格定位：</strong>介於力量與優雅之間</p><p><strong>現代化：</strong>持續的技術創新和設備更新</p></div><div class="profile-section terroir"><h6>風土表達</h6><p><strong>土壤多樣：</strong>砂礫為主，局部黏土</p><p><strong>微氣候：</strong>受河流調節，氣候穩定</p><p><strong>樹齡：</strong>平均樹齡40年</p><p><strong>產量：</strong>嚴格控制產量確保品質</p></div><div class="profile-section wine-style"><h6>酒款風格</h6><p><strong>平衡感：</strong>力量與優雅的完美結合</p><p><strong>果香：</strong>豐富的果香表達</p><p><strong>陳年：</strong>20-35年的良好陈年潛力</p><p><strong>一致性：</strong>年份間品質穩定</p></div></div></div><div class="estate leoville-barton"><h5>🏛️ Château Léoville Barton - 傳統典範</h5><div class="estate-profile"><div class="profile-section tradition"><h6>傳統傳承</h6><p><strong>家族經營：</strong>Barton家族200多年的經營</p><p><strong>傳統工藝：</strong>堅持傳統釀酒方法</p><p><strong>無酒莊：</strong>在Langoa-Barton進行釀造</p><p><strong>純粹風格：</strong>最能體現Saint-Julien風土</p></div><div class="profile-section vineyard"><h6>葡萄園管理</h6><p><strong>面積：</strong>50公頃，精品規模</p><p><strong>管理：</strong>精細化手工管理</p><p><strong>哲學：</strong>最小干預，自然表達</p><p><strong>選擇：</strong>嚴格的葡萄篩選</p></div><div class="profile-section character"><h6>酒款特色</h6><p><strong>純淨度：</strong>風土表達純淨清晰</p><p><strong>優雅感：</strong>典型的Saint-Julien優雅</p><p><strong>性價比：</strong>頂級品質，相對親民價格</p><p><strong>陳年：</strong>穩定的長期陳年表現</p></div></div></div></div></div><div class="chateau-section other-estates"><h4>🏆 其他頂級Saint-Julien酒莊</h4><div class="other-chateaux"><div class="chateau cos-destournel-montrose"><h5>⭐ 其他傑出酒莊</h5><div class="estate-brief gruaud-larose"><h6>Château Gruaud Larose</h6><p><strong>特色：</strong>Saint-Julien最大的二級酒莊之一</p><p><strong>風格：</strong>豐富飽滿，結構良好</p><p><strong>聲譽：</strong>"酒中之王，王者之酒"</p></div><div class="estate-brief talbot"><h6>Château Talbot</h6><p><strong>歷史：</strong>以英國將軍命名的歷史名莊</p><p><strong>特色：</strong>一致的高品質表現</p><p><strong>風格：</strong>經典Saint-Julien風格</p></div><div class="estate-brief saint-pierre"><h6>Château Saint-Pierre</h6><p><strong>規模：</strong>精品小莊，17公頃</p><p><strong>品質：</strong>品質超越級別的傑出表現</p><p><strong>價值：</strong>優秀的性價比選擇</p></div><div class="estate-brief langoa-barton"><h6>Château Langoa Barton</h6><p><strong>關係：</strong>Léoville Barton的姊妹莊</p><p><strong>管理：</strong>同樣由Barton家族經營</p><p><strong>風格：</strong>親近易飲的Saint-Julien風格</p></div></div></div><div class="chateau-comparison"><h5>📊 頂級酒莊風格比較</h5><div class="comparison-matrix"><div class="comparison-table"><div class="comparison-row header"><div class="cell">酒莊</div><div class="cell">風格特色</div><div class="cell">優勢</div><div class="cell">陳年潛力</div><div class="cell">投資價值</div></div><div class="comparison-row"><div class="cell"><strong>Ducru-Beaucaillou</strong></div><div class="cell">優雅精緻</div><div class="cell">完美平衡</div><div class="cell">25-40年</div><div class="cell">穩定增值</div></div><div class="comparison-row"><div class="cell"><strong>Léoville Las Cases</strong></div><div class="cell">力量強勁</div><div class="cell">超級二級</div><div class="cell">30-50年</div><div class="cell">高增值潛力</div></div><div class="comparison-row"><div class="cell"><strong>Léoville Poyferré</strong></div><div class="cell">平衡優雅</div><div class="cell">現代化</div><div class="cell">20-35年</div><div class="cell">穩定表現</div></div><div class="comparison-row"><div class="cell"><strong>Léoville Barton</strong></div><div class="cell">傳統純淨</div><div class="cell">性價比</div><div class="cell">25-40年</div><div class="cell">價值發現</div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'saint-julien-chateaux',
        quiz: {
          question: 'Saint-Julien產區的Léoville家族原本是幾個酒莊？',
          options: ['1個大莊園後來分割為3個', '原本就是3個獨立酒莊', '2個酒莊合併的', '4個酒莊重組的'], 
          correct: 0,
          explanation: 'Léoville家族原本是17世紀的一個大型莊園，法國大革命後分割為三個獨立酒莊：Léoville Las Cases、Léoville Poyferré和Léoville Barton，都位於Saint-Julien最佳風土地段。'
        }
      },
      {
        title: 'Saint-Julien優雅平衡的經典風格',
        highlights: [
          { id: 1, icon: '⚖️', title: '完美平衡', content: 'Saint-Julien展現優雅與力量的完美平衡' },
          { id: 2, icon: '🎯', title: '一致品質', content: '被稱為Médoc最一致的高品質產區' }
        ],
        content: '<div class="saint-julien-style"><p class="lead-text">Saint-Julien以其優雅平衡的風格聞名，在力量與精緻之間找到完美的平衡點，代表了波爾多紅酒的理想典範。</p><div class="style-analysis"><div class="style-section balance-mastery"><h4>⚖️ 平衡藝術的掌握</h4><div class="balance-analysis"><div class="balance-components"><h5>🎯 平衡要素分析</h5><div class="component-breakdown"><div class="component power-elegance"><h6>力量與優雅的統一</h6><div class="unity-aspects"><p><strong>力量來源：</strong> Cabernet Sauvignon為骨架，提供結構和陳年潛力</p><p><strong>優雅表達：</strong> Merlot增添柔順感，Cabernet Franc提供精緻香氣</p><p><strong>統一哲學：</strong>既不過於厚重，也不失於輕薄</p><div class="unity-characteristics"><div class="characteristic structure"><strong>結構平衡：</strong>單寧堅實但不粗糙，酸度清新但不尖銳</div><div class="characteristic body"><strong>酒體平衡：</strong>中等到飽滿，密度適中，質地絲滑</div><div class="characteristic flavor"><strong>風味平衡：</strong>果香、橡木、風土三者和諧統一</div><div class="characteristic finish"><strong>餘韻平衡：</strong>持久而優雅，層次豐富但不複雜</div></div></div></div><div class="component consistency-quality"><h6>一致性與品質保證</h6><div class="consistency-factors"><p><strong>風土一致：</strong>全產區土壤和氣候條件相對統一</p><p><strong>標準統一：</strong>嚴格的AOC標準和品質控制</p><p><strong>技術成熟：</strong>酒莊釀酒技術成熟穩定</p><div class="consistency-evidence"><div class="evidence vintage-stability"><strong>年份穩定：</strong>不同年份間品質波動最小</div><div class="evidence estate-uniformity"><strong>酒莊一致：</strong>產區內各酒莊品質水準接近</div><div class="evidence style-coherence"><strong>風格統一：</strong>明確的產區風格特徵</div><div class="evidence investment-reliability"><strong>投資可靠：</strong>長期投資價值穩定可預期</div></div></div></div><div class="component typicity-expression"><h6>典型性與風土表達</h6><div class="typicity-analysis"><p><strong>風土忠實：</strong>酒款忠實反映Saint-Julien的風土特色</p><p><strong>品種和諧：</strong>各葡萄品種在調配中完美融合</p><p><strong>傳統現代：</strong>傳統釀酒智慧與現代技術結合</p><div class="typicity-markers"><div class="marker terroir-signature"><strong>風土印記：</strong>砂礫土的礦物感和優雅質地</div><div class="marker climate-influence"><strong>氣候印記：</strong>溫和氣候造就的平衡感</div><div class="marker varietal-harmony"><strong>品種和諧：</strong>CS主導但Merlot柔化的經典配比</div><div class="marker aging-grace"><strong>陳年優雅：</strong>隨時間發展的優雅複雜度</div></div></div></div></div></div><div class="regional-comparison"><h5>🏆 與其他產區的比較優勢</h5><div class="comparison-analysis"><div class="vs-pauillac"><h6>vs. Pauillac - 力量的對比</h6><div class="comparison-details"><p><strong>Pauillac特色：</strong>強勁有力，單寧明顯，需要長期陳年</p><p><strong>Saint-Julien優勢：</strong>更加平衡，年輕時就有良好的飲用性</p><div class="advantage-points"><ul><li><strong>平衡性：</strong>在力量中保持優雅，不會過於厚重</li><li><strong>適飲性：</strong>年輕時已展現魅力，不需等待太久</li><li><strong>一致性：</strong>年份間品質變化小，風險較低</li><li><strong>投資穩定：</strong>價格波動相對較小，投資風險低</li></ul></div></div></div><div class="vs-margaux"><h6>vs. Margaux - 優雅的差異</h6><div class="comparison-details"><p><strong>Margaux特色：</strong>極致優雅，香氣複雜，風格精緻</p><p><strong>Saint-Julien優勢：</strong>在優雅中保持力量，結構更穩定</p><div class="advantage-points"><ul><li><strong>結構性：</strong>比Margaux更有結構感和陳年潛力</li><li><strong>穩定性：</strong>品質一致性優於Margaux</li><li><strong>實用性：</strong>更適合不同場合的搭配</li><li><strong>可預期：</strong>品質表現更可預期和穩定</li></ul></div></div></div><div class="vs-saint-estephe"><h6>vs. Saint-Estèphe - 現代化進程</h6><div class="comparison-details"><p><strong>Saint-Estèphe特色：</strong>傳統厚重，現代化轉型中</p><p><strong>Saint-Julien優勢：</strong>早已達到理想平衡，無需大幅調整</p><div class="advantage-points"><ul><li><strong>成熟度：</strong>釀酒風格已臻成熟，無需劇烈變化</li><li><strong>認知度：</strong>國際市場認知度和接受度更高</li><li><strong>穩定投資：</strong>投資回報更穩定可預期</li><li><strong>品質保證：</strong>整體品質水準更高更一致</li></ul></div></div></div></div></div></div></div><div class="style-section sensory-profile"><h4>👃 Saint-Julien感官特徵詳析</h4><div class="sensory-analysis"><div class="visual-profile"><h5>👁️ 視覺特徵</h5><div class="visual-characteristics"><div class="color-evolution"><h6>顏色發展軌跡</h6><div class="color-stages"><div class="stage young"><strong>年輕期 (0-5年)：</strong>深紫紅色，色澤濃郁但不過深</div><div class="stage developing"><strong>發展期 (5-15年)：</strong>紫紅色轉為紅寶石色，邊緣開始變化</div><div class="stage mature"><strong>成熟期 (15-30年)：</strong>紅寶石到石榴石色，透明度增加</div><div class="stage aged"><strong>陳年期 (30年+)：</strong>磚紅色調，邊緣呈琥珀色</div></div></div><div class="clarity-intensity"><h6>澄清度與濃度</h6><p><strong>澄清度：</strong>通常清澈透明，年輕時可能有輕微霧氣</p><p><strong>濃度：</strong>中等到高濃度，濃郁但不過度</p><p><strong>掛杯：</strong>良好的掛杯現象，顯示酒體結構</p><p><strong>光澤：</strong>健康的光澤，顯示酒液活力</p></div></div></div><div class="aroma-complexity"><h5>👃 香氣層次分析</h5><div class="aroma-profile"><div class="primary-aromas"><h6>主要果香特徵</h6><div class="fruit-spectrum"><div class="dark-fruits"><strong>黑色水果：</strong>黑醋栗、黑莓、黑櫻桃為主調</div><div class="red-fruits"><strong>紅色水果：</strong>櫻桃、覆盆子，增加清新感</div><div class="fruit-intensity"><strong>果香濃度：</strong>濃郁但不過分，保持優雅</div><div class="fruit-purity"><strong>果香純淨：</strong>果味純淨清晰，不混濁</div></div></div><div class="secondary-development"><h6>發酵與橡木香氣</h6><div class="oak-integration"><div class="spice-notes"><strong>香料調：</strong>香草、肉桂、丁香的精緻表達</div><div class="toast-elements"><strong>烘烤調：</strong>烤麵包、可可、咖啡的溫和表現</div><div class="wood-character"><strong>木質調：</strong>雪松、檀香的優雅融合</div><div class="integration-quality"><strong>整合度：</strong>橡木與果味完美融合，不突兀</div></div></div><div class="tertiary-complexity"><h6>陳年發展香氣</h6><div class="aging-bouquet"><div class="earthy-mineral"><strong>土壤礦物：</strong>濕土、石墨、礦物質的細膩表達</div><div class="leather-tobacco"><strong>皮革煙草：</strong>皮革、煙草葉的優雅呈現</div><div class="forest-floor"><strong>森林氣息：</strong>落葉、蘑菇、松露的自然香氣</div><div class="floral-herbs"><strong>花草調：</strong>乾燥花朵、香草、薄荷的精緻層次</div></div></div></div></div><div class="palate-structure"><h5>👄 口感結構詳析</h5><div class="structural-analysis"><div class="body-texture"><h6>酒體與質地</h6><div class="texture-profile"><p><strong>酒體：</strong>中等到飽滿，有重量感但不厚重</p><p><strong>質地：</strong>絲滑綿密，質感精緻</p><p><strong>密度：</strong>濃度適中，層次豐富</p><p><strong>重量感：</strong>在口中有明顯存在感，但不壓迫</p></div></div><div class="tannin-structure"><h6>單寧結構分析</h6><div class="tannin-characteristics"><div class="young-tannins"><strong>年輕期：</strong>單寧明顯但不粗糙，已顯優雅</div><div class="mature-tannins"><strong>成熟期：</strong>單寧完全整合，絲滑柔順</div><div class="tannin-quality"><strong>單寧品質：</strong>高品質，細膩而有結構</div><div class="integration-level"><strong>整合程度：</strong>與酒體完美融合，支撐而不突出</div></div></div><div class="acidity-balance"><h6>酸度平衡</h6><div class="acid-profile"><p><strong>酸度水平：</strong>中等到中高，提供清新感</p><p><strong>酸度類型：</strong>清新而不尖銳，溫和而有活力</p><p><strong>平衡作用：</strong>與果味和單寧完美平衡</p><p><strong>陳年作用：</strong>維持酒款的新鮮感和陳年能力</p></div></div><div class="finish-persistence"><h6>餘韻特徵</h6><div class="finish-analysis"><p><strong>長度：</strong>中長到長，通常40-60秒</p><p><strong>質量：</strong>優雅而持久，層次變化豐富</p><p><strong>特徵：</strong>果味、香料、礦物質的和諧延續</p><p><strong>印象：</strong>深刻而美好，令人回味</p></div></div></div></div></div></div><div class="style-section food-investment"><h4>🍽️ 餐酒搭配與投資價值</h4><div class="pairing-investment"><div class="food-pairing"><h5>🥩 完美餐酒搭配</h5><div class="pairing-categories"><div class="category red-meat"><h6>經典紅肉搭配</h6><div class="pairing-suggestions"><div class="dish beef"><strong>牛肉類：</strong>牛排、燉牛肉、烤牛肉</div><div class="dish lamb"><strong>羊肉類：</strong>烤羊腿、羊排、香草羊肉</div><div class="dish game"><strong>野味類：</strong>鹿肉、兔肉、野豬肉</div><div class="pairing-principle"><strong>搭配原理：</strong>酒款的平衡感與肉類的豐富口感完美互補</div></div></div><div class="category poultry-rich"><h6>家禽與濃郁料理</h6><div class="pairing-suggestions"><div class="dish duck"><strong>鴨肉類：</strong>烤鴨、鴨胸、法式鴨腿</div><div class="dish chicken"><strong>雞肉類：</strong>香草烤雞、白酒燉雞</div><div class="dish rich-sauces"><strong>濃郁醬汁：</strong>紅酒醬、蘑菇醬、胡椒醬</div><div class="pairing-principle"><strong>搭配原理：</strong>酒款的優雅感不會掩蓋食物的細膩風味</div></div></div><div class="category cheese-dessert"><h6>乳酪與甜點</h6><div class="pairing-suggestions"><div class="cheese hard"><strong>硬質乳酪：</strong>陳年切達、帕瑪森、孔泰</div><div class="cheese soft"><strong>軟質乳酪：</strong>卡門貝爾、布里、洛克福</div><div class="dessert chocolate"><strong>巧克力類：</strong>黑巧克力、巧克力蛋糕</div><div class="pairing-principle"><strong>搭配原理：</strong>酒款的複雜度與乳酪的層次感相得益彰</div></div></div></div></div><div class="investment-analysis"><h5>💰 投資價值深度分析</h5><div class="investment-factors"><div class="factor stability"><h6>穩定性優勢</h6><div class="stability-aspects"><p><strong>品質一致：</strong>年份間品質波動最小，投資風險低</p><p><strong>價格穩定：</strong>價格上漲穩定，投資回報可預期</p><p><strong>市場認知：</strong>國際市場認知度高，流通性好</p><div class="stability-data"><ul><li>過去20年年均增值率：8-12%</li><li>品質評分穩定：平均90-95分範圍</li><li>市場流通活躍度：二級市場成交量穩定</li><li>收藏家偏好：長期收藏的理想選擇</li></ul></div></div></div><div class="factor value-proposition"><h6>價值主張</h6><div class="value-aspects"><p><strong>性價比：</strong>相對於一級酒莊，性價比更高</p><p><strong>品質保證：</strong>穩定的高品質表現</p><p><strong>陳年潛力：</strong>20-40年的陳年能力</p><div class="value-comparison"><ul><li>vs一級酒莊：品質接近但價格合理</li><li>vs其他二級：一致性和穩定性更優</li><li>長期收藏：適合建立酒窖的基礎酒款</li><li>投資分散：穩定的投資組合成分</li></ul></div></div></div><div class="factor market-trends"><h6>市場趨勢</h6><div class="trend-analysis"><p><strong>需求增長：</strong>亞洲市場需求持續增長</p><p><strong>供應有限：</strong>產量相對固定，稀缺性增加</p><p><strong>品牌價值：</strong>Saint-Julien品牌價值持續提升</p><div class="trend-indicators"><ul><li>亞洲市場：中國和日本需求強勁</li><li>歐美傳統：傳統市場需求穩定</li><li>新興市場：印度、巴西等新興市場開發</li><li>在線平台：電商平台擴大銷售渠道</li></ul></div></div></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: 'Saint-Julien產區最大的特色是什麼？',
          options: ['最強勁有力', '最優雅精緻', '最完美平衡', '最創新現代'], 
          correct: 2,
          explanation: 'Saint-Julien產區最大的特色是"最完美平衡"，在優雅與力量之間找到理想的平衡點，既有足夠的結構和陳年潛力，又保持優雅精緻的風格，被譽為"平衡的典範"。'
        }
      }
    ]
  } else if (props.lessonId === 'l2-5') {
    return [
      { type: 'title' },
      {
        title: 'Saint-Estèphe產區地理特色與氣候條件',
        highlights: [
          { id: 1, icon: '🏔️', title: '北地之珠', content: 'Saint-Estèphe位於Médoc最北端，地理條件獨特' },
          { id: 2, icon: '🔄', title: '現代轉型', content: '從傳統厚重風格轉向現代優雅平衡' }
        ],
        content: '<div class="saint-estephe-terroir"><p class="lead-text">Saint-Estèphe位於Médoc半島最北端，以其獨特的地理位置和氣候條件，正在經歷從傳統厚重到現代優雅的華麗轉型。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Saint-Estèphe地理位置特色</h4><div class="geography-overview"><div class="location-details"><div class="location-card northern-position"><h5>🧭 最北端位置</h5><div class="location-content"><p><strong>地理座標：</strong>Médoc半島最北端，緊鄰Pauillac北界</p><p><strong>產區面積：</strong>1,254公頃，Médoc四大產區中面積第二</p><p><strong>海拔高度：</strong>10-40米，Médoc地區相對最高</p><div class="northern-advantages"><h6>北端優勢</h6><ul><li><strong>涼爽氣候：</strong>相對涼爽的微氣候延長成熟期</li><li><strong>地勢較高：</strong>更好的排水條件和視野</li><li><strong>風向獨特：</strong>北風調節減少夏季高溫</li><li><strong>土壤多樣：</strong>黏土比例較高，結構獨特</li></ul></div></div></div><div class="location-card elevation-advantage"><h5>📏 海拔優勢分析</h5><div class="elevation-details"><div class="high-plateau"><h6>高地台區 (25-40m)</h6><p><strong>位置：</strong>產區中心的制高點地帶</p><p><strong>特色：</strong>排水最佳，風土條件卓越</p><p><strong>酒莊：</strong>Cos d\'Estournel、Montrose等頂級酒莊</p></div><div class="mid-slopes"><h6>中坡地區 (15-25m)</h6><p><strong>分布：</strong>大部分葡萄園的主要區域</p><p><strong>土壤：</strong>黏土與砂礫的混合土壤</p><p><strong>特點：</strong>條件穩定，適合多樣化種植</p></div><div class="lower-areas"><h6>低地區域 (10-15m)</h6><p><strong>特徵：</strong>黏土含量較高的地區</p><p><strong>適性：</strong>特別適合Merlot種植</p><p><strong>管理：</strong>需要更精細的排水管理</p></div></div></div><div class="location-card boundaries"><h5>🔲 產區邊界與鄰區</h5><div class="boundary-analysis"><div class="south-boundary"><h6>南接Pauillac</h6><p>與Pauillac接壤，土壤逐漸從黏土過渡到砂礫</p></div><div class="north-boundary"><h6>北臨Gironde河口</h6><p>更接近河口，受大西洋影響更直接</p></div><div class="east-boundary"><h6>東面河岸</h6><p>3.5公里Gironde河岸線，最長的河岸線</p></div><div class="west-boundary"><h6>西向內陸</h6><p>向內陸森林延伸，天然屏障保護</p></div></div></div></div></div><div class="terroir-section soil-uniqueness"><h4>🪨 Saint-Estèphe土壤的獨特性</h4><div class="soil-analysis"><div class="soil-characteristics"><h5>🔬 土壤成分特色</h5><div class="soil-breakdown"><div class="soil-type heavy-clay"><h6>重黏土層 (主導特色)</h6><div class="soil-details"><p><strong>比例分布：</strong>黏土含量高達40-60%，Médoc最高</p><p><strong>礦物組成：</strong>豐富的鐵質和石灰質黏土</p><p><strong>形成過程：</strong>古代海洋沉積形成的厚重黏土</p><div class="soil-benefits"><h7>黏土優勢</h7><ul><li><strong>保水能力：</strong>乾旱期提供穩定水分供應</li><li><strong>緩慢升溫：</strong>春季較慢升溫，延遲萌芽</li><li><strong>Merlot理想：</strong>特別適合晚熟的Merlot品種</li><li><strong>礦物豐富：</strong>鐵質和鈣質提供複雜礦物感</li></ul></div></div></div><div class="soil-type clay-gravel"><h6>黏土砂礫混合 (次要類型)</h6><div class="soil-details"><p><strong>分布位置：</strong>主要在較高海拔的丘陵地帶</p><p><strong>組成比例：</strong>黏土與砂礫各佔30-40%</p><div class="soil-benefits"><h7>混合土壤優勢</h7><ul><li><strong>平衡性：</strong>兼具保水性和排水性</li><li><strong>適應性：</strong>適合多種葡萄品種種植</li><li><strong>複雜度：</strong>土壤複雜度帶來風味層次</li><li><strong>陳年潛力：</strong>支撐長期陳年發展</li></ul></div></div></div><div class="soil-type limestone-clay"><h6>石灰質黏土 (特殊區域)</h6><div class="soil-details"><p><strong>特色區域：</strong>部分頂級酒莊的核心地塊</p><p><strong>pH特性：</strong>較高的pH值，偏鹼性土壤</p><div class="soil-benefits"><h7>石灰質作用</h7><ul><li><strong>pH緩衝：</strong>維持土壤酸鹼平衡</li><li><strong>鈣質供應：</strong>豐富的鈣離子促進根系發育</li><li><strong>結構改善：</strong>改善黏土的物理結構</li><li><strong>風味貢獻：</strong>增加酒款的礦物質感</li></ul></div></div></div></div></div><div class="vineyard-challenges"><h5>🍇 黏土土壤的種植挑戰</h5><div class="challenge-management"><div class="challenge drainage"><h6>排水管理挑戰</h6><p><strong>問題：</strong>黏土土壤排水緩慢，雨季易積水</p><p><strong>解決方案：</strong>現代化排水系統和土壤改良</p><div class="drainage-solutions"><ul><li><strong>地下排水：</strong>安裝地下排水管道系統</li><li><strong>土壤改良：</strong>添加砂礫改善土壤結構</li><li><strong>梯田建設：</strong>建造梯田系統促進排水</li><li><strong>覆蓋作物：</strong>種植覆蓋作物改善土壤</li></ul></div></div><div class="challenge temperature"><h6>溫度管理挑戰</h6><p><strong>問題：</strong>黏土升溫慢，成熟期相對較晚</p><p><strong>策略：</strong>精準的成熟度管理和採收時機</p><div class="temperature-solutions"><ul><li><strong>選擇性採收：</strong>分批採收確保最佳成熟度</li><li><strong>葉幕管理：</strong>增加陽光照射促進成熟</li><li><strong>品種配置：</strong>增加早熟品種的比例</li><li><strong>微氣候利用：</strong>充分利用微氣候差異</li></ul></div></div><div class="challenge mechanization"><h6>機械化作業挑戰</h6><p><strong>問題：</strong>黏土在濕潤時黏性強，機械作業困難</p><p><strong>應對：</strong>時機選擇和設備改進</p><div class="mechanization-solutions"><ul><li><strong>時機把握：</strong>選擇土壤條件適宜時作業</li><li><strong>設備改進：</strong>使用適合黏土的專用設備</li><li><strong>手工作業：</strong>關鍵環節保持手工作業</li><li><strong>土壤監測：</strong>實時監測土壤狀況</li></ul></div></div></div></div></div></div><div class="terroir-section climate-northern"><h4>🌤️ Saint-Estèphe的北方氣候</h4><div class="climate-analysis"><div class="northern-climate"><h5>🌍 北方氣候特徵</h5><div class="climate-elements"><div class="element cooler-conditions"><h6>相對涼爽的條件</h6><div class="cooler-effects"><p><strong>溫度特性：</strong>年均溫度13.2°C，比南部產區低0.5-1°C</p><ul><li><strong>春季：</strong>萌芽較晚，減少霜凍風險</li><li><strong>夏季：</strong>最高溫度較低，避免過度成熟</li><li><strong>秋季：</strong>涼爽延長成熟期，增加複雜度</li><li><strong>冬季：</strong>充分的休眠期，有利樹體健康</li></ul></div></div><div class="element atlantic-influence"><h6>大西洋影響加強</h6><div class="atlantic-effects"><p><strong>海洋性特徵：</strong>更直接受大西洋氣候影響</p><ul><li><strong>濕度調節：</strong>相對濕度較高，需注意病害防治</li><li><strong>風向變化：</strong>西北風帶來清涼，調節溫度</li><li><strong>降雨模式：</strong>年降雨量900-950mm，略高於南部</li><li><strong>雲層覆蓋：</strong>相對較多的雲層，柔化光照</li></ul></div></div><div class="element river-proximity"><h6>河流鄰近效應</h6><div class="river-effects"><p><strong>Gironde河口：</strong>更接近河口，水體調節作用更強</p><ul><li><strong>溫度緩衝：</strong>河水提供更穩定的溫度調節</li><li><strong>霧氣形成：</strong>早晨霧氣有助於濕度調節</li><li><strong>微風循環：</strong>河風帶來清涼，促進通風</li><li><strong>反射光照：</strong>水面反射增加有效光照時間</li></ul></div></div></div></div><div class="seasonal-adaptation"><h5>📅 季節性適應策略</h5><div class="season-strategies"><div class="season spring"><h6>春季管理 (3-5月)</h6><p><strong>重點：</strong>應對較晚的萌芽和潛在霜凍</p><div class="season-details"><ul><li><strong>萌芽監測：</strong>密切監測萌芽時機和進度</li><li><strong>霜凍防護：</strong>準備霜凍防護措施</li><li><strong>土壤管理：</strong>黏土土壤的春季耕作</li><li><strong>病害預防：</strong>春季病害防治方案</li></ul></div></div><div class="season summer"><h6>夏季管理 (6-8月)</h6><p><strong>重點：</strong>利用相對涼爽的條件促進均勻成熟</p><div class="season-details"><ul><li><strong>溫度監控：</strong>監測溫度變化和成熟進度</li><li><strong>水分管理：</strong>黏土土壤的水分調節</li><li><strong>葉幕管理：</strong>優化光照和通風條件</li><li><strong>病害控制：</strong>高濕度環境的病害防治</li></ul></div></div><div class="season autumn"><h6>秋季管理 (9-11月)</h6><p><strong>重點：</strong>把握延長的成熟期和最佳採收時機</p><div class="season-details"><ul><li><strong>成熟度評估：</strong>精確評估各地塊成熟情況</li><li><strong>採收決策：</strong>選擇最佳採收時機</li><li><strong>天氣監測：</strong>密切關注天氣變化</li><li><strong>分批採收：</strong>根據成熟度分批進行</li></ul></div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'LeftBank-Medoc-Saint-Estephe',
        quiz: {
          question: 'Saint-Estèphe產區的土壤特色是什麼？',
          options: ['純砂礫土', '黏土含量最高', '石灰岩為主', '火山土'], 
          correct: 1,
          explanation: 'Saint-Estèphe產區的土壤特色是黏土含量最高，達到40-60%，是Médoc四大產區中黏土比例最高的，這種土壤特別適合Merlot的種植，並賦予酒款獨特的結構感。'
        }
      },
      {
        title: 'Cos d\'Estournel、Montrose等頂級酒莊',
        highlights: [
          { id: 1, icon: '🏰', title: '異域風情', content: 'Cos d\'Estournel以其異域建築風格聞名' },
          { id: 2, icon: '⭐', title: '品質革新', content: 'Montrose代表傳統與現代技術的完美結合' }
        ],
        content: '<div class="saint-estephe-chateaux"><p class="lead-text">Saint-Estèphe的頂級酒莊以其創新精神和品質革新聞名，代表了產區從傳統到現代的華麗轉型。</p><div class="chateaux-analysis"><div class="chateau-section cos-estournel"><h4>🏰 Château Cos d\'Estournel - 異域風情的創新者</h4><div class="chateau-profile"><div class="profile-card history"><h5>🕌 Cos d\'Estournel歷史與建築</h5><div class="history-details"><div class="historical-period origins"><h6>莊園創立 (1811)</h6><p>由Louis-Gaspard d\'Estournel創立，以其獨特的遠東貿易背景聞名</p></div><div class="historical-period architecture"><h6>異域建築風格</h6><p>著名的印度風格建築，兩座佛塔式建築是波爾多地標</p></div><div class="historical-period modern-era"><h6>現代化發展</h6><p>2000年後Michel Reybier接手，投入巨資現代化改造</p></div></div></div><div class="profile-card terroir"><h5>🌱 Cos d\'Estournel風土特色</h5><div class="terroir-details"><div class="vineyard-excellence"><h6>葡萄園卓越條件</h6><p><strong>總面積：</strong>91公頃，位置極佳</p><p><strong>地理位置：</strong>緊鄰Pauillac的Lafite，風土條件卓越</p><p><strong>海拔高度：</strong>18-32米，Saint-Estèphe最高點之一</p><p><strong>坡向：</strong>東南朝向，獲得充足日照</p></div><div class="soil-composition"><h6>土壤構成</h6><p><strong>上層：</strong>砂礫與黏土的理想混合</p><p><strong>中層：</strong>含鐵黏土提供礦物質</p><p><strong>基岩：</strong>石灰岩基岩提供深層養分</p><p><strong>特色：</strong>排水良好但保水性佳</p></div><div class="grape-selection"><h6>品種配置</h6><ul><li><strong>Cabernet Sauvignon：</strong>60%</li><li><strong>Merlot：</strong>38%</li><li><strong>Cabernet Franc：</strong>2%</li></ul></div></div></div><div class="profile-card innovation"><h5>🔬 創新釀酒技術</h5><div class="innovation-aspects"><div class="modern-facilities"><h6>現代化設施</h6><p><strong>重力流系統：</strong>2008年建成的重力流酒窖</p><p><strong>溫控發酵：</strong>72個不鏽鋼溫控發酵罐</p><p><strong>精選系統：</strong>光學分選機精選葡萄</p><p><strong>陳年窖：</strong>全新法國橡木桶陳年18個月</p></div><div class="precision-viticulture"><h6>精準葡萄栽培</h6><p><strong>地塊劃分：</strong>91公頃劃分為40個微地塊</p><p><strong>個別釀造：</strong>每個地塊分別發酵和陳年</p><p><strong>數據監控：</strong>實時監控土壤和氣候數據</p><p><strong>人工採收：</strong>完全手工採收和篩選</p></div><div class="style-evolution"><h6>風格演進</h6><p><strong>傳統基礎：</strong>保持Saint-Estèphe的傳統特色</p><p><strong>現代技術：</strong>運用現代技術提升品質</p><p><strong>國際風格：</strong>適應國際市場口味</p><p><strong>陳年潛力：</strong>30-50年的陳年能力</p></div></div></div></div></div><div class="chateau-section montrose"><h4>⭐ Château Montrose - 傳統與創新的完美結合</h4><div class="chateau-profile"><div class="profile-card heritage"><h5>🏛️ Montrose傳統傳承</h5><div class="heritage-details"><div class="historical-foundation"><h6>莊園建立 (1815)</h6><p>由Etienne Théodore Dumoulin在Saint-Estèphe建立</p></div><div class="charmolue-era"><h6>Charmolüe家族時代</h6><p>1896-2006年Charmolüe家族經營，建立卓越聲譽</p></div><div class="bouygues-era"><h6>Bouygues集團時代</h6><p>2006年後Martin和Olivier Bouygues接手現代化</p></div></div></div><div class="profile-card terroir-excellence"><h5>🌱 Montrose風土卓越性</h5><div class="terroir-analysis"><div class="vineyard-position"><h6>葡萄園位置</h6><p><strong>面積：</strong>95公頃，位置優越</p><p><strong>地理：</strong>Saint-Estèphe南部，緊鄰Gironde河</p><p><strong>海拔：</strong>平均20米，地勢平緩</p><p><strong>朝向：</strong>東南朝向河岸，日照充足</p></div><div class="soil-uniqueness"><h6>土壤獨特性</h6><p><strong>表層：</strong>深厚的砂礫層，排水優異</p><p><strong>中層：</strong>黏土與砂礫混合，保水適中</p><p><strong>底層：</strong>鐵質黏土，礦物質豐富</p><p><strong>特點：</strong>Saint-Estèphe中相對較少黏土</p></div><div class="microclimate"><h6>微氣候優勢</h6><p><strong>河流影響：</strong>直接面向Gironde河，溫度調節佳</p><p><strong>風向保護：</strong>地形提供天然風屏障</p><p><strong>陽光照射：</strong>開闊地形獲得充足日照</p><p><strong>霜凍保護：</strong>河流調節減少霜凍風險</p></div></div></div><div class="profile-card modernization"><h5>🔧 現代化改造</h5><div class="modernization-projects"><div class="winery-renovation"><h6>酒窖現代化</h6><p><strong>新建酒窖：</strong>2011年完成現代化酒窖建設</p><p><strong>發酵設備：</strong>木質和混凝土發酵罐結合</p><p><strong>重力流系統：</strong>減少葡萄處理的機械損傷</p><p><strong>陳年設施：</strong>最適宜的橡木桶陳年環境</p></div><div class="vineyard-improvement"><h6>葡萄園改良</h6><p><strong>重新種植：</strong>部分地塊重新種植優化品種</p><p><strong>排水改善：</strong>改善黏土地塊的排水系統</p><p><strong>密度調整：</strong>優化種植密度提高品質</p><p><strong>有機轉型：</strong>逐步轉向有機種植</p></div><div class="quality-enhancement"><h6>品質提升</h6><p><strong>篩選技術：</strong>引入先進的葡萄篩選技術</p><p><strong>發酵精控：</strong>精確控制發酵溫度和時間</p><p><strong>橡木桶管理：</strong>精選法國橡木桶陳年</p><p><strong>調配藝術：</strong>精益求精的調配工藝</p></div></div></div></div></div><div class="chateau-section other-estates"><h4>🏆 其他重要Saint-Estèphe酒莊</h4><div class="other-chateaux"><div class="chateau-brief calon-segur"><h5>💝 Château Calon-Ségur</h5><div class="estate-highlights"><p><strong>歷史意義：</strong>Marquis de Ségur的"心之所在"</p><p><strong>標誌特色：</strong>著名的愛心標誌酒標</p><p><strong>風土特點：</strong>Saint-Estèphe最北端，黏土含量高</p><p><strong>風格特徵：</strong>傳統厚重風格，陳年潛力極佳</p><p><strong>現代化：</strong>近年來持續現代化改造</p></div></div><div class="chateau-brief phélan-ségur"><h5>🌟 Château Phélan Ségur</h5><div class="estate-highlights"><p><strong>規模：</strong>70公頃，中等規模酒莊</p><p><strong>管理：</strong>Xavier Gardinier精心管理</p><p><strong>風格：</strong>現代Saint-Estèphe風格代表</p><p><strong>品質：</strong>持續提升的品質表現</p><p><strong>價值：</strong>優秀的性價比選擇</p></div></div><div class="chateau-brief lafon-rochet"><h5>🏰 Château Lafon-Rochet</h5><div class="estate-highlights"><p><strong>分級：</strong>1855年四級酒莊</p><p><strong>特色：</strong>黃色城堡建築醒目</p><p><strong>土壤：</strong>砂礫與黏土完美結合</p><p><strong>管理：</strong>Tesseron家族精心經營</p><p><strong>風格：</strong>平衡的現代Saint-Estèphe風格</p></div></div><div class="chateau-brief cos-labory"><h5>🍇 Château Cos Labory</h5><div class="estate-highlights"><p><strong>位置：</strong>與Cos d\'Estournel相鄰</p><p><strong>管理：</strong>Bernard Audoy家族經營</p><p><strong>風格：</strong>優雅的Saint-Estèphe風格</p><p><strong>品質：</strong>穩定的品質表現</p><p><strong>潛力：</strong>被低估的投資潛力</p></div></div></div><div class="estates-comparison"><h5>📊 頂級酒莊比較分析</h5><div class="comparison-framework"><div class="comparison-table"><div class="comparison-row header"><div class="cell">酒莊</div><div class="cell">建築特色</div><div class="cell">土壤類型</div><div class="cell">風格特點</div><div class="cell">現代化程度</div></div><div class="comparison-row"><div class="cell"><strong>Cos d\'Estournel</strong></div><div class="cell">印度風格建築</div><div class="cell">砂礫黏土混合</div><div class="cell">創新現代風格</div><div class="cell">極高</div></div><div class="comparison-row"><div class="cell"><strong>Montrose</strong></div><div class="cell">傳統法式建築</div><div class="cell">砂礫為主</div><div class="cell">傳統與現代結合</div><div class="cell">高</div></div><div class="comparison-row"><div class="cell"><strong>Calon-Ségur</strong></div><div class="cell">古典城堡</div><div class="cell">黏土含量高</div><div class="cell">傳統厚重</div><div class="cell">中等</div></div><div class="comparison-row"><div class="cell"><strong>Phélan Ségur</strong></div><div class="cell">現代化建築</div><div class="cell">平衡土壤</div><div class="cell">現代平衡</div><div class="cell">高</div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'saint-estephe-chateaux',
        quiz: {
          question: 'Château Cos d\'Estournel的建築風格特色是什麼？',
          options: ['法式古典', '印度異域風格', '現代簡約', '哥德式'], 
          correct: 1,
          explanation: 'Château Cos d\'Estournel以其獨特的印度異域風格建築聞名，兩座佛塔式建築是波爾多的著名地標，反映了創始人Louis-Gaspard d\'Estournel的遠東貿易背景。'
        }
      },
      {
        title: 'Saint-Estèphe現代風格演進與釀酒技術革新',
        highlights: [
          { id: 1, icon: '🔄', title: '風格轉型', content: '從傳統厚重風格向現代優雅平衡轉型' },
          { id: 2, icon: '🔬', title: '技術革新', content: '現代釀酒技術改造了產區的表達方式' }
        ],
        content: '<div class="saint-estephe-evolution"><p class="lead-text">Saint-Estèphe正在經歷前所未有的風格革命，從傳統的厚重風格轉向現代的優雅平衡，這場轉型展現了技術創新與風土尊重的完美結合。</p><div class="evolution-analysis"><div class="evolution-section traditional-legacy"><h4>📚 傳統風格的歷史遺產</h4><div class="traditional-analysis"><div class="historical-style"><h5>🏛️ 傳統Saint-Estèphe特徵</h5><div class="traditional-characteristics"><div class="style-elements"><h6>經典風格要素</h6><div class="traditional-features"><p><strong>厚重酒體：</strong>高黏土比例造就的飽滿厚重酒體</p><p><strong>強勁單寧：</strong>需要長期陳年才能柔化的粗獷單寧</p><p><strong>緩慢成熟：</strong>相對涼爽氣候導致的晚熟特性</p><p><strong>陳年必需：</strong>年輕時過於封閉，必須長期陳年</p></div><div class="traditional-advantages"><h6>傳統風格優勢</h6><ul><li><strong>陳年潛力：</strong>極強的長期陳年能力</li><li><strong>結構穩定：</strong>強勁的酒體結構支撐</li><li><strong>風土表達：</strong>忠實反映黏土風土特色</li><li><strong>獨特性：</strong>與其他產區明顯區別</li></ul></div></div><div class="historical-challenges"><h6>傳統風格挑戰</h6><div class="challenge-factors"><p><strong>市場適應：</strong>現代消費者偏好更易飲的風格</p><p><strong>年輕時期：</strong>年輕時過於封閉，缺乏吸引力</p><p><strong>國際競爭：</strong>面臨新世界易飲風格競爭</p><p><strong>價格壓力：</strong>相對較長的等待期影響市場接受度</p></div></div></div></div><div class="transformation-drivers"><h5>🔄 轉型推動因素</h5><div class="driver-analysis"><div class="market-demand"><h6>市場需求變化</h6><p><strong>消費趨勢：</strong>消費者偏好年輕時就具有魅力的酒款</p><p><strong>國際市場：</strong>需要適應全球化市場的口味</p><p><strong>即時享受：</strong>現代生活節奏要求即時享受</p><p><strong>價格競爭：</strong>需要提供更好的即時價值</p></div><div class="technological-advancement"><h6>技術進步推動</h6><p><strong>精準農業：</strong>精準農業技術提升品質控制</p><p><strong>釀酒工藝：</strong>現代釀酒技術改善酒款結構</p><p><strong>品質監控：</strong>先進的品質監控系統</p><p><strong>設備升級：</strong>現代化設備提升效率和品質</p></div><div class="generational-change"><h6>世代更替影響</h6><p><strong>新生代管理：</strong>年輕一代莊主的創新理念</p><p><strong>教育背景：</strong>現代釀酒學教育的影響</p><p><strong>國際視野：</strong>全球化視野帶來新思維</p><p><strong>創新精神：</strong>敢於突破傳統的創新精神</p></div></div></div></div></div><div class="evolution-section modern-transformation"><h4>🔬 現代釀酒技術革新</h4><div class="technological-revolution"><div class="vineyard-innovations"><h5>🍇 葡萄園技術革新</h5><div class="vineyard-tech"><div class="precision-agriculture"><h6>精準農業應用</h6><div class="precision-tools"><p><strong>土壤分析：</strong>詳細的土壤成分和結構分析</p><ul><li><strong>GPS定位：</strong>精確定位每個地塊的特性</li><li><strong>衛星監測：</strong>衛星圖像監測植物健康狀況</li><li><strong>無人機應用：</strong>無人機巡視和數據收集</li><li><strong>感測器網路：</strong>土壤和氣候實時監測系統</li></ul></div></div><div class="drainage-improvement"><h6>排水系統改良</h6><div class="drainage-solutions"><p><strong>現代排水：</strong>針對黏土土壤的專門排水系統</p><ul><li><strong>地下排水管：</strong>密集的地下排水管網</li><li><strong>表面排水：</strong>改善地表水流向和速度</li><li><strong>土壤改良：</strong>添加有機質改善土壤結構</li><li><strong>植被覆蓋：</strong>利用植被改善土壤通透性</li></ul></div></div><div class="canopy-management"><h6>樹冠管理優化</h6><div class="canopy-techniques"><p><strong>精準管理：</strong>根據微氣候條件調整樹冠管理</p><ul><li><strong>葉面積指數：</strong>精確計算最適葉面積比例</li><li><strong>光照優化：</strong>確保果實獲得最佳光照</li><li><strong>通風改善：</strong>增加通風減少病害風險</li><li><strong>成熟均勻：</strong>促進果實同步均勻成熟</li></ul></div></div></div></div><div class="winemaking-innovations"><h5>🏭 釀酒工藝創新</h5><div class="winemaking-tech"><div class="fermentation-control"><h6>發酵控制精進</h6><div class="fermentation-advances"><p><strong>溫度控制：</strong>精確的溫度控制系統</p><ul><li><strong>分段發酵：</strong>不同溫度階段的發酵控制</li><li><strong>酵母選擇：</strong>選用特定酵母菌株增強風味</li><li><strong>浸漬技術：</strong>冷浸漬和延長浸漬技術</li><li><strong>攪拌控制：</strong>精確控制攪拌頻率和強度</li></ul></div></div><div class="extraction-techniques"><h6>萃取技術改進</h6><div class="extraction-methods"><p><strong>溫和萃取：</strong>更溫和的萃取方法保護果味</p><ul><li><strong>重力流系統：</strong>減少機械處理保護葡萄完整性</li><li><strong>光學篩選：</strong>精確篩選最優質葡萄</li><li><strong>分批處理：</strong>根據成熟度分批處理</li><li><strong>微氧技術：</strong>控制氧化程度穩定顏色和風味</li></ul></div></div><div class="aging-innovation"><h6>陳年工藝創新</h6><div class="aging-techniques"><p><strong>橡木桶管理：</strong>更精細的橡木桶陳年管理</p><ul><li><strong>橡木選擇：</strong>精選不同產地和烘烤程度橡木桶</li><li><strong>陳年時間：</strong>根據年份特點調整陳年時間</li><li><strong>桶中調配：</strong>陳年期間的精細調配</li><li><strong>替代橡木：</strong>橡木片、橡木粉等替代技術</li></ul></div></div></div></div><div class="quality-control"><h5>📊 品質控制系統</h5><div class="quality-systems"><div class="laboratory-analysis"><h6>實驗室分析</h6><p><strong>化學分析：</strong>全面的化學成分分析</p><p><strong>微生物檢測：</strong>確保發酵過程的穩定性</p><p><strong>感官評估：</strong>專業品酒師的感官評估</p><p><strong>陳年預測：</strong>預測陳年潛力和最佳飲用期</p></div><div class="traceability-system"><h6>追溯系統</h6><p><strong>地塊追蹤：</strong>從葡萄園到瓶裝的完整追蹤</p><p><strong>批次管理：</strong>每個批次的詳細記錄</p><p><strong>品質檔案：</strong>建立完整的品質檔案系統</p><p><strong>消費者資訊：</strong>為消費者提供詳細產品資訊</p></div></div></div></div></div><div class="evolution-section style-characteristics"><h4>🎯 現代Saint-Estèphe風格特徵</h4><div class="modern-style-analysis"><div class="new-style-profile"><h5>🌟 新風格特徵</h5><div class="modern-characteristics"><div class="balance-achievement"><h6>平衡性的提升</h6><div class="balance-aspects"><p><strong>結構平衡：</strong>在保持結構的同時增加優雅感</p><ul><li><strong>單寧柔化：</strong>更加絲滑而非粗糙的單寧質感</li><li><strong>酸度平衡：</strong>清新的酸度平衡豐富的果味</li><li><strong>酒精度控制：</strong>適中的酒精度增加飲用性</li><li><strong>果味突出：</strong>更明顯的果味表達</li></ul></div></div><div class="accessibility-improvement"><h6>易飲性改善</h6><div class="accessibility-factors"><p><strong>年輕適飲：</strong>年輕時期就具有吸引力</p><ul><li><strong>開放性：</strong>年輕時更加開放易接近</li><li><strong>果香豐富：</strong>豐富的新鮮果香表達</li><li><strong>單寧圓潤：</strong>圓潤而非澀口的單寧感</li><li><strong>餘韻愉悅：</strong>愉悅而非粗糙的餘韻</li></ul></div></div><div class="complexity-retention"><h6>複雜度保持</h6><div class="complexity-elements"><p><strong>深度維持：</strong>在易飲的同時保持複雜度</p><ul><li><strong>層次豐富：</strong>多層次的香氣和風味發展</li><li><strong>陳年潛力：</strong>仍具備良好的陳年能力</li><li><strong>風土表達：</strong>忠實反映Saint-Estèphe風土</li><li><strong>獨特性：</strong>保持產區獨特風格識別</li></ul></div></div></div></div><div class="market-response"><h5>📈 市場反應與成效</h5><div class="market-analysis"><div class="consumer-acceptance"><h6>消費者接受度</h6><p><strong>滿意度提升：</strong>消費者滿意度顯著提高</p><p><strong>重購率增加：</strong>重複購買率明顯上升</p><p><strong>推薦意願：</strong>更願意向他人推薦</p><p><strong>價格接受：</strong>對價格的接受度提高</p></div><div class="critical-acclaim"><h6>專業評價</h6><p><strong>評分提升：</strong>專業評分持續上升</p><p><strong>媒體關注：</strong>獲得更多媒體正面報導</p><p><strong>獎項認可：</strong>在各類競賽中獲獎增加</p><p><strong>專家推薦：</strong>獲得更多專家推薦</p></div><div class="investment-value"><h6>投資價值</h6><p><strong>價格穩定：</strong>價格表現更加穩定</p><p><strong>升值潛力：</strong>長期升值潛力增強</p><p><strong>流通性：</strong>二級市場流通性改善</p><p><strong>收藏價值：</strong>收藏價值得到認可</p></div></div></div><div class="future-outlook"><h5>🔮 未來發展展望</h5><div class="future-trends"><div class="continued-innovation"><h6>持續創新</h6><p><strong>技術發展：</strong>新技術的持續應用</p><p><strong>品質提升：</strong>品質標準的不斷提高</p><p><strong>風格完善：</strong>風格特徵的進一步完善</p><p><strong>可持續發展：</strong>環保和可持續釀酒實踐</p></div><div class="market-expansion"><h6>市場擴展</h6><p><strong>新市場開發：</strong>開拓新興市場</p><p><strong>品牌建設：</strong>加強品牌形象建設</p><p><strong>教育推廣：</strong>消費者教育和推廣</p><p><strong>體驗營銷：</strong>酒莊旅遊和體驗活動</p></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: 'Saint-Estèphe產區風格演進的主要方向是什麼？',
          options: ['保持傳統厚重', '從厚重轉向優雅平衡', '完全現代化', '回歸古典風格'], 
          correct: 1,
          explanation: 'Saint-Estèphe產區風格演進的主要方向是從傳統厚重風格轉向現代優雅平衡。通過現代釀酒技術革新，在保持產區風土特色的同時，提升了酒款的易飲性和年輕時期的吸引力。'
        }
      }
    ]
  } else if (props.lessonId === 'l2-2') {
    return [
      { type: 'title' },
      {
        title: 'Margaux風土與土壤特色',
        highlights: [
          { id: 1, icon: '🌸', title: '優雅風土', content: 'Margaux以細緻砂質土壤造就優雅風格' },
          { id: 2, icon: '💎', title: '香水之鄉', content: '被譽為"葡萄酒中的香水"的精緻產區' }
        ],
        content: '<div class="margaux-terroir"><p class="lead-text">Margaux是波爾多最優雅的產區，以其細膩的風土條件和如香水般的酒款聞名於世。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Margaux產區地理概況</h4><div class="geography-overview"><div class="location-details"><div class="location-card central"><h5>🎯 中心位置</h5><div class="location-content"><p><strong>戰略地位：</strong>位於Médoc半島中心，享有最佳風土條件</p><p><strong>產區面積：</strong>約1,400公頃，是Médoc最大的村莊產區</p><p><strong>地形特徵：</strong>複雜的丘陵與平原交錯地形</p><div class="geographic-advantages"><h6>地理優勢</h6><ul><li><strong>多樣性：</strong>土壤類型最為豐富多樣</li><li><strong>排水性：</strong>砂質土壤提供優異排水</li><li><strong>微氣候：</strong>受Gironde河調節的穩定氣候</li><li><strong>日照：</strong>朝南坡向獲得充足日照</li></ul></div></div></div><div class="location-card communes"><h5>🏘️ 五個村莊構成</h5><div class="commune-details"><div class="commune margaux-village"><h6>Margaux村</h6><p>產區核心，擁有最著名的酒莊如Château Margaux</p></div><div class="commune cantenac"><h6>Cantenac村</h6><p>土壤砂質成分最高，風格最為優雅細膩</p></div><div class="commune soussans"><h6>Soussans村</h6><p>北部村莊，土壤較重，風格相對厚重</p></div><div class="commune labarde"><h6>Labarde村</h6><p>南部村莊，與Médoc產區接壤</p></div><div class="commune arsac"><h6>Arsac村</h6><p>西部內陸村莊，風格介於優雅與力量之間</p></div></div></div><div class="location-card elevation"><h5>📏 地形高度分析</h5><div class="elevation-zones"><div class="zone high-plateau"><h6>高台地區 (15-30m)</h6><p>最優秀的葡萄園所在地，排水完美，風格最純淨</p></div><div class="zone mid-slope"><h6>中坡地區 (8-15m)</h6><p>大部分酒莊位置，土壤條件優良</p></div><div class="zone riverside"><h6>河邊低地 (3-8m)</h6><p>靠近Gironde河，受益於水體調節</p></div></div></div></div></div><div class="terroir-section soil-composition"><h4>🪨 Margaux土壤的獨特性</h4><div class="soil-analysis"><div class="soil-characteristics"><h5>🔬 土壤成分分析</h5><div class="soil-breakdown"><div class="soil-type sandy-gravel"><h6>砂質砂礫土 (主導類型)</h6><div class="soil-details"><p><strong>比例：</strong>佔總面積的70%以上</p><p><strong>特徵：</strong>細砂粒與小砂礫的完美組合</p><p><strong>形成：</strong>古代Gironde河沖積形成</p><div class="soil-benefits"><h7>土壤優勢</h7><ul><li><strong>排水極佳：</strong>砂質結構防止積水</li><li><strong>升溫快速：</strong>砂土快速吸收和釋放熱量</li><li><strong>根系穿透：</strong>疏鬆結構利於根系發展</li><li><strong>礦物質：</strong>豐富的石英和長石礦物</li></ul></div></div></div><div class="soil-type clay-limestone"><h6>黏土石灰岩 (輔助類型)</h6><div class="soil-details"><p><strong>分布：</strong>主要在內陸較高海拔地區</p><p><strong>作用：</strong>提供深層礦物質和保水能力</p><div class="soil-benefits"><h7>土壤作用</h7><ul><li><strong>保水性：</strong>乾旱期提供水分儲備</li><li><strong>礦物質：</strong>鈣質增加酒款複雜度</li><li><strong>pH緩衝：</strong>穩定土壤酸鹼度</li><li><strong>結構支撐：</strong>為砂土提供結構穩定</li></ul></div></div></div><div class="soil-type iron-rich"><h6>含鐵土壤 (特殊區域)</h6><div class="soil-details"><p><strong>位置：</strong>部分丘陵地帶的特殊土層</p><p><strong>影響：</strong>賦予酒款獨特的礦物特徵</p><div class="soil-benefits"><h7>風味貢獻</h7><ul><li><strong>礦物感：</strong>增加酒款的礦物質感</li><li><strong>顏色深度：</strong>幫助葡萄著色</li><li><strong>陳年潛力：</strong>提供長期陳年基礎</li><li><strong>風味層次：</strong>增加口感複雜度</li></ul></div></div></div></div></div><div class="vineyard-practices"><h5>🍇 種植管理實踐</h5><div class="cultivation-methods"><div class="method density"><h6>種植密度優化</h6><p><strong>密度標準：</strong>每公頃8,000-10,000株</p><p><strong>目的：</strong>在砂質土壤上實現根系競爭，提高果實濃縮度</p></div><div class="method rootstock"><h6>砧木選擇</h6><p><strong>主要砧木：</strong>101-14、3309C等適合砂土的砧木</p><p><strong>適應性：</strong>確保在排水良好的砂土中穩定生長</p></div><div class="method canopy"><h6>樹冠管理</h6><p><strong>修剪方式：</strong>採用居由 (Guyot) 修剪法</p><p><strong>葉幕管理：</strong>精確控制葉果比，平衡光照與遮蔭</p></div></div></div></div></div><div class="terroir-section climate-influence"><h4>🌤️ Margaux的微氣候特色</h4><div class="climate-analysis"><div class="climate-factors"><h5>🌍 氣候調節機制</h5><div class="climate-elements"><div class="element river-influence"><h6>Gironde河影響</h6><div class="river-effects"><p><strong>溫度調節：</strong>河水提供穩定的溫度緩衝</p><ul><li>夏季：降低極端高溫，保持清涼</li><li>秋季：延長溫暖期，促進完全成熟</li><li>冬季：防止極度嚴寒，保護葡萄藤</li><li>春季：減少霜凍風險，保護新芽</li></ul></div></div><div class="element forest-protection"><h6>森林屏障保護</h6><div class="forest-effects"><p><strong>風向調節：</strong>西側森林緩解大西洋強風</p><ul><li>減少強風損害，保護果實和葉片</li><li>維持適度通風，預防真菌疾病</li><li>創造微環境，穩定溫濕度變化</li><li>提供生態多樣性，天敵昆蟲棲息</li></ul></div></div><div class="element drainage-system"><h6>自然排水系統</h6><div class="drainage-effects"><p><strong>水分管理：</strong>砂質土壤的完美排水能力</p><ul><li>快速排除過量雨水，防止根部積水</li><li>保持土壤透氣性，促進根系健康</li><li>減少病害風險，特別是根部病害</li><li>允許深層根系發展，吸收礦物質</li></ul></div></div></div></div><div class="seasonal-patterns"><h5>📅 季節性氣候模式</h5><div class="season-analysis"><div class="season spring"><h6>春季特徵 (3-5月)</h6><p><strong>關鍵期：</strong>萌芽到開花期</p><div class="season-details"><ul><li><strong>溫度：</strong>15-20°C，溫和穩定</li><li><strong>降雨：</strong>適量雨水促進新梢生長</li><li><strong>風向：</strong>西南暖風主導</li><li><strong>管理：</strong>修剪、綁枝、土壤管理</li></ul></div></div><div class="season summer"><h6>夏季特徵 (6-8月)</h6><p><strong>關鍵期：</strong>果實發育與轉色</p><div class="season-details"><ul><li><strong>溫度：</strong>25-30°C，日夜溫差適中</li><li><strong>降雨：</strong>相對乾燥，有利濃縮</li><li><strong>日照：</strong>充足但不過度強烈</li><li><strong>管理：</strong>疏果、除葉、控制產量</li></ul></div></div><div class="season autumn"><h6>秋季特徵 (9-11月)</h6><p><strong>關鍵期：</strong>成熟與採收期</p><div class="season-details"><ul><li><strong>溫度：</strong>18-25°C，延長成熟期</li><li><strong>降雨：</strong>適度降雨維持平衡</li><li><strong>濕度：</strong>河流調節保持穩定</li><li><strong>管理：</strong>採收時機判斷與執行</li></ul></div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'LeftBank-Medoc-Margaux',
        quiz: {
          question: 'Margaux產區的土壤主要特徵是什麼？',
          options: ['黏土為主', '砂質砂礫土為主', '石灰岩為主', '火山土為主'], 
          correct: 1,
          explanation: 'Margaux產區以砂質砂礫土為主要土壤類型，佔總面積70%以上。這種細砂粒與小砂礫的組合提供優異的排水性和升溫能力，是造就Margaux優雅風格的關鍵因素。'
        }
      },
      {
        title: 'Château Margaux與傳奇酒莊',
        highlights: [
          { id: 1, icon: '👑', title: '一級酒莊', content: 'Château Margaux是Margaux產區唯一的一級酒莊' },
          { id: 2, icon: '🏰', title: '歷史傳承', content: '數百年歷史的偉大酒莊與釀酒傳統' }
        ],
        content: '<div class="margaux-chateaux"><p class="lead-text">Margaux產區匯聚了眾多世界級酒莊，其中Château Margaux作為唯一的一級酒莊，代表了產區的最高水準。</p><div class="chateaux-analysis"><div class="chateau-section premier-cru"><h4>👑 Château Margaux - 一級酒莊典範</h4><div class="chateau-profile"><div class="profile-card history"><h5>🏰 歷史沿革</h5><div class="history-timeline"><div class="timeline-period medieval"><h6>中世紀起源 (12世紀)</h6><p>最初名為"La Mothe de Margaux"，是一座防禦性城堡，周圍種植葡萄園。</p></div><div class="timeline-period renaissance"><h6>文藝復興發展 (16-17世紀)</h6><p>Lestonnac家族接管，開始專注於葡萄酒品質提升，建立了聲譽基礎。</p></div><div class="timeline-period modern-era"><h6>現代化時期 (18-19世紀)</h6><p>1810年建造了著名的新古典主義城堡建築，確立了今日的建築風貌。</p></div><div class="timeline-period contemporary"><h6>當代輝煌 (20-21世紀)</h6><p>1977年被André Mentzelopoulos收購，投入巨資進行現代化改造，品質達到新高度。</p></div></div></div><div class="profile-card terroir"><h5>🌱 風土條件</h5><div class="terroir-details"><div class="soil-composition"><h6>土壤構成</h6><p><strong>表層：</strong>細砂礫與砂質土壤</p><p><strong>中層：</strong>砂礫層，排水極佳</p><p><strong>底層：</strong>石灰岩基岩，提供礦物質</p></div><div class="vineyard-stats"><h6>葡萄園數據</h6><ul><li><strong>總面積：</strong>82公頃</li><li><strong>葡萄園面積：</strong>82公頃</li><li><strong>平均樹齡：</strong>45年</li><li><strong>種植密度：</strong>每公頃10,000株</li></ul></div><div class="grape-varieties"><h6>葡萄品種組成</h6><ul><li><strong>Cabernet Sauvignon：</strong>75%</li><li><strong>Merlot：</strong>20%</li><li><strong>Petit Verdot：</strong>3%</li><li><strong>Cabernet Franc：</strong>2%</li></ul></div></div></div><div class="profile-card winemaking"><h5>🍷 釀酒工藝</h5><div class="winemaking-process"><div class="process-stage harvest"><h6>🍇 採收與篩選</h6><div class="harvest-details"><p><strong>採收方式：</strong>完全手工採收，分批進行</p><p><strong>篩選程序：</strong>葡萄園篩選 → 光學篩選 → 人工精選</p><p><strong>運輸方式：</strong>小籃子運輸，避免破損</p></div></div><div class="process-stage fermentation"><h6>🧪 發酵控制</h6><div class="fermentation-details"><p><strong>發酵容器：</strong>溫控不鏽鋼罐和木質發酵罐</p><p><strong>溫度控制：</strong>28-30°C精確控溫</p><p><strong>浸皮時間：</strong>18-25天，根據年份調整</p><p><strong>蘋果酸乳酸發酵：</strong>100%在橡木桶中進行</p></div></div><div class="process-stage aging"><h6>🏺 橡木桶陳年</h6><div class="aging-details"><p><strong>橡木桶類型：</strong>100%法國橡木新桶</p><p><strong>陳年時間：</strong>18-24個月</p><p><strong>桶型規格：</strong>225升標準波爾多桶</p><p><strong>烘烤程度：</strong>中度烘烤，突出優雅特質</p></div></div></div></div><div class="profile-card style"><h5>🎯 風格特徵</h5><div class="style-analysis"><div class="sensory-profile"><div class="visual-characteristics"><h6>視覺特徵</h6><p><strong>顏色：</strong>深紫紅色，年輕時近乎墨黑</p><p><strong>透明度：</strong>澄清透亮，陳年後呈現石榴紅色</p><p><strong>濃稠度：</strong>酒體飽滿，掛杯持久</p></div><div class="aroma-profile"><h6>香氣特徵</h6><div class="aroma-categories"><div class="primary-aromas"><strong>果香：</strong>黑醋栗、櫻桃、藍莓</div><div class="secondary-aromas"><strong>花香：</strong>紫羅蘭、玫瑰花瓣、鈴蘭</div><div class="tertiary-aromas"><strong>陳年香氣：</strong>雪茄盒、皮革、松露</div><div class="oak-aromas"><strong>橡木香氣：</strong>香草、摩卡、烤麵包</div></div></div><div class="palate-structure"><h6>口感結構</h6><ul><li><strong>酒體：</strong>飽滿而優雅，如絲綢般順滑</li><li><strong>單寧：</strong>精緻細膩，年輕時結構明顯</li><li><strong>酸度：</strong>清新平衡，提供骨架支撐</li><li><strong>餘韻：</strong>悠長複雜，可持續60秒以上</li></ul></div></div><div class="aging-potential"><h6>陳年潛力</h6><div class="aging-phases"><div class="phase youth"><strong>年輕期 (0-5年)：</strong>果香主導，單寧較重，建議醒酒</div><div class="phase development"><strong>發展期 (5-15年)：</strong>香氣複雜化，單寧逐漸柔化</div><div class="phase maturity"><strong>成熟期 (15-30年)：</strong>達到完美平衡，展現最高複雜度</div><div class="phase peak"><strong>巔峰期 (30-50年)：</strong>偉大年份可達50年以上陳年潛力</div></div></div></div></div></div><div class="chateau-section other-estates"><h4>🏆 其他優秀酒莊</h4><div class="estates-grid"><div class="estate-group second-growth"><h5>二級酒莊</h5><div class="estate-cards"><div class="estate-card rauzan-segla"><h6>🏰 Château Rauzan-Ségla</h6><div class="estate-info"><p><strong>面積：</strong>66公頃</p><p><strong>特色：</strong>複雜優雅，陳年潛力佳</p><p><strong>風格：</strong>結合力量與精緻的典型Margaux風格</p><div class="signature-traits"><strong>代表特徵：</strong>香氣層次豐富，口感絲滑細膩</div></div></div><div class="estate-card rauzan-gassies"><h6>🏰 Château Rauzan-Gassies</h6><div class="estate-info"><p><strong>面積：</strong>30公頃</p><p><strong>特色：</strong>傳統風格，近年品質提升</p><p><strong>風格：</strong>優雅中帶有結構感</p><div class="signature-traits"><strong>代表特徵：</strong>花香突出，單寧柔和</div></div></div><div class="estate-card lascombes"><h6>🏰 Château Lascombes</h6><div class="estate-info"><p><strong>面積：</strong>84公頃</p><p><strong>特色：</strong>現代化管理，品質穩定</p><p><strong>風格：</strong>濃郁而不失優雅</p><div class="signature-traits"><strong>代表特徵：</strong>果香豐富，結構平衡</div></div></div></div></div><div class="estate-group third-growth"><h5>三級酒莊</h5><div class="estate-cards"><div class="estate-card malescot"><h6>🏰 Château Malescot Saint-Exupéry</h6><div class="estate-info"><p><strong>面積：</strong>23.5公頃</p><p><strong>特色：</strong>精品酒莊，品質卓越</p><p><strong>風格：</strong>優雅精緻，香氣複雜</p></div></div><div class="estate-card palmer"><h6>🏰 Château Palmer</h6><div class="estate-info"><p><strong>面積：</strong>55公頃</p><p><strong>特色：</strong>被譽為"超二級"品質</p><p><strong>風格：</strong>豐富濃郁，陳年潛力佳</p></div></div><div class="estate-card issan"><h6>🏰 Château d\'Issan</h6><div class="estate-info"><p><strong>面積：</strong>65公頃</p><p><strong>特色：</strong>歷史悠久，優雅風格</p><p><strong>風格：</strong>細膩平衡，花香明顯</p></div></div></div></div><div class="estate-group cru-bourgeois"><h5>中級酒莊精選</h5><div class="estate-cards"><div class="estate-card siran"><h6>🏰 Château Siran</h6><div class="estate-info"><p><strong>特色：</strong>中級酒莊典範，性價比優異</p><p><strong>風格：</strong>易飲易懂，果香豐富</p></div></div><div class="estate-card du-tertre"><h6>🏰 Château du Tertre</h6><div class="estate-info"><p><strong>特色：</strong>位於Arsac村，風格獨特</p><p><strong>風格：</strong>介於優雅與力量之間</p></div></div><div class="estate-card brane-cantenac"><h6>🏰 Château Brane-Cantenac</h6><div class="estate-info"><p><strong>特色：</strong>二級酒莊，歷史悠久</p><p><strong>風格：</strong>典型Margaux優雅風格</p></div></div></div></div></div></div><div class="chateau-section investment"><h4>💰 投資收藏價值</h4><div class="investment-analysis"><div class="value-factors"><h5>📈 價值影響因素</h5><div class="factor-grid"><div class="factor rarity"><h6>稀缺性</h6><p><strong>產量限制：</strong>Château Margaux年產量僅約12,000箱</p><p><strong>配額分配：</strong>全球分銷，供不應求</p></div><div class="factor quality"><h6>品質一致性</h6><p><strong>年份穩定性：</strong>即使在困難年份也能維持高品質</p><p><strong>評分表現：</strong>國際酒評家持續高分評價</p></div><div class="factor heritage"><h6>文化價值</h6><p><strong>歷史意義：</strong>代表波爾多葡萄酒文化的巔峰</p><p><strong>品牌價值：</strong>全球認知度最高的葡萄酒品牌之一</p></div><div class="factor market"><h6>市場表現</h6><p><strong>長期增值：</strong>過去20年平均年增值率8-12%</p><p><strong>流通性：</strong>二級市場活躍，交易便利</p></div></div></div><div class="price-trends"><h5>💎 價格區間參考</h5><div class="price-categories"><div class="price-tier recent-vintage"><h6>近期年份 (2015-2020)</h6><p><strong>Château Margaux：</strong>€800-1,500/瓶</p><p><strong>二級酒莊：</strong>€150-400/瓶</p><p><strong>三級酒莊：</strong>€80-200/瓶</p></div><div class="price-tier mature-vintage"><h6>成熟年份 (2000-2010)</h6><p><strong>Château Margaux：</strong>€1,500-3,000/瓶</p><p><strong>二級酒莊：</strong>€300-800/瓶</p><p><strong>三級酒莊：</strong>€150-400/瓶</p></div><div class="price-tier legendary-vintage"><h6>傳奇年份 (1982, 1990, 2000)</h6><p><strong>Château Margaux：</strong>€3,000-8,000/瓶</p><p><strong>頂級二級酒莊：</strong>€800-2,000/瓶</p></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'margaux-estates',
        quiz: {
          question: 'Château Margaux的葡萄品種組成中，哪個品種佔主導地位？',
          options: ['Merlot 75%', 'Cabernet Sauvignon 75%', 'Cabernet Franc 75%', 'Petit Verdot 75%'], 
          correct: 1,
          explanation: 'Château Margaux的葡萄品種組成為Cabernet Sauvignon 75%、Merlot 20%、Petit Verdot 3%、Cabernet Franc 2%。Cabernet Sauvignon的主導地位確保了酒款的結構與陳年潛力。'
        }
      },
      {
        title: 'Margaux風格特色與品鑑要點',
        highlights: [
          { id: 1, icon: '🌸', title: '花香特色', content: '以紫羅蘭、玫瑰等花香聞名的優雅風格' },
          { id: 2, icon: '🍽️', title: '餐酒搭配', content: '精緻搭配藝術，完美配對高級料理' }
        ],
        content: '<div class="margaux-style"><p class="lead-text">Margaux產區以其獨特的優雅風格和複雜的香氣層次，被譽為"葡萄酒中的香水"，展現了波爾多紅酒的最高藝術水準。</p><div class="style-analysis"><div class="style-section characteristics"><h4>🎯 Margaux風格特徵分析</h4><div class="style-profile"><div class="profile-aspect sensory"><h5>👃 感官特徵描述</h5><div class="sensory-breakdown"><div class="sense visual"><h6>視覺印象</h6><div class="visual-details"><div class="color-evolution"><h7>顏色演變</h7><div class="color-stages"><div class="stage youth"><strong>年輕期：</strong>深紫紅色，邊緣帶紫色調</div><div class="stage maturity"><strong>成熟期：</strong>紅寶石色，透明度增加</div><div class="stage aging"><strong>陳年期：</strong>石榴紅色，邊緣呈現琥珀色</div></div></div><div class="clarity-intensity"><h7>澄清度與濃度</h7><p><strong>澄清度：</strong>通常非常澄清，極少沉澱</p><p><strong>濃度：</strong>中等到飽滿，優雅而不厚重</p><p><strong>掛杯性：</strong>適中的掛杯，顯示酒精度與糖分平衡</p></div></div></div><div class="sense aroma"><h6>香氣複雜度</h6><div class="aroma-analysis"><div class="aroma-category primary"><h7>主要果香</h7><div class="fruit-profile"><div class="red-fruits"><strong>紅色水果：</strong>覆盆子、櫻桃、草莓</div><div class="black-fruits"><strong>黑色水果：</strong>黑醋栗、黑莓、黑櫻桃</div><div class="fruit-characteristics"><strong>果香特點：</strong>純淨、優雅、層次豐富</div></div></div><div class="aroma-category floral"><h7>花香特徵 (Margaux標誌)</h7><div class="floral-profile"><div class="signature-florals"><strong>紫羅蘭：</strong>Margaux最具代表性的花香</div><div class="rose-notes"><strong>玫瑰花瓣：</strong>精緻優雅的花香調</div><div class="spring-flowers"><strong>春花香氣：</strong>鈴蘭、紫丁香、茉莉</div><div class="floral-intensity"><strong>花香強度：</strong>明顯但不過分，與果香完美平衡</div></div></div><div class="aroma-category herbal-spice"><h7>草本與香料</h7><div class="herbal-spice-profile"><div class="herbs"><strong>草本植物：</strong>薄荷、迷迭香、月桂葉</div><div class="spices"><strong>香料調：</strong>胡椒、丁香、肉桂</div><div class="mineral"><strong>礦物質：</strong>石墨、濕石頭、鐵質</div></div></div><div class="aroma-category oak-aging"><h7>橡木桶香氣</h7><div class="oak-profile"><div class="vanilla-notes"><strong>香草調：</strong>細膩的香草豆、奶油香</div><div class="toast-notes"><strong>烘烤香：</strong>輕度烤麵包、烤杏仁</div><div class="wood-integration"><strong>整合度：</strong>橡木與果香完美融合，不搶奪風頭</div></div></div></div></div><div class="sense palate"><h6>口感結構</h6><div class="palate-analysis"><div class="texture-body"><h7>質地與酒體</h7><div class="texture-profile"><p><strong>酒體：</strong>中等到飽滿，絲綢般順滑</p><p><strong>質地：</strong>細緻精致，如天鵝絨般柔順</p><p><strong>密度：</strong>適中濃度，優雅而不厚重</p><p><strong>平衡感：</strong>所有元素和諧統一</p></div></div><div class="tannin-structure"><h7>單寧結構</h7><div class="tannin-profile"><p><strong>年輕期：</strong>單寧明顯但精緻，不粗糙</p><p><strong>發展期：</strong>單寧逐漸柔化，絲滑感增強</p><p><strong>成熟期：</strong>單寧完全整合，如絲綢般順滑</p><p><strong>質量：</strong>高品質單寧，細膩而有結構</p></div></div><div class="acidity-freshness"><h7>酸度與清新感</h7><div class="acidity-profile"><p><strong>酸度水平：</strong>中等到中高，提供骨架</p><p><strong>酸度類型：</strong>清新而不尖銳</p><p><strong>平衡作用：</strong>與果甜味完美平衡</p><p><strong>陳年影響：</strong>維持酒款活力與新鮮感</p></div></div><div class="finish-length"><h7>餘韻長度</h7><div class="finish-profile"><p><strong>長度：</strong>悠長持久，通常45-60秒</p><p><strong>變化：</strong>餘韻中香氣層次不斷變化</p><p><strong>印象：</strong>優雅而復雜的結尾</p><p><strong>記憶點：</strong>留下深刻的花香與礦物質印象</p></div></div></div></div></div></div><div class="profile-aspect evolution"><h5>⏳ 陳年發展軌跡</h5><div class="aging-evolution"><div class="evolution-stage young"><h6>年輕階段 (0-3年)</h6><div class="stage-characteristics"><div class="aroma-evolution"><strong>香氣：</strong>果香主導，花香初現</div><div class="palate-evolution"><strong>口感：</strong>單寧較明顯，需要醒酒</div><div class="drinking-advice"><strong>建議：</strong>可以品嚐，但未達最佳狀態</div></div></div><div class="evolution-stage adolescent"><h6>青春期 (3-8年)</h6><div class="stage-characteristics"><div class="aroma-evolution"><strong>香氣：</strong>花香更加明顯，複雜度增加</div><div class="palate-evolution"><strong>口感：</strong>單寧開始柔化，平衡性改善</div><div class="drinking-advice"><strong>建議：</strong>開始展現真正潛力</div></div></div><div class="evolution-stage mature"><h6>成熟期 (8-20年)</h6><div class="stage-characteristics"><div class="aroma-evolution"><strong>香氣：</strong>達到最佳複雜度，花香與陳年香氣平衡</div><div class="palate-evolution"><strong>口感：</strong>絲滑柔順，所有元素完美整合</div><div class="drinking-advice"><strong>建議：</strong>最佳飲用期，展現完整風貌</div></div></div><div class="evolution-stage peak"><h6>巔峰期 (20-40年)</h6><div class="stage-characteristics"><div class="aroma-evolution"><strong>香氣：</strong>陳年香氣主導，保持優雅特質</div><div class="palate-evolution"><strong>口感：</strong>達到完美平衡，展現最高藝術水準</div><div class="drinking-advice"><strong>建議：</strong>偉大年份的巔峰表現期</div></div></div></div></div></div></div><div class="style-section tasting-guide"><h4>🍷 專業品鑒指南</h4><div class="tasting-methodology"><div class="tasting-preparation"><h5>🫖 品鑒準備</h5><div class="preparation-steps"><div class="step temperature"><h6>適飲溫度</h6><div class="temperature-guide"><p><strong>年輕Margaux：</strong>16-18°C</p><p><strong>成熟Margaux：</strong>18-20°C</p><p><strong>陳年Margaux：</strong>20-22°C</p><div class="temperature-tips"><strong>溫度控制要點：</strong><ul><li>避免過冷，影響香氣釋放</li><li>避免過熱，酒精感過重</li><li>逐漸升溫，觀察香氣變化</li></ul></div></div></div><div class="step decanting"><h6>醒酒建議</h6><div class="decanting-guide"><div class="young-wines"><strong>年輕酒款 (0-10年)：</strong>醒酒1-2小時</div><div class="mature-wines"><strong>成熟酒款 (10-20年)：</strong>醒酒30-60分鐘</div><div class="old-wines"><strong>陳年酒款 (20年+)：</strong>小心醒酒，15-30分鐘</div><div class="decanting-tips"><strong>醒酒要點：</strong><ul><li>使用專業醒酒器</li><li>避免過度氧化</li><li>觀察沉澱物處理</li></ul></div></div></div><div class="step glassware"><h6>酒杯選擇</h6><div class="glassware-guide"><p><strong>推薦酒杯：</strong>波爾多型紅酒杯</p><p><strong>杯型特點：</strong>較大杯肚，收口適中</p><p><strong>容量：</strong>600-750ml容量</p><div class="glassware-tips"><strong>使用要點：</strong><ul><li>倒酒量不超過1/3</li><li>充分搖杯釋放香氣</li><li>避免手溫影響酒溫</li></ul></div></div></div></div></div><div class="tasting-sequence"><h5>👁️ 品鑒步驟</h5><div class="tasting-steps"><div class="step visual"><h6>1. 視覺觀察</h6><div class="visual-checklist"><ul><li>觀察顏色深度與透明度</li><li>檢查邊緣顏色變化</li><li>評估掛杯情況</li><li>注意是否有沉澱</li></ul></div></div><div class="step aroma"><h6>2. 香氣分析</h6><div class="aroma-checklist"><ul><li>初聞：不搖杯的直接香氣</li><li>輕搖：輕度搖杯後的香氣</li><li>重搖：充分搖杯後的複雜香氣</li><li>識別：花香、果香、橡木、礦物</li></ul></div></div><div class="step taste"><h6>3. 口感品評</h6><div class="taste-checklist"><ul><li>入口印象：第一口的感受</li><li>中段發展：口感的變化過程</li><li>結構分析：酸度、單寧、酒體</li><li>餘韻評估：持續時間與複雜度</li></ul></div></div><div class="step conclusion"><h6>4. 整體評價</h6><div class="evaluation-checklist"><ul><li>平衡性：各元素是否和諧</li><li>複雜度：層次是否豐富</li><li>典型性：是否符合Margaux風格</li><li>品質等級：整體品質評估</li></ul></div></div></div></div></div></div><div class="style-section food-pairing"><h4>🍽️ 餐酒搭配藝術</h4><div class="pairing-philosophy"><h5>🎨 搭配哲學</h5><div class="pairing-principles"><div class="principle elegance"><h6>優雅匹配原則</h6><p><strong>核心理念：</strong>Margaux的優雅風格需要精緻料理相配</p><p><strong>避免過重：</strong>避免過於厚重或濃烈的料理</p><p><strong>突出花香：</strong>選擇能夠突出花香特質的搭配</p></div><div class="principle balance"><h6>平衡協調原則</h6><p><strong>強度匹配：</strong>料理強度與酒款強度相匹配</p><p><strong>質感協調：</strong>食物質感與酒款質感協調</p><p><strong>風味增強：</strong>相互增強彼此的最佳特質</p></div></div></div><div class="pairing-categories"><h5>🥩 經典搭配組合</h5><div class="pairing-groups"><div class="group meat"><h6>肉類料理</h6><div class="pairing-options"><div class="option lamb"><strong>羊肉料理：</strong><p>香草烤羊排：迷迭香增強Margaux的草本香氣</p><p>紅酒燉羊腿：經典法式搭配，相得益彰</p></div><div class="option beef"><strong>牛肉料理：</strong><p>菲力牛排：精緻牛肉配精緻酒款</p><p>牛肉塔塔：生牛肉的鮮美與酒的優雅</p></div><div class="option game"><strong>野味料理：</strong><p>鹿肉料理：野味的複雜度匹配酒的層次</p><p>野豬料理：豐富口感配合陳年Margaux</p></div></div></div><div class="group cheese"><h6>乳酪搭配</h6><div class="pairing-options"><div class="option hard-cheese"><strong>硬質乳酪：</strong><p>康堤乳酪：堅果香與酒的複雜度互補</p><p>帕馬森乳酪：鹹香平衡酒的甜美果香</p></div><div class="option soft-cheese"><strong>軟質乳酪：</strong><p>卡芒貝爾：奶香與花香的優雅結合</p><p>布里乳酪：細膩質感與酒款質感匹配</p></div></div></div><div class="group vegetables"><h6>蔬菜料理</h6><div class="pairing-options"><div class="option mushrooms"><strong>菌菇料理：</strong><p>松露料理：土壤氣息增強礦物感</p><p>野菌燉煮：豐富的umami味配合複雜度</p></div><div class="option roasted"><strong>烤蔬菜：</strong><p>烤茄子：煙燻味配合橡木桶香氣</p><p>烤紅椒：甜美平衡酒的單寧</p></div></div></div></div></div><div class="pairing-avoid"><h5>❌ 避免搭配</h5><div class="avoid-list"><div class="avoid-item spicy"><strong>過辣料理：</strong>會掩蓋Margaux的細膩花香</div><div class="avoid-item sweet"><strong>過甜食物：</strong>與酒的乾爽風格衝突</div><div class="avoid-item heavy"><strong>過於厚重：</strong>會壓制酒款的優雅特質</div><div class="avoid-item acidic"><strong>高酸食物：</strong>會與酒的酸度產生不和諧</div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: 'Margaux產區最具代表性的香氣特徵是什麼？',
          options: ['煙草香氣', '紫羅蘭花香', '咖啡香氣', '蜂蜜香氣'], 
          correct: 1,
          explanation: 'Margaux產區最具代表性的是紫羅蘭花香，這也是為什麼Margaux被稱為"葡萄酒中的香水"的原因。這種優雅的花香與其他果香和橡木香氣完美平衡。'
        }
      }
    ]
  } else if (props.lessonId === 'l2-1') {
    return [
      { type: 'title' },
      {
        title: 'Médoc半島地理與風土特徵',
        highlights: [
          { id: 1, icon: '🗺️', title: '獨特地理', content: 'Médoc半島延伸60公里，擁有獨特的砂礫台地' },
          { id: 2, icon: '🌊', title: '河流影響', content: 'Gironde河與大西洋的雙重氣候調節作用' }
        ],
        content: '<div class="medoc-geography"><p class="lead-text">Médoc半島是波爾多左岸最重要的產區，以出產世界頂級紅酒而聞名於世。</p><div class="geography-analysis"><div class="geo-section peninsula-overview"><h4>🗺️ Médoc半島地理位置</h4><div class="peninsula-layout"><div class="location-details"><div class="location-card strategic"><h5>🎯 戰略位置</h5><div class="location-content"><p><strong>地理座標：</strong>位於波爾多市西北方，Gironde河左岸</p><p><strong>半島長度：</strong>從波爾多市延伸至大西洋約60公里</p><p><strong>最大寬度：</strong>東西向約15公里的狹長地帶</p><div class="strategic-advantages"><h6>地理優勢</h6><ul><li><strong>河流保護：</strong>Gironde河提供天然防風屏障</li><li><strong>海洋調節：</strong>大西洋帶來溫和濕潤氣候</li><li><strong>排水良好：</strong>砂礫土壤確保優異的排水性</li><li><strong>日照充足：</strong>朝東南向的緩坡獲得充足陽光</li></ul></div></div></div><div class="location-card boundaries"><h5>🔲 產區邊界劃分</h5><div class="boundary-details"><div class="boundary-north"><h6>北部邊界</h6><p>延伸至Saint-Vivien-de-Médoc，接近大西洋海岸</p></div><div class="boundary-south"><h6>南部邊界</h6><p>從波爾多市區開始，與Haut-Médoc產區銜接</p></div><div class="boundary-east"><h6>東側邊界</h6><p>沿Gironde河岸，享受河流氣候調節</p></div><div class="boundary-west"><h6>西側邊界</h6><p>深入內陸，與Entre-Deux-Mers產區相鄰</p></div></div></div><div class="location-card elevations"><h5>📏 地形高度變化</h5><div class="elevation-profile"><div class="elevation-zone high"><h6>高台地區 (20-40m)</h6><p>位於內陸地帶，排水最佳，適合種植Cabernet Sauvignon</p></div><div class="elevation-zone medium"><h6>中台地區 (10-20m)</h6><p>大部分著名酒莊所在地，土壤結構多樣</p></div><div class="elevation-zone low"><h6>低台地區 (5-10m)</h6><p>靠近河岸地帶，土壤較為濕潤</p></div></div></div></div></div></div><div class="geo-section soil-analysis"><h4>🪨 土壤組成與地質結構</h4><div class="soil-composition"><div class="soil-layers"><h5>📊 土壤分層結構</h5><div class="layer-analysis"><div class="soil-layer surface"><h6>表土層 (0-30cm)</h6><div class="layer-details"><p><strong>主要成分：</strong>細砂、粉土與少量黏土</p><p><strong>特殊性質：</strong>保水性適中，透氣性良好</p><p><strong>顏色特徵：</strong>淺棕色至灰棕色</p><ul><li>有機質含量：2-4%</li><li>pH值：6.0-7.0（微酸至中性）</li><li>排水速度：中等至快速</li></ul></div></div><div class="soil-layer gravel"><h6>砂礫層 (30-100cm)</h6><div class="layer-details"><p><strong>核心特徵：</strong>Médoc產區的標誌性土壤</p><p><strong>組成成分：</strong>石英砂礫、鵝卵石、粗砂</p><p><strong>關鍵作用：</strong>優異排水與熱能儲存</p><ul><li>砂礫大小：直徑2-20mm不等</li><li>熱反射效應：白天吸熱，夜間放熱</li><li>根系穿透：促進葡萄根系深扎</li></ul></div></div><div class="soil-layer subsoil"><h6>底土層 (100cm以下)</h6><div class="layer-details"><p><strong>地質基礎：</strong>古老的河流沖積層</p><p><strong>礦物組成：</strong>石灰岩、鐵質土壤</p><p><strong>水分調節：</strong>深層保水，乾旱時供應水分</p><ul><li>礦物質豐富：鐵、鈣、鎂含量高</li><li>pH緩衝：穩定土壤酸鹼度</li><li>根系空間：為深根提供生長空間</li></ul></div></div></div></div><div class="soil-types"><h5>🎯 不同區域土壤特色</h5><div class="regional-soils"><div class="soil-region margaux-area"><h6>Margaux地區土壤</h6><p><strong>特徵：</strong>細砂礫為主，排水極佳</p><div class="soil-benefits"><ul><li>促進早熟：砂質土壤升溫快</li><li>優雅風格：應力環境塑造細膩口感</li><li>香氣複雜：礦物質增加風味層次</li></ul></div></div><div class="soil-region pauillac-area"><h6>Pauillac地區土壤</h6><p><strong>特徵：</strong>深厚砂礫，石英含量高</p><div class="soil-benefits"><ul><li>結構強勁：深層根系吸收礦物質</li><li>陳年潛力：土壤應力延長成熟期</li><li>經典風格：Cabernet Sauvignon表現卓越</li></ul></div></div><div class="soil-region saint-julien-area"><h6>Saint-Julien地區土壤</h6><p><strong>特徵：</strong>砂礫與黏土平衡組合</p><div class="soil-benefits"><ul><li>平衡風格：保水與排水並重</li><li>穩定品質：土壤條件一致性高</li><li>和諧口感：多品種完美融合</li></ul></div></div><div class="soil-region saint-estephe-area"><h6>Saint-Estèphe地區土壤</h6><p><strong>特徵：</strong>黏土含量較高，保水性強</p><div class="soil-benefits"><ul><li>晚熟特性：黏土延緩成熟時間</li><li>濃郁風格：深色水果風味突出</li><li>陳年能力：單寧結構紮實耐久</li></ul></div></div></div></div></div></div><div class="geo-section climate-influence"><h4>🌤️ 氣候環境與微氣候</h4><div class="climate-systems"><div class="macro-climate"><h5>🌍 宏觀氣候特徵</h5><div class="climate-factors"><div class="factor oceanic"><h6>海洋性氣候主導</h6><div class="climate-details"><p><strong>溫度調節：</strong>大西洋暖流維持溫和氣溫</p><ul><li>年均溫度：13-14°C</li><li>生長季溫度：18-22°C</li><li>溫差變化：日夜溫差適中（8-12°C）</li><li>霜凍風險：春季霜凍機率較低</li></ul></div></div><div class="factor precipitation"><h6>降雨模式</h6><div class="climate-details"><p><strong>年降雨量：</strong>800-900mm，分布較均勻</p><ul><li>春季降雨：促進萌芽與新梢生長</li><li>夏季乾燥：7-8月相對乾燥有利成熟</li><li>秋季適量：採收期降雨適中</li><li>冬季休眠：充足水分補充土壤</li></ul></div></div><div class="factor winds"><h6>風向與風力</h6><div class="climate-details"><p><strong>主導風向：</strong>西南風與西北風交替</p><ul><li>西南暖風：帶來溫暖濕潤空氣</li><li>西北涼風：降低濕度，減少病害</li><li>Gironde河風：夜間涼風促進香氣聚集</li><li>通風良好：減少真菌病害風險</li></ul></div></div></div></div><div class="micro-climate"><h5>🎯 微氣候差異分析</h5><div class="microclimate-variations"><div class="variation riverside"><h6>河岸地帶微氣候</h6><p><strong>特徵：</strong>溫度緩衝效應最明顯</p><div class="microclimate-effects"><ul><li><strong>溫度穩定：</strong>河水調節日夜溫差</li><li><strong>濕度適中：</strong>河流蒸發提供適量水氣</li><li><strong>霜凍保護：</strong>水體熱容量大，防霜效果佳</li><li><strong>成熟延長：</strong>溫和環境延長成熟期</li></ul></div></div><div class="variation inland"><h6>內陸高台微氣候</h6><p><strong>特徵：</strong>排水極佳，日照充足</p><div class="microclimate-effects"><ul><li><strong>升溫快速：</strong>砂礫土快速吸收熱能</li><li><strong>應力環境：</strong>根系深扎尋找水源</li><li><strong>香氣濃縮：</strong>適度水分應力增強風味</li><li><strong>早熟傾向：</strong>溫度較高促進早熟</li></ul></div></div><div class="variation forest-edge"><h6>林緣地帶微氣候</h6><p><strong>特徵：</strong>受森林保護，微環境穩定</p><div class="microclimate-effects"><ul><li><strong>風力緩解：</strong>森林屏障減少強風</li><li><strong>濕度保持：</strong>林地蒸散維持濕度</li><li><strong>溫度緩衝：</strong>森林調節極端溫度</li><li><strong>生態平衡：</strong>天敵昆蟲控制害蟲</li></ul></div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'LeftBank-Medoc',
        quiz: {
          question: 'Médoc半島土壤的核心特徵是什麼？',
          options: ['黏土為主', '砂礫層發達', '石灰岩基岩', '火山土壤'], 
          correct: 1,
          explanation: 'Médoc半島的標誌性土壤特徵是發達的砂礫層，這種土壤提供優異的排水性和熱能儲存能力，是該產區能夠出產頂級紅酒的關鍵因素。'
        }
      },
      {
        title: '1855年分級制度與頂級酒莊',
        highlights: [
          { id: 1, icon: '👑', title: '歷史分級', content: '1855年巴黎世博會建立的權威分級制度' },
          { id: 2, icon: '🏆', title: '五級體系', content: '從一級酒莊到五級酒莊的完整階層' }
        ],
        content: '<div class="classification-system"><p class="lead-text">1855年分級制度是波爾多葡萄酒品質認證的黃金標準，至今仍是全球最權威的酒莊分級系統。</p><div class="classification-analysis"><div class="classification-section history"><h4>📜 1855年分級制度的歷史背景</h4><div class="historical-context"><div class="context-card origin"><h5>🎯 分級起源與目的</h5><div class="origin-details"><div class="background-story"><h6>歷史契機</h6><p>1855年巴黎世界博覽會，拿破崙三世要求波爾多商會為參展酒款建立品質分級，以展現法國葡萄酒的卓越品質。</p></div><div class="selection-criteria"><h6>分級標準</h6><p><strong>主要依據：</strong>酒款市場價格與聲譽</p><ul><li><strong>價格水準：</strong>長期市場表現反映品質</li><li><strong>歷史聲譽：</strong>酒莊數百年來的聲望</li><li><strong>風土條件：</strong>葡萄園的地理位置與土壤</li><li><strong>釀酒工藝：</strong>傳統的釀造技術與理念</li></ul></div><div class="geographic-scope"><h6>涵蓋範圍</h6><p>主要針對Médoc產區（包含Haut-Médoc）的紅酒酒莊，以及Sauternes和Barsac的甜酒酒莊。</p></div></div></div><div class="context-card significance"><h5>⚖️ 分級制度的重要意義</h5><div class="significance-aspects"><div class="aspect quality"><h6>品質保證</h6><p>建立了客觀的品質評估標準，為消費者提供可靠的選酒指南。</p></div><div class="aspect market"><h6>市場秩序</h6><p>規範了葡萄酒市場的價格體系，形成了穩定的品質—價格對應關係。</p></div><div class="aspect heritage"><h6>文化傳承</h6><p>保護和傳承了波爾多葡萄酒的釀造傳統與文化價值。</p></div><div class="aspect international"><h6>國際影響</h6><p>成為全世界葡萄酒分級制度的典範，影響了其他產區的分級方式。</p></div></div></div></div></div><div class="classification-section grades"><h4>🏆 五級分級體系詳解</h4><div class="grade-system"><div class="grade-tier first-growth"><div class="tier-header"><h5>👑 一級酒莊 (Premiers Grands Crus Classés)</h5><div class="tier-stats"><span class="count">5家</span><span class="percentage">0.3%</span></div></div><div class="tier-content"><div class="estates-list"><div class="estate-card lafite"><div class="estate-info"><h6>🏰 Château Lafite Rothschild</h6><div class="estate-details"><p><strong>位置：</strong>Pauillac AOC</p><p><strong>面積：</strong>112公頃</p><p><strong>特色：</strong>優雅精緻，陳年潛力極佳</p><div class="signature-style"><strong>風格特徵：</strong>細膩香氣，絲滑口感，完美平衡</div></div></div></div><div class="estate-card margaux"><div class="estate-info"><h6>🏰 Château Margaux</h6><div class="estate-details"><p><strong>位置：</strong>Margaux AOC</p><p><strong>面積：</strong>82公頃</p><p><strong>特色：</strong>女性化風格，香氣複雜</p><div class="signature-style"><strong>風格特徵：</strong>花香突出，優雅細膩，餘韻悠長</div></div></div></div><div class="estate-card latour"><div class="estate-info"><h6>🏰 Château Latour</h6><div class="estate-details"><p><strong>位置：</strong>Pauillac AOC</p><p><strong>面積：</strong>78公頃</p><p><strong>特色：</strong>結構強勁，陳年能力最佳</p><div class="signature-style"><strong>風格特徵：</strong>濃郁厚重，單寧紮實，王者風範</div></div></div></div><div class="estate-card haut-brion"><div class="estate-info"><h6>🏰 Château Haut-Brion</h6><div class="estate-details"><p><strong>位置：</strong>Pessac-Léognan AOC</p><p><strong>面積：</strong>51公頃</p><p><strong>特色：</strong>Graves唯一一級酒莊</p><div class="signature-style"><strong>風格特徵：</strong>煙燻礦物，複雜層次，獨特風土</div></div></div></div><div class="estate-card mouton"><div class="estate-info"><h6>🏰 Château Mouton Rothschild</h6><div class="estate-details"><p><strong>位置：</strong>Pauillac AOC</p><p><strong>面積：</strong>84公頃</p><p><strong>特色：</strong>1973年升級的傳奇酒莊</p><div class="signature-style"><strong>風格特徵：</strong>濃郁奔放，藝術氣息，創新精神</div></div></div></div></div><div class="tier-characteristics"><h6>一級酒莊共同特徵</h6><ul><li><strong>頂級風土：</strong>最優秀的葡萄園位置</li><li><strong>完美工藝：</strong>傳統與現代技術的結合</li><li><strong>陳年潛力：</strong>50-100年的超長陳年能力</li><li><strong>稀缺性：</strong>產量有限，全球收藏家追捧</li><li><strong>投資價值：</strong>長期穩定的增值潛力</li></ul></div></div></div><div class="grade-tier second-growth"><div class="tier-header"><h5>🥈 二級酒莊 (Deuxièmes Grands Crus Classés)</h5><div class="tier-stats"><span class="count">14家</span><span class="percentage">0.9%</span></div></div><div class="tier-content"><div class="notable-estates"><h6>著名二級酒莊代表</h6><div class="second-growth-examples"><div class="estate-example cos-destournel"><strong>Château Cos d\'Estournel (Saint-Estèphe)：</strong>東方宮殿風格建築，風格優雅，被譽為"超二級"水準</div><div class="estate-example ducru-beaucaillou"><strong>Château Ducru-Beaucaillou (Saint-Julien)：</strong>風格平衡，一致性極佳，Saint-Julien的典型代表</div><div class="estate-example pichon-baron"><strong>Château Pichon Baron (Pauillac)：</strong>現代化管理典範，品質迅速提升</div><div class="estate-example leoville-las-cases"><strong>Château Léoville Las Cases (Saint-Julien)：</strong>被稱為"最接近一級的二級酒莊"</div></div></div><div class="tier-characteristics"><h6>二級酒莊特徵</h6><ul><li><strong>卓越品質：</strong>品質水準非常接近一級酒莊</li><li><strong>相對價值：</strong>性價比在頂級酒款中較優</li><li><strong>收藏潛力：</strong>具備良好的投資收藏價值</li><li><strong>風格多樣：</strong>展現不同村莊的風土特色</li></ul></div></div></div><div class="grade-tier third-fourth-fifth"><div class="tier-header"><h5>🥉 三、四、五級酒莊</h5><div class="tier-stats"><span class="count">三級14家、四級10家、五級18家</span></div></div><div class="tier-content"><div class="lower-tiers-overview"><div class="tier-group third"><h6>三級酒莊 (14家)</h6><p><strong>代表酒莊：</strong>Château Palmer, Château Calon-Ségur, Château Lagrange</p><p><strong>特徵：</strong>品質穩定，具有明確的產區特色</p></div><div class="tier-group fourth"><h6>四級酒莊 (10家)</h6><p><strong>代表酒莊：</strong>Château Talbot, Château Lafon-Rochet, Château Beychevelle</p><p><strong>特徵：</strong>品質良好，是了解Médoc風格的優秀選擇</p></div><div class="tier-group fifth"><h6>五級酒莊 (18家)</h6><p><strong>代表酒莊：</strong>Château Lynch-Bages, Château Grand-Puy-Lacoste</p><p><strong>特徵：</strong>入門級分級酒莊，性價比突出</p></div></div></div></div></div></div><div class="classification-section modern-relevance"><h4>🔄 現代意義與市場影響</h4><div class="modern-impact"><div class="impact-area market-pricing"><h5>💰 市場定價影響</h5><div class="pricing-effects"><div class="price-tier premium"><h6>一級酒莊價格</h6><p>每瓶售價通常在€300-2000之間，頂級年份可達€5000以上</p></div><div class="price-tier high"><h6>二級酒莊價格</h6><p>每瓶售價€100-500，提供更好的性價比選擇</p></div><div class="price-tier accessible"><h6>三到五級價格</h6><p>每瓶售價€30-200，是體驗分級酒莊品質的入門選擇</p></div></div></div><div class="impact-area investment"><h5>📈 投資收藏價值</h5><div class="investment-aspects"><div class="investment-factor rarity"><h6>稀缺性價值</h6><p>分級酒莊產量有限，特別是一、二級酒莊，供需不平衡推高價值</p></div><div class="investment-factor track-record"><h6>歷史表現</h6><p>長期市場數據顯示，分級酒莊具有穩定的保值增值能力</p></div><div class="investment-factor global-recognition"><h6>國際認知</h6><p>全球收藏家和投資者的共同認可，確保流通性</p></div></div></div><div class="impact-area quality-evolution"><h5>📊 品質演變趨勢</h5><div class="quality-trends"><div class="trend improvement"><h6>整體品質提升</h6><p>現代釀酒技術和管理方式的進步，使分級酒莊品質整體提升</p></div><div class="trend consistency"><h6>一致性增強</h6><p>溫控發酵、精密篩選等技術降低了年份差異</p></div><div class="trend innovation"><h6>創新與傳統平衡</h6><p>在保持傳統風格的同時，引入現代科學管理</p></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'medoc-estates',
        quiz: {
          question: '1855年分級制度中，有幾家一級酒莊？',
          options: ['3家', '4家', '5家', '6家'], 
          correct: 2,
          explanation: '1855年分級制度確立了5家一級酒莊：Lafite Rothschild、Margaux、Latour、Haut-Brion和Mouton Rothschild（1973年從二級升為一級）。'
        }
      },
      {
        title: 'Médoc釀酒工藝與風格特色',
        highlights: [
          { id: 1, icon: '🍇', title: '傳統工藝', content: '結合傳統釀造技術與現代科學管理' },
          { id: 2, icon: '🏺', title: '陳年潛力', content: '世界頂級的長期陳年能力與複雜度發展' }
        ],
        content: '<div class="medoc-winemaking"><p class="lead-text">Médoc產區的釀酒工藝代表了波爾多傳統與創新的完美結合，造就了世界最頂級的紅酒。</p><div class="winemaking-analysis"><div class="winemaking-section grape-varieties"><h4>🍇 葡萄品種組合與調配哲學</h4><div class="varietal-composition"><div class="blend-philosophy"><h5>🎯 Médoc調配傳統</h5><div class="blending-approach"><div class="blend-card primary"><h6>主導品種策略</h6><div class="primary-varieties"><div class="variety cabernet-sauvignon"><h7>Cabernet Sauvignon (50-70%)</h7><div class="variety-role"><p><strong>核心作用：</strong>提供結構、單寧與陳年潛力</p><ul><li><strong>香氣特徵：</strong>黑醋栗、雪松、鉛筆芯</li><li><strong>口感貢獻：</strong>強勁單寧，厚實酒體</li><li><strong>陳年表現：</strong>隨時間發展出複雜香氣</li><li><strong>土壤適應：</strong>在砂礫土上表現最佳</li></ul></div></div><div class="variety merlot"><h7>Merlot (20-40%)</h7><div class="variety-role"><p><strong>調和功能：</strong>增加柔順度與早期適飲性</p><ul><li><strong>香氣特徵：</strong>櫻桃、李子、巧克力</li><li><strong>口感貢獻：</strong>圓潤口感，柔化單寧</li><li><strong>成熟特性：</strong>較早成熟，降低採收風險</li><li><strong>平衡作用：</strong>平衡Cabernet Sauvignon的強勁</li></ul></div></div></div></div><div class="blend-card supporting"><h6>輔助品種角色</h6><div class="supporting-varieties"><div class="variety cabernet-franc"><h7>Cabernet Franc (5-15%)</h7><div class="variety-contribution"><p><strong>特殊貢獻：</strong>增加複雜度與香氣層次</p><ul><li><strong>香氣增強：</strong>草本、香料、紫羅蘭</li><li><strong>結構補充：</strong>提供中段口感支撐</li><li><strong>風土表達：</strong>最能反映產區特色</li></ul></div></div><div class="variety petit-verdot"><h7>Petit Verdot (0-5%)</h7><div class="variety-contribution"><p><strong>精準調味：</strong>少量使用，影響顯著</p><ul><li><strong>顏色加深：</strong>增強酒液顏色深度</li><li><strong>香料風味：</strong>胡椒、丁香香氣</li><li><strong>結構強化：</strong>增加酒體厚度</li></ul></div></div><div class="variety malbec"><h7>Malbec (0-3%)</h7><div class="variety-contribution"><p><strong>歷史角色：</strong>傳統品種，現在較少使用</p><ul><li><strong>顏色貢獻：</strong>深色著色品種</li><li><strong>風味補充：</strong>野性風味特徵</li><li><strong>文化意義：</strong>維持傳統調配</li></ul></div></div></div></div></div><div class="vintage-variations"><h5>📊 年份調配變化</h5><div class="yearly-adjustments"><div class="adjustment-factor weather"><h6>氣候適應性調配</h6><div class="weather-adaptations"><div class="adaptation hot-year"><strong>炎熱年份調配：</strong>增加Merlot比例，保持平衡與清新度</div><div class="adaptation cool-year"><strong>涼爽年份調配：</strong>提高Cabernet Sauvignon比例，確保結構與複雜度</div><div class="adaptation wet-year"><strong>多雨年份調配：</strong>精選最健康葡萄，可能降低某些品種比例</div></div></div><div class="adjustment-factor maturity"><h6>成熟度平衡調配</h6><div class="maturity-balance"><p>釀酒師根據各品種的成熟狀況，動態調整最終調配比例，確保每個年份都能表現出最佳品質。</p></div></div></div></div></div></div><div class="winemaking-section vinification"><h4>🏭 釀造工藝流程</h4><div class="production-process"><div class="process-stage harvest"><h5>🍇 採收與篩選</h5><div class="harvest-practices"><div class="harvest-timing"><h6>採收時機掌握</h6><div class="timing-factors"><ul><li><strong>糖度監測：</strong>22-25 Brix的最佳糖度</li><li><strong>酸度平衡：</strong>保持足夠酸度維持平衡</li><li><strong>單寧成熟：</strong>確保單寧完全成熟</li><li><strong>天氣窗口：</strong>選擇最佳天氣條件</li></ul></div></div><div class="selection-process"><h6>嚴格篩選制度</h6><div class="selection-levels"><div class="selection-level vineyard"><strong>葡萄園篩選：</strong>採收時人工挑選最佳果串</div><div class="selection-level optical"><strong>光學篩選：</strong>使用現代光學設備篩選</div><div class="selection-level manual"><strong>人工精選：</strong>釀酒台上逐粒檢查</div></div></div></div></div><div class="process-stage fermentation"><h5>🧪 發酵控制技術</h5><div class="fermentation-management"><div class="temperature-control"><h6>溫度控制系統</h6><div class="temp-phases"><div class="phase pre-fermentation"><strong>冷浸漬 (10-12°C, 3-5天)：</strong>萃取顏色與香氣前驅物質</div><div class="phase alcoholic"><strong>酒精發酵 (26-30°C, 7-12天)：</strong>控制發酵速度與萃取強度</div><div class="phase post-fermentation"><strong>後發酵浸漬 (22-26°C, 10-20天)：</strong>進一步萃取單寧與穩定顏色</div></div></div><div class="extraction-techniques"><h6>萃取技術運用</h6><div class="extraction-methods"><div class="method pumping-over"><strong>淋帽 (Remontage)：</strong>將發酵中的酒液從底部抽出淋在果帽上</div><div class="method punching-down"><strong>壓帽 (Pigeage)：</strong>將浮在表面的果帽壓入酒液中</div><div class="method micro-oxygenation"><strong>微氧化：</strong>控制氧氣接觸，穩定顏色與柔化單寧</div></div></div></div></div><div class="process-stage aging"><h5>🏺 橡木桶陳年工藝</h5><div class="barrel-aging"><div class="barrel-selection"><h6>橡木桶選擇標準</h6><div class="oak-specifications"><div class="oak-origin"><strong>橡木來源：</strong>主要使用法國橡木，部分使用美國橡木</div><div class="oak-forests"><strong>森林選擇：</strong>Vosges、Allier、Nevers等著名橡木林</div><div class="barrel-size"><strong>桶型規格：</strong>225升標準波爾多桶為主</div><div class="toast-level"><strong>烘烤程度：</strong>中度烘烤，平衡香草與香料風味</div></div></div><div class="aging-program"><h6>陳年計劃設計</h6><div class="aging-phases"><div class="phase malolactic"><strong>蘋果酸乳酸發酵：</strong>在橡木桶中進行，增加複雜度</div><div class="phase primary-aging"><strong>主要陳年 (12-18個月)：</strong>在橡木桶中發展風味與結構</div><div class="phase blending"><strong>調配階段：</strong>不同批次與品種的精確調配</div><div class="phase bottle-aging"><strong>瓶中陳年 (1-2年)：</strong>裝瓶前的穩定與整合</div></div></div></div></div></div></div><div class="winemaking-section style-characteristics"><h4>🎯 Médoc風格特徵分析</h4><div class="style-profile"><div class="sensory-analysis"><h5>👃 感官特徵描述</h5><div class="sensory-aspects"><div class="aspect visual"><h6>視覺特徵</h6><div class="visual-traits"><ul><li><strong>顏色深度：</strong>深紫紅色到石榴紅色</li><li><strong>澄清度：</strong>年輕時深沉，陳年後逐漸轉淺</li><li><strong>濃稠度：</strong>酒體飽滿，掛杯明顯</li></ul></div></div><div class="aspect aroma"><h6>香氣複雜度</h6><div class="aroma-profile"><div class="aroma-primary"><strong>主要果香：</strong>黑醋栗、黑莓、櫻桃</div><div class="aroma-secondary"><strong>橡木香氣：</strong>香草、雪松、烘烤香料</div><div class="aroma-tertiary"><strong>陳年香氣：</strong>皮革、煙草、雪茄盒</div><div class="aroma-mineral"><strong>礦物特徵：</strong>鉛筆芯、石墨、濕土</div></div></div><div class="aspect palate"><h6>口感結構</h6><div class="palate-structure"><ul><li><strong>酒體：</strong>飽滿厚重，層次豐富</li><li><strong>單寧：</strong>年輕時強勁，陳年後絲滑</li><li><strong>酸度：</strong>中等至中高，提供平衡</li><li><strong>餘韻：</strong>悠長持久，複雜變化</li></ul></div></div></div></div><div class="aging-potential"><h5>📈 陳年潛力評估</h5><div class="aging-analysis"><div class="aging-phases"><div class="phase youth"><h6>年輕期 (0-5年)</h6><p><strong>特徵：</strong>果香明顯，單寧緊實，需要醒酒</p><p><strong>建議：</strong>可以品嚐，但未達最佳狀態</p></div><div class="phase maturity"><h6>成熟期 (10-20年)</h6><p><strong>特徵：</strong>香氣複雜，單寧柔化，平衡完美</p><p><strong>建議：</strong>大部分酒款的最佳飲用期</p></div><div class="phase peak"><h6>巔峰期 (20-40年)</h6><p><strong>特徵：</strong>達到完美平衡，展現最高複雜度</p><p><strong>建議：</strong>頂級年份的最佳表現期</p></div><div class="phase decline"><h6>衰退期 (40年+)</h6><p><strong>特徵：</strong>果香消退，土壤與陳年香氣主導</p><p><strong>建議：</strong>特殊場合品嚐，感受歷史</p></div></div><div class="storage-recommendations"><h6>储存建議</h6><div class="storage-conditions"><ul><li><strong>溫度：</strong>12-15°C恆溫儲存</li><li><strong>濕度：</strong>70-75%相對濕度</li><li><strong>光線：</strong>避免直射光，使用UV防護</li><li><strong>震動：</strong>避免震動，水平放置</li><li><strong>空氣：</strong>良好通風，避免异味</li></ul></div></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: 'Médoc產區調配中，Cabernet Sauvignon通常占多少比例？',
          options: ['30-50%', '50-70%', '70-90%', '20-40%'], 
          correct: 1,
          explanation: 'Médoc產區的傳統調配中，Cabernet Sauvignon通常占50-70%，是主導品種，提供結構、單寧與陈年潛力，這是該產區紅酒風格的基礎。'
        }
      }
    ]
  } else if (props.lessonId === 'l2-6') {
    return [
      { type: 'title' },
      {
        title: 'Pomerol產區地理特色與獨特邊界',
        highlights: [
          { id: 1, icon: '💎', title: '稀世珍寶', content: 'Pomerol是波爾多最小的精品產區，面積僅800公頃' },
          { id: 2, icon: '🗺️', title: '特殊邊界', content: '沒有正式的AOC邊界標示，以傳統認知劃分' }
        ],
        content: '<div class="pomerol-terroir"><p class="lead-text">Pomerol以其精緻小巧的規模和獨特的地理特徵，成為波爾多最神秘且珍貴的產區。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Pomerol地理位置與規模</h4><div class="geography-overview"><div class="location-details"><div class="location-card size-scale"><h5>📏 產區規模特色</h5><div class="location-content"><p><strong>總面積：</strong>約800公頃，波爾多最小的重要產區</p><p><strong>比較參考：</strong>僅為Margaux產區面積的一半</p><p><strong>葡萄園密度：</strong>幾乎全部土地都種植葡萄，利用率極高</p><div class="scale-advantages"><h6>小規模優勢</h6><ul><li><strong>精品化：</strong>便於精細化管理和品質控制</li><li><strong>稀缺性：</strong>產量稀少造就珍貴價值</li><li><strong>一致性：</strong>風土條件相對統一</li><li><strong>專注度：</strong>酒莊可投入更多精力於品質</li></ul></div></div></div><div class="location-card borders"><h5>🔲 獨特的邊界特徵</h5><div class="border-details"><div class="boundary north"><h6>北接Saint-Émilion</h6><p>與Saint-Émilion產區無明顯地理分界，土壤逐漸過渡</p></div><div class="boundary south"><h6>南臨Isle河</h6><p>Isle河提供天然邊界和微氣候調節</p></div><div class="boundary east"><h6>東連Lalande-de-Pomerol</h6><p>與衛星產區相鄰，風土條件相似</p></div><div class="boundary west"><h6>西鄰Libourne</h6><p>靠近利布爾內市，交通便利</p></div></div></div><div class="location-card elevation"><h5>📊 地形高度分析</h5><div class="elevation-zones"><div class="zone high-plateau"><h6>高原台地 (35-40m)</h6><p>產區最高點，Pétrus等頂級酒莊所在地</p></div><div class="zone mid-level"><h6>中等高度 (25-35m)</h6><p>大部分優質酒莊的葡萄園位置</p></div><div class="zone lower-areas"><h6>較低地帶 (15-25m)</h6><p>靠近河流，受水體調節影響</p></div></div></div></div></div><div class="terroir-section boundary-mystery"><h4>🔍 邊界之謎與產區認知</h4><div class="boundary-analysis"><div class="historical-context"><h5>📜 歷史背景</h5><div class="history-details"><div class="formation-period"><h6>產區形成歷史</h6><p><strong>中世紀起源：</strong>12世紀開始有葡萄種植記錄</p><p><strong>修道院影響：</strong>早期由修道院管理葡萄園</p><p><strong>貴族莊園：</strong>逐漸發展為貴族私人莊園</p></div><div class="boundary-evolution"><h6>邊界演變過程</h6><p><strong>傳統劃分：</strong>基於歷史傳統和土地所有權</p><p><strong>風土認知：</strong>以土壤特徵為主要判斷標準</p><p><strong>市場認同：</strong>商業價值確立了產區聲譽</p></div></div></div><div class="boundary-characteristics"><h5>🎯 邊界特徵分析</h5><div class="characteristic-details"><div class="informal-boundaries"><h6>非正式邊界系統</h6><div class="boundary-features"><p><strong>無官方標示：</strong>沒有正式的AOC邊界標誌</p><p><strong>傳統認知：</strong>基於長期形成的傳統認知</p><p><strong>土壤為界：</strong>以土壤類型變化為主要分界</p><p><strong>酒莊共識：</strong>酒莊之間的共同認知</p></div></div><div class="transition-zones"><h6>過渡區域特徵</h6><div class="transition-features"><p><strong>漸進變化：</strong>土壤特徵逐漸過渡，無明顯分界線</p><p><strong>混合地帶：</strong>部分地塊具有兩個產區的特徵</p><p><strong>爭議地區：</strong>個別地塊的歸屬存在討論</p><p><strong>品質導向：</strong>最終以酒款品質為判斷標準</p></div></div><div class="recognition-system"><h6>產區認知體系</h6><div class="recognition-features"><p><strong>酒莊聲譽：</strong>頂級酒莊確立產區地位</p><p><strong>市場認知：</strong>消費者和投資者的認同</p><p><strong>專業評價：</strong>酒評家和專家的評判</p><p><strong>價格體現：</strong>市場價格反映產區價值</p></div></div></div></div></div></div><div class="terroir-section location-advantages"><h4>🌍 地理位置優勢分析</h4><div class="advantage-analysis"><div class="strategic-position"><h5>🎯 戰略位置優勢</h5><div class="position-benefits"><div class="river-proximity"><h6>河流鄰近效應</h6><div class="river-advantages"><p><strong>Isle河調節：</strong>河流提供溫度和濕度調節</p><ul><li><strong>溫度緩衝：</strong>河水調節日夜溫差</li><li><strong>濕度平衡：</strong>適度濕度有利葡萄生長</li><li><strong>霧氣形成：</strong>早晨霧氣延長成熟期</li><li><strong>微風循環：</strong>河谷風提供自然通風</li></ul></div></div><div class="proximity-benefits"><h6>鄰近產區效應</h6><div class="neighbor-advantages"><p><strong>Saint-Émilion接壤：</strong>共享優質風土條件</p><ul><li><strong>地質連續：</strong>類似的地質結構和土壤</li><li><strong>氣候一致：</strong>相似的微氣候條件</li><li><strong>技術交流：</strong>釀酒技術的相互借鑒</li><li><strong>品質競爭：</strong>良性競爭促進品質提升</li></ul></div></div><div class="urban-access"><h6>城市交通便利</h6><div class="access-advantages"><p><strong>Libourne鄰近：</strong>距離右岸商業中心僅5公里</p><ul><li><strong>物流便利：</strong>運輸和配送便利</li><li><strong>商業活動：</strong>便於商業洽談和推廣</li><li><strong>旅遊便利：</strong>酒莊旅遊交通便捷</li><li><strong>專業服務：</strong>容易獲得專業服務支持</li></ul></div></div></div></div><div class="microclimate-benefits"><h5>🌤️ 微氣候優勢</h5><div class="climate-advantages"><div class="temperature-moderation"><h6>溫度調節機制</h6><div class="temperature-benefits"><p><strong>穩定溫度：</strong>河流和地形共同調節溫度</p><p><strong>避免極端：</strong>減少極端高溫和低溫</p><p><strong>延長生長期：</strong>適宜的溫度延長成熟期</p><p><strong>均勻成熟：</strong>穩定條件促進均勻成熟</p></div></div><div class="precipitation-pattern"><h6>降雨模式優勢</h6><div class="rainfall-benefits"><p><strong>適量降雨：</strong>年降雨量約900毫米，分佈均勻</p><p><strong>排水良好：</strong>高原位置和土壤結構利於排水</p><p><strong>乾燥秋季：</strong>收穫期相對乾燥，品質保證</p><p><strong>霜凍保護：</strong>河流調節減少霜凍風險</p></div></div><div class="wind-protection"><h6>風向保護系統</h6><div class="wind-benefits"><p><strong>天然屏障：</strong>周圍地形提供風向保護</p><p><strong>適度通風：</strong>保持適度通風預防病害</p><p><strong>避免強風：</strong>減少強風對葡萄藤的損害</p><p><strong>微風循環：</strong>溫和微風促進空氣流通</p></div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'RightBank-Libournais-Pomerol',
        quiz: {
          question: 'Pomerol產區的面積大約是多少？',
          options: ['500公頃', '800公頃', '1200公頃', '1500公頃'], 
          correct: 1,
          explanation: 'Pomerol產區面積約800公頃，是波爾多最小的重要產區，僅為Margaux產區面積的一半，這種小規模特徵造就了其精品化和稀缺性。'
        }
      },
      {
        title: 'Pétrus為首的傳奇酒莊陣容',
        highlights: [
          { id: 1, icon: '👑', title: '酒王地位', content: 'Pétrus被譽為波爾多右岸的"酒王"' },
          { id: 2, icon: '💰', title: '投資價值', content: '頂級Pomerol酒款具有極高的收藏和投資價值' }
        ],
        content: '<div class="pomerol-chateaux"><p class="lead-text">Pomerol匯聚了眾多傳奇酒莊，其中Pétrus作為右岸酒王，代表了Merlot的最高成就。</p><div class="chateaux-analysis"><div class="chateau-section petrus"><h4>👑 Château Pétrus - 右岸酒王</h4><div class="chateau-profile"><div class="profile-card legend-status"><h5>🏆 傳奇地位</h5><div class="legend-details"><div class="status-overview"><h6>酒王地位確立</h6><p><strong>歷史聲譽：</strong>被公認為波爾多右岸最偉大的酒莊</p><p><strong>全球認知：</strong>與左岸五大一級莊並列的聲譽</p><p><strong>稀缺程度：</strong>年產量僅約2,500箱，極為稀少</p><p><strong>價格水準：</strong>價格常常超越一級莊，創造拍賣紀錄</p></div><div class="historical-milestones"><h6>重要歷史里程碑</h6><div class="milestone-timeline"><div class="milestone medieval"><strong>18世紀：</strong>莊園建立，開始專注品質</div><div class="milestone loubat"><strong>1945年：</strong>Madame Loubat接管，奠定現代聲譽</div><div class="milestone moueix"><strong>1964年：</strong>Jean-Pierre Moueix家族管理</div><div class="milestone modern"><strong>現代：</strong>確立全球最昂貴葡萄酒地位</div></div></div></div></div><div class="profile-card terroir-excellence"><h5>🌱 風土卓越性</h5><div class="terroir-details"><div class="vineyard-location"><h6>葡萄園位置</h6><p><strong>面積：</strong>11.5公頃，精緻小規模</p><p><strong>位置：</strong>Pomerol高原的最高點</p><p><strong>海拔：</strong>40米，產區制高點</p><p><strong>朝向：</strong>南向緩坡，日照充足</p></div><div class="soil-uniqueness"><h6>土壤獨特性</h6><div class="soil-layers"><div class="topsoil"><strong>表層：</strong>深色黏土，富含鐵質</div><div class="subsoil"><strong>中層：</strong>著名的"藍黏土"(Buttonhole)</div><div class="bedrock"><strong>底層：</strong>不透水黏土層，形成特殊水文</div></div><div class="soil-benefits"><p><strong>藍黏土優勢：</strong></p><ul><li><strong>水分調節：</strong>乾旱期儲水，雨季排水</li><li><strong>溫度穩定：</strong>黏土緩衝溫度變化</li><li><strong>礦物質：</strong>豐富鐵質提供複雜礦物感</li><li><strong>根系限制：</strong>迫使根系深入，增加複雜度</li></ul></div></div><div class="grape-composition"><h6>葡萄品種組成</h6><div class="variety-breakdown"><div class="merlot-dominance"><strong>Merlot：</strong>95%<p>幾乎純Merlot，展現品種極致潛力</p></div><div class="cabernet-franc"><strong>Cabernet Franc：</strong>5%<p>增加複雜度和香氣層次</p></div></div></div></div></div><div class="profile-card winemaking-art"><h5>🍷 釀酒藝術</h5><div class="winemaking-details"><div class="harvest-precision"><h6>採收精準度</h6><div class="harvest-process"><p><strong>採收方式：</strong>完全手工，分批精選</p><p><strong>選擇標準：</strong>只選用最完美的葡萄</p><p><strong>時機把握：</strong>等待最佳成熟度時機</p><p><strong>產量控制：</strong>嚴格控制產量確保濃縮度</p></div></div><div class="fermentation-control"><h6>發酵控制</h6><div class="fermentation-process"><p><strong>發酵容器：</strong>小型混凝土發酵罐</p><p><strong>溫度控制：</strong>精確控溫28-30°C</p><p><strong>浸皮時間：</strong>根據年份調整15-25天</p><p><strong>萃取方式：</strong>溫和萃取保護精緻特質</p></div></div><div class="aging-excellence"><h6>陳年卓越</h6><div class="aging-process"><p><strong>橡木桶：</strong>50%新法國橡木桶</p><p><strong>陳年時間：</strong>22-28個月</p><p><strong>桶型選擇：</strong>精選最優質橡木桶</p><p><strong>調配藝術：</strong>每個地塊分別釀造後調配</p></div></div></div></div><div class="profile-card style-signature"><h5>🎯 風格特徵</h5><div class="style-analysis"><div class="sensory-profile"><div class="appearance"><h6>外觀特徵</h6><p><strong>顏色：</strong>深紫紅色，濃郁深邃</p><p><strong>濃度：</strong>高濃度，掛杯持久</p><p><strong>透明度：</strong>年輕時不透光，陳年後透明</p></div><div class="aroma-complexity"><h6>香氣複雜度</h6><div class="aroma-profile"><div class="fruit-aromas"><strong>果香：</strong>黑櫻桃、黑李子、無花果</div><div class="floral-notes"><strong>花香：</strong>紫羅蘭、玫瑰花瓣</div><div class="earthy-mineral"><strong>土壤礦物：</strong>松露、濕土、鐵質</div><div class="oak-integration"><strong>橡木融合：</strong>香草、摩卡、烘焙香料</div></div></div><div class="palate-structure"><h6>口感結構</h6><div class="palate-elements"><p><strong>酒體：</strong>飽滿厚重，天鵝絨般質感</p><p><strong>單寧：</strong>絲滑細膩，強而不粗</p><p><strong>酸度：</strong>清新平衡，提供骨架</p><p><strong>餘韻：</strong>極長，複雜變化持續數分鐘</p></div></div></div><div class="aging-potential"><h6>陳年潛力</h6><div class="aging-phases"><div class="youth"><strong>年輕期 (0-5年)：</strong>力量感明顯，需要時間</div><div class="development"><strong>發展期 (5-15年)：</strong>逐漸展現複雜度</div><div class="maturity"><strong>成熟期 (15-30年)：</strong>達到完美平衡</div><div class="peak"><strong>巔峰期 (30年+)：</strong>偉大年份可陳年50年以上</div></div></div></div></div></div><div class="chateau-section other-legends"><h4>⭐ 其他傳奇酒莊</h4><div class="legendary-estates"><div class="estate-group top-tier"><h5>頂級梯隊</h5><div class="estate-cards"><div class="estate-card le-pin"><h6>💎 Château Le Pin</h6><div class="estate-profile"><p><strong>面積：</strong>2.7公頃，極度稀少</p><p><strong>特色：</strong>精品中的精品，價格媲美Pétrus</p><p><strong>風格：</strong>濃郁奢華，現代風格</p><p><strong>管理：</strong>Thienpont家族精心管理</p><div class="distinctive-features"><strong>獨特之處：</strong><ul><li>波爾多最小的頂級酒莊之一</li><li>100% Merlot釀造</li><li>車庫酒運動的先驅</li><li>年產量僅約700箱</li></ul></div></div></div><div class="estate-card lafleur"><h6>🌸 Château Lafleur</h6><div class="estate-profile"><p><strong>面積：</strong>4.5公頃</p><p><strong>特色：</strong>傳統風格的典範</p><p><strong>風格：</strong>優雅複雜，長期陳年潛力</p><p><strong>管理：</strong>Guinaudeau家族傳承</p><div class="distinctive-features"><strong>獨特之處：</strong><ul><li>50% Merlot + 50% Cabernet Franc</li><li>保持傳統釀酒工藝</li><li>被低估的投資潛力</li><li>風格最接近Pétrus</li></ul></div></div></div><div class="estate-card trotanoy"><h6>🏰 Château Trotanoy</h6><div class="estate-profile"><p><strong>面積：</strong>7.2公頃</p><p><strong>特色：</strong>Moueix家族旗艦酒莊</p><p><strong>風格：</strong>力量與優雅的結合</p><p><strong>管理：</strong>與Pétrus同一管理團隊</p><div class="distinctive-features"><strong>獨特之處：</strong><ul><li>90% Merlot + 10% Cabernet Franc</li><li>穩定的高品質表現</li><li>相對合理的價格</li><li>優秀的陳年能力</li></ul></div></div></div></div></div><div class="estate-group second-tier"><h5>優秀梯隊</h5><div class="estate-cards"><div class="estate-card evangile"><h6>📿 Château L\'Évangile</h6><div class="estate-profile"><p><strong>面積：</strong>22公頃</p><p><strong>特色：</strong>Rothschild家族投資</p><p><strong>風格：</strong>現代化管理，品質提升</p></div></div><div class="estate-card petit-village"><h6>🏘️ Château Petit-Village</h6><div class="estate-profile"><p><strong>面積：</strong>10.5公頃</p><p><strong>特色：</strong>AXA集團旗下</p><p><strong>風格：</strong>平衡優雅，性價比佳</p></div></div><div class="estate-card vieux-certan"><h6>🍷 Vieux Château Certan</h6><div class="estate-profile"><p><strong>面積：</strong>14公頃</p><p><strong>特色：</strong>歷史悠久，傳統工藝</p><p><strong>風格：</strong>複雜深邃，陳年潛力佳</p></div></div></div></div></div></div><div class="chateau-section investment-value"><h4>💰 投資收藏價值</h4><div class="investment-analysis"><div class="market-position"><h5>📈 市場地位</h5><div class="market-dynamics"><div class="price-leadership"><h6>價格領導地位</h6><div class="price-factors"><p><strong>Pétrus價格：</strong>常年位居波爾多最昂貴酒款之列</p><p><strong>稀缺推動：</strong>極小產量造就稀缺價值</p><p><strong>品質保證：</strong>一貫的高品質維持價格穩定</p><p><strong>收藏熱度：</strong>全球收藏家爭相追捧</p></div></div><div class="investment-performance"><h6>投資表現</h6><div class="performance-metrics"><p><strong>長期增值：</strong>過去20年平均年增值率10-15%</p><p><strong>抗跌能力：</strong>經濟危機中表現相對穩定</p><p><strong>流通性：</strong>二級市場活躍，變現容易</p><p><strong>國際認知：</strong>全球範圍內的高度認知</p></div></div></div></div><div class="collection-value"><h5>🏆 收藏價值</h5><div class="collection-aspects"><div class="rarity-factor"><h6>稀缺性因素</h6><div class="rarity-elements"><p><strong>產量限制：</strong>年產量極少，供需嚴重失衡</p><p><strong>配額分配：</strong>分配體系確保稀缺性</p><p><strong>歷史意義：</strong>代表Merlot的最高成就</p><p><strong>文化價值：</strong>波爾多文化的重要組成部分</p></div></div><div class="vintage-variation"><h6>年份價值差異</h6><div class="vintage-tiers"><div class="legendary-vintages"><strong>傳奇年份：</strong>1947, 1961, 1982, 1989, 2000<p>價格：€8,000-25,000/瓶</p></div><div class="great-vintages"><strong>優秀年份：</strong>1995, 1998, 2005, 2009, 2010<p>價格：€3,000-8,000/瓶</p></div><div class="good-vintages"><strong>良好年份：</strong>近期其他年份<p>價格：€2,000-4,000/瓶</p></div></div></div><div class="market-trends"><h6>市場趨勢</h6><div class="trend-analysis"><p><strong>需求增長：</strong>亞洲市場需求強勁增長</p><p><strong>年輕收藏：</strong>年輕一代收藏家入場</p><p><strong>數位化：</strong>線上交易平台發展</p><p><strong>認證需求：</strong>真偽認證服務重要性增加</p></div></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'pomerol-estates',
        quiz: {
          question: 'Château Pétrus的葡萄品種組成是什麼？',
          options: ['100% Merlot', '95% Merlot + 5% Cabernet Franc', '90% Merlot + 10% Cabernet Sauvignon', '85% Merlot + 15% Cabernet Franc'], 
          correct: 1,
          explanation: 'Château Pétrus的葡萄品種組成為95% Merlot + 5% Cabernet Franc，幾乎純Merlot的配置展現了這個品種在Pomerol獨特風土上的極致表現。'
        }
      },
      {
        title: 'Pomerol風格特徵與市場價值',
        highlights: [
          { id: 1, icon: '✨', title: '絲絢質感', content: 'Pomerol以絲絢優雅的質感和豐富的果香聞名' },
          { id: 2, icon: '💎', title: '稀缺價值', content: '極小產量造就的稀缺性和投資價值' }
        ],
        content: '<div class="pomerol-style"><p class="lead-text">Pomerol以其獨特的絲絢質感和複雜的香氣層次，展現了Merlot在特殊風土上的最高成就。</p><div class="style-analysis"><div class="style-section characteristics"><h4>🎯 Pomerol風格特徵</h4><div class="style-profile"><div class="profile-aspect sensory"><h5>👃 感官特徵</h5><div class="sensory-breakdown"><div class="visual-profile"><h6>視覺印象</h6><div class="visual-characteristics"><div class="color-description"><strong>顏色特徵：</strong><p>深邃的紫紅色，年輕時近乎墨黑，陳年後呈現深紅寶石色</p></div><div class="clarity-density"><strong>澄清度與密度：</strong><p>高度澄清，濃郁密集，掛杯持久顯示高酒精度與萃取物</p></div><div class="color-evolution"><strong>顏色演變：</strong><div class="evolution-stages"><div class="stage youth"><strong>年輕期：</strong>深紫色，邊緣帶藍紫色調</div><div class="stage maturity"><strong>成熟期：</strong>深紅寶石色，透明度增加</div><div class="stage aging"><strong>陳年期：</strong>深石榴紅，邊緣呈現磚紅色</div></div></div></div></div><div class="aroma-profile"><h6>香氣複雜度</h6><div class="aroma-layers"><div class="primary-aromas"><h7>主要果香</h7><div class="fruit-characteristics"><div class="dark-fruits"><strong>黑色水果：</strong>黑櫻桃、黑李子、黑莓、黑醋栗</div><div class="red-fruits"><strong>紅色水果：</strong>覆盆子、紅櫻桃、蔓越莓</div><div class="exotic-fruits"><strong>異域水果：</strong>無花果、椰棗、黑橄欖</div><div class="fruit-intensity"><strong>果香強度：</strong>極為豐富，純淨度高，表現力強</div></div></div><div class="floral-herbal"><h7>花香與草本</h7><div class="floral-profile"><div class="flower-notes"><strong>花香調：</strong>紫羅蘭、玫瑰花瓣、薰衣草</div><div class="herbal-notes"><strong>草本香：</strong>薄荷、迷迭香、百里香</div><div class="spice-notes"><strong>香料調：</strong>黑胡椒、丁香、肉桂、甘草</div></div></div><div class="earthy-mineral"><h7>土壤與礦物</h7><div class="terroir-expression"><div class="earth-notes"><strong>土壤氣息：</strong>濕土、松露、森林地表</div><div class="mineral-notes"><strong>礦物質感：</strong>鐵質、石墨、濕石頭</div><div class="clay-influence"><strong>黏土影響：</strong>特有的黏土礦物質感</div></div></div><div class="oak-integration"><h7>橡木桶香氣</h7><div class="oak-profile"><div class="vanilla-notes"><strong>香草調：</strong>細膩香草、奶油、焦糖</div><div class="toast-notes"><strong>烘烤香：</strong>烤麵包、烤杏仁、咖啡</div><div class="wood-spice"><strong>木質香料：</strong>雪松、檀香、煙燻</div><div class="integration-quality"><strong>整合品質：</strong>橡木完美融合，不喧賓奪主</div></div></div></div></div><div class="palate-structure"><h6>口感結構</h6><div class="palate-elements"><div class="texture-body"><h7>質地與酒體</h7><div class="texture-profile"><p><strong>酒體：</strong>飽滿豐富，絲絹般順滑</p><p><strong>質地：</strong>天鵝絨般細膩，奢華柔順</p><p><strong>密度：</strong>高密度但不厚重，優雅集中</p><p><strong>流動性：</strong>如液體絲綢般的流動感</p></div></div><div class="tannin-profile"><h7>單寧結構</h7><div class="tannin-analysis"><p><strong>單寧質量：</strong>極高品質，細膩絲滑</p><p><strong>年輕表現：</strong>結構明顯但不粗糙</p><p><strong>成熟發展：</strong>逐漸柔化，完美整合</p><p><strong>陳年狀態：</strong>單寧完全融合，支撐力強</p></div></div><div class="acidity-balance"><h7>酸度平衡</h7><div class="acidity-analysis"><p><strong>酸度水平：</strong>中等到中高，結構支撐</p><p><strong>酸度品質：</strong>清新而不尖銳</p><p><strong>平衡作用：</strong>與豐富果味完美平衡</p><p><strong>陳年作用：</strong>維持酒款活力與新鮮感</p></div></div><div class="finish-analysis"><h7>餘韻分析</h7><div class="finish-profile"><p><strong>長度：</strong>極長，可持續60-90秒</p><p><strong>複雜度：</strong>餘韻中香氣層次不斷變化</p><p><strong>記憶點：</strong>獨特的礦物質與果香印象</p><p><strong>整體印象：</strong>優雅、奢華、難忘</p></div></div></div></div></div></div><div class="profile-aspect uniqueness"><h5>🌟 Pomerol獨特性</h5><div class="uniqueness-analysis"><div class="merlot-expression"><h6>Merlot的極致表現</h6><div class="merlot-excellence"><div class="variety-showcase"><strong>品種純粹性：</strong>Pomerol展現了Merlot的最高潛力</div><div class="terroir-match"><strong>風土匹配：</strong>黏土土壤與Merlot的完美結合</div><div class="complexity-achievement"><strong>複雜度成就：</strong>單一品種達到多品種混釀的複雜度</div><div class="aging-potential"><strong>陳年能力：</strong>打破Merlot不耐久存的偏見</div></div></div><div class="style-distinction"><h6>風格區別性</h6><div class="distinctive-features"><div class="left-bank-contrast"><strong>與左岸對比：</strong>更加圓潤柔順，較少棱角</div><div class="other-right-bank"><strong>與其他右岸：</strong>更加濃郁集中，礦物感更強</div><div class="international-comparison"><strong>國際比較：</strong>世界範圍內Merlot的標桿</div><div class="price-reflection"><strong>價格體現：</strong>價格反映其獨特價值</div></div></div><div class="terroir-signature"><h6>風土印記</h6><div class="terroir-characteristics"><div class="clay-signature"><strong>黏土印記：</strong>獨特的黏土礦物質感</div><div class="iron-influence"><strong>鐵質影響：</strong>鐵質土壤的特殊貢獻</div><div class="micro-climate"><strong>微氣候：</strong>小產區的一致性優勢</div><div class="human-factor"><strong>人文因素：</strong>世代傳承的釀酒藝術</div></div></div></div></div></div></div><div class="style-section market-analysis"><h4>📈 市場價值分析</h4><div class="market-overview"><div class="pricing-structure"><h5>💰 價格結構</h5><div class="price-tiers"><div class="tier-ultra-premium"><h6>超級精品級 (€3,000+/瓶)</h6><div class="ultra-premium-wines"><div class="petrus-pricing"><strong>Pétrus：</strong><p>€4,000-15,000/瓶，根據年份差異巨大</p></div><div class="le-pin-pricing"><strong>Le Pin：</strong><p>€2,000-8,000/瓶，稀缺性推高價格</p></div><div class="lafleur-pricing"><strong>Lafleur：</strong><p>€1,500-4,000/瓶，被低估的價值</p></div></div></div><div class="tier-premium"><h6>精品級 (€500-3,000/瓶)</h6><div class="premium-wines"><div class="trotanoy-pricing"><strong>Trotanoy：</strong><p>€800-2,500/瓶，穩定品質保證</p></div><div class="evangile-pricing"><strong>L\'Évangile：</strong><p>€400-1,200/瓶，現代管理提升</p></div><div class="certan-pricing"><strong>Vieux Château Certan：</strong><p>€300-800/瓶，傳統風格</p></div></div></div><div class="tier-excellent"><h6>優秀級 (€100-500/瓶)</h6><div class="excellent-wines"><p>其他優質Pomerol酒莊，提供相對易接近的價格選擇</p></div></div></div></div><div class="investment-factors"><h5>📊 投資因素</h5><div class="investment-elements"><div class="scarcity-premium"><h6>稀缺性溢價</h6><div class="scarcity-analysis"><p><strong>產量稀少：</strong>總產量極低，供需嚴重失衡</p><p><strong>分配體系：</strong>傳統分配渠道限制市場流通</p><p><strong>收藏熱情：</strong>全球收藏家競相追逐</p><p><strong>替代稀少：</strong>難以找到同等品質替代品</p></div></div><div class="quality-consistency"><h6>品質一致性</h6><div class="quality-factors"><p><strong>風土穩定：</strong>一致的風土條件保證品質</p><p><strong>工藝傳承：</strong>傳統工藝與現代技術結合</p><p><strong>管理專業：</strong>專業團隊的精細管理</p><p><strong>聲譽保護：</strong>酒莊高度重視聲譽維護</p></div></div><div class="market-recognition"><h6>市場認知度</h6><div class="recognition-factors"><p><strong>專業評價：</strong>酒評家持續高分評價</p><p><strong>媒體關注：</strong>國際媒體廣泛報導</p><p><strong>拍賣表現：</strong>拍賣市場優異表現</p><p><strong>文化地位：</strong>葡萄酒文化的重要組成</p></div></div></div></div><div class="future-outlook"><h5>🔮 未來展望</h5><div class="outlook-analysis"><div class="demand-growth"><h6>需求增長趨勢</h6><div class="growth-drivers"><p><strong>新興市場：</strong>亞洲等新興市場需求強勁</p><p><strong>財富增長：</strong>全球財富增長推動高端消費</p><p><strong>投資多元：</strong>另類投資需求增加</p><p><strong>文化傳播：</strong>葡萄酒文化全球傳播</p></div></div><div class="supply-constraints"><h6>供應約束因素</h6><div class="constraint-factors"><p><strong>土地限制：</strong>產區面積無法擴大</p><p><strong>氣候變化：</strong>氣候變化帶來的不確定性</p><p><strong>傳承問題：</strong>家族傳承面臨挑戰</p><p><strong>成本上升：</strong>生產成本持續上升</p></div></div><div class="investment-advice"><h6>投資建議</h6><div class="advice-points"><p><strong>長期持有：</strong>適合長期投資策略</p><p><strong>分散配置：</strong>不同酒莊和年份的分散配置</p><p><strong>專業儲存：</strong>確保專業儲存條件</p><p><strong>真偽認證：</strong>重視來源和真偽認證</p></div></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: 'Pomerol產區風格的最大特色是什麼？',
          options: ['結構強勁厚重', '絲絢優雅的質感', '高酸度清新', '橡木味突出'], 
          correct: 1,
          explanation: 'Pomerol產區以絲絢優雅的質感著稱，這主要來自於Merlot在獨特黏土土壤上的表現，造就了天鵝絨般柔順的口感和豐富的果香層次。'
        }
      }
    ]
  } else if (props.lessonId === 'l2-7-example') {
    return [
      { type: 'title' },
      {
        title: '世界遺產地位與產區歷史',
        highlights: [
          { id: 1, icon: '🏛️', title: '世界遺產', content: 'Saint-Émilion是UNESCO世界文化遺產產區' },
          { id: 2, icon: '⏳', title: '千年歷史', content: '自羅馬時代即有葡萄栽培傳統' }
        ],
        content: `<div class="saint-emilion-heritage">
          <p class="lead-text">Saint-Émilion是波爾多最古老的葡萄酒產區之一，1999年被列為UNESCO世界文化遺產，展現千年葡萄栽培與釀酒文化的輝煌。</p>
          <div class="heritage-section">
            <h4>🏛️ 世界遺產地位</h4>
            <ul>
              <li><strong>UNESCO認證：</strong>1999年成為世界文化遺產，保護葡萄園景觀與歷史村落</li>
              <li><strong>歷史傳承：</strong>自羅馬時代即有葡萄栽培，修道院文化深厚</li>
              <li><strong>地理特色：</strong>高原、坡地、平原交錯，地形多樣</li>
              <li><strong>村落風貌：</strong>石灰岩古城、地下酒窖、修道院遺跡</li>
            </ul>
          </div>
          <div class="heritage-section">
            <h4>⏳ 千年葡萄酒文化</h4>
            <ul>
              <li>羅馬時代：最早的葡萄園記錄</li>
              <li>中世紀：修道院推動葡萄酒發展</li>
              <li>近代：分級制度與品牌建設</li>
              <li>現代：成為全球知名高端產區</li>
            </ul>
          </div>
        </div>`,
        hasMap: true, mapFocus: 'RightBank-SaintEmilion',
        quiz: {
          question: 'Saint-Émilion於哪一年被列為UNESCO世界文化遺產？',
          options: ['1985年', '1999年', '2005年', '2012年'],
          correct: 1,
          explanation: 'Saint-Émilion於1999年被UNESCO列為世界文化遺產，成為全球首批葡萄酒產區獲此殊榮。'
        }
      },
      {
        title: '頂級酒莊與分級制度',
        highlights: [
          { id: 1, icon: '👑', title: '傳奇酒莊', content: 'Cheval Blanc、Ausone等世界頂級酒莊' },
          { id: 2, icon: '🏅', title: '分級制度', content: '獨特的Saint-Émilion分級體系' }
        ],
        content: `<div class="saint-emilion-chateaux">
          <p class="lead-text">Saint-Émilion擁有Cheval Blanc、Ausone等傳奇酒莊，並以獨特的分級制度展現產區多樣性與品質。</p>
          <div class="chateaux-section">
            <h4>👑 傳奇酒莊</h4>
            <ul>
              <li><strong>Château Cheval Blanc：</strong>右岸酒王，混釀Merlot與Cabernet Franc，風格細膩複雜</li>
              <li><strong>Château Ausone：</strong>歷史最悠久，石灰岩高地，陳年潛力極佳</li>
              <li><strong>Pavie、Angélus：</strong>近年晉升頂級，展現現代釀酒實力</li>
            </ul>
          </div>
          <div class="chateaux-section">
            <h4>🏅 分級制度</h4>
            <ul>
              <li><strong>Premiers Grands Crus Classés A：</strong>最高等級，僅數家酒莊</li>
              <li><strong>Premiers Grands Crus Classés B：</strong>次高等級，品質卓越</li>
              <li><strong>Grands Crus Classés：</strong>優秀酒莊，展現多樣風格</li>
              <li><strong>分級更新：</strong>每10年重新評定，確保品質與創新</li>
            </ul>
          </div>
        </div>`,
        hasMap: true, mapFocus: 'saint-emilion-chateaux',
        quiz: {
          question: 'Saint-Émilion分級制度多久重新評定一次？',
          options: ['每3年', '每5年', '每10年', '每20年'],
          correct: 2,
          explanation: 'Saint-Émilion分級制度每10年重新評定一次，確保酒莊品質與創新持續提升。'
        }
      },
      {
        title: '風土區域、品種表現與投資價值',
        highlights: [
          { id: 1, icon: '🌄', title: '多樣風土', content: '高原、坡地、平原三大區域風土差異' },
          { id: 2, icon: '💰', title: '投資潛力', content: '品牌價值與全球收藏熱潮' }
        ],
        content: `<div class="saint-emilion-style">
          <p class="lead-text">Saint-Émilion展現高原、坡地、平原三大風土區域，品種多樣，風格豐富，並具備極高的品牌與投資價值。</p>
          <div class="terroir-section">
            <h4>🌄 風土區域與品種表現</h4>
            <ul>
              <li><strong>高原：</strong>石灰岩土壤，Cabernet Franc表現卓越，酒款結構強勁</li>
              <li><strong>坡地：</strong>黏土石灰岩混合，Merlot主導，風格細膩優雅</li>
              <li><strong>平原：</strong>砂質土壤，果味突出，易飲型酒款</li>
              <li><strong>品種多樣：</strong>Merlot、Cabernet Franc、Cabernet Sauvignon、Malbec等</li>
            </ul>
          </div>
          <div class="investment-section">
            <h4>💰 品牌價值與投資潛力</h4>
            <ul>
              <li>頂級酒莊年產量稀少，全球收藏家爭相競購</li>
              <li>近年價格持續上升，投資回報率高</li>
              <li>品牌形象強，國際市場認知度高</li>
              <li>陳年潛力卓越，適合長期收藏</li>
            </ul>
          </div>
        </div>`,
        hasMap: false,
        quiz: {
          question: 'Saint-Émilion高原區域主要土壤類型是？',
          options: ['砂質土壤', '石灰岩土壤', '黏土土壤', '火山土壤'],
          correct: 1,
          explanation: 'Saint-Émilion高原區域以石灰岩土壤為主，這種土壤造就了Cabernet Franc的卓越表現與酒款的結構感。'
        }
      }
    ]
  } else if (props.lessonId === 'l1-8') {
    return [
      { type: 'title' },
      {
        title: 'Level 1 知識回顧與整合',
        highlights: [
          { id: 1, icon: '📚', title: '知識整合', content: '回顧 Level 1 七大核心主題的重要知識點' },
          { id: 2, icon: '🎯', title: '實務應用', content: '將理論知識轉化為實際選酒與品酒技能' }
        ],
        content: '<div class="comprehensive-review"><p class="lead-text">經過 Level 1 系統性學習，現在讓我們回顧並整合所有重要知識點。</p><div class="knowledge-integration"><div class="review-section course-summary"><h4>📚 課程知識架構回顧</h4><div class="course-modules"><div class="module-group foundation"><h5>🏗️ 基礎知識模組</h5><div class="modules-grid"><div class="module-card l1-1"><div class="module-header"><h6>📍 l1-1 地理基礎</h6><span class="module-status completed">已完成</span></div><div class="module-content"><p><strong>核心概念：</strong>波爾多產區地理位置與基本結構</p><ul><li>左岸：Médoc、Graves產區特徵</li><li>右岸：Libournais、Blaye產區分布</li><li>Entre-Deux-Mers：兩河之間的多樣性</li><li>氣候影響：大西洋與河流的調節作用</li></ul></div></div><div class="module-card l1-2"><div class="module-header"><h6>🌤️ l1-2 氣候與環境</h6><span class="module-status completed">已完成</span></div><div class="module-content"><p><strong>核心概念：</strong>海洋性氣候對葡萄種植的影響</p><ul><li>溫和濕潤：適合葡萄緩慢成熟</li><li>年份差異：氣候變化對品質的影響</li><li>微氣候：不同產區的細微差別</li><li>土壤多樣性：砂礫、黏土、石灰岩</li></ul></div></div></div></div><div class="module-group knowledge"><h5>🧠 專業知識模組</h5><div class="modules-grid"><div class="module-card l1-3"><div class="module-header"><h6>🍇 l1-3 葡萄品種</h6><span class="module-status completed">已完成</span></div><div class="module-content"><p><strong>核心概念：</strong>波爾多主要葡萄品種特性</p><ul><li>紅葡萄：Cabernet Sauvignon、Merlot、Cabernet Franc</li><li>白葡萄：Sauvignon Blanc、Sémillon、Muscadelle</li><li>混釀哲學：不同品種的互補與平衡</li><li>產區適性：左右岸品種偏好差異</li></ul></div></div><div class="module-card l1-4"><div class="module-header"><h6>⚖️ l1-4 左岸右岸</h6><span class="module-status completed">已完成</span></div><div class="module-content"><p><strong>核心概念：</strong>左右岸產區風格與特色對比</p><ul><li>左岸特色：Cabernet Sauvignon主導，結構強勁</li><li>右岸特色：Merlot主導，柔順易飲</li><li>土壤差異：砂礫石vs黏土石灰岩</li><li>酒莊文化：大酒莊vs精品小莊</li></ul></div></div></div></div><div class="module-group practical"><h5>🔧 實務應用模組</h5><div class="modules-grid"><div class="module-card l1-5"><div class="module-header"><h6>🍷 l1-5 酒款類型</h6><span class="module-status completed">已完成</span></div><div class="module-content"><p><strong>核心概念：</strong>波爾多多樣化的酒款風格</p><ul><li>紅酒：乾紅酒的不同風格表現</li><li>白酒：乾白與甜白的釀造差異</li><li>甜酒：貴腐酒的獨特工藝</li><li>選酒指南：場合與餐搭建議</li></ul></div></div><div class="module-card l1-6"><div class="module-header"><h6>🏛️ l1-6 AOC系統</h6><span class="module-status completed">已完成</span></div><div class="module-content"><p><strong>核心概念：</strong>法國AOC分級與品質保證</p><ul><li>AOC概念：原產地控制命名系統</li><li>階層結構：區域→次區域→村莊級</li><li>酒標解讀：法規資訊識別技巧</li><li>品質判斷：分級系統的實用價值</li></ul></div></div><div class="module-card l1-7"><div class="module-header"><h6>👃 l1-7 品嚐技巧</h6><span class="module-status completed">已完成</span></div><div class="module-content"><p><strong>核心概念：</strong>專業品酒方法與感官訓練</p><ul><li>品酒三步驟：望、聞、品的系統方法</li><li>風味識別：建立個人風味資料庫</li><li>專業術語：準確表達品酒感受</li><li>筆記技巧：記錄與分享心得方法</li></ul></div></div></div></div></div></div><div class="review-section knowledge-map"><h4>🗺️ 知識關聯圖</h4><div class="knowledge-connections"><div class="connection-flow"><div class="flow-step geography"><div class="step-content"><h6>地理基礎</h6><p>產區分布與地理環境</p></div><div class="arrow">→</div></div><div class="flow-step climate"><div class="step-content"><h6>氣候環境</h6><p>海洋性氣候影響</p></div><div class="arrow">→</div></div><div class="flow-step grapes"><div class="step-content"><h6>葡萄品種</h6><p>品種特性與適應性</p></div><div class="arrow">→</div></div><div class="flow-step regions"><div class="step-content"><h6>產區風格</h6><p>左右岸特色差異</p></div></div></div><div class="flow-step-second"><div class="flow-step wine-types"><div class="step-content"><h6>酒款類型</h6><p>紅白甜酒多樣化</p></div><div class="arrow">→</div></div><div class="flow-step aoc"><div class="step-content"><h6>AOC系統</h6><p>品質分級與法規</p></div><div class="arrow">→</div></div><div class="flow-step tasting"><div class="step-content"><h6>品嚐技巧</h6><p>專業評鑑能力</p></div><div class="arrow">→</div></div><div class="flow-step mastery"><div class="step-content"><h6>綜合運用</h6><p>實務應用技能</p></div></div></div></div></div><div class="review-section practical-skills"><h4>🎯 實務技能檢核</h4><div class="skills-assessment"><div class="skill-category selection"><h5>🛒 選酒技能</h5><div class="skills-checklist"><div class="skill-item"><input type="checkbox" id="skill-1" disabled checked><label for="skill-1">能夠識別酒標上的產區資訊</label></div><div class="skill-item"><input type="checkbox" id="skill-2" disabled checked><label for="skill-2">理解AOC階層對應的品質水準</label></div><div class="skill-item"><input type="checkbox" id="skill-3" disabled checked><label for="skill-3">根據場合選擇合適的酒款類型</label></div><div class="skill-item"><input type="checkbox" id="skill-4" disabled checked><label for="skill-4">判斷左右岸產區的風格差異</label></div></div></div><div class="skill-category tasting"><h5>🍷 品酒技能</h5><div class="skills-checklist"><div class="skill-item"><input type="checkbox" id="skill-5" disabled checked><label for="skill-5">執行標準的望聞品三步驟</label></div><div class="skill-item"><input type="checkbox" id="skill-6" disabled checked><label for="skill-6">識別基本的香氣與風味特徵</label></div><div class="skill-item"><input type="checkbox" id="skill-7" disabled checked><label for="skill-7">使用專業術語描述品酒感受</label></div><div class="skill-item"><input type="checkbox" id="skill-8" disabled checked><label for="skill-8">記錄完整的品酒筆記</label></div></div></div><div class="skill-category knowledge"><h5>📚 理論知識</h5><div class="skills-checklist"><div class="skill-item"><input type="checkbox" id="skill-9" disabled checked><label for="skill-9">掌握波爾多產區地理分布</label></div><div class="skill-item"><input type="checkbox" id="skill-10" disabled checked><label for="skill-10">了解主要葡萄品種特性</label></div><div class="skill-item"><input type="checkbox" id="skill-11" disabled checked><label for="skill-11">理解氣候對葡萄酒的影響</label></div><div class="skill-item"><input type="checkbox" id="skill-12" disabled checked><label for="skill-12">熟悉法國AOC分級制度</label></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'comprehensive-review',
        quiz: {
          question: 'Level 1 課程中，哪個模組專門教授葡萄酒品質分級制度？',
          options: ['l1-4 左岸右岸', 'l1-5 酒款類型', 'l1-6 AOC系統', 'l1-7 品嚐技巧'], 
          correct: 2,
          explanation: 'l1-6 AOC系統專門講解法國的原產地控制命名系統，包括品質分級制度、階層結構和酒標解讀技巧。'
        }
      },
      {
        title: '綜合測驗與認證評量',
        highlights: [
          { id: 1, icon: '📝', title: '綜合測驗', content: '涵蓋所有Level 1知識點的全面評量' },
          { id: 2, icon: '🏆', title: '認證評估', content: '達到標準即可獲得Level 1完成認證' }
        ],
        content: '<div class="final-assessment"><p class="lead-text">通過綜合測驗來檢驗您對波爾多葡萄酒Level 1知識的掌握程度。</p><div class="assessment-system"><div class="assessment-section test-structure"><h4>📋 測驗結構與內容</h4><div class="test-overview"><div class="test-categories"><div class="category geography-climate"><h5>🌍 地理與氣候 (25%)</h5><div class="test-topics"><div class="topic-group"><h6>地理知識測驗</h6><ul><li>波爾多產區基本分布與邊界</li><li>左岸、右岸、Entre-Deux-Mers識別</li><li>主要河流對產區劃分的影響</li><li>重要子產區的地理位置</li></ul></div><div class="topic-group"><h6>氣候環境理解</h6><ul><li>海洋性氣候特徵與影響</li><li>年份差異的氣候因素</li><li>微氣候對不同產區的作用</li><li>土壤類型與葡萄種植適性</li></ul></div></div></div><div class="category varieties-regions"><h5>🍇 品種與產區 (30%)</h5><div class="test-topics"><div class="topic-group"><h6>葡萄品種掌握</h6><ul><li>六大主要品種特性識別</li><li>紅白葡萄品種分類與用途</li><li>品種在不同產區的表現差異</li><li>混釀比例與風格影響</li></ul></div><div class="topic-group"><h6>產區風格理解</h6><ul><li>左右岸產區風格對比分析</li><li>主要AOC的特色與代表性</li><li>產區與品種搭配的邏輯</li><li>土壤差異對風格的影響</li></ul></div></div></div><div class="category wine-quality"><h5>🏛️ 酒款與品質 (25%)</h5><div class="test-topics"><div class="topic-group"><h6>酒款類型分類</h6><ul><li>紅白甜酒的基本差異</li><li>不同釀造工藝的特點</li><li>甜酒製作的特殊技術</li><li>酒款選擇的實用建議</li></ul></div><div class="topic-group"><h6>AOC品質系統</h6><ul><li>法國AOC制度的基本概念</li><li>波爾多AOC階層結構理解</li><li>酒標資訊解讀技巧</li><li>品質分級的實際意義</li></ul></div></div></div><div class="category tasting-skills"><h5>👃 品酒技巧 (20%)</h5><div class="test-topics"><div class="topic-group"><h6>品酒方法應用</h6><ul><li>望聞品三步驟的正確執行</li><li>基本風味特徵識別能力</li><li>香氣分類與描述準確性</li><li>口感要素分析技巧</li></ul></div><div class="topic-group"><h6>專業表達能力</h6><ul><li>品酒術語的正確使用</li><li>感官描述的準確性</li><li>品酒筆記記錄完整性</li><li>品酒心得表達清晰度</li></ul></div></div></div></div></div></div><div class="assessment-section scoring-system"><h4>📊 評分標準與認證</h4><div class="scoring-details"><div class="score-breakdown"><h5>🎯 評分分配</h5><div class="score-categories"><div class="score-category theory"><h6>理論知識 (60分)</h6><div class="score-items"><ul><li>地理氣候基礎：15分</li><li>品種產區知識：20分</li><li>AOC品質系統：15分</li><li>酒款類型分類：10分</li></ul></div></div><div class="score-category practical"><h6>實務應用 (30分)</h6><div class="score-items"><ul><li>品酒技巧運用：15分</li><li>選酒判斷能力：10分</li><li>術語表達準確：5分</li></ul></div></div><div class="score-category integration"><h6>知識整合 (10分)</h6><div class="score-items"><ul><li>跨主題關聯理解：5分</li><li>實際問題解決：5分</li></ul></div></div></div></div><div class="certification-levels"><h5>🏆 認證等級標準</h5><div class="cert-levels"><div class="cert-level excellent"><div class="level-badge gold">🥇</div><div class="level-details"><h6>優秀認證 (90-100分)</h6><p>全面掌握Level 1知識，具備紮實的理論基礎和實務能力，可直接進入Level 2學習。</p><div class="benefits"><ul><li>Level 1優秀完成證書</li><li>Level 2課程直接准入</li><li>個人學習檔案優秀記錄</li></ul></div></div></div><div class="cert-level good"><div class="level-badge silver">🥈</div><div class="level-details"><h6>良好認證 (80-89分)</h6><p>良好掌握Level 1核心知識，基本具備波爾多葡萄酒基礎能力。</p><div class="benefits"><ul><li>Level 1良好完成證書</li><li>Level 2課程准入資格</li><li>建議加強實務練習</li></ul></div></div></div><div class="cert-level pass"><div class="level-badge bronze">🥉</div><div class="level-details"><h6>通過認證 (70-79分)</h6><p>基本達到Level 1學習目標，掌握波爾多葡萄酒入門知識。</p><div class="benefits"><ul><li>Level 1基礎完成證書</li><li>建議複習弱項後進入Level 2</li><li>提供額外學習資源</li></ul></div></div></div><div class="cert-level retry"><div class="level-badge none">📚</div><div class="level-details"><h6>建議重修 (低於70分)</h6><p>尚未完全掌握Level 1核心知識，建議重新學習相關課程。</p><div class="recommendations"><ul><li>提供詳細成績分析報告</li><li>指出需要加強的知識領域</li><li>免費重修相關課程模組</li><li>個人化學習建議</li></ul></div></div></div></div></div></div></div><div class="assessment-section preparation-tips"><h4>💡 測驗準備建議</h4><div class="prep-strategies"><div class="strategy-group review"><h5>📚 複習策略</h5><div class="review-methods"><div class="method active-review"><h6>主動回憶法</h6><p>不看資料的情況下，嘗試回想每個課程的核心概念和重點知識。</p><div class="implementation"><ul><li>每天花10分鐘回想一個課程主題</li><li>使用心智圖整理知識架構</li><li>與他人討論學習內容</li></ul></div></div><div class="method spaced-repetition"><h6>間隔重複法</h6><p>按照記憶曲線規律，定期複習已學知識點。</p><div class="schedule"><ul><li>第1天：學習後立即複習</li><li>第3天：第一次間隔複習</li><li>第7天：第二次間隔複習</li><li>第14天：長期記憶鞏固</li></ul></div></div><div class="method practical-application"><h6>實務練習法</h6><p>通過實際品酒和選酒練習，強化理論知識的應用能力。</p><div class="practice-activities"><ul><li>實際品嚐不同產區的酒款</li><li>練習酒標資訊解讀</li><li>記錄詳細品酒筆記</li><li>參與品酒討論活動</li></ul></div></div></div></div><div class="strategy-group focus-areas"><h5>🎯 重點關注領域</h5><div class="focus-priorities"><div class="priority high"><h6>高優先級 🔴</h6><ul><li>波爾多產區基本地理分布</li><li>六大主要葡萄品種特性</li><li>左右岸產區風格差異</li><li>AOC階層系統理解</li><li>基本品酒三步驟掌握</li></ul></div><div class="priority medium"><h6>中優先級 🟡</h6><ul><li>具體AOC產區特色</li><li>酒款類型分類細節</li><li>專業品酒術語使用</li><li>年份與氣候影響關係</li></ul></div><div class="priority standard"><h6>標準複習 🟢</h6><ul><li>歷史背景與文化知識</li><li>進階釀造工藝理解</li><li>詳細土壤類型分析</li><li>餐酒搭配建議</li></ul></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '要獲得Level 1優秀認證，需要達到多少分數？',
          options: ['70-79分', '80-89分', '90-100分', '60分以上'], 
          correct: 2,
          explanation: '優秀認證需要達到90-100分，表示全面掌握Level 1知識，具備紮實的理論基礎和實務能力，可直接進入Level 2學習。'
        }
      },
      {
        title: 'Level 2 進階學習展望',
        highlights: [
          { id: 1, icon: '🚀', title: '進階之路', content: '深入探索波爾多各產區的獨特風土與名莊' },
          { id: 2, icon: '🎓', title: '專業提升', content: '向WSET Level 2認證標準邁進' }
        ],
        content: '<div class="level2-preview"><p class="lead-text">恭喜完成Level 1學習！現在讓我們展望Level 2的進階學習內容。</p><div class="advanced-learning"><div class="preview-section level2-structure"><h4>🏗️ Level 2 課程架構</h4><div class="l2-curriculum"><div class="curriculum-overview"><h5>📚 深度學習主軸</h5><div class="learning-pillars"><div class="pillar terroir"><div class="pillar-icon">🌍</div><div class="pillar-content"><h6>風土深度探索</h6><p>從宏觀地理到微觀土壤的完整風土學習</p><ul><li>詳細土壤地質分析</li><li>微氣候變化研究</li><li>風土對風味的具體影響</li><li>不同地塊的特色差異</li></ul></div></div><div class="pillar estates"><div class="pillar-icon">🏰</div><div class="pillar-content"><h6>名莊深度解析</h6><p>世界知名酒莊的歷史、哲學與釀酒工藝</p><ul><li>1855分級制度詳解</li><li>右岸精品酒莊探索</li><li>新興優質生產者</li><li>酒莊風格演變歷史</li></ul></div></div><div class="pillar techniques"><div class="pillar-icon">🔬</div><div class="pillar-content"><h6>進階釀酒工藝</h6><p>現代釀酒技術與傳統工藝的結合</p><ul><li>發酵技術詳解</li><li>橡木桶使用策略</li><li>調配藝術與科學</li><li>陳年潛力評估</li></ul></div></div><div class="pillar professional"><div class="pillar-icon">🎯</div><div class="pillar-content"><h6>專業品評技能</h6><p>WSET Level 2標準的專業品酒與評估能力</p><ul><li>盲品技巧訓練</li><li>複雜風味分析</li><li>品質缺陷識別</li><li>投資價值評估</li></ul></div></div></div></div><div class="l2-courses"><h5>📖 Level 2 課程模組</h5><div class="course-modules"><div class="module-category regions"><h6>🗺️ 產區專精系列</h6><div class="modules-list"><div class="module-item medoc"><h7>l2-1: Médoc產區深度探索</h7><p>左岸四大村莊的風土差異與釀酒哲學</p></div><div class="module-item margaux"><h7>l2-2: Margaux - 優雅的香水之鄉</h7><p>最優雅產區的獨特魅力與代表酒莊</p></div><div class="module-item pauillac"><h7>l2-3: Pauillac - 王者之鄉</h7><p>三大一級酒莊的故鄉與其釀酒傳奇</p></div><div class="module-item saint-julien"><h7>l2-4: Saint-Julien - 平衡典範</h7><p>最均衡產區的風格特色與名莊解析</p></div><div class="module-item saint-estephe"><h7>l2-5: Saint-Estèphe - 北地之珠</h7><p>風格最獨特產區的現代化轉型</p></div></div></div><div class="module-category right-bank"><h6>🍷 右岸精品系列</h6><div class="modules-list"><div class="module-item saint-emilion"><h7>l2-6: Saint-Émilion Grand Cru體系</h7><p>世界遺產產區的分級制度與精品酒莊</p></div><div class="module-item pomerol"><h7>l2-7: Pomerol - 稀世珍釀</h7><p>最昂貴產區的Merlot傳奇與投資價值</p></div><div class="module-item libournais"><h7>l2-8: Libournais衛星產區</h7><p>性價比優秀的右岸周邊產區探索</p></div></div></div><div class="module-category specialized"><h6>🎓 專業技能系列</h6><div class="modules-list"><div class="module-item vintage"><h7>l2-9: 年份與陳年潛力分析</h7><p>氣候變化對品質的影響與陳年預測</p></div><div class="module-item investment"><h7>l2-10: 葡萄酒投資與收藏</h7><p>精品酒款的投資價值與收藏策略</p></div><div class="module-item professional"><h7>l2-11: 專業侍酒與服務</h7><p>餐廳級別的葡萄酒服務技能</p></div><div class="module-item certification"><h7>l2-12: WSET Level 2 認證準備</h7><p>國際認證考試的全面準備與模擬</p></div></div></div></div></div></div></div><div class="preview-section skills-advancement"><h4>🎯 技能進階目標</h4><div class="skill-progression"><div class="skill-areas"><div class="skill-area sensory"><h5>👃 感官能力提升</h5><div class="advancement-goals"><div class="current-level"><h6>Level 1 基礎</h6><ul><li>基本香氣識別</li><li>簡單風味描述</li><li>標準品酒流程</li><li>基礎術語使用</li></ul></div><div class="arrow-progression">↓ 進階發展 ↓</div><div class="target-level"><h6>Level 2 進階</h6><ul><li>複雜香氣層次分析</li><li>精準風味定位</li><li>盲品技巧掌握</li><li>專業術語流暢運用</li></ul></div></div></div><div class="skill-area knowledge"><h5>📚 知識深度擴展</h5><div class="advancement-goals"><div class="current-level"><h6>Level 1 基礎</h6><ul><li>產區基本分布</li><li>主要品種特性</li><li>AOC基礎概念</li><li>酒款類型分類</li></ul></div><div class="arrow-progression">↓ 深化學習 ↓</div><div class="target-level"><h6>Level 2 進階</h6><ul><li>微觀風土分析</li><li>酒莊歷史文化</li><li>釀酒工藝細節</li><li>市場價值評估</li></ul></div></div></div><div class="skill-area practical"><h5>🔧 實務應用強化</h5><div class="advancement-goals"><div class="current-level"><h6>Level 1 基礎</h6><ul><li>基本選酒能力</li><li>簡單餐酒搭配</li><li>品酒筆記記錄</li><li>個人喜好判斷</li></ul></div><div class="arrow-progression">↓ 專業提升 ↓</div><div class="target-level"><h6>Level 2 進階</h6><ul><li>專業選酒建議</li><li>精確餐酒搭配</li><li>投資收藏策略</li><li>侍酒服務技能</li></ul></div></div></div></div></div></div><div class="preview-section next-steps"><h4>🚀 Level 2 準備建議</h4><div class="preparation-roadmap"><div class="prep-phases"><div class="phase immediate"><h5>🎯 立即行動 (完成Level 1後)</h5><div class="phase-tasks"><ul><li><strong>鞏固基礎：</strong>複習Level 1核心知識點</li><li><strong>實務練習：</strong>品嚐更多不同產區酒款</li><li><strong>詞彙擴展：</strong>學習更多專業品酒術語</li><li><strong>筆記整理：</strong>建立個人品酒資料庫</li></ul></div></div><div class="phase short-term"><h5>📅 短期準備 (1-2個月)</h5><div class="phase-tasks"><ul><li><strong>深度閱讀：</strong>研讀波爾多產區專業書籍</li><li><strong>品酒練習：</strong>參加品酒會或課程</li><li><strong>感官訓練：</strong>進行系統化嗅覺訓練</li><li><strong>知識測試：</strong>定期自我檢測學習成果</li></ul></div></div><div class="phase long-term"><h5>🎓 長期發展 (3-6個月)</h5><div class="phase-tasks"><ul><li><strong>專業認證：</strong>準備WSET Level 2考試</li><li><strong>實地學習：</strong>條件允許時參訪波爾多</li><li><strong>行業網絡：</strong>建立葡萄酒專業人脈</li><li><strong>持續學習：</strong>關注行業動態與新知</li></ul></div></div></div><div class="success-metrics"><h5>📊 學習成效指標</h5><div class="metrics-grid"><div class="metric knowledge"><h6>知識掌握度</h6><p>能夠詳細解釋波爾多各產區特色差異</p></div><div class="metric sensory"><h6>感官敏銳度</h6><p>在盲品中準確識別產區與年份</p></div><div class="metric practical"><h6>實務應用力</h6><p>為不同場合推薦合適的波爾多酒款</p></div><div class="metric professional"><h6>專業表達力</h6><p>使用專業術語清晰表達品酒心得</p></div></div></div></div></div></div></div>',
        hasMap: true, mapFocus: 'level2-preview',
        quiz: {
          question: 'Level 2課程的主要學習重點是什麼？',
          options: ['基礎知識鞏固', '深度風土探索與名莊解析', '葡萄種植技術', '酒類銷售技巧'], 
          correct: 1,
          explanation: 'Level 2課程專注於深度風土探索與名莊解析，包括詳細的土壤地質分析、世界知名酒莊研究、進階釀酒工藝，以及WSET Level 2標準的專業品評技能。'
        }
      }
    ]
  } else if (props.lessonId === 'l1-7') {
    return [
      { type: 'title' },
      {
        title: '望、聞、品 - 三步驟品酒法',
        highlights: [
          { id: 1, icon: '👁️', title: '觀察', content: '仔細觀察酒色、澄清度與黏稠度' },
          { id: 2, icon: '👃', title: '嗅聞', content: '深度聞香，識別主要香氣特徵' }
        ],
        content: '<div class="tasting-technique"><p class="lead-text">專業品酒遵循「望、聞、品」三步驟，這是品評葡萄酒的標準流程。</p><div class="tasting-steps"><div class="technique-section visual"><h4>👁️ 第一步：觀察（望）</h4><div class="visual-analysis"><div class="analysis-card color"><h5>🎨 酒色分析</h5><div class="color-content"><div class="color-guide"><h6>紅酒色澤</h6><div class="color-spectrum red-spectrum"><div class="color-sample purple"><span>紫紅色</span><p>年輕酒款</p></div><div class="color-sample ruby"><span>寶石紅</span><p>適飲期</p></div><div class="color-sample brick"><span>磚紅色</span><p>陳年酒款</p></div><div class="color-sample brown"><span>棕紅色</span><p>老年酒款</p></div></div></div><div class="color-guide"><h6>白酒色澤</h6><div class="color-spectrum white-spectrum"><div class="color-sample pale"><span>淺檸檬色</span><p>年輕清爽</p></div><div class="color-sample golden"><span>金黃色</span><p>橡木桶陳釀</p></div><div class="color-sample amber"><span>琥珀色</span><p>甜酒或陳年</p></div></div></div></div></div><div class="analysis-card clarity"><h5>💎 澄清度檢查</h5><div class="clarity-indicators"><div class="clarity-level clear"><h6>澄清透明</h6><p>高品質指標，無雜質沉澱</p></div><div class="clarity-level hazy"><h6>略帶霧感</h6><p>可能需要醒酒或過濾</p></div><div class="clarity-level cloudy"><h6>混濁不清</h6><p>可能品質問題或過度搖晃</p></div></div></div><div class="analysis-card viscosity"><h5>🌊 黏稠度觀察</h5><div class="viscosity-guide"><p><strong>搖杯觀察：</strong>輕搖酒杯，觀察酒液在杯壁流動的速度</p><div class="viscosity-types"><div class="viscosity-type light"><h6>輕盈流動</h6><p>酒精度較低，酒體較輕</p></div><div class="viscosity-type medium"><h6>中等流速</h6><p>酒體平衡，酒精度適中</p></div><div class="viscosity-type thick"><h6>緩慢流動</h6><p>酒精度高或糖分豐富</p></div></div></div></div></div></div><div class="technique-section aroma"><h4>👃 第二步：嗅聞（聞）</h4><div class="aroma-analysis"><div class="aroma-technique"><h5>🌪️ 嗅聞技巧</h5><div class="technique-steps"><div class="step-item first-nose"><h6>第一印象</h6><p>酒液靜止時的自然香氣</p></div><div class="step-item swirl"><h6>搖杯釋放</h6><p>輕搖酒杯，釋放更多香氣</p></div><div class="step-item deep-smell"><h6>深度嗅聞</h6><p>將鼻子深入杯中，仔細辨識</p></div></div></div><div class="aroma-categories"><h5>🌸 香氣分類體系</h5><div class="aroma-types"><div class="aroma-primary"><h6>主要香氣</h6><p>來自葡萄品種本身</p><ul><li>果香：黑醋栗、櫻桃、蘋果</li><li>花香：紫羅蘭、玫瑰、茉莉</li><li>草本：青椒、薄荷、尤加利</li></ul></div><div class="aroma-secondary"><h6>次要香氣</h6><p>來自發酵過程</p><ul><li>酵母香：麵包、餅乾</li><li>發酵香：奶油、優格</li><li>特殊香：堅果、蜂蜜</li></ul></div><div class="aroma-tertiary"><h6>陳年香氣</h6><p>來自橡木桶或瓶中陳年</p><ul><li>橡木香：香草、肉桂、焦糖</li><li>陳年香：皮革、煙草、蘑菇</li><li>複雜香：巧克力、咖啡、堅果</li></ul></div></div></div></div></div><div class="technique-section tasting"><h4>👅 第三步：品嚐（品）</h4><div class="tasting-analysis"><div class="tasting-technique"><h5>🍷 品嚐步驟</h5><div class="taste-steps"><div class="taste-step sip"><h6>小口品嚐</h6><p>取少量酒液於口中</p></div><div class="taste-step swish"><h6>口中攪動</h6><p>讓酒液接觸整個口腔</p></div><div class="taste-step breathe"><h6>輕微吸氣</h6><p>增強香氣感受</p></div><div class="taste-step finish"><h6>吞嚥感受</h6><p>體驗餘韻長度與變化</p></div></div></div><div class="taste-elements"><h5>🎯 品嚐要素</h5><div class="taste-components"><div class="component sweetness"><h6>甜度</h6><p>舌尖感受，從乾型到甜型</p></div><div class="component acidity"><h6>酸度</h6><p>兩側舌邊，提供清爽感</p></div><div class="component tannin"><h6>單寧</h6><p>口腔收斂感，主要在紅酒</p></div><div class="component body"><h6>酒體</h6><p>整體重量感，輕盈到飽滿</p></div><div class="component alcohol"><h6>酒精感</h6><p>溫暖感，影響整體平衡</p></div><div class="component finish"><h6>餘韻</h6><p>吞嚥後的持續時間與變化</p></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '專業品酒的正確順序是什麼？',
          options: ['聞、望、品', '望、聞、品', '品、望、聞', '聞、品、望'], 
          correct: 1,
          explanation: '專業品酒遵循「望、聞、品」的順序：先觀察酒色和澄清度，再嗅聞香氣特徵，最後品嚐口感與餘韻。'
        }
      },
      {
        title: '風味識別與感官訓練',
        highlights: [
          { id: 1, icon: '🍇', title: '風味輪盤', content: '系統化分類各種香氣與口感特徵' },
          { id: 2, icon: '🧠', title: '感官記憶', content: '建立個人風味資料庫與聯想' }
        ],
        content: '<div class="flavor-identification"><p class="lead-text">風味識別是品酒技能的核心，需要透過系統性訓練來提升感官敏銳度。</p><div class="flavor-training"><div class="training-section flavor-wheel"><h4>🍇 葡萄酒風味輪盤</h4><div class="wheel-overview"><div class="wheel-category fruits"><h5>🍓 水果類</h5><div class="flavor-subcategories"><div class="subcategory red-fruits"><h6>紅色水果</h6><ul><li>草莓 - 清新甜美</li><li>櫻桃 - 酸甜平衡</li><li>覆盆子 - 酸度明顯</li><li>黑醋栗 - 濃郁深沉</li><li>黑莓 - 成熟豐厚</li></ul></div><div class="subcategory dark-fruits"><h6>深色水果</h6><ul><li>藍莓 - 野生風味</li><li>黑李 - 複雜層次</li><li>黑櫻桃 - 濃縮精華</li><li>葡萄乾 - 乾燥甜味</li></ul></div><div class="subcategory citrus"><h6>柑橘類</h6><ul><li>檸檬 - 清新酸香</li><li>萊姆 - 尖銳明亮</li><li>葡萄柚 - 苦甜交織</li><li>橙子 - 溫暖甜香</li></ul></div><div class="subcategory tropical"><h6>熱帶水果</h6><ul><li>鳳梨 - 甜美多汁</li><li>芒果 - 濃郁香甜</li><li>百香果 - 酸甜強烈</li><li>荔枝 - 花香甜美</li></ul></div></div></div><div class="wheel-category florals"><h5>🌸 花香類</h5><div class="floral-types"><div class="floral-type delicate"><h6>淡雅花香</h6><ul><li>紫羅蘭 - 優雅細緻</li><li>玫瑰 - 浪漫芬芳</li><li>茉莉 - 清香怡人</li><li>金合歡 - 淡淡蜜香</li></ul></div><div class="floral-type intense"><h6>濃郁花香</h6><ul><li>橙花 - 濃郁甜香</li><li>薰衣草 - 芳香療癒</li><li>蜂蜜花 - 甜美誘人</li></ul></div></div></div><div class="wheel-category herbs-spices"><h5>🌿 香草香料類</h5><div class="herb-spice-groups"><div class="group fresh-herbs"><h6>新鮮香草</h6><ul><li>薄荷 - 清涼爽快</li><li>迷迭香 - 松針芳香</li><li>百里香 - 溫和香甜</li><li>羅勒 - 甜美香草</li></ul></div><div class="group warm-spices"><h6>溫暖香料</h6><ul><li>肉桂 - 溫暖甜香</li><li>丁香 - 濃烈芳香</li><li>胡椒 - 辛辣刺激</li><li>薑 - 溫熱辛香</li></ul></div></div></div><div class="wheel-category earthy"><h5>🌍 泥土礦物類</h5><div class="earthy-elements"><div class="element mineral"><h6>礦物感</h6><ul><li>石頭 - 乾淨清冽</li><li>濕土 - 自然泥香</li><li>岩石 - 堅硬礦感</li><li>粉筆 - 細緻粉感</li></ul></div><div class="element vegetal"><h6>植物性</h6><ul><li>青椒 - 生青味</li><li>蘆筍 - 蔬菜香</li><li>草地 - 清新草香</li><li>蘑菇 - 泥土菌香</li></ul></div></div></div></div></div><div class="training-section sensory-development"><h4>🧠 感官訓練方法</h4><div class="training-methods"><div class="method memory-building"><h5>📚 風味記憶建立</h5><div class="memory-techniques"><div class="technique association"><h6>聯想記憶法</h6><p>將品嚐的風味與熟悉的食物、場景或經驗聯繫</p><div class="association-examples"><ul><li><strong>草莓香氣</strong> → 想起童年採草莓的經驗</li><li><strong>煙燻味</strong> → 聯想篝火燒烤的場景</li><li><strong>蜂蜜味</strong> → 回憶自然蜂蜜的甜美</li></ul></div></div><div class="technique repetition"><h6>重複訓練法</h6><p>經常品嚐相同類型的酒款，強化特定風味的記憶</p><div class="repetition-plan"><ul><li>每週固定品嚐時間</li><li>記錄品酒筆記</li><li>對比不同年份同款酒</li><li>與他人交流心得</li></ul></div></div><div class="technique blind-tasting"><h6>盲品練習法</h6><p>遮蔽酒標進行品嚐，專注於感官感受</p><div class="blind-benefits"><ul><li>避免標籤偏見</li><li>提升感官敏銳度</li><li>強化風味識別能力</li><li>增加品酒樂趣</li></ul></div></div></div></div><div class="method daily-practice"><h5>🏃‍♂️ 日常感官練習</h5><div class="practice-activities"><div class="activity smell-training"><h6>嗅覺訓練</h6><p>日常生活中多聞各種香氣，建立豐富的嗅覺資料庫</p><ul><li>聞各種水果的香氣</li><li>體驗香料的氣味</li><li>感受花香的變化</li><li>注意環境的氣味</li></ul></div><div class="activity taste-awareness"><h6>味覺敏感度</h6><p>注意食物的各種味道層次，提升味覺辨識能力</p><ul><li>分辨甜味的程度</li><li>感受酸度的強弱</li><li>體驗苦味的層次</li><li>注意鹹味的平衡</li></ul></div></div></div></div></div><div class="training-section professional-tips"><h4>💡 專業品酒建議</h4><div class="professional-advice"><div class="advice-card environment"><h5>🏠 品酒環境</h5><ul><li><strong>光線充足：</strong>自然光下觀察酒色最準確</li><li><strong>無異味：</strong>避免香水、料理香氣干擾</li><li><strong>適當溫度：</strong>紅酒16-18°C，白酒8-12°C</li><li><strong>寧靜空間：</strong>專注感官感受</li></ul></div><div class="advice-card timing"><h5>⏰ 品酒時機</h5><ul><li><strong>空腹或微餓：</strong>味覺最敏銳的時候</li><li><strong>避免強烈調味：</strong>品酒前不吃辛辣食物</li><li><strong>精神狀態良好：</strong>疲勞會影響感官判斷</li><li><strong>適量品嚐：</strong>每款酒嚐少量即可</li></ul></div><div class="advice-card tools"><h5>🍷 品酒工具</h5><ul><li><strong>標準酒杯：</strong>ISO標準品酒杯最佳</li><li><strong>吐酒杯：</strong>多款品嚐時保持清醒</li><li><strong>記錄本：</strong>記錄品酒心得</li><li><strong>中性餅乾：</strong>清潔口腔用</li></ul></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '在葡萄酒風味輪盤中，黑醋栗屬於哪個風味類別？',
          options: ['柑橘類', '紅色水果', '深色水果', '熱帶水果'], 
          correct: 2,
          explanation: '黑醋栗屬於深色水果類別，具有濃郁深沉的特徵，常出現在波爾多紅酒中，特別是卡本內蘇維濃為主的酒款。'
        }
      },
      {
        title: '品酒詞彙與表達技巧',
        highlights: [
          { id: 1, icon: '📖', title: '專業詞彙', content: '掌握國際通用的品酒術語與表達方式' },
          { id: 2, icon: '✍️', title: '品酒筆記', content: '學習記錄與分享品酒心得的技巧' }
        ],
        content: '<div class="wine-vocabulary"><p class="lead-text">精確的品酒詞彙是溝通品酒心得的重要工具，讓品酒體驗更具體而有意義。</p><div class="vocabulary-system"><div class="vocab-section appearance-terms"><h4>👁️ 外觀描述詞彙</h4><div class="appearance-vocabulary"><div class="vocab-category color-terms"><h5>🎨 顏色詞彙</h5><div class="color-descriptions"><div class="color-group red-colors"><h6>紅酒顏色</h6><div class="color-terms-grid"><div class="color-term young-red"><span class="color-sample"></span><div class="term-details"><strong>紫紅色</strong><p>Purple/Violet - 年輕紅酒的典型色澤</p></div></div><div class="color-term mature-red"><span class="color-sample"></span><div class="term-details"><strong>寶石紅</strong><p>Ruby - 成熟紅酒的理想色澤</p></div></div><div class="color-term aged-red"><span class="color-sample"></span><div class="term-details"><strong>石榴紅</strong><p>Garnet - 陳年紅酒的深沉色澤</p></div></div><div class="color-term old-red"><span class="color-sample"></span><div class="term-details"><strong>磚紅色</strong><p>Brick/Tawny - 老年紅酒的成熟色澤</p></div></div></div></div><div class="color-group white-colors"><h6>白酒顏色</h6><div class="color-terms-grid"><div class="color-term pale-white"><span class="color-sample"></span><div class="term-details"><strong>淺檸檬色</strong><p>Pale Lemon - 年輕白酒的清淡色澤</p></div></div><div class="color-term medium-white"><span class="color-sample"></span><div class="term-details"><strong>中檸檬色</strong><p>Medium Lemon - 標準白酒色澤</p></div></div><div class="color-term deep-white"><span class="color-sample"></span><div class="term-details"><strong>深檸檬色</strong><p>Deep Lemon - 濃郁或橡木桶陳釀</p></div></div><div class="color-term golden"><span class="color-sample"></span><div class="term-details"><strong>金黃色</strong><p>Golden - 陳年或甜酒色澤</p></div></div></div></div></div></div><div class="vocab-category clarity-terms"><h5>💎 澄清度詞彙</h5><div class="clarity-vocabulary"><div class="clarity-term clear"><h6>澄清 (Clear)</h6><p>完全透明，無任何雜質或沉澱</p></div><div class="clarity-term brilliant"><h6>明亮 (Brilliant)</h6><p>極度澄清，有光澤感</p></div><div class="clarity-term hazy"><h6>略霧 (Hazy)</h6><p>輕微不清，可能需要醒酒</p></div><div class="clarity-term cloudy"><h6>混濁 (Cloudy)</h6><p>明顯不清，可能有品質問題</p></div></div></div></div></div><div class="vocab-section aroma-terms"><h4>👃 香氣描述詞彙</h4><div class="aroma-vocabulary"><div class="aroma-intensity"><h5>🌪️ 香氣強度</h5><div class="intensity-levels"><div class="intensity-level light"><h6>淡雅 (Light/Subtle)</h6><p>需要仔細感受才能察覺的香氣</p></div><div class="intensity-level medium"><h6>中等 (Medium)</h6><p>明顯但不過度的香氣強度</p></div><div class="intensity-level pronounced"><h6>濃郁 (Pronounced)</h6><p>強烈明顯的香氣表現</p></div><div class="intensity-level intense"><h6>強烈 (Intense)</h6><p>非常突出的香氣特徵</p></div></div></div><div class="aroma-descriptors"><h5>🎯 具體香氣描述</h5><div class="descriptor-categories"><div class="descriptor-group fruit-descriptors"><h6>果香描述</h6><ul><li><strong>新鮮 (Fresh)：</strong>活潑清新的果香</li><li><strong>成熟 (Ripe)：</strong>充分成熟的果香</li><li><strong>過熟 (Overripe)：</strong>過度成熟的濃郁感</li><li><strong>乾燥 (Dried)：</strong>如葡萄乾般的濃縮香氣</li><li><strong>果醬 (Jammy)：</strong>像果醬般的濃郁甜香</li></ul></div><div class="descriptor-group floral-descriptors"><h6>花香描述</h6><ul><li><strong>精緻 (Delicate)：</strong>細膩優雅的花香</li><li><strong>芬芳 (Fragrant)：</strong>明顯怡人的花香</li><li><strong>香甜 (Sweet)：</strong>帶甜味的花香</li><li><strong>清新 (Fresh)：</strong>如露珠般的清新花香</li></ul></div><div class="descriptor-group oak-descriptors"><h6>橡木香描述</h6><ul><li><strong>香草 (Vanilla)：</strong>溫和甜美的香草味</li><li><strong>烘烤 (Toasted)：</strong>烘烤過的堅果香</li><li><strong>煙燻 (Smoky)：</strong>淡淡的煙燻氣息</li><li><strong>香料 (Spicy)：</strong>肉桂、丁香等香料味</li></ul></div></div></div></div></div><div class="vocab-section taste-terms"><h4>👅 口感描述詞彙</h4><div class="taste-vocabulary"><div class="taste-elements"><h5>🍷 基本味覺要素</h5><div class="taste-components"><div class="component-group sweetness"><h6>甜度 (Sweetness)</h6><div class="sweetness-levels"><ul><li><strong>乾型 (Dry)：</strong>幾乎無甜味</li><li><strong>半乾 (Off-dry)：</strong>微量甜味</li><li><strong>半甜 (Medium-sweet)：</strong>明顯甜味</li><li><strong>甜型 (Sweet)：</strong>濃郁甜味</li></ul></div></div><div class="component-group acidity"><h6>酸度 (Acidity)</h6><div class="acidity-levels"><ul><li><strong>低酸 (Low)：</strong>圓潤柔和</li><li><strong>中酸 (Medium)：</strong>平衡清爽</li><li><strong>高酸 (High)：</strong>尖銳明亮</li><li><strong>過酸 (Tart)：</strong>刺激性酸味</li></ul></div></div><div class="component-group tannin"><h6>單寧 (Tannin)</h6><div class="tannin-levels"><ul><li><strong>柔順 (Soft)：</strong>幾乎不感到收斂</li><li><strong>中等 (Medium)：</strong>適度收斂感</li><li><strong>堅實 (Firm)：</strong>明顯收斂感</li><li><strong>粗糙 (Coarse)：</strong>過度收斂</li></ul></div></div></div></div><div class="mouthfeel-terms"><h5>💫 口感質地</h5><div class="texture-descriptions"><div class="texture-group body"><h6>酒體 (Body)</h6><ul><li><strong>輕盈 (Light)：</strong>如水般輕淡</li><li><strong>中等 (Medium)：</strong>平衡的重量感</li><li><strong>飽滿 (Full)：</strong>濃郁厚重</li><li><strong>厚重 (Heavy)：</strong>極度濃稠</li></ul></div><div class="texture-group finish"><h6>餘韻 (Finish)</h6><ul><li><strong>短暫 (Short)：</strong>吞嚥後快速消失</li><li><strong>中等 (Medium)：</strong>持續數秒鐘</li><li><strong>悠長 (Long)：</strong>持續很久</li><li><strong>複雜 (Complex)：</strong>層次豐富變化</li></ul></div></div></div></div></div><div class="vocab-section note-taking"><h4>✍️ 品酒筆記技巧</h4><div class="note-techniques"><div class="technique-group structure"><h5>📋 筆記結構</h5><div class="note-template"><div class="template-section basic-info"><h6>基本資訊</h6><ul><li>酒款名稱與年份</li><li>產區與生產者</li><li>葡萄品種組合</li><li>品嚐日期與場合</li></ul></div><div class="template-section appearance"><h6>外觀描述</h6><ul><li>顏色深度與色調</li><li>澄清度與光澤</li><li>黏稠度觀察</li></ul></div><div class="template-section aroma"><h6>香氣分析</h6><ul><li>香氣強度評估</li><li>主要香氣特徵</li><li>複雜度與層次</li></ul></div><div class="template-section palate"><h6>口感評價</h6><ul><li>甜度、酸度、單寧</li><li>酒體與質地</li><li>平衡度與餘韻</li></ul></div><div class="template-section conclusion"><h6>整體評價</h6><ul><li>品質評分</li><li>飲用建議</li><li>個人感受</li></ul></div></div></div><div class="technique-group tips"><h5>💡 記錄技巧</h5><div class="recording-tips"><div class="tip immediate"><h6>即時記錄</h6><p>品嚐當下立即記錄第一印象，避免記憶模糊</p></div><div class="tip objective"><h6>客觀描述</h6><p>盡量使用具體的描述詞彙，避免主觀偏見用詞</p></div><div class="tip comparison"><h6>比較參照</h6><p>與熟悉的酒款或食物進行比較，增加描述準確性</p></div><div class="tip consistency"><h6>保持一致</h6><p>建立個人的評分標準，確保不同時間的記錄可比較</p></div></div></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '在品酒筆記中，"Pronounced"通常用來描述什麼？',
          options: ['酒體的重量', '香氣的強度', '單寧的粗糙度', '餘韻的長度'], 
          correct: 1,
          explanation: '"Pronounced"是用來描述香氣強度的專業術語，表示香氣濃郁明顯，比中等強度更突出，但不及"Intense"那麼強烈。'
        }
      }
    ]
  } else if (props.lessonId === 'l1-6') {
    return [
      { type: 'title' },
      {
        title: 'AOC系統概念 - 品質保證的基石',
        highlights: [
          { id: 1, icon: '🏛️', title: '法律保障', content: 'AOC 是法國法律保護的原產地命名控制系統' },
          { id: 2, icon: '🌟', title: '品質象徵', content: '代表產區、品種、釀造工藝的嚴格標準' }
        ],
        content: '<div class="aoc-overview"><p class="lead-text">AOC <span class="term-note">(Appellation d\'Origine Contrôlée)</span> 原產地控制命名系統是法國葡萄酒品質保證的核心制度。</p><div class="aoc-foundation"><div class="concept-section definition"><h4>📚 AOC 定義與意義</h4><div class="definition-content"><div class="definition-card"><h5>🎯 核心概念</h5><p><strong>AOC</strong> 是對特定產區葡萄酒的法律保護，確保酒款來自指定區域，使用規定品種，遵循傳統工藝。</p></div><div class="definition-card"><h5>🛡️ 保護內容</h5><ul><li><strong>地理界限：</strong>嚴格劃定的產區邊界</li><li><strong>葡萄品種：</strong>只能使用指定的品種</li><li><strong>種植方式：</strong>規定的栽培技術</li><li><strong>釀造工藝：</strong>傳統的釀酒方法</li></ul></div><div class="definition-card"><h5>⚖️ 法律地位</h5><p>AOC 受法國法律嚴格保護，違法使用將面臨重罰。這確保了消費者的權益和產區的聲譽。</p></div></div></div><div class="concept-section history"><h4>📜 歷史發展脈絡</h4><div class="timeline"><div class="timeline-item"><h5>1935年</h5><p>法國建立 AOC 制度，成為世界首個原產地保護系統</p></div><div class="timeline-item"><h5>1950s</h5><p>制度逐步完善，涵蓋更多產區和品類</p></div><div class="timeline-item"><h5>1992年</h5><p>歐盟採用類似制度，推廣至整個歐洲</p></div><div class="timeline-item"><h5>現在</h5><p>成為全球葡萄酒品質認證的標桿</p></div></div></div><div class="concept-section benefits"><h4>🎁 AOC 系統優勢</h4><div class="benefits-grid"><div class="benefit-item consumer"><h5>👥 對消費者</h5><ul><li>品質保證：確保酒款符合傳統標準</li><li>真實性：避免假冒偽劣產品</li><li>價值認知：幫助理解價格差異</li></ul></div><div class="benefit-item producer"><h5>🍇 對生產者</h5><ul><li>品牌保護：維護產區聲譽</li><li>公平競爭：統一的品質標準</li><li>傳統傳承：保持工藝傳統</li></ul></div><div class="benefit-item industry"><h5>🏭 對產業</h5><ul><li>秩序維護：規範市場競爭</li><li>品質提升：促進整體水準</li><li>國際認可：建立全球信譽</li></ul></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: 'AOC系統的主要作用是什麼？',
          options: ['提高酒款價格', '保護原產地和品質標準', '限制產量', '統一包裝設計'], 
          correct: 1,
          explanation: 'AOC系統的核心作用是保護原產地命名，確保葡萄酒來自特定產區並符合該產區的品質標準，維護消費者權益和產區聲譽。'
        }
      },
      {
        title: 'AOC vs IGP：制度速懂',
        highlights: [
          { id: 1, icon: '⚖️', title: '層級差異', content: 'AOC（嚴格）與 IGP（較彈性）各有定位' }
        ],
        content: '<table class="compare-table"><thead><tr><th>面向</th><th>AOC</th><th>IGP</th></tr></thead><tbody><tr><td><strong>地理範圍</strong></td><td>嚴格界定的小範圍</td><td>較大與彈性</td></tr><tr><td><strong>品種規定</strong></td><td>指定品種</td><td>較為彈性</td></tr><tr><td><strong>釀造規範</strong></td><td>嚴格</td><td>較寬鬆</td></tr><tr><td><strong>風格穩定</strong></td><td>高（典型性）</td><td>變化較多（創新）</td></tr><tr><td><strong>價格定位</strong></td><td>從中價到高端</td><td>入門到中價</td></tr></tbody></table><div class="misconception-card"><strong>常見誤解：</strong>IGP=差。<br>事實：IGP 允許創新表達，性價比與可玩性常很高。</div>',
        hasMap: false
      },
      {
        title: '讀酒標：一步步帶你看',
        highlights: [
          { id: 1, icon: '🪪', title: '解碼關鍵', content: 'AOC → 生產者 → 年份 → 分級 → 酒精度' }
        ],
        content: '<div class="steps"><div class="step"><strong>1. AOC：</strong>定位風格與層級。</div><div class="step"><strong>2. 生產者：</strong>酒莊名與裝瓶資訊。</div><div class="step"><strong>3. 年份：</strong>比對年份表現。</div><div class="step"><strong>4. 分級：</strong>有無 1855/格拉夫/聖愛美濃等。</div><div class="step"><strong>5. 酒精度/容量：</strong>強度與飲用場合。</div></div><div class="callout"><strong>小技巧：</strong>看到“Mis en bouteille au château”通常代表品質控管更完整。</div>',
        hasMap: false,
        quiz: {
          question: '以下何者不是酒標閱讀的首要步驟？',
          options: ['確認 AOC 層級', '查看生產者/裝瓶資訊', '先比較市場價格', '確認年份表現'],
          correct: 2,
          explanation: '選酒價比固然重要，但閱讀酒標時應先判斷 AOC、酒莊與年份等核心訊息。'
        }
      },
      {
        title: '波爾多AOC階層系統',
        highlights: [
          { id: 1, icon: '🏔️', title: '金字塔結構', content: '從區域級到村莊級的完整階層體系' },
          { id: 2, icon: '📈', title: '品質遞增', content: '階層越高，品質要求越嚴格，價格也越高' }
        ],
        content: '<div class="bordeaux-aoc-hierarchy"><p class="lead-text">波爾多的 AOC 系統呈現完整的金字塔結構，階層越高，品質要求越嚴格。</p><div class="hierarchy-pyramid"><div class="pyramid-level level-4 communal"><div class="level-header"><h4>🏆 村莊級 AOC</h4><p class="level-subtitle">Appellations Communales</p></div><div class="level-content"><div class="examples-section"><h5>🌟 代表產區</h5><div class="aoc-examples"><div class="aoc-example left-bank"><h6>左岸村莊</h6><ul><li><strong>Margaux AOC</strong> - 瑪歌</li><li><strong>Pauillac AOC</strong> - 波雅克</li><li><strong>Saint-Julien AOC</strong> - 聖朱利安</li><li><strong>Saint-Estèphe AOC</strong> - 聖愛斯泰夫</li></ul></div><div class="aoc-example right-bank"><h6>右岸村莊</h6><ul><li><strong>Saint-Émilion AOC</strong> - 聖愛美濃</li><li><strong>Pomerol AOC</strong> - 波美侯</li><li><strong>Fronsac AOC</strong> - 弗龍薩克</li></ul></div></div></div><div class="characteristics-section"><h5>📋 特徵標準</h5><ul><li><strong>面積：</strong>最小，通常幾百到幾千公頃</li><li><strong>品質：</strong>最高，嚴格的風土要求</li><li><strong>價格：</strong>最昂貴，反映稀缺性</li><li><strong>風格：</strong>最具特色，體現獨特風土</li></ul></div></div></div><div class="pyramid-level level-3 sub-regional"><div class="level-header"><h4>🗺️ 次區域級 AOC</h4><p class="level-subtitle">Appellations Sous-Régionales</p></div><div class="level-content"><div class="examples-section"><h5>🌟 代表產區</h5><div class="aoc-examples"><div class="aoc-example"><ul><li><strong>Médoc AOC</strong> - 梅多克</li><li><strong>Haut-Médoc AOC</strong> - 上梅多克</li><li><strong>Graves AOC</strong> - 格拉夫</li><li><strong>Pessac-Léognan AOC</strong> - 佩薩克-雷奧良</li></ul></div></div></div><div class="characteristics-section"><h5>📋 特徵標準</h5><ul><li><strong>面積：</strong>中等，涵蓋多個村莊</li><li><strong>品質：</strong>良好，有明確風土特色</li><li><strong>價格：</strong>中高價位，性價比較好</li><li><strong>風格：</strong>穩定，反映子產區特色</li></ul></div></div></div><div class="pyramid-level level-2 super-regional"><div class="level-header"><h4>⭐ 優質區域級 AOC</h4><p class="level-subtitle">Appellation Supérieure</p></div><div class="level-content"><div class="examples-section"><h5>🌟 代表產區</h5><div class="aoc-examples"><div class="aoc-example"><ul><li><strong>Bordeaux Supérieur AOC</strong></li></ul></div></div></div><div class="characteristics-section"><h5>📋 特徵標準</h5><ul><li><strong>面積：</strong>大，整個波爾多產區</li><li><strong>品質：</strong>高於基本級，更嚴格要求</li><li><strong>價格：</strong>中等，日常消費首選</li><li><strong>風格：</strong>一致性較好</li></ul></div></div></div><div class="pyramid-level level-1 regional"><div class="level-header"><h4>🌍 區域級 AOC</h4><p class="level-subtitle">Appellation Régionale</p></div><div class="level-content"><div class="examples-section"><h5>🌟 代表產區</h5><div class="aoc-examples"><div class="aoc-example"><ul><li><strong>Bordeaux AOC</strong> - 波爾多</li><li><strong>Bordeaux Rosé AOC</strong> - 波爾多粉紅酒</li><li><strong>Bordeaux Blanc AOC</strong> - 波爾多白酒</li></ul></div></div></div><div class="characteristics-section"><h5>📋 特徵標準</h5><ul><li><strong>面積：</strong>最大，整個產區</li><li><strong>品質：</strong>基本保證，入門級選擇</li><li><strong>價格：</strong>最親民，日常飲用</li><li><strong>風格：</strong>經典波爾多風格</li></ul></div></div></div></div><div class="hierarchy-summary"><h4>💡 選擇指南</h4><div class="selection-tips"><div class="tip-card"><h5>🎯 如何選擇</h5><ul><li><strong>入門嘗試：</strong>選擇 Bordeaux AOC</li><li><strong>品質升級：</strong>選擇 Bordeaux Supérieur</li><li><strong>深度體驗：</strong>選擇次區域級如 Médoc</li><li><strong>頂級享受：</strong>選擇村莊級如 Pauillac</li></ul></div></div></div></div>',
        hasMap: true, mapFocus: 'aoc-hierarchy',
        quiz: {
          question: '在波爾多AOC階層中，哪個級別的品質要求最嚴格？',
          options: ['Bordeaux AOC', 'Bordeaux Supérieur AOC', 'Médoc AOC', 'Pauillac AOC'], 
          correct: 3,
          explanation: 'Pauillac AOC 是村莊級AOC，位於階層系統的頂端，有最嚴格的品質要求和最小的產區範圍。'
        }
      },
      {
        title: '酒標法規資訊解讀',
        highlights: [
          { id: 1, icon: '🔍', title: '關鍵資訊', content: '酒標上的法規資訊是選酒的重要依據' },
          { id: 2, icon: '📜', title: '法律要求', content: '某些資訊是法律規定必須標示的' }
        ],
        content: '<div class="label-regulations"><p class="lead-text">理解酒標上的法規資訊，是成為葡萄酒專家的重要技能。</p><div class="label-analysis"><div class="regulation-section mandatory-info"><h4>📋 必須標示資訊</h4><div class="mandatory-grid"><div class="info-category aoc-info"><h5>🗺️ AOC 標示</h5><div class="info-details"><p><strong>格式：</strong>"Appellation [產區名] Contrôlée"</p><p><strong>位置：</strong>酒標正面顯著位置</p><p><strong>意義：</strong>確認產區級別和品質保證</p><div class="examples"><h6>範例</h6><ul><li>Appellation Bordeaux Contrôlée</li><li>Appellation Pauillac Contrôlée</li><li>Appellation Saint-Émilion Contrôlée</li></ul></div></div></div><div class="info-category producer-info"><h5>🏭 生產者資訊</h5><div class="info-details"><p><strong>包含：</strong>酒莊名稱、地址、裝瓶者</p><p><strong>格式：</strong>"Mis en bouteille au château"（酒莊裝瓶）</p><p><strong>意義：</strong>品質控制和責任追溯</p><div class="bottling-types"><h6>裝瓶類型</h6><ul><li><strong>酒莊裝瓶：</strong>品質最高保證</li><li><strong>產區裝瓶：</strong>當地裝瓶</li><li><strong>商家裝瓶：</strong>第三方裝瓶</li></ul></div></div></div><div class="info-category volume-alcohol"><h5>📊 容量與酒精度</h5><div class="info-details"><p><strong>容量：</strong>通常為 750ml</p><p><strong>酒精度：</strong>以 % vol 表示</p><p><strong>意義：</strong>了解酒款強度和規格</p><div class="typical-ranges"><h6>典型範圍</h6><ul><li><strong>紅酒：</strong>12.5-14.5% vol</li><li><strong>白酒：</strong>11.5-13.5% vol</li><li><strong>甜酒：</strong>13-14% vol</li></ul></div></div></div></div></div><div class="regulation-section optional-info"><h4>📝 可選標示資訊</h4><div class="optional-grid"><div class="info-item vintage"><h5>📅 年份標示</h5><div class="vintage-details"><p><strong>要求：</strong>至少85%葡萄來自標示年份</p><p><strong>重要性：</strong>反映氣候條件和品質</p><div class="vintage-reading"><h6>年份解讀</h6><ul><li><strong>優秀年份：</strong>2010, 2016, 2019, 2020</li><li><strong>普通年份：</strong>2011, 2013, 2017</li><li><strong>挑戰年份：</strong>2012, 2014</li></ul></div></div></div><div class="info-item classification"><h5>🏆 分級標示</h5><div class="classification-details"><p><strong>1855分級：</strong>一級到五級酒莊</p><p><strong>格拉夫分級：</strong>Cru Classé</p><p><strong>聖愛美濃：</strong>Premier Grand Cru Classé</p><div class="classification-benefits"><h6>分級價值</h6><ul><li>品質保證的額外認證</li><li>投資收藏的參考指標</li><li>價格合理性的判斷依據</li></ul></div></div></div><div class="info-item organic"><h5>🌱 有機認證</h5><div class="organic-details"><p><strong>標示：</strong>AB (Agriculture Biologique)</p><p><strong>意義：</strong>有機種植認證</p><p><strong>趨勢：</strong>越來越多酒莊獲得認證</p></div></div></div></div><div class="regulation-section reading-guide"><h4>🎯 酒標解讀實戰</h4><div class="reading-steps"><div class="step-item step-1"><h5>第一步：確認AOC</h5><p>找到"Appellation ... Contrôlée"字樣，確認產區級別</p></div><div class="step-item step-2"><h5>第二步：查看生產者</h5><p>注意酒莊名稱和"Mis en bouteille au château"</p></div><div class="step-item step-3"><h5>第三步：檢查年份</h5><p>確認年份標示，參考年份品質資訊</p></div><div class="step-item step-4"><h5>第四步：注意分級</h5><p>尋找可能的分級標示，如"Grand Cru Classé"</p></div><div class="step-item step-5"><h5>第五步：綜合判斷</h5><p>結合所有資訊，評估價格合理性</p></div></div><div class="common-mistakes"><h5>⚠️ 常見誤區</h5><ul><li><strong>只看價格：</strong>忽略AOC級別差異</li><li><strong>迷信年份：</strong>不是所有年份都適合陳年</li><li><strong>忽視裝瓶：</strong>酒莊裝瓶品質更可靠</li><li><strong>混淆分級：</strong>不同產區的分級系統不同</li></ul></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '酒標上"Mis en bouteille au château"表示什麼？',
          options: ['酒莊名稱', '酒莊裝瓶', '生產年份', '葡萄品種'], 
          correct: 1,
          explanation: '"Mis en bouteille au château"表示酒莊裝瓶，意味著從葡萄種植到裝瓶的全過程都在酒莊控制下完成，通常代表更高的品質保證。'
        }
      }
    ]
  } else if (props.lessonId === 'l1-5') {
    return [
      { type: 'title' },
      {
        title: '波爾多紅酒 - 經典與傳統',
        highlights: [
          { id: 1, icon: '🍷', title: '產量占比', content: '紅酒占波爾多總產量的85%以上，是絕對主力' },
          { id: 2, icon: '👑', title: '世界地位', content: '波爾多紅酒是全球最知名的葡萄酒類型之一' }
        ],
        content: '<div class="red-wine-overview"><p class="lead-text">波爾多紅酒 <span class="term-note">(Bordeaux Rouge)</span> 是該產區的代表作品，以混釀藝術聞名於世。</p><div class="wine-characteristics"><div class="char-section primary-grapes"><h4>🍇 主要葡萄品種</h4><div class="grape-composition"><div class="grape-item"><div class="grape-icon">🍇</div><div class="grape-info"><h5>Cabernet Sauvignon</h5><p>提供結構與陳年潛力</p></div></div><div class="grape-item"><div class="grape-icon">🍇</div><div class="grape-info"><h5>Merlot</h5><p>增加柔順度與果香</p></div></div><div class="grape-item"><div class="grape-icon">🍇</div><div class="grape-info"><h5>Cabernet Franc</h5><p>貢獻香氣複雜度</p></div></div></div></div><div class="char-section production-process"><h4>🏭 釀造工藝特色</h4><div class="process-steps"><div class="step-item"><h5>1️⃣ 採收</h5><p>手工採摘，嚴格篩選成熟度</p></div><div class="step-item"><h5>2️⃣ 發酵</h5><p>溫控發酵，浸皮提取顏色與單寧</p></div><div class="step-item"><h5>3️⃣ 調配</h5><p>精心調配不同品種與地塊</p></div><div class="step-item"><h5>4️⃣ 陳年</h5><p>橡木桶陳年12-24個月</p></div></div></div><div class="char-section style-spectrum"><h4>🎨 風格光譜</h4><div class="style-range"><div class="style-point"><h5>清淡型</h5><p>果香為主，單寧柔和<br>適合年輕時飲用</p></div><div class="style-point"><h5>中等型</h5><p>平衡的果香與結構<br>中期陳年潛力</p></div><div class="style-point"><h5>濃郁型</h5><p>深邃複雜，高單寧<br>長期陳年潛力</p></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '波爾多紅酒的主要釀造特色是什麼？',
          options: ['單一品種釀造', '混釀多個品種', '不使用橡木桶', '只在鋼槽中發酵'], 
          correct: 1,
          explanation: '波爾多紅酒的最大特色是混釀 (Blend)，通常使用 Cabernet Sauvignon、Merlot、Cabernet Franc 等多個品種調配。'
        }
      },
      {
        title: '波爾多白酒 - 優雅與多樣',
        highlights: [
          { id: 1, icon: '🥂', title: '風格多元', content: '從清新干白到豐富甜白，風格極其多樣' },
          { id: 2, icon: '🌟', title: '品質卓越', content: '格拉夫白酒和蘇玳甜酒享有世界聲譽' }
        ],
        content: '<div class="white-wine-overview"><p class="lead-text">波爾多白酒 <span class="term-note">(Bordeaux Blanc)</span> 雖然產量較少，但品質卓越，風格多樣。</p><div class="white-wine-types"><div class="wine-type dry-white"><h4>🍃 干白酒 <span class="term-note">(Sec)</span></h4><div class="type-details"><div class="grape-blend"><h5>🍇 主要品種</h5><ul><li><strong>Sauvignon Blanc (60-80%)：</strong>提供清新酸度與草本香氣</li><li><strong>Sémillon (20-40%)：</strong>增加酒體與陳年潛力</li><li><strong>Muscadelle (少量)：</strong>增添花香與複雜度</li></ul></div><div class="tasting-profile"><h5>🍷 品鑑特徵</h5><div class="profile-details"><p><strong>顏色：</strong>淺金黃色，清澈透亮</p><p><strong>香氣：</strong>柑橘、青草、礦物質</p><p><strong>口感：</strong>清新爽脆，中等酒體</p><p><strong>適飲溫度：</strong>8-10°C</p></div></div><div class="food-pairing"><h5>🍽️ 搭配建議</h5><p>海鮮、白肉、山羊乳酪、亞洲料理</p></div></div></div><div class="wine-type sweet-white"><h4>🍯 甜白酒 <span class="term-note">(Moelleux/Liquoreux)</span></h4><div class="type-details"><div class="production-method"><h5>🦠 貴腐酒工藝</h5><p>以<strong>蘇玳 (Sauternes)</strong>為代表，利用貴腐菌 <span class="term-note">(Botrytis Cinerea)</span> 濃縮葡萄糖分</p><div class="botrytis-process"><div class="process-step"><span>🍇</span><p>貴腐菌侵染成熟葡萄</p></div><div class="process-step"><span>💧</span><p>水分蒸發，糖分濃縮</p></div><div class="process-step"><span>🍯</span><p>形成蜂蜜般的甜美風味</p></div></div></div><div class="tasting-profile"><h5>🍷 品鑑特徵</h5><div class="profile-details"><p><strong>顏色：</strong>金黃至琥珀色</p><p><strong>香氣：</strong>蜂蜜、杏桃、橙皮</p><p><strong>口感：</strong>甜美豐腴，酸甜平衡</p><p><strong>陳年：</strong>可陳年數十年</p></div></div><div class="food-pairing"><h5>🍽️ 搭配建議</h5><p>鵝肝、藍紋乳酪、果醬甜點、單獨品飲</p></div></div></div></div></div>',
        hasMap: true, mapFocus: 'white-wine-regions',
        quiz: {
          question: '蘇玳 (Sauternes) 甜酒的釀造關鍵是什麼？',
          options: ['人工添加糖分', '貴腐菌濃縮糖分', '延長發酵時間', '橡木桶陳年'], 
          correct: 1,
          explanation: '蘇玳甜酒的關鍵是貴腐菌 (Botrytis Cinerea) 的自然作用，它會侵染葡萄並蒸發水分，濃縮糖分和風味。'
        }
      },
      {
        title: '酒標解讀與選酒指南',
        highlights: [
          { id: 1, icon: '🏷️', title: '資訊密碼', content: '酒標包含產區、年份、品質等級等重要資訊' },
          { id: 2, icon: '🎯', title: '選酒智慧', content: '掌握酒標解讀技巧，選出適合的波爾多酒款' }
        ],
        content: '<div class="label-guide-overview"><p class="lead-text">波爾多酒標 <span class="term-note">(Étiquette)</span> 是了解酒款品質與特色的重要工具。</p><div class="label-sections"><div class="label-section essential-info"><h4>📋 必備資訊解讀</h4><div class="info-grid"><div class="info-item appellation"><h5>🗺️ 產區標示</h5><div class="appellation-hierarchy"><div class="hierarchy-level"><span class="level-tag regional">區域級</span><p><strong>Bordeaux AOC</strong><br>整個波爾多產區</p></div><div class="hierarchy-level"><span class="level-tag sub-regional">次區域級</span><p><strong>Médoc AOC</strong><br>特定子產區</p></div><div class="hierarchy-level"><span class="level-tag communal">村莊級</span><p><strong>Pauillac AOC</strong><br>具體村莊產區</p></div></div></div><div class="info-item vintage"><h5>📅 年份意義</h5><div class="vintage-guide"><p><strong>好年份指標：</strong></p><ul><li>氣候條件理想</li><li>葡萄成熟度佳</li><li>酒款品質更高</li><li>陳年潛力更強</li></ul><p><strong>近期優秀年份：</strong>2010, 2016, 2019, 2020</p></div></div><div class="info-item alcohol"><h5>🌡️ 酒精度</h5><div class="alcohol-guide"><p><strong>波爾多典型酒精度：</strong></p><ul><li><strong>紅酒：</strong>12.5-14.5%</li><li><strong>干白：</strong>12-13.5%</li><li><strong>甜白：</strong>13-14%</li></ul></div></div><div class="info-item classification"><h5>🏆 品質分級</h5><div class="classification-guide"><div class="class-item"><h6>1855分級</h6><p>左岸頂級酒莊分級</p></div><div class="class-item"><h6>格拉夫分級</h6><p>格拉夫產區分級</p></div><div class="class-item"><h6>聖愛美濃分級</h6><p>右岸產區分級</p></div></div></div></div></div><div class="label-section selection-guide"><h4>🎯 選酒實戰指南</h4><div class="selection-scenarios"><div class="scenario daily-drinking"><h5>🏠 日常飲用</h5><div class="scenario-details"><p><strong>推薦類型：</strong>Bordeaux AOC 或 Bordeaux Supérieur</p><p><strong>價格範圍：</strong>適中，性價比高</p><p><strong>風格特點：</strong>平衡易飲，不過於複雜</p><p><strong>陳年需求：</strong>年輕時即可享用</p></div></div><div class="scenario special-occasions"><h5>🎉 特殊場合</h5><div class="scenario-details"><p><strong>推薦類型：</strong>村莊級 AOC 或分級酒莊</p><p><strong>價格範圍：</strong>較高，品質保證</p><p><strong>風格特點：</strong>複雜深邃，層次豐富</p><p><strong>陳年需求：</strong>可能需要醒酒或陳年</p></div></div><div class="scenario investment"><h5>💎 收藏投資</h5><div class="scenario-details"><p><strong>推薦類型：</strong>一級酒莊或頂級分級</p><p><strong>價格範圍：</strong>高端，升值潛力</p><p><strong>風格特點：</strong>卓越品質，獨特風土</p><p><strong>陳年需求：</strong>長期陳年潛力</p></div></div></div></div></div><div class="buying-tips"><h4>💡 購買小貼士</h4><div class="tips-grid"><div class="tip-item"><h5>📦 保存條件</h5><p>恆溫恆濕，避光存放</p></div><div class="tip-item"><h5>🛒 購買渠道</h5><p>選擇信譽良好的酒商</p></div><div class="tip-item"><h5>💰 價格參考</h5><p>了解市場行情，避免過度溢價</p></div><div class="tip-item"><h5>🍷 適飲時機</h5><p>根據年份和風格判斷最佳飲用時間</p></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '波爾多酒標上的 "AOC" 標示代表什麼？',
          options: ['酒精濃度', '原產地控制命名', '年份標示', '酒莊名稱'], 
          correct: 1,
          explanation: 'AOC (Appellation d\'Origine Contrôlée) 是法國的原產地控制命名制度，保證酒款來自特定產區並符合該產區的品質標準。'
        }
      }
    ]
  } else if (props.lessonId === 'l1-4') {
    return [
      { type: 'title' },
      {
        title: '地理位置 - 河流劃分的兩個世界',
        highlights: [
          { id: 1, icon: '🏞️', title: '天然分界', content: '加龍河與多爾多涅河將波爾多分為左岸、右岸兩大區域' },
          { id: 2, icon: '🗺️', title: '風土差異', content: '地理位置決定了兩岸截然不同的土壤與氣候條件' }
        ],
        content: '<div class="banks-geography"><p class="lead-text">波爾多獨特的河流系統創造了左岸 <span class="term-note">(Left Bank)</span> 與右岸 <span class="term-note">(Right Bank)</span> 兩個截然不同的葡萄酒世界。</p><div class="geography-overview"><div class="bank-section left-bank"><h4>🏛️ 左岸 <span class="term-note">(Rive Gauche)</span></h4><div class="bank-details"><div class="location-info"><h5>📍 地理位置</h5><ul><li><strong>範圍：</strong>加龍河 <span class="term-note">(Garonne)</span> 左岸</li><li><strong>主要產區：</strong>梅多克 <span class="term-note">(Médoc)</span>、格拉夫 <span class="term-note">(Graves)</span></li><li><strong>著名村莊：</strong>瑪歌、聖朱利安、波雅克、聖愛斯泰夫</li><li><strong>距離大西洋：</strong>較近，受海洋影響更明顯</li></ul></div><div class="terrain-info"><h5>🏔️ 地形特徵</h5><ul><li><strong>地勢：</strong>相對平坦，緩坡丘陵</li><li><strong>海拔：</strong>一般10-40米</li><li><strong>朝向：</strong>大多面向河流，排水良好</li></ul></div></div></div><div class="bank-section right-bank"><h4>🏰 右岸 <span class="term-note">(Rive Droite)</span></h4><div class="bank-details"><div class="location-info"><h5>📍 地理位置</h5><ul><li><strong>範圍：</strong>多爾多涅河 <span class="term-note">(Dordogne)</span> 右岸</li><li><strong>主要產區：</strong>聖愛美濃 <span class="term-note">(Saint-Émilion)</span>、波美侯 <span class="term-note">(Pomerol)</span></li><li><strong>著名村莊：</strong>聖愛美濃、波美侯、弗龍薩克</li><li><strong>內陸位置：</strong>更受大陸性氣候影響</li></ul></div><div class="terrain-info"><h5>🏔️ 地形特徵</h5><ul><li><strong>地勢：</strong>起伏較大，陡峭斜坡</li><li><strong>海拔：</strong>一般20-100米</li><li><strong>朝向：</strong>多樣化坡面，微氣候豐富</li></ul></div></div></div></div></div>',
        hasMap: true, mapFocus: 'bank-geography',
        quiz: {
          question: '波爾多左岸主要位於哪條河流的沿岸？',
          options: ['多爾多涅河 (Dordogne)', '加龍河 (Garonne)', '吉隆德河 (Gironde)', '塞納河 (Seine)'], 
          correct: 1,
          explanation: '波爾多左岸位於加龍河 (Garonne) 的左岸，包含著名的梅多克 (Médoc) 和格拉夫 (Graves) 產區。'
        }
      },
      {
        title: '土壤差異 - 風土之源',
        highlights: [
          { id: 1, icon: '🏗️', title: '左岸礫石', content: '加龍河沖積而成的礫石土壤，排水性極佳' },
          { id: 2, icon: '🏺', title: '右岸粘土', content: '石灰岩基底上的粘土，保水性強，營養豐富' }
        ],
        content: '<div class="soil-analysis"><p class="lead-text">土壤是風土 <span class="term-note">(Terroir)</span> 的核心要素，左右岸截然不同的土壤特性造就了各自獨特的葡萄酒風格。</p><div class="soil-comparison"><div class="soil-type left-bank-soil"><h4>🏗️ 左岸土壤特徵</h4><div class="soil-profile"><div class="soil-layer"><h5>🔵 礫石層 <span class="term-note">(Gravel)</span></h5><div class="layer-details"><p><strong>成因：</strong>冰河時期加龍河沖積形成</p><p><strong>組成：</strong>石英、燧石、砂岩礫石</p><p><strong>大小：</strong>從豌豆到雞蛋大小不等</p><p><strong>深度：</strong>表層30-60厘米</p></div></div><div class="soil-benefits"><h5>🌟 土壤優勢</h5><ul><li><strong>排水性：</strong>優異的排水能力，避免根部積水</li><li><strong>蓄熱性：</strong>白天吸收熱量，夜晚緩慢釋放</li><li><strong>反射性：</strong>增加葡萄接受的光照</li><li><strong>貧瘠性：</strong>迫使葡萄根系深扎，濃縮風味</li></ul></div><div class="grape-adaptation"><h5>🍇 適宜品種</h5><p><strong>Cabernet Sauvignon</strong> 在礫石土中表現最佳，晚熟期的額外熱量幫助完全成熟</p></div></div></div><div class="soil-type right-bank-soil"><h4>🏺 右岸土壤特徵</h4><div class="soil-profile"><div class="soil-layer"><h5>🟤 粘土層 <span class="term-note">(Clay)</span></h5><div class="layer-details"><p><strong>成因：</strong>古代海洋沉積物</p><p><strong>基底：</strong>石灰岩 <span class="term-note">(Limestone)</span> 母岩</p><p><strong>質地：</strong>細膩粘重，富含礦物質</p><p><strong>顏色：</strong>藍色粘土最為珍貴</p></div></div><div class="soil-benefits"><h5>🌟 土壤優勢</h5><ul><li><strong>保水性：</strong>乾旱期提供充足水分</li><li><strong>營養性：</strong>豐富的礦物質和有機質</li><li><strong>溫度調節：</strong>粘土的保溫特性</li><li><strong>複雜性：</strong>石灰岩帶來優雅的礦物質風味</li></ul></div><div class="grape-adaptation"><h5>🍇 適宜品種</h5><p><strong>Merlot</strong> 在粘土中茁壯成長，早熟特性與土壤保水性完美配合</p></div></div></div></div></div>',
        hasMap: true, mapFocus: 'soil-types',
        quiz: {
          question: '左岸的礫石土壤主要適合種植哪個葡萄品種？',
          options: ['Merlot', 'Cabernet Sauvignon', 'Pinot Noir', 'Syrah'], 
          correct: 1,
          explanation: 'Cabernet Sauvignon 晚熟特性需要額外熱量，左岸礫石土壤的蓄熱性和排水性為其提供了理想的生長條件。'
        }
      },
      {
        title: '酒款風格對比 - 兩岸的性格',
        highlights: [
          { id: 1, icon: '💪', title: '左岸風格', content: '結構強勁，單寧豐富，需要時間陳年展現潛力' },
          { id: 2, icon: '🌸', title: '右岸風格', content: '柔順優雅，果香豐富，相對年輕時即可享用' }
        ],
        content: '<div class="style-comparison"><p class="lead-text">土壤與品種的差異造就了左岸與右岸截然不同的酒款風格與個性。</p><div class="style-profiles"><div class="bank-style left-bank-style"><h4>⚔️ 左岸風格特徵</h4><div class="style-analysis"><div class="tasting-profile"><h5>🍷 品鑑特色</h5><div class="profile-grid"><div class="profile-item"><h6>顏色</h6><p>深邃的紫紅色，濃郁不透光</p></div><div class="profile-item"><h6>香氣</h6><p>黑醋栗、雪松、煙草、香草</p></div><div class="profile-item"><h6>口感</h6><p>飽滿酒體，高單寧，強勁結構</p></div><div class="profile-item"><h6>餘韻</h6><p>悠長持久，層次豐富</p></div></div></div><div class="aging-potential"><h5>⏳ 陳年發展</h5><ul><li><strong>年輕期 (1-5年)：</strong>單寧緊澀，需要醒酒</li><li><strong>成熟期 (8-15年)：</strong>結構軟化，香氣複雜化</li><li><strong>巔峰期 (15-30年)：</strong>達到完美平衡</li><li><strong>陳年潛力：</strong>頂級酒款可陳年50年以上</li></ul></div><div class="food-pairing"><h5>🍽️ 餐酒搭配</h5><p>適合搭配<strong>紅肉、野味、成熟乳酪</strong>等重口味食物</p></div></div></div><div class="bank-style right-bank-style"><h4>🌺 右岸風格特徵</h4><div class="style-analysis"><div class="tasting-profile"><h5>🍷 品鑑特色</h5><div class="profile-grid"><div class="profile-item"><h6>顏色</h6><p>寶石紅色，透亮有光澤</p></div><div class="profile-item"><h6>香氣</h6><p>紅莓、櫻桃、紫羅蘭、香料</p></div><div class="profile-item"><h6>口感</h6><p>柔順圓潤，絲滑單寧，優雅平衡</p></div><div class="profile-item"><h6>餘韻</h6><p>溫和怡人，花果香持續</p></div></div></div><div class="aging-potential"><h5>⏳ 陳年發展</h5><ul><li><strong>年輕期 (1-3年)：</strong>果香鮮美，已可享用</li><li><strong>成熟期 (5-12年)：</strong>達到最佳狀態</li><li><strong>巔峰期 (10-20年)：</strong>複雜度與優雅並存</li><li><strong>陳年潛力：</strong>頂級酒款可陳年30年以上</li></ul></div><div class="food-pairing"><h5>🍽️ 餐酒搭配</h5><p>適合搭配<strong>烤禽類、小牛肉、軟質乳酪</strong>等精緻料理</p></div></div></div></div><div class="comparison-summary"><h4>🎯 選擇指南</h4><div class="selection-guide"><div class="guide-item"><h5>選擇左岸，如果你...</h5><ul><li>喜歡結構感強的紅酒</li><li>享受陳年酒的複雜性</li><li>偏愛濃郁的黑果風味</li><li>有耐心等待酒款成熟</li></ul></div><div class="guide-item"><h5>選擇右岸，如果你...</h5><ul><li>偏愛柔順易飲的風格</li><li>喜歡年輕時的果香</li><li>追求優雅的口感平衡</li><li>希望較快享用美酒</li></ul></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '以下哪個描述最符合波爾多右岸酒款的特徵？',
          options: ['結構強勁，需要長時間陳年', '柔順優雅，相對年輕時即可享用', '單寧厚重，適合搭配重口味料理', '顏色深邃，香氣以黑果為主'], 
          correct: 1,
          explanation: '波爾多右岸以 Merlot 為主導，酒款風格柔順優雅，單寧絲滑，相對於左岸酒款在年輕時即具有很好的適飲性。'
        }
      },
      {
        title: '左右岸速覽對照表',
        highlights: [
          { id: 1, icon: '📊', title: '一眼掌握', content: '品種、土壤、風格、AOC與價格帶對比' }
        ],
        content: '<div class="compare-block"><table class="compare-table"><thead><tr><th>面向</th><th>左岸 (Left Bank)</th><th>右岸 (Right Bank)</th></tr></thead><tbody><tr><td><strong>主導品種</strong></td><td>Cabernet Sauvignon 為主</td><td>Merlot 為主，Cabernet Franc 輔</td></tr><tr><td><strong>典型土壤</strong></td><td>礫石（排水、蓄熱）</td><td>黏土/石灰岩（保水、礦物）</td></tr><tr><td><strong>風格關鍵詞</strong></td><td>力量、結構、陳年潛力</td><td>柔順、優雅、易飲性</td></tr><tr><td><strong>代表 AOC</strong></td><td>Margaux、Pauillac、St-Julien、St-Estèphe</td><td>St-Émilion、Pomerol、Fronsac</td></tr><tr><td><strong>價格帶（概略）</strong></td><td>高端集中於一二級酒莊；也有中價位</td><td>頂級（如 Pétrus）到中高價位並存</td></tr></tbody></table><div class="info-card"><strong>提示：</strong>選左岸看結構與潛力、選右岸看口感與親和度；餐配與適飲期也隨之一致。</div></div>',
        hasMap: false,
        quiz: {
          question: '若偏好年輕即可享用且口感柔順的風格，較可能選擇哪一岸？',
          options: ['左岸', '右岸', '皆可', '需看年份無規律'],
          correct: 1,
          explanation: '右岸以 Merlot 為主導，口感更柔順、親和，年輕時即可享用。'
        }
      },
      {
        title: '進階測驗：風格線索判讀',
        highlights: [
          { id: 1, icon: '🧪', title: '風味與結構', content: '用感官線索判斷左右岸' }
        ],
        content: '<div class="info-card"><strong>說明：</strong>依據風味與結構線索判斷酒款較可能來自哪一岸。</div>',
        hasMap: false,
        quiz: {
          question: '以下哪組線索更可能對應「左岸」酒款？',
          options: [
            '黑醋栗、雪松、煙草；高單寧、結構強、長期陳年潛力',
            '紅莓、櫻桃、紫羅蘭；絲滑單寧、優雅平衡、年輕適飲'
          ],
          correct: 0,
          explanation: '左岸以 Cabernet Sauvignon 為主，常見黑醋栗、雪松、煙草等風味，單寧與結構更強、具長期陳年潛力；右岸以 Merlot 為主，風格更柔順優雅、年輕適飲。'
        }
      },
      {
        title: '小測驗：左右岸與 AOC 判讀',
        highlights: [
          { id: 1, icon: '🧭', title: '快速檢核', content: '辨識左右岸與代表 AOC 的基礎概念' }
        ],
        content: '<div class="info-card"><strong>說明：</strong>請選出正確的敘述。</div>',
        hasMap: false,
        quiz: {
          question: '以下哪一組 AOC 位於波爾多的右岸？',
          options: ['Margaux 與 Pauillac', 'Saint-Émilion 與 Pomerol', 'Graves 與 Haut-Médoc', 'Saint-Julien 與 Saint-Estèphe'],
          correct: 1,
          explanation: 'Saint-Émilion 與 Pomerol 皆位於右岸；Margaux、Pauillac、Saint-Julien、Saint-Estèphe、Graves 與 Haut-Médoc 都在左岸。'
        }
      }
    ]
  } else if (props.lessonId === 'l1-3') {
    return [
      { type: 'title' },
      {
        title: '波爾多紅葡萄品種 - 經典三劍客',
        highlights: [
          { id: 1, icon: '🍇', title: '三大品種', content: 'Cabernet Sauvignon、Merlot、Cabernet Franc 構成波爾多紅酒的骨幹' },
          { id: 2, icon: '🌟', title: '混釀藝術', content: '各品種相互補充，創造層次豐富的風味' }
        ],
        content: '<div class="grape-overview"><p class="lead-text">波爾多的紅葡萄酒世界聞名，主要得益於三個經典品種的完美融合。</p><div class="grape-varieties"><div class="variety-card cabernet-s"><h4>🍇 卡本內蘇維濃 <span class="term-note">(Cabernet Sauvignon)</span></h4><div class="grape-details"><p><strong>特徵：</strong>厚皮小粒，晚熟品種</p><p><strong>風味：</strong>黑醋栗 <span class="term-note">(Cassis)</span>、雪松、香草</p><p><strong>結構：</strong>高單寧，強勁骨架</p><p><strong>陳年：</strong>優異的陳年潛力</p></div></div><div class="variety-card merlot"><h4>🍇 梅洛 <span class="term-note">(Merlot)</span></h4><div class="grape-details"><p><strong>特徵：</strong>早熟，適應性強</p><p><strong>風味：</strong>李子、櫻桃、巧克力</p><p><strong>結構：</strong>柔順圓潤，單寧溫和</p><p><strong>作用：</strong>為混釀增添柔順感</p></div></div><div class="variety-card cabernet-f"><h4>🍇 卡本內弗朗 <span class="term-note">(Cabernet Franc)</span></h4><div class="grape-details"><p><strong>特徵：</strong>較早熟，香氣濃郁</p><p><strong>風味：</strong>紅醋栗、青椒、香料</p><p><strong>結構：</strong>中等單寧，優雅精緻</p><p><strong>貢獻：</strong>增加複雜度和香氣層次</p></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '哪個葡萄品種被認為是波爾多紅酒的「骨架」，提供強勁的單寧結構？',
          options: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Petit Verdot'], 
          correct: 1,
          explanation: 'Cabernet Sauvignon 以其厚皮和高單寧著稱，為波爾多紅酒提供強勁的骨架和優異的陳年潛力。'
        }
      },
      {
        title: '波爾多白葡萄品種 - 優雅雙璧',
        highlights: [
          { id: 1, icon: '🥂', title: '經典組合', content: 'Sauvignon Blanc 與 Sémillon 創造豐富多樣的白酒風格' },
          { id: 2, icon: '🍯', title: '甜酒之王', content: 'Sémillon 是世界頂級甜酒 Sauternes 的主要品種' }
        ],
  content: '<div class="white-grapes-overview"><p class="lead-text">波爾多的白葡萄酒同樣享有盛譽，主要由兩個互補品種組成。</p><div class="white-varieties"><div class="white-variety-card sauvignon-blanc"><h4>🍃 白蘇維翁 <span class="term-note">(Sauvignon Blanc)</span></h4><div class="grape-profile"><div class="aroma-section"><h5>🌿 香氣特徵</h5><ul><li><strong>草本香氣：</strong>青草、薄荷、蘆筍</li><li><strong>果香：</strong>醋栗、青蘋果、柑橘</li><li><strong>礦物質：</strong>燧石、濕石頭</li></ul></div><div class="style-section"><h5>🍷 酒款風格</h5><ul><li><strong>酸度：</strong>明亮清脆的酸度</li><li><strong>口感：</strong>清新爽口，中等酒體</li><li><strong>陳年：</strong>適宜年輕時飲用</li></ul></div></div></div><div class="white-variety-card semillon"><h4>🍯 賽美蓉 <span class="term-note">(Sémillon)</span></h4><div class="grape-profile"><div class="aroma-section"><h5>🌼 香氣特徵</h5><ul><li><strong>花香：</strong>洋槐花、椴花、蜂蜜</li><li><strong>果香：</strong>蜜桃、梨子、熱帶水果</li><li><strong>陳年香：</strong>堅果、蜂蠟、烤麵包</li></ul></div><div class="style-section"><h5>🍷 酒款貢獻</h5><ul><li><strong>結構：</strong>豐富的酒體和質感</li><li><strong>陳年：</strong>優異的陳年潛力</li><li><strong>甜酒：</strong>易感染貴腐菌</li></ul></div></div></div></div></div>',
        hasMap: false,
        quiz: {
          question: '哪個白葡萄品種是波爾多頂級甜酒 Sauternes 的主要成分？',
          options: ['Sauvignon Blanc', 'Sémillon', 'Muscadelle', 'Chardonnay'], 
          correct: 1,
          explanation: 'Sémillon 因其薄皮特性容易感染貴腐菌 (Botrytis Cinerea)，是製作 Sauternes 等頂級甜酒的主要品種。'
        }
      },
      {
        title: '品種特性與混釀哲學',
        highlights: [
          { id: 1, icon: '🎼', title: '混釀交響樂', content: '每個品種如同樂器，共同演奏出和諧的風味樂章' },
          { id: 2, icon: '⚖️', title: '平衡藝術', content: '酒莊大師通過調配比例創造獨特的酒款風格' }
        ],
        content: '<div class="blending-philosophy"><p class="lead-text">波爾多的混釀哲學 <span class="term-note">(Bordeaux Blend)</span> 體現了法國人對平衡與和諧的極致追求。</p><div class="blending-concepts"><div class="concept-section"><h4>🎯 左岸混釀特色</h4><div class="bank-blend"><div class="blend-composition"><h5>典型比例</h5><div class="blend-chart"><div class="blend-item"><span class="grape-name">Cabernet Sauvignon</span><div class="percentage-bar cab-s" style="width: 60%"><span>60%</span></div></div><div class="blend-item"><span class="grape-name">Merlot</span><div class="percentage-bar merlot" style="width: 30%"><span>30%</span></div></div><div class="blend-item"><span class="grape-name">Cabernet Franc</span><div class="percentage-bar cab-f" style="width: 10%"><span>10%</span></div></div></div></div><div class="blend-character"><h5>風格特徵</h5><ul><li><strong>結構：</strong>強勁有力，單寧豐富</li><li><strong>風味：</strong>黑果主導，香料複雜</li><li><strong>陳年：</strong>需要時間軟化，潛力巨大</li></ul></div></div></div><div class="concept-section"><h4>🎯 右岸混釀特色</h4><div class="bank-blend"><div class="blend-composition"><h5>典型比例</h5><div class="blend-chart"><div class="blend-item"><span class="grape-name">Merlot</span><div class="percentage-bar merlot" style="width: 70%"><span>70%</span></div></div><div class="blend-item"><span class="grape-name">Cabernet Franc</span><div class="percentage-bar cab-f" style="width: 20%"><span>20%</span></div></div><div class="blend-item"><span class="grape-name">Cabernet Sauvignon</span><div class="percentage-bar cab-s" style="width: 10%"><span>10%</span></div></div></div></div><div class="blend-character"><h5>風格特徵</h5><ul><li><strong>結構：</strong>柔順圓潤，單寧絲滑</li><li><strong>風味：</strong>紅果甜美，花香優雅</li><li><strong>適飲：</strong>相對年輕時即可享用</li></ul></div></div></div></div></div>',
        hasMap: true, mapFocus: 'bank-comparison',
        quiz: {
          question: '波爾多左岸紅酒通常以哪個葡萄品種為主導？',
          options: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Petit Verdot'], 
          correct: 1,
          explanation: '波爾多左岸（如 Médoc）以 Cabernet Sauvignon 為主導，通常占混釀的60%或更多，創造強勁有力的酒款風格。'
        }
      }
    ]
  } else if (props.lessonId === 'l1-2') {
    return [
      { type: 'title' },
      {
        title: '波爾多的溫帶海洋性氣候',
        highlights: [
          { id: 1, icon: '🌡️', title: '溫和穩定', content: '年平均溫度13-14°C，溫度變化不劇烈' },
          { id: 2, icon: '☀️', title: '日照充足', content: '年平均日照2000小時，秋季陽光特別重要' }
        ],
        content: '<div class="climate-overview"><p class="lead-text">波爾多享有理想的溫帶海洋性氣候 <span class="term-note">(Oceanic Climate)</span>，這種氣候為葡萄種植提供了得天獨厚的條件。</p><div class="climate-features"><div class="feature-card"><h4>🌡️ 溫度特徵</h4><ul><li><strong>年平均溫度：</strong> 13-14°C</li><li><strong>冬季：</strong> 很少低於0°C</li><li><strong>夏季：</strong> 很少超過30°C</li><li><strong>溫度變化：</strong> 溫和穩定，有利葡萄緩慢成熟</li></ul></div><div class="feature-card"><h4>☀️ 日照條件</h4><ul><li><strong>年平均日照：</strong> 約2000小時</li><li><strong>關鍵期：</strong> 9-10月秋季陽光充足</li><li><strong>作用：</strong> 促進葡萄糖分積累和風味發展</li></ul></div></div></div>',
        hasMap: false,
        quiz: {
          question: '波爾多地區的年平均溫度大約是多少？',
          options: ['10-11°C', '13-14°C', '16-17°C', '19-20°C'], 
          correct: 1,
          explanation: '波爾多的年平均溫度為13-14°C，這是溫帶海洋性氣候的典型特徵，非常適合葡萄生長。'
        }
      },
      {
        title: '河流系統的氣候調節作用',
        highlights: [
          { id: 1, icon: '🌊', title: '天然調溫器', content: '吉隆德河系統起到巨大的溫度調節作用' },
          { id: 2, icon: '💧', title: '濕度平衡', content: '提供適度空氣濕度，有利葡萄健康生長' }
        ],
        content: '<div class="river-climate-effects"><p class="lead-text">吉隆德河 <span class="term-note">(Gironde)</span> 及其支流形成的水體系統，是波爾多氣候穩定的關鍵因素。</p><div class="effects-grid"><div class="effect-section"><h4>🌡️ 溫度調節機制</h4><ul><li><strong>夏季降溫：</strong>水體蒸發帶走熱量，防止極端高溫</li><li><strong>冬季保溫：</strong>水體釋放儲存的熱量，減少霜凍風險</li><li><strong>日夜平衡：</strong>水體熱慣性減緩日夜溫差</li></ul></div><div class="effect-section"><h4>💧 濕度調節效應</h4><ul><li><strong>生長期支持：</strong>適度濕度促進葡萄健康生長</li><li><strong>貴腐酒條件：</strong>某些區域的晨霧有利於貴腐菌發展</li><li><strong>乾旱緩解：</strong>減少極端乾燥對葡萄的傷害</li></ul></div></div></div>',
        hasMap: true, mapFocus: 'river-climate-effects',
        quiz: {
          question: '吉隆德河對波爾多氣候的主要作用是什麼？',
          options: ['提供灌溉水源', '溫度調節', '增加降雨量', '防止洪水'], 
          correct: 1,
          explanation: '吉隆德河主要起到溫度調節作用，夏季降溫，冬季保溫，為葡萄生長提供理想的氣候條件。'
        }
      },
      {
        title: '葡萄生長的四季變化',
        highlights: [
          { id: 1, icon: '🔄', title: '完美循環', content: '四季分明的氣候變化與葡萄生長週期完美匹配' },
          { id: 2, icon: '🍇', title: '關鍵時期', content: '每個季節都為葡萄提供不同的生長條件' }
        ],
        content: '<div class="seasonal-cycle"><p class="lead-text">波爾多的四季氣候變化與葡萄的生長週期形成完美的自然節拍。</p><div class="seasons-grid"><div class="season-card"><h4>🌸 春季 (3-5月)</h4><p><strong>氣候：</strong>溫和濕潤，8-16°C</p><p><strong>葡萄：</strong>發芽期，新梢生長</p></div><div class="season-card"><h4>☀️ 夏季 (6-8月)</h4><p><strong>氣候：</strong>溫暖乾燥，16-20°C</p><p><strong>葡萄：</strong>開花座果，轉色期開始</p></div><div class="season-card"><h4>🍂 秋季 (9-11月)</h4><p><strong>氣候：</strong>溫和乾燥，日夜溫差大</p><p><strong>葡萄：</strong>成熟期，採收季節</p></div><div class="season-card"><h4>❄️ 冬季 (12-2月)</h4><p><strong>氣候：</strong>溫和濕潤，很少結冰</p><p><strong>葡萄：</strong>休眠期，修剪工作</p></div></div></div>',
        hasMap: false,
        quiz: {
          question: '哪個季節是波爾多葡萄成熟和採收的關鍵時期？',
          options: ['春季', '夏季', '秋季', '冬季'], 
          correct: 2,
          explanation: '秋季（9-11月）是波爾多葡萄成熟和採收的關鍵時期，溫和乾燥的天氣和日夜溫差為葡萄提供理想的成熟條件。'
        }
      },
      {
        title: '氣候調節因子對照表',
        highlights: [
          { id: 1, icon: '📊', title: '一圖速懂', content: '海洋、河流、森林、土壤如何塑造風格' }
        ],
        content: '<div class="compare-block"><table class="compare-table"><thead><tr><th>因子</th><th>作用機制</th><th>對風格影響</th><th>常見關聯</th></tr></thead><tbody><tr><td><strong>大西洋/海洋</strong></td><td>熱慣性調溫、帶來溫和濕潤</td><td>減少極端高低溫，成熟期拉長，酸度更穩</td><td>全區普遍，左岸靠海更明顯</td></tr><tr><td><strong>吉隆德河與支流</strong></td><td>夏降溫/冬保溫；晨霧形成</td><td>穩定成熟；特定區域利貴腐</td><td>Sauternes/ Barsac 晨霧</td></tr><tr><td><strong>朗德松林</strong></td><td>阻擋西風吹拂，減少風害</td><td>降低蒸散與冷風影響</td><td>格拉夫/佩薩克-雷奧良</td></tr><tr><td><strong>礫石</strong></td><td>排水佳、蓄熱與反射</td><td>助晚熟品種完全成熟</td><td>梅多克/上梅多克</td></tr><tr><td><strong>黏土/石灰岩</strong></td><td>保水性與礦物供應</td><td>在乾旱年維持平衡、帶優雅感</td><td>聖愛美濃/波美侯</td></tr></tbody></table><div class="info-card"><strong>提示：</strong>調節因子共同作用，決定成熟速度、酸度保留、以及香氣與單寧表現。</div></div>',
        hasMap: false,
        quiz: {
          question: '下列何者最直接有助於降低極端高溫對葡萄的影響？',
          options: ['礫石的反射', '大西洋的調溫效應', '石灰岩的礦物供應', '朗德松林的防風作用'],
          correct: 1,
          explanation: '海洋的熱慣性具顯著的調溫效果，能有效緩和夏季極端高溫與冬季嚴寒。'
        }
      },
      {
        title: '風險管理：從天氣到採收',
        highlights: [
          { id: 1, icon: '🧭', title: '實務步驟', content: '以流程面對霜凍、霉害、降雨與採收時機' }
        ],
        content: '<div class="steps"><div class="step"><strong>1. 霜凍預防：</strong>監測預報→防霜蠟燭/風機/灌溉</div><div class="step"><strong>2. 病蟲害管理：</strong>冠層通風→減少潮溼→預防霉菌</div><div class="step"><strong>3. 降雨風險：</strong>排水管理→減少積水→避免稀釋</div><div class="step"><strong>4. 採收判斷：</strong>糖酸比/種籽成熟/天氣窗→動態決策</div></div><div class="misconception-card"><strong>常見誤解：</strong>「波爾多全年多雨、難以成熟。」<br>事實：日照集中於關鍵成熟季，且排水/冠層與海洋調溫降低許多風險。</div>',
        hasMap: false,
        quiz: {
          question: '秋季晨霧的出現，最常與哪類酒款的機會增加相關？',
          options: ['高酸清爽型干白', '貴腐甜酒', '高單寧重型紅酒', '氣泡酒基酒'],
          correct: 1,
          explanation: '晨霧在特定小氣候下有利貴腐菌 (Botrytis) 發展，對 Sauternes/Barsac 的甜酒形成至關重要。'
        }
      },
      {
        title: '氣候→風格：因果速讀',
        highlights: [
          { id: 1, icon: '🧩', title: '一條線看懂', content: '調節因子 → 成熟曲線/酸度/單寧 → 風格表現' }
        ],
        content: '<div class="info-card"><strong>核心鏈：</strong>海洋調溫＋河流熱慣性＋土壤排水/保水 → <strong>成熟節奏</strong>與<strong>酸度保留</strong> → 形塑 <strong>結構 × 優雅</strong> 的波爾多風格。</div><div class="callout"><ul><li><strong>左岸範例：</strong>礫石蓄熱/排水 + 海洋調溫 → <em>Cabernet Sauvignon</em> 完熟 → 高單寧、強結構、長陳年。</li><li><strong>右岸範例：</strong>黏土/石灰岩保水 + 海洋調溫 → <em>Merlot</em> 保持酸度與質地 → 柔順、優雅、較早適飲。</li></ul></div>',
        hasMap: false,
        quiz: {
          question: '何者最直接有助於「酸度保留」與更長的成熟期？',
          options: ['海洋調溫', '礫石蓄熱', '過度灌溉', '過熟採收'],
          correct: 0,
          explanation: '海洋的調溫效果降低極端高溫、拉長成熟期並幫助保留酸度，是波爾多風格的基底。'
        }
      }
    ]
  } else {
    return [
      { type: 'title' },
      {
        title: '波爾多在法國的位置',
        highlights: [
          { id: 1, icon: '📍', title: '戰略位置', content: '位於法國西南部，距離大西洋 (Atlantic Ocean) 約60公里' },
          { id: 2, icon: '🌊', title: '海洋性氣候', content: '受大西洋影響，氣候溫和濕潤，造就優質風土 (Terroir)' }
        ],
        content: '<div class="location-overview"><p class="lead-text">波爾多 <span class="term-note">(Bordeaux)</span> 位於法國西南部的新亞奎丹大區 <span class="term-note">(Nouvelle-Aquitaine)</span>，是該地區最重要的城市和葡萄酒產區。</p><div class="key-facts"><div class="fact-item"><strong>緯度位置：</strong> 北緯44°50\'</div><div class="fact-item"><strong>面積：</strong> 約120,000公頃的葡萄園</div><div class="fact-item"><strong>距離巴黎：</strong> 約500公里（高鐵3小時）</div></div></div>',
        hasMap: true, mapFocus: 'france-overview',
        quiz: {
          question: '波爾多距離大西洋約多少公里？',
          options: ['30公里', '60公里', '100公里', '150公里'], correct: 1,
          explanation: '波爾多距離大西洋約60公里，這個距離讓它能享受海洋性氣候的調節作用。'
        }
      },
      {
        title: '三河匯流的獨特地理',
        highlights: [
          { id: 1, icon: '🏞️', title: '三條主要河流', content: '加龍河、多爾多涅河、吉隆德河形成獨特水系' },
          { id: 2, icon: '🌡️', title: '氣候調節', content: '河流系統起到天然的溫度和濕度調節作用' }
        ],
        content: '<div class="river-system"><p class="lead-text">波爾多的獨特地理特徵是其完整的河流系統，這些河流不僅塑造了地形，更決定了產區的劃分。</p><div class="rivers-list"><div class="river-item"><h4>🌊 加龍河 <span class="term-note">(Garonne)</span></h4><p>來自庇里牛斯山脈 <span class="term-note">(Pyrénées)</span>，流經波爾多市中心，形成左岸產區的天然邊界。</p></div><div class="river-item"><h4>🌊 多爾多涅河 <span class="term-note">(Dordogne)</span></h4><p>來自法國中央高原 <span class="term-note">(Massif Central)</span>，與加龍河匯合，沿岸分佈著右岸產區。</p></div><div class="river-item"><h4>🌊 吉隆德河 <span class="term-note">(Gironde)</span></h4><p>兩河匯合後形成的河口，是歐洲最大的河口，直通大西洋 <span class="term-note">(Atlantique)</span>。</p></div></div></div>',
        hasMap: true, mapFocus: 'rivers-system',
        quiz: {
          question: '吉隆德河是如何形成的？',
          options: ['來自阿爾卑斯山', '加龍河與多爾多涅河匯合', '來自大西洋', '人工開鑿'], correct: 1,
          explanation: '吉隆德河是加龍河和多爾多涅河匯合後形成的河口，直通大西洋。'
        }
        },
        {
          title: '為什麼地理重要：風格的因果鏈',
          highlights: [
            { id: 1, icon: '🧭', title: '因果關聯', content: '緯度 × 海洋性氣候 × 河流 → 成熟度、酸度、香氣、單寧' },
            { id: 2, icon: '🧱', title: '地形土壤', content: '礫石/石灰岩/黏土決定排水與蓄熱 → 品種搭配' }
          ],
          content: '<div class="info-card"><strong>重點：</strong>波爾多的海洋性氣候與三河系統讓成熟期拉長，保留酸度並促進酚類成熟，形成「結構×優雅」的風格基調。</div><div class="callout"><ul><li><strong>熱量分布：</strong>靠海調溫，極端少見 → 年份起伏相對可控</li><li><strong>日照與反射：</strong>礫石反射熱與光，利於Cabernet Sauvignon完全成熟</li><li><strong>水分管理：</strong>黏土可儲水，乾旱年保護Merlot</li></ul></div><div class="misconception-card"><strong>常見誤解：</strong>「波爾多都很貴。」<br>事實：<em>Bordeaux AOC, Bordeaux Supérieur, Côtes de Bordeaux</em> 等級提供大量高性價比選項。</div>',
          hasMap: false,
          quiz: {
            question: '哪一項最直接幫助Cabernet Sauvignon在左岸能完全成熟？',
            options: ['高海拔冷涼氣候', '礫石的蓄熱與反射', '大量灌溉', '陰涼的北向坡'],
            correct: 1,
            explanation: '礫石白天吸熱、夜間釋熱並反射光線，幫助晚熟的Cabernet Sauvignon在左岸達到理想成熟。'
          }
        },
        {
          title: '歷史與貿易：波爾多為何成為門戶',
          highlights: [
            { id: 1, icon: '⚓', title: '出海口優勢', content: '吉隆德河口連接大西洋，易於貿易與出口' },
            { id: 2, icon: '📜', title: '時間線', content: '中世紀英法貿易→荷蘭排水→現代全球市場' }
          ],
          content: '<div class="steps"><div class="step"><strong>中世紀：</strong>與英國貿易（Claret）推動紅酒外銷。</div><div class="step"><strong>17世紀：</strong>荷蘭人疏濬與排水造地，成就梅多克。</div><div class="step"><strong>1855：</strong>巴黎博覽會分級奠定左岸聲望。</div><div class="step"><strong>現代：</strong>波爾多港與拍賣市場連動，形成全球價格指標。</div></div><div class="info-card"><strong>學習建議：</strong>記住「地理→風土→品種→風格→市場」這條鏈，閱讀任何產區都能套用。</div>',
          hasMap: false
        }
    ]
  }
}

const totalSlides = computed(() => slides.value.length)

const currentSlideData = computed(() => {
  if (currentSlide.value === 0) return null
  return slides.value[currentSlide.value]
})

const getQuizOptionClass = computed(() => {
  return (index) => {
    if (!quizAnswered.value) return ''
    
    if (index === currentSlideData.value?.quiz?.correct) {
      return 'correct'
    } else if (index === selectedAnswer.value) {
      return 'incorrect'
    }
    return 'disabled'
  }
})

// 術語抽屜狀態
const showGlossary = ref(false)

// 方法
const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
    resetQuiz()
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
    resetQuiz()
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetQuiz()
}

const toggleMap = () => {
  showMap.value = !showMap.value
}

const selectQuizAnswer = (index) => {
  if (quizAnswered.value) return
  
  selectedAnswer.value = index
  quizAnswered.value = true
  quizCorrect.value = index === currentSlideData.value.quiz.correct
}

const resetQuiz = () => {
  quizAnswered.value = false
  selectedAnswer.value = null
  quizCorrect.value = false
  showMap.value = false
}

const closeCompletionCard = () => {
  showCompletionCard.value = false
}

const reviewLesson = () => {
  currentSlide.value = 0
  resetQuiz()
  showCompletionCard.value = false
}

const nextLesson = () => {
  emit('nextLesson')
}

// 生命週期和響應式處理
watch(() => props.lessonId, (newLessonId) => {
  if (newLessonId) {
    loadLessonContent()
  }
}, { immediate: true })

onMounted(() => {
  resetQuiz()
})
</script>

<style scoped>
.presentation-lesson {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

.progress-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  border-radius: 25px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

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

.slide-container {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-height: 70vh;
}

.slide {
  height: 100%;
}

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
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
}

.objectives-preview h3 {
  color: #333;
  margin-bottom: 1rem;
}

.objectives-preview ul {
  list-style: none;
  padding: 0;
}

.objectives-preview li {
  padding: 0.5rem 0;
  border-left: 3px solid #667eea;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

.content-slide {
  text-align: left;
}

.slide-heading {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.highlights-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.highlight-card {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(240, 147, 251, 0.3);
}

.highlight-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.highlight-content h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.highlight-content p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.main-content {
  margin: 2rem 0;
  line-height: 1.6;
}

.main-content :deep(.lead-text) {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.main-content :deep(.term-note) {
  background: #e3f2fd;
  color: #1565c0;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  font-style: italic;
}

.main-content :deep(.climate-features),
.main-content :deep(.effects-grid),
.main-content :deep(.seasons-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.main-content :deep(.feature-card),
.main-content :deep(.effect-section),
.main-content :deep(.season-card) {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.main-content :deep(.feature-card h4),
.main-content :deep(.effect-section h4),
.main-content :deep(.season-card h4) {
  color: #333;
  margin-bottom: 1rem;
}

.main-content :deep(.feature-card ul),
.main-content :deep(.effect-section ul) {
  list-style: none;
  padding: 0;
}

.main-content :deep(.feature-card li),
.main-content :deep(.effect-section li) {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.main-content :deep(.feature-card li:last-child),
.main-content :deep(.effect-section li:last-child) {
  border-bottom: none;
}

.map-toggle {
  text-align: center;
  margin: 2rem 0;
}

.show-map-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.show-map-btn:hover {
  transform: translateY(-2px);
}

.map-section {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.hide-map-btn {
  background: #ff6b6b;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.map-placeholder {
  background: #e9ecef;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mock-map-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.map-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
}

.slide-quiz {
  background: #f0f8ff;
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  border: 2px solid #e3f2fd;
}

.quiz-header h4 {
  color: #1565c0;
  margin-bottom: 1rem;
}

.quiz-question {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
}

.quiz-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.quiz-option {
  background: white;
  border: 2px solid #e0e0e0;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.quiz-option:hover:not(:disabled) {
  border-color: #667eea;
  background: #f0f8ff;
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

.quiz-option.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.quiz-feedback {
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
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
  line-height: 1.5;
}

.navigation-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem 2rem;
  border-radius: 25px;
  margin-bottom: 2rem;
}

.nav-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.slide-indicators {
  display: flex;
  gap: 0.5rem;
}

.slide-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s;
}

.slide-dot.active {
  background: #667eea;
  transform: scale(1.2);
}

.completion-section {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.completion-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  position: relative;
}

.close-completion-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff6b6b;
  color: white;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.8rem;
}

.completion-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.completion-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.review-btn, .next-lesson-btn {
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

.review-btn {
  background: #f8f9fa;
  color: #333;
  border: 2px solid #e0e0e0;
}

.next-lesson-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

@media (max-width: 768px) {
  .presentation-lesson {
    padding: 1rem;
  }

  .slide-container {
    padding: 1.5rem;
  }

  .slide-title {
    font-size: 2rem;
  }

  .slide-heading {
    font-size: 1.8rem;
  }

  .highlights-section {
    grid-template-columns: 1fr;
  }

  .quiz-options {
    grid-template-columns: 1fr;
  }

  .navigation-controls {
    padding: 1rem;
  }

  .completion-section {
    position: static;
    margin-top: 2rem;
  }

  .completion-card {
    max-width: none;
  }
}

/* 葡萄品種課程專用樣式 */
.main-content :deep(.grape-varieties),
.main-content :deep(.white-varieties) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.main-content :deep(.variety-card),
.main-content :deep(.white-variety-card) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 5px solid;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.main-content :deep(.variety-card:hover),
.main-content :deep(.white-variety-card:hover) {
  transform: translateY(-5px);
}

.main-content :deep(.variety-card.cabernet-s) {
  border-left-color: #8b0000;
}

.main-content :deep(.variety-card.merlot) {
  border-left-color: #800080;
}

.main-content :deep(.variety-card.cabernet-f) {
  border-left-color: #dc143c;
}

.main-content :deep(.white-variety-card.sauvignon-blanc) {
  border-left-color: #32cd32;
}

.main-content :deep(.white-variety-card.semillon) {
  border-left-color: #ffd700;
}

.main-content :deep(.variety-card h4),
.main-content :deep(.white-variety-card h4) {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.main-content :deep(.grape-details),
.main-content :deep(.grape-profile) {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.main-content :deep(.grape-details p),
.main-content :deep(.aroma-section ul li),
.main-content :deep(.style-section ul li) {
  margin: 0.3rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.main-content :deep(.aroma-section h5),
.main-content :deep(.style-section h5) {
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.3rem;
}

.main-content :deep(.aroma-section ul),
.main-content :deep(.style-section ul) {
  padding-left: 1rem;
  margin: 0;
}

.main-content :deep(.blending-concepts) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.main-content :deep(.concept-section) {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid #e9ecef;
}

.main-content :deep(.concept-section h4) {
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.main-content :deep(.blend-composition) {
  margin-bottom: 1.5rem;
}

.main-content :deep(.blend-composition h5) {
  color: #555;
  margin-bottom: 1rem;
  text-align: center;
}

.main-content :deep(.blend-chart) {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.main-content :deep(.blend-item) {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.main-content :deep(.grape-name) {
  min-width: 120px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
}

.main-content :deep(.percentage-bar) {
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 40px;
}

.main-content :deep(.percentage-bar.cab-s) {
  background: linear-gradient(90deg, #8b0000, #a52a2a);
}

.main-content :deep(.percentage-bar.merlot) {
  background: linear-gradient(90deg, #800080, #9370db);
}

.main-content :deep(.percentage-bar.cab-f) {
  background: linear-gradient(90deg, #dc143c, #ff6347);
}

.main-content :deep(.blend-character h5) {
  color: #555;
  margin-bottom: 0.8rem;
  text-align: center;
}

.main-content :deep(.blend-character ul) {
  padding-left: 1rem;
}

.main-content :deep(.blend-character li) {
  margin: 0.4rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .main-content :deep(.grape-varieties),
  .main-content :deep(.white-varieties) {
    grid-template-columns: 1fr;
  }

  .main-content :deep(.blending-concepts) {
    grid-template-columns: 1fr;
  }

  .main-content :deep(.variety-card),
  .main-content :deep(.white-variety-card) {
    padding: 1rem;
  }

  .main-content :deep(.concept-section) {
    padding: 1rem;
  }
}

/* 左岸右岸課程專用樣式 */
.main-content :deep(.banks-geography),
.main-content :deep(.soil-analysis),
.main-content :deep(.style-comparison) {
  margin-top: 1.5rem;
}

.main-content :deep(.geography-overview),
.main-content :deep(.soil-comparison),
.main-content :deep(.style-profiles) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.main-content :deep(.bank-section),
.main-content :deep(.soil-type),
.main-content :deep(.bank-style) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 3px solid;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.main-content :deep(.bank-section:hover),
.main-content :deep(.soil-type:hover),
.main-content :deep(.bank-style:hover) {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.main-content :deep(.bank-section.left-bank),
.main-content :deep(.soil-type.left-bank-soil),
.main-content :deep(.bank-style.left-bank-style) {
  border-color: #dc3545;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);
}

.main-content :deep(.bank-section.right-bank),
.main-content :deep(.soil-type.right-bank-soil),
.main-content :deep(.bank-style.right-bank-style) {
  border-color: #007bff;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
}

.main-content :deep(.bank-section h4),
.main-content :deep(.soil-type h4),
.main-content :deep(.bank-style h4) {
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0.8rem;
  border-radius: 10px;
  font-size: 1.2rem;
}

.main-content :deep(.left-bank h4),
.main-content :deep(.left-bank-soil h4),
.main-content :deep(.left-bank-style h4) {
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  color: white;
}

.main-content :deep(.right-bank h4),
.main-content :deep(.right-bank-soil h4),  
.main-content :deep(.right-bank-style h4) {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
}

.main-content :deep(.bank-details),
.main-content :deep(.soil-profile),
.main-content :deep(.style-analysis) {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.main-content :deep(.location-info),
.main-content :deep(.terrain-info),
.main-content :deep(.soil-layer),
.main-content :deep(.soil-benefits),
.main-content :deep(.grape-adaptation),
.main-content :deep(.tasting-profile),
.main-content :deep(.aging-potential),
.main-content :deep(.food-pairing) {
  background: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ddd;
}

.main-content :deep(.location-info h5),
.main-content :deep(.terrain-info h5),
.main-content :deep(.soil-layer h5),
.main-content :deep(.soil-benefits h5),
.main-content :deep(.grape-adaptation h5),
.main-content :deep(.tasting-profile h5),
.main-content :deep(.aging-potential h5),
.main-content :deep(.food-pairing h5) {
  color: #555;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
}

.main-content :deep(.layer-details) {
  background: rgba(248, 249, 250, 0.8);
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.main-content :deep(.profile-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 0.8rem;
}

.main-content :deep(.profile-item) {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.main-content :deep(.profile-item h6) {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.main-content :deep(.profile-item p) {
  color: #6c757d;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.3;
}

.main-content :deep(.comparison-summary) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.main-content :deep(.comparison-summary h4) {
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.main-content :deep(.selection-guide) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.main-content :deep(.guide-item) {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  transition: border-color 0.3s ease;
}

.main-content :deep(.guide-item:hover) {
  border-color: #667eea;
}

.main-content :deep(.guide-item h5) {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.main-content :deep(.guide-item ul) {
  padding-left: 1.2rem;
  margin: 0;
}

.main-content :deep(.guide-item li) {
  color: #6c757d;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .main-content :deep(.geography-overview),
  .main-content :deep(.soil-comparison),
  .main-content :deep(.style-profiles) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .main-content :deep(.bank-section),
  .main-content :deep(.soil-type),
  .main-content :deep(.bank-style) {
    padding: 1rem;
  }

  .main-content :deep(.profile-grid) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.8rem;
  }

  .main-content :deep(.selection-guide) {
    grid-template-columns: 1fr;
  }

  .main-content :deep(.comparison-summary) {
    padding: 1rem;
  }
}

/* 酒款類型課程專用樣式 */
.main-content :deep(.red-wine-overview),
.main-content :deep(.white-wine-overview),
.main-content :deep(.label-guide-overview) {
  margin-top: 1.5rem;
}

.main-content :deep(.wine-characteristics),
.main-content :deep(.white-wine-types),
.main-content :deep(.label-sections) {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
}

.main-content :deep(.char-section),
.main-content :deep(.wine-type),
.main-content :deep(.label-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.main-content :deep(.char-section h4),
.main-content :deep(.wine-type h4),
.main-content :deep(.label-section h4) {
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

.main-content :deep(.primary-grapes h4) {
  background: linear-gradient(135deg, #8b0000 0%, #a52a2a 100%);
  color: white;
}

.main-content :deep(.production-process h4) {
  background: linear-gradient(135deg, #2c5aa0 0%, #1a365d 100%);
  color: white;
}

.main-content :deep(.style-spectrum h4) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.main-content :deep(.dry-white h4) {
  background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
  color: white;
}

.main-content :deep(.sweet-white h4) {
  background: linear-gradient(135deg, #d69e2e 0%, #b7791f 100%);
  color: white;
}

.main-content :deep(.essential-info h4) {
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  color: white;
}

.main-content :deep(.selection-guide h4) {
  background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
  color: white;
}

.main-content :deep(.grape-composition) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.main-content :deep(.grape-item) {
  display: flex;
  align-items: center;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  transition: transform 0.3s ease;
}

.main-content :deep(.grape-item:hover) {
  transform: translateY(-3px);
  border-color: #8b0000;
}

.main-content :deep(.grape-icon) {
  font-size: 2rem;
  margin-right: 1rem;
}

.main-content :deep(.grape-info h5) {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
}

.main-content :deep(.grape-info p) {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

.main-content :deep(.process-steps) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.main-content :deep(.step-item) {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #e9ecef;
  transition: border-color 0.3s ease;
}

.main-content :deep(.step-item:hover) {
  border-color: #2c5aa0;
}

.main-content :deep(.step-item h5) {
  color: #2c5aa0;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  font-weight: bold;
}

.main-content :deep(.step-item p) {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.main-content :deep(.style-range) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 1rem;
}

.main-content :deep(.style-range::before) {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  z-index: 1;
}

.main-content :deep(.style-point) {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  border: 3px solid #667eea;
  flex: 1;
  margin: 0 0.5rem;
  position: relative;
  z-index: 2;
}

.main-content :deep(.style-point h5) {
  color: #667eea;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
}

.main-content :deep(.style-point p) {
  color: #666;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.3;
}

.main-content :deep(.type-details) {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.main-content :deep(.grape-blend),
.main-content :deep(.tasting-profile),
.main-content :deep(.food-pairing),
.main-content :deep(.production-method) {
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #ddd;
}

.main-content :deep(.grape-blend h5),
.main-content :deep(.tasting-profile h5),
.main-content :deep(.food-pairing h5),
.main-content :deep(.production-method h5) {
  color: #555;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
}

.main-content :deep(.botrytis-process) {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
  background: rgba(255, 248, 220, 0.8);
  padding: 1rem;
  border-radius: 10px;
}

.main-content :deep(.process-step) {
  text-align: center;
  flex: 1;
}

.main-content :deep(.process-step span) {
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.main-content :deep(.process-step p) {
  color: #666;
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.3;
}

.main-content :deep(.profile-details) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.8rem;
}

.main-content :deep(.profile-details p) {
  background: rgba(248, 249, 250, 0.9);
  padding: 0.6rem;
  border-radius: 6px;
  margin: 0;
  font-size: 0.85rem;
  border-left: 3px solid #667eea;
}

.main-content :deep(.info-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.main-content :deep(.info-item) {
  background: white;
  padding: 1.2rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
}

.main-content :deep(.info-item h5) {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.main-content :deep(.appellation-hierarchy) {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.main-content :deep(.hierarchy-level) {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  background: rgba(248, 249, 250, 0.8);
  border-radius: 8px;
}

.main-content :deep(.level-tag) {
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 80px;
  text-align: center;
}

.main-content :deep(.level-tag.regional) {
  background: #e3f2fd;
  color: #1565c0;
}

.main-content :deep(.level-tag.sub-regional) {
  background: #f3e5f5;
  color: #7b1fa2;
}

.main-content :deep(.level-tag.communal) {
  background: #e8f5e8;
  color: #2e7d32;
}

.main-content :deep(.selection-scenarios) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.main-content :deep(.scenario) {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.main-content :deep(.scenario:hover) {
  transform: translateY(-5px);
  border-color: #38a169;
}

.main-content :deep(.scenario h5) {
  color: #38a169;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
  background: rgba(56, 161, 105, 0.1);
  border-radius: 6px;
}

.main-content :deep(.scenario-details p) {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.main-content :deep(.buying-tips) {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  padding: 1.5rem;
  border-radius: 15px;
  margin-top: 2rem;
  border: 2px solid #e3f2fd;
}

.main-content :deep(.buying-tips h4) {
  color: #1565c0;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.main-content :deep(.tips-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.main-content :deep(.tip-item) {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e3f2fd;
}

.main-content :deep(.tip-item h5) {
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
}

.main-content :deep(.tip-item p) {
  color: #666;
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .main-content :deep(.wine-characteristics),
  .main-content :deep(.white-wine-types),
  .main-content :deep(.label-sections) {
    gap: 1rem;
  }

  .main-content :deep(.grape-composition),
  .main-content :deep(.process-steps),
  .main-content :deep(.info-grid),
  .main-content :deep(.selection-scenarios),
  .main-content :deep(.tips-grid) {
    grid-template-columns: 1fr;
  }

  .main-content :deep(.style-range) {
    flex-direction: column;
    gap: 1rem;
  }

  .main-content :deep(.style-range::before) {
    display: none;
  }

  .main-content :deep(.style-point) {
    margin: 0;
  }

  .main-content :deep(.botrytis-process) {
    flex-direction: column;
    gap: 1rem;
  }

  .main-content :deep(.hierarchy-level) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  /* AOC System Course Mobile Adjustments */
  .main-content :deep(.aoc-foundation),
  .main-content :deep(.label-analysis) {
    gap: 1rem;
  }

  .main-content :deep(.definition-content),
  .main-content :deep(.timeline),
  .main-content :deep(.benefits-grid),
  .main-content :deep(.mandatory-grid),
  .main-content :deep(.optional-grid),
  .main-content :deep(.reading-steps) {
    grid-template-columns: 1fr;
  }

  .main-content :deep(.level-content) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .main-content :deep(.aoc-examples) {
    grid-template-columns: 1fr;
  }
}

/* ===============================
   AOC System Course (l1-6) Styles
   =============================== */

/* AOC Overview Styles */
.main-content :deep(.aoc-overview) {
  padding: 1.5rem;
}

.main-content :deep(.aoc-foundation) {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
}

.main-content :deep(.concept-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.concept-section.definition) {
  border-left-color: #007bff;
}

.main-content :deep(.concept-section.history) {
  border-left-color: #28a745;
}

.main-content :deep(.concept-section.benefits) {
  border-left-color: #ffc107;
}

.main-content :deep(.concept-section h4) {
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Definition Content */
.main-content :deep(.definition-content) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.main-content :deep(.definition-card) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.definition-card h5) {
  color: #495057;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.definition-card ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.definition-card li) {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Timeline Styles */
.main-content :deep(.timeline) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.timeline-item) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
}

.main-content :deep(.timeline-item::before) {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #28a745;
  border-radius: 50%;
}

.main-content :deep(.timeline-item h5) {
  color: #28a745;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Benefits Grid */
.main-content :deep(.benefits-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.benefit-item) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.benefit-item.consumer) {
  border-top: 3px solid #007bff;
}

.main-content :deep(.benefit-item.producer) {
  border-top: 3px solid #28a745;
}

.main-content :deep(.benefit-item.industry) {
  border-top: 3px solid #ffc107;
}

.main-content :deep(.benefit-item h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.benefit-item ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.benefit-item li) {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* Bordeaux AOC Hierarchy Styles */
.main-content :deep(.bordeaux-aoc-hierarchy) {
  padding: 1.5rem;
}

.main-content :deep(.hierarchy-pyramid) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-content :deep(.pyramid-level) {
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.main-content :deep(.pyramid-level.level-1) {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-left: 5px solid #2196f3;
}

.main-content :deep(.pyramid-level.level-2) {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-left: 5px solid #9c27b0;
}

.main-content :deep(.pyramid-level.level-3) {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-left: 5px solid #4caf50;
}

.main-content :deep(.pyramid-level.level-4) {
  background: linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%);
  border-left: 5px solid #ff9800;
}

.main-content :deep(.level-header) {
  text-align: center;
  margin-bottom: 1rem;
}

.main-content :deep(.level-header h4) {
  color: #2c3e50;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.main-content :deep(.level-subtitle) {
  color: #6c757d;
  font-style: italic;
  font-size: 0.9rem;
  margin: 0;
}

.main-content :deep(.level-content) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.main-content :deep(.examples-section h5),
.main-content :deep(.characteristics-section h5) {
  color: #495057;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.aoc-examples) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.main-content :deep(.aoc-example) {
  background: rgba(255,255,255,0.7);
  border-radius: 6px;
  padding: 0.75rem;
}

.main-content :deep(.aoc-example h6) {
  color: #343a40;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.main-content :deep(.aoc-example ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.aoc-example li) {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

.main-content :deep(.left-bank) {
  border-left: 3px solid #dc3545;
}

.main-content :deep(.right-bank) {
  border-left: 3px solid #007bff;
}

.main-content :deep(.characteristics-section ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.characteristics-section li) {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.main-content :deep(.hierarchy-summary) {
  margin-top: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.hierarchy-summary h4) {
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.selection-tips) {
  margin-top: 1rem;
}

.main-content :deep(.tip-card) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.tip-card h5) {
  color: #495057;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.tip-card ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.tip-card li) {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* Label Regulations Styles */
.main-content :deep(.label-regulations) {
  padding: 1.5rem;
}

.main-content :deep(.label-analysis) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content :deep(.regulation-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.regulation-section.mandatory-info) {
  border-left-color: #dc3545;
}

.main-content :deep(.regulation-section.optional-info) {
  border-left-color: #28a745;
}

.main-content :deep(.regulation-section.reading-guide) {
  border-left-color: #007bff;
}

.main-content :deep(.regulation-section h4) {
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Mandatory Info Grid */
.main-content :deep(.mandatory-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.info-category) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.info-category.aoc-info) {
  border-top: 3px solid #007bff;
}

.main-content :deep(.info-category.producer-info) {
  border-top: 3px solid #28a745;
}

.main-content :deep(.info-category.volume-alcohol) {
  border-top: 3px solid #ffc107;
}

.main-content :deep(.info-category h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.info-details p) {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.main-content :deep(.examples h6),
.main-content :deep(.bottling-types h6),
.main-content :deep(.typical-ranges h6),
.main-content :deep(.vintage-reading h6),
.main-content :deep(.classification-benefits h6) {
  color: #495057;
  margin: 0.75rem 0 0.5rem 0;
  font-size: 0.9rem;
}

.main-content :deep(.examples ul),
.main-content :deep(.bottling-types ul),
.main-content :deep(.typical-ranges ul),
.main-content :deep(.vintage-reading ul),
.main-content :deep(.classification-benefits ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.examples li),
.main-content :deep(.bottling-types li),
.main-content :deep(.typical-ranges li),
.main-content :deep(.vintage-reading li),
.main-content :deep(.classification-benefits li) {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.3;
}

/* Optional Info Grid */
.main-content :deep(.optional-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.info-item) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.info-item.vintage) {
  border-top: 3px solid #6f42c1;
}

.main-content :deep(.info-item.classification) {
  border-top: 3px solid #fd7e14;
}

.main-content :deep(.info-item.organic) {
  border-top: 3px solid #20c997;
}

.main-content :deep(.info-item h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Reading Guide Steps */
.main-content :deep(.reading-steps) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.step-item) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
}

.main-content :deep(.step-item::before) {
  content: '';
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #007bff;
  border-radius: 50%;
}

.main-content :deep(.step-item h5) {
  color: #007bff;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.main-content :deep(.step-item p) {
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
}

.main-content :deep(.common-mistakes) {
  margin-top: 1.5rem;
  background: rgba(220, 53, 69, 0.1);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid #dc3545;
}

.main-content :deep(.common-mistakes h5) {
  color: #dc3545;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.common-mistakes ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.common-mistakes li) {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.main-content :deep(.common-mistakes li strong) {
  color: #dc3545;
}

/* ===============================
   Tasting Technique Course (l1-7) Styles
   =============================== */

/* Tasting Technique Overview */
.main-content :deep(.tasting-technique) {
  padding: 1.5rem;
}

.main-content :deep(.tasting-steps) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content :deep(.technique-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.technique-section.visual) {
  border-left-color: #17a2b8;
}

.main-content :deep(.technique-section.aroma) {
  border-left-color: #28a745;
}

.main-content :deep(.technique-section.tasting) {
  border-left-color: #dc3545;
}

.main-content :deep(.technique-section h4) {
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Visual Analysis Styles */
.main-content :deep(.visual-analysis) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.analysis-card) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.analysis-card.color) {
  border-top: 3px solid #ff6b6b;
}

.main-content :deep(.analysis-card.clarity) {
  border-top: 3px solid #4ecdc4;
}

.main-content :deep(.analysis-card.viscosity) {
  border-top: 3px solid #45b7d1;
}

.main-content :deep(.analysis-card h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Color Spectrum Styles */
.main-content :deep(.color-spectrum) {
  display: flex;
  gap: 0.5rem;
  margin: 0.75rem 0;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.main-content :deep(.color-sample) {
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.main-content :deep(.red-spectrum .color-sample.purple) {
  background: linear-gradient(135deg, #8e44ad, #9b59b6);
  color: white;
}

.main-content :deep(.red-spectrum .color-sample.ruby) {
  background: linear-gradient(135deg, #c0392b, #e74c3c);
  color: white;
}

.main-content :deep(.red-spectrum .color-sample.brick) {
  background: linear-gradient(135deg, #a0522d, #cd853f);
  color: white;
}

.main-content :deep(.red-spectrum .color-sample.brown) {
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
}

.main-content :deep(.white-spectrum .color-sample.pale) {
  background: linear-gradient(135deg, #fffacd, #f0e68c);
  color: #333;
}

.main-content :deep(.white-spectrum .color-sample.golden) {
  background: linear-gradient(135deg, #ffd700, #ffb347);
  color: #333;
}

.main-content :deep(.white-spectrum .color-sample.amber) {
  background: linear-gradient(135deg, #ffbf00, #ff8c00);
  color: white;
}

.main-content :deep(.color-sample span) {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.main-content :deep(.color-sample p) {
  margin: 0;
  font-size: 0.7rem;
  opacity: 0.9;
}

/* Clarity and Viscosity Indicators */
.main-content :deep(.clarity-indicators),
.main-content :deep(.viscosity-types) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.main-content :deep(.clarity-level),
.main-content :deep(.viscosity-type) {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #17a2b8;
}

.main-content :deep(.clarity-level h6),
.main-content :deep(.viscosity-type h6) {
  color: #495057;
  margin-bottom: 0.25rem;
}

.main-content :deep(.clarity-level p),
.main-content :deep(.viscosity-type p) {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Aroma Analysis Styles */
.main-content :deep(.aroma-analysis) {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.main-content :deep(.aroma-technique) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-top: 3px solid #28a745;
}

.main-content :deep(.technique-steps) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.main-content :deep(.step-item) {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #28a745;
}

.main-content :deep(.step-item h6) {
  color: #495057;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.main-content :deep(.step-item p) {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* Aroma Categories */
.main-content :deep(.aroma-categories) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-top: 3px solid #ffc107;
}

.main-content :deep(.aroma-types) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 0.75rem;
}

.main-content :deep(.aroma-primary),
.main-content :deep(.aroma-secondary),
.main-content :deep(.aroma-tertiary) {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
}

.main-content :deep(.aroma-primary) {
  border-left: 3px solid #007bff;
}

.main-content :deep(.aroma-secondary) {
  border-left: 3px solid #28a745;
}

.main-content :deep(.aroma-tertiary) {
  border-left: 3px solid #dc3545;
}

.main-content :deep(.aroma-primary h6),
.main-content :deep(.aroma-secondary h6),
.main-content :deep(.aroma-tertiary h6) {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.main-content :deep(.aroma-primary ul),
.main-content :deep(.aroma-secondary ul),
.main-content :deep(.aroma-tertiary ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.aroma-primary li),
.main-content :deep(.aroma-secondary li),
.main-content :deep(.aroma-tertiary li) {
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
  line-height: 1.3;
}

/* Taste Analysis Styles */
.main-content :deep(.tasting-analysis) {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.main-content :deep(.tasting-technique) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-top: 3px solid #dc3545;
}

.main-content :deep(.taste-steps) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.main-content :deep(.taste-step) {
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 6px;
  text-align: center;
  border-left: 3px solid #dc3545;
}

.main-content :deep(.taste-step h6) {
  color: #495057;
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
}

.main-content :deep(.taste-step p) {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.3;
}

/* Taste Elements */
.main-content :deep(.taste-elements) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-top: 3px solid #6f42c1;
}

.main-content :deep(.taste-components) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.main-content :deep(.component) {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #6f42c1;
}

.main-content :deep(.component h6) {
  color: #495057;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.main-content :deep(.component p) {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* Flavor Identification Styles */
.main-content :deep(.flavor-identification) {
  padding: 1.5rem;
}

.main-content :deep(.flavor-training) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content :deep(.training-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.training-section.flavor-wheel) {
  border-left-color: #e91e63;
}

.main-content :deep(.training-section.sensory-development) {
  border-left-color: #9c27b0;
}

.main-content :deep(.training-section.professional-tips) {
  border-left-color: #ff9800;
}

/* Flavor Wheel Styles */
.main-content :deep(.wheel-overview) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.wheel-category) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.wheel-category.fruits) {
  border-top: 3px solid #e74c3c;
}

.main-content :deep(.wheel-category.florals) {
  border-top: 3px solid #f39c12;
}

.main-content :deep(.wheel-category.herbs-spices) {
  border-top: 3px solid #27ae60;
}

.main-content :deep(.wheel-category.earthy) {
  border-top: 3px solid #8b4513;
}

.main-content :deep(.wheel-category h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.flavor-subcategories),
.main-content :deep(.floral-types),
.main-content :deep(.herb-spice-groups),
.main-content :deep(.earthy-elements) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.main-content :deep(.subcategory),
.main-content :deep(.floral-type),
.main-content :deep(.group),
.main-content :deep(.element) {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #17a2b8;
}

.main-content :deep(.subcategory h6),
.main-content :deep(.floral-type h6),
.main-content :deep(.group h6),
.main-content :deep(.element h6) {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.main-content :deep(.subcategory ul),
.main-content :deep(.floral-type ul),
.main-content :deep(.group ul),
.main-content :deep(.element ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.subcategory li),
.main-content :deep(.floral-type li),
.main-content :deep(.group li),
.main-content :deep(.element li) {
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
  line-height: 1.3;
}

/* Wine Vocabulary Styles */
.main-content :deep(.wine-vocabulary) {
  padding: 1.5rem;
}

.main-content :deep(.vocabulary-system) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content :deep(.vocab-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.vocab-section.appearance-terms) {
  border-left-color: #17a2b8;
}

.main-content :deep(.vocab-section.aroma-terms) {
  border-left-color: #28a745;
}

.main-content :deep(.vocab-section.taste-terms) {
  border-left-color: #dc3545;
}

.main-content :deep(.vocab-section.note-taking) {
  border-left-color: #6f42c1;
}

/* Color Terms Grid */
.main-content :deep(.color-terms-grid) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.main-content :deep(.color-term) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.main-content :deep(.color-term .color-sample) {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
}

.main-content :deep(.young-red .color-sample) {
  background: linear-gradient(135deg, #8e44ad, #9b59b6);
}

.main-content :deep(.mature-red .color-sample) {
  background: linear-gradient(135deg, #c0392b, #e74c3c);
}

.main-content :deep(.aged-red .color-sample) {
  background: linear-gradient(135deg, #a0522d, #cd853f);
}

.main-content :deep(.old-red .color-sample) {
  background: linear-gradient(135deg, #8b4513, #a0522d);
}

.main-content :deep(.pale-white .color-sample) {
  background: linear-gradient(135deg, #fffacd, #f0e68c);
}

.main-content :deep(.medium-white .color-sample) {
  background: linear-gradient(135deg, #ffd700, #ffb347);
}

.main-content :deep(.deep-white .color-sample) {
  background: linear-gradient(135deg, #ffb347, #ffa500);
}

.main-content :deep(.golden .color-sample) {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
}

.main-content :deep(.term-details strong) {
  color: #2c3e50;
  font-size: 0.9rem;
}

.main-content :deep(.term-details p) {
  margin: 0.25rem 0 0 0;
  font-size: 0.8rem;
  color: #6c757d;
  line-height: 1.3;
}

/* Mobile Responsive Adjustments */
@media (max-width: 768px) {
  .main-content :deep(.tasting-steps),
  .main-content :deep(.flavor-training),
  .main-content :deep(.vocabulary-system) {
    gap: 1rem;
  }

  .main-content :deep(.visual-analysis),
  .main-content :deep(.wheel-overview),
  .main-content :deep(.color-terms-grid),
  .main-content :deep(.taste-components),
  .main-content :deep(.taste-steps) {
    grid-template-columns: 1fr;
  }

  .main-content :deep(.aroma-analysis),
  .main-content :deep(.tasting-analysis) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .main-content :deep(.color-spectrum) {
    flex-direction: column;
    gap: 0.25rem;
  }

  .main-content :deep(.color-sample) {
    padding: 0.25rem;
    font-size: 0.7rem;
  }
}

/* ===============================
   Final Assessment Course (l1-8) Styles
   =============================== */

/* Comprehensive Review Styles */
.main-content :deep(.comprehensive-review) {
  padding: 1.5rem;
}

.main-content :deep(.knowledge-integration) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content :deep(.review-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.review-section.course-summary) {
  border-left-color: #007bff;
}

.main-content :deep(.review-section.knowledge-map) {
  border-left-color: #28a745;
}

.main-content :deep(.review-section.practical-skills) {
  border-left-color: #ffc107;
}

/* Course Modules Styles */
.main-content :deep(.course-modules) {
  margin-top: 1rem;
}

.main-content :deep(.module-group) {
  margin-bottom: 1.5rem;
}

.main-content :deep(.module-group h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.main-content :deep(.modules-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.main-content :deep(.module-card) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-top: 3px solid #17a2b8;
}

.main-content :deep(.module-card.l1-1) {
  border-top-color: #007bff;
}

.main-content :deep(.module-card.l1-2) {
  border-top-color: #28a745;
}

.main-content :deep(.module-card.l1-3) {
  border-top-color: #dc3545;
}

.main-content :deep(.module-card.l1-4) {
  border-top-color: #ffc107;
}

.main-content :deep(.module-card.l1-5) {
  border-top-color: #6f42c1;
}

.main-content :deep(.module-card.l1-6) {
  border-top-color: #fd7e14;
}

.main-content :deep(.module-card.l1-7) {
  border-top-color: #20c997;
}

.main-content :deep(.module-header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.main-content :deep(.module-header h6) {
  color: #2c3e50;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.main-content :deep(.module-status) {
  background: #d4edda;
  color: #155724;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.main-content :deep(.module-content p) {
  color: #495057;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.main-content :deep(.module-content ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.module-content li) {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #6c757d;
}

/* Knowledge Connections Flow */
.main-content :deep(.knowledge-connections) {
  margin-top: 1rem;
}

.main-content :deep(.connection-flow) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.main-content :deep(.flow-step-second) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.main-content :deep(.flow-step) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.step-content) {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  min-width: 120px;
}

.main-content :deep(.step-content h6) {
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
  font-size: 0.9rem;
  font-weight: 600;
}

.main-content :deep(.step-content p) {
  color: #6c757d;
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.3;
}

.main-content :deep(.arrow) {
  color: #28a745;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Skills Assessment */
.main-content :deep(.skills-assessment) {
  margin-top: 1rem;
}

.main-content :deep(.skill-category) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.skill-category.selection) {
  border-top: 3px solid #007bff;
}

.main-content :deep(.skill-category.tasting) {
  border-top: 3px solid #dc3545;
}

.main-content :deep(.skill-category.knowledge) {
  border-top: 3px solid #28a745;
}

.main-content :deep(.skill-category h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.skills-checklist) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
}

.main-content :deep(.skill-item) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 6px;
}

.main-content :deep(.skill-item input[type="checkbox"]) {
  margin: 0;
}

.main-content :deep(.skill-item label) {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #495057;
}

/* Final Assessment Styles */
.main-content :deep(.final-assessment) {
  padding: 1.5rem;
}

.main-content :deep(.assessment-system) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content :deep(.assessment-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.assessment-section.test-structure) {
  border-left-color: #007bff;
}

.main-content :deep(.assessment-section.scoring-system) {
  border-left-color: #28a745;
}

.main-content :deep(.assessment-section.preparation-tips) {
  border-left-color: #ffc107;
}

/* Test Categories */
.main-content :deep(.test-categories) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.category) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.category.geography-climate) {
  border-top: 3px solid #17a2b8;
}

.main-content :deep(.category.varieties-regions) {
  border-top: 3px solid #e74c3c;
}

.main-content :deep(.category.wine-quality) {
  border-top: 3px solid #f39c12;
}

.main-content :deep(.category.tasting-skills) {
  border-top: 3px solid #9b59b6;
}

.main-content :deep(.category h5) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.test-topics) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.main-content :deep(.topic-group) {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #17a2b8;
}

.main-content :deep(.topic-group h6) {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.main-content :deep(.topic-group ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.topic-group li) {
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
  line-height: 1.3;
  color: #6c757d;
}

/* Scoring System */
.main-content :deep(.score-categories) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.score-category) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.score-category.theory) {
  border-top: 3px solid #007bff;
}

.main-content :deep(.score-category.practical) {
  border-top: 3px solid #28a745;
}

.main-content :deep(.score-category.integration) {
  border-top: 3px solid #ffc107;
}

.main-content :deep(.score-category h6) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Certification Levels */
.main-content :deep(.cert-levels) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.cert-level) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.main-content :deep(.level-badge) {
  font-size: 2rem;
  flex-shrink: 0;
}

.main-content :deep(.level-details h6) {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.main-content :deep(.level-details p) {
  color: #6c757d;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.main-content :deep(.benefits ul),
.main-content :deep(.recommendations ul) {
  margin: 0;
  padding-left: 1rem;
}

.main-content :deep(.benefits li),
.main-content :deep(.recommendations li) {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.3;
}

/* Level 2 Preview Styles */
.main-content :deep(.level2-preview) {
  padding: 1.5rem;
}

.main-content :deep(.advanced-learning) {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content :deep(.preview-section) {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #6c757d;
}

.main-content :deep(.preview-section.level2-structure) {
  border-left-color: #6f42c1;
}

.main-content :deep(.preview-section.skills-advancement) {
  border-left-color: #fd7e14;
}

.main-content :deep(.preview-section.next-steps) {
  border-left-color: #20c997;
}

/* Learning Pillars */
.main-content :deep(.learning-pillars) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.main-content :deep(.pillar) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.main-content :deep(.pillar-icon) {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.main-content :deep(.pillar-content h6) {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.main-content :deep(.pillar-content p) {
  color: #6c757d;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Course Modules for L2 */
.main-content :deep(.l2-courses) {
  margin-top: 1.5rem;
}

.main-content :deep(.course-modules) {
  margin-top: 1rem;
}

.main-content :deep(.module-category) {
  margin-bottom: 1.5rem;
}

.main-content :deep(.module-category h6) {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-content :deep(.modules-list) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.main-content :deep(.module-item) {
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-left: 3px solid #17a2b8;
}

.main-content :deep(.module-item h7) {
  color: #2c3e50;
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
}

.main-content :deep(.module-item p) {
  color: #6c757d;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.3;
}

/* Skills Progression */
.main-content :deep(.skill-progression) {
  margin-top: 1rem;
}

.main-content :deep(.skill-areas) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.main-content :deep(.skill-area) {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content :deep(.skill-area.sensory) {
  border-top: 3px solid #e91e63;
}

.main-content :deep(.skill-area.knowledge) {
  border-top: 3px solid #2196f3;
}

.main-content :deep(.skill-area.practical) {
  border-top: 3px solid #4caf50;
}

.main-content :deep(.advancement-goals) {
  margin-top: 0.75rem;
}

.main-content :deep(.current-level),
.main-content :deep(.target-level) {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.main-content :deep(.current-level) {
  border-left: 3px solid #ffc107;
}

.main-content :deep(.target-level) {
  border-left: 3px solid #28a745;
}

.main-content :deep(.arrow-progression) {
  text-align: center;
  color: #28a745;
  font-weight: bold;
  margin: 0.5rem 0;
}

/* L2-1 Médoc Deep Dive Styles */
.medoc-geography {
  background: linear-gradient(135deg, #8e24aa 0%, #5e35b1 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

/* L2-2 Margaux Styles */
.margaux-terroir {
  background: linear-gradient(135deg, #e91e63 0%, #ad1457 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

/* L2-3 Pauillac Styles */
.pauillac-terroir {
  background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.pauillac-terroir .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #fff;
}

.pauillac-premiers {
  background: linear-gradient(135deg, #283593 0%, #1a237e 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.pauillac-premiers .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #fff;
}

.pauillac-style {
  background: linear-gradient(135deg, #303f9f 0%, #1976d2 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.pauillac-style .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #fff;
}

.premiers-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.premier-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.premier-section h4 {
  color: #bbdefb;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chateau-profile {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.profile-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #64b5f6;
}

.profile-card h5 {
  color: #e3f2fd;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.history-details, .terroir-analysis, .style-characteristics, .innovation-aspects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.historical-period, .vineyard-composition, .soil-profile, .grape-blend,
.aroma-profile, .palate-structure, .aging-character {
  margin-bottom: 1rem;
}

.historical-period h6, .vineyard-composition h6, .soil-profile h6,
.aroma-profile h6, .palate-structure h6 {
  color: #e1f5fe;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.grape-blend ul, .soil-benefits ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
}

.grape-blend li, .soil-benefits li {
  margin: 0.3rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;
}

.grape-blend li::before {
  content: "🍇";
  position: absolute;
  left: 0;
}

.comparison-analysis {
  margin-top: 1.5rem;
}

.comparison-matrix {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #42a5f5;
}

.comparison-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
}

.comparison-row {
  display: contents;
}

.comparison-header {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem;
  border-radius: 6px;
  font-weight: bold;
  color: #e3f2fd;
  text-align: center;
}

.comparison-cell {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.investment-comparison {
  margin-top: 1.5rem;
}

.investment-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.metric {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #2196f3;
}

.metric h6 {
  color: #e3f2fd;
  margin-bottom: 0.8rem;
}

/* Cabernet Sauvignon Analysis */
.cabernet-analysis, .sensory-analysis, .aging-analysis {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.variety-profile, .visual-characteristics, .aroma-complexity, 
.palate-structure, .aging-timeline {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #1976d2;
}

.variety-profile h5, .visual-characteristics h5, .aroma-complexity h5,
.palate-structure h5, .aging-timeline h5 {
  color: #e3f2fd;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cabernet-characteristics, .visual-profile, .aroma-profile {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.genetic-profile, .terroir-adaptation, .phenolic-development,
.color-intensity, .clarity-texture, .primary-aromas, .secondary-aromas, .tertiary-aromas {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.genetic-profile h6, .terroir-adaptation h6, .phenolic-development h6,
.color-intensity h6, .primary-aromas h6 {
  color: #e1f5fe;
  margin-bottom: 0.8rem;
}

.adaptation-factors, .fruit-categories, .oak-influence, .aging-bouquet {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.soil-match, .heat-absorption, .stress-response, .mineral-uptake,
.black-fruits, .red-fruits, .vanilla-spice, .toast-smoke {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-left: 2px solid #64b5f6;
}

.regional-expression {
  margin-top: 1.5rem;
}

.terroir-zones, .vintage-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.zone, .vintage-factor {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #1e88e5;
}

/* Timeline Stages */
.timeline-stages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.stage {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #1976d2;
}

.stage h6 {
  color: #e3f2fd;
  margin-bottom: 0.5rem;
}

.stage-characteristics {
  font-size: 0.9rem;
}

/* Tasting Guidelines */
.tasting-guidelines {
  margin-top: 1.5rem;
}

.tasting-protocol {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preparation, .tasting-sequence, .food-pairing {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #2196f3;
}

.prep-steps, .sequence-steps, .pairing-suggestions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-top: 0.8rem;
}

.temperature, .decanting, .glassware, .environment,
.visual, .aroma, .palate, .evaluation,
.red-meat, .rich-dishes, .aged-cheese, .chocolate {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  padding: 0.6rem;
  font-size: 0.9rem;
  border-left: 2px solid #42a5f5;
}

/* Investment Analysis */
.investment-perspective {
  margin-top: 1.5rem;
}

.investment-analysis {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.value-drivers, .market-performance {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #1565c0;
}

.drivers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-top: 0.8rem;
}

.scarcity, .quality, .reputation, .aging-potential {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  padding: 0.6rem;
  font-size: 0.9rem;
  border-left: 2px solid #1e88e5;
}

.margaux-terroir .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #fff;
}

.margaux-chateaux {
  background: linear-gradient(135deg, #c2185b 0%, #880e4f 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.margaux-chateaux .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #fff;
}

.margaux-style {
  background: linear-gradient(135deg, #d81b60 0%, #8e24aa 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.margaux-style .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #fff;
}

.terroir-analysis, .chateaux-analysis, .style-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.terroir-section, .chateau-section, .style-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.terroir-section h4, .chateau-section h4, .style-section h4 {
  color: #f8bbd9;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.geography-overview, .soil-analysis, .climate-analysis {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.location-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #f06292;
}

.location-card h5 {
  color: #f8bbd9;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.location-card h6 {
  color: #fce4ec;
  font-size: 0.9rem;
  margin: 0.8rem 0 0.4rem 0;
}

.commune-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
}

.commune {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 0.8rem;
  border-left: 3px solid #f48fb1;
}

.elevation-zones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.zone {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #ec407a;
}

.soil-characteristics {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.soil-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.soil-type {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.soil-type h6 {
  color: #f8bbd9;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.soil-type h7 {
  color: #fce4ec;
  font-size: 0.9rem;
  font-weight: bold;
  display: block;
  margin: 0.8rem 0 0.4rem 0;
}

.soil-benefits ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
}

.soil-benefits li {
  margin: 0.4rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;
}

.soil-benefits li::before {
  content: "🌸";
  position: absolute;
  left: 0;
}

.vineyard-practices {
  margin-top: 1.5rem;
}

.cultivation-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.method {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #e91e63;
}

.climate-elements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.element {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.element h6 {
  color: #f8bbd9;
  margin-bottom: 0.8rem;
}

.season-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.season {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #c2185b;
}

.season h6 {
  color: #f8bbd9;
  margin-bottom: 0.5rem;
}

/* Château Profiles */
.chateau-profile {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.profile-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #f06292;
}

.profile-card h5 {
  color: #f8bbd9;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.timeline-period, .terroir-details, .winemaking-process {
  margin-bottom: 1rem;
}

.timeline-period h6, .terroir-details h6, .process-stage h6 {
  color: #fce4ec;
  margin-bottom: 0.5rem;
}

.estates-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.estate-group h5 {
  color: #f8bbd9;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.estate-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.estate-card {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #ec407a;
}

.estate-card h6 {
  color: #f8bbd9;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.signature-traits {
  margin-top: 0.8rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  font-style: italic;
  border-left: 2px solid #f06292;
}

/* Style Analysis */
.style-profile {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.profile-aspect {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #e91e63;
}

.profile-aspect h5 {
  color: #f8bbd9;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sensory-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.sense {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.sense h6 {
  color: #f8bbd9;
  margin-bottom: 0.8rem;
}

.sense h7 {
  color: #fce4ec;
  font-size: 0.9rem;
  font-weight: bold;
  display: block;
  margin: 0.8rem 0 0.4rem 0;
}

.aroma-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
}

.aroma-category {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
  padding: 0.8rem;
  border-left: 3px solid #f48fb1;
}

.evolution-stage {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #c2185b;
  margin-bottom: 1rem;
}

.evolution-stage h6 {
  color: #f8bbd9;
  margin-bottom: 0.5rem;
}

/* Tasting Guide */
.tasting-methodology {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.preparation-steps, .tasting-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.step {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #d81b60;
}

.step h6 {
  color: #f8bbd9;
  margin-bottom: 0.8rem;
}

/* Food Pairing */
.pairing-philosophy {
  margin-bottom: 1.5rem;
}

.pairing-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.principle {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #e91e63;
}

.pairing-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.group {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #c2185b;
}

.group h6 {
  color: #f8bbd9;
  margin-bottom: 1rem;
}

.option {
  margin-bottom: 1rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
}

.avoid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
}

.avoid-item {
  background: rgba(255, 87, 34, 0.1);
  border: 1px solid rgba(255, 87, 34, 0.3);
  border-radius: 6px;
  padding: 0.8rem;
  font-size: 0.9rem;
}

.medoc-geography .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #fff;
}

.geography-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.geo-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.geo-section h4 {
  color: #f3e5f5;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.peninsula-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.location-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #ce93d8;
}

.location-card h5 {
  color: #e1bee7;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.location-card h6 {
  color: #f8bbd9;
  font-size: 0.9rem;
  margin: 0.8rem 0 0.4rem 0;
}

.strategic-advantages ul {
  list-style: none;
  padding-left: 0;
}

.strategic-advantages li {
  margin: 0.5rem 0;
  padding-left: 1rem;
  position: relative;
}

.strategic-advantages li::before {
  content: "⭐";
  position: absolute;
  left: 0;
}

.soil-composition {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.layer-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.soil-layer {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.soil-layer h6 {
  color: #e1bee7;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.layer-details ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0.8rem;
}

.layer-details li {
  margin: 0.3rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;
}

.layer-details li::before {
  content: "🔸";
  position: absolute;
  left: 0;
}

.regional-soils {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.soil-region {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #ab47bc;
}

.soil-region h6 {
  color: #e1bee7;
  margin-bottom: 0.8rem;
}

.soil-benefits ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
}

.soil-benefits li {
  margin: 0.4rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;
}

.soil-benefits li::before {
  content: "✨";
  position: absolute;
  left: 0;
}

.climate-systems {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.climate-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.factor {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.factor h6 {
  color: #e1bee7;
  margin-bottom: 0.8rem;
}

.microclimate-variations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.variation {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #9c27b0;
}

.microclimate-effects ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
}

.microclimate-effects li {
  margin: 0.4rem 0;
  padding-left: 1.2rem;
  position: relative;
  font-size: 0.9rem;
}

.microclimate-effects li::before {
  content: "🌡️";
  position: absolute;
  left: 0;
}

/* Classification System Styles */
.classification-system {
  background: linear-gradient(135deg, #6a1b9a 0%, #4a148c 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.classification-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.classification-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.grade-system {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.grade-tier {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.tier-header {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tier-header h5 {
  color: #f3e5f5;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tier-stats {
  display: flex;
  gap: 1rem;
  font-weight: bold;
}

.tier-stats .count {
  color: #ce93d8;
}

.tier-stats .percentage {
  color: #ba68c8;
}

.tier-content {
  padding: 1.5rem;
}

.estates-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.estate-card {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #ba68c8;
}

.estate-info h6 {
  color: #e1bee7;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.estate-details p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

.signature-style {
  margin-top: 0.8rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  font-style: italic;
  border-left: 2px solid #ce93d8;
}

.tier-characteristics {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
}

.tier-characteristics h6 {
  color: #e1bee7;
  margin-bottom: 0.8rem;
}

.tier-characteristics ul {
  list-style: none;
  padding-left: 0;
}

.tier-characteristics li {
  margin: 0.5rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;
}

.tier-characteristics li::before {
  content: "👑";
  position: absolute;
  left: 0;
}

/* Médoc Winemaking Styles */
.medoc-winemaking {
  background: linear-gradient(135deg, #7b1fa2 0%, #512da8 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.winemaking-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.winemaking-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.varietal-composition {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.blend-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #ab47bc;
}

.blend-card h6 {
  color: #e1bee7;
  margin-bottom: 1rem;
}

.main-content :deep(.primary-varieties), .main-content :deep(.supporting-varieties) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.variety {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.variety h7 {
  color: #ce93d8;
  font-weight: bold;
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.variety-role, .variety-contribution {
  font-size: 0.9rem;
}

.variety-role ul, .variety-contribution ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
}

.variety-role li, .variety-contribution li {
  margin: 0.3rem 0;
  padding-left: 1rem;
  position: relative;
}

.variety-role li::before, .variety-contribution li::before {
  content: "🍇";
  position: absolute;
  left: 0;
}

.production-process {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.process-stage {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #9c27b0;
}

.process-stage h5 {
  color: #e1bee7;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sensory-aspects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.aspect {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.aspect h6 {
  color: #e1bee7;
  margin-bottom: 0.8rem;
}

.aging-phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.phase {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #ba68c8;
}

.phase h6 {
  color: #e1bee7;
  margin-bottom: 0.5rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .main-content :deep(.knowledge-integration),
  .main-content :deep(.assessment-system),
  .main-content :deep(.advanced-learning) {
    gap: 1rem;
  }

  .main-content :deep(.modules-grid),
  .main-content :deep(.test-categories),
  .main-content :deep(.score-categories),
  .main-content :deep(.learning-pillars),
  .main-content :deep(.skill-areas) {
    grid-template-columns: 1fr;
  }

  .main-content :deep(.connection-flow),
  .main-content :deep(.flow-step-second) {
    flex-direction: column;
    gap: 0.5rem;
  }

  .main-content :deep(.arrow) {
    transform: rotate(90deg);
  }

  .main-content :deep(.cert-level) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  /* L2-1 Mobile Responsive */
  .medoc-geography, .classification-system, .medoc-winemaking {
    padding: 1rem;
  }
  
  .peninsula-layout, .estates-list, .main-content :deep(.primary-varieties), .main-content :deep(.supporting-varieties),
  .regional-soils, .climate-factors, .microclimate-variations, 
  .sensory-aspects, .aging-phases {
    grid-template-columns: 1fr;
  }
  
  .geo-section, .classification-section, .winemaking-section {
    padding: 1rem;
  }

  /* L2-2 Mobile Responsive */
  .margaux-terroir, .margaux-chateaux, .margaux-style {
    padding: 1rem;
  }
  
  .location-details, .commune-details, .elevation-zones, .soil-breakdown,
  .cultivation-methods, .climate-elements, .season-analysis, .chateau-profile,
  .estate-cards, .sensory-breakdown, .aroma-categories, .preparation-steps,
  .tasting-steps, .pairing-principles, .pairing-groups, .avoid-list {
    grid-template-columns: 1fr;
  }
  
  .terroir-section, .chateau-section, .style-section {
    padding: 1rem;
  }

  /* L2-3 Mobile Responsive */
  .pauillac-terroir, .pauillac-premiers, .pauillac-style {
    padding: 1rem;
  }
  
  .chateau-profile, .comparison-table, .investment-metrics, .cabernet-characteristics,
  .visual-profile, .aroma-profile, .terroir-zones, .vintage-factors, .timeline-stages,
  .prep-steps, .sequence-steps, .pairing-suggestions, .drivers {
    grid-template-columns: 1fr;
  }
  
  .premier-section {
    padding: 1rem;
  }

  .comparison-table {
    display: block;
  }
  
  .comparison-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
}

/* L2-4 Saint-Julien Styles */
.saint-julien-terroir {
  background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.saint-julien-terroir .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.saint-julien-terroir .terroir-analysis {
  display: grid;
  gap: 2rem;
}

.saint-julien-terroir .terroir-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #66bb6a;
}

.saint-julien-terroir .terroir-section h4 {
  color: #c8e6c9;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-julien-terroir .geography-overview {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-terroir .location-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-julien-terroir .location-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.saint-julien-terroir .location-card h5 {
  color: #a5d6a7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-julien-terroir .strategic-advantages ul,
.saint-julien-terroir .consistency-factors ul,
.saint-julien-terroir .boundary-analysis ul {
  list-style: none;
  padding: 0;
}

.saint-julien-terroir .strategic-advantages li,
.saint-julien-terroir .consistency-factors li,
.saint-julien-terroir .boundary-analysis li {
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 3px solid #81c784;
}

.saint-julien-terroir .consistency-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.saint-julien-terroir .factor {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-terroir .factor h6 {
  color: #c8e6c9;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.saint-julien-terroir .boundary-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.saint-julien-terroir .soil-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-terroir .soil-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-julien-terroir .soil-type {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(102, 187, 106, 0.4);
}

.saint-julien-terroir .soil-type h6 {
  color: #a5d6a7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.saint-julien-terroir .soil-benefits ul {
  list-style: none;
  padding: 0;
}

.saint-julien-terroir .soil-benefits li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 6px;
  border-left: 2px solid #66bb6a;
}

.saint-julien-terroir .management-excellence {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.saint-julien-terroir .practice {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.saint-julien-terroir .practice h6 {
  color: #c8e6c9;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.saint-julien-terroir .density-advantages ul,
.saint-julien-terroir .canopy-objectives ul {
  list-style: none;
  padding: 0;
}

.saint-julien-terroir .density-advantages li,
.saint-julien-terroir .canopy-objectives li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #81c784;
}

.saint-julien-terroir .rootstock-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-terroir .benefit {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-terroir .climate-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-terroir .climate-advantages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-julien-terroir .advantage {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.saint-julien-terroir .advantage h6 {
  color: #a5d6a7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.saint-julien-terroir .moderation-effects ul,
.saint-julien-terroir .precipitation-effects ul,
.saint-julien-terroir .sunshine-benefits ul {
  list-style: none;
  padding: 0;
}

.saint-julien-terroir .moderation-effects li,
.saint-julien-terroir .precipitation-effects li,
.saint-julien-terroir .sunshine-benefits li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.4rem 0;
  padding: 0.6rem;
  border-radius: 6px;
  border-left: 2px solid #66bb6a;
}

.saint-julien-terroir .stability-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.saint-julien-terroir .factor {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-terroir .buffer-effects ul,
.saint-julien-terroir .protection-benefits ul,
.saint-julien-terroir .drainage-advantages ul {
  list-style: none;
  padding: 0;
}

.saint-julien-terroir .buffer-effects li,
.saint-julien-terroir .protection-benefits li,
.saint-julien-terroir .drainage-advantages li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #81c784;
}

.saint-julien-chateaux {
  background: linear-gradient(135deg, #388e3c 0%, #66bb6a 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.saint-julien-chateaux .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.saint-julien-chateaux .chateaux-analysis {
  display: grid;
  gap: 2rem;
}

.saint-julien-chateaux .chateau-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #81c784;
}

.saint-julien-chateaux .chateau-section h4 {
  color: #c8e6c9;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-julien-chateaux .chateau-profile {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-chateaux .profile-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-chateaux .profile-card h5 {
  color: #a5d6a7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-julien-chateaux .history-timeline {
  display: grid;
  gap: 1rem;
}

.saint-julien-chateaux .period {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #66bb6a;
}

.saint-julien-chateaux .period h6 {
  color: #c8e6c9;
  margin-bottom: 0.5rem;
}

.saint-julien-chateaux .terroir-details {
  display: grid;
  gap: 1rem;
}

.saint-julien-chateaux .vineyard-composition,
.saint-julien-chateaux .soil-characteristics {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-chateaux .grape-varieties ul {
  list-style: none;
  padding: 0;
}

.saint-julien-chateaux .grape-varieties li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #81c784;
}

.saint-julien-chateaux .style-analysis {
  display: grid;
  gap: 1rem;
}

.saint-julien-chateaux .elegance-power,
.saint-julien-chateaux .signature-character {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-chateaux .leoville-overview {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.saint-julien-chateaux .leoville-estates {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-chateaux .estate {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.saint-julien-chateaux .estate h5 {
  color: #a5d6a7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-julien-chateaux .estate-profile {
  display: grid;
  gap: 1rem;
}

.saint-julien-chateaux .profile-section {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 8px;
  border-left: 2px solid #66bb6a;
}

.saint-julien-chateaux .profile-section h6 {
  color: #c8e6c9;
  margin-bottom: 0.5rem;
}

.saint-julien-chateaux .profile-section ul {
  list-style: none;
  padding: 0;
}

.saint-julien-chateaux .profile-section li {
  background: rgba(255, 255, 255, 0.1);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #81c784;
}

.saint-julien-chateaux .other-chateaux {
  display: grid;
  gap: 1rem;
}

.saint-julien-chateaux .estate-brief {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-chateaux .estate-brief h6 {
  color: #a5d6a7;
  margin-bottom: 0.5rem;
}

.saint-julien-chateaux .comparison-matrix {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
}

.saint-julien-chateaux .comparison-table {
  width: 100%;
  border-collapse: collapse;
}

.saint-julien-chateaux .comparison-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.8rem;
  border-bottom: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-chateaux .comparison-row.header {
  background: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  color: #c8e6c9;
  border-radius: 8px 8px 0 0;
}

.saint-julien-chateaux .cell {
  padding: 0.5rem;
  text-align: center;
  border-radius: 5px;
}

.saint-julien-chateaux .comparison-row:not(.header) .cell {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(165, 214, 167, 0.2);
}

.saint-julien-style {
  background: linear-gradient(135deg, #1b5e20 0%, #4caf50 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.saint-julien-style .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.saint-julien-style .style-analysis {
  display: grid;
  gap: 2rem;
}

.saint-julien-style .style-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #66bb6a;
}

.saint-julien-style .style-section h4 {
  color: #c8e6c9;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-julien-style .balance-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-style .component-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-julien-style .component {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(102, 187, 106, 0.4);
}

.saint-julien-style .component h6 {
  color: #a5d6a7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.saint-julien-style .unity-characteristics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-style .characteristic {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-style .consistency-evidence {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-style .evidence {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-style .typicity-markers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-style .marker {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-style .comparison-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-style .vs-pauillac,
.saint-julien-style .vs-margaux,
.saint-julien-style .vs-saint-estephe {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.saint-julien-style .vs-pauillac h6,
.saint-julien-style .vs-margaux h6,
.saint-julien-style .vs-saint-estephe h6 {
  color: #a5d6a7;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.saint-julien-style .advantage-points ul {
  list-style: none;
  padding: 0;
}

.saint-julien-style .advantage-points li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 6px;
  border-left: 2px solid #66bb6a;
}

.saint-julien-style .sensory-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-style .visual-characteristics {
  display: grid;
  gap: 1rem;
}

.saint-julien-style .color-stages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-style .stage {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-style .aroma-profile {
  display: grid;
  gap: 1rem;
}

.saint-julien-style .fruit-spectrum {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-style .dark-fruits,
.saint-julien-style .red-fruits,
.saint-julien-style .fruit-intensity,
.saint-julien-style .fruit-purity {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-style .oak-integration {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-style .spice-notes,
.saint-julien-style .toast-elements,
.saint-julien-style .wood-character,
.saint-julien-style .integration-quality {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-style .aging-bouquet {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.saint-julien-style .earthy-mineral,
.saint-julien-style .leather-tobacco,
.saint-julien-style .forest-floor,
.saint-julien-style .floral-herbs {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(129, 199, 132, 0.3);
}

.saint-julien-style .structural-analysis {
  display: grid;
  gap: 1rem;
}

.saint-julien-style .texture-profile,
.saint-julien-style .tannin-characteristics,
.saint-julien-style .acid-profile,
.saint-julien-style .finish-analysis {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(165, 214, 167, 0.3);
}

.saint-julien-style .young-tannins,
.saint-julien-style .mature-tannins,
.saint-julien-style .tannin-quality,
.saint-julien-style .integration-level {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 6px;
  border-left: 2px solid #66bb6a;
}

.saint-julien-style .pairing-investment {
  display: grid;
  gap: 1.5rem;
}

.saint-julien-style .pairing-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-julien-style .category {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.saint-julien-style .category h6 {
  color: #a5d6a7;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.saint-julien-style .pairing-suggestions {
  display: grid;
  gap: 0.5rem;
}

.saint-julien-style .dish {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 2px solid #66bb6a;
}

.saint-julien-style .pairing-principle {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  border: 1px solid rgba(165, 214, 167, 0.3);
  font-style: italic;
}

.saint-julien-style .investment-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-julien-style .factor {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(129, 199, 132, 0.4);
}

.saint-julien-style .factor h6 {
  color: #a5d6a7;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.saint-julien-style .stability-data ul,
.saint-julien-style .value-comparison ul,
.saint-julien-style .trend-indicators ul {
  list-style: none;
  padding: 0;
}

.saint-julien-style .stability-data li,
.saint-julien-style .value-comparison li,
.saint-julien-style .trend-indicators li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #81c784;
}

/* L2-4 Mobile Responsive */
@media (max-width: 768px) {
  .saint-julien-terroir .location-details,
  .saint-julien-chateaux .chateaux-analysis,
  .saint-julien-style .style-analysis {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .saint-julien-terroir .soil-breakdown,
  .saint-julien-terroir .management-excellence,
  .saint-julien-terroir .climate-advantages {
    grid-template-columns: 1fr;
  }
  
  .saint-julien-chateaux .leoville-estates,
  .saint-julien-chateaux .other-chateaux {
    grid-template-columns: 1fr;
  }
  
  .saint-julien-chateaux .comparison-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .saint-julien-style .component-breakdown,
  .saint-julien-style .pairing-categories,
  .saint-julien-style .investment-factors {
    grid-template-columns: 1fr;
  }
  
  .saint-julien-style .unity-characteristics,
  .saint-julien-style .consistency-evidence,
  .saint-julien-style .typicity-markers {
    grid-template-columns: 1fr;
  }
  
  .saint-julien-style .color-stages,
  .saint-julien-style .fruit-spectrum,
  .saint-julien-style .oak-integration,
  .saint-julien-style .aging-bouquet {
    grid-template-columns: 1fr;
  }
  
  .saint-julien-terroir .terroir-section,
  .saint-julien-chateaux .chateau-section,
  .saint-julien-style .style-section {
    padding: 1rem;
  }
  
  .saint-julien-terroir .lead-text,
  .saint-julien-chateaux .lead-text,
  .saint-julien-style .lead-text {
    font-size: 1.1rem;
    padding: 0.8rem;
  }
}

/* L2-5 Saint-Estèphe Styles */
.saint-estephe-terroir {
  background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.saint-estephe-terroir .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.saint-estephe-terroir .terroir-analysis {
  display: grid;
  gap: 2rem;
}

.saint-estephe-terroir .terroir-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #ba68c8;
}

.saint-estephe-terroir .terroir-section h4 {
  color: #e1bee7;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-estephe-terroir .geography-overview {
  display: grid;
  gap: 1.5rem;
}

.saint-estephe-terroir .location-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-estephe-terroir .location-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(186, 104, 200, 0.3);
}

.saint-estephe-terroir .location-card h5 {
  color: #ce93d8;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-estephe-terroir .northern-advantages ul,
.saint-estephe-terroir .elevation-details ul,
.saint-estephe-terroir .boundary-analysis ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-terroir .northern-advantages li,
.saint-estephe-terroir .elevation-details li,
.saint-estephe-terroir .boundary-analysis li {
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 3px solid #ab47bc;
}

.saint-estephe-terroir .elevation-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.saint-estephe-terroir .high-plateau,
.saint-estephe-terroir .mid-slopes,
.saint-estephe-terroir .lower-areas {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-terroir .high-plateau h6,
.saint-estephe-terroir .mid-slopes h6,
.saint-estephe-terroir .lower-areas h6 {
  color: #e1bee7;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.saint-estephe-terroir .boundary-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.saint-estephe-terroir .soil-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-estephe-terroir .soil-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-estephe-terroir .soil-type {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(171, 71, 188, 0.4);
}

.saint-estephe-terroir .soil-type h6 {
  color: #ce93d8;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.saint-estephe-terroir .soil-benefits ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-terroir .soil-benefits li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 6px;
  border-left: 2px solid #ba68c8;
}

.saint-estephe-terroir .challenge-management {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.saint-estephe-terroir .challenge {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(186, 104, 200, 0.3);
}

.saint-estephe-terroir .challenge h6 {
  color: #e1bee7;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.saint-estephe-terroir .drainage-solutions ul,
.saint-estephe-terroir .temperature-solutions ul,
.saint-estephe-terroir .mechanization-solutions ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-terroir .drainage-solutions li,
.saint-estephe-terroir .temperature-solutions li,
.saint-estephe-terroir .mechanization-solutions li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #ab47bc;
}

.saint-estephe-terroir .climate-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-estephe-terroir .climate-elements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-estephe-terroir .element {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(186, 104, 200, 0.4);
}

.saint-estephe-terroir .element h6 {
  color: #ce93d8;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.saint-estephe-terroir .cooler-effects ul,
.saint-estephe-terroir .atlantic-effects ul,
.saint-estephe-terroir .river-effects ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-terroir .cooler-effects li,
.saint-estephe-terroir .atlantic-effects li,
.saint-estephe-terroir .river-effects li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.4rem 0;
  padding: 0.6rem;
  border-radius: 6px;
  border-left: 2px solid #ba68c8;
}

.saint-estephe-terroir .season-strategies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.saint-estephe-terroir .season {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-terroir .season h6 {
  color: #e1bee7;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.saint-estephe-terroir .season-details ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-terroir .season-details li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #ab47bc;
}

.saint-estephe-chateaux {
  background: linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.saint-estephe-chateaux .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.saint-estephe-chateaux .chateaux-analysis {
  display: grid;
  gap: 2rem;
}

.saint-estephe-chateaux .chateau-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #ab47bc;
}

.saint-estephe-chateaux .chateau-section h4 {
  color: #e1bee7;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-estephe-chateaux .chateau-profile {
  display: grid;
  gap: 1.5rem;
}

.saint-estephe-chateaux .profile-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-chateaux .profile-card h5 {
  color: #ce93d8;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-estephe-chateaux .history-details {
  display: grid;
  gap: 1rem;
}

.saint-estephe-chateaux .historical-period {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #ba68c8;
}

.saint-estephe-chateaux .historical-period h6 {
  color: #e1bee7;
  margin-bottom: 0.5rem;
}

.saint-estephe-chateaux .terroir-details {
  display: grid;
  gap: 1rem;
}

.saint-estephe-chateaux .vineyard-excellence,
.saint-estephe-chateaux .soil-composition,
.saint-estephe-chateaux .microclimate {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(225, 190, 231, 0.3);
}

.saint-estephe-chateaux .grape-selection ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-chateaux .grape-selection li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #ab47bc;
}

.saint-estephe-chateaux .innovation-aspects {
  display: grid;
  gap: 1rem;
}

.saint-estephe-chateaux .modern-facilities,
.saint-estephe-chateaux .precision-viticulture,
.saint-estephe-chateaux .style-evolution {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-chateaux .heritage-details {
  display: grid;
  gap: 1rem;
}

.saint-estephe-chateaux .historical-foundation,
.saint-estephe-chateaux .charmolue-era,
.saint-estephe-chateaux .bouygues-era {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #ba68c8;
}

.saint-estephe-chateaux .terroir-analysis {
  display: grid;
  gap: 1rem;
}

.saint-estephe-chateaux .vineyard-position,
.saint-estephe-chateaux .soil-uniqueness,
.saint-estephe-chateaux .microclimate {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(225, 190, 231, 0.3);
}

.saint-estephe-chateaux .modernization-projects {
  display: grid;
  gap: 1rem;
}

.saint-estephe-chateaux .winery-renovation,
.saint-estephe-chateaux .vineyard-improvement,
.saint-estephe-chateaux .quality-enhancement {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-chateaux .other-chateaux {
  display: grid;
  gap: 1rem;
}

.saint-estephe-chateaux .chateau-brief {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(225, 190, 231, 0.3);
}

.saint-estephe-chateaux .chateau-brief h5 {
  color: #ce93d8;
  margin-bottom: 0.5rem;
}

.saint-estephe-chateaux .estate-highlights {
  display: grid;
  gap: 0.5rem;
}

.saint-estephe-chateaux .comparison-framework {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
}

.saint-estephe-chateaux .comparison-table {
  width: 100%;
  border-collapse: collapse;
}

.saint-estephe-chateaux .comparison-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.8rem;
  border-bottom: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-chateaux .comparison-row.header {
  background: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  color: #e1bee7;
  border-radius: 8px 8px 0 0;
}

.saint-estephe-chateaux .cell {
  padding: 0.5rem;
  text-align: center;
  border-radius: 5px;
}

.saint-estephe-chateaux .comparison-row:not(.header) .cell {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(225, 190, 231, 0.2);
}

.saint-estephe-evolution {
  background: linear-gradient(135deg, #8e24aa 0%, #ab47bc 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.saint-estephe-evolution .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.saint-estephe-evolution .evolution-analysis {
  display: grid;
  gap: 2rem;
}

.saint-estephe-evolution .evolution-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #ba68c8;
}

.saint-estephe-evolution .evolution-section h4 {
  color: #e1bee7;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.saint-estephe-evolution .traditional-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-estephe-evolution .traditional-characteristics {
  display: grid;
  gap: 1rem;
}

.saint-estephe-evolution .style-elements {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(186, 104, 200, 0.4);
}

.saint-estephe-evolution .traditional-features {
  display: grid;
  gap: 0.5rem;
}

.saint-estephe-evolution .traditional-advantages ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-evolution .traditional-advantages li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 6px;
  border-left: 2px solid #ba68c8;
}

.saint-estephe-evolution .historical-challenges {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-evolution .challenge-factors {
  display: grid;
  gap: 0.5rem;
}

.saint-estephe-evolution .driver-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.saint-estephe-evolution .market-demand,
.saint-estephe-evolution .technological-advancement,
.saint-estephe-evolution .generational-change {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(225, 190, 231, 0.3);
}

.saint-estephe-evolution .market-demand h6,
.saint-estephe-evolution .technological-advancement h6,
.saint-estephe-evolution .generational-change h6 {
  color: #ce93d8;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.saint-estephe-evolution .technological-revolution {
  display: grid;
  gap: 1.5rem;
}

.saint-estephe-evolution .vineyard-tech {
  display: grid;
  gap: 1rem;
}

.saint-estephe-evolution .precision-agriculture,
.saint-estephe-evolution .drainage-improvement,
.saint-estephe-evolution .canopy-management {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(186, 104, 200, 0.3);
}

.saint-estephe-evolution .precision-tools ul,
.saint-estephe-evolution .drainage-solutions ul,
.saint-estephe-evolution .canopy-techniques ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-evolution .precision-tools li,
.saint-estephe-evolution .drainage-solutions li,
.saint-estephe-evolution .canopy-techniques li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #ab47bc;
}

.saint-estephe-evolution .winemaking-tech {
  display: grid;
  gap: 1rem;
}

.saint-estephe-evolution .fermentation-control,
.saint-estephe-evolution .extraction-techniques,
.saint-estephe-evolution .aging-innovation {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-evolution .fermentation-advances ul,
.saint-estephe-evolution .extraction-methods ul,
.saint-estephe-evolution .aging-techniques ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-evolution .fermentation-advances li,
.saint-estephe-evolution .extraction-methods li,
.saint-estephe-evolution .aging-techniques li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #ab47bc;
}

.saint-estephe-evolution .quality-systems {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.saint-estephe-evolution .laboratory-analysis,
.saint-estephe-evolution .traceability-system {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(225, 190, 231, 0.3);
}

.saint-estephe-evolution .modern-style-analysis {
  display: grid;
  gap: 1.5rem;
}

.saint-estephe-evolution .modern-characteristics {
  display: grid;
  gap: 1rem;
}

.saint-estephe-evolution .balance-achievement,
.saint-estephe-evolution .accessibility-improvement,
.saint-estephe-evolution .complexity-retention {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(186, 104, 200, 0.3);
}

.saint-estephe-evolution .balance-aspects ul,
.saint-estephe-evolution .accessibility-factors ul,
.saint-estephe-evolution .complexity-elements ul {
  list-style: none;
  padding: 0;
}

.saint-estephe-evolution .balance-aspects li,
.saint-estephe-evolution .accessibility-factors li,
.saint-estephe-evolution .complexity-elements li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #ba68c8;
}

.saint-estephe-evolution .market-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.saint-estephe-evolution .consumer-acceptance,
.saint-estephe-evolution .critical-acclaim,
.saint-estephe-evolution .investment-value {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(206, 147, 216, 0.3);
}

.saint-estephe-evolution .future-trends {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.saint-estephe-evolution .continued-innovation,
.saint-estephe-evolution .market-expansion {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(225, 190, 231, 0.3);
}

/* L2-5 Mobile Responsive */
@media (max-width: 768px) {
  .saint-estephe-terroir .location-details,
  .saint-estephe-chateaux .chateaux-analysis,
  .saint-estephe-evolution .evolution-analysis {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .saint-estephe-terroir .soil-breakdown,
  .saint-estephe-terroir .challenge-management,
  .saint-estephe-terroir .climate-elements {
    grid-template-columns: 1fr;
  }
  
  .saint-estephe-chateaux .chateau-profile,
  .saint-estephe-chateaux .other-chateaux {
    grid-template-columns: 1fr;
  }
  
  .saint-estephe-chateaux .comparison-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .saint-estephe-evolution .driver-analysis,
  .saint-estephe-evolution .modern-characteristics,
  .saint-estephe-evolution .market-analysis {
    grid-template-columns: 1fr;
  }
  
  .saint-estephe-evolution .vineyard-tech,
  .saint-estephe-evolution .winemaking-tech,
  .saint-estephe-evolution .quality-systems {
    grid-template-columns: 1fr;
  }
  
  .saint-estephe-terroir .terroir-section,
  .saint-estephe-chateaux .chateau-section,
  .saint-estephe-evolution .evolution-section {
    padding: 1rem;
  }
  
  .saint-estephe-terroir .lead-text,
  .saint-estephe-chateaux .lead-text,
  .saint-estephe-evolution .lead-text {
    font-size: 1.1rem;
    padding: 0.8rem;
  }
}

/* L2-6 Pomerol Styles */
.pomerol-terroir {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.pomerol-terroir .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.pomerol-terroir .terroir-analysis {
  display: grid;
  gap: 2rem;
}

.pomerol-terroir .terroir-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #3f51b5;
}

.pomerol-terroir .terroir-section h4 {
  color: #c5cae9;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pomerol-terroir .geography-overview {
  display: grid;
  gap: 1.5rem;
}

.pomerol-terroir .location-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.pomerol-terroir .location-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(63, 81, 181, 0.3);
}

.pomerol-terroir .location-card h5 {
  color: #9fa8da;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pomerol-terroir .scale-advantages ul,
.pomerol-terroir .border-details ul,
.pomerol-terroir .elevation-zones ul {
  list-style: none;
  padding: 0;
}

.pomerol-terroir .scale-advantages li,
.pomerol-terroir .neighbor-advantages li,
.pomerol-terroir .access-advantages li {
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 3px solid #5c6bc0;
}

.pomerol-chateaux {
  background: linear-gradient(135deg, #283593 0%, #3949ab 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.pomerol-chateaux .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.pomerol-chateaux .chateaux-analysis {
  display: grid;
  gap: 2rem;
}

.pomerol-chateaux .chateau-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #5c6bc0;
}

.pomerol-chateaux .chateau-section h4 {
  color: #c5cae9;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pomerol-chateaux .chateau-profile {
  display: grid;
  gap: 1.5rem;
}

.pomerol-chateaux .profile-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(197, 202, 233, 0.3);
}

.pomerol-chateaux .profile-card h5 {
  color: #9fa8da;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pomerol-chateaux .legend-details,
.pomerol-chateaux .terroir-details,
.pomerol-chateaux .winemaking-details {
  display: grid;
  gap: 1rem;
}

.pomerol-chateaux .milestone-timeline,
.pomerol-chateaux .soil-layers,
.pomerol-chateaux .variety-breakdown {
  display: grid;
  gap: 0.8rem;
}

.pomerol-chateaux .milestone,
.pomerol-chateaux .harvest-process,
.pomerol-chateaux .fermentation-process {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #7986cb;
}

.pomerol-chateaux .soil-benefits ul,
.pomerol-chateaux .distinctive-features ul {
  list-style: none;
  padding: 0;
}

.pomerol-chateaux .soil-benefits li,
.pomerol-chateaux .distinctive-features li {
  background: rgba(255, 255, 255, 0.08);
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 2px solid #5c6bc0;
}

.pomerol-chateaux .legendary-estates {
  display: grid;
  gap: 2rem;
}

.pomerol-chateaux .estate-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.pomerol-chateaux .estate-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(159, 168, 218, 0.3);
}

.pomerol-chateaux .estate-card h6 {
  color: #c5cae9;
  margin-bottom: 1rem;
}

.pomerol-chateaux .investment-analysis {
  display: grid;
  gap: 2rem;
}

.pomerol-chateaux .market-dynamics,
.pomerol-chateaux .collection-aspects {
  display: grid;
  gap: 1rem;
}

.pomerol-chateaux .price-factors,
.pomerol-chateaux .performance-metrics,
.pomerol-chateaux .rarity-elements {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(197, 202, 233, 0.3);
}

.pomerol-chateaux .vintage-tiers {
  display: grid;
  gap: 0.8rem;
}

.pomerol-chateaux .legendary-vintages,
.pomerol-chateaux .great-vintages,
.pomerol-chateaux .good-vintages {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #7986cb;
}

.pomerol-style {
  background: linear-gradient(135deg, #3949ab 0%, #5e35b1 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
}

.pomerol-style .lead-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.pomerol-style .style-analysis {
  display: grid;
  gap: 2rem;
}

.pomerol-style .style-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #7986cb;
}

.pomerol-style .style-section h4 {
  color: #c5cae9;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pomerol-style .style-profile {
  display: grid;
  gap: 1.5rem;
}

.pomerol-style .sensory-breakdown {
  display: grid;
  gap: 1rem;
}

.pomerol-style .visual-characteristics,
.pomerol-style .aroma-layers,
.pomerol-style .palate-elements {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(121, 134, 203, 0.4);
}

.pomerol-style .visual-characteristics h6,
.pomerol-style .aroma-layers h7,
.pomerol-style .palate-elements h7 {
  color: #9fa8da;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.pomerol-style .evolution-stages,
.pomerol-style .fruit-characteristics,
.pomerol-style .floral-profile {
  display: grid;
  gap: 0.5rem;
}

.pomerol-style .stage,
.pomerol-style .dark-fruits,
.pomerol-style .flower-notes {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 2px solid #7986cb;
}

.pomerol-style .uniqueness-analysis {
  display: grid;
  gap: 1.5rem;
}

.pomerol-style .merlot-excellence,
.pomerol-style .distinctive-features,
.pomerol-style .terroir-characteristics {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(159, 168, 218, 0.3);
}

.pomerol-style .market-overview {
  display: grid;
  gap: 2rem;
}

.pomerol-style .price-tiers {
  display: grid;
  gap: 1rem;
}

.pomerol-style .tier-ultra-premium,
.pomerol-style .tier-premium,
.pomerol-style .tier-excellent {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(197, 202, 233, 0.3);
}

.pomerol-style .ultra-premium-wines,
.pomerol-style .premium-wines,
.pomerol-style .excellent-wines {
  display: grid;
  gap: 0.8rem;
}

.pomerol-style .petrus-pricing,
.pomerol-style .le-pin-pricing,
.pomerol-style .lafleur-pricing {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #9fa8da;
}

.pomerol-style .investment-elements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.pomerol-style .scarcity-analysis,
.pomerol-style .quality-factors,
.pomerol-style .recognition-factors {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(121, 134, 203, 0.3);
}

.pomerol-style .outlook-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.pomerol-style .growth-drivers,
.pomerol-style .constraint-factors,
.pomerol-style .advice-points {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(159, 168, 218, 0.3);
}

/* L2-6 Mobile Responsive */
@media (max-width: 768px) {
  .pomerol-terroir .location-details,
  .pomerol-chateaux .chateaux-analysis,
  .pomerol-style .style-analysis {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .pomerol-chateaux .estate-cards,
  .pomerol-chateaux .investment-analysis,
  .pomerol-style .investment-elements {
    grid-template-columns: 1fr;
  }
  
  .pomerol-style .price-tiers,
  .pomerol-style .outlook-analysis {
    grid-template-columns: 1fr;
  }
  
  .pomerol-terroir .terroir-section,
  .pomerol-chateaux .chateau-section,
  .pomerol-style .style-section {
    padding: 1rem;
  }
  
  .pomerol-terroir .lead-text,
  .pomerol-chateaux .lead-text,
  .pomerol-style .lead-text {
    font-size: 1.1rem;
    padding: 0.8rem;
  }
}

/* Saint-Émilion 紅色主題 */
.saint-emilion-heritage, .saint-emilion-chateaux, .saint-emilion-style {
  background: linear-gradient(135deg, #880e1f 0%, #b71c1c 50%, #c62828 100%);
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(136,14,31,0.12);
  margin-bottom: 2rem;
  padding: 2rem 1.5rem;
}

.saint-emilion-heritage h4, .saint-emilion-chateaux h4, .saint-emilion-style h4 {
  color: #ffcdd2;
  margin-bottom: 1rem;
}

.saint-emilion-heritage ul, .saint-emilion-chateaux ul, .saint-emilion-style ul {
  margin: 0.5rem 0 1.2rem 1.2rem;
  padding: 0;
  list-style: disc inside;
  color: #fff;
}

.saint-emilion-heritage .lead-text,
.saint-emilion-chateaux .lead-text,
.saint-emilion-style .lead-text {
  font-size: 1.15rem;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin-bottom: 1.2rem;
}

.saint-emilion-chateaux .chateaux-section,
.saint-emilion-style .terroir-section,
.saint-emilion-style .investment-section {
  background: rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  margin-bottom: 1.2rem;
}

.saint-emilion-chateaux ul li strong,
.saint-emilion-style ul li strong {
  color: #ffebee;
}

@media (max-width: 768px) {
  .saint-emilion-heritage, .saint-emilion-chateaux, .saint-emilion-style {
    padding: 1rem 0.5rem;
  }
}

</style>