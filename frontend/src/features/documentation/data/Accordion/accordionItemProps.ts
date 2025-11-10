/**
 * @file Métadonnées des propriétés du composant AccordionItem pour la documentation
 * @module features/documentation/data/Accordion/AccordionItemProps
 * @description
 * Ce fichier définit les métadonnées de toutes les propriétés du composant AccordionItem.
 * 
 * @version 2.2.2
 * @since 2025-10-17
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link AccordionItem} pour l'implémentation du composant
 */

import { ITEM_DEFAULTS } from "@/components/ui/Accordion/Accordion.types";
import type { PropInfo } from "../../types/types";

/**
 * Liste des propriétés du composant AccordionItem avec leurs métadonnées.
 * 
 * @constant
 * @type {readonly PropInfo[]}
 */
export const accordionItemProps: readonly PropInfo[] = [
  {
    name: "label",
    type: "string",
    default: ITEM_DEFAULTS.label,
    description:
      "**Texte du lien ou du bouton à l’intérieur d’une section.** Représente une option, une page ou une action que l’utilisateur peut sélectionner.",
  },
  {
    name: "onClick",
    type: "() => void",
    description:
      "**Fonction appelée lors du clic sur l’item.** Peut être utilisée pour effectuer une navigation, une action de sélection ou une logique métier.",
  },
  {
    name: "isActive",
    type: "boolean",
    description:
      "**Indique si l’item est actuellement actif.** Utile pour mettre en évidence la page ou la route correspondant à l’élément (par exemple, dans un menu de navigation).",
  },
] as const;