/**
 * @file Composant Button
 * @module components/ui/Button
 * @description Élément interactif polyvalent pour déclencher une action, soumettre un formulaire ou naviguer dans l’application.
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
 * Les modes disponibles :
 * - **"solid"** : style plein, idéal pour les actions principales.
 * - **"outline"** : bouton avec contour, pour les actions secondaires.
 * - **"ghost"** : style minimal sans fond ni bordure, pour les actions discrètes.
 * 
 * Le composant prend également en charge :
 * - L’état **désactivé** (`disabled`) pour bloquer les interactions utilisateur.
 * - Le mode **pleine largeur** (`fullWidth`) pour occuper tout l’espace horizontal disponible.
 * - La personnalisation via `className` pour ajouter des styles externes.
 * 
 * Il hérite des propriétés natives d’un `HTMLButtonElement`, garantissant une compatibilité complète.
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
  const {
    mode,
    variant,
    size,
    align,
    fullWidth,
    className,
    disabled,
    type,
    children,
    ...rest
  } = { ...DEFAULTS, ...inputProps };

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