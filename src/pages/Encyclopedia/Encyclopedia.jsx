import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';
import './Encyclopedia.css';

const encyclopediaData = [
  {
    title: '隐形眼镜过夜戴 你的眼睛答应吗？',
    image: 'https://de4965e.webp.li/blog-images/2025/10/2f6a0b55f60a69ba64b0c7e5bf97b5c7.jpg',
    description: '很多人都有过类似体验：隐形眼镜佩戴几小时后，眼睛突然出现刺痛、瘙痒和异物感，甚至迅速发红。',
    tags: ['隐形眼镜', '护眼', '健康'],
    time: '2025-01-14',
  },
  {
    title: '十大伤眼行为 你中了几个？',
    image: 'https://de4965e.webp.li/blog-images/2025/10/d89cbd705e25b8c7ed4633435d2c9018.jpg',
    description: '必须严肃提醒大家：生活中很多看似不起眼的习惯，正在悄悄伤害你的眼睛！这 10 个行为尤其要注意...',
    tags: ['护眼', '健康', '预防'],
    time: '2025-01-13',
  },
  {
    title: '大国小工匠｜桃浦新"视"力，系列科普活动第一期精彩回顾！',
    image: 'https://de4965e.webp.li/blog-images/2025/10/d2ef59747813c40c6b1850900d8414c5.png',
    description: '"大国小工匠 桃浦新视力——小小眼科医生职业体验"系列活动在普陀区桃浦镇党群服务中心顺利举办。',
    tags: ['科普活动', '儿童', '体验'],
    time: '2025-01-12',
  },
  {
    title: '揭秘双眼视功能：为何双眼看物能合二为一？​',
    image: 'https://de4965e.webp.li/blog-images/2025/10/750a08e613813151408136d78b5af9d8.png',
    description: '双眼视功能是指两只眼睛协同工作的能力，包括同时聚焦、融合图像和感知立体空间，从而形成清晰、立体的视觉。',
    tags: ['视功能', '科普', '专业'],
    time: '2025-01-11',
  },
  {
    title: '警惕！近视和斜视可能在恶性循环！',
    image: 'https://de4965e.webp.li/blog-images/2025/10/8d1768840d4f6c5e1ec7a19ecc336ac2.png',
    description: '近视和斜视可能存在恶性循环，近视会导致眼睛调节能力下降，从而更容易出现斜视。',
    tags: ['近视', '斜视', '预防'],
    time: '2025-01-10',
  },
];

const Encyclopedia = () => {
  return (
    <div className="encyclopedia-page">
      <Helmet>
        <title>眼界百科 - 专业的视力保护解决方案提供商，守护您的视界健康</title>
        <meta
          name="description"
          content="视立优眼界百科，为您提供最专业的爱眼护眼知识、常见眼病预防及最新视功能康复科普。"
        />
      </Helmet>

      {/* Banner */}
      <div 
        className="encyclopedia-banner h-32 md:h-64 lg:h-96"
        style={{ backgroundImage: 'url("https://gw-static.laifen.net/static/laifen-website-ui/8bfb6537/static/webp/support-banner-b7dfd02d.webp")' }}
      ></div>

      <div className="encyclopedia-header">
        <h1>眼界百科</h1>
      </div>

      <div className="encyclopedia-container">
        <div className="encyclopedia-list">
          {encyclopediaData.map((article, index) => (
            <article key={index} className="encyclopedia-item">
              <div className="item-cover">
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>
              <div className="item-content">
                <h3 className="item-title">{article.title}</h3>
                <p className="item-description">{article.description}</p>
                <div className="item-footer">
                  <div className="tags">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="item-time">{article.time}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: '眼界百科' }]} />
    </div>
  );
};

export default Encyclopedia;
