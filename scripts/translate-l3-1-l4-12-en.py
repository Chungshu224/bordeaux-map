"""
Translate l3-1 (4 remaining keys) and l4-12 (16 keys) to English.
Run: python scripts/translate-l3-1-l4-12-en.py
"""
import json
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')

# ─────────────────────────── l3-1 patches ────────────────────────────

L3_1_PATCHES = {}

L3_1_PATCHES["slides.26.content"] = r"""
      <div class="sustainability-certifications">
        <p class="section-description">Multi-level Environmental Standards &amp; Certifications</p>
        
        <div class="certification-cards">
          <div class="cert-card level-entry">
            <div class="cert-header">
              <h4>🌱 HVE (Haute Valeur Environnementale)</h4>
              <span class="level-badge entry">Entry Level</span>
            </div>
            
            <div class="cert-body">
              <div class="requirements">
                <strong>📋 Certification Requirements:</strong>
                <ul>
                  <li>Biodiversity protection</li>
                  <li>Reduction in crop protection products</li>
                  <li>Fertiliser management</li>
                  <li>Water resource management</li>
                </ul>
              </div>
              
              <div class="metrics">
                <div class="metric-item">
                  <span class="icon">📊</span>
                  <div>
                    <div class="metric-label">Bordeaux Adoption Rate</div>
                    <div class="metric-value">Approx. 60% of vineyards</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">💰</span>
                  <div>
                    <div class="metric-label">Certification Cost</div>
                    <div class="metric-value">Relatively low</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">🏷️</span>
                  <div>
                    <div class="metric-label">Market Value</div>
                    <div class="metric-value">Basic environmental standard; moderate market recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cert-card level-advanced">
            <div class="cert-header">
              <h4>🍃 Agriculture Biologique (AB)</h4>
              <span class="level-badge advanced">Advanced Level</span>
            </div>
            
            <div class="cert-body">
              <div class="requirements">
                <strong>📋 Certification Requirements:</strong>
                <ul>
                  <li>No synthetic chemical pesticides or fertilisers</li>
                  <li>3-year conversion period</li>
                  <li>Rigorous traceability system</li>
                </ul>
              </div>
              
              <div class="metrics">
                <div class="metric-item">
                  <span class="icon">📊</span>
                  <div>
                    <div class="metric-label">Bordeaux Adoption Rate</div>
                    <div class="metric-value">Approx. 18% of vineyards</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">💰</span>
                  <div>
                    <div class="metric-label">Certification Cost</div>
                    <div class="metric-value">Moderate (yields may decline during conversion period)</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">🏷️</span>
                  <div>
                    <div class="metric-label">Market Value</div>
                    <div class="metric-value">Highly recognised in European markets<br><strong>Price premium of 10–20%</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cert-card level-premium">
            <div class="cert-header">
              <h4>⭐ Biodynamie (Demeter)</h4>
              <span class="level-badge premium">Premium Level</span>
            </div>
            
            <div class="cert-body">
              <div class="requirements">
                <strong>📋 Certification Requirements:</strong>
                <ul>
                  <li>Meets organic standards</li>
                  <li>Biodynamic calendar</li>
                  <li>Biodynamic preparations</li>
                  <li>Holistic farm philosophy</li>
                </ul>
              </div>
              
              <div class="metrics">
                <div class="metric-item">
                  <span class="icon">📊</span>
                  <div>
                    <div class="metric-label">Bordeaux Adoption Rate</div>
                    <div class="metric-value">Approx. 3% of vineyards</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">💰</span>
                  <div>
                    <div class="metric-label">Certification Cost</div>
                    <div class="metric-value">High (requires complete overhaul of management practices)</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">🏷️</span>
                  <div>
                    <div class="metric-label">Market Value</div>
                    <div class="metric-value">Sought after in premium markets<br><strong>Price premium of 20–30%+</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="trend-note">
          <div class="trend-icon">📈</div>
          <div class="trend-content">
            <strong>Development Trend:</strong> A step-by-step progression from HVE towards organic and biodynamic farming
          </div>
        </div>

        <style>
          .sustainability-certifications {
            padding: 1rem 0;
          }
          .section-description {
            text-align: center;
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
          }
          .certification-cards {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          .cert-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .cert-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .cert-card.level-entry {
            border: 3px solid #4CAF50;
          }
          .cert-card.level-advanced {
            border: 3px solid #2196F3;
          }
          .cert-card.level-premium {
            border: 3px solid #9C27B0;
          }
          .cert-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .cert-card.level-entry .cert-header {
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          }
          .cert-card.level-advanced .cert-header {
            background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          }
          .cert-card.level-premium .cert-header {
            background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%);
          }
          .cert-header h4 {
            color: white;
            margin: 0;
            font-size: 1.35rem;
          }
          .level-badge {
            background: rgba(255,255,255,0.3);
            color: white;
            padding: 0.4rem 1rem;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
          }
          .cert-body {
            padding: 1.5rem;
            background: white;
          }
          .requirements {
            margin-bottom: 1.5rem;
          }
          .requirements strong {
            display: block;
            color: #333;
            margin-bottom: 0.75rem;
            font-size: 1.05rem;
          }
          .requirements ul {
            margin: 0;
            padding-left: 1.5rem;
          }
          .requirements li {
            margin: 0.5rem 0;
            color: #555;
            line-height: 1.6;
          }
          .metrics {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 8px;
          }
          .metric-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }
          .metric-item .icon {
            font-size: 1.5rem;
            flex-shrink: 0;
          }
          .metric-label {
            font-weight: 600;
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
          }
          .metric-value {
            color: #333;
            font-size: 1rem;
            line-height: 1.5;
          }
          .metric-value strong {
            color: #f5576c;
          }
          .trend-note {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            padding: 1.25rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          }
          .trend-icon {
            font-size: 2rem;
            flex-shrink: 0;
          }
          .trend-content {
            color: #333;
            line-height: 1.6;
          }
          .trend-content strong {
            display: inline;
            color: #d84315;
          }
          @media (max-width: 768px) {
            .cert-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.75rem;
            }
            .metrics {
              gap: 0.75rem;
            }
          }
        </style>
      </div>
    """

