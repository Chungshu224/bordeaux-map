<template>
  <div class="hu-tf-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍯 托卡伊知識閃問</h1>
        <p class="subtitle">托卡伊・Aszú・匈牙利葡萄酒全面考驗！</p>
        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">基礎知識問答</div>
            <ul class="diff-list">
              <li>產區・品種・Aszú 入門</li>
              <li>⏱ 每題 8 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">進階專業挑戰</div>
            <ul class="diff-list">
              <li>法規・酒莊・釀造細節</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 20 題</li>
            </ul>
          </div>
        </div>

        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab==='easy' }" @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab==='hard' }" @click="setLbTab('hard')">困難</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-empty">載入中…</div>
          <table v-else class="lb-table">
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>正確率</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r,i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">
      <div class="top-bar">
        <div class="progress-row">
          <span class="q-num">{{ currentIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill"
            :style="{ width: timerPct + '%', background: timerColor }"
            :class="{ urgent: timerPct < 25 }">
          </div>
        </div>
      </div>

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">🔥 {{ streak }} 連勝！× {{ comboMult }}</div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="category-tag">{{ currentQ?.category }}</div>
            <div class="question-text">{{ currentQ?.question }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！{{ currentQ?.explanation }}</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到！{{ currentQ?.explanation }}</span>
              <span v-else class="fb-wrong">✗ 答錯。{{ currentQ?.explanation }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="options-grid">
        <button
          v-for="(opt, oi) in currentQ?.options"
          :key="oi"
          class="opt-btn"
          :class="[
            phase === 'feedback' ? 'frozen' : '',
            phase === 'feedback' && oi === currentQ.correct ? 'highlight-correct' : '',
            phase === 'feedback' && lastPicked === oi && oi !== currentQ.correct ? 'highlight-wrong' : '',
          ]"
          @click="answer(oi)"
        >
          <span class="opt-key">{{ ['A','B','C','D'][oi] }}</span>
          <span class="opt-text">{{ opt }}</span>
        </button>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 簡單' : '🏆 困難' }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.question" class="review-row">
            <div class="review-q">{{ w.question }}</div>
            <div class="review-a">✓ {{ w.options[w.correct] }}</div>
          </div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── 題庫 ──────────────────────────────────────────────────────
const EASY_QUESTIONS = [
  {
    category: '🗺️ 產區地理',
    question: '匈牙利最著名的甜酒產區是？',
    options: ['維拉尼', '埃格爾', '托卡伊', '巴達喬尼'],
    correct: 2,
    explanation: '托卡伊（Tokaj）以 Aszú 貴腐甜酒聞名，是匈牙利最具代表性的產區。',
  },
  {
    category: '🍇 品種知識',
    question: '托卡伊 Aszú 最重要的骨幹葡萄品種是？',
    options: ['Hárslevelű', 'Furmint', 'Sárga Muskotály', 'Zéta'],
    correct: 1,
    explanation: 'Furmint 高酸、薄皮，天然易受貴腐菌（Botrytis）感染，是托卡伊 Aszú 的靈魂品種。',
  },
  {
    category: '🍷 酒款認識',
    question: 'Bikavér 在英語中常被稱為？',
    options: ["Lion's Blood", "Bull's Blood", 'Red Dragon', "Wolf's Tooth"],
    correct: 1,
    explanation: "Bikavér 匈牙利語意為「公牛血」（Bull's Blood），以埃格爾和塞克薩爾德最為著名。",
  },
  {
    category: '🗺️ 產區地理',
    question: '托卡伊地區已被認定為？',
    options: ['歐盟農業遺產', 'UNESCO 世界文化遺產', '世界地質公園', '生物圈保護區'],
    correct: 1,
    explanation: '托卡伊歷史文化景觀於 2002 年被列為 UNESCO 世界遺產，是首個葡萄酒產區入選的世界遺產之一。',
  },
  {
    category: '🍯 Aszú 知識',
    question: '歷史上，Tokaji Aszú 的甜度等級以什麼單位來衡量？',
    options: ['Botrytis', 'Puttonyos', 'Eszencia', 'Fordítás'],
    correct: 1,
    explanation: 'Puttonyos（小採收桶）是傳統甜度單位，從 3-6 puttonyos 代表不同濃度，但現行法規已統一以殘糖量標示。',
  },
  {
    category: '🍇 品種知識',
    question: 'Kékfrankos 是哪個奧地利品種的同義詞？',
    options: ['Blauburgunder', 'Blaufränkisch', 'Zweigelt', 'St. Laurent'],
    correct: 1,
    explanation: 'Kékfrankos 與奧地利的 Blaufränkisch 是同一品種，是匈牙利種植最廣的紅葡萄。',
  },
  {
    category: '🗺️ 產區地理',
    question: '哪個產區以玄武岩火山土壤和巴拉頓湖北岸風土聞名？',
    options: ['埃格爾（Eger）', '巴達喬尼（Badacsony）', '維拉尼（Villány）', '肖姆羅（Somló）'],
    correct: 1,
    explanation: '巴達喬尼位於巴拉頓湖北岸，玄武岩土壤帶給 Olaszrizling 和 Szürkebarát 獨特的礦物感。',
  },
  {
    category: '🍷 酒款認識',
    question: '維拉尼（Villány）最著名的酒款風格是？',
    options: ['輕盈甜白酒', '氣泡酒', '結構飽滿的紅酒', '晚摘貴腐甜酒'],
    correct: 2,
    explanation: '維拉尼是匈牙利最南部的產區，溫暖氣候使 Cabernet Franc 和 Merlot 成熟飽滿，以頂級紅酒著稱。',
  },
  {
    category: '🏰 歷史文化',
    question: '匈牙利葡萄酒歷史中，哪個民族最早在此地系統化種植葡萄？',
    options: ['匈奴', '羅馬人', '馬扎爾人', '奧匈帝國時期德裔移民'],
    correct: 1,
    explanation: '羅馬人在潘農尼亞（今匈牙利西部）建立系統化葡萄酒文化，歷史可追溯到 2000 年前。',
  },
  {
    category: '🍯 Aszú 知識',
    question: 'Tokaji Eszencia 最顯著的特點是？',
    options: ['酒精度高達 20%', '殘糖極高，幾乎無法完成酒精發酵', '採收後立即裝瓶', '不含貴腐葡萄'],
    correct: 1,
    explanation: 'Eszencia 由貴腐漿果流出的自由流汁製成，殘糖可達 850 g/L，酒精度極低，需多年才能緩慢發酵。',
  },
  {
    category: '🗺️ 產區地理',
    question: '匈牙利共有多少個法定葡萄酒產區（PDO）？',
    options: ['12 個', '22 個', '32 個', '7 個'],
    correct: 1,
    explanation: '匈牙利擁有 22 個法定葡萄酒產區（OEM/PDO），分布於全國各地。',
  },
  {
    category: '🍇 品種知識',
    question: 'Hárslevelű 這個名字的匈牙利語意思是？',
    options: ['紅葉', '菩提葉', '葡萄藤', '黃金液體'],
    correct: 1,
    explanation: 'Hárslevelű 意為「菩提葉」，帶有椴花蜜和杏仁香氣，是托卡伊混釀中的重要芳香品種。',
  },
  {
    category: '🏰 歷史文化',
    question: '哪個哈布斯堡皇帝對托卡伊葡萄酒特別推崇，使其成為「王者之酒，酒中之王」？',
    options: ['路易十四', '路易十五', '路易十六', '拿破崙'],
    correct: 0,
    explanation: '法王路易十四據說稱托卡伊 Aszú 為「Vinum Regum, Rex Vinorum」（王者之酒，酒中之王）。',
  },
  {
    category: '🗺️ 產區地理',
    question: '埃格爾（Eger）位於匈牙利哪個方位？',
    options: ['西北部', '東北部', '東南部', '西南部'],
    correct: 1,
    explanation: '埃格爾位於匈牙利東北部的布克山（Bükk）麓，是上匈牙利最著名的葡萄酒城市。',
  },
  {
    category: '🍷 酒款認識',
    question: '肖姆羅（Somló）產區以什麼著稱？',
    options: ['面積最廣、大量生產', '孤立火山丘、礦物感極強的白酒', '最溫暖、頂級紅酒', '氣泡酒產地'],
    correct: 1,
    explanation: '肖姆羅是一座孤立的火山丘，火山岩土壤帶給白葡萄酒（尤其 Furmint、Olaszrizling）極強的礦物感。',
  },
]

const HARD_QUESTIONS = [
  {
    category: '📜 酒法規定',
    question: '依現行匈牙利法規，Tokaji Aszú 的最低殘糖量為？',
    options: ['60 g/L', '90 g/L', '120 g/L', '180 g/L'],
    correct: 2,
    explanation: '現行法規規定 Tokaji Aszú 最低殘糖量為 120 g/L，取代了傳統的 puttonyos 等級制度。',
  },
  {
    category: '🍯 釀造工藝',
    question: 'Aszú 漿果在釀造過程中如何處理？',
    options: ['立即壓榨釀成甜酒', '整顆或搗碎後浸泡在發酵或已發酵的基酒中', '冷凍後分批加入', '單獨在橡木桶中陳年'],
    correct: 1,
    explanation: 'Aszú 漿果搗成泥狀（Aszú tészta），然後在 must 或基酒中浸泡 12-60 小時，萃取糖分和香氣。',
  },
  {
    category: '🍯 釀造工藝',
    question: 'Tokaji Szamorodni 與 Aszú 的主要區別是？',
    options: ['Szamorodni 是白酒，Aszú 是甜酒', '整串葡萄採收，不單獨挑選 Aszú 漿果', 'Szamorodni 必須陳年 10 年', 'Szamorodni 不使用 Furmint'],
    correct: 1,
    explanation: 'Szamorodni 意為「如它生長的樣子」，整串採收（含貴腐與正常葡萄），依年份條件有甜型或乾型。',
  },
  {
    category: '🏰 酒莊歷史',
    question: 'Royal Tokaji Wine Company 在 1990 年代重建時的知名發起人之一是？',
    options: ['Robert Parker', 'Hugh Johnson', 'Jancis Robinson', 'Michel Rolland'],
    correct: 1,
    explanation: '英國著名酒評家 Hugh Johnson 是 Royal Tokaji 的創始人之一，在後共產時代推動了托卡伊品質革命。',
  },
  {
    category: '🏰 酒莊歷史',
    question: 'Oremus 酒莊現屬哪個頂級酒莊集團？',
    options: ['LVMH', 'Vega Sicilia（西班牙）', 'Constellation Brands', 'Château Pétrus'],
    correct: 1,
    explanation: '西班牙頂級酒莊 Vega Sicilia 擁有 Oremus，將頂尖西班牙釀酒理念帶入托卡伊。',
  },
  {
    category: '🍇 品種深究',
    question: 'Villány 的頂級酒款，尤其精品波爾多式混釀中，最常見的主角品種是？',
    options: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Kékfrankos'],
    correct: 2,
    explanation: '維拉尼的最佳品種其實是 Cabernet Franc，溫暖氣候下能展現出色的結構與複雜度。',
  },
  {
    category: '📜 酒法規定',
    question: 'Egri Bikavér 的法規要求混釀中必須至少包含幾個品種？',
    options: ['2 種', '3 種', '5 種', '7 種'],
    correct: 1,
    explanation: 'Egri Bikavér 法規要求至少 3 種認可品種，Kékfrankos 比例不得低於 30%。',
  },
  {
    category: '🍯 釀造工藝',
    question: 'Tokaji Fordítás 是如何製成的？',
    options: ['用殘渣做的蒸餾酒', '用浸泡過 Aszú 的果渣再次加入新酒浸泡', '逆向發酵法', '特殊桶型陳年'],
    correct: 1,
    explanation: 'Fordítás（意為「翻轉」）是將已泡過 Aszú 的果渣再次用新酒或 must 浸泡，品質介於 Szamorodni 和 Aszú 之間。',
  },
  {
    category: '🗺️ 地理細節',
    question: '哪個匈牙利產區與奧地利 Neusiedlersee 湖區接壤，以 Kékfrankos 著稱？',
    options: ['莫爾（Mór）', '巴達喬尼（Badacsony）', '紹普龍（Sopron）', '潘農哈爾馬（Pannonhalma）'],
    correct: 2,
    explanation: '紹普龍緊鄰奧地利邊界，與 Neusiedlersee-Hügelland 風土相近，Kékfrankos 表現極佳。',
  },
  {
    category: '🍇 品種深究',
    question: 'Kadarka 這個品種的原產地被認為源自？',
    options: ['法國', '德國萊茵河谷', '巴爾幹半島（保加利亞一帶）', '羅馬尼亞'],
    correct: 2,
    explanation: 'Kadarka 被認為起源於巴爾幹半島，沿多瑙河傳播至匈牙利，曾是 Bikavér 的主要品種。',
  },
  {
    category: '📜 酒法規定',
    question: 'Tokaji Aszú 法規規定最短的橡木桶陳年時間是？',
    options: ['6 個月', '12 個月', '18 個月', '3 年'],
    correct: 2,
    explanation: '現行法規要求 Tokaji Aszú 在橡木桶中至少陳年 18 個月，加上瓶中陳年共需最少 3 年。',
  },
  {
    category: '🗺️ 地理細節',
    question: '潘農哈爾馬（Pannonhalma）產區最具代表性的歷史特色是？',
    options: ['匈牙利最高海拔葡萄園', '本篤會修道院千年釀酒傳統', '維也納宮廷的御用酒莊', '匈牙利最早採用有機農法的產區'],
    correct: 1,
    explanation: '潘農哈爾馬擁有千年歷史的本篤會修道院（現為世界遺產），修道院葡萄酒以 Riesling 和 Sauvignon Blanc 著稱。',
  },
  {
    category: '🍯 釀造工藝',
    question: '「Aszú」這個詞在匈牙利文中的意思是？',
    options: ['黃金', '乾縮（受貴腐菌感染乾縮的葡萄）', '甜蜜', '貴族'],
    correct: 1,
    explanation: 'Aszú 意指「乾縮」，描述了受貴腐菌（Botrytis cinerea）感染後的葡萄漿果狀態。',
  },
  {
    category: '🏰 酒莊歷史',
    question: '奧匈帝國時期，哪個皇室家族在托卡伊擁有大量葡萄園？',
    options: ['哈布斯堡家族', '波旁家族', '羅曼諾夫家族', '霍亨索倫家族'],
    correct: 0,
    explanation: '哈布斯堡家族長期統治奧匈帝國，並在托卡伊持有大片葡萄園，皇室認可大幅提升了托卡伊的國際聲望。',
  },
  {
    category: '🍇 品種深究',
    question: 'Furmint 這個名稱的語源，可能源自哪個法語詞彙？',
    options: ['Fromage（起司）', 'Froment（小麥，指其麥桿色澤）', 'Formidable（卓越）', 'Fumé（煙燻）'],
    correct: 1,
    explanation: '一說 Furmint 名稱來自法語 Froment（小麥），指其麥稈色澤；另一說源自義大利語 Formentin。',
  },
  {
    category: '🌡️ 氣候風土',
    question: '托卡伊地區的「Botrytis」（灰黴菌）形成需要哪種氣候條件？',
    options: ['全年高溫乾燥', '秋季早晨霧氣搭配午後溫暖陽光', '持續降雨無日照', '極端乾旱後突降大雨'],
    correct: 1,
    explanation: '托卡伊秋季特有的微氣候——波道格科尼河谷的早晨霧氣促進貴腐菌生長，午後陽光則蒸發水分濃縮糖分。',
  },
  {
    category: '📜 酒法規定',
    question: '哪個年份通常被列為近現代托卡伊最偉大的年份之一？',
    options: ['1976', '1989', '1993', '2005'],
    correct: 2,
    explanation: '1993 年是後共產時代私人釀酒復興後第一個偉大年份，以其完美平衡的甜度和酸度傳奇聞名。',
  },
  {
    category: '🍇 品種深究',
    question: '莫爾（Mór）產區最具特色的原生白葡萄品種是？',
    options: ['Furmint', 'Ezerjó', 'Juhfark', 'Hárslevelű'],
    correct: 1,
    explanation: 'Ezerjó（意為「千好」）是莫爾的代表品種，高酸爽口，酒名直譯為「千種優點」。',
  },
  {
    category: '🗺️ 地理細節',
    question: '孔沙格（Kunság）是匈牙利哪類地形的代表產區？',
    options: ['高山葡萄園', '大平原（Great Plain / Alföld）', '湖區環繞地帶', '石灰岩峭壁'],
    correct: 1,
    explanation: '孔沙格位於匈牙利大平原（Alföld），是全國面積最大的葡萄酒產區，主要種植大眾消費品種。',
  },
  {
    category: '🌡️ 氣候風土',
    question: '肖姆羅（Somló）的火山岩土壤賦予葡萄酒最顯著的特徵是？',
    options: ['果香濃郁、甜潤', '強烈礦物感、高酸、陳年潛力強', '清淡草本、低酒精', '單寧飽滿、適合木桶陳年'],
    correct: 1,
    explanation: '肖姆羅的火山岩（玄武岩、火山凝灰岩）土壤是著名的礦物感來源，其 Furmint 和 Juhfark 以高酸長壽著稱。',
  },
  {
    category: '🏰 酒莊歷史',
    question: '哪個傳說賦予了埃格爾「公牛血」這個紅酒名稱的來源？',
    options: ['血紅色深濃的酒液澆灌了鬥牛場地', '1552 年圍城戰中，匈牙利士兵飲下後力戰土耳其大軍', '貴族用公牛血釀酒的古老傳統', '酒中加入牛血強化風味'],
    correct: 1,
    explanation: '傳說 1552 年埃格爾抵抗奧斯曼土耳其圍攻時，守城士兵飲下深紅色葡萄酒後勇猛戰鬥，敵軍以為他們喝了公牛血。',
  },
]

const TIMER_MAP   = { easy: 8000, hard: 5000 }
const Q_COUNT     = { easy: 15, hard: 20 }
const COMBO_TIERS = [{ min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 }]
const BASE_PTS    = 100

// ── State ──────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const questions    = ref([])
const currentIdx   = ref(0)
const score        = ref(0)
const correctCount = ref(0)
const streak       = ref(0)
const maxStreak    = ref(0)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const lastPicked   = ref(null)
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])
const wrongItems   = ref([])

let timerMs = 8000, timerStart = 0, rafId = null, feedbackTimer = null
const timerPct = ref(100)

const currentQ    = computed(() => questions.value[currentIdx.value])
const myUid       = computed(() => authState.user?.id)
const comboMult   = computed(() => { for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult } return 1 })
const timerColor  = computed(() => timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444')
const feedbackClass = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red')
const resultEmoji = computed(() => { const r = correctCount.value / questions.value.length; return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖' })

function shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a }
function fmtDate(iso) { const d=new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }

function startRaf() {
  timerStart = performance.now()
  const tick = () => {
    const el = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (el / timerMs) * 100)
    if (el >= timerMs) { timerPct.value = 0; handleTimeout() } else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } }

function startGame(diff) {
  difficulty.value = diff; timerMs = TIMER_MAP[diff]
  const pool = diff === 'hard' ? shuffle([...EASY_QUESTIONS, ...HARD_QUESTIONS]) : shuffle([...EASY_QUESTIONS])
  questions.value = pool.slice(0, Q_COUNT[diff])
  currentIdx.value = 0; score.value = 0; correctCount.value = 0
  streak.value = 0; maxStreak.value = 0; wrongItems.value = []
  uploaded.value = false; uploadErr.value = ''; timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(idx) {
  if (phase.value !== 'playing') return
  stopRaf(); lastPicked.value = idx
  processResult(currentQ.value?.correct === idx, false)
}
function handleTimeout() { stopRaf(); lastPicked.value = null; processResult(false, true) }

function processResult(correct, timeout) {
  lastCorrect.value = correct; lastTimeout.value = timeout
  if (correct) {
    streak.value++; if (streak.value > maxStreak.value) maxStreak.value = streak.value
    score.value += Math.round(BASE_PTS * comboMult.value); correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push(currentQ.value)
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(nextQuestion, 1600)
}

function nextQuestion() {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++; phase.value = 'playing'; timerPct.value = 100
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else { phase.value = 'final'; stopRaf() }
}

function backToLobby() { stopRaf(); clearTimeout(feedbackTimer); phase.value = 'lobby'; loadLeaderboard(lbTab.value) }
function handleBack()  { stopRaf(); clearTimeout(feedbackTimer); emit('back') }

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
  const idx = map[e.key.toLowerCase()]
  if (idx !== undefined && currentQ.value?.options[idx] !== undefined) answer(idx)
}

function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores').select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', 'hu_tokaj_flash').eq('difficulty', diff).order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true; uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'hu_tokaj_flash', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length,
      user_id: authState.user.id,
      username: authState.user.user_metadata?.display_name || authState.user.email?.split('@')[0] || '玩家',
    })
    if (error) throw error
    uploaded.value = true; loadLeaderboard(difficulty.value)
  } catch (e) { uploadErr.value = e.message || '上傳失敗' }
  uploading.value = false
}

