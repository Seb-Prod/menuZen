/**
 * @file Point d'entrée pour le composant Navbar
 * @module components/layout/Navbar
 * @description
 * Barrel file qui exporte le composant Navbar, types, constantes et configurations associées.
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 *
 * Ce module centralise les exports liés à la Navbar :
 * - Le composant principal `Navbar`
 * - Le sous-composant `NavItem`
 * - Les hooks personnalisés (`useNavbarToggle`, `useClickOutside`, `useCloseOnDesktop`)
 * - Les types associés (`NavItemProps`)
 */

export { default } from './Navbar';
export { NavItem } from './NavItem';
export type { Props as NavItemProps } from './NavItem/NavItem.types';
export {
  useNavbarToggle,
  useCloseOnDesktop, 
  useToggleAparence
} from './Navbar.hooks';