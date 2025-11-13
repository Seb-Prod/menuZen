/**
 * @file Logique de rendu du showcase
 * @module features/documentation/data/Input/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 */

import { Input } from "@/components/ui";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { props } from "./props";

const { renderPreview, generateCode } = createShowcaseFromProps(
    Input,
    "Input",
    props
);

export { renderPreview, generateCode };