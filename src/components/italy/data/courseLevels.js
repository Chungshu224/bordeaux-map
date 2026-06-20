/**
 * 義大利課程資料
 * 從 Italy Wine Learning-map 專案移植並整合至 Bordeaux Wine Academy
 */
export const courseLevels = {
  level1: {
    id: 'level1',
    title: 'Level 1 - 義大利葡萄酒入門',
    subtitle: '建立基礎知識，探索經典產區',
    duration: '3-4 小時',
    difficulty: '入門',
    icon: '🌱',
    color: '#4CAF50',
    totalLessons: 12,
    modules: [
      {
        id: 'L1M1',
        title: '第一章：義大利葡萄酒基礎',
        lessons: [
          {
            id: 'L1M1L1',
            title: '義大利葡萄酒簡介',
            objectives: ['了解義大利葡萄酒的世界地位與悠久歷史', '認識義大利葡萄酒的驚人多樣性', '建立學習義大利葡萄酒的系統化框架']
          },
          {
            id: 'L1M1L2',
            title: '義大利分級制度 (DOCG/DOC/IGT)',
            objectives: ['區分 DOCG、DOC 與 IGT 的層級意義', '了解義大利分級制度的歷史演進', '學會從酒標辨識法定分級標示']
          },
          {
            id: 'L1M1L3',
            title: '義大利地理與氣候',
            mapRegion: 'all',
            objectives: ['認識義大利南北地形與氣候差異', '了解阿爾卑斯山與地中海對葡萄酒的影響', '在地圖上定位各大葡萄酒產區']
          }
        ]
      },
      {
        id: 'L1M2',
        title: '第二章：五大必學產區',
        lessons: [
          {
            id: 'L1M2L1',
            title: 'Piemonte 皮埃蒙特 - 義大利之王',
            mapRegion: 'piedmont',
            objectives: ['認識皮埃蒙特的 DOCG 核心產區', '掌握 Barolo 與 Barbaresco 的風土差異', '了解 Nebbiolo 品種的香氣與結構']
          },
          {
            id: 'L1M2L2',
            title: 'Tuscany 托斯卡納 - 經典之美',
            mapRegion: 'tuscany',
            objectives: ['認識托斯卡納三大經典產區', '了解 Sangiovese 在各子產區的不同面貌', '掌握 Chianti、Brunello 與 Super Tuscan 的區別']
          },
          {
            id: 'L1M2L3',
            title: 'Veneto 威尼托 - 水都風情',
            mapRegion: 'veneto',
            objectives: ['認識 Soave、Valpolicella 與 Amarone', '了解 Corvina 品種在不同工藝下的表現', '掌握 Appassimento 風乾工藝的原理']
          },
          {
            id: 'L1M2L4',
            title: 'Sicily 西西里 - 火山之島',
            mapRegion: 'sicily',
            objectives: ['認識西西里的火山地質與 Etna DOC', '了解 Nero d\'Avola 品種的濃郁風味', '掌握島嶼氣候對葡萄酒風格的影響']
          },
          {
            id: 'L1M2L5',
            title: 'Lombardy 倫巴第 - 氣泡之鄉',
            mapRegion: 'lombardy',
            objectives: ['認識 Franciacorta DOCG 的傳統瓶中二次發酵工藝', '了解 Oltrepò Pavese 的多元品種', '掌握倫巴第在義大利氣泡酒中的領導地位']
          }
        ]
      },
      {
        id: 'L1M3',
        title: '第三章：基礎品種認識',
        lessons: [
          {
            id: 'L1M3L1',
            title: '五大紅葡萄品種',
            objectives: ['認識 Nebbiolo、Sangiovese、Barbera、Aglianico、Montepulciano', '比較五大紅品種的主要香氣與風味特徵', '了解各品種與產區的對應關係']
          },
          {
            id: 'L1M3L2',
            title: '五大白葡萄品種',
            objectives: ['認識 Pinot Grigio、Garganega、Vermentino、Fiano、Trebbiano', '比較五大白品種的主要風格差異', '了解白品種適合的料理搭配方向']
          }
        ]
      },
      {
        id: 'L1M4',
        title: '第四章：基礎餐酒搭配',
        lessons: [
          {
            id: 'L1M4L1',
            title: '義式料理與葡萄酒入門',
            objectives: ['了解義大利「當地食物配當地酒」的搭配哲學', '認識義式餐酒搭配的基本原則', '掌握五組入門必學的義式餐酒組合']
          }
        ]
      },
      {
        id: 'L1M5',
        title: '第五章：Level 1 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'L1M4L2', title: 'Level 1 綜合評量', isFinalExam: true }
        ]
      }
    ]
  },

  level2: {
    id: 'level2',
    title: 'Level 2 - 義大利葡萄酒進階',
    subtitle: '深入探索全國產區，掌握餐酒搭配',
    duration: '6-8 小時',
    difficulty: '進階',
    icon: '🍷',
    color: '#FF9800',
    totalLessons: 27,
    modules: [
      {
        id: 'L2M1',
        title: '第一章：北義產區全覽',
        lessons: [
          {
            id: 'L2M1L1',
            title: 'Trentino-Alto Adige 特倫蒂諾',
            mapRegion: 'trentino',
            objectives: ['認識特倫蒂諾的德義雙語文化背景', '了解阿爾卑斯山氣候對芳香型品種的影響', '掌握 Gewürztraminer 與 Pinot Grigio 的當地風格']
          },
          {
            id: 'L2M1L2',
            title: 'Friuli Venezia Giulia 弗留利',
            mapRegion: 'friuli',
            objectives: ['認識弗留利在義大利白葡萄酒的領導地位', '了解 Collio 與 Colli Orientali 的風土差異', '掌握 Ribolla Gialla 與 Friulano 的品種特色']
          },
          {
            id: 'L2M1L3',
            title: 'Liguria 利古里亞',
            mapRegion: 'liguria',
            objectives: ['認識利古里亞懸崖梯田葡萄園的獨特景觀', '了解 Cinque Terre 的採收挑戰與傳統工藝', '掌握 Vermentino 在地中海沿岸的清爽表現']
          },
          {
            id: 'L2M1L4',
            title: 'Emilia-Romagna 艾米利亞',
            mapRegion: 'emilia',
            objectives: ['認識 Lambrusco 在艾米利亞的多元風格', '了解 Romagna 的 Sangiovese 特色', '掌握美食之都帕瑪的餐酒搭配精神']
          }
        ]
      },
      {
        id: 'L2M2',
        title: '第二章：中義產區深度',
        lessons: [
          {
            id: 'L2M2L1',
            title: 'Marche 馬爾凱',
            mapRegion: 'marche',
            objectives: ['認識 Verdicchio 白葡萄酒的礦物感與清爽風格', '了解 Rosso Conero 的 Montepulciano 品種特色', '掌握亞得里亞海岸海鮮料理的配酒邏輯']
          },
          {
            id: 'L2M2L2',
            title: 'Umbria 翁布里亞',
            mapRegion: 'umbria',
            objectives: ['認識翁布里亞的 Orvieto 白酒歷史', '了解 Sagrantino di Montefalco 的強勁單寧', '掌握義大利腹地山區的風土特色']
          },
          {
            id: 'L2M2L3',
            title: 'Lazio 拉齊奧',
            mapRegion: 'lazio',
            objectives: ['認識拉齊奧的 Frascati 與 Est! Est!! Est!!! 白酒', '了解火山土壤對白葡萄酒礦物風味的影響', '掌握羅馬飲酒文化與傳統酒館 Osteria 精神']
          },
          {
            id: 'L2M2L4',
            title: 'Abruzzo 阿布魯佐',
            mapRegion: 'abruzzo',
            objectives: ['認識 Montepulciano d\'Abruzzo 的豐厚風格', '了解海拔高度對品質的提升作用', '掌握 Trebbiano d\'Abruzzo 的白酒特色']
          },
          {
            id: 'L2M2L5',
            title: 'Molise 莫利塞',
            mapRegion: 'molise',
            objectives: ['認識義大利最小產區之一的莫利塞', '了解 Tintilia 本土品種的復興運動', '掌握小眾精品產區的獨特定位']
          }
        ]
      },
      {
        id: 'L2M3',
        title: '第三章：南義與島嶼',
        lessons: [
          {
            id: 'L2M3L1',
            title: 'Campania 坎帕尼亞',
            mapRegion: 'campania',
            objectives: ['認識坎帕尼亞的古老品種 Aglianico', '了解 Greco di Tufo 與 Fiano di Avellino 的白酒特色', '掌握 Taurasi 的陳年潛力與骨架']
          },
          {
            id: 'L2M3L2',
            title: 'Puglia 普利亞',
            mapRegion: 'puglia',
            objectives: ['認識普利亞的 Primitivo 與 Negroamaro 品種', '了解義大利最大葡萄酒產量大區的品質轉型', '掌握 Salice Salentino 的陽光濃郁風格']
          },
          {
            id: 'L2M3L3',
            title: 'Basilicata 巴西利卡塔',
            mapRegion: 'basilicata',
            objectives: ['認識 Aglianico del Vulture 的火山土壤特性', '了解高海拔火山產區的氣候優勢', '掌握這個南義隱藏寶石產區的潛力']
          },
          {
            id: 'L2M3L4',
            title: 'Calabria 卡拉布里亞',
            mapRegion: 'calabria',
            objectives: ['認識 Gaglioppo 品種與 Cirò 產區的悠久歷史', '了解義大利靴尖地形的葡萄酒特色', '掌握卡拉布里亞葡萄酒的辛香料風格']
          },
          {
            id: 'L2M3L5',
            title: 'Sardinia 薩丁尼亞',
            mapRegion: 'sardinia',
            objectives: ['認識薩丁尼亞的 Vermentino 與 Cannonau 品種', '了解島嶼地中海風土的獨特表現', '掌握薩丁尼亞葡萄酒的古老品種傳承']
          }
        ]
      },
      {
        id: 'L2M4',
        title: '第四章：進階品種研究',
        lessons: [
          {
            id: 'L2M4L1',
            title: '北義經典品種深度研究',
            objectives: ['深入研究 Nebbiolo、Dolcetto、Barbera 的風味差異', '了解北義品種的陳年特性與最佳飲用窗口', '掌握品種在不同子產區的風格變化']
          },
          {
            id: 'L2M4L2',
            title: '中義品種與風土',
            objectives: ['深入研究 Sangiovese 在不同產區的克隆差異', '了解 Verdicchio 與 Vernaccia 等中義白品種特色', '掌握中義品種與風土的密切對應關係']
          },
          {
            id: 'L2M4L3',
            title: '南義本土品種寶庫',
            objectives: ['認識南義豐富的本土品種資源庫', '了解 Primitivo 與 Zinfandel 的基因關聯', '掌握南義品種的濃郁風格與陳年潛力']
          },
          {
            id: 'L2M4L4',
            title: '義大利品種的國際表現',
            objectives: ['了解義大利品種在全球葡萄酒市場的定位', '認識 Super Tuscan 對國際市場的革命性影響', '掌握品種個性在不同風土下的共性與變化']
          }
        ]
      },
      {
        id: 'L2M5',
        title: '第五章：投資與收藏',
        lessons: [
          {
            id: 'L2M5L1',
            title: '義大利精品酒莊投資指南',
            objectives: ['了解義大利頂級酒莊的分級與代表作品', '認識二級市場的價格決定因素', '掌握投資義大利葡萄酒的入門策略']
          },
          {
            id: 'L2M5L2',
            title: '年份評鑑與收藏策略',
            objectives: ['了解義大利主要產區的年份品質差異', '認識老酒評估與最佳飲用窗口的判斷方法', '掌握長期收藏義大利酒的窖藏條件']
          },
          {
            id: 'L2M5L3',
            title: '國際市場與拍賣',
            objectives: ['了解義大利葡萄酒的全球出口市場分布', '認識主要國際拍賣行的義大利酒款行情', '掌握全球定價趨勢與市場熱門品項']
          }
        ]
      },
      {
        id: 'L2M6',
        title: '第六章：產區餐酒搭配實戰',
        lessons: [
          {
            id: 'L2M6L1',
            title: '北義產區餐酒搭配實戰',
            objectives: ['掌握 Barolo 配松露與燉牛肉的核心原則', '了解北義白酒與湖鮮料理的搭配邏輯', '設計完整的北義風格套餐酒單']
          },
          {
            id: 'L2M6L2',
            title: '中南義與島嶼餐酒搭配實戰',
            objectives: ['掌握 Chianti 與義式燉肉、披薩的搭配', '了解南義濃郁紅酒與重口味料理的協調', '設計中南義與島嶼風格的套餐酒單']
          },
          {
            id: 'L2M6L3',
            title: '特殊酒款配對：氣泡酒、甜酒與加烈酒',
            objectives: ['掌握 Prosecco 與 Franciacorta 的開胃酒搭配', '了解 Vin Santo 與杏仁餅的傳統配對藝術', '認識 Marsala 加烈酒的料理與飲用應用']
          }
        ]
      },
      {
        id: 'L2M7',
        title: '第七章：Level 2 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'L2FinalExam', title: 'Level 2 綜合評量', isFinalExam: true }
        ]
      }
    ]
  },

  level3: {
    id: 'level3',
    title: 'Level 3 - 義大利葡萄酒專家',
    subtitle: '大師級知識、盲品技巧、產業深度',
    duration: '10-12 小時',
    difficulty: '專家',
    icon: '🏆',
    color: '#9C27B0',
    totalLessons: 31,
    prerequisites: ['完成 Level 1', '完成 Level 2'],
    modules: [
      {
        id: 'L3M1',
        title: '第一章：稀有品種與小產區',
        lessons: [
          {
            id: 'L3M1L1',
            title: '北義稀有品種寶藏',
            objectives: ['認識 Timorasso、Erbaluce 等北義珍稀白品種', '了解稀有品種的歷史與當代復興運動', '掌握稀有品種葡萄酒的尋找與品評方法']
          },
          {
            id: 'L3M1L2',
            title: '中義稀有品種',
            objectives: ['認識 Sagrantino、Vernaccia 等中義獨特品種', '了解稀有品種在地方文化與烹飪中的角色', '掌握品種特性的專業感官描述方式']
          },
          {
            id: 'L3M1L3',
            title: '南義原生品種寶庫',
            objectives: ['認識 Tintilia、Gaglioppo 等南義本土品種的基因多樣性', '了解品種保育與傳統農業的重要性', '掌握新世代南義釀酒師的創新方向']
          },
          {
            id: 'L3M1L4',
            title: '隱藏寶石產區',
            objectives: ['發現義大利被低估的小眾精品產區', '了解新興產區崛起的風土與市場條件', '掌握評估新興產區投資潛力的分析框架']
          }
        ]
      },
      {
        id: 'L3M2',
        title: '第二章：酒標解讀專家課',
        lessons: [
          {
            id: 'L3M2L1',
            title: 'MGA 與 Cru 系統詳解',
            objectives: ['深入理解 Barolo MGA（Menzioni Geografiche Aggiuntive）分類', '了解單一葡萄園在義大利法律中的地位與價值', '掌握 Cru 系統與風土精準表達的關係']
          },
          {
            id: 'L3M2L2',
            title: '標示術語完全指南',
            objectives: ['完全掌握義大利酒標上所有法定術語', '了解 Riserva、Superiore、Classico 等術語的精確意義', '能流利解讀任何義大利葡萄酒的完整酒標資訊']
          },
          {
            id: 'L3M2L3',
            title: '生產者風格辨識',
            objectives: ['辨識義大利主要明星酒莊的釀酒哲學與風格', '了解傳統派（Tradizionalisti）與現代派（Modernisti）的差異', '掌握生產者資訊對選酒與投資決策的影響']
          },
          {
            id: 'L3M2L4',
            title: '分級制度深度解析',
            objectives: ['深入理解義大利分級制度從 1963 年至今的歷史演進', '了解 Super Tuscan 如何以 IGT 挑戰既有分級框架', '掌握分級制度最新改革趨勢與未來展望']
          }
        ]
      },
      {
        id: 'L3M3',
        title: '第三章：年份與陳年',
        lessons: [
          {
            id: 'L3M3L1',
            title: 'Barolo 年份指南',
            objectives: ['精通 Barolo 近二十年的重要年份品質評估', '了解氣候事件（冰雹、熱浪、雨季）對年份的影響', '建立個人的 Barolo 年份購買與開瓶策略']
          },
          {
            id: 'L3M3L2',
            title: 'Brunello & Chianti 年份解析',
            objectives: ['精通 Brunello di Montalcino 的年份差異與陳年曲線', '了解 Chianti Classico Gran Selezione 的年份表現', '掌握托斯卡納年份系統化評估的關鍵指標']
          },
          {
            id: 'L3M3L3',
            title: 'Amarone 陳年演變',
            objectives: ['了解 Amarone 的 Appassimento 風乾工藝對陳年的影響', '認識不同年份的 Amarone 風格差異與開瓶時機', '掌握大年份 Amarone 在不同陳年階段的香氣演變']
          },
          {
            id: 'L3M3L4',
            title: '陳年潛力判斷',
            objectives: ['建立評估任何義大利紅酒陳年潛力的系統框架', '了解酸度、單寧結構與萃取濃度的陳年作用', '掌握正確窖藏條件（溫度、濕度、光線）的管理標準']
          }
        ]
      },
      {
        id: 'L3M4',
        title: '第四章：盲品訓練',
        lessons: [
          {
            id: 'L3M4L1',
            title: '系統化盲品方法論',
            objectives: ['建立系統化的義大利葡萄酒盲品流程', '了解 WSET Systematic Approach 在義大利酒中的應用', '掌握有效縮小品種與產區範圍的邏輯推理方式']
          },
          {
            id: 'L3M4L2',
            title: '品種辨識技巧',
            objectives: ['從香氣輪廓精準辨識義大利主要品種', '了解品種特徵在不同風土下的共同辨識指標', '建立品種辨識的感官記憶庫與關鍵詞彙']
          },
          {
            id: 'L3M4L3',
            title: '產區風土識別',
            objectives: ['從酒款特性縮小產區識別範圍', '了解海拔、土壤礦物質與微氣候的感官表現', '掌握義大利各大產區的風土辨識關鍵指標']
          },
          {
            id: 'L3M4L4',
            title: '年份識別方法',
            objectives: ['從酒款的發展程度與香氣推斷年份範圍', '了解年份氣候特徵如何在成酒中呈現', '掌握年份識別的系統化推理與修正方法']
          },
          {
            id: 'L3M4L5',
            title: '實戰盲品演練',
            objectives: ['在實戰情境中整合品種、產區與年份判斷', '了解考試盲品與餐廳推薦場景的不同策略', '建立個人盲品失誤分析與持續改進機制']
          }
        ]
      },
      {
        id: 'L3M5',
        title: '第五章：產業與市場',
        lessons: [
          {
            id: 'L3M5L1',
            title: '義大利葡萄酒產業結構',
            objectives: ['了解義大利葡萄酒產業的規模與組成', '認識合作社、家族酒莊與企業集團的角色差異', '掌握義大利酒業的主要商業模式與競爭格局']
          },
          {
            id: 'L3M5L2',
            title: '出口市場分析',
            objectives: ['分析義大利葡萄酒的全球出口市場分布', '了解美國、德國、瑞士等主要市場的消費偏好', '掌握市場趨勢對義大利酒莊生產決策的影響']
          },
          {
            id: 'L3M5L3',
            title: '永續農業與自然酒',
            objectives: ['了解自然酒（Natural Wine）運動在義大利的發展脈絡', '認識有機（Biologico）與生物動力（Biodinamico）農法的差異', '掌握永續農業認證對酒款品質與市場定位的影響']
          },
          {
            id: 'L3M5L4',
            title: '未來趨勢與氣候變遷',
            objectives: ['了解氣候變遷對義大利葡萄酒產區分布的衝擊', '認識品種適應性研究與高海拔產區的崛起', '掌握義大利葡萄酒產業應對未來挑戰的策略']
          }
        ]
      },
      {
        id: 'L3M6',
        title: '第六章：侍酒師實務',
        lessons: [
          {
            id: 'L3M6L1',
            title: '進階餐酒搭配理論',
            objectives: ['掌握複雜料理與高端義大利酒款的進階搭配原則', '了解味覺平衡理論（酸、甜、苦、鹹）在實際配對的應用', '建立為精緻餐廳設計義大利主題酒單的能力']
          },
          {
            id: 'L3M6L2',
            title: '老酒的侍酒與醒酒藝術',
            objectives: ['了解老年份義大利酒的侍酒前準備與評估', '掌握醒酒時間判斷、換瓶技術與溫度控制', '認識老酒品評的特殊感官標準與期望管理']
          },
          {
            id: 'L3M6L3',
            title: '酒單設計與庫存管理',
            objectives: ['掌握義大利主題酒單的結構設計與定價邏輯', '了解酒窖庫存管理與成本控制的最佳實踐', '建立與客人溝通並推薦義大利酒款的專業話術']
          }
        ]
      },
      {
        id: 'L3M7',
        title: '第七章：餐酒搭配實務',
        lessons: [
          {
            id: 'L3M7L1',
            title: '地域搭配哲學：南北差異全攻略',
            objectives: ['深入理解南北義料理風格差異與配酒核心邏輯', '掌握海鮮、肉類、野味與各類義大利酒的搭配策略', '建立跨區域義大利完整套餐酒單的設計能力']
          },
          {
            id: 'L3M7L2',
            title: '特殊酒款搭配：氣泡、甜酒與加烈酒',
            objectives: ['精通 Prosecco、Franciacorta 在多道菜套餐中的靈活運用', '掌握 Vin Santo、Moscato d\'Asti 等甜酒的配對藝術', '了解 Marsala 加烈酒的料理入菜與餐前酒應用']
          },
          {
            id: 'L3M7L3',
            title: '侍酒師實務：溫度、開瓶、醒酒與服務',
            objectives: ['掌握義大利各酒款的最佳侍酒溫度標準', '了解不同瓶型（Magnum、Jeroboam）的開瓶技術', '建立專業醒酒評估與完整桌邊服務流程']
          },
          {
            id: 'L3M7L4',
            title: '餐酒搭配實戰：設計完整套餐酒單',
            objectives: ['整合所有餐酒搭配知識設計完整義式套餐酒單', '掌握酒款選擇、份量規劃與成本計算的實務技能', '建立可直接執行的高端義式套餐酒單方案']
          }
        ]
      },
      {
        id: 'L3M8',
        title: '第八章：Level 3 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'L3FinalExam', title: 'Level 3 綜合評量', isFinalExam: true }
        ]
      }
    ]
  }
}

