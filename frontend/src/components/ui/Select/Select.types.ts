/**
 * @file Définition des types, constantes et valeurs par défaut du composant Select
 * @module components/ui/Select.types
 * @version 1.1.0
 * @since 2025-10-21
 * @see {@link Select} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_ALIGN} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @author Seb-Prod
 */

import type { SelectHTMLAttributes } from 'react';
import { BOOLEAN, UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Interfaces
// ================================

/**
 * Définit une option du composant Select.
 */
export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

// ================================
// Constantes
// ================================


// ================================
// Types
// ================================

// ================================
// Props du composant
// ================================

export type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> & {
  /** Liste des options disponibles */
  options: Option[];
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

export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
  placeholder: 'Sélectionnez une option',
  disabled: false,
  fullWidth:false,
  className: "",
  options: [] as Option[]
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

export const SHOWCASE_CONSTANTS = {
  variant: UI_VARIANTS,
  size: UI_SIZES,
  align: UI_ALIGN,
  disabled: BOOLEAN,
  fullWidth: BOOLEAN,
} as const;