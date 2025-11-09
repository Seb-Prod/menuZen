/**
 * @file Définition des types, constantes et valeurs par défaut du composant Separator
 * @module components/ui/Separator/Separator.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Separator.
 * Il utilise les types UI globaux (UiSize, UiVariant) pour assurer la cohérence
 * avec le système de design.
 * 
 * @version 1.0.0
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
 * 
 * @example
 * // Utilisation dans le composant
 * const orientation: Orientation = ORIENTATION[0]; // 'horizontal'
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
 * 
 * @example
 * const myOrientation: Orientation = 'horizontal';
 */
export type Orientation = typeof ORIENTATION[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Separator.
 * 
 * Toutes les propriétés sont optionnelles et utilisent les valeurs par défaut
 * définies dans {@link DEFAULTS} si non spécifiées.
 * 
 * @typedef {Object} Props
 * @property {Orientation} [orientation] - Orientation du séparateur (horizontal ou vertical).
 * @property {UiSize} [thickness] - Épaisseur de la ligne ('xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl').
 * @property {UiVariant} [color] - Couleur du séparateur basée sur les variantes UI système.
 * @property {UiSize} [spacing] - Espacement autour du séparateur ('xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl').
 * 
 * @example
 * const props: Props = {
 *   orientation: 'vertical',
 *   thickness: 'medium',
 *   color: 'primary',
 *   spacing: 'large'
 * };
 */
export type Props = {
    /** Orientation du séparateur */
    orientation?: Orientation;
    /** Épaisseur de la ligne */
    thickness?: UiSize;
    /** Couleur */
    color?: UiVariant;
    /** Espacement autour du séparateur */
    spacing?: UiSize;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour les propriétés du composant Separator.
 * 
 * Ces valeurs sont appliquées automatiquement lorsque les props correspondantes
 * ne sont pas fournies au composant.
 * 
 * @constant
 * @type {Partial<Props>}
 * @property {Orientation} orientation - Orientation par défaut : 'horizontal'
 * @property {UiSize} thickness - Épaisseur par défaut : 'small'
 * @property {UiVariant} color - Couleur par défaut : 'neutral'
 * @property {UiSize} spacing - Espacement par défaut : 'small'
 * 
 * @example
 * // Utilisation dans le composant
 * const { orientation, thickness, color, spacing } = { ...DEFAULTS, ...inputProps };
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
 * Contient toutes les valeurs possibles pour chaque propriété du composant.
 * Utilisé principalement pour générer des storybooks, des démos interactives
 * ou de la documentation visuelle.
 * 
 * @constant
 * @type {Object}
 * @property {readonly ['horizontal', 'vertical']} orientation - Toutes les orientations possibles
 * @property {readonly UiSize[]} thickness - Toutes les épaisseurs possibles
 * @property {readonly UiVariant[]} color - Toutes les couleurs possibles
 * @property {readonly UiSize[]} spacing - Tous les espacements possibles
 * 
 * @example
 * // Génération d'exemples pour chaque orientation
 * SHOWCASE.orientation.map(orient => (
 *   <Separator key={orient} orientation={orient} />
 * ));
 * 
 * @example
 * // Génération d'exemples pour chaque couleur
 * SHOWCASE.color.map(colorVar => (
 *   <Separator key={colorVar} color={colorVar} />
 * ));
 */
export const SHOWCASE = {
    orientation: ORIENTATION,
    thickness: UI_SIZES,
    color: UI_VARIANTS,
    spacing: UI_SIZES
} as const;