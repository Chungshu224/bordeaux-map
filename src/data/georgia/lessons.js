// 喬治亞葡萄酒課程：3 階段 21 課（WSET Diploma D3 備考導向）
// 課名、順序以 GEORGIA_COURSE_FRAMEWORK.md 第 2 節為準；事實查證見 EASTERNEUROPE_FACT_CHECK.md（喬治亞段）。
// 本課程不販售、僅供管理員使用。

export const GE_LEVEL_META = {
  1: { title: 'Level 1 - 認識喬治亞葡萄酒', color: '#A64B2A', description: '歷史與酒文化、地理氣候、白與紅本土品種、產區總覽' },
  2: { title: 'Level 2 - 產區與釀法', color: '#8A3A20', description: 'Qvevri 與皮渣接觸、Kakheti、Kartli、Imereti、Racha-Lechkhumi 與 PDO 制度' },
  3: { title: 'Level 3 - Diploma 精修', color: '#6E2E18', description: '栽培釀造深度、風土與品種剖析、橘酒盲品、產業與 Diploma 式論述' }
}

export const geLevels = {
  level1: {
    ...GE_LEVEL_META[1],
    modules: [
      { id: 'GEM1', title: '背景與地理', lessonIds: ['ge-l1-1', 'ge-l1-2'] },
      { id: 'GEM2', title: '品種與產區', lessonIds: ['ge-l1-3', 'ge-l1-4', 'ge-l1-5', 'ge-l1-6'] }
    ],
    lessons: [
      { id: 'ge-l1-1', title: '歷史與酒文化', description: '考古證據、supra 宴席與 tamada，以及蘇聯時期的轉折', duration: 18,
        keyPoints: ['說出喬治亞釀酒的考古證據與年代', '解釋 supra 與 tamada 在酒文化中的角色'] },
      { id: 'ge-l1-2', title: '地理、氣候與栽培', description: '高加索山脈與黑海之間，東西部氣候的差異', duration: 20,
        keyPoints: ['用因果句說明山脈與黑海如何造成東西差異', '說出 Kakheti 在全國中的地位'] },
      { id: 'ge-l1-3', title: '白葡萄品種', description: 'Rkatsiteli、Mtsvane、Kisi、Khikhvi、Tsolikouri、Tsitska、Krakhuna、Chinuri', duration: 22,
        keyPoints: ['各白品種對應的主要產區與風格', 'Rkatsiteli 為何是代表品種'] },
      { id: 'ge-l1-4', title: '紅葡萄品種', description: 'Saperavi 與其他本土紅品種，以及非本土的 Cabernet Sauvignon', duration: 22,
        keyPoints: ['Saperavi 的特徵（紅肉、色深、高酸）', '各紅品種對應的 PDO'] },
      { id: 'ge-l1-5', title: '產區總覽', description: 'Kakheti、Kartli、Imereti、Racha-Lechkhumi 與 Samegrelo', duration: 20,
        keyPoints: ['說出主要產區與位置（東部 vs 西部）', '知道 PDO 名單各來源說法不一，須以官方為準'] },
      { id: 'ge-l1-6', title: 'Level 1 評量', description: '整合 Level 1，通過測驗', duration: 20,
        keyPoints: ['8 題評量（及格 60）'] }
    ]
  },
  level2: {
    ...GE_LEVEL_META[2],
    modules: [
      { id: 'GEM3', title: '釀法', lessonIds: ['ge-l2-1', 'ge-l2-2'] },
      { id: 'GEM4', title: '東部：Kakheti', lessonIds: ['ge-l2-3', 'ge-l2-4'] },
      { id: 'GEM5', title: '其他產區、法規與評量', lessonIds: ['ge-l2-5', 'ge-l2-6', 'ge-l2-7', 'ge-l2-8'] }
    ],
    lessons: [
      { id: 'ge-l2-1', title: 'Qvevri 釀造法', description: '構造、埋藏、UNESCO 與皮渣接觸', duration: 22, keyPoints: ['Qvevri 的構造與用途', 'Kakhetian 與 Imeretian 皮渣接觸程度的差異'] },
      { id: 'ge-l2-2', title: '傳統、歐式與現代釀法', description: '三種風格路線與其酒款特徵', duration: 22, keyPoints: ['各釀法對酒款風格的影響'] },
      { id: 'ge-l2-3', title: 'Kakheti I：地理與白酒 PDO', description: 'Alazani 河谷、Tsinandali、Gurjaani、Vazisubani 等', duration: 24, keyPoints: ['Kakheti 的地理區分', '主要白酒 PDO 的品種'] },
      { id: 'ge-l2-4', title: 'Kakheti II：紅酒 PDO', description: 'Mukuzani、Kindzmarauli、Akhasheni、Teliani 等', duration: 24, keyPoints: ['乾紅與半甜紅 PDO 的差異', 'Teliani 為何特殊'] },
      { id: 'ge-l2-5', title: 'Kartli 與其他產區', description: 'Kartli 的 Atenuri、Bolnisi、Okami 等', duration: 20, keyPoints: ['Kartli 的 PDO 與酒款類型'] },
      { id: 'ge-l2-6', title: 'Imereti、Racha-Lechkhumi 與西部', description: 'Sviri、Tvishi、Khvanchkara、Salkhino Ojaleshi', duration: 22, keyPoints: ['西部白與紅 PDO', 'Khvanchkara 的品種與風格'] },
      { id: 'ge-l2-7', title: '法規與認證', description: 'PDO 制度、National Wine Agency 與歐盟協定', duration: 20, keyPoints: ['制度由誰管理', '歐盟保護與本國 PDO 的關係'] },
      { id: 'ge-l2-8', title: 'Level 2 評量', description: '整合 Level 2，通過測驗', duration: 28, keyPoints: ['10 題評量（及格 60）'] }
    ]
  },
  level3: {
    ...GE_LEVEL_META[3],
    modules: [
      { id: 'GEM6', title: '栽培、釀造與風土', lessonIds: ['ge-l3-1', 'ge-l3-2'] },
      { id: 'GEM7', title: '風格、產業與應考', lessonIds: ['ge-l3-3', 'ge-l3-4', 'ge-l3-5', 'ge-l3-6', 'ge-l3-7'] }
    ],
    lessons: [
      { id: 'ge-l3-1', title: '栽培與釀造深度', description: '本土品種栽培、產量與成熟度、陶罐與不鏽鋼的取捨', duration: 22, keyPoints: ['用因果鏈說明栽培與釀造選擇'] },
      { id: 'ge-l3-2', title: '風土與品種剖析', description: '東西部、坡向與品種的對應', duration: 24, keyPoints: ['風土與品種如何共同決定風格'] },
      { id: 'ge-l3-3', title: '皮渣接觸白酒與盲品辨識', description: '橘酒的視覺、香氣、單寧與結論用語', duration: 24, keyPoints: ['辨識皮渣接觸白酒的線索'] },
      { id: 'ge-l3-4', title: '產業、出口與市場', description: '出口市場結構與品質轉型', duration: 22, keyPoints: ['成本、規模與市場的因果'] },
      { id: 'ge-l3-5', title: '與其他古老產區比較', description: '東歐、地中海與喬治亞的對照', duration: 22, keyPoints: ['找出可比較的軸向'] },
      { id: 'ge-l3-6', title: 'Diploma 品飲與論述', description: 'D3 題型與答題架構', duration: 25, keyPoints: ['用因果鏈作答'] },
      { id: 'ge-l3-7', title: 'Level 3 綜合評量', description: '整合三階段，通過測驗', duration: 30, keyPoints: ['12 題綜合評量（及格 60）'] }
    ]
  }
}

export const GE_LEVEL_KEYS = ['level1', 'level2', 'level3']
export const GE_TOTAL_LESSONS = GE_LEVEL_KEYS.reduce((s, k) => s + geLevels[k].lessons.length, 0)
