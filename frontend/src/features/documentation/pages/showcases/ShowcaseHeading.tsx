/**
 * @file Page de documentation et showcase pour le composant Heading.
 * @module features/documentation/pages/showcase/ShowcaseHeading
 */

import { headingProps, headingUsageExample } from "../../data/Heading";
import { SHOWCASE } from "@/components/ui/Heading/Heading.types";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { Heading } from "@/components/ui";

const { renderPreview, generateCode} = createShowcaseFromProps(
  Heading,
  "Heading",
  headingProps,
  {
    defaultChildren: "Example"
  }
)

const ShowcaseHeading = () => {
  return (
    <DocPageContainer
      title="Heading"
      description="Composant **Heading** personnalisable avec différents niveaux sémantiques, couleurs et options d'alignement."
      props={headingProps}
      usageExample={headingUsageExample}
      params={SHOWCASE}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseHeading;