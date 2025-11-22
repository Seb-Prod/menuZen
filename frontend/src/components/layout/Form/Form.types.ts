/**
 * @file Définition des types pour Form
 * @module components/ui/Form/Form.types
 * @version 2.1.0 // Version mise à jour
 * @since 2025-11-15
 * @author Seb-Prod
 */

import type { FormHTMLAttributes } from 'react';
import type { Type, ErrorMessages } from '@/components/ui/Input/Input.types';
import type { RadioOption } from '@/components/ui/RadioButton';

// ================================
// Types
// ================================

/**
 * Représente les erreurs de validation du formulaire (validation inter-champs)
 */
export type FormErrors = Record<string, string>;

/**
 * Configuration d'un champ de formulaire
 */
export type FormField = {
  /** Nom unique du champ (clé dans les valeurs) */
  name: string;
  /** Libellé affiché au-dessus du champ */
  label?: string;
  /** Type d'input. Étend aux types HTML qui ne sont pas gérés par Input.tsx. */
  type?: Type | 'checkbox' | 'radio';
  
  /** Valeur par défaut pour les champs texte/select */
  defaultValue?: string;
  /** Valeur par défaut pour les checkboxes */
  defaultChecked?: boolean;

  /** Options pour les groupes de boutons radio (type: 'radio') */
  options?: RadioOption[]; 
  
  /** Texte d'indication */
  placeholder?: string;
  
  // Validation native HTML5
  /** Champ obligatoire */
  required?: boolean;
  /** Longueur minimale */
  minLength?: number;
  /** Longueur maximale */
  maxLength?: number;
  /** Pattern regex pour validation */
  pattern?: string;
  
  // Validation personnalisée
  /** Fonction de validation personnalisée du champ */
  validate?: (value: string) => string;
  /** Messages d'erreur personnalisés */
  errorMessages?: ErrorMessages;
  
  /** Props HTML natives supplémentaires */
  [key: string]: unknown;
};

/**
 * Propriétés du composant Form
 */
export type Props = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  /** Liste des champs du formulaire */
  fields: FormField[];
  // 💡 Mise à jour : les valeurs peuvent être des string ou des boolean (pour les checkbox)
  /** Fonction appelée lors de la soumission valide */
  onSubmit: (values: Record<string, string | boolean>) => void | Promise<void>;
  /** Validation personnalisée inter-champs */
  validate?: (values: Record<string, string | boolean>) => FormErrors;
  /** Texte du bouton de soumission */
  submitLabel?: string;
  /** Classes CSS supplémentaires */
  className?: string;
};

// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS: Partial<Props> = {
  submitLabel: "Envoyer",
  className: ""
};