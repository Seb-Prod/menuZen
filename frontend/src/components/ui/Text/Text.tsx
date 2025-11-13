/**
 * @file Composant Text.
 * @module components/ui/Text
 */

import type { JSX } from "react";
import styles from "./Text.module.css";
import { DEFAULTS, type Props } from './Text.types';
import { classNames } from "@/utils/object";

/**
 * Composant Text - Affiche du texte avec une balise sémantique personnalisable et des styles
 * 
 * Ce composant génère diverses balises HTML textuelles (span, p, strong, em, label) avec des options de style prédéfinies pour la couleur, la taille, le poids et l'alignement.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-22
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés passées au composant.
 * @returns {JSX.Element} L'élément Text React (JSX).
 * 
 * @example
 * // Utilisation de base
 * <Text>Ceci est un simple span (défaut).</Text>
 * 
 * @example
 * // Balise p avec grande taille et couleur d'erreur
 * <Text as="p" size="lg" variant="error" justify="center">
 * Ceci est un grand paragraphe centré, mis en évidence.
 * </Text>
 * 
 * @example
 * // Texte important
 * <Text as="strong" weight="bold" variant="info">
 * Information importante.
 * </Text>
 * 
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */

const Text = (inputProps: Props): JSX.Element => {
    const { as, justify, variant, size, weight, className, children, ...rest } = { ...DEFAULTS, ...inputProps }

    // Détermine la balise HTML à rendre
    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    // Détermine si width: 100% est nécessaire pour un alignement autre que 'left'
    const isFullWidthNeeded = justify !== 'left';

    const classes = classNames(
        styles.text,
        `component-${variant}`,
        `component-${size}`,
        styles[`align-${justify}`],
        isFullWidthNeeded && 'text-fullWidth',
        styles[`weight-${weight}`],
        className
    )

    return (
        <Tag className={classes} data-as={as} {...rest}>
            {children}
        </Tag>
    );
}

export default Text;