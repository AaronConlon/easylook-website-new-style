import React from 'react';
import { Link } from 'react-router-dom';
import { PiCaretRightThin } from 'react-icons/pi';
import HomeIcon from '../../assets/home-icon.svg';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mb-20">
      <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] pt-8">
        <Link
          to="/"
          className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
        >
          <img src={HomeIcon} alt="Home" className="w-4 h-4" />
          <span>首页</span>
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <PiCaretRightThin />
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text-primary)]">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
