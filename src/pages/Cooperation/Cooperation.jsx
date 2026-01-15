import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Partnership from '../../components/Partnership/Partnership';
import PartnerScroll from '../../components/PartnerScroll/PartnerScroll';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';

const Cooperation = () => {
  const { t } = useTranslation('cooperation');
  return (
    <div className="cooperation-page">
      <Helmet>
        <title>{t('helmet.title')}</title>
        <meta name="description" content={t('helmet.description')} />
      </Helmet>

      {/* Show Partnership with all sections */}
      <Partnership showBenefits={true} />
      {/* 合作伙伴滚动 */}
      <PartnerScroll />
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: t('breadcrumbs') }]} />
    </div>
  );
};

export default Cooperation;
