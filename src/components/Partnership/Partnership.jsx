import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import {
  PiTrendUpThin,
  PiUsersThin,
  PiBankThin,
  PiCheckCircleThin,
  PiPhoneThin,
  PiMegaphoneThin,
} from 'react-icons/pi';
import './Partnership.css';
import useThemeStore from '../../store/themeStore';

const Partnership = ({ theme: propTheme }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const storeTheme = useThemeStore((state) => state.currentTheme);
  const theme = propTheme || storeTheme;
  const isLaifen = theme === 'laifen';

  return (
    <section
      className={`partnership-container ${isLaifen ? 'theme-laifen' : ''}`}
      ref={ref}
    >
      <div
        className={`partnership-inner scroll-animate ${isVisible ? 'in-view' : ''}`}
      >
        {/* Header */}
        <div className="partnership-header">
          <div className="title-wrapper">
            <h2>
              {['合', '作', '加', '盟'].map((char, index) => (
                <span
                  key={index}
                  className="char"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char}
                </span>
              ))}
            </h2>
          </div>
          <p className="subtitle">
            千亿视力康复市场，国家政策支持，专业团队指导，共创眼健康事业新蓝海
          </p>
        </div>

        {/* Hero Section */}
        <div className="partnership-hero">
          <div className="hero-badge">国家科技部创新基金支持项目</div>
          <h3 className="hero-title">1000 亿视力康复市场容量</h3>
          <p className="hero-cta-text">下一个千万精英代理，就是你！</p>
          <a href="tel:400-901-83138" className="phone-btn">
            <PiPhoneThin className="btn-icon" />
            400-901-83138 (免费咨询)
          </a>
        </div>

        {/* Market Stats Grid */}
        <div className="stats-grid">
          <StatCard
            icon={<PiUsersThin />}
            endValue={1500}
            suffix="万"
            label="弱视儿童市场"
            desc="不足 1% 的治疗率"
          />
          <StatCard
            icon={<PiTrendUpThin />}
            endValue={1000}
            suffix="亿"
            label="视力康复市场容量"
            desc="持续增长，潜力无限"
          />
          <StatCard
            icon={<PiBankThin />}
            endValue={100}
            suffix="%"
            label="政策支持力度"
            desc="国家政策大力扶持"
          />
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <div className="benefits-content">
            <h3 className="benefits-title">成为我们的合作伙伴</h3>
            <p className="benefits-subtitle">
              专业培训支持 · 品牌授权体系 · 完善售后服务
            </p>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">1</div>
                <div>
                  <h4>全方位市场推广支持</h4>
                  <p>品牌宣传、营销物料、线上线下推广</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">2</div>
                <div>
                  <h4>成熟商业模式与利润空间</h4>
                  <p>经过验证的盈利模式，丰厚回报</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">3</div>
                <div>
                  <h4>培训支持</h4>
                  <p>一对一培训，全程运营支持</p>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-image-wrapper">
            <img
              src="https://de4965e.webp.li/blog-images/2025/10/9f46fae74442e8cb7e83d891e9c3029a.png"
              alt="合作伙伴"
              className="benefits-image"
            />
          </div>
        </div>

        {/* Footer Policy Banner */}
        <div className="policy-banner">
          <div className="policy-content">
            <PiMegaphoneThin className="policy-icon" />
            <span className="policy-text">
              国家政策大力支持 — 医疗器械国产化加速
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, endValue, suffix, label, desc }) => {
  const numberRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: endValue,
              duration: 2,
              ease: 'power2.out',
              snap: { innerText: 1 }, // Snap to whole numbers
              onUpdate: function () {
                el.innerText = Math.ceil(
                  this.targets()[0].innerText,
                ).toLocaleString();
              },
            },
          );
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div className="stat-card" ref={cardRef}>
      <div className="stat-header-row">
        <div className="stat-number-wrapper">
          <span ref={numberRef} className="stat-number-text">
            0
          </span>
          <span className="stat-suffix">{suffix}</span>
        </div>
        <div className="stat-icon-wrapper">
          {React.cloneElement(icon, { className: 'stat-icon' })}
        </div>
      </div>

      <div className="stat-info">
        <div className="stat-label">{label}</div>
        <div className="stat-desc">{desc}</div>
      </div>
    </div>
  );
};

export default Partnership;
