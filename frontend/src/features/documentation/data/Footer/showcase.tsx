/**
 * @file Logique de rendu du showcase
 * @module features/documentation/data/Footer/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { Footer } from "@/components/layout";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { props } from "./props";

const { renderPreview, generateCode } = createShowcaseFromProps(
    Footer,
    "Footer",
    props,
    {
        additionalRenderProps: {
            email: "seb",
            gitHub: "seb",
            linkedIn: "seb"
        },
        additionalCodeProps: {
            email: `email="sebastien.drillaud@gmail.com`,
            gitHub: `GitHub="https://github.com/Seb-Prod"`,
            linkedIn: `linkedIn="https://www.linkedin.com/in/sébastien-drillaud-b68b3318a/"`
        }
    }
);

export { renderPreview, generateCode };