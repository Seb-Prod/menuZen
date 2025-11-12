/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/ChevronIcon/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link ChevronIcon} pour l'implémentation du composant
 */

import { DEFAULTS, TYPE } from '@/components/ui/ChevronIcon';
import { UI_SIZES, UI_VARIANTS } from '@/components/ui/ui.types';
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "@/features/documentation/utils";

export const props: readonly PropInfo[] = [
  {
    name: "type",
    type: formatType(TYPE),
    default: `"${DEFAULTS.type}"`,
    description: "Définit la **forme visuelle** de l'icône (chevron, flèche, plus/moins, etc.).",
    required: false,
  },
  {
    name: "isOpen",
    type: "boolean",
    default: String(DEFAULTS.isOpen),
    description: "Si `true`, déclenche l'**animation de transition** pour représenter l'état ouvert.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Variante de couleur** appliquée à l'icône. Si `none` garde la couleur du parent. ",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille** prédéfinie de l'icône Chevron.",
    required: false,
  },
  {
    name: "ariaLabelOpen",
    type: "string",
    default: `"${DEFAULTS.ariaLabelOpen}"`,
    description: "**Texte alternatif** (aria-label) pour l'accessibilité lorsque l'icône est en état **ouvert**.",
    required: false,
  },
  {
    name: "ariaLabelClose",
    type: "string",
    default: `"${DEFAULTS.ariaLabelClose}"`,
    description: "**Texte alternatif** (aria-label) pour l'accessibilité lorsque l'icône est en état **fermé**.",
    required: false,
  },
] as const;