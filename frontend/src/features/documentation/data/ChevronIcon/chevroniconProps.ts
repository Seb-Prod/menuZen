/**
 * @file Métadonnées des propriétés du composant Button pour la documentation.
 * @module features/documentation/data/ChevronIcon
 */

import {
  CHEVRONICON_DEFAULTS,
  CHEVRONICON_TYPE,
  CHEVRONICON_VARIANTS,
} from '@/components/ui/ChevronIcon/ChevronIcon.types';
import { UI_SIZES } from '@/components/ui/ui.types';
import type { PropInfo } from "@/features/documentation/types/propsInfo";
import { formatType } from "@/features/documentation/utils";

/**
 * Liste des propriétés du composant ChevronIcon avec leurs métadonnées.
 * 
 * Utilisé pour générer automatiquement la documentation des props
 * dans les pages de documentation.
 * 
 * @constant
 * @type {readonly PropInfo[]}
 * 
 * @see {@link PropInfo}
 * @see {@link ChevronIcon}
 */
export const chevronIconProps: readonly PropInfo[] = [
  {
    name: "type",
    type: formatType(CHEVRONICON_TYPE),
    default: `"${CHEVRONICON_DEFAULTS.type}"`,
    description: "Définit la **forme visuelle** de l'icône (chevron, flèche, plus/moins, etc.).",
    required: false,
  },
  {
    name: "isOpen",
    type: "boolean",
    default: String(CHEVRONICON_DEFAULTS.isOpen),
    description: "Si `true`, déclenche l'**animation de transition** pour représenter l'état ouvert.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(CHEVRONICON_VARIANTS),
    default: `"${CHEVRONICON_DEFAULTS.variant}"`,
    description: "**Variante de couleur** appliquée à l'icône. Si `none` garde la couleur du parent. ",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${CHEVRONICON_DEFAULTS.size}"`,
    description: "**Taille** prédéfinie de l'icône Chevron.",
    required: false,
  },
  {
    name: "ariaLabelOpen",
    type: "string",
    default: `"${CHEVRONICON_DEFAULTS.ariaLabelOpen}"`,
    description: "**Texte alternatif** (aria-label) pour l'accessibilité lorsque l'icône est en état **ouvert**.",
    required: false,
  },
  {
    name: "ariaLabelClose",
    type: "string",
    default: `"${CHEVRONICON_DEFAULTS.ariaLabelClose}"`,
    description: "**Texte alternatif** (aria-label) pour l'accessibilité lorsque l'icône est en état **fermé**.",
    required: false,
  },
] as const;