/**
 * 布根地課程相關翻譯（繁體中文）
 * - selector: LevelSelector 首頁文字
 * - levels:   Level 1–4 標題與描述
 */
export default {
  selector: {
    breadcrumbCountry: '法國・布根地',
    tagline: '布根地・Climats・1247 個風土地塊',
    title: '布根地葡萄酒',
    subtitle: 'Bourgogne · Pinot Noir · Chardonnay · Climats',
    description: '從金丘 Côte d\'Or 到夏布利、馬貢內、薄酒萊——透過 Climats 風土系統認識世界最複雜的葡萄酒拼圖。',
    levelTrackTitle: '選擇課程階段',
    levelTrackSubtitle: '4 階段、從基礎入門到 Climats 專家認證。',
    heroStats: {
      aocs: 'AOCs',
      climats: 'Climats',
      stages: '階段',
    },
    progress: {
      start: '開始你的布根地 Climats 之旅',
      complete: '🎉 已完成全部布根地課程',
      done: '已完成 {done} / 4 階段',
      currentStage: '當前階段：{name}',
      restart: '重新探索',
      continueLevel: '繼續 Level {n}',
      startLevel: '開始 Level {n}',
    },
    quickNav: {
      mapDesc: 'Climats 風土地圖',
      progressDesc: '{pct}% 完成・{done}/4 階段',
    },
    unlockHint: {
      level2: '完成第一階段並達到 100%',
      level3: '完成第二階段並達到 85% 以上',
      level4: '完成第三階段並達到 85% 以上',
    },
  },

  layout: {
    chapterOverview: '章節總覽',
    chapterDrawer: '章節導航',
    chapterToggle: '≡ 章節',
    completedLabel: '{done}/{total} 課程完成',
    motivation: '🎯 再完成 {n} 課即可完成此階段！',
    moduleDone: '完成',
    tagDone: '完成',
    tagStart: '開始 ▶',
    progressTitle: '整體進度',
    courseIntro: '課程導讀',
    introFallback: '本課程將深入探討{title}的各個面向，建立扎實的知識基礎。',
    finalExam: '📋 綜合評量',
    regionMap: '產區地圖',
    slidePage: '頁面 {n} / {total}',
  },

  modulesL1: {
    'm1': { title: '認識布根地', duration: '50分鐘' },
    'm2': { title: '風土與品種', duration: '40分鐘' },
    'm3': { title: '夜丘探索', duration: '57分鐘' },
    'm4': { title: '伯恩丘探索', duration: '52分鐘' },
    'm5': { title: '夏布利深入探索', duration: '50分鐘' },
    'm6': { title: '薄酒萊入門', duration: '45分鐘' },
    'm7': { title: '夏隆內丘與馬貢內', duration: '40分鐘' },
    'm8': { title: '年份與名莊', duration: '45分鐘' },
  },

  modulesL2: {
    'm1': { title: '夜丘產區深度解析', duration: '90分鐘' },
    'm2': { title: '伯恩丘白酒聖地', duration: '85分鐘' },
    'm3': { title: '風土與土壤科學', duration: '70分鐘' },
    'm4': { title: '特級園完整導覽', duration: '100分鐘' },
    'm5': { title: '一級園精選分析', duration: '80分鐘' },
    'm6': { title: '氣候年份解讀', duration: '60分鐘' },
    'm7': { title: '進階品鑑技術', duration: '75分鐘' },
    'm8': { title: '酒莊與釀酒師', duration: '65分鐘' },
  },

  modulesL3: {
    'm1': { title: '頂級風土深度剖析', duration: '100分鐘' },
    'm2': { title: '名家酒莊研究', duration: '110分鐘' },
    'm3': { title: '氣候年份專業分析', duration: '90分鐘' },
    'm4': { title: '土壤地質科學', duration: '85分鐘' },
    'm5': { title: '釀造工藝進階', duration: '95分鐘' },
    'm6': { title: '特級園地塊比較', duration: '105分鐘' },
    'm7': { title: '市場投資分析', duration: '80分鐘' },
    'm8': { title: '收藏與儲存專業', duration: '70分鐘' },
    'm9': { title: '專業盲品訓練', duration: '100分鐘' },
    'm10': { title: '餐酒搭配藝術', duration: '75分鐘' },
    'm11': { title: '生物動力法研究', duration: '85分鐘' },
    'm12': { title: '氣候變遷與未來', duration: '80分鐘' },
    'm13': { title: '拍賣與交易實務', duration: '70分鐘' },
    'm14': { title: '專業品鑑報告撰寫', duration: '75分鐘' },
    'm15': { title: '綜合案例研究', duration: '90分鐘' },
  },

  modulesL4: {
    'm1': { title: '布根地歷史文化深度研究', duration: '90分鐘', description: '從羅馬時期到現代，探索布根地葡萄酒千年演進史與文化影響力' },
    'm2': { title: '全球頂級黑皮諾比較研究', duration: '105分鐘', description: '布根地 vs 紐西蘭 vs 奧勒岡 vs 德國 - 深度風格分析與盲品訓練' },
    'm3': { title: '侍酒師專業技能訓練', duration: '120分鐘', description: '專業侍酒服務、餐酒搭配設計、酒單建構與酒窖管理實務' },
    'm4': { title: '葡萄酒教育與培訓方法', duration: '95分鐘', description: '教學法設計、課程規劃、品酒會主持與認證考試準備技巧' },
    'm5': { title: '商業案例與市場策略', duration: '110分鐘', description: '酒商經營模式、品牌策略、定價分析與消費者心理學' },
    'm6': { title: '國際貿易與進出口實務', duration: '85分鐘', description: '進口流程、關稅法規、物流管理與國際酒展參展策略' },
    'm7': { title: '酒莊經營與創業管理', duration: '100分鐘', description: '酒莊財務規劃、品牌建立、永續認證與人力資源管理' },
    'm8': { title: '專家論文與綜合評估', duration: '125分鐘', description: '論文撰寫、綜合盲品、口試模擬與最終評估準備' },
  },

  levels: {
    1: {
      title: '基礎入門',
      subtitle: 'Level 1',
      description: '建立布根地葡萄酒的基礎認知，了解地理環境、主要葡萄品種與產區分級系統。',
      tags: ['地理位置與風土', '主要葡萄品種', '金丘產區特色', '品酒基礎技巧'],
    },
    2: {
      title: '中級進階',
      subtitle: 'Level 2',
      description: '深入了解五大產區各自特性與典型酒款特徵，掌握品鑑要點與分析技能。',
      tags: ['夜丘與伯恩丘', '特級園與一級園', '村莊級風格差異', '品鑑與收藏'],
    },
    3: {
      title: '高級專業',
      subtitle: 'Level 3',
      description: '掌握頂級風土條件差異與著名酒莊，深入理解氣候年份以及市場趨勢。',
      tags: ['風土深度解析', '土壤科學研究', '頂級釀造工藝', '市場投資分析'],
    },
    4: {
      title: '專家認證',
      subtitle: 'Level 4',
      description: '專業分析與經營評估能力培養，成為布根地葡萄酒培訓的專業顧問。',
      tags: ['專業論文研究', '商業案例分析', '行業趨勢剖析', '國際市場策略'],
    },
  },
}
