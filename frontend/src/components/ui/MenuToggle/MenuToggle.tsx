/**
 * @file Composant MenuToggle
 * @module components/ui/MenuToggle
 */

import type { JSX } from "react";
import styles from "./MenuToggle.module.css";
import { DEFAULTS, type Props } from "./MenuToggle.types";
import { classNames } from "@/utils/object";

/**
 * Composant **MenuToggle** — Icône animée d’ouverture/fermeture de menu.
 * 
 * Affiche différents types d’icônes (`chevron`, `arrow`, `burger`) avec animation de rotation
 * ou de transformation selon l’état `isOpen`. Inclut un support complet de l’accessibilité.
 * 
 * @component
 * @version 1.0.1
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Bouton d’icône animée servant à ouvrir ou fermer un menu.
 * 
 * @example
 * <MenuToggle type="chevron" isOpen={isOpen} onClick={toggleMenu} />
 * 
 * @example
 * <MenuToggle
 *   type="burger"
 *   isOpen={isOpen}
 *   ariaLabelOpen="Fermer la navigation"
 *   ariaLabelClose="Ouvrir la navigation"
 * />
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const MenuToggle = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { variant, size, type, isOpen, ariaLabelClose, ariaLabelOpen, onClick, className } = props;

  const classes = classNames(
    styles.toggle,
    `component-${variant}`,
    `component-${size}`,
    className
  );

  const barClasses = classNames(
    styles.bar,
    styles[type],
    isOpen && styles.open
  );

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      role="switch"
      aria-checked={isOpen}
      aria-expanded={isOpen}
      aria-label={isOpen ? (ariaLabelOpen ?? "Fermer le menu") : (ariaLabelClose ?? "Ouvrir le menu")}
    >
      <span className={barClasses}></span>
    </button>
  );
};

export default MenuToggle;