import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import {
  PiBuildingsThin,
  PiTrendUpThin,
  PiHandshakeThin,
  PiMedalThin,
  PiArrowRightThin,
} from 'react-icons/pi';
import './AboutUs.css';

// Unsplash Image URLs
const companyImg =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200';
const historyImg =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200';
const partnersImg =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200'; // Medical handshake context
const honorsImg =
  'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&q=80&w=1200';

const AboutUs = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const cards = [
    {
      id: 'company',
      title: '企业介绍',
      engTitle: 'Company Introduction',
      desc: '视立优成立于 2018 年，专注于视力保护领域的研发与创新',
      icon: <PiBuildingsThin />,
      image: companyImg,
      className: 'card-company',
    },
    {
      id: 'development',
      title: '发展历程',
      engTitle: 'Development History',
      desc: '从创立至今，不断突破创新，引领行业发展方向',
      icon: <PiTrendUpThin />,
      image: historyImg,
      className: 'card-development',
    },
    {
      id: 'partners',
      title: '合作伙伴',
      engTitle: 'Partners',
      desc: '与多家知名医疗机构建立长期合作，服务网络遍及全国',
      icon: <PiHandshakeThin />,
      image: partnersImg,
      className: 'card-partners',
    },
    {
      id: 'honors',
      title: '荣誉资质',
      engTitle: 'Honors & Qualifications',
      desc: '国家医疗器械认证、ISO 质量体系认证等多项荣誉',
      icon: <PiMedalThin />,
      image: honorsImg,
      className: 'card-honors',
    },
  ];

  return (
    <section className="about-us-container" ref={ref}>
      <div
        className={`about-us-inner scroll-animate ${isVisible ? 'in-view' : ''}`}
      >
        {/* Header */}
        <div className="about-us-header">
          <div className="title-wrapper">
            <h2>
              {['关', '于', '我', '们'].map((char, index) => (
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
          <p className="subtitle">专业、创新、值得信赖的视力保护专家</p>
        </div>

        {/* Bento Grid */}
        <div className="about-grid">
          {cards.map((card) => (
            <div key={card.id} className={`grid-item ${card.className}`}>
              <div className="card-bg">
                <img src={card.image} alt={card.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <span className="card-subtitle-text">{card.engTitle}</span>
                  <div className="card-title-row">
                    <span className="card-icon">{card.icon}</span>
                    <h3 className="card-title">{card.title}</h3>
                  </div>
                </div>
                <p className="card-description">{card.desc}</p>

                <div className="card-arrow">
                  <PiArrowRightThin />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
