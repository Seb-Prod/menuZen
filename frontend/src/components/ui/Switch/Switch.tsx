/**
 * @file Composant Switch.
 * @module components/ui/Switch
 */

import type { JSX } from "react";
import styles from "./Switch.module.css";
import { DEFAULTS, type Props } from "./Switch.types";
import { classNames } from "@/utils/object";

/**
 * Composant **Switch** – Interrupteur à bascule personnalisable.
 * 
 * Permet de basculer entre deux états (activé/désactivé) avec une animation fluide.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-23
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Élément visuel représentant un switch interactif.
 * 
 * @example
 * // Switch simple avec label
 * <Switch id="notifications" label="Activer les notifications" />
 * 
 * @example
 * // Switch contrôlé avec callback
 * <Switch 
 *   id="darkMode" 
 *   label="Mode sombre" 
 *   checked={isDarkMode}
 *   onChange={(checked) => setIsDarkMode(checked)}
 *   variant="success"
 *   size="large"
 * />
 * 
 * @example
 * // Switch avec couleur de label personnalisée
 * <Switch 
 *   label="Option premium" 
 *   labelColor="warning"
 *   variant="warning"
 * />
 * 
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */
const Switch = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps }
  const { onChange, size, disabled, variant, align, id, label, name, value, checked, ariaDescribedBy, ariaLabel } = props;


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  // Construction des classes CSS dynamiques
  const classes = classNames(
    styles.switch,
    styles[`size-${size}`],
    disabled && styles.disabled,
    `component-${variant}`,
    `component-${align}`,
    `component-${size}`,
  )

  return (
    <div className={classes}>
      <label htmlFor={id} className={styles.label}>
        <span>
          {label}
        </span>

        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          className={styles.input}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
        />

        <span className={styles.toggle} data-variant={variant}>
          <span className={styles.circle} />
        </span>
      </label>
    </div>
  );
};

export default Switch;