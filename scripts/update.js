const fs = require('fs');
let content = fs.readFileSync('src/components/LearningSystem.vue', 'utf8');

const rSystem = /\.learning-system\s*\{[\s\S]*?z-index:\s*100;\r?\n\}/g;
const rSystemNew = \.learning-system {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--bg-fallback, linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%));
  color: #e2e8f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 100;
}
.learning-system::before {
  content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at center, rgba(139,92,246,0.05) 0%, transparent 50%);
  animation: rotateSys 30s linear infinite; z-index: -1;
}\;

const rContentWrapper = /\.content-wrapper\s*\{[\s\S]*?flex:\s*1;\r?\n\s*display:\s*flex;\r?\n\s*overflow:\s*hidden;\r?\n\}/g;
const rContentWrapperNew = \.content-wrapper { flex: 1; display: flex; overflow: hidden; background: transparent; }\;

const rSidebar = /\.learning-sidebar\s*\{[\s\S]*?overflow:\s*hidden;[\s\S]*?\r?\n\}/g;
const rSidebarNew = \.learning-sidebar {
  width: 320px;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex; flex-direction: column;
  box-shadow: 4px 0 24px rgba(0,0,0,0.2);
  height: 100%; overflow: hidden;
}\;

const rSidebarHeader = /\.sidebar-header\s*\{[\s\S]*?flex-shrink:\s*0;[\s\S]*?\r?\n\}/g;
const rSidebarHeaderNew = \.sidebar-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
  flex-shrink: 0;
}\;

