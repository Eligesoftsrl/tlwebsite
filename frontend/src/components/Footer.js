import { Link } from 'react-router-dom';
import { siteConfig, navLinks } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About */}
            <div className="footer-col">
              <img src="/img/logo.svg" alt={siteConfig.name} className="footer-logo" />
              <p className="footer-about">
                Una dimora storica nel cuore della Campania, dove tradizione ed eleganza si uniscono per creare eventi indimenticabili.
              </p>
              <div className="footer-social">
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-title">Link Rapidi</h4>
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-title">I Nostri Eventi</h4>
              <ul className="footer-links">
                <li><Link to="/contatti">Matrimoni</Link></li>
                <li><Link to="/contatti">Comunioni</Link></li>
                <li><Link to="/contatti">Battesimi</Link></li>
                <li><Link to="/contatti">Eventi Aziendali</Link></li>
                <li><Link to="/tour">Tour Virtuale</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-title">Contatti</h4>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Via Roma, 19<br />
                    84080 Calvanico (SA)
                  </span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+39089957360">+39 089 957360</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:segreteria.tenutaleone@orocifradogroup.it">segreteria.tenutaleone@orocifradogroup.it</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-company">
              <p>&copy; {currentYear} {siteConfig.name} - Orocifrado Group S.R.L.</p>
              <p className="footer-vat">P.IVA: 05920120655</p>
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
