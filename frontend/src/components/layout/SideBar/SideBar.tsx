/**
 * @file Composant SideBar.
 * @module components/layout/SideBar
 */

import { useState, type JSX } from "react";
import styles from './SideBar.module.css';
import MenuToggle from "@/components/ui/MenuToggle";
import { SIDEBAR_DEFAULTS, type SideBarProps } from "./SideBar.types";
import { classNames } from "@/utils/object";

/**
 * Composant SideBar - Barre latérale pliable avec bouton de basculement.
 * 
 * Affiche une barre latérale qui peut être ouverte ou fermée via un bouton MenuToggle.
 * Le contenu de la barre latérale est masqué lorsqu'elle est fermée et affiché lorsqu'elle est ouverte.
 * 
 * @component
 * @version 1.0.0
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
 * @example
 * // Barre latérale avec icône flèche et sans variante de couleur
 * <SideBar type="arrow" variant="none">
 *   <div>Contenu personnalisé</div>
 * </SideBar>
 * 
 * @see {@link SideBarProps}
 * @see {@link SIDEBAR_DEFAULTS}
 * @see {@link MenuToggle}
 */
const SideBar = ({
    children,
    type = SIDEBAR_DEFAULTS.type,
    variant = SIDEBAR_DEFAULTS.variant
}: SideBarProps): JSX.Element => {
    // État local pour gérer l'ouverture/fermeture de la barre latérale
    const [menuOpen, setMenuOpen] = useState(false);

    /**
     * Gestionnaire pour basculer l'état d'ouverture de la barre latérale.
     */
    const handleToggle = () => {
        setMenuOpen(prev => !prev);
    };

    // Construction des classes CSS
    const classes = classNames(
        styles.sideBar,
        `component-${variant}`,
    );

     const asideClasses = classNames(
        styles.aside,
        menuOpen && styles.asideOpen
    );

    return (
        <div className={classes}>
            <aside className={asideClasses}>
                {children}
            </aside>
            <div className={styles.toggle}>
                <MenuToggle
                    isOpen={menuOpen}
                    onClick={handleToggle}
                    type={type}
                    variant={variant}
                    size="small"
                />
            </div>
        </div>
    );
};

export default SideBar;