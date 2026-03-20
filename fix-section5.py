with open('src/data/lessons/l2-1.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open('section5-correct.txt', 'r', encoding='utf-8') as f:
    new_sec5 = f.read()

# Replace lines 332-347 (index 331-346) with new section 5
new_lines = lines[:331] + [new_sec5] + lines[347:]

with open('src/data/lessons/l2-1.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f'✅ Replaced section 5 (lines 332-347)')
print(f'📊 Old line count: {len(lines)}')
print(f'📊 New line count: {len(new_lines)}')
