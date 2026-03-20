// 共享工具：建立 L4 課程的標準骨架
export function makeL4Lesson({ cover, intro, objectives = [], chapters = [], summary, quiz }) {
  const slides = []
  // Cover
  /*
  slides.push({
    type: 'cover',
    title: cover?.title || 'Level 4 課程',
    subtitle: cover?.subtitle || '',
    background: cover?.background || 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    icon: cover?.icon || '🎓'
  })
  */
  // Intro + Objectives (合併為一張投影片)
  if (objectives && objectives.length > 0) {
    slides.push({
      type: 'objectives',
      title: '學習目標',
      duration: intro?.duration || '60分鐘',
      level: '專家級',
      courseIntro: intro?.content || '',
      objectives: objectives
    })
  } else {
    slides.push({
      type: 'intro',
      title: '課程導讀',
      content: intro?.content || '',
      duration: intro?.duration || '60分鐘',
      level: '專家級'
    })
  }
  // Chapters
  chapters.forEach((ch, idx) => {
    slides.push({ type: 'chapter-divider', title: `第${idx + 1}章`, subtitle: ch.nav || ch.title, icon: ch.icon || '📘', navLabel: ch.nav || ch.title })
    slides.push({
      type: 'chapter',
      title: `${ch.title}`,
      subtitle: ch.subtitle || '',
      content: ch.html || '',
      highlights: ch.highlights || undefined,
      highlightDelayStep: ch.highlightDelayStep || undefined
    })
  })
  // Summary
  if (summary) slides.push({ type: 'summary', title: summary.title || '課程總結', content: summary.html || '' })
  // Quiz
  if (quiz) slides.push({ type: 'quiz', title: quiz.title || '綜合測驗', questions: quiz.questions || [], passingScore: quiz.passingScore || 60, timeLimit: quiz.timeLimit || 180 })
  return slides
}
