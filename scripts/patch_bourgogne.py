
f = open('src/components/bourgogne/BourgogneMapSection.vue', encoding='utf-8')
c = f.read()
f.close()

lines = c.split('\n')

def remove_lines(lines, start_0, end_0_inclusive):
    """Remove lines by 0-based index range."""
    return lines[:start_0] + lines[end_0_inclusive+1:]

def replace_line(lines, idx_0, new_content):
    lines[idx_0] = new_content
    return lines

# Line numbers from grep are 1-based, convert to 0-based below

# 1. Fix fill-opacity lines (735 and 877 1-based)
idx = 735 - 1
assert 'geologyVisible' in lines[idx], f'Line {idx+1}: {lines[idx]}'
lines[idx] = lines[idx].replace("geologyVisible.value ? 0 : 0.1", "0.1")
print(f'Fixed fill-opacity at line {idx+1}')

idx2 = 877 - 1
assert 'geologyVisible' in lines[idx2], f'Line {idx2+1}: {lines[idx2]}'
lines[idx2] = lines[idx2].replace("geologyVisible.value ? 0 : 0.1", "0.1")
print(f'Fixed fill-opacity at line {idx2+1}')

# 2. Remove lines 764-765 (currentGeojsonBounds/Features in loadInitialVillageGeojsons)
# Adjust after potential previous line changes (no line count change so far)
l764 = 764 - 1
l765 = 765 - 1
assert 'currentGeojsonBounds' in lines[l764], f'{l764+1}: {lines[l764]}'
assert 'currentGeojsonClipFeatures' in lines[l765], f'{l765+1}: {lines[l765]}'
lines = remove_lines(lines, l764, l765)
print('Removed lines 764-765')

# Now line numbers shift by -2 for everything after 765
def adj(n): return n - 2  # 0-based adjustments after removing 2 lines

# 3. Remove lines 891-892 (currentGeojsonBounds/Features in showAOCGeojson) now at adj(891-1), adj(892-1)
l891 = adj(891 - 1)
l892 = adj(892 - 1)
assert 'currentGeojsonBounds' in lines[l891], f'{l891+1}: {lines[l891]}'
assert 'normalizeGeojsonToFeatures' in lines[l892], f'{l892+1}: {lines[l892]}'
lines = remove_lines(lines, l891, l892)
print('Removed lines 891-892')

# Shift by another -2
def adj2(n): return n - 4

# 4. Remove line 915 (currentGeojsonBounds in resetMap)
l915 = adj2(915 - 1)
assert 'currentGeojsonBounds' in lines[l915], f'{l915+1}: {lines[l915]}'
lines = remove_lines(lines, l915, l915)
print(f'Removed line 915 -> {l915+1}')

# Shift by -1
def adj3(n): return n - 5

# 5. Remove lines 1203-1205 (if geologyVisible clearGeologyLayers in toggleClimate)
l1203 = adj3(1203 - 1)
l1204 = adj3(1204 - 1)
l1205 = adj3(1205 - 1)
assert 'geologyVisible' in lines[l1203], f'{l1203+1}: {lines[l1203]}'
assert 'clearGeologyLayers' in lines[l1205], f'{l1205+1}: {lines[l1205]}'
lines = remove_lines(lines, l1203, l1205)
print('Removed lines 1203-1205')

# Shift by -3
def adj4(n): return n - 8

# 6. Remove clearGeologyLayers function (lines 1220-1231 approx)
# Find it by searching from about line 1212
start = adj4(1220 - 1)
# Find end of function - find the closing }
# It should end before loadGeologyIndex
end = start
while end < len(lines) and 'const loadGeologyIndex' not in lines[end]:
    end += 1
end -= 1  # don't remove loadGeologyIndex line
print(f'clearGeologyLayers block: lines {start+1} to {end+1}')
print(f'  first: {lines[start]}')
print(f'  last: {lines[end]}')
lines = remove_lines(lines, start, end)
block_size = end - start + 1
print(f'Removed clearGeologyLayers ({block_size} lines)')

def adj5(n): return n - 8 - block_size

# 7. Remove loadGeologyIndex function
start2 = adj5(1233 - 1)
print(f'loadGeologyIndex start: {start2+1}: {lines[start2]}')
end2 = start2
while end2 < len(lines) and 'const toggleGeologyMaterial' not in lines[end2]:
    end2 += 1
end2 -= 1
print(f'loadGeologyIndex block: lines {start2+1} to {end2+1}')
lines = remove_lines(lines, start2, end2)
block2 = end2 - start2 + 1

def adj6(n): return n - 8 - block_size - block2

# 8. Remove toggleGeologyMaterial function (lines 1260-1269 approx)
start3 = adj6(1260 - 1)
print(f'toggleGeologyMaterial start: {start3+1}: {lines[start3]}')
end3 = start3
while end3 < len(lines) and 'const bboxIntersects' not in lines[end3]:
    end3 += 1
end3 -= 1
lines = remove_lines(lines, start3, end3)
block3 = end3 - start3 + 1

def adj7(n): return n - 8 - block_size - block2 - block3

