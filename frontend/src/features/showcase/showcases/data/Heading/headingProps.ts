import { HEADING_ALIGNS, HEADING_COLORS, HEADING_DEFAULTS, HEADING_VARIANTS } from "@/components/ui/Heading/Heading.types";
import { formatType } from "@/features/showcase/utils";

export default [
  {
    name: "variant",
    type: formatType(HEADING_VARIANTS),
    default: HEADING_DEFAULTS.variant,
    description: "Niveau du heading (h1 à h6)",
    values: HEADING_VARIANTS },
  {
    name: "color",
    type: formatType(HEADING_COLORS),
    default: HEADING_DEFAULTS.color,
    description: "Couleur du texte",
    values: HEADING_COLORS
  },
  {
    name: "align",
    type: formatType(HEADING_ALIGNS),
    default: HEADING_DEFAULTS.align,
    description: "Alignement du texte",
    values: HEADING_ALIGNS
  },
  {
    name: "children",
    type: "ReactNode",
    default: undefined,
    description: "Contenu du heading",
    required: true
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description: "Classes CSS additionnelles",
    required: false
  }
] as const;