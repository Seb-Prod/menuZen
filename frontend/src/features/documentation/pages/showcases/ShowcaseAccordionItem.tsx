/**
 * @file Page de documentation et showcase pour le composant AccordionItem
 * @module features/documentation/pages/showcase/ShowcaseAccordionItem
 * @description
 * Page interactive de documentation du composant AccordionItem.
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import type { JSX } from "react";
import { componentName, description, props, relatedComponents } from "../../data/AccordionItem";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { ShowcaseProps } from "../../types/types";

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