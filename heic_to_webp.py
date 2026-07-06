#!/usr/bin/env python3
"""
Convert all HEIC photos in a folder to WebP (smallest size, visually lossless)
or JPEG, preserving EXIF/orientation data.

Usage:
    python heic_convert.py /path/to/folder
    python heic_convert.py /path/to/folder --format jpeg --quality 90
    python heic_convert.py /path/to/folder --delete-originals

Install dependencies first:
    pip install pillow-heif Pillow
"""

import argparse
import sys
from pathlib import Path

from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()


def convert_file(path: Path, out_format: str, quality: int, keep_exif: bool):
    img = Image.open(path)
    exif = img.info.get("exif") if keep_exif else None

    out_path = path.with_suffix(f".{out_format}")

    save_kwargs = {"quality": quality}
    if exif:
        save_kwargs["exif"] = exif

    if out_format == "webp":
        # method=6 = slowest/best compression, quality=90 is visually lossless
        save_kwargs["method"] = 6
    elif out_format == "jpeg":
        save_kwargs["optimize"] = True
        # Convert to RGB (JPEG doesn't support alpha)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

    img.save(out_path, out_format.upper(), **save_kwargs)
    return out_path


def main():
    parser = argparse.ArgumentParser(description="Batch convert HEIC images.")
    parser.add_argument("folder", type=str, help="Folder containing .heic files")
    parser.add_argument(
        "--format",
        choices=["webp", "jpeg"],
        default="webp",
        help="Output format (webp = smaller, jpeg = more compatible). Default: webp",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=90,
        help="Quality 1-100. 90 is visually lossless for both webp/jpeg. Default: 90",
    )
    parser.add_argument(
        "--delete-originals",
        action="store_true",
        help="Delete the original .heic file after successful conversion",
    )
    args = parser.parse_args()

    folder = Path(args.folder)
    if not folder.is_dir():
        print(f"Error: {folder} is not a valid folder.")
        sys.exit(1)

    heic_files = list(folder.rglob("*.heic")) + list(folder.rglob("*.HEIC"))
    if not heic_files:
        print("No .heic files found.")
        return

    total_before = 0
    total_after = 0

    for f in heic_files:
        try:
            size_before = f.stat().st_size
            out_path = convert_file(f, args.format, args.quality, keep_exif=True)
            size_after = out_path.stat().st_size

            total_before += size_before
            total_after += size_after

            saved_pct = 100 * (1 - size_after / size_before)
            print(
                f"✓ {f.name} -> {out_path.name} "
                f"({size_before/1024:.0f}KB -> {size_after/1024:.0f}KB, "
                f"{saved_pct:.0f}% smaller)"
            )

            if args.delete_originals:
                f.unlink()

        except Exception as e:
            print(f"✗ Failed on {f.name}: {e}")

    print("\n--- Done ---")
    print(f"Files converted: {len(heic_files)}")
    if total_before:
        print(
            f"Total size: {total_before/1024/1024:.1f}MB -> "
            f"{total_after/1024/1024:.1f}MB "
            f"({100*(1-total_after/total_before):.0f}% reduction)"
        )


if __name__ == "__main__":
    main()
    
