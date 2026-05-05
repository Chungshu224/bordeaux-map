/**
 * Adds description_en fields to all château coordinate JSON files.
 * Run: node scripts/add_chateau_en_descriptions.cjs
 */
const fs = require('fs'), path = require('path')
const dir = path.join(__dirname, '..', 'public', 'chateaux')

// ------- English descriptions keyed by château name -------
const EN = {
  // Barsac
  'Château Coutet':          "One of the five First Growths of Barsac, with a long history of producing high-quality botrytized sweet whites.",
  'Château Climens':         "One of the five First Growths of Barsac, celebrated for its delicate, refined character — often called the Queen of Barsac.",
  'Château Doisy-Daëne':     "Renowned for pure, refined botrytized sweet whites; a long-established family estate.",
  'Château Doisy-Védrines':  "The largest Second Growth in Barsac; full-bodied with excellent ageing potential.",
  'Château de Myrat':        "A historic Barsac estate of elegant, refined character.",
  'Château Nairac':          "Celebrated for elegant, refined sweet whites with good ageing capacity.",
  'Château Gravas':          "A family-run Second Growth estate producing fresh, refined wines with balanced sweetness.",
  'Château Caillou':         "Crafted using traditional methods, showcasing Barsac's signature elegance and freshness.",
  'Château Simon':           "A small family estate producing consistent, pure sweet whites.",

  // Graves
  'Château Haut-Brion':          "One of Bordeaux's five First Growths and the only estate listed in both the 1855 Classification and the Graves Classification; renowned internationally for both red and white wines.",
  'Château Pape Clément':        "Dating back to the 13th century, producing highly representative red and white wines of full body with excellent ageing potential.",
  'Château La Mission Haut-Brion':"A peer of Haut-Brion, celebrated for rich, complex red wines; white wine production is very limited.",
  'Château Carbonnieux':         "Renowned for both red and white wines; whites are fresh and elegant, reds well-structured.",
  'Château Smith Haut Lafitte':  "Modern management has greatly elevated quality; both red and white wines now enjoy international acclaim.",
  'Château Malartic-Lagravière': "One of the few estates with classified red and white wines; whites are celebrated for their finesse.",
  'Château Olivier':             "Produces both red and white wines; whites are particularly outstanding in their elegant style.",
  'Château Latour-Martillac':    "Both reds and whites are representative; whites are noted for their floral and mineral character.",
  'Château Bouscaut':            "Both reds and whites are classified; whites are round and full, reds firmly structured.",

  // Haut-Médoc
  'Château Belgrave':        "Located in the southern Haut-Médoc, producing balanced, fruit-forward wines.",
  'Château Camensac':        "A balanced, smooth-tannin Haut-Médoc estate offering excellent value.",
  'Château La Tour Carnet':  "A historic estate with a medieval tower, producing rich, firmly structured wines.",
  "Château d'Agassac":       "A historic medieval fairy-tale castle in Ludon-Médoc; rated Cru Bourgeois Exceptionnel.",
  'Château Arnauld':         "A boutique estate in Arcins village; elevated to the highest Exceptionnel grade in 2020.",
  'Château Belle-Vue':       "Located in Macau, renowned for a high proportion of Petit Verdot imparting intense spice and complexity; elevated to Cru Bourgeois Exceptionnel.",
  'Château Cambon La Pelouse':"A Macau estate that has seen a quality leap in recent years; elevated to Exceptionnel with fruit-forward, approachable wines.",
  'Château Charmail':        "Located in Saint-Seurin-de-Cadourne near Saint-Estèphe, with excellent limestone and clay soils.",
  'Château de Malleret':     "An extensive estate in Le Pian-Médoc, also a noted equestrian centre, producing refined Exceptionnel wines.",
  'Château du Taillan':      "Near Le Taillan-Médoc, with buildings listed as historic monuments and a rare Exceptionnel estate producing both red and white wines.",

  // Listrac
  'Château Clarke':           "Owned by the Rothschild family, with modern management and consistent quality.",
  'Château Fourcas Dupré':    "A family-run estate with a traditional, well-structured style.",
  'Château Fourcas-Hosten':   "Celebrated for balanced style and consistent quality, offering excellent value.",
  'Château Lestage':          "Perched at the highest point of Listrac-Médoc in an elegant Napoléon III château; exuberant black fruit and pepper notes with mid-weight structure.",

  // Margaux
  'Château Margaux':                  "One of Bordeaux's five First Growths and the benchmark for the Margaux appellation; supremely elegant with exceptional ageing potential.",
  'Château Rauzan-Ségla':             "One of the finest Second Growths in Margaux, with a delicate, refined style.",
  'Château Lascombes':                "Known for rich, fruity character and structural depth; develops complex layers with age.",
  'Château Brane-Cantenac':           "Famed for its elegant, fine tannins and floral notes; a benchmark Margaux estate.",
  'Château Palmer':                   "Though classified Third Growth, quality rivals a First Growth — rich, opulent, and with extraordinary ageing potential.",
  'Château d\u2019Issan':              "Celebrated for elegance, finesse, and floral fragrance; a historic Margaux estate.",
  'Château Kirwan':                   "Fruit-forward with good structure; ideal for medium-to-long cellaring.",
  'Château Cantenac-Brown':           "Known for rich fruit and tannic structure; a modern-style estate.",
  'Château Marquis de Terme':         "A well-balanced estate combining fruit and tannin; a reliable Margaux value proposition.",
  'Château Boyd-Cantenac':            "Rich and full-bodied with firm tannins; develops elegant, complex layers with age.",
  'Château Cantemerle':               "Located at the southern tip of Haut-Médoc; elegant, refined, and fruit-forward.",
  'Château Durfort-Vivens':           "A historic Margaux Second Growth known for elegant, refined wines.",
  'Château Giscours':                 "Full-bodied and firmly structured; quality has improved consistently under modern management.",
  'Château Malescot Saint-Exupéry':   "Celebrated for its floral character and elegant tannins; a textbook Margaux style.",
  'Château Pouget':                   "A small boutique estate producing rich, full-tannic wines.",
  'Château Prieuré-Lichine':          "Known for fruit-rich, approachable wines that drink well young.",
  'Château Rauzan-Gassies':           "Shares its origins with Rauzan-Ségla; a historic Margaux Second Growth.",
  'Château Desmirail':                "A reviving Third Growth of delicate, refined character.",
  'Château Ferrière':                 "A small boutique estate of delicate, elegant wines.",
  "Château Marquis d'Alesme Becker":  "A small, elegantly refined Third Growth.",
  'Château du Tertre':                "Located in Arsac; a Fifth Growth with distinctive terroir character.",
  'Château Dauzac':                   "Based in Labarde; quality has continued to improve in recent years.",
  "Château d'Arsac":                  "In the southern Margaux appellation, combining contemporary art with traditional winemaking; one of the rare Exceptionnel estates in Margaux.",
  'Château Paveil de Luze':           "A family-run Margaux estate and one of the rare Exceptionnel estates in the appellation, with silky-smooth tannins.",

  // Moulis
  'Château Chasse-Spleen': "The benchmark estate of Moulis, producing rich, outstanding wines that rival classified growths.",
  'Château Maucaillou':    "A family-run quality estate; balanced style with generous fruit.",
  'Château Poujeaux':      "A top Moulis estate; powerful in style with excellent ageing potential.",

  // Pauillac
  'Château Lafite Rothschild':    "One of Bordeaux's five First Growths and the Pauillac benchmark; supremely elegant with extraordinary ageing potential.",
  'Château Latour':               "Celebrated for rich structure and formidable ageing power; the most powerful First Growth in Pauillac.",
  'Château Mouton Rothschild':    "Elevated to First Growth in 1973, world-famous for its artist-designed labels and opulent style.",
  'Château Pichon Baron':         "One of Pauillac's most representative Second Growths; rich-bodied and firmly structured.",
  'Château Pichon Lalande':       "Known for its feminine elegance and finesse; a Second Growth of notable charm.",
  'Château Pontet-Canet':         "A pioneer in organic and biodynamic viticulture; quality has soared in recent years, rivalling Second Growths.",
  'Château Lynch-Bages':          "Known for rich fruit and structure; greatly prized by collectors.",
  'Château Grand-Puy-Lacoste':    "Classic style and excellent value; an outstanding Fifth Growth in Pauillac.",
  'Château Batailley':            "Known for firm structure and ageing potential; a traditional-style Pauillac.",
  'Château Haut-Batailley':       "A branch of the Batailley family; refined and elegant, with steadily improving quality.",
  'Château Clerc Milon':          "Owned by the Rothschild family; rich in style with generous fruit.",
  'Château Croizet-Bages':        "Firmly structured with abundant tannins; suited for long-term cellaring.",
  "Château d'Armailhac":          "Neighbouring Mouton Rothschild; elegant style with excellent value.",
  'Château Duhart-Milon':         "A sister château of Lafite Rothschild; refined and elegant.",
  'Château Grand-Puy Ducasse':    "Classic style with good structure; a reliable Fifth Growth in Pauillac.",
  'Château Haut-Bages-Libéral':   "Rich and fruit-forward; quality has improved noticeably in recent years.",
  'Château Lynch-Moussas':        "Balanced and approachable; an excellent-value Pauillac estate.",
  'Château Pédesclaux':           "Quality has improved rapidly under modern management; rich and full-bodied.",

  // Pessac-Léognan (same names as Graves but with different descriptions)
  // These are overridden by the Pessac-Leognan file's descriptions
  'Domaine de Chevalier':       "One of the top stars of the Graves classification; though called a 'Domaine', it ranks at the very top — both red and white are exceptional.",
  'Château Haut-Bailly':        "Planted on elevated terrain, producing rigorously structured and supremely elegant reds; widely recognised as the finest estate in the Graves.",
  'Château de Fieuzal':         "Its reds are in the Graves classification and perform admirably; the non-classified whites are equally outstanding — rich and complex.",
  'Château La Tour Haut-Brion': "Once a classified estate, it was absorbed by La Mission Haut-Brion in 2005; wines bottled under the original label are now collector's items.",
  'Château Couhins':            "Owned by INRA (France's national agricultural research institute); selected for the Graves classification on the strength of its outstanding whites.",
  'Château Couhins-Lurton':     "Split off from Couhins and managed by the André Lurton family; produces an emblematic 100% Sauvignon Blanc classified white wine.",
  'Château Laville Haut-Brion': "Celebrated for legendary white wines (Graves white wine classification); officially renamed Château La Mission Haut-Brion Blanc in 2009.",

  // Pomerol
  'Château Pétrus':            "One of the world's most famous Pomerol estates; 100% Merlot, of extraordinary collectability and ageing potential.",
  'Château Lafleur':           "Tiny production; rich, complex style — a legendary Pomerol estate on a par with Pétrus.",
  'Château Le Pin':            "Extremely limited production micro-estate; wines are rare and expensive, with a rich, refined style.",
  'Château Trotanoy':          "Known for its structured character and ageing potential; one of Pomerol's most representative classic estates.",
  'Château La Conseillante':   "Known for a graceful, refined Merlot-dominant style, often displaying violet aromatics.",
  "Château L'Évangile":        "Under the Lafite-Rothschild group; rich and with fine-grained tannins, outstanding in age.",
  'Château Clinet':            "Known for rich fruit and good structure; quality has improved dramatically in recent years.",
  'Château Gazin':             "Neighbouring Pétrus; balanced style and excellent value for a top Pomerol estate.",
  'Château Nénin':             "Managed by the Delon family; modern in style with expressive fruit and good ageing potential.",
  'Château Petit-Village':     "At the centre of the plateau, its triangular vineyard is covered in deep gravel; managed by AXA Millésimes, with an opulent style.",
  'Château Certan de May':     "At the heart of the Pomerol plateau, neighbouring Lafleur and Pétrus; firmly classic and traditional with deep ageing capacity.",
  'Château Hosanna':           "Formerly Certan-Giraud, acquired by the Moueix family; located on prime plateau land with old-vine Cabernet Franc in the blend.",
  'Château Latour à Pomerol':  "Extremely diverse soils; elegant yet powerful, and has produced one of the legendary Bordeaux bottles of the 1961 vintage.",

  // Sauternes
  "Château d'Yquem":       "The world's most famous botrytized sweet wine estate; the only Premier Cru Supérieur, incomparable in quality and ageing potential.",
  'Château Suduiraut':     "One of Sauternes' five First Growth estates; rich, luscious, and multi-layered.",
  'Château Guiraud':       "Known for organic viticulture; complex aromatics and a refined palate.",
  'Château Rieussec':      "Under the Lafite-Rothschild group; rich sweet whites with excellent ageing potential.",
  'Château La Tour Blanche':"Known for rich fruit and honey aromatics with well-balanced sweetness and acidity.",
  'Château Filhot':        "A historic Second Growth; sweet whites of refined elegance.",

  // Saint-Émilion Grand Cru
  'Château Cheval Blanc':  "One of Saint-Émilion's most famous Class A estates; Merlot and Cabernet Franc blend of elegance, refinement, and exceptional ageing potential.",
  'Château Ausone':        "Very limited production; rich, complex style — a legendary Saint-Émilion estate on a par with Cheval Blanc.",
  'Château Pavie':         "Known for concentrated structure and formidable ageing power; a modern-style Class A estate.",
  'Château Angélus':       "Known for elegant refinement; recently elevated to Class A, its bell-motif label is highly recognisable.",
  'Château Figeac':        "Elevated to Class A in 2022; high proportion of Cabernet Franc, producing elegant wines with excellent ageing potential.",
  'Château Canon':         "Located in the heart of the Saint-Émilion village; refined and elegant, with quality greatly improved in recent years.",
  'Château La Gaffelière': "A historic Class B estate; well-balanced style with good ageing track record.",
  'Château Troplong Mondot':"Located on elevated ground; rich and full-bodied with strong tannin structure and excellent ageing potential.",
  'Château Valandraud':    "A benchmark garage wine of the Right Bank; modern in style, fruit-forward, and consistently improving.",
  'Château Badette':       "On the limestone plateau, Merlot-dominant, producing rounded reds with a mineral character.",
  'Château Balestard La Tonnelle': "Old vines on the northeast plateau; full-bodied, fruit-forward, with firm tannic structure — a historic estate.",
  'Château Barde-Haut':    "North slope of Saint-Christophe hill, well-exposed; Merlot performs with elegance and roundness here, with quality significantly improved in recent years.",
  'Château Bellefont-Belcier': "Saint-Laurent slope on limestone soils; Merlot and Cabernet Franc blend of refined, floral character.",
  'Château Bellevue':      "Deep on the western plateau with open views; Merlot-dominant, soft and round, ideal for early drinking.",
  'Château Berliquet':     "Western slope of the plateau; clay-limestone soils yield fine tannins and generous fruit.",
  'Château Boutisse':      "Open land on the northeast plateau; high Merlot proportion, exuberant fruit, smooth tannins, and easy drinking.",
  'Château Cadet-Bon':     "Limestone terrace on the northern plateau; balanced Merlot and Cabernet Franc, tightly structured and fresh.",
  'Château Cap de Mourlin': "Northeast plateau; old-vine Merlot producing deep colour, rich fruit, and good complexity.",
  'Château Chauvin':       "Northwest sandy clay hills; Merlot-dominant, fruit-friendly, employing biodynamic viticulture.",
  'Clos de Sarpe':         "Small boutique estate on limestone plateau; old-vine Merlot, rich and round, with limited production.",
  'Château Corbin':        "Neighbouring the Pomerol border on sandy clay; Merlot-dominant, full-bodied, and early-ripening.",
  'Château Corbin Michotte':"On the Pomerol border in clay and gravel; Merlot and Cabernet Franc blend with gentle fruit.",
  'Château Côte de Baleau':"Southwest-facing slope on clay-limestone; distinctive minerality with refined structure, managed as a sister estate to a monastery.",
  'Château Croix de Labrie':"Small boutique north-slope estate; organic farming, Merlot-dominant, elegant with mineral nuances.",
  'Clos Badon Thunevin':   "Adjacent to the east slope of Ausone; Merlot-dominant clay-stone plots, rich and round, created by renowned winemaker Jean-Luc Thunevin.",
  "Clos de l'Oratoire":    "Northeast-facing oratory plateau on limestone; Merlot and Cabernet Franc blend under Von Neipperg management.",
  'Clos des Jacobins':     "Ancient vineyard in the town centre on dense limestone; Merlot-dominant, historic estate of refined elegance.",
  'Château Dassault':      "Large estate in the centre of the plateau; high Merlot proportion, modern techniques, generous fruit, and round, approachable wines.",
  'Château de Ferrand':    "Eastern Ferrand estate on relatively flat sandy clay; Merlot of soft, elegant character.",
  'Château de Pressac':    "Southeast Vignonet hills; historic site where the Hundred Years War peace was signed, with quality greatly elevated after recent reform.",
  'Château Destieux':      "Southeast slope on clay-limestone; Merlot-dominant with rich, deep fruit and good ageing potential.",
  'Château Faugères':      "The easternmost large estate, near Castillon; modern winery built under Silvio Denz's investment, producing consistently solid wines.",
  'Château Fleur Cardinale':"East slope of Saint-Étienne on clay and gravel; pure Merlot base, with quality greatly improved in recent years.",
  'Château Fombrauge':     "Large Saint-Christophe estate on clay-limestone; Merlot-dominant, generous fruit, under Bernard Magrez ownership.",
  'Château Fonplégade':    "Named for an ancient spring at the plateau centre; biodynamic viticulture, Merlot-dominant, refined and deep.",
  'Château Fonroque':      "Northwest plateau limestone; Merlot-dominant, organic farming, firmly structured with a mineral note.",
  'Château Franc Mayne':   "Western plateau on limestone; high Merlot proportion, full and round with fine tannins.",
  'Château Grand Corbin':  "Northwest gravel terrace, neighbouring Pomerol; Merlot-dominant, smooth fruit, round style.",
  'Château Grand Corbin-Despagne': "Northwest gravel terrain; organic farming, Merlot-dominant, modern winemaking, earning high ratings in recent years.",
  'Château Grand Mayne':   "Western plateau limestone; high Merlot proportion with old-vine intensity; a charming French country château setting.",
  'Château Guadet':        "North plateau on ancient limestone; balanced Merlot and Cabernet Franc, refined and elegant — a new-generation boutique estate.",
  'Château Haut-Sarpe':    "Northeast slope of Saint-Christophe on clay-limestone; Merlot-dominant with rich fruit, managed by the Janoueix family.",
  'Château Jean Faure':    "Adjacent to the west of Cheval Blanc on gravel soils; high Cabernet Franc proportion, elegant with vivid floral notes.",
  'Château La Commanderie':"Near the western Pomerol border on sandy clay; Merlot-dominant, gentle and round — the site of a historic knights' commandery.",
  'Château La Confession':  "Northwest clay and gravel; garage-wine style, Merlot-dominant, tiny production, intensely rich and concentrated.",
  'Château La Couspaude':   "East limestone plateau; Merlot-dominant, managed by the Aubert family, full in style with improved quality.",
  'Château La Croizille':   "Northeast slope on limestone; small boutique estate, Merlot-dominant with vibrant fruit — a rising star.",
  'Château La Dominique':   "Adjacent to Cheval Blanc and Pétrus; sandy clay, Merlot-dominant, with a lush style and a landmark modern cellar.",
  'Château La Fleur Morange':"Northeast sandy soils; rare old-vine Merlot in a garage-wine style, exuberant fruit, with a distinctive character.",
  'Château La Marzelle':    "West slope of the plateau on clay-limestone; Merlot-dominant, biodynamic farming, refined and elegant.",
  'Château La Serre':       "Centre of the northern plateau on clay-limestone; Merlot-dominant, well-balanced, a traditional historic estate.",
  'Château La Tour Figeac': "Sister estate of Figeac on gravel soils; balanced Merlot and Cabernet Franc, round and approachable.",
  'Château Laniote':        "North slope of the plateau on limestone; small family estate, Merlot-dominant with rich mineral notes and limited production.",
  'Château Larmande':       "North slope clay-limestone; Merlot and Cabernet Franc blend, well-balanced with high complexity — a historic estate.",
  'Château Laroque':        "Large Saint-Christophe estate on high limestone terrace; Merlot-dominant, refined fruit, and a spectacular setting.",
  'Château Laroze':         "West plateau on clay-limestone; Merlot-dominant, combining fruit and floral notes in a refined, rounded style.",
  'Château Le Châtelet':    "South slope on clay-limestone; Merlot-dominant, refined character, small boutique estate.",
  'Château Le Prieuré':     "Former priory on the east slope on clay-limestone; Merlot-dominant, managed by the Von Neipperg family, refined and classic.",
  'Château Mangot':         "Eastern Saint-Étienne on sandy clay; Merlot-dominant, vibrant fruit, a high-value boutique estate.",
  'Château Monbousquet':    "Southern lowland on gravel soils; Merlot-dominant, managed by Gérard Perse, modern style with fragrant aromatics.",
  'Château Montlabert':     "Northwest plateau on clay-limestone; Merlot-dominant, family-run, generous fruit, approachable style.",
  'Château Montlisse':      "Eastern gravel soils; old-vine Merlot boutique estate, refined and elegant, assembled from multiple plots.",
  'Château Moulin du Cadet':"North slope of the plateau on pure limestone; old-vine Merlot, precise with strong mineral character, managed by the Moueix family.",
  'Château Péby Faugères':  "Flagship selection from Faugères' finest plots; ultra-premium, Merlot-dominant, with extraordinary ageing potential — designed by architect Portzamparc.",
  'Château Petit Faurie de Soutard': "North side of the plateau on limestone; Merlot-dominant, traditionally balanced style, neighbouring Soutard.",
  'Château Ripeau':         "Western plateau on gravel soils; Merlot-dominant, light and gentle fruit, ideal for early drinking.",
  'Château Rochebelle':     "Southeast slope on clay-limestone; Merlot-dominant, refined boutique estate of graceful character.",
  'Château Rol Valentin':   "Northwest clay and gravel; garage-wine style, Merlot-dominant, concentrated fruit, created by Erik Prissette.",
  'Château Saint-Georges (Côte Pavie)':"South section of Pavie slope on clay-limestone; Merlot-dominant, balanced structure with refined floral notes.",
  'Château Sansonnet':      "Northeast plateau on clay-limestone; Merlot-dominant, organic farming, lively fruit and mineral character.",
  'Château Soutard':        "Large north plateau limestone estate; Merlot-dominant, traditional and firmly structured with good ageing potential, under La Mondiale group ownership.",
  'Château Tour Baladoz':   "South slope area on limestone; Merlot-dominant, fresh and refined, with steadily improving quality.",
  'Château Tour Saint Christophe': "Northernmost large estate on high limestone terrace; Merlot-dominant, generous fruit, managed by Bernard Moueix.",
  'Château Villemaurine':   "North plateau pure limestone; Merlot-dominant with outstanding mineral character; the name dates to Moorish occupation, and the famous limestone cellars are renowned.",
  'Château Yon-Figeac':     "Western area near Figeac on sandy clay; Merlot-dominant, round fruit, with modern agricultural practices improving quality.",
  'Clos Dubreuil':          "Southeast slope boutique estate on clay-limestone; Merlot-dominant, tiny production, garage-wine style, highly rated.",
  'Clos Saint-Julien':      "Micro-plot in the town centre on pure limestone; Merlot-dominant, refined with very limited production — a rare gem.",
  'Clos Saint-Martin':      "Ancient micro-garden at the plateau centre on limestone; Merlot and Cabernet Franc blend, managed by the Reiffers family.",
  'Couvent des Jacobins':   "Former medieval Jacobin monastery; limestone cellar, Merlot-dominant, historic in character with refined elegance — famous for its cellar facilities.",
  'Lassègue':               "Large Saint-Hippolyte estate on clay-limestone; Merlot-dominant, developed by American investors, generous and round with excellent value.",
  'Château Beau-Séjour Bécot': "Western limestone terrace; Merlot and Cabernet Franc blend, full and fruit-rich, managed by the Bécot family.",
  'Château Beauséjour Héritiers Duffau-Lagarrosse': "Adjacent to Ausone's slope on pure limestone; Merlot-dominant, tiny production, refined and pure — one of Saint-Émilion's most soulful estates.",
  'Château Bélair-Monange': "Steep slope adjacent to Ausone on deep limestone; Merlot-dominant with intense minerality, managed by the Moueix family.",
  'Château Canon La Gaffelière': "Foot of the slope on sandy clay; particularly high Cabernet Franc proportion, fragrant florals, refined and elegant, managed by Von Neipperg.",
  'Château Larcis Ducasse': "Southeast limestone slope adjacent to Pavie; Merlot-dominant, biodynamic farming, refined and deep — ratings have soared in recent years.",
  'Château Pavie Macquin':  "Extended east terrace slope on clay-limestone; Merlot-dominant, biodynamic farming, full-bodied style, neighbouring Pavie.",
  'Château Trottevieille':  "Northeast plateau limestone terrace; Merlot-dominant, historic and traditionally refined — winemaking has greatly improved in recent years.",
  'Clos Fourtet':           "Beside the western town wall on plateau limestone and crinoid fossil layers; Merlot-dominant with vivid minerality, under Cuvelier family ownership.",
  'La Mondotte':            "An extremely small plot (2 ha) adjacent to Canon La Gaffelière on clay-limestone slope; old-vine Merlot, ultra-concentrated with exceptional ageing potential.",

  // Saint-Estèphe
  "Château Cos d'Estournel": "Famous for its oriental-palace façade; rich and powerfully structured — one of Saint-Estèphe's most iconic estates.",
  'Château Montrose':        "Known for strong structure and ageing potential; one of Saint-Estèphe's top Second Growths.",
  'Château Calon-Ségur':     "Famous for its heart-shaped label; refined and elegant, developing captivating complexity with age.",
  'Château Lafon-Rochet':    "Known for its bright yellow château building; well-balanced and excellent value.",
  'Château Meyney':          "A historic estate; rich in style with consistently improving quality.",
  'Château Phélan Ségur':    "An unofficial 'super estate' that opts out of the Cru Bourgeois classification; quality rivals classified growths in Saint-Estèphe's golden zone with refined complexity.",
  'Château Haut-Marbuzet':   "Known for smooth texture and complex aromatics; a rounder style.",
  'Château Le Boscq':        "Situated along the Gironde; rich in style with notable tannic structure.",
  'Château Lilian Ladouys':  "A rising Saint-Estèphe star; following acquisition by the Lorenzetti family, quality has surged — vibrant fruit and a round palate.",
  'Château Cos Labory':      "Neighbouring Cos d'Estournel; elegant style with excellent value.",
  'Château de Pez':          "One of the oldest estates in Saint-Estèphe, owned by the prestigious Louis Roederer family; full-bodied, with Cru Bourgeois standing.",
  'Château Petit Bocq':      "A vibrant Exceptionnel in Saint-Estèphe; rich black fruit and refined structure have earned wide acclaim.",

  // Saint-Julien
  'Château Léoville Las Cases': "The most representative Second Growth of Saint-Julien; rigorous in structure and with extraordinary ageing potential — often called a 'Super Second'.",
  'Château Léoville Barton':   "Known for traditional winemaking and consistent quality; classic, firmly structured style.",
  'Château Léoville Poyferré': "Known for rich fruit and smooth tannins; quality has greatly improved in recent years.",
  'Château Ducru-Beaucaillou': "Known for its gravelly terroir and elegant style; refined in texture with excellent ageing potential.",
  'Château Gruaud Larose':     "Rich, full-bodied, and firmly structured; ideal for long-term cellaring.",
  'Château Lagrange':          "Known for balanced style and consistent quality; excellent value.",
  'Château Talbot':            "One of Saint-Julien's largest estates; round and fruit-forward.",
  'Château Branaire-Ducru':    "Known for its delicate fruit and refined style; quality has improved consistently.",
  'Château Beychevelle':       "Famous for its ship-on-sail label; smooth, approachable, and widely popular.",
  'Château Langoa Barton':     "Sister château to Léoville Barton under the Barton family; classic style with excellent value.",
}

