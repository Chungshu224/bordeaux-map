const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/lessons/l3-5.js');
let raw = fs.readFileSync(filePath, 'utf8');
const hasCRLF = raw.includes('\r\n');
let content = hasCRLF ? raw.replace(/\r\n/g, '\n') : raw;

// ── 1. Château Margaux 浸漬管理 ──────────────────────────────────────────────
const margaux_start = content.indexOf("  {\n    type: 'case-study',\n    title: '案例：Château Margaux 的浸漬管理'");
const margaux_end_marker = "lessons: ['沒有萬能的浸漬配方，必須根據年份、地塊、品種調整','精確的溫度控制（±1°C）對萃取品質至關重要','品嚐評估比實驗室數據更能指導釀酒決策','傳統技術（壓帽）與現代技術（溫控）可完美結合']";
const margaux_end_pos = content.indexOf(margaux_end_marker);
const margaux_close = content.indexOf('\n  },', margaux_end_pos) + '\n  },'.length;

const margaux_new = `  {
    type: 'content',
    title: '案例：Château Margaux 的浸漬管理',
    content: \`
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰 ｜ 瑪歌</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">如何在卡本內蘇維濃的強勁結構與瑪歌村莊特有的優雅柔順之間找到平衡？</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#C62828,#E53935);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🍷 四段式浸漬策略</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:4px;"><strong style="color:#C62828;">①冷浸漬 4–5天</strong> 10–12°C｜萃取花青素與果香</div>
              <div style="margin-bottom:4px;"><strong style="color:#E65100;">②酒精發酵 8–10天</strong> 30–31°C｜淋皮×3 + 壓帽×1/日</div>
              <div style="margin-bottom:4px;"><strong style="color:#F57F17;">③發酵後浸漬 8–12天</strong> 降低淋皮至1–2次｜每日品嚐評估</div>
              <div style="margin-bottom:6px;"><strong style="color:#2E7D32;">④分批次管理</strong> 40–50個發酵批次｜地塊/樹齡分開</div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 9px;font-size:0.7rem;color:#B71C1C;">總浸漬時間：20–27天（視年份調整）</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">📊 成果與技術指標</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E8F5E9;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">顏色強度 (OD)</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">10–14</div>
                </div>
                <div style="background:#FFF3E0;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">總酚類 (mg/L)</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.8rem;">2800–3200</div>
                </div>
                <div style="background:#F3E5F5;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">單寧 (g/L)</div>
                  <div style="font-weight:700;color:#6A1B9A;font-size:0.8rem;">3.0–3.5</div>
                </div>
                <div style="background:#E3F2FD;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">pH</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.8rem;">3.6–3.7</div>
                </div>
              </div>
              <div style="font-size:0.73rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:3px;">· 深寶石紅，邊緣帶紫羅蘭反光</div>
                <div style="margin-bottom:3px;">· 單寧如絲綢，強勁不粗糙</div>
                <div>· 保留瑪歌花香＋30–50年陳年結構</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
          <div style="background:#FFEBEE;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#B71C1C;line-height:1.65;"><strong>無萬能配方</strong><br><span style="color:#555;">必須根據年份、地塊、品種靈活調整浸漬策略</span></div>
          <div style="background:#FFF3E0;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#E65100;line-height:1.65;"><strong>溫控精度至關重要</strong><br><span style="color:#555;">±1°C 控制對萃取品質有決定性影響</span></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#1565C0;line-height:1.65;"><strong>感官 > 數據</strong><br><span style="color:#555;">品嚐評估比實驗室數據更能指導釀酒決策</span></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#1B5E20;line-height:1.65;"><strong>傳統與現代互補</strong><br><span style="color:#555;">壓帽傳統技術與現代溫控精密配合，最佳化萃取</span></div>
        </div>
      </div>
    \`
  }`;

if (margaux_start >= 0 && margaux_end_pos >= 0) {
  content = content.slice(0, margaux_start) + margaux_new + content.slice(margaux_close);
  console.log('✓ Margaux 浸漬 replaced');
} else {
  console.log('✗ Margaux 浸漬 NOT FOUND', margaux_start, margaux_end_pos);
}

// ── 2. Château Smith Haut Lafitte ────────────────────────────────────────────
const smith_start = content.indexOf("  {\n    type: 'case-study',\n    title: '案例：Château Smith Haut Lafitte 白酒釀造'");
const smith_end_marker = "lessons: ['品種選擇：少量Sémillon增加酒體與陳年潛力'";
const smith_end_pos = content.indexOf(smith_end_marker);
const smith_close = content.indexOf('\n  },', smith_end_pos) + '\n  },'.length;

