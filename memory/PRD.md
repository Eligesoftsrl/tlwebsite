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
- Static HTML pre-rendering via react-snap (GitHub Actions CI/CD)

## Pages Implemented
1. **Homepage** - Hero slider, services, reviews, Instagram feed, BlogPreview, FAQ, premium CTA
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
14. **MatrimoniPage** - Matrimoni d'Autore landing page
15. **ComunioniPage** - Comunioni e Battesimi landing page
16. **FestePage** - Feste di Laurea e Compleanni landing page
17. **EventiAziendaliPage** - Eventi Aziendali e Meeting landing page
18. **BlogPage** - Blog listing with tag filtering system (4 categories, accordion UI)
19. **BlogArticlePage** - Single blog article with tags section + clickable tag links

## Blog Tag System (Implemented April 2026)
- **4 Tag Categories**: Istituzionali, Geografici, Gastronomici, Ispirazione e Trend
- **Tag list**: TenutaLeone, FirmaDAutore, FamigliaStasi, DimoraStorica, MatrimoniDAutore, MatrimonioSalerno, WeddingCampania, LocationMatrimoniSalerno, EventiSalerno, WeddingItaly, AltaCucinaDAutore, PasticceriaInterna, BanchettoNuziale, EccellenzaGastronomica, FoodDesignWedding, WeddingInspiration, Sposi2026, WeddingTips, IdeeMatrimonio, DettagliDAutore, QualcosaDiBlu
- **Filtering**: URL-based via useSearchParams (/blog?tag=TagName)
- **UI**: Accordion categories, gold pill tags, active filter indicator, article count

## Technical Stack
- **Frontend:** React, React Router, Swiper.js, yet-another-react-lightbox, react-helmet-async, react-snap
- **Backend:** FastAPI (static, not modified)
- **Styling:** CSS with variables, Flexbox/Grid, WebP images
- **Performance:** React.lazy, code-splitting, lazy loading images
- **Data:** Static siteData.js, blogData.js
- **Deployment:** GitHub Actions -> react-snap -> Vercel CLI

## File Structure
```
/app/frontend/src/
  App.js          # Routing (20 routes including blog)
  App.css         # Global styles (~6900 lines)
  components/     # HeroSlider, FAQSection, CookieConsent, LazyImage, BlogPreview, etc.
  pages/          # All route pages
  data/
    siteData.js   # Reviews, piatti, etc.
    blogData.js   # Blog articles, allTags, tagCategories
```

## SEO Configuration
- Canonical URLs: `https://www.tenutaleone.it/[path]`
- Schema.org: LocalBusiness (root), Service (event pages), Organization (team pages), Blog/BlogPosting (blog)
- vercel.json: 301 redirects from non-www to www
- sitemap.xml: 31 URLs
- react-snap: Static HTML pre-rendering

## Backlog / Future Tasks
- [ ] General code cleanup: Ensure no orphaned CSS rules in App.css (6900+ lines)
- [ ] CSS modularization: Split App.css into per-page CSS modules
- [ ] Dynamic Instagram feed (requires third-party service like Elfsight)
- [ ] Dynamic Google Reviews (Google Places API integration)
- [ ] Analytics integration (Google Analytics 4)
- [ ] Multi-language support (English version)
- [ ] Monitor Google Search Console indexing status
- [ ] Add more real blog articles (currently 1 dummy article)