L3_1_PATCHES["slides.29.content"] = r"""
      <div class="future-scenarios">
        <p class="section-description">Based on IPCC climate models and industry trends</p>
        
        <div class="scenario-cards">
          <!-- Optimistic Scenario -->
          <div class="scenario-card optimistic">
            <div class="scenario-header">
              <h4>🌿 Optimistic Scenario: Successful Adaptation</h4>
              <div class="probability">Probability: 30%</div>
            </div>
            
            <div class="scenario-body">
              <div class="temperature-box">
                <span class="temp-icon">🌡️</span>
                <span class="temp-value">+1.5°C</span>
                <span class="temp-note">(Within Paris Agreement targets)</span>
              </div>
              
              <div class="conditions">
                <strong>Preconditions:</strong>
                <ul>
                  <li>Global greenhouse gas emissions peak before 2030 and decline rapidly</li>
                  <li>Renewable energy share exceeds 80%</li>
                  <li>Carbon capture technology is widely deployed</li>
                  <li>The Bordeaux wine industry completes its green transition</li>
                </ul>
              </div>
              
              <div class="impacts">
                <strong>Impact Assessment:</strong>
                <div class="impact-item">
                  <span class="impact-label">🗺️ Appellation Structure</span>
                  <span class="impact-text">The traditional appellation structure is broadly maintained; cooler areas such as Entre-Deux-Mers see quality improvements</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍇 Variety Composition</span>
                  <span class="impact-text">Minor variety adjustments suffice; Cabernet Franc (CF) and Petit Verdot (PV) proportions increase moderately</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍷 Wine Style</span>
                  <span class="impact-text">Classic elegant style maintained through technical innovation; alcohol content kept at 13–13.5%</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🌱 Sustainability</span>
                  <span class="impact-text">More than 50% of vineyards obtain organic certification; carbon-neutral targets achieved on schedule</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">💼 Market Performance</span>
                  <span class="impact-text">Bordeaux retains its status as a top global wine region; price structure remains stable</span>
                </div>
              </div>
              
              <div class="conclusion">
                <strong>Key Challenge:</strong> Requires continuous technical investment and management innovation, but remains within manageable bounds
              </div>
              <div class="likelihood">
                <strong>Feasibility:</strong> Requires co-ordinated global climate policies; moderate probability of success
              </div>
            </div>
          </div>

          <!-- Moderate Scenario -->
          <div class="scenario-card moderate">
            <div class="scenario-header">
              <h4>⚡ Moderate Scenario: Deep Adjustment</h4>
              <div class="probability">Probability: 50%</div>
            </div>
            
            <div class="scenario-body">
              <div class="temperature-box warning">
                <span class="temp-icon">🌡️</span>
                <span class="temp-value">+2–3°C</span>
                <span class="temp-note">(Current policy trajectory)</span>
              </div>
              
              <div class="conditions">
                <strong>Preconditions:</strong>
                <ul>
                  <li>Global greenhouse gas emissions do not peak until the 2040s</li>
                  <li>Frequency of extreme weather events increases by 50–100%</li>
                  <li>Rainfall patterns change significantly</li>
                  <li>Large-scale investment in adaptive infrastructure required</li>
                </ul>
              </div>
              
              <div class="impacts">
                <strong>Impact Assessment:</strong>
                <div class="impact-item">
                  <span class="impact-label">🗺️ Appellation Structure</span>
                  <span class="impact-text">Appellation values reshuffled: Entre-Deux-Mers rises significantly; some traditional high-quality appellations face challenges; Sauternes may decline</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍇 Variety Composition</span>
                  <span class="impact-text">Major variety restructuring: Merlot proportion declines; CF, PV, and even newer varieties such as Marselan increase; experimental introduction of Mediterranean varieties</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍷 Wine Style</span>
                  <span class="impact-text">Wines evolve towards fuller, more powerful styles; alcohol levels generally 13.5–14.5%; traditional elegant style becomes harder to maintain</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🌱 Sustainability</span>
                  <span class="impact-text">Organic farming becomes mainstream (&gt;40%), but drought management costs are high</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">💼 Market Performance</span>
                  <span class="impact-text">Market polarisation: top estates maintain their position but require large investment; pressure increases on small and medium estates</span>
                </div>
              </div>
              
              <div class="challenges">
                <strong>Key Challenges:</strong>
                <ul>
                  <li>Introducing new varieties may affect AOC rules and market perceptions</li>
                  <li>Tension between irrigation needs and water scarcity</li>
                  <li>More frequent extreme vintages, exacerbating investment return volatility</li>
                  <li>Need to redefine "Bordeaux style"</li>
                </ul>
              </div>
              <div class="likelihood">
                <strong>Feasibility:</strong> The most likely development pathway at present; requires comprehensive industry-wide transformation
              </div>
            </div>
          </div>

          <!-- Pessimistic Scenario -->
          <div class="scenario-card pessimistic">
            <div class="scenario-header">
              <h4>🔥 Pessimistic Scenario: Systemic Challenges</h4>
              <div class="probability">Probability: 20%</div>
            </div>
            
            <div class="scenario-body">
              <div class="temperature-box danger">
                <span class="temp-icon">🌡️</span>
                <span class="temp-value">+3–4°C</span>
                <span class="temp-note">(High-emission scenario)</span>
              </div>
              
              <div class="conditions">
                <strong>Preconditions:</strong>
                <ul>
                  <li>Global emissions continue to rise into the 2050s</li>
                  <li>Extreme droughts and floods become the new normal</li>
                  <li>Some appellations face systemic risks</li>
                  <li>Global wine map is restructured</li>
                </ul>
              </div>
              
              <div class="impacts">
                <strong>Impact Assessment:</strong>
                <div class="impact-item">
                  <span class="impact-label">🗺️ Appellation Structure</span>
                  <span class="impact-text">Traditional appellation structure collapses: core areas such as Médoc and Pomerol face existential crises; Bordeaux wine belt may shift northwards</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍇 Variety Composition</span>
                  <span class="impact-text">Complete variety revolution: large-scale introduction of heat- and drought-tolerant Mediterranean and New World varieties; traditional varieties may survive only in specific plots</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍷 Wine Style</span>
                  <span class="impact-text">Traditional Bordeaux style becomes unsustainable; transition to a "New Bordeaux" style: alcohol 14.5%+, fruit-forward, simpler structure</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🌱 Sustainability</span>
                  <span class="impact-text">Extreme environmental pressure; some marginal appellations are forced to abandon viticulture</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">💼 Market Performance</span>
                  <span class="impact-text">Market turmoil: brand value damaged, competitiveness declines; Nordic and English wine regions rise</span>
                </div>
              </div>
              
              <div class="challenges critical">
                <strong>Key Challenges:</strong>
                <ul>
                  <li>The traditional concept of terroir faces fundamental challenges</li>
                  <li>The AOC system may need to be completely restructured</li>
                  <li>The economic model becomes unsustainable; many estates face bankruptcy</li>
                  <li>Cultural identity crisis: "Is this still Bordeaux?"</li>
                </ul>
              </div>
              <div class="likelihood critical">
                <strong>Feasibility:</strong> If global climate action fails, this catastrophic scenario may become reality
              </div>
            </div>
          </div>
        </div>

        <div class="conclusion-note">
          <div class="conclusion-icon">🔮</div>
          <div class="conclusion-text">
            <strong>Conclusion:</strong> The future of Bordeaux will depend on two critical factors: the success of global climate policy, and the adaptability and willingness to innovate of the Bordeaux wine industry.
          </div>
        </div>

        <style>
          .future-scenarios {
            padding: 1rem 0;
          }
          .section-description {
            text-align: center;
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
          }
          .scenario-cards {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 2rem;
          }
          .scenario-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .scenario-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .scenario-card.optimistic {
            border: 3px solid #4CAF50;
          }
          .scenario-card.moderate {
            border: 3px solid #FF9800;
          }
          .scenario-card.pessimistic {
            border: 3px solid #F44336;
          }
          .scenario-header {
            padding: 1.5rem;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .scenario-card.optimistic .scenario-header {
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          }
          .scenario-card.moderate .scenario-header {
            background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
          }
          .scenario-card.pessimistic .scenario-header {
            background: linear-gradient(135deg, #F44336 0%, #D32F2F 100%);
          }
          .scenario-header h4 {
            margin: 0;
            font-size: 1.4rem;
          }
          .probability {
            background: rgba(255,255,255,0.3);
            padding: 0.4rem 1rem;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
          }
          .scenario-body {
            padding: 1.5rem;
            background: white;
          }
          .temperature-box {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: #e8f5e9;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
          }
          .temperature-box.warning {
            background: #fff3e0;
          }
          .temperature-box.danger {
            background: #ffebee;
          }
          .temp-icon {
            font-size: 1.8rem;
          }
          .temp-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2e7d32;
          }
          .temperature-box.warning .temp-value {
            color: #e65100;
          }
          .temperature-box.danger .temp-value {
            color: #c62828;
          }
          .temp-note {
            color: #666;
            font-size: 0.9rem;
          }
          .conditions, .impacts, .challenges {
            margin-bottom: 1.5rem;
          }
          .conditions strong, .impacts strong, .challenges strong, .conclusion strong, .likelihood strong {
            display: block;
            color: #333;
            margin-bottom: 0.75rem;
            font-size: 1.05rem;
          }
          .conditions ul, .challenges ul {
            margin: 0;
            padding-left: 1.5rem;
          }
          .conditions li, .challenges li {
            margin: 0.5rem 0;
            color: #555;
            line-height: 1.6;
          }
          .challenges.critical li {
            color: #c62828;
            font-weight: 500;
          }
          .impact-item {
            display: flex;
            gap: 1rem;
            margin: 0.75rem 0;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 6px;
          }
          .impact-label {
            font-weight: 600;
            color: #555;
            min-width: 120px;
            flex-shrink: 0;
          }
          .impact-text {
            color: #333;
            line-height: 1.6;
          }
          .conclusion, .likelihood {
            background: #f0f4ff;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
          }
          .likelihood.critical {
            background: #ffebee;
          }
          .conclusion-note {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .conclusion-icon {
            font-size: 2.5rem;
            flex-shrink: 0;
          }
          .conclusion-text {
            color: #333;
            line-height: 1.7;
          }
          .conclusion-text strong {
            color: #d84315;
            display: inline;
          }
          @media (max-width: 768px) {
            .scenario-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.75rem;
            }
            .impact-item {
              flex-direction: column;
              gap: 0.5rem;
            }
            .impact-label {
              min-width: auto;
            }
          }
        </style>
      </div>
    """

L3_1_PATCHES["slides.30.content"] = r"""
      <div class="actionable-insights">
        <div class="audience-cards">
          <div class="audience-card consumer">
            <div class="audience-header">
              <h4>🍷 Consumers</h4>
            </div>
            <div class="recommendations">
              <div class="recommendation-item">
                <span class="rec-icon">📊</span>
                <span class="rec-text">Understand that vintage variation is increasing; learn to assess the impact of climate factors on quality</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🌱</span>
                <span class="rec-text">Pay attention to estates' sustainability practices; support eco-friendly estates through your purchasing choices</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🌍</span>
                <span class="rec-text">Explore wines from emerging appellations – you may find great value for money</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🔄</span>
                <span class="rec-text">Embrace the evolution of style; understand the value of the "New Bordeaux" profile</span>
              </div>
            </div>
          </div>

          <!-- Estate Owners -->
          <div class="audience-card">
            <div class="audience-header">
              <span class="audience-icon">🏰</span>
              <h4>Estate Owners</h4>
            </div>
            <div class="recommendations">
              <div class="rec-item">
                <span class="rec-icon">💧</span>
                <span class="rec-text">Invest early in climate-adaptive infrastructure (irrigation systems, monitoring technology)</span>
              </div>
              <div class="rec-item">
                <span class="rec-icon">🌱</span>
                <span class="rec-text">Consider transitioning to organic or biodynamic practices to enhance soil resilience</span>
              </div>
              <div class="rec-item">
                <span class="icon">🍇</span>
                <span class="text">Flexibly adjust variety proportions; trial new varieties</span>
              </div>
              <div class="rec-item">
                <span class="icon">📊</span>
                <span class="text">Strengthen the team's capabilities in climate science and data analysis</span>
              </div>
              <div class="rec-item">
                <span class="icon">🤝</span>
                <span class="text">Participate in collective appellation initiatives; share knowledge and resources</span>
              </div>
            </div>
          </div>

          <div class="audience-card">
            <div class="audience-header">
              <h4>💼 Investors</h4>
            </div>
            <div class="recommendations-list">
              <div class="recommendation-item">
                <span class="rec-icon">📊</span>
                <span class="rec-text">Reassess appellation risk: cooler appellations may be undervalued</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🌱</span>
                <span class="rec-text">Pay attention to estates' sustainability practices; this is a long-term value driver</span>
              </div>
              <div class="recommendation-item">
                <span class="icon">💰</span>
                <span class="text">Understand the necessity and costs of climate-adaptive investment</span>
              </div>
              <div class="recommendation-item">
                <span class="icon">📊</span>
                <span class="text">Diversify the portfolio to spread climate-related risk</span>
              </div>
              <div class="recommendation-item">
                <span class="icon">🔮</span>
                <span class="text">Long-term view: climate challenges are also opportunities for innovation</span>
              </div>
            </div>
          </div>

          <div class="audience-card">
            <div class="audience-header">
              <h4>📚 Learners &amp; Professionals</h4>
            </div>
            <div class="audience-body">
              <ul class="recommendations">
                <li>Continuously update your knowledge of climate science; this will become the core of wine expertise</li>
                <li>Follow industry innovation case studies; learn from best practices</li>
                <li>Develop systems thinking; understand the complex interconnections between climate, soil, varieties, and winemaking</li>
                <li>Participate in industry dialogue; contribute your professional expertise</li>
                <li>Maintain an open mind; adapt to the evolution of appellations and wine styles</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="action-note">
          <div class="note-icon">💪</div>
          <div class="note-content">
            <strong>Call to Action:</strong> Climate change is not a distant future – it is today's reality. Whether you are a consumer, a practitioner, or an investor, we can all take action from our own positions to collectively shape a sustainable future for Bordeaux wine.
          </div>
        </div>

        <style>
          .actionable-insights {
            padding: 1rem 0;
          }
          .audience-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
          }
          .audience-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .audience-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .audience-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.25rem 1.5rem;
            color: white;
          }
          .audience-card:nth-child(1) .audience-header {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          }
          .audience-card:nth-child(2) .scenario-header {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          }
          .audience-header h4 {
            margin: 0;
            font-size: 1.35rem;
            color: white;
          }
          .recommendations {
            padding: 1.5rem;
            background: white;
          }
          .recommendation-item {
            display: flex;
            gap: 1rem;
            margin: 0.75rem 0;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 6px;
            border-left: 4px solid #667eea;
          }
          .recommendation-item .number {
            font-weight: bold;
            color: #667eea;
            flex-shrink: 0;
          }
          .recommendation-item .text {
            color: #333;
            line-height: 1.6;
          }
          @media (max-width: 768px) {
            .audience-cards {
              gap: 1.25rem;
            }
          }
        </style>
      </div>
    """

L3_1_PATCHES["slides.34.content"] = r"""
      <div class="further-resources">
        <div class="intro-text">
          <span class="intro-icon">📚</span>
          <p>Want to explore the impact of climate change on Bordeaux in greater depth? The following curated resources cover scientific research, industry developments, media coverage, and practical case studies to help you build a comprehensive knowledge base.</p>
        </div>

        <!-- Scientific Research -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">🔬</span>
            Scientific Research
          </h4>
          <div class="resource-list">
            <div class="resource-item">
              <div class="resource-header">
                <h5>IPCC Sixth Assessment Report: Wine Sector</h5>
                <span class="difficulty-badge advanced">Advanced</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">📄 International Report</span>
              </div>
              <p class="resource-description">The latest assessment from the Intergovernmental Panel on Climate Change (IPCC) on the wine industry</p>
              <a href="https://www.ipcc.ch/" target="_blank" class="resource-link">🔗 Go to resource</a>
            </div>

            <div class="resource-item">
              <div class="resource-header">
                <h5>Climate Change and Wine: A Review</h5>
                <span class="difficulty-badge expert">Expert</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">📚 Academic Review</span>
              </div>
              <p class="resource-description">A comprehensive literature review on the impact of climate change on wine published in the Journal of Wine Economics</p>
            </div>
          </div>
        </div>

        <!-- Industry Developments -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">📊</span>
            Industry Developments
          </h4>
          <div class="resource-list">
            <div class="resource-item">
              <div class="resource-header">
                <h5>Bordeaux 2050: Sustainable Roadmap</h5>
                <span class="difficulty-badge intermediate">Intermediate</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🎯 Strategic Planning</span>
              </div>
              <p class="resource-description">The 2050 carbon-neutral roadmap published by the Bordeaux Wine Trade Council (CIVB)</p>
            </div>

            <div class="resource-item">
              <div class="resource-header">
                <h5>Annual Climate Report by Liv-ex</h5>
                <span class="difficulty-badge intermediate">Intermediate</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">💼 Market Analysis</span>
              </div>
              <p class="resource-description">Annual analysis report on climate impact and market performance published by Liv-ex</p>
            </div>
          </div>
        </div>

        <!-- Media & Documentaries -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">🎬</span>
            Media &amp; Documentaries
          </h4>
          <div class="resource-list">
            <div class="resource-item">
              <div class="resource-header">
                <h5>Terroir in Transition</h5>
                <span class="difficulty-badge beginner">Beginner</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🎥 Documentary</span>
              </div>
              <p class="resource-description">Visiting multiple Bordeaux estates and documenting their practices in response to climate challenges</p>
            </div>

            <div class="resource-item">
              <div class="resource-header">
                <h5>The Wine Economist Podcast: Climate Series</h5>
                <span class="difficulty-badge intermediate">Intermediate</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🎙️ Podcast</span>
              </div>
              <p class="resource-description">A climate change interview series hosted by wine economist Mike Veseth</p>
            </div>
          </div>
        </div>

        <!-- Practical Case Studies -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">🏰</span>
            Practical Case Studies
          </h4>
          <div class="resource-list">
            <div class="resource-item featured">
              <div class="resource-header">
                <h5>Château Pontet-Canet: Organic Pioneer</h5>
                <span class="difficulty-badge intermediate">Intermediate</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🍷 Estate Case Study</span>
              </div>
              <p class="resource-description">A detailed analysis of Pontet-Canet's full journey from conventional to organic and biodynamic farming</p>
            </div>

            <div class="resource-item featured">
              <div class="resource-header">
                <h5>Smith Haut Lafitte: Carbon Negative</h5>
                <span class="difficulty-badge intermediate">Intermediate</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🍷 Estate Case Study</span>
              </div>
              <p class="resource-description">The innovative practices of the first Bordeaux Classed Growth to achieve "carbon negative" status</p>
            </div>
          </div>
        </div>

        <div class="learning-path">
          <h4>💡 Recommended Learning Path</h4>
          <div class="path-steps">
            <div class="path-step">
              <span class="step-number">1</span>
              <span class="step-text"><strong>Beginner:</strong> Start with documentaries to build an intuitive understanding</span>
            </div>
            <div class="path-step">
              <span class="step-number">2</span>
              <span class="step-text"><strong>Intermediate:</strong> Read estate case studies to understand real-world response strategies</span>
            </div>
            <div class="path-step">
              <span class="step-number">3</span>
              <span class="step-text"><strong>Deep Dive:</strong> Follow industry developments and market analysis reports</span>
            </div>
            <div class="path-step">
              <span class="step-number">4</span>
              <span class="step-text"><strong>Professional:</strong> Study IPCC reports and academic reviews</span>
            </div>
          </div>
        </div>

        <style>
          .further-resources {
            padding: 1rem 0;
          }
          .intro-text {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            color: white;
          }
          .intro-icon {
            font-size: 2.5rem;
            flex-shrink: 0;
          }
          .intro-text p {
            margin: 0;
            line-height: 1.6;
            font-size: 1.05rem;
          }
          .resource-category {
            margin-bottom: 2rem;
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          }
          .category-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin: 0 0 1.25rem 0;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid #e0e0e0;
            color: #333;
            font-size: 1.3rem;
          }
          .category-icon {
            font-size: 1.5rem;
          }
          .resource-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .resource-item {
            background: #f8f9fa;
            padding: 1.25rem;
            border-radius: 10px;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .resource-item:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .resource-item.featured {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            border-left-color: #f5576c;
          }
          .resource-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
            gap: 1rem;
          }
          .resource-header h5 {
            margin: 0;
            color: #333;
            font-size: 1.1rem;
            flex: 1;
          }
          .difficulty-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            white-space: nowrap;
          }
          .difficulty-badge.beginner {
            background: #4CAF50;
            color: white;
          }
          .difficulty-badge.intermediate {
            background: #2196F3;
            color: white;
          }
          .difficulty-badge.advanced {
            background: #FF9800;
            color: white;
          }
          .difficulty-badge.expert {
            background: #9C27B0;
            color: white;
          }
          .resource-meta {
            margin-bottom: 0.5rem;
          }
          .resource-type {
            display: inline-block;
            color: #666;
            font-size: 0.9rem;
            font-weight: 500;
          }
          .resource-description {
            color: #555;
            line-height: 1.6;
            margin: 0.5rem 0;
          }
          .resource-link {
            display: inline-block;
            margin-top: 0.5rem;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }
          .resource-link:hover {
            color: #764ba2;
            text-decoration: underline;
          }
          .learning-path {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
            padding: 1.5rem;
            border-radius: 12px;
            margin-top: 2rem;
          }
          .learning-path h4 {
            margin: 0 0 1rem 0;
            color: #333;
            font-size: 1.2rem;
          }
          .path-steps {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .path-step {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: rgba(255,255,255,0.7);
            padding: 0.75rem 1rem;
            border-radius: 8px;
          }
          .step-number {
            background: #667eea;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
          }
          .step-text {
            color: #333;
            line-height: 1.5;
          }
          .step-text strong {
            color: #667eea;
          }
          @media (max-width: 768px) {
            .resource-header {
              flex-direction: column;
              align-items: flex-start;
            }
            .intro-text {
              flex-direction: column;
              text-align: center;
            }
          }
        </style>
      </div>
    """


def patch_l3_1():
    path = os.path.join(BASE, 'l3-1.json')
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for k, v in L3_1_PATCHES.items():
        if k in data and data[k].startswith('[ZH]'):
            data[k] = v
            print(f'  patched: {k}')
        else:
            print(f'  skip (no [ZH] prefix or key missing): {k}')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved: {path}')


# ─────────────────────────── l4-12 full translation ──────────────────

L4_12_EN = {
    "slides.0.title": "Learning Objectives",
    "slides.1.title": "Chapter 1",
    "slides.1.subtitle": "Process",
    "slides.2.title": "Project Process & Research Design",
    "slides.2.content": r"""
        <h3>📋 Research Topic Selection</h3>
        <div class="project-topic-widget">
          <h4>Three Main Research Directions</h4>
          <div class="topic-categories">
            <input type="radio" name="topic" id="topic-case" checked>
            <label for="topic-case">
              <strong>Corporate Case Study</strong>
              <span>Example: "Market Positioning Strategy and Brand Revitalisation of Bordeaux Cru Bourgeois Château X"</span>
              <span>Requirements: On-site interviews, financial data, SWOT (Strengths, Weaknesses, Opportunities, Threats) / 5 Forces analysis</span>
            </label>
            
            <input type="radio" name="topic" id="topic-region">
            <label for="topic-region">
              <strong>Appellation Strategy Research</strong>
              <span>Example: "Saint-Émilion Under Climate Change: Grape Variety Adjustment and Sustainable Development"</span>
              <span>Requirements: Historical data, policy analysis, stakeholder interviews</span>
            </label>
            
            <input type="radio" name="topic" id="topic-innovation">
            <label for="topic-innovation">
              <strong>Innovative Technology Assessment</strong>
              <span>Example: "The Impact of Precision Winemaking Technology on Style Consistency in Bordeaux Classed Growths"</span>
              <span>Requirements: Experimental data, quality evaluation, cost-benefit analysis</span>
            </label>
          </div>
          <div class="topic-content">
            <div data-topic="case">
              <h5>Key Elements of a Corporate Case Study</h5>
              <ul>
                <li><strong>Research Background</strong>: Estate history, appellation positioning, current brand status</li>
                <li><strong>Problem Definition</strong>: Challenges faced (market shrinkage / intensifying competition / generational succession)</li>
                <li><strong>Data Collection</strong>: Interviews with estate owner/winemaker, financial statements (past 5 years), market research</li>
                <li><strong>Analytical Framework</strong>: SWOT (Strengths, Weaknesses, Opportunities, Threats – internal strengths/weaknesses), Porter's Five Forces (external competition), PESTEL (Political, Economic, Social, Technological, Environmental, Legal – macro environment)</li>
                <li><strong>Proposed Solutions</strong>: Short-term (1–2 years) and long-term (5–10 years) strategic recommendations</li>
                <li><strong>Expected Outcomes</strong>: Revenue growth projections, brand value enhancement, market share changes</li>
              </ul>
            </div>
            <div data-topic="region">
              <h5>Steps for Appellation Strategy Research</h5>
              <ul>
                <li><strong>Historical Context</strong>: Appellation AOC (Appellation d'Origine Contrôlée) evolution, changes in vineyard area, economic contribution</li>
                <li><strong>Terroir Analysis</strong>: Climate trends (temperature/rainfall/extreme events), soil adaptability, water resource management</li>
                <li><strong>Industry Structure</strong>: Number of producers, cooperative share, concentration HHI (Herfindahl-Hirschman Index)</li>
                <li><strong>Policy Environment</strong>: INAO (Institut National de l'Origine et de la Qualité) regulations, subsidy policies, environmental standards</li>
                <li><strong>Stakeholder Interviews</strong>: Producer associations, government officials, wholesalers, retailers</li>
                <li><strong>Strategic Recommendations</strong>: Variety adjustment (e.g. increasing Petit Verdot), irrigation policy, promotion of sustainability certifications</li>
              </ul>
            </div>
            <div data-topic="innovation">
              <h5>Methods for Innovative Technology Assessment</h5>
              <ul>
                <li><strong>Technology Description</strong>: Precision winemaking / optical sorting / micro-oxygenation / ultrasonic ageing, etc.</li>
                <li><strong>Experimental Design</strong>: Control group (traditional method) vs. experimental group (innovative technology), sample size ≥30</li>
                <li><strong>Quality Evaluation</strong>: Sensory scoring (SAT system – Systematic Approach to Tasting), chemical analysis (phenolics/volatile acidity/colour density)</li>
                <li><strong>Style Consistency</strong>: Multi-vintage comparison, coefficient of variation CV (Coefficient of Variation) &lt; 10% preferred</li>
                <li><strong>Cost-Benefit Analysis</strong>: Initial investment, annual operating costs, ROI (Return on Investment) payback period (typically 5–7 years)</li>
                <li><strong>Market Acceptance</strong>: Consumer blind tasting, expert review, media coverage analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🔬 Research Methodology</h3>
        <p><strong>Mixed Methods</strong>: Quantitative data + Qualitative interviews</p>
        <ul>
          <li><strong>Quantitative Methods</strong>:
            <ul>
              <li>Financial Analysis: ROI, gross margin, asset turnover, current ratio</li>
              <li>Market Data: Sales trends, price elasticity, market share</li>
              <li>Statistical Modelling: Regression analysis (price drivers), time series (sales forecasting)</li>
              <li>Quality Data: Sensory scores, chemical indicators, vintage ratings</li>
            </ul>
          </li>
          <li><strong>Qualitative Methods</strong>:
            <ul>
              <li>Semi-structured Interviews: Prepare 15–20 open-ended questions, record and transcribe</li>
              <li>Focus Groups: Invite 6–8 stakeholders for in-depth discussion</li>
              <li>Case Studies: Benchmarking analysis (select 2–3 comparable estates/appellations)</li>
              <li>Literature Review: Academic papers, industry reports, policy documents</li>
            </ul>
          </li>
          <li><strong>Data Triangulation</strong>: Cross-verification from multiple sources to enhance the credibility of conclusions</li>
        </ul>

        <h3>📊 Data Collection &amp; Processing</h3>
        <div class="report-structure-checklist">
          <h4>Data Sources Checklist</h4>
          <label><input type="checkbox"><span><strong>Primary Data</strong>: Interview recordings / questionnaire surveys / field observation notes</span></label>
          <label><input type="checkbox"><span><strong>Secondary Data</strong>: Estate annual reports / appellation statistics / market research reports</span></label>
          <label><input type="checkbox"><span><strong>Financial Data</strong>: Income statements / balance sheets / cash flow statements (past 5 years)</span></label>
          <label><input type="checkbox"><span><strong>Market Data</strong>: Liv-ex prices / Wine-Searcher retail prices / auction records</span></label>
          <label><input type="checkbox"><span><strong>Quality Data</strong>: Parker/JR/Decanter scores / blind tasting results</span></label>
          <label><input type="checkbox"><span><strong>Climate Data</strong>: Météo France / appellation weather stations / Copernicus satellite data</span></label>
        </div>
        <p><strong>Data Processing Tools</strong>:</p>
        <ul>
          <li><strong>Statistical Analysis</strong>: R (tidyverse/ggplot2) or Python (pandas/scikit-learn)</li>
          <li><strong>Qualitative Analysis</strong>: NVivo / MAXQDA (coding and thematic analysis)</li>
          <li><strong>Visualisation</strong>: Tableau/Power BI/D3.js</li>
          <li><strong>Reference Management</strong>: Zotero/Mendeley (automatic citation formatting)</li>
        </ul>

        <h3>✅ Research Ethics &amp; Limitations</h3>
        <ul>
          <li><strong>Informed Consent</strong>: Explain the research purpose before interviews, sign consent forms</li>
          <li><strong>Anonymisation</strong>: Anonymise sensitive financial data (e.g. use percentages instead of absolute values)</li>
          <li><strong>Conflict of Interest Declaration</strong>: Disclose clearly if receiving sponsorship from any estate</li>
          <li><strong>Research Limitations</strong>: Insufficient sample size / time constraints / data availability issues</li>
        </ul>
      """,
    "slides.3.title": "Chapter 2",
    "slides.3.subtitle": "Presentation",
    "slides.4.title": "Results Presentation & Report Writing",
    "slides.4.content": r"""
        <h3>📝 Report Structure Standards</h3>
        <p><strong>Diploma Research Report</strong> typical length: <strong>8,000–10,000 words</strong> (excluding appendices)</p>
        <div class="report-structure-checklist">
          <h4>Complete Structure Checklist</h4>
          <label><input type="checkbox"><span><strong>Cover Page</strong>: Title, author, date, word count</span></label>
          <label><input type="checkbox"><span><strong>Abstract</strong>: 250–300 words, covering research question/method/key findings/conclusions</span></label>
          <label><input type="checkbox"><span><strong>Table of Contents</strong>: Auto-generated, with page numbers and list of figures/tables</span></label>
          <label><input type="checkbox"><span><strong>Chapter 1: Introduction</strong>: Background, research question, objectives, significance (800–1,000 words)</span></label>
          <label><input type="checkbox"><span><strong>Chapter 2: Literature Review</strong>: Theoretical framework, existing research, research gap (1,500–2,000 words)</span></label>
          <label><input type="checkbox"><span><strong>Chapter 3: Research Methodology</strong>: Data sources, analytical tools, sample description (1,000–1,200 words)</span></label>
          <label><input type="checkbox"><span><strong>Chapter 4: Findings</strong>: Data presentation, chart analysis, key insights (2,500–3,000 words)</span></label>
          <label><input type="checkbox"><span><strong>Chapter 5: Discussion</strong>: Interpretation of results, theoretical dialogue, practical implications (1,500–2,000 words)</span></label>
          <label><input type="checkbox"><span><strong>Chapter 6: Conclusions &amp; Recommendations</strong>: Key findings, strategic recommendations, future research directions (800–1,000 words)</span></label>
          <label><input type="checkbox"><span><strong>References</strong>: Harvard / APA (American Psychological Association) format, minimum 30–40 references</span></label>
          <label><input type="checkbox"><span><strong>Appendices</strong>: Interview questionnaires, raw data tables, supplementary charts</span></label>
        </div>

        <h3>📊 Chart Design Principles</h3>
        <p><strong>Visualisation Golden Rule</strong>: At least 1 chart per 1,000 words</p>
        <ul>
          <li><strong>Line Chart</strong>:
            <ul>
              <li>Use: Time-series data (sales / price / score changes)</li>
              <li>Example: "Pauillac Classed Growth Average Price Index, 2010–2024"</li>
              <li>Tip: Add confidence intervals (95% CI), annotate key events (e.g. 2012 frost)</li>
            </ul>
          </li>
          <li><strong>Bar Chart</strong>:
            <ul>
              <li>Use: Category comparisons (different appellations / vintages / estates)</li>
              <li>Example: "En Primeur Release Prices of the Five First Growths, Vintage 2020"</li>
              <li>Tip: Sort in descending order, colour-code to highlight key estates</li>
            </ul>
          </li>
          <li><strong>Scatter Plot</strong>:
            <ul>
              <li>Use: Correlation between two variables (score vs. price / temperature vs. alcohol)</li>
              <li>Example: "Correlation Analysis of Parker Score and Liv-ex Price (R² = 0.82)"</li>
              <li>Tip: Add regression line, label outliers</li>
            </ul>
          </li>
          <li><strong>Heatmap</strong>:
            <ul>
              <li>Use: Multi-dimensional data matrix (vintage × estate × score)</li>
              <li>Example: "Heatmap of Médoc Eight Major Estates Score Performance, 2000–2020"</li>
              <li>Tip: Choose an appropriate colour scale (red-yellow-green or single-colour gradient)</li>
            </ul>
          </li>
          <li><strong>Box Plot</strong>:
            <ul>
              <li>Use: Distribution comparison (price dispersion across different appellations)</li>
              <li>Example: "Price Distribution of Left Bank vs. Right Bank Classed Growths"</li>
              <li>Tip: Show median, interquartile range, and extreme values</li>
            </ul>
          </li>
        </ul>

        <h3>✍️ Academic Writing Techniques</h3>
        <p><strong>Avoid common mistakes</strong>:</p>
        <ul>
          <li>❌ <strong>Overly subjective</strong>: "This wine tastes wonderful" → ✅ "The sensory score reached 18/20, displaying a classic Pauillac profile"</li>
          <li>❌ <strong>Lack of data support</strong>: "Market response was positive" → ✅ "Annual sales growth of 23%, market share rose from 8% to 11%"</li>
          <li>❌ <strong>Charts without titles</strong>: → ✅ "Figure 3.2: Export Volume Trend of Saint-Émilion Grand Cru, 2015–2024"</li>
          <li>❌ <strong>Inconsistent citation format</strong>: → ✅ Use Harvard format consistently: "(Johnson, 2022)"</li>
          <li>❌ <strong>Overly definitive conclusions</strong>: "This proves X" → ✅ "The data supports hypothesis X (p &lt; 0.05), but further verification is still needed"</li>
        </ul>
        <p><strong>Consistency of professional terminology</strong>: Establish a Glossary to ensure uniformity throughout the text</p>
        <ul>
          <li>En Primeur (not En Premier or Primeur)</li>
          <li>AOC (Appellation d'Origine Contrôlée) / AOP (Appellation d'Origine Protégée) – define the abbreviation when first used</li>
          <li>Château (not Chateau; retain accent marks)</li>
        </ul>

        <h3>🎨 Narrative &amp; Persuasiveness</h3>
        <p><strong>Storytelling with data</strong>: Transform dry figures into compelling narratives</p>
        <p><em>Example</em>: "The 2015 frost devastated Saint-Émilion, causing yields to plummet by 40%. Yet Château Pavie, through precise vineyard management, kept losses to within 25%, and its 2015 vintage even received a 98-point Parker score, with market prices rising counter-cyclically by 15%. This case highlights the critical importance of <strong>risk management capability</strong> for Bordeaux's top estates…"</p>
        <p><strong>Logical chain</strong>: Open each paragraph with a "Topic Sentence" and close with a "Transition Sentence"</p>
        <p><strong>Visual hierarchy</strong>: Use bold, italics, and underlines to emphasise key terms, but avoid overuse</p>
      """,
    "slides.5.title": "Chapter 3",
    "slides.5.subtitle": "Defence",
    "slides.6.title": "Oral Defence & Professional Presentation",
    "slides.6.content": r"""
        <h3>🎤 Presentation Structure Design</h3>
        <p><strong>Time Allocation</strong> (example: 20-minute presentation):</p>
        <div class="defense-prep-scorecard">
          <h4>Presentation Time Plan</h4>
          <label><input type="checkbox"><span><strong>Opening (2 minutes)</strong>: Self-introduction, research background, core question</span></label>
          <label><input type="checkbox"><span><strong>Literature &amp; Methodology (3 minutes)</strong>: Theoretical framework, research design, data sources</span></label>
          <label><input type="checkbox"><span><strong>Key Findings (8 minutes)</strong>: 3–4 key insights, each with supporting charts</span></label>
          <label><input type="checkbox"><span><strong>Discussion &amp; Recommendations (5 minutes)</strong>: Interpretation of results, strategic recommendations, research limitations</span></label>
          <label><input type="checkbox"><span><strong>Closing (2 minutes)</strong>: Summary of contributions, acknowledgements, open Q&amp;A</span></label>
        </div>
        <p><strong>Slide Design Principles</strong>:</p>
        <ul>
          <li><strong>6×6 Rule</strong>: No more than 6 lines per slide, no more than 6 words per line</li>
          <li><strong>Visual-first</strong>: Charts should account for 60–70%, text only for titles and key terms</li>
          <li><strong>Consistent colour palette</strong>: Primary colour (e.g. Bordeaux wine red) + supporting colours (grey tones/gold)</li>
          <li><strong>Font sizes</strong>: Title ≥28pt, body text ≥20pt (legible from the back of the room)</li>
          <li><strong>Total slides</strong>: Approx. 15–20 (for a 20-minute presentation); avoid flipping pages too quickly</li>
        </ul>

        <h3>💬 Q&amp;A Response Strategies</h3>
        <p><strong>Common question types and response techniques</strong>:</p>
        <ul>
          <li><strong>Methodology Challenges</strong>:
            <ul>
              <li>Question: "Why choose mixed methods rather than purely quantitative?"</li>
              <li>Response: "Quantitative data provides objective trends, but qualitative interviews reveal the <strong>causal mechanisms</strong>. For example, financial data shows a 15% revenue decline, but interviews revealed it was caused by <strong>changes in distribution channels</strong> – something pure numbers cannot capture."</li>
              <li>Tip: Cite specific examples and demonstrate the <strong>complementary value</strong> of the methodology</li>
            </ul>
          </li>
          <li><strong>Data Source Challenges</strong>:
            <ul>
              <li>Question: "Is the sample size sufficient?"</li>
              <li>Response: "I interviewed 12 estate owners and 8 wholesalers. While this doesn't match the scale of a large survey, it has achieved <strong>theoretical saturation</strong> for qualitative research. Key themes stopped generating new content after the 8th or 9th interview."</li>
              <li>Tip: Acknowledge limitations but emphasise the <strong>depth advantage of the research</strong></li>
            </ul>
          </li>
          <li><strong>Over-generalisation of Conclusions</strong>:
            <ul>
              <li>Question: "Can your findings be generalised to the entire Bordeaux region?"</li>
              <li>Response: "My research focuses on Pauillac classed growths, so the conclusions <strong>should not be over-generalised</strong>. However, the mechanisms (e.g. the relationship between brand premium and scores) may apply to other appellations and warrant further verification."</li>
              <li>Tip: Respond with humility but highlight the <strong>theoretical contribution</strong></li>
            </ul>
          </li>
          <li><strong>Practical Feasibility</strong>:
            <ul>
              <li>Question: "Would estates actually adopt your recommendations?"</li>
              <li>Response: "I have already shared preliminary results with Château X, and they are very interested in the <strong>digital marketing strategy</strong> and plan a pilot in 2025. Of course, implementation needs to account for costs and cultural resistance – I discuss the <strong>change management</strong> pathway in Section 5.3 of my report."</li>
              <li>Tip: Demonstrate interaction with the industry and provide <strong>implementation details</strong></li>
            </ul>
          </li>
        </ul>

        <h3>🎯 Handling Difficult Questions</h3>
        <p><strong>When you don't know the answer</strong>:</p>
        <ul>
          <li>✅ <strong>Be honest</strong>: "That's a great question. I don't currently have sufficient data to support this angle, but it is an important direction for future research."</li>
          <li>✅ <strong>Partial response</strong>: "While I haven't directly studied this variable, based on the literature…"</li>
          <li>✅ <strong>Reframe</strong>: "If we interpret this question from another angle, my data shows…"</li>
          <li>❌ <strong>Avoid</strong>: Fabricating data, dodging questions, arguing with the examiner</li>
        </ul>

        <h3>🌟 Building a Professional Image</h3>
        <div class="defense-prep-scorecard">
          <h4>Defence Day Checklist</h4>
          <label><input type="checkbox"><span><strong>Dress code</strong>: Business formal (suit or smart outfit); avoid overly casual attire</span></label>
          <label><input type="checkbox"><span><strong>Time management</strong>: Arrive 15 minutes early; test equipment (projector/microphone)</span></label>
          <label><input type="checkbox"><span><strong>Backup plan</strong>: Prepare a USB drive and cloud backup (in case of file corruption)</span></label>
          <label><input type="checkbox"><span><strong>Body language</strong>: Maintain eye contact; avoid turning your back to the audience; use gestures to emphasise key points</span></label>
          <label><input type="checkbox"><span><strong>Speaking pace</strong>: Approx. 120–140 words per minute; be mindful of pauses (allow the audience to absorb information)</span></label>
          <label><input type="checkbox"><span><strong>Professional language</strong>: Avoid casual speech; use "therefore", "specifically", etc.</span></label>
          <label><input type="checkbox"><span><strong>Notes preparation</strong>: Carry a copy of your report for quick reference to data</span></label>
          <label><input type="checkbox"><span><strong>Mindset</strong>: The examiner's purpose is <strong>academic discussion</strong>, not to catch you out</span></label>
        </div>

        <h3>📈 Post-Defence Improvements</h3>
        <p><strong>Revising the report based on feedback</strong>:</p>
        <ul>
          <li>Questions raised during the defence often point to the report's <strong>weak areas</strong></li>
          <li>Typical additions: Expanded discussion of research limitations, additional literature citations, clarification of data interpretation</li>
          <li>Revision timeline: Typically 2–4 weeks granted; re-submission requires review by the supervisor</li>
        </ul>
        <p><strong>Assessment Criteria</strong> (typical Diploma weightings):</p>
        <ul>
          <li>Written report (70%): Research design, data analysis, literature integration, writing quality</li>
          <li>Oral defence (30%): Presentation clarity, response to questions, professional attitude</li>
          <li>Pass standard: Total score ≥55/100, and written report ≥50/100</li>
        </ul>
      """,
    "slides.7.title": "Summary",
    "slides.7.content": "<p>Validate learning through hands-on output and build a practical methodology.</p>",
    "slides.8.title": "Comprehensive Quiz"
}


def patch_l4_12():
    path = os.path.join(BASE, 'l4-12.json')
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    count = 0
    for k, v in L4_12_EN.items():
        if k in data:
            data[k] = v
            count += 1
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved l4-12.json  ({count} keys updated)')


if __name__ == '__main__':
    print('=== l3-1: patching 4 keys ===')
    patch_l3_1()
    print()
    print('=== l4-12: replacing all 16 keys ===')
    patch_l4_12()
    print()
    print('Done.')
