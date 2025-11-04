/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Logo.types
 * @version 1.0.0
 * @since 2025-11-04
 * @see {@link Logo} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { omit } from "@/utils/object";
import { UI_DEFAULTS, UI_SIZES, type UiSize } from "../ui.types";

// ================================
// Constantes
// ================================
export const ALIGN = [
    "right",
    "bottom" // Correction: "botom" → "bottom"
] as const;

// ================================
// Types
// ================================
/** Alignement du texte */
export type Align = typeof ALIGN[number];

// ================================
// Props des composants
// ================================
export type Props = {
    /** Taille du logo */
    size?: UiSize;
    /** Alignement du texte */
    align?: Align;
    /** Texte à afficher (optionnel) */
    text?: string;
}

// ================================
// Valeurs par défaut
// ================================
export const DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify", "align", "variant"]),
    size: "medium" as UiSize,
    align: "right" as Align,
    text: "Forge"
} satisfies Partial<Props>

// ================================
// Showcase
// ================================
export const SHOWCASE_CONSTANTS = {
    size: UI_SIZES,
    align: ALIGN
} as const