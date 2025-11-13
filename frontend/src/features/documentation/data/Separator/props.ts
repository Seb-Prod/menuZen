/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/Separator/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Separator} pour l'implémentation du composant
 */

import { DEFAULTS, ORIENTATION } from "@/components/ui/Separator";
import { UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

export const props: readonly PropInfo[] = [
  {
    name: "orientation",
    type: formatType(ORIENTATION),
    default: `"${DEFAULTS.orientation}"`,
    description: "**Orientation** du séparateur. `horizontal` affiche une ligne horizontale, `vertical` affiche une ligne verticale.",
    required: false,
  },
  {
    name: "thickness",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.thickness}"`,
    description: "**Épaisseur** de la ligne du séparateur. Détermine la largeur (pour horizontal) ou la hauteur (pour vertical) de la ligne.",
    required: false,
  },
  {
    name: "color",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.color}"`,
    description: "**Couleur** du séparateur basée sur les variantes du système de design. Permet d'adapter le séparateur au contexte visuel.",
    required: false,
  },
  {
    name: "spacing",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.spacing}"`,
    description: "**Espacement** autour du séparateur. Ajoute des marges verticales (pour horizontal) ou horizontales (pour vertical) pour créer de l'espace.",
    required: false,
  },
] as const;