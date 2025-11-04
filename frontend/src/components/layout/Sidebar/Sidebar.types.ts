/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/layout/SideBar.types
 * @version 1.1.0
 * @since 2025-10-26
 * @see {@link SideBar} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { omit } from "@/utils/object";
import { UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize } from "@/components/ui/ui.types";
import type { ReactNode } from "react";
import { type LayoutVariant } from '../layout.types';

// ================================
// Constantes
// ================================

/** Définit les types d'icône pour le bouton de basculement. */
export const TYPES = [
    "burger",
    "arrow",
    "chevron"
] as const;

/** Définit les variantes de couleur disponibles pour le toggleMenu */
export const VARIANTS = [
    ...UI_VARIANTS,
    "none"
] as const;



// ================================
// Types
// ================================

/** Type d'icône du bouton de basculement. */
export type Type = typeof TYPES[number];

/** Variante de couleur. */
export type VariantToggleMenu = typeof VARIANTS[number];

// ================================
// Props des composants
// ================================

/** Propriétés du composant. */
export type Props = {
    /** Contenu à afficher dans la barre latérale. */
    children?: ReactNode;
    /** Définit la forme visuelle de l'icône du bouton de basculement. */
    type?: Type;
    /** Taille du bouton de basculement. */
    size?: UiSize;
    /** Schéma de couleur de la barre latérale. */
    variant?: LayoutVariant;
    /** Schéma de couleur du ToogleMenu */
    variantToggleMenu?: VariantToggleMenu;
}

// ================================
// Valeurs par défaut
// ================================

/** Valeurs par défaut pour les props. */
export const DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify", "align"]),
    type: "chevron" as Type,
    variantToggleMenu: "primary" as VariantToggleMenu,
    variant: "brand-primary" as LayoutVariant,
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

/** Constantes pour le showcase. */
export const SHOWCASE_CONSTANTS = {
    type: TYPES,
    size: UI_SIZES,
    variant: VARIANTS
} as const;