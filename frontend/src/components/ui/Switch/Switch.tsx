/**
 * @file Composant Switch.
 * @module components/ui/Switch
 */

import type { JSX } from "react";
import styles from "./Switch.module.css";
import { SWITCH_DEFAULTS, type SwitchProps } from "./Switch.types";

/**
 * Composant **Switch** – lorem.
 * 
 * Lorem.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-23
 * @author Seb-Prod
 * 
 * @param {SwitchProps} props - Les propriétés du composant.
 * @param {UiVariant} [props.variant='primary'] - Schéma de couleur du spinner (primary, secondary, error, success, info, neutral).
 * @param {UiSize} [props.size='medium'] - Taille prédéfinie du spinner (small, medium, large).
 * @param {UiAlign} [props.align='center'] - Position horizontale du spinner dans son conteneur (left, center, right).
 * 
 * @returns {JSX.Element} Élément visuel représentant un indicateur de chargement.
 * 
 * @example
 * 
 * @example
 * 
 * @example
 * 
 * @example
 * 
 * @see {@link SwitchProps}
 * @see {@link SWITCH_DEFAULTS}
 */
const Switch = ({
  variant = SWITCH_DEFAULTS.variant,
  size = SWITCH_DEFAULTS.size,
  align = SWITCH_DEFAULTS.align,
}: SwitchProps): JSX.Element => {
  // Construction des classes CSS dynamiques
  const classes = [
    styles.switch,
    styles[size],
    `text-${variant}`,
    `component-${align}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span>test</span>
    </div>
  );
};

export default Switch;