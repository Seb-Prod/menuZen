/**
 * @file Point d'entrée pour le composant Accordion
 * @module components/ui/Accordion
 * @description
 * Barrel file qui exporte le composant Accordion ainsi que ses sous-composants, types, constantes et configurations associées.
 * 
 * @version 2.2.2
 * @since 2025-10-17
 * @author Seb-Prod
 */

export { default as Accordion } from './Accordion';
export { default as AccordionItem } from './AccordionItem';
export { default as AccordionSection } from './AccordionSection';

export type { Props as AccordionProps, ItemProps, SectionProps } from './Accordion.types';
export { DEFAULTS, ITEM_DEFAULTS, SECTION_DEFAULTS, SHOWCASE } from './Accordion.types';