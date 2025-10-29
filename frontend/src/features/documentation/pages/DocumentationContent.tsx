/**
 * @file Contenu et constantes pour la page de documentation
 * @module features/documentation/DocumentationContent
 * @version 1.0.0
 * @since 2025-10-29
 * @author Seb-Prod
 */

// ================================
// Constantes
// ================================

/**
 * Clés de section pour la navigation dans la documentation.
 * Utilise des identifiants uniques pour éviter les conflits avec les noms de composants.
 */
export const SECTION_KEYS = {
  THEME: "__SECTION_THEME__",
  UI: "__SECTION_UI__",
  LAYOUT: "__SECTION_LAYOUT__",
} as const;

// ================================
// Contenu des sections
// ================================

/** Description de la section Composants UI. */
export const UI_CONTENT: string = 
  "Composants UI atomiques et réutilisables. Architecture modulaire avec TypeScript et CSS Modules pour l'isolation des styles. Chaque composant inclut Component.tsx, Component.module.css et Component.types.ts.";

/** Description de la section Composants Layout. */
export const LAYOUT_CONTENT: string = 
  "Composants structurels pour l'organisation des pages : Page, SideBar, Layout, Navigation. Architecture responsive et accessible pour des interfaces cohérentes.";

/** Description de la section Design System. */
export const THEME_CONTENT: string = 
  "Design System complet : palette de couleurs, typographie, espacements et tokens CSS. Système cohérent de variables CSS pour maintenir une identité visuelle uniforme.";