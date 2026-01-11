import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { PiCaretLeftThin, PiCaretRightThin } from 'react-icons/pi';
import slidesData from '../../data/heroSlides';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './HeroCarousel.css';

const HeroCarouselLaifen = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero-carousel hero-carousel-laifen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
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
              <div className="hero-slide-overlay hero-slide-overlay-laifen"></div>
              <div className="hero-slide-content-wrapper">
                <div
                  className={`hero-slide-content hero-slide-content-laifen hero-slide-content-${
                    slide.textPosition || 'bottom-left'
                  }`}
                >
                  <h1 className="hero-slide-title">{slide.title}</h1>
                  <p className="hero-slide-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Laifen Specific Navigation Buttons */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="hero-nav-button-laifen hero-nav-prev-laifen"
        aria-label="Previous slide"
        type="button"
      >
        <PiCaretLeftThin size={24} />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="hero-nav-button-laifen hero-nav-next-laifen"
        aria-label="Next slide"
        type="button"
      >
        <PiCaretRightThin size={24} />
      </button>

      <div className="custom-hero-pagination custom-hero-pagination-laifen">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperInstance?.slideToLoop(index)}
            className={`custom-pagination-dot-laifen ${
              index === activeIndex ? 'active' : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarouselLaifen;
