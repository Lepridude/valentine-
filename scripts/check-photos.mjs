import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const dir = path.resolve('public/photos')
const appPath = path.resolve('src/App.tsx')
let failed = false

try {
  const app = await readFile(appPath, 'utf8')
  const referenced = [...app.matchAll(/\/photos\/(memory-\d+\.webp)/g)].map((match) => match[1])
  const unique = [...new Set(referenced)]
  if (unique.length !== referenced.length) {
    console.error('DUPLICATE: a photo is referenced more than once in src/App.tsx')
    failed = true
  }
  const files = new Set(await readdir(dir))
  for (const name of unique) {
    const file = path.join(dir, name)
    if (!files.has(name)) {
      console.error(`MISSING: public/photos/${name} (referenced in App.tsx)`)
      failed = true
      continue
    }
    const info = await stat(file)
    const bytes = await readFile(file)
    const validWebp = bytes.length >= 12 && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP'
    if (info.size < 1000 || !validWebp) {
      console.error(`INVALID: public/photos/${name} (size=${info.size}, valid WebP header=${validWebp})`)
      failed = true
    } else console.log(`OK: ${name} (${Math.round(info.size / 1024)} KB)`)
  }
  if (unique.length === 0) {
    console.error('NO PHOTOS: src/App.tsx does not reference any gallery photos')
    failed = true
  }
} catch (error) {
  console.error('PHOTO CHECK FAILED:', error)
  failed = true
}
if (failed) {
  console.error('Photo integrity check failed. Ensure every referenced gallery image exists and is a valid WebP.')
  process.exit(1)
}
console.log('Photo integrity check passed.')
