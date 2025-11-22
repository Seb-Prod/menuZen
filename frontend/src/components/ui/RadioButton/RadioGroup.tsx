/**
 * @file RadioGroup.tsx
 * @module components/ui/RadioButton/RadioGroup
 *
 * @description
 * Composant RadioGroup modernisé aligné sur la structure et les standards
 * appliqués dans RadioButton.tsx. Gestion complète des variantes, tailles,
 * états et compatibilité avec les formulaires externes.
 *
 * @version 1.1.0
 * @since 2025-11-18
 *
 * @see RadioButton pour le rendu des options individuelles.
 * @see RadioGroupProps pour les propriétés complètes.
 */

import type { JSX } from "react";
import styles from "./RadioButton.module.css";
import RadioButton from "./RadioButton";
import { Text } from "@/components/ui";
import {
  type RadioGroupProps,
  RADIO_GROUP_DEFAULTS,
  type RadioOption,
} from "./RadioButton.types";
import { classNames } from "@/utils/object";

/**
 * Composant RadioGroup aligné avec la structure moderne de RadioButton.
 * Gère un label principal, les variantes, tailles et états obligatoires.
 * Compatible avec les handlers d'événements externes.
 *
 * @component
 * @param {RadioGroupProps} inputProps - Propriétés du groupe.
 * @returns {JSX.Element} Le composant RadioGroup.
 */
const RadioGroup = (inputProps: RadioGroupProps): JSX.Element => {
  const props = { ...RADIO_GROUP_DEFAULTS, ...inputProps };
  const {
    name,
    value,
    label,
    options,
    onChange,
    required,
    disabled,
    variant,
    size,
    className,
    ...rest
  } = props;

  const groupClasses = classNames(
    styles.radioGroup,
    `component-${variant}`,
    `component-${size}`,
    className
  );

  return (
    <div
      className={groupClasses}
      role="radiogroup"
      aria-required={required}
      aria-disabled={disabled}
      {...rest}
    >
      {/* Label principal */}
      {label && (
        <div className={styles.groupLabel}>
          <Text variant={variant} size={size} weight="bold">
            {label}
          </Text>
          {required && (
            <Text variant="error" weight="bold">
              *
            </Text>
          )}
        </div>
      )}

      {/* Liste d'options */}
      <div className={styles.optionsContainer}>
        {options?.map((opt: RadioOption) => (
          <RadioButton
            key={opt.value}
            name={name}
            value={opt.value}
            label={opt.label}
            checked={value === opt.value}
            onChange={onChange}
            required={required}
            disabled={disabled || opt.disabled}
            variant={variant}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
