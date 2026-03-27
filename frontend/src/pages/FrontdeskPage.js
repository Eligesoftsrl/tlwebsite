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

      <main className="frontdesk-page" data-testid="frontdesk-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/slide/slide_2.jpg)' }}></div>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="container">
              <div className="page-hero-text-center">
                <span className="hero-label">CONSULENZA EVENTI</span>
                <h1 className="page-title">Diamo un Volto alla vostra Eccellenza.</h1>
                <h2 className="page-subtitle-h2">L'accoglienza d'autore inizia dall'ascolto e continua nel supporto costante.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Team Profiles Section */}
        <section className="content-section team-profiles-section">
          <div className="container">
            <div className="team-profiles-grid">
              
              {/* Adele Celentano */}
              <div className="team-profile-card">
                <div className="profile-header">
                  <div className="profile-image-circle">
                    <img src="/img/team/adele-celentano.jpg" alt="Adele Celentano Consulente Progetto Tenuta Leone" />
                  </div>
                  <div className="profile-header-text">
                    <h3 className="profile-name">Adele Celentano</h3>
                    <p className="profile-role">Consulente di Progetto & Relazioni</p>
                  </div>
                </div>
                <div className="profile-content">
                  <blockquote className="profile-quote">
                    "La mia missione è tradurre le vostre emozioni in una pianificazione impeccabile. 
                    In Tenuta Leone, il mio compito è assicurarmi che la vostra visione trovi lo spazio 
                    perfetto all'interno della nostra Dimora."
                  </blockquote>
                  <p className="profile-description">
                    Adele rappresenta il primo punto di contatto e l'inizio del viaggio nel mondo Orocifrado. 
                    Con un approccio basato sull'ascolto empatico e sulla consulenza strategica, Adele si dedica 
                    a decodificare i desideri di ogni coppia e famiglia, trasformandoli in un progetto concreto e sostenibile.
                  </p>
                  <p className="profile-description">
                    La sua profonda conoscenza della Dimora Storica le permette di guidarvi nella scelta degli spazi 
                    più idonei, dal fascino del parco secolare alla solennità delle sale ottocentesche, garantendo che 
                    ogni evento a <strong>Salerno</strong> e provincia rifletta fedelmente l'identità di chi lo vive. 
                    Attraverso una gestione trasparente della fase di preventivazione e un'attenzione maniacale alla 
                    relazione interpersonale, Adele pone le basi per un evento d'eccellenza, assicurando che la 
                    Firma d'Autore di Tenuta Leone sia visibile fin dal primo incontro conoscitivo.
                  </p>
                  <p className="profile-description">
                    Il suo ruolo è fondamentale per chi cerca non una semplice location in <strong>Campania</strong>, 
                    ma un partner professionale capace di dare ordine e armonia ai sogni più ambiziosi.
                  </p>
                </div>
              </div>

              {/* Anna De Filippis */}
              <div className="team-profile-card">
                <div className="profile-header">
                  <div className="profile-image-circle">
                    <img src="/img/team/anna-de-filippis.jpg" alt="Anna De Filippis Coordinamento e Supporto Eventi Tenuta Leone" />
                  </div>
                  <div className="profile-header-text">
                    <h3 className="profile-name">Anna De Filippis</h3>
                    <p className="profile-role">Consulente di Coordinamento & Supporto Eventi</p>
                  </div>
                </div>
                <div className="profile-content">
                  <blockquote className="profile-quote">
                    "La vostra serenità è il mio obiettivo. Il mio ruolo è essere al vostro fianco per 
                    risolvere ogni necessità e coordinare ogni dettaglio, affinché possiate vivere il 
                    vostro giorno speciale senza pensieri."
                  </blockquote>
                  <p className="profile-description">
                    Anna rappresenta il pilastro operativo e la garanzia di tranquillità per ogni coppia che sceglie 
                    la nostra Dimora Storica. Specializzata nel coordinamento logistico e nel supporto diretto, il suo 
                    compito è trasformare la pianificazione in una realtà fluida e impeccabile. Anna agisce come l'anello 
                    di congiunzione tra il vostro sogno e la complessa macchina organizzativa di Tenuta Leone, monitorando 
                    ogni fase con una presenza costante e rassicurante.
                  </p>
                  <p className="profile-description">
                    Dalla gestione dei fornitori esterni alla risoluzione immediata di qualsiasi necessità tecnica, 
                    Anna mette a disposizione la sua competenza per eliminare ogni fonte di stress. Il suo supporto 
                    costante garantisce che la Firma d'Autore si traduca in una regia millimetrica, dove ogni dettaglio 
                    — dal timing del banchetto nuziale all'allestimento degli spazi interni ed esterni — sia gestito 
                    con la massima precisione.
                  </p>
                  <p className="profile-description">
                    Affidarsi ad Anna significa avere una professionista dedicata che veglia sulla perfetta riuscita 
                    dell'evento a <strong>Salerno</strong> e in tutta la <strong>Campania</strong>, permettendo ai 
                    protagonisti di godersi ogni istante della festa con la certezza di un risultato d'eccellenza.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="team-cta">
              <Link to="/contatti" className="btn-primary btn-large" data-testid="consulenza-cta">
                <i className="fas fa-calendar-check"></i>
                Prenota una Consulenza con Adele e Anna
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FrontdeskPage;
