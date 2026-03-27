import { useState, useEffect, useCallback, useRef } from 'react';
import { heroSlides } from '../data/siteData';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const videoRef = useRef(null);

  const goToSlide = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Reset animation key when going to video slide to retrigger fade
    if (heroSlides[index]?.isVideoSlide) {
      setAnimationKey(prev => prev + 1);
    }
    
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const currentSlideData = heroSlides[currentSlide];
    const duration = currentSlideData.video ? 12000 : 6000;
    const timer = setInterval(nextSlide, duration);
    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  // Reset and play video when video slide becomes active
  useEffect(() => {
    if (videoRef.current && heroSlides[currentSlide]?.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  return (
    <section 
      className="hero" 
      data-testid="hero-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${slide.video ? 'has-video' : ''}`}
            style={!slide.video ? { backgroundImage: `url(${slide.image})` } : {}}
          >
            {/* Video Background */}
            {slide.video && (
              <video
                ref={videoRef}
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={slide.poster || ''}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            )}
            
            <div className="hero-overlay"></div>
            <div className={`hero-content ${slide.isVideoSlide ? 'video-content' : ''}`}>
              <div className="container">
                <div 
                  className="hero-text-wrapper"
                  key={slide.isVideoSlide ? animationKey : index}
                >
                  {slide.title && (
                    <h1 className="hero-title" data-testid="hero-title">
                      {slide.title}
                    </h1>
                  )}
                  {slide.text && <p className="hero-text">{slide.text}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
