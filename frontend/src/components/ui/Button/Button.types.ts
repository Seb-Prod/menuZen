/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Button.types
 * @version 1.1.0
 * @since 2025-10-17
 * @see {@link Button} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { ReactNode, ButtonHTMLAttributes } from 'react';

// ================================
// Constantes
// ================================

/** Définit les variantes de couleur disponibles pour le bouton.
 */
export const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "error",
  "success",
  "info",
  "neutral"
] as const;

/** Définit les tailles de boutons prédéfinies.
 */
export const BUTTON_SIZES = [
  "small",
  "medium",
  "large"
] as const;

/** Définit les types HTML standards pour les boutons.
 */
export const BUTTON_TYPES = [
  "button",
  "submit",
  "reset"
] as const;

/** Définit les états possibles pour l'option `fullWidth`
 */
export const BUTTON_FULLWIDTH_OPTIONS = [
  false,
  true
] as const;

/** Définit les états possibles pour l'option `disabled`
 */
export const BUTTON_DISABLED_OPTIONS = [
  false,
  true
] as const;

/**
 * Définit les alignements horizontaux possibles pour le bouton.
 */
export const BUTTON_ALIGN = [
  "left",
  "right",
  "center"
] as const;

// ================================
// Types
// ================================

export type ButtonVariant = typeof BUTTON_VARIANTS[number];
export type ButtonSize = typeof BUTTON_SIZES[number];
export type ButtonType = typeof BUTTON_TYPES[number];
export type ButtonAlign = typeof BUTTON_ALIGN[number];

// ================================
// Props des composants
// ================================
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  /** Contenue du bouton */
  children?: ReactNode;
  /** Style du bouton */
  variant?: ButtonVariant;
  /** Taille du bouton */
  size?: ButtonSize;
  /** Prend toute la largeur du parent */
  fullWidth?: boolean;
  /** Type du bouton */
  type?: ButtonType;
  /** Alignement dans le conteneur parent */
  align?: ButtonAlign;
};

// ================================
// Valeurs par défaut
// ================================

export const BUTTON_DEFAULTS = {
  variant: "primary" as ButtonVariant,
  size: "medium" as ButtonSize,
  align: "left" as ButtonAlign,
  fullWidth: false,
  type: "button" as ButtonType,
  disabled: false,
  className: ""
} satisfies Partial<ButtonProps>;

// ================================
// Showcase
// ================================
export const BUTTON_SHOWCASE_CONSTANTS = {
  variant: BUTTON_VARIANTS,
  size: BUTTON_SIZES,
  type: BUTTON_TYPES,
  fullWidth: BUTTON_FULLWIDTH_OPTIONS,
  disabled: BUTTON_DISABLED_OPTIONS,
  align: BUTTON_ALIGN,
} as const;