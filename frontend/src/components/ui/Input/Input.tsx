/**
 * @file Composant Input
 * @module components/ui/Input
 * @description Champ de saisie personnalisable avec validation intégrée.
 */

import { forwardRef, useImperativeHandle, useState, useEffect, type JSX } from "react";
import styles from "./Input.module.css";
import { DEFAULTS, type Props, type InputHandle } from './Input.types';
import { classNames } from "@/utils/object";
import { handleInputBlur, handleInputChange } from "./Input.handler";
import { validateField } from "./Input.utils";
import { Text } from "@/components/ui";

/**
 * Composant **Input** — Élément de formulaire avec validation intégrée.
 * 
 * @component
 * @version 2.0.0
 * @since 2025-11-15
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} Élément React représentant un champ de saisie stylisé.
 * 
 * @example
 * // Champ email avec validation
 * <Input 
 *   type="email" 
 *   required 
 *   placeholder="votre@email.com"
 *   onError={(error) => console.log(error)}
 * />
 * 
 * @example
 * // Champ avec validation personnalisée
 * <Input 
 *   type="text"
 *   validate={(value) => value.length >= 3 ? "" : "Minimum 3 caractères"}
 *   validateOn="change"
 * />
 */
const Input = forwardRef<InputHandle, Props>((inputProps, ref): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const {
    type,
    size,
    variant,
    value,
    placeholder,
    required,
    minLength,
    maxLength,
    pattern,
    validate,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validateOn,
    errorMessage,
    showError,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(value || "");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  // Synchronise la valeur interne avec la prop value (mode contrôlé)
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const getValidationError = (val: string): string => {
    // Appelez la fonction validateField de vos utils
    return validateField(val, {
      type, required, minLength, maxLength, pattern, validate, errorMessage
    });
  }

  useImperativeHandle(ref, () => ({
    validateAndReport: () => {
      const validationError = getValidationError(internalValue);
      // Met à jour l'état d'erreur de l'Input et marque comme touché
      setError(validationError);
      setTouched(true);
      return validationError;
    }
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, touched, props, setInternalValue, setError);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleInputBlur(e, props, setTouched, setError);
  };

  // Construction dynamique des classes CSS
  const classes = classNames(
    styles.input,
    `component-${variant}`,
    `component-${size}`,
    error && touched && styles.error
  );

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        value={internalValue}
        placeholder={placeholder}
        className={classes}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={!!error && touched}
        aria-describedby={error && touched ? `${rest.name}-error` : undefined}
        {...rest}
      />
      <div className={styles.errorContainer}>
      {showError && error && touched && validateOn ? (
        <Text variant="error">{error}</Text>
      ) : (
        <div className={styles.errorPlaceholder} />
      )}
    </div>
    </div>
  );
});

export default Input;