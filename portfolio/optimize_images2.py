"""Optimize new images for portfolio v2: Gondor process + Spiderman + videos thumbnails"""
from PIL import Image
import os

OUTPUT_DIR = r"c:\Users\Andrew\Desktop\INVERSIONES\portfolio\images"
MAX_WIDTH = 1920
MAX_HEIGHT = 1200
JPEG_QUALITY = 85

IMAGES = {
    "gondor-01-clay.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\GONDOR\RENDER\1.jpg",
    "gondor-02-vegetation.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\GONDOR\RENDER\2.jpg",
    "gondor-03-environment.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\GONDOR\RENDER\3.jpg",
    "gondor-04-composition.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\GONDOR\RENDER\4.jpg",
    "gondor-05-final.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\GONDOR\RENDER\5.jpg",
    "spiderman.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\SPIDERMAN.jpg",
}

for filename, source in IMAGES.items():
    try:
        if not os.path.exists(source):
            print(f"  SKIP: {source}")
            continue
        img = Image.open(source)
        if img.mode in ('RGBA', 'P', 'LA'):
            bg = Image.new('RGB', img.size, (0, 0, 0))
            if img.mode == 'RGBA': bg.paste(img, mask=img.split()[3])
            else: bg.paste(img)
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        if w > MAX_WIDTH or h > MAX_HEIGHT:
            ratio = min(MAX_WIDTH / w, MAX_HEIGHT / h)
            img = img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)
        output_path = os.path.join(OUTPUT_DIR, filename)
        img.save(output_path, 'JPEG', quality=JPEG_QUALITY, optimize=True)
        size_mb = os.path.getsize(output_path) / (1024 * 1024)
        print(f"  OK: {filename} ({img.size[0]}x{img.size[1]}, {size_mb:.1f}MB)")
    except Exception as e:
        print(f"  ERROR: {filename} - {e}")

print("\nDone!")
