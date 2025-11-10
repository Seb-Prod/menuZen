/**
 * @file Définition des propriétés du composant Accordion
 * @module features/documentation/data/Accordion/props
 * @description
 * Documentation des props pour le showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Accordion} pour l'implémentation du composant
 */

import { formatType } from "@/features/documentation/utils";
import { SHOWCASE, DEFAULTS } from "@/components/ui/Accordion/Accordion.types";
import type { PropInfo } from "@/features/documentation/types/types";

export const accordionProps: readonly PropInfo[] = [
  {
    name: "variant",
    type: formatType(SHOWCASE.variant),
    default: `"${DEFAULTS.variant}"`,
    description: "**Schéma de couleur** appliqué à l'ensemble du composant. Transmis via le contexte aux composants enfants (AccordionSection et AccordionItem).",
    required: false,
  },
  {
    name: "size",
    type: formatType(SHOWCASE.size),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille globale** des sections et des labels. Transmise via le contexte à tous les composants enfants.",
    required: false,
  },
  {
    name: "chevronIcon",
    type: formatType(SHOWCASE.chevronIcon),
    default: `"${DEFAULTS.chevronIcon}"`,
    description: "**Icône** utilisée pour indiquer l'état (ouvert/fermé) des sections. Transmise via le contexte.",
    required: false,
  },
  {
    name: "chevronAlignment",
    type: formatType(SHOWCASE.chevronAlignment),
    default: `"${DEFAULTS.chevronAlignment}"`,
    description: "**Alignement horizontal du chevron** dans le label de section. `near-label` place l'icône proche du texte, `edge` l'aligne à l'extrémité droite.",
    required: false,
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "**Contenu principal** de l'Accordion. Doit contenir un ou plusieurs composants `AccordionSection` avec des `AccordionItem`.",
    required: true,
  },
] as const;