/**
 * @file Constantes pour le composant ChevronIcon
 * @module components/ui/ChevronIcon/constants
 * @description
 * Collection des icônes SVG utilisées par le composant ChevronIcon. Chaque icône est pré-définie pour faciliter la maintenance et la réutilisation
 * 
 * @version 1.0.0
 * @since 2025-11-12
 * @author Seb-Prod
 * 
 * @see {@link ChevronIcon} pour l'implémentation du composant principal.
 */

export const CHEVRON_ICONS = {
  /**
   * Icône chevron classique (v inversé)
   */
  chevron: (
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  /**
   * Icône flèche vers le bas
   */
  arrow: (
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M6 2V10M6 10L3 7M6 10L9 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  /**
   * Icône triangle rempli
   */
  triangle: (
    <svg viewBox="0 0 12 12" fill="currentColor">
      <path d="M6 8L2 4H10L6 8Z" />
    </svg>
  ),

  /**
   * Icône plus (+) - État fermé
   */
  plus: (
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M6 2V10M2 6H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),

  /**
   * Icône moins (-) - État ouvert
   */
  minus: (
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),

  /**
   * Icône trois points verticaux (⋮)
   */
  dotsVertical: (
    <svg viewBox="0 0 12 12" fill="currentColor">
      <circle cx="6" cy="2" r="1" />
      <circle cx="6" cy="6" r="1" />
      <circle cx="6" cy="10" r="1" />
    </svg>
  ),

  /**
   * Icône trois points horizontaux (⋯)
   */
  dotsHorizontal: (
    <svg viewBox="0 0 12 12" fill="currentColor">
      <circle cx="2" cy="6" r="1" />
      <circle cx="6" cy="6" r="1" />
      <circle cx="10" cy="6" r="1" />
    </svg>
  ),
} as const;

/**
 * Type pour les clés des icônes disponibles
 */
export type ChevronIconKey = keyof typeof CHEVRON_ICONS;