const rTitle = /\.current-level-title\s*\{[\s\S]*?color:\s*#2c3e50;\r?\n\}/g;
const rTitleNew = \.current-level-title { margin: 0; font-size: 1.1rem; font-weight: 600; color: #f8fafc; letter-spacing: 0.5px; }\;

const rProgress = /\.level-progress-text\s*\{[\s\S]*?font-weight:\s*500;\r?\n\}/g;
const rProgressNew = \.level-progress-text { font-size: 0.85rem; color: #94a3b8; font-weight: 500; }\;

const rLessonItem = /\.lesson-item\s*\{[\s\S]*?border:\s*2px\s*solid\s*transparent;\r?\n\}/g;
const rLessonItemNew = \.lesson-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); margin-bottom: 0.5rem; }\;

const rLessonItemHover = /\.lesson-item:hover:not\(\.locked\)\s*\{[\s\S]*?border-color:\s*#4CAF50;\r?\n\}/g;
const rLessonItemHoverNew = \.lesson-item:hover:not(.locked) { background: rgba(255,255,255,0.08); transform: translateX(4px); border-color: rgba(139,92,246,0.3); }\;

const rLessonItemActive = /\.lesson-item\.active\s*\{[\s\S]*?border-color:\s*#4CAF50;\r?\n\}/g;
const rLessonItemActiveNew = \.lesson-item.active { background: linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.15) 100%); border-color: rgba(139,92,246,0.5); box-shadow: inset 0 0 20px rgba(139,92,246,0.05); }\;

const rLessonItemCompleted = /\.lesson-item\.completed\s*\{[\s\S]*?background:\s*#f1f8f4;\r?\n\}/g;
const rLessonItemCompletedNew = \.lesson-item.completed { background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.2); }\;

const rLessonNumber = /\.lesson-number\s*\{[\s\S]*?flex-shrink:\s*0;\r?\n\}/g;
const rLessonNumberNew = \.lesson-number { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.1); color: #f8fafc; font-weight: 600; font-size: 0.9rem; flex-shrink: 0; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.1); }\;

const rLessonNumberCompleted = /\.lesson-item\.completed\s*\.lesson-number\s*\{[\s\S]*?color:\s*white;\r?\n\}/g;
const rLessonNumberCompletedNew = \.lesson-item.completed .lesson-number { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; box-shadow: 0 0 10px rgba(16,185,129,0.3); }\;

const rLearningContent = /\.learning-content\s*\{[\s\S]*?padding:\s*1\.5rem;\r?\n\}/g;
const rLearningContentNew = \.learning-content { flex: 1; width: 100%; background: transparent; padding: 2rem; overflow-y: auto; position: relative; }\;

const rWelcomeContent = /\/\*\s*歡迎畫面\s*\*\/[\s\S]*?\.welcome-content\s*\{/g;
const rWelcomeContentNew = \/* 歡迎畫面 (主視覺) */
.welcome-screen { display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 4rem); padding: 2rem; width: 100%; }
.welcome-content {\;

const rWelcomeH2 = /\.welcome-content\s*h2\s*\{[\s\S]*?margin-bottom:\s*1rem;\r?\n\}/g;
const rWelcomeH2New = \.welcome-content h2 { font-size: 2.5rem; color: #f8fafc; margin-bottom: 1rem; text-shadow: 0 2px 10px rgba(0,0,0,0.3); font-weight: 700; letter-spacing: 1px; }\;

const rLevelDesc = /\.level-description\s*\{[\s\S]*?margin-bottom:\s*2rem;\r?\n\}/g;
const rLevelDescNew = \.level-description { font-size: 1.15rem; color: #cbd5e1; line-height: 1.7; margin-bottom: 2.5rem; max-width: 800px; margin-left: auto; margin-right: auto; }\;

const rStartBtn = /\.start-btn\s*\{[\s\S]*?transition:\s*all\s*0\.3s;\r?\n\}/g;
const rStartBtnNew = \.start-btn { padding: 1rem 3rem; font-size: 1.2rem; background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%); color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 50px; cursor: pointer; font-weight: 600; box-shadow: 0 8px 25px rgba(139,92,246,0.4); transition: all 0.3s ease; letter-spacing: 1px; }\;

const rStartBtnHover = /\.start-btn:hover\s*\{[\s\S]*?rgba\(102,\s*126,\s*234,\s*0\.4\);\r?\n\}/g;
const rStartBtnHoverNew = \.start-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 12px 30px rgba(139,92,246,0.6); background: linear-gradient(135deg, #9333ea 0%, #4f46e5 100%); }\;

const rProgressHint = /\.progress-hint\s*\{[\s\S]*?color:\s*#888;\r?\n\}/g;
const rProgressHintNew = \.progress-hint { margin-top: 1.25rem; font-size: 0.95rem; color: #94a3b8; font-weight: 500; letter-spacing: 0.5px; }\;

const rIntroListTitle = /\.lessons-list-title\s*\{[\s\S]*?font-weight:\s*600;\r?\n\}/g;
const rIntroListTitleNew = \.lessons-list-title { font-size: 1.8rem; color: #f8fafc; margin-bottom: 2rem; text-align: center; font-weight: 700; position: relative; display: inline-block; }
.lessons-list-title::after { content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 60px; height: 4px; border-radius: 2px; background: linear-gradient(90deg, #8b5cf6, #6366f1); }\;

const rIntroGrid = /\.intro-lessons-grid\s*\{[\s\S]*?text-align:\s*left;\r?\n\}/g;
const rIntroGridNew = \.intro-lessons-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; text-align: left; margin-top: 1rem; }\;

const rIntroCard = /\.intro-lesson-card\s*\{[\s\S]*?gap:\s*1rem;\r?\n\}/g;
const rIntroCardNew = \.intro-lesson-card { background: rgba(30,41,59,0.5); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.5rem; cursor: pointer; transition: all 0.4s cubic-bezier(0.4,0,0.2,1); display: flex; align-items: center; gap: 1.25rem; position: relative; overflow: hidden; }
.intro-lesson-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: transparent; transition: all 0.3s; }\;

const rIntroCardHover = /\.intro-lesson-card:hover:not\(\.locked\)\s*\{[\s\S]*?transform:\s*translateY\(-2px\);\r?\n\}/g;
const rIntroCardHoverNew = \.intro-lesson-card:hover:not(.locked) { border-color: rgba(139,92,246,0.5); box-shadow: 0 10px 30px rgba(0,0,0,0.3); transform: translateY(-4px); background: rgba(30,41,59,0.8); }
.intro-lesson-card:hover:not(.locked)::before { background: #8b5cf6; }\;

const rIntroCardCompleted = /\.intro-lesson-card\.completed\s*\{[\s\S]*?border-color:\s*#4ade80;\r?\n\}/g;
const rIntroCardCompletedNew = \.intro-lesson-card.completed { background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.3); }
.intro-lesson-card.completed::before { background: #10b981; }\;

const rIntroNumber = /\.intro-lesson-number\s*\{[\s\S]*?flex-shrink:\s*0;\r?\n\}/g;
const rIntroNumberNew = \.intro-lesson-number { width: 48px; height: 48px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #f8fafc; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; flex-shrink: 0; box-shadow: inset 0 2px 4px rgba(255,255,255,0.05); }\;

const rIntroNumberCompleted = /\.intro-lesson-card\.completed\s*\.intro-lesson-number\s*\{[\s\S]*?100%\);\r?\n\}/g;
const rIntroNumberCompletedNew = \.intro-lesson-card.completed .intro-lesson-number { background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; box-shadow: 0 4px 15px rgba(16,185,129,0.3); color: white; }\;

const rIntroTitle = /\.intro-lesson-title\s*\{[\s\S]*?font-weight:\s*600;\r?\n\}/g;
const rIntroTitleNew = \.intro-lesson-title { margin: 0 0 0.35rem 0; font-size: 1.15rem; color: #f8fafc; font-weight: 700; letter-spacing: 0.5px; }\;

const rIntroDuration = /\.intro-lesson-duration\s*\{[\s\S]*?color:\s*#666;\r?\n\}/g;
const rIntroDurationNew = \.intro-lesson-duration { font-size: 0.9rem; color: #94a3b8; display: flex; align-items: center; gap: 0.5rem; }
.intro-lesson-duration::before { content: '⏱'; font-size: 0.8rem; opacity: 0.8; }\;


// Let's replace each exactly:
const rep = (reg, val) => {
    let replaced = false;
    content = content.replace(reg, () => { replaced = true; return val; });
    if (!replaced) console.log("Missed:", reg);
};

rep(rSystem, rSystemNew);
rep(rContentWrapper, rContentWrapperNew);
rep(rSidebar, rSidebarNew);
rep(rSidebarHeader, rSidebarHeaderNew);
rep(rTitle, rTitleNew);
rep(rProgress, rProgressNew);
rep(rLessonItem, rLessonItemNew);
rep(rLessonItemHover, rLessonItemHoverNew);
rep(rLessonItemActive, rLessonItemActiveNew);
rep(rLessonItemCompleted, rLessonItemCompletedNew);
rep(rLessonNumber, rLessonNumberNew);
rep(rLessonNumberCompleted, rLessonNumberCompletedNew);
rep(rLearningContent, rLearningContentNew);
rep(rWelcomeContent, rWelcomeContentNew);
rep(rWelcomeH2, rWelcomeH2New);
rep(rLevelDesc, rLevelDescNew);
rep(rStartBtn, rStartBtnNew);
rep(rStartBtnHover, rStartBtnHoverNew);
rep(rProgressHint, rProgressHintNew);
rep(rIntroListTitle, rIntroListTitleNew);
rep(rIntroGrid, rIntroGridNew);
rep(rIntroCard, rIntroCardNew);
rep(rIntroCardHover, rIntroCardHoverNew);
rep(rIntroCardCompleted, rIntroCardCompletedNew);
rep(rIntroNumber, rIntroNumberNew);
rep(rIntroNumberCompleted, rIntroNumberCompletedNew);
rep(rIntroTitle, rIntroTitleNew);
rep(rIntroDuration, rIntroDurationNew);

if (!content.includes('@keyframes rotateSys')) {
    content += '\n@keyframes rotateSys { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n';
}

fs.writeFileSync('src/components/LearningSystem.vue', content);
console.log('Update Complete!');
