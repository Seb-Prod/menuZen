/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/layout/Modal.types
 * @version 1.0.0
 * @since 2025-11-05
 * @see {@link Logo} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { ReactNode } from "react";
import { type LayoutVariant } from "../layout.types";

// ================================
// Constantes
// ================================
export const ORIGIN = [
    "top",
    "bottom",
    "left",
    "right",
    "center",
] as const;

// ================================
// Types
// ================================
/** Direction */
export type Origin = typeof ORIGIN[number];

// ================================
// Props des composants
// ================================
export type Props = {
    /** Direction */
    origin?: Origin;
    /** Théme */
    variant?: LayoutVariant
    /** Contenu du bouton */
    children?: ReactNode;
    /** */
    onClose?: () => void;
    isClosing?: boolean;
}

// ================================
// Valeurs par défaut
// ================================
export const DEFAULTS = {
    variant: "brand-primary" as LayoutVariant,
    origin: "center" as Origin,
    onClose: undefined,
} satisfies Partial<Props>

// ================================
// Showcase
// ================================
export const SHOWCASE_CONSTANTS = {
    origin: ORIGIN
} as const