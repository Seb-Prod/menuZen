/**
 * @file Composant Logo
 * @module components/ui/Logo
 */

import type { JSX } from "react";
import styles from "./Logo.module.css";
import { DEFAULTS, type Props } from './Logo.types';
import { classNames } from "@/utils/object";
import logoImage from "@/assets/logo.png";
import { Text } from "@/components/ui";

/**
 * Composant Logo - Affiche le logo de l'application avec un texte
 * 
 * Ce composant affiche une image logo circulaire avec un texte en dessous ou à droite.
 * Il supporte différentes tailles et alignements pour s'adapter à divers contextes d'utilisation.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-04
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {UiSize} [props.size='medium'] - Taille du logo (`small`, `medium`, `large`).
 * @param {Align} [props.align='bottom'] - Position du texte par rapport au logo (`bottom`, `right`).
 * @param {string} [props.text='Forge'] - Texte à afficher à côté du logo.
 * 
 * @returns {JSX.Element} Élément React représentant le logo avec son texte.
 * 
 * @example
 * // Logo par défaut
 * <Logo />
 * 
 * @example
 * // Logo avec texte personnalisé et taille large
 * <Logo text="Mon App" size="large" />
 * 
 * @example
 * // Logo avec texte à droite
 * <Logo align="right" />
 * 
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */

const Logo = (inputProps: Props): JSX.Element => {
    const { size, align, text } = { ...DEFAULTS, ...inputProps };

    // Construction des classes CSS pour le conteneur principal
    const containerClasses = classNames(
        styles.logo,
        align === "right" ? styles.logo_right : styles.logo_bottom
    );

    // Construction des classes CSS pour l'image
    const imageClasses = classNames(
        styles.logo_image,
        `component-${size}`,
        `component-primary`,
    );

    return (
        <div className={containerClasses}>
            <div className={imageClasses}>
                <img src={logoImage} alt="Logo de l'application" className={styles.image} />
            </div>
            <Text size={size} weight="bold">{text}</Text>
        </div>
    );
};

export default Logo;