/**
 * @file Point d'entrée global pour les composants de layout
 * @module components/layout
 * @version 1.0.0
 * @since 2025-11-05
 * @author Seb-Prod
 *
 * Ce module regroupe et réexporte les composants principaux de la mise en page :
 * - `Page` : composant racine de la structure de page
 * - `Sidebar` : menu latéral
 * - `Navbar` : barre de navigation
 * - `Modal` : fenêtre modale (optionnelle si tu veux l’ajouter ici)
 */

export { default as Page } from './Page';
export { default as Sidebar } from './Sidebar';
export { default as Navbar } from './Navbar';
export { Modal } from './Modal';
export { Footer } from './Footer';