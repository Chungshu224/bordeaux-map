#!/usr/bin/env python3
"""
為布根地地圖 Cote-de-Nuits 和 Cote-de-Beaune 的
特級園（Grand Cru）和一級園（Premier Cru）加入日文翻譯。
lookup key = entry["fullName"]，支援去除括號後綴的模糊比對。
"""
import json
import os
import re

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "bourgogne", "data")

# ──────────────────────────────────────────────────────────────────────────────
# JA_TRANSLATIONS : key = entry["fullName"] (exact)
# 括號後綴如 (Pernand)、(Puligny) 會在 get_ja() 中自動去除後再查。
# ──────────────────────────────────────────────────────────────────────────────
JA = {

    # ════════════════════════════════════════════════════════
    # CÔTE DE NUITS ── GEVREY-CHAMBERTIN GRAND CRUS
    # ════════════════════════════════════════════════════════
    "AOC Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、鉄分を豊富に含む",
        "wineStyle": "壮大な構造、濃密で複雑、卓越した熟成ポテンシャル",
        "tastingNotes": "ブラックベリー・チェリー・スパイス・革・ミネラル",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Chambertin Clos de Bèze Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土、鉄酸化物を豊富に含む",
        "wineStyle": "優雅で繊細、複雑な香り、絹のようなタンニン",
        "tastingNotes": "赤い果実・スミレ・スパイス・森の下草・ミネラル",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Chapelle Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩土壌、排水良好",
        "wineStyle": "優雅で繊細、活発な酸味、バランスの取れた構造",
        "tastingNotes": "いちご・チェリー・バラの花びら・スパイス",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Charmes Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "深い粘土石灰岩",
        "wineStyle": "豊満で丸みがあり、果実味豊か、親しみやすい",
        "tastingNotes": "黒チェリー・プラム・バニラ・コーヒー",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Griotte Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "薄い石灰岩土壌、底層は固い岩盤",
        "wineStyle": "精緻で優雅、香りが豊か、繊細なタンニン",
        "tastingNotes": "モレロチェリー・バラ・スパイス・ミネラル",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Latricières Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、鉄分を含む",
        "wineStyle": "力強く、緊密な構造、優れた熟成力",
        "tastingNotes": "黒い果実・革・スモーキー・ミネラル",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Mazis Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土、石が多め",
        "wineStyle": "濃密で深み豊か、しっかりしたタンニン、複雑な層",
        "tastingNotes": "ブラックベリー・スパイス・トリュフ・大地の香り",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Mazoyères Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "深い粘土土壌",
        "wineStyle": "豊かで柔らか、果実味充分、飲みやすい",
        "tastingNotes": "赤い果実・バニラ・チョコレート・スパイス",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },
    "AOC Ruchottes Chambertin Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "薄い石灰岩土壌、石が多い",
        "wineStyle": "精緻で繊細、複雑な香り、強いミネラル感",
        "tastingNotes": "赤い果実・花のアロマ・ミネラル・スパイス",
        "agingPotential": "15-20年",
        "climate": "半大陸性気候、コート・ドールの中心部に位置",
    },

    # Gevrey 1er Cru overview + 主要クリマ
    "AOC Gevrey-Chambertin 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土の混合、クリマによって異なる",
        "wineStyle": "村名より複雑で集中、特級園に次ぐ品質",
        "tastingNotes": "黒い果実・スパイス・ミネラル・花のアロマ",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Gevrey-Chambertin 1er Cru Clos Saint-Jacques": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、鉄分豊富",
        "wineStyle": "特級園に匹敵する品質、複雑で力強い",
        "tastingNotes": "ブラックベリー・スミレ・スパイス・革・ミネラル",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Gevrey-Chambertin 1er Cru Lavaut Saint-Jacques": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "力強く構造的、深みのある果実味",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Gevrey-Chambertin 1er Cru Les Cazetiers": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで複雑、優れたバランス",
        "tastingNotes": "チェリー・スパイス・ミネラル・花のアロマ",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Gevrey-Chambertin 1er Cru Estournelles-Saint-Jacques": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "エレガントで複雑、花のアロマが豊か",
        "tastingNotes": "チェリー・スパイス・花・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Gevrey-Chambertin 1er Cru Combe au Moine": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く個性的",
        "tastingNotes": "黒い果実・スパイス・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Gevrey-Chambertin 1er Cru Champeaux": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "力強く果実味豊か",
        "tastingNotes": "黒い果実・スパイス・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },

    # ════════════════════════════════════════════════════════
    # MOREY-SAINT-DENIS GRAND CRUS
    # ════════════════════════════════════════════════════════
    "AOC Clos de Tart Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土の混合、鉄分豊富",
        "wineStyle": "力強く、優雅さと力を兼ね備える",
        "tastingNotes": "黒チェリー・野生のベリー・スパイス・ミネラル",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Clos des Lambrays Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土の混合",
        "wineStyle": "優雅で繊細、卓越した熟成ポテンシャル",
        "tastingNotes": "赤い果実・スパイス・バラの花びら・トリュフ",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Clos Saint-Denis Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "薄い土壌、石灰岩を覆う",
        "wineStyle": "極めて優雅で繊細、複雑な香り",
        "tastingNotes": "チェリー・ラズベリー・花のアロマ・スパイス",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Clos de la Roche Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土の混合、大量の石を含む",
        "wineStyle": "しっかりした構造、力強くも優雅さを失わない",
        "tastingNotes": "黒い果実・スパイス・ミネラル・獣性のアロマ",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    # Bonnes Mares in Morey (no hyphen)
    "AOC Bonnes Mares Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "白土（白亜質石灰岩）と赤土（鉄質粘土）の区画に分かれる",
        "wineStyle": "力強く、しっかりした構造、卓越した熟成ポテンシャル",
        "tastingNotes": "ブラックベリー・野生のベリー・スパイス・ミネラル・獣性",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    # Morey 1er Cru overview + 主要クリマ
    "AOC Morey-Saint-Denis 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "村名より複雑、特級園に次ぐ品質",
        "tastingNotes": "チェリー・スパイス・ミネラル・花のアロマ",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Morey-Saint-Denis 1er Cru Monts Luisants": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "白も赤も個性豊か、ユニークなクリマ",
        "tastingNotes": "白：白桃・柑橘・ミネラル。赤：チェリー・スパイス",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },

    # ════════════════════════════════════════════════════════
    # CHAMBOLLE-MUSIGNY GRAND CRUS
    # ════════════════════════════════════════════════════════
    "AOC Musigny Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土の混合、排水良好",
        "wineStyle": "優雅で繊細、芳香複雑、絹のような質感",
        "tastingNotes": "スミレ・バラ・赤い果実・スパイス・ミネラル",
        "agingPotential": "20-40年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    # Bonnes-Mares in Chambolle (with hyphen)
    "AOC Bonnes-Mares Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩基盤の上の赤土と粘土",
        "wineStyle": "壮大な構造、力と優雅さを兼備",
        "tastingNotes": "ブラックベリー・チェリー・スパイス・革・ミネラル",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    # Chambolle 1er Cru overview + 主要クリマ
    "AOC Chambolle-Musigny 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "村名より複雑で芳香豊か、花のアロマが特徴",
        "tastingNotes": "チェリー・スミレ・スパイス・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Chambolle-Musigny 1er Cru Les Amoureuses": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土、薄い表土",
        "wineStyle": "特級園に匹敵、極めてエレガント、花のアロマ",
        "tastingNotes": "バラ・スミレ・赤い果実・スパイス・絹のようなタンニン",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Chambolle-Musigny 1er Cru Les Charmes": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで果実味豊か、バランス良好",
        "tastingNotes": "チェリー・ラズベリー・花・スパイス・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Chambolle-Musigny 1er Cru Les Fuées": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで繊細",
        "tastingNotes": "チェリー・花・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Chambolle-Musigny 1er Cru Les Sentiers": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く構造的",
        "tastingNotes": "黒い果実・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },

    # ════════════════════════════════════════════════════════
    # FLAGEY-ÉCHÉZEAUX GRAND CRUS
    # ════════════════════════════════════════════════════════
    "AOC Grands-Echezeaux Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と特殊な礫石層",
        "wineStyle": "重量級、卓越した熟成力",
        "tastingNotes": "深い色の果実・ミネラル・革・スパイス",
        "agingPotential": "20-40年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Echezeaux Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と礫石層、複雑で多様な土壌",
        "wineStyle": "豊かで層が厚く、長期熟成に適する",
        "tastingNotes": "黒チェリー・ブラックベリー・スパイス・ミネラル・革",
        "agingPotential": "20-40年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },

    # ════════════════════════════════════════════════════════
    # VOSNE-ROMANÉE GRAND CRUS
    # ════════════════════════════════════════════════════════
    "AOC Romanée-Conti Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土、鉄分豊富",
        "wineStyle": "究極のエレガンス、複雑で深遠、比類なき存在",
        "tastingNotes": "バラの花びら・スミレ・黒チェリー・スパイス・ミネラル・トリュフ",
        "agingPotential": "20-50年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC La Tâche Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土、鉄酸化物を豊富に含む",
        "wineStyle": "壮大で優雅、複雑な構造、卓越した熟成ポテンシャル",
        "tastingNotes": "黒い果実・花のアロマ・スパイス・革・ミネラル",
        "agingPotential": "20-40年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC La Romanée Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "深い石灰岩と粘土の混合",
        "wineStyle": "極めて精緻で繊細、層が豊か、卓越した熟成力",
        "tastingNotes": "花のアロマ・赤い果実・ミネラル・ビロードのようなタンニン",
        "agingPotential": "20-40年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Richebourg Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "深い粘土石灰岩",
        "wineStyle": "豊かで濃密、力と優雅さを兼備",
        "tastingNotes": "ブラックベリー・チェリー・スミレ・スパイス・煙草",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Romanée-Saint-Vivant Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、やや浅め",
        "wineStyle": "精緻で優雅、絹のように滑らか、芳しい香り",
        "tastingNotes": "赤い果実・バラ・スミレ・スパイス・ミネラル",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC La Grande Rue Grand Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土",
        "wineStyle": "優雅で精緻、均衡のとれた構造、熟成ポテンシャルあり",
        "tastingNotes": "チェリー・いちご・花のアロマ・スパイス・ミネラル",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },

    # Vosne 1er Cru overview + 主要クリマ
    "AOC Vosne-Romanée 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土、鉄分豊富",
        "wineStyle": "村名より複雑で集中、特級園に次ぐ品質",
        "tastingNotes": "チェリー・スパイス・ミネラル・花のアロマ",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Aux Malconsorts": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土",
        "wineStyle": "優雅で構造的、果実味豊か、繊細なタンニン",
        "tastingNotes": "チェリー・ブラックベリー・スミレ・スパイス",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Cros Parantoux": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩土壌、石が多い",
        "wineStyle": "力強く、ミネラル豊富、卓越した熟成ポテンシャル",
        "tastingNotes": "黒い果実・スパイス・ミネラル・煙草",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Les Suchots": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "優雅でバランス良く、果実味豊か、構造良好",
        "tastingNotes": "赤い果実・花のアロマ・スパイス・ミネラル",
        "agingPotential": "12-18年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Les Beaux Monts": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土、礫石を含む",
        "wineStyle": "優雅で繊細、複雑な香り、熟成ポテンシャルあり",
        "tastingNotes": "チェリー・バラ・スパイス・森の下草",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Aux Brûlées": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩土壌、浅め",
        "wineStyle": "精緻で優雅、ミネラル感が際立つ、均衡のとれた構造",
        "tastingNotes": "赤い果実・花のアロマ・ミネラル・スパイス",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Les Petits Monts": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土、石が多い",
        "wineStyle": "濃縮した果実味、しっかりした構造、熟成ポテンシャルあり",
        "tastingNotes": "黒い果実・スパイス・ミネラル・革",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Aux Raignots": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "優雅で繊細、純粋な果実味、バランス良好",
        "tastingNotes": "チェリー・いちご・花のアロマ・スパイス",
        "agingPotential": "10-15年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Les Chaumes": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、深め",
        "wineStyle": "豊かで濃密、柔らかなタンニン、果実味充分",
        "tastingNotes": "ブラックベリー・スミレ・スパイス・大地の香り",
        "agingPotential": "12-18年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Clos des Réas": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩粘土",
        "wineStyle": "優雅で精緻、繊細な香り、均衡のとれた構造",
        "tastingNotes": "赤い果実・花のアロマ・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Les Gaudichots": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、比較的肥沃",
        "wineStyle": "豊満で丸みがあり、果実味豊か、飲みやすい",
        "tastingNotes": "チェリー・いちご・スパイス・花のアロマ",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru La Croix Rameau": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩土壌、浅め",
        "wineStyle": "精緻で優雅、ミネラル豊富、繊細な構造",
        "tastingNotes": "赤い果実・花のアロマ・ミネラル・スパイス",
        "agingPotential": "10-15年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vosne-Romanée 1er Cru Au-dessus des Malconsorts": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩土壌、石が多い",
        "wineStyle": "力強く、ミネラル感が際立つ、熟成ポテンシャルあり",
        "tastingNotes": "黒い果実・スパイス・ミネラル・大地の香り",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },

    # ════════════════════════════════════════════════════════
    # VOUGEOT
    # ════════════════════════════════════════════════════════
    "AOC Clos de Vougeot ou Clos Vougeot Grand Cru": {
        "exposition": "東〜南東向き（上段）〜東向き（下段）",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "上段：石灰岩、下段：深い粘土（クリマによって大きく異なる）",
        "wineStyle": "地块によってスタイルが異なり、最良の区画は深沉で複雑、力強い",
        "tastingNotes": "黒チェリー・ブラックベリー・スパイス・トリュフ・革・ミネラル",
        "agingPotential": "20-40年以上",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vougeot 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩を主体、ミネラル豊富",
        "wineStyle": "村名より構造的、複雑な香り層",
        "tastingNotes": "赤チェリー・ブラックベリー・スパイス・ミネラル・大地の香り",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vougeot 1er Cru Clos de la Perrière": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と砂利、排水極めて良好",
        "wineStyle": "構造がしっかり、強いミネラル感、良好な熟成ポテンシャル",
        "tastingNotes": "黒チェリー・黒鉛・ミネラル・スパイス・スモーキー",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vougeot 1er Cru Les Petits Vougeots": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "深い石灰岩土壌、ミネラル豊富",
        "wineStyle": "濃厚でも優雅さを保つ、明確な地域性",
        "tastingNotes": "赤いベリー・黒チェリー・スパイス・ミネラル・バラ・革",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vougeot 1er Cru Le Clos Blanc": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "白色石灰岩土壌、排水良好",
        "wineStyle": "精緻で優雅、果実味豊か、絹のようなタンニン",
        "tastingNotes": "いちご・ラズベリー・スミレ・白コショウ・ミネラル",
        "agingPotential": "12-18年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },
    "AOC Vougeot 1er Cru Les Crâs": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩主体、大量の砂利を含む",
        "wineStyle": "構造良好、明瞭なミネラル感、余韻が長い",
        "tastingNotes": "ブラックベリー・プラム・ミネラル・スモーキー・スパイス",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの中心部",
    },

    # ════════════════════════════════════════════════════════
    # NUITS-SAINT-GEORGES 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Nuits-Saint-Georges 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土、鉄分を含む",
        "wineStyle": "力強く構造的、豊かな果実味と土の香り",
        "tastingNotes": "カシス・チェリー・スパイス・革・トリュフ",
        "agingPotential": "10-25年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Les Saint-Georges": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、鉄分豊富",
        "wineStyle": "最高品質の一級園、特級園に匹敵する複雑さ",
        "tastingNotes": "黒い果実・スパイス・革・トリュフ・ミネラル",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Les Vaucrains": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土、石が多い",
        "wineStyle": "力強くスパイシー、しっかりしたタンニン",
        "tastingNotes": "ブラックベリー・スパイス・革・ミネラル",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Les Cailles": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土の混合",
        "wineStyle": "エレガントで構造的",
        "tastingNotes": "チェリー・スパイス・ミネラル・革",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Les Pruliers": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "豊かで力強い",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Les Porêts-Saint-Georges": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで果実味豊か",
        "tastingNotes": "チェリー・スパイス・花・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Aux Boudots": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで繊細、ヴォーヌ的なスタイル",
        "tastingNotes": "チェリー・スミレ・スパイス・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Aux Murgers": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "構造的で力強い",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },
    "AOC Nuits-Saint-Georges 1er Cru Aux Argillas": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土質土壌",
        "wineStyle": "豊かで柔らか",
        "tastingNotes": "チェリー・プラム・スパイス・大地の香り",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ドールの南端",
    },

    # ════════════════════════════════════════════════════════
    # FIXIN 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Fixin 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "村名より構造的で力強い",
        "tastingNotes": "黒い果実・スパイス・大地の香り・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },
    "AOC Fixin 1er Cru Clos de la Perrière": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土、排水良好",
        "wineStyle": "力強くしっかりした構造、Fixin最高の一級園",
        "tastingNotes": "黒い果実・スパイス・ミネラル・革",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },
    "AOC Fixin 1er Cru Clos Napoléon": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く個性的、しっかりした骨格",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },
    "AOC Fixin 1er Cru Les Hervelets": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで果実味豊か",
        "tastingNotes": "チェリー・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },
    "AOC Fixin 1er Cru Les Meix Bas": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "力強くスパイシー",
        "tastingNotes": "黒い果実・スパイス・大地の香り",
        "agingPotential": "10-15年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },
    "AOC Fixin 1er Cru Les Arvelets": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで果実味豊か",
        "tastingNotes": "チェリー・スパイス・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },
    "AOC Fixin 1er Cru Clos du Chapitre": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く構造的",
        "tastingNotes": "黒い果実・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },

    # Marsannay overview
    "AOC Marsannay 1er Cru": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン", "白ワイン", "ロゼワイン"],
        "soilStructure": "石灰岩と泥灰岩、粘土質の表土",
        "wineStyle": "村名より構造的で複雑",
        "tastingNotes": "チェリー・スパイス・ミネラル・花のアロマ",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ニュイの北端",
    },

    # ════════════════════════════════════════════════════════
    # CÔTE DE BEAUNE ── GRAND CRUS
    # ════════════════════════════════════════════════════════
    # Corton（括號後綴由 get_ja() 自動去除）
    "AOC Corton Grand Cru": {
        "exposition": "東・南東・南・南西（向きにより赤か白が異なる）",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "丘の下部：粘土石灰岩（赤ワイン向け）",
        "wineStyle": "コート・ド・ボーヌ唯一の赤ワイン特級園、力強く宏大",
        "tastingNotes": "カシス・スパイス・革・ミネラル・焦げたアーモンド",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北端",
    },
    "AOC Corton-Charlemagne Grand Cru": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "soilStructure": "丘の上部：白色泥灰岩（白ワイン向け）",
        "wineStyle": "コート・ド・ボーヌ最偉大な白ワイン特級園、豊かで力強い",
        "tastingNotes": "白桃・蜂蜜・ヘーゼルナッツ・バター・強いミネラル",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北端",
    },
    "AOC Charlemagne Grand Cru": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "soilStructure": "白色泥灰岩",
        "wineStyle": "コルトン・シャルルマーニュと同等の偉大な白ワイン",
        "tastingNotes": "白桃・ヘーゼルナッツ・蜂蜜・ミネラル",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北端",
    },
    "AOC Bienvenues-Bâtard-Montrachet Grand Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "豊かで丸みがあり、エレガント",
        "tastingNotes": "白桃・蜂蜜・ヘーゼルナッツ・バニラ・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Bâtard-Montrachet Grand Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩、ミネラル豊富",
        "wineStyle": "力強く豊か、卓越したミネラル感、長熟型",
        "tastingNotes": "白桃・蜂蜜・スモーキー・ミネラル・ヘーゼルナッツ",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Chevalier-Montrachet Grand Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩、非常に薄い表土",
        "wineStyle": "繊細で純粋、圧倒的なミネラル感、長寿",
        "tastingNotes": "白い花・柑橘・白桃・ミネラル・フリント",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Montrachet Grand Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩の完璧な組み合わせ",
        "wineStyle": "世界最高の白ワイン、力と優雅さの完璧な融合",
        "tastingNotes": "白い花・白桃・蜂蜜・スモーキー・強烈なミネラル",
        "agingPotential": "20-50年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Criots-Bâtard-Montrachet Grand Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "エレガントで純粋、バランス良好",
        "tastingNotes": "白桃・蜂蜜・花・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },

    # ════════════════════════════════════════════════════════
    # PERNAND-VERGELESSES 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Pernand-Vergelesses 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "村名より複雑、コスパ高い",
        "tastingNotes": "チェリー・スパイス・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北端",
    },
    "AOC Pernand-Vergelesses 1er Cru Ile des Vergelesses": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "最高品質の一級園、エレガントで複雑",
        "tastingNotes": "チェリー・スパイス・ミネラル・花のアロマ",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北端",
    },

    # ════════════════════════════════════════════════════════
    # LADOIX 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Ladoix 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "村名より構造的",
        "tastingNotes": "赤・黒い果実・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北端",
    },

    # ════════════════════════════════════════════════════════
    # ALOXE-CORTON 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Aloxe-Corton 1er Cru": {
        "exposition": "東・南東・南",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "村名より力強く複雑",
        "tastingNotes": "カシス・スパイス・革・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北端",
    },

    # ════════════════════════════════════════════════════════
    # SAVIGNY-LÈS-BEAUNE 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Savigny-lès-Beaune 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "村名より構造的、果実味豊か",
        "tastingNotes": "チェリー・スパイス・ミネラル・花",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北部",
    },
    "AOC Savigny-lès-Beaune 1er Cru Les Vergelesses": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く個性的、優れた熟成ポテンシャル",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北部",
    },
    "AOC Savigny-lès-Beaune 1er Cru La Dominode": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強くリッチ、サヴィニー最高の一級園",
        "tastingNotes": "カシス・スパイス・革・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの北部",
    },

    # ════════════════════════════════════════════════════════
    # BEAUNE 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Beaune 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と粘土の混合",
        "wineStyle": "村名より複雑でエレガント",
        "tastingNotes": "チェリー・花・スパイス・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Beaune 1er Cru Les Grèves": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と砂利（Grève = 砂利の意）",
        "wineStyle": "エレガントで芳香豊か、ボーヌ最高の一級園",
        "tastingNotes": "チェリー・バラ・スパイス・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Beaune 1er Cru Les Fèves": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで複雑、優れた品質",
        "tastingNotes": "チェリー・花・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Beaune 1er Cru Le Clos des Mouches": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と泥灰岩（白）、石灰岩と粘土（赤）",
        "wineStyle": "赤：エレガントで果実味豊か。白：豊かでミネラリー",
        "tastingNotes": "赤：チェリー・花・スパイス。白：白桃・蜂蜜・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Beaune 1er Cru Les Bressandes": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く個性的",
        "tastingNotes": "黒い果実・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Beaune 1er Cru Les Teurons": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで構造良好",
        "tastingNotes": "チェリー・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },

    # ════════════════════════════════════════════════════════
    # POMMARD 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Pommard 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土が多く重い土壌、石灰岩と鉄分を含む",
        "wineStyle": "村名より力強く構造的",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Pommard 1er Cru Les Grands Epenots": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩、鉄分豊富",
        "wineStyle": "力強く壮大、ポマールを代表する一級園",
        "tastingNotes": "ブラックチェリー・スパイス・革・ミネラル",
        "agingPotential": "15-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Pommard 1er Cru Les Petits Epenots": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "粘土石灰岩",
        "wineStyle": "力強く構造的、Épenots系の個性",
        "tastingNotes": "ブラックチェリー・スパイス・革・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Pommard 1er Cru Les Rugiens Bas": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "赤色（酸化鉄）粘土石灰岩",
        "wineStyle": "特級園に匹敵する力強さ、深みと複雑さ",
        "tastingNotes": "ブラックベリー・スパイス・革・トリュフ・ミネラル",
        "agingPotential": "15-30年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Pommard 1er Cru Les Rugiens Hauts": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "赤色（酸化鉄）粘土石灰岩",
        "wineStyle": "力強く個性的、ルジャンの特徴的な深みを持つ",
        "tastingNotes": "ブラックベリー・スパイス・革・ミネラル",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },

    # ════════════════════════════════════════════════════════
    # VOLNAY 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Volnay 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と軽い粘土、ミネラル豊富",
        "wineStyle": "村名より繊細でエレガント",
        "tastingNotes": "チェリー・スミレ・花・スパイス",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Volnay 1er Cru Les Caillerets": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と小石、薄い表土",
        "wineStyle": "ヴォルネイ最高の一級園、特級園に匹敵する優雅さ",
        "tastingNotes": "チェリー・スミレ・バラ・スパイス・絹のようなタンニン",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Volnay 1er Cru Champans": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで複雑、優れたバランス",
        "tastingNotes": "チェリー・バラ・スパイス・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Volnay 1er Cru Clos des Chênes": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く優雅、深みのある果実味",
        "tastingNotes": "黒い果実・スミレ・スパイス・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Volnay 1er Cru Taille Pieds": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "エレガントで繊細、花のアロマ",
        "tastingNotes": "チェリー・スミレ・花・スパイス",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },
    "AOC Volnay 1er Cru Clos des Ducs": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く個性的、Marquis d'Angerville のモノポール",
        "tastingNotes": "チェリー・バラ・スパイス・革・ミネラル",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中心部",
    },

    # ════════════════════════════════════════════════════════
    # MONTHÉLIE 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Monthélie 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "村名より複雑でエレガント",
        "tastingNotes": "チェリー・スパイス・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },

    # ════════════════════════════════════════════════════════
    # AUXEY-DURESSES 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Auxey-Duresses 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "村名より複雑、コスパ高い",
        "tastingNotes": "赤：チェリー・スパイス。白：白桃・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },

    # ════════════════════════════════════════════════════════
    # BLAGNY 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Blagny 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "力強く個性的、ムルソー・ビュラニー的な深み",
        "tastingNotes": "黒い果実・スパイス・ミネラル・革",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },

    # ════════════════════════════════════════════════════════
    # MEURSAULT 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Meursault 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "泥灰岩と石灰岩",
        "wineStyle": "村名より複雑でリッチ",
        "tastingNotes": "白桃・ヘーゼルナッツ・バター・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },
    "AOC Meursault 1er Cru Perrières": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "薄い表土、石灰岩と砂利",
        "wineStyle": "ムルソー最高の一級園、特級園に匹敵するミネラル感",
        "tastingNotes": "白桃・蜂蜜・フリント・強烈なミネラル",
        "agingPotential": "12-25年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },
    "AOC Meursault 1er Cru Charmes": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "泥灰岩と石灰岩",
        "wineStyle": "豊かで丸みがあり、親しみやすい",
        "tastingNotes": "白桃・蜂蜜・バター・バニラ・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },
    "AOC Meursault 1er Cru Genevrières": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "泥灰岩と石灰岩",
        "wineStyle": "エレガントで複雑、優れたバランス",
        "tastingNotes": "白桃・柑橘・蜂蜜・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },
    "AOC Meursault 1er Cru Les Bouchères": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "泥灰岩と石灰岩",
        "wineStyle": "豊かでリッチ",
        "tastingNotes": "白桃・バター・ヘーゼルナッツ・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },
    "AOC Meursault 1er Cru Le Porusot": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "泥灰岩と石灰岩",
        "wineStyle": "エレガントで果実味豊か",
        "tastingNotes": "柑橘・白桃・花・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },
    "AOC Meursault 1er Cru Porusot": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "泥灰岩と石灰岩",
        "wineStyle": "エレガントで果実味豊か",
        "tastingNotes": "柑橘・白桃・花・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの中央部",
    },

    # ════════════════════════════════════════════════════════
    # PULIGNY-MONTRACHET 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Puligny-Montrachet 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩、ミネラル豊富",
        "wineStyle": "村名より複雑で卓越したミネラル感",
        "tastingNotes": "白い花・白桃・蜂蜜・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Puligny-Montrachet 1er Cru Les Pucelles": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "ピュリニー最高の一級園の一つ、特級園に近い品質",
        "tastingNotes": "白い花・白桃・蜂蜜・フリント・強いミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Puligny-Montrachet 1er Cru Les Combettes": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "豊かで複雑、優れたバランス",
        "tastingNotes": "白桃・蜂蜜・柑橘・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Puligny-Montrachet 1er Cru Les Folatières": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "エレガントで純粋、優れたミネラル感",
        "tastingNotes": "白い花・柑橘・白桃・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Puligny-Montrachet 1er Cru Clavaillon": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "エレガントで果実味豊か",
        "tastingNotes": "柑橘・白桃・花・ミネラル",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Puligny-Montrachet 1er Cru Le Cailleret": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩、石が多い",
        "wineStyle": "ピュリニーとシャサーニュの境界、緊張感あるミネラル",
        "tastingNotes": "白い花・フリント・柑橘・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },

    # ════════════════════════════════════════════════════════
    # CHASSAGNE-MONTRACHET 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Chassagne-Montrachet 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン", "赤ワイン"],
        "soilStructure": "石灰岩と泥灰岩、粘土質の表土",
        "wineStyle": "村名より複雑でミネラリー",
        "tastingNotes": "白桃・蜂蜜・ミネラル・ヘーゼルナッツ",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Chassagne-Montrachet 1er Cru Morgeot": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン", "赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "最大の一級園、豊かで複雑",
        "tastingNotes": "白：白桃・蜂蜜・ミネラル。赤：チェリー・スパイス",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Chassagne-Montrachet 1er Cru Les Grandes Ruchottes": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "エレガントで純粋、強いミネラル感",
        "tastingNotes": "白桃・白い花・フリント・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Chassagne-Montrachet 1er Cru En Remilly": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "ピュリニーに隣接、エレガントでミネラリー",
        "tastingNotes": "白い花・白桃・ミネラル・フリント",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },

    # ════════════════════════════════════════════════════════
    # SAINT-AUBIN 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Saint-Aubin 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン", "赤ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "村名より複雑、コスパ高い",
        "tastingNotes": "白：柑橘・白い花・ミネラル。赤：チェリー・スパイス",
        "agingPotential": "白：6-12年、赤：5-10年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Saint-Aubin 1er Cru En Remilly": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "特級園に隣接、最高品質のサン・トーバン",
        "tastingNotes": "白桃・蜂蜜・ミネラル・フリント",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },
    "AOC Saint-Aubin 1er Cru Les Murgers des Dents de Chien": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "soilStructure": "石灰岩、薄い表土",
        "wineStyle": "ミネラリーで純粋、ムルソー/ピュリニーに近い品質",
        "tastingNotes": "柑橘・白い花・ミネラル・チョーク",
        "agingPotential": "6-12年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南部",
    },

    # ════════════════════════════════════════════════════════
    # SANTENAY 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Santenay 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "soilStructure": "石灰岩と粘土、一部に砂岩",
        "wineStyle": "村名より構造的で個性的",
        "tastingNotes": "黒い果実・スパイス・ミネラル",
        "agingPotential": "10-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南端",
    },
    "AOC Santenay 1er Cru Les Gravières": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と砂利",
        "wineStyle": "サントネイ最高の一級園、エレガントで力強い",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "12-20年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南端",
    },
    "AOC Santenay 1er Cru Clos de Tavannes": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "力強く個性的",
        "tastingNotes": "黒い果実・スパイス・ミネラル",
        "agingPotential": "10-18年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南端",
    },

    # ════════════════════════════════════════════════════════
    # MARANGES 1ER CRUS
    # ════════════════════════════════════════════════════════
    "AOC Maranges 1er Cru": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と砂岩の混合",
        "wineStyle": "村名より構造的",
        "tastingNotes": "黒い果実・スパイス・大地の香り",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南端",
    },
    "AOC Maranges 1er Cru La Fussière": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "soilStructure": "石灰岩と砂岩",
        "wineStyle": "マランジュ最高の一級園",
        "tastingNotes": "黒い果実・スパイス・ミネラル・大地の香り",
        "agingPotential": "8-15年",
        "climate": "半大陸性気候、コート・ド・ボーヌの南端",
    },
}


