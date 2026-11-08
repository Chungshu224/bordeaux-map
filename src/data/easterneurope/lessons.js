// 東歐與巴爾幹葡萄酒課程：3 階段 21 課（延伸課程：未確認在 WSET D3 範圍內）
// 課名、順序以 EASTERNEUROPE_COURSE_FRAMEWORK.md 第 2 節為準；查證見 EASTERNEUROPE_FACT_CHECK.md（第五輪）。
// 本課程不販售、僅供管理員使用。第一階段（骨架）：課文尚未填入。

export const EE_LEVEL_META = {
  1: { title: 'Level 1 - 入門', color: '#5F6B4A', description: '歷史脈絡、地理氣候、白與紅本土品種、各國總覽' },
  2: { title: 'Level 2 - 逐國產區與法規', color: '#4A5538', description: '斯洛維尼亞、克羅埃西亞、羅馬尼亞、保加利亞、摩爾多瓦與其他國家' },
  3: { title: 'Level 3 - 進階精修', color: '#38422B', description: '栽培釀造深度、風土與品種比較、法規與標籤、產業與論述' }
}

const L = (id, title, description, duration, keyPoints) => ({ id, title, description, duration, keyPoints })

export const eeLevels = {
  level1: {
    ...EE_LEVEL_META[1],
    modules: [
      { id: 'EEM1', title: '背景與地理', lessonIds: ['ee-l1-1', 'ee-l1-2'] },
      { id: 'EEM2', title: '品種與總覽', lessonIds: ['ee-l1-3', 'ee-l1-4', 'ee-l1-5', 'ee-l1-6'] }
    ],
    lessons: [
      L('ee-l1-1', '歷史脈絡', '古老傳統、共產時期、私有化與入歐盟', 20, ['說出共產時期對葡萄園與酒廠的影響', '說明入歐盟如何改變法規']),
      L('ee-l1-2', '地理與氣候', '大陸性、黑海、亞得里亞海、喀爾巴阡與巴爾幹山脈', 20, ['用因果句說明水體與山脈對氣候的影響']),
      L('ee-l1-3', '白葡萄品種', 'Graševina、Malvazija Istarska、Rebula、Fetească、Misket 系、Dimyat', 22, ['各白品種對應的主要國家與風格']),
      L('ee-l1-4', '紅葡萄品種', 'Plavac Mali、Teran／Refosco、Fetească Neagră、Mavrud、Melnik、Gamza', 22, ['各紅品種對應的主要國家與風格', '品種親緣說法須以文獻為準']),
      L('ee-l1-5', '各國總覽與地圖', '五國＋摩爾多瓦的位置、制度與產區輪廓', 20, ['說出各國屬歐盟或非歐盟']),
      L('ee-l1-6', 'Level 1 評量', '整合 Level 1，通過測驗', 20, ['評量題數與及格分數於內容階段確定'])
    ]
  },
  level2: {
    ...EE_LEVEL_META[2],
    modules: [
      { id: 'EEM3', title: '斯洛維尼亞與克羅埃西亞', lessonIds: ['ee-l2-1', 'ee-l2-2', 'ee-l2-3'] },
      { id: 'EEM4', title: '羅馬尼亞、保加利亞與摩爾多瓦', lessonIds: ['ee-l2-4', 'ee-l2-5', 'ee-l2-6'] },
      { id: 'EEM5', title: '其他國家與評量', lessonIds: ['ee-l2-7', 'ee-l2-8'] }
    ],
    lessons: [
      L('ee-l2-1', '斯洛維尼亞', '三區九分區：Podravje、Posavje、Primorska', 24, ['說出三區與九個分區（gov.si 現行版）']),
      L('ee-l2-2', '克羅埃西亞 I：大陸區', 'Slavonija、Podunavlje、Zagorje–Međimurje、Plešivica', 22, ['大陸區的主要產區與品種']),
      L('ee-l2-3', '克羅埃西亞 II：沿海區', 'Istra、Dalmacija 與 Dingač', 22, ['沿海區的主要產區與品種']),
      L('ee-l2-4', '羅馬尼亞', 'DOC／IGP、八大栽培區與 CMD／CT／CIB', 24, ['說明 CMD、CT、CIB 的定義']),
      L('ee-l2-5', '保加利亞', 'Thracian Lowlands、Danubian Plain、本土與國際品種', 22, ['兩大 PGI 區與主要品種']),
      L('ee-l2-6', '摩爾多瓦', '三個葡萄酒 PGI 與地下酒窖', 22, ['說出 Valul lui Traian、Ștefan-Vodă、Codru']),
      L('ee-l2-7', '其他國家', '捷克、斯洛伐克、塞爾維亞、北馬其頓、黑山、亞美尼亞、烏克蘭', 20, ['各國一至兩個代表特色']),
      L('ee-l2-8', 'Level 2 評量', '整合 Level 2，通過測驗', 28, ['評量題數與及格分數於內容階段確定'])
    ]
  },
  level3: {
    ...EE_LEVEL_META[3],
    modules: [
      { id: 'EEM6', title: '栽培、釀造與風土', lessonIds: ['ee-l3-1', 'ee-l3-2'] },
      { id: 'EEM7', title: '法規、產業與應考', lessonIds: ['ee-l3-3', 'ee-l3-4', 'ee-l3-5', 'ee-l3-6', 'ee-l3-7'] }
    ],
    lessons: [
      L('ee-l3-1', '栽培與釀造深度', '舊園、私有化後重植、橡木與現代風格', 22, ['用因果鏈說明轉型期的栽培與釀造改變']),
      L('ee-l3-2', '風土與品種比較', '同品種跨國：Graševina／Welschriesling 等', 24, ['比較同品種在不同國家的風格']),
      L('ee-l3-3', '法規與標籤', '歐盟 PDO／PGI 與非歐盟制度的對照', 22, ['說明歐盟與非歐盟制度的差異']),
      L('ee-l3-4', '產業、市場與貿易', '出口市場、價格定位與政治經濟', 22, ['以有出處且標示年份的數據論述市場']),
      L('ee-l3-5', '風格辨識與盲品', '依品種、氣候與釀法推論產地', 24, ['寫出判斷加觀察理由的盲品結論']),
      L('ee-l3-6', 'Diploma 品飲與論述', '比較論述與共產後轉型', 24, ['用事實→機制→結果→意義寫論述']),
      L('ee-l3-7', 'Level 3 綜合評量', '整合 Level 3，通過測驗', 28, ['評量題數與及格分數於內容階段確定'])
    ]
  }
}

export const EE_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const EE_TOTAL_LESSONS = EE_LEVEL_KEYS.reduce((n, k) => n + eeLevels[k].lessons.length, 0)
