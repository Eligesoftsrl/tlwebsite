import { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../data/siteData';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero" data-testid="hero-section">
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="container">
                <div className="hero-text-wrapper">
                  <h1 className="hero-title" data-testid="hero-title">
                    {slide.title}
                  </h1>
                  <p className="hero-text">{slide.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="hero-arrow hero-prev" 
        onClick={prevSlide}
        aria-label="Slide precedente"
        data-testid="hero-prev"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="hero-arrow hero-next" 
        onClick={nextSlide}
        aria-label="Slide successiva"
        data-testid="hero-next"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down */}
      <a href="#about" className="scroll-down" data-testid="scroll-down">
        <span>Scopri</span>
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
};

export default HeroSlider;
