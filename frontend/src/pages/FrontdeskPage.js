import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FrontdeskPage = () => {
  return (
    <>
      <Helmet>
        <title>Frontdesk | Team Tenuta Leone | Accoglienza Eventi Salerno</title>
        <meta name="description" content="Il team Frontdesk di Tenuta Leone: accoglienza professionale e assistenza dedicata per il vostro matrimonio ed evento in Campania." />
        <link rel="canonical" href="https://www.tenutaleone.it/frontdesk" />
      </Helmet>

      <main className="frontdesk-page" data-testid="frontdesk-page">
        {/* Hero Section */}
        <section className="page-hero frontdesk-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/slide/slide_2.jpg)' }}></div>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="container">
              <h1 className="page-title">Frontdesk - Accoglienza e Assistenza</h1>
              <p className="page-subtitle">Il vostro primo contatto con l'eccellenza</p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="coming-soon-section">
          <div className="container">
            <div className="coming-soon-content">
              <i className="fas fa-hard-hat"></i>
              <h2>Pagina in Costruzione</h2>
              <p>Stiamo preparando i contenuti per presentarvi il nostro team Frontdesk.</p>
              <p>Nel frattempo, non esitate a contattarci per qualsiasi informazione.</p>
              <Link to="/contatti" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Contattaci
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FrontdeskPage;
