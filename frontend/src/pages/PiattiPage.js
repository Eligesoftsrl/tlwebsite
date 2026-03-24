import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { piatti } from '../data/siteData';
import LazyImage from '../components/LazyImage';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BASE_URL = 'https://tenutaleone.it';

const PiattiPage = () => {
  const [activeFilter, setActiveFilter] = useState('tutti');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allPiatti = [
    ...piatti.primi.map(img => ({ src: img, category: 'primi' })),
    ...piatti.secondi.map(img => ({ src: img, category: 'secondi' })),
    ...piatti.dolci.map(img => ({ src: img, category: 'dolci' }))
  ];

  const filteredPiatti = activeFilter === 'tutti' 
    ? allPiatti 
    : allPiatti.filter(p => p.category === activeFilter);

  const gallerySlides = filteredPiatti.map(p => ({ src: p.src }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu Tenuta Leone",
    "description": "Le proposte culinarie 2025/2026 di Tenuta Leone. Cucina tradizionale campana con ingredienti di stagione per matrimoni ed eventi.",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "I Primi",
        "description": "Primi piatti della tradizione campana"
      },
      {
        "@type": "MenuSection", 
        "name": "I Secondi",
        "description": "Secondi piatti di carne e pesce"
      },
      {
        "@type": "MenuSection",
        "name": "I Dolci",
        "description": "Dolci e dessert della pasticceria"
      }
    ],
    "inMenu": {
      "@type": "FoodEstablishment",
      "name": "Tenuta Leone",
      "servesCuisine": "Cucina Campana, Cucina Italiana"
    }
  };

  return (
    <>
      <Helmet>
        <title>I Piatti - Menu Matrimoni ed Eventi | Tenuta Leone Salerno</title>
        <meta name="description" content="Scopri le proposte culinarie di Tenuta Leone: primi, secondi e dolci della tradizione campana. Menu personalizzati per matrimoni, comunioni e eventi a Salerno." />
        <meta name="keywords" content="menu matrimonio salerno, catering eventi campania, cucina campana, tenuta leone piatti, ristorazione matrimoni" />
        
        <meta property="og:title" content="I Piatti - Menu Tenuta Leone" />
        <meta property="og:description" content="Cucina tradizionale campana per matrimoni ed eventi esclusivi" />
        <meta property="og:image" content={`${BASE_URL}/img/piatti/p1.jpg`} />
        
        <link rel="canonical" href="https://tenutaleone.it/piatti" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="piatti-page" data-testid="piatti-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg_piatti.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <h1 className="page-title">I Piatti</h1>
              <p className="page-subtitle">Le nostre proposte 2025/2026</p>
              <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>I Piatti</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="piatti-intro">
          <div className="container">
            <div className="piatti-intro-content">
              <span className="subtitle">LA NOSTRA CUCINA</span>
              <h2 className="section-title">Tradizione campana, <span>passione autentica</span></h2>
              <p className="intro-text">
                Ogni piatto racconta il nostro territorio. Ingredienti di stagione, ricette tramandate 
                e la creatività dei nostri chef si fondono per creare un'esperienza gastronomica indimenticabile.
                Menu personalizzati per rendere il vostro evento unico.
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Gallery */}
        <section className="piatti-gallery-section">
          <div className="container">
            {/* Filter Buttons */}
            <div className="filter-buttons" data-testid="piatti-filters">
              <button 
                className={`filter-btn ${activeFilter === 'tutti' ? 'active' : ''}`}
                onClick={() => setActiveFilter('tutti')}
              >
                Tutti
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'primi' ? 'active' : ''}`}
                onClick={() => setActiveFilter('primi')}
              >
                I Primi
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'secondi' ? 'active' : ''}`}
                onClick={() => setActiveFilter('secondi')}
              >
                I Secondi
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'dolci' ? 'active' : ''}`}
                onClick={() => setActiveFilter('dolci')}
              >
                Il Dolce
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="piatti-grid" data-testid="piatti-grid">
              {filteredPiatti.map((piatto, index) => (
                <div 
                  key={index} 
                  className="piatto-card"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  data-testid={`piatto-${index}`}
                >
                  <LazyImage 
                    src={piatto.src} 
                    alt={`Piatto ${piatto.category} - Tenuta Leone`}
                  />
                  <div className="piatto-overlay">
                    <i className="fas fa-search-plus"></i>
                    <span>Clicca per ingrandire</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox */}
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={gallerySlides}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="piatti-cta cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/location_bg_2.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="piatti-cta-content">
              <span className="subtitle">CREA IL TUO MENU</span>
              <h2>Personalizziamo il menu per il tuo evento</h2>
              <p>
                Contattaci per una degustazione e creiamo insieme il menu perfetto 
                per il tuo matrimonio o evento speciale.
              </p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-primary" data-testid="piatti-contact-btn">
                  RICHIEDI UN PREVENTIVO
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/brigata" className="btn-outline">
                  CONOSCI I NOSTRI CHEF
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PiattiPage;
