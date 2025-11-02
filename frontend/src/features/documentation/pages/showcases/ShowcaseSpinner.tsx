/**
 * @file Page de documentation et showcase pour le composant Spinner.
 * @module pages/showcase/ShowcaseSpinner
 */

import Spinner from "@/components/ui/Spinner";
import type { JSX } from "react";
import { SHOWCASE_CONSTANTS } from "@/components/ui/Spinner/Spinner.types";
import { spinnerProps, spinnerUsageExample } from "../../data/Spinner";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";

const {renderPreview, generateCode} = createShowcaseFromProps(
  Spinner,
  "Spinner",
  spinnerProps
)

const ShowcaseSpinner = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Spinner"
      description="Composant **Spinner** est un indicateur de chargement rotatif avec différentes tailles, variantes de couleur et options d'alignement."
      usageExample={spinnerUsageExample}
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={spinnerProps}
    />
  );
};

export default ShowcaseSpinner;