/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/Table/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Table} pour l'implémentation du composant
 */

import {
  DEFAULTS,
} from "@/components/ui/Table";
import { UI_ALIGN, UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

export const props: readonly PropInfo[] = [
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Style visuel** du tableau. Détermine la palette de couleurs et les séparateurs de lignes/colonnes.",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille prédéfinie** du tableau. Affecte le padding des cellules et la taille de la police.",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_ALIGN),
    default: `"${DEFAULTS.align}"`,
    description: "**Alignement horizontal** du tableau dans son conteneur parent.",
    required: false,
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: String(DEFAULTS.fullWidth),
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
    default: `"${DEFAULTS.className}"`,
    description: "**Classes CSS additionnelles** pour personnalisation avancée. S'ajoute aux classes de base du composant.",
    required: false,
  },
] as const;