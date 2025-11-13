/**
 * @file Point d'entrée pour le composant Modal
 * @module components/layout/Modal
 * @description
 * Barrel file qui exporte le composant Modal, types, constantes et configurations associées.
 * 
 * @version 1.0.0
 * @since 2025-11-05
 * @author Seb-Prod
 */

export { default as Modal} from "./Modal";
export type { Props as ModalProps } from './Modal.types';
export { DEFAULTS, POSITION } from "./Modal.types"
export { useClickOutside, useModalVisibilityWithAnimation } from './Modal.hooks';