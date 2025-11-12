/**
 * @file Logique de rendu du showcase
 * @module features/documentation/data/Select/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { Select } from "@/components/ui";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { props } from "./props";

const PREVIEW_OPTIONS = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const { renderPreview, generateCode } = createShowcaseFromProps(
  Select,
  "Select",
  props,
  {
    additionalRenderProps: {
      options: PREVIEW_OPTIONS,
    },
    additionalCodeProps: {
      options: `options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }, { value: "3", label: "Option 3" }]}`,
    },
  }
);

export { renderPreview, generateCode };