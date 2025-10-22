/**
 * @file Métadonnées des propriétés du composant Text pour la documentation.
 * @module features/documentation/data/Text
 */

import {
  TEXT_AS,
  TEXT_DEFAULTS,
  TEXT_SIZES,
  TEXT_WEIGHTS,
} from "@/components/ui/Text/Text.types";
import { UI_TEXT_JUSTIFY, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/propsInfo";
import { formatType } from "@/features/documentation/utils";

/**
 * Liste des propriétés du composant Text avec leurs métadonnées.
 *
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 *
 * @constant
 * @type {readonly PropInfo[]}
 *
 * @see {@link PropInfo}
 * @see {@link Text}
 */
export const textProps: readonly PropInfo[] = [
  {
    name: "as",
    type: formatType(TEXT_AS),
    default: `"${TEXT_DEFAULTS.as}"`,
    description: "**Balise HTML sémantique** à rendre (span, p, strong, em, label).",
    required: false,
  },
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${TEXT_DEFAULTS.variant}"`,
    description: "**Couleur thématique** du texte.",
    required: false,
  },
  {
    name: "size",
    type: formatType(TEXT_SIZES),
    default: `"${TEXT_DEFAULTS.size}"`,
    description: "**Taille prédéfinie** du texte (xs, sm, md, lg, xl).",
    required: false,
  },
  {
    name: "weight",
    type: formatType(TEXT_WEIGHTS),
    default: `"${TEXT_DEFAULTS.weight}"`,
    description: "**Poids (épaisseur)** de la police (light, regular, medium, bold).",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_TEXT_JUSTIFY),
    default: `"${TEXT_DEFAULTS.justify}"`,
    description: "**Alignement du texte** (left, center, right, justify).",
    required: false,
  },
  {
    name: "children",
    type: "ReactNode",
    default: undefined,
    description: "**Contenu textuel** à afficher dans le composant.",
    required: true,
  },
  {
    name: "className",
    type: "string",
    default: `"${TEXT_DEFAULTS.className}"`,
    description: "**Classes CSS additionnelles** pour personnalisation avancée. S'ajoute aux classes de base du composant.",
    required: false,
  },
] as const;