import { useState, useCallback } from "react";
import type { FormField, FormErrors } from "../Form.types";
import { getInputValue } from "../utils/getInputValue";

interface UseFormStateReturn {
  values: Record<string, string>;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFormState = (fields: FormField[]): UseFormStateReturn => {
  const initialState = fields.reduce<Record<string, string>>(
    (acc, f) => ({ ...acc, [f.name]: f.defaultValue || "" }),
    {}
  );

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const newValue = getInputValue(e.target);

    setValues(prev => ({ ...prev, [name]: newValue }));
    
    // Efface l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  return { values, errors, setErrors, handleChange };
};