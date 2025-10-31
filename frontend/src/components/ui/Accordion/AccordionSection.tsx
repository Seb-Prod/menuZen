/**
 * @file Composant AccordionSection.
 * @module components/ui/AccordionSection
 */

import { useState, type JSX } from "react";
import styles from "./Accordion.module.css";
import { SECTION_DEFAULTS, type SectionProps } from "./Accordion.types";
import ChevronIcon from "../ChevronIcon";
import { useAccordion } from "./Accordion.context";
import { classNames } from "@/utils/object";

/**
 * Composant AccordionSection - Une section complète avec bascule et contenu.
 *
 * Ce composant gère son propre état d'ouverture/fermeture et affiche le contenu uniquement 
 * lorsqu'il est ouvert. Il peut surcharger les styles globaux hérités de l'Accordion parent.
 *
 * @component
 * @version 2.3.0
 * @since 2025-10-17
 * @author Seb-Prod
 *
 * @param {SectionProps} props - Les propriétés du composant.
 * @param {string} [props.label='Section'] - Le titre affiché sur l'en-tête de la section.
 * @param {boolean} [props.defaultOpen=false] - Si vrai, la section est ouverte par défaut au montage.
 * @param {ReactNode} [props.children] - Le contenu à afficher lorsque la section est ouverte.
 * @param {() => void} [props.onClick] - Fonction de rappel exécutée après chaque basculement.
 * @param {UiSize} [props.size] - Surcharge la taille globale héritée du contexte.
 * @param {AccordionChevronIcon} [props.chevronIcon] - Surcharge le type de chevron hérité du contexte.
 * @param {UiVariant} [props.variant] - Surcharge le schéma de couleur hérité du contexte.
 *
 * @returns {JSX.Element} L'élément de section React.
 *
 * @example
 * // Section simple avec surcharge de taille et couleur
 * <AccordionSection
 *   label="Détails"
 *   size="large"
 *   variant="info"
 * >
 *   <p>Contenu textuel simple</p>
 * </AccordionSection>
 *
 * @example
 * // Section avec état initial ouvert
 * <AccordionSection
 *   label="Configuration"
 *   defaultOpen={true}
 *   onClick={() => console.log('Toggle')}
 * >
 *   <AccordionItem label="Option 1" />
 * </AccordionSection>
 *
 * @see {@link SectionProps}
 * @see {@link SECTION_DEFAULTS}
 * @see {@link useAccordion}
 */
const AccordionSection = (inputProps: SectionProps): JSX.Element => {
    const { label, defaultOpen, children, onClick, size, chevronIcon, variant } = { ...SECTION_DEFAULTS, ...inputProps };
    const context = useAccordion();
    const [isOpen, setIsOpen] = useState(defaultOpen);

    // Résolution des valeurs finales (props > contexte)
    const finalSize = size ?? context.size;
    const finalChevronIcon = chevronIcon ?? context.chevronIcon;
    const finalVariant = variant ?? context.variant;
    const finalChevronAlignment = context.chevronAlignment;

    /**
     * Gère le basculement de l'état ouvert/fermé et exécute le callback externe.
     */
    const handleToggle = (): void => {
        setIsOpen(prev => !prev);
        onClick?.();
    };

    // Construction des classes CSS
    const buttonClasses = classNames(
        styles.button,
        `component-${finalVariant}`,
        `component-${finalSize}`,
        finalChevronAlignment === 'edge' && styles.buttonAlignEdge
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
                    type={finalChevronIcon} 
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