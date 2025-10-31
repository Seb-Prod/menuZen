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
export const TYPES = [
  "button",
  "submit",
  "reset"
] as const;

export const MODES = [
  "solid",
  "outline",
  "ghost"
] as const;

// ================================
// Types
// ================================

export type Type = typeof TYPES[number];
export type Mode = typeof MODES[number];

// ================================
// Props des composants
// ================================
export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  /** Contenu du bouton */
  children?: ReactNode;
  /** Style du bouton */
  variant?: UiVariant;
  /** Mode d'apparence du bouton (solid, outline, ghost) */
  mode?: Mode;
  /** Taille du bouton */
  size?: UiSize;
  /** Prend toute la largeur du parent */
  fullWidth?: boolean;
  /** Type du bouton */
  type?: Type;
  /** Alignement dans le conteneur parent */
  align?: UiAlign;
};

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
  fullWidth: false,
  type: "button" as Type,
  disabled: false,
  mode: "solid" as Mode,
  className: ""
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================
export const SHOWCASE_CONSTANTS = {
  type: TYPES,
  variant: UI_VARIANTS,
  mode: MODES,
  align: UI_ALIGN,
  size: UI_SIZES,
} as const;