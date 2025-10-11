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

// Types inférés
export type HeadingVariant = typeof HEADING_VARIANTS[number];
export type HeadingColor = typeof HEADING_COLORS[number];
export type HeadingAlign = typeof HEADING_ALIGNS[number];

/**
 * Propriétés personnalisées acceptées par le composant Heading.
 */
export type HeadingProps = {
  variant?: HeadingVariant;
  color?: HeadingColor;
  align?: HeadingAlign;
  children: ReactNode;
  className?: string;
};

/**
 * Valeurs par défaut pour les propriétés du composant Heading.
 */
export const HEADING_DEFAULTS = {
  variant: 1 as HeadingVariant,
  color: "primary" as HeadingColor,
  align: "left" as HeadingAlign,
  className:""
} satisfies Partial<HeadingProps>;

/**
 * Toutes les constantes de Heading pour le showcase
 */
export const HEADING_SHOWVASE_CONSTANTS ={
  variant:HEADING_VARIANTS,
  color:HEADING_COLORS,
  align:HEADING_ALIGNS
} as const