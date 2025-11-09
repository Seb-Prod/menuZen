/**
 * @file Point d'entrée pour le composant Separator
 * @module components/ui/Separator
 * @description
 * Barrel file qui exporte le composant Separator ainsi que ses types, constantes
 * et configurations associées. Centralise les exports pour simplifier les imports
 * dans le reste de l'application.
 * 
 * @version 1.0.0
 * @since 2025-11-08
 * @author Seb-Prod
 * 
 * @example
 * // Import du composant
 * import { Separator } from '@/components/ui/Separator';
 * 
 * @example
 * // Import avec les types
 * import { Separator, type SeparatorProps } from '@/components/ui/Separator';
 * 
 * @example
 * // Import des constantes
 * import { Separator, DEFAULTS, SHOWCASE } from '@/components/ui/Separator';
 */

/**
 * Composant Separator - Séparateur horizontal ou vertical.
 * @see {@link Separator} pour la documentation complète du composant.
 */
export { default as Separator } from './Separator';

/**
 * Types et constantes du composant Separator.
 * 
 * @typedef {import('./Separator.types').Props} SeparatorProps - Props du composant Separator
 * @constant {import('./Separator.types').DEFAULTS} DEFAULTS - Valeurs par défaut du composant
 * @constant {import('./Separator.types').SHOWCASE} SHOWCASE - Configuration de démonstration
 * 
 * @see {@link Props} pour la définition détaillée des propriétés
 * @see {@link DEFAULTS} pour les valeurs par défaut
 * @see {@link SHOWCASE} pour les valeurs de démonstration
 */
export type { Props as SeparatorProps } from './Separator.types';
export { DEFAULTS, SHOWCASE } from './Separator.types';