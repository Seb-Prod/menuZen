/**
 * @file Logique de rendu du showcase
 * @module features/documentation/data/Accordion/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { Accordion, AccordionItem, AccordionSection, SHOWCASE } from "@/components/ui/Accordion";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { props } from "./props";
import { componentName } from "./config";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";

type ShowcaseCombo = Combination<typeof SHOWCASE>;

// Utilisation de la factory pour la base
const { 
  renderPreview: baseRenderPreview, 
  generateCode: baseGenerateCode 
} = createShowcaseFromProps(
  Accordion,
  componentName,
  props,
  { excludeFromCode: ["children"] }
);

/**
 * Rendu du preview avec le contenu réel de l'Accordion
 */
export const renderPreview = (combo: ShowcaseCombo): JSX.Element => {
  const baseElement = baseRenderPreview(combo);

  return (
    <Accordion {...baseElement.props}>
      <AccordionSection label="Section n°1">
        <AccordionItem label="Item n°1" isActive />
        <AccordionItem label="Item n°2" />
      </AccordionSection>
      <AccordionSection label="Section n°2">
        <AccordionItem label="Item n°1" />
      </AccordionSection>
    </Accordion>
  );
};

/**
 * Génération du code avec le contenu réel de l'Accordion
 */
export const generateCode = (combo: ShowcaseCombo): string => {
  const baseCode = baseGenerateCode(combo);
  const openingTag = baseCode.replace(/>.*<\/Accordion>$/s, '>');
  
  return `${openingTag}
  <AccordionSection label="Section n°1">
    <AccordionItem label="Item n°1" />
    <AccordionItem label="Item n°2" />
  </AccordionSection>
  <AccordionSection label="Section n°2">
    <AccordionItem label="Item n°1" />
  </AccordionSection>
</Accordion>`;
};