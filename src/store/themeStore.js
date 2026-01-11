import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      currentTheme: import.meta.env.VITE_APP_THEME || 'default',
      themes: [
        { id: 'default', label: '3neyecare', color: '#0052d9' },
        { id: 'laifen', label: '徕芬', color: '#2286FE' },
      ],
      setTheme: (themeId) => set({ currentTheme: themeId }),
    }),
    {
      name: 'easylook-theme-storage',
    }
  )
);

export default useThemeStore;
