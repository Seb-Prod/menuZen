/**
 * @file Définition des types, constantes et valeurs par défaut du composant Input
 * @module components/ui/Input/Input.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Input.
 * Il utilise les types UI globaux (UiSize, UiVariant) pour assurer la cohérence
 * avec le système de design.
 * 
 * @version 1.0.0
 * @since 2025-11-09
 * @author Seb-Prod
 * 
 * @see {@link Input} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import { UI_SIZES, UI_VARIANTS, type UiSize, type UiVariant } from '@/components/ui/ui.types';

// ================================
// Constantes
// ================================

/**
 * Types d'input possibles.
 * 
 * @constant
 * @type {readonly ['text', 'email', 'password', 'number', 'tel']}
 */
export const TYPES = [
    "text",
    "email",
    "password",
    "number",
    "tel"
] as const;

// ================================
// Types
// ================================

/**
 * Type représentant le type d'input.
 * 
 * @typedef {('text'|'email'|'password'|'number'|'tel')} Type
 */
export type Type = typeof TYPES[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Input.
 * 
 * @typedef {Object} Props
 * @property {Type} [type] - Type d'input (text, email, password, number, tel).
 * @property {UiSize} [size] - Taille de l'input ('xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl').
 * @property {UiVariant} [variant] - Couleur du texte et de la bordure de l'input.
 * @property {string} [value] - Valeur actuelle de l'input.
 * @property {string} [placeholder] - Texte d'indication affiché quand l'input est vide.
 */
export type Props = {
    /** Type d'input */
    type?: Type;
    /** Taille de l'input */
    size?: UiSize;
    /** Couleur du texte et de la bordure de l'input */
    variant?: UiVariant;
    /** Valeur de l'input */
    value?: string;
    /** Texte d'indication */
    placeholder?: string;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour les propriétés du composant Input.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    type: "text" as Type,
    size: "small" as UiSize,
    variant: "primary" as UiVariant,
    value: "",
    placeholder: ""
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

/**
 * Configuration pour la présentation/démonstration du composant.
 * 
 * @constant
 * @type {Object}
 */
export const SHOWCASE = {
    type: TYPES,
    size: UI_SIZES,
    variant: UI_VARIANTS,
} as const;