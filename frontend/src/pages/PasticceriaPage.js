import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BASE_URL = 'https://www.tenutaleone.it';

const pasticciere = {
  name: "Gelsomino Cuozzo",
  role: "Pastry Chef",
  image: "/img/brigata/p1.jpg",
  description: "Maestro pasticcere con anni di esperienza nel settore wedding. Firma dessert su misura per matrimoni ed eventi esclusivi; stagionalità, tecnica e senso estetico si fondono in dolci che emozionano al primo sguardo e al primo assaggio. Ogni creazione è un'opera d'arte pensata per rendere indimenticabile il vostro giorno speciale."
};

const dolciGallery = [
  "/img/piatti/p16.jpg",
  "/img/piatti/p17.jpg",
  "/img/piatti/p18.jpg"
];

const PasticceriaPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const gallerySlides = dolciGallery.map(src => ({ src }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pasticceria Tenuta Leone",
    "description": "Il laboratorio di pasticceria di Tenuta Leone per torte nuziali, dessert e dolci per matrimoni ed eventi a Salerno",
    "employee": [{
      "@type": "Person",
      "name": pasticciere.name,
      "jobTitle": pasticciere.role,
      "worksFor": {
        "@type": "FoodEstablishment",
        "name": "Tenuta Leone"
      }
    }]
  };

  return (
    <>
      <Helmet>
        <title>La Pasticceria - Torte Nuziali e Dessert | Tenuta Leone Salerno</title>
        <meta name="description" content="La pasticceria di Tenuta Leone: torte nuziali personalizzate, dessert artigianali e dolci per matrimoni ed eventi in Campania. Pastry Chef Gelsomino Cuozzo." />
        <meta name="keywords" content="torte nuziali salerno, pasticceria matrimonio campania, dessert eventi, wedding cake, dolci artigianali, tenuta leone pasticceria" />
        
        <meta property="og:title" content="La Pasticceria | Tenuta Leone" />
        <meta property="og:description" content="Torte nuziali e dessert artigianali per il tuo matrimonio" />
        <meta property="og:image" content={`${BASE_URL}/img/brigata/p1.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/pasticceria" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="pasticceria-page" data-testid="pasticceria-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg_pasticceria.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <h1 className="page-title">La Pasticceria</h1>
              <p className="page-subtitle">L'arte dolce di Tenuta Leone</p>
              <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Pasticceria</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Chef Section - Featured */}
        <section className="pasticceria-team">
          <div className="container">
            <div className="section-header centered">
              <span className="subtitle">IL NOSTRO MAESTRO PASTICCERE</span>
              <h2 className="section-title">L'arte della <span>dolcezza</span></h2>
            </div>

            <div className="featured-chef" data-testid="featured-chef">
              <div className="featured-chef-image">
                <LazyImage src={pasticciere.image} alt={pasticciere.name} />
                <div className="chef-badge">
                  <i className="fas fa-award"></i>
                  <span>Pastry Chef</span>
                </div>
              </div>
              <div className="featured-chef-content">
                <span className="chef-role">{pasticciere.role}</span>
                <h3 className="chef-name">{pasticciere.name}</h3>
                <p className="chef-description">{pasticciere.description}</p>
                <div className="chef-specialties">
                  <div className="specialty">
                    <i className="fas fa-cake-candles"></i>
                    <span>Torte Nuziali</span>
                  </div>
                  <div className="specialty">
                    <i className="fas fa-cookie"></i>
                    <span>Dessert Gourmet</span>
                  </div>
                  <div className="specialty">
                    <i className="fas fa-star"></i>
                    <span>Creazioni Esclusive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="pasticceria-gallery">
          <div className="container">
            <div className="section-header centered">
              <span className="subtitle">LE NOSTRE CREAZIONI</span>
              <h2 className="section-title">Dolci che <span>emozionano</span></h2>
            </div>

            <div className="dolci-grid">
              {dolciGallery.map((img, index) => (
                <div 
                  key={index} 
                  className="dolce-card" 
                  data-testid={`dolce-${index}`}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <LazyImage src={img} alt={`Dessert Tenuta Leone ${index + 1}`} />
                  <div className="dolce-overlay">
                    <i className="fas fa-search-plus"></i>
                    <span>Clicca per ingrandire</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={gallerySlides}
        />

        {/* Services */}
        <section className="pasticceria-services">
          <div className="container">
            <div className="services-grid-3">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-cake-candles"></i>
                </div>
                <h3>Torte Nuziali</h3>
                <p>Design personalizzato per la vostra torta dei sogni, dalle classiche alle più moderne creazioni</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-cookie"></i>
                </div>
                <h3>Sweet Table</h3>
                <p>Allestimenti dolci scenografici con mini dessert, macarons, cake pops e confettata</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-ice-cream"></i>
                </div>
                <h3>Dessert al Piatto</h3>
                <p>Creazioni gourmet servite al tavolo per un finale memorabile del vostro banchetto</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pasticceria-cta cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/gallery_bg_2.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Progettiamo insieme il vostro dessert</h2>
              <p>Contattateci per una consulenza personalizzata sulla vostra torta nuziale e sweet table.</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-primary" data-testid="pasticceria-contact-btn">
                  RICHIEDI UN PREVENTIVO
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/piatti" className="btn-outline">
                  SCOPRI IL MENU
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

export default PasticceriaPage;
