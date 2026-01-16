import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import slidesData from '../../data/heroSlides';
import 'swiper/css';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const { t } = useTranslation('home');
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Autoplay, Navigation]}
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
              <div className="hero-slide-overlay"></div>
              <div className="hero-slide-content-wrapper">
                <div
                  className={`hero-slide-content hero-slide-content-${
                    slide.textPosition || 'bottom-left'
                  }`}
                >
                  <h1 className="hero-slide-title">
                    {t(`hero.slides.${slide.id}.title`)}
                  </h1>
                  <p className="hero-slide-subtitle">
                    {t(`hero.slides.${slide.id}.subtitle`)}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="hero-nav-button hero-nav-prev"
        aria-label="Previous slide"
        type="button"
      >
        <LuChevronLeft size={24} />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="hero-nav-button hero-nav-next"
        aria-label="Next slide"
        type="button"
      >
        <LuChevronRight size={24} />
      </button>

      <div className="custom-hero-pagination">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperInstance?.slideToLoop(index)}
            className={`custom-pagination-dot ${
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

export default HeroCarousel;
