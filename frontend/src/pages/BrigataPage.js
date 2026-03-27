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
    "parentOrganization": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "url": "https://www.tenutaleone.it"
    },
    "member": brigata.map(chef => ({
      "@type": "Person",
      "name": chef.name,
      "jobTitle": chef.role
    }))
  };

  return (
    <>
      <Helmet>
        <title>La Brigata d'Autore | Cucina Interna d'Eccellenza | Tenuta Leone Salerno</title>
        <meta name="description" content="La Brigata di Tenuta Leone: cucina interna d'eccellenza gestita dalla Famiglia Stasi. Alta gastronomia e tradizione campana per matrimoni ed eventi a Salerno e Avellino." />
        <meta name="keywords" content="brigata cucina tenuta leone, cucina interna matrimoni salerno, chef matrimonio campania, alta gastronomia eventi avellino, ristorazione matrimoni salerno" />
        
        <meta property="og:title" content="La Brigata d'Autore | Cucina Interna d'Eccellenza | Tenuta Leone" />
        <meta property="og:description" content="Alta Gastronomia e Tradizione Campana: l'eccellenza firmata dalla Famiglia Stasi." />
        <meta property="og:image" content={`${BASE_URL}/img/brigata/c1.jpg`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/brigata" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="brigata-page direzione-page" data-testid="brigata-page">
        {/* Hero */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg_cucina.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">LA BRIGATA D'AUTORE</span>
              <h1 className="page-title">La Brigata: Il Cuore Pulsante della Nostra Cucina.</h1>
              <p className="page-subtitle">Alta Gastronomia e Tradizione Campana: l'eccellenza firmata dalla Famiglia Stasi.</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Testo Introduttivo */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">QUALITÀ E CONTROLLO</span>
                <h2>La Cucina Interna<br/><span className="highlight">della Famiglia Stasi</span></h2>
                <p className="lead-text">
                  A Tenuta Leone, il gusto non è un accessorio, ma l'essenza stessa dell'ospitalità. 
                  A differenza delle comuni location, la nostra Dimora vanta una cucina interna d'eccellenza 
                  gestita direttamente dalla Famiglia Stasi.
                </p>
                <p>
                  La nostra Brigata è un'orchestra sincronizzata che trasforma le migliori materie prime della 
                  Campania in opere d'arte gastronomiche. Scegliere la nostra cucina significa garantirsi il 
                  controllo totale sulla filiera, la freschezza assoluta delle preparazioni espresse e l'autenticità 
                  dei sapori del territorio di <strong>Salerno</strong> e <strong>Avellino</strong>.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/brigata/c5.jpg" 
                    alt="Brigata di cucina interna Tenuta Leone - Alta ristorazione per matrimoni Salerno" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - 3 Chef + Foto Squadra (NON MODIFICATA) */}
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

        {/* Il Valore della Tradizione */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block intro-block-reverse">
              <div className="intro-text-side">
                <span className="section-label">AUTORITÀ E MATERIA PRIMA</span>
                <h2>Materie Prime e<br/><span className="highlight">Identità Territoriale</span></h2>
                <p className="lead-text">
                  La nostra Brigata lavora seguendo i ritmi delle stagioni. Ogni menù è un viaggio tra i profumi 
                  del Mediterraneo, dove la tecnica moderna esalta la genuinità dei prodotti locali.
                </p>
                <p>
                  Dalla selezione delle farine per la panificazione interna alla scelta dei tagli di carne più pregiati 
                  e del pescato freschissimo, ogni piatto è una conferma della nostra Firma d'Autore. La brigata non 
                  si limita a cucinare: crea un'esperienza sensoriale che rimane impressa nei ricordi dei vostri ospiti.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/piatti/p1.jpg" 
                    alt="Dettaglio piatto gourmet della Famiglia Stasi - Cucina d'autore Campania" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Regia in Cucina */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">E-E-A-T / AFFIDABILITÀ</span>
                <h2>Coordinamento e<br/><span className="highlight">Passione Operativa</span></h2>
                <p className="lead-text">
                  Sotto la supervisione attenta della Famiglia Stasi, la Brigata di Tenuta Leone opera con 
                  una regia millimetrica.
                </p>
                <p>
                  La coordinazione tra sala e cucina è il segreto della nostra fluidità: tempi perfetti, temperature 
                  impeccabili e una presentazione visiva che anticipa il piacere del palato. Questo è il vantaggio 
                  di una struttura che vive della propria ristorazione: la sicurezza di un risultato costante, 
                  solido e inimitabile.
                </p>
                <Link to="/piatti" className="btn-primary" data-testid="brigata-piatti-btn">
                  SCOPRI I NOSTRI PIATTI
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <LazyImage 
                    src="/img/bg/bg_cucina.jpg" 
                    alt="Brigata di cucina interna Tenuta Leone - Alta ristorazione per matrimoni Salerno" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section cta-with-bg">
          <div className="cta-bg-image" style={{ backgroundImage: 'url(/img/package_bg_1.webp)' }}></div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content">
              <h2>Vuoi provare la nostra cucina?</h2>
              <p>Prenota una degustazione e lasciati conquistare dai nostri sapori.</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-outline" data-testid="brigata-contact-btn">
                  Prenota una Degustazione
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

export default BrigataPage;
