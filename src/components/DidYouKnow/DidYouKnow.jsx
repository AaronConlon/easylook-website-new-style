import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { LuLightbulb } from 'react-icons/lu';
import './DidYouKnow.css';

const DidYouKnow = () => {
  const { t } = useTranslation('home');
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      className={`did-you-know-container scroll-animate ${isVisible ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="did-you-know-inner">
        <div className="did-you-know-header">
          <h2>
            <LuLightbulb className="dk-header-icon" />
            <span className="dk-header-text">
              {t('didYouKnow.header.text')
                .split('')
                .map((char, index) => (
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
              <span className="dk-unit">
                {t('didYouKnow.units.billionPeople')}
              </span>
            </div>
            <h3 className="dk-title">{t('didYouKnow.cards.1.title')}</h3>
            <p className="dk-subtitle">{t('didYouKnow.cards.1.subtitle')}</p>
            <p className="dk-desc">{t('didYouKnow.cards.1.desc')}</p>
          </div>

          <div className="dk-card" data-number="02">
            <div className="dk-counter">
              <span className="dk-number">1.4</span>
              <span className="dk-unit">
                {t('didYouKnow.units.billionPeople')}
              </span>
            </div>
            <h3 className="dk-title">{t('didYouKnow.cards.2.title')}</h3>
            <p className="dk-subtitle">{t('didYouKnow.cards.2.subtitle')}</p>
            <p className="dk-desc">{t('didYouKnow.cards.2.desc')}</p>
          </div>

          <div className="dk-card" data-number="03">
            <div className="dk-counter">
              <span className="dk-number">4.9</span>
              <span className="dk-unit">
                {t('didYouKnow.units.tenThousandPeople')}
              </span>
            </div>
            <h3 className="dk-title">{t('didYouKnow.cards.3.title')}</h3>
            <p className="dk-subtitle">{t('didYouKnow.cards.3.subtitle')}</p>
            <p className="dk-desc">{t('didYouKnow.cards.3.desc')}</p>
          </div>
        </div>

        <div className="did-you-know-footer">
          <p className="footnote">
            <span style={{ color: 'red', marginRight: '4px' }}>*</span>
            {t('didYouKnow.footer')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
