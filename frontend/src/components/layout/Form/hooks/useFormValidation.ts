import { useRef } from "react";
import type { FormField, FormErrors } from "../Form.types";
import type { InputHandle } from "@/components/ui";

interface UseFormValidationReturn {
  fieldRefs: React.MutableRefObject<Record<string, InputHandle | null>>;
  validateForm: (
    fields: FormField[],
    values: Record<string, string>,
    customValidate?: (values: Record<string, string>) => FormErrors
  ) => FormErrors | null;
}

export const useFormValidation = (): UseFormValidationReturn => {
  const fieldRefs = useRef<Record<string, InputHandle | null>>({});

  const validateForm = (
    fields: FormField[],
    values: Record<string, string>,
    customValidate?: (values: Record<string, string>) => FormErrors
  ): FormErrors | null => {
    let isValid = true;
    const newErrors: FormErrors = {};

    // Validation des champs Input standards
    fields.forEach(field => {
      const inputHandle = fieldRefs.current[field.name];
      if (inputHandle?.validateAndReport?.()) {
        isValid = false;
      }
    });

    // Validation personnalisée
    if (customValidate) {
      const customErrors = customValidate(values);
      Object.assign(newErrors, customErrors);
      if (Object.keys(customErrors).length > 0) {
        isValid = false;
      }
    }

    return isValid && Object.keys(newErrors).length === 0 ? null : newErrors;
  };

  return { fieldRefs, validateForm };
};