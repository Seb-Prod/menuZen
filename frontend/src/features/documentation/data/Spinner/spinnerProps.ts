/**
 * @file Métadonnées des propriétés du composant Spinner pour la documentation.
 * @module features/documentation/data/Spinner
 */

import {
  SPINNER_ALIGN,
  SPINNER_SIZE,
  SPINNER_VARIANTS,
} from '@/components/ui/Spinner/Spinner.types';
import type { PropInfo } from "@/features/documentation/types/propsInfo";
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
    type: formatType(SPINNER_SIZE),
    default: '"medium"',
    description: "**Taille** visuelle du spinner. Contrôle les dimensions de l'icône de chargement.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(SPINNER_VARIANTS),
    default: '"primary"',
    description: "**Style visuel** du spinner. Détermine la couleur de l'icône de chargement.",
    required: false,
  },
  {
    name: "align",
    type: formatType(SPINNER_ALIGN),
    default: '"center"',
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