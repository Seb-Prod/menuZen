import { SECTION_DEFAULTS } from "@/components/ui/Accordion/Accordion.types";

export default [
  // --- Propriété : label ---
  {
    name: "label",
    type: "string",
    default: SECTION_DEFAULTS.label,
    description:
      "**Texte affiché sur le bouton d’ouverture de la section.** Sert de titre principal pour identifier le contenu interne de la section.",
  },

  // --- Propriété : defaultOpen ---
  {
    name: "defaultOpen",
    type: "boolean",
    default: SECTION_DEFAULTS.defaultOpen,
    description:
      "**Indique si la section doit être ouverte par défaut lors du montage du composant.** Utile pour afficher certaines sections directement déployées à l’ouverture de la page.",
  },

  // --- Propriété : children ---
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description:
      "**Contenu interne de la section.** Généralement composé d’un ou plusieurs éléments `<AccordionItem />`, mais peut contenir tout type de contenu React.",
  },

  // --- Propriété : onClick ---
  {
    name: "onClick",
    type: "() => void",
    description:
      "**Callback optionnel exécuté lors du clic sur le label de la section.** Peut être utilisé pour déclencher une action spécifique ou synchroniser un état externe.",
  },
] as const;