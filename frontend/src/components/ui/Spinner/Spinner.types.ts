/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Spinner.types
 * @version 1.1.0
 * @since 2025-10-21
 * @see {@link Spinner} pour l'implémentation du composant principal.
 * @autor Seb-Prod
 */

import type { ReactNode } from 'react';

// ================================
// Constantes
// ================================

/**
 * Définit les variantes de couleur disponibles pour le Spinner.
 */
export const SPINNER_VARIANTS = [
  "primary",
  "secondary",
  "error",
  "success",
  "info",
  "neutral"
] as const;

/**
 * Définit les tailles prédéfinies pour le Spinner.
 */
export const SPINNER_SIZES = [
  "small",
  "medium",
  "large"
] as const;

/**
 * Définit les alignements horizontaux possibles pour le Spinner.
 */
export const SPINNER_ALIGN = [
  "left",
  "right",
  "center"
] as const;

// ================================
// Types
// ================================

export type SpinnerVariant = typeof SPINNER_VARIANTS[number];
export type SpinnerSize = typeof SPINNER_SIZES[number];
export type SpinnerAlign = typeof SPINNER_ALIGN[number];

// ================================
// Props du composant
// ================================

export type SpinnerProps = {
  /** Variante visuelle du Spinner */
  variant?: SpinnerVariant;
  /** Taille du Spinner */
  size?: SpinnerSize;
  /** Alignement horizontal dans le conteneur parent */
  align?: SpinnerAlign;
  /** Contenu éventuel du Spinner (rarement utilisé) */
  children?: ReactNode;
};

// ================================
// Valeurs par défaut
// ================================

export const SPINNER_DEFAULTS = {
  variant: "primary" as SpinnerVariant,
  size: "medium" as SpinnerSize,
  align: "center" as SpinnerAlign,
} satisfies Partial<SpinnerProps>;

// ================================
// Showcase
// ================================

/**
 * Constantes utilisées pour générer les combinaisons de démonstration
 * dans la page de showcase du Spinner.
 */
export const SPINNER_SHOWCASE_CONSTANTS = {
  variant: SPINNER_VARIANTS,
  size: SPINNER_SIZES,
  align: SPINNER_ALIGN,
} as const;