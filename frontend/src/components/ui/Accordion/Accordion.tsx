/**
 * @file Composant Accordion.
 * @module components/ui/Accordion
 */

import { type JSX } from "react";
import styles from "./Accordion.module.css";
import { DEFAULTS, type Props } from './Accordion.types';
import { AccordionContext } from "./Accordion.context";

/**
 * Composant Accordion - Conteneur principal pour un système de sections dépliables.
 *
 * Ce composant enveloppe l'ensemble de la structure et utilise le `AccordionContext.Provider`
 * pour transmettre des propriétés de style globales (`variant`, `size`, `chevronIcon`, `itemVariant`)
 * à tous ses descendants (`AccordionSection` ou `AccordionItem`), assurant une cohérence visuelle.
 *
 * @component
 * @version 2.2.0
 * @since 2025-10-17
 * @author Seb-Prod
 *
 * @param {Props} props - Les propriétés du composant.
 * @param {UiVariant} [props.variant='primary'] - Schéma de couleur global appliqué aux labels de section et aux items non actifs.
 * @param {UiSize} [props.size='medium'] - Taille prédéfinie des items et des labels (small, medium, large).
 * @param {AccordionChevronIcon} [props.chevronIcon='chevron'] - Type d'icône utilisé pour les chevrons d'ouverture/fermeture.
 * @param {UiVariant} [props.itemVariant='primary'] - Schéma de couleur appliqué aux items actifs ou au survol.
 * @param {AccordionChevronAlignment} [props.chevronAlignment='near-label'] - Définit l'alignement horizontal du chevron par rapport au label.
 * @param {ReactNode} props.children - Les éléments qui composent l'accordéon (généralement `AccordionSection` ou `AccordionItem`).
 *
 * @returns {JSX.Element} L'élément conteneur de l'accordéon.
 *
 * @example
 * // Utilisation basique avec sections
 * <Accordion variant="secondary" size="large">
 *   <AccordionSection label="Catégorie A">...</AccordionSection>
 *   <AccordionSection label="Catégorie B">...</AccordionSection>
 * </Accordion>
 *
 * @example
 * // Accordion de navigation avec style de chevron différent
 * <Accordion variant="neutral" chevronIcon="plus-minus" itemVariant="info">
 *   <AccordionSection label="Produits">
 *     <AccordionItem label="Nouveautés" />
 *     <AccordionItem label="Promotions" isActive={true} />
 *   </AccordionSection>
 * </Accordion>
 *
 * @see {@link Props}
 * @see {@link DEFAULTS}
 * @see {@link AccordionContext}
 */
const Accordion = (inputProps: Props): JSX.Element => {
    const { variant, size, chevronIcon, itemVariant, chevronAlignment, children } = { ...DEFAULTS, ...inputProps };

    return (
        <AccordionContext.Provider value={{ variant, size, chevronIcon, itemVariant, chevronAlignment }}>
            <div className={styles.accordion}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export default Accordion;