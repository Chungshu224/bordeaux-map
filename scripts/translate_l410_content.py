"""Translate large HTML content blocks in l4-10.json"""
import json, pathlib

base = pathlib.Path(__file__).parent.parent
path = base / "src/locales/en/lessons/bordeaux/l4-10.json"

with open(path, encoding="utf-8") as f:
    data = json.load(f)

data["slides.2.content"] = """
        <div class="chapter-content">
          <h3>Data Science Workflow (CRISP-DM)</h3>
          <ol>
            <li><strong>Business Understanding</strong>: Define problem, success metrics, and constraints.</li>
            <li><strong>Data Understanding</strong>: Explore available data, identify quality issues, preliminary analysis.</li>
            <li><strong>Data Preparation</strong>: Clean, transform, feature engineering, integrate.</li>
            <li><strong>Modelling</strong>: Select algorithms, train models, hyperparameter tuning.</li>
            <li><strong>Evaluation</strong>: Validate model, assess business value, risk analysis.</li>
            <li><strong>Deployment</strong>: Go live, monitor, maintain, iteratively improve.</li>
          </ol>
          <h3>Wine Industry Data Ecosystem</h3>
          <table class="data-table">
            <thead>
              <tr><th>Data Type</th><th>Source</th><th>Frequency</th><th>Typical Use</th><th>Challenge</th></tr>
            </thead>
            <tbody>
              <tr><td>Weather Data</td><td>Weather stations, satellites</td><td>Hourly</td><td>Frost warning, disease prediction</td><td>Insufficient spatial resolution</td></tr>
              <tr><td>Soil Data</td><td>Sensors, lab</td><td>Daily / quarterly</td><td>Precision fertilisation, irrigation</td><td>Sensor drift</td></tr>
              <tr><td>Vineyard Imagery</td><td>Drones, satellites</td><td>Weekly</td><td>Pest/disease detection, ripeness assessment</td><td>Cloud cover</td></tr>
              <tr><td>Fermentation Data</td><td>IoT sensors</td><td>Every 15 min</td><td>Fermentation modelling, anomaly detection</td><td>Sensor failure</td></tr>
              <tr><td>Sales Data</td><td>POS, CRM</td><td>Real-time / daily</td><td>Demand forecasting, dynamic pricing</td><td>Data silos</td></tr>
              <tr><td>Tasting Data</td><td>Sensory evaluation</td><td>Batch</td><td>Quality prediction, style clustering</td><td>High subjectivity</td></tr>
              <tr><td>Supply Chain Data</td><td>ERP, logistics</td><td>Daily</td><td>Inventory optimisation, routing</td><td>System fragmentation</td></tr>
            </tbody>
          </table>
          <h3>Data Governance Framework</h3>
          <div class="data-governance-widget">
            <input type="radio" id="gov-quality" name="governance-aspect" class="opt-quality" checked>
            <input type="radio" id="gov-security" name="governance-aspect" class="opt-security">
            <input type="radio" id="gov-ethics" name="governance-aspect" class="opt-ethics">
            <div class="selectors">
              <label for="gov-quality">Data Quality</label>
              <label for="gov-security">Data Security</label>
              <label for="gov-ethics">Ethics &amp; Compliance</label>
            </div>
            <div class="panels">
              <div class="panel" data-aspect="quality">
                <h4>Data Quality Management</h4>
                <p><strong>Six Dimensions</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>Accuracy</strong></td><td>Does the data correctly reflect reality? (e.g. temperature sensor calibration)</td></tr>
                    <tr><td><strong>Completeness</strong></td><td>Are there missing values? (e.g. weather station outage)</td></tr>
                    <tr><td><strong>Consistency</strong></td><td>Is data consistent across systems? (e.g. sales vs inventory)</td></tr>
                    <tr><td><strong>Timeliness</strong></td><td>Does data update frequency meet requirements? (e.g. real-time monitoring)</td></tr>
                    <tr><td><strong>Uniqueness</strong></td><td>Are there duplicate records? (e.g. customer deduplication)</td></tr>
                    <tr><td><strong>Validity</strong></td><td>Does data conform to business rules? (e.g. pH range 2.8&ndash;4.0)</td></tr>
                  </tbody>
                </table>
                <p><strong>Quality Monitoring Process</strong>:</p>
                <ol>
                  <li>Define quality rules (e.g. temperature range &minus;5&ndash;40&deg;C, missing rate &lt; 5%).</li>
                  <li>Automated check scripts (Python / SQL), executed daily.</li>
                  <li>Anomaly alerts (out-of-range, sudden missing data).</li>
                  <li>Root cause analysis (sensor failure vs genuine anomaly).</li>
                  <li>Correction and documentation.</li>
                </ol>
                <p class="note">Example: Fermentation temperature suddenly jumps from 25&deg;C to &minus;10&deg;C &rarr; sensor failure; impute or flag as invalid.</p>
              </div>
              <div class="panel" data-aspect="security">
                <h4>Data Security and Privacy</h4>
                <p><strong>Security Levels</strong>:</p>
                <ul>
                  <li><strong>L1 &ndash; Public</strong>: Regional climate data, public ratings (no encryption required).</li>
                  <li><strong>L2 &ndash; Internal</strong>: Production data, inventory, costs (intranet access, VPN).</li>
                  <li><strong>L3 &ndash; Confidential</strong>: Customer data, pricing strategy (encrypted, access logs).</li>
                  <li><strong>L4 &ndash; Top Secret</strong>: Winemaking recipes, trade secrets (MFA, hardware encryption).</li>
                </ul>
                <p><strong>GDPR Compliance (EU Customer Data)</strong>:</p>
                <ol>
                  <li><strong>Legal Basis</strong>: Obtain explicit consent or establish contractual necessity.</li>
                  <li><strong>Data Minimisation</strong>: Collect only necessary fields (e.g. name and email; avoid over-collection).</li>
                  <li><strong>User Rights</strong>: Provide access, rectification, deletion, and portability.</li>
                  <li><strong>Data Protection Impact Assessment (DPIA)</strong>: Required for high-risk processing.</li>
                  <li><strong>Breach Notification</strong>: Report to supervisory authority within 72 hours.</li>
                </ol>
                <p class="note">Fines: up to &euro;20 million or 4% of global annual revenue.</p>
              </div>
              <div class="panel" data-aspect="ethics">
                <h4>AI Ethics and Bias</h4>
                <p><strong>Common Bias Sources</strong>:</p>
                <ul>
                  <li><strong>Historical Bias</strong>: Training data reflects past inequity (e.g. quality model trained only on prestigious estates).</li>
                  <li><strong>Sampling Bias</strong>: Training set not representative (e.g. using only summer data for full-year forecasting).</li>
                  <li><strong>Annotation Bias</strong>: Human labels carry subjective preferences (e.g. tasters favouring a particular style).</li>
                  <li><strong>Algorithmic Bias</strong>: Model amplifies certain features (e.g. over-weighting price).</li>
                </ul>
                <p><strong>Fairness Principles</strong>:</p>
                <ol>
                  <li><strong>Transparency</strong>: Explainable model decisions (e.g. LIME, SHAP).</li>
                  <li><strong>Accountability</strong>: Clear assignment of AI decision responsibility.</li>
                  <li><strong>Human Oversight</strong>: Critical decisions (e.g. redundancy, discriminatory pricing) require human review.</li>
                  <li><strong>Diverse Data</strong>: Cover different regions, varieties, and price segments.</li>
                </ol>
                <p><strong>Case</strong>: If dynamic pricing AI learns &ldquo;high-income postcodes pay more&rdquo; &rarr; price discrimination risk.</p>
                <p class="note">Recommendation: Conduct regular model fairness audits; monitor prediction error across different groups.</p>
              </div>
            </div>
          </div>
          <h3>Data Pipeline Architecture</h3>
          <ul>
            <li><strong>ETL (Extract&ndash;Transform&ndash;Load)</strong>:
              <ol>
                <li>Extract: Pull from multiple sources (weather API, ERP, IoT).</li>
                <li>Transform: Clean, standardise, feature engineering.</li>
                <li>Load: Load into data warehouse (e.g. PostgreSQL, BigQuery).</li>
              </ol>
            </li>
            <li><strong>Batch vs Stream</strong>:
              <ul>
                <li><strong>Batch</strong>: Daily / weekly processing (e.g. sales reports) &ndash; Airflow, dbt.</li>
                <li><strong>Stream</strong>: Real-time processing (e.g. fermentation monitoring) &ndash; Kafka, Flink.</li>
              </ul>
            </li>
            <li><strong>Data Warehouse Design</strong>: Star schema (fact table + dimension tables) supporting OLAP queries.</li>
          </ul>
          <h3>Tool Selection Matrix</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Task</th><th>Small Winery (&lt;50K bottles)</th><th>Large Winery (&gt;500K bottles)</th></tr>
            </thead>
            <tbody>
              <tr><td>Data Collection</td><td>Excel / Google Sheets</td><td>Automated ETL (Airflow)</td></tr>
              <tr><td>Data Storage</td><td>SQLite / PostgreSQL</td><td>Cloud warehouse (BigQuery, Snowflake)</td></tr>
              <tr><td>Analysis Tools</td><td>Excel, Power BI</td><td>Python / R, Tableau</td></tr>
              <tr><td>Machine Learning</td><td>AutoML (H2O.ai)</td><td>Custom models (TensorFlow, PyTorch)</td></tr>
              <tr><td>Deployment</td><td>Local scripts</td><td>Cloud ML platform (AWS SageMaker)</td></tr>
            </tbody>
          </table>
        </div>
      """

