/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/layout/SideBar.types
 * @version 1.0.0
 * @since 2025-10-26
 * @see {@link SideBar} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { omit } from "@/utils/object";
import { UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize } from "@/components/ui/ui.types";
import type { ReactNode } from "react";

// ================================
// Constantes
// ================================

/** Définit les types pour le composant MenuToggle.
 */
export const SIDEBAR_TYPE = [
    "burger",
    "arrow",
    "chevron"
] as const;

/** Définit les variantes de couleur */
export const SIDEBAR_VARIANTS = [
    ...UI_VARIANTS,
    "none"
] as const;

// ================================
// Types
// ================================

export type SideBarType = typeof SIDEBAR_TYPE[number];
export type SideBarVariant = typeof SIDEBAR_VARIANTS[number];

// ================================
// Props des composants
// ================================
export type SideBarProps = {
    /** Définit la forme visuelle de l'icône. */
    type?: SideBarType;
    /** Etat de l'icone */
    size?: UiSize;
    /** Texte alternatif pour l'acccesibilité lorsque l'icône est ouvert */
    variant?: SideBarVariant;
    /** Fonction appelée lors du clic sur l'icône */
    children?: ReactNode;
    onClick?: () => void;
}

// ================================
// Valeurs par défaut
// ================================

export const SIDEBAR_DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify", "align"]),
    type: "chevron" as SideBarType,
    variant: "primary" as SideBarVariant

} satisfies Partial<SideBarProps>

// ================================
// Showcase
// ================================
export const MENUTOGGLE_SHOWCASE_CONSTANTS = {
    type: SIDEBAR_TYPE,
    size: UI_SIZES,
    variant: SIDEBAR_VARIANTS
} as const