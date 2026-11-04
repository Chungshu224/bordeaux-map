// 全球氣泡酒專論：3 階段 21 課（階段 A 空殼）
// 課名、順序、分段與時長以 SPARKLING_COURSE_FRAMEWORK.md 第 2、3 節為準；keyPoints 為各課「考點」摘要，內容待階段 B–D 填入。
// 本課程不販售、僅供管理員使用。

export const SPARKLING_LEVEL_META = {
  1: { title: 'Level 1 - 氣泡酒原理與釀法', color: '#B8860B', description: '氣泡從哪裡來：二次發酵、基酒、傳統法、槽式法與其他釀法' },
  2: { title: 'Level 2 - 全球氣泡酒產區', color: '#A8501C', description: '香檳、Crémant、Cava、義大利、德奧英與新世界，每區用同一組問題比較' },
  3: { title: 'Level 3 - D4 精修與應考', color: '#6B3A1E', description: '風土比較、釀造深度、法規與標籤、產業，以及 D4 品飲與論述訓練' }
}

export const sparklingLevels = {
  level1: {
    ...SPARKLING_LEVEL_META[1],
    modules: [
      { id: 'SP1M1', title: '氣泡酒是什麼', lessonIds: ['sp-l1-1', 'sp-l1-2'] },
      { id: 'SP1M2', title: '基酒與釀法', lessonIds: ['sp-l1-3', 'sp-l1-4', 'sp-l1-5'] },
      { id: 'SP1M3', title: '評量', lessonIds: ['sp-l1-6'] }
    ],
    lessons: [
      { id: 'sp-l1-1', title: '氣泡酒概論與全球版圖', description: '定義、歷史、主要釀法與產區地圖、價格帶', duration: 15,
        keyPoints: ['用一句話區分釀法與價格帶', '歷史神話與事實分開（如 Dom Pérignon）'] },
      { id: 'sp-l1-2', title: '氣泡的科學：二次發酵、壓力與甜度', description: '酵母把糖轉為酒精與 CO₂、瓶內與槽內壓力、甜度分級', duration: 18,
        keyPoints: ['壓力、甜度級別與氣泡細緻度的成因'] },
      { id: 'sp-l1-3', title: '基酒：品種、成熟度、酸度與栽培', description: '為什麼起泡酒偏好冷涼氣候與高酸基酒', duration: 18,
        keyPoints: ['涼爽氣候與高酸基酒', '各產區基酒品種對應釀法'] },
      { id: 'sp-l1-4', title: '傳統法（瓶內二次發酵）', description: '從壓榨、調配、裝瓶、酒渣陳年到除渣與 dosage', duration: 20,
        keyPoints: ['步驟排序', '自溶風味與時間', '每步驟對風格的影響'] },
      { id: 'sp-l1-5', title: '槽式法、轉移法與其他釀法', description: 'Charmat／Martinotti、轉移法、祖傳法與 Pét-Nat、Asti 法、氣體注入', duration: 20,
        keyPoints: ['成本與風格如何決定價位', '各釀法的標籤用語'] },
      { id: 'sp-l1-6', title: 'Level 1 綜合評量', description: '整合原理與釀法，通過 Level 1 測驗', duration: 25,
        keyPoints: ['8 題綜合評量（及格 60）'] }
    ]
  },
  level2: {
    ...SPARKLING_LEVEL_META[2],
    modules: [
      { id: 'SP2M1', title: '法國', lessonIds: ['sp-l2-1', 'sp-l2-2', 'sp-l2-3'] },
      { id: 'SP2M2', title: '其他歐洲', lessonIds: ['sp-l2-4', 'sp-l2-5', 'sp-l2-6'] },
      { id: 'SP2M3', title: '新世界與評量', lessonIds: ['sp-l2-7', 'sp-l2-8'] }
    ],
    lessons: [
      { id: 'sp-l2-1', title: '香檳 I：產區、品種與法規', description: '北方邊緣氣候、白堊土壤、四大產區、品種與 AOC 法規', duration: 22,
        keyPoints: ['產區與品種對應', '法規數字（⚠ 待查證）'] },
      { id: 'sp-l2-2', title: '香檳 II：釀造、風格與生產者', description: '調配與儲備酒、氧化 vs 還原、風格類型與生產者結構', duration: 22,
        keyPoints: ['風格成因', 'NV 一致性的技術'] },
      { id: 'sp-l2-3', title: '法國其他：Crémant 與傳統氣泡產區', description: 'Crémant 各產區、Limoux、Clairette de Die、Saumur', duration: 22,
        keyPoints: ['Crémant 與香檳的規定差異（⚠ 待查證）'] },
      { id: 'sp-l2-4', title: '西班牙：Cava、Corpinnat 與其他', description: 'Penedès、品種、陳年分級、Corpinnat 為何脫離 Cava', duration: 20,
        keyPoints: ['Cava 分級與陳年（⚠ 待查證）'] },
      { id: 'sp-l2-5', title: '義大利：Prosecco、Asti、Franciacorta、Trentodoc、Lambrusco 等', description: '槽式法、傳統法、Asti 法與起泡紅酒', duration: 24,
        keyPoints: ['Prosecco 各層級', 'Franciacorta 風格分類', '甜型起泡（Asti）與起泡紅酒（Lambrusco）為考點'] },
      { id: 'sp-l2-6', title: '德國、奧地利、英國與其他歐洲', description: 'Sekt、Winzersekt、Sekt Austria、英國、瑞士、葡萄牙', duration: 22,
        keyPoints: ['Sekt 層級與用語', '英國為何被視為「第二個香檳」'] },
      { id: 'sp-l2-7', title: '新世界：南非、澳洲、紐西蘭、美洲', description: 'Cap Classique、塔斯馬尼亞、起泡 Shiraz、Marlborough、加州與南美', duration: 24,
        keyPoints: ['風格與價格定位', '起泡紅酒（起泡 Shiraz）為考點'] },
      { id: 'sp-l2-8', title: 'Level 2 綜合評量', description: '整合各產區釀法、品種與法規，通過 Level 2 測驗', duration: 30,
        keyPoints: ['10 題綜合評量（及格 60）'] }
    ]
  },
  level3: {
    ...SPARKLING_LEVEL_META[3],
    modules: [
      { id: 'SP3M1', title: '風格與釀造深度', lessonIds: ['sp-l3-1', 'sp-l3-2'] },
      { id: 'SP3M2', title: '法規與產業', lessonIds: ['sp-l3-3', 'sp-l3-4'] },
      { id: 'SP3M3', title: '應考與評量', lessonIds: ['sp-l3-5', 'sp-l3-6', 'sp-l3-7'] }
    ],
    lessons: [
      { id: 'sp-l3-1', title: '風土與風格比較：氣候、土壤與品種', description: '用環境因素解釋風格差異、氣候變遷的影響', duration: 24,
        keyPoints: ['用環境因素解釋風格差異'] },
      { id: 'sp-l3-2', title: '釀造深度：酒渣陳年、dosage、封瓶與瓶塞', description: '釀造選擇如何改變風格、價格與陳年潛力', duration: 24,
        keyPoints: ['酒渣陳年、氧化 vs 還原、dosage 與 zero dosage'] },
      { id: 'sp-l3-3', title: '法規與標籤判讀', description: '跨產區法規比較與標籤用語', duration: 22,
        keyPoints: ['看標籤判斷釀法與品質（⚠ 待查證）'] },
      { id: 'sp-l3-4', title: '產業、市場與品質價格', description: '產業結構、價格與成本、市場趨勢', duration: 20,
        keyPoints: ['價格與釀法成本論述'] },
      { id: 'sp-l3-5', title: 'D4 氣泡酒品飲（SAT）與盲品', description: '氣泡酒版 SAT、各釀法辨識線索、盲品流程', duration: 25,
        keyPoints: ['盲品與結論：品質、價位、陳年潛力、產區判斷'] },
      { id: 'sp-l3-6', title: 'D4 論述與簡答題框架', description: '論述範例與答題框架：定義→因素→比較→結論', duration: 25,
        keyPoints: ['論述題與簡答題（考試形式以 WSET 最新規格為準）'] },
      { id: 'sp-l3-7', title: 'Level 3 綜合評量', description: '整合 Level 1–3，通過 Level 3 測驗', duration: 35,
        keyPoints: ['12 題綜合評量（及格 60）'] }
    ]
  }
}

export const SPARKLING_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const SPARKLING_TOTAL_LESSONS = SPARKLING_LEVEL_KEYS.reduce((s, k) => s + sparklingLevels[k].lessons.length, 0)
