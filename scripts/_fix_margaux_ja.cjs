const fs=require('fs'), path=require('path')
const file=path.join(__dirname,'..','public','chateaux','coordinates_Margaux_AOC.json')
const data=JSON.parse(fs.readFileSync(file,'utf8'))
const JA2={
  "Château Marquis d'Alesme Becker": '小規模でエレガントなマルゴー第三特等格付けシャトー。繊細で洗練されたキャラクター。',
  "Château d'Arsac": 'マルゴーAOC南部のエクセプショネル。現代アートとモダン醸造を組み合わせた個性あるシャトー。'
}
data.forEach(c=>{ if(JA2[c.name]) c.description_ja=JA2[c.name] })
fs.writeFileSync(file,JSON.stringify(data,null,2),'utf8')
console.log('Fixed Margaux apostrophe châteaux OK')
