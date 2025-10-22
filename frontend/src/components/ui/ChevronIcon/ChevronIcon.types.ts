/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/ChevronIcon.types
 * @version 1.2.0
 * @since 2025-10-17
 * @see {@link ChevronIcon} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize, type UiVariant } from "../ui.types";

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

/** Définit l'etat pour le composant ChevronIcon.
 */
export const CHEVRONICON_ISOPEN = [
    true,
    false
] as const;

// ================================
// Types
// ================================

export type ChevronIconType = typeof CHEVRONICON_TYPE[number];

// ================================
// Props des composants
// ================================
export type ChevronIconProps = {
    /** Définit la forme visuelle de l'icône. */
    type?: ChevronIconType;
    /** Etat de l'icone */
    isOpen?: boolean;
    /** Taille de l'icône */
    size?: UiSize;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est ouvert */
    ariaLabelOpen?: string;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est fermé */
    ariaLabelClose?:string;
    /** Variante de couleur de l'icône */
    colorStyle?: UiVariant;
}

// ================================
// Valeurs par défaut
// ================================

export const CHEVRONICON_DEFAULTS = {
    ...UI_DEFAULTS,
    type: "chevron" as ChevronIconType,
    isOpen: false as boolean,
    ariaLabelOpen: "Fermer le menu",
    ariaLabelClose: "Ouvrir le menu",
    colorStyle: "primary"

} satisfies Partial<ChevronIconProps>

// ================================
// Showcase
// ================================
export const CHEVRONICON_SHOWCASE_CONSTANTS = {
    type: CHEVRONICON_TYPE,
    size: UI_SIZES,
    isOpen : CHEVRONICON_ISOPEN,
    colorStyle: UI_VARIANTS
} as const