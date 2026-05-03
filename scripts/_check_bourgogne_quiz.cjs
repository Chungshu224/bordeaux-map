const fs = require('fs')
const path = require('path')

const base = path.join(__dirname, '..', 'public', 'bourgogne', 'data', 'courses')
const levels = ['level1', 'level2', 'level3', 'level4']

let missing = []
let ok = []

levels.forEach(lv => {
  const dir = path.join(base, lv)
  const files = fs.readdirSync(dir).filter(f =>
    f.endsWith('.json') && !['modules.json', 'quiz-bank.json', 'levels.json'].includes(f)
  )
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8')
    const data = JSON.parse(content)
    // Count quiz slides across all lessons in this module
    let quizCount = 0
    const lessons = data.lessons || []
    lessons.forEach(lesson => {
      const slides = lesson.slides || []
      slides.forEach(slide => {
        if (slide.type === 'quiz') quizCount++
      })
    })
    const key = lv + '/' + f + ' (' + lessons.length + ' lessons)'
    if (quizCount > 0) {
      ok.push(key + ' => OK (' + quizCount + ' quiz slides)')
    } else {
      missing.push(key + ' => MISSING')
    }
  })
})

console.log('\n=== QUIZ STATUS ===')
console.log('\n✅ HAS QUIZ:')
ok.forEach(x => console.log('  ' + x))
console.log('\n❌ MISSING QUIZ:')
missing.forEach(x => console.log('  ' + x))
console.log('\nTotal: ' + ok.length + ' OK, ' + missing.length + ' missing')
