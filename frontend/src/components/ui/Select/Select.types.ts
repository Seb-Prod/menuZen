/**
 * Définit une option su Select
 */
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

/**
 * Définit les variantes de couleur pour Select.
 */
export const SELECT_VARIANTS = [
    "primary",
    "secondary",
    "warning",
    "neutral"
] as const;

/**
 * Définit les tailles du select prédéfinies.
 */
export const SELECT_SIZES = [
    "small",
    "medium",
    "large"
] as const;

/**
 * Définit l'allignement du Select
 */
export const SELECT_ALIGN = [
    "left",
    "right",
    "center"
]as const;

/**
 * Définit les états disabled pour le showcase.
 */
export const SELECT_DISABLED_OPTIONS = [
    false,
    true
] as const;

// Types inférés
export type SelectVariant = typeof SELECT_VARIANTS[number];
export type SelectSize = typeof SELECT_SIZES[number];
export type SelectAlign = typeof SELECT_ALIGN[number];

/**
 * Propriétés personnalisées pour le comosant Select.
 */
export type SelectProps = {
    variant?: SelectVariant;
    size?:SelectSize;
    options: SelectOption[];
    value?: string;
    align?: SelectAlign;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    name?: string;
    id?: string;
}

/**
 * Valeur par défaut pour les propriétés du composant Table.
 */
export const SELECT_DEFAULTS = {
    variant: "neutral" as SelectVariant,
    size:"medium" as SelectSize,
    align:"left" as SelectAlign,
    placeholder: 'Sélectionnez une option',
    disabled: false,
    options: [] as SelectOption[],
} satisfies Partial<SelectProps>

/**
 * Toutes les constantes de Spinner pour le showcase
 */
export const SELECT_SHOWCASE_CONSTANTS = {
    variant: SELECT_VARIANTS,
    size: SELECT_SIZES,
    align: SELECT_ALIGN,
    disabled:SELECT_DISABLED_OPTIONS
} as const