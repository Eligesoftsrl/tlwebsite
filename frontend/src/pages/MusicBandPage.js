import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const MusicBandPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Tenuta Leone Music Band",
    "description": "Band musicale residente per matrimoni ed eventi a Tenuta Leone, Salerno. Quintetto professionale specializzato in musica live per cerimonie e ricevimenti.",
    "genre": ["Jazz", "Pop", "Soul", "Funk", "Dance", "Lounge"],
    "numberOfMembers": 5,
    "foundingLocation": {
      "@type": "Place",
      "name": "Tenuta Leone",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calvanico",
        "addressRegion": "Salerno",
        "addressCountry": "IT"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Music Band per Matrimoni Salerno | Tenuta Leone Music Band | Musica Live Eventi</title>
        <meta name="description" content="Tenuta Leone Music Band: quintetto professionale per matrimoni ed eventi a Salerno e Campania. Musica live Jazz, Pop, Soul e Dance per il vostro ricevimento." />
        <meta name="keywords" content="band matrimonio salerno, musica live matrimonio campania, gruppo musicale eventi, jazz band wedding, tenuta leone music band" />
        <link rel="canonical" href="https://www.tenutaleone.it/music-band" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="music-band-page" data-testid="music-band-page">
        {/* Hero Full Screen */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/gallery/insta_5.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">FORMAZIONE RESIDENTE</span>
              <h1 className="page-title">Tenuta Leone<br/><span>Music Band</span></h1>
              <p className="page-subtitle">Il Ritmo del Vostro Sogno</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Intro Section */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">UN'ESPERIENZA SONORA SU MISURA</span>
                <h2>La musica non è un semplice sottofondo,<br/>è <span className="highlight">l'anima del vostro matrimonio</span></h2>
                <p className="lead-text">
                  La Tenuta Leone Music Band è la nostra formazione residente: un quintetto di professionisti 
                  nato per offrire un viaggio sonoro unico, capace di adattarsi a ogni fase del ricevimento.
                </p>
                <p>
                  Scegliere la nostra band interna significa affidarsi a musicisti che vivono la Tenuta ogni giorno, 
                  garantendo un'armonia perfetta tra performance live, acustica degli ambienti e scaletta dell'evento.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage src="/img/slide/slide_1.jpg" alt="Music Band Tenuta Leone" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Formazione - Visual Cards */}
        <section className="dark-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">LA FORMAZIONE</span>
              <h2>5 Elementi, <span className="highlight">Infiniti Stili</span></h2>
            </div>

            <div className="instruments-showcase">
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-microphone-alt"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Voce</h3>
                  <p>Il cuore narrativo, capace di emozionare nei momenti soft e trascinare la folla nel finale</p>
                </div>
              </div>
              
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-music"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Piano</h3>
                  <p>Eleganza e struttura per atmosfere sofisticate</p>
                </div>
              </div>
              
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-wave-square"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Sax</h3>
                  <p>Il tocco glamour che accende l'aperitivo</p>
                </div>
              </div>
              
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-guitar"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Basso</h3>
                  <p>Il groove profondo dai ritmi funk alle ballate</p>
                </div>
              </div>
              
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-drum"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Batteria</h3>
                  <p>L'energia pura del concerto live</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* I 4 Mood - Timeline Visual */}
        <section className="content-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">I NOSTRI MOOD MUSICALI</span>
              <h2>Una Colonna Sonora <span className="highlight">in 4 Atti</span></h2>
            </div>

            <div className="mood-journey">
              <div className="mood-item" data-testid="mood-1">
                <div className="mood-number">01</div>
                <div className="mood-content">
                  <div className="mood-badge">L'Accoglienza</div>
                  <h3>Musica in Filodiffusione</h3>
                  <p>
                    Il primo impatto definisce l'eleganza dell'evento. Mentre gli ospiti sorseggiano 
                    il welcome drink tra i giardini, la musica in filodiffusione crea un'atmosfera 
                    sospesa e raffinata.
                  </p>
                  <div className="mood-highlight">
                    <strong>Protagonista:</strong> Selezione musicale curata per l'accoglienza
                  </div>
                </div>
                <div className="mood-visual">
                  <LazyImage src="/img/slide/slide_3.jpg" alt="Aperitivo Jazz" />
                </div>
              </div>

              <div className="mood-item reverse" data-testid="mood-2">
                <div className="mood-number">02</div>
                <div className="mood-content">
                  <div className="mood-badge">Il Banchetto</div>
                  <h3>Elegant Pop & Soul</h3>
                  <p>
                    La musica si fa discreta ma presente, come un filo conduttore che accompagna 
                    il piacere della tavola senza mai sovrastarlo.
                  </p>
                  <div className="mood-highlight">
                    <strong>Protagonista:</strong> La Voce accarezza i momenti conviviali
                  </div>
                </div>
                <div className="mood-visual">
                  <LazyImage src="/img/slide/slide_1.jpg" alt="Cena di Gala" />
                </div>
              </div>

              <div className="mood-item" data-testid="mood-3">
                <div className="mood-number">03</div>
                <div className="mood-content">
                  <div className="mood-badge">Il Taglio della Torta</div>
                  <h3>Emotional Moments</h3>
                  <p>
                    Il climax dell'evento richiede una regia sonora millimetrica. Il vostro 
                    "brano del cuore" eseguito interamente dal vivo con arrangiamento orchestrale.
                  </p>
                  <div className="mood-highlight">
                    <strong>Protagonista:</strong> Il Sax si esibisce durante il Taglio della Torta
                  </div>
                  <div className="mood-note">
                    <em>Nota: Il Sax è disponibile esclusivamente per gli eventi serali</em>
                  </div>
                </div>
                <div className="mood-visual">
                  <LazyImage src="/img/slide/slide_2.jpg" alt="Taglio Torta" />
                </div>
              </div>

              <div className="mood-item reverse" data-testid="mood-4">
                <div className="mood-number">04</div>
                <div className="mood-content">
                  <div className="mood-badge">La Festa</div>
                  <h3>Power Dance & Funky Party</h3>
                  <p>
                    Le luci cambiano, il ritmo sale. È il momento di sciogliere le formalità 
                    e dare inizio al divertimento puro. Il DJ Set sprigiona tutta la sua energia.
                  </p>
                  <div className="mood-highlight">
                    <strong>Protagonista:</strong> DJ Set per il ballo e il divertimento della serata
                  </div>
                </div>
                <div className="mood-visual">
                  <LazyImage src="/img/tenuta_antica/antica_8.jpg" alt="Party" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perché Sceglierci - Feature Boxes */}
        <section className="accent-section">
          <div className="container">
            <div className="features-grid">
              <div className="feature-main">
                <span className="section-label">PERCHÉ SCEGLIERCI</span>
                <h2>Non eseguiamo solo canzoni,<br/><span className="highlight">creiamo atmosfere</span></h2>
                <p>
                  La Tenuta Leone Music Band trasforma ogni momento del vostro matrimonio 
                  in un'esperienza sonora indimenticabile.
                </p>
                <Link to="/contatti" className="btn-primary">
                  Richiedi il Repertorio
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-sliders"></i>
                </div>
                <h4>Repertorio Personalizzato</h4>
                <p>Costruiamo insieme a voi la colonna sonora perfetta</p>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>Affidabilità Tecnica</h4>
                <p>Strumentazione residente di alta qualità</p>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-music"></i>
                </div>
                <h4>Versatilità Stilistica</h4>
                <p>Dal Chic Lounge al Power Dance coinvolgente</p>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Sincronia Totale</h4>
                <p>Coordinamento perfetto con lo staff della Tenuta</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/location_bg_1.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Ascolta il nostro sound</h2>
              <p>Richiedi la playlist d'ispirazione e inizia a costruire la colonna sonora del tuo grande giorno</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-primary" data-testid="music-contact-btn">
                  Contattaci
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/qualcosa-di-blu" className="btn-outline">
                  Scopri il Team Wedding
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MusicBandPage;
