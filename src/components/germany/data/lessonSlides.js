/**
 * 德國葡萄酒課程 slide 內容
 * 每個 lesson 的 slides 陣列直接在此定義，無需額外 JSON 文件
 */

// ── Level 1 ────────────────────────────────────────────────────────────────

export const G1M1L1 = {
  lessonId: 'G1M1L1',
  title: '德國葡萄酒的世界地位',
  description: '探索德國葡萄酒為何在世界舞台上佔有不可取代的地位',
  objectives: ['了解德國的葡萄酒歷史', '認識德國葡萄酒的國際聲譽', '掌握德國葡萄酒的主要特色'],
  slides: [
    {
      type: 'title',
      title: '德國葡萄酒的世界地位',
      subtitle: 'Germany Wine — 2000 年的釀酒傳承',
      background: '#2c3e50'
    },
    {
      type: 'content',
      title: '🌍 德國葡萄酒的歷史',
      content: '德國的葡萄酒歷史超過 2000 年，可追溯至羅馬帝國時期。羅馬人沿萊茵河（Rhine）與摩澤爾河（Mosel）建立了最早的葡萄園，留下了延續至今的釀酒傳統。中世紀時期，修道院僧侶在德國各地培育葡萄品種，建立起今日許多著名酒莊的基礎。'
    },
    {
      type: 'list',
      title: '🏆 為什麼德國葡萄酒舉足輕重？',
      items: [
        { icon: '🍷', text: '全球最優秀的 Riesling 生產國，以礦物感與優雅酸度聞名' },
        { icon: '📍', text: '世界最北緯釀酒產區之一，氣候賦予葡萄獨特張力' },
        { icon: '📊', text: '13 個法定產區（Anbaugebiete），超過 100,000 公頃葡萄園' },
        { icon: '🌡', text: 'Spätburgunder（黑皮諾）是世界頂級紅酒之一' },
        { icon: '🍯', text: 'TBA / Eiswein 是甜葡萄酒的世界巔峰' }
      ]
    },
    {
      type: 'comparison',
      title: '德國 vs 法國葡萄酒風格比較',
      left: { label: '🇩🇪 德國', items: ['酸度明亮鮮活', '清爽輕盈為主', 'Riesling 主導', '甜度範圍廣（QbA 到 TBA）', '重視 Terroir 風土'] },
      right: { label: '🇫🇷 法國', items: ['結構飽滿圓潤', '酒體豐厚為主', 'Cabernet / Chardonnay', '多以不甜為主流', '重視 Appellation 產地'] }
    },
    {
      type: 'stats',
      title: '📊 德國葡萄酒數據',
      stats: [
        { label: '葡萄園面積', value: '103,000 公頃' },
        { label: '法定產區', value: '13 個 Anbaugebiete' },
        { label: '年產量', value: '约 90 億公升' },
        { label: '出口比例', value: '約 35%' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '德國最著名的白葡萄品種是？',
          options: ['Chardonnay', 'Riesling', 'Sauvignon Blanc', 'Silvaner'],
          answer: 1,
          explanation: 'Riesling 是德國最重要的白葡萄品種，以其礦物感、高酸度和多樣甜度風格著稱，是世界最偉大的白酒品種之一。'
        },
        {
          question: '德國葡萄酒歷史可追溯至哪個文明？',
          options: ['希臘文明', '羅馬帝國', '維京文明', '凱爾特文明'],
          answer: 1,
          explanation: '羅馬帝國士兵沿萊茵河與摩澤爾河建立了德國最早的葡萄園，距今超過 2000 年。'
        }
      ]
    }
  ]
}

export const G1M1L2 = {
  lessonId: 'G1M1L2',
  title: '德國葡萄酒分級制度 QbA & Prädikat',
  description: '深入理解德國獨特的葡萄酒分級制度',
  objectives: ['區分 Tafelwein、QbA、QmP', '掌握 Prädikat 六級甜度系統', '了解分級與採收成熟度的關聯'],
  slides: [
    {
      type: 'title',
      title: '德國葡萄酒分級制度',
      subtitle: 'Von Kabinett bis Trockenbeerenauslese',
      background: '#3d5a80'
    },
    {
      type: 'content',
      title: '🏛️ 德國分級制度概覽',
      content: '德國葡萄酒依據採收時葡萄的含糖量（Oechsle 度數）來決定等級，而非依照地塊或酒莊聲譽。這與法國波爾多或布根地的制度完全不同，創造了一套以「葡萄自然熟成程度」為核心的分級哲學。'
    },
    {
      type: 'timeline',
      title: '📈 分級系統由低到高',
      events: [
        { year: 'Tafelwein', title: '餐酒', desc: '最基礎等級，日常飲用' },
        { year: 'Landwein', title: '地區酒', desc: '地理標示，品質略高於餐酒' },
        { year: 'QbA', title: '特定產區優質葡萄酒', desc: '13 個 Anbaugebiete 生產，可加糖（Chaptalization）' },
        { year: 'Kabinett', title: 'QmP 第一級', desc: '正常成熟度採收，輕盈優雅' },
        { year: 'Spätlese', title: 'QmP 第二級', desc: '晚採（late harvest），豐潤甜美' },
        { year: 'Auslese', title: 'QmP 第三級', desc: '精選串，可甜可乾，濃郁複雜' },
        { year: 'Beerenauslese', title: 'QmP 第四級', desc: '逐粒精選，貴腐菌影響，濃甜' },
        { year: 'Trockenbeerenauslese', title: 'QmP 第六級', desc: 'TBA：乾縮逐粒精選，甜酒巔峰' },
        { year: 'Eiswein', title: 'QmP 特殊', desc: '冰凍採收，濃縮甜酸，極稀珍貴' }
      ]
    },
    {
      type: 'content',
      title: '🔍 Trocken & Halbtrocken',
      content: '德國葡萄酒中，Trocken（不甜）和 Halbtrocken（半甜）是描述成品酒中殘糖量的術語，與 Prädikat 等級無直接關係。例如，一瓶 Spätlese Trocken 是以晚採葡萄釀造但完全發酵至不甜的風格，保留了豐富的水果風味但無殘糖甜感。'
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '以下哪個是 Prädikat 等級中甜度最高的？',
          options: ['Spätlese', 'Auslese', 'Kabinett', 'Trockenbeerenauslese'],
          answer: 3,
          explanation: 'TBA（Trockenbeerenauslese）是德國 Prädikat 分級中最高等級，由乾縮的逐粒精選葡萄釀成，甜度極高，產量稀少。'
        },
        {
          question: 'QbA 與 QmP 的主要區別是？',
          options: ['產區不同', 'QbA 允許加糖，QmP 不允許', 'QmP 只能產自 Mosel', '兩者完全相同'],
          answer: 1,
          explanation: 'QbA（Qualitätswein bestimmter Anbaugebiete）允許加入糖分（Chaptalization）來提升酒精濃度；而 QmP（Prädikatswein）嚴禁加糖，葡萄必須達到自然成熟標準。'
        }
      ]
    }
  ]
}

export const G1M1L3 = {
  lessonId: 'G1M1L3',
  title: '13 個 Anbaugebiete 地理概覽',
  description: '認識德國所有法定葡萄酒產區的地理位置與特色',
  objectives: ['能在地圖上辨認所有 13 個產區', '了解各產區的主要地理特徵', '認識河流在德國葡萄酒中的重要性'],
  mapRegion: 'mosel',
  slides: [
    {
      type: 'title',
      title: '德國 13 個 Anbaugebiete',
      subtitle: '從 Ahr 到 Sachsen 的葡萄酒地圖',
      background: '#2c3e50'
    },
    {
      type: 'content',
      title: '🗺️ 為何河流是關鍵？',
      content: '德國的葡萄酒產區幾乎全部集中在重要河流沿岸。河流提供了三大功能：一、水域反射太陽光，提高葡萄的熱量吸收；二、河谷形成的微氣候保護葡萄免受霜害；三、陡峭的河岸坡地排水良好，並使根系深入岩床。這就是為何萊茵河（Rhine）、摩澤爾河（Mosel）、美因河（Main）的沿岸成為德國精華產酒地帶。'
    },
    {
      type: 'list',
      title: '🍷 西部核心產區',
      items: [
        { icon: '🌊', text: 'Mosel — 摩澤爾河谷，陡峭板岩坡，頂級 Riesling 聖地' },
        { icon: '🏰', text: 'Rheingau — 萊茵河南岸，傳統貴族產區' },
        { icon: '🌿', text: 'Rheinhessen — 德國最大產區，多元品種' },
        { icon: '💎', text: 'Nahe — 多種岩石地質，礦物感 Riesling' },
        { icon: '🔴', text: 'Ahr — 最著名的 Spätburgunder 紅酒產區' },
        { icon: '🏔️', text: 'Mittelrhein — 萊茵峽谷城堡景觀，少量精品' }
      ]
    },
    {
      type: 'list',
      title: '☀️ 南部與其他產區',
      items: [
        { icon: '🌞', text: 'Pfalz — 溫暖南境，紅白並重' },
        { icon: '☀️', text: 'Baden — 最南最溫暖，接近地中海風格' },
        { icon: '🍇', text: 'Württemberg — Trollinger 紅酒之鄉，Stuttgart 周邊' },
        { icon: '🏛️', text: 'Franken — Bocksbeutel 扁圓瓶，Silvaner 的故鄉' },
        { icon: '🌸', text: 'Hessische Bergstrasse — 德國最小產區之一' },
        { icon: '❄️', text: 'Saale-Unstrut & Sachsen — 東德兩個產區，大陸型氣候' }
      ]
    },
    {
      type: 'map_placeholder',
      title: '🗺️ 互動地圖探索',
      description: '點擊下方按鈕，在衛星地圖上探索 Mosel 的陡峭板岩坡與葡萄園分佈',
      mapRegion: 'mosel'
    },
    {      type: 'germany-regions-overview',
      title: '🌍 德國 13 大產區互動詳解',
      description: '點選任一產區查看詳細資訊。德國葡萄酒產區可分為三大類別：「經典 Riesling 核心」5 區（Mosel/Rheingau/Pfalz/Nahe/Rheinhessen）、「南部溫暖」4 區（Baden/Württemberg/Franken/Hessische Bergstraße）、「北/東部寒涼」4 區（Ahr/Mittelrhein/Saale-Unstrut/Sachsen）。'
    },
    {
      type: 'germany-region-map',
      title: '德國 13 個 Anbaugebiete 地圖',
      description: '從 Ahr（最北）到 Sachsen（最東）到 Baden（最南）——13 個 Anbaugebiete 的地理分布總覽',
      mapRegion: 'overview',
    },

    {      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '德國最大的葡萄酒產區是？',
          options: ['Mosel', 'Rheinhessen', 'Pfalz', 'Baden'],
          answer: 1,
          explanation: 'Rheinhessen 是德國面積最大的葡萄酒產區，擁有超過 27,000 公頃的葡萄園，種植品種最為多元。'
        },
        {
          question: '以下哪條河流對德國葡萄酒最重要？',
          options: ['多瑙河', '易北河', '萊茵河', '奧德河'],
          answer: 2,
          explanation: '萊茵河（Rhine）是德國最重要的葡萄酒河流，其支流摩澤爾河、那河（Nahe）、美因河等沿岸集中了德國最精華的葡萄酒產區。'        },
        {
          question: '「germany-regions-overview」互動探索中，以下哪個是屬於「北/東部寒涼」類別的產區？',
          options: ['Pfalz', 'Baden', 'Sachsen', 'Rheinhessen'],
          answer: 2,
          explanation: 'Sachsen（薩克森）位於德國最東、累列為全國高，與 Ahr/Mittelrhein/Saale-Unstrut 同屬「北東部寒涼」4 區。Pfalz 與 Baden 是南部溫曖，Rheinhessen 是經典 Riesling 核心。'        }
      ]
    }
  ]
}

export const G1M2L1 = {
  lessonId: 'G1M2L1',
  title: 'Riesling — 德國之王',
  description: '深入認識德國最偉大的葡萄品種',
  objectives: ['了解 Riesling 的風格特色', '認識不同產區的 Riesling 差異', '掌握 Riesling 的陳年潛力'],
  slides: [
    {
      type: 'title',
      title: 'Riesling — 德國之王',
      subtitle: '世界最偉大的白葡萄品種',
      background: '#6B4C9A'
    },
    {
      type: 'content',
      title: '🍇 Riesling 的本質',
      content: 'Riesling 是一種晚熟、高酸的白葡萄品種，原產於萊茵河地區，在德國找到了最完美的風土表達。它的薄皮使其容易感染貴腐菌（Botrytis），從而釀出頂級甜酒。Riesling 的最大特點是能忠實反映土壤特性，在板岩地上展現礦物感，在石灰岩地上呈現花香，是真正的 Terroir 品種。'
    },
    {
      type: 'list',
      title: '🌟 Riesling 的多樣風格',
      items: [
        { icon: '🌊', text: 'Mosel Riesling：輕盈（7.5-9% 酒精），礦物感強，汽油礦石香氣' },
        { icon: '🏰', text: 'Rheingau Riesling：中等酒體，優雅細膩，蜂蜜花香' },
        { icon: '💎', text: 'Nahe Riesling：礦物感突出，火成岩地質帶來獨特煙燻風味' },
        { icon: '🌞', text: 'Pfalz Riesling：酒體飽滿（可達 13%+），熱帶水果，豐潤感強' },
        { icon: '🌿', text: 'Rheinhessen Riesling：多元風格，從清爽到豐潤皆有' }
      ]
    },
    {
      type: 'comparison',
      title: 'Mosel vs Rheingau Riesling',
      left: { label: '🌊 Mosel', items: ['酒精低（7-9%）', '輕盈優雅', '板岩礦物感', '高酸低甜', '陡坡南向葡萄園', 'GG 頂園：Scharzhofberg、Bernkasteler Doctor'] },
      right: { label: '🏰 Rheingau', items: ['酒精較高（11-13%）', '圓潤豐滿', '石板黏土土壤', '均衡酒體', '平緩南坡', 'GG 頂園：Schloss Johannisberg、Rüdesheimer Berg'] }
    },
    {
      type: 'content',
    {
      type: 'germany-region-map',
      title: 'Riesling 五大核心產區地圖',
      description: '全球最精緻 Riesling 的產地——Mosel、Rheingau、Nahe、Rheinhessen、Pfalz 的相對位置',
      mapRegion: 'rhineCore',
      highlightFiles: ['mosel-region.geojson', 'rheingau-region.geojson', 'nahe-region.geojson', 'rheinhessen-region.geojson', 'pfalz-region.geojson'],
    },

      title: '⏳ Riesling 的陳年奇蹟',
      content: '頂級 Riesling 擁有驚人的陳年潛力。當年輕的 Riesling 帶著清新的柑橘、桃子香氣，陳年後會發展出「汽油味」（Petrol note）——這是 Riesling 成熟的重要標誌。10 年以上的 Mosel Auslese 可展現出蜂蜜、薑餅、杏桃乾的複雜層次；而 TBA 甚至可陳年 50 年以上。'
    },
    {      type: 'riesling-terroir',
      title: '🗺️ Riesling 風土全景探索',
      description: '點選 5 大產區，互動比較 Mosel 藍灯板巖、Rheingau 多元土壤、Pfalz 玄武巖、Nahe 「土壤博物館」、Rheinhessen 紅色斜坡的土壤 / 氣候 / 香氣 / 著名 Einzellage / 代表酒莊。同一 Riesling 品種在不同風土上的個性差異一目了然。'
    },
    {      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '哪個產區的 Riesling 酒精含量通常最低？',
          options: ['Pfalz', 'Rheingau', 'Mosel', 'Baden'],
          answer: 2,
          explanation: 'Mosel 的 Riesling 因緯度較高、氣候涼爽，葡萄含糖量較低，釀成的酒精度通常只有 7-9%，是德國最輕盈的 Riesling 風格。'
        },
        {
          question: '陳年 Riesling 的標誌性香氣是？',
          options: ['草莓果醬', '汽油礦石味', '烤橡木桶', '奶油香草'],
          answer: 1,
          explanation: '陳年 Riesling 中的「汽油味」（Petrol note）是由 TDN（三甲基二氫萘）化合物形成，被認為是頂級 Riesling 成熟的標誌，並非缺陷。'        },
        {
          question: '「riesling-terroir」探索中，「Mosel 藍色板岩」為 Riesling 帶來什麼關鍵香氣特徵？',
          options: ['熱帶水果、圓潤豐滿', '礦石、煙燻、高酸輕盈', '蜂蜜、花香、中等酒體', '蜂蠟、肉桂、濃縮感'],
          answer: 1,
          explanation: '藍色板岩（Blue Slate）反射熱量、儲熱並提供礦物質，讓 Mosel Riesling 產生明顯的礦石、煙燻與如板岩般刷舌的高酸，同時酒精低（7–9%）、酒體輕盈。'        }
      ]
    }
  ]
}

export const G1M2L2 = {
  lessonId: 'G1M2L2',
  title: '其他重要白葡萄品種',
  description: '認識德國除了 Riesling 之外的白葡萄品種',
  objectives: ['認識 Müller-Thurgau、Silvaner、Grauburgunder 等品種', '了解各品種的主要產區', '掌握各品種的口感特色'],
  slides: [
    {
      type: 'title',
      title: '德國其他白葡萄品種',
      subtitle: '多元品種的豐富世界',
      background: '#4a7c59'
    },
    {
      type: 'list',
      title: '🍇 德國五大白葡萄品種概覽',
      items: [
        { icon: '🌿', text: 'Müller-Thurgau：種植面積第二，清爽易飲，花香青蘋果，Rheinhessen 多見' },
        { icon: '🏛️', text: 'Silvaner：Franken 的靈魂品種，Bocksbeutel 扁圓瓶，礦物大地氣息' },
        { icon: '🌸', text: 'Grauburgunder（灰皮諾）：Baden Kaiserstuhl 最佳，豐潤杏桃蜂蜜' },
        { icon: '🥂', text: 'Weißburgunder（白皮諾）：清爽優雅，酸度鮮明，Sekt 重要基酒' },
        { icon: '🌾', text: 'Scheurebe：Riesling 子代，濃郁黑醋栗葡萄柚，Pfalz 頂級甜型驚艷' }
      ]
    },
    {
      type: 'germany-grape-profile',
      title: '🍇 德國五大白葡萄品種互動檔案',
      description: '點選 Müller-Thurgau / Silvaner / Grauburgunder / Weißburgunder / Scheurebe 查看各品種的完整檔案：主產區、風格指標、香氣、餐酒搭配與代表酒莊。'
    },
    {
      type: 'comparison',
      title: 'Silvaner vs Grauburgunder 風格對比',
      left: { label: '🏛️ Silvaner（乾爽礦物）', items: ['Franken Muschelkalk 石灰岩', '完全乾型為主', '大地礦石礦物感', '酒體中等，克制優雅', 'Bocksbeutel 標誌性瓶型', '白蘆筍的傳統伴侶'] },
      right: { label: '🌸 Grauburgunder（豐潤圓滑）', items: ['Baden Kaiserstuhl 火山岩最佳', '乾型但質感豐厚', '杏桃蜂蜜奶油香', '酒體飽滿圓潤', '德國最受歡迎白酒之一', '烤白肉、乳酪的理想搭配'] }
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Silvaner 葡萄品種最著名的產區是？',
          options: ['Mosel', 'Rheingau', 'Franken', 'Ahr'],
          answer: 2,
          explanation: 'Franken（法蘭克）是 Silvaner 的聖地，在此展現最佳表現，以扁圓形的 Bocksbeutel 瓶裝瓶，酒體乾爽，有著典型的礦物感與大地氣息。Muschelkalk（貝殼石灰岩）土壤是風土關鍵。'
        },
        {
          question: 'Scheurebe 品種最有代表性的香氣特徵是？',
          options: ['汽油礦石（陳年特徵）', '荔枝玫瑰香料', '黑醋栗與葡萄柚', '蜂蜜奶油杏桃'],
          answer: 2,
          explanation: 'Scheurebe 以濃郁的黑醋栗（Cassis）與葡萄柚香氣著稱，有時被描述為帶有貓鵝莓（Stachelbeere）的獨特芳香。這是源自其 Riesling 親本遺傳的高酸度加上自身特有的芳香化合物。Pfalz 頂級甜型版本尤其出色。'
        }
      ]
    }
  ]
}