data["slides.4.content"] = """
        <div class="chapter-content">
          <h3>Supervised vs Unsupervised Learning</h3>
          <table class="data-table">
            <thead>
              <tr><th>Type</th><th>Definition</th><th>Common Algorithms</th><th>Wine Industry Use</th></tr>
            </thead>
            <tbody>
              <tr><td>Supervised &ndash; Regression</td><td>Predict continuous value (labelled)</td><td>Linear regression, Random Forest, XGBoost</td><td>Demand forecasting, price prediction, quality scoring</td></tr>
              <tr><td>Supervised &ndash; Classification</td><td>Predict category (labelled)</td><td>Logistic regression, Decision tree, SVM</td><td>Fault detection, customer segmentation, style classification</td></tr>
              <tr><td>Unsupervised &ndash; Clustering</td><td>Discover similar groups (unlabelled)</td><td>K-means, Hierarchical, DBSCAN</td><td>Product portfolio optimisation, customer segmentation</td></tr>
              <tr><td>Unsupervised &ndash; Dimensionality Reduction</td><td>Reduce feature count</td><td>PCA, t-SNE, UMAP</td><td>Sensory data visualisation, feature selection</td></tr>
              <tr><td>Reinforcement Learning</td><td>Learn strategy via rewards</td><td>Q-Learning, Actor-Critic</td><td>Dynamic pricing, inventory scheduling (advanced)</td></tr>
            </tbody>
          </table>
          <h3>Model Selection Decision Tree</h3>
          <div class="ml-model-selector-widget">
            <input type="radio" id="model-regression" name="ml-task" class="opt-regression" checked>
            <input type="radio" id="model-classification" name="ml-task" class="opt-classification">
            <input type="radio" id="model-clustering" name="ml-task" class="opt-clustering">
            <div class="selectors">
              <label for="model-regression">Regression Task</label>
              <label for="model-classification">Classification Task</label>
              <label for="model-clustering">Clustering Task</label>
            </div>
            <div class="panels">
              <div class="panel" data-task="regression">
                <h4>Regression: Predicting Continuous Values</h4>
                <p><strong>Typical Questions</strong>: Next quarter sales? Wine quality score? Optimal fermentation temperature?</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Algorithm</th><th>Pros</th><th>Cons</th><th>Best Fit</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Linear Regression</td><td>Interpretable, fast</td><td>Assumes linearity</td><td>Few features, simple relationships (e.g. price vs score)</td></tr>
                    <tr><td>Decision Tree</td><td>Handles non-linearity, visualisable</td><td>Prone to overfitting</td><td>Exploring feature importance</td></tr>
                    <tr><td>Random Forest</td><td>Accurate, robust</td><td>Black box, computationally heavy</td><td>Medium datasets (1K&ndash;100K)</td></tr>
                    <tr><td>XGBoost</td><td>Kaggle competition favourite</td><td>Complex tuning</td><td>Tabular data, maximum accuracy</td></tr>
                    <tr><td>Neural Network</td><td>Handles complex patterns</td><td>Requires large data (&gt;10K)</td><td>Images, time series, big data</td></tr>
                  </tbody>
                </table>
                <p><strong>Wine Industry Cases</strong>:</p>
                <ul>
                  <li><strong>Sales Forecasting</strong>: XGBoost; inputs (historical sales, season, promotions, weather) &rarr; output (next-month sales).</li>
                  <li><strong>Quality Prediction</strong>: Random Forest; inputs (chemical analysis, fermentation parameters) &rarr; output (sensory score).</li>
                </ul>
                <p class="note">Start with linear regression as a baseline, then try more complex models.</p>
              </div>
              <div class="panel" data-task="classification">
                <h4>Classification: Predicting Categories</h4>
                <p><strong>Typical Questions</strong>: Does this wine have a fault (yes/no)? Will the customer churn? Grape ripeness (under-ripe / ripe / over-ripe)?</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Algorithm</th><th>Pros</th><th>Cons</th><th>Best Fit</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Logistic Regression</td><td>Interpretable, probability output</td><td>Linear decision boundary</td><td>Binary classification (e.g. fault detection)</td></tr>
                    <tr><td>Decision Tree</td><td>Clear rules</td><td>Prone to overfitting</td><td>When interpretability is needed</td></tr>
                    <tr><td>Random Forest</td><td>Accurate, handles imbalanced data</td><td>Black box</td><td>Multi-class, many features</td></tr>
                    <tr><td>SVM</td><td>Good in high-dimensional space</td><td>Slow on large data</td><td>Small to medium datasets, complex boundaries</td></tr>
                    <tr><td>Deep Learning (CNN)</td><td>Strong image recognition</td><td>Requires GPU and large data</td><td>Vine disease image classification</td></tr>
                  </tbody>
                </table>
                <p><strong>Wine Industry Cases</strong>:</p>
                <ul>
                  <li><strong>Fault Detection</strong>: Random Forest; inputs (chemical indicators, sensory descriptors) &rarr; output (faulty / not faulty).</li>
                  <li><strong>Disease Detection</strong>: CNN; inputs (leaf images) &rarr; output (downy mildew / powdery mildew / healthy).</li>
                </ul>
                <p class="note">Imbalanced data (e.g. fault rate 5%) requires SMOTE or weighted loss function.</p>
              </div>
              <div class="panel" data-task="clustering">
                <h4>Clustering: Discovering Similar Groups</h4>
                <p><strong>Typical Questions</strong>: How many customer segments exist? How to group products? Which fermentation batches are similar?</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Algorithm</th><th>Pros</th><th>Cons</th><th>Best Fit</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>K-means</td><td>Simple, fast</td><td>Requires preset k, spherical assumption</td><td>Customer segmentation, product grouping</td></tr>
                    <tr><td>Hierarchical</td><td>Dendrogram visualisation</td><td>Slow (O(n&sup3;))</td><td>Small datasets, exploratory analysis</td></tr>
                    <tr><td>DBSCAN</td><td>Discovers arbitrary shapes, identifies outliers</td><td>Parameter-sensitive</td><td>Geospatial clustering, anomaly detection</td></tr>
                    <tr><td>GMM</td><td>Probabilistic, soft assignment</td><td>Assumes Gaussian distribution</td><td>Uncertainty modelling</td></tr>
                  </tbody>
                </table>
                <p><strong>Wine Industry Cases</strong>:</p>
                <ul>
                  <li><strong>Customer Segmentation</strong>: K-means (k=4); segments by purchase frequency, spend, and varietal preference (loyal / occasional / new / lapsed).</li>
                  <li><strong>Product Portfolio</strong>: Hierarchical clustering by aroma, price, and style to design tasting sets.</li>
                </ul>
                <p class="note">Use Elbow Method or Silhouette Score to choose the optimal number of clusters.</p>
              </div>
            </div>
          </div>
          <h3>Model Evaluation Metrics</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Task</th><th>Metric</th><th>Calculation</th><th>Goal</th></tr>
            </thead>
            <tbody>
              <tr><td>Regression</td><td>MAE (Mean Absolute Error)</td><td>Mean of |prediction &minus; actual|</td><td>Lower is better</td></tr>
              <tr><td>Regression</td><td>RMSE (Root Mean Squared Error)</td><td>&radic;(mean of (prediction &minus; actual)&sup2;)</td><td>Lower is better; penalises large errors</td></tr>
              <tr><td>Regression</td><td>R&sup2; (Coefficient of Determination)</td><td>1 &minus; (residual SS / total SS)</td><td>Closer to 1 is better</td></tr>
              <tr><td>Classification</td><td>Accuracy</td><td>Correct predictions / total</td><td>Suitable for balanced data</td></tr>
              <tr><td>Classification</td><td>Precision</td><td>TP / (TP + FP)</td><td>Reduce false positives</td></tr>
              <tr><td>Classification</td><td>Recall</td><td>TP / (TP + FN)</td><td>Reduce false negatives</td></tr>
              <tr><td>Classification</td><td>F1 Score</td><td>2 &times; (Precision &times; Recall) / (Precision + Recall)</td><td>Balance precision and recall</td></tr>
              <tr><td>Classification</td><td>AUC-ROC</td><td>Area under ROC curve</td><td>Closer to 1 is better</td></tr>
            </tbody>
          </table>
          <h3>Overfitting vs Underfitting</h3>
          <ul>
            <li><strong>Underfitting</strong>: Model too simple; both training and test errors are high &rarr; increase complexity (more features, deeper model).</li>
            <li><strong>Overfitting</strong>: Model memorises training data; test error far exceeds training error &rarr; regularisation (L1/L2), pruning, dropout, more data.</li>
            <li><strong>Cross-Validation</strong>: K-fold (k=5 or 10) to ensure model generalisation.</li>
          </ul>
          <h3>Feature Engineering Tips</h3>
          <ul>
            <li><strong>Temporal Features</strong>: Decompose into year/month/week/day, holiday flags, seasonal encoding.</li>
            <li><strong>Categorical Encoding</strong>: One-hot (variety), label (ordinal), target encoding (high cardinality).</li>
            <li><strong>Numerical Transformations</strong>: Log (long-tail), standardisation (Z-score), normalisation (0&ndash;1).</li>
            <li><strong>Interaction Features</strong>: Temperature &times; humidity, price &times; score (capture non-linearity).</li>
            <li><strong>Lag Features</strong>: Prior-period sales, moving average (time series).</li>
          </ul>
        </div>
      """

