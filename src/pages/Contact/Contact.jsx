import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';
import ContactForm from '../../components/ContactForm/ContactForm';
import mapImg from '../../assets/map.png';
import logoImg from '../../assets/full-logo.png';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation('contact');
  const { t: tCommon } = useTranslation('common');

  const addressValue = tCommon('contact.addressValue');
  return (
    <div className="contact-page">
      <Helmet>
        <title>{t('helmet.title')}</title>
        <meta name="description" content={t('helmet.description')} />
      </Helmet>

      <div className="contact-container">
        <div className="contact-header">
          <h1>{t('header.title')}</h1>
        </div>

        <div className="contact-map-section">
          <div className="map-wrapper">
            <img src={mapImg} alt={t('map.imageAlt')} className="map-image" />
          </div>

          <div className="flex justify-center">
            <div className="address-info-trigger">
              <div className="address-label">
                <LuMapPin size={20} />
                <span>{t('map.addressLabel', { address: addressValue })}</span>
              </div>

              {/* Popup Card */}
              <div className="address-popup-card">
                <img
                  src={logoImg}
                  alt={t('popup.logoAlt')}
                  className="popup-logo mx-auto"
                />
                <div className="popup-content">
                  <div className="popup-item">
                    <div className="popup-header-row">
                      <LuMapPin className="popup-icon" />
                      <LuMapPin className="popup-icon" />
                      <span className="popup-label">{t('popup.address')}</span>
                    </div>
                    <span className="popup-value">{addressValue}</span>
                  </div>
                  <div className="popup-item">
                    <div className="popup-header-row">
                      <LuPhone className="popup-icon" />
                      <span className="popup-label">{t('popup.phone')}</span>
                    </div>
                    <span className="popup-value">400-901-83138</span>
                  </div>
                  <div className="popup-item">
                    <div className="popup-header-row">
                      <LuMail className="popup-icon" />
                      <span className="popup-label">{t('popup.email')}</span>
                    </div>
                    <span className="popup-value">
                      easylook.business@weiaihealthcare.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Online Message Form */}
      <ContactForm />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: t('breadcrumbs') }]} />
    </div>
  );
};

export default Contact;
