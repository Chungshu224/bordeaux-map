#!/usr/bin/env python3
"""
為布根地地圖所有 JSON 資料檔案加入日文翻譯。
在每個 AOC 條目中加入 "ja" 子物件。
"""
import json
import os
import re

# ── 通用翻譯對照表（中→日） ──────────────────────────────────────
WINE_TYPES_MAP = {
    "白酒": "白ワイン",
    "紅酒": "赤ワイン",
    "玫瑰紅酒": "ロゼワイン",
    "玫瑰紅": "ロゼ",
    "氣泡酒": "スパークリングワイン",
    "加烈酒": "フォーティファイドワイン",
    "白酒（極少量）": "白ワイン（極少量）",
}

DIRECTION_MAP = {
    "東南、南、西南": "南東・南・南西",
    "南、西南": "南・南西",
    "東、東南、南、西南": "東・南東・南・南西",
    "東南、南": "南東・南",
    "東、東南": "東・南東",
    "東、南東": "東・南東",
    "各個朝向": "様々な向き",
    "東-東南向": "東〜南東向き",
    "東、東南、南": "東・南東・南",
    "南": "南",
    "東南": "南東",
    "西南": "南西",
    "東": "東",
    "北": "北",
}

def translate_wineTypes(arr):
    return [WINE_TYPES_MAP.get(w, w) for w in arr]

def translate_exposition(s):
    return DIRECTION_MAP.get(s, s)

