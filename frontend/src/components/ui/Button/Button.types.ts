import type { ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * Définit les variantes de couleur pour le bouton.
 */
export const BUTTON_VARIANTS = [
    "primary",
    "secondary",
    "error",
    "success",
    "info",
    "neutral"
] as const;

/**
 * Définit les tailles de boutons prédéfinies.
 */
export const BUTTON_SIZES = [
    "small",
    "medium",
    "large"
] as const;

/**
 * Définit le type de bouton
 */

export const BUTTON_TYPES = [
    "button",
    "submit",
    "reset"
] as const;

/**
 * Définit les états de fullWidth pour le showcase.
 */
export const BUTTON_FULLWIDTH_OPTIONS = [
    false,
    true
] as const;

/**
 * Définit les états disabled pour le showcase.
 */
export const BUTTON_DISABLED_OPTIONS = [
    false,
    true
] as const;

/**
 * Définit l'allignement du bouton
 */
export const BUTTON_ALIGN = [
    "left",
    "right",
    "center"
] as const;

// Types inférés
export type ButtonVariant = typeof BUTTON_VARIANTS[number];
export type ButtonSize = typeof BUTTON_SIZES[number];
export type ButtonType = typeof BUTTON_TYPES[number];
export type ButtonAlign = typeof BUTTON_ALIGN[number];

/**
 * Propriétés personnalisées pour le composant Button.
 * Étend les propriétés natives de HTMLButtonElement.
 */
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    children?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    type?: ButtonType;
    align?: ButtonAlign;
};

/**
 * Valeurs par défaut pour les propriétés du composant Button.
 */
export const BUTTON_DEFAULTS = {
    variant: "primary" as ButtonVariant,
    size: "medium" as ButtonSize,
    align: "left" as ButtonAlign,
    fullWidth: false,
    type: "button" as ButtonType,
    disabled: false,
    className: ""
} satisfies Partial<ButtonProps>;

/**
 * Toutes les constantes de Button regroupées pour le showcase.
 */
export const BUTTON_SHOWCASE_CONSTANTS = {
    variant: BUTTON_VARIANTS,
    size: BUTTON_SIZES,
    type: BUTTON_TYPES,
    fullWidth: BUTTON_FULLWIDTH_OPTIONS,
    disabled: BUTTON_DISABLED_OPTIONS,
    align:BUTTON_ALIGN,
} as const;