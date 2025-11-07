/**
 * @file Composant Modal
 * @module compoenets/layout/Modal
 */

import { forwardRef, type JSX } from "react";
import styles from "./Modal.module.css";
import { classNames } from "@/utils/object";
import { DEFAULTS, type Props } from "./Modal.types";

/**
 * Composant Modal - lorem
 * 
 * lorem long
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-05
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * 
 * 
 * @returns {JSX.Element} Élément React représentant une modale.
 * 
 * @example
 * 
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */

const Modal = forwardRef<HTMLDivElement, Props>((inputProps, ref): JSX.Element => {
  const { variant, origin,position, onClose, children, isClosing, fullScreen } = { ...DEFAULTS, ...inputProps };

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