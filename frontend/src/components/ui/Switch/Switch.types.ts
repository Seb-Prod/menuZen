/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Switch.types
 * @version 1.0.0
 * @since 2025-10-23
 * @see {@link Switch} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_ALIGN} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @author Seb-Prod
 */

import { 
  UI_ALIGN, 
  UI_DEFAULTS, 
  UI_SIZES, 
  UI_VARIANTS, 
  type UiAlign, 
  type UiSize, 
  type UiVariant 
} from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * États possibles d'un switch (activé/désactivé)
 */
export const SWITCH_STATES = ['checked', 'unchecked'] as const;

/**
 * Type pour l'état du switch
 */
export type SwitchState = (typeof SWITCH_STATES)[number];

/**
 * Type UiVariant sans la valeur 'link' (ou autre valeur à exclure)
 */
export type SwitchVariant = Exclude<UiVariant, 'link'>;

/**
 * Variantes disponibles pour le Switch (toutes sauf 'link')
 */
export const SWITCH_VARIANTS = UI_VARIANTS.filter(v => v !== 'error') as readonly SwitchVariant[];

// ================================
// Types
// ================================

/**
 * Fonction de callback appelée lors du changement d'état du switch
 * @param checked - Nouvel état du switch (true = activé, false = désactivé)
 */
export type SwitchChangeHandler = (checked: boolean) => void;

// ================================
// Props du composant
// ================================

/**
 * Propriétés du composant Switch
 */
export type SwitchProps = {
  /** Identifiant unique du switch (utilisé pour l'association label/input) */
  id?: string;
  
  /** Texte du label affiché à côté du switch */
  label?: string;
  
  /** État initial ou contrôlé du switch (true = activé, false = désactivé) */
  checked?: boolean;
  
  /** Si true, désactive l'interaction avec le switch */
  disabled?: boolean;
  
  /** Callback appelé lors du changement d'état */
  onChange?: SwitchChangeHandler;
  
  /** Variante visuelle du Switch (détermine la couleur quand activé) */
  variant?: SwitchVariant;
  
  /** Taille du Switch */
  size?: UiSize;
  
  /** Alignement horizontal dans le conteneur parent */
  align?: UiAlign;
  
  /** Nom du switch (utile pour les formulaires) */
  name?: string;
  
  /** Valeur associée au switch (utile pour les formulaires) */
  value?: string;
  
  /** Attribut aria-label pour l'accessibilité (si pas de label visible) */
  ariaLabel?: string;
  
  /** Attribut aria-describedby pour l'accessibilité */
  ariaDescribedBy?: string;
  
  /** Couleur personnalisée pour le texte du label (format CSS: hex, rgb, var, etc.) */
  labelColor?: UiVariant;
};

// ================================
// Valeurs par défaut
// ================================

/**
 * Valeurs par défaut du composant Switch
 */
export const SWITCH_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify"]),
  id: "switch",
  label: "test",
  checked: false,
  disabled: false,
  labelColor: 'primary'
} satisfies Partial<SwitchProps>;

// ================================
// Showcase
// ================================

/**
 * Constantes utilisées pour générer les combinaisons de démonstration
 * dans la page de showcase du Switch.
 */
export const SWITCH_SHOWCASE_CONSTANTS = {
  variant: SWITCH_VARIANTS,
  labelColor: UI_VARIANTS,
  size: UI_SIZES,
  align: UI_ALIGN,
} as const;