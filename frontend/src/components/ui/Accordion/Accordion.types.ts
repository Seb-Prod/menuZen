import type { ReactNode } from 'react';

/**
 * Définit les variantes de couleur pour Accordion.
 */
export const ACCORDION_VARIANTS = [
    "primary",
    "secondary"
] as const;

// Types inférés
export type AccordionVariant = typeof ACCORDION_VARIANTS[number];

/**
 * Propriétés personnalisées pour le comosant Accordion.
 */
export type AccordionProps = {
    variant?: AccordionVariant;
}

/**
 * Valeur par défaut pour les propriétés du composant Table.
 */
export const ACCORDION_DEFAULTS = {
    variant: "primary" as AccordionVariant
} satisfies Partial<AccordionProps>

/**
 * Toutes les constantes de Spinner pour le showcase
 */
export const ACCORDION_SHOWCASE_CONSTANTS = {
    variant: ACCORDION_VARIANTS
} as const