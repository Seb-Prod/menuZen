/**
 * @file Device Provider - Fournisseur du Device Context
 * @module context/Device/Device.provider
 * @version 1.1.0
 * @since 2025-10-26
 * @author Seb-Prod
 */

import { useState, useEffect, type ReactNode } from 'react';
import { DeviceContext } from './Device.context'
import { DEVICE_DEFAULTS, type DeviceContextType, type DeviceType } from './Device.types';

interface DeviceProviderProps {
  children: ReactNode;
}

/**
 * Extension de Navigator pour supporter la propriété standalone (iOS)
 */
interface NavigatorStandalone extends Navigator {
  standalone?: boolean;
}

/**
 * Provider du Device Context.
 * 
 * Détecte automatiquement le type d'appareil, le mode PWA et met à jour les informations
 * lors du redimensionnement de la fenêtre.
 * 
 * @component
 * @example
 * <DeviceProvider>
 *   <App />
 * </DeviceProvider>
 */
export const DeviceProvider = ({ children }: DeviceProviderProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  /**
   * Détermine le type d'appareil en fonction de la largeur d'écran.
   */
  const getDeviceType = (width: number): DeviceType => {
    if (width < DEVICE_DEFAULTS.breakpoints.mobile) return 'mobile';
    if (width < DEVICE_DEFAULTS.breakpoints.tablet) return 'tablet';
    return 'desktop';
  };

  /**
   * Détecte si l'application tourne en mode PWA (Progressive Web App).
   * Vérifie plusieurs indicateurs pour une détection cross-platform.
   */
  const detectPWA = (): boolean => {
    // Détection principale : display-mode standalone
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
    
    // iOS Safari (ancienne méthode)
    const isIOSStandalone = (window.navigator as NavigatorStandalone).standalone === true;
    
    // Android Chrome
    const isAndroidStandalone = document.referrer.includes('android-app://');
    
    return isStandaloneMode || isIOSStandalone || isAndroidStandalone;
  };

  /**
   * Détecte si l'application est en mode standalone (installée).
   * Alias plus explicite de detectPWA.
   */
  const isStandalone = detectPWA();

  const deviceType = getDeviceType(width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value: DeviceContextType = {
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    isMobilePWA:deviceType === 'mobile' && isStandalone,
    isPWA: isStandalone,
    isStandalone,
    width,
    height
  };

  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
};