def strip_parens(s):
    """'AOC Corton Grand Cru(Pernand)' → 'AOC Corton Grand Cru'"""
    return re.sub(r"\s*\([^)]*\)\s*$", "", s).strip()


def get_ja(entry):
    """エントリの fullName / name / file で JA を検索（括號後綴 strip 付き）"""
    for raw_key in [entry.get("fullName", ""), entry.get("file", ""), entry.get("name", "")]:
        if not raw_key:
            continue
        # try exact
        if raw_key in JA:
            return JA[raw_key]
        # strip .geojson
        bare = raw_key[:-8] if raw_key.endswith(".geojson") else raw_key
        if bare in JA:
            return JA[bare]
        # strip parenthetical suffix
        no_paren = strip_parens(bare)
        if no_paren in JA:
            return JA[no_paren]
        # try with .geojson again
        if (bare + ".geojson") in JA:
            return JA[bare + ".geojson"]
    return None


def patch_entry(e):
    """エントリに ja を追加。wineStyle か soilStructure がすでにあればスキップ。"""
    if not isinstance(e, dict):
        return False
    ja = e.get("ja", {})
    if ja and ("wineStyle" in ja or "soilStructure" in ja):
        return False
    block = get_ja(e)
    if block:
        e["ja"] = block
        return True
    return False


def patch_dict(d):
    changed = 0
    if isinstance(d, list):
        for item in d:
            if isinstance(item, dict):
                if patch_entry(item):
                    changed += 1
                changed += patch_dict(item)
    elif isinstance(d, dict):
        # If this dict is a translatable entry (has fullName), try to patch it
        if "fullName" in d:
            if patch_entry(d):
                changed += 1
        # Recurse into all values
        for v in list(d.values()):
            if isinstance(v, (dict, list)):
                changed += patch_dict(v)
    return changed


total_changed = 0
dirs = ["Cote-de-Nuits", "Cote-de-Beaune"]
for subdir in dirs:
    folder = os.path.join(BASE, subdir)
    if not os.path.isdir(folder):
        continue
    for fn in sorted(os.listdir(folder)):
        if not fn.endswith(".json"):
            continue
        fpath = os.path.join(folder, fn)
        with open(fpath, encoding="utf-8") as f:
            data = json.load(f)
        n = patch_dict(data)
        if n:
            with open(fpath, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"  {subdir}/{fn}: {n} entries updated")
            total_changed += n
        else:
            print(f"  {subdir}/{fn}: no change")

print(f"\nDone. Total entries updated: {total_changed}")
