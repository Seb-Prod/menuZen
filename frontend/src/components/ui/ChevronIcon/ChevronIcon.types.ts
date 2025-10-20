/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/ChevronIcon.types
 * @version 1.1.0
 * @since 2025-10-17
 * @see {@link ChevronIcon} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

// ================================
// Constantes
// ================================

/** Définit les variantes pour le composant ChevronIcon.
 */
export const CHEVRONICON_TYPE = [
    "chevron",
    "arrow",
    "plus-minus",
    "triangle",
    "dots"
] as const;

/** Définit les tailes pour le composant ChevronIcon.
 */
export const CHEVRONICON_SIZE = [
    "small",
    "medium",
    "large",
] as const;

/** Définit l'etat pour le composant ChevronIcon.
 */
export const CHEVRONICON_ISOPEN = [
    true,
    false
] as const;

/** Définit la couleur pour le comosant ChevronIcon.
 */
export const CHEVRONICON_COLOR = [
    "primary",
    "secondary",
    "error",
    "success",
    "info",
    "neutral"
] as const;

// ================================
// Types
// ================================

export type ChevronIconType = typeof CHEVRONICON_TYPE[number];
export type ChevronIconSize = typeof CHEVRONICON_SIZE[number];
export type ChevronIconColor = typeof CHEVRONICON_COLOR[number];

// ================================
// Props des composants
// ================================
export type ChevronIconProps = {
    /** Définit la forme visuelle de l'icône. */
    type?: ChevronIconType;
    /** Etat de l'icone */
    isOpen?: boolean;
    /** Taille de l'icône */
    size?: ChevronIconSize;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est ouvert */
    ariaLabelOpen?: string;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est fermé */
    ariaLabelClose?:string;
    /** Variante de couleur de l'icône */
    colorStyle?: ChevronIconColor;
}

// ================================
// Valeurs par défaut
// ================================

export const CHEVRONICON_DEFAULTS = {
    type: "chevron" as ChevronIconType,
    isOpen: false as boolean,
    size: "medium" as ChevronIconSize,
    ariaLabelOpen: "Fermer le menu",
    ariaLabelClose: "Ouvrir le menu",
    colorStyle: "primary"

} satisfies Partial<ChevronIconProps>

// ================================
// Showcase
// ================================
export const CHEVRONICON_SHOWCASE_CONSTANTS = {
    type: CHEVRONICON_TYPE,
    size: CHEVRONICON_SIZE,
    isOpen : CHEVRONICON_ISOPEN,
    colorStyle: CHEVRONICON_COLOR
} as const