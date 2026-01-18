import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { PiX } from 'react-icons/pi';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';
import 'swiper/css';
import './Honor.css';

const Honor = () => {
  const { t } = useTranslation('honor');
  const [modalImage, setModalImage] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const swiperRef = React.useRef(null);

  // 从 i18n 获取所有证书
  const allCertificates = t('certificates', { returnObjects: true });

  const openModal = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
    setIsModalOpen(true);
    // 暂停轮播
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    // 恢复轮播
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="honor-page">
      <Helmet>
        <title>{t('helmet.title')}</title>
        <meta name="description" content={t('helmet.description')} />
      </Helmet>

      <div className="honor-inner">
        <div className="honor-header py-20">
          <h2>{t('header.title')}</h2>
          <p className="subtitle">{t('header.subtitle')}</p>
        </div>
      </div>

      {/* 轮播展示 */}
      <div className="honor-carousel-section">
        <div className="honor-carousel-wrapper">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            speed={8000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="honor-swiper"
          >
            {allCertificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <figure 
                  className="certificate-slide"
                  onClick={() => openModal(cert.src, cert.alt)}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="certificate-image"
                    loading="lazy"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Grid 展示所有证书 */}
      <div className="honor-grid-section">
        <div className="honor-grid-container">
          {allCertificates.map((cert, index) => (
            <div 
              key={index}
              className="certificate-grid-item"
              onClick={() => openModal(cert.src, cert.alt)}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="certificate-grid-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 图片模态框 */}
      {isModalOpen && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="modal-overlay"></div>
          <button className="modal-close" onClick={closeModal}>
            <PiX />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={modalImage?.src} 
              alt={modalImage?.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}

      <Breadcrumbs items={[{ label: t('breadcrumbs') }]} />
    </div>
  );
};

export default Honor;
