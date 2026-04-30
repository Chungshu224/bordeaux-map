<template>
  <div class="quiz-page">
    <button class="quiz-back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="quiz-lobby">
      <div class="lobby-inner">
        <h1 class="quiz-title">🍇 布根地產區競答</h1>
        <p class="quiz-subtitle">看到題目後，在地圖上點出對應的 AOC 產區</p>

        <!-- 難度卡片 -->
        <div class="difficulty-cards">
          <!-- 簡單 -->
          <div class="diff-card easy" @click="enterRegionSelect">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單模式</div>
            <ul class="diff-details">
              <li>自選 2 個大產區</li>
              <li>⏱ 每題 30 秒</li>
              <li>地圖有標籤</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <!-- 中等 -->
          <div class="diff-card medium" @click="startGame('medium')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">中等模式</div>
            <ul class="diff-details">
              <li>隨機 2 個大產區</li>
              <li>⏱ 每題 20 秒</li>
              <li>地圖有標籤</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <!-- 困難 -->
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難模式</div>
            <ul class="diff-details">
              <li>隨機 3 個大產區＋特級園</li>
              <li>⏱ 每題 10 秒</li>
              <li>盲圖（無標籤）</li>
              <li>共 10 題</li>
            </ul>
          </div>
        </div>

        <!-- 排行榜 -->
        <div class="leaderboard-section">
          <div class="lb-header">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }" @click="switchLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab === 'medium' }" @click="switchLbTab('medium')">中等</button>
              <button :class="{ active: lbTab === 'hard' }" @click="switchLbTab('hard')">困難</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-loading">載入中…</div>
          <table v-else class="lb-table">
            <thead>
              <tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in leaderboardData"
                :key="row.id"
                :class="{ 'my-row': row.user_id === myUserId }"
              >
                <td class="rank-cell">
                  <span v-if="i === 0">🥇</span>
                  <span v-else-if="i === 1">🥈</span>
                  <span v-else-if="i === 2">🥉</span>
                  <span v-else>{{ i + 1 }}</span>
                </td>
                <td>{{ row.username }}</td>
                <td class="score-cell">{{ row.score }}</td>
                <td>{{ row.correct_count }}/{{ row.total_questions }}</td>
                <td class="date-cell">{{ formatDate(row.created_at) }}</td>
              </tr>
              <tr v-if="!leaderboardData.length">
                <td colspan="5" class="lb-empty">尚無紀錄，快來成為第一名！</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ 選擇產區（簡單模式） ══ -->
    <div v-else-if="phase === 'region-select'" class="quiz-lobby region-select-phase">
      <div class="lobby-inner">
        <h2 class="quiz-title" style="font-size:1.7rem">🗺️ 選擇 2 個大產區</h2>
        <p class="quiz-subtitle">題目將只從所選產區的 AOC 中出題</p>
        <div class="region-pick-grid">
          <div
            v-for="r in REGIONS"
            :key="r.id"
            class="region-pick-card"
            :class="{ selected: selectedRegions.includes(r.id) }"
            @click="toggleRegion(r.id)"
          >
            <span class="rp-icon">{{ r.icon }}</span>
            <span class="rp-name">{{ r.name }}</span>
            <span class="rp-count">{{ r.aocCount }} AOC</span>
          </div>
        </div>
        <div class="region-pick-actions">
          <span class="pick-hint" :class="{ ok: selectedRegions.length === 2 }">
            {{ selectedRegions.length === 0 ? '請選擇 2 個產區' : selectedRegions.length === 1 ? '再選 1 個' : '✓ 已選 2 個' }}
          </span>
          <button
            class="btn-start"
            :disabled="selectedRegions.length !== 2"
            @click="startGame('easy')"
          >開始挑戰</button>
          <button class="btn-cancel" @click="phase = 'lobby'">取消</button>
        </div>
      </div>
    </div>

    <!-- ══ LOADING ══ -->
    <div v-else-if="phase === 'loading'" class="quiz-loading">
      <div class="loading-ring"></div>
      <p>載入地圖資料… {{ loadedCount }}/{{ totalToLoad }}</p>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="quiz-game">
      <div ref="mapContainer" class="quiz-map"></div>

      <!-- 問題欄（頂部） -->
      <div class="quiz-question-bar">
        <div class="q-progress">
          <span class="q-progress-text">{{ currentQIndex + 1 }}/{{ questions.length }}</span>
          <div class="q-progress-bar">
            <div class="q-progress-fill" :style="{ width: (currentQIndex / questions.length * 100) + '%' }"></div>
          </div>
        </div>
        <div class="q-text">
          請點出：<strong>{{ currentQuestion?.label }}</strong>
        </div>
        <div class="q-score">{{ score }} 分</div>
      </div>

      <!-- 計時器（右上角） -->
      <div class="quiz-timer" :class="{ urgent: timer <= 5 }">
        <svg class="timer-ring" viewBox="0 0 52 52">
          <circle class="ring-bg" cx="26" cy="26" r="22"/>
          <circle class="ring-progress" cx="26" cy="26" r="22"
            :stroke-dasharray="`${timerArc} 138.2`"
            :stroke="timerColor"
          />
        </svg>
        <span class="timer-num">{{ timer }}</span>
      </div>

      <!-- 回饋浮層 -->
      <transition name="feedback-pop">
        <div v-if="phase === 'feedback'" class="feedback-overlay" :class="lastAnswer?.correct ? 'correct' : 'wrong'">
          <div class="feedback-icon">{{ lastAnswer?.correct ? '✓' : '✗' }}</div>
          <div class="feedback-text">{{ lastAnswer?.correct ? '答對！' : (lastAnswer?.timeout ? '時間到！' : '答錯') }}</div>
          <div v-if="lastAnswer?.correct" class="feedback-bonus">+{{ lastAnswer.totalPoints }} 分</div>
          <div v-if="!lastAnswer?.correct && lastAnswer?.clickedLabel" class="feedback-clicked">
            你點的是：{{ lastAnswer.clickedLabel }}
          </div>
          <div class="feedback-answer">正確答案：<strong>{{ currentQuestion?.label }}</strong></div>
        </div>
      </transition>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="quiz-final">
      <div class="final-card">
        <div class="final-result-icon">{{ correctCount >= 8 ? '🎉' : correctCount >= 5 ? '👍' : '📖' }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="stat-chip">答對 {{ correctCount }}/{{ questions.length }} 題</div>
          <div class="stat-chip">{{ DIFF_LABEL[difficulty] }}</div>
          <div class="stat-chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
        </div>
        <button
          class="btn-submit"
          :disabled="uploading || scoreUploaded"
          @click="submitScore"
        >
          {{ uploading ? '上傳中…' : scoreUploaded ? '✓ 已登錄排行榜' : '📤 上傳成績至排行榜' }}
        </button>
        <div v-if="uploadError" class="upload-error">{{ uploadError }}</div>
        <div class="final-actions">
          <button class="btn-secondary" @click="backToLobby">再玩一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, nextTick, onMounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { getMapboxToken, shouldUseMapbox } from '@/utils/getMapboxToken'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import { globalBurgAchievementManager } from '@/stores/bourgogneAchievementSystem.js'

const emit = defineEmits(['back'])

// ══ 大產區定義 ════════════════════════════════════════════════
const REGIONS = [
  { id: 'chablis',          name: '夏布利 & 大歐塞瓦', icon: '🍇', aocCount: 5 },
  { id: 'cote-de-nuits',    name: '夜丘',              icon: '🍷', aocCount: 10 },
  { id: 'cote-de-beaune',   name: '伯恩丘',            icon: '🥂', aocCount: 17 },
  { id: 'cote-chalonnaise', name: '夏隆內丘',           icon: '🍾', aocCount: 7 },
  { id: 'maconnais',        name: '馬貢內',             icon: '🥃', aocCount: 7 },
  { id: 'beaujolais',       name: '薄酒萊',             icon: '🍒', aocCount: 10 },
]

// ══ 各產區 AOC 題庫 ════════════════════════════════════════════
// 只含村莊級 & 地區級 AOC，無一級園，無特級園
const POOL_BY_REGION = {
  chablis: [
    { path: '/bourgogne/geojson/Chablis/AOC Chablis.geojson',       label: 'Chablis' },
    { path: '/bourgogne/geojson/Chablis/AOC Petit Chablis.geojson', label: 'Petit Chablis' },
    { path: '/bourgogne/geojson/Grand Auxerrois/AOC Irancy.geojson',   label: 'Irancy' },
    { path: '/bourgogne/geojson/Grand Auxerrois/AOC Saint-Bris.geojson', label: 'Saint-Bris' },
    { path: '/bourgogne/geojson/Grand Auxerrois/AOC Vézelay.geojson',   label: 'Vézelay' },
  ],
  'cote-de-nuits': [
    { path: '/bourgogne/geojson/Cote-de-Nuits/01Marsannay/AOC Marsannay (Chenôve).geojson',                   label: 'Marsannay' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/02Fixin/AOC Fixin (Fixin).geojson',                             label: 'Fixin' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/AOC Gevrey-Chambertin (Gevrey-Chambertin).geojson', label: 'Gevrey-Chambertin' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/05Morey-Saint-Denis/AOC Morey-Saint-Denis.geojson',             label: 'Morey-Saint-Denis' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/06Chambolle Musigny/AOC Chambolle-Musigny.geojson',             label: 'Chambolle-Musigny' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/07Flagey-Echézeaux/Flagey-Echézeaux.geojson',                  label: 'Flagey-Échézeaux' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/08Vosne-Romanée/AOC Vosne-Romanée.geojson',                    label: 'Vosne-Romanée' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/09Vougeot/AOC Vougeot.geojson',                                 label: 'Vougeot' },
    { path: '/bourgogne/geojson/Cote-de-Nuits/10Nuits-Saint-Georges/AOC Nuits-Saint-Georges.geojson',         label: 'Nuits-Saint-Georges' },
  ],
  'cote-de-beaune': [
    { path: '/bourgogne/geojson/Cote-de-Beaune/01Pernand-Vergelesses/AOC Pernand-Vergelesses Village.geojson', label: 'Pernand-Vergelesses' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/02Ladoix/AOC Ladoix Village.geojson',                          label: 'Ladoix' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/03Aloxe-Corton/AOC Aloxe-Corton Village.geojson',              label: 'Aloxe-Corton' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/04Savigny-lès-Beaune/AOC Savigny-lès-Beaune Village.geojson',  label: 'Savigny-lès-Beaune' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/05Chorey-lès-Beaune/AOC Chorey-lès-Beaune Village.geojson',    label: 'Chorey-lès-Beaune' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/06Beaune/AOC Beaune Village.geojson',                          label: 'Beaune' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/07Pommard/AOC Pommard Village.geojson',                        label: 'Pommard' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/08Volnay/AOC Volnay Village.geojson',                          label: 'Volnay' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/09Monthélie/AOC Monthélie Village.geojson',                    label: 'Monthélie' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/10Saint-Romain/AOC Saint-Romain Village.geojson',              label: 'Saint-Romain' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/11Auxey-Duresses/AOC Auxey-Duresses Village.geojson',          label: 'Auxey-Duresses' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/12Meursault/AOC Meursault Village.geojson',                    label: 'Meursault' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/13Blagny/AOC Blagny Village.geojson',                          label: 'Blagny' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/14Puligny-Montrachet/AOC Puligny-Montrachet Village.geojson',  label: 'Puligny-Montrachet' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/15Chassagne-Montrachet/AOC Chassagne-Montrachet Village.geojson', label: 'Chassagne-Montrachet' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/16Saint-Aubin/AOC Saint-Aubin Village.geojson',                label: 'Saint-Aubin' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/17Santenay/AOC Santenay Village.geojson',                      label: 'Santenay' },
    { path: '/bourgogne/geojson/Cote-de-Beaune/18Maranges/AOC Maranges Village.geojson',                      label: 'Maranges' },
  ],
  'cote-chalonnaise': [
    { path: '/bourgogne/geojson/Cote-Chalonnaise/01Bouzeron/AOC Bouzeron.geojson',                 label: 'Bouzeron' },
    { path: '/bourgogne/geojson/Cote-Chalonnaise/02 Rully/AOC Rully.geojson',                       label: 'Rully' },
    { path: '/bourgogne/geojson/Cote-Chalonnaise/03Mercurey/AOC Mercurey.geojson',                  label: 'Mercurey' },
    { path: '/bourgogne/geojson/Cote-Chalonnaise/04Givry/AOC Givry.geojson',                        label: 'Givry' },
    { path: '/bourgogne/geojson/Cote-Chalonnaise/05Montagny/AOC Montagny.geojson',                  label: 'Montagny' },
    { path: '/bourgogne/geojson/Cote-Chalonnaise/AOC Bourgogne Côte Chalonnaise.geojson',           label: 'Bourgogne Côte Chalonnaise' },
    { path: '/bourgogne/geojson/Cote-Chalonnaise/AOC Bourgogne Côtes du Couchois.geojson',          label: 'Bourgogne Côtes du Couchois' },
  ],
  maconnais: [
    { path: '/bourgogne/geojson/Maconnais/AOC Mâcon.geojson',          label: 'Mâcon' },
    { path: '/bourgogne/geojson/Maconnais/AOC Mâcon-Villages.geojson', label: 'Mâcon-Villages' },
    { path: '/bourgogne/geojson/Maconnais/AOC Pouilly-Fuissé.geojson', label: 'Pouilly-Fuissé' },
    { path: '/bourgogne/geojson/Maconnais/AOC Pouilly-Loché.geojson',  label: 'Pouilly-Loché' },
    { path: '/bourgogne/geojson/Maconnais/AOC Pouilly-Vinzelles.geojson', label: 'Pouilly-Vinzelles' },
    { path: '/bourgogne/geojson/Maconnais/AOC Saint-Véran.geojson',    label: 'Saint-Véran' },
    { path: '/bourgogne/geojson/Maconnais/AOC Viré-Clessé.geojson',    label: 'Viré-Clessé' },
  ],
  beaujolais: [
    { path: '/bourgogne/geojson/Beaujolais/AOC Beaujolais.geojson',          label: 'Beaujolais' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Beaujolais Villages.geojson', label: 'Beaujolais-Villages' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Brouilly.geojson',            label: 'Brouilly' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Chénas.geojson',              label: 'Chénas' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Chiroubles.geojson',          label: 'Chiroubles' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Côte de Brouilly.geojson',    label: 'Côte de Brouilly' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Fleurie.geojson',             label: 'Fleurie' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Juliénas.geojson',            label: 'Juliénas' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Morgon.geojson',              label: 'Morgon' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Moulin-à-Vent.geojson',       label: 'Moulin-à-Vent' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Régnié.geojson',              label: 'Régnié' },
    { path: '/bourgogne/geojson/Beaujolais/AOC Saint-Amour.geojson',         label: 'Saint-Amour' },
  ],
}

// ══ 特級園（困難模式額外加入）═══════════════════════════════════
const GRAND_CRU_POOL = [
  // Chablis Grand Cru
  { path: '/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Blanchot.geojson',   label: 'Chablis GC – Blanchot' },
  { path: '/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Bougros.geojson',    label: 'Chablis GC – Bougros' },
  { path: '/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Grenouilles.geojson',label: 'Chablis GC – Grenouilles' },
  { path: '/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Les Clos.geojson',   label: 'Chablis GC – Les Clos' },
  { path: '/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Preuses.geojson',    label: 'Chablis GC – Preuses' },
  { path: '/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Valmur.geojson',     label: 'Chablis GC – Valmur' },
  { path: '/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Vaudésir.geojson',   label: 'Chablis GC – Vaudésir' },
  // Gevrey-Chambertin Grand Crus
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Chambertin Grand Cru.geojson',           label: 'Chambertin' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Chambertin Clos de Bèze Grand Cru.geojson', label: 'Chambertin-Clos de Bèze' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Chapelle Chambertin Grand Cru.geojson',  label: 'Chapelle-Chambertin' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Charmes Chambertin Grand Cru.geojson',   label: 'Charmes-Chambertin' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Griotte Chambertin Grand Cru.geojson',   label: 'Griotte-Chambertin' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Latricières Chambertin Grand Cru.geojson', label: 'Latricières-Chambertin' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Mazis Chambertin Grand Cru.geojson',     label: 'Mazis-Chambertin' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/04Gevrey Chambertin/Grand Crus/AOC Ruchottes Chambertin Grand Cru.geojson', label: 'Ruchottes-Chambertin' },
  // Morey-Saint-Denis Grand Crus
  { path: '/bourgogne/geojson/Cote-de-Nuits/05Morey-Saint-Denis/Grand Crus/AOC Clos de la Roche Grand Cru.geojson',    label: 'Clos de la Roche' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/05Morey-Saint-Denis/Grand Crus/AOC Clos de Tart Grand Cru.geojson',        label: 'Clos de Tart' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/05Morey-Saint-Denis/Grand Crus/AOC Clos des Lambrays Grand Cru.geojson',   label: 'Clos des Lambrays' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/05Morey-Saint-Denis/Grand Crus/AOC Clos Saint-Denis Grand Cru.geojson',    label: 'Clos Saint-Denis' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/05Morey-Saint-Denis/Grand Crus/AOC Bonnes Mares Grand Cru.geojson',        label: 'Bonnes-Mares (Morey)' },
  // Chambolle-Musigny Grand Crus
  { path: '/bourgogne/geojson/Cote-de-Nuits/06Chambolle Musigny/Grand Crus/AOC Musigny Grand Cru.geojson',             label: 'Musigny' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/06Chambolle Musigny/Grand Crus/AOC Bonnes-Mares Grand Cru.geojson',        label: 'Bonnes-Mares (Chambolle)' },
  // Flagey-Échézeaux Grand Crus
  { path: '/bourgogne/geojson/Cote-de-Nuits/07Flagey-Echézeaux/Grand Crus/AOC Echezeaux Grand Cru.geojson',           label: 'Échézeaux' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/07Flagey-Echézeaux/Grand Crus/AOC Grands-Echezeaux Grand Cru.geojson',    label: 'Grands-Échézeaux' },
  // Vosne-Romanée Grand Crus
  { path: '/bourgogne/geojson/Cote-de-Nuits/08Vosne-Romanée/Grand Crus/AOC Romanée-Conti Grand Cru.geojson',          label: 'Romanée-Conti' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/08Vosne-Romanée/Grand Crus/AOC La Tâche Grand Cru.geojson',               label: 'La Tâche' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/08Vosne-Romanée/Grand Crus/AOC Richebourg Grand Cru.geojson',             label: 'Richebourg' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/08Vosne-Romanée/Grand Crus/AOC Romanée-Saint-Vivant Grand Cru.geojson',   label: 'Romanée-Saint-Vivant' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/08Vosne-Romanée/Grand Crus/AOC La Grande Rue Grand Cru.geojson',          label: 'La Grande Rue' },
  { path: '/bourgogne/geojson/Cote-de-Nuits/08Vosne-Romanée/Grand Crus/AOC La Romanée Grand Cru.geojson',             label: 'La Romanée' },
  // Clos de Vougeot
  { path: '/bourgogne/geojson/Cote-de-Nuits/09Vougeot/Grand Crus/AOC Clos de Vougeot ou Clos Vougeot Grand Cru.geojson', label: 'Clos de Vougeot' },
  // Côte de Beaune Grand Crus
  { path: '/bourgogne/geojson/Cote-de-Beaune/14Puligny-Montrachet/Grand Cru/AOC Chevalier-Montrachet Grand Cru.geojson',        label: 'Chevalier-Montrachet' },
  { path: '/bourgogne/geojson/Cote-de-Beaune/14Puligny-Montrachet/Grand Cru/AOC Bienvenues-Bâtard-Montrachet Grand Cru .geojson', label: 'Bienvenues-Bâtard-Montrachet' },
  { path: '/bourgogne/geojson/Cote-de-Beaune/15Chassagne-Montrachet/Grand Cru/AOC Criots-Bâtard-Montrachet Grand Cru.geojson',   label: 'Criots-Bâtard-Montrachet' },
]

// ══ 常數設定 ════════════════════════════════════════════════════
const QUESTIONS_PER_ROUND = 10
const TIMER_MAP    = { easy: 30, medium: 20, hard: 10 }
const BONUS_MAP    = { easy: 3,  medium: 4,  hard:  6 }
const DIFF_LABEL   = { easy: '🥂 簡單', medium: '🍷 中等', hard: '🏆 困難' }

// 地圖初始視角（涵蓋整個布根地）
const MAP_CENTER = [4.85, 47.2]
const MAP_ZOOM   = 7.8

// ══ State ══════════════════════════════════════════════════════
const phase           = ref('lobby')
const difficulty      = ref('easy')
const questions       = ref([])
const currentQIndex   = ref(0)
const timer           = ref(30)
const score           = ref(0)
const correctCount    = ref(0)
const lastAnswer      = ref(null)
const scoreUploaded   = ref(false)
const uploading       = ref(false)
const uploadError     = ref('')
const loadedCount     = ref(0)
const totalToLoad     = ref(0)
const lbTab           = ref('easy')
const lbLoading       = ref(false)
const leaderboardData = ref([])
const selectedRegions = ref([])

const mapContainer = ref(null)
let quizMap = null
const allAocData = new Map()
let timerInterval   = null
let feedbackTimeout = null

// ══ Computed ════════════════════════════════════════════════════
const currentQuestion = computed(() => questions.value[currentQIndex.value] ?? null)
const myUserId        = computed(() => authState.user?.id)
const timerMax        = computed(() => TIMER_MAP[difficulty.value])
const timerArc        = computed(() => (timer.value / timerMax.value) * 138.2)
const timerColor      = computed(() => {
  const ratio = timer.value / timerMax.value
  if (ratio > 0.5) return '#4ade80'
  if (ratio > 0.25) return '#facc15'
  return '#ef4444'
})

// ══ Helpers ═════════════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function formatDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

function isPointInGeoJSON(point, geoJSON) {
  if (!geoJSON) return false
  if (geoJSON.type === 'FeatureCollection') {
    return geoJSON.features.some(f => {
      try { return turf.booleanPointInPolygon(point, f) } catch { return false }
    })
  }
  try { return turf.booleanPointInPolygon(point, geoJSON) } catch { return false }
}

function clearTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null }
}

function clearFeedbackTimeout() {
  if (feedbackTimeout) { clearTimeout(feedbackTimeout); feedbackTimeout = null }
}

// ══ Region Select（簡單模式） ════════════════════════════════════
function enterRegionSelect() {
  selectedRegions.value = []
  phase.value = 'region-select'
}

function toggleRegion(id) {
  const idx = selectedRegions.value.indexOf(id)
  if (idx >= 0) {
    selectedRegions.value.splice(idx, 1)
  } else if (selectedRegions.value.length < 2) {
    selectedRegions.value.push(id)
  }
}

// ══ 建立題庫 ════════════════════════════════════════════════════
function buildPool(diff) {
  const allRegionIds = REGIONS.map(r => r.id)

  if (diff === 'easy') {
    // 使用玩家選的 2 個產區
    const pool = []
    for (const rid of selectedRegions.value) {
      pool.push(...(POOL_BY_REGION[rid] || []))
    }
    return shuffle(pool)
  }

  if (diff === 'medium') {
    // 隨機 2 個產區
    const picked = shuffle(allRegionIds).slice(0, 2)
    const pool = []
    for (const rid of picked) {
      pool.push(...(POOL_BY_REGION[rid] || []))
    }
    return shuffle(pool)
  }

  // hard：隨機 3 個產區 + 特級園
  const picked = shuffle(allRegionIds).slice(0, 3)
  const pool = []
  for (const rid of picked) {
    pool.push(...(POOL_BY_REGION[rid] || []))
  }
  pool.push(...GRAND_CRU_POOL)
  return shuffle(pool)
}

// ══ Game Flow ════════════════════════════════════════════════════
async function startGame(diff) {
  difficulty.value = diff
  const pool = buildPool(diff)
  questions.value = pool.slice(0, QUESTIONS_PER_ROUND)
  currentQIndex.value = 0
  score.value = 0
  correctCount.value = 0
  scoreUploaded.value = false
  uploadError.value = ''
  lastAnswer.value = null

  phase.value = 'loading'
  totalToLoad.value = questions.value.length
  loadedCount.value = 0
  allAocData.clear()

  await Promise.all(questions.value.map(async (q) => {
    try {
      const res = await fetch(q.path)
      if (res.ok) allAocData.set(q.path, await res.json())
    } catch (e) {
      console.error(`載入失敗: ${q.path}`, e)
    }
    loadedCount.value++
  }))

  phase.value = 'playing'
  await nextTick()
  await initQuizMap()
}

async function initQuizMap() {
  const token = getMapboxToken()
  if (!token || !shouldUseMapbox(token)) return

  mapboxgl.accessToken = token

  quizMap = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: MAP_CENTER,
    zoom: MAP_ZOOM,
    attributionControl: false,
  })

  await nextTick()
  quizMap.resize()

  quizMap.on('load', () => {
    // 困難模式：盲圖（隱藏所有文字標籤）
    if (difficulty.value === 'hard') {
      quizMap.getStyle().layers.forEach(layer => {
        if (layer.type === 'symbol') {
          quizMap.setLayoutProperty(layer.id, 'visibility', 'none')
        }
      })
    }

    // 合併所有題目的 GeoJSON features
    const allFeatures = []
    questions.value.forEach((q, qi) => {
      const gj = allAocData.get(q.path)
      if (gj?.features) {
        gj.features.forEach((f, fi) => {
          allFeatures.push({
            ...f,
            id: qi * 1000 + fi,
            properties: { ...f.properties, quizIdx: qi }
          })
        })
      }
    })

    quizMap.addSource('quiz-aoc', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: allFeatures },
      promoteId: 'id'
    })

    quizMap.addLayer({
      id: 'quiz-aoc-fill',
      type: 'fill',
      source: 'quiz-aoc',
      paint: {
        'fill-color': [
          'case',
          ['==', ['feature-state', 'status'], 'correct'], '#22c55e',
          ['==', ['feature-state', 'status'], 'wrong'],   '#ef4444',
          'rgba(255,255,255,0.04)'
        ],
        'fill-opacity': [
          'case',
          ['==', ['feature-state', 'status'], 'correct'], 0.55,
          ['==', ['feature-state', 'status'], 'wrong'],   0.45,
          0.04
        ]
      }
    })

    quizMap.addLayer({
      id: 'quiz-aoc-outline',
      type: 'line',
      source: 'quiz-aoc',
      paint: {
        'line-color': '#ffffff',
        'line-width': 1.5,
        'line-opacity': 0.75
      }
    })

    quizMap.on('click', handleMapClick)
    startQuestion()
  })
}

