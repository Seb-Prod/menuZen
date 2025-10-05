import type { ReactNode, JSX } from "react";
import styles from "./Spinner.module.css";

/**
 * Props du composant Spinner
 */
type SpinnerProps = {
  /** Contenu optionnel à afficher à l'intérieur du composant */
  children?: ReactNode;
};

/**
 * Composant Spinner
 * 
 * @component
 * @example
 * ```tsx
 * // Utilisation simple
 * <Spinner />
 * 
 * // Avec du contenu enfant
 * <Spinner>
 *   <p>Contenu</p>
 * </Spinner>
 * ```
 * 
 * @param {{"SpinnerProps"}} props - Les propriétés du composant
 * @param {ReactNode} [props.children] - Contenu optionnel à afficher
 * @returns {JSX.Element} Le composant Spinner rendu
 */
const Spinner = ({ children }: SpinnerProps): JSX.Element => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default Spinner;