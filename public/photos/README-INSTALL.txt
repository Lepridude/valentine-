# Valentine photo deployment bundle

This bundle matches the current `src/App.tsx` gallery, which references:
`/photos/memory-01.webp` through `/photos/memory-27.webp`.

## Install
1. Unzip this archive into the root of your cloned `valentine-` repository (merge/replace if asked).
2. From the repository root run `bash install-photos.sh`.
3. The script verifies the 27 WebP files, commits `public/photos/`, and pushes to `origin main`.

The files are converted from the uploaded originals. EXIF orientation is applied; no upscaling is performed; long edge is capped at 2400 px; WebP quality is 92. All files were reopened and fully decoded after export. This checks file integrity, not whether the original camera images themselves contain blur/noise.
