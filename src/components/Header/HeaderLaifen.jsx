import { useState, useEffect } from 'react';
import {
  PiPhoneThin,
  PiCaretDownThin,
  PiListThin,
  PiXThin,
  PiWhatsappLogoThin,
} from 'react-icons/pi';
import logoSvg from '../../assets/logo.svg';
import qrCodeImg from '../../assets/qr-code.png';
import gongzhonghaoImg from '../../assets/gongzhonghao.png';
import './Header.css';

const HeaderLaifen = () => {
  const [activeMenu, setActiveMenu] = useState(() => {
    return window.location.hash.replace('#', '') || '/';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDeepScrolled, setIsDeepScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
      setIsDeepScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: '首页', href: '/', path: '/' },
    {
      label: '产品介绍',
      href: '/product-1',
      path: '/product-1',
      children: [
        { label: '视觉训练套盒', href: '/product-1' },
        { label: '眼视光训练器', href: '/product-2' },
      ],
    },
    {
      label: '关于我们',
      href: '/about/company',
      path: '/about/company',
      children: [
        { label: '公司介绍', href: '/about/company' },
        { label: '发展历程', href: '/about/story' },
        { label: '合作伙伴', href: '/about/partners' },
        { label: '公司荣誉', href: '/about/honor' },
      ],
    },
    { label: '眼界百科', href: '/encyclopedia', path: '/encyclopedia' },
    { label: '合作加盟', href: '/cooperation', path: '/cooperation' },
    {
      label: '联系我们',
      href: '/contact',
      path: '/contact',
      icon: <PiPhoneThin />,
    },
  ];

  const handleMenuClick = (href) => {
    setActiveMenu(href);
    setIsMobileMenuOpen(false);
    window.location.hash = href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`header header-laifen ${isScrolled ? 'is-scrolled' : ''} ${
        isDeepScrolled ? 'is-deep-scrolled' : ''
      }`}
    >
      <div className="comp-inner">
        <a
          className={`header-logo-wrapper ${activeMenu === '/' ? 'active' : ''}`}
          href="/#/"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick('/');
          }}
        >
          <img src={logoSvg} alt="易视康 Logo" className="header-logo" />
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <PiXThin size={24} /> : <PiListThin size={24} />}
        </button>

        <nav
          className={`header-nav-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}
        >
          <div className="nav-menu-list">
            {menuItems.map((item, index) => (
              <div key={index} className="nav-menu-item-wrapper">
                <a
                  data-href={item.path}
                  className={`nav-menu-item ${
                    activeMenu === item.href ||
                    (item.path !== '/' && activeMenu.startsWith(item.path))
                      ? 'active'
                      : ''
                  }`}
                  href={`/#${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                >
                  {item.icon && item.icon}
                  <span>{item.label}</span>
                  {item.children && (
                    <PiCaretDownThin className="nav-menu-down-icon" />
                  )}
                </a>
                {item.children && (
                  <div className="nav-menu-children-wrapper">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={`/#${child.href}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuClick(child.href);
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="header-contact-wrapper">
            <button className="header-contact-icon" aria-label="Contact">
              <PiWhatsappLogoThin size={24} />
            </button>
            <div className="header-contact-popup">
              <div className="contact-popup-phone">
                <PiPhoneThin size={18} />
                <span>400-901-83138</span>
              </div>
              <div className="contact-popup-qr">
                <div className="qr-item">
                  <img src={qrCodeImg} alt="微信公众号" />
                  <span>微信公众号</span>
                </div>
                <div className="qr-item">
                  <img src={gongzhonghaoImg} alt="小程序" />
                  <span>小程序</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLaifen;
