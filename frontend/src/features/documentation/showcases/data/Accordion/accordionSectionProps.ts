import { formatType } from "@/features/documentation/utils";
import { ACCORDION_SECTION_DEFAULTS, ACCORDION_SHOWCASE_CONSTANTS } from '@/components/ui/Accordion/Accordion.types';

export default [
  // --- Propriété : label ---
  {
    name: "label",
    type: "string",
    default: ACCORDION_SECTION_DEFAULTS.label,
    description: "**Label affiché sur le bouton (l'en-tête) de la section.** C'est le texte cliquable qui permet d'ouvrir ou de fermer le contenu.",
  },
  // --- Propriété : defaultOpen ---
  {
    name: "defaultOpen",
    type: "boolean",
    default: ACCORDION_SECTION_DEFAULTS.defaultOpen,
    description: "**Indique si le contenu de la section doit être visible (ouvert) par défaut** lors du premier montage du composant.",
  },
  // --- Propriété : children ---
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "**Contenu à afficher à l'intérieur de la section lorsqu'elle est ouverte.** Il s'agit généralement de composants `<AccordionItem />` ou de tout autre contenu React.",
  },
  // --- Propriété : onClick ---
  {
    name: "onClick",
    type: "() => void",
    default: "undefined",
    description: "**Fonction de rappel (callback) appelée lors de l'activation de la section** (c'est-à-dire quand l'utilisateur clique pour l'ouvrir ou la fermer).",
  },
  // --- Propriété : size (Override) ---
  {
    name: "size",
    type: formatType(ACCORDION_SHOWCASE_CONSTANTS.size),
    default: "Hérité du composant Accordion parent (`AccordionProps.size`)",
    description: "**Surcharges la taille globale définie par le composant Accordion.** Applique spécifiquement une taille différente à cette section.",
    values: ACCORDION_SHOWCASE_CONSTANTS.size
  },
  // --- Propriété : chevronIcon (Override) ---
  {
    name: "chevronIcon",
    type: formatType(ACCORDION_SHOWCASE_CONSTANTS.chevronIcon),
    default: "Hérité du composant Accordion parent (`AccordionProps.chevronIcon`)",
    description: "**Surcharges l'icône de chevron globale définie par le composant Accordion.** Applique spécifiquement un type d'icône différent à cette section.",
    values: ACCORDION_SHOWCASE_CONSTANTS.chevronIcon
  },
  // --- Propriété : variant (Override) ---
  {
    name: "variant",
    type: formatType(ACCORDION_SHOWCASE_CONSTANTS.variant),
    default: "Hérité du composant Accordion parent (`AccordionProps.variant`)",
    description: "**Surcharges la variante de couleur globale définie par le composant Accordion.** Applique spécifiquement une couleur de label différente à cette section.",
    values: ACCORDION_SHOWCASE_CONSTANTS.variant
  },
] as const;