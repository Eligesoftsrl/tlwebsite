import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import { spaces } from '../data/siteData';
import LazyImage from './LazyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const SpacesSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="spaces-section" data-testid="spaces-section">
      <div className="spaces-header">
        <div className="container">
          <div className="spaces-header-inner">
            <div className="spaces-title-area">
              <span className="subtitle">SCOPRI OGNI ANGOLO DELLA DIMORA STORICA</span>
              <h2 className="section-title">
                Ogni spazio racconta <span>una storia</span>
              </h2>
            </div>
            <div className="spaces-actions">
              <Link to="/tour" className="btn-outline" data-testid="view-all-spaces">
                SCOPRI TUTTE LE SALE
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="spaces-slider-wrapper">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={'auto'}
          freeMode={true}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          navigation={{
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
          }}
          className="spaces-swiper"
        >
          {spaces.map((space) => (
            <SwiperSlide key={space.slug} className="space-slide">
              <Link 
                to={`/sala/${space.slug}`}
                className="space-card"
                data-testid={`space-${space.slug}`}
              >
                <div className="space-image">
                  <LazyImage src={space.image} alt={space.name} />
                  {space.has360 && (
                    <div className="badge-360">
                      <i className="fas fa-vr-cardboard"></i>
                      <span>360°</span>
                    </div>
                  )}
                  <div className="space-overlay"></div>
                </div>
                <div className="space-content">
                  <span className="space-label">LA DIMORA STORICA</span>
                  <h3 className="space-name">{space.name}</h3>
                  <p className="space-headline">{space.headline}</p>
                </div>
                <span className="space-arrow">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="slider-nav slider-prev" aria-label="Precedente">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-nav slider-next" aria-label="Successivo">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default SpacesSlider;
