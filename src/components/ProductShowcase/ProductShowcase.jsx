import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ProductShowcase.css';
import { Link } from 'react-router-dom';
import { PiArrowRightThin } from 'react-icons/pi';

const ProductShowcase = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const products = [
    {
      id: 1,
      title: '视觉训练套盒',
      subtitle: '全方位视觉机能训练方案',
      badge: '专业版',
      description:
        '视立优·视觉训练套盒是一款集成式一体化通用视觉训练方案，可用于屈光不正人群；弱视、斜视、斜视术后康复人群；眼保健人群；视疲劳、阅读障碍、学习困难等非斜视性双眼视功能异常人群。',

      bgImage:
        'https://gw-static.laifen.net/media/home/kv/wave-xs-sm-16-9.webp',
    },
    {
      id: 2,
      title: '集合训练器',
      subtitle: '智能视功能提升设备',
      badge: '标准版',
      description:
        '视立优 - 集合训练器是一类专为视力保护与改善设计的智能硬件设备，广泛应用于近视防控、弱视训练、视功能提升等场景，尤其适合儿童和青少年用户。',

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
                    进一步了解 <PiArrowRightThin className="btn-icon" />
                  </Link>
                  <Link to={`/product-${product.id}`} className="btn-buy">
                    购买
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