export const G1M2L3 = {
  lessonId: 'G1M2L3',
  title: '德國紅葡萄品種',
  description: '了解德國出人意料的優質紅葡萄酒世界',
  objectives: ['認識 Spätburgunder（黑皮諾）在德國的表現', '了解 Trollinger、Lemberger 等品種', '掌握德國紅酒的主要產區'],
  slides: [
    {
      type: 'title',
      title: '德國的紅葡萄品種',
      subtitle: '不只有白酒的世界',
      background: '#8B1A1A'
    },
    {
      type: 'content',
      title: '🍷 德國是紅酒產地？',
      content: '許多人不知道，德國約有 35% 的葡萄種植的是紅葡萄品種，而 Spätburgunder（黑皮諾的德語名）在 Ahr 和 Baden 等地已釀出堪比勃根地的世界級紅酒。氣候暖化使德國紅酒品質不斷提升，成為全球葡萄酒界的熱門話題。'
    },
    {
      type: 'list',
      title: '🔴 德國主要紅葡萄品種',
      items: [
        { icon: '🌹', text: 'Spätburgunder（黑皮諾）：德國最頂級紅酒，Ahr、Baden 為精華' },
        { icon: '🍇', text: 'Trollinger：Württemberg 特產，輕盈清新，日常飲用型' },
        { icon: '💪', text: 'Lemberger（Blaufränkisch）：深色，單寧紮實，Württemberg 出色' },
        { icon: '🏚️', text: 'Dornfelder：晚熟，色深果濃，Pfalz 和 Rheinhessen 多見' },
        { icon: '🌸', text: 'Frühburgunder（黑皮諾變種）：早熟，花香迷人，Ahr 佳例' },
        { icon: '📚', text: 'Portugieser：輕盈低單寧，歷史悠久，Pfalz 常見' }
      ]
    },
    {
      type: 'comparison',
      title: 'Dornfelder vs Lemberger（Blaufränkisch）',
      left: { label: '🏚️ Dornfelder', items: ['1956 年育成的德國品種', 'Pfalz、Rheinhessen 最多', '色澤極深，幾乎不透光', '黑莓、黑李子、可可香氣', '單寧中等，平易近人', '多為日常飲用紅酒'] },
      right: { label: '💪 Lemberger（Blaufränkisch）', items: ['即奧地利 Blaufränkisch', 'Württemberg 最重要紅品種之一', '深色但略淺於 Dornfelder', '藍莓、黑胡椒、皮革香氣', '單寧紮實、酸度較高', '頂級版本可陳年 10–15 年'] }
    },
    {
      type: 'content',
      title: '🏆 Ahr — 德國紅酒聖地',
      content: 'Ahr 是德國最著名的紅酒產區，以 Spätburgunder 著稱。儘管地處德國北部（北緯 50.5 度），但陡峭的河谷地形與火山板岩土壤創造出溫暖的微氣候，使黑皮諾能完全成熟。Ahr 的頂級 Spätburgunder 呈現出勃根地般的優雅——鮮紅色澤、紅莓香料、細緻單寧，讓世界為之驚豔。'
    },
    {
      type: 'spatburgunder-regions',
    {
      type: 'germany-region-map',
      title: '德國紅葡萄主產區地圖',
      description: 'Ahr（最小最北）、Pfalz（最大）、Württemberg（產量最多）、Baden（最南）——德國紅酒四強的地理分布',
      mapRegion: 'overview',
      highlightFiles: ['ahr-region.geojson', 'pfalz-region.geojson', 'wuerttemberg-region.geojson', 'baden-freiburg-region.geojson', 'baden-karlsruhe-region.geojson'],
    },

      title: '🍷 Spätburgunder 四大產區風土對決',
      description: '互動深度比較 Ahr（火山板岩輕盈礦物）× Baden（最溫暖豐滿勃根地風）× Pfalz（均衡易飲）× Württemberg（傳統 Muschelkalk 白堊感）——風格光譜、土壤、頂級葡萄園（Ahr: Meyer-Näkel、Baden: Bernhard Huber）、與布根地對比，一張互動圖掌握德國紅酒四大天王。'
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Spätburgunder 是以下哪個品種的德語名稱？',
          options: ['Merlot', '黑皮諾（Pinot Noir）', 'Syrah', 'Grenache'],
          answer: 1,
          explanation: 'Spätburgunder 是德語「晚熟的布根地品種」的意思，即法語 Pinot Noir（黑皮諾）。在 Ahr 和 Baden 產區，Spätburgunder 釀出德國最頂級的紅酒。'
        },
        {
          question: 'Lemberger（Blaufränkisch）在德國主要種植於哪個產區？',
          options: ['Mosel', 'Rheingau', 'Baden', 'Württemberg'],
          answer: 3,
          explanation: 'Lemberger 即奧地利的 Blaufränkisch，在德國以 Württemberg 種植最多。此品種單寧紮實、酸度較高、帶有藍莓黑胡椒的香氣，頂級版本可陳年 10-15 年。Dornfelder 也以 Württemberg 和 Pfalz 為主要產地。'
        }
      ]
    }
  ]
}

export const G1M3L1 = {
  lessonId: 'G1M3L1',
  title: '如何閱讀德國酒標',
  description: '掌握德國酒標的各個重要資訊',
  objectives: ['能辨認產區、品種、年份、等級等關鍵資訊', '理解德國酒標的特殊元素', '掌握 Erzeugerabfüllung 等術語'],
  slides: [
    {
      type: 'title',
      title: '如何閱讀德國酒標',
      subtitle: '一張酒標包含的所有祕密',
      background: '#2c3e50'
    },
    {
      type: 'list',
      title: '🏷️ 德國酒標必讀要素',
      items: [
        { icon: '🗺️', text: '產區（Anbaugebiet）：如 Mosel、Pfalz、Rheingau 等 13 個之一' },
        { icon: '🍇', text: '葡萄品種（Rebsorte）：Riesling、Spätburgunder 等' },
        { icon: '📅', text: '年份（Jahrgang / Vintage）：如 2021、2019' },
        { icon: '🏅', text: 'Prädikat 等級：Kabinett / Spätlese / Auslese 等' },
        { icon: '🏠', text: '酒莊名稱（Weingut / Schloss / Burg）' },
        { icon: '🌾', text: '葡萄園名稱（Einzellage 或 Grosslage）：如 Bernkasteler Doctor' }
      ]
    },
    {
      type: 'content',
      title: '📖 重要德語術語解說',
      content: '• Erzeugerabfüllung / Gutsabfüllung：酒莊自行裝瓶（品質保證）\n• Einzellage：單一葡萄園（最精確的產地標示）\n• Grosslage：多個葡萄園集合區（較模糊）\n• Trocken：不甜（殘糖 < 9g/L）\n• Halbtrocken / Feinherb：半甜\n• Weißwein：白酒　Rotwein：紅酒\n• Sekt：氣泡酒'
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '德國酒標上的「Trocken」表示？',
          options: ['甜酒', '不甜', '半甜', '氣泡酒'],
          answer: 1,
          explanation: 'Trocken 在德語中是「乾燥/不甜」的意思，表示這款酒的殘糖量低（通常低於 9g/L），是偏不甜的風格。'
        },
        {
          question: '「Einzellage」代表什麼？',
          options: ['混調葡萄酒', '單一葡萄園', '整個產區', '酒莊聯盟'],
          answer: 1,
          explanation: 'Einzellage（複數 Einzellagen）是德語「單一葡萄園地塊」的意思，是德國最精確的產地標示，類似法國的 Premier Cru。'
        }
      ]
    }
  ]
}

export const G1M3L2 = {
  lessonId: 'G1M3L2',
  title: 'Prädikat 甜度等級詳解',
  description: '全面掌握德國 Prädikat 系統的六個等級',
  objectives: ['能精確描述每個 Prädikat 等級', '了解採收方式與糖度的關聯', '掌握各等級的典型風味'],
  slides: [
    {
      type: 'title',
      title: 'Prädikat 六級甜度系統',
      subtitle: '從 Kabinett 到 Trockenbeerenauslese',
      background: '#6B4C9A'
    },
    {
      type: 'list',
      title: '🍯 Prädikat 六級詳解',
      items: [
        { icon: '🌿', text: 'Kabinett：正常採收，最輕盈，8-9% 酒精，清爽易飲' },
        { icon: '🍑', text: 'Spätlese（晚採）：過熟採收，豐潤，有甜感或 Trocken' },
        { icon: '🌟', text: 'Auslese（精選）：特選熟串，可有貴腐影響，複雜甜美' },
        { icon: '🍯', text: 'Beerenauslese（BA）：逐粒精選，貴腐必需，濃甜蜂蜜' },
        { icon: '❄️', text: 'Eiswein（冰酒）：天然冰凍採收，濃縮甜酸，極稀有' },
        { icon: '👑', text: 'Trockenbeerenauslese（TBA）：乾縮逐粒精選，終極甜酒' }
      ]
    },
    {
      type: 'stats',
      title: '📊 Prädikat 等級指標',
      stats: [
        { label: 'Kabinett 最低 Oechsle', value: '67–82°Oe（依產區）' },
        { label: 'Spätlese 最低 Oechsle', value: '76–95°Oe' },
        { label: 'Auslese 最低 Oechsle', value: '83–105°Oe' },
        { label: 'TBA 最低 Oechsle', value: '150–154°Oe' }
      ]
    },
    {
      type: 'qmp-sweetness',
      title: '🍯 QmP 6 級甜度階梯互動詳解',
      description: '點選雘形階梯任一層查看詳細資訊：Oechsle°、潛在酒精、殘糖、採收與釀造、香氣、餐酒搭配、經典酒莊代表。從輕盈的 Kabinett（7-9% abv）一路進階到稀世 TBA（200+°Oe、単瓶總華可達£15,000+）。'
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Eiswein（冰酒）的特殊採收條件是？',
          options: ['陽光最充足時採收', '葡萄在藤上自然冰凍後採收', '有貴腐菌感染時採收', '最晚熟時採收'],
          answer: 1,
          explanation: 'Eiswein 必須在葡萄自然冰凍（通常攝氏零下 8 度以下）的狀態下採收，冰凍使水分結晶，壓榨時只取出濃縮的甜果汁，殘糖極高，酸度也極高。'
        },
        {
          question: '以下哪個 Prädikat 等級不需要貴腐菌（Botrytis）？',
          options: ['Beerenauslese', 'Trockenbeerenauslese', 'Eiswein', 'Auslese'],
          answer: 2,
          explanation: 'Eiswein 的甜度濃縮完全依賴低溫冰凍，不需要貴腐菌。事實上，健康的葡萄反而更利於釀造 Eiswein，因為貴腐菌會破壞葡萄的細胞結構，影響冰凍效果。'
        },
        {
          question: '「qmp-sweetness」階梯中，TBA（Trockenbeerenauslese）採收葡萄的最大特點在於？',
          options: ['葡萄自然冰凍', '完全貴腐菌感染的乾縮葡萄', '採摘尚未成熟的高酸葡萄', '夜間採收避免光照'],
          answer: 1,
          explanation: 'TBA 採用被貴腐菌（Botrytis）完全感染的乾縮葡萄，透過逐粒選摘去除水分並濃縮糖分，殘糖極高，通常在 150–154°Oe 以上。全程手工採摘，釀成品呈金黃色，陳年潛力可達 50 年以上。'
        }
      ]
    }
  ]
}

export const G1M3L3 = {
  lessonId: 'G1M3L3',
  title: 'VDP 頂級酒莊聯盟簡介',
  description: '了解德國最重要的葡萄酒分級組織',
  objectives: ['了解 VDP 的四級分類系統', '認識 VDP 與官方分級的關係', '掌握 VDP 成員酒莊的特色'],
  slides: [
    {
      type: 'title',
      title: 'VDP 頂級酒莊聯盟',
      subtitle: 'Verband Deutscher Prädikatsweingüter',
      background: '#1a3a1a'
    },
    {
      type: 'content',
      title: '🦅 什麼是 VDP？',
      content: 'VDP（頂級德國葡萄酒莊聯盟）成立於 1910 年，是德國最具影響力的葡萄酒品質組織。目前約有 200 家頂級酒莊成員，其標誌是一隻展翅老鷹配以葡萄圖案。VDP 建立了自己的四層分級制度，仿效布根地的 Grand Cru 概念，以葡萄園的地理特性和歷史聲譽來決定等級，補充了官方 QmP 系統的不足。'
    },
    {
      type: 'timeline',
      title: '🏆 VDP 四級分類（由低至高）',
      events: [
        { year: 'Gutswein', title: '酒莊酒', desc: '基礎等級，代表酒莊整體風格，平易近人' },
        { year: 'Ortswein', title: '村莊酒', desc: '特定村莊或次產區，展現地方特色' },
        { year: 'Erste Lage', title: '頭等葡萄園', desc: '卓越地塊，白酒標示 Erste Gewächs（EG），高品質' },
        { year: 'Grosse Lage', title: '特等葡萄園', desc: '最頂級地塊，白酒稱 Grosses Gewächs（GG），德國 Grand Cru' }
      ]
    },
    {
      type: 'list',
      title: '🌟 知名 VDP 酒莊',
      items: [
        { icon: '🌊', text: 'Mosel：Egon Müller、Joh. Jos. Prüm、Weingut Loosen' },
        { icon: '🏰', text: 'Rheingau：Schloss Johannisberg、Robert Weil' },
        { icon: '🌞', text: 'Pfalz：Bassermann-Jordan、Bürklin-Wolf' },
        { icon: '🔴', text: 'Ahr：Meyer-Näkel、Jean Stodden' },
        { icon: '🏛️', text: 'Franken：Horst Sauer、Rudolf Fürst' }
      ]
    },
    {
      type: 'vdp-classification',
      title: '👑 VDP 4 階金字塔互動詳解 + GG 重點解說',
      description: '點選金字塔任一層看規範 / 葡萄園 / 風格 / 價格與代表酒款。下方 4 卡詳解 Grosses Gewächs（GG）的定義、特色、例外、歷史——VDP 如何以 Burgundy Grand Cru 為藍本，在 2002 年建立德國「葡萄園分級」革命。'
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'VDP Grosse Lage 的白酒通稱為？',
          options: ['Grand Cru', 'Grosses Gewächs（GG）', 'Premier Cru', 'Spätlese'],
          answer: 1,
          explanation: 'VDP Grosse Lage（特等葡萄園）釀造的不甜白酒稱為 Grosses Gewächs（GG），相當於法國的 Grand Cru，代表德國最頂級的乾型白酒。'
        },
        {
          question: '「vdp-classification」中，VDP 金字塔 4 階由低到高的正確順序為？',
          options: ['Erste Lage → Gutswein → Grosse Lage → Ortswein', 'Gutswein → Ortswein → Erste Lage → Grosse Lage', 'Ortswein → Gutswein → Grosse Lage → Erste Lage', 'Grosse Lage → Erste Lage → Ortswein → Gutswein'],
          answer: 1,
          explanation: 'VDP 4 階金字塔由底到頂為：Gutswein（酒莊酒）→ Ortswein（村莊酒）→ Erste Lage（頭等葡萄園）→ Grosse Lage（特等葡萄園）。這個結構仿效勃艙第 Village/Premier Cru/Grand Cru 金字塔，從酒莊整體風格到單一頂級葡萄園逐層推進。'
        }
      ]
    }
  ]
}

export const G1M4L1 = {
  lessonId: 'G1M4L1',
  title: '德式餐酒搭配入門',
  description: '學習德國葡萄酒與食物的搭配基本原則',
  objectives: ['掌握 Riesling 的餐搭萬能特性', '了解德國美食與當地葡萄酒的搭配', '學習甜酸平衡的搭餐哲學'],
  slides: [
    {
      type: 'title',
      title: '德式餐酒搭配入門',
      subtitle: 'Riesling 的萬能搭配哲學',
      background: '#5D4037'
    },
    {
      type: 'content',
      title: '🍽️ 為何 Riesling 是完美搭餐酒？',
      content: 'Riesling 被許多侍酒師譽為「最完美的餐酒品種」，原因在於其高酸度能清潔味蕾、切穿油脂；而不同甜度的 Riesling 可搭配從清爽沙拉到濃郁醬汁的各式料理。特別是 Kabinett 與 Spätlese 的半甜款式，與亞洲料理（泰式、粵式、日式）形成驚人的和諧搭配。'
    },
    {
      type: 'list',
      title: '🥘 德國美食與葡萄酒搭配',
      items: [
        { icon: '🥩', text: '德國豬腳（Schweinshaxe）+ Pfalz Spätburgunder 紅酒' },
        { icon: '🐟', text: '萊茵河鱸魚（Lachsforelle）+ Mosel Kabinett Riesling' },
        { icon: '🧀', text: '德國白乳酪（Quark）+ Franken Silvaner Trocken' },
        { icon: '🌮', text: '豬肉酸菜（Sauerkraut）+ Rheinhessen Riesling Halbtrocken' },
        { icon: '🦐', text: '河蝦（Flusskrebs）+ Rheingau Riesling Spätlese' },
        { icon: '🍮', text: '蘋果蛋糕（Apfelstrudel）+ Pfalz Beerenauslese' }
      ]
    },
    {
      type: 'list',
      title: '🌏 Riesling 的亞洲料理搭檔',
      items: [
        { icon: '🍜', text: '廣東港式點心（蝦餃）→ 輕甜 Riesling Spätlese' },
        { icon: '🌶️', text: '泰式綠咖哩（辣）→ Riesling Auslese 甜度中和辣度' },
        { icon: '🍱', text: '日式壽司（鮭魚）→ Mosel Riesling Kabinett' },
        { icon: '🥟', text: '上海小籠包（豬肉）→ Pfalz Riesling Trocken' }
      ]
    },
    {
      type: 'riesling-pairing-matrix',
      title: '🍽️ Riesling 甜度 × 料理配對矩陣',
      description: '點選任一料理類型，查看 Kabinett / Spätlese / Auslese / TBA 四種甜度的配對評級——★ 極佳 ○ 良好 △ 可以 ✗ 避免'
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '搭配辛辣泰式料理，最適合選擇哪種德國葡萄酒？',
          options: ['Ahr Spätburgunder（不甜紅酒）', 'Riesling Auslese（半甜白酒）', 'Silvaner Trocken（不甜白酒）', 'Sekt（氣泡酒）'],
          answer: 1,
          explanation: '辛辣食物與帶有殘糖的甜型 Riesling 是黃金組合，甜度能中和辣感，高酸度清洗味蕾，Auslese 的豐潤果味也能與泰式香料形成美妙對話。'
        },
        {
          question: '以下哪道料理最適合搭配 Riesling Kabinett（不甜或極輕甜）？',
          options: ['四川麻辣火鍋', '藍紋乳酪（Roquefort）', '日式生魚片壽司', '蜂蜜杏仁甜點'],
          answer: 2,
          explanation: 'Riesling Kabinett 的高酸度與礦物感與日式生魚片是天作之合，礦石感呼應海洋鮮味，酸度清爽如醋漬醬汁。辣食需要甜型 Riesling；乳酪與甜點則需更甜的版本（Auslese / TBA）。'
        }
      ]
    }
  ]
}

