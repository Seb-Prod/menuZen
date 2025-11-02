/**
 * @file Composant Spinner.
 * @module components/ui/Spinner
 */

import type { JSX } from "react";
import styles from "./Spinner.module.css";
import { DEFAULTS, type Props } from "./Spinner.types";
import { classNames } from "@/utils/object";

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
 * @param {Props} props - Les propriétés du composant.
 * @param {React.ReactNode} [props.children] - Contenu optionnel affiché sous le spinner (texte, icône, etc.).
 * @param {UiVariant} [props.variant='primary'] - Schéma de couleur du spinner (primary, secondary, error, success, info, neutral).
 * @param {UiSize} [props.size='medium'] - Taille prédéfinie du spinner (small, medium, large).
 * @param {UiAlign} [props.align='center'] - Position horizontale du spinner dans son conteneur (left, center, right).
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
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */
const Spinner = (inputProps: Props): JSX.Element => {
  const { size, variant, align, children } = { ...DEFAULTS, ...inputProps }
  // Construction des classes CSS dynamiques
  const classes = classNames(
    styles.root,
    `component-${align}`,
    `component-${variant}`,
    `component-${size}`
  )

  const classesSpinner = classNames(
    styles.spinner,
    `size-${size}`,
  )

  return (
    <div className={classes}>
      <div className={classesSpinner} aria-busy="true" role="status" />
      {children && (
        <div className={styles.text}>
          {children}
        </div>
      )}
      {!children && (
        <div className={styles.text}>
          Chargement en cours...
        </div>
      )}
    </div>
  );
};

export default Spinner;