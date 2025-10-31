import { formatType } from "@/features/documentation/utils";
import { SHOWCASE_CONSTANTS, DEFAULTS } from "@/components/ui/Accordion/Accordion.types";

export default [
  // --- Propriété : variant ---
  {
    name: "variant",
    type: formatType(SHOWCASE_CONSTANTS.variant),
    default: DEFAULTS.variant,
    description:
      "**Schéma de couleur principal appliqué à l’ensemble du composant Accordion.** Cette variante est **transmise via le contexte** à tous les composants enfants (`AccordionSection` et `AccordionItem`) pour définir la couleur de leurs labels (non actifs).",
    values: SHOWCASE_CONSTANTS.variant,
  },

  // --- Propriété : size ---
  {
    name: "size",
    type: formatType(SHOWCASE_CONSTANTS.size),
    default: DEFAULTS.size,
    description:
      "**Taille globale des sections et des labels de l’Accordion.** Cette taille est **transmise via le contexte** à tous les composants enfants (`AccordionSection` et `AccordionItem`) pour définir leur dimension par défaut.",
    values: SHOWCASE_CONSTANTS.size,
  },

  // --- Propriété : chevronIcon ---
  {
    name: "chevronIcon",
    type: formatType(SHOWCASE_CONSTANTS.chevronIcon),
    default: DEFAULTS.chevronIcon,
    description:
      "**Icône utilisée pour indiquer l’état (ouvert/fermé) des sections de l’Accordion.** Ce type d’icône est **transmis via le contexte**.",
    values: SHOWCASE_CONSTANTS.chevronIcon,
  },

  // --- Propriété : chevronAlignment ---
  {
    name: "chevronAlignment",
    type: formatType(SHOWCASE_CONSTANTS.chevronAlignment),
    default: DEFAULTS.chevronAlignment,
    description:
     "**Définit l’alignement horizontal du chevron à l’intérieur du label de section.** Permet de choisir si l’icône du chevron est **proche du texte du label** ou **alignée à l’extrémité droite du conteneur**. Cette valeur est **transmise via le contexte**.",
    values: SHOWCASE_CONSTANTS.chevronAlignment,
  },

  // --- Propriété : children ---
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description:
      "**Contenu principal de l’Accordion.** Doit être composé d’un ou plusieurs composants `<AccordionSection />`, chacun contenant des éléments `<AccordionItem />`.",
  },
] as const;