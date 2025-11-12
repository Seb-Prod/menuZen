/**
 * @file Page de documentation et showcase pour le composant Select
 * @module features/documentation/pages/showcase/ShowcaseSelect
 * @description
 * Page interactive de documentation du composant.
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { componentName, description, generateCode, props, usageExample, renderPreview } from "../../data/Select";
import { SHOWCASE } from "@/components/ui/MenuToggle";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

const ShowcaseMenuToggle = () => {
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

export default ShowcaseMenuToggle;