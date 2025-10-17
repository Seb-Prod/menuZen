/**
 * @file Composant Button.
 * @module components/ui/Button
 */

import type { JSX } from "react";
import styles from "./Button.module.css";
import { BUTTON_DEFAULTS, type ButtonProps } from "./Button.types";

/**
 * Composant Button - Bouton réutilisable et personnalisable.
 * 
 * Supporte différentes variantes (couleurs), tailles et alignements
 * dans son conteneur, ainsi que toutes les propriétés natives de HTMLButtonElement.
 * 
 * @component
 * 
 * @param {ButtonProps} props - Les propriétés du composant.
 * @param {React.ReactNode} [props.children] - Contenu à afficher dans le bouton (texte, icône, etc.).
 * @param {ButtonVariant} [props.variant='primary'] - Schéma de couleur du bouton (primary, secondary, warning, neutral).
 * @param {ButtonSize} [props.size='medium'] - Taille prédéfinie du bouton (small, medium, large).
 * @param {ButtonType} [props.type='button'] - Type de bouton HTML (button, submit, reset).
 * @param {boolean} [props.fullWidth=false] - Si vrai, le bouton occupe 100% de la largeur du conteneur.
 * @param {ButtonAlign} [props.align='left'] - Position horizontale du bouton dans son conteneur (left, center, right).
 * @param {boolean} [props.disabled=false] - Si vrai, désactive le bouton.
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires.
 * 
 * Les types détaillés sont définis dans {@link ButtonProps}.
 * 
 * @example
 * // Bouton simple avec gestionnaire de clic
 * <Button onClick={() => console.log('Cliqué!')}>
 *   Valider
 * </Button>
 * 
 * @example
 * // Bouton d'avertissement en grande taille
 * <Button variant="warning" size="large">
 *   Supprimer
 * </Button>
 * 
 * @example
 * // Bouton pleine largeur désactivé
 * <Button variant="secondary" fullWidth disabled>
 *   Chargement...
 * </Button>
 * 
 * @example
 * // Bouton de soumission de formulaire centré
 * <Button type="submit" align="center">
 *   Envoyer le formulaire
 * </Button>
 */
const Button = ({
  children,
  variant = BUTTON_DEFAULTS.variant,
  size = BUTTON_DEFAULTS.size,
  fullWidth = BUTTON_DEFAULTS.fullWidth,
  className = BUTTON_DEFAULTS.className,
  type = BUTTON_DEFAULTS.type,
  disabled = BUTTON_DEFAULTS.disabled,
  align= BUTTON_DEFAULTS.align,
  ...rest
}: ButtonProps): JSX.Element => {
  const classes = [
    styles.button,
    `component-${variant}`,
    `component-${size}`,
    `component-${align}`,
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(" ");
  
  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;