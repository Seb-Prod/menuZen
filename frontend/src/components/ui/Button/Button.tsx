import type { ReactNode, JSX, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = 'primary' | 'secondary' | 'warning' | 'neutral';
type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Props du composant Button
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Contenu à afficher à l'intérieur du bouton */
  children?: ReactNode;
  /** Variante visuelle du bouton. @default 'primary' */
  variant?: ButtonVariant;
  /** Taille du bouton. @default 'medium' */
  size?: ButtonSize;
  /** Si true, le bouton prend toute la largeur disponible. @default false */
  fullWidth?: boolean;
};

/**
 * Composant Button personnalisable avec différentes variantes et tailles.
 * 
 * Ce composant étend les propriétés natives d'un élément `<button>` HTML
 * et ajoute des options de style via les props `variant`, `size` et `fullWidth`.
 * 
 * @component
 * @example
 * ```tsx
 * // Bouton primaire basique
 * <Button onClick={() => console.log('Cliqué!')}>
 *   Valider
 * </Button>
 * 
 * // Bouton d'avertissement de grande taille
 * <Button variant="warning" size="large">
 *   Supprimer
 * </Button>
 * 
 * // Bouton secondaire pleine largeur désactivé
 * <Button variant="secondary" fullWidth disabled>
 *   Chargement...
 * </Button>
 * 
 * // Bouton de type submit dans un formulaire
 * <Button type="submit" variant="primary">
 *   Envoyer
 * </Button>
 * ```
 * 
 * @param {ButtonProps} props - Les propriétés du composant
 * @param {ReactNode} [props.children] - Contenu du bouton (texte, icônes, etc.)
 * @param {ButtonVariant} [props.variant='primary'] - Style du bouton ('primary' | 'secondary' | 'warning' | 'neutral')
 * @param {ButtonSize} [props.size='medium'] - Taille du bouton ('small' | 'medium' | 'large')
 * @param {boolean} [props.fullWidth=false] - Le bouton prend toute la largeur du conteneur parent
 * @param {string} [props.className=''] - Classes CSS supplémentaires
 * @param {string} [props.type='button'] - Type HTML du bouton ('button' | 'submit' | 'reset')
 * @param {boolean} [props.disabled=false] - Désactive le bouton
 * 
 * @returns {JSX.Element} Le composant Button rendu
 */
const Button = ({
  children,
  variant = 'primary',
  size = "medium",
  fullWidth = false,
  className = "",
  type = 'button',
  disabled = false,
  ...rest
}: ButtonProps): JSX.Element => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
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