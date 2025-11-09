/**
 * @file Page de documentation et showcase pour le composant Table.
 * @module pages/showcase/ShowcaseTable
 */

import Table from "@/components/ui/Table";
import type { JSX } from "react";
import { tableProps, tableUsageExample } from "../../data/Table";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { SHOWCASE } from "@/components/ui/Table/Table.types";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";

/**
 * Génération automatique des fonctions de showcase depuis tableProps.
 * Les données de démo (headers et data) sont injectées automatiquement.
 */
const { renderPreview, generateCode } = createShowcaseFromProps(
  Table,
  "Table",
  tableProps,
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
 * @see {@link TABLE_SHOWCASE_CONSTANTS}
 */
const ShowcaseTable = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Table"
      description="Composant **Table** réutilisable pour afficher des données tabulaires avec en-têtes personnalisables et différentes variantes de style."
      usageExample={tableUsageExample}
      params={SHOWCASE}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={tableProps}
    />
  );
};

export default ShowcaseTable;