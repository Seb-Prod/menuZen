/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/Spinner/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Spinner} pour l'implémentation du composant
 */

import { DEFAULTS } from "@/components/ui/Spinner";
import { UI_ALIGN, UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from '@/features/documentation/utils';

export const props: readonly PropInfo[] = [
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