export const G1FinalExam = {
  lessonId: 'G1FinalExam',
  title: 'Level 1 綜合評量',
  description: '測驗 Level 1 所有核心知識：產區地理、Prädikat 分級、品種認識、酒標解讀與餐酒搭配',
  objectives: ['驗證 Level 1 全部學習成果', '準備進入 Level 2 進階產區探索'],
  isFinalExam: true,
  slides: [
    {
      type: 'title',
      title: 'Level 1 綜合評量',
      subtitle: '德國葡萄酒入門知識全面測驗',
      background: '#2c3e50'
    },
    {
      type: 'list',
      title: '📋 評量範圍',
      items: [
        { icon: '🌍', text: '第一章：德國葡萄酒概論（地位、分級制度、13 大產區）' },
        { icon: '🍇', text: '第二章：核心品種認識（Riesling、白葡萄品種、紅葡萄品種）' },
        { icon: '🏷️', text: '第三章：德國酒標解讀（酒標要素、Prädikat 甜度六級、VDP）' },
        { icon: '🍽️', text: '第四章：德式餐酒搭配入門（配對原則、甜度矩陣）' }
      ]
    },
    {
      type: 'quiz',
      title: '📋 第一部分：產區與分級制度（5 題）',
      questions: [
        {
          question: '德國共有幾個法定葡萄酒產區（Anbaugebiete）？',
          options: ['9 個', '11 個', '13 個', '17 個'],
          answer: 2,
          explanation: '德國共有 13 個官方法定葡萄酒產區（Anbaugebiete），從北到南橫跨不同氣候帶，以萊茵河及其支流流域為主。'
        },
        {
          question: '德國 QbA 等級葡萄酒允許哪項釀造操作，而 QmP 等級不允許？',
          options: ['橡木桶陳年', '加糖（Chaptalization）', '混調不同品種', '提早採收'],
          answer: 1,
          explanation: 'QbA（特定產區優質葡萄酒）允許加糖（Chaptalization）以提高酒精度，而 QmP（Qualitätswein mit Prädikat）嚴格禁止加糖，完全依賴葡萄自然糖分。'
        },
        {
          question: 'Prädikat 系統中，哪個等級的採收葡萄必須完全天然冰凍（不能使用貴腐菌）？',
          options: ['Beerenauslese', 'Trockenbeerenauslese', 'Eiswein', 'Auslese'],
          answer: 2,
          explanation: 'Eiswein（冰酒）必須使用健康、未受貴腐菌感染的葡萄，在 -8°C 以下天然冰凍後採收。事實上，貴腐菌（Botrytis）對 Eiswein 有害，會破壞冰凍效果。TBA 才是需要貴腐菌的等級。'
        },
        {
          question: '以下哪個德國產區以種植 Spätburgunder（黑皮諾）紅酒聞名，且地處德國最北？',
          options: ['Pfalz', 'Baden', 'Ahr', 'Württemberg'],
          answer: 2,
          explanation: 'Ahr 位於德國北部（北緯 50.5 度），以頂級 Spätburgunder 紅酒著稱，是世界最北緯的優質紅酒產區之一。陡峭 V 字型峽谷創造出溫暖微氣候，使黑皮諾能夠完全成熟。'
        },
        {
          question: '德國面積最大的葡萄酒產區是？',
          options: ['Pfalz', 'Baden', 'Rheinhessen', 'Mosel'],
          answer: 2,
          explanation: 'Rheinhessen 是德國面積最大的葡萄酒產區，超過 27,000 公頃，種植品種最為多元。雖然過去以大量生產日常白酒聞名，但近年來新生代酒莊（Keller、Wittmann 等）徹底改變了形象。'
        }
      ]
    },
    {
      type: 'quiz',
      title: '📋 第二部分：品種與酒標（5 題）',
      questions: [
        {
          question: 'Riesling 陳年後出現的「汽油礦石香氣」是由哪種化合物形成？',
          options: ['乙酸乙酯', 'TDN（三甲基二氫萘）', '硫化氫', '丁二酸二乙酯'],
          answer: 1,
          explanation: 'TDN（1,1,6-三甲基-1,2-二氫萘）是 Riesling 陳年後特有的「汽油礦石香氣」來源，被視為頂級 Riesling 成熟的標誌而非缺陷。在 Mosel 板岩土壤的 Riesling 中尤為明顯。'
        },
        {
          question: 'Silvaner 在 Franken 產區最具代表性的包裝特色是什麼？',
          options: ['綠色高瓶（Alsace 瓶型）', '扁圓形 Bocksbeutel 瓶', '黑色磨砂玻璃瓶', '紅蠟封口傳統'],
          answer: 1,
          explanation: 'Franken 產區的 Silvaner 使用獨特的扁圓形 Bocksbeutel 瓶，這是歐盟保護的地理標誌，僅限 Franken 及少數其他產區使用。Silvaner 在此展現最佳的礦物感與大地氣息。'
        },
        {
          question: '德國酒標上「Erzeugerabfüllung」或「Gutsabfüllung」表示什麼？',
          options: ['這款酒使用橡木桶陳年', '酒莊自行採收並裝瓶（品質保證）', '這款酒通過有機認證', '產自單一葡萄園'],
          answer: 1,
          explanation: '「Erzeugerabfüllung」（生產者裝瓶）或「Gutsabfüllung」（莊園裝瓶）表示這款酒由釀造者本身裝瓶，而非交由大型酒商裝瓶，是品質的重要保證標誌。'
        },
        {
          question: 'Dornfelder 在德國主要種植於哪個產區？',
          options: ['Mosel', 'Ahr', 'Pfalz 和 Rheinhessen', 'Rheingau'],
          answer: 2,
          explanation: 'Dornfelder 是 1956 年育成的德國本土紅品種，以深色澤（幾乎不透光）和黑莓可可香氣著稱，主要集中在 Pfalz 和 Rheinhessen 兩大產區。'
        },
        {
          question: 'VDP 的最高等級葡萄園（Grosse Lage）釀造的乾型白酒稱為？',
          options: ['Auslese Trocken', 'Grosses Gewächs（GG）', 'Grand Cru Sec', 'Kabinett GG'],
          answer: 1,
          explanation: 'VDP Grosse Lage（頂級葡萄園）的乾型白酒稱為 Grosses Gewächs（簡稱 GG），是德國乾型白酒的最高等級，相當於布根地的 Grand Cru，手工採收、低產量（Riesling ≤50 hL/ha）。'
        }
      ]
    },
    {
      type: 'quiz',
      title: '📋 第三部分：產區特色與餐酒搭配（5 題）',
      questions: [
        {
          question: 'Mosel 板岩土壤最重要的功能是？',
          options: ['提供豐富氮磷養分', '白天吸熱夜晚緩慢釋放並反射光線', '保持大量水分防止乾旱', '增加土壤 pH 值'],
          answer: 1,
          explanation: 'Mosel 的板岩（Schiefer）土壤導熱性好，白天強烈吸收太陽熱能，夜晚緩慢釋放，配合河水反射的陽光，讓葡萄在北緯 50 度也能優雅成熟——這正是 Mosel Riesling 極低酒精（7-9%）卻充分成熟的秘密。'
        },
        {
          question: 'Rheingau 的 Schloss Johannisberg 在 1775 年因信使延誤創造了什麼歷史？',
          options: ['德國第一瓶氣泡酒', '史上第一瓶有記錄的 Spätlese', '第一瓶 TBA 甜酒', '第一個 VDP 認證'],
          answer: 1,
          explanation: '1775 年，Schloss Johannisberg 的採收許可信使延誤，葡萄因此過熟，修道院照常採收後，意外釀出了史上第一瓶有文獻記錄的 Spätlese，開創了德國晚採葡萄酒的傳統。'
        },
        {
          question: 'Franken 最具代表性的白葡萄品種是？',
          options: ['Riesling', 'Müller-Thurgau', 'Silvaner', 'Grauburgunder'],
          answer: 2,
          explanation: 'Silvaner 是 Franken 的靈魂品種，以貝殼石灰岩（Muschelkalk）土壤賦予的礦物感著稱。頂級老藤 Silvaner GG 是德國最被低估的頂級白酒之一，以扁圓形 Bocksbeutel 瓶裝瓶。'
        },
        {
          question: '搭配德國白蘆筍（Weißer Spargel）最傳統的葡萄酒選擇是？',
          options: ['Mosel Riesling TBA', 'Ahr Spätburgunder 紅酒', 'Franken Silvaner Trocken', 'Pfalz Gewürztraminer'],
          answer: 2,
          explanation: 'Franken Silvaner Trocken 是德國白蘆筍的傳統配對，兩者同為 Franken 文化象徵。Silvaner 的乾爽礦物感與白蘆筍的苦甘滋味相得益彰，是德國飲食文化中最具代表性的地方配對。'
        },
        {
          question: '搭配泰式麻辣料理，Riesling 甜度應選擇哪個等級最適合？',
          options: ['Kabinett（極輕甜或不甜）', 'Auslese（中高甜度）', 'Trocken（完全不甜）', 'Eiswein（極甜）'],
          answer: 1,
          explanation: '搭配辛辣料理時，Riesling Auslese 的甜度能有效中和口腔辣感灼熱，高酸度清洗味蕾，豐潤果香與泰式香料形成美妙共鳴。這也是亞洲頂級餐廳侍酒師的常用技巧。'
        }
      ]
    },
    {
      type: 'content',
      title: '🎉 Level 1 評量完成！',
      content: '恭喜完成德國葡萄酒 Level 1 全部課程與評量！\n\n您已掌握：\n• 德國 13 個 Anbaugebiete 產區地理概覽\n• QbA / QmP / Prädikat 六級分級制度\n• Riesling 的風土差異與陳年特性\n• Müller-Thurgau、Silvaner、Grauburgunder 等白葡萄品種\n• Spätburgunder、Dornfelder、Lemberger 等紅葡萄品種\n• 德國酒標解讀與 VDP 分級\n• Riesling 甜度配餐矩陣\n\n現在解鎖 Level 2——深入 13 大 Anbaugebiete 每個產區的風土、Einzellage 頂級葡萄園與名莊年份！'
    }
  ]
}

// ── Level 2 代表性 slide（其他課使用 fallback） ─────────────────────────────

export const G2M1L1 = {
  lessonId: 'G2M1L1',
  title: 'Mosel — 陡峭板岩的傳奇',
  description: '深入探索德國最著名的白酒產區',
  objectives: ['了解 Mosel 的地理與地質特色', '認識 Mosel 的頂級葡萄園', '掌握 Mosel Riesling 的特殊風格'],
  mapRegion: 'mosel',
  slides: [
    {
      type: 'title',
      title: 'Mosel — 德國葡萄酒的靈魂',
      subtitle: '陡峭板岩坡道上的 Riesling 傳奇',
      background: '#6B4C9A'
    },
    {
      type: 'content',
      title: '🌊 Mosel 的地理傳奇',
      content: 'Mosel 產區沿著蜿蜒的摩澤爾河延伸約 245 公里，從 Perl（德法盧三國交界）到 Koblenz（注入萊茵河口）。最優質的葡萄園位於河流的彎道內側，傾斜度高達 60-70 度，機械無法作業，全靠人工。板岩土壤白天吸熱，夜晚緩慢釋放，加上河水反射陽光，使葡萄即使在北緯 50 度也能達到優雅成熟。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Mosel 產區地圖',
      description: '沿摩澤爾河蜿蜒的陡峭板岩坡——德國最知名的 Riesling 產地，北緯 50° 的奇蹟',
      mapRegion: 'mosel',
      highlightFiles: ['mosel-region.geojson'],
    },

      title: '🏆 Mosel 頂級葡萄園（Grosse Lagen）',
      items: [
        { icon: '🌟', text: 'Scharzhofberg（Wiltingen）：被視為德國最偉大的白酒葡萄園之一' },
        { icon: '💊', text: 'Bernkasteler Doctor：中世紀傳說療癒大主教的神奇葡萄園' },
        { icon: '🌊', text: 'Wehlener Sonnenuhr（J.J. Prüm）：日晷為標誌的著名日照葡萄園' },
        { icon: '🔬', text: 'Ürziger Würzgarten：紅砂岩香料園，胡椒礦物氣息獨特' },
        { icon: '🏰', text: 'Erdener Treppchen：石階梯形葡萄園，陡峭驚人' }
      ]
    },
    {
      type: 'comparison',
      title: 'Mittelmosel vs Saar vs Ruwer',
      left: { label: '🌊 Mittelmosel', items: ['Bernkastel 至 Traben-Trarbach', '板岩，礦物感最強', '頂級葡萄園密集', 'Kabinett 至 TBA 全系列', 'Egon Müller、J.J. Prüm'] },
      right: { label: '💎 Saar & Ruwer', items: ['支流流域，更涼爽', '酸度更高，更緊緻', '好年份才出色', '礦物感尖銳鮮活', 'Egon Müller（Scharzhofberg）'] }
    },
    {
      type: 'mosel-trio',
      title: '🌊 Mosel 三大河流域互動對決',
      description: '深度互動比較 Mittelmosel（藍板岩精華核心）× Saar（最涼峭礦物鋒利）× Ruwer（最稀珍透明細膩）——分別展示各河流域的面積、土壤板岩類型、頂級 Grosse Lagen、代表酒莊（Egon Müller / J.J. Prüm / Von Schubert）以及盲品辨識捷徑。'
    },
    {
      type: 'map_placeholder',
      title: '🗺️ 探索 Mosel 葡萄園',
      description: '在衛星地圖上親眼看到 Mosel 陡峭坡道上的葡萄園分佈，感受風土的力量',
      mapRegion: 'mosel'
    },
    {
      type: 'stats',
      title: '📊 Mosel 數據',
      stats: [
        { label: '面積', value: '8,900 公頃' },
        { label: '主要品種', value: 'Riesling（63%）' },
        { label: '最陡坡度', value: '最高達 70°' },
        { label: '知名村莊', value: 'Bernkastel、Piesport、Wehlen、Ürzig' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Mosel 的板岩土壤對葡萄酒有何特別作用？',
          options: ['提供肥沃養分', '白天吸熱晚上緩慢釋放、並反射光線', '保持大量水分', '降低酸度'],
          answer: 1,
          explanation: 'Mosel 的板岩（Slate/Schiefer）土壤是這個產區的靈魂。板岩導熱性好，白天強烈吸收太陽熱能，夜晚緩慢釋放，保持葡萄園溫暖；同時板岩的黑色或藍色表面也能反射陽光，幫助葡萄在陡坡上充分成熟。'
        },
        {
          question: 'Scharzhofberg 葡萄園最著名的酒莊是？',
          options: ['Robert Weil', 'J.J. Prüm', 'Egon Müller', 'Dr. Loosen'],
          answer: 2,
          explanation: 'Egon Müller 是 Scharzhofberg 葡萄園最著名的生產者，其 Scharzhofberger TBA 是世界上最昂貴的德國葡萄酒之一，曾在拍賣會上創下天價紀錄。'
        }
      ]
    }
  ]
}

// ── Level 2 ────────────────────────────────────────────────────────────────

export const G2M1L2 = {
  lessonId: 'G2M1L2',
  title: 'Rheingau — 優雅 Riesling 的標竿',
  description: '探索萊茵河南岸最具貴族氣息的葡萄酒產區',
  objectives: ['了解 Rheingau 的地理與歷史背景', '認識 Rheingau 頂級葡萄園與代表酒莊', '掌握 Rheingau 與 Mosel 風格的差異'],
  slides: [
    {
      type: 'title',
      title: 'Rheingau — 優雅 Riesling 的標竿',
      subtitle: '萊茵河轉彎處的貴族產區',
      background: '#3d5a80'
    },
    {
      type: 'content',
      title: '🏰 Rheingau 的地理傳奇',
      content: 'Rheingau 是德國葡萄酒最具歷史地位的產區之一。萊茵河在此由西向東流，南岸的葡萄園因此享有難得的南向日照。北方的 Taunus 山脈如屏障般阻擋冷風，形成溫暖穩定的微氣候。全區面積約 3,285 公頃，Riesling 種植比例高達 80% 以上，是德國最集中的 Riesling 產區之一。酒風以結構飽滿、酒體豐潤、陳年潛力強著稱，與 Mosel 的輕盈纖細形成鮮明對比。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Rheingau 產區地圖',
      description: '萊茵河在此轉向西流，南向坡道 + Taunus 山屏障——Riesling 優雅風格的地理成因',
      mapRegion: 'rheingau',
      highlightFiles: ['rheingau-region.geojson'],
    },

      title: '🌟 Rheingau 頂級葡萄園',
      items: [
        { icon: '⛰️', text: 'Rüdesheimer Berg Schlossberg：陡峭板岩坡，酒體強勁，礦物氣息深邃' },
        { icon: '🌹', text: 'Rauenthaler Baiken：Robert Weil 旗艦園，以濃郁蜂蜜花香與細緻單寧聞名' },
        { icon: '🏛️', text: 'Erbacher Marcobrunn：萊茵河畔的歷史名園，石灰質土壤帶來豐潤質感' },
        { icon: '🍇', text: 'Hochheimer Domdechaney：遠離主產區的孤立精品，傳說英女王維多利亞鍾愛' },
        { icon: '🏰', text: 'Winkeler Hasensprung：黏土板岩混合，風格介於豐潤與礦物之間' }
      ]
    },
    {
      type: 'comparison',
      title: 'Rheingau vs Mosel Riesling 風格對比',
      left: { label: '🏰 Rheingau', items: ['酒精較高（11–13%）', '酒體豐滿圓潤', '黃桃、蜂蜜、花香', '黏土板岩混合土壤', '單寧感存在', '陳年後發展奶油核桃複雜度'] },
      right: { label: '🌊 Mosel', items: ['酒精偏低（7–9%）', '酒體輕盈纖細', '綠蘋果、檸檬、礦石', '純板岩土壤', '無單寧，純淨細長', '陳年後出現汽油礦石'] }
    },
    {
      type: 'stats',
      title: '📊 Rheingau 數據與代表酒莊',
      stats: [
        { label: '面積', value: '3,285 公頃' },
        { label: 'Riesling 比例', value: '超過 80%' },
        { label: '歷史里程碑', value: '1775 年 Schloss Johannisberg 首次 Spätlese' },
        { label: '代表酒莊', value: 'Robert Weil、Georg Breuer、Künstler、Schloss Johannisberg' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Rheingau 哪座酒莊在 1775 年首次意外釀出 Spätlese？',
          options: ['Robert Weil', 'Georg Breuer', 'Schloss Johannisberg', 'Künstler'],
          answer: 2,
          explanation: '1775 年，Schloss Johannisberg 的信使延誤送達採收許可，葡萄因此過熟。修道院決定照常採收，結果釀出了史上第一瓶有記錄的 Spätlese，開創了德國晚採葡萄酒的歷史。'
        },
        {
          question: '保護 Rheingau 免受北風侵襲的是哪座山脈？',
          options: ['阿爾卑斯山', 'Taunus 山脈', '黑森林', '哈茨山脈'],
          answer: 1,
          explanation: 'Taunus 山脈位於 Rheingau 北方，如天然屏障阻擋寒冷的北風，使葡萄園享有溫暖穩定的微氣候，有助於 Riesling 緩慢充分成熟。'
        }
      ]
    }
  ]
}

export const G2M1L3 = {
  lessonId: 'G2M1L3',
  title: 'Rheinhessen — 最大最多元的產區',
  description: '認識德國面積最大、品種最豐富的葡萄酒產區',
  objectives: ['了解 Rheinhessen 的地理規模與多元風格', '認識 Roter Hang 頂級紅土坡地', '掌握新生代酒莊的革命性影響'],
  slides: [
    {
      type: 'title',
      title: 'Rheinhessen — 最大最多元的產區',
      subtitle: '德國葡萄酒的心臟地帶',
      background: '#5c4a3a'
    },
    {
      type: 'content',
      title: '🗺️ Rheinhessen 的規模與多元',
      content: 'Rheinhessen 是德國面積最大的葡萄酒產區，超過 27,000 公頃，約佔全德葡萄園的四分之一。地形以丘陵起伏的高地（Hügelland）為主，土壤涵蓋黃土、砂岩、石灰岩、板岩等多種類型，造就了德國最多元的品種組合。從日常 Liebfraumilch 到世界級 GG Riesling，Rheinhessen 幾乎能呈現德國葡萄酒的完整光譜。近年來，以 Nierstein 的 Roter Hang 紅土坡為核心，新一代精品酒莊重新定義了這個產區的頂點。'
    },
    {
      type: 'list',
      title: '🔴 Roter Hang — 紅土坡的頂級地帶',
      items: [
        { icon: '🟥', text: 'Roter Hang（紅坡）：Nierstein 與 Oppenheim 之間沿萊茵河的紅色砂岩坡地' },
        { icon: '🌅', text: '南向陡坡直面萊茵河，水面反射強化日照，紅砂岩儲熱效果佳' },
        { icon: '🌟', text: 'Niersteiner Hipping、Pettenthal、Brudersberg 是 VDP Grosse Lage 頂園' },
        { icon: '💎', text: 'Oppenheimer Herrenberg：石灰岩與板岩混合，另有細膩礦物風格' },
        { icon: '🏆', text: 'Roter Hang 的 GG Riesling 被譽為 Rheinhessen 的皇冠寶石' }
      ]
    },
    {
      type: 'comparison',
      title: 'Roter Hang vs Hügelland 品質對比',
      left: { label: '🔴 Roter Hang（頂級）', items: ['萊茵河沿岸紅砂岩坡地', 'VDP Grosse Lage 等級', '酒體豐潤，礦物感強烈', 'Riesling 占主導', '世界級陳年潛力', '代表：Keller、Wittmann'] },
      right: { label: '🌾 Hügelland（日常）', items: ['內陸丘陵高地', '多元品種齊種', '風格清爽易飲', '大量 Müller-Thurgau', '年輕即飲型', '合理價位，日常佳選'] }
    },
    {
      type: 'stats',
    {
      type: 'germany-region-map',
      title: 'Rheinhessen 產區地圖',
      description: '德國最大產區（27,000 公頃）——Mainz 至 Worms 之間廣闊丘陵地帶的範圍',
      mapRegion: 'rheinhessen',
      highlightFiles: ['rheinhessen-region.geojson'],
    },

      title: '📊 Rheinhessen 關鍵數據',
      stats: [
        { label: '面積', value: '27,000+ 公頃（全德最大）' },
        { label: '主要品種', value: 'Riesling、Müller-Thurgau、Dornfelder' },
        { label: '頂級核心', value: 'Roter Hang — Nierstein、Oppenheim' },
        { label: '新生代代表酒莊', value: 'Keller、Wittmann、Battenfeld-Spanier、St. Antony' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Rheinhessen 的 Roter Hang（紅坡）因什麼土壤而得名？',
          options: ['火山玄武岩', '紅色砂岩', '紅色黏土', '紅色花崗岩'],
          answer: 1,
          explanation: 'Roter Hang（紅坡）因沿萊茵河的紅色砂岩（Rotliegend）坡地而得名，這種古老紅砂岩儲熱效果優異，加上南向河岸的水面反射，為 Riesling 提供絕佳成熟條件。'
        },
        {
          question: '以下哪個酒莊是 Rheinhessen 新生代的代表人物？',
          options: ['Egon Müller', 'Robert Weil', 'Klaus Peter Keller', 'Schloss Johannisberg'],
          answer: 2,
          explanation: 'Klaus Peter Keller（Weingut Keller）是 Rheinhessen 新一代精品酒莊的領軍人物，其 Kirchspiel GG 與 Hubacker GG 等 Riesling 已躋身德國乃至全球最受追捧的頂級白酒之列。'
        }
      ]
    }
  ]
}

export const G2M1L4 = {
  lessonId: 'G2M1L4',
  title: 'Nahe — 礦物感的隱藏寶藏',
  description: '發現德國地質最多元、礦物感最豐富的葡萄酒產區',
  objectives: ['了解 Nahe 的多元地質構造', '認識 Nahe 頂級葡萄園與世界級酒莊', '掌握上 Nahe 與下 Nahe 的風格差異'],
  slides: [
    {
      type: 'title',
      title: 'Nahe — 礦物感的隱藏寶藏',
      subtitle: '德國的「地質博物館」產區',
      background: '#2d5016'
    },
    {
      type: 'content',
      title: '💎 Nahe 的地質奇蹟',
      content: 'Nahe 位於 Rheinhessen 西南方，沿那河（Nahe River）延伸，面積約 4,150 公頃。這個產區最特別之處在於地質多樣性——從板岩、石英岩、斑岩（Porphyry）到火山岩，幾乎是德國所有土壤類型的縮影，因此被稱為「土壤博物館」。不同土壤為 Riesling 賦予截然不同的礦物表達：斑岩帶來煙燻胡椒香，石英岩增添鋼鐵礦石感，板岩提供細膩酸度張力。Nahe 的 Riesling 兼具 Mosel 的精緻礦物與 Rheingau 的豐潤深度，是行家公認的隱藏寶藏。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Nahe 產區地圖',
      description: 'Rheinhessen 西南方沿那河延伸——「土壤博物館」的地理位置，緊鄰 Mosel 與 Rheingau',
      mapRegion: 'nahe',
      highlightFiles: ['nahe-region.geojson'],
    },

      title: '🏆 Nahe 頂級葡萄園',
      items: [
        { icon: '🌟', text: 'Niederhäuser Hermannshöhle：Dönnhoff 旗艦園，板岩與斑岩，德國最偉大 Riesling 之一' },
        { icon: '⛏️', text: 'Schlossböckelheimer Kupfergrube（銅礦坑）：舊銅礦地，火山岩土，獨特煙燻礦物感' },
        { icon: '🔶', text: 'Monzinger Halenberg：Emrich-Schönleber 名園，板岩坡地，精緻細長風格' },
        { icon: '🏔️', text: 'Norheimer Kirschheck：Schäfer-Fröhlich 精品，石英岩土，酸度鋒利鮮活' },
        { icon: '🌿', text: 'Roxheimer Höllenpfad：砂岩黏土，風格較豐潤，適合早飲' }
      ]
    },
    {
      type: 'comparison',
      title: '上 Nahe vs 下 Nahe 風格對比',
      left: { label: '⛰️ 上 Nahe（Obere Nahe）', items: ['Monzingen、Bad Kreuznach 上游', '板岩為主，較涼爽', '酒體豐潤，礦物感厚重', '適合陳年', '代表：Emrich-Schönleber', '風格：深邃、層次豐富'] },
      right: { label: '🌊 下 Nahe（Untere Nahe）', items: ['Schlossböckelheim 下游', '斑岩、火山岩、石英岩', '礦物感更尖銳細緻', '酸度更鮮明', '代表：Dönnhoff', '風格：透明、精準、礦石感強'] }
    },
    {
      type: 'stats',
      title: '📊 Nahe 關鍵數據',
      stats: [
        { label: '面積', value: '4,150 公頃' },
        { label: '主要品種', value: 'Riesling（28%）、Müller-Thurgau、Dornfelder' },
        { label: '土壤類型', value: '板岩、石英岩、斑岩、火山岩（德國最多元）' },
        { label: '世界級酒莊', value: 'Dönnhoff、Emrich-Schönleber、Schäfer-Fröhlich' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Nahe 產區最著名的世界級酒莊是？',
          options: ['Egon Müller', 'Helmut Dönnhoff', 'Robert Weil', 'J.J. Prüm'],
          answer: 1,
          explanation: 'Helmut Dönnhoff（Weingut Dönnhoff）是 Nahe 最具國際聲譽的酒莊，其 Niederhäuser Hermannshöhle GG 被評酒家 Jancis Robinson 等列為德國最偉大 Riesling 之一，代表了 Nahe 礦物感的最高境界。'
        },
        {
          question: 'Schlossböckelheimer Kupfergrube 葡萄園名稱中「Kupfergrube」的意思是？',
          options: ['城堡山頂', '銅礦坑', '石灰岩坡', '河流彎道'],
          answer: 1,
          explanation: 'Kupfergrube 在德語中是「銅礦坑」的意思，這個葡萄園舊址曾是採銅礦的地點，遺留下富含火山岩與礦物質的特殊土壤，賦予 Riesling 獨特的煙燻礦石香氣，是 Nahe 最具辨識度的葡萄園之一。'
        }
      ]
    }
  ]
}

