#!/usr/bin/env node
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const publicDir = path.join(repoRoot, 'public')
const optimizedRoot = path.join(publicDir, 'optimized')

// We intentionally exclude .webp from optimization inputs to avoid re-encoding already optimized images
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif'])
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov'])
let SIZE_THRESHOLD = 300 * 1024 // default 300KB, can be overridden via CLI

const args = process.argv.slice(2)
const APPLY = args.includes('--apply')

// Optional CLI arguments:
// --threshold=500KB | 1MB | 200000 (bytes)
// --include=substring (only process files whose relative path includes the substring)
let INCLUDE_FILTER = null
for (const a of args) {
  if (a.startsWith('--threshold=')) {
    const raw = a.split('=')[1]
    SIZE_THRESHOLD = parseThreshold(raw)
  } else if (a.startsWith('--include=')) {
    INCLUDE_FILTER = a.split('=')[1]
  }
}

if (args.includes('--help') || args.includes('-h')) {
  const usage = `\nMedia Optimizer\n\nUsage:\n  node scripts/media-optimize.mjs [--scan|--apply] [--threshold=<N|KB|MB|GB>] [--include=<substring>]\n\nCommands:\n  --scan       Scan only (default) and write media-report.{json,md}\n  --apply      Generate optimized copies under public/optimized/ and write media-optimized-map.json\n\nOptions:\n  --threshold=VALUE   Size threshold to include (default 300KB). Examples: 500KB, 1MB, 200000\n  --include=SUBSTR    Only include items whose relative path contains SUBSTR\n  -h, --help          Show this help\n\nNotes:\n  - Images (.jpg, .jpeg, .png, .gif) -> WebP (quality=75)\n  - Videos (.mp4, .webm, .mov) -> MP4 H.264/AAC (scale max width 1280, CRF 28)\n  - Existing optimized outputs are skipped if newer and smaller\n`
  console.log(usage)
  process.exit(0)
}

function formatBytes(bytes) {
  const sizes = ['B','KB','MB','GB']
  if (bytes === 0) return '0 B'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const val = (bytes / Math.pow(1024, i)).toFixed(2)
  return `${val} ${sizes[i]}`
}

function parseThreshold(input) {
  if (!input) return SIZE_THRESHOLD
  const s = String(input).trim().toUpperCase()
  // support suffixes: KB, MB, GB; default bytes if numeric only
  const match = s.match(/^(\d+(?:\.\d+)?)(B|KB|MB|GB)?$/)
  if (!match) return SIZE_THRESHOLD
  const num = parseFloat(match[1])
  const unit = match[2] || 'B'
  const mul = unit === 'GB' ? 1024*1024*1024 : unit === 'MB' ? 1024*1024 : unit === 'KB' ? 1024 : 1
  return Math.round(num * mul)
}

async function* walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      yield* walk(p)
    } else if (e.isFile()) {
      yield p
    }
  }
}

async function ensureDir(p) {
  await fsp.mkdir(p, { recursive: true })
}

async function scanMedia() {
  const results = []
  if (!fs.existsSync(publicDir)) return results
  for await (const file of walk(publicDir)) {
    const ext = path.extname(file).toLowerCase()
    if (!IMAGE_EXT.has(ext) && !VIDEO_EXT.has(ext)) continue
    const stat = await fsp.stat(file)
    const rel = path.relative(publicDir, file)
    if (INCLUDE_FILTER && !rel.includes(INCLUDE_FILTER)) continue
    const type = IMAGE_EXT.has(ext) ? 'image' : 'video'
    results.push({ type, path: rel, size: stat.size, pretty: formatBytes(stat.size) })
  }
  return results.sort((a,b) => b.size - a.size)
}

async function writeReport(list) {
  const reportJson = path.join(repoRoot, 'media-report.json')
  const reportMd = path.join(repoRoot, 'media-report.md')
  const over = list.filter(x => x.size >= SIZE_THRESHOLD)
  await fsp.writeFile(reportJson, JSON.stringify({ generatedAt: new Date().toISOString(), threshold: SIZE_THRESHOLD, items: list }, null, 2), 'utf8')
  const lines = [
    `# Media Report`,
    `Generated: ${new Date().toISOString()}`,
    `Threshold: ${SIZE_THRESHOLD} bytes (300KB)`,
    '',
    `## Over Threshold (${over.length})`,
    '',
    '| Type | Size | Path |',
    '|------|------|------|',
    ...over.map(i => `| ${i.type} | ${i.pretty} | ${i.path} |`)
  ]
  await fsp.writeFile(reportMd, lines.join('\n'), 'utf8')
  return { reportJson, reportMd, overCount: over.length }
}

