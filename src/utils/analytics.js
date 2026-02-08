import { siteConfig } from '../data/content'

export function initGA4() {
  const id = siteConfig.ga4Id
  if (!id || id === 'G-XXXXXXXXXX') return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', id)
}
