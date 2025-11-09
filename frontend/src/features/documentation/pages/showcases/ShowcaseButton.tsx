/**
 * @file Page de documentation et showcase pour le composant Button.
 * @module pages/showcase/ShowcaseButton
 */

import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import Button from "@/components/ui/Button";
import { SHOWCASE } from '@/components/ui/Button/Button.types';
import { buttonProps, buttonUsageExample } from "../../data/Button";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { JSX } from "react";


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
    <>
      <DocPageContainer
        title="Button"
        description="Composant **Button** — Élément interactif personnalisable prenant en charge plusieurs variantes, tailles et apparences (`solid`, `outline`, `ghost`). Il assure cohérence visuelle et compatibilité avec toutes les propriétés natives d’un bouton HTML." usageExample={buttonUsageExample}
        params={SHOWCASE}
        renderPreview={renderPreview}
        generateCode={generateCode}
        props={buttonProps}
      />
    </>

  );
};

export default ShowcaseButton;