export const G2M2L1 = {
  lessonId: 'G2M2L1',
  title: 'Pfalz — 溫暖豐潤的南境',
  description: '探索德國第二大、最溫暖的主要葡萄酒產區',
  objectives: ['了解 Pfalz 的地理氣候優勢', '認識 Mittelhaardt 頂級 Riesling 地帶', '掌握 Pfalz 與南部多元品種的特色'],
  slides: [
    {
      type: 'title',
      title: 'Pfalz — 溫暖豐潤的南境',
      subtitle: '德國的「義大利花園」',
      background: '#8B4513'
    },
    {
      type: 'content',
      title: '☀️ Pfalz 的溫暖優勢',
      content: 'Pfalz 是德國面積第二大的葡萄酒產區，約 23,800 公頃，也是德國最溫暖的主要產區之一。西側的 Haardt 山脈（孚日山脈的北延伸）是天然屏障，阻擋了大西洋帶來的雨水，使 Pfalz 成為德國陽光最充足、降雨最少的地區。德國文豪歌德曾稱讚此地是「德國的義大利花園」，這裡無花果、杏仁樹、栗子樹與葡萄藤並生，展現了德國罕見的地中海風情。Pfalz 的 Riesling 因此展現出更飽滿豐潤的風格，酒精度可達 13% 以上，與 Mosel 的輕盈纖細截然不同。'
    },
    {
      type: 'list',
      title: '🏆 Mittelhaardt — 頂級 Riesling 心臟地帶',
      items: [
        { icon: '🌟', text: 'Forster Kirchenstück：VDP Grosse Lage，玄武岩與石灰岩，德國最偉大 Riesling 之一' },
        { icon: '🍑', text: 'Forster Jesuitengarten：火山玄武岩，Bassermann-Jordan 名園，豐潤花香' },
        { icon: '🏰', text: 'Deidesheimer Hohenmorgen：黏土石灰岩，Dr. Bürklin-Wolf 旗艦，結構飽滿' },
        { icon: '🍇', text: 'Wachenheimer Gerümpel：板岩砂岩，精緻礦物，Bürklin-Wolf 精品' },
        { icon: '🌿', text: 'Ruppertsberger Reiterpfad：黏土玄武岩，Müller-Catoir 精品，香料感強' }
      ]
    },
    {
      type: 'comparison',
      title: 'Mittelhaardt vs 南部 Weinstrasse 風格對比',
      left: { label: '⭐ Mittelhaardt（頂級）', items: ['Deidesheim、Forst、Wachenheim', '玄武岩、石灰岩，儲熱強', '頂級 Riesling，豐潤複雜', 'VDP Grosse Lage 集中地', '世界級陳年潛力', '代表：Bürklin-Wolf、Bassermann-Jordan'] },
      right: { label: '🌈 Südliche Weinstrasse（多元）', items: ['南部葡萄酒之路', '多元品種：Pinot、Dornfelder', '清爽易飲為主', '觀光產業發達', '平易近人價格', '代表：Friedrich Becker（頂級 Pinot）'] }
    },
    {
      type: 'stats',
    {
      type: 'germany-region-map',
      title: 'Pfalz 產區地圖',
      description: '德國第二大產區——Haardt 山脈東側的溫暖葡萄酒帶，北接 Rheinhessen，南鄰阿爾薩斯',
      mapRegion: 'pfalz',
      highlightFiles: ['pfalz-region.geojson'],
    },

      title: '📊 Pfalz 關鍵數據',
      stats: [
        { label: '面積', value: '23,800 公頃（全德第二）' },
        { label: '主要品種', value: 'Riesling（24%）、Dornfelder、Müller-Thurgau' },
        { label: '氣候', value: '德國最溫暖主要產區，年均日照最長' },
        { label: '代表酒莊', value: 'Dr. Bürklin-Wolf、Bassermann-Jordan、Müller-Catoir、Friedrich Becker' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '哪座山脈為 Pfalz 提供天然屏障，使其成為德國最溫暖產區？',
          options: ['Taunus 山脈', 'Haardt 山脈', '黑森林', '奧登瓦爾德山'],
          answer: 1,
          explanation: 'Haardt 山脈是法國孚日山脈（Vosges）的北延伸，為 Pfalz 西側提供天然屏障，阻擋大西洋濕潤氣流帶來的降雨，使 Pfalz 成為德國陽光最豐沛、最溫暖的主要產區。'
        },
        {
          question: 'Pfalz 最頂級的 Riesling 主要集中在哪個次產區？',
          options: ['Südliche Weinstrasse', 'Mittelhaardt', 'Unterhaardt', 'Vorderpfalz'],
          answer: 1,
          explanation: 'Mittelhaardt（中部哈特）是 Pfalz 最精華的地帶，以 Deidesheim、Forst、Wachenheim 三鎮為核心，集中了德國頂級 Riesling 葡萄園，Bürklin-Wolf 與 Bassermann-Jordan 等百年名莊均在此地。'
        }
      ]
    }
  ]
}

export const G2M2L2 = {
  lessonId: 'G2M2L2',
  title: 'Baden — 最接近地中海的德國',
  description: '探索德國最南端、最溫暖、以 Pinot 系品種著稱的產區',
  objectives: ['了解 Baden 的地理特色與氣候優勢', '認識 Kaiserstuhl 火山地帶', '掌握 Baden Spätburgunder 的勃根地風格'],
  slides: [
    {
      type: 'title',
      title: 'Baden — 最接近地中海的德國',
      subtitle: '德國最南、最暖的葡萄酒王國',
      background: '#1a3a1a'
    },
    {
      type: 'content',
      title: '☀️ Baden 的地理奇觀',
      content: 'Baden 是德國最南端的葡萄酒產區，從博登湖（Bodensee）北岸一路延伸 470 公里至 Heidelberg 附近，面積約 16,000 公頃，地跨德國最長的葡萄酒地帶。西與法國阿爾薩斯隔萊茵河相望，共享相近的風土，但各自發展出獨特個性。Baden 年均氣溫全德最高，夏季酷熱，葡萄成熟度極佳，因此 Spätburgunder（黑皮諾）在此展現出最豐滿的果實感，被譽為「德國的勃根地」。'
    },
    {
      type: 'list',
      title: '🌋 Kaiserstuhl — 火山造就的奇蹟',
      items: [
        { icon: '🌋', text: 'Kaiserstuhl（皇帝寶座）：萊茵河平原中的熄火玄武岩火山群' },
        { icon: '🌡️', text: '全德最溫暖微氣候：玄武岩吸熱效果強，夜溫不低，葡萄成熟度極高' },
        { icon: '🍷', text: '主種 Spätburgunder（黑皮諾）與 Grauburgunder（灰皮諾）' },
        { icon: '🏆', text: '頂級葡萄園：Ihringer Winklerberg、Achkarrer Schlossberg' },
        { icon: '🌿', text: '土壤：玄武岩、黃土、火山石，礦物感強且酒體飽滿' }
      ]
    },
    {
      type: 'comparison',
      title: 'Kaiserstuhl vs Markgräflerland 風格對比',
      left: { label: '🌋 Kaiserstuhl（火山豐潤）', items: ['玄武岩、火山土壤', 'Spätburgunder 豐滿飽滿', '酒精度高（可達 14%+）', '礦物感與果實濃郁並存', '代表：Bernhard Huber、Salwey', 'Pinot Noir 可媲美南勃根地'] },
      right: { label: '🇨🇭 Markgräflerland（瑞士邊境輕盈）', items: ['接近瑞士Basel，石灰岩土', 'Gutedel（Chasselas）為特色品種', '酒體清爽輕盈', '優雅細緻，酸度明亮', '代表：Ziereisen', '風格接近瑞士與阿爾薩斯'] }
    },
    {
      type: 'stats',
    {
      type: 'germany-region-map',
      title: 'Baden 產區地圖',
      description: '德國最南、最長的產區——470 公里從博登湖延伸至 Heidelberg，緊鄰法國阿爾薩斯',
      mapRegion: 'baden',
      highlightFiles: ['baden-freiburg-region.geojson', 'baden-karlsruhe-region.geojson'],
    },

      title: '📊 Baden 關鍵數據',
      stats: [
        { label: '面積', value: '16,000 公頃' },
        { label: '南北長度', value: '470 公里（全德最長）' },
        { label: 'Spätburgunder 比例', value: '約 37%（德國最高）' },
        { label: '代表酒莊', value: 'Bernhard Huber、Ziereisen、Salwey、Dr. Heger' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Baden 的 Kaiserstuhl（皇帝寶座）是什麼地形？',
          options: ['萊茵河三角洲', '熄火的玄武岩火山群', '冰河沉積高地', '古代海床石灰岩台地'],
          answer: 1,
          explanation: 'Kaiserstuhl 是萊茵河平原中突起的熄火玄武岩火山群，玄武岩的深色表面吸熱效果極佳，加上四周平原無遮蔽、全日照，形成全德國最溫暖的葡萄園微氣候，使 Spätburgunder 能達到驚人的成熟度。'
        },
        {
          question: 'Baden 種植最多的紅葡萄品種是？',
          options: ['Trollinger', 'Dornfelder', 'Spätburgunder', 'Lemberger'],
          answer: 2,
          explanation: 'Spätburgunder（黑皮諾）在 Baden 的種植比例約達 37%，是德國種植 Spätburgunder 比例最高的產區，以 Kaiserstuhl 和 Breisgau 地帶的表現最為出色，酒風豐滿濃郁，被譽為德國的勃根地。'
        }
      ]
    }
  ]
}

export const G2M2L3 = {
  lessonId: 'G2M2L3',
  title: 'Württemberg — Trollinger 紅酒之鄉',
  description: '認識德國最重要的紅酒產區，以及當地獨特的 Trollinger 文化',
  objectives: ['了解 Württemberg 的地理中心與氣候', '認識 Trollinger 等特色紅葡萄品種', '掌握 Württemberg 的次產區與代表酒莊'],
  slides: [
    {
      type: 'title',
      title: 'Württemberg — Trollinger 紅酒之鄉',
      subtitle: '斯圖加特周邊的 70% 紅酒王國',
      background: '#6B1A1A'
    },
    {
      type: 'content',
      title: '🍷 Württemberg 的紅酒文化',
      content: 'Württemberg 是德國紅酒比例最高的產區，約 70% 的葡萄園種植紅葡萄品種，面積約 11,500 公頃。德國南部城市 Stuttgart（斯圖加特）是這個產區的中心，葡萄園沿內卡河（Neckar River）及其支流蜿蜒延伸。Württemberg 最具地方特色的品種是 Trollinger，這種幾乎只在此地種植的紅葡萄釀出清淡粉紅般的紅酒，是當地人日常飲用的「鄉土酒」。此外，Lemberger（Blaufränkisch）和 Schwarzriesling（Pinot Meunier）也在此有精彩表現，為外地人提供了更令人驚艷的選擇。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Württemberg 產區地圖',
      description: '斯圖加特為中心沿內卡河延伸——德國紅酒比例最高的產區（70% 紅葡萄）',
      mapRegion: 'wuerttemberg',
      highlightFiles: ['wuerttemberg-region.geojson'],
    },

      title: '🍇 Württemberg 特色葡萄品種',
      items: [
        { icon: '🌸', text: 'Trollinger：德語「南蒂羅爾人」，幾乎只產於 Württemberg，酒色淡、果香清新、低單寧、微酸' },
        { icon: '💪', text: 'Lemberger（Blaufränkisch）：深色、單寧結實、黑莓香料，是 Württemberg 最有個性的紅品種' },
        { icon: '🌿', text: 'Schwarzriesling（Pinot Meunier）：「黑 Riesling」，即 Meunier，花香柔美、中等酒體' },
        { icon: '🔶', text: 'Spätburgunder：在 Württemberg 也有種植，但比例低於 Baden' },
        { icon: '🌟', text: 'Riesling：白酒中最重要品種，Remstal 次產區表現出色' }
      ]
    },
    {
      type: 'list',
      title: '🗺️ 主要次產區與代表酒莊',
      items: [
        { icon: '🏙️', text: 'Stuttgart 市區葡萄園：市區內即有葡萄園，罕見的城中酒鄉景觀' },
        { icon: '🌊', text: 'Remstal：Riesling 與 Trollinger 並重，清爽風格' },
        { icon: '☀️', text: 'Heilbronn：溫暖乾燥，Lemberger 表現尤佳' },
        { icon: '🏰', text: 'Graf Adelmann：百年老莊，Lemberger 專家，精緻傳統' },
        { icon: '🌿', text: 'Aldinger：現代精品，Spätburgunder 與 Lemberger 並列優秀' },
        { icon: '🌟', text: 'Karl Haidle：Remstal 精品，Riesling 與 Trollinger 雙線並行' }
      ]
    },
    {
      type: 'stats',
      title: '📊 Württemberg 關鍵數據',
      stats: [
        { label: '面積', value: '11,500 公頃' },
        { label: '紅酒比例', value: '約 70%（全德最高）' },
        { label: '最具特色品種', value: 'Trollinger（幾乎僅見於此地）' },
        { label: '產區中心', value: 'Stuttgart；次產區 Remstal、Heilbronn' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Trollinger 葡萄品種的特色是？',
          options: ['酒色深黑、單寧強勁', '酒色淡、果香清新、低單寧', '高糖度、適合釀甜酒', '只適合白酒釀造'],
          answer: 1,
          explanation: 'Trollinger 是 Württemberg 的標誌品種，釀出的紅酒酒色偏淡（接近深粉紅），果香清新，單寧低，酸度適中，是當地人每日餐酒的最愛。這種親民易飲的風格讓外地人常感到意外。'
        },
        {
          question: 'Lemberger 在其他國家的常見名稱是？',
          options: ['Pinot Meunier', 'Blaufränkisch', 'Dornfelder', 'Portugieser'],
          answer: 1,
          explanation: 'Lemberger 是 Württemberg 對這個品種的稱呼，在奧地利稱為 Blaufränkisch（藍色弗蘭肯），在匈牙利稱為 Kékfrankos。這個品種在 Württemberg 釀出深色、單寧結實、黑莓香料風格的精品紅酒。'
        }
      ]
    }
  ]
}

export const G2M2L4 = {
  lessonId: 'G2M2L4',
  title: 'Franken — Bocksbeutel 的故鄉',
  description: '探索以獨特扁圓瓶和 Silvaner 著稱的巴伐利亞葡萄酒產區',
  objectives: ['了解 Franken 的地理位置與巴伐利亞文化背景', '認識 Bocksbeutel 特殊瓶型與 Silvaner 品種', '掌握 Franken 兩大次產區的風格差異'],
  slides: [
    {
      type: 'title',
      title: 'Franken — Bocksbeutel 的故鄉',
      subtitle: '巴伐利亞的葡萄酒驕傲',
      background: '#4a3728'
    },
    {
      type: 'content',
      title: '🏛️ Franken 的獨特身份',
      content: 'Franken（法蘭克）是德國唯一位於巴伐利亞邦（Bavaria）的主要葡萄酒產區，面積約 6,200 公頃。產區中心是歷史名城 Würzburg，美因河（Main River）在此蜿蜒穿過，葡萄園沿河岸起伏分佈。Franken 最具辨識度的特徵有兩項：一是獨特的 Bocksbeutel（公羊睾丸瓶），這種扁圓形玻璃瓶是 Franken 法定使用的瓶型；二是以 Silvaner 為靈魂品種，在貝殼石灰岩（Muschelkalk）土壤上展現出礦物感十足、乾爽飽滿的獨特風格，與德國其他地區的葡萄酒截然不同。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Franken 產區地圖',
      description: '巴伐利亞邦的葡萄酒王國——沿美因河蜿蜒，Würzburg 為中心，遠離萊茵河系',
      mapRegion: 'franken',
      highlightFiles: ['franken-region.geojson'],
    },

      title: '🍾 Franken 的重要元素',
      items: [
        { icon: '🫙', text: 'Bocksbeutel：Franken 法定特殊扁圓瓶，歷史可追溯至 18 世紀，為產區最強視覺標誌' },
        { icon: '🌿', text: 'Silvaner：Franken 靈魂品種（22%），乾爽、大地礦物感，Muschelkalk 土壤最佳表達' },
        { icon: '🐚', text: 'Muschelkalk（貝殼石灰岩）：主要土壤，貝殼化石豐富，賦予 Silvaner 獨特礦物與鹹感' },
        { icon: '🏰', text: '著名村莊：Würzburg（大學城）、Escherndorf（Lump 頂園）、Iphofen（Julius-Echter-Berg）' },
        { icon: '🏛️', text: '歷史機構酒莊：Bürgerspital（市民醫院）、Juliusspital（朱利葉斯醫院），中世紀傳承' }
      ]
    },
    {
      type: 'comparison',
      title: 'Maindreieck vs Steigerwald 風格對比',
      left: { label: '🐚 Maindreieck（石灰岩礦物）', items: ['美因河三角彎道核心地帶', 'Muschelkalk 貝殼石灰岩主導', 'Silvaner 礦物感、鹹感明顯', '酸度清脆，酒體中等', '代表：Bürgerspital、Juliusspital', '風格：乾爽、精緻、礦石鮮明'] },
      right: { label: '🟤 Steigerwald（砂岩豐潤）', items: ['東側 Steigerwald 森林丘陵', '砂岩、黏土土壤', '酒體更豐潤、果實更濃', '深色品種 Domina 也有種植', '代表：Rudolf Fürst（頂級 Spätburgunder）', '風格：飽滿、圓潤、層次豐富'] }
    },
    {
      type: 'stats',
      title: '📊 Franken 關鍵數據',
      stats: [
        { label: '面積', value: '6,200 公頃' },
        { label: '主要品種', value: 'Silvaner（22%）、Müller-Thurgau、Bacchus、Riesling' },
        { label: '代表瓶型', value: 'Bocksbeutel 扁圓瓶（法定）' },
        { label: '代表酒莊', value: 'Bürgerspital、Juliusspital、Rudolf Fürst、Horst Sauer' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Franken 最具代表性的葡萄品種是？',
          options: ['Riesling', 'Müller-Thurgau', 'Silvaner', 'Grauburgunder'],
          answer: 2,
          explanation: 'Silvaner 是 Franken 的靈魂品種，在貝殼石灰岩（Muschelkalk）土壤上展現出乾爽飽滿、礦物感十足的獨特風格。德國其他產區的 Silvaner 很難達到 Franken 的深度與複雜性。'
        },
        {
          question: 'Bocksbeutel 是什麼？',
          options: ['一種 Riesling 的陳年技術', 'Franken 法定特殊扁圓形葡萄酒瓶', '一個葡萄酒村莊的名稱', '一種葡萄品種'],
          answer: 1,
          explanation: 'Bocksbeutel 是 Franken 獨有的法定瓶型，外形扁圓，傳說形似公羊睾丸（Bock = 公羊）。這種瓶型歷史悠久，是 Franken 葡萄酒最強的視覺識別標誌，其他德國產區不得使用此瓶型。'
        }
      ]
    }
  ]
}

