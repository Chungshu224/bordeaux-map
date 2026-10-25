/**
 * CH-L3-3 風土與風格比較，含其他氣泡酒
 * 事實來源：INAO《Champagne》AOC 產品規格、Comité Champagne、DGCCRF 標籤指南、WineWithSeth（Franciacorta、English wine PDO、Tasmania、Crémant production）、Glass of Bubbly（Cava 分級）。風格描述屬常見說法，非法規，不進測驗。
 * 來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "風土與風格比較，含其他氣泡酒",
    subtitle: "建立盲品與論述用的比較表",
    icon: "🔬",
    background: "linear-gradient(135deg, #A8801C 0%, #6B500F 100%)"
  },
  {
    title: "四大產區的風格比較",
    highlights: [
      {
        id: 1,
        icon: "⛰️",
        title: "漢斯山：結構與紅色水果",
        content: "Pinot Noir 為主，酒體與骨架是許多 NV 與 Blanc de Noirs 的核心；南向的 Ambonnay、Bouzy 常被描述為豐厚，北側的 Verzenay、Verzy 常被描述為緊緻、酸度鮮明（常見描述，非法規）"
      },
      {
        id: 2,
        icon: "🌊",
        title: "馬恩河谷：果味與圓潤",
        content: "越往西 Meunier 越多，帶來圓潤的果味與較早適飲；Aÿ 以 Pinot Noir 著稱（WineWithSeth）。Meunier 發芽較晚，適應河谷的春霜與潮濕環境"
      },
      {
        id: 3,
        icon: "🥂",
        title: "白丘：精準與礦物感",
        content: "白堊質斜坡上的 Chardonnay，風格細緻、高酸、耐久；Cramant 常被形容花香細緻、Le Mesnil 緊緻礦物且耐久、Avize 精準有力、Oger 較圓潤（描述性，非法規，不進測驗）"
      },
      {
        id: 4,
        icon: "🌄",
        title: "巴爾丘：成熟、圓潤、Pinot Noir",
        content: "Aube 的 Pinot Noir 為主，土壤是 Kimmeridgian 泥灰岩而非白堊，風格多被描述為較豐厚、較早適飲、果味更突出；一個村莊都沒有 Grand／Premier Cru 級別（Level 2）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">做比較表時，請分開「規格事實」（品種、村莊名單、土壤）與「慣例描述」（風格形容詞）。</p></div>"
  },
  {
    title: "白堊與 Kimmeridgian：連到勃艮地",
    highlights: [
      {
        id: 1,
        icon: "🪨",
        title: "兩種不同的石灰質",
        content: "香檳中部（漢斯山、馬恩河谷、白丘）是白堊紀的白堊；Chablis 與巴爾丘是侏羅紀的 Kimmeridgian 泥灰岩（Level 1、2）。比較時請以「白堊紀 vs 侏羅紀」區分，不要把「石灰質」一詞混為一談"
      },
      {
        id: 2,
        icon: "🔗",
        title: "與勃艮地課程的對照",
        content: "勃艮地課程的 Chablis 課說明 Kimmeridgian 土壤與 Chardonnay 的靜態風格；Côte de Nuits／Côte de Beaune 課說明 Pinot Noir 與 Chardonnay 的靜態表現。本課只負責「同一品種、同一種土壤到了氣泡酒會變成什麼」，土壤細節請回該課複習，這裡不重複"
      },
      {
        id: 3,
        icon: "🌡️",
        title: "涼爽氣候與高酸",
        content: "兩者共通點是北方涼爽氣候與高酸；差別在於香檳的基酒為了二次發酵，刻意採收較低糖、較高酸的果實，而 Chablis 的靜態酒追求完整成熟。同樣的品種，採收目標不同，風格就不同"
      },
      {
        id: 4,
        icon: "🧭",
        title: "Côte des Bar 的位置",
        content: "巴爾丘距香檳區中心約 130 公里，地質上與 Chablis 同屬 Kimmeridgian 帶（Level 2）；在盲品中，Kimmeridgian 的氣泡酒常顯得更圓潤、果味更前置，這是風格描述，不是鑑定依據"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">連結其他課程的好處：不重寫，直接引用既有結論，節省記憶負擔並避免互相矛盾。</p></div>"
  },
  {
    title: "Blanc de Blancs、Blanc de Noirs 與調配",
    highlights: [
      {
        id: 1,
        icon: "⚪",
        title: "Blanc de Blancs",
        content: "僅用白葡萄（實務上為 Chardonnay；規格另允許 Arbane、Petit Meslier 等白品種）。風格：柑橘、白花、礦物、高酸，年輕時內斂、陳年後開展出奶油與吐司；白丘是核心"
      },
      {
        id: 2,
        icon: "⚫",
        title: "Blanc de Noirs",
        content: "僅用黑葡萄（Pinot Noir、Meunier）。風格：紅色水果、較豐厚的酒體與質地；Pinot Noir 主導者結構與陳年骨架更強，Meunier 主導者更圓潤早熟。白色果汁來自黑葡萄的緩慢整串壓榨（Level 2）"
      },
      {
        id: 3,
        icon: "🧩",
        title: "調配的價值",
        content: "典型 NV 是三品種、多村莊、多年份的調配：Chardonnay 的酸與細緻、Pinot Noir 的結構、Meunier 的果味與柔和互補（Level 1）。單一品種或單一村莊的酒是「表達風土」，調配則是「追求平衡與一致」，兩者是不同的哲學"
      },
      {
        id: 4,
        icon: "🌸",
        title: "Rosé 的兩條路",
        content: "香檳 Rosé 可用直接壓榨、浸皮或放血（saignée），也可在裝瓶前把白酒與紅酒調配；調配法是香檳的特色，紅酒比例常見約 5–20%（Comité Champagne，Level 2）。品飲時：調配法 Rosé 色澤較淡、單寧較柔，浸皮法較濃較具結構"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">DGCCRF：標示「Blanc de Blancs」「Blanc de Noirs」或單一品種時，葡萄須 100% 來自該類別或品種（一般規定為 85%）。</p></div>"
  },
  {
    title: "傳統法的鄰居：Cava、Franciacorta、英國、Tasmania",
    highlights: [
      {
        id: 1,
        icon: "🇪🇸",
        title: "Cava：暖地、本土品種、分級看陳年",
        content: "傳統法氣泡酒，主要集中在 Penedès，以 Macabeo、Xarel·lo、Parellada 等本土品種為核心。最短陳年：Cava 9 個月、Reserva 18 個月、Gran Reserva 30 個月、Paraje Calificado 36 個月（Glass of Bubbly）。對比香檳：氣候更暖、基酒酸度較低，風格偏向質地與地中海風味"
      },
      {
        id: 2,
        icon: "🇮🇹",
        title: "Franciacorta：湖畔的 Chardonnay",
        content: "Lombardy 的 DOCG，以 Chardonnay 為主、Pinot Nero 次之；Iseo 湖調節溫度。自裝瓶（tirage）起酒渣陳年最短：標準 18 個月、Satèn 與 Rosé 24 個月、Millesimato 30 個月、Riserva 60 個月（WineWithSeth）。單位面積產量上限約 10 噸/公頃。氣泡較柔和、果味較成熟，與香檳的「酸張力」不同"
      },
      {
        id: 3,
        icon: "🇬🇧",
        title: "英國：同一條白堊帶的延伸",
        content: "WineWithSeth 指出 Sussex 的 South Downs 白堊與白丘共享 belemnite 白堊底土；PDO 規則：傳統法氣泡酒至少 9 個月酒渣陳年、容許品種含 Chardonnay、Pinot Noir、Meunier。2023 年英國產量創高 2,160 萬瓶，其中傳統法為大宗（WineWithSeth，年度數字，不進測驗）。南英格蘭更北、更涼，酸度高"
      },
      {
        id: 4,
        icon: "🇦🇺",
        title: "Tasmania：南半球的冷涼島",
        content: "Tasmania 是澳洲最南也最涼的產區，海洋性氣候、一月均溫約 15.6°C，Chardonnay 與 Pinot Noir 是傳統法氣泡酒的主力（WineWithSeth）。與香檳的差異：日照更強、少了白堊，風格多半更果味突出、酸度鮮明。細節請以產區資料為準"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">各國陳年數字取自單一來源，且各 DOC／DOCG 規則會修訂；課內作為比較素材，不進測驗，考前以官方規格為準。</p></div>"
  },
  {
    title: "Crémant、Prosecco 與盲品辨別",
    highlights: [
      {
        id: 1,
        icon: "🇫🇷",
        title: "Crémant：法國的傳統法 AOC 群",
        content: "同樣是瓶中二次發酵、手摘、整串壓榨，分布在 Alsace、Bourgogne、Loire、Bordeaux、Limoux、Die、Jura、Savoie 等 AOC（WineWithSeth）。最短酒渣陳年因 AOC 而異（來源有 9 或 12 個月等說法），瓶壓也低於香檳（約 4 bar 對 5–6 bar），不進測驗。Loire 的對照請看羅亞爾課程"
      },
      {
        id: 2,
        icon: "🛢️",
        title: "Prosecco：槽式（Charmat）",
        content: "典型的槽式二次發酵（品種 Glera）：在密閉槽中完成，保留一級果香與花香、氣泡較粗，通常較早適飲，成本較低。對比傳統法：沒有酒渣自溶帶來的麵包、brioche 香氣。考試的分辨線索就是「有沒有自溶香」"
      },
      {
        id: 3,
        icon: "🔍",
        title: "盲品辨別的「第一刀」",
        content: "步驟：氣泡與色澤 → 有無自溶香（傳統法 vs 槽式）→ 酸度與果實成熟度（冷涼 vs 溫暖產地）→ 品種線索（青蘋果與柑橘＝Chardonnay；紅色水果＝Pinot Noir；圓潤果味＝Meunier 或較暖產地）→ 陳年程度"
      },
      {
        id: 4,
        icon: "⚖️",
        title: "比較表怎麼寫",
        content: "以固定欄位：氣候、主要品種、土壤、釀造法與陳年、典型風格、價格定位；表格中的數字注明年份與來源，風格描述注明「常見描述」。這樣的表格同時能用在盲品推理與 MW 論述中"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">重點不是背熟別國數字，而是能說出「為什麼香檳的酸、自溶與陳年會長成現在這樣」。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "關於香檳中部與 Chablis／巴爾丘的土壤，下列何者正確？",
            options: [
              "A. 三者都是同一種白堊",
              "B. 中部是 Kimmeridgian，Chablis 是白堊",
              "C. 中部是白堊紀白堊；Chablis 與巴爾丘是侏羅紀 Kimmeridgian 泥灰岩",
              "D. 三者都是火山土壤"
            ],
            correct: 2,
            explanation: "這是 Level 1、2 已建立的區分；比較時以「白堊紀 vs 侏羅紀」為準。"
          },
          {
            type: "single",
            question: "在香檳標籤上，「Blanc de Noirs」代表？",
            options: [
              "A. 白色酒，僅用黑葡萄釀成",
              "B. 黑色的氣泡酒",
              "C. 僅用白葡萄釀成",
              "D. 只在 Aube 生產"
            ],
            correct: 0,
            explanation: "DGCCRF：Blanc de noirs 為僅用黑葡萄；Blanc de blancs 為僅用白葡萄。"
          },
          {
            type: "single",
            question: "下列哪一種氣泡酒最典型地以槽式（Charmat）進行二次發酵？",
            options: [
              "A. Champagne",
              "B. Prosecco",
              "C. Franciacorta",
              "D. Cava"
            ],
            correct: 1,
            explanation: "Champagne、Franciacorta、Cava 都是瓶中二次發酵（傳統法）；Prosecco 典型為槽式。"
          }
        ]
      }
    }
  }
]
