/**
 * @file Hooks personnalisés pour la Navbar
 * @module components/layout/Navbar.hooks
 * 
 * Ce module regroupe des hooks réutilisables permettant :
 * - de fermer la modal lors du passage en mode desktop (`useCloseOnDesktop`)
 * - de gérer l’état d’ouverture de la Navbar mobile (`useNavbarToggle`)
 */

import { useCallback, useEffect, useState } from 'react';

/**
 * Hook permettant de fermer la modal automatiquement
 * lors du passage en mode desktop.
 *
 * Utile lorsque la Navbar passe d’une version mobile (menu burger)
 * à une version desktop (menu horizontal visible en permanence).
 *
 * @param {boolean} isMobile - Indique si l’affichage est mobile.
 * @param {boolean} isMobilePWA - Indique si on est en mode PWA mobile (ne pas fermer dans ce cas).
 * @param {() => void} onClose - Fonction appelée pour fermer la modal.
 *
 * @example
 * useCloseOnDesktop(isMobile, isMobilePWA, closeMenu);
 */
export const useCloseOnDesktop = (
    isMobile: boolean,
    isMobilePWA: boolean,
    onClose: () => void
) => {
    useEffect(() => {
        // Ferme la modal dès qu’on passe en mode desktop (ou non mobile)
        // sauf si on est dans un environnement PWA mobile
        if (!isMobile || isMobilePWA) {
            onClose();
        }
    }, [isMobile, isMobilePWA, onClose]);
};

/**
 * Hook gérant l’état d’ouverture de la Navbar (menu burger).
 *
 * Fournit des fonctions pour :
 * - ouvrir/fermer la Navbar via `toggle`
 * - fermer explicitement via `close`
 *
 * @returns {{ isOpen: boolean, toggle: () => void, close: () => void }}
 * Un objet contenant :
 * - `isOpen`: état d’ouverture du menu
 * - `toggle`: fonction pour basculer l’état
 * - `close`: fonction pour forcer la fermeture
 *
 * @example
 * const { isOpen, toggle, close } = useNavbarToggle();
 * <button onClick={toggle}>Menu</button>
 * {isOpen && <NavbarMenu onClose={close} />}
 */
export const useNavbarToggle = (): {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
} => {
    const [isOpen, setIsOpen] = useState(false);

    // Bascule l’état d’ouverture/fermeture
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    // Force la fermeture
    const close = useCallback(() => setIsOpen(false), []);

    return { isOpen, toggle, close };
};