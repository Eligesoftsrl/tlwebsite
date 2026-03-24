import { testimonials } from '../data/siteData';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" data-testid="testimonials-section">
      <div className="container">
        <div className="section-header centered">
          <span className="subtitle">RECENSIONI</span>
          <h2 className="section-title">
            Cosa dicono <span>i nostri ospiti</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card" data-testid={`testimonial-${testimonial.id}`}>
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <span className="author-event">{testimonial.event}</span>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
