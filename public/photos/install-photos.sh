#!/usr/bin/env bash
set -euo pipefail

if [[ ! -d .git ]]; then
  echo "Run this script from the root of your cloned valentine- repository."
  exit 1
fi

if [[ ! -d public/photos ]]; then
  echo "public/photos was not found. Extract the deployment ZIP into the repository root first."
  exit 1
fi

count=$(find public/photos -maxdepth 1 -type f -name 'memory-*.webp' | wc -l | tr -d ' ')
if [[ "$count" != "27" ]]; then
  echo "Expected 27 WebP photos in public/photos, found: $count"
  exit 1
fi

for file in public/photos/memory-*.webp; do
  file "$file" | grep -qi 'webp image' || {
    echo "Invalid WebP file: $file"
    exit 1
  }
done

git add public/photos
if git diff --cached --quiet; then
  echo "No photo changes to commit."
  exit 0
fi

git commit -m "assets: restore 27 original relationship photos"
git push origin main
echo "Uploaded all 27 photos to GitHub. Wait for Cloudflare Pages deployment to finish."
