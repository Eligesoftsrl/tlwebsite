import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://tenutaleone.it';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tenuta Leone - Location Matrimoni Salerno</title>
        <meta name="description" content="Informativa sulla privacy e trattamento dei dati personali di Tenuta Leone, ai sensi del GDPR e della normativa italiana." />
        <link rel="canonical" href={`${BASE_URL}/privacy-policy`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="legal-page" data-testid="privacy-page">
        <div className="legal-hero">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Informativa sul Trattamento dei Dati Personali</p>
          </div>
        </div>

        <div className="legal-content">
          <div className="container">
            <div className="legal-text">
              <p className="legal-intro">
                Gent. utente, in questa sezione sono contenute le informazioni relative al trattamento dei dati personali degli utenti del sito www.tenutaleone.it.
              </p>
              <p>
                La presente informativa ha valore anche ai fini dell'articolo 13 del Regolamento UE n. 2016/679 (GDPR), relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali nonché alla circolazione di tali dati.
              </p>

              <h2>Titolare del Trattamento</h2>
              <p>
                Il titolare del trattamento è la <strong>Orocifrado Group S.R.L.</strong>, con sede legale in Via Roma, 19, 84080 Calvanico (SA).<br />
                P.IVA: 05920120655<br />
                Email: <a href="mailto:info@orocifradogroup.it">info@orocifradogroup.it</a><br />
                Telefono: +39 089 957360
              </p>

              <h2>Luoghi del Trattamento</h2>
              <p>
                I dati personali trattati dalla Orocifrado Group S.R.L. attraverso il sito www.tenutaleone.it sono esaminati presso le sedi operative del Titolare e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.
              </p>

              <h2>Tipologia di Dati Trattati</h2>
              <p>Le categorie di dati degli utenti che il presente servizio raccoglie sono:</p>
              <h3>Dati conferiti volontariamente</h3>
              <p>Il sito può raccogliere dati in caso di utilizzo volontario di servizi da parte degli utenti, quali:</p>
              <ul>
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Informazioni sull'evento (data, numero invitati, tipologia)</li>
              </ul>

              <h2>Finalità del Trattamento</h2>
              <p>I dati personali che ci fornisce saranno utilizzati per:</p>
              <ol type="a">
                <li>Esecuzione del servizio e di tutte le attività ad esso connesse</li>
                <li>Adempimento degli obblighi previsti dalla legge, regolamenti e normativa applicabile</li>
                <li>Raccolta di dati in forma aggregata e anonima per verificare il funzionamento del sito</li>
                <li>Svolgimento di attività di marketing e promozionali (previo consenso espresso)</li>
              </ol>

              <h2>Base Giuridica del Trattamento</h2>
              <p>
                Le finalità di cui ai punti a) e b) non necessitano del consenso espresso dell'utente.<br />
                Le finalità di marketing di cui al punto d) richiedono il consenso espresso dell'utente.
              </p>

              <h2>Modalità di Trattamento</h2>
              <p>
                Il Titolare utilizza adeguate misure di sicurezza per evitare accesso, divulgazione, modifica o distruzione illecita dei Dati Personali. Il trattamento avviene con strumenti informatici e/o telematici.
              </p>

              <h2>Comunicazione e Diffusione</h2>
              <p>I dati personali potranno essere comunicati a:</p>
              <ul>
                <li>Soggetti a cui tale comunicazione è necessaria per adempiere obblighi di legge</li>
                <li>Società appartenenti al Gruppo del Titolare</li>
                <li>Fornitori e consulenti esterni che operano come responsabili del trattamento</li>
              </ul>

              <h2>Trasferimento dei Dati</h2>
              <p>
                I dati rilevati dal sito generalmente non vengono forniti a terzi, tranne che in casi specifici: legittima richiesta da parte dell'autorità giudiziaria, necessità per la fornitura di uno specifico servizio, esecuzione di controlli di sicurezza.
              </p>
              <p>
                Il presente servizio potrebbe condividere alcuni dei dati raccolti con servizi localizzati al di fuori dell'area dell'Unione Europea (Google, Facebook) tramite social plugin e Google Analytics. Il trasferimento è autorizzato in base a specifiche decisioni dell'Unione Europea.
              </p>

              <h2>Periodo di Conservazione</h2>
              <p>
                I dati personali saranno conservati per l'intera durata dell'utilizzo del servizio e, successivamente, non oltre dieci (10) anni. I dati per finalità statistiche sono conservati in forma aggregata per 72 mesi.
              </p>

              <h2>Diritti dell'Interessato</h2>
              <p>L'utente ha diritto di:</p>
              <ul>
                <li>Ottenere conferma dell'esistenza di dati personali che lo riguardano</li>
                <li>Conoscere l'origine, le finalità e le modalità del trattamento</li>
                <li>Ottenere l'aggiornamento, la rettifica o la cancellazione dei dati</li>
                <li>Opporsi al trattamento per motivi legittimi</li>
                <li>Proporre reclamo all'Autorità Garante per la Privacy</li>
              </ul>

              <h2>Esercizio dei Diritti</h2>
              <p>
                Per l'esercizio dei diritti o per informazioni sul trattamento dei dati, contattare:<br /><br />
                <strong>Orocifrado Group S.R.L.</strong><br />
                Via Roma, 19<br />
                84080 Calvanico (SA)<br />
                P.IVA: 05920120655<br />
                Tel: +39 089 957360<br />
                Email: <a href="mailto:info@orocifradogroup.it">info@orocifradogroup.it</a>
              </p>

              <div className="legal-updated">
                <p><em>Ultimo aggiornamento: Dicembre 2025</em></p>
              </div>

              <div className="legal-nav">
                <Link to="/cookie-policy" className="btn-outline">
                  Leggi Cookie Policy
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
