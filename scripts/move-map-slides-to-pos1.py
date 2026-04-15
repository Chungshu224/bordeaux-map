"""
將 lessonSlides.js 中每個課程的 map slide 移動到第 2 頁（index 1，cover 之後）
同時確認 SpainSlideViewer 是否只渲染當前 slide
"""
import re
import sys

TARGET = 'src/components/spain/data/lessonSlides.js'

with open(TARGET, encoding='utf-8') as f:
    content = f.read()

# ── 解析每個 top-level object（處理字串中的 { } 不計入深度）────────────────
def extract_top_level_objects(text):
    """回傳 text 中所有頂層 {...} 物件的 (start, end) 位置（end exclusive）"""
    result = []
    depth = 0
    current_start = None
    in_string = False
    string_char = None
    i = 0
    while i < len(text):
        c = text[i]
        if in_string:
            if c == '\\':
                i += 2
                continue
            elif c == string_char:
                in_string = False
        else:
            if c in ('"', "'", '`'):
                in_string = True
                string_char = c
            elif c == '{':
                if depth == 0:
                    current_start = i
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0 and current_start is not None:
                    result.append((current_start, i + 1))
                    current_start = None
        i += 1
    return result


# ── 找出每個 const XXX_slides = [ ... ] 區塊 ─────────────────────────────────
LESSON_RE = re.compile(
    r'(?P<prefix>const \w+_slides\s*=\s*\[)'
    r'(?P<body>[\s\S]*?)'
    r'(?P<suffix>\n\])',
    re.MULTILINE
)

changes = 0
errors = []

def process_lesson(m):
    global changes
    prefix = m.group('prefix')
    body   = m.group('body')
    suffix = m.group('suffix')

    lesson_name = re.match(r'const (\w+_slides)', prefix).group(1)

    # 找出 body 中的所有頂層 slide 物件
    objs = extract_top_level_objects(body)
    if len(objs) < 2:
        return m.group(0)

    # 找出類型為 map 的 slide（先找含 "type: 'map'" 的那個）
    map_idx = None
    for idx, (s, e) in enumerate(objs):
        slide_text = body[s:e]
        if "type: 'map'" in slide_text or 'type: "map"' in slide_text:
            map_idx = idx
            break

    if map_idx is None:
        return m.group(0)  # 此課程沒有 map slide

    if map_idx == 1:
        return m.group(0)  # 已在 index 1，不需移動

    # ── 重建 body：移除 map slide，插入到 index 1 ────────────────────────────
    # 我們需要保留 slide 之間的空白（逗號、換行等），所以直接操作 body 字串

    # 計算各 slide 的「包含前導空白和後綴逗號換行」的完整文字段落
    # 先切出各段 (包含前置空白/逗號/換行)
    segments = []
    prev = 0
    for idx, (s, e) in enumerate(objs):
        # 前置 whitespace（從上一個 segment 結束到 { 開始）
        leading = body[prev:s]
        slide_text = body[s:e]
        # 後置：逗號 + 換行（如果有）
        after = ''
        j = e
        if j < len(body) and body[j] == ',':
            after += ','
            j += 1
        segments.append({'leading': leading, 'slide': slide_text, 'after': after, 'orig_end': j})
        prev = j

    # 尾部剩餘（最後 slide 後到 body 結尾）
    tail = body[prev:]

    # 移除 map_idx 的段落，插入到 index 1
    map_seg = segments.pop(map_idx)
    segments.insert(1, map_seg)

    # 重建 body（保留各段的 leading/slide/after）
    new_body = ''
    for seg in segments:
        new_body += seg['leading'] + seg['slide'] + seg['after']
    new_body += tail

    changes += 1
    print(f'  ✅ {lesson_name}: map slide 從 index {map_idx} → 1')
    return prefix + new_body + suffix


new_content = LESSON_RE.sub(process_lesson, content)

print(f'\n共移動 {changes} 個課程的 map slide 到 index 1')

if changes > 0:
    with open(TARGET, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'✅ 已寫入 {TARGET}')
else:
    print('— 沒有需要變更的課程')
