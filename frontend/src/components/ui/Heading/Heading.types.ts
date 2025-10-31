/**
 * @file Définition des types, constantes et valeurs par défaut du composant Heading
 * @module components/ui/Heading.types
 * @version 1.3.0
 * @since 2025-10-21
 * @see {@link Heading} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_TEXT_JUSTIFY} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @author Seb-Prod
 */

import type { ReactNode, HTMLAttributes } from 'react';
import { UI_DEFAULTS, UI_TEXT_JUSTIFY, UI_VARIANTS, type UiTextJustify, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Définit les niveaux de titre sémantique disponibles (h1 à h6).
 */
export const AS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

// ================================
// Types
// ================================

export type As = typeof AS[number];
// ================================
// Props du composant
// ================================

export type Props = HTMLAttributes<HTMLHeadingElement> & {
  /** Contenu du titre */
  children: ReactNode;
  /** Niveau sémantique du titre */
  as?: As;
  /** Couleur du texte */
  variant?: UiVariant;
  /** Alignement du texte */
  justify?: UiTextJustify;
};

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align"]),
  as: 'h1' as As,
  className: ""
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

export const SHOWCASE_CONSTANTS = {
  as: AS,
  variant: UI_VARIANTS,
  justify: UI_TEXT_JUSTIFY
} as const;