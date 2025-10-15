import type { ReactElement } from 'react';

/**
 * Définit les variantes de couleur pour Accordion.
 */
export const ACCORDION_VARIANTS = [
    "primary",
    "secondary",
    "warning",
    "neutral"
] as const;

/**
 * Propriétés personnalisées pour le composant AccordionItem.
 */
export type AccordionItemProps = {
    title?: string;
    onClick?: () => void;
    isActive?: boolean;
}

/**
 * Valeur par défaut pour les propriétés du composant AccordionItem.
 */
export const ACCORDION_ITEM_DEFAULTS = {
    title: 'Accordion Item'
} satisfies Partial<AccordionItemProps>

/**
 * Propriétés personnalisées pour le composant AccordionSection.
 */
export type AccordionSectionProps = {
    label: string;
    defaultOpen?: boolean;
    children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
    onClick?: () => void;
    isActive?: boolean;
}

/**
 * Valeur par défaut pour les propriétés du composant AccordionSection.
 */
export const ACCORDION_SECTION_DEFAULTS = {
    label: 'Accordion Section',
    defaultOpen: false,
    isActive:false
} satisfies Partial<AccordionSectionProps>

// Types inférés
export type AccordionVariant = typeof ACCORDION_VARIANTS[number];

/**
 * Propriétés personnalisées pour le composant Accordion.
 */
export type AccordionProps = {
    variant?: AccordionVariant;
    children: 
        | ReactElement<AccordionItemProps> 
        | ReactElement<AccordionItemProps>[]
        | ReactElement<AccordionSectionProps>
        | ReactElement<AccordionSectionProps>[]
        | (ReactElement<AccordionItemProps> | ReactElement<AccordionSectionProps>)[];
}

/**
 * Valeur par défaut pour les propriétés du composant Accordion.
 */
export const ACCORDION_DEFAULTS = {
    variant: "primary" as AccordionVariant
} satisfies Partial<AccordionProps>

/**
 * Toutes les constantes de Accordion pour le showcase
 */
export const ACCORDION_SHOWCASE_CONSTANTS = {
    variant: ACCORDION_VARIANTS
} as const