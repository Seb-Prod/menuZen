/**
 * @file Définition des types, constantes et valeurs par défaut du composant Form
 * @module components/ui/Form/Form.types
 * @description
 * Ce fichier centralise les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Form.
 *
 * @version 1.0.0
 * @since 2025-11-14
 * @author Seb-Prod
 *
 * @see {Form} pour l'implémentation du composant principal.
 */

// ================================
// Types des champs
// ================================

/**
 * Types supportés pour un champ de formulaire.
 *
 * @typedef {('text'|'email'|'password'|'textarea')} FieldType
 */
export const FIELD_TYPES = [
  "text",
  "email",
  "password",
  "textarea",
] as const;

export type FieldType = typeof FIELD_TYPES[number];

/**
 * Définition d'un champ de formulaire.
 *
 * @typedef {Object} FormField
 * @property {string} name - Nom du champ (clé).
 * @property {string} label - Label affiché.
 * @property {FieldType} type - Type du champ.
 * @property {boolean} [required] - Si le champ est requis.
 */
export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
}

// ================================
// Props du composant Form
// ================================

/**
 * Propriétés du composant Form.
 *
 * @typedef {Object} Props
 * @property {FormField[]} fields - Liste des champs du formulaire.
 * @property {(values: Record<string, string>) => void} onSubmit - Callback à la validation.
 */
export interface Props {
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
  className?: string;
}

// ================================
// Types système
// ================================

/**
 * Liste des erreurs du formulaire.
 * Correspond à un objet clé-valeur, ex: { email: "Email invalide" }
 *
 * @typedef {Record<string, string>} FormErrors
 */
export type FormErrors = Record<string, string>;

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut du formulaire.
 *
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS: Partial<Props> = {
  fields: [],
};

// ================================
// Showcase
// ================================

/**
 * Configuration pour la présentation/démonstration du composant Form.
 */
export const SHOWCASE = {
  types: FIELD_TYPES,
  required: [true, false],
} as const;
