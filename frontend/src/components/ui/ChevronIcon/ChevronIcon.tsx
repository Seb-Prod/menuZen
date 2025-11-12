/**
 * @file Composant ChevronIcon
 * @module components/ui/ChevronIcon
 */

import { type JSX } from "react";
import styles from "./ChevronIcon.module.css";
import { DEFAULTS, type Props } from "./ChevronIcon.types";
import { CHEVRON_ICONS } from "./ChevronIcon.constants";
import { classNames } from "@/utils/object";

/**
 * Composant **ChevronIcon** — Icône SVG animée adaptable à divers contextes d’interface.
 * 
 * Ce composant affiche différents types d’icônes (`chevron`, `arrow`, `plus-minus`, `triangle`, `dots`)  
 * et gère leur animation visuelle selon l’état ouvert/fermé (`isOpen`).
 * 
 * @component
 * @version 1.4.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Élément React représentant une icône SVG animée.
 * 
 * @example
 * // Icône simple par défaut
 * <ChevronIcon />
 * 
 * @example
 * // Icône animée avec accessibilité
 * <ChevronIcon 
 *   type="chevron"
 *   isOpen={isOpen}
 *   ariaLabelOpen="Fermer le menu"
 *   ariaLabelClose="Ouvrir le menu"
 * />
 * 
 * @example
 * // Icône plus/moins pour un bloc dépliable
 * <ChevronIcon type="plus-minus" isOpen={isExpanded} />
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const ChevronIcon = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { type, isOpen, ariaLabelOpen, ariaLabelClose, size, variant } = props;

  const renderIcon = (): JSX.Element => {
    switch (type) {
      case "chevron":
        return CHEVRON_ICONS.chevron;
      case "arrow":
        return CHEVRON_ICONS.arrow;
      case "plus-minus":
        return isOpen ? CHEVRON_ICONS.minus : CHEVRON_ICONS.plus;
      case "triangle":
        return CHEVRON_ICONS.triangle;
      case "dots":
        return isOpen ? CHEVRON_ICONS.dotsHorizontal : CHEVRON_ICONS.dotsVertical;
      default:
        return CHEVRON_ICONS.chevron;
    }
  };

  // Les types "plus-minus" et "dots" changent de forme plutôt que de pivoter
  const shouldRotate = type !== "plus-minus" && type !== "dots";

  // Détermination du libellé d’accessibilité selon l’état
  const ariaLabel = isOpen ? ariaLabelOpen : ariaLabelClose;
  const hasAriaLabel = Boolean(ariaLabel);

  const classes = classNames(
    styles.chevron,
    styles[`size-${size}`],
    `text-${variant}`,
    shouldRotate ? (isOpen ? styles.open : styles.closed) : ""
  );

  return (
    <span
      className={classes}
      aria-hidden={!hasAriaLabel}
      aria-label={ariaLabel}
      role={hasAriaLabel ? "img" : undefined}
    >
      {renderIcon()}
    </span>
  );
};

export default ChevronIcon;