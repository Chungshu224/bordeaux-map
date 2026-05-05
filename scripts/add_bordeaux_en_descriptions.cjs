/**
 * Script to add description_en fields to public/bordeaux-regions.json
 * Run: node scripts/add_bordeaux_en_descriptions.cjs
 */
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'public', 'bordeaux-regions.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

// English descriptions indexed by array position (0-based)
// This handles duplicate IDs correctly
const enDescriptions = [
  // 0 – 1er-Côtes-de-Bordeaux_AOC  (Premières Côtes de Bordeaux)
  "Located on the right bank of the Garonne, this appellation has focused exclusively on sweet white wines since 2014. It neighbours prestigious appellations such as Cadillac, Loupiac, and Sainte-Croix-du-Mont.",
  // 1 – Cotes-de-Bordeaux-St-Macaire_AOC
  "On the right bank of the Garonne near Cadillac, producing dry, semi-sweet, and botrytized white wines across approximately 43 hectares.",
  // 2 – Cadillac_AOC
  "Renowned for its botrytized sweet whites, Cadillac sits on the right bank of the Garonne with a microclimate ideal for noble rot development. It became an independent AOC in 1973.",
  // 3 – Bordeaux Haut-Benauge_AOC
  "In the heart of Entre-Deux-Mers, producing dry and a small amount of sweet whites on clay, limestone, and gravel soils at elevations of 85–118 metres.",
  // 4 – St-Foy-Bordeaux_AOC
  "On the south bank of the Dordogne near Bergerac, producing red, white, and sweet wines. It joined the Côtes de Bordeaux alliance in 2016.",
  // 5 – Sainte-Croix-du-Mont_AOC
  "On the right bank of the Garonne with ideal conditions for noble rot development, producing sweet whites capable of ageing for decades in a style comparable to Sauternes.",
  // 6 – Loupiac_AOC
  "On the right bank of the Garonne facing Sauternes across the river, producing high-quality sweet whites often regarded as a more accessible alternative.",
  // 7 – Graves-of-Vayres_AOC
  "Along the Dordogne River with gravelly soils, producing both red and white wines. Reds are Merlot-led; whites feature Sémillon and Sauvignon Blanc.",
  // 8 – Entre-Deux-Mers_AOC
  "Bordeaux's largest white wine appellation, between the Garonne and Dordogne rivers, dedicated to crisp dry whites. Red wines from this territory are labelled under the Bordeaux AOC.",
  // 9 – Entre-deux-Mers-Haut-Benauge_AOC
  "Specialising in dry white wines in the heart of Entre-Deux-Mers on predominantly limestone soils, with fresh, bright wines showing citrus and tropical fruit character.",
  // 10 – Côtes-de-Bordeaux-Francs_AOC
  "Northeast of Libourne on elevated clay-limestone terrain, producing both reds and whites. Merlot-driven reds are fresh and balanced; whites show good potential.",
  // 11 – Côtes-de-Bordeaux-Cadillac_AOC
  "The red wine appellation of the Cadillac area, distinct from the sweet-wine Cadillac AOC. Merlot-dominant reds are supple and fruit-forward with good ageing potential.",
  // 12 – Côtes-de-Bordeaux-Saint-Macaire_AOC
  "On the right bank of the Garonne, producing dry, sweet, and botrytized white wines across approximately 43 hectares of vineyards.",
  // 13 – Bordeaux-Cotes-de-Francs_AOC (Entre-Deux-Mers type)
  "Northeast of Libourne on elevated clay-limestone terrain, producing both reds and whites. Merlot-driven reds offer freshness and balance with good potential.",
  // 14 – Bordeaux-Cotes-de-Castillon_AOC (RightBank-Castillon)
  "On the right bank, producing primarily red wines with a supple, fruit-forward style and good ageing potential.",
  // 15 – Bordeaux-Cotes-de-Fronsac_AOC (RightBank-Fronsac)
  "On the right bank, producing primarily red wines with a rich, full-bodied style and good ageing potential.",
  // 16 – Margaux_AOC
  "The southernmost commune appellation of the Médoc, celebrated for its elegance, complex perfumed aromas, and silky tannins.",
  // 17 – Moulis-en-Medoc_AOC
  "A Left Bank Médoc appellation producing supple, aromatic red wines with good ageing potential.",
  // 18 – Listrac-Medoc_AOC
  "A Left Bank Médoc appellation producing structured, fruit-forward red wines with good ageing potential.",
  // 19 – Haut-Medoc_AOC
  "A broad Left Bank Médoc appellation producing rich, full-bodied red wines with excellent ageing potential.",
  // 20 – Medoc_AOC
  "On the Left Bank, a Cabernet Sauvignon-dominant red wine region distinguished by its unique gravelly soils.",
  // 21 – St-Estephe_AOC
  "A Left Bank Médoc appellation producing structured, full-bodied red wines with excellent ageing potential.",
  // 22 – Pauillac_AOC
  "A prestigious Left Bank Médoc appellation home to three First Growth châteaux, producing elegant, concentrated red wines with great ageing potential.",
  // 23 – St-Julien_AOC
  "A Left Bank Médoc appellation producing elegant, well-structured red wines with consistent quality and excellent ageing potential.",
  // 24 – Pessac-Leognan_AOC
  "A Left Bank Graves appellation producing both red and white wines of exceptional quality, home to many classified Graves châteaux.",
  // 25 – Graves_AOC
  "A broad Left Bank Graves appellation producing both red and white wines in diverse styles with excellent ageing potential.",
  // 26 – Graves-Superieures_AOC
  "A Left Bank Graves appellation dedicated exclusively to sweet white wine production, with a distinctive, age-worthy character.",
  // 27 – Cremant-de-Bordeaux_AOC
  "A sparkling wine appellation producing fresh, fruit-forward wines made using the traditional method.",
  // 28 – Bordeaux-Medoc_AOC (Regional)
  "A regional AOC producing red wines in diverse styles with good ageing potential.",
  // 29 – Bordeaux-Blaye_AOC (Regional)
  "A regional AOC producing smooth, fruit-forward red wines with good ageing potential.",
  // 30 – Bordeaux-Cotes-de-Bourg_AOC (Regional)
  "A regional AOC producing rich, fruit-forward red wines with good ageing potential.",
  // 31 – Bordeaux-Cotes-de-Fronsac_AOC (Regional)
  "A regional AOC producing rich, full-bodied red wines with good ageing potential.",
  // 32 – Bordeaux-Cotes-de-Castillon_AOC (Regional)
  "A regional AOC producing smooth, fruit-forward red wines with good ageing potential.",
  // 33 – Bordeaux-Cotes-de-Francs_AOC (Regional)
  "A regional AOC producing smooth, fruit-forward red wines with good ageing potential.",
  // 34 – Bordeaux-Cotes-de-Saint-Macaire_AOC (Regional)
  "A regional AOC producing fresh, fruit-forward white wines with good ageing potential.",
  // 35 – Bordeaux-Cotes-de-Sainte-Foy_AOC (Regional)
  "A regional AOC producing smooth, fruit-forward red wines with good ageing potential.",
  // 36 – Bordeaux-Cotes-de-Libournais_AOC (Regional)
  "A regional AOC producing smooth, fruit-forward red wines with good ageing potential.",
  // 37 – Bordeaux-Cotes-de-Sauternes_AOC (Regional)
  "A regional AOC producing distinctive sweet white wines with good ageing potential.",
  // 38 – Bordeaux-Cotes-de-Sainte-Croix-du-Mont_AOC (Regional)
  "A regional AOC producing distinctive sweet white wines with good ageing potential.",
  // 39 – Bordeaux-Cotes-de-Loupiac_AOC (Regional)
  "A regional AOC producing distinctive sweet white wines with good ageing potential.",
  // 40 – Bordeaux-Cotes-de-Cerons_AOC (Regional)
  "A regional AOC producing distinctive sweet white wines with good ageing potential.",
  // 41 – Bordeaux-Cotes-de-Barsac_AOC (Regional)
  "A regional AOC producing distinctive sweet white wines with good ageing potential.",
  // 42 – Cotes-de-Bordeaux_AOC (Regional alliance)
  "An alliance AOC covering several right-bank subregions, primarily producing diverse red wines.",
  // 43 – Bordeaux_AOC (Regional – first occurrence)
  "Bordeaux's largest AOC, encompassing the entire Bordeaux wine region and producing red, white, and rosé wines in the greatest volumes and most diverse styles.",
  // 44 – Bordeaux-Superior_AOC (Regional)
  "Offering stricter production standards than the standard Bordeaux AOC, Bordeaux Supérieur yields fuller-bodied, more structured red wines with better ageing potential.",
  // 45 – Côtes-de-Bordeaux_AOC (RightBank-Blaye)
  "A right-bank Côtes de Bordeaux alliance AOC, primarily producing fruit-forward red wines.",
  // 46 – Côtes-de-Bordeaux-Blaye_AOC
  "The Blaye area's Côtes de Bordeaux appellation, producing fresh, fruit-driven red wines.",
  // 47 – Côtes de Blaye_AOC
  "A subappellation of the Blaye area producing approachable, fruit-forward red wines.",
  // 48 – Cotes-de-Bourg_AOC
  "An important right-bank red wine appellation with diverse soils, yielding full-bodied, fruit-forward wines.",
  // 49 – Blaye_AOC
  "A right-bank AOC producing primarily red wines with a smooth, fruit-forward character.",
  // 50 – St-Georges-St-Emilion_AOC
  "One of the Saint-Émilion satellite villages, producing elegant Merlot-dominated red wines.",
  // 51 – St-Emilion_AOC
  "One of Bordeaux's most celebrated right-bank appellations, producing rich Merlot-dominated red wines with excellent ageing potential.",
  // 52 – St-Emilion-Grand-Cru_AOC
  "The higher-tier Saint-Émilion appellation, subject to stricter production standards, yielding more concentrated and age-worthy wines.",
  // 53 – Puisseguin-St-Emilion_AOC
  "One of the Saint-Émilion satellite villages, producing supple Merlot-dominant red wines.",
  // 54 – Pomerol_AOC
  "One of Bordeaux's smallest yet most prestigious appellations, producing Merlot-dominant wines of extraordinary richness and ageing potential.",
  // 55 – Montagne-St-Emilion_AOC
  "One of the Saint-Émilion satellite villages, producing supple, Merlot-driven red wines.",
  // 56 – Lussac-St-Emilion_AOC
  "One of the Saint-Émilion satellite villages, producing Merlot-dominated reds with vibrant fruit character.",
  // 57 – Lalande-de-Pomerol_AOC
  "North of Pomerol, this appellation produces supple Merlot-dominant reds in a style similar to its prestigious neighbour.",
  // 58 – Fronsac_AOC
  "An important right-bank red wine appellation with diverse soils, producing rich, full-bodied, fruit-forward wines.",
  // 59 – Castillon-Cotes-de-Bordeaux_AOC
  "A Côtes de Bordeaux alliance member, producing fresh Merlot-dominant red wines with good ageing potential.",
  // 60 – Canon-Fronsac_AOC
  "Adjacent to Fronsac, this appellation produces concentrated Merlot-dominant red wines of good depth and character.",
  // 61 – Sauternes_AOC
  "One of the world's greatest sweet wine appellations, benefiting from a unique microclimate that encourages noble rot (Botrytis cinerea), producing luscious, complex sweet whites of extraordinary longevity.",
  // 62 – Cerons_AOC
  "North of Sauternes, Cérons produces fresh, fruit-forward sweet whites with distinctive character and good ageing potential.",
  // 63 – Barsac_AOC
  "Within the Sauternes appellation, Barsac produces elegant, refined sweet whites celebrated for their finesse and age-worthiness.",
  // 64 – Bordeaux_AOC (last entry, duplicate of index 43)
  "Bordeaux's largest AOC, encompassing the entire Bordeaux wine region and producing red, white, and rosé wines in the greatest volumes and most diverse styles.",
]

if (enDescriptions.length !== data.length) {
  console.error(`ERROR: descriptions array has ${enDescriptions.length} entries but JSON has ${data.length}`)
  process.exit(1)
}

data.forEach((entry, i) => {
  entry.description_en = enDescriptions[i]
})

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
console.log(`✓ Updated ${data.length} entries in bordeaux-regions.json`)
data.forEach((entry, i) => console.log(`  ${i + 1}. ${entry.name}: ${entry.description_en.substring(0, 60)}…`))
