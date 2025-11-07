/**
 * @file Fonctions utilitaires pour ThemeToggle
 * @module components/ui/ThemeToggle.utils
 * @version 1.0.0
 * @since 2025-11-06
 * @see {@link ThemeToggle} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { ThemeForcee } from './ThemeToggle.types';

// ================================
// Fonctions utilitaires
// ================================

/**
 * Détermine le thème couleur actuel préféré par le système.
 * 
 * Vérifie la préférence de couleur du système d'exploitation
 * via la Media Query `prefers-color-scheme`.
 * 
 * @returns {ThemeForcee} 'dark' si le système préfère le mode sombre, 'light' sinon.
 * 
 * @example
 * const themeSysteme = getThemeSysteme();
 * // Retourne 'dark' ou 'light' selon les préférences système
 * 
 * @example
 * // Utilisation avec un effet
 * useEffect(() => {
 *   const theme = getThemeSysteme();
 *   console.log('Thème système détecté:', theme);
 * }, []);
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