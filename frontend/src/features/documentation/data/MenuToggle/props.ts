/**
 * @file Définition des propriétés du composant
 * @module features/documentation/data/MenuToggle/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link MenuToggle} pour l'implémentation du composant
 */

import { DEFAULTS, TYPE, VARIANTS } from "@/components/ui/MenuToggle";
import { UI_SIZES } from "@/components/ui/ui.types";
import type { PropInfo } from "../../types/types";
import { formatType } from "./../../utils";

export const menuToggleProps: readonly PropInfo[] = [
  {
    name: "type",
    type: formatType(TYPE),
    default: `"${DEFAULTS.type}"`,
    description: "Définit la forme visuelle de l'icône (`burger`, `arrow`, `chevron`).",
    required: false,
  },
  {
    name: "variant",
    type: formatType(VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "Couleur de l'icône (primary, secondary, success, info, error, neutral, none).",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "Taille de l'icône (`small`, `medium`, `large`).",
    required: false,
  },
  {
    name: "isOpen",
    type: "boolean",
    default: `${DEFAULTS.isOpen}`,
    description: "État ouvert (`true`) ou fermé (`false`) du menu.",
    required: false,
  },
  {
    name: "ariaLabelOpen",
    type: "string",
    default: `"${DEFAULTS.ariaLabelOpen}"`,
    description: "Libellé d'accessibilité lorsque le menu est ouvert.",
    required: false,
  },
  {
    name: "ariaLabelClose",
    type: "string",
    default: `"${DEFAULTS.ariaLabelClose}"`,
    description: "Libellé d'accessibilité lorsque le menu est fermé.",
    required: false,
  },
  {
    name: "onClick",
    type: "() => void",
    default: "undefined",
    description: "Fonction appelée lors du clic sur l'icône.",
    required: false,
  },
] as const;