data["slides.6.content"] = """
        <div class="chapter-content">
          <h3>Time Series Forecasting Methods</h3>
          <table class="data-table">
            <thead>
              <tr><th>Method</th><th>Best Fit</th><th>Pros</th><th>Cons</th></tr>
            </thead>
            <tbody>
              <tr><td>Moving Average (MA)</td><td>Short-term, stationary data</td><td>Simple, smoothing</td><td>Lagged, cannot predict trends</td></tr>
              <tr><td>Exponential Smoothing (ETS)</td><td>Trend + seasonality</td><td>Automatic weight decay</td><td>Parameter tuning needed</td></tr>
              <tr><td>ARIMA</td><td>Univariate time series</td><td>Handles autocorrelation</td><td>Requires stationarisation, complex parameters</td></tr>
              <tr><td>Prophet</td><td>Strong seasonality, holiday effects</td><td>Auto-handles missing data, easy to use</td><td>Requires substantial history (&gt;1 year)</td></tr>
              <tr><td>LSTM / GRU</td><td>Long-term dependencies, multivariate</td><td>Captures complex patterns</td><td>Large data, slow training</td></tr>
              <tr><td>XGBoost (temporal features)</td><td>External variables (promotions, weather)</td><td>High accuracy, interpretable</td><td>Requires feature engineering</td></tr>
            </tbody>
          </table>
          <h3>Demand Forecasting Process</h3>
          <ol>
            <li><strong>Data Preparation</strong>: Historical sales (at least 2 years), promotional calendar, holidays, weather, competitor dynamics.</li>
            <li><strong>Exploratory Analysis</strong>: Visualise trends, seasonality (monthly/quarterly), cyclicality (weekends vs weekdays).</li>
            <li><strong>Feature Engineering</strong>:
              <ul>
                <li>Temporal: month, quarter, holiday flag, weekend.</li>
                <li>Lag: previous 1/7/30-day sales, moving average.</li>
                <li>External: promotional intensity, weather, media exposure.</li>
              </ul>
            </li>
            <li><strong>Model Training</strong>: Sequential train/validation split (time-series ordering, not random).</li>
            <li><strong>Evaluation and Tuning</strong>: Use MAPE (Mean Absolute Percentage Error); adjust parameters.</li>
            <li><strong>Forecasting and Monitoring</strong>: Update model weekly/monthly; monitor forecast error.</li>
          </ol>
          <h3>Demand Forecasting Case Study</h3>
          <div class="demand-forecast-widget">
            <input type="radio" id="forecast-baseline" name="forecast-scenario" class="opt-baseline" checked>
            <input type="radio" id="forecast-seasonal" name="forecast-scenario" class="opt-seasonal">
            <input type="radio" id="forecast-promo" name="forecast-scenario" class="opt-promo">
            <div class="selectors">
              <label for="forecast-baseline">Baseline Model</label>
              <label for="forecast-seasonal">Seasonal Adjustment</label>
              <label for="forecast-promo">Promotion Integration</label>
            </div>
            <div class="panels">
              <div class="panel" data-scenario="baseline">
                <h4>Baseline Model: Moving Average</h4>
                <p><strong>Method</strong>: 7-day moving average; next-week forecast = average of past 7 days.</p>
                <p><strong>Results</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>MAPE (Mean Absolute Percentage Error)</td><td>18.5%</td></tr>
                    <tr><td>Computation Time</td><td>&lt; 1 second</td></tr>
                    <tr><td>Interpretability</td><td>High</td></tr>
                  </tbody>
                </table>
                <p><strong>Limitation</strong>: Cannot predict sudden events (holidays, promotions); 1-week lag.</p>
                <p class="note">Suitable as a quick-start baseline for stable demand.</p>
              </div>
              <div class="panel" data-scenario="seasonal">
                <h4>Seasonal Adjustment: Prophet</h4>
                <p><strong>Method</strong>: Facebook Prophet; auto-detects trend + annual/weekly seasonality.</p>
                <p><strong>Components</strong>:</p>
                <ul>
                  <li>Trend: overall growth (e.g. +5% per year).</li>
                  <li>Annual seasonality: summer peak (Jun&ndash;Aug +30%), winter trough (Jan&ndash;Feb &minus;20%).</li>
                  <li>Weekly seasonality: Friday/Saturday peak (+40%), Monday trough (&minus;15%).</li>
                </ul>
                <p><strong>Results</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>MAPE</td><td>12.3% (33% lower than baseline)</td></tr>
                    <tr><td>Computation Time</td><td>~5 minutes</td></tr>
                    <tr><td>Interpretability</td><td>Medium (component visualisation)</td></tr>
                  </tbody>
                </table>
                <p class="note">Ideal for products with strong seasonality (e.g. sparkling wine, gift sets).</p>
              </div>
              <div class="panel" data-scenario="promo">
                <h4>Promotion Integration: XGBoost</h4>
                <p><strong>Method</strong>: XGBoost + temporal features + promotional variables.</p>
                <p><strong>Feature Engineering</strong>:</p>
                <ul>
                  <li>Temporal: month, quarter, weekend, holidays (Valentine's Day, etc.).</li>
                  <li>Lag: previous 7/14/30-day sales, moving average.</li>
                  <li>Promotional: discount %, buy-one-get-one, media ad spend.</li>
                  <li>External: weather (temperature, rainfall), competitor promotions.</li>
                </ul>
                <p><strong>Results</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>MAPE</td><td>8.7% (53% lower than baseline)</td></tr>
                    <tr><td>Computation Time</td><td>~20 minutes</td></tr>
                    <tr><td>Feature Importance</td><td>Promotional discount (35%) &gt; last-7-day sales (28%) &gt; month (18%)</td></tr>
                  </tbody>
                </table>
                <p><strong>Business Value</strong>: Accurately predict promotional lift; optimise discount strategy (avoid over-discounting).</p>
                <p class="note">Requires historical promotional data (at least 20+ campaigns).</p>
              </div>
            </div>
          </div>
          <h3>Inventory Optimisation: Safety Stock and Reorder Point</h3>
          <p><strong>Safety Stock Formula</strong>: SS = Z &times; &sigma;_LT &times; &radic;LT</p>
          <ul>
            <li>Z: z-score for desired service level (e.g. 95% &rarr; Z = 1.65).</li>
            <li>&sigma;_LT: standard deviation of demand during lead time.</li>
            <li>LT: Lead Time (days).</li>
          </ul>
          <p><strong>Reorder Point (ROP)</strong>: ROP = Average demand during lead time + Safety stock</p>
          <p><strong>Example</strong>:</p>
          <ul>
            <li>Lead time = 14 days, average daily demand = 100 bottles, SD = 20 bottles, target service level = 95%.</li>
            <li>SS = 1.65 &times; 20 &times; &radic;14 &asymp; 124 bottles.</li>
            <li>ROP = 100 &times; 14 + 124 = 1,524 bottles.</li>
            <li>Interpretation: place an order when inventory drops to 1,524 bottles to avoid stockout 95% of the time.</li>
          </ul>
          <h3>Common Demand Forecasting Pitfalls</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Pitfall</th><th>Cause</th><th>Solution</th></tr>
            </thead>
            <tbody>
              <tr><td>Data Leakage</td><td>Using future information in training (e.g. same-day sales to predict same day)</td><td>Strict temporal split, lag features</td></tr>
              <tr><td>Ignoring Outliers</td><td>COVID-19, strikes cause demand shocks</td><td>Flag anomalous periods, segment modelling</td></tr>
              <tr><td>Promotion Overfitting</td><td>Model memorises specific promotions</td><td>Cross-validation, generalise promo features</td></tr>
              <tr><td>New Products</td><td>No historical data</td><td>Borrow from analogous products, expert estimates</td></tr>
            </tbody>
          </table>
        </div>
      """

