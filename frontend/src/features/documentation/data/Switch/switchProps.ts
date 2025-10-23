/**
 * @file Métadonnées des propriétés du composant Switch pour la documentation.
 * @module features/documentation/data/Switch
 */

import { SELECT_DEFAULTS } from "@/components/ui/Select/Select.types";
import { UI_ALIGN, UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/propsInfo";
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
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${SELECT_DEFAULTS.size}"`,
    description: "**Taille** visuelle du switch.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${SELECT_DEFAULTS.variant}"`,
    description: "**Style visuel** du spinner.",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_ALIGN),
    default: `"${SELECT_DEFAULTS.align}"`,
    description: "**Alignement horizontal** du switch dans son conteneur parent.",
    required: false,
  },
] as const;