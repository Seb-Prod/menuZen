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
import { UI_DEFAULTS, UI_TEXT_JUSTIFY, UI_VARIANTS, type UiTextJustify, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Définit les balises HTML sémantiques utilisables pour le texte.
 */
export const TEXT_AS = [
  "span",
  "p",
  "label",
  "strong",
  "em"
] as const;

/**
 * Définit les tailles de police prédéfinies (basées sur une échelle design).
 */
export const TEXT_SIZES = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const;

/**
 * Définit les poids de police (épaisseur) du texte.
 */
export const TEXT_WEIGHTS = [
  "light",
  "regular",
  "medium",
  "bold"
] as const;


// ================================
// Types
// ================================

export type TextAs = typeof TEXT_AS[number];
export type TextSize = typeof TEXT_SIZES[number];
export type TextWeight = typeof TEXT_WEIGHTS[number];

// ================================
// Props des composants
// ================================

export type TextProps = {
  /** Balise HTML sémantique à rendre */
  as?: TextAs;
  /** Couleur thématique du texte */
  variant?: UiVariant;
  /** Taille de la police */
  size?: TextSize;
  /** Poids (épaisseur) de la police */
  weight?: TextWeight;
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

export const TEXT_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align"]),
  as: "span" as TextAs,
  size: "md" as TextSize,
  weight: "regular" as TextWeight,
  className: ""
} satisfies Partial<TextProps>;

// ================================
// Showcase
// ================================

export const TEXT_SHOWCASE_CONSTANTS = {
  as: TEXT_AS,
  variant: UI_VARIANTS,
  size: TEXT_SIZES,
  weight: TEXT_WEIGHTS,
  justify: UI_TEXT_JUSTIFY,
} as const;