// src/services/dataService.js
export default {
  // 載入 AOC 群組資料
  async loadAOCGroups() {
    return {
      'Regional': [
        'Bordeaux_AOC.geojson',
        'Bordeaux-Superior_AOC.geojson'
      ],
      'LeftBank-Medoc': [
        'Medoc_AOC.geojson',
        'Haut-Medoc_AOC.geojson',
        'Margaux_AOC.geojson',
        'Pauillac_AOC.geojson',
        'St-Julien_AOC.geojson',
        'St-Estephe_AOC.geojson',
        'Listrac-Medoc_AOC.geojson',
        'Moulis-en-Medoc_AOC.geojson'
      ],
      'LeftBank-Graves': [
        'Graves_AOC.geojson',
        'Pessac-Leognan_AOC.geojson',
        'Graves-Superieures_AOC.geojson'
      ],
      'RightBank-Libournais': [
        'Pomerol_AOC.geojson',
        'St-Emilion_AOC.geojson',
        'St-Emilion-Grand-Cru_AOC.geojson',
        'Fronsac_AOC.geojson'
      ],
      'Entre-Deux-Mers': [
        'Entre-Deux-Mers_AOC.geojson',
        'Cadillac_AOC.geojson'
      ],
      'Sauternais': [
        'Sauternes_AOC.geojson',
        'Barsac_AOC.geojson'
      ]
    };
  },
  
  // 取得產區資訊
  async getRegionInfo(aocId) {
    try {
      const response = await fetch('/data/regions-info.json');
      if (!response.ok) throw new Error('Failed to load region info');
      
      const regions = await response.json();
      return regions.find(r => r.id === aocId) || null;
    } catch (error) {
      console.error('Error loading region info:', error);
      return null;
    }
  }
};