export function getUserProgress (levelKey) {
  const saved = localStorage.getItem(`italy-${levelKey}-progress`)
  return saved ? JSON.parse(saved) : { completedLessons: [] }
}

export function saveProgress (levelKey, lessonId) {
  const progress = getUserProgress(levelKey)
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
    localStorage.setItem(`italy-${levelKey}-progress`, JSON.stringify(progress))
  }
}

export function getLevelProgressPct (levelKey) {
  const level = courseLevels[levelKey]
  if (!level) return 0
  const progress = getUserProgress(levelKey)
  const totalLessons = level.totalLessons
  const completed = progress.completedLessons.length
  return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0
}

/**
 * 單一來源的解鎖規則，避免選階段頁與課程頁判斷不一致。
 * 兼容舊資料：若過去只寫入最終評量 lessonId，仍視為已解鎖下一級。
 */
export function isItalyLevelUnlocked (levelKey) {
  if (levelKey === 'level1') return true

  if (levelKey === 'level2') {
    const l1Progress = getUserProgress('level1')
    const l1Done = l1Progress.completedLessons || []
    return getLevelProgressPct('level1') >= 100 || l1Done.includes('L1M4L2')
  }

  if (levelKey === 'level3') {
    const l2Progress = getUserProgress('level2')
    const l2Done = l2Progress.completedLessons || []
    return getLevelProgressPct('level2') >= 100 || l2Done.includes('L2FinalExam')
  }

  return false
}
