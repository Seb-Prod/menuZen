/**
 * @file Composant Switch.
 * @module components/ui/Switch
 */

import type { JSX } from "react";
import styles from "./Switch.module.css";
import { SWITCH_DEFAULTS, type SwitchProps } from "./Switch.types";

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
 * @param {SwitchProps} props - Les propriétés du composant.
 * @param {string} [props.id='switch'] - Identifiant unique du switch (pour l'association label/input).
 * @param {string} [props.label='test'] - Texte du label associé au switch.
 * @param {boolean} [props.checked=false] - État du switch (true = activé, false = désactivé).
 * @param {boolean} [props.disabled=false] - Si true, désactive l'interaction avec le switch.
 * @param {(checked: boolean) => void} [props.onChange] - Callback appelé lors du changement d'état.
 * @param {SwitchVariant} [props.variant='primary'] - Variante visuelle (primary, secondary, error, success, info, warning, neutral).
 * @param {UiSize} [props.size='medium'] - Taille du switch (small, medium, large).
 * @param {UiAlign} [props.align='center'] - Alignement horizontal (left, center, right).
 * @param {UiVariant} [props.labelColor='primary'] - Couleur du texte du label (primary, secondary, error, success, info, warning, neutral, link).
 * @param {string} [props.name] - Nom du switch pour les formulaires.
 * @param {string} [props.value] - Valeur associée au switch pour les formulaires.
 * @param {string} [props.ariaLabel] - Label ARIA pour l'accessibilité (si pas de label visible).
 * @param {string} [props.ariaDescribedBy] - ID de l'élément décrivant le switch pour l'accessibilité.
 * 
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
 * @see {@link SwitchProps}
 * @see {@link SWITCH_DEFAULTS}
 * @see {@link SwitchVariant}
 */
const Switch = ({
  id = "switch",
  label = SWITCH_DEFAULTS.label,
  checked = false,
  disabled = false,
  onChange,
  variant = SWITCH_DEFAULTS.variant,
  size = SWITCH_DEFAULTS.size,
  align = SWITCH_DEFAULTS.align,
  labelColor = SWITCH_DEFAULTS.labelColor,
  name,
  value,
  ariaLabel,
  ariaDescribedBy,
}: SwitchProps): JSX.Element => {
  // Gestion du changement d'état
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  // Construction des classes CSS dynamiques
  const classes = [
    styles.switch,
    styles[size],
    disabled && styles.disabled,
    `component-${variant}`,
    `component-${align}`,
    `no-hover`,
    `transparent`
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <label htmlFor={id} className={styles.label}>
        <span className={`${styles.labelText} text-${labelColor}`}>
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