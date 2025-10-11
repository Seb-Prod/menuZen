import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_DEFAULTS,
  BUTTON_ALIGN,
} from "@/components/ui/Button/Button.types";

import { formatType } from "@/features/showcase/utils";

export default [
  {
    name: "variant",
    type: formatType(BUTTON_VARIANTS),
    default: BUTTON_DEFAULTS.variant,
    description: "Style visuel du bouton",
    values: BUTTON_VARIANTS,
  },
  {
    name: "size",
    type: formatType(BUTTON_SIZES),
    default: BUTTON_DEFAULTS.size,
    description: "Taille prédéfinie du bouton",
    values: BUTTON_SIZES,
  },
  {
    name: "align",
    type: formatType(BUTTON_ALIGN),
    default: BUTTON_DEFAULTS.align,
    description: "Position du bouton",
    values: BUTTON_SIZES,
  },
  {
    name: "type",
    type: formatType(BUTTON_TYPES),
    default: BUTTON_DEFAULTS.type,
    description: "Type HTML du bouton",
    values: BUTTON_TYPES,
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: BUTTON_DEFAULTS.fullWidth,
    description: "Le bouton prend toute la largeur du conteneur parent",
    required: false,
  },
  {
    name: "disabled",
    type: "boolean",
    default: BUTTON_DEFAULTS.disabled,
    description: "Désactive le bouton",
    required: false,
  },
  {
    name: "children",
    type: "ReactNode",
    default: undefined,
    description: "Contenu affiché dans le bouton (texte, icônes, etc.)",
    required: true,
  },
  {
    name: "className",
    type: "string",
    default: BUTTON_DEFAULTS.className,
    description: "Classes CSS additionnelles pour personnalisation avancée",
    required: false,
  },
  {
    name: "onClick",
    type: "() => void",
    default: undefined,
    description: "Fonction appelée lors du clic sur le bouton",
    required: false,
  },
] as const;