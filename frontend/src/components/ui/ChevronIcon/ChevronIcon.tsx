/**
 * @file Composant ChevronIcon
 * @module components/ui/ChevronIcon
 */

import type { JSX } from "react";
import styles from "./ChevronIcon.module.css";
import { CHEVRONICON_DEFAULTS, type ChevronIconProps } from './ChevronIcon.types';
import { CHEVRON_ICONS } from './ChevronIcon.constants';

/**
 * Composant ChevronIcon - Icône animée pour les accordéons et menus déroulants
 * 
 * Ce composant affiche différents types d'icônes (chevron, flèche, plus/moins, triangle, points)
 * avec une animation de rotation ou de changement d'état selon le type choisi.
 * 
 * @component
 * @version 1.3.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {ChevronIconProps} props - Les propriétés du composant
 * @param {ChevronIconType} props.type - Type d'icône à afficher ('chevron', 'arrow', 'plus-minus', 'triangle', 'dots')
 * @param {ChevronIconColor} props.colorStyle - Couleur de l'icône (primary, secondary, succes, info, error, neutral)
 * @param {ChevronIconSize} props.size - Taille de l'icône ('small', 'medium', 'large')
 * @param {boolean} props.isOpen - État ouvert/fermé de l'icône
 * @param {string} [props.ariaLabelOpen] - Label pour l'accessibilité quand l'icône est ouverte
 * @param {string} [props.ariaLabelClose] - Label pour l'accessibilité quand l'icône est fermée
 * 
 * @returns {JSX.Element} L'élément bouton React (JSX).
 * 
 * @example
 * // Utilisation simple
 * <ChevronIcon />
 * 
 * // Avec aria-labels pour l'accessibilité
 * <ChevronIcon 
 *   type="chevron" 
 *   isOpen={isOpen} 
 *   ariaLabelOpen="Fermer le menu"
 *   ariaLabelClose="Ouvrir le menu"
 * />
 * 
 * @see {@link ChevronIconProps}
 * @see {@link CHEVRONICON_DEFAULTS}
 */
const ChevronIcon = ({
    type = CHEVRONICON_DEFAULTS.type,
    size = CHEVRONICON_DEFAULTS.size,
    isOpen = CHEVRONICON_DEFAULTS.isOpen,
    variant = CHEVRONICON_DEFAULTS.variant,
    ariaLabelOpen,
    ariaLabelClose
}: ChevronIconProps): JSX.Element => {

    /**
     * Retourne l'icône SVG appropriée selon le type et l'état
     */
    const renderIcon = (): JSX.Element => {
        switch (type) {
            case "chevron":
                return CHEVRON_ICONS.chevron;

            case "arrow":
                return CHEVRON_ICONS.arrow;

            case "plus-minus":
                return isOpen ? CHEVRON_ICONS.minus : CHEVRON_ICONS.plus;

            case "triangle":
                return CHEVRON_ICONS.triangle;

            case "dots":
                return isOpen ? CHEVRON_ICONS.dotsHorizontal : CHEVRON_ICONS.dotsVertical;

            default:
                // Retourne le chevron par défaut si le type est invalide
                return CHEVRON_ICONS.chevron;
        }
    };

    // Les types plus-minus et dots changent de forme au lieu de pivoter
    const shouldRotate = type !== "plus-minus" && type !== "dots";

    // Détermine le label aria en fonction de l'état
    const ariaLabel = isOpen ? ariaLabelOpen : ariaLabelClose;
    const hasAriaLabel = Boolean(ariaLabel);

    // Construction des classes CSS
    const classes = [
        styles.chevron,
        styles[size],
        `text-${variant}`,
        shouldRotate ? (isOpen ? styles.open : styles.closed) : ''
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <span
            className={classes}
            aria-hidden={!hasAriaLabel}
            aria-label={ariaLabel}
            role={hasAriaLabel ? "img" : undefined}
        >
            {renderIcon()}
        </span>
    );
};

export default ChevronIcon;