import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const BASE_URL = 'https://www.tenutaleone.it';

const DirezionePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Luigi Ceruso",
    "jobTitle": "General Manager / Direttore di Struttura",
    "worksFor": {
      "@type": "EventVenue",
      "name": "Tenuta Leone"
    },
    "description": "Responsabile della regia e del coordinamento logistico per matrimoni ed eventi di lusso in Campania e provincia di Salerno.",
    "image": `${BASE_URL}/img/team/luigi-ceruso.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salerno",
      "addressRegion": "Campania"
    }
  };

  return (
    <>
      <Helmet>
        <title>Luigi Ceruso | Direttore Tenuta Leone | Regia Matrimoni Salerno</title>
        <meta name="description" content="Incontra Luigi Ceruso, il Direttore di Tenuta Leone. Il garante della regia e dell'organizzazione millimetrica per il tuo matrimonio d'eccellenza in Campania." />
        <meta name="keywords" content="direttore tenuta leone, luigi ceruso, regia matrimoni salerno, wedding manager campania, organizzazione eventi salerno, matrimoni napoli avellino" />
        
        <meta property="og:title" content="Luigi Ceruso | Direttore Tenuta Leone | Regia Matrimoni Salerno" />
        <meta property="og:description" content="Incontra Luigi Ceruso, il Direttore di Tenuta Leone. Il garante della regia e dell'organizzazione millimetrica per il tuo matrimonio d'eccellenza in Campania." />
        <meta property="og:image" content={`${BASE_URL}/img/team/luigi-ceruso.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/direzione`} />
        <meta property="og:type" content="profile" />
        
        <link rel="canonical" href="https://www.tenutaleone.it/direzione" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="direzione-page" data-testid="direzione-page">
        {/* Hero Full Screen */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/slide/slide_1.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">DIREZIONE DI STRUTTURA</span>
              <h1 className="page-title">La Regia dell'Evento:<br/><span>La Visione di Luigi Ceruso</span></h1>
              <p className="page-subtitle">General Manager & Direttore di Regia</p>
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
                <span className="section-label">IL GARANTE DEL VOSTRO INVESTIMENTO</span>
                <h2>Luigi Ceruso:<br/><span className="highlight">Il vostro punto di riferimento</span></h2>
                <p className="lead-text">
                  "Il mio obiettivo non è farvi vivere un bel matrimonio, ma garantirvi l'esecuzione 
                  perfetta di un progetto d'autore. Voi pensate a emozionarvi, alla sincronia di ogni 
                  istante penso io."
                </p>
                <p>
                  Organizzare un evento di alto profilo nel cuore della Campania richiede rigore logistico 
                  e una visione d'insieme che non ammette distrazioni. Come Direttore di Tenuta Leone, 
                  il mio ruolo è quello di trasformare la visione della Famiglia Stasi e i desideri degli 
                  sposi in una realtà senza sbavature.
                </p>
                <p>
                  Sono il punto di riferimento per le coppie di <strong>Salerno, Napoli e Avellino</strong> che 
                  non accettano il caso e pretendono la certezza di un risultato impeccabile.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage src="/img/team/luigi-ceruso.jpg" alt="Luigi Ceruso - General Manager Tenuta Leone" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* I 3 Pilastri - Dark Section */}
        <section className="dark-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">I 3 PILASTRI DELLA MIA REGIA</span>
              <h2>Perché la mia Regia fa la differenza<br/>tra un "Ricevimento" e un <span className="highlight">"Evento Leggendario"</span></h2>
              <p className="section-intro">
                Molti sposi temono i tempi morti, il disordine nel servizio o la musica che sovrasta i dialoghi. 
                In Tenuta Leone, ho implementato un modello operativo basato su 3 pilastri:
              </p>
            </div>

            <div className="instruments-showcase">
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-clock"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Sincronia Millimetrica</h3>
                  <p>Coordino personalmente la Brigata di cucina e il personale di sala. Il ritmo del banchetto deve essere fluido, elegante e dinamico: niente attese estenuanti, solo il piacere del gusto.</p>
                </div>
              </div>
              
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Sound & Light Design</h3>
                  <p>Supervisiono ogni aspetto tecnico affinché l'atmosfera sonora e luminosa della Tenuta si evolva in armonia con i momenti della festa, dal rito civile al party finale.</p>
                </div>
              </div>
              
              <div className="instrument-card">
                <div className="instrument-visual">
                  <div className="instrument-icon-wrapper">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                </div>
                <div className="instrument-info">
                  <h3>Problem Solving Invisibile</h3>
                  <p>La mia presenza garantisce che ogni imprevisto venga gestito dietro le quinte. Gli sposi e gli ospiti percepiranno solo naturalezza e armonia, anche nei momenti di massima complessità.</p>
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
                <span className="section-label">LA MIA PROMESSA</span>
                <h2>Non gestisco solo eventi,<br/><span className="highlight">creo esperienze impeccabili</span></h2>
                <p>
                  Ogni matrimonio in Tenuta Leone è un progetto unico che merita 
                  una regia all'altezza delle vostre aspettative.
                </p>
                <Link to="/contatti" className="btn-primary">
                  Prenota una Consulenza
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Esperienza Decennale</h4>
                <p>Anni di gestione di eventi di alto profilo in Campania</p>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Rapporto Diretto</h4>
                <p>Un unico referente per ogni aspetto del vostro evento</p>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h4>Coordinamento Totale</h4>
                <p>Gestione completa di fornitori, staff e tempistiche</p>
              </div>
              
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Standard Eccellenza</h4>
                <p>Ogni dettaglio curato secondo i più alti standard</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/normal/about_5.jpg)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Volete la certezza di una regia impeccabile per il vostro Sì?</h2>
              <p>Iniziate il percorso con una consulenza tecnica insieme a Luigi Ceruso</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-primary" data-testid="direzione-cta-btn">
                  Prenota Ora il Tuo Appuntamento
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/brigata" className="btn-outline">
                  Scopri la Brigata di Cucina
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Signature */}
        <section className="signature-section">
          <div className="container">
            <div className="signature-box">
              <p className="signature-text">Con dedizione e professionalità,</p>
              <p className="signature-name">Luigi Ceruso</p>
              <p className="signature-role">General Manager & Direttore di Regia</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DirezionePage;
