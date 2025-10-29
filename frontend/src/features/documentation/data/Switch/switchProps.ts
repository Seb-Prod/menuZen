/**
 * @file Métadonnées des propriétés du composant Switch pour la documentation.
 * @module features/documentation/data/Switch
 */

import { SWITCH_DEFAULTS, SWITCH_VARIANTS } from "@/components/ui/Switch/Switch.types";
import { UI_ALIGN, UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from '@/features/documentation/utils';

/**
 * Liste des propriétés du composant Switch avec leurs métadonnées.
 *
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 *
 * @constant
 * @type {readonly PropInfo[]}
 *
 * @see {@link PropInfo}
 * @see {@link Switch}
 */
export const switchProps: readonly PropInfo[] = [
  {
    name: "id",
    type: "string",
    default: `"${SWITCH_DEFAULTS.id}"`,
    description: "**Identifiant unique** du switch pour l'association label/input.",
    required: false,
  },
  {
    name: "label",
    type: "string",
    default: `"${SWITCH_DEFAULTS.label}"`,
    description: "**Texte du label** affiché à côté du switch.",
    required: false,
  },
  {
    name: "checked",
    type: "boolean",
    default: `${SWITCH_DEFAULTS.checked}`,
    description: "**État du switch** (true = activé, false = désactivé).",
    required: false,
  },
  {
    name: "disabled",
    type: "boolean",
    default: `${SWITCH_DEFAULTS.disabled}`,
    description: "Si **true**, désactive l'interaction avec le switch.",
    required: false,
  },
  {
    name: "onChange",
    type: "(checked: boolean) => void",
    default: "undefined",
    description: "**Callback** appelé lors du changement d'état du switch.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(SWITCH_VARIANTS),
    default: `"${SWITCH_DEFAULTS.variant}"`,
    description: "**Variante visuelle** du switch (détermine la couleur quand activé).",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${SWITCH_DEFAULTS.size}"`,
    description: "**Taille** du switch.",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_ALIGN),
    default: `"${SWITCH_DEFAULTS.align}"`,
    description: "**Alignement horizontal** du switch dans son conteneur parent.",
    required: false,
  },
  {
    name: "labelColor",
    type: formatType(UI_VARIANTS),
    default: `"${SWITCH_DEFAULTS.labelColor}"`,
    description: "**Couleur du texte** du label (format CSS ou variante UI).",
    required: false,
  },
  {
    name: "name",
    type: "string",
    default: "undefined",
    description: "**Nom du switch** pour les formulaires.",
    required: false,
  },
  {
    name: "value",
    type: "string",
    default: "undefined",
    description: "**Valeur associée** au switch pour les formulaires.",
    required: false,
  },
  {
    name: "ariaLabel",
    type: "string",
    default: "undefined",
    description: "**Label ARIA** pour l'accessibilité (si pas de label visible).",
    required: false,
  },
  {
    name: "ariaDescribedBy",
    type: "string",
    default: "undefined",
    description: "**ID de l'élément décrivant** le switch pour l'accessibilité.",
    required: false,
  },
] as const;