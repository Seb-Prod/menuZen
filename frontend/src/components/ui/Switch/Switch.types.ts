/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/ui/Switch.types
 * @version 1.2.0
 * @since 2025-10-23
 * @see {@link Switch} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES}, {@link UI_ALIGN} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @author Seb-Prod
 */

import type { ReactNode, InputHTMLAttributes } from 'react';
import { BOOLEAN, UI_ALIGN, UI_DEFAULTS, UI_SIZES, UI_VARIANTS, type UiAlign, type UiSize, type UiVariant } from '../ui.types';
import { omit } from '@/utils/object';

// ================================
// Constantes
// ================================

/**
 * États possibles d'un switch (activé/désactivé)
 */
export const STATES = [
  "checked",
  "unchecked"
] as const;

/**
 * Variantes de couleur disponibles pour le Switch
 * (exclut 'error' qui n'a pas de sens pour un switch)
 */
export const SWITCH_VARIANTS = UI_VARIANTS.filter(v => v !== 'error');

// ================================
// Types
// ================================

export type State = typeof STATES[number];
export type SwitchVariant = Exclude<UiVariant, 'error'>;

/**
 * Fonction de callback appelée lors du changement d'état du switch
 * @param checked - Nouvel état du switch (true = activé, false = désactivé)
 */
export type SwitchChangeHandler = (checked: boolean) => void;

// ================================
// Props du composant
// ================================

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'> & {
  /** Identifiant unique du switch (utilisé pour l'association label/input) */
  id?: string;

  /** Texte du label affiché à côté du switch */
  label?: ReactNode;

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

  /** Attribut aria-label pour l'accessibilité (si pas de label visible) */
  ariaLabel?: string;

  /** Attribut aria-describedby pour l'accessibilité */
  ariaDescribedBy?: string;
};

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify", "variant"]),
  id: "switch",
  label:"label",
  variant: "primary",
  checked: false,
  disabled: false,
  className: ""
} satisfies Partial<Props>;

// ================================
// Showcase
// ================================

export const SHOWCASE_CONSTANTS = {
  variant: SWITCH_VARIANTS,
  size: UI_SIZES,
  align: UI_ALIGN,
  disabled: BOOLEAN,
  checked: BOOLEAN,
} as const;