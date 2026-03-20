import re

with open('src/data/lessons/l2-1.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract section 5
sec5_match = re.search(r'// ========== 5\..+?(?=\n  // ==========)', content, re.DOTALL)
if not sec5_match:
    print("❌ Could not find section 5")
    exit(1)

sec5 = sec5_match.group()

# Validate structure
print("=" * 60)
print("Section 5 Structure Validation")
print("=" * 60)

checks = {
    "type: 'custom'": "type: 'custom'" in sec5,
    "component: 'FirstGrowthsMap'": "component: 'FirstGrowthsMap'" in sec5,
    "title property": "title: '金字塔頂端：五大一級酒莊'" in sec5,
    "highlights array": "highlights: [" in sec5,
    "quiz object": "quiz: {" in sec5 and "question:" in sec5,
    "NO HTML content": not ('<div' in sec5 or '<p>' in sec5 or '<li>' in sec5),
    "NO hasMap property": 'hasMap:' not in sec5,
    "NO slide content property": not re.search(r'^\s*content:', sec5, re.MULTILINE)
}

all_passed = True
for check, passed in checks.items():
    status = "✅" if passed else "❌"
    print(f"{status} {check}")
    if not passed:
        all_passed = False

print("=" * 60)
if all_passed:
    print("🎉 Section 5 is correctly configured!")
else:
    print("⚠️  Section 5 has issues")
