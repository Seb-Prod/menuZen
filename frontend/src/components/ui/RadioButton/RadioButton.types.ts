/**
 * @file RadioButton.types.ts
 * @module components/ui/RadioButton/RadioButton.types
 *
 * @description
 * Types, constantes et valeurs par défaut pour les composants RadioButton
 * et RadioGroup.
 *
 * @version 1.1.0
 * @since 2025-11-18
 * @author Seb
 *
 * @see {@link RadioButton} pour l'implémentation du composant RadioButton.
 * @see {@link RadioGroup} pour l'implémentation du composant RadioGroup.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées du système UI.
 */

import type { InputHTMLAttributes } from "react";
import {
  BOOLEAN,
  UI_DEFAULTS,
  UI_SIZES,
  UI_VARIANTS,
  type UiSize,
  type UiVariant
} from "../ui.types";
import { omit } from "@/utils/object";

// ================================
// RADIO BUTTON
// ================================

/**
 * Propriétés d'une option dans un RadioGroup.
 *
 * @typedef {Object} RadioOption
 * @property {string} label - Texte du label de l'option.
 * @property {string} value - Valeur de l'option.
 * @property {boolean} [disabled] - Si l'option est désactivée.
 */
export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/**
 * Propriétés du composant RadioButton.
 *
 * @typedef {Object} RadioButtonProps
 * @property {string} [name] - Nom du bouton radio.
 * @property {string} [value] - Valeur du bouton radio.
 * @property {boolean} [checked] - État coché.
 * @property {string} [label] - Label associé au bouton radio.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Callback au changement.
 * @property {UiVariant} [variant] - Couleur/style du bouton.
 * @property {UiSize} [size] - Taille du bouton.
 * @property {boolean} [disabled] - Si le bouton est désactivé.
 */
export type RadioButtonProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> & {
  name?: string;
  value?: string;
  checked?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: UiVariant;
  size?: UiSize;
  disabled?: boolean;
};

/**
 * Valeurs par défaut pour le composant RadioButton.
 *
 * @constant
 * @type {Partial<RadioButtonProps>}
 */
export const RADIO_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align", "justify"]),
  disabled: false,
  checked: false,
  className: ""
} satisfies Partial<RadioButtonProps>;

/**
 * Configuration pour la présentation/démonstration du composant RadioButton.
 *
 * @constant
 * @type {Object}
 */
export const RADIO_SHOWCASE = {
  variant: UI_VARIANTS,
  size: UI_SIZES,
  disabled: BOOLEAN,
  required: BOOLEAN,
  checked: BOOLEAN
} as const;

// ================================
// RADIO GROUP
// ================================

/**
 * Propriétés du composant RadioGroup.
 *
 * @typedef {Object} RadioGroupProps
 * @property {string} name - Nom global du groupe (donne le même "name" aux RadioButton).
 * @property {string} value - Valeur actuellement sélectionnée dans le groupe.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Callback lorsque la valeur change.
 * @property {string} [label] - Label principal du groupe.
 * @property {RadioOption[]} options - Options disponibles dans le groupe.
 * @property {boolean} [required] - Le groupe est-il requis ?
 * @property {UiVariant} [variant] - Style UI des boutons radio.
 * @property {UiSize} [size] - Taille des boutons radio.
 * @property {boolean} [disabled] - Désactiver tout le groupe.
 * @property {string} [className] - Classes personnalisées.
 */
export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  options: RadioOption[];
  required?: boolean;
  variant?: UiVariant;
  size?: UiSize;
  disabled?: boolean;
  className?: string;
}

/**
 * Valeurs par défaut pour le composant RadioGroup.
 *
 * @constant
 * @type {Partial<RadioGroupProps>}
 */
export const RADIO_GROUP_DEFAULTS = {
  ...omit(UI_DEFAULTS, ["align", "justify"]),
  required: false,
  disabled: false,
  className: ""
} satisfies Partial<RadioGroupProps>;

/**
 * Configuration pour la présentation/démonstration du composant RadioGroup.
 *
 * @constant
 * @type {Object}
 */
export const RADIO_GROUP_SHOWCASE = {
  variant: UI_VARIANTS,
  size: UI_SIZES,
  disabled: BOOLEAN,
  required: BOOLEAN
} as const;