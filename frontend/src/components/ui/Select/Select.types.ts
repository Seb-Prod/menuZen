/**
 * @file Définition des types, constantes et valeurs par défaut du composant Select
 * @module components/ui/Select.types
 * @version 1.0.0
 * @since 2025-10-21
 * @see {@link Select} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { SelectHTMLAttributes } from 'react';
import { UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';

// ================================
// Interfaces
// ================================

/**
 * Définit une option du composant Select.
 */
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// ================================
// Constantes
// ================================

/**
 * Définit les états possibles pour l'option `disabled`.
 */
export const SELECT_DISABLED_OPTIONS = [
  false,
  true
] as const;

/**
 * Prend toute la largeur du parent.
 */
export const SELECT_FULL_WIDTH = [
  false,
  true
] as const;

// ================================
// Types
// ================================

// ================================
// Props du composant
// ================================

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> & {
  /** Liste des options disponibles */
  options: SelectOption[];
  /** Valeur sélectionnée */
  value?: string;
  /** Style du Select */
  variant?: UiVariant;
  /** Taille du Select */
  size?: UiSize;
  /** Alignement dans le conteneur parent */
  align?: UiAlign;
  /** Prend toute la largeur du parent */
  fullWidth?:boolean;
  /** Fonction appelée lors du changement de valeur */
  onChange?: (value: string) => void;
  /** Texte affiché par défaut */
  placeholder?: string;
};

// ================================
// Valeurs par défaut
// ================================

export const SELECT_DEFAULTS = {
  ...UI_DEFAULTS,
  placeholder: 'Sélectionnez une option',
  disabled: false,
  fullWidth:false,
  className: "",
  options: [] as SelectOption[]
} satisfies Partial<SelectProps>;

// ================================
// Showcase
// ================================

export const SELECT_SHOWCASE_CONSTANTS = {
  variant: UI_VARIANTS,
  size: UI_SIZES,
  align: UI_ALIGN,
  disabled: SELECT_DISABLED_OPTIONS,
  fullWidth: SELECT_FULL_WIDTH,
} as const;