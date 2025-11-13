/**
 * @file Page de documentation et showcase pour le composant Modal
 * @module features/documentation/pages/showcase/ShowcaseModal
 * @description
 * Page interactive de documentation du composant.
 * 
 * @version 3.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { componentName, description, props, usageExample } from "../../data/Modal";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

const ShowcaseMenuToggle = () => {
  return (
    <DocPageContainer
      title={componentName}
      description={description}
      props={props}
      usageExample={usageExample}
    />
  );
};

export default ShowcaseMenuToggle;