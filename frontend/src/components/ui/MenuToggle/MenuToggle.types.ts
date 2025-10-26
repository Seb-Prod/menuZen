/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/MenuToggle.types
 * @version 1.0.0
 * @since 2025-10-26
 * @see {@link MenuToggle} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { omit } from "@/utils/object";
import { UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize } from "../ui.types";

// ================================
// Constantes
// ================================

/** Définit les types pour le composant MenuToggle.
 */
export const MENUTOGGLE_TYPE = [
    "burger",
    "arrow",
    "chevron"
] as const;

/** Définit les variantes de couleur */
export const MENUTOGGLE_VARIANTS = [
  ...UI_VARIANTS,
  "none"
] as const;

/** Définit l'etat pour le composant MenuToogle.
 */
export const MENUTOGGLE_ISOPEN = [
    true,
    false
] as const;

// ================================
// Types
// ================================

export type MenuToggleType = typeof MENUTOGGLE_TYPE[number];
export type MenuToggleVariant = typeof MENUTOGGLE_VARIANTS[number];

// ================================
// Props des composants
// ================================
export type MenuToggleProps = {
    /** Définit la forme visuelle de l'icône. */
    type?: MenuToggleType;
    /** Etat de l'icone */
    isOpen?: boolean;
    /** Taille de l'icône */
    size?: UiSize;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est ouvert */
    ariaLabelOpen?: string;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est fermé */
    ariaLabelClose?:string;
    /** Variante de couleur de l'icône */
    variant?: MenuToggleVariant;
    /** Fonction appelée lors du clic sur l'icône */
    onClick?: () => void;
}

// ================================
// Valeurs par défaut
// ================================

export const MENUTOGGLE_DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify"]),
    type: "chevron" as MenuToggleType,
    isOpen: false as boolean,
    ariaLabelOpen: "Fermer le menu",
    ariaLabelClose: "Ouvrir le menu",
    variant: "primary"

} satisfies Partial<MenuToggleProps>

// ================================
// Showcase
// ================================
export const MENUTOGGLE_SHOWCASE_CONSTANTS = {
    type: MENUTOGGLE_TYPE,
    size: UI_SIZES,
    isOpen : MENUTOGGLE_ISOPEN,
    variant: MENUTOGGLE_VARIANTS
} as const