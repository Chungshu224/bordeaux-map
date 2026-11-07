// 葡萄酒商業（D2）專論：3 階段 18 課
// 課名、順序與考點以 D2_COURSE_FRAMEWORK.md 第 2、3 節為準；事實以 D2_FACT_CHECK.md 為準。
// ⚠ ＝數字或來源矛盾，須先對官方文件確認。本課程不販售、僅供管理員使用。

export const D2_LEVEL_META = {
  1: { title: 'Level 1 - 價格如何形成', color: '#2F5D8A', description: '供給、需求、成本鏈、稅與關稅、匯率風險' },
  2: { title: 'Level 2 - 誰做酒、怎麼送到銷售點', color: '#244B70', description: '八類生產企業，與進口、經銷、零售、餐飲、直銷等通路' },
  3: { title: 'Level 3 - 行銷與應考', color: '#1B3A57', description: '行銷流程、區隔、行銷組合，以及 explain／evaluate 的作答訓練' }
}

export const d2Levels = {
  level1: {
    ...D2_LEVEL_META[1],
    modules: [
      { id: 'D2M1', title: '供給、需求與成本', lessonIds: ['d2-l1-1', 'd2-l1-2', 'd2-l1-3', 'd2-l1-4', 'd2-l1-5'] },
      { id: 'D2M2', title: 'Level 1 評量', lessonIds: ['d2-l1-6'] }
    ],
    lessons: [
      { id: 'd2-l1-1', title: '價格的拆解：供給、需求與成本鏈', description: '從貨架價往回拆：成本、利潤、供需與感知價值', duration: 18,
        keyPoints: ['價格＝成本＋利潤，並受供需調節', '先找出題目問的是供給、需求還是成本'] },
      { id: 'd2-l1-2', title: '供給面：生產與法規因素', description: '產量、年份、種植面積與產區規定如何改變供給', duration: 20,
        keyPoints: ['生產因素與法規因素的差別', '過剩與短缺各自的後果'] },
      { id: 'd2-l1-3', title: '需求面：社會、經濟與政治因素', description: '消費習慣、所得、貿易政策與聲譽如何改變需求', duration: 20,
        keyPoints: ['三類需求因素各舉得出例子', '用因果句連到價格方向'] },
      { id: 'd2-l1-4', title: '成本鏈 I：葡萄園、釀造與包裝', description: '從葡萄到瓶中酒的成本類別', duration: 20,
        keyPoints: ['成本類別與風格定位的連結', '不背數字，講結構'] },
      { id: 'd2-l1-5', title: '成本鏈 II：運輸、進口、稅與匯率', description: '運輸、關稅、補貼、標示法規與匯率風險的管理', duration: 24,
        keyPoints: ['稅、關稅、補貼的差別', '匯率風險的管理概念'] },
      { id: 'd2-l1-6', title: 'Level 1 評量', description: '整合 Level 1，通過測驗', duration: 25,
        keyPoints: ['8 題評量（及格 60）'] }
    ]
  },
  level2: {
    ...D2_LEVEL_META[2],
    modules: [
      { id: 'D2M3', title: '生產企業類型', lessonIds: ['d2-l2-1', 'd2-l2-2', 'd2-l2-3'] },
      { id: 'D2M4', title: '送達銷售點', lessonIds: ['d2-l2-4', 'd2-l2-5', 'd2-l2-6'] },
      { id: 'D2M5', title: 'Level 2 評量', lessonIds: ['d2-l2-7'] }
    ],
    lessons: [
      { id: 'd2-l2-1', title: '生產企業 I：酒莊、種植者與種植兼釀酒者', description: '掌控度、風險與規模的取捨', duration: 22,
        keyPoints: ['各類型的優點、缺點與風險', '用「掌控度 vs 風險」作答'] },
      { id: 'd2-l2-2', title: '生產企業 II：酒商與合作社', description: '買進葡萄或酒的模式，與集體運作的模式', duration: 22,
        keyPoints: ['酒商與合作社的運作邏輯', '合作社的集資與決策取捨'] },
      { id: 'd2-l2-3', title: '生產企業 III：代工設施、虛擬釀酒者與集團', description: '輕資產模式與大規模整合', duration: 22,
        keyPoints: ['輕資產與重資產的差別', '集團的規模效益與風險'] },
      { id: 'd2-l2-4', title: '送達銷售點 I：進口商、經銷商與管制市場', description: '進口、批發、國營專賣與三級制度的結構', duration: 24,
        keyPoints: ['每一層的加成與功能', '管制市場如何改變路徑'] },
      { id: 'd2-l2-5', title: '送達銷售點 II：零售與餐飲', description: 'off-trade 與 on-trade 的特性與加成邏輯', duration: 22,
        keyPoints: ['零售與餐飲的差別', '各自對品牌與價格的影響'] },
      { id: 'd2-l2-6', title: '送達銷售點 III：直接面對消費者與其他通路', description: 'DTC、拍賣、期酒與合作銷售', duration: 22,
        keyPoints: ['DTC 的利與弊', '其他通路的適用條件'] },
      { id: 'd2-l2-7', title: 'Level 2 評量', description: '整合 Level 2，通過測驗', duration: 28,
        keyPoints: ['10 題評量（及格 60）'] }
    ]
  },
  level3: {
    ...D2_LEVEL_META[3],
    modules: [
      { id: 'D2M6', title: '行銷', lessonIds: ['d2-l3-1', 'd2-l3-2', 'd2-l3-3'] },
      { id: 'D2M7', title: '應考', lessonIds: ['d2-l3-4', 'd2-l3-5'] }
    ],
    lessons: [
      { id: 'd2-l3-1', title: '行銷流程：產品、市場與目標消費者', description: '辨識產品或品牌、分析現有市場、辨識目標消費者', duration: 22,
        keyPoints: ['行銷流程的先後次序', '區隔與目標市場'] },
      { id: 'd2-l3-2', title: '目標、策略與行銷組合', description: '設定目標、擬定策略、行銷組合（5Ps，具體五項 ❓ 待確認）', duration: 24,
        keyPoints: ['目標要能衡量', '價格、產品、通路、推廣如何互相牽動'] },
      { id: 'd2-l3-3', title: '實施、監控與行銷選項', description: '貿易組織、產區協會、品牌與評分如何參與行銷', duration: 22,
        keyPoints: ['實施後要監控與調整', '行銷選項的主辦者與適用情境'] },
      { id: 'd2-l3-4', title: '作答訓練：explain 與 evaluate', description: '事實 → 機制 → 判斷的骨架與時間分配', duration: 26,
        keyPoints: ['explain 要有因果', 'evaluate 要有結論'] },
      { id: 'd2-l3-5', title: '模擬考與 Level 3 評量', description: '短答與情境評估的綜合評量', duration: 35,
        keyPoints: ['12 題綜合評量（及格 60）'] }
    ]
  }
}

export const D2_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const D2_TOTAL_LESSONS = D2_LEVEL_KEYS.reduce((s, k) => s + d2Levels[k].lessons.length, 0)
