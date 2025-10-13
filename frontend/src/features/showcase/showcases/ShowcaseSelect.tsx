import Select from "@/components/ui/Select";
import { ShowcaseComponent } from "../components";
import type { JSX } from "react";
import type { Combination } from "../utils/showcaseHelpers";
import { SELECT_SHOWCASE_CONSTANTS } from '@/components/ui/Select/Select.types';
import { selectProps, selectUsageExample } from "./data/Select";
import { generateCodeString } from "../utils";

type SelectShowcaseCombo = Combination<typeof SELECT_SHOWCASE_CONSTANTS>;

const renderSelectPreview = (combo: SelectShowcaseCombo): JSX.Element => (
  <Select 
    variant={combo.variant}
    size={combo.size}
    align={combo.align}
    options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
  />
);

const generateSelectCode = (combo: SelectShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.align !== "left" && `align:"${combo.align}"`,
    `options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}`
  ];

  return generateCodeString("Select", propExpressions, false);
};

const ShowcaseSelect = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="Select"
      description="Une liste déroulante personnalisée et accessible qui supporte la navigation au clavier, la gestion des variantes de style, de la taille, et de l'alignement du menu."
      propsData={selectProps}
      usageExample={selectUsageExample}
      params={SELECT_SHOWCASE_CONSTANTS}
      renderPreview={renderSelectPreview}
      generateCode={generateSelectCode}
    />
  );
};

export default ShowcaseSelect;