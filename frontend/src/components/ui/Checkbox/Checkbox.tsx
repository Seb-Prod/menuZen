/**
 * @file Checkbox.tsx
 * @module components/ui/Checkbox
 *
 * @description
 * Composant case à cocher
 *
 * @version 1.0.0
 * @since 2025-11-16
 * @author Seb-Prod
 */

import type { JSX } from "react"
import styles from "./Checkbox.module.css"
import { DEFAULTS, type Props } from "./Checkbox.types";
import { classNames } from "@/utils/object";

const Checkbox = (inputProps: Props): JSX.Element => {
    const props = { ...DEFAULTS, ...inputProps }
    const { label, name, checked, onChange, required, variant, size, disabled, className, ...rest } = props

    const labelClasses = classNames(
        styles.label,
        `component-${variant}`,
        `component-${size}`,
        className
    );

    const checkboxClasses = classNames(
        styles.checkbox
    );

    return (
        <label className={labelClasses}>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={styles.input}
                {...rest}
            />
            <span className={checkboxClasses} />
            {label && (
                <span>
                    {label}
                    {required && <span className={styles.required}> *</span>}
                </span>
            )}
        </label>
    )
}

export default Checkbox;