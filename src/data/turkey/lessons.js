// 土耳其葡萄酒課程：3 階段 11 課（延伸課程：未確認在 WSET D3 範圍內）
// 課名與順序以 TURKEY_COURSE_FRAMEWORK.md 為準；查證見 TURKEY_FACT_CHECK.md。本課程不販售、僅供管理員使用。

export const TR_LEVEL_META = {
  1: { title: 'Level 1 - 入門', color: '#B03A2E', description: '歷史、地理氣候與慣用分區、本土品種' },
  2: { title: 'Level 2 - 分區與法規', color: '#8E2C22', description: '愛琴海、馬爾馬拉與色雷斯、安納托利亞內陸與東部、葡萄酒公報與標籤' },
  3: { title: 'Level 3 - 進階精修', color: '#6B2018', description: '產業與市場、盲品與論述' }
}

const L = (id, title, description, duration, keyPoints) => ({ id, title, description, duration, keyPoints })

export const trLevels = {
  level1: {
    ...TR_LEVEL_META[1],
    modules: [
      { id: 'TRM1', title: '背景與地理', lessonIds: ['tr-l1-1', 'tr-l1-2'] },
      { id: 'TRM2', title: '品種與評量', lessonIds: ['tr-l1-3', 'tr-l1-4'] }
    ],
    lessons: [
      L('tr-l1-1', '歷史與葡萄酒文化', '古老的安納托利亞、奧斯曼時期、共和國與現代酒廠', 20, ['說出影響土耳其酒業的幾個歷史節點']),
      L('tr-l1-2', '地理、氣候與慣用分區', '愛琴海、馬爾馬拉與色雷斯、安納托利亞內陸、東部與東南部', 22, ['說明慣用分區不是法定產區']),
      L('tr-l1-3', '本土品種', 'Öküzgözü、Boğazkere、Kalecik Karası、Narince、Emir 等', 22, ['各品種對應的主要地區與風格']),
      L('tr-l1-4', 'Level 1 評量', '整合 Level 1，通過測驗', 20, ['8 題，及格 60'])
    ]
  },
  level2: {
    ...TR_LEVEL_META[2],
    modules: [
      { id: 'TRM3', title: '分區', lessonIds: ['tr-l2-1', 'tr-l2-2'] },
      { id: 'TRM4', title: '法規與評量', lessonIds: ['tr-l2-3', 'tr-l2-4'] }
    ],
    lessons: [
      L('tr-l2-1', '愛琴海、馬爾馬拉與色雷斯', '西部沿海與近歐洲的分區', 22, ['各分區的代表品種與酒廠密度']),
      L('tr-l2-2', '安納托利亞內陸與東部', '中部高原、東部與東南部', 22, ['各分區的代表品種與氣候']),
      L('tr-l2-3', '法規與標籤', '葡萄酒公報、地理標示與原產地名稱的定義', 22, ['說出 85% 與 100% 規則']),
      L('tr-l2-4', 'Level 2 評量', '整合 Level 2，通過測驗', 24, ['10 題，及格 60'])
    ]
  },
  level3: {
    ...TR_LEVEL_META[3],
    modules: [
      { id: 'TRM5', title: '產業、盲品與論述', lessonIds: ['tr-l3-1', 'tr-l3-2', 'tr-l3-3'] }
    ],
    lessons: [
      L('tr-l3-1', '產業與市場', '消費、促銷限制與出口方向', 22, ['以有出處的報導論述市場限制']),
      L('tr-l3-2', '盲品與論述', '由觀察推到判斷，並寫成因果鏈', 24, ['寫出判斷加觀察理由的結論']),
      L('tr-l3-3', 'Level 3 綜合評量', '整合 Level 3，通過測驗', 26, ['10 題，及格 60'])
    ]
  }
}

export const TR_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const TR_TOTAL_LESSONS = TR_LEVEL_KEYS.reduce((n, k) => n + trLevels[k].lessons.length, 0)
