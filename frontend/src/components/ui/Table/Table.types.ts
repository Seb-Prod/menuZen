/**
 * @file Définition des types, constantes et valeurs par défaut du composant Table
 * @module components/ui/Table/Table.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes,
 * les valeurs par défaut et les configurations pour le composant Table.
 * 
 * @version 1.0.1
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @see {@link Table} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { ReactNode } from 'react';
import { BOOLEAN, UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Table.
 * 
 * @typedef {Object} Props
 * @property {UiVariant} [variant] - Style du tableau.
 * @property {UiAlign} [align] - Alignement dans le conteneur parent.
 * @property {UiSize} [size] - Taille du tableau.
 * @property {boolean} [fullWidth] - Prend toute la largeur du parent.
 * @property {string[]} headers - Libellés d'en-têtes de colonnes.
 * @property {ReactNode[][]} data - Contenu des cellules (lignes × colonnes).
 * @property {string} [className] - Classes CSS personnalisées.
 */
export type Props = {
    variant?: UiVariant;
    align?: UiAlign;
    size?: UiSize;
    fullWidth?: boolean;
    headers: string[];
    data: ReactNode[][];
    className?: string;
}

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Table.
 * 
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    ...omit(UI_DEFAULTS, ["justify"]),
    fullWidth: false,
    className: ""
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
    align: UI_ALIGN,
    size: UI_SIZES,
    fullWidth: BOOLEAN
} as const