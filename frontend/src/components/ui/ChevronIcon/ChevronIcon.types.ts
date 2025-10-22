/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/ChevronIcon.types
 * @version 1.3.0
 * @since 2025-10-17
 * @see {@link ChevronIcon} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize } from "../ui.types";

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

/** Définit les variantes de couleur */
export const CHEVRONICON_VARIANTS = [
  ...UI_VARIANTS,
  "none"
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
export type ChevronIconVariant = typeof CHEVRONICON_VARIANTS[number];

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
    variant?: ChevronIconVariant;
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
    variant: "primary"

} satisfies Partial<ChevronIconProps>

// ================================
// Showcase
// ================================
export const CHEVRONICON_SHOWCASE_CONSTANTS = {
    type: CHEVRONICON_TYPE,
    size: UI_SIZES,
    isOpen : CHEVRONICON_ISOPEN,
    variant: CHEVRONICON_VARIANTS
} as const