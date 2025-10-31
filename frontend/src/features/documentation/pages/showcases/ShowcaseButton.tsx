import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import Button from "@/components/ui/Button";
import { BUTTON_SHOWCASE_CONSTANTS } from '@/components/ui/Button/Button.types';
import { buttonProps, buttonUsageExample } from "../../data/Button";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { JSX } from "react";

// 🎉 Génération automatique depuis buttonProps !
const { renderPreview, generateCode } = createShowcaseFromProps(
  Button,
  "Button",
  buttonProps,
  {
    defaultChildren: "Example"
  }
);

const ShowcaseButton = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Button"
      description="Composant **Button** - Bouton personnalisable..."
      usageExample={buttonUsageExample}
      params={BUTTON_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={buttonProps}
    />
  );
};

export default ShowcaseButton;