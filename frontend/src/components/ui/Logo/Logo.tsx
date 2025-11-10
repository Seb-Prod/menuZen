/**
 * @file Composant Logo
 * @module components/ui/Logo
 */

import type { JSX } from "react";
import styles from "./Logo.module.css";
import { DEFAULTS, type Props } from "./Logo.types";
import { classNames } from "@/utils/object";
import logoImage from "@/assets/logo.png";
import { Text } from "@/components/ui";

/**
 * Composant **Logo**
 * 
 * Affiche le logo de l'application avec un texte optionnel aligné en dessous ou à droite.
 * 
 * @component
 * @version 1.0.1
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Logo avec texte optionnel aligné à droite ou en dessous.
 * 
 * @example
 * <Logo/>
 * 
 * @example
 * <Logo
 *   align="bottom"
 *   size="large"
 *   text="Mon app"
 * />
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const Logo = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { size, align, text } = props;

  const containerClasses = classNames(
    styles.logo,
    align === "right" ? styles.logo_right : styles.logo_bottom,
  );

  const imageClasses = classNames(
    styles.logo_image,
    `component-${size}`,
    `component-primary`
  );

  return (
    <div className={containerClasses} role="img" aria-label={`Logo ${text}`}>
      <div className={imageClasses}>
        <img
          src={logoImage}
          alt={text ? `Logo de ${text}` : "Logo de l'application"}
          className={styles.image}
        />
      </div>
      <Text size={size} weight="bold">{text}</Text>
    </div>
  );
};

export default Logo;