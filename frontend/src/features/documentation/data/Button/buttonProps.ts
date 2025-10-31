/**
 * @file Métadonnées des propriétés du composant Button pour la documentation.
 * @module features/documentation/data/Button
 */

import { DEFAULTS, MODES, TYPES } from "@/components/ui/Button/Button.types";
import { UI_ALIGN, UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

/**
 * Liste des propriétés du composant Button avec leurs métadonnées.
 * 
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 * 
 * @constant
 * @type {readonly PropInfo[]}
 * 
 * @see {@link PropInfo}
 * @see {@link Button}
 */
export const buttonProps: readonly PropInfo[] = [
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Variante visuelle** du bouton. Détermine le schéma de couleurs appliqué.",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille** du bouton. Contrôle les dimensions et l'espacement",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_ALIGN),
    default: `"${DEFAULTS.align}"`,
    description: "**Alignement horizontal** du bouton dans son conteneur parent",
    required: false,
  },
  {
    name: "type",
    type: formatType(TYPES),
    default: `"${DEFAULTS.type}"`,
    description: "**Type HTML** natif du bouton. Définit le comportement dans les formulaires",
    required: false,
  },
  {
    name: "mode",
    type: formatType(MODES),
    default: `"${DEFAULTS.mode}"`,
    description: "**Mode d'apparence** du bouton. `solid` pour fond plein, `outline` pour bordure seule, `ghost` pour transparent.",
    required: false,
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: String(DEFAULTS.fullWidth),
    description: "Si `true`, le bouton occupe **100% de la largeur** de son conteneur parent. Utile pour les mises en page mobiles ou les formulaires.",
    required: false,
  },
  {
    name: "disabled",
    type: "boolean",
    default: String(DEFAULTS.disabled),
    description: "Si `true`, **désactive** le bouton : empêche toute interaction (clics, focus), applique un style visuel grisé et ajoute `cursor: not-allowed`",
    required: false,
  },
  {
    name: "children",
    type: "ReactNode",
    default: undefined,
    description: "**Contenu** à afficher dans le bouton. Accepte : Texte simple, éléments React (icônes, badges) et Combinaisons d'éléments",
    required: true,
  },
  {
    name: "className",
    type: "string",
    default: `"${DEFAULTS.className}"`,
    description: "**Classes CSS additionnelles** pour personnalisation avancée. S'ajoute aux classes de base du composant sans les remplacer.",
    required: false,
  },
  {
    name: "onClick",
    type: "() => void",
    default: undefined,
    description: "**Gestionnaire d'événement** appelé lors du clic sur le bouton. Reçoit l'événement de souris natif en paramètre.",
    required: false,
  },
] as const;