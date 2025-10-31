/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Accordion/Accordion.types
 * @version 2.2.2
 * @since 2025-10-17
 * @see {@link Accordion} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { ReactNode } from 'react';
import { CHEVRONICON_TYPE } from '../ChevronIcon/ChevronIcon.types';
import { UI_DEFAULTS_BUTTON, UI_SIZES, UI_VARIANTS, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/** Définit les positions du chevron par rapport au label. */
export const CHEVRON_ALIGNMENTS = [
    "near-label",
    "edge"
] as const;

// ================================
// Types
// ================================

/** Type d'icône du chevron. */
export type AccordionChevronIcon = typeof CHEVRONICON_TYPE[number];

/** Position du chevron. */
export type AccordionChevronAlignment = typeof CHEVRON_ALIGNMENTS[number];

// ================================
// Contexte
// ================================

/** Valeurs du contexte partagées par les sections internes. */
export interface AccordionContextValue {
    variant: UiVariant;
    chevronIcon: AccordionChevronIcon;
    size: UiSize;
    chevronAlignment: AccordionChevronAlignment;
}

// ================================
// Props des composants
// ================================

/** Propriétés pour un élément (bouton, lien) à l'intérieur d'une section. */
export type ItemProps = {
    /** Label affiché sur l'item. */
    label?: string;
    /** Fonction appelée lorsque l'item est cliqué (action de navigation, etc.). */
    onClick?: () => void;
    /** Indique si l'item est actuellement activé (ex: page ou route courante). */
    isActive?: boolean;
}

/** Propriétés pour le composant AccordionSection (le conteneur collapsible). */
export type SectionProps = {
    /** Label de la section, affiché sur le bouton d'ouverture. */
    label?: string;
    /** Indique si la section doit être ouverte par défaut lors du montage. */
    defaultOpen?: boolean;
    /** Contenu de la section (AccordionItem, ou tout composant React). */
    children?: ReactNode;
    /** Fonction de rappel optionnelle lors de l'activation (ouverture/fermeture) de la section. */
    onClick?: () => void;
}

/** Propriétés du composant. */
export type Props = {
    /** Variante de couleur utilisée pour le style de base (labels non actifs). */
    variant?: UiVariant;
    /** Taille des items et des labels de section. */
    size?: UiSize;
    /** Type d'icône (chevron, plus-minus, etc.) d'ouverture/fermeture. */
    chevronIcon?: AccordionChevronIcon;
    /** Contenu de l'accordion (AccordionSection, ou tout composant React). */
    children: ReactNode;
    /** Définit l'alignement horizontal du chevron d'ouverture/fermeture par rapport au label de section. */
    chevronAlignment?: AccordionChevronAlignment;
}

// ================================
// Valeurs par défaut
// ================================

/** Valeurs par défaut pour les props d'AccordionItem. */
export const ITEM_DEFAULTS = {
    label: 'Item'
} satisfies Partial<ItemProps>

/** Valeurs par défaut pour les props d'AccordionSection. */
export const SECTION_DEFAULTS = {
    label: 'Section',
    defaultOpen: false,
} satisfies Partial<SectionProps>

/** Valeurs par défaut pour les props. */
export const DEFAULTS = {
    ...omit(UI_DEFAULTS_BUTTON, ["align"]),
    chevronIcon: "chevron" as AccordionChevronIcon,
    chevronAlignment: "near-label" as AccordionChevronAlignment,
} satisfies Partial<Props>

// ================================
// Showcase
// ================================

/** Constantes pour le showcase du composant */
export const SHOWCASE_CONSTANTS = {
    variant: UI_VARIANTS,
    size: UI_SIZES,
    chevronIcon: CHEVRONICON_TYPE,
    chevronAlignment: CHEVRON_ALIGNMENTS,
} as const