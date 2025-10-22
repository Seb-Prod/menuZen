/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Spinner.types
 * @version 1.2.0
 * @since 2025-10-21
 * @see {@link Spinner} pour l'implémentation du composant principal.
* @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_ALIGN} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @autor Seb-Prod
 */

import type { ReactNode } from 'react';
import { UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

// ================================
// Types
// ================================

// ================================
// Props du composant
// ================================

export type SpinnerProps = {
  /** Variante visuelle du Spinner */
  variant?: UiVariant;
  /** Taille du Spinner */
  size?: UiSize;
  /** Alignement horizontal dans le conteneur parent */
  align?: UiAlign;
  /** Contenu éventuel du Spinner (rarement utilisé) */
  children?: ReactNode;
};

// ================================
// Valeurs par défaut
// ================================

export const SPINNER_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
} satisfies Partial<SpinnerProps>;

// ================================
// Showcase
// ================================

/**
 * Constantes utilisées pour générer les combinaisons de démonstration
 * dans la page de showcase du Spinner.
 */
export const SPINNER_SHOWCASE_CONSTANTS = {
  variant: UI_VARIANTS,
  size: UI_SIZES,
  align: UI_ALIGN,
} as const;