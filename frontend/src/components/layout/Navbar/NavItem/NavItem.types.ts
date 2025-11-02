/**
 * @file Définition des types, constantes et valeurs par défaut
 * @module components/layout/NavBar/NavItem.types
 * @version 1.0.0
 * @since 2025-10-17
 * @see {@link NavItem} pour l'implémentation du composant principal.
 * @see {@link UI_VARIANTS}, {@link UI_SIZES} pour les constantes partagées.
 * @see {@link UI_DEFAULTS} pour les valeurs globales par défaut.
 * @author Seb-Prod
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

