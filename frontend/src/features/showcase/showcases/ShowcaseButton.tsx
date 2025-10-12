import Button from "@/components/ui/Button";
import { ShowcaseComponent } from "../components";
import type { JSX } from "react";
import type { Combination } from "../utils/showcaseHelpers";
import { BUTTON_SHOWCASE_CONSTANTS } from '../../../components/ui/Button/Button.types';
import { buttonProps, buttonUsageExample } from "./data/Button";
import { generateCodeString } from "../utils";

type ButtonShowcaseCombo = Combination<typeof BUTTON_SHOWCASE_CONSTANTS>;

const renderButtonPreview = (combo: ButtonShowcaseCombo): JSX.Element => (
  <Button 
    variant={combo.variant} 
    size={combo.size}
    type={combo.type}
    fullWidth={combo.fullWidth}
    disabled={combo.disabled}
    align={combo.align}
  >
    Example
  </Button>
);

const generateButtonCode = (combo: ButtonShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.type !== "button" && `type="${combo.type}"`,
    combo.align !== "left" && `align="${combo.align}"`,
    combo.fullWidth && 'fullWidth',
    combo.disabled && 'disabled',
  ];

  return generateCodeString("Button", propExpressions, true);
};

const ShowcaseButton = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="Button"
      description="Boutons interactifs avec différentes tailles et variantes"
      propsData={buttonProps}
      usageExample={buttonUsageExample}
      params={BUTTON_SHOWCASE_CONSTANTS}
      renderPreview={renderButtonPreview}
      generateCode={generateButtonCode}
    />
  );
};

export default ShowcaseButton;