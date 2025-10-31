/**
 * @file Page de documentation et showcase pour le composant AccordionSection.
 * @module pages/showcase/ShowcaseAccordionSection
 */


import type { JSX } from "react";
import { SHOWCASE_CONSTANTS } from '@/components/ui/Accordion/Accordion.types';
import { accordionProps } from "../../data/Accordion";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";


/**
 * Page de documentation interactive pour le composant AccordionSection.
 */
const ShowcaseAccordionSection = (): JSX.Element => {
  return (
    <DocPageContainer
      title="AccordionSection"
      description="Composant **AccordionSection** - Ce composant gère son propre état d'**ouverture/fermeture** et affiche le contenu uniquement lorsqu'il est ouvert."
      params={SHOWCASE_CONSTANTS}
      props={accordionProps}
    />
  );
};

export default ShowcaseAccordionSection;