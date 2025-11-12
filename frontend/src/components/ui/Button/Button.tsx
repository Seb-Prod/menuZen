/**
 * @file Composant Button
 * @module components/ui/Button
 */

import { type JSX } from "react";
import styles from "./Button.module.css";
import { DEFAULTS, type Props } from "./Button.types";
import { classNames } from "@/utils/object";

/**
 * Composant **Button** — Élément interactif fondamental du design system.
 * 
 * Permet de gérer différents contextes d’utilisation (CTA, actions secondaires, validations de formulaire, etc.)
 * grâce à ses variantes (`variant`), tailles (`size`), modes (`mode`) et options d’alignement (`align`).
 * 
 * @component
 * @version 1.2.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} Élément bouton React.
 * 
 * @example
 * // Bouton standard avec gestionnaire de clic
 * <Button onClick={() => console.log("Cliqué!")}>
 *   Valider
 * </Button>
 * 
 * @example
 * // Bouton d’avertissement en grande taille
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
 * // Bouton de soumission centré
 * <Button type="submit" align="center">
 *   Envoyer
 * </Button>
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const Button = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { mode, variant, size, align, fullWidth, className, disabled, type, children, ...rest } = props;

  const classes = classNames(
    styles.button,
    styles[mode],
    `component-${variant}`,
    `component-${size}`,
    `component-${align}`,
    fullWidth && "component-fullwidth",
    className
  );

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