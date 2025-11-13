/**
 * @file Logique de rendu du showcase
 * @module features/documentation/data/Spinner/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { Spinner } from "@/components/ui";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { props } from "./props";

const { renderPreview, generateCode } = createShowcaseFromProps(
    Spinner,
    "Spinner",
    props
);

export { renderPreview, generateCode };