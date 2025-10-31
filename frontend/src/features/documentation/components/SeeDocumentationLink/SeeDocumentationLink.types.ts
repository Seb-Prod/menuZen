/**
 * @file Définition des types pour le composant SeeDocumentationLink
 * @module features/documentation/components/SeeDocumentationLink/SeeDocumentationLink.types
 * @version 1.0.0
 * @since 2025-10-31
 * @see {@link SeeDocumentationLink} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

// ================================
// Props du composant
// ================================

/**
 * Propriétés pour le composant SeeDocumentationLink.
 */
export type Props = {
    /** Clé du composant ou de la section vers laquelle naviguer */
    target: string;

    /** Fonction de navigation appelée au clic avec la clé du target */
    onNavigate?: (key: string) => void;
};

// ================================
// Valeurs par défaut
// ================================

/** Valeurs par défaut pour les props de SeeDocumentationLink */
export const DEFAULTS = {
    target: '',
} satisfies Partial<Props>;