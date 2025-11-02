/**
 * @file Définition des types, constantes et valeurs par défaut pour les routes
 * @module routes/routes.types
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 */

import type { IconType } from "react-icons";

// ================================
// Constantes
// ================================

/**
 * Définit les clés des routes de l'application.
 */
export const ROUTE_KEYS = [
  "HOME",
  "PLANNING",
  "MENU",
  "SHOPPING",
  "ABOUT",
  "CONTACT",
  "PRIVACY"
] as const;

/**
 * Définit les chemins des routes de l'application.
 */
export const ROUTE_PATHS = {
  HOME: "/",
  PLANNING: "/planning",
  MENU: "/menu",
  SHOPPING: "/shopping",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRIVACY: "/privacy"
} as const;

// ================================
// Types
// ================================

export type RouteKey = typeof ROUTE_KEYS[number];
export type RouteValue = typeof ROUTE_PATHS[RouteKey];
export type RoutesConfig = typeof ROUTE_PATHS;

/**
 * Interface pour un élément de navigation
 */
export interface NavItem {
  /** Le chemin de la route */
  to: RouteValue;
  /** Le composant d'icône à afficher (optionnel pour les liens footer) */
  icon?: IconType;
  /** Le texte du lien de navigation */
  label: string;
  /** Indique si le lien doit être affiché dans la barre de navigation du mode web (desktop) */
  showInWeb?: boolean;
  /** Indique si le lien doit être affiché dans la barre de navigation du mode PWA (mobile) */
  showInPWA?: boolean;
  /** Indique si le lien doit être affiché dans le pied de page */
  showInFooter?: boolean;
}

// ================================
// Valeurs par défaut
// ================================

export const NAV_ITEM_DEFAULTS = {
  showInWeb: false,
  showInPWA: false,
  showInFooter: false
} satisfies Partial<NavItem>;