/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/Logo/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Logo} pour l'implémentation du composant
 */

import { ALIGN, DEFAULTS } from "@/components/ui/Logo";
import { UI_SIZES } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

export const logoProps: readonly PropInfo[] = [
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille** du logo. Détermine les dimensions du cercle contenant l'image et la taille du texte associé.",
    required: false,
  },
  {
    name: "align",
    type: formatType(ALIGN),
    default: `"${DEFAULTS.align}"`,
    description: "**Position du texte** par rapport au logo. `bottom` affiche le texte sous le logo, `right` l'affiche à droite.",
    required: false,
  },
  {
    name: "text",
    type: "string",
    default: `"${DEFAULTS.text}"`,
    description: "**Texte** à afficher à côté du logo. Représente généralement le nom de l'application ou de la marque.",
    required: false,
  },
] as const;