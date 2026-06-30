from PIL import Image
import os
import glob
import sys

source_dir = sys.argv[1]
dest_dir = sys.argv[2]

os.makedirs(dest_dir, exist_ok=True)

# Find all PNGs matching our names in the source dir
for img_path in glob.glob(os.path.join(source_dir, "*.png")):
    filename = os.path.basename(img_path)
    # The generation saves as name_timestamp.png, we want to strip the timestamp for cleaner names
    # or just use the prefix. e.g. advanced_tech_1234.png -> advanced_tech.webp
    
    parts = filename.split('_')
    # find the last part, if it's numeric timestamp, strip it
    if parts[-1].split('.')[0].isdigit():
        base_name = "_".join(parts[:-1])
    else:
        base_name = filename.split('.')[0]
        
    out_path = os.path.join(dest_dir, f"{base_name}.webp")
    
    try:
        img = Image.open(img_path)
        img.save(out_path, 'webp', quality=85)
        print(f"Saved {out_path}")
    except Exception as e:
        print(f"Failed to process {img_path}: {e}")
