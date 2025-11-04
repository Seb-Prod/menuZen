/**
 * @file Composant Navbar.
 * @module components/layout/Navbar
 */

import type { JSX } from "react";
import { getWebNavItems } from '@/routes';
import NavItem from './NavItem';
import styles from "./navbar.module.css";
import { useDevice } from "@/context/Device";
import { classNames } from "@/utils/object";
import Logo from "@/components/ui/Logo";

/**
 * Composant **Navbar** – Barre de navigation principale (desktop/web).
 * 
 * Affiche la liste des liens de navigation pour le mode web/desktop.
 * Récupère automatiquement les éléments de navigation configurés pour le mode web
 * et affiche un NavItem pour chacun d'eux.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} Barre de navigation avec les liens configurés.
 * 
 * @example
 * // Utilisation simple dans un Header
 * <Navbar />
 * 
 * @example
 * // Dans un layout
 * const Header = () => (
 *   <header>
 *     <Logo />
 *     <Navbar />
 *   </header>
 * );
 * 
 * @see {@link NavItem}
 * @see {@link getWebNavItems}
 */
const Navbar = (): JSX.Element => {
    const { isMobilePWA , isMobile } = useDevice();
    const navItems = getWebNavItems();

    const classes = classNames(
        styles.navbar,
        'bg-brand-primary'
    )
    
   if(isMobile && !isMobilePWA){
    return(
        <div className={classes}>
            <span>test</span>
        </div>
    )
   }

    return (
        <nav className={classes} data-mobile={isMobilePWA}>
            <Logo/>
            {navItems.map((item) => (
                <NavItem 
                    key={item.to}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    variant="primary"
                />
            ))}
        </nav>
    );
};

export default Navbar;