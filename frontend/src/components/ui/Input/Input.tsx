/**
 * @file Composant Input
 * @module components/ui/Input
 * @description Composant de champ de saisie personnalisable pour différents types de données
 */

import type { JSX } from "react";
import styles from "./Input.module.css"
import type { Props } from "./Input.types";
import { DEFAULTS } from './Input.types';
import { classNames } from "@/utils/object";

/**
 * Composant **Input** - Champ de saisie
 * 
 * Affiche un champ de saisie avec support de différents types (text, email, password, number, tel).
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-09
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} Élément input stylisé.
 * 
 * @example
 * <Input type="email" placeholder="votre@email.com" />
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 */
const Input = (inputProps: Props): JSX.Element => {
    const { type, size, variant, value, placeholder } = { ...DEFAULTS, ...inputProps };

    const classes = classNames(
        styles.input,
        `component-${variant}`,
        `component-${size}`
    );

    return (
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            className={classes}
        />
    )
}

export default Input;