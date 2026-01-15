import React from 'react';
import tinyLogo from '../../assets/tiny-logo.svg';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <div className="page-loader-overlay">
      <div className="loader-content">
        <div className="loader-logo-wrapper">
          <div className="loader-spinner"></div>
          <img src={tinyLogo} alt="Logo" className="loader-logo" />
        </div>
        <div className="loader-text">Loading</div>
      </div>
    </div>
  );
};

export default PageLoader;
