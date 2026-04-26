<template>
  <div ref="pageEl" class="cq-page" tabindex="-1" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍷 紅・白・兩者 快答</h1>
        <p class="subtitle">看到 AOC 名稱，立刻按下<strong>紅酒・白酒・兩者皆有</strong></p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">經典、明確的 AOC</div>
            <ul class="diff-list">
              <li>Chablis / Pommard 等</li>
              <li>每題 12 秒</li>
              <li>共 20 題</li>
              <li>顯示大區提示</li>
            </ul>
          </div>
          <div class="diff-card medium" @click="startGame('medium')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">中等</div>
            <div class="diff-desc">含常見「兩者」陷阱題</div>
            <ul class="diff-list">
              <li>Meursault / Chassagne 等</li>
              <li>每題 8 秒</li>
              <li>共 20 題</li>
              <li>無提示</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">💀</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">特級園、冷僻 AOC</div>
            <ul class="diff-list">
              <li>Musigny / Blagny 等陷阱</li>
              <li>每題 5 秒</li>
              <li>共 20 題</li>
              <li>無提示</li>
            </ul>
          </div>
        </div>

        <!-- 速查表 -->
        <div class="cheat-sheet">
          <div class="cs-title">⌨️ 鍵盤快捷</div>
          <div class="cs-row">
            <span class="cs-key">R / 1</span><span class="cs-val">🔴 紅酒</span>
            <span class="cs-key">W / 2</span><span class="cs-val">⚪ 白酒</span>
            <span class="cs-key">B / 3</span><span class="cs-val">🟣 兩者</span>
          </div>
        </div>

        <!-- 排行榜 -->
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }"   @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab === 'medium' }" @click="setLbTab('medium')">中等</button>
              <button :class="{ active: lbTab === 'hard' }"   @click="setLbTab('hard')">困難</button>
            </div>
          </div>
          <table class="lb-table" v-if="lbData.length">
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(row, i) in lbData" :key="row.id" :class="{ mine: row.user_id === myUid }">
                <td :class="{ gold: i === 0 }">{{ i + 1 }}</td>
                <td>{{ row.username }}</td>
                <td class="gold">{{ row.score }}</td>
                <td class="muted">{{ row.correct_count }}/{{ row.total_questions }}</td>
                <td class="muted">{{ fmtDate(row.created_at) }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else-if="lbLoading" class="lb-empty">載入中…</div>
          <div v-else class="lb-empty">尚無記錄，成為第一名！</div>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING ══ -->
    <div v-else-if="phase === 'playing'" class="game">
      <div class="top-bar">
        <div class="progress-row">
          <span class="round-lbl">第 {{ qIdx + 1 }} / {{ TOTAL_Q }} 題</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-row">
          <div class="timer-track">
            <div class="timer-fill"
              :class="{ urgent: timerPct < 30 }"
              :style="{ width: timerPct + '%', background: timerColor }">
            </div>
          </div>
          <span class="timer-num">{{ timerSec }}</span>
        </div>
      </div>

      <!-- AOC 展示 -->
      <div class="aoc-display">
        <div class="aoc-label">AOC</div>
        <div class="aoc-name">{{ currentQ.name }}</div>
        <div v-if="difficulty === 'easy'" class="aoc-region">{{ currentQ.region }}</div>
        <div class="aoc-combos">
          <span class="aoc-combo-pill" v-if="currentQ.color === 'red'">Pinot Noir</span>
          <span class="aoc-combo-pill white-pill" v-if="currentQ.color === 'white'">Chardonnay</span>
          <span class="aoc-combo-pill both-pill" v-if="currentQ.color === 'both'">?</span>
        </div>
      </div>

      <!-- 三大按鈕 -->
      <div class="color-btns">
        <button class="color-btn red-btn"
          :class="{ pressed: answered && selectedColor === 'red', correct: answered && selectedColor === 'red' && lastCorrect, wrong: answered && selectedColor === 'red' && !lastCorrect, dimmed: answered && selectedColor !== 'red' && currentQ.color !== 'red' }"
          :disabled="answered" @click="selectAnswer('red')">
          <span class="cb-icon">🔴</span>
          <span class="cb-label">紅酒</span>
          <span class="cb-key">R / 1</span>
        </button>
        <button class="color-btn white-btn"
          :class="{ pressed: answered && selectedColor === 'white', correct: answered && selectedColor === 'white' && lastCorrect, wrong: answered && selectedColor === 'white' && !lastCorrect, dimmed: answered && selectedColor !== 'white' && currentQ.color !== 'white' }"
          :disabled="answered" @click="selectAnswer('white')">
          <span class="cb-icon">⚪</span>
          <span class="cb-label">白酒</span>
          <span class="cb-key">W / 2</span>
        </button>
        <button class="color-btn both-btn"
          :class="{ pressed: answered && selectedColor === 'both', correct: answered && selectedColor === 'both' && lastCorrect, wrong: answered && selectedColor === 'both' && !lastCorrect, dimmed: answered && selectedColor !== 'both' && currentQ.color !== 'both' }"
          :disabled="answered" @click="selectAnswer('both')">
          <span class="cb-icon">🟣</span>
          <span class="cb-label">兩者皆有</span>
          <span class="cb-key">B / 3</span>
        </button>
      </div>
    </div>

    <!-- ══ FEEDBACK overlay ══ -->
    <Transition name="fb-fade">
      <div v-if="phase === 'feedback'" class="feedback-overlay" :class="lastCorrect ? 'correct' : 'wrong'">
        <div class="feedback-inner">
          <div class="fb-icon">{{ lastCorrect ? '✓' : '✗' }}</div>
          <div class="fb-aoc">{{ currentQ.name }}</div>
          <div class="fb-answer">
            <span class="fb-color-pill" :class="currentQ.color">
              {{ { red: '🔴 紅酒', white: '⚪ 白酒', both: '🟣 兩者皆有' }[currentQ.color] }}
            </span>
          </div>
          <div class="fb-hint" v-if="currentQ.hint">{{ currentQ.hint }}</div>
          <div class="fb-pts" v-if="lastCorrect">+{{ lastPts }} 分</div>
        </div>
      </div>
    </Transition>

    <!-- ══ FINAL ══ -->
    <div v-if="phase === 'final'" class="final">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>挑戰結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分（滿分 {{ TOTAL_Q * 100 }}）</div>
        <div class="final-stats">
          <div class="chip">{{ diffLabel }}</div>
          <div class="chip">{{ correctCount }} / {{ TOTAL_Q }} 正確</div>
          <div class="chip">{{ accuracy }}% 正確率</div>
        </div>

        <!-- 錯題回顧 -->
        <div v-if="wrongItems.length" class="wrong-review">
          <div class="wr-title">📖 錯題回顧</div>
          <div class="wr-list">
            <div v-for="w in wrongItems" :key="w.name" class="wr-row">
              <span class="wr-color-pill" :class="w.color">
                {{ { red: '🔴 紅', white: '⚪ 白', both: '🟣 兩者' }[w.color] }}
              </span>
              <div class="wr-info">
                <div class="wr-name">{{ w.name }}</div>
                <div class="wr-region">{{ w.region }}</div>
                <div class="wr-hint" v-if="w.hint">{{ w.hint }}</div>
              </div>
            </div>
          </div>
        </div>

        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄排行榜' : '📤 上傳成績' }}
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
import { globalBurgAchievementManager } from '@/stores/bourgogneAchievementSystem.js'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── AOC 資料庫 ────────────────────────────────────────────────
// color: 'red' | 'white' | 'both'
const ALL_AOCS = [
  // ── 白酒 (White only) ──────────────────────────────────────
  { name: 'Chablis',                        color: 'white', region: '夏布利',           famous: true,  hint: '100% Chardonnay，以礦石與清爽著稱' },
  { name: 'Chablis Grand Cru',              color: 'white', region: '夏布利',           famous: true,  hint: '7 個特級 climat：Valmur、Vaudésir 等，全白酒' },
  { name: 'Petit Chablis',                  color: 'white', region: '夏布利',           famous: true,  hint: '夏布利外緣，全白酒，清爽易飲' },
  { name: 'Saint-Bris',                     color: 'white', region: '大歐塞瓦',         famous: true,  hint: '布根地唯一以 Sauvignon Blanc 為主的法定產區' },
  { name: 'Vézelay',                        color: 'white', region: '大歐塞瓦',         famous: false, hint: '丘陵地形，全白酒 Chardonnay，2017 年升為獨立 AOC' },
  { name: 'Bourgogne Aligoté',              color: 'white', region: '整個布根地',       famous: true,  hint: '布根地唯一以 Aligoté 品種命名的白酒 AOC' },
  { name: 'Puligny-Montrachet',             color: 'white', region: '伯恩丘',           famous: true,  hint: '世界最優雅 Chardonnay 村莊，幾乎全白酒' },
  { name: 'Montrachet',                     color: 'white', region: '伯恩丘 Grand Cru', famous: true,  hint: '全球最偉大干白，橫跨 Puligny 與 Chassagne' },
  { name: 'Chevalier-Montrachet',           color: 'white', region: '伯恩丘 Grand Cru', famous: true,  hint: 'Puligny 獨有 Grand Cru，坡頂，礦石感極強' },
  { name: 'Bâtard-Montrachet',             color: 'white', region: '伯恩丘 Grand Cru', famous: true,  hint: '橫跨 Puligny 與 Chassagne，酒體豐厚，純白酒' },
  { name: 'Bienvenues-Bâtard-Montrachet', color: 'white', region: '伯恩丘 Grand Cru', famous: false, hint: '僅在 Puligny，Montrachet 家族中面積最小，純白酒' },
  { name: 'Criots-Bâtard-Montrachet',      color: 'white', region: '伯恩丘 Grand Cru', famous: false, hint: '僅在 Chassagne，布根地面積最小的 Grand Cru，純白酒' },
  { name: 'Corton-Charlemagne',             color: 'white', region: '伯恩丘 Grand Cru', famous: true,  hint: '伯恩丘最大白酒 GC，相傳 Charlemagne 所植，雄渾有力' },
  { name: 'Pouilly-Fuissé',                color: 'white', region: '馬貢內',           famous: true,  hint: '馬貢內旗艦，2020 年建立 1er Cru 制度，全白酒' },
  { name: 'Pouilly-Loché',                 color: 'white', region: '馬貢內',           famous: false, hint: '可借用 Pouilly-Vinzelles 名稱銷售，全白酒' },
  { name: 'Pouilly-Vinzelles',             color: 'white', region: '馬貢內',           famous: false, hint: '緊鄰 Pouilly-Fuissé，全白酒 Chardonnay' },
  { name: 'Saint-Véran',                   color: 'white', region: '馬貢內',           famous: false, hint: '環繞 Pouilly-Fuissé 南北兩側，全白酒' },
  { name: 'Viré-Clessé',                   color: 'white', region: '馬貢內',           famous: false, hint: '2002 年升格，全白酒 Chardonnay，帶有蜂蜜質感' },
  { name: 'Mâcon-Villages',                color: 'white', region: '馬貢內',           famous: true,  hint: '26 個村莊掛名，全白酒 Chardonnay' },
  { name: 'Montagny',                      color: 'white', region: '夏隆內丘',         famous: false, hint: '夏隆內丘唯一純白酒 AOC，全為 Chardonnay' },
  // ── 紅酒 (Red only) ───────────────────────────────────────
  { name: 'Irancy',                        color: 'red',   region: '大歐塞瓦',         famous: false, hint: '允許加入 César 品種（10%），布根地特色純紅酒' },
  { name: 'Chambertin',                    color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: '拿破崙最愛，13ha，純 Pinot Noir，紅酒之王' },
  { name: 'Chambertin Clos de Bèze',       color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: '可標示為 Chambertin，但 Chambertin 不可反向，純紅酒' },
  { name: 'Clos de la Roche',              color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: 'Morey 最大最知名 GC（17ha），純紅酒' },
  { name: 'Clos de Tart',                  color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: 'Monopole，LVMH 持有，純紅酒' },
  { name: 'Clos des Lambrays',             color: 'red',   region: '夜丘 Grand Cru',   famous: false, hint: '幾乎 Monopole，1981 升格，純紅酒' },
  { name: 'Clos Saint-Denis',              color: 'red',   region: '夜丘 Grand Cru',   famous: false, hint: 'Morey-Saint-Denis 村名由此命名，純紅酒' },
  { name: 'Romanée-Conti',                 color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: 'DRC Monopole，1.8ha，全球最昂貴干紅，純紅酒' },
  { name: 'La Tâche',                      color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: 'DRC Monopole，6ha，純 Pinot Noir 紅酒' },
  { name: 'Richebourg',                    color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: 'DRC・Leroy 皆持有，以豐厚著稱，純紅酒' },
  { name: 'La Romanée',                    color: 'red',   region: '夜丘 Grand Cru',   famous: false, hint: '布根地最小法定 AOC（0.85ha），Liger-Belair Monopole，純紅酒' },
  { name: 'Romanée-Saint-Vivant',          color: 'red',   region: '夜丘 Grand Cru',   famous: false, hint: '以優雅花香著稱，DRC 最大持有者，純紅酒' },
  { name: 'Échézeaux',                     color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: '37ha 大型 GC，多莊主，純 Pinot Noir 紅酒' },
  { name: 'Grands-Échézeaux',              color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: 'DRC 持有，比 Échézeaux 更濃縮精緻，純紅酒' },
  { name: 'Clos de Vougeot',               color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: '50ha，80+ 莊主，全為 Pinot Noir 紅酒' },
  { name: 'Gevrey-Chambertin',             color: 'red',   region: '夜丘',             famous: true,  hint: '夜丘最大村莊，village AOC 幾乎全紅酒' },
  { name: 'Chambolle-Musigny',             color: 'red',   region: '夜丘',             famous: true,  hint: '以精緻著稱，village AOC 幾乎全紅酒' },
  { name: 'Vosne-Romanée',                 color: 'red',   region: '夜丘',             famous: true,  hint: '特級園最密集的村莊，village AOC 純紅酒' },
  { name: 'Nuits-Saint-Georges',           color: 'red',   region: '夜丘',             famous: true,  hint: '夜丘南端重鎮，village AOC 幾乎全紅酒' },
  { name: 'Pommard',                       color: 'red',   region: '伯恩丘',           famous: true,  hint: '伯恩丘最知名純紅酒 village AOC，酒體強勁' },
  { name: 'Volnay',                        color: 'red',   region: '伯恩丘',           famous: true,  hint: '優雅 Pinot Noir 代名詞，伯恩丘純紅酒' },
  { name: 'Blagny',                        color: 'red',   region: '伯恩丘',           famous: false, hint: '⚠️ 陷阱！白酒掛 Meursault/Puligny 名稱，Blagny AOC 只限紅酒' },
  { name: 'Moulin-à-Vent',                 color: 'red',   region: '薄酒萊',           famous: true,  hint: '薄酒萊最強 Cru，Gamay，陳年後類似 Pinot Noir，全紅酒' },
  { name: 'Fleurie',                       color: 'red',   region: '薄酒萊',           famous: true,  hint: '薄酒萊 10 Cru 之一，花香優雅，全紅酒' },
  { name: 'Morgon',                        color: 'red',   region: '薄酒萊',           famous: true,  hint: '以結構感著稱，可演化為 Beaujolais 陳年表現，全紅酒' },
  { name: 'Côte de Brouilly',              color: 'red',   region: '薄酒萊',           famous: false, hint: 'Blue Stone 火山岩坡，比 Brouilly 更集中，全紅酒' },
  { name: 'Chiroubles',                    color: 'red',   region: '薄酒萊',           famous: false, hint: '薄酒萊最輕盈 Cru，高海拔，全紅酒' },
  { name: 'Régnié',                        color: 'red',   region: '薄酒萊',           famous: false, hint: '1988 年最後升格的薄酒萊 Cru，全紅酒' },
  // ── 兩者皆有 (Both) ───────────────────────────────────────
  { name: 'Marsannay',                     color: 'both',  region: '夜丘',             famous: true,  hint: '夜丘唯一生產 紅+白+粉紅 三色的 AOC' },
  { name: 'Fixin',                         color: 'both',  region: '夜丘',             famous: false, hint: '主要紅酒（Pinot Noir），但允許白酒（Chardonnay）' },
  { name: 'Morey-Saint-Denis',             color: 'both',  region: '夜丘',             famous: true,  hint: 'Village AOC 允許白酒，但以紅酒為主' },
  { name: 'Vougeot',                       color: 'both',  region: '夜丘',             famous: false, hint: 'Village AOC 有 Clos Blanc（白酒），Clos de Vougeot GC 為純紅酒' },
  { name: 'Musigny',                       color: 'both',  region: '夜丘 Grand Cru',   famous: true,  hint: '⚠️ 陷阱！de Vogüé 生產極少量 Musigny Blanc，官方允許白酒，屬兩者' },
  { name: 'Bonnes-Mares',                  color: 'red',   region: '夜丘 Grand Cru',   famous: true,  hint: '跨 Chambolle 與 Morey，大部分在 Chambolle，純紅酒 Grand Cru' },
  { name: 'La Grande Rue',                 color: 'red',   region: '夜丘 Grand Cru',   famous: false, hint: '1992 年升格，夾在 RC 與 La Tâche 之間，純紅酒' },
  { name: 'Corton',                        color: 'both',  region: '伯恩丘 Grand Cru', famous: true,  hint: '伯恩丘唯一 GC 允許紅白兩色，以紅酒（Pinot Noir）為主' },
  { name: 'Aloxe-Corton',                  color: 'both',  region: '伯恩丘',           famous: false, hint: 'Village AOC 以紅酒為主，少量白酒，GC Corton 紅白皆有' },
  { name: 'Pernand-Vergelesses',           color: 'both',  region: '伯恩丘',           famous: false, hint: '紅白均衡，白酒以 Chardonnay 為主，也持有 Corton-Charlemagne GC' },
  { name: 'Ladoix',                        color: 'both',  region: '伯恩丘',           famous: false, hint: '最小的伯恩丘 village AOC，紅白皆有（也持有部分 Corton GC）' },
  { name: 'Savigny-lès-Beaune',            color: 'both',  region: '伯恩丘',           famous: false, hint: '紅酒為主（Pinot Noir），但白酒（Chardonnay）量可觀' },
  { name: 'Beaune',                        color: 'both',  region: '伯恩丘',           famous: true,  hint: '伯恩丘最大 village AOC，紅白皆產，以紅酒（Pinot Noir）為主' },
  { name: 'Auxey-Duresses',                color: 'both',  region: '伯恩丘',           famous: false, hint: '約 1/3 為白酒（Chardonnay），2/3 為紅酒（Pinot Noir）' },
  { name: 'Saint-Romain',                  color: 'both',  region: '伯恩丘',           famous: false, hint: '紅白相對均衡，山谷地形，布根地少見的兩色平衡 AOC' },
  { name: 'Monthélie',                     color: 'both',  region: '伯恩丘',           famous: false, hint: '以紅酒為主，緊鄰 Volnay，也有少量白酒' },
  { name: 'Meursault',                     color: 'both',  region: '伯恩丘',           famous: true,  hint: '⚠️ 陷阱！以白酒著稱，但 Meursault Rouge 合法存在（少量）' },
  { name: 'Chassagne-Montrachet',          color: 'both',  region: '伯恩丘',           famous: true,  hint: '南部紅酒（Pinot Noir），北部白酒（Chardonnay），兩色兼有' },
  { name: 'Saint-Aubin',                   color: 'both',  region: '伯恩丘',           famous: false, hint: '以白酒為主（Chardonnay），但亦有紅酒（Pinot Noir）' },
  { name: 'Santenay',                      color: 'both',  region: '伯恩丘',           famous: false, hint: '紅酒為主（Pinot Noir），少量白酒（Chardonnay）' },
  { name: 'Maranges',                      color: 'both',  region: '伯恩丘',           famous: false, hint: '以紅酒為主，橫跨三村，也有少量白酒' },
  { name: 'Rully',                         color: 'both',  region: '夏隆內丘',         famous: true,  hint: '夏隆內丘紅白均衡，也是 Crémant de Bourgogne 基酒重要來源' },
  { name: 'Mercurey',                      color: 'both',  region: '夏隆內丘',         famous: true,  hint: '夏隆內丘最大 AOC，約 75% 紅酒（Pinot Noir）' },
  { name: 'Givry',                         color: 'both',  region: '夏隆內丘',         famous: false, hint: '約 85% 紅酒（Pinot Noir），亦有白酒（Chardonnay）' },
  { name: 'Mâcon',                         color: 'both',  region: '馬貢內',           famous: false, hint: 'Mâcon Rouge（Gamay/Pinot Noir）與 Mâcon Blanc 皆合法' },
  { name: 'Bourgogne Passe-Tout-Grains',   color: 'both',  region: '整個布根地',       famous: false, hint: 'Gamay + Pinot Noir 混調，生產紅酒與粉紅酒' },
]

// ── 難度設定 ─────────────────────────────────────────────────
const TOTAL_Q = 20
const DIFF_CONFIG = {
  easy:   { label: '🥂 簡單', time: 12000, pool: () => ALL_AOCS.filter(a => a.famous) },
  medium: { label: '🔥 中等', time: 8000,  pool: () => ALL_AOCS },
  hard:   { label: '💀 困難', time: 5000,  pool: () => ALL_AOCS },
}

// ── State ─────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const questions    = ref([])
const qIdx         = ref(0)
const selectedColor = ref('')
const answered     = ref(false)
const lastCorrect  = ref(false)
const lastPts      = ref(0)
const score        = ref(0)
const correctCount = ref(0)
const wrongItems   = ref([])

const timerPct = ref(100)
const timerSec = ref(12)
let timerMs    = 12000
let timerStart = 0
let rafId      = null
let feedbackTimer = null

const uploaded  = ref(false)
const uploading = ref(false)
const uploadErr = ref('')
const lbTab     = ref('easy')
const lbLoading = ref(false)
const lbData    = ref([])

// ── Computed ──────────────────────────────────────────────────
const currentQ  = computed(() => questions.value[qIdx.value] || {})
const myUid     = computed(() => authState.user?.id)
const diffLabel = computed(() => DIFF_CONFIG[difficulty.value]?.label ?? '')
const accuracy  = computed(() => Math.round((correctCount.value / TOTAL_Q) * 100))

const timerColor = computed(() => {
  if (timerPct.value > 50) return '#4ade80'
  if (timerPct.value > 25) return '#facc15'
  return '#ef4444'
})

const resultEmoji = computed(() => {
  const r = correctCount.value / TOTAL_Q
  if (r >= 0.9) return '🎉'
  if (r >= 0.6) return '👍'
  return '📖'
})

// ── Utilities ─────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function fmtDate(iso) {
  const d = new Date(iso)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

// ── Game ──────────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value   = diff
  timerMs            = DIFF_CONFIG[diff].time
  const pool         = DIFF_CONFIG[diff].pool()
  questions.value    = shuffle(pool).slice(0, TOTAL_Q)
  qIdx.value         = 0
  score.value        = 0
  correctCount.value = 0
  wrongItems.value   = []
  uploaded.value     = false
  uploadErr.value    = ''
  answered.value     = false
  selectedColor.value = ''
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function selectAnswer(color) {
  if (answered.value) return
  stopRaf()
  answered.value     = true
  selectedColor.value = color
  lastCorrect.value  = color === currentQ.value.color

  if (lastCorrect.value) {
    const speedBonus = Math.round((timerPct.value / 100) * 50)
    lastPts.value  = 50 + speedBonus
    score.value   += lastPts.value
    correctCount.value++
  } else {
    lastPts.value = 0
    wrongItems.value.push(currentQ.value)
  }
  phase.value   = 'feedback'
  feedbackTimer = setTimeout(advanceQuestion, 1400)
}

function handleTimeout() {
  stopRaf()
  answered.value      = true
  selectedColor.value = ''
  lastCorrect.value   = false
  lastPts.value       = 0
  wrongItems.value.push(currentQ.value)
  phase.value   = 'feedback'
  feedbackTimer = setTimeout(advanceQuestion, 1400)
}

function advanceQuestion() {
  clearTimeout(feedbackTimer)
  answered.value      = false
  selectedColor.value = ''
  if (qIdx.value < TOTAL_Q - 1) {
    qIdx.value++
    phase.value = 'playing'
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    const _prev = parseInt(localStorage.getItem('bg_color_best') || '0')
    if (score.value > _prev) localStorage.setItem('bg_color_best', score.value)
    phase.value = 'final'
  }
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const map = { r: 'red', '1': 'red', w: 'white', '2': 'white', b: 'both', '3': 'both' }
  const color = map[e.key.toLowerCase()]
  if (color) { e.preventDefault(); selectAnswer(color) }
}

// ── Timer ─────────────────────────────────────────────────────
function startRaf() {
  timerStart = performance.now()
  timerPct.value = 100
  timerSec.value = Math.ceil(timerMs / 1000)
  function tick() {
    const elapsed   = performance.now() - timerStart
    const remaining = Math.max(0, timerMs - elapsed)
    timerPct.value  = (remaining / timerMs) * 100
    timerSec.value  = Math.ceil(remaining / 1000)
    if (elapsed >= timerMs) {
      timerPct.value = 0; timerSec.value = 0
      handleTimeout()
    } else {
      rafId = requestAnimationFrame(tick)
    }
  }
  rafId = requestAnimationFrame(tick)
}

function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

// ── Back / Lobby ──────────────────────────────────────────────
function handleBack() { stopRaf(); clearTimeout(feedbackTimer); emit('back') }
function backToLobby() { phase.value = 'lobby'; setLbTab(difficulty.value) }

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'color_quiz')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch (e) { console.error('[color-quiz] lb:', e) }
  finally { lbLoading.value = false }
}

