/**
 * @file Gestionnaires d'événements pour la Navbar
 * @module components/layout/Navbar.handler
 * @description
 * Gère l'ouverture/fermeture d'une modale.
 * N'ouvre que si complètement fermée, ferme si ouverte.
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 * 
 * @example
 * const handleClick = handleModalToggle(isOpen, isVisible, open, close);
 */
export const handleModalToggle = (
  isOpen: boolean,
  isVisible: boolean,
  open: () => void,
  close: () => void
) => {
  return () => {
    if (!isOpen && !isVisible) {
      open();
    } else if (isOpen) {
      close();
    }
  };
};