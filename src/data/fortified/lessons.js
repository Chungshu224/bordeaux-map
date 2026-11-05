// 全球強化酒專論：3 階段 21 課（階段 A 空殼）
// 課名、順序與考點以 FORTIFIED_COURSE_FRAMEWORK.md 第 2、3 節為準；內容待階段 B–D 填入。
// ⚠ ＝帶數字或來源矛盾，須先對官方文件確認（見 FORTIFIED_FACT_CHECK.md）。
// 本課程不販售、僅供管理員使用。

export const FORTIFIED_LEVEL_META = {
  1: { title: 'Level 1 - 強化酒原理與釀法', color: '#8B4513', description: '為何強化、何時加烈、生物陳年與氧化陳年、solera 與關鍵選擇' },
  2: { title: 'Level 2 - 全球強化酒產區', color: '#A0522D', description: 'Sherry、Port、Madeira、天然甜酒、Rutherglen 與其他產區，每區用同一組問題比較' },
  3: { title: 'Level 3 - D5 精修與應考', color: '#5C2E12', description: '風格辨識、SAT 品飲、產區比較、法規標示、商業價格與模擬考' }
}

export const fortifiedLevels = {
  level1: {
    ...FORTIFIED_LEVEL_META[1],
    modules: [
      { id: 'FO1M1', title: '強化酒是什麼', lessonIds: ['fo-l1-1', 'fo-l1-2', 'fo-l1-3'] },
      { id: 'FO1M2', title: '陳年與混調', lessonIds: ['fo-l1-4', 'fo-l1-5'] },
      { id: 'FO1M3', title: '關鍵選擇與評量', lessonIds: ['fo-l1-6'] }
    ],
    lessons: [
      { id: 'fo-l1-1', title: '什麼是強化酒：定義、歷史與全球版圖', description: '加入烈酒的葡萄酒、為何要強化、主要類型與產區地圖', duration: 15,
        keyPoints: ['用一句話區分強化酒與一般酒', '歷史成因（保存、運輸）與事實分開'] },
      { id: 'fo-l1-2', title: '加烈時機：發酵前、中、後與甜度', description: 'mutage、Port、Sherry 的加烈時間點如何決定甜度與風格', duration: 18,
        keyPoints: ['加烈時機 → 殘糖 → 風格', '干型（發酵後）與甜型（發酵中）對照'] },
      { id: 'fo-l1-3', title: '加烈用酒精與酒精度', description: '葡萄烈酒的純度、加烈比例與成品酒精度', duration: 15,
        keyPoints: ['酒精度對風格與穩定性的影響', '各類型酒精度數字（⚠ 待查證）'] },
      { id: 'fo-l1-4', title: '陳年方式：生物陳年、氧化陳年與瓶陳', description: 'flor、氧化、木桶與瓶內陳年的風味差異', duration: 20,
        keyPoints: ['flor 如何保護酒不被氧化', '氧化與生物陳年的風味線索'] },
      { id: 'fo-l1-5', title: 'Solera 與年份混調', description: 'solera／criaderas、均質化、年齡聲明的意義', duration: 18,
        keyPoints: ['solera 與單一年份的差異', '平均年齡如何標示'] },
      { id: 'fo-l1-6', title: '關鍵選擇與 Level 1 綜合評量', description: 'D5 第 1 章：影響風格、品質與價格的關鍵選擇，並通過 Level 1 測驗', duration: 25,
        keyPoints: ['風格、品質、價格的決定因素', '8 題綜合評量（及格 60）'] }
    ]
  },
  level2: {
    ...FORTIFIED_LEVEL_META[2],
    modules: [
      { id: 'FO2M1', title: 'Sherry', lessonIds: ['fo-l2-1', 'fo-l2-2'] },
      { id: 'FO2M2', title: 'Port 與 Madeira', lessonIds: ['fo-l2-3', 'fo-l2-4', 'fo-l2-5'] },
      { id: 'FO2M3', title: '其他產區與評量', lessonIds: ['fo-l2-6', 'fo-l2-7', 'fo-l2-8'] }
    ],
    lessons: [
      { id: 'fo-l2-1', title: 'Sherry I：產區、土壤與品種', description: 'Jerez 三城、albariza、Palomino／PX／Moscatel、葡萄園與壓榨', duration: 22,
        keyPoints: ['產區範圍與新規則（陳年三角取消）', '品種與土壤對應風格'] },
      { id: 'fo-l2-2', title: 'Sherry II：風格類型', description: 'Fino／Manzanilla／Amontillado／Palo Cortado／Oloroso／甜型與新類別', duration: 24,
        keyPoints: ['Fino Viejo 與 Manzanilla Pasada', '各類型最低陳年與酒精度（⚠ 待查證）'] },
      { id: 'fo-l2-3', title: 'Port I：杜羅河谷、品種與釀造', description: '產區、品種、浸皮與加烈、陳年容器', duration: 22,
        keyPoints: ['加烈時機與浸皮時間對風格的影響'] },
      { id: 'fo-l2-4', title: 'Port II：Ruby 系與 Tawny 系', description: 'IVDP 標準類別與特殊類別、LBV、Colheita、年齡聲明', duration: 24,
        keyPoints: ['類別階層與標示', 'Reserve Tawny／Vintage 桶陳年限（⚠ 兩種說法並存）'] },
      { id: 'fo-l2-5', title: 'Madeira', description: '品種、estufagem 與 canteiro、年齡等級', duration: 22,
        keyPoints: ['品種與甜度排序', '年齡等級界線（⚠ 待查證）'] },
      { id: 'fo-l2-6', title: '天然甜酒（VDN）：Roussillon 與 Rhône', description: 'Banyuls、Maury、Rivesaltes、Muscat de Rivesaltes、Beaumes-de-Venise、Rasteau', duration: 22,
        keyPoints: ['mutage 時點與殘糖（⚠ 數字待查證）', 'Muscat 與 Grenache 兩條線'] },
      { id: 'fo-l2-7', title: 'Rutherglen Muscat／Topaque 與其他產區', description: '四級制、Marsala、Málaga、Montilla-Moriles、Setúbal、Commandaria、南非', duration: 26,
        keyPoints: ['Rutherglen 四級排序', 'Marsala 級別（延伸範圍，是否在 D5 官方範圍待確認）'] },
      { id: 'fo-l2-8', title: 'Level 2 綜合評量', description: '整合各產區風格、品種與法規，通過 Level 2 測驗', duration: 30,
        keyPoints: ['10 題綜合評量（及格 60）'] }
    ]
  },
  level3: {
    ...FORTIFIED_LEVEL_META[3],
    modules: [
      { id: 'FO3M1', title: '辨識與比較', lessonIds: ['fo-l3-1', 'fo-l3-2', 'fo-l3-3'] },
      { id: 'FO3M2', title: '法規與商業', lessonIds: ['fo-l3-4', 'fo-l3-5'] },
      { id: 'FO3M3', title: '應考與評量', lessonIds: ['fo-l3-6', 'fo-l3-7'] }
    ],
    lessons: [
      { id: 'fo-l3-1', title: '風格辨識：盲品線索', description: '顏色、酒精感、flor 與氧化特徵、甜度判斷', duration: 24,
        keyPoints: ['由線索推論類型與產區'] },
      { id: 'fo-l3-2', title: 'SAT 強化酒版', description: '甜度、酒精、結論用語與品質判斷', duration: 24,
        keyPoints: ['強化酒 SAT 結論句型'] },
      { id: 'fo-l3-3', title: '產區比較：同風格、不同產區', description: 'Tawny Port vs Madeira vs Rutherglen、Fino vs Manzanilla 等', duration: 22,
        keyPoints: ['用因素解釋差異而非背數字'] },
      { id: 'fo-l3-4', title: '法規與標示判讀', description: '年齡聲明、類別術語與跨產區比較', duration: 22,
        keyPoints: ['看標籤判斷風格與陳年（⚠ 待查證）'] },
      { id: 'fo-l3-5', title: '商業與價格', description: '為什麼貴、為什麼便宜：陳年成本、市場與產業結構', duration: 20,
        keyPoints: ['價格與陳年成本論述'] },
      { id: 'fo-l3-6', title: '模擬考：短答與比較論述', description: '論述範例與答題框架：定義→因素→比較→結論', duration: 30,
        keyPoints: ['短答與論述（考試形式以 WSET 最新規格為準）'] },
      { id: 'fo-l3-7', title: 'Level 3 綜合評量', description: '整合 Level 1–3，通過 Level 3 測驗', duration: 35,
        keyPoints: ['12 題綜合評量（及格 60）'] }
    ]
  }
}

export const FORTIFIED_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const FORTIFIED_TOTAL_LESSONS = FORTIFIED_LEVEL_KEYS.reduce((s, k) => s + fortifiedLevels[k].lessons.length, 0)
