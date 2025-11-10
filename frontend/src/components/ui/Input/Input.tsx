/**
 * @file Composant Input
 * @module components/ui/Input
 * @description Champ de saisie personnalisable prenant en charge plusieurs types de données (texte, e-mail, mot de passe, nombre, téléphone, etc.).
 */

import { type JSX } from "react";
import styles from "./Input.module.css";
import { DEFAULTS, type Props } from "./Input.types";
import { classNames } from "@/utils/object";

/**
 * Composant **Input** — Élément de formulaire réutilisable pour la saisie de données.
 * 
 * Ce composant prend en charge différents types d’entrée (`text`, `email`, `password`, `number`, `tel`)  
 * et offre plusieurs variantes de style (`variant`) ainsi que des tailles prédéfinies (`size`).
 * 
 * Il peut être intégré dans des formulaires, des barres de recherche ou des interfaces interactives,  
 * tout en maintenant la cohérence visuelle du système de design.
 * 
 * En plus des styles, il prend en charge :
 * - L’affichage d’un **placeholder** pour guider la saisie.  
 * - La gestion de la **valeur contrôlée** via la prop `value`.  
 * - L’extension des props natives d’un élément `<input>` pour une compatibilité maximale.
 * 
 * @component
 * @version 1.1.0
 * @since 2025-11-09
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} Élément React représentant un champ de saisie stylisé.
 * 
 * @example
 * // Champ texte simple
 * <Input placeholder="Votre nom" />
 * 
 * @example
 * // Champ e-mail avec style secondaire
 * <Input type="email" variant="secondary" placeholder="votre@email.com" />
 * 
 * @example
 * // Champ mot de passe en grande taille
 * <Input type="password" size="large" placeholder="Mot de passe" />
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const Input = (inputProps: Props): JSX.Element => {
  const { type, size, variant, value, placeholder } = {
    ...DEFAULTS,
    ...inputProps,
  };

  // Construction dynamique des classes CSS
  const classes = classNames(
    styles.input,
    `component-${variant}`,
    `component-${size}`,
  );

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={classes}
    />
  );
};

export default Input;