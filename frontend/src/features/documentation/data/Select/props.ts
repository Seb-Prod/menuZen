/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/Select/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Select} pour l'implémentation du composant
 */

import {
  DEFAULTS,
} from "@/components/ui/Select/Select.types";
import { UI_ALIGN, UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

export const props: readonly PropInfo[] = [
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "Définit le **schéma de couleur** et le style visuel (couleur du fond, de la bordure, etc.) du sélecteur. Ce style s'applique au bouton d'affichage et aux options.",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "Définit la **taille** visuelle du bouton du sélecteur et des éléments de la liste déroulante (hauteur, padding, taille de police).",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_ALIGN),
    default: `"${DEFAULTS.align}"`,
    description: "Définit l'**alignement horizontal** du menu déroulant par rapport au bouton du sélecteur (utile pour gérer le débordement sur les bords de l'écran).",
    required: false,
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: `"${DEFAULTS.fullWidth}"`,
    description: "Si `true`, le select occupe **100% de la largeur** de son conteneur parent. Utile pour les mises en page mobiles ou les formulaires.",
    required: false,
  },
  {
    name: "options",
    type: "SelectOption[]",
    default: undefined,
    description: "Tableau d'objets définissant les choix disponibles. Chaque objet doit inclure `value` et `label`, et peut inclure `disabled`.",
    required: true,
  },
  {
    name: "value",
    type: "string",
    default: "undefined (non-contrôlé)",
    description: "La **valeur actuellement sélectionnée**. Fournir cette propriété rend le composant un sélecteur **contrôlé** par un état externe.",
    required: false,
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    default: undefined,
    description: "Fonction de rappel appelée lors de la sélection d'une nouvelle option. Reçoit la `value` (string) de l'option sélectionnée.",
    required: false,
  },
  {
    name: "placeholder",
    type: "string",
    default: `"${DEFAULTS.placeholder}"`,
    description: "Texte affiché dans le bouton du sélecteur lorsque `value` est vide ou non définie.",
    required: false,
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Si `true`, **désactive** le sélecteur, empêchant toute interaction (clic ou focus).",
    required: false,
  },
  {
    name: "className",
    type: "string",
    default: "''",
    description: "**Classes CSS personnalisées** appliquées au conteneur racine (`<div>`) du sélecteur.",
    required: false,
  },
  {
    name: "name",
    type: "string",
    default: undefined,
    description: "Nom du champ de formulaire, appliqué à l'<input type='hidden'> interne pour la soumission de formulaire.",
    required: false,
  },
  {
    name: "id",
    type: "string",
    default: undefined,
    description: "ID unique pour le bouton du sélecteur, essentiel pour l'accessibilité (`aria-labelledby`).",
    required: false,
  },
] as const;