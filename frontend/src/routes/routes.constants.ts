/**
 * @file Configuration des routes et éléments de navigation
 * @module routes/routes.constants
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 */

import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import type { NavItem } from "./routes.types";
import { ROUTE_PATHS } from "./routes.types";

/**
 * Configuration des routes de l'application.
 * Utiliser ces constantes permet d'éviter les erreurs de frappe
 * et de faciliter les modifications de chemins.
 */
export const ROUTES = ROUTE_PATHS;

/**
 * Configuration des éléments de navigation pour l'application.
 * Chaque objet définit un lien de navigation avec ses propriétés d'affichage
 * pour les différentes versions de l'application (web, PWA, footer).
 */
export const NAV_ITEMS: NavItem[] = [
  {
    to: ROUTES.HOME,
    icon: BiFoodMenu,
    label: "Recettes",
    showInWeb: true,
    showInPWA: true,
    showInFooter: false
  },
  {
    to: ROUTES.SHOPPING,
    icon: FaShoppingCart,
    label: "Panier",
    showInWeb: false,
    showInPWA: true,
    showInFooter: false
  },
  {
    to: ROUTES.PLANNING,
    icon: FaCalendarAlt,
    label: "Planning",
    showInWeb: false,
    showInPWA: true,
    showInFooter: false
  },
  {
    to: ROUTES.MENU,
    icon: IoMenu,
    label: "Menu",
    showInWeb: false,
    showInPWA: true,
    showInFooter: false
  },
  {
    to: ROUTES.DOCUMENTATION,
    icon: IoMenu,
    label: "Documentation",
    showInWeb: true,
    showInPWA: true,
    showInFooter: false
  },
  {
    to: ROUTES.ABOUT,
    label: "À propos",
    showInFooter: true
  },
  {
    to: ROUTES.PRIVACY,
    label: "Confidentialité",
    showInFooter: true
  },
  {
    to: ROUTES.CONTACT,
    label: "Contact",
    showInFooter: true
  }
];

/**
 * Retourne les éléments de navigation pour le mode web (desktop).
 */
export const getWebNavItems = (): NavItem[] => 
  NAV_ITEMS.filter(item => item.showInWeb);

/**
 * Retourne les éléments de navigation pour le mode PWA (mobile).
 */
export const getPWANavItems = (): NavItem[] => 
  NAV_ITEMS.filter(item => item.showInPWA);

/**
 * Retourne les éléments de navigation pour le footer.
 */
export const getFooterNavItems = (): NavItem[] => 
  NAV_ITEMS.filter(item => item.showInFooter);