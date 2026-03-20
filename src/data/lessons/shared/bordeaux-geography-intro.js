// 波爾多地理位置介紹 - L3 課程共用模塊
// 提供波爾多地理、氣候、產區概覽的統一介紹

export const bordeauxGeographyIntro = [
  // 波爾多地理位置介紹
  {
    type: 'geography-intro',
    title: '認識波爾多地理位置',
    subtitle: '世界級葡萄酒產區的地理基礎',
    icon: '🗺️',
    content: `
      <div class="geography-content">
        <div class="location-overview">
          <h3>🌍 地理位置與區位優勢</h3>
          <div class="location-details">
            <div class="coordinates">
              <h4>精確坐標</h4>
              <p>• <strong>緯度：</strong>44°50'N - 45°35'N<br>
              • <strong>經度：</strong>0°10'W - 1°10'W<br>
              • <strong>海拔：</strong>平均 50-100 公尺<br>
              • <strong>總面積：</strong>約 120,000 公頃葡萄園</p>
            </div>
            <div class="regional-context">
              <h4>區域環境</h4>
              <p>• <strong>行政區劃：</strong>位於法國西南部新阿基坦大區(Nouvelle-Aquitaine)<br>
              • <strong>省份：</strong>吉倫特省(Gironde)中心<br>
              • <strong>距離大西洋：</strong>約 50 公里<br>
              • <strong>河流系統：</strong>加隆河(Garonne)與多爾多涅河(Dordogne)交匯處</p>
            </div>
          </div>
        </div>

        <div class="climate-geography">
          <h3>🌤️ 氣候地理特徵</h3>
          <div class="climate-factors">
            <div class="maritime-influence">
              <h4>海洋性氣候影響</h4>
              <p>• <strong>大西洋調節：</strong>海洋性氣候帶來溫和穩定的溫度<br>
              • <strong>濕度調節：</strong>適中的濕度有利於葡萄生長<br>
              • <strong>霜凍保護：</strong>海洋暖流減少嚴重霜凍風險<br>
              • <strong>風向影響：</strong>西風帶來海洋性降水</p>
            </div>
            <div class="river-microclimate">
              <h4>河流微氣候系統</h4>
              <p>• <strong>加隆河：</strong>調節左岸溫度，創造獨特微氣候<br>
              • <strong>多爾多涅河：</strong>為右岸產區提供濕度調節<br>
              • <strong>吉倫特河口：</strong>兩河交匯形成的河口擴大海洋影響<br>
              • <strong>晨霧現象：</strong>河流霧氣有助於貴腐菌發展</p>
            </div>
          </div>
        </div>

        <div class="geological-foundation">
          <h3>🏔️ 地質基礎與地形</h3>
          <div class="geological-structure">
            <div class="formation-history">
              <h4>地質形成歷史</h4>
              <p>• <strong>第三紀海洋：</strong>石灰岩基底在海洋環境中形成<br>
              • <strong>冰河期影響：</strong>第四紀冰河期帶來礫石沉積<br>
              • <strong>河流作用：</strong>長期河流沖積形成多樣化土壤<br>
              • <strong>構造活動：</strong>輕微地殼活動形成坡度變化</p>
            </div>
            <div class="terrain-characteristics">
              <h4>地形特徵</h4>
              <p>• <strong>左岸高地：</strong>梅多克高原海拔 10-40 公尺<br>
              • <strong>右岸丘陵：</strong>聖埃米利翁-波美侯丘陵 20-90 公尺<br>
              • <strong>河流平原：</strong>兩河之間低平沖積平原<br>
              • <strong>坡向優勢：</strong>南向和東南向坡地光照最佳</p>
            </div>
          </div>
        </div>

        <div class="appellation-system">
          <h3>🍷 產區分布與分級</h3>
          <div class="appellation-overview">
            <div class="main-regions">
              <h4>主要產區分布</h4>
              <div class="region-grid">
                <div class="left-bank">
                  <h5>🌊 左岸產區 (Rive Gauche)</h5>
                  <p>• <strong>梅多克 (Médoc)：</strong>以卡本內蘇維翁為主的紅酒產區<br>
                  • <strong>上梅多克 (Haut-Médoc)：</strong>包含四大名村<br>
                  • <strong>格拉夫 (Graves)：</strong>紅白酒並重的產區<br>
                  • <strong>蘇玳 (Sauternes)：</strong>世界頂級甜酒產區</p>
                </div>
                <div class="right-bank">
                  <h5>🏞️ 右岸產區 (Rive Droite)</h5>
                  <p>• <strong>聖埃米利翁 (Saint-Émilion)：</strong>梅洛為主的優雅產區<br>
                  • <strong>波美侯 (Pomerol)：</strong>精品小產區，柏翠酒莊所在地<br>
                  • <strong>弗朗-聖埃米利翁：</strong>價值型優質產區<br>
                  • <strong>布萊 (Blaye)：</strong>新興優質產區</p>
                </div>
              </div>
            </div>

            <div class="classification-system">
              <h4>🏆 分級制度體系</h4>
              <div class="classification-types">
                <div class="official-classifications">
                  <h5>官方分級</h5>
                  <p>• <strong>1855年分級：</strong>左岸最權威的歷史分級<br>
                  • <strong>格拉夫分級：</strong>紅白酒分別評定<br>
                  • <strong>聖埃米利翁分級：</strong>定期更新的動態分級<br>
                  • <strong>中級酒莊：</strong>梅多克優質酒莊認證</p>
                </div>
                <div class="aoc-system">
                  <h5>AOC 法定產區</h5>
                  <p>• <strong>波爾多AOC (Bordeaux AOC)：</strong>最大的基礎級別<br>
                  • <strong>波爾多上級AOC (Bordeaux Supérieur AOC)：</strong>更嚴格的品質要求<br>
                  • <strong>村莊級AOC：</strong>如瑪歌、聖朱利安等<br>
                  • <strong>特級AOC：</strong>如波美侯、聖埃米利翁特級</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    hasMap: true,
    mapConfig: {
      center: [44.8378, -0.5792], // 波爾多市中心
      zoom: 9,
      showAllRegions: true,
      highlightGeography: true,
      showRivers: true,
      showElevation: true
    },
    interactiveElements: [
      {
        type: 'geography-explorer',
        title: '波爾多地理探索器',
        data: {
          regions: ['左岸', '右岸', '兩河之間'],
          features: ['河流', '地形', '氣候', '土壤'],
          appellations: ['村莊級', '地區級', '特級']
        }
      }
    ],
    highlights: [
      {
        id: 1,
        icon: '🗺️',
        title: '優越地理位置',
        content: '位於北緯45度的理想葡萄種植緯度，海洋性氣候與河流微氣候的完美結合'
      },
      {
        id: 2,
        icon: '🌊',
        title: '獨特河流系統',
        content: '加隆河與多爾多涅河創造了左岸、右岸不同的風土條件和產區特色'
      },
      {
        id: 3,
        icon: '🏆',
        title: '完整分級體系',
        content: '從基礎AOC到頂級分級酒莊，形成了世界最完整的葡萄酒品質分級系統'
      }
    ]
  }
];

export default bordeauxGeographyIntro;