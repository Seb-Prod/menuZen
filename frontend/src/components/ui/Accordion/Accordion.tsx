/**
 * @file Composant Accordion
 * @module components/ui/Accordion
 */

import styles from "./styles/Accordion.module.css";
import { ACCORDION_DEFAULTS, type AccordionProps } from './types/Accordion.types';
import { AccordionContext } from "./context/Accordion.context";
import type { JSX } from "react";

/**
 * Composant Accordion - Conteneur principal pour le système d'accordéon.
 * * Ce composant enveloppe l'ensemble de la structure et utilise le `AccordionContext.Provider`
 * pour transmettre des propriétés comme le `variant` à tous ses descendants (`AccordionSection` ou `AccordionItem`),
 * assurant une cohérence visuelle.
 * * @component
 * * @param {AccordionProps} props - Les propriétés du composant.
 * @param {AccordionVariant} [props.variant='primary'] - Le schéma de couleur global appliqué aux éléments enfants.
 * @param {React.ReactNode} props.children - Les éléments qui composent l'accordéon (soit des `AccordionItem` simples, soit des `AccordionSection` plus complexes).
 * * Les types détaillés sont définis dans {@link AccordionProps}.
 * * @example
 * // Utilisation de sections dépliables autonomes
 * <Accordion variant="secondary">
 * <AccordionSection label="Catégorie A">...</AccordionSection>
 * <AccordionSection label="Catégorie B">...</AccordionSection>
 * </Accordion>
 * * @example
 * // Utilisation d'éléments simples (si gérés par un état parent)
 * <Accordion variant="neutral">
 * <AccordionItem title="Option 1" isActive={true} />
 * <AccordionItem title="Option 2" />
 * </Accordion>
 */
const Accordion = ({ variant = ACCORDION_DEFAULTS.variant, children }: AccordionProps): JSX.Element => {
  return (
    <AccordionContext.Provider value={{ variant}}>
      <div className={styles.accordion}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;