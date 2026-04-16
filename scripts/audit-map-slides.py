"""列出 lessonSlides.js 中所有 map slide 的 title + mapRegion + geojsonUrl"""
import re

with open('src/components/spain/data/lessonSlides.js', encoding='utf-8') as f:
    content = f.read()

# 找出每個 { type: 'map', ... } block
# 用行號配合 grep 結果
lines = content.split('\n')

results = []
i = 0
while i < len(lines):
    if "type: 'map'" in lines[i]:
        block_lines = []
        # 往後收集最多 10 行
        for j in range(i, min(i+10, len(lines))):
            block_lines.append(lines[j])
            if j > i and '},' in lines[j]:
                break
        block = '\n'.join(block_lines)
        title    = re.search(r"title:\s*'([^']*)'", block)
        region   = re.search(r"mapRegion:\s*'([^']*)'", block)
        geojson  = re.search(r"geojsonUrl:\s*'([^']*)'", block)
        results.append({
            'line': i+1,
            'title': title.group(1) if title else '(none)',
            'mapRegion': region.group(1) if region else '(none)',
            'geojsonUrl': geojson.group(1) if geojson else '(none)',
        })
    i += 1

print(f"{'Line':>5}  {'mapRegion':<20}  {'geojsonUrl':<45}  title")
print('-'*130)
for r in results:
    print(f"{r['line']:>5}  {r['mapRegion']:<20}  {r['geojsonUrl']:<45}  {r['title']}")
