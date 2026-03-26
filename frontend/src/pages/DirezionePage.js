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
        {/* Hero Section */}
        <section className="page-hero direzione-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/slide/slide_1.jpg)' }}></div>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="container">
              <h1 className="page-title">La Regia dell'Evento: La Visione di Luigi Ceruso</h1>
              <p className="page-subtitle">General Manager & Direttore di Regia</p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="direzione-quote-section">
          <div className="container">
            <blockquote className="direzione-quote">
              <p>"Il mio obiettivo non è farvi vivere un bel matrimonio, ma garantirvi l'esecuzione perfetta di un progetto d'autore. Voi pensate a emozionarvi, alla sincronia di ogni istante penso io."</p>
              <cite>— Luigi Ceruso</cite>
            </blockquote>
          </div>
        </section>

        {/* Main Content */}
        <section className="direzione-content">
          <div className="container">
            <div className="direzione-grid">
              {/* Image */}
              <div className="direzione-image">
                <LazyImage 
                  src="/img/team/luigi-ceruso.jpg" 
                  alt="Luigi Ceruso - General Manager Tenuta Leone" 
                />
              </div>

              {/* Text */}
              <div className="direzione-text">
                <h2>Luigi Ceruso: Il Garante del vostro Investimento in Tenuta Leone</h2>
                <p>
                  Organizzare un evento di alto profilo nel cuore della Campania richiede rigore logistico 
                  e una visione d'insieme che non ammette distrazioni.
                </p>
                <p>
                  Come Direttore di Tenuta Leone, il mio ruolo è quello di trasformare la visione della 
                  Famiglia Stasi e i desideri degli sposi in una realtà senza sbavature. Sono il punto 
                  di riferimento per le coppie di <strong>Salerno, Napoli e Avellino</strong> che non accettano 
                  il caso e pretendono la certezza di un risultato impeccabile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="direzione-pillars">
          <div className="container">
            <h3>Perché la mia Regia fa la differenza tra un "Ricevimento" e un "Evento Leggendario"</h3>
            <p className="pillars-intro">
              Molti sposi temono i tempi morti, il disordine nel servizio o la musica che sovrasta i dialoghi. 
              In Tenuta Leone, ho implementato un modello operativo basato su 3 pilastri:
            </p>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Sincronia Millimetrica</h4>
                <p>
                  Coordino personalmente la Brigata di cucina e il personale di sala. Il ritmo del banchetto 
                  deve essere fluido, elegante e dinamico: niente attese estenuanti, solo il piacere del gusto.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Sound & Light Design</h4>
                <p>
                  Supervisiono ogni aspetto tecnico affinché l'atmosfera sonora e luminosa della Tenuta 
                  si evolva in armonia con i momenti della festa, dal rito civile al party finale.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Problem Solving Invisibile</h4>
                <p>
                  La mia presenza garantisce che ogni imprevisto venga gestito dietro le quinte. Gli sposi 
                  e gli ospiti percepiranno solo naturalezza e armonia, anche nei momenti di massima complessità.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section cta-with-bg direzione-cta">
          <div className="cta-bg" style={{ backgroundImage: 'url(/img/normal/about_5.jpg)' }}></div>
          <div className="cta-overlay"></div>
          <div className="cta-content">
            <div className="container">
              <h2>Volete la certezza di una regia impeccabile per il vostro Sì?</h2>
              <p>Iniziate il percorso con una consulenza tecnica insieme a Luigi Ceruso.</p>
              <Link to="/contatti" className="btn btn-primary" data-testid="direzione-cta-btn">
                <i className="fas fa-calendar-check"></i>
                Prenota Ora il Tuo Appuntamento
              </Link>
            </div>
          </div>
        </section>

        {/* Signature */}
        <section className="direzione-signature">
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
