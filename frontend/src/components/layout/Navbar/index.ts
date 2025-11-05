/**
 * @file Point d'entrée pour le composant Navbar
 * @module components/layout/Navbar
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 *
 * Ce module centralise les exports liés à la Navbar :
 * - Le composant principal `Navbar`
 * - Le sous-composant `NavItem`
 * - Les hooks personnalisés (`useNavbarToggle`, `useClickOutside`, `useCloseOnDesktop`)
 * - Les types associés (`NavItemProps`)
 */

export { default } from './Navbar';
export { default as NavItem } from './NavItem';
export type { Props as NavItemProps } from './NavItem/NavItem.types';

// 🔹 Hooks personnalisés
export {
  useNavbarToggle,
  useClickOutside,
  useCloseOnDesktop,
  useModalVisibilityWithAnimation
} from './Navbar.hooks';