import type { ReactNode } from 'react';

/**
 * Définit les variantes de couleur pour Table.
 */
export const TABLE_VARIANTS = [
    "primary",
    "secondary"
] as const;

/**
 * Définit l'allignement de Table.
 */
export const TABLE_ALIGN = [
    "left",
    "right",
    "center"
] as const;

/**
 * Définit les états de fullWidth pour le showcase.
 */
export const TABLE_FULLWIDTH_OPTIONS = [
    false,
    true
] as const;

// Types inférés
export type TableVariant = typeof TABLE_VARIANTS[number];
export type TableAlign = typeof TABLE_ALIGN[number];

/**
 * Propriétés personnalisées pour le comosant Table.
 */
export type TableProps = {
    variant?: TableVariant;
    align?: TableAlign;
    fullWidth?: boolean;
    className?: string;
    headers: string[];
    data: ReactNode[][];
}

/**
 * Valeur par défaut pour les propriétés du composant Table.
 */
export const TABLE_DEFAULTS = {
    variant: "primary" as TableVariant,
    align: "center" as TableAlign,
    fullWidth: false,
    className: ""
} satisfies Partial<TableProps>

/**
 * Toutes les constantes de Spinner pour le showcase
 */
export const TABLE_SWOCASE_CONSTANTS = {
    variant: TABLE_VARIANTS,
    align: TABLE_ALIGN,
    fullWidth: TABLE_FULLWIDTH_OPTIONS
} as const