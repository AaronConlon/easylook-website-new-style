import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  LuBuilding2,
  LuTrendingUp,
  LuHandshake,
  LuMedal,
} from 'react-icons/lu';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation('home');
  const cards = [
    {
      id: 1,
      title: t('aboutUs.company.title'),
      engTitle: t('aboutUs.company.engTitle'),
      icon: <LuBuilding2 />,
      link: '/about',
      className: 'card-company',
    },
    // {
    //   id: 3,
    //   title: '合作伙伴',
    //   engTitle: 'Strategic Partners',
    //   icon: <PiHandshakeThin />,
    //   link: '/about/partners',
    //   className: 'card-partners',
    // },
    {
      id: 4,
      title: t('aboutUs.honor.title'),
      engTitle: t('aboutUs.honor.engTitle'),
      icon: <LuMedal />,
      link: '/honor',
      className: 'card-honors',
    },
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-inner">
        <div className="about-grid">
          {cards.map((card) => (
            <Link
              to={card.link}
              key={card.id}
              className="grid-item"
              prefetch="intent"
            >
              <div className="about-card-content">
                <div className="card-icon-wrapper">{card.icon}</div>
                <h5 className="mt-6 font-semibold">
                  {card.title}
                </h5>
                <div className="card-subtitle-text">{card.engTitle}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
