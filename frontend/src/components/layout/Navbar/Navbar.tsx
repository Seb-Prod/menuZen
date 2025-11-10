/**
 * @file Composant Navbar.
 * @module components/layout/Navbar
 */

import { useMemo, useRef, type JSX } from "react";

// --- Core & context ---
import { useDevice } from "@/context/Device";

// --- Utils & hooks ---
import { classNames } from "@/utils/object";
import { useCloseOnDesktop, useNavbarToggle, useToggleAparence } from "./Navbar.hooks";

// --- UI Components ---
import Logo from "@/components/ui/Logo";
import { Button, Separator, ThemeToggle, MenuToggle } from "@/components/ui";
import NavItem from "./NavItem";

// --- Styles & routes ---
import styles from "./Navbar.module.css";
import { getWebNavItems } from "@/routes";
import { Modal, useClickOutside, useModalVisibilityWithAnimation } from "../Modal";

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
 * <Navbar />
 *
 * @see {@link NavItem}
 * @see {@link getWebNavItems}
 */
const Navbar = (): JSX.Element => {
  // --- Contexte & hooks principaux ---
  const { isMobile, isMobilePWA } = useDevice();
  const { isOpen, toggle, close } = useNavbarToggle();
  const { isOpen: isOpenTheme, open: openTheme, close: closeTheme } = useToggleAparence();
  const isModalVisible = useModalVisibilityWithAnimation(isOpen, 300);
  const isThemeVisible = useModalVisibilityWithAnimation(isOpenTheme, 300);

  // --- Données & références ---
  const navItems = useMemo(() => getWebNavItems(), []);
  const menuModalRef = useRef<HTMLDivElement>(null);
  const themeModalRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  // --- Classes dynamiques ---
  const classes = classNames(styles.navbar, "bg-brand-primary");
  const classesNavItems = classNames(styles.navItems, isMobilePWA && styles.navItemsPWA);

  // --- Gestion fermeture du menu ---
  useClickOutside(isOpen, menuModalRef, toggleButtonRef, close);
  useClickOutside(isOpenTheme, themeModalRef, null, closeTheme);
  useCloseOnDesktop(isMobile, isMobilePWA, close);
  useCloseOnDesktop(isMobile, isMobilePWA, closeTheme);

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
            <Modal ref={menuModalRef} onClose={close} origin="left" position="top" isClosing={!isOpen} variant="surface-primary" fullScreen>
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
              <Separator spacing="medium"/>
              <ThemeToggle />
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
            <Button mode="ghost" variant="neutral" onClick={() => {
              // On n’agit que si la modale est totalement fermée
              if (!isOpenTheme && !isThemeVisible) {
                openTheme();
              } else if (isOpenTheme) {
                closeTheme();
              }
            }}
            >
              Apparence
            </Button>
          )}
          {isThemeVisible && (
            <Modal ref={themeModalRef} onClose={closeTheme} origin="center" isClosing={!isOpenTheme} variant="surface-primary">
              <ThemeToggle />
            </Modal>
          )}
        </div>
      </nav>
    </header>

  );
};

export default Navbar;