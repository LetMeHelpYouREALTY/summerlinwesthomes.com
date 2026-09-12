#!/usr/bin/env python3
"""Create a unique Dr. Jan Duffy portrait derivative for each site section."""

from __future__ import annotations

import hashlib
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps, ImageDraw, ImageChops

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(
    "/home/ubuntu/.cursor/projects/workspace/assets/9b6a4e70-9b75-48c6-93d2-c918e6d9b535.jpg"
)
OUT_DIR = ROOT / "public" / "images" / "dr-duffy"
BACKUP = OUT_DIR / "source-dr-jan-duffy.jpg"

BACKGROUNDS = [
    (11, 18, 49),
    (16, 28, 73),
    (250, 247, 239),
    (216, 197, 142),
    (232, 213, 163),
    (248, 244, 234),
    (30, 41, 59),
    (88, 67, 34),
    (255, 255, 255),
    (12, 47, 71),
    (67, 48, 22),
    (226, 232, 240),
]

SERVICE_SLUGS = [
    "appraisals",
    "comparative-real-estate-market-analysis",
    "buying-agent-services",
    "first-time-home-buyer-services",
    "home-buying-sales",
    "condo-buying-sales-assistance",
    "relocation-assistance",
    "luxury-property-buying-sales",
    "mortgage-lending-services",
    "sellers-agent-services",
    "home-staging",
    "real-estate-photography",
    "real-estate-marketing",
    "real-estate-sales",
    "real-estate-sales-management",
    "foreclosed-property-sales",
    "property-auctions",
    "building-lot-sales",
    "land-buying-sales",
    "land-leasing-sales",
    "new-construction-sales-leasing",
    "new-construction-services",
    "commercial-property-buying-sales",
    "office-space-leasing",
    "warehouse-property-sales",
    "real-estate-investing",
    "real-estate-investment-consulting",
    "real-estate-development",
    "real-estate-development-consulting",
    "property-rentals",
    "property-leasing",
    "property-rental-assistance",
    "furnished-property-rentals-sales",
    "short-term-property-rentals",
    "property-management",
]

H1 = [
    "h1-home",
    "h1-about",
    "h1-amenities",
    "h1-buying",
    "h1-valuation",
    "h1-listings",
    "h1-market",
    "h1-market-snapshot",
    "h1-mortgage",
    "h1-search",
    "h1-schools",
    "h1-schools-commute",
    "h1-sell",
    "h1-transport",
    "h1-villages",
    "h1-villages-compare",
    "h1-office",
    "h1-services",
    "h1-sun-city",
]

H2 = [
    "h2-home-value",
    "h2-search",
    "h2-listings",
    "h2-villages",
    "h2-testimonials",
    "h2-cta",
    "h2-financing",
    "h2-selling",
    "h2-schools",
    "h2-amenities",
    "h2-commute",
    "h2-market",
    "h2-guide",
    "h2-featured",
    "h2-faq",
    "h2-consult",
    "h2-geography",
]

H3 = [
    "h3-downtown",
    "h3-airport",
    "h3-transit",
    "h3-arterial",
    "h3-hub",
    "h3-scenic",
    "h3-highway",
    "h3-golf",
    "h3-outdoor",
    "h3-shopping",
    "h3-price",
    "h3-timing",
    "h3-stats",
    "h3-search",
    "h3-ridges",
    "h3-summit",
    "h3-country-club",
    "h3-vistas",
    "h3-stonebridge",
]

AMENITIES = [
    "amenities-tpc-golf",
    "amenities-red-rock",
    "amenities-downtown-summerlin",
    "amenities-ridges-golf",
    "amenities-hospital",
    "amenities-casino",
    "amenities-library",
    "amenities-summit-club",
]

SCHOOLS = [
    "schools-high",
    "schools-middle",
    "schools-elementary",
    "schools-private",
    "schools-college-prep",
]


def digest(slot: str) -> bytes:
    return hashlib.sha256(f"dr-jan-duffy-summerlin-real-estate:{slot}".encode()).digest()


