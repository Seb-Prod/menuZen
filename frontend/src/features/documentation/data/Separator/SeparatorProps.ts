/**
 * @file Métadonnées des propriétés du composant Separator pour la documentation
 * @module features/documentation/data/SeparatorProps
 * @description
 * Ce fichier définit les métadonnées de toutes les propriétés du composant Separator.
 * Il est utilisé pour générer automatiquement la documentation interactive des props
 * dans les pages de documentation du système de design.
 * 
 * @version 1.0.0
 * @since 2025-11-09
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Separator} pour l'implémentation du composant
 */

import { DEFAULTS, ORIENTATION } from "@/components/ui/Separator/Separator.types";
import { UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

/**
 * Liste des propriétés du composant Separator avec leurs métadonnées.
 * 
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 * 
 * Chaque entrée décrit une propriété du composant avec son type,
 * sa valeur par défaut, sa description et si elle est requise.
 * 
 * @constant
 * @type {readonly PropInfo[]}
 * 
 * @see {@link PropInfo}
 * @see {@link Separator}
 */
export const separatorProps: readonly PropInfo[] = [
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