function startQuestion() {
  if (!currentQuestion.value) return
  clearTimer()
  clearFeedbackTimeout()
  timer.value = timerMax.value
  phase.value = 'playing'

  if (quizMap) {
    quizMap.removeFeatureState({ source: 'quiz-aoc' })
  }

  timerInterval = setInterval(() => {
    timer.value--
    if (timer.value <= 0) {
      clearTimer()
      applySingleFeedback(false, null, true)
    }
  }, 1000)
}

function handleMapClick(e) {
  if (phase.value !== 'playing') return
  clearTimer()

  const pt = turf.point([e.lngLat.lng, e.lngLat.lat])
  const q = currentQuestion.value
  if (!q) return

  const isCorrect = isPointInGeoJSON(pt, allAocData.get(q.path))

  let clickedLabel = null
  if (!isCorrect) {
    for (const qqItem of questions.value) {
      if (qqItem.path === q.path) continue
      if (isPointInGeoJSON(pt, allAocData.get(qqItem.path))) {
        clickedLabel = qqItem.label
        break
      }
    }
  }

  applySingleFeedback(isCorrect, clickedLabel, false)
}

function applySingleFeedback(correct, clickedLabel, timeout) {
  const q = currentQuestion.value
  const timeBonus = correct ? timer.value * BONUS_MAP[difficulty.value] : 0
  const totalPoints = correct ? 100 + timeBonus : 0

  if (correct) {
    score.value += totalPoints
    correctCount.value++
  }

  lastAnswer.value = { correct, clickedLabel, timeBonus, totalPoints, timeout }
  phase.value = 'feedback'

  if (quizMap && q) {
    const qGeoJSON = allAocData.get(q.path)
    if (qGeoJSON?.features) {
      const qi = currentQIndex.value
      qGeoJSON.features.forEach((_, fi) => {
        quizMap.setFeatureState({ source: 'quiz-aoc', id: qi * 1000 + fi }, { status: 'correct' })
      })
    }

    if (!correct && clickedLabel) {
      const wrongIdx = questions.value.findIndex(qq => qq.label === clickedLabel)
      if (wrongIdx >= 0) {
        const wrongGJ = allAocData.get(questions.value[wrongIdx].path)
        if (wrongGJ?.features) {
          wrongGJ.features.forEach((_, fi) => {
            quizMap.setFeatureState({ source: 'quiz-aoc', id: wrongIdx * 1000 + fi }, { status: 'wrong' })
          })
        }
      }
    }
  }

  feedbackTimeout = setTimeout(() => {
    if (currentQIndex.value < questions.value.length - 1) {
      currentQIndex.value++
      startQuestion()
    } else {
      finishGame()
    }
  }, 1800)
}

