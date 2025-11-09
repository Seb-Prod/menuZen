/**
 * @file Définition des types, constantes et valeurs par défaut du composant Spinner
 * @module components/ui/Spinner/Spinner.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Spinner.
 * 
 * @version 1.2.1
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @see {@link Spinner} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { ReactNode } from 'react';
import { UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Props du composant
// ================================

/**
 * Propriétés du composant Spinner.
 * 
 * @typedef {Object} Props
 * @property {UiVariant} [variant] - Variante visuelle du Spinner.
 * @property {UiSize} [size] - Taille du Spinner.
 * @property {UiAlign} [align] - Alignement horizontal dans le conteneur parent.
 * @property {ReactNode} [children] - Contenu éventuel du Spinner.
 */
export type Props = {
  variant?: UiVariant;
  size?: UiSize;
  align?: UiAlign;
  children?: ReactNode;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Spinner.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
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
} as const;