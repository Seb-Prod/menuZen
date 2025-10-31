import { ITEM_DEFAULTS } from "@/components/ui/Accordion/Accordion.types";

export default [
  // --- Propriété : label ---
  {
    name: "label",
    type: "string",
    default: ITEM_DEFAULTS.label,
    description:
      "**Texte du lien ou du bouton à l’intérieur d’une section.** Représente une option, une page ou une action que l’utilisateur peut sélectionner.",
  },

  // --- Propriété : onClick ---
  {
    name: "onClick",
    type: "() => void",
    description:
      "**Fonction appelée lors du clic sur l’item.** Peut être utilisée pour effectuer une navigation, une action de sélection ou une logique métier.",
  },

  // --- Propriété : isActive ---
  {
    name: "isActive",
    type: "boolean",
    description:
      "**Indique si l’item est actuellement actif.** Utile pour mettre en évidence la page ou la route correspondant à l’élément (par exemple, dans un menu de navigation).",
  },
] as const;