// ------- Rank translation map -------
const RANK_EN = {
  '一級酒莊 (Premier Cru Classé)':                       'Premier Cru Classé',
  '二級酒莊 (Deuxième Cru Classé)':                      'Deuxième Cru Classé',
  'Barsac 地區優質酒莊':                                  'Distinguished Barsac Estate',
  '一級酒莊 (Premier Grand Cru Classé, Graves)':         'Premier Grand Cru Classé (Graves)',
  'Graves 分級酒莊 (Grand Cru Classé de Graves)':        'Grand Cru Classé de Graves',
  '五級酒莊 (Cinquième Grand Cru Classé 1855)':          '5th Growth (Grand Cru Classé 1855)',
  ' 四級酒莊 (Quatrième Grand Cru Classé 1855)':         '4th Growth (Grand Cru Classé 1855)',
  '四級酒莊 (Quatrième Grand Cru Classé 1855)':          '4th Growth (Grand Cru Classé 1855)',
  '特等中級莊 (Cru Bourgeois Exceptionnel)':              'Cru Bourgeois Exceptionnel',
  '中級酒莊 (Cru Bourgeois)':                             'Cru Bourgeois',
  '一級酒莊 (Premier Grand Cru Classé 1855)':            '1st Growth (Premier Grand Cru Classé 1855)',
  '二 級酒莊 (Deuxième Grand Cru Classé 1855)':          '2nd Growth (Deuxième Grand Cru Classé 1855)',
  '二級酒莊 (Deuxième Grand Cru Classé 1855)':           '2nd Growth (Deuxième Grand Cru Classé 1855)',
  '三級酒莊 (Troisième Grand Cru Classé 1855)':          '3rd Growth (Troisième Grand Cru Classé 1855)',
  '中級酒莊 (Cru Bourgeois Exceptionnel)':               'Cru Bourgeois Exceptionnel',
  '一級酒莊 (Premier Grand Cru Classé 1973)':            'Premier Grand Cru Classé (1973)',
  '1855一級莊 / 格拉夫列級莊':                            '1st Growth 1855 / Classified Graves Growth',
  '格拉夫列級莊 (Crus Classés de Graves)':               'Crus Classés de Graves',
  'Pomerol 頂級名莊':                                     'Top Pomerol Estate',
  'Pomerol 優質名莊':                                     'Distinguished Pomerol Estate',
  '特級超級酒莊 (Premier Cru Supérieur 1855)':           'Premier Cru Supérieur 1855',
  '一級酒莊 (Premier Cru Classé 1855)':                  'Premier Cru Classé 1855',
  '二級酒莊 (Deuxième Cru Classé 1855)':                 'Deuxième Cru Classé 1855',
  '特級A級 (Premier Grand Cru Classé A)':               'Premier Grand Cru Classé A',
  '特級B級 (Premier Grand Cru Classé B)':               'Premier Grand Cru Classé B',
  '聖愛美 濃特級酒莊 (Grand Cru Classé)':               'Saint-Émilion Grand Cru Classé',
  '聖愛美濃特級酒莊 (Grand Cru Classé)':                'Saint-Émilion Grand Cru Classé',
  '聖埃斯泰夫優質名莊':                                   'Distinguished Saint-Estèphe Estate',
  'Cru Bourgeois Exceptionnel 標等 / 超級名莊':          'Cru Bourgeois Exceptionnel',
}

let totalUpdated = 0, totalSkipped = 0

const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
files.forEach(f => {
  const filePath = path.join(dir, f)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let fileUpdated = 0, fileSkipped = 0

  data.forEach(c => {
    if (EN[c.name]) {
      c.description_en = EN[c.name]
      fileUpdated++
    } else {
      fileSkipped++
      console.warn(`  ⚠ No EN description for: "${c.name}" in ${f}`)
    }
    if (c.rank && RANK_EN[c.rank.trim()]) {
      c.rank_en = RANK_EN[c.rank.trim()]
    } else if (c.rank) {
      // Try to extract French from parentheses as fallback
      const m = c.rank.match(/\(([^)]+)\)/)
      c.rank_en = m ? m[1] : c.rank
    }
  })

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`✓ ${f}: ${fileUpdated} updated, ${fileSkipped} skipped`)
  totalUpdated += fileUpdated
  totalSkipped += fileSkipped
})

console.log(`\n✅ Done: ${totalUpdated} châteaux updated, ${totalSkipped} skipped`)
