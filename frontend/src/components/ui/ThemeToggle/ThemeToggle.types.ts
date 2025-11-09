/**
 * @file Définition des types, constantes et valeurs par défaut du composant ThemeToggle
 * @module components/ui/ThemeToggle/ThemeToggle.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant ThemeToggle.
 * 
 * @version 1.0.1
 * @since 2025-11-06
 * @author Seb-Prod
 * 
 * @see {@link ThemeToggle} pour l'implémentation du composant principal.
 */

// ================================
// Constantes
// ================================

/**
 * Thèmes forcés disponibles.
 * 
 * @constant
 * @type {readonly ['light', 'dark']}
 */
export const THEME_FORCEE = [
    "light",
    "dark",
] as const;

/**
 * Modes de thème disponibles.
 * 
 * @constant
 * @type {readonly ['light', 'dark', 'auto']}
 */
export const MODE_THEME = [
    ...THEME_FORCEE,
    "auto",
] as const;

// ================================
// Types
// ================================

/**
 * Thème explicite et forcé.
 * 
 * @typedef {('light'|'dark')} ThemeForcee
 */
export type ThemeForcee = typeof THEME_FORCEE[number];

/**
 * Mode de gestion du thème.
 * 
 * @typedef {('light'|'dark'|'auto')} ModeTheme
 */
export type ModeTheme = typeof MODE_THEME[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant ThemeToggle.
 * 
 * @typedef {Object} Props
 * @property {ModeTheme} [initialTheme] - Mode de thème initial.
 * @property {Function} [onChange] - Callback lors du changement de thème.
 */
export type Props = {
    initialTheme?: ModeTheme;
    onChange?: (theme: ModeTheme) => void;
}

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant ThemeToggle.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    initialTheme: "auto" as ModeTheme,
    onChange: undefined,
} satisfies Partial<Props>;