import type { ThemeForcee } from './ThemeToggle.types'; // Assurez-vous d'importer le type ThemeForcee

/**
 * Détermine le thème couleur actuel du système (préféré par l'utilisateur).
 * Elle vérifie l'état du système d'exploitation via la Media Query.
 * * @returns {ThemeForcee} 'dark' si le système préfère le sombre, 'light' sinon.
 */
export const getThemeSysteme = (): ThemeForcee => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
};