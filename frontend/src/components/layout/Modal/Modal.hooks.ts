/**
 * @file Hooks personnalisés pour la Navbar
 * @module components/layout/Modal.hooks
 * 
 * @description
 * Ce module regroupe des hooks réutilisables permettant :
 * - de fermer une modal lors d’un clic en dehors (`useClickOutside`)
 * - de gérer l’animation d'ouverture et fermeture de la modal
 * 
 * @version 1.0.0
 * @since 2025-11-05
 * @author Seb-Prod
 */

import { useEffect, useState, type RefObject } from 'react';

/**
 * Hook permettant de détecter un clic en dehors d’un élément (ex : modal ou menu)
 * et d’appeler une fonction de fermeture.
 *
 * @param {boolean} isOpen - Indique si la modal est actuellement ouverte.
 * @param {RefObject<HTMLDivElement | null>} ref - Référence vers l’élément principal (la modal ou le menu).
 * @param {RefObject<HTMLElement | null> | null} excludeRef - Référence optionnelle d’un élément à ignorer (ex : bouton toggle).
 * @param {() => void} onClose - Fonction appelée lorsqu’un clic en dehors est détecté.
 *
 * @example
 * const modalRef = useRef<HTMLDivElement>(null);
 * const toggleRef = useRef<HTMLButtonElement>(null);
 * useClickOutside(isOpen, modalRef, toggleRef, () => setIsOpen(false));
 */
export const useClickOutside = (
    isOpen: boolean,
    ref: RefObject<HTMLDivElement | null>,
    excludeRef: RefObject<HTMLElement | null> | null,
    onClose: () => void
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!ref.current) return;
            const target = event.target as Node;

            // Vérifie si le clic est à l’extérieur de la modal
            const clickedOutsideModal = !ref.current.contains(target);

            // Vérifie si le clic provient du bouton d’ouverture (toggle)
            const clickedOnToggle = excludeRef?.current?.contains(target);

            // Si le clic est en dehors et non sur le toggle, on ferme la modal
            if (clickedOutsideModal && !clickedOnToggle) {
                onClose();
            }
        };

        // Active le listener uniquement quand la modal est ouverte
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Nettoie l’écouteur à la fermeture ou au démontage du composant
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, ref, excludeRef, onClose]);
};

/**
 * Hook gérant l'affichage réel d'une modal/menu pour permettre
 * une animation de sortie (déclenchée par l'état `isOpen` passant à `false`).
 *
 * Maintient la visibilité (isModalVisible) à 'true' tant que 'isOpen' est 'true'.
 * Lorsque 'isOpen' passe à 'false', il maintient 'isModalVisible' à 'true'
 * pendant une durée spécifiée (animationDurationMs) avant de passer à 'false'.
 *
 * @param {boolean} isOpen - L'état d'ouverture logique (fourni par `useNavbarToggle`).
 * @param {number} animationDurationMs - La durée de l'animation CSS de sortie en millisecondes.
 * @returns {boolean} L'état de visibilité réel pour le rendu du composant.
 *
 * @example
 * const { isOpen } = useNavbarToggle();
 * const isModalVisible = useModalVisibilityWithAnimation(isOpen, 300);
 * {isModalVisible && <Modal className={isOpen ? 'animate-in' : 'animate-out'} />}
 */
export const useModalVisibilityWithAnimation = (
    isOpen: boolean,
    animationDurationMs: number
): boolean => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Ouvrir immédiatement (dès que isOpen devient true)
            setIsModalVisible(true);
        } else {
            // Fermer avec un délai (pour l'animation de sortie)
            const timeout = setTimeout(() => {
                setIsModalVisible(false);
            }, animationDurationMs);

            // Nettoyage : annuler le timeout si l'état change ou le composant se démonte
            return () => clearTimeout(timeout);
        }
    }, [isOpen, animationDurationMs]);

    return isModalVisible;
};
