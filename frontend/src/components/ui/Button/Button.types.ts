/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Button.types
 * @version 1.2.0
 * @since 2025-10-17
 * @see {@link Button} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_ALIGN} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @author Seb-Prod
 */

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

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

// ================================
// Types
// ================================

export type ButtonType = typeof BUTTON_TYPES[number];

// ================================
// Props des composants
// ================================
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  /** Contenue du bouton */
  children?: ReactNode;
  /** Style du bouton */
  variant?: UiVariant;
  /** Taille du bouton */
  size?: UiSize;
  /** Prend toute la largeur du parent */
  fullWidth?: boolean;
  /** Type du bouton */
  type?: ButtonType;
  /** Alignement dans le conteneur parent */
  align?: UiAlign;
};

// ================================
// Valeurs par défaut
// ================================

export const BUTTON_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
  fullWidth: false,
  type: "button" as ButtonType,
  disabled: false,
  className: ""
} satisfies Partial<ButtonProps>;

// ================================
// Showcase
// ================================
export const BUTTON_SHOWCASE_CONSTANTS = {
  variant: UI_VARIANTS,
  size: UI_SIZES,
  type: BUTTON_TYPES,
  fullWidth: BUTTON_FULLWIDTH_OPTIONS,
  disabled: BUTTON_DISABLED_OPTIONS,
  align: UI_ALIGN,
} as const;