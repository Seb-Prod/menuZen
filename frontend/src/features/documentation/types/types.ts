/**
 * @file Types globaux pour la feature documentation
 * @module features/documentation/types
 * @version 1.0.0
 * @since 2025-10-29
 * @author Seb-Prod
 */

import type { SECTION_KEYS } from "../pages/DocumentationContent";

// ================================
// Types globaux
// ================================

/**
 * Type union représentant les valeurs possibles des clés de section.
 * Extrait automatiquement toutes les valeurs de l'objet SECTION_KEYS.
 */
export type SectionKeyValues = typeof SECTION_KEYS[keyof typeof SECTION_KEYS];

/**
 * Type représentant une clé sélectionnée dans la navigation.
 * Peut être une clé de section prédéfinie, une chaîne personnalisée (nom de composant), ou null.
 */
export type SelectedKey = SectionKeyValues | string | null;

// ================================
// Types de documentation
// ================================

/**
 * Information sur une propriété de composant.
 * Utilisé pour documenter les props des composants dans les showcases.
 * 
 * @interface PropInfo
 * @property {string} name - Nom de la propriété.
 * @property {string} type - Type TypeScript de la propriété (ex: "string", "boolean", "number").
 * @property {string} description - Description détaillée de la propriété et de son usage.
 * @property {boolean} [required] - Indique si la propriété est obligatoire. Si absent, la prop est optionnelle.
 * @property {string | number | boolean | undefined} [default] - Valeur par défaut de la propriété si elle n'est pas fournie.
 */
export type PropInfo = {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  default?: string | number | boolean | undefined;
};

/**
 * Structure hiérarchique d'un élément de documentation.
 * Utilisé pour construire l'arborescence de navigation dans la sidebar.
 * 
 * @interface DocumentationItem
 * @property {string} key - Identifiant unique de l'élément (utilisé pour la sélection et la navigation).
 * @property {string} label - Libellé affiché dans l'interface utilisateur.
 * @property {DocumentationItem[]} [children] - Sous-éléments imbriqués (pour créer une hiérarchie).
 */
export type DocumentationItem = {
  key: string;
  label: string;
  children?: DocumentationItem[];
}