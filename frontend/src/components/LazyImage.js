import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className = '', placeholder = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Convert to WebP path
  const getWebPSrc = (originalSrc) => {
    if (!originalSrc) return originalSrc;
    if (originalSrc.endsWith('.webp')) return originalSrc;
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  const webpSrc = getWebPSrc(src);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className}`}>
      {!isLoaded && (
        <div className="lazy-placeholder">
          {placeholder || (
            <div className="placeholder-shimmer"></div>
          )}
        </div>
      )}
      {isInView && (
        <picture>
          {!hasError && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={hasError ? src : webpSrc}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            loading="lazy"
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;
