import type { JSX } from "react";
import Text from "@/components/ui/Text";
import { ShowcaseComponent } from "../components";
import { textProps, textUsageExample } from "./data/Text";
import { TEXT_SHOWCASE_CONSTANTS } from "@/components/ui/Text/Text.types";
import type { Combination } from "../utils/showcaseHelpers";

type TextShowcaseCombo = Combination<typeof TEXT_SHOWCASE_CONSTANTS>;

const renderTextPreview = (combo: TextShowcaseCombo): JSX.Element => (
  <Text
    as={combo.as}
    color={combo.color}
    size={combo.size}
    weight={combo.weight}
    align={combo.align}
  >
    Example
  </Text>
);

const generateTextCode = (combo: TextShowcaseCombo): string => {
  const props = [
    `as="${combo.as}"`,
    `color="${combo.color}"`,
    `size="${combo.size}"`,
    `weight="${combo.weight}"`,
    `align="${combo.align}"`,
  ].join(' ');

  return `<Text ${props}>\n  Example\n</Text>`;
};

const ShowcaseText = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="Text"
      description="Texte avec toutes les options de balise, couleur, taille et poids."
      propsData={textProps}
      usageExample={textUsageExample}
      params={TEXT_SHOWCASE_CONSTANTS}
      renderPreview={renderTextPreview}
      generateCode={generateTextCode}
    />
  );
};

export default ShowcaseText;