const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '../src/data/loire');

const lessons = [
  ['lo-l3-1', '白詩南工藝入門——安茹干白與索米爾白酒', "Anjou(白)、Anjou-Coteaux-de-la-Loire、Saumur(白)、Coteaux-de-Saumur"],
  ['lo-l3-2', '薩弗尼耶爾三部曲', "Savennières、Savennières-Roche-aux-Moines、Coulée-de-Serrant"],
  ['lo-l3-3', '萊揚河貴腐甜酒金字塔', "Coteaux-du-Layon、Coteaux-du-Layon-premier-cru-Chaume、Coteaux-de-l'Aubance"],
  ['lo-l3-4', '頂級甜酒——邵姆與波澤奧', "Quarts-de-Chaume、Bonnezeaux"],
  ['lo-l3-5', '羅亞爾克雷芒與索米爾氣泡', "Crémant-de-Loire、Saumur(氣泡)"],
  ['lo-l3-6', '伏弗雷——干到貴腐全光譜', "Vouvray、Montlouis-sur-Loire"],
  ['lo-l3-7', '都漢白酒四角', "Cheverny、Cour-Cheverny、Valençay、Touraine-Amboise(白)、Touraine-Azay-le-Rideau"],
  ['lo-l3-8', 'Loir 河白酒', "Jasnières、Coteaux-du-Loir(白)、Coteaux-du-Vendômois(白)、Orléans(白)、Touraine(白)"],
  ['lo-l3-9', '中央產區雙雄——桑塞爾 & 普依', "Sancerre、Pouilly-Fumé、Pouilly-sur-Loire"],
  ['lo-l3-10', '中央產區隱藏版精品', "Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant、Saint-Pourçain"],
  ['lo-l3-11', 'Vouvray甜白×起司；Sancerre×山羊起司 + Level 3 評量', '全 Level 3 AOC'],
  ['lo-l4-1', '奧弗涅丘——火山土壤精品', "Côtes-d'Auvergne、Côtes-d'Auvergne-Boudes、Côtes-d'Auvergne-Chateaugay、Côtes-d'Auvergne-Corent、Côtes-d'Auvergne-Madargues"],
  ['lo-l4-2', '互動地圖實戰——GeoJSON 視覺化', '全羅亞爾河谷 58 AOC'],
  ['lo-l4-3', '氣候變遷——採收期與酒精濃度分析', '跨產區氣候研究'],
  ['lo-l4-4', '垂直品飲——陳年潛力判讀', "Savennières、Chinon、Vouvray"],
  ['lo-l4-5', '盲飲診斷——土質差異', "Sancerre(燧石/石灰岩/Kimmeridgian)、Chinon"],
  ['lo-l4-6', '高端餐飲設計 + 亞洲料理配對 + Level 4 評量', '全產區 58 AOC']
];

for (const [id, title, aocs] of lessons) {
  const firstAoc = aocs.split('、')[0].replace(/'/g, "\\'");
  const titleEsc = title.replace(/'/g, "\\'");
  const aocsSafe = aocs.replace(/'/g, "\\'");

  const content = `/**
 * ${id.toUpperCase()} ${title}
 * AOCs: ${aocs}
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: \`
      <div class="intro-content">
        <p class="intro-lead">${title}——本課程涵蓋 ${aocs}，深入探討相關 AOC 的地理、土壤、品種與風格特色。</p>
      </div>
    \`
  },
  {
    title: '${titleEsc}',
    content: \`
      <div class="lesson-content">
        <p>本課程系統學習 ${aocsSafe} 的風土特色，幫助您建立紮實的羅亞爾河谷知識框架。</p>
        <p>透過系統學習，您將能夠辨識這些 AOC 的典型風格，並在品飲時準確描述其特色。</p>
      </div>
    \`
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: '以下哪個 AOC 屬於本課程範圍？',
        options: ['${firstAoc}', 'Bordeaux', 'Champagne', 'Bourgogne'],
        correctIndex: 0,
        explanation: '${firstAoc} 是羅亞爾河谷的重要 AOC，是本課程的核心學習對象。'
      }
    ]
  }
]
`;

  fs.writeFileSync(path.join(base, id + '.js'), content, 'utf8');
  console.log('Created: ' + id + '.js');
}
