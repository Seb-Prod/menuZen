/**
 * @file Types et constantes communes à tous les composants UI.
 * @module components/ui/ui.types
 * @version 1.1.0
 * @since 2025-10-21
 * @author Seb-Prod
 */

// ================================
// Constantes globales
// ================================

/**
 * Variantes de couleur disponibles dans le design system.
 */
export const UI_VARIANTS = [
  "primary",
  "secondary",
  "success",
  "error",
  "info",
  "neutral"
] as const;

/**
 * Tailles prédéfinies communes à plusieurs composants.
 */
export const UI_SIZES = [
  "small",
  "medium",
  "large"
] as const;

/**
 * Alignement horizontal du composant dans son conteneur parent.
 * (utilisé pour Button, Spinner, etc.)
 */
export const UI_ALIGN = [
  "left",
  "center",
  "right"
] as const;

/**
 * Justification du contenu textuel interne.
 * (utilisé pour Text, Heading, TableCell, etc.)
 */
export const UI_TEXT_JUSTIFY = [
  "left",
  "center",
  "right",
  "justify"
] as const;

// ================================
// Types génériques
// ================================

export type UiVariant = typeof UI_VARIANTS[number];
export type UiSize = typeof UI_SIZES[number];
export type UiAlign = typeof UI_ALIGN[number];
export type UiTextJustify = typeof UI_TEXT_JUSTIFY[number];

// ================================
// Valeurs par défaut globales
// ================================

export const UI_DEFAULTS = {
  variant: "primary" as UiVariant,
  size: "medium" as UiSize,
  align: "left" as UiAlign,
  justify: "left" as UiTextJustify,
} as const;