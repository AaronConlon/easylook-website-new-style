import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import DidYouKnow from '../../components/DidYouKnow/DidYouKnow';
import ProductShowcase from '../../components/ProductShowcase/ProductShowcase';
import Encyclopedia from '../../components/Encyclopedia/Encyclopedia';
// import UserStories from '../../components/UserStories/UserStories';
import Partnership from '../../components/Partnership/Partnership';
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          视立优 EASYLOOK - 专业的视力保护解决方案提供商，守护您的视界健康
        </title>
        <meta
          name="description"
          content="视立优 EASYLOOK 专业的视力保护解决方案提供商，深耕于眼视光医疗行业，致力于为大众提供近视防控、行为视光、视觉康复、成人视疲劳等各类眼视光前沿性产品。"
        />
      </Helmet>
      <HeroCarousel />
      <DidYouKnow />
      <ProductShowcase />
      <Encyclopedia />
      {/* <UserStories /> */}
      <Partnership showBenefits={false} />
      <AboutUs />
    </>
  );
};

export default Home;
