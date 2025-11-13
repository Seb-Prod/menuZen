/**
 * @file Composant Modal
 * @module compoenets/layout/Modal
 */

import { forwardRef, type JSX } from "react";
import styles from "./Modal.module.css";
import { classNames } from "@/utils/object";
import { DEFAULTS, type Props } from "./Modal.types";

/**
 * Composant **Modal** – Fenêtre modale de superposition.
 *
 * Le composant Modal est utilisé pour afficher du contenu au premier plan,
 * bloquant l'interaction avec le reste de l'application (l'arrière-plan).
 * Il gère l'ouverture/fermeture, l'accessibilité (focus trap, fermeture via ESC)
 * et le rendu conditionnel.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-05
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element | null} Élément React représentant une modale, ou `null` si fermé.
 * 
 * @example
 * <Modal isOpen={isOpen} onClose={handleClose} variant="primary">
 *   <h2>Titre de la modale</h2>
 *   <p>Contenu de la modale</p>
 * </Modal>
 * 
 * @see {@link Props} pour la définition des propriétés.
 * @see {@link DEFAULTS} pour les valeurs par défaut.
 */

const Modal = forwardRef<HTMLDivElement, Props>((inputProps, ref): JSX.Element => {
  const props = {...DEFAULTS, ...inputProps};
  const { variant, origin, position, onClose, children, isClosing, fullScreen } = props;

  const classes = classNames(
    styles.modal,
    `bg-${variant}`,
    styles[`from-${origin}`],
    styles[`pos-${position}`],
    fullScreen && styles.fullScreen,
    !isClosing && styles.opening,
    isClosing && styles.closing
  );

  const overlayClasses = classNames(
    styles.overlay,
    !isClosing ? styles.opening : styles.closing
  );

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div className={overlayClasses} onClick={handleOverlayClick}>
      <div className={classes} ref={ref}>
        {children}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;