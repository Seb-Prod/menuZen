/**
 * @file Métadonnées des propriétés du composant Table pour la documentation.
 * @module features/documentation/data/Table
 */

import {
  TABLE_DEFAULTS,
  TABLE_VARIANTS,
  TABLE_ALIGN,
} from "@/components/ui/Table/Table.types";
import type { PropInfo } from "@/features/documentation/types/propsInfo";
import { formatType } from "@/features/documentation/utils";

/**
 * Liste des propriétés du composant Table avec leurs métadonnées.
 *
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 *
 * @constant
 * @type {readonly PropInfo[]}
 *
 * @see {@link PropInfo}
 * @see {@link Table}
 */
export const tableProps: readonly PropInfo[] = [
  {
    name: "variant",
    type: formatType(TABLE_VARIANTS),
    default: `"${TABLE_DEFAULTS.variant}"`,
    description: "**Style visuel** du tableau. Détermine la palette de couleurs et les séparateurs de lignes/colonnes.",
    required: false,
  },
  {
    name: "align",
    type: formatType(TABLE_ALIGN),
    default: `"${TABLE_DEFAULTS.align}"`,
    description: "**Alignement horizontal** du tableau dans son conteneur parent.",
    required: false,
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: String(TABLE_DEFAULTS.fullWidth),
    description: "Si `true`, le tableau occupe **100% de la largeur** disponible de son conteneur parent.",
    required: false,
  },
  {
    name: "headers",
    type: "string[]",
    default: undefined,
    description: "**Tableau des libellés** d'en-têtes de colonnes (titres).",
    required: true,
  },
  {
    name: "data",
    type: "ReactNode[][]",
    default: undefined,
    description: "**Tableau bidimensionnel** (`lignes × colonnes`) contenant le contenu des cellules. Accepte des chaînes de caractères ou des éléments React.",
    required: true,
  },
  {
    name: "className",
    type: "string",
    default: `"${TABLE_DEFAULTS.className}"`,
    description: "**Classes CSS additionnelles** pour personnalisation avancée. S'ajoute aux classes de base du composant.",
    required: false,
  },
] as const;