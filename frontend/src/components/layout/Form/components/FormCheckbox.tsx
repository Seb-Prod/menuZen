/**
 * @file Checkbox.tsx
 * @module components/layout/Form/components/Checkbox
 *
 * @description
 * Composant case à cocher générique basé sur un objet `FormField`.
 * Gère l'affichage de la case, du label et de l'indication de caractère obligatoire.
 *
 * @version 1.0.0
 * @since 2025-11-05
 * author Seb-Prod
 */

import type { FormField } from "../Form.types";
import styles from "../Form.module.css";

interface CheckboxProps {
  field: FormField;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Composant Checkbox générique pour les formulaires.
 *
 * @function Checkbox
 * @param {CheckboxProps} props - Propriétés du composant.
 * @returns {JSX.Element} Case à cocher avec son label et l'indicateur obligatoire.
 */
export const Checkbox = ({ field, checked, onChange }: CheckboxProps) => (
  <label className={styles.checkboxLabel}>
    <input
      type="checkbox"
      name={field.name}
      checked={checked}
      onChange={onChange}
      required={field.required}
    />
    {field.label}
    {field.required && <span className={styles.required}> *</span>}
  </label>
);