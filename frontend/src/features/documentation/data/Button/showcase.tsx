/**
 * @file Logique de rendu du showcase Button
 * @module features/documentation/data/Button/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant Button
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { Button } from "@/components/ui";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { props } from "./props";

const { renderPreview, generateCode } = createShowcaseFromProps(
  Button,
  "Button",
  props,
  {
    defaultChildren: "Example"
  }
);

export { renderPreview, generateCode };