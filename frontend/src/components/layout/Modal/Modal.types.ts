/**
 * @file Définition des types, constantes et valeurs par défaut du composant Modal
 * @module components/layout/Modal.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes, les valeurs par défaut et les configurations pour le composant Modal.
 *
 * @version 1.0.0
 * @since 2025-11-05
 * @author Seb-Prod
 *
 * @see {@link Modal} pour l'implémentation du composant principal.
 */

import type { ReactNode } from "react";
// Assumons que le type LayoutVariant est défini ici ou importé
import type { LayoutVariant } from "../layout.types";

// ================================
// Constantes
// ================================

/**
 * Constantes des différentes positions/directions pour l'origine et le placement de la modale.
 * @constant
 */
export const POSITION = [
    "top",
    "bottom",
    "left",
    "right",
    "center",
] as const;


// ================================
// Types
// ================================

/**
 * Type représentant une position possible pour la modale.
 * @typedef {('top'|'bottom'|'left'|'right'|'center')} Position
 */
export type Position = typeof POSITION[number];

// ================================
// Props des composants
// ================================

/**
 * Propriétés du composant Modal.
 *
 * @typedef {Object} Props
 * @property {Position} [origin] - Point d'origine de l'animation d'ouverture/fermeture.
 * @property {LayoutVariant} [variant] - Thème/couleur de fond de la modale.
 * @property {ReactNode} [children] - Contenu à afficher dans la modale.
 * @property {() => void} [onClose] - Fonction de rappel pour la fermeture de la modale.
 * @property {boolean} [isClosing] - Indicateur pour déclencher l'animation de fermeture.
 * @property {boolean} [fullScreen] - Active le mode plein écran.
 * @property {Position} [position] - Positionnement de la modale dans l'écran.
 */
export type Props = {
    origin?: Position;
    variant?: LayoutVariant
    children?: ReactNode;
    onClose?: () => void;
    isClosing?: boolean;
    fullScreen?: boolean;
    position?:Position;
}

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut pour le composant Modal.
 *
 * @constant
 * @type {Partial<Props>}
 */
export const DEFAULTS = {
    variant: "brand-primary" as LayoutVariant,
    origin: "center" as Position,
    position:"center" as Position,
    fullScreen: false,
} satisfies Partial<Props>;