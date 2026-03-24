import { useState } from 'react';
import { services } from '../data/siteData';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section 
      className="services-section"
      style={{ backgroundImage: `url(${activeService.image})` }}
      data-testid="services-section"
    >
      <div className="services-overlay"></div>
      <div className="container">
        <div className="services-content">
          <div className="services-text">
            <span className="subtitle">SERVIZI</span>
            <h2 className="section-title">
              Tutto ciò di cui hai bisogno <span>in un unico luogo</span>
            </h2>
            <p className="services-description">
              La nostra location offre tutti i servizi per rendere il tuo evento perfetto. 
              Dal parcheggio gratuito alla suite sposi, ogni dettaglio è pensato per te.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <button
                key={service.id}
                className={`service-card ${activeService.id === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service)}
                data-testid={`service-${service.id}`}
              >
                <div className="service-icon">
                  <img src={service.icon} alt={service.name} />
                </div>
                <span className="service-name">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
