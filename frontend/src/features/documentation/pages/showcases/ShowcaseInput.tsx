/**
 * @file Page de documentation et showcase pour le composant Input
 * @module features/documentation/pages/showcase/ShowcaseInput
 * @description
 * Page interactive de documentation du composant.
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { componentName, description, generateCode, props, usageExample, renderPreview } from "../../data/Input";
import { SHOWCASE } from "@/components/ui/Input";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

const ShowcaseLogo = () => {
  return (
    <DocPageContainer
      title={componentName}
      description={description}
      props={props}
      usageExample={usageExample}
      params={SHOWCASE}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseLogo;