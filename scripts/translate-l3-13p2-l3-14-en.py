"""
Translate l3-14 (38 keys) and l3-13-part2 (37 keys) to English.
Run: python scripts/translate-l3-13p2-l3-14-en.py
"""
import json, os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')

# ─────────────────────── l3-14 ───────────────────────────────────────

L3_14_EN = {
    "slides.0.title": "Course Introduction",
    "slides.0.content": r"""
      <div class="intro-content">
        <p class="intro-lead">
          Having completed the in-depth learning of Level 3, you have mastered advanced professional knowledge of Bordeaux wines. From the impact of climate change on grape growing, to how soil terroir shapes wine style, from the precise control of winemaking techniques, to the market analysis of commercial strategies — you now have a comprehensive understanding of both the science and the art of Bordeaux wine.
        </p>

        <p class="intro-context">
          This comprehensive assessment will systematically review 13 core topics, evaluating the depth of your understanding across climate science, soil terroir, winemaking techniques, food pairing, vintage analysis, business strategy, industry culture, and innovative technologies through a thorough set of questions. It will confirm that you have reached an advanced professional standard and have the knowledge base needed to progress to Level 4.
        </p>

        <h3 class="section-title">Learning Objectives for This Course</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🎓 Systematically review the Level 3 knowledge framework</h4>
            <p>Comprehensively integrate the professional concepts from 13 core topics to form a complete knowledge system</p>
          </div>

          <div class="point-item">
            <h4>🔬 Assess scientific and technical understanding</h4>
            <p>Test your grasp of scientific concepts relating to climate change, soil science, winemaking technology, and precision viticulture</p>
          </div>

          <div class="point-item">
            <h4>🍷 Examine the application of professional skills</h4>
            <p>Evaluate practical skills in food pairing, vintage analysis, drinking window assessment, and collecting strategies</p>
          </div>

          <div class="point-item">
            <h4>💼 Confirm commercial and cultural literacy</h4>
            <p>Verify your integrated understanding of market strategy, brand building, industry history, and cultural heritage</p>
          </div>

          <div class="point-item">
            <h4>✅ Confirm readiness to advance to Level 4</h4>
            <p>Use the comprehensive assessment to confirm you have the knowledge base and competency foundation to enter the Master level</p>
          </div>
        </div>

        <p class="intro-conclusion">
          Upon completing this comprehensive assessment, you will have confirmed that you have mastered all the advanced professional knowledge of Level 3 and are ready to begin the Level 4 Master-level learning.
        </p>

        <div class="course-info">
          <p><strong>Estimated completion time:</strong> 45 minutes</p>
          <p><strong>Difficulty level:</strong> Advanced Professional</p>
        </div>
      </div>
    """,
    "slides.1.title": "Level 3 Knowledge System Summary",
    "slides.1.highlights.0.title": "Professional Depth",
    "slides.1.highlights.0.content": "Review the complete framework of advanced professional knowledge",
    "slides.1.highlights.1.title": "Scientific Analysis",
    "slides.1.highlights.1.content": "Master the key points of terroir, climate, and technology",
    "slides.1.content": r"""<div class="knowledge-review l3-comprehensive">
      <p class="lead-text">Having completed the in-depth Level 3 learning, you have mastered advanced professional knowledge of Bordeaux wines. Let us systematically review these professional concepts and assess your integrated application ability.</p>
      
      <div class="knowledge-framework advanced">
        <div class="climate-science">
          <h4>🌡️ Climate Change &amp; Adaptation (L3-1)</h4>
          <div class="climate-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Scientific data:</strong> Trend analysis of a 1.7°C temperature rise in Bordeaux over the past 50 years</li>
                <li><strong>Physiological effects:</strong> The chain reaction of earlier harvests, accelerated sugar accumulation, and reduced acidity</li>
                <li><strong>Variety evolution:</strong> The growing advantage of late-ripening varieties and adjustments in traditional variety proportions</li>
                <li><strong>Adaptation strategies:</strong> Integrated solutions of shade management, precision irrigation, and variety innovation</li>
                <li><strong>Sustainability:</strong> HVE certification, carbon-neutral commitments, and agroecological practices</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Interpret climate data and predict its impact on grape quality</li>
                <li>Assess the vulnerability of different appellations to climate change</li>
                <li>Analyse the adaptation strategies of top estates and their effectiveness</li>
                <li>Understand the long-term impact of climate change on reshaping the appellation landscape</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="soil-science">
          <h4>🌍 Soil Science &amp; Terroir Expression (L3-2)</h4>
          <div class="soil-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Soil types:</strong> Physical and chemical characteristics of gravel, clay, limestone, sand, and silt</li>
                <li><strong>Water management:</strong> The impact of drainage, water retention, and root depth on grape quality</li>
                <li><strong>Minerals:</strong> The role of pH and trace elements in grape metabolism and flavour</li>
                <li><strong>Microbial communities:</strong> The relationship between soil biodiversity and terroir expression</li>
                <li><strong>Terroir philosophy:</strong> A logical framework for inferring wine style from soil characteristics</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Identify different soil types and analyse their compatibility with specific varieties</li>
                <li>Understand how soil physical and chemical characteristics influence wine style</li>
                <li>Perceive the contribution of soil to flavour through tasting experiences</li>
                <li>Evaluate soil management strategies under climate change</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="extreme-climate">
          <h4>⚠️ Extreme Vintages &amp; Climate Risk (L3-3)</h4>
          <div class="climate-risk-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Historical disasters:</strong> Lessons from the 1956 freeze, 1991 spring cold spell, and 2017 spring frost</li>
                <li><strong>Risk types:</strong> Characteristics of extreme climate events including spring frosts, hail, drought, and heavy rain</li>
                <li><strong>Protective technologies:</strong> Frost towers, hail nets, irrigation systems, and insurance mechanisms</li>
                <li><strong>Emergency measures:</strong> Vineyard management and winemaking adjustments in extreme vintages</li>
                <li><strong>Future projections:</strong> Responses to the increasing frequency of extreme weather under climate change</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Identify the characteristics and patterns of different climate risks</li>
                <li>Evaluate the cost-effectiveness of risk management measures</li>
                <li>Analyse the specific impact of extreme vintages on wine quality</li>
                <li>Develop a comprehensive risk management contingency plan</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="vineyard-management">
          <h4>🌱 Vineyard Management &amp; Organic Viticulture (L3-4)</h4>
          <div class="management-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Organic viticulture:</strong> Principles of prohibiting synthetic pesticides and promoting biodiversity</li>
                <li><strong>Biodynamics:</strong> Biodynamie philosophy, lunar calendar, and preparation applications</li>
                <li><strong>Seasonal management:</strong> Timing and techniques for pruning, tying, leaf removal, and green harvesting</li>
                <li><strong>Pest and disease control:</strong> Eco-friendly methods for controlling downy mildew and powdery mildew</li>
                <li><strong>Certification systems:</strong> Standards and differences of HVE, organic certification, and Demeter</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Understand the principles, advantages, and limitations of different farming methods</li>
                <li>Grasp the key workflow of year-round vineyard management</li>
                <li>Evaluate the quality and market value of sustainable agriculture</li>
                <li>Analyse the impact of certification systems on estate operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="winemaking-innovation">
          <h4>🍷 Winemaking &amp; Technical Innovation (L3-5)</h4>
          <div class="winemaking-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Red wine techniques:</strong> Precise control of maceration, fermentation temperature, and pressing timing</li>
                <li><strong>White wine techniques:</strong> Strategies of cold fermentation, lees contact, and MLF selection</li>
                <li><strong>Sweet wine production:</strong> Botrytis cultivation, high-sugar fermentation, and alcohol fortification timing</li>
                <li><strong>Oak barrel science:</strong> French vs American oak, toast levels, and ageing duration</li>
                <li><strong>Modern equipment:</strong> Optical sorters, temperature-controlled tanks, and micro-oxygenation technology</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Understand the mechanisms by which different winemaking techniques affect style</li>
                <li>Grasp professional knowledge of oak barrel selection and use</li>
                <li>Evaluate the contribution of modern technology to quality improvement</li>
                <li>Analyse the balancing strategy between tradition and innovation</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="blending-art">
          <h4>🎨 The Art of Blending &amp; the Winemaker's Philosophy (L3-6)</h4>
          <div class="blending-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Classic proportions:</strong> The blending logic of CS-dominant Left Bank and Merlot-dominant Right Bank</li>
                <li><strong>Variety roles:</strong> The complementary functions of CS structure, Merlot roundness, CF aromatics, and PV colour</li>
                <li><strong>Winemaker philosophy:</strong> The philosophy of masters such as Denis Dubourdieu and Michel Rolland</li>
                <li><strong>Tasting techniques:</strong> Single barrel tasting, blending trials, and the final decision-making process</li>
                <li><strong>Vintage influence:</strong> Strategies for adjusting blending proportions based on vintage characteristics</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Understand the artistic and scientific foundations of Bordeaux blending</li>
                <li>Grasp the functional roles of varieties in the blend</li>
                <li>Analyse the blending decision logic of top winemakers</li>
                <li>Be able to conduct basic blending experiments and evaluations</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="business-strategy">
          <h4>💼 Business Analysis &amp; Market Strategy (L3-9)</h4>
          <div class="business-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Value chain:</strong> Complete industry chain analysis from vineyard to consumer</li>
                <li><strong>Market segmentation:</strong> Positioning across top collector, mid-to-high-end table wine, and mass markets</li>
                <li><strong>Internationalisation:</strong> Expansion strategies for markets including China, the USA, and the UK</li>
                <li><strong>Digital transformation:</strong> E-commerce platforms, social media, and NFT innovation</li>
                <li><strong>Investment value:</strong> ROI analysis of classed growths and collecting strategies</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Analyse the business model and competitive landscape of the Bordeaux wine industry</li>
                <li>Understand the cultural differences and strategic needs of different markets</li>
                <li>Evaluate the effectiveness of brand building and market promotion</li>
                <li>Grasp the basic principles and risks of wine investment</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="food-pairing">
          <h4>🍽️ Food &amp; Wine Pairing (L3-10)</h4>
          <div class="pairing-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Pairing principles:</strong> The chemical interactions of tannins with protein, and acidity with fat</li>
                <li><strong>Classic pairings:</strong> Perfect combinations of Bordeaux reds with beef, lamb, and game</li>
                <li><strong>White wines &amp; sweet wines:</strong> Professional pairings with oysters, foie gras, and blue cheese</li>
                <li><strong>Asian cuisine:</strong> Exploring innovative pairings with Chinese, Japanese, and Thai food</li>
                <li><strong>Menu design:</strong> The logic and practice of multi-course wine pairings</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Grasp the scientific principles and sensory logic of food and wine pairing</li>
                <li>Be able to recommend appropriate Bordeaux wines for different dishes</li>
                <li>Design a professional wine pairing menu</li>
                <li>Explore the possibilities of cross-cultural innovative pairings</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="history-culture">
          <h4>📚 Industry History &amp; Culture (L3-11)</h4>
          <div class="history-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Historical development:</strong> The evolution from the Roman period and English rule to the modern industry</li>
                <li><strong>1855 Classification:</strong> The historical background of the Napoleonic era and modern controversies</li>
                <li><strong>Right Bank system:</strong> The distinctive classification features of Saint-Émilion and Pomerol</li>
                <li><strong>Cultural significance:</strong> The formation and symbolic meaning of French wine culture</li>
                <li><strong>Institutional impact:</strong> The far-reaching influence of the classification on quality, innovation, and the market</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Understand the historical context and cultural background of Bordeaux wines</li>
                <li>Analyse the meaning, value, and limitations of the classification system</li>
                <li>Evaluate the influence of historical traditions on the modern industry</li>
                <li>Appreciate the cultural depth of Bordeaux wines</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="vintage-aging">
          <h4>📊 Vintage Analysis &amp; Ageing Potential (L3-12)</h4>
          <div class="vintage-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Vintage assessment:</strong> Key moments of climate indicators, flowering/pollination, and ripening</li>
                <li><strong>Ageing characteristics:</strong> The evolution curve of tannins, acidity, fruit, and complexity</li>
                <li><strong>Drinking windows:</strong> Young drinkable phase, development phase, peak phase, and decline phase</li>
                <li><strong>Cellar conditions:</strong> The impact of temperature, humidity, and light on ageing</li>
                <li><strong>Investment strategy:</strong> Decisions on vintage selection, purchase timing, and holding period</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Grasp the key climate indicators for vintage assessment</li>
                <li>Predict the ageing potential and development curve of different wines</li>
                <li>Develop a scientific cellar management plan</li>
                <li>Evaluate the impact of vintages on investment value</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-innovation">
          <h4>🚀 Innovative Technology &amp; Future Trends (L3-13)</h4>
          <div class="innovation-summary">
            <div class="key-concepts">
              <h5>Key Concepts</h5>
              <ul>
                <li><strong>Precision viticulture:</strong> Applications of drone remote sensing, satellite imagery, and soil sensors</li>
                <li><strong>AI winemaking:</strong> Machine learning predictions and data-driven decision support systems</li>
                <li><strong>Blockchain:</strong> Product traceability, anti-counterfeiting certification, and NFT digital collecting</li>
                <li><strong>Consumer trends:</strong> Demand for low-alcohol, organic certification, and sustainable packaging</li>
                <li><strong>Future outlook:</strong> The development pathways of the Bordeaux industry from 2030 to 2050</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>Professional Competency Requirements</h5>
              <ul>
                <li>Understand the applications of modern technology in the wine industry</li>
                <li>Analyse the impact of technological innovation on quality and efficiency</li>
                <li>Evaluate the reshaping effect of consumer trends on the industry</li>
                <li>Predict the challenges and opportunities of future industry development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>""",
    "slides.1.quiz.question": "In the Level 3 course, which concept best reflects the complexity and depth of Bordeaux wines?",
    "slides.1.quiz.options.0": "The absolute influence of a single soil type",
    "slides.1.quiz.options.1": "The combined effect of climate, soil, technology, and culture",
    "slides.1.quiz.options.2": "Quality control that relies entirely on modern technology",
    "slides.1.quiz.options.3": "Adhering rigidly to traditional methods",
    "slides.1.quiz.explanation": "The Level 3 learning journey reveals that the greatness of Bordeaux wines stems from the combined effect of multiple factors: climate and terroir lay the foundations, science and technology enhance quality, winemaking artistry creates style, and history and culture endow soul. This multi-dimensional complexity is the very core appeal of Bordeaux wines.",
    "slides.3.title": "Professional Competency Assessment",
    "slides.3.highlights.0.title": "Real-World Scenarios",
    "slides.3.highlights.0.content": "Simulating the working context of professional sommeliers and consultants",
    "slides.3.highlights.1.title": "Integrated Application",
    "slides.3.highlights.1.content": "Integrating knowledge to solve real-world problems",
    "slides.3.content": r"""<div class="professional-assessment">
      <p class="lead-text">Level 3 learning is not just about mastering theoretical knowledge — it is about being able to apply it flexibly in real-world scenarios. The following four professional scenario tests assess your integrated application ability.</p>
      
      <div class="scenario-tests advanced">
        <div class="scenario-1">
          <h4>📋 Scenario 1: Senior Estate Investment Advisor</h4>
          <div class="scenario-context">
            <p><strong>Background:</strong> A high-net-worth client wishes to invest €100,000 in Bordeaux wines as a long-term investment (10–20 years) and is seeking your professional advice.</p>
            
            <div class="client-profile">
              <h5>Client Profile</h5>
              <ul>
                <li><strong>Investment budget:</strong> €100,000</li>
                <li><strong>Investment horizon:</strong> 10–20 years</li>
                <li><strong>Risk appetite:</strong> Conservative; focused on long-term capital appreciation</li>
                <li><strong>Knowledge level:</strong> Has basic knowledge but requires professional guidance</li>
                <li><strong>Objective:</strong> 50% for personal enjoyment, 50% for investment appreciation</li>
              </ul>
            </div>

            <div class="analysis-framework">
              <h5>Key Professional Analysis Points</h5>
              
              <div class="vintage-selection">
                <h6>1. Vintage Selection Strategy</h6>
                <ul>
                  <li><strong>Great vintages:</strong> 2015, 2016, 2018, 2019, 2020 – ideal climate, high scores</li>
                  <li><strong>Potential vintages:</strong> 2017 (selected lots post-spring frost), 2021 (elegant style)</li>
                  <li><strong>Vintages to avoid:</strong> 2013, 2014 (too light, lacking ageing potential)</li>
                  <li><strong>Strategy:</strong> 70% allocated to great vintages, 30% spread across potential vintages</li>
                </ul>
              </div>

              <div class="chateau-selection">
                <h6>2. Estate Selection Logic</h6>
                <ul>
                  <li><strong>Core holdings (60%):</strong> The five First Growths – best liquidity and strong value retention</li>
                  <li><strong>Growth potential (25%):</strong> Super-second châteaux (Pichon Baron, Cos d'Estournel, Léoville Las Cases)</li>
                  <li><strong>Right Bank stars (15%):</strong> Pétrus, Le Pin, Lafleur (high appreciation but slightly lower liquidity)</li>
                  <li><strong>Rationale:</strong> Balance value retention and growth, while maintaining liquidity</li>
                </ul>
              </div>

              <div class="diversification">
                <h6>3. Risk Diversification Principles</h6>
                <ul>
                  <li><strong>Appellation diversification:</strong> Left Bank 70% + Right Bank 30%</li>
                  <li><strong>Vintage diversification:</strong> Minimum 3 different vintages</li>
                  <li><strong>Estate diversification:</strong> 8–12 estates; avoid excessive concentration</li>
                  <li><strong>Purchase timing:</strong> 40% En Primeur + 60% bottled wines (reduces vintage risk)</li>
                </ul>
              </div>

              <div class="storage-management">
                <h6>4. Cellar Management Recommendations</h6>
                <ul>
                  <li><strong>Professional storage:</strong> Use London Free Port or a professional Bordeaux wine cellar</li>
                  <li><strong>Temperature control:</strong> 12–14°C constant temperature; 65–75% humidity</li>
                  <li><strong>Insurance &amp; provenance:</strong> Ensure OWC (Original Wooden Case) and perfect provenance records</li>
                  <li><strong>Regular review:</strong> Reassess the market and adjust strategy every 2 years</li>
                </ul>
              </div>

              <div class="exit-strategy">
                <h6>5. Exit Strategy Planning</h6>
                <ul>
                  <li><strong>First drinking window (5–8 years):</strong> Sell 30% to recoup initial investment</li>
                  <li><strong>Peak period (10–15 years):</strong> Gradually sell or enjoy through personal tasting</li>
                  <li><strong>Sales channels:</strong> Auction houses (Christie's, Sotheby's) or specialist merchants</li>
                  <li><strong>Tax planning:</strong> Consider tax implications across different markets</li>
                </ul>
              </div>
            </div>

            <div class="example-portfolio">
              <h5>Sample Portfolio Allocation</h5>
              <table class="investment-table">
                <thead>
                  <tr>
                    <th>Estate</th>
                    <th>Vintage</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Amount</th>
                    <th>Share</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lafite Rothschild</td>
                    <td>2016</td>
                    <td>12 btl</td>
                    <td>€1,200</td>
                    <td>€14,400</td>
                    <td>14.4%</td>
                  </tr>
                  <tr>
                    <td>Latour</td>
                    <td>2015</td>
                    <td>12 btl</td>
                    <td>€1,100</td>
                    <td>€13,200</td>
                    <td>13.2%</td>
                  </tr>
                  <tr>
                    <td>Margaux</td>
                    <td>2018</td>
                    <td>12 btl</td>
                    <td>€950</td>
                    <td>€11,400</td>
                    <td>11.4%</td>
                  </tr>
                  <tr>
                    <td>Haut-Brion</td>
                    <td>2019</td>
                    <td>12 btl</td>
                    <td>€900</td>
                    <td>€10,800</td>
                    <td>10.8%</td>
                  </tr>
                  <tr>
                    <td>Mouton Rothschild</td>
                    <td>2016</td>
                    <td>12 btl</td>
                    <td>€1,000</td>
                    <td>€12,000</td>
                    <td>12.0%</td>
                  </tr>
                  <tr>
                    <td>Pichon Baron</td>
                    <td>2018</td>
                    <td>24 btl</td>
                    <td>€220</td>
                    <td>€5,280</td>
                    <td>5.3%</td>
                  </tr>
                  <tr>
                    <td>Léoville Las Cases</td>
                    <td>2019</td>
                    <td>24 btl</td>
                    <td>€250</td>
                    <td>€6,000</td>
                    <td>6.0%</td>
                  </tr>
                  <tr>
                    <td>Pétrus</td>
                    <td>2015</td>
                    <td>6 btl</td>
                    <td>€3,500</td>
                    <td>€21,000</td>
                    <td>21.0%</td>
                  </tr>
                  <tr>
                    <td>Le Pin</td>
                    <td>2018</td>
                    <td>3 btl</td>
                    <td>€3,800</td>
                    <td>€5,920</td>
                    <td>5.9%</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>Total</strong></td>
                    <td><strong>€100,000</strong></td>
                    <td><strong>100%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="scenario-2">
          <h4>🍷 Scenario 2: Head Sommelier at a Fine Dining Restaurant</h4>
          <div class="scenario-context">
            <p><strong>Background:</strong> As head sommelier at a three-Michelin-starred restaurant, you are tasked with designing a complete wine pairing for a table of 6 for a business dinner.</p>
            
            <div class="dinner-details">
              <h5>Event Details</h5>
              <ul>
                <li><strong>Guests:</strong> 6 people (4 male, 2 female), all wine enthusiasts</li>
                <li><strong>Occasion:</strong> Important business negotiation dinner</li>
                <li><strong>Budget:</strong> Wine budget €5,000</li>
                <li><strong>Requirements:</strong> Demonstrate professionalism without being overly adventurous</li>
              </ul>
            </div>

            <div class="menu-pairing">
              <h5>Seven-Course Menu &amp; Wine Pairing Plan</h5>
              
              <div class="course-1">
                <h6>Course 1: Oysters (Gillardeau No. 3) &amp; Sea Urchin</h6>
                <p><strong>Recommended wine:</strong> Château Smith Haut Lafitte Blanc 2018</p>
                <ul>
                  <li><strong>Rationale:</strong> Sauvignon Blanc-dominant, pronounced minerality, crisp acidity</li>
                  <li><strong>Pairing logic:</strong> Acidity echoes the umami of the seafood; minerality enhances the oceanic quality of the oysters</li>
                  <li><strong>Service temperature:</strong> 8–10°C</li>
                  <li><strong>Price:</strong> Approx. €120/btl; open 2 bottles</li>
                </ul>
              </div>

              <div class="course-2">
                <h6>Course 2: Pan-fried Foie Gras with Fig &amp; Brioche</h6>
                <p><strong>Recommended wine:</strong> Château d'Yquem 2015 (half-bottle)</p>
                <ul>
                  <li><strong>Rationale:</strong> The classic pairing with botrytised sweet wine; sweetness balances fat</li>
                  <li><strong>Pairing logic:</strong> Sweetness cuts through the fat; honeyed dried apricot notes echo the fig</li>
                  <li><strong>Service temperature:</strong> 10–12°C</li>
                  <li><strong>Price:</strong> Approx. €200/half-bottle; open 3 (375ml) bottles</li>
                </ul>
              </div>

              <div class="course-3">
                <h6>Course 3: Lobster with Black Truffle Sauce</h6>
                <p><strong>Recommended wine:</strong> Château Haut-Brion Blanc 2016</p>
                <ul>
                  <li><strong>Rationale:</strong> Sémillon-dominant, full-bodied, with complexity from barrel ageing</li>
                  <li><strong>Pairing logic:</strong> The rich body matches the lobster flesh; oak aromas echo the truffle</li>
                  <li><strong>Service temperature:</strong> 12–14°C</li>
                  <li><strong>Price:</strong> Approx. €800/btl; open 1 bottle</li>
                </ul>
              </div>

              <div class="course-4">
                <h6>Course 4: Roast Squab with Wild Mushrooms &amp; Red Wine Jus</h6>
                <p><strong>Recommended wine:</strong> Château Palmer 2015 (Magnum)</p>
                <ul>
                  <li><strong>Rationale:</strong> Elegant Margaux style; high Merlot proportion (approx. 50%), fine-grained tannins</li>
                  <li><strong>Pairing logic:</strong> The tender squab flesh suits an elegant wine; earthy mushroom notes harmonise with the wine</li>
                  <li><strong>Service temperature:</strong> 16–18°C</li>
                  <li><strong>Price:</strong> Approx. €1,200/Magnum</li>
                </ul>
              </div>

              <div class="course-5">
                <h6>Course 5: Main – Charolais Beef with Bone Marrow &amp; Red Wine Sauce</h6>
                <p><strong>Recommended wine:</strong> Château Latour 2010</p>
                <ul>
                  <li><strong>Rationale:</strong> The power of Pauillac; generous tannins, now softened</li>
                  <li><strong>Pairing logic:</strong> Robust tannins bind with the beef protein; bone marrow fat softens the texture</li>
                  <li><strong>Service temperature:</strong> 17–18°C; decant 2 hours in advance</li>
                  <li><strong>Price:</strong> Approx. €1,800/btl</li>
                </ul>
              </div>

              <div class="course-6">
                <h6>Course 6: Rack of Lamb with Rosemary &amp; Garlic</h6>
                <p><strong>Recommended wine:</strong> Château Pétrus 2012</p>
                <ul>
                  <li><strong>Rationale:</strong> The Right Bank king; pure Merlot expression, velvety texture</li>
                  <li><strong>Pairing logic:</strong> The gaminess of the lamb is enveloped by Merlot's fruit; rosemary and the wine body harmonise</li>
                  <li><strong>Service temperature:</strong> 16–17°C; decant 3 hours in advance</li>
                  <li><strong>Price:</strong> Approx. €2,500/btl (2012 is relatively approachable)</li>
                </ul>
              </div>

              <div class="course-7">
                <h6>Course 7: Dessert – Raspberry Soufflé with Vanilla Ice Cream</h6>
                <p><strong>Recommended wine:</strong> Continue with Château d'Yquem 2015</p>
                <ul>
                  <li><strong>Rationale:</strong> The sweetness balances the dessert; fruit notes echo the raspberry</li>
                  <li><strong>Pairing logic:</strong> The wine must be sweeter than the dessert, or it will taste acidic</li>
                </ul>
              </div>
            </div>

            <div class="service-details">
              <h5>Key Service Points</h5>
              <ul>
                <li><strong>Presentation:</strong> Show the bottle before opening; introduce the château's story and vintage characteristics</li>
                <li><strong>Decanting strategy:</strong> Latour and Pétrus require advance decanting; whites do not need decanting</li>
                <li><strong>Glass selection:</strong> Burgundy glasses for whites; Bordeaux glasses for reds; small dessert wine glasses for sweet wines</li>
                <li><strong>Pouring rhythm:</strong> Keep pace with the food service to maintain wine temperature</li>
                <li><strong>Guest interaction:</strong> Observe guest reactions and offer tasting suggestions as appropriate</li>
              </ul>
            </div>

            <div class="cost-summary">
              <h5>Cost Summary</h5>
              <ul>
                <li>Smith Haut Lafitte Blanc 2018: €240 (2 btl)</li>
                <li>Château d'Yquem 2015 (375ml): €600 (3 btl)</li>
                <li>Haut-Brion Blanc 2016: €800 (1 btl)</li>
                <li>Château Palmer 2015 Magnum: €1,200</li>
                <li>Château Latour 2010: €1,800</li>
                <li>Château Pétrus 2012: €2,500</li>
                <li><strong>Total: €7,140</strong> (slightly over budget, but excellent value)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="scenario-3">
          <h4>🔬 Scenario 3: Estate Technical Consultant</h4>
          <div class="scenario-context">
            <p><strong>Background:</strong> A Médoc Cru Bourgeois estate is facing the challenges of climate change and is seeking a technical upgrade plan.</p>
            
            <div class="chateau-profile">
              <h5>Estate Profile</h5>
              <ul>
                <li><strong>Size:</strong> 25 hectares</li>
                <li><strong>Production:</strong> 120,000 bottles/year</li>
                <li><strong>Varieties:</strong> CS 60%, Merlot 35%, CF 5%</li>
                <li><strong>Problem:</strong> In recent years, the harvest has moved earlier, alcohol levels are too high (14.5–15%), and acidity is low</li>
                <li><strong>Budget:</strong> €500,000 for technical upgrades</li>
              </ul>
            </div>

            <div class="solution-plan">
              <h5>Integrated Solution Plan</h5>
              
              <div class="vineyard-solutions">
                <h6>Vineyard Level (Budget: €250,000)</h6>
                <ul>
                  <li><strong>Shade management system (€80,000):</strong> Retain more foliage to lower grape temperature by 2–3°C</li>
                  <li><strong>Precision irrigation (€100,000):</strong> Install soil moisture sensors; zone-based water stress control</li>
                  <li><strong>Variety trials (€30,000):</strong> Plant heat-tolerant varieties such as Arinarnoa on 1 hectare</li>
                  <li><strong>Organic transition (€40,000):</strong> 3-year transition plan to improve soil health</li>
                </ul>
              </div>

              <div class="winemaking-solutions">
                <h6>Winemaking Level (Budget: €200,000)</h6>
                <ul>
                  <li><strong>Temperature control equipment upgrade (€80,000):</strong> Precise control of fermentation temperature to preserve fruit aromatics</li>
                  <li><strong>Optical sorter (€100,000):</strong> Remove over-ripe or damaged grapes</li>
                  <li><strong>Micro-oxygenation system (€20,000):</strong> Soften tannins and enhance complexity</li>
                </ul>
              </div>

              <div class="digital-solutions">
                <h6>Digital Management (Budget: €50,000)</h6>
                <ul>
                  <li><strong>Weather monitoring stations (€10,000):</strong> Real-time monitoring of microclimate data</li>
                  <li><strong>Drone remote sensing (€20,000):</strong> Regular monitoring of vineyard health</li>
                  <li><strong>Management software (€20,000):</strong> Data analysis and decision support system</li>
                </ul>
              </div>
            </div>

            <div class="expected-outcomes">
              <h5>Expected Outcomes (3–5 years)</h5>
              <ul>
                <li><strong>Alcohol control:</strong> Reduce to 13.5–14%, achieving a more balanced and elegant profile</li>
                <li><strong>Acidity improvement:</strong> Better freshness and ageing potential maintained</li>
                <li><strong>Quality enhancement:</strong> Organic certification increases brand value by 20–30%</li>
                <li><strong>Cost-benefit:</strong> Investment recouped within 3 years; long-term competitiveness greatly enhanced</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="scenario-4">
          <h4>📚 Scenario 4: Wine Educator</h4>
          <div class="scenario-context">
            <p><strong>Background:</strong> Design a specialist Bordeaux lesson for WSET Level 3 candidates covering the three dimensions of terroir, technology, and commerce.</p>
            
            <div class="course-design">
              <h5>Course Design Framework (3 hours)</h5>
              
              <div class="module-1">
                <h6>Module 1: Terroir Fundamentals (60 minutes)</h6>
                <ul>
                  <li><strong>Climate change data:</strong> Display the 1970–2020 temperature curve and analyse its effects</li>
                  <li><strong>Soil comparison tasting:</strong> Compare Left Bank gravel vs. Right Bank clay wines</li>
                  <li><strong>Interactive element:</strong> Handle soil samples to understand physical characteristics</li>
                  <li><strong>Case study:</strong> Terroir differences between Pauillac and Pomerol</li>
                </ul>
              </div>

              <div class="module-2">
                <h6>Module 2: Technology &amp; Innovation (60 minutes)</h6>
                <ul>
                  <li><strong>Winemaking demonstration:</strong> Show winery production video; explain key steps</li>
                  <li><strong>Oak barrel experiment:</strong> Display wood chips of different toast levels; compare by smell</li>
                  <li><strong>Blending experience:</strong> Students blend CS, Merlot, and CF themselves</li>
                  <li><strong>Technology discussion:</strong> The balancing philosophy of tradition vs. modernity</li>
                </ul>
              </div>

              <div class="module-3">
                <h6>Module 3: Market &amp; Investment (30 minutes)</h6>
                <ul>
                  <li><strong>Classification system:</strong> Explain the differences between the 1855 and Saint-Émilion classifications</li>
                  <li><strong>En Primeur system:</strong> Explain how the En Primeur mechanism works</li>
                  <li><strong>Investment case study:</strong> Show price trends for top wines over the past 20 years</li>
                  <li><strong>Market trends:</strong> Analyse the different needs of the Chinese and US markets</li>
                </ul>
              </div>

              <div class="tasting-session">
                <h6>Tasting Session (30 minutes)</h6>
                <p><strong>6-wine comparative tasting:</strong></p>
                <ul>
                  <li>Wine 1: Bordeaux AOC (baseline reference)</li>
                  <li>Wine 2: Haut-Médoc (appellation upgrade)</li>
                  <li>Wine 3: Pauillac village level (Left Bank CS-dominant)</li>
                  <li>Wine 4: St-Émilion Grand Cru (Right Bank Merlot-dominant)</li>
                  <li>Wine 5: Pessac-Léognan Blanc (dry white representative)</li>
                  <li>Wine 6: Sauternes (botrytised sweet white)</li>
                </ul>
                <p><strong>Tasting focus:</strong> Terroir expression, variety characteristics, quality tier comparison</p>
              </div>
            </div>

            <div class="teaching-materials">
              <h5>Teaching Resources Preparation</h5>
              <ul>
                <li>High-resolution Bordeaux appellation map (with soil types marked)</li>
                <li>Climate change data charts (PPT)</li>
                <li>Soil samples (gravel, clay, limestone)</li>
                <li>Oak barrel toast-level samples</li>
                <li>Single-variety samples (50ml each of CS, Merlot, CF)</li>
                <li>Tasting score sheet (WSET standard)</li>
                <li>Reference book: <em>The Wines of Bordeaux</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>""",
    "slides.3.quiz.question": "When a professional sommelier designs a wine pairing for a Michelin-starred restaurant, the most important consideration is?",
    "slides.3.quiz.options.0": "Choosing the most expensive wines to demonstrate expertise",
    "slides.3.quiz.options.1": "Balancing the dish flavours, wine characteristics, and the client's budget",
    "slides.3.quiz.options.2": "Selecting only First Growth wines",
    "slides.3.quiz.options.3": "Following personal preference entirely",
    "slides.3.quiz.explanation": "A professional sommelier must take a comprehensive approach: the flavour profile of each dish, the style characteristics of each wine, the client's budget and preferences, and the formality of the occasion. The best pairing creates a harmonious experience, rather than simply pursuing famous châteaux or high prices.",
    "slides.4.title": "Level 3 Assessment Standards & Advancement Planning",
    "slides.4.highlights.0.title": "Competency Assessment",
    "slides.4.highlights.0.content": "Comprehensively evaluating professional knowledge and application ability",
    "slides.4.highlights.1.title": "Future Development",
    "slides.4.highlights.1.content": "Planning Level 4 advancement and career development pathways",
    "slides.4.content": r"""<div class="assessment-standards">
      <p class="lead-text">The comprehensive Level 3 assessment examines not just knowledge retention, but also real-world application ability and professional judgement.</p>
      
      <div class="evaluation-framework">
        <div class="knowledge-assessment">
          <h4>📚 Knowledge Proficiency Assessment (40%)</h4>
          <div class="knowledge-criteria">
            <div class="excellent-level">
              <h5>Excellent Level (90–100 points)</h5>
              <ul>
                <li><strong>Climate science:</strong> Able to interpret complex climate data and predict its impact on quality</li>
                <li><strong>Soil knowledge:</strong> Infer wine style from soil characteristics with 85%+ accuracy</li>
                <li><strong>Technical understanding:</strong> Grasp winemaking technique details and innovative technology applications</li>
                <li><strong>Business insight:</strong> Understand the industry value chain and market dynamics</li>
                <li><strong>Cultural depth:</strong> Appreciate the historical and cultural significance of Bordeaux</li>
              </ul>
            </div>
            <div class="good-level">
              <h5>Good Level (75–89 points)</h5>
              <ul>
                <li>Broadly masters the core concepts of each topic</li>
                <li>Able to explain the relationship between terroir and technology</li>
                <li>Understands business models and investment logic</li>
                <li>Some professional details need strengthening</li>
              </ul>
            </div>
            <div class="pass-level">
              <h5>Pass Level (60–74 points)</h5>
              <ul>
                <li>Holds the basic professional knowledge framework</li>
                <li>Understands key concepts but lacks depth</li>
                <li>Recommended to retake some courses to strengthen understanding</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="application-assessment">
          <h4>🎯 Application Ability Assessment (40%)</h4>
          <div class="application-criteria">
            <div class="scenario-solving">
              <h5>Scenario Problem-Solving Ability</h5>
              <ul>
                <li><strong>Investment advisor:</strong> Able to formulate a sound investment portfolio and risk management plan</li>
                <li><strong>Sommelier service:</strong> Design a professional wine pairing and deliver high-quality service</li>
                <li><strong>Technical consulting:</strong> Diagnose estate issues and propose actionable improvement plans</li>
                <li><strong>Education &amp; training:</strong> Effectively impart professional knowledge and design educational content</li>
              </ul>
            </div>
            <div class="decision-making">
              <h5>Decision-Making and Judgement Ability</h5>
              <ul>
                <li>Integrate multi-dimensional information to make professional judgements</li>
                <li>Balance theoretical knowledge with practical needs</li>
                <li>Consider cost-benefit analysis and risk management</li>
                <li>Respond flexibly to different scenarios and contexts</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="professional-attitude">
          <h4>💼 Professional Competency Assessment (20%)</h4>
          <div class="attitude-criteria">
            <ul>
              <li><strong>Lifelong learning:</strong> Maintaining a passion for keeping up with industry developments</li>
              <li><strong>Professional ethics:</strong> Honest and objective; does not exaggerate or conceal information</li>
              <li><strong>Communication skills:</strong> Articulates professional opinions clearly and adapts to different audiences</li>
              <li><strong>Cultural sensitivity:</strong> Respects the consumption habits of different cultural backgrounds</li>
              <li><strong>Innovative thinking:</strong> Finding the balance between tradition and innovation</li>
            </ul>
          </div>
        </div>

        <div class="certification-path">
          <h4>🏆 Certification &amp; Career Development</h4>
          <div class="career-options">
            <div class="industry-professional">
              <h5>Wine Industry Career Pathways</h5>
              <ul>
                <li><strong>Sommelier:</strong> Fine dining or hotel sommelier; pursue WSET Diploma or Court of Master Sommeliers</li>
                <li><strong>Trade consultant:</strong> Product manager or buying consultant for importers or retailers</li>
                <li><strong>Investment advisor:</strong> Expert at a wine investment fund or auction house</li>
                <li><strong>Estate consultant:</strong> Providing technical, marketing, or management consulting to estates</li>
                <li><strong>Education &amp; training:</strong> WSET lecturer or corporate trainer</li>
              </ul>
            </div>
            <div class="related-fields">
              <h5>Related Fields</h5>
              <ul>
                <li><strong>Media &amp; communication:</strong> Wine writer, critic, or key opinion leader (KOL)</li>
                <li><strong>Tourism planning:</strong> Wine tourism consultant or appellation tour guide</li>
                <li><strong>Event planning:</strong> Wine events and tasting evenings</li>
                <li><strong>Academic research:</strong> Research in wine culture, history, or economics</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="level-4-preview">
          <h4>🚀 Level 4 Expert Level Preview</h4>
          <div class="l4-content">
            <p class="preview-intro">After completing Level 3, you can choose to enter the Level 4 Expert course, which delves deeper into Bordeaux's top châteaux, vertical vintage tastings, and the industry's cutting edge.</p>
            <div class="l4-topics">
              <h5>Level 4 Core Topics</h5>
              <ul>
                <li><strong>In-depth studies of famous estates:</strong> The history, philosophy, and stylistic evolution of the five First Growths and the Right Bank 'Big Three'</li>
                <li><strong>Vertical tastings:</strong> Comparative vertical tastings of 10–20 vintages from the same estate</li>
                <li><strong>Blind tasting mastery:</strong> Advanced blind tasting techniques; identifying appellation, vintage, and quality</li>
                <li><strong>Industry frontiers:</strong> Cutting-edge discussions on climate adaptation, technological innovation, and market transformation</li>
                <li><strong>Professional projects:</strong> Independently completing an estate study, investment analysis, or educational course design</li>
              </ul>
            </div>
            <div class="l4-requirements">
              <h5>Level 4 Entry Requirements</h5>
              <ul>
                <li>Score of 75 or above on the Level 3 comprehensive assessment</li>
                <li>Have tasted at least 50 Bordeaux wines</li>
                <li>Basic blind tasting experience</li>
                <li>Clear goals and enthusiasm for advanced professional development</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="final-recommendations">
          <h4>📝 Study Recommendations &amp; Resources</h4>
          <div class="study-resources">
            <div class="books">
              <h5>Recommended Reading</h5>
              <ul>
                <li><strong>Classic reference:</strong> <em>Bordeaux</em> by Robert Parker (comprehensive reference)</li>
                <li><strong>Professional depth:</strong> <em>The Wines of Bordeaux</em> by Clive Coates MW</li>
                <li><strong>Technical side:</strong> <em>Handbook of Enology</em> by Pascal Ribéreau-Gayon</li>
                <li><strong>Investment side:</strong> <em>Liquid Gold</em> by Jancis Robinson MW</li>
              </ul>
            </div>
            <div class="websites">
              <h5>Online Resources</h5>
              <ul>
                <li><strong>Official website:</strong> CIVB (Bordeaux Wine Trade Council)</li>
                <li><strong>Scores &amp; reviews:</strong> Wine Advocate, Decanter, James Suckling</li>
                <li><strong>Market data:</strong> Wine-Searcher, Liv-ex</li>
                <li><strong>Academic journal:</strong> Journal of Wine Economics</li>
              </ul>
            </div>
            <div class="practical-activities">
              <h5>Practical Activities</h5>
              <ul>
                <li><strong>Regional travel:</strong> Plan an in-depth tour of the Bordeaux appellation, visiting famous estates</li>
                <li><strong>Tasting groups:</strong> Organise regular tasting sessions to accumulate experience</li>
                <li><strong>Industry events:</strong> Attend professional trade fairs such as Wine Expo and Vinexpo</li>
                <li><strong>Professional networking:</strong> Join a sommelier association or wine club</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>""",
    "slides.4.quiz.question": "After completing Level 3, which ability best reflects your professional level?",
    "slides.4.quiz.options.0": "Memorising all estate names and classifications",
    "slides.4.quiz.options.1": "Applying knowledge in an integrated way to solve real-world problems",
    "slides.4.quiz.options.2": "Reciting a large number of professional terms",
    "slides.4.quiz.options.3": "Focusing solely on investment returns",
    "slides.4.quiz.explanation": "The core value of Level 3 lies in developing comprehensive application ability: when faced with real-world scenarios, being able to integrate multi-dimensional knowledge of climate, soil, technology, commerce, and culture to make professional judgements and provide valuable advice. This is the true measure of professional competence.",
}


