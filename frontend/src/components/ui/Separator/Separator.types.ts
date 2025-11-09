/**
 * @file Définition des types, constantes et valeurs par défaut du composant Separator
 * @module components/ui/Separator/Separator.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Separator.
 * 
 * @version 1.0.1
 * @since 2025-11-08
 * @author Seb-Prod
 * 
 * @see {@link Separator} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import { UI_SIZES, UI_VARIANTS, type UiSize, type UiVariant } from '@/components/ui/ui.types';

// ================================
// Constantes
// ================================

/**
 * Orientations possibles pour le séparateur.
 * 
 * @constant
 * @type {readonly ['horizontal', 'vertical']}
 */
export const ORIENTATION = [
    "horizontal",
    "vertical",
] as const;

// ================================
// Types
// ================================

/**
 * Type représentant l'orientation du séparateur.
 * 
 * @typedef {('horizontal'|'vertical')} Orientation
 */
export type Orientation = typeof ORIENTATION[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Separator.
 * 
 * @typedef {Object} Props
 * @property {Orientation} [orientation] - Orientation du séparateur.
 * @property {UiSize} [thickness] - Épaisseur de la ligne.
 * @property {UiVariant} [color] - Couleur du séparateur.
 * @property {UiSize} [spacing] - Espacement autour du séparateur.
 */
export type Props = {
    orientation?: Orientation;
    thickness?: UiSize;
    color?: UiVariant;
    spacing?: UiSize;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Separator.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    orientation: "horizontal" as Orientation,
    thickness: "small" as UiSize,
    color: "neutral" as UiVariant,
    spacing: "small" as UiSize
} satisfies Partial<Props>;

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
    orientation: ORIENTATION,
    thickness: UI_SIZES,
    color: UI_VARIANTS,
    spacing: UI_SIZES
} as const;