/**
 * @file Page de documentation et showcase pour le composant Accordion.
 * @module pages/showcase/ShowcaseAccordion
 */

import { Accordion, AccordionItem, AccordionSection } from "@/components/ui/Accordion";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { SHOWCASE_CONSTANTS } from '@/components/ui/Accordion/Accordion.types';
import { accordionProps, accordionUsageExample } from "../../data/Accordion";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import type { ShowcaseProps } from "../../types/types";

type ShowcaseCombo = Combination<typeof SHOWCASE_CONSTANTS>;

const { renderPreview: baseRenderPreview, generateCode: baseGenerateCode } = createShowcaseFromProps(
  Accordion,
  "Accordion",
  accordionProps,
  { excludeFromCode: ["children"] }
);

const renderPreview = (combo: ShowcaseCombo): JSX.Element => {
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

const generateCode = (combo: ShowcaseCombo): string => {
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

/**
 * Page de documentation interactive pour le composant Accordion.
 */
const ShowcaseAccordion = ({ onNavigate }: ShowcaseProps): JSX.Element => {
  return (
    <DocPageContainer
      title="Accordion"
      description="Composant **Accordion** - Ce composant enveloppe l'ensemble de la structure et utilise le `AccordionContext.Provider` pour transmettre des propriétés de style globales (`variant`, `size`, `chevronIcon`, `chevronAlignment`) à tous ses descendants (`AccordionSection` ou `AccordionItem`), assurant une cohérence visuelle."
      params={SHOWCASE_CONSTANTS}
      usageExample={accordionUsageExample}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={accordionProps}
      links={["AccordionSection", "AccordionItem", "ChevronIcon"]}
      onNavigate={onNavigate}
    />
  );
};

export default ShowcaseAccordion;