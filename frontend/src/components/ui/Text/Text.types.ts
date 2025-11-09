/**
 * @file Définition des types, constantes et valeurs par défaut du composant Text
 * @module components/ui/Text/Text.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Text.
 * 
 * @version 1.2.1
 * @since 2025-10-22
 * @author Seb-Prod
 * 
 * @see {@link Text} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { ReactNode } from 'react';
import { UI_DEFAULTS, UI_SIZES, UI_TEXT_JUSTIFY, UI_VARIANTS, type UiSize, type UiTextJustify, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Balises HTML sémantiques disponibles.
 * 
 * @constant
 * @type {readonly ['span', 'p', 'label', 'strong', 'em']}
 */
export const AS = [
  "span",
  "p",
  "label",
  "strong",
  "em"
] as const;

/**
 * Poids de police disponibles.
 * 
 * @constant
 * @type {readonly ['light', 'regular', 'medium', 'bold']}
 */
export const WEIGHTS = [
  "light",
  "regular",
  "medium",
  "bold"
] as const;

// ================================
// Types
// ================================

/**
 * Balise HTML sémantique.
 * 
 * @typedef {('span'|'p'|'label'|'strong'|'em')} As
 */
export type As = typeof AS[number];

/**
 * Poids de la police.
 * 
 * @typedef {('light'|'regular'|'medium'|'bold')} Weight
 */
export type Weight = typeof WEIGHTS[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Text.
 * 
 * @typedef {Object} Props
 * @property {As} [as] - Balise HTML sémantique.
 * @property {UiVariant} [variant] - Couleur thématique du texte.
 * @property {UiSize} [size] - Taille de la police.
 * @property {Weight} [weight] - Poids de la police.
 * @property {UiTextJustify} [justify] - Alignement du texte.
 * @property {ReactNode} children - Contenu textuel.
 * @property {string} [className] - Classes CSS personnalisées.
 */
export type Props = {
  as?: As;
  variant?: UiVariant;
  size?: UiSize;
  weight?: Weight;
  justify?: UiTextJustify;
  children: ReactNode;
  className?: string;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Text.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align"]),
  as: "span" as As,
  weight: "regular" as Weight,
  className: ""
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
  as: AS,
  variant: UI_VARIANTS,
  size: UI_SIZES,
  weight: WEIGHTS,
  justify: UI_TEXT_JUSTIFY,
} as const;