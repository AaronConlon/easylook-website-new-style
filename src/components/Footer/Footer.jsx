import { PiPhoneThin, PiEnvelopeThin, PiMapPinThin } from 'react-icons/pi';
import logoSvg from '../../assets/logo.svg';
import gongzhonghaoImg from '../../assets/gongzhonghao.png';
import qrCodeImg from '../../assets/qr-code.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: '产品介绍', href: '/product-1' },
    { label: '眼界百科', href: '/encyclopedia' },
    { label: '合作加盟', href: '/cooperation' },
    { label: '关于我们', href: '/about/company' },
  ];

  const contactInfo = [
    {
      icon: <PiPhoneThin />,
      label: '电话',
      value: '400-901-83138',
    },
    {
      icon: <PiEnvelopeThin />,
      label: '邮箱',
      value: 'easylook.business@weiaihealthcare.com',
    },
    {
      icon: <PiMapPinThin />,
      label: '地址',
      value: '上海市普陀区交通路4711号李子园大厦1308室',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo and Description */}
          <div className="footer-brand">
            <img src={logoSvg} alt="视立优 EASYLOOK" className="footer-logo" />
            <p className="footer-description">
              专业的视力保护解决方案提供商，守护您的视界健康。
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h3 className="footer-section-title">快速链接</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`/#${link.href}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-section-title">联系方式</h3>
            <ul className="footer-contact-list">
              {contactInfo.map((item, index) => (
                <li key={index} className="footer-contact-item">
                  <span className="footer-contact-icon">{item.icon}</span>
                  <div className="footer-contact-content">
                    <span className="footer-contact-label">{item.label}</span>
                    <span className="footer-contact-value">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us - QR Codes */}
          <div className="footer-follow">
            <h3 className="footer-section-title">关注我们</h3>
            <div className="footer-qr-codes">
              <div className="footer-qr-item">
                <img
                  src={qrCodeImg}
                  alt="微信公众号"
                  className="footer-qr-image"
                />
                <span>微信公众号</span>
              </div>
              <div className="footer-qr-item">
                <img
                  src={gongzhonghaoImg}
                  alt="小程序"
                  className="footer-qr-image"
                />
                <span>小程序</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} 上海惟爱医疗科技有限公司. All rights reserved.
          </p>
          <div className="footer-legal">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              沪ICP备2023018740号-3
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
