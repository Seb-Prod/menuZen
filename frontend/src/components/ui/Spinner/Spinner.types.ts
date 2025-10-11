import type { ReactNode } from 'react';

/**
 * Définit les variantes de couleur pour le spiner.
 */
export const SPINNER_VARIANTS = [
    "primary",
    "secondary",
    "neutral",
    "warning"
] as const;

/**
 * Définit les tailles du spinner prédéfinies.
 */
export const SPINNER_SIZE = [
    "small",
    "medium",
    "large"
] as const;

/**
 * Définit l'alligenement du spiner
 */
export const SPINNER_ALIGN = [
    "left",
    "right",
    "center"
] as const

// Types inférés
export type SpinnerVariant = typeof SPINNER_VARIANTS[number];
export type SpinnerSize = typeof SPINNER_SIZE[number];
export type SpinnerAlign = typeof SPINNER_ALIGN[number];

/**
 * Propriétés personnalisées pour le composant Spinner.
 */
export type SpinnerProps = {
    variant?: SpinnerVariant;
    size?: SpinnerSize;
    align?: SpinnerAlign;
    children?: ReactNode
}

/**
 * Valeur par défaut pour les proprétés su comosant Spinner.
 */
export const SPINNER_DEFAULTS = {
    variant: "primary" as SpinnerVariant,
    size: "medium" as SpinnerSize,
    align: "center" as SpinnerAlign
} satisfies Partial<SpinnerProps>

/**
 * Toutes les constantes de Spinner pour le showcase
 */
export const SPINNER_SHOWCASE_CONSTANTS = {
    variant:SPINNER_VARIANTS,
    size:SPINNER_SIZE,
    align:SPINNER_ALIGN
} as const