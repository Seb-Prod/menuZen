import type { ReactNode, JSX } from "react";
import styles from "./Spinner.module.css";

type SpinnerVariant = 'primary' | 'warning' | 'neutral';

/**
 * Props du composant Spinner
 */
type SpinnerProps = {
  /** Contenu optionnel à afficher à l'intérieur du composant */
  children?: ReactNode;
  /** Variante de couleur du spinner - @default 'primary' */
  variant?: SpinnerVariant;
};

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
const Spinner = ({ children, variant = 'primary' }: SpinnerProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={`${styles.spinner} ${styles[variant]}`}></div>
      <div className={`${styles.text} ${styles[variant]}`}>
        {children || "Chargement en cours..."}
      </div>
    </div>
  );
};

export default Spinner;