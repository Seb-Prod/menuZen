/**
 * @file Device Context - Contexte pour la gestion du type d'appareil
 * @module context/Device/Device.context
 * @version 1.0.0
 * @since 2025-10-26
 * @author Seb-Prod
 */

import { createContext } from 'react';
import type { DeviceContextType } from './Device.types';

/**
 * Contexte pour la gestion du type d'appareil.
 * Fournit des informations sur la taille d'écran et le type d'appareil (mobile/tablet/desktop).
 */
export const DeviceContext = createContext<DeviceContextType | undefined>(undefined);