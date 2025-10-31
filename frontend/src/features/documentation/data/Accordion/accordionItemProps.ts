import { formatType } from "@/features/documentation/utils";
import { SHOWCASE_CONSTANTS, ITEM_DEFAULTS } from '@/components/ui/Accordion/Accordion.types';

export default [
  // --- Propriété : label ---
  {
    name: "label",
    type: "string",
    default: ITEM_DEFAULTS.label,
    description: "**Texte principal affiché sur l'élément** de l'accordéon. Ce texte est visible même si l'item contient des `children`.",
  },
  // --- Propriété : onClick ---
  {
    name: "onClick",
    type: "() => void",
    default: "undefined",
    description: "**Fonction de rappel (callback) appelée lorsque l'utilisateur clique sur l'item.** Idéal pour les actions de navigation ou les événements spécifiques.",
  },
  // --- Propriété : isActive ---
  {
    name: "isActive",
    type: "boolean",
    default: "false",
    description: "**Indique si l'item est actuellement actif ou sélectionné** (ex: la route ou la page courante). Si `true`, l'item affichera le style défini par `itemVariant`.",
  },

  // --- Propriété : size (Override) ---
  {
    name: "size",
    type: formatType(SHOWCASE_CONSTANTS.size),
    default: "Hérité du composant Accordion parent (`AccordionProps.size`)",
    description: "**Surcharges la taille globale définie par le composant Accordion.** Applique spécifiquement une taille différente à cet item.",
    values: SHOWCASE_CONSTANTS.size
  },
] as const;