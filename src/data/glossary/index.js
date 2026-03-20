import { baseGlossary } from './base.js'
import { l1Glossary } from './chapters/l1.js'
import { l2Glossary } from './chapters/l2.js'
import { l3Glossary } from './chapters/l3.js'
import { l4Glossary } from './chapters/l4.js'
import { lessonGlossaries } from './lessons.js'

const chapterGlossaries = {
  l1: l1Glossary,
  l2: l2Glossary,
  l3: l3Glossary,
  l4: l4Glossary,
}

function lessonIdToChapter(lessonId) {
  if (typeof lessonId !== 'string') return null
  const match = lessonId.match(/^(l\d+)-/)
  return match ? match[1] : null
}

export function getCombinedGlossary(lessonId) {
  const chapterKey = lessonIdToChapter(lessonId)
  const chapterList = (chapterKey && chapterGlossaries[chapterKey]) ? chapterGlossaries[chapterKey] : []
  const lessonList = (lessonId && lessonGlossaries[lessonId]) ? lessonGlossaries[lessonId] : []

  const merged = [...baseGlossary, ...chapterList, ...lessonList]
  const unique = new Map()
  for (const item of merged) {
    if (!unique.has(item.term)) unique.set(item.term, item)
  }
  return Array.from(unique.values())
}

export { baseGlossary, lessonGlossaries }