onMounted(() => loadLeaderboard('easy'))
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.hu-tf-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #12060a 0%, #1e0c12 100%);
  color: #f0e6d3;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px; font-family: inherit; outline: none;
}
.back-btn {
  align-self: flex-start; background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15); color: #9a8070;
  padding: 8px 16px; border-radius: 10px; cursor: pointer; margin-bottom: 16px; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }
.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 28px; }
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b7060; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 28px; cursor: pointer; text-align: center; width: 180px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.4); }
.diff-card.easy:hover { border-color: #BF6900; background: rgba(191,105,0,0.1); }
.diff-card.hard:hover { border-color: #c8102e; background: rgba(200,16,46,0.1); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #9a8070; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #6b5040; text-align: left; display: flex; flex-direction: column; gap: 4px; }
.lb-box { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #9a8070; padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; }
.lb-tabs button.active { background: rgba(255,255,255,0.1); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: #6b5040; text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.mine td { background: rgba(200,16,46,0.12); }
.lb-empty { text-align: center; color: #6b5040; padding: 12px; }
.gold { color: #BF6900; font-weight: 700; } .muted { color: #6b5040; }

.game-area { width: 100%; max-width: 580px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #9a8070; } .score-live { color: #BF6900; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse 0.5s ease-in-out infinite alternate; }
@keyframes pulse { to { opacity: 0.6 } }
.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge { background: linear-gradient(135deg, #c8102e, #BF6900); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }
.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 10px;
  min-height: 160px; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.08); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.08); }
.category-tag { font-size: 0.78rem; color: #6b5040; background: rgba(255,255,255,0.06); padding: 3px 10px; border-radius: 10px; align-self: flex-start; }
.question-text { font-size: 1.1rem; font-weight: 700; line-height: 1.5; }
.feedback-row { font-size: 0.85rem; line-height: 1.5; }
.fb-correct { color: #4ade80; } .fb-timeout { color: #f59e0b; } .fb-wrong { color: #ef4444; }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateX(20px); }
.slide-in-leave-to   { opacity: 0; transform: translateX(-20px); }
.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.opt-btn {
  padding: 14px 12px; border-radius: 14px; cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
  color: #f0e6d3; display: flex; align-items: center; gap: 10px;
  text-align: left; transition: all 0.15s;
}
.opt-btn:hover:not(.frozen) { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); transform: translateY(-1px); }
.opt-btn.frozen { pointer-events: none; }
.opt-btn.highlight-correct { background: rgba(74,222,128,0.2); border-color: #4ade80; }
.opt-btn.highlight-wrong   { background: rgba(239,68,68,0.2); border-color: #ef4444; }
.opt-key { font-size: 1rem; font-weight: 800; color: #BF6900; min-width: 20px; }
.opt-text { font-size: 0.88rem; line-height: 1.4; }
.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px; padding: 36px 28px; max-width: 480px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; } .final-card h2 { margin: 0; }
.final-score { font-size: 3rem; font-weight: 900; color: #BF6900; }
.final-score-label { font-size: 0.85rem; color: #6b5040; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.06); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }
.review-box { width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 14px; max-height: 220px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #9a8070; }
.review-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); text-align: left; }
.review-q { font-size: 0.82rem; color: #9a8070; margin-bottom: 3px; }
.review-a { font-size: 0.82rem; color: #4ade80; font-weight: 600; }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #c8102e, #BF6900); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry { padding: 10px 28px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; }
.btn-retry:hover { background: rgba(255,255,255,0.15); }
</style>
