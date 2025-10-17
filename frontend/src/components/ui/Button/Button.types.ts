/**
 * @file Définition des types, constantes et valeurs par défaut
 * pour le composant `Button`.
 * @module components/ui/Button.types
 * @version 1.1.0
 * @since 2025-10-17
 * @see {@link Button} pour l'implémentation du composant principal.
 * @description
 * Ce module regroupe toutes les constantes, types et valeurs par défaut
 * utilisés par le composant `Button`.  
 * Il assure une cohérence visuelle et fonctionnelle au sein du design system,
 * tout en facilitant la maintenance et l'intégration dans des outils de showcase (Storybook, etc.).
 * @author Seb-Prod
 */

import type { ReactNode, ButtonHTMLAttributes } from 'react';

/* -------------------------------------------------------------------------- */
/*                                 CONSTANTES                                 */
/* -------------------------------------------------------------------------- */

/**
 * Définit les variantes de couleur disponibles pour le bouton.
 * @example "primary" | "secondary" | "error" | "success" | "info" | "neutral"
 */
export const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "error",
  "success",
  "info",
  "neutral"
] as const;

/**
 * Définit les tailles de boutons prédéfinies.
 * @example "small" | "medium" | "large"
 */
export const BUTTON_SIZES = [
  "small",
  "medium",
  "large"
] as const;

/**
 * Définit les types HTML standards pour les boutons.
 * @example "button" | "submit" | "reset"
 */
export const BUTTON_TYPES = [
  "button",
  "submit",
  "reset"
] as const;

/**
 * Définit les états possibles pour l'option `fullWidth`
 * (utile pour les interfaces de démonstration ou Storybook).
 * @example false | true
 */
export const BUTTON_FULLWIDTH_OPTIONS = [
  false,
  true
] as const;

/**
 * Définit les états possibles pour l'option `disabled`
 * (utile pour les interfaces de démonstration ou Storybook).
 * @example false | true
 */
export const BUTTON_DISABLED_OPTIONS = [
  false,
  true
] as const;

/**
 * Définit les alignements horizontaux possibles pour le bouton.
 * @example "left" | "center" | "right"
 */
export const BUTTON_ALIGN = [
  "left",
  "right",
  "center"
] as const;

/* -------------------------------------------------------------------------- */
/*                                    TYPES                                   */
/* -------------------------------------------------------------------------- */

/**
 * Type représentant toutes les variantes possibles du bouton.
 */
export type ButtonVariant = typeof BUTTON_VARIANTS[number];

/**
 * Type représentant les tailles disponibles pour le bouton.
 */
export type ButtonSize = typeof BUTTON_SIZES[number];

/**
 * Type représentant les types HTML valides pour le bouton.
 */
export type ButtonType = typeof BUTTON_TYPES[number];

/**
 * Type représentant les alignements horizontaux disponibles pour le bouton.
 */
export type ButtonAlign = typeof BUTTON_ALIGN[number];

/**
 * Propriétés personnalisées pour le composant `Button`.
 *
 * Étend les propriétés natives de {@link HTMLButtonElement} via `ButtonHTMLAttributes`.
 * Permet une personnalisation complète du style et du comportement du bouton.
 *
 * @typedef {Object} ButtonProps
 * @property {ReactNode} [children] - Contenu à afficher dans le bouton (texte, icône, etc.).
 * @property {ButtonVariant} [variant='primary'] - Variante de couleur du bouton.
 * @property {ButtonSize} [size='medium'] - Taille prédéfinie du bouton.
 * @property {ButtonType} [type='button'] - Type HTML du bouton (button, submit, reset).
 * @property {boolean} [fullWidth=false] - Si vrai, le bouton occupe 100% de la largeur du conteneur.
 * @property {ButtonAlign} [align='left'] - Alignement horizontal du bouton dans son conteneur.
 * @property {boolean} [disabled=false] - Si vrai, désactive le bouton.
 * @property {string} [className] - Classes CSS supplémentaires à appliquer.
 */
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  type?: ButtonType;
  align?: ButtonAlign;
};

/* -------------------------------------------------------------------------- */
/*                              VALEURS PAR DÉFAUT                            */
/* -------------------------------------------------------------------------- */

/**
 * Valeurs par défaut pour les propriétés du composant `Button`.
 * Ces valeurs garantissent un comportement cohérent lorsqu'aucune prop
 * spécifique n'est fournie par le développeur.
 */
export const BUTTON_DEFAULTS = {
  variant: "primary" as ButtonVariant,
  size: "medium" as ButtonSize,
  align: "left" as ButtonAlign,
  fullWidth: false,
  type: "button" as ButtonType,
  disabled: false,
  className: ""
} satisfies Partial<ButtonProps>;

/* -------------------------------------------------------------------------- */
/*                                SHOWCASE / DEMO                             */
/* -------------------------------------------------------------------------- */

/**
 * Ensemble regroupant toutes les constantes disponibles
 * pour la génération automatique de démonstrations, tests ou stories.
 *
 * @example
 * ```ts
 * BUTTON_SHOWCASE_CONSTANTS.variant.forEach(v => (
 *   <Button variant={v}>Exemple</Button>
 * ));
 * ```
 *
 * @see {@link BUTTON_VARIANTS}
 * @see {@link BUTTON_SIZES}
 * @see {@link BUTTON_TYPES}
 * @see {@link BUTTON_ALIGN}
 * @see {@link BUTTON_FULLWIDTH_OPTIONS}
 * @see {@link BUTTON_DISABLED_OPTIONS}
 */
export const BUTTON_SHOWCASE_CONSTANTS = {
  variant: BUTTON_VARIANTS,
  size: BUTTON_SIZES,
  type: BUTTON_TYPES,
  fullWidth: BUTTON_FULLWIDTH_OPTIONS,
  disabled: BUTTON_DISABLED_OPTIONS,
  align: BUTTON_ALIGN,
} as const;