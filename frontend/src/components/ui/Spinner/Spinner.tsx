/**
 * @file Composant Spinner.
 * @module components/ui/Spinner
 */

import type { JSX } from "react";
import styles from "./Spinner.module.css";
import { SPINNER_DEFAULTS, type SpinnerProps } from "./Spinner.types";

/**
 * Composant **Spinner** – Indicateur de chargement animé.
 * 
 * Affiche un spinner rotatif configurable selon la variante (couleur), la taille et l’alignement.
 * Peut également afficher un texte ou un contenu personnalisé sous le spinner.
 * 
 * @component
 * @version 1.1.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @param {SpinnerProps} props - Les propriétés du composant.
 * @param {React.ReactNode} [props.children] - Contenu optionnel affiché sous le spinner (texte, icône, etc.).
 * @param {SpinnerVariant} [props.variant='primary'] - Schéma de couleur du spinner (primary, secondary, error, success, info, neutral).
 * @param {SpinnerSize} [props.size='medium'] - Taille prédéfinie du spinner (small, medium, large).
 * @param {SpinnerAlign} [props.align='center'] - Position horizontale du spinner dans son conteneur (left, center, right).
 * 
 * @returns {JSX.Element} Élément visuel représentant un indicateur de chargement.
 * 
 * @example
 * // Spinner simple avec texte par défaut
 * <Spinner />
 * 
 * @example
 * // Spinner avec message personnalisé
 * <Spinner>
 *   <p>Chargement des données...</p>
 * </Spinner>
 * 
 * @example
 * // Spinner de succès en grande taille
 * <Spinner variant="success" size="large">
 *   Opération réussie !
 * </Spinner>
 * 
 * @example
 * // Spinner neutre aligné à gauche
 * <Spinner variant="neutral" align="left">
 *   Veuillez patienter
 * </Spinner>
 * 
 * @see {@link SpinnerProps}
 * @see {@link SPINNER_DEFAULTS}
 */
const Spinner = ({
  children,
  variant = SPINNER_DEFAULTS.variant,
  size = SPINNER_DEFAULTS.size,
  align = SPINNER_DEFAULTS.align,
}: SpinnerProps): JSX.Element => {
  // Construction des classes CSS dynamiques
  const classes = [
    styles.spinner,
    styles[size],
    `text-${variant}`,
    `component-${align}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles.root} component-${align}`}>
      <div className={classes} aria-busy="true" role="status" />
      {children && (
        <div className={`${styles.text} text-${variant} text-${size}`}>
          {children}
        </div>
      )}
      {!children && (
        <div className={`${styles.text} text-${variant} text-${size}`}>
          Chargement en cours...
        </div>
      )}
    </div>
  );
};

export default Spinner;