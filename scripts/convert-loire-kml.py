"""
Convert Loire KML files to GeoJSON format for the wine learning website.
Source: C:\\Users\\Chungshu\\OneDrive - stu.nkuht.edu.tw\\07QGIS資料\\01France QGIS\\Loire
Target: public/geojson/Loire/
"""

import os
import json
import re
import geopandas as gpd

SRC_ROOT = r"C:\Users\Chungshu\OneDrive - stu.nkuht.edu.tw\07QGIS資料\01France QGIS\Loire"
DST_ROOT = r"C:\Users\Chungshu\Desktop\教學網站製作20260220\Bordeaux Wine Learning\public\geojson\Loire"

# Map source subfolder names to output folder names
SUBFOLDER_MAP = {
    "01Pay Nantes": "PayNantes",
    "02Anjou-Saumur": "AnjouSaumur",
    "03Touraine": "Touraine",
    "04Centre": "Centre",
    "05Massif central": "MassifCentral",
}

def sanitize_filename(name: str) -> str:
    """Convert a KML filename to a clean GeoJSON filename."""
    # Remove 'AOC ' prefix if present
    name = re.sub(r'^AOC\s+', '', name)
    # Replace spaces and special characters
    name = name.replace(' ', '-')
    name = name.replace("'", "")
    name = name.replace("'", "")
    name = name.replace('"', '')
    name = name.replace('/', '-')
    name = name.replace('\\', '-')
    # Normalize diacritics by keeping them (they're valid in filenames)
    # Clean up repeated dashes
    name = re.sub(r'-+', '-', name)
    name = name.strip('-')
    return name + ".geojson"

def convert_kml_to_geojson(kml_path: str, output_path: str) -> bool:
    """Convert a single KML file to GeoJSON."""
    try:
        # fiona can handle KML with the KML driver
        gdf = gpd.read_file(kml_path, driver="KML")
        
        if gdf.empty:
            print(f"  WARNING: Empty geometry in {os.path.basename(kml_path)}")
            return False
        
        # Keep only relevant columns
        keep_cols = ["Name", "Description", "geometry"]
        available = [c for c in keep_cols if c in gdf.columns]
        gdf = gdf[available]
        
        # Add id field from name
        if "Name" in gdf.columns:
            gdf["id"] = gdf["Name"].fillna("").str.lower().str.replace(r'\s+', '-', regex=True)
        
        # Convert to WGS84 if needed
        if gdf.crs and gdf.crs.to_epsg() != 4326:
            gdf = gdf.to_crs(epsg=4326)
        
        # Ensure output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        # Write GeoJSON
        gdf.to_file(output_path, driver="GeoJSON")
        return True
    except Exception as e:
        print(f"  ERROR converting {os.path.basename(kml_path)}: {e}")
        return False

def main():
    success_count = 0
    fail_count = 0
    
    # Process subfolder KMLs
    for src_sub, dst_sub in SUBFOLDER_MAP.items():
        src_dir = os.path.join(SRC_ROOT, src_sub)
        dst_dir = os.path.join(DST_ROOT, dst_sub)
        
        if not os.path.exists(src_dir):
            print(f"Source directory not found: {src_dir}")
            continue
        
        kml_files = [f for f in os.listdir(src_dir) if f.lower().endswith(".kml")]
        print(f"\n[{src_sub}] → {dst_sub}/ ({len(kml_files)} KML files)")
        
        for kml_file in sorted(kml_files):
            base = os.path.splitext(kml_file)[0]
            out_name = sanitize_filename(base)
            
            kml_path = os.path.join(src_dir, kml_file)
            out_path = os.path.join(dst_dir, out_name)
            
            ok = convert_kml_to_geojson(kml_path, out_path)
            if ok:
                print(f"  ✓ {kml_file} → {out_name}")
                success_count += 1
            else:
                fail_count += 1
    
    # Process root-level KMLs (Loire region overview files)
    root_kmls = [f for f in os.listdir(SRC_ROOT) if f.lower().endswith(".kml")]
    if root_kmls:
        dst_dir = os.path.join(DST_ROOT, "Regional")
        print(f"\n[Root] → Regional/ ({len(root_kmls)} KML files)")
        for kml_file in sorted(root_kmls):
            base = os.path.splitext(kml_file)[0]
            out_name = sanitize_filename(base)
            kml_path = os.path.join(SRC_ROOT, kml_file)
            out_path = os.path.join(dst_dir, out_name)
            ok = convert_kml_to_geojson(kml_path, out_path)
            if ok:
                print(f"  ✓ {kml_file} → {out_name}")
                success_count += 1
            else:
                fail_count += 1
    
    print(f"\n{'='*50}")
    print(f"Done! ✓ {success_count} converted, ✗ {fail_count} failed")
    
    # Print directory listing of results
    print(f"\nOutput structure:")
    for root, dirs, files in os.walk(DST_ROOT):
        level = root.replace(DST_ROOT, '').count(os.sep)
        indent = '  ' * level
        print(f"{indent}{os.path.basename(root)}/")
        for f in sorted(files):
            print(f"{indent}  {f}")

if __name__ == "__main__":
    main()
