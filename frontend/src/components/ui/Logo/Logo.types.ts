/**
 * @file Définition des types, constantes et valeurs par défaut du composant Logo
 * @module components/ui/Logo/Logo.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Logo.
 * 
 * @version 1.0.1
 * @since 2025-11-04
 * @author Seb-Prod
 * 
 * @see {@link Logo} pour l'implémentation du composant principal.
 * @see {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import { omit } from "@/utils/object";
import { UI_DEFAULTS, UI_SIZES, type UiSize } from "../ui.types";

// ================================
// Constantes
// ================================

/**
 * Alignements possibles du texte par rapport au logo.
 * 
 * @constant
 * @type {readonly ['right', 'bottom']}
 */
export const ALIGN = [
    "right",
    "bottom"
] as const;

// ================================
// Types
// ================================

/**
 * Alignement du texte.
 * 
 * @typedef {('right'|'bottom')} Align
 */
export type Align = typeof ALIGN[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Logo.
 * 
 * @typedef {Object} Props
 * @property {UiSize} [size] - Taille du logo.
 * @property {Align} [align] - Alignement du texte.
 * @property {string} [text] - Texte à afficher.
 */
export type Props = {
    size?: UiSize;
    align?: Align;
    text?: string;
}

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Logo.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify", "align", "variant"]),
    size: "medium" as UiSize,
    align: "right" as Align,
    text: "Forge"
} satisfies Partial<Props>

// ================================
// Showcase
// ================================

/**
 * Configuration pour la présentation/démonstration du composant.
 * 
 * @constant
 * @type {Object}
 */
export const SHOWCASE = {
    size: UI_SIZES,
    align: ALIGN
} as const