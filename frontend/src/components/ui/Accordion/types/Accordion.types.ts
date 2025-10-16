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
 * Définit les tailles pour Accordion.
 */
export const ACCORDION_SIZES = [
    "small",
    "medium",
    "large"
] as const;

// Types inférés
export type AccordionVariant = typeof ACCORDION_VARIANTS[number];
export type AccordionSize = typeof ACCORDION_SIZES[number];

/**
 * Valeur du contexte Accordion - paramètres partagés
 */
export interface AccordionContextValue {
    variant: AccordionVariant;
    size: AccordionSize;
    // Ajoutez ici tous les paramètres partagés futurs
}

/**
 * Propriétés personnalisées pour le composant AccordionButton.
 */
export type AccordionButtonProps = {
    title?: string;
    onClick?: () => void;
    isActive?: boolean;
    // Ne pas répéter variant/size ici, ils viennent du contexte
}

/**
 * Valeur par défaut pour les propriétés du composant AccordionButton.
 */
export const ACCORDION_BUTTON_DEFAULTS = {
    title: 'Accordion Button'
} satisfies Partial<AccordionButtonProps>

/**
 * Propriétés personnalisées pour le composant AccordionContent.
 */
export type AccordionContentProps = {
    children: React.ReactNode;
    // variant et size viendront du contexte
}

/**
 * Propriétés personnalisées pour le composant AccordionSection.
 */
export type AccordionSectionProps = {
    title: string;
    defaultOpen?: boolean;
    children: ReactElement<AccordionButtonProps> | ReactElement<AccordionButtonProps>[];
    onClick?: () => void;
    isActive?: boolean;
}

/**
 * Valeur par défaut pour les propriétés du composant AccordionSection.
 */
export const ACCORDION_SECTION_DEFAULTS = {
    title: 'Accordion Section',
    defaultOpen: false,
    isActive:false,
} satisfies Partial<AccordionSectionProps>

/**
 * Propriétés personnalisées pour le composant Accordion.
 */
export type AccordionProps = {
    variant?: AccordionVariant;
    size?: AccordionSize;
    children:
    | ReactElement<AccordionButtonProps>
    | ReactElement<AccordionButtonProps>[]
    | ReactElement<AccordionSectionProps>
    | ReactElement<AccordionSectionProps>[]
    | (ReactElement<AccordionButtonProps> | ReactElement<AccordionSectionProps>)[];
}

/**
 * Valeur par défaut pour les propriétés du composant Accordion.
 */
export const ACCORDION_DEFAULTS = {
    variant: "primary" as AccordionVariant,
    size: "medium" as AccordionSize
} satisfies Partial<AccordionProps>

/**
 * Toutes les constantes de Accordion pour le showcase
 */
export const ACCORDION_SHOWCASE_CONSTANTS = {
    variant: ACCORDION_VARIANTS,
    size: ACCORDION_SIZES
} as const