# 🍷 Bordeaux Wine Academy - 波爾多葡萄酒學院

一個基於互動地圖的等級化葡萄酒教育平台，專注於波爾多產區的深度學習體驗。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue.js-3.5+-green.svg)
![Mapbox](https://img.shields.io/badge/Mapbox-GL-orange.svg)

## ✨ 功能特色

### 🎓 等級化學習系統
- **Level 1 - 入門基礎**：建立波爾多葡萄酒的基礎認知
- **Level 2 - 中級進階**：深入了解產區特色與風格差異  
- **Level 3 - 高級專業**：掌握複雜的風土條件與品質評估
- **Level 4 - 專家認證**：專業分析與綜合評估能力培養

### 🗺️ 互動地圖學習
- **產區探索**：點擊地圖深入了解各個波爾多產區
- **3D視圖**：立體觀察地形與微氣候關係
- **比較模式**：並排對比不同產區特色
- **學習引導**：智能提示和互動標記

### 🧠 智能測驗系統
- **多種題型**：選擇題、配對題、拖放題、論述題
- **適應性難度**：根據學習進度調整題目難度
- **即時反饋**：詳細的答題解析和改進建議
- **進度追蹤**：完整的學習數據分析

### 🏆 成就激勵系統
- **多元成就**：學習進度、地圖探索、測驗表現等多維度成就
- **稀有度分級**：普通、優良、稀有、史詩、傳說五個等級
- **社交互動**：與其他學習者交流和競爭
- **個人檔案**：學習統計和能力徽章展示

## 🚀 技術架構

### 前端技術棧
- **Vue.js 3.5+** - 響應式框架
- **Vite** - 現代化構建工具
- **Mapbox GL** - 互動地圖引擎
- **Turf.js** - 地理空間分析
- **CSS3** - 現代化樣式和動畫

### 核心組件結構
```
src/
├── components/
│   ├── LearningSystem.vue      # 主學習系統介面
│   ├── LessonContent.vue       # 課程內容組件
│   ├── BordeauxMapIntegration.vue # 地圖整合組件
│   ├── AOCList.vue            # 產區列表
│   └── MapSection.vue         # 地圖區域
├── stores/
│   ├── learningStore.js       # 學習狀態管理
│   ├── quizSystem.js          # 測驗系統
│   └── achievementSystem.js   # 成就系統
└── assets/
    └── bordeaux-regions.json  # 產區資料
```

## 📚 學習內容設計

### Level 1 課程大綱
1. **認識波爾多地理位置** - 了解地理環境與氣候特色
2. **波爾多氣候與環境** - 探索影響品質的自然因素  
3. **主要葡萄品種介紹** - 認識經典葡萄品種
4. **左岸與右岸初探** - 了解兩岸的基本差異
5. **波爾多酒款類型概覽** - 認識不同類型葡萄酒
6. **AOC系統入門** - 理解法國葡萄酒法規基礎
7. **品嚐技巧基礎** - 學習基本品評方法
8. **Level 1 綜合評量** - 檢驗學習成果

### Level 2 課程重點
1. **Médoc產區深度探索** - 左岸四大村莊的風土差異與釀酒哲學
2. **Margaux - 優雅的香水之鄉** - 最優雅產區的獨特魅力與代表酒莊
3. **Pauillac - 王者風範的產區** - 三大一級酒莊的故鄉與其釀酒傳奇
4. **Saint-Julien - 平衡的典範** - 最均衡產區的風格特色與名莊解析
5. **Saint-Estèphe - 北地之珠** - 風格最獨特產區的現代化轉型
6. **Pomerol - 稀世珍寶** - 波爾多最小最精品的頂級產區
7. **聖愛美濃深度探索** - 右岸明珠的風土傳奇與現代榮光
8. **Libournais衛星產區** - 性價比優秀的右岸周邊產區探索

### Level 3 & 4 高階內容
- 甜酒產區深度研究（Sauternes, Barsac）
- 微氣候與terroir分析
- 市場投資分析
- 專業品鑑技能訓練

## 🛠️ 安裝與運行

### 環境要求
- Node.js 16.0+
- npm 7.0+ 或 yarn 1.22+

### 安裝步驟

1. **克隆專案**
```bash
git clone https://github.com/yourusername/bordeaux-wine-academy.git
cd bordeaux-wine-academy
```

2. **安裝依賴**
```bash
npm install
```

### 🗺 Mapbox Token（本機開發）

為了使用較佳的 Mapbox 底圖樣式，請在本機設定 public token：

1) 取得 token：登入 Mapbox → Account → Access tokens → 複製「Default public token」（pk. 開頭）

2) 建立 `.env.local` 並填入（請勿提交到 repo）：

```bash
VITE_MAPBOX_TOKEN=pk.your_mapbox_public_token_here
```

3) 若你的 token 有設定 Allowed URLs，請加入：
- `http://localhost:5173/*`
- `http://localhost:5174/*`

4) 重新啟動開發伺服器（Vite 只在啟動時讀 .env）

