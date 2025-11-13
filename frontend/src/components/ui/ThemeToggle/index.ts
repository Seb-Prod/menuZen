/**
 * @file Point d'entrée pour le composant ThemeToggle
 * @module components/ui/ThemeToggle
 * @description
 * Barrel file qui exporte le composant ThemeToggle ainsi que ses types, constantes et configurations associées.
 * 
 * @version 1.0.0
 * @since 2025-11-08
 * @author Seb-Prod
 */

export { default as ThemeToggle } from './ThemeToggle';
export { useThemeManager } from './ThemeToggle.hooks';
export { getThemeSysteme } from './ThemeToggle.utils';
export type { 
  Props as ThemeToggleProps, 
  ModeTheme, 
  ThemeForcee 
} from './ThemeToggle.types';
export { 
  THEME_FORCEE, 
  MODE_THEME, 
  DEFAULTS,
} from './ThemeToggle.types';