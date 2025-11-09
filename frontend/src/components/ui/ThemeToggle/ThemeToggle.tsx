/**
 * @file Composant ThemeToggle.
 * @module components/ui/ThemeToggle
 */

import { type JSX } from 'react';

// --- Utils & hooks ---
import { useThemeManager } from './ThemeToggle.hooks';

// --- UI Components ---
import { Heading, Switch, Text } from '@/components/ui';

// --- Types & constants ---
import {
  DEFAULTS,
  type Props
} from './ThemeToggle.types';

// --- Styles ---
import styles from './ThemeToggle.module.css';


/**
 * Composant **ThemeToggle** – Interrupteur de gestion du thème de l'application.
 *
 * Permet à l'utilisateur de basculer entre :
 * - Mode automatique (suit les préférences système)
 * - Mode manuel (light/dark forcé)
 *
 * Utilise un système à deux niveaux :
 * 1. Switch principal : Auto/Manuel
 * 2. Switch secondaire : Clair/Sombre (uniquement en mode manuel)
 *
 * Toute la logique d'état et de synchronisation est déléguée au hook `useThemeManager`.
 *
 * @component
 * @version 1.0.0
 * @since 2025-11-06
 * @author Seb-Prod
 *
 * @param {ThemeToggleProps} props - Les propriétés du composant.
 * @param {ModeTheme} [props.initialTheme='auto'] - Le mode de thème initial.
 * @param {(theme: ModeTheme) => void} [props.onChange] - Callback appelé lors d'un changement de thème.
 *
 * @returns {JSX.Element} Interface de contrôle du thème avec deux interrupteurs.
 *
 * @example
 * // Utilisation simple
 * <ThemeToggle />
 *
 * @example
 * // Avec thème initial et callback
 * <ThemeToggle 
 *   initialTheme="dark"
 *   onChange={(theme) => console.log('Nouveau thème:', theme)}
 * />
 *
 * @see {@link Switch}
 * @see {@link useThemeManager}
 */
const ThemeToggle = ({
  initialTheme = DEFAULTS.initialTheme,
  onChange,
}: Props): JSX.Element => {
  // --- Hooks principaux ---
  const {
    modeTheme,
    themeSysteme,
    handleMasterToggle,
    handleSecondaryToggle,
  } = useThemeManager(initialTheme, onChange);

  // --- Données dérivées ---
  const estForce = modeTheme !== 'auto';
  const labelModeTheme = estForce ? 'Manuel' : 'Automatique';

  // Thème actuellement APPLIQUÉ (affiché à l'utilisateur)
  const themeActif = estForce ? modeTheme : themeSysteme;
  const labelThemeActif = themeActif === 'light' ? 'Clair ☀️' : 'Sombre 🌙';

  return (
    <div className={styles.container}>
      {/* Interrupteur principal : Auto / Manuel */}
      <Heading as="h4" justify='center'>Apparence et Thème</Heading>
      <div className={styles.switchWrapper}>
        <Text>Mode : {labelModeTheme}</Text>
        <Switch
          id="master-toggle-switch"
          checked={estForce}
          onChange={handleMasterToggle}
          variant="primary"
          size="small"
        />
      </div>
      {/* Interrupteur secondaire : Clair / Sombre (uniquement en mode Manuel) */}
      <div className={styles.switchWrapper}>
        {/* Affiche le thème actif, et indique si c'est le thème système en mode Auto */}
        <Text>Thème actuel : {labelThemeActif}</Text>
        <Switch
          id="secondary-toggle-switch"
          checked={modeTheme === 'dark'}
          onChange={handleSecondaryToggle}
          variant="primary"
          size="small"
          disabled={!estForce}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;