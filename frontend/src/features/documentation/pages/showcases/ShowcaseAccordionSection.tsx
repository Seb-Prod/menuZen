/**
 * @file Page de documentation et showcase pour le composant AccordionSection
 * @module features/documentation/pages/showcase/ShowcaseAccordionSection
 * @description
 * Page interactive de documentation du composant AccordionSection.
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */


import type { JSX } from "react";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { ShowcaseProps } from "../../types/types";
import { description, props , componentName, relatedComponents} from "../../data/AccordionSection";

const ShowcaseAccordionSection = ({ onNavigate }: ShowcaseProps): JSX.Element => {
  return (
    <DocPageContainer
      title={componentName}
      description={description}
      props={props}
      links={relatedComponents}
      onNavigate={onNavigate}
    />
  );
};

export default ShowcaseAccordionSection;