/**
 * @file Composant ChevronIcon
 * @module components/ui/ChevronIcon
 */

import type { JSX } from "react";
import styles from "./ChevronIcon.module.css";
import { DEFAULTS, type Props } from './ChevronIcon.types';
import { CHEVRON_ICONS } from './ChevronIcon.constants';
import { classNames } from "@/utils/object";

/**
 * Composant ChevronIcon - Icône animée pour les accordéons, menus déroulants et autres interactions d’ouverture/fermeture.
 * 
 * Ce composant affiche différents types d’icônes (`chevron`, `arrow`, `plus-minus`, `triangle`, `dots`)  
 * et peut animer leur rotation ou leur changement d’apparence selon l’état ouvert/fermé (`isOpen`).  
 * Il prend également en charge l’accessibilité via les propriétés `ariaLabelOpen` et `ariaLabelClose`.
 * 
 * @component
 * @version 1.3.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {Type} [props.type='chevron'] - Type d’icône à afficher (`chevron`, `arrow`, `plus-minus`, `triangle`, `dots`).
 * @param {UiVariant} [props.variant='primary'] - Variante de couleur (`primary`, `secondary`, `success`, `info`, `error`, `neutral`, `none`).
 * @param {UiSize} [props.size='medium'] - Taille prédéfinie de l’icône (`small`, `medium`, `large`).
 * @param {boolean} [props.isOpen=false] - État d’ouverture ou de fermeture de l’icône.
 * @param {string} [props.ariaLabelOpen='Fermer le menu'] - Libellé d’accessibilité lorsque l’icône est en état ouvert.
 * @param {string} [props.ariaLabelClose='Ouvrir le menu'] - Libellé d’accessibilité lorsque l’icône est en état fermé.
 * 
 * @returns {JSX.Element} Élément React représentant une icône SVG animée.
 * 
 * @example
 * // Icône simple
 * <ChevronIcon />
 * 
 * @example
 * // Icône de menu avec accessibilité
 * <ChevronIcon 
 *   type="chevron" 
 *   isOpen={isOpen} 
 *   ariaLabelOpen="Fermer le menu"
 *   ariaLabelClose="Ouvrir le menu"
 * />
 * 
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */

const ChevronIcon = (inputProps: Props): JSX.Element => {
    const { type, isOpen, ariaLabelOpen, ariaLabelClose, size, variant } = { ...DEFAULTS, ...inputProps }
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
    const classes = classNames(
        styles.chevron,
        styles[`size-${size}`],
        `text-${variant}`,
        shouldRotate ? (isOpen ? styles.open : styles.closed) : ''
    )

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