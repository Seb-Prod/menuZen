import type { JSX } from "react";
import { ShowcaseComponent } from "../components";
import Spinner from "@/components/ui/Spinner";
import { spinnerProps, spinnerUsageExample } from "./data/Spinner";
import type { Combination } from "../utils/showcaseHelpers";
import { SPINNER_SHOWCASE_CONSTANTS } from "@/components/ui/Spinner/Spinner.types";
import { generateCodeString } from "../utils";

type SpinnerShowcaseCombo = Combination<typeof SPINNER_SHOWCASE_CONSTANTS>;

const renderSpinnerPreview = (combo: SpinnerShowcaseCombo): JSX.Element => (
  <Spinner 
    variant={combo.variant} 
    size={combo.size} 
    align={combo.align}>
      Example
    </Spinner>
)

const generateSpinnerCode = (combo: SpinnerShowcaseCombo) : string =>{
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.align !== "center" && `align="${combo.align}"`
  ]

  return generateCodeString("Spinner", propExpressions, true);
}


const ShowcaseSpinner = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="Spinner"
      description="Indicateur de chargement rotatif avec différentes tailles et variantes de couleur pour signifier une attente."
      propsData={spinnerProps}
      usageExample={spinnerUsageExample}
      params={SPINNER_SHOWCASE_CONSTANTS}
      renderPreview={renderSpinnerPreview}
      generateCode={generateSpinnerCode}
    />
  );
}

export default ShowcaseSpinner;