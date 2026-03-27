import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const FestePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Feste di Laurea e Compleanni - Tenuta Leone",
    "description": "Location esclusiva per feste di laurea, 18esimi e anniversari a Salerno. Dimora storica con atmosfera glamour.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "image": `${BASE_URL}/img/slide/slide_3.jpg`,
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
        <title>Feste di Laurea e Compleanni d'Autore a Salerno | Tenuta Leone</title>
        <meta name="description" content="Trasforma il tuo traguardo in un evento leggendario nella nostra Dimora Storica. Feste di laurea, 18esimi e anniversari tra Salerno e Avellino." />
        <meta name="keywords" content="festa laurea salerno, diciottesimo avellino, anniversario campania, party esclusivo salerno, location feste private" />
        
        <meta property="og:title" content="Feste di Laurea e Compleanni d'Autore a Salerno | Tenuta Leone" />
        <meta property="og:description" content="Trasforma il tuo traguardo in un evento leggendario nella nostra Dimora Storica." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_3.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/feste-laurea-salerno`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/feste-laurea-salerno" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="event-page" data-testid="feste-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/slide/slide_3.jpg)' }}></div>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="container">
              <div className="page-hero-text-center">
                <span className="hero-label">FESTE E RICORRENZE</span>
                <h1 className="page-title">Feste di Laurea e Compleanni d'Autore a Salerno.</h1>
                <h2 className="page-subtitle-h2">Trasforma il tuo traguardo in un evento leggendario nella nostra Dimora Storica.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">FESTE E RICORRENZE</span>
                <h2>Il Palcoscenico dei tuoi Traguardi<br/><span className="highlight">tra Salerno e Avellino</span></h2>
                <p className="lead-text">
                  Dimentica le solite sale feste. Per il tuo diciottesimo, la tua festa di laurea o un anniversario speciale, 
                  <strong>Tenuta Leone</strong> offre un'atmosfera glamour tra <strong>Salerno</strong> e <strong>Avellino</strong>.
                </p>
                <p>
                  Luci scenografiche, cocktail bar d'autore e la versatilità del porticato illuminato per party privati 
                  esclusivi firmati con uno stile inconfondibile nel cuore della <strong>Campania</strong>.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/slide/slide_3.jpg" 
                    alt="Party esclusivo nel porticato illuminato di Tenuta Leone" 
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
              <h2>Il tuo traguardo merita un palcoscenico d'eccezione</h2>
              <p>Richiedi una consulenza per la tua festa esclusiva</p>
              <Link to="/contatti" className="btn-outline" data-testid="feste-cta">
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

export default FestePage;
