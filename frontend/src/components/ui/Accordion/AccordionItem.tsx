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
 * au clic. Les styles sont hérités du contexte mais peuvent être surchargés
 * individuellement.
 *
 * @component
 * @version 2.0.2
 * @since 2025-10-17
 * @author Seb-Prod
 *
 * @param {ItemProps} props - Les propriétés du composant.
 * @param {string} [props.label='Item'] - Le texte à afficher sur le bouton.
 * @param {() => void} [props.onClick] - Fonction de rappel exécutée lors du clic.
 * @param {boolean} [props.isActive=false] - Si vrai, applique un style actif au bouton.
 * @param {UiVariant} [props.itemVariant] - Surcharge la variante active héritée du contexte.
 * @param {UiSize} [props.size] - Surcharge la taille héritée du contexte.
 * @param {UiMode} [props.itemMode] - Surcharge le mode d'apparence du bouton hérité du contexte.
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
 * @example
 * // Item avec surcharge de style
 * <AccordionItem
 *   label="Élément important"
 *   itemVariant="error"
 *   size="large"
 *   isActive={false}
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