def mix(a: tuple[int, int, int], b: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return tuple(int(a[i] * (1 - t) + b[i] * t) for i in range(3))


def grade_portrait(img: Image.Image, seed: bytes) -> Image.Image:
    portrait = img.convert("RGB")
    if seed[0] % 2:
        portrait = ImageOps.mirror(portrait)
    crop = 4 + (seed[1] % 10)
    if crop * 2 < min(portrait.size):
        portrait = portrait.crop(
            (crop, crop // 2, portrait.width - crop, portrait.height - crop // 3)
        )
    brightness = 0.88 + (seed[2] / 255) * 0.28
    contrast = 0.92 + (seed[3] / 255) * 0.28
    color = 0.85 + (seed[4] / 255) * 0.4
    sharpness = 0.8 + (seed[5] / 255) * 0.7
    portrait = ImageEnhance.Brightness(portrait).enhance(brightness)
    portrait = ImageEnhance.Contrast(portrait).enhance(contrast)
    portrait = ImageEnhance.Color(portrait).enhance(color)
    portrait = ImageEnhance.Sharpness(portrait).enhance(sharpness)
    if seed[6] % 5 == 0:
        portrait = portrait.filter(ImageFilter.UnsharpMask(radius=1.2, percent=90, threshold=2))
    overlay = Image.new("RGB", portrait.size, BACKGROUNDS[seed[7] % len(BACKGROUNDS)])
    portrait = Image.blend(portrait, overlay, 0.04 + (seed[8] / 255) * 0.1)
    return portrait


def canvas_for(slot: str, seed: bytes) -> tuple[int, int]:
    if slot.startswith("h1-"):
        return 1600 + seed[9] % 21, 900 + seed[10] % 13
    if slot.startswith("h2-"):
        return 1600 + seed[9] % 17, 620 + seed[10] % 11
    if slot == "header-portrait":
        return 400 + seed[9] % 9, 400 + seed[10] % 9
    return 1100 + seed[9] % 25, 780 + seed[10] % 17


def render_slot(source: Image.Image, slot: str) -> Image.Image:
    seed = digest(slot)
    width, height = canvas_for(slot, seed)
    c1 = BACKGROUNDS[seed[11] % len(BACKGROUNDS)]
    c2 = BACKGROUNDS[seed[12] % len(BACKGROUNDS)]
    canvas = Image.new("RGB", (width, height), c1)
    draw = ImageDraw.Draw(canvas)
    if seed[13] % 3 == 0:
        for y in range(height):
            t = y / max(height - 1, 1)
            draw.line([(0, y), (width, y)], fill=mix(c1, c2, t))
    elif seed[13] % 3 == 1:
        for x in range(width):
            t = x / max(width - 1, 1)
            draw.line([(x, 0), (x, height)], fill=mix(c1, c2, t))
    else:
        draw.rectangle([0, 0, width // 2, height], fill=c1)
        draw.rectangle([width // 2, 0, width, height], fill=c2)

    frame_color = BACKGROUNDS[seed[14] % len(BACKGROUNDS)]
    inset = 10 + seed[15] % 18
    draw.rectangle([inset, inset, width - inset, height - inset], outline=frame_color, width=3 + seed[16] % 4)

    portrait = grade_portrait(source, seed)
    target_h = int(height * (0.72 + (seed[17] / 255) * 0.22))
    ratio = target_h / portrait.height
    target_w = max(80, int(portrait.width * ratio))
    portrait = portrait.resize((target_w, target_h), Image.Resampling.LANCZOS)

    max_x = max(inset + 8, width - target_w - inset - 8)
    max_y = max(inset + 8, height - target_h - inset - 8)
    x = inset + 8 + (seed[18] / 255) * (max_x - inset - 8)
    y = inset + 8 + (seed[19] / 255) * (max_y - inset - 8)
    x, y = int(x), int(y)

    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        [x + 8, y + 10, x + target_w + 8, y + target_h + 10],
        radius=18,
        fill=(0, 0, 0, 48),
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(8))
    canvas = Image.alpha_composite(canvas.convert("RGBA"), shadow).convert("RGB")

    mask = Image.new("L", portrait.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, portrait.width - 1, portrait.height - 1],
        radius=16 + seed[20] % 20,
        fill=255,
    )
    canvas.paste(portrait, (x, y), mask)

    accent = Image.new("RGB", (width, 6 + seed[21] % 5), BACKGROUNDS[seed[22] % len(BACKGROUNDS)])
    if seed[23] % 2:
        canvas.paste(accent, (0, 0))
    else:
        canvas.paste(accent, (0, height - accent.height))

    if seed[24] % 4 == 0:
        noise = Image.effect_noise((width, height), 12 + seed[25] % 10).convert("RGB")
        canvas = ImageChops.blend(canvas, noise, 0.03)
    return canvas


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE).convert("RGB")
    source.save(BACKUP, "JPEG", quality=95, optimize=True, subsampling=0)

    slots = (
        ["header-portrait"]
        + H1
        + H2
        + H3
        + AMENITIES
        + SCHOOLS
        + [f"service-{slug}" for slug in SERVICE_SLUGS]
    )
    for slot in slots:
        image = render_slot(source, slot)
        quality = 78 + digest(slot)[26] % 13
        dest = OUT_DIR / f"{slot}.jpg"
        image.save(dest, "JPEG", quality=quality, optimize=True, progressive=True)
        print(f"{dest.name} {image.size} q={quality}")
    print(f"wrote {len(slots)} unique portraits to {OUT_DIR}")


if __name__ == "__main__":
    main()
