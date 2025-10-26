/**
 * @file Hook useDevice - Hook personnalisé pour accéder au Device Context
 * @module context/Device/useDevice
 * @version 1.0.0
 * @since 2025-10-26
 * @author Seb-Prod
 */

import { useContext } from 'react';
import { DeviceContext } from './Device.context';

/**
 * Hook personnalisé pour accéder aux informations de l'appareil.
 * 
 * @throws {Error} Si utilisé en dehors d'un DeviceProvider
 * 
 * @returns {DeviceContextType} Informations sur l'appareil et la taille d'écran
 * 
 * @example
 * const { isMobile, deviceType, width } = useDevice();
 * 
 * if (isMobile) {
 *   return <MobileLayout />;
 * }
 */
export const useDevice = () => {
  const context = useContext(DeviceContext);
  
  if (context === undefined) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  
  return context;
};