data["slides.8.content"] = """
        <div class="chapter-content">
          <h3>Fermentation Kinetics Modelling</h3>
          <p><strong>Objective</strong>: Predict fermentation curves, detect anomalies, optimise temperature control.</p>
          <p><strong>Typical Monitoring Parameters</strong>:</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Parameter</th><th>Sensor</th><th>Sampling Frequency</th><th>Normal Range</th></tr>
            </thead>
            <tbody>
              <tr><td>Temperature</td><td>PT100 / thermocouple</td><td>Every 5&ndash;15 min</td><td>15&ndash;32&deg;C (varies by variety/style)</td></tr>
              <tr><td>Density (Brix)</td><td>Digital densimeter</td><td>Hourly</td><td>1.080 &rarr; 0.995 SG</td></tr>
              <tr><td>pH</td><td>pH probe</td><td>Daily</td><td>3.0&ndash;3.8</td></tr>
              <tr><td>Alcohol</td><td>Near-infrared spectrometer</td><td>Hourly</td><td>0 &rarr; 12&ndash;15%</td></tr>
              <tr><td>CO&sub2; Release</td><td>Gas flow meter</td><td>Real-time</td><td>Peak fermentation &gt; 10 L/min</td></tr>
            </tbody>
          </table>
          <h3>Gompertz Model (S-Curve)</h3>
          <p>Fermentation progress typically follows an S-shaped curve described by the Gompertz equation:</p>
          <p><strong>Formula</strong>: y(t) = A &times; exp(&minus;exp(&minus;k &times; (t &minus; t_m)))</p>
          <ul>
            <li>y(t): alcohol content or sugar reduction at time t.</li>
            <li>A: maximum change (e.g. total sugar drop of 85 g/L).</li>
            <li>k: fermentation rate constant (affected by temperature and yeast).</li>
            <li>t_m: midpoint time (moment of maximum rate).</li>
          </ul>
          <p><strong>Applications</strong>:</p>
          <ol>
            <li>Fit historical data &rarr; obtain A, k, t_m parameters.</li>
            <li>Predict time to fermentation completion (e.g. 48 hours remaining).</li>
            <li>Real-time deviation monitoring &rarr; trigger alert (e.g. rate below 80% of expected).</li>
          </ol>
          <h3>Anomaly Detection Methods</h3>
          <div class="anomaly-detection-widget">
            <input type="radio" id="anomaly-statistical" name="anomaly-method" class="opt-statistical" checked>
            <input type="radio" id="anomaly-ml" name="anomaly-method" class="opt-ml">
            <input type="radio" id="anomaly-dl" name="anomaly-method" class="opt-dl">
            <div class="selectors">
              <label for="anomaly-statistical">Statistical Methods</label>
              <label for="anomaly-ml">Machine Learning</label>
              <label for="anomaly-dl">Deep Learning</label>
            </div>
            <div class="panels">
              <div class="panel" data-method="statistical">
                <h4>Statistical Anomaly Detection</h4>
                <p><strong>Z-Score Method</strong>:</p>
                <ul>
                  <li>Formula: Z = (x &minus; &mu;) / &sigma;</li>
                  <li>Threshold: |Z| &gt; 3 flagged as anomaly (99.7% confidence interval).</li>
                  <li>Pros: simple, fast, interpretable.</li>
                  <li>Cons: assumes normal distribution; cannot handle temporal dependencies.</li>
                </ul>
                <p><strong>Moving Average Control Chart</strong>:</p>
                <ul>
                  <li>Calculate 10-hour moving average &plusmn; 2&sigma; control limits.</li>
                  <li>Alert if 3 consecutive points exceed limits.</li>
                  <li>Suitable for: fermentation temperature monitoring, steady-state phase.</li>
                </ul>
                <p class="note">Example: Fermentation temperature suddenly rises from 25&deg;C to 32&deg;C (Z=4.5) &rarr; immediate cooling alert.</p>
              </div>
              <div class="panel" data-method="ml">
                <h4>Machine Learning Anomaly Detection</h4>
                <p><strong>Isolation Forest</strong>:</p>
                <ul>
                  <li>Principle: anomalies are isolated more easily (fewer splits needed).</li>
                  <li>Pros: no labels required, handles high dimensions, fast.</li>
                  <li>Cons: sensitive to contamination parameter.</li>
                </ul>
                <p><strong>One-Class SVM</strong>:</p>
                <ul>
                  <li>Principle: learns the boundary of normal data; points outside are anomalies.</li>
                  <li>Pros: handles non-linear boundaries.</li>
                  <li>Cons: slow on large datasets.</li>
                </ul>
                <p><strong>Wine Industry Case</strong>:</p>
                <ul>
                  <li>Input: temperature, density, pH, time, yeast strain, batch size.</li>
                  <li>Training: Isolation Forest trained on 100 normal fermentation batches.</li>
                  <li>Detection: anomaly score &gt; 0.7 for new batch &rarr; alert (e.g. early sign of stuck fermentation).</li>
                </ul>
                <p class="note">Performance: F1 &asymp; 0.85, recall 90% (minimise missed detections).</p>
              </div>
              <div class="panel" data-method="dl">
                <h4>Deep Learning: LSTM Autoencoder</h4>
                <p><strong>Principle</strong>:</p>
                <ol>
                  <li>Train LSTM Autoencoder to compress and reconstruct normal fermentation sequences.</li>
                  <li>Low reconstruction error &rarr; normal; high reconstruction error &rarr; anomaly.</li>
                </ol>
                <p><strong>Architecture</strong>:</p>
                <ul>
                  <li>Input: 24-hour temperature/density time series (one point per hour).</li>
                  <li>Encoder: LSTM (64 &rarr; 32 &rarr; 16 dimensions).</li>
                  <li>Decoder: LSTM (16 &rarr; 32 &rarr; 64 dimensions).</li>
                  <li>Loss: MSE (reconstruction error).</li>
                </ul>
                <p><strong>Threshold Setting</strong>:</p>
                <ul>
                  <li>Calculate mean MSE of normal batches + 3&sigma;.</li>
                  <li>New batch MSE exceeding threshold &rarr; anomaly alert.</li>
                </ul>
                <p><strong>Pros</strong>: Captures complex temporal patterns and multivariate correlations.</p>
                <p><strong>Cons</strong>: Requires large datasets (&gt;500 batches), GPU, low interpretability.</p>
                <p class="note">In practice: detects stuck fermentation 6&ndash;12 hours early, enabling earlier intervention than manual monitoring.</p>
              </div>
            </div>
          </div>
          <h3>Stuck Fermentation Early Warning System</h3>
          <p><strong>Definition of Stuck Fermentation</strong>: Residual sugar &gt; 4 g/L and density change &lt; 0.002 SG over 48 consecutive hours.</p>
          <p><strong>Warning Indicators</strong>:</p>
          <table class="data-table compact">
            <tbody>
              <tr><td>Declining fermentation rate</td><td>Sugar reduction rate &lt; 50% of historical average</td></tr>
              <tr><td>Temperature anomaly</td><td>&lt; 15&deg;C or &gt; 35&deg;C</td></tr>
              <tr><td>Sudden pH drop</td><td>&lt; 2.9 (lactic acid bacteria contamination)</td></tr>
              <tr><td>Yeast activity</td><td>Microscope count &lt; 10&sup6; cells/mL</td></tr>
            </tbody>
          </table>
          <p><strong>AI Warning Process</strong>:</p>
          <ol>
            <li>Collect temperature, density, and pH every hour.</li>
            <li>Feed into LSTM model to predict density curve for the next 24 hours.</li>
            <li>If prediction shows stall (slope &lt; threshold) &rarr; early alert.</li>
            <li>Recommended actions: add nutrients, raise temperature, re-inoculate yeast.</li>
          </ol>
          <h3>Quality Prediction Model</h3>
          <p><strong>Objective</strong>: Predict final sensory score from fermentation data.</p>
          <p><strong>Features</strong>:</p>
          <ul>
            <li>Fermentation parameters: peak temperature, mean temperature, fermentation duration, temperature standard deviation.</li>
            <li>Chemical analysis: alcohol, residual sugar, total acidity, pH, volatile acidity.</li>
            <li>Raw material: grape Brix, acidity, variety, region.</li>
          </ul>
          <p><strong>Model</strong>: Random Forest Regression.</p>
          <p><strong>Results</strong>: R&sup2; = 0.78, RMSE = 2.1 pts (100-point scale).</p>
          <p><strong>Feature Importance</strong>:</p>
          <ol>
            <li>Peak fermentation temperature (32%) &ndash; excessive heat produces fusel alcohols.</li>
            <li>Grape Brix (26%) &ndash; affects wine body balance.</li>
            <li>Volatile acidity (18%) &ndash; indicator of acetic acid bacteria contamination.</li>
          </ol>
          <p class="note">Application: real-time fermentation strategy adjustment to improve quality consistency.</p>
        </div>
      """

