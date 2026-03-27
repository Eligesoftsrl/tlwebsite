import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const MatrimoniPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Matrimoni d'Autore - Tenuta Leone",
    "description": "Location esclusiva per matrimoni a Salerno e in Campania. Dimora storica con regia millimetrica per il vostro banchetto nuziale.",
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
    "serviceType": "Wedding Venue"
  };

  return (
    <>
      <Helmet>
        <title>Matrimoni d'Autore in Dimora Storica a Salerno | Tenuta Leone</title>
        <meta name="description" content="Il vostro Sì nel cuore della Campania: tra eleganza secolare e regia millimetrica. Location esclusiva per matrimoni a Salerno, Napoli e Avellino." />
        <meta name="keywords" content="matrimoni salerno, location matrimoni campania, dimora storica matrimoni, banchetto nuziale salerno, wedding venue avellino" />
        
        <meta property="og:title" content="Matrimoni d'Autore in Dimora Storica a Salerno | Tenuta Leone" />
        <meta property="og:description" content="Il vostro Sì nel cuore della Campania: tra eleganza secolare e regia millimetrica." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_1.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/matrimoni-autore-salerno`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/matrimoni-autore-salerno" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="event-page" data-testid="matrimoni-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/slide/slide_1.jpg)' }}></div>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="container">
              <div className="page-hero-text-center">
                <span className="hero-label">MATRIMONI D'AUTORE</span>
                <h1 className="page-title">Matrimoni d'Autore in Dimora Storica a Salerno.</h1>
                <h2 className="page-subtitle-h2">Il vostro Sì nel cuore della Campania: tra eleganza secolare e regia millimetrica.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">MATRIMONI D'AUTORE</span>
                <h2>La Dimora dei vostri Sogni<br/><span className="highlight">a Salerno e in Campania</span></h2>
                <p className="lead-text">
                  Scegliere <strong>Tenuta Leone</strong> significa affidarsi a una Dimora Storica d'eccellenza. 
                  Grazie alla Direzione Tecnica di Luigi Ceruso e alla tradizione della Famiglia Stasi, 
                  trasformiamo il banchetto nuziale in un evento fluido e senza imprevisti.
                </p>
                <p>
                  Dal <strong>Rito Civile</strong> autentico nel parco secolare alla cena di gala nelle sale ottocentesche, 
                  ogni istante è coordinato con una regia invisibile e perfetta. Il vostro matrimonio a <strong>Salerno</strong>, 
                  <strong>Napoli</strong> o <strong>Avellino</strong> diventa un'esperienza indimenticabile.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/slide/slide_3.jpg" 
                    alt="Banchetto nuziale d'autore a Tenuta Leone - Dettaglio allestimento" 
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
              <h2>Pronto a firmare il vostro Sì d'Autore?</h2>
              <p>Richiedi una consulenza personalizzata per il vostro matrimonio</p>
              <Link to="/contatti" className="btn-outline" data-testid="matrimoni-cta">
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

export default MatrimoniPage;
