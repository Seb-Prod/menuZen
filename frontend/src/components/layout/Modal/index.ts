/**
 * @file Point d'entrée pour le composant Modal
 * @module components/layout/Modal
 * @version 1.0.0
 * @since 2025-11-05
 * @author Seb-Prod
 *
 * Ce module centralise les exports liés à la Modal :
 * - Le composant principal `Modal`
 * - Les hooks personnalisés (`useClickOutside`, `useModalVisibilityWithAnimation`)
 */

export { default as Modal} from "./Modal";
export type { Props as ModalProps } from './Modal.types'
export { useClickOutside, useModalVisibilityWithAnimation } from './Modal.hooks'