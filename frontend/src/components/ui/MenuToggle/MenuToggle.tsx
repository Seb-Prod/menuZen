/**
 * @file Composant MenuToggle
 * @module components/ui/MenuToogle
 */

import type { JSX } from "react";
import styles from "./MenuToggle.module.css";
import { MENUTOGGLE_DEFAULTS, type MenuToggleProps } from "./MenuToggle.types";
import { classNames } from "@/utils/object";

/**
 * Composant MenuToggle - Icône animée pour ouvrir / fermer des menu
 * 
 * Ce composant affiche différents types d'icônes (burger, fléche, chevron)
 * avec une animation de rotation ou de changement d'état selon le type choisi.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {MenuToggleProps} props - Les propriétés du composant
 * @param {MenuToggleType} props.type - Type d'icône à afficher ('chevron', 'arrow', 'burger')
 * @param {MenuToggleVariant} props.variant - Couleur de l'icône (primary, secondary, succes, info, error, neutral)
 * @param {UiSize} props.size - Taille de l'icône ('small', 'medium', 'large')
 * @param {boolean} props.isOpen - État ouvert/fermé de l'icône
 * @param {string} [props.ariaLabelOpen] - Label pour l'accessibilité quand l'icône est ouverte
 * @param {string} [props.ariaLabelClose] - Label pour l'accessibilité quand l'icône est fermée
 * 
 * @returns {JSX.Element} L'élément MenuToggle React (JSX).
 * 
 * @example
 * // Utilisation simple
 * <MenuToggle />
 * 
 * // Avec aria-labels pour l'accessibilité
 * <MenuToogle 
 *   type="chevron" 
 *   isOpen={isOpen} 
 *   ariaLabelOpen="Fermer le menu"
 *   ariaLabelClose="Ouvrir le menu"
 * />
 * 
 * @see {@link MenuToggleProps}
 * @see {@link MENUTOGGLE_DEFAULTS}
 */
const MenuToggle = ({
    type = MENUTOGGLE_DEFAULTS.type,
    size = MENUTOGGLE_DEFAULTS.size,
    isOpen = MENUTOGGLE_DEFAULTS.isOpen,
    variant = MENUTOGGLE_DEFAULTS.variant,
    ariaLabelOpen = MENUTOGGLE_DEFAULTS.ariaLabelOpen,
    ariaLabelClose = MENUTOGGLE_DEFAULTS.ariaLabelClose,
    onClick
}: MenuToggleProps): JSX.Element => {

    // Construction des classes CSS
    const classes = classNames(
        styles.toggle,
        `component-${variant}`,
        `component-${size}`
    )

    const barClasses = classNames(
    styles.bar,
    styles[type],
    isOpen && styles.open,
);

    return (
        <button
            className={classes}
            onClick={onClick}
            aria-label={isOpen ? ariaLabelOpen : ariaLabelClose}
            aria-expanded={isOpen}
            type="button"
        >
            <span className={barClasses}></span>
        </button>
    );
};

export default MenuToggle;