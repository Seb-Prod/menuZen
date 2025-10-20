/**
 * @file Composant Accordion.
 * @module components/ui/Accordion
 */

import styles from "./Accordion.module.css";
import { ACCORDION_DEFAULTS, type AccordionProps } from './Accordion.types';
import { AccordionContext } from "./Accordion.context";
import type { JSX } from "react";

/**
 * Composant Accordion - Conteneur principal pour un système de sections dépliables.
 *
 * Ce composant enveloppe l'ensemble de la structure et utilise le `AccordionContext.Provider`
 * pour transmettre des propriétés de style globales (`variant`, `size`, `chevronIcon`, `itemVariant`)
 * à tous ses descendants (`AccordionSection` ou `AccordionItem`), assurant une cohérence visuelle.
 *
 * @component
 * @version 2.1.0
 * @since 2025-10-17
 * @author Seb-Prod
 *
 * @param {AccordionProps} props - Les propriétés du composant.
 * @param {AccordionColorVariant} [props.variant='primary'] - Schéma de couleur global appliqué aux labels de section et aux items non actifs.
 * @param {AccordionSize} [props.size='medium'] - Taille prédéfinie des items et des labels (small, medium, large).
 * @param {AccordionChevronIcon} [props.chevronIcon='chevron'] - Type d'icône utilisé pour les chevrons d'ouverture/fermeture.
 * @param {AccordionItemActiveVariant} [props.itemVariant='primary'] - Schéma de couleur appliqué aux items actifs ou au survol.
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
 * @see {@link AccordionProps}
 * @see {@link ACCORDION_DEFAULTS}
 * @see {@link AccordionContext}
 */
const Accordion = ({
  variant = ACCORDION_DEFAULTS.variant,
  size = ACCORDION_DEFAULTS.size,
  chevronIcon = ACCORDION_DEFAULTS.chevronIcon,
  itemVariant = ACCORDION_DEFAULTS.itemVariant,
  chevronAlignment = ACCORDION_DEFAULTS.chevronAlignment,
  children }: AccordionProps): JSX.Element => {
  return (
    <AccordionContext.Provider value={{ variant, size, chevronIcon, itemVariant, chevronAlignment }}>
      <div className={styles.accordion}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;