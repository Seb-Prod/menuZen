/**
 * @file Définition des types, constantes et valeurs par défaut du composant Select
 * @module components/ui/Select.types
 * @version 1.0.0
 * @since 2025-10-21
 * @see {@link Select} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { SelectHTMLAttributes } from 'react';

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
 * Définit les variantes de couleur disponibles pour le Select.
 */
export const SELECT_VARIANTS = [
  "primary",
  "secondary",
  "error",
  "success",
  "info",
  "neutral"
] as const;

/**
 * Définit les tailles prédéfinies du Select.
 */
export const SELECT_SIZES = [
  "small",
  "medium",
  "large"
] as const;

/**
 * Définit les options d'alignement horizontal du Select.
 */
export const SELECT_ALIGN = [
  "left",
  "right",
  "center"
] as const;

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

export type SelectVariant = typeof SELECT_VARIANTS[number];
export type SelectSize = typeof SELECT_SIZES[number];
export type SelectAlign = typeof SELECT_ALIGN[number];

// ================================
// Props du composant
// ================================

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> & {
  /** Liste des options disponibles */
  options: SelectOption[];
  /** Valeur sélectionnée */
  value?: string;
  /** Style du Select */
  variant?: SelectVariant;
  /** Taille du Select */
  size?: SelectSize;
  /** Alignement dans le conteneur parent */
  align?: SelectAlign;
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
  variant: "neutral" as SelectVariant,
  size: "medium" as SelectSize,
  align: "left" as SelectAlign,
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
  variant: SELECT_VARIANTS,
  size: SELECT_SIZES,
  align: SELECT_ALIGN,
  disabled: SELECT_DISABLED_OPTIONS,
  fullWidth: SELECT_FULL_WIDTH,
} as const;