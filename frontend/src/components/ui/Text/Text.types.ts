/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Text.types
 * @version 1.2.0
 * @since 2025-10-22
 * @see {@link Text} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_ALIGN} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut. 
 * @author Seb-Prod
 */

import type { ReactNode } from 'react';
import { UI_DEFAULTS, UI_SIZES, UI_TEXT_JUSTIFY, UI_VARIANTS, type UiSize, type UiTextJustify, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Définit les balises HTML sémantiques utilisables pour le texte.
 */
export const AS = [
  "span",
  "p",
  "label",
  "strong",
  "em"
] as const;


/**
 * Définit les poids de police (épaisseur) du texte.
 */
export const 
WEIGHTS = [
  "light",
  "regular",
  "medium",
  "bold"
] as const;


// ================================
// Types
// ================================

export type As = typeof AS[number];
export type Weight = typeof WEIGHTS[number];

// ================================
// Props des composants
// ================================

export type Props = {
  /** Balise HTML sémantique à rendre */
  as?: As;
  /** Couleur thématique du texte */
  variant?: UiVariant;
  /** Taille de la police */
  size?: UiSize;
  /** Poids (épaisseur) de la police */
  weight?: Weight;
  /** Alignement du texte */
  justify?: UiTextJustify;
  /** Contenu textuel à afficher */
  children: ReactNode;
  /** Classes CSS personnalisées supplémentaires */
  className?: string;
};

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align"]),
  as: "span" as As,
  weight: "regular" as Weight,
  className: ""
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

export const SHOWCASE_CONSTANTS = {
  as: AS,
  variant: UI_VARIANTS,
  size: UI_SIZES,
  weight: WEIGHTS,
  justify: UI_TEXT_JUSTIFY,
} as const;