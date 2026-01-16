import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import DidYouKnow from '../../components/DidYouKnow/DidYouKnow';
import ProductShowcase from '../../components/ProductShowcase/ProductShowcase';
import Encyclopedia from '../../components/Encyclopedia/Encyclopedia';
import Partnership from '../../components/Partnership/Partnership';
import AboutUs from '../../components/AboutUs/AboutUs';
import PartnerScroll from '../../components/PartnerScroll/PartnerScroll';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <Helmet>
        <title>{t('helmet.title')}</title>
        <meta name="description" content={t('helmet.description')} />
      </Helmet>
      <HeroCarousel />
      <DidYouKnow />
      <ProductShowcase />
      <Encyclopedia />
      <Partnership showBenefits={false} />
      <PartnerScroll />
      <AboutUs />
    </>
  );
};

export default Home;
