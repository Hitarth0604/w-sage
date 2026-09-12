import os
from PIL import Image

raw_dir = r"d:\wsage\raw_assets"
out_dir = r"d:\wsage\public\brand"
os.makedirs(out_dir, exist_ok=True)

def process_logo(src_file, out_white, out_accent=None, is_mark=False):
    img = Image.open(src_file).convert("RGBA")
    width, height = img.size
    
    white_img = Image.new("RGBA", (width, height))
    accent_img = Image.new("RGBA", (width, height)) if out_accent else None

    white_pixels = white_img.load()
    accent_pixels = accent_img.load() if accent_img else None
    src_pixels = img.load()

    for y in range(height):
        for x in range(width):
            r, g, b, a = src_pixels[x, y]
            luminance = 0.299 * r + 0.587 * g + 0.114 * b
            alpha = int(255 - luminance)
            if alpha < 30:
                white_pixels[x, y] = (0, 0, 0, 0)
                if accent_pixels:
                    accent_pixels[x, y] = (0, 0, 0, 0)
            else:
                # White version
                white_pixels[x, y] = (244, 244, 240, alpha)
                if accent_pixels:
                    # For mark, entire mark is accent lime. For full logo, W is x < width * 0.38
                    if is_mark or x < width * 0.38:
                        accent_pixels[x, y] = (215, 240, 0, alpha)
                    else:
                        accent_pixels[x, y] = (244, 244, 240, alpha)

    bbox = white_img.getbbox()
    if bbox:
        pad = 20
        cropped_box = (max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(width, bbox[2]+pad), min(height, bbox[3]+pad))
        w_cropped = white_img.crop(cropped_box)
        w_cropped.save(out_white, "PNG")
        print(f"Saved {out_white} with size {w_cropped.size}")

        if accent_img:
            a_cropped = accent_img.crop(cropped_box)
            a_cropped.save(out_accent, "PNG")
            print(f"Saved {out_accent} with size {a_cropped.size}")

# Process Logo-01 (Full logo)
process_logo(
    os.path.join(raw_dir, "Logo-01.png"),
    os.path.join(out_dir, "wsage-logo-white.png"),
    os.path.join(out_dir, "wsage-logo-accent.png"),
    is_mark=False
)

# Process Logo-02 (Standalone emblem)
process_logo(
    os.path.join(raw_dir, "Logo-02.png"),
    os.path.join(out_dir, "wsage-mark-white.png"),
    os.path.join(out_dir, "wsage-mark-accent.png"),
    is_mark=True
)

print("All logos processed successfully!")
