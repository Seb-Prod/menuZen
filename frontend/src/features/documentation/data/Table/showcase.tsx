/**
 * @file Logique de rendu du showcase
 * @module features/documentation/data/Table/showcase
 * @description
 * Fonctions renderPreview et generateCode spécifiques au composant
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

import { Table } from "@/components/ui";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { props } from "./props";

const { renderPreview, generateCode } = createShowcaseFromProps(
    Table,
    "Table",
    props,
    {
        additionalRenderProps: {
            headers: ["Produit", "Prix", "Stock"],
            data: [
                ['Clavier', '49.99€', '15'],
                ['Souris', '29.99€', '8']
            ]
        },
        additionalCodeProps: {
            headers: `headers={["Produit", "Prix", "Stock"]}`,
            data: `data={[
    ['Clavier', '49.99€', '15'],
    ['Souris', '29.99€', '8']
  ]}`
        }
    }
);

export { renderPreview, generateCode };