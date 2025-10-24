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

/** Définit si une bordure
 */
export const BUTTON_BORDERED = [
  false,
  true,
] as const

export const BUTTON_OUTLINE = [
  false,
  true,
] as const

export const BUTTON_MODES = [
  "solid",
  "outline",
  "ghost"
] as const;

// ================================
// Types
// ================================

export type ButtonType = typeof BUTTON_TYPES[number];
export type ButtonMode = typeof BUTTON_MODES[number];

// ================================
// Props des composants
// ================================
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  /** Contenu du bouton */
  children?: ReactNode;
  /** Style du bouton */
  variant?: UiVariant;
  /** Mode d'apparence du bouton (solid, outline, ghost) */
  mode?: ButtonMode;
  /** Taille du bouton */
  size?: UiSize;
  /** Prend toute la largeur du parent */
  fullWidth?: boolean;
  /** Type du bouton */
  type?: ButtonType;
  /** Alignement dans le conteneur parent */
  align?: UiAlign;
  /** Bordure autour */
  bordered?: boolean;
};

// ================================
// Valeurs par défaut
// ================================

export const BUTTON_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
  fullWidth: false,
  type: "button" as ButtonType,
  disabled: false,
  bordered: true,
  mode: "solid" as ButtonMode,
  className: ""
} satisfies Partial<ButtonProps>;

// ================================
// Showcase
// ================================
export const BUTTON_SHOWCASE_CONSTANTS = {
  type: BUTTON_TYPES,
  variant: UI_VARIANTS,
  mode: BUTTON_MODES,
  bordered: BUTTON_BORDERED,
  align: UI_ALIGN,
  size: UI_SIZES,
  fullWidth: BUTTON_FULLWIDTH_OPTIONS,
  disabled: BUTTON_DISABLED_OPTIONS,
} as const;