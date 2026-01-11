import React from 'react';
import useThemeStore from '../../store/themeStore';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'default' ? 'laifen' : 'default';
    setTheme(nextTheme);
  };

  const themeLabel = currentTheme === 'default' ? '3neyecare' : '徕芬';

  return (
    <div className="theme-switcher" onClick={toggleTheme}>
      {themeLabel}
    </div>
  );
};

export default ThemeSwitcher;
