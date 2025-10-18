/**
 * @file Défnition des types, constantes et valeur par défaut
 * @module components/ui/Accordion/Accordion.types
 * @version 2.0.2
 * @since 2025-10-17
 * @author Seb-Prod
 */

import type { ReactNode } from 'react';

// ================================
// Constantes
// ================================

/** Définit le styles de l'accordion (couleur du label des sections et des items non actif). 
 */
export const ACCORDION_COLOR_VARIANTS = [
    "primary",
    "secondary",
    "error",
    "success",
    "info",
    "neutral"
] as const;

/** Définit le style du chevron d'ouverture/fermeture des sections.
 */
export const ACCORDION_CHEVRON_ICONS = [
    "chevron",
    "arrow",
    "plus-minus",
    "triangle",
    "dots"
] as const

/** Définit la taille des items et du label des sections. 
 */
export const ACCORDION_SIZES = [
    "small",
    "medium",
    "large"
] as const

/** Définit les styles (variant) des items quand ils sont **actifs** ou **survolés**. 
 */
export const ACCORDION_ITEM_ACTIVE_VARIANTS = [
    "primary",
    "secondary",
    "error",
    "success",
    "info",
    "neutral"
] as const;

// ================================
// Types (inchangés)
// ================================

export type AccordionColorVariant = typeof ACCORDION_COLOR_VARIANTS[number];
export type AccordionChevronIcon = typeof ACCORDION_CHEVRON_ICONS[number];
export type AccordionSize = typeof ACCORDION_SIZES[number];
export type AccordionItemActiveVariant = typeof ACCORDION_ITEM_ACTIVE_VARIANTS[number];


// ================================
// Contexte (inchangé)
// ================================

/** Valeurs du contexte partagées par les sections internes. */
export interface AccordionContextValue {
    variant: AccordionColorVariant;
    chevronIcon: AccordionChevronIcon;
    size: AccordionSize;
    itemVariant: AccordionItemActiveVariant;
}

// ================================
// Props des composants
// ================================

/** Propriétés pour un élément (bouton, lien) à l'intérieur d'une section. */
export type AccordionItemProps = {
    /** Label affiché sur l'item. */
    label?: string;
    /** Fonction appelée lorsque l'item est cliqué (action de navigation, etc.). */
    onClick?: () => void;
    /** Indique si l'item est actuellement activé (ex: page ou route courante). */
    isActive?: boolean;
    /** Contenu alternatif au label si besoin d'éléments complexes. */
    children?: ReactNode;
    /** * Style spécifique appliqué à cet item quand il est actif ou survolé, 
     * surchargenant le style global défini par AccordionProps. 
     */
    itemVariant?: AccordionItemActiveVariant;
    /** Taille spécifique appliquée à cet item, surchargenant la taille globale. */
    size?: AccordionSize;
}

/** Propriétés pour le composant AccordionSection (le conteneur collapsible). */
export type AccordionSectionProps = {
    /** Label de la section, affiché sur le bouton d'ouverture. */
    label?: string;
    /** Indique si la section doit être ouverte par défaut lors du montage. */
    defaultOpen?: boolean;
    /** Contenu de la section (AccordionItem, ou tout composant React). */
    children?: ReactNode;
    /** Fonction de rappel optionnelle lors de l'activation (ouverture/fermeture) de la section. */
    onClick?: () => void;
    /** Taille spécifique appliquée à cette section, surchargenant la taille globale. */
    size?: AccordionSize;
    /** Type d'icône spécifique appliqué au chevron, surchargenant l'icône globale. */
    chevronIcon?: AccordionChevronIcon;
    /** Variante de couleur spécifique appliquée à cette section, surchargenant la variante globale. */
    variant?: AccordionColorVariant;
}

/** Propriétés pour le composant Accordion principal. */
export type AccordionProps = {
    /** Variante de couleur utilisée pour le style de base (labels non actifs). */
    variant?: AccordionColorVariant;
    /** Taille des items et des labels de section. */
    size?: AccordionSize;
    /** Type d'icône (chevron, plus-minus, etc.) d'ouverture/fermeture. */
    chevronIcon?: AccordionChevronIcon;
    /** Style appliqué aux items quand ils sont actifs ou au survol. */
    itemVariant?: AccordionItemActiveVariant;
    /** Contenu de l'accortion (AccordionSection, ou tout composant React). */
    children: ReactNode;
}

// ================================
// Valeurs par défaut
// ================================

/** Valeur par défaut pour les propriétés du composant AccordionItem. */
export const ACCORDION_ITEM_DEFAULTS = {
    label: 'Item'
} satisfies Partial<AccordionItemProps>

/** Valeur par défaut pour les propriétés du composant AccordionSection. */
export const ACCORDION_SECTION_DEFAULTS = {
    label: 'Section',
    defaultOpen: false,
} satisfies Partial<AccordionSectionProps>

/** Valeur par défaut pour les propriétés du composant Accordion. */
export const ACCORDION_DEFAULTS = {
    variant: "primary" as AccordionColorVariant,
    size: "medium" as AccordionSize,
    chevronIcon: "chevron" as AccordionChevronIcon,
    itemVariant: "primary" as AccordionItemActiveVariant,
} satisfies Partial<AccordionProps>

// ================================
// Showcase
// ================================
export const ACCORDION_SHOWCASE_CONSTANTS = {
    variant: ACCORDION_COLOR_VARIANTS,
    size: ACCORDION_SIZES,
    chevronIcon: ACCORDION_CHEVRON_ICONS,
    itemVariant: ACCORDION_ITEM_ACTIVE_VARIANTS
} as const