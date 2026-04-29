
f=open('src/components/bourgogne/BourgogneMapSection.vue', encoding='utf-8'); c=f.read(); f.close()
lines = c.split('\n')

# 1. Remove .geology-panel block: lines 1948-2055 (1-based)
# 0-based: 1947-2054
start1 = 1947
end1 = 2054
lines = lines[:start1] + lines[end1+1:]
offset1 = end1 - start1 + 1
print(f'Removed geology CSS ({offset1} lines)')

# Recalculate: everything after end1 shifts by -offset1

# 2. In the @media section, remove .soil-float-panel with comment (lines 2614-2628 original)
# After removing offset1 lines: new positions
# orig line 2614 (1-based) = 0-based 2613, shifted: 2613 - offset1
start2 = 2613 - offset1
end2 = 2627 - offset1  # end of .soil-float-panel block (the }) and blank line after
print(f'soil-float-panel block: lines {start2+1} to {end2+1}')
print(f'  first: {lines[start2]}')
print(f'  last: {lines[end2]}')
lines = lines[:start2] + lines[end2+1:]
offset2 = end2 - start2 + 1
print(f'Removed soil-float-panel CSS ({offset2} lines)')

# 3. Remove .soil-material-toggle, .soil-dot, .soil-float-name blocks (orig 2670-2681)
# After offsets 1+2:
start3 = 2670 - 1 - offset1 - offset2
end3 = 2681 - 1 - offset1 - offset2
print(f'soil-material-toggle block: lines {start3+1} to {end3+1}')
print(f'  first: {lines[start3]}')
print(f'  last: {lines[end3]}')
lines = lines[:start3] + lines[end3+1:]
offset3 = end3 - start3 + 1
print(f'Removed soil-material-toggle CSS ({offset3} lines)')

# 4. Remove .soil-float-right (orig 2682) - NOT used by BRGM
start4 = 2682 - 1 - offset1 - offset2 - offset3
print(f'soil-float-right: line {start4+1}: {lines[start4]}')
lines = lines[:start4] + lines[start4+1:]
print(f'Removed .soil-float-right')

# 5. Find and remove .soil-float-left block from the @media section
c_temp = '\n'.join(lines)
idx = c_temp.find('.soil-float-left')
if idx >= 0:
    ln = c_temp[:idx].count('\n')
    print(f'soil-float-left at line {ln+1}: {lines[ln]}')
    # find end of block
    end_ln = ln
    while end_ln < len(lines) and not lines[end_ln].strip() == '}':
        end_ln += 1
    print(f'  end: {end_ln+1}: {lines[end_ln]}')
    lines = lines[:ln] + lines[end_ln+1:]
    print(f'Removed .soil-float-left CSS')
else:
    print('.soil-float-left: NOT FOUND')

# 6. Also remove the @media .soil-float-panel at 2712 (landscape duplicate)
c_temp = '\n'.join(lines)
idx2 = c_temp.find('/* 土壤浮動面板保持左對齊 */')
if idx2 >= 0:
    ln2 = c_temp[:idx2].count('\n')
    # find next blank line
    end_ln2 = ln2 + 3  # comment + .soil-float-panel + prop + }
    while end_ln2 < len(lines) and lines[end_ln2].strip() != '':
        end_ln2 += 1
    print(f'media soil-float-panel: lines {ln2+1} to {end_ln2+1}')
    print(f'  first: {lines[ln2]}')
    print(f'  last: {lines[end_ln2]}')
    lines = lines[:ln2] + lines[end_ln2+1:]
    print(f'Removed media .soil-float-panel')
else:
    print('media soil-float-panel comment: NOT FOUND')

# Verify
c_result = '\n'.join(lines)
remaining = [(i+1, l) for i,l in enumerate(lines) if any(t in l for t in ['soil-material-toggle','geology-panel','geology-materials','geology-material-row','geology-material-toggle','geology-visibility-btn','geology-slider-wrap','material-dot','soil-float-panel'])]
if remaining:
    print('REMAINING CSS REFS:')
    for lno, l in remaining: print(f'  {lno}: {l}')
else:
    print('No old geology CSS refs remaining!')

f2=open('src/components/bourgogne/BourgogneMapSection.vue','w',encoding='utf-8'); f2.write(c_result); f2.close()
print('Done. New length:', len(c_result))
