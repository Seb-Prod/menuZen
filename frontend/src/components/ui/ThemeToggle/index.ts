/**
 * @file Point d'entrée pour le composant ThemeToggle
 * @module components/ui/ThemeToggle
 * @version 1.0.0
 * @since 2025-11-06
 * @author Seb-Prod
 *
 * Ce module centralise les exports liés au ThemeToggle :
 * - Le composant principal `ThemeToggle`
 * - Le hook personnalisé `useThemeManager`
 * - Les types associés (`ThemeToggleProps`, `ModeTheme`, `ThemeForcee`)
 * - Les constantes (`THEME_FORCEE`, `MODE_THEME`, `THEMETOGGLE_DEFAULTS`)
 * - Les utilitaires (`getThemeSysteme`)
 */

export { default } from './ThemeToggle';
export { useThemeManager } from './ThemeToggle.hooks';
export { getThemeSysteme } from './ThemeToggle.utils';
export type { 
  ThemeToggleProps, 
  ModeTheme, 
  ThemeForcee 
} from './ThemeToggle.types';
export { 
  THEME_FORCEE, 
  MODE_THEME, 
  THEMETOGGLE_DEFAULTS 
} from './ThemeToggle.types';