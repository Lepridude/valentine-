#!/usr/bin/env bash
set -euo pipefail

if [[ ! -d .git ]]; then
  echo "Run this script from the root of your cloned valentine- repository."
  exit 1
fi

if [[ ! -d public/photos ]]; then
  echo "public/photos was not found."
  exit 1
fi

count=$(find public/photos -maxdepth 1 -type f -name 'memory-*.webp' | wc -l | tr -d ' ')
if [[ "$count" == "0" ]]; then
  echo "No memory-*.webp photos found in public/photos."
  exit 1
fi

for file in public/photos/memory-*.webp; do
  file "$file" | grep -qi 'webp image' || {
    echo "Invalid WebP file: $file"
    exit 1
  }
done

echo "Validated $count WebP photo(s)."
git add public/photos
if git diff --cached --quiet; then
  echo "No photo changes to commit."
  exit 0
fi

git commit -m "assets: sync relationship photos"
git push origin main
echo "Photo assets pushed to GitHub."
