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
- Code-splitting with React.lazy for faster loading

## Pages Implemented
1. **Homepage** - Hero slider, services, reviews, Instagram feed, FAQ, premium CTA
2. **Tour (La Dimora)** - All venue spaces with images
3. **Sala Detail Pages** - Individual room pages with 360 tours and galleries
4. **Piatti (I Piatti)** - Dishes showcase with lightbox gallery
5. **Brigade (La Brigata)** - Chef team presentation
6. **Pasticceria** - Pastry team and creations
7. **Music Band** - Live band service with instruments showcase
8. **Qualcosa di Blu** - Wedding consultancy team
9. **Contact Page** - Form with CRM integration + privacy checkbox
10. **Privacy Policy** - Full Italian GDPR-compliant privacy policy
11. **Cookie Policy** - Full Italian cookie policy page
12. **DirezionePage** - Team direction page
13. **FrontdeskPage** - Consulenza Eventi (Adele Celentano & Anna De Filippis profiles)
14. **MatrimoniPage** - Matrimoni d'Autore landing page (`/matrimoni-autore-salerno`)
15. **ComunioniPage** - Comunioni e Battesimi landing page (`/comunioni-battesimi-campania`)
16. **FestePage** - Feste di Laurea e Compleanni landing page (`/feste-laurea-salerno`)
17. **EventiAziendaliPage** - Eventi Aziendali e Meeting landing page (`/eventi-aziendali-salerno`)

## Bug Fixes History

### March 2026 - CTA Background Image Fix
Fixed CSS covering background images on CTA sections. Added `:not(.cta-with-bg)` selector.

### March 2026 - Frontdesk Profile Description Visibility Fix
**Problem:** Profile description text for Adele Celentano and Anna De Filippis was invisible - white text (`--color-text: rgba(255,255,255,0.85)`) on white card background.
**Solution:** Changed `.profile-description` color from `var(--color-text)` to `var(--color-primary)` (#112E2E) in App.css line 6337.
**File Modified:** `/app/frontend/src/App.css`

## Technical Stack
- **Frontend:** React, React Router, Swiper.js, yet-another-react-lightbox, react-helmet-async
- **Backend:** FastAPI, httpx (async HTTP)
- **Styling:** CSS with variables, Flexbox/Grid, WebP images
- **Performance:** React.lazy, code-splitting, lazy loading images
- **Data:** Static siteData.js (reviews, piatti, etc.)

## File Structure
```
/app/frontend/src/
  App.js          # Routing definition (17 routes)
  App.css         # Global styles (~6354 lines)
  components/     # HeroSlider, FAQSection, CookieConsent, LazyImage, etc.
  pages/          # All route pages
  data/siteData.js
```

## SEO Configuration
- Canonical URLs: `https://www.tenutaleone.it/[path]`
- Schema.org: LocalBusiness (root), Service (event pages), Organization (team pages)
- vercel.json: 301 redirects from non-www to www
- sitemap.xml: Updated with all new pages

## Backlog / Future Tasks
- [ ] General code cleanup: Ensure no orphaned CSS rules in App.css (6000+ lines)
- [ ] CSS modularization: Split App.css into per-page CSS modules
- [ ] Dynamic Instagram feed (requires third-party service like Elfsight)
- [ ] Dynamic Google Reviews (Google Places API integration)
- [ ] Analytics integration (Google Analytics 4)
- [ ] Multi-language support (English version)
- [ ] Monitor Google Search Console indexing status
