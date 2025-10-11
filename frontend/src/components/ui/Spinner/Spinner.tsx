/**
 * @file Composant Spinner.
 * @module components/ui/Spinner
 */

import type { JSX } from "react";
import styles from "./Spinner.module.css";
import { SPINNER_DEFAULTS, type SpinnerProps } from "./Spinner.types";

/**
 * Composant Spinner - Indicateur de chargement animé avec texte optionnel.
 * 
 * Affiche un spinner rotatif avec 8 points disposés en cercle.
 * Supporte différentes variantes de couleur, tailles et alignements
 * pour s'adapter à tous les contextes d'interface.
 * 
 * @component
 * 
 * @param {SpinnerProps} props - Les propriétés du composant.
 * @param {React.ReactNode} [props.children] - Contenu optionnel à afficher sous le spinner. Si non fourni, affiche "Chargement en cours...".
 * @param {SpinnerVariant} [props.variant='primary'] - Variante de couleur du spinner et du texte (primary, secondary, warning, neutral).
 * @param {SpinnerSize} [props.size='medium'] - Taille prédéfinie du spinner (small, medium, large).
 * @param {SpinnerAlign} [props.align='center'] - Position horizontale du spinner dans son conteneur (left, center, right).
 * 
 * Les types détaillés sont définis dans {@link SpinnerProps}.
 * 
 * @example
 * // Spinner simple avec texte par défaut
 * <Spinner />
 * 
 * @example
 * // Spinner avec contenu personnalisé
 * <Spinner>
 *   <p>Chargement des données...</p>
 * </Spinner>
 * 
 * @example
 * // Spinner d'avertissement en grande taille
 * <Spinner variant="warning" size="large">
 *   Attention, traitement en cours
 * </Spinner>
 * 
 * @example
 * // Spinner neutre aligné à gauche
 * <Spinner variant="neutral" align="left">
 *   Veuillez patienter
 * </Spinner>
 */
const Spinner = ({
  children,
  variant = SPINNER_DEFAULTS.variant,
  size = SPINNER_DEFAULTS.size,
  align = SPINNER_DEFAULTS.align
}: SpinnerProps): JSX.Element => {
  return (
    <div className={`${styles.root} ${styles[align]}`}>
      <div className={`${styles.spinner} ${styles[variant]} ${styles[size]}`}></div>
      <div className={`${styles.text} ${styles[variant]} ${styles[size]}`}>
        {children || "Chargement en cours..."}
      </div>
    </div>
  );
};

export default Spinner;