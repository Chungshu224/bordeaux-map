const fs = require('fs');
const path = 'src/data/lessons/l1-7.js';
let content = fs.readFileSync(path, 'utf8');

const startString = `  {
    title: '視覺品評：觀察酒色與外觀',`;
const endString = `      explanation: '紅酒出現橙色邊緣是正常的陳年特徵，表示酒款正在成熟或已經經過一定時間的陳年，是酒款演化的自然過程。'
    }
  },`;

const startIndex = content.indexOf(startString);
const endIndex = content.indexOf(endString, startIndex) + endString.length;

if (startIndex === -1) {
  console.log('Start index not found');
  process.exit(1);
}

const newObj = `  {
    title: '視覺品評 (1/3)：色澤分析',
    highlights: [
      { id: 1, icon: '👁️', title: '色澤觀察', content: '從顏色深淺判斷酒款年齡和風格' }
    ],
    content: \`<div class="visual-evaluation">
      <p class="lead-text">視覺品評是品酒的第一步，通過紅酒與白酒的顏色特徵，可以獲得關於酒款年齡與品種的初步信息。</p>
      <div class="visual-aspects">
        <div class="color-analysis" style="margin-bottom: 20px;">
          <h4>🍷 紅酒顏色演變</h4>
          <img src="/images/L1-7/紅酒顏色演變.png" alt="紅酒顏色演變" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
        <div class="color-analysis">
          <h4>🥂 白酒顏色特徵</h4>
          <img src="/images/L1-7/白酒顏色特徵.png" alt="白酒顏色特徵" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
      </div>
    </div>\`,
    hasMap: false
  },
  {
    title: '視覺品評 (2/3)：透明度與黏度',
    highlights: [
      { id: 1, icon: '💎', title: '狀態評估', content: '清澈度與酒腿能反映結構與品質' }
    ],
    content: \`<div class="visual-evaluation">
      <div class="visual-aspects">
        <div class="clarity-assessment" style="margin-bottom: 20px;">
          <h4>💎 透明度評估</h4>
          <img src="/images/L1-7/透明度評估.png" alt="透明度評估" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
        <div class="viscosity-evaluation">
          <h4>🌊 黏度與酒腿</h4>
          <img src="/images/L1-7/黏度與酒腿.png" alt="黏度與酒腿" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
      </div>
    </div>\`,
    hasMap: false
  },
  {
    title: '視覺品評 (3/3)：觀察技巧',
    highlights: [
      { id: 1, icon: '🔍', title: '觀察方法', content: '掌握正確角度與光線判讀' }
    ],
    content: \`<div class="visual-evaluation">
      <div class="visual-aspects">
        <div class="observation-technique" style="margin-bottom: 20px;">
          <h4>🔍 葡萄酒觀察技巧</h4>
          <img src="/images/L1-7/葡萄酒觀察技巧.png" alt="葡萄酒觀察技巧" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
      </div>
    </div>\`,
    hasMap: false,
    quiz: {
      question: '紅酒出現明顯的橙色邊緣通常表示什麼？',
      options: ['酒款有缺陷', '酒款正在成熟或已經陳年', '酒精度過高', '釀造工藝有問題'],
      correct: 1,
      explanation: '紅酒出現橙色邊緣是正常的陳年特徵，表示酒款正在成熟或已經經過一定時間的陳年，是酒款演化的自然過程。'
    }
  },`;

content = content.substring(0, startIndex) + newObj + content.substring(endIndex);
fs.writeFileSync(path, content, 'utf8');
console.log('Update successful');
