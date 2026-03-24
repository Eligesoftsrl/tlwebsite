import { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage - Componente immagine ottimizzato con:
 * - Supporto WebP con fallback automatico
 * - Lazy loading nativo
 * - Blur placeholder
 * - Preload per immagini critiche
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '100vw',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Convert src to WebP if it's jpg/jpeg/png
  const getWebPSrc = (originalSrc) => {
    if (!originalSrc) return originalSrc;
    if (originalSrc.endsWith('.webp')) return originalSrc;
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  const webpSrc = getWebPSrc(src);
  const fallbackSrc = src;

  useEffect(() => {
    // Preload critical images
    if (priority && webpSrc) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = webpSrc;
      link.type = 'image/webp';
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, webpSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <picture className={`optimized-image-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
      {!hasError && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        ref={imgRef}
        src={hasError ? fallbackSrc : webpSrc}
        alt={alt}
        className={`optimized-image ${className} ${isLoaded ? 'loaded' : ''}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
