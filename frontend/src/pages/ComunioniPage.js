import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const ComunioniPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comunioni e Battesimi - Tenuta Leone",
    "description": "Location esclusiva per comunioni e battesimi in Campania. Dimora storica con ampi spazi verdi e sale ariose.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "image": `${BASE_URL}/img/slide/slide_2.jpg`,
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
    "serviceType": "Event Venue"
  };

  return (
    <>
      <Helmet>
        <title>Comunioni e Battesimi d'Eccellenza in Campania | Tenuta Leone</title>
        <meta name="description" content="Lo scenario ideale per i traguardi più preziosi della vostra famiglia. Location per comunioni e battesimi a Salerno e Avellino." />
        <meta name="keywords" content="comunioni salerno, battesimi campania, location comunione avellino, ricevimento battesimo, eventi famiglia salerno" />
        
        <meta property="og:title" content="Comunioni e Battesimi d'Eccellenza in Campania | Tenuta Leone" />
        <meta property="og:description" content="Lo scenario ideale per i traguardi più preziosi della vostra famiglia." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_2.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/comunioni-battesimi-campania`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/comunioni-battesimi-campania" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="event-page" data-testid="comunioni-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/slide/slide_2.jpg)' }}></div>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="container">
              <div className="page-hero-text-center">
                <span className="hero-label">COMUNIONI E BATTESIMI</span>
                <h1 className="page-title">Comunioni e Battesimi d'Eccellenza in Campania.</h1>
                <h2 className="page-subtitle-h2">Lo scenario ideale per i traguardi più preziosi della vostra famiglia.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">COMUNIONI E BATTESIMI</span>
                <h2>I Traguardi della Famiglia<br/><span className="highlight">in uno Scenario d'Eccellenza</span></h2>
                <p className="lead-text">
                  Le ricorrenze familiari meritano il prestigio di una Tenuta storica. A <strong>Tenuta Leone</strong> progettiamo 
                  comunioni e battesimi unendo l'alta cucina del territorio alla sicurezza di ampi spazi verdi e sale ariose.
                </p>
                <p>
                  Siamo il punto di riferimento per le famiglie di <strong>Salerno</strong> e <strong>Avellino</strong> che cercano 
                  una location raffinata, capace di gestire con professionalità ogni dettaglio, dall'animazione per i piccoli 
                  al menù gourmet.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/eventi/piscina-tenuta.jpg" 
                    alt="Piscina panoramica Tenuta Leone per comunioni e battesimi in Campania" 
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
              <h2>Un traguardo speciale merita uno scenario speciale</h2>
              <p>Richiedi una consulenza per la comunione o il battesimo</p>
              <Link to="/contatti" className="btn-outline" data-testid="comunioni-cta">
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

export default ComunioniPage;
