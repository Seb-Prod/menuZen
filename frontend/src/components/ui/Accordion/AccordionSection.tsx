/**
 * @file Composant AccordionSection
 * @module components/ui/Accordion/AccordionSection
 * @description Section complète avec bascule et contenu dans un accordéon
 */

import { useState, type JSX } from "react";
import styles from "./Accordion.module.css";
import { SECTION_DEFAULTS, type SectionProps } from "./Accordion.types";
import {ChevronIcon} from "@/components/ui";
import { useAccordion } from "./Accordion.context";
import { classNames } from "@/utils/object";

/**
 * Composant **AccordionSection** - Section avec bascule et contenu
 * 
 * Gère son propre état d'ouverture/fermeture et affiche le contenu
 * uniquement lorsqu'il est ouvert.
 * 
 * @component
 * @version 2.4.0
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @param {SectionProps} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} L'élément de section React.
 * 
 * @example
 * <AccordionSection label="Détails" defaultOpen={true}>
 *   <AccordionItem label="Option 1" />
 * </AccordionSection>
 * 
 * @see {@link SectionProps} Pour les types détaillés des propriétés
 */
const AccordionSection = (inputProps: SectionProps): JSX.Element => {
    const { label, defaultOpen, children, onClick } = { ...SECTION_DEFAULTS, ...inputProps };
    const context = useAccordion();
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const handleToggle = (): void => {
        setIsOpen(prev => !prev);
        onClick?.();
    };

    const buttonClasses = classNames(
        styles.button,
        `component-${context.variant}`,
        `component-${context.size}`,
        context.chevronAlignment === 'edge' && styles.buttonAlignEdge
    );

    return (
        <div className={`${styles.section} ${styles[context.chevronAlignment]}`}>
            <button
                className={buttonClasses}
                onClick={handleToggle}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`section-content-${label}`}
            >
                <span className={styles.label}>{label}</span>
                <ChevronIcon 
                    isOpen={isOpen} 
                    type={context.chevronIcon} 
                    size={context.size} 
                    variant="none" 
                />
            </button>

            {isOpen && (
                <div
                    id={`section-content-${label}`}
                    className={styles.content}
                    role="region"
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default AccordionSection;