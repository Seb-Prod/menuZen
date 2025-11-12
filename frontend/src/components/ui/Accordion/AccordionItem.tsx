/**
 * @file Composant AccordionItem
 * @module components/ui/Accordion/AccordionItem
 */

import { type JSX } from "react";
import styles from "./Accordion.module.css";
import { ITEM_DEFAULTS, type ItemProps } from "./Accordion.types";
import { useAccordion } from "./Accordion.context";
import { classNames } from "@/utils/object";

/**
 * Composant **AccordionItem** - Élément cliquable
 * 
 * Représente un élément interactif utilisé à l'intérieur d'une AccordionSection.
 * Les styles sont hérités du contexte.
 * 
 * @component
 * @version 2.1.2
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {ItemProps} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} L'élément bouton React.
 * 
 * @example
 * <AccordionItem
 *   label="Détails du produit"
 *   onClick={() => console.log('Cliqué!')}
 *   isActive={true}
 * />
 * 
 * @see {@link ItemProps} Pour les types détaillés des propriétés
 */
const AccordionItem = (inputProps: ItemProps): JSX.Element => {
    const { label, onClick, isActive } = { ...ITEM_DEFAULTS, ...inputProps };
    const context = useAccordion();

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