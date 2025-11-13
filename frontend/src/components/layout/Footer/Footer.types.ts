/**
 * @file Définition des types, constantes et valeurs par défaut du composant Footer
 * @module components/ui/layout/Footer.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Footer.
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 * 
 * @see {@link Footer} pour l'implémentation du composant principal.
 */

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Footer.
 * 
 * @typedef {Object} Props
 * @property {string} [appName] - Nom de l'application.
 * @property {string} [description] - Description de l'application.
 * @property {string} [email] - Adresse email de contact.
 * @property {string} [linkedIn] - URL du profil LinkedIn.
 * @property {string} [GitHub] - URL du profil GitHub.
 * @property {number} [year] - Année pour le copyright.
 */
export type Props = {
    appName?: string;
    description?: string;
    email?: string;
    linkedIn?: string;
    gitHub?: string;
    year?: number
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Footer.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    appName: "Forge",
    description: "Une brève description de votre projet"
} satisfies Partial<Props>;