import type { JSX } from "react";
import styles from "./Text.module.css";
// Assurez-vous d'importer toutes les valeurs par défaut nécessaires
import { TEXT_DEFAULTS, type TextProps } from './Text.types';

/**
 * Composant Text - Affiche du texte avec une balise sémantique personnalisable et des styles
 * * Ce composant génère diverses balises HTML textuelles (span, p, strong, em, label) 
 * avec des options de style prédéfinies pour la couleur, la taille, le poids et l'alignement.
 * * @component
 * @param {TextProps} props - Les propriétés passées au composant.
 * @param {ReactNode} props.children - Le contenu (texte ou autres éléments) à afficher.
 * @param {TextAs} [props.as='span'] - La balise HTML sémantique à rendre (span, p, strong, em, label).
 * @param {TextColor} [props.color='primary'] - La couleur thématique prédéfinie du texte.
 * @param {TextAlign} [props.align='left'] - L'alignement du texte.
 * @param {TextSize} [props.size='md'] - La taille prédéfinie du texte (xs, sm, md, lg, xl).
 * @param {TextWeight} [props.weight='regular'] - Le poids (épaisseur) de la police (light, regular, medium, bold).
 * @param {string} [props.className=''] - Des classes CSS personnalisées supplémentaires.
 * * @example
 * <Text>Ceci est un simple span (défaut).</Text>
 * * @example
 * <Text as="p" size="lg" color="dark">
 * Ceci est un grand paragraphe de couleur sombre.
 * </Text>
 * * @example
 * <Text as="strong" weight="bold" color="warning">
 * ATTENTION ! Ce texte est important.
 * </Text>
 */

const Text = ({
    children,
    as = TEXT_DEFAULTS.as,
    color = TEXT_DEFAULTS.color,
    align = TEXT_DEFAULTS.align,
    size = TEXT_DEFAULTS.size,
    weight = TEXT_DEFAULTS.weight,
    className = ""
}: TextProps): JSX.Element => {
    
    // Détermine la balise HTML à rendre
    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    const weightClass = styles[`weight-${weight}` as keyof typeof styles] || '';

    // Construction sécurisée des classes CSS
    const classNames = [
        styles.Text, 
        styles[color] || '',
        styles[align] || '',
        styles[size] || '',
        weightClass,
        className
    ].filter(Boolean).join(' ').trim();

    return (
        <Tag className={classNames || undefined} data-as={as}> 
            {children}
        </Tag>
    );
}

export default Text;