/**
 * @file Page de documentation et showcase pour le composant Text.
 * @module pages/showcase/ShowcaseText
 */

import Text from "@/components/ui/Text";
import type { JSX } from "react";
import { textProps, textUsageExample } from "../../data/Text";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { SHOWCASE_CONSTANTS } from "@/components/ui/Text/Text.types";

const {renderPreview, generateCode} = createShowcaseFromProps(
  Text,
  "text",
  textProps
)

const ShowcaseText = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Text"
      description="Composant **Text** personnalisable avec différentes balises sémantiques, couleurs, tailles, poids et alignements."
      usageExample={textUsageExample}
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={textProps}
    />
  );
};

export default ShowcaseText;