const smith_new = `  {
    type: 'content',
    title: '案例：Château Smith Haut Lafitte 白酒釀造',
    content: \`
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰 ｜ Pessac-Léognan</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">如何將白蘇維濃與灰蘇維濃結合，創造出既清新又複雜、既現代又經典的波爾多白酒？</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🥂 八步驟釀造流程</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.8;">
              <div style="margin-bottom:3px;"><strong style="color:#00695C;">①</strong> 清晨採收 + 三次分選（淘汰率 20–25%）</div>
              <div style="margin-bottom:3px;"><strong style="color:#00796B;">②</strong> 低溫浸皮 12h ｜ 8–10°C 惰性氣體保護</div>
              <div style="margin-bottom:3px;"><strong style="color:#00897B;">③</strong> 輕柔壓榨 &lt;0.8 bar｜僅前 60% 汁液</div>
              <div style="margin-bottom:3px;"><strong style="color:#009688;">④</strong> 靜置澄清 48h ｜ 保留 100–120 NTU</div>
              <div style="margin-bottom:3px;"><strong style="color:#E65100;">⑤</strong> 橡木桶發酵（50% 新桶）18–20°C 天然酵母</div>
              <div style="margin-bottom:3px;"><strong style="color:#F57F17;">⑥</strong> 桶內 MLF 100%（不接種，自然啟動）</div>
              <div style="margin-bottom:3px;"><strong style="color:#6A1B9A;">⑦</strong> Sur lie 10月 ｜ 前 3 月每週攪拌 2 次</div>
              <div><strong style="color:#37474F;">⑧</strong> 輕柔過濾 → 裝瓶（釀造後 18 個月）</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🏆 品質與市場表現</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E0F2F1;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">酒精度</div>
                  <div style="font-weight:700;color:#00695C;font-size:0.8rem;">13.5%</div>
                </div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">總酸 (g/L)</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">3.5</div>
                </div>
                <div style="background:#FFF3E0;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">評分</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.8rem;">91–94 pts</div>
                </div>
                <div style="background:#E3F2FD;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">售價</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.8rem;">€50–70</div>
                </div>
              </div>
              <div style="font-size:0.72rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:3px;">· 淺金黃帶綠反光，燧石礦物感</div>
                <div style="margin-bottom:3px;">· 西柚・百香果・椴花・烤杏仁</div>
                <div style="margin-bottom:3px;">· 活潑酸度 + 飽滿酒體 + 絲滑質地</div>
                <div>· 陳年潛力 15–25 年</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
          <div style="background:#E0F2F1;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#00695C;line-height:1.55;text-align:center;"><strong>品種選擇</strong><br><span style="color:#555;">Sémillon 增加酒體與陳年</span></div>
          <div style="background:#FFF3E0;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#E65100;line-height:1.55;text-align:center;"><strong>桶內發酵</strong><br><span style="color:#555;">質感整合優於桶陳釀</span></div>
          <div style="background:#F3E5F5;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#6A1B9A;line-height:1.55;text-align:center;"><strong>酒泥陳釀</strong><br><span style="color:#555;">複雜度與質感關鍵</span></div>
          <div style="background:#E8F5E9;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#1B5E20;line-height:1.55;text-align:center;"><strong>50% 新桶</strong><br><span style="color:#555;">保留品種風土特色</span></div>
          <div style="background:#E3F2FD;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#1565C0;line-height:1.55;text-align:center;"><strong>18月週期</strong><br><span style="color:#555;">各元素和諧整合</span></div>
        </div>
      </div>
    \`
  }`;

// Smith Haut Lafitte has unusual indentation: "  challenge:" vs "    challenge:"
const smith_start_alt = content.indexOf("  {\n    type: 'case-study',\n    title: '案例：Château Smith Haut Lafitte 白酒釀造'\n    winery: 'Château Smith Haut Lafitte'");
const smith_start2 = content.indexOf("title: '案例：Château Smith Haut Lafitte 白酒釀造'") - 10;

if (smith_start >= 0 && smith_end_pos >= 0) {
  content = content.slice(0, smith_start) + smith_new + content.slice(smith_close);
  console.log('✓ Smith Haut Lafitte replaced');
} else {
  console.log('✗ Smith Haut Lafitte NOT FOUND. start=' + smith_start + ', end_pos=' + smith_end_pos);
}

