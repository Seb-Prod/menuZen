/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/Switch/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Switch} pour l'implémentation du composant
 */

import { DEFAULTS, SWITCH_VARIANTS} from "@/components/ui/Switch";
import { UI_ALIGN, UI_SIZES } from "@/components/ui/ui.types";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from '@/features/documentation/utils';

export const props: readonly PropInfo[] = [
  {
    name: "id",
    type: "string",
    default: `"${DEFAULTS.id}"`,
    description: "**Identifiant unique** du switch pour l'association label/input.",
    required: false,
  },
  {
    name: "label",
    type: "string",
    default: `"${DEFAULTS.label}"`,
    description: "**Texte du label** affiché à côté du switch.",
    required: false,
  },
  {
    name: "checked",
    type: "boolean",
    default: `${DEFAULTS.checked}`,
    description: "**État du switch** (true = activé, false = désactivé).",
    required: false,
  },
  {
    name: "disabled",
    type: "boolean",
    default: `${DEFAULTS.disabled}`,
    description: "Si **true**, désactive l'interaction avec le switch.",
    required: false,
  },
  {
    name: "onChange",
    type: "(checked: boolean) => void",
    default: "undefined",
    description: "**Callback** appelé lors du changement d'état du switch.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(SWITCH_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Variante visuelle** du switch (détermine la couleur quand activé).",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille** du switch.",
    required: false,
  },
  {
    name: "align",
    type: formatType(UI_ALIGN),
    default: `"${DEFAULTS.align}"`,
    description: "**Alignement horizontal** du switch dans son conteneur parent.",
    required: false,
  },
  {
    name: "name",
    type: "string",
    default: "undefined",
    description: "**Nom du switch** pour les formulaires.",
    required: false,
  },
  {
    name: "value",
    type: "string",
    default: "undefined",
    description: "**Valeur associée** au switch pour les formulaires.",
    required: false,
  },
  {
    name: "ariaLabel",
    type: "string",
    default: "undefined",
    description: "**Label ARIA** pour l'accessibilité (si pas de label visible).",
    required: false,
  },
  {
    name: "ariaDescribedBy",
    type: "string",
    default: "undefined",
    description: "**ID de l'élément décrivant** le switch pour l'accessibilité.",
    required: false,
  },
] as const;