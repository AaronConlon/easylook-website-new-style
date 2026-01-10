import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import slidesData from '../../data/heroSlides.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <div className="hero-slide-image">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="hero-slide-overlay"></div>
              <div className="hero-slide-content-wrapper">
                <div
                  className={`hero-slide-content ${
                    slide.textPosition === 'right'
                      ? 'hero-slide-content-right'
                      : 'hero-slide-content-left'
                  }`}
                >
                  <h1 className="hero-slide-title">{slide.title}</h1>
                  <p className="hero-slide-subtitle">{slide.subtitle}</p>
                  {slide.buttonText && (
                    <a
                      href={`/#${slide.buttonLink}`}
                      className="hero-slide-button"
                    >
                      {slide.buttonText}
                      <span className="hero-button-arrow">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="hero-nav-button hero-nav-prev"
        aria-label="Previous slide"
        type="button"
      >
        <PiArrowLeftThin size={24} />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="hero-nav-button hero-nav-next"
        aria-label="Next slide"
        type="button"
      >
        <PiArrowRightThin size={24} />
      </button>

      {/* Fully Custom Pagination */}
      <div className="custom-hero-pagination">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`custom-pagination-dot ${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => swiperInstance?.slideToLoop(index)}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
