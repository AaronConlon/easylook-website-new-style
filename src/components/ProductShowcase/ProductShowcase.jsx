import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ProductShowcase.css';
import xunlianheImg from '../../assets/xunlianhe.png';
import xunlianqiImg from '../../assets/xunlianqi.png';
import { PiArrowRightThin } from 'react-icons/pi';

const ProductShowcase = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const products = [
    {
      id: 1,
      title: '视觉训练套盒',
      description:
        '视立优·视觉训练套盒是一款集成式一体化通用视觉训练方案，可用于屈光不正人群；弱视、斜视、斜视术后康复人群；眼保健人群；视疲劳、阅读障碍、学习困难等非斜视性双眼视功能异常人群。',
      image: xunlianheImg,
    },
    {
      id: 2,
      title: '集合训练器',
      description:
        '视立优 - 集合训练器是一类专为视力保护与改善设计的智能硬件设备，广泛应用于近视防控、弱视训练、视功能提升等场景，尤其适合儿童和青少年用户。',
      image: xunlianqiImg,
    },
  ];

  return (
    <div
      className={`product-showcase-container scroll-animate ${isVisible ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="product-showcase-inner g-comp-ScreenMediaWidthCentered">
        {/* Header Section */}
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
          {/* <div className="subtitle-wrapper">
            <p>专业的医疗级眼科检测设备，为眼健康提供精准筛查方案</p>
          </div> */}
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                {/* Optional Tag or Overlay can go here */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
