/**
 * @file Page de documentation et showcase pour le composant Button
 * @module features/documentation/pages/showcase/ShowcaseButton
 * @description
 * Page interactive de documentation du composant .
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { SHOWCASE } from '@/components/ui/Button/';
import { props, usageExample, componentName, description, generateCode, renderPreview } from "../../data/Button";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { JSX } from "react";

const ShowcaseButton = (): JSX.Element => {
  return (
    <>
      <DocPageContainer
        title={componentName}
        description={description}
        usageExample={usageExample}
        params={SHOWCASE}
        renderPreview={renderPreview}
        generateCode={generateCode}
        props={props}
      />
    </>

  );
};

export default ShowcaseButton;