未設定 token 時，應用會自動退回 OSM Raster 背景以確保可用性。

3. **安裝新增的依賴**
```bash
npm install vue-router@4 pinia@2 vue-draggable-next@2 sass@1 @types/mapbox-gl@2
```

4. **開發模式運行**
```bash
npm run dev
```

5. **生產環境構建**
```bash
npm run build
```

6. **預覽構建結果**
```bash
npm run preview
```

## 🖼️ 媒體資產優化工具

專案提供一個媒體優化腳本，協助你掃描 `public/` 內的圖片與影片，並在需要時產生 WebP/MP4 的最佳化副本至 `public/optimized/`。

### 功能摘要
- 掃描並產出報告（`media-report.json`、`media-report.md`）
- 對超過門檻大小的圖片（.jpg/.jpeg/.png/.gif）轉為 WebP（quality=75）
- 對影片（.mp4/.webm/.mov）轉為 MP4（H.264/AAC；最大寬度 1280、CRF 28）
- 若已存在較新且更小的輸出檔，會自動跳過（可安全重複執行）
- 可調整門檻並限定只處理特定路徑

### 先決條件
專案已包含必要相依：`sharp` 與 `ffmpeg-static`。若你是新環境，請先執行：

```pwsh
npm install
```

### 常用指令

- 只掃描（預設門檻 300KB）：
```pwsh
npm run media:scan
```

- 顯示說明（參數與用法）：
```pwsh
node scripts/media-optimize.mjs --help
```

- 自訂門檻做掃描（例如 500KB）：
```pwsh
node scripts/media-optimize.mjs --scan --threshold=500KB
```

- 實際轉檔（高門檻 + 限定資料夾，風險低、速度快）：
```pwsh
node scripts/media-optimize.mjs --apply --threshold=1MB --include=images/
```

### 產出與採用
- 產出最佳化檔案放在 `public/optimized/`，並回寫 `media-optimized-map.json`（對應表）
- 網頁採用建議（圖片）：
    - 使用 `<picture>` + `srcset` 以優先載入 WebP，並保留 JPEG/PNG 後備
    - 參照 `media-optimized-map.json` 更新對應路徑

如需我幫你批次將現有 `<img>` 替換為 `<picture>` 並引用 WebP（保留 fallback），告訴我要處理的頁面或資料夾即可。

## 🎮 使用指南

### 進入學習模式
1. 點擊右上角的「🎓 學習模式」按鈕
2. 選擇適合的等級開始學習
3. 按照課程順序完成學習目標

### 地圖互動操作
- **探索模式**：自由點擊產區查看資訊
- **識別模式**：測試產區識別能力
- **比較模式**：並排比較不同產區
- **3D模式**：立體觀察地形特徵

### 測驗系統使用
- 完成課程學習目標後解鎖測驗
- 支持多種題型的互動答題
- 查看詳細的答題分析和建議
- 達到通過標準才能進入下一課程

### 成就獲取方式
- **學習進度**：完成課程和等級認證
- **地圖探索**：探索不同波爾多產區
- **測驗表現**：獲得高分和連續優異表現
- **時間管理**：保持學習習慣和專注度

## 📊 資料來源

### 地理資料
- 波爾多AOC邊界：官方INAO資料
- 地形資料：開放地理資料集
- 酒莊位置：公開資料整理

### 教育內容
- 國際葡萄酒教育標準參考
- 波爾多酒商聯合會資料
- 葡萄酒專業文獻整理
- 資深侍酒師經驗分享

## 🤝 貢獻指南

我們歡迎各種形式的貢獻！

### 如何貢獻
1. Fork 專案到您的GitHub
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 貢獻類型
- 🐛 **Bug修復**：修復程式錯誤
- ✨ **新功能**：添加新的學習功能
- 📚 **內容改進**：完善教學內容
- 🎨 **UI/UX優化**：改進使用者體驗
- 📖 **文檔更新**：改善文檔說明

## 📝 開發計劃

### v1.1 (計劃中)
- [ ] 多語言支持（英文、法文）
- [ ] 離線學習模式
- [ ] 學習進度同步
- [ ] 社群討論功能

### v1.2 (未來版本)
- [ ] 擴展其他產區（勃根地、香檳等）
- [ ] VR/AR學習體驗
- [ ] 個人化學習路徑
- [ ] 線上認證考試

### v2.0 (長期目標)
- [ ] 多人協作學習
- [ ] 人工智能學習助手
- [ ] 實時酒莊數據整合
- [ ] 專業導師指導系統

## 📄 授權協議

本專案採用 MIT License 開源協議。

## 🙏 致謝

- **Vue.js 團隊** - 優秀的前端框架
- **Mapbox** - 強大的地圖服務

- **波爾多酒商聯合會** - 產區資料支持
- **開源社群** - 技術支持和靈感來源

---

<div align="center">

**🍷 享受學習波爾多葡萄酒的旅程！🍷**

[開始學習](#) • [查看文檔](#) • [加入社群](#)

</div>