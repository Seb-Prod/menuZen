/**
 * @file Comosant Spinner.
 * @module components/ui/Button
 */

import type { JSX } from "react";
import styles from "./Spinner.module.css";
import { SPINNER_DEFAULTS, type SpinnerProps } from "./Spinner.types";

/**
 * Composant Spinner - Indicateur de chargement animé avec texte optionnel
 * 
 * Affiche un spinner rotatif avec 8 points disposés en cercle.
 * Supporte différentes variantes de couleur pour s'adapter au contexte.
 * 
 * @component
 * @example
 * ```tsx
 * // Utilisation simple avec texte par défaut
 * <Spinner />
 * 
 * // Avec du contenu personnalisé
 * <Spinner>
 *   <p>Chargement des données...</p>
 * </Spinner>
 * 
 * // Avec variante de couleur
 * <Spinner variant="warning">
 *   Attention, traitement en cours
 * </Spinner>
 * 
 * // Variante neutre pour un style discret
 * <Spinner variant="neutral">
 *   Veuillez patienter
 * </Spinner>
 * ```
 * 
 * @param {SpinnerProps} props - Les propriétés du composant
 * @param {ReactNode} [props.children] - Contenu optionnel à afficher sous le spinner. 
 *                                        Si non fourni, affiche "Chargement en cours..."
 * @param {SpinnerVariant} [props.variant='primary'] - Variante de couleur du spinner et du texte.
 *                                                      Valeurs possibles : 'primary', 'warning', 'neutral'
 * @returns {JSX.Element} Le composant Spinner rendu avec animation
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