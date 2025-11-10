/**
 * @file Page de documentation et showcase pour le composant AccordionItem.
 * @module pages/showcase/ShowcaseAccordionItem
 */


import type { JSX } from "react";
import { componentName, description, accordionItemProps, relatedComponents } from "../../data/AccordionItem";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { ShowcaseProps } from "../../types/types";

const ShowcaseAccordionSection = ({ onNavigate }: ShowcaseProps): JSX.Element => {
  return (
    <DocPageContainer
      title={componentName}
      description={description}
      props={accordionItemProps}
      links={relatedComponents}
      onNavigate={onNavigate}
    />
  );
};

export default ShowcaseAccordionSection;