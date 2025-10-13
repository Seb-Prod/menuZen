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

/**
 * Composant ThemeToggle - Un interrupteur à deux niveaux pour gérer le thème couleur (Clair/Sombre) de l'application.
 * Il délègue toute la logique d'état et de synchronisation au Hook `useThemeManager`.
 * * @component
 * * @param {ThemeToggleProps} props - Les propriétés du composant.
 * * @returns {JSX.Element} Le composant d'interface utilisateur pour basculer le thème.
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
  const themeAffiche = estForce ? modeTheme : themeSysteme;
  const labelModeTheme = estForce ? 'Manuel' : 'Auto';

  // Fonctions de gestionnaires enveloppant les fonctions du Hook pour l'API React
  const masterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleMasterToggle(event.target.checked);
  }

  const secondaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSecondaryToggle(event.target.checked);
  }

  return (
    <div className={styles.container}>
      {/* Interrupteur Principal: Auto / Manuel */}
      <div className={styles.switchWrapper}>
        <label htmlFor="master-toggle-switch" className={styles.label}>
          <span className={styles.labelTitle}>{labelModeTheme} :</span>
          <input
            type="checkbox"
            id="master-toggle-switch"
            checked={estForce}
            onChange={masterChange} 
            className={styles.input}
          />
          <span
            className={styles.toggle}
            data-master-switch
            data-forced-theme={themeAffiche}
          >
            <span className={styles.circle}></span>
          </span>
        </label>
      </div>

      {/* Contrôle Secondaire: Clair / Sombre ou Affichage Auto */}
      <div className={styles.secondaryControl}>
        {estForce ? (
          <label htmlFor="secondary-toggle-switch" className={styles.label}>
            <span className={styles.labelTitle}>
              {modeTheme === 'light' ? 'Clair ☀️' : 'Sombre 🌙'}
            </span>
            <input
              type="checkbox"
              id="secondary-toggle-switch"
              checked={modeTheme === 'dark'}
              onChange={secondaryChange}
              className={styles.input}
            />
            <span
              className={styles.toggle}
              data-secondary-switch
              data-forced-theme={modeTheme}
              data-icon-state={modeTheme === 'light' ? 'light' : 'dark'}
            >
              <span className={styles.circle}></span>
            </span>
          </label>
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