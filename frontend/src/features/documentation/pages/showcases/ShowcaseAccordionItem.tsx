/**
 * @file Page de documentation et showcase pour le composant AccordionSection.
 * @module pages/showcase/ShowcaseAccordionSection
 */


import type { JSX } from "react";
import { accordionSectionProps } from "../../data/Accordion";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";


/**
 * Page de documentation interactive pour le composant AccordionSection.
 */
const ShowcaseAccordionSection = (): JSX.Element => {
  return (
    <DocPageContainer
      title="AccordionItem"
      description="Composant **AccordionSection** - Gère son propre état d'**ouverture/fermeture** et affiche le contenu uniquement lorsqu'il est ouvert."
      props={accordionSectionProps}
    />
  );
};

export default ShowcaseAccordionSection;