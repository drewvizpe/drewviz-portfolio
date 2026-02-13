"""
Optimize portfolio images for web.
Resizes large images and converts to high-quality JPEG.
Target: max 1920px wide, JPEG quality 85 (excellent for web).
"""
from PIL import Image
import os
import shutil

OUTPUT_DIR = r"c:\Users\Andrew\Desktop\INVERSIONES\portfolio\images"
MAX_WIDTH = 1920
MAX_HEIGHT = 1200
JPEG_QUALITY = 85

# Best renders selected for portfolio
IMAGES = {
    # filename: (source_path, category)

    # EXTERIOR
    "kaisergarten.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\KAISERGARTEN.jpg", "exterior"),
    "astete-fachada.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\FACHADA\FACHADA 2 FINAL.png", "exterior"),
    "chachapoyas-frontal.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\CHACHAPOYAS\FACHADA\1 FRONTAL FINAL.jpg", "exterior"),
    "tomas-marsano-night.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\TOMAS MARSANO\RENDERS\FACHADA\FACHADA NOCHE.jpg", "exterior"),
    "los-tangleos-fachada.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\LOS TANGLEOS\FACHADA\FACHADA FINAL.png", "exterior"),

    # INTERIOR
    "erika-kitchen.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\ERIKA's KITCHEN.jpg", "interior"),
    "rustic-kitchen.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\RUSTIC KITCHEN.png", "interior"),
    "cocina-liblab.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\COCINA LIBLAB.jpg", "interior"),
    "sala-dulce.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\SALA DULCE.jpg", "interior"),
    "japandi-living.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\5.jpg", "interior"),
    "mueble-naranja.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\RENDERS SUELTOS\MUEBLE NARANJA.png", "interior"),
    "astete-lobby.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\AREAS COMUNES\VISTA LOBBY.png", "interior"),
    "tangleos-interior.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\LOS TANGLEOS\INTERIORES\INTERIOR FINAL.png", "interior"),
    "tangleos-terraza.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\LOS TANGLEOS\INTERIORES\TERRAZA FINAL.png", "interior"),
    "depto1-living.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\Departamento 1\RENDERS\RENDER_CONPOST.png", "interior"),

    # COMMERCIAL
    "restaurant-blue.jpg": (r"c:\Users\Andrew\Desktop\OTROS\ENTREGA\RESTAURANTE.jpg", "commercial"),
    "desayunador-stripes.jpg": (r"c:\Users\Andrew\Desktop\OTROS\ENTREGA\DESAYUNADOR.jpg", "commercial"),

    # 360
    "astete-360-sala.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\360\01_360 SALA COMEDOR.jpg", "360"),
    "depto1-360.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\Departamento 1\360\360.jpeg", "360"),

    # PERSONAL PROJECT
    "gondor-city.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\GONDOR\RENDER\1.jpg", "personal"),

    # PHOTO
    "andrew-photo.jpg": (r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\FOTOS MIAS\FOTO CON RETOQUE.jpg", "photo"),
}

os.makedirs(OUTPUT_DIR, exist_ok=True)

for filename, (source, category) in IMAGES.items():
    try:
        if not os.path.exists(source):
            print(f"  SKIP (not found): {source}")
            continue

        img = Image.open(source)

        # Convert RGBA to RGB if needed
        if img.mode in ('RGBA', 'P', 'LA'):
            background = Image.new('RGB', img.size, (0, 0, 0))
            if img.mode == 'RGBA':
                background.paste(img, mask=img.split()[3])
            else:
                background.paste(img)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        # Resize if too large
        w, h = img.size
        if w > MAX_WIDTH or h > MAX_HEIGHT:
            ratio = min(MAX_WIDTH / w, MAX_HEIGHT / h)
            new_size = (int(w * ratio), int(h * ratio))
            img = img.resize(new_size, Image.LANCZOS)

        # Save as optimized JPEG
        output_path = os.path.join(OUTPUT_DIR, filename)
        img.save(output_path, 'JPEG', quality=JPEG_QUALITY, optimize=True)

        size_mb = os.path.getsize(output_path) / (1024 * 1024)
        print(f"  OK: {filename} ({img.size[0]}x{img.size[1]}, {size_mb:.1f}MB)")

    except Exception as e:
        print(f"  ERROR: {filename} - {e}")

print("\nDone! All images optimized.")