export const G2M3L1 = {
  lessonId: 'G2M3L1',
  title: 'Ahr — 德國紅酒聖地',
  description: '探索德國最小卻最精英的紅酒產區',
  objectives: ['了解 Ahr 如何在北緯 50 度釀出優秀紅酒', '認識 Ahr 的地形與土壤優勢', '掌握 Ahr 與 Pfalz 的 Spätburgunder 風格差異'],
  slides: [
    {
      type: 'title',
      title: 'Ahr — 德國紅酒聖地',
      subtitle: '北緯 50 度的黑皮諾奇蹟',
      background: '#4a0000'
    },
    {
      type: 'content',
      title: '🔴 Ahr 的驚人成就',
      content: 'Ahr 位於德國萊茵河支流阿爾河（Ahr）的河谷地帶，是德國最小的傳統葡萄酒產區之一，面積僅約 565 公頃。地處北緯 50.5 度，理論上難以讓紅葡萄充分成熟，然而 Ahr 卻以 Spätburgunder（黑皮諾）稱霸德國紅酒界。其秘密在於：陡峭的 V 字型峽谷地形將冷空氣排出，灰瓦岩與板岩吸熱蓄溫，南向坡道捕捉最多陽光，三重優勢造就了 Ahr 酒的優雅細膩——紅莓、丁香、細緻單寧，是德國最精緻的紅酒風格之一。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Ahr 產區地圖',
      description: '北緯 50.5° 的 Spätburgunder 聖地——V 字型峽谷阻擋冷風，灰瓦岩蓄熱的地理奇蹟',
      mapRegion: 'ahr',
      highlightFiles: ['ahr-region.geojson'],
    },

      title: '🏆 Ahr 頂級葡萄園與代表酒莊',
      items: [
        { icon: '🌟', text: 'Walporzheimer Gärkammer：板岩土壤，Meyer-Näkel 旗艦，濃郁深邃' },
        { icon: '⛪', text: 'Dernauer Pfarrwingert：教堂田，灰瓦岩土，風格優雅精緻' },
        { icon: '🏆', text: 'Rech Herrenberg：高坡板岩，Deutzerhof 名園，結構飽滿' },
        { icon: '🌹', text: 'Meyer-Näkel：Ahr 最著名現代酒莊，國際評級屢創新高' },
        { icon: '🍷', text: 'Stodden（Jean Stodden）：傳統百年老莊，Blaufüsser Lay 頂園' },
        { icon: '🏰', text: 'Kreuzberg：精品小莊，細膩礦物風格，行家首選' }
      ]
    },
    {
      type: 'comparison',
      title: 'Ahr vs Pfalz Spätburgunder 風格對比',
      left: { label: '🔴 Ahr（涼爽優雅）', items: ['北緯 50.5°，涼爽氣候', '灰瓦岩、板岩土壤', '酒色偏深寶石紅', '紅莓、花香、礦石', '單寧絲滑細緻', '陳年後展現藥草皮革層次'] },
      right: { label: '☀️ Pfalz（溫暖飽滿）', items: ['溫暖南境，充足陽光', '黏土、砂岩、玄武岩', '酒色深紅濃紫', '黑莓、李子、香料', '單寧更豐厚', '飽滿圓潤，易飲型強'] }
    },
    {
      type: 'stats',
      title: '📊 Ahr 關鍵數據',
      stats: [
        { label: '面積', value: '565 公頃（全德最小之一）' },
        { label: 'Spätburgunder 比例', value: '約 65%' },
        { label: '緯度', value: '北緯 50.5°（全德最北紅酒產區之一）' },
        { label: '代表酒莊', value: 'Meyer-Näkel、Deutzerhof、Jean Stodden、Kreuzberg' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Ahr 能在高緯度釀出優質紅酒的主要原因是？',
          options: ['暖流通過，氣候特別溫暖', '陡峭 V 字型峽谷地形排出冷空氣，板岩吸熱蓄溫', '使用特殊加熱設備', '引進抗寒葡萄品種'],
          answer: 1,
          explanation: 'Ahr 的 V 字型峽谷地形是關鍵：陡峭峽谷將冷空氣排出河谷，灰瓦岩與板岩土壤白天吸收熱量並緩慢釋放，南向坡道最大化日照，加上河水反射陽光，三重自然優勢使 Spätburgunder 能在北緯 50 度完全成熟。'
        },
        {
          question: 'Ahr 產區最主要的葡萄品種是？',
          options: ['Riesling', 'Trollinger', 'Spätburgunder', 'Silvaner'],
          answer: 2,
          explanation: 'Spätburgunder（黑皮諾）佔 Ahr 葡萄種植面積的約 65%，是絕對主導品種。Ahr 以其優雅細膩的 Spätburgunder 紅酒聞名全球，被認為是德國最精緻紅酒的代名詞。'
        }
      ]
    }
  ]
}

export const G2M3L2 = {
  lessonId: 'G2M3L2',
  title: 'Mittelrhein — 城堡峽谷的珍釀',
  description: '探索萊茵峽谷世界遺產地帶的小型精品葡萄酒產區',
  objectives: ['了解 Mittelrhein 的地理位置與世遺背景', '認識當地 Riesling 的風格特色', '掌握 Mittelrhein 面臨的挑戰與機遇'],
  slides: [
    {
      type: 'title',
      title: 'Mittelrhein — 城堡峽谷的珍釀',
      subtitle: 'UNESCO 世界遺產萊茵峽谷的葡萄酒',
      background: '#2c3e50'
    },
    {
      type: 'content',
      title: '🏰 Mittelrhein 的世遺風景',
      content: 'Mittelrhein（中萊茵）是德國最小的葡萄酒產區之一，面積僅約 430 公頃。這段萊茵河峽谷——從 Bingen 至 Koblenz——在 2002 年被列為 UNESCO 世界文化遺產。陡峭的岩壁上聳立著數十座中世紀城堡，葡萄園就嵌在其間，坡度高達 45–65 度，景觀壯麗但農作極為費力。泥盆紀板岩（Devonian Slate）是主要土壤，為 Riesling 提供清爽礦物感與高酸張力。Mittelrhein 的 Riesling 以其精瘦清澈、礦石感鮮明著稱，是行家眼中的寶藏。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Mittelrhein 產區地圖',
      description: 'Bingen 至 Koblenz 的 UNESCO 世遺峽谷——430 公頃，德國最小且最難耕作的產區',
      mapRegion: 'mittelrhein',
      highlightFiles: ['mittelrhein-region.geojson'],
    },

      title: '🌊 Mittelrhein 的特色與挑戰',
      items: [
        { icon: '🏰', text: '城堡景觀：Loreley 峭壁、萊茵石堡等數十座古堡，吸引大量觀光客' },
        { icon: '⛰️', text: '超陡斜坡：坡度 45–65°，無法機械化，全靠人工，勞動成本極高' },
        { icon: '🚫', text: '葡萄藤廢棄問題：高勞力低利潤，導致部分坡地被放棄，面積持續萎縮' },
        { icon: '💎', text: 'Riesling 75%+：泥盆紀板岩賦予礦石感與高酸，極具個性' },
        { icon: '🚢', text: '萊茵河遊輪觀光：帶動當地酒莊直接銷售，旅遊與葡萄酒共生' }
      ]
    },
    {
      type: 'list',
      title: '🍷 Mittelrhein 代表酒莊',
      items: [
        { icon: '🌟', text: 'Toni Jost：Bacharach 名莊，Hahn 頂園 Riesling，礦物感強烈鮮活' },
        { icon: '🏆', text: 'Ratzenberger：Bacharach 精品，傳統釀造，陳年潛力強' },
        { icon: '🌿', text: 'Florian Weingart：現代新生代，Boppard Hamm 頂園，清爽細緻' },
        { icon: '🍾', text: 'Matthias Müller：Spay 村莊，多樣風格探索，性價比高' }
      ]
    },
    {
      type: 'stats',
      title: '📊 Mittelrhein 關鍵數據',
      stats: [
        { label: '面積', value: '430 公頃（德國最小產區之一）' },
        { label: 'Riesling 比例', value: '超過 75%' },
        { label: '世界遺產', value: 'UNESCO 萊茵峽谷世界文化遺產（2002年）' },
        { label: '主要土壤', value: '泥盆紀板岩（Devonian Slate）' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Mittelrhein 在 2002 年獲得什麼國際認可？',
          options: ['德國最佳葡萄酒產區獎', 'UNESCO 萊茵峽谷世界文化遺產', '歐盟 DOC 最高等級認證', '全球最佳旅遊目的地'],
          answer: 1,
          explanation: 'Mittelrhein 所在的萊茵峽谷（Upper Middle Rhine Valley，從 Bingen 至 Koblenz）在 2002 年被 UNESCO 列為世界文化遺產，認可其壯麗的城堡峽谷景觀、歷史文化價值，以及陡峭坡地上的傳統葡萄種植文化。'
        },
        {
          question: 'Mittelrhein 最大的生產挑戰是什麼？',
          options: ['氣候過於寒冷', '土壤貧瘠', '超陡坡地無法機械化、勞力成本過高', '市場需求不足'],
          answer: 2,
          explanation: 'Mittelrhein 的葡萄園坡度高達 45–65 度，完全無法使用機械作業，一切農活必須靠人工完成。這使得生產成本極高，利潤空間有限，導致許多農民選擇放棄坡地葡萄園，過去幾十年來面積持續萎縮，是這個產區面臨的最大生存挑戰。'
        }
      ]
    }
  ]
}

export const G2M3L3 = {
  lessonId: 'G2M3L3',
  title: 'Hessische Bergstrasse — 德國最早的春天',
  description: '認識德國面積最小的官方葡萄酒產區',
  objectives: ['了解 Hessische Bergstrasse 的地理與氣候特色', '認識產區主要品種與生產者', '掌握這個隱藏小產區的獨特魅力'],
  slides: [
    {
      type: 'title',
      title: 'Hessische Bergstrasse — 德國最早的春天',
      subtitle: '杏花盛開的德國最小官方產區',
      background: '#5c6bc0'
    },
    {
      type: 'content',
      title: '🌸 Hessische Bergstrasse 的春日傳奇',
      content: 'Hessische Bergstrasse（黑森山道）是德國面積最小的官方葡萄酒產區，僅約 455 公頃。「Bergstrasse」意為「山道」，這條古老的貿易道路沿 Odenwald 山脈（奧登瓦爾德）西麓而行，如今葡萄園就分佈於此。這個產區最著名的特色是德國最早到來的春天——每年 2 月底至 3 月初，Bensheim 與 Heppenheim 的杏仁樹（Mandelbaum）率先開花，成為當地的傳統春日節慶。Odenwald 山脈為葡萄園提供天然屏障，使氣溫偏暖，春季回溫特別早，是德國獨特的「春天前哨站」。'
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Hessische Bergstraße 產區地圖',
      description: 'Odenwald 山脈西麓的德國最小官方產區（455 公頃）——鄰近 Rheinhessen 與 Pfalz，德國最早到春天的葡萄酒地帶',
      mapRegion: 'hessische',
      highlightFiles: ['hessische-region.geojson'],
    },

      title: '🍇 Hessische Bergstrasse 的特色',
      items: [
        { icon: '🌸', text: '最早春天：2–3 月杏花先開，是德國春天的第一站，觀光吸引力強' },
        { icon: '🏔️', text: 'Odenwald 保護：山脈東側為葡萄園阻擋冷空氣，微氣候溫暖穩定' },
        { icon: '🍇', text: 'Riesling 主導：50% 以上種植 Riesling，清爽礦物風格' },
        { icon: '🤝', text: '合作社主導：Bergsträsser Winzer eG 合作社生產大部分產量' },
        { icon: '🏘️', text: '主要城鎮：Bensheim（產區中心）、Heppenheim（北部重心）' },
        { icon: '🔒', text: '在地消費：大多數葡萄酒在當地售罄，不易外銷，是「本地珍寶」' }
      ]
    },
    {
      type: 'stats',
      title: '📊 Hessische Bergstrasse 關鍵數據',
      stats: [
        { label: '面積', value: '455 公頃（全德官方最小產區）' },
        { label: '主要品種', value: 'Riesling（超過 50%）、Spätburgunder、Müller-Thurgau' },
        { label: '主要生產者', value: 'Bergsträsser Winzer eG 合作社' },
        { label: '特色', value: '德國最早春天，杏花節，在地消費為主' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Hessische Bergstrasse 以什麼現象著稱於德國？',
          options: ['德國最晚採收的葡萄', '德國最早到來的春天（杏花最早開放）', '德國最陡峭的葡萄園', '德國最多城堡的產區'],
          answer: 1,
          explanation: 'Hessische Bergstrasse 因 Odenwald 山脈的保護，氣候偏暖，每年 2 月底至 3 月初，Bensheim 和 Heppenheim 的杏仁樹率先開花，成為德國春天最早到來的象徵，並有傳統的杏花節慶活動。'
        },
        {
          question: 'Hessische Bergstrasse 的大部分葡萄酒由誰生產？',
          options: ['個人精品酒莊', 'Bergsträsser Winzer eG 合作社', '跨國酒商', '政府公營酒廠'],
          answer: 1,
          explanation: 'Bergsträsser Winzer eG 是 Hessische Bergstrasse 最重要的生產者，以合作社形式整合了大多數葡萄農的產量。由於這個產區面積極小，大部分葡萄酒在當地即被消費，外銷量極少，是名符其實的「本地珍寶」。'
        }
      ]
    }
  ]
}

export const G2M3L4 = {
  lessonId: 'G2M3L4',
  title: 'Saale-Unstrut & Sachsen — 東德新生',
  description: '認識兩個在德國統一後重生的東德葡萄酒產區',
  objectives: ['了解 Saale-Unstrut 與 Sachsen 的地理差異', '認識東德葡萄酒在統一後的重建歷程', '掌握兩個產區的主要品種與代表酒莊'],
  slides: [
    {
      type: 'title',
      title: 'Saale-Unstrut & Sachsen — 東德新生',
      subtitle: '1990 年德國統一後的葡萄酒復興',
      background: '#37474f'
    },
    {
      type: 'content',
      title: '🌱 東德葡萄酒的歷史重生',
      content: 'Saale-Unstrut 與 Sachsen 是德國最東、最北的葡萄酒產區，在中世紀曾有輝煌歷史，但在東德共產時期（1949–1990）遭到嚴重破壞——葡萄園被集體農莊化，品質一落千丈。1990 年兩德統一後，這兩個產區展開了艱難的重建旅程，引進西德技術、重植優質品種、重建酒莊文化。如今，Saale-Unstrut 的 800 公頃與 Sachsen 的 500 公頃，雖然規模依然很小，卻已出現一批令人驚喜的精品酒莊，代表德國葡萄酒最具潛力的新興力量。'
    },
    {
      type: 'comparison',
      title: 'Saale-Unstrut vs Sachsen 比較',
      left: { label: '🌊 Saale-Unstrut', items: ['面積約 800 公頃', 'Naumburg 為中心城市', '大陸型氣候：冬寒夏熱', '土壤：貝殼石灰岩、砂岩', '主種：Müller-Thurgau、Weißburgunder', '代表：Lützkendorf、Pawis'] },
      right: { label: '🏞️ Sachsen（薩克森）', items: ['面積約 500 公頃', 'Meißen、Dresden 易北河沿岸', '更北更涼，全歐最北葡萄酒區之一', '土壤：花崗岩、黃土、片岩', '主種：Riesling、Müller-Thurgau、Weißburgunder', '代表：Klaus Zimmerling、Schloss Proschwitz'] }
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: '東德產區地圖',
      description: 'Saale-Unstrut（Naumburg 一帶）與 Sachsen（Dresden 易北河沿岸）——德國最東、最北的葡萄酒前哨陣地',
      mapRegion: 'eastern',
      highlightFiles: ['saale-unstrut-region.geojson', 'sachsen-region.geojson'],
    },

      title: '🍇 東德產區的品種與特色',
      items: [
        { icon: '🌿', text: 'Müller-Thurgau：兩個產區種植最廣，清爽易飲，適合當地涼爽氣候' },
        { icon: '🥂', text: 'Weißburgunder（白皮諾）：適應力強，在 Saale-Unstrut 表現出色' },
        { icon: '🌾', text: 'Silvaner：在 Saale-Unstrut 的石灰岩土壤上展現不錯的礦物感' },
        { icon: '🍇', text: 'Riesling：在 Sachsen 的花崗岩土壤上有精彩表現，是未來明星' },
        { icon: '🔬', text: 'Klaus Zimmerling（Sachsen）：以法國陶罐（amphora）釀造，自然派先驅' },
        { icon: '🏆', text: 'Lützkendorf（Saale-Unstrut）：VDP 成員，有機農業，最具代表性酒莊' }
      ]
    },
    {
      type: 'stats',
      title: '📊 東德兩產區關鍵數據',
      stats: [
        { label: 'Saale-Unstrut 面積', value: '約 800 公頃，以 Naumburg 為中心' },
        { label: 'Sachsen 面積', value: '約 500 公頃，沿易北河 Meißen 至 Dresden' },
        { label: '歷史分水嶺', value: '1990 年德國統一，開始重建' },
        { label: '主要品種', value: 'Müller-Thurgau、Weißburgunder、Silvaner、Riesling' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Saale-Unstrut 與 Sachsen 在東德時期遭遇了什麼命運？',
          options: ['被評為東歐最佳葡萄酒產區', '葡萄園被集體農莊化，品質嚴重下滑', '完全停止釀酒', '引進了蘇聯的先進釀造技術'],
          answer: 1,
          explanation: '在東德共產時期（1949–1990），這兩個產區的葡萄園被納入集體農莊管理，強調產量而非品質，傳統的精品釀造文化幾乎斷絕。1990 年德國統一後才開始重建，引進西德技術與市場機制，逐漸恢復往日水準。'
        },
        {
          question: 'Sachsen 的葡萄園主要沿哪條河流分佈？',
          options: ['萊茵河', '摩澤爾河', '易北河', '美因河'],
          answer: 2,
          explanation: 'Sachsen（薩克森）的葡萄園沿易北河（Elbe）兩岸分佈，以陶瓷名城 Meißen 和文化名城 Dresden（德勒斯登）為中心。這裡是全歐洲最北端的葡萄酒產區之一，寒冷的大陸型氣候使葡萄釀出清爽緊張的風格。'
        }
      ]
    }
  ]
}

export const G2M4L1 = {
  lessonId: 'G2M4L1',
  title: 'Eiswein 與 TBA — 甜酒巔峰',
  description: '深入理解德國最頂級兩種甜酒的採收、釀造與差異',
  objectives: ['清楚區分 Eiswein 與 TBA 的本質差異', '了解兩者的採收條件與釀造過程', '認識世界頂級甜酒的價格與收藏價值'],
  slides: [
    {
      type: 'title',
      title: 'Eiswein 與 TBA — 甜酒巔峰',
      subtitle: '世界最昂貴葡萄酒的秘密',
      background: '#1a0a3a'
    },
    {
      type: 'content',
      title: '👑 德國甜酒的兩個極致',
      content: 'TBA（Trockenbeerenauslese）與 Eiswein（冰酒）是德國 Prädikat 系統中最頂級、最稀有的兩個等級，也是世界上最昂貴的葡萄酒之一。兩者都達到極高的糖分濃縮，但原理完全不同：TBA 仰賴貴腐菌（Botrytis cinerea）慢慢分解葡萄皮、蒸發水分、濃縮糖酸；Eiswein 則依靠冬日低溫，使葡萄中的水分結冰，在榨汁時排出水分、留下濃縮液。最關鍵的區別：TBA 需要感染貴腐病的葡萄，而 Eiswein 需要完全健康的葡萄在低溫下天然冰凍。'
    },
    {
      type: 'comparison',
      title: 'TBA vs Eiswein 核心差異',
      left: { label: '🍯 TBA（Trockenbeerenauslese）', items: ['需要貴腐菌（Botrytis）感染', '葡萄乾縮成葡萄乾狀態', '150+ Oechsle 最低含糖量', '顏色深金至琥珀', '蜂蜜、番紅花、焦糖香氣', '可陳年 50 年以上'] },
      right: { label: '❄️ Eiswein（冰酒）', items: ['不需要貴腐菌（健康葡萄）', '葡萄在 -8°C 以下天然冰凍', '120+ Oechsle（依產區）', '顏色清澈金黃', '芒果、荔枝、蜂蜜酸甜', '陳年潛力同樣驚人'] }
    },
    {
      type: 'list',
      title: '🌟 世界頂級甜酒代表酒莊',
      items: [
        { icon: '👑', text: 'Egon Müller（Scharzhofberg TBA）：多次拍賣破世界紀錄，一瓶 TBA 可達數萬歐元' },
        { icon: '🌊', text: 'Dr. Loosen（Mosel）：Ürziger Würzgarten Eiswein，芳香濃郁' },
        { icon: '💎', text: 'Dönnhoff（Nahe）：Hermannshöhle Eiswein，礦物酸甜均衡' },
        { icon: '🍯', text: 'Joh. Jos. Prüm（Mosel）：Wehlener Sonnenuhr Auslese/BA，傳奇甜酒' },
        { icon: '🏆', text: 'Keller（Rheinhessen）：近年 TBA 品質令人驚豔，列入頂尖行列' }
      ]
    },
    {
      type: 'stats',
      title: '📊 TBA 與 Eiswein 關鍵數據',
      stats: [
        { label: 'TBA 最低 Oechsle', value: '150–154°Oe（依產區而異）' },
        { label: 'Eiswein 採收溫度', value: '-8°C 以下（通常冬季深夜採收）' },
        { label: '陳年潛力', value: 'TBA 50 年以上；Eiswein 30–50 年' },
        { label: '價格範圍', value: '頂級 TBA 每瓶可達數千至數萬歐元' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Eiswein 的釀造最關鍵的要求是什麼？',
          options: ['葡萄必須感染貴腐菌', '在 -8°C 以下天然冰凍且葡萄必須健康', '必須在陽光最強的午後採收', '葡萄必須在橡木桶中發酵'],
          answer: 1,
          explanation: 'Eiswein 有兩個核心要求：一、葡萄必須在 -8°C 以下的低溫中天然冰凍；二、葡萄必須健康（沒有貴腐菌感染）。冰凍使水分結晶，榨汁時只留下高度濃縮的甜酸汁液。若葡萄感染了貴腐菌，其細胞結構被破壞，冰凍效果就會打折扣，無法達到 Eiswein 的標準。'
        },
        {
          question: '哪個酒莊的 TBA 曾在拍賣會上創下德國葡萄酒世界紀錄高價？',
          options: ['Robert Weil', 'Dönnhoff', 'Egon Müller', 'J.J. Prüm'],
          answer: 2,
          explanation: 'Egon Müller 的 Scharzhofberger TBA 是世界上最昂貴的德國葡萄酒。Egon Müller 的 TBA 多次在拍賣市場創下驚人高價，曾有單瓶達到數萬歐元的成交紀錄，被公認為德國甜酒的最高象徵。'
        }
      ]
    }
  ]
}

