/**
 * @file Définition des propriétés du composant
 * @module components/ui/layout/Modal/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Modal} pour l'implémentation du composant
 */

import { DEFAULTS, POSITION } from "@/components/layout/Modal";
import { UI_VARIANTS } from '@/components/ui/ui.types';
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

export const props: readonly PropInfo[] = [
  {
    name: "children",
    type: "ReactNode",
    default: undefined,
    description: "**Contenu** à afficher à l'intérieur de la modale (texte, autres composants, etc.).",
    required: false,
  },
  {
    name: "origin",
    type: formatType(POSITION),
    default: `"${DEFAULTS.origin}"`,
    description: "**Point d'origine** de l'animation d'ouverture/fermeture de la modale.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Couleur thématique** (fond) de la modale. Utilisé pour la classe CSS 'bg-variant'.",
    required: false,
  },
  {
    name: "position",
    type: formatType(POSITION),
    default: `"${DEFAULTS.position}"`,
    description: "**Positionnement** de la modale dans la fenêtre (alignement).",
    required: false,
  },
  {
    name: "onClose",
    type: "() => void",
    default: undefined,
    description: "**Fonction de rappel** (callback) exécutée lorsque la modale est demandée à se fermer (par clic sur l'overlay, par exemple).",
    required: false,
  },
  {
    name: "isClosing",
    type: "boolean",
    default: undefined,
    description: "**Indicateur** pour déclencher l'animation de fermeture. Géré par un état dans le composant parent ou un hook.",
    required: false,
  },
  {
    name: "fullScreen",
    type: "boolean",
    default: DEFAULTS.fullScreen,
    description: "**Mode plein écran**. Si `true`, la modale occupe 100% de la largeur et de la hauteur de la fenêtre.",
    required: false,
  },
] as const;