import {
  TEXT_AS,
  TEXT_COLORS,
  TEXT_ALIGNS,
  TEXT_DEFAULTS,
  TEXT_SIZES,
  TEXT_WEIGHTS,
} from "@/components/ui/Text/Text.types";
import { formatType } from "@/features/showcase/utils"; 

export default [
  {
    name: "as",
    type: formatType(TEXT_AS),
    default: TEXT_DEFAULTS.as,
    description: "Balise HTML sémantique à rendre (span, p, strong, em, label)",
    values: TEXT_AS,
  },
  {
    name: "color",
    type: formatType(TEXT_COLORS),
    default: TEXT_DEFAULTS.color,
    description: "Couleur thématique du texte",
    values: TEXT_COLORS,
  },
  {
    name: "align",
    type: formatType(TEXT_ALIGNS),
    default: TEXT_DEFAULTS.align,
    description: "Alignement du texte (left, center, right, justify)",
    values: TEXT_ALIGNS,
  },
  {
    name: "size",
    type: formatType(TEXT_SIZES),
    default: TEXT_DEFAULTS.size,
    description: "Taille prédéfinie du texte (xs, sm, md, lg, xl)",
    values: TEXT_SIZES,
  },
  {
    name: "weight",
    type: formatType(TEXT_WEIGHTS),
    default: TEXT_DEFAULTS.weight,
    description: "Poids (épaisseur) de la police (light, regular, medium, bold)",
    values: TEXT_WEIGHTS,
  },
  {
    name: "children",
    type: "ReactNode",
    default: undefined,
    description: "Contenu du texte",
    required: true,
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description: "Classes CSS additionnelles",
    required: false,
  },
] as const;