/**
 * @file Composant Text.
 * @module components/ui/Text
 */

import type { JSX } from "react";
import styles from "./Text.module.css";
// Assurez-vous d'importer toutes les valeurs par défaut nécessaires
import { TEXT_DEFAULTS, type TextProps } from './Text.types';

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
 * @param {TextProps} props - Les propriétés passées au composant.
 * @param {React.ReactNode} props.children - Le contenu (texte ou autres éléments) à afficher.
 * @param {TextAs} [props.as='span'] - La balise HTML sémantique à rendre (span, p, strong, em, label).
 * @param {UiVariant} [props.variant='primary'] - La variante de couleur thématique prédéfinie du texte (ex: primary, error, neutral).
 * @param {UiAlign} [props.justify='left'] - L'alignement horizontal du texte (left, center, right, justify).
 * @param {TextSize} [props.size='md'] - La taille prédéfinie du texte (xs, sm, md, lg, xl).
 * @param {TextWeight} [props.weight='regular'] - Le poids (épaisseur) de la police (light, regular, medium, bold).
 * @param {string} [props.className=''] - Des classes CSS personnalisées supplémentaires.
 * 
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
 * @see {@link TextProps}
 * @see {@link TEXT_DEFAULTS}
 */

const Text = ({
    children,
    as = TEXT_DEFAULTS.as,
    variant = TEXT_DEFAULTS.variant,
    justify = TEXT_DEFAULTS.justify,
    size = TEXT_DEFAULTS.size,
    weight = TEXT_DEFAULTS.weight,
    className = "",
    ...rest // Capture toutes les autres props HTML
}: TextProps): JSX.Element => {
    
    // Détermine la balise HTML à rendre
    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    // Détermine si width: 100% est nécessaire pour un alignement autre que 'left'
    const isFullWidthNeeded = justify !== 'left';

    // Construction des classes CSS (Alignée sur le modèle du Button)
    const classes = [
        styles.Text, 
        `text-${variant}`, // Couleur globale
        styles[`align-${justify}`], // Alignement (doit inclure display: block; et width: 100% dans le CSS pour center/right)
        isFullWidthNeeded && 'text-fullWidth', // Classe pour forcer width: 100% (si non 'left')
        styles[size], // Taille du module CSS (ex: styles.md)
        styles[`weight-${weight}`], // Poids du module CSS
        className
    ].filter(Boolean).join(' ');

    return (
        <Tag className={classes} data-as={as} {...rest}> 
            {children}
        </Tag>
    );
}

export default Text;