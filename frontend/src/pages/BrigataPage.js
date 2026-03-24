import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { brigata } from '../data/siteData';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const BrigataPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brigata di Cucina - Tenuta Leone",
    "description": "Il team di chef professionisti di Tenuta Leone che cura la cucina per matrimoni ed eventi a Salerno",
    "employee": brigata.map(chef => ({
      "@type": "Person",
      "name": chef.name,
      "jobTitle": chef.role,
      "worksFor": {
        "@type": "FoodEstablishment",
        "name": "Tenuta Leone"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>La Brigata - I Nostri Chef | Tenuta Leone Salerno</title>
        <meta name="description" content="Scopri il team di chef di Tenuta Leone: Executive Chef, Sous Chef e Chef de Partie. Tradizione campana e innovazione culinaria per matrimoni ed eventi a Salerno." />
        <meta name="keywords" content="chef matrimonio salerno, brigata cucina, executive chef, tenuta leone, catering eventi campania" />
        
        <meta property="og:title" content="La Brigata - I Nostri Chef | Tenuta Leone" />
        <meta property="og:description" content="Tradizione e innovazione: il team di chef che rende speciale ogni evento" />
        <meta property="og:image" content={`${BASE_URL}/img/brigata/c1.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/brigata" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="brigata-page" data-testid="brigata-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg_cucina.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <h1 className="page-title">La Brigata</h1>
              <p className="page-subtitle">I nostri Chef</p>
              <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>La Brigata</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="brigata-section">
          <div className="container">
            <div className="brigata-layout">
              {/* Left Column - First 2 chefs */}
              <div className="brigata-column">
                {brigata.slice(0, 2).map((chef, index) => (
                  <div key={index} className="chef-card" data-testid={`chef-${index}`}>
                    <div className="chef-image">
                      <LazyImage src={chef.image} alt={chef.name} />
                    </div>
                    <div className="chef-info">
                      <h3 className="chef-name">{chef.name}</h3>
                      <p className="chef-role">{chef.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Column - Text */}
              <div className="brigata-center">
                <div className="brigata-content">
                  <span className="subtitle">LA NOSTRA CUCINA</span>
                  <h2 className="section-title">Tradizione & <span>Innovazione</span></h2>
                  <p className="brigata-text">
                    A Tenuta Leone ogni piatto nasce da un lavoro di squadra: lo Chef firma i menù 
                    e guida la visione culinaria, il Sous Chef coordina tempi e qualità in ogni servizio, 
                    gli Chef de Partie presidiano i reparti — antipasti, primi e secondi — con precisione artigianale.
                  </p>
                  <p className="brigata-text">
                    Tradizione campana, ingredienti di stagione e cura del dettaglio danno vita a menù 
                    personalizzati per eventi e matrimoni indimenticabili.
                  </p>
                  
                  <div className="brigata-features">
                    <div className="feature-item">
                      <i className="fas fa-leaf"></i>
                      <span>Ingredienti locali</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-utensils"></i>
                      <span>Ricette tradizionali</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-heart"></i>
                      <span>Passione artigianale</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Last chef + team photo */}
              <div className="brigata-column">
                {brigata.slice(2).map((chef, index) => (
                  <div key={index} className="chef-card" data-testid={`chef-${index + 2}`}>
                    <div className="chef-image">
                      <LazyImage src={chef.image} alt={chef.name} />
                    </div>
                    <div className="chef-info">
                      <h3 className="chef-name">{chef.name}</h3>
                      <p className="chef-role">{chef.role}</p>
                    </div>
                  </div>
                ))}
                <div className="chef-card team-card">
                  <div className="chef-image">
                    <LazyImage src="/img/brigata/c5.jpg" alt="Team Chef Tenuta Leone" />
                  </div>
                  <div className="chef-info">
                    <h3 className="chef-name">La Squadra</h3>
                    <p className="chef-role">La nostra forza in cucina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <div className="container">
            <div className="philosophy-grid">
              <div className="philosophy-image">
                <LazyImage src="/img/piatti/p1.jpg" alt="Piatto Tenuta Leone" />
              </div>
              <div className="philosophy-content">
                <span className="subtitle">LA NOSTRA FILOSOFIA</span>
                <h2 className="section-title">Ogni piatto è <span>un'emozione</span></h2>
                <p>
                  Crediamo che il cibo sia molto più di un semplice nutrimento: è memoria, 
                  è territorio, è condivisione. Per questo ogni menu viene studiato con cura, 
                  rispettando le tradizioni ma con uno sguardo all'innovazione.
                </p>
                <ul className="philosophy-list">
                  <li>
                    <i className="fas fa-check"></i>
                    Prodotti a km zero dai migliori produttori locali
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Menu personalizzati per ogni esigenza
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Attenzione alle intolleranze e allergie
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Degustazione pre-evento inclusa
                  </li>
                </ul>
                <Link to="/piatti" className="btn-primary" data-testid="brigata-piatti-btn">
                  SCOPRI I NOSTRI PIATTI
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="brigata-cta cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/package_bg_1.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="brigata-cta-content">
              <h2>Vuoi provare la nostra cucina?</h2>
              <p>Prenota una degustazione e lasciati conquistare dai nostri sapori.</p>
              <Link to="/contatti" className="btn-primary" data-testid="brigata-contact-btn">
                PRENOTA UNA DEGUSTAZIONE
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BrigataPage;
