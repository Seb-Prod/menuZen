/**
 * @file Définition des types, constantes et valeurs par défaut du composant Heading
 * @module components/ui/Heading/Heading.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant.
 * 
 * @version 1.3.1
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @see {@link Heading} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_TEXT_JUSTIFY} pour les constantes partagées du système UI.
 */

import type { ReactNode, HTMLAttributes } from 'react';
import { UI_DEFAULTS, UI_TEXT_JUSTIFY, UI_VARIANTS, type UiTextJustify, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Niveaux de titre sémantique disponibles.
 * 
 * @constant
 * @type {readonly ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
 */
export const AS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

// ================================
// Types
// ================================

/**
 * Niveau sémantique du titre.
 * 
 * @typedef {('h1'|'h2'|'h3'|'h4'|'h5'|'h6')} As
 */
export type As = typeof AS[number];

// ================================
// Props du composant
// ================================

/**
 * Propriétés du composant Heading.
 * 
 * @typedef {Object} Props
 * @property {ReactNode} children - Contenu du titre.
 * @property {As} [as] - Niveau sémantique du titre.
 * @property {UiVariant} [variant] - Couleur du texte.
 * @property {UiTextJustify} [justify] - Alignement du texte.
 */
export type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: As;
  variant?: UiVariant;
  justify?: UiTextJustify;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Heading.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align"]),
  as: 'h1' as As,
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
  justify: UI_TEXT_JUSTIFY
} as const;