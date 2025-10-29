import { formatType } from "@/features/documentation/utils";
import { SHOWCASE_CONSTANTS, DEFAULTS } from '@/components/ui/Accordion/Accordion.types';

export default [
  // --- Propriété : variant ---
  {
    name: "variant",
    type: formatType(SHOWCASE_CONSTANTS.variant),
    default: DEFAULTS.variant,
    description: "**Schéma de couleur principal appliqué à l'ensemble du composant Accordion.** Cette variante est **transmise via le contexte** à tous les composants enfants (AccordionSection et AccordionItem) pour définir la couleur de leurs labels (non actifs). Un style de couleur différent peut être appliqué à un enfant spécifique en utilisant sa propriété d'override.",
    values: SHOWCASE_CONSTANTS.variant
  },
  // --- Propriété : size ---
  {
    name: "size",
    type: formatType(SHOWCASE_CONSTANTS.size),
    default: DEFAULTS.size,
    description: "**Taille globale des items et des labels de section.** Cette taille est **transmise via le contexte** à tous les composants enfants (AccordionSection et AccordionItem) pour définir leur taille par défaut. Une taille différente peut être appliquée à un enfant spécifique en utilisant sa propriété d'override.",
    values: SHOWCASE_CONSTANTS.size
  },
  // --- Propriété : chevronIcon ---
  {
    name: "chevronIcon",
    type: formatType(SHOWCASE_CONSTANTS.chevronIcon),
    default: DEFAULTS.chevronIcon,
    description: "**Type d'icône utilisé pour indiquer l'état (ouvert/fermé) des AccordionSection.** Ce type d'icône est **transmis via le contexte** et peut être surchargé par section via `AccordionSectionProps.chevronIcon`.",
    values: SHOWCASE_CONSTANTS.chevronIcon
  },
  // --- Propriété : itemVariant ---
  {
    name: "itemVariant",
    type: formatType(SHOWCASE_CONSTANTS.itemVariant),
    default: DEFAULTS.itemVariant,
    description: "**Schéma de couleur appliqué aux AccordionItem lorsqu'ils sont actifs ou survolés.** Cette variante est **transmise via le contexte** aux `AccordionItem` et définit leur style mis en évidence. Elle peut être surchargée par item via `AccordionItemProps.itemVariant`.",
    values: SHOWCASE_CONSTANTS.itemVariant
  },
  // --- Propriété : children ---
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "**Contenu principal de l'Accordion.** Doit être composé de un ou plusieurs composants `<AccordionSection />`.",
  },
] as const;