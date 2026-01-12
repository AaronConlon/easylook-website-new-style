import { useState, useEffect } from 'react';
import {
  PiPhoneThin,
  PiCaretDownThin,
  PiListThin,
  PiXThin,
  PiWhatsappLogoThin,
} from 'react-icons/pi';
import tinyLogo from '../../assets/tiny-logo.png';
import qrCodeImg from '../../assets/qr-code.png';
import gongzhonghaoImg from '../../assets/gongzhonghao.png';
import './Header.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(() => {
    return window.location.hash.replace('#', '') || '/';
  });
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
    if (activeMenu) {
      const targetHash = activeMenu.startsWith('/')
        ? '#' + activeMenu
        : '#' + activeMenu;
      // Simple check to avoid loops if needed, though hash setter is usually safe
      if (window.location.hash !== targetHash) {
        window.location.hash = activeMenu;
      }
    }
  }, [activeMenu]);

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

  const handleMenuClick = (href) => {
    setActiveMenu(href);
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
              <a
                data-href={item.path}
                className={`nav-menu-item ${
                  activeMenu === item.href ||
                  (item.path !== '/' && activeMenu.startsWith(item.path))
                    ? 'active'
                    : ''
                } ${item.children ? 'has-children' : ''}`}
                href={item.children ? 'javascript:void(0)' : `/#${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (!item.children) {
                    handleMenuClick(item.href);
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
          {/* Mobile-only Contact Us */}
          <div className="nav-menu-item-wrapper mobile-only-item">
            <a
              href="/#contact"
              className="nav-menu-item"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('/contact');
              }}
            >
              <span>联系我们</span>
            </a>
          </div>
        </nav>

        {/* Center: Logo */}
        <a
          className={`header-logo-center ${activeMenu === '/' ? 'active' : ''}`}
          href="/#/"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick('/');
          }}
        >
          <img src={tinyLogo} alt="易视康 Logo" className="header-logo" />
        </a>

        {/* Right: Actions (Contact + Mobile Toggle) */}
        <div className="header-actions-right">
          <a
            href="/#contact"
            className="nav-contact-link_text"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('/contact');
            }}
          >
            联系我们
          </a>

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
};;

export default Header;
