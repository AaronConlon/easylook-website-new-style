import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ProductShowcase.css';
import xunlianheImg from '../../assets/xunlianhe.png';
import xunlianqiImg from '../../assets/xunlianqi.png';
import { PiArrowRightThin } from 'react-icons/pi';
import useThemeStore from '../../store/themeStore';

const ProductShowcase = ({ theme: propTheme }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const storeTheme = useThemeStore((state) => state.currentTheme);
  const theme = propTheme || storeTheme;
  const isLaifen = theme === 'laifen';

  const products = [
    {
      id: 1,
      title: '视觉训练套盒',
      subtitle: '全方位视觉机能训练方案',
      badge: '专业版',
      description:
        '视立优·视觉训练套盒是一款集成式一体化通用视觉训练方案，可用于屈光不正人群；弱视、斜视、斜视术后康复人群；眼保健人群；视疲劳、阅读障碍、学习困难等非斜视性双眼视功能异常人群。',
      image: xunlianheImg,
    },
    {
      id: 2,
      title: '集合训练器',
      subtitle: '智能视功能提升设备',
      badge: '标准版',
      description:
        '视立优 - 集合训练器是一类专为视力保护与改善设计的智能硬件设备，广泛应用于近视防控、弱视训练、视功能提升等场景，尤其适合儿童和青少年用户。',
      image: xunlianqiImg,
    },
  ];

  return (
    <div
      className={`product-showcase-container ${isLaifen ? 'theme-laifen' : ''} scroll-animate ${isVisible ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="product-showcase-inner g-comp-ScreenMediaWidthCentered">
        {/* Header Section */}
        {!isLaifen && (
          <div className="product-header">
            <div className="title-wrapper">
              <h2>
                {['产', '品', '介', '绍'].map((char, index) => (
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
              </h2>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {isLaifen ? (
                <>
                  <div className="product-info-top">
                    <div className="title-row">
                      <h3 className="product-title">{product.title}</h3>
                      <span className="product-badge">{product.badge}</span>
                    </div>
                    <p className="product-subtitle">{product.subtitle}</p>
                    <div className="product-btns">
                      <a href={`/product-${product.id}`} className="btn-learn">
                        进一步了解 <PiArrowRightThin className="btn-icon" />
                      </a>
                      <a href={`/product-${product.id}`} className="btn-buy">
                        购买
                      </a>
                    </div>
                  </div>
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="product-action">
                      <a
                        href={`/product-${product.id}`}
                        className="view-details-btn"
                      >
                        查看详情 <PiArrowRightThin className="action-icon" />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