function setLbTab(diff) { lbTab.value = diff; loadLeaderboard(diff) }

async function submitScore() {
  if (!supabase)       { uploadErr.value = '未連接資料庫'; return }
  if (!authState.user) { uploadErr.value = '請先登入以上傳成績'; return }
  if (uploaded.value)  return
  uploading.value = true
  uploadErr.value = ''
  try {
    const username =
      authState.user.user_metadata?.full_name ||
      authState.user.email?.split('@')[0] || '匿名玩家'
    const { error } = await supabase.from('quiz_scores').insert({
      user_id:         authState.user.id,
      username,
      game_type:       'color_quiz',
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctCount.value,
      total_questions: TOTAL_Q,
    })
    if (error) throw error
    uploaded.value = true
    globalBurgAchievementManager.init()
    globalBurgAchievementManager.recordGameResult({
      gameType: 'color_quiz',
      score: score.value,
      correctCount: correctCount.value,
      totalQ: TOTAL_Q,
      difficulty: difficulty.value
    })
  } catch (e) {
    uploadErr.value = `上傳失敗：${e.message}`
  } finally { uploading.value = false }
}

onMounted(() => { loadLeaderboard('easy'); nextTick(() => pageEl.value?.focus()) })
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.cq-page {
  position: relative;
  width: 100%; height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex; flex-direction: column;
  outline: none; overflow: hidden;
}