export const G2M4L2 = {
  lessonId: 'G2M4L2',
  title: 'Sekt — 德國氣泡酒',
  description: '認識德國從日常氣泡酒到精品 Winzersekt 的完整世界',
  objectives: ['了解德國 Sekt 的種類與製法', '認識 Winzersekt 的特殊規範', '掌握代表性 Sekt 生產者'],
  slides: [
    {
      type: 'title',
      title: 'Sekt — 德國氣泡酒',
      subtitle: '從大眾到精品的德國起泡世界',
      background: '#c0a050'
    },
    {
      type: 'content',
      title: '🥂 德國 Sekt 的歷史與現況',
      content: 'Sekt（德語氣泡酒）在德國有超過 200 年的歷史，是世界上最大的氣泡酒消費國之一，德國人每年人均飲用 Sekt 遙遙領先其他國家。傳統上，大量商業 Sekt 以 Charmat（夏爾瑪／槽式）法製造，快速且成本低。然而 2009 年起推行的 Winzersekt（酒農 Sekt）規範，要求使用傳統瓶中二次發酵法（Méthode Traditionnelle）、酒渣陳年至少 9 個月、使用自有葡萄園葡萄，為德國精品 Sekt 建立了新標準，開創了可媲美頂級香檳的德國氣泡酒新時代。'
    },
    {
      type: 'comparison',
      title: 'Winzersekt vs 大眾 Sekt 比較',
      left: { label: '🌟 Winzersekt（精品）', items: ['傳統瓶中二次發酵', '酒渣陳年至少 9 個月', '使用自有酒莊葡萄', '品種：Riesling、Spätburgunder', '風格：複雜、細緻、持久氣泡', '2009 年規範確立'] },
      right: { label: '🍾 大眾商業 Sekt', items: ['Charmat 大槽法（快速）', '發酵時間短（數週）', '可混合進口葡萄', '酒香簡單，適合日常', '價格親民', '德國市場最主流'] }
    },
    {
      type: 'list',
      title: '🍾 德國主要 Sekt 品種與酒莊',
      items: [
        { icon: '🌿', text: 'Riesling Sekt：最具德國特色，高酸礦物感，Mosel 與 Rheingau 最出色' },
        { icon: '🔴', text: 'Spätburgunder Blanc de Noirs：黑皮諾白中白風格，優雅精緻' },
        { icon: '🌸', text: 'Weißburgunder / Chardonnay：圓潤奶油感，布根地風格 Sekt' },
        { icon: '🏆', text: 'Raumland（Rheinhessen）：德國最受推崇的 Winzersekt 生產者' },
        { icon: '🌟', text: 'Schloss Vaux（Rheingau）：傳統百年 Sekt 名莊，優雅細緻' },
        { icon: '💎', text: 'Griesel & Compagnie（Hessische Bergstrasse）：新生代精品 Sekt 標竿' }
      ]
    },
    {
      type: 'stats',
      title: '📊 德國 Sekt 關鍵數據',
      stats: [
        { label: 'Winzersekt 規範', value: '2009 年確立，需傳統瓶內二次發酵，酒渣陳年 9+ 個月' },
        { label: '主要品種', value: 'Riesling、Spätburgunder、Weißburgunder' },
        { label: '代表生產者', value: 'Raumland、Schloss Vaux、Griesel & Compagnie' },
        { label: '市場特色', value: '德國為世界最大 Sekt 消費國之一' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Winzersekt 的規範要求酒渣陳年至少多長時間？',
          options: ['3 個月', '6 個月', '9 個月', '12 個月'],
          answer: 2,
          explanation: '根據 2009 年德國制定的 Winzersekt 規範，使用傳統瓶中二次發酵法的精品 Sekt 必須在酒渣上陳年至少 9 個月，這與香檳的最低要求相近，使 Sekt 能發展出更複雜的酵母麵包香氣與細緻氣泡。'
        },
        {
          question: '大眾商業 Sekt 主要使用哪種製造方法？',
          options: ['傳統瓶中二次發酵法（Méthode Traditionnelle）', 'Charmat 大槽法', '轉移法（Transfer Method）', '古典法（Méthode Ancestrale）'],
          answer: 1,
          explanation: 'Charmat 法（又稱槽式發酵法）是在密封大槽中進行二次發酵，速度快、成本低，是德國大多數商業 Sekt 採用的方式。相比瓶中二次發酵法，Charmat 法的氣泡較粗，風味較簡單，但價格更為親民。'
        }
      ]
    }
  ]
}

export const G2M4L3 = {
  lessonId: 'G2M4L3',
  title: '年份與收藏策略',
  description: '掌握德國葡萄酒的頂級年份、陳年規律與投資收藏策略',
  objectives: ['認識德國葡萄酒的最佳年份', '了解不同等級的陳年潛力', '掌握德國頂級葡萄酒的收藏投資邏輯'],
  slides: [
    {
      type: 'title',
      title: '年份與收藏策略',
      subtitle: '時間成就的德國葡萄酒藝術',
      background: '#2c2c5e'
    },
    {
      type: 'content',
      title: '📅 德國頂級年份概覽',
      content: '德國的葡萄酒年份受氣候影響極大，好年份與普通年份的品質差距往往遠超其他產區。頂級年份的條件通常包括：生長季溫暖足夠葡萄成熟、秋季乾燥晴朗、無提早霜害，同時保有足夠的夜間涼意以留存酸度。被普遍認可的傑出年份包括：2021（陰涼多酸，Riesling 經典年）、2017（豐熟均衡）、2015（溫暖豐潤，甜酒佳）、2012（礦物感精緻）、2007（Prädikat 甜酒絕佳）、2005（被許多人評為近代最偉大年份）、1999、1990、1971。'
    },
    {
      type: 'list',
      title: '⏳ 各等級陳年潛力指南',
      items: [
        { icon: '🌿', text: 'Kabinett：5–15 年，尋找最清爽礦物巔峰期，最遲 10 年內飲完' },
        { icon: '🍑', text: 'Spätlese：10–25 年，頂級酒莊版本可達 25 年，充分發展蜂蜜層次' },
        { icon: '🌟', text: 'Auslese：15–30 年，甜味支撐陳年，30 年後出現藥草杏桃複雜度' },
        { icon: '🍯', text: 'BA（Beerenauslese）：20–40 年，貴腐風味與年份潛力共同決定' },
        { icon: '❄️', text: 'Eiswein：30–50 年，極高酸度護航，越陳越顯複雜酸甜平衡' },
        { icon: '👑', text: 'TBA（Trockenbeerenauslese）：50 年以上，1971、1990 年份至今仍壯麗' }
      ]
    },
    {
      type: 'list',
      title: '💼 收藏投資策略',
      items: [
        { icon: '👑', text: 'Egon Müller TBA / Eiswein：世界拍賣市場最受追捧德國酒，價值持續上升' },
        { icon: '💎', text: 'Dönnhoff 頂級 GG 與 Eiswein：Nahe 稀珍，量少質精，行家必備' },
        { icon: '🌟', text: 'Keller GG（Rheinhessen）：近年快速升值，Kirchspiel 等 GG 已難求' },
        { icon: '🏆', text: '收藏條件：12–14°C、濕度 70–80%、避光、無震動、橫置' },
        { icon: '📊', text: '最佳年份首選：2005、2015、1990、2007 的 Auslese 以上等級' },
        { icon: '🔍', text: '行家策略：購買年輕 Kabinett／Spätlese，保留 10–15 年後飲用，性價比最高' }
      ]
    },
    {
      type: 'stats',
      title: '📊 收藏關鍵數據',
      stats: [
        { label: '最具投資價值年份', value: '2021、2017、2015、2012、2007、2005、1999、1990、1971' },
        { label: 'TBA 陳年極限', value: '50 年以上（部分可達 80–100 年）' },
        { label: '理想儲存溫度', value: '12–14°C，恆溫最重要' },
        { label: '頂級收藏標的', value: 'Egon Müller、Dönnhoff、Keller 的 TBA/Eiswein/GG' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '以下哪個德國葡萄酒等級陳年潛力最長？',
          options: ['Kabinett', 'Spätlese', 'Auslese', 'TBA（Trockenbeerenauslese）'],
          answer: 3,
          explanation: 'TBA（Trockenbeerenauslese）擁有德國所有葡萄酒等級中最驚人的陳年潛力，可達 50 年以上。其極高的殘糖、超高酸度和濃縮風味共同構成了強大的保護機制。1971 年的頂級 TBA 至今仍在巔峰期，部分可繼續陳放數十年。'
        },
        {
          question: '德國葡萄酒的理想儲存溫度是？',
          options: ['6–8°C（冰箱溫度）', '12–14°C（酒窖溫度）', '18–20°C（室溫）', '25°C以上（溫暖環境）'],
          answer: 1,
          explanation: '德國葡萄酒的理想儲存溫度是 12–14°C，接近傳統地下酒窖的自然溫度。恆溫比溫度本身更重要——溫度劇烈波動對葡萄酒的傷害遠大於稍高的溫度。同時需保持 70–80% 的相對濕度，避光且無震動，並將瓶子橫置以保持軟木塞濕潤。'
        }
      ]
    }
  ]
}

export const G2FinalExam = {
  lessonId: 'G2FinalExam',
  title: 'Level 2 綜合評量',
  description: '測試您對德國葡萄酒 Level 2 全部內容的掌握程度',
  objectives: ['複習 G2M1 萊茵系列精華產區', '複習 G2M2 南德主要產區', '複習 G2M3 北德東德與 G2M4 特殊酒款'],
  slides: [
    {
      type: 'title',
      title: 'Level 2 綜合評量',
      subtitle: '德國葡萄酒進階課程全面測試',
      background: '#1a1a2e'
    },
    {
      type: 'quiz',
      title: '第一部分：萊茵系列精華產區（G2M1）',
      questions: [
        {
          question: 'Rheingau 的 Taunus 山脈對產區的主要作用是？',
          options: ['提供豐富的礦物質土壤', '阻擋北方冷風，保護葡萄園溫度', '引導萊茵河水灌溉', '遮蔽下午的強烈陽光'],
          answer: 1,
          explanation: 'Taunus 山脈位於 Rheingau 北方，如天然屏障阻擋來自北方的寒冷氣流，形成溫暖穩定的微氣候，使 Riesling 能緩慢成熟，發展出豐潤複雜的風格。'
        },
        {
          question: 'Rheinhessen 的 Roter Hang（紅坡）因哪種土壤而得名？',
          options: ['紅色黏土', '紅色砂岩（Rotliegend）', '玄武岩', '紅色板岩'],
          answer: 1,
          explanation: 'Roter Hang 的名稱來自其古老的紅色砂岩（Rotliegend）地層，這種紅砂岩儲熱效果優異，加上南向萊茵河岸的水面反射，為頂級 Riesling 提供絕佳成熟條件。'
        },
        {
          question: 'Nahe 產區以什麼特色著稱於德國葡萄酒界？',
          options: ['全德種植面積最大', '最多元的地質構造——板岩、石英岩、斑岩、火山岩', '只種植紅葡萄品種', '以 Silvaner 為主要品種'],
          answer: 1,
          explanation: 'Nahe 被稱為德國的「土壤博物館」，因為在短短 4,150 公頃的範圍內，涵蓋了板岩、石英岩、斑岩（Porphyry）和火山岩等多種地質類型，是全德地質最多元的產區，為 Riesling 帶來千變萬化的礦物表達。'
        },
        {
          question: '以下哪位是 Nahe 最具國際聲譽的釀酒師／酒莊？',
          options: ['Robert Weil', 'Helmut Dönnhoff', 'Klaus Peter Keller', 'Egon Müller'],
          answer: 1,
          explanation: 'Helmut Dönnhoff（Weingut Dönnhoff）是 Nahe 的傳奇酒莊，其 Niederhäuser Hermannshöhle GG 被多位國際評酒家列為德國最偉大的 Riesling，代表了 Nahe 礦物風格的最高境界。'
        },
        {
          question: '1775 年哪座酒莊首次意外釀出 Spätlese，開創德國晚採葡萄酒歷史？',
          options: ['Robert Weil', 'Georg Breuer', 'Schloss Johannisberg', 'Künstler'],
          answer: 2,
          explanation: '1775 年，Rheingau 的 Schloss Johannisberg 因信差延誤送達採收許可，葡萄過熟，修道院決定照常釀造，意外釀出第一瓶有文字記載的 Spätlese，從此開創了德國 Prädikat 系統中晚採葡萄酒的傳統。'
        }
      ]
    },
    {
      type: 'quiz',
      title: '第二部分：南德主要產區（G2M2）',
      questions: [
        {
          question: 'Pfalz 最頂級的 Riesling 集中在哪個次產區？',
          options: ['Südliche Weinstrasse', 'Mittelhaardt', 'Vorderpfalz', 'Rheinterrassen'],
          answer: 1,
          explanation: 'Mittelhaardt（中部哈特）是 Pfalz 最精華的地帶，以 Deidesheim、Forst、Wachenheim 三鎮為核心，集中了德國 Riesling 頂級葡萄園，Bürklin-Wolf 與 Bassermann-Jordan 等百年名莊均坐鎮於此。'
        },
        {
          question: 'Baden 的 Kaiserstuhl 是什麼地質構造？',
          options: ['冰河沉積台地', '熄火的玄武岩火山群', '萊茵河衝積扇', '石灰岩高原'],
          answer: 1,
          explanation: 'Kaiserstuhl（皇帝寶座）是萊茵河平原中突起的熄火玄武岩火山群，玄武岩深色表面吸熱效果極佳，加上四周平原無遮蔽、全日照，形成全德最溫暖的葡萄園微氣候，使 Spätburgunder 達到驚人成熟度。'
        },
        {
          question: 'Württemberg 最具地方特色、幾乎只在此地種植的紅葡萄品種是？',
          options: ['Dornfelder', 'Lemberger', 'Trollinger', 'Spätburgunder'],
          answer: 2,
          explanation: 'Trollinger 是 Württemberg 最具代表性的地方品種，幾乎只在此地種植，釀出酒色偏淡、果香清新、低單寧的輕盈紅酒，是當地人日常飲用的「鄉土酒」，深深根植於 Württemberg 的飲食文化中。'
        },
        {
          question: 'Franken 最具識別性的兩大特色是？',
          options: ['陡峭坡地與板岩土壤', 'Bocksbeutel 扁圓瓶與 Silvaner 品種', '大量 Eiswein 與 TBA 生產', '溫暖氣候與紅葡萄占主導'],
          answer: 1,
          explanation: 'Franken 最獨特的兩大特色是：Bocksbeutel（法定扁圓形酒瓶）以及以 Silvaner 為靈魂的葡萄酒風格。Silvaner 在 Franken 的 Muschelkalk（貝殼石灰岩）土壤上展現出乾爽礦物感，是德國任何其他產區難以比擬的。'
        },
        {
          question: 'Baden 種植最廣的紅葡萄品種比例約為多少？',
          options: ['Trollinger 70%', 'Spätburgunder 37%', 'Dornfelder 50%', 'Lemberger 45%'],
          answer: 1,
          explanation: 'Spätburgunder（黑皮諾）在 Baden 的種植比例約達 37%，是德國種植 Spätburgunder 比例最高的產區，以 Kaiserstuhl 火山地帶的表現最為出色，被譽為「德國的勃根地」。'
        }
      ]
    },
    {
      type: 'quiz',
      title: '第三部分：北德東德產區 & 特殊酒款（G2M3 + G2M4）',
      questions: [
        {
          question: 'Ahr 能在北緯 50 度釀出優秀 Spätburgunder 紅酒，主要依靠什麼？',
          options: ['溫室種植技術', 'V 字型峽谷排除冷空氣、板岩吸熱蓄溫', '全球暖化使氣溫大幅提升', '引進早熟葡萄品種'],
          answer: 1,
          explanation: 'Ahr 的 V 字型峽谷地形是最關鍵的因素：陡峭的峽谷將冷空氣排出，灰瓦岩與板岩土壤吸熱蓄溫，南向坡道最大化日照，三重效果使 Spätburgunder 能在北緯 50.5 度完全成熟，展現優雅紅莓礦石的精緻風格。'
        },
        {
          question: 'Mittelrhein 在 2002 年獲得什麼國際認可？',
          options: ['德國最佳 Riesling 產區認證', 'UNESCO 萊茵峽谷世界文化遺產', '歐盟有機葡萄酒產區認證', 'VDP 頂級產區榮銜'],
          answer: 1,
          explanation: 'Mittelrhein 所在的上中萊茵峽谷（Upper Middle Rhine Valley）在 2002 年被 UNESCO 列為世界文化遺產，認可其壯麗的城堡峽谷景觀與陡峭坡地上傳承數百年的葡萄種植文化。'
        },
        {
          question: 'Saale-Unstrut 與 Sachsen 兩個東德產區在什麼時候開始重建？',
          options: ['1945 年二戰結束後', '1990 年德國統一後', '2004 年加入歐盟後', '2010 年啟動東部振興計劃後'],
          answer: 1,
          explanation: '這兩個產區在東德共產時期遭到嚴重破壞，品質大幅下滑。1990 年德國統一是重建的起點，隨後引進西德技術、私有化酒莊、重植優質品種，逐漸重建了傳統的精品釀造文化。'
        },
        {
          question: 'TBA 與 Eiswein 的最關鍵區別是什麼？',
          options: ['TBA 酒精度較高，Eiswein 較低', 'TBA 需要貴腐菌感染；Eiswein 需健康葡萄天然冰凍', 'TBA 只能在 Mosel 生產', 'Eiswein 比 TBA 甜度更高'],
          answer: 1,
          explanation: '兩者的本質區別：TBA 仰賴 Botrytis 貴腐菌感染葡萄、蒸發水分濃縮糖分；而 Eiswein 要求完全健康的葡萄在 -8°C 以下天然冰凍，榨汁時水分以冰晶形式被分離，留下濃縮甜酸汁液。健康葡萄是 Eiswein 的必要條件，貴腐菌反而有害。'
        },
        {
          question: 'Winzersekt（精品 Sekt）的規範最低要求酒渣陳年多少時間？',
          options: ['3 個月', '6 個月', '9 個月', '18 個月'],
          answer: 2,
          explanation: '根據 2009 年確立的 Winzersekt 規範，使用傳統瓶中二次發酵法的精品 Sekt 必須在酒渣上陳年至少 9 個月，並使用自有葡萄園的葡萄釀造。這一規範將德國精品 Sekt 與大眾商業 Sekt 清楚區隔，開創了可媲美優質香檳的德國氣泡酒新時代。'
        }
      ]
    },
    {
      type: 'content',
      title: '🎉 Level 2 完成！',
      content: '恭喜您完成了德國葡萄酒 Level 2 全部課程！\n\n您已掌握：\n• G2M1 萊茵系列精華產區——Rheingau 的貴族優雅、Rheinhessen 的多元豐饒、Nahe 的礦物珍寶\n• G2M2 南德主要產區——Pfalz 的溫暖豐潤、Baden 的地中海風情、Württemberg 的 Trollinger 文化、Franken 的 Bocksbeutel 傳承\n• G2M3 北德東德產區——Ahr 的紅酒奇蹟、Mittelrhein 的城堡峽谷、Hessische Bergstrasse 的最早春天、東德的重生故事\n• G2M4 特殊酒款——TBA 與 Eiswein 的甜酒巔峰、Sekt 的氣泡世界、年份與收藏策略\n\n您已準備好探索德國葡萄酒的更深層次！繼續進入 Level 3，深入每個產區的頂級葡萄園與年份分析。'
    }
  ]
}

// ── Level 3 ────────────────────────────────────────────────────────────────

export const G3M1L1 = {
  lessonId: 'G3M1L1',
  title: 'VDP 聯盟與四級分類詳解',
  description: '深入理解 VDP 的歷史使命與四級葡萄園分類體系',
  objectives: ['了解 VDP 的歷史與使命', '掌握四級分級（Gutswein/Ortswein/Erste Lage/Grosse Lage）', '認識 VDP 與官方法定分級的關係'],
  slides: [
    {
      type: 'title',
      title: 'VDP 聯盟與四級分類',
      subtitle: 'Verband Deutscher Prädikatsweingüter',
      background: '#1a3a1a'
    },
    {
      type: 'content',
      title: 'VDP 簡介',
      content: 'VDP 創立於 1910 年，目前約有 200 個成員酒莊，自訂更嚴格的四級分類體系，類比法國布根地的 Grand Cru / Premier Cru 概念。與官方 QmP 制度最大的不同在於：葡萄園分級不依甜度而依地塊風土品質，強調 Terroir 的核心地位，是德國葡萄酒走向國際精品市場的重要推力。'
    },
    {
      type: 'vdp-classification',
      title: 'VDP 四級分類完整互動解析',
      description: '從 Gutswein 到 Grosse Lage，VDP 四級分類完整互動解析'
    },
    {
      type: 'comparison',
      title: 'VDP vs 官方 Prädikat 制度對比',
      left: { label: '🦅 VDP 分級', items: ['依地塊風土品質分級', '以 Trocken 乾型原則為核心', 'Grosse Lage = 頂級風土地塊', 'Grosses Gewächs 為乾型旗艦', '類似布根地 Grand Cru 概念', '自願性私人協會規範'] },
      right: { label: '📜 官方 QmP 制度', items: ['依葡萄糖分（Oechsle°）分級', '可甜可乾，甜度不限', 'Prädikat 反映採收熟成度', 'TBA/Eiswein 是官方最高等', '全德所有酒莊均適用', '政府法規強制執行'] }
    },
    {
      type: 'list',
      title: 'VDP 四級詳細說明',
      items: [
        { icon: '🏠', text: 'Gutswein（入門莊園級）：代表酒莊整體風格，平易近人，展現酒莊基礎釀造哲學' },
        { icon: '🏘️', text: 'Ortswein（村莊級）：特定村莊的風土表現，比 Gutswein 更具地方特色與深度' },
        { icon: '⭐', text: 'Erste Lage（一級園）：VDP 認可的優秀葡萄園，標示 VDP.ERSTE LAGE® 徽章' },
        { icon: '👑', text: 'Grosse Lage（頂級園）：VDP 最高等級葡萄園；乾型白酒稱 Grosses Gewächs（GG）；甜型保留 Prädikat 稱謂（GG Prädikat）' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'VDP 頂級葡萄園（Grosse Lage）釀造的乾型白酒稱為什麼？',
          options: ['Kabinett', 'Grosses Gewächs', 'Spätlese', 'Ortswein'],
          answer: 1,
          explanation: 'GG（Grosses Gewächs）是 VDP Grosse Lage 頂級葡萄園釀造的乾型（Trocken）白酒的稱號，代表德國乾型白酒的最高境界，相當於布根地的 Grand Cru 等級。'
        },
        {
          question: 'VDP 的四級分級制度以什麼為核心依據？',
          options: ['葡萄糖分/Oechsle 度', '地塊風土品質', '酒莊規模', '酒款甜度'],
          answer: 1,
          explanation: 'VDP 的分級制度以地塊風土品質（Terroir）為核心，與官方 QmP 依糖分成熟度的系統完全不同，強調葡萄園的地理位置、土壤特性與歷史聲譽。'
        }
      ]
    }
  ]
}

