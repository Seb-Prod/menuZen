/**
 * @file Composant Accordion
 * @module components/ui/Accordion
 * @description Conteneur principal pour un système de sections dépliables
 */

import { type JSX } from "react";
import styles from "./Accordion.module.css";
import { DEFAULTS, type Props } from './Accordion.types';
import { AccordionContext } from "./Accordion.context";

/**
 * Composant **Accordion** - Conteneur pour sections dépliables
 * 
 * Utilise le contexte pour transmettre les propriétés de style globales
 * à tous ses descendants (AccordionSection, AccordionItem).
 * 
 * @component
 * @version 2.2.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} L'élément conteneur de l'accordéon.
 * 
 * @example
 * <Accordion variant="secondary" size="large">
 *   <AccordionSection label="Catégorie A">...</AccordionSection>
 *   <AccordionSection label="Catégorie B">...</AccordionSection>
 * </Accordion>
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 */
const Accordion = (inputProps: Props): JSX.Element => {
    const { variant, size, chevronIcon, chevronAlignment, children } = { ...DEFAULTS, ...inputProps };

    return (
        <AccordionContext.Provider value={{ variant, size, chevronIcon, chevronAlignment }}>
            <div className={styles.accordion}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export default Accordion;