.back-btn {
  position: absolute; top: 14px; left: 14px; z-index: 50;
  background: rgba(255,255,255,0.07); color: #8b949e;
  border: 1px solid rgba(255,255,255,0.12); border-radius: 10px;
  padding: 7px 14px; font-size: 0.86rem; cursor: pointer; backdrop-filter: blur(8px);
}
.back-btn:hover { background: rgba(255,255,255,0.14); color: #f0f6fc; }

/* ══ Lobby ══ */
.lobby {
  flex: 1; overflow-y: auto; padding: 52px 20px 36px;
  display: flex; justify-content: center;
}
.lobby-inner {
  width: 100%; max-width: 720px;
  display: flex; flex-direction: column; align-items: center; gap: 24px;
}
.title    { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.subtitle strong { color: #f0f6fc; }

.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 22px 20px;
  cursor: pointer; text-align: center; width: 185px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover   { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.medium:hover { border-color: #facc15; background: rgba(250,204,21,0.07); }
.diff-card.hard:hover   { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2.2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #6e7681; margin-bottom: 10px; }
.diff-list {
  list-style: none; margin: 0; padding: 0; font-size: 0.75rem;
  color: #8b949e; display: flex; flex-direction: column; gap: 3px; text-align: left;
}

/* Shortcut tips */
.cheat-sheet {
  width: 100%; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07); border-radius: 12px;
  padding: 12px 18px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
}
.cs-title { font-size: 0.82rem; color: #6e7681; font-weight: 600; margin-right: 4px; }
.cs-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.cs-key {
  background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.15);
  padding: 2px 9px; border-radius: 6px; font-size: 0.78rem; font-weight: 700; color: #f0f6fc;
}
.cs-val { font-size: 0.82rem; color: #8b949e; margin-right: 8px; }

/* Leaderboard */
.lb-box {
  width: 100%; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 16px 18px 10px;
}
.lb-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  padding: 4px 12px; border: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: #6e7681; border-radius: 8px; cursor: pointer; font-size: 0.8rem;
}
.lb-tabs button.active { background: rgba(255,255,255,0.09); color: #f0f6fc; border-color: rgba(255,255,255,0.2); }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
.lb-table th { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6e7681; text-align: left; }
.lb-table td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #c9d1d9; }
.lb-table .mine td { background: rgba(74,222,128,0.05); color: #4ade80; }
.lb-empty { text-align: center; padding: 18px 0; color: #6e7681; font-size: 0.85rem; }
.gold  { font-weight: 700; color: #fbbf24; }
.muted { color: #6e7681; font-size: 0.75rem; }

/* ══ Game ══ */
.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.top-bar { padding: 52px 20px 0; display: flex; flex-direction: column; gap: 6px; }
.progress-row { display: flex; justify-content: space-between; font-size: 0.88rem; }
.round-lbl  { color: #6e7681; }
.score-live { color: #4ade80; font-weight: 700; }
.timer-row  { display: flex; align-items: center; gap: 8px; }
.timer-track {
  flex: 1; height: 8px;
  background: rgba(255,255,255,0.07); border-radius: 4px; overflow: hidden;
}
.timer-fill { height: 100%; border-radius: 4px; transition: background 0.3s; }
.timer-fill.urgent { animation: blink 0.25s ease infinite alternate; }
@keyframes blink { to { opacity: 0.3; } }
.timer-num { font-size: 0.82rem; color: #8b949e; width: 22px; text-align: right; }

/* AOC display */
.aoc-display {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 16px 24px; gap: 10px; min-height: 0;
}
.aoc-label {
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.15em;
  padding: 3px 12px; border-radius: 20px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  color: #6e7681; text-transform: uppercase;
}
.aoc-name {
  font-size: clamp(1.6rem, 5vw, 3rem);
  font-weight: 800; text-align: center;
  color: #f0f6fc; line-height: 1.15;
}
.aoc-region {
  font-size: 0.82rem; color: #8b949e;
  background: rgba(255,255,255,0.04); padding: 3px 12px; border-radius: 8px;
}
.aoc-combos { display: flex; gap: 6px; }
.aoc-combo-pill {
  font-size: 0.7rem; padding: 2px 10px; border-radius: 10px;
  background: rgba(239,68,68,0.1); color: #f87171; border: 1px solid rgba(239,68,68,0.2);
}
.aoc-combo-pill.white-pill {
  background: rgba(248,250,252,0.08); color: #f0f6fc; border-color: rgba(255,255,255,0.2);
}
.aoc-combo-pill.both-pill {
  background: rgba(147,51,234,0.1); color: #c084fc; border-color: rgba(147,51,234,0.25);
}

/* Three big buttons */
.color-btns {
  display: flex; gap: 12px; padding: 12px 20px 28px; flex-shrink: 0;
}
.color-btn {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  gap: 6px; padding: 18px 10px; border-radius: 18px;
  border: 2px solid transparent;
  font-weight: 700; cursor: pointer; transition: all 0.15s;
  position: relative;
}
.color-btn:disabled { cursor: default; }

.red-btn {
  background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.3);
  color: #fca5a5;
}
.red-btn:hover:not(:disabled) {
  background: rgba(239,68,68,0.22); border-color: #ef4444;
  transform: translateY(-3px); box-shadow: 0 8px 24px rgba(239,68,68,0.25);
}

.white-btn {
  background: rgba(248,250,252,0.06); border-color: rgba(255,255,255,0.2);
  color: #f0f6fc;
}
.white-btn:hover:not(:disabled) {
  background: rgba(248,250,252,0.14); border-color: rgba(255,255,255,0.5);
  transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,255,255,0.12);
}

.both-btn {
  background: rgba(147,51,234,0.1); border-color: rgba(147,51,234,0.3);
  color: #c084fc;
}
.both-btn:hover:not(:disabled) {
  background: rgba(147,51,234,0.22); border-color: #9333ea;
  transform: translateY(-3px); box-shadow: 0 8px 24px rgba(147,51,234,0.25);
}

.color-btn.correct { opacity: 1; transform: scale(1.04); }
.red-btn.correct   { background: rgba(34,197,94,0.15); border-color: #22c55e; color: #22c55e; box-shadow: 0 0 20px rgba(34,197,94,0.3); }
.white-btn.correct { background: rgba(34,197,94,0.15); border-color: #22c55e; color: #22c55e; box-shadow: 0 0 20px rgba(34,197,94,0.3); }
.both-btn.correct  { background: rgba(34,197,94,0.15); border-color: #22c55e; color: #22c55e; box-shadow: 0 0 20px rgba(34,197,94,0.3); }
.color-btn.wrong   { background: rgba(239,68,68,0.15); border-color: #ef4444; color: #ef4444; }
.color-btn.dimmed  { opacity: 0.3; }

.cb-icon  { font-size: 1.8rem; line-height: 1; }
.cb-label { font-size: 0.88rem; font-weight: 700; }
.cb-key   {
  font-size: 0.68rem; color: rgba(255,255,255,0.35);
  background: rgba(255,255,255,0.06);
  padding: 1px 7px; border-radius: 5px; font-family: monospace;
}

/* ══ Feedback overlay ══ */
.feedback-overlay {
  position: absolute; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(6px);
}
.feedback-overlay.correct { background: rgba(34,197,94,0.12); }
.feedback-overlay.wrong   { background: rgba(239,68,68,0.12); }
.feedback-inner {
  background: rgba(13,17,23,0.93);
  border-radius: 22px; padding: 26px 36px;
  text-align: center; min-width: 260px; max-width: 340px;
  border: 1px solid rgba(255,255,255,0.1);
}
.fb-icon { font-size: 2.8rem; line-height: 1; margin-bottom: 6px; }
.feedback-overlay.correct .fb-icon { color: #22c55e; }
.feedback-overlay.wrong   .fb-icon { color: #ef4444; }
.fb-aoc { font-size: 1.15rem; font-weight: 800; margin-bottom: 10px; }
.fb-answer { margin-bottom: 8px; }
.fb-color-pill {
  display: inline-block; padding: 4px 16px; border-radius: 12px;
  font-size: 0.9rem; font-weight: 700;
}
.fb-color-pill.red   { background: rgba(239,68,68,0.15);  color: #fca5a5; border: 1px solid rgba(239,68,68,0.3); }
.fb-color-pill.white { background: rgba(255,255,255,0.09); color: #f0f6fc; border: 1px solid rgba(255,255,255,0.2); }
.fb-color-pill.both  { background: rgba(147,51,234,0.12); color: #c084fc; border: 1px solid rgba(147,51,234,0.3); }
.fb-hint { font-size: 0.8rem; color: #8b949e; margin-bottom: 8px; line-height: 1.4; max-width: 280px; }
.fb-pts  { font-size: 1.2rem; font-weight: 700; color: #4ade80; }

.fb-fade-enter-active { transition: all 0.15s ease; }
.fb-fade-leave-active { transition: all 0.25s ease; }
.fb-fade-enter-from, .fb-fade-leave-to { opacity: 0; transform: scale(0.97); }

/* ══ Final ══ */
.final {
  flex: 1; display: flex; align-items: flex-start; justify-content: center;
  padding: 56px 20px 20px; overflow-y: auto;
}
.final-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 22px; padding: 36px;
  text-align: center; max-width: 500px; width: 100%;
}
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 18px; font-size: 1.4rem; color: #c9d1d9; }
.final-score { font-size: 4rem; font-weight: 800; color: #4ade80; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.88rem; margin: 6px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px; }
.chip {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);
  padding: 5px 14px; border-radius: 18px; font-size: 0.8rem; color: #8b949e;
}

/* 錯題回顧 */
.wrong-review {
  text-align: left; margin-bottom: 20px;
  background: rgba(239,68,68,0.04);
  border: 1px solid rgba(239,68,68,0.15); border-radius: 14px; padding: 14px 16px;
}
.wr-title { font-size: 0.88rem; font-weight: 700; color: #ef4444; margin-bottom: 10px; }
.wr-list  { display: flex; flex-direction: column; gap: 12px; max-height: 280px; overflow-y: auto; }
.wr-row   { display: flex; align-items: flex-start; gap: 12px; }
.wr-color-pill {
  flex-shrink: 0; padding: 4px 10px; border-radius: 8px;
  font-size: 0.76rem; font-weight: 700; white-space: nowrap; margin-top: 1px;
}
.wr-color-pill.red   { background: rgba(239,68,68,0.12);  color: #fca5a5; }
.wr-color-pill.white { background: rgba(255,255,255,0.07); color: #f0f6fc; }
.wr-color-pill.both  { background: rgba(147,51,234,0.12); color: #c084fc; }
.wr-info   { flex: 1; }
.wr-name   { font-size: 0.9rem; color: #f0f6fc; font-weight: 700; }
.wr-region { font-size: 0.75rem; color: #6e7681; margin: 2px 0; }
.wr-hint   { font-size: 0.75rem; color: #8b949e; line-height: 1.4; }

.btn-upload {
  width: 100%; padding: 13px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff; border: none; border-radius: 12px;
  font-size: 0.96rem; font-weight: 700; cursor: pointer;
  transition: opacity 0.2s, transform 0.15s; margin-bottom: 8px;
}
.btn-upload:not(:disabled):hover { transform: translateY(-1px); opacity: 0.9; }
.btn-upload:disabled { opacity: 0.4; cursor: default; }
.err-msg { font-size: 0.8rem; color: #ef4444; margin-bottom: 8px; }
.final-actions { margin-top: 6px; }
.btn-retry {
  width: 100%; padding: 11px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: #c9d1d9; border-radius: 12px; cursor: pointer; font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.12); }

@media (max-width: 480px) {
  .color-btns { gap: 8px; padding: 10px 14px 24px; }
  .cb-label { font-size: 0.78rem; }
  .cb-icon  { font-size: 1.5rem; }
  .aoc-name { font-size: 1.5rem; }
}
</style>
