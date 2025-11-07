/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/ThemeToggle.types
 * @version 1.0.0
 * @since 2025-11-06
 * @see {@link ThemeToggle} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

// ================================
// Constantes
// ================================

/** Thèmes forcés disponibles */
export const THEME_FORCEE = [
    "light",
    "dark",
] as const;

/** Modes de thème disponibles */
export const MODE_THEME = [
    ...THEME_FORCEE,
    "auto",
] as const;

// ================================
// Types
// ================================

/** Thème explicite et forcé (Clair ou Sombre) */
export type ThemeForcee = typeof THEME_FORCEE[number];

/** Mode de gestion du thème : automatique (auto), clair (light) ou sombre (dark) */
export type ModeTheme = typeof MODE_THEME[number];

// ================================
// Props des composants
// ================================

export type ThemeToggleProps = {
    /** Le mode de thème initial à utiliser */
    initialTheme?: ModeTheme;
    /** Fonction de rappel appelée lorsque le mode de thème change */
    onChange?: (theme: ModeTheme) => void;
}

// ================================
// Valeurs par défaut
// ================================

export const THEMETOGGLE_DEFAULTS = {
    initialTheme: "auto" as ModeTheme,
    onChange: undefined,
} satisfies Partial<ThemeToggleProps>;