// Centralized glossary data for lessons
// Exports:
// - baseGlossary: common terms
// - lessonGlossaries: per-lesson extra terms
// - getCombinedGlossary(lessonId): merged + de-duplicated list

// Deprecated direct file. Re-export from modular glossary structure for backward compatibility.
export { baseGlossary } from './glossary/base.js'
export { lessonGlossaries } from './glossary/lessons.js'
export { getCombinedGlossary } from './glossary/index.js'
