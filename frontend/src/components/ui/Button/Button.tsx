import type { JSX } from "react";
import styles from "./Button.module.css";
import { BUTTON_DEFAULTS, type ButtonProps } from "./Button.types";

/**
 * Composant Button personnalisable avec différentes variantes et tailles.
 * 
 * @example
 * ```tsx
 * <Button onClick={() => console.log('Cliqué!')}>
 *   Valider
 * </Button>
 * 
 * <Button variant="warning" size="large">
 *   Supprimer
 * </Button>
 * 
 * <Button variant="secondary" fullWidth disabled>
 *   Chargement...
 * </Button>
 * ```
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
    styles[variant],
    styles[size],
    styles[align],
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