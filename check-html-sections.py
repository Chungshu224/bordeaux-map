import re

with open('src/data/lessons/l2-1.js', 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.split('\n')

# Find all sections
sections = [(m.group(1), m.start(), lines[:m.start()].count('\n')+1) 
            for m in re.finditer(r'// ========== (\d+)\. (.+?) =========', content)]

print(f"Found {len(sections)} sections\n")
print("Sections with HTML content:")
print("-" * 60)

for i, (sec_num, pos, line_num) in enumerate(sections):
    next_pos = sections[i+1][1] if i+1 < len(sections) else len(content)
    sec_content = content[pos:next_pos]
    
    if '<div' in sec_content or '<p>' in sec_content or '<li>' in sec_content:
        html_count = sec_content.count('<')
        print(f"Section {sec_num} (line {line_num}): {html_count} HTML tags")
