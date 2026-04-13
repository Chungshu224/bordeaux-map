import fs from 'fs'

const file = 'scripts/inject-bourgogne-l4-quiz-m5b-m6.mjs'
let s = fs.readFileSync(file, 'utf8')

// Fix: 'B. '理想... → 'B. \'理想...
// The ' before Chinese text is a premature string terminator in single-quoted JS strings
const fixes = [
  ["'B. '\u7406\u60f3", "'B. \\'\u7406\u60f3"],       // 理想全程溫控
  ["'B. '3PL", "'B. \\'3PL"],                            // 3PL
  ["'B. '\u300c\u96d9\u5cf0\u6a21\u5f0f", "'B. \\'\u300c\u96d9\u5cf0\u6a21\u5f0f"],  // 「雙峰
  ["'B. '\u300c\u8cc7\u8a0a\u4e2d\u9593\u5546", "'B. \\'\u300c\u8cc7\u8a0a\u4e2d\u9593\u5546"]   // 「資訊
]

for (const [from, to] of fixes) {
  if (s.includes(from)) {
    s = s.replace(from, to)
    console.log(`Fixed: ${from.substring(0, 20)}`)
  } else {
    console.log(`NOT FOUND: ${from.substring(0, 20)}`)
  }
}

fs.writeFileSync(file, s, 'utf8')
console.log('Done')
