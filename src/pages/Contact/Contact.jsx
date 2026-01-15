import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PiMapPinThin, PiPhoneThin, PiEnvelopeThin } from 'react-icons/pi';
import Breadcrumbs from '../../components/Shared/Breadcrumbs';
import ContactForm from '../../components/ContactForm/ContactForm';
import mapImg from '../../assets/map.png';
import logoImg from '../../assets/full-logo.png';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>联系我们 - 专业的视力保护解决方案提供商，守护您的视界健康</title>
        <meta
          name="description"
          content="联系视立优 EASYLOOK。我们的团队随时为您提供专业的视力保护咨询和服务。地址：上海市普陀区交通路4711号李子园大厦1308室。"
        />
      </Helmet>

      <div className="contact-container">
        <div className="contact-header">
          <h1>联系我们</h1>
        </div>

        <div className="contact-map-section">
          <div className="map-wrapper">
            <img src={mapImg} alt="公司地址" className="map-image" />
          </div>

          <div className="flex justify-center">
            <div className="address-info-trigger">
              <div className="address-label">
                <PiMapPinThin size={20} />
                <span>公司地址: 上海市普陀区交通路4711号李子园大厦1308室</span>
              </div>

              {/* Popup Card */}
              <div className="address-popup-card">
                <img
                  src={logoImg}
                  alt="视立优"
                  className="popup-logo mx-auto"
                />
                <div className="popup-content">
                  <div className="popup-item">
                    <div className="popup-header-row">
                      <PiMapPinThin className="popup-icon" />
                      <span className="popup-label">地址</span>
                    </div>
                    <span className="popup-value">
                      上海市普陀区交通路4711号李子园大厦1308室
                    </span>
                  </div>
                  <div className="popup-item">
                    <div className="popup-header-row">
                      <PiPhoneThin className="popup-icon" />
                      <span className="popup-label">电话</span>
                    </div>
                    <span className="popup-value">400-901-83138</span>
                  </div>
                  <div className="popup-item">
                    <div className="popup-header-row">
                      <PiEnvelopeThin className="popup-icon" />
                      <span className="popup-label">邮箱</span>
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
      <Breadcrumbs items={[{ label: '联系我们' }]} />
    </div>
  );
};

export default Contact;
