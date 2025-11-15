/**
 * @file Définition des types pour Input avec validation
 * @module components/ui/Input/Input.types
 * @version 2.0.0
 * @since 2025-11-15
 * @author Seb-Prod
 */

import { UI_SIZES, UI_VARIANTS, type UiSize, type UiVariant } from '@/components/ui/ui.types';
import type { InputHTMLAttributes } from 'react';

// ================================
// Constantes
// ================================

export const TYPES = [
    "text",
    "email",
    "password",
    "number",
    "tel"
] as const;

export const VALIDATE_ON = ["change", "blur"] as const;

// ================================
// Types
// ================================

export type Type = typeof TYPES[number];
export type ValidateOn = typeof VALIDATE_ON[number];

/**
 * Messages d'erreur personnalisables
 */
export type ErrorMessages = {
    required?: string;
    minLength?: string;
    maxLength?: string;
    pattern?: string;
    email?: string;
    tel?: string;
    number?: string;
};

// ================================
// Props des composants
// ================================

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
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
    
    // ===== Validation =====
    /** Fonction de validation personnalisée (retourne "" si valide, sinon message d'erreur) */
    validate?: (value: string) => string;
    /** Quand effectuer la validation */
    validateOn?: ValidateOn;
    /** Afficher le message d'erreur sous le champ */
    showError?: boolean;
    /** Messages d'erreur personnalisés */
    errorMessage?: ErrorMessages;
    /** Callback appelé lors d'une erreur de validation */
    onError?: (error: string) => void;
};

/**
 * Interface exposée par l'Input via useImperativeHandle
 */
export type InputHandle = {
  /** * Déclenche la validation complète de l'Input, met à jour son état 
   * d'erreur interne et retourne l'erreur (ou "") de manière synchrone. 
   */
  validateAndReport: () => string;
};

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS = {
    type: "text" as Type,
    size: "small" as UiSize,
    variant: "primary" as UiVariant,
    value: "",
    placeholder: "",
    validateOn: "blur" as ValidateOn,
    showError: true
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

export const SHOWCASE = {
    type: TYPES,
    size: UI_SIZES,
    variant: UI_VARIANTS,
    validateOn: VALIDATE_ON,
} as const;