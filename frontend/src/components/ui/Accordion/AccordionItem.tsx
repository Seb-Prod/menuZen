/**
 * @file Composant AccordionItem
 * @module components/ui/AccordionItem
 */

import { type JSX } from "react";
import styles from "./Accordion.module.css";
import { ITEM_DEFAULTS, type ItemProps } from "./Accordion.types";
import { useAccordion } from "./Accordion.context";
import { classNames } from "@/utils/object";

/**
 * Composant AccordionItem - Élément cliquable dans une section d'accordéon.
 *
 * Ce composant représente un élément interactif (bouton) généralement utilisé
 * à l'intérieur d'une `AccordionSection`. Il peut afficher un label et réagir
 * au clic. Les styles sont hérités du contexte.
 *
 * @component
 * @version 2.1.2
 * @since 2025-10-17
 * @author Seb-Prod
 *
 * @param {ItemProps} props - Les propriétés du composant.
 * @param {string} [props.label='Item'] - Le texte à afficher sur le bouton.
 * @param {() => void} [props.onClick] - Fonction de rappel exécutée lors du clic.
 * @param {boolean} [props.isActive=false] - Si vrai, applique un style actif au bouton.
 *
 * @returns {JSX.Element} L'élément bouton React.
 *
 * @example
 * // Item simple dans une section
 * <AccordionItem
 *   label="Détails du produit"
 *   onClick={() => console.log('Cliqué!')}
 *   isActive={true}
 * />
 *
 * @see {@link ItemProps}
 * @see {@link ITEM_DEFAULTS}
 * @see {@link useAccordion}
 */
const AccordionItem = (inputProps: ItemProps): JSX.Element => {
    const { label, onClick, isActive } = { ...ITEM_DEFAULTS, ...inputProps };
    const context = useAccordion();

    // Construction des classes CSS
    const buttonClasses = classNames(
        styles.item,
        `component-${context.size}`,
        `component-${context.variant}`,
        isActive && 'active',
        isActive && styles.active
    );

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            type="button"
            aria-pressed={isActive}
        >
            {label}
        </button>
    );
};

export default AccordionItem;