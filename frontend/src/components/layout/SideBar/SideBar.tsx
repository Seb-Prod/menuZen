/**
 * @file Composant SideBar.
 * @module components/layout/SideBar
 */

import { useState, useEffect, useRef, type JSX } from "react";
import styles from './SideBar.module.css';
import MenuToggle from "@/components/ui/MenuToggle";
import { DEFAULTS, type Props } from './SideBar.types';
import { classNames } from "@/utils/object";
import { useDevice } from "@/context/Device";

/**
 * Composant SideBar - Barre latérale pliable avec bouton de basculement.
 * 
 * Affiche une barre latérale qui peut être ouverte ou fermée via un bouton MenuToggle.
 * En mode mobile, la sidebar devient un overlay qui se superpose au contenu.
 * Le contenu de la barre latérale est masqué lorsqu'elle est fermée et affiché lorsqu'elle est ouverte.
 * 
 * @component
 * @version 1.1.0
 * @since 2025-10-26
 * @author Seb-Prod
 * 
 * @param {SideBarProps} props - Les propriétés du composant.
 * @param {React.ReactNode} [props.children] - Contenu à afficher dans la barre latérale (menu, navigation, etc.).
 * @param {SideBarType} [props.type='chevron'] - Type d'icône du bouton de basculement (burger, arrow, chevron).
 * @param {SideBarVariant} [props.variant='primary'] - Schéma de couleur de la barre latérale (primary, secondary, warning, neutral, none).
 * 
 * @returns {JSX.Element} L'élément barre latérale React (JSX).
 * 
 * @example
 * // Barre latérale simple avec contenu de navigation
 * <SideBar>
 *   <nav>
 *     <a href="/accueil">Accueil</a>
 *     <a href="/profil">Profil</a>
 *   </nav>
 * </SideBar>
 * 
 * @example
 * // Barre latérale avec icône de type burger et variante secondaire
 * <SideBar type="burger" variant="secondary">
 *   <ul>
 *     <li>Option 1</li>
 *     <li>Option 2</li>
 *     <li>Option 3</li>
 *   </ul>
 * </SideBar>
 * 
 * @see {@link SideBarProps}
 * @see {@link SIDEBAR_DEFAULTS}
 * @see {@link MenuToggle}
 */
const SideBar = (inputProps: Props): JSX.Element => {
    const { children, type, variant, variantToggleMenu } = { ...DEFAULTS, ...inputProps };
    const { isMobile } = useDevice();
    const [menuOpen, setMenuOpen] = useState(!isMobile);
    const sidebarRef = useRef<HTMLDivElement>(null);

    /**
     * Gestionnaire pour basculer l'état d'ouverture de la barre latérale.
     */
    const handleToggle = () => {
        setMenuOpen(prev => !prev);
    };

    /**
     * Ferme la sidebar
     */
    const closeSidebar = () => {
        setMenuOpen(false);
    };

    /**
     * Gestion du clic extérieur pour fermer la sidebar en mode mobile
     */
    useEffect(() => {
        if (!isMobile || !menuOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                closeSidebar();
            }
        };

        // Petit délai pour éviter que le clic d'ouverture ne ferme immédiatement
        const timeoutId = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile, menuOpen]);

    // Construction des classes CSS
    const classes = classNames(
        styles.sideBar,
        `bg-${variant}`,
        isMobile && styles.sideBarMobile
    );

    const asideClasses = classNames(
        styles.aside,
        menuOpen && styles.asideOpen,
        isMobile && styles.asideMobile,
        isMobile && menuOpen && styles.asideMobileOpen
    );

    const overlayClasses = classNames(
        styles.overlay,
        isMobile && menuOpen && styles.overlayVisible
    );

    return (
        <>
            {/* Overlay sombre en arrière-plan (mobile uniquement) */}
            {isMobile && <div className={overlayClasses} onClick={closeSidebar} />}
            
            <div className={classes} ref={sidebarRef}>
                <aside className={asideClasses}>
                    {children}
                </aside>
                <div className={styles.toggle}>
                    <MenuToggle
                        isOpen={menuOpen}
                        onClick={handleToggle}
                        type={type}
                        variant={variantToggleMenu}
                        size="small"
                    />
                </div>
            </div>
        </>
    );
};

export default SideBar;