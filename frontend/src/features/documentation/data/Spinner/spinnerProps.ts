/**
 * @file Métadonnées des propriétés du composant Spinner pour la documentation.
 * @module features/documentation/data/Spinner
 */


import { DEFAULTS } from "@/components/ui/Spinner/Spinner.types";
import { UI_ALIGN, UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from '@/features/documentation/utils';

/**
 * Liste des propriétés du composant Spinner avec leurs métadonnées.
 *
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 *
 * @constant
 * @type {readonly PropInfo[]}
 *
 * @see {@link PropInfo}
 * @see {@link Spinner}
 */
export const spinnerProps: readonly PropInfo[] = [
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille** visuelle du spinner. Contrôle les dimensions de l'icône de chargement.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Style visuel** du spinner. Détermine la couleur de l'icône de chargement.",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_ALIGN),
    default: `"${DEFAULTS.align}"`,
    description: "**Alignement horizontal** du spinner dans son conteneur parent.",
    required: false,
  },
  {
    name: "children",
    type: "ReactNode",
    default: '"Chargement en cours"',
    description: "**Contenu** textuel ou élémentaire affiché sous l'icône de chargement (ex: un message d'attente).",
    required: false,
  },
] as const;