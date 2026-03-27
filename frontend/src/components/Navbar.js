import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteData';

// Menu structure con sottomenu
const menuStructure = [
  { label: "Home", path: "/" },
  { 
    label: "La Dimora", 
    path: "/tour",
    submenu: [
      { label: "Tour Virtuale 360°", path: "/tour" }
    ]
  },
  { 
    label: "La Cucina", 
    path: "/piatti"
  },
  { 
    label: "Gli Eventi", 
    path: "/matrimoni-autore-salerno",
    submenu: [
      { label: "Matrimoni d'Autore", path: "/matrimoni-autore-salerno" },
      { label: "Comunioni e Battesimi", path: "/comunioni-battesimi-campania" },
      { label: "Feste e Ricorrenze", path: "/feste-laurea-salerno" },
      { label: "Eventi Aziendali e Gala", path: "/eventi-aziendali-salerno" }
    ]
  },
  { 
    label: "Il Team", 
    path: "/direzione",
    submenu: [
      { label: "La Direzione", path: "/direzione", subtitle: "La Regia" },
      { label: "Consulenza Eventi", path: "/frontdesk", subtitle: "Front Desk" },
      { label: "La Brigata", path: "/brigata", subtitle: "L'Eccellenza a tavola" },
      { label: "La Pasticceria", path: "/pasticceria", subtitle: "L'Arte della Dolcezza" }
    ]
  },
  { label: "Contatti", path: "/contatti" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.submenu) {
      return item.submenu.some(sub => location.pathname === sub.path);
    }
    return false;
  };

  const toggleMobileSubmenu = (label) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} data-testid="navbar">
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="container">
          <div className="navbar-top-inner">
            <div className="contact-info">
              <a href={`tel:${siteConfig.phone}`} data-testid="phone-link">
                <i className="fas fa-phone"></i>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} data-testid="email-link">
                <i className="fas fa-envelope"></i>
                {siteConfig.email}
              </a>
            </div>
            <div className="social-links">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="navbar-main">
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" className="logo" data-testid="logo-link">
              <img src="/img/logo.svg" alt={siteConfig.name} />
            </Link>

            {/* Desktop Menu */}
            <ul className="nav-menu desktop-menu">
              {menuStructure.map((item) => (
                <li 
                  key={item.label} 
                  className={`nav-item ${item.submenu ? 'has-submenu' : ''} ${isActive(item) ? 'active' : ''}`}
                >
                  {item.submenu ? (
                    <>
                      <span className="nav-link">
                        {item.label}
                        <i className="fas fa-chevron-down"></i>
                      </span>
                      <ul className="submenu">
                        {item.submenu.map((sub) => (
                          <li key={sub.path}>
                            <Link 
                              to={sub.path} 
                              className={location.pathname === sub.path ? 'active' : ''}
                            >
                              {sub.label}
                              {sub.subtitle && <small>{sub.subtitle}</small>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <Link to="/contatti" className="btn-booking" data-testid="booking-btn">
                <i className="fas fa-calendar-check"></i>
                Prenota
              </Link>
              
              <button 
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
                data-testid="mobile-menu-toggle"
              >
                <span className={isMobileMenuOpen ? 'open' : ''}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} data-testid="mobile-menu">
        <ul className="nav-menu">
          {menuStructure.map((item) => (
            <li key={item.label} className={`mobile-nav-item ${item.submenu ? 'has-submenu' : ''}`}>
              {item.submenu ? (
                <>
                  <button 
                    className={`mobile-nav-link ${activeSubmenu === item.label ? 'open' : ''}`}
                    onClick={() => toggleMobileSubmenu(item.label)}
                  >
                    {item.label}
                    <i className={`fas fa-chevron-${activeSubmenu === item.label ? 'up' : 'down'}`}></i>
                  </button>
                  <ul className={`mobile-submenu ${activeSubmenu === item.label ? 'open' : ''}`}>
                    {item.submenu.map((sub) => (
                      <li key={sub.path}>
                        <Link 
                          to={sub.path} 
                          className={location.pathname === sub.path ? 'active' : ''}
                        >
                          {sub.label}
                          {sub.subtitle && <small>{sub.subtitle}</small>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
