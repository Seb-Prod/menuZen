/**
 * @file Page de documentation et showcase pour le composant Select.
 * @module pages/showcase/ShowcaseSelect
 */

import Select from "@/components/ui/Select";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { SHOWCASE_CONSTANTS } from '@/components/ui/Select/Select.types';
import { selectProps, selectUsageExample } from "../../data/Select";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer"; // Assurez-vous d'importer le DocPageContainer
import { createShowcaseFromProps } from "../../utils/showcaseFactory";

type SelectShowcaseCombo = Combination<typeof SHOWCASE_CONSTANTS>;

/**
 * Définit un jeu d'options minimal pour le rendu de la preview.
 * @constant
 */
const PREVIEW_OPTIONS = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const { renderPreview, generateCode} = createShowcaseFromProps(
  Select,
  "Select",
  selectProps,
  {
    additionalRenderProps: {
      options: PREVIEW_OPTIONS,
    },
    additionalCodeProps: {
      options: `options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }, { value: "3", label: "Option 3" }]}`,
    },
  }
)

const ShowcaseSelect = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Select"
      description="Composant **Select** est une liste déroulante personnalisée et accessible qui supporte la navigation au clavier, la gestion des variantes de style, de la taille, et de l'alignement du menu."
      usageExample={selectUsageExample}
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={selectProps}
    />
  );
};

export default ShowcaseSelect;