<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import AOCList from './BourgogneAOCList.vue'
import MapSection from './BourgogneMapSection.vue'
import { buildMultiCommuneGroups, isMultiCommuneSelector, parseMultiCommuneSelector } from '@/utils/multiCommuneAOC'

// 接收區域配置
const props = defineProps({
  regionConfig: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['request-learning-mode'])

const search = ref('')
const activeAOC = ref({ group: '', aoc: '' })
const regionInfo = ref(null)
const dataCache = new Map()

const normalizeLookupKey = (value) => {
  return String(value || '')
    .toLowerCase()
    .replace(/\.geojson$/i, '')
    .replace(/^aoc\s+/i, '')
    .replace(/[àâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/[îï]/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[’']/g, '-')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

const buildLookupCandidates = (value) => {
  const base = normalizeLookupKey(value)
  const withoutArticle = base.replace(/^(le|la|les|l)-/, '')
  const set = new Set([
    base,
    withoutArticle,
    base.replace(/-/g, ''),
    withoutArticle.replace(/-/g, '')
  ])
  return [...set].filter(Boolean)
}

const TOUCH_LAYOUT_MAX_WIDTH = 4096
const useTouchCompactLayout = () => {
  return typeof window !== 'undefined' && window.innerWidth <= TOUCH_LAYOUT_MAX_WIDTH
}

const isMobileView = ref(useTouchCompactLayout())
const showMobileAOCList = ref(false)

const checkMobile = () => {
  isMobileView.value = useTouchCompactLayout()
  if (!isMobileView.value) {
    showMobileAOCList.value = false;
  }
}

onMounted(() => {
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// 根據區域動態調整顏色配置
const styleColors = computed(() => {
  const colorSchemes = {
    'chablis': {
      '紅酒': '#8B0000',
      '白酒': '#F0E68C',
    },
    'cote-de-nuits': {
      '紅酒': '#8B0000',
      '白酒': '#F5DEB3',
    },
    'cote-de-beaune': {
      '紅酒': '#CD5C5C',
      '白酒': '#F5DEB3',
    },
    'cote-chalonnaise': {
      '紅酒': '#BC8F8F',
      '白酒': '#F5DEB3',
    },
    'maconnais': {
      '紅酒': '#D2691E',
      '白酒': '#F5DEB3',
    },
    'beaujolais': {
      '紅酒': '#E0115F',
      '白酒': '#FFE4C4',
    }
  }
  
  return colorSchemes[props.regionConfig?.id] || colorSchemes['chablis']
})

// 根據區域 ID 獲取 index.json 路徑
const indexPath = computed(() => {
  const pathMap = {
    'chablis': '/bourgogne/geojson/index.json',
    'cote-de-nuits': '/bourgogne/geojson/Cote-de-Nuits/index.json',
    'cote-de-beaune': '/bourgogne/geojson/Cote-de-Beaune/index.json',
    'cote-chalonnaise': '/bourgogne/geojson/Cote-Chalonnaise/index.json',
    'maconnais': '/bourgogne/geojson/Maconnais/index.json',
    'beaujolais': '/bourgogne/geojson/Beaujolais/index.json'
  }
  
  return pathMap[props.regionConfig?.id] || '/bourgogne/geojson/index.json'
})

// 根據區域 ID 獲取數據路徑前綴
const dataPathPrefix = computed(() => {
  const prefixMap = {
    'chablis': 'Chablis/',
    'cote-de-nuits': 'Cote-de-Nuits/',
    'cote-de-beaune': 'Cote-de-Beaune/',
    'cote-chalonnaise': 'Cote-Chalonnaise/',
    'maconnais': 'Maconnais/',
    'beaujolais': 'Beaujolais/'
  }
  
  return prefixMap[props.regionConfig?.id] || ''
})

// 依 group（村莊資料夾路徑）取得對應的資料檔路徑
const buildDataPath = (group) => {
  const mainFolder = group.split('/')[0];
  let dataPath = ''

  if (group === 'Regional' || group === 'Beaujolais' || group === 'Beaujolais Crus') {
    dataPath = `/bourgogne/data/${dataPathPrefix.value}Regional.json`;
  } else if (group === 'AOC Bourgogne') {
    dataPath = `/bourgogne/data/AOC Bourgogne.json`;
  } else {
    dataPath = `/bourgogne/data/${dataPathPrefix.value}${mainFolder}.json`;
  }
  return dataPath
}

const fetchJsonCached = async (path) => {
  if (dataCache.has(path)) return dataCache.get(path);
  const res = await fetch(path);
  if (!res.ok) {
    console.error(`[RegionMap] Failed to load data file: ${path} (Status: ${res.status})`);
    return null;
  }
  const data = await res.json();
  dataCache.set(path, data);
  return data;
}

// 從單一資料檔中，找出對應某個 aoc 檔名的欄位資訊（純函式，不寫入狀態）
const resolveAOCEntry = (aocData, aoc) => {
  if (!aocData) return null;

  if (Array.isArray(aocData)) {
    // Chablis 格式: 陣列 [{id, name, ...}]
    return aocData.find(info => info.id === aoc) || null;
  }

  if (aocData.geojson?.regional) {
    // Regional.json 格式: {geojson: {regional: {key: {...}}}}
    const aocKey = aoc.replace('.geojson', '').toLowerCase().replace(/\s+/g, '-').replace(/[àâä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[ôö]/g, 'o').replace(/ç/g, 'c');
    const foundInfo = aocData.geojson.regional[aocKey];
    if (foundInfo) {
      return { ...foundInfo, name: foundInfo.fullName || foundInfo.name };
    }
    console.warn(`No info found for key: "${aocKey}" in Regional.json`);
    return null;
  }

  if (aocData.village || aocData['1er Crus'] || aocData.premier_crus || aocData['Grand Crus'] || aocData.grand_crus ||
      aocData.geojson?.village || aocData.geojson?.['1er Crus'] || aocData.geojson?.premier_crus || aocData.geojson?.['Grand Crus'] || aocData.geojson?.grand_crus) {
    // Côte de Nuits/Beaune 格式: {village: {...}, "1er Crus": {...}, "Grand Crus": {...}}
    // 或 {village: {...}, premier_crus: {...}, grand_crus: {...}}
    // 或 {geojson: {village: {...}, premier_crus: {...}, grand_crus: {...}}}

    const dataSource = aocData.geojson || aocData;
    let searchKey = aoc.replace('.geojson', '');
    let targetCategory = null;

    if (searchKey.includes('Grand Cru')) {
      targetCategory = dataSource['Grand Crus'] || dataSource.grand_crus;
      searchKey = searchKey.replace(/AOC\s+/i, '').replace(/\s+Grand Cru.*$/i, '').trim();
    } else if (searchKey.match(/1er\s+Cru|Premier\s+Cru/i)) {
      targetCategory = dataSource['1er Crus'] || dataSource.premier_crus;
      searchKey = searchKey.replace(/AOC\s+/i, '').replace(/.*?1er\s+Cru\s+/i, '').replace(/.*?Premier\s+Cru\s+/i, '').trim();
    } else {
      targetCategory = dataSource.village;
      const match = searchKey.match(/\(([^)]+)\)/);
      searchKey = match ? match[1] : searchKey.replace(/^AOC /, '');
    }

    const candidateKeys = buildLookupCandidates(searchKey)

    let foundInfo = null;

    if (targetCategory) {
      for (const key of candidateKeys) {
        if (targetCategory[key]) {
          foundInfo = targetCategory[key]
          break
        }
      }

      if (!foundInfo) {
        for (const [rawKey, info] of Object.entries(targetCategory)) {
          const probes = buildLookupCandidates(rawKey)
          if (info?.name) probes.push(...buildLookupCandidates(info.name))
          if (info?.fullName) probes.push(...buildLookupCandidates(info.fullName))
          const probeSet = new Set(probes)
          const matched = candidateKeys.some(key => probeSet.has(key))
          if (matched) {
            foundInfo = info
            break
          }
        }
      }
    }

    if (foundInfo) {
      return foundInfo;
    }

    // 如果找不到，僅在分類只有一筆資料時使用預設，避免誤配到「總覽」
    if (targetCategory && Object.keys(targetCategory).length === 1) {
      const firstKey = Object.keys(targetCategory)[0];
      console.warn(`[RegionMap] Using only available entry for: "${aoc}", searched for:`, candidateKeys);
      return targetCategory[firstKey];
    }

    console.error(`[RegionMap] No info found for: "${aoc}", searched for:`, candidateKeys, 'in category:', targetCategory ? Object.keys(targetCategory) : 'undefined');
    return null;
  }

  // 其他格式: 直接使用整個物件 {name, description, ...}
  return aocData;
}

// 跨村莊 AOC：載入所有成員村莊的資料，整合成單一資訊物件
const loadMultiCommuneInfo = async (group, aoc) => {
  const baseKey = parseMultiCommuneSelector(aoc);

  try {
    const indexJson = await fetchJsonCached(indexPath.value);
    if (!indexJson) {
      regionInfo.value = null;
      return;
    }

    const groups = buildMultiCommuneGroups(indexJson);
    const groupInfo = groups.find(g => g.baseKey === baseKey);
    if (!groupInfo) {
      console.error('[RegionMap] 找不到跨村莊 AOC 群組:', baseKey);
      regionInfo.value = null;
      return;
    }

    const subregions = {};
    const grapeSet = new Set();
    const wineries = [];
    const communeEntries = [];

    for (const member of groupInfo.members) {
      const dataPath = buildDataPath(member.groupPath);
      const aocData = await fetchJsonCached(dataPath);
      const info = resolveAOCEntry(aocData, member.file);
      if (!info) continue;

      communeEntries.push({ commune: member.communeLabel, info });
      const summary = [info.wineStyle, info.tastingNotes].filter(Boolean).join('｜') || info.description || '';
      subregions[member.communeLabel] = summary;
      (info.grapeVarieties || []).forEach(v => grapeSet.add(v));
      (info.famousWineries || []).forEach(w => { if (!wineries.includes(w)) wineries.push(w) });
    }

    if (!communeEntries.length) {
      regionInfo.value = null;
      return;
    }

    const first = communeEntries[0].info;
    regionInfo.value = {
      name: groupInfo.baseLabel,
      fullName: `AOC ${groupInfo.baseLabel}（涵蓋 ${groupInfo.members.length} 個村莊）`,
      classification: first.classification || '',
      description: `此 AOC 涵蓋 ${groupInfo.members.length} 個村莊：${groupInfo.members.map(m => m.communeLabel).join('、')}。`,
      grapeVarieties: [...grapeSet],
      famousWineries: wineries,
      subregions,
      color: first.color
    };
  } catch (error) {
    console.error('[RegionMap] 載入跨村莊 AOC 資訊失敗:', error);
    regionInfo.value = null;
  }
}

const showAOCGeojson = async (group, aoc) => {
  activeAOC.value = { group, aoc };

  // 選擇後隱藏手機版的產區列表
  if (isMobileView.value) {
    showMobileAOCList.value = false;
  }

  if (isMultiCommuneSelector(aoc)) {
    await loadMultiCommuneInfo(group, aoc);
    return;
  }

  const dataPath = buildDataPath(group);
  console.log('[RegionMap] Loading data:', { group, aoc, dataPath });

  try {
    const aocData = await fetchJsonCached(dataPath);
    regionInfo.value = resolveAOCEntry(aocData, aoc);
  } catch (error) {
    console.error("[RegionMap] Error loading region info:", error);
    console.error("[RegionMap] Failed for:", { group, aoc, dataPath });
    regionInfo.value = null;
  }
};

const reselectAOC = (aoc) => {
  showAOCGeojson(aoc.group, aoc.aoc);
}

const resetMap = () => {
  activeAOC.value = { group: '', aoc: '' }
  regionInfo.value = null;
}

const setMobileAOCList = (visible) => {
  // Default to open if event payload is missing.
  showMobileAOCList.value = typeof visible === 'boolean' ? visible : true
}

const clearRegionInfo = () => {
  regionInfo.value = null;
}

// 當區域切換時，重置狀態
watch(() => props.regionConfig?.id, () => {
  resetMap()
  dataCache.clear()
})
</script>

<template>
  <div class="main-layout">
    <AOCList
      v-show="!isMobileView || showMobileAOCList"
      v-model:search="search"
      :activeAOC="activeAOC"
      :aocColor="(group) => '#800020'"
      :indexPath="indexPath"
      :regionName="regionConfig?.name || 'Chablis'"
      @selectAOC="showAOCGeojson"
      :class="{ 'mobile-overlay': isMobileView && showMobileAOCList }"
    />
    
    <MapSection
      :activeAOC="activeAOC"
      :regionInfo="regionInfo"
      :regionConfig="regionConfig"
      :styleColors="styleColors"
      :mobileAOCListOpen="showMobileAOCList"
      @resetMap="resetMap"
      @clear-region-info="clearRegionInfo"
      @reselect-aoc="reselectAOC"
      @request-aoc-list="setMobileAOCList"
      @request-learning-mode="emit('request-learning-mode')"
    />
  </div>
</template>

<style scoped>
.main-layout {
  --rmap-toolbar-width: min(560px, calc(100vw - 24px));
  display: flex;
  width: 100%;
  height: 100dvh; /* dynamic viewport height */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

@media (max-width: 4096px) {
  .main-layout {
    flex-direction: column;
    height: 100dvh;
    width: 100%;
    position: fixed; /* Ensures map always fills screen */
  }
  
  :deep(.aoc-list.mobile-overlay) {
    position: fixed;
    top: 12px;
    left: 50%;
    right: auto;
    bottom: 96px;
    height: auto;
    width: min(100%, var(--rmap-toolbar-width));
    max-width: var(--rmap-toolbar-width);
    transform: translateX(-50%);
    z-index: 1000;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    overflow-y: auto;
  }
}

@media (min-width: 1024px) {
  :deep(.aoc-list.mobile-overlay) {
    width: var(--rmap-toolbar-width);
    max-width: var(--rmap-toolbar-width);
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
}
</style>
