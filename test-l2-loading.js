// L2課程載入系統測試
import { loadLessonContent } from './src/data/lessonManager.js';

async function testL2LessonLoading() {
    console.log('🧪 開始測試L2課程載入系統...\n');
    
    const l2Lessons = [
        { id: 'l2-1', title: 'Médoc產區深度探索' },
        { id: 'l2-2', title: 'Margaux - 優雅的香水之鄉' },
        { id: 'l2-3', title: 'Pauillac - 王者風範的產區' },
        { id: 'l2-4', title: 'Saint-Julien - 平衡的典範' },
        { id: 'l2-5', title: 'Saint-Estèphe - 北地之珠' },
        { id: 'l2-6', title: 'Pomerol - 稀世珍寶' }
    ];
    
    const results = [];
    
    for (const lesson of l2Lessons) {
        try {
            console.log(`📚 測試載入 ${lesson.id}: ${lesson.title}`);
            
            const content = await loadLessonContent(lesson.id);
            
            if (content && Array.isArray(content) && content.length > 0) {
                const stats = {
                    totalSlides: content.length,
                    hasTitle: content.some(slide => slide.type === 'title'),
                    contentSlides: content.filter(slide => slide.title).length,
                    totalContentLength: content.reduce((total, slide) => 
                        total + (slide.content ? slide.content.length : 0), 0
                    ),
                    hasQuizzes: content.some(slide => slide.quiz),
                    hasMaps: content.some(slide => slide.hasMap)
                };
                
                results.push({
                    lesson: lesson,
                    success: true,
                    stats: stats
                });
                
                console.log(`  ✅ 成功載入 ${stats.totalSlides} 個投影片`);
                console.log(`  📊 內容統計: ${stats.contentSlides} 個內容投影片, ${Math.round(stats.totalContentLength/1024)}KB 內容`);
                console.log(`  🎯 功能: ${stats.hasTitle ? '✓' : '✗'} 標題, ${stats.hasQuizzes ? '✓' : '✗'} 測驗, ${stats.hasMaps ? '✓' : '✗'} 地圖\n`);
                
            } else {
                throw new Error('課程內容格式錯誤或為空');
            }
            
        } catch (error) {
            results.push({
                lesson: lesson,
                success: false,
                error: error.message
            });
            
            console.log(`  ❌ 載入失敗: ${error.message}\n`);
        }
    }
    
    // 生成測試報告
    console.log('\n📋 ===== L2課程載入測試報告 =====');
    
    const successCount = results.filter(r => r.success).length;
    const failCount = results.length - successCount;
    
    console.log(`\n📊 總體統計:`);
    console.log(`  ✅ 成功載入: ${successCount}/${results.length} 個課程`);
    console.log(`  ❌ 載入失敗: ${failCount}/${results.length} 個課程`);
    console.log(`  📈 成功率: ${Math.round((successCount/results.length)*100)}%`);
    
    if (successCount > 0) {
        const totalSlides = results.filter(r => r.success).reduce((total, r) => total + r.stats.totalSlides, 0);
        const totalContent = results.filter(r => r.success).reduce((total, r) => total + r.stats.totalContentLength, 0);
        
        console.log(`\n📚 內容統計:`);
        console.log(`  📄 總投影片數: ${totalSlides}`);
        console.log(`  💾 總內容大小: ${Math.round(totalContent/1024)}KB`);
        console.log(`  📊 平均每課程: ${Math.round(totalSlides/successCount)} 投影片`);
    }
    
    console.log(`\n📝 詳細結果:`);
    results.forEach(result => {
        if (result.success) {
            console.log(`  ✅ ${result.lesson.id}: ${result.lesson.title}`);
            console.log(`     📊 ${result.stats.totalSlides} 投影片, ${Math.round(result.stats.totalContentLength/1024)}KB`);
        } else {
            console.log(`  ❌ ${result.lesson.id}: ${result.lesson.title}`);
            console.log(`     💥 錯誤: ${result.error}`);
        }
    });
    
    console.log('\n🏁 L2課程載入測試完成！');
    
    return results;
}

// 如果直接執行此腳本
if (typeof window === 'undefined') {
    testL2LessonLoading().catch(console.error);
}

// 匯出測試函數供其他模組使用
export { testL2LessonLoading };