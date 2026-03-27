import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { piatti } from '../data/siteData';
import LazyImage from '../components/LazyImage';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BASE_URL = 'https://www.tenutaleone.it';

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

  const categoryAltTexts = {
    primi: "Primo piatto gourmet Tenuta Leone - Eccellenza gastronomica Salerno",
    secondi: "Alta cucina per matrimoni in Dimora Storica - Famiglia Stasi",
    dolci: "Dettaglio allestimento buffet dolci d'autore Campania"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu Tenuta Leone - L'Esperienza Gastronomica",
    "description": "Cucina d'eccellenza con materie prime selezionate dai migliori produttori locali di Salerno, Napoli e Avellino. Menu personalizzati per matrimoni ed eventi.",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Gli Antipasti: Sinfonie di Benvenuto",
        "description": "Crudi di mare finissimi, tempure croccanti e selezioni di latticini DOP campani"
      },
      {
        "@type": "MenuSection", 
        "name": "I Primi: Il Culto della Tradizione Evoluta",
        "description": "Risotti mantecati a regola d'arte e formati della tradizione rivisitati dalla nostra Brigata"
      },
      {
        "@type": "MenuSection",
        "name": "I Secondi e i Dessert: L'Apoteosi del Sapore",
        "description": "Cotture lente per le carni, scottature veloci per il pesce e pasticceria interna d'autore"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>L'Arte nel Piatto | Gallery Gastronomica | Tenuta Leone Salerno</title>
        <meta name="description" content="L'Esperienza Gastronomica firmata dalla Famiglia Stasi. Materie prime d'eccellenza da Salerno, Napoli e Avellino. Menu personalizzati per matrimoni e eventi in Campania." />
        <meta name="keywords" content="menu matrimonio salerno, alta cucina campania, antipasti gourmet, primi piatti matrimoni, pasticceria interna, banqueting eccellenza, cucina espressa salerno" />
        
        <meta property="og:title" content="L'Arte nel Piatto | Gallery Gastronomica | Tenuta Leone" />
        <meta property="og:description" content="Dove la Tradizione Campana incontra l'Alta Cucina Contemporanea." />
        <meta property="og:image" content={`${BASE_URL}/img/piatti/p1.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/piatti" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="piatti-page direzione-page" data-testid="piatti-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg_piatti.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">L'ARTE NEL PIATTO</span>
              <h1 className="page-title">L'Esperienza Gastronomica: La Nostra Firma d'Autore.</h1>
              <p className="page-subtitle">Dove la Tradizione Campana incontra l'Alta Cucina Contemporanea.</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Il Manifesto del Gusto */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">IL MANIFESTO DEL GUSTO</span>
                <h2>L'Essenza della nostra<br/><span className="highlight">Ospitalità</span></h2>
                <p className="lead-text">
                  Ogni portata a Tenuta Leone è il racconto di un territorio generoso e di una passione 
                  di famiglia che si tramanda intatta. La nostra cucina non accetta compromessi: utilizziamo 
                  esclusivamente materie prime d'eccellenza, selezionate dai migliori produttori locali di 
                  <strong>Salerno</strong>, <strong>Napoli</strong> e <strong>Avellino</strong>.
                </p>
                <p>
                  Dalla pasta trafilata al bronzo al pescato freschissimo del nostro mare, fino alle carni 
                  pregiate e alle verdure di stagione, ogni ingrediente è lavorato con rispetto e maestria 
                  per garantirvi un banchetto nuziale o un evento privato dal sapore indimenticabile.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/piatti/p1.jpg" 
                    alt="Alta cucina per matrimoni in Dimora Storica - Famiglia Stasi" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le 3 Categorie */}
        <section className="dark-section direzione-pillars">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">LE NOSTRE PROPOSTE</span>
              <h2>I Tre Pilastri della<br/><span className="highlight">Nostra Tavola</span></h2>
            </div>

            <div className="pillars-showcase">
              <div className="pillar-card-large">
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3>Gli Antipasti: Sinfonie di Benvenuto</h3>
                <p>L'inizio di ogni sogno gastronomico. Crudi di mare finissimi, tempure croccanti e selezioni di latticini DOP campani. Un equilibrio perfetto tra estetica e freschezza, servito nei nostri giardini o nelle sale storiche.</p>
              </div>
              
              <div className="pillar-card-large">
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3>I Primi: Il Culto della Tradizione Evoluta</h3>
                <p>La pasta è il cuore della nostra tavola. Risotti mantecati a regola d'arte e formati della tradizione rivisitati dalla nostra Brigata. Usiamo solo grani selezionati e condimenti che esaltano il profumo del Mediterraneo, portando in tavola l'autenticità di una cucina fatta in casa con rigore professionale.</p>
              </div>
              
              <div className="pillar-card-large">
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-birthday-cake"></i>
                </div>
                <h3>I Secondi e i Dessert: L'Apoteosi del Sapore</h3>
                <p>Cotture lente per preservare la tenerezza delle carni e scottature veloci per il pesce più pregiato. La chiusura del cerchio gastronomico è affidata alla nostra pasticceria interna: dolci creazioni che uniscono la grande scuola campana alle tendenze internazionali.</p>
              </div>
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
                    alt={categoryAltTexts[piatto.category] || `Piatto gourmet Tenuta Leone - Cucina d'autore Campania`}
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
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/location_bg_2.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Vuoi scoprire il menù sartoriale per il tuo evento?</h2>
              <p>
                Richiedi una Consulenza Gastronomica con Adele e Anna per creare 
                il menu perfetto per il tuo matrimonio o evento speciale.
              </p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-outline" data-testid="piatti-contact-btn">
                  Richiedi una Consulenza Gastronomica
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
