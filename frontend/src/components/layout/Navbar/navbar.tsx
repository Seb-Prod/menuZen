/**
 * @file Composant Navbar.
 * @module components/layout/Navbar
 */

import { useState, type JSX } from "react";
import { getWebNavItems } from '@/routes';
import NavItem from './NavItem';
import styles from "./navbar.module.css";
import { useDevice } from "@/context/Device";
import { classNames } from "@/utils/object";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui";
import MenuToggle from "@/components/ui/MenuToggle";

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
    const { isMobilePWA, isMobile } = useDevice();
    const navItems = getWebNavItems();

    const classes = classNames(
        styles.navbar,
        'bg-brand-primary'
    )

    const classesNavItems = classNames(
        styles.navItems,
        isMobilePWA && styles.navItemsPWA
    )

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenNav = () => {
        setIsOpen(!isOpen);
    };

    if (isMobile && !isMobilePWA) {
        return (
            <div className={classes}>
                <Logo />
                <MenuToggle type="burger" isOpen={isOpen} onClick={handleOpenNav} />
            </div>
        )
    }

    return (
        <nav className={classes} data-mobile={isMobilePWA}>
            {!isMobilePWA && (<Logo />)}
            <div className={classesNavItems}>
                {navItems.map((item) => (
                    <NavItem
                        key={item.to}
                        to={item.to}
                        icon={item.icon}
                        label={item.label}
                        variant="primary"
                    />
                ))}
                {!isMobilePWA && (<Button mode="ghost" variant="neutral">Apparence</Button>)}
            </div>

        </nav>
    );
};

export default Navbar;