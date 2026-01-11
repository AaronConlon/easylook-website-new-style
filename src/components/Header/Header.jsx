import React from 'react';
import useThemeStore from '../../store/themeStore';
import HeaderDefault from './HeaderDefault';
import HeaderLaifen from './HeaderLaifen';

// Import other theme components here as they are created

const Header = () => {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  // Theme Mapping
  const ThemeComponents = {
    default: HeaderDefault,
    laifen: HeaderLaifen,
  };

  const ActiveHeader = ThemeComponents[currentTheme] || HeaderDefault;

  return <ActiveHeader />;
};;

export default Header;
