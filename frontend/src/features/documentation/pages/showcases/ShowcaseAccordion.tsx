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
  accordionProps, 
  accordionUsageExample, 
  renderPreview, 
  generateCode,
  description,
  componentName,
  relatedComponents
} from "../../data/Accordion";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { ShowcaseProps } from "../../types/types";

/**
 * Page de showcase pour le composant Accordion
 * Délègue toute la logique métier aux fichiers data/Accordion/*
 */
const ShowcaseAccordion = ({ onNavigate }: ShowcaseProps): JSX.Element => {
  return (
    <DocPageContainer
      title={componentName}
      description={description}
      params={SHOWCASE}
      usageExample={accordionUsageExample}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={accordionProps}
      links={relatedComponents}
      onNavigate={onNavigate}
    />
  );
};

export default ShowcaseAccordion;