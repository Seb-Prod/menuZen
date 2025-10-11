import type { ReactNode } from 'react';

/**
 * Définit le type sémantique (balise HTML) à utiliser pour le texte.
 */
export const TEXT_AS = ["span", "p", "label", "strong", "em"] as const;

/**
 * Définit les couleurs thématiques prédéfinies pour le texte.
 */
export const TEXT_COLORS = [
    "primary",
    "secondary",
    "dark",
    "light",
    "neutral",
    "warning",
    "success"
] as const;

/**
 * Définit les options d'alignement du texte.
 */
export const TEXT_ALIGNS = ["left", "right", "center", "justify"] as const;

/**
 * Définit les tailles de police prédéfinies (basées sur une échelle design).
 */
export const TEXT_SIZES = [
  "xs", // Extra Small
  "sm", // Small
  "md", // Medium (par défaut)
  "lg", // Large
  "xl" // Extra Large
] as const;

/**
 * Définit les poids de police (épaisseur) du texte.
 */
export const TEXT_WEIGHTS = [
  "light", // Fin
  "regular", // Normal (par défaut)
  "medium", // Moyen
  "bold" // Gras
] as const;


// Types inférés (utilisés par le composant)
export type TextAs = typeof TEXT_AS[number];
export type TextColor = typeof TEXT_COLORS[number];
export type TextAlign = typeof TEXT_ALIGNS[number];
export type TextSize = typeof TEXT_SIZES[number];
export type TextWeight = typeof TEXT_WEIGHTS[number];


/**
 * Propriétés (props) acceptées par le composant Text.
 */
export type TextProps = {
  /**
   * @description La balise HTML sémantique à rendre ('span' par défaut).
   * @default 'span'
   */
  as?: TextAs;
  /**
   * @description La couleur thématique du texte, mappée à une classe CSS.
   * @default 'primary'
   */
  color?: TextColor;
  /**
   * @description L'alignement du texte.
   * @default 'left'
   */
  align?: TextAlign;
  /**
   * @description La taille prédéfinie du texte.
   * @default 'md'
   */
  size?: TextSize;
  /**
   * @description Le poids de la police (épaisseur) du texte.
   * @default 'regular'
   */
  weight?: TextWeight;
  /**
   * @description Le contenu (texte ou autres éléments) à afficher dans le text.
   */
  children: ReactNode;
  /**
   * @description Classe CSS additionnelle pour une personnalisation avancée.
   */
  className?: string;
};

/**
 * Valeurs par défaut pour les propriétés du composant Text.
 */
export const TEXT_DEFAULTS = {
  as: "span" as TextAs,
  color: "primary" as TextColor,
  align: "left" as TextAlign,
  size: "md" as TextSize,
  weight: "regular" as TextWeight
} as const;

/**
 * Toutes les constantes de Text regroupées pour le showcase
 */
export const TEXT_SHOWCASE_CONSTANTS = {
  as: TEXT_AS,
  color: TEXT_COLORS,
  align: TEXT_ALIGNS,
  size: TEXT_SIZES,
  weight: TEXT_WEIGHTS,
} as const;