import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  PiPhoneThin,
  PiCaretDownThin,
  PiListThin,
  PiXThin,
  PiWhatsappLogoThin,
} from 'react-icons/pi';
import tinyLogo from '../../assets/tiny-logo.svg';
import qrCodeImg from '../../assets/qr-code.png';
import gongzhonghaoImg from '../../assets/gongzhonghao.png';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(pathname || '/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        { label: '关于视立优', href: '/about' },
        { label: '合作伙伴', href: '/about/partners' },
        { label: '公司荣誉', href: '/about/honor' },
      ],
    },
    { label: '眼界百科', href: '/encyclopedia', path: '/encyclopedia' },
    { label: '合作加盟', href: '/cooperation', path: '/cooperation' },
  ];

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="comp-inner">
        {/* Left: Navigation */}
        <nav
          className={`header-nav-left ${isMobileMenuOpen ? 'mobile-open' : ''}`}
        >
          {menuItems.map((item, index) => (
            <div key={index} className="nav-menu-item-wrapper">
              <Link
                to={item.href}
                prefetch="intent"
                className={`nav-menu-item ${
                  activeMenu === item.href ||
                  (item.href !== '/' && activeMenu.startsWith(item.href))
                    ? 'active'
                    : ''
                } ${item.children ? 'has-children' : ''}`}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                  } else {
                    handleMenuClick();
                  }
                }}
              >
                {item.icon && item.icon}
                {item.label === '首页' ? (
                  <div className="nav-menu-home-wrapper">{item.label}</div>
                ) : (
                  <span>{item.label}</span>
                )}
                {item.children && (
                  <PiCaretDownThin className="nav-menu-down-icon" />
                )}
              </Link>
              {item.children && (
                <div className="nav-menu-children-wrapper">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={child.href}
                      prefetch="intent"
                      onClick={() => {
                        handleMenuClick();
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Mobile-only Contact Us */}
          <div className="nav-menu-item-wrapper mobile-only-item">
            <Link
              to="/contact"
              className="nav-menu-item"
              onClick={() => {
                handleMenuClick();
              }}
            >
              <span>联系我们</span>
            </Link>
          </div>
        </nav>

        {/* Center: Logo */}
        <Link
          className={`header-logo-center ${activeMenu === '/' ? 'active' : ''}`}
          to="/"
          onClick={() => {
            handleMenuClick();
          }}
        >
          <img src={tinyLogo} alt="易视康 Logo" className="header-logo" />
        </Link>

        {/* Right: Actions (Contact + Mobile Toggle) */}
        <div className="header-actions-right">
          <Link
            to="/contact"
            className="nav-contact-link_text"
            onClick={() => {
              handleMenuClick();
            }}
          >
            联系我们
          </Link>

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

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <PiXThin size={24} />
            ) : (
              <PiListThin size={24} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
