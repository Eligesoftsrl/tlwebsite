# Tenuta Leone - Wedding Venue Website

## Project Overview
Modernization of the Tenuta Leone website - a luxury wedding and event venue in Calvanico, Salerno (Campania), Italy.

## Core Requirements (Completed)
- Modern 2026 UI/UX with dark green and gold theme
- Fully responsive design
- SEO and AI optimized (Schema.org, sitemap.xml, robots.txt)
- WhatsApp widget integration
- 360° virtual tours (Kuula iFrame)
- Professional image galleries with lightbox
- Contact form with external CRM integration
- GDPR compliance (Cookie banner, Privacy Policy, Cookie Policy)
- WebP image optimization for performance
- Code-splitting with React.lazy for faster loading

## Pages Implemented
1. **Homepage** - Hero slider, services, reviews, Instagram feed, FAQ, premium CTA
2. **Tour (La Dimora)** - All venue spaces with images
3. **Sala Detail Pages** - Individual room pages with 360° tours and galleries
4. **Piatti (I Piatti)** - Dishes showcase with lightbox gallery
5. **Brigade (La Brigata)** - Chef team presentation
6. **Pasticceria** - Pastry team and creations
7. **Music Band** - Live band service with instruments showcase
8. **Qualcosa di Blu** - Wedding consultancy team
9. **Contact Page** - Form with CRM integration + privacy checkbox
10. **Privacy Policy** - Full Italian GDPR-compliant privacy policy
11. **Cookie Policy** - Full Italian cookie policy page

## Recent Bug Fix (March 2026)

### CTA Background Image Fix
**Problem:** Background images on CTA sections were not visible on pages like Piatti, Brigata, Pasticceria, and Tour. The CSS was incorrectly applying solid backgrounds that covered the intended background images.

**Solution:**
1. Added `position: relative` and `overflow: hidden` to `.cta-with-bg` class
2. Modified page-specific CTA classes (`.piatti-cta`, `.brigata-cta`, `.pasticceria-cta`, `.tour-cta`, `.cta-section`) to apply solid backgrounds ONLY when `.cta-with-bg` class is NOT present, using `:not(.cta-with-bg)` selector
3. Reduced overlay opacity from 88-80% to 55-50% to make background images more visible while maintaining text readability

### CTA Outline Button Visibility Fix
**Problem:** On Music Band and Qualcosa di Blu pages, the second CTA button (`.btn-outline`) was invisible because its text and border color were dark green on a dark background.

**Solution:**
Added specific CSS rules for `.cta-section.cta-with-bg .btn-outline` to ensure white text and border color when the CTA section has a background image.

**Files Modified:**
- `/app/frontend/src/App.css` - CSS fixes for CTA background visibility and button styling

## Technical Stack
- **Frontend:** React, React Router, Swiper.js, yet-another-react-lightbox, react-helmet-async
- **Backend:** FastAPI, httpx (async HTTP)
- **Styling:** CSS with variables, Flexbox/Grid, WebP images
- **Performance:** React.lazy, code-splitting, lazy loading images
- **Data:** Static siteData.js (reviews, piatti, etc.)

## File Structure
```
/app/
├── backend/
│   ├── server.py         # FastAPI with /api/contact proxy
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── InstagramFeed.jsx
│   │   │   ├── CookieConsent.js
│   │   │   ├── LazyImage.js
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── legal/
│   │   │   │   ├── PrivacyPolicyPage.js
│   │   │   │   └── CookiePolicyPage.js
│   │   │   ├── HomePage.js
│   │   │   ├── PiattiPage.js
│   │   │   ├── BrigataPage.js
│   │   │   ├── PasticceriaPage.js
│   │   │   ├── TourPage.js
│   │   │   └── ...
│   │   ├── data/
│   │   │   └── siteData.js
│   │   └── App.css
│   └── public/
│       ├── img/         # WebP optimized images
│       ├── sitemap.xml
│       └── robots.txt
```

## Backlog / Future Tasks
- [ ] Dynamic Instagram feed (requires third-party service like Elfsight)
- [ ] Dynamic Google Reviews (Google Places API integration)
- [ ] Analytics integration (Google Analytics 4)
- [ ] Multi-language support (English version)
