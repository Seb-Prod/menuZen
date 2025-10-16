import Heading from "@/components/ui/Heading";
import { ShowcaseComponent } from "../doc-blocks";
import { headingProps, headingUsageExample } from "./data/Heading";
import type { Combination } from "../utils/showcaseHelpers";
import { HEADING_SHOWVASE_CONSTANTS } from "@/components/ui/Heading/Heading.types";
import type { JSX } from "react";

type HeadingShowcaseCombo = Combination<typeof HEADING_SHOWVASE_CONSTANTS>;

const renderHeadingPreview = (combo: HeadingShowcaseCombo): JSX.Element => (
  <Heading
    variant={combo.variant}
    color={combo.color}
    align={combo.align}
  >
    Exemple de titre
  </Heading>
)

const generateHeadignCode = (combo:HeadingShowcaseCombo): string =>{
  const propsArray = [
    combo.variant !== 1 && `variant={${combo.variant}}`,
    combo.color !== 'primary' && `color="${combo.color}"`,
    combo.align !== 'left' && `align="${combo.align}"`
  ].filter(Boolean)

  const props = propsArray.join('\n  ');

  if (props.length === 0){
    return `<Heading>Example de titre</Heading>`;
  }

  return `<Heading\n  ${props}\n>\n  Example de titre\n</Heading>`
}

const ShowcaseHeading = () => {
  return (
    <ShowcaseComponent
      title="Heading"
      description="Titres avec différentes variantes et couleurs"
      propsData={headingProps}
      usageExample={headingUsageExample}
      params={HEADING_SHOWVASE_CONSTANTS}
      renderPreview={renderHeadingPreview}
      generateCode={generateHeadignCode}
    />
  );
};

export default ShowcaseHeading;