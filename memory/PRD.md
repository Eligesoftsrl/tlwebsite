# Tenuta Leone - Wedding Venue Website

## Project Overview
Modernization of the Tenuta Leone website - a luxury wedding and event venue in Calvanico, Salerno (Campania), Italy.

## Core Requirements (Completed)
- Modern 2026 UI/UX with dark green and gold theme
- Fully responsive design
- SEO and AI optimized (Schema.org, sitemap.xml, robots.txt)
- WhatsApp widget integration
- 360 virtual tours (Kuula iFrame)
- Professional image galleries with lightbox
- Contact form with external CRM integration
- GDPR compliance (Cookie banner, Privacy Policy, Cookie Policy)
- WebP image optimization for performance
- Static HTML pre-rendering via react-snap for SEO crawlability

## Pages Implemented
1. **Homepage** - Hero slider, services, reviews, Instagram feed, FAQ, Blog preview, premium CTA
2. **Tour (La Dimora)** - All venue spaces with images
3. **Sala Detail Pages** - Individual room pages with 360 tours and galleries
4. **Piatti (I Piatti)** - Dishes showcase with lightbox gallery (4 pillars)
5. **Brigade (La Brigata)** - Chef team presentation
6. **Pasticceria** - Pastry team and creations
7. **Music Band** - Live band service with instruments showcase
8. **Qualcosa di Blu** - Wedding consultancy team
9. **Contact Page** - Form with all mandatory fields + privacy checkbox
10. **Privacy Policy** - Full Italian GDPR-compliant privacy policy
11. **Cookie Policy** - Full Italian cookie policy page
12. **DirezionePage** - Team direction page
13. **FrontdeskPage** - Consulenza Eventi (Adele & Anna profiles)
14. **MatrimoniPage** - Matrimoni d'Autore landing page
15. **ComunioniPage** - Comunioni e Battesimi landing page
16. **FestePage** - Feste di Laurea e Compleanni landing page
17. **EventiAziendaliPage** - Eventi Aziendali e Meeting landing page
18. **BlogPage** - Blog listing page with article cards
19. **BlogArticlePage** - Individual blog article with structured data

## Blog Articles
1. "Food Experience 2026: Quando l'Alta Cucina diventa Performance" (slug: food-experience-2026-alta-cucina-performance)
2. "Sposarsi in Autunno: Il Fascino di un Matrimonio in Dimora Storica" (slug: matrimonio-autunno-dimora-storica-salerno)

## SEO Configuration
- **Title**: "Tenuta Leone | Location Matrimoni Salerno | Dimora Storica"
- Canonical URLs: `https://www.tenutaleone.it/[path]`
- Schema.org: LocalBusiness (root), BlogPosting (articles), Service (event pages)
- react-snap pre-rendering for all routes (direct imports, NO React.lazy)
- vercel.json: cleanUrls, rewrites fallback, 301 redirects www
- sitemap.xml: Updated with blog URLs (34+ URLs)
- GitHub Actions workflow for automated pre-rendering + Vercel deploy

## Pre-rendering Architecture
- `react-snap` runs during build (`yarn build:prerender`)
- All pages imported directly (NOT lazy-loaded) to guarantee HTML capture
- GitHub Action: build → react-snap → verify HTML content → copy vercel.json → deploy to Vercel
- `vercel.json` deployed IN the build directory with proper routing config

## Technical Stack
- **Frontend:** React 19, React Router 7, Swiper.js, react-helmet-async v3
- **Styling:** CSS with variables, Flexbox/Grid
- **Pre-rendering:** react-snap + Puppeteer
- **CI/CD:** GitHub Actions → Vercel deploy
- **Data:** Static siteData.js, blogData.js

## File Structure
```
/app/frontend/src/
  App.js          # Routing (20 routes, direct imports)
  App.css         # Global styles (~6400 lines)
  components/     # HeroSlider, BlogPreview, BookingForm, etc.
  pages/          # All route pages
  data/
    siteData.js   # Team, rooms, menus
    blogData.js   # Blog articles
```

## Backlog / Future Tasks
- [ ] CSS modularization: Split App.css into per-page CSS modules (P2)
- [ ] Dynamic Instagram feed (P3)
- [ ] Dynamic Google Reviews via API (P3)
- [ ] Multi-language support (English) (P3)
- [ ] User must disable Vercel Git integration if active (deploy only via GitHub Actions)
- [ ] Force recrawl on Google Search Console after deploy
