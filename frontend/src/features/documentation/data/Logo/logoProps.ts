/**
 * @file Métadonnées des propriétés du composant Logo pour la documentation.
 * @module features/documentation/data/Logo
 */

import { ALIGN, DEFAULTS } from "@/components/ui/Logo/Logo.types";
import { UI_SIZES } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

/**
 * Liste des propriétés du composant Logo avec leurs métadonnées.
 * 
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 * 
 * **Note importante :** Le composant utilise une image qui doit être nommée `logo.png` 
 * et placée dans le dossier `src/assets/`. Cette image sera automatiquement 
 * affichée dans un conteneur circulaire.
 * 
 * @constant
 * @type {readonly PropInfo[]}
 * 
 * @see {@link PropInfo}
 * @see {@link Logo}
 */
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