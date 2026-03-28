import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { siteConfig, eventTypes } from '../data/siteData';

// In produzione (Vercel) usa il proxy API, altrimenti chiama direttamente
const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api/contact' 
  : 'https://www.tenutaleone.eliclient.it/api/nuova_richiesta';
const BASE_URL = 'https://www.tenutaleone.it';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      setSubmitStatus({ success: false, message: 'Devi accettare la Privacy Policy per inviare il messaggio.' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Dati per il gestionale
      const gestionalData = {
        nome_cliente: formData.name.trim(),
        data_evento: formData.eventDate || "",
        telefono: formData.phone.trim() || "",
        email: formData.email.trim(),
        numero_invitati: formData.guests || "",
        cerca: formData.eventType || "Informazioni",
        messaggio: formData.message.trim() || "Richiesta informazioni dal sito"
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gestionalData)
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Grazie per averci contattato! Ti risponderemo al più presto.' 
        });
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          eventType: '', 
          eventDate: '', 
          guests: '', 
          message: '',
          privacyAccepted: false 
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Si è verificato un errore nell\'invio. Per favore riprova.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Si è verificato un errore. Per favore riprova più tardi.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured data for Contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contatti - Tenuta Leone",
    "description": "Contatta Tenuta Leone per informazioni su matrimoni ed eventi. Richiedi un preventivo gratuito o prenota una visita alla nostra dimora storica a Salerno.",
    "url": `${BASE_URL}/contatti`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Tenuta Leone",
      "telephone": "+39089957360",
      "email": "info@tenutaleone.it",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Roma, 19",
        "addressLocality": "Calvanico",
        "addressRegion": "SA",
        "postalCode": "84080",
        "addressCountry": "IT"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contatti e Preventivi | Tenuta Leone - Location Matrimoni Salerno</title>
        <meta name="description" content="Contatta Tenuta Leone per matrimoni ed eventi a Salerno. Richiedi preventivo gratuito, prenota visita guidata. Tel: +39 089 957360. Location esclusiva in Campania." />
        <meta name="keywords" content="contatti tenuta leone, preventivo matrimonio salerno, prenotare location campania, visita location matrimonio, contatti eventi salerno" />
        
        <meta property="og:title" content="Contatti | Tenuta Leone - Matrimoni Salerno" />
        <meta property="og:description" content="Richiedi un preventivo gratuito per il tuo matrimonio o evento. Visita guidata su appuntamento." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_1.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/contatti`} />
        
        <link rel="canonical" href="https://www.tenutaleone.it/contatti" />
        
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <main className="contact-page" data-testid="contact-page">
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url(/img/slide/slide_1.jpg)' }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">Contattaci - Location Eventi a Salerno</h1>
            <nav className="breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Contatti</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <h2 className="section-title">Parliamo del tuo evento</h2>
              <p className="contact-intro">
                Siamo qui per rispondere a tutte le tue domande e aiutarti a pianificare il giorno perfetto.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card" data-testid="contact-address">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Indirizzo</h4>
                    <p>
                      {siteConfig.address.street}<br />
                      {siteConfig.address.zip} {siteConfig.address.city} ({siteConfig.address.province})
                    </p>
                  </div>
                </div>

                <div className="contact-info-card" data-testid="contact-phone">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-content">
                    <h4>Telefono</h4>
                    <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                    <br />
                    <a href="tel:+39089957371">+39 089 957371</a>
                    <br />
                    <a href="tel:+393452294361">+39 345 229 4361</a>
                  </div>
                </div>

                <div className="contact-info-card" data-testid="contact-email">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form" data-testid="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      data-testid="contact-phone-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="eventType">Tipo di Evento</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    data-testid="contact-event-select"
                  >
                    <option value="">Seleziona tipo evento</option>
                    {eventTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventDate">Data Evento</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      data-testid="contact-date-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Numero Invitati</label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      placeholder="es. 100"
                      value={formData.guests}
                      onChange={handleChange}
                      data-testid="contact-guests-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Raccontaci il tuo evento..."
                    value={formData.message}
                    onChange={handleChange}
                    data-testid="contact-message-input"
                  ></textarea>
                </div>

                <div className="privacy-checkbox">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    data-testid="contact-privacy-checkbox"
                  />
                  <label htmlFor="privacyAccepted">
                    Ho letto e accetto la <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> e acconsento al trattamento dei miei dati personali per le finalità indicate. *
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary btn-full"
                  disabled={isSubmitting || !formData.privacyAccepted}
                  data-testid="contact-submit-btn"
                >
                  {isSubmitting ? 'Invio in corso...' : 'INVIA MESSAGGIO'}
                </button>

                {submitStatus && (
                  <div className={`form-status ${submitStatus.type}`} data-testid="contact-form-status">
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.2!2d${siteConfig.coordinates.lng}!3d${siteConfig.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ2JzM0LjYiTiAxNMKwNDknNDYuMiJF!5e0!3m2!1sit!2sit!4v1234567890`}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tenuta Leone Location"
        ></iframe>
      </section>
    </main>
    </>
  );
};

export default ContactPage;
