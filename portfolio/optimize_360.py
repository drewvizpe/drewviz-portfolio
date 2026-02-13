from PIL import Image
import os

OUTPUT_DIR = r"c:\Users\Andrew\Desktop\INVERSIONES\portfolio\images"
MAX_WIDTH = 4096  # 360 panoramas need higher res for quality
JPEG_QUALITY = 85

IMAGES = {
    "astete-360-cocina.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\360\02_360 COCINA.jpg",
    "astete-360-bathroom.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\360\03_360 SSHH.jpg",
    "astete-360-bedroom.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\360\04_360 DORM PRINC.jpg",
}

for filename, source in IMAGES.items():
    try:
        img = Image.open(source)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        if w > MAX_WIDTH:
            ratio = MAX_WIDTH / w
            img = img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)
        output_path = os.path.join(OUTPUT_DIR, filename)
        img.save(output_path, 'JPEG', quality=JPEG_QUALITY, optimize=True)
        size_mb = os.path.getsize(output_path) / (1024 * 1024)
        print(f"  OK: {filename} ({img.size[0]}x{img.size[1]}, {size_mb:.1f}MB)")
    except Exception as e:
        print(f"  ERROR: {filename} - {e}")
print("Done!")
