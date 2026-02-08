# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Derrell Willis (derrellwillis.com). This is a single-page site with no build system, no package manager, and no framework — just vanilla HTML, CSS, and jQuery served via Apache on a cPanel-hosted environment.

## Architecture

- **`index.html`** — Single-page layout with sections: intro (hero), about, skills, work (portfolio), contact form, and footer
- **`style.css`** — Root-level main stylesheet (the one linked from index.html)
- **`js/main.js`** — jQuery hover animations for the skills section icons (rotate + color change on hover)
- **`js/plugins.js`** — Console shim for older browsers
- **`.htaccess`** — Apache config: HTTP→HTTPS redirect, GZIP compression, browser caching, WordPress rewrite rules

### External Dependencies (loaded via CDN)

- Bootstrap 3.3.7 (CSS + JS)
- jQuery 1.12.4
- Font Awesome 4.5.0
- Google Fonts (Baloo Tamma, Poiret One, Raleway)
- GSAP TweenMax 1.19.0
- ScrollMagic 2.0.5

### Other Directories

- **`css/`** — Contains separate PHP projects (a shopping cart app in `css/cart/` and AJAX experiments in `css/php/`), not related to the main portfolio
- **`itsrellz.com/`** — Archived hosting scripts and utilities from a previous domain
- **`portfolio-main/`** — Empty/placeholder directory
- **`doc/`** — HTML5 Boilerplate documentation (the project was scaffolded from H5BP)

## Development

No build tools, linters, or test suites. To develop locally, open `index.html` in a browser or use any static file server:

```bash
python3 -m http.server 8000
```

### Deployment

The site is hosted on a cPanel/Apache server. Deployment is done by uploading files (FTP or cPanel file manager). The `.htaccess` enforces HTTPS and `www.` prefix via 301 redirect.

## Design Tokens

- Brand yellow: `#fee529`
- Primary font: `Raleway` (body), `Poiret One` (headings/nav)
- Section backgrounds alternate: white → `#EEE` → white → `#333` → black (footer)
