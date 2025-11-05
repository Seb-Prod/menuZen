/**
 * @file Composant NavItem.
 * @module components/layout/Navbar/NavItem
 */

import type { JSX } from "react";
import { Link } from "react-router-dom";
import { classNames } from "@/utils/object";
import { useActiveRoute } from "@/hooks/useActiveRoute";
import { DEFAULTS, type Props } from "./NavItem.types";
import styles from "./NavItem.module.css";
import { useDevice } from "@/context/Device";

/**
 * Composant **NavItem** – Élément de navigation cliquable.
 * 
 * Affiche un lien de navigation avec une icône optionnelle et un label.
 * Détecte automatiquement si la route est active pour appliquer un style différent.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {RouteValue} props.to - Chemin de la route vers laquelle naviguer.
 * @param {IconType} [props.icon] - Icône à afficher (composant react-icons).
 * @param {string} props.label - Texte du lien de navigation.
 * @param {UiVariant} [props.variant='primary'] - Style du NavItem (primary, secondary, error, success, info, neutral).
 * @param {UiSize} [props.size='medium'] - Taille du NavItem (xs, small, medium, large, xl, 2xl).
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires.
 * 
 * @returns {JSX.Element} Élément de navigation cliquable.
 * 
 * @example
 * // NavItem simple avec icône
 * <NavItem 
 *   to="/home" 
 *   icon={FaHome} 
 *   label="Accueil" 
 * />
 * 
 * @example
 * // NavItem avec style et taille personnalisés
 * <NavItem 
 *   to="/planning" 
 *   icon={FaCalendarAlt} 
 *   label="Planning"
 *   variant="success"
 *   size="large"
 * />
 * 
 * @example
 * // NavItem sans icône
 * <NavItem 
 *   to="/about" 
 *   label="À propos" 
 * />
 * 
 * @see {@link Props}
 * @see {@link DEFAULTS}
 * @see {@link useActiveRoute}
 */
const NavItem = (inputProps: Props): JSX.Element => {
    const { to, icon: Icon, label, variant, size, className } = { 
        ...DEFAULTS, 
        ...inputProps 
    };

    const isActive = useActiveRoute(to);
    const { isMobilePWA, isMobile } = useDevice();

    const classes = classNames(
        styles.navItem,
        isMobilePWA && styles.navItemMobilePWA,
        isActive && styles.active,
        `component-${variant}`,
        `component-${size}`,
        className
    );

    return (
        <Link to={to} className={classes} data-mobile={!isMobilePWA && isMobile}>
            {isMobilePWA && Icon && <Icon className={styles.icon} />}
            <span>{label}</span>
        </Link>
    );
};

export default NavItem;