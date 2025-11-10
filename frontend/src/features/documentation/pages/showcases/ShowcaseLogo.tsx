/**
 * @file Page de documentation et showcase pour le composant Logo
 * @module features/documentation/pages/showcase/ShowcaseLogo
 * @description
 * Page interactive de documentation du composant.
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { componentName, description, generateCode, logoProps, logoUsageExample, renderPreview } from "../../data/Logo";
import { SHOWCASE } from "@/components/ui/Logo";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

const ShowcaseLogo = () => {
  return (
    <DocPageContainer
      title={componentName}
      description={description}
      props={logoProps}
      usageExample={logoUsageExample}
      params={SHOWCASE}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseLogo;