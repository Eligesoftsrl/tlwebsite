import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://www.tenutaleone.it';

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Tenuta Leone - Location Matrimoni Salerno</title>
        <meta name="description" content="Informativa sull'utilizzo dei cookie sul sito Tenuta Leone, ai sensi del GDPR e della normativa italiana ed europea." />
        <link rel="canonical" href="https://www.tenutaleone.it/cookie-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="legal-page" data-testid="cookie-page">
        <div className="legal-hero">
          <div className="container">
            <h1>Cookie Policy</h1>
            <p>Informativa sull'utilizzo dei Cookie</p>
          </div>
        </div>

        <div className="legal-content">
          <div className="container">
            <div className="legal-text">
              <p className="legal-intro">
                Questo sito utilizza cookie tecnici e di profilazione propri e di terze parti per le sue funzionalità e per inviarti pubblicità e servizi in linea con le tue preferenze.
              </p>

              <h2>Cosa sono i Cookie</h2>
              <p>
                I cookie sono file di testo che vengono registrati sul terminale dell'utente oppure che consentono l'accesso ad informazioni sul terminale dell'utente. I cookie permettono di conservare informazioni sulle preferenze dei visitatori, sono utilizzati al fine di verificare il corretto funzionamento del sito e di migliorarne le funzionalità.
              </p>

              <h2>Tipologie di Cookie Utilizzati</h2>
              
              <h3>Cookie Tecnici (Essenziali)</h3>
              <p>
                Utilizzati al solo fine di effettuare la trasmissione di una comunicazione elettronica, per garantire la corretta visualizzazione del sito e la navigazione. Consentono di distinguere tra i vari utenti collegati e per motivi di sicurezza. <strong>Per questi cookie non occorre consenso.</strong>
              </p>

              <h3>Cookie di Analisi (Statistici)</h3>
              <p>
                Utilizzati per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito. Sono assimilati ai cookie tecnici se il servizio è anonimizzato.
              </p>

              <h3>Cookie di Profilazione (Marketing)</h3>
              <p>
                Utilizzati esclusivamente da terze parti per raccogliere informazioni sul comportamento degli utenti durante la navigazione, al fine di fornire pubblicità personalizzata. <strong>Questi cookie richiedono il consenso espresso.</strong>
              </p>

              <h2>Cookie di Terze Parti</h2>

              <h3>Google Analytics</h3>
              <p>
                Servizio di analisi web fornito da Google Inc. Utilizzato per analizzare l'uso del sito, compilare report sulle attività e sul comportamento degli utenti. I dati sono trattati in forma aggregata e anonimizzata.
              </p>
              <p>
                <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer">Privacy Policy Google</a> | 
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"> Opt-out</a>
              </p>

              <h3>YouTube</h3>
              <p>
                Piattaforma di proprietà di Google per la condivisione di video. Per i video presenti sul sito è stata attivata l'opzione "privacy avanzata" che impedisce la memorizzazione di informazioni sui visitatori a meno che non riproducano volontariamente il video.
              </p>
              <p>
                <a href="https://www.google.com/intl/it/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </p>

              <h3>Facebook</h3>
              <p>
                Pulsanti e widget sociali di Facebook per l'interazione con il social network.
              </p>
              <p>
                <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy Facebook</a>
              </p>

              <h2>Gestione dei Cookie</h2>
              <p>
                L'utente può rifiutare l'utilizzo dei cookie e in qualsiasi momento può revocare un consenso già fornito attraverso:
              </p>
              <ul>
                <li>Il banner di gestione cookie presente sul sito</li>
                <li>Le impostazioni del proprio browser</li>
              </ul>

              <h3>Disabilitazione tramite Browser</h3>
              <p>Le istruzioni per la disabilitazione dei cookie si trovano alle seguenti pagine:</p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">Opera</a></li>
              </ul>

              <div className="cookie-warning">
                <i className="fas fa-exclamation-triangle"></i>
                <p>
                  <strong>Attenzione:</strong> La disabilitazione dei cookie potrebbe impedire il corretto utilizzo di alcune funzioni del sito, in particolare video di YouTube, social button e mappe di Google potrebbero non essere visualizzabili.
                </p>
              </div>

              <h2>Aggiornamenti</h2>
              <p>
                La presente Cookie Policy può subire modifiche nel tempo. Si consiglia di consultare periodicamente questa pagina per essere aggiornati sulle ultime novità.
              </p>

              <div className="legal-updated">
                <p><em>Ultimo aggiornamento: Dicembre 2025</em></p>
              </div>

              <div className="legal-nav">
                <Link to="/privacy-policy" className="btn-outline">
                  <i className="fas fa-arrow-left"></i>
                  Leggi Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CookiePolicyPage;
