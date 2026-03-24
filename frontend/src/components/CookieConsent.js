import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'tenuta_leone_cookie_consent';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(consent);
        setPreferences(savedPrefs);
      } catch (e) {
        // Invalid saved data, show banner
        setShowBanner(true);
      }
    }
  }, []);

  const saveConsent = (prefs) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    
    // Dispatch event for other components to react
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: prefs }));
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true
    });
  };

  const rejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-overlay" data-testid="cookie-consent">
      <div className={`cookie-consent-banner ${showSettings ? 'expanded' : ''}`}>
        {!showSettings ? (
          // Main Banner
          <>
            <div className="cookie-consent-content">
              <div className="cookie-consent-icon">
                <i className="fas fa-cookie-bite"></i>
              </div>
              <div className="cookie-consent-text">
                <h3>Questo sito utilizza i cookie</h3>
                <p>
                  Utilizziamo cookie tecnici e, con il tuo consenso, cookie di analisi e marketing per migliorare la tua esperienza. 
                  Puoi accettare tutti i cookie, rifiutarli o personalizzare le tue preferenze.
                </p>
                <Link to="/cookie-policy" className="cookie-policy-link">
                  Maggiori informazioni
                </Link>
              </div>
            </div>
            <div className="cookie-consent-actions">
              <button 
                onClick={rejectAll} 
                className="btn-cookie-reject"
                data-testid="cookie-reject"
              >
                Rifiuta tutti
              </button>
              <button 
                onClick={() => setShowSettings(true)} 
                className="btn-cookie-settings"
                data-testid="cookie-settings"
              >
                Personalizza
              </button>
              <button 
                onClick={acceptAll} 
                className="btn-cookie-accept"
                data-testid="cookie-accept"
              >
                Accetta tutti
              </button>
            </div>
          </>
        ) : (
          // Settings Panel
          <>
            <div className="cookie-settings-header">
              <h3>Impostazioni Cookie</h3>
              <button 
                onClick={() => setShowSettings(false)} 
                className="btn-close-settings"
                aria-label="Chiudi impostazioni"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="cookie-settings-content">
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>Cookie Essenziali</h4>
                    <p>Necessari per il funzionamento del sito. Non possono essere disabilitati.</p>
                  </div>
                  <div className="cookie-toggle disabled">
                    <input type="checkbox" checked disabled />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>Cookie Analitici</h4>
                    <p>Ci aiutano a capire come utilizzi il sito per migliorare l'esperienza.</p>
                  </div>
                  <div className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>Cookie di Marketing</h4>
                    <p>Utilizzati per mostrarti pubblicità pertinenti ai tuoi interessi.</p>
                  </div>
                  <div className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cookie-settings-actions">
              <button 
                onClick={rejectAll} 
                className="btn-cookie-reject"
              >
                Rifiuta tutti
              </button>
              <button 
                onClick={savePreferences} 
                className="btn-cookie-save"
              >
                Salva preferenze
              </button>
              <button 
                onClick={acceptAll} 
                className="btn-cookie-accept"
              >
                Accetta tutti
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
