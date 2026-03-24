import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const faqData = [
  {
    question: "Quali tipi di eventi organizzate a Tenuta Leone?",
    answer: "A Tenuta Leone organizziamo matrimoni, comunioni, battesimi, cresime, feste di compleanno, anniversari, eventi aziendali, gala dinner e ricevimenti privati. La nostra dimora storica è la location perfetta per qualsiasi evento speciale in Campania."
  },
  {
    question: "Dove si trova Tenuta Leone e come raggiungerla?",
    answer: "Tenuta Leone si trova a Calvanico, in provincia di Salerno, nel cuore della Campania. Siamo facilmente raggiungibili dall'autostrada A3 (uscita Fisciano-Lancusi) e a soli 20 minuti da Salerno città. Offriamo ampio parcheggio gratuito per tutti gli ospiti."
  },
  {
    question: "Quanti ospiti può ospitare la location per matrimoni?",
    answer: "Tenuta Leone può ospitare eventi da 60 a oltre 200 ospiti, grazie alle diverse sale della dimora storica e agli ampi spazi esterni. Ogni ambiente può essere personalizzato in base alle vostre esigenze, dalle cerimonie intime ai grandi ricevimenti."
  },
  {
    question: "È possibile visitare la location prima di prenotare?",
    answer: "Certamente! Offriamo visite guidate gratuite su appuntamento. Potete anche esplorare i nostri spazi comodamente da casa grazie ai tour virtuali 360° disponibili sul nostro sito. Contattateci per prenotare la vostra visita."
  },
  {
    question: "Cosa include il servizio di catering per matrimoni?",
    answer: "Il nostro servizio catering include menu personalizzati con cucina tradizionale campana, antipasti, primi, secondi, contorni, torta nuziale e sweet table. Utilizziamo ingredienti locali e di stagione. Offriamo degustazione gratuita prima dell'evento."
  },
  {
    question: "Quali servizi aggiuntivi offrite per gli eventi?",
    answer: "Offriamo: suite sposi per la prima notte, piscina panoramica, ludoteca per bambini, parcheggio gratuito, WiFi, allestimenti personalizzati, coordinamento evento, servizio fotografico in location storica. Collaboriamo con i migliori fornitori della zona."
  },
  {
    question: "È possibile celebrare il rito civile o religioso nella vostra location?",
    answer: "Sì, Tenuta Leone dispone di una cappella privata consacrata per cerimonie religiose e di splendidi spazi all'aperto autorizzati per i riti civili. Possiamo organizzare sia la cerimonia che il ricevimento nella stessa location."
  },
  {
    question: "Quali sono i vantaggi di scegliere una dimora storica per il matrimonio?",
    answer: "Una dimora storica come Tenuta Leone offre atmosfere uniche e irripetibili: architetture d'epoca, affreschi originali, giardini storici e un fascino senza tempo. Ogni foto del vostro matrimonio sarà un'opera d'arte, con sfondi scenografici naturali."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="faq-section" data-testid="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="subtitle">DOMANDE FREQUENTI</span>
            <h2 className="section-title">
              Tutto quello che devi <span>sapere</span>
            </h2>
            <p className="faq-intro">
              Le risposte alle domande più frequenti su matrimoni, eventi e la nostra location a Salerno
            </p>
          </div>

          <div className="faq-grid">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                data-testid={`faq-${index}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <p>Non hai trovato la risposta che cercavi? <a 
              href="https://wa.me/393452294361?text=Ciao! Ho una domanda su Tenuta Leone..."
              target="_blank"
              rel="noopener noreferrer"
              className="faq-contact-link"
            >Contattaci</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
