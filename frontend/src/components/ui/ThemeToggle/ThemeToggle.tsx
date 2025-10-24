/**
 * @file Composant ThemeToggle.
 * @module components/ui/ThemeToggle
 */

import type { JSX } from 'react';
import styles from './ThemeToggle.module.css';

import { 
  THEMETOGGLE_DEFAULTS, 
  type ThemeToggleProps 
} from './ThemeToggle.types'; 

// Importation du Hook de gestion de la logique
import { useThemeManager } from './useThemeManager'; 

// Importation du composant Switch
import Switch from '../Switch/Switch';

/**
 * Composant ThemeToggle - Un interrupteur à deux niveaux pour gérer le thème couleur (Clair/Sombre) de l'application.
 * Il délègue toute la logique d'état et de synchronisation au Hook `useThemeManager`.
 * Utilise le composant Switch pour les interrupteurs.
 * 
 * @component
 * @param {ThemeToggleProps} props - Les propriétés du composant.
 * @returns {JSX.Element} Le composant d'interface utilisateur pour basculer le thème.
 */
const ThemeToggle = ({
  initialTheme = THEMETOGGLE_DEFAULTS.initialTheme,
  onChange,
}: ThemeToggleProps): JSX.Element => {
    
  // **UTILISATION DU HOOK**
  const {
    modeTheme,
    themeSysteme,
    handleMasterToggle,
    handleSecondaryToggle,
  } = useThemeManager(initialTheme, onChange);

  const estForce = modeTheme !== 'auto';
  // const themeAffiche = estForce ? modeTheme : themeSysteme;
  const labelModeTheme = estForce ? 'Manuel' : 'Auto';

  return (
    <div className={styles.container}>
      {/* Interrupteur Principal: Auto / Manuel */}
      <div className={styles.switchWrapper}>
        <Switch
          id="master-toggle-switch"
          label={`${labelModeTheme} :`}
          checked={estForce}
          onChange={handleMasterToggle}
          variant="primary"
          size="medium"
        />
      </div>

      {/* Contrôle Secondaire: Clair / Sombre ou Affichage Auto */}
      <div className={styles.secondaryControl}>
        {estForce ? (
          <Switch
            id="secondary-toggle-switch"
            label={modeTheme === 'light' ? 'Clair ☀️' : 'Sombre 🌙'}
            checked={modeTheme === 'dark'}
            onChange={handleSecondaryToggle}
            variant={modeTheme === 'dark' ? 'neutral' : 'info'}
            size="medium"
          />
        ) : (
          <div className={styles.autoDisplay}>
            <span className={styles.labelTitle}>Système :</span>
            <span
              className={styles.systemThemeIndicator}
              data-system-theme={themeSysteme}
            >
              {themeSysteme === 'light' ? ' Clair ☀️' : ' Sombre 🌙'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;