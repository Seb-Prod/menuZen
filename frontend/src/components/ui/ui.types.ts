/**
 * @file Types et constantes communes à tous les composants UI.
 * @module components/ui/ui.types
 * @version 1.2.0
 * @since 2025-10-21
 * @author Seb-Prod
 */

// ================================
// Constantes globales
// ================================

/**
 * Variantes Boolean
 */
export const BOOLEAN = [
  true,
  false,
] as const

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
 * Modes de rendu des composants.
 */
export const UI_MODE = [
  "solid",
  "outline",
  "ghost"
] as const;

/**
 * Tailles prédéfinies communes à plusieurs composants.
 */
export const UI_SIZES = [
  "xs",
  "small",
  "medium",
  "large",
  "xl",
  "2xl"
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

/**
 * États possibles des composants UI.
 */
export const UI_STATES = [
  "disabled",
  "loading",
  "active",
  "hover"
] as const;

// ================================
// Types génériques
// ================================

export type UiVariant = typeof UI_VARIANTS[number];
export type UiSize = typeof UI_SIZES[number];
export type UiAlign = typeof UI_ALIGN[number];
export type UiTextJustify = typeof UI_TEXT_JUSTIFY[number];
export type UiMode = typeof UI_MODE[number];
export type UiState = typeof UI_STATES[number];

// ================================
// Valeurs par défaut globales
// ================================

export const UI_DEFAULTS = {
  variant: "primary" as UiVariant,
  size: "medium" as UiSize,
  align: "left" as UiAlign,
  justify: "left" as UiTextJustify,
} as const;

export const UI_DEFAULTS_BUTTON = {
  variant: "primary" as UiVariant,
  size: "medium" as UiSize,
  align: "left" as UiAlign,
  mode: "solid" as UiMode,
} as const;

// ================================
// Types utilitaires
// ================================

/**
 * Type des valeurs par défaut globales.
 */
export type UiDefaults = typeof UI_DEFAULTS;

/**
 * Type des valeurs par défaut pour les boutons.
 */
export type UiDefaultsButton = typeof UI_DEFAULTS_BUTTON;