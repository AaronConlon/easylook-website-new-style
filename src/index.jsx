import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Import i18n configuration

// Expose version to window and log it
const appVersion = import.meta.env.APP_VERSION;
window.__version__ = appVersion;
console.log(`🚀 Current Version: ${appVersion}`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
