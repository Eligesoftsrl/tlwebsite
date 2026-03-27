import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://www.tenutaleone.it';

const FrontdeskPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Consulenza Eventi - Tenuta Leone",
    "description": "Team di consulenti dedicati per la progettazione del vostro evento a Tenuta Leone",
    "parentOrganization": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "url": BASE_URL
    },
    "member": [
      {
        "@type": "Person",
        "name": "Adele Celentano",
        "jobTitle": "Consulente di Progetto & Relazioni",
        "worksFor": {
          "@type": "Organization",
          "name": "Tenuta Leone"
        }
      },
      {
        "@type": "Person",
        "name": "Anna De Filippis",
        "jobTitle": "Consulente di Coordinamento & Supporto Eventi",
        "worksFor": {
          "@type": "Organization",
          "name": "Tenuta Leone"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Consulenza Eventi | Le Vostre Consulenti di Progetto | Tenuta Leone</title>
        <meta name="description" content="Adele Celentano e Anna De Filippis: le consulenti dedicate di Tenuta Leone per la progettazione del vostro evento a Salerno e in Campania." />
        <meta name="keywords" content="consulenza eventi salerno, wedding planner campania, organizzazione matrimoni, consulente eventi avellino" />
        
        <meta property="og:title" content="Consulenza Eventi | Le Vostre Consulenti di Progetto | Tenuta Leone" />
        <meta property="og:description" content="L'accoglienza d'autore inizia dall'ascolto e continua nel supporto costante." />
        <meta property="og:url" content={`${BASE_URL}/frontdesk`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/frontdesk" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="direzione-page frontdesk-page" data-testid="frontdesk-page">
        {/* Hero Section */}
        <section className="page-hero" style={{ backgroundImage: 'url(/img/slide/slide_2.jpg)' }}>
          <div className="page-hero-overlay"></div>
          <div className="container">
            <div className="page-hero-content">
              <span className="hero-label">CONSULENZA EVENTI</span>
              <h1 className="page-title">Diamo un Volto alla vostra Eccellenza.</h1>
              <p className="page-subtitle">L'accoglienza d'autore inizia dall'ascolto e continua nel supporto costante.</p>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scopri</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* Adele Celentano Section */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block">
              <div className="intro-text-side">
                <span className="section-label">CONSULENTE DI PROGETTO & RELAZIONI</span>
                <h2>Adele Celentano:<br/><span className="highlight">Il vostro primo punto di contatto</span></h2>
                <p className="lead-text">
                  "La mia missione è tradurre le vostre emozioni in una pianificazione impeccabile. 
                  In Tenuta Leone, il mio compito è assicurarmi che la vostra visione trovi lo spazio 
                  perfetto all'interno della nostra Dimora."
                </p>
                <p>
                  Adele rappresenta il primo punto di contatto e l'inizio del viaggio nel mondo Orocifrado. 
                  Con un approccio basato sull'ascolto empatico e sulla consulenza strategica, Adele si dedica 
                  a decodificare i desideri di ogni coppia e famiglia, trasformandoli in un progetto concreto e sostenibile.
                </p>
                <p>
                  La sua profonda conoscenza della Dimora Storica le permette di guidarvi nella scelta degli spazi 
                  più idonei, dal fascino del parco secolare alla solennità delle sale ottocentesche, garantendo che 
                  ogni evento a <strong>Salerno</strong> e provincia rifletta fedelmente l'identità di chi lo vive. 
                  Attraverso una gestione trasparente della fase di preventivazione e un'attenzione maniacale alla 
                  relazione interpersonale, Adele pone le basi per un evento d'eccellenza, assicurando che la 
                  Firma d'Autore di Tenuta Leone sia visibile fin dal primo incontro conoscitivo.
                </p>
                <p>
                  Il suo ruolo è fondamentale per chi cerca non una semplice location in <strong>Campania</strong>, 
                  ma un partner professionale capace di dare ordine e armonia ai sogni più ambiziosi.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <img src="/img/team/adele-celentano.jpg" alt="Adele Celentano - Consulente di Progetto Tenuta Leone" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anna De Filippis Section */}
        <section className="content-section">
          <div className="container">
            <div className="intro-block intro-block-reverse">
              <div className="intro-text-side">
                <span className="section-label">CONSULENTE DI COORDINAMENTO & SUPPORTO EVENTI</span>
                <h2>Anna De Filippis:<br/><span className="highlight">La garanzia di tranquillità</span></h2>
                <p className="lead-text">
                  "La vostra serenità è il mio obiettivo. Il mio ruolo è essere al vostro fianco per 
                  risolvere ogni necessità e coordinare ogni dettaglio, affinché possiate vivere il 
                  vostro giorno speciale senza pensieri."
                </p>
                <p>
                  Anna rappresenta il pilastro operativo e la garanzia di tranquillità per ogni coppia che sceglie 
                  la nostra Dimora Storica. Specializzata nel coordinamento logistico e nel supporto diretto, il suo 
                  compito è trasformare la pianificazione in una realtà fluida e impeccabile. Anna agisce come l'anello 
                  di congiunzione tra il vostro sogno e la complessa macchina organizzativa di Tenuta Leone, monitorando 
                  ogni fase con una presenza costante e rassicurante.
                </p>
                <p>
                  Dalla gestione dei fornitori esterni alla risoluzione immediata di qualsiasi necessità tecnica, 
                  Anna mette a disposizione la sua competenza per eliminare ogni fonte di stress. Il suo supporto 
                  costante garantisce che la Firma d'Autore si traduca in una regia millimetrica, dove ogni dettaglio 
                  — dal timing del banchetto nuziale all'allestimento degli spazi interni ed esterni — sia gestito 
                  con la massima precisione.
                </p>
                <p>
                  Affidarsi ad Anna significa avere una professionista dedicata che veglia sulla perfetta riuscita 
                  dell'evento a <strong>Salerno</strong> e in tutta la <strong>Campania</strong>, permettendo ai 
                  protagonisti di godersi ogni istante della festa con la certezza di un risultato d'eccellenza.
                </p>
              </div>
              <div className="intro-image-side">
                <div className="image-card">
                  <img src="/img/team/anna-de-filippis.jpg" alt="Anna De Filippis - Coordinamento e Supporto Eventi Tenuta Leone" />
                </div>
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
              <h2>Pronte ad accogliere il vostro progetto?</h2>
              <p>Iniziate il percorso con una consulenza dedicata insieme ad Adele e Anna</p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn-outline" data-testid="consulenza-cta">
                  Prenota una Consulenza
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

export default FrontdeskPage;
