import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import Button from "@/components/ui/Button";
import { BUTTON_SHOWCASE_CONSTANTS } from '@/components/ui/Button/Button.types';
import { buttonProps, buttonUsageExample } from "../../data/Button";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { JSX } from "react";
import type { ShowcaseProps } from "../../types/types";



// 🎉 Génération automatique depuis buttonProps !
const { renderPreview, generateCode } = createShowcaseFromProps(
  Button,
  "Button",
  buttonProps,
  {
    defaultChildren: "Example"
  }
);

const ShowcaseButton = ({onNavigate}:ShowcaseProps): JSX.Element => {
  return (
    <>
      <DocPageContainer
        title="Button"
        description="Composant **Button** - Bouton personnalisable..."
        usageExample={buttonUsageExample}
        params={BUTTON_SHOWCASE_CONSTANTS}
        renderPreview={renderPreview}
        generateCode={generateCode}
        props={buttonProps}
      />
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => onNavigate?.("Switch")}
          className="text-blue-500 underline"
        >
          Voir la documentation du composant Input
        </button>
      </div>
    </>

  );
};

export default ShowcaseButton;