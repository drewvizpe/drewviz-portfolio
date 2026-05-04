# -*- coding: utf-8 -*-
"""Process new portfolio images for drewviz.com Round 2 update.
- Replace gondor-05-final with the cinematic 6.jpg
- Add Javier (4 hero shots) and Vanessa (2 best interiors)
"""
from PIL import Image
import os

OUT_DIR = r"E:\0.TRABAJO PROPIO\!!PROGRAMACION\PROYECTOS\PORTAFOLIO\.claude\worktrees\ecstatic-lederberg-9cf604\portfolio\images"

# (source_path, out_filename, max_width, jpeg_quality)
JOBS = [
    # GONDOR — replace 05-final with cinematic 6.jpg
    (r"E:\0.TRABAJO PROPIO\OSIPALITRA\RENDER\6.jpg",
     "gondor-05-final.jpg", 1920, 88),

    # JAVIER — luxury hospitality vibe
    (r"E:\0.TRABAJO PROPIO\JAVIER\RENDERS\1.jpg",
     "javier-living-pool.jpg", 1920, 88),
    (r"E:\0.TRABAJO PROPIO\JAVIER\RENDERS\INT 5.jpg",
     "javier-living-fireplace.jpg", 1920, 88),
    (r"E:\0.TRABAJO PROPIO\JAVIER\RENDERS\INT 10.jpg",
     "javier-master-bath.jpg", 1920, 88),
    (r"E:\0.TRABAJO PROPIO\JAVIER\RENDERS\INT 14.jpg",
     "javier-powder-room.jpg", 1600, 88),

    # VANESSA — best interiors only (skip exteriors per Andrew)
    (r"E:\0.TRABAJO PROPIO\VANESSA\RENDERS\INT 1.jpg",
     "vanessa-master-suite.jpg", 1920, 88),
    (r"E:\0.TRABAJO PROPIO\VANESSA\RENDERS\INT 9.jpg",
     "vanessa-open-living.jpg", 1920, 88),
]

os.makedirs(OUT_DIR, exist_ok=True)

for src, out_name, max_w, q in JOBS:
    if not os.path.isfile(src):
        print(f"MISSING: {src}")
        continue
    im = Image.open(src).convert("RGB")
    w, h = im.size
    if w > max_w:
        new_h = int(h * max_w / w)
        im = im.resize((max_w, new_h), Image.LANCZOS)
    dst = os.path.join(OUT_DIR, out_name)
    im.save(dst, "JPEG", quality=q, optimize=True, progressive=True)
    sz = os.path.getsize(dst) / 1024
    print(f"OK  {out_name:35s}  {im.size}  {sz:6.1f}KB")

print("Done.")
