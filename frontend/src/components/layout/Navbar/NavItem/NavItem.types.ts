/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/layout/NavBar/NavItem.types
 * @description
 * Ce fichier centralise toutes les définitions de types TypeScript, les constantes, les valeurs par défaut et les configurations pour le composant.
 * 
 * @version 1.0.0
 * @since 2025-10-17
 * @author Seb-Prod
 * @see {@link NavItem} pour l'implémentation du composant principal.
 */

import type { IconType } from "react-icons";
import { omit } from '@/utils/object';
import type { RouteValue } from '@/routes';
import { UI_DEFAULTS, type UiSize, type UiVariant } from '@/components/ui/ui.types';


// ================================
// Props des composants
// ================================
export type Props = {
  /** Chemin de la route */
  to: RouteValue;
  /** Icône du lien de navigation */
  icon?: IconType;
  /** Texte du lien de navigation */
  label: string;
  /** Style du NavItem */
  variant?: UiVariant;
  /** Taille du NavItem */
  size?: UiSize;
  /** Classes CSS personnalisées */
  className?: string;
};
// ================================
// Valeurs par défaut
// ================================

export const DEFAULTS = {
  ...omit(UI_DEFAULTS, ["justify", "align"]),
  className:""
} satisfies Partial<Props>;

