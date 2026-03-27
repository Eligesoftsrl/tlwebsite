import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const QualcosaDiBluPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Qualcosa di Blu - Wedding Consultant Tenuta Leone",
    "description": "Qualcosa di Blu: il segno distintivo di stile e raffinatezza di Tenuta Leone. Allestimenti d'autore, scenografie nuziali e wedding consultancy a Salerno e Campania.",
    "serviceType": ["Wedding Planning", "Wedding Design", "Event Styling", "Allestimenti Matrimoni"],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.733,
        "longitude": 14.865
      },
      "geoRadius": "50000"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "url": "https://www.tenutaleone.it"
    }
  };

  return (
    <>
      <Helmet>
        <title>Qualcosa di Blu | Wedding Consultant d'Autore | Tenuta Leone Salerno</title>
        <meta name="description" content="Scopri il significato di 'Qualcosa di Blu' a Tenuta Leone: dove la tradizione del matrimonio incontra l'esclusività di allestimenti d'autore a Salerno." />
        <meta name="keywords" content="allestimenti matrimonio eleganti salerno, decorazioni blu d'autore, scenografie nuziali ricercate, wedding consultant campania, wedding design dimora storica" />
        
        <meta property="og:title" content="Qualcosa di Blu | Wedding Consultant d'Autore | Tenuta Leone" />
        <meta property="og:description" content="Oltre la tradizione: un segno distintivo di stile e raffinatezza in Dimora Storica." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_1.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/qualcosa-di-blu" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="qualcosa-page direzione-page" data-testid="qualcosa-blu-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/qualcosa-di-blu/qdb_5.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">L'ESCLUSIVIT&Agrave; DI UN DETTAGLIO</span>
              <h1 className="page-title">Qualcosa di Blu: L'Anima Elegante di Tenuta Leone.</h1>
              <p className="page-subtitle">Oltre la tradizione: un segno distintivo di stile e raffinatezza in Dimora Storica.</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Il Manifesto del Dettaglio */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">IL MANIFESTO DEL DETTAGLIO</span>
                <h2>Dove il Blu diventa<br/><span className="highlight">Firma d'Autore</span></h2>
                <p className="lead-text">
                  Nella simbologia del matrimonio, il blu rappresenta la purezza, la fedeltà e la costanza. 
                  A Tenuta Leone, 'Qualcosa di Blu' non è solo un omaggio alla tradizione, ma una vera 
                  dichiarazione d'intenti stilistica.
                </p>
                <p>
                  La nostra Firma d'Autore si manifesta nell'attenzione a quei piccoli, grandi dettagli che 
                  rendono un evento unico. Dalle sfumature dei nostri allestimenti floreali alle luci soffuse 
                  che accarezzano le sale ottocentesche, il blu diventa il filo conduttore di un'eleganza senza 
                  tempo che avvolge ogni matrimonio a <strong>Salerno</strong> e in <strong>Campania</strong>.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/qualcosa-di-blu/qdb_1.jpg" 
                    alt="Dettaglio allestimento blu per matrimonio d'autore a Tenuta Leone" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Atmosfere e Allestimenti d'Autore */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block intro-block-reverse">
              <div className="intro-text-side">
                <span className="section-label">ATMOSFERE E ALLESTIMENTI</span>
                <h2>Scenografie<br/><span className="highlight">d'Autore</span></h2>
                <p className="lead-text">
                  Progettiamo scenografie dove il blu si declina in texture preziose e decori ricercati.
                </p>
                <p>
                  Che sia il dettaglio di una mise en place d'élite o un tocco floreale nel nostro parco secolare, 
                  ogni elemento è coordinato per creare un'armonia visiva che parla di voi e della nostra 
                  dedizione all'eccellenza.
                </p>
                <Link to="/matrimoni-autore-salerno" className="btn-primary" data-testid="link-matrimoni">
                  Scopri i Matrimoni d'Autore
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/qualcosa-di-blu/qdb_2.jpg" 
                    alt="Scenografia luminosa blu nelle sale storiche di Tenuta Leone Salerno" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Il Sogno e la Tradizione */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">IL SOGNO E LA TRADIZIONE</span>
                <h2>Una Regia<br/><span className="highlight">Millimetrica</span></h2>
                <p className="lead-text">
                  Vogliamo che ogni sposa e ogni coppia si senta protetta da una regia millimetrica.
                </p>
                <p>
                  Inserire 'Qualcosa di Blu' nel concept del vostro giorno significa affidarsi a una visione 
                  che non lascia nulla al caso, trasformando una leggenda popolare in un'esperienza sensoriale 
                  di alto profilo.
                </p>
                <Link to="/tour" className="btn-primary" data-testid="link-dimora">
                  Esplora la Dimora
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/qualcosa-di-blu/qdb_3.jpg" 
                    alt="Allestimento esclusivo nel parco secolare di Tenuta Leone Salerno" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Allestimenti */}
        <section className="content-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">I NOSTRI ALLESTIMENTI</span>
              <h2>Dettagli che<br/><span className="highlight">fanno la Differenza</span></h2>
            </div>
            <div className="piatti-category-gallery">
              <div className="piatto-card">
                <LazyImage src="/img/qualcosa-di-blu/qdb_4.jpg" alt="Tableau de mariage con decorazioni verdi e fiori - Tenuta Leone Salerno" />
              </div>
              <div className="piatto-card">
                <LazyImage src="/img/qualcosa-di-blu/qdb_5.jpg" alt="Allestimento tavola d'autore con candelabro e torta nuziale - Tenuta Leone" />
              </div>
            </div>
          </div>
        </section>

        {/* Partner Interni */}
        <section className="dark-section direzione-pillars">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">IN SINERGIA CON</span>
              <h2>I Nostri <span className="highlight">Partner Interni</span></h2>
            </div>

            <div className="pillars-showcase">
              <Link to="/frontdesk" className="pillar-card-large" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-concierge-bell"></i>
                </div>
                <h3>Consulenza Eventi</h3>
                <p>Adele e Anna vi guidano dalla prima visita alla realizzazione del vostro sogno.</p>
              </Link>

              <Link to="/music-band" className="pillar-card-large" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-music"></i>
                </div>
                <h3>Music Band</h3>
                <p>La colonna sonora perfetta per ogni momento del vostro evento.</p>
              </Link>

              <Link to="/pasticceria" className="pillar-card-large" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="pillar-icon-wrapper">
                  <i className="fas fa-birthday-cake"></i>
                </div>
                <h3>La Pasticceria</h3>
                <p>Torte nuziali scenografiche e buffet dolci firmati dalla nostra Brigata.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/gallery_bg_1.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Raccontateci il vostro sogno</h2>
              <p>Il primo passo verso il matrimonio perfetto inizia con una conversazione.</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-outline" data-testid="qualcosa-contact-btn">
                  Richiedi un Incontro
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

export default QualcosaDiBluPage;
