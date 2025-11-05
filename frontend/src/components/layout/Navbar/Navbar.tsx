/**
 * @file Composant Navbar.
 * @module components/layout/Navbar
 */

import { useMemo, useRef, type JSX } from "react";

// --- Core & context ---
import { useDevice } from "@/context/Device";

// --- Utils & hooks ---
import { classNames } from "@/utils/object";
import { useClickOutside, useCloseOnDesktop, useModalVisibilityWithAnimation, useNavbarToggle } from "./Navbar.hooks";

// --- UI Components ---
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui";
import MenuToggle from "@/components/ui/MenuToggle";
import Modal from "../Modal";
import NavItem from "./NavItem";

// --- Styles & routes ---
import styles from "./Navbar.module.css";
import { getWebNavItems } from "@/routes";

/**
 * Composant **Navbar** – Barre de navigation principale (desktop/web).
 *
 * Affiche la liste des liens de navigation pour le mode web/desktop.
 * Récupère automatiquement les éléments de navigation configurés pour le mode web
 * et affiche un NavItem pour chacun d'eux.
 *
 * @component
 * @version 1.1.0
 * @since 2025-11-03
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
 *     <Navbar />
 *   </header>
 * );
 *
 * @see {@link NavItem}
 * @see {@link getWebNavItems}
 */
const Navbar = (): JSX.Element => {
  // --- Contexte & hooks principaux ---
  const { isMobile, isMobilePWA } = useDevice();
  const { isOpen, toggle, close } = useNavbarToggle();
  const isModalVisible = useModalVisibilityWithAnimation(isOpen, 300);

  // --- Données & références ---
  const navItems = useMemo(() => getWebNavItems(), []);
  const modalRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  // --- Classes dynamiques ---
  const classes = classNames(styles.navbar, "bg-brand-primary");
  const classesNavItems = classNames(styles.navItems, isMobilePWA && styles.navItemsPWA);

  // --- Gestion fermeture du menu ---
  useClickOutside(isOpen, modalRef, toggleButtonRef, close);
  useCloseOnDesktop(isMobile, isMobilePWA, close);

  // --- Mode mobile (non PWA) ---
  if (isMobile && !isMobilePWA) {
    return (
      <header>
        <nav className={classes}>
          <Logo />
          <div ref={toggleButtonRef}>
            <MenuToggle type="burger" isOpen={isOpen} onClick={toggle} />
          </div>

          {isModalVisible && (
            <Modal ref={modalRef} onClose={close} origin="top" isClosing={!isOpen} variant="surface-primary">
              <div className={classesNavItems} data-mobile={isMobile}>
                {navItems.map((item) => (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    variant="primary"
                  />
                ))}
              </div>
            </Modal>
          )}
        </nav>
      </header>

    );
  }

  // --- Mode desktop ou PWA ---
  return (
    <header>
      <nav className={classes} data-mobile={isMobilePWA}>
        {!isMobilePWA && <Logo />}

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

          {!isMobilePWA && (
            <Button mode="ghost" variant="neutral">
              Apparence
            </Button>
          )}
        </div>
      </nav>
    </header>

  );
};

export default Navbar;