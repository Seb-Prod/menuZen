/**
 * @file Hooks personnalisés pour ThemeToggle
 * @module components/ui/ThemeToggle.hooks
 * @description
 * Ce module regroupe des hooks réutilisables permettant :
 * - de gérer le mode de thème de l'application (`useThemeManager`)
 * - de synchroniser le thème avec le système et localStorage
 * - de gérer les états des toggles de thème
 * 
 * @version 1.0.0
 * @since 2025-11-06
 * @author Seb-Prod
 */

import { useState, useEffect, useCallback } from 'react';
import { getThemeSysteme } from './ThemeToggle.utils';
import type { ModeTheme, ThemeForcee } from './ThemeToggle.types';

/**
 * Hook gérant la synchronisation du thème système.
 * 
 * Écoute les changements de préférence du système (dark/light mode)
 * et met à jour l'état en conséquence.
 * 
 * @returns {ThemeForcee} Le thème actuellement préféré par le système.
 * 
 * @example
 * const themeSysteme = useThemeSysteme();
 */
const useThemeSysteme = (): ThemeForcee => {
    const [themeSysteme, setThemeSysteme] = useState<ThemeForcee>(getThemeSysteme);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setThemeSysteme(e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return themeSysteme;
};

/**
 * Hook gérant la synchronisation inter-onglets et inter-instances.
 * 
 * Synchronise les changements de thème entre différents onglets/fenêtres
 * et différentes instances du composant dans la même page.
 * 
 * @param {React.Dispatch<React.SetStateAction<ModeTheme>>} setModeTheme - Fonction pour mettre à jour le thème.
 * 
 * @example
 * useThemeSync(setModeTheme);
 */
const useThemeSync = (setModeTheme: React.Dispatch<React.SetStateAction<ModeTheme>>) => {
    useEffect(() => {
        const syncTheme = () => {
            const saved = localStorage.getItem('themeMode');
            if (saved) setModeTheme(saved as ModeTheme);
        };

        // Synchronisation intra-onglet
        window.addEventListener('themeChange', syncTheme);
        // Synchronisation inter-onglets
        window.addEventListener('storage', syncTheme);

        return () => {
            window.removeEventListener('themeChange', syncTheme);
            window.removeEventListener('storage', syncTheme);
        };
    }, [setModeTheme]);
};

/**
 * Hook gérant toute la logique du gestionnaire de thème.
 * 
 * Fournit la logique complète de gestion du thème incluant :
 * - La persistance dans localStorage
 * - L'application du thème dans le DOM
 * - La synchronisation avec le système
 * - La gestion des thèmes forcés (light/dark)
 * - Les callbacks pour les toggles
 * 
 * @param {ModeTheme} initialTheme - Le mode de thème initial.
 * @param {(theme: ModeTheme) => void} [onChange] - Callback optionnel appelé lors d'un changement de thème.
 * 
 * @returns {{
 *   modeTheme: ModeTheme,
 *   setModeTheme: React.Dispatch<React.SetStateAction<ModeTheme>>,
 *   derniereThemeForcee: ThemeForcee,
 *   themeSysteme: ThemeForcee,
 *   handleMasterToggle: (isChecked: boolean) => void,
 *   handleSecondaryToggle: (isChecked: boolean) => void
 * }} Un objet contenant :
 * - `modeTheme`: le mode de thème actuel ('auto', 'light', ou 'dark')
 * - `setModeTheme`: fonction pour changer le mode
 * - `derniereThemeForcee`: le dernier thème forcé par l'utilisateur
 * - `themeSysteme`: le thème préféré par le système
 * - `handleMasterToggle`: fonction pour basculer entre auto et thème forcé
 * - `handleSecondaryToggle`: fonction pour basculer entre light et dark
 * 
 * @example
 * const {
 *   modeTheme,
 *   themeSysteme,
 *   handleMasterToggle,
 *   handleSecondaryToggle
 * } = useThemeManager('auto', (theme) => {
 *   console.log('Thème changé:', theme);
 * });
 */
export const useThemeManager = (
    initialTheme: ModeTheme,
    onChange?: (theme: ModeTheme) => void,
) => {
    // État du mode de thème (auto, light, dark)
    const [modeTheme, setModeTheme] = useState<ModeTheme>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('themeMode');
            return (saved as ModeTheme) || initialTheme;
        }
        return initialTheme;
    });

    // État du dernier thème forcé par l'utilisateur
    const [derniereThemeForcee, setDerniereThemeForcee] = useState<ThemeForcee>(() => {
        if (typeof window !== 'undefined') {
            const savedForced = localStorage.getItem('lastForcedTheme');
            return (savedForced as ThemeForcee) || 'light';
        }
        return 'light';
    });

    // Synchronisation avec le thème système
    const themeSysteme = useThemeSysteme();

    // Synchronisation inter-onglets et inter-instances
    useThemeSync(setModeTheme);

    // Persistance et application du thème dans le DOM
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('themeMode', modeTheme);

            if (modeTheme === 'auto') {
                document.documentElement.removeAttribute('data-theme');
            } else {
                document.documentElement.setAttribute('data-theme', modeTheme);
                if (modeTheme !== derniereThemeForcee) {
                    setDerniereThemeForcee(modeTheme);
                    localStorage.setItem('lastForcedTheme', modeTheme);
                }
            }

            // Événement personnalisé pour notifier les autres composants
            window.dispatchEvent(new Event('themeChange'));
        }

        onChange?.(modeTheme);
    }, [modeTheme, onChange, derniereThemeForcee]);

    // Bascule entre mode auto et thème forcé
    const handleMasterToggle = useCallback((isChecked: boolean) => {
        if (isChecked) {
            setModeTheme(derniereThemeForcee);
        } else {
            setModeTheme('auto');
        }
    }, [derniereThemeForcee]);

    // Bascule entre light et dark (en mode forcé)
    const handleSecondaryToggle = useCallback((isChecked: boolean) => {
        const nouvelleThemeForcee: ThemeForcee = isChecked ? 'dark' : 'light';
        setModeTheme(nouvelleThemeForcee);
    }, []);

    return {
        modeTheme,
        setModeTheme,
        derniereThemeForcee,
        themeSysteme,
        handleMasterToggle,
        handleSecondaryToggle,
    };
};