function finishGame() {
  clearTimer()
  clearFeedbackTimeout()
  if (quizMap) { quizMap.remove(); quizMap = null }
  const _prev = parseInt(localStorage.getItem('bg_map_best') || '0')
  if (score.value > _prev) localStorage.setItem('bg_map_best', score.value)
  phase.value = 'final'
}

function backToLobby() {
  phase.value = 'lobby'
  loadLeaderboard(difficulty.value)
  lbTab.value = difficulty.value
}

function handleBack() {
  clearTimer()
  clearFeedbackTimeout()
  if (quizMap) { quizMap.remove(); quizMap = null }
  emit('back')
}

// ══ Leaderboard ════════════════════════════════════════════════
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('bourgogne_quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    leaderboardData.value = data || []
  } catch (e) {
    console.error('[bourgogne-quiz] 排行榜載入失敗:', e)
    leaderboardData.value = []
  } finally {
    lbLoading.value = false
  }
}

function switchLbTab(diff) {
  lbTab.value = diff
  loadLeaderboard(diff)
}

async function submitScore() {
  if (!supabase) { uploadError.value = '未連接資料庫'; return }
  if (!authState.user) { uploadError.value = '請先登入以上傳成績'; return }
  if (scoreUploaded.value) return

  uploading.value = true
  uploadError.value = ''
  try {
    const username =
      authState.user.user_metadata?.full_name ||
      authState.user.email?.split('@')[0] ||
      '匿名玩家'
    const { error } = await supabase.from('bourgogne_quiz_scores').insert({
      user_id:         authState.user.id,
      username,
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctCount.value,
      total_questions: questions.value.length,
    })
    if (error) throw error
    scoreUploaded.value = true
    globalBurgAchievementManager.init()
    globalBurgAchievementManager.recordGameResult({
      gameType: 'bourgogne_map_quiz',
      score: score.value,
      correctCount: correctCount.value,
      totalQ: questions.value.length,
      difficulty: difficulty.value
    })
  } catch (e) {
    uploadError.value = `上傳失敗：${e.message}`
  } finally {
    uploading.value = false
  }
}

