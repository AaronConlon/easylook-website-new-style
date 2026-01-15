import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import {
  PiShoppingCartSimpleThin,
  PiPackageThin,
  PiGraduationCapThin,
  PiDeviceMobileThin,
  PiCheckCircleThin,
  PiCaretLeftThin,
  PiCaretRightThin,
} from 'react-icons/pi';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';
import { Plyr } from 'plyr-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'plyr-react/plyr.css';

import './VisionTrainingKit.css';

// Import Assets
import qrCode from '../../assets/qr-code.png';
import kitImage from '../../assets/xunlianhe.png';
import taobaoQr from '../../assets/products/taobao-qrcode.png';
import jdQr from '../../assets/products/jd-qrcode.png';

// Animation Helper
const AnimatedTitle = ({ text, className }) => (
  <div className={className}>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="char"
        style={{ display: 'inline-block', animationDelay: `${i * 0.05}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </div>
);

// Mock Data
const videoCategories = [
  {
    id: 'myopia',
    title: '近视防控训练',
    count: 5,
    description: '科学有效的近视预防与控制方案，帮助青少年建立健康的用眼习惯。',
  },
  {
    id: 'strabismus',
    title: '斜弱视训练',
    count: 5,
    description: '专门针对斜弱视的康复训练模块，改善双眼协调和视觉功能。',
  },
  {
    id: 'eyecare',
    title: '眼保健训练',
    count: 4,
    description: '日常护眼与视疲劳缓解方案，适合长时间用眼人群。',
  },
  {
    id: 'learning',
    title: '学习力提升训练',
    count: 8,
    description: '通过视觉功能优化提升专注力、阅读速度及空间认知能力。',
  },
];

const videos = {
  strabismus: [
    {
      title: '遮盖训练',
      subtitle:
        '遮光眼罩 - 遮盖训练，是一项专门强化双眼分视的视觉训练方法，侧重于消除单眼抑制，重塑单眼正常视网膜神经通路；强化单眼眼肌控制力。本训练旨在改善因抑制导致的双眼视功能异常，提升弱视眼的参与度；改善斜视眼的视觉功能，改善双眼协调性。',
      poster:
        'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.jpg',
      src: 'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.mp4',
    },
    {
      title: '红绿去抑制训练',
      subtitle:
        '利用互补色原理，训练弱视眼的参与度，消除单眼抑制，重塑双眼单视功能。',
      poster: 'https://cdn-mini.easylook.com.cn/train/rg_desuppression.jpg',
      src: 'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.mp4', // Mocking same vid for demo
    },
    {
      title: '生理性复视训练',
      subtitle:
        '通过感知复视现象，训练大脑对双眼图像的处理能力，强化融合功能。',
      poster:
        'https://cdn-mini.easylook.com.cn/train/fusion_ball_physiological_diplopia_2.jpg',
      src: 'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.mp4',
    },
  ],
  myopia: [
    {
      title: '翻转镜训练',
      subtitle:
        '调节灵敏度训练，提升眼睛睫状肌的调节能力，缓解视疲劳，防控近视。',
      poster:
        'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.jpg',
      src: 'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.mp4',
    },
  ],
};

const VisionTrainingKit = () => {
  const [activeCategory, setActiveCategory] = useState('strabismus');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [bannerRef, bannerVisible] = useScrollAnimation(0.1);
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);
  const [videosRef, videosVisible] = useScrollAnimation(0.1);

  const currentVideos = videos[activeCategory] || videos.strabismus;
  const currentVideo = currentVideos[activeVideoIndex] || currentVideos[0];

  return (
    <div className="product-detail-page">
      <Helmet>
        <title>视觉训练套盒 - 视立优专业版 | 全方位视觉机能训练方案</title>
        <meta
          name="description"
          content="视立优·视觉训练套盒是一款集成式一体化通用视觉训练方案，为近视防控、弱视康复、视疲劳缓解提供科学可靠的解决方案。"
        />
      </Helmet>

      {/* Top Banner Section */}
      <section
        className={`detail-banner ${bannerVisible ? 'in-view' : ''}`}
        ref={bannerRef}
      >
        <div className="banner-mask"></div>
        <img src={kitImage} alt="视觉训练套盒" className="banner-bg" />
        <div className="banner-content">
          <AnimatedTitle text="视觉训练套盒" className="banner-title" />
          <p className="banner-subtitle">Vision Training Kit</p>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className={`hero-section scroll-animate ${heroVisible ? 'in-view' : ''}`}
        ref={heroRef}
      >
        <div className="hero-grid">
          <div className="hero-content">
            <h2 className="hero-title">视觉训练套盒</h2>
            <p className="hero-description">
              视立优·视觉训练套盒是一款集成式一体化的通用视觉训练方案。
              基于调节滞后引发近视学说，将专家共识与自主训练体系相结合，为近视防控提供新解决方案。
            </p>

            <div className="buy-button-wrapper">
              <button className="buy-button">
                <PiShoppingCartSimpleThin className="cart-icon" />
                <span>立即购买</span>
              </button>

              <div className="qr-popup">
                <p className="qr-popup-title">扫码购买</p>
                <div className="qr-popup-list">
                  <div className="qr-popup-item">
                    <img
                      src={qrCode}
                      alt="小程序商品"
                      className="qr-popup-image"
                    />
                    <span className="qr-popup-label">小程序商品</span>
                  </div>
                  <div className="qr-popup-item">
                    <img
                      src={taobaoQr}
                      alt="淘宝店铺"
                      className="qr-popup-image"
                    />
                    <span className="qr-popup-label">淘宝店铺</span>
                  </div>
                  <div className="qr-popup-item">
                    <img src={jdQr} alt="京东店铺" className="qr-popup-image" />
                    <span className="qr-popup-label">京东店铺</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="hero-swiper"
            >
              <SwiperSlide className="hero-swiper-slide">
                <img src={kitImage} alt="视觉训练套盒 1" />
              </SwiperSlide>
              <SwiperSlide className="hero-swiper-slide">
                <img src={kitImage} alt="视觉训练套盒 2" />
              </SwiperSlide>
              <SwiperSlide className="hero-swiper-slide">
                <img src={kitImage} alt="视觉训练套盒 3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`features-section scroll-animate ${featuresVisible ? 'in-view' : ''}`}
        ref={featuresRef}
      >
        <div className="section-header">
          <h2 className="section-title">四大特点</h2>
          <p className="section-subtitle">
            科学训练 · 专业体系 · 分步教程 · 方便携带
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <PiPackageThin />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">专利技术 专业体系</h3>
              <p className="feature-description">
                专利认证，科学体系，铸就产品专业保障。
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <PiCheckCircleThin />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">科学选品，可靠有效</h3>
              <p className="feature-description">
                层层把关，凝练选择，训练方案可靠有效。
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <PiGraduationCapThin />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">分步教程 轻松上手</h3>
              <p className="feature-description">
                详细教学，快速上手，按步操作轻松高效。
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <PiDeviceMobileThin />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">精致设计 方便携带</h3>
              <p className="feature-description">
                匠心设计，便于收纳，随时随地轻松训练。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section
        className={`videos-section scroll-animate ${videosVisible ? 'in-view' : ''}`}
        ref={videosRef}
      >
        <div className="section-header">
          <h2 className="section-title">训练视频展示</h2>
          <div className="video-tabs">
            {videoCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveVideoIndex(0);
                }}
              >
                <span className="tab-title">{cat.title}</span>
                <span className="tab-count">{cat.count} 个训练</span>
              </button>
            ))}
          </div>
          <p className="category-description">
            {videoCategories.find((c) => c.id === activeCategory)?.description}
          </p>
        </div>

        <div className="player-layout">
          <div className="main-video">
            <div className="video-container">
              <Plyr
                source={{
                  type: 'video',
                  sources: [
                    {
                      src: currentVideo.src,
                      type: 'video/mp4',
                    },
                  ],
                  poster: currentVideo.poster,
                }}
                options={{
                  controls: [
                    'play-large',
                    'play',
                    'progress',
                    'current-time',
                    'mute',
                    'volume',
                    'captions',
                    'settings',
                    'pip',
                    'airplay',
                    'fullscreen',
                  ],
                }}
              />
            </div>
            <div className="video-info">
              <h3 className="video-title">{currentVideo.title}</h3>
              <p className="video-description">{currentVideo.subtitle}</p>
            </div>
          </div>

          <div className="playlist-panel">
            <p className="playlist-title">训练列表</p>
            <div className="video-thumbnails">
              {currentVideos.map((vid, idx) => (
                <button
                  key={idx}
                  className={`thumbnail-btn ${activeVideoIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveVideoIndex(idx)}
                >
                  <div
                    className="thumbnail-card"
                    style={{ backgroundImage: `url(${vid.poster})` }}
                  >
                    <div className="thumbnail-overlay">
                      <p className="thumbnail-title">{vid.title}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: '产品展示', href: '/' }, { label: '视觉训练套盒' }]}
      />
    </div>
  );
};

export default VisionTrainingKit;
