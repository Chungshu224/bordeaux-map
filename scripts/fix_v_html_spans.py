#!/usr/bin/env python3
"""Fix all v-html spans missing closing </span> in PlatformHome.vue."""
import re

FILE = 'src/components/PlatformHome.vue'
with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace: <span class="cp-label" v-html="..."> (not immediately followed by </span>)
# pattern: the span opened but ends with > then newline (no </span>)
before = len(content)

# Fix: spans that end with v-html="..."> followed immediately by newline (missing </span>)
content = re.sub(
    r'(<span class="cp-label" v-html="[^"]+">)(\s*\n)',
    r'\1</span>\2',
    content
)

after = len(content)
print(f'Characters changed: {after - before}')

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done.')
