const fs = require('fs');
let content = fs.readFileSync('src/components/LearningSystem.vue', 'utf8');

const replacements = [
  [
    /\.learning-system \{[\s\S]*?z-index: 100;\r?\n\}/,
    '.learning-system {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: var(--bg-fallback, linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%));\n  color: #e2e8f0;\n  display: flex;\n  overflow: hidden;\n  z-index: 100;\n  min-height: 100vh;\n}\n.learning-system::before {\n  content: "";\n  position: absolute;\n  top: -50%; left: -50%; width: 200%; height: 200%;\n  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 50%);\n  animation: rotate 30s linear infinite;\n  z-index: -1;\n}'
  ],
  [
    /\.learning-sidebar \{[\s\S]*?overflow: hidden;[ \t]*\/\*.*?\*\/\r?\n\}/,
    '.learning-sidebar {\n  width: 320px;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 4px 0 24px rgba(0,0,0,0.2);\n  height: 100%;\n  overflow: hidden;\n}'
  ],
  [
    /\.sidebar-header \{[\s\S]*?flex-shrink: 0;[ \t]*\/\*.*?\*\/\r?\n\}/,
    '.sidebar-header {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid rgba(255,255,255,0.08);\n  background: rgba(255,255,255,0.02);\n  flex-shrink: 0;\n}'
  ],
  [
    /\.current-level-title \{[\s\S]*?color: #2c3e50;\r?\n\}/,
    '.current-level-title { margin: 0; font-size: 1.1rem; font-weight: 600; color: #f8fafc; letter-spacing: 0.5px; }'
  ],
  [
    /\.level-progress-text \{[\s\S]*?font-weight: 500;\r?\n\}/,
    '.level-progress-text { font-size: 0.85rem; color: #94a3b8; font-weight: 500; }'
  ],
  [
    /\.lesson-item \{[\s\S]*?border: 2px solid transparent;\r?\n\}/,
    '.lesson-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); margin-bottom: 0.5rem; }'
  ],
  [
    /\.lesson-item:hover:not\(\.locked\) \{[\s\S]*?border-color: #4CAF50;\r?\n\}/,
    '.lesson-item:hover:not(.locked) { background: rgba(255,255,255,0.08); transform: translateX(4px); border-color: rgba(139,92,246,0.3); }'
  ],
  [
    /\.lesson-item\.active \{[\s\S]*?border-color: #4CAF50;\r?\n\}/,
    '.lesson-item.active { background: linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.15) 100%); border-color: rgba(139,92,246,0.5); box-shadow: inset 0 0 20px rgba(139,92,246,0.05); }'
  ],
  [
    /\.lesson-item\.completed \{[\s\S]*?background: #f1f8f4;\r?\n\}/,
    '.lesson-item.completed { background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.2); }'
  ],
  [
    /\.lesson-number \{[\s\S]*?flex-shrink: 0;\r?\n\}/,
    '.lesson-number { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.1); color: #e2e8f0; font-weight: 600; font-size: 0.9rem; flex-shrink: 0; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.1); }'
  ],
  [
    /\.lesson-item\.completed \.lesson-number \{[\s\S]*?color: white;\r?\n\}/,
    '.lesson-item.completed .lesson-number { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; box-shadow: 0 0 10px rgba(16,185,129,0.3); }'
  ],
  [
    /\.lesson-item\.locked \.lesson-number \{[\s\S]*?color: #999;\r?\n\}/,
    '.lesson-item.locked .lesson-number { background: rgba(0,0,0,0.2); color: #64748b; border-color: rgba(255,255,255,0.05); }'
  ],
  [
    /\.lesson-title \{[\s\S]*?white-space: nowrap;\r?\n\}/,
    '.lesson-title { margin: 0 0 0.35rem 0; font-size: 0.95rem; font-weight: 600; color: #f8fafc; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }'
  ],
  [
    /\.lesson-duration \{[\s\S]*?color: #888;\r?\n\}/,
    '.lesson-duration { font-size: 0.8rem; color: #94a3b8; }'
  ],
  [
    /\.learning-content \{[\s\S]*?padding: 1\.5rem;\r?\n\}/,
    '.learning-content { flex: 1; width: 100%; background: transparent; padding: 2rem; overflow-y: auto; position: relative; }'
  ],
  [
    /\/\* 歡迎畫面 \*\/[\s\S]*?\.welcome-content \{/,
    '/* 歡迎畫面 (主視覺) */\n.welcome-screen {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 4rem);\n  padding: 2rem;\n  width: 100%;\n}\n.welcome-content {'
  ],
  [
    /\.welcome-content h2 \{[\s\S]*?margin-bottom: 1rem;\r?\n\}/,
    '.welcome-content h2 { font-size: 2.5rem; color: #f8fafc; margin-bottom: 1rem; text-shadow: 0 2px 10px rgba(0,0,0,0.3); font-weight: 700; letter-spacing: 1px; }'
  ],
  [
    /\.level-description \{[\s\S]*?margin-bottom: 2rem;\r?\n\}/,
    '.level-description { font-size: 1.15rem; color: #cbd5e1; line-height: 1.7; margin-bottom: 2.5rem; max-width: 800px; margin-left: auto; margin-right: auto; }'
  ],
  [
    /\.start-btn \{[\s\S]*?transition: all 0\.3s;\r?\n\}/,
    '.start-btn { padding: 1rem 3rem; font-size: 1.2rem; background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%); color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 50px; cursor: pointer; font-weight: 600; box-shadow: 0 8px 25px rgba(139,92,246,0.4); transition: all 0.3s ease; letter-spacing: 1px; }'
  ],
  [
    /\.start-btn:hover \{[\s\S]*?box-shadow: 0 6px 20px rgba\(102, 126, 234, 0\.4\);\r?\n\}/,
    '.start-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 12px 30px rgba(139,92,246,0.6); background: linear-gradient(135deg, #9333ea 0%, #4f46e5 100%); }'
  ],
  [
    /\.progress-hint \{[\s\S]*?color: #888;\r?\n\}/,
    '.progress-hint { margin-top: 1.25rem; font-size: 0.95rem; color: #94a3b8; font-weight: 500; letter-spacing: 0.5px; }'
  ],
  [
    /\.lessons-list-title \{[\s\S]*?font-weight: 600;\r?\n\}/,
    '.lessons-list-title { font-size: 1.8rem; color: #f8fafc; margin-bottom: 2rem; text-align: center; font-weight: 700; position: relative; display: inline-block; }\n.lessons-list-title::after { content: ""; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 60px; height: 4px; border-radius: 2px; background: linear-gradient(90deg, #8b5cf6, #6366f1); }'
  ],
  [
    /\.intro-lessons-grid \{[\s\S]*?text-align: left;\r?\n\}/,
    '.intro-lessons-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; text-align: left; margin-top: 1rem; }'
  ],
  [
    /\.intro-lesson-card \{[\s\S]*?gap: 1rem;\r?\n\}/,
    '.intro-lesson-card { background: rgba(30,41,59,0.5); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.5rem; cursor: pointer; transition: all 0.4s ease; display: flex; align-items: center; gap: 1.25rem; position: relative; overflow: hidden; }\n.intro-lesson-card::before { content: ""; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: transparent; transition: all 0.3s; }'
  ],
  [
    /\.intro-lesson-card:hover:not\(\.locked\) \{[\s\S]*?transform: translateY\(-2px\);\r?\n\}/,
    '.intro-lesson-card:hover:not(.locked) { border-color: rgba(139,92,246,0.5); box-shadow: 0 10px 30px rgba(0,0,0,0.3); transform: translateY(-4px); background: rgba(30,41,59,0.8); }\n.intro-lesson-card:hover:not(.locked)::before { background: #8b5cf6; }'
  ],
  [
    /\.intro-lesson-card\.completed \{[\s\S]*?border-color: #4ade80;\r?\n\}/,
    '.intro-lesson-card.completed { background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.3); }\n.intro-lesson-card.completed::before { background: #10b981; }'
  ],
  [
    /\.intro-lesson-number \{[\s\S]*?flex-shrink: 0;\r?\n\}/,
    '.intro-lesson-number { width: 48px; height: 48px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #f8fafc; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; flex-shrink: 0; box-shadow: inset 0 2px 4px rgba(255,255,255,0.05); }'
  ],
  [
    /\.intro-lesson-card\.completed \.intro-lesson-number \{[\s\S]*?100%\);\r?\n\}/,
    '.intro-lesson-card.completed .intro-lesson-number { background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; box-shadow: 0 4px 15px rgba(16,185,129,0.3); color: white; }'
  ],
  [
    /\.intro-lesson-card\.locked \.intro-lesson-number \{[\s\S]*?background: #cbd5e1;\r?\n\}/,
    '.intro-lesson-card.locked .intro-lesson-number { background: rgba(0,0,0,0.3); color: #64748b; border-color: rgba(255,255,255,0.05); }'
  ],
  [
    /\.intro-lesson-info \{[\s\S]*?flex: 1;\r?\n\}/,
    '.intro-lesson-info { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }'
  ],
  [
    /\.intro-lesson-title \{[\s\S]*?font-weight: 600;\r?\n\}/,
    '.intro-lesson-title { margin: 0; font-size: 1.15rem; color: #f8fafc; font-weight: 700; letter-spacing: 0.5px; }'
  ],
  [
    /\.intro-lesson-duration \{[\s\S]*?color: #666;\r?\n\}/,
    '.intro-lesson-duration { font-size: 0.9rem; color: #94a3b8; display: flex; align-items: center; gap: 0.5rem; }\n.intro-lesson-duration::before { content: "⏱"; font-size: 0.8rem; opacity: 0.8; }'
  ]
];

replacements.forEach(([regex, repl], i) => {
  let matched = content.match(regex);
  if (matched) {
    content = content.replace(regex, repl);
    console.log('Replaced:', i);
  } else {
    console.log('Missed:', i);
  }
});

if(!content.includes('@keyframes rotate')) {
  content = content + '\n@keyframes rotate {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n';
}

fs.writeFileSync('src/components/LearningSystem.vue', content);
console.log('Update Complete.');
