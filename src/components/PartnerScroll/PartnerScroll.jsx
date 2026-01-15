import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import './PartnerScroll.css';

import partner13 from '../../assets/partners/partner-13.png';
import partner14 from '../../assets/partners/partner-14.png';
import partner16 from '../../assets/partners/partner-16.png';
import partner17 from '../../assets/partners/partner-17.png';
import partner18 from '../../assets/partners/partner-18.png';
import partner19 from '../../assets/partners/partner-19.png';
import partner20 from '../../assets/partners/partner-20.png';
import partner21 from '../../assets/partners/partner-21.png';
import partner24 from '../../assets/partners/partner-24.png';
import partner1 from '../../assets/partners/partner-1.png';
import partner2 from '../../assets/partners/partner-2.png';
import partner3 from '../../assets/partners/partner-3.png';
import partner4 from '../../assets/partners/partner-4.png';
import partner5 from '../../assets/partners/partner-5.png';
import partner6 from '../../assets/partners/partner-6.png';
import partner7 from '../../assets/partners/partner-7.png';
import partner8 from '../../assets/partners/partner-8.png';
import partner10 from '../../assets/partners/partner-10.png';
import partner11 from '../../assets/partners/partner-11.png';
import partner12 from '../../assets/partners/partner-12.png';

const partnerLogos = [
  partner13,
  partner14,
  partner16,
  partner17,
  partner18,
  partner19,
  partner20,
  partner21,
  partner24,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner10,
  partner11,
  partner12,
];

// Split logos into two rows
const row1 = partnerLogos.slice(0, 10);
const row2 = partnerLogos.slice(10, 20);

const PartnerScroll = () => {
  return (
    <section className="partner-scroll-section">
      <div className="partner-scroll-header">
        <h3>合作伙伴</h3>
        <p>同心协力，共创未来</p>
      </div>

      {/* Row 1: Left to Right */}
      <div className="partners-swiper-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={2.5}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3.75 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7.5 },
          }}
          className="partners-swiper"
        >
          {row1.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="partner-item">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Row 2: Right to Left */}
      <div className="partners-swiper-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={2.5}
          loop={true}
          speed={6000} // Slightly different speed for variation
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // Opposite direction
          }}
          breakpoints={{
            640: { slidesPerView: 3.75 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7.5 },
          }}
          className="partners-swiper"
        >
          {row2.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="partner-item">
                <img
                  src={logo}
                  alt={`Partner ${index + 11}`}
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerScroll;