// ── 3. Château Margaux 分選升級 ──────────────────────────────────────────────
const fenxuan_start = content.indexOf("  {\n    type: 'case-study',\n    title: '案例：Château Margaux 分選升級'");
const fenxuan_end_marker = "lessons: ['科技分層導入降低失敗風險'";
const fenxuan_end_pos = content.indexOf(fenxuan_end_marker);
const fenxuan_close = content.indexOf('\n  },', fenxuan_end_pos) + '\n  },'.length;

const fenxuan_new = `  {
    type: 'content',
    title: '案例：Château Margaux 分選升級',
    content: \`
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#BF360C,#E64A19);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰 ｜ Margaux</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">傳統精緻 + 現代效率的平衡——如何在不捨棄品質的前提下將分選擴容升級？</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🔍 四層分選流程</div>
            <div style="padding:9px 12px 11px;">
              <div style="margin-bottom:5px;background:#FBE9E7;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#BF360C;font-size:0.73rem;margin-bottom:2px;">三層機械預分選</div>
                <div style="font-size:0.7rem;color:#555;">振動篩 → 風選 → 輥式篩選，快速去除枝條/葉片</div>
              </div>
              <div style="margin-bottom:5px;background:#FFF3E0;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#E65100;font-size:0.73rem;margin-bottom:2px;">光學主分選</div>
                <div style="font-size:0.7rem;color:#555;">CCD 相機 + 彩色/NIR 分析 → 精準射出瑕疵葡萄</div>
              </div>
              <div style="margin-bottom:5px;background:#E8EAF6;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#3949AB;font-size:0.73rem;margin-bottom:2px;">AI 模型微調</div>
                <div style="font-size:0.7rem;color:#555;">根據年份批次數據動態優化分選參數</div>
              </div>
              <div style="background:#E8F5E9;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#2E7D32;font-size:0.73rem;margin-bottom:2px;">人工終檢 + 建立批次閉環</div>
                <div style="font-size:0.7rem;color:#555;">最終品質把關，分選數據回饋 AI 持續學習</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">📈 升級成果</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:8px;">
                <div style="background:#E8F5E9;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">處理效率</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.88rem;">+300%</div>
                </div>
                <div style="background:#FFF3E0;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">瑕疵檢出率</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.88rem;">顯著提升</div>
                </div>
                <div style="background:#E3F2FD;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">酒質穩定性</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.88rem;">大幅提高</div>
                </div>
                <div style="background:#F3E5F5;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">勞動成本</div>
                  <div style="font-weight:700;color:#6A1B9A;font-size:0.88rem;">顯著下降</div>
                </div>
              </div>
              <div style="background:#FFF8E1;border-radius:6px;padding:6px 10px;font-size:0.71rem;color:#5D4037;line-height:1.65;">
                <strong>批次數據閉環</strong>：每次採收的分選數據回饋至 AI 模型，年份間精準度持續累積提升。
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
          <div style="background:#FBE9E7;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#BF360C;line-height:1.55;"><strong>分層導入</strong><br><span style="color:#555;">科技分層降低失敗風險</span></div>
          <div style="background:#E8F5E9;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#1B5E20;line-height:1.55;"><strong>數據驅動</strong><br><span style="color:#555;">原料數據沉澱強化發酵策略</span></div>
          <div style="background:#E3F2FD;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#1565C0;line-height:1.55;"><strong>人機協作</strong><br><span style="color:#555;">優於任何單一路徑</span></div>
          <div style="background:#F3E5F5;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#6A1B9A;line-height:1.55;"><strong>批次追溯</strong><br><span style="color:#555;">為長期品質累積資產</span></div>
        </div>
      </div>
    \`
  }`;

if (fenxuan_start >= 0 && fenxuan_end_pos >= 0) {
  content = content.slice(0, fenxuan_start) + fenxuan_new + content.slice(fenxuan_close);
  console.log('✓ Margaux 分選 replaced');
} else {
  console.log('✗ Margaux 分選 NOT FOUND. start=' + fenxuan_start + ', end_pos=' + fenxuan_end_pos);
}

const output = hasCRLF ? content.replace(/\n/g, '\r\n') : content;
fs.writeFileSync(filePath, output, 'utf8');
console.log('✓ File written');