# ── 各 AOC 的日文翻譯資料 ─────────────────────────────────────────
# 格式: { aoc_id: {climate, soilStructure, wineStyle, tastingNotes, agingPotential, exposition, wineTypes} }
JA_TRANSLATIONS = {

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # AOC Bourgogne.json
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Bourgogne Chitry.geojson": {
        "exposition": "南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、冷涼で乾燥",
        "soilStructure": "石灰岩と泥灰岩が主体、化石を含む",
        "wineStyle": "爽やかでミネラル感が強く、酸味が生き生きとしている",
        "tastingNotes": "白い花、柑橘系、青りんご、岩石の香り",
        "agingPotential": "3-8年",
    },
    "AOC Bourgogne Côte Saint-Jacques.geojson": {
        "exposition": "南東・南・南西",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、温和なマイクロクライメート",
        "soilStructure": "石灰岩基盤、表層は泥灰岩と粘土",
        "wineStyle": "赤：優雅で繊細、白：爽やかでミネラリー",
        "tastingNotes": "赤：チェリー・スミレ・スパイス、白：柑橘・白い花",
        "agingPotential": "5-12年",
    },
    "AOC Bourgogne Côtes d'Auxerre.geojson": {
        "exposition": "東・南東・南・南西",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、ヨンヌ川の影響を受けた穏やかなマイクロクライメート",
        "soilStructure": "石灰岩と泥灰岩、一部に砂質土壌",
        "wineStyle": "赤：果実味豊か、白：爽やかで優雅",
        "tastingNotes": "赤：赤い果実・スパイス・土の香り、白：白い花・柑橘・ミネラル",
        "agingPotential": "5-10年",
    },
    "AOC Bourgogne Coulanges-la-Vineuse.geojson": {
        "exposition": "東・南東・南",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、丘陵地に守られた穏やかなマイクロクライメート",
        "soilStructure": "ジュラ紀石灰岩、泥灰岩と粘土の表土",
        "wineStyle": "赤：エレガントで繊細、優れた熟成ポテンシャル、白：爽やかでクリスプ",
        "tastingNotes": "赤：チェリー・ラズベリー・スミレ・スパイス、白：柑橘・白い花・ミネラル",
        "agingPotential": "5-10年",
    },
    "AOC Bourgogne Épineuil.geojson": {
        "exposition": "南東・南・南西",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、ヨンヌ川の温暖化効果",
        "soilStructure": "オックスフォーディアン（ジュラ紀）石灰岩、泥灰岩と粘土の混合",
        "wineStyle": "赤：軽快でフレッシュ、果実味豊か、白：爽やかでミネラリー",
        "tastingNotes": "赤：チェリー・スミレ・軽やかなスパイス、白：柑橘・グリーンアップル",
        "agingPotential": "3-8年",
    },
    "AOC Bourgogne Tonnerre.geojson": {
        "exposition": "南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、ヨンヌ川渓谷が保護するマイクロクライメート",
        "soilStructure": "キモリアン石灰岩と泥灰岩、化石を豊富に含む",
        "wineStyle": "爽やかでミネラリー、シャブリに似た純粋なシャルドネ",
        "tastingNotes": "柑橘系、白い花、グリーンアップル、チョークのようなミネラル",
        "agingPotential": "4-10年",
    },

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # Chablis/Chablis.json
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Chablis.geojson": {
        "exposition": "南東・南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、冷涼で乾燥、春霜のリスクが高い",
        "soilStructure": "キモリアン石灰岩、牡蠣と海洋化石が豊富",
        "wineStyle": "純粋でフレッシュ、強いミネラル感、溌剌とした酸味、無樽熟成",
        "tastingNotes": "柑橘系・青りんご・白い花・岩石・海の香り・貝殻化石",
        "agingPotential": "5-10年",
    },
    "AOC Petit Chablis.geojson": {
        "exposition": "様々な向き",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、やや冷涼、霜害リスクがより高い",
        "soilStructure": "キモリアンおよびポートランド石灰岩、化石含有量は少なめ",
        "wineStyle": "軽やかでフレッシュ、果実味が明瞭、ミネラル感は軽め",
        "tastingNotes": "青りんご・レモン・白い花・淡いミネラル",
        "agingPotential": "2-5年",
    },
    "AOC Chablis Grand Cru.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、理想的な向きによる保護",
        "soilStructure": "キモリアン石灰岩、非常に豊富な海洋化石",
        "wineStyle": "複雑で深み豊か、強烈なミネラル感、卓越した熟成ポテンシャル",
        "tastingNotes": "白い花・柑橘系・蜂蜜・岩石・スモーキー・複雑な海の香り",
        "agingPotential": "15-30年",
    },
    "AOC Chablis 1er Cru.geojson": {
        "exposition": "東・南東・南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、良好な向きによる保護",
        "soilStructure": "キモリアン石灰岩、豊富な海洋化石",
        "wineStyle": "村名クラスより複雑、より強いミネラル感と熟成ポテンシャル",
        "tastingNotes": "白い花・柑橘系・蜂蜜・ミネラル・繊細な複雑さ",
        "agingPotential": "8-15年",
    },
    "AOC Chablis 1er Cru Chaume de Talvat.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "南向きの理想的な位置、良好な日照保護",
        "soilStructure": "キモリアン石灰岩、豊富な海洋化石",
        "wineStyle": "繊細でエレガント、バランスの良い構造、典型的なミネラルスタイル",
        "tastingNotes": "白い花・レモン・青りんご・蜂蜜・繊細なミネラル",
        "agingPotential": "8-12年",
    },
    "AOC Chablis 1er Cru Côte de Jouan.geojson": {
        "exposition": "南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "右岸のマイクロクライメート、やや温暖",
        "soilStructure": "キモリアン石灰岩、化石とミネラルが豊富",
        "wineStyle": "豊かで個性的、右岸特有のキャラクター",
        "tastingNotes": "完熟果実・柑橘の皮・蜂蜜・強いミネラル・スモーキーな香り",
        "agingPotential": "10-15年",
    },
    "AOC Chablis 1er Cru Fourchaume.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "理想的な南向き、良好な日照保護",
        "soilStructure": "キモリアン石灰岩、豊富な牡蠣化石",
        "wineStyle": "エレガントでバランス良く、シャブリらしい典型的スタイル",
        "tastingNotes": "白い花・柑橘系・青りんご・蜂蜜・爽やかなミネラル",
        "agingPotential": "10-15年",
    },
    "AOC Chablis 1er Cru Les Beauregards.geojson": {
        "exposition": "南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "右岸の穏やかなマイクロクライメート、良好な日照",
        "soilStructure": "キモリアン石灰岩、豊富な化石とミネラル",
        "wineStyle": "バランス良くエレガント、右岸の特色を表現",
        "tastingNotes": "白い花・柑橘系・白桃・蜂蜜・ミネラル・淡いスパイス",
        "agingPotential": "8-15年",
    },
    "AOC Chablis 1er Cru Les Fourneaux.geojson": {
        "exposition": "南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "右岸の位置が異なるマイクロクライメートをもたらす",
        "soilStructure": "キモリアン石灰岩、化石含有量豊富",
        "wineStyle": "力強い構造、明瞭なミネラル感、優れた熟成ポテンシャル",
        "tastingNotes": "柑橘系・白桃・蜂蜜・強いミネラル・スモーキーな香り",
        "agingPotential": "10-18年",
    },
    "AOC Chablis 1er Cru Mont de Milieu.geojson": {
        "exposition": "南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "中心部の安定したマイクロクライメート",
        "soilStructure": "キモリアン石灰岩、豊富な海洋化石",
        "wineStyle": "バランスのとれた構造、典雅なスタイル、優れた熟成力",
        "tastingNotes": "白い花・柑橘系・青りんご・蜂蜜・明瞭なミネラル",
        "agingPotential": "10-18年",
    },
    "AOC Chablis 1er Cru Vaucoupin.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "理想的な南向き、優れたマイクロクライメート",
        "soilStructure": "キモリアン石灰岩、豊富な海洋化石",
        "wineStyle": "エレガントで純粋、絶妙なバランス、繊細なスタイル",
        "tastingNotes": "白い花・レモン・青りんご・繊細なミネラル・爽やかな海の香り",
        "agingPotential": "8-15年",
    },
    "AOC Chablis 1er Cru Vaugiraut.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "左岸の理想的な向き、良好な保護",
        "soilStructure": "キモリアン石灰岩、海洋化石が豊富",
        "wineStyle": "繊細で純粋、エレガントなスタイル、左岸の特色",
        "tastingNotes": "白い花・レモン・青りんご・蜂蜜・淡いミネラル",
        "agingPotential": "8-12年",
    },
    "AOC Chablis 1er Cru Vaupulent.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "理想的な南向き、十分な日照",
        "soilStructure": "キモリアン石灰岩、豊富な化石",
        "wineStyle": "豊かでリッチ、良好な構造、左岸のテロワールを表現",
        "tastingNotes": "完熟果実・柑橘系・蜂蜜・ミネラル・繊細なスパイス",
        "agingPotential": "10-15年",
    },
    "AOC Chablis 1er Cru Vosgros.geojson": {
        "exposition": "南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "右岸の典型的なマイクロクライメート、温暖で安定",
        "soilStructure": "キモリアン石灰岩、非常に豊富な化石",
        "wineStyle": "力強い構造、豊かなミネラル感、卓越した熟成ポテンシャル",
        "tastingNotes": "柑橘系・白桃・蜂蜜・強いミネラル・スモーキー・スパイス",
        "agingPotential": "12-20年",
    },
    "AOC Chablis Grand Cru Blanchot.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "高い標高がより冷涼な条件をもたらし、成熟期を延長",
        "soilStructure": "キモリアン石灰岩、非常に豊富な化石",
        "wineStyle": "複雑でリッチ、強烈なミネラル感、卓越した熟成ポテンシャル",
        "tastingNotes": "完熟した果実香・柑橘の皮・蜂蜜・強いミネラル・濡れた石の香り",
        "agingPotential": "20-30年",
    },
    "AOC Chablis Grand Cru Bougros.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "やや異なるマイクロクライメート、独特の個性をもたらす",
        "soilStructure": "キモリアン石灰岩、化石含有量豊富",
        "wineStyle": "力強い構造、個性的、優れた熟成ポテンシャル",
        "tastingNotes": "完熟した果実香・柑橘系・スパイス・強いミネラル・スモーキー",
        "agingPotential": "18-28年",
    },
    "AOC Chablis Grand Cru Grenouilles.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "保護されたマイクロクライメート、穏やかで安定",
        "soilStructure": "キモリアン石灰岩、豊富な海洋化石",
        "wineStyle": "繊細でエレガント、絶妙なバランス、花のアロマ",
        "tastingNotes": "白い花・レモン・アーモンド・蜂蜜・繊細なミネラル",
        "agingPotential": "15-25年",
    },
    "AOC Chablis Grand Cru Les Clos.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "理想的な南向き、最良の日照と保護",
        "soilStructure": "キモリアン石灰岩、牡蠣化石が豊富",
        "wineStyle": "力と優雅さの完璧な融合、壮大な構造、強烈なミネラル感",
        "tastingNotes": "白桃・柑橘系・蜂蜜・スモーキー・強いミネラル・濡れた石",
        "agingPotential": "20-30年",
    },
    "AOC Chablis Grand Cru Preuses.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "理想的な南向き、良好な日照条件",
        "soilStructure": "キモリアン石灰岩、牡蠣化石が豊富",
        "wineStyle": "純粋でエレガント、活発な酸味、美しいバランス感",
        "tastingNotes": "白い花・柑橘系・青りんご・蜂蜜・爽やかなミネラル",
        "agingPotential": "15-25年",
    },
    "AOC Chablis Grand Cru Valmur.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "保護された南向き、穏やかなマイクロクライメート",
        "soilStructure": "キモリアン石灰岩、豊富な海洋化石",
        "wineStyle": "エレガントで繊細、絶妙なバランス、繊細なミネラル表現",
        "tastingNotes": "白い花・柑橘の皮・アーモンド・蜂蜜・繊細なミネラル",
        "agingPotential": "15-25年",
    },
    "AOC Chablis Grand Cru Vaudésir.geojson": {
        "exposition": "南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "理想的な南向き、十分な日照",
        "soilStructure": "キモリアン石灰岩、非常に豊富な化石",
        "wineStyle": "複雑で深み豊か、壮大な構造、強い個性",
        "tastingNotes": "完熟果実・蜂蜜・スモーキー・複雑なミネラル・塩気のある海の香り",
        "agingPotential": "20-30年",
    },

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # Chablis/Grand Auxerrois.json
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Irancy.geojson": {
        "exposition": "東・南東・南・南西",
        "wineTypes": ["赤ワイン", "ロゼワイン"],
        "climate": "大陸性気候、温和なマイクロクライメート",
        "soilStructure": "石灰岩基盤、表層は泥灰岩と粘土、化石を豊富に含む",
        "wineStyle": "優雅で繊細、良好な構造、明瞭なミネラル感",
        "tastingNotes": "赤い果実・チェリー・スミレ・スパイス・土の香り・ミネラル",
        "agingPotential": "8-15年",
    },
    "AOC Saint-Bris.geojson": {
        "exposition": "東・南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、冷涼乾燥な条件",
        "soilStructure": "キモリアン石灰岩、貝殻化石とミネラルが豊富",
        "wineStyle": "爽やかで溌剌、明るい酸味、典型的なソーヴィニョン・ブランの特色",
        "tastingNotes": "柑橘系・スグリ・青草・ミネラル・スモーキーな香り",
        "agingPotential": "3-8年",
    },
    "AOC Vézelay.geojson": {
        "exposition": "東・南東・南・南西",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、高標高による冷涼なマイクロクライメート",
        "soilStructure": "ジュラ紀石灰岩基盤、表層は泥灰岩、化石とミネラルが豊富",
        "wineStyle": "純粋でエレガント、強いミネラル感、活発な酸味、優れた熟成ポテンシャル",
        "tastingNotes": "白い花・柑橘系・白桃・蜂蜜・岩石・塩気のあるミネラル",
        "agingPotential": "8-15年",
    },

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # Cote-Chalonnaise / Bouzeron, Rully, Mercurey, Givry, Montagny, Regional
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Bouzeron.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、傾斜地による良好な日照",
        "soilStructure": "白色泥灰岩と石灰岩、アリゴテに非常に適した土壌",
        "wineStyle": "爽やかで溌剌、ミネラル感と柑橘の香り",
        "tastingNotes": "レモン・青りんご・アカシア・フリント",
        "agingPotential": "3-7年",
    },
    "AOC Rully.geojson": {
        "exposition": "東・南東・南",
        "wineTypes": ["白ワイン", "赤ワイン"],
        "climate": "大陸性気候、温和なマイクロクライメート",
        "soilStructure": "ジュラ紀石灰岩、泥灰岩と粘土の表土",
        "wineStyle": "白：爽やかでミネラリー、優雅なシャルドネ。赤：軽快でフルーティー",
        "tastingNotes": "白：柑橘・白い花・ミネラル。赤：チェリー・ラズベリー・スパイス",
        "agingPotential": "白：5-10年、赤：5-8年",
    },
    "AOC Mercurey.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、丘陵による保護",
        "soilStructure": "石灰岩と粘土の混合、鉄分を含む",
        "wineStyle": "赤：力強く果実味豊か、一級園は複雑でエレガント。白：爽やかでミネラリー",
        "tastingNotes": "赤：黒い果実・チェリー・スパイス・土の香り。白：柑橘・白い花・ミネラル",
        "agingPotential": "赤：8-15年、白：5-8年",
    },
    "AOC Givry.geojson": {
        "exposition": "東・南東・南",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、温和なマイクロクライメート",
        "soilStructure": "石灰岩と泥灰岩、粘土質の表土",
        "wineStyle": "赤：エレガントで繊細なピノ・ノワール、素晴らしい熟成ポテンシャル。白：爽やかでミネラリー",
        "tastingNotes": "赤：チェリー・ラズベリー・スミレ・スパイス。白：柑橘・白い花・ミネラル",
        "agingPotential": "赤：8-15年、白：5-8年",
    },
    "AOC Montagny.geojson": {
        "exposition": "東・南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、温暖なマイクロクライメート",
        "soilStructure": "石灰岩と泥灰岩、ミネラル豊富",
        "wineStyle": "豊かでまろやか、ミネラル感強く、コスト・パフォーマンスが高い",
        "tastingNotes": "柑橘系・白桃・蜂蜜・ミネラル・バターのニュアンス",
        "agingPotential": "5-10年",
    },

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # Cote-de-Nuits villages
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Marsannay.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン", "ロゼワイン"],
        "climate": "大陸性気候、夜丘の北端、冷涼な条件",
        "soilStructure": "石灰岩と泥灰岩、粘土質の表土",
        "wineStyle": "赤：爽やかで果実味豊か。白：クリスプでミネラリー。ロゼ：夜丘唯一の村名ロゼ",
        "tastingNotes": "赤：チェリー・ラズベリー・スパイス。ロゼ：いちご・花・爽やかな酸",
        "agingPotential": "赤：5-12年、白：4-8年",
    },
    "AOC Fixin.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、夜丘の冷涼な条件",
        "soilStructure": "石灰岩と粘土、ジュラ紀の堆積岩",
        "wineStyle": "力強く引き締まったスタイル、豊かな果実味、優れた熟成ポテンシャル",
        "tastingNotes": "黒い果実・チェリー・スパイス・大地の香り・ミネラル",
        "agingPotential": "10-20年",
    },
    "AOC Gevrey-Chambertin.geojson": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、理想的な傾斜地の向き",
        "soilStructure": "粘土石灰岩、鉄分を豊富に含む、茶色石灰質と赤色粘土の表土",
        "wineStyle": "壮大な構造、濃密で複雑、豊富なタンニン、力強さ、長期熟成が必要",
        "tastingNotes": "ブラックベリー・チェリー・スパイス・革・ミネラル・甘草・野性味",
        "agingPotential": "村名：10-20年、一級：15-30年、特級：20-50年",
    },
    "AOC Morey-Saint-Denis.geojson": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、夜丘の典型的な条件",
        "soilStructure": "石灰岩と粘土の混合、豊富なミネラル",
        "wineStyle": "赤：ジュヴレの力強さとシャンボールの優雅さを兼備。白：豊かでミネラリー",
        "tastingNotes": "赤：チェリー・カシス・スパイス・大地の香り。白：白桃・柑橘・ミネラル",
        "agingPotential": "赤：10-25年、白：8-15年",
    },
    "AOC Chambolle-Musigny.geojson": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、森に保護された穏やかなマイクロクライメート",
        "soilStructure": "石灰岩基盤、軽くて痩せた表土",
        "wineStyle": "エレガンスと繊細さの象徴、絹のようなタンニン、花のアロマ",
        "tastingNotes": "チェリー・スミレ・バラ・スパイス・シルクのようなテクスチャー",
        "agingPotential": "村名：8-15年、一級：15-25年、特級：20-40年",
    },
    "AOC Vougeot.geojson": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、丘陵に守られた穏やかな条件",
        "soilStructure": "粘土と石灰岩の混合、傾斜によって土壌が異なる",
        "wineStyle": "複雑でニュアンス豊か、熟成とともに複雑さが増す",
        "tastingNotes": "チェリー・黒い果実・スパイス・腐葉土・ミネラル",
        "agingPotential": "10-30年",
    },
    "AOC Vosne-Romanée.geojson": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、理想的な傾斜地の向き",
        "soilStructure": "粘土石灰岩、特級園の地は特別に豊かなミネラルを含む",
        "wineStyle": "最高の複雑さと優雅さ、圧倒的なエレガンス、長寿",
        "tastingNotes": "チェリー・スミレ・バラ・スパイス・腐葉土・高貴なミネラル",
        "agingPotential": "村名：10-20年、一級：20-35年、特級：30-60年",
    },
    "AOC Nuits-Saint-Georges.geojson": {
        "exposition": "東〜南東向き",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、夜丘の典型的な条件",
        "soilStructure": "石灰岩と粘土、鉄分を含む豊かな土壌",
        "wineStyle": "赤：力強く構造的、豊かな果実味と土の香り。白：豊かでミネラリー",
        "tastingNotes": "赤：カシス・チェリー・スパイス・革・トリュフ。白：白桃・ヘーゼルナッツ・ミネラル",
        "agingPotential": "赤：10-25年、白：8-15年",
    },

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # Cote-de-Beaune villages
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Pernand-Vergelesses.geojson": {
        "exposition": "東・南東・西",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、標高が高く冷涼、一部は西向きで特殊",
        "soilStructure": "石灰岩と粘土の混合、標高によって異なる",
        "wineStyle": "赤：エレガントで繊細。白：ミネラリーでフレッシュ、良コスパ",
        "tastingNotes": "赤：チェリー・スパイス・土の香り。白：柑橘・白い花・ミネラル",
        "agingPotential": "赤：8-15年、白：5-10年",
    },
    "AOC Ladoix.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、コルトン丘の麓の穏やかな条件",
        "soilStructure": "石灰岩と粘土、コルトン特級園の裾野の土壌",
        "wineStyle": "赤：力強くスパイシー。白：まろやかでミネラリー",
        "tastingNotes": "赤：黒い果実・スパイス・革。白：白桃・柑橘・ミネラル",
        "agingPotential": "赤：8-15年、白：5-10年",
    },
    "AOC Aloxe-Corton.geojson": {
        "exposition": "東・南東・南",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、コルトン丘のマイクロクライメート",
        "soilStructure": "丘の上部：白色泥灰岩（白ワイン向け）。下部：粘土石灰岩（赤ワイン向け）",
        "wineStyle": "赤：力強く宏大、豊富なタンニン。白：豊かでまろやか、ナッツのニュアンス",
        "tastingNotes": "赤：カシス・スパイス・革・ミネラル。白：ヘーゼルナッツ・バター・ミネラル",
        "agingPotential": "赤：10-25年、白：8-15年",
    },
    "AOC Savigny-lès-Beaune.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、渓谷の穏やかなマイクロクライメート",
        "soilStructure": "石灰岩と粘土、一部に砂利を含む",
        "wineStyle": "赤：爽やかでフルーティー、エレガント。白：クリスプでミネラリー",
        "tastingNotes": "赤：チェリー・スパイス・スミレ。白：柑橘・白い花・ミネラル",
        "agingPotential": "赤：8-15年、白：5-8年",
    },
    "AOC Chorey-lès-Beaune.geojson": {
        "exposition": "東・北東",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、平坦地の冷涼な条件",
        "soilStructure": "沖積土、砂質と粘土の混合、石灰岩が少なめ",
        "wineStyle": "軽快で果実味豊か、早飲みスタイル、コスト・パフォーマンス高い",
        "tastingNotes": "フレッシュなチェリー・ラズベリー・スパイス・軽やかなタンニン",
        "agingPotential": "5-10年",
    },
    "AOC Beaune.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、コート・ド・ボーヌの温暖な条件",
        "soilStructure": "石灰岩と粘土の混合、一部に泥灰岩",
        "wineStyle": "赤：エレガントで果実味豊か、素晴らしいバランス。白：まろやかでミネラリー",
        "tastingNotes": "赤：チェリー・花・スパイス。白：柑橘・白桃・バター・ミネラル",
        "agingPotential": "赤：10-20年、白：8-12年",
    },
    "AOC Pommard.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、温暖でよく保護されたマイクロクライメート",
        "soilStructure": "粘土が多く重い土壌、石灰岩と鉄分を含む",
        "wineStyle": "力強く堅固、豊富なタンニン、長熟型の力強いスタイル",
        "tastingNotes": "ブラックチェリー・カシス・スパイス・革・タンニンの骨格",
        "agingPotential": "15-30年",
    },
    "AOC Volnay.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、温暖な傾斜地の向き",
        "soilStructure": "石灰岩と軽い粘土、ミネラル豊富な軽い土壌",
        "wineStyle": "繊細でエレガント、シルクのようなタンニン、ボーヌ最高の優雅さ",
        "tastingNotes": "チェリー・スミレ・バラ・スパイス・絹のようなテクスチャー",
        "agingPotential": "10-20年",
    },
    "AOC Monthélie.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、ヴォルネイとムルソーの間の穏やかな条件",
        "soilStructure": "石灰岩と泥灰岩の混合",
        "wineStyle": "赤：エレガントでフルーティー、良コスパ。白：爽やかでミネラリー",
        "tastingNotes": "赤：チェリー・スパイス・土の香り。白：柑橘・白い花・ミネラル",
        "agingPotential": "赤：8-15年、白：5-10年",
    },
    "AOC Saint-Romain.geojson": {
        "exposition": "東・南東・南",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、高標高による冷涼な条件",
        "soilStructure": "石灰岩と泥灰岩、高地の痩せた土壌",
        "wineStyle": "赤：軽快でフルーティー。白：クリスプでミネラリー、酸味鮮やか",
        "tastingNotes": "赤：チェリー・スパイス。白：柑橘・リンゴ・ミネラル・フリント",
        "agingPotential": "赤：5-10年、白：5-10年",
    },
    "AOC Auxey-Duresses.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、渓谷の穏やかな条件",
        "soilStructure": "石灰岩と泥灰岩、部分的に粘土質",
        "wineStyle": "赤：フルーティーでエレガント。白：まろやかでミネラリー、良コスパ",
        "tastingNotes": "赤：チェリー・スパイス。白：白桃・柑橘・ミネラル",
        "agingPotential": "赤：8-12年、白：5-10年",
    },
    "AOC Meursault.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、温暖で良く保護された条件",
        "soilStructure": "泥灰岩と石灰岩、ミネラル豊富で複雑な土壌",
        "wineStyle": "豊かでまろやか、バターとナッツのニュアンス、偉大なミネラル感",
        "tastingNotes": "白桃・ヘーゼルナッツ・バター・スパイス・ミネラル",
        "agingPotential": "10-20年",
    },
    "AOC Puligny-Montrachet.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "大陸性気候、理想的な傾斜地の条件",
        "soilStructure": "石灰岩と泥灰岩、ミネラル豊富で痩せた土壌",
        "wineStyle": "世界最高の白ワインの一つ、緻密でエレガント、卓越したミネラル",
        "tastingNotes": "白い花・白桃・蜂蜜・ヘーゼルナッツ・ミネラル・フリント",
        "agingPotential": "10-25年",
    },
    "AOC Chassagne-Montrachet.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン", "赤ワイン"],
        "climate": "大陸性気候、温暖で適度な保護",
        "soilStructure": "石灰岩と泥灰岩、粘土質の表土",
        "wineStyle": "白：豊かでまろやか、力強いミネラル感。赤：エレガントで果実味豊か",
        "tastingNotes": "白：白桃・ヘーゼルナッツ・バター・ミネラル。赤：チェリー・スパイス",
        "agingPotential": "白：10-20年、赤：8-15年",
    },
    "AOC Saint-Aubin.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン", "赤ワイン"],
        "climate": "大陸性気候、やや冷涼で一部は森に保護される",
        "soilStructure": "石灰岩と泥灰岩、比較的痩せた土壌",
        "wineStyle": "白：爽やかでミネラリー、良コスパ。赤：爽やかでフルーティー",
        "tastingNotes": "白：柑橘・白い花・ミネラル・バター。赤：チェリー・スパイス",
        "agingPotential": "白：5-12年、赤：5-10年",
    },
    "AOC Santenay.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、コート・ド・ボーヌ南端の温暖な条件",
        "soilStructure": "石灰岩と粘土、砂岩の混合、一部に海洋堆積物",
        "wineStyle": "赤：力強くスパイシー、豊かな果実味。白：まろやかでミネラリー",
        "tastingNotes": "赤：黒い果実・スパイス・ミネラル・土の香り。白：柑橘・ナッツ・ミネラル",
        "agingPotential": "赤：10-20年、白：5-10年",
    },
    "AOC Maranges.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン", "白ワイン"],
        "climate": "大陸性気候、コート・ド・ボーヌ最南端の条件",
        "soilStructure": "石灰岩と砂岩の混合、比較的薄い表土",
        "wineStyle": "赤：力強くスパイシー、独特の個性。白：爽やかでミネラリー",
        "tastingNotes": "赤：黒い果実・スパイス・大地の香り。白：柑橘・ミネラル",
        "agingPotential": "赤：8-15年、白：5-8年",
    },
    "AOC Blagny.geojson": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "大陸性気候、高標高の冷涼な条件",
        "soilStructure": "石灰岩と泥灰岩、痩せた高地の土壌",
        "wineStyle": "力強くスパイシー、一部は険しいスタイル、独特の個性",
        "tastingNotes": "黒い果実・スパイス・革・ミネラル",
        "agingPotential": "10-20年",
    },

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # Beaujolais geojson.regional entries
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Beaujolais": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、地中海と大西洋の影響を受けた温和な条件",
        "soilStructure": "石灰岩と粘土（南部）",
        "wineStyle": "軽快で飲みやすく、フレッシュな果実味、早飲みスタイル",
        "tastingNotes": "フレッシュなチェリー・いちご・バナナ・泡・ガム（新酒）",
        "agingPotential": "1-2年",
    },
    "AOC Beaujolais Villages": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、丘陵地による保護",
        "soilStructure": "花崗岩と片岩（北部）",
        "wineStyle": "AOC Beaujolais より構造的、より濃密な果実味",
        "tastingNotes": "黒チェリー・ラズベリー・スミレ・ミネラル",
        "agingPotential": "2-4年",
    },
    "AOC Morgon": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、Côte du Py の独特のマイクロクライメート",
        "soilStructure": "片岩風化土壌（Côte du Py）、マンガンと鉄を豊富に含む",
        "wineStyle": "最も力強い Cru、豊かな構造、優れた熟成ポテンシャル",
        "tastingNotes": "カシス・チェリー・モレロ・スパイス・土の香り・鉄分",
        "agingPotential": "5-15年",
    },
    "AOC Fleurie": {
        "exposition": "東・南東・南",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、花崗岩の丘が特別なマイクロクライメートを生む",
        "soilStructure": "ピンク花崗岩の風化土壌",
        "wineStyle": "最もエレガントな Cru、花のアロマ、絹のようなテクスチャー",
        "tastingNotes": "チェリー・スミレ・バラ・花・絹のようなタンニン",
        "agingPotential": "4-8年",
    },
    "AOC Moulin-à-Vent": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、丘の上の独特のマイクロクライメート",
        "soilStructure": "ピンク花崗岩とマンガン鉱層",
        "wineStyle": "薄酒萊の王、最も複雑で構造的、長熟型",
        "tastingNotes": "カシス・黒チェリー・スパイス・革・ミネラル・複雑な香り",
        "agingPotential": "8-20年",
    },
    "AOC Brouilly": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、ブルイイ山が特別な保護を提供",
        "soilStructure": "多様な土壌：花崗岩・閃長岩・沖積土",
        "wineStyle": "フルーティーで生き生き、バランス良くエレガント",
        "tastingNotes": "赤い果実・チェリー・スミレ・フルーティーな香り",
        "agingPotential": "3-6年",
    },
    "AOC Côte de Brouilly": {
        "exposition": "東・南東・南",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、山の斜面による良好な保護と日照",
        "soilStructure": "青色火山閃長岩（独特の土壌）",
        "wineStyle": "力強く個性的、独特の火山性テロワールを表現",
        "tastingNotes": "黒い果実・スパイス・ミネラル・独特の鉄分のニュアンス",
        "agingPotential": "5-10年",
    },
    "AOC Juliénas": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、丘陵に守られた穏やかな条件",
        "soilStructure": "花崗岩と沖積土の混合",
        "wineStyle": "力強くスパイシー、豊かな構造、熟成とともに複雑さが増す",
        "tastingNotes": "赤い果実・スパイス・スミレ・腐葉土のニュアンス",
        "agingPotential": "5-10年",
    },
    "AOC Saint-Amour": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、薄酒萊最北端の冷涼な条件",
        "soilStructure": "花崗岩と粘土",
        "wineStyle": "繊細でエレガント、フルーティーで軽快、花のアロマ",
        "tastingNotes": "チェリー・スミレ・花・軽やかなスパイス",
        "agingPotential": "4-8年",
    },
    "AOC Chénas": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、森に囲まれた穏やかなマイクロクライメート",
        "soilStructure": "花崗岩と石英砂",
        "wineStyle": "力強くスパイシー、個性的で深み豊か",
        "tastingNotes": "黒い果実・スパイス・ピオニー・木の香り",
        "agingPotential": "5-12年",
    },
    "AOC Chiroubles": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、高標高による冷涼な条件",
        "soilStructure": "花崗岩砂土、排水良好",
        "wineStyle": "最も繊細でフレッシュな Cru、軽やかでエレガント",
        "tastingNotes": "フレッシュなチェリー・スミレ・花・軽やかなタンニン",
        "agingPotential": "3-6年",
    },
    "AOC Régnié": {
        "exposition": "東・南東",
        "wineTypes": ["赤ワイン"],
        "climate": "半大陸性気候、温和なマイクロクライメート",
        "soilStructure": "ピンク花崗岩と砂土",
        "wineStyle": "軽快でフルーティー、フレッシュなスタイル",
        "tastingNotes": "赤い果実・チェリー・スグリ・花のアロマ",
        "agingPotential": "3-6年",
    },

    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    # Maconnais geojson.regional entries
    # ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "AOC Mâcon": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン", "赤ワイン"],
        "climate": "半大陸性気候、温和で適度な雨量",
        "soilStructure": "石灰岩と粘土",
        "wineStyle": "白：爽やかで飲みやすく、果実味が直接的。赤：軽快で柔らか",
        "tastingNotes": "白：柑橘・白桃・白い花・ミネラル。赤：チェリー・スパイス",
        "agingPotential": "2-5年",
    },
    "AOC Mâcon-Villages": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "半大陸性気候、良好な傾斜地の向き",
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "AOC Mâcon より深みがあり、ミネラル感が明瞭",
        "tastingNotes": "柑橘・白桃・蜂蜜・白い花・ミネラル",
        "agingPotential": "3-7年",
    },
    "AOC Pouilly-Fuissé": {
        "exposition": "東・南東・南",
        "wineTypes": ["白ワイン"],
        "climate": "半大陸性気候、ソリュトレとヴェルジッソンの岩盤が特別な保護を提供",
        "soilStructure": "ジュラ紀石灰岩と泥灰岩、化石を豊富に含む",
        "wineStyle": "豊満で丸みがあり、構造良好、ミネラル豊富、熟成ポテンシャルあり",
        "tastingNotes": "白桃・蜂蜜・バター・ヘーゼルナッツ・ミネラル",
        "agingPotential": "8-15年",
    },
    "AOC Pouilly-Loché": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "半大陸性気候、プイイ・フュイッセに隣接した同様の条件",
        "soilStructure": "石灰岩と泥灰岩",
        "wineStyle": "爽やかでエレガント、ミネラル感が明瞭、繊細なスタイル",
        "tastingNotes": "柑橘・白桃・白い花・ミネラル",
        "agingPotential": "5-10年",
    },
    "AOC Pouilly-Vinzelles": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "半大陸性気候、良好な傾斜地の向き",
        "soilStructure": "石灰岩と泥灰岩、砂質土を含む",
        "wineStyle": "バランス良くエレガント、果実味豊か、活発な酸味",
        "tastingNotes": "柑橘・白桃・蜂蜜・ミネラル",
        "agingPotential": "5-10年",
    },
    "AOC Saint-Véran": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "半大陸性気候、プイイ・フュイッセに隣接した温暖な条件",
        "soilStructure": "石灰岩と粘土の混合",
        "wineStyle": "爽やかで生き生き、果実味豊か、ミネラル感明瞭、コスパ最高",
        "tastingNotes": "柑橘・青りんご・白桃・ミネラル・さわやかな酸",
        "agingPotential": "4-8年",
    },
    "AOC Viré-Clessé": {
        "exposition": "東・南東",
        "wineTypes": ["白ワイン"],
        "climate": "半大陸性気候、石灰岩台地の良好な日照条件",
        "soilStructure": "石灰岩と泥灰岩、化石を豊富に含む",
        "wineStyle": "豊満で丸みがあり、クリーミーな質感、構造良好、熟成ポテンシャルあり",
        "tastingNotes": "白桃・蜂蜜・バター・ヘーゼルナッツ・ミネラル",
        "agingPotential": "5-12年",
    },

}
def get_ja_block(obj):
    """obj のフィールドに基づいて ja ブロックを生成する"""
    aoc_id = obj.get("id") or obj.get("file") or obj.get("fullName", "")
    name = obj.get("name") or obj.get("fullName", "")

    keys_to_try = []
    for candidate in [aoc_id, name]:
        if not candidate:
            continue
        keys_to_try.append(candidate)
        # Without .geojson
        if candidate.endswith(".geojson"):
            keys_to_try.append(candidate[:-8])
        else:
            keys_to_try.append(candidate + ".geojson")
        # Strip parenthetical suffix: "AOC Fixin (Fixin)" → "AOC Fixin"
        stripped = re.sub(r'\s*\([^)]*\)', '', candidate).strip()
        if stripped != candidate:
            keys_to_try.append(stripped)
            keys_to_try.append(stripped + ".geojson")
        # Strip " Village" suffix: "AOC Beaune Village" → "AOC Beaune"
        if " Village" in candidate:
            without_village = candidate.replace(" Village.geojson", ".geojson").replace(" Village", "")
            keys_to_try.append(without_village)
            if not without_village.endswith(".geojson"):
                keys_to_try.append(without_village + ".geojson")

    for key in keys_to_try:
        if key and key in JA_TRANSLATIONS:
            return JA_TRANSLATIONS[key]

    return None

