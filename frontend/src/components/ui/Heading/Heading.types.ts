/**
 * @file Définition des types, constantes et valeurs par défaut du composant Heading
 * @module components/ui/Heading.types
 * @version 1.0.0
 * @since 2025-10-21
 * @see {@link Heading} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { ReactNode, HTMLAttributes } from 'react';

// ================================
// Constantes
// ================================

/**
 * Définit les niveaux de titre sémantique disponibles (h1 à h6).
 */
export const HEADING_VARIANTS = [1, 2, 3, 4, 5, 6] as const;

/**
 * Définit les couleurs thématiques disponibles pour le titre.
 */
export const HEADING_COLORS = [
  "primary",
  "secondary",
  "error",
  "success",
  "info",
  "neutral"
] as const;

/**
 * Définit les options d'alignement horizontal du texte.
 */
export const HEADING_ALIGNS = [
  "left",
  "right",
  "center",
  "justify"
] as const;

// ================================
// Types
// ================================

export type HeadingVariant = typeof HEADING_VARIANTS[number];
export type HeadingColor = typeof HEADING_COLORS[number];
export type HeadingAlign = typeof HEADING_ALIGNS[number];

// ================================
// Props du composant
// ================================

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /** Contenu du titre */
  children: ReactNode;
  /** Niveau sémantique du titre */
  variant?: HeadingVariant;
  /** Couleur du texte */
  color?: HeadingColor;
  /** Alignement du texte */
  align?: HeadingAlign;
};

// ================================
// Valeurs par défaut
// ================================

export const HEADING_DEFAULTS = {
  variant: 1 as HeadingVariant,
  color: "primary" as HeadingColor,
  align: "left" as HeadingAlign,
  className: ""
} satisfies Partial<HeadingProps>;

// ================================
// Showcase
// ================================

export const HEADING_SHOWCASE_CONSTANTS = {
  variant: HEADING_VARIANTS,
  color: HEADING_COLORS,
  align: HEADING_ALIGNS
} as const;