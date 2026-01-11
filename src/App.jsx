import useThemeStore from './store/themeStore';
import AppDefault from './AppDefault';
import AppLaifen from './AppLaifen';

const App = () => {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  const ThemeApps = {
    default: AppDefault,
    laifen: AppLaifen,
  };

  const SelectedApp = ThemeApps[currentTheme] || AppDefault;

  return <SelectedApp />;
};

export default App;
