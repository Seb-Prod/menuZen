/**
 * @file Composant Button.
 * @module components/ui/Button
 */

import type { JSX } from "react";
import styles from "./Button.module.css";
import { DEFAULTS, type Props } from './Button.types';
import { classNames } from "@/utils/object";

/**
 * Composant **Button** — Élément interactif polyvalent permettant de déclencher une action, soumettre un formulaire ou naviguer dans l’application.
 * 
 * Ce composant prend en charge plusieurs variantes de style (`variant`), tailles (`size`) et options d’alignement (`align`), afin de s’adapter à divers contextes d’utilisation (CTA, actions secondaires, validations de formulaire, etc.).
 * 
 * Le paramètre `mode` permet de définir l’apparence visuelle du bouton :
 * - **"solid"** : style plein, idéal pour les actions principales.
 * - **"outline"** : bouton avec contour, pour les actions secondaires.
 * - **"ghost"** : style minimal sans fond ni bordure, parfait pour les actions discrètes ou contextuelles.
 * 
 * Il hérite également de toutes les propriétés natives d’un `HTMLButtonElement`, garantissant une compatibilité totale avec les comportements standards du navigateur.
 * 
 * En complément, le composant gère :
 * - L’état **désactivé** (`disabled`) pour bloquer les interactions utilisateur.
 * - Le mode **pleine largeur** (`fullWidth`) pour s’adapter à la largeur du conteneur parent.
 * - La personnalisation via la prop `className` pour ajouter des styles externes.
 * 
 * Il constitue un bloc fondamental du système de design, assurant cohérence et accessibilité à travers toute l’interface.
 * 
 * @component
 * @version 1.2.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {ButtonProps} props - Les propriétés du composant.
 * @param {React.ReactNode} [props.children] - Contenu à afficher dans le bouton (texte, icône, etc.).
 * @param {UiVariant} [props.variant='primary'] - Schéma de couleur du bouton (primary, secondary, warning, neutral).
 * @param {UiSize} [props.size='medium'] - Taille prédéfinie du bouton (small, medium, large).
 * @param {Mode} [props.mode='solid'] - Apparence visuelle du bouton :  
 *   - **"solid"** : style plein pour les actions principales.  
 *   - **"outline"** : contour pour les actions secondaires.  
 *   - **"ghost"** : style minimal pour les actions discrètes.
 * @param {ButtonType} [props.type='button'] - Type de bouton HTML (button, submit, reset).
 * @param {boolean} [props.fullWidth=false] - Si vrai, le bouton occupe 100% de la largeur du conteneur.
 * @param {UiAlign} [props.align='left'] - Position horizontale du bouton dans son conteneur (left, center, right).
 * @param {boolean} [props.disabled=false] - Si vrai, désactive le bouton.
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires.
 * 
 * @returns {JSX.Element} L'élément bouton React (JSX).
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
 * 
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */
const Button = (inputProps: Props): JSX.Element => {
  const { mode, variant, size, align, fullWidth, className, disabled, type, children, ...rest } = { ...DEFAULTS, ...inputProps }
  // Construction des classes CSS
  const classes = classNames(
    styles.button,
    styles[mode],
    `component-${variant}`,
    `component-${size}`,
    `component-${align}`,
    fullWidth && 'component-fullwidth',
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