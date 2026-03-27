import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BASE_URL = 'https://www.tenutaleone.it';

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
    "@type": "FoodEstablishment",
    "name": "Pasticceria Interna - Tenuta Leone",
    "description": "Pasticceria artigianale interna di Tenuta Leone: torte nuziali scenografiche, buffet dolci d'autore e creazioni esclusive per matrimoni ed eventi a Salerno e Campania.",
    "servesCuisine": "Pasticceria artigianale campana",
    "parentOrganization": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "url": "https://www.tenutaleone.it",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Roma, 19",
        "addressLocality": "Calvanico",
        "addressRegion": "SA",
        "postalCode": "84080",
        "addressCountry": "IT"
      }
    },
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Wedding Cake",
          "description": "Torte nuziali artigianali progettate su misura"
        },
        {
          "@type": "MenuSection",
          "name": "Gran Buffet di Dolci e Frutta",
          "description": "Piccola pasticceria mignon, dolci al cucchiaio e composizioni di frutta fresca"
        },
        {
          "@type": "MenuSection",
          "name": "Angolo dei Peccati di Gola",
          "description": "Confettata d'eccellenza, cioccolato pregiato e preparazioni live"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>La Pasticceria Interna d'Autore | Torte Nuziali e Buffet Dolci | Tenuta Leone Salerno</title>
        <meta name="description" content="La Pasticceria Interna di Tenuta Leone: torte nuziali scenografiche, buffet dolci artigianali e creazioni esclusive della Famiglia Stasi per matrimoni ed eventi a Salerno e Campania." />
        <meta name="keywords" content="torte nuziali artigianali salerno, wedding cake campania, buffet dolci matrimonio, pasticceria interna matrimoni, confettata d'autore, piccola pasticceria mignon" />
        
        <meta property="og:title" content="La Pasticceria Interna d'Autore | Tenuta Leone" />
        <meta property="og:description" content="L'arte dolce di Tenuta Leone: torte nuziali scenografiche e buffet curati dalla nostra Brigata." />
        <meta property="og:image" content={`${BASE_URL}/img/piatti/p16.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/pasticceria" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="pasticceria-page direzione-page" data-testid="pasticceria-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg_pasticceria.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">LA PASTICCERIA D'AUTORE</span>
              <h1 className="page-title">La Pasticceria Interna: Il Gran Finale d'Autore.</h1>
              <p className="page-subtitle">L'arte dolce di Tenuta Leone: torte nuziali scenografiche e buffet curati dalla nostra Brigata.</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Il Manifesto della Dolcezza */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">IL MANIFESTO DELLA DOLCEZZA</span>
                <h2>L'Apoteosi di un<br/><span className="highlight">Percorso Sensoriale</span></h2>
                <p className="lead-text">
                  A Tenuta Leone, il momento del dessert non è una semplice conclusione, ma l'apoteosi 
                  di un percorso sensoriale. La nostra pasticceria interna nasce dalla volontà della 
                  Famiglia Stasi di garantire l'assoluta freschezza e l'unicità di ogni creazione.
                </p>
                <p>
                  Nel nostro laboratorio artigianale, i maestri pasticceri trasformano materie prime nobili 
                  in capolavori del gusto, fondendo l'eredità della grande tradizione campana con le più 
                  moderne tecniche della pasticceria internazionale. Scegliere la nostra Dimora a 
                  <strong>Salerno</strong> significa offrire ai propri ospiti un finale di evento preparato 
                  espresso, senza compromessi logistici o qualitativi.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/piatti/p16.jpg" 
                    alt="Taglio della torta nuziale d'autore nel parco di Tenuta Leone" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Wedding Cake */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block intro-block-reverse">
              <div className="intro-text-side">
                <span className="section-label">UN'OPERA SARTORIALE</span>
                <h2>La Wedding Cake:<br/><span className="highlight">Il Simbolo del vostro Sì</span></h2>
                <p className="lead-text">
                  La torta nuziale è il simbolo del vostro 'Sì'. Ogni nostra Wedding Cake è progettata 
                  su misura per riflettere lo stile dell'evento.
                </p>
                <p>
                  Dalle classiche torte a piani decorate a mano alle moderne creazioni 'nude' o di design. 
                  Bellezza estetica e gusto sublime si fondono in un unico istante indimenticabile.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/piatti/p17.jpg" 
                    alt="Buffet di dolci artigianali prodotti nella pasticceria interna di Tenuta Leone" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Il Gran Buffet */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">IL GRAN BUFFET</span>
                <h2>Dolci e Frutta:<br/><span className="highlight">Un Trionfo di Colori e Sapori</span></h2>
                <p className="lead-text">
                  Un trionfo di colori e sapori che accoglie gli ospiti nei nostri giardini.
                </p>
                <p>
                  Piccola pasticceria mignon, dolci al cucchiaio, angoli dedicati alle specialità della 
                  tradizione napoletana e spettacolari composizioni di frutta fresca di stagione. Un 
                  allestimento scenografico che invita alla convivialità e al piacere.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/piatti/p18.jpg" 
                    alt="Maestri pasticceri all'opera nel laboratorio di Tenuta Leone Salerno" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* L'Angolo dei Peccati di Gola */}
        <section className="dark-section direzione-pillars">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">L'ANGOLO DEI PECCATI DI GOLA</span>
              <h2>Per chi desidera<br/><span className="highlight">Stupire</span></h2>
              <p className="section-intro">
                Per chi desidera stupire, creiamo angoli tematici: dalla confettata d'eccellenza alla 
                degustazione di cioccolato pregiato e distillati, fino alle spettacolari preparazioni 
                'live' dei nostri pasticceri.
              </p>
            </div>

            <div className="pillars-showcase">
              <div className="pillar-card-large">
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-gift"></i>
                </div>
                <h3>Confettata d'Eccellenza</h3>
                <p>Selezione raffinata di confetti artigianali e praline in un allestimento elegante e personalizzato.</p>
              </div>
              
              <div className="pillar-card-large">
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-wine-glass-alt"></i>
                </div>
                <h3>Cioccolato e Distillati</h3>
                <p>Degustazione di cioccolato pregiato abbinato a distillati selezionati per un'esperienza sensoriale unica.</p>
              </div>
              
              <div className="pillar-card-large">
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-magic"></i>
                </div>
                <h3>Preparazioni Live</h3>
                <p>I nostri pasticceri creano dal vivo dolci spettacolari, trasformando l'arte in puro intrattenimento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="content-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">LE NOSTRE CREAZIONI</span>
              <h2>La Dolcezza<br/><span className="highlight">in Immagini</span></h2>
            </div>

            <div className="piatti-category-gallery">
              {dolciGallery.map((img, index) => (
                <div 
                  key={index} 
                  className="piatto-card" 
                  data-testid={`dolce-${index}`}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <LazyImage src={img} alt={`Pasticceria interna d'autore Tenuta Leone - Creazione ${index + 1}`} />
                  <div className="piatto-overlay">
                    <i className="fas fa-search-plus"></i>
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

        {/* CTA */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/gallery_bg_2.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Volete un finale d'evento leggendario?</h2>
              <p>Richiedete una consulenza con Adele e Anna per progettare il vostro dessert su misura.</p>
              <div className="cta-buttons">
                <Link to="/frontdesk" className="btn-outline" data-testid="pasticceria-contact-btn">
                  Richiedi una Consulenza
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
