import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { PiX } from 'react-icons/pi';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';
import 'swiper/css';
import './Honor.css';

// Import certificate images
import cert01 from '../../assets/certificates/cert-01.png';
import cert02 from '../../assets/certificates/cert-02.png';
import cert03 from '../../assets/certificates/cert-03.png';
import cert04 from '../../assets/certificates/cert-04.png';
import cert05 from '../../assets/certificates/cert-05.png';
import cert06 from '../../assets/certificates/cert-06.png';
import cert07 from '../../assets/certificates/cert-07.png';
import cert08 from '../../assets/certificates/cert-08.png';
import cert09 from '../../assets/certificates/cert-09.png';
import cert10 from '../../assets/certificates/cert-10.png';
import cert11 from '../../assets/certificates/cert-11.png';
import cert12 from '../../assets/certificates/cert-12.png';
import cert13 from '../../assets/certificates/cert-13.png';
import cert14 from '../../assets/certificates/cert-14.png';
import cert15 from '../../assets/certificates/cert-15.png';
import cert16 from '../../assets/certificates/cert-16.png';

const Honor = () => {
  const { t } = useTranslation('honor');
  const [modalImage, setModalImage] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const swiperRef = React.useRef(null);

  // 所有证书
  const allCertificates = [
    { src: cert01, alt: '一种视觉训练救生圈卡' },
    { src: cert02, alt: '实用新型专利证书' },
    { src: cert03, alt: '一种用于视觉功能训练的产品套盒' },
    { src: cert04, alt: '一种基于视力矫正的视力检测器' },
    { src: cert05, alt: '一种视觉采集用校准用定位装置' },
    { src: cert06, alt: 'VI-Chat 惟爱智能问答平台V1.0' },
    { src: cert07, alt: '惟爱AI玩眼轴估算软件V1.0' },
    { src: cert08, alt: '惟爱视觉病历管理系统V1.0' },
    { src: cert09, alt: '惟爱视觉后台用户管理系统V1.0' },
    { src: cert10, alt: '惟爱视觉客户关系管理系统V1.0' },
    { src: cert11, alt: '惟爱视觉门店管理系统V1.0' },
    { src: cert12, alt: '惟爱视觉配镜管理系统V1.0' },
    { src: cert13, alt: '惟爱视觉套餐管理系统V1.0' },
    { src: cert14, alt: '惟爱视觉微商城软件V1.0' },
    { src: cert15, alt: '惟爱视觉用户小程序V1.0' },
    { src: cert16, alt: '惟爱视觉预约管理系统V1.0' },
  ];

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
