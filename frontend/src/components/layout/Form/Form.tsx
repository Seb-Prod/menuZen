/**
 * @file Composant Form simplifié
 * @module components/ui/Form
 */

import { useState, type JSX } from "react";
import styles from "./Form.module.css";
import { DEFAULTS, type Props, type FormField } from "./Form.types";
import { classNames } from "@/utils/object";
// import { RadioGroup } from "./components/FormRadioGroup";
import { FormInput } from "./components/FormInput";
import { useFormState } from "./hooks/useFormState";
import { useFormValidation } from "./hooks/useFormValidation";
import { FieldWrapper } from "./components/FiledWrapper";
import { SubmitButton } from "./components/SubmitButton";
import { Checkbox } from "@/components/ui/Checkbox";
import RadioGroup from "@/components/ui/RadioButton/RadioGroup";

/**
 * Composant Form simplifié avec extraction des rendus
 */
const Form = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { fields, onSubmit, validate, className, submitLabel, ...rest } = props;

  const { values, errors, setErrors, handleChange } = useFormState(fields);
  const { fieldRefs, validateForm } = useFormValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateForm(fields, values, validate);

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (error) {
      console.error("Erreur de soumission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    if (field.type === 'radio') {
      return <RadioGroup
        label={field.label}
        required={field.required}
        name={field.name}
        value={values[field.name]}
        onChange={handleChange}
        options={field.options ?? []}
      />
    }

    if (field.type === 'checkbox') {
      return <Checkbox
      size="large"
        name={field.name}
        checked={values[field.name] === 'true'}
        onChange={handleChange}
        required={field.required}
        label={field.label}
      />
    }

    return (
      <FormInput
        field={field}
        value={values[field.name] || ""}
        onChange={handleChange}
        inputRef={(handle) => { fieldRefs.current[field.name] = handle; }}
      />
    );
  };

  return (
    <form className={classNames(styles.form, className)} onSubmit={handleSubmit} noValidate {...rest}>
      {fields.map((field) => (
        <FieldWrapper key={field.name} name={field.name} error={errors[field.name]}>
          {renderField(field)}
        </FieldWrapper>
      ))}
      <SubmitButton isSubmitting={isSubmitting} label={submitLabel} />
    </form>
  );
};

export default Form;