/**
 * @file Page de documentation et showcase pour le composant Button
 * @module features/documentation/pages/showcase/ShowcaseButton
 * @description
 * Page interactive de documentation du composant Button.
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { SHOWCASE } from '@/components/ui/Button/Button.types';
import { buttonProps, buttonUsageExample, componentName, description, generateCode, renderPreview } from "../../data/Button";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { JSX } from "react";

/**
 * Page de showcase pour le composant Accordion
 * Délègue toute la logique métier aux fichiers data/Accordion/*
 */
const ShowcaseButton = (): JSX.Element => {
  return (
    <>
      <DocPageContainer
        title={componentName}
        description={description}
        usageExample={buttonUsageExample}
        params={SHOWCASE}
        renderPreview={renderPreview}
        generateCode={generateCode}
        props={buttonProps}
      />
    </>

  );
};

export default ShowcaseButton;