/**
 * @file Contexte pour les composants Accordion.
 * @module components/ui/AccordionContext
 */

import { createContext, useContext } from 'react';
import type { AccordionColorVariant, AccordionChevronIcon, AccordionItemActiveVariant, AccordionSize, AccordionChevronAlignment } from './Accordion.types';

/**
 * Type pour les valeurs du contexte d'accordéon.
 */
export type AccordionContextValue = {
  /** Variant de couleur héritée par les composants enfants. */
  variant?: AccordionColorVariant;

  /** Taille héritée par les composants enfants. */
  size?: AccordionSize;

  /** Composant icône du chevron à afficher pour chaque section. */
  chevronIcon: AccordionChevronIcon;

  /** Variant d'élément actif héritée par les composants enfants. */
  itemVariant?: AccordionItemActiveVariant;

  /** Position du checvron par rapport au label */
  chevronAlignment: AccordionChevronAlignment;
};

/**
 * Contexte pour partager des styles et des configurations à travers l'arborescence des composants Accordion.
 */
export const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

/**
 * Hook personnalisé permettant d'accéder aux valeurs de style et de configuration
 * de l'Accordion parent.
 *
 * Ce hook doit être utilisé uniquement dans les composants descendants d'un Accordion
 * (comme AccordionSection, AccordionItem, etc.).
 *
 * @returns {AccordionContextValue} Les valeurs du contexte (variant, size, chevronIcon, itemVariant).
 *
 * @throws {Error} Lance une erreur si le hook est utilisé en dehors d'un Provider AccordionContext.
 *
 * @example
 * // Dans AccordionSection ou AccordionItem
 * const { variant, size, chevronIcon, itemVariant } = useAccordion();
 */
export const useAccordion = (): AccordionContextValue => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion doit être utilisé dans un composant enfant d\'Accordion');
  }
  return context;
};
