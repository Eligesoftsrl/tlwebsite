import { useState } from 'react';
import LazyImage from './LazyImage';

const InstagramFeed = ({ 
  profileName = "Tenuta Leone", 
  profileHandle = "@tenutaleone", 
  profileUrl = "https://www.instagram.com/tenutaleone/", 
  description = "Scopri i momenti più belli dei nostri eventi e lasciati ispirare",
  images = []
}) => {
  // Default images from the gallery if none provided
  const defaultImages = [
    '/img/gallery/insta_1.jpg',
    '/img/gallery/insta_2.jpg',
    '/img/gallery/insta_3.jpg',
    '/img/gallery/insta_4.jpg',
    '/img/gallery/insta_5.jpg',
    '/img/gallery/insta_6.jpg'
  ];

  const feedImages = images.length > 0 ? images : defaultImages;

  return (
    <section className="instagram-section" data-testid="instagram-feed">
      <div className="instagram-header">
        <div className="container">
          <div className="instagram-header-content">
            <span className="subtitle">SEGUICI SU INSTAGRAM</span>
            <h2 className="section-title">
              <a 
                href={profileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-link"
              >
                {profileHandle}
              </a>
            </h2>
            <p className="instagram-intro">{description}</p>
          </div>
        </div>
      </div>

      <div className="instagram-feed">
        <div className="container-fluid">
          <div className="instagram-grid">
            {feedImages.slice(0, 6).map((image, index) => (
              <a 
                key={index}
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-card"
                data-testid={`instagram-card-${index + 1}`}
              >
                <div className="instagram-card-image">
                  <LazyImage 
                    src={image} 
                    alt={`${profileName} Instagram ${index + 1}`}
                  />
                </div>
                <div className="instagram-card-overlay">
                  <i className="fab fa-instagram"></i>
                </div>
              </a>
            ))}
          </div>
          
          <div className="instagram-cta">
            <a 
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-instagram"
            >
              <i className="fab fa-instagram"></i>
              Seguici su Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
