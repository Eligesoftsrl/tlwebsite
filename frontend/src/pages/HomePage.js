import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/HeroSlider';
import BookingForm from '../components/BookingForm';
import SpacesSlider from '../components/SpacesSlider';
import ServicesSection from '../components/ServicesSection';
import GoogleReviews from '../components/GoogleReviews';
import InstagramFeed from '../components/InstagramFeed';
import FAQSection from '../components/FAQSection';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const HomePage = () => {
  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Tenuta Leone",
    "alternateName": "Location Matrimoni Salerno",
    "description": "Tenuta Leone è una dimora storica a Calvanico (Salerno) che offre location esclusiva per matrimoni, eventi, comunioni e ricevimenti in Campania. Tour virtuali 360°, piscina panoramica, cucina gourmet.",
    "url": BASE_URL,
    "telephone": "+39089957360",
    "email": "info@tenutaleone.it",
    "image": [
      `${BASE_URL}/img/slide/slide_1.jpg`,
      `${BASE_URL}/img/slide/slide_2.jpg`,
      `${BASE_URL}/img/slide/slide_3.jpg`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Roma, 19",
      "addressLocality": "Calvanico",
      "addressRegion": "Campania",
      "postalCode": "84080",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.776270",
      "longitude": "14.829491"
    },
    "priceRange": "$$$$",
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Piscina Panoramica", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Cappella Privata", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Parcheggio Gratuito", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "WiFi Gratuito", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Ludoteca", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Suite Sposi", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Tour Virtuale 360°", "value": true}
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "156",
      "ratingCount": "156"
    },
    "areaServed": [
      {"@type": "City", "name": "Salerno"},
      {"@type": "State", "name": "Campania"},
      {"@type": "City", "name": "Napoli"},
      {"@type": "City", "name": "Avellino"},
      {"@type": "City", "name": "Benevento"},
      {"@type": "City", "name": "Caserta"}
    ],
    "knowsAbout": [
      "Matrimoni",
      "Wedding Venue",
      "Eventi",
      "Ricevimenti",
      "Comunioni",
      "Battesimi",
      "Dimore Storiche",
      "Location Eventi Campania"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Eventi",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Matrimoni"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Comunioni"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Battesimi"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Eventi Aziendali"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Ricevimenti Privati"}}
      ]
    },
    "sameAs": [
      "https://www.facebook.com/MatrimonioSalerno",
      "https://www.instagram.com/tenutaleone"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tenuta Leone - Location Matrimoni ed Eventi | Dimora Storica Salerno Campania</title>
        <meta name="description" content="Tenuta Leone: dimora storica per matrimoni, eventi e ricevimenti a Calvanico (Salerno). Tour virtuali 360°, piscina panoramica, cucina campana. La location perfetta per il tuo evento in Campania." />
        <meta name="keywords" content="matrimoni salerno, location matrimoni campania, villa matrimoni salerno, eventi salerno, dimora storica campania, ricevimenti salerno, wedding venue italy, location eventi campania, tenuta leone, matrimonio campania" />
        
        <meta property="og:title" content="Tenuta Leone - Location Matrimoni Salerno | Dimora Storica Campania" />
        <meta property="og:description" content="La location perfetta per il tuo matrimonio in Campania. Tour virtuali 360°, piscina panoramica, cucina d'eccellenza." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_1.jpg`} />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tenuta Leone - Location Matrimoni Campania" />
        <meta name="twitter:description" content="Dimora storica per matrimoni ed eventi esclusivi a Salerno" />
        
        <link rel="canonical" href="https://www.tenutaleone.it/" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="home-page" data-testid="home-page">
        {/* Hero Section */}
        <HeroSlider />

        {/* Booking Form */}
        <section className="booking-section">
          <div className="container">
            <BookingForm />
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about" data-testid="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-images">
                <div className="about-img-main">
                  <LazyImage src="/img/normal/about_5.jpg" alt="Tenuta Leone - Dimora storica per matrimoni Salerno" />
                </div>
                <div className="about-award">
                  <img src="/img/normal/awards.jpg" alt="Riconoscimenti Tenuta Leone" />
                </div>
              </div>

              <div className="about-content">
                <span className="subtitle">Orocifrado Group</span>
                <h2 className="section-title">Benvenuti a Tenuta Leone</h2>
                <p className="about-text">
                  Una dimora storica nel cuore della <strong>Campania</strong>, a pochi minuti da <strong>Salerno</strong>. 
                  Con una solida tradizione nella ristorazione, la famiglia Stasi porta passione e cura in ogni dettaglio.
                </p>
                <p className="about-text">
                  La location ideale per <strong>matrimoni</strong>, comunioni, battesimi e <strong>eventi</strong> esclusivi. 
                  Attraverso le nostre due location d'eccellenza – Tenuta Leone e Villa Vittoria – offriamo 
                  accoglienza autentica, eleganza e un servizio impeccabile.
                </p>
                <p className="about-text">
                  Scegliere Orocifrado significa vivere un'esperienza curata con amore, raffinatezza e dedizione 
                  nel cuore delle <strong>dimore storiche campane</strong>.
                </p>

                <div className="about-buttons">
                  <Link to="/tour" className="btn-primary" data-testid="about-tour-btn">
                    TOUR VIRTUALE 360°
                    <i className="fas fa-vr-cardboard"></i>
                  </Link>
                  <Link to="/piatti" className="btn-outline" data-testid="about-piatti-btn">
                    I NOSTRI PIATTI
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spaces Slider - Auto-scroll */}
        <SpacesSlider />

        {/* Services Section */}
        <ServicesSection />

        {/* Marquee */}
        <section className="marquee-section">
          <div className="marquee">
            <div className="marquee-content">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="marquee-item">
                  <i className="fas fa-gem"></i>
                  Matrimoni Salerno
                  <i className="fas fa-gem"></i>
                  Eventi Campania
                  <i className="fas fa-gem"></i>
                  Dimore Storiche
                  <i className="fas fa-gem"></i>
                  Comunioni
                  <i className="fas fa-gem"></i>
                  Battesimi
                  <i className="fas fa-gem"></i>
                  Ricevimenti
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <GoogleReviews limit={4} />

        {/* Instagram Feed */}
        <InstagramFeed />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section - Premium Design 2026 */}
        <section className="cta-premium" data-testid="cta-section">
          <div className="cta-premium-bg">
            <img src="/img/slide/slide_2.jpg" alt="" aria-hidden="true" />
          </div>
          <div className="cta-premium-overlay"></div>
          <div className="container">
            <div className="cta-premium-content">
              <div className="cta-premium-badge">
                <i className="fas fa-heart"></i>
                <span>Il tuo giorno speciale</span>
              </div>
              <h2 className="cta-premium-title">
                Realizziamo insieme<br />
                <span className="highlight">il tuo sogno</span>
              </h2>
              <p className="cta-premium-text">
                Contattaci per un appuntamento e scopri come possiamo rendere il tuo evento indimenticabile. 
                La location perfetta per <strong>matrimoni in Campania</strong> ti aspetta.
              </p>
              <div className="cta-premium-actions">
                <Link to="/contatti" className="btn-cta-primary" data-testid="cta-contact-btn">
                  <span>Richiedi Informazioni</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <a 
                  href={`https://wa.me/393452294361?text=${encodeURIComponent('Ciao! Vorrei informazioni sulla vostra location per eventi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Scrivici su WhatsApp</span>
                </a>
              </div>
              <div className="cta-premium-features">
                <div className="cta-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Preventivo gratuito</span>
                </div>
                <div className="cta-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Visita personalizzata</span>
                </div>
                <div className="cta-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Consulenza dedicata</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
