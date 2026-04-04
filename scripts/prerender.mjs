/**
 * Post-build prerender script.
 * Serves the dist directory, renders the page with Puppeteer,
 * and writes the fully-rendered HTML back to dist/index.html.
 * This gives search engines real content instead of an empty <div id="root">.
 */

import http from 'http'
import { readFileSync, writeFileSync, existsSync, statSync } from 'fs'
import { resolve, join, extname } from 'path'
import puppeteer from 'puppeteer'

const DIST = resolve(import.meta.dirname, '..', 'dist')
const INDEX = resolve(DIST, 'index.html')
const PORT = 4173

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
}

function createStaticServer() {
  return http.createServer((req, res) => {
    let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url)
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      filePath = INDEX // SPA fallback
    }
    const ext = extname(filePath)
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
    res.end(readFileSync(filePath))
  })
}

async function prerender() {
  const server = createStaticServer()
  await new Promise(r => server.listen(PORT, r))
  const url = `http://localhost:${PORT}`
  console.log(`Static server running at ${url}`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

    // Wait for React to render content into #root
    await page.waitForSelector('#root > *', { timeout: 10000 })
    // Extra time for animations/lazy content to settle
    await new Promise(r => setTimeout(r, 2000))

    const html = await page.content()
    writeFileSync(INDEX, html, 'utf-8')

    console.log('Pre-rendered HTML written to dist/index.html')
    console.log(`File size: ${(readFileSync(INDEX).length / 1024).toFixed(1)} KB`)
  } finally {
    await browser.close()
    server.close()
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
