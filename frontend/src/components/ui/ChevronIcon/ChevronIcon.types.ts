/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/ChevronIcon.types
 * @version 1.4.0
 * @since 2025-10-17
 * @see {@link ChevronIcon} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { omit } from "@/utils/object";
import { BOOLEAN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize } from "../ui.types";

// ================================
// Constantes
// ================================

/** Définit les variantes pour le composant ChevronIcon.
 */
export const TYPE = [
    "chevron",
    "arrow",
    "plus-minus",
    "triangle",
    "dots"
] as const;

/** Définit les variantes de couleur */
export const VARIANTS = [
  ...UI_VARIANTS,
  "none"
] as const;

// ================================
// Types
// ================================

export type Type = typeof TYPE[number];
export type Variant = typeof VARIANTS[number];

// ================================
// Props des composants
// ================================
export type Props = {
    /** Définit la forme visuelle de l'icône. */
    type?: Type;
    /** Etat de l'icone */
    isOpen?: boolean;
    /** Taille de l'icône */
    size?: UiSize;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est ouvert */
    ariaLabelOpen?: string;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est fermé */
    ariaLabelClose?:string;
    /** Variante de couleur de l'icône */
    variant?: Variant;
}

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify"]),
    type: "chevron" as Type,
    isOpen: false as boolean,
    ariaLabelOpen: "Fermer le menu",
    ariaLabelClose: "Ouvrir le menu",
    variant: "primary"

} satisfies Partial<Props>

// ================================
// Showcase
// ================================
export const SHOWCASE_CONSTANTS = {
    type: TYPE,
    size: UI_SIZES,
    isOpen : BOOLEAN,
    variant: VARIANTS
} as const