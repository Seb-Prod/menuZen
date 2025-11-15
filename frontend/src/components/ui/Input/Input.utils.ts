/**
 * @file Fonctions utilitaires pour Input
 * @module components/ui/Input.utils
 * @description Contient la logique de validation pour le composant Input.
 * @version 2.0.0
 * @since 2025-11-15
 * @see {@link Input} pour l'implémentation du composant principal.
 * @author Seb-Prod
 */

import { type Props } from "./Input.types";

// ================================
// Fonctions utilitaires
// ================================

// Utilisation de Pick pour extraire seulement les props de validation nécessaires
type ValidationProps = Pick<
  Props,
  | "type"
  | "required"
  | "minLength"
  | "maxLength"
  | "pattern"
  | "validate"
  | "errorMessage"
>;

/**
 * Valide la valeur d'un champ de saisie selon un ensemble de règles.
 * * Applique la validation personnalisée, les règles de base (requis, min/max longueur), 
 * l'expression régulière 'pattern', puis la validation basée sur le 'type' (email, tel, number).
 * * @param {string} val - La valeur actuelle du champ de saisie.
 * @param {ValidationProps} props - Les propriétés de validation du champ.
 * @returns {string} Une chaîne vide si la valeur est valide, sinon le message d'erreur.
 * * @example
 * // Validation d'un email
 * const error = validateField("invalide@", { type: "email", required: true });
 * // Retourne "Email invalide"
 * * @example
 * // Validation de longueur
 * const error = validateField("abc", { minLength: 5 });
 * // Retourne "Minimum 5 caractères"
 */
export const validateField = (val: string, props: ValidationProps): string => {
  const { 
    type, 
    required, 
    minLength, 
    maxLength, 
    pattern, 
    validate, 
    errorMessage 
  } = props;

  // 1. Validation personnalisée en priorité
  if (validate) {
    const customError = validate(val);
    if (customError) return customError;
  }

  // 2. Required
  if (required && !val.trim()) {
    return errorMessage?.required || "Ce champ est requis";
  }

  // Si vide et non requis, pas d'erreur
  if (!val.trim()) return "";

  // 3. MinLength
  if (minLength && val.length < minLength) {
    return errorMessage?.minLength || `Minimum ${minLength} caractères`;
  }

  // 4. MaxLength
  if (maxLength && val.length > maxLength) {
    return errorMessage?.maxLength || `Maximum ${maxLength} caractères`;
  }

  // 5. Pattern
  if (pattern && !new RegExp(pattern).test(val)) {
    return errorMessage?.pattern || "Format invalide";
  }

  // 6. Validation par type
  switch (type) {
    case "email": {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        return errorMessage?.email || "Email invalide";
      }
      break;
    }

    case "tel": {
      const phoneRegex = /^[\d\s-+()]+$/;
      if (!phoneRegex.test(val)) {
        return errorMessage?.tel || "Numéro de téléphone invalide";
      }
      break;
    }

    case "number": {
      if (isNaN(Number(val))) {
        return errorMessage?.number || "Doit être un nombre";
      }
      break;
    }
  }

  return "";
};