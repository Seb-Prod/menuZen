/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/Heading/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Heading} pour l'implémentation du composant
 */

import { AS, DEFAULTS } from "@/components/ui/Heading";
import { UI_TEXT_JUSTIFY, UI_VARIANTS } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

export const props: readonly PropInfo[] = [
  {
    name: "as",
    type: formatType(AS),
    default: `"${DEFAULTS.as}"`,
    description: "**Niveau sémantique** du heading (h1 à h6). Détermine la hiérarchie du titre dans la structure du document et son rendu visuel.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Couleur** du texte du heading. Permet d'adapter le titre au contexte visuel.",
    required: false,
  },
  {
    name: "justify",
    type: formatType(UI_TEXT_JUSTIFY),
    default: `"${DEFAULTS.justify}"`,
    description: "**Alignement horizontal** du texte dans son conteneur parent. Contrôle le positionnement du titre.",
    required: false,
  },
  {
    name: "children",
    type: "ReactNode",
    default: undefined,
    description: "**Contenu** à afficher dans le heading. Accepte : Texte simple, éléments React (icônes, badges) et Combinaisons d'éléments.",
    required: true,
  },
  {
    name: "className",
    type: "string",
    default: `"${DEFAULTS.className}"`,
    description: "**Classes CSS additionnelles** pour personnalisation avancée. S'ajoute aux classes de base du composant sans les remplacer.",
    required: false,
  },
] as const;