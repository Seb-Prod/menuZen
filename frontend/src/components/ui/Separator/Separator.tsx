/**
 * @file Composant Separator
 * @module components/ui/Separator
 * @description Composant de séparateur visuel horizontal ou vertical personnalisable
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
 * Le composant fusionne les propriétés fournies avec les valeurs par défaut et génère
 * les classes CSS appropriées via la fonction `classNames`.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-08
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {('horizontal'|'vertical')} [props.orientation='horizontal'] - Orientation du séparateur.
 * @param {UiSize} [props.thickness='small'] - Épaisseur du séparateur ('xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl').
 * @param {UiVariant} [props.color='neutral'] - Couleur du séparateur basée sur les variantes UI système.
 * @param {UiSize} [props.spacing='small'] - Espacement autour du séparateur ('xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl').
 * 
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
 * @see {@link SHOWCASE} Pour toutes les valeurs possibles de chaque prop
 * @see {@link UiSize} Pour les tailles disponibles dans le système UI
 * @see {@link UiVariant} Pour les variantes de couleur disponibles
 */
const Separator = (inputProps: Props): JSX.Element => {
    const { orientation, thickness, color, spacing } = { ...DEFAULTS, ...inputProps };

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