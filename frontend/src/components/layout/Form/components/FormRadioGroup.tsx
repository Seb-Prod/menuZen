/**
 * @file RadioGroup.tsx
 * @module components/layout/Form/components/RadioGroup
 *
 * @description
 * Composant gérant un groupe de boutons radio basé sur un objet `FormField`.
 * Affiche automatiquement le label du groupe, les différentes options disponibles
 * et indique si le champ est obligatoire.
 *
 * @version 1.0.0
 * @since 2025-11-05
 * author Seb-Prod
 */

import type { FormField } from "../Form.types";
import styles from "../Form.module.css";

interface RadioGroupProps {
  field: FormField;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Composant gérant un groupe de boutons radio.
 *
 * @function RadioGroup
 * @param {RadioGroupProps} props - Propriétés du composant.
 * @returns {JSX.Element} Un ensemble de boutons radio correctement structurés.
 */
export const RadioGroup = ({ field, value, onChange }: RadioGroupProps) => (
  <div className={styles.radioGroup} role="radiogroup">
    {field.label && (
      <span className={styles.radioGroupLabel}>
        {field.label}
        {field.required && <span className={styles.required}> *</span>}
      </span>
    )}
    {field.options?.map((opt) => (
      <label key={opt.value} className={styles.radioLabel}>
        <input
          type="radio"
          name={field.name}
          value={opt.value}
          checked={value === opt.value}
          onChange={onChange}
          required={field.required}
        />
        {opt.label}
      </label>
    ))}
  </div>
);