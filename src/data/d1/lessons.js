// 葡萄酒生產（D1）專論：3 階段 21 課（階段 A 空殼）
// 課名、順序與考點以 D1_COURSE_FRAMEWORK.md 第 2、3 節為準；內容待階段 B–D 填入。
// ⚠ ＝數字或來源矛盾，須先對官方文件確認（見 D1_FACT_CHECK.md）。
// 本課程不販售、僅供管理員使用。

export const D1_LEVEL_META = {
  1: { title: 'Level 1 - 葡萄園：葡萄樹與環境', color: '#4F6F1F', description: '葡萄樹構造、生長週期、氣候與土壤、種植方式與建園選擇' },
  2: { title: 'Level 2 - 葡萄園管理與釀造', color: '#3F5C18', description: '土壤水分、葉幕、病蟲害、採收，以及酒體成分與紅白粉紅釀造選項' },
  3: { title: 'Level 3 - 特殊酒款、完成與應考', color: '#34491A', description: '甜酒／氣泡酒／強化酒製法概覽、澄清與包裝、風格—品質—價格取捨與模擬考' }
}

export const d1Levels = {
  level1: {
    ...D1_LEVEL_META[1],
    modules: [
      { id: 'D1M1', title: '葡萄樹與生長週期', lessonIds: ['d1-l1-1', 'd1-l1-2'] },
      { id: 'D1M2', title: '生長環境', lessonIds: ['d1-l1-3', 'd1-l1-4'] },
      { id: 'D1M3', title: '種植方式與建園', lessonIds: ['d1-l1-5', 'd1-l1-6', 'd1-l1-7'] }
    ],
    lessons: [
      { id: 'd1-l1-1', title: '葡萄樹與葡萄粒：構造與成分', description: '根、莖、葉、芽與果粒各部位，糖、酸、酚類與香氣前驅物的所在', duration: 18,
        keyPoints: ['說出各構造的功能', '果皮、果肉、種子分別貢獻什麼'] },
      { id: 'd1-l1-2', title: '年度生長週期與開花著果', description: '萌芽、開花著果、轉色、成熟、休眠，各階段的風險', duration: 18,
        keyPoints: ['依序排出生長週期', '落花、大小果與春霜的成因與影響'] },
      { id: 'd1-l1-3', title: '生長環境 I：氣候', description: '溫度、日照、降雨與風如何影響成熟與風格', duration: 20,
        keyPoints: ['涼爽與溫暖氣候的相對效應（數字 ⚠ 待查證）', '用因果句解釋，而非背數字'] },
      { id: 'd1-l1-4', title: '生長環境 II：土壤、地形與微氣候', description: '土壤排水與保水、坡向與海拔、水體與微氣候', duration: 20,
        keyPoints: ['土壤影響的是水分與樹勢，不是「礦物味」', '地形如何改變同一區的成熟'] },
      { id: 'd1-l1-5', title: '種植方式：傳統、有機、生物動力與永續', description: '各種方式的定義、允許與禁止、驗證差異', duration: 18,
        keyPoints: ['四種方式不可混為一談', '各自對成本與風險的影響'] },
      { id: 'd1-l1-6', title: '建園：選址、品種、砧木與繁殖', description: '無性系、砧木、根瘤蚜、種植密度與整枝', duration: 22,
        keyPoints: ['建園時的長期決策', '砧木的用途與根瘤蚜'] },
      { id: 'd1-l1-7', title: 'Level 1 評量', description: '整合 Level 1，通過測驗', duration: 25,
        keyPoints: ['8 題評量（及格 60）'] }
    ]
  },
  level2: {
    ...D1_LEVEL_META[2],
    modules: [
      { id: 'D1M4', title: '葡萄園管理', lessonIds: ['d1-l2-1', 'd1-l2-2', 'd1-l2-3', 'd1-l2-4'] },
      { id: 'D1M5', title: '酒體成分與釀造選項', lessonIds: ['d1-l2-5', 'd1-l2-6', 'd1-l2-7', 'd1-l2-8'] }
    ],
    lessons: [
      { id: 'd1-l2-1', title: '土壤健康、養分與水分管理', description: '覆蓋作物、施肥、灌溉的選擇與取捨', duration: 20,
        keyPoints: ['管理選項如何回應生長環境', '灌溉與品質的關係'] },
      { id: 'd1-l2-2', title: '葉幕管理與產量控制', description: '修剪、除葉、疏梢、疏果與暖化下的調整', duration: 22,
        keyPoints: ['葉幕管理的目的與技術', '產量與風格、品質、價格'] },
      { id: 'd1-l2-3', title: '災害、病蟲害與氣候風險', description: '霜、冰雹、乾旱；白粉病、露菌病、灰黴病、病毒與蟲害', duration: 24,
        keyPoints: ['症狀 → 病害 → 防治選項（劑量 ⚠ 待查證）', '預防與治療的差別'] },
      { id: 'd1-l2-4', title: '採收：日期、人工與機械', description: '何時採收、如何採收、甜酒葡萄的處理', duration: 20,
        keyPoints: ['採收日是糖、酸、酚類、香氣的取捨', '人工與機械的條件與成本'] },
      { id: 'd1-l2-5', title: '酒體成分：酒精、酸、酚類與香氣', description: '酒的構成與各成分對風格的貢獻', duration: 20,
        keyPoints: ['各成分的來源與功能', '成分與風格的連結'] },
      { id: 'd1-l2-6', title: '釀造方式與通用選項', description: '氧氣、SO₂、溫度控制、酵母與 MLF', duration: 24,
        keyPoints: ['氧氣的利與弊', '傳統、現代與低介入方式的差別（數字 ⚠ 待查證）'] },
      { id: 'd1-l2-7', title: '白酒與粉紅酒釀造選項', description: '壓榨、澄清、發酵容器、酒渣接觸、MLF 與橡木', duration: 24,
        keyPoints: ['每個選項對風格的影響', '粉紅酒的取得方式'] },
      { id: 'd1-l2-8', title: '紅酒釀造選項', description: '去梗、浸漬、萃取手段、整串發酵與壓榨', duration: 24,
        keyPoints: ['萃取手段的強弱與風格', '浸皮時間的取捨'] }
    ]
  },
  level3: {
    ...D1_LEVEL_META[3],
    modules: [
      { id: 'D1M6', title: '特殊酒款與完成', lessonIds: ['d1-l3-1', 'd1-l3-2', 'd1-l3-3'] },
      { id: 'D1M7', title: '取捨與應考', lessonIds: ['d1-l3-4', 'd1-l3-5', 'd1-l3-6'] }
    ],
    lessons: [
      { id: 'd1-l3-1', title: '甜酒、氣泡酒與強化酒的製法概覽', description: '三類特殊酒款的關鍵製法差異（細節見 D4／D5 專論）', duration: 22,
        keyPoints: ['如何取得甜度、氣泡、酒精', '與 D4／D5 專論的分工'] },
      { id: 'd1-l3-2', title: '澄清、穩定、混調與熟成容器', description: '澄清與穩定的方法、混調時機、橡木與惰性容器', duration: 22,
        keyPoints: ['各選項的目的與副作用'] },
      { id: 'd1-l3-3', title: '完成與包裝：過濾、封瓶與瓶型', description: '過濾、軟木塞與螺旋蓋、瓶型與包裝選擇', duration: 20,
        keyPoints: ['封瓶選項與風格、成本'] },
      { id: 'd1-l3-4', title: '風格—品質—價格：選擇的取捨', description: '從葡萄園到酒窖的決策如何影響成本與定位', duration: 24,
        keyPoints: ['用「選項→效果→風格／品質／價格」鏈條作答'] },
      { id: 'd1-l3-5', title: '模擬考 I：短答與解釋', description: 'describe／explain 題型與得分要點', duration: 30,
        keyPoints: ['考試形式以 WSET 最新規格為準（90 分鐘、開放式作答）'] },
      { id: 'd1-l3-6', title: '模擬考 II：評估型論述與 Level 3 評量', description: 'evaluate 題型與綜合評量', duration: 35,
        keyPoints: ['12 題綜合評量（及格 60）'] }
    ]
  }
}

export const D1_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const D1_TOTAL_LESSONS = D1_LEVEL_KEYS.reduce((s, k) => s + d1Levels[k].lessons.length, 0)
