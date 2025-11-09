/**
 * @file Définition des types, constantes et valeurs par défaut du composant Switch
 * @module components/ui/Switch/Switch.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Switch.
 * 
 * @version 1.2.1
 * @since 2025-10-23
 * @author Seb-Prod
 * 
 * @see {@link Switch} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { ReactNode, InputHTMLAttributes } from 'react';
import { BOOLEAN, UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * États possibles du switch.
 * 
 * @constant
 * @type {readonly ['checked', 'unchecked']}
 */
export const STATES = [
  "checked",
  "unchecked"
] as const;

/**
 * Variantes de couleur disponibles pour le Switch (exclut 'error').
 * 
 * @constant
 */
export const SWITCH_VARIANTS = UI_VARIANTS.filter(v => v !== 'error');

// ================================
// Types
// ================================

/**
 * État du switch.
 * 
 * @typedef {('checked'|'unchecked')} State
 */
export type State = typeof STATES[number];

/**
 * Variante de couleur du switch (exclut 'error').
 * 
 * @typedef SwitchVariant
 */
export type SwitchVariant = Exclude<UiVariant, 'error'>;

/**
 * Fonction de callback lors du changement d'état.
 * 
 * @typedef {Function} SwitchChangeHandler
 * @param {boolean} checked - Nouvel état du switch.
 */
export type SwitchChangeHandler = (checked: boolean) => void;

// ================================
// Props du composant
// ================================

/**
 * Propriétés du composant Switch.
 * 
 * @typedef {Object} Props
 * @property {string} [id] - Identifiant unique du switch.
 * @property {ReactNode} [label] - Texte du label.
 * @property {boolean} [checked] - État du switch.
 * @property {boolean} [disabled] - Switch désactivé.
 * @property {SwitchChangeHandler} [onChange] - Callback lors du changement d'état.
 * @property {SwitchVariant} [variant] - Variante visuelle.
 * @property {UiSize} [size] - Taille du Switch.
 * @property {UiAlign} [align] - Alignement horizontal.
 * @property {string} [ariaLabel] - Label pour l'accessibilité.
 * @property {string} [ariaDescribedBy] - Description pour l'accessibilité.
 */
export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'> & {
  id?: string;
  label?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: SwitchChangeHandler;
  variant?: SwitchVariant;
  size?: UiSize;
  align?: UiAlign;
  ariaLabel?: string;
  ariaDescribedBy?: string;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Switch.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify", "variant"]),
  id: "switch",
  label: "",
  variant: "primary",
  checked: false,
  disabled: false,
  className: ""
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
  variant: SWITCH_VARIANTS,
  size: UI_SIZES,
  align: UI_ALIGN,
  disabled: BOOLEAN,
  checked: BOOLEAN,
} as const;