export const G3M1L2 = {
  lessonId: 'G3M1L2',
  title: 'Großes Gewächs — 德國頂級單一葡萄園',
  description: '認識德國最偉大的乾型白酒 GG 的法規、風格與代表葡萄園',
  objectives: ['認識 GG 的意義與法規', '了解各產區代表性 GG 葡萄園', '掌握 GG 的風格特徵'],
  slides: [
    {
      type: 'title',
      title: 'Großes Gewächs',
      subtitle: '德國最偉大的乾型白酒',
      background: '#2c1810'
    },
    {
      type: 'content',
      title: 'Grosses Gewächs 介紹',
      content: 'GG（Grosses Gewächs）只在 VDP 成員酒莊的 Grosse Lage 頂級園才能使用，必須為乾型（Trocken），手工採收，低產量（Riesling ≤ 50 hL/ha）。瓶身標示 GG 徽章。GG 是德國乾型白酒金字塔的最高峰，可媲美布根地頂級 Grand Cru 白酒，展現最純粹的葡萄園風土表達，被國際評酒家視為德國白酒文藝復興的核心。'
    },
    {
      type: 'list',
      title: '各產區代表性 GG 葡萄園',
      items: [
        { icon: '🌊', text: 'Mosel：Scharzhofberger（Egon Müller）、Wehlener Sonnenuhr（J.J. Prüm 做甜型，其他酒莊做 GG）' },
        { icon: '🏰', text: 'Rheingau：Rüdesheimer Berg Schlossberg（Georg Breuer）、Rauenthaler Baiken（Robert Weil）' },
        { icon: '💎', text: 'Nahe：Niederhäuser Hermannshöhle（Dönnhoff）、Monzinger Halenberg（Emrich-Schönleber）' },
        { icon: '☀️', text: 'Pfalz：Forster Kirchenstück（Bassermann-Jordan）、Wachenheimer Gerümpel（Bürklin-Wolf）' },
        { icon: '🌿', text: 'Rheinhessen：Kirchspiel（Wittmann）、Morstein（Keller）' }
      ]
    },
    {
      type: 'comparison',
      title: 'GG vs 一般 Trocken 的風格差異',
      left: { label: '👑 Grosses Gewächs（GG）', items: ['VDP Grosse Lage 頂級園', '嚴格低產（Riesling ≤ 50 hL/ha）', '手工採收、細心篩選', '深度礦物感、風土個性鮮明', '可陳年 15 年以上', '價格 €30–200+'] },
      right: { label: '🍷 普通 Trocken', items: ['一般品質葡萄園', '產量較高，機採或混摘', '清爽日常飲用型', '香氣簡單直接', '1–3 年適飲期', '價格 €8–20'] }
    },
    {
      type: 'stats',
      title: 'GG 關鍵數據',
      stats: [
        { label: '年產量', value: '每園通常 < 5000 瓶，極為稀少' },
        { label: '價格範圍', value: '€30–200+（頂級園可更高）' },
        { label: '陳年潛力', value: '15–25 年（頂級園可達 30 年以上）' },
        { label: '代表產區', value: 'Mosel / Nahe / Rheingau / Pfalz / Rheinhessen' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Großes Gewächs 必須符合哪個關鍵條件？',
          options: ['必須是甜型', '必須是乾型 Trocken', '必須使用橡木桶', '必須在 Mosel 生產'],
          answer: 1,
          explanation: 'GG（Grosses Gewächs）的核心定義之一是必須為乾型（Trocken），這是 VDP 強調以地塊風土而非甜度來表達品質的核心理念，與傳統的 Prädikat 甜型系統形成鮮明對比。'
        },
        {
          question: '以下哪個葡萄園是 Nahe 產區 Dönnhoff 酒莊最著名的 GG 園？',
          options: ['Scharzhofberger', 'Rauenthaler Baiken', 'Niederhäuser Hermannshöhle', 'Forster Kirchenstück'],
          answer: 2,
          explanation: 'Niederhäuser Hermannshöhle 是 Dönnhoff 酒莊在 Nahe 的旗艦葡萄園，被多位國際評酒家評為德國最偉大的 Riesling 之一，其 GG 展現了 Nahe 板岩與斑岩土壤最精純的礦物表達。'
        }
      ]
    }
  ]
}

export const G3M1L3 = {
  lessonId: 'G3M1L3',
  title: '知名酒莊名單與風格解析',
  description: '認識德國頂尖 VDP 成員酒莊的風格、代表作與選酒框架',
  objectives: ['認識德國最頂尖的 VDP 成員酒莊', '了解各酒莊的風格與代表作', '建立選酒的參考框架'],
  slides: [
    {
      type: 'title',
      title: '德國頂級 VDP 酒莊',
      subtitle: '從 Mosel 到 Pfalz 的名莊風景線',
      background: '#4a2040'
    },
    {
      type: 'list',
      title: 'Mosel 頂級酒莊',
      items: [
        { icon: '👑', text: 'Egon Müller（Scharzhof）：全球最貴德國酒，Scharzhofberger TBA 拍賣紀錄，傳統典雅' },
        { icon: '🌊', text: 'J.J. Prüm（Wehlen）：Wehlener Sonnenuhr 代名詞，Auslese/Spätlese 長壽典範' },
        { icon: '🌍', text: 'Dr. Loosen（Bernkastel）：美國市場最知名，Ürziger Würzgarten 香料園代表' },
        { icon: '🌿', text: 'Clemens Busch（Pünderich）：自然農法先驅，板岩老藤，純淨礦物' }
      ]
    },
    {
      type: 'list',
      title: '萊茵/Nahe/Pfalz 頂級酒莊',
      items: [
        { icon: '💎', text: 'Dönnhoff（Nahe）：世界最佳白酒之一，Hermannshöhle 無可匹敵' },
        { icon: '🏰', text: 'Robert Weil（Rheingau）：Kiedrich Gräfenberg 旗艦，豐潤貴腐巔峰' },
        { icon: '⭐', text: 'Keller（Rheinhessen）：Morstein GG 是德國乾型白酒的巔峰，全球搶購' },
        { icon: '☀️', text: 'Müller-Catoir（Pfalz）：Haardter Bürgergarten，熱帶花香的芳香白酒' }
      ]
    },
    {
      type: 'comparison',
      title: '傳統派 vs 現代派風格對比',
      left: { label: '🏛️ 傳統派（Egon Müller / J.J. Prüm）', items: ['長時間低溫緩慢發酵', '保留適量殘糖', '自然老桶輕微陳放', '甜型 Auslese/BA 為旗艦', '可陳年數十年', '典雅保守，不追求流行'] },
      right: { label: '🔬 現代派（Keller / Wittmann）', items: ['完全乾型 GG 為核心', '整串壓榨，低介入釀造', '部分嘗試氧化或大桶', '礦物直接，張力鮮明', '強調風土純粹表達', '受國際市場高度追捧'] }
    },
    {
      type: 'list',
      title: '新生代值得關注的酒莊',
      items: [
        { icon: '🌿', text: 'Clemens Busch（Mosel）：自然農法先驅，老藤板岩礦物，純淨無干預' },
        { icon: '🌾', text: 'Wittmann（Rheinhessen）：有機認證先驅，Kirchspiel GG 精緻礦物' },
        { icon: '💎', text: 'Schäfer-Fröhlich（Nahe）：下一代 Nahe 傳奇，石英岩酸度鋒利' },
        { icon: '🍷', text: 'Friedrich Becker（Pfalz）：Pfalz Pinot 專家，Spätburgunder 媲美布根地' },
        { icon: '🌍', text: 'Klaus Zimmerling（Sachsen）：東德精品，法式陶罐釀造，自然派美學' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '以下哪個酒莊的 TBA 是德國在拍賣市場上最昂貴的葡萄酒？',
          options: ['Robert Weil', 'Dönnhoff', 'Egon Müller', 'J.J. Prüm'],
          answer: 2,
          explanation: 'Egon Müller 的 Scharzhofberger TBA 是德國在國際拍賣市場上最昂貴的葡萄酒，單瓶成交價曾達數萬歐元，是德國甜酒至高無上的象徵。'
        },
        {
          question: 'Keller 酒莊（Rheinhessen）最著名的 GG 旗艦園是？',
          options: ['Rauenthaler Baiken', 'Niederhäuser Hermannshöhle', 'Wachenheimer Gerümpel', 'Morstein'],
          answer: 3,
          explanation: 'Morstein 是 Keller 酒莊位於 Rheinhessen 的旗艦 GG 葡萄園，被譽為德國乾型白酒的頂峰之一，每年上市即遭全球藏家搶購，已成為現代德國精品 Riesling 的代名詞。'
        }
      ]
    }
  ]
}

export const G3M2L1 = {
  lessonId: 'G3M2L1',
  title: 'Riesling 年份與熟成特徵',
  description: '掌握 Riesling 的陳年演化軌跡、TDN 汽油香氣的形成與年份判斷',
  objectives: ['掌握 Riesling 的陳年演化軌跡', '認識不同年份 Riesling 的開放期', '了解 TDN 汽油礦石香氣的形成'],
  slides: [
    {
      type: 'title',
      title: 'Riesling 的陳年演化',
      subtitle: '從新鮮果香到汽油礦石的蛻變',
      background: '#5a3e28'
    },
    {
      type: 'content',
      title: 'Riesling 陳年潛力',
      content: 'Riesling 高酸度保護葡萄酒不被氧化，殘糖提供結構支撐，共同創造可陳年 20–50 年甚至更久的超凡潛力。TDN（1,1,6-三甲基-1,2-二氫萘）化合物在瓶中緩慢形成，造就著名的「汽油/礦石香」，是成熟 Riesling 的品種標誌，非缺陷。這一特殊香氣隨陳年日益顯著，是全球最具辨識度的葡萄酒品種特徵之一。'
    },
    {
      type: 'timeline',
      title: 'Riesling 熟成時間軸',
      events: [
        { year: '0–3 年', title: '新鮮期', desc: '青蘋果、檸檬、萊姆、白花——果香純淨鮮活，酸度清脆' },
        { year: '3–8 年', title: '過渡期', desc: '水蜜桃、杏桃、蜂蜜開始發展，礦石感增強，複雜度初現' },
        { year: '8–15 年', title: '發展期', desc: '明顯蜂蜜、蠟質感、初現汽油礦石，複雜度大增，是許多愛好者的最愛開放期' },
        { year: '15–30 年', title: '成熟期', desc: '汽油礦石顯著、橙皮、蜂蠟、太妃糖、超凡深度，頂級 Spätlese/Auslese 巔峰期' },
        { year: '30 年以上', title: '傳奇境界', desc: '極致複雜，如同液態礦石，TBA/Eiswein 的理想境界，無可言喻的深邃' }
      ]
    },
    {
      type: 'list',
      title: '影響 Riesling 陳年的關鍵因素',
      items: [
        { icon: '⚡', text: '酸度（必須高）：保護抗氧化、撐起長年結構，Mosel 酸度最為突出' },
        { icon: '🍯', text: '殘糖（提供緩衝）：甜型比乾型通常更長壽，糖酸平衡是陳年關鍵' },
        { icon: '🏅', text: 'Prädikat 等級：TBA > Eiswein > BA > Auslese > Spätlese > Kabinett' },
        { icon: '🗺️', text: '產區：Mosel（最長壽）> Nahe > Rheingau > Pfalz' },
        { icon: '📅', text: '年份：好年份酸度高，可陳年更久；炎熱年份酸度低，適飲期較短' }
      ]
    },
    {
      type: 'comparison',
      title: '年輕 vs 熟成 Riesling 比較',
      left: { label: '🌱 年輕 Riesling（3 年內）', items: ['顏色：透明金黃、近乎無色', '香氣：青蘋果/萊姆/白花/礦石', '口感：清爽直接，酸度鮮明', '酒體：輕盈活潑', '餘韻：短至中等', '適合：即時飲用，不需醒酒'] },
      right: { label: '🍯 熟成 Riesling（15 年以上）', items: ['顏色：深金至琥珀色', '香氣：汽油/礦石/蜂蠟/橙皮/太妃糖', '口感：複雜深邃，酸度圓融', '酒體：豐厚持久', '餘韻：極長，礦石迴盪', '適合：細心醒酒，搭配豐富料理'] }
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '陳年 Riesling 中的「汽油香氣」是由什麼化合物形成的？',
          options: ['乙酸乙酯', 'TDN（三甲基二氫萘）', '丁酸乙酯', '硫化物'],
          answer: 1,
          explanation: 'TDN（1,1,6-三甲基-1,2-二氫萘）是陳年 Riesling 特有的汽油礦石香氣的來源，在瓶中緩慢形成，被認為是頂級 Riesling 成熟的標誌性特徵，並非缺陷。'
        },
        {
          question: '以下哪個因素對 Riesling 的陳年潛力最重要？',
          options: ['橡木桶陳年', '高酸度', '低酒精度', '深色玻璃瓶'],
          answer: 1,
          explanation: '高酸度是 Riesling 驚人陳年潛力最重要的保護機制，酸度能防止氧化、維持結構，讓葡萄酒在瓶中緩慢演化數十年而不衰敗。Mosel 的高酸 Riesling 正因此能陳年 50 年以上。'
        }
      ]
    }
  ]
}

export const G3M2L2 = {
  lessonId: 'G3M2L2',
  title: 'Mosel vs Rheingau 盲品分辨',
  description: '建立系統性盲品辨識方法，掌握 Mosel 與 Rheingau 的感官差異',
  objectives: ['建立系統性的盲品辨識方法', '掌握 Mosel 與 Rheingau 的感官差異', '練習產區辨識的邏輯路徑'],
  slides: [
    {
      type: 'title',
      title: 'Riesling 盲品識別術',
      subtitle: 'Mosel vs Rheingau 系統辨識法',
      background: '#1e3a5f'
    },
    {
      type: 'content',
      title: '盲品哲學',
      content: '盲品不是猜測，而是系統性感官分析。從外觀→香氣→口感→結構逐步縮小範圍。Riesling 的地區差異非常明顯，掌握幾個關鍵指標即可高準確率辨識。Mosel 的輕盈低酒精與 Rheingau 的豐潤中等酒體，在口腔中留下截然不同的印象，是最可靠的辨識起點。'
    },
    {
      type: 'comparison',
      title: 'Mosel vs Rheingau 感官差異完整對比',
      left: { label: '🌊 Mosel', items: ['顏色：淺金/近乎無色', '酒精：7–9%，口感輕盈', '酸度：極高，刺激鮮活', '酒體：超輕盈，幾乎無重量感', '香氣：礦石板岩、青蘋果、萊姆', '口感：無油感，純淨清澈'] },
      right: { label: '🏰 Rheingau', items: ['顏色：中等金黃，有光澤', '酒精：11–13%，有分量', '酸度：高但圓潤，較和諧', '酒體：中等豐潤，有質地', '香氣：蜂蜜、桃子、花香', '口感：些微油滑質感，尾韻長'] }
    },
    {
      type: 'list',
    {
      type: 'germany-region-map',
      title: 'Mosel vs Rheingau 地理對比',
      description: '摩澤爾河谷（西部蜿蜒）vs 萊茵河轉彎（東部南向）——地理距離約 100 公里，風格天壤之別',
      mapRegion: 'rhineCore',
      highlightFiles: ['mosel-region.geojson', 'rheingau-region.geojson'],
    },

      title: '盲品 SOP 四步驟',
      items: [
        { icon: '👁️', text: '步驟1 外觀：顏色深淺（淺=涼爽/年輕/Mosel；深=成熟/溫暖/Rheingau）' },
        { icon: '👃', text: '步驟2 香氣一搖：第一印象（板岩礦石→Mosel；蜂蜜桃子→Rheingau）' },
        { icon: '👅', text: '步驟3 口感：酒精感（輕=Mosel；中=Rheingau）、酸度質地（尖銳=Mosel；圓潤=Rheingau）' },
        { icon: '✅', text: '步驟4 餘韻：礦石刷舌感（Mosel）vs 蜂蜜甜香餘韻（Rheingau）' }
      ]
    },
    {
      type: 'list',
      title: '常見混淆陷阱與破解',
      items: [
        { icon: '⚠️', text: '陷阱1：Rheingau 的 Kabinett 有時也很輕盈→看顏色是否有金黃色調，有則偏 Rheingau' },
        { icon: '⚠️', text: '陷阱2：Mosel Auslese 也有蜂蜜感→但板岩礦石仍存在且酒精更低，可分辨' },
        { icon: '⚠️', text: '陷阱3：熟成 Mosel 顏色變深→看汽油礦石香氣可確認是 Mosel 陳年酒' },
        { icon: '✅', text: '破解：永遠先看酒精——Mosel < 10% 幾乎是鐵律，Rheingau 通常 11% 以上' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '你嘗到一款酒精 8%、極高酸度、明顯礦石板岩氣息的 Riesling，最可能來自哪個產區？',
          options: ['Rheingau', 'Pfalz', 'Mosel', 'Baden'],
          answer: 2,
          explanation: '酒精 8%、極高酸度、礦石板岩氣息三個特徵完美指向 Mosel：低酒精是 Mosel 最鮮明的識別特徵，板岩土壤帶來的礦石感是 Mosel 的風土靈魂，極高酸度則是 Saar/Ruwer 或 Mittelmosel 的共同特徵。'
        },
        {
          question: '以下哪個香氣特徵是 Rheingau Riesling 比 Mosel 更明顯的特色？',
          options: ['板岩礦石感', '蜂蜜與黃桃', '汽油礦石', '青蘋果檸檬'],
          answer: 1,
          explanation: '蜂蜜與黃桃是 Rheingau Riesling 的典型香氣，源自其較溫暖氣候帶來的更高成熟度，加上 Taunus 山脈的保護與黏土板岩混合土壤，賦予酒款更豐潤圓熟的果香。Mosel 則以板岩礦石感與青蘋果為主調。'
        }
      ]
    }
  ]
}

export const G3M2L3 = {
  lessonId: 'G3M2L3',
  title: '德國頂級年份解析 1971–2021',
  description: '掌握德國葡萄酒最重要的頂級年份、氣候影響與收藏判斷依據',
  objectives: ['掌握德國葡萄酒最重要的頂級年份', '了解氣候因素如何影響年份品質', '建立年份購買與收藏的判斷依據'],
  slides: [
    {
      type: 'title',
      title: '德國頂級年份解析',
      subtitle: '1971–2021 半世紀的偉大收穫',
      background: '#3d1515'
    },
    {
      type: 'timeline',
      title: '重要年份時間軸',
      events: [
        { year: '1971', title: '傳奇年份', desc: '甜型酒巔峰，TBA/Eiswein 集中出現，至今仍是拍賣市場最高價年份' },
        { year: '1976', title: '炎熱豐熟', desc: '炎熱乾燥，豐熟甜酒，Rheingau 表現最佳，甜型酒濃郁' },
        { year: '1990', title: '近代傳奇', desc: '平衡優雅，Mosel Auslese 極致，至今仍在巔峰，各產區全面出色' },
        { year: '1999', title: '甜蜜豐收', desc: '浪漫的甜蜜年，BA/TBA 豐收，Nahe/Mosel 表現極佳' },
        { year: '2001', title: '全面優秀', desc: 'Nahe 和 Mosel 精彩，乾型與甜型並重，行家公認的好年份' },
        { year: '2003', title: '炎夏特殊', desc: 'Pfalz/Baden 出色，Mosel 酸度略低，風格豐潤但與傳統 Riesling 風格不同' },
        { year: '2005', title: '近年最偉大之一', desc: '各產區均衡頂尖，公認的近代最偉大年份，酸甜完美平衡' },
        { year: '2007', title: '甜型酒完美', desc: '優異年份，甜型酒完美，BA/TBA/Eiswein 品質驚人' },
        { year: '2012', title: '乾型 GG 完美', desc: '涼爽緊緻，乾型 GG 完美年份，礦物感極為純粹' },
        { year: '2015', title: '溫暖豐收', desc: '溫暖豐潤，豐收且高質，甜型與 GG 雙雙出色' },
        { year: '2017', title: '全面頂尖', desc: 'Riesling 酸度與成熟度完美平衡，公認近年最全面的優秀年份' },
        { year: '2021', title: '涼爽精選', desc: '涼爽多雨但精選後品質優異，GG 礦物感出色，甜型酒糖酸精準' }
      ]
    },
    {
      type: 'list',
      title: '年份選購策略（依 Prädikat 等級）',
      items: [
        { icon: '🌿', text: 'Kabinett/Spätlese（即飲型）：選近 3–5 年，保持鮮活果香，不宜久存' },
        { icon: '🍑', text: 'Auslese（中期收藏）：好年份可陳 10–20 年，選 2005/2007/2017 年份' },
        { icon: '👑', text: 'BA/Eiswein/TBA（長期投資）：選 1971/1990/1999/2005，可陳 50 年以上' },
        { icon: '🍷', text: 'GG 乾型（現在適飲）：選 2012/2015/2017，已進入開放期，礦物感精彩' }
      ]
    },
    {
      type: 'comparison',
      title: '涼爽年份 vs 炎熱年份風格對比',
      left: { label: '❄️ 涼爽年份（2012/2021）', items: ['酸度高、緊緻、礦物感強烈', '乾型 GG 表現完美', '甜型酒糖酸平衡精準', 'Mosel/Nahe 最受惠', '可陳年潛力更長', '釀造挑戰度高但回報豐厚'] },
      right: { label: '☀️ 炎熱年份（2003/2015）', items: ['豐潤圓滿、低酸', '熱帶果香主導', '南部產區（Pfalz/Baden）佔優', '甜型酒濃郁但酸度稍低', '適飲期較短', '早期飲用往往最佳'] }
    },
    {
      type: 'stats',
      title: '頂級年份市場數據',
      stats: [
        { label: '1971 Egon Müller TBA', value: '拍賣價可達 €10,000+ / 瓶，傳奇極品' },
        { label: '2005 Dönnhoff Hermannshöhle GG', value: '已是頂級收藏家必備，二手市場高溢價' },
        { label: '最佳陳年性', value: 'Mosel TBA > Eiswein > Nahe Auslese（依酸度與糖分）' },
        { label: '投資回報率最高', value: 'VDP Grosse Lage 頂級酒莊的甜型酒（TBA/Eiswein）' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '被德國葡萄酒界譽為近年（2000 年後）最偉大年份之一，Riesling 酸度與成熟度完美平衡的是哪一年？',
          options: ['2003', '2008', '2017', '2013'],
          answer: 2,
          explanation: '2017 年被廣泛認定為 2000 年後德國最全面的頂尖年份，Riesling 的酸度與成熟度達到罕見的完美平衡，從 Mosel 到 Pfalz 各產區均表現出色，GG 乾型與 Auslese 甜型均精彩。'
        },
        {
          question: '想購買一瓶可陳年 30 年以上的德國葡萄酒作為長期投資，應選擇哪個年份類型？',
          options: ['近年 Kabinett', '2003 Spätlese', '1971/1999 TBA 或 Eiswein', '2015 GG 乾型'],
          answer: 2,
          explanation: '1971 或 1999 年的 TBA 或 Eiswein 是長期投資的最佳選擇：極高糖酸提供數十年保護，好年份進一步延長陳年潛力，頂級酒莊（如 Egon Müller）的此類酒款在拍賣市場持續升值。'
        }
      ]
    }
  ]
}

