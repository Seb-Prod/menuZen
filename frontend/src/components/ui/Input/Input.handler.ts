/**
 * @file Gestionnaires d'événements pour le composant Input
 * @module components/ui/Input.handler
 * @description Contient les fonctions pures qui gèrent les événements onChange et onBlur.
 * @version 2.0.0
 * @since 2025-11-15
 * @see {@link Input} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import type { Props } from "./Input.types";
import { validateField } from "./Input.utils";

// ====================================================================
// Types pour les fonctions de mise à jour d'état (Setters)
// ====================================================================

// Définit les types des fonctions d'état du composant
type SetInternalValue = (value: string) => void;
type SetError = (error: string) => void;
type SetTouched = (touched: boolean) => void;

// Extrait les props pertinentes pour les handlers
type HandlerProps = Pick<
  Props, 
  | 'validateOn' 
  | 'onError' 
  | 'onChange' 
  | 'onBlur'
> & 
  Omit<Props, 'value' | 'size' | 'variant' | 'showError' | 'onChange' | 'onBlur' | 'onError'>; 
// Omit pour passer toutes les props de validation à validateField

// ====================================================================
// Handlers (Fonctions Pures)
// ====================================================================

/**
 * Gère l'événement `onChange` pour la saisie du champ.
 * * Met à jour la valeur interne et déclenche la validation si `validateOn` est réglé sur 'change' 
 * et si le champ a déjà été touché (`touched`).
 * * @param {React.ChangeEvent<HTMLInputElement>} e - L'objet événement.
 * @param {boolean} touched - Indique si le champ a déjà perdu le focus.
 * @param {HandlerProps} props - Les props de validation et de gestion des événements.
 * @param {SetInternalValue} setInternalValue - Fonction pour mettre à jour la valeur interne.
 * @param {SetError} setError - Fonction pour mettre à jour l'état d'erreur.
 */
export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  touched: boolean,
  props: HandlerProps,
  setInternalValue: SetInternalValue,
  setError: SetError
) => {
  const { validateOn, onError, onChange, ...validationProps } = props;
  const newValue = e.target.value;

  setInternalValue(newValue);

  // Validation en temps réel si demandé
  if (validateOn === "change" && touched) {
    const validationError = validateField(newValue, validationProps);
    setError(validationError);
    onError?.(validationError);
  }

  onChange?.(e);
};


/**
 * Gère l'événement `onBlur` (perte de focus).
 * * Met le champ à l'état 'touché' et déclenche la validation finale.
 * * @param {React.FocusEvent<HTMLInputElement>} e - L'objet événement.
 * @param {HandlerProps} props - Les props de validation et de gestion des événements.
 * @param {SetTouched} setTouched - Fonction pour définir l'état 'touché'.
 * @param {SetError} setError - Fonction pour mettre à jour l'état d'erreur.
 */
export const handleInputBlur = (
  e: React.FocusEvent<HTMLInputElement>,
  props: HandlerProps,
  setTouched: SetTouched,
  setError: SetError
) => {
  const { validateOn, onError, onBlur, ...validationProps } = props;
  
  setTouched(true);

  // Validation au blur (par défaut)
  if (validateOn === "blur" || validateOn === "change") {
    const validationError = validateField(e.target.value, validationProps);
    setError(validationError);
    onError?.(validationError);
  }

  onBlur?.(e);
};