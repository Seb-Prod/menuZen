/**
 * @file Définition des types, constantes et valeurs par défaut du composant Accordion
 * @module components/ui/Accordion/Accordion.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Accordion.
 * 
 * @version 2.2.3
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @see {@link Accordion} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { ReactNode } from 'react';
import { TYPE } from '../ChevronIcon/ChevronIcon.types';
import { UI_DEFAULTS_BUTTON, UI_SIZES, UI_VARIANTS, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * Positions possibles du chevron.
 * 
 * @constant
 * @type {readonly ['near-label', 'edge']}
 */
export const CHEVRON_ALIGNMENTS = [
    "near-label",
    "edge"
] as const;

// ================================
// Types
// ================================

/**
 * Type d'icône du chevron.
 * 
 * @typedef AccordionChevronIcon
 */
export type AccordionChevronIcon = typeof TYPE[number];

/**
 * Position du chevron.
 * 
 * @typedef {('near-label'|'edge')} AccordionChevronAlignment
 */
export type AccordionChevronAlignment = typeof CHEVRON_ALIGNMENTS[number];

// ================================
// Contexte
// ================================

/**
 * Valeurs du contexte partagées par les sections internes.
 * 
 * @typedef {Object} AccordionContextValue
 */
export interface AccordionContextValue {
    variant: UiVariant;
    chevronIcon: AccordionChevronIcon;
    size: UiSize;
    chevronAlignment: AccordionChevronAlignment;
}

// ================================
// Props des composants
// ================================

/**
 * Propriétés pour un élément à l'intérieur d'une section.
 * 
 * @typedef {Object} ItemProps
 * @property {string} [label] - Label affiché sur l'item.
 * @property {Function} [onClick] - Fonction appelée au clic.
 * @property {boolean} [isActive] - Indique si l'item est actif.
 */
export type ItemProps = {
    label?: string;
    onClick?: () => void;
    isActive?: boolean;
}

/**
 * Propriétés pour le composant AccordionSection.
 * 
 * @typedef {Object} SectionProps
 * @property {string} [label] - Label de la section.
 * @property {boolean} [defaultOpen] - Section ouverte par défaut.
 * @property {ReactNode} [children] - Contenu de la section.
 * @property {Function} [onClick] - Fonction de rappel lors de l'activation.
 */
export type SectionProps = {
    label?: string;
    defaultOpen?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}

/**
 * Propriétés du composant Accordion.
 * 
 * @typedef {Object} Props
 * @property {UiVariant} [variant] - Variante de couleur.
 * @property {UiSize} [size] - Taille des items et labels.
 * @property {AccordionChevronIcon} [chevronIcon] - Type d'icône du chevron.
 * @property {ReactNode} children - Contenu de l'accordion.
 * @property {AccordionChevronAlignment} [chevronAlignment] - Alignement du chevron.
 */
export type Props = {
    variant?: UiVariant;
    size?: UiSize;
    chevronIcon?: AccordionChevronIcon;
    children: ReactNode;
    chevronAlignment?: AccordionChevronAlignment;
}

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour AccordionItem.
 * 
 * @constant
 * @type {Partial<ItemProps>}
 */
export const ITEM_DEFAULTS = {
    label: 'Item'
} satisfies Partial<ItemProps>

/**
 * Valeurs par défaut pour AccordionSection.
 * 
 * @constant
 * @type {Partial<SectionProps>}
 */
export const SECTION_DEFAULTS = {
    label: 'Section',
    defaultOpen: false,
} satisfies Partial<SectionProps>

/**
 * Valeurs par défaut pour Accordion.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    ...omit(UI_DEFAULTS_BUTTON, ["align"]),
    chevronIcon: "chevron" as AccordionChevronIcon,
    chevronAlignment: "near-label" as AccordionChevronAlignment,
} satisfies Partial<Props>

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
    chevronIcon: TYPE,
    chevronAlignment: CHEVRON_ALIGNMENTS,
} as const