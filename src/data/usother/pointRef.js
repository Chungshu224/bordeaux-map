/**
 * 美國其他產區（Oregon、Washington、New York 與 Idaho／Virginia／Texas）的 AVA 清單。
 * 邊界取自 UC Davis AVA Project（CC0），經簡化後存於 public/data/usother-ava.geojson，僅供認識位置，不是官方邊界。
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 USOTHER_COURSE_FRAMEWORK.md §10–12）；
 * 來源有出入的年份（Willamette、Van Duzer、Wahluke Slope、Ancient Lakes、Eola-Amity Hills 等）不列為年份欄位。
 *  - zone：oregon／washington／newyork／other（Idaho、Virginia、Texas 等）；跨州 AVA 的 groups 含多個州，在各州分組都會出現。
 *  - kind：ava（母或獨立）／sub（子 AVA）
 */
export const POINT_NOTES = '範圍取自 UC Davis AVA Project（CC0）並已簡化，僅供認識位置，不是官方邊界。'
export const GROUPS = [
  { key: 'oregon', label: 'Oregon', color: '#2E7D5B' },
  { key: 'washington', label: 'Washington', color: '#6B3FA0' },
  { key: 'newyork', label: 'New York', color: '#2E7DAF' },
  { key: 'other', label: 'Idaho・Virginia・Texas', color: '#D4812B' }
]
export const POINT_REF = [
 {
  id: "US-AVA-WILLAMETTE",
  name: "Willamette Valley",
  kind: "ava",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Pinot Noir",
   "Pinot Gris",
   "Chardonnay"
  ],
  notes: "Oregon 最重要的產區，被 Coast Range、Cascades、Columbia River 與 Calapooya Mountains 圍繞；年降雨約 40 英寸，集中在 10 月至 5 月；Van Duzer 缺口引入夏季海風；到 2022 年共有 11 個子 AVA。",
  lngLat: [
   -122.9302,
   44.6716
  ]
 },
 {
  id: "US-AVA-DUNDEE-HILLS",
  name: "Dundee Hills",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2004",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "以 Jory 土壤（Columbia River Basalt 風化的紅色富鐵黏土）為代表；2004 年核准。",
  lngLat: [
   -123.0594,
   45.2793
  ]
 },
 {
  id: "US-AVA-YAMHILL-CARLTON",
  name: "Yamhill-Carlton",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2004",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "位於約 3,500 英尺 Coast Range 的雨影中，葡萄園限於海拔 200 至 1,000 英尺；以 Willakenzie 海洋沉積岩為代表；2004 年核准。",
  lngLat: [
   -123.1787,
   45.328
  ]
 },
 {
  id: "US-AVA-MCMINNVILLE",
  name: "McMinnville",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2005",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "葡萄園限於海拔 200 至 1,000 英尺；2005 年核准。",
  lngLat: [
   -123.3426,
   45.1602
  ]
 },
 {
  id: "US-AVA-RIBBON-RIDGE",
  name: "Ribbon Ridge",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2005",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "以 Willakenzie 海洋沉積岩為代表；2005 年核准。",
  lngLat: [
   -123.0793,
   45.3561
  ]
 },
 {
  id: "US-AVA-CHEHALEM-MOUNTAINS",
  name: "Chehalem Mountains",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "Willamette 的子 AVA，土壤兼有玄武岩、海洋沉積岩與北部的風積黃土。",
  lngLat: [
   -122.9612,
   45.3777
  ]
 },
 {
  id: "US-AVA-EOLA-AMITY",
  name: "Eola-Amity Hills",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "Willamette 的子 AVA，受 Van Duzer 缺口的海風影響；部分區域為 Jory 玄武岩土壤。",
  lngLat: [
   -123.1423,
   45.0477
  ]
 },
 {
  id: "US-AVA-VAN-DUZER",
  name: "Van Duzer Corridor",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "以 Coast Range 上的缺口命名；夏季午後與傍晚的太平洋海風使山谷降溫；2018 或 2019 年核准（來源不一）。",
  lngLat: [
   -123.2863,
   45.0097
  ]
 },
 {
  id: "US-AVA-TUALATIN-HILLS",
  name: "Tualatin Hills",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2020",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "2020 年核准；葡萄園限於海拔 200 至 1,000 英尺；Laurelwood 風積黃土為特色。",
  lngLat: [
   -123.1219,
   45.6004
  ]
 },
 {
  id: "US-AVA-LAURELWOOD",
  name: "Laurelwood District",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2020",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "2020 年核准；名稱來自覆蓋在玄武岩上的 Laurelwood 風積黃土。",
  lngLat: [
   -122.9688,
   45.3982
  ]
 },
 {
  id: "US-AVA-LOWER-LONG-TOM",
  name: "Lower Long Tom",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2021",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "2021 年核准的 Willamette 子 AVA。",
  lngLat: [
   -123.3586,
   44.2275
  ]
 },
 {
  id: "US-AVA-MOUNT-PISGAH",
  name: "Mount Pisgah, Polk County",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Willamette Valley",
  year: "2022",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Pinot Noir"
  ],
  notes: "2022 年核准，是截至該年第 11 個 Willamette 子 AVA。",
  lngLat: [
   -123.2908,
   44.8804
  ]
 },
 {
  id: "US-AVA-SOUTHERN-OREGON",
  name: "Southern Oregon",
  kind: "ava",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "",
  year: "2004",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Tempranillo",
   "Syrah",
   "Cabernet Sauvignon",
   "Viognier"
  ],
  notes: "2004 年核准，涵蓋 Umpqua Valley、Rogue Valley 等；地中海式影響、夏季炎熱乾燥；Tempranillo 是代表（Abacela 創立於 1995 年）。",
  lngLat: [
   -123.1752,
   42.8896
  ]
 },
 {
  id: "US-AVA-UMPQUA-VALLEY",
  name: "Umpqua Valley",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Southern Oregon",
  year: "1984",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Tempranillo",
   "Pinot Noir"
  ],
  notes: "Southern Oregon 內的子 AVA，1984 年核准。",
  lngLat: [
   -123.3982,
   43.3372
  ]
 },
 {
  id: "US-AVA-ROGUE-VALLEY",
  name: "Rogue Valley",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Southern Oregon",
  year: "1991",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Syrah",
   "Cabernet Sauvignon"
  ],
  notes: "Southern Oregon 內的子 AVA，1991 年核准。",
  lngLat: [
   -123.1499,
   42.3704
  ]
 },
 {
  id: "US-AVA-APPLEGATE-VALLEY",
  name: "Applegate Valley",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Southern Oregon",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Syrah",
   "Viognier"
  ],
  notes: "Southern Oregon 內的子 AVA。",
  lngLat: [
   -123.2,
   42.2651
  ]
 },
 {
  id: "US-AVA-RED-HILL-DOUGLAS",
  name: "Red Hill Douglas County",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Southern Oregon",
  year: "2005",
  styles: [
   "紅酒"
  ],
  grapes: [],
  notes: "Southern Oregon 內的子 AVA，2005 年核准。",
  lngLat: [
   -123.2703,
   43.5443
  ]
 },
 {
  id: "US-AVA-ELKTON",
  name: "Elkton Oregon",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Southern Oregon",
  year: "2013",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "Southern Oregon 內的子 AVA，2013 年核准。",
  lngLat: [
   -123.578,
   43.6257
  ]
 },
 {
  id: "US-AVA-COLUMBIA-GORGE",
  name: "Columbia Gorge",
  kind: "ava",
  zone: "oregon",
  groups: [
   "oregon",
   "washington"
  ],
  states: [
   "OR",
   "WA"
  ],
  cross: true,
  parent: "",
  year: "2004",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Pinot Noir",
   "Chardonnay",
   "Riesling",
   "Syrah"
  ],
  notes: "2004 年 5 月 10 日核准；跨 Oregon（Hood River、Wasco）與 Washington（Skamania、Klickitat）；降雨由西向東急遽減少，Hood River 附近約 36 英寸、Lyle 附近約 10 英寸。",
  lngLat: [
   -121.4618,
   45.6872
  ]
 },
 {
  id: "US-AVA-WALLA-WALLA",
  name: "Walla Walla Valley",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington",
   "oregon"
  ],
  states: [
   "WA",
   "OR"
  ],
  cross: true,
  parent: "Columbia Valley",
  year: "1984",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Cabernet Sauvignon",
   "Merlot",
   "Syrah"
  ],
  notes: "1984 年 2 月 6 日核准；位於 Washington 東南與 Oregon 東北角；生長季 190 至 220 天；冬季低溫可達 −20°F。",
  lngLat: [
   -118.4264,
   46.0183
  ]
 },
 {
  id: "US-AVA-ROCKS-DISTRICT",
  name: "The Rocks District of Milton-Freewater",
  kind: "sub",
  zone: "oregon",
  groups: [
   "oregon"
  ],
  states: [
   "OR"
  ],
  cross: false,
  parent: "Walla Walla Valley",
  year: "2015",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Syrah"
  ],
  notes: "2015 年 2 月核准，位於 Oregon 的 Umatilla County，是 Walla Walla 內的子 AVA；一般說法以玄武岩卵石土壤與 Syrah 聞名。",
  lngLat: [
   -118.4066,
   45.9562
  ]
 },
 {
  id: "US-AVA-COLUMBIA-VALLEY",
  name: "Columbia Valley",
  kind: "ava",
  zone: "washington",
  groups: [
   "washington",
   "oregon"
  ],
  states: [
   "WA",
   "OR"
  ],
  cross: true,
  parent: "",
  year: "1984",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Cabernet Sauvignon",
   "Merlot",
   "Syrah",
   "Riesling"
  ],
  notes: "1984 年 12 月 13 日核准；面積超過 1,100 萬英畝，以 Washington 為主並延伸到北 Oregon；含全州約 99% 的葡萄園。",
  lngLat: [
   -119.1679,
   46.7553
  ]
 },
 {
  id: "US-AVA-YAKIMA-VALLEY",
  name: "Yakima Valley",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Columbia Valley",
  year: "1983",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Riesling",
   "Chardonnay",
   "Merlot"
  ],
  notes: "1983 年 4 月 4 日核准，是 Washington 的第一個 AVA；1869 年種下第一批葡萄藤。",
  lngLat: [
   -120.0904,
   46.3401
  ]
 },
 {
  id: "US-AVA-RED-MOUNTAIN",
  name: "Red Mountain",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Yakima Valley",
  year: "2001",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Cabernet Sauvignon",
   "Merlot",
   "Syrah",
   "Cabernet Franc"
  ],
  notes: "2001 年 4 月 10 日核准，約 4,040 英畝；沙漠氣候、礫石多且偏鹼性；以結構強勁的紅酒為主。",
  lngLat: [
   -119.4406,
   46.2835
  ]
 },
 {
  id: "US-AVA-HORSE-HEAVEN",
  name: "Horse Heaven Hills",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Columbia Valley",
  year: "2005",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Cabernet Sauvignon",
   "Syrah",
   "Riesling"
  ],
  notes: "2005 年 7 月 1 日核准，約 570,000 英畝；風很強、年降雨約 6.2 英寸。",
  lngLat: [
   -119.5983,
   46.0205
  ]
 },
 {
  id: "US-AVA-WAHLUKE-SLOPE",
  name: "Wahluke Slope",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Columbia Valley",
  year: "",
  styles: [
   "紅酒"
  ],
  grapes: [
   "Merlot",
   "Cabernet Sauvignon"
  ],
  notes: "年降雨約 5.9 英寸；深層風積砂與黃土；以 Merlot 與 Cabernet Sauvignon 聞名；核准年份各來源不一。",
  lngLat: [
   -119.7533,
   46.71
  ]
 },
 {
  id: "US-AVA-ANCIENT-LAKES",
  name: "Ancient Lakes of Columbia Valley",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Columbia Valley",
  year: "",
  styles: [
   "白酒"
  ],
  grapes: [
   "Riesling",
   "Chardonnay"
  ],
  notes: "海拔約 1,200 至 1,500 英尺，以 Riesling 與 Chardonnay 等白葡萄為主；核准年份各來源不一。",
  lngLat: [
   -119.9215,
   47.1253
  ]
 },
 {
  id: "US-AVA-PUGET-SOUND",
  name: "Puget Sound",
  kind: "ava",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "",
  year: "1995",
  styles: [
   "白酒"
  ],
  grapes: [
   "Madeleine Angevine",
   "Müller-Thurgau"
  ],
  notes: "1995 年 10 月 4 日核准；年降雨 17 至 60 英寸，濕潤涼爽；多數酒廠使用東 Washington 的葡萄。",
  lngLat: [
   -122.7296,
   47.8825
  ]
 },
 {
  id: "US-AVA-LAKE-CHELAN",
  name: "Lake Chelan",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Columbia Valley",
  year: "2009",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "2009 年核准的 AVA。",
  lngLat: [
   -120.1046,
   47.8761
  ]
 },
 {
  id: "US-AVA-SNIPES-MOUNTAIN",
  name: "Snipes Mountain",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Yakima Valley",
  year: "2009",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "Yakima Valley 內的子 AVA，2009 年核准。",
  lngLat: [
   -120.1077,
   46.3195
  ]
 },
 {
  id: "US-AVA-NACHES-HEIGHTS",
  name: "Naches Heights",
  kind: "ava",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "",
  year: "2011",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "2011 年核准的 AVA。",
  lngLat: [
   -120.6775,
   46.6812
  ]
 },
 {
  id: "US-AVA-LEWIS-CLARK",
  name: "Lewis-Clark Valley",
  kind: "ava",
  zone: "washington",
  groups: [
   "washington",
   "other"
  ],
  states: [
   "WA",
   "ID"
  ],
  cross: true,
  parent: "",
  year: "2016",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "2016 年核准，跨 Washington 與 Idaho，大部分位於 Idaho。",
  lngLat: [
   -116.7254,
   46.3796
  ]
 },
 {
  id: "US-AVA-CANDY-MOUNTAIN",
  name: "Candy Mountain",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Red Mountain",
  year: "2020",
  styles: [
   "紅酒"
  ],
  grapes: [],
  notes: "2020 年核准的子 AVA。",
  lngLat: [
   -119.3655,
   46.2553
  ]
 },
 {
  id: "US-AVA-GOOSE-GAP",
  name: "Goose Gap",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Yakima Valley",
  year: "2021",
  styles: [
   "紅酒"
  ],
  grapes: [],
  notes: "Yakima Valley 內的子 AVA，2021 年核准。",
  lngLat: [
   -119.4052,
   46.2429
  ]
 },
 {
  id: "US-AVA-RATTLESNAKE-HILLS",
  name: "Rattlesnake Hills",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Yakima Valley",
  year: "",
  styles: [
   "紅酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -120.2358,
   46.4456
  ]
 },
 {
  id: "US-AVA-ROYAL-SLOPE",
  name: "Royal Slope",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Columbia Valley",
  year: "",
  styles: [
   "紅酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -119.6349,
   46.9133
  ]
 },
 {
  id: "US-AVA-THE-BURN",
  name: "The Burn of Columbia Valley",
  kind: "sub",
  zone: "washington",
  groups: [
   "washington"
  ],
  states: [
   "WA"
  ],
  cross: false,
  parent: "Columbia Valley",
  year: "",
  styles: [
   "紅酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -120.3732,
   45.7379
  ]
 },
 {
  id: "US-AVA-FINGER-LAKES",
  name: "Finger Lakes",
  kind: "ava",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "",
  year: "1982",
  styles: [
   "白酒",
   "紅酒"
  ],
  grapes: [
   "Riesling"
  ],
  notes: "1982 年核准，含 11 個湖，多數葡萄園圍繞 Canandaigua、Keuka、Seneca、Cayuga；湖效應保護葡萄藤並延長生長季；Riesling 最具代表性。",
  lngLat: [
   -76.9714,
   42.6951
  ]
 },
 {
  id: "US-AVA-CAYUGA-LAKE",
  name: "Cayuga Lake",
  kind: "sub",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "Finger Lakes",
  year: "1988",
  styles: [
   "白酒"
  ],
  grapes: [
   "Riesling"
  ],
  notes: "Finger Lakes 的子 AVA，1988 年核准。",
  lngLat: [
   -76.6734,
   42.7
  ]
 },
 {
  id: "US-AVA-SENECA-LAKE",
  name: "Seneca Lake",
  kind: "sub",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "Finger Lakes",
  year: "2003",
  styles: [
   "白酒"
  ],
  grapes: [
   "Riesling"
  ],
  notes: "Finger Lakes 的子 AVA，2003 年核准；過去百年只凍結過少數幾次。",
  lngLat: [
   -76.9633,
   42.6621
  ]
 },
 {
  id: "US-AVA-LONG-ISLAND",
  name: "Long Island",
  kind: "ava",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "",
  year: "2001",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Merlot",
   "Chardonnay",
   "Cabernet Franc"
  ],
  notes: "2001 年 5 月 14 日核准，晚於兩個子 AVA；涵蓋 Nassau 與 Suffolk 兩郡；海洋緩和氣溫，生長季比紐約內陸長達一個月。",
  lngLat: [
   -72.8115,
   40.9327
  ]
 },
 {
  id: "US-AVA-NORTH-FORK",
  name: "North Fork of Long Island",
  kind: "sub",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "Long Island",
  year: "1986",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Merlot",
   "Chardonnay"
  ],
  notes: "1986 年 10 月 10 日核准；生長季約 195 至 201 天，年降雨約 44 英寸；1973 年 Hargrave 在 Cutchogue 種下第一座商業 vinifera 葡萄園。",
  lngLat: [
   -72.3935,
   41.0837
  ]
 },
 {
  id: "US-AVA-HAMPTONS",
  name: "The Hamptons, Long Island",
  kind: "sub",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "Long Island",
  year: "1985",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Merlot",
   "Chardonnay"
  ],
  notes: "1985 年 5 月 16 日核准；面對大西洋，較涼、多霧；土壤含較多粉砂與壤土。",
  lngLat: [
   -72.2923,
   40.9475
  ]
 },
 {
  id: "US-AVA-HUDSON-RIVER",
  name: "Hudson River Region",
  kind: "ava",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "",
  year: "1982",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Baco Noir",
   "Seyval Blanc"
  ],
  notes: "1982 年 6 月 4 日核准，是紐約第一個 AVA；Brotherhood Winery 創立於 1839 年，被稱為北美持續營運最久的酒廠。",
  lngLat: [
   -74.025,
   41.763
  ]
 },
 {
  id: "US-AVA-LAKE-ERIE",
  name: "Lake Erie",
  kind: "ava",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY",
   "PA",
   "OH"
  ],
  cross: true,
  parent: "",
  year: "1983",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Concord"
  ],
  notes: "1983 年 10 月 21 日核准，跨 New York、Pennsylvania 與 Ohio；種植超過 42,000 英畝，以 Concord 為主。",
  lngLat: [
   -81.2856,
   41.7619
  ]
 },
 {
  id: "US-AVA-NIAGARA-ESCARPMENT",
  name: "Niagara Escarpment",
  kind: "ava",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "",
  year: "2005",
  styles: [
   "白酒",
   "紅酒"
  ],
  grapes: [],
  notes: "2005 年 9 月 7 日核准；約 18,000 英畝、約 400 英畝種植；位於排水良好的石灰岩山脊。",
  lngLat: [
   -78.778,
   43.2009
  ]
 },
 {
  id: "US-AVA-UPPER-HUDSON",
  name: "Upper Hudson",
  kind: "ava",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -73.8547,
   42.9466
  ]
 },
 {
  id: "US-AVA-CHAMPLAIN-VALLEY",
  name: "Champlain Valley of New York",
  kind: "ava",
  zone: "newyork",
  groups: [
   "newyork"
  ],
  states: [
   "NY"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -73.5751,
   44.464
  ]
 },
 {
  id: "US-AVA-SNAKE-RIVER",
  name: "Snake River Valley",
  kind: "ava",
  zone: "other",
  groups: [
   "other",
   "oregon"
  ],
  states: [
   "ID",
   "OR"
  ],
  cross: true,
  parent: "",
  year: "2007",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Cabernet Sauvignon",
   "Merlot",
   "Chardonnay",
   "Syrah"
  ],
  notes: "2007 年 4 月 9 日核准，是 Idaho 第一個 AVA；跨 Idaho 與 Oregon（Malheur、Baker 郡）；半乾燥沙漠，年降雨 10–12 英寸，須灌溉。",
  lngLat: [
   -116.2616,
   43.7627
  ]
 },
 {
  id: "US-AVA-EAGLE-FOOTHILLS",
  name: "Eagle Foothills",
  kind: "sub",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "ID"
  ],
  cross: false,
  parent: "Snake River Valley",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "Snake River Valley 內的子 AVA。",
  lngLat: [
   -116.3918,
   43.7935
  ]
 },
 {
  id: "US-AVA-MONTICELLO",
  name: "Monticello",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA"
  ],
  cross: false,
  parent: "",
  year: "1984",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Cabernet Franc",
   "Chardonnay",
   "Viognier"
  ],
  notes: "1984 年 1 月 23 日核准，是 Virginia 第四個產區；位於 Blue Ridge 東坡，冷空氣經山口排走；Jefferson 曾支持 Filippo Mazzei 於 1774 年種葡萄。",
  lngLat: [
   -78.4322,
   38.0028
  ]
 },
 {
  id: "US-AVA-SHENANDOAH",
  name: "Shenandoah Valley",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA",
   "WV"
  ],
  cross: true,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -78.7654,
   38.5662
  ]
 },
 {
  id: "US-AVA-VIRGINIA-PENINSULA",
  name: "Virginia Peninsula",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -76.7698,
   37.2797
  ]
 },
 {
  id: "US-AVA-ROANOKE",
  name: "North Fork of Roanoke",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -80.3173,
   37.2358
  ]
 },
 {
  id: "US-AVA-ROCKY-KNOB",
  name: "Rocky Knob",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -80.3452,
   36.8161
  ]
 },
 {
  id: "US-AVA-MIDDLEBURG",
  name: "Middleburg Virginia",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -77.7867,
   39.0848
  ]
 },
 {
  id: "US-AVA-NORTHERN-NECK",
  name: "Northern Neck George Washington Birthplace",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -76.7917,
   38.0045
  ]
 },
 {
  id: "US-AVA-EASTERN-SHORE",
  name: "Virginia's Eastern Shore",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "VA"
  ],
  cross: false,
  parent: "",
  year: "",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "較小的 AVA，課程未深入介紹。",
  lngLat: [
   -75.7331,
   37.5492
  ]
 },
 {
  id: "US-AVA-TX-HIGH-PLAINS",
  name: "Texas High Plains",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "TX"
  ],
  cross: false,
  parent: "",
  year: "1993",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Cabernet Sauvignon",
   "Tempranillo",
   "Syrah"
  ],
  notes: "1993 年 3 月 2 日核准；約 800 萬英畝，種植超過 3,700 英畝；海拔多在 3,000 至 4,000 英尺；全州近半商業釀酒葡萄產自此處。",
  lngLat: [
   -102.0182,
   33.8425
  ]
 },
 {
  id: "US-AVA-TX-HILL-COUNTRY",
  name: "Texas Hill Country",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "TX"
  ],
  cross: false,
  parent: "",
  year: "1991",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [
   "Tempranillo",
   "Cabernet Sauvignon"
  ],
  notes: "1991 年核准；超過 900 萬英畝，是全美第二大 AVA，但種植不到 800 英畝。",
  lngLat: [
   -98.9408,
   30.2391
  ]
 },
 {
  id: "US-AVA-FREDERICKSBURG",
  name: "Fredericksburg in the Texas Hill Country",
  kind: "sub",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "TX"
  ],
  cross: false,
  parent: "Texas Hill Country",
  year: "1989",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "Texas Hill Country 內的 AVA，1989 年核准。",
  lngLat: [
   -98.8572,
   30.2647
  ]
 },
 {
  id: "US-AVA-BELL-MOUNTAIN",
  name: "Bell Mountain",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "TX"
  ],
  cross: false,
  parent: "",
  year: "1986",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "1986 年核准，是第一個完全位於 Texas 的 AVA。",
  lngLat: [
   -98.7245,
   30.4147
  ]
 },
 {
  id: "US-AVA-ESCONDIDO",
  name: "Escondido Valley",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "TX"
  ],
  cross: false,
  parent: "",
  year: "1992",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "1992 年核准的 Texas AVA。",
  lngLat: [
   -102.4625,
   30.8376
  ]
 },
 {
  id: "US-AVA-DAVIS-MOUNTAINS",
  name: "Texas Davis Mountains",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "TX"
  ],
  cross: false,
  parent: "",
  year: "1998",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "1998 年核准的 Texas AVA。",
  lngLat: [
   -104.0119,
   30.6889
  ]
 },
 {
  id: "US-AVA-TEXOMA",
  name: "Texoma",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "TX"
  ],
  cross: false,
  parent: "",
  year: "2005",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "2005 年核准的 Texas AVA。",
  lngLat: [
   -96.9135,
   33.6882
  ]
 },
 {
  id: "US-AVA-MESILLA",
  name: "Mesilla Valley",
  kind: "ava",
  zone: "other",
  groups: [
   "other"
  ],
  states: [
   "NM",
   "TX"
  ],
  cross: true,
  parent: "",
  year: "1985",
  styles: [
   "紅酒",
   "白酒"
  ],
  grapes: [],
  notes: "1985 年核准，大部分在 New Mexico，小部分在 West Texas。",
  lngLat: [
   -106.7239,
   32.1368
  ]
 }
]