data["slides.10.content"] = """
        <div class="chapter-content">
          <h3>AI Use-Case Matrix</h3>
          <div class="ai-usecase-matrix-widget">
            <input type="radio" id="usecase-quality" name="ai-usecase" class="opt-quality" checked>
            <input type="radio" id="usecase-operations" name="ai-usecase" class="opt-operations">
            <input type="radio" id="usecase-marketing" name="ai-usecase" class="opt-marketing">
            <div class="selectors">
              <label for="usecase-quality">Quality Control</label>
              <label for="usecase-operations">Operations Optimisation</label>
              <label for="usecase-marketing">Personalised Marketing</label>
            </div>
            <div class="panels">
              <div class="panel" data-usecase="quality">
                <h4>Quality Control and Sensing</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Application</th><th>Technology</th><th>Benefit</th><th>Implementation Complexity</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Grape Sorting</td><td>Computer Vision (CNN)</td><td>Defect rate &minus;40%</td><td>Medium (requires labelled data)</td></tr>
                    <tr><td>Fermentation Monitoring</td><td>LSTM anomaly detection</td><td>Stuck fermentation &minus;60%</td><td>High (sensor network required)</td></tr>
                    <tr><td>Label Inspection</td><td>OCR + image matching</td><td>Error rate &lt; 0.1%</td><td>Low (mature solutions available)</td></tr>
                    <tr><td>Cork TCA Detection</td><td>E-nose + ML</td><td>Contamination rate &minus;80%</td><td>High (expensive equipment)</td></tr>
                    <tr><td>Colour Consistency</td><td>Spectral analysis + classification</td><td>Batch variation &minus;50%</td><td>Medium</td></tr>
                  </tbody>
                </table>
                <p><strong>Case Study: Computer Vision Grape Sorting</strong>:</p>
                <ul>
                  <li>Image capture: conveyor belt camera (RGB + near-infrared).</li>
                  <li>Model: YOLOv8 detects grapes; ResNet classifies (healthy / rotten / under-ripe).</li>
                  <li>Training: 10,000 annotated images, 97% accuracy.</li>
                  <li>Deployment: Jetson Nano edge computing, real-time sorting (2 tonnes/hour).</li>
                  <li>ROI: equipment cost &euro;50K; annual savings &euro;80K labour + &euro;120K quality premium.</li>
                </ul>
              </div>
              <div class="panel" data-usecase="operations">
                <h4>Operations Optimisation and Scheduling</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Application</th><th>Technology</th><th>Benefit</th><th>Implementation Complexity</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Dynamic Pricing</td><td>Reinforcement Learning / price elasticity model</td><td>Revenue +8&ndash;15%</td><td>Medium</td></tr>
                    <tr><td>Inventory Optimisation</td><td>Time series + linear programming</td><td>Inventory cost &minus;20%</td><td>Medium</td></tr>
                    <tr><td>Logistics Routing</td><td>Genetic algorithm / OR-Tools</td><td>Transport cost &minus;12%</td><td>High</td></tr>
                    <tr><td>Staff Scheduling</td><td>Mixed integer programming</td><td>Labour cost &minus;10%</td><td>Low</td></tr>
                    <tr><td>Energy Management</td><td>Forecasting + load scheduling</td><td>Electricity cost &minus;15%</td><td>Medium</td></tr>
                  </tbody>
                </table>
                <p><strong>Case Study: Dynamic Pricing System</strong>:</p>
                <ul>
                  <li><strong>Objective</strong>: Maximise revenue considering demand elasticity, competition, and inventory.</li>
                  <li><strong>Model</strong>: Price elasticity regression (demand vs price) + reinforcement learning optimisation.</li>
                  <li><strong>Features</strong>: historical price, sales, competitor pricing, inventory level, season, holidays.</li>
                  <li><strong>Strategy</strong>:
                    <ul>
                      <li>High inventory + off-peak &rarr; reduce price 5&ndash;10%.</li>
                      <li>Low inventory + peak season &rarr; increase price 8&ndash;12%.</li>
                      <li>New product launch &rarr; penetration pricing (&minus;15%).</li>
                    </ul>
                  </li>
                  <li><strong>Results</strong>: Revenue +12%, inventory turnover rate +18%.</li>
                </ul>
                <p class="note">Monitor brand perception; avoid frequent large price swings that may alienate customers.</p>
              </div>
              <div class="panel" data-usecase="marketing">
                <h4>Personalised Marketing and Recommendations</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Application</th><th>Technology</th><th>Benefit</th><th>Implementation Complexity</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Product Recommendations</td><td>Collaborative filtering / matrix factorisation</td><td>Conversion rate +25%</td><td>Medium</td></tr>
                    <tr><td>Customer Segmentation</td><td>K-means / RFM analysis</td><td>Marketing ROI +30%</td><td>Low</td></tr>
                    <tr><td>Churn Prediction</td><td>Gradient boosting tree</td><td>Retention rate +15%</td><td>Medium</td></tr>
                    <tr><td>Content Generation</td><td>GPT-4 / Claude</td><td>Content cost &minus;60%</td><td>Low</td></tr>
                    <tr><td>Chatbot</td><td>NLP + RAG</td><td>Customer service cost &minus;40%</td><td>Medium</td></tr>
                  </tbody>
                </table>
                <p><strong>Case Study: Wine Recommendation Engine</strong>:</p>
                <ul>
                  <li><strong>Method</strong>: Collaborative filtering (user&ndash;item matrix factorisation, ALS algorithm).</li>
                  <li><strong>Data</strong>: 50K users &times; 2K wines; rating and purchase history.</li>
                  <li><strong>Latent Factors</strong>: e.g. body, fruitiness, price sensitivity.</li>
                  <li><strong>Recommendation Logic</strong>:
                    <ul>
                      <li>Similar users: find taste-alike users and recommend their favourites.</li>
                      <li>Similar products: find wines with similar profiles (e.g. same variety, different region).</li>
                      <li>Hybrid: 70% collaborative + 20% content-based (variety/region) + 10% popularity.</li>
                    </ul>
                  </li>
                  <li><strong>Evaluation</strong>: NDCG@10 = 0.68, click-through rate +35%, conversion rate +28%.</li>
                </ul>
                <p class="note">Cold-start: use content-based recommendations for new users; switch to collaborative filtering after 5+ interactions.</p>
              </div>
            </div>
          </div>
          <h3>ROI Assessment Framework</h3>
          <p><strong>Cost Analysis</strong>:</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Cost Item</th><th>One-time</th><th>Annual</th></tr>
            </thead>
            <tbody>
              <tr><td>Hardware (sensors, cameras, servers)</td><td>&euro;30K&ndash;200K</td><td>Maintenance 10%</td></tr>
              <tr><td>Software licences (cloud platforms, ML tools)</td><td>&euro;5K&ndash;50K</td><td>Subscription &euro;10K&ndash;100K</td></tr>
              <tr><td>Data collection and annotation</td><td>&euro;10K&ndash;100K</td><td>&ndash;</td></tr>
              <tr><td>Model development (outsourced vs in-house)</td><td>&euro;20K&ndash;150K</td><td>&ndash;</td></tr>
              <tr><td>Integration and deployment</td><td>&euro;15K&ndash;80K</td><td>&ndash;</td></tr>
              <tr><td>Training and change management</td><td>&euro;5K&ndash;30K</td><td>&ndash;</td></tr>
              <tr><td>Operations and monitoring</td><td>&ndash;</td><td>&euro;15K&ndash;60K</td></tr>
            </tbody>
          </table>
          <p><strong>Benefit Quantification</strong>:</p>
          <ul>
            <li><strong>Direct Benefits</strong>: Labour savings, waste reduction, yield improvement, lower defect rate.</li>
            <li><strong>Indirect Benefits</strong>: Brand value uplift, customer satisfaction, staff efficiency, faster decision-making.</li>
            <li><strong>ROI Formula</strong>: (Annual Benefits &minus; Annual Costs) / Total Investment &times; 100%</li>
          </ul>
          <p><strong>Case Study: Fermentation Monitoring System</strong>:</p>
          <table class="data-table compact">
            <tbody>
              <tr><td>Investment</td><td>Hardware &euro;80K + Software &euro;30K + Implementation &euro;40K = &euro;150K</td></tr>
              <tr><td>Annual Cost</td><td>Maintenance &euro;8K + Subscription &euro;15K = &euro;23K</td></tr>
              <tr><td>Benefits</td><td>Stuck fermentation reduced 60% &rarr; saves &euro;120K/year + quality premium +5% &rarr; &euro;80K/year</td></tr>
              <tr><td>Total Benefits</td><td>&euro;200K/year</td></tr>
              <tr><td>Net Benefits</td><td>&euro;200K &minus; &euro;23K = &euro;177K/year</td></tr>
              <tr><td>ROI (Year 1)</td><td>(&euro;177K &minus; &euro;150K) / &euro;150K = 18%</td></tr>
              <tr><td>Payback Period</td><td>10 months</td></tr>
            </tbody>
          </table>
          <h3>Implementation Roadmap</h3>
          <ol>
            <li><strong>Assessment Phase (Months 1&ndash;2)</strong>: Define problem, data inventory, feasibility analysis, vendor selection.</li>
            <li><strong>Pilot Phase (Months 3&ndash;6)</strong>: Small-scale implementation (single line/batch), validate ROI, adjust parameters.</li>
            <li><strong>Scale-up Phase (Months 6&ndash;12)</strong>: Full deployment, staff training, process integration.</li>
            <li><strong>Optimisation Phase (ongoing)</strong>: Monitor performance, update models, expand features.</li>
          </ol>
          <h3>Ethics and Governance</h3>
          <p><strong>Explainability</strong>:</p>
          <ul>
            <li>Use SHAP / LIME to explain black-box model predictions.</li>
            <li>Critical decisions (e.g. redundancy, discriminatory pricing) require human review.</li>
          </ul>
          <p><strong>Bias Monitoring</strong>:</p>
          <ul>
            <li>Regular model fairness audits (e.g. prediction error across regions/price segments).</li>
            <li>Diverse datasets; avoid single-source bias.</li>
          </ul>
          <p><strong>Human&ndash;AI Collaboration</strong>:</p>
          <ul>
            <li>AI provides recommendations; winemaker makes the final decision (human-in-the-loop).</li>
            <li>Build trust: transparency, reversibility, error feedback mechanisms.</li>
          </ul>
          <p class="note">AI is a support tool, not a replacement for professional judgement; retain human final control.</p>
        </div>
      """

data["slides.11.content"] = """
      <p><strong>Five Pillars</strong>:</p>
      <ol>
        <li><strong>Data Governance</strong>: CRISP-DM workflow, six quality dimensions, GDPR compliance.</li>
        <li><strong>Machine Learning</strong>: Regression / classification / clustering, model selection, feature engineering.</li>
        <li><strong>Demand Forecasting</strong>: Prophet seasonal adjustment, XGBoost promotion integration, MAPE &lt; 9%.</li>
        <li><strong>Fermentation Modelling</strong>: Gompertz curve, LSTM anomaly detection, 6&ndash;12 hour advance warning.</li>
        <li><strong>AI Applications</strong>: Quality control, dynamic pricing, recommendation engine; ROI assessment framework.</li>
      </ol>
      <p><strong>Implementation Key</strong>: Small-scale pilot &rarr; validate ROI &rarr; full-scale rollout &rarr; continuous optimisation; maintain human&ndash;AI collaboration and ethical oversight.</p>"""

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("OK l4-10.json content translated")
