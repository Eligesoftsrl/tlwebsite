import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { piatti } from '../data/siteData';
import LazyImage from '../components/LazyImage';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BASE_URL = 'https://www.tenutaleone.it';

const categories = [
  {
    id: 'antipasti',
    label: 'GLI ANTIPASTI',
    title: 'Gli Antipasti:',
    highlight: 'Sinfonie di Benvenuto',
    icon: 'fas fa-seedling',
    concept: "L'inizio di ogni sogno gastronomico. Crudi di mare finissimi, tempure croccanti e selezioni di latticini DOP campani. Un equilibrio perfetto tra estetica e freschezza, servito nei nostri giardini o nelle sale ottocentesche.",
    altText: "Antipasto gourmet Tenuta Leone - Prodotti tipici campani Salerno",
    images: piatti.antipasti
  },
  {
    id: 'primi',
    label: 'I PRIMI',
    title: 'I Primi:',
    highlight: 'Il Culto della Tradizione Evoluta',
    icon: 'fas fa-utensils',
    concept: "La pasta è il cuore della nostra tavola. Dai risotti mantecati a regola d'arte ai formati della tradizione trafilati al bronzo, ogni primo piatto è un omaggio al Mediterraneo. Usiamo solo grani selezionati e condimenti espressi che esaltano il profumo della nostra terra.",
    altText: "Primo piatto gourmet Tenuta Leone - Eccellenza gastronomica Salerno",
    images: piatti.primi
  },
  {
    id: 'secondi',
    label: 'I SECONDI',
    title: 'I Secondi:',
    highlight: 'Maestria nelle Cotture e Rispetto della Materia',
    icon: 'fas fa-fire',
    concept: "L'alta scuola della ristorazione si esprime nelle cotture: lente e gentili per preservare la tenerezza delle carni pregiate, veloci e tecniche per esaltare il pescato freschissimo. Accompagnati da contorni di stagione, i nostri secondi rappresentano l'equilibrio ideale tra sostanza e raffinatezza.",
    altText: "Secondo piatto di pesce d'autore Tenuta Leone - Alta ristorazione Salerno",
    images: piatti.secondi
  },
  {
    id: 'pasticceria',
    label: 'LA PASTICCERIA',
    title: 'La Pasticceria:',
    highlight: 'Il Gran Finale d\'Autore',
    icon: 'fas fa-birthday-cake',
    concept: "Il dolce a Tenuta Leone è una celebrazione dell'eccellenza. La nostra pasticceria interna crea ogni giorno torte nuziali scenografiche e buffet di dolci che uniscono la grande tradizione pasticcera campana alle più moderne tecniche internazionali. Una firma di dolcezza che chiude ogni evento in modo leggendario.",
    altText: "Torta nuziale e pasticceria interna Tenuta Leone - Eccellenza dolce Campania",
    images: piatti.pasticceria
  }
];

const PiattiPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);

  const openLightbox = (categoryImages, index) => {
    setLightboxSlides(categoryImages.map(src => ({ src })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu Tenuta Leone - L'Arte nel Piatto",
    "description": "Materie prime d'eccellenza e alta tecnica in Dimora Storica. Menu personalizzati per matrimoni ed eventi a Salerno, Napoli e Avellino.",
    "hasMenuSection": categories.map(cat => ({
      "@type": "MenuSection",
      "name": cat.title + ' ' + cat.highlight,
      "description": cat.concept
    }))
  };

  return (
    <>
      <Helmet>
        <title>L'Arte nel Piatto | Esperienza Gastronomica d'Autore | Tenuta Leone Salerno</title>
        <meta name="description" content="L'Arte nel Piatto: La Nostra Firma d'Autore. Materie prime d'eccellenza da Salerno, Napoli e Avellino. Antipasti, primi, secondi e pasticceria interna per matrimoni ed eventi." />
        <meta name="keywords" content="antipasti gourmet salerno, primi piatti matrimoni campania, secondi piatti pesce salerno, pasticceria interna matrimonio, wedding cake campania, cucina espressa dimora storica" />
        
        <meta property="og:title" content="L'Arte nel Piatto | Esperienza Gastronomica | Tenuta Leone" />
        <meta property="og:description" content="Materie Prime d'Eccellenza e Alta Tecnica in Dimora Storica." />
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
              <span className="hero-label">LA FIRMA GASTRONOMICA</span>
              <h1 className="page-title">La Firma Gastronomica.</h1>
              <p className="page-subtitle">L'eccellenza della cucina interna, tra rigore tecnico e identità campana.</p>
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
                  A Tenuta Leone, ogni portata è il racconto di un territorio generoso e di una passione 
                  di famiglia che si tramanda intatta. La nostra cucina non accetta compromessi: utilizziamo 
                  esclusivamente materie prime selezionate dai migliori produttori di <strong>Salerno</strong>, 
                  <strong>Napoli</strong> e <strong>Avellino</strong>.
                </p>
                <p>
                  Ogni ingrediente è lavorato con rispetto e maestria per garantirvi un banchetto nuziale 
                  o un evento privato dal sapore autentico e indimenticabile.
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

        {/* Category Sections */}
        {categories.map((cat, catIdx) => (
          <section key={cat.id} className={`content-section piatti-category-section ${catIdx % 2 === 0 ? 'dark-section' : ''}`} data-testid={`category-${cat.id}`}>
            <div className="container">
              {/* Category Header */}
              <div className="piatti-category-header">
                <div className="pillar-icon-wrapper">
                  <i className={cat.icon}></i>
                </div>
                <span className="section-label">{cat.label}</span>
                <h2>{cat.title}<br/><span className="highlight">{cat.highlight}</span></h2>
                <p className="piatti-category-concept">{cat.concept}</p>
              </div>

              {/* Category Gallery */}
              <div className="piatti-category-gallery" data-testid={`gallery-${cat.id}`}>
                {cat.images.map((img, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className="piatto-card"
                    onClick={() => openLightbox(cat.images, imgIdx)}
                    data-testid={`piatto-${cat.id}-${imgIdx}`}
                  >
                    <LazyImage 
                      src={img} 
                      alt={cat.altText}
                    />
                    <div className="piatto-overlay">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
        />

        {/* CTA Section */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/location_bg_2.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Vuoi scoprire il menù sartoriale per il tuo evento?</h2>
              <p>Richiedi una Consulenza Gastronomica con Adele e Anna</p>
              <div className="cta-buttons">
                <Link to="/frontdesk" className="btn-outline" data-testid="piatti-consulenza-btn">
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
