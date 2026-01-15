import React from 'react';
import { Helmet } from 'react-helmet-async';
import Partnership from '../../components/Partnership/Partnership';
import PartnerScroll from '../../components/PartnerScroll/PartnerScroll';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';

const Cooperation = () => {
  return (
    <div className="cooperation-page">
      <Helmet>
        <title>合作加盟 - 专业的视力保护解决方案提供商，守护您的视界健康</title>
        <meta
          name="description"
          content="视立优 EASYLOOK 合作加盟页面。千亿视力康复市场，国家政策支持，专业团队指导，共创眼健康事业新蓝海。"
        />
      </Helmet>

      {/* Show Partnership with all sections */}
      <Partnership showBenefits={true} />
      {/* 合作伙伴滚动 */}
      <PartnerScroll />
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: '合作加盟' }]} />
    </div>
  );
};

export default Cooperation;
