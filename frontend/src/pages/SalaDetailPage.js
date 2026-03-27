import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { spaces, siteConfig } from '../data/siteData';
import LazyImage from '../components/LazyImage';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BASE_URL = 'https://www.tenutaleone.it';

const SalaDetailPage = () => {
  const { slug } = useParams();
  const sala = spaces.find(s => s.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Get related rooms (exclude current)
  const relatedRooms = spaces.filter(s => s.slug !== slug).slice(0, 3);
  
  // Gallery images for the sala - use sala.gallery if available
  const galleryImages = sala?.gallery 
    ? sala.gallery.map(src => ({ src }))
    : sala ? [{ src: sala.image }] : [];

  if (!sala) {
    return (
      <main className="sala-page not-found">
        <div className="container">
          <h1>Sala non trovata</h1>
          <Link to="/tour" className="btn-primary">Torna alla Dimora</Link>
        </div>
      </main>
    );
  }

  // Schema.org structured data for the room
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Room",
    "name": sala.name,
    "description": sala.description,
    "image": `${BASE_URL}${sala.image}`,
    "containedInPlace": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "image": `${BASE_URL}/img/slide/slide_1.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.province,
        "postalCode": siteConfig.address.zip,
        "addressCountry": "IT"
      }
    },
    "amenityFeature": sala.has360 ? {
      "@type": "LocationFeatureSpecification",
      "name": "Tour Virtuale 360°",
      "value": true
    } : undefined
  };

  return (
    <>
      <Helmet>
        <title>{`${sala.name || 'Sala'} - Tour Virtuale 360° | Tenuta Leone Salerno`}</title>
        <meta name="description" content={`${sala.headline || ''}. ${sala.description || ''} Esplora il tour virtuale 360° di ${sala.name || 'questa sala'} a Tenuta Leone, location matrimoni a Calvanico (Salerno).`} />
        <meta name="keywords" content={`${sala.name || 'sala'}, tour virtuale 360, tenuta leone, matrimoni salerno, location eventi campania, ${sala.slug || ''}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${sala.name || 'Sala'} - Tour 360° | Tenuta Leone`} />
        <meta property="og:description" content={sala.description || ''} />
        <meta property="og:image" content={`${BASE_URL}${sala.image || ''}`} />
        <meta property="og:type" content="place" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${sala.name || 'Sala'} - Tour Virtuale 360°`} />
        
        <link rel="canonical" href={`https://www.tenutaleone.it/sala/${sala.slug || ''}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="sala-page" data-testid="sala-detail-page">
        {/* Hero */}
        <section className="sala-hero" style={{ backgroundImage: `url(${sala.image})` }}>
          <div className="sala-hero-overlay"></div>
          <div className="container">
            <div className="sala-hero-content">
              <span className="sala-label">LA DIMORA STORICA</span>
              <h1 className="sala-title" data-testid="sala-title">{sala.name}</h1>
              <p className="sala-headline">{sala.headline}</p>
              <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/tour">La Dimora</Link>
                <span>/</span>
                <span>{sala.name}</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Tour Virtuale 360° - In evidenza */}
        {sala.has360 && sala.kuulaEmbed && (
          <section className="tour-360-section" data-testid="tour-360-section">
            <div className="container">
              <div className="tour-360-header">
                <div className="tour-360-badge">
                  <i className="fas fa-vr-cardboard"></i>
                  <span>ESPERIENZA IMMERSIVA</span>
                </div>
                <h2 className="section-title">
                  Tour Virtuale <span>360°</span>
                </h2>
                <p className="tour-360-intro">
                  Esplora {sala.name} come se fossi qui. Ruota, zooma e scopri ogni angolo 
                  di questo spazio unico. Usa il mouse o tocca lo schermo per navigare.
                </p>
              </div>
              
              <div className="tour-360-container" data-testid="kuula-embed">
                <iframe
                  src={sala.kuulaEmbed}
                  width="100%"
                  height="640"
                  frameBorder="0"
                  allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                  allowFullScreen
                  scrolling="no"
                  title={`Tour virtuale 360° di ${sala.name}`}
                  loading="lazy"
                ></iframe>
              </div>

              <div className="tour-360-features">
                <div className="feature-item">
                  <i className="fas fa-arrows-rotate"></i>
                  <span>Ruota a 360°</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-search-plus"></i>
                  <span>Zoom dettagli</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Mobile friendly</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-vr-cardboard"></i>
                  <span>VR compatibile</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Description Section */}
        <section className="sala-description">
          <div className="container">
            <div className="sala-description-grid">
              <div className="sala-description-content">
                <span className="subtitle">SCOPRI LO SPAZIO</span>
                <h2 className="section-title">{sala.headline}</h2>
                <p className="description-text">{sala.description}</p>
                
                <div className="sala-features">
                  <div className="feature">
                    <i className="fas fa-gem"></i>
                    <span>Ambiente storico</span>
                  </div>
                  <div className="feature">
                    <i className="fas fa-camera"></i>
                    <span>Scenografico per foto</span>
                  </div>
                  <div className="feature">
                    <i className="fas fa-heart"></i>
                    <span>Atmosfera unica</span>
                  </div>
                </div>

                <div className="sala-cta">
                  <Link to="/contatti" className="btn-primary" data-testid="sala-contact-btn">
                    PRENOTA UNA VISITA
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Ciao! Vorrei informazioni su ${sala.name} per il mio evento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    data-testid="sala-whatsapp-btn"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Contattaci su WhatsApp
                  </a>
                </div>
              </div>

              <div className="sala-description-image">
                <div 
                  className="gallery-image-clickable"
                  onClick={() => {
                    setLightboxIndex(0);
                    setLightboxOpen(true);
                  }}
                  style={{ cursor: 'zoom-in' }}
                >
                  <LazyImage 
                    src={sala.image} 
                    alt={sala.name}
                    className="main-image"
                  />
                  <div className="zoom-hint">
                    <i className="fas fa-search-plus"></i>
                    <span>Clicca per ingrandire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={galleryImages}
        />

        {/* Photo Gallery */}
        {sala.gallery && sala.gallery.length > 1 && (
          <section className="sala-gallery" data-testid="sala-gallery">
            <div className="container">
              <div className="section-header">
                <span className="subtitle">GALLERIA FOTOGRAFICA</span>
                <h2 className="section-title">Scopri <span>{sala.name}</span></h2>
              </div>
              <div className="gallery-grid">
                {sala.gallery.map((img, index) => (
                  <div 
                    key={index}
                    className="gallery-item"
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                    data-testid={`gallery-item-${index}`}
                  >
                    <LazyImage src={img} alt={`${sala.name} - Foto ${index + 1}`} />
                    <div className="gallery-item-overlay">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Rooms */}
        <section className="related-rooms">
          <div className="container">
            <div className="section-header">
              <span className="subtitle">CONTINUA L'ESPLORAZIONE</span>
              <h2 className="section-title">Altre sale della <span>dimora</span></h2>
            </div>

            <div className="related-grid">
              {relatedRooms.map((room) => (
                <Link 
                  to={`/sala/${room.slug}`} 
                  key={room.slug}
                  className="related-card"
                  data-testid={`related-${room.slug}`}
                >
                  <div className="related-image">
                    <LazyImage src={room.image} alt={room.name} />
                    {room.has360 && (
                      <div className="badge-360">
                        <i className="fas fa-vr-cardboard"></i>
                        360°
                      </div>
                    )}
                    <div className="related-overlay"></div>
                  </div>
                  <div className="related-content">
                    <h3>{room.name}</h3>
                    <p>{room.headline}</p>
                    <span className="explore-link">
                      Esplora <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="view-all-cta">
              <Link to="/tour" className="btn-outline" data-testid="view-all-rooms-btn">
                VEDI TUTTE LE SALE
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SalaDetailPage;
