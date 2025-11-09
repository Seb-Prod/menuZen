/**
 * @file Définition des types, constantes et valeurs par défaut du composant MenuToggle
 * @module components/ui/MenuToggle/MenuToggle.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant MenuToggle.
 * 
 * @version 1.0.1
 * @since 2025-10-26
 * @author Seb-Prod
 * 
 * @see {@link MenuToggle} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import { omit } from "@/utils/object";
import { BOOLEAN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize } from "../ui.types";

// ================================
// Constantes
// ================================

/**
 * Types d'icônes disponibles.
 * 
 * @constant
 * @type {readonly ['burger', 'arrow', 'chevron']}
 */
export const TYPE = [
    "burger",
    "arrow",
    "chevron"
] as const;

/**
 * Variantes de couleur pour l'icône.
 * 
 * @constant
 * @type {readonly [...UI_VARIANTS, 'none']}
 */
export const VARIANTS = [
  ...UI_VARIANTS,
  "none"
] as const;

// ================================
// Types
// ================================

/**
 * Type de l'icône.
 * 
 * @typedef {('burger'|'arrow'|'chevron')} Type
 */
export type Type = typeof TYPE[number];

/**
 * Variante de couleur de l'icône.
 * 
 * @typedef Variant
 */
export type Variant = typeof VARIANTS[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant MenuToggle.
 * 
 * @typedef {Object} Props
 * @property {Type} [type] - Forme visuelle de l'icône.
 * @property {boolean} [isOpen] - État de l'icône (ouvert/fermé).
 * @property {UiSize} [size] - Taille de l'icône.
 * @property {string} [ariaLabelOpen] - Texte alternatif quand l'icône est ouverte.
 * @property {string} [ariaLabelClose] - Texte alternatif quand l'icône est fermée.
 * @property {Variant} [variant] - Variante de couleur.
 * @property {Function} [onClick] - Fonction appelée lors du clic.
 */
export type Props = {
    type?: Type;
    isOpen?: boolean;
    size?: UiSize;
    ariaLabelOpen?: string;
    ariaLabelClose?: string;
    variant?: Variant;
    onClick?: () => void;
}

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant MenuToggle.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify"]),
    type: "chevron" as Type,
    isOpen: false,
    ariaLabelOpen: "Fermer le menu",
    ariaLabelClose: "Ouvrir le menu",
    variant: "primary"
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
    type: TYPE,
    size: UI_SIZES,
    isOpen: BOOLEAN,
    variant: VARIANTS
} as const