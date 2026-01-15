import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PiHouseThin } from 'react-icons/pi';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>
          页面找不到了 - 专业的视力保护解决方案提供商，守护您的视界健康
        </title>
      </Helmet>
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-desc">
          专业的视力保护解决方案提供商，守护您的视界健康。
        </p>
        <Link to="/" className="back-home-btn">
          <PiHouseThin className="btn-icon" />
          <span>返回首页</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