onMounted(() => {
  loadLeaderboard('easy')
})

onUnmounted(() => {
  clearTimer()
  clearFeedbackTimeout()
  if (quizMap) { quizMap.remove(); quizMap = null }
})
</script>

<style scoped>
.quiz-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow: hidden;
}

.quiz-back-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 200;
  background: rgba(255,255,255,0.08);
  color: #adb5bd;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 9px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.88rem;
  backdrop-filter: blur(8px);
  transition: background 0.2s, color 0.2s;
}
.quiz-back-btn:hover { background: rgba(255,255,255,0.16); color: #f0f6fc; }

/* ══ Lobby ══ */
.quiz-lobby {
  height: 100%;
  overflow-y: auto;
  padding: 56px 20px 40px;
  display: flex;
  justify-content: center;
}
.lobby-inner {
  width: 100%;
  max-width: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.quiz-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  color: #f0f6fc;
  text-align: center;
}
.quiz-subtitle {
  color: #8b949e;
  font-size: 1rem;
  margin: -20px 0 0;
  text-align: center;
}

/* 難度卡片 */
.difficulty-cards {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.diff-card {
  background: rgba(255,255,255,0.05);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px;
  padding: 24px 28px;
  cursor: pointer;
  text-align: center;
  width: 188px;
  transition: all 0.2s ease;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.35); }
.diff-card.easy   { border-color: rgba(74,222,128,0.25); }
.diff-card.easy:hover  { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.medium { border-color: rgba(96,165,250,0.25); }
.diff-card.medium:hover { border-color: #60a5fa; background: rgba(96,165,250,0.07); }
.diff-card.hard   { border-color: rgba(251,191,36,0.25); }
.diff-card.hard:hover  { border-color: #fbbf24; background: rgba(251,191,36,0.07); }
.diff-icon { font-size: 2.4rem; margin-bottom: 10px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; }
.diff-details {
  list-style: none;
  margin: 0; padding: 0;
  display: flex; flex-direction: column; gap: 5px;
  font-size: 0.78rem; color: #8b949e;
}

/* ══ 選擇產區 ══ */
.region-select-phase .lobby-inner { max-width: 680px; }
.region-pick-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  width: 100%;
}
.region-pick-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 16px 12px;
  text-align: center;
  cursor: pointer;
  display: flex; flex-direction: column; gap: 6px; align-items: center;
  transition: all 0.2s;
}
.region-pick-card:hover { border-color: rgba(167,139,250,0.5); background: rgba(167,139,250,0.07); }
.region-pick-card.selected {
  border-color: #a78bfa;
  background: rgba(167,139,250,0.15);
  box-shadow: 0 0 0 2px rgba(167,139,250,0.25);
}
.rp-icon { font-size: 1.8rem; }
.rp-name { font-size: 0.9rem; font-weight: 600; }
.rp-count { font-size: 0.75rem; color: #8b949e; }
.region-pick-actions {
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: center;
}
.pick-hint {
  font-size: 0.9rem; color: #8b949e; min-width: 110px; text-align: center;
}
.pick-hint.ok { color: #4ade80; font-weight: 600; }
.btn-start {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 28px;
  font-size: 1rem; font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-start:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-cancel {
  background: transparent;
  color: #8b949e;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-cancel:hover { background: rgba(255,255,255,0.06); color: #f0f6fc; }

/* ══ Leaderboard ══ */
.leaderboard-section {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 18px 20px 12px;
}
.lb-header {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;
}
.lb-title { font-size: 1rem; font-weight: 700; color: #f0f6fc; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  padding: 5px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  background: transparent;
  color: #8b949e;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}
.lb-tabs button.active {
  background: rgba(167,139,250,0.2);
  color: #c4b5fd;
  border-color: rgba(167,139,250,0.4);
}
.lb-loading { color: #8b949e; text-align: center; padding: 20px 0; }
.lb-table { width: 100%; border-collapse: collapse; }
.lb-table th {
  text-align: left; padding: 8px 10px;
  font-size: 0.78rem; color: #8b949e; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);
}
.lb-table td {
  padding: 10px 10px; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.04);
}
.rank-cell { width: 40px; }
.score-cell { color: #4ade80; font-weight: 700; }
.date-cell { color: #8b949e; font-size: 0.78rem; }
.my-row td { background: rgba(167,139,250,0.08); }
.lb-empty { text-align: center; color: #8b949e; padding: 20px 0; }

/* ══ Loading ══ */
.quiz-loading {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100%; gap: 20px; color: #8b949e;
}
.loading-ring {
  width: 50px; height: 50px;
  border: 4px solid rgba(255,255,255,0.08);
  border-top-color: #a78bfa;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ══ Game ══ */
.quiz-game { position: relative; width: 100%; height: 100%; }
.quiz-map  { position: absolute; inset: 0; }

/* 問題欄 */
.quiz-question-bar {
  position: absolute; top: 0; left: 0; right: 0; z-index: 10;
  display: flex; align-items: center; gap: 16px;
  background: rgba(13,17,23,0.82);
  backdrop-filter: blur(12px);
  padding: 12px 72px 12px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.q-progress { display: flex; align-items: center; gap: 8px; min-width: 90px; }
.q-progress-text { font-size: 0.82rem; color: #8b949e; }
.q-progress-bar {
  width: 70px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;
}
.q-progress-fill { height: 100%; background: #a78bfa; border-radius: 2px; transition: width 0.3s; }
.q-text  { flex: 1; text-align: center; font-size: 1.05rem; }
.q-text strong { color: #c4b5fd; }
.q-score { font-size: 1rem; font-weight: 700; color: #4ade80; min-width: 60px; text-align: right; }

/* 計時器 */
.quiz-timer {
  position: absolute; top: 12px; right: 16px; z-index: 20;
  width: 52px; height: 52px;
}
.quiz-timer.urgent .timer-num { color: #ef4444; animation: blink 0.5s ease-in-out infinite; }
@keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
.timer-ring { position: absolute; inset: 0; transform: rotate(-90deg); }
.ring-bg { fill: none; stroke: rgba(255,255,255,0.08); stroke-width: 3.5; }
.ring-progress { fill: none; stroke-width: 3.5; stroke-linecap: round; transition: stroke-dasharray 0.9s linear, stroke 0.4s; }
.timer-num {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; font-weight: 700; color: #f0f6fc;
}

/* 回饋浮層 */
.feedback-overlay {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  background: rgba(13,17,23,0.92);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 28px 36px;
  text-align: center;
  min-width: 220px;
  border: 2px solid transparent;
}
.feedback-overlay.correct { border-color: rgba(34,197,94,0.5); }
.feedback-overlay.wrong   { border-color: rgba(239,68,68,0.5); }
.feedback-icon { font-size: 2.8rem; font-weight: 900; line-height: 1; }
.correct .feedback-icon { color: #22c55e; }
.wrong   .feedback-icon { color: #ef4444; }
.feedback-text  { font-size: 1.2rem; font-weight: 700; margin-top: 8px; }
.feedback-bonus { font-size: 1rem; color: #4ade80; font-weight: 700; }
.feedback-clicked { font-size: 0.82rem; color: #f87171; margin-top: 6px; }
.feedback-answer { font-size: 0.88rem; color: #8b949e; margin-top: 6px; }
.feedback-answer strong { color: #c4b5fd; }

.feedback-pop-enter-active { transition: all 0.25s ease-out; }
.feedback-pop-leave-active { transition: all 0.2s ease-in; }
.feedback-pop-enter-from { opacity: 0; transform: translate(-50%, -55%) scale(0.88); }
.feedback-pop-leave-to   { opacity: 0; transform: translate(-50%, -45%) scale(0.94); }

/* ══ Final ══ */
.quiz-final {
  display: flex; align-items: center; justify-content: center;
  height: 100%; padding: 20px;
}
.final-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 40px 44px;
  text-align: center;
  max-width: 420px; width: 100%;
}
.final-result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { font-size: 1.5rem; font-weight: 700; margin: 0 0 16px; }
.final-score { font-size: 3.5rem; font-weight: 900; color: #a78bfa; line-height: 1; }
.final-score-label { font-size: 0.85rem; color: #8b949e; margin-bottom: 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.stat-chip {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 0.83rem; color: #c9d1d9;
}
.btn-submit {
  width: 100%;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: #fff;
  border: none; border-radius: 12px;
  padding: 13px; font-size: 1rem; font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-bottom: 12px;
}
.btn-submit:disabled { opacity: 0.4; cursor: not-allowed; }
.upload-error { font-size: 0.82rem; color: #f87171; margin-bottom: 12px; }
.final-actions { display: flex; justify-content: center; }
.btn-secondary {
  background: rgba(255,255,255,0.06);
  color: #c9d1d9;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 10px 24px;
  font-size: 0.9rem; cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary:hover { background: rgba(255,255,255,0.12); }

/* ══ 響應式 ══ */
@media (max-width: 600px) {
  .quiz-title { font-size: 1.6rem; }
  .difficulty-cards { flex-direction: column; align-items: center; }
  .diff-card { width: 100%; max-width: 320px; }
  .region-pick-grid { grid-template-columns: repeat(2, 1fr); }
  .final-card { padding: 28px 20px; }
}
</style>
