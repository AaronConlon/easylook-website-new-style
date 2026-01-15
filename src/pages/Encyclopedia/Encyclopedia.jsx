import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';
import './Encyclopedia.css';

const encyclopediaImages = [
  'https://de4965e.webp.li/blog-images/2025/10/2f6a0b55f60a69ba64b0c7e5bf97b5c7.jpg',
  'https://de4965e.webp.li/blog-images/2025/10/d89cbd705e25b8c7ed4633435d2c9018.jpg',
  'https://de4965e.webp.li/blog-images/2025/10/d2ef59747813c40c6b1850900d8414c5.png',
  'https://de4965e.webp.li/blog-images/2025/10/750a08e613813151408136d78b5af9d8.png',
  'https://de4965e.webp.li/blog-images/2025/10/8d1768840d4f6c5e1ec7a19ecc336ac2.png',
];

const Encyclopedia = () => {
  const { t } = useTranslation('encyclopedia');
  return (
    <div className="encyclopedia-page">
      <Helmet>
        <title>{t('helmet.title')}</title>
        <meta name="description" content={t('helmet.description')} />
      </Helmet>

      {/* Banner */}
      <div
        className="encyclopedia-banner h-32 md:h-64 lg:h-96"
        style={{
          backgroundImage:
            'url("https://gw-static.laifen.net/static/laifen-website-ui/8bfb6537/static/webp/support-banner-b7dfd02d.webp")',
        }}
      ></div>

      <div className="encyclopedia-header">
        <h1>{t('header.title')}</h1>
      </div>

      <div className="encyclopedia-container">
        <div className="encyclopedia-list">
          {['1', '2', '3', '4', '5'].map((id, index) => (
            <article key={index} className="encyclopedia-item">
              <div className="item-cover">
                <img
                  src={encyclopediaImages[index]}
                  alt={t(`articles.${id}.title`)}
                  loading="lazy"
                />
              </div>
              <div className="item-content">
                <h3 className="item-title">{t(`articles.${id}.title`)}</h3>
                <p className="item-description">
                  {t(`articles.${id}.description`)}
                </p>
                <div className="item-footer">
                  <div className="tags">
                    {t(`articles.${id}.tags`, { returnObjects: true }).map(
                      (tag, tagIndex) => (
                        <span key={tagIndex} className="tag">
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="item-time">{t(`articles.${id}.time`)}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: t('breadcrumbs') }]} />
    </div>
  );
};

export default Encyclopedia;