# ─────────────────────── l3-13-part2 ─────────────────────────────────

L3_13_P2_EN = {
    "slides.0.title": "Course Introduction – Part 2",
    "slides.0.content": r"""
      <div class="intro-content">
        <p class="intro-lead">
          The global wine market is facing unprecedented transformation. Younger consumers are experiencing wineries through AR virtual reality, blockchain technology safeguards the authenticity of rare wines, drought-resistant varieties respond to climate warming, and solar and wind energy are driving estates towards carbon neutrality. These trends are reshaping the future landscape of the wine industry.
        </p>

        <p class="intro-context">
          Part 2 of this course will analyse in depth the shifts in consumer trends, climate adaptation technologies, digital transformation, and Bordeaux's strategic development in a new era. From Château Mouton Rothschild's virtual tasting laboratory, to Château Smith Haut Lafitte's fully solar-powered estate, from the large-scale adoption of organic farming to biodiversity conservation programmes, we will take a comprehensive look at the future direction of the Bordeaux wine industry.
        </p>

        <h3 class="section-title">Learning Objectives for This Course</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📱 Analyse consumer trend shifts</h4>
            <p>Understand how younger generations, digital natives, health consciousness, and sustainable consumption are transforming the wine market</p>
          </div>

          <div class="point-item">
            <h4>🌡️ Master climate adaptation technologies</h4>
            <p>Learn innovative adaptive strategies such as drought-resistant varieties, smart irrigation, diversified cultivation, and carbon-neutral programmes</p>
          </div>

          <div class="point-item">
            <h4>💻 Understand the elements of digital transformation</h4>
            <p>Grasp key technologies including VR/AR experiences, blockchain anti-counterfeiting, e-commerce platforms, and social media marketing</p>
          </div>

          <div class="point-item">
            <h4>🌟 Envision Bordeaux's future development</h4>
            <p>Analyse Bordeaux's strategy and vision in maintaining its traditional strengths, embracing sustainable development, and expanding into emerging markets</p>
          </div>
        </div>

        <p class="intro-conclusion">
          After completing this section, you will have a comprehensive understanding of how the Bordeaux wine industry faces future challenges, and how innovation and tradition together shape the industry's tomorrow.
        </p>

        <div class="course-info">
          <p><strong>Estimated study time:</strong> 35 minutes</p>
          <p><strong>Difficulty level:</strong> Advanced Professional</p>
        </div>
      </div>
    """,
    "slides.1.title": "Consumer Trends & Market Innovation",
    "slides.1.subtitle": "The Consumer Experience Revolution in the Digital Age",
    "slides.2.title": "Chapter 4 Quiz: Consumer Trends & Market Innovation",
    "slides.3.title": "Digital Consumer Experience",
    "slides.3.content": r"""
      <div class="chapter-content">
        <div class="consumer-trends">
          <h3>📱 Digital Consumer Experience</h3>
          <div class="digital-experience">
            <div class="digital-platforms">
              <h4>Intelligent Tasting Technology</h4>
              <div class="tasting-technology">
                <div class="tech-application">
                  <h5>🍷 AR/VR Wine Tasting Experiences</h5>
                  <div class="immersive-experience">
                    <div class="ar-applications">
                      <h6>Augmented Reality (AR) Applications</h6>
                      <p>• <strong>Smart label recognition:</strong> Scan the label to instantly access detailed product information<br>
                      • <strong>Virtual estate tours:</strong> Experience Bordeaux estate views from home<br>
                      • <strong>Winemaking process visualisation:</strong> 3D visualisation of the production process<br>
                      • <strong>Food pairing suggestions:</strong> Real-time recommendation of the best food pairings</p>
                    </div>
                    <div class="vr-applications">
                      <h6>Virtual Reality (VR) Experiences</h6>
                      <p>• <strong>Immersive estate tours:</strong> Fully immersive virtual estate visits<br>
                      • <strong>Historical scene recreation:</strong> Recreating historic moments of Bordeaux wine<br>
                      • <strong>Expert-guided tastings:</strong> Virtual master sommeliers providing personal guidance<br>
                      • <strong>Terroir experience:</strong> Sensing the terroir characteristics of different appellations</p>
                    </div>
                  </div>
                </div>

                <div class="tech-application">
                  <h5>🤖 AI Personalised Recommendations</h5>
                  <div class="personalized-recommendations">
                    <div class="recommendation-system">
                      <h6>Smart Recommendation Algorithms</h6>
                      <p>• <strong>Taste preference analysis:</strong> Analyse personal preferences based on drinking history<br>
                      • <strong>Collaborative filtering:</strong> Recommend suitable wines based on similar users<br>
                      • <strong>Deep learning:</strong> Learn complex preference patterns and associations<br>
                      • <strong>Contextual recommendations:</strong> Recommend wines based on occasion, mood, and weather</p>
                    </div>
                    <div class="recommendation-system">
                      <h6>Personalised Experiences</h6>
                      <p>• <strong>Tailored tasting itineraries:</strong> Design a bespoke tasting journey for every consumer<br>
                      • <strong>Dynamic price recommendations:</strong> Recommend the best value-for-money options within budget<br>
                      • <strong>Learning progress tracking:</strong> Track progress in wine knowledge learning<br>
                      • <strong>Community interaction:</strong> Connect wine lovers with similar interests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="digital-marketing">
              <h4>📲 Digital Marketing Innovation</h4>
              <div class="marketing-innovation">
                <div class="channel-innovation">
                  <h5>Social Media Strategy</h5>
                  <div class="social-media-strategy">
                    <div class="platform-specific">
                      <h6>Differentiated Platform Operations</h6>
                      <p>• <strong>Instagram visual marketing:</strong> Beautiful estate scenery and lifestyle content<br>
                      • <strong>TikTok short video:</strong> Fast-paced tasting tutorials and engaging content<br>
                      • <strong>LinkedIn professional network:</strong> Professional content targeting business people<br>
                      • <strong>YouTube in-depth content:</strong> Detailed educational and tasting content</p>
                    </div>
                    <div class="content-strategy">
                      <h6>Content Innovation Strategy</h6>
                      <p>• <strong>Storytelling marketing:</strong> Telling the story behind each wine<br>
                      • <strong>User-generated content:</strong> Encouraging consumers to share their tasting experiences<br>
                      • <strong>Interactive content:</strong> Polls, Q&amp;As, and live streaming interactions<br>
                      • <strong>Educational content:</strong> Providing valuable wine knowledge</p>
                    </div>
                  </div>
                </div>

                <div class="channel-innovation">
                  <h5>🛒 E-Commerce Innovation Models</h5>
                  <div class="ecommerce-innovation">
                    <div class="sales-model">
                      <h6>Subscription Services</h6>
                      <p>• <strong>Personalised wine boxes:</strong> Monthly delivery of individually curated wine selections<br>
                      • <strong>Educational experience packages:</strong> Integrated experience combining wine tasting and education<br>
                      • <strong>Limited collector editions:</strong> Exclusive limited-edition wines for members<br>
                      • <strong>Virtual tasting events:</strong> Regular online tasting sessions</p>
                    </div>
                    <div class="sales-model">
                      <h6>Live Streaming Commerce</h6>
                      <p>• <strong>Expert live tastings:</strong> Winemakers personally recommending and introducing wines<br>
                      • <strong>Real-time interactive Q&amp;A:</strong> Viewers asking questions and receiving instant answers<br>
                      • <strong>Time-limited offers:</strong> Exclusive discounts available only during live streams<br>
                      • <strong>Multi-platform broadcasting:</strong> Simultaneous broadcasting across multiple platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>🌱 Sustainable Consumption Trends</h3>
          <div class="sustainability-trends">
            <div class="eco-consciousness">
              <h4>Eco-Conscious Consumption</h4>
              <div class="eco-consumption">
                <div class="sustainable-practices">
                  <h5>♻️ Sustainable Packaging Innovation</h5>
                  <div class="packaging-innovation">
                    <div class="material-innovation">
                      <h6>Eco-Friendly Materials</h6>
                      <p>• <strong>Biodegradable corks:</strong> Fully biodegradable materials<br>
                      • <strong>Recycled glass bottles:</strong> Increased use of recycled glass<br>
                      • <strong>Plant-based labels:</strong> Compostable labels made from plant fibres<br>
                      • <strong>Minimalist design:</strong> Reducing the amount of packaging materials used</p>
                    </div>
                    <div class="design-innovation">
                      <h6>Smart Packaging Technology</h6>
                      <p>• <strong>QR code traceability:</strong> Complete product lifecycle traceability<br>
                      • <strong>Temperature-monitoring labels:</strong> Monitor temperature changes during shipping<br>
                      • <strong>Freshness indicators:</strong> Display the wine's optimal drinking state<br>
                      • <strong>Recycling guidance:</strong> Clear disposal and recycling instructions</p>
                    </div>
                  </div>
                </div>

                <div class="sustainable-practices">
                  <h5>🌍 Carbon Footprint Management</h5>
                  <div class="carbon-management">
                    <div class="carbon-tracking">
                      <h6>Carbon Emissions Tracking</h6>
                      <p>• <strong>Production carbon footprint:</strong> Detailed recording of carbon emissions from the production process<br>
                      • <strong>Transport emissions:</strong> Optimising logistics routes to reduce transport emissions<br>
                      • <strong>Packaging emissions:</strong> Assessing the environmental impact of packaging materials<br>
                      • <strong>Consumer education:</strong> Helping consumers understand a product's environmental impact</p>
                    </div>
                    <div class="carbon-offset">
                      <h6>Carbon-Neutral Strategy</h6>
                      <p>• <strong>Renewable energy:</strong> 100% renewable energy production<br>
                      • <strong>Forest protection:</strong> Investing in forest conservation and reforestation projects<br>
                      • <strong>Soil carbon sequestration:</strong> Adopting agricultural practices that increase soil carbon storage<br>
                      • <strong>Carbon offset programmes:</strong> Participating in certified carbon offset projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="transparency-demand">
              <h4>🔍 Transparency &amp; Traceability</h4>
              <div class="transparency-systems">
                <div class="traceability-tech">
                  <h5>Blockchain Traceability Technology</h5>
                  <div class="blockchain-traceability">
                    <div class="system-feature">
                      <h6>Immutable Records</h6>
                      <p>• <strong>Grape origins:</strong> Recording the exact provenance and growing conditions of the grapes<br>
                      • <strong>Winemaking process:</strong> Detailed recording of every winemaking step and parameter<br>
                      • <strong>Quality testing:</strong> Transparent recording of all quality test results<br>
                      • <strong>Certification information:</strong> Verification of the authenticity of organic, biodynamic, and other certifications</p>
                    </div>
                    <div class="system-feature">
                      <h6>Consumer Access</h6>
                      <p>• <strong>Scan-to-query:</strong> Consumers can easily access complete product information<br>
                      • <strong>Real-time updates:</strong> Real-time updates of supply chain information<br>
                      • <strong>Multi-language support:</strong> Information display supporting multiple languages<br>
                      • <strong>Mobile-friendly:</strong> Optimised mobile query experience</p>
                    </div>
                  </div>
                </div>

                <div class="traceability-tech">
                  <h5>📊 Transparency Reporting</h5>
                  <div class="transparency-reporting">
                    <div class="report-content">
                      <h6>Environmental Impact Reports</h6>
                      <p>• <strong>Water usage:</strong> Detailed water resource usage<br>
                      • <strong>Energy consumption:</strong> Energy consumption data for each production stage<br>
                      • <strong>Waste management:</strong> Detailed records of waste generation and disposal<br>
                      • <strong>Biodiversity:</strong> Impact assessment on local ecosystems</p>
                    </div>
                    <div class="report-content">
                      <h6>Social Responsibility Reports</h6>
                      <p>• <strong>Employee welfare:</strong> Employee working conditions and benefit provisions<br>
                      • <strong>Community contribution:</strong> Contribution and support to local communities<br>
                      • <strong>Fair trade:</strong> Fair trade practices with suppliers<br>
                      • <strong>Cultural preservation:</strong> Support for the protection of local cultural traditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """,
    "slides.3.highlights.0.title": "Digital Experience",
    "slides.3.highlights.0.content": "AR/VR technology and AI recommendation systems create entirely new personalised consumer experiences",
    "slides.3.highlights.1.title": "Sustainability Trends",
    "slides.3.highlights.1.content": "Eco-friendly packaging, carbon footprint management, and blockchain traceability respond to consumer concerns about sustainable development",
    "slides.4.title": "Climate Change Adaptation Technologies",
    "slides.4.subtitle": "Technology Supporting Climate Resilience",
    "slides.5.title": "Chapter 5 Quiz: Climate Change Adaptation Technologies",
    "slides.6.title": "Climate Monitoring & Prediction Systems",
    "slides.6.content": r"""
      <div class="chapter-content">
        <div class="climate-adaptation">
          <h3>🌡️ Climate Monitoring &amp; Prediction Systems</h3>
          <div class="climate-monitoring">
            <div class="prediction-systems">
              <h4>Advanced Climate Models</h4>
              <div class="climate-models">
                <div class="model-type">
                  <h5>🌪️ Extreme Weather Early Warning Systems</h5>
                  <div class="weather-warning">
                    <div class="warning-capability">
                      <h6>Multi-Timescale Early Warnings</h6>
                      <p>• <strong>Short-term warnings (1–7 days):</strong> Precise warnings for hail, frost, and extreme rainfall<br>
                      • <strong>Medium-range forecasts (1–4 weeks):</strong> Seasonal weather trend forecasts<br>
                      • <strong>Long-term projections (1–10 years):</strong> Long-term impact of climate change on appellations<br>
                      • <strong>Real-time monitoring:</strong> 24-hour continuous meteorological monitoring network</p>
                    </div>
                    <div class="warning-response">
                      <h6>Smart Response Mechanisms</h6>
                      <p>• <strong>Automatic protection activation:</strong> Protective systems activate automatically when frost is imminent<br>
                      • <strong>Emergency notifications:</strong> Send urgent alerts to all relevant personnel<br>
                      • <strong>Operational guidance:</strong> Provide specific guidance on how to respond<br>
                      • <strong>Damage assessment:</strong> Rapid assessment of losses after a weather event</p>
                    </div>
                  </div>
                </div>

                <div class="model-type">
                  <h5>📈 Long-Term Climate Trend Analysis</h5>
                  <div class="trend-analysis">
                    <div class="analysis-component">
                      <h6>Temperature Change Analysis</h6>
                      <p>• <strong>Rising annual averages:</strong> Analysing trends in average temperature change<br>
                      • <strong>Extreme value frequency:</strong> Changes in the frequency of extreme heat and cold events<br>
                      • <strong>Extended growing season:</strong> Analysis of changes in growing season length<br>
                      • <strong>Winter changes:</strong> Changing patterns of cold periods in winter</p>
                    </div>
                    <div class="analysis-component">
                      <h6>Precipitation Pattern Changes</h6>
                      <p>• <strong>Annual precipitation:</strong> Trends in total annual rainfall<br>
                      • <strong>Seasonal distribution:</strong> Changes in precipitation distribution across seasons<br>
                      • <strong>Extreme rainfall:</strong> Frequency and intensity of extreme rainfall events<br>
                      • <strong>Drought risk:</strong> Probability of drought occurrence and duration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="adaptive-technologies">
              <h4>🛡️ Climate Adaptation Technologies</h4>
              <div class="adaptation-tech">
                <div class="protection-systems">
                  <h5>Smart Protection Systems</h5>
                  <div class="smart-protection">
                    <div class="protection-method">
                      <h6>Frost Protection Technologies</h6>
                      <p>• <strong>Fan systems:</strong> Automated fan systems to prevent cold air settling<br>
                      • <strong>Heating cables:</strong> Soil and vine heating systems<br>
                      • <strong>Aspersion (water spraying):</strong> Using the latent heat of freezing to protect vines<br>
                      • <strong>Helicopter warming:</strong> Aerial heating systems for large areas</p>
                    </div>
                    <div class="protection-method">
                      <h6>Hail Protection Technologies</h6>
                      <p>• <strong>Anti-hail nets:</strong> High-strength anti-hail net covering systems<br>
                      • <strong>Cloud seeding:</strong> Artificial weather modification to reduce hail formation<br>
                      • <strong>Radar monitoring:</strong> Early identification and tracking of hailstorm cells<br>
                      • <strong>Emergency harvesting:</strong> Emergency harvest plans before hail arrives</p>
                    </div>
                  </div>
                </div>

                <div class="protection-systems">
                  <h5>🌧️ Water Resource Management Technology</h5>
                  <div class="water-management">
                    <div class="management-system">
                      <h6>Smart Irrigation Systems</h6>
                      <p>• <strong>Precision drip irrigation:</strong> Precise water delivery based on vine needs<br>
                      • <strong>Recycling &amp; reuse:</strong> Rainwater collection and treatment reuse systems<br>
                      • <strong>Evaporation reduction:</strong> Cover materials to reduce water evaporation<br>
                      • <strong>Monitoring &amp; feedback:</strong> Real-time soil moisture monitoring and feedback</p>
                    </div>
                    <div class="management-system">
                      <h6>Drought Mitigation Strategies</h6>
                      <p>• <strong>Deep root cultivation:</strong> Cultivating vines with deeper root systems<br>
                      • <strong>Cover cropping:</strong> Using cover crops to retain soil moisture<br>
                      • <strong>Variety selection:</strong> Choosing more drought-tolerant grape varieties<br>
                      • <strong>Microclimate regulation:</strong> Creating favourable field microclimates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>🧬 Biotechnological Innovation</h3>
          <div class="biotechnology">
            <div class="genetic-research">
              <h4>Genetic Improvement &amp; Breeding</h4>
              <div class="genetic-improvement">
                <div class="breeding-program">
                  <h5>🧪 Modern Breeding Technologies</h5>
                  <div class="modern-breeding">
                    <div class="breeding-method">
                      <h6>Marker-Assisted Selection</h6>
                      <p>• <strong>Genotyping:</strong> Rapid detection of genes associated with target traits<br>
                      • <strong>Early selection:</strong> Trait prediction possible at the seedling stage<br>
                      • <strong>Complex traits:</strong> Simultaneous selection for multiple favourable traits<br>
                      • <strong>Purity testing:</strong> Ensuring the genetic purity of varieties</p>
                    </div>
                    <div class="breeding-method">
                      <h6>Gene Editing Technology</h6>
                      <p>• <strong>CRISPR-Cas9:</strong> Precise gene editing technology<br>
                      • <strong>Disease resistance genes:</strong> Enhancing resistance to pathogens<br>
                      • <strong>Environmental adaptation:</strong> Improving adaptability to environmental stress<br>
                      • <strong>Quality improvement:</strong> Improving fruit quality and nutritional composition</p>
                    </div>
                  </div>
                </div>

                <div class="breeding-program">
                  <h5>🌱 Climate-Adaptive Breeding</h5>
                  <div class="climate-breeding">
                    <div class="adaptation-trait">
                      <h6>Heat-Tolerant Variety Development</h6>
                      <p>• <strong>Heat shock proteins:</strong> Enhancing the plant's heat tolerance<br>
                      • <strong>Photoprotection mechanisms:</strong> Improving protection against intense sunlight<br>
                      • <strong>Water use efficiency:</strong> Improving water use under high temperatures<br>
                      • <strong>Ripening timing:</strong> Adjusting ripening timing to avoid extreme heat</p>
                    </div>
                    <div class="adaptation-trait">
                      <h6>Enhanced Stress Resistance</h6>
                      <p>• <strong>Drought-resistance genes:</strong> Enhancing the plant's drought tolerance<br>
                      • <strong>Salt tolerance:</strong> Adapting to soil salinisation<br>
                      • <strong>Pest and disease resistance:</strong> Reducing the use of chemical pesticides<br>
                      • <strong>Nutrient efficiency:</strong> Improving nutrient absorption and utilisation efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="microbiology">
              <h4>🦠 Microbial Technology Applications</h4>
              <div class="microbial-applications">
                <div class="beneficial-microbes">
                  <h5>Utilising Beneficial Microbes</h5>
                  <div class="microbe-applications">
                    <div class="microbe-type">
                      <h6>Plant Growth-Promoting Rhizobacteria (PGPR)</h6>
                      <p>• <strong>Nutrient supply:</strong> Enhancing the plant's ability to absorb nutrients<br>
                      • <strong>Growth promotion:</strong> Secreting plant growth-regulating substances<br>
                      • <strong>Disease resistance:</strong> Enhancing the plant's natural disease resistance<br>
                      • <strong>Stress resistance:</strong> Improving the plant's resistance to environmental stress</p>
                    </div>
                    <div class="microbe-type">
                      <h6>Mycorrhizal Fungi</h6>
                      <p>• <strong>Root system expansion:</strong> Expanding the effective absorption range of the plant's root system<br>
                      • <strong>Nutrient exchange:</strong> Facilitating nutrient exchange between plant and soil<br>
                      • <strong>Water absorption:</strong> Improving the plant's water absorption efficiency<br>
                      • <strong>Soil structure:</strong> Improving the physical structure of the soil</p>
                    </div>
                  </div>
                </div>

                <div class="beneficial-microbes">
                  <h5>🍇 Fermentation Microbiology Innovation</h5>
                  <div class="fermentation-innovation">
                    <div class="yeast-development">
                      <h6>Specialist Yeast Development</h6>
                      <p>• <strong>Low-alcohol yeasts:</strong> Low-alcohol fermentation adapted to climate change<br>
                      • <strong>Heat-tolerant yeasts:</strong> Normal fermentation even at high temperatures<br>
                      • <strong>Flavour enhancement:</strong> Yeasts that produce specific flavour compounds<br>
                      • <strong>Stability improvement:</strong> Improving the stability of the fermentation process</p>
                    </div>
                    <div class="bacteria-application">
                      <h6>Lactic Acid Bacteria Applications</h6>
                      <p>• <strong>Malolactic fermentation:</strong> Controlling acidity and flavour development<br>
                      • <strong>Biological protection:</strong> Preventing contamination by harmful microbes<br>
                      • <strong>Flavour modulation:</strong> Producing specific flavour compounds<br>
                      • <strong>Stability enhancement:</strong> Improving the microbiological stability of wine</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """,
    "slides.6.highlights.0.title": "Climate Adaptation",
    "slides.6.highlights.0.content": "Advanced climate monitoring and early warning systems, combined with smart protection technologies, help manage extreme weather events",
    "slides.6.highlights.1.title": "Biotechnology",
    "slides.6.highlights.1.content": "Genetic breeding and microbial technology provide biological solutions to climate change",
    "slides.7.title": "Bordeaux's Future Development Vision",
    "slides.7.subtitle": "The Perfect Fusion of Tradition and Innovation",
    "slides.8.title": "Balancing Tradition and Innovation",
    "slides.8.content": r"""
      <div class="chapter-content">
        <div class="future-vision">
          <h3>🏛️ Balancing Tradition and Innovation</h3>
          <div class="tradition-innovation">
            <div class="heritage-preservation">
              <h4>Cultural Heritage Preservation</h4>
              <div class="cultural-preservation">
                <div class="preservation-aspect">
                  <h5>🏰 Digitalisation of Historical Heritage</h5>
                  <div class="digital-heritage">
                    <div class="digitization-project">
                      <h6>Virtual Museum Development</h6>
                      <p>• <strong>3D scanning &amp; reconstruction:</strong> Precise 3D reconstruction of ancient cellars and historic buildings<br>
                      • <strong>Historical document digitisation:</strong> Digital preservation of centuries of winemaking records<br>
                      • <strong>Winemaking process documentation:</strong> Detailed recording of traditional winemaking techniques<br>
                      • <strong>Interactive displays:</strong> Allowing visitors to experience history in an immersive way</p>
                    </div>
                    <div class="accessibility-enhancement">
                      <h6>Global Accessibility</h6>
                      <p>• <strong>Multi-language support:</strong> Content display in major world languages<br>
                      • <strong>Accessibility design:</strong> Providing convenient access for people of all abilities<br>
                      • <strong>Educational resources:</strong> Providing learning resources for schools and educational institutions<br>
                      • <strong>Research support:</strong> Providing valuable historical material for academic research</p>
                    </div>
                  </div>
                </div>

                <div class="preservation-aspect">
                  <h5>👥 Passing on the Artisanal Spirit</h5>
                  <div class="craftsmanship-preservation">
                    <div class="knowledge-transfer">
                      <h6>Documenting Master Techniques</h6>
                      <p>• <strong>Filmed records of techniques:</strong> Detailed recording of the craft methods of veteran winemakers<br>
                      • <strong>Collating experiential knowledge:</strong> Converting tacit knowledge into transmissible explicit knowledge<br>
                      • <strong>Modernising apprenticeships:</strong> Combining traditional apprenticeship with modern education<br>
                      • <strong>Cross-generational exchange platform:</strong> Fostering dialogue between winemakers of different generations</p>
                    </div>
                    <div class="innovation-integration">
                      <h6>Modernising Traditional Techniques</h6>
                      <p>• <strong>Precision enhancement:</strong> Using technology to improve the precision of traditional techniques<br>
                      • <strong>Quality consistency:</strong> Ensuring consistent quality in traditional methods<br>
                      • <strong>Efficiency optimisation:</strong> Improving efficiency while preserving tradition<br>
                      • <strong>Innovation integration:</strong> Incorporating new technology into traditional winemaking processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sustainable-development">
              <h4>🌍 Sustainable Development Model</h4>
              <div class="sustainability-model">
                <div class="environmental-sustainability">
                  <h5>Ecosystem Protection</h5>
                  <div class="ecosystem-protection">
                    <div class="biodiversity-conservation">
                      <h6>Biodiversity Conservation</h6>
                      <p>• <strong>Native plant protection:</strong> Protecting and restoring local native plant communities<br>
                      • <strong>Wildlife habitats:</strong> Creating and maintaining habitats for wildlife<br>
                      • <strong>Insect hotels:</strong> Providing habitats and breeding sites for beneficial insects<br>
                      • <strong>Ecological corridors:</strong> Establishing green corridors connecting different ecological zones</p>
                    </div>
                    <div class="soil-health">
                      <h6>Soil Health Management</h6>
                      <p>• <strong>Organic matter increase:</strong> Continuously increasing soil organic matter content<br>
                      • <strong>Microbial communities:</strong> Maintaining and promoting soil microbial diversity<br>
                      • <strong>No-till techniques:</strong> Minimising soil disturbance to protect soil structure<br>
                      • <strong>Carbon sequestration:</strong> Increasing soil carbon storage through agricultural practices</p>
                    </div>
                  </div>
                </div>

                <div class="environmental-sustainability">
                  <h5>💧 Circular Economy Practices</h5>
                  <div class="circular-economy">
                    <div class="waste-reduction">
                      <h6>Waste Valorisation</h6>
                      <p>• <strong>Grape marc utilisation:</strong> Converting grape marc into organic fertiliser or biofuel<br>
                      • <strong>Wine lees as feed:</strong> Processing fermentation residues into high-quality animal feed<br>
                      • <strong>Packaging recycling:</strong> Establishing a complete packaging material recycling system<br>
                      • <strong>Water resource recovery:</strong> Treating and reusing production wastewater</p>
                    </div>
                    <div class="energy-efficiency">
                      <h6>Energy Circularity</h6>
                      <p>• <strong>Solar power generation:</strong> Installing solar panels on estate rooftops and open land<br>
                      • <strong>Biomass energy:</strong> Using agricultural residues to generate biomass energy<br>
                      • <strong>Geothermal utilisation:</strong> Using geothermal energy to maintain constant cellar temperatures<br>
                      • <strong>Wind power:</strong> Using wind energy in suitable areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>🚀 Industry Upgrade Strategies</h3>
          <div class="industry-upgrade">
            <div class="digital-transformation">
              <h4>Digital Transformation Pathways</h4>
              <div class="digital-roadmap">
                <div class="transformation-phase">
                  <h5>📊 Data-Driven Decision-Making</h5>
                  <div class="data-driven-decisions">
                    <div class="data-infrastructure">
                      <h6>Data Infrastructure Development</h6>
                      <p>• <strong>Unified data platform:</strong> A unified platform integrating all business data<br>
                      • <strong>Real-time data streams:</strong> Establishing real-time data collection and processing workflows<br>
                      • <strong>Data quality management:</strong> Ensuring data accuracy and completeness<br>
                      • <strong>Data security:</strong> Establishing robust data security protection mechanisms</p>
                    </div>
                    <div class="analytics-capabilities">
                      <h6>Building Analytical Capabilities</h6>
                      <p>• <strong>Predictive analytics:</strong> Forecasting future trends based on historical data<br>
                      • <strong>Prescriptive analytics:</strong> Providing specific actionable recommendations<br>
                      • <strong>Real-time monitoring:</strong> Real-time monitoring of key business indicators<br>
                      • <strong>Anomaly detection:</strong> Automatically identifying business anomalies</p>
                    </div>
                  </div>
                </div>

                <div class="transformation-phase">
                  <h5>🤝 Ecosystem Collaboration</h5>
                  <div class="ecosystem-collaboration">
                    <div class="partnership-model">
                      <h6>Industry–Academia–Research Collaboration</h6>
                      <p>• <strong>Technology R&amp;D:</strong> Collaborating with universities and research institutions to develop new technologies<br>
                      • <strong>Talent development:</strong> Establishing industry-academia talent cultivation mechanisms<br>
                      • <strong>Knowledge transfer:</strong> Promoting the industrial application of research results<br>
                      • <strong>Innovation incubation:</strong> Supporting the incubation of innovative entrepreneurial projects</p>
                    </div>
                    <div class="supply-chain-integration">
                      <h6>Supply Chain Digitalisation</h6>
                      <p>• <strong>Supplier collaboration:</strong> Establishing a digital collaboration platform with suppliers<br>
                      • <strong>Logistics optimisation:</strong> Using AI to optimise logistics and warehouse management<br>
                      • <strong>Demand forecasting:</strong> Accurately forecasting market demand changes<br>
                      • <strong>Risk management:</strong> Establishing a supply chain risk early warning system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="market-expansion">
              <h4>🌏 Global Market Strategy</h4>
              <div class="global-strategy">
                <div class="market-penetration">
                  <h5>Developing Emerging Markets</h5>
                  <div class="emerging-markets">
                    <div class="market-analysis">
                      <h6>Market Opportunity Identification</h6>
                      <p>• <strong>Consumer trend analysis:</strong> In-depth analysis of consumer trends in emerging markets<br>
                      • <strong>Competitive environment assessment:</strong> Evaluating the local competitive environment and opportunities<br>
                      • <strong>Cultural adaptability:</strong> Understanding local culture and consumption habits<br>
                      • <strong>Regulatory environment:</strong> Familiarity with local regulations and trade policies</p>
                    </div>
                    <div class="entry-strategy">
                      <h6>Market Entry Strategy</h6>
                      <p>• <strong>Localisation strategy:</strong> Adapting products and marketing strategies to local characteristics<br>
                      • <strong>Channel development:</strong> Establishing sales channels suited to the local market<br>
                      • <strong>Brand promotion:</strong> Conducting brand promotion that aligns with local culture<br>
                      • <strong>Local partners:</strong> Identifying reliable local partners</p>
                    </div>
                  </div>
                </div>

                <div class="market-penetration">
                  <h5>🎯 Market Segmentation Positioning</h5>
                  <div class="market-segmentation">
                    <div class="segment-strategy">
                      <h6>Premium Market Strategy</h6>
                      <p>• <strong>Luxury positioning:</strong> Reinforcing Bordeaux's image as a top luxury product<br>
                      • <strong>Limited edition products:</strong> Developing rare and limited-edition products<br>
                      • <strong>Personalised service:</strong> Providing a highly personalised service experience<br>
                      • <strong>Collectible value:</strong> Emphasising the investment and collecting value of products</p>
                    </div>
                    <div class="segment-strategy">
                      <h6>Mass Market Expansion</h6>
                      <p>• <strong>Accessible pricing:</strong> Developing product lines suited to mass-market consumption<br>
                      • <strong>Easy-drinking styles:</strong> Catering to the taste preferences of modern consumers<br>
                      • <strong>Convenient purchasing:</strong> Providing convenient purchasing channels and methods<br>
                      • <strong>Educational promotion:</strong> Strengthening consumer education and brand awareness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    """,
    "slides.8.highlights.0.title": "Tradition & Innovation",
    "slides.8.highlights.0.content": "Protecting cultural heritage while achieving sustainable development and industrial modernisation",
    "slides.8.highlights.1.title": "Industry Upgrade",
    "slides.8.highlights.1.content": "Achieving a comprehensive industry upgrade through digital transformation and global market strategies",
    "slides.9.title": "Full Course Summary: Embrace Change, Lead the Future",
    "slides.9.content": r"""
      <div class="summary-content">
        <div class="comprehensive-overview">
          <h3>🌟 The Comprehensive Application of Innovative Technology</h3>
          <div class="technology-ecosystem">
            <div class="tech-integration">
              <h4>The Technology Ecosystem</h4>
              <p>This course has comprehensively demonstrated the revolutionary application of modern technology in the Bordeaux wine industry. From precision viticulture, big data analytics, and artificial intelligence winemaking in Part 1, to the digital consumer experience and climate adaptation technologies in Part 2, these innovations are building a complete intelligent ecosystem.</p>
            </div>
            <div class="value-creation">
              <h4>Value Creation Mechanisms</h4>
              <p>Each technology does not exist in isolation, but collaborates with and promotes the others, collectively creating greater value. Precision viticulture provides high-quality raw materials, AI winemaking ensures process consistency, digital marketing enhances the consumer experience, and climate adaptation technology guarantees long-term sustainable development.</p>
            </div>
          </div>
        </div>

        <div class="future-challenges">
          <h3>🎯 Future-Oriented Challenges &amp; Opportunities</h3>
          <div class="challenges-opportunities">
            <div class="key-challenges">
              <h4>Key Challenges</h4>
              <ul>
                <li><strong>Technology integration:</strong> How to seamlessly blend new technologies with traditional winemaking</li>
                <li><strong>Talent development:</strong> Cultivating well-rounded talent with expertise in both tradition and technology</li>
                <li><strong>Return on investment:</strong> Balancing technology investment with economic returns</li>
                <li><strong>Cultural preservation:</strong> Maintaining the integrity of cultural traditions while innovating</li>
              </ul>
            </div>
            <div class="key-opportunities">
              <h4>Development Opportunities</h4>
              <ul>
                <li><strong>Efficiency gains:</strong> Significantly improving production efficiency and quality consistency</li>
                <li><strong>Market expansion:</strong> Opening new global markets through digitalisation</li>
                <li><strong>Sustainable development:</strong> Achieving truly environmentally friendly production</li>
                <li><strong>Innovation leadership:</strong> Becoming a leader in technological innovation for the global wine industry</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="action-framework">
          <h3>📋 Implementation Action Framework</h3>
          <div class="implementation-strategy">
            <div class="phase-1">
              <h4>Phase 1: Foundation Building (1–2 years)</h4>
              <p>• Establish data collection and analysis infrastructure<br>
              • Train technical talent and operational staff<br>
              • Pilot core technologies on a small scale<br>
              • Establish technology evaluation and improvement mechanisms</p>
            </div>
            <div class="phase-2">
              <h4>Phase 2: Full-Scale Application (2–5 years)</h4>
              <p>• Comprehensively roll out mature technology applications<br>
              • Establish a complete intelligent management system<br>
              • Develop digital consumer service platforms<br>
              • Achieve digitalisation of major business processes</p>
            </div>
            <div class="phase-3">
              <h4>Phase 3: Innovation Leadership (5–10 years)</h4>
              <p>• Become a benchmark for technological innovation in the industry<br>
              • Export technological solutions and management expertise<br>
              • Build a global digital services network<br>
              • Achieve a fully sustainable production model</p>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h3>🏆 Conclusion: The Harmonious Unity of Tradition and Innovation</h3>
          <p>The future of the Bordeaux wine industry lies in successfully integrating millennia of tradition with modern technology. The goal is not to replace tradition with technology, but to empower tradition through technology, allowing tradition to flourish anew with technology's assistance. By enhancing quality through precision viticulture, maintaining consistency through AI, expanding markets through digitalisation, and meeting challenges through innovative technology, Bordeaux will lead the global wine industry into a new era of intelligence while preserving its unique cultural allure.</p>
          
          <p>The Bordeaux of the future will be a model of the harmonious coexistence of tradition and innovation, a benchmark for the perfect fusion of technology and culture, and an example of achieving both sustainable development and commercial success. This future is gradually becoming a reality through our collective efforts.</p>
        </div>
      </div>
    """,
    "slides.9.highlights.0.title": "Technology Ecosystem",
    "slides.9.highlights.0.content": "All technologies collaborate to build a complete intelligent ecosystem",
    "slides.9.highlights.1.title": "Challenges & Opportunities",
    "slides.9.highlights.1.content": "Discover opportunities within challenges; preserve tradition while innovating",
    "slides.9.highlights.2.title": "Harmonious Unity",
    "slides.9.highlights.2.content": "The perfect fusion of tradition and innovation is the core of Bordeaux's future development",
    "slides.10.title": "Part 2 Quiz: Future Development & Trend Outlook",
}


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


if __name__ == '__main__':
    print('=== l3-14 ===')
    patch_file('l3-14.json', L3_14_EN)
    print()
    print('=== l3-13-part2 ===')
    patch_file('l3-13-part2.json', L3_13_P2_EN)
    print()
    print('Done.')
