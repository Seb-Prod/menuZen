/**
 * @file Définition des types pour le Device Context
 * @module context/Device/Device.types
 * @version 1.0.0
 * @since 2025-10-26
 * @author Seb-Prod
 */

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
}

export interface DeviceContextType {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isPWA: boolean;
  isMobilePWA: boolean;
  isStandalone: boolean;
  width: number;
  height: number;
}

export const DEVICE_DEFAULTS = {
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1440
  }
} as const;