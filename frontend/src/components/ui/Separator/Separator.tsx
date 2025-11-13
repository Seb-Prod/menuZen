/**
 * @file Composant Separator
 * @module components/ui/Separator
 */

import type { JSX } from "react";
import styles from "./Separator.module.css"
import type { Props } from "./Separator.types";
import { DEFAULTS } from './Separator.types';
import { classNames } from "@/utils/object";

/**
 * Composant **Separator** - Séparateur horizontal / vertical
 * 
 * Affiche un séparateur horizontal ou vertical avec des options de personnalisation
 * pour l'épaisseur, la couleur et l'espacement. Utilise des classes CSS modulaires
 * pour le style et supporte les variantes UI définies globalement.
 * 
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-08
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Élément div stylisé représentant le séparateur.
 * 
 * @example
 * // Séparateur horizontal par défaut
 * <Separator />
 * 
 * @example
 * // Séparateur vertical épais avec couleur primaire
 * <Separator 
 *   orientation="vertical" 
 *   thickness="large" 
 *   color="primary" 
 *   spacing="medium" 
 * />
 * 
 * @example
 * // Séparateur horizontal fin sans espacement
 * <Separator 
 *   thickness="small" 
 *   spacing="xs"
 *   color="neutral"
 * />
 * 
 * @example
 * // Séparateur vertical coloré avec grand espacement
 * <Separator 
 *   orientation="vertical"
 *   thickness="medium"
 *   color="success"
 *   spacing="xlarge"
 * />
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut du composant
 */
const Separator = (inputProps: Props): JSX.Element => {
    const props = { ...DEFAULTS, ...inputProps };
    const { orientation, thickness, color, spacing } = props;

    const classes = classNames(
        styles.separator,
        styles[orientation],
        styles[`thickness-${thickness}`],
        styles[`space-${spacing}`],
        `component-${color}`
    );

    return (
        <div className={classes} />
    )
}

export default Separator;