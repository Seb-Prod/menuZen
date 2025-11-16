/**
 * @file FormInput.tsx
 * @module components/layout/Form/components/FormInput
 *
 * @description
 * Champ de formulaire générique basé sur le composant UI `<Input />`.
 * Gère automatiquement le label, l'indicateur de champ requis et les props
 * de validation fournies par la configuration `FormField`.
 *
 * @version 1.0.0
 * @since 2025-11-05
 * author Seb-Prod
 */

import { Input, type InputHandle } from "@/components/ui";
import type { Type } from "@/components/ui/Input/Input.types";
import type { FormField } from "../Form.types";
import styles from "../Form.module.css";

interface FormInputProps {
  field: FormField;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: (handle: InputHandle | null) => void;
}

/**
 * Composant Input générique utilisé dans les formulaires.
 * Gère l’affichage du label, l’indication "requis", ainsi que toutes
 * les propriétés de validation issues du `FormField`.
 *
 * @function FormInput
 * @param {FormInputProps} props - Propriétés du composant.
 * @returns {JSX.Element} Input contrôlé avec label et validations intégrées.
 */
export const FormInput = ({ field, value, onChange, inputRef }: FormInputProps) => (
  <>
    {field.label && (
      <label htmlFor={field.name} className={styles.label}>
        {field.label}
        {field.required && <span className={styles.required}> *</span>}
      </label>
    )}
    <Input
      ref={inputRef}
      id={field.name}
      name={field.name}
      type={field.type as Type}
      value={value}
      placeholder={field.placeholder || field.label}
      errorMessage={field.errorMessages}
      onChange={onChange}
      required={field.required}
      minLength={field.minLength}
      maxLength={field.maxLength}
      pattern={field.pattern}
    />
  </>
);