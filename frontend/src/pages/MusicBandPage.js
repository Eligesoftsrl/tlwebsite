import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const MusicBandPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Tenuta Leone Music Band",
    "description": "La Regia Sonora di Tenuta Leone: Sound Design professionale per matrimoni ed eventi a Salerno e Campania. Performance dal vivo di alto profilo.",
    "genre": ["Jazz", "Bossanova", "Swing", "Pop", "Soul", "Funk", "Dance", "Lounge"],
    "numberOfMembers": 5,
    "event": {
      "@type": "Event",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "name": "Live Music Performance - Matrimoni ed Eventi",
      "location": {
        "@type": "Place",
        "name": "Tenuta Leone",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Roma, 19",
          "addressLocality": "Calvanico",
          "addressRegion": "SA",
          "postalCode": "84080",
          "addressCountry": "IT"
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Music Band & Sound Design | Musica Live Matrimoni | Tenuta Leone Salerno</title>
        <meta name="description" content="La Regia Sonora di Tenuta Leone: Sound Design professionale per matrimoni ed eventi. Jazz, Bossanova, Swing e party esclusivi dal vivo a Salerno e Campania." />
        <meta name="keywords" content="musica aperitivo matrimonio salerno, jazz band eventi campania, musica dal vivo matrimoni, band feste esclusive, DJ set d'autore, sound design matrimonio" />
        
        <meta property="og:title" content="Music Band & Sound Design | Tenuta Leone" />
        <meta property="og:description" content="Dalle atmosfere d'autore al party esclusivo: la colonna sonora del vostro evento." />
        <meta property="og:image" content={`${BASE_URL}/img/gallery/insta_5.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/music-band" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="music-band-page direzione-page" data-testid="music-band-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/gallery/insta_5.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">MUSIC BAND & SOUND DESIGN</span>
              <h1 className="page-title">La Regia Sonora: L'Anima Musicale di Tenuta Leone.</h1>
              <p className="page-subtitle">Dalle atmosfere d'autore al party esclusivo: la colonna sonora del vostro evento.</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Il Manifesto Musicale */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">IL MANIFESTO MUSICALE</span>
                <h2>Sound Design<br/><span className="highlight">d'Autore</span></h2>
                <p className="lead-text">
                  A Tenuta Leone, la musica è l'elemento invisibile che trasforma un evento in un'emozione 
                  memorabile. La nostra proposta musicale non è un semplice intrattenimento, ma un vero 
                  Sound Design studiato per armonizzarsi con l'architettura della Dimora e i tempi della 
                  nostra cucina.
                </p>
                <p>
                  Che si tratti delle note soffuse durante il rito civile nel parco secolare o del ritmo 
                  coinvolgente del banchetto nelle sale storiche, ogni fase della giornata è scandita da una 
                  selezione artistica d'eccellenza. La nostra Music Band garantisce performance dal vivo di 
                  alto profilo a <strong>Salerno</strong> e in <strong>Campania</strong>, assicurando un 
                  equilibrio perfetto tra eleganza e divertimento.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/slide/slide_1.jpg" 
                    alt="Music Band dal vivo durante un matrimonio a Tenuta Leone" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Formazione */}
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

        {/* I Momenti dell'Evento */}

        {/* A. Welcome & Aperitivo */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block intro-block-reverse">
              <div className="intro-text-side">
                <span className="section-label">WELCOME & APERITIVO</span>
                <h2>Atmosfere<br/><span className="highlight">Soffuse</span></h2>
                <p className="lead-text">
                  L'accoglienza dei vostri ospiti tra i giardini e il porticato è accompagnata da sonorità 
                  raffinate — Jazz, Bossanova o Swing — che invitano alla conversazione e al relax, 
                  preparando il cuore al resto della giornata.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/slide/slide_3.jpg" 
                    alt="Musica aperitivo matrimonio nel parco di Tenuta Leone Salerno" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. Il Banchetto */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">IL BANCHETTO</span>
                <h2>Eleganza e<br/><span className="highlight">Discrezione</span></h2>
                <p className="lead-text">
                  Durante il ricevimento, la musica diventa un filo conduttore discreto. Selezioni lounge 
                  o acustiche che esaltano il piacere della tavola senza mai sovrastarlo, mantenendo sempre 
                  quel tono di classe che contraddistingue la nostra Firma d'Autore.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/slide/slide_2.jpg" 
                    alt="Dettaglio setup musicale d'autore in Dimora Storica Salerno" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. Il Party */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block intro-block-reverse">
              <div className="intro-text-side">
                <span className="section-label">IL PARTY</span>
                <h2>Energia e<br/><span className="highlight">Coinvolgimento</span></h2>
                <p className="lead-text">
                  Dopo il taglio della torta, la Dimora cambia pelle. Il ritmo sale e la band trascina 
                  gli ospiti in un party esclusivo con i grandi successi internazionali e nazionali, 
                  trasformando il finale dell'evento in una festa leggendaria.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/tenuta_antica/antica_8.jpg" 
                    alt="Music Band dal vivo durante un matrimonio a Tenuta Leone" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/location_bg_1.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Ascolta il nostro sound</h2>
              <p>Richiedi la playlist d'ispirazione e inizia a costruire la colonna sonora del tuo grande giorno.</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-outline" data-testid="music-contact-btn">
                  Contattaci
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

export default MusicBandPage;
