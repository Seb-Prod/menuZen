/**
 * @file Définition des types, constantes et valeurs par défaut du composant Select
 * @module components/ui/Select/Select.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Select.
 * 
 * @version 1.1.1
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @see {@link Select} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { SelectHTMLAttributes } from 'react';
import { BOOLEAN, UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Interfaces
// ================================

/**
 * Interface définissant une option du composant Select.
 * 
 * @interface Option
 * @property {string} value - Valeur de l'option.
 * @property {string} label - Texte affiché pour l'option.
 * @property {boolean} [disabled] - Option désactivée.
 */
export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

// ================================
// Props du composant
// ================================

/**
 * Propriétés du composant Select.
 * 
 * @typedef {Object} Props
 * @property {Option[]} options - Liste des options disponibles.
 * @property {string} [value] - Valeur sélectionnée.
 * @property {UiVariant} [variant] - Style du Select.
 * @property {UiSize} [size] - Taille du Select.
 * @property {UiAlign} [align] - Alignement dans le conteneur parent.
 * @property {boolean} [fullWidth] - Prend toute la largeur du parent.
 * @property {Function} [onChange] - Fonction appelée lors du changement de valeur.
 * @property {string} [placeholder] - Texte affiché par défaut.
 */
export type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> & {
  options: Option[];
  value?: string;
  variant?: UiVariant;
  size?: UiSize;
  align?: UiAlign;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Select.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
  placeholder: 'Sélectionnez une option',
  disabled: false,
  fullWidth: false,
  className: "",
  options: [] as Option[]
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

/**
 * Configuration pour la présentation/démonstration du composant.
 * 
 * @constant
 * @type {Object}
 */
export const SHOWCASE = {
  variant: UI_VARIANTS,
  size: UI_SIZES,
  align: UI_ALIGN,
  disabled: BOOLEAN,
  fullWidth: BOOLEAN,
} as const;