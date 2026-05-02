import json, os
BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')

def patch_file(filename, patches):
    path = os.path.join(BASE, filename)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    count = 0
    for k, v in patches.items():
        if k in data:
            data[k] = v
            count += 1
        else:
            print(f'  WARNING: key not found: {k}')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved {filename}  ({count} keys updated)')

# ── slides.23.content  (fundamentals of wine investment) ─────────────────────
slide23_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          Bordeaux investment-grade wines have grown at an average annual rate of <strong>8–12%</strong> over the past two decades, outperforming most traditional financial assets. However, this market carries <strong>unique risks that differ fundamentally</strong> from stocks and bonds — a rational understanding of both sides is essential before entering.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">📈</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Investment Advantages</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="display:flex;flex-direction:column;gap:5px;font-size:0.71rem;color:#444;line-height:1.65;">
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#2E7D32;font-weight:700;min-width:16px;">✓</span>
                  <span><strong>Scarcity driven:</strong> Fixed annual production, consumption depletes supply year by year</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#2E7D32;font-weight:700;min-width:16px;">✓</span>
                  <span><strong>Aging appreciation:</strong> Best vintages reach peak value at maturity, naturally rising prices</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#2E7D32;font-weight:700;min-width:16px;">✓</span>
                  <span><strong>Inflation hedge:</strong> Tangible asset, relatively hedges inflation risk</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#2E7D32;font-weight:700;min-width:16px;">✓</span>
                  <span><strong>Portfolio diversification:</strong> Low correlation with stock market; strong resistance in downturns</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#2E7D32;font-weight:700;min-width:16px;">✓</span>
                  <span><strong>Enjoyable:</strong> Profits come with a pleasurable drinking experience</span>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">⚠️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">Key Risks</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="display:flex;flex-direction:column;gap:5px;font-size:0.71rem;color:#444;line-height:1.65;">
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#C62828;font-weight:700;min-width:16px;">✗</span>
                  <span><strong>No dividends or interest:</strong> Returns rely entirely on resale; costs accumulate the whole time</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#C62828;font-weight:700;min-width:16px;">✗</span>
                  <span><strong>Storage costs:</strong> Cellar fees, insurance, opportunity cost add up significantly over 10–20 years</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#C62828;font-weight:700;min-width:16px;">✗</span>
                  <span><strong>Illiquid market:</strong> Transaction cycles are long; difficult to exit quickly in urgent situations</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#C62828;font-weight:700;min-width:16px;">✗</span>
                  <span><strong>Authentication risk:</strong> Counterfeits, TCA contamination, poor storage history, provenance disputes</span>
                </div>
                <div style="display:flex;gap:6px;align-items:flex-start;">
                  <span style="color:#C62828;font-weight:700;min-width:16px;">✗</span>
                  <span><strong>Taste preference shift:</strong> Ratings change; if Parker-era style goes out of fashion, prices can fall sharply</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.79rem;margin-bottom:8px;">🏆 Six Conditions for Investment-Grade Wine</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;font-size:0.7rem;">
            <div style="background:linear-gradient(135deg,#FFF8E1,#FFFDE7);border:1px solid #FFD54F;border-radius:7px;padding:7px 9px;">
              <div style="font-weight:700;color:#F57F17;margin-bottom:3px;">① Classification</div>
              <div style="color:#555;line-height:1.6;">First Growth or equivalent status (St-Émilion A / Pomerol Pétrus)</div>
            </div>
            <div style="background:linear-gradient(135deg,#E8F5E9,#F1F8E9);border:1px solid #A5D6A7;border-radius:7px;padding:7px 9px;">
              <div style="font-weight:700;color:#2E7D32;margin-bottom:3px;">② Vintage Quality</div>
              <div style="color:#555;line-height:1.6;">RP / Decanter 95+ points; WS / WE 93+ minimum</div>
            </div>
            <div style="background:linear-gradient(135deg,#E3F2FD,#E8EAF6);border:1px solid #90CAF9;border-radius:7px;padding:7px 9px;">
              <div style="font-weight:700;color:#1565C0;margin-bottom:3px;">③ Storage History</div>
              <div style="color:#555;line-height:1.6;">Directly from château, professional cellar, or verifiable provenance</div>
            </div>
            <div style="background:linear-gradient(135deg,#FCE4EC,#F8BBD0);border:1px solid #F48FB1;border-radius:7px;padding:7px 9px;">
              <div style="font-weight:700;color:#880E4F;margin-bottom:3px;">④ Perfect Labels</div>
              <div style="color:#555;line-height:1.6;">OWC (original wooden case), labels clean, fill level high-neck</div>
            </div>
            <div style="background:linear-gradient(135deg,#EDE7F6,#E8EAF6);border:1px solid #B39DDB;border-radius:7px;padding:7px 9px;">
              <div style="font-weight:700;color:#4527A0;margin-bottom:3px;">⑤ Aging Potential</div>
              <div style="color:#555;line-height:1.6;">Still 15+ years from peak window; can continue to appreciate</div>
            </div>
            <div style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);border:1px solid #80DEEA;border-radius:7px;padding:7px 9px;">
              <div style="font-weight:700;color:#006064;margin-bottom:3px;">⑥ Market Liquidity</div>
              <div style="color:#555;line-height:1.6;">Listed on Liv-ex; tradeable on major auction platforms</div>
            </div>
          </div>
        </div>

      </div>
    """

# ── slides.24.content  (investment strategies & case studies) ────────────────
slide24_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          Bordeaux investment has three main strategies. Each has its own risk/return profile. <strong>Beginners are recommended to start with buy-and-hold of top châteaux</strong> and only consider more advanced strategies once familiar with the market.
        </p>

        <div style="display:flex;flex-direction:column;gap:10px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 14px;display:flex;align-items:center;justify-content:space-between;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.1rem;">🏆</span>
                <div>
                  <div style="color:#fff;font-weight:700;font-size:0.82rem;">Strategy 1: Buy-and-Hold</div>
                  <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Long-Term Hold</div>
                </div>
              </div>
              <div style="text-align:right;">
                <div style="color:#FFD700;font-size:0.7rem;font-weight:700;">Risk ★★☆☆☆</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Return 8–15% / yr (avg)</div>
              </div>
            </div>
            <div style="padding:9px 14px 11px;">
              <p style="font-size:0.72rem;color:#444;line-height:1.7;margin:0 0 8px;">Purchase top-vintage First Growth wines and hold 10–20 years until the wine reaches its peak. The price appreciation plus scarcity from consumption drives natural value growth.</p>
              <div style="background:#FFEBEE;border-radius:7px;padding:7px 10px;font-size:0.7rem;color:#444;line-height:1.65;">
                <div style="font-weight:700;color:#C62828;margin-bottom:4px;">📊 Case Study: Latour 2009</div>
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
                  <div style="background:#fff;border-radius:5px;padding:4px 7px;text-align:center;">
                    <div style="font-size:0.67rem;color:#888;">Release price (2010)</div>
                    <div style="font-size:0.82rem;font-weight:700;color:#C62828;">€480</div>
                  </div>
                  <div style="background:#fff;border-radius:5px;padding:4px 7px;text-align:center;">
                    <div style="font-size:0.67rem;color:#888;">2020 market price</div>
                    <div style="font-size:0.82rem;font-weight:700;color:#C62828;">€1,200</div>
                  </div>
                  <div style="background:#fff;border-radius:5px;padding:4px 7px;text-align:center;">
                    <div style="font-size:0.67rem;color:#888;">10-year return</div>
                    <div style="font-size:0.82rem;font-weight:700;color:#2E7D32;">+150%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 14px;display:flex;align-items:center;justify-content:space-between;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.1rem;">🔄</span>
                <div>
                  <div style="color:#fff;font-weight:700;font-size:0.82rem;">Strategy 2: En Primeur Arbitrage</div>
                  <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Futures Pricing</div>
                </div>
              </div>
              <div style="text-align:right;">
                <div style="color:#FFD700;font-size:0.7rem;font-weight:700;">Risk ★★★☆☆</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Depends on vintage assessment</div>
              </div>
            </div>
            <div style="padding:9px 14px 11px;">
              <p style="font-size:0.72rem;color:#444;line-height:1.7;margin:0 0 8px;">Buy futures at release (18 months before bottling) when prices are lowest, then sell once ratings are confirmed and demand surges. Requires accurate vintage assessment and châteaux pricing analysis.</p>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;font-size:0.7rem;">
                <div style="background:#E8F5E9;border-radius:7px;padding:6px 9px;border-left:3px solid #2E7D32;">
                  <div style="font-weight:700;color:#2E7D32;margin-bottom:3px;">✅ 2016 Success Case</div>
                  <div style="color:#444;line-height:1.6;">En primeur avg price €220/bottle; 2020 market price €450 → +104% return</div>
                </div>
                <div style="background:#FFEBEE;border-radius:7px;padding:6px 9px;border-left:3px solid #C62828;">
                  <div style="font-weight:700;color:#C62828;margin-bottom:3px;">❌ 2018 Trap Case</div>
                  <div style="color:#444;line-height:1.6;">Châteaux released at excessive prices; 2022 market price below release → investors locked in losses</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#5E35B1);padding:8px 14px;display:flex;align-items:center;justify-content:space-between;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.1rem;">🎯</span>
                <div>
                  <div style="color:#fff;font-weight:700;font-size:0.82rem;">Strategy 3: Diversified Portfolio</div>
                  <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Spread Risk</div>
                </div>
              </div>
              <div style="text-align:right;">
                <div style="color:#FFD700;font-size:0.7rem;font-weight:700;">Risk ★★☆☆☆</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Stable 6–10% / yr</div>
              </div>
            </div>
            <div style="padding:9px 14px 11px;">
              <p style="font-size:0.72rem;color:#444;line-height:1.7;margin:0 0 8px;">Combine multiple châteaux, vintages, and price tiers to spread risk. Different wines peak at different times, creating natural cash-flow cycles.</p>
              <div style="background:#EDE7F6;border-radius:7px;padding:6px 9px;font-size:0.7rem;color:#444;line-height:1.65;">
                <div style="font-weight:700;color:#4527A0;margin-bottom:4px;">📊 2016 Diversified Portfolio Example</div>
                <div style="display:flex;gap:5px;flex-wrap:wrap;">
                  <span style="background:#fff;border-radius:5px;padding:2px 7px;">Mouton 2016 (20%)</span>
                  <span style="background:#fff;border-radius:5px;padding:2px 7px;">Léoville Barton 2016 (20%)</span>
                  <span style="background:#fff;border-radius:5px;padding:2px 7px;">Pichon Baron 2016 (20%)</span>
                  <span style="background:#fff;border-radius:5px;padding:2px 7px;">Pontet-Canet 2016 (20%)</span>
                  <span style="background:#fff;border-radius:5px;padding:2px 7px;">Troplong Mondot 2016 (20%)</span>
                </div>
                <div style="margin-top:5px;color:#4527A0;">→ Average 5-year return +78%; max single-wine risk capped at 20%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    """

