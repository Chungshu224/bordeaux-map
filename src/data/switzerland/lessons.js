// 瑞士葡萄酒課程：3 階段 18 課（延伸課程，不在 WSET D3 範圍）
// 課名、順序以 SWISS_COURSE_FRAMEWORK.md 第 1 節為準；事實查證見 SWISS_FACT_CHECK.md。
// 本課程不販售、僅供管理員使用。

export const SWI_LEVEL_META = {
  1: { title: 'Level 1 - 認識瑞士葡萄酒', color: '#B3202E', description: '歷史、地理與氣候、六大產區、品種與州級 AOC 制度' },
  2: { title: 'Level 2 - 產區深入', color: '#9A1A27', description: 'Valais、Vaud、Geneva、Three Lakes、Ticino 與德語區' },
  3: { title: 'Level 3 - 進階主題與論述', color: '#7A1520', description: '陡坡栽培、釀造風格、內銷型市場、法規演變與 Diploma 式論述' }
}

export const swiLevels = {
  level1: {
    ...SWI_LEVEL_META[1],
    modules: [
      { id: 'SWM1', title: '背景與地理', lessonIds: ['swi-l1-1', 'swi-l1-2'] },
      { id: 'SWM2', title: '品種與制度', lessonIds: ['swi-l1-3', 'swi-l1-4', 'swi-l1-5'] }
    ],
    lessons: [
      { id: 'swi-l1-1', title: '認識瑞士葡萄酒：歷史', description: '從羅馬人、修道院到根瘤蚜與 1988 年的轉折', duration: 18,
        keyPoints: ['說出羅馬人、修士與根瘤蚜各自的角色', '1988 年過剩危機如何催生 AOC'] },
      { id: 'swi-l1-2', title: '地理、氣候與六大產區', description: '阿爾卑斯、湖泊與焚風，以及官方劃分的六大產區', duration: 22,
        keyPoints: ['說出六大產區', '用因果句解釋湖泊、焚風與山脈的作用'] },
      { id: 'swi-l1-3', title: '品種總覽', description: 'Chasselas、Pinot Noir、Gamay、Merlot 與 Valais 本土品種', duration: 22,
        keyPoints: ['各品種對應的主要產區', '別名與品種身分（Fendant、Heida）'] },
      { id: 'swi-l1-4', title: '州級 AOC／AOP 制度與標示', description: '聯邦、州與 Grand Cru：誰訂規則', duration: 22,
        keyPoints: ['AOC 由各州制定', 'Grand Cru 是州級而非全國級'] },
      { id: 'swi-l1-5', title: 'Level 1 評量', description: '整合 Level 1，通過測驗', duration: 20,
        keyPoints: ['8 題評量（及格 60）'] }
    ]
  },
  level2: {
    ...SWI_LEVEL_META[2],
    modules: [
      { id: 'SWM3', title: '法語區與南部', lessonIds: ['swi-l2-1', 'swi-l2-2', 'swi-l2-3', 'swi-l2-4', 'swi-l2-5', 'swi-l2-6'] },
      { id: 'SWM4', title: '德語區與評量', lessonIds: ['swi-l2-7', 'swi-l2-8'] }
    ],
    lessons: [
      { id: 'swi-l2-1', title: 'Valais 總覽', description: '阿爾卑斯內陸谷地：乾燥、日照與焚風', duration: 20, keyPoints: ['Valais 的氣候特徵', '主要品種與風格'] },
      { id: 'swi-l2-2', title: 'Valais 的 Grand Cru 與本土品種', description: 'Petite Arvine、Amigne、Humagne、Cornalin、Heida、Rèze', duration: 24, keyPoints: ['本土品種與風格', 'Valais Grand Cru 的運作'] },
      { id: 'swi-l2-3', title: 'Vaud：Lavaux、Dézaley 與 Calamin', description: 'UNESCO 梯田與 Chasselas 的標竿', duration: 24, keyPoints: ['Lavaux 的地形與三重日照', 'Dézaley 與 Calamin 的差異'] },
      { id: 'swi-l2-4', title: 'Vaud 的 La Côte、Chablais 與北部', description: 'Vaud 其他次產區與風格', duration: 22, keyPoints: ['各次產區的位置與特色'] },
      { id: 'swi-l2-5', title: 'Geneva 與 Three Lakes', description: '日內瓦與三湖區（Neuchâtel、Lake Biel、Vully）', duration: 22, keyPoints: ['兩區的氣候與品種'] },
      { id: 'swi-l2-6', title: 'Ticino 與 Merlot', description: '阿爾卑斯南側的 Merlot 產區', duration: 20, keyPoints: ['Ticino 的氣候與 Merlot 風格'] },
      { id: 'swi-l2-7', title: '德語區', description: 'Graubünden、Zürich、Schaffhausen 等', duration: 22, keyPoints: ['德語區的品種與風格'] },
      { id: 'swi-l2-8', title: 'Level 2 評量', description: '整合 Level 2，通過測驗', duration: 25, keyPoints: ['10 題評量（及格 60）'] }
    ]
  },
  level3: {
    ...SWI_LEVEL_META[3],
    modules: [
      { id: 'SWM5', title: '栽培與釀造', lessonIds: ['swi-l3-1', 'swi-l3-2'] },
      { id: 'SWM6', title: '市場、法規與應考', lessonIds: ['swi-l3-3', 'swi-l3-4', 'swi-l3-5'] }
    ],
    lessons: [
      { id: 'swi-l3-1', title: '栽培：陡坡、石牆梯田與氣候', description: '英雄式栽培的成本與氣候風險', duration: 22, keyPoints: ['陡坡如何推高成本'] },
      { id: 'swi-l3-2', title: '釀造與風格', description: 'Chasselas 風格、Dôle、Œil-de-Perdrix、Vin des Glaciers、甜酒', duration: 24, keyPoints: ['各風格的原料與特徵'] },
      { id: 'swi-l3-3', title: '市場：內銷型產業與出口悖論', description: '為什麼瑞士酒幾乎只在瑞士喝到', duration: 22, keyPoints: ['成本、規模與關稅／通路的因果'] },
      { id: 'swi-l3-4', title: '法規演變與 Diploma 論述', description: '從 1988 到今日的制度變遷與答題架構', duration: 24, keyPoints: ['用因果鏈作答'] },
      { id: 'swi-l3-5', title: 'Level 3 綜合評量', description: '整合三階段，通過測驗', duration: 30, keyPoints: ['12 題綜合評量（及格 60）'] }
    ]
  }
}

export const SWI_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const SWI_TOTAL_LESSONS = SWI_LEVEL_KEYS.reduce((s, k) => s + swiLevels[k].lessons.length, 0)
