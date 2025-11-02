/**
 * @file Hook pour détecter si une route est active
 * @module hooks/useActiveRoute/useActiveRoute
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 */

import { useLocation } from "react-router-dom";
import type { RouteValue } from "@/routes";
import { DEFAULTS, type UseActiveRouteOptions } from "./useActiveRoute.types";

/**
 * Hook pour vérifier si une route est active
 * 
 * @param route - Route à vérifier
 * @param options - Options du hook
 * @returns true si la route est active, false sinon
 * 
 * @example
 * // Vérification exacte
 * const isActive = useActiveRoute('/home');
 * 
 * @example
 * // Vérification partielle (inclut les routes enfants)
 * const isActive = useActiveRoute('/admin', { exact: false });
 */
export const useActiveRoute = (
  route: RouteValue,
  options?: UseActiveRouteOptions
): boolean => {
  const location = useLocation();
  const { exact } = { ...DEFAULTS, ...options };

  if (exact) {
    // Vérification exacte
    return location.pathname === route;
  }

  // Vérification partielle (commence par la route)
  return location.pathname.startsWith(route);
};