def add_ja_to_entry(entry):
    """単一のエントリに ja フィールドを追加"""
    if not isinstance(entry, dict):
        return entry
    # climate か wineStyle がある場合のみ翻訳済みとみなす（部分的な ja は上書き）
    ja = entry.get("ja", {})
    if ja and ("climate" in ja or "wineStyle" in ja):
        return entry  # すでに完全に翻訳済み
    
    ja_block = get_ja_block(entry)
    if ja_block:
        entry["ja"] = ja_block
    
    # wineTypes の自動翻訳（マップに基づく）
    if "ja" not in entry:
        auto_ja = {}
        if "wineTypes" in entry:
            translated = [WINE_TYPES_MAP.get(w, w) for w in entry["wineTypes"]]
            if translated != entry["wineTypes"]:
                auto_ja["wineTypes"] = translated
        if "exposition" in entry:
            translated_exp = translate_exposition(entry["exposition"])
            if translated_exp != entry["exposition"]:
                auto_ja["exposition"] = translated_exp
        if auto_ja:
            entry["ja"] = auto_ja
    
    return entry

def process_json_data(data):
    """JSON データ構造を再帰的に処理して ja フィールドを追加"""
    if isinstance(data, list):
        return [add_ja_to_entry(item) if isinstance(item, dict) else item for item in data]
    
    elif isinstance(data, dict):
        # トップレベルのオブジェクトに ja を追加
        result = {}
        for key, value in data.items():
            if key == "geojson":
                # geojson 内部のネストされたオブジェクトを処理
                result[key] = process_geojson_section(value)
            elif isinstance(value, dict) and key not in ("ja",):
                # ネストされた辞書の各エントリを処理
                result[key] = value
            else:
                result[key] = value
        
        # トップレベルに ja を追加（geojson を持つ village データ用）
        top_ja = data.get("ja", {})
        if "name" in data and not (top_ja and ("climate" in top_ja or "wineStyle" in top_ja)):
            ja_block = get_ja_block(data)
            if ja_block:
                result["ja"] = ja_block
            else:
                # 自動翻訳
                auto_ja = {}
                if "wineTypes" in data:
                    translated = [WINE_TYPES_MAP.get(w, w) for w in data["wineTypes"]]
                    if translated != data["wineTypes"]:
                        auto_ja["wineTypes"] = translated
                if "exposition" in data:
                    translated_exp = translate_exposition(data["exposition"])
                    if translated_exp != data["exposition"]:
                        auto_ja["exposition"] = translated_exp
                if auto_ja:
                    result["ja"] = auto_ja
        
        return result
    
    return data

