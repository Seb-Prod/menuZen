/**
 * @file Définition des types pour SectionDocumentation
 * @module features/documentation/components/SectionDocumentation/types
 * @version 1.0.0
 * @since 2025-10-29
 * @see {@link SectionDocumentation} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant SectionDocumentation.
 * 
 * @interface Props
 * @property {string} title - Titre de la section de documentation.
 * @property {string} description - Description textuelle de la section.
 */
export type Props = {
    /** Titre principal affiché en haut de la section. */
    title: string;
    /** Texte descriptif de la section affiché sous le titre. */
    description: string;
}