# ── slides.25.content  (market dynamics & risk) ──────────────────────────────
slide25_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          The fine wine market is driven by <strong>four core forces</strong>, and volatile by nature. Before investing, understand the risk landscape thoroughly — treat it as a passion-driven alternative investment, not a guaranteed-return savings vehicle.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
          <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:9px 12px;">
            <div style="font-weight:700;color:#333;font-size:0.79rem;margin-bottom:7px;">📊 Four Price Drivers</div>
            <div style="display:flex;flex-direction:column;gap:5px;font-size:0.71rem;color:#444;line-height:1.65;">
              <div style="display:flex;gap:7px;align-items:flex-start;">
                <span style="background:#E3F2FD;border-radius:50%;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.68rem;font-weight:700;color:#1565C0;">1</span>
                <div><strong>Critic scores:</strong> Parker (RP), Decanter, Jancis Robinson — 98+ points can triple prices overnight</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;">
                <span style="background:#FCE4EC;border-radius:50%;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.68rem;font-weight:700;color:#880E4F;">2</span>
                <div><strong>Chinese demand:</strong> The post-2010 mainland China buying wave doubled prices; a slowdown has the reverse effect</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;">
                <span style="background:#E8F5E9;border-radius:50%;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.68rem;font-weight:700;color:#2E7D32;">3</span>
                <div><strong>Global economy:</strong> 2008 financial crisis, COVID-19, interest rates — fine wine is not immune to macro shocks</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;">
                <span style="background:#FFF3E0;border-radius:50%;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.68rem;font-weight:700;color:#E65100;">4</span>
                <div><strong>Climate &amp; vintage quality:</strong> Year-to-year variation directly impacts each vintage's investability</div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:9px 12px;">
            <div style="font-weight:700;color:#C62828;font-size:0.79rem;margin-bottom:7px;">⚠️ Six Risk Warnings</div>
            <div style="display:flex;flex-direction:column;gap:4px;font-size:0.7rem;color:#555;line-height:1.6;">
              <div style="display:flex;gap:6px;align-items:flex-start;">
                <span style="color:#C62828;min-width:14px;">①</span>
                <span>Do not invest money you cannot afford to be locked up for 10+ years</span>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;">
                <span style="color:#C62828;min-width:14px;">②</span>
                <span>Entry commissions (5–15%) + storage fees + exit commissions dramatically erode returns</span>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;">
                <span style="color:#C62828;min-width:14px;">③</span>
                <span>Score revisions (e.g. re-tasting and downgrading) can cause overnight price drops of 20–30%</span>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;">
                <span style="color:#C62828;min-width:14px;">④</span>
                <span>Counterfeits — verify sellers carefully; prices far below market are a red flag</span>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;">
                <span style="color:#C62828;min-width:14px;">⑤</span>
                <span>Exchange rate risk — most transactions in EUR / GBP; TWD exchange rate fluctuations affect real returns</span>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;">
                <span style="color:#C62828;min-width:14px;">⑥</span>
                <span>Fine wine is not capital-protected; prices can fall and not recover for many years</span>
              </div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:9px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.79rem;margin-bottom:8px;">💼 Seven Golden Rules for Expert Investors</div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;font-size:0.7rem;color:#444;line-height:1.6;">
            <div style="display:flex;gap:7px;align-items:flex-start;">
              <span style="background:#FFF8E1;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.67rem;font-weight:700;color:#F9A825;">①</span>
              <span>Invest only in wines you personally understand and would enjoy drinking</span>
            </div>
            <div style="display:flex;gap:7px;align-items:flex-start;">
              <span style="background:#E8F5E9;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.67rem;font-weight:700;color:#2E7D32;">②</span>
              <span>Allocate no more than 5–10% of investable assets to fine wine</span>
            </div>
            <div style="display:flex;gap:7px;align-items:flex-start;">
              <span style="background:#E3F2FD;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.67rem;font-weight:700;color:#1565C0;">③</span>
              <span>Choose only wines with documented storage history</span>
            </div>
            <div style="display:flex;gap:7px;align-items:flex-start;">
              <span style="background:#FCE4EC;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.67rem;font-weight:700;color:#880E4F;">④</span>
              <span>Buy by the case (12 bottles) — more liquid on secondary markets</span>
            </div>
            <div style="display:flex;gap:7px;align-items:flex-start;">
              <span style="background:#EDE7F6;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.67rem;font-weight:700;color:#4527A0;">⑤</span>
              <span>Track Liv-ex index movements regularly</span>
            </div>
            <div style="display:flex;gap:7px;align-items:flex-start;">
              <span style="background:#E0F7FA;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.67rem;font-weight:700;color:#006064;">⑥</span>
              <span>Prioritize blue-chip vintages (2009 · 2010 · 2016) over speculative ones</span>
            </div>
            <div style="display:flex;gap:7px;align-items:flex-start;grid-column:1/-1;">
              <span style="background:#F1F8E9;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.67rem;font-weight:700;color:#558B2F;">⑦</span>
              <span>Set a target exit price at purchase and stick to the plan — avoid panic selling or greed-driven holding</span>
            </div>
          </div>
        </div>

      </div>
    """

# ── slides.28.content  (core takeaways review) ───────────────────────────────
slide28_content = """
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          This lesson has taken you from vintage analysis, through aging science and storage, all the way to investment strategy. Before you go, lock in these <strong>four core insights</strong> — they form the foundation of professional Bordeaux appreciation.
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.4rem;">🔍</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.83rem;">Three Levels of Vintage Analysis</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Macro → Micro → Individual</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;font-size:0.71rem;color:#444;line-height:1.75;">
              <div>📡 <strong>Macro level:</strong> Annual average temperature trend and rainfall total</div>
              <div>🌿 <strong>Micro level:</strong> Left vs. Right Bank performance differences</div>
              <div>🏰 <strong>Individual level:</strong> Specific château terroir and winemaking</div>
              <div style="margin-top:6px;background:#E3F2FD;border-radius:5px;padding:4px 7px;font-size:0.68rem;color:#1565C0;">💡 Even in an "average" year, outstanding châteaux can produce exceptional wines</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#5E35B1);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.4rem;">⚗️</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.83rem;">Aging Is an Art of Balance</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Tannins + Acidity + Extract</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;font-size:0.71rem;color:#444;line-height:1.75;">
              <div>🔗 <strong>Tannins:</strong> polymerize → astringency transforms to silky texture</div>
              <div>🎨 <strong>Color:</strong> purple-red → brick-red → orange-brown</div>
              <div>🌸 <strong>Aroma:</strong> primary fruit → dried fruit, truffle, leather</div>
              <div style="margin-top:6px;background:#EDE7F6;border-radius:5px;padding:4px 7px;font-size:0.68rem;color:#4527A0;">💡 High alcohol ≠ long-aging; a balanced structure is the hallmark of longevity</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.4rem;">🏛️</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.83rem;">Storage Is Investment Insurance</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Six conditions guard aging</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;font-size:0.71rem;color:#444;line-height:1.75;">
              <div>🌡️ <strong>Temperature:</strong> 12–14°C constant, no fluctuation</div>
              <div>💧 <strong>Humidity:</strong> 60–75%, horizontal placement</div>
              <div>🌑 <strong>Light &amp; vibration:</strong> darkness, no vibration, odor-free</div>
              <div style="margin-top:6px;background:#E8F5E9;border-radius:5px;padding:4px 7px;font-size:0.68rem;color:#1B5E20;">💡 Great wine in poor storage loses value; ordinary wine in great storage holds its value</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.4rem;">💡</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.83rem;">Rational View of Wine Investment</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Passion first, returns second</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;font-size:0.71rem;color:#444;line-height:1.75;">
              <div>📈 <strong>Advantage:</strong> Scarcity + aging = natural appreciation</div>
              <div>⚠️ <strong>Risk:</strong> Illiquid, high costs, authentication concerns</div>
              <div>🎯 <strong>Principles:</strong> Know what you buy, diversify, exit with a plan</div>
              <div style="margin-top:6px;background:#FFEBEE;border-radius:5px;padding:4px 7px;font-size:0.68rem;color:#B71C1C;">💡 The best return comes from wine you truly love and patiently understand</div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1.5px solid #FFD54F;border-radius:10px;padding:10px 14px;text-align:center;font-size:0.75rem;color:#5D4037;line-height:1.75;">
          🎓 <strong>You have now completed L3-12: Vintage Assessment, Aging Science, Storage &amp; Investment</strong><br>
          Apply these insights to every bottle you open next time — your palate will guide you on the right path.
        </div>

      </div>
    """

patch_file('l3-12.json', {
    'slides.23.content': slide23_content,
    'slides.24.content': slide24_content,
    'slides.25.content': slide25_content,
    'slides.28.content': slide28_content,
})

print('Done.')
