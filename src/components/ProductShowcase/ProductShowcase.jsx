import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ProductShowcase.css';
import { Link } from 'react-router-dom';
import { PiArrowRightThin } from 'react-icons/pi';

const ProductShowcase = () => {
  const { t } = useTranslation('home');
  const [ref, isVisible] = useScrollAnimation(0.1);

  const products = [
    {
      id: 1,
      title: t('products.1.title'),
      subtitle: t('products.1.subtitle'),
      badge: t('products.1.badge'),
      description: t('products.1.description'),

      bgImage:
        'https://gw-static.laifen.net/media/home/kv/wave-xs-sm-16-9.webp',
    },
    {
      id: 2,
      title: t('products.2.title'),
      subtitle: t('products.2.subtitle'),
      badge: t('products.2.badge'),
      description: t('products.2.description'),

      bgImage:
        'https://gw-static.laifen.net/static/laifen-website-ui/8bfb6537/static/webp/swift-4-standard-40e67878.webp',
    },
  ];

  return (
    <div
      className={`product-showcase-container scroll-animate ${isVisible ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="product-showcase-inner g-comp-ScreenMediaWidthCentered">
        {/* Product Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-bg">
                <picture className="fade-in">
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 2560px)"
                  />
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/resize,w_1920/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/resize,w_3840/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 1920px)"
                  />
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/resize,w_1536/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/resize,w_3072/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 1536px)"
                  />
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/resize,w_1280/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/resize,w_2560/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 1280px)"
                  />
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/resize,w_1280/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/resize,w_2560/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 1024px)"
                  />
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/resize,w_1280/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/resize,w_2560/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/resize,w_1280/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/resize,w_2560/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 640px)"
                  />
                  <source
                    srcSet={`${product.bgImage}?x-oss-process=image/resize,w_1280/quality,Q_100/format,avif 1x, ${product.bgImage}?x-oss-process=image/resize,w_2560/quality,Q_100/format,avif 2x`}
                    type="image/avif"
                    media="(min-width: 0px)"
                  />
                  <img
                    src={`${product.bgImage}?x-oss-process=image/quality,Q_100/format,avif`}
                    alt=""
                    className="lazy-image fade-in object-center object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="product-info-top">
                <div className="title-row">
                  <h3 className="product-title">{product.title}</h3>
                  {/* <span className="product-badge">{product.badge}</span> */}
                </div>
                <p className="product-subtitle">{product.subtitle}</p>
                <div className="product-btns">
                  <Link to={`/product-${product.id}`} className="btn-learn">
                    {t('products.buttons.learn')}{' '}
                    <PiArrowRightThin className="btn-icon" />
                  </Link>
                  <Link to={`/product-${product.id}`} className="btn-buy">
                    {t('products.buttons.buy')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
