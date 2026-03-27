import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const faqData = [
  {
    question: "Quali tipi di eventi d'eccellenza organizzate a Tenuta Leone?",
    answer: "Siamo la cornice ideale per ogni traguardo che meriti una Firma d'Autore. Oltre a essere una delle più rinomate location per matrimoni a Salerno e in Campania, la nostra struttura ospita comunioni, battesimi, anniversari ed eventi aziendali esclusivi. Ogni celebrazione, dalla sacralità di un \"Sì\" alla gioia di un traguardo di famiglia, riceve la stessa regia tecnica e cura del dettaglio che contraddistingue il nostro metodo organizzativo."
  },
  {
    question: "Dove si trova la Tenuta e come raggiungerla facilmente?",
    answer: "Tenuta Leone sorge a Calvanico (Salerno), in una posizione strategica nel cuore della Campania, a soli 20 minuti da Salerno città e facilmente raggiungibile dalle province di Avellino e Napoli tramite l'autostrada A3 (uscita Fisciano-Lancusi). La dimora offre un ampio parcheggio riservato e gratuito per garantire massima comodità e sicurezza a tutti i vostri ospiti."
  },
  {
    question: "Quanti ospiti può ospitare la location per i grandi eventi?",
    answer: "Le nostre Sale Ottocentesche e il suggestivo Porticato sono progettati per accogliere grandi numeri senza mai rinunciare all'eleganza. La versatilità degli spazi permette di modulare l'accoglienza per banchetti nuziali o meeting aziendali d'élite, garantendo volumi ariosi, comfort assoluto e una fluidità del servizio impeccabile in ogni momento della festa."
  },
  {
    question: "È possibile celebrare il rito civile autentico presso la vostra struttura?",
    answer: "Certamente. Tenuta Leone permette di celebrare il rito civile in uno scenario d'eccezione, immersi nel fascino della nostra dimora storica. Questo consente di evitare spostamenti stressanti per gli ospiti, mantenendo l'intera celebrazione sotto la nostra regia coordinata e garantendo una continuità stilistica ed emozionale unica."
  },
  {
    question: "Cosa include l'eccellenza del vostro servizio di ristorazione interna?",
    answer: "La nostra storia nella ristorazione è la vostra garanzia. Non offriamo un semplice catering, ma una vera Brigata di cucina guidata dalla solida tradizione della Famiglia Stasi. Il servizio include lo studio di menù personalizzati con materie prime d'eccellenza del territorio campano. Dagli aperitivi d'autore nel porticato al gran buffet finale, ogni sapore è curato internamente per assicurare qualità e freschezza assoluta."
  },
  {
    question: "Quali sono i vantaggi di scegliere una dimora storica come Tenuta Leone?",
    answer: "Scegliere una dimora storica significa regalare un'esperienza che va oltre il tempo. Il vero vantaggio risiede nell'unione tra il prestigio architettonico del passato e un management dell'evento contemporaneo. A Tenuta Leone, il fascino secolare è supportato da una macchina organizzativa perfetta che trasforma la bellezza in un evento senza imprevisti."
  },
  {
    question: "Offrite servizi aggiuntivi per la personalizzazione dell'evento?",
    answer: "Attraverso la nostra Consulenza Eventi dedicata, vi supportiamo nella definizione di ogni dettaglio: dal light design scenografico al coordinamento dei partner esterni. Il nostro obiettivo è sollevarvi da ogni stress, mettendo a vostra disposizione specialisti capaci di dare forma a un progetto sartoriale che rispecchi fedelmente i vostri desideri."
  },
  {
    question: "Posso visitare la location prima di definire il mio progetto?",
    answer: "Sì, crediamo che l'ascolto sia il primo passo per un evento di successo. Vi invitiamo a prenotare una consulenza privata per scoprire ogni angolo della dimora e incontrare il nostro team. Sarà l'occasione per verificare di persona la qualità e la professionalità che firmeranno il vostro traguardo nel cuore della provincia di Salerno."
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
            <span className="subtitle">DOMANDE FREQUENTI & GARANZIA D'AUTORE</span>
            <h2 className="section-title">
              Le Risposte alla vostra <span>Eccellenza.</span>
            </h2>
            <h3 className="faq-tagline">
              Tutto ciò che rende Tenuta Leone la scelta sicura per il vostro traguardo.
            </h3>
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
                  <h3 className="faq-question-text">{faq.question}</h3>
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
