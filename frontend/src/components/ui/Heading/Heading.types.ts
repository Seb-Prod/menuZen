import type { ReactNode } from "react";

/**
 * Définit les niveaux de titre sémantique H1 à H6.
 */
export const HEADING_VARIANTS = [1, 2, 3, 4, 5, 6] as const;

/**
 * Définit les couleurs thématiques prédéfinies pour le titre.
 */
export const HEADING_COLORS = [
  "primary",
  "secondary", 
  "dark",
  "light",
  "neutral",
  "warning",
  "success"
] as const;

/**
 * Définit les options d'alignement du texte pour le titre.
 */
export const HEADING_ALIGNS = ["left", "right", "center", "justify"] as const;

// Types inférés (utilisés par le composant)
export type HeadingVariant = typeof HEADING_VARIANTS[number];
export type HeadingColor = typeof HEADING_COLORS[number];
export type HeadingAlign = typeof HEADING_ALIGNS[number];

/**
 * Propriétés (props) acceptées par le composant Heading.
 */
export type HeadingProps = {
  /**
   * @description Le niveau de titre sémantique (h1 par défaut) qui détermine la balise HTML.
   * @default 1
   */
  variant?: HeadingVariant;
  /**
   * @description La couleur thématique du titre, mappée à une classe CSS.
   * @default 'primary'
   */
  color?: HeadingColor;
  /**
   * @description L'alignement du texte du titre.
   * @default 'left'
   */
  align?: HeadingAlign;
  /**
   * @description Le contenu (texte ou autres éléments) à afficher dans le titre.
   */
  children: ReactNode;
  /**
   * @description Classe CSS additionnelle pour une personnalisation avancée.
   */
  className?: string;
};

/**
 * Valeurs par défaut pour les propriétés du composant Heading.
 */
export const HEADING_DEFAULTS = {
  variant: 1 as HeadingVariant,
  color: "primary" as HeadingColor,
  align: "left" as HeadingAlign
} as const;