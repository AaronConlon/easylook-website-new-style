import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { PiLightbulbThin } from 'react-icons/pi';
import './DidYouKnow.css';

const DidYouKnow = ({ theme }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      className={`did-you-know-container theme-${theme} scroll-animate ${isVisible ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="did-you-know-inner">
        <div className="did-you-know-header">
          <h2>
            <PiLightbulbThin className="dk-header-icon" />
            <span className="dk-header-text">
              {['你', '知', '道', '吗', '？'].map((char, index) => (
                <span
                  key={index}
                  className="char"
                  style={{
                    display: 'inline-block',
                    animationDelay: `${0.1 * (index + 1)}s`,
                    opacity: isVisible ? 1 : 0,
                    animationName: isVisible ? 'fadeInUp' : 'none',
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>
        </div>

        <div className="did-you-know-grid">
          <div className="dk-card" data-number="01">
            <div className="dk-counter">
              <span className="dk-number">7.0</span>
              <span className="dk-unit">亿人</span>
            </div>
            <h3 className="dk-title">屈光不正人群</h3>
            <p className="dk-subtitle">REFRACTIVE ERRORS</p>
            <p className="dk-desc">
              我国屈光不正人群约 7 亿人，儿童青少年总体近视率高达
              52.7%，已成为影响国民视觉健康的重大公共卫生问题
            </p>
          </div>

          <div className="dk-card" data-number="02">
            <div className="dk-counter">
              <span className="dk-number">1.4</span>
              <span className="dk-unit">亿人</span>
            </div>
            <h3 className="dk-title">斜视患病人群</h3>
            <p className="dk-subtitle">STRABISMUS PATIENTS</p>
            <p className="dk-desc">
              我国斜视人数约 1.43 亿人，斜视患病率为 3%，约 51%
              的近视防控患者存在斜视问题，不仅影响外观，更会导致双眼视功能异常
            </p>
          </div>

          <div className="dk-card" data-number="03">
            <div className="dk-counter">
              <span className="dk-number">4.9</span>
              <span className="dk-unit">万人</span>
            </div>
            <h3 className="dk-title">儿童弱视患者</h3>
            <p className="dk-subtitle">CHILDHOOD AMBLYOPIA</p>
            <p className="dk-desc">
              我国儿童弱视患者预计约 487.2
              万人，弱视是儿童常见的视觉发育性疾病，早期发现和治疗是关键，3-12
              岁是最佳治疗期
            </p>
          </div>
        </div>

        <div className="did-you-know-footer">
          <p className="footnote">
            *
            数据来源于《中国儿童斜弱视数字化治疗现状蓝皮书》、《"十四五"全国眼健康规划（2021-2025
            年）》及截至全国家卫健委 2024 年公布数据统计
          </p>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
