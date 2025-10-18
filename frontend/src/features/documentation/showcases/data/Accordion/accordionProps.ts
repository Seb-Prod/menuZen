import { ACCORDION_VARIANTS, ACCORDION_SIZES, ACCORDION_TEXT_COLORS, ACCORDION_DEFAULTS } from "@/components/ui/Accordion/Accordion.types";
import { formatType } from "@/features/documentation/utils";

export default [
  // --- Propriété : variant ---
  {
    name: "variant",
    type: formatType(ACCORDION_VARIANTS),
    default: ACCORDION_DEFAULTS.variant,
    description: "**Schéma de couleur principal appliqué à l'ensemble du composant Accordion.** Cette variante est **transmise via le contexte** à tous les composants enfants (AccordionSection et AccordionButton) pour définir leur couleur par défaut. Un style de couleur différent peut être appliqué à un enfant spécifique en utilisant sa propriété d'override (ex: `buttonVariant` dans AccordionButton).",
    values: ACCORDION_VARIANTS 
  },

  // --- Propriété : size ---
  {
    name: "size",
    type: formatType(ACCORDION_SIZES),
    default: ACCORDION_DEFAULTS.size,
    description: "**Taille globale appliquée aux éléments interactifs de l'Accordéon.** Cette valeur est **transmise via le contexte** pour définir la taille par défaut des composants enfants comme `AccordionButton`. La taille d'un élément enfant spécifique peut être modifiée en utilisant sa propriété d'override (ex: `buttonSize` dans AccordionButton).",
    values: ACCORDION_SIZES 
  },

  // --- Propriété : textStyle ---
  {
    name: "textStyle",
    type: formatType(ACCORDION_TEXT_COLORS),
    default: ACCORDION_DEFAULTS.textStyle,
    description: "**Schéma de couleur appliqué au texte par défaut** de l'Accordéon et de ses éléments internes. Comme `variant` et `size`, ce style est **transmis par contexte** et peut être ignoré au niveau d'un composant enfant via une propriété spécifique (ex: `buttonTextStyle` dans AccordionButton).",
    values: ACCORDION_TEXT_COLORS 
  }
] as const;