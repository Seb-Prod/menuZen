/**
 * @file Composant Form
 * @module components/ui/Form
 */

import { useState, useRef, type JSX, useCallback } from "react";
import styles from "./Form.module.css";
import { DEFAULTS, type Props, type FormField, type FormErrors } from "./Form.types";
import { classNames } from "@/utils/object";
import { Input, type InputHandle } from "@/components/ui";
import type { Type } from "@/components/ui/Input/Input.types";

/**
 * Composant **Form** — Formulaire générique réutilisable.
 */
const Form = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { fields, onSubmit, validate, className, submitLabel, ...rest } = props;

  // 💡 Changement : L'état 'values' peut contenir string ou boolean
  const initialState = fields.reduce<Record<string, string | boolean>>(
    (acc, f) => {
      if (f.type === 'checkbox') {
        return { ...acc, [f.name]: f.defaultChecked || false };
      }
      return { ...acc, [f.name]: f.defaultValue || "" };
    },
    {} as Record<string, string | boolean> // Assertion de type
  );

  const [values, setValues] = useState<Record<string, string | boolean>>(initialState);
  const [globalErrors, setGlobalErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Les références ne stockent que les Input qui ont validateAndReport (les types texte)
  const fieldRefs = useRef<Record<string, InputHandle | null>>({});

  /**
   * Gère le changement d'un champ (y compris checkbox/radio)
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    let newValue: string | boolean;

    if (type === 'checkbox') {
      newValue = checked; // La valeur est le booléen 'checked'
    } else {
      // Pour les autres types (texte, radio, number, etc.)
      newValue = value;
    }

    setValues(prev => ({ ...prev, [name]: newValue }));

    // Efface l'erreur du champ global (inter-champ) quand l'utilisateur modifie la valeur
    if (globalErrors[name]) {
      setGlobalErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [globalErrors]);

  /**
   * Valide le formulaire complet de manière SYNCHRONE
   */
  const validateForm = (): boolean => {
    const finalErrors: FormErrors = {};
    let isValid = true;

    // 1. Validation des champs Input (types texte, via Impératif)
    fields.forEach(field => {
      // Seuls les champs gérés par Input ont une référence
      if (field.type !== 'checkbox' && field.type !== 'radio') {
        const inputHandle = fieldRefs.current[field.name];
        if (inputHandle && typeof inputHandle.validateAndReport === 'function') {
          const fieldError = inputHandle.validateAndReport();
          if (fieldError) {
            isValid = false;
          }
        }
      }
    });

    // 2. Validation globale personnalisée (Inter-champs + validation des Checkbox/Radio)
    if (validate) {
      // Le `validate` personnalisée peut vérifier si la checkbox est `true` pour le requis
      const customErrors = validate(values);
      if (Object.keys(customErrors).length > 0) {
        Object.assign(finalErrors, customErrors);
        isValid = false;
      }
    }

    setGlobalErrors(finalErrors);

    // La validité finale dépend de l'absence d'erreurs d'Input (déclenchées ci-dessus) 
    // et des erreurs globales/inter-champs.
    return isValid && Object.keys(finalErrors).length === 0;
  };

  /**
   * Soumission du formulaire
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // 💡 Déclenche la validation
    const isValid = validateForm();

    if (!isValid) return;

    // Si valide, on procède à la soumission
    setIsSubmitting(true);
    try {
      // Le type de `values` est correctement géré par onSubmit
      await onSubmit(values as Record<string, string>);
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const classes = classNames(styles.form, className);

  return (
    <form className={classes} onSubmit={handleSubmit} noValidate {...rest}>
      {/* eslint-disable @typescript-eslint/no-unused-vars  */}
      {fields.map((field: FormField) => {
        const {
          name,
          label,
          type,
          placeholder,
          errorMessages,
          options,
          defaultValue: _defaultValue,
          defaultChecked: _defaultChecked,
          ...inputProps // Contient toutes les autres props (required, minLength, etc.)
        } = field;

        const isStandardInput = !type || (type !== 'checkbox' && type !== 'radio');
        const valueAsString = (values[name] as string | undefined) || "";

        return (
          <div key={name} className={styles.field}>
            {/* Le label est affiché en bloc pour les types standard et radio, mais pas pour la checkbox */}
            {label && isStandardInput && (
              <label htmlFor={name} className={styles.label}>
                {label}
                {field.required && <span className={styles.required}> *</span>}
              </label>
            )}

            {/* --- Rendu Conditionnel des Champs --- */}

            {/* 💡 Rendu des Radio Buttons */}
            {type === 'radio' && options ? (
              <div className={styles.radioGroup} role="radiogroup" aria-labelledby={`${name}-label`}>
                {label && <span id={`${name}-label`} className={styles.radioGroupLabel}>{label}</span>}
                {options.map((option) => (
                  <label key={option.value} className={styles.radioLabel}>
                    <input
                      type="radio"
                      id={`${name}-${option.value}`}
                      name={name}
                      value={option.value}
                      checked={valueAsString === option.value}
                      onChange={handleChange}
                      {...inputProps}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            ) :

              /* 💡 Rendu de la Checkbox */
              type === 'checkbox' ? (
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={values[name] as boolean}
                    onChange={handleChange}
                    {...inputProps}
                  />
                  {label}
                  {field.required && <span className={styles.required}> *</span>}
                </label>
              ) :

                /* 💡 Rendu de l'Input standard (texte, email, etc.) */
                (
                  <Input
                    // Référence seulement pour les Inputs standard
                    ref={(handle) => {
                      fieldRefs.current[name] = handle;
                    }}
                    id={name}
                    name={name}
                    type={type as Type} // Cast pour satisfaire l'interface Input
                    value={valueAsString}
                    placeholder={placeholder || label}
                    errorMessage={errorMessages}
                    onChange={handleChange}
                    {...inputProps}
                  />
                )}

            {/* Affichage des erreurs de validation globale */}
            {globalErrors[name] && (
              <span className={styles.customError} role="alert">
                {globalErrors[name]}
              </span>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : (submitLabel || "Envoyer")}
      </button>
    </form>
  );
};

export default Form;