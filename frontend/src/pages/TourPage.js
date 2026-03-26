import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { spaces, siteConfig } from '../data/siteData';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const TourPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sale della Dimora Storica - Tenuta Leone",
    "description": "Esplora le sale storiche di Tenuta Leone con tour virtuali 360°. Location esclusiva per matrimoni a Calvanico, Salerno.",
    "numberOfItems": spaces.length,
    "itemListElement": spaces.map((space, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Room",
        "name": space.name,
        "description": space.description,
        "image": `${BASE_URL}${space.image}`,
        "url": `${BASE_URL}/sala/${space.slug}`,
        "amenityFeature": space.has360 ? {
          "@type": "LocationFeatureSpecification",
          "name": "Tour Virtuale 360°",
          "value": true
        } : undefined
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>La Dimora Storica - Tour Virtuali 360° | Tenuta Leone Salerno</title>
        <meta name="description" content="Esplora le sale storiche di Tenuta Leone con tour virtuali 360°. Cappella, sale affrescate, bottaia e spazi esterni. Location matrimoni ed eventi a Calvanico, Salerno." />
        <meta name="keywords" content="tour virtuale 360, location matrimoni salerno, dimora storica campania, sale eventi, tenuta leone tour, villa matrimoni" />
        
        <meta property="og:title" content="La Dimora Storica - Tour 360° | Tenuta Leone" />
        <meta property="og:description" content="Esplora ogni angolo della nostra dimora con i tour virtuali 360°" />
        <meta property="og:image" content={`${BASE_URL}/img/tenuta_antica/antica_8.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/tour" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="tour-page" data-testid="tour-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/tenuta_antica/antica_8.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <div className="hero-badge">
                <i className="fas fa-vr-cardboard"></i>
                TOUR VIRTUALI 360°
              </div>
              <h1 className="page-title">La Dimora Storica di Tenuta Leone</h1>
              <p className="page-subtitle">Esplora ogni angolo come se fossi qui</p>
              <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>La Dimora</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="tour-intro">
          <div className="container">
            <div className="tour-intro-content">
              <span className="subtitle">SCOPRI OGNI ANGOLO</span>
              <h2 className="section-title">Un viaggio attraverso <span>la storia</span></h2>
              <p className="intro-text">
                Ogni spazio della nostra dimora racconta secoli di storia e tradizione.
                Scopri gli ambienti dove il vostro evento prenderà vita grazie ai nostri 
                <strong> tour virtuali 360°</strong>: affreschi antichi, architetture suggestive 
                e atmosfere uniche ti aspettano.
              </p>
              <div className="tour-stats">
                <div className="stat-item">
                  <span className="stat-number">{spaces.length}</span>
                  <span className="stat-label">Sale uniche</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{spaces.filter(s => s.has360).length}</span>
                  <span className="stat-label">Tour 360°</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Emozioni</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spaces Grid */}
        <section className="tour-grid-section">
          <div className="container">
            <div className="tour-grid">
              {spaces.map((space, index) => (
                <Link 
                  to={`/sala/${space.slug}`} 
                  key={space.slug}
                  className={`tour-card ${index === 0 ? 'featured' : ''}`}
                  data-testid={`tour-space-${space.slug}`}
                >
                  <div className="tour-card-image">
                    <LazyImage src={space.image} alt={space.name} />
                    {space.has360 && (
                      <div className="badge-360">
                        <i className="fas fa-vr-cardboard"></i>
                        <span>360°</span>
                      </div>
                    )}
                    <div className="tour-card-overlay"></div>
                  </div>
                  <div className="tour-card-content">
                    <span className="tour-card-label">LA DIMORA STORICA</span>
                    <h3 className="tour-card-title">{space.name}</h3>
                    <p className="tour-card-headline">{space.headline}</p>
                    <span className="tour-card-cta">
                      {space.has360 ? 'Esplora in 360°' : 'Scopri di più'}
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="tour-cta cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/location_bg_1.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="tour-cta-content">
              <i className="fas fa-calendar-check cta-icon"></i>
              <h2>Vuoi vedere la dimora di persona?</h2>
              <p>Prenota una visita guidata e lasciati incantare dalla bellezza dei nostri spazi.</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-primary" data-testid="tour-contact-btn">
                  PRENOTA UNA VISITA
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Ciao! Vorrei prenotare una visita alla dimora.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-outline"
                >
                  <i className="fab fa-whatsapp"></i>
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TourPage;
