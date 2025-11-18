/**
 * @file Définition des types, constantes et valeurs par défaut du composant Checkbox
 * @module components/ui/Checkbox/Checkbox.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Checkbox.
 * 
 * @version 1.0.0
 * @since 2025-11-16
 * @author Seb-Prod
 * 
 * @see {@link Checkbox} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { InputHTMLAttributes } from 'react';
import { BOOLEAN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Positions du label par rapport à la checkbox.
 * 
 * @constant
 * @type {readonly ['left', 'right']}
 */
export const LABEL_POSITIONS = [
    "left",
    "right"
] as const;

// ================================
// Types
// ================================

/**
 * Position du label.
 * 
 * @typedef {('left'|'right')} LabelPosition
 */
export type LabelPosition = typeof LABEL_POSITIONS[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Checkbox.
 * 
 * @typedef {Object} Props
 * @property {string} [name] - Nom du champ.
 * @property {boolean} [checked] - État coché/décoché.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Callback au changement.
 * @property {string} [label] - Texte du label.
 * @property {LabelPosition} [labelPosition] - Position du label (gauche ou droite).
 * @property {UiVariant} [variant] - Style de la checkbox.
 * @property {UiSize} [size] - Taille de la checkbox.
 * @property {boolean} [disabled] - Désactive la checkbox.
 * @property {boolean} [required] - Champ obligatoire.
 * @property {string} [errorMessage] - Message d'erreur personnalisé.
 */
export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
    name?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    labelPosition?: LabelPosition;
    variant?: UiVariant;
    size?: UiSize;
    disabled?: boolean;
    required?: boolean;
    errorMessage?: string;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Checkbox.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    ...omit(UI_DEFAULTS, ["align", "justify"]),
    checked: false,
    disabled: false,
    required: false,
    labelPosition: "right" as LabelPosition,
    className: ""
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
    variant: UI_VARIANTS,
    size: UI_SIZES,
    labelPosition: LABEL_POSITIONS,
    disabled: BOOLEAN,
    required: BOOLEAN,
    checked: BOOLEAN,
} as const;