import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PiHouseThin } from 'react-icons/pi';
import './NotFound.css';

const NotFound = () => {
  const { t } = useTranslation('notfound');
  return (
    <div className="not-found-container">
      <Helmet>
        <title>{t('helmet.title')}</title>
      </Helmet>
      <div className="not-found-content">
        <h1 className="not-found-title">{t('title')}</h1>
        <p className="not-found-desc">{t('description')}</p>
        <Link to="/" className="back-home-btn">
          <PiHouseThin className="btn-icon" />
          <span>{t('backHome')}</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
