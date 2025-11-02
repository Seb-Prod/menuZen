/**
 * @file Définition des types pour le hook useActiveRoute
 * @module hooks/useActiveRoute/useActiveRoute.types
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 */

import type { RouteValue } from "@/routes";

// ================================
// Types
// ================================

/**
 * Options pour le hook useActiveRoute
 */
export interface UseActiveRouteOptions {
  /** Si true, vérifie également les routes enfants */
  exact?: boolean;
}

/**
 * Valeur de retour du hook useActiveRoute
 */
export interface UseActiveRouteReturn {
  /** Si la route est active */
  isActive: boolean;
  /** Si la route ou une de ses routes enfants est active */
  isPartiallyActive: boolean;
}

/**
 * Paramètres du hook useActiveRoute
 */
export interface UseActiveRouteParams {
  /** Route à vérifier */
  route: RouteValue;
  /** Options du hook */
  options?: UseActiveRouteOptions;
}

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS: UseActiveRouteOptions = {
  exact: true,
};