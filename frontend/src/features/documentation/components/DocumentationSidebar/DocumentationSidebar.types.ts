/**
 * @file Définition des types et constantes pour DocumentationSidebar
 * @module features/documentation/components/DocumentationSidebar/types
 * @version 1.0.0
 * @since 2025-10-29
 * @see {@link DocumentationSidebar} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { SECTION_KEYS } from "../../pages/DocumentationContent";

// ================================
// Types
// ================================

/**
 * Type union représentant les valeurs possibles des clés de section.
 * Extrait automatiquement toutes les valeurs de l'objet SECTION_KEYS.
 */
export type SectionKeyValues = typeof SECTION_KEYS[keyof typeof SECTION_KEYS];

/**
 * Type représentant une clé sélectionnée dans la sidebar.
 * Peut être une clé de section prédéfinie, une chaîne personnalisée, ou null.
 */
export type SelectedKey = SectionKeyValues | string | null;

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant DocumentationSidebar.
 * 
 * @interface Props
 * @property {string[]} showcaseNames - Liste des noms de composants à afficher dans la documentation.
 * @property {SelectedKey} selected - Clé de la section ou du composant actuellement sélectionné.
 * @property {(key: string) => void} onSelect - Fonction callback appelée lors de la sélection d'un élément.
 */
export type Props = {
    /** Liste des noms de composants disponibles pour filtrer l'affichage. */
    showcaseNames: string[];
    /** Identifiant de l'élément actuellement sélectionné dans la navigation. */
    selected: SelectedKey;
    /** Fonction de callback déclenchée lors du clic sur un élément de navigation. */
    onSelect: (key: string) => void;
}