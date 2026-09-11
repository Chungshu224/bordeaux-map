# 開發者備忘：Slide Blocks 簡要說明

這份筆記說明在投影片內以 blocks 陣列渲染標準化的內容卡片，提升自學結構化與一致性。

## 何處渲染
- `src/components/PresentationLesson.vue` 會在 content 投影片左側主欄位渲染：
  - 上方：`<SlideBlocks :blocks="currentSlideData.blocks"/>`（若存在）
  - 下方：原本的 HTML 內容（`v-html`）
  - 右側：地圖（若 `hasMap: true`）

## 支援的 block 類型
- `info` → `InfoCard.vue`
- `misconception` → `MisconceptionCard.vue`
- `compare` → `CompareTable.vue`
- `steps` → `StepsBlock.vue`
- `expand` → `Expandable.vue`

## 基本資料結構
每個 block 物件：
```ts
interface SlideBlock {
  type: 'info' | 'misconception' | 'compare' | 'steps' | 'expand'
  props?: Record<string, any>   // 傳入元件的屬性
  content?: string              // 可選：HTML 字串，會以 v-html 渲染於 slot
}
```

## 範例
```js
// 在你的課程資料 slide 內加入 blocks
{
  type: 'content',
  title: '左岸與右岸的核心差異',
  blocks: [
    {
      type: 'compare',
      props: {
        left: { title: '左岸', points: ['砂礫土排水佳', 'Cabernet Sauvignon 主導', '結構感強'] },
        right: { title: '右岸', points: ['黏土石灰岩', 'Merlot 主導', '圓潤細緻'] }
      }
    },
    {
      type: 'misconception',
      props: { title: '常見誤解：右岸酒都很甜？' },
      content: '右岸多為乾型紅酒；甜酒主要位於 <strong>Sauternes/Barsac</strong>。'
    },
    {
      type: 'steps',
      props: { title: '如何快速判讀酒標', steps: ['找產區/分級', '看酒莊或品牌', '辨識年份與酒精度'] }
    }
  ]
}
```

## 注意事項
- `blocks` 與 `content` 可同時存在；`blocks` 會優先顯示在上方。
- 若只有 `blocks` 而無 `content` 也能正常渲染。
- 若需要新增 block 類型，請於 `src/components/SlideBlocks.vue` 的 `resolve()` 增加對應映射並建立元件。

## 相關檔案
- `src/components/SlideBlocks.vue`：blocks 渲染器
- `src/components/blocks/*.vue`：各類 block 元件
- `src/components/PresentationLesson.vue`：注入 blocks 的版面
