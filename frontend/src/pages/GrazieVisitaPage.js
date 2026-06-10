import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.tenutaleone.it';

const trackWhatsApp = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', { event_category: 'engagement' });
  }
};

const GrazieVisitaPage = () => {
  return (
    <>
      <Helmet>
        <title>Grazie per la richiesta | Tenuta Leone</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${BASE_URL}/grazie-visita`} />
      </Helmet>

      <header className="lp-header">
        <a href="/" className="lp-logo">
          <img src="/img/logo.svg" alt="Tenuta Leone" />
        </a>
        <a href="tel:+39089957360" className="lp-phone">
          <i className="fas fa-phone"></i>
          <span>+39 089 957360</span>
        </a>
      </header>

      <main className="landing-page grazie-page" data-testid="grazie-page">
        <section className="lp-grazie-hero">
          <div className="lp-grazie-content">
            <div className="lp-grazie-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1>Grazie per averci contattato!</h1>
            <p className="lp-grazie-text">La vostra richiesta è stata ricevuta. Vi ricontatteremo entro 24 ore per fissare la vostra visita privata a Tenuta Leone.</p>
            <p className="lp-grazie-sub">Nel frattempo, potete scriverci direttamente su WhatsApp per qualsiasi domanda.</p>
            <a
              href={`https://wa.me/393452294361?text=${encodeURIComponent('Ciao! Ho appena inviato una richiesta di visita tramite il sito. Volevo confermare la ricezione.')}`}
              target="_blank" rel="noopener noreferrer"
              className="lp-btn-whatsapp lp-grazie-wa"
              onClick={trackWhatsApp}
              data-testid="grazie-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> Scrivici su WhatsApp
            </a>
            <a href="/" className="lp-grazie-home" data-testid="grazie-home">
              <i className="fas fa-arrow-left"></i> Torna al sito
            </a>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-container">
          <img src="/img/logo.svg" alt="Tenuta Leone" className="lp-footer-logo" />
          <p>Via Roma 19, 84080 Calvanico (SA) &middot; Tel <a href="tel:+39089957360">+39 089 957360</a></p>
          <p>P.IVA 05920120655</p>
          <div className="lp-footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GrazieVisitaPage;
