import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const dir = path.resolve('public/photos')
const expected = Array.from({ length: 27 }, (_, i) => `memory-${String(i + 1).padStart(2, '0')}.webp`)
let failed = false

try {
  const files = new Set(await readdir(dir))
  for (const name of expected) {
    const file = path.join(dir, name)
    if (!files.has(name)) {
      console.error(`MISSING: public/photos/${name}`)
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
} catch {
  console.error('PHOTO DIRECTORY MISSING: public/photos/')
  failed = true
}
if (failed) {
  console.error('Photo integrity check failed. Add all 27 valid WebP images before deploying.')
  process.exit(1)
}
console.log('Photo integrity check passed.')
