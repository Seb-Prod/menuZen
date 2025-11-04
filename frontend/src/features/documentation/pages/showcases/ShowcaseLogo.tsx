/**
 * @file Page de documentation et showcase pour le composant Logo.
 * @module features/documentation/pages/showcase/ShowcaseLogo
 */

import { componentName, logoDescription, logoProps, logoUsageExample } from "../../data/Logo";
import { SHOWCASE_CONSTANTS } from "@/components/ui/Logo/Logo.types";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { Logo } from "@/components/ui";

const { renderPreview, generateCode } = createShowcaseFromProps(
  Logo,
  componentName,
  logoProps,
  {
    // Pas de defaultChildren car Logo n'a pas de children
  }
);

const ShowcaseLogo = () => {
  return (
    <DocPageContainer
      title={componentName}
      description={logoDescription}
      props={logoProps}
      usageExample={logoUsageExample}
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseLogo;