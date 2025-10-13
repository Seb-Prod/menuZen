/**
 * @file Définitions des types et valeurs par défaut pour ThemeToggle.
 * @module components/ui/ThemeToggle/ThemeToggle.types
 */

/**
 * Thème explicite et forcé (Clair ou Sombre).
 * @typedef {'light' | 'dark'} ThemeForcee
 */
export type ThemeForcee = 'light' | 'dark';

/**
 * Mode de gestion du thème : automatique (auto), clair (light) ou sombre (dark).
 * @typedef {ThemeForcee | 'auto'} ModeTheme
 */
export type ModeTheme = ThemeForcee | 'auto';

/**
 * Propriétés acceptées par le composant ThemeToggle.
 * @interface ThemeToggleProps
 * @property {ModeTheme} [initialTheme] - Le mode de thème initial à utiliser.
 * @property {(theme: ModeTheme) => void} [onChange] - Fonction de rappel appelée lorsque le mode de thème change.
 */
export interface ThemeToggleProps {
  initialTheme?: ModeTheme;
  onChange?: (theme: ModeTheme) => void;
}

/**
 * Valeurs par défaut pour le composant ThemeToggle.
 */
export const THEMETOGGLE_DEFAULTS = {
  initialTheme: 'auto' as ModeTheme,
};