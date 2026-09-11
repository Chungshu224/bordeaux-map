
f = open('src/components/bourgogne/BourgogneMapSection.vue', encoding='utf-8')
c = f.read()
f.close()

# Find geology variable declarations
for name in ['geologyIndex', 'geologyVisible', 'geologyActiveMaterials', 'geologyMaterialOpacity', 'currentGeojsonBounds', 'currentGeojsonClipFeatures']:
    idx = c.find('const ' + name + ' = ref')
    if idx >= 0:
        end = c.find('\n', idx) + 1
        print(idx, repr(c[idx:end]))
    else:
        print(name + ' ref: NOT FOUND')

# Find REGION_PROVINCES
idx = c.find('const REGION_PROVINCES')
print('REGION_PROVINCES at:', idx, repr(c[idx:idx+80]) if idx>=0 else '')

# Find currentGeologyProvinceCodes computed
idx = c.find('const currentGeologyProvinceCodes')
print('currentGeologyProvinceCodes at:', idx, repr(c[idx:idx+80]) if idx>=0 else '')

# Find normalizeGeojsonToFeatures
idx = c.find('function normalizeGeojsonToFeatures')
if idx < 0: idx = c.find('normalizeGeojsonToFeatures =')
print('normalizeGeojsonToFeatures at:', idx, repr(c[idx:idx+80]) if idx>=0 else '')
