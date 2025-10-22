/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Table.types
 * @version 1.0.0
 * @since 2025-10-17
 * @see {@link Table} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_ALIGN} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @author Seb-Prod
 */

import type { ReactNode } from 'react';
import { UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/** Définit les états possibles pour l'option `fullWidth`
 */
export const TABLE_FULLWIDTH_OPTIONS = [
    false,
    true
] as const;

// ================================
// Types
// ================================

// ================================
// Props des composants
// ================================
export type TableProps = {
    /** Style du tableau */
    variant?: UiVariant;
    /** Alignement dans le conteneur parent */
    align?: UiAlign;
    /** Taille du tableau */
    size?: UiSize;
    /** Prend toute la largeur du parent */
    fullWidth?: boolean;
    /** Tableau des libellés d'en-têtes de colonnes (titres). */
    headers: string[];
    /** Tableau bidimensionnel (lignes × colonnes) contenant le contenu des cellules. Accepte des chaînes de caractères ou des éléments React. */
    data: ReactNode[][];
    /** Classes CSS personnalisées supplémentaires. */
    className?: string;
}

/**
 * Valeur par défaut pour les propriétés du composant Table.
 */
export const TABLE_DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify"]),
    fullWidth: false,
    className: ""
} satisfies Partial<TableProps>

/**
 * Toutes les constantes de Spinner pour le showcase
 */
export const TABLE_SHOWCASE_CONSTANTS = {
    variant: UI_VARIANTS,
    align: UI_ALIGN,
    size:UI_SIZES,
    fullWidth: TABLE_FULLWIDTH_OPTIONS
} as const