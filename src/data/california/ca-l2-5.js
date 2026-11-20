/**
 * CA-L2-5 內陸谷地與南加州補充：Lodi 子 AVA、Sacramento Valley、San Joaquin Valley、Southern California
 * 補充重點：原課程對上述內陸／南部產區著墨較少，本課依 Capstone California 產區學習指南補強。
 * 資料來源與查證原則：
 *  - Capstone California（California Wine Institute）Study Guides → Regions：Lodi／Sacramento Valley／San Joaquin Valley／Temecula Valley／San Diego County
 *  - TTB「Established AVAs」清單（27 CFR Part 9 條文所屬郡與 AVA 名稱；加州共 154 個 AVA）
 *  - Capstone 頁面內有數字單位互相矛盾之處（例如公頃與英畝換算、Borden Ranch 面積），本課一律不引用這些面積／產量數字，
 *    僅採用 AVA 名稱、所屬郡（以 TTB 為準）、設立年份、土壤系列、氣候與品種等定性資訊；來自 Capstone 的資訊皆標示出處。
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          提到加州，多數人先想到 Napa 與 Sonoma；但加州共有 154 個 AVA（TTB 清單、Capstone 皆為此數，且數字仍在增加），其中許多位於內陸谷地與南部。本課補強 Level 1 較少著墨的區域：Lodi 與它的 7 個子 AVA、Sacramento Valley、San Joaquin Valley，以及 Southern California。
        </p>
        <h3 class="section-title">本課學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌾 讀懂 Lodi 的子 AVA 分區</h4>
            <p>能說出 Lodi 的 7 個子 AVA，並理解 Tokay、San Joaquin、Redding 三種土壤系列與涼熱分佈</p>
          </div>
          <div class="point-item">
            <h4>🌊 認識 Sacramento Valley 的 AVA</h4>
            <p>Clarksburg、Suisun Valley、Solano County Green Valley、Capay Valley、Dunnigan Hills 的位置與特色</p>
          </div>
          <div class="point-item">
            <h4>⛰️ 看懂 San Joaquin Valley 的邊緣 AVA</h4>
            <p>Madera、Tracy Hills、Diablo Grande、Salado Creek、Squaw Valley–Miramonte、Tehachapi Mountains</p>
          </div>
          <div class="point-item">
            <h4>🌴 掌握 Southern California 的海風邏輯</h4>
            <p>South Coast AVA 與其內的 Temecula、Ramona、San Pasqual，以及 Malibu Coast、Cucamonga Valley</p>
          </div>
        </div>
        <p class="source-note">📌 資料說明：AVA 名稱與所屬郡依 TTB；面積與產量數字因來源頁面有互相矛盾之處，本課不引用。</p>
      </div>
    `
  },

  {
    title: 'Lodi 與 Delta：7 個子 AVA',
    content: `<div class="lodi-subavas">
      <h3>🌾 Lodi AVA（1986 年設立）與 7 個子 AVA</h3>
      <p>Lodi AVA 設立於 1986 年，位於 Sacramento 與 San Joaquin 兩郡。Capstone 指出 Lodi 約有 10 萬英畝葡萄園；氣候為地中海型；位於 Delta 一帶的低地子產區（如 Cosumnes River）受霧氣影響較涼。2006 年起（Capstone 記載）Lodi 內另劃出 7 個子 AVA（TTB 條文：27 CFR 9.195–9.201）：</p>
      <div class="subava-grid">
        <div class="subava-card"><h4>Alta Mesa</h4><p>Sacramento 郡（TTB）。Capstone 描述其為「high table」之意的高地台地，土壤為淺層 San Joaquin 系列砂質黏壤土，下有黏土與砂岩硬盤；海拔較低（約 10–41 公尺）。</p></div>
        <div class="subava-card"><h4>Borden Ranch</h4><p>Sacramento 與 San Joaquin 郡（TTB）。以 Borden Ranch 命名，Redding 系列多石黏壤土；海拔約 22–158 公尺（Capstone）。</p></div>
        <div class="subava-card"><h4>Clements Hills</h4><p>San Joaquin 郡（TTB）。Redding 系列多石黏壤土；Capstone 稱其為 Lodi 日夜溫差最大的子產區。</p></div>
        <div class="subava-card"><h4>Cosumnes River</h4><p>Sacramento 郡（TTB）。近海平面、受 Delta 霧氣影響，是較涼爽的子產區；San Joaquin 系列土壤。</p></div>
        <div class="subava-card"><h4>Jahant</h4><p>Sacramento 與 San Joaquin 郡（TTB）。以 Jahant 家族命名，Capstone 稱其為 Lodi 中較涼爽的子產區之一。</p></div>
        <div class="subava-card"><h4>Mokelumne River</h4><p>San Joaquin 郡（TTB）。Tokay 系列細砂壤土為主，土層深厚；Capstone 稱其為 Lodi 中栽種面積最大的子 AVA，且屬較涼爽者。</p></div>
        <div class="subava-card"><h4>Sloughhouse</h4><p>Sacramento 郡（TTB）。以 Slough House 命名，Redding 系列土壤；Capstone 稱其為 Lodi 中最溫暖者。</p></div>
      </div>
      <h4>品種輪廓（Capstone，2019 栽種資料）</h4>
      <p>紅葡萄約 71%、白葡萄約 29%；前幾名為 Cabernet Sauvignon、Zinfandel、Chardonnay、Merlot、Pinot Gris、Petite Sirah。Lodi 同時以老藤 Zinfandel 與近年種植的葡萄牙、義大利品種聞名。</p>
      <p class="source-note">⚠️ 學習提醒：Capstone 對「最大／最小」的描述在頁面內並不一致，考試以「7 個子 AVA 名稱」與「Tokay／San Joaquin／Redding 三種土壤」為重點即可。</p>
    </div>`
  },

  {
    title: 'Sacramento Valley：Delta 涼風與 Solano、Yolo 的 AVA',
    content: `<div class="sac-valley">
      <h3>🌊 Sacramento Valley 的 AVA 一覽</h3>
      <p>Sacramento Valley 的土壤多為沖積土覆在沉積岩下層；大部分地區屬 Winkler-Amerine Region IV–V，靠近海灣處為 Region III（Capstone）。重點在於 Delta 與海灣的涼風是否進得來。</p>
      <div class="subava-grid">
        <div class="subava-card"><h4>Clarksburg</h4><p>跨 Sacramento、Solano、Yolo 三郡（TTB）。近海平面的 Delta 平原，排水不佳的黏土與黏壤土、地下水位高；Capstone 列出 Chenin Blanc、Chardonnay、Petite Sirah，屬 Region III。內含的 Merritt Island 為其巢狀小產區。</p></div>
        <div class="subava-card"><h4>Suisun Valley</h4><p>Solano 郡（TTB）。暖夏地中海型氣候，Capstone 指出品種至少 24 種，並強調 Petite Sirah。</p></div>
        <div class="subava-card"><h4>Solano County Green Valley</h4><p>Solano 郡（TTB）。位於 Napa 以東、常有霧氣、較涼；Capstone 列出 Petite Sirah、Cabernet Sauvignon、Cabernet Franc、Merlot、Syrah。注意不要與 Carneros 附近、Sonoma 的 Russian River 內「Green Valley of Russian River Valley」混淆。</p></div>
        <div class="subava-card"><h4>Capay Valley</h4><p>Yolo 郡（TTB）。位於 Berryessa 湖東北、Vaca 山脈以東，夏季炎熱；Capstone 列出 Tempranillo、Cabernet Sauvignon、Syrah、Grenache、Viognier 等。</p></div>
        <div class="subava-card"><h4>Dunnigan Hills</h4><p>Yolo 郡（TTB）。距 Sacramento 西北約 30 英里的緩丘（Capstone），土壤為排水良好的礫質壤土，需灌溉，較谷底涼；Cabernet Sauvignon、Merlot、Tempranillo、Syrah、Chardonnay。</p></div>
        <div class="subava-card"><h4>North Yuba</h4><p>Yuba 郡（TTB），位於 Sierra Foothills AVA 之內。Capstone 以「Yuba」稱呼，描述為花崗岩分解土、石英與火山岩，品種含 Cabernet Sauvignon、Pinot Noir。</p></div>
      </div>
      <p class="source-note">📌 比較：Solano County Green Valley 屬 Solano 郡；Sonoma 的 Green Valley 全名為 Green Valley of Russian River Valley，是不同的 AVA。</p>
    </div>`
  },

  {
    title: 'San Joaquin Valley：從谷底到山麓的邊緣 AVA',
    content: `<div class="sj-valley">
      <h3>⛰️ San Joaquin Valley 的 AVA（Capstone 補充）</h3>
      <p>San Joaquin Valley 是加州最大宗的葡萄產地之一，多數葡萄為大宗用途，但也存在不少小型 AVA。重點是它們多半位於谷地邊緣或山麓，用海拔、風向與土壤取得差異。</p>
      <div class="subava-grid">
        <div class="subava-card"><h4>Madera</h4><p>Fresno 與 Madera 郡（TTB）。Winkler-Amerine Region V、需灌溉；Capstone 列出 French Colombard、Chardonnay、Cabernet Sauvignon、Merlot、Zinfandel。</p></div>
        <div class="subava-card"><h4>Tracy Hills</h4><p>San Joaquin 與 Stanislaus 郡（TTB）。Diablo 山脈沖積土、部分多礫；Capstone 列出 Tempranillo、Sagrantino、Aglianico、Nero d'Avola、Touriga Nacional 等較少見品種。</p></div>
        <div class="subava-card"><h4>Diablo Grande</h4><p>Stanislaus 郡（TTB），1998 年設立（Capstone）。山丘地形，海拔 244–792 公尺，葡萄園位於 305–549 公尺。</p></div>
        <div class="subava-card"><h4>Salado Creek</h4><p>Stanislaus 郡（TTB），2004 年核准（Capstone）。Ensalado 系列土壤；Capstone 指出當時尚無以該 AVA 標示的酒款。</p></div>
        <div class="subava-card"><h4>River Junction</h4><p>San Joaquin 郡（TTB），位於 Delta 一帶；Capstone 頁面未標示 AVA 名稱，本課僅依 TTB 列出名稱與所屬郡。</p></div>
        <div class="subava-card"><h4>Squaw Valley–Miramonte</h4><p>Fresno 郡（TTB），2015 年設立（Capstone）。山麓花崗岩分解土，海拔 488–1,067 公尺，屬較高海拔、較涼的山地環境。</p></div>
        <div class="subava-card"><h4>Tehachapi Mountains</h4><p>Kern 郡（TTB）。海拔 1,097–1,646 公尺，雨量少、多在冬季（Capstone）；Winkler-Amerine Region II，近 Region III。</p></div>
      </div>
      <p class="source-note">⚠️ 學習提醒：Capstone 在 Diablo Grande 面積與 River Junction 標題等處有明顯打字錯誤，本課不引用面積與產量數字。</p>
    </div>`
  },

  {
    title: 'Southern California：海風、花崗岩與 South Coast AVA',
    content: `<div class="socal">
      <h3>🌴 Southern California 的產區邏輯</h3>
      <p>南加州太陽強、降雨少，冷卻靠兩個來源：海風經山脈缺口灌入，以及夜間冷空氣從高處下沉。South Coast AVA（TTB：Orange、Riverside、San Bernardino、San Diego 郡）是涵蓋範圍最大的傘狀 AVA；Capstone 指出它完整包含 Ramona Valley、San Pasqual Valley 與 Temecula Valley。</p>
      <div class="subava-grid">
        <div class="subava-card"><h4>Temecula Valley</h4><p>Riverside 郡（TTB）。距海岸約 22 英里；海風主要經 Santa Margarita Gap 進入，Rainbow Gap 為次要通道；葡萄園多在 1,200–1,600 英尺的緩坡台地，土壤為排水良好的花崗岩分解砂質壤土（Capstone）。品種含 Cabernet Sauvignon、Syrah、Petite Sirah、Viognier、Vermentino。</p></div>
        <div class="subava-card"><h4>Ramona Valley</h4><p>San Diego 郡（TTB）。距太平洋約 25 英里；Capstone 列為 Winkler Region III，土壤為排水良好的砂壤土；最適合種植的高度可達約 2,640 英尺。</p></div>
        <div class="subava-card"><h4>San Pasqual Valley</h4><p>San Diego 郡（TTB）。位於 Escondido 與 Ramona 之間，海拔約 300–500 英尺，沖積土；生長季高溫很少超過 95°F（Capstone）。</p></div>
        <div class="subava-card"><h4>Malibu Coast</h4><p>Los Angeles 與 Ventura 郡（TTB）。屬沿海山麓產區，與 South Coast AVA 為不同的 AVA（Level 1 已介紹）。</p></div>
        <div class="subava-card"><h4>Cucamonga Valley</h4><p>Riverside 與 San Bernardino 郡（TTB）。本課僅依 TTB 確認名稱與所屬郡；Capstone 該頁未能取得，不引用其他細節。</p></div>
      </div>
      <p class="source-note">⚠️ 學習提醒：San Diego County 頁面對日夜溫差的華氏與攝氏換算不一致，本課不引用溫差數字。</p>
    </div>`
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: 'Lodi AVA 內共有多少個子 AVA？',
            options: ['A. 5 個', 'B. 7 個', 'C. 9 個', 'D. 11 個'],
            correct: 1,
            explanation: 'Lodi 內有 7 個子 AVA：Alta Mesa、Borden Ranch、Clements Hills、Cosumnes River、Jahant、Mokelumne River、Sloughhouse（27 CFR 9.195–9.201）。'
          },
          {
            type: 'single',
            question: '下列哪一個 AVA 不是 Lodi 的子 AVA？',
            options: ['A. Cosumnes River', 'B. Sloughhouse', 'C. Clarksburg', 'D. Jahant'],
            correct: 2,
            explanation: 'Clarksburg 是獨立 AVA，跨 Sacramento、Solano、Yolo 三郡；其餘三者皆為 Lodi 的子 AVA。'
          },
          {
            type: 'single',
            question: 'Mokelumne River 子 AVA 的主要土壤系列為何？',
            options: ['A. Redding 系列多石黏壤土', 'B. Ensalado 系列', 'C. Tokay 系列細砂壤土', 'D. 石灰岩'],
            correct: 2,
            explanation: 'Capstone 指出 Mokelumne River 以深厚的 Tokay 系列細砂壤土為主；Redding 系列則見於 Borden Ranch、Clements Hills 等。'
          },
          {
            type: 'single',
            question: 'Clarksburg AVA 的地形與氣候特徵是？',
            options: ['A. 高海拔山脊、寒冷', 'B. 近海平面的 Delta 平原、黏土質、地下水位高', 'C. 火山岩山坡、乾旱', 'D. 沙漠高原'],
            correct: 1,
            explanation: 'Clarksburg 位於近海平面的 Delta 平原，土壤為排水不佳的黏土與黏壤土，需靠排水渠；Chenin Blanc 是代表品種之一。'
          },
          {
            type: 'single',
            question: 'Solano County Green Valley 與 Sonoma 的 Green Valley of Russian River Valley 的關係是？',
            options: ['A. 同一個 AVA', 'B. 前者是後者的子 AVA', 'C. 是不同郡的兩個不同 AVA', 'D. 前者已被取消'],
            correct: 2,
            explanation: '兩者名稱相近但屬不同郡、不同 AVA：Solano County Green Valley 位於 Solano 郡，另一個位於 Sonoma 郡的 Russian River Valley 內。'
          },
          {
            type: 'single',
            question: '下列哪個 AVA 位於 Fresno 郡山麓、2015 年設立、海拔較高且偏涼？',
            options: ['A. Tracy Hills', 'B. Salado Creek', 'C. Squaw Valley–Miramonte', 'D. Madera'],
            correct: 2,
            explanation: 'Squaw Valley–Miramonte 位於 Fresno 郡山麓，海拔約 488–1,067 公尺，土壤為花崗岩分解土（Capstone）。'
          },
          {
            type: 'single',
            question: 'Temecula Valley 主要的海風通道是？',
            options: ['A. Golden Gate', 'B. Santa Margarita Gap', 'C. Petaluma Gap', 'D. Carquinez Strait'],
            correct: 1,
            explanation: 'Temecula 的海風主要經 Santa Margarita Gap 灌入，Rainbow Gap 為次要通道。Petaluma Gap 在 Sonoma，Carquinez Strait 與 Golden Gate 屬北加州。'
          },
          {
            type: 'single',
            question: 'South Coast AVA 與 Temecula Valley、Ramona Valley、San Pasqual Valley 的關係是？',
            options: ['A. South Coast 是涵蓋它們的大型 AVA', 'B. South Coast 是 Temecula 的子 AVA', 'C. 三者互不重疊', 'D. 它們都屬 Central Coast'],
            correct: 0,
            explanation: 'South Coast AVA 範圍涵蓋 Orange 全郡及 Riverside、San Bernardino、San Diego 等郡部分地區，並包含這三個較小的 AVA。'
          }
        ]
      }
    }
  }
]
