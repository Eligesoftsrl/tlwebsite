import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import './LandingVisita.css';

const BASE_URL = 'https://www.tenutaleone.it';

const LandingVisitaPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', guests: '', message: '', privacyAccepted: false, honeypot: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitTime] = useState(Date.now());

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Anti-spam: honeypot field must be empty
    if (formData.honeypot) return;
    
    // Anti-spam: form must be filled in at least 3 seconds
    if (Date.now() - submitTime < 3000) return;

    if (!formData.privacyAccepted) return;

    try {
      const gestionalData = {
        nome_cliente: formData.name.trim(),
        data_evento: formData.date || "",
        telefono: formData.phone.trim(),
        email: formData.email.trim(),
        numero_invitati: formData.guests || "",
        cerca: "Matrimonio",
        messaggio: formData.message.trim() || `Richiesta visita in struttura. Ospiti: ${formData.guests}`,
        fonte: "landing page"
      };

      await fetch('https://eliclient-production.up.railway.app/api/nuova_richiesta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gestionalData)
      });
    } catch (err) {
      // silent fail - redirect anyway
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'form',
        event_label: 'visita_matrimonio'
      });
    }
    setSubmitted(true);
    setTimeout(() => navigate('/grazie-visita'), 2000);
  };

  const trackWhatsApp = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', { event_category: 'engagement' });
    }
  };

  const trackPhone = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'phone_click', { event_category: 'engagement' });
    }
  };

  const scrollToForm = () => {
    document.getElementById('landing-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Tenuta Leone",
    "description": "Dimora storica per matrimoni ed eventi a Calvanico, Salerno. Cucina interna, wedding consultant, suite sposi e regia completa del vostro evento.",
    "url": `${BASE_URL}/visita-matrimonio`,
    "telephone": "+39089957360",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Roma, 19",
      "addressLocality": "Calvanico",
      "addressRegion": "SA",
      "postalCode": "84080",
      "addressCountry": "IT"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "40.776270", "longitude": "14.829491" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "156", "bestRating": "5" },
    "image": `${BASE_URL}/img/slide/slide_1.jpg`
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanti ospiti può accogliere la dimora?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le Sale Ottocentesche e il porticato accolgono con eleganza sia matrimoni intimi sia grandi ricevimenti oltre i 120 invitati, modulando gli spazi sul vostro numero di ospiti." }
      },
      {
        "@type": "Question",
        "name": "Possiamo celebrare il rito civile in struttura?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì, Tenuta Leone permette di celebrare il rito civile direttamente in dimora, mantenendo l'intera giornata in un unico scenario, sotto la nostra regia." }
      },
      {
        "@type": "Question",
        "name": "La visita è davvero gratuita e senza impegno?",
        "acceptedAnswer": { "@type": "Answer", "text": "Assolutamente sì. La visita privata e il preventivo personalizzato sono gratuiti e non vi vincolano in alcun modo." }
      },
      {
        "@type": "Question",
        "name": "Dove si trova esattamente la tenuta?",
        "acceptedAnswer": { "@type": "Answer", "text": "A Calvanico (SA), a 20 minuti da Salerno e facilmente raggiungibile da Avellino e Napoli tramite l'A3, uscita Fisciano-Lancusi. Parcheggio riservato e gratuito." }
      },
      {
        "@type": "Question",
        "name": "Con quanto anticipo conviene prenotare la data?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le date più richieste si riservano anche con 12-18 mesi di anticipo. Venire in visita presto vi garantisce la massima scelta sul calendario." }
      }
    ]
  };

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>Location Matrimoni Salerno | Prenota la Visita a Tenuta Leone</title>
        <meta name="description" content="Cercate la location per il vostro matrimonio a Salerno? Prenotate una visita privata gratuita a Tenuta Leone: dimora storica, cucina interna e regia completa del vostro evento." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Location Matrimoni Salerno | Prenota la Visita a Tenuta Leone" />
        <meta property="og:description" content="Prenotate una visita privata gratuita a Tenuta Leone, dimora storica per matrimoni a Salerno." />
        <meta property="og:image" content={`${BASE_URL}/img/slide/slide_1.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/visita-matrimonio`} />
        <link rel="canonical" href={`${BASE_URL}/visita-matrimonio`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      {/* Minimal Header */}
      <header className="lp-header" data-testid="lp-header">
        <a href="/" className="lp-logo">
          <img src="/img/logo.svg" alt="Tenuta Leone" />
        </a>
        <a href="tel:+39089957360" className="lp-phone" onClick={trackPhone} data-testid="lp-phone">
          <i className="fas fa-phone"></i>
          <span>+39 089 957360</span>
        </a>
      </header>

      <main className="landing-page" data-testid="landing-page">

        {/* HERO + FORM */}
        <section className="lp-hero" data-testid="lp-hero">
          <div className="lp-hero-bg">
            <img src="/img/slide/slide_1.jpg" alt="Tenuta Leone dimora storica location matrimoni Salerno" />
          </div>
          <div className="lp-hero-overlay"></div>
          <div className="lp-hero-content">
            <div className="lp-hero-top">
              <div className="lp-hero-text">
                <div className="lp-deadline-badge" data-testid="lp-deadline">
                  <i className="fas fa-clock"></i> Prenota online la tua visita privata entro il <strong>31.07.2026</strong>
                </div>
                <h1 data-testid="lp-h1">Il vostro matrimonio merita una Firma d'Autore. Venite a scoprirla dal vivo.</h1>
                <p className="lp-hero-sub">Scopri Tenuta Leone, dove ogni evento vive in totale esclusiva: <strong>un solo ricevimento al giorno</strong>, l'intera struttura interamente riservata a te e ai tuoi ospiti.</p>
              </div>
              <div className="lp-hero-perks" data-testid="lp-signature">
                <span className="lp-perks-label">SIGNATURE EVENT EXPERIENCE</span>
                <p className="lp-perks-intro">Con la conferma del tuo evento, riceverai:</p>
                <div className="lp-perks-list">
                  <div className="lp-perk"><i className="fas fa-concierge-bell"></i><span><strong>Exclusive Stay</strong> — Una notte nella suite riservata</span></div>
                  <div className="lp-perk"><i className="fas fa-champagne-glasses"></i><span><strong>Private Breakfast</strong> — Colazione esclusiva il mattino dopo</span></div>
                  <div className="lp-perk"><i className="fas fa-seedling"></i><span><strong>Floral Elegance</strong> — Allestimento floreale per tutti i tavoli</span></div>
                  <div className="lp-perk"><i className="fas fa-scroll"></i><span><strong>Signature Menu</strong> — Personalizzazione completa dei menù</span></div>
                  <div className="lp-perk lp-perk-highlight"><i className="fas fa-gift"></i><span><strong>Voucher €200</strong> — Credito per servizi aggiuntivi</span></div>
                </div>
                <p className="lp-perks-deadline">Riservato a chi prenota la visita online <strong>entro il 31 luglio 2026</strong>.</p>
              </div>
            </div>

            {/* TRUST BAR */}
            <div className="lp-trust-inline" data-testid="lp-trust-bar">
              <div className="lp-trust-item"><i className="fas fa-star"></i> 5.0 su Google &middot; 156 recensioni</div>
              <div className="lp-trust-item"><i className="fas fa-award"></i> Oltre 30 anni di esperienza</div>
              <div className="lp-trust-item"><i className="fas fa-handshake"></i> Visita senza impegno</div>
              <div className="lp-trust-item"><i className="fas fa-file-invoice"></i> Preventivo gratuito</div>
            </div>

            <div className="lp-form-card" id="landing-form" data-testid="lp-form-card">
              {!submitted ? (
                <form onSubmit={handleSubmit} data-testid="lp-form">
                  <h2 className="lp-form-title">Prenota la tua visita gratuita</h2>
                  <div className="lp-form-group">
                    <input type="text" name="name" placeholder="Nome e Cognome" value={formData.name} onChange={handleChange} required data-testid="lp-name" />
                  </div>
                  <div className="lp-form-row">
                    <input type="tel" name="phone" placeholder="Telefono" value={formData.phone} onChange={handleChange} required data-testid="lp-phone-input" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required data-testid="lp-email" />
                  </div>
                  <div className="lp-form-row">
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required data-testid="lp-date" />
                    <select name="guests" value={formData.guests} onChange={handleChange} required data-testid="lp-guests">
                      <option value="" disabled>N. ospiti</option>
                      <option value="0-60">0-60</option>
                      <option value="60-90">60-90</option>
                      <option value="90-120">90-120</option>
                      <option value="120+">Oltre 120</option>
                    </select>
                  </div>
                  <div className="lp-form-group">
                    <textarea name="message" placeholder="Messaggio (opzionale)" rows="2" value={formData.message} onChange={handleChange} data-testid="lp-message"></textarea>
                  </div>
                  {/* Honeypot anti-spam - hidden from users */}
                  <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{position:'absolute',left:'-9999px',opacity:0,height:0}} tabIndex="-1" autoComplete="off" />
                  <div className="lp-privacy">
                    <input type="checkbox" id="lp-privacy" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} required data-testid="lp-privacy" />
                    <label htmlFor="lp-privacy">Ho letto e accetto la <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> e acconsento al trattamento dei miei dati personali. *</label>
                  </div>
                  <button type="submit" className="lp-btn-submit" data-testid="lp-submit">PRENOTA LA TUA VISITA GRATUITA</button>
                  <p className="lp-microcopy">Vi ricontattiamo entro 24 ore. Nessun impegno, nessun costo.</p>
                </form>
              ) : (
                <div className="lp-form-success" data-testid="lp-form-success">
                  <i className="fas fa-check-circle"></i>
                  <h3>Grazie!</h3>
                  <p>Vi ricontatteremo entro 24 ore per fissare la vostra visita.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RECENSIONI */}
        <section className="lp-section lp-reviews" data-testid="lp-reviews">
          <div className="lp-container">
            <h2 className="lp-section-title">Le parole di chi ha già detto "Sì" qui.</h2>
            <div className="lp-reviews-grid">
              {[
                { name: "Marco & Giulia Esposito", text: "Un luogo magico dove abbiamo vissuto il giorno più bello della nostra vita. Location da sogno, staff impeccabile e cucina eccellente. Ogni dettaglio curato alla perfezione." },
                { name: "Luigi & Maria Ferrara", text: "Eleganza e tradizione si fondono in modo perfetto. La dimora storica è uno scenario incredibile per le foto. La cucina campana è autentica e raffinata. Un'esperienza indimenticabile." },
                { name: "Francesca De Luca", text: "Abbiamo scelto Tenuta Leone per il nostro matrimonio e non potevamo fare scelta migliore. Staff professionale e sempre disponibile." }
              ].map((r, i) => (
                <div className="lp-review-card" key={i} data-testid={`lp-review-${i}`}>
                  <div className="lp-review-stars">
                    {[...Array(5)].map((_, j) => <i className="fas fa-star" key={j}></i>)}
                  </div>
                  <p className="lp-review-text">"{r.text}"</p>
                  <span className="lp-review-author">{r.name}</span>
                </div>
              ))}
            </div>
            <a href="https://www.google.com/maps/place/Tenuta+Leone" target="_blank" rel="noopener noreferrer" className="lp-reviews-link" data-testid="lp-reviews-link">
              Leggi tutte le 156 recensioni su Google <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </section>

        {/* LA DIMORA */}
        <section className="lp-section lp-dimora" data-testid="lp-dimora">
          <div className="lp-container">
            <h2 className="lp-section-title">Una dimora storica nel cuore della Campania. Tutta per voi.</h2>
            <p className="lp-dimora-text">Tenuta Leone sorge a Calvanico, sulle colline a venti minuti da Salerno, ed è una di quelle dimore che si capiscono solo vedendole dal vivo. La Corte dell'Accoglienza apre il vostro giorno con la solennità della pietra antica; le Sale Ottocentesche, con stucchi e affreschi originali, fanno da cornice al ricevimento; la Cappella privata custodisce i momenti più intimi; e gli esterni, con la piscina panoramica e i giardini, regalano alle vostre fotografie la luce dorata della collina. Ogni spazio è esclusivo: durante il vostro matrimonio, la dimora è soltanto vostra.</p>
            <div className="lp-dimora-grid">
              <LazyImage src="/img/slide/slide_3.jpg" alt="Corte dell'Accoglienza Tenuta Leone dimora storica matrimoni Salerno" />
              <LazyImage src="/img/slide/slide_1.jpg" alt="Sala Ottocentesca di Tenuta Leone allestita per matrimonio, location matrimoni Salerno" />
              <LazyImage src="/img/slide/slide_2.jpg" alt="Cappella privata Tenuta Leone per cerimonia nuziale a Salerno" />
              <LazyImage src="/img/blog/dimora-storica-piscina-opt.jpg" alt="Piscina panoramica Tenuta Leone per ricevimento matrimonio Campania" />
            </div>
            <button className="lp-btn-secondary" onClick={scrollToForm} data-testid="lp-cta-dimora">
              Prenota la visita e vieni a vederla <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="lp-section lp-steps" data-testid="lp-steps">
          <div className="lp-container">
            <h2 className="lp-section-title">Cosa succede quando venite a trovarci.</h2>
            <div className="lp-steps-grid">
              <div className="lp-step" data-testid="lp-step-1">
                <span className="lp-step-num">1</span>
                <h3>Il tour della dimora</h3>
                <p>Vi accompagniamo personalmente in ogni spazio — le sale, la cappella, gli esterni — per immaginare insieme il percorso del vostro giorno, dall'arrivo degli ospiti al taglio della torta.</p>
              </div>
              <div className="lp-step" data-testid="lp-step-2">
                <span className="lp-step-num">2</span>
                <h3>L'incontro con il team</h3>
                <p>Conoscete chi firmerà il vostro evento: la consulenza eventi, la wedding consultant di Qualcosa di Blu e, se lo desiderate, la Brigata di cucina della Famiglia Stasi.</p>
              </div>
              <div className="lp-step" data-testid="lp-step-3">
                <span className="lp-step-num">3</span>
                <h3>Il vostro progetto, su misura</h3>
                <p>Ascoltiamo i vostri desideri e prepariamo un preventivo personalizzato e trasparente. Senza fretta e senza alcun impegno: la decisione resta soltanto vostra.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PERCHÉ TENUTA LEONE */}
        <section className="lp-section lp-why" data-testid="lp-why">
          <div className="lp-container">
            <h2 className="lp-section-title">Tutto ciò che serve al vostro matrimonio, in un unico luogo.</h2>
            <p className="lp-why-text">Scegliere Tenuta Leone significa scegliere una regia unica per tutto il vostro evento. La cucina è interna, guidata da oltre trent'anni di tradizione della Famiglia Stasi, con menù personalizzati e materie prime del territorio campano. Il rito civile si può celebrare direttamente in dimora, senza spostamenti per i vostri ospiti. La wedding consultant vi affianca in ogni scelta, dalla mise en place al light design. E poi la Suite Sposi, la ludoteca per i più piccoli, l'ampio parcheggio gratuito: ogni dettaglio è già pensato, perché il vostro unico compito sia vivervi la giornata.</p>
            <div className="lp-icons-grid">
              {[
                { icon: "fa-utensils", label: "Cucina interna d'autore" },
                { icon: "fa-church", label: "Rito civile in dimora" },
                { icon: "fa-heart", label: "Wedding consultant dedicata" },
                { icon: "fa-bed", label: "Suite Sposi" },
                { icon: "fa-car", label: "Parcheggio gratuito" }
              ].map((s, i) => (
                <div className="lp-icon-item" key={i}>
                  <i className={`fas ${s.icon}`}></i>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="lp-section lp-faq" data-testid="lp-faq">
          <div className="lp-container">
            <h2 className="lp-section-title">Domande frequenti</h2>
            <div className="lp-faq-list">
              {faqData.mainEntity.map((faq, i) => (
                <div className={`lp-faq-item ${openFaq === i ? 'open' : ''}`} key={i} data-testid={`lp-faq-${i}`}>
                  <button className="lp-faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.name}</span>
                    <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
                  </button>
                  {openFaq === i && (
                    <div className="lp-faq-answer">
                      <p>{faq.acceptedAnswer.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="lp-section lp-cta-final" data-testid="lp-cta-final">
          <div className="lp-cta-bg">
            <img src="/img/slide/slide_2.jpg" alt="" aria-hidden="true" />
          </div>
          <div className="lp-cta-overlay"></div>
          <div className="lp-container">
            <h2>La vostra data preferita potrebbe essere ancora libera. Scopritelo oggi.</h2>
            <p>Compilate il form o scriveteci su WhatsApp: vi ricontattiamo entro 24 ore per fissare la vostra visita privata in dimora.</p>
            <div className="lp-cta-buttons">
              <button className="lp-btn-submit" onClick={scrollToForm} data-testid="lp-cta-form-btn">PRENOTA LA TUA VISITA GRATUITA</button>
              <a
                href={`https://wa.me/393452294361?text=${encodeURIComponent('Ciao! Vorrei prenotare una visita a Tenuta Leone per il mio matrimonio.')}`}
                target="_blank" rel="noopener noreferrer"
                className="lp-btn-whatsapp"
                onClick={trackWhatsApp}
                data-testid="lp-cta-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER MINIMALE */}
      <footer className="lp-footer" data-testid="lp-footer">
        <div className="lp-container">
          <img src="/img/logo.svg" alt="Tenuta Leone" className="lp-footer-logo" />
          <p>Via Roma 19, 84080 Calvanico (SA) &middot; Tel <a href="tel:+39089957360" onClick={trackPhone}>+39 089 957360</a></p>
          <p>P.IVA 05920120655</p>
          <div className="lp-footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="lp-sticky-bar" data-testid="lp-sticky-bar">
        <button className="lp-sticky-btn lp-sticky-form" onClick={scrollToForm}>
          <i className="fas fa-calendar-check"></i> Prenota la visita
        </button>
        <a
          href={`https://wa.me/393452294361?text=${encodeURIComponent('Ciao! Vorrei prenotare una visita a Tenuta Leone per il mio matrimonio.')}`}
          target="_blank" rel="noopener noreferrer"
          className="lp-sticky-btn lp-sticky-wa"
          onClick={trackWhatsApp}
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </>
  );
};

export default LandingVisitaPage;
