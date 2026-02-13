"""Optimize new images for portfolio v3: fill gallery with more renders"""
from PIL import Image
import os

OUTPUT_DIR = r"c:\Users\Andrew\Desktop\INVERSIONES\portfolio\images"
MAX_WIDTH = 1920
MAX_HEIGHT = 1200
JPEG_QUALITY = 85

IMAGES = {
    # ASTETE PARK - Areas Comunes (commercial)
    "astete-coworking.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\AREAS COMUNES\COOWORKING FINAL.png",
    "astete-gym.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\AREAS COMUNES\VISTA GYM.png",
    "astete-gourmet.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\AREAS COMUNES\VISTA GOURMET.png",
    # ASTETE PARK - Depa 1 (interior)
    "astete-kitchen.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\DEPA 1\SCK ASTETE FINAL.png",
    "astete-bathroom.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\ASTETE PARK\DEPA 1\VISTA BAÑO.png",
    # OFICINA EMILIO (commercial)
    "oficina-emilio.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\OFICINA EMILIO\1OFI.jpg",
    "oficina-lounge.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\OFICINA EMILIO\2ESTAR.jpg",
    # CHACHAPOYAS (commercial + exterior)
    "chachapoyas-lobby.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\CHACHAPOYAS\AREAS COMUNES\LOBBY.jpg",
    "chachapoyas-lateral.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\CHACHAPOYAS\2 LATERAL FINAL.jpg",
    # SOL NAIXET (exterior + interior)
    "sol-naixet-aerial.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\SOL NAIXET\EXTERIORES\1 VISTA AEREA.tif",
    "sol-naixet-living.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\SOL NAIXET\INTERIORES\DEPTO PB.tif",
    "sol-naixet-bedroom.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\SOL NAIXET\INTERIORES\DORM PRINCIPAL.tif",
    # TOMAS MARSANO (exterior)
    "tomas-marsano-malecon.jpg": r"c:\Users\Andrew\Desktop\RENDERS PARA PORTAFOLIO\PROYECTOS\TOMAS MARSANO\RENDERS\FACHADA\MALECON COSTA SUR INGRESO.jpg",
}

for filename, source in IMAGES.items():
    try:
        if not os.path.exists(source):
            print(f"  SKIP: {source} (not found)")
            continue
        img = Image.open(source)
        if img.mode in ('RGBA', 'P', 'LA'):
            bg = Image.new('RGB', img.size, (0, 0, 0))
            if img.mode == 'RGBA':
                bg.paste(img, mask=img.split()[3])
            else:
                bg.paste(img)
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
