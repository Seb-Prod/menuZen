/**
 * @file Composant Form
 * @module components/ui/Form
 */

import { useState, type JSX } from "react";
import styles from "./Form.module.css";
import { DEFAULTS, type Props, type FormErrors, type FormField } from "./Form.types";
import { classNames } from "@/utils/object";

/**
 * Composant **Form** — Formulaire générique réutilisable.
 *
 * Génère automatiquement un formulaire basé sur un tableau de champs configurables.
 *
 * @component
 * @version 1.0.0
 * @since 2025-11-14
 * 
 * @author Seb-Prod
 *
 * @param {Props} inputProps - Les propriétés du composant.
 *
 * @returns {JSX.Element} Élément formulaire React.
 *
 * @example
 * <Form
 *   fields={[
 *     { name: "email", label: "Email", type: "email", required: true },
 *     { name: "message", label: "Message", type: "textarea" }
 *   ]}
 *   onSubmit={(values) => console.log(values)}
 * />
 *
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const Form = (inputProps: Props): JSX.Element => {
  // Fusionne les props avec les valeurs par défaut
  const props = { ...DEFAULTS, ...inputProps };
  const { fields, onSubmit, className, ...rest } = props;

  // Génère l'état initial en fonction des champs
  const initialState = fields.reduce<Record<string, string>>(
    (acc, f) => ({ ...acc, [f.name]: "" }),
    {}
  );

  const [values, setValues] = useState<Record<string, string>>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  // Gestion du changement d'un champ
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Validation des champs
  const validate = () => {
    const newErrors: FormErrors = {};

    fields.forEach((field: FormField) => {
      const val = values[field.name];

      if (field.required && !val.trim()) {
        newErrors[field.name] = `${field.label} est requis`;
      }

      if (field.type === "email" && val) {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(val)) {
          newErrors[field.name] = "Email invalide";
        }
      }
    });

    return newErrors;
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errorList = validate();
    setErrors(errorList);

    if (Object.keys(errorList).length === 0) {
      onSubmit(values);
    }
  };

  const classes = classNames(styles.form, className);

  return (
    <form className={classes} onSubmit={handleSubmit} {...rest}>
      {fields.map((field: FormField) => (
        <div key={field.name} className={styles.field}>
          <label className={styles.label}>{field.label}</label>

          {field.type === "textarea" ? (
            <textarea
              className={styles.textarea}
              name={field.name}
              value={values[field.name]}
              onChange={handleChange}
            />
          ) : (
            <input
              className={styles.input}
              type={field.type}
              name={field.name}
              value={values[field.name]}
              onChange={handleChange}
            />
          )}

          {errors[field.name] && (
            <small className={styles.error}>{errors[field.name]}</small>
          )}
        </div>
      ))}
    </form>
  );
};

export default Form;