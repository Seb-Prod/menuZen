/**
 * @file Logique de rendu du showcase
 * @module features/documentation/data/Modal/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { Modal } from "@/components/layout";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { props } from "./props";

const { renderPreview, generateCode } = createShowcaseFromProps(
    Modal,
    "Modal",
    props,
);

export { renderPreview, generateCode };