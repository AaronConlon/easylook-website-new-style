import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import slidesData from '../../data/heroSlides.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{
          clickable: true,
          bulletClass: 'hero-pagination-bullet',
          bulletActiveClass: 'hero-pagination-bullet-active',
        }}
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
                  <a href={`/#${slide.buttonLink}`} className="hero-slide-button">
                    {slide.buttonText}
                    <span className="hero-button-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button ref={prevRef} className="hero-nav-button hero-nav-prev" aria-label="Previous slide">
        <PiArrowLeftThin size={24} />
      </button>
      <button ref={nextRef} className="hero-nav-button hero-nav-next" aria-label="Next slide">
        <PiArrowRightThin size={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;
