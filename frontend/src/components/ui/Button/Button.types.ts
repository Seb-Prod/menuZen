/**
 * @file Définition des types, constantes et valeurs par défaut du composant Button
 * @module components/ui/Button/Button.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Button.
 * 
 * @version 1.2.1
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @see {@link Button} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { BOOLEAN, UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Types HTML standards pour les boutons.
 * 
 * @constant
 * @type {readonly ['button', 'submit', 'reset']}
 */
export const TYPES = [
  "button",
  "submit",
  "reset"
] as const;

/**
 * Modes d'apparence du bouton.
 * 
 * @constant
 * @type {readonly ['solid', 'outline', 'ghost']}
 */
export const MODES = [
  "solid",
  "outline",
  "ghost"
] as const;

// ================================
// Types
// ================================

/**
 * Type du bouton.
 * 
 * @typedef {('button'|'submit'|'reset')} Type
 */
export type Type = typeof TYPES[number];

/**
 * Mode d'apparence du bouton.
 * 
 * @typedef {('solid'|'outline'|'ghost')} Mode
 */
export type Mode = typeof MODES[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Button.
 * 
 * @typedef {Object} Props
 * @property {ReactNode} [children] - Contenu du bouton.
 * @property {UiVariant} [variant] - Style du bouton.
 * @property {Mode} [mode] - Mode d'apparence (solid, outline, ghost).
 * @property {UiSize} [size] - Taille du bouton.
 * @property {boolean} [fullWidth] - Prend toute la largeur du parent.
 * @property {Type} [type] - Type du bouton.
 * @property {UiAlign} [align] - Alignement dans le conteneur parent.
 */
export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  children?: ReactNode;
  variant?: UiVariant;
  mode?: Mode;
  size?: UiSize;
  fullWidth?: boolean;
  type?: Type;
  align?: UiAlign;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Button.
 * 
 * @constant
 * @type {Partial<Props>}
 */
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

/**
 * Configuration pour la présentation/démonstration du composant.
 * 
 * @constant
 * @type {Object}
 */
export const SHOWCASE = {
  type: TYPES,
  variant: UI_VARIANTS,
  mode: MODES,
  align: UI_ALIGN,
  fullWidth: BOOLEAN,
  size: UI_SIZES,
  disabled: BOOLEAN,
} as const;