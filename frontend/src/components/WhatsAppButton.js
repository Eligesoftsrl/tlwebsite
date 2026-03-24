import { siteConfig } from '../data/siteData';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Ciao! Vorrei informazioni sulla vostra location per eventi.')}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      data-testid="whatsapp-button"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Scrivici su WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
