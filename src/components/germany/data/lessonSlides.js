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
          question: '「germany-regions-overview」互動探索中，以下哪個是屬於「北/東部寢凉」類別的產區？',
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
          options: ['熱帶水果、圓潤豐滿', '礦石、煙燻、高酸輕盈', '蛂蜜、花香、中等酒體', '黄奥、肉桂、售萃感'],
          answer: 1,
          explanation: '藍色板岩（Blue Slate）反射熱量、儲熱並提供低 pH 門質變化，讓 Mosel Riesling 產生明顯的礦石、煙燻與刷牿般的高酸，同時酒精低（7–9%）、身體輕盈。'        }
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
      title: '🍇 德國重要白葡萄品種',
      items: [
        { icon: '🌿', text: 'Müller-Thurgau：種植面積第二，清爽易飲，Rheinhessen 多見' },
        { icon: '🏛️', text: 'Silvaner：Franken 的靈魂品種，扁圓瓶（Bocksbeutel），乾爽礦物' },
        { icon: '🌸', text: 'Grauburgunder（灰皮諾）：Baden 尤多，豐潤圓滑，杏桃蜂蜜' },
        { icon: '🥂', text: 'Weißburgunder（白皮諾）：清爽優雅，酸度鮮明，也用於 Sekt' },
        { icon: '🌺', text: 'Gewürztraminer：香料荔枝玫瑰，甜熟感強，Pfalz 多見' },
        { icon: '🌾', text: 'Scheurebe：Riesling 的交配品種，濃郁黑醋栗葡萄柚' }
      ]
    },
    {
      type: 'comparison',
      title: 'Silvaner vs Müller-Thurgau',
      left: { label: '🏛️ Silvaner', items: ['Franken 代表品種', '乾爽（Trocken）為主', '礦物感、大地氣息', '酒體中等至飽滿', 'Bocksbeutel 特殊瓶型'] },
      right: { label: '🌿 Müller-Thurgau', items: ['德國種植量第二', '清爽低酸', '花香、青蘋果', '酒精偏低', '日常飲用佳品'] }
    },
    {
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: 'Silvaner 葡萄品種最著名的產區是？',
          options: ['Mosel', 'Rheingau', 'Franken', 'Ahr'],
          answer: 2,
          explanation: 'Franken（法蘭克）是 Silvaner 的聖地，Silvaner 在此展現最佳表現，以扁圓形的 Bocksbeutel 瓶裝瓶，酒體乾爽飽滿，有著典型的礦物感。'
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
      type: 'content',
      title: '🏆 Ahr — 德國紅酒聖地',
      content: 'Ahr 是德國最著名的紅酒產區，以 Spätburgunder 著稱。儘管地處德國北部（北緯 50.5 度），但陡峭的河谷地形與火山板岩土壤創造出溫暖的微氣候，使黑皮諾能完全成熟。Ahr 的頂級 Spätburgunder 呈現出勃根地般的優雅——鮮紅色澤、紅莓香料、細緻單寧，讓世界為之驚豔。'
    },
    {
      type: 'spatburgunder-regions',
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
          question: '「qmp-sweetness」階梯中，TBA（Trockenbeerenauslese）采收葡萄的閃長重點在于？',
          options: ['葡萄冰凍', '進步貴腐菌感染與脳鈴在子兩重豝關', '採尚未熟高酸葡萄', '夜間采收避光'],
          answer: 1,
          explanation: 'TBA 采用貴腐菌（Botrytis）總收乾枯葡萄，透過遾遰採收、集水並澌變，推進水變最高，在子 150–154°Oe以上。甊象品專集澌走全手采摄，釁成品子金黃陳年潛力 50+ 年。'
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
      type: 'quiz',
      title: '快速測驗',
      questions: [
        {
          question: '搭配辛辣泰式料理，最適合選擇哪種德國葡萄酒？',
          options: ['Ahr Spätburgunder（不甜紅酒）', 'Riesling Auslese（半甜白酒）', 'Silvaner Trocken（不甜白酒）', 'Sekt（氣泡酒）'],
          answer: 1,
          explanation: '辛辣食物與帶有殘糖的甜型 Riesling 是黃金組合，甜度能中和辣感，高酸度清洗味蕾，Auslese 的豐潤果味也能與泰式香料形成美妙對話。'
        }
      ]
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

// ── 通用 lesson 生成函數 ───────────────────────────────────────────────────
export function getLesson(lessonId) {
  const map = {
    G1M1L1, G1M1L2, G1M1L3,
    G1M2L1, G1M2L2, G1M2L3,
    G1M3L1, G1M3L2, G1M3L3,
    G1M4L1,
    G2M1L1,
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
