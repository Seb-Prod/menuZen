/**
 * @file RadioButton.tsx
 * @module components/ui/RadioButton
 *
 * @description
 * Composant bouton radio personnalisé avec support des variantes de style et de taille.
 *
 * @version 1.1.0
 * @since 2025-11-18
 * @author Seb
 *
 * @see {@link RadioGroup} pour grouper plusieurs RadioButton.
 * @see {@link RadioButtonProps} pour la liste complète des propriétés.
 */

import type { JSX } from "react";
import styles from "./RadioButton.module.css";
import { RADIO_DEFAULTS, type RadioButtonProps } from "./RadioButton.types";
import { Text } from "@/components/ui";
import { classNames } from "@/utils/object";

/**
 * Composant RadioButton.
 *
 * Bouton radio personnalisé avec gestion des états (checked, disabled, focus)
 * et support complet des variantes de style et de taille.
 *
 * @component
 * @param {RadioButtonProps} inputProps - Propriétés du composant.
 * @returns {JSX.Element} L'élément radio.
 *
 * @example
 * <RadioButton
 *   label="Option 1"
 *   name="options"
 *   value="option1"
 *   checked={selected === "option1"}
 *   onChange={(e) => setSelected(e.target.value)}
 *   variant="primary"
 *   size="medium"
 * />
 */
const RadioButton = (inputProps: RadioButtonProps): JSX.Element => {
  const props = { ...RADIO_DEFAULTS, ...inputProps };
  const {
    label,
    name,
    checked,
    value,
    onChange,
    required,
    disabled,
    variant,
    size,
    className,
    ...rest
  } = props;

  const containerClasses = classNames(
    styles.label,
    `component-${variant}`,
    `component-${size}`,
    className
  );

  const radioClasses = classNames(
    styles.radio,
    styles[`size-${size}`]
  );

  return (
    <label className={containerClasses}>
      <input
        type="radio"
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={styles.input}
        {...rest}
      />
      <span className={radioClasses} />
      <Text
        variant={variant}
        size={size}
        className={styles.labelText}
      >
        {label}
      </Text>
    </label>
  );
};

export default RadioButton;