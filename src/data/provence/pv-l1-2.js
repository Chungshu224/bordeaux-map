/**
 * PV-L1-2 地理、氣候與土壤
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理、氣候與土壤",
    subtitle: "密斯特拉風、日照、石灰岩與結晶岩，以及山在海中的科西嘉",
    icon: "🌬️",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "普羅旺斯的氣候",
    highlights: [
      { id: 1, icon: "☀️", title: "地中海氣候", content: "夏季炎熱乾燥、冬季溫和、少雪、日照充足；Wikipedia 的城市統計：Toulon 約 2,899 小時，是法國本土日照最多的城市，Marseille 約 2,835 小時，Nice 約 2,694 小時" },
      { id: 2, icon: "🌬️", title: "密斯特拉風（Mistral）", content: "從隆河谷吹向 Bouches-du-Rhône 與 Var 的冷而乾的北風，常超過每小時 100 公里；Marseille 一年約有 100 天吹密斯特拉風（Wikipedia）" },
      { id: 3, icon: "🍇", title: "對葡萄園的意義", content: "風使葡萄乾燥、降低病害壓力，但也可能吹壞訓練不良的葡萄樹（Wikipedia、Wine With Seth：Les Baux）；有些來源寫日照逾 3,000 小時，與上列城市數字不一致，課內不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">陽光讓葡萄成熟，風讓葡萄園保持乾淨。</p></div>"
  },
  {
    title: "普羅旺斯的地形與土壤",
    highlights: [
      { id: 1, icon: "⛰️", title: "石灰岩山脈", content: "Alpilles 是乾燥的石灰岩山脈，最高約 387 公尺；Sainte-Victoire 是長約 18 公里的石灰岩山脊，最高點 1,011 公尺（Wikipedia）" },
      { id: 2, icon: "🪨", title: "海岸與內陸", content: "Wikipedia：沿海一帶多片岩與石英，內陸多黏土與砂岩；Cassis 以石灰岩為主，Palette 為石灰質土壤（Wine With Seth）" },
      { id: 3, icon: "🪜", title: "Bandol 的梯田", content: "Bandol 的土壤以石灰岩、黏土、泥灰岩與砂岩為主，葡萄種在稱為 restanques 的梯田上，且只有貧瘠的山坡地才能列入 AOC（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">貧瘠、排水良好的石灰岩與山坡地，是普羅旺斯的共同點。</p></div>"
  },
  {
    title: "科西嘉：山在海中",
    highlights: [
      { id: 1, icon: "🏔️", title: "花崗岩與片岩", content: "山峰近 2,700 公尺；西部的花崗岩科西嘉約占全島三分之二，東部的阿爾卑斯科西嘉有許多片岩，涵蓋 Cap Corse；Corte 一帶是沉積盆地，東岸 Bastia 到 Solenzara 是沉積平原（Wine With Seth）" },
      { id: 2, icon: "☀️", title: "日照與降雨", content: "日照約 2,470 至 2,885 小時（Wine With Seth）；Wikipedia 寫平均約 2,750 小時，各來源口徑不同；產區年降雨量約 740 毫米（Wikipedia）" },
      { id: 3, icon: "💨", title: "風與灌溉", content: "Libeccio 等強風可超過每小時 200 公里，也降低了病害風險；所有科西嘉 AOC 都禁止灌溉（Wine With Seth、Wikipedia、INAO：Patrimonio）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">島上的產區差異，常常就是土壤與海風的差異。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "密斯特拉風是什麼樣的風？",
            options: ["A. 冷而乾的北風","B. 潮濕的南風","C. 溫暖的西風","D. 帶沙的東風"],
            correct: 0,
            explanation: "從隆河谷吹向 Bouches-du-Rhône 與 Var 的冷而乾的北風。"
          },
          {
            type: 'single',
            question: "依 Wikipedia 的城市統計，哪個城市是法國本土日照最多？",
            options: ["A. Toulon","B. Nice","C. Orange","D. Marseille"],
            correct: 0,
            explanation: "Toulon，約 2,899 小時。"
          },
          {
            type: 'single',
            question: "Bandol 的梯田稱為什麼？",
            options: ["A. restanques","B. garrigues","C. galets","D. bories"],
            correct: 0,
            explanation: "restanques。"
          },
          {
            type: 'single',
            question: "Alpilles 與 Sainte-Victoire 主要由什麼岩石構成？",
            options: ["A. 石灰岩","B. 花崗岩","C. 玄武岩","D. 石英岩"],
            correct: 0,
            explanation: "兩者都是石灰岩山地（Wikipedia）。"
          },
          {
            type: 'single',
            question: "科西嘉西部約占全島三分之二的是哪一類地質？",
            options: ["A. 花崗岩","B. 片岩","C. 石灰岩","D. 火山岩"],
            correct: 0,
            explanation: "花崗岩科西嘉（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "科西嘉的 AOC 對灌溉的規定是？",
            options: ["A. 禁止","B. 全年允許","C. 僅冬季允許","D. 僅白酒允許"],
            correct: 0,
            explanation: "所有科西嘉 AOC 禁止灌溉。"
          }
        ]
      }
    }
  }
]
