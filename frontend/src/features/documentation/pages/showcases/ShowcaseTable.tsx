/**
 * @file Page de documentation et showcase pour le composant Table.
 * @module pages/showcase/ShowcaseTable
 */

import Table from "@/components/ui/Table";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { tableProps, tableUsageExample } from "../../data/Table";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { TABLE_SHOWCASE_CONSTANTS } from "@/components/ui/Table/Table.types";

type ShowcaseCombo = Combination<typeof TABLE_SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel de la Table avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props de la Table.
 * @returns {JSX.Element} Instance de la Table avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <Table
    variant={combo.variant}
    align={combo.align}
    fullWidth={combo.fullWidth}
    size={combo.size}
    headers={["Produit", "Prix", "Stock"]}
    data={[
      ['Clavier', '49.99€', '15'],
      ['Souris', '29.99€', '8']
    ]}
  />
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props de la Table.
 * @returns {string} Code TSX formaté représentant la Table configurée.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.align !== "center" && `align="${combo.align}"`,
    combo.fullWidth && 'fullWidth',
    `headers={["Produit", "Prix", "Stock"]}`,
    `data={[
    ['Clavier', '49.99€', '15'],
    ['Souris', '29.99€', '8']
  ]}`
  ];

  return generateCodeString("Table", propExpressions);
};

/**
 * Composant ShowcaseTable - Page de documentation du composant Table.
 * 
 * Page de showcase complète présentant le composant Table avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-22
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour Table.
 * 
 * @see {@link Table}
 * @see {@link DocPageContainer}
 * @see {@link TABLE_SWOCASE_CONSTANTS}
 */
const ShowcaseTable = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Table"
      description="Composant **Table** réutilisable pour afficher des données tabulaires avec en-têtes personnalisables et différentes variantes de style."
      usageExample={tableUsageExample}
      params={TABLE_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={tableProps}
    />
  );
};

export default ShowcaseTable;