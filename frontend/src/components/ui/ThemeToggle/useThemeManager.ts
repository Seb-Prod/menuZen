import { useState, useEffect } from 'react';
import { getThemeSysteme } from './ThemeToggle.utils'; // Fonction utilitaire
import type { ModeTheme, ThemeForcee } from './ThemeToggle.types'; // Types

interface ThemeManagerHook {
  modeTheme: ModeTheme;
  setModeTheme: React.Dispatch<React.SetStateAction<ModeTheme>>;
  derniereThemeForcee: ThemeForcee;
  themeSysteme: ThemeForcee;
  handleMasterToggle: (isChecked: boolean) => void;
  handleSecondaryToggle: (isChecked: boolean) => void;
}

/**
 * Hook personnalisé gérant toute la logique d'état, de persistance (localStorage),
 * et de synchronisation du thème de l'application.
 * * @param {ModeTheme} initialTheme - Le mode de thème initial.
 * @param {(theme: ModeTheme) => void} [onChange] - Callback en cas de changement de thème.
 * @returns {ThemeManagerHook} Les états et les fonctions nécessaires au rendu du composant.
 */
export const useThemeManager = (
  initialTheme: ModeTheme,
  onChange?: (theme: ModeTheme) => void,
): ThemeManagerHook => {
  
  // Initialisation des états (lecture de localStorage et initialTheme)
  const [modeTheme, setModeTheme] = useState<ModeTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('themeMode');
      return (saved as ModeTheme) || initialTheme;
    }
    return initialTheme;
  });

  const [derniereThemeForcee, setDerniereThemeForcee] = useState<ThemeForcee>(() => {
    if (typeof window !== 'undefined') {
      const savedForced = localStorage.getItem('lastForcedTheme');
      return (savedForced as ThemeForcee) || 'light';
    }
    return 'light';
  });

  const [themeSysteme, setThemeSysteme] = useState<ThemeForcee>(getThemeSysteme);
  
  // Synchronisation avec les changements du système (dark/light)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeSysteme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Appliquer le thème et le stocker (Persistance et application DOM)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', modeTheme);

      if (modeTheme === 'auto') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', modeTheme);
        if (modeTheme !== derniereThemeForcee) {
          setDerniereThemeForcee(modeTheme);
          localStorage.setItem('lastForcedTheme', modeTheme);
        }
      }

      // Événement personnalisé pour notifier les autres composants
      window.dispatchEvent(new Event('themeChange'));
    }

    onChange?.(modeTheme);
  }, [modeTheme, onChange, derniereThemeForcee]);

  // Synchronisation entre instances du même onglet et inter-onglets
  useEffect(() => {
    const syncTheme = () => {
      const saved = localStorage.getItem('themeMode');
      if (saved) setModeTheme(saved as ModeTheme);
    };

    window.addEventListener('themeChange', syncTheme); 
    window.addEventListener('storage', syncTheme);     

    return () => {
      window.removeEventListener('themeChange', syncTheme);
      window.removeEventListener('storage', syncTheme);
    };
  }, []);

  // Fonctions de gestion des toggles
  
  const handleMasterToggle = (isChecked: boolean) => {
    if (isChecked) {
      setModeTheme(derniereThemeForcee);
    } else {
      setModeTheme('auto');
    }
  };

  const handleSecondaryToggle = (isChecked: boolean) => {
    const nouvelleThemeForcee: ThemeForcee = isChecked ? 'dark' : 'light';
    setModeTheme(nouvelleThemeForcee);
  };

  return {
    modeTheme,
    setModeTheme,
    derniereThemeForcee,
    themeSysteme,
    handleMasterToggle,
    handleSecondaryToggle,
  };
};