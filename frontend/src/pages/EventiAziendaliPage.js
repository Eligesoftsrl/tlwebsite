import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const EventiAziendaliPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Eventi Aziendali e Gala - Tenuta Leone",
    "description": "Location esclusiva per meeting, congressi e cene di gala a Salerno. Dimora storica con tecnologie all'avanguardia.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "image": `${BASE_URL}/img/slide/slide_1.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Roma, 19",
        "addressLocality": "Calvanico",
        "addressRegion": "SA",
        "postalCode": "84080",
        "addressCountry": "IT"
      }
    },
    "areaServed": ["Salerno", "Napoli", "Avellino", "Campania"],
    "serviceType": "Corporate Event Venue"
  };

  return (
    <>
      <Helmet>
        <title>Location per Eventi Aziendali e Meeting a Salerno | Tenuta Leone</title>
        <meta name="description" content="Prestigio, Logistica e Strategia: il palcoscenico per il tuo Business. Meeting, congressi e cene di gala vicino all'uscita A3 Fisciano." />
        <meta name="keywords" content="eventi aziendali salerno, meeting campania, location congressi avellino, cena gala aziendale, corporate event salerno" />
        
        <meta property="og:title" content="Location per Eventi Aziendali e Meeting a Salerno | Tenuta Leone" />
        <meta property="og:description" content="Prestigio, Logistica e Strategia: il palcoscenico per il tuo Business." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_1.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/eventi-aziendali-salerno`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/eventi-aziendali-salerno" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="event-page" data-testid="eventi-aziendali-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/slide/slide_1.jpg)' }}></div>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="container">
              <div className="page-hero-text-center">
                <span className="hero-label">EVENTI AZIENDALI E GALA</span>
                <h1 className="page-title">Location per Eventi Aziendali e Meeting a Salerno.</h1>
                <h2 className="page-subtitle-h2">Prestigio, Logistica e Strategia: il palcoscenico per il tuo Business.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">EVENTI AZIENDALI E GALA</span>
                <h2>Il Palcoscenico del Business<br/><span className="highlight">nel cuore della Campania</span></h2>
                <p className="lead-text">
                  <strong>Tenuta Leone</strong> è la scelta d'élite per meeting, congressi e cene di gala vicino all'uscita 
                  autostradale di Fisciano (A3). Garantiamo riservatezza, parcheggio privato e tecnologie all'avanguardia.
                </p>
                <p>
                  Dalla colazione di lavoro al dinner di rappresentanza, la nostra regia tecnica assicura il rispetto 
                  rigoroso dei tempi aziendali e un'immagine di alto profilo per la vostra azienda a <strong>Salerno</strong>, 
                  <strong>Napoli</strong> e <strong>Avellino</strong>.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/slide/slide_1.jpg" 
                    alt="Allestimento sala meeting prestigiosa a Tenuta Leone" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/normal/about_5.jpg)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Il palcoscenico perfetto per il vostro Business</h2>
              <p>Richiedi una consulenza per il vostro evento aziendale</p>
              <Link to="/contatti" className="btn-outline" data-testid="eventi-aziendali-cta">
                Richiedi Informazioni
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventiAziendaliPage;
