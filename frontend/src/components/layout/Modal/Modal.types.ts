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
export const POSITION = [
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
export type Position = typeof POSITION[number];

// ================================
// Props des composants
// ================================
export type Props = {
    /** Direction */
    origin?: Position;
    /** Théme */
    variant?: LayoutVariant
    /** Contenu du bouton */
    children?: ReactNode;
    /** */
    onClose?: () => void;
    isClosing?: boolean;
    fullScreen?: boolean;
    position?:Position;
}

// ================================
// Valeurs par défaut
// ================================
export const DEFAULTS = {
    variant: "brand-primary" as LayoutVariant,
    origin: "center" as Position,
    position:"center" as Position,
    onClose: undefined,
    fullScreen: false,
} satisfies Partial<Props>