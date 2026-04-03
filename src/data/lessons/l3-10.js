// L3-10: 波爾多葡萄酒的配餐藝術
// 掌握專業配餐原則，探索波爾多酒款與各國料理的完美搭配

export const l310Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          餐酒搭配是葡萄酒文化中最迷人的藝術之一。當波爾多的單寧遇見牛排的油脂，當貴腐甜酒配上鵝肝的豐腴，當老年份的複雜香氣與野味的濃郁風味交織，一個完美的搭配能讓美食與美酒相互提升，創造 1+1>2 的美妙體驗。
        </p>

        <p class="intro-context">
          本課程將帶您深入探索配餐的科學原理——單寧如何軟化蛋白質、酸度如何平衡油脂、甜度如何對抗辛香。從波爾多紅酒與法國經典料理的傳統組合，到與中餐、日料、泰菜的創新搭配實驗，我們將系統學習配餐的邏輯與技巧，並掌握設計專業多道式餐酒菜單的原則。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 掌握配餐的科學原理</h4>
            <p>理解單寧、酸度、甜度、酒體、香氣如何與食物產生化學與味覺互動</p>
          </div>

          <div class="point-item">
            <h4>🥩 學習經典搭配邏輯</h4>
            <p>掌握波爾多紅酒與牛排、羊肉、野味的傳統組合原理與實踐技巧</p>
          </div>

          <div class="point-item">
            <h4>🦞 理解白酒甜酒搭配</h4>
            <p>學習波爾多白酒與海鮮、甜酒與鵝肝、乳酪的完美組合方法</p>
          </div>

          <div class="point-item">
            <h4>🍜 探索亞洲料理創新搭配</h4>
            <p>突破傳統，發現波爾多酒款與中餐、日料、泰菜的和諧搭配可能性</p>
          </div>

          <div class="point-item">
            <h4>📋 掌握餐酒菜單設計</h4>
            <p>學習設計多道式餐酒菜單的原則、順序安排與酒款選擇技巧</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠自信地為各種場合設計完美的餐酒搭配，充分展現波爾多葡萄酒的魅力。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>35分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🍽️'
  },

  // ========== 第一章：配餐的科學原理 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '配餐的科學原理',
    subtitle: '理解味覺與化學的互動',
    icon: '🧪',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '配餐為什麼重要？',
    content: [
      {
        subtitle: '味覺的相互作用',
        text: '食物與葡萄酒的搭配不是簡單的相加，而是複雜的化學與感官互動。一個好的搭配能讓食物更美味、酒更順口；糟糕的搭配則會放大缺點、產生不愉快的味覺體驗。',
        highlight: '關鍵概念：互補與對比是配餐的兩大核心策略'
      },
      {
        subtitle: '科學基礎',
        text: '配餐涉及味覺（甜、酸、苦、鹹、鮮）、嗅覺（香氣）、觸覺（質地、溫度）的多維度互動。理解這些感官元素如何相互影響，是專業配餐的基礎。'
      }
    ]
  },

  {
    type: 'content',
    title: '單寧的配餐作用',
    content: [
      {
        subtitle: '單寧與蛋白質的化學反應',
        text: '單寧（Tannin）是多酚類化合物，在口腔中產生澀感。當遇到蛋白質時，單寧會與蛋白質結合，形成沉澱物，從而減少澀感，同時蛋白質的脂肪也會柔化單寧的刺激性。',
        keyPoints: [
          '紅肉（牛排、羊排）富含蛋白質和脂肪，能完美中和單寧',
          '高單寧的波爾多紅酒與紅肉是天作之合',
          '魚類蛋白質較少，搭配高單寧紅酒會產生金屬味、苦澀感',
          '單寧還能切割油膩感，清爽口腔'
        ]
      },
      {
        subtitle: '實例分析',
        text: '為什麼Pauillac紅酒配牛排如此經典？Pauillac酒款單寧充沛、結構強勁，牛排的蛋白質和油脂能完美馴服這些單寧，同時單寧的澀感能切開肉的油膩，形成完美平衡。'
      }
    ]
  },

  {
    type: 'content',
    title: '酸度的配餐作用',
    content: [
      {
        subtitle: '酸度的多重功能',
        text: '酸度是葡萄酒的骨架，在配餐中扮演關鍵角色。它能提升新鮮感、切割油膩、平衡甜度、增強風味。',
        keyPoints: [
          '油膩食物（炸物、肥肉）需要高酸度酒款來平衡',
          '酸度能提升食物的鮮味，特別是海鮮',
          '甜食需要更高酸度的酒，否則酒會顯得平淡',
          '酸度不足的酒搭配酸味食物會顯得軟弱無力'
        ]
      },
      {
        subtitle: '波爾多白酒的酸度優勢',
        text: 'Pessac-Léognan的白酒以白蘇維濃為主，酸度爽脆，搭配生蠔、白魚、山羊乳酪等食物時，酸度能提升海洋鮮味，創造清爽的體驗。'
      }
    ]
  },

  {
    type: 'content',
    title: '甜度的配餐作用',
    content: [
      {
        subtitle: '甜度搭配的黃金法則',
        text: '配餐的一條鐵律：葡萄酒的甜度必須高於或等於食物的甜度。否則酒會顯得酸澀、缺乏果味。',
        highlight: '法則：Wine ≥ Food 的甜度'
      },
      {
        subtitle: '甜度的平衡作用',
        text: '甜度能平衡辛辣、切割油脂、柔化鹹味。Sauternes甜白酒搭配鵝肝、藍紋乳酪、辛辣菜餚時，甜度能創造和諧的對比。',
        keyPoints: [
          '鵝肝的油膩被甜度切割，酒的甜度被油脂平衡',
          '藍紋乳酪的鹹味被甜度柔化',
          '辛辣料理（泰式咖哩）的辣度被甜度緩解',
          '水果甜點需要更甜的酒（如Sauternes）'
        ]
      }
    ]
  },

  {
    type: 'content',
    title: '酒體與質地的配餐',
    content: [
      {
        subtitle: '酒體的重量感',
        text: '酒體（Body）是指葡萄酒在口腔中的重量感和豐滿度，由酒精度、萃取物、甘油等決定。配餐時，酒體應與食物的重量相匹配。',
        pairingPrinciple: [
          '輕酒體（Bordeaux AOC）→ 輕食物（沙拉、白魚）',
          '中酒體（Haut-Médoc）→ 中等食物（烤雞、豬肉）',
          '重酒體（Pauillac一級莊）→ 重食物（牛排、野味）'
        ]
      },
      {
        subtitle: '質地的和諧',
        text: '食物的質地（細膩、粗糙、滑順、酥脆）也需要考慮。絲滑的鵝肝適合質地豐潤的Sauternes，酥脆的炸物適合氣泡酒的顆粒感。'
      }
    ]
  },

  // ========== 知識檢測：配餐科學原理 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：配餐科學原理',
    questions: [
      {
        question: '單寧與蛋白質結合的化學反應如何改善配餐體驗？',
        options: [
          '單寧會增加食物的鮮味',
          '蛋白質軟化單寧的澀感，單寧切開肉類的油膩感',
          '單寧與蛋白質會產生苦味',
          '兩者不會發生化學反應'
        ],
        correct: 1,
        explanation: '單寧與蛋白質結合是紅酒配紅肉的科學基礎。食物中的蛋白質能軟化單寧的澀感，而單寧又能切開肉類的油膩感，創造出相互提升的效果。'
      },
      {
        question: '在酒體與食物重量的匹配中，重酒體的Pauillac一級莊最適合搭配什麼類型的食物？',
        options: [
          '清淡的海鮮',
          '烤雞和豬肉',
          '牛排和野味等重食物',
          '沙拉和蔬菜'
        ],
        correct: 2,
        explanation: '根據酒體與食物重量匹配原則，重酒體的Pauillac一級莊適合搭配牛排、野味等重食物，中酒體的Haut-Médoc適合烤雞豬肉，輕酒體的Entre-Deux-Mers適合清淡食物。'
      }
    ]
  },

  // ========== 第二章：波爾多紅酒的經典搭配 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '波爾多紅酒的經典搭配',
    subtitle: '紅酒與紅肉的完美組合',
    icon: '🥩',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },

  {
    type: 'content',
    title: '牛排的完美搭配',
    content: [
      {
        subtitle: '左岸卡本內主導的配牛排邏輯',
        text: '牛排富含蛋白質和脂肪，需要單寧充沛、結構強勁的紅酒來平衡。左岸的Pauillac、Saint-Julien、Margaux都是絕佳選擇。',
        detailedPairing: [
          {
            steak: '紐約客/西冷牛排（Strip Steak）',
            wine: 'Château Pichon Baron (Pauillac)',
            reason: '西冷肉質緊實、油花適中，需要中高單寧的酒款。Pauillac的黑醋栗、雪松與牛排的炭火香氣完美呼應。'
          },
          {
            steak: '菲力牛排（Filet Mignon）',
            wine: 'Château Margaux',
            reason: '菲力極其細嫩、脂肪較少，需要更優雅細緻的酒款。Margaux的絲滑單寧、花香與菲力的細膩質地和諧共舞。'
          },
          {
            steak: '肋眼牛排（Ribeye）',
            wine: 'Château Latour',
            reason: '肋眼油花豐富、風味濃郁，需要強勁有力的酒款。Latour的厚重單寧、複雜層次能hold住肋眼的豐腴。'
          },
          {
            steak: 'T骨牛排（T-Bone）',
            wine: 'Château Lynch-Bages',
            reason: 'T骨兼具菲力和西冷，需要平衡力量與優雅的酒款。Lynch-Bages的果味與結構恰到好處。'
          }
        ]
      },
      {
        subtitle: '烹調方式的影響',
        text: '牛排的烹調方式（炭烤、煎、燉）和醬汁（紅酒醬、胡椒醬、蘑菇醬）也影響配酒選擇。',
        tips: [
          '炭烤牛排：選擇有煙燻、烘烤氣息的酒款（橡木桶重烘烤）',
          '紅酒醬牛排：酒款風格應與醬汁用酒相近',
          '胡椒醬：需要果味濃郁的酒平衡辛辣',
          '三分熟：果味主導的年輕酒款；七分熟：陳年酒款'
        ]
      }
    ]
  },

  {
    type: 'content',
    title: '羊肉的搭配藝術',
    content: [
      {
        subtitle: '羊肉的特殊挑戰',
        text: '羊肉有獨特的膻味（羊脂肪酸），需要酒款能包裹、轉化這種氣味，而不是對抗。右岸的梅洛主導酒款是絕佳選擇。',
        classicPairings: [
          {
            dish: '香煎羊排配迷迭香',
            wine: 'Château Pétrus (Pomerol)',
            reason: '梅洛的圓潤果味能包裹羊肉的膻味，迷迭香的草本與Pomerol的礦物質呼應。Pétrus的天鵝絨質地與羊排細膩度完美匹配。'
          },
          {
            dish: '烤羊腿配蒜蓉',
            wine: 'Château Cheval Blanc (St-Émilion)',
            reason: 'Cheval Blanc獨特的卡本內弗朗比例（40%）帶來草本、紫羅蘭氣息，與蒜蓉和羊肉和諧。'
          },
          {
            dish: '燉羊肉配紅酒醬',
            wine: 'Château Canon (St-Émilion)',
            reason: '燉煮的羊肉質地柔軟、風味濃郁，Canon的石灰岩風土帶來的礦質感和陳年潛力完美搭配。'
          }
        ]
      },
      {
        subtitle: '地域風格的呼應',
        text: '法國西南部（包括波爾多）傳統上就是羊肉產區（如Pauillac羊），波爾多紅酒與羊肉的經典搭配有深厚的地域文化根基。'
      }
    ]
  },

  {
    type: 'content',
    title: '野味與陳年酒款',
    content: [
      {
        subtitle: '野味的複雜風味',
        text: '野味（鹿肉、野豬、野鴨、野兔）肉質緊實、風味濃烈，常有泥土、森林氣息，需要陳年的波爾多紅酒來匹配。',
        ageMatters: '野味最適合10-20年陳年的波爾多紅酒，因為陳年後的三層香氣（皮革、雪茄盒、松露、森林地面）與野味的風土氣息完美呼應。'
      },
      {
        subtitle: '經典野味配酒',
        pairing: [
          {
            game: '烤鹿肉配紅酒醬與黑莓',
            wine: '陳年15年的Château Pichon Longueville Comtesse de Lalande',
            reason: '鹿肉的緊實肉質、黑莓的酸甜、紅酒醬的濃郁，需要陳年帶來的複雜度與柔化的單寧。'
          },
          {
            game: '紅燒野鴨配橙醬',
            wine: '陳年10年的Château Ducru-Beaucaillou',
            reason: '野鴨的油脂、橙醬的酸甜、肉質的韌性，與Saint-Julien的平衡風格完美契合。'
          },
          {
            game: '野豬肉醬意大利麵',
            wine: 'Château Montrose (St-Estèphe)',
            reason: '野豬肉的強勁風味需要St-Estèphe的力量與土壤氣息支撐。'
          }
        ]
      }
    ]
  },

  // ========== 知識檢測：紅酒經典搭配 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：紅酒經典搭配',
    questions: [
      {
        question: 'Pauillac一級莊（如Château Latour）最適合搭配什麼類型的牛排？',
        options: [
          '清淡的魚排',
          '頂級和牛（油花豐富的A5等級）',
          '烤雞胸肉',
          '蔬菜沙拉'
        ],
        correct: 1,
        explanation: 'Pauillac一級莊如Château Latour擁有強勁結構和豐富單寧，最適合搭配油花豐富的頂級和牛（A5等級），油脂能軟化單寧，單寧切開脂肪，達到完美平衡。'
      },
      {
        question: '法式紅酒燉牛肉（Boeuf Bourguignon）的最佳配酒原則是什麼？',
        options: [
          '選擇比烹飪用酒更便宜的酒',
          '選擇與烹飪同款或同風格的酒',
          '選擇白葡萄酒',
          '選擇甜酒'
        ],
        correct: 1,
        explanation: '紅酒燉牛肉的配酒原則是選擇與烹飪同款或同風格的酒。如果用Pomerol燉煮，就搭配Pomerol；這樣可以讓菜餚與酒的風味完美呼應。'
      }
    ]
  },

  // ========== 第三章：波爾多白酒與甜酒搭配 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '波爾多白酒與甜酒搭配',
    subtitle: '從海鮮到甜點的優雅之選',
    icon: '🦪',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '干白酒與海鮮',
    content: [
      {
        subtitle: '生蠔的絕配',
        text: '生蠔的鮮味、海洋礦質感、細膩質地，需要高酸度、礦質感明顯的白酒。Pessac-Léognan是首選。',
        classicMatch: [
          {
            oyster: 'Gillardeau 3號生蠔',
            wine: 'Château Smith Haut Lafitte Blanc',
            reason: '白蘇維濃的檸檬酸度、葡萄柚氣息與生蠔的海洋鮮味完美提升，礦質感呼應。'
          },
          {
            oyster: 'Marennes-Oléron生蠔',
            wine: 'Domaine de Chevalier Blanc',
            reason: '這款生蠔帶有淡淡的榛果味，Chevalier Blanc的賽美容比例帶來的堅果氣息完美呼應。'
          }
        ]
      },
      {
        subtitle: '白魚與海鮮',
        pairing: [
          '烤鱸魚 → Château Carbonnieux Blanc（清爽酸度、草本）',
          '奶油龍蝦 → Château Haut-Brion Blanc（豐厚酒體、橡木桶）',
          '清蒸比目魚 → Château Couhins-Lurton（細膩礦質）',
          '扇貝 → Clos Floridène Blanc（果味與礦質平衡）'
        ]
      }
    ]
  },

  {
    type: 'content',
    title: 'Sauternes的甜蜜藝術',
    content: [
      {
        subtitle: '鵝肝的經典組合',
        text: '鵝肝與Sauternes被譽為"天堂的組合"。鵝肝的豐腴油脂被甜度切割，Sauternes的蜂蜜、杏桃乾風味與鵝肝的細膩質地完美融合。',
        highlight: '為什麼這麼完美？甜度切割油脂、酸度保持清爽、貴腐帶來的複雜度提升整體層次。'
      },
      {
        subtitle: '多樣化的甜酒搭配',
        pairingGuide: [
          {
            food: '藍紋乳酪（Roquefort）',
            wine: 'Château d\'Yquem',
            reason: '藍紋的鹹味與霉味被Y quem的甜度與複雜度平衡，產生驚人的和諧。'
          },
          {
            food: '法式蘋果塔（Tarte Tatin）',
            wine: 'Château Rieussec',
            reason: '焦糖蘋果的甜度與Rieussec的蜂蜜、烤杏仁風味完美呼應。'
          },
          {
            food: '水果撻配香草冰淇淋',
            wine: 'Château Suduiraut',
            reason: '水果的酸甜與Suduiraut的熱帶水果、蜂蜜風味和諧。'
          },
          {
            food: '辛辣亞洲料理',
            wine: 'Château de Fargues',
            reason: '甜度能緩解辛辣，創造有趣的對比。'
          }
        ]
      }
    ]
  },

  // ========== 知識檢測：白酒與甜酒搭配 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：白酒與甜酒搭配',
    questions: [
      {
        question: 'Pessac-Léognan的干白酒最適合搭配哪種海鮮？',
        options: [
          '生蠔配檸檬',
          '奶油龍蝦（Homard à la crème）',
          '清蒸魚',
          '炸魚薯條'
        ],
        correct: 1,
        explanation: 'Pessac-Léognan的干白酒（如Château Haut-Brion Blanc）擁有飽滿酒體和橡木桶賦予的奶油質地，最適合搭配奶油龍蝦等濃郁醬汁的海鮮料理。'
      },
      {
        question: 'Sauternes甜酒與藍紋起司（Roquefort）搭配的核心原理是什麼？',
        options: [
          '甜度對比鹹度，創造平衡',
          '兩者都是白色的',
          '甜酒能中和起司的辣味',
          '起司能降低酒的甜度'
        ],
        correct: 0,
        explanation: 'Sauternes與Roquefort是經典法式搭配，核心原理是甜度對比鹹度。Sauternes的甜度、酸度與藍紋起司的鹹味、辛辣味形成完美平衡，創造出驚人的和諧。'
      }
    ]
  },

  // ========== 第四章：亞洲料理的創新搭配 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '亞洲料理的創新搭配',
    subtitle: '跨文化的味覺探索',
    icon: '🥢',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)'
  },

  {
    type: 'content',
    title: '波爾多酒配中餐',
    content: [
      {
        subtitle: '中餐搭配的挑戰',
        text: '中餐風味複雜、調味多樣（甜、酸、辣、鹹並存），搭配葡萄酒是一大挑戰。但波爾多的多樣性提供了豐富選擇。',
        challenges: [
          '醬油、豆瓣醬等發酵調味料與單寧可能衝突',
          '高溫炒炸的鍋氣需要果味濃郁的酒款',
          '甜酸平衡的菜餚需要酸度與果味並重的酒',
          '辛辣料理需要低單寧、冰鎮的酒款'
        ]
      },
      {
        subtitle: '經典中餐配酒方案',
        chinesePairing: [
          {
            dish: '北京烤鴨',
            wine: '右岸梅洛主導（如Pomerol村莊級）',
            reason: '烤鴨皮脆肉嫩、油脂豐富，梅洛的圓潤果味能包裹油脂，甜醬的甜度與果味和諧。建議冰鎮至12-14°C。'
          },
          {
            dish: '紅燒肉',
            wine: 'St-Émilion Grand Cru',
            reason: '紅燒肉的醬油甜味、五花肉的油脂，與St-Émilion的石灰岩礦物質、陳年後的醬油氣息呼應。'
          },
          {
            dish: '清蒸魚',
            wine: 'Entre-Deux-Mers干白',
            reason: '清蒸魚的細膩、蔥薑的清香，需要輕盈、高酸度的白酒。'
          },
          {
            dish: '宮保雞丁',
            wine: '年輕Bordeaux AOC紅酒（冰鎮）',
            reason: '辛辣、酸甜、鹹香並存，需要果味主導、單寧低的年輕紅酒，冰鎮後更清爽。'
          },
          {
            dish: '小龍蝦',
            wine: 'Graves干白或Sauternes甜白',
            reason: '小龍蝦的甜味、香料的辛辣，可以選擇干白的礦質感或甜白的甜度平衡。'
          }
        ]
      }
    ]
  },

  {
    type: 'content',
    title: '波爾多酒配日本料理',
    content: [
      {
        subtitle: '日料的細膩美學',
        text: '日本料理強調食材原味、調味清淡、講究umami鮮味，與波爾多酒的搭配需要尊重這種細膩。',
        principle: '選擇礦質感強、橡木桶使用克制、酒體輕到中等的酒款。'
      },
      {
        subtitle: '日料配酒指南',
        japanesePairing: [
          {
            dish: '生魚片（刺身）',
            wine: 'Pessac-Léognan白酒或Entre-Deux-Mers',
            reason: '生魚片的細膩、醬油的鮮味、山葵的辛辣，需要高酸度、礦質感明顯的白酒。避免橡木桶過重的酒款。'
          },
          {
            dish: '壽司（握壽司）',
            wine: 'Château Couhins-Lurton Blanc',
            reason: '壽司米的微甜、魚肉的鮮味，需要酸度明快、果味清爽的白酒。'
          },
          {
            dish: '天婦羅',
            wine: '氣泡酒或輕盈白酒',
            reason: '油炸的酥脆需要氣泡或高酸度清爽口腔。'
          },
          {
            dish: '照燒雞肉',
            wine: '年輕Bordeaux AOC紅酒',
            reason: '照燒醬的甜鹹與果味紅酒和諧，但避免單寧過高的酒款。'
          },
          {
            dish: '和牛',
            wine: 'Pomerol或Margaux',
            reason: '和牛的極致油花、入口即化的質地，需要絲滑細膩的酒款。梅洛的圓潤或Margaux的優雅都能完美搭配。'
          }
        ]
      }
    ]
  },

  {
    type: 'content',
    title: '波爾多酒配泰國料理',
    content: [
      {
        subtitle: '泰式料理的複雜風味',
        text: '泰國料理以酸、辣、甜、鹹、鮮五味並重著稱，香茅、辣椒、魚露、椰奶創造了複雜的味覺層次，搭配葡萄酒極具挑戰性。',
        strategy: '選擇果味濃郁、低單寧、微甜或半甜的酒款，冰鎮飲用。'
      },
      {
        subtitle: '泰式料理配酒',
        thaiPairing: [
          {
            dish: '青木瓜沙拉（Som Tam）',
            wine: 'Sauternes或Barsac（冰鎮）',
            reason: '青木瓜的酸辣、魚露的鹹鮮、花生的香脆，甜白酒的甜度能平衡辣度，果味與木瓜風味呼應。冰鎮至8°C。'
          },
          {
            dish: '綠咖哩雞',
            wine: '半甜型白酒或Sauternes',
            reason: '綠咖哩的椰奶、辣椒、香茅，需要甜度緩解辣度，果味呼應椰奶的奶香。'
          },
          {
            dish: '泰式炒河粉（Pad Thai）',
            wine: '年輕果味紅酒（冰鎮）',
            reason: '炒河粉的甜酸醬汁、花生、蝦米，需要果味主導、單寧低的紅酒，冰鎮後更清爽。'
          },
          {
            dish: '清蒸檸檬魚',
            wine: 'Entre-Deux-Mers或Graves白酒',
            reason: '檸檬的酸度、魚肉的細膩，需要高酸度、清爽的白酒。'
          }
        ]
      },
      {
        subtitle: '泰式料理配酒的黃金法則',
        tips: [
          '1. 避免高單寧紅酒（與辣椒衝突產生苦味）',
          '2. 選擇果味濃郁、酸度明快的酒款',
          '3. 甜白酒是應對辣度的最佳武器',
          '4. 冰鎮飲用（12-14°C甚至更低）',
          '5. 選擇年輕、簡單的酒款，不用浪費頂級陳年酒'
        ]
      }
    ]
  },

  // ========== 知識檢測：亞洲料理創新搭配 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：亞洲料理創新搭配',
    questions: [
      {
        question: '波爾多酒搭配川菜時，應對辣度的最佳策略是什麼？',
        options: [
          '選擇單寧強勁的Pauillac一級莊',
          '選擇甜白酒如Sauternes',
          '選擇高酒精度的紅酒',
          '選擇陳年老酒'
        ],
        correct: 1,
        explanation: '應對川菜辣度的最佳武器是甜白酒（如Sauternes或Cadillac Côtes de Bordeaux），甜度能緩解辛辣帶來的刺激，創造有趣的對比。單寧會加劇辣味，應避免。'
      },
      {
        question: '日式壽司搭配波爾多酒時，為什麼推薦Entre-Deux-Mers干白？',
        options: [
          '因為價格最便宜',
          '因為清爽酸度、檸檬草香氣不會掩蓋魚的鮮味',
          '因為酒精度最低',
          '因為甜度最高'
        ],
        correct: 1,
        explanation: 'Entre-Deux-Mers干白擁有清爽的酸度和檸檬草香氣，不會掩蓋生魚的細膩鮮味，是搭配壽司的理想選擇。避免使用橡木桶陳年的濃郁白酒。'
      }
    ]
  },

  // ========== 第五章：設計專業餐酒菜單 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '設計專業餐酒菜單',
    subtitle: '多道式餐酒搭配的藝術',
    icon: '📋',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '多道式配餐的原則',
    content: [
      {
        subtitle: '漸進式的風味旅程',
        text: '多道式餐酒菜單不是孤立的搭配，而是一場連貫的味覺旅程。每一道都應該為下一道做準備，避免味覺疲勞，創造高潮。',
        coreRules: [
          '1. 從輕到重：開胃菜配輕酒體，主菜配重酒體',
          '2. 從干到甜：甜酒留到最後（甜點前）',
          '3. 從簡單到複雜：年輕酒在前，陳年酒在後',
          '4. 從白到紅：白酒開場，紅酒主場',
          '5. 注意酒精度遞增：避免後面的酒顯得淡薄'
        ]
      },
      {
        subtitle: '平衡與對比',
        text: '整個菜單要有平衡（避免口味過於集中）也要有對比（創造驚喜）。考慮顏色、質地、溫度、風味的變化。'
      }
    ]
  },

  {
    type: 'content',
    title: '經典法式七道式菜單範例',
    content: [
      {
        subtitle: '完整餐酒搭配方案',
        fullMenu: [
          {
            course: '第一道：開胃小點',
            dish: '煙燻鮭魚配酸豆、洋蔥、檸檬',
            wine: 'Champagne Brut（波爾多之外）或Entre-Deux-Mers',
            reason: '開場需要清爽、高酸度，氣泡能刺激食慾，白酒的酸度與檸檬呼應。',
            serving: '50ml，8-10°C'
          },
          {
            course: '第二道：冷盤',
            dish: '生蠔拼盤（3種）',
            wine: 'Château Smith Haut Lafitte Blanc',
            reason: '生蠔的鮮味、海洋礦質感需要高酸度、礦質感明顯的白酒。',
            serving: '100ml，10-12°C'
          },
          {
            course: '第三道：熱前菜',
            dish: '煎鵝肝配無花果與布里歐',
            wine: 'Château d\'Yquem（半瓶）',
            reason: '經典組合，鵝肝的油膩被甜度切割，無花果與貴腐風味呼應。',
            serving: '75ml（半瓶分6人），10-12°C'
          },
          {
            course: '第四道：魚',
            dish: '奶油龍蝦配黑松露',
            wine: 'Château Haut-Brion Blanc',
            reason: '龍蝦的細膩、奶油的豐腴、松露的複雜，需要頂級白酒的深度。',
            serving: '100ml，12-14°C'
          },
          {
            course: '第五道：主菜1',
            dish: '烤乳鴿配野菇',
            wine: 'Château Palmer',
            reason: '乳鴿的細嫩、野菇的土壤氣息，Margaux的優雅完美過渡到紅酒階段。',
            serving: '120ml，16-18°C'
          },
          {
            course: '第六道：主菜2',
            dish: '夏洛來牛排配骨髓、紅酒醬',
            wine: 'Château Latour（陳年10年）',
            reason: '重頭戲，牛排的蛋白質、骨髓的油脂需要強勁的單寧與複雜度。',
            serving: '150ml，17-18°C，提前2小時醒酒'
          },
          {
            course: '第七道：甜點',
            dish: '覆盆莓舒芙蕾配香草冰淇淋',
            wine: '繼續Château d\'Yquem',
            reason: '甜點需要比其更甜的酒，Y quem的複雜度與覆盆莓果味呼應。',
            serving: '50ml'
          }
        ]
      },
      {
        subtitle: '菜單設計要點',
        designTips: [
          '總酒量控制在500-700ml/人（約一瓶），避免過度',
          '考慮上菜節奏（每道間隔15-20分鐘）',
          '準備替代方案（不喝酒的客人、過敏等）',
          '酒款預算分配：40%在主菜、30%在Yquem、30%其他',
          '考慮季節性（夏天更輕盈、冬天更厚重）'
        ]
      }
    ]
  },

  {
    type: 'content',
    title: '現代創意菜單範例',
    content: [
      {
        subtitle: '融合東西方的創新搭配',
        modernMenu: [
          {
            course: '第一道',
            dish: '日式生魚片與西班牙火腿拼盤',
            wine: 'Pessac-Léognan白酒',
            innovation: '東西方食材融合，白酒的礦質感同時匹配海鮮與火腿的鹹味。'
          },
          {
            course: '第二道',
            dish: '泰式香茅燉龍蝦湯',
            wine: 'Sauternes（冰鎮）',
            innovation: '甜白酒的甜度平衡香茅與辣椒，果味與椰奶和諧。'
          },
          {
            course: '第三道',
            dish: '北京烤鴨配墨西哥莎莎醬',
            wine: 'Pomerol村莊級（冰鎮）',
            innovation: '梅洛的果味包裹烤鴨油脂，莎莎醬的酸辣被果味中和。'
          },
          {
            course: '第四道',
            dish: '和牛配韓式泡菜',
            wine: 'Château Cheval Blanc',
            innovation: '和牛的油花與Cheval Blanc的絲滑，泡菜的發酵味與陳年酒的複雜度呼應。'
          },
          {
            course: '第五道',
            dish: '抹茶提拉米蘇',
            wine: 'Château Climens',
            innovation: 'Barsac的蜂蜜與抹茶的苦甜創造有趣對比。'
          }
        ]
      }
    ]
  },

  // ========== 知識檢測：餐酒菜單設計 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：餐酒菜單設計',
    questions: [
      {
        question: '在設計多道式餐酒菜單時，應遵循什麼順序原則？',
        options: [
          '從甜到干、從重到輕',
          '從輕到重、從干到甜、從年輕到陳年',
          '隨機搭配',
          '全部使用同一款酒'
        ],
        correct: 1,
        explanation: '多道式餐酒菜單應遵循「從輕到重、從干到甜、從年輕到陳年」的原則，避免味覺疲勞，讓每一道菜和每一款酒都能得到充分品味。'
      },
      {
        question: '「垂直品鑑」主題晚宴的設計理念是什麼？',
        options: [
          '品鑑不同產區的酒',
          '品鑑同一酒莊不同年份的酒（如Château Margaux 2010/2015/2020）',
          '品鑑不同品種的酒',
          '品鑑不同國家的酒'
        ],
        correct: 1,
        explanation: '「垂直品鑑」是指品鑑同一酒莊不同年份的葡萄酒，例如Château Margaux的2010、2015、2020年份，讓賓客體會年份差異對同一風土的影響。'
      }
    ]
  },

  // ========== 課程總結 ==========
  {
    type: 'chapter-divider',
    chapter: '總結',
    title: '配餐的智慧與實踐',
    subtitle: '從原理到藝術',
    icon: '🎓',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '配餐的核心思維',
    content: [
      {
        subtitle: '科學與藝術的平衡',
        text: '配餐既有科學原理（單寧與蛋白質、酸度與油脂），也有藝術直覺（文化背景、個人偏好）。最好的配餐是在理解原理基礎上的大膽創新。',
        keyPrinciples: [
          '1. 理解基礎原理（單寧、酸度、甜度、酒體）',
          '2. 尊重地域傳統（波爾多紅酒配紅肉的文化基礎）',
          '3. 考慮整體體驗（不只是味道，還有情境、氛圍）',
          '4. 大膽嘗試創新（跨文化搭配的驚喜）',
          '5. 聆聽個人偏好（沒有絕對正確的搭配）'
        ]
      },
      {
        subtitle: '持續學習與實踐',
        text: '配餐是一門需要不斷實踐的藝術。每次用餐都是一次實驗，記錄成功與失敗，逐步建立自己的配餐資料庫。',
        practiceAdvice: [
          '組織定期的配餐實驗晚宴',
          '記錄每次搭配的感受（成功/失敗原因）',
          '閱讀侍酒師的配餐建議',
          '參加餐酒搭配工作坊',
          '保持開放心態，嘗試意想不到的組合'
        ]
      }
    ]
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L3-10 波爾多葡萄酒的配餐藝術',
    description: '恭喜您掌握了波爾多葡萄酒配餐的科學原理與實踐技巧！從單寧、酸度的化學作用，到經典紅肉搭配，再到亞洲料理的創新探索，您已具備設計專業餐酒菜單的能力。',
    skills: [
      '理解配餐的科學原理（單寧、酸度、甜度、酒體）',
      '掌握波爾多紅酒與牛排、羊肉、野味的經典搭配',
      '學會白酒、甜酒與海鮮、鵝肝、乳酪的完美組合',
      '探索跨文化配餐（中餐、日料、泰菜）',
      '能夠設計專業的多道式餐酒菜單'
    ],
    nextSteps: [
      {
        action: '實踐應用',
        items: [
          '組織一次配餐實驗晚宴，測試所學知識',
          '記錄每次配餐的成功與失敗經驗',
          '嘗試設計一個完整的七道式餐酒菜單',
          '探索更多跨文化配餐的可能性'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L3-11：波爾多葡萄酒產業史與文化',
          '深入研究特定菜系的配餐邏輯',
          '參加侍酒師協會的配餐課程'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼單寧與蛋白質的結合是紅酒配紅肉的科學基礎？',
        '如果要為一位素食主義者設計波爾多配餐菜單，你會如何搭配？',
        '亞洲料理與波爾多酒的搭配為什麼具有挑戰性？如何克服？',
        '在設計多道式菜單時，為什麼要遵循"從輕到重"的原則？'
      ]
    },
    keyInsight: '配餐是科學與藝術的完美結合。理解化學原理讓我們知其然，尊重文化傳統讓我們知其所以然，而大膽創新則讓我們超越常規，創造驚喜。最偉大的配餐不是追隨規則，而是在理解規則後的自由創作。波爾多葡萄酒的多樣性為這種創作提供了無限可能。',
    shareMessage: '我剛完成了Level 3的「波爾多葡萄酒的配餐藝術」課程！學習了從科學原理到經典搭配，再到亞洲料理創新的完整配餐知識。現在我能設計專業的餐酒菜單了！🍽️🍷 #波爾多 #配餐藝術 #葡萄酒學習 #FoodPairing'
  }
]

export default l310Content


