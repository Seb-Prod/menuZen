/**
 * @file Types et constantes spécifiques aux composants de mise en page (Layout, Box, Stack, Grid).
 * @module components/layout/layout.types
 * @version 1.3.0
 * @since 2025-10-28
 * @author Seb-Prod
 */

// ================================
// Constantes spécifiques au Layout (Flex/Grid/Background)
// Les constantes globales (UI_SIZES, UI_VARIANTS, etc.) sont supposées être importées d'ailleurs.
// ================================

/**
 * Variantes de couleur de fond (Background) basées sur les classes utilitaires créées.
 * Utilisé pour Box, Sidebar, Card, etc.
 */
export const LAYOUT_VARIANTS = [
  "surface-primary",
  "surface-secondary",
  "surface-elevated",
  "brand-primary",
  "brand-secondary",
  "status-success",
  "status-error",
  "status-info",
  "status-neutral",
] as const;



// ================================
// Types spécifiques au Layout
// ================================

/** Type de variante de fond pour les composants de layout (e.g., Card, Box). */
export type LayoutVariant = typeof LAYOUT_VARIANTS[number];


// ================================
// Valeurs par défaut du Layout
// ================================

export const LAYOUT_DEFAULTS = {
  variant: "surface-primary" as LayoutVariant,
} as const;