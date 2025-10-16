/**
 * Définit les variantes pour le composant ChevronIcon.
 */
export const CHEVRONICON_TYPE = [
    "chevron",
    "arrow",
    "plus-minus",
    "triangle",
    "dots"
] as const;

/**
 * Définit les tailes pour le composant ChevronIcon.
 */
export const CHEVRONICON_SIZE = [
    "small",
    "medium",
    "large",
] as const;

/**
 * Définit l'etat pour le composant ChevronIcon.
 */
export const CHEVRONICON_ISOPEN = [
    true,
    false
] as const;

/**
 * Définit la couleur pour le comosant ChevronIcon.
 */
export const CHEVRONICON_COLOR = [
    "primary",
    "secondary",
    "error",
    "success",
    "info",
    "neutral"
] as const;

// Types inférés
export type ChevronIconType = typeof CHEVRONICON_TYPE[number];
export type ChevronIconSize = typeof CHEVRONICON_SIZE[number];
export type ChevronIconColor = typeof CHEVRONICON_COLOR[number];

/**
 * Propriétés personnalisées pour le composant ChevronIcon.
 */
export type ChevronIconProps = {
    type?: ChevronIconType;
    isOpen?: boolean;
    size?: ChevronIconSize;
    ariaLabelOpen?: string;
    ariaLabelClose?:string;
    colorStyle?: ChevronIconColor;
}

/**
 * Valeur par défaut pour les propriétés du composant ChevronIcon.
 */
export const CHEVRONICON_DEFAULTS = {
    type: "chevron" as ChevronIconType,
    isOpen: false as boolean,
    size: "medium" as ChevronIconSize,
    ariaLabelOpen: "Fermer le menu",
    ariaLabelClose: "Ouvrir le menu",
    colorStyle: "primary"

} satisfies Partial<ChevronIconProps>

/**
 * Toutes les constantes de Spinner pour le showcase
 */
export const CHEVRONICON_SHOWCASE_CONSTANTS = {
    type: CHEVRONICON_TYPE,
    size: CHEVRONICON_SIZE,
    isOpen : CHEVRONICON_ISOPEN,
    colorStyle: CHEVRONICON_COLOR
} as const