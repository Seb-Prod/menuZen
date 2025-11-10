/**
 * @file Contexte pour les composants Accordion
 * @module components/ui/Accordion/AccordionContext
 * @description
 * Fournit un contexte React pour partager les valeurs de configuration
 * entre les composants de l'Accordion (Section, Item, etc.).
 * 
 * @version 1.0.0
 * @since 2025-10-17
 * @author Seb-Prod
 */

import { createContext, useContext } from 'react';
import type { AccordionContextValue } from './Accordion.types';

/**
 * Contexte pour partager les styles et configurations de l'Accordion.
 */
export const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

/**
 * Hook personnalisé pour accéder aux valeurs du contexte Accordion.
 * 
 * @returns {AccordionContextValue} Les valeurs du contexte.
 * @throws {Error} Si utilisé en dehors d'un Provider AccordionContext.
 * 
 * @example
 * const { variant, size, chevronIcon } = useAccordion();
 */
export const useAccordion = (): AccordionContextValue => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('useAccordion doit être utilisé dans un composant enfant d\'Accordion');
    }
    return context;
};