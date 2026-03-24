import { useState } from 'react';
import { eventTypes, guestRanges } from '../data/siteData';

// In produzione (Vercel) usa il proxy API, altrimenti chiama direttamente
const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api/contact' 
  : 'https://www.tenutaleone.eliclient.it/api/nuova_richiesta';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Dati per il gestionale
      const gestionalData = {
        nome_cliente: formData.name.trim(),
        data_evento: formData.date || "",
        telefono: formData.phone.trim() || "",
        email: formData.email.trim(),
        numero_invitati: formData.guests || "",
        cerca: formData.eventType || "Informazioni",
        messaggio: formData.message.trim() || `Richiesta informazioni dal sito. Data: ${formData.date}, Ospiti: ${formData.guests}`
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
          eventType: '',
          date: '',
          guests: '',
          name: '',
          email: '',
          phone: '',
          message: ''
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

  return (
    <div className="booking-form-wrapper" data-testid="booking-form">
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="eventType">Tipologia Evento</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              data-testid="event-type-select"
            >
              <option value="" disabled>Seleziona evento</option>
              {eventTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Data</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              data-testid="date-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Numero Ospiti</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              data-testid="guests-select"
            >
              <option value="" disabled>Seleziona</option>
              {guestRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Il tuo nome"
              required
              data-testid="name-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="La tua email"
              required
              data-testid="email-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Il tuo telefono"
              data-testid="phone-input"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="btn-submit"
          disabled={isSubmitting}
          data-testid="submit-btn"
        >
          {isSubmitting ? 'Invio in corso...' : 'RICHIEDI DISPONIBILITÀ'}
        </button>

        {submitStatus && (
          <div className={`form-status ${submitStatus.type}`} data-testid="form-status">
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