export const G3M3L1 = {
  lessonId: 'G3M3L1',
  title: '德國料理與葡萄酒完美搭配',
  description: '掌握德國傳統料理與葡萄酒的搭配邏輯，建立系統性餐酒配對思維',
  objectives: ['掌握德國傳統料理與葡萄酒的搭配邏輯', '了解酸度與油脂的互補原理', '建立系統性餐酒配對思維'],
  slides: [
    {
      type: 'title',
      title: '德國料理 × 葡萄酒',
      subtitle: '從豬腳到雷司令的完美對話',
      background: '#5D4037'
    },
    {
      type: 'content',
      title: '德式餐酒搭配哲學',
      content: '德國料理偏向豐腴油膩（豬肉、酸菜、奶油醬汁），需要高酸度葡萄酒來切穿油脂、清洗味蕾。Riesling 的高酸度加上不同甜度，可應對從清爽前菜到濃郁主菜的全方位搭配需求。煙燻香腸類與輕盈紅酒（Spätburgunder）也是完美搭檔——酸度與果味切穿肉類油脂，是黃金搭配哲學的核心。'
    },
    {
      type: 'list',
      title: '德國傳統料理搭配建議（詳細版）',
      items: [
        { icon: '🥩', text: '德國豬腳（Schweinshaxe）→ Pfalz Spätburgunder Trocken 或 Ahr Spätburgunder（單寧切油脂）' },
        { icon: '🥬', text: '酸菜豬肉（Sauerkraten）→ Rheinhessen Riesling Spätlese（甜酸平衡酸菜）' },
        { icon: '🌿', text: '白蘆筍（Weißer Spargel）→ Franken Silvaner Trocken 或 Pfalz Riesling（傳統最佳搭配）' },
        { icon: '🐟', text: '萊茵河鱸魚（Lachsforelle）→ Mosel Kabinett（輕盈海鮮配輕盈白酒）' },
        { icon: '🌭', text: '德國白腸（Weißwurst）→ Bavarian 白酒或 Franken Silvaner Trocken' },
        { icon: '🧀', text: '德國黑麵包配藍紋乳酪 → Rheingau Spätlese 或 Auslese（甜酸切乳酪脂）' },
        { icon: '🍎', text: '蘋果蛋糕（Apfelstrudel）→ Pfalz Riesling Auslese（甜配甜原則）' }
      ]
    },
    {
      type: 'list',
      title: '季節性搭配建議',
      items: [
        { icon: '🌸', text: '春季：白蘆筍季（4–6 月）→ 全德最重要的葡萄酒配餐季，Silvaner/Riesling 不甜白酒' },
        { icon: '☀️', text: '夏季：BBQ 烤肉、沙拉 → Pfalz 粉紅酒、Baden Weißburgunder 清爽易飲' },
        { icon: '🍂', text: '秋季：狩獵季（鹿肉、野豬）→ Baden Spätburgunder、Württemberg Lemberger 豐潤紅酒' },
        { icon: '❄️', text: '冬季：暖鍋、燉菜 → Rheingau Riesling Auslese、Moselbrandwein 白蘭地' }
      ]
    },
    {
      type: 'comparison',
      title: '乾型 vs 甜型 Riesling 配餐差異',
      left: { label: '🍷 乾型（Trocken）', items: ['搭配海鮮、白蘆筍', '清淡白肉（雞肉、豬里肌）', '沙拉、清爽前菜', '亞洲清蒸料理', '硬質乳酪', '適合整頓餐貫穿'] },
      right: { label: '🍯 甜型（Spätlese/Auslese）', items: ['搭配辛辣料理', '酸菜豬肉', '軟質乳酪與藍紋乳酪', '甜點（甜配甜）', '亞洲辣味料理', '適合餐後甜點搭配'] }
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '德國白蘆筍（Weißer Spargel）的傳統最佳搭配是哪款葡萄酒？',
          options: ['Mosel Eiswein', 'Franken Silvaner Trocken', 'Ahr Spätburgunder', 'Baden Spätburgunder'],
          answer: 1,
          explanation: 'Franken Silvaner Trocken 是德國白蘆筍的傳統最佳搭配，Silvaner 乾爽的大地礦物感與白蘆筍的清甜微苦形成天然共鳴，是德國春季最經典的餐酒配對，也是 Franken 產區的驕傲。'
        },
        {
          question: '搭配德式烤豬腳（Schweinshaxe）最合適的選擇是？',
          options: ['Mosel Kabinett', 'Rheingau Auslese', 'Pfalz Spätburgunder Trocken', 'Franken Müller-Thurgau'],
          answer: 2,
          explanation: 'Pfalz Spätburgunder Trocken 是德式烤豬腳的最佳搭檔，紅酒的單寧與果酸能切穿豬腳的油脂與膠質，Pfalz 溫暖氣候帶來的豐潤果味也與豬腳的焦香外皮形成完美呼應。'
        }
      ]
    }
  ]
}

export const G3M3L2 = {
  lessonId: 'G3M3L2',
  title: 'Riesling 的亞洲料理伙伴',
  description: '理解 Riesling 與亞洲料理的搭配原理，掌握甜度選擇與辣度的對應關係',
  objectives: ['理解 Riesling 與亞洲料理的搭配原理', '掌握甜度選擇與辣度的對應關係', '建立亞洲料理配德國酒的框架'],
  slides: [
    {
      type: 'title',
      title: 'Riesling × 亞洲料理',
      subtitle: '跨文化的餐桌奇遇',
      background: '#1a3a2a'
    },
    {
      type: 'content',
      title: '為什麼 Riesling 是亞洲料理的完美搭配',
      content: '亞洲料理普遍特色是辛辣、甜酸、複雜香料、鮮味（Umami）主導。Riesling 的高酸度能切穿鮮味油膩；帶有殘糖的 Spätlese/Auslese 能中和辣度；花果香氣與亞洲香料形成天然共鳴。這是「跨文化最佳配對」之一，讓侍酒師在全球亞洲餐廳中首推德國 Riesling，是現代餐酒搭配最令人興奮的發現。'
    },
    {
      type: 'list',
      title: '中式料理搭配',
      items: [
        { icon: '🦐', text: '廣式點心（蝦餃、燒賣）→ Mosel Kabinett（輕盈配輕盈）' },
        { icon: '🦆', text: '北京烤鴨 → Rheingau Spätlese（豐潤油脂配甜酸白酒）' },
        { icon: '🌶️', text: '四川麻辣火鍋 → Riesling Auslese（高糖分中和辣度，廚師間的秘密武器）' },
        { icon: '🥟', text: '上海小籠包 → Pfalz Riesling Spätlese（豐潤果香配豬肉湯汁）' },
        { icon: '🐟', text: '廣東清蒸石班魚 → Mosel Riesling Spätlese（細膩配細膩）' }
      ]
    },
    {
      type: 'list',
      title: '日韓泰料理搭配',
      items: [
        { icon: '🍣', text: '日式壽司（鮭魚/鮪魚）→ Mosel Kabinett（完美配對，礦石+鮮魚）' },
        { icon: '🍤', text: '天婦羅 → Rheinhessen Riesling Trocken（清脆高酸切炸衣油膩）' },
        { icon: '🥩', text: '韓式烤肉（삼겹살）→ Rheingau Riesling Spätlese 或 Ahr Spätburgunder' },
        { icon: '🥘', text: '韓式泡菜豬肉鍋 → Riesling Auslese（甜酸中和泡菜酸辣）' },
        { icon: '🍛', text: '泰式綠咖哩 → Riesling Auslese（甜度 ≥ 辣度，防口腔灼燒）' },
        { icon: '🍜', text: '越南河粉 → Mosel Kabinett（清爽配清爽，香草+礦石）' }
      ]
    },
    {
      type: 'stats',
      title: '侍酒師選酒甜度指南',
      stats: [
        { label: '料理辣度 0（清淡）', value: 'Kabinett 或 Trocken' },
        { label: '料理辣度 1（微辣）', value: 'Spätlese' },
        { label: '料理辣度 2（中辣）', value: 'Auslese' },
        { label: '料理辣度 3（大辣）', value: 'Auslese 或 Beerenauslese（原則：殘糖越高越能中和辣度）' }
      ]
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '搭配四川麻辣火鍋，侍酒師最常推薦哪種德國葡萄酒？',
          options: ['Mosel Kabinett', 'Ahr Spätburgunder', 'Riesling Auslese', 'Franken Silvaner Trocken'],
          answer: 2,
          explanation: 'Riesling Auslese 是四川麻辣火鍋的秘密武器：高殘糖能有效中和辣度灼燒感，防止口腔被辣癱；高酸度清洗油膩鮮味；花果香與麻辣香料形成驚人共鳴，是廚師與侍酒師之間公認的最佳配對。'
        },
        {
          question: '以下哪道料理最適合搭配 Mosel Kabinett？',
          options: ['北京烤鴨', '四川麻辣燙', '日式鮭魚壽司', '韓式烤五花肉'],
          answer: 2,
          explanation: 'Mosel Kabinett 以其極輕盈的酒體、超低酒精（7–9%）、清爽礦石感與細膩酸度，最適合搭配日式鮭魚壽司——鮭魚的細膩鮮味與礦石感形成完美共鳴，輕盈的酒體也不會壓過壽司的清淡風味。'
        }
      ]
    }
  ]
}

export const G3FinalExam = {
  lessonId: 'G3FinalExam',
  title: 'Level 3 綜合評量',
  description: '測試您對 Level 3 全部內容的掌握程度：VDP 分級、頂級酒莊、盲品技巧、年份與餐酒搭配',
  isFinalExam: true,
  objectives: ['複習 VDP 四級分類與 GG 知識', '複習盲品辨識與年份評鑑', '複習德式與亞洲料理餐酒搭配'],
  slides: [
    {
      type: 'title',
      title: 'Level 3 綜合評量',
      subtitle: 'VDP・盲品・頂級年份・餐酒搭配',
      background: '#9C27B0'
    },
    {
      type: 'quiz',
      title: '第一部分：VDP 分級與頂級酒莊',
      questions: [
        {
          question: 'VDP 四級中最高等級的乾型白酒稱為？',
          options: ['Erste Lage', 'Grosses Gewächs', 'Gutswein', 'Ortswein'],
          answer: 1,
          explanation: 'Grosses Gewächs（GG）是 VDP Grosse Lage 頂級葡萄園釀造的乾型白酒，代表德國乾型白酒金字塔的最高峰，相當於布根地的 Grand Cru。'
        },
        {
          question: 'Egon Müller 最著名的旗艦葡萄園位於哪個產區？',
          options: ['Rheingau', 'Nahe', 'Mosel 的 Saar', 'Pfalz'],
          answer: 2,
          explanation: 'Egon Müller 的旗艦葡萄園 Scharzhofberg 位於 Mosel 的 Saar 支流流域，其 Scharzhofberger TBA 是德國在國際拍賣市場上最昂貴的葡萄酒。'
        },
        {
          question: 'VDP Grosse Lage 最低產量限制（Riesling）是多少 hL/ha？',
          options: ['≤ 30', '≤ 50', '≤ 70', '≤ 100'],
          answer: 1,
          explanation: 'VDP 規定 Grosse Lage（頂級園）的 Riesling 產量上限為 50 hL/ha，遠低於一般葡萄園，確保葡萄的高濃縮度與風土特性表達。'
        },
        {
          question: 'Keller 酒莊位於哪個產區，以哪個旗艦 GG 聞名？',
          options: ['Mosel，Scharzhofberger', 'Rheinhessen，Morstein', 'Nahe，Hermannshöhle', 'Rheingau，Rauenthaler Baiken'],
          answer: 1,
          explanation: 'Keller 酒莊位於 Rheinhessen，以 Morstein GG 聞名全球，被認為是德國乾型 Riesling 的頂峰之一，每年上市即遭全球藏家搶購。'
        },
        {
          question: 'VDP 制度中「Erste Lage」對應的概念最接近法國哪個等級？',
          options: ['AOC', 'Grand Cru', 'Premier Cru', 'Cru Bourgeois'],
          answer: 2,
          explanation: 'Erste Lage（一級園）對應法國布根地的 Premier Cru，是 VDP 四級中的第二高等，次於 Grosse Lage（對應 Grand Cru），代表優秀但尚未達到頂級的葡萄園。'
        }
      ]
    },
    {
      type: 'quiz',
      title: '第二部分：盲品辨識與年份評鑑',
      questions: [
        {
          question: '一款德國 Riesling 酒精只有 8%、酸度極高、明顯礦石氣息，最可能是？',
          options: ['Rheingau Spätlese', 'Pfalz Auslese', 'Mosel Kabinett', 'Baden Trocken'],
          answer: 2,
          explanation: '酒精 8%、極高酸度、礦石氣息三個特徵完美指向 Mosel Kabinett：Mosel 低酒精是鐵律，板岩礦石感是風土靈魂，Kabinett 是最輕盈的 Prädikat 等級。'
        },
        {
          question: 'TDN 化合物在 Riesling 中造成什麼香氣特徵？',
          options: ['草莓果醬', '烤橡木', '汽油礦石香', '奶油香草'],
          answer: 2,
          explanation: 'TDN（1,1,6-三甲基-1,2-二氫萘）是陳年 Riesling 特有的汽油礦石香氣的化學來源，在瓶中緩慢形成，是頂級 Riesling 成熟的標誌性特徵，非缺陷。'
        },
        {
          question: '以下哪個年份被認為是德國 2000 年後最優秀的全面性年份？',
          options: ['2003', '2008', '2017', '2013'],
          answer: 2,
          explanation: '2017 年被廣泛認定為 2000 年後德國最全面頂尖的年份，Riesling 酸度與成熟度完美平衡，從 Mosel 到 Pfalz 各產區均表現出色，GG 乾型與 Auslese 甜型雙雙精彩。'
        },
        {
          question: 'Riesling Kabinett 的建議適飲期大約是幾年？',
          options: ['30–50 年', '5–15 年', '1–2 年', '50 年以上'],
          answer: 1,
          explanation: 'Riesling Kabinett 是 Prädikat 中最輕盈的等級，適飲期通常為 5–15 年，在這段時間內能展現最清爽礦物的巔峰風格；超過 15–20 年後往往開始衰退。'
        },
        {
          question: '哪個德國產區被認為釀造出最能長期陳年的 Riesling？',
          options: ['Pfalz', 'Baden', 'Mosel', 'Württemberg'],
          answer: 2,
          explanation: 'Mosel 的 Riesling 以德國乃至世界最高的陳年潛力著稱，得益於極高酸度（尤其 Saar/Ruwer 支流）、低酒精保護與板岩土壤賦予的礦物結構，頂級 TBA 可陳年 50–80 年以上。'
        }
      ]
    },
    {
      type: 'quiz',
      title: '第三部分：德式與亞洲料理餐酒搭配',
      questions: [
        {
          question: '德國白蘆筍傳統配酒首選是？',
          options: ['Mosel Eiswein', 'Baden Spätburgunder', 'Franken Silvaner Trocken', 'Ahr Rotling'],
          answer: 2,
          explanation: 'Franken Silvaner Trocken 是德國白蘆筍最傳統、最經典的搭配，Silvaner 的大地礦物感與白蘆筍的清甜微苦天然契合，是每年春季蘆筍季的指定首選。'
        },
        {
          question: '以下哪道亞洲料理與 Riesling Auslese 最搭？',
          options: ['清蒸鱸魚', '四川麻辣火鍋', '日式生魚片', '越南河粉'],
          answer: 1,
          explanation: 'Riesling Auslese 的高殘糖是中和四川麻辣火鍋辣度的最佳武器，侍酒師稱之為「辣度中和劑」，高酸度同時清洗麻辣油膩感，是跨文化餐酒搭配中最令人驚喜的組合。'
        },
        {
          question: '搭配德式烤豬腳（Schweinshaxe）最合適的選擇是？',
          options: ['Mosel Eiswein', 'Franken Silvaner Trocken', 'Pfalz Spätburgunder Trocken', 'Rheinhessen Kabinett'],
          answer: 2,
          explanation: 'Pfalz Spätburgunder Trocken 是德式烤豬腳的最佳搭檔：紅酒的單寧切穿豬腳的油脂與膠質，Pfalz 的豐潤果味與焦香豬皮形成完美共鳴，是德國最經典的紅酒配肉組合。'
        },
        {
          question: '以下哪個原則是「辣度配甜度」的核心邏輯？',
          options: ['辣感使甜味更突出', '殘糖能中和口腔辣度灼熱感', '甜型酒的酒精度低', '甜味抑制鮮味'],
          answer: 1,
          explanation: '「辣度配甜度」的核心在於殘糖能有效中和口腔的辣度灼熱感——甜味在味覺上能緩衝辣椒素對口腔黏膜的刺激，讓用餐者能品嘗辣味而不至於被灼燒感主宰，是侍酒師選酒的重要原則。'
        },
        {
          question: '侍酒師應為四川麻辣料理選擇哪個 Prädikat 等級的 Riesling？',
          options: ['Kabinett', 'Trocken', 'Auslese', 'Beerenauslese'],
          answer: 2,
          explanation: 'Auslese 是四川麻辣料理的最佳搭配等級：殘糖量足以中和中等至強辣度，高酸度清洗鮮味油膩，複雜的花果香與麻辣香料形成共鳴，是「辣度 2–3 → Auslese」原則的核心應用。'
        }
      ]
    },
    {
      type: 'content',
      title: '🎉 恭喜完成 Level 3！',
      content: '恭喜您完成了德國葡萄酒 Level 3 全部課程！\n\n您已掌握：\n• G3M1 VDP 精英分級體系——從 Gutswein 到 Grosse Lage 的四層金字塔、Grosses Gewächs 的嚴格法規、以及 Egon Müller/Dönnhoff/Keller 等頂級名莊的風格特色\n• G3M2 進階品飲技巧——Riesling 的 TDN 汽油香氣成因與熟成時間軸、Mosel vs Rheingau 盲品辨識四步驟、1971–2021 半世紀頂級年份的選購策略\n• G3M3 餐酒搭配藝術——德國傳統料理的高酸配油脂哲學、四川麻辣火鍋的秘密武器（Auslese）、以及「辣度對應甜度」的侍酒師核心原則\n\n德國葡萄酒的世界深不見底——繼續以品飲、收藏與探索，感受這片土地上千年釀酒智慧的無限深度。您現在已是真正的德國葡萄酒知識者！'
    }
  ]
}

// ── 通用 lesson 生成函數 ───────────────────────────────────────────────────
export function getLesson(lessonId) {
  const map = {
    G1M1L1, G1M1L2, G1M1L3,
    G1M2L1, G1M2L2, G1M2L3,
    G1M3L1, G1M3L2, G1M3L3,
    G1M4L1, G1FinalExam,
    G2M1L1,
    G2M1L2, G2M1L3, G2M1L4,
    G2M2L1, G2M2L2, G2M2L3, G2M2L4,
    G2M3L1, G2M3L2, G2M3L3, G2M3L4,
    G2M4L1, G2M4L2, G2M4L3,
    G2FinalExam,
    G3M1L1, G3M1L2, G3M1L3,
    G3M2L1, G3M2L2, G3M2L3,
    G3M3L1, G3M3L2,
    G3FinalExam,
  }
  if (map[lessonId]) return map[lessonId]

  // fallback：自動生成簡單課程
  return {
    lessonId,
    title: lessonId,
    description: '課程內容',
    objectives: ['完成本課程'],
    slides: [
      {
        type: 'content',
        title: '課程內容',
        content: '此課程內容正在撰寫中，請先探索其他課程或使用互動地圖。'
      }
    ]
  }
}
