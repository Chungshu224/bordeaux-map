const fs = require('fs');
const FILE = './public/chateaux/coordinates_St-Emilion-Grand-Cru_AOC.json';
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

async function updateLocations() {
  console.log('開始透過 Photon (OpenStreetMap) API 尋找 89 個酒莊的莊園建築精細經緯度...');
  let updatedCount = 0;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    // 清理查詢字串，提升命中率
    let qName = encodeURIComponent(item.name.replace('Château', 'Chateau').trim());
    let url = 'https://photon.komoot.io/api/?q=' + qName + '+Saint-Emilion&limit=1';

    try {
      const res = await fetch(url);
      const output = await res.json();

      if (output && output.features && output.features.length > 0) {
        const coords = output.features[0].geometry.coordinates; // [lon, lat]
        const oldLon = item.coordinates[0];
        const oldLat = item.coordinates[1];
        
        const diffLon = Math.abs(coords[0] - oldLon);
        const diffLat = Math.abs(coords[1] - oldLat);
        
        // 嚴格過濾：僅接受落在 Saint-Emilion 及周邊範圍內的座標 (Lon: -0.22~-0.05, Lat: 44.85~44.95)
        const inBounds = (coords[0] >= -0.22 && coords[0] <= -0.05 && coords[1] >= 44.85 && coords[1] <= 44.95);
        
        if (inBounds && (diffLon > 0.0001 || diffLat > 0.0001)) {
          console.log('[' + (i+1).toString().padStart(2, '0') + '/89] ' + item.name + ' \n    → 精細化: [' + coords[0].toFixed(5) + ', ' + coords[1].toFixed(5) + ']');
          item.coordinates = [parseFloat(coords[0].toFixed(5)), parseFloat(coords[1].toFixed(5))];
          updatedCount++;
        } else if (!inBounds) {
          console.log('[' + (i+1).toString().padStart(2, '0') + '/89] ' + item.name + ' → 搜尋結果偏離聖愛美濃，捨棄');
        }
      } else {
        // 第二次嘗試（拿掉 Saint-Emilion 的限制，改用 Gironde 避免有些酒莊在隔壁小鎮）
        const url2 = 'https://photon.komoot.io/api/?q=' + qName + '+Gironde&limit=1';
        const res2 = await fetch(url2);
        const out2 = await res2.json();
        
        if (out2 && out2.features && out2.features.length > 0) {
          const c2 = out2.features[0].geometry.coordinates;
          
          const inBounds2 = (c2[0] >= -0.22 && c2[0] <= -0.05 && c2[1] >= 44.85 && c2[1] <= 44.95);
          
          if (inBounds2) {
            console.log('[' + (i+1).toString().padStart(2, '0') + '/89] ' + item.name + ' \n    → 精細化(含周邊): [' + c2[0].toFixed(5) + ', ' + c2[1].toFixed(5) + ']');
            item.coordinates = [parseFloat(c2[0].toFixed(5)), parseFloat(c2[1].toFixed(5))];
            updatedCount++;
          } else {
            console.log('[' + (i+1).toString().padStart(2, '0') + '/89] ' + item.name + ' → 搜尋結果過遠，捨棄');
          }
        } else {
          console.log('[' + (i+1).toString().padStart(2, '0') + '/89] ' + item.name + ' → 查無特徵點，保留現有極座');
        }
      }
    } catch(e) {
      console.log('[' + (i+1).toString().padStart(2, '0') + '/89] ' + item.name + ' → 查詢失敗: ' + e.message);
    }
    // 延遲以避免 IP 被 OpenStreetMap 封鎖 (Rate limit)
    await new Promise(r => setTimeout(r, 600));
  }
  
  if(updatedCount > 0) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
    console.log('\n✅ 查詢結束！已將 ' + updatedCount + ' 個酒莊刷新為最精細的莊園/建築真實座標，資料已覆寫。');
  } else {
    console.log('\n✅ 結束！無需更動。');
  }
}
updateLocations();