# 9. Remove bboxIntersects (1271) through end of refreshGeologyLayers
# Find bboxIntersects and then find where refreshGeologyLayers ends
start4_orig = 1271
start4 = adj7(start4_orig - 1)
print(f'bboxIntersects start: {start4+1}: {lines[start4]}')
# Find end of refreshGeologyLayers - it ends with a blank line then the next section
end4 = start4
# Keep going until we find something after refreshGeologyLayers
# The next function after it should be initMap or something else
# Search for 'const initMap' or 'async function initMap'
while end4 < len(lines):
    if ('const initMap' in lines[end4] or 
        'async function initMap' in lines[end4] or
        '// ── 地圖初始化' in lines[end4] or
        '// initMap' in lines[end4]):
        break
    end4 += 1
end4 -= 1
# remove trailing blank lines
while end4 > start4 and lines[end4].strip() == '':
    end4 -= 1
print(f'Geology functions block: lines {start4+1} to {end4+1}')
print(f'  first: {lines[start4]}')
print(f'  last: {lines[end4]}')
lines = remove_lines(lines, start4, end4)
block4 = end4 - start4 + 1

def adj8(n): return n - 8 - block_size - block2 - block3 - block4

# 10. Remove line 1597: await loadGeologyIndex()
l1597 = adj8(1597 - 1)
# Search nearby
for delta in range(-5, 5):
    if 'loadGeologyIndex' in lines[l1597 + delta]:
        l1597 = l1597 + delta
        break
print(f'loadGeologyIndex call: {l1597+1}: {lines[l1597]}')
lines = remove_lines(lines, l1597, l1597)

def adj9(n): return n - 9 - block_size - block2 - block3 - block4

# 11. Remove line 1641: currentGeojsonBounds.value = resetBounds
l1641 = adj9(1641 - 1)
for delta in range(-5, 5):
    if 'currentGeojsonBounds' in lines[l1641 + delta]:
        l1641 = l1641 + delta
        break
print(f'currentGeojsonBounds in resetMap: {l1641+1}: {lines[l1641]}')
lines = remove_lines(lines, l1641, l1641)

def adj10(n): return n - 10 - block_size - block2 - block3 - block4

# 12. Remove 4 watch statements (lines 1647-1664 approx)
l1647 = adj10(1647 - 1)
for delta in range(-10, 10):
    if 'watch([geologyVisible' in lines[l1647 + delta] or 'watch(currentGeojsonBounds' in lines[l1647 + delta]:
        l1647 = l1647 + delta
        break
print(f'watch start: {l1647+1}: {lines[l1647]}')
# Find end of 4th watch
end_watch = l1647
watches_found = 0
while end_watch < len(lines):
    if lines[end_watch].strip().startswith('watch(') or lines[end_watch].strip().startswith('watch(['):
        watches_found += 1
    if watches_found >= 4 and lines[end_watch].strip() == '}':
        # find next closing with ')' possibly
        break
    end_watch += 1
# find end of 4th watch block
count = 0
i = l1647
while i < len(lines):
    if lines[i].strip().startswith('watch(') or lines[i].strip().startswith('watch(['):
        count += 1
        # find matching closing paren
        depth = 0
        for j in range(i, min(i+20, len(lines))):
            for ch in lines[j]:
                if ch == '(': depth += 1
                elif ch == ')': 
                    depth -= 1
                    if depth == 0:
                        break
            if depth == 0:
                if count == 4:
                    end_watch = j
                    break
        if count == 4:
            break
        i = j + 1
        continue
    i += 1

print(f'Watch block: lines {l1647+1} to {end_watch+1}')
print(f'  first: {lines[l1647]}')
print(f'  last: {lines[end_watch]}')
lines = remove_lines(lines, l1647, end_watch)
block5 = end_watch - l1647 + 1

def adj11(n): return n - 10 - block_size - block2 - block3 - block4 - block5

# 13. Remove onUnmounted clearGeologyLayers call (line 1681)
l1681 = adj11(1681 - 1)
for delta in range(-10, 10):
    if l1681 + delta < len(lines) and 'clearGeologyLayers' in lines[l1681 + delta]:
        l1681 = l1681 + delta
        break
print(f'onUnmounted clearGeologyLayers: {l1681+1}: {lines[l1681]}')
lines = remove_lines(lines, l1681, l1681)

# Write result
result = '\n'.join(lines)
# Verify no geology refs remain
import re
remaining = [(i+1, l) for i,l in enumerate(lines) if 'geologyV' in l or 'geologyI' in l or 'geologyA' in l or 'geologyM' in l or 'clearGeology' in l or 'loadGeologyIndex' in l or 'refreshGeology' in l or 'syncGeojsonFill' in l or 'bboxIntersects' in l or 'getGeojsonBbox' in l or 'currentGeojson' in l or 'normalizeGeojson' in l or 'toggleGeologyMaterial' in l]
if remaining:
    print('REMAINING GEOLOGY REFS:')
    for lno, l in remaining:
        print(f'  {lno}: {l}')
else:
    print('No geology refs remaining!')

f2 = open('src/components/bourgogne/BourgogneMapSection.vue', 'w', encoding='utf-8')
f2.write(result)
f2.close()
print('Done. New length:', len(result))
