import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Google Reviews - per ora statiche, predisposte per integrazione Places API
const defaultReviews = [
  {
    id: 1,
    author: "Marco & Giulia Esposito",
    rating: 5,
    date: "2 mesi fa",
    dateISO: "2025-10-01",
    text: "Un luogo magico dove abbiamo vissuto il giorno più bello della nostra vita. Location da sogno, staff impeccabile e cucina eccellente. Ogni dettaglio curato alla perfezione. Consigliatissimo!",
    avatar: null,
    source: "google"
  },
  {
    id: 2,
    author: "Anna Romano",
    rating: 5,
    date: "1 mese fa",
    dateISO: "2025-11-01",
    text: "Abbiamo organizzato la comunione di nostra figlia a Tenuta Leone. Tutto perfetto: dalla location agli allestimenti, dalla cucina al servizio. I nostri ospiti sono rimasti incantati!",
    avatar: null,
    source: "google"
  },
  {
    id: 3,
    author: "Luigi & Maria Ferrara",
    rating: 5,
    date: "3 settimane fa",
    dateISO: "2025-11-10",
    text: "Eleganza e tradizione si fondono in modo perfetto. La dimora storica è uno scenario incredibile per le foto. La cucina campana è autentica e raffinata. Un'esperienza indimenticabile.",
    avatar: null,
    source: "google"
  },
  {
    id: 4,
    author: "Francesca De Luca",
    rating: 5,
    date: "1 settimana fa",
    dateISO: "2025-11-24",
    text: "Abbiamo scelto Tenuta Leone per il nostro matrimonio e non potevamo fare scelta migliore. Il tour virtuale 360° ci ha conquistati subito! Staff professionale e sempre disponibile.",
    avatar: null,
    source: "google"
  },
  {
    id: 5,
    author: "Antonio & Sara Russo",
    rating: 5,
    date: "2 settimane fa",
    dateISO: "2025-11-17",
    text: "Location stupenda immersa nel verde, perfetta per eventi all'aperto. La piscina panoramica è uno spettacolo. Cucina sublime, soprattutto i primi piatti della tradizione campana.",
    avatar: null,
    source: "google"
  }
];

const GoogleReviews = ({ limit = 3 }) => {
  const [reviews, setReviews] = useState(defaultReviews.slice(0, limit));
  const [averageRating, setAverageRating] = useState(5);
  const [totalReviews, setTotalReviews] = useState(156);

  // Schema.org Review structured data
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tenuta Leone",
    "image": "https://www.tenutaleone.it/img/slide/slide_1.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Roma, 19",
      "addressLocality": "Calvanico",
      "addressRegion": "SA",
      "postalCode": "84080",
      "addressCountry": "IT"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toString(),
      "ratingCount": totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": defaultReviews.map(review => ({
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Tenuta Leone"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.dateISO,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  // Per integrazione futura con Google Places API
  // useEffect(() => {
  //   const fetchGoogleReviews = async () => {
  //     try {
  //       const response = await fetch(`/api/google-reviews`);
  //       const data = await response.json();
  //       setReviews(data.reviews);
  //       setAverageRating(data.rating);
  //       setTotalReviews(data.total);
  //     } catch (error) {
  //       console.log('Using default reviews');
  //     }
  //   };
  //   fetchGoogleReviews();
  // }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? 'filled' : 'empty'}`}
      ></i>
    ));
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      
      <section className="reviews-section" data-testid="google-reviews">
      <div className="container">
        <div className="reviews-header">
          <div className="reviews-title-area">
            <span className="subtitle">RECENSIONI VERIFICATE</span>
            <h2 className="section-title">
              Cosa dicono i <span>nostri ospiti</span>
            </h2>
          </div>
          
          <div className="reviews-summary">
            <div className="google-badge">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="google-logo"
              />
              <span>Reviews</span>
            </div>
            <div className="rating-summary">
              <div className="rating-number">{averageRating.toFixed(1)}</div>
              <div className="rating-stars">
                {renderStars(Math.round(averageRating))}
              </div>
              <div className="rating-count">{totalReviews} recensioni</div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card" data-testid={`review-${review.id}`}>
              <div className="review-header">
                <div className="review-author">
                  <div className="author-avatar">
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.author} />
                    ) : (
                      <span>{review.author.charAt(0)}</span>
                    )}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{review.author}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-source">
                  <i className="fab fa-google"></i>
                </div>
              </div>
              
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a 
            href="https://www.google.com/maps/place/Tenuta+Leone/@40.776270,14.829491,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d40.776270!4d14.829491!9m1!1b1!16s"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-google-reviews"
            data-testid="view-all-reviews"
          >
            <i className="fab fa-google"></i>
            Leggi tutte le recensioni su Google
          </a>
        </div>
      </div>
      </section>
    </>
  );
};

export default GoogleReviews;
