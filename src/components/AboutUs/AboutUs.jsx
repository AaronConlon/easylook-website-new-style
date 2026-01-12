import {
  PiBuildingsThin,
  PiTrendUpThin,
  PiHandshakeThin,
  PiMedalThin,
} from 'react-icons/pi';
import './AboutUs.css';

const AboutUs = () => {
  const cards = [
    {
      id: 1,
      title: '公司介绍',
      engTitle: 'Company Introduction',
      icon: <PiBuildingsThin />,
      link: '/about',
      className: 'card-company',
    },
    {
      id: 3,
      title: '合作伙伴',
      engTitle: 'Strategic Partners',
      icon: <PiHandshakeThin />,
      link: '/partners',
      className: 'card-partners',
    },
    {
      id: 4,
      title: '公司荣誉',
      engTitle: 'Company Honors',
      icon: <PiMedalThin />,
      link: '/honor',
      className: 'card-honors',
    },
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-inner">
        <div className="about-grid">
          {cards.map((card) => (
            <a href={card.link} key={card.id} className="grid-item">
              <div className="about-card-content">
                <div className="card-icon-wrapper">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <div className="card-subtitle-text">{card.engTitle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
