/**
 * @file Définition des types, constantes et valeurs par défaut du composant Heading
 * @module components/ui/Heading.types
 * @version 1.3.0
 * @since 2025-10-21
 * @see {@link Heading} pour l'implémentation du composant principal.
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
export const HEADING_AS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

// ================================
// Types
// ================================

export type HeadingAs = typeof HEADING_AS[number];
// ================================
// Props du composant
// ================================

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /** Contenu du titre */
  children: ReactNode;
  /** Niveau sémantique du titre */
  as?: HeadingAs;
  /** Couleur du texte */
  variant?: UiVariant;
  /** Alignement du texte */
  justify?: UiTextJustify;
};

// ================================
// Valeurs par défaut
// ================================

export const HEADING_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align"]),
  as: 'h1' as HeadingAs,
  className: ""
} satisfies Partial<HeadingProps>;

// ================================
// Showcase
// ================================

export const HEADING_SHOWCASE_CONSTANTS = {
  as: HEADING_AS,
  variant: UI_VARIANTS,
  justify: UI_TEXT_JUSTIFY
} as const;