def process_geojson_section(geojson):
    """geojson セクション内の各カテゴリを処理"""
    if not isinstance(geojson, dict):
        return geojson
    
    result = {}
    for category_key, category_value in geojson.items():
        if isinstance(category_value, dict):
            processed_category = {}
            for entry_key, entry_value in category_value.items():
                if isinstance(entry_value, dict):
                    processed_category[entry_key] = add_ja_to_entry(entry_value)
                else:
                    processed_category[entry_key] = entry_value
            result[category_key] = processed_category
        else:
            result[category_key] = category_value
    
    return result


# ── メインの処理 ─────────────────────────────────────────────────
DATA_BASE = os.path.join(os.path.dirname(__file__), "public", "bourgogne", "data")

json_files = []
for root, dirs, files in os.walk(DATA_BASE):
    for fname in files:
        if fname.endswith(".json"):
            json_files.append(os.path.join(root, fname))

print(f"Found {len(json_files)} JSON files to process")

updated = 0
for fpath in sorted(json_files):
    rel = os.path.relpath(fpath, DATA_BASE)
    try:
        with open(fpath, "r", encoding="utf-8") as f:
            data = json.load(f)
        
        processed = process_json_data(data)
        
        with open(fpath, "w", encoding="utf-8") as f:
            json.dump(processed, f, ensure_ascii=False, indent=2)
        
        print(f"  OK {rel}")
        updated += 1
    except Exception as e:
        print(f"  !! {rel}: {e}")

print(f"\nDone! Updated {updated}/{len(json_files)} files.")
