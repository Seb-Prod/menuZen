/**
 * @file Page de documentation et showcase pour le composant Accordion
 * @module features/documentation/pages/showcase/ShowcaseAccordion
 * @description
 * Page interactive de documentation du composant Accordion.
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import type { JSX } from "react";
import { SHOWCASE } from '@/components/ui/Accordion/Accordion.types';
import { 
  props, 
  usageExample, 
  renderPreview, 
  generateCode,
  description,
  componentName,
  relatedComponents
} from "../../data/Accordion";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { ShowcaseProps } from "../../types/types";

const ShowcaseAccordion = ({ onNavigate }: ShowcaseProps): JSX.Element => {
  return (
    <DocPageContainer
      title={componentName}
      description={description}
      params={SHOWCASE}
      usageExample={usageExample}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={props}
      links={relatedComponents}
      onNavigate={onNavigate}
    />
  );
};

export default ShowcaseAccordion;