async function optimizeImage(absInput, rel) {
  const { default: sharp } = await import('sharp')
  const outPath = path.join(optimizedRoot, rel).replace(/\.[^.]+$/, '.webp')
  await ensureDir(path.dirname(outPath))
  // webp defaults: quality 75, effort 4 for decent speed/quality tradeoff
  await sharp(absInput).webp({ quality: 75, effort: 4 }).toFile(outPath)
  return outPath
}

async function optimizeVideo(absInput, rel) {
  // Use ffmpeg-static binary
  const ffmpegPath = (await import('ffmpeg-static')).default
  if (!ffmpegPath) throw new Error('ffmpeg-static not found')
  const outPath = path.join(optimizedRoot, rel).replace(/\.[^.]+$/, '.mp4')
  await ensureDir(path.dirname(outPath))

  // Transcode to H.264 + AAC, limit width to 1280, CRF 28 for size/quality
  const ffArgs = [
    '-y',
    '-i', absInput,
    '-vf', 'scale=1280:-2:flags=lanczos',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '28',
    '-c:a', 'aac', '-b:a', '128k',
    outPath
  ]
  await new Promise((resolve, reject) => {
    const p = spawn(ffmpegPath, ffArgs, { stdio: 'inherit' })
    p.on('error', reject)
    p.on('close', code => code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`)))
  })
  return outPath
}

async function applyOptimization(list) {
  const over = list.filter(x => x.size >= SIZE_THRESHOLD)
  const summary = { images: 0, videos: 0, outputs: [] }
  for (const item of over) {
    const abs = path.join(publicDir, item.path)
    const out = path.join(optimizedRoot, item.path).replace(/\.[^.]+$/, item.type === 'image' ? '.webp' : '.mp4')
    // Skip if an optimized output exists and is already newer and smaller
    try {
      const [inStat, outStat] = await Promise.allSettled([fsp.stat(abs), fsp.stat(out)])
      if (outStat.status === 'fulfilled' && inStat.status === 'fulfilled') {
        if (outStat.value.mtimeMs >= inStat.value.mtimeMs && outStat.value.size < inStat.value.size) {
          // Already optimized, skip
          continue
        }
      }
    } catch {
      // ignore: missing optimized output or stat error; proceed to generate new optimized file
    }
    try {
      if (item.type === 'image') {
        const out = await optimizeImage(abs, item.path)
        summary.images++
        summary.outputs.push({ from: item.path, to: path.relative(publicDir, out) })
      } else if (item.type === 'video') {
        const out = await optimizeVideo(abs, item.path)
        summary.videos++
        summary.outputs.push({ from: item.path, to: path.relative(publicDir, out) })
      }
    } catch (e) {
      console.warn('Optimize failed:', item.path, e?.message || e)
    }
  }
  const outJson = path.join(repoRoot, 'media-optimized-map.json')
  await fsp.writeFile(outJson, JSON.stringify(summary, null, 2), 'utf8')
  return { summaryFile: outJson, ...summary }
}

(async () => {
  console.log(`[media] scanning in ${publicDir}`)
  const list = await scanMedia()
  console.log(`[media] found ${list.length} media files`)

  const { reportJson, reportMd, overCount } = await writeReport(list)
  console.log(`[media] report written: ${path.relative(repoRoot, reportJson)} | ${path.relative(repoRoot, reportMd)} (over threshold: ${overCount}, threshold=${formatBytes(SIZE_THRESHOLD)})`)

  if (APPLY) {
    console.log(`[media] applying optimizations for files >= ${formatBytes(SIZE_THRESHOLD)}${INCLUDE_FILTER ? ` (filter: ${INCLUDE_FILTER})` : ''}...`)
    const result = await applyOptimization(list)
    console.log(`[media] optimized images: ${result.images}, videos: ${result.videos}`)
    console.log(`[media] map written: ${path.relative(repoRoot, result.summaryFile)}`)
    console.log('[media] NOTE: references are not auto-rewritten. Use generated map to adopt WebP/MP4 paths where needed.')
  } else {
    console.log('[media] dry run only (scan). Use --apply or npm run media:optimize to generate optimized copies under public/optimized/.')
    if (INCLUDE_FILTER) {
      console.log(`[media] include filter active: "${INCLUDE_FILTER}"`)
    }
  }
})().catch(err => {
  console.error('[media] failed:', err)
  process.exitCode = 1
})
