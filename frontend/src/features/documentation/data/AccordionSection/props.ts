/**
 * @file Métadonnées des propriétés du composant
 * @module features/documentation/data/AccordionSection/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 2.2.2
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link AccordionSection} pour l'implémentation du composant
 */

import { SECTION_DEFAULTS } from "@/components/ui/Accordion/Accordion.types";
import type { PropInfo } from "../../types/types";

export const props : readonly PropInfo[] = [
  {
    name: "label",
    type: "string",
    default: SECTION_DEFAULTS.label,
    description:
      "**Texte affiché sur le bouton d’ouverture de la section.** Sert de titre principal pour identifier le contenu interne de la section.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: SECTION_DEFAULTS.defaultOpen,
    description:
      "**Indique si la section doit être ouverte par défaut lors du montage du composant.** Utile pour afficher certaines sections directement déployées à l’ouverture de la page.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description:
      "**Contenu interne de la section.** Généralement composé d’un ou plusieurs éléments `<AccordionItem />`, mais peut contenir tout type de contenu React.",
  },
  {
    name: "onClick",
    type: "() => void",
    description:
      "**Callback optionnel exécuté lors du clic sur le label de la section.** Peut être utilisé pour déclencher une action spécifique ou synchroniser un état externe.",
  },
] as const;