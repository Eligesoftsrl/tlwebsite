import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://tenutaleone.it';

const QualcosaDiBluPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Qualcosa di Blu - Wedding Consultant Team",
    "description": "Team interno di Wedding Consultancy di Tenuta Leone. Organizzazione professionale matrimoni ed eventi a Salerno e Campania.",
    "serviceType": ["Wedding Planning", "Event Coordination", "Wedding Design"]
  };

  return (
    <>
      <Helmet>
        <title>Wedding Planner Salerno | Qualcosa di Blu | Organizzazione Matrimoni Campania</title>
        <meta name="description" content="Qualcosa di Blu: il team di Wedding Consultant interno di Tenuta Leone. Organizzazione professionale matrimoni a Salerno e Campania." />
        <meta name="keywords" content="wedding planner salerno, organizzazione matrimoni campania, wedding consultant, allestimenti matrimonio" />
        <link rel="canonical" href="https://tenutaleone.it/qualcosa-di-blu" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="qualcosa-page" data-testid="qualcosa-blu-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/slide/slide_1.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">WEDDING CONSULTANCY</span>
              <h1 className="page-title">Qualcosa<br/><span>di Blu</span></h1>
              <p className="page-subtitle">Il Team al Servizio del Vostro Sogno</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Intro */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">L'ECCELLENZA DI UN PROGETTO CORALE</span>
                <h2>Non una guida solitaria,<br/><span className="highlight">un'intera squadra</span></h2>
                <p className="lead-text">
                  Nella tradizione, il "blu" è simbolo di stabilità e armonia. Per Tenuta Leone, 
                  <strong> "Qualcosa di Blu"</strong> rappresenta il nostro reparto interno di Wedding Consultancy.
                </p>
                <p>
                  Un team affiatato di professionisti che trasforma l'organizzazione del matrimonio 
                  in un'esperienza d'eccellenza fluida e senza stress. Dalla direzione creativa alla 
                  regia tecnica, lavoriamo in simbiosi con l'anima della Tenuta.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage src="/img/slide/slide_2.jpg" alt="Team Qualcosa di Blu" />
                  <div className="image-badge">
                    <i className="fas fa-heart"></i>
                    <span>Dal 2010</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* I Vantaggi - Visual Grid */}
        <section className="dark-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">I VANTAGGI</span>
              <h2>Perché affidarsi a <span className="highlight">noi</span></h2>
            </div>

            <div className="benefits-showcase">
              <div className="benefit-card featured">
                <div className="benefit-icon">
                  <i className="fas fa-users-gear"></i>
                </div>
                <h3>Competenze Multidisciplinari</h3>
                <p>
                  Un pool di esperti in design, logistica e coordinamento che lavora 
                  simultaneamente sul vostro evento. Ogni dettaglio ha il suo specialista.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Sinergia con la Tenuta</h3>
                <p>
                  Conosciamo ogni angolo, luce e potenzialità della struttura. 
                  Ottimizziamo tempi e risultati.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Presenza e Regia</h3>
                <p>
                  Copertura totale durante il giorno del sì. Coordinamento 
                  dell'accoglienza e supervisione del backstage.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Visione Creativa</h3>
                <p>
                  Un laboratorio di idee dove il confronto tra consulenti 
                  genera soluzioni innovative e allestimenti sartoriali.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stili di Matrimonio */}
        <section className="content-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">LA VOSTRA VISIONE, LA NOSTRA REGIA</span>
              <h2>Qualunque sia <span className="highlight">il vostro stile</span></h2>
              <p className="section-intro">
                Il nostro obiettivo è permettervi di essere ospiti d'onore al vostro matrimonio
              </p>
            </div>

            <div className="styles-showcase">
              <div className="style-card" data-testid="style-modern">
                <div className="style-image">
                  <LazyImage src="/img/stanze/sala_ricevimenti/sala1.webp" alt="Modern Luxury" />
                  <div className="style-overlay"></div>
                </div>
                <div className="style-content">
                  <div className="style-icon">
                    <i className="fas fa-gem"></i>
                  </div>
                  <h3>Modern Luxury</h3>
                  <p>Linee pulite, materiali pregiati e dettagli contemporanei per chi ama l'eleganza minimalista</p>
                </div>
              </div>

              <div className="style-card" data-testid="style-timeless">
                <div className="style-image">
                  <LazyImage src="/img/stanze/sala_ottocentesca/ottocento1.webp" alt="Timeless Elegant" />
                  <div className="style-overlay"></div>
                </div>
                <div className="style-content">
                  <div className="style-icon">
                    <i className="fas fa-crown"></i>
                  </div>
                  <h3>Timeless Elegant</h3>
                  <p>Classico e raffinato, ispirato alle grandi tradizioni con un tocco di modernità</p>
                </div>
              </div>

              <div className="style-card" data-testid="style-creative">
                <div className="style-image">
                  <LazyImage src="/img/stanze/gli_esterni/esterno2.webp" alt="Creative Chic" />
                  <div className="style-overlay"></div>
                </div>
                <div className="style-content">
                  <div className="style-icon">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h3>Creative Chic</h3>
                  <p>Originale e personalizzato, per chi desidera un evento che rispecchi la propria personalità</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Interni */}
        <section className="accent-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">IN SINERGIA CON</span>
              <h2>I Nostri <span className="highlight">Partner Interni</span></h2>
            </div>

            <div className="partners-grid">
              <Link to="/music-band" className="partner-card">
                <div className="partner-image">
                  <LazyImage src="/img/gallery/insta_5.jpg" alt="Music Band" />
                  <div className="partner-overlay"></div>
                </div>
                <div className="partner-content">
                  <i className="fas fa-music"></i>
                  <h3>Music Band</h3>
                  <p>La colonna sonora perfetta</p>
                </div>
              </Link>

              <Link to="/brigata" className="partner-card">
                <div className="partner-image">
                  <LazyImage src="/img/brigata/c1.jpg" alt="La Brigata" />
                  <div className="partner-overlay"></div>
                </div>
                <div className="partner-content">
                  <i className="fas fa-utensils"></i>
                  <h3>La Brigata</h3>
                  <p>Menu personalizzati d'autore</p>
                </div>
              </Link>

              <Link to="/pasticceria" className="partner-card">
                <div className="partner-image">
                  <LazyImage src="/img/piatti/p17.jpg" alt="Pasticceria" />
                  <div className="partner-overlay"></div>
                </div>
                <div className="partner-content">
                  <i className="fas fa-cake-candles"></i>
                  <h3>Pasticceria</h3>
                  <p>Torte nuziali e dessert</p>
                </div>
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
              <p>Il primo passo verso il matrimonio perfetto inizia con una conversazione</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-primary" data-testid="qualcosa-contact-btn">
                  Richiedi un Incontro
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/tour" className="btn